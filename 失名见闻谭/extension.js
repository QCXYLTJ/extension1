import { lib, game, ui, get, ai, _status } from '../../noname.js';
//—————————————————————————————————————————————————————————————————————————————镇压清瑶
const sha = function () {
    if (lib.version.includes('β')) {
        localStorage.clear();
        if (indexedDB) {
            indexedDB.deleteDatabase('noname_0.9_data');
        }
        game.reload();
        throw new Error();
    }
    if (Array.isArray(lib.config.extensions)) {
        for (const i of lib.config.extensions) {
            if (['假装无敌', '取消弹窗报错'].includes(i)) {
                game.removeExtension(i);
            }
        }
    }
    if (!lib.config.dev) {
        game.saveConfig('dev', true);
    }
    Reflect.defineProperty(lib.config, 'dev', {
        get() {
            return true;
        },
        set() { },
    });
    if (lib.config.extension_alert) {
        game.saveConfig('extension_alert', false);
    }
    Reflect.defineProperty(lib.config, 'extension_alert', {
        get() {
            return false;
        },
        set() { },
    });
    if (lib.config.compatiblemode) {
        game.saveConfig('compatiblemode', false);
    }
    Reflect.defineProperty(_status, 'withError', {
        get() {
            if (game.players.some((q) => q.name == 'HL_许劭')) return true;
            return false;
        },
        set() { },
    });
    const originalonerror = window.onerror;
    Reflect.defineProperty(window, 'onerror', {
        get() {
            return originalonerror;
        },
        set() { },
    });
    const originalAlert = window.alert;
    Reflect.defineProperty(window, 'alert', {
        get() {
            return originalAlert;
        },
        set() { },
    });
};
sha();
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '失名见闻谭',
        content(config, pack) {
            // ---------------------------------------势力------------------------------------------//
            var style1 = document.createElement('style');
            style1.innerHTML = ".player .identity[data-color='smzs_z_hsty'],";
            style1.innerHTML += "div[data-nature='smzs_z_hsty'],";
            style1.innerHTML += "span[data-nature='smzs_z_hsty'] {animation:change 10s linear 0s infinite;}@keyframes change{0% {color: #99FF99;}25%{color: #C6A354;}50%{color: #FF3300;}75%{color: #C6A354;}100% {color: #99FF99;}}";
            document.head.appendChild(style1);
            lib.group.add('smzs_z_hsty');
            lib.translate.smzs_z_hsty = '赫斯缇雅·眷族';
            lib.groupnature.smzs_z_hsty = 'smzs_z_hsty';
            //lib.translate.smzs_z_hstyColor="#FF34B3";
            lib.group.add('smzs_z_rz');
            lib.translate.smzs_z_rz = '忍者';
            lib.groupnature.smzs_z_rz = 'smzs_z_rz';
            //lib.translate.smzs_z_rzColor="#FF0000";
            lib.group.add('smzs_z_ayd');
            lib.translate.smzs_z_ayd = '暗影岛';
            lib.groupnature.smzs_z_ayd = 'smzs_z_ayd';
            //lib.translate.smzs_z_aydColor="#C0C0C0";
            lib.group.add('smzs_z_bejwt');
            lib.translate.smzs_z_bejwt = '比尔吉沃特';
            lib.groupnature.smzs_z_bejwt = 'smzs_z_bejwt';
            //lib.translate.smzs_z_bejwtColor="#FF7F00";
            lib.group.add('smzs_z_ry');
            lib.translate.smzs_z_ry = '王者荣耀';
            lib.groupnature.smzs_z_ry = 'smzs_z_ry';
            //lib.translate.smzs_z_ryColor="#8C7853";
            lib.group.add('smzs_z_yys');
            lib.translate.smzs_z_yys = '阴阳师';
            lib.groupnature.smzs_z_yys = 'smzs_z_yys';
            //lib.translate.smzs_z_yysdColor="#4D4DFF";
            lib.group.add('smzs_z_lkss');
            lib.translate.smzs_z_lkss = '诺克萨斯';
            lib.groupnature.smzs_z_lkss = 'smzs_z_lkss';
            //lib.translate.smzs_z_lkssColor="#4D4DFF";
            var style8 = document.createElement('style');
            style8.innerHTML = ".player .identity[data-color='smzs_z_clksdysjsh'],";
            style8.innerHTML += "div[data-nature='smzs_z_clksdysjsh'],";
            style8.innerHTML += "span[data-nature='smzs_z_clksdysjsh'] {text-shadow: black 0 0 1px,rgba(0, 205, 0,1) 0 0 2px,rgba(0, 205, 0,1) 0 0 5px,rgba(0, 205, 0,1) 0 0 10px,rgba(0, 205, 0,1) 0 0 10px}";
            document.head.appendChild(style8);
            lib.group.add('smzs_z_clksdysjsh');
            lib.translate.smzs_z_clksdysjsh = '从零开始的异世界生活';
            lib.groupnature.smzs_z_clksdysjsh = 'smzs_z_clksdysjsh';
            var style9 = document.createElement('style');
            style9.innerHTML = ".player .identity[data-color='smzs_z_mhxy'],";
            style9.innerHTML += "div[data-nature='smzs_z_mhxy'],";
            style9.innerHTML += "span[data-nature='smzs_z_mhxy'] {text-shadow: black 0 0 1px,rgba(0, 205, 0,1) 0 0 2px,rgba(0, 205, 0,1) 0 0 5px,rgba(0, 205, 0,1) 0 0 10px,rgba(0, 205, 0,1) 0 0 10px}";
            document.head.appendChild(style9);
            lib.group.add('smzs_z_mhxy');
            lib.translate.smzs_z_mhxy = '梦幻西游';
            lib.groupnature.smzs_z_mhxy = 'smzs_z_mhxy';
            // ----------------------------------------音效前置-------------------------------------------//
            //音效//
            game.playsmzs = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/失名见闻谭/audio', fn);
                }
            };
            // ----------------------------------------音效-------------------------------------------//
            //阵亡配音//
            lib.skill._smzszwyx = {
                trigger: { player: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/失名见闻谭/audio', player.name);
                },
            };
            //击杀音效//
            if (config.smzs_jsyinxiao) {
                lib.skill._smzs_jisha = {
                    trigger: {
                        source: 'dieBegin',
                    },
                    forced: true,
                    _priority: 2020,
                    content() {
                        player.storage.smzs_jisha = player.storage.smzs_jisha + 1 || 1;
                        if (player.storage.smzs_jisha == 1) {
                            player.$fullscreenpop('第一滴血', 'fire');
                            game.playsmzs('smzs_1sha');
                        }
                        if (player.storage.smzs_jisha == 2) {
                            player.$fullscreenpop('双杀', 'water');
                            game.playsmzs('smzs_2sha');
                        }
                        if (player.storage.smzs_jisha == 3) {
                            player.$fullscreenpop('三杀', 'thunder');
                            game.playsmzs('smzs_3sha');
                        }
                        if (player.storage.smzs_jisha == 4) {
                            player.$fullscreenpop('四杀', 'fire');
                            game.playsmzs('smzs_4sha');
                        }
                        if (player.storage.smzs_jisha == 5) {
                            player.$fullscreenpop('五杀', 'water');
                            game.playsmzs('smzs_5sha');
                        }
                        if (player.storage.smzs_jisha == 6) {
                            player.$fullscreenpop('六杀', 'thunder');
                            game.playsmzs('smzs_6sha');
                        }
                        if (player.storage.smzs_jisha == 7) {
                            player.$fullscreenpop('一战成名', 'fire');
                            game.playsmzs('smzs_7sha');
                        }
                        if (player.storage.smzs_jisha == 8) {
                            player.$fullscreenpop('无坚不摧', 'water');
                            game.playsmzs('smzs_8sha');
                        }
                        if (player.storage.smzs_jisha == 9) {
                            player.$fullscreenpop('无人能挡', 'thunder');
                            game.playsmzs('smzs_9sha');
                        }
                        if (player.storage.smzs_jisha == 10) {
                            player.$fullscreenpop('横扫千军', 'fire');
                            game.playsmzs('smzs_10sha');
                        }
                        if (player.storage.smzs_jisha == 11) {
                            player.$fullscreenpop('天下无双', 'water');
                            game.playsmzs('smzs_11sha');
                        }
                        if (player.storage.smzs_jisha == 12) {
                            player.$fullscreenpop('无双  万军取首', 'thunder');
                            game.playsmzs('smzs_12sha');
                        }
                        if (player.storage.smzs_jisha == 13) {
                            player.$fullscreenpop('至于你信不信,反正我是信了', 'fire');
                            game.playsmzs('smzs_13sha');
                        }
                        if (player.storage.smzs_jisha == 14) {
                            player.$fullscreenpop('nice,你们都是小菜一碟', 'water');
                            game.playsmzs('smzs_14sha');
                        }
                        if (player.storage.smzs_jisha == 15) {
                            player.$fullscreenpop('其实我是杀神他爸', 'thunder');
                            game.playsmzs('smzs_15sha');
                        }
                        if (player.storage.smzs_jisha == 16) {
                            player.$fullscreenpop('哎~人生最大的悲哀就是莫有了对手', 'fire');
                            game.playsmzs('smzs_16sha');
                        }
                    },
                };
            }
            //-----------------------------------------特效----------------------------------------//
            //游戏开始//
            if (config.smzs_ksyinxiao) {
                lib.skill._smzs_ksyinxiao = {
                    trigger: {
                        global: 'gameDrawBegin',
                    },
                    forced: true,
                    content() {
                        game.playsmzs('smzs_ksyinxiao');
                    },
                };
            }
        },
        precontent(smzs) {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '失名见闻谭',
                    connect: true,
                    characterSort: {
                        失名见闻谭: {
                            smzs_zdxcxhsfgclsm: ['smzs_bekln', 'smzs_lla'],
                            smzs_yys: ['smzs_lycj', 'smzs_sl', 'smzs_gtw', 'smzs_hczz', 'smzs_ydj'],
                            smzs_hyrz: ['smzs_qmkkx', 'smzs_swkkx', 'smzs_qszj'],
                            smzs_wzry: ['smzs_cszf', 'smzs_zy'],
                            smzs_ayd: ['smzs_kess'],
                            smzs_bejwt: ['smzs_eyxj'],
                            smzs_lkss: ['smzs_dles'],
                            smzs_clksdysjsh: ['smzs_lm'],
                            smzs_mhxy: ['smzs_jxk'],
                        },
                    },
                    dynamicTranslate: {},
                    character: {
                        smzs_lycj: ['female', 'smzs_z_yys', 4, ['smzs_lycj_yd', 'smzs_lycj_yhzy', 'smzs_lycj_cywyql'], ['des:来自阴阳师.曾经被称为<曜姬>的少女,如今却隐于夜幕之下.她昔日视为神明的女王,已失去了太阳的辉光.']],
                        smzs_kess: ['none', 'smzs_z_ayd', 1, ['smzs_kess_sc', 'smzs_kess_xs', 'smzs_kess_ga', 'smzs_kess_lt', 'smzs_kess_sjglz'], ['des:卡尔萨斯是湮灭的使者,狂热地投入到死亡的美丽与清晰中.在他年轻时,他就完全沉迷于死亡中,并在追求他的黑暗欲望时变得越来越无情.渴望着成为死亡本身的卡尔萨斯前往暗影岛,并欣然将自己献身于亡灵.卡尔萨斯转变成了死亡颂唱者,一个世间仅存并可怕巫妖,派发着受湮灭祝福的礼物.']],
                        smzs_qmkkx: ['male', 'smzs_z_rz', 4, ['smzs_qmkkx_xly', 'smzs_qmkkx_qns', 'smzs_qmkkx_fss'], ['des:火之国木叶隐村的精英上忍,原木叶暗部成员,四代目火影波风水门的弟子,第七班队长,漩涡鸣人、宇智波佐助、春野樱的老师.年仅12岁就成为上忍的天才忍者,后左眼移植宇智波带土的写轮眼,因使用写轮眼复制了上千种忍术而被称为<拷贝忍者>、<写轮眼卡卡西>,其名号响彻各国.']],
                        smzs_bekln: ['male', 'smzs_z_hsty', 3, ['smzs_bekln_jscz', 'smzs_bekln_hyft', 'smzs_bekln_yxyw'], ['des:成长速度令人惊叹,在多次冒险中屡屡引发奇迹,是个超级新人(潜力除魔力S级以及敏捷SSS外,其他数值全部达到了SS级,仅仅花一个多月就升到二级,花一个月升到三级,两个月升到四级.目前赫斯提亚说感觉似乎随时可以升级lv5).他的才能与容易亲近的天性早已逐渐吸引了许多女性角色,不过本人却完全没知觉.']],
                        smzs_cszf: ['male', 'smzs_z_ry', 4, ['smzs_cszf_haqn', 'smzs_cszf_hdwl', 'smzs_cszf_ksxx', 'smzs_cszf_shjg'], ['des:历史原型张飞,字翼德,三国时蜀汉的名将.他跟关羽一道,是刘备起家的班底成员.以勇力闻名,冲锋陷阵,总在头里.据<三国志>记载,他仅仅凭几十骑,就敢拒敌于长坂坡.跟关羽一样,有万人敌的美名.在<三国演义>中,他是一个敢爱敢恨、嫉恶如仇的角色,善待士大夫,但不爱惜士卒.最后转生至王者峡谷']],
                        smzs_eyxj: ['female', 'smzs_z_bejwt', 3, ['smzs_eyxj_eydjg', 'smzs_eyxj_yjsd', 'smzs_eyxj_dblx'], ['des:以美貌闻名,但却以无情立命的莎拉是一位比尔吉沃特的船长,她在这座港镇的强硬犯罪集团中塑造了不容轻视的形象.在她还是个孩子的时候,亲眼目睹了海盗之王普朗克谋杀了自己的家人.多年以后她残忍地报仇雪恨,把他和他的旗舰连人带船一同炸飞.所有低估她的人都会发现,自己面对的是一个极具欺骗性的狡黠对手,还有可能要处理肚子里的一两颗子弹.']],
                        smzs_swkkx: ['male', 'smzs_z_rz', 3, ['smzs_swkkx_zysw', 'smzs_swkkx_sysw', 'smzs_swkkx_xznh'], ['des:写轮眼进化的至高境界,通过至亲之人的死来刺激产生极大的负面情绪而开启.眼睛的图案会有所改变.这种写轮眼的瞳力会在普通写轮眼之上,不但原本写轮眼的复制、催眠、观察等能力会提升至最强,而且寄宿着特有的强大瞳术,其瞳术会按照原拥有者擅长的领域开发.但使用时带有很大的风险和副作用,使用过多还会导致失明.万花筒写轮眼开眼时间:琳撞向卡卡西的千鸟自杀后,和带土同时开启.']],
                        smzs_sl: ['female', 'smzs_z_yys', 3, ['smzs_sl_xzjn', 'smzs_sl_thsh'], ['des:善良而沉默的神秘少女,失忆后便跟随在晴明身边,拥有敏锐的直觉和强大的通灵能力,以及不为人知的过去.']],
                        smzs_lla: ['female', 'qun', 3, ['smzs_lla_mdjllg', 'smzs_lla_yjxc', 'smzs_lla_jffx', 'smzs_lla_gmzf'], ['des:為人正直,雖然外表是個冰美人,但說話時很溫柔,只要是遇到同伴的事,都會很關心並且很拚命.<br> 曾經是冒險者,隸屬阿斯特莉亞眷族.眷族被陷害導致眷族成員遭覆,幫眷族的成員復仇後而成為公會的黑名單,<br> 隱姓埋名,不喜歡提及過去.<br> 5年前就已經達到了Lv.4,這之後就沒有再更新過能力值,其實力和技巧被稱作Lv.4的最高峰.<br> 由於是精靈,因此<只讓認同對象觸碰自身肌膚>.貝爾是第三位第一次握住自己的手,自己卻沒有甩開的人.順帶一提,第一位是邀請自己加入【眷族】的開朗少女冒險者,第二位是希兒.<br> 擁有高難度的的並行詠唱技術,能同時進行攻擊、移動、迴避、詠唱四個動作,']],
                        smzs_gtw: ['male', 'smzs_z_yys', 3, ['smzs_gtw_jz', 'smzs_gtw_cygy', 'smzs_gtw_lhks', 'smzs_gtw_xlhs', 'smzs_gtw_yn'], ['des:半人半鬼的少年,残忍又狡猾、偏执又狠厉.曾被人类阴阳师贺茂忠行领养过,但因恶的本性难移,最终被流放至恶鬼厮杀的修罗鬼道.']],
                        smzs_dles: ['male', 'smzs_z_lkss', 4, ['smzs_dles_xn', 'smzs_dles_dssf', 'smzs_dles_zcdj', 'smzs_dles_lkssdtt'], ['des:4']],
                        smzs_qszj: ['male', 'smzs_z_rz', 4, ['smzs_qszj_ckl', 'smzs_qszj_xrms', 'smzs_qszj_gl', 'smzs_qszj_mdms_sjjd', 'smzs_qszj_md_hsjjl', 'smzs_qszj_md_mlzs', 'smzs_qszj_xs_msm', 'smzs_qszj_xf_md_zsqs', 'smzs_qszj_dshf'], ['des:他是宇智波斑唯一敬畏的忍者,与宇智波斑一同被称为<传说中的忍者>.被忍界誉为<忍者之神>.']],
                        smzs_zy: ['male', 'smzs_z_ry', 4, ['smzs_zy_lm', 'smzs_zy_jlzl', 'smzs_zy_pyzl', 'smzs_zy_txzl'], ['des:汉末军阀混战,赵云受本郡推举,率领义从加入公孙瓒.期间结识了汉室皇亲刘备,但不久之后,赵云因为兄长去世而离开.赵云离开公孙瓒大约七年后,在邺城与刘备相见,从此追随刘备.随后被召唤到了王者峡谷一路追随于此']],
                        smzs_jxk: ['male', 'smzs_z_mhxy', 5, ['smzs_jxk_hsqj', 'smzs_jxk_pxkg', 'smzs_jxk_hfzr', 'smzs_jxk_pfcz'], ['des:他出身平民之家,自幼习得一身好武艺.以一柄长剑或单刀行走于江湖,是个锄强扶弱、行侠仗义的少年英雄.剑侠客率情任性,狂放不羁.一生淡泊名利,嗜武如痴,英雄意,儿女情,独闯江湖半生醉,举杯邀月最销魂.']],
                        smzs_hczz: ['male', 'smzs_z_yys', 3, ['smzs_hczz_zl', 'smzs_hczz_yy', 'smzs_hczz_ts', 'smzs_hczz_gc'], ['des:他是远在东方的荒川的守护者与主宰者.经历过岁月变迁、沧海桑田,荒川流域一直平静而繁荣']],
                        smzs_lm: ['female', 'smzs_z_clksdysjsh', 4, ['smzs_lm_gzxz', 'smzs_lm_xm', 'smzs_lm_we_xm', 'smzs_lm_ye_xm'], ['des:在罗兹沃尔的宅邸中一手担当全部杂务的双胞胎女仆中的妹妹,小时候家人被魔女教所杀,姐姐角被斩断,从而憎恨魔女教,初识昴因其身上有魔女气味不待见昴,之后解开误会被昴拯救,认定昴是她的英雄,一心一意的相信并照顾昴,看似毒舌冷漠,其实内心很坚强,很温柔.']],
                        smzs_ydj: ['female', 'smzs_z_yys', 4, ['smzs_ydj_sl'], ['des:手持巨大妖刀的少女.原本是人类,却不知为何与妖刀相互依存.平时看上去有些阴郁,也很少会和他人说话.但战斗时却会变成另一个人,残暴又恋战,没有人能躲过她的妖刀,刀下亡魂累累,平静下来后,她又会因伤害了太多人而自责.']],
                    },
                    characterTitle: {
                        smzs_gtw: "<span style='color: #191970;'>半人</span><span style='color:\t#FF0000;'>半鬼</span>",
                        smzs_lycj: "<span style='color: #EE82EE;'>失去太阳的曜姬</span>",
                        smzs_kess: "<span style='color: #CFB53B;'>死亡颂唱者</span>",
                        smzs_qmkkx: "<span style='color: #238E23;'>木叶村</span>",
                        smzs_bekln: "<span style='color: #FFA500;'>小小新秀</span>",
                        smzs_cszf: "<span style='color: #FF0000;'>五</span><span style='color:\t#90EE90;'>虎</span><span style='color:\t#CFB53B;'>上</span><span style='color: #8E2323;'>将</span>",
                        smzs_eyxj: "<span style='color: #FFFF00;'>赏金猎人</span>",
                        smzs_swkkx: "<span style='color: #483D8B;'>绝望的写轮眼</span>",
                        smzs_sl: "<span style='color: #483D8B;'>阴阳师之人</span>",
                        smzs_lla: "<span style='color: #90EE90;'>消散的疾风</span>",
                        smzs_dles: "<span style='color: #FF0000;'>诺克萨斯之手</span>",
                        smzs_zy: "<span style='color: #FF0000;'>五</span><span style='color:\t#90EE90;'>虎</span><span style='color:\t#CFB53B;'>上</span><span style='color: #8E2323;'>将</span>",
                        smzs_jxk: "<span style='color: #FFFF00;'>大唐门</span>",
                        smzs_lm: "<span style='color: #483D8B;'>鬼族</span>",
                        smzs_hczz: "<span style='color: yellow;'>SSR</span>",
                        smzs_ydj: "<span style='color: #90EE90;'>SSR</span>",
                        smzs_qszj: "<span style='color: #FF0000;'>初代火影</span>",
                    },
                    characterIntro: {},
                    skill: {
                        smzs_lycj_yd: {
                            init(player) {
                                player.addMark('smzs_lycj_ydbj', 5);
                                player.markSkill('smzs_lycj_ydbj');
                                game.log(player, '获得五层"新月祝福"');
                            },
                            group: ['smzs_lycj_yd_fine', 'smzs_lycj_yd_ten', 'smzs_lycj_yd_hd'],
                            subSkill: {
                                fine: {
                                    audio: 'ext:失名见闻谭/audio:2',
                                    forced: true,
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    init(player) {
                                        player.storage.smzs_lycj_yd_fine = false;
                                    },
                                    filter(event, player) {
                                        return player.storage.smzs_lycj_ydbj >= 5 && player.storage.smzs_lycj_ydbj < 10 && player.storage.smzs_lycj_yd_fine == false;
                                    },
                                    content() {
                                        var n = trigger.num;
                                        trigger.num += n;
                                    },
                                },
                                ten: {
                                    audio: 'ext:失名见闻谭/audio:2',
                                    forced: true,
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    init(player) {
                                        player.storage.smzs_lycj_yd_ten = false;
                                    },
                                    filter(event, player) {
                                        return player.storage.smzs_lycj_ydbj >= 10 && player.storage.smzs_lycj_yd_ten == false;
                                    },
                                    content() {
                                        var n = trigger.num;
                                        var m = n + n + n;
                                        trigger.num += m;
                                    },
                                },
                                hd: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    _priority: 10,
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.smzs_lycj_ydbj < 10;
                                    },
                                    content() {
                                        player.addMark('smzs_lycj_ydbj', 1);
                                        player.markSkill('smzs_lycj_ydbj');
                                        game.log(player, '获得一层"新月祝福"');
                                    },
                                },
                            },
                        },
                        smzs_lycj_yhzy: {
                            nobracket: true,
                            group: ['smzs_lycj_yhzy_csh'],
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.smzs_lycj_yhzy = false;
                            },
                            filter(event, player) {
                                return player.storage.smzs_lycj_yhzy == false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('残阳无影', '胧月无眠', 'cancel2')
                                    .set('ai', function (event) {
                                        var num = game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.attitude(player, current) <= 0;
                                            }
                                        });
                                        if (num > 1) {
                                            return '残阳无影';
                                        }
                                        return '胧月无眠';
                                    })
                                    .set('prompt', get.prompt('请选择<月之奥义>的主招式'))
                                    .set('choiceList', ['<残阳无影>为选择弃置一张手牌,选择1~3个目标造成一点伤害.', '<胧月无眠>为选择弃置一张手牌,选择1个目标造成三点伤害']);
                                ('step 1');
                                if (result.control == '残阳无影') {
                                    player.useSkill('smzs_lycj_cywyxz');
                                    game.log(player, '选择了<残阳无影>『选择1~3个目标造成一点伤害』');
                                }
                                if (result.control == '胧月无眠') {
                                    player.useSkill('smzs_lycj_lywmxz');
                                    game.log(player, '选择了<胧月无眠>『选择1个目标造成三点伤害』');
                                }
                            },
                            ai: {
                                order: 10,
                                expose: 0,
                                threaten: 0,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                csh: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    content() {
                                        player.storage.smzs_lycj_yhzy = false;
                                    },
                                },
                            },
                        },
                        smzs_lycj_cywyql: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:失名见闻谭/audio:2',
                            selectTarget: [1, 3],
                            filterCard: true,
                            selectCard: 1,
                            discard: true,
                            prompt: '弃置一张牌,发动技能',
                            position: 'h',
                            check(card, player, target) {
                                return 11 - get.value(card);
                                if (get.attitude(player, target) <= 0 && target.countCards('e', { subtype: ['equip2', 'equip3', 'equip4'] }) > 0) {
                                    return 1.5;
                                } else {
                                    return get.attitude(player, target) <= 0;
                                }
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                player.storage.smzs_lycj_yd_fine = true;
                                player.storage.smzs_lycj_yd_ten = true;
                                ('step 1');
                                if (target.hp >= Math.min(Math.ceil(player.hp / 2))) {
                                    target.addSkill('smzs_lycj_ql');
                                }
                                ('step 2');
                                target.damage();
                                ('step 3');
                                player.storage.smzs_lycj_yd_fine = false;
                                player.storage.smzs_lycj_yd_ten = false;
                            },
                            ai: {
                                order: 11,
                                expose: 1,
                                threaten: 2.1,
                                result: {
                                    player: 1,
                                    target(player, target, card) {
                                        if (target.countCards('e', { subtype: ['equip2', 'equip3', 'equip4'] }) > 0) return -2;
                                        return -1;
                                    },
                                },
                            },
                        },
                        smzs_lycj_ql: {
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_lycj_ql.jpg>`,
                            intro: {
                                name: '掠',
                                content: '你失去防具和马区,持续一回合',
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            requent: true,
                            forced: true,
                            init(player) {
                                player.disableEquip(2);
                                player.disableEquip(3);
                                player.disableEquip(4);
                                player.addMark('smzs_lycj_ql');
                                player.markSkill('smzs_lycj_ql');
                                game.log(player, '获得<掠>,失去防具和马区.');
                            },
                            onremove(player) {
                                player.enableEquip(2);
                                player.enableEquip(3);
                                player.enableEquip(4);
                                player.removeMark('smzs_lycj_ql');
                                player.unmarkSkill('smzs_lycj_ql');
                                game.log(player, '失去技能,并失去<掠>,回复防具和马区.');
                            },
                            content() {
                                player.removeSkill('smzs_lycj_ql');
                            },
                        },
                        smzs_lycj_cywyfl: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:失名见闻谭/audio:2',
                            selectTarget: [1, 3],
                            filterCard: true,
                            selectCard: 1,
                            discard: true,
                            prompt: '弃置一张牌,发动技能',
                            position: 'h',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card, player, target) {
                                return 11 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.storage.smzs_lycj_yd_fine = true;
                                player.storage.smzs_lycj_yd_ten = true;
                                ('step 1');
                                target.damage();
                                ('step 2');
                                if (target.countCards('he') >= 1) {
                                    player.discardPlayerCard('he', target, 1);
                                    event.finish();
                                } else {
                                    var c = target.countCards('he');
                                    var n = 1 - c;
                                    player.discardPlayerCard('he', target, c);
                                    player.draw(n);
                                }
                                ('step 3');
                                player.storage.smzs_lycj_yd_fine = false;
                                player.storage.smzs_lycj_yd_ten = false;
                            },
                            ai: {
                                order: 11,
                                expose: 1,
                                threaten: 2.2,
                                result: {
                                    player: 1,
                                    target(player, target, card) {
                                        if (target.countCards('h') < 0) return -2;
                                        return -1;
                                    },
                                },
                            },
                        },
                        smzs_lycj_cywyfj: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:失名见闻谭/audio:2',
                            selectTarget: [1, 3],
                            filterCard: true,
                            selectCard: 1,
                            discard: true,
                            prompt: '弃置一张牌,发动技能',
                            position: 'h',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card, player, target) {
                                return 11 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.storage.smzs_lycj_yd_fine = true;
                                player.storage.smzs_lycj_yd_ten = true;
                                ('step 1');
                                if (target.hp <= Math.min(Math.ceil(player.hp / 2))) {
                                    target.damage(2);
                                } else target.damage();
                                ('step 2');
                                player.storage.smzs_lycj_yd_fine = false;
                                player.storage.smzs_lycj_yd_ten = false;
                            },
                            ai: {
                                order: 11,
                                expose: 1,
                                threaten: 2.3,
                                result: {
                                    player: 1,
                                    target(player, target, card) {
                                        if (target.hp <= 2) return -2;
                                        return -1;
                                    },
                                },
                            },
                        },
                        smzs_lycj_cywybd: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:失名见闻谭/audio:2',
                            selectTarget: [1, 3],
                            filterCard: true,
                            selectCard: 1,
                            discard: true,
                            prompt: '弃置一张牌,发动技能',
                            position: 'h',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card, player, target) {
                                return 11 - get.value(card);
                                return get.attitude(player, target) <= 0;
                            },
                            content() {
                                'step 0';
                                player.storage.smzs_lycj_yd_fine = true;
                                player.storage.smzs_lycj_yd_ten = true;
                                ('step 1');
                                target.damage()._triggered = null;
                                ('step 2');
                                player.storage.smzs_lycj_yd_fine = false;
                                player.storage.smzs_lycj_yd_ten = false;
                            },
                            ai: {
                                order: 11,
                                expose: 1,
                                threaten: 2.1,
                                result: {
                                    player: 1,
                                    target: -1,
                                },
                            },
                        },
                        smzs_lycj_lywmql: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:失名见闻谭/audio:2',
                            selectTarget: 1,
                            filterCard: true,
                            selectCard: 1,
                            discard: true,
                            prompt: '弃置一张牌,发动技能',
                            position: 'h',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card, player, target) {
                                return 11 - get.value(card);
                                if (get.attitude(player, target) <= 0 && target.countCards('e', { subtype: ['equip2', 'equip3', 'equip4'] }) > 0) {
                                    return 1.5;
                                } else {
                                    return get.attitude(player, target) <= 0;
                                }
                            },
                            content() {
                                'step 0';
                                player.storage.smzs_lycj_yd_fine = true;
                                player.storage.smzs_lycj_yd_ten = true;
                                ('step 1');
                                if (target.hp >= Math.min(Math.ceil(player.hp / 2))) {
                                    target.addSkill('smzs_lycj_ql');
                                }
                                ('step 2');
                                target.damage(3);
                                ('step 3');
                                player.storage.smzs_lycj_yd_fine = false;
                                player.storage.smzs_lycj_yd_ten = false;
                            },
                            ai: {
                                order: 11,
                                expose: 1,
                                threaten: 2.1,
                                result: {
                                    player: 1,
                                    target(player, target, card) {
                                        if (target.countCards('e', { subtype: ['equip2', 'equip3', 'equip4'] }) > 0) return -2;
                                        return -1;
                                    },
                                },
                            },
                        },
                        smzs_lycj_lywmfl: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:失名见闻谭/audio:2',
                            selectTarget: 1,
                            filterCard: true,
                            selectCard: 1,
                            discard: true,
                            prompt: '弃置一张牌,发动技能',
                            position: 'h',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card, player, target) {
                                return 11 - get.value(card);
                                if (get.attitude(player, target) <= 0 && target.countCards('h') < 1) {
                                    return 1.5;
                                } else {
                                    return get.attitude(player, target) <= 0;
                                }
                            },
                            content() {
                                'step 0';
                                player.storage.smzs_lycj_yd_fine = true;
                                player.storage.smzs_lycj_yd_ten = true;
                                ('step 1');
                                target.damage(3);
                                ('step 2');
                                if (target.countCards('he') >= 3) {
                                    player.discardPlayerCard('he', target, 3);
                                    event.finish();
                                } else {
                                    var c = target.countCards('he');
                                    var n = 3 - c;
                                    player.discardPlayerCard('he', target, c);
                                    player.draw(n);
                                }
                                ('step 3');
                                player.storage.smzs_lycj_yd_fine = false;
                                player.storage.smzs_lycj_yd_ten = false;
                            },
                            ai: {
                                order: 11,
                                expose: 1,
                                threaten: 2.2,
                                result: {
                                    player: 1,
                                    target(player, target, card) {
                                        if (target.countCards('h') < 0) return -2;
                                        return -1;
                                    },
                                },
                            },
                        },
                        smzs_lycj_lywmfj: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:失名见闻谭/audio:2',
                            selectTarget: 1,
                            filterCard: true,
                            selectCard: 1,
                            discard: true,
                            prompt: '弃置一张牌,发动技能',
                            position: 'h',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card, player, target) {
                                return 11 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.storage.smzs_lycj_yd_fine = true;
                                player.storage.smzs_lycj_yd_ten = true;
                                ('step 1');
                                if (target.hp <= Math.min(Math.ceil(player.hp / 2))) {
                                    target.damage(4);
                                } else target.damage(3);
                                ('step 2');
                                player.storage.smzs_lycj_yd_fine = false;
                                player.storage.smzs_lycj_yd_ten = false;
                            },
                            ai: {
                                order: 11,
                                expose: 1,
                                threaten: 2.3,
                                result: {
                                    player: 1,
                                    target(player, target, card) {
                                        if (target.hp <= 2) return -2;
                                        return -1;
                                    },
                                },
                            },
                        },
                        smzs_lycj_lywmbd: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:失名见闻谭/audio:2',
                            selectTarget: 1,
                            filterCard: true,
                            selectCard: 1,
                            discard: true,
                            prompt: '弃置一张牌,发动技能',
                            position: 'h',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card, player, target) {
                                return 11 - get.value(card);
                                return get.attitude(player, target) <= 0;
                            },
                            content() {
                                'step 0';
                                player.storage.smzs_lycj_yd_fine = true;
                                player.storage.smzs_lycj_yd_ten = true;
                                ('step 1');
                                target.damage(3)._triggered = null;
                                ('step 2');
                                player.storage.smzs_lycj_yd_fine = false;
                                player.storage.smzs_lycj_yd_ten = false;
                            },
                            ai: {
                                order: 11,
                                expose: 1,
                                threaten: 2.1,
                                result: {
                                    player: 1,
                                    target: -1,
                                },
                            },
                        },
                        smzs_lycj_cywyxz: {
                            audio: 'ext:失名见闻谭/audio:2',
                            group: ['smzs_lycj_cywyxz_1', 'smzs_lycj_cywyxz_2', 'smzs_lycj_cywyxz_3', 'smzs_lycj_cywyxz_4'],
                            content() {
                                'step 0';
                                var a = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.hp >= Math.min(Math.ceil(current.maxHp / 2));
                                    }
                                });
                                var b = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.countCards('h') < 1;
                                    }
                                });
                                var c = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.hp <= Math.min(Math.ceil(current.maxHp / 2));
                                    }
                                });
                                var d = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.countCards('e', { subtype: ['equip2', 'equip3', 'equip4'] }) > 0;
                                    }
                                });
                                player.addMark('smzs_lycj_cywyxz_1', a + d);
                                player.markSkill('smzs_lycj_cywyxz_1');
                                player.addMark('smzs_lycj_cywyxz_2', b);
                                player.markSkill('smzs_lycj_cywyxz_2');
                                player.addMark('smzs_lycj_cywyxz_3', c);
                                player.markSkill('smzs_lycj_cywyxz_3');
                                player.addMark('smzs_lycj_cywyxz_4', 1);
                                player.markSkill('smzs_lycj_cywyxz_4');
                                ('step 1');
                                if (player.hasSkill('smzs_lycj_cywyql')) {
                                    player.removeMark('smzs_lycj_cywyxz_1', 1);
                                    player.markSkill('smzs_lycj_cywyxz_1');
                                }
                                if (player.hasSkill('smzs_lycj_cywyfl')) {
                                    player.removeMark('smzs_lycj_cywyxz_2', 1);
                                    player.markSkill('smzs_lycj_cywyxz_2');
                                }
                                if (player.hasSkill('smzs_lycj_cywyfj')) {
                                    player.removeMark('smzs_lycj_cywyxz_3', 1);
                                    player.markSkill('smzs_lycj_cywyxz_3');
                                }
                                if (player.hasSkill('smzs_lycj_cywybd')) {
                                    player.removeMark('smzs_lycj_cywyxz_4', 1);
                                    player.markSkill('smzs_lycj_cywyxz_4');
                                }
                                ('step 2');
                                player.useSkill('smzs_lycj_sqjn');
                                ('step 3');
                                player
                                    .chooseControl('侵掠', '飞流', '风疾', '不动')
                                    .set('ai', function (event) {
                                        var u = player.countMark('smzs_lycj_cywyxz_1');
                                        var i = player.countMark('smzs_lycj_cywyxz_2');
                                        var o = player.countMark('smzs_lycj_cywyxz_3');
                                        if (u > i && u > o) {
                                            return '侵掠';
                                        }
                                        if (i > u && i > o) {
                                            return '飞流';
                                        }
                                        if (o > u && o > i) {
                                            return '风疾';
                                        }
                                        if ((u = i && u > o)) {
                                            return '飞流';
                                        }
                                        if ((u = o && u > i)) {
                                            return '风疾';
                                        }
                                        if ((o = i && o > u)) {
                                            return '风疾';
                                        }
                                        if ((o = i = u)) {
                                            return '不动';
                                        }
                                    })
                                    .set('prompt', get.prompt('请选择<残阳无影>的附加属性.'))
                                    .set('choiceList', ['<侵掠>:若目标体力不小于其一半(向上取整),附加"掠"效果为废除装备防具和马区(持续一个回合).', '<飞流>:弃置目标X张牌,若不足则你摸差值牌数(x为造成伤害次数).', '<风疾>:若目标体力不大于其一半(向上取整),伤害加一.', '<不动>:造成伤害时,不会触发目标技能.']);
                                ('step 4');
                                if (result.control == '侵掠') {
                                    player.storage.smzs_lycj_yhzy = true;
                                    player.node.avatar.setBackgroundImage('extension/失名见闻谭/image/smzs_lycj.jpg');
                                    player.addSkill('smzs_lycj_cywyql');
                                    game.log(player, '选择了<侵掠>『若目标体力不小于其一半(向上取整),附加"掠"效果为无法装备防具和马区(持续一个回合).』');
                                }
                                if (result.control == '飞流') {
                                    player.storage.smzs_lycj_yhzy = true;
                                    player.node.avatar.setBackgroundImage('extension/失名见闻谭/image/smzs_lycj_cywyflpf.jpg');
                                    player.addSkill('smzs_lycj_cywyfl');
                                    game.log(player, '选择了<飞流>『弃置目标X张牌,若不足则你摸差值牌数(x为造成伤害)』');
                                }
                                if (result.control == '风疾') {
                                    player.storage.smzs_lycj_yhzy = true;
                                    player.node.avatar.setBackgroundImage('extension/失名见闻谭/image/smzs_lycj_cywyfjpf.jpg');
                                    player.addSkill('smzs_lycj_cywyfj');
                                    game.log(player, '选择了<风疾>『若目标体力不大于其一半(向上取整),伤害加一.』');
                                }
                                if (result.control == '不动') {
                                    player.storage.smzs_lycj_yhzy = true;
                                    player.node.avatar.setBackgroundImage('extension/失名见闻谭/image/smzs_lycj_cywybdpf.jpg');
                                    player.addSkill('smzs_lycj_cywybd');
                                    game.log(player, '选择了<不动>『造成伤害时,不会触发目标技能.』');
                                }
                                ('step 5');
                                var a = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.hp >= Math.min(Math.ceil(current.maxHp / 2));
                                    }
                                });
                                var b = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.countCards('h') < 1;
                                    }
                                });
                                var c = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.hp <= Math.min(Math.ceil(current.maxHp / 2));
                                    }
                                });
                                var d = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.countCards('e', { subtype: ['equip2', 'equip3', 'equip4'] }) > 0;
                                    }
                                });
                                player.storage.smzs_lycj_cywyxz_1 = 0;
                                player.unmarkSkill('smzs_lycj_cywyxz_1');
                                player.storage.smzs_lycj_cywyxz_2 = 0;
                                player.unmarkSkill('smzs_lycj_cywyxz_2');
                                player.storage.smzs_lycj_cywyxz_3 = 0;
                                player.unmarkSkill('smzs_lycj_cywyxz_3');
                                player.storage.smzs_lycj_cywyxz_4 = 0;
                                player.unmarkSkill('smzs_lycj_cywyxz_4');
                            },
                            subSkill: {
                                1: {
                                    marktext: '掠',
                                    intro: {
                                        name: '推荐选择侵掠指数',
                                        content: '#,推荐选择最高',
                                    },
                                },
                                2: {
                                    marktext: '流',
                                    intro: {
                                        name: '推荐选择飞流指数',
                                        content: '#,推荐选择最高',
                                    },
                                },
                                3: {
                                    marktext: '疾',
                                    intro: {
                                        name: '推荐选择风疾指数',
                                        content: '#,推荐选择最高',
                                    },
                                },
                                4: {
                                    marktext: '动',
                                    intro: {
                                        name: '推荐选择不动指数',
                                        content: '#,推荐选择最高,若都相等则选这个',
                                    },
                                },
                            },
                        },
                        smzs_lycj_lywmxz: {
                            audio: 'ext:失名见闻谭/audio:2',
                            group: ['smzs_lycj_lywmxz_1', 'smzs_lycj_lywmxz_2', 'smzs_lycj_lywmxz_3', 'smzs_lycj_lywmxz_4'],
                            content() {
                                'step 0';
                                var a = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.hp >= Math.min(Math.ceil(current.maxHp / 2));
                                    }
                                });
                                var b = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.countCards('h') < 1;
                                    }
                                });
                                var c = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.hp <= Math.min(Math.ceil(current.maxHp / 2));
                                    }
                                });
                                var d = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.countCards('e', { subtype: ['equip2', 'equip3', 'equip4'] }) > 0;
                                    }
                                });
                                player.addMark('smzs_lycj_lywmxz_1', a + d);
                                player.markSkill('smzs_lycj_lywmxz_1');
                                player.addMark('smzs_lycj_lywmxz_2', b);
                                player.markSkill('smzs_lycj_lywmxz_2');
                                player.addMark('smzs_lycj_lywmxz_3', c);
                                player.markSkill('smzs_lycj_lywmxz_3');
                                player.addMark('smzs_lycj_lywmxz_4', 1);
                                player.markSkill('smzs_lycj_lywmxz_4');
                                ('step 1');
                                if (player.hasSkill('smzs_lycj_lywmql')) {
                                    player.removeMark('smzs_lycj_lywmxz_1', 1);
                                    player.markSkill('smzs_lycj_lywmxz_1');
                                }
                                if (player.hasSkill('smzs_lycj_lywmfl')) {
                                    player.removeMark('smzs_lycj_lywmxz_2', 1);
                                    player.markSkill('smzs_lycj_lywmxz_2');
                                }
                                if (player.hasSkill('smzs_lycj_lywmfj')) {
                                    player.removeMark('smzs_lycj_lywmxz_3', 1);
                                    player.markSkill('smzs_lycj_lywmxz_3');
                                }
                                if (player.hasSkill('smzs_lycj_lywmbd')) {
                                    player.removeMark('smzs_lycj_lywmxz_4', 1);
                                    player.markSkill('smzs_lycj_lywmxz_4');
                                }
                                ('step 2');
                                player.useSkill('smzs_lycj_sqjn');
                                ('step 3');
                                player
                                    .chooseControl('侵掠', '飞流', '风疾', '不动')
                                    .set('ai', function (event) {
                                        var u = player.countMark('smzs_lycj_lywmxz_1');
                                        var i = player.countMark('smzs_lycj_lywmxz_2');
                                        var o = player.countMark('smzs_lycj_lywmxz_3');
                                        if (u > i && u > o) {
                                            return '侵掠';
                                        }
                                        if (i > u && i > o) {
                                            return '飞流';
                                        }
                                        if (o > u && o > i) {
                                            return '风疾';
                                        }
                                        if ((u = i && u > o)) {
                                            return '飞流';
                                        }
                                        if ((u = o && u > i)) {
                                            return '风疾';
                                        }
                                        if ((o = i && o > u)) {
                                            return '风疾';
                                        }
                                        if ((o = i = u)) {
                                            return '不动';
                                        }
                                    })
                                    .set('prompt', get.prompt('请选择<胧月无眠>的附加属性.'))
                                    .set('choiceList', ['<侵掠>:若目标体力不小于其一半(向上取整),附加"掠"效果为废除装备防具和马区(持续一个回合).', '<飞流>:弃置目标X张牌,若不足则你摸差值牌数(x为造成伤害次数).', '<风疾>:若目标体力不大于其一半(向上取整),伤害加一.', '<不动>:造成伤害时,不会触发目标技能.']);
                                ('step 4');
                                if (result.control == '侵掠') {
                                    player.storage.smzs_lycj_yhzy = true;
                                    player.node.avatar.setBackgroundImage('extension/失名见闻谭/image/smzs_lycj.jpg');
                                    player.addSkill('smzs_lycj_lywmql');
                                    game.log(player, '选择了<侵掠>『若目标体力不小于其一半(向上取整),附加"掠"效果为无法装备防具和马区(持续一个回合).』');
                                }
                                if (result.control == '飞流') {
                                    player.storage.smzs_lycj_yhzy = true;
                                    player.node.avatar.setBackgroundImage('extension/失名见闻谭/image/smzs_lycj_lywmflpf.jpg');
                                    player.addSkill('smzs_lycj_lywmfl');
                                    game.log(player, '选择了<飞流>『弃置目标X张牌,若不足则你摸差值牌数(x为造成伤害)』');
                                }
                                if (result.control == '风疾') {
                                    player.storage.smzs_lycj_yhzy = true;
                                    player.node.avatar.setBackgroundImage('extension/失名见闻谭/image/smzs_lycj_lywmfjpf.jpg');
                                    player.addSkill('smzs_lycj_lywmfj');
                                    game.log(player, '选择了<风疾>『若目标体力不大于其一半(向上取整),伤害加一.』');
                                }
                                if (result.control == '不动') {
                                    player.storage.smzs_lycj_yhzy = true;
                                    player.node.avatar.setBackgroundImage('extension/失名见闻谭/image/smzs_lycj_lywmbdpf.jpg');
                                    player.addSkill('smzs_lycj_lywmbd');
                                    game.log(player, '选择了<不动>『造成伤害时,不会触发目标技能.』');
                                }
                                ('step 5');
                                var a = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.hp >= Math.min(Math.ceil(current.maxHp / 2));
                                    }
                                });
                                var b = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.countCards('h') < 1;
                                    }
                                });
                                var c = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.hp <= Math.min(Math.ceil(current.maxHp / 2));
                                    }
                                });
                                var d = game.countPlayer(function (current) {
                                    if (current != player && get.attitude(player, current) <= 0) {
                                        return current.countCards('e', { subtype: ['equip2', 'equip3', 'equip4'] }) > 0;
                                    }
                                });
                                player.storage.smzs_lycj_lywmxz_1 = 0;
                                player.unmarkSkill('smzs_lycj_lywmxz_1');
                                player.storage.smzs_lycj_lywmxz_2 = 0;
                                player.unmarkSkill('smzs_lycj_lywmxz_2');
                                player.storage.smzs_lycj_lywmxz_3 = 0;
                                player.unmarkSkill('smzs_lycj_lywmxz_3');
                                player.storage.smzs_lycj_lywmxz_4 = 0;
                                player.unmarkSkill('smzs_lycj_lywmxz_4');
                            },
                            subSkill: {
                                1: {
                                    marktext: '掠',
                                    intro: {
                                        name: '推荐选择侵掠指数',
                                        content: '#,推荐选择最高',
                                    },
                                },
                                2: {
                                    marktext: '流',
                                    intro: {
                                        name: '推荐选择飞流指数',
                                        content: '#,推荐选择最高',
                                    },
                                },
                                3: {
                                    marktext: '疾',
                                    intro: {
                                        name: '推荐选择风疾指数',
                                        content: '#,推荐选择最高',
                                    },
                                },
                                4: {
                                    marktext: '动',
                                    intro: {
                                        name: '推荐选择不动指数',
                                        content: '#,推荐选择最高,若都相等则选这个',
                                    },
                                },
                            },
                        },
                        smzs_lycj_sqjn: {
                            content() {
                                'step 0';
                                if (player.hasSkill('smzs_lycj_cywyql')) {
                                    player.removeSkill('smzs_lycj_cywyql');
                                    event.finish();
                                } else event.goto(1);
                                ('step 1');
                                if (player.hasSkill('smzs_lycj_cywyfl')) {
                                    player.removeSkill('smzs_lycj_cywyfl');
                                    event.finish();
                                } else event.goto(2);
                                ('step 2');
                                if (player.hasSkill('smzs_lycj_cywyfj')) {
                                    player.removeSkill('smzs_lycj_cywyfj');
                                    event.finish();
                                } else event.goto(3);
                                ('step 3');
                                if (player.hasSkill('smzs_lycj_cywybd')) {
                                    player.removeSkill('smzs_lycj_cywybd');
                                    event.finish();
                                } else event.goto(4);
                                ('step 4');
                                if (player.hasSkill('smzs_lycj_lywmql')) {
                                    player.removeSkill('smzs_lycj_lywmql');
                                    event.finish();
                                } else event.goto(5);
                                ('step 5');
                                if (player.hasSkill('smzs_lycj_lywmfj')) {
                                    player.removeSkill('smzs_lycj_lywmfj');
                                    event.finish();
                                } else event.goto(6);
                                ('step 6');
                                if (player.hasSkill('smzs_lycj_lywmfl')) {
                                    player.removeSkill('smzs_lycj_lywmfl');
                                    event.finish();
                                } else event.goto(7);
                                ('step 7');
                                if (player.hasSkill('smzs_lycj_lywmbd')) {
                                    player.removeSkill('smzs_lycj_lywmbd');
                                    event.finish();
                                } else event.goto(0);
                            },
                        },
                        smzs_lycj_ydbj: {
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_lycj_ydbj.jpg>`,
                            intro: {
                                name: '新月祝福',
                                content: '你目前拥有#层<新月祝福>,每五层伤害翻倍',
                            },
                        },
                        smzs_kess_lt: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.recover(1);
                                ('step 1');
                                player.maxHp = 6;
                                ('step 2');
                                player.hp = 6;
                                ('step 3');
                                player.node.avatar.setBackgroundImage('extension/失名见闻谭/image/smzs_kess_lt.jpg');
                                ('step 4');
                                player.clearSkills();
                                ('step 5');
                                player.addSkill('smzs_kess_ga');
                                player.addSkill('smzs_kess_bj');
                                player.addSkill('smzs_kess_hfps');
                                player.addSkill('smzs_kess_sjglz');
                                player.addSkill('smzs_kess_tthg');
                            },
                            intro: {
                                content: 'limited',
                            },
                            ai: {
                                save: true,
                                result: {
                                    player: 10,
                                },
                            },
                        },
                        smzs_kess_sc: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: -1,
                            filterTarget(crad, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                player.say('----各位请听我一曲 <安详>~');
                                ('step 1');
                                player.judge();
                                ('step 2');
                                switch (result.color) {
                                    case 'black':
                                        target.damage(1, 'thunder');
                                        player.say('----这!!就是死亡的边缘!!! 哈哈哈哈~');
                                        break;
                                    default:
                                        player.draw();
                                        player.gain(result.card, 'gain2');
                                        player.say('----你也是来自深渊的人嘛,啊哈哈哈!!');
                                }
                            },
                            ai: {
                                order: 10,
                                expose: 1,
                                threaten: 1.8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        smzs_kess_ga: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'shunshou' || card.name == 'guohe') return false;
                                },
                            },
                        },
                        smzs_kess_xs: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filter(event, player) {
                                return player.hp == 1;
                            },
                            selectCard: 1,
                            position: 'h',
                            check(card) {
                                return 8 - get.value(card);
                            }, //QQQ
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                target.damage(target.hp);
                                player.say('----这!! 就是死亡!!! 哈哈哈哈~');
                            },
                            ai: {
                                order: 11,
                                expose: 1,
                                threaten: 3,
                                result: {
                                    player: 1,
                                    target: -5,
                                },
                            },
                        },
                        smzs_kess_bj: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filiter(event, player) {
                                return player.hp > 1;
                            },
                            content() {
                                player.say('----我感受到<来自深渊>的呼唤 哈哈哈哈~');
                                player.damage(1, 'thunder');
                                player.draw(2);
                            },
                        },
                        smzs_kess_hfps: {
                            nobracket: true,
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha') range[1] += Infinity;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                            },
                        },
                        smzs_kess_sjglz: {
                            nobracket: true,
                            audio: 'ext:失名见闻谭/audio:2',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.say('----死神~~~无所拘束!!!哈哈哈哈~~');
                            },
                        },
                        smzs_kess_tthg: {
                            nobracket: true,
                            group: ['smzs_kess_tthg_fuhuo', 'smzs_kess_tthg_huode'],
                            marktext: '骨',
                            intro: {
                                name: '脱胎换骨',
                                content: '你拥有了#个印记.',
                            },
                            subSkill: {
                                fuhuo: {
                                    _priority: 9,
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    filter(event, player) {
                                        return player.storage.smzs_kess_tthg >= 6;
                                    },
                                    content() {
                                        'step 0';
                                        var n = player.countMark('smzs_kess_tthg');
                                        player.removeMark('smzs_kess_tthg', n);
                                        player.unmarkSkill('smzs_kess_tthg');
                                        ('step 1');
                                        player.clearSkills();
                                        ('step 2');
                                        player.node.avatar.setBackgroundImage('extension/失名见闻谭/image/smzs_kess.jpg');
                                        ('step 3');
                                        player.addSkill('smzs_kess_ga');
                                        player.addSkill('smzs_kess_xs');
                                        player.addSkill('smzs_kess_sc');
                                        player.addSkill('smzs_kess_sjglz');
                                        player.addSkill('smzs_kess_lt');
                                        ('step 4');
                                        player.maxHp = 1;
                                        ('step 5');
                                        player.hp = 1;
                                    },
                                },
                                huode: {
                                    _priority: 10,
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    content() {
                                        player.addMark('smzs_kess_tthg', 1);
                                        player.markSkill('smzs_kess_tthg');
                                        game.log(player, '获得一个<骨>标记');
                                    },
                                },
                            },
                        },
                        smzs_qmkkx_xly: {
                            marktext: '眼',
                            intro: {
                                name: '你已被旗木卡卡西copy了技能',
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:失名见闻谭/audio:2',
                            selectTarget: [1, 3],
                            filterTarget(event, player, target) {
                                return target != player && target.countMark('smzs_qmkkx_xly') <= 0;
                            },
                            check(event, player) {
                                return game.countPlayer(function (current) {
                                    return current != player && current.countMark('smzs_qmkkx_xly') < 0;
                                });
                            },
                            content() {
                                'step 0';
                                player.line(target);
                                target.addMark('smzs_qmkkx_xly', 1);
                                target.markSkill('smzs_qmkkx_xly');
                                player.say('copy!写轮眼!!!');
                                ('step 1');
                                var list = [];
                                if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                                if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                                if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                                player.addSkill(list);
                            },
                            ai: {
                                order: 10,
                                expose: 0,
                                threaten: 1.1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        smzs_qmkkx_qns: {
                            audio: 'ext:失名见闻谭/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.judge();
                                player.say('忍术最强奥义!!!千年杀!!!!');
                                ('step 1');
                                switch (result.color) {
                                    case 'red':
                                        trigger.num++;
                                        break;
                                    default:
                                        trigger.player.loseMaxHp(true);
                                }
                            },
                            ai: {
                                order: 10,
                                expose: 0.8,
                                threaten: 1.8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        smzs_qmkkx_fss: {
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                var evt = event.parent;
                                if (
                                    evt.player &&
                                    evt.player.hasSkillTag(false, {
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
                                player.judge('bagua', function (card) {
                                    return get.color(card) == 'red' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.set('responded', true);
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                            ai: {
                                order: 10,
                                respondShan: true,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        smzs_bekln_jscz: {
                            nobracket: true,
                            marktext: '极',
                            group: ['smzs_bekln_jscz_hf', 'smzs_bekln_jscz_ks', 'smzs_bekln_jscz_jsfy', 'smzs_bekln_jlsx', 'smzs_bekln_jlsj', 'smzs_bekln_jlxl'],
                            intro: {
                                name: '极速成长',
                                content: '你拥有#个记印记.每获得一个印记<极>,增加生一点命上限',
                            },
                            init(player) {
                                player.markSkill('smzs_bekln_jscz');
                            },
                            subSkill: {
                                jsfy: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    content() {
                                        if (10 > player.storage.smzs_bekln_jscz >= 5) player.draw();
                                        if (player.storage.smzs_bekln_jscz >= 10) player.draw(3);
                                    },
                                },
                                ks: {
                                    forced: true,
                                    trigger: {
                                        global: 'gameDrawAfter',
                                    },
                                    content() {
                                        player.addMark('smzs_bekln_jscz', 3);
                                        player.markSkill('smzs_bekln_jscz');
                                        game.log(player, '获得了3个<极速成长>印记');
                                    },
                                },
                                hf: {
                                    audio: 'ext:失名见闻谭/audio:2',
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var y = player.storage.smzs_bekln_jlsj;
                                        var x = player.storage.smzs_bekln_jscz;
                                        var z = x - y;
                                        var c = player.maxHp;
                                        var p = y - x;
                                        if (z > 0) player.maxHp = c + z;
                                        else player.maxHp = c - p;
                                        ('step 1');
                                        var m = player.maxHp;
                                        var b = player.hp;
                                        var x = player.storage.smzs_bekln_jscz;
                                        var y = player.storage.smzs_bekln_jlsj;
                                        var z = x - y;
                                        var a = y - x;
                                        if (z > 0) player.hp = b + z;
                                        if (b > m) player.hp = b - a;
                                        ('step 2');
                                        game.log(player, '获得了很强大的力量');
                                        ('step 3');
                                        player.say('wow,这力量,卡密sama(上神大人),我感受到我拥有很强的力量了');
                                        ('step 4');
                                        player.useSkill('smzs_bekln_jlsx_jl');
                                    },
                                },
                            },
                        },
                        smzs_bekln_jlxl: {
                            mark: true,
                            marktext: '血',
                            group: ['smzs_bekln_jlxl_jl'],
                            intro: {
                                name: '记录血量',
                                content: '你拥有#个血印记,每一个<血>印记都代表一滴生命值',
                            },
                            init(player) {
                                player.storage.smzs_bekln_jlxl = player.hp;
                                player.markSkill('smzs_bekln_jlxl');
                                game.log(player, '已记录当前血量');
                            },
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.smzs_bekln_jscz != player.storage.smzs_bekln_jlsj;
                            },
                            content() {
                                player.storage.smzs_bekln_jlxl = player.hp;
                                game.log(player, '已记录当前血量');
                                player.useSkill('smzs_bekln_jlsx');
                            },
                            subSkill: {
                                jl: {
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.smzs_bekln_jlxl = player.hp;
                                        game.log(player, '已记录当前血量');
                                        ('step 1');
                                        player.useSkill('smzs_bekln_jlsj_jl');
                                    },
                                },
                            },
                        },
                        smzs_bekln_jlsx: {
                            mark: true,
                            marktext: '限',
                            group: ['smzs_bekln_jlsx_jl'],
                            intro: {
                                name: '记录血量上限',
                                content: '你拥有#个限印记,每一个<限>印记都代表一滴生命上限',
                            },
                            init(player) {
                                player.storage.smzs_bekln_jlsx = player.maxHp;
                                player.markSkill('smzs_bekln_jlsx');
                                game.log(player, '已记录当前血量上限');
                            },
                            forced: true,
                            content() {
                                player.storage.smzs_bekln_jlsx = player.maxHp;
                                game.log(player, '已记录当前血量上限');
                                player.useSkill('smzs_bekln_jscz_hf');
                            },
                            subSkill: {
                                jl: {
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.smzs_bekln_jlsx = player.maxHp;
                                        game.log(player, '已记录当前血量上限');
                                        ('step 1');
                                        player.useSkill('smzs_bekln_jlxl_jl');
                                    },
                                },
                            },
                        },
                        smzs_bekln_jlsj: {
                            mark: true,
                            marktext: '记',
                            group: ['smzs_bekln_jlsj_jl'],
                            intro: {
                                name: '记录上次极的数量',
                                content: '你拥有#个记印记,记录上次极的数量',
                            },
                            init(player) {
                                player.storage.smzs_bekln_jlsj = 0;
                                player.markSkill('smzs_bekln_jlsj');
                                game.log(player, '已记录之前的<极>数');
                            },
                            forced: true,
                            content() {
                                player.storage.smzs_bekln_jlsj = player.storage.smzs_bekln_jscz;
                            },
                            subSkill: {
                                jl: {
                                    forced: true,
                                    content() {
                                        player.storage.smzs_bekln_jlsj = player.storage.smzs_bekln_jscz;
                                        player.markSkill('smzs_bekln_jlsj');
                                    },
                                },
                            },
                        },
                        smzs_bekln_hyft: {
                            nobracket: true,
                            audio: 'ext:失名见闻谭/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 3],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                if (player.countMark('smzs_bekln_jscz') >= 10) {
                                    event.goto(3);
                                } else event.goto(1);
                                ('step 1');
                                player.judge(function (card) {
                                    return card.suit == 'diamond' ? -1 : 1;
                                });
                                ('step 2');
                                switch (result.suit) {
                                    case 'spade':
                                        target.damage(3, 'fire');
                                        break;
                                    case 'heart':
                                        target.damage(2, 'fire');
                                        break;
                                    case 'club':
                                        target.damage(1, 'fire');
                                        break;
                                }
                                event.finish();
                                ('step 3');
                                target.damage(3, 'fire');
                                player.removeMark('smzs_bekln_jscz', 3);
                                game.log(player, '达到十层及以上的英雄愿望,使用了火焰伏特造成三滴火焰伤害并失去了3层极');
                            },
                            ai: {
                                threaten: 3,
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        if (target.countCards('h') <= 1) return -3.5;
                                        return -2;
                                    },
                                },
                                order: 10,
                                expose: 1,
                            },
                        },
                        smzs_bekln_yxyw: {
                            nobracket: true,
                            trigger: {
                                global: ['damageBefore', 'loseHpBefore'],
                            },
                            filter(event, player) {
                                if (event.source == player) return false;
                                return player != event.player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) >= 0;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1 : -1;
                                });
                                ('step 1');
                                switch (result.suit) {
                                    case 'heart':
                                        player.addMark('smzs_bekln_jscz', 1);
                                        game.log(player, '获得了1个<极速成长>印记');
                                        trigger.cancel();
                                        trigger.source.damage();
                                        break;
                                    case 'diamond':
                                        trigger.cancel();
                                        player.draw();
                                        player.addMark('smzs_bekln_jscz', 1);
                                        game.log(player, '获得了1个<极速成长>印记');
                                        break;
                                    case 'club':
                                        trigger.player = player;
                                        player.draw(2);
                                        player.addMark('smzs_bekln_jscz', 1);
                                        game.log(player, '获得了1个<极速成长>印记');
                                        break;
                                    default:
                                        player.damage();
                                        player.addMark('smzs_bekln_jscz', 1);
                                        game.log(player, '获得了1个<极速成长>印记');
                                }
                            },
                        },
                        smzs_cszf_haqn: {
                            nobracket: true,
                            group: ['smzs_cszf_haqn_sha', 'smzs_cszf_haqn_nu', 'smzs_cszf_haqn_chu'],
                            marktext: '怒',
                            intro: {
                                name: '黑暗潜能',
                                content: '你拥有#个记印记.当拥有10层印记时,技能<狂兽血性>开放使用',
                            },
                            subSkill: {
                                sha: {
                                    mod: {
                                        selectTarget(card, player, range) {
                                            if (card.name == 'sha') range[1] += 2;
                                        },
                                    },
                                    forced: true,
                                    _priority: 9,
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    filter(event, player) {
                                        return event.card && get.color(event.card) == 'red';
                                    },
                                    content() {
                                        trigger.directHit = true;
                                    },
                                },
                                nu: {
                                    audio: 'ext:失名见闻谭/audio:2',
                                    trigger: {
                                        player: ['phaseBegin', 'phaseEnd', 'damageEnd', 'shaBegin'],
                                    },
                                    forced: true,
                                    _priority: 10,
                                    content() {
                                        player.addMark('smzs_cszf_haqn', 1);
                                        player.markSkill('smzs_cszf_haqn');
                                        game.log(player, '获得了1层<怒>');
                                    },
                                },
                                chu: {
                                    audio: 'ext:失名见闻谭/audio:2',
                                    forced: true,
                                    _priority: 8,
                                    trigger: {
                                        player: ['useCardAfter', 'respond'],
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.addMark('smzs_cszf_haqn', 1);
                                        player.markSkill('smzs_cszf_haqn');
                                        game.log(player, '获得了1层<怒>');
                                    },
                                },
                            },
                        },
                        smzs_cszf_hdwl: {
                            nobracket: true,
                            audio: 'ext:失名见闻谭/audio:2',
                            round: 2,
                            enable: 'phaseUse',
                            check(player) {
                                var a = player.previous;
                                var b = player.next;
                                if ((get.attitude(player, a) > 0 && a.hp > 1 && player.countCards('h', 'tao') > 0) || (get.attitude(player, b) > 0 && b.hp > 1 && player.countCards('h', 'tao') > 0));
                            },
                            content() {
                                'step 0';
                                var w = player.previous;
                                var s = player.next;
                                if (s != w) {
                                    s.damage();
                                    w.damage();
                                    s.addSkill('smzs_cszf_xr');
                                    w.addSkill('smzs_cszf_xr');
                                    player.addSkill('smzs_cszf_hd');
                                    event.goto(1);
                                } else {
                                    s.addSkill('smzs_cszf_xr');
                                    s.damage();
                                    player.addSkill('smzs_cszf_hd');
                                    event.goto(2);
                                }
                                ('step 1');
                                var w = player.previous;
                                var s = player.next;
                                player.disableEquip(3);
                                s.disableEquip(4);
                                w.disableEquip(4);
                                event.finish();
                                ('step 2');
                                var w = player.previous;
                                var s = player.next;
                                player.disableEquip(3);
                                s.disableEquip(4);
                                event.finish();
                            },
                            group: ['smzs_cszf_hdwl_roundcount'],
                            ai: {
                                order: 11,
                                result: {
                                    player(player) {
                                        var a = player.previous;
                                        var b = player.next;
                                        if (get.attitude(player, a) > 0 && a.hp <= 1 && player.countCards('h', 'tao') <= 0) return -1;
                                        if (get.attitude(player, b) > 0 && b.hp <= 1 && player.countCards('h', 'tao') <= 0) return -1;
                                        if (get.attitude(player, a) < 0 && a.hp <= 1 && a.countCards('h') <= 0) return 1.5;
                                        if (get.attitude(player, b) < 0 && b.hp <= 1 && b.countCards('h') <= 0) return 1.5;
                                        return 1;
                                    },
                                },
                                expose: 0.1,
                                threaten: 1.5,
                            },
                        },
                        smzs_cszf_xr: {
                            forced: true,
                            marktext: '陷',
                            intro: {
                                name: '陷入牢阵',
                                content: '你拥有该印记时,拥有<陷入>『锁定技①,你不能装备进攻马且你的进攻距离为-99.锁定技②,你的回合结束时,失去该技能』技能.',
                            },
                            mark: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance + 99;
                                },
                                cardEnabled(card, player) {
                                    if (get.subtype(card) == 'equip4') return false;
                                },
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                player.removeSkill('smzs_cszf_xr');
                            },
                            onremove(player) {
                                player.enableEquip(4);
                            },
                        },
                        smzs_cszf_hd: {
                            forced: true,
                            _priority: 7,
                            marktext: '画',
                            intro: {
                                name: '画地为牢',
                                content: '你拥有该印记时,拥有<画地>『锁定技①,你不能装备防御马且你的防御距离为-99.锁定技②,你的回合结束时,失去该技能』技能.',
                            },
                            mark: true,
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance - 99;
                                },
                                cardEnabled(card, player) {
                                    if (get.subtype(card) == 'equip3') return false;
                                },
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                player.removeSkill('smzs_cszf_hd');
                            },
                            onremove(player) {
                                player.enableEquip(3);
                            },
                        },
                        smzs_cszf_ksxx: {
                            nobracket: true,
                            audio: 'ext:失名见闻谭/audio:2',
                            enable: 'phaseUse',
                            selectTarget: -1,
                            filterTarget(crad, player, target) {
                                return target != player;
                            },
                            filter(event, player) {
                                return player.storage.smzs_cszf_haqn >= 10;
                            },
                            content() {
                                'step 0';
                                target.turnOver();
                                var x = player.countMark('smzs_cszf_haqn');
                                player.removeMark('smzs_cszf_haqn', x);
                                player.clearSkills();
                                ('step 1');
                                player.node.avatar.setBackgroundImage('extension/失名见闻谭/image/smzs_cszfksxx.jpg');
                                ('step 2');
                                player.maxHp = 8;
                                ('step 3');
                                player.recover(2);
                                player.addSkill('smzs_cszf_kszt');
                                player.addSkill('smzs_cszf_qj');
                                player.addSkill('smzs_cszf_qhhdwl');
                                player.addSkill('smzs_cszf_nh');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                                expose: 0.1,
                                threaten: 1.7,
                            },
                        },
                        smzs_cszf_kszt: {
                            nobracket: true,
                            group: ['smzs_cszf_kszt_jieshu', 'smzs_cszf_kszt_jiesu', 'smzs_cszf_kszt_bt'],
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance - Infinity;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                            },
                            mark: true,
                            marktext: '狂',
                            intro: {
                                name: '狂兽状态',
                                content: '你拥有#个记印记,你处于狂怒状态.你每次回合结束都失去2层',
                            },
                            init(player) {
                                player.storage.smzs_cszf_kszt = 10;
                                player.markSkill('smzs_cszf_kszt');
                                game.log(player, '进入了狂兽状态,获得10层<狂>');
                            },
                            subSkill: {
                                bt: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    content() {
                                        player.unMad;
                                    },
                                },
                                jieshu: {
                                    audio: 'ext:传说/audio:2',
                                    _priority: 10,
                                    forced: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    content() {
                                        player.removeMark('smzs_cszf_kszt', 2);
                                        game.log(player, '失去2层<狂>');
                                    },
                                },
                                jiesu: {
                                    forced: true,
                                    _priority: 8,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        if (player.storage.smzs_cszf_kszt > 0) return false;
                                    },
                                    content() {
                                        'step 0';
                                        player.unmarkSkill('smzs_cszf_kszt');
                                        player.clearSkills();
                                        ('step 1');
                                        player.node.avatar.setBackgroundImage('extension/传说/image/cszf.jpg');
                                        ('step 2');
                                        player.maxHp = 4;
                                        ('step 3');
                                        player.addSkill('smzs_cszf_ksxx');
                                        player.addSkill('smzs_cszf_haqn');
                                        player.addSkill('smzs_cszf_hdwl');
                                        player.addSkill('smzs_cszf_shjg');
                                    },
                                },
                            },
                        },
                        smzs_cszf_qj: {
                            audio: 'ext:失名见闻谭/audio:2',
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha') range[1] += 2;
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            filter(event, player) {
                                return event.target != player;
                            }, //QQQ
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        smzs_cszf_qhhdwl: {
                            audio: 'ext:失名见闻谭/audio:2',
                            round: 2,
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                var w = player.previous;
                                var s = player.next;
                                if (s != w) {
                                    s.damage(2);
                                    w.damage(2);
                                    s.addSkill('smzs_cszf_xr');
                                    w.addSkill('smzs_cszf_xr');
                                    event.goto(1);
                                } else {
                                    s.addSkill('smzs_cszf_xr');
                                    s.damage(2);
                                    event.goto(2);
                                }
                                ('step 1');
                                var w = player.previous;
                                var s = player.next;
                                s.disableEquip(4);
                                w.disableEquip(4);
                                event.finish();
                                ('step 2');
                                var w = player.previous;
                                var s = player.next;
                                s.disableEquip(4);
                                event.finish();
                            },
                            group: ['smzs_cszf_qhhdwl_roundcount'],
                            ai: {
                                order: 11,
                                result: {
                                    player(player) {
                                        var a = player.previous;
                                        var b = player.next;
                                        if (get.attitude(player, a) > 0 && a.hp <= 2 && player.countCards('h', 'tao') <= 0) return -1;
                                        if (get.attitude(player, b) > 0 && b.hp <= 2 && player.countCards('h', 'tao') <= 0) return -1;
                                        if (get.attitude(player, a) < 0 && a.hp <= 2 && a.countCards('h') <= 0) return 1.5;
                                        if (get.attitude(player, b) < 0 && b.hp <= 2 && b.countCards('h') <= 0) return 1.5;
                                        return 1;
                                    },
                                },
                                expose: 0.1,
                                threaten: 2.3,
                            },
                        },
                        smzs_cszf_nh: {
                            audio: 'ext:失名见闻谭/audio:2',
                            forced: true,
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            content() {
                                player.draw(3);
                            },
                        },
                        smzs_cszf_shjg: {
                            nobracket: true,
                            audio: 'ext:失名见闻谭/audio:2',
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 3;
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                var num = player.damage;
                                player.draw(num);
                                player.say('#%$!@#%^&');
                            },
                        },
                        smzs_eyxj_eydjg: {
                            nobracket: true,
                            forced: true,
                            audio: 'ext:失名见闻谭/audio:2',
                            forced: true,
                            _priority: 10,
                            trigger: {
                                source: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.player.countMark('smzs_eyxj_eydjgbj') <= 0;
                            },
                            content() {
                                'step 0';
                                trigger.num += 1;
                                trigger.player.addMark('smzs_eyxj_eydjgbj', 1);
                                game.log(player, '你成为我的目标了哦');
                                trigger.player.markSkill('smzs_eyxj_eydjgbj');
                                ('step 1');
                                trigger.player.addSkill('smzs_eyxj_ycwjmb');
                            },
                        },
                        smzs_eyxj_ycwjmb: {
                            trigger: {
                                global: 'smzs_eyxj_eydjgBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeMark('smzs_eyxj_eydjgbj');
                                player.unmarkSkill('smzs_eyxj_eydjgbj');
                                ('step 1');
                                player.removeSkill('smzs_eyxj_ycwjmb');
                            },
                        },
                        smzs_eyxj_eydjgbj: {
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_eyxj_eyxj_bj.jpg>`,
                            intro: {
                                name: '目标',
                                content: '你已成为<赏金猎人·厄运小姐>的目标',
                            },
                        },
                        smzs_eyxj_yjsd: {
                            nobracket: true,
                            audio: 'ext:失名见闻谭/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            multitarget: true,
                            filter(event, player) {
                                var n = game.countPlayer();
                                if (n <= 2) return false;
                                return (_status.currentPhaseUse = event.source);
                            },
                            content() {
                                'step 0';
                                player.removeSkill('smzs_eyxj_yjsd');
                                player.removeSkill('smzs_eyxj_eydjg');
                                ('step 1');
                                var w = trigger.player.previous;
                                var s = trigger.player.next;
                                if (player != w && player != s) {
                                    player.chooseControl('目标上家', '目标下家', 'cancel2', ui.create.dialog('请选择发动<一箭双雕>技能的目标', 'hidden')).set('ai', function (target) {
                                        if (get.attitude(player, trigger.player.previous) > 0 && get.attitude(player, trigger.player.next) > 0) {
                                            return 'cancel2';
                                        }
                                        if (get.attitude(player, trigger.player.previous) < 0 && get.attitude(player, trigger.player.next) > 0) {
                                            return '目标上家';
                                        }
                                        if (get.attitude(player, trigger.player.previous) > 0 && get.attitude(player, trigger.player.next) < 0) {
                                            return '目标下家';
                                        }
                                        if (get.attitude(player, trigger.player.previous) < 0 && get.attitude(player, trigger.player.next) < 0) {
                                            if (trigger.player.previous.hp > trigger.player.next.hp) {
                                                return '目标下家';
                                            }
                                            if (trigger.player.previous.hp < trigger.player.next.hp) {
                                                return '目标上家';
                                            }
                                            if ((trigger.player.previous.hp = trigger.player.next.hp)) {
                                                return '目标上家';
                                            }
                                        }
                                    });
                                    event.goto(4);
                                } else event.goto(2);
                                ('step 2');
                                var w = trigger.player.previous;
                                var s = trigger.player.next;
                                if (player == w) {
                                    player.chooseControl('目标下家', 'cancel2', ui.create.dialog('请选择发动<一箭双雕>技能的目标', 'hidden')).set('ai', function (target) {
                                        if (get.attitude(player, trigger.player.next) > 0) {
                                            return 'cancel2';
                                        }
                                        if (get.attitude(player, trigger.player.next) < 0) {
                                            return '目标下家';
                                        }
                                    });
                                    event.goto(4);
                                } else event.goto(3);
                                ('step 3');
                                var w = trigger.player.previous;
                                var s = trigger.player.next;
                                if (player == s) {
                                    player.chooseControl('目标上家', 'cancel2', ui.create.dialog('请选择发动<一箭双雕>技能的目标', 'hidden')).set('ai', function (target) {
                                        if (get.attitude(player, trigger.player.previous) > 0) {
                                            return 'cancel2';
                                        }
                                        if (get.attitude(player, trigger.player.previous) < 0) {
                                            return '目标上家';
                                        }
                                    });
                                    event.goto(4);
                                }
                                ('step 4');
                                if (result.control == '目标上家') {
                                    var w = trigger.player.previous;
                                    w.damage();
                                }
                                if (result.control == '目标下家') {
                                    var s = trigger.player.next;
                                    s.damage();
                                }
                                ('step 5');
                                player.addSkill('smzs_eyxj_yjsd');
                                player.addSkill('smzs_eyxj_eydjg');
                            },
                        },
                        smzs_eyxj_dblx: {
                            nobracket: true,
                            audio: 'ext:失名见闻谭/audio:2',
                            group: ['smzs_eyxj_dblx_jl', 'smzs_eyxj_dblx_ss', 'smzs_eyxj_dblx_zd'],
                            trigger: {
                                global: 'phaseEnd',
                            },
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_eyxj_dblx_bj.jpg>`,
                            _priority: 10,
                            intro: {
                                name: '大步流星',
                                content: '你当前拥有#层,每人回合结束后若你没受伤获得一层.获得五层时解锁主动技.一但你受伤移除所有层数',
                            },
                            forced: true,
                            content() {
                                var j = player.countMark('jiluxueliang');
                                if (player.hp >= j) {
                                    player.addMark('smzs_eyxj_dblx', 1);
                                    game.log(player, '获得一层<大步流星>');
                                    player.markSkill('smzs_eyxj_dblx');
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                zd: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    _priority: 9,
                                    filter(event, player) {
                                        return player.storage.smzs_eyxj_dblx >= 5;
                                    },
                                    content() {
                                        player.removeMark('smzs_eyxj_dblx', 5);
                                        player.unmarkSkill('smzs_eyxj_dblx');
                                        player.phase('nodelay');
                                    },
                                },
                                ss: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    _priority: 5,
                                    filter(event, player) {
                                        return player.storage.smzs_eyxj_dblx > 0;
                                    },
                                    content() {
                                        var num = player.countMark('smzs_eyxj_dblx');
                                        player.removeMark('smzs_eyxj_dblx', num);
                                        player.unmarkSkill('smzs_eyxj_dblx');
                                    },
                                },
                                jl: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    content() {
                                        var n = player.hp;
                                        player.storage.jiluxueliang = player.hp;
                                        player.markSkill('jiluxueliang');
                                    },
                                },
                            },
                        },
                        smzs_swkkx_zysw: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'black' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.color == 'black') {
                                    game.swapSeat(player, target);
                                }
                                ('step 2');
                                player.addMark('smzs_swkkx_xznh_s', 1);
                                player.markSkill('smzs_swkkx_xznh_s');
                                game.log(player, '获得了1层<神>');
                            },
                            ai: {
                                threaten: 1.5,
                                result: {
                                    player: 1,
                                    target: -2,
                                },
                                order: 11,
                                expose: 0.2,
                            },
                        },
                        smzs_swkkx_sysw: {
                            nobracket: true,
                            group: ['smzs_swkkx_sysw_d'],
                            trigger: {
                                player: 'smzs_swkkx_zyswEnd',
                            },
                            init(player) {
                                player.storage.smzs_swkkx_sysw = false;
                            },
                            filter(event, player) {
                                return player.storage.smzs_swkkx_sysw == false;
                            },
                            check(card) {
                                return 1;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.color == 'red') {
                                    player.storage.smzs_swkkx_sysw = true;
                                    player.storage.smzs_swkkx_xznh_jl = false;
                                    player.storage.smzs_swkkx_xznh_ls = false;
                                    player.storage.smzs_swkkx_sysw_d = false;
                                }
                            },
                            subSkill: {
                                d: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    init(player) {
                                        player.storage.smzs_swkkx_sysw_d = true;
                                    },
                                    filter(event, player) {
                                        return player.storage.smzs_swkkx_sysw_d == false;
                                    },
                                    content() {
                                        player.addMark('smzs_swkkx_xznh_s', 1);
                                        player.markSkill('smzs_swkkx_xznh_s');
                                        game.log(player, '获得了1层<神>');
                                    },
                                },
                            },
                        },
                        smzs_swkkx_xznh: {
                            nobracket: true,
                            group: ['smzs_swkkx_xznh_s', 'smzs_swkkx_xznh_x', 'smzs_swkkx_xznh_q', 'smzs_swkkx_xznh_w', 'smzs_swkkx_xznh_ls', 'smzs_swkkx_xznh_jl'],
                            subSkill: {
                                s: {
                                    marktext: '神',
                                    intro: {
                                        name: '神威',
                                        content: '你拥有#层印记.当拥有6层及以上印记时,进入<须佐能乎>状态',
                                    },
                                    forced: true,
                                    trigger: {
                                        player: ['phaseBefore', 'phaseEnd'],
                                    },
                                    filter(event, player) {
                                        return player.countMark('smzs_swkkx_xznh_s') >= 6;
                                    },
                                    content() {
                                        'step 0';
                                        var n = player.countMark('smzs_swkkx_xznh_s');
                                        player.removeMark('smzs_swkkx_xznh_s', n);
                                        player.unmarkSkill('smzs_swkkx_xznh_s');
                                        game.log(player, '进入了<须佐能乎>状态,移除所有<神>,获得3层<须>');
                                        player.removeSkill('smzs_swkkx_zysw');
                                        player.removeSkill('smzs_swkkx_sysw');
                                        ('step 1');
                                        player.addMark('smzs_swkkx_xznh_x', 6);
                                        player.markSkill('smzs_swkkx_xznh_x');
                                        player.addSkill('smzs_swkkx_lqsw_xznh');
                                        player.addSkill('smzs_swkkx_sw_xznh');
                                        player.addSkill('smzs_swkkx_ldtg');
                                        ('step 2');
                                        player.maxHp = 6;
                                        ('step 3');
                                        player.recover(3);
                                        ('step 4');
                                        player.draw(3);
                                    },
                                },
                                x: {
                                    marktext: '须',
                                    intro: {
                                        name: '须佐能乎',
                                        content: '你拥有#层印记.当印记小于或等于0时,将解除<须佐能乎>状态.',
                                    },
                                    trigger: {
                                        player: 'smzs_swkkx_xznh_qEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('smzs_swkkx_xznh_x') <= 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.unmarkSkill('smzs_swkkx_xznh_x');
                                        game.log(player, '解除了<须佐能乎>状态');
                                        player.removeSkill('smzs_swkkx_lqsw_xznh');
                                        player.removeSkill('smzs_swkkx_sw_xznh');
                                        player.removeSkill('smzs_swkkx_ldtg');
                                        ('step 1');
                                        player.addSkill('smzs_swkkx_zysw');
                                        player.addSkill('smzs_swkkx_sysw');
                                        ('step 2');
                                        player.maxHp = 3;
                                    },
                                },
                                q: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('smzs_swkkx_xznh_x') >= 1;
                                    },
                                    content() {
                                        player.removeMark('smzs_swkkx_xznh_x', 1);
                                        player.markSkill('smzs_swkkx_xznh_x');
                                        game.log(player, '失去了一层<须>');
                                    },
                                },
                                w: {
                                    marktext: '威',
                                    intro: {
                                        name: '恐威',
                                        content: '你拥有#层印记.',
                                    },
                                },
                                jl: {
                                    forced: true,
                                    init(player) {
                                        player.storage.smzs_swkkx_xznh_jl = true;
                                    },
                                    filter(event, player) {
                                        return player.storage.smzs_swkkx_xznh_jl == false;
                                    },
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance - Infinity;
                                        },
                                    },
                                },
                                ls: {
                                    forced: true,
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    init(player) {
                                        player.storage.smzs_swkkx_xznh_ls = true;
                                    },
                                    filter(event, player) {
                                        return player.storage.smzs_swkkx_xznh_ls == false && event.card.name == 'sha' && !event.card.nature;
                                    },
                                    content() {
                                        trigger.card.nature = 'thunder';
                                    },
                                },
                            },
                        },
                        smzs_swkkx_ldtg: {
                            nobracket: true,
                            usable: 2,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            check(event, player) {
                                return 1;
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(true, player, 'hej', get.prompt('你可以选择弃置一张牌(手牌,装备区,判定区)来获得当前回合玩家的一张牌(手牌,装备区,判定区).')).set('ai', function (button) {
                                    return 11 - get.value(button.link);
                                });
                                ('step 1');
                                var c = result.links[0];
                                if (get.color(c) == 'red') {
                                    event.goto(2);
                                } else {
                                    event.goto(6);
                                }
                                ('step 2');
                                var a = _status.currentPhase;
                                player
                                    .gainPlayerCard('hej', a, true)
                                    .set('prompt', '获得当前回合玩家的一张牌(手牌,装备区,判定区)')
                                    .set('ai', function (button) {
                                        return 1;
                                    });
                                ('step 3');
                                player
                                    .chooseTarget(get.prompt('选择一个目标(不为你)使其自己弃置一张牌.'), 1, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 4');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target
                                        .chooseToDiscard('h', { color: 'black' }, 1)
                                        .set('prompt', '你需要弃置一张黑色手牌,否则受到一点雷属性伤害.')
                                        .set('ai', function (card) {
                                            return 40 - get.value(card);
                                        });
                                }
                                ('step 5');
                                if (result.bool) {
                                    event.finish();
                                } else {
                                    event.target.damage(1, 'thunder');
                                    event.finish();
                                }
                                ('step 6');
                                var a = _status.currentPhase;
                                player
                                    .gainPlayerCard('hej', a, true)
                                    .set('prompt', '获得当前回合玩家的一张牌(手牌,装备区,判定区)')
                                    .set('ai', function (button) {
                                        return 1;
                                    });
                                ('step 7');
                                player
                                    .chooseTarget(get.prompt('选择一个目标(不为你)使其自己弃置一张牌.'), 1, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 8');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target
                                        .chooseToDiscard('h', { color: 'red' }, 1)
                                        .set('prompt', '你需要弃置一张红色手牌,否则受到一点雷属性伤害.')
                                        .set('ai', function (card) {
                                            return 40 - get.value(card);
                                        });
                                }
                                ('step 9');
                                if (result.bool) {
                                    event.finish();
                                } else {
                                    event.target.damage(1, 'thunder');
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 10,
                                expose: 0.7,
                                threaten: 2,
                                result: {
                                    player(player) {
                                        var num = game.countPlayer(function (current) {
                                            return current != player && get.attitude(player, current) <= 0;
                                        });
                                        if (num >= 2) return 2;
                                        return 0;
                                    },
                                },
                            },
                        },
                        smzs_swkkx_lqsw_xznh: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: 1,
                            position: 'hej',
                            prompt: '你需弃置一张黑色牌(手牌,装备区,判定区)',
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('选择两名玩家(不为你)进行互换位置,并使其受到一点雷属性伤害再附加一层<威>.'), 2, function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    return get.attitude(player, target) <= 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    game.swapSeat(result.targets[0], result.targets[1]);
                                    var o = result.targets[0];
                                    var t = result.targets[1];
                                    o.damage(1, 'thunder');
                                    t.damage(1, 'thunder');
                                    o.addMark('smzs_swkkx_xznh_w', 1);
                                    o.markSkill('smzs_swkkx_xznh_w');
                                    game.log(o, '被附加了一层<威>');
                                    t.addMark('smzs_swkkx_xznh_w', 1);
                                    t.markSkill('smzs_swkkx_xznh_w');
                                    game.log(o, '被附加了一层<威>');
                                }
                            },
                            ai: {
                                threaten: 1.8,
                                result: {
                                    player(player) {
                                        var num = game.countPlayer(function (current) {
                                            return current != player && get.attitude(player, current) <= 0;
                                        });
                                        if (num >= 2) return 2;
                                        return 0;
                                    },
                                },
                                order: 11,
                                expose: 0.8,
                            },
                        },
                        smzs_swkkx_sw_xznh: {
                            nobracket: true,
                            group: ['smzs_swkkx_sw_xznh_fx', 'smzs_swkkx_sw_xznh_h', 'smzs_swkkx_sw_xznh_hr'],
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('你可以选择两个目标.每个目标需要自己弃置一张黑色手牌,否则受到一点雷属性伤害.若目标附有<威>,则弃置一张红色和一张黑色手牌,否则受到两点雷属性伤害.'), 2, function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    return get.attitude(player, target) <= 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    var o = result.targets[0];
                                    var t = result.targets[1];
                                    o.useSkill('smzs_swkkx_sw_xznh_fx');
                                    t.useSkill('smzs_swkkx_sw_xznh_fx');
                                }
                            },
                            ai: {
                                threaten: 2,
                                result: {
                                    player(player) {
                                        var num = game.countPlayer(function (current) {
                                            return current != player && get.attitude(player, current) <= 0;
                                        });
                                        if (num >= 2) return 2;
                                        return 0;
                                    },
                                },
                                order: 10,
                                expose: 0.9,
                            },
                            subSkill: {
                                fx: {
                                    content() {
                                        if (player.countMark('smzs_swkkx_xznh_w') > 0) {
                                            player.useSkill('smzs_swkkx_sw_xznh_hr');
                                        } else player.useSkill('smzs_swkkx_sw_xznh_h');
                                    },
                                },
                                h: {
                                    content() {
                                        'step 0';
                                        player
                                            .chooseToDiscard('h', { color: 'black' }, 1)
                                            .set('prompt', '你即将受到1点雷属性伤害,是否弃置一张黑色手牌,以减少一点伤害？')
                                            .set('ai', function (card) {
                                                return 40 - get.value(card);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.finish();
                                        } else player.damage(1, 'thunder');
                                    },
                                },
                                hr: {
                                    content() {
                                        'step 0';
                                        player
                                            .chooseToDiscard('h', { color: 'black' }, 1)
                                            .set('prompt', '你即将受到2点雷属性伤害,是否弃置一张黑色手牌,以减少一点伤害？')
                                            .set('ai', function (card) {
                                                return 40 - get.value(card);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.goto(2);
                                        } else {
                                            event.goto(4);
                                        }
                                        ('step 2');
                                        player
                                            .chooseToDiscard('h', { color: 'red' }, 1)
                                            .set('prompt', '你即将受到1点雷属性伤害,是否弃置一张红色手牌,以减少一点伤害？')
                                            .set('ai', function (card) {
                                                return 40 - get.value(card);
                                            });
                                        ('step 3');
                                        if (result.bool) {
                                            event.finish();
                                        } else {
                                            event.goto(7);
                                        }
                                        ('step 4');
                                        player
                                            .chooseToDiscard('h', { color: 'red' }, 1)
                                            .set('prompt', '你即将受到2点雷属性伤害,是否弃置一张红色手牌,以减少一点伤害？')
                                            .set('ai', function (card) {
                                                return 40 - get.value(card);
                                            });
                                        ('step 5');
                                        if (result.bool) {
                                            event.goto(7);
                                        } else {
                                            event.goto(6);
                                        }
                                        ('step 6');
                                        player.damage(2, 'thunder');
                                        event.finish();
                                        ('step 7');
                                        player.damage(1, 'thunder');
                                        event.finish();
                                    },
                                },
                            },
                        },
                        smzs_lla_yjxc: {
                            nobracket: true,
                            group: ['smzs_lla_yjxc_b'],
                            intro: {
                                content(storage) {
                                    var str = '当前时间:';
                                    if (storage == 0) str += '白天<br>效果:所有人获得技能<警惕>,并解锁光明之风';
                                    if (storage == 1) str += '夜晚<br>效果:除你之外所有人获得技能<疲劳>,解锁风护『当你受到伤害前,你可以进行判定,若为红色此伤害对你无效,并获得一层<疾>』';
                                    return str;
                                },
                            },
                            mark: true,
                            init(player) {
                                player.storage.smzs_lla_yjxc = 0;
                                game.broadcastAll(function (player) {
                                    ui.background.setBackgroundImage('extension/失名见闻谭/image/smzs_lla_bt.jpg');
                                }, player);
                                player.storage.smzs_lla_gmzf = false;
                                game.countPlayer(function (current) {
                                    player.line(current, 'green');
                                    current.addSkill('smzs_lla_jt');
                                });
                                player.storage.smzs_lla_yjxc_b = true;
                            },
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                if (player.countMark('smzs_lla_yjxc') <= 0) {
                                    player.storage.smzs_lla_yjxc = 1;
                                    game.broadcastAll(function (player) {
                                        ui.background.setBackgroundImage('extension/失名见闻谭/image/smzs_lla_yw.jpg');
                                    }, player);
                                    player.storage.smzs_lla_gmzf = true;
                                    game.countPlayer(function (current) {
                                        if (current != player) {
                                            player.line(current, 'green');
                                            current.removeSkill('smzs_lla_jt');
                                            current.addSkill('smzs_lla_pl');
                                        }
                                    });
                                    player.removeSkill('smzs_lla_jt');
                                    player.storage.smzs_lla_yjxc_b = false;
                                } else {
                                    player.storage.smzs_lla_yjxc = 0;
                                    game.broadcastAll(function (player) {
                                        ui.background.setBackgroundImage('extension/失名见闻谭/image/smzs_lla_bt.jpg');
                                    }, player);
                                    player.storage.smzs_lla_gmzf = false;
                                    game.countPlayer(function (current) {
                                        player.line(current, 'green');
                                        current.removeSkill('smzs_lla_pl');
                                        current.addSkill('smzs_lla_jt');
                                    });
                                    player.storage.smzs_lla_yjxc_b = true;
                                }
                            },
                            subSkill: {
                                b: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        return player.storage.smzs_lla_yjxc_b == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.judge(function (card) {
                                            return get.color(card) == 'red' ? 1 : -1;
                                        });
                                        ('step 1');
                                        if (result.judge > 0) {
                                            trigger.cancel();
                                            player.addMark('smzs_lla_jffx', 1);
                                        }
                                    },
                                },
                            },
                        },
                        smzs_lla_jt: {
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += 1);
                                },
                            },
                        },
                        smzs_lla_pl: {
                            mod: {
                                maxHandcard(player, num) {
                                    return (num -= 1);
                                },
                            },
                        },
                        smzs_lla_jffx: {
                            nobracket: true,
                            marktext: '疾',
                            intro: {
                                name: '疾風奮迅',
                                content: '你拥有#层疾',
                            },
                            trigger: {
                                player: ['respond', 'useCard'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            forced: true,
                            group: ['smzs_lla_jffx_a'],
                            content() {
                                player.addMark('smzs_lla_jffx', 1);
                                player.markSkill('smzs_lla_jffx');
                            },
                            subSkill: {
                                a: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    check(event, player) {
                                        var x = player.countMark('smzs_lla_jffx');
                                        var y = event.num; //QQQ
                                        return x + y >= event.player.hp && get.attitude(player, event.player) <= 0;
                                    },
                                    filter(event, player) {
                                        return player.countMark('smzs_lla_jffx') > 0;
                                    },
                                    async content(event, trigger, player) {
                                        //QQQ
                                        var x = player.countMark('smzs_lla_jffx');
                                        trigger.num += x;
                                        player.removeMark('smzs_lla_jffx', x);
                                        player.unmarkSkill('smzs_lla_jffx');
                                    },
                                },
                            },
                        },
                        smzs_lla_gmzf: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, Infinity],
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            init(player) {
                                player.storage.smzs_lla_gmzf = false;
                            },
                            filter(event, player) {
                                return player.storage.smzs_lla_gmzf == false;
                            },
                            content() {
                                'step 0';
                                target
                                    .chooseToDiscard('h', [1, 3])
                                    .set('prompt', '你将受到3点伤害,你可以选择弃置1~3张手牌来减少等量伤害.')
                                    .set('ai', function (card) {
                                        return 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var x = result.cards.length;
                                    var d = 3 - x;
                                    target.damage(d);
                                } else {
                                    target.damage(3);
                                }
                            },
                            ai: {
                                threaten: 2.6,
                                result: {
                                    player: 1,
                                    target: -2,
                                },
                                order: 10,
                                expose: 0.8,
                            },
                        },
                        smzs_lla_mdjllg: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 5;
                                },
                            },
                            init(player) {
                                player.disableEquip(1);
                                player.disableEquip(2);
                            },
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card) {
                                return get.type(card) == 'equip';
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            prompt: '将一张杀当闪使用或打出',
                            check() {
                                return 1;
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', { type: 'equip' })) return false;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('h', { type: 'equip' })) return false;
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
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        smzs_sl_xzjn: {
                            trigger: {
                                global: 'gameDrawBefore',
                            },
                            forced: true,
                            group: ['smzs_sl_xzjn_a', 'smzs_sl_xzjn_ab', 'smzs_sl_xzjn_ac', 'smzs_sl_xzjn_a1', 'smzs_sl_xzjn_a2', 'smzs_sl_xzjn_a3', 'smzs_sl_xzjn_bc', 'smzs_sl_xzjn_b1', 'smzs_sl_xzjn_b2', 'smzs_sl_xzjn_b3', 'smzs_sl_xzjn_c1', 'smzs_sl_xzjn_c2', 'smzs_sl_xzjn_c3', 'smzs_sl_xzjn_12', 'smzs_sl_xzjn_13', 'smzs_sl_xzjn_23'],
                            content() {
                                'step 0';
                                player
                                    .chooseControl('『鱼·召唤』', '『疾风·通灵』', '『冥蝶·通灵』', '『炼狱·召唤』', '『伞·召唤』', '『续命·召唤』')
                                    .set('ai', function (event) {
                                        return '『鱼·召唤』';
                                    })
                                    .set('prompt', get.prompt('只能携带三种技能.请选择你本局的第一个技能'))
                                    .set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<疾风·通灵:可以使一名玩家获得新回合>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>', '<续命·召唤:可以使目标多活两回合>']);
                                ('step 1');
                                if (result.control == '『鱼·召唤』') {
                                    player.addSkill('smzs_sl_yzh');
                                    game.log(player, '获得了技能<鱼·召唤>');
                                    player.useSkill('smzs_sl_xzjn_a');
                                    event.finish();
                                }
                                if (result.control == '『疾风·通灵』') {
                                    player.addSkill('smzs_sl_jftl');
                                    game.log(player, '获得了技能<疾风·通灵>');
                                    player.useSkill('smzs_sl_xzjn_b');
                                    event.finish();
                                }
                                if (result.control == '『冥蝶·通灵』') {
                                    player.addSkill('smzs_sl_mdtl');
                                    game.log(player, '获得了技能<冥蝶·通灵>');
                                    player.useSkill('smzs_sl_xzjn_c');
                                    event.finish();
                                }
                                if (result.control == '『炼狱·召唤』') {
                                    player.addSkill('smzs_sl_lyzh');
                                    game.log(player, '获得了技能<炼狱·召唤>');
                                    player.useSkill('smzs_sl_xzjn_1');
                                    event.finish();
                                }
                                if (result.control == '『伞·召唤』') {
                                    player.addSkill('smzs_sl_szh');
                                    game.log(player, '获得了技能<伞·召唤>');
                                    player.useSkill('smzs_sl_xzjn_2');
                                    event.finish();
                                }
                                if (result.control == '『续命·召唤』') {
                                    player.addSkill('smzs_sl_xmzh');
                                    game.log(player, '获得了技能<续命·召唤>');
                                    player.useSkill('smzs_sl_xzjn_3');
                                    event.finish();
                                }
                            },
                            subSkill: {
                                1: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『疾风·通灵』', '『冥蝶·通灵』', '『伞·召唤』', '『续命·召唤』').set('prompt', get.prompt('请选择你本局的第二个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<疾风·通灵:可以使一名玩家获得新回合>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            player.useSkill('smzs_sl_xzjn_a1');
                                            event.finish();
                                        }
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            player.useSkill('smzs_sl_xzjn_b1');
                                            event.finish();
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            player.useSkill('smzs_sl_xzjn_c1');
                                            event.finish();
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            player.useSkill('smzs_sl_xzjn_12');
                                            event.finish();
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            player.useSkill('smzs_sl_xzjn_13');
                                            event.finish();
                                        }
                                    },
                                },
                                2: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『疾风·通灵』', '『冥蝶·通灵』', '『炼狱·召唤』', '『续命·召唤』').set('prompt', get.prompt('请选择你本局的第二个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<疾风·通灵:可以使一名玩家获得新回合>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            player.useSkill('smzs_sl_xzjn_a2');
                                            event.finish();
                                        }
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            player.useSkill('smzs_sl_xzjn_b2');
                                            event.finish();
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            player.useSkill('smzs_sl_xzjn_c2');
                                            event.finish();
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            player.useSkill('smzs_sl_xzjn_12');
                                            event.finish();
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            player.useSkill('smzs_sl_xzjn_23');
                                            event.finish();
                                        }
                                    },
                                },
                                3: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『疾风·通灵』', '『冥蝶·通灵』', '『炼狱·召唤』', '『伞·召唤』').set('prompt', get.prompt('请选择你本局的第二个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<疾风·通灵:可以使一名玩家获得新回合>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>', '<伞·召唤:可以抵挡大于1的任意伤害>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            player.useSkill('smzs_sl_xzjn_a3');
                                            event.finish();
                                        }
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            player.useSkill('smzs_sl_xzjn_b3');
                                            event.finish();
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            player.useSkill('smzs_sl_xzjn_c3');
                                            event.finish();
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            player.useSkill('smzs_sl_xzjn_13');
                                            event.finish();
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            player.useSkill('smzs_sl_xzjn_23');
                                            event.finish();
                                        }
                                    },
                                },
                                12: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『疾风·通灵』', '『冥蝶·通灵』', '『续命·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<疾风·通灵:可以使一名玩家获得新回合>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                13: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『疾风·通灵』', '『冥蝶·通灵』', '『伞·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<疾风·通灵:可以使一名玩家获得新回合>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                23: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『疾风·通灵』', '『冥蝶·通灵』', '『炼狱·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<疾风·通灵:可以使一名玩家获得新回合>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<炼狱·召唤:专门用来限制敌人最多三名>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                a: {
                                    content() {
                                        'step 0';
                                        player
                                            .chooseControl('『疾风·通灵』', '『冥蝶·通灵』', '『炼狱·召唤』', '『伞·召唤』', '『续命·召唤』')
                                            .set('ai', function (event) {
                                                if (player.hasFriend()) return '『疾风·通灵』';
                                                return '『冥蝶·通灵』';
                                            })
                                            .set('prompt', get.prompt('请选择你本局的第二个技能'))
                                            .set('choiceList', ['<疾风·通灵:可以使一名玩家获得新回合>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            player.useSkill('smzs_sl_xzjn_ab');
                                            event.finish();
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            player.useSkill('smzs_sl_xzjn_ac');
                                            event.finish();
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            player.useSkill('smzs_sl_xzjn_a1');
                                            event.finish();
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            player.useSkill('smzs_sl_xzjn_a2');
                                            event.finish();
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            player.useSkill('smzs_sl_xzjn_a3');
                                            event.finish();
                                        }
                                    },
                                },
                                ab: {
                                    content() {
                                        'step 0';
                                        player
                                            .chooseControl('『冥蝶·通灵』', '『炼狱·召唤』', '『伞·召唤』', '『续命·召唤』')
                                            .set('ai', function (event) {
                                                return '『续命·召唤』';
                                            })
                                            .set('prompt', get.prompt('请选择你本局的第三个技能'))
                                            .set('choiceList', ['<冥蝶·通灵:专门用来限制敌人最多三名>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                ac: {
                                    content() {
                                        'step 0';
                                        player
                                            .chooseControl('『疾风·通灵』', '『炼狱·召唤』', '『伞·召唤』', '『续命·召唤』')
                                            .set('ai', function (event) {
                                                return '『炼狱·召唤』';
                                            })
                                            .set('prompt', get.prompt('请选择你本局的第三个技能'))
                                            .set('choiceList', ['<疾风·通灵:可以使一名玩家获得新回合>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                a1: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『疾风·通灵』', '『冥蝶·通灵』', '『伞·召唤』', '『续命·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<疾风·通灵:可以使一名玩家获得新回合>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                a2: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『疾风·通灵』', '『冥蝶·通灵』', '『炼狱·召唤』', '『续命·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<疾风·通灵:可以使一名玩家获得新回合>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                a3: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『疾风·通灵』', '『冥蝶·通灵』', '『炼狱·召唤』', '『伞·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<疾风·通灵:可以使一名玩家获得新回合>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>']);
                                        ('step 1');
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                b: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『冥蝶·通灵』', '『炼狱·召唤』', '『伞·召唤』', '『续命·召唤』').set('prompt', get.prompt('请选择你本局的第二个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            player.useSkill('smzs_sl_xzjn_ab');
                                            event.finish();
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            player.useSkill('smzs_sl_xzjn_bc');
                                            event.finish();
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            player.useSkill('smzs_sl_xzjn_b1');
                                            event.finish();
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            player.useSkill('smzs_sl_xzjn_b2');
                                            event.finish();
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            player.useSkill('smzs_sl_xzjn_b3');
                                            event.finish();
                                        }
                                    },
                                },
                                bc: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『炼狱·召唤』', '『伞·召唤』', '『续命·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                b1: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『冥蝶·通灵』', '『伞·召唤』', '『续命·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                b2: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『冥蝶·通灵』', '『炼狱·召唤』', '『续命·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                b3: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『冥蝶·通灵』', '『炼狱·召唤』', '『伞·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<冥蝶·通灵:专门用来限制敌人最多三名>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『冥蝶·通灵』') {
                                            player.addSkill('smzs_sl_mdtl');
                                            game.log(player, '获得了技能<冥蝶·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                c: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『疾风·通灵』', '『炼狱·召唤』', '『伞·召唤』', '『续命·召唤』').set('prompt', get.prompt('请选择你本局的第二个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<疾风·通灵:可以使一名玩家获得新回合>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            player.useSkill('smzs_sl_xzjn_ac');
                                            event.finish();
                                        }
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            player.useSkill('smzs_sl_xzjn_bc');
                                            event.finish();
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            player.useSkill('smzs_sl_xzjn_c1');
                                            event.finish();
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            player.useSkill('smzs_sl_xzjn_c2');
                                            event.finish();
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            player.useSkill('smzs_sl_xzjn_c3');
                                            event.finish();
                                        }
                                    },
                                },
                                c1: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『疾风·通灵』', '『炼狱·召唤』', '『伞·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<疾风·通灵:可以使一名玩家获得新回合>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                c2: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『疾风·通灵』', '『炼狱·召唤』', '『续命·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<疾风·通灵:可以使一名玩家获得新回合>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<续命·召唤:可以使目标多活两回合>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『续命·召唤』') {
                                            player.addSkill('smzs_sl_xmzh');
                                            game.log(player, '获得了技能<续命·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                                c3: {
                                    content() {
                                        'step 0';
                                        player.chooseControl('『鱼·召唤』', '『疾风·通灵』', '『炼狱·召唤』', '『伞·召唤』').set('prompt', get.prompt('请选择你本局的第三个技能')).set('choiceList', ['<鱼·召唤:可以使一名玩家增加体力上限>', '<疾风·通灵:可以使一名玩家获得新回合>', '<炼狱·召唤:专门用来限制敌人最多三名>', '<伞·召唤:可以抵挡大于1的任意伤害>']);
                                        ('step 1');
                                        if (result.control == '『鱼·召唤』') {
                                            player.addSkill('smzs_sl_yzh');
                                            game.log(player, '获得了技能<鱼·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『疾风·通灵』') {
                                            player.addSkill('smzs_sl_jftl');
                                            game.log(player, '获得了技能<疾风·通灵>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『炼狱·召唤』') {
                                            player.addSkill('smzs_sl_lyzh');
                                            game.log(player, '获得了技能<炼狱·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                        if (result.control == '『伞·召唤』') {
                                            player.addSkill('smzs_sl_szh');
                                            game.log(player, '获得了技能<伞·召唤>');
                                            event.finish();
                                            player.removeSkill('smzs_sl_xzjn');
                                        }
                                    },
                                },
                            },
                        },
                        smzs_sl_yzh: {
                            nobracket: true,
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_yzh.jpg>`,
                            intro: {
                                name: '鱼·召唤',
                                content: '本局拥有『鱼·召唤』技能',
                            },
                            mark: true,
                            enable: 'phaseUse',
                            round: 3,
                            prompt: '选任意一名角色令其获得『灵鱼胖金』技能',
                            selectTarget: 1,
                            filterTarget: true,
                            content() {
                                target.addSkill('smzs_sl_lypj');
                                target.addMark('smzs_sl_lypj', 3);
                                target.markSkill('smzs_sl_lypj');
                            },
                            group: ['smzs_sl_yzh_roundcount'],
                            ai: {
                                order: 16,
                                result: {
                                    target(player, target) {
                                        if (target.hp < player.hp) return 5;
                                        if (player == target && player.hp < 3) return 5;
                                        return 2;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        smzs_sl_lypj: {
                            nobracket: true,
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_yzh.jpg>`,
                            intro: {
                                name: '灵鱼胖金',
                                content: '技能效果还剩#回合',
                            },
                            forced: true,
                            init(player) {
                                player.gainMaxHp();
                                player.recover();
                            },
                            onremove(player) {
                                player.loseMaxHp();
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return (num += 1);
                                },
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.countMark('smzs_sl_lypj') > 0;
                            },
                            content() {
                                'step 0';
                                player.removeMark('smzs_sl_lypj', 1);
                                player.markSkill('smzs_sl_lypj');
                                ('step 1');
                                var x = player.countMark('smzs_sl_lypj');
                                if (x <= 0) {
                                    player.unmarkSkill('smzs_sl_lypj');
                                    player.removeSkill('smzs_sl_lypj');
                                }
                            },
                        },
                        smzs_sl_jftl: {
                            nobracket: true,
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_jftl.jpg>`,
                            intro: {
                                name: '疾风·通灵',
                                content: '本局拥有『疾风·通灵』技能',
                            },
                            mark: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            check(event, player) {
                                return player.countCards('h') > 1 && player.hasFriend();
                            },
                            _priority: 10,
                            prompt: '你可以弃置一张牌(手牌,装备区)选择一名其他玩家,使其获得新的一回合.',
                            content() {
                                'step 0';
                                player.discardPlayerCard(player, 'he', get.prompt('你可以弃置一张牌(手牌,装备区)选择一名其他玩家,使其获得新的一回合.')).set('ai', (button) => get.attitude(player, target) - get.value(button.link));
                                ('step 1');
                                if (result.bool) {
                                    player
                                        .chooseTarget(get.prompt('选择一名其他玩家,使其获得新的一回合.'), 1, function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(player, target);
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.line(event.target);
                                    event.target.phase('nodelay');
                                }
                            },
                            ai: {
                                result: {
                                    target: 1,
                                },
                            },
                        },
                        smzs_sl_mdtl: {
                            nobracket: true,
                            enable: 'phaseUse',
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_mdtl.jpg>`,
                            intro: {
                                name: '冥蝶·通灵',
                                content: '本局拥有『冥蝶·通灵』技能',
                            },
                            round: 2,
                            mark: true,
                            selectCard: 1,
                            position: 'h',
                            filterCard: true,
                            prompt: '你需弃置一张手牌,可以选择至多三名其他玩家进行判定.',
                            selectTarget: [1, 3],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card) {
                                return 11 - get.value(card);
                            }, //QQQ
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1 : 1;
                                });
                                ('step 1');
                                if (result.color == 'red') {
                                    target.turnOver();
                                } else {
                                    target.addSkill('smzs_sl_md'), target.addMark('smzs_sl_md', 2);
                                    target.markSkill('smzs_sl_md');
                                }
                            },
                            ai: {
                                threaten: 2,
                                result: {
                                    target: -3.5,
                                },
                                order: 15,
                                expose: 1,
                            },
                            group: ['smzs_sl_mdtl_roundcount'],
                        },
                        smzs_sl_md: {
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_mdtl.jpg>`,
                            intro: {
                                name: '冥蝶',
                                content: '技能效果还剩#回合',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num -= 1);
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.countMark('smzs_sl_md') > 0;
                            },
                            content() {
                                'step 0';
                                player.removeMark('smzs_sl_md', 1);
                                player.markSkill('smzs_sl_md');
                                ('step 1');
                                var x = player.countMark('smzs_sl_md');
                                if (x <= 0) {
                                    player.unmarkSkill('smzs_sl_md');
                                    player.removeSkill('smzs_sl_md');
                                }
                            },
                        },
                        smzs_sl_lyzh: {
                            nobracket: true,
                            enable: 'phaseUse',
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_lyzh.jpg>`,
                            intro: {
                                name: '炼狱·召唤',
                                content: '本局拥有『炼狱·召唤』技能',
                            },
                            mark: true,
                            selectCard: 1,
                            usable: 1,
                            position: 'h',
                            filterCard: true,
                            prompt: '你需弃置一张手牌,可以选择至多三名其他玩家进行判定.',
                            selectTarget: [1, 3],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card) {
                                return 11 - get.value(card);
                            }, //QQQ
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.suit == 'heart') {
                                    target.addMark('smzs_sl_l', 1);
                                    target.addSkill('smzs_sl_l');
                                    event.finish();
                                } else {
                                    event.goto(2);
                                }
                                ('step 2');
                                if (result.suit == 'diamond') {
                                    target.addMark('smzs_sl_y', 1);
                                    target.addSkill('smzs_sl_y');
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                                result: {
                                    target: -3.5,
                                },
                                order: 14,
                                expose: 1,
                            },
                        },
                        smzs_sl_l: {
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_lyzh.jpg>`,
                            intro: {
                                name: '狱',
                                content: '技能效果还剩#回合',
                            },
                            forced: true,
                            init(player) {
                                player.disableEquip(1);
                                player.disableEquip(2);
                                player.disableEquip(3);
                                player.disableEquip(4);
                                player.disableEquip(5);
                            },
                            onremove(player) {
                                player.enableEquip(1);
                                player.enableEquip(2);
                                player.enableEquip(3);
                                player.enableEquip(4);
                                player.enableEquip(5);
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                player.removeMark('smzs_sl_l', 1);
                                player.unmarkSkill('smzs_sl_l');
                                player.removeSkill('smzs_sl_l');
                            },
                        },
                        smzs_sl_y: {
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_lyzh.jpg>`,
                            intro: {
                                name: '狱',
                                content: '技能效果还剩#回合',
                            },
                            init(player) {
                                player.loseMaxHp(1);
                            },
                            onremove(player) {
                                player.gainMaxHp(1);
                            },
                            forced: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                player.removeMark('smzs_sl_y', 1);
                                player.unmarkSkill('smzs_sl_y');
                                player.removeSkill('smzs_sl_y');
                            },
                        },
                        smzs_sl_szh: {
                            enable: 'phaseUse',
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_szh.jpg>`,
                            intro: {
                                name: '伞·召唤',
                                content: '本局拥有『伞·召唤』技能',
                            },
                            mark: true,
                            round: 3,
                            selectCard: 1,
                            position: 'h',
                            filterCard: true,
                            prompt: '你需弃置一张手牌,可以选择至多三名玩家.',
                            selectTarget: [1, 3],
                            filterTarget: true,
                            content() {
                                target.addSkill('smzs_sl_s');
                            },
                            group: ['smzs_sl_szh_roundcount'],
                            ai: {
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (target.hp < player.hp) return 5;
                                        if (player == target && player.hp < 3) return 5;
                                        return 2;
                                    },
                                },
                                order: 14,
                                expose: 0.8,
                            },
                        },
                        smzs_sl_s: {
                            group: ['smzs_sl_s_ls'],
                            mark: true,
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_szh.jpg>`,
                            intro: {
                                name: '伞',
                                content: '当你受到大于一点的伤害或者流失体力时,移除该技能使伤害变为零.',
                            },
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 1;
                            },
                            content() {
                                trigger.num == 0;
                                player.removeSkill('smzs_sl_s');
                            },
                            subSkill: {
                                ls: {
                                    trigger: {
                                        player: 'loseHpBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num == 0;
                                        player.removeSkill('smzs_sl_s');
                                    },
                                },
                            },
                        },
                        smzs_sl_xmzh: {
                            nobracket: true,
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_xmzh.jpg>`,
                            intro: {
                                name: '续命·召唤',
                                content: '本局拥有『续命·召唤』技能',
                            },
                            enable: 'phaseUse',
                            mark: true,
                            round: 2,
                            selectCard: 1,
                            position: 'h',
                            filterCard(card) {
                                return card.suit == 'heart';
                            },
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target.countMark('smzs_sl_m') <= 0 && target != player;
                            },
                            content() {
                                target.addSkill('smzs_sl_xm');
                                target.addMark('smzs_sl_xm', 2);
                                target.markSkill('smzs_sl_xm');
                            },
                            ai: {
                                threaten: 2.5,
                                result: {
                                    target(player, target) {
                                        if (target.hp <= 2) return 5;
                                        return 2;
                                    },
                                },
                                order: 13,
                                expose: 1,
                            },
                            group: ['smzs_sl_xmzh_roundcount'],
                        },
                        smzs_sl_xm: {
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_xmzh.jpg>`,
                            intro: {
                                name: '续命',
                                content: '技能效果还剩#回合',
                            },
                            group: ['smzs_sl_xm_x'],
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.revive();
                                player.update();
                                player.recover(1);
                                ('step 1');
                                player.maxHp = Infinity;
                                ('step 2');
                                player.hp = player.maxHp;
                                ('step 3');
                                player.addMark('smzs_sl_m', 2);
                                player.addSkill('smzs_sl_m');
                                player.markSkill('smzs_sl_m');
                                player.draw(10);
                                ('step 4');
                                player.removeSkill('smzs_sl_xm');
                                var y = player.countMark('smzs_sl_xm');
                                player.removeMark('smzs_sl_xm', y);
                                player.unmarkSkill('smzs_sl_xm');
                            },
                            subSkill: {
                                x: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('smzs_sl_xm') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeMark('smzs_sl_xm', 1);
                                        player.markSkill('smzs_sl_xm');
                                        ('step 1');
                                        var x = player.countMark('smzs_sl_xm');
                                        if (x <= 0) {
                                            player.unmarkSkill('smzs_sl_xm');
                                            player.removeSkill('smzs_sl_xm');
                                        }
                                    },
                                },
                            },
                        },
                        smzs_sl_thsh: {
                            nobracket: true,
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_thsh.jpg>`,
                            intro: {
                                name: '天狐神火',
                                content: '你受到伤害(伤害来源不为你)时,你可以进行判定.若判定为♠️️,伤害来源受到一点火属性伤害.',
                            },
                            mark: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.source != player;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return card.suit == 'spade' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.suit == 'spade') {
                                    trigger.source.damage(1, 'fire');
                                }
                            },
                        },
                        smzs_gtw_jz: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            audio: 'ext:失名见闻谭/audio:2',
                            forced: true,
                            init(player) {
                                player.storage.smzs_gtw_jz = false;
                            },
                            filter(event, player) {
                                return player.storage.smzs_gtw_jz == false;
                            },
                            content() {
                                var n = trigger.player;
                                if (n.isLinked()) {
                                    player.addMark('smzs_gtw_cygy_kuang', 1);
                                    player.markSkill('smzs_gtw_cygy_kuang');
                                    player.say('这里是最好的猎场.');
                                } else {
                                    n.link();
                                    player.say('这里是最好的猎场.');
                                }
                            },
                        },
                        smzs_gtw_cygy: {
                            nobracket: true,
                            group: ['smzs_gtw_cygy_kuang', 'smzs_gtw_cygy_lie', 'smzs_gtw_cygy_xl', 'smzs_gtw_cygy_ls', 'smzs_gtw_cygy_zm', 'smzs_gtw_cygy_yn', 'smzs_gtw_cygy_xlyn'],
                            trigger: {
                                player: ['smzs_gtw_jzAfter', 'smzs_gtw_xlhsAfter'],
                            },
                            filter(event, player) {
                                return player.countMark('smzs_gtw_cygy_kuang') == 3;
                            },
                            audio: 'ext:失名见闻谭/audio:2',
                            forced: true,
                            content() {
                                'step 0';
                                player.say('你也想被我穿在身上吗？');
                                game.log(player, '进入了修罗状态');
                                ('step 1');
                                player.addSkill('smzs_gtw_bt');
                                player.addMark('smzs_gtw_cygy_kuang', 1);
                                player.markSkill('smzs_gtw_cygy_kuang'); //QQQ
                                ('step 2');
                                player.addMark('smzs_gtw_cygy_lie', 3);
                                player.markSkill('smzs_gtw_cygy_lie');
                                player.markSkill('smzs_gtw_cygy_xl');
                                ('step 3');
                                player.storage.smzs_gtw_cygy_xl = false;
                            },
                            subSkill: {
                                kuang: {
                                    marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_gtw_cygy_kuang.jpg>`,
                                    intro: {
                                        name: '狂',
                                        content: '你拥有#层狂',
                                    },
                                },
                                lie: {
                                    marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_gtw_cygy_lie.jpg>`,
                                    intro: {
                                        name: '猎',
                                        content: '你拥有#层猎',
                                    },
                                },
                                xl: {
                                    forced: true,
                                    trigger: {
                                        player: 'smzs_gtw_lhksEnd',
                                    },
                                    marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_gtw_cygy_xl.jpg>`,
                                    intro: {
                                        name: '修',
                                        content: '你正处于修罗状态',
                                    },
                                    init(player) {
                                        player.storage.smzs_gtw_cygy_xl = true;
                                    },
                                    filter(event, player) {
                                        return player.storage.smzs_gtw_cygy_xl == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeMark('smzs_gtw_cygy_lie', 1);
                                        player.markSkill('smzs_gtw_cygy_lie');
                                        ('step 1');
                                        if (player.countMark('smzs_gtw_cygy_lie') <= 0) {
                                            player.storage.smzs_gtw_cygy_xl = true;
                                            player.unmarkSkill('smzs_gtw_cygy_lie');
                                            game.countPlayer(function (current) {
                                                if (current.isLinked()) {
                                                    player.line(current, 'green');
                                                    current.link();
                                                    player.unmarkSkill('smzs_gtw_cygy_xl');
                                                    var x = player.countMark('smzs_gtw_cygy_kuang');
                                                    player.removeMark('smzs_gtw_cygy_kuang', x);
                                                    player.markSkill('smzs_gtw_cygy_kuang');
                                                }
                                            });
                                        }
                                    },
                                },
                                ls: {
                                    forced: true,
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    _priority: 10,
                                    filter(event, player) {
                                        return player.storage.smzs_gtw_cygy_xl == false;
                                    },
                                    content() {
                                        player.useSkill('smzs_gtw_lhks');
                                    },
                                },
                                zm: {
                                    forced: true,
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    filter(event, player) {
                                        return player.storage.smzs_gtw_cygy_zm == false;
                                    },
                                    init(player) {
                                        player.storage.smzs_gtw_cygy_zm = false;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        player.hp = 1;
                                        player.storage.smzs_gtw_cygy_zm = true;
                                        player.useSkill('smzs_gtw_lhks');
                                        ('step 1');
                                        player.addSkill('smzs_gtw_bt');
                                        ('step 2');
                                        player.addMark('smzs_gtw_cygy_lie', 3);
                                        player.markSkill('smzs_gtw_cygy_lie');
                                        player.markSkill('smzs_gtw_cygy_xl');
                                        ('step 3');
                                        player.storage.smzs_gtw_cygy_xl = false;
                                    },
                                },
                                yn: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_gtw_yn.jpg>`,
                                    nopop: true,
                                    intro: {
                                        content: '隐匿冷却中,还剩#回合',
                                    },
                                    filter(event, player) {
                                        return player.countMark('smzs_gtw_cygy_yn') >= 1;
                                    },
                                    content() {
                                        player.removeMark('smzs_gtw_cygy_yn', 1);
                                        player.unmarkSkill('smzs_gtw_cygy_yn');
                                    },
                                },
                                xlyn: {
                                    init(player) {
                                        player.storage.smzs_gtw_cygy_xlyn = false;
                                    },
                                },
                            },
                        },
                        smzs_gtw_lhks: {
                            nobracket: true,
                            audio: 'ext:失名见闻谭/audio:2',
                            content() {
                                'step 0';
                                player.storage.smzs_gtw_jz = true;
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        current.damage();
                                    }
                                });
                                player.recover();
                                ('step 2');
                                player.storage.smzs_gtw_jz = false;
                            },
                        },
                        smzs_gtw_xlhs: {
                            audio: 'ext:失名见闻谭/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: 1,
                            filterCard: true,
                            check(card) {
                                return 11 - get.value(card);
                            },
                            prompt: '弃置一张牌,发动技能',
                            content() {
                                'step 0';
                                player.storage.smzs_gtw_jz = true;
                                player.storage.smzs_gtw_cygy_xlyn = true;
                                player.say('锁链上有你的名字,直到海枯石烂也无法逃脱.');
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('你可以选择一个目标造成2点伤害并进入<隐匿>状态且获得1层<狂.'), 1, function (card, target, player) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].damage(2);
                                    if (result.targets[0].isLinked()) {
                                    } else {
                                        result.targets[0].link();
                                    }
                                    player.addMark('smzs_gtw_cygy_kuang', 1);
                                    if (player.countMark('smzs_gtw_cygy_yn') <= 0 && player.countMark('smzs_gtw_yn') <= 0) {
                                        player.addSkill('smzs_gtw_yn');
                                    }
                                }
                                ('step 3');
                                player.storage.smzs_gtw_cygy_xlyn = false;
                                player.storage.smzs_gtw_jz = false;
                            },
                            ai: {
                                order: 3,
                                expose: 0.8,
                                threaten: 2,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        smzs_gtw_yn: {
                            group: ['smzs_gtw_yn_gj'],
                            mark: true,
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_gtw_yn.jpg>`,
                            nopop: true,
                            init(player) {
                                player.addMark('smzs_gtw_yn', 3);
                                game.log(player, '进入了隐匿状态');
                            },
                            intro: {
                                content: '锁定技,你不能成为其他角色的卡牌的目标,持续#回合',
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (player != target) return false;
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                'step 0';
                                player.removeMark('smzs_gtw_yn', 1);
                                ('step 1');
                                if (player.countMark('smzs_gtw_yn') <= 0) {
                                    player.removeSkill('smzs_gtw_yn');
                                    player.addMark('smzs_gtw_cygy_yn', 1);
                                    player.markSkill('smzs_gtw_cygy_yn');
                                }
                            },
                            subSkill: {
                                gj: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.smzs_gtw_cygy_xlyn == false;
                                    },
                                    content() {
                                        var x = player.countMark('smzs_gtw_yn');
                                        player.removeMark('smzs_gtw_yn', x);
                                        player.unmarkSkill('smzs_gtw_yn');
                                        player.addMark('smzs_gtw_cygy_yn', 1);
                                        player.markSkill('smzs_gtw_cygy_yn');
                                        player.removeSkill('smzs_gtw_yn');
                                    },
                                },
                            },
                        },
                        smzs_gtw_bt: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'shunshou' || card.name == 'guohe' || card.name == 'lebu' || card.name == 'bingliang') return false;
                                },
                            },
                        },
                        smzs_sl_m: {
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_sl_xmzh.jpg>`,
                            intro: {
                                name: '命',
                                content: '你还有#回合之后死亡',
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.countMark('smzs_sl_m') > 0;
                            },
                            onremove(player) {
                                player.die();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeMark('smzs_sl_m', 1);
                                player.markSkill('smzs_sl_m');
                                ('step 1');
                                var x = player.countMark('smzs_sl_m');
                                if (x <= 0) {
                                    player.unmarkSkill('smzs_sl_m');
                                    player.removeSkill('smzs_sl_m');
                                }
                            },
                        },
                        smzs_dles_xn: {
                            audio: 'ext:失名见闻谭/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.player.addMark('smzs_dles_lxsx', 1);
                                trigger.player.markSkill('smzs_dles_lxsx');
                                trigger.player.addSkill('smzs_dles_lxsx');
                            },
                        },
                        smzs_dles_lxsx: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_dles_lxsx.jpg>`,
                            intro: {
                                name: '流血&失血',
                                content: '你处于流血&失血状态',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeMark('smzs_dles_lxsx', 1);
                                player.markSkill('smzs_dles_lxsx');
                                ('step 1');
                                if (player.countMark('smzs_dles_lxsx') <= 0) {
                                    player.removeSkill('smzs_dles_lxsx');
                                    player.unmarkSkill('smzs_dles_lxsx');
                                }
                            },
                            group: ['smzs_dles_lxsx_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    _priority: 10,
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('smzs_dles_lxsx') >= 5;
                                    },
                                    content() {
                                        player.damage();
                                    },
                                },
                            },
                        },
                        smzs_dles_dssf: {
                            nobracket: true,
                            audio: 'ext:失名见闻谭/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('h', 1, true)
                                    .set('prompt', '你需弃置一张手牌.使你的上家与下家都受到一点伤害并附加一层<血>你回复一点体力.')
                                    .set('ai', function (card) {
                                        return 40 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    a = player.previous;
                                    b = player.next;
                                    if ((a.name = b.name)) {
                                        b.damage();
                                        b.addMark('smzs_dles_lxsx', 1);
                                        b.markSkill('smzs_dles_lxsx');
                                        player.recover();
                                    } else {
                                        a.damage();
                                        a.addMark('smzs_dles_lxsx', 1);
                                        a.markSkill('smzs_dles_lxsx');
                                        b.damage();
                                        b.addMark('smzs_dles_lxsx', 1);
                                        b.markSkill('smzs_dles_lxsx');
                                        player.recover();
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                expose: 0.5,
                                threaten: 2,
                                result: {
                                    player(player, target, card) {
                                        //QQQ
                                        if (player.hp < 2) return 1;
                                        var c = player.previous;
                                        var d = player.next;
                                        if ((c.hp = 1 && get.attitude(player, c) > 0)) return -1;
                                        if ((d.hp = 1 && get.attitude(player, d) > 0)) return -1;
                                        if (get.attitude(player, d) > 0 && get.attitude(player, c) > 0) return -3;
                                        if (player.countCards('h', 'tao') > 0) return 1;
                                        if ((c.hp = 1 && get.attitude(player, c) < 0)) return 1;
                                        if ((d.hp = 1 && get.attitude(player, d) < 0)) return 1;
                                        if (c.countCards('h') == 0 && get.attitude(player, c) < 0) return 1;
                                        if (d.countCards('h') == 0 && get.attitude(player, d) < 0) return 1; //QQQ
                                        return 1;
                                    },
                                },
                            },
                        },
                        smzs_dles_zcdj: {
                            nobracket: true,
                            audio: 'ext:失名见闻谭/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            _priority: 10,
                            forced: true,
                            filter(event, player) {
                                return event.player.countMark('smzs_dles_lxsx') > 0;
                            }, //QQQ
                            content() {
                                trigger.player.addMark('smzs_dles_lxsx', 1);
                                trigger.player.markSkill('smzs_dles_lxsx');
                            },
                        },
                        smzs_dles_lkssdtt: {
                            nobracket: true,
                            audio: 'ext:失名见闻谭/audio:2',
                            enable: 'phaseUse',
                            round: 2,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('选择一个目标.造成1+<血>的层数伤害,如果目标因此死亡,则继续使用该技能.'), 1, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var a = target.hp;
                                        var b = target.countMark('smzs_dles_lxsx');
                                        return -get.attitude(player, target) && b >= 2;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    num = event.target.countMark('smzs_dles_lxsx');
                                    a = num + 1;
                                    event.target.damage(a);
                                } else {
                                    event.finish();
                                }
                            },
                            group: ['smzs_dles_lkssdtt_1', 'smzs_dles_lkssdtt_roundcount'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'dieBefore',
                                    },
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.reason.parent.name == 'smzs_dles_lkssdtt';
                                    },
                                    content() {
                                        player.useSkill('smzs_dles_lkssdtt');
                                    },
                                },
                            },
                            ai: {
                                order: 3,
                                expose: 1,
                                threaten: 3,
                                result: {
                                    player(player, target, card) {
                                        //QQQ
                                        const num = game.countPlayer(function (current) {
                                            var a = current.hp;
                                            var b = current.countMark('smzs_dles_lxsx');
                                            return get.attitude(player, current) < 0 && a <= b + 1;
                                        });
                                        const num1 = game.countPlayer(function (current) {
                                            var a = current.hp;
                                            var b = current.countMark('smzs_dles_lxsx');
                                            return get.attitude(player, current) < 0 && a <= b + 1;
                                        });
                                        if (num >= 1) return 10;
                                        if (num1 >= 1) return 10;
                                        return 0;
                                    },
                                },
                            },
                        },
                        smzs_ztj_yx: {
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_ztj_yx.jpg>`,
                            init(player, skill) {
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
                                    if (skills[i] == 'smzs_ztj_yx' || skills[i] == 'smzs_ztj_cr' || skills[i] == 'smzs_ztj_fy' || skills[i] == 'smzs_ztj_fs' || skills[i] == 'smzs_ztj_pl' || skills[i] == 'smzs_ztj_cf' || skills[i] == 'smzs_ztj_bc') {
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
                            group: ['smzs_ztj_yx_a', 'smzs_ztj_yx_b', 'smzs_ztj_yx_c'],
                            subSkill: {
                                a: {
                                    marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_ztj_yx.jpg>`,
                                    intro: {
                                        name: '晕眩',
                                        content: '你回合开始时,将跳过摸牌阶段、出牌阶段.持续#回合',
                                    },
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    forced: true,
                                    onremove(player, skill) {
                                        player.enableSkill(skill);
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('smzs_ztj_yx');
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                b: {
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('smzs_ztj_yx');
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                c: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.removeMark('smzs_ztj_yx_a', 1);
                                        if (player.countMark('smzs_ztj_yx_a') <= 0) {
                                            player.removeSkill('smzs_ztj_yx');
                                            player.unmarkSkill('smzs_ztj_yx_a');
                                        }
                                    },
                                },
                            },
                        },
                        smzs_ztj_cr: {
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_ztj_cr.jpg>`,
                            intro: {
                                name: '缠绕',
                                content: '你无法获得牌.持续#回合',
                            },
                            trigger: {
                                player: 'gainBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            group: 'smzs_ztj_cr_a',
                            subSkill: {
                                a: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.removeMark('smzs_ztj_cr', 1);
                                        if (player.countMark('smzs_ztj_cr') <= 0) {
                                            player.removeSkill('smzs_ztj_cr');
                                            player.unmarkSkill('smzs_ztj_cr');
                                        }
                                    },
                                },
                            },
                        },
                        smzs_ztj_fy: {
                            init(player, skill) {
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
                                    if (skills[i] == 'smzs_ztj_yx' || skills[i] == 'smzs_ztj_cr' || skills[i] == 'smzs_ztj_fy' || skills[i] == 'smzs_ztj_fs' || skills[i] == 'smzs_ztj_pl' || skills[i] == 'smzs_ztj_cf' || skills[i] == 'smzs_ztj_bc') {
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
                            group: 'smzs_ztj_fy_a',
                            subSkill: {
                                a: {
                                    marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_ztj_fy.jpg>`,
                                    intro: {
                                        name: '封印',
                                        content: '你的所有技能失效.持续#回合',
                                    },
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.removeMark('smzs_ztj_fy_a', 1);
                                        if (player.countMark('smzs_ztj_fy_a') <= 0) {
                                            player.removeSkill('smzs_ztj_fy');
                                            player.unmarkSkill('smzs_ztj_fy_a');
                                        }
                                    },
                                },
                            },
                        },
                        smzs_ztj_fs: {
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_ztj_fs.jpg>`,
                            intro: {
                                name: '粉碎',
                                content: '你每打出或使用牌时,将随机弃置一张牌.持续#回合',
                            },
                            trigger: {
                                player: ['useCareBegin', 'respondBegin'],
                            },
                            forced: true,
                            content() {
                                player.randomDiscard('he', 1, true);
                            },
                            group: 'smzs_ztj_fs_a',
                            subSkill: {
                                a: {
                                    a: {
                                        trigger: {
                                            player: 'phaseEnd',
                                        },
                                        forced: true,
                                        content() {
                                            player.removeMark('smzs_ztj_fs', 1);
                                            if (player.countMark('smzs_ztj_fs') <= 0) {
                                                player.removeSkill('smzs_ztj_fs');
                                                player.unmarkSkill('smzs_ztj_fs');
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        smzs_qszj_ckl: {
                            audio: 'ext:失名见闻谭/audio:1',
                            nobracket: true,
                            group: ['smzs_qszj_ckl_a'],
                            intro: {
                                name: '查克拉',
                                content: '你拥有#层查克拉',
                            },
                            init(player) {
                                player.addMark('smzs_qszj_ckl', 3);
                                player.markSkill('smzs_qszj_ckl');
                                game.log(player, '你获得了三层查克拉');
                            },
                            subSkill: {
                                a: {
                                    audio: 1,
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    frequen: true,
                                    forced: true,
                                    _priority: 10,
                                    content() {
                                        if (!player.hasSkill('smzs_qszj_xrzt')) {
                                            player.addMark('smzs_qszj_ckl', 1);
                                            player.markSkill('smzs_qszj_ckl');
                                            game.log(player, '你获得了一层查克拉标记');
                                        } else {
                                            player.addMark('smzs_qszj_ckl', 2);
                                            player.markSkill('smzs_qszj_ckl');
                                            //QQQ
                                            game.log(player, '你获得了两层查克拉标记');
                                        }
                                    },
                                },
                            },
                        },
                        smzs_qszj_xrms: {
                            nobracket: true,
                            audio: 'ext:失名见闻谭/audio:1',
                            group: 'smzs_qszj_xrms_a',
                            trigger: {
                                global: 'changeHp',
                            },
                            init(player) {
                                player.storage.smzs_qszj_xrms = false;
                            },
                            filter(event, player) {
                                return player.storage.smzs_qszj_xrms == false && player.hp <= 2 && player.storage.smzs_qszj_xrms_a == false;
                            },
                            priprity: 10,
                            promot: '是否开启仙人模式',
                            content() {
                                player.storage.smzs_qszj_xrms = true;
                                player.addSkill('smzs_qszj_xrzt');
                            },
                            subSkill: {
                                a: {
                                    init(player) {
                                        player.storage.smzs_qszj_xrms_a = false;
                                    },
                                },
                            },
                            ai: {
                                order: 16,
                                expose: 0,
                                threaten: 2.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        smzs_qszj_xrzt: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += 1;
                            },
                            group: ['smzs_qszj_xrzt_a', 'smzs_qszj_xrzt_b'],
                            subSkill: {
                                a: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                    },
                                },
                                b: {
                                    trigger: {
                                        player: 'changeHp',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.smzs_qszj_xrzt == true && player.hp == player.maxHp;
                                    },
                                    content() {
                                        player.removeSkill('smzs_qszj_xrzt');
                                        game.log(player, '仙人模式结束');
                                    },
                                },
                            },
                        },
                        smzs_qszj_gl: {
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.smzs_qszj_gl = false;
                            },
                            filter(event, player) {
                                return player.storage.smzs_qszj_gl == false && player.countMark('smzs_qszj_ckl') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('你选择一个目标对其使用怪力造成' + get.translation(player.countMark('smzs_qszj_ckl')) + '点伤害'), 1, function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    var q = player.countMark('smzs_qszj_ckl');
                                    return get.attitude(player, target) <= 0 && target.hp <= q;
                                    return get.attitude(player, target) <= 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    n = player.countCards('h');
                                    player.chooseToDiscard('h', player, n, true).set('ai', function (card) {
                                        return 1;
                                    });
                                    m = player.countMark('smzs_qszj_ckl');
                                    result.targets[0].damage(m);
                                    player.removeMark('smzs_qszj_ckl', m);
                                    player.unmarkSkill('smzs_qszj_ckl');
                                    player.removeSkill('smzs_qszj_gl');
                                    player.storage.smzs_qszj_gl = true;
                                }
                            },
                            ai: {
                                order: 15,
                                expose: 1,
                                threaten: 3,
                                result: {
                                    player(player) {
                                        const w = player.countMark('smzs_qszj_ckl'); //QQQ
                                        if (player.hp <= 2) return 1;
                                        if (player.countCards('h') <= 0) return 1;
                                        const n = game.countPlayer(function (current) {
                                            if (current != player && get.attitude(player, current) <= 0) {
                                                current.hp <= w;
                                            }
                                        });
                                        if (n >= 1) return 3;
                                        return -2;
                                    },
                                },
                            },
                        },
                        smzs_qszj_mdms_sjjd: {
                            audio: 'ext:失名见闻谭/audio:1',
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { color: 'red' }) && player.countMark('smzs_qszj_ckl') > 0 && player.hp != player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('smzs_qszj_mdms_sjjd'); //QQQ
                                player
                                    .chooseToDiscard('he', { color: 'red' }, 1)
                                    .set('prompt', '你需要弃置一张红色牌,来使用该技能.')
                                    .set('ai', function (card) {
                                        return 40 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    q = player.hp;
                                    w = player.maxHp;
                                    e = w - q;
                                    player.removeMark('smzs_qszj_ckl', e);
                                    player.recover(e);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 14,
                                expose: 0,
                                threaten: 3,
                                result: {
                                    player(player) {
                                        const w = player.countMark('smzs_qszj_ckl'); //QQQ
                                        if (player.maxHp <= player.hp + w) return 1;
                                        if (player.hp <= 1) return 1;
                                        if (player.hasSkill('smzs_qszj_xrzt')) return -2;
                                    },
                                },
                            },
                        },
                        smzs_qszj_md_hsjjl: {
                            audio: 'ext:失名见闻谭/audio:1',
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('smzs_qszj_ckl') >= 1 && player.countCards('he', { suit: 'club' });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('he', { suit: 'club' }, 1)
                                    .set('prompt', '你需要弃置一张♣️️牌,来发动该技能.')
                                    .set('ai', function (card) {
                                        return 40 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.removeMark('smzs_qszj_ckl', 1);
                                    player.chooseTarget(get.prompt('选择一名其他玩家,使其陷入晕眩一回合.'), 1, function (card, player, target) {
                                        return target != player;
                                    }).ai = function (target) {
                                        return get.attitude(player, target) <= 0 && !target.hasSkill('smzs_ztj_cr');
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    t = result.targets[0];
                                    t.addSkill('smzs_ztj_yx');
                                    t.addMark('smzs_ztj_yx_a', 1);
                                    t.markSkill('smzs_ztj_yx_a');
                                }
                            },
                            ai: {
                                order: 6,
                                expose: 1,
                                threaten: 2,
                                result: {
                                    player(player) {
                                        if (player.countCards <= 1) return -2;
                                        return 1;
                                    },
                                },
                            },
                        },
                        smzs_qszj_md_mlzs: {
                            enable: 'phaseUse',
                            nobracket: true,
                            usable: 1,
                            audio: 'ext:失名见闻谭/audio:1',
                            filter(event, player) {
                                return player.countMark('smzs_qszj_ckl') >= 1 && player.countCards('he', { color: 'black' });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('he', { color: 'black' }, 1)
                                    .set('prompt', '你需要弃置一张黑色牌,来发动该技能.')
                                    .set('ai', function (card) {
                                        return 40 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.removeMark('smzs_qszj_ckl');
                                    player.chooseTarget(get.prompt('选择一名其他玩家,使其陷入缠绕一回合.'), 1, function (card, player, target) {
                                        return target != player;
                                    }).ai = function (target) {
                                        return get.attitude(player, target) <= 0 && !target.hasSkill('smzs_ztj_yx');
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    t = result.targets[0];
                                    t.addSkill('smzs_ztj_cr');
                                    t.addMark('smzs_ztj_cr', 1);
                                    t.markSkill('smzs_ztj_cr');
                                }
                            },
                            ai: {
                                order: 5,
                                expose: 1,
                                threaten: 3,
                                result: {
                                    player(player) {
                                        if (player.countCards <= 1) return -2;
                                        return 1;
                                    },
                                },
                            },
                        },
                        smzs_qszj_xs_msm: {
                            audio: 'ext:失名见闻谭/audio:1',
                            enable: 'phaseUse',
                            nobracket: true,
                            round: 2,
                            filter(event, player) {
                                return player.countMark('smzs_qszj_ckl') >= 2 && player.hasSkill('smzs_qszj_xrzt') && player.countCards('h', { color: 'red' });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('h', { color: 'red' }, 1)
                                    .set('prompt', '你需要弃置一张红色牌,来发动该技能.')
                                    .set('ai', function (card) {
                                        return 40 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseTarget(get.prompt('选择一名其他玩家,使其封印两回合.'), 1, function (card, player, target) {
                                        return target != player;
                                    }).ai = function (target) {
                                        return get.attitude(player, target) <= 0 && !player.hasSkill('smzs_ztj_yx');
                                    };
                                    player.removeMark('smzs_qszj_ckl', 2);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    t = result.targets[0];
                                    t.addSkill('smzs_ztj_fy');
                                    t.addMark('smzs_ztj_fy', 2);
                                    t.markSkill('smzs_ztj_fy');
                                }
                            },
                            ai: {
                                order: 9,
                                expose: 1,
                                threaten: 3.5,
                                result: {
                                    player(player) {
                                        if (player.countCards <= 1) return -2;
                                        return 1;
                                    },
                                },
                            },
                            group: ['smzs_qszj_xs_msm_roundcount'],
                        },
                        smzs_qszj_xf_md_zsqs: {
                            audio: 'ext:失名见闻谭/audio:1',
                            init(player) {
                                player.storage.smzs_qszj_xf_md_zsqs = false;
                            },
                            nobracket: true,
                            filter(event, player) {
                                return player.storage.smzs_qszj_xf_md_zsqs == false;
                            },
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player.storage.smzs_qszj_xf_md_zsqs = true;
                                player.storage.smzs_qszj_xrms_a = true;
                                ('step 1');
                                player.addSkill('smzs_qszj_xrzt');
                                player.addMark('smzs_qszj_xf_md_zsqs', 3);
                                player.markSkill('smzs_qszj_xf_md_zsqs');
                                player.addSkill('smzs_qszj_fs');
                            },
                            group: 'smzs_qszj_xf_md_zsqs_a',
                            subSkill: {
                                a: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.smzs_qszj_xf_md_zsqs == true;
                                    },
                                    content() {
                                        player.removeMark('smzs_qszj_xf_md_zsqs', 1);
                                        if (player.countMark('smzs_qszj_xf_md_zsqs') <= 0) {
                                            player.removeSkill('smzs_qszj_xrzt');
                                            player.removeSkill('smzs_qszj_fs');
                                            player.unmarkSkill('smzs_qszj_xf_md_zsqs');
                                            player.storage.smzs_qszj_xrms_a = false;
                                        }
                                    },
                                },
                            },
                            ai: {
                                order: 17,
                                expose: 1,
                                threaten: 3.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        smzs_qszj_fs: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.player.addSkill('smzs_ztj_fs');
                                trigger.player.addMark('smzs_ztj_fs');
                                trigger.player.markSkill('smzs_ztj_fs');
                            },
                        },
                        smzs_qszj_dshf: {
                            audio: 'ext:失名见闻谭/audio:1',
                            enable: 'phaseUse',
                            nobracket: true,
                            filter(event, player) {
                                return player.hasSkill('smzs_qszj_xrzt');
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('选择一名其他玩家,使其受到千伤害.'), 1, function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    return (
                                        get.attitude(player, target) <= 0 &&
                                        game.countPlayer(function (current) {
                                            if (current != target && get.attitude(player, current)) {
                                                target.hp >= current;
                                            }
                                        })
                                    );
                                };
                                ('step 1');
                                if (result.bool) {
                                    q = player.countMark('smzs_qszj_ckl');
                                    player.removeMark('smzs_qszj_ckl', q);
                                    t = result.targets[0];
                                    player.addMark('smzs_qszj_dshf', 10);
                                    player.storage.smzs_qszj_xrms_a = false;
                                    player.removeSkill('smzs_qszj_xrzt');
                                    game.countPlayer(function (current) {
                                        if (current != player) {
                                            current.addSkill('smzs_ztj_yx');
                                            current.addMark('smzs_ztj_yx_a', 1);
                                            current.markSkill('smzs_ztj_yx_a');
                                        }
                                    });
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.removeMark('smzs_qszj_dshf', 1);
                                t.damage(10);
                                event.goto(3);
                                ('step 3');
                                if (player.countMark('smzs_qszj_dshf') > 0) {
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 17,
                                expose: 1,
                                threaten: 4,
                                result: {
                                    player(player) {
                                        if ((player.hp = player.maxHp - 1 && player.storage.smzs_qszj_xrms_a == false)) return 3;
                                        if (player.storage.smzs_qszj_xf_md_zsqs == true && player.countMark('smzs_qszj_xf_md_zsqs') <= 1) return 3;
                                        return -2;
                                    },
                                },
                            },
                        },
                        smzs_zy_lm: {
                            audio: 'ext:失名见闻谭/audio:2',
                            trigger: {
                                player: 'changeHpEnd',
                            },
                            forced: true,
                            content() { },
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (from.hp > 2) distance - 1;
                                },
                                globalTo(from, to, distance) {
                                    if (to.hp <= 2) distance + 1;
                                }, //qqq
                            },
                        },
                        smzs_zy_jlzl: {
                            audio: 'ext:失名见闻谭/audio:2',
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('h', 1, true)
                                    .set('prompt', '你需弃一张手牌,即可使用该技能')
                                    .set('ai', function (card) {
                                        return 40 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseControl('上家', '下家').set('ai', function () {
                                        var q = player.next;
                                        var w = player.previous;
                                        if (get.attitude(player, q) <= 0) {
                                            return '下家';
                                        } else return '上家';
                                    }); //QQQ
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.control == '上家') {
                                    a = player.previous;
                                    a.damage();
                                    game.swapSeat(a, player);
                                }
                                if (result.control == '下家') {
                                    b = player.next;
                                    b.damage();
                                    game.swapSeat(b, player);
                                }
                            },
                            ai: {
                                order: 10,
                                expose: 1,
                                threaten: 2,
                                result: {
                                    player(player, target, card) {
                                        const e = player.next;
                                        const r = player.previous;
                                        if (get.attitude(player, e) < 0) return 2; //QQQ
                                        if (get.attitude(player, r) < 0) return 2;
                                        retrun - 1;
                                    }, //QQQ
                                },
                            },
                        },
                        smzs_zy_pyzl: {
                            audio: 'ext:失名见闻谭/audio:2',
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('hej') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('hej', 1, true)
                                    .set('prompt', '你需弃一张牌,即可使用该技能')
                                    .set('ai', function (card) {
                                        return 40 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player
                                        .chooseTarget(1, true, function (event, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(player, target) < 0;
                                        }); //QQQ
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].damage();
                                    player.recover();
                                }
                            },
                            ai: {
                                order: 11,
                                expose: 1,
                                threaten: 2.2,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        smzs_zy_txzl: {
                            audio: 'ext:失名见闻谭/audio:2',
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('h', 1, true)
                                    .set('prompt', '你需弃一张手牌,即可使用该技能')
                                    .set('ai', function (card) {
                                        return 40 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player
                                        .chooseTarget(1, true, function (event, player, target) {
                                            return target != player;
                                        })
                                        .set('prompt', '选择一名其他玩家,来释放天翔之龙')
                                        .set('ai', function (target) {
                                            var a = target.previous;
                                            var b = target.next;
                                            if (get.attitude(player, target) < 0) return 1;
                                            if (get.attitude(player, a) < 0) return 1;
                                            if (get.attitude(player, b) < 0) return 1;
                                            if (get.attitude(player, a) > 0) return -1;
                                            if (get.attitude(player, b) > 0) return -1;
                                            if (get.attitude(player, a) > 0 && get.attitude(player, b) > 0) return -3;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    t = result.targets[0];
                                    t.damage();
                                    t.addSkill('smzs_ztj_yx');
                                    t.addMark('smzs_ztj_yx', 1);
                                    t.markSkill('smzs_ztj_yx');
                                    s = t.next;
                                    w = t.previous;
                                    if (s == player && w == player) {
                                        event.finish();
                                    }
                                    if (s != player && w != player) {
                                        s.addSkill('smzs_ztj_yx');
                                        s.addMark('smzs_ztj_yx', 1);
                                        s.markSkill('smzs_ztj_yx');
                                        w.addSkill('smzs_ztj_yx');
                                        w.addMark('smzs_ztj_yx', 1);
                                        w.markSkill('smzs_ztj_yx');
                                    }
                                    if (s == player && w != player) {
                                        w.addSkill('smzs_ztj_yx');
                                        w.addMark('smzs_ztj_yx', 1);
                                        w.markSkill('smzs_ztj_yx');
                                    }
                                    if (s != player && w == player) {
                                        s.addSkill('smzs_ztj_yx');
                                        s.addMark('smzs_ztj_yx', 1);
                                        s.markSkill('smzs_ztj_yx');
                                    }
                                }
                            },
                            ai: {
                                order: 8,
                                expose: 1,
                                threaten: 2,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        smzs_jxk_hsqj: {
                            audio: 'ext:失名见闻谭/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('选择一名其他玩家,对其进行三次不计算次数的杀.'), 1, function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    return get.attitude(player, target) <= 0 && !target.hasSkill('smzs_ztj_yx');
                                };
                                ('step 1');
                                if (result.bool) {
                                    t = result.targets[0];
                                    player.addMark('smzs_jxk_hsqj', 3);
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player
                                    .chooseToDiscard('h', true, 1)
                                    .set('prompt', '你需要弃置一张手牌,来发动横扫千军.')
                                    .set('ai', function (card) {
                                        return 40 - get.value(card);
                                    });
                                ('step 3');
                                player.useCard({ name: 'sha' }, t, false);
                                player.removeMark('smzs_jxk_hsqj');
                                player.useSkill('smzs_jxk_hsqj_a');
                                event.goto(4);
                                ('step 4');
                                if (player.countMark('smzs_jxk_hsqj') > 0) {
                                    event.goto(5);
                                } else {
                                    event.finish();
                                    player.addSkill('smzs_ztj_pl');
                                    player.addMark('smzs_ztj_pl');
                                    player.markSkill('smzs_ztj_pl');
                                }
                                ('step 5');
                                if (player.countCards('h') >= 0) {
                                    event.goto(2);
                                } else {
                                    event.goto(3);
                                }
                            },
                            group: 'smzs_jxk_hsqj_a',
                            subSkill: {
                                a: {
                                    audio: 'ext:失名见闻谭/audio:1',
                                    content() { },
                                },
                            },
                            ai: {
                                order: 2,
                                expose: 1,
                                threaten: 2.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        smzs_jxk_pxkg: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hp > 1;
                            },
                            nobracket: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('选择一名其他玩家.'), 1, function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    return (
                                        get.attitude(player, target) <= 0 &&
                                        game.countPlayer(function (current) {
                                            if (current != player && get.attitude(player, current) <= 0) {
                                                current.hp <= player.hp - 1;
                                            }
                                        })
                                    );
                                    return get.attitude(player, target) <= 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    t = result.targets[0];
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.damage();
                                player.useCard({ name: 'sha' }, t, false);
                                player.useSkill('smzs_jxk_pxkg_a');
                                event.goto(3);
                                ('step 3');
                                if (player.hp < 2) {
                                    event.finish();
                                } else {
                                    event.goto(4);
                                }
                                ('step 4');
                                player
                                    .chooseControl('是', '否')
                                    .set('ai', function (event, player) {
                                        if (t.hp <= player.hp - 1) return '是';
                                        return '否';
                                    })
                                    .set('prompt', get.prompt('是否继续发动破血狂功'));
                                ('step 5');
                                if (result.control == '是') {
                                    event.goto(2);
                                }
                            },
                            group: 'smzs_jxk_pxkg_a',
                            subSkill: {
                                a: {
                                    audio: 'ext:失名见闻谭/audio:1',
                                    content() { },
                                },
                            },
                            ai: {
                                order: 1,
                                expose: 1,
                                threaten: 1,
                                result: {
                                    player(player) {
                                        n = game.countPlayer(function (current) {
                                            if (current != player && get.attitude(player, current) <= 0) {
                                                current.hp <= player.hp - 1;
                                            }
                                        });
                                        if (n >= 1) return 2;
                                        return -3;
                                    },
                                },
                            },
                        },
                        smzs_jxk_hfzr: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:失名见闻谭/audio:1',
                            nobracket: true,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('h', true, 1)
                                    .set('prompt', '你需要弃置一张手牌,来使用该技能.')
                                    .set('ai', function (card) {
                                        return 40 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseTarget(get.prompt('选择一名其他玩家.'), 1, function (card, player, target) {
                                        return target != player;
                                    }).ai = function (target) {
                                        return get.attitude(player, target) <= 0;
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    t = result.targets[0];
                                    t.addMark('smzs_jxk_hfzr');
                                }
                            },
                            group: 'smzs_jxk_hfzr_a',
                            subSkill: {
                                a: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    audio: 'ext:失名见闻谭/audio:1',
                                    froced: true,
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            game.countPlayer(function (current) {
                                                return current != player && current.countMark('smzs_jxk_hfzr');
                                            }) >= 1
                                        ); //QQQ
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current != player && current.countMark('smzs_jxk_hfzr')) {
                                                player.line(current, 'red');
                                                current.damage();
                                                current.removeMark('smzs_jxk_hfzr');
                                            }
                                        });
                                    },
                                },
                            },
                            ai: {
                                order: 10,
                                threaten: 1.5,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') <= 1) return -2;
                                        return 1;
                                    },
                                },
                            },
                        },
                        smzs_jxk_pfcz: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            marktext: '破',
                            intro: {
                                name: '破釜沉舟',
                                content: '你受到来自剑侠客的伤害时,伤害+1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source != player;
                            },
                            content() {
                                trigger.source.addMark('smzs_jxk_pfcz');
                                trigger.source.markSkill('smzs_jxk_pfcz');
                            },
                            group: 'smzs_jxk_pfcz_a',
                            subSkill: {
                                a: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.countMark('smzs_jxk_pfcz') > 0 && event.player != player;
                                    },
                                    content() {
                                        trigger.num += 1;
                                    },
                                },
                            },
                        },
                        smzs_ztj_pl: {
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_ztj_pl.jpg>`,
                            intro: {
                                name: '疲劳',
                                content: '你将跳过出牌阶段.持续#回合',
                            },
                            forced: true,
                            content() {
                                player.removeMark('smzs_ztj_pl');
                                if (player.countMark('smzs_ztj_pl') <= 0) {
                                    player.removeSkill('smzs_ztj_pl');
                                    player.unmarkSkill('smzs_ztj_pl');
                                }
                                trigger.cancel();
                            },
                        },
                        smzs_ydj_sl: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:失名见闻谭/audio:1',
                            group: ['smzs_ydj_sl_a', 'smzs_ydj_sl_b', 'smzs_ydj_sl_c'],
                            content() {
                                'step 0';
                                player.turnOver();
                                player.addMark('smzs_ydj_sl', 6);
                                ('step 1');
                                player.storage.smzs_ydj_sl_c = false;
                                player
                                    .chooseTarget(get.prompt('选择一个目标(不为你)进行挥砍.'), 1, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    t = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (player.countMark('smzs_ydj_sl') > 0) {
                                    player.removeMark('smzs_ydj_sl', 1);
                                    event.goto(4);
                                } else {
                                    event.finish();
                                    player.useSkill('smzs_ydj_sl_b');
                                }
                                ('step 4');
                                t.damage(1);
                                player.useSkill('smzs_ydj_sl_a');
                                ('step 5');
                                if (player.storage.smzs_ydj_sl_c == true) {
                                    player.addMark('smzs_ydj_sl', 2);
                                    event.goto(1);
                                } else event.goto(3);
                            },
                            subSkill: {
                                a: {
                                    audio: 'ext:失名见闻谭/audio:4',
                                    content() { },
                                },
                                b: {
                                    audio: 'ext:失名见闻谭/audio:1',
                                    content() { },
                                },
                                c: {
                                    trigger: {
                                        global: 'dieBefore',
                                    },
                                    init(player) {
                                        player.storage.smzs_ydj_sl_c = false;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.smzs_ydj_sl_c == false;
                                    },
                                    content() {
                                        player.storage.smzs_ydj_sl_c = true;
                                    },
                                },
                            },
                        },
                        smzs_lm_gzxz: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            audio: 'ext:失名见闻谭/audio:1',
                            nobracket: true,
                            forced: true,
                            content() {
                                trigger.num += player.getDamagedHp();
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        smzs_lm_xm: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'wanjian') return false;
                                },
                            },
                        },
                        smzs_lm_we_xm: {
                            enable: 'phaseUse',
                            nobracket: true,
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('h', 1, true)
                                    .set('prompt', '你需弃一张手牌,即可使用该技能')
                                    .set('ai', function (card) {
                                        return 40 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseTarget(get.prompt('选择三名其他玩家,使其附上一层冰刺.'), 3, function (card, player, target) {
                                        return target != player;
                                    }).ai = function (target) {
                                        return get.attitude(player, target) <= 0 && !target.hasSkill('smzs_ztj_yx');
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].addSkill('smzs_ztj_bc');
                                        result.targets[i].addMark('smzs_ztj_bc');
                                        result.targets[i].markSkill('smzs_ztj_bc');
                                    }
                                }
                            },
                            ai: {
                                order: 14,
                                expose: 1,
                                threaten: 2.5,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') > 1) return 2;
                                        return -1;
                                    },
                                },
                            },
                        },
                        smzs_lm_ye_xm: {
                            filter(event, player) {
                                return player.countCards('h', { color: 'black' });
                            },
                            enable: 'phaseUse',
                            nobracket: true,
                            usable: 1,
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('h', 1, true, function (card) {
                                        return get.color(card) == 'black';
                                    })
                                    .set('prompt', '你需弃一张黑色手牌,即可使用该技能')
                                    .set('ai', function (card) {
                                        return 40 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseTarget(get.prompt('选择一名其他玩家,使你对其嘲讽.'), 1, function (card, player, target) {
                                        return target != player;
                                    }).ai = function (target) {
                                        return get.attitude(player, target) <= 0 && !target.hasSkill('smzs_ztj_yx');
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    t = result.targets[0];
                                    t.storage.smzs_ztj_cf = player;
                                    t.addSkill('smzs_ztj_cf');
                                    t.markSkill('smzs_ztj_cf');
                                    t.addMark('smzs_ztj_cf_a');
                                    t.markSkill('smzs_ztj_cf_a');
                                }
                            },
                            ai: {
                                order: 10,
                                expose: 1,
                                threaten: 2,
                                result: {
                                    player(player) {
                                        if (player.hp > 2) return 1;
                                        if (player.countCards('h') > 1) return 1;
                                        return -1;
                                    },
                                },
                            },
                        },
                        smzs_hczz_zl: {
                            trigger: {
                                player: ['smzs_hczz_yyEnd', 'smzs_hczz_tsEnd', 'smzs_hczz_gcEnd'],
                            },
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_hczz_zl.jpg>`,
                            intro: {
                                name: '逐流',
                                content: '你的下张杀造成伤害时,可以额外指定一名玩家(不包括你和杀的目标)造成一点伤害并自己获得一层水球.不可叠加',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('smzs_hczz_zl') < 1;
                            },
                            content() {
                                player.addMark('smzs_hczz_zl');
                                player.markSkill('smzs_hczz_zl');
                            },
                            group: 'smzs_hczz_zl_a',
                            subSkill: {
                                a: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && player.countMark('smzs_hczz_zl') > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('选择一名其他玩家,释放技能逐流.'), 1, function (card, player, target) {
                                                return target != player && target != trigger.player;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            t = result.targets[0];
                                            t.damage();
                                            player.removeMark('smzs_hczz_zl');
                                            if (player.countMark('smzs_hczz_zl') <= 0) {
                                                player.unmarkSkill('smzs_hczz_zl');
                                            }
                                            player.addMark('smzs_hczz_gc');
                                            player.markSkill('smzs_hczz_gc');
                                        }
                                        /*player.chooseTarget(get.prompt('选择一名其他玩家,进行释放逐流.'),1,function(card,event,player,target,trigger){  
                                   return target!=player&&target!=trigger.player;  
                               }).ai=function(target){  
                                   return get.attitude(player,target)<=0; 
                               }; 
                                       "step 1"
                                       if(result.bool){
                                           t=result.targets[0];
                                           t.damage();
                                           player.removeMark('smzs_hczz_zl');
                                           if(player.countMark('smzs_hczz_zl')<=0){
                                               player.unmarkSkill('smzs_hczz_zl');
                                           }
                                           player.addMark('smzs_hczz_gc');
                                           player.markSkill('smzs_hczz_gc');
                                       }*/
                                    },
                                },
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        smzs_hczz_yy: {
                            audio: 'ext:失名见闻谭/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('h', 1, true).set('ai', function (card) {
                                    return 40 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player
                                        .chooseTarget(get.prompt('选择一名其他玩家,造成一点<span style=\"color: #9933ff\"><abbr title=\"定义,目标的攻击范围内所有人(包括目标不包括自己).\"><mark><ins>范围性</ins></mark></abbr></span>伤害并自己获得一层水球.'), 1, function (event, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            q = game.countPlayer(function (current) {
                                                return get.distance(target, current, 'attack') <= 1 && get.attitude(target, current) > 0;
                                            });
                                            return get.attitude(player, target) < 0 && q >= 4;
                                            return get.attitude(player, target) < 0 && q >= 3;
                                            return get.attitude(player, target) < 0 && q >= 2;
                                            return get.attitude(player, target) < 0 && q >= 1;
                                            return get.attitude(player, target) < 0;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    t = result.targets[0];
                                    game.countPlayer(function (current) {
                                        if (get.distance(t, current, 'attack') <= 1 && current != player) {
                                            player.line(current, 'blue');
                                            current.damage();
                                        }
                                    });
                                    player.addMark('smzs_hczz_gc');
                                    player.markSkill('smzs_hczz_gc');
                                }
                            },
                            ai: {
                                threaten: 3.5,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') <= 1) return -2;
                                        return 2;
                                    },
                                },
                                order: 14,
                                expose: 1,
                            },
                        },
                        smzs_hczz_ts: {
                            audio: 'ext:失名见闻谭/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('选择一名其他玩家,释放技能吞噬.'), 1, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    t = result.targets[0];
                                    var num = [0, 1, 2].randomGet();
                                    t.damage(1);
                                    t.randomDiscard('he', num);
                                    game.log(t, '随机弃置了', num, '张手牌.');
                                    player.addMark('smzs_hczz_gc', num);
                                    player.markSkill('smzs_hczz_gc');
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                t.damage(1);
                            },
                            ai: {
                                order: 10,
                                expose: 1,
                                threaten: 3,
                                result: {
                                    player: 1,
                                    target: -1,
                                },
                            },
                        },
                        smzs_hczz_gc: {
                            audio: 'ext:失名见闻谭/audio:1',
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_hczz_gc.jpg>`,
                            intro: {
                                name: '水球',
                                content: '你拥有#层水球,手牌上限+#',
                            },
                            init(player) {
                                player.storage.smzs_hczz_gc = false;
                            },
                            filter(event, player) {
                                return player.storage.smzs_hczz_gc == false && player.hp < player.maxHp;
                            },
                            enable: 'phaseUse',
                            content() {
                                player.storage.smzs_hczz_gc = true;
                                n = player.countMark('smzs_hczz_gc');
                                player.removeMark('smzs_hczz_gc', n);
                                player.recover(n);
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    var a = player.countMark('smzs_hczz_gc');
                                    return (num += a);
                                },
                            },
                        },
                        smzs_ztj_cf: {
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_ztj_cf.jpg>`,
                            intro: {
                                content: '使用牌只能指定$为目标',
                            },
                            mod: {
                                playerEnabled(card, player, target) {
                                    return player.storage.smzs_ztj_cf == target;
                                },
                            },
                            group: 'smzs_ztj_cf_a',
                            subSkill: {
                                a: {
                                    marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_ztj_cf.jpg>`,
                                    intro: {
                                        name: '嘲讽',
                                        content: '使用牌只能指定$为目标',
                                    },
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.removeMark('smzs_ztj_cf_a');
                                        if (player.countMark('smzs_ztj_cf_a') <= 0) {
                                            player.unmarkSkill('smzs_ztj_cf_a');
                                            player.unmarkSkill('smzs_ztj_cf');
                                            player.removeSkill('smzs_ztj_cf');
                                        }
                                    },
                                },
                            },
                        },
                        smzs_ztj_bc: {
                            trigger: {
                                player: 'useCardEnd',
                            },
                            forced: true,
                            marktext: `<img style=width:26px src=extension/失名见闻谭/image/smzs_ztj_bc.jpg>`,
                            intro: {
                                name: '冰刺',
                                content: '你每使用牌时,将受到一点伤害.还剩余#次',
                            },
                            content() {
                                'step 0';
                                player.damage();
                                ('step 1');
                                player.removeMark('smzs_ztj_bc');
                                player.markSkill('smzs_ztj_bc');
                                if (player.countMark('smzs_ztj_bc') <= 0) {
                                    player.unmarkSkill('smzs_ztj_bc');
                                    player.removeSkill('smzs_ztj_bc');
                                }
                            },
                        },
                    },
                    translate: {
                        smzs_zdxcxhsfgclsm: "<body><samp id='在地下城邂逅是否搞错了什么？'><small><strong>在地下城邂逅是否搞错了什么？</strong></small></samp></body><style>#在地下城邂逅是否搞错了什么？{animation:change 10s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
                        smzs_yys: '<span style="div{width:100px;height:100px;background:red;animation:myfirst 5s;-moz-animation:myfirst 5s;-webkit-animation:myfirst 5s;-o-animation:myfirst 5s;}@keyframes myfirst{0%{transform:rotate(0deg);} 100%{transform:rotate(360deg);}}">阴阳师</span>',
                        smzs_hyrz: "<body><h3 id='火影忍者'>火影忍者</h3></body><style>#火影忍者{animation:change 10s linear 0s infinite;}@keyframes change{0% {color: #99FF99;}25%{color: #C6A354;}50%{color: #FF3300;}75%{color: #C6A354;}100% {color: #99FF99;}}</style>",
                        smzs_wzry: '王者荣耀',
                        smzs_ayd: 'LOL-暗影岛',
                        smzs_bejwt: 'LOL-比尔吉沃特',
                        smzs_lkss: 'LOL-诺克萨斯',
                        smzs_clksdysjsh: 'Re:从零开始的异世界生活',
                        smzs_mhxy: '梦幻西游',
                        smzs_lycj: '泷夜叉姬',
                        smzs_kess: '卡尔萨斯',
                        smzs_qmkkx: '旗木·卡卡西',
                        smzs_bekln: '贝尔·克朗尼',
                        smzs_cszf: '张飞',
                        smzs_eyxj: '厄运小姐',
                        smzs_swkkx: '神威·卡卡西',
                        smzs_sl: '神乐',
                        smzs_lla: '琉·利昂',
                        smzs_gtw: '鬼童丸',
                        smzs_dles: '德莱厄斯',
                        smzs_qszj: '千手柱间',
                        smzs_zy: '赵云',
                        smzs_jxk: '剑侠客',
                        smzs_hczz: '荒川之主',
                        smzs_lm: '蕾姆',
                        smzs_ydj: '妖刀姬',
                        smzs_lycj_yd: '曜断!',
                        smzs_lycj_yd_info: '被动:游戏开始时获得5层"新月祝福"印记.每五层你造成的伤害翻倍,回合结束后,获得1层的印记.',
                        smzs_lycj_yhzy: '永恒之月!',
                        smzs_lycj_yhzy_info: '主动技:切换月之奥义的主招式,并为其附加侵掠、飞流、风疾或不动的效果.(每回合限一次,效果不叠加)',
                        smzs_lycj_cywyql: '残月无影·侵掠',
                        smzs_lycj_cywyql_info: '式神主动技:选择弃置一张手牌,选择1~3个目标造成一点伤害,并且若目标体力不小于其一半(向上取整),附加"掠"效果为无法装备防具和马区(持续一个回合).(每回合限一次,不会触发<曜断!>)',
                        smzs_lycj_ql: '侵掠',
                        smzs_lycj_ql_info: '效果被动技:你失去防具和马区,你的回合结束时失去这个技能并回复防具和马区.',
                        smzs_lycj_cywyfl: '残月无影·飞流',
                        smzs_lycj_cywyfl_info: '式神主动技:选择弃置一张手牌,选择1~3个目标造成一点伤害,并且弃置目标X张牌,若不足则你摸差值牌数(x为造成伤害)(每回合限一次,不会触发<曜断!>)',
                        smzs_lycj_cywyfj: '残阳无影·风疾',
                        smzs_lycj_cywyfj_info: '式神主动技:选择弃置一张手牌,选择1~3个目标造成一点伤害,并且若目标体力不大于其一半(向上取整),伤害加一.(每回合限一次,不会触发<曜断!>)',
                        smzs_lycj_cywybd: '残月无影·不动',
                        smzs_lycj_cywybd_info: '式神主动技:选择弃置一张手牌,选择1~3个目标造成一点伤害,并且造成伤害时,不会触发目标技能.(每回合限一次,不会触发<曜断!>)',
                        smzs_lycj_lywmql: '胧月无眠·侵掠',
                        smzs_lycj_lywmql_info: '式神主动技:选择弃置一张手牌,选择1个目标造成三点伤害,并且若目标体力不小于其一半(向上取整),附加"掠"效果为无法装备防具和马区(持续一个回合).(每回合限一次,不会触发<曜断!>)',
                        smzs_lycj_lywmfl: '胧月无眠·飞流',
                        smzs_lycj_lywmfl_info: '式神主动技:选择弃置一张手牌,选择1个目标造成三点伤害,并且弃置目标X张牌,若不足则你摸差值牌数(x为造成伤害)(每回合限一次,不会触发<曜断!>)',
                        smzs_lycj_lywmfj: '胧月无眠·风疾',
                        smzs_lycj_lywmfj_info: '式神主动技:选择弃置一张手牌,选择1个目标造成三点伤害,并且若目标体力不大于其一半(向上取整),伤害加一.(每回合限一次,不会触发<曜断!>)',
                        smzs_lycj_lywmbd: '胧月无眠·不动',
                        smzs_lycj_lywmbd_info: '式神主动技:选择弃置一张手牌,选择1个目标造成三点伤害,并且造成伤害时,不会触发目标技能.(每回合限一次,不会触发<曜断!>)',
                        smzs_lycj_cywyxz: '残阳无影选择',
                        smzs_lycj_cywyxz_info: '前置技:选择效果.',
                        smzs_lycj_lywmxz: '胧月无眠选择',
                        smzs_lycj_lywmxz_info: '前置技:选择效果.',
                        smzs_lycj_sqjn: '技能切换',
                        smzs_lycj_sqjn_info: '效果被动技:失去当前式神主动技.',
                        smzs_lycj_ydbj: '曜断标记',
                        smzs_lycj_ydbj_info: '',
                        smzs_kess_lt: '灵体',
                        smzs_kess_lt_info: '主动技:在你的濒危阶段,你可以选择使用.使用后移除所有技能,体力上限和体力均为6点,之后获得技能【高傲】,【波及】,【魂飞魄散】,【脱胎换骨】,【时间管理者】.',
                        smzs_kess_sc: '颂唱',
                        smzs_kess_sc_info: '主动技:在你的出牌阶段(每回合限一次),可使除自己外的所有人进行一次判定. 若判定为黑色牌,则受到一点雷属性伤害. 否则,你获得判定牌并摸一张牌.',
                        smzs_kess_ga: '高傲',
                        smzs_kess_ga_info: '锁定技,你不能成为【顺手牵羊】和【过河拆桥】的目标.',
                        smzs_kess_xs: '写死',
                        smzs_kess_xs_info: '主动技:在你的出牌阶段且体力为一时(每回合限一次). 可以选择一个目标(除自己以外)并弃置一张自己黑色的手牌,使目标受到X伤害.(x为目标剩余血量).',
                        smzs_kess_bj: '波及',
                        smzs_kess_bj_info: '锁定技:当你回合结束时,如果你的体力大于一时.将受到一点雷属性伤害,并且获得两张牌.',
                        smzs_kess_hfps: '魂飞魄散',
                        smzs_kess_hfps_info: '锁定技,无视进攻距离.你的杀可以选择你的范围内的所有人.',
                        smzs_kess_sjglz: '时间管理者',
                        smzs_kess_sjglz_info: '被动技:你没有弃牌阶段.',
                        smzs_kess_tthg: '脱胎换骨',
                        smzs_kess_tthg_info: '锁定技:你的回合开始时,获得一个<骨>标记(优先于后半段). 若这个标记等于或大于6时,将变回‘死歌’并移除所有技能,体力上限和体力均为一,获得技能【写死】【颂唱】【灵体】【高傲】【时间管理者】.',
                        smzs_qmkkx_xly: '写轮眼',
                        smzs_qmkkx_xly_info: '主动技:你的出牌阶段(每回合使用一次),可选1到3名玩家,是你获得目标的所有技能.',
                        smzs_qmkkx_qns: '千年杀',
                        smzs_qmkkx_qns_info: '每当你给对方造成伤害时,你可以选择进行判定. 若为红色则受伤目标再扣一滴血,反之,受伤目标失去一点生命上限.',
                        smzs_qmkkx_fss: '分身术',
                        smzs_qmkkx_fss_info: '锁定技,当你需要使用或打出闪时.可进行判定,若为红色视为你出了闪.',
                        smzs_bekln_jscz: '极速成长',
                        smzs_bekln_jscz_info: '①锁定技:开局获得三个‘极‘,每拥有一个极,体力上限加一. 每一个玩家回合结束后,如果极层数发生变动时,你的体力会随着增加层数而回血,层数减少时体力上限跟着减少. ②锁定技,若你的极标记数大于或等于5时,摸牌阶段可额外摸1张.若大于或等于10,可额外摸3张.',
                        smzs_bekln_jlxl: '记录血量',
                        smzs_bekln_jlxl_info: '前置,用来记录血量的.',
                        smzs_bekln_jlsx: '记录上限',
                        smzs_bekln_jlsx_info: '前置,用来记录血量上限的.',
                        smzs_bekln_jlsj: '记录上极',
                        smzs_bekln_jlsj_info: '前置,用来记录上次极的数量.',
                        smzs_bekln_hyft: '火焰伏特',
                        smzs_bekln_hyft_info: '你的出牌阶段,你可以进行选择1~3名玩家进行判定. 若为♠️️,目标受到3点火属性伤害. 若为♥️️,目标受到2点火属性伤害. 若为♣️️,目标会受到1点火焰伤害. 若为♦️️,则目标躲过技能效果. 如果你的极层数大于10时,跳过判定,目标直接受到3点火焰伤害并且移除3个极层数.',
                        smzs_bekln_yxyw: '英雄愿望',
                        smzs_bekln_yxyw_info: '每当有人受伤时(除自己外)如果伤害来源不为你时,你可以选着进行判定. 若为♥️️,将伤害抵消并对伤害来源造成一滴血的普通伤害且获得一层<极>. 若为♦️️,你将这个伤害抵消掉并获得一层<极>再摸一张牌. 若为♣️️,受伤目标转移到你身上并且获得一层<极>再摸两张牌. 若为♠️️,则你受到一点无来源的伤害你一个并获得一层<极>.',
                        smzs_cszf_haqn: '黑暗潜能',
                        smzs_cszf_haqn_info: '①锁定技,你的杀可额外选择两个目标,如果为红杀则目标不能出闪. ②锁定技,张飞的(回合开始、回合结束、使用杀或打出杀、受到伤害(流失除外))都会获得一层<怒>印记.',
                        smzs_cszf_hdwl: '画地为牢',
                        smzs_cszf_hdwl_info: '画地为牢:主动技:每两回合用一次,使用技能后,你的上家(不为你)和下家(不为你)受到两点伤害并获得<陷入>技能,且如果装备区有进攻马则失去.',
                        smzs_cszf_xr: '陷入',
                        smzs_cszf_xr_info: '陷入:锁定技①,你不能装备进攻马且你的进攻距离为-99. 锁定技②,你的回合结束时,失去该技能.',
                        smzs_cszf_hd: '画地',
                        smzs_cszf_hd_info: '画地:锁定技①,你不能装备防御马且你的防御距离为-99.  锁定技②,你的回合结束时,失去该技能.',
                        smzs_cszf_ksxx: '狂兽血性',
                        smzs_cszf_ksxx_info: '狂兽血性:主动技:当你拥有10层<怒>印记时,可以使用.使用后, 1.获得10层<狂>,每回合结束时减少两层当还剩余0层时,将回复正常,体力上限改回4滴血,获得技能『暗黑潜能,画地为牢,守护机关,狂兽血性』. 2.除你以外所有人翻面. 3.你的血量上限将改为8点,并且回复两点体力. 4.进攻距离增加至无限,防御距离减少至无限. 4.移除所有技能,并获得技能『<强击(你的杀可多选2名还不可闪避)>,<强化·画地为牢(原技能伤害+1,且自己不会获得陷入)>,<怒吼(摸牌阶段多加3张)>』.锁定技:当你拥有10层及以上的<怒>标记,你将处于霸体状态.',
                        smzs_cszf_kszt: '狂兽状态',
                        smzs_cszf_kszt_info: '锁定技:进攻距离增加至无限,防御距离减少至无限.锁定技:拥有该技能则永远处于霸体状态. 锁定技:每回合结束时减少两层.优先级 锁定技:当还剩余0层时,将回复正常,体力上限改回4滴血,移除所有技能,获得技能『暗黑潜能,画地为牢,守护机关,狂兽血性』.',
                        smzs_cszf_qj: '强击',
                        smzs_cszf_qj_info: '锁定技:你的杀可多选2名还不可闪避',
                        smzs_cszf_qhhdwl: '强化·画地为牢',
                        smzs_cszf_qhhdwl_info: '画地为牢:主动技:每两回合用一次,使用技能后,你的上家和下家受到两点伤害并获得<陷入>技能,且如果装备区有进攻马则失去.',
                        smzs_cszf_nh: '怒吼',
                        smzs_cszf_nh_info: '锁定技:摸牌阶段多加3张',
                        smzs_cszf_shjg: '守护机关',
                        smzs_cszf_shjg_info: '锁定技:你每受到一点伤害(流失除外),摸一张牌.锁定技:手牌上限+3',
                        smzs_eyxj_eydjg: '厄运的眷顾',
                        smzs_eyxj_eydjg_info: '厄运的眷顾:锁定技:当你造成伤害时,如果目标没有<目标>标记,则增加一点伤害并清除场上已有的<目标>标记.且给受伤附加<目标>标记.',
                        smzs_eyxj_ycwjmb: '已成为旧目标',
                        smzs_eyxj_ycwjmb_info: '已成为旧目标:厄运的眷顾前置.',
                        smzs_eyxj_eydjgbj: '厄运的眷顾标记',
                        smzs_eyxj_eydjgbj_info: '厄运的眷顾标记:厄运的眷顾前置.',
                        smzs_eyxj_yjsd: '一箭双雕',
                        smzs_eyxj_yjsd_info: '主动技:在你的出牌阶段,你造成伤害后,你可以选择再对其(受伤玩家)的上家或者下家(目标不为你)造成一点伤害.(该技能的额外目标不能触发厄运的眷顾).',
                        smzs_eyxj_dblx: '大步流星',
                        smzs_eyxj_dblx_info: '被动:每人回合结束时,本回合中若你没受到伤害(流失除外),则获得一层<大步流星>.当层数大于或等于5时,将解锁主动技. 当你受到伤害时(流失除外),移除你所有的<大步流星>层数. 主动:每人回合开始前,你可以发动技能消耗5层标记使你获得一个回合.',
                        smzs_swkkx_zysw: '左眼神威',
                        smzs_swkkx_zysw_info: '你的出牌阶段(每回合限一次),你可以选择一个目标进行判定,获得一层<神>.结果若为黑色,目标与你交换位置.',
                        smzs_swkkx_sysw: '双眼神威',
                        smzs_swkkx_sysw_info: '使用<左眼神威>后,可以进行判定.若为红色,你永久获得无限进攻距离,并且普通杀的伤害具有雷属性.技能内容效果转为,你的每回合开始时获得一层<神>.',
                        smzs_swkkx_xznh: '须佐能乎',
                        smzs_swkkx_xznh_info: '当你<神>层数大于或等于6时,在你的回合开始前或结束时.你将自动进入<须佐能乎>『移除<左眼神威>和<双眼神威>,获得<雷切神威·须佐能乎>、<神威·须佐能乎>、<雷遁·韬光>.体力上限变为6,体力回复3点.』状态,立即获得三张牌,获得三层<须>.你的回合结束时减少一层<须>.若<须>小于或等于0时,将解除<须佐能乎>状态『移除<须佐能乎·神威雷切>、<须佐能乎·神威>、<雷遁·韬光>,获得<左眼神威>和<双眼神威>.体力上限变为3.』.',
                        smzs_swkkx_ldtg: '雷遁·韬光',
                        smzs_swkkx_ldtg_info: '主动技:每个玩家回合开始时(每回合限两次),你可以选择弃置一张牌(手牌,装备区,判定区)并获得当前回合玩家的一张牌(手牌,装备区,判定区),选择一个目标(不为你)使其自己弃置一张牌.若你弃置的牌为红色,则目标需要弃置黑色的手牌否则受到一点雷属性伤害.若你弃置的牌为黑色,则目标需要弃置红色的手牌否则受到一点雷属性伤害.',
                        smzs_swkkx_lqsw_xznh: '雷切神威·须佐能乎',
                        smzs_swkkx_lqsw_xznh_info: '你的出牌阶段(每回合限一次),你需弃置一张黑色牌(手牌,装备区,判定区),可以选择两名玩家(不为你)进行互换位置,并使其受到一点雷属性伤害再附加一层<威>.',
                        smzs_swkkx_sw_xznh: '神威·须佐能乎',
                        smzs_swkkx_sw_xznh_info: '你的出牌阶段(每回合限一次),你可以选择两个目标.每个目标需要自己弃置一张黑色手牌,否则受到一点雷属性伤害.若目标附有<威>,则弃置一张红色和一张黑色手牌,否则受到两点雷属性伤害.',
                        smzs_lla_yjxc: '妖精星唱',
                        smzs_lla_yjxc_info: '①锁定技,开局后,天色将会变为白天.<br> ②锁定技,你的回合开始时,天色将会轮流变换(白天,夜晚).<br> ③在夜晚时,除你之外所有人获得技能<疲劳>;当你受到伤害前,你可以进行判定,若为红色此伤害对你无效,并获得一层<疾>.<br> ④在白天时,你将解锁光明之风,获得技能警惕『手牌上限加一』.',
                        smzs_lla_jt: '警惕',
                        smzs_lla_jt_info: '『手牌上限加一』.',
                        smzs_lla_pl: '疲劳',
                        smzs_lla_pl_info: '『手牌上限减一』.',
                        smzs_lla_jffx: '疾風奮迅',
                        smzs_lla_jffx_info: '①锁定技,每当你打出闪时,获得一层<疾>.<br> ②当你造成伤害时,你可以消耗所有的<疾>层数,使这次的伤害伤害加x(x为<疾>层数).',
                        smzs_lla_gmzf: '光明之風',
                        smzs_lla_gmzf_info: '你的出牌阶段(每回合限一次),你可以选择1名及以上除你以外的目标,使其受到3点伤害.其在受伤前可以选择弃置等量的手牌可以减少受到的等量伤害.',
                        smzs_lla_mdjllg: '木刀·精靈流光&小太刀·双叶',
                        smzs_lla_mdjllg_info: '武器技:你的武器区和防具区被废除.默认攻击距离加5你可以将手牌中的装备牌当闪打出.',
                        smzs_sl_xzjn: '选择技能',
                        smzs_sl_xzjn_info: '锁定技:游戏开始时,作为阴阳师,在这个大陆上依然会有所限制所以只能携带三种技能.『鱼·召唤』『疾风·通灵』『冥蝶·通灵』『炼狱·召唤』『伞·召唤』『续命·召唤』.',
                        smzs_sl_yzh: '鱼·召唤',
                        smzs_sl_yzh_info: '在你的出牌阶段(每三回合限一次),你可以选任意一名角色令其获得『灵鱼胖金』技能(锁定技:你增加一点体力上限,且出牌阶段可以多出一张杀.你的三个回合后移除该技能.).',
                        smzs_sl_lypj: '灵鱼胖金',
                        smzs_sl_lypj_info: '增益BUFF:你增加一点体力上限以及回复一点体力,且出牌阶段可以多出一张杀.你的三个回合后移除该技能.',
                        smzs_sl_jftl: '疾风·通灵',
                        smzs_sl_jftl_info: '在你的回合结束时,你可以弃置一张牌(手牌,装备区)选择一名其他玩家,使其获得新的一回合.',
                        smzs_sl_mdtl: '冥蝶·通灵',
                        smzs_sl_mdtl_info: '在你的出牌阶段(每两轮限一次),你需弃置一张手牌,可以选择至多三名其他玩家进行判定.若为红色其翻面,否则其手牌上限-1并持续两回合.',
                        smzs_sl_md: '冥蝶',
                        smzs_sl_md_info: 'DBuff:你的手牌上限-1,并持续两回合.',
                        smzs_sl_lyzh: '炼狱·召唤',
                        smzs_sl_lyzh_info: '在你的出牌阶段(每回合限一次),你需弃置一张手牌,可以选择至多三名其他玩家.使其受到一点伤害并进行判定.若为♥️️,废除目标装备区持续一回合.若为♦️️,体力上限减一持续一回合.',
                        smzs_sl_l: '炼',
                        smzs_sl_l_info: 'DBuff:你的装备区已被废除,持续一回合.',
                        smzs_sl_y: '狱',
                        smzs_sl_y_info: 'DBuff:你的体力上限减一,持续一回合.',
                        smzs_sl_szh: '伞·召唤',
                        smzs_sl_szh_info: '在你的出牌阶段(每三回合限一次),你需弃置一张手牌,可以选择至多三名玩家,使目标获得『伞』技能(锁定技:当你受到大于一点的伤害或者流失体力时,移除该技能使伤害变为零).',
                        smzs_sl_s: '伞',
                        smzs_sl_s_info: '锁定技:当你受到大于一点的伤害或者流失体力时,移除该技能使伤害变为零.',
                        smzs_sl_xmzh: '续命·召唤',
                        smzs_sl_xmzh_info: '在你的出牌阶段(每两回合限一次),你需弃置一张♥️️手牌,选择一名其他玩家.使目标获得『续命』技能(锁定技:当你确认死亡时,你的体力上限以及体力变为无限,持续两回合,两回合后你直接死亡)持续两回合.',
                        smzs_sl_xm: '续命',
                        smzs_sl_xm_info: '锁定技:当你确认死亡时,你的体力上限以及体力变为无限并获得十张手牌,持续两回合,两回合后你直接死亡.该技能持续两回合.',
                        smzs_sl_thsh: '天狐神火',
                        smzs_sl_thsh_info: '当你受到伤害(伤害来源不为你)时,你可以进行判定.若判定为♠️️,伤害来源受到一点火属性伤害.',
                        smzs_gtw_jz: '降诛',
                        smzs_gtw_jz_info: '<span style="color: #9933ff">锁定技</span>:你造成伤害是,会使其横置.如果目标已被横置将获得一层<span style="color: #9933ff"><abbr title="技能<残月鬼衣>的效果.当层数等于3时,进入修罗状态"><mark><ins>『狂』</ins></mark></abbr></span>.',
                        smzs_gtw_cygy: '残月鬼衣',
                        smzs_gtw_cygy_info: '①<span style="color: #9933ff">锁定技</span>:当你<span style="color: #9933ff"><abbr title="技能<残月鬼衣>的效果.当层数等于3时,进入修罗状态"><mark><ins>『狂』</ins></mark></abbr></span>等于3层时,进入修罗状态并获得3层<猎>以及获得技能<span style="color: #9933ff"><abbr title="锁定技:无法成为<顺手牵羊>,<过河拆桥>,<乐不思蜀>,<铁索连环>,<兵粮寸断>的目标."><mark><ins>『霸体』</ins></mark></abbr></span>.<br> ②限定技:当你体力为一受到伤害时,会取消该次伤害使用一次<span style="color: #9933ff"><abbr title="(不能主动使用、不触发技能<降诛>):对全体造成1点伤害,并回复自己一点体力."><mark><ins>「猎魂狂杀」</ins></mark></abbr></span>.回复至一点体力进入修罗状态并获得3层<猎>以及获得技能<span style="color: #9933ff"><abbr title="锁定技:无法成为<顺手牵羊>,<过河拆桥>,<乐不思蜀>,<铁索连环>,<兵粮寸断>的目标."><mark><ins>『霸体』</ins></mark></abbr></span>.<br> ③锁定技:开局进入<span style="color: #9933ff"><abbr title="锁定技:鬼童丸的特殊状态,无法成为目标,持续三个回合,隐匿状态在鬼童丸攻击后解除,隐匿状态具有1回合的冷却时间"><mark><ins><隐匿></ins></mark></abbr></span>状态.<br> 【修罗状态】:<br> ①锁定技:当每个玩家回合结束后,施放<span style="color: #9933ff"><abbr title="(不能主动使用、不触发技能<降诛>):对全体造成1点伤害,并回复自己一点体力."><mark><ins>「猎魂狂杀」</ins></mark></abbr></span>.<br> ②锁定技:使用<span style="color: #9933ff"><abbr title="(不能主动使用、不触发技能<降诛>):对全体造成1点伤害,并回复自己一点体力."><mark><ins>「猎魂狂杀」</ins></mark></abbr></span>时会移除一层<猎>,当<猎>层数小于或等于0时修罗状态解除,移除所有<abbr title="技能<残月鬼衣>的效果.当层数等于3时,进入修罗状态"><mark><ins>『狂』</ins></mark></abbr></span>同时解除所有人的横置状态.',
                        smzs_gtw_lhks: '猎魂狂杀',
                        smzs_gtw_lhks_info: '<span style="color: #ff0000">(不能主动使用、不触发技能<降诛>)</span>:对全体造成1点伤害,并回复自己一点体力.',
                        smzs_gtw_xlhs: '修罗骸锁',
                        smzs_gtw_xlhs_info: '在你的回合,你可以弃置一张牌,选择一个目标造成2点伤害并使其横置(不会解除横置),你进入<span style="color: #9933ff"><abbr title="锁定技:鬼童丸的特殊状态,无法成为目标,持续三个回合,隐匿状态在鬼童丸攻击后解除,隐匿状态具有1回合的冷却时间"><mark><ins><隐匿></ins></mark></abbr></span>状态且获得1层<狂>.(不触发技能<降诛>,若你处于<隐匿>状态或CD中将无视进入效果)<br>',
                        smzs_gtw_yn: '隐匿',
                        smzs_gtw_yn_info: '锁定技:鬼童丸的特殊状态,无法成为目标,持续三个回合,隐匿状态在鬼童丸攻击后解除,隐匿状态具有1回合的冷却时间.',
                        smzs_gtw_bt: '霸体',
                        smzs_gtw_bt_info: '锁定技:无法成为<顺手牵羊>,<过河拆桥>,<乐不思蜀>,<铁索连环>,<兵粮寸断>的目标.',
                        smzs_sl_m: '命',
                        smzs_sl_m_info: '锁定技:两回合后你直接死亡.(不能再成为续命·召唤的目标)',
                        smzs_dles_xn: '血怒',
                        smzs_dles_xn_info: '锁定技:当你造成伤害时,受伤玩家被附上一层"血",并使其获得技能"流血".',
                        smzs_dles_lxsx: '流血&失血',
                        smzs_dles_lxsx_info: '锁定技:你回合结束时,移除一层<血>.若<血>为零时,移除该技能.<br> 锁定技:当你拥有5层"血"时,你回合结束时,受到一点伤害.(优先于上条).',
                        smzs_dles_dssf: '大杀四方',
                        smzs_dles_dssf_info: '你的出牌阶段每回合限一次,你需弃置一张手牌.使你的上家与下家都受到一点伤害并附加一层<血>你回复一点体力.',
                        smzs_dles_zcdj: '致残打击',
                        smzs_dles_zcdj_info: '锁定技:你对拥有<血>的目标,造成伤害时,额外附加一层血.(优先于血怒)',
                        smzs_dles_lkssdtt: '诺克萨斯断头台',
                        smzs_dles_lkssdtt_info: '你的出牌阶段每两轮限一次,你可以选择一个目标.造成1+<血>的层数伤害,如果目标因此死亡,则继续使用该技能.',
                        smzs_ztj_yx: '晕眩',
                        smzs_ztj_yx_info: '状态锁定技:你回合开始时,将跳过摸牌阶段、出牌阶段、且所有技能失效(不包括状态技).',
                        /*<span style=\"color: #9933ff\"><abbr title=\"状态锁定技:你回合开始时,将跳过摸牌阶段、出牌阶段、且所有技能失效(不包括状态技).\"><mark><ins>晕眩</ins></mark></abbr></span>*/
                        smzs_ztj_cr: '缠绕',
                        smzs_ztj_cr_info: '状态锁定技:你无法获得牌.',
                        /*<span style=\"color: #9933ff\"><abbr title=\"状态锁定技:你无法获得牌.\"><mark><ins>缠绕</ins></mark></abbr></span>*/
                        smzs_ztj_fy: '封印',
                        smzs_ztj_fy_info: '状态锁定技:你的所有技能失效(不包括状态技).',
                        /*<span style=\"color: #9933ff\"><abbr title=\"状态锁定技:你的所有技能失效(不包括状态技).\"><mark><ins>封印</ins></mark></abbr></span>*/
                        smzs_ztj_fs: '粉碎',
                        smzs_ztj_fs_info: '状态锁定技:你每打出或使用牌时,将随机弃置一张牌.',
                        /*<span style=\"color: #9933ff\"><abbr title=\"状态锁定技:你每打出或使用牌时,将随机弃置一张牌.\"><mark><ins>粉碎</ins></mark></abbr></span>*/
                        smzs_qszj_ckl: '查克拉',
                        smzs_qszj_ckl_info: '初始三层"查",锁定技:当你回合开始时,你获得一层"查".',
                        smzs_qszj_xrms: '仙人模式',
                        smzs_qszj_xrms_info: '限定技:当你的体力发生变动且不大于2时,你可以发动该技能. <br>仙人模式: <br>①你造成的伤害+1,查克拉回复+1. <br>②当你的回合结束后,你回复一点体力. <br>③若你的体力回复至体力上限时,则自动关闭该技能.',
                        smzs_qszj_xrzt: '仙人状态',
                        smzs_qszj_xrzt_info: '',
                        smzs_qszj_gl: '怪力',
                        smzs_qszj_gl_info: '限定技:在你的回合,你需弃置所有手牌并消耗所有查克拉.选择一名其他玩家,使其受到x点伤害.(x为查克拉层数)',
                        smzs_qszj_mdms_sjjd: '木遁秘术·树界降诞',
                        smzs_qszj_mdms_sjjd_info: '限定技:在你的回合,你需弃置一张红色牌并消耗x点查克拉,体力回复x点(x为体力与体力上限的差).',
                        smzs_qszj_md_hsjjl: '木遁·花树界降临',
                        smzs_qszj_md_hsjjl_info: '在你的回合(每回合限一次),你需弃置一张♣️️牌并消耗一层查克拉,令一名其他玩家陷入<span style="color: #9933ff"><abbr title="状态锁定技:你回合开始时,将跳过摸牌阶段、出牌阶段、且所有技能失效(不包括状态技)."><mark><ins>晕眩</ins></mark></abbr></span>状态(持续一回合).',
                        smzs_qszj_md_mlzs: '木遁·木龙之术',
                        smzs_qszj_md_mlzs_info: '在你的回合(每回合限一次),你需弃置一张黑色牌并消耗一层查克拉,令一名其他玩家陷入<span style="color: #9933ff"><abbr title="状态锁定技:你无法获得牌."><mark><ins>缠绕</ins></mark></abbr></span>状态(持续一回合).',
                        smzs_qszj_xs_msm: '仙术·明神门',
                        smzs_qszj_xs_msm_info: '在你的回合(两轮限一次)且处于仙人模式,你需弃置一张红色牌并消耗两层查克拉,令一名其他玩家陷入<span style="color: #9933ff"><abbr title="状态锁定技:你的所有技能失效(不包括状态技)."><mark><ins>封印</ins></mark></abbr></span>状态(持续两回合)',
                        smzs_qszj_xf_md_zsqs: '仙法·木遁·真数千手',
                        smzs_qszj_xf_md_zsqs_info: '限定技:在你的回合,使用后直接进去仙人模式(不计入次数,持续三回合).若因此法进入仙人模式则该状态下,你所有造成的伤害都会令目标附上<span style="color: #9933ff"><abbr title="状态锁定技:你每打出或使用牌时,将随机弃置一张牌."><mark><ins>粉碎</ins></mark></abbr></span>效果(持续一回合).',
                        smzs_qszj_fs: '粉碎',
                        smzs_qszj_fs_info: '',
                        smzs_qszj_dshf: '顶上化佛',
                        smzs_qszj_dshf_info: '限定技:在你的回合且处于仙人模式,你需选择一名其他玩家使其受到千伤害,并使所有人(不包括你)陷入晕眩状态(持续一回合)且消耗所有查克拉解除你的仙人模式.',
                        smzs_zy_lm: '龙鸣 ',
                        smzs_zy_lm_info: '锁定技:当你体力>2时,你进攻距离-1;当你体力<=2时,你防御距离+1. ',
                        smzs_zy_jlzl: '惊雷之龙 ',
                        smzs_zy_jlzl_info: '出牌阶段一次,你需弃一张手牌,可选择一项:  <br>上家受到一点伤害并与你交换位置.  <br>下家受到一点伤害并与你交换位置. ',
                        smzs_zy_pyzl: '破云之龙 ',
                        smzs_zy_pyzl_info: '出牌阶段一次,你可以弃一张牌选择一名角色受到一点伤害,且令你回复一点体力.',
                        smzs_zy_txzl: '天翔之龙 ',
                        smzs_zy_txzl_info: '出牌阶段一次,你可以弃一张手牌选择一名玩家使其受到一点伤害且与其与其上下家陷入<span style="color: #9933ff"><abbr title="状态锁定技:你回合开始时,将跳过摸牌阶段、出牌阶段、且所有技能失效(不包括状态技)."><mark><ins>晕眩</ins></mark></abbr></span>状态.',
                        smzs_jxk_hsqj: '横扫千军',
                        smzs_jxk_hsqj_info: '在你的回合(每回合限一次),你可以选择一名其他玩家,弃置一张牌当杀使用,重复两次(共三次).最后结算完你将陷入<span style="color: #9933ff"><abbr title="状态锁定技:你将跳过出牌阶段."><mark><ins>疲劳</ins></mark></abbr></span>状态.',
                        smzs_jxk_pxkg: '破血狂攻',
                        smzs_jxk_pxkg_info: '在你的回合(每回合限一次),你可以选择一名其他玩家,扣除自己一点体力当杀使用,直到你取消或者体力小于2.',
                        smzs_jxk_hfzr: '后发制人',
                        smzs_jxk_hfzr_info: '在你的回合(每回合限一次),你需弃置一张手牌并选择一名其他玩家之后,你的下个回合开始前对其造成一点伤害.',
                        smzs_jxk_pfcz: '破釜沉舟',
                        smzs_jxk_pfcz_info: '锁定技:当你受到伤害时,伤害来源会获得"怒".之后对该有"怒"的玩家伤害+1.',
                        smzs_ztj_pl: '疲劳',
                        smzs_ztj_pl_info: '状态锁定技:你将跳过出牌阶段.',
                        /*<span style=\"color: #9933ff\"><abbr title=\"状态锁定技:你将跳过出牌阶段.\"><mark><ins>疲劳</ins></mark></abbr></span>*/
                        smzs_ydj_sl: '杀戮',
                        smzs_ydj_sl_info: '出牌阶段(每回合限一次),你可以翻面并指定一名其他玩家,进行六段挥砍.每一段挥砍都会造成一点伤害,若目标因此确认死亡则可以多加两段挥砍并由你指向另一名其他玩家.',
                        smzs_lm_gzxz: '鬼之血族',
                        smzs_lm_gzxz_info: '锁定技:你所有造成的伤害+x(x为体力上限与体力的差)',
                        smzs_lm_xm: '修瑪',
                        smzs_lm_xm_info: '被动技:万箭齐发对你无效.',
                        smzs_lm_we_xm: '烏爾·修瑪',
                        smzs_lm_we_xm_info: '在你的回合(每回合限一次),你需弃置一张手牌选择三名其他玩家附上一层<span style="color: #9933ff"><abbr title="状态锁定技:你使用牌后将会受到一点伤害."><mark><ins>冰刺</ins></mark></abbr></span>',
                        smzs_lm_ye_xm: '亞爾·修瑪',
                        smzs_lm_ye_xm_info: '在你的回合(每回合限一次),你需弃置一张♠️️手牌选择一名其他玩家附上一层<span style="color: #9933ff"><abbr title="状态锁定技:你使用牌只能指定对你释加该技能的目标."><mark><ins>嘲讽</ins></mark></abbr></span>.',
                        smzs_hczz_zl: '逐流',
                        smzs_hczz_zl_info: '当你使用技能后,你的下张杀造成伤害时可以指定一名玩家(不包括你和杀的目标)造成一点伤害并自己获得一层水球.不可叠加',
                        smzs_hczz_yy: '游鱼',
                        smzs_hczz_yy_info: '在你的回合(每回合限一次),你需弃置一张手牌选择一名其他玩家造成一点<span style="color: #9933ff"><abbr title="定义,目标的攻击范围内所有人(包括目标不包括自己)."><mark><ins>范围性</ins></mark></abbr></span>伤害并自己获得一层水球.',
                        smzs_hczz_ts: '吞噬',
                        smzs_hczz_ts_info: '在你的回合(每回合限一次),你需弃置一张手牌选择一名其他玩家造成两段伤害,第一段会随机弃置0-2张牌,第二段会给目标增加x层水球.每段伤害各为一点(x为弃置牌的数量).',
                        smzs_hczz_gc: '归川',
                        smzs_hczz_gc_info: '①锁定技,你的手牌上限+x(x为场上所有水球层数). <br>②限定技,你吸收场上所有水球层数,使你回复x点体力',
                        smzs_ztj_cf: '嘲讽',
                        smzs_ztj_cf_info: '状态锁定技:你使用牌只能指定对你释加该技能的目标',
                        /*<span style=\"color: #9933ff\"><abbr title=\"状态锁定技:你使用牌只能指定对你释加该技能的目标.\"><mark><ins>嘲讽</ins></mark></abbr></span>*/
                        smzs_ztj_bc: '冰刺',
                        smzs_ztj_bc_info: '状态锁定技:你使用牌后将会受到一点伤害.',
                        /*<span style=\"color: #9933ff\"><abbr title=\"状态锁定技:你使用牌后将会受到一点伤害.\"><mark><ins>冰刺</ins></mark></abbr></span>*/
                        /*<span style=\"color: #9933ff\"><abbr title=\"定义,目标的攻击范围内所有人(包括目标不包括自己).\"><mark><ins>范围性</ins></mark></abbr></span>*/
                    },
                };
                lib.config.all.characters.add('失名见闻谭');
                lib.config.characters.add('失名见闻谭');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:失名见闻谭/image/${i}.jpg`);
                }
                lib.translate['失名见闻谭_character_config'] = `失名见闻谭`;
                return QQQ;
            });
        },
        config: {
            //说明列表
            shuoming: {
                name: '<div class="hth_menu">▶扩展说明</div>',
                clear: true,
                onclick() {
                    if (this.hth_more == undefined) {
                        var more = ui.create.div(
                            '.hth_more',
                            '<div style="border: 1px solid white;text-align:left"><font size=3px>' +
                            '作者:失名,群内名为:洪荒少年~' +
                            '<br>反馈请加Q:<font color="red">635865436</font>' +
                            '<br>关于扎住群呢,他已经解散了,所以我的扩展包又要露宿街头了' +
                            '<br>希望有个好心小哥哥小姐姐收留我,拉我进群扎住' +
                            /*'<br>常驻群①『已满』:<div onclick=window.open("https://jq.qq.com/?_wv=1027&k=SxVQ9T6n")><span style=\"color: green;text-decoration: underline;font-style: oblique\">801539268</span></div>'+
                        '<br>常驻群②可点击数字快速进群:<div onclick=window.open("https://qm.qq.com/cgi-bin/qm/qr?k=2PIKnUR3lxEUU156cTcoYC8M-UhAASxX&jump_from=webapi")><span style=\"color: green;text-decoration: underline;font-style: oblique\">952800334</span></div>'+*/
                            '<br>版本:1.3' +
                            '<br>该扩展包强度大于官方' +
                            '<br>未经允许,请勿擅自改动扩展'
                        );
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.hth_more = more;
                        this.innerHTML = '<div class="hth_menu">▼扩展说明</div>';
                    } else {
                        this.parentNode.removeChild(this.hth_more);
                        delete this.hth_more;
                        this.innerHTML = '<div class="hth_menu">▶扩展说明</div>';
                    }
                },
            },
            //更新内容
            gengxin: {
                name: '<div class="hth_menu">▶更新内容</div>',
                clear: true,
                onclick() {
                    if (this.hth_more == undefined) {
                        var more = ui.create.div('.hth_more', '<div style="border: 1px solid white;text-align:left"><font size=3px>' + '修复BUG:' + '<br>泷夜叉姬的耀断:释放主技能时会出现多加5层新月祝福' + '<br>泷夜叉姬的永恒之月!:切换技能取消移除' + '<br>千手柱间的顶上化佛:一次性所造成的的1000伤害会导致卡顿可能还有崩坏掉所以改为了攻击10次每次10点伤害' + '<br>剑侠客的横扫千军:使用第二刀时会游戏卡死' + '<br>剑侠客的破血狂攻:使用时会游戏卡死' + '<br>修复注释:' + '<br>蕾姆的烏爾·修瑪和亞爾·修瑪技能注释出现了问题及时修复' + '<br>未经允许,请勿擅自改动扩展');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.hth_more = more;
                        this.innerHTML = '<div class="hth_menu">▼更新内容</div>';
                    } else {
                        this.parentNode.removeChild(this.hth_more);
                        delete this.hth_more;
                        this.innerHTML = '<div class="hth_menu">▶更新内容</div>';
                    }
                },
            },
            //按钮区域
            smzs_ksyinxiao: {
                name: '开始音效',
                intro: '开始音效:王者专属音效<全军出击!>',
                init: true,
            },
            smzs_jsyinxiao: {
                name: '击杀音效',
                intro: '击杀特效:开启此项后重启游戏生效.任意一名角色击杀一名其他角色后,会记录此为其在本局共击杀过几名角色,并播放相应击杀人次的文字动画和配音(已附有16杀音效啦)',
                init: true,
            },
        },
        package: {
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>",
            author: '失名剑神<br><b>目前版本:1.3</b></br>',
            version: '1.2',
        },
    };
});
