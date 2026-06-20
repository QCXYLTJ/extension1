'use strict';
import { game, get, lib, ui, _status, ai } from '../../../../noname.js';
import characterCitations from "../../character/citation.js";
import heroimgs from "../data/heroimg.js";
import { dust_damage, dust_hujia_damage, dust_sha } from "../data/cardAudios.js";
lib.onfree.push(() => {
    //选将语音——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    if (lib.config.extension_王者荣耀_HOKPLAYCHARACTERAUDIO) {
        _status.playChooseCharacterAudio = [];
        const playCharacterAudio = function (character) {
            if (!lib.character[character]) return false;
            const skills = lib.character[character][3];
            if (!skills.length) return false;
            return skills.randomGet();
        };
        const playChooseCharacterAudio = function () {
            const bg = document.getElementsByTagName('div');
            if (!bg?.length) return;
            for (let i = 0; i < bg.length; i++) {
                _status.playChooseCharacterAudio.addArray(bg[i].querySelectorAll('.button.character'));
            }
            if (!_status.playChooseCharacterAudio.length) return;
            _status.playChooseCharacterAudio.forEach(button => {
                if (button.onclick) return;
                button.onclick = function () {
                    if (!lib.config.auto_confirm && !this.classList.contains('selected')) return;
                    const character = button.link, skill = playCharacterAudio(character);
                    game.trySkillAudio(skill, character);
                }
            });
        };
        const chooseCharacterAudio = setInterval(() => {
            playChooseCharacterAudio();
            if (_status.gameStarted) clearInterval(chooseCharacterAudio);
        }, 1000);
    }
    //背景音乐——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    game.hokplaybgMusic = function () {
        let item = lib.config.extension_王者荣耀_HOKBGM_MUSIC;
        if (typeof item != "string") return;
        if (item == 'random') item = Object.keys(lib.config.HOKBGM_Files).slice(2).randomGet();
        ui.backgroundMusic.pause();
        if (item == 'off') {
            game.playBackgroundMusic();
            ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic);
        } else {
            if (item.startsWith('https')) ui.backgroundMusic.src = item;
            else {
                const path = `extension/王者荣耀/audio/bgm/${item}`;
                HOK.checkFileExist(path, function (e) {
                    if (e) ui.backgroundMusic.src = path;
                    else {
                        ui.backgroundMusic.src = 'https://game.gtimg.cn/images/yxzj/cp/a20240124yearlimit/public.e6e89dfe.mp3'
                    }
                });
            }
        }
    }
    if (lib.config.extension_王者荣耀_HOKBGM_MUSIC != "off") {
        game.hokplaybgMusic();
        ui.backgroundMusic.addEventListener('ended', game.hokplaybgMusic);
    }
    //引文内容
    function addStyleCenter(content) {
        let styleCenter = `<p class="champion-lines font-title-cn">“${content}”</p>`;
        return styleCenter;
    }
    //Object.assign(lib.InitFilter, { ...characterCitations })
    //武将引言和等阶
    const packs = lib.characterPack.HoK, ranks = ["junk", "rare", "epic", "legend"];
    var characterSkills = [];
    for (let i in packs) {
        if (!lib.character[i]) continue;
        //引言更改至 => lib.InitFilter
        //lib.translate[lib.character[i][3].slice(-1)[0] + "_append"] = addStyleCenter({ ...characterCitations }[i]);
        lib.InitFilter[i] = addStyleCenter({ ...characterCitations }[i]);
        lib.character[i].initFilters.add(i);
        //rank
        ranks.forEach(rank => lib.rank.rarity[rank].add(i));
        //初始化更改语音
        characterSkills.addArray(lib.characterPack.HoK[i][3]);
        for (let j of lib.characterPack.HoK[i][3]) {
            if (!lib.config.extension_王者荣耀_HOKAUDIOONLINE) break;
            var info = lib.skill[j];
            if (!info || !info.audio) continue;
            info.audio = `ext:王者荣耀/audio/|${i}|:2`;
            if (info.derivation === undefined) continue;
            var derivation = info.derivation;
            if (Array.isArray(derivation)) {
                derivation = game.expandSkills(derivation);
                for (var sk of derivation) {
                    var info2 = lib.skill[sk];
                    if (!info2) continue;
                    if (info2 && sk.includes('hok')) info2.audio = `ext:王者荣耀/audio/|${i}|:2`;
                    else if (info2) {
                        if (!info2.audioname2) info2.audioname2 = {};
                        info2.audioname2[i] = j;
                    }
                }
            }
            else {
                derivation = game.expandSkills([derivation]);
                for (var sk of derivation) {
                    var info2 = lib.skill[sk];
                    if (!info2) continue;
                    if (derivation.includes('hok')) info2.audio = 'ext:王者荣耀/audio/|' + i + '|:2';
                    else {
                        if (!info2.audioname2) info2.audioname2 = {};
                        info2.audioname2[i] = j;
                    }
                }
            }
        }
    }
    //初始化更改衍生技描述——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    for (let k of characterSkills) {
        if (lib.skill[k]) {
            var skill = lib.translate[k],
                infos = lib.skill[k],
                info = lib.translate[k + '_info'];
            if (infos && info) {
                if (infos.derivation === undefined) continue;
                var derivation = lib.skill[k].derivation;
                if (Array.isArray(derivation)) {
                    for (var l of derivation) {
                        var skill = lib.translate[l], info2 = lib.translate[l + '_info'];
                        if (skill && info2) {
                            info = info.replace(new RegExp(skill, "g"), HOK.skillTipsInfo(skill, get.plainText(skill + '：' + info2)));
                        }
                    }
                }
                else {
                    var skill = lib.translate[derivation], info2 = lib.translate[derivation + '_info'];
                    if (skill && info2) info = info.replace(new RegExp(skill, "g"), HOK.skillTipsInfo(skill, get.plainText(skill + '：' + info2)));
                }
                lib.translate[k + '_info'] = info;
            }
        }
    }
    //蓄势技描述——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    const xushiSkills = characterSkills
        .filter(skill => {
            const info = get.info(skill);
            return info && info.xushiSkill;
        });
    xushiSkills.forEach(skill => {
        const description = lib.translate[`${skill}_info`];
        lib.translate[`${skill}_info`] = description.replace(new RegExp('蓄势技', "g"), HOK.skillTagsInfo('蓄势技', lib.translate.xushiSkill_skillInfo));
    });
    //修改点燃
    /*
    const dianranSkills = [
        "hokzhoushuhuoyan", 
        "hokliuhuozhishi", "hokfenghuochibi",
        "hokmaomizhadan",
        "hokchirehuntian",
    ];
    dianranSkills.forEach(skill => {
        const description = lib.translate[`${skill}_info`];
        lib.translate[`${skill}_info`] = description.replace(new RegExp("点燃", "g"), HOK.skillTagsInfo("点燃", "点燃：指将一张游戏牌变为“被点燃的牌”。<br>被点燃的牌拥有以下效果：一名角色使用被点燃的牌时无距离和次数限制；当前回合结束时，所有角色弃置自己所有被点燃的牌。"));
    });
    */
    //快捷开关——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    if (lib.config.extension_王者荣耀_HOKSHORTCUTSWITCH != 1) {
        lib.init.css('extension/王者荣耀/css', 'switch');
        HOK.checks.push("HOKSHORTCUTSWITCH");
        ui.create.system('快捷开关', function () {
            HoKswitch.init();
        });
        let index = lib.config.extension_王者荣耀_HOKSHORTCUTSWITCH;
        if (index == 0) index = Math.floor(Math.random() * 5);
        else index = index - 2;
        let shortcutSwitch = ui.create.div('#HOKSHORTCUTSWITCH', ui.arena, function () {
            HoKswitch.init();
            if (index > 9) HOK.shortcutSwitch.classList.add("HOK_role_2025");
            else HOK.shortcutSwitch.classList.remove("HOK_role_2025");
        });
        HOK.shortcutSwitch = shortcutSwitch;
        shortcutSwitch.style.backgroundImage = `url(${heroimgs[index]})`;
        let transform = lib.config.HOKSHORTCUTSWITCH_transform;
        if (transform) {
            shortcutSwitch.style.left = transform[0];
            shortcutSwitch.style.top = transform[1];
        }
        let OW, OH, ow, oh;
        let cilentW = document.getElementById('window').clientWidth;
        let cilentH = document.getElementById('window').clientHeight;
        if (lib.config.touchscreen) {
            shortcutSwitch.addEventListener('touchstart', function (e) {
                OW = e.touches[0].clientX - shortcutSwitch.offsetLeft;
                OH = e.touches[0].clientY - shortcutSwitch.offsetTop;
                document.addEventListener('touchmove', defaultEvent, { passive: false });
            }, false)
            shortcutSwitch.addEventListener('touchmove', function (e) {
                ow = shortcutSwitch.style.left = Math.min(cilentW - shortcutSwitch.clientWidth, Math.max(-shortcutSwitch.clientWidth, parseInt(e.touches[0].clientX - OW))) + 'px';
                oh = shortcutSwitch.style.top = Math.min(cilentH - shortcutSwitch.clientHeight, Math.max(-shortcutSwitch.clientHeight, parseInt(e.touches[0].clientY - OH))) + 'px';
            }, false)
            shortcutSwitch.addEventListener('touchend', function () {
                document.removeEventListener('touchmove', defaultEvent, { passive: false });
                game.saveConfig('HOKSHORTCUTSWITCH_transform', [ow, oh]);
            })
            function defaultEvent(e) {
                e.preventDefault()
            }
        }
        else {
            shortcutSwitch.addEventListener('mousedown', function (e) {
                e.preventDefault()
                OW = e.clientX - shortcutSwitch.offsetLeft;
                OH = e.clientY - shortcutSwitch.offsetTop;
                document.addEventListener('mousemove', mousemove);
                document.addEventListener('mouseup', mouseup);
            })
            function mousemove(e) {
                ow = shortcutSwitch.style.left = Math.min(cilentW - shortcutSwitch.clientWidth, Math.max(-shortcutSwitch.clientWidth, parseInt(e.clientX - OW))) + 'px';
                oh = shortcutSwitch.style.top = Math.min(cilentH - shortcutSwitch.clientHeight, Math.max(-shortcutSwitch.clientHeight, parseInt(e.clientY - OH))) + 'px';
            }
            function mouseup() {
                document.removeEventListener('mousemove', mousemove);
                document.removeEventListener('mouseup', mouseup);
                game.saveConfig('HOKSHORTCUTSWITCH_transform', [ow, oh]);
            }
        }
    }
    //英盗土【杀】及摧毁，简单做下适配，有时间改——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    game.addNature('dust', '土', {
        audio: {
            damage: {
                dust: dust_damage,
            },
            hujia_damage: {
                dust: dust_hujia_damage,
            },
            sha: {
                dust: "normal",
            }
        },
        linked: true,
        order: 66,
        lineColor: '#692e17',
        color: '#692e17',
        background: 'extension/王者荣耀/image/card/dustsha.png',
    })
    lib.nature.set('dust', 66);
    lib.linked.add('dust');
    lib.card.sha.nature.add('dust');
    lib.translate._dustsha_skill = '土杀';
    lib.translate._dustsha_skill_info = '当你对目标角色造成土尘伤害时，你可以防止此伤害并摧毁其装备区里的一张牌。';
});//QQQ
lib.onover.push(function (ret) {
    get.nameList(game.me)
        .forEach(name => game.HoKrecordGameOver(name, ret, game.me))
});
