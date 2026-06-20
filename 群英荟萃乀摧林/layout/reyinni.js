'use strict';
qyhcCL.arenaReady.push((lib, game, ui, get, ai, _status, config) => {
    qyhcCL.dynamicZhuanhuan = function (player, skill) {
        var trans = lib.translate[skill + '_info'];
        if (player.storage[skill] % 2) {
            trans = trans.replace(/〖阳〗/g, '<span class=bluetext>〖阳〗');
            var len1 = (trans.match(/→/g) || []).length, len2 = (trans.match(/〖阳〗/g) || []).length;
            trans = trans.replace(/→/g, '</span>→');
            if (len1 < len2) trans = trans.slice(0, -1) + '</span>.';
            return trans;
        }
        trans = trans.replace(/〖阴〗/g, '<span class=bluetext>〖阴〗');
        trans = trans.replace(/;〖阳〗/g, '</span>;〖阳〗');
        return trans;
    }
    if (['half', 'all'].includes(config.reyinni)) {
        lib.element.player.init_cl = lib.element.player.init;
        lib.element.player.init = function () {
            var temp = this.init_cl.apply(this, arguments);
            if (temp && temp.name == 'unknown') temp.group = 'unknown';
            return temp;
        }
        lib.translate.unknown = '隐匿';
        var jinMap = ['simashi', 'sp_simazhao', 'ns_simazhao', 'simazhao', 'pk_sp_duyu', 'sp_duyu', 'peixiu', 'ns_yanghu', 'sp_yanghu', 'dc_yanghu', 'old_yanghuiyu', 'sp_wangyuanji', 'yanghuiyu', 'wangyuanji', 'wangjun', '$licaiwei', 'wenyang', '$weizi', 'clan_zhongyu', 'clan_wanglun', '$zhujianping', '@xugong', '@re_xugong', 'dc_jiachong'];
        var jinMap2 = {};
        for (var i of jinMap) jinMap2[i] = true;
        for (var x of jinMap) {
            if (x[0] == '$') var name = x.slice(1), shili = 'wei'; else if (x[0] == '@') var name = x.slice(1), shili = 'qun'; else var name = x.slice(0);
            if (!lib.character[name] || !lib.character[name][1]) continue;
            lib.character[name][1] = shili || 'jin';
        }
        for (var i in lib.characterPack)
            for (var j in lib.characterPack[i]) {
                if (!lib.characterPack[i] || !lib.characterPack[i][j] || !lib.characterPack[i][j][1]) continue;
                if (jinMap2[j]) lib.characterPack[i][j][1] = 'jin';
                if (jinMap2['$' + j]) lib.characterPack[i][j][1] = 'wei';
            }
    }
    if (config.reyinni == 'all') {
        lib.group.push('han');
        lib.translate.han = '汉';
        lib.translate.han2 = '汉朝';
        lib.groupnature.han = 'fire';
        lib.translate.hanColor = '#b14231';
        if (qyhcCL.beMaking) lib.characterDialogGroup = {
            收藏(name, capt) {
                return lib.config.favouriteCharacter.includes(name) ? capt : null;
            },
            最近(name, capt) {
                var list = get.config('recentCharacter') || [];
                return list.includes(name) ? capt : null;
            },
            '<span style=\"color: #00ADE7\">♂</span>'(i, capt) {
                if (lib.character[i] && lib.character[i][0] == 'male') return capt;
                return null;
            },
            '<span style=\"color: #E56587\">♀</span>'(i, capt) {
                if (lib.character[i] && lib.character[i][0] == 'female') return capt;
                return null;
            },
            主公(i, capt) {
                if (lib.character[i] && Array.isArray(lib.character[i][4]) && lib.character[i][4].includes('zhu')) return capt;
                return null;
            },
            新将(i, capt) {
                var arr = '鲍信、成济成倅、董昭、贾充、吴班、蒯祺、来敏、李遗、马伶俐、刘伶、哪吒、费祎、小乔、卢植、袁术、孙桓、孙瑜、诸葛若雪、神华佗、蔡邕、庞山明、孙綝、袁胤、向朗、张梁、司马朗、诸葛诞、曹叡、黄月英、诸葛亮、刘焉、刘备、夏侯子萼、夏侯惇、张葳、曹轶、田尚衣'.split('、');
                if (arr.includes(get.colorful(get.translation(i), '#', i))) return capt;
                return null;
            }
        };
        var hanMap = ['bol_liuxie', 'QUN_liuxie', 'sp_liuxie', 'liuxie', 'liubian', 'old_huangfusong', 'sp_huangfusong', 'huangfusong', 'yl_luzhi', 'tw_yl_luzhi', 'sp_zhujun', 'ol_zhujun', 'zhujun', 'old_sp_zhujun', 'hetaihou', 'decade_hetaihou', 'QUN_fuhuanghou', 'old_fuhuanghou', 're_fuhuanghou', 'fuhuanghou', 'xin_fuhuanghou', 'sp_fuhuanghou', 'tangji', 'tw_fuwan', 'fuwan', 'sp_fuwan', 'dc_fuwan', 'dongcheng', 're_dongcheng', 'ol_wangrong', 'wangrong', 'bilibili_hejin', 'tw_hejin', 'hejin', 're_hejin', 'bilibili_zhangrang', 'ol_zhangrang', 'zhangrang', 'junk_zhangrang', 'old_wangyun', 'pe_wangyun', 'ns_wangyun', 're_wangyun', 'wangyun', 'dc_wangyun', 'clan_wangyun', 're_caiyong', 'caiyong', 'QH_jianshuo', 'tw_jianshuo', 'bol_liuyao', 'liuyao', 'bol_liuyu', 'ol_liuyu', 'liuyu', 'dc_liuyu', 'sp_jiben', 'dc_jiben', 'cike_lingju', 'old_lingju', 'lingju', 'diy_liuhong', 'tw_liuhong', 'liuhong', 'QH_caojie', 'caojie', 'yangbiao', 'dc_yangbiao', 'xin_mamidi', 'mamidi', 'zhaozhong', 'wanniangongzhu', 'sp_kongrong', 'old_sp_kongrong', 'qyhc_kongrongcl', 'kongrong', 'qyhc_xushao', 'QUN_xushao', 'xushao', 'old_xushao', 'tw_caocao', 'liuhui', 'clan_xunshu', 'old_zu_xunshu', 'zhangling', 'ol_chendeng', 'chengui', 'fengfang', 'mushun', 'caoxiancaohua', 'clan_hanrong', 'clan_hanshao', 'zhengxuan', 'dongguiren', 'jsrg_caocao', 'jsrg_hejin', 'jsrg_huangfusong', 'jsrg_kongrong', 'jsrg_liubei', 'jsrg_liuhong', 'jsrg_wangyun', 'jsrg_xushao', 'jsrg_zhujun', 'jsrg_sunjian', 'jsrg_yangbiao', 'jsrg_qiaoxuan', "caohua", "xia_wangyue", "tw_bingyuan", 'luyi', 'qyhc_caiyan', 'duanjiong', 'qyhc_kongrong', 'decade_lingju'];
        var hanMap2 = {};
        for (var i of hanMap) hanMap2[i] = true;
        for (var x of hanMap) {
            if (!lib.character[x] || !lib.character[x][1]) continue;
            lib.character[x][1] = 'han';
        }
        for (var i in lib.characterPack)
            for (var j in lib.characterPack[i]) {
                if (!lib.characterPack[i] || !lib.characterPack[i][j] || !lib.characterPack[i][j][1]) continue;
                if (!hanMap2[j]) continue;
                lib.characterPack[i][j][1] = 'han';
            }
    }
    var dyna = {
        clwt_sankuang(player) {
            var boolA = player.storage.clwt_sankuang_Achoice;
            var boolB = player.storage.clwt_sankuang_Bchoice;
            var boolC = player.storage.clwt_sankuang_Cchoice;
            if (boolA && boolB && boolC) return lib.translate.clwt_sankuang_info;
            if (!boolA && !boolB && !boolC) return "锁定技,每轮你首次使用结算结束一种类别的牌后,<span class=OPtext><span class=redtext>你选择一项:1.</span></span>若之实体牌全部在处理区或你的装备区,你令一名其他角色获得这些牌<span class=OPtext><span class=redtext>;2.若以下三项均未被移除,你令一名其他角色交给你至少X张牌(X为其以下项中的最小值且至多为3:1.场上牌数;2.已损失体力值;3.体力值与手牌数之差)</span></span>.";
            var str = "锁定技,每轮你首次使用结算结束一种类别的牌后,你选择一项:1.若之实体牌全部在处理区或你的装备区,你令一名其他角色获得这些牌;2.若以下三项均未被移除,你令一名其他角色交给你至少X张牌(X为其以下项中的最小值且至多为3:";
            var strA = boolA ? "1.场上牌数" : "<span class=OPtext><span class=redtext>1.场上牌数</span></span>";
            var strB = boolB ? "2.已损失体力值" : "<span class=OPtext><span class=redtext>2.已损失体力值</span></span>";
            var strC = boolC ? "3.体力值与手牌数之差" : "<span class=OPtext><span class=redtext>3.体力值与手牌数之差</span></span>";
            if (boolA || boolB || boolC) {
                var str1 = boolA ? ";" : "<span class=OPtext><span class=redtext>;</span></span>";
                var str2 = boolB && boolC ? ";" : "<span class=OPtext><span class=redtext>;</span></span>";
            } else {
                var str1 = "<span class=OPtext><span class=redtext>;</span></span>";
                var str2 = "<span class=OPtext><span class=redtext>;</span></span>";
            }
            return str + strA + str1 + strB + str2 + strC + ".)";
        },
        clwt_geyuan(player) {
            if (player.storage.clwt_geyuan_gai) return lib.translate.clwt_geyuangai_info;
            else return lib.translate.clwt_geyuan_info;
        },
        clwt_funan(player) {
            var bool = player.getCountNum('clwt_funan');
            if (player.beOn()) {
                if (bool) return '倾向技,<span class=Optext><span class=redtext>每回合限一次,你的回合</span>:〖阴〗<span class=redtext>内,你使用的牌置入弃牌堆时,你可令一名其他角色获得之,若其未响应之,你</span>;〖阳〗外,目标含你的牌置入弃牌堆时,你可获得之,若你响应之,你可令一名其他角色→<span class=redtext>获得仍在弃牌堆中一张因响应此牌而使用或打出的牌</span></span>.';
                return "倾向技,每回合限一次,你的回合<span class=Optext>:〖阴〗</span>内,你使用的牌置入弃牌堆时,你可令一名其他角色获得之,若其未响应之,你<span class=Optext>;〖阳〗外,目标含你的牌置入弃牌堆时,你可获得之,若你响应之,你可令一名其他角色→</span>获得仍在弃牌堆中一张因响应此牌而使用或打出的牌.";
            }
            if (bool) return '倾向技,<span class=Optext><span class=redtext>每回合限一次,你的回合</span>:〖阴〗内,你使用的牌置入弃牌堆时,你可令一名其他角色获得之,若其未响应之,你;〖阳〗<span class=redtext>外,目标含你的牌置入弃牌堆时,你可获得之,若你响应之,你可令一名其他角色</span>→<span class=redtext>获得仍在弃牌堆中一张因响应此牌而使用或打出的牌</span></span>.';
            return '倾向技,每回合限一次,你的回合<span class=Optext>:〖阴〗内,你使用的牌置入弃牌堆时,你可令一名其他角色获得之,若其未响应之,你;〖阳〗</span>外,目标含你的牌置入弃牌堆时,你可获得之,若你响应之,你可令一名其他角色<span class=Optext>→</span>获得仍在弃牌堆中一张因响应此牌而使用或打出的牌.';
        },
        cljg_yeyan(player) {
            var num = player.storage.cljg_yeyan;
            if (num === undefined) num = 3;
            num = +num || 0;
            return lib.translate.cljg_yeyan_info.replace('<span class=firetext>3</span>', '<span class=firetext>' + num + '</span>');
        },
        cljg_yege(player) {
            var num = player.storage.cljg_yege;
            if (num === undefined) num = 3;
            num = +num || 0;
            return lib.translate.cljg_yege_info.replace('<span class=greentext>3</span>', '<span class=greentext>' + num + '</span>');
        },
        cljg_xihun(player) {
            var num = player.storage.cljg_xihun;
            if (num === undefined) num = 3;
            num = +num || 0;
            return lib.translate.cljg_xihun_info.replace('<span class=bluetext>3</span>', '<span class=bluetext>' + num + '</span>');
        },
        qyhc_poli: qyhcCL.dynamicZhuanhuan,
        qyhc_chigang: qyhcCL.dynamicZhuanhuan,
        qyhc_yuedan: qyhcCL.dynamicZhuanhuan,
        qyhc_tongye: qyhcCL.dynamicZhuanhuan,
        qyhc_zhonghe: qyhcCL.dynamicZhuanhuan
    }
    if (config.clwt_corret) {
        var map = ['nzry_chenglve', 'clanlianzhu', 'nzry_longnu', 'jsrgshichong', 'nzry_shenshi', 'nzry_zhenliang', 'nzry_juzhan', 'twfeifu', 'twzhenliang', 'youlong', 'olfeibai', 'olmiuyan', 'bazhan', 'piaoping', 'dckaiji', 'dcshoutan', 'dcdouzhen', 'spshidi', 'clanjiexuan', 'clanguangu', 'olsaogu'];
        for (var i of map) dyna[i] = qyhcCL.dynamicZhuanhuan;
        dyna.caiyi = function (player) {
            var current = player.storage.caiyi, list = player.storage.caiyi_info || [[], []];
            var str = '转换技,结束阶段,你可以令一名角色选择一项,且你于其执行此项前移除该项:';
            var list1 = ['1.回复X点体力', '2.摸X张牌', '3.复原', '4.随机执行一个你已移除的阴选项'], list2 = ['1.受到你造成的X点伤害', '2.若有能弃置的牌,将手牌弃至零张(至多弃X张)', '3.翻面且横置', '4.随机执行一个你已移除的阳选项'], str1 = '〖阴〗', str2 = '〖阳〗', bool1 = [], bool2 = [];
            for (var i = 0; i < 4; i++) {
                if (list[0].includes(i)) if (i < 3) bool1[i] = true;
                else for (var j = 2; j >= 0; j--) if (!bool1[j]) { bool1[j] = true; break; }
                if (list[1].includes(i)) if (i < 3) bool2[i] = true;
                else for (var j = 2; j >= 0; j--) if (!bool2[j]) { bool2[j] = true; break; }
            }
            for (var i = 0; i < 4; i++) {
                var clip1 = list1[i], clip2 = list2[i];
                if (list[0].includes(i)) {
                    clip1 = '<span style="text-decoration:line-through;">' + clip1;
                    if (i < 3) if (bool1[i]) clip1 += ';</span>'; else clip1 += '</span>;';
                    else clip1 += '</span>';
                } else if (i < 3) if (bool1[i]) clip1 += '<span style="text-decoration:line-through;">;</span>'; else clip1 += ';';
                if (list[1].includes(i)) {
                    clip2 = '<span style="text-decoration:line-through;">' + clip2;
                    if (i < 3) if (bool2[i]) clip2 += ';</span>'; else clip2 += '</span>;';
                    else clip2 += '</span>';
                } else if (i < 3) if (bool2[i]) clip2 += '<span style="text-decoration:line-through;">;</span>'; else clip2 += ';';
                str1 += clip1;
                str2 += clip2;
            }
            str1 += '(X为剩余的阴选项数量)', str2 += '(X为剩余的阳选项数量)';
            if (current) str2 = '<span class="bluetext">' + str2 + '</span>';
            else str1 = '<span class="bluetext">' + str1 + '</span>';
            return str + str1 + ';' + str2 + '.';
        }
    }
    for (var i in dyna) lib.dynamicTranslate[i] = dyna[i];
    lib.animate.skill.lengyanju = function () {
        this.popup('冷艳锯');
        this.logSkill_qyhccl('qinglong_skill', false);
    };
    lib.animate.skill.chixueqingfeng_skill = function () {
        this.popup('赤血青锋');
        this.logSkill_qyhccl('qinggang_skill', false);
    };
    lib.animate.skill.yitianjian = function () {
        this.popup('倚天剑');
        this.logSkill_qyhccl('qinggang_skill', false);
    };
    lib.animate.skill.longfenghemingjian = function () {
        this.popup('鸾凤和鸣剑');
        this.logSkill_qyhccl('cixiong_skill', false);
    };
    lib.animate.skill.quehuagong_lose = function () {
        this.popup('鹊画弓');
        this.logSkill_qyhccl('qilin_skill', false);
    };
    lib.animate.skill.quehuagong_lose_equip = lib.animate.skill.quehuagong_lose;
    lib.animate.skill.clnvzhuang = function () {
        this.popup('女装');
        this.logSkill_qyhccl('nvzhuang', false);
    };
    lib.animate.skill.clnvzhuang_equip = lib.animate.skill.clnvzhuang;
    lib.animate.skill.clnvzhuang_lose = lib.animate.skill.clnvzhuang;
    if (lib.animate.skill.baiyin_skill) lib.animate.skill.baiyin_skill_lose = function () {
        this.logSkill_qyhccl('baiyin_skill', false);
    }
    lib.animate.skill.feilongduofeng3 = function () {
        this.popup('飞龙夺凤');
        this.logSkill_qyhccl('cixiong_skill', false);
    };
    lib.animate.skill.feilongduofeng = lib.animate.skill.feilongduofeng3;
    lib.animate.skill.yinyueqiang = function () {
        this.popup('银月枪');
        this.logSkill_qyhccl('yajiaoqiang_skill', false);
    };
    lib.animate.skill.bintieshuangji_skill = function () {
        this.popup('镔铁双戟');
        this.logSkill_qyhccl('fangtian_skill', false);
    };
    lib.animate.skill.zhungangshuo = function () {
        this.popup('衠钢槊');
        this.logSkill_qyhccl('fangtian_skill', false);
    };
    if (config.clwt_mizhi_card == 'guandu') lib.animate.card.nanman = function () { };
    return [lib, game, ui, get, ai, _status];
});