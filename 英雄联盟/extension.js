import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '英雄联盟',
        content(config, pack) {
            game.addPlayerX = (position, character, character2) => {
                const player = ui.create.player(ui.arena).addTempClass('start');
                player.getId();
                if (character) player.init(character, character2);
                game.players.splice(2, 0, player);
                game.sort();
                return player;
            };
            game.sort = function () {
                const players = game.players.filter(Boolean);
                const deads = game.dead.filter(Boolean);
                const allPlayers = deads.concat(players); //先移除players后面玩家会前移,再添加入dead需要同排序取前
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
                } //隐藏死亡角色
                playerx.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                if (playerx.includes(game.me) && playerx[0] != game.me) {
                    while (playerx[0] != game.me) {
                        const start = playerx.shift();
                        playerx.push(start);
                    }
                } //将玩家排至数组首位
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
                }); //修改dataset.position与seatNum
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
                }); //展示零号位手牌/修改previous/显示元素
                allPlayers.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                allPlayers.forEach((player, index, array) => {
                    player.previousSeat = array[index === 0 ? array.length - 1 : index - 1];
                    player.nextSeat = array[index === array.length - 1 ? 0 : index + 1];
                }); //修改previousSeat
                game.players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                return true;
            };
            lib.skill._tianlao_Music1 = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                silent: true,
                filter(event, player) {
                    return config.tianlaoling_backgroundMusic == '1';
                },
                content() {
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = ui.backgroundMusic.src = `extension/英雄联盟/audio/影流之镰.mp3`;
                },
            };
            lib.skill._tianlao_Music2 = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                silent: true,
                filter(event, player) {
                    return config.tianlaoling_backgroundMusic == '2';
                },
                content() {
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = ui.backgroundMusic.src = `extension/英雄联盟/audio/暗裔魔镰.mp3`;
                },
            };
            lib.skill._tianlao_Music3 = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                silent: true,
                filter(event, player) {
                    return config.tianlaoling_backgroundMusic == '3';
                },
                content() {
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = ui.backgroundMusic.src = `extension/英雄联盟/audio/music_shaandsha.mp3`;
                },
            };
            lib.skill._tianlao_Music4 = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                silent: true,
                filter(event, player) {
                    return config.tianlaoling_backgroundMusic == '4';
                },
                content() {
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = ui.backgroundMusic.src = `extension/英雄联盟/audio/陈致逸、HOYO-MiX - Dawn Winery Theme 晨曦酒庄.mp3`;
                },
            };
            lib.skill._tianlao_Music5 = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                silent: true,
                filter(event, player) {
                    return config.tianlaoling_backgroundMusic == '5';
                },
                content() {
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = ui.backgroundMusic.src = `extension/英雄联盟/audio/英雄联盟 - 新生.mp3`;
                },
            };
            lib.skill._tianlao_Music6 = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                silent: true,
                filter(event, player) {
                    return config.tianlaoling_backgroundMusic == '6';
                },
                content() {
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = ui.backgroundMusic.src = `extension/英雄联盟/audio/皎月bg.mp3`;
                },
            };
            lib.skill._tianlao_Music7 = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                silent: true,
                filter(event, player) {
                    return config.tianlaoling_backgroundMusic == '7';
                },
                content() {
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = ui.backgroundMusic.src = `extension/英雄联盟/audio/Rise And Fall (DJ版).mp3`;
                },
            };
        },
        precontent(LOLosx) {
            game.import('character', function () {
                const LOLosx = {
                    name: 'LOLosx', //武将包命名(必填)
                    connect: true, //该武将包是否可以联机(必填)
                    characterSort: {
                        LOLosx: {
                            LOLosx_nono: ['控枪练习(游玩需知)', '岩雀', '海盗船长'],
                            LOLosx_xin: ['圣灵行者', '暮光星灵', '锤石', '残月之肃', '扭曲树精', '死亡颂唱', 'xxlo1', 'xxlo2'],
                            LOLosx_long: ['怒炎龙', '玉林龙', '风暴龙', '巨岩龙', '金鳞龙'],
                            LOLosx_2345: ['圣枪游侠', '暗夜猎手', '戏命师烬', '虚空之女'],
                            LOLosx_su: ['岩雀', '荒漠屠夫', '沙漠死神', '奎桑提', '远古巫灵'],
                            LOLosx_xu: ['虚空之眼', '虚空恐惧', '虚空女皇', '虚空巨口', '虚空遁地', '虚空先知'],
                            LOLosx_kda: ['暗影之刺', '痛苦之拥', '九尾妖狐', '星籁歌姬', '虚空之女'],
                            LOLosx_du: ['瘟疫之源', '炼金术士', '魔蛇女妖'],
                            LOLosx_qi: ['机械先驱', '奥恩', '复仇之矛', '时间奇才', '魔装机神'],
                            LOLosx_noke: ['策士统领', '德莱文', '德莱厄斯', '沙漠玫瑰', '劲夫腕豪', '刀锋之舞'],
                            LOLosx_an: ['幽灵骑士', '铁铠冥魂', '血港鬼影', '破败之王', '破败王后'],
                            LOLosx_bing: ['冰晶凤凰', '冰霜女巫', '寒冰射手', '北地之铠'],
                            LOLosx_lei: ['唤潮鲛姬', '雷电法王', '雷暴之心', '不灭狂雷', '远古巫灵'],
                            LOLosx_fu: ['魔法猫咪', '牧魂人', '烈娜塔', '希尔科', '深海泰坦', '风之女', '时光尊者', '暮光之眼', '众星之子', '河流之王', '涤魂圣枪'],
                            LOLosx_anyi: ['暗裔剑魔', '暗裔之箭', '凯隐'],
                            LOLosx_ji: ['刀锋之意', '放逐之刃', '青钢影', '剑姬'],
                            LOLosx_qita: ['武器大师', '邪恶小法', '刀锋之影', '疾风剑豪', '纳尔', '解脱者', '爆破鬼才', '追风者永恩', '影流之主', '沙漠死神', '酒桶', '风女'],
                        },
                    },
                    character: {
                        风暴龙: ['male', 'wei', '5/10', ['风暴', '雷震'], []],
                        怒炎龙: ['male', 'shu', '2/12', ['怒炎', '不熄'], []],
                        金鳞龙: ['male', 'qun', '4/9', ['金鳞', '黄冠'], []],
                        巨岩龙: ['male', 'jin', '1/8', ['巨岩'], []],
                        玉林龙: ['male', 'wu', '3/14', ['玉林', '绿甲'], []],
                        '控枪练习(游玩需知)': ['male', 'wei', 3, ['无限火力', '月轮', '夜凝'], ['des:无名杀_英雄联盟扩展群(可加群联机)333903482<br>欢迎游玩、意见反馈']],
                        xxlo1: ['female', 'shu', 3, ['yurf', 'nilk'], []],
                        xxlo2: ['male', 'shu', '3/3/1', ['lkgl', 'yuih'], []],
                        扭曲树精: ['male', 'wu', 4, ['loluumn'], []],
                        圣灵行者: ['male', 'wei', 3, ['觉醒', '四圣'], []],
                        死亡颂唱: ['male', 'wu', 3, ['荒芜', '七魄'], []],
                        虚空先知: ['male', 'jin', 3, ['vigc', 'yuyj'], []],
                        锤石: ['male', 'wu', 4, ['hyso', 'lkbd'], []],
                        邪恶小法: ['male', 'wei', 3, ['hwmo', 'anji'], []],
                        武器大师: ['male', 'qun', 3, ['lmda', 'lmdaer', 'ujbi'], ['des:群友设计:']],
                        不羁之悦: ['female', 'wei', 3, ['喜色', '流转'], []],
                        风女: ['female', 'qun', 3, ['wwvler', '幻灭', 'wwvlsj'], []],
                        九尾妖狐: ['female', 'jin', 3, ['摄魂', '妖魅'], []],
                        残月之肃: ['male', 'wei', 3, ['月轮', '夜凝'], []],
                        星籁歌姬: ['female', 'jin', 3, ['赞歌', '魅音'], ['des:你就是大名鼎鼎的歌姬吧？']],
                        策士统领: ['male', 'shu', '4/6', ['uijp', 'hyxp'], []],
                        铁铠冥魂: ['male', 'wu', 4, ['yeyy', 'mkkd'], ['des:4']],
                        机械先驱: ['male', 'shu', '1/5', ['lolkeji', 'gexb'], ['des:加入光荣的进化把!']],
                        幽灵骑士: ['male', 'wu', 4, ['yzqi'], ['des:马神']],
                        解脱者: ['male', 'wei', 4, ['枷锁', 'pofa', '其道'], ['des:法术克星']],
                        北地之铠: ['female', 'wei', 4, ['冰甲', 'lkds'], ['des:肉,弃置']],
                        不灭狂雷: ['male', 'wei', 4, ['雷神', 'hwyy'], ['des:肉,闪电']],
                        希尔科: ['male', 'jin', 4, ['wwgl'], ['des:你被强化了!']],
                        虚空巨口: ['male', 'jin', 3, ['jiee', 'sibc'], ['des:射']],
                        纳尔: ['male', 'wei', 3, ['jinu', 'bmxk', 'naaa'], ['des:肉']],
                        深海泰坦: ['male', 'wu', '5/5/3', ['nixk', 'dchd'], ['des:肉,控制']],
                        破败之王: ['male', 'wu', '4/5', ['mozd', 'uihy'], []],
                        破败王后: ['female', 'wu', '2/4', ['shangshi', '破败'], ['des:数伊苏尔德小丑']],
                        青钢影: ['female', 'qun', 4, ['jkmi', 'gzsohgvi'], ['des:精准!']],
                        虚空恐惧: ['male', 'jin', 4, ['tyui'], ['des:恐惧大魔王']],
                        疾风剑豪: ['male', 'wei', 3, ['lpvj', 'jtxi', 'lhke'], ['des:快乐']],
                        血港鬼影: ['male', 'wu', 3, ['sijk', 'yzhy'], ['des:斩杀  发牌']],
                        雷电法王: ['male', 'wei', 3, ['aouu', 'fayb', 'jbgu'], []],
                        圣枪游侠: ['male', 'qun', 3, ['lmue', 'ufyi'], []],
                        追风者永恩: ['male', 'shu', 3, ['fgmoer', 'ulhx'], ['des:双刀,距离,翻面']],
                        凯隐: ['male', 'qun', 4, ['anyk'], []],
                        暗裔剑魔: ['male', 'shu', 4, ['xtvj', 'xtih'], []],
                        暗裔之箭: ['male', 'shu', 4, ['wjgs', 'mixb'], []],
                        爆破鬼才: ['male', 'shu', 4, ['tzdj', 'bcpo'], ['des:爆伤 脆皮']],
                        唤潮鲛姬: ['female', 'wei', 3, ['bolj', 'hjic'], []],
                        德莱文: ['male', 'shu', 3, ['fwfu', 'gvrf'], []],
                        德莱厄斯: ['male', 'shu', 4, ['xtnu', 'vjuar'], ['des:4']],
                        风之女: ['female', 'qun', 3, ['yufg', 'fglk'], []],
                        寒冰射手: ['female', 'wei', 3, ['bkgs', 'ykyj'], ['des:寒冰射手']],
                        影流之主: ['male', 'qun', 3, ['yklq', 'ffuf'], ['des:配合翻面角色']],
                        奥恩: ['male', 'shu', 4, ['muniuyi', 'drvu', '铸炼'], []],
                        冰霜女巫: ['female', 'wei', 3, ['hjyu', 'bkxb'], ['des:冰环']],
                        复仇之矛: ['female', 'wu', 3, ['uiyt', 'izyr'], []],
                        时间奇才: ['male', 'wu', 3, ['hvsu', 'lmqi', 'iryt'], []],
                        时光尊者: ['male', 'qun', 3, ['isxm', 'nivr', 'isxme'], []],
                        酒桶: ['male', 'qun', 3, ['醉狂', '畅饮'], []],
                        瘟疫之源: ['male', 'wu', 4, ['瘟疫', '毒首'], []],
                        炼金术士: ['male', 'wu', 4, ['衝流', '毒迹'], []],
                        魔装机神: ['male', 'shu', 4, ['jibw', 'rjjk'], ['des:试着用装备牌来组装出 机械之神吧!']],
                        戏命师烬: ['male', 'qun', 4, ['diyue', 'xpmu'], ['des:4']],
                        冰晶凤凰: ['female', 'wei', '1/3', ['vfbk', 'oldniepan'], []],
                        沙漠死神: ['male', 'qun', '4/5', ['汲魂', '死神'], ['des:后期']],
                        虚空女皇: ['female', 'jin', 4, ['sixiang', 'xuhl'], []],
                        刀锋之舞: ['female', 'shu', 3, ['relianhua', 'rejianwu', 'shunbu'], ['des:收割,刺客']],
                        虚空之眼: ['male', 'jin', 3, ['wajp', 'xufa'], ['des:瓦解  魔法']],
                        牧魂人: ['male', 'wu', 4, ['jtmuyi', 'fuuu'], []],
                        痛苦之拥: ['female', 'jin', 3, ['魅影', 'hryu'], ['hiddenSkill', 'des:控制, 待削弱']],
                        虚空遁地: ['male', 'jin', 4, ['potu', 'mdfu'], ['hiddenSkill', 'des:技能设计:？群友+']],
                        暮光之眼: ['male', 'jin', '3/3/2', ['qihe', 'qiheer', 'yuvf'], ['des:护盾,肉']],
                        众星之子: ['female', 'wu', 3, ['qiyr', 'jquu'], ['des:辅助、奶妈']],
                        虚空之女: ['female', 'jin', 3, ['xung', 'jbhx'], ['des:卡莎,成长性角色,后期拥有超高的伤害!']],
                        暗夜猎手: ['female', 'qun', 3, ['lpua', 'hvlq'], ['des:克制血多的角色']],
                        暗影之刺: ['female', 'jin', 3, ['寒影', 'chfwyi'], ['hiddenSkill']],
                        刀锋之影: ['male', 'wei', 3, ['ykxi', 'anua'], ['hiddenSkill']],
                        刀锋之意: ['female', 'shu', 4, ['icfgyi', 'dcvf', 'rfwu'], []],
                        沙漠玫瑰: ['female', 'shu', 3, ['klhx', 'lmyu'], ['des:莎弥拉']],
                        河流之王: ['male', 'wu', '4/4/1', ['qmhh', 'whyz'], ['des:塔姆:世界就是一条河流,而我是它的国王.']],
                        涤魂圣枪: ['female', 'qun', 3, ['hwwu', 'ueiu'], ['des:塞纳']],
                        雷暴之心: ['male', 'jin', 3, ['lwyb', 'pili'], ['des:凯南']],
                        劲夫腕豪: ['male', 'qun', 4, ['hsqr', 'hcqk'], []],
                        烈娜塔: ['female', 'jin', 4, ['逆命', '乱武'], ['des:技能设计:Rubace']],
                        海盗船长: ['male', 'wu', 4, ['dnlo', '火藥'], []],
                        炸药桶: ['male', 'wei', 3, ['炸药桶'], ['des:3']],
                        剑姬: ['female', 'wei', 4, ['lol_pozhan_ding', 'jtdz'], []],
                        魔法猫咪: ['female', 'wei', 3, ['yzmi', 'hyii'], ['des:混子']],
                        岩雀: ['female', 'shu', 3, ['yjtu', 'loui'], []],
                        远古巫灵: ['male', 'wei', 3, ['s2_aong', 's2_lolw'], []],
                        荒漠屠夫: ['male', 'qun', '4/6', ['s2_bcnu', 's2_fjgy'], []],
                        奎桑提: ['male', 'qun', 4, ['s2_jmrf', 's2_jmrfer', 's2_xtxk'], []],
                        贾克斯SP: ['male', 'jin', 4, ['灯炎', '武绝'], ['des:群友:飞翼SD5']],
                        岩嶂: ['none', 'shu', 2, ['岩嶂'], []],
                        魔蛇女妖: ['female', 'wu', 3, ['毒蛇', '石化'], []],
                        放逐之刃: ['female', 'wu', 4, ['lkfg', 'vufg', 'vufger', 'fglkwu'], []],
                        暮光星灵: ['female', 'wei', 3, ['fwxk', 'qpfa'], ["des:<现实带有孔洞,就好像..甜甜圈一样'"]],
                    },
                    translate: {
                        LOLosx_xin: '新!',
                        LOLosx_long: '巨龙降临!',
                        LOLosx_du: '毒',
                        LOLosx_ji: '四姬',
                        LOLosx_fu: '辅',
                        LOLosx_qi: '器',
                        LOLosx_yin: '阴',
                        LOLosx_anyi: '暗裔',
                        LOLosx_kda: 'KDA',
                        LOLosx_noke: '战',
                        LOLosx_xu: '虚',
                        LOLosx_su: '恕瑞玛',
                        LOLosx_lei: '雷',
                        LOLosx_bing: '冰',
                        LOLosx_an: '暗',
                        LOLosx_2345: '贰叁肆伍',
                        LOLosx_nono: '联机禁止!',
                        LOLosx_qita: '其他',
                        s2_jmrf: '坚忍',
                        s2_jmrf_info: '锁定技,若你的(体力值变化后为偶数/体力上限小于等于2),则(将你的护甲值改为1点/你造成的伤害具有<吸血>且改为2点).',
                        s2_jmrfer: '傲岸',
                        s2_jmrfer_info: '',
                        s2_xtxk: '血性',
                        s2_xtxk_info: '当你需要使用或打出牌、判定阶段,你可以-1点体力上限或横置,你摸两张牌并弃置你区域内的一张牌.',
                        s2_xtxker: '血性',
                        s2_bcnu: '暴怒',
                        s2_bcnu_info: '锁定技,准备阶段,你体力上限-1,若你已受伤则你横置/重置并摸1张牌,否则你体力上限+2并弃置一名其他角色与你各2张手牌.',
                        s2_fjgy: '翻滚',
                        s2_fjgy_info: '当你武将牌状态变化后,可视为你使用一张具有<吸血>的杀.',
                        s2_aong: '奥能',
                        s2_aong_info: '阶段技①,当你造成或受到伤害时,你可以令此伤害改为1点雷电伤害且你摸1张牌.',
                        s2_lolw: '落雷',
                        s2_lolw_info: '当你弃置牌后,你可以视为使用一张 ①无距离限制的【雷杀】或 ②【火攻】并摸1张牌.',
                        xxlo1: '逆羽 霞',
                        xxlo2: '幻翎 洛',
                        yurf: '羽刃',
                        yurf_info: '出牌阶段限一次,你可以展示并交给任意名角色各1张手牌(该牌称为<翎>其不能使用、打出、弃置)且视为对其各使用1张杀.',
                        ling2: '翎',
                        ling2_info: '11',
                        nilk: '逆翎',
                        nilk_info: '当你成为牌的目标时,你可以获得一名角色的所有<翎>若此次获得牌的数量＞2张,则对其造成2点伤害.',
                        lkgl: '翎光',
                        lkgl_info: '出牌阶段限一次,你可以展示1名角色的1张手牌(此牌称为<翎>其不能使用、打出、弃置),若该角色为你则你令一名角色回复1点体力.',
                        // lkgl_info:'出牌阶段限一次,你可以展示1名角色的1张手牌(此牌称为<翎>其不能使用、打出、弃置),若该角色为你则你令一名角色的护甲值改为X.(X为你<翎>的数量)',
                        yuih: '羽裳',
                        yuih_info: '结束阶段,若你翎数(为0/大于2),则你可以令一名角色获得额外的一个(出/摸)牌阶段.',
                        // yuih_info:'结束阶段,若你翎数(为0/大于2),则你可以令一名角色获得(额外的一个出牌阶段/你任意张<翎>).',
                        劫火: '劫火',
                        劫火_info: '你可以将一张牌当做火【杀】使用或打出,令所有角色非锁定技本回合失效.',
                        虚骸: '虚骸',
                        虚骸_info: '出牌阶段限一次,你可以获得一名角色一张牌,若你体力上限大于4,该角色可对你使用一张【杀】,否则你废除一个装备栏.',
                        灯炎: '灯炎',
                        灯炎_info: '限定技.当有角色进入濒死状态或废除所有装备栏时,你可以加一点体力上限,令其回复一点体力,你获得【劫火】.',
                        武绝: '武绝',
                        武绝_info: '转换技,锁定技.当距离你不大于1的角色成为【杀】的目标时,阴:你摸1张牌,若此【杀】为红色则多摸1张牌;阳:你可以使用一张【杀】.',
                        破败er: '破败er',
                        破败er_info: '',
                        loluumn: '树苗',
                        loluumn_info: '每名角色准备阶段,你可以摸1张牌,将你的一张牌展示并交给该角色,与之花色相同的牌本回合内:其不能使用并且弃置后你可以获得.',
                        loluumnsj: '归根',
                        loluumnsj_info: '',
                        loluumner: '捆绑',
                        loluumner_info: '',
                        loluumn2: '',
                        loluumn2_info: '',
                        远古巫灵: '远古巫灵',
                        荒漠屠夫: '荒漠屠夫',
                        奎桑提: '奎桑提',
                        贾克斯SP: '贾克斯SP',
                        扭曲树精: '扭曲树精',
                        圣灵行者: '圣灵行者',
                        觉醒: '觉醒',
                        觉醒_info: '每回合限一次,当你游戏开始、造成伤害时、 体力变化后,你可以:切换<四圣>中的效果 或  令当前效果『 』中数值改为 3 .(bug护甲能触发)',
                        四圣: '四圣',
                        四圣_info: '<font color=#00f>虎:你使用的杀额外造成『1』点雷电伤害.</font><br><font color=#0f0>龟:※你获得 1 点护甲并摸『1』张牌.</font><br><font color=#ff0>豹:你计算与其他角色的距离 -『1』;其他角色 计算与你的距离 +『1』.</font> <br><font color=#f00>凤:※你弃置1~2名角色至多『1』张牌.</font>',
                        虎: '虎',
                        虎_info: '',
                        龟: '龟',
                        龟_info: '',
                        豹: '豹',
                        豹_info: '',
                        豹3: '豹3',
                        豹3_info: '',
                        凤: '凤',
                        凤_info: '',
                        死亡颂唱: '死亡颂唱',
                        虚空先知: '虚空先知',
                        怨魂: '怨魂',
                        怨魂_info: '',
                        荒芜: '荒芜',
                        荒芜_info: '出牌阶段限一次,你可以令至多X名其他角色弃置X张牌,每少弃置1张牌便受到1点伤害;你以此法造成伤害后失去此技能. ',
                        七魄: '七魄',
                        七魄_info: '限定技,当你处于濒死或死亡时,你可以摸x张牌, 将至多7张牌置于武将牌上,称为<魄>并获得<亡灵>.<br>(X为体力值为0的角色数量+1',
                        亡灵: '亡灵',
                        亡灵_info: '锁定技,结束阶段,你弃置1张<魄>; 若你拥有<魄>,则你跳过弃牌阶段且不能:死亡与选择为目标, 否则你死亡.',
                        vigc: '至高',
                        vigc_info: '锁定技,牌堆顶的牌始终对你可见<br>且你可将其做手牌使用或打出.',
                        锤石: '锤石',
                        魂: '魂',
                        魂_info: '',
                        lkbd: '灵摆',
                        lkbd_info: '出牌阶段限1次,你可以获得(你下家/一名横置角色/你上家)的1张牌,你交给(你上家/任意一名角色/你下家)1张牌.',
                        hysoer: '魂锁-伤',
                        hysoer_info: '',
                        hysoyi: '魂锁-牌',
                        hysoyi_info: '',
                        hyso: '魂锁',
                        hyso_info: '每轮限3次,当一名其他角色使用基本牌或受到致命伤害时,若其横置:则你可以令其重置并防止之;否则令其横置.',
                        雷震: '雷震',
                        雷震_info: '锁定技,所有角色视为拥有先天八卦.',
                        不熄: '不熄',
                        不熄_info: '锁定技,当你进入濒死状态时,对所有其他角色造成1点伤害.',
                        绿甲: '绿甲',
                        绿甲_info: '当一名角色弃牌阶段的弃牌数大于1时,你回复1点体力.',
                        黄冠: '黄冠',
                        黄冠_info: '【群英冠冕】宝物:你的手牌上限+9;当你手牌数不于9时,你杀造成的伤害+9.',
                        anji: '暗祭',
                        anji_info: '每回合限一次,当一名角色受到伤害后,你可以随机获得一张锦囊牌.',
                        hwmo: '黑魔',
                        hwmo_info: '锁定技,你的锦囊牌无距离与手牌数限制.你每拥有5张手牌,你锦囊牌造成的伤害将进行1次翻倍',
                        ujbi: '闪避',
                        ujbi_info: '当你成为杀的目标时,你可以弃置一张牌令此杀无效.',
                        lmdaer: '连打',
                        lmdaer_info: '每当你累计失去3张牌后,复原此技能.<br>限定技,你可以视为使用或打出一张无次数限制的【杀】.',
                        lmda: '连打',
                        lmda_info: '',
                        醉狂: '醉狂',
                        醉狂_info: '锁定技,当你处于【酒状态】时,你每使用1张牌后,展示牌堆顶的1张牌,若你不能使用此牌则弃置之,否则你使用之.',
                        醉狂e: '醉狂e',
                        醉狂e_info: '锁定技,当你处于【酒状态】时,你每使用1张牌后,展示牌堆顶的1张牌,若你不能使用此牌则弃置之,否则你使用之.',
                        流转: '流转',
                        流转_info: '当你(成为杀的目标/造成伤害)时,你可以获得(1张杀/其1点护甲).',
                        lqvrer: 'lqvrer',
                        lqvrer_info: '',
                        不羁之悦: '不羁之悦',
                        风女: '风女',
                        wwvler: '伪装',
                        wwvler_info: '(游戏/出牌阶段)开始时,若你角色图为妮蔻:则你的角色图随机改为其他的,否则你获得1点护甲并对任意名角色造成1点伤害.',
                        wwvlsj: 'wwvlsj',
                        wwvlsj_info: '',
                        幻灭: '幻灭',
                        幻灭_info: '当你受到伤害后,若你角色图为妮蔻:则你隐匿,否则你摸1张牌并复原角色图.',
                        通碧: '通碧',
                        通碧_info: '锁定技,移去1枚绿,杀目标与你本回合手牌失效',
                        断魄: '断魄',
                        断魄_info: '锁定技,移去1枚红,杀具有吸血效果满血转护甲',
                        折镜: '折镜',
                        折镜_info: '锁定技,移去1枚白,杀结算2次',
                        荧焰: '荧焰',
                        荧焰_info: '锁定技,移去1枚蓝,杀可选1~3个目标',
                        红线: '红线',
                        红线_info: '你使用的属性杀不能被闪响应.',
                        蓝盾: '蓝盾',
                        蓝盾_info: '当你成为牌指定的目标时,你可以重铸1张牌.',
                        摄魂: '摄魂',
                        摄魂_info: '游戏开始时或一名角色死亡后,你获得1枚<魂>.<br> 当你获得其他角色的牌时,你可以获得其1点体力.',
                        摄魂e: '摄魂e',
                        摄魂e_info: '',
                        ycmwe: '智妖',
                        ycmwe_info: '结束阶段,你随机从牌堆获得一张锦囊牌. 你可以将1枚<魂>当乐不思蜀对一名角色使用,你获得其一张牌并令其获得<魅惑>.',
                        妖魅: '妖魅',
                        妖魅_info: '结束阶段,你随机从牌堆获得一张锦囊牌.<br> 你可以将1枚<魂>当乐不思蜀对一名角色使用,你获得其一张牌并令其获得<魅惑>.',
                        喜色: '喜色',
                        喜色_info: '每回合限1次,当你体力或手牌、护甲的数值增加后,你可以令一名角色摸1张牌.你的牌花色均视为♥️️.',
                        lv_skill: '通碧',
                        lv_skill_info: '锁定技,移去1枚绿,杀目标与你本回合手牌失效',
                        hs_skill: '断魄',
                        hs_skill_info: '锁定技,移去1枚红,杀具有吸血效果满血转护甲',
                        lj_skill: '荧焰',
                        lj_skill_info: '锁定技,移去1枚蓝,杀可选1~3个目标',
                        bd_skill: '折镜',
                        bd_skill_info: '锁定技,移去1枚白,杀结算2次',
                        月轮: '月轮',
                        月轮_info: "出牌阶段,你可以装备一种月石武器.<br>循环技,若你月标记少于2种则你获得1张杀与2枚:①'绿' ②'红'③'蓝>④'白'.",
                        白: '白',
                        白_info: '',
                        绿: '绿',
                        绿_info: '',
                        红: '红',
                        红_info: '',
                        蓝: '蓝',
                        蓝_info: '',
                        夜凝: '夜凝',
                        夜凝_info: '出牌阶段限一次,你可以弃置1张手牌,你本回合:获得当前武器的技能 或 下一张杀不计次数.',
                        月轮e: '月轮',
                        月轮e_info: '',
                        邪恶小法: '邪恶小法',
                        武器大师: '武器大师',
                        '控枪练习(游玩需知)': '控枪练习(游玩需知)',
                        九尾妖狐: '九尾妖狐',
                        残月之肃: '残月之肃',
                        星籁歌姬: '星籁歌姬',
                        风暴龙: '风暴龙',
                        怒炎龙: '怒炎龙',
                        金鳞龙: '金鳞龙',
                        巨岩龙: '巨岩龙',
                        玉林龙: '玉林龙',
                        策士统领: '策士统领',
                        铁铠冥魂: '铁铠冥魂',
                        机械先驱: '机械先驱',
                        幽灵骑士: '幽灵骑士',
                        解脱者: '解脱者',
                        魔法猫咪: '魔法猫咪',
                        烈娜塔: '烈娜塔',
                        海盗船长: '海盗船长',
                        炸药桶: '炸药桶',
                        北地之铠: '北地之铠',
                        不灭狂雷: '不灭狂雷',
                        希尔科: '希尔科',
                        虚空巨口: '虚空巨口',
                        纳尔: '纳尔',
                        深海泰坦: '深海泰坦',
                        破败之王: '破败之王',
                        破败王后: '破败王后',
                        青钢影: '青钢影',
                        虚空恐惧: '虚空恐惧',
                        疾风剑豪: '疾风剑豪',
                        血港鬼影: '血港鬼影',
                        雷电法王: '雷电法王',
                        圣枪游侠: '圣枪游侠',
                        追风者永恩: '追风者永恩',
                        凯隐: '凯隐',
                        暗裔剑魔: '暗裔剑魔',
                        暗裔之箭: '暗裔之箭',
                        爆破鬼才: '爆破鬼才',
                        唤潮鲛姬: '唤潮鲛姬',
                        德莱文: '德莱文',
                        德莱厄斯: '德莱厄斯',
                        风之女: '风之女',
                        寒冰射手: '寒冰射手',
                        影流之主: '影流之主',
                        奥恩: '奥恩',
                        冰霜女巫: '冰霜女巫',
                        复仇之矛: '复仇之矛',
                        时间奇才: '时间奇才',
                        时光尊者: '时光尊者',
                        酒桶: '酒桶',
                        瘟疫之源: '瘟疫之源',
                        炼金术士: '炼金术士',
                        魔装机神: '魔装机神',
                        戏命师烬: '戏命师烬',
                        冰晶凤凰: '冰晶凤凰',
                        沙漠死神: '沙漠死神',
                        虚空女皇: '虚空女皇',
                        刀锋之舞: '刀锋之舞',
                        虚空之眼: '虚空之眼',
                        牧魂人: '牧魂人',
                        痛苦之拥: '痛苦之拥',
                        虚空遁地: '虚空遁地',
                        暮光之眼: '暮光之眼',
                        众星之子: '众星之子',
                        虚空之女: '虚空之女',
                        暗夜猎手: '暗夜猎手',
                        暗影之刺: '暗影之刺',
                        刀锋之影: '刀锋之影',
                        刀锋之意: '刀锋之意',
                        沙漠玫瑰: '沙漠玫瑰',
                        河流之王: '河流之王',
                        涤魂圣枪: '涤魂圣枪',
                        雷暴之心: '雷暴之心',
                        劲夫腕豪: '劲夫腕豪',
                        剑姬: '剑姬',
                        岩雀: '岩雀',
                        岩嶂: '岩嶂',
                        魔蛇女妖: '魔蛇女妖',
                        放逐之刃: '放逐之刃',
                        暮光星灵: '暮光星灵',
                        魅音: '魅音',
                        魅音_info: '限定技,出牌阶段,你可以令至多3名角色获得<魅惑>.',
                        金鳞: '金鳞',
                        金鳞_info: '锁定技,你的手牌始终最多.',
                        巨岩: '巨岩',
                        巨岩_info: '锁定技,你防止不为2点的伤害.',
                        风暴: '风暴',
                        风暴_info: '每当判定结果为♠️️时,你对任意名角色造成1点雷电伤害.',
                        '风暴!': '风暴!',
                        '风暴!_info': '',
                        玉林: '玉林',
                        玉林_info: '锁定技,你可以获得所有角色弃置的牌.',
                        怒炎: '怒炎',
                        怒炎_info: '锁定技,循环技,所有角色造成非属性伤害时,改为火焰你①摸1张牌  ②回复1点体力.',
                        nzry_fanghai_1: '怒',
                        nzry_fanghai_1_info: '',
                        nzry_fanghai_2: '炎',
                        nzry_fanghai_2_info: '',
                        vjgeyi: 'vjgeyi',
                        vjgeyi_info: '',
                        vjgeer: '赞歌',
                        vjgeer_info: '锁定技,直到歌姬的回合开始,你红色基本牌:伤害与回复+1,使用后摸1张牌.',
                        vjge: '赞歌',
                        vjge_info: '出牌阶段限一次,你可以弃置x张牌,令x名角色: 直到你的回合开始,其红色基本牌:伤害与回复+1,使用或打出时摸1张牌.',
                        vjgesj: 'vjgesj',
                        vjgesj_info: '',
                        赞歌: '赞歌',
                        赞歌_info: '出牌阶段限一次,你可以交给任意名角色各1张手牌,直到你的回合开始, 其红色基本牌:伤害与回复+1,使用或打出时摸1张牌.',
                        111: '111',
                        2222: '2222',
                        uijp: '视界',
                        uijp_info: '出牌阶段限一次,你可以观看一名角色的手牌并展示其中一张,令其选择一项:1.将此牌交给你.2.使用此牌.',
                        hyxp: '魂屑',
                        hyxp_info: '当一名其他角色进入濒死状态时,你可以回复1点体力或获得其1张牌.',
                        mkhy: '冥魂',
                        mkhy_info: '一名角色死亡后,你可以从弃牌堆获得一张黑色牌.',
                        mkkd: '冥铠',
                        mkkd_info: '每轮限1次,当你使用黑色装备牌后,你可以获得 2点护甲或 一名其他角色的一张牌.',
                        yeyy: '夜陨',
                        yeyy_info: '每阶段限1次,当你成为黑色牌的(使用者/目标)时,你可以令此牌(结算两次/对你无效).',
                        qpfa: '窃法',
                        qpfa_info: '出牌阶段,你可以将一张手牌与弃牌堆中的一张锦囊牌交换(此牌不得是你以此法交换过的牌).',
                        fwxk: '飞星',
                        fwxk_info: '出牌阶段限一次,你可以选择两名角色各一张牌,弃置之,若这两张牌花色相同,则对你选择的第X个角色造成X点伤害(X为1或2).',
                        lolkeji: '科技 ',
                        lolkeji_info: '锁定技,你的武器与防具牌无数量上限,超量转换.你的手牌上限+3.',
                        ljkder: '蓝盾',
                        ljkder_info: '当你成为牌指定的目标时,你可以重铸1张牌.',
                        hsxmyi: '红线',
                        hsxmyi_info: '',
                        gexb: '革新',
                        gexb_info: '当一名角色进入濒死状态时,你可以令其回复2点体力,体力上限-2并选择装备1个【海克斯科技】.',
                        yzqier: 'yzqier',
                        yzqier_info: '',
                        yzqi: '幽骑',
                        yzqi_info: '你可以将场上的一张(-/+)马,当一张无次数限制的(杀/闪)使用. 若你没有马,则你装备随机一马.',
                        yzqisj: 'yzqisj',
                        yzqisj_info: '222',
                        yzqisi: 'yzqisi',
                        yzqisi_info: '',
                        pofaer: 'pofaer',
                        pofaer_info: '',
                        其道: '其道',
                        其道_info: '每轮限一次,当你武将牌重置后,你可以获得一名其他角色的技能直到你回合结束.',
                        solmer: 'solmer',
                        solmer_info: '',
                        pofa: '破法',
                        pofa_info: '你可以将一名角色的一张手牌当【无懈可击】使用,若此牌:为基本牌,则你失去1点体力,否则你获得1点护甲.',
                        枷锁: '枷锁',
                        枷锁_info: '游戏开始时,你横置武将牌.出牌阶段限1次,你可以视为使用一张铁索连环.',
                        逆命: '逆命',
                        逆命_info: '每轮限一次,当一名角色进入濒死状态时,你可令其将体力回复至2点, 于当前回合结束后执行一个额外回合;此额外回合结束后,若此回合内没有角色死亡,则其死亡.',
                        nimker: 'nimker',
                        nimker_info: '快死了',
                        nimkyi: 'nimkyi',
                        nimkyi_info: '',
                        nimksi: 'nimksi',
                        nimksi_info: '',
                        vaycyi: 'vaycyi',
                        vaycyi_info: '横置',
                        vaycer: 'vaycer',
                        vaycer_info: '死亡',
                        vaycsj: 'vaycsj',
                        vaycsj_info: '',
                        炸药桶: '炸药桶',
                        炸药桶_info: '(视为一名体力值为3无回合/濒死状态的角色: 锁定技,你始终横置并且死亡后,对相邻的角色造成1点火焰伤害;每轮开始时,你失去1点体力).',
                        vaycsi: 'vaycsi',
                        vaycsi_info: '',
                        dnlo: '掉落',
                        dnlo_info: '当一名其他角色死亡时,你可以从弃牌堆中获得一张【桃】或【酒】.',
                        vaycwu: '跳回合',
                        vaycwu_info: '',
                        vayclq: 'vayclq',
                        vayclq_info: '',
                        火藥: '火藥',
                        火藥_info: '出牌阶段限2次,你可以将1张牌,置于一名角色上家位置称为<桶> (视为一名体力值为3无回合/濒死状态的角色: 锁定技,你始终横置并且死亡后,对相邻的角色造成1点火焰伤害;每轮开始时,你失去1点体力).',
                        rejianwu: '剑舞',
                        rejianwu_info: '出牌阶段限一次,你可以横置或重置; 每当你(横置 / 重置)后,你( 对相邻的所有角色造成1点伤害 / 回复1点体力 ).  ',
                        relianhua: '莲华',
                        relianhua_info: '当其他角色死亡后,你可以复原你的所有技能与武将牌.',
                        shunbu: '瞬步',
                        shunbu_info: '限定技,出牌阶段,你可以移动到任意两角色之间(下回合角色不变).',
                        shunbuyi: '瞬步',
                        shunbuyi_info: '令瞬步前下回合角色开始其回合',
                        shunbuzhuan: '瞬步',
                        shunbuzhuan_info: '',
                        qiyr: '祈愿',
                        qiyr_info: '出牌阶段限一次,你可以将一张牌当做【桃园结义】使用.',
                        jquu: '救赎',
                        jquu_info: '结束阶段,你可以失去1点体力获得两张桃,你可以交给任意角色两张手牌.',
                        冰甲: '冰甲',
                        冰甲_info: '锁定技,每当你的牌弃置后,你摸一张牌.',
                        lkds: '凛冬',
                        lkds_info: '当你受到 或 造成伤害后,你可以弃置其与你各一张牌.',
                        破败: '破败',
                        破败_info: '你可以将即将造成或受到的伤害改为失去体力.<br>当一名角色失去体力后,你可以弃置其一张牌',
                        lkdser: '凛冬',
                        lkdser_info: '当你造成伤害后,你可以令其与你各弃置一张牌.',
                        hwyy: '黑云',
                        hwyy_info: '准备阶段,你可以将一张黑色牌当做【闪电】对一名角色使用.',
                        雷神: '雷神',
                        雷神_info: '锁定技,当你每受到1点雷电伤害时,防止之,你体力上限+2并 且回复2点体力.',
                        ykyj: '鹰眼',
                        ykyj_info: '当你使用牌指定其他角色为目标后,你可以观看目标的手牌并弃置其中一张.',
                        bkgs: '冰弓',
                        bkgs_info: '锁定技,你获得<飞影>;若你没装备寒冰剑,则你获得并装备 寒冰剑.',
                        bczz: '暴走',
                        bczz_info: '锁定技,你获得<马术>;准备阶段,你体力上限-1,选择一项:获得一个额外的①摸牌阶段②出牌阶段).',
                        wwgl: '微光',
                        wwgl_info: '每轮开始时,你可以令一名角色(每名角色限一次)体力上限+2 并回复 2 点体力丶获得<马术>与<暴走>(锁定技,准备阶段,你体力上限-1,选择一项:获得一个额外的①摸牌阶段②出牌阶段).',
                        jiee: '饥饿',
                        jiee_info: '出牌阶段限一次,你可以将一张牌当做【兵粮寸断】对自己使用,摸3张牌. 若你的判定区内有牌,则你使用牌无次数和距离限制.',
                        gzsohgvi: '钩锁',
                        gzsohgvi_info: '每回合限一次,你可以(横置/重置)你的武将牌,视为使用或打出一张无距离次数限制的(闪/杀).',
                        jkmi: '精密',
                        jkmi_info: '锁定技,你使用的第偶数张杀:无视防具并且不能被闪响应、伤害+1且改为失去体力.',
                        hjyu: '寒狱',
                        hjyu_info: '当你(受到 / 造成)1点伤害后,你可以(弃置所有其他角色各一张牌 / 令其手牌上限-1 ).',
                        hjyuer: '寒狱',
                        hjyuer_info: '当你造成1点伤害后,你可以令其手牌上限-1.',
                        tyui: '吞噬',
                        tyui_info: '当你造成伤害时,你可以弃置1张牌,防止该伤害,改为令其体力上限-1,你体力上限+2并 回复2点体力.',
                        wujulicisu: '耀光',
                        wujulicisu_info: '下一张..杀无距离次数限制',
                        hgvigzso: '钩锁2',
                        hgvigzso_info: '1111',
                        ffuf: '分身',
                        ffuf_info: '出牌阶段开始时,你可以弃置至多两张牌令等量正面向上的角色翻面并摸3张牌.',
                        naaa: '吶啊',
                        naaa_info: '呐啊 限定技,出牌阶段开始时,你可以视为使用一张【 普通锦囊牌】.',
                        bmxk: '变形',
                        bmxk_info: '锁定技,当你武将牌横置后,你体力上限 +2,回复 2 点体力,复原<呐啊>;当你 武将牌重置后,你体力上限-2.',
                        jinu: '激怒',
                        jinu_info: '锁定技,当你进入濒死状态或翻面时,若 你武将牌未横置,则横置之.',
                        mmho: '火免',
                        mmho_info: '免疫火焰伤害.',
                        nixk: '溺幸',
                        nixk_info: '锁定技,你始终横置并且免疫火焰伤害.',
                        dchd: '倒海',
                        dchd_info: ' 当你造成伤害后,你可以令其与你翻面.',
                        lhke: '浪客',
                        lhke_info: '回合外,若你的下家不为当前回合角色,则你 可以与其交换位置视为你使用或打出 1张【闪】',
                        lpvj: '烈斩',
                        lpvj_info: '锁定技,你使用的 ♠️️ 【杀】不计入使用次数 并且造成伤害后,令其翻面.',
                        sibc: '死爆',
                        sibc_info: '当你死亡后,所有角色失去1点体力;本回合若有角色死亡重复此流程.',
                        ulhx: '雙華',
                        ulhx_info: '当你累计使用或打出两张基本牌后,你可摸两张 牌.出牌阶段你可以使用两张杀.',
                        fgmoer: '风殁',
                        fgmoer_info: '锁定技,你使用的 ♠️️牌无距离限制并且造成 伤害后令其翻面.',
                        jtxi: '絶息',
                        jtxi_info: ' 当一名角色翻面或位置变化后,你可摸 1张牌 并且你可对其使用 1张【杀).',
                        uhjk: '赏金',
                        uhjk_info: '一名角色  濒死,你可以额外令一名 角色摸两张牌.',
                        sijk: '死金 ',
                        sijk_info: '回合外,当你需要使用或打出1张基本牌时, 你可以摸 1 张牌;若为桃,则你可以额外令一名 角色摸两张牌.',
                        yzhy: '幽魂',
                        yzhy_info: ' 其他角色回合结束时,若其体力值为1,则你可 以对其使用一张杀且此杀造成的伤害+999.',
                        mozd: '魔灾',
                        mozd_info: '本局游戏始终执行【破败之咒】:每轮开始时,随机令一名角色失去1点体力.',
                        uihy: '蝕魂',
                        uihy_info: '当一名角色(死亡/失去体力)后,你可以(获得其技能直到你回合结束/摸X张牌).(X为其已损体力值且最大为5)',
                        uihyyi: '蝕魂1',
                        uihyyi_info: '当—名角色(死亡)后,你可以回复1点体力',
                        aouu: '奥術',
                        aouu_info: '当你使用一张锦囊牌后,你可以进行判定,若 结果为:♠️️,则令一名角色受到 1点雷电伤害; ♣️️,则你获得之.',
                        fayb: '法印 ',
                        fayb_info: '你可以将一张黑色牌当铁索连环使用.',
                        jbgu: '禁锢',
                        jbgu_info: ' 出牌阶段限一次,你可以将一张手牌当 乐不思蜀 对 已横置的角色 使用.',
                        lmue: '连射',
                        lmue_info: " 当你使用或打出一张基本牌后,可以进行判定,若结果为:(黑 / 红)色,则本回合你获得('咆哮' /<武圣< ).",
                        ufyi: '圣遗 ',
                        ufyi_info: '当一张红色判定牌生效后,你可以获得之.',
                        ufyier: '圣遗2',
                        ufyier_info: ' 当红色牌因弃置、判定进入弃牌堆时,若不为你弃置的,则你可以获得其中一张.',
                        ufyisj: '圣遗3',
                        ufyisj_info: '当红色牌因弃置、判定进入弃牌堆时,若不为你弃置的,则你可以获得之.',
                        molm: '魔镰',
                        molm_info: '出牌阶段,你可以弃置一张红色牌,获得并装备【贯石斧】.',
                        xixt: '吸血',
                        xixt_info: '',
                        uixt: '嗜血',
                        uixt_info: ':锁定技,每当你(造成1点伤害 / 体力变化)后,你(回复1点体力 / 你摸1张牌).',
                        anyk: '暗影 ',
                        anyk_info: '觉醒技,当任意一名角色进入濒死状态时, 令你武将牌变为【影流之镰】或【暗裔魔镰】,你获得三张牌.',
                        ltyker: '掠影',
                        ltyker_info: '你可以获得所有角色弃置或判定、无效的所有黑色牌. ',
                        ltyksj: '掠影',
                        ltyksj_info: '掠影:你可以获得所有角色弃置或判定、无效的所有黑色牌. ',
                        ltyk: '掠影 ',
                        ltyk_info: '你可以获得所有角色弃置或判定、无效的所有黑色牌. ',
                        hvlqer: '回流2',
                        hvlqer_info: ' 每当你失去 1 张闪后,你可以选择1名角色, 视为对其使用 1 张杀.',
                        ying1: 'ying1',
                        ying1_info: '',
                        ying2: 'ying2',
                        ying2_info: '111',
                        hvlq: '回流',
                        hvlq_info: ' 每当你失去【闪】后,你可以选择1名角色, 视为对其使用 1 张杀.',
                        vjua: '斩杀',
                        vjua_info: '【杀】伤害+999',
                        mixb: '觅心',
                        mixb_info: '锁定技,你使用 ♥️️与♠️️【杀】不能被闪响应并且你回复1点体力.',
                        mixber: '觅心',
                        mixber_info: '锁定技, 你使用 ♥️️与♠️️【杀】不能被闪响应并且你回复1点体力.',
                        jx1: ' +',
                        jx1_info: '',
                        wjgs: '挽弓',
                        wjgs_info: '你可以跳过出牌与弃牌阶段,令你使用的下一张【杀】攻击范围与伤害+1.',
                        jx11: '挽弓',
                        jx11_info: '',
                        ycgl: 'Q1',
                        ycgl_info: '使用基本牌后下一张杀无距离次数限制',
                        xtdc: '血道   ',
                        xtdc_info: '一名角色的判定牌生效,红牌替换',
                        xtvj: '血战  ',
                        xtvj_info: '一名角色造成伤害后,你可以进行判定,若结果为:黑色.则其须用红色手牌与之交换; ♥️️,则置于你武将牌上,称为<血>.',
                        xtih: '血偿 ',
                        xtih_info: '出牌阶段限三次与你处于濒死状态时,你可以将1张‘血>当一张无次数限制的基本牌使用.',
                        xtiher: '不朽',
                        xtiher_info: '',
                        lmvj: '连斩',
                        lmvj_info: '',
                        xung: '虚能',
                        xung_info: '出牌阶段限一次,展示牌堆顶『3』张牌,然 后你可以:获得其中一张并且……',
                        xung21: '强化',
                        xung21_info: '',
                        jbhx: '进化',
                        jbhx_info: '根据你的情况强化<虚能>: 每使用过一张装备牌令『 』中数值+1; 使用过5张( 基本牌 / 锦囊牌),描述增加(获得其中所有杀且无次数限制 / 与距离限制.结束阶段,重复此流程).',
                        xungs: '法强',
                        xungs_info: '',
                        xungjs: '-动态强化-',
                        xungjs_info: '结束阶段,展示牌堆顶『X』张牌,然 后你可以:获得其中一张并且获得其中所有杀无距离限制.',
                        xunge: '攻击',
                        xunge_info: '',
                        xung233: '法',
                        xung233_info: '',
                        xungsha: '-攻速强化-',
                        xungsha_info: '',
                        tzdj: '投弹',
                        tzdj_info: '当你的牌因弃置而置入弃牌堆时,你可以将弃置牌交给一名角色,其受到1点火焰伤害.',
                        bcpo: '爆破',
                        bcpo_info: '出牌阶段,你可以弃置一张红色非基本牌,令一名其他角色弃置所有装备牌或受到1点火焰伤害.',
                        sixl1: '♣️️',
                        sixl1_info: '11111111111',
                        sixl2: '♠️️',
                        sixl2_info: '',
                        sixl3: '♦️️',
                        sixl3_info: '',
                        sixl4: '♥️️',
                        sixl4_info: '',
                        rjjk: '燃径',
                        rjjk_info: ' 结束阶段,你可以弃置任意张牌,对等量名角色造成1点火焰伤害.',
                        jibw: '機備',
                        jibw_info: ' 锁定技,若你的手牌数小于你装备区里的总牌数,你摸至与之相等.',
                        bolj: '波澜 ',
                        bolj_info: '若你弃牌阶段弃牌数大于1,则你可以令1名角色受到1点雷电伤害,在令1名角色回复1点体力.',
                        hjic: '唤潮',
                        hjic_info: '限定技,出牌阶段,你可以令至多三名角色获得<溺幸>锁定技,你始终横置并且免疫火焰伤害.',
                        sixiang: '四象',
                        sixiang_info: '每种花色限一次,你可以将一张牌当无次数限制的基本牌使用.',
                        gvrf: '归刃 ',
                        gvrf_info: '结束阶段或当你击杀一名角色后,你可以摸X张牌.(X 为本局你使用杀的次数)',
                        fwfu: '飞斧',
                        fwfu_info: '当你使用一张武器牌后,你可以令你使用的下一张杀:无距离次数限制且伤害+1.',
                        gvrfe: '归刃',
                        gvrfe_info: '',
                        gvrfs: '击杀!',
                        gvrfs_info: '',
                        vicj: '致残',
                        vicj_info: '锁定技,你回复体力时,判定X次若为黑色,则防止之.',
                        xtnu: '血怒',
                        xtnu_info: '当你( 造成伤害/使用杀指定目标 ) 后,你可以令目标角色获得( 2 / 1 )个<♥️️>.(若其<♥️️>:＞1其获得<致残>;＞2,<斩杀>伤害改为2点;＞=5,改为4点)',
                        xtnue: '血怒',
                        xtnue_info: '',
                        vjuar: '斬殺',
                        vjuar_info: ',限定技,出牌阶段,你可以对一名其他角色造成1点伤害. 若本回合内有角色死亡,则复原<斩杀>.',
                        'R!': 'R!',
                        'R!_info': '',
                        xunger: '-虚能强化-',
                        xunger_info: '出牌阶段限一次,展示牌堆顶『X』张牌,然 后你可以:获得其中一张并且获得其中所有杀且无次数限制',
                        fuuu: '圣水',
                        fuuu_info: '限定技,当一名角色死亡时,你可以令其满血复活.',
                        fglk: '风灵',
                        fglk_info: '每当你失去1张【闪】时,你可以令1名角色获得1点护甲、摸1张牌.',
                        igfg: '乘风',
                        igfg_info: '你计算与其他角色的距离-2.',
                        fgzu: '风阻',
                        fgzu_info: '你计算与其他角色的距离+1..',
                        yufg: '御风',
                        yufg_info: '一名角色回合开始时,你可以令其本回合计算其他角色的距离-2或+1.',
                        yklq: '影流',
                        yklq_info: '锁定技,所有角色武将牌背面改为【影】:当劫成为杀的(目标/使用者)时,影可以(将目标改为影/对劫指定的目标使用一张杀),影翻面.',
                        muniuyi: '工神  ',
                        muniuyi_info: '锁定技,你装备区里的装备牌获得【木牛流马】效果,直到离开你的装备区.',
                        muniu2: '装备库',
                        muniu2_info: '',
                        muniu3: 'muniu3',
                        muniu3_info: '',
                        muniu4: 'muniu4',
                        muniu4_info: '',
                        drvu: '锻铸',
                        drvu_info: '每轮开始时 或 出牌阶段,若你装备区内的牌数小于2,则你可以从牌堆随机使用2张装备牌.',
                        drvue: '锻铸',
                        drvue_info: '',
                        jmll: '寒',
                        jmll_info: '',
                        bkxb: '冻结',
                        bkxb_info: '当一名角色失去最后的手牌时,你可以令其翻面并回复1点体力.',
                        izyr: '仇怨',
                        izyr_info: '每当其他角色对你造成1点伤害后,你可以视为对其使用1张杀.',
                        uiyt: '誓约',
                        uiyt_info: '(游戏开始时/出牌阶段),你可以将一张牌当【黑矛】置入一名角色的武器格.',
                        hwmc: 'hwmc',
                        hwmc_info: '',
                        uiyte: '黑矛',
                        uiyte_info: '',
                        uiyts: '誓约 ',
                        uiyts_info: '令一名角色装备【黑矛】  ',
                        xuhl: '虚皇',
                        xuhl_info: '每当因弃置进入弃牌堆的牌花色达到4种时,你可以将手牌数摸至体力上限,复原<四象>、<虚皇>.',
                        lmqi: '炼器',
                        lmqi_info: '你可以将两张牌 改造为任意一张装备牌',
                        hvsu: '回溯',
                        hvsu_info: '每阶段限2次,在一张判定牌生效前,你可以令其重新判定.',
                        hvsue: '重来',
                        hvsue_info: '',
                        iryt: '穿越',
                        iryt_info: '限定技,一名角色回合结束时,你可以将游戏回合顺序改为由你开始.',
                        isxm: '重现',
                        isxm_info: '每阶段限一次,当你使用或打出一张非装备牌后, 你可以将之交给一名角色.',
                        nivr: '逆轉',
                        nivr_info: '限定技,一名角色回合结束时,你可以令本局游戏回合顺序按顺时针进行,直到你死亡.',
                        nivre: '逆轉',
                        nivre_info: '',
                        nivryi: '逆轉',
                        nivryi_info: '',
                        isxme: '重现',
                        isxme_info: '',
                        zvkl: '-醉狂-',
                        zvkl_info: '锁定技,当你处于【酒状态】时,你每使用1张牌后,展示牌堆顶的1张牌,若你不能使用此牌则弃置之,否则你使用之.',
                        zvklyi: '醉狂',
                        zvklyi_info: '锁定技,当你使用【酒】后,你展示牌堆顶的一张牌并使用之.重复此流程,直到你以此法展示的牌无法使用.',
                        zvkle: '醒酒',
                        zvkle_info: '',
                        畅饮: '畅饮',
                        畅饮_info: '你可以将武将牌从正面翻至背面,视为使用一张酒;<br>当你受到伤害后,你可以从背面翻至正面;<br>你使用的酒无次数限制.',
                        wfyi: '瘟疫',
                        wfyi_info: '锁定技,判定阶段,判定X次,每当为黑色,则你须弃置 1 张手牌,无则失去 1 点体力;当你造成伤害后,令其获得<瘟疫>.(X为瘟疫数量)',
                        wfyiyi: '传播瘟疫',
                        wfyiyi_info: '111',
                        瘟疫: '瘟疫',
                        瘟疫_info: '锁定技,判定阶段,判定X次,每当为黑色,则你须弃置 1 张手牌,无则失去 1 点体力;当你造成伤害后,令其获得<瘟疫>.(X为瘟疫数量)',
                        毒首: '毒首',
                        毒首_info: '每名角色回合开始时,若其拥有<瘟疫>则你可以摸1张牌,若为你改为摸X张.',
                        毒迹: '毒迹',
                        毒迹_info: '出牌阶段限一次,你可以令你和你下家获得<瘟疫>.',
                        衝流: '衝流',
                        衝流_info: '你可以跳过判定阶段,若存活人数大于2,则你与你上家交换位置并令其翻面.',
                        无限火力: '无限火力',
                        无限火力_info: '无限火力!!! <br><br>无名杀_英雄联盟扩展群(可加群联机)333903482<br>欢迎游玩、意见反馈',
                        wajp: '瓦解',
                        wajp_info: '出牌阶段限 3 次,你可以重铸一名角色的一张 牌;若本回合你令同一名角色重铸了 3 次且 X 为 3,则你可以对其造成 3 点伤害.( X 为本回合重铸卡牌的类别数)',
                        diyuyi: '低语1',
                        diyuyi_info: '',
                        diyue: '低语',
                        diyue_info: '锁定技,摸牌阶段,你摸四张牌; 每轮你只能使用四张手牌.',
                        diyus: '- 4  -',
                        diyus_info: '不能使用牌',
                        xpmu: '谢幕',
                        xpmu_info: '锁定技,每当你使用第四种花色的牌时,你令其他所有角色的所有牌与技能本回合失效 且本回合你下次造成的伤害翻倍.',
                        xpmue: '谢幕',
                        xpmue_info: '角色的所有牌与技能本回合失效.',
                        xryy: '眩晕',
                        xryy_info: '角色的所有手牌本回合失效.',
                        lv_skiller: '眩晕',
                        lv_skiller_info: '角色的所有手牌本回合失效.',
                        diyusi: '低语2',
                        diyusi_info: '2',
                        bcji: '暴击',
                        bcji_info: '伤害翻倍!',
                        wajpyi: ' △',
                        wajpyi_info: '3',
                        vfbk: '臻冰',
                        vfbk_info: '循环技,当你的牌被弃置后,你可以选择至多x名角色各:①摸2张牌 ②弃置2张牌③受到2点伤害.(x为你此次弃置牌的数量)',
                        wajpe: 'wajpe',
                        wajpe_info: '',
                        islq: '衝流',
                        islq_info: '跳过判定阶段',
                        qqqq: 'qqqq',
                        qqqq_info: 'qqqq',
                        汲魂: '汲魂',
                        汲魂_info: '当你使用杀指定目标后,你可以进行『1』次判定, 若结果每有1张(黑/红)色牌,你(对其造成1点伤害/回复1点体力).',
                        死神: '死神',
                        死神_info: '当一名角色死亡后,你可以:令『 』中数值与你体力上限+1,摸1张牌.',
                        yuyj: '虚空',
                        yuyj_info: '每轮限1次,每名角色回合开始时,你可以摸四张牌,将七张手牌置于牌堆顶.待定',
                        xufa: '虚法',
                        xufa_info: '每当 1 张锦囊牌被重铸后,你可摸1张牌;你的 手牌上限+X.( X 为本回合重铸卡牌的类别数)',
                        xufayi: '虚法1',
                        xufayi_info: '每当 1 张锦囊牌被重铸后,你可摸1张牌;你的 手牌上限+X.( X 为本回合重铸卡牌的类别数)',
                        '111_info': '11',
                        '2222_info': '2222',
                        jtmuer: '掘墓',
                        jtmuer_info: '(游戏开始时/一名角色死亡后)你获得3枚<魂>; 出牌阶段,你可以移去1枚<魂>,将弃牌堆中的1张非锦囊牌牌移动到1名角色对应位置.',
                        jtmuyi: '掘墓',
                        jtmuyi_info: '(游戏开始时/一名角色死亡后)你获得3枚<魂>; 出牌阶段,你可以移去1枚<魂>,将弃牌堆中的1张非锦囊牌牌移动到1名角色对应位置.',
                        xxx: 'xxx',
                        xxx_info: '11',
                        mwho: '魅惑',
                        mwho_info: '魅惑:锁定技,你不能使用或打出牌且非锁定技失效,直到你回合结束或受到伤害.',
                        魅影: '魅影',
                        魅影_info: '隐匿技,当你登场时,你可以令一名角色获得<魅惑>.',
                        ybni: 'ybni',
                        ybni_info: '',
                        hryu: '欢愉',
                        hryu_info: '出牌阶段,你可以弃置2张牌并对1名角色造成1点伤害,判定:(红/黑)色,你与其均(摸1张牌/隐匿); (红/黑)桃,你与其均(回复1点体力/获得<魅惑>).',
                        mdfu: '埋伏',
                        mdfu_info: '当你翻面后,若你武将牌背面向上,则你可以隐匿;<br>出牌阶段限一次,你可以弃置2张牌令一名其他角色与你同时选择一项:①令自己翻面②令对方翻面.',
                        potu: '破土',
                        potu_info: '隐匿技,当你登场时,你可以对一名角色造成1点伤害并复原你的武将牌.',
                        mdfuer: '埋伏中',
                        mdfuer_info: '当你翻面后,若你武将牌背面向上,则你可以隐匿;',
                        yuvf: '御阵',
                        yuvf_info: '你可以移去『  』枚<盾>发动相应效果: 『②』当一名角色需要使用或打出闪时,令其摸1张牌并展示,若此牌花色不为♠️️,则视为其使用或打出之. 『⑥』出牌阶段,令一名角色获得4点护甲.',
                        yuvfer: '御阵6',
                        yuvfer_info: '移去⑥出牌阶段,令一名角色获得4点护甲.',
                        qiheer: 'qiheer',
                        qiheer_info: '',
                        qihe: '气合',
                        qihe_info: ':(游戏/每轮)开始时,你摸(7/1)张牌,将(7/1)张牌转为(7/1)枚<盾>.',
                        xungeee: '攻',
                        xungeee_info: '',
                        lpua: '猎杀',
                        lpua_info: '锁定技,你使用【杀】指定的目标获得1 枚<殁>;每当有角色<殁<的总数为 3 的倍数时,其失去 其体力上限一半 的体力(向上取整).',
                        寒影: '寒影',
                        寒影_info: '隐匿技,当你登场时,你可以弃置至多2名其他角色共计2张牌.',
                        chfwyi: '苍绯',
                        chfwyi_info: '循环技,结束阶段,你可以将手牌调整至2张,你①隐匿②选择一名角色,对其造成2点伤害.',
                        chfwer: '苍绯',
                        chfwer_info: '循环技,结束阶段,你可以将手牌调整至2张,你②选择一名角色,对其造成2点伤害.',
                        ykxi: '影袭',
                        ykxi_info: ':隐匿技,当你登场时,你可以选择至多3名角色并获得其各1张牌,若其无牌则受到1点伤害.',
                        anua: '暗杀',
                        anua_info: '出牌阶段限1次,你可以弃置X张牌,视为你对X名其他角色使用1张杀,若造成伤害则你隐匿.      ',
                        anuaer: 'anuaer',
                        anuaer_info: '你可以隐匿',
                        klhx: '狂花',
                        klhx_info: '锁定技,每当你使用一张你未使用过的花色牌时,你摸一张牌并提升评分.(初始评分D)',
                        rfwu: '刃舞',
                        rfwu_info: ':当1名角色横置后,你可以对其使用1张杀. |',
                        dcvf: '刀阵',
                        dcvf_info: '(轮次 / 回合)技①,当你(造成 / 受到)伤害后,你可以将1张牌当铁索连环(使用 / 重铸 ).',
                        icfgyi: '朝锋',
                        icfgyi_info: ':锁定技,所有角色使用的杀被闪响应后,你获得1张杀;你手牌中的杀明置且不计入手牌数.',
                        lmyu: '炼狱',
                        lmyu_info: ':限S评分,你可以选择至多3名角色,视为对其使用一张具有<吸血>效果的火杀,复原<狂花>与评分.',
                        qmhh: '潜航',
                        qmhh_info: '出牌阶段限一次,你可以选择一名角色,令其翻面并移动到其他位置.(每名角色限1次)',
                        whyz: '王佑 ',
                        whyz_info: '当一名角色翻面后若其背面向上,则你可以令其不能被选择为目标,直到其回合开始.',
                        whyzer: '王佑 ',
                        whyzer_info: '不能被选择为目标,直到回合开始.',
                        whyzsj: '免疫',
                        whyzsj_info: '',
                        dcvfer: '刀阵(重铸)',
                        dcvfer_info: '重铸',
                        hwwu: '黑霧',
                        hwwu_info: ':锁定技,你的武器牌视为【兵粮寸断、南蛮入侵】;你的攻击范围与手牌上限+X.(X为你的黑色牌数量)',
                        ueiu: '赦除',
                        ueiu_info: ' :当你造成伤害时,你可以令其回复1点体力并判定:(红/黑)色,你令一名角色(回复1点体力/获得之).',
                        lwyb: '雷引',
                        lwyb_info: '锁定技,游戏开始时,将9张♠️️1-9点的雷杀与闪电洗入牌堆.<br>所有角色受到雷电伤害时,你令该伤害改为1点(若为你则改为获得1点护甲),你令一名角色判定.',
                        pili: '霹雳',
                        pili_info: ':所有角色的判定生效后,若结果为♠️️,你可以对其造成1点雷电伤害.',
                        lwkdyi: '雷铠',
                        lwkdyi_info: '锁定技,你受到的雷电伤害改为获得护甲.',
                        yblwyi: '雷煞',
                        yblwyi_info: '',
                        yblwer: '雷煞',
                        yblwer_info: '',
                        hsqrer: 'hsqrer',
                        hsqrer_info: '',
                        hcqk: '豪情',
                        hcqk_info: '锁定技,若你当前体力值小于等于(5/3/1),你视为拥有技能:(肉林/马术/酒池).',
                        hsqr: '轰拳',
                        hsqr_info: '当你使用酒后,你摸2张牌,你可以使用1张基本牌(无次数限制);你的武器牌视为【酒】.',
                        lol_pozhan_ding: '破绽',
                        lol_pozhan_ding_info: '出牌阶段限一次,你可以观看一名角色的手牌,令其中一张牌:始终展示且不能使用或打出, 每当其成为与该牌同花色牌的目标时,其失去1点体力.',
                        lol_pozhan_ding1: '破绽',
                        lol_pozhan_ding1_info: '',
                        yzmiyi: 'yzmiyi',
                        yzmiyi_info: '',
                        yzmier: 'yzmier',
                        yzmier_info: '',
                        yzmisj: 'yzmisj',
                        yzmisj_info: '',
                        yzmisi: 'yzmisi',
                        yzmisi_info: '',
                        yzmiwu: 'yzmiwu',
                        yzmiwu_info: '',
                        hyiier: 'hyiier',
                        hyiier_info: '',
                        hyii: '混吃',
                        hyii_info: '当一名角色使用【桃】或【酒】时,你可以令一名角色回复1点体力.',
                        yzmi: '悠米',
                        yzmi_info: '当你的任意阶段开始时 你可以跳过,令一名角色执行一个额外的该阶段.',
                        岩嶂: '岩嶂',
                        岩嶂_info: '一块石头',
                        loui: '落石',
                        loui_info: '当你的牌被弃置时,你可以将其扣置一名角色的上家位置,称为<岩>(无回合/濒死,体力值为 2的角色)',
                        yjtu: '岩脉 ',
                        yjtu_info: '出牌阶段限2次,你可以令一名其他角色与 其上或下家 交换位置(不能与你), 若其与<岩>交换位置,则其受到 1 点伤害.',
                        崩山: '崩山',
                        崩山_info: '出牌阶段限一次,你可以摧毁所有的<岩>,弃置一张牌.',
                        武圣: '武圣',
                        武圣_info: '将一张红色牌当杀使用或打出',
                        咆哮: '咆哮',
                        咆哮_info: '无限杀次数',
                        gvrf_dm: '杀',
                        gvrf_dm_info: '',
                        jtdz: '决斗',
                        jtdz_info: '出牌阶段限一次,一张手牌当决斗使用',
                        乱武: '乱武',
                        乱武_info: '限定技,出牌阶段,你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】,否则失去1点体力.',
                        毒蛇: '毒蛇',
                        毒蛇_info: '出牌阶段限1次,你可以弃置1张牌,令至多两名角色获得<瘟疫>.   你没有判定区与坐骑格.',
                        duueer: 'duueer',
                        duueer_info: '',
                        石化: '石化',
                        石化_info: '出牌阶段限一次,你可以选择任意名角色,令其失去1点体力并获得1点护甲.',
                        duuesj: '跳过判定阶段',
                        duuesj_info: '',
                        酒池: '酒池',
                        酒池_info: '将一张♠️️手牌当酒使用',
                        肉林: '肉林',
                        肉林_info: '锁定技.你对女性角色、女性角色对你使用【杀】时,都需连续使用两张【闪】才能抵消.',
                        lkfg: '灵风  ',
                        lkfg_info: "你可以将X张牌当一张无次数限制的【基本牌】使用或打出; 若X大于2或以此法使用的牌为【桃】,则目标翻面(X为你本轮发动'灵风'的次数).",
                        lkfgsi: 'lkfgsi',
                        lkfgsi_info: '',
                        lkfgsj: 'lkfgsj',
                        lkfgsj_info: '',
                        vufg: '逐锋',
                        vufg_info: '觉醒技,当本局游戏中翻面总次数达到6 时,<灵风>描述增加:X 变化后你摸1张牌.',
                        vufger: '锋 ',
                        vufger_info: '',
                        lkfger: '灵风',
                        lkfger_info: "你可以将X张牌当一张无次数限制的基本牌 使用或打出; 若X大于2或以此法使用的牌为【桃】,则目标翻面(X为你本轮发动'灵风'的次数).",
                        Q: 'Q',
                        Q_info: '',
                        fglkwu: 'fglkwu',
                        fglkwu_info: '',
                        铸炼: '铸炼',
                        铸炼_info: '出牌阶段限1次,你可以将两张 普通装备牌 融合为一张 强化装备牌.',
                    },
                    skill: {
                        s2_xtxk: {
                            group: ['s2_xtxker'],
                            audio: 'ext:英雄联盟/audio:5',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            content() {
                                'step 0';
                                player.chooseControl('-1点体力上限', '或横置', true).set('ai', function (event, player) { });
                                ('step 1');
                                if (result.control == '-1点体力上限') {
                                    if (player.maxHp == 3) {
                                        game.playAudio('../extension/英雄联盟/audio/要结束了.mp3');
                                        game.broadcastAll(player.node.avatar.setBackgroundImage('extension/英雄联盟/image/全盛姿态.jpg'));
                                    }
                                    if (player.hp == 7 && player.maxHp == 7) {
                                        player.hujia = 1;
                                    }
                                    if (player.hp == 5 && player.maxHp == 5) {
                                        player.hujia = 1;
                                    }
                                    if (player.hp == 3 && player.maxHp == 3) {
                                        player.hujia = 1;
                                    }
                                    player.loseMaxHp();
                                    player.draw(2);
                                    player.discardPlayerCard(true, player, 'hej');
                                }
                                if (result.control == '或横置') {
                                    if (player.isLinked()) {
                                        event.goto(0);
                                    } else {
                                        player.link();
                                        player.draw(2);
                                        player.discardPlayerCard(true, player, 'hej');
                                    }
                                }
                                ('step 2');
                                event.finish();
                                ('step 3');
                                player.link();
                                player.draw(2);
                                player.discardPlayerCard(true, player, 'hej');
                            },
                        },
                        s2_xtxker: {
                            audio: 'ext:英雄联盟/audio:5',
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseControl('-1点体力上限', '或横置', true).set('ai', function (event, player) { });
                                ('step 1');
                                if (result.control == '-1点体力上限') {
                                    if (player.maxHp == 3) {
                                        game.playAudio('../extension/英雄联盟/audio/要结束了.mp3');
                                        game.broadcastAll(player.node.avatar.setBackgroundImage('extension/英雄联盟/image/全盛姿态.jpg'));
                                    }
                                    if (player.hp == 7 && player.maxHp == 7) {
                                        player.hujia = 1;
                                    }
                                    if (player.hp == 5 && player.maxHp == 5) {
                                        player.hujia = 1;
                                    }
                                    if (player.hp == 3 && player.maxHp == 3) {
                                        player.hujia = 1;
                                    }
                                    player.loseMaxHp();
                                    player.draw(2);
                                    player.discardPlayerCard(true, player, 'hej');
                                }
                                if (result.control == '或横置') {
                                    if (player.isLinked()) {
                                        event.goto(0);
                                    } else {
                                        player.link();
                                        player.draw(2);
                                        player.discardPlayerCard(true, player, 'hej');
                                    }
                                }
                                ('step 2');
                                event.finish();
                                ('step 3');
                                player.link();
                                player.draw(2);
                                player.discardPlayerCard(true, player, 'hej');
                            },
                        },
                        s2_jmrf: {
                            group: ['s2_jmrfyi'],
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'recoverEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                // if(player.hujia>0){ event.finish(); };
                                'step 1';
                                if (player.hp == 0) {
                                    player.hujia = 1;
                                }
                                if (player.hp == 2) {
                                    player.hujia = 1;
                                }
                                if (player.hp == 4) {
                                    player.hujia = 1;
                                }
                                if (player.hp == 6) {
                                    player.hujia = 1;
                                }
                                if (player.hp == 8) {
                                    player.hujia = 1;
                                }
                                if (player.hp == 10) {
                                    player.hujia = 1;
                                }
                            },
                        },
                        s2_jmrfyi: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hujia == 0;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('s2_jmrfsj');
                            },
                        },
                        s2_jmrfsj: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                'step 1';
                                if (player.hp == 0) {
                                    player.hujia = 1;
                                }
                                if (player.hp == 2) {
                                    player.hujia = 1;
                                }
                                if (player.hp == 4) {
                                    player.hujia = 1;
                                }
                                if (player.hp == 6) {
                                    player.hujia = 1;
                                }
                                if (player.hp == 8) {
                                    player.hujia = 1;
                                }
                                if (player.hp == 10) {
                                    player.hujia = 1;
                                }
                                player.removeSkill('s2_jmrfsj');
                            },
                        },
                        s2_jmrfer: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                source: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.maxHp < 3 && event.card && event.parent.name != 's2_jmrfer';
                            },
                            // usable:1,
                            //   filter:function(event){  return  !event.hwmo&&(get.type(event.card,'trick')=='trick'); },
                            content() {
                                'step 0';
                                player.addTempSkill('xixt');
                                // trigger.num=2;
                                trigger.cancel();
                                trigger.player.damage(2);
                                //   player.removeSkill('xixt');
                                ('step 1');
                            },
                        },
                        s2_bcnu: {
                            audio: 'ext:英雄联盟/audio:5',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                //QQQ
                                player.loseMaxHp(1);
                                if (player.hp != player.maxHp) {
                                    player.draw();
                                    player.link();
                                } else {
                                    player.gainMaxHp(2);
                                    const result = await player.chooseTarget(1, true, '弃置一名其他角色与你各2张手牌').forResult();
                                    if (result.targets?.length) {
                                        await player.discardPlayerCard(2, true, result.targets[0], 'h');
                                        await player.chooseToDiscard(2, true, 'h');
                                    }
                                }
                            },
                        },
                        s2_fjgy: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                player: ['turnOverEnd', 'linkEnd', 'showCharacterEnd', 'hideCharacterEnd', 'removeCharacterEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('xixt');
                                ('step 1');
                                player.chooseUseTarget('sha', get.prompt('s2_fjgy'), '视为使用一张具有<吸血>【杀】');
                                ('step 2');
                                player.removeSkill('xixt');
                            },
                        },
                        s2_aong: {
                            audio: 'ext:英雄联盟/audio:5',
                            trigger: {
                                player: 'damageBegin4',
                                source: 'damageBegin',
                            },
                            usable: 1,
                            // forced:true,
                            filter(event, player) {
                                return event.parent.name != 's2_aong';
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                trigger.player.damage('thunder', 'nosource');
                                player.draw();
                            },
                        },
                        s2_lolw: {
                            trigger: {
                                player: 'discardEnd',
                            },
                            audio: 'ext:英雄联盟/audio:4',
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('雷杀', '火攻');
                                ('step 1');
                                if (result.control == '雷杀') {
                                    player.addTempSkill('wujulicisu');
                                    player.chooseUseTarget('sha', 'thunder', get.prompt('s2_lolw'), '视为使用一张【雷杀】');
                                } else {
                                    player.draw();
                                    player.chooseUseTarget(true, { name: 'huogong' }, get.prompt('s2_lolw'), '视为使用一张【火攻】');
                                }
                            },
                        },
                        劫火: {
                            enable: ['chooseToRespond', 'chooseToUse'],
                            usable: 1,
                            viewAs: {
                                name: 'sha',
                                nature: 'fire',
                            },
                            viewAsFilter(player) {
                                return player.countCards('hes') > 0;
                            },
                            filterCard: true,
                            position: 'hes',
                            prompt: '将一张牌当做 火【杀】使用或打出',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            precontent() {
                                game.countPlayer(function (current) {
                                    current.addTempSkill('fengyin');
                                });
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
                        虚骸: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.gainPlayerCard(target, 'he', true);
                                ('step 1');
                                if (player.maxHp <= 4) {
                                    player.chooseToDisable().ai = function (event, player, list) {
                                        if (list.includes('equip5')) return 'equip5';
                                        return list.randomGet();
                                    };
                                }
                                if (player.maxHp > 4) {
                                    target
                                        .chooseToUse({ name: 'sha' }, `虚骸:可以对${get.translation(player)}使用一张杀`)
                                        .set('targetRequired', true)
                                        .set('complexSelect', true)
                                        .set('filterTarget', function (card, player, target) {
                                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                            return lib.filter.filterTarget.apply(this, arguments);
                                        })
                                        .set('sourcex', player);
                                }
                            },
                            ai: {
                                order: 4,
                                expose: 0.2,
                                result: {
                                    target: -1,
                                    player(player, target) {
                                        if (target.countCards('h') <= 1 || !target.inRange(player)) return 1;
                                        if (player.hp <= 2) return -1;
                                        if (player.countCards('h', 'shan') == 0) return -1;
                                        return -0.5;
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                        灯炎: {
                            audio: 'pingxiang',
                            trigger: {
                                global: ['dying', 'disableEquipAfter'],
                            },
                            limited: true,
                            filter(event, player) {
                                return event.player.hp <= 0 || event.player.countDisabled() >= 5;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.awakenSkill('灯炎');
                                player.gainMaxHp();
                                // player.loseMaxHp();
                                ('step 1');
                                //trigger.player.chooseDrawRecover(2,true);
                                trigger.player.recover(1);
                                ('step 2');
                                player.addSkill('劫火');
                                //player.addSkill('xinjuejing');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        武绝: {
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && get.distance(player, event.target) <= 1;
                            },
                            forced: true,
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                name: '武绝',
                                content(storage, player) {
                                    if (player.storage.武绝 != true) {
                                        return '当前状态为#阳# 下次发动可以使用一张【杀】';
                                    }
                                    if (player.storage.武绝 == true) {
                                        return '当前状态为#阴# 下次发动将摸牌';
                                    }
                                },
                            },
                            content() {
                                'step 0';
                                player.changeZhuanhuanji('武绝');
                                if (player.storage.武绝 == true) {
                                    player.chooseToUse({ name: 'sha' }, false, '是否使用一张【杀】？');
                                } else {
                                    player.draw(get.color(trigger.card) == 'red' ? 2 : 1);
                                    if (get.color(trigger.card) == 'black') {
                                        player.chooseToDisable().ai = function (event, player, list) {
                                            if (list.includes('equip5')) return 'equip5';
                                            return list.randomGet();
                                        };
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (card.name == 'sha') return 1;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        yuih: {
                            trigger: {
                                player: ['phaseEnd'],
                            },
                            audio: 'ext:英雄联盟/audio:4',
                            forced: true,
                            filter(event, player) {
                                event.card = player.getCards('h', function (card) {
                                    return card.hasGaintag('ling2');
                                });
                                if (event.card.length > 2 || event.card.length == 0) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                event.card = player.getCards('h', function (card) {
                                    return card.hasGaintag('ling2');
                                });
                                if (event.card.length > 2) {
                                    player.chooseTarget(1, '令一名角色获得额外的一个摸牌阶段');
                                } else if (event.card.length == 0) {
                                    player.chooseTarget(1, '令一名角色获得额外的一个出牌阶段');
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    if (event.card.length > 2) {
                                        var next = result.targets[0].phaseDraw();
                                        event.next.remove(next);
                                        trigger.next.push(next);
                                    } else if (event.card.length == 0) {
                                        var next = result.targets[0].phaseUse();
                                        event.next.remove(next);
                                        trigger.next.push(next);
                                    }
                                }
                                ('step 2');
                                ('step 3');
                            },
                        },
                        lkgl: {
                            audio: 'ext:英雄联盟/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                // target.chooseCard(1,true);
                                player.choosePlayerCard(true, target, 'h');
                                // player.chooseToCard(1,true,target);
                                // player.choosePlayerCard(1,target,'h',true).gaintag.add('ling2');
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.cards;
                                    player.showCards(event.card); //.gaintag.add('ling2');
                                    player.addGaintag(event.card, 'ling2');
                                    target.addGaintag(event.card, 'ling2');
                                }
                                ('step 2');
                                if (target != player) {
                                    event.finish();
                                }
                                ('step 3');
                                player.chooseTarget(1, true, '令一名角色回复1点体力');
                                ('step 4');
                                if (result.targets?.length) {
                                    result.targets[0].recover(1);
                                    if (result.targets[0].hasSkill('yurf')) {
                                        game.playAudio('../extension/英雄联盟/audio/逆羽一.mp3');
                                        game.broadcastAll() + ui.background.setBackgroundImage('extension/英雄联盟/image/秋水共长天一色.jpg');
                                        ui.backgroundMusic.src = 'extension/英雄联盟/audio/陈致逸、HOYO-MiX - Dawn Winery Theme 晨曦酒庄.mp3';
                                    }
                                }
                            },
                            global: 'ling2',
                        },
                        nilk: {
                            audio: 'ext:英雄联盟/audio:3',
                            //  enable:['chooseToUse','chooseToRespond'],
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            /*  filter:function(event,player){
                    return  player!=_status.currentPhase;   
                },  */
                            content() {
                                'step 0';
                                player.chooseTarget(1);
                                ('step 1');
                                if (result.targets?.length) {
                                    target = result.targets[0];
                                    event.card = target.getCards('h', function (card) {
                                        return card.hasGaintag('ling2');
                                    });
                                    player.showCards(event.card);
                                    player.gain(event.card, target);
                                    if (event.card.length > 2) {
                                        target.damage(2);
                                        game.playAudio('../extension/英雄联盟/audio/霞e中.mp3');
                                    }
                                }
                            },
                        },
                        yurf: {
                            audio: 'ext:英雄联盟/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard() {
                                var player = _status.event.player;
                                return [1, Math.min(game.players.length, player.countCards('h'))];
                            },
                            discard: false,
                            lose: false,
                            delay: 0,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(cards.length, true, `选择${cards.length}名武将,依次获得你选取牌中的一张`, function (card, player, target) {
                                    return true; //target != player;
                                });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        event.card = cards;
                                        event.targets = result.targets[i];
                                        player.showCards(event.card);
                                        result.targets[i].gain(event.card[i], player, 'giveAuto').gaintag.add('ling2');
                                        result.targets[i].addGaintag(event.card, 'ling2');
                                        player.useCard({ name: 'sha' }, event.targets);
                                        result.targets[i].addGaintag(event.card, 'ling2');
                                    }
                                }
                                ('step 2');
                            },
                            global: 'ling2',
                        },
                        ling2: {
                            mod: {
                                cardEnabled2(card) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('ling2')) return false;
                                },
                                cardDiscardable(card) {
                                    if (card.hasGaintag('ling2')) return false;
                                },
                            },
                        },
                        觉醒: {
                            audio: 'ext:英雄联盟/audio:5',
                            trigger: {
                                global: 'gameStart',
                                source: 'damageBegin',
                                player: ['enterGame', 'changeHp'],
                            },
                            mark: true,
                            usable: 1,
                            content() {
                                'step 0';
                                'step 1';
                                player.chooseControl('虎', '龟', '豹', '凤').set('prompt', '选择一种 圣灵');
                                ('step 2');
                                if (result.control == '虎') {
                                    game.broadcastAll() + ui.background.setBackgroundImage('extension/英雄联盟/image/虎.jpg');
                                    game.broadcastAll(function (user) {
                                        +player.node.avatar.setBackgroundImage('extension/英雄联盟/image/虎2.jpg');
                                    }, player);
                                    player.storage.龟 = 0;
                                    player.storage.豹 = 0;
                                    player.removeSkill('豹');
                                    player.removeSkill('豹3');
                                    player.storage.凤 = 0;
                                    if (player.countMark('虎') > 0) {
                                        player.storage.虎 = 3;
                                        player.addSkill('虎');
                                        game.playAudio('../extension/英雄联盟/audio/1虎3.mp3');
                                    } else {
                                        player.addMark('虎', 1);
                                        player.addSkill('虎');
                                        game.playAudio('../extension/英雄联盟/audio/1虎.mp3');
                                    }
                                }
                                if (result.control == '龟') {
                                    player.removeSkill('虎');
                                    game.broadcastAll() + ui.background.setBackgroundImage('extension/英雄联盟/image/龟.jpg');
                                    game.broadcastAll(function (user) {
                                        +player.node.avatar.setBackgroundImage('extension/英雄联盟/image/龟2.jpg');
                                    }, player);
                                    player.changeHujia(1);
                                    player.removeSkill('豹');
                                    player.removeSkill('豹3');
                                    player.storage.虎 = 0;
                                    player.storage.豹 = 0;
                                    player.storage.凤 = 0;
                                    if (player.countMark('龟') > 0) {
                                        player.storage.龟 = 3;
                                        player.draw(player.storage.龟);
                                        game.playAudio('../extension/英雄联盟/audio/龟3.mp3');
                                    } else {
                                        player.addMark('龟', 1);
                                        player.draw(player.storage.龟);
                                        game.playAudio('../extension/英雄联盟/audio/龟.mp3');
                                    }
                                }
                                if (result.control == '豹') {
                                    player.removeSkill('虎');
                                    game.broadcastAll() + ui.background.setBackgroundImage('extension/英雄联盟/image/豹.jpg');
                                    game.broadcastAll(function (user) {
                                        +player.node.avatar.setBackgroundImage('extension/英雄联盟/image/豹2.jpg');
                                    }, player);
                                    player.storage.虎 = 0;
                                    player.storage.龟 = 0;
                                    player.storage.凤 = 0;
                                    if (player.countMark('豹') > 0) {
                                        game.playAudio('../extension/英雄联盟/audio/豹3.mp3');
                                        player.storage.豹 = 3;
                                        player.removeSkill('豹');
                                        player.addSkill('豹3');
                                    } else {
                                        game.playAudio('../extension/英雄联盟/audio/豹.mp3');
                                        player.addMark('豹', 1);
                                        player.addSkill('豹');
                                    }
                                }
                                if (result.control == '凤') {
                                    game.broadcastAll() + ui.background.setBackgroundImage('extension/英雄联盟/image/凤.jpg');
                                    game.broadcastAll(function (user) {
                                        +player.node.avatar.setBackgroundImage('extension/英雄联盟/image/凤2.jpg');
                                    }, player);
                                    player.removeSkill('豹');
                                    player.removeSkill('虎');
                                    player.removeSkill('豹3');
                                    player.storage.龟 = 0;
                                    player.storage.豹 = 0;
                                    player.storage.虎 = 0;
                                    if (player.countMark('凤') > 0) {
                                        player.storage.凤 = 3;
                                        event.goto(3);
                                        game.playAudio('../extension/英雄联盟/audio/凤3.mp3');
                                    } else {
                                        player.addMark('凤', 1);
                                        event.goto(3);
                                        game.playAudio('../extension/英雄联盟/audio/凤.mp3');
                                    }
                                }
                                ('step 3');
                                event.finish();
                                ('step 4');
                                player.chooseTarget([1, 2]);
                                ('step 5');
                                if (result.bool) {
                                    for (var i of result.targets) {
                                        player.discardPlayerCard(i, 'hej', player.storage.凤, true);
                                    }
                                }
                            },
                        },
                        四圣: {},
                        虎: {
                            mark: true,
                            intro: {
                                content: '你使用的杀额外造成『#』点雷电伤害',
                            },
                            audio: 'ext:英雄联盟/audio:3',
                            forced: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.player.damage(player.storage.虎, 'thunder');
                            },
                        },
                        龟: {
                            mark: true,
                            intro: {
                                content: '※你获得 1 点护甲并摸『#』张牌.',
                            },
                        },
                        豹: {
                            mark: true,
                            intro: {
                                content: '你计算与其他角色的距离 -『#』;其他角色计算与你的距离 +『#』.',
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    //     player.countMark('豹')
                                    //   return distance-from.player.countMark('豹');
                                    //   return distance-from.getPlayer.storage.豹;
                                    return distance - 1;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                        },
                        豹3: {
                            mark: true,
                            intro: {
                                content: '你计算与其他角色的距离 -『3』;其他角色计算与你的距离 +『3』.',
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    //     player.countMark('豹')
                                    //   return distance-from.player.countMark('豹');
                                    return distance - 3;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 3;
                                },
                            },
                        },
                        凤: {
                            mark: true,
                            intro: {
                                content: '※你弃置1~2名角色至多『#』张牌.',
                            },
                        },
                        怨魂: {
                            mark: true,
                            marktext: '魂',
                            intro: {
                                content: 'X= # ',
                            },
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.怨魂 = 1; //初始为2个暴怒标记
                                //同步标记(每当标记变动都要写这句)
                                //注:标记名必须和技能名相同
                            },
                            trigger: {
                                global: 'die',
                            },
                            audio: 'ext:英雄联盟/audio:5',
                            forced: true,
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                player.storage.怨魂 += 1; //'障'-1
                                //同步标记(每当标记变动都要写这句)
                                game.log(player, '获得了1个<魂>'); //游戏记录:玩家移除了1个'障'
                                if (player.storage.怨魂 == 0) {
                                    //如果没有'障'
                                    player.unmarkSkill('怨魂'); //不显示标记
                                }
                            },
                        },
                        荒芜: {
                            group: ['怨魂'],
                            audio: 'ext:英雄联盟/audio:7',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0'; //第1步
                                'step 1'; //第1步
                                player.chooseTarget([1, player.storage.怨魂], '选择 至多X名其他角色,令其弃置X张牌,每少弃置1张牌便受到1点伤害;你以此法造成伤害后失去此技能. ', true, function (card, player, target) {
                                    return target != player;
                                });
                                ('step 2'); //第1步
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        if (result.targets[i].countCards('he') < player.storage.怨魂) {
                                            result.targets[i].discard(result.targets[i].getCards('he'));
                                            result.targets[i].damage(player.storage.怨魂 - result.targets[i].countCards('he'));
                                            player.awakenSkill('荒芜');
                                        } else {
                                            result.targets[i].chooseToDiscard(player.storage.怨魂, true, 'hes');
                                        }
                                    }
                                }
                            },
                        },
                        七魄: {
                            group: ['怨魂'],
                            limited: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                //初始化
                                player.storage.七魄 = false; //技能未发动(xx为技能名)
                            },
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.七魄 == false; //你没发动过这个技能
                            },
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: ['dying', 'dieBegin'],
                            },
                            content() {
                                'step 0'; //第1步
                                player.storage.七魄 = true; //技能发动过
                                player.awakenSkill('七魄'); //技能文本变灰(失去技能,标记消失)
                                ('step 1'); //第1步
                                player.addSkill('亡灵');
                                //player.damage(9);
                                player.addSkill('whyzsj');
                                player.storage.怨魂 += 1;
                                ('step 2');
                                player.draw(player.storage.怨魂);
                                ('step 3'); //第1步
                                player.chooseCard(get.prompt2('亡灵'), [1, 7], 'he', true);
                                ('step 4');
                                if (result.bool) {
                                    player.storage.亡灵 += result.cards.length;
                                    player.addToExpansion(result.cards, player, 'give').gaintag.add('亡灵');
                                }
                            },
                        },
                        亡灵: {
                            mark: true,
                            marktext: '魄',
                            intro: {
                                content: '亡灵状态持续:#回合',
                                //  markcount:'expansion',
                            },
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.亡灵 = 0;
                                // player.storage.亡灵=[];//初始没有牌
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            trigger: {
                                player: ['phaseJieshuBegin', 'discardBefore', 'dieBefore', 'dying'],
                            },
                            audio: 'ext:英雄联盟/audio:9',
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.亡灵 < 1) {
                                    player.removeSkill('亡灵');
                                    player.die();
                                }
                                ('step 1');
                                if (event.triggername == 'phaseJieshuBegin') {
                                    player.storage.亡灵 -= 1;
                                } else trigger.cancel();
                            },
                        },
                        魂: {
                            mark: true,
                            intro: {
                                content: '本轮已发动#次',
                            },
                        },
                        vigc: {
                            marktext: '天',
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    if (player.isUnderControl(true)) {
                                        if (get.itemtype(_status.pileTop) != 'card') return '牌堆顶无牌';
                                        dialog.add([_status.pileTop]);
                                        return 'Lv1 全知全能';
                                    } else {
                                        return 'Lv1 全知全能';
                                    }
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (lib.inpile.includes(name)) return true;
                            },
                            filter(event, player) {
                                if (event.responded || event.aocai) return false;
                                for (var i of lib.inpile) {
                                    if (event.filterCard && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            delay: false,
                            //锁定技,牌堆顶的牌始终对你可见<br>且你可将其做手牌使用或打出
                            content() {
                                'step 0';
                                var evt = event.getParent(2);
                                evt.set('aocai', true);
                                var cards = get.cards(get.mode() != 'guozhan' && player.countCards('h') == 0 ? 1 : 1);
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        ui.cardPile.insertBefore(i.fix(), ui.cardPile.firstChild);
                                    }
                                player
                                    .chooseButton(['至高:选择要' + (evt.name == 'chooseToUse' ? '使用' : '打出') + '的牌', cards])
                                    .set('filterButton', function (button) {
                                        return _status.event.cards.includes(button.link);
                                    })
                                    .set(
                                        'cards',
                                        cards.filter(function (card) {
                                            return evt.filterCard && evt.filterCard(card, evt.player, evt);
                                        })
                                    )
                                    .set('ai', function (button) {
                                        var evt = _status.event.getParent(3);
                                        if (evt && evt.ai) {
                                            var tmp = _status.event;
                                            _status.event = evt;
                                            var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
                                            _status.event = tmp;
                                            return result;
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                var evt = event.getParent(2);
                                if (result.links?.length) {
                                    var name = result.links[0].name;
                                    if (evt.name == 'chooseToUse') {
                                        game.broadcastAll(
                                            function (result, name) {
                                                lib.skill.aocai_backup.viewAs = { name: name, cards: [result] };
                                                lib.skill.aocai_backup.prompt = `选择${get.translation(result)}的目标`;
                                            },
                                            result.links[0],
                                            name
                                        );
                                        evt.set('_backupevent', 'aocai_backup');
                                        evt.backup('aocai_backup');
                                    } else {
                                        evt.result.card = result.links[0];
                                        evt.result.cards = [result.links[0]];
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
                                order: 11,
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
                        lkbd: {
                            audio: 'ext:英雄联盟/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.chooseControl('←-左摆', '横置角色', '右摆-→', true).set('ai', function (event, player) { });
                                ('step 1');
                                if (result.control == '←-左摆') {
                                    player.gainPlayerCard(player.next, true, 'hej');
                                    event.goto(11);
                                }
                                if (result.control == '右摆-→') {
                                    player.gainPlayerCard(player.previous, true, 'hej');
                                    event.goto(8);
                                }
                                if (result.control == '横置角色') {
                                    event.goto(3);
                                }
                                ('step 2');
                                event.finish();
                                ('step 3');
                                player.chooseTarget(1, '获得一名横置角色的一张牌', function (card, player, target) {
                                    if (!target.isLinked()) return false;
                                    return true;
                                });
                                ('step 4');
                                if (result.targets?.length) {
                                    player.gainPlayerCard(result.targets[0], true, 'hej');
                                } else {
                                    event.goto(0);
                                }
                                ('step 5');
                                player.chooseCard('hej', true, '选择一张牌 交给一名角色');
                                ('step 6');
                                if (result.bool) {
                                    event.card = result.cards;
                                    event.goto(14);
                                }
                                ('step 7');
                                event.finish();
                                ('step 8');
                                player.chooseCard('hej', true, '选择一张牌交给下家');
                                ('step 9');
                                if (result.bool) {
                                    player.next.gain(result.cards, player, 'give');
                                }
                                ('step 10');
                                event.finish();
                                ('step 11');
                                player.chooseCard('hej', true, '选择一张牌交给上家');
                                ('step 12');
                                if (result.bool) {
                                    player.previous.gain(result.cards, player, 'give');
                                }
                                ('step 13');
                                event.finish();
                                ('step 14');
                                player.chooseTarget(1, true, '选择一张牌 交给一名角色');
                                ('step 15');
                                if (result.targets?.length) {
                                    result.targets[0].gain(event.card);
                                    result.targets[0].$gain2(event.card);
                                }
                            },
                        },
                        hysoer: {
                            audio: 'ext:英雄联盟/audio:2',
                            mark: true,
                            trigger: {
                                global: ['damageBegin'],
                            },
                            filter(event, player) {
                                if (player.countMark('魂') > 2) return false;
                                if (event.player == player) return false;
                                if (event.num < event.player.hp) return false;
                                return true;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.addMark('魂', 1);
                                ('step 1');
                                if (trigger.player.isLinked()) {
                                    event.goto(4);
                                } else {
                                    event.goto(2);
                                }
                                ('step 2');
                                trigger.player.link();
                                ('step 3');
                                event.finish();
                                ('step 4');
                                trigger.player.link();
                                game.playAudio('../extension/英雄联盟/audio/我的.mp3');
                                trigger.cancel();
                            },
                        },
                        hysoyi: {
                            audio: 'ext:英雄联盟/audio:4',
                            mark: true,
                            trigger: {
                                global: ['useCardToBegin'],
                            },
                            filter(event, player) {
                                if (player.countMark('魂') > 2) return false;
                                if (event.player == player) return false;
                                if (get.type(event.card) != 'basic') return false;
                                return true;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.addMark('魂', 1);
                                ('step 1');
                                if (trigger.player.isLinked()) {
                                    event.goto(4);
                                } else {
                                    event.goto(2);
                                }
                                ('step 2');
                                trigger.player.link();
                                ('step 3');
                                event.finish();
                                ('step 4');
                                trigger.player.link();
                                game.playAudio('../extension/英雄联盟/audio/结束.mp3');
                                trigger.cancel();
                            },
                        },
                        hyso: {
                            group: ['hysoyi', 'hysoer'],
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                player.removeMark('魂', player.countMark('魂'));
                            },
                        },
                        雷震: {
                            trigger: {
                                player: ['enterGame'],
                                global: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                'step 1';
                                event.num = 0;
                                event.targets = game.filterPlayer();
                                ('step 2');
                                if (event.num < event.targets.length) {
                                    event.targets[event.num].addSkill('rw_bagua_skill');
                                    // event.targets[event.num].loseHp(1);
                                    event.num++;
                                    event.redo();
                                }
                            },
                        },
                        不熄: {
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                'step 1';
                                event.num = 0;
                                event.targets = game.filterPlayer();
                                ('step 2');
                                if (event.num < event.targets.length) {
                                    event.targets[event.num].damage(1);
                                    event.num++;
                                    event.redo();
                                }
                            },
                        },
                        绿甲: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                global: 'phaseDiscardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.cards.length > 1;
                            },
                            content() {
                                player.recover();
                            },
                        },
                        黄冠: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 9;
                                },
                            },
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                var target = event.player;
                                return event.parent.name == 'sha' && player.countCards('h') > 8;
                            },
                            content() {
                                trigger.num += 9;
                            },
                        },
                        anji: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            usable: 1,
                            audio: 'ext:英雄联盟/audio:6',
                            forced: true,
                            content() {
                                var card = get.cardPile2(function (card) {
                                    return get.type2(card) == 'trick';
                                });
                                if (card) player.gain(card, 'gain2', 'log');
                            },
                        },
                        hwmo: {
                            audio: 'ext:英雄联盟/audio:1',
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (get.type(card) == 'trick' || get.type(card) == 'delay') return true;
                                },
                                maxHandcard(player, num) {
                                    var a = player.countCards('h', function (card) {
                                        return get.type(card) == 'trick' || get.type(card) == 'delay';
                                    });
                                    return num + a;
                                },
                            },
                            trigger: {
                                source: 'damageBegin4',
                            },
                            forced: true,
                            // usable:1,
                            filter(event, player) {
                                return !event.hwmo && get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h') > 24) {
                                    var num = trigger.num;
                                    trigger.cancel();
                                    trigger.player.damage(32 * num);
                                } else if (player.countCards('h') > 19) {
                                    var num = trigger.num;
                                    trigger.cancel();
                                    trigger.player.damage(16 * num);
                                } else if (player.countCards('h') > 14) {
                                    var num = trigger.num;
                                    trigger.cancel();
                                    trigger.player.damage(8 * num);
                                } else if (player.countCards('h') > 9) {
                                    var num = trigger.num;
                                    trigger.cancel();
                                    trigger.player.damage(4 * num);
                                } else if (player.countCards('h') > 4) {
                                    var num = trigger.num;
                                    trigger.cancel();
                                    trigger.player.damage(2 * num);
                                }
                                ('step 1');
                            },
                        },
                        ujbi: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                if (player.countCards('he') == 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('he') == 0) {
                                    event.finish();
                                } else {
                                    player.chooseToDiscard(true, 'he');
                                    trigger.cancel();
                                }
                                ('step 1');
                            },
                        },
                        lmdaer: {
                            mark: true,
                            intro: {
                                content: '连#',
                            },
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                // event.count=0;
                                'step 1';
                                player.addMark('lmdaer', 1);
                                //  event.count--;
                                ('step 2');
                                if (player.countMark('lmdaer') >= 3) {
                                    player.storage.lmdaer -= 3;
                                    player.addSkill('lmda');
                                }
                                ('step 3');
                                //        if(event.count>0) event.goto(1);
                            },
                        },
                        lmda: {
                            mod: {
                                cardUsable(card) {
                                    if (card.storage && card.storage.shouli) return Infinity;
                                },
                            },
                            audio: 'ext:英雄联盟/audio:4',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            selectCard: 0,
                            filterCard: true,
                            viewAs: {
                                name: 'sha',
                                storage: {
                                    shouli: true,
                                },
                            },
                            prompt: '视为使用或打出一张无次数限制的杀',
                            precontent() {
                                player.removeSkill('lmda');
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
                        醉狂: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'jiu';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                'step 1';
                                player.addTempSkill('醉狂e');
                                player.addTempSkill('醉狂s');
                            },
                        },
                        醉狂s: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeSkill('醉狂e');
                                player.removeSkill('醉狂s');
                            },
                        },
                        醉狂e: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name != 'sha';
                            },
                            content() {
                                'step 0';
                                'step 1';
                                var card = get.cards()[0];
                                event.card = card;
                                player.showCards(card);
                                if (!player.hasUseTarget(card)) {
                                    card.fix();
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    game.updateRoundNumber();
                                    game.cardsDiscard(card);
                                    event.finish();
                                }
                                ('step 2');
                                var next = player.chooseUseTarget(card, true);
                                if (get.info(card).updateUsable == 'phaseUse') next.addCount = false;
                                ('step 3');
                                ('step 4');
                            },
                        },
                        流转: {
                            audio: 'ext:英雄联盟/audio:6',
                            group: ['lqvrer'],
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                player.gain(game.createCard('sha'), 'gain2');
                            },
                        },
                        lqvrer: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            audio: 'ext:英雄联盟/audio:3',
                            filter(event, player) {
                                return event.player.hujia;
                            }, //QQQ
                            content() {
                                if (trigger.player.hujia > 0) {
                                    trigger.num++;
                                    player.changeHujia(1);
                                }
                            },
                        },
                        wwvler: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            mark: true,
                            forced: true,
                            content() {
                                'step 0';
                                if (player.hasSkill('wwvlsj')) {
                                    event.goto(7);
                                } else {
                                    player.addMark('wwvler', 1);
                                }
                                ('step 1');
                                if (player.countMark('wwvler') % 5 == 3) {
                                    game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/英雄联盟/image/暗夜猎手.jpg');
                                    game.broadcastAll(function (user) {
                                        user.node.name.innerHTML = '暗夜猎手';
                                    }, player);
                                }
                                if (player.countMark('wwvler') % 5 == 2) {
                                    game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/英雄联盟/image/九尾妖狐.jpg');
                                    game.broadcastAll(function (user) {
                                        user.node.name.innerHTML = '九尾妖狐';
                                    }, player);
                                }
                                if (player.countMark('wwvler') % 5 == 1) {
                                    game.broadcastAll(function (user) {
                                        +player.node.avatar.setBackgroundImage('extension/英雄联盟/image/血港鬼影.jpg');
                                    }, player);
                                    // game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/英雄联盟/image/血港鬼影.jpg');
                                    game.broadcastAll(function (user) {
                                        user.node.name.innerHTML = '血港鬼影';
                                    }, player);
                                }
                                if (player.countMark('wwvler') % 5 == 0) {
                                    game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/英雄联盟/image/冰霜女巫.jpg');
                                    game.broadcastAll(function (user) {
                                        user.node.name.innerHTML = '冰霜女巫';
                                    }, player);
                                }
                                if (player.countMark('wwvler') % 5 == 4) {
                                    game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/英雄联盟/image/时光尊者.jpg');
                                    game.broadcastAll(function (user) {
                                        user.node.name.innerHTML = '时光尊者';
                                    }, player);
                                }
                                ('step 2');
                                ('step 3');
                                ('step 4');
                                ('step 5');
                                player.addSkill('wwvlsj');
                                ('step 6');
                                event.finish();
                                //player.changeHujia(2);
                                ('step 7');
                                player.changeHujia(1);
                                player.chooseTarget([1, Infinity]);
                                ('step 8');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                    }
                                }
                            },
                        },
                        wwvlsj: {},
                        幻灭: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.hasSkill('wwvlsj')) {
                                    game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/英雄联盟/image/妮蔻.jpg');
                                    game.broadcastAll(function (user) {
                                        user.node.name.innerHTML = '妮蔻';
                                    }, player);
                                    player.draw();
                                } else {
                                    event.goto(3);
                                }
                                ('step 1');
                                //player.changeHujia(2);
                                player.removeSkill('wwvlsj');
                                ('step 2');
                                event.finish();
                                ('step 3');
                                player.removeSkill('wwvlsj');
                                lib.skill.ybni.hideCharacter(player.name1, player);
                                if (player.name2) lib.skill.ybni.hideCharacter(player.name2, player);
                                player.addTempSkill('ybni');
                                player.removeSkill('wwvlsj');
                            },
                        },
                        摄魂: {
                            marktext: '魂',
                            group: ['摄魂_dm', '摄魂e'],
                            intro: {
                                content: '你拥有#个魂',
                            },
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.摄魂 = 1; //初始获得2个'障'
                                player.markSkill('摄魂'); //显示标记
                                //同步标记(每当标记变动都要写这句)
                                game.log(player, '获得了1个<魂>'); //游戏记录:玩家获得了2个'障'
                            },
                            subSkill: {
                                dm: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    audio: 'ext:英雄联盟/audio:4',
                                    forced: true,
                                    content() {
                                        //内容:
                                        'step 0'; //第0步(必须从0开始)
                                        player.storage.摄魂 += 1; //'障'-1
                                        //同步标记(每当标记变动都要写这句)
                                        game.log(player, '获得了1个<魂>'); //游戏记录:玩家移除了1个'障'
                                        if (player.storage.摄魂 == 0) {
                                            //如果没有'障'
                                            player.unmarkSkill('摄魂'); //不显示标记
                                        }
                                    },
                                },
                            },
                        },
                        摄魂e: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.isAlive() && event.source != player && event.cards.length >= 1;
                            },
                            logTarget: 'source',
                            check(event, player) {
                                return get.attitude(player, event.source) > 0;
                            },
                            content() {
                                trigger.source.loseHp();
                                player.recover();
                            },
                        },
                        ycmwe: {
                            trigger: {
                                player: ['phaseEnd'],
                            },
                            audio: 'ext:英雄联盟/audio:4',
                            forced: true,
                            content() {
                                var card = get.cardPile2(function (card) {
                                    return get.type2(card) == 'trick';
                                });
                                if (card) player.gain(card, 'gain2', 'log');
                            },
                        },
                        妖魅: {
                            group: ['ycmwe'],
                            audio: 'ext:英雄联盟/audio:4',
                            enable: 'phaseUse',
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.摄魂 > 0; //你有'障'
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                player.storage.摄魂--; //'障'-1
                                //同步标记(每当标记变动都要写这句)
                                const result = await player.chooseTarget(true).forResult(); //你可以选择一个目标
                                if (result.targets?.length) {
                                    var card = game.createCard('lebu');
                                    result.targets[0].addJudge(card);
                                    result.targets[0].$draw(card);
                                    await player.gainPlayerCard(true, result.targets[0], 'hej');
                                    result.targets[0].addSkill('fengyin');
                                    result.targets[0].addSkill('mwho');
                                }
                            },
                        },
                        喜色: {
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'club') return 'heart';
                                    if (suit == 'diamond') return 'heart';
                                    if (suit == 'spade') return 'heart';
                                },
                            },
                            trigger: {
                                player: ['recoverEnd', 'gainEnd', 'changeHujiaEnd'],
                            },
                            audio: 'ext:英雄联盟/audio:7',
                            usable: 1,
                            forced: true,
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player.chooseTarget('令目标摸一张牌').forResult(); //你可以选择一个目标
                                if (result.targets?.length) {
                                    result.targets[0].draw(); //(选的第一个)目标摸一张牌
                                }
                            },
                        },
                        lv_skill: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            logTarget: 'target',
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.绿 > 0; //你有'障'
                            },
                            content() {
                                'step 0';
                                player.storage.绿--;
                                ('step 1');
                                if (player.hasSkill('bd_skill')) {
                                    trigger.target.addTempSkill('xryy');
                                    player.addTempSkill('lv_skiller');
                                } else {
                                    trigger.target.addTempSkill('xryy');
                                    player.addTempSkill('xryy');
                                }
                                ('step 2');
                            },
                        },
                        无限火力: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('咆哮');
                                ('step 1');
                                player.gain(game.createCard('sha'), 'gain2');
                            },
                        },
                        lv_skiller: {
                            trigger: {
                                player: 'useCardBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('xryy');
                            },
                        },
                        hs_skill: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.card) return false;
                                if (event.card.name != 'sha') return false;
                                return player.storage.红 > 0;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                if (player.hp == player.maxHp) {
                                    player.changeHujia(1);
                                } else player.recover(1);
                                ('step 2');
                                event.count--;
                                ('step 3');
                                if (event.count > 0) event.goto(1);
                                ('step 4');
                                player.storage.红--;
                            },
                        },
                        lj_skill: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.name != 'sha' || get.mode() == 'guozhan') return false;
                                return player.storage.蓝 > 0;
                            },
                            content() {
                                player.storage.蓝--;
                            },
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name != 'sha') return;
                                    if (get.mode() == 'guozhan') return;
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    if (player.storage.蓝 < 1) return;
                                    range[1] += 2;
                                },
                            },
                        },
                        bd_skill: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.name == 'bd_skill') return false;
                                if (!event.targets || !event.card) return false;
                                var type = get.type(event.card);
                                if (event.card.name != 'sha') return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number);
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (!event.targets[i].isAlive()) return false;
                                    if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                return player.storage.白 > 0;
                            },
                            content() {
                                player.storage.白--;
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number);
                                player.useCard(card, trigger.targets);
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        月轮: {
                            group: ['月轮e'],
                            audio: 'ext:英雄联盟/audio:4',
                            enable: 'phaseUse',
                            mark: true,
                            init(player) {
                                player.storage.月轮 = 1;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('绿', '红', '蓝', '白').set('prompt', '装备一种月石武器');
                                ('step 1');
                                if (result.control == '红') {
                                    if (player.countMark('红') < 1) {
                                        event.finish();
                                    } else {
                                        player.storage.月轮 = 1;
                                        player.equip(game.createCard('断魄'));
                                    }
                                }
                                if (result.control == '绿') {
                                    if (player.countMark('绿') < 1) {
                                        event.finish();
                                    } else {
                                        player.storage.月轮 = 2;
                                        player.equip(game.createCard('通碧'));
                                    }
                                }
                                if (result.control == '蓝') {
                                    if (player.countMark('蓝') < 1) {
                                        event.finish();
                                    } else {
                                        player.storage.月轮 = 3;
                                        player.equip(game.createCard('荧焰'));
                                    }
                                }
                                if (result.control == '白') {
                                    if (player.countMark('白') < 1) {
                                        event.finish();
                                    } else {
                                        player.storage.月轮 = 4;
                                        player.equip(game.createCard('折镜'));
                                    }
                                }
                            },
                        },
                        白: {
                            mark: true,
                            intro: {
                                content: '弹药剩余:#',
                            },
                        },
                        绿: {
                            mark: true,
                            intro: {
                                content: '弹药剩余:#',
                            },
                        },
                        红: {
                            mark: true,
                            intro: {
                                content: '弹药剩余:#',
                            },
                        },
                        蓝: {
                            mark: true,
                            intro: {
                                content: '弹药剩余:#',
                            },
                        },
                        夜凝: {
                            audio: 'ext:英雄联盟/audio:5',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('h'); //你有牌时才能发动
                            },
                            content() {
                                'step 0';
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/英雄联盟/image/皎月bg.jpg');
                                ui.backgroundMusic.src = 'extension/英雄联盟/audio/皎月bg.mp3';
                                ('step 1');
                                player.chooseToDiscard(1, true, 'h');
                                ('step 2');
                                player.chooseControl('获得当前武器的技能', '下一张杀不计次数', true).set('ai', function (event, player) { });
                                ('step 3');
                                if (result.control == '获得当前武器的技能') {
                                    var card = player.getEquip(1);
                                    var info = get.info(card);
                                    // player.addAdditionalSkill('qixi',info.skills,{player:'phaseEnd'});
                                    player.addTempSkill(info.skills);
                                } else {
                                    player.addTempSkill('lmvj');
                                }
                            },
                        },
                        月轮e: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: ['enterGame', 'useCardEnd'],
                                global: 'phaseBefore',
                            },
                            mark: true,
                            forced: true,
                            content() {
                                'step 0';
                                if (player.countMark('红') > 0 && player.countMark('绿') < 1 && player.countMark('蓝') < 1 && player.countMark('白') < 1) {
                                    event.goto(3);
                                }
                                if (player.countMark('绿') > 0 && player.countMark('红') < 1 && player.countMark('蓝') < 1 && player.countMark('白') < 1) {
                                    event.goto(3);
                                }
                                if (player.countMark('蓝') > 0 && player.countMark('绿') < 1 && player.countMark('红') < 1 && player.countMark('白') < 1) {
                                    event.goto(3);
                                }
                                if (player.countMark('白') > 0 && player.countMark('绿') < 1 && player.countMark('蓝') < 1 && player.countMark('红') < 1) {
                                    event.goto(3);
                                }
                                if (player.countMark('白') < 1 && player.countMark('绿') < 1 && player.countMark('蓝') < 1 && player.countMark('红') < 1) {
                                    event.goto(2);
                                }
                                ('step 1');
                                event.finish();
                                ('step 2');
                                player.addMark('月轮e', 1);
                                if (player.countMark('月轮e') % 4 == 3) {
                                    player.addMark('蓝', 2);
                                    player.gain(game.createCard('sha'), 'gain2');
                                }
                                if (player.countMark('月轮e') % 4 == 0) {
                                    player.addMark('白', 2);
                                    player.gain(game.createCard('sha'), 'gain2');
                                }
                                if (player.countMark('月轮e') % 4 == 1) {
                                    player.addMark('绿', 2);
                                    player.gain(game.createCard('sha'), 'gain2');
                                }
                                if (player.countMark('月轮e') % 4 == 2) {
                                    player.addMark('红', 2);
                                    player.gain(game.createCard('sha'), 'gain2');
                                }
                                ('step 3');
                                player.addMark('月轮e', 1);
                                if (player.countMark('月轮e') % 4 == 3) {
                                    player.addMark('蓝', 2);
                                    player.gain(game.createCard('sha'), 'gain2');
                                }
                                if (player.countMark('月轮e') % 4 == 0) {
                                    player.addMark('白', 2);
                                    player.gain(game.createCard('sha'), 'gain2');
                                }
                                if (player.countMark('月轮e') % 4 == 1) {
                                    player.addMark('绿', 2);
                                    player.gain(game.createCard('sha'), 'gain2');
                                }
                                if (player.countMark('月轮e') % 4 == 2) {
                                    player.addMark('红', 2);
                                    player.gain(game.createCard('sha'), 'gain2');
                                }
                            },
                        },
                        魅音: {
                            audio: 'ext:英雄联盟/audio:3',
                            //特殊技(限定技和觉醒技都是)
                            limited: true, //限定技
                            mark: true, //标记
                            intro: {
                                //标记介绍
                                content: 'limited', //内容:未发动
                            },
                            //有技能动画
                            init(player) {
                                //初始化
                                player.storage.魅音 = false; //技能未发动(xx为技能名)
                            },
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.魅音 == false; //你没发动过这个技能
                            },
                            enable: 'phaseUse', //出牌阶段发动
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                player.storage.魅音 = true; //技能发动过
                                player.awakenSkill('魅音'); //技能文本变灰(失去技能,标记消失)
                                ('step 1');
                                player.chooseTarget([1, 3], '令至多3名角色获得<魅惑>').set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) < 0;
                                });
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].addSkill('fengyin');
                                        result.targets[i].addSkill('mwho');
                                    }
                                }
                            },
                        },
                        火藥: {
                            enable: 'phaseUse',
                            audio: 'ext:英雄联盟/audio:3',
                            usable: 2,
                            filter(event, player) {
                                return player.countCards('hes');
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            filterCard: true,
                            selectCard: 1,
                            filterTarget: true,
                            selectTarget: 1,
                            //出牌阶段限2次,你可以将1张牌,置于一名角色上家位置称为<桶> (视为一名体力值为3无回合/濒死状态的角色: 锁定技,你始终横置并且死亡后,对相邻的角色造成1点火焰伤害;每轮开始时,你失去1点体力)
                            async content(event, trigger, player) {
                                //QQQ
                                const num = event.targets[0].dataset.position;
                                const player2 = game.addPlayerX(num, '炸药桶');
                                player2.side = player.side;
                                player2.identity = player.identity;
                                if (player2.identity == 'zhu') player2.identity = 'zhong';
                                player2.identityShown = true;
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player, target) {
                                        if (player.maxHp == 1) return -100;
                                        return 1;
                                    },
                                    target(player, target) {
                                        var num = 1;
                                        if (target.next && get.attitude(player, target.next) < 0) {
                                            num = 2;
                                        }
                                        return -get.distance(player, target) * num;
                                    },
                                },
                            },
                        },
                        loui: {
                            trigger: {
                                player: 'discard',
                            },
                            audio: 'ext:英雄联盟/audio:9',
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hes');
                            },
                            //当你的牌被弃置时,你可以将其扣置一名角色的上家位置,称为<岩>(无回合/濒死,体力值为 2的角色)'
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player
                                    .chooseTarget()
                                    .set('ai', (t) => -get.attitude(t, player))
                                    .forResult();
                                if (result.targets?.length) {
                                    const num = result.targets[0].dataset.position;
                                    const player2 = game.addPlayerX(num, '岩嶂');
                                    player2.side = player.side;
                                    player2.identity = player.identity;
                                    if (player2.identity == 'zhu') player2.identity = 'zhong';
                                    player2.identityShown = true;
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player, target) {
                                        if (player.maxHp == 1) return -100;
                                        return 1;
                                    },
                                    target(player, target) {
                                        var num = 1;
                                        if (get.attitude(player, target.next) < 0) {
                                            //QQQ
                                            num = 2;
                                        }
                                        return -get.distance(player, target) * num;
                                    },
                                },
                            },
                        },
                        vjgeyi: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            logTarget: 'target',
                            filter(event, player) {
                                //发动限制条件
                                return get.type(event.card) == 'basic' && get.color(event.card) == 'red';
                            },
                            content() {
                                'step 0';
                                'step 1';
                                if (trigger.card.name == 'tao') {
                                    trigger.target.recover();
                                }
                            },
                        },
                        vjgeer: {
                            group: ['vjgeyi', 'vjgesj'],
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        vjge: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('hes'); //你有牌时才能发动
                            },
                            content() {
                                'step 0';
                                player.chooseCard('你可以弃置X张牌令等量的角色强化', [1, Infinity], false, 'hes');
                                ('step 1');
                                if (result.bool) {
                                    player.length = result.cards.length;
                                    player.discard(result.cards);
                                } else event.finish();
                                ('step 2');
                                player.chooseTarget(`令${result.cards.length}名角色强化`, result.cards.length, true);
                                ('step 3');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].addTempSkill('vjgeer', { player: 'phaseBefore' });
                                    }
                                }
                            },
                        },
                        vjgesj: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: ['respond', 'useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                //发动限制条件
                                return get.type(event.card) == 'basic' && get.color(event.card) == 'red';
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                            },
                        },
                        vjge3: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: ['phaseBegin', 'dieBegin'],
                            },
                            silent: true,
                            charlotte: true,
                            content() {
                                for (var i of game.players) {
                                    if (i.hasSkill('vjgeer')) {
                                        i.removeSkill('vjgeer');
                                    }
                                }
                                player.removeSkill('vjge3');
                            },
                            forced: true,
                            popup: false,
                        },
                        赞歌: {
                            audio: 'ext:英雄联盟/audio:7',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard() {
                                var player = _status.event.player;
                                return [1, Math.min(game.players.length, player.countCards('h'))];
                            },
                            discard: false,
                            lose: false,
                            delay: 0,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(cards.length, true, `选择${cards.length}名武将,依次获得你选取牌中的一张`, function (card, player, target) {
                                    return true;
                                });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].gain(i, player, 'giveAuto');
                                        result.targets[i].addSkill('vjgeer');
                                        player.addSkill('vjge3');
                                    }
                                }
                            },
                        },
                        金鳞: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                global: ['gainAfter', 'loseBegin', 'phaseZhunbeiBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isMaxHandcard();
                            },
                            content() {
                                var ta = game.filterPlayer(function (current) {
                                    return current.isMaxHandcard();
                                });
                                var card = ta[0].countCards('h') - player.countCards('h');
                                player.draw(card);
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh' && player.isMaxHandcard(true)) {
                                        return false;
                                    }
                                },
                            },
                        },
                        巨岩: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.num != 2) {
                                    trigger.cancel();
                                }
                            },
                        },
                        风暴: {
                            group: '风暴!',
                        },
                        '风暴!': {
                            audio: 'ext:巨龙降临!/audio:2',
                            trigger: {
                                global: 'judgeAfter',
                            },
                            filter(event, player) {
                                return !lib.skill.xinleiji_misa.disableReason.includes(event.judgestr) && ['spade'].includes(event.result.suit);
                            },
                            content() {
                                'step 0';
                                event.num = 1 + ['spade'].indexOf(trigger.result.suit);
                                ('step 1');
                                player.chooseTarget([1, Infinity]); //你可以选择一个目标
                                ('step 2'); //第1步
                                if (result.bool) {
                                    for (var i of result.targets) {
                                        i.damage(event.num, 'thunder');
                                    }
                                }
                            },
                        },
                        玉林: {
                            trigger: {
                                global: 'loseAfter',
                            },
                            audio: 'ext:巨龙降临!/audio:5',
                            forced: true,
                            filter(event, player) {
                                if (event.type != 'discard') return false;
                                for (var i = 0; i < event.cards2.length; i++) {
                                    if (get.position(event.cards2[i], true) == 'd') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                for (var i = 0; i < trigger.cards2.length; i++) {
                                    if (get.position(trigger.cards2[i], true) == 'd') {
                                        cards.push(trigger.cards2[i]);
                                    }
                                }
                                if (cards.length) {
                                    player.chooseButton(['玉林:选择要获得的牌', cards], [1, cards.length]).set('ai', function (button) {
                                        return get.value(button.link, _status.event.player, 'raw');
                                    });
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2', 'log');
                                }
                            },
                        },
                        怒炎: {
                            mark: true,
                            marktext: '炎',
                            init(player) {
                                player.storage.nzry_fanghai = true;
                            },
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.nzry_fanghai == true) return '当所有角色造成非属性伤害时,改为火焰你摸1张牌';
                                    return '当所有角色造成非属性伤害时,改为火焰你回复1点体力';
                                },
                            },
                            group: ['nzry_fanghai_1', 'nzry_fanghai_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (get.itemtype(event.source) != 'player') return false;
                                        if (player.storage.nzry_fanghai == false) return false;
                                        return !event.nature && event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.nature = 'fire';
                                        player.draw();
                                        player.storage.nzry_fanghai = false;
                                    },
                                    prompt2: '所有角色造成非属性伤害时,改为火焰你①摸1张牌',
                                },
                                2: {
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    forced: true,
                                    prompt2: '②回复1点体力',
                                    filter(event, player) {
                                        if (get.itemtype(event.source) != 'player') return false;
                                        if (player.storage.nzry_fanghai == true) return false;
                                        return !event.nature && event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.nature = 'fire';
                                        player.recover();
                                        player.storage.nzry_fanghai = true;
                                    },
                                },
                            },
                        },
                        nzry_fanghai_1: {
                            trigger: {
                                global: 'damageBefore',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                if (get.itemtype(event.source) != 'player') return false;
                                if (player.storage.nzry_fanghai == false) return false;
                                return !event.nature && event.num > 0;
                            },
                            content() {
                                'step 0';
                                trigger.nature = 'fire';
                                player.draw();
                                player.storage.nzry_fanghai = false;
                            },
                        },
                        nzry_fanghai_2: {
                            trigger: {
                                global: 'damageBefore',
                            },
                            forced: true,
                            prompt2: '②回复1点体力',
                            filter(event, player) {
                                if (get.itemtype(event.source) != 'player') return false;
                                if (player.storage.nzry_fanghai == true) return false;
                                return !event.nature && event.num > 0;
                            },
                            content() {
                                'step 0';
                                trigger.nature = 'fire';
                                player.recover();
                                player.storage.nzry_fanghai = true;
                            },
                        },
                        111: {
                            trigger: {
                                player: ['chooseToUse', 'chooseToRespond'],
                            },
                            forced: true,
                            content() {
                                player.useSkill('fglk');
                                player.addTempSkill('gsqrer');
                            },
                        },
                        2222: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'phaseUse',
                            content() {
                                'step 0'; //第0步(必须从0开始)
                                game.addFellow('凯隐');
                                ('step 1'); //第1步
                            },
                        },
                        uijp: {
                            audio: 'ext:英雄联盟/audio:5',
                            // trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin'],},
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0'; //第0步(必须从0开始)
                                player.chooseTarget(true, function (card, player, target) {
                                    return target.countDiscardableCards(player, 'h');
                                });
                                ('step 1'); //第1步
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    event.goto(2);
                                } else event.finish();
                                ('step 2');
                                var target = event.target;
                                var hs = target.getCards('h');
                                //player.choosePlayerCard(true,target);
                                player.chooseCardButton('视界', true, hs).ai = function (button) {
                                    return get.value(button.link);
                                };
                                ('step 3'); //第1步
                                if (result.bool) {
                                    event.card1 = result.links[[0]];
                                    player.showCards(event.card1);
                                }
                                ('step 4'); //第1步
                                event.target.chooseControl('将此牌交给其', '你使用此牌', true).set('ai', function (event, player) { });
                                ('step 5');
                                if (result.control == '将此牌交给其') {
                                    {
                                        player.gain(event.card1, 'gain2');
                                    }
                                }
                                if (result.control == '你使用此牌') {
                                    if (!event.target.hasUseTarget(event.card1)) {
                                        event.card1.fix();
                                        event.goto(6);
                                    } else {
                                        event.goto(7);
                                    }
                                }
                                ('step 6');
                                player.gain(event.card1, 'gain2');
                                event.finish();
                                ('step 7');
                                event.target.chooseUseTarget(event.card1, true);
                            },
                        },
                        hyxp: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                global: 'dyingBegin',
                            },
                            filter(event, player) {
                                //发动限制条件
                                return event.player != player; //你有牌时才能发动
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('回复1点体力', '获得其1张牌', true).set('ai', function (event, player) { });
                                ('step 1');
                                if (result.control == '回复1点体力') {
                                    player.recover();
                                } else {
                                    player.gainPlayerCard(trigger.player, true, 'hej');
                                }
                            },
                        },
                        mkhy: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                return player != event.player;
                            },
                            content() {
                                'step 0';
                                ui.discardPile.hasChildNodes();
                                ('step 1');
                                var list = ['弃牌堆'];
                                var source = ui.discardPile.childNodes;
                                var list = [];
                                for (var i = 0; i < source.length; i++) if (get.color(source[i]) != 'red') list.push(source[i]);
                                player.chooseButton(['请选择要获得的卡牌', list], true).ai = get.buttonValue;
                                ('step 2');
                                event.card = result.links[0];
                                // event.card=result.links[0];
                                ('step 3');
                                player.gain(event.card);
                                player.$gain(event.card);
                                ('step 4');
                            },
                        },
                        mkkd: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'useCard',
                            },
                            round: 1,
                            filter(event, player) {
                                return get.color(event.card) == 'black' && get.type(event.card) == 'equip';
                            },
                            content() {
                                'step 0';
                                player.chooseControl('不坏之身', '断魂一扼').set('prompt', '选择一种 W E');
                                ('step 1');
                                if (result.control == '不坏之身') {
                                    game.playAudio('../extension/英雄联盟/audio/不坏之身.mp3');
                                    player.changeHujia(2);
                                }
                                if (result.control == '断魂一扼') {
                                    player.chooseTarget(1, true, '选择一名其他角色,获得其一张牌', function (card, player, target) {
                                        return target != player;
                                    });
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    if (result.targets[0].countCards('he')) {
                                        game.playAudio('../extension/英雄联盟/audio/断魂一扼.mp3');
                                        player.gainPlayerCard(true, result.targets[0], 'he');
                                    }
                                    event.finish();
                                }
                                ('step 3');
                                ('step 4');
                            },
                        },
                        yeyy: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                global: 'useCardToBegin',
                            },
                            usable: 1,
                            filter(event, player) {
                                if (get.color(event.card) != 'black') return false;
                                if (event.player != player && event.target != player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                if (trigger.player == player) event.goto(1);
                                //  else   if(trigger.player==player&&trigger.target==player) event.goto(1);
                                else if (trigger.target == player) event.goto(3);
                                ('step 1');
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number);
                                player.useCard(card, trigger.targets);
                                ('step 2');
                                event.finish();
                                ('step 3');
                                trigger.cancel();
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        qpfa: {
                            audio: 'ext:英雄联盟/audio:9',
                            enable: 'phaseUse',
                            filterCard: true,
                            lose: false,
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('hs'); //你有牌时才能发动
                            },
                            content() {
                                'step 0';
                                player.chooseButton(
                                    [
                                        '请选择要获得的卡牌',
                                        Array.from(ui.discardPile.childNodes).filter(function (card) {
                                            return (get.type2(card) == 'trick') ^ (Array.isArray(player.storage.qpfa) && player.storage.qpfa.includes(card));
                                        }),
                                    ],

                                    true
                                ).ai = get.buttonValue;
                                ('step 1');
                                if (result.links?.length) {
                                    var links = result.links;
                                    player.storage.qpfa = (player.storage.qpfa || []).concat(links);
                                    ui.discardPile.insertBefore(cards[0], links[0]);
                                    player.directgain(links);
                                    /*      'step 0'
                       player.chooseToDiscard(true,'hs');
                  ui.discardPile.hasChildNodes();
                  'step 1'
                  var list=['弃牌堆'];
                   var source=ui.discardPile.childNodes;
                           var list=[];
                  for(var i=0;i<source.length;i++)if(get.type(source[i],'trick')=='trick') list.push(source[i]);
                  player.chooseButton(['请选择要获得的卡牌',list],true).ai=get.buttonValue;
                  'step 2'
                    event.card=result.links[0];
                  'step 3'
                      player.gain(event.card);
                       player.$gain(event.card);
                       game.delay();     */
                                }
                            },
                        },
                        fwxk: {
                            audio: 'ext:英雄联盟/audio:9',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.countCards('hej');
                            },
                            selectTarget: 2,
                            multitarget: true,
                            prompt: '弃置两名角色 各一张牌',
                            content() {
                                'step 0'; //第0步(必须从0开始)
                                event.target1 = targets[0];
                                event.target2 = targets[1];
                                player.discardPlayerCard(targets[0], true, 'hej');
                                ('step 1');
                                if (result.cards?.length) {
                                    event.card1 = result.cards[0].suit;
                                }
                                ('step 2'); //第1步
                                player.discardPlayerCard(targets[1], true, 'hej');
                                ('step 3');
                                if (result.cards?.length) {
                                    event.card2 = result.cards[0].suit;
                                }
                                ('step 4');
                                if (event.card1 != event.card2) {
                                    event.finish();
                                }
                                ('step 5');
                                player.chooseControl('对第一个目标', '或第二个目标', true).set('ai', function (event, player) { });
                                ('step 6');
                                if (result.control == '对第一个目标') {
                                    event.target1.damage(1);
                                } else {
                                    event.target2.damage(2);
                                }
                            },
                        },
                        lolkeji: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 3;
                                },
                            },
                            audio: 'ext:英雄联盟/audio:5',
                            trigger: {
                                player: ['loseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.equiping) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original != 'e' && get.type(i) != 'equip') return false;
                                        if (get.subtype(i) == 'equip3') return false;
                                        if (get.subtype(i) == 'equip4') return false;
                                        if (get.subtype(i) == 'equip5') return false;
                                    }
                                return true;
                            },
                            content() {
                                var card;
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        if (i.original == 'e' && get.type(i) == 'equip') {
                                            card = i;
                                        }
                                    }
                                if (card) {
                                    ui.special.appendChild(card);
                                    player.storage.lolkeji = card;
                                    var info = get.info(card);
                                    if (info.skills) {
                                        player.addAdditionalSkill('lolkeji', info.skills);
                                        player.addSkill(info.skills);
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip') return [1, 3];
                                    },
                                },
                            },
                            intro: {
                                content: 'card',
                            },
                            group: 'xshuangren2',
                        },
                        ljkder: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return player.countCards('hes');
                                // return event.player!=player&&player.countCards('hes');
                            },
                            content() {
                                player.chooseToDiscard(true, 'he');
                                player.draw();
                            },
                        },
                        hsxmyi: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return (event.card && event.card.name == 'sha' && event.card.nature == 'fire') || event.card.nature == 'thunder';
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        gexb: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                global: 'dying',
                            },
                            content() {
                                'step 0';
                                trigger.player.recover(2);
                                trigger.player.loseMaxHp(2);
                                ('step 1');
                                player.chooseControl('装备红线', '装备蓝盾', true).set('ai', function (event, player) { });
                                ('step 2');
                                if (result.control == '装备红线') {
                                    trigger.player.useCard(game.createCard('红线'), trigger.player);
                                } else {
                                    trigger.player.useCard(game.createCard('蓝盾'), trigger.player);
                                }
                            },
                        },
                        yzqier: {
                            sourceSkill: 'yzqi',
                            precontent() {
                                'step 0';
                                var cards = event.result.card.cards;
                                event.result.cards = cards;
                                var owner = get.owner(cards[0]);
                                event.target = owner;
                                owner.$give(cards[0], player, false);
                                player.popup(event.result.card.name, 'metal');
                                event.parent.addCount = false;
                                ('step 1');
                            },
                            filterCard() {
                                return false;
                            },
                            prompt: '选择杀(赤兔【♠️️︎5】)的目标',
                            selectCard: -1,
                            viewAs: {
                                name: 'sha',
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {}, gaintag: {} }, storage: { vanish: true }, vanishtag: [], gaintag: [], _uncheck: [], suit: 'spade', number: 5, name: 'chitu', cardid: '1946736832', clone: { name: 'chitu', suit: 'spade', number: 5, node: { name: {}, info: {}, intro: {}, background: {}, image: {}, gaintag: {} }, _transitionEnded: true, timeout: 3717 }, original: 'e', timeout: 3678 }],
                                storage: {
                                    shouli: true,
                                },
                            },
                            ai: {
                                order: 3,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    player: 1,
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
                        yzqi: {
                            audio: 'ext:英雄联盟/audio:9',
                            mod: {
                                cardUsable(card) {
                                    if (card.storage && card.storage.shouli) return Infinity;
                                },
                            },
                            group: ['yzqisj', 'yzqisi'],
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (player != _status.currentPhase && (name == 'sha' || name == 'shan')) return true;
                            },
                            filter(event, player) {
                                if (event.responded || event.shouli || event.type == 'wuxie') return false;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.getEquip(4);
                                    }) &&
                                    event.filterCard(
                                        {
                                            name: 'sha',
                                            storage: { shouli: true },
                                        },
                                        player,
                                        event
                                    )
                                )
                                    return true;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.getEquip(3);
                                    }) &&
                                    event.filterCard(
                                        {
                                            name: 'shan',
                                            storage: { shouli: true },
                                        },
                                        player,
                                        event
                                    )
                                )
                                    return true;
                                return false;
                            },
                            delay: false,
                            filterTarget(card, player, target) {
                                var event = _status.event,
                                    evt = event;
                                if (event._backup) evt = event._backup;
                                var equip3 = target.getEquip(3);
                                var equip4 = target.getEquip(4);
                                if (
                                    equip3 &&
                                    evt.filterCard &&
                                    evt.filterCard(
                                        {
                                            name: 'shan',
                                            storage: { shouli: true },
                                        },
                                        player,
                                        event
                                    )
                                )
                                    return true;
                                if (equip4) {
                                    var sha = {
                                        name: 'sha',
                                        storage: { shouli: true },
                                    }; //QQQ
                                    if (evt.filterCard(sha, player, event)) {
                                        if (!evt.filterTarget) return true;
                                        return game.hasPlayer(function (current) {
                                            return evt.filterTarget(sha, player, current);
                                        });
                                    }
                                }
                                return false;
                            },
                            prompt: '将场上的一张坐骑牌当做【杀】或【闪】使用或打出',
                            content() {
                                'step 0';
                                var evt = event.getParent(2);
                                evt.set('shouli', true);
                                var list = [];
                                var equip3 = target.getEquip(3);
                                var equip4 = target.getEquip(4);
                                if (
                                    equip3 &&
                                    evt.filterCard &&
                                    evt.filterCard(
                                        {
                                            name: 'shan',
                                            storage: { shouli: true },
                                        },
                                        player,
                                        evt
                                    )
                                )
                                    list.push('shan');
                                if (equip4) {
                                    var sha = {
                                        name: 'sha',
                                        storage: { shouli: true },
                                    };
                                    if (evt.filterCard(sha, player, evt)) {
                                        if (
                                            !evt.filterTarget ||
                                            game.hasPlayer(function (current) {
                                                return evt.filterTarget(sha, player, current);
                                            })
                                        ) {
                                            list.push('sha');
                                        }
                                    }
                                }
                                if (list.length == 1)
                                    event._result = {
                                        bool: true,
                                        links: [list[0] == 'shan' ? equip3 : equip4],
                                    };
                                else
                                    player.choosePlayerCard(true, target, 'e').set('filterButton', function (button) {
                                        var type = get.subtype(button.link);
                                        return type == 'equip3' || type == 'equip4';
                                    });
                                ('step 1');
                                var evt = event.getParent(2);
                                if (result.links?.length) {
                                    var name = get.subtype(result.links[0]) == 'equip3' ? 'shan' : 'sha';
                                    if (evt.name == 'chooseToUse') {
                                        game.broadcastAll(
                                            function (result, name) {
                                                lib.skill.yzqier.viewAs = {
                                                    name: name,
                                                    cards: [result],
                                                    storage: { shouli: true },
                                                };
                                                lib.skill.yzqier.prompt = `选择${get.translation(name)}(${get.translation(result)})的目标`;
                                            },
                                            result.links[0],
                                            name
                                        );
                                        evt.set('_backupevent', 'yzqier');
                                        evt.backup('yzqier');
                                        evt.set('openskilldialog', `选择${get.translation(name)}(${get.translation(result.links[0])})的目标`);
                                        evt.set('norestore', true);
                                        evt.set('custom', {
                                            add: {},
                                            replace: { window() { } },
                                        });
                                    } else {
                                        evt.result.card = {
                                            name: name,
                                            cards: [result],
                                            storage: { shouli: true },
                                        };
                                        evt.result.cards = [result.links[0]];
                                        target.$give(result.links[0], player, false);
                                        evt.redo();
                                        return;
                                    }
                                }
                                evt.goto(0);
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var subtype = tag == 'respondSha' ? 'equip4' : 'equip3';
                                    return game.hasPlayer(function (current) {
                                        return current.getEquip(subtype);
                                    });
                                },
                                order: 2,
                                result: {
                                    player(player, target) {
                                        var att = Math.max(8, get.attitude(player, target));
                                        if (_status.event.type != 'phase') return 9 - att;
                                        if (!player.hasValueTarget({ name: 'sha' })) return 10;
                                        return 9 - att;
                                    },
                                },
                            },
                        },
                        yzqisj: {
                            trigger: {
                                player: ['loseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.equiping) return false;
                                if (player.getEquip(3) || player.getEquip(4)) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var list = ['zixin', 'jueying', 'chitu', 'dawan', 'zhuahuang', 'dilu'];
                                player.equip(game.createCard(list.randomGet()));
                            },
                        },
                        yzqisi: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var list = ['zixin', 'jueying', 'chitu', 'dawan', 'zhuahuang', 'dilu'];
                                player.equip(game.createCard(list.randomGet()));
                            },
                        },
                        pofaer: {
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'wuxie';
                            },
                            content() {
                                'step 0'; //第0步(必须从0开始)
                                player.chooseTarget(function (card, player, target) {
                                    return target.countDiscardableCards(player, 'h');
                                });
                                ('step 1'); //第1步
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    var target = event.target;
                                    event.goto(2);
                                } else event.finish();
                                ('step 2');
                                var target = event.target;
                                player.discardPlayerCard(target, true, 'hs');
                                ('step 3'); //第1步
                                if (result.cards?.length) {
                                    if (get.type(result.cards[0]) != 'basic') {
                                        //判断不了属
                                        player.changeHujia(1);
                                    } else player.loseHp();
                                }
                                ('step 4'); //第1步
                                player.removeSkill('pofaer');
                            },
                        },
                        其道: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'linkAfter',
                            },
                            round: 1,
                            filter(event, player) {
                                if (event.name == 'link') return !event.player.isLinked();
                                return true;
                            },
                            content() {
                                'step 0'; //第1步
                                if (player.isLinked()) {
                                    event.finish();
                                } else event.goto(1);
                                ('step 1'); //第1步
                                player
                                    .chooseTarget(get.prompt('获取其所有技能直到你回合结束'), true, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var juese = game.filterPlayer();
                                        juese.remove(player);
                                        return juese.randomGet();
                                    });
                                ('step 2'); //第1步
                                if (result.targets?.length) {
                                    var skills = lib.character[result.targets[0].name][3];
                                    for (var j = 0; j < skills.length; j++) {
                                        player.addTempSkill(skills[j], { player: 'phaseAfter' });
                                    }
                                    player.storage.xiuxian_hu_qianmian++;
                                }
                            },
                            group: ['其道_roundcount'],
                        },
                        solmer: {
                            trigger: {
                                player: ['linkBefore', 'enterGame'],
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'link') return player.isLinked();
                                return (event.name != 'phase' || game.phaseNumber == 0) && !player.isLinked();
                            },
                            content() {
                                if (trigger.name != 'link') player.link(true);
                            },
                        },
                        pofa: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'wuxie' && get.color(card) != 'black') return;
                                    var cards = player.getCards('hs', function (card) {
                                        return card.name == 'wuxie' || get.color(card) == 'black';
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
                            audio: 'ext:英雄联盟/audio:4',
                            selectCard: 0,
                            filterCard: true,
                            position: 'hs',
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'wuxie',
                            },
                            prompt: '将一张牌当无懈可击使用',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            precontent() {
                                player.addTempSkill('pofaer');
                            },
                            ai: {
                                basic: {
                                    useful: [6, 4, 3],
                                    value: [6, 4, 3],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                        },
                        枷锁: {
                            audio: 'ext:英雄联盟/audio:3',
                            group: ['solmer'],
                            enable: 'chooseToUse',
                            usable: 1,
                            selectCard: 0,
                            filterCard: true,
                            position: 'he',
                            viewAs: {
                                name: 'tiesuo',
                            },
                            prompt: '将一张牌当铁锁连环使用',
                            viewAsFilter(player) {
                                //视为技的限制条件
                                return player.countCards('h'); //你有手牌时才能发动
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (_status.event.getRand() < 0.5) return 0;
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    useful: 4,
                                    value: 4,
                                    order: 7,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.isLinked()) {
                                            if (target.hasSkillTag('link')) return 0;
                                            var f = target.hasSkillTag('nofire');
                                            var t = target.hasSkillTag('nothunder');
                                            if (f && t) return 0;
                                            if (f || t) return 0.5;
                                            return 2;
                                        }
                                        if (get.attitude(player, target) >= 0) return -0.9;
                                        if (ui.selected.targets.length) return -0.9;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return get.attitude(player, current) <= -1 && current != target && !current.isLinked();
                                            })
                                        ) {
                                            return -0.9;
                                        }
                                        return 0;
                                    },
                                },
                                tag: {
                                    multitarget: 1,
                                    multineg: 1,
                                    norepeat: 1,
                                },
                            },
                        },
                        逆命: {
                            audio: 'ext:英雄联盟/audio:6',
                            trigger: {
                                global: 'dying',
                            },
                            round: 1,
                            content() {
                                trigger.player.hp = 2;
                                trigger.player.addSkill('nimksi');
                            },
                            group: ['逆命_roundcount'],
                        },
                        nimker: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.die();
                            },
                        },
                        nimkyi: {
                            trigger: {
                                global: 'die',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('nimksi');
                                player.removeSkill('nimker');
                                player.removeSkill('nimkyi');
                            },
                        },
                        nimksi: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.phase('nodelay');
                                player.addSkill('nimkyi');
                                player.addSkill('nimker');
                            },
                        },
                        vaycyi: {
                            trigger: {
                                player: ['linkBefore', 'enterGame', 'phaseBefore'],
                                global: ['useCardBefore', 'phaseBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'link') return player.isLinked();
                                return (event.name != 'phase' || game.phaseNumber == 0) && !player.isLinked();
                            },
                            content() {
                                if (trigger.name != 'link') player.link(true);
                                else trigger.cancel();
                            },
                        },
                        vaycer: {
                            trigger: {
                                player: 'die',
                            },
                            forced: true,
                            forceDie: true,
                            content() {
                                'step 0';
                                var players = game.filterPlayer(function (current) {
                                    return get.distance(player, current) == 1;
                                });
                                for (var i of players) {
                                    i.damage('fire');
                                }
                            },
                        },
                        vaycsj: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                player.loseHp();
                            },
                        },
                        vaycsi: {
                            trigger: {
                                player: 'dyingBegin',
                            },
                            forced: true,
                            content() {
                                player.die();
                            },
                        },
                        vaycwu: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            _priority: 30,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.phaseSkipped = true;
                            },
                        },
                        vayclq: {
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
                            },
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                game.removePlayer(player);
                            },
                        },
                        dnlo: {
                            trigger: {
                                global: 'die',
                            },
                            audio: 'ext:英雄联盟/audio:3',
                            preHidden: true,
                            content() {
                                'step 0';
                                'step 1';
                                player.chooseControl('获得一个桃', '或者 酒', true).set('ai', function (event, player) { });
                                ('step 2');
                                if (result.control == '获得一个桃') {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'tao';
                                    });
                                    player.gain(card, 'gain2');
                                } else {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'jiu';
                                    });
                                    player.gain(card, 'gain2');
                                }
                            },
                        },
                        炸药桶: {
                            group: ['vaycyi', 'vaycer', 'vaycsj', 'vaycsi', 'vaycwu', 'vayclq'],
                        },
                        rejianwu: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.hasSkill('rejianwu_shixiao');
                            },
                            content() {
                                player.link();
                                player.addTempSkill('rejianwu_shixiao');
                            },
                            group: 'rejianwu_link',
                            subSkill: {
                                link: {
                                    trigger: {
                                        player: 'linkAfter',
                                    },
                                    forced: true,
                                    content() {
                                        if (player.isLinked()) {
                                            var players = game.filterPlayer(function (current) {
                                                return get.distance(player, current) == 1;
                                            });
                                            for (var i of players) {
                                                i.damage();
                                                game.playAudio('../extension/英雄联盟/audio/剑舞.mp3');
                                            }
                                        } else {
                                            player.recover();
                                        }
                                    },
                                },
                                shixiao: {},
                            },
                        },
                        relianhua: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                return player != event.player;
                            },
                            forced: true,
                            content() {
                                player.restoreSkill('shunbu');
                                if (player.hasSkill('rejianwu')) player.removeSkill('rejianwu_shixiao');
                                if (player.isLinked()) player.link();
                                if (player.isTurnedOver()) player.turnOver();
                            },
                        },
                        shunbu: {
                            audio: 'ext:英雄联盟/audio:3',
                            changeSeat: true,
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.shunbu = false;
                            },
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target && player.next != target;
                            },
                            filter(event, player) {
                                if (player.storage.shunbu) return false;
                                return true;
                            },
                            prompt: '瞬步:选择一名角色移动到其上家(座位号-1)',
                            content() {
                                'step 0';
                                game.playAudio('../extension/英雄联盟/audio/3bgm.mp3');
                                var nextren = player.next;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.countMark('shunbuyi') > 0 && current != player;
                                    })
                                )
                                    event.goto(1);
                                else {
                                    if (player.countMark('shunbuyi') > 0) player.removeMark('shunbuyi');
                                    nextren.addMark('shunbuyi');
                                    nextren.addTempSkill('shunbuzhuan');
                                }
                                ('step 1');
                                player.addSkill('shunbuyi');
                                ('step 2');
                                player.awakenSkill('shunbu');
                                player.storage.shunbu = true;
                                game.broadcastAll(
                                    function (player, target) {
                                        game.swapSeat(player, target, true, true);
                                    },
                                    player,
                                    target
                                );
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        shunbuyi: {
                            mark: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.countMark('shunbuyi') > 0;
                                    })
                                )
                                    event.goto(1);
                                else {
                                    player.removeSkill('shunbuyi');
                                    event.finish();
                                }
                                ('step 1');
                                player.chooseTarget(true, get.prompt('shunbuyi'), '令原下一回合武将开启自己的回合', function (card, player, target) {
                                    return target.countMark('shunbuyi') > 0;
                                });
                                ('step 2');
                                if (result.targets?.length) {
                                    result.targets[0].removeMark('shunbuyi', 3);
                                    result.targets[0].removeSkill('shunbuzhuan');
                                    player.removeSkill('shunbuyi');
                                }
                            },
                        },
                        shunbuzhuan: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                var nextren = player.next;
                                nextren.addMark('shunbuyi');
                            },
                        },
                        qiyr: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                return get;
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'taoyuan',
                                // name:'taoyuan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', {})) return false;
                            },
                            prompt: '出牌阶段限一次,你可以将一张牌当做【桃园结义】使用.',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order() {
                                        return 11;
                                    },
                                    useful: [3, 1],
                                    value: 0,
                                },
                                result: {
                                    target(player, target) {
                                        return target.hp < target.maxHp ? 2 : 0;
                                    },
                                },
                                tag: {
                                    recover: 0.5,
                                    multitarget: 1,
                                },
                            },
                        },
                        jquu: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                'step 0';
                                var card = get.cardPile(function (card) {
                                    return card.name == 'tao';
                                });
                                player.gain(card, 'gain2');
                                event.given = 0;
                                ('step 1');
                                var card = get.cardPile(function (card) {
                                    return card.name == 'tao';
                                });
                                player.gain(card, 'gain2');
                                game.updateRoundNumber();
                                player.loseHp();
                                ('step 2');
                                player.chooseCardTarget({
                                    filterCard: true,
                                    selectCard: [1, 2 - event.given],
                                    filterTarget(card, player, target) {
                                        return player != target && target != event.temp;
                                    },
                                    ai1(card) {
                                        if (ui.selected.cards.length) return -1;
                                        if (card.name == 'du') return 20;
                                        return _status.event.player.countCards('h') - _status.event.player.hp;
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return 1 - att;
                                        }
                                        return att - 4;
                                    },
                                    prompt: '请选择要送人的卡牌',
                                });
                                ('step 3');
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(result.cards, player, 'giveAuto');
                                    event.given += result.cards.length;
                                    if (event.given < 2) {
                                        event.temp = result.targets[0];
                                        event.goto(2);
                                    } else if (event.count < trigger.num) {
                                        delete event.temp;
                                        event.count++;
                                        player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                    } else event.finish();
                                } else if (event.count < trigger.num) {
                                    delete event.temp;
                                    event.count++;
                                    player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                } else event.finish();
                                ('step 4');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                        },
                        冰甲: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: 'discard',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                'step 1';
                                player.draw(1);
                            },
                        },
                        lkds: {
                            group: ['lkdser'],
                            trigger: {
                                player: 'damageEnd',
                            },
                            audio: 'ext:英雄联盟/audio:2',
                            logTarget: 'source',
                            preHidden: true,
                            filter(event, player) {
                                return event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player;
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(true, trigger.source, 'hej');
                                ('step 1');
                                player.chooseToDiscard(true, 'hej');
                            },
                        },
                        破败: {
                            group: ['破败er'],
                            trigger: {
                                source: 'damageBefore',
                                player: 'damageBegin2',
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num);
                            },
                        },
                        破败er: {
                            trigger: {
                                global: 'loseHpAfter',
                            },
                            //    logTarget:'player',
                            content() {
                                player.discardPlayerCard(true, trigger.player, 'hej');
                                //player.draw(Math.min(5,trigger.player.maxHp-trigger.player.hp));
                                // player.draw(trigger.player.maxHp-trigger.player.hp);
                            },
                        },
                        lkdser: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.chooseToDiscard(true, 'he');
                                ('step 1');
                                player.chooseToDiscard(true, 'he');
                            },
                        },
                        hwyy: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('hes', { color: 'black' }); //你有手牌时才能发动
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player.chooseCard(true, 'hes', { color: 'black' }).forResult();
                                if (result.cards?.length) {
                                    const result1 = await player.chooseTarget(true).forResult(); //你可以选择一个目标
                                    if (result1.targets && result1.targets[0]) {
                                        player.useCard({ name: 'shandian' }, result1.targets[0], result.cards);
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                                threaten: 3,
                            },
                        },
                        雷神: {
                            audio: 'ext:英雄联盟/audio:3',
                            forced: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                trigger.cancel();
                                player.chat('你杀不死风暴!');
                                ('step 2');
                                event.count--;
                                player.gainMaxHp(2);
                                ('step 3');
                                player.recover(2);
                                ('step 4');
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        ykyj: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                return player != event.target && event.target.countCards('h') > 0;
                            },
                            content() {
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    player.discardPlayerCard(trigger.targets[i], 'h', true, 'visible');
                                }
                            },
                        },
                        bkgs: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                            trigger: {
                                player: ['enterGame', 'loseAfter'],
                                global: ['gameDrawAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'enterGame' || event.name == 'gameDraw') return true;
                                else {
                                    /*var bool=false;
                  for(var i of event.cards){
                      if(get.subtype(i)=='equip1'&&i.name!='hanbing') bool=true;
                      else if(i.name=='hanbing'&&!player.countCards('e','hanbing')) bool=true;
                  }*/
                                    var evt = event.getl(player);
                                    //game.log('装备区命运:'+player.countCards('e','hanbing')+'evt.es.length:'+evt);
                                    return evt && evt.player == player && evt.es && evt.es.length && !player.countCards('e', 'hanbing');
                                }
                            },
                            content() {
                                var hanbing = game.createCard('hanbing');
                                hanbing._destroy = true;
                                player.equip(hanbing, player);
                            },
                        },
                        bczz: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseMaxHp(1);
                                ('step 1');
                                player.chooseControl('获得一个额外的摸牌阶段', '获得一个额外的出牌阶段', true).set('ai', function (event, player) { });
                                ('step 2');
                                if (result.control == '获得一个额外的摸牌阶段') {
                                    var next = player.phaseDraw();
                                    event.next.remove(next);
                                    trigger.next.push(next);
                                } else {
                                    var next = player.phaseUse();
                                    event.next.remove(next);
                                    trigger.next.push(next);
                                }
                            },
                            group: ['mashu'],
                            ai: {
                                result: {
                                    target: 1,
                                },
                                order: 12,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                            },
                        },
                        wwgl: {
                            trigger: {
                                global: 'roundStart',
                            },
                            intro: {
                                content: '已对$发动此技能',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !player.getStorage('wwgl').includes(current);
                                });
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('选择一个目标', function (card, player, target) {
                                    return !player.getStorage('wwgl').includes(target);
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.markAuto('wwgl', [target]);
                                    target.gainMaxHp(2);
                                    target.recover(2);
                                    player.markSkill('wwgl');
                                    target.addSkillLog('bczz');
                                    player.chat('粉身碎骨,或是百炼成钢.');
                                }
                            },
                        },
                        jiee: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (player.countCards('j') && player.inRange(target)) {
                                        return true;
                                    }
                                },
                                cardUsableTarget(card, player, target) {
                                    if (player.countCards('j') && player.inRange(target)) return true;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - 100;
                                },
                                aiValue(player, card, num) {
                                    if (card.name == 'zhangba') return 15;
                                    if (player.getEquip('zhangba') && player.countCards('hs') > 1 && ['shan', 'tao'].includes(card.name)) return 0;
                                    if (card.name == 'shan' || card.name == 'tao') return num / 2;
                                },
                            },
                            audio: 'ext:英雄联盟/audio:2',
                            enable: 'phaseUse',
                            discard: false,
                            viewAs: {
                                name: 'bingliang',
                            },
                            position: 'hes',
                            filterCard(card, player, event) {
                                return player.canAddJudge({ name: 'bingliang', cards: [card] });
                            },
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (!player.getEquip('zhangba') && player.countCards('hs', 'sha') < 2) {
                                    if (
                                        player.countCards('h', function (cardx) {
                                            return cardx != card && cardx.name == 'shan';
                                        }) > 0
                                    )
                                        return 0;
                                    var damaged = player.maxHp - player.hp - 1;
                                    var ts = player.countCards('h', function (cardx) {
                                        return cardx != card && cardx.name == 'tao';
                                    });
                                    if (ts > 0 && ts > damaged) return 0;
                                }
                                if (card.name == 'shan') return 15;
                                if (card.name == 'tao') return 10;
                                return 9 - get.value(card);
                            },
                            onuse(links, player) {
                                var next = game.createEvent('limu_recover', false, _status.event.parent);
                                next.player = player;
                                next.setContent(function () {
                                    player.draw(3);
                                });
                            },
                            ai: {
                                result: {
                                    target: 1,
                                },
                                order: 12,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                tag: {
                                    skip: 'phaseUse',
                                },
                            },
                        },
                        gzsohgvi: {
                            mod: {
                                cardUsable(card) {
                                    if (card.storage && card.storage.shouli) return Infinity;
                                },
                                targetInRange(card) {
                                    if (card.storage && card.storage.shouli) return true;
                                },
                            },
                            group: ['hgvigzso'],
                            audio: 'ext:英雄联盟/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            usable: 1,
                            filter(event, player) {
                                return (
                                    event.filterCard &&
                                    event.filterCard(
                                        {
                                            name: 'sha' + (player.isLinked() ? '' : 'n'),
                                            storage: {
                                                shouli: true,
                                            },
                                        },
                                        player,
                                        event
                                    )
                                );
                            },
                            viewAs(cards, player) {
                                return {
                                    name: 'sha' + (player.isLinked() ? '' : 'n'),
                                    storage: {
                                        shouli: true,
                                    },
                                };
                            },
                            filterCard: () => false,
                            selectCard: -1,
                            prompt: '将武将牌重置并视为使用【杀】',
                            log: false,
                            check: () => 1,
                            precontent() {
                                player.link();
                            },
                            ai: {
                                order: 2,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    return tag == 'respondSha' + (player.isLinked() ? '' : 'n');
                                },
                            },
                        },
                        jkmi: {
                            audio: 'ext:英雄联盟/audio:5',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            init(player) {
                                player.storage.jingmi = 0;
                            },
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.jingmi % 2 == 1) return `可发动<br><li>已使用${player.storage.jingmi}张杀`;
                                    return `已使用${player.storage.jingmi}张杀`;
                                },
                            },
                            mark: true,
                            forced: true,
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.storage.jingmi++;
                                ('step 1');
                                if (player.storage.jingmi % 2 == 1) {
                                    event.finish();
                                }
                                ('step 2');
                                player.addTempSkill('jkmier');
                                trigger.target.addTempSkill('qinggang2');
                                trigger.target.storage.qinggang2.add(trigger.card);
                                trigger.parent.directHit.add(trigger.target);
                            },
                        },
                        jkmier: {
                            audio: 'ext:英雄联盟/audio:2',
                            forced: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                trigger.num++;
                                ('step 1');
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num);
                                ('step 2');
                                player.removeSkill('jkmier');
                            },
                        },
                        hjyu: {
                            group: ['hjyuer'],
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(lib.sort.seat);
                                event.targets = targets;
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.num = 0;
                                player.line(targets, 'green');
                                ('step 2');
                                if (num < event.targets.length) {
                                    if (!get.is.altered('hjyu')) {
                                        if (event.targets[num].countDiscardableCards(player, 'hej')) {
                                            player.discardPlayerCard(event.targets[num], true, 'hej');
                                        }
                                    } else {
                                        var hej = event.targets[num].getCards('hej');
                                        if (hej.length) {
                                            var card = hej.randomGet();
                                            player.discard(card, event.targets[num]);
                                            if (get.position(card) == 'h') {
                                                event.targets[num].$giveAuto(card, player);
                                            } else {
                                                event.targets[num].$give(card, player);
                                            }
                                        }
                                    }
                                    event.num++;
                                    event.redo();
                                }
                                ('step 3');
                                ('step 4');
                                event.count--;
                                if (event.count) {
                                    player.chooseBool(get.prompt2('hjyu'));
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (event.count && result.bool) {
                                    event.goto(1);
                                }
                            },
                        },
                        hjyuer: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.addSkill('jmll');
                                trigger.player.addMark('jmll', 1);
                                //同步标记(每当标记变动都要写这句)
                            },
                        },
                        tyui: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('hes'); //你有手牌时才能发动
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', true);
                                ('step 1');
                                trigger.cancel();
                                trigger.player.loseMaxHp(true);
                                ('step 2');
                                player.gainMaxHp(2);
                                ('step 3');
                                player.recover(2);
                            },
                        },
                        wujulicisu: {
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            popup: false,
                            firstDo: true,
                            charlotte: true,
                            mod: {
                                cardUsable(card) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            content() {
                                player.removeSkill('wujulicisu');
                            },
                            mark: true,
                            intro: {
                                content: '下一张! 【杀】无距离和次数限制',
                            },
                        },
                        hgvigzso: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: 'linkAfter',
                            },
                            mod: {
                                cardUsable(card) {
                                    if (card.storage && card.storage.shouli) return Infinity;
                                },
                                targetInRange(card) {
                                    if (card.storage && card.storage.shouli) return true;
                                },
                            },
                            forced: true,
                            filter(event, player) {
                                //发动限制条件
                                if (player.isLinked()) return true;
                                // return false;
                            },
                            content() {
                                if (player.isLinked()) {
                                    //   player.addSkill('ycgl');
                                    //  player.addSkill('wujulicisu');
                                }
                            },
                        },
                        ffuf: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('wujulicisu');
                                player.chooseCard('你可以弃置至多两张牌令等量正面向上的角色翻面', [1, 2], false, 'hes');
                                ('step 1');
                                if (result.bool) {
                                    player.length = result.cards.length;
                                    player.discard(result.cards);
                                } else event.finish();
                                ('step 2');
                                player.chooseTarget(`令${result.cards.length}名正面向上的角色翻面`, result.cards.length, true, function (card, player, target) {
                                    return !target.isTurnedOver();
                                });
                                ('step 3');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].turnOver();
                                        result.targets[i].draw(3);
                                    }
                                }
                            },
                        },
                        naaa: {
                            audio: 'ext:英雄联盟/audio:2',
                            limited: true,
                            mark: true,
                            init(player) {
                                player.storage.naaa = false;
                            },
                            enable: 'phaseUse',
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.naaa == false && player.awakenSkill('naaa');
                            },
                            content() {
                                player.storage.naaa = true; //技能发动过
                                player.awakenSkill('naaa'); //技能文本变灰(失去技能,标记消失)
                            },
                            chooseButton: {
                                dialog(player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        if (get.type(lib.inpile[i]) == 'trick') list.push(['锦囊', '', lib.inpile[i]]);
                                    }
                                    return ui.create.dialog(get.translation('qice'), [list, 'vcard']);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var recover = 0,
                                        lose = 1,
                                        players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i.hp == 1 && get.damageEffect(i, player, player) > 0 && !i.hasSha()) {
                                            return button.link[2] == 'juedou' ? 2 : -1;
                                        }
                                        if (!i.isOut()) {
                                            if (i.hp < i.maxHp) {
                                                if (get.attitude(player, i) > 0) {
                                                    if (i.hp < 2) {
                                                        lose--;
                                                        recover += 0.5;
                                                    }
                                                    lose--;
                                                    recover++;
                                                } else if (get.attitude(player, i) < 0) {
                                                    if (i.hp < 2) {
                                                        lose++;
                                                        recover -= 0.5;
                                                    }
                                                    lose++;
                                                    recover--;
                                                }
                                            } else {
                                                if (get.attitude(player, i) > 0) {
                                                    lose--;
                                                } else if (get.attitude(player, i) < 0) {
                                                    lose++;
                                                }
                                            }
                                        }
                                    }
                                    if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
                                    if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
                                    return button.link[2] == 'wuzhong' ? 1 : -1;
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: 0, //把一张
                                        audio: 'ext:英雄联盟/audio:2',
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                    };
                                },
                                prompt(links, player) {
                                    return `视为${get.translation(links[0][2])}使用`;
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        var num = 0;
                                        var cards = player.getCards('h');
                                        if (cards.length >= 3 && player.hp >= 3) return 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                num += Math.max(0, get.value(i, player, 'raw'));
                                            }
                                        num /= cards.length;
                                        num *= Math.min(cards.length, player.hp);
                                        return 12 - num;
                                    },
                                },
                                threaten: 1.6,
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        bmxk: {
                            trigger: {
                                player: 'linkAfter',
                            },
                            forced: true,
                            content() {
                                if (player.isLinked()) {
                                    player.gainMaxHp(2);
                                    player.recover(2);
                                    player.restoreSkill('naaa');
                                } else {
                                    player.loseMaxHp(2);
                                }
                            },
                        },
                        jinu: {
                            audio: 'ext:英雄联盟/audio:5',
                            trigger: {
                                player: ['turnOverAfter', 'dyingBegin'],
                            },
                            forced: true,
                            content() {
                                player.link();
                            },
                        },
                        mmho: {
                            forced: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                            },
                        },
                        nixk: {
                            group: ['mmho'],
                            trigger: {
                                player: ['linkBefore', 'enterGame'],
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'link') return player.isLinked();
                                return (event.name != 'phase' || game.phaseNumber == 0) && !player.isLinked();
                            },
                            content() {
                                if (trigger.name != 'link') player.link(true);
                                else trigger.cancel();
                            },
                        },
                        dchd: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                source: 'damageEnd',
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.turnOver();
                                ('step 1');
                                player.turnOver();
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        lhke: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            filter(event, player) {
                                if (player.next == _status.currentPhase) return false;
                                if (player == _status.currentPhase) return false;
                                if (event.responded) return false;
                                if (event.bagua_skill) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                var evt = event.parent;
                                if (
                                    evt.player &&
                                    evt.player.hasSkillTag('unequip', false, {
                                        name: evt.card ? evt.card.name : null,
                                        target: player,
                                        card: evt.card,
                                    })
                                )
                                    return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var target2 = player.next;
                                game.broadcastAll(
                                    function (player, target2) {
                                        //  game.swapSeat(target1,target2);
                                        game.swapSeat(player, player.next);
                                    },
                                    player,
                                    player.next
                                );
                                player.draw();
                                player.chat('不可久留于一处');
                                trigger.bagua_skill = true;
                                judge = function (result) {
                                    return result.bool;
                                };
                                ('step 1');
                                trigger.set('responded', true);
                                trigger.result = { bool: true, card: { name: 'shan' } };
                            },
                        },
                        lpvj: {
                            audio: 'ext:英雄联盟/audio:2',
                            forced: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            mod: {
                                cardUsable(card) {
                                    if (card.suit == 'spade') return true;
                                },
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.card.suit == 'spade';
                            },
                            content() {
                                trigger.player.turnOver();
                                player.chat('别在动!');
                            },
                        },
                        sibc: {
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                'step 0';
                                'step 1';
                                event.num = 0;
                                event.targets = game.filterPlayer();
                                ('step 2');
                                if (event.num < event.targets.length) {
                                    event.targets[event.num].addTempSkill('sibc');
                                    event.targets[event.num].loseHp(1);
                                    event.num++;
                                    event.redo();
                                }
                            },
                        },
                        ulhx: {
                            audio: 'ext:英雄联盟/audio:7',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'basic';
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            init(player) {
                                player.storage.ulhx = 0;
                            },
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.ulhx % 2 == 1) return `可发动<br><li>已使用${player.storage.ulhx}张基本牌`;
                                    return `已使用${player.storage.ulhx}张基本牌`;
                                },
                            },
                            mark: true,
                            forced: true,
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.storage.ulhx++;
                                ('step 1');
                                if (player.storage.ulhx % 2 == 1) {
                                    event.finish();
                                }
                                ('step 2');
                                player.draw(2);
                            },
                        },
                        fgmoer: {
                            audio: 'ext:英雄联盟/audio:3',
                            forced: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            mod: {
                                targetInRange(card) {
                                    if (card.suit == 'spade') return true;
                                },
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return !get.is.altered('feiren') & (event.card.suit == 'spade') && event.notLink();
                            },
                            content() {
                                trigger.player.turnOver();
                            },
                        },
                        jtxi: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                global: ['turnOverAfter', 'swapSeat'],
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player
                                    .chooseToUse({ name: 'sha' }, `是否对${get.translation(trigger.player)}使用一张杀？`)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', trigger.player);
                                ('step 2');
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        uhjk: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                global: 'dyingBegin',
                            },
                            filter(event, player) {
                                return player != _status.currentPhase;
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player.chooseTarget().forResult();
                                if (result.targets?.length) {
                                    result.targets[0].draw(2);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            var num = 1;
                                            if (get.attitude(player, target) > 0) {
                                                if (player.needsToDiscard()) {
                                                    num = 0.7;
                                                } else {
                                                    num = 0.5;
                                                }
                                            }
                                            if (target.hp >= 4) return [1, num * 2];
                                            if (target.hp == 3) return [1, num * 1.5];
                                            if (target.hp == 2) return [1, num * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        sijk: {
                            audio: 'ext:英雄联盟/audio:6',
                            trigger: {
                                player: ['chooseToUseBegin', 'chooseToRespondBegin'],
                            },
                            forced: true,
                            hiddenCard(player, name) {
                                if (player != _status.currentPhase && get.type(name) == 'basic' && lib.inpile.includes(name)) return true;
                            },
                            filter(event, player) {
                                if (event.responded || player == _status.currentPhase) return false;
                                for (var i of lib.inpile) {
                                    if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            delay: false,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                            },
                            group: ['uhjk'],
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        yzhy: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isAlive() && event.player.hp == 1;
                            },
                            content() {
                                'step 0'; //第0步(必须从0开始)
                                player.addTempSkill('vjua');
                                player
                                    .chooseToUse({ name: 'sha' }, `幽魂:是否对${get.translation(trigger.player)}使用一张杀？`)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', trigger.player);
                                ('step 1'); //第0步(必须从0开始)
                                player.chat(' X ! ');
                            },
                        },
                        mozd: {
                            trigger: {
                                global: 'roundStart',
                                player: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (event.triggername == 'dieBegin') {
                                    event.goto(4);
                                }
                                ('step 1');
                                event.target = game.filterPlayer().randomGet(player);
                                if (!event.target) {
                                    event.finish();
                                    return;
                                }
                                player.line(event.target);
                                ('step 2');
                                event.target.loseHp();
                                ('step 3');
                                event.finish();
                                ('step 4');
                                player.next.addSkill('mozd');
                            },
                        },
                        uihy: {
                            group: ['uihyyi'],
                            trigger: {
                                global: 'loseHpAfter',
                            },
                            forced: true,
                            content() {
                                player.draw(Math.min(5, trigger.player.maxHp - trigger.player.hp));
                                // player.draw(trigger.player.maxHp-trigger.player.hp);
                            },
                        },
                        uihyyi: {
                            trigger: {
                                global: 'die',
                            },
                            content() {
                                'step 0';
                                player.recover();
                                ('step 1');
                                var skills = lib.character[trigger.player.name][3];
                                for (var j = 0; j < skills.length; j++) {
                                    player.addTempSkill(skills[j], { player: 'phaseAfter' });
                                }
                                player.storage.xiuxian_hu_qianmian++;
                            },
                        },
                        aouu: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('aouu'), function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    if (target.hasSkill('hongyan')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        var suit = card.suit;
                                        if (suit == 'spade') return -4;
                                        if (suit == 'club') return -2;
                                        return 0;
                                    }).judge2 = function (result) {
                                        return result.bool == false ? true : false;
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.suit == 'club') {
                                    player.gain(result.card);
                                    player.$gain2(result.card);
                                } else if (result.suit == 'spade') {
                                    event.target.damage(1, 'thunder');
                                }
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        fayb: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.countCards('he', { color: 'black' }) > 0;
                            },
                            position: 'he',
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'tiesuo',
                            },
                            prompt: '将一张黑色牌当铁锁连环使用',
                            check(card) {
                                return 4.5 - get.value(card);
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (_status.event.getRand() < 0.5) return 0;
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    useful: 4,
                                    value: 4,
                                    order: 7,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.isLinked()) {
                                            if (target.hasSkillTag('link')) return 0;
                                            var f = target.hasSkillTag('nofire');
                                            var t = target.hasSkillTag('nothunder');
                                            if (f && t) return 0;
                                            if (f || t) return 0.5;
                                            return 2;
                                        }
                                        if (get.attitude(player, target) >= 0) return -0.9;
                                        if (ui.selected.targets.length) return -0.9;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return get.attitude(player, current) <= -1 && current != target && !current.isLinked();
                                            })
                                        ) {
                                            return -0.9;
                                        }
                                        return 0;
                                    },
                                },
                                tag: {
                                    multitarget: 1,
                                    multineg: 1,
                                    norepeat: 1,
                                },
                            },
                        },
                        jbgu: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'h',
                            selectCard: 1,
                            filterTarget(card, player, target) {
                                if (!target.isLinked()) return false;
                                return true;
                            },
                            filterCard: true,
                            viewAs: {
                                name: 'lebu',
                            },
                            prompt: '将一张手牌当乐不思蜀使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                threaten: 1.5,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                result: {
                                    target(player, target) {
                                        var num = target.hp - target.countCards('h') - 2;
                                        if (num > -1) return -0.01;
                                        if (target.hp < 3) num--;
                                        if (target.isTurnedOver()) num /= 2;
                                        var dist = get.distance(player, target, 'absolute');
                                        if (dist < 1) dist = 1;
                                        return num / Math.sqrt(dist);
                                    },
                                    ignoreStatus: true,
                                },
                                tag: {
                                    skip: 'phaseUse',
                                },
                            },
                        },
                        lmue: {
                            audio: 'ext:英雄联盟/audio:6',
                            trigger: {
                                player: ['respond', 'useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'basic') == 'basic';
                            },
                            content() {
                                'step 0'; //必须从0开始,引号可以是单引号,但是整个技能里面不能变
                                player.judge(); //你进行一次判定
                                ('step 1'); //第1步
                                switch (
                                result.suit //根据判定牌的花色
                                ) {
                                    case 'spade':
                                        player.addTempSkill('咆哮');
                                        break; //♠️️:你失去一点体力
                                    case 'club':
                                        player.addTempSkill('咆哮');
                                        break;
                                    case 'heart':
                                        player.addTempSkill('武圣');
                                        break; //♥️️:你摸一张牌
                                    case 'diamond':
                                        player.addTempSkill('武圣');
                                        break;
                                }
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        ufyi: {
                            audio: 'ext:英雄联盟/audio:5',
                            trigger: {
                                global: 'cardsDiscardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.parent.relatedEvent;
                                if (!evt || evt.name != 'judge') return;
                                if (event.player == player) return false;
                                if (get.position(event.cards[0], true) != 'd') return false;
                                return get.color(event.cards[0]) == 'red';
                            },
                            content() {
                                'step 0';
                                player.chooseButton(['圣遗物:选择要获得的牌', trigger.cards], [1, trigger.cards.length]).set('ai', function (button) {
                                    return get.value(button.link, _status.event.player, 'raw');
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2', 'log');
                                }
                            },
                        },
                        ufyier: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                global: 'loseAfter',
                            },
                            filter(event, player) {
                                if (event.type != 'discard') return false;
                                if (event.player == player) return false;
                                for (var i = 0; i < event.cards2.length; i++) {
                                    if (get.color(event.cards2[i], event.player) == 'red' && get.position(event.cards2[i], true) == 'd') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.delay == false) game.delay();
                                ('step 1');
                                var cards = [];
                                for (var i = 0; i < trigger.cards2.length; i++) {
                                    if (get.color(trigger.cards2[i], trigger.player) == 'red' && get.position(trigger.cards2[i], true) == 'd') {
                                        cards.push(trigger.cards2[i]);
                                    }
                                }
                                if (cards.length) {
                                    player.chooseButton(['圣遗物:选择要获得的牌', cards], 1).set('ai', function (button) {
                                        return get.value(button.link, _status.event.player, 'raw');
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2', 'log');
                                }
                            },
                        },
                        ufyisj: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                global: 'cardsDiscardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.parent.relatedEvent;
                                if (!evt || evt.name != 'judge') return;
                                if (event.player == player) return false;
                                if (get.position(event.cards[0], true) != 'd') return false;
                                return get.color(event.cards[0]) == 'red';
                            },
                            content() {
                                'step 0';
                                player.chooseButton(['圣遗物:选择要获得的牌', trigger.cards], [1, trigger.cards.length]).set('ai', function (button) {
                                    return get.value(button.link, _status.event.player, 'raw');
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2', 'log');
                                }
                            },
                        },
                        molm: {
                            audio: 'ext:英雄联盟/audio:1',
                            enable: 'phaseUse',
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            content() {
                                'step 0';
                                player.useCard(game.createCard('guanshi'), player);
                            },
                        },
                        xixt: {
                            forced: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                //  event.count=trigger.num;
                                'step 1';
                                player.recover(trigger.num);
                                /*   'step 2'
                event.count--;
                'step 3'
                   if(event.count>0) event.goto(1);*/
                            },
                        },
                        uixt: {
                            group: ['xixt'],
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                            },
                        },
                        anyk: {
                            forced: true,
                            juexingji: true,
                            init(player) {
                                player.storage.anyk = false;
                            },
                            trigger: {
                                global: 'dyingBegin',
                            },
                            content() {
                                'step 0';
                                var card = get.cardPile(function (card) {
                                    return card.name == 'jiu';
                                });
                                player.gain(card, 'gain2');
                                ('step 1');
                                var card = get.cardPile(function (card) {
                                    return card.name == 'juedou';
                                });
                                player.gain(card, 'gain2');
                                ('step 2');
                                player.chooseControl('影流之镰(破)', '暗裔魔镰(血)', true).set('ai', function (event, player) { });
                                ('step 3');
                                if (result.control == '影流之镰(破)') {
                                    ui.backgroundMusic.src = 'extension/英雄联盟/audio/影流之镰.mp3';
                                    game.playAudio('../extension/英雄联盟/audio/ltyk5.mp3');
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'nanman';
                                    });
                                    player.gain(card, 'gain2');
                                    player.loseMaxHp(1);
                                    player.addSkill('ltyk');
                                    player.addSkill('qixi');
                                    player.chat('我将暗裔扼杀于微弱之际,还有谁？胆敢挑 衅我!');
                                    game.broadcastAll(function (user) {
                                        +player.node.avatar.setBackgroundImage('extension/英雄联盟/image/影流之镰.jpg');
                                    }, player);
                                    game.broadcastAll(function (user) {
                                        user.node.name.innerHTML = '影流之镰';
                                    }, player);
                                } else {
                                    ui.backgroundMusic.src = 'extension/英雄联盟/audio/暗裔魔镰.mp3';
                                    game.playAudio('../extension/英雄联盟/audio/molm1.mp3');
                                    player.addSkill('molm');
                                    player.addSkill('uixt');
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'tao';
                                    });
                                    player.gain(card, 'gain2');
                                    player.gainMaxHp(1);
                                    player.chat('破体而出,暗裔降临!');
                                    // game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/英雄联盟/image/暗裔魔镰.jpg');
                                    game.broadcastAll(function (user) {
                                        +player.node.avatar.setBackgroundImage('extension/英雄联盟/image/暗裔魔镰.jpg');
                                    }, player);
                                    game.broadcastAll(function (user) {
                                        user.node.name.innerHTML = '暗裔魔镰';
                                    }, player);
                                }
                                ('step 4');
                                ('step 5');
                                player.awakenSkill('anyk'); //技能文本变灰(失去技能,标记消失)
                            },
                        },
                        ltyker: {
                            trigger: {
                                global: 'loseAfter',
                            },
                            audio: 'ext:英雄联盟/audio:5',
                            forced: true,
                            filter(event, player) {
                                if (event.type != 'discard') return false;
                                for (var i = 0; i < event.cards2.length; i++) {
                                    if (get.color(event.cards2[i], event.player) == 'black' && get.position(event.cards2[i], true) == 'd') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (trigger.delay == false) game.delay();
                                ('step 1');
                                var cards = [];
                                for (var i = 0; i < trigger.cards2.length; i++) {
                                    if (get.color(trigger.cards2[i], trigger.player) == 'black' && get.position(trigger.cards2[i], true) == 'd') {
                                        cards.push(trigger.cards2[i]);
                                    }
                                }
                                if (cards.length) {
                                    player.chooseButton(['掠影:选择要获得的牌', cards], [1, cards.length]).set('ai', function (button) {
                                        return get.value(button.link, _status.event.player, 'raw');
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2', 'log');
                                }
                            },
                        },
                        ltyksj: {
                            trigger: {
                                global: 'cardsDiscardAfter',
                            },
                            audio: 'ext:英雄联盟/audio:5',
                            forced: true,
                            filter(event, player) {
                                var evt = event.parent.relatedEvent;
                                if (!evt || evt.name != 'judge') return;
                                if (get.position(event.cards[0], true) != 'd') return false;
                                return get.color(event.cards[0]) == 'black';
                            },
                            content() {
                                'step 0';
                                player.chooseButton(['掠影:选择要获得的牌', trigger.cards], [1, trigger.cards.length]).set('ai', function (button) {
                                    return get.value(button.link, _status.event.player, 'raw');
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2', 'log');
                                }
                            },
                        },
                        ltyk: {
                            group: ['ltyker', 'ltyksj'],
                            subfrequent: ['judge'],
                            audio: 'ext:英雄联盟/audio:5',
                            subSkill: {
                                discard: {
                                    audio: 'ext:英雄联盟/audio:2',
                                    trigger: {
                                        global: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.type != 'discard') return false;
                                        for (var i = 0; i < event.cards2.length; i++) {
                                            if (get.color(event.cards2[i], event.player) == 'black' && get.position(event.cards2[i], true) == 'd') {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (trigger.delay == false) game.delay();
                                        ('step 1');
                                        var cards = [];
                                        for (var i = 0; i < trigger.cards2.length; i++) {
                                            if (get.color(trigger.cards2[i], trigger.player) == 'black' && get.position(trigger.cards2[i], true) == 'd') {
                                                cards.push(trigger.cards2[i]);
                                            }
                                        }
                                        if (cards.length) {
                                            player.chooseButton(['掠影:选择要获得的牌', cards], [1, cards.length]).set('ai', function (button) {
                                                return get.value(button.link, _status.event.player, 'raw');
                                            });
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2', 'log');
                                        }
                                    },
                                },
                                judge: {
                                    audio: 'ext:英雄联盟/audio:2',
                                    trigger: {
                                        global: 'cardsDiscardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.parent.relatedEvent;
                                        if (!evt || evt.name != 'judge') return;
                                        if (get.position(event.cards[0], true) != 'd') return false;
                                        return get.color(event.cards[0]) == 'black';
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseButton(['掠影:选择要获得的牌', trigger.cards], [1, cards.length]).set('ai', function (button) {
                                            return get.value(button.link, _status.event.player, 'raw');
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2', 'log');
                                        }
                                    },
                                },
                            },
                        },
                        hvlqer: {
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h', { name: 'shan' })) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.name == 'shan') return true;
                                    }
                                return false;
                            },
                            content() {
                                player.addTempSkill('wujulicisu');
                                player.chooseUseTarget('sha', get.prompt('hvlqer'), '视为使用一张【杀】');
                            },
                        },
                        ying1: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                //if(event.responded) return false;
                                //if(player.storage.hujiaing) return false;
                                //if(!player.hasZhuSkill('hujia')) return false;
                                //if(!event.filterCard || !event.filterCard({name:'shan'},player,event)) return false;
                                /*return game.hasPlayer(function(current){
                    return current!=player&&current.group=='wei';
                });*/
                                if (event.card.name != 'sha') return false;
                                return game.hasPlayer(function (current) {
                                    return current.isTurnedOver();
                                });
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                if (event.current == undefined) event.current = player.next;
                                if (event.current == player) {
                                    event.finish();
                                } else {
                                    if (event.current.isTurnedOver()) event.current.chooseBool('是否替劫成为目标？');
                                }
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.excluded.add(player);
                                }
                                ('step 2');
                                if (result.bool) {
                                    trigger.parent.targets.push(event.current);
                                    trigger.player.line(event.current, 'red');
                                    player.line(event.current, 'green');
                                    event.current.turnOver();
                                    event.finish();
                                } else {
                                    event.current = event.current.next;
                                    event.goto(0);
                                }
                            },
                        },
                        ying2: {
                            trigger: {
                                player: 'shaEnd',
                            },
                            filter(event, player) {
                                return !get.is.altered('feiren') && event.card && event.card.name == 'sha';
                                if (event.target == player) return false;
                                return true;
                            },
                            popup: false,
                            forced: true,
                            logTarget: 'target',
                            content() {
                                'step 0';
                                if (event.current == undefined) {
                                    event.current == player;
                                } else {
                                    if (event.current != trigger.targets[0] && event.current.canUse('sha', trigger.targets[0]) && event.current.hasCard('sha', 'hes'));
                                    if (event.current.isTurnedOver()) event.current.chooseBool('是否帮劫再使用一张杀？');
                                }
                                ('step 1');
                                //player.storage.hujiaing=false;
                                if (result.bool) {
                                    event.current.turnOver();
                                    event.current.chooseToDiscard('h', { name: 'sha' }, `弃置一张杀视为对${trigger.targets[0]}使用`, true);
                                    event.current.useCard(
                                        {
                                            name: 'sha',
                                            nature: 'basic',
                                        },
                                        false,
                                        trigger.targets[0],
                                        false
                                    );
                                } else {
                                    event.current = event.current.next;
                                    if (event.current == player) {
                                        event.finish();
                                    } else event.goto(0);
                                }
                            },
                        },
                        hvlq: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: ['useCard', 'respond', 'loseAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name != 'lose') return event.card.name == 'shan';
                                if (event.type != 'discard') return false;
                                if (event.cards2) {
                                    for (var i = 0; i < event.cards2.length; i++) {
                                        if (event.cards2[i].name == 'shan') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (trigger.name == 'lose') {
                                    for (var i = 0; i < trigger.cards2.length; i++) {
                                        if (trigger.cards2[i].name == 'shan') event.count++;
                                    }
                                }
                                ('step 1');
                                player.addTempSkill('wujulicisu');
                                player.chooseUseTarget('sha', get.prompt('hvlq'), '视为使用一张【杀】');
                                ('step 2');
                                if (event.count) {
                                    player.chooseBool(get.prompt2('hvlq')).set('frequentSkill', 'hvlq');
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                }
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        vjua: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                var target = event.player;
                                return event.parent.name == 'sha';
                            },
                            content() {
                                trigger.num += 998;
                            },
                        },
                        mixb: {
                            audio: 'ext:英雄联盟/audio:3',
                            group: ['mixber'],
                            shaRelated: true,
                            forced: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.card.suit == 'spade';
                            },
                            logTarget: 'target',
                            preHidden: true,
                            content() {
                                'step 0';
                                trigger.parent.directHit.add(trigger.target);
                                ('step 1');
                                player.recover();
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha' || !ui.cardPile.firstChild || get.color(ui.cardPile.firstChild, player) != 'red') return false;
                                },
                            },
                        },
                        mixber: {
                            forced: true,
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.card.suit == 'heart';
                            },
                            logTarget: 'target',
                            preHidden: true,
                            content() {
                                'step 0';
                                trigger.parent.directHit.add(trigger.target);
                                ('step 1');
                                player.recover();
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha' || !ui.cardPile.firstChild || get.color(ui.cardPile.firstChild, player) != 'red') return false;
                                },
                            },
                        },
                        jx1: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 100;
                                },
                            },
                            mark: true,
                            intro: {
                                content: '下一张杀的伤害基数+#',
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                if (!trigger.baseDamage) trigger.baseDamage = 1;
                                trigger.baseDamage += player.storage.jx1;
                                player.removeSkill('jx1');
                            },
                            init(player) {
                                player.storage.jx1 = 0;
                            },
                            onremove(player) {
                                delete player.storage.jx1;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        wjgs: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            check(event, player) {
                                return (
                                    player.countCards('h') <= (player.hasSkill('zongshi') ? player.maxHp : player.hp - 2) ||
                                    player.skipList.includes('phaseUse') ||
                                    !player.countCards('h', function (card) {
                                        return get.tag(card, 'damage') && player.hasUseTarget(card);
                                    })
                                );
                            },
                            content() {
                                trigger.cancel();
                                player.skip('phaseDiscard');
                                if (!player.hasSkill('jx1')) {
                                    player.addSkill('jx1');
                                } else {
                                    if (!player.storage.jx1) player.storage.jx1 = 0;
                                }
                                player.storage.jx1++;
                                player.markSkill('jx1');
                            },
                        },
                        jx11: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, false) == 'equip';
                            },
                            content() {
                                player.addSkill('jx1');
                            },
                        },
                        ycgl: {
                            trigger: {
                                player: 'useCardEnd',
                            },
                            forced: true,
                            popup: false,
                            firstDo: true,
                            charlotte: true,
                            mod: {
                                cardUsable(card) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            content() {
                                player.addSkill('lmvj');
                                player.removeSkill('ycgl');
                            },
                        },
                        ycglyi: {
                            trigger: {
                                player: 'useCardEnd',
                            },
                            forced: true,
                            popup: false,
                            firstDo: true,
                            charlotte: true,
                            mod: {
                                cardUsable(card) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            content() {
                                player.addTempSkill('lmvj');
                                player.addTempSkill('hsqrer');
                                player.removeSkill('ycglyi');
                            },
                        },
                        xtdc: {
                            audio: 'ext:英雄联盟/audio:2',
                            forced: true,
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('hes', { color: 'red' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(true, get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('xtdc'), 'hes', function (card) {
                                        if (get.color(card) != 'red') return false;
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
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result;
                                        } else {
                                            return -result;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight', 'xtdc', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                player.removeSkill('xtdc');
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        xtvj: {
                            marktext: '血',
                            group: 'xtvj_dm',
                            intro: {
                                content: '你拥有#个血',
                            },
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.xtvj = 1; //初始获得2个'障'
                                player.markSkill('xtvj'); //显示标记
                                //同步标记(每当标记变动都要写这句)
                                game.log(player, '获得了1个<血>'); //游戏记录:玩家获得了2个'障'
                            },
                            subSkill: {
                                dm: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source && event.num > 0;
                                    },
                                    content() {
                                        //内容:
                                        'step 0'; //第0步(必须从0开始)
                                        trigger.source.addTempSkill('xtdc');
                                        trigger.source.judge(); //你进行一次判定
                                        ('step 1'); //第1步
                                        switch (result.suit) {
                                            case 'diamond':
                                                trigger.source.removeSkill('xtdc');
                                                break;
                                            case 'heart':
                                                trigger.source.removeSkill('xtdc') && player.addMark('xtvj', trigger.num || 1);
                                                break;
                                        }
                                        ('step 2'); //第1步
                                        //同步标记(每当标记变动都要写这句)
                                        if (player.storage.xtvj == 0) {
                                            //如果没有'障'
                                            player.unmarkSkill('xtvj'); //不显示标记
                                        }
                                    },
                                },
                            },
                        },
                        xtih: {
                            audio: 'ext:英雄联盟/audio:1',
                            group: ['xtiher'],
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.xtvj >= 1;
                            },
                            usable: 3,
                            content() {
                                'step 0'; //第0步(必须从0开始)
                                player.storage.xtvj -= 1;
                                ('step 1'); //第1步
                                player.addTempSkill('lmvj');
                                player.chooseControl('获得一个杀', '获得一个酒', true).set('ai', function (event, player) { });
                                ('step 2');
                                if (result.control == '获得一个杀') {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'sha';
                                    });
                                    player.gain(card, 'gain2');
                                } else {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'jiu';
                                    });
                                    player.gain(card, 'gain2');
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player(player) {
                                        if (!player.storage.shenfen) return 0;
                                        var cards = player.getCards('h', 'sha');
                                        if (cards.length) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return player.canUse('sha', current) && get.effect(current, cards[0], player, player) > 0 && current.hasShan();
                                                })
                                            ) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        xtiher: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: ['dying', 'dyingBegin', 'dyingEnd'],
                            },
                            filter(event, player) {
                                return player.storage.xtvj >= 1;
                            },
                            content() {
                                'step 0'; //第0步(必须从0开始)
                                player.storage.xtvj -= 1;
                                ('step 1'); //第1步
                                player.addTempSkill('wujulicisu');
                                player.chooseControl('获得一个酒', '获得一个桃', true).set('ai', function (event, player) { });
                                ('step 2');
                                if (result.control == '获得一个酒') {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'jiu';
                                    });
                                    player.gain(card, 'gain2');
                                } else {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'tao';
                                    });
                                    player.gain(card, 'gain2');
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player(player) {
                                        if (!player.storage.shenfen) return 0;
                                        var cards = player.getCards('h', 'sha');
                                        if (cards.length) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return player.canUse('sha', current) && get.effect(current, cards[0], player, player) > 0 && current.hasShan();
                                                })
                                            ) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        lmvj: {
                            trigger: {
                                player: 'shaEnd',
                            },
                            forced: true,
                            popup: false,
                            firstDo: true,
                            charlotte: true,
                            mod: {
                                cardUsable(card) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            content() {
                                player.removeSkill('lmvj');
                            },
                            mark: true,
                            intro: {
                                content: '下一张! 【杀】无次数限制',
                            },
                        },
                        xung: {
                            audio: 'ext:英雄联盟/audio:2',
                            marktext: '虚',
                            group: ['xung_dm'],
                            intro: {
                                content: '展示#张牌',
                            },
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.xung = 3; //初始获得2个'障'
                                player.markSkill('xung'); //显示标记
                                //同步标记(每当标记变动都要写这句)
                                game.log(player, '获得了3个<虚>'); //游戏记录:玩家获得了2个'障'
                            },
                            subSkill: {
                                dm: {
                                    audio: 'ext:英雄联盟/audio:2',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return player.storage.xung >= 1;
                                    },
                                    content() {
                                        //内容:
                                        'step 0';
                                        event.cards = get.cards(player.storage.xung);
                                        game.cardsGotoOrdering(event.cards);
                                        event.videoId = lib.status.videoId++;
                                        game.broadcastAll(
                                            function (player, id, cards, num) {
                                                var str;
                                                if (player == game.me && !_status.auto) {
                                                    str = '狩猎:选择一张牌 获得';
                                                } else {
                                                    str = '狩猎';
                                                }
                                                var dialog = ui.create.dialog(str, cards);
                                                dialog.videoId = id;
                                            },
                                            player,
                                            event.videoId,
                                            event.cards,
                                            event.name == 'chengxiang' ? 14 : 13
                                        );
                                        event.time = get.utc();
                                        game.addVideo('showCards', player, ['狩猎', get.cardsInfo(event.cards)]);
                                        game.addVideo('delay', null, 2);
                                        ('step 1');
                                        var next = player.chooseButton([1]);
                                        next.set('dialog', event.videoId);
                                        next.set('filterButton', function (button) {
                                            var num = 0;
                                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                num += ui.selected.buttons[i].link.number;
                                            }
                                            return num + button.link.number <= _status.event.maxNum;
                                        });
                                        next.set('maxNum', event.name == 'chengxiang' ? 14 : 13);
                                        next.set('ai', function (button) {
                                            return get.value(button.link, _status.event.player);
                                        });
                                        ('step 2');
                                        if (result.bool && result.links) {
                                            var cards2 = [];
                                            for (var i of result.links) {
                                                cards2.push(i);
                                                cards.remove(i);
                                            }
                                            event.cards2 = cards2;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 3');
                                        game.broadcastAll('closeDialog', event.videoId);
                                        var cards2 = event.cards2;
                                        player.gain(cards2, 'log', 'gain2');
                                    },
                                },
                            },
                        },
                        xung21: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'equip';
                            },
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                player.addMark('xung', 1);
                                //同步标记(每当标记变动都要写这句)
                                ('step 1'); //第0步(必须从0开始)
                                if (player.storage.xung == 3) {
                                    game.playAudio('../extension/英雄联盟/audio/3个.mp3');
                                }
                                ('step 2'); //第0步(必须从0开始)
                                if (player.storage.xung == 4) {
                                    game.playAudio('../extension/英雄联盟/audio/4个.mp3');
                                }
                                ('step 3'); //第0步(必须从0开始)
                                if (player.storage.xung == 5) {
                                    game.playAudio('../extension/英雄联盟/audio/5个.mp3');
                                }
                                ('step 4'); //第0步(必须从0开始)
                                if (player.storage.xung == 6) {
                                    game.playAudio('../extension/英雄联盟/audio/6个.mp3');
                                }
                                ('step 5'); //第0步(必须从0开始)
                                if (player.storage.xung == 7) {
                                    game.playAudio('../extension/英雄联盟/audio/7个.mp3');
                                }
                                ('step 6'); //第0步(必须从0开始)
                                if (player.storage.xung == 8) {
                                    game.playAudio('../extension/英雄联盟/audio/8个.mp3');
                                }
                                if (player.storage.xung >= 9) {
                                    game.playAudio('../extension/英雄联盟/audio/9个.mp3');
                                }
                            },
                        },
                        jbhx: {
                            group: ['xung21', 'xungs', 'xung233', 'xunge', 'xungeee'],
                        },
                        xungs: {
                            marktext: '法',
                            intro: {
                                content: '你拥有#个法',
                            },
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.xungs = 0; //初始获得2个'障'
                                player.markSkill('xungs'); //显示标记
                                //同步标记(每当标记变动都要写这句)
                                game.log(player, '获得了0个<法>'); //游戏记录:玩家获得了2个'障'
                            },
                        },
                        xungjs: {
                            audio: 'ext:英雄联盟/audio:2',
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 100;
                                },
                            },
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.xung >= 1;
                            },
                            content() {
                                //内容:
                                'step 0';
                                event.cards = get.cards(player.storage.xung);
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards, num) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = '狩猎:获得其中一张牌,获得其中所有的【杀】 ';
                                        } else {
                                            str = '狩猎';
                                        }
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards,
                                    event.name == 'chengxiang' ? 14 : 13
                                );
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['狩猎', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                ('step 1');
                                var next = player.chooseButton([1]);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    var num = 0;
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        num += ui.selected.buttons[i].link.number;
                                    }
                                    return num + button.link.number <= _status.event.maxNum;
                                });
                                next.set('maxNum', event.name == 'chengxiang' ? 14 : 13);
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 2');
                                if (result.bool && result.links) {
                                    var cards2 = [];
                                    for (var i of result.links) {
                                        cards2.push(i);
                                        cards.remove(i);
                                    }
                                    event.cards2 = cards2;
                                    event.cards1 = cards;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                var cards2 = event.cards2;
                                var cards1 = event.cards1;
                                player.gain(cards2, 'log', 'gain2');
                                player.gain(event.cards1, { name: 'sha' }, 'log', 'gain2');
                                for (var i = 0; i < event.cards1.length; i++) {
                                    if (event.cards1[i].name != 'sha') game.cardsDiscard(event.cards1[i]);
                                }
                            },
                        },
                        xunge: {
                            marktext: '攻',
                            intro: {
                                content: '你拥有#个攻',
                            },
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.xunge = 0; //初始获得2个'障'
                                player.markSkill('xunge'); //显示标记
                                //同步标记(每当标记变动都要写这句)
                                game.log(player, '获得了0个<攻>'); //游戏记录:玩家获得了2个'障'
                            },
                        },
                        xung233: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                player.addMark('xungs', 1);
                                //同步标记(每当标记变动都要写这句)
                                ('step 1'); //第0步(必须从0开始)
                                if (player.countMark('xungs') < 5) event.finish();
                                else {
                                    player.addSkill('xungjs');
                                    game.playAudio('../extension/英雄联盟/audio/2技能效果3.mp3');
                                    player.removeMark('xungs', 5);
                                    player.removeSkill('xung233');
                                }
                            },
                        },
                        xungsha: {
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!get.zhu(player, 'shouyue')) return false;
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        tzdj: {
                            audio: 'ext:英雄联盟/audio:5',
                            trigger: {
                                player: 'loseAfter',
                            },
                            filter(event, player) {
                                if (event.type != 'discard') return false;
                                for (var i = 0; i < event.cards2.length; i++) {
                                    if (get.position(event.cards2[i]) == 'd') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            popup: false,
                            preHidden: true,
                            content() {
                                'step 0';
                                if (trigger.delay == false) game.delay();
                                event.cards = [];
                                for (var i = 0; i < trigger.cards2.length; i++) {
                                    if (get.position(trigger.cards2[i], true) == 'd') {
                                        event.cards.push(trigger.cards2[i]);
                                    }
                                }
                                ('step 1');
                                if (event.cards.length) {
                                    var goon = false;
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (i.name == 'du') {
                                                goon = true;
                                                break;
                                            }
                                        }
                                    if (!goon) {
                                        goon = game.hasPlayer(function (current) {
                                            return player != current && get.attitude(player, current) > 1;
                                        });
                                    }
                                    player
                                        .chooseCardButton(get.prompt('tzdj'), event.cards, [1, event.cards.length])
                                        .set('ai', function (button) {
                                            if (!_status.event.goon || ui.selected.buttons.length) return 0;
                                            if (button.link.name == 'du') return 2;
                                            return 1;
                                        })
                                        .set('goon', goon)
                                        .setHiddenSkill(event.name);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.togive = result.links.slice(0);
                                    player.chooseTarget(`将${get.translation(result.links)}交给一名角色`, true);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    for (var i = 0; i < event.togive.length; i++) {
                                        event.cards.remove(event.togive[i]);
                                    }
                                    result.targets[0].gain(event.togive);
                                    result.targets[0].$gain2(event.togive);
                                    result.targets[0].damage('fire');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        bcpo: {
                            audio: 'ext:英雄联盟/audio:5',
                            enable: 'phaseUse',
                            filterCard(card) {
                                return get.type(card) != 'basic' && get.color(card) == 'red';
                            },
                            selectCard: 1,
                            position: 'he',
                            selectTarget: 1,
                            filterTarget: true,
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('he'); //你有手牌时才能发动
                            },
                            content() {
                                'step 0';
                                player.chooseControl('弃置所有装备', '造成1点火焰伤害', true).set('ai', function (event, player) { });
                                ('step 1');
                                if (result.control == '弃置所有装备') {
                                    target.discard(
                                        target.getCards('e', function (card) {
                                            return lib.filter.cardDiscardable(card, target, 'shuiyanqijunx');
                                        })
                                    );
                                } else {
                                    var next = target.damage(event.baseDamage || 1);
                                    if (!get.is.single()) next.nature = 'fire';
                                }
                            },
                        },
                        sixl1: {
                            round: 1,
                            enable: 'chooseToUse',
                            hiddenCard(player, name) {
                                return (
                                    ['sha', 'shan', 'tao', 'jiu'].includes(name) &&
                                    (!player.storage.sixl1 || !player.storage.sixl1[name]) &&
                                    player.hasCard(function (card) {
                                        return card.suit == 'club';
                                    }, 'he')
                                );
                            },
                            filter(event, player) {
                                if (!player.storage.sixl1) player.storage.sixl1 = {};
                                if ((!player.storage.sixl1.sha && event.filterCard({ name: 'sha' }, player, event)) || (!player.storage.sixl1.jiu && event.filterCard({ name: 'jiu' }, player, event)) || (!player.storage.sixl1.shan && event.filterCard({ name: 'shan' }, player, event)) || (!player.storage.sixl1.tao && event.filterCard({ name: 'tao' }, player, event))) {
                                    return player.hasCard(function (card) {
                                        return card.suit == 'club';
                                    }, 'he');
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (!player.storage.sixl1.sha && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                    }
                                    if (!player.storage.sixl1.tao && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (!player.storage.sixl1.shan && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    if (!player.storage.sixl1.jiu && event.filterCard({ name: 'jiu' }, player, event)) {
                                        list.push(['基本', '', 'jiu']);
                                    }
                                    return ui.create.dialog('sixl1', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        switch (button.link[2]) {
                                            case 'tao':
                                                return 5;
                                            case 'jiu':
                                                return 3.01;
                                            case 'shan':
                                                return 3.01;
                                            case 'sha':
                                                if (button.link[3] == 'fire') return 2.95;
                                                else if (button.link[3] == 'fire') return 2.92;
                                                else return 2.9;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        check(card) {
                                            return 1 / Math.max(0.1, get.value(card));
                                        },
                                        filterCard(card) {
                                            return card.suit == 'club';
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            suit: 'none',
                                            number: null,
                                        },
                                        position: 'he',
                                        popname: true,
                                        ignoreMod: true,
                                        precontent() {
                                            'step 0';
                                            player.removeSkill('sixl1');
                                            var card = event.result.cards[0];
                                            event.card = card;
                                            player.$throw(card, 1000);
                                            game.log(player, '将', card, '置于牌堆顶');
                                            event.result.card = { name: event.result.card.name, nature: event.result.card.nature };
                                            event.result.cards = [];
                                            player.lose(card, ui.cardPile, 'visible', 'insert');
                                            ('step 1');
                                            ('step 2');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张黑色非基本牌置于牌堆顶并视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    if (!player.storage.sixl1.jiu && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                                        return 3.1;
                                    }
                                    return 2.9;
                                },
                                respondSha: true,
                                fireAttack: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'fireAttack') return true;
                                    if (
                                        player.hasCard(function (card) {
                                            return card.suit == 'club';
                                        }, 'he')
                                    ) {
                                        if (!player.storage.sixl1) player.storage.sixl1 = {};
                                        if (tag == 'respondSha') {
                                            if (arg != 'use') return false;
                                            if (player.storage.sixl1.sha) return false;
                                        } else if (tag == 'respondShan') {
                                            if (player.storage.sixl1.shan) return false;
                                        } else {
                                            if (player.storage.sixl1.tao && player.storage.sixl1.jiu) return false;
                                        }
                                    } else {
                                        return false;
                                    }
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['sixl1_roundcount'],
                        },
                        sixl2: {
                            round: 1,
                            enable: 'chooseToUse',
                            hiddenCard(player, name) {
                                return (
                                    ['sha', 'shan', 'tao', 'jiu'].includes(name) &&
                                    (!player.storage.sixl2 || !player.storage.sixl2[name]) &&
                                    player.hasCard(function (card) {
                                        return card.suit == 'spade';
                                    }, 'he')
                                );
                            },
                            filter(event, player) {
                                if (!player.storage.sixl2) player.storage.sixl2 = {};
                                if ((!player.storage.sixl2.sha && event.filterCard({ name: 'sha' }, player, event)) || (!player.storage.sixl2.jiu && event.filterCard({ name: 'jiu' }, player, event)) || (!player.storage.sixl2.shan && event.filterCard({ name: 'shan' }, player, event)) || (!player.storage.sixl2sixl2.tao && event.filterCard({ name: 'tao' }, player, event))) {
                                    return player.hasCard(function (card) {
                                        return card.suit == 'spade';
                                    }, 'he');
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (!player.storage.sixl2.sha && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                    }
                                    if (!player.storage.sixl2.tao && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (!player.storage.sixl2.shan && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    if (!player.storage.sixl2.jiu && event.filterCard({ name: 'jiu' }, player, event)) {
                                        list.push(['基本', '', 'jiu']);
                                    }
                                    return ui.create.dialog('sixl2', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        switch (button.link[2]) {
                                            case 'tao':
                                                return 5;
                                            case 'jiu':
                                                return 3.01;
                                            case 'shan':
                                                return 3.01;
                                            case 'sha':
                                                if (button.link[3] == 'fire') return 2.95;
                                                else if (button.link[3] == 'fire') return 2.92;
                                                else return 2.9;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        check(card) {
                                            return 1 / Math.max(0.1, get.value(card));
                                        },
                                        filterCard(card) {
                                            return card.suit == 'spade';
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            suit: 'none',
                                            number: null,
                                        },
                                        position: 'he',
                                        popname: true,
                                        ignoreMod: true,
                                        precontent() {
                                            'step 0';
                                            var card = event.result.cards[0];
                                            event.card = card;
                                            player.$throw(card, 1000);
                                            game.log(player, '将', card, '置于牌堆顶');
                                            event.result.card = { name: event.result.card.name, nature: event.result.card.nature };
                                            event.result.cards = [];
                                            player.lose(card, ui.cardPile, 'visible', 'insert');
                                            ('step 1');
                                            player.removeSkill('sixl2');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张黑色非基本牌置于牌堆顶并视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    if (!player.storage.sixl2.jiu && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                                        return 3.1;
                                    }
                                    return 2.9;
                                },
                                respondSha: true,
                                fireAttack: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'fireAttack') return true;
                                    if (
                                        player.hasCard(function (card) {
                                            return card.suit == 'spade';
                                        }, 'he')
                                    ) {
                                        if (!player.storage.sixl2) player.storage.sixl2 = {};
                                        if (tag == 'respondSha') {
                                            if (arg != 'use') return false;
                                            if (player.storage.sixl2.sha) return false;
                                        } else if (tag == 'respondShan') {
                                            if (player.storage.sixl2.shan) return false;
                                        } else {
                                            if (player.storage.sixl2.tao && player.storage.sixl2.jiu) return false;
                                        }
                                    } else {
                                        return false;
                                    }
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['sixl2_roundcount'],
                        },
                        sixl3: {
                            round: 1,
                            enable: 'chooseToUse',
                            hiddenCard(player, name) {
                                return (
                                    ['sha', 'shan', 'tao', 'jiu'].includes(name) &&
                                    (!player.storage.sixl3 || !player.storage.sixl3[name]) &&
                                    player.hasCard(function (card) {
                                        return card.suit == 'diamond';
                                    }, 'he')
                                );
                            },
                            filter(event, player) {
                                if (!player.storage.sixl3) player.storage.sixl3 = {};
                                if ((!player.storage.sixl3.sha && event.filterCard({ name: 'sha' }, player, event)) || (!player.storage.sixl3.jiu && event.filterCard({ name: 'jiu' }, player, event)) || (!player.storage.sixl3.shan && event.filterCard({ name: 'shan' }, player, event)) || (!player.storage.sixl3.tao && event.filterCard({ name: 'tao' }, player, event))) {
                                    return player.hasCard(function (card) {
                                        return card.suit == 'diamond';
                                    }, 'he');
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (!player.storage.sixl3.sha && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                    }
                                    if (!player.storage.sixl3.tao && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (!player.storage.sixl3.shan && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    if (!player.storage.sixl3.jiu && event.filterCard({ name: 'jiu' }, player, event)) {
                                        list.push(['基本', '', 'jiu']);
                                    }
                                    return ui.create.dialog('sixl3', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        switch (button.link[2]) {
                                            case 'tao':
                                                return 5;
                                            case 'jiu':
                                                return 3.01;
                                            case 'shan':
                                                return 3.01;
                                            case 'sha':
                                                if (button.link[3] == 'fire') return 2.95;
                                                else if (button.link[3] == 'fire') return 2.92;
                                                else return 2.9;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        check(card) {
                                            return 1 / Math.max(0.1, get.value(card));
                                        },
                                        filterCard(card) {
                                            return card.suit == 'diamond';
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            suit: 'none',
                                            number: null,
                                        },
                                        position: 'he',
                                        popname: true,
                                        ignoreMod: true,
                                        precontent() {
                                            'step 0';
                                            var card = event.result.cards[0];
                                            event.card = card;
                                            player.$throw(card, 1000);
                                            game.log(player, '将', card, '置于牌堆顶');
                                            event.result.card = { name: event.result.card.name, nature: event.result.card.nature };
                                            event.result.cards = [];
                                            player.lose(card, ui.cardPile, 'visible', 'insert');
                                            ('step 1');
                                            player.removeSkill('sixl3');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张黑色非基本牌置于牌堆顶并视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    if (!player.storage.sixl3.jiu && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                                        return 3.1;
                                    }
                                    return 2.9;
                                },
                                respondSha: true,
                                fireAttack: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'fireAttack') return true;
                                    if (
                                        player.hasCard(function (card) {
                                            return card.suit == 'diamond';
                                        }, 'he')
                                    ) {
                                        if (!player.storage.sixl3) player.storage.sixl3 = {};
                                        if (tag == 'respondSha') {
                                            if (arg != 'use') return false;
                                            if (player.storage.sixl3.sha) return false;
                                        } else if (tag == 'respondShan') {
                                            if (player.storage.sixl3.shan) return false;
                                        } else {
                                            if (player.storage.sixl3.tao && player.storage.sixl3.jiu) return false;
                                        }
                                    } else {
                                        return false;
                                    }
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['sixl3_roundcount'],
                        },
                        sixl4: {
                            round: 1,
                            enable: 'chooseToUse',
                            hiddenCard(player, name) {
                                return (
                                    ['sha', 'shan', 'tao', 'jiu'].includes(name) &&
                                    (!player.storage.sixl4 || !player.storage.sixl4[name]) &&
                                    player.hasCard(function (card) {
                                        return card.suit == 'heart';
                                    }, 'he')
                                );
                            },
                            filter(event, player) {
                                if (!player.storage.sixl4) player.storage.sixl4 = {};
                                if ((!player.storage.sixl4.sha && event.filterCard({ name: 'sha' }, player, event)) || (!player.storage.sixl4.jiu && event.filterCard({ name: 'jiu' }, player, event)) || (!player.storage.sixl4.shan && event.filterCard({ name: 'shan' }, player, event)) || (!player.storage.sixl4.tao && event.filterCard({ name: 'tao' }, player, event))) {
                                    return player.hasCard(function (card) {
                                        return card.suit == 'heart';
                                    }, 'he');
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (!player.storage.sixl4.sha && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                    }
                                    if (!player.storage.sixl4.tao && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (!player.storage.sixl4.shan && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    if (!player.storage.sixl4.jiu && event.filterCard({ name: 'jiu' }, player, event)) {
                                        list.push(['基本', '', 'jiu']);
                                    }
                                    return ui.create.dialog('sixl4', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        switch (button.link[2]) {
                                            case 'tao':
                                                return 5;
                                            case 'jiu':
                                                return 3.01;
                                            case 'shan':
                                                return 3.01;
                                            case 'sha':
                                                if (button.link[3] == 'fire') return 2.95;
                                                else if (button.link[3] == 'fire') return 2.92;
                                                else return 2.9;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        check(card) {
                                            return 1 / Math.max(0.1, get.value(card));
                                        },
                                        filterCard(card) {
                                            return card.suit == 'heart';
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            suit: 'none',
                                            number: null,
                                        },
                                        position: 'he',
                                        popname: true,
                                        ignoreMod: true,
                                        precontent() {
                                            'step 0';
                                            player.removeSkill('sixl4');
                                            var card = event.result.cards[0];
                                            event.card = card;
                                            player.$throw(card, 1000);
                                            game.log(player, '将', card, '置于牌堆顶');
                                            event.result.card = { name: event.result.card.name, nature: event.result.card.nature };
                                            event.result.cards = [];
                                            player.lose(card, ui.cardPile, 'visible', 'insert');
                                            ('step 1');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张黑色非基本牌置于牌堆顶并视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    if (!player.storage.sixl4.jiu && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                                        return 3.1;
                                    }
                                    return 2.9;
                                },
                                respondSha: true,
                                fireAttack: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'fireAttack') return true;
                                    if (
                                        player.hasCard(function (card) {
                                            return card.suit == 'heart';
                                        }, 'he')
                                    ) {
                                        if (!player.storage.sixl4) player.storage.sixl4 = {};
                                        if (tag == 'respondSha') {
                                            if (arg != 'use') return false;
                                            if (player.storage.sixl4.sha) return false;
                                        } else if (tag == 'respondShan') {
                                            if (player.storage.sixl4.shan) return false;
                                        } else {
                                            if (player.storage.sixl4.tao && player.storage.sixl4.jiu) return false;
                                        }
                                    } else {
                                        return false;
                                    }
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['sixl4_roundcount'],
                        },
                        rjjk: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCard('你可以弃置 任意 张牌  对等量名角色造成1点火焰伤害', [1, Infinity], false, 'hes').set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) < 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.length = result.cards.length;
                                    player.discard(result.cards);
                                } else event.finish();
                                ('step 2');
                                player.chooseTarget(`对${result.cards.length}名角色造成1点火焰伤害.`, result.cards.length, true);
                                ('step 3');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage('fire');
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                                threaten: 3,
                            },
                        },
                        jibw: {
                            forced: true,
                            trigger: {
                                player: ['loseAfter'],
                            },
                            filter(event, player) {
                                return player.countCards('h') < player.countCards('e');
                            },
                            content() {
                                player.draw(player.countCards('e') - player.countCards('h'));
                            },
                        },
                        bolj: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            filter(event, player) {
                                var cards = [];
                                player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2);
                                });
                                return cards.length > 1;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('对一名角色造成1点雷电伤害').set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) < 0;
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].damage('thunder');
                                }
                                ('step 2');
                                player.chooseTarget('令一名角色回复1点体力');
                                ('step 3');
                                if (result.targets?.length) {
                                    result.targets[0].recover();
                                }
                            },
                        },
                        hjic: {
                            audio: 'ext:英雄联盟/audio:2',
                            limited: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                //初始化
                                player.storage.hjic = false; //技能未发动(xx为技能名)
                            },
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.hjic == false; //你没发动过这个技能
                            },
                            enable: 'phaseUse',
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                player.storage.hjic = true; //技能发动过
                                player.awakenSkill('hjic'); //技能文本变灰(失去技能,标记消失)
                                ('step 1'); //第1步
                                player.chooseTarget([1, 3]);
                                ('step 2');
                                if (result.bool) {
                                    for (var i of result.targets) {
                                        i.addSkill('nixk');
                                        i.link();
                                    }
                                }
                            },
                        },
                        sixiang: {
                            mark: true,
                            marktext: '象',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.sixiang.length == 0) {
                                        var str = '未发动过四象';
                                    } else if (player.storage.sixiang.length == 21) {
                                        var str = '已使用所有花色';
                                    } else {
                                        var str = '已使用过的花色:';
                                        if (player.storage.sixiang.includes('diamond')) str += '♦️️';
                                        if (player.storage.sixiang.includes('heart')) str += '♥️️';
                                        if (player.storage.sixiang.includes('club')) str += '♣️️';
                                        if (player.storage.sixiang.includes('spade')) str += '♠️️';
                                    }
                                    return str;
                                },
                            },
                            init(player) {
                                player.storage.sixiang = [];
                            },
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filter(event, player) {
                                return player.countCards('hes') > 0 && player.storage.sixiang.length < 21;
                            },
                            chooseButton: {
                                dialog(player) {
                                    var list = [];
                                    /*for(var i=0;i<lib.inpile.length;i++){
                      if(get.type(lib.inpile[i])=='basic') list.push(['基本','',lib.inpile[i]]);
                  }*/
                                    list.push(['基本', '', 'sha']);
                                    /*for(var i of lib.inpile_nature){
                     list.push(['基本','','sha',i]);
                  };*/
                                    list.push(['基本', '', 'shan']);
                                    list.push(['基本', '', 'tao']);
                                    list.push(['基本', '', 'jiu']);
                                    return ui.create.dialog(get.translation('sixiang'), [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return true;
                                    filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card, player) {
                                            //if(!player.storage.sixiang.includes(card.suit)) return true;
                                            return !player.storage.sixiang.includes(card.suit);
                                        },
                                        position: 'hes',
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        onuse(result, player) {
                                            player.storage.sixiang += result.cards.suit;
                                            if (links[0][2] == 'sha') player.getStat().card.sha = -1;
                                            if (links[0][2] == 'jiu') player.getStat().card.jiu = -1;
                                            player.addSkill('ycgl');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return `可以把一张牌当作【${get.translation(links[0][2])}】使用`;
                                },
                            },
                        },
                        gvrf: {
                            audio: 'ext:英雄联盟/audio:4',
                            marktext: '杀',
                            group: ['gvrf_dm', 'gvrfe', 'gvrfs'],
                            intro: {
                                content: '杀人剑层数:#',
                            },
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.gvrf = 0; //初始获得2个'障'
                                player.markSkill('gvrf'); //显示标记
                                //同步标记(每当标记变动都要写这句)
                                game.log(player, '获得了0个<杀>'); //游戏记录:玩家获得了2个'障'
                            },
                        },
                        fwfu: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: ['useCard'],
                            },
                            filter(event, player) {
                                return get.subtype(event.card) == 'equip1';
                            },
                            forced: true,
                            content() {
                                player.addSkill('wujulicisu');
                                if (!player.hasSkill('jx1')) {
                                    player.addSkill('jx1');
                                } else {
                                    if (!player.storage.jx1) player.storage.jx1 = 0;
                                }
                                player.storage.jx1++;
                                player.markSkill('jx1');
                            },
                        },
                        gvrfe: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(player.storage.gvrf);
                            },
                        },
                        gvrfs: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.draw(player.storage.gvrf);
                                player.chat('德莱文正在主宰战场~');
                            },
                        },
                        vicj: {
                            trigger: {
                                player: 'recoverBefore',
                            },
                            audio: 'ext:英雄联盟/audio:1',
                            mark: true,
                            intro: {
                                content: '判定#次',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = player.countMark('vicj');
                                ('step 1'); //第1步
                                event.count--;
                                player.judge();
                                ('step 2'); //第1步
                                switch (
                                result.suit //根据判定牌的花色
                                ) {
                                    case 'spade':
                                        trigger.cancel();
                                        event.finish(); //♠️️:你失去一点体力
                                    case 'club':
                                        trigger.cancel();
                                        event.finish(); //♣️️:你受到一点伤害
                                    default:
                                        event.goto(3); //其他情况:你进行一个额外回合 {}
                                }
                                ('step 3'); //第1步
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        xtnu: {
                            marktext: '♥️️',
                            group: ['xtnu_dm', 'xtnue'],
                            intro: {
                                content: '流血:#层',
                            },
                            subSkill: {
                                dm: {
                                    audio: 'ext:英雄联盟/audio:3',
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        return !get.is.altered('feiren') && event.card && event.card.name == 'sha';
                                        if (event.target == player) return false;
                                        return true;
                                    },
                                    popup: false,
                                    forced: true,
                                    content() {
                                        //内容:
                                        for (var i = 0; i < trigger.targets.length; i++) {
                                            var target = trigger.targets[i];
                                            target.addMark('xtnu', 1);
                                            //同步标记(每当标记变动都要写这句)
                                            if (target.storage.xtnu >= 2) {
                                                target.addSkill('vicj');
                                                target.addMark('vicj');
                                                var list = [];
                                                for (var i = 1; i < 9; i++) {
                                                    if (player.isDisabled(i)) list.add(i);
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        xtnue: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            audio: 'ext:英雄联盟/audio:3',
                            logTarget: 'player',
                            forced: true,
                            content() {
                                //内容:
                                trigger.player.addMark('xtnu', 2);
                                //同步标记(每当标记变动都要写这句)
                                trigger.player.addSkill('vicj');
                                trigger.player.addMark('vicj');
                            },
                        },
                        vjuar: {
                            audio: 'ext:英雄联盟/audio:3',
                            limited: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                //初始化
                                player.storage.vjuar = false; //技能未发动(xx为技能名)
                            },
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.vjuar == false; //你没发动过这个技能
                            },
                            enable: 'phaseUse',
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                player.storage.vjuar = true; //技能发动过
                                player.awakenSkill('vjuar'); //技能文本变灰(失去技能,标记消失)
                                ('step 1'); //第1步
                                player.addTempSkill('R!');
                                ('step 2');
                                player.chooseTarget();
                                ('step 3');
                                if (result.targets?.length) {
                                    if (result.targets[0].storage.xtnu >= 5) result.targets[0].damage(4);
                                    else if (result.targets[0].storage.xtnu >= 3 && result.targets[0].storage.xtnu < 5) result.targets[0].damage(2);
                                    else result.targets[0].damage(1);
                                }
                            },
                        },
                        'R!': {
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.restoreSkill('vjuar');
                            },
                        },
                        xunger: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:英雄联盟/audio:2',
                            filter(event, player) {
                                return player.storage.xung >= 1;
                            },
                            content() {
                                //内容:
                                'step 0';
                                event.cards = get.cards(player.storage.xung);
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards, num) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = '狩猎:获得其中一张牌,获得其中所有的【杀】 ';
                                        } else {
                                            str = '狩猎';
                                        }
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards,
                                    event.name == 'chengxiang' ? 14 : 13
                                );
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['狩猎', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                ('step 1');
                                var next = player.chooseButton([1]);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    var num = 0;
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        num += ui.selected.buttons[i].link.number;
                                    }
                                    return num + button.link.number <= _status.event.maxNum;
                                });
                                next.set('maxNum', event.name == 'chengxiang' ? 14 : 13);
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 2');
                                if (result.bool && result.links) {
                                    var cards2 = [];
                                    for (var i of result.links) {
                                        cards2.push(i);
                                        cards.remove(i);
                                    }
                                    event.cards2 = cards2;
                                    event.cards1 = cards;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                var cards2 = event.cards2;
                                var cards1 = event.cards1;
                                player.gain(cards2, 'log', 'gain2');
                                player.gain(event.cards1, { name: 'sha' }, 'log', 'gain2');
                                for (var i = 0; i < event.cards1.length; i++) {
                                    if (event.cards1[i].name != 'sha') game.cardsDiscard(event.cards1[i]);
                                }
                            },
                        },
                        fuuu: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                global: 'die',
                            },
                            limited: true,
                            mark: true,
                            intro: {
                                content: '',
                            },
                            forceDie: true,
                            init(player) {
                                //初始化
                                player.storage.fuuu = false; //技能未发动(xx为技能名)
                            },
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.fuuu == false; //你没发动过这个技能
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                player.storage.fuuu = true; //技能发动过
                                player.awakenSkill('fuuu'); //技能文本变灰(失去技能,标记消失)
                                trigger.player.revive(trigger.player.maxHp);
                                player.chat('起来吧!');
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player, arg, target) {
                                    if (player != target || player.storage.oldniepan) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.oldniepan) return 0.6;
                                },
                            },
                        },
                        fglk: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: ['useCard', 'respond', 'loseAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name != 'lose') return event.card.name == 'shan';
                                if (event.type != 'discard') return false;
                                if (event.cards2) {
                                    for (var i = 0; i < event.cards2.length; i++) {
                                        if (event.cards2[i].name == 'shan') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.count = 1;
                                if (trigger.name == 'lose') {
                                    event.count = 0;
                                    for (var i = 0; i < trigger.cards2.length; i++) {
                                        if (trigger.cards2[i].name == 'shan') event.count++;
                                    }
                                }
                                ('step 1');
                                player.chooseTarget(); //你可以选择一个目标
                                ('step 2');
                                if (result.targets?.length) {
                                    result.targets[0].changeHujia(1);
                                    result.targets[0].draw(1);
                                }
                                event.count--;
                                ('step 3');
                                if (event.count) {
                                    player.chooseBool(get.prompt2('fglk')).set('frequentSkill', 'fglk');
                                } else event.finish();
                                ('step 4');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        igfg: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 2;
                                },
                            },
                        },
                        fgzu: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                        },
                        yufg: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                //内容:
                                'step 0';
                                'step 1';
                                player.chooseControl('令其乘风', ' 风阻!').set('ai', function (event, player) { });
                                ('step 2');
                                if (result.control == '令其乘风') {
                                    trigger.player.addTempSkill('igfg');
                                } else {
                                    trigger.player.addTempSkill('fgzu');
                                }
                            },
                        },
                        yklq: {
                            audio: 'ext:英雄联盟/audio:4',
                            forced: true,
                            trigger: {
                                global: 'useCardToBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && (event.player == player || event.target == player);
                            },
                            content() {
                                'step 0';
                                event.i = 0;
                                event.juese = game.filterPlayer();
                                event.juese.sort(lib.sort.seat);
                                if (event.juese.length < 1) event.finish();
                                ('step 1');
                                if (!(event.i < event.juese.length)) event.finish();
                                ('step 2');
                                var ren = player;
                                var ren2 = event.juese[event.i];
                                if (!ren2.isTurnedOver()) {
                                    event.i++;
                                    event.goto(1);
                                } else if (trigger.player == player && event.juese[event.i].countCards('h', 'sha') > 0) event.goto(3);
                                else if (trigger.target == player) event.goto(5);
                                else event.goto(7);
                                ('step 3');
                                event.juese[event.i].chooseToUse({ name: 'sha' }, `影流:是否跟随影流之主对${get.translation(trigger.target)}使用一张杀,翻面`, trigger.target, -1);
                                ('step 4');
                                if (result.bool) {
                                    game.playAudio('../extension/英雄联盟/audio/yklq3.mp3');
                                    event.juese[event.i].turnOver();
                                }
                                event.goto(7);
                                ('step 5');
                                event.juese[event.i]
                                    .chooseControl()
                                    .set('choiceList', ['是否替‘影流之主’成为此杀目标,翻面', '取消'])
                                    .set('ai', function () {
                                        var list = [0, 1];
                                        if (get.attitude(player, event.juese[event.i]) > 0) return list[0];
                                        return list[1];
                                    });
                                ('step 6');
                                if (result.index == 0) {
                                    trigger.target = event.juese[event.i];
                                    event.juese[event.i].turnOver();
                                    event.finish();
                                }
                                ('step 7');
                                event.i++;
                                event.goto(1);
                            },
                        },
                        muniuyi: {
                            audio: 'ext:英雄联盟/audio:3',
                            group: ['muniu2', 'muniu3', 'muniu4'],
                            intro: {
                                content(storage, player) {
                                    if (!player.isUnderControl(true)) {
                                        return `共有${player.storage.muniuyi.length}张牌`;
                                    }
                                },
                            },
                            enable: 'phaseUse',
                            filter(event, player, storage) {
                                return player.countCards('h') > 0 && player.countCards('e') > 0;
                            },
                            filterCard: true,
                            discard: false,
                            lose: true,
                            init(player) {
                                player.storage.muniuyi = [];
                            },
                            content() {
                                'step 0';
                                event.card1 = event.cards[0];
                                player.lose(event.cards[0], ui.special);
                                player.storage.muniuyi = player.storage.muniuyi.concat(event.cards[0]);
                                player.markSkill('muniuyi');
                                ('step 1');
                                player
                                    .chooseControl()
                                    .set('choiceList', ['转移一件装备给一名未装备此类装备的目标', '存牌'])
                                    .set('ai', function () {
                                        var list = [0, 1];
                                    });
                                ('step 2');
                                if (result.index == 0) {
                                    event.goto(3);
                                } else event.finish();
                                ('step 3');
                                player.chooseCard('e', get.prompt('muniuyi'), '选择一件即将送出的装备').ai = function (card) {
                                    return 6 - get.value(card);
                                };
                                ('step 4');
                                if (result.cards?.length) {
                                    var type = get.subtype(result.cards[0]);
                                    if (
                                        game.hasPlayer(function (current) {
                                            return (type == 'equip1' && current.countCards('e', { subtype: 'equip1' }) < 1) || (type == 'equip2' && current.countCards('e', { subtype: 'equip2' }) < 1) || (type == 'equip3' && current.countCards('e', { subtype: 'equip3' }) < 1) || (type == 'equip4' && current.countCards('e', { subtype: 'equip4' }) < 1) || (type == 'equip5' && current.countCards('e', { subtype: 'equip5' }) < 1);
                                        })
                                    ) {
                                        player.storage.muniuyi.remove(event.card1);
                                        event.card2 = result.cards[0];
                                        event.goto(5);
                                    } else {
                                        player.chat('场上无合适的目标');
                                        event.finish();
                                    }
                                } else event.finish();
                                ('step 5');
                                player
                                    .chooseTarget(true, get.prompt('muniuyi'), function (card, player, target) {
                                        var type = get.subtype(event.card2);
                                        return target != player && ((type == 'equip1' && target.countCards('e', { subtype: 'equip1' }) < 1) || (type == 'equip2' && target.countCards('e', { subtype: 'equip2' }) < 1) || (type == 'equip3' && target.countCards('e', { subtype: 'equip3' }) < 1) || (type == 'equip4' && target.countCards('e', { subtype: 'equip4' }) < 1) || (type == 'equip5' && target.countCards('e', { subtype: 'equip5' }) < 1));
                                    })
                                    .set('ai', function (target) {
                                        //QQQ
                                        return get.attitude(player, target) > 0;
                                    });
                                ('step 6');
                                if (result.targets?.length) {
                                    result.targets[0].equip(event.card2);
                                }
                            },
                            mark: true,
                        },
                        muniu2: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.storage.muniuyi.length;
                            },
                            alter: true,
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('木牛:选择一张牌使用', player.storage.muniuyi);
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    if (evt && evt.filterCard) {
                                        return evt.filterCard(button.link, player, evt);
                                    }
                                    return false;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: links[0],
                                        onuse(result, player) {
                                            var card = links[0];
                                            player.storage.muniuyi.remove(card);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return `请选择${get.translation(links[0])}的目标`;
                                },
                            },
                            ai: {
                                save: true,
                                sha: true,
                                order: 12,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.7,
                            },
                        },
                        muniu3: {
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.muniuyi.length;
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton('木牛:选择一张卡牌打出', player.storage.muniuyi).set('filterButton', function (button) {
                                    return _status.event.getTrigger().filterCard(button.link);
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    player.storage.muniuyi.remove(result.links[0]);
                                    trigger.result = { bool: true, card: result.links[0] };
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                            },
                        },
                        muniu4: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.equiping) return false;
                                if (player.countCards('e')) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original == 'e' && player.storage.muniuyi.length) return true;
                                    }
                                return false;
                            },
                            content() {
                                for (var i = player.storage.muniuyi.length; i >= 0; i--) player.storage.muniuyi.remove(player.storage.muniuyi[i]);
                            },
                        },
                        drvu: {
                            group: ['drvue'],
                            trigger: {
                                global: 'roundStart',
                            },
                            filter(event, player) {
                                if (player.countCards('e') > 1) return false;
                                return event.name != 'phase';
                            },
                            content() {
                                'step 0';
                                var i = 0;
                                var list = [];
                                while (i++ < 2) {
                                    var card = get.cardPile(function (card) {
                                        if (get.type(card) != 'equip') return false;
                                        return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                    });
                                    if (card) list.push(card);
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                event.list = list;
                                player.gain(event.list, 'gain2');
                                ('step 1');
                                var card = event.list.shift();
                                if (player.getCards('h').includes(card)) {
                                    player.$give(card, player, false);
                                    player.equip(card);
                                }
                                if (event.list.length) event.redo();
                            },
                        },
                        drvue: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.countCards('e') > 1) return false;
                                return event.name != 'phase';
                            },
                            content() {
                                'step 0';
                                var i = 0;
                                var list = [];
                                while (i++ < 2) {
                                    var card = get.cardPile(function (card) {
                                        if (get.type(card) != 'equip') return false;
                                        return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                    });
                                    if (card) list.push(card);
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                event.list = list;
                                player.gain(event.list, 'gain2');
                                ('step 1');
                                var card = event.list.shift();
                                if (player.getCards('h').includes(card)) {
                                    player.$give(card, player, false);
                                    player.equip(card);
                                }
                                if (event.list.length) event.redo();
                            },
                        },
                        jmll: {
                            forced: true,
                            mark: true,
                            intro: {
                                content: '手牌上限减#',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num -= player.countMark('jmll'));
                                },
                            },
                        },
                        bkxb: {
                            audio: 'ext:英雄联盟/audio:1',
                            trigger: {
                                global: 'loseAfter',
                            },
                            check(event, player) {
                                return get.damageEffect(event.player, player, player) > 0;
                            },
                            filter(event, player) {
                                if (event.player.countCards('h')) return false;
                                return event.hs && event.hs.length;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player, 'green');
                                trigger.player.turnOver();
                                trigger.player.recover();
                            },
                        },
                        izyr: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            audio: 'ext:英雄联盟/audio:3',
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.useCard({ name: 'sha' }, trigger.source);
                                ('step 2');
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        uiyt: {
                            audio: 'ext:英雄联盟/audio:3',
                            group: ['uiyte', 'uiyts'],
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            position: 'he',
                            filterCard: true,
                            selectCard: 1,
                            filterTarget: true,
                            selectTarget: 1,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                event.card = game.createCard2('黑矛', 'spade', 11);
                                target.gain(event.card, 'gain2');
                                ('step 1');
                                if (target.getCards('h').includes(card) && card.name == '黑矛') target.chooseUseTarget(card, 'nopopup', true);
                            },
                            ai: {
                                order: 3,
                                result: {
                                    target(player, target) {
                                        if (
                                            lib.inpile.includes('黑矛') &&
                                            !get.cardPile(function (card) {
                                                return card.name == '黑矛';
                                            })
                                        )
                                            return 0;
                                        return target.getUseValue({ name: '黑矛' });
                                    },
                                },
                            },
                        },
                        hwmc: {
                            forced: true,
                        },
                        uiyte: {
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.hasSkill('hwmc');
                            },
                            content() {
                                player.draw();
                            },
                        },
                        uiyts: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            logTarget: 'player',
                            //令一名角色装备【黑矛】
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player.chooseTarget('选择一名角色令其装备黑矛').forResult();
                                if (result.targets?.length) {
                                    result.targets[0].equip(game.createCard('黑矛', 'spade', 11));
                                    player.chat('契约,已签订.');
                                }
                            },
                        },
                        xuhl: {
                            trigger: {
                                global: 'discardBefore',
                            },
                            mark: true,
                            forced: true,
                            init(player) {
                                player.storage.xuhl = [];
                            },
                            intro: {
                                content(storage, player, skill) {
                                    if (!player.storage.xuhl.length) {
                                        return '未记录花色';
                                    } else {
                                        var str = `已记录过${get.translation(player.storage.xuhl[0] + '2')}`;
                                        for (var i = 1; i < player.storage.xuhl.length; i++) {
                                            str += `、${get.translation(player.storage.xuhl[i] + '2')}`;
                                        }
                                        str += '牌';
                                        return str;
                                    }
                                },
                            },
                            content() {
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        var suit = i.suit;
                                        if (suit && !player.storage.xuhl.includes(suit)) {
                                            player.storage.xuhl.push(suit);
                                        }
                                    }
                            },
                            group: 'xuhl_phase',
                            subSkill: {
                                phase: {
                                    trigger: {
                                        global: 'discardAfter',
                                    },
                                    _priority: -50,
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.xuhl.length >= 4;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.xuhl = [];
                                        player.unmarkSkill('xuhl'); //QQQ
                                        //同步标记(每当标记变动都要写这句)
                                        ('step 1');
                                        player.drawTo(player.maxHp);
                                        player.storage.sixiang = [];
                                        player.unmarkSkill('sixiang');
                                        //同步标记(每当标记变动都要写这句)
                                    },
                                },
                            },
                        },
                        lmqi: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'phaseUse',
                            position: 'he',
                            filterCard: true,
                            selectCard: 2,
                            init(player) {
                                player.storage.xianjiang = [];
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            prompt: '将两张牌 改造为任意一张装备牌',
                            content() {
                                'step 0';
                                var list = [];
                                var suit = cards[0].suit;
                                var number = cards[0].number;
                                for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                    if (get.type(ui.cardPile.childNodes[i], 'trick') == 'equip' && !list.includes(ui.cardPile.childNodes[i].name)) {
                                        list.push(ui.cardPile.childNodes[i].name);
                                    }
                                }
                                var dialog = ui.create.dialog([list, 'vcard']);
                                player.chooseButton(dialog, true, function (button) {
                                    return get.value({ name: button.link[2] }, player);
                                });
                                ('step 1');
                                cards[0].init(result.buttons[0].link);
                                player.gain(cards[0]);
                                player.$gain(cards[0]);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                                threaten: 2,
                            },
                        },
                        hvsu: {
                            audio: 'ext:英雄联盟/audio:3',
                            group: ['hvsue'],
                            trigger: {
                                global: 'judge',
                            },
                            usable: 1,
                            check(event, player) {
                                return event.judge(player.judging[0]) < 0;
                            },
                            content() {
                                'step 0';
                                var card = get.cards()[0];
                                event.card = card;
                                game.cardsGotoOrdering(card).relatedEvent = trigger;
                                ('step 1');
                                player.$throw(card);
                                if (trigger.player.judging[0].clone) {
                                    trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                    game.broadcast(function (card) {
                                        if (card.clone) {
                                            card.clone.classList.remove('thrownhighlight');
                                        }
                                    }, trigger.player.judging[0]);
                                    game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                }
                                game.cardsDiscard(trigger.player.judging[0]);
                                trigger.player.judging[0] = card;
                                game.log(trigger.player, '的判定牌改为', card);
                            },
                        },
                        hvsue: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                global: 'judge',
                            },
                            usable: 1,
                            check(event, player) {
                                return event.judge(player.judging[0]) < 0;
                            },
                            content() {
                                'step 0';
                                var card = get.cards()[0];
                                event.card = card;
                                game.cardsGotoOrdering(card).relatedEvent = trigger;
                                ('step 1');
                                player.$throw(card);
                                if (trigger.player.judging[0].clone) {
                                    trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                    game.broadcast(function (card) {
                                        if (card.clone) {
                                            card.clone.classList.remove('thrownhighlight');
                                        }
                                    }, trigger.player.judging[0]);
                                    game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                }
                                game.cardsDiscard(trigger.player.judging[0]);
                                trigger.player.judging[0] = card;
                                game.log(trigger.player, '的判定牌改为', card);
                            },
                        },
                        iryt: {
                            audio: 'ext:英雄联盟/audio:3',
                            limited: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                //初始化
                                player.storage.iryt = false; //技能未发动(xx为技能名)
                            },
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.iryt == false; //你没发动过这个技能
                            },
                            trigger: {
                                global: 'phaseAfter',
                            },
                            content() {
                                player.storage.iryt = true; //技能发动过
                                player.awakenSkill('iryt'); //技能文本变灰(失去技能,标记消失)
                            },
                        },
                        isxm: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: ['useCardAfter', 'respond'],
                            },
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd';
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player.chooseTarget().forResult();
                                if (result.targets?.length) {
                                    result.targets[0].gain(trigger.cards);
                                    result.targets[0].$gain2(trigger.cards);
                                    player.removeSkill('isxm');
                                }
                            },
                        },
                        nivr: {
                            limited: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                //初始化
                                player.storage.nivr = false; //技能未发动(xx为技能名)
                            },
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.nivr == false; //你没发动过这个技能
                            },
                            trigger: {
                                global: 'phaseAfter',
                            },
                            content() {
                                'step 0';
                                var nextren = trigger.player.previous;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.countMark('nivryi') > 0 && current != player;
                                    })
                                )
                                    event.goto(2);
                                else {
                                    if (player.countMark('nivryi') > 0) player.removeMark('nivryi');
                                    nextren.addMark('nivryi');
                                    nextren.addSkill('nivre');
                                }
                                ('step 1');
                                player.addSkill('nivryi');
                                ('step 2');
                                player.awakenSkill('nivr');
                                player.storage.nivr = true;
                            },
                        },
                        nivre: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                var nextren = player.previous;
                                nextren.addMark('nivryi');
                            },
                        },
                        nivryi: {
                            mark: true,
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                'step 1';
                                player.chooseTarget(true, get.prompt('nivryi'), '令下一回合武将开启自己的回合', function (card, player, target) {
                                    return target.countMark('nivryi') > 0;
                                });
                                ('step 2');
                                if (result.targets?.length) {
                                    result.targets[0].removeMark('nivryi');
                                    result.targets[0].previous.addMark('nivryi');
                                    result.targets[0].previous.addSkill('nivre');
                                    result.targets[0].removeSkill('nivre');
                                } //QQQ
                            },
                        },
                        isxme: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addSkill('isxm');
                            },
                        },
                        zvkl: {
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                'step 1';
                                var card = get.cards()[0];
                                event.card = card;
                                player.showCards(card);
                                if (!player.hasUseTarget(card)) {
                                    card.fix();
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    game.updateRoundNumber();
                                    event.finish();
                                }
                                ('step 2');
                                var next = player.chooseUseTarget(card, true);
                                if (get.info(card).updateUsable == 'phaseUse') next.addCount = false;
                                ('step 3');
                                if (result.bool) event.finish();
                                else {
                                    card.fix();
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    game.updateRoundNumber();
                                }
                            },
                        },
                        zvklyi: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'jiu';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                'step 1';
                                var card = get.cards()[0];
                                event.card = card;
                                player.showCards(card);
                                if (!player.hasUseTarget(card)) {
                                    card.fix();
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    game.updateRoundNumber();
                                    event.finish();
                                }
                                ('step 2');
                                var next = player.chooseUseTarget(card, true);
                                if (get.info(card).updateUsable == 'phaseUse') next.addCount = false;
                                ('step 3');
                                if (result.bool) event.goto(1);
                                else {
                                    card.fix();
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    game.updateRoundNumber();
                                }
                            },
                        },
                        zvkle: {
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                player.removeSkill('zvkl');
                            },
                        },
                        畅饮: {
                            mod: {
                                cardUsable(card) {
                                    if (card.name == 'jiu') return Infinity;
                                },
                            },
                            group: ['jiushi1', 'jiushi2', 'jiushi3'],
                        },
                        wfyi: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            mark: true,
                            group: ['wfyiyi'],
                            intro: {
                                content: '#层毒',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = player.countMark('wfyi');
                                ('step 1'); //第1步
                                event.count--;
                                player.judge(function (card) {
                                    return get.color(card) == 'black' ? 1 : -1;
                                });
                                ('step 2'); //第1步
                                if (result.bool) {
                                    if (player.countCards('h') > 0) {
                                        player.chooseToDiscard(true, 'h');
                                    } else {
                                        player.loseHp();
                                    }
                                }
                                ('step 3'); //第1步
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        wfyiyi: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                trigger.player.addSkill('wfyi');
                                trigger.player.addMark('wfyi');
                            },
                        },
                        瘟疫: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addSkill('wfyi');
                                player.addMark('wfyi');
                            },
                        },
                        毒首: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.hasSkill('wfyi');
                            },
                            content() {
                                if (_status.currentPhase != player) {
                                    player.draw(1);
                                } else {
                                    player.draw(trigger.player.countMark('wfyi'));
                                }
                            },
                        },
                        毒迹: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                //内容:
                                var nextren = player.next;
                                nextren.addSkill('wfyi');
                                nextren.addMark('wfyi');
                                player.addSkill('wfyi');
                                player.addMark('wfyi');
                            },
                        },
                        衝流: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            group: ['islq'],
                            filter(event, player) {
                                //发动限制条件
                                return game.countPlayer() > 2;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                var nextren = player.previous;
                                nextren.turnOver();
                                ('step 2');
                                game.broadcastAll(
                                    function (player, nextren) {
                                        game.swapSeat(player, player.previous);
                                    },
                                    player,
                                    player.previous
                                );
                            },
                        },
                        wajp: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'phaseUse',
                            usable: 3,
                            group: ['xufa_phase', 'xufayi'],
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('wajp'), '弃置一名角色的一张牌,其摸一张牌', function (card, player, target) {
                                        return target.countCards('hej') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (target == player) return 2;
                                        if (get.attitude(player, target) <= 0) {
                                            return 1;
                                        }
                                        return 0.5;
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    player.getHistory('custom').push({ wajp: true });
                                    player.discardPlayerCard(result.targets[0], true, 'hej');
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.target.addTempSkill('wajpyi');
                                event.target.draw();
                                event.target.addMark('wajpyi', 1);
                                ('step 3');
                                if (event.target.storage.wajpyi == 3 && player.storage.xufa.length == 3) {
                                    game.playAudio('../extension/英雄联盟/audio/目标瓦解.mp3');
                                    event.target.damage(3);
                                }
                                ('step 4');
                            },
                        },
                        diyuyi: {
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
                        },
                        diyue: {
                            marktext: '4 /   ',
                            group: ['diyue_dm', 'diyuyi', 'diyusi'],
                            intro: {
                                content: '已使用#张牌',
                            },
                            subSkill: {
                                dm: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    content() {
                                        //内容:
                                        'step 0';
                                        player.addMark('diyue', 1);
                                        ('step 1');
                                        if (player.storage.diyue == 1) {
                                            game.playAudio('../extension/英雄联盟/audio/damage_1.mp3');
                                        }
                                        ('step 2');
                                        if (player.storage.diyue == 2) {
                                            game.playAudio('../extension/英雄联盟/audio/damage_2.mp3');
                                        }
                                        ('step 3');
                                        if (player.storage.diyue == 3) {
                                            game.playAudio('../extension/英雄联盟/audio/damage_3.mp3');
                                        }
                                        ('step 4');
                                        if (player.storage.diyue >= 4) {
                                            game.playAudio('../extension/英雄联盟/audio/damage_4.mp3');
                                            player.addSkill('diyus');
                                        }
                                    },
                                },
                            },
                        },
                        diyus: {
                            mod: {
                                cardEnabled() {
                                    return false;
                                },
                            },
                        },
                        xpmu: {
                            trigger: {
                                player: ['useCardBegin'],
                            },
                            silent: true,
                            init(player) {
                                player.storage.xpmu = [];
                            },
                            intro: {
                                content(storage) {
                                    if (!storage.length) {
                                        return '未使用过有花色的牌';
                                    } else {
                                        var str = `已使用过${get.translation(storage[0] + '2')}`;
                                        for (var i = 1; i < storage.length; i++) {
                                            str += `、${get.translation(storage[i] + '2')}`;
                                        }
                                        str += '牌';
                                        return str;
                                    }
                                },
                            },
                            content() {
                                var suit = trigger.card.suit;
                                if (suit) {
                                    player.storage.xpmu.add(suit);
                                    player.markSkill('xpmu');
                                }
                            },
                            group: 'xpmu_phase',
                            subSkill: {
                                phase: {
                                    trigger: {
                                        player: ['useCard'],
                                    },
                                    _priority: -50,
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.xpmu.length >= 4;
                                    },
                                    content() {
                                        'step 0';
                                        game.playAudio('../extension/英雄联盟/audio/xpmu1.mp3');
                                        player.storage.xpmu.length = 0;
                                        player.unmarkSkill('xpmu');
                                        ('step 1');
                                        player.addTempSkill('bcji');
                                        event.targets = game.filterPlayer();
                                        event.targets.remove(player);
                                        targets.sort(lib.sort.seat);
                                        ('step 2');
                                        event.num = 0;
                                        player.line(targets, 'green');
                                        ('step 3');
                                        if (event.num < event.targets.length) {
                                            event.targets[event.num].addTempSkill('xpmue');
                                            event.num++;
                                            event.redo();
                                        }
                                    },
                                },
                            },
                            forced: true,
                            popup: false,
                        },
                        xryy: {
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
                            },
                        },
                        xpmue: {
                            ai: {
                                unequip1: true,
                                unequip2: true,
                                unequip3: true,
                                unequip4: true,
                                unequip5: true,
                            },
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return !lib.skill[skill].charlotte;
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
                            },
                            intro: {
                                content(storage, player, skill) {
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.baiban.skillBlocker(i, player);
                                    });
                                    if (list.length) return '失效技能:' + get.translation(list);
                                    return '无失效技能';
                                },
                            },
                        },
                        diyusi: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            _priority: 10,
                            content() {
                                player.removeMark('diyue', player.countMark('diyue'));
                                player.removeSkill('diyus');
                            },
                        },
                        bcji: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            usable: 1,
                            content() {
                                var num = trigger.num;
                                trigger.cancel();
                                trigger.player.damage(2 * num);
                            },
                        },
                        wajpyi: {
                            forced: true,
                            mark: true,
                            intro: {
                                content: '分析进度 # / 3',
                            },
                        },
                        vfbk: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            audio: 'ext:英雄联盟/audio:3',
                            mark: true,
                            forced: true,
                            filter(event, player) {
                                return event.type == 'discard';
                            },
                            content() {
                                'step 0';
                                var num = trigger.getl(player).hs.length;
                                player.chooseTarget(get.prompt('vfbk'), `令至多${get.cnNumber(num)}名角色各 ? ?`, [1, num]).ai = function (target) {
                                    var player = _status.event.player;
                                    if (player == target) return get.attitude(player, target) + 10;
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                ai = function (target) {
                                    var player = _status.event.player;
                                    if ((player.countMark('vibk') - 1) % 3 == 1) return get.attitude(player, target) > 0;
                                    else return get.attitude(player, target) < 0;
                                };
                                ('step 2');
                                if (result.bool) {
                                    player.addMark('vfbk', 1);
                                    for (var i = 0; i < result.targets.length; i++) {
                                        if (player.countMark('vfbk') % 3 == 1) result.targets[i].draw(2);
                                        if (player.countMark('vfbk') % 3 == 2) result.targets[i].chooseToDiscard('he', 2, true);
                                        if (player.countMark('vfbk') % 3 == 0) result.targets[i].damage(2);
                                    }
                                } else event.finish();
                                ('step 3');
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                    },
                                },
                                noh: true,
                            },
                        },
                        wajpe: {
                            trigger: {
                                global: 'loseAfter',
                            },
                            mark: true,
                            intro: {
                                content: '分析进度 # / 3',
                            },
                            filter(event, player) {
                                return event.type == 'discard';
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += player.countMark('wajpe'));
                                },
                            },
                            init(player) {
                                player.storage.wajpe = [];
                            },
                            content() {
                                player.addMark('wajpe');
                            },
                            group: 'wajpe_phase',
                            subSkill: {
                                phase: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    content() {
                                        player.removeMark('wajpe', player.countMark('wajpe'));
                                    },
                                },
                            },
                            forced: true,
                            popup: false,
                        },
                        islq: {
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            filter(event, player) {
                                //发动限制条件
                                return game.countPlayer() < 3;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                            },
                        },
                        qqqq: {
                            marktext: 'Q',
                            mark: true,
                            intro: {
                                content: 'Q:#00层',
                            },
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.qqqq = 1; //初始获得2个'障'
                                player.markSkill('qqqq'); //显示标记
                                //同步标记(每当标记变动都要写这句)
                            },
                        },
                        汲魂: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            group: ['qqqq'],
                            logTarget: 'target',
                            preHidden: true,
                            forced: true,
                            content() {
                                'step 0';
                                event.count = player.countMark('qqqq');
                                ('step 1');
                                event.count--;
                                player.judge();
                                ('step 2');
                                switch (
                                result.suit //根据判定牌的花色
                                ) {
                                    case 'diamond':
                                        player.recover();
                                        break; //♠️️:你失去一点体力
                                    case 'heart':
                                        player.recover();
                                        break; //♥️️:你摸一张牌
                                    default:
                                        trigger.target.damage();
                                }
                                ('step 3');
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        死神: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                return player != event.player;
                            },
                            forced: true,
                            content() {
                                player.addMark('qqqq');
                                player.gainMaxHp();
                                player.draw();
                            },
                        },
                        yuyj: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            round: 1,
                            check: (event, player) => event.player.isEnemiesOf(player),
                            //每轮限1次,每名角色回合开始时,你可以摸7张牌,将6张手牌置于牌堆顶
                            async content(event, trigger, player) {
                                //QQQ
                                var cards = get.cards(7);
                                player.gain(cards);
                                if (player.countCards('he')) {
                                    const result = await player
                                        .chooseCard('h', true, 6)
                                        .set('ai', (c) => 6 - get.value(c))
                                        .forResult();
                                    if (result.cards?.length) {
                                        for (var i of result.cards) {
                                            ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                        }
                                    }
                                }
                            },
                        },
                        xufa: {
                            trigger: {
                                global: 'discardBefore',
                            },
                            mark: true,
                            forced: true,
                            filter(event, player) {
                                if ((_status.currentPhase = player)) return true;
                            },
                            init(player) {
                                player.storage.xufa = [];
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += player.storage.xufa.length);
                                },
                            },
                            intro: {
                                content(storage, player, skill) {
                                    if (!player.storage.xufa.length) {
                                        return '未记录';
                                    } else {
                                        var str = `已记录过${get.translation(player.storage.xufa[0] + '')}`;
                                        for (var i = 1; i < player.storage.xufa.length; i++) {
                                            str += `、${get.translation(player.storage.xufa[i] + '')}`;
                                        }
                                        str += '牌';
                                        return str;
                                    }
                                },
                            },
                            content() {
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        var type = get.type(i);
                                        if (type && !player.storage.xufa.includes(type)) {
                                            player.storage.xufa.push(type);
                                            //同步标记(每当标记变动都要写这句)
                                        }
                                    }
                            },
                            group: ['xufa_phase'],
                            subSkill: {
                                phase: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    _priority: -50,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.xufa = [];
                                        player.unmarkSkill('xufa');
                                        //同步标记(每当标记变动都要写这句)
                                    },
                                },
                            },
                        },
                        xufayi: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                global: 'discardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.cards) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.type(i, 'trick') != 'trick') return false;
                                    }
                                return true;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        jtmuer: {
                            audio: 'ext:英雄联盟/audio:6',
                            enable: 'phaseUse',
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.jtmuyi > 0; //你有'障'
                            },
                            //出牌阶段,你可以移去1枚<魂>,将弃牌堆中的1张非锦囊牌牌移动到1名角色对应位置
                            async content(event, trigger, player) {
                                //QQQ
                                player.storage.jtmuyi--;
                                const cards = Array.from(ui.discardPile.childNodes);
                                if (cards[0]) {
                                    const result = await player
                                        .chooseButton(['获得一张牌', cards])
                                        .set('ai', (button) => get.value(button.link))
                                        .forResult();
                                    if (result.links?.length) {
                                        player.gain(result.links, 'gain2');
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        jtmuyi: {
                            marktext: '魂',
                            group: ['jtmuyi_dm', 'jtmuer'],
                            intro: {
                                content: '你拥有#个魂',
                            },
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.jtmuyi = 3; //初始获得2个'障'
                                player.markSkill('jtmuyi'); //显示标记
                                //同步标记(每当标记变动都要写这句)
                                game.log(player, '获得了3个<魂>'); //游戏记录:玩家获得了2个'障'
                            },
                            subSkill: {
                                dm: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    forced: true,
                                    content() {
                                        //内容:
                                        'step 0'; //第0步(必须从0开始)
                                        player.storage.jtmuyi += 3; //'障'-1
                                        //同步标记(每当标记变动都要写这句)
                                        game.log(player, '获得了3个<魂>'); //游戏记录:玩家移除了1个'障'
                                        if (player.storage.jtmuyi == 0) {
                                            //如果没有'障'
                                            player.unmarkSkill('jtmuyi'); //不显示标记
                                        }
                                    },
                                },
                            },
                        },
                        xxx: {
                            enable: 'phaseUse',
                            selectCard: 1,
                            filterCard: true,
                            position: 'hes',
                            selectTarget: 1,
                            filterTarget: true,
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('hes'); //你有手牌时才能发动
                            },
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                target.loseHp();
                                ('step 1');
                                player.judge();
                                ('step 2');
                                switch (
                                result.suit //根据判定牌的花色
                                ) {
                                    case 'club':
                                        target.addSkill('fengyin') && target.addSkill('mwho') && player.addSkill('fengyin') && player.addSkill('mwho');
                                        break; //♣️️:你受到一点伤害
                                    case 'spade':
                                        target.addSkill('fengyin') && target.addSkill('mwho') && player.addSkill('fengyin') && player.addSkill('mwho');
                                        event.goto(4); //♠️️:你失去一点体力
                                    case 'heart':
                                        player.recover() && target.recover() && player.draw() && target.draw();
                                        break; //♥️️:你摸一张牌
                                    case 'diamond':
                                        player.draw() && target.draw();
                                        break; //♦️️:你失去一点体力
                                }
                                ('step 3');
                                event.finish(); //这一步结束后,整个事件结束
                                ('step 4');
                                lib.skill.ybni.hideCharacter(player.name1, player);
                                if (player.name2) lib.skill.ybni.hideCharacter(player.name2, player);
                                player.addTempSkill('ybni');
                                ('step 5');
                                lib.skill.ybni.hideCharacter(target.name1, target);
                                if (target.name2) lib.skill.ybni.hideCharacter(target.name2, target);
                            },
                        },
                        mwho: {
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
                            },
                            trigger: {
                                player: ['phaseEnd', 'damageEnd'],
                            },
                            forced: true,
                            content() {
                                player.removeSkill('mwho');
                                player.removeSkill('fengyin');
                            },
                        },
                        魅影: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            hiddenSkill: true,
                            content() {
                                'step 0';
                                player.chooseTarget().set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) < 0;
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].addSkill('fengyin');
                                    result.targets[0].addSkill('mwho');
                                }
                            },
                        },
                        ybni: {
                            forced: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 99;
                                },
                            },
                            hideCharacter(name, player) {
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
                            },
                        },
                        hryu: {
                            audio: 'ext:英雄联盟/audio:5',
                            enable: 'phaseUse',
                            selectCard: 2,
                            filterCard: true,
                            position: 'hes',
                            selectTarget: 1,
                            filterTarget: true,
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('hes'); //你有手牌时才能发动
                            },
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                target.damage();
                                ('step 1');
                                player.judge();
                                ('step 2');
                                switch (
                                result.suit //根据判定牌的花色
                                ) {
                                    case 'heart':
                                        player.recover() && target.recover() && player.draw() && target.draw();
                                        break; //♥️️:你摸一张牌
                                    case 'diamond':
                                        player.draw() && target.draw();
                                        break; //♦️️:你失去一点体力
                                    /* case 'club':;event.goto(4);//♣️️:你受到一点伤害*/
                                    case 'spade':
                                        player.addSkill('fengyin') && player.addSkill('mwho') && target.addSkill('fengyin') && target.addSkill('mwho');
                                        event.goto(4); //♠️️:你失去一点体力
                                    default:
                                        event.goto(4); //♣️️:你受到一点伤害
                                }
                                ('step 3');
                                event.finish(); //这一步结束后,整个事件结束
                                ('step 4');
                                lib.skill.ybni.hideCharacter(player.name1, player);
                                if (player.name2) lib.skill.ybni.hideCharacter(player.name2, player);
                                player.addTempSkill('ybni');
                                ('step 5');
                                lib.skill.ybni.hideCharacter(target.name1, target);
                                if (target.name2) lib.skill.ybni.hideCharacter(target.name2, target);
                            },
                        },
                        mdfu: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            group: ['mdfuer'],
                            filterTarget(card, player, target) {
                                return player != target && player.countCards('hes' > 1);
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(2, true, 'hes');
                                ('step 1');
                                player.chooseBool(`令你自己方面,否则令${get.translation(target)}翻面`);
                                ('step 2');
                                event.bool1 = result.bool;
                                target.chooseBool(`令你自己方面,否则令${get.translation(player)}翻面`).ai = function () {
                                    return [true, false].randomGet();
                                };
                                ('step 3');
                                event.bool2 = result.bool;
                                ('step 4');
                                if (event.bool1) player.turnOver();
                                else target.turnOver();
                                ('step 5');
                                if (event.bool2) target.turnOver();
                                else player.turnOver();
                            },
                        },
                        potu: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            hiddenSkill: true,
                            content() {
                                'step 0';
                                player.chooseTarget().set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) < 0;
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].damage();
                                }
                                ('step 2');
                                if (player.isTurnedOver()) player.turnOver();
                                if (player.isLinked()) player.link();
                            },
                        },
                        mdfuer: {
                            trigger: {
                                player: ['turnOverAfter'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.isTurnedOver()) {
                                    lib.skill.ybni.hideCharacter(player.name1, player);
                                    if (player.name2) lib.skill.ybni.hideCharacter(player.name2, player);
                                    player.addTempSkill('ybni');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        yuvf: {
                            audio: 'ext:英雄联盟/audio:4',
                            group: ['yuvfer'],
                            filter(event, player) {
                                if (player.storage.yuvf <= 1) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                //if(event.name=='chooseToRespond'&&!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
                                return true;
                            },
                            ai: {
                                respondShan: true,
                            },
                            init(player) {
                                player.storage.yuvf = 7;
                            },
                            intro: {
                                content: 'mark',
                            },
                            marktext: '盾',
                            mark: true,
                            trigger: {
                                global: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 1) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.yuvf -= 2;
                                trigger.player.draw('visible');
                                ('step 1');
                                var card = result.cards[0];
                                if (card.suit != 'spade') {
                                    trigger.untrigger();
                                    trigger.set('responded', true);
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                        },
                        yuvfer: {
                            audio: 'ext:英雄联盟/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.storage.yuvf <= 5) return false; //if(event.name=='chooseToRespond'&&!lib.filter.cardRespondable({name:'shan'},player,event)) return false;
                                return true;
                            },
                            content() {
                                //内容:
                                'step 0';
                                player.chooseTarget();
                                ('step 1');
                                if (result.bool) {
                                    player.storage.yuvf -= 6;
                                    result.targets[0].changeHujia(4);
                                }
                                ('step 2');
                            },
                        },
                        qiheer: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isDisabled(1);
                            },
                            content() {
                                player.draw(7);
                                player.chooseToDiscard(7, true, 'hes');
                            },
                        },
                        qihe: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.chooseToDiscard(true, 'hes');
                                player.storage.yuvf++;
                            },
                        },
                        xungeee: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'basic') == 'basic';
                            },
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                player.addMark('xunge', 1);
                                //同步标记(每当标记变动都要写这句)
                                ('step 1'); //第0步(必须从0开始)
                                if (player.countMark('xunge') < 5) event.finish();
                                else {
                                    player.removeSkill('xung');
                                    player.addSkill('xunger');
                                    player.addSkill('xungsha');
                                    game.playAudio('../extension/英雄联盟/audio/2技能效果2.mp3');
                                    player.removeMark('xunge', 5);
                                    player.removeSkill('xungeee');
                                }
                            },
                        },
                        lpua: {
                            audio: 'ext:英雄联盟/audio:5',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                var target = trigger.target;
                                target.addMark('lpua_mark', 1);
                                target.markSkill('lpua_mark'); //显示标记
                                if (target.storage.lpua_mark >= 3) {
                                    target.loseHp(Math.ceil(target.maxHp / 2));
                                    game.playAudio('../extension/英雄联盟/audio/lpuaaa.mp3');
                                    target.removeMark('lpua_mark', 3);
                                }
                            },
                            subSkill: {
                                mark: {
                                    marktext: '殁',
                                    intro: {
                                        content: '你拥有#个殁',
                                    },
                                    init(player) {
                                        //初始化(好习惯),获得这个技能时执行的内容
                                        player.markSkill('lpua_mark'); //显示标记
                                        //同步标记(每当标记变动都要写这句)
                                        game.log(player, '获得了1个<殁>'); //游戏记录:玩家获得了2个'障'
                                    },
                                },
                            },
                        },
                        寒影: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            hiddenSkill: true,
                            content() {
                                'step 0';
                                event.count = 2;
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('寒影'), '弃置一名角色的一张牌', function (card, player, target) {
                                        return target.countDiscardableCards(player, 'hej');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'green');
                                    player.discardPlayerCard(result.targets[0], 'hej', true);
                                    event.count--;
                                } else event.finish();
                                ('step 3');
                                if (event.count) event.goto(1);
                            },
                        },
                        chfwyi: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'phaseJieshuEnd',
                            },
                            content() {
                                'step 0';
                                'step 1';
                                if (player.countCards('h') <= 1) {
                                    player.drawTo(2);
                                    event.goto(0);
                                }
                                if (player.countCards('h') >= 3) {
                                    var ds = player.countCards('h') - 2;
                                    player.chooseToDiscard(true, 'hs', ds);
                                    event.goto(0);
                                }
                                if (player.countCards('h') == 2) {
                                    event.goto(3);
                                }
                                ('step 2');
                                ('step 3');
                                lib.skill.ybni.hideCharacter(player.name1, player);
                                if (player.name2) lib.skill.ybni.hideCharacter(player.name2, player);
                                player.addTempSkill('ybni');
                                player.removeSkill('chfwyi');
                                player.addSkill('chfwer');
                                player.addTempSkill('fengyin');
                            },
                        },
                        chfwer: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                'step 0';
                                'step 1';
                                if (player.countCards('h') <= 1) {
                                    player.drawTo(2);
                                    event.goto(0);
                                }
                                if (player.countCards('h') >= 3) {
                                    var ds = player.countCards('h') - 2;
                                    player.chooseToDiscard(true, 'hes', ds);
                                    event.goto(0);
                                }
                                if (player.countCards('h') == 2) {
                                    event.goto(3);
                                }
                                ('step 2');
                                ('step 3');
                                player.chooseTarget().set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) < 0;
                                });
                                ('step 4');
                                if (result.targets?.length) {
                                    result.targets[0].damage(2);
                                    player.removeSkill('chfwer');
                                    player.addSkill('chfwyi');
                                    player.addTempSkill('fengyin');
                                }
                            },
                        },
                        ykxi: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            hiddenSkill: true,
                            content() {
                                'step 0';
                                'step 1'; //第1步
                                player.chooseTarget([1, 3]);
                                ('step 2');
                                if (result.bool) {
                                    for (var i of result.targets) {
                                        player.gainPlayerCard(true, i, 'hej');
                                        if (i.countCards('hej') <= 1) {
                                            i.damage();
                                        }
                                    }
                                }
                            },
                        },
                        anua: {
                            audio: 'ext:英雄联盟/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.chooseCard('hes', '你可以弃置X张牌,视为你对X名其他角色使用1张杀.', [1, Infinity], false);
                                ('step 1');
                                if (result.bool) {
                                    player.length = result.cards.length;
                                    player.discard(result.cards);
                                } else event.finish();
                                ('step 2');
                                player.addTempSkill('anuaer');
                                ('step 3'); //第1步
                                player.chooseTarget(`对${result.cards.length}名角色使用1张杀`, result.cards.length, true);
                                ('step 4');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        player.useCard({ name: 'sha' }, result.targets[i]);
                                    }
                                }
                                ('step 5');
                                player.removeSkill('anuaer');
                            },
                        },
                        anuaer: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                lib.skill.ybni.hideCharacter(player.name1, player);
                                if (player.name2) lib.skill.ybni.hideCharacter(player.name2, player);
                                player.addTempSkill('ybni');
                            },
                        },
                        klhx: {
                            audio: 'ext:英雄联盟/audio:6',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            init(player) {
                                player.storage.klhx = [];
                            },
                            intro: {
                                content(storage) {
                                    if (!storage.length) {
                                        return '未使用过有花色的牌';
                                    } else {
                                        var str = `已使用过${get.translation(storage[0] + '2')}`;
                                        for (var i = 1; i < storage.length; i++) {
                                            str += `、${get.translation(storage[i] + '2')}`;
                                        }
                                        str += '牌';
                                        return str;
                                    }
                                },
                            },
                            filter(event, player) {
                                return !player.storage.klhx.includes(event.card.suit);
                            },
                            content() {
                                'step 0';
                                var suit = trigger.card.suit;
                                player.storage.klhx.add(suit);
                                player.draw();
                                ('step 1');
                                if (player.storage.klhx.length == 1) {
                                    player.chat('C');
                                }
                                ('step 2');
                                if (player.storage.klhx.length == 2) {
                                    player.chat('B');
                                }
                                ('step 3');
                                if (player.storage.klhx.length == 3) {
                                    player.chat('A');
                                }
                                ('step 4');
                                if (player.storage.klhx.length == 4) {
                                    player.chat('S');
                                }
                                ('step 5');
                                player.markSkill('klhx');
                            },
                        },
                        rfwu: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                global: ['linkAfter'],
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                if (event.name == 'link') return event.player.isLinked();
                                return true;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                'step 1';
                                player
                                    .chooseToUse({ name: 'sha' }, `是否对${get.translation(trigger.player)}使用一张杀？`)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', trigger.player);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                                threaten: 3,
                            },
                        },
                        dcvf: {
                            group: ['dcvfer', 'dcvf_roundcount'],
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            round: 1,
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('hes'); //你有手牌时才能发动
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(true, 'hes');
                                ('step 1');
                                player.chooseTarget([1, 2]); //你可以选择一个目标
                                ('step 2');
                                if (result.bool) {
                                    for (var i of result.targets) {
                                        i.link();
                                    }
                                }
                            },
                        },
                        icfgyi: {
                            audio: 'ext:英雄联盟/audio:6',
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.name == 'sha') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.name == 'sha') return false;
                                },
                            },
                            trigger: {
                                global: ['shaMiss'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gain(game.createCard('sha'), 'gain2');
                            },
                        },
                        lmyu: {
                            audio: 'ext:英雄联盟/audio:1',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.klhx.length >= 4;
                            },
                            content() {
                                'step 0';
                                'step 1';
                                'step 2';
                                player.addTempSkill('xixt');
                                ('step 3'); //第1步
                                player.chooseTarget([1, 3]).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) < 0;
                                });
                                ('step 4');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        player.useCard({ name: 'sha', nature: 'fire' }, result.targets[i]);
                                    }
                                }
                                ('step 5');
                                player.removeSkill('xixt');
                                ('step 6');
                                player.storage.klhx.length = 0;
                                player.markSkill('klhx');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                                threaten: 3,
                            },
                        },
                        qmhh: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:英雄联盟/audio:3',
                            filter(event, player) {
                                if (!player.storage.qmhh) return true;
                                return game.hasPlayer(function (current) {
                                    return !player.storage.qmhh.includes(current);
                                });
                            },
                            init(player) {
                                if (!player.storage.qmhh) player.storage.qmhh = [];
                            },
                            filterTarget(card, player, target) {
                                return !player.storage.qmhh || !player.storage.qmhh.includes(target);
                            },
                            selectTarget: 2,
                            multitarget: true,
                            prompt: '选择一名角色 令其移动到另一个角色的上家位置(座位号-1)',
                            content() {
                                'step 0';
                                'step 1';
                                game.broadcastAll(
                                    function (target1, target2) {
                                        game.swapSeat(target1, target2, true, true);
                                    },
                                    targets[0],
                                    targets[1]
                                );
                                //  game.swapSeat(targets[0],targets[1],true,true);
                                player.storage.qmhh.push(targets[0]);
                                ('step 2');
                                targets[0].turnOver();
                                ('step 3');
                            },
                        },
                        whyz: {
                            trigger: {
                                global: ['turnOverAfter'],
                            },
                            audio: 'ext:英雄联盟/audio:3',
                            content() {
                                'step 0';
                                if (trigger.player.isTurnedOver()) {
                                    trigger.player.addSkill('whyzer');
                                }
                            },
                        },
                        whyzer: {
                            group: ['whyzsj'],
                            mark: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('whyzer');
                                player.removeMark('whyzer');
                            },
                        },
                        whyzsj: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.hasSkill('whyzsj');
                                        })
                                    )
                                        return false;
                                },
                            },
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                            },
                        },
                        dcvfer: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            usable: 1,
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('hes'); //你有手牌时才能发动
                            },
                            prompt: '将要重铸的牌置入弃牌堆并摸一张牌',
                            content() {
                                'step 0';
                                player.chooseToDiscard(true, 'hes');
                                ('step 1');
                                player.draw();
                            },
                        },
                        hwwu: {
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - from.countCards('he', { color: 'black' });
                                },
                                maxHandcard(player, num) {
                                    return num + player.countCards('he', { color: 'black' });
                                },
                                cardname(card, player, name) {
                                    if (['equip1'].includes(lib.card[card.name].subtype)) return 'bingliang';
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('he', 'bingliang')) return false;
                                },
                                respondSha: true,
                            },
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: ['useCardEnd'],
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'bingliang';
                            },
                            content() {
                                player.chooseUseTarget(true, { name: 'nanman' }, get.prompt('hwwu'), '视为使用一张【南蛮入侵】');
                            },
                        },
                        ueiu: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                source: 'damageBegin',
                            },
                            //当你造成伤害时,你可以令其回复1点体力并判定:(红/黑)色,你令一名角色(回复1点体力/获得之)
                            async content(event, trigger, player) {
                                //QQQ
                                trigger.player.recover();
                                const result = await player.judge().forResult();
                                if (get.color(result.card) == 'red') {
                                    const result1 = await player.chooseTarget().forResult();
                                    if (result1.targets && result1.targets[0]) {
                                        result1.targets[0].recover();
                                    }
                                } else {
                                    const result1 = await player.chooseTarget().forResult();
                                    if (result1.targets && result1.targets[0]) {
                                        result1.targets[0].gain(result.card, 'gain2');
                                    }
                                }
                            },
                        },
                        lwyb: {
                            audio: 'ext:英雄联盟/audio:3',
                            group: ['lwkdyi', 'yblwyi', 'yblwer'],
                            trigger: {
                                global: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.num = 1;
                                ('step 1');
                                ('step 2');
                                player.chooseTarget('令一名角色判定', true);
                                ('step 3');
                                if (result.targets?.length) {
                                    result.targets[0].judge(lib.skill.xinleiji.judgeCheck).judge2 = function (result) {
                                        return result.bool ? true : false;
                                    };
                                }
                            },
                        },
                        pili: {
                            audio: 'ext:英雄联盟/audio:5',
                            trigger: {
                                global: 'judgeAfter',
                            },
                            filter(event, player) {
                                return !lib.skill.xinleiji_misa.disableReason.includes(event.judgestr) && ['spade'].includes(event.result.suit);
                            },
                            content() {
                                'step 0';
                                event.num = 1 + ['spade'].indexOf(trigger.result.suit);
                                ('step 1');
                                trigger.player.damage(event.num, 'thunder');
                            },
                        },
                        lwkdyi: {
                            forced: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            content() {
                                'step 0';
                                'step 1';
                                trigger.cancel();
                                ('step 2');
                                ('step 3');
                                player.changeHujia(1);
                                ('step 4');
                                player.chooseTarget('令一名角色判定', true);
                                ('step 5');
                                if (result.targets?.length) {
                                    result.targets[0].judge(lib.skill.xinleiji.judgeCheck).judge2 = function (result) {
                                        return result.bool ? true : false;
                                    };
                                }
                            },
                        },
                        yblwyi: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                for (var i = 1; i < 10; i++) {
                                    var card = game.createCard2('shandian', 'spade', i);
                                    ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                }
                                game.updateRoundNumber();
                                ('step 1');
                            },
                        },
                        yblwer: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                'step 1';
                                for (var i = 1; i < 10; i++) {
                                    var card = game.createCard2({ name: 'sha', nature: 'thunder' }, 'spade', i);
                                    ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                }
                                game.updateRoundNumber();
                            },
                        },
                        hsqrer: {
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            popup: false,
                            firstDo: true,
                            charlotte: true,
                            mod: {
                                cardUsable(card) {
                                    if (card.name == 'jiu') return Infinity;
                                },
                            },
                            content() {
                                player.removeSkill('hsqrer');
                            },
                            mark: true,
                            intro: {
                                content: '下一张! 【杀】或【酒】无次数限制',
                            },
                        },
                        hcqk: {
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: ['phaseBefore', 'changeHp'],
                            },
                            forced: true,
                            popup: false,
                            init(player) {
                                if (game.online) return;
                                player.removeAdditionalSkill('hcqk');
                                var list = [];
                                if (player.hp <= 5) {
                                    list.push('肉林');
                                }
                                if (player.hp <= 3) {
                                    list.push('mashu');
                                }
                                if (player.hp <= 1) {
                                    list.push('酒池');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('hcqk', list);
                                }
                            },
                            derivation: ['肉林', 'mashu', '酒池'],
                            content() {
                                player.removeAdditionalSkill('hcqk');
                                var list = [];
                                if (player.hp <= 5) {
                                    list.push('肉林');
                                }
                                if (player.hp <= 3) {
                                    list.push('mashu');
                                }
                                if (player.hp <= 1) {
                                    list.push('酒池');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('hcqk', list);
                                }
                            },
                            ai: {
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                    },
                                },
                            },
                        },
                        hsqr: {
                            mod: {
                                cardname(card, player, name) {
                                    if (['equip1'].includes(lib.card[card.name].subtype)) return 'jiu';
                                },
                            },
                            audio: 'ext:英雄联盟/audio:2',
                            trigger: {
                                player: ['useCardEnd'],
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'jiu';
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                player.addSkill('hsqrer');
                                ('step 2');
                                player.chooseToUse((c) => get.type(c) == 'basic' && lib.filter.filterCard(c, player, event.getParent(2))); //QQQ
                                ('step 3');
                                player.removeSkill('hsqrer');
                            },
                        },
                        lol_pozhan_ding: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h');
                            },
                            //你可以观看一名角色的手牌,令其中一张牌:始终展示且不能使用或打出,每当其成为与该牌同花色牌的目标时,其失去1点体力
                            async content(event, trigger, player) {
                                //QQQ
                                const target = event.targets[0];
                                target.addSkill('lol_pozhan_ding1');
                                if (!target.storage.lol_pozhan_ding1) target.storage.lol_pozhan_ding1 = [];
                                var hs = target.getCards('h');
                                var list = [];
                                for (var i = 0; i < hs.length; i++) {
                                    if (!target.storage.lol_pozhan_ding1.includes(hs[i])) list.push(hs[i]);
                                }
                                if (list[0]) {
                                    const result = await player
                                        .chooseCardButton('破绽', true, list)
                                        .set('ai', (button) => get.value(button.link))
                                        .forResult();
                                    if (result.links?.length) {
                                        player.showCards(result.links);
                                        target.addGaintag(result.links[0], 'lol_pozhan_ding');
                                        target.storage.lol_pozhan_ding1.push(result.links[0]);
                                        target.markSkill('lol_pozhan_ding1');
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                                threaten: 3,
                            },
                        },
                        lol_pozhan_ding1: {
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            intro: {
                                content: 'card',
                            },
                            forced: true,
                            filter(event, player) {
                                var list = player.storage.lol_pozhan_ding1;
                                for (var i = 0; i < list.length; i++) {
                                    if (list[i].suit == event.card.suit) return true;
                                }
                                return false;
                            },
                            content() {
                                var list = player.storage.lol_pozhan_ding1;
                                var num = 0;
                                for (var i = 0; i < list.length; i++) {
                                    if (list[i].suit == trigger.card.suit) num++;
                                }
                                player.loseHp(num);
                            },
                            mod: {
                                cardEnabled2(card) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('lol_pozhan_ding')) return false;
                                },
                            },
                            group: 'lol_pozhan_ding1_lose',
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'loseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var list = player.storage.lol_pozhan_ding1;
                                        for (var i = 0; i < list.length; i++) {
                                            if (event.cards.includes(list[i])) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var list = player.storage.lol_pozhan_ding1;
                                        var list1 = [];
                                        var list2 = [];
                                        for (var i = 0; i < list.length; i++) {
                                            if (trigger.cards.includes(list[i])) list1.push(list[i]);
                                            else list2.push(list[i]);
                                        }
                                        player.showCards(list1);
                                        if (list2.length) player.storage.lol_pozhan_ding1 = list2;
                                        else {
                                            player.storage.lol_pozhan_ding1 = list2;
                                            player.removeSkill('lol_pozhan_ding1');
                                        }
                                    },
                                },
                            },
                        },
                        loluumn: {
                            audio: 'ext:英雄联盟/audio:6',
                            //  enable:'phaseUse',
                            trigger: { global: 'phaseZhunbeiBegin' },
                            filter(event, player) {
                                return player.countCards('hes');
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player.chooseCard('he', 1, true, '选择一张牌 交给该角色');
                                ('step 2');
                                if (result.bool) {
                                    event.card = result.cards[[0]];
                                    player.showCards(event.card);
                                    var target = _status.currentPhase;
                                    if (target == player) {
                                        if (!target.storage.loluumner) target.storage.loluumner = [];
                                        player.storage.loluumner.add(event.card.suit);
                                        player.addTempSkill('loluumner');
                                        player.markSkill('loluumner');
                                        player.addSkill('loluumnsj');
                                        player.gain(event.card, player, 'giveAuto');
                                    } else {
                                        player.addTempSkill('loluumn2');
                                        target.gain(event.card, player, 'giveAuto');
                                        //target.$gain2(event.card,'giveAuto');
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                                threaten: 3,
                            },
                        },
                        loluumn2: {
                            trigger: {
                                source: 'gainEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                return evt && evt.hs && evt.hs.length;
                            },
                            logTarget: 'player',
                            content() {
                                var target = trigger.player;
                                if (!target.storage.loluumner) target.storage.loluumner = [];
                                var cs = trigger.getl(player).hs;
                                for (var i of cs) target.storage.loluumner.add(i.suit);
                                target.addTempSkill('loluumner');
                                target.markSkill('loluumner');
                                player.addSkill('loluumnsj');
                                //    player.addTempSkill('loluumnsj');
                                //  if(!player.storage.jiaoying3) player.storage.jiaoying3=[];
                                //player.storage.jiaoying3.add(target);
                                player.removeSkill('loluumn2');
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    var target = arg.target;
                                    if (target.getStorage('loluumner').includes('red') && get.tag(arg.card, 'respondShan') && !target.hasSkillTag('respondShan', true, null, true)) return true;
                                    return false;
                                },
                            },
                        },
                        loluumner: {
                            charlotte: true,
                            mod: {
                                cardEnabled2(card, player) {
                                    if (player.getStorage('loluumner').includes(card.suit)) return false;
                                },
                            },
                            intro: {
                                content: '本回合内不能使用或打出$牌 且弃置后？获得之',
                            },
                        },
                        loluumnsj: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                global: 'loseAfter',
                            },
                            filter(event, player) {
                                //   game.log('loluumnsj:');
                                //  game.log(event.type);
                                //   game.log(event.cards2);
                                if (event.type != 'discard') return false;
                                for (var i = 0; i < event.cards2.length; i++) {
                                    //   game.log(get.position(event.cards2[i],true));
                                    if (event.player.getStorage('loluumner').includes(event.cards2[i].suit) && get.position(event.cards2[i], true) == 'd') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (trigger.delay == false) game.delay();
                                ('step 1');
                                var cards = [];
                                for (var i = 0; i < trigger.cards2.length; i++) {
                                    var card = trigger.cards2[i];
                                    if (trigger.player.getStorage('loluumner').includes(card.suit) && get.position(card, true) == 'd') {
                                        cards.push(card);
                                    }
                                }
                                if (cards.length) {
                                    player.chooseButton(['归根:选择要获得的牌', cards], [1, cards.length]).set('ai', function (button) {
                                        //    game.log('_status.event.player');
                                        //   game.log(_status.event.player);
                                        return get.value(button.link, _status.event.player, 'raw');
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2', 'log');
                                }
                            },
                        },
                        /* loluumnsj:{      
                   trigger:{
                       global:'loseAfter',
                   },
                   audio:'ext:巨龙降临!/audio:5',
                   forced:true,
            filter:function(event,player){
            if (event.type != 'discard') return false;
            var list=player.storage.loluumner;
            for(var i=0;i<list.length;i++){
               if(event.cards.includes(list[i])) return true;
            //       if(event.cards.includes(player.storage.loluumner[i])) return true;
            };
            return false;
            },
                   content:function() {
            'step 0'
            if(trigger.delay==false) game.delay();
            'step 1'
            var list=player.storage.loluumner;
            var list1=[];
            var list2=[];
            for(var i=0;i<list.length;i++){
               if(trigger.cards.includes(list[i])) list1.push(list[i])
               else list2.push(list[i]);
            };
            if(list.length){
            player.chooseButton(['归根:选择要获得的牌',list1],[1,list.length]).set('ai',function(button){
                   return get.value(button.link,_status.event.player,'raw');
               });
            }
            'step 2'
            if(result.bool){
               player.gain(result.links,'gain2','log');
            }
            },
               }, */
                        yzmiyi: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.chooseTarget(true, '令一名角色执行 准备阶段').set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(target, player) > 0;
                                });
                                ('step 2');
                                if (result.targets?.length) {
                                    var next = result.targets[0].phaseZhunbei();
                                    event.next.remove(next);
                                    trigger.next.push(next);
                                }
                            },
                        },
                        yzmier: {
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            usable: 1,
                            forced: true,
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.chooseTarget(true, '令一名角色执行 判定阶段').set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (
                                        game.hasPlayer(function (target) {
                                            return get.attitude(target, player) > 0 && target.countCards('j') > 0 && player != target;
                                        })
                                    )
                                        return target.countCards('j') > 0 && get.attitude(target, player) > 0 && player != target;
                                    else return get.attitude(target, player) > 0 && player != target;
                                }); //你可以选择一个目标
                                ('step 2');
                                if (result.targets?.length) {
                                    var next = result.targets[0].phaseJudge();
                                    event.next.remove(next);
                                    trigger.next.push(next);
                                }
                            },
                        },
                        yzmisj: {
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            audio: 'ext:英雄联盟/audio:2',
                            usable: 1,
                            forced: true,
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.chooseTarget(true, '令一名角色执行 摸牌阶段').set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (player.countCards('h') > player.getHandcardLimit()) {
                                        if (
                                            game.hasPlayer(function (target) {
                                                return get.attitude(target, player) > 0 && target != player && target.countCards('h') < target.getHandcardLimit();
                                            })
                                        )
                                            return get.attitude(target, player) > 0 && target != player && target.countCards('h') < target.getHandcardLimit();
                                        else return target == player;
                                    } else return target == player;
                                }); //你可以选择一个目标;
                                ('step 2');
                                if (result.targets?.length) {
                                    var next = result.targets[0].phaseDraw();
                                    event.next.remove(next);
                                    trigger.next.push(next);
                                }
                            },
                        },
                        yzmisi: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            audio: 'ext:英雄联盟/audio:3',
                            usable: 1,
                            forced: true,
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.chooseTarget(true, '令一名角色执行 出牌阶段').set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (
                                        game.hasPlayer(function (target) {
                                            return get.attitude(target, player) > 0 && target != player && target.countCards('h') > target.getHandcardLimit() && target.countCards('h') > player.countCards('h');
                                        })
                                    )
                                        return get.attitude(target, player) > 0 && target != player && target.countCards('h') > target.getHandcardLimit() && target.countCards('h') > player.countCards('h');
                                    else return target == player;
                                }); //你可以选择一个目标
                                ('step 2');
                                if (result.targets?.length) {
                                    var next = result.targets[0].phaseUse();
                                    event.next.remove(next);
                                    trigger.next.push(next);
                                }
                            },
                        },
                        yzmiwu: {
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            audio: 'ext:英雄联盟/audio:2',
                            usable: 1,
                            forced: true,
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.chooseTarget(true, '令一名角色执行 弃牌阶段').set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (
                                        game.hasPlayer(function (target) {
                                            return get.attitude(target, player) < 0 && target.countCards('h') > target.getHandcardLimit();
                                        })
                                    ) {
                                        var list = game.filterPlayer(function (current) {
                                            return get.attitude(current, player) < 0 && current.countCards('h') > current.getHandcardLimit();
                                        });
                                        var num = 0;
                                        var ing = list[0];
                                        for (var i = 0; i < list.length; i++)
                                            if (list[i].countCards('h') - list[i].getHandcardLimit() > num) {
                                                num = list[i].countCards('h') - list[i].getHandcardLimit();
                                                ing = list[i];
                                            }
                                        return target == ing;
                                    } else return target.countCards('h') < target.getHandcardLimit() + 1;
                                }); //你可以选择一个目标
                                ('step 2');
                                if (result.targets?.length) {
                                    var next = result.targets[0].phaseDiscard();
                                    event.next.remove(next);
                                    trigger.next.push(next);
                                }
                            },
                        },
                        yzmilq: {
                            trigger: {
                                player: 'phaseEndBegin',
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                ('step 2');
                                player.chooseTarget(true, '令一名角色执行 结束阶段').set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(target, player) > 0;
                                }); //你可以选择一个目标
                                ('step 3');
                                if (result.targets?.length) {
                                    var next = result.targets[0].phaseEnd();
                                    event.next.remove(next);
                                    trigger.next.push(next);
                                }
                            },
                        },
                        hyiier: {
                            trigger: {
                                global: 'useCard',
                            },
                            audio: 'ext:英雄联盟/audio:2',
                            filter(event, player) {
                                return event.card && event.card.name == 'jiu';
                            },
                            forced: true,
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(true, '令一名角色回复1点体力').set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (target == player && target.hp < target.maxHp) return true;
                                    if (
                                        game.hasPlayer(function (target) {
                                            return get.attitude(target, player) > 0 && target.hp < target.maxHp;
                                        })
                                    )
                                        return get.attitude(target, player) > 0 && target.hp < target.maxHp;
                                    else return target == player;
                                }); //你可以选择一个目标
                                ('step 1');
                                if (result.targets?.length) {
                                    if (result.targets[0].hp != result.targets[0].maxHp) result.targets[0].recover();
                                }
                            },
                        },
                        hyii: {
                            group: ['hyiier'],
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'tao';
                            },
                            forced: true,
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(true, '令一名角色回复1点体力').set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (target == player && target.hp < target.maxHp) return true;
                                    if (
                                        game.hasPlayer(function (target) {
                                            return get.attitude(target, player) > 0 && target.hp < target.maxHp;
                                        })
                                    )
                                        return get.attitude(target, player) > 0 && target.hp < target.maxHp;
                                    else return target == player;
                                }); //你可以选择一个目标
                                ('step 1');
                                if (result.targets?.length) {
                                    if (result.targets[0].hp != result.targets[0].maxHp) result.targets[0].recover();
                                }
                            },
                        },
                        yzmi: {
                            group: ['yzmiyi', 'yzmier', 'yzmisj', 'yzmisi', 'yzmiwu', 'yzmilq'],
                            trigger: {
                                player: 'dyingBegin',
                            },
                            content() {
                                'step 0';
                            },
                        },
                        岩嶂: {
                            group: ['vaycsi', 'vaycwu', 'vayclq'],
                        },
                        yjtu: {
                            audio: 'ext:英雄联盟/audio:8',
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget: 2,
                            multitarget: true,
                            prompt: '令一名角色与 其上家或下家 交换位置(座位号-1)',
                            content() {
                                'step 0'; //第0步(必须从0开始)
                                if (targets[1] == targets[0].previous) {
                                    event.goto(2);
                                } else if (targets[1] == targets[0].next) {
                                    event.goto(2);
                                }
                                ('step 1');
                                event.finish();
                                ('step 2'); //第1步
                                game.swapSeat(targets[0], targets[1]);
                                if (targets[1].hasSkill('岩嶂')) {
                                    targets[0].damage();
                                }
                                if (targets[0].hasSkill('岩嶂')) {
                                    targets[1].damage();
                                }
                                ('step 3');
                                event.finish();
                                ('step 4');
                            },
                        },
                        崩山: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 7],
                            content() {
                                'step 0'; //第0步(必须从0开始)
                                if (target.hasSkill('岩嶂')) {
                                    target.die();
                                }
                                ('step 1');
                                player.chooseToDiscard(true, 'hes');
                            },
                        },
                        武圣: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'red';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('hes')) return false;
                                } else {
                                    if (!player.countCards('hes', { color: 'red' })) return false;
                                }
                            },
                            prompt: '将一张红色牌当杀使用或打出',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('hes')) return false;
                                    } else {
                                        if (!player.countCards('hes', { color: 'red' })) return false;
                                    }
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
                        咆哮: {
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!get.zhu(player, 'shouyue')) return false;
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        gvrf_dm: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                player: ['useCard'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                player.addMark('gvrf', trigger.num || 1); //♥️️:
                                //同步标记(每当标记变动都要写这句)
                                if (player.storage.gvrf == 0) {
                                    //如果没有'障'
                                    player.unmarkSkill('gvrf'); //不显示标记
                                }
                            },
                        },
                        jtdz: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            viewAs: {
                                name: 'juedou',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hs', {})) return false;
                            },
                            position: 'hs',
                            prompt: '将一张手牌当决斗使用',
                            check() {
                                return 1;
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                                threaten: 3,
                            },
                        },
                        乱武: {
                            audio: 'ext:英雄联盟/audio:3',
                            enable: 'phaseUse',
                            limited: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.awakenSkill('乱武');
                                event.current = player.next;
                                event.currented = [];
                                ('step 1');
                                event.currented.push(event.current);
                                event.current.addTempClass('target');
                                event.current
                                    .chooseToUse('乱武:使用一张杀或失去一点体力', { name: 'sha' }, function (card, player, target) {
                                        if (player == target) return false;
                                        var dist = get.distance(player, target);
                                        if (dist > 1) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != player && get.distance(player, current) < dist;
                                                })
                                            ) {
                                                return false;
                                            }
                                        }
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    })
                                    .set('ai2', function () {
                                        return get.effect_use.apply(this, arguments) + 0.01;
                                    });
                                ('step 2');
                                if (result.bool == false) event.current.loseHp();
                                event.current = event.current.next;
                                if (event.current != player && !event.currented.includes(event.current)) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
                                            if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
                                        }
                                        var num = 0;
                                        var players = game.filterPlayer();
                                        for (var i of players) {
                                            var att = get.attitude(player, i);
                                            if (att > 0) att = 1;
                                            if (att < 0) att = -1;
                                            if (i != player && i.hp <= 3) {
                                                if (i.countCards('h') == 0) num += att / i.hp;
                                                else if (i.countCards('h') == 1) num += att / 2 / i.hp;
                                                else if (i.countCards('h') == 2) num += att / 4 / i.hp;
                                            }
                                            if (i.hp == 1) num += att * 1.5;
                                        }
                                        if (player.hp == 1) {
                                            return -num;
                                        }
                                        if (player.hp == 2) {
                                            return -game.players.length / 4 - num;
                                        }
                                        return -game.players.length / 3 - num;
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
                        毒蛇: {
                            audio: 'ext:英雄联盟/audio:4',
                            group: ['duueer', 'duuesj'],
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                player.chooseToDiscard(true, 'hes');
                                ('step 1'); //第1步
                                player.chooseTarget([1, 2]).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) < 0;
                                });
                                ('step 2'); //第1步
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].addSkill('wfyi');
                                        result.targets[i].addMark('wfyi');
                                    }
                                }
                            },
                        },
                        duueer: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.disableEquip('equip3');
                                player.disableEquip('equip4');
                                player.disableJudge();
                            },
                        },
                        石化: {
                            audio: 'ext:英雄联盟/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                player.chooseTarget([1, Infinity]); //你可以选择一个目标
                                ('step 1'); //第1步
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].loseHp();
                                        result.targets[i].changeHujia(1);
                                    }
                                }
                            },
                        },
                        duuesj: {
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                            },
                        },
                        酒池: {
                            audio: 'ext:英雄联盟/audio:2',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return card.suit == 'spade';
                            },
                            viewAs: {
                                name: 'jiu',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hs', { suit: 'spade' })) return false;
                            },
                            prompt: '将一张♠️️手牌当酒使用',
                            check(card) {
                                if (_status.event.type == 'dying') return 1 / Math.max(0.1, get.value(card));
                                return 4 - get.value(card);
                            },
                            ai: {
                                threaten: 1.5,
                                basic: {
                                    useful(card, i) {
                                        if (_status.event.player.hp > 1) {
                                            if (i == 0) return 4;
                                            return 1;
                                        }
                                        if (i == 0) return 7.3;
                                        return 3;
                                    },
                                    value(card, player, i) {
                                        if (player.hp > 1) {
                                            if (i == 0) return 5;
                                            return 1;
                                        }
                                        if (i == 0) return 7.3;
                                        return 3;
                                    },
                                },
                                order() {
                                    return get.order({ name: 'sha' }) + 0.2;
                                },
                                result: {
                                    target(player, target) {
                                        if (target && target.isDying()) return 2;
                                        if (target && !target.isPhaseUsing()) return 0;
                                        if (lib.config.mode == 'stone' && !player.isMin()) {
                                            if (player.getActCount() + 1 >= player.actcount) return 0;
                                        }
                                        var shas = player.getCards('h', 'sha');
                                        if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('h', 'zhuge'))) {
                                            return 0;
                                        }
                                        shas.sort(function (a, b) {
                                            return get.order(b) - get.order(a);
                                        });
                                        var card;
                                        if (shas.length) {
                                            for (var i = 0; i < shas.length; i++) {
                                                if (lib.filter.filterCard(shas[i], target)) {
                                                    card = shas[i];
                                                    break;
                                                }
                                            }
                                        } else if (player.hasSha() && player.needsToDiscard()) {
                                            if (player.countCards('h', 'hufu') != 1) {
                                                card = { name: 'sha' };
                                            }
                                        }
                                        if (card) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return (
                                                        get.attitude(target, current) < 0 &&
                                                        target.canUse(card, current, true, true) &&
                                                        !current.hasSkillTag('filterDamage', null, {
                                                            player: player,
                                                            card: card,
                                                            jiu: true,
                                                        }) &&
                                                        get.effect(current, card, target) > 0
                                                    );
                                                })
                                            ) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                                tag: {
                                    save: 1,
                                },
                            },
                        },
                        肉林: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                if (player == event.player) {
                                    return event.target.hasSex('female');
                                }
                                return event.player.hasSex('female');
                            },
                            check(event, player) {
                                return player == event.player;
                            },
                            content() {
                                var id = (player == trigger.player ? trigger.target : player).playerid;
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
                                    if ((arg && arg.card.name != 'sha') || !arg.target.hasSex('female') || arg.target.countCards('h', 'shan') > 1) return false;
                                },
                            },
                        },
                        lkfg: {
                            audio: 'ext:英雄联盟/audio:8',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (get.type(name) == 'basic' && lib.inpile.includes(name) && player.countMark('Q') < player.countCards('he')) return true;
                            },
                            filter(event, player) {
                                if (event.responded || event.lkfg || player.countMark('Q') >= player.countCards('he')) return false;
                                for (var i of lib.inpile) {
                                    if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) {
                                            list.push(['基本', '', i]);
                                            if (i == 'sha') {
                                                for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('折翼之舞', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    if (button.link[2] == 'shan') return 3;
                                    var player = _status.event.player;
                                    if (button.link[2] == 'jiu') {
                                        if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                                        if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                                    }
                                    return player.getUseValue({ name: button.link[2], nature: button.link[3] }) / 4;
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: player.countMark('Q') + 1,
                                        filterCard: lib.filter.cardDiscardable,
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            suit: 'none',
                                            number: null,
                                        },
                                        position: 'he',
                                        check(card) {
                                            var player = _status.event.player,
                                                color = get.color(card, player);
                                            if (player.countCards('he', { color: color }) <= player.countMark('Q') || (ui.selected.cards.length && get.color(ui.selected.cards[0], player) != color)) return -1;
                                            if (
                                                lib.skill.lkfg_backup.viewAs.name == 'jiu' &&
                                                !player.countCards('h', function (cardx) {
                                                    return card != cardx && !ui.selected.cards.includes(cardx) && cardx.name == 'sha';
                                                })
                                            )
                                                return 0;
                                            return Math.min(0.01, 6 - get.value(card));
                                        },
                                        precontent() {
                                            player.addTempSkill('Q', 'roundStart');
                                            player.addMark('Q', 1, false);
                                            var cards = event.result.cards;
                                            player.discard(cards);
                                            event.result.card = {
                                                name: event.result.card.name,
                                                nature: event.result.card.nature,
                                            };
                                            event.result.cards = [];
                                            if (event.result.card.name == 'tao') {
                                                player.addTempSkill('lkfgsi');
                                            }
                                            if (cards.length > 2) {
                                                player.addTempSkill('lkfgsj');
                                            }
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    var name = links[0][2];
                                    var nature = links[0][3];
                                    return '弃置' + get.cnNumber(player.countMark('Q') + 1) + '张牌 视为使用' + (get.translation(nature) || '') + get.translation(name);
                                },
                            },
                            ai: {
                                order(item, player) {
                                    if (_status.event.type == 'phase' && !player.countMark('Q') && player.getUseValue({ name: 'jiu' }, null, true) > 0 && player.countCards('h', 'sha')) return get.order({ name: 'jiu' }) + 1;
                                    return 1;
                                },
                                respondShan: true,
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (player.countMark('Q') >= player.countCards('he')) return false;
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        lkfgsi: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                trigger.target.turnOver();
                                player.removeSkill('lkfgsi');
                            },
                        },
                        lkfgsj: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                trigger.target.turnOver();
                                player.removeSkill('lkfgsj');
                            },
                        },
                        vufg: {
                            audio: 'ext:英雄联盟/audio:4',
                            limited: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                //初始化
                                player.storage.vufg = false; //技能未发动(xx为技能名)
                            },
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.vufger > 5; //你有'障'
                            },
                            trigger: {
                                global: ['turnOverAfter'],
                            },
                            forced: true,
                            content() {
                                //内容:
                                'step 0'; //第0步(必须从0开始)
                                player.storage.vufg = true; //技能发动过
                                player.awakenSkill('vufg'); //技能文本变灰(失去技能,标记消失)
                                ('step 1'); //第1步
                                player.removeSkill('vufger');
                                player.removeSkill('lkfg');
                                ('step 2'); //第1步
                                player.addSkill('lkfger');
                                ('step 3'); //第1步
                                // player.addSkill('jtxi');
                            },
                        },
                        vufger: {
                            marktext: '锋',
                            group: ['vufger_dm'],
                            intro: {
                                content: '等级:#  放逐之刃',
                            },
                            subSkill: {
                                dm: {
                                    trigger: {
                                        global: ['turnOverAfter'],
                                    },
                                    forced: true,
                                    content() {
                                        //内容:
                                        'step 0';
                                        player.addMark('vufger', 1);
                                        //同步标记(每当标记变动都要写这句)
                                    },
                                },
                            },
                        },
                        lkfger: {
                            audio: 'ext:英雄联盟/audio:8',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (get.type(name) == 'basic' && lib.inpile.includes(name) && player.countMark('Q') < player.countCards('he')) return true;
                            },
                            filter(event, player) {
                                if (event.responded || event.lkfger || player.countMark('Q') >= player.countCards('he')) return false;
                                for (var i of lib.inpile) {
                                    if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) {
                                            list.push(['基本', '', i]);
                                            if (i == 'sha') {
                                                for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('折翼之舞', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    if (button.link[2] == 'shan') return 3;
                                    var player = _status.event.player;
                                    if (button.link[2] == 'jiu') {
                                        if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                                        if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                                    }
                                    return player.getUseValue({ name: button.link[2], nature: button.link[3] }) / 4;
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: player.countMark('Q') + 1,
                                        filterCard: lib.filter.cardDiscardable,
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            suit: 'none',
                                            number: null,
                                        },
                                        position: 'he',
                                        check(card) {
                                            var player = _status.event.player,
                                                color = get.color(card, player);
                                            if (player.countCards('he', { color: color }) <= player.countMark('Q') || (ui.selected.cards.length && get.color(ui.selected.cards[0], player) != color)) return -1;
                                            if (
                                                lib.skill.lkfger_backup.viewAs.name == 'jiu' &&
                                                !player.countCards('h', function (cardx) {
                                                    return card != cardx && !ui.selected.cards.includes(cardx) && cardx.name == 'sha';
                                                })
                                            )
                                                return 0;
                                            return Math.min(0.01, 6 - get.value(card));
                                        },
                                        precontent() {
                                            player.addTempSkill('Q', 'roundStart');
                                            player.addMark('Q', 1, false);
                                            var cards = event.result.cards;
                                            player.discard(cards);
                                            player.draw();
                                            event.result.card = {
                                                name: event.result.card.name,
                                                nature: event.result.card.nature,
                                            };
                                            event.result.cards = [];
                                            if (event.result.card.name == 'tao') {
                                                player.addTempSkill('lkfgsi');
                                            }
                                            if (cards.length > 2) {
                                                player.addTempSkill('lkfgsj');
                                            }
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    var name = links[0][2];
                                    var nature = links[0][3];
                                    return '弃置' + get.cnNumber(player.countMark('Q') + 1) + '张牌 视为使用' + (get.translation(nature) || '') + get.translation(name);
                                },
                            },
                            ai: {
                                order(item, player) {
                                    if (_status.event.type == 'phase' && !player.countMark('Q') && player.getUseValue({ name: 'jiu' }, null, true) > 0 && player.countCards('h', 'sha')) return get.order({ name: 'jiu' }) + 1;
                                    return 1;
                                },
                                respondShan: true,
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (player.countMark('Q') >= player.countCards('he')) return false;
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        Q: {
                            intro: {
                                content: '本轮已发动过#次',
                            },
                        },
                        fglkwu: {
                            trigger: {
                                player: 'discard',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('ycglyi');
                            },
                        },
                        铸炼: {
                            enable: 'phaseUse',
                            audio: 'ext:英雄联盟/audio:1',
                            usable: 1,
                            filter(event, player) {
                                var he = player.getCards('he');
                                var num = 0;
                                for (var i = 0; i < he.length; i++) {
                                    var info = lib.card[he[i].name];
                                    if (info.type == 'equip' && !info.nomod && !info.unique && lib.inpile.includes(he[i].name)) {
                                        num++;
                                        if (num >= 2) return true;
                                    }
                                }
                            },
                            filterCard(card) {
                                if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return false;
                                var info = get.info(card);
                                return info.type == 'equip' && !info.nomod && !info.unique && lib.inpile.includes(card.name);
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
                                    if (str[str.length - 1] == '.' || str[str.length - 1] == '.') {
                                        str = str.slice(0, str.length - 1);
                                    }
                                    lib.translate[name + '_info'] = `${str};${lib.translate[cards[1].name + '_info']}`;
                                    try {
                                        game.addVideo('newcard', null, {
                                            name: name,
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
                    },
                };
                for (const i in LOLosx.character) {
                    LOLosx.character[i][4].push(`ext:英雄联盟/image/${i}.jpg`);
                }
                for (const i in LOLosx.skill) {
                    const info = LOLosx.skill[i];
                    if (!info.audio) {
                        info.audio = 'ext:英雄联盟/audio:2';
                    }
                    if (info.subSkill) {
                        for (const x in info.subSkill) {
                            const infox = info.subSkill[x];
                            if (!infox.audio) {
                                infox.audio = 'ext:英雄联盟/audio:2';
                            } //如果是choosebutton,语音应该是xxx_backup
                        }
                    }
                } //QQQ
                lib.config.all.characters.add('LOLosx');
                lib.config.characters.add('LOLosx');
                lib.translate.LOLosx_character_config = '英雄联盟';
                return LOLosx;
            });
            //卡包(手牌)
            game.import('card', function () {
                const LOLosxka = {
                    name: 'LOLosxka', //卡包命名
                    connect: true, //卡包是否可以联机
                    card: {
                        暮刃: {
                            image: 'ext:英雄联盟/image/暮刃.jpg',
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            skills: ['暮刃'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            fullimage: true,
                        },
                        窃魂卷: {
                            image: 'ext:英雄联盟/image/窃魂卷.jpg',
                            fullimage: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['窃魂'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        黑矛: {
                            image: 'ext:英雄联盟/image/黑矛.jpg',
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -2,
                            },
                            skills: ['hwmc'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            fullimage: true,
                        },
                        森然巨化: {
                            image: 'ext:英雄联盟/image/森然巨化.jpg',
                            fullimage: true,
                            type: 'equip',
                            subtype: 'equip2',
                            onEquip() {
                                player.gainMaxHp(2);
                                player.recover(2);
                            },
                            onLose() {
                                player.loseMaxHp(2);
                            },
                        },
                        虚无: {
                            image: 'ext:英雄联盟/image/虚无.jpg',
                            type: 'equip',
                            subtype: 'equip2',
                            skills: ['虚无'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            fullimage: true,
                        },
                        蓝盾: {
                            image: 'ext:英雄联盟/image/蓝盾.jpg',
                            type: 'equip',
                            subtype: 'equip2',
                            skills: ['ljkder'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            fullimage: true,
                        },
                        通碧: {
                            image: 'ext:英雄联盟/image/通碧.jpg',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -4,
                            },
                            skills: ['lv_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        断魄: {
                            image: 'ext:英雄联盟/image/断魄.jpg',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            skills: ['hs_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        荧焰: {
                            image: 'ext:英雄联盟/image/荧焰.jpg',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -2,
                            },
                            skills: ['lj_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        折镜: {
                            image: 'ext:英雄联盟/image/折镜.jpg',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            skills: ['bd_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        红线: {
                            image: 'ext:英雄联盟/image/红线.jpg',
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -3,
                            },
                            skills: ['hsxmyi'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            fullimage: true,
                        },
                        破败王者之刃: {
                            image: 'ext:英雄联盟/image/破败王者之刃.jpg',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            skills: ['pobd_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        智慧魔刃: {
                            image: 'ext:英雄联盟/image/智慧魔刃.jpg',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -2,
                            },
                            skills: ['智慧'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                    },
                    skill: {
                        暮刃: {
                            audio: 'ext:英雄联盟/audio:1',
                            trigger: {
                                global: 'loseAfter',
                            },
                            check(event, player) {
                                return get.damageEffect(event.player, player, player) > 0;
                            },
                            filter(event, player) {
                                if (event.player.countCards('h')) return false;
                                return event.hs && event.hs.length;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player, 'green');
                                lib.skill.ybni.hideCharacter(player.name1, player);
                                if (player.name2) lib.skill.ybni.hideCharacter(player.name2, player);
                                player.addTempSkill('ybni');
                            },
                        },
                        窃魂: {
                            audio: 'ext:英雄联盟/audio:4',
                            trigger: {
                                global: 'dyingBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('获得其1张牌', '摸1张牌', true).set('ai', function (event, player) { });
                                ('step 1');
                                if (result.control == '摸1张牌') {
                                    player.draw();
                                } else {
                                    player.gainPlayerCard(trigger.player, true, 'hej');
                                }
                            },
                        },
                        智慧: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    var type = get.type(card);
                                    if (type == 'trick' || type == 'delay') return true;
                                },
                            },
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', 'sha') > 0;
                            },
                            filterCard: {
                                name: 'sha',
                            },
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                                game.log(player, '将', cards, '置入了弃牌堆');
                            },
                            discard: false,
                            loseTo: 'discardPile',
                            visible: true,
                            delay: 0.5,
                            content() {
                                player.draw();
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        虚无: {
                            audio: 'ext:英雄联盟/audio:3',
                            forced: true,
                            trigger: {
                                player: 'damageBefore',
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                trigger.cancel();
                                //  player.chat('你杀不死风暴!',1);
                                ('step 2');
                                if (event.count >= player.countCards('he')) {
                                    player.discard(player.getCards('he'), true);
                                } else if (event.count < player.countCards('he')) {
                                    player.chooseToDiscard(event.count, true, 'he');
                                }
                            },
                        },
                        hsxmyi: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                //  return event.card && event.card.name=='sha'&&event.card.nature=='fire'||event.card.nature=='thunder';
                                return event.card && event.card.name == 'sha' && event.nature != undefined;
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        ljkder: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return player.countCards('hes');
                                // return event.player!=player&&player.countCards('hes');
                            },
                            content() {
                                player.chooseToDiscard(true, 'he');
                                player.draw();
                            },
                        },
                        hwmc: {
                            forced: true,
                        },
                        lv_skill: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            logTarget: 'target',
                            filter(event, player) {
                                //发动限制条件
                                return player.storage.绿 > 0; //你有'障'
                            },
                            content() {
                                'step 0';
                                player.storage.绿--;
                                ('step 1');
                                trigger.target.addTempSkill('xryy');
                                ('step 2');
                                player.addTempSkill('xryy');
                                ('step 2');
                            },
                        },
                        hs_skill: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.card) return false;
                                if (event.card.name != 'sha') return false;
                                return player.storage.红 > 0;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                // if(player.hp=player.maxHp){ player.changeHujia(1); }else
                                player.recover(1);
                                ('step 2');
                                event.count--;
                                ('step 3');
                                if (event.count > 0) event.goto(1);
                                ('step 4');
                                player.storage.红--;
                            },
                        },
                        lj_skill: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.name != 'sha' || get.mode() == 'guozhan') return false;
                                return player.storage.蓝 > 0;
                            },
                            content() {
                                player.storage.蓝--;
                            },
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name != 'sha') return;
                                    if (get.mode() == 'guozhan') return;
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    range[1] += 2;
                                },
                            },
                        },
                        bd_skill: {
                            audio: 'ext:英雄联盟/audio:3',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.name == 'bd_skill') return false;
                                if (!event.targets || !event.card) return false;
                                var type = get.type(event.card);
                                if (event.card.name != 'sha') return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number);
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (!event.targets[i].isAlive()) return false;
                                    if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                return player.storage.白 > 0;
                            },
                            content() {
                                player.storage.白--;
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number);
                                player.useCard(card, trigger.targets);
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        pobd_skill: {
                            audio: 'ext:英雄联盟/audio:2',
                            forced: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                trigger.player.loseHp(trigger.player.maxHp - trigger.player.hp);
                            },
                        },
                    }, //技能
                    translate: {
                        暮刃: '暮刃',
                        暮刃_info: '当一名角色失去最后的手牌时,你可以 隐匿.',
                        窃魂卷: '窃魂卷',
                        窃魂卷_info: '一名角色进入濒死状态时,你可以获得其一张牌或摸一张牌.',
                        智慧魔刃: '智慧魔刃',
                        智慧魔刃_info: '出牌阶段,你可以重铸杀.锁定技,你使用锦囊牌无距离限制.',
                        森然巨化: '森然巨化',
                        森然巨化_info: '锁定技,你的体力 + 2/2',
                        破败王者之刃: '破败王者之刃',
                        破败王者之刃_info: '锁定技,你使用杀造成的伤害改为:失去(其已损体力值)点体力',
                        虚无: '虚无',
                        虚无_info: '锁定技,当你受到伤害时,防止之你弃置等量的牌',
                        通碧: '通碧',
                        通碧_info: '锁定技,移去1枚绿,杀目标与你本回合手牌失效',
                        断魄: '断魄',
                        断魄_info: '锁定技,移去1枚红,杀具有吸血效果满血转护甲',
                        折镜: '折镜',
                        折镜_info: '锁定技,移去1枚白,杀结算2次',
                        荧焰: '荧焰',
                        荧焰_info: '锁定技,移去1枚蓝,杀可选1~3个目标',
                        红线: '红线',
                        红线_info: '你使用的属性杀不能被闪响应.',
                        蓝盾: '蓝盾',
                        蓝盾_info: '当你成为牌指定的目标时,你可以重铸1张牌.',
                        黑矛: '黑矛',
                        黑矛_info: '锁定技,当你使用或打出杀时,复仇之矛 摸一张牌.',
                    }, //翻译
                    list: [
                        ['club', '2', '暮刃'],
                        ['club', '2', '卡牌'],
                        ['spade', '11', '黑矛'],
                        ['diamond', '3', '智慧魔刃'],
                        ['diamond', '1', '窃魂卷'],
                        ['heart', '13', '森然巨化'],
                        ['spade', '2', '破败王者之刃'],
                        ['heart', '1', '红线'],
                        ['spade', '1', '虚无'],
                    ],
                };
                lib.translate.LOLosxka_card_config = '撸LOLosx';
                lib.config.all.cards.add('LOLosxka');
                lib.config.cards.add('LOLosxka'); //包名翻译
                return LOLosxka;
            });
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
            tianlaoling_backgroundMusic: {
                name: "<b><font color='#00f'>背景音乐",
                intro: "<b><font color='#00f'>在对局中播放选定的背景音乐<br>选定后,每局游戏开始时生效",
                init: 'hide',
                item: {
                    hide: "<b><font color='#FF0000'>关闭",
                    1: '影流',
                    2: '暗裔',
                    3: '天启',
                    4: 'O P',
                    5: '神凰',
                    6: '月石',
                    7: '哦哦哦哦哦哦',
                },
            },
            wuxing: {
                name: '<font color=#F0F>长按或右键查看说明',
                init: '4',
                intro: '...........新建文件夹',
                item: {
                    0: '说明',
                },
            },
        },
        package: {
            intro: `无名杀_英雄联盟扩展群(可加群联机)333903482<br>欢迎游玩、意见反馈`,
            author: '洛神行<br>代码:洛神行+？？？+小废物<br>潜水的火修复版<br>『无名杀扩展大全群』:771901025',
            version: '火修版',
        },
    };
});
