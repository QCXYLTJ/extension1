window.sksn_import(function (lib, game, ui, get, ai, _status) {
    lib.sksn_winnerSay = {
        'sksn_aodinggelan': '真理不会因为死亡而毁灭,<br>它必将在烈火中重生',
        'sksn_geleier': '言语也是武器,<br>舌剑亦能杀人',
        'sksn_yagebu': '我愿做黑夜的眼睛,<br>守望将至的黎明',
        'sksn_xiluwei': '皇叔,薇儿已经长大了',
        'sksn_suerjiade': '东极只有掌握在我苏尔嘉德的手里,<br>才有未来可言!',
        'sksn_gaogeli': '没有比人更高的山,<br>没有比脚更长的路',
        'sksn_yilian': '弱小,<br>不是退缩的理由',
        'sksn_halisen': '有老夫镇守飞云渡,<br>那牛头怪物没胆子攻过来',
        'sksn_ximengyaweili': '兄弟齐心,<br>其利断金',
        'sksn_pianxian': '外面的世界,<br>可比长明殿有趣多了',
        'sksn_feiluo': '比黑暗更令我担忧的,<br>是人类欲望的无限膨胀',
        'sksn_tiexin': '下次你们还想找我锻造兵器的话,<br>定金要付双倍',
        'sksn_yunru': '凭你们这些土鸡瓦狗,<br>还不配我动用大伊万',
        'sksn_wulamu': '老子早说过自己天下无敌!',
        'sksn_mogen': '这个世界上,<br>能用钱解决的问题就都不是问题',
        'sksn_xintianbuzhi': '谁终将声震人间,<br>必长久深自缄默',
        'sksn_kaien': '海盗再怎么逃,<br>也逃不出大海',
        'sksn_qiongsi': '海军再怎么追,<br>也追不出大海',
        'sksn_qiongsi_soul': '我死你也别想活!',
        'sksn_siji': '这世界上真正神秘而不可琢磨的,<br>只有人心',
        'sksn_guiyan': '黑暗只是手段,<br>不是目的……',
        'sksn_deyingkemeng': '嘤嘤嘤,嘤嘤嘤,嘤嘤嘤嘤嘤',
        'sksn_clemtin': '我辈自当承先代之遗志,以创万世之帝业',
        'sksn_tangning': '陛下尽可安心,<br>有臣在,这东港城乱不了',
        'sksn_hailingji': '年轻的船长啊,<br>你可曾见过在月光下的礁石滩上歌唱的人鱼？',
        'sksn_jianiao': '我沉默于凝结的露珠中,待到大雾散去后,<br>我将映照着太阳<br>——升华',
        'sksn_fuleicha': '总有一天,<br>我将再次回到自己的农场,<br>每天看着太阳东升西落,悠然一生',
        'sksn_aidehua': '真亦假时假亦真',
        'sksn_eidehua': '假作真时真亦假',
        'sksn_saimiuer': '秩序即是正义,<br>破坏秩序之人,皆为圣光的仇敌',
        'sksn_lanbote': '打来打去,<br>无非是以眼还眼,<br>以牙还牙',
        'sksn_ying': '逃？哼哼,<br>死亡才是你们唯一的解脱',
        'sksn_ailuoyi': '星辰说～今天我是赢家',
        'sksn_luoyiao': '老师,<br>我一定会将这束微茫传承下去的',
        'sksn_ferwork': '父亲……<br>菲儿终于能再次见到您了',
        'sksn_anjielina': '森林可不欢迎你们这帮侵略者',
        'sksn_occupatee': '小美人,<br>来,香一个～',
        'sksn_jiamiu': '人们所害怕的不是黑暗,<br>而是潜藏其中的未知',
        'sksn_gaozesi': '你的这身皮囊……<br>看起来也很棒哟～',
        'sksn_wuruiya': '在蜕变后,<br>我貌似忘记了一些十分重要的事情……',
        'sksn_nuoya': '就算是身居黑暗,<br>也要在心中为光明开路',
        'sksn_nuodengsi': '这灾厄的大门,<br>绝不能被打开!',
        'sksn_zage': '区区飞云渡,<br>焉能挡得住我？!',
        'sksn_yigenuosi': '我的信念,<br>即是时空的意志!',
        'sksn_lanling': '我沉寂于黑色的梦中,<br>等候那束照进现实的光',
        'sksn_muguchen': '这次,<br>我找到了一条光明大道',
        'sksn_niepudun': '愤怒的大海,将洗涤所有罪人的灵魂',
        'sksn_halidisi': '浩瀚无垠的漆黑色宇宙,<br>是我最终要去征服的地方',
        'sksn_jielaer': '我会成为兄长大人最得心应手的利剑',
        'sksn_feieryide': '不是神明令这个世界变成了这番样子,<br>而是我们自己',
        'sksn_huaideqiao': '刁民们,<br>都给老子干活去',
        'sksn_lujinuo': '黎明是温柔的目光,<br>也是撕裂黑暗的利剑',
        'sksn_youliweisi': '巨人身死,血犹温存',
        'sksn_dongfanghongdao': '谁终将点燃闪电,<br>必将长久如云漂泊',
        'sksn_maisike': '你的生命,<br>就如那野火燎原后的余烬一般,<br>一文不值',
        'sksn_you': 'Stars and the Sea<br>The Wonder of You',
        'sksn_cang': '星空和大海,<br>奇迹与你',
        'sksn_haimode': '大海不需要秩序,<br>但需要你的血肉滋养',
        'sksn_delike': '重铸航海家荣光,<br>还是得看我们老将!',
        'sksn_sigeruopi': '再敢说我是熊怪,<br>就把你扔炼药锅里炖了',
        'sksn_guergewen': '诡影,无处不在.',
        'sksn_xiayi': '爱,<br>是临别前那祝福的一吻.',
        'sksn_xieyaoxiafeiji': '我们是海族战将!<br>不是海鲜蘸酱!',
        'sksn_baolizhanche': '暴力战车!<br>冲毁一切!',
        'sksn_kangpasi': '死亡,意味着解脱',
        'sksn_hualun': '于浩歌狂热之际中寒<br>于天上看见深渊',
        'sksn_lansi': '生而卑贱犹如草芥<br>亦能开出高贵的花朵',
        'sksn_shou': '高悬天空的星星<br>预兆着我前进的方向',
        'sksn_lushou': '惩罚是对正义的伸张!',
        'sksn_kaiaote': '你的事迹<br>将被我编曲颂唱',
        'sksn_lawakeluosi': '世界,将被烈火焚烧殆尽!',
        'sksn_xiluo': '不,<br>不要让它燃烧!',
        'sksn_aidikala': '我们曾经统治着大海,也统治着你们',
        'sksn_fali': '知识可贵,你也是',
        'sksn_keleimang': '凡事包容,凡事相信<br>凡事盼望,凡事忍耐',
        'sksn_yabo': '位我上者,灿烂星空<br>真理之光,在我心中',
        'sksn_serui': '想赢可真麻烦啊,<br>下次就别选我了……',
        'sksn_weisike': '你见过一只雪白的鸽子吗？<br>她的眼睛和我一样,都是红色的',
        'sksn_aitingxue': '下次一定更新',
        'sksn_wolier': '死亡,是神明赋予世人的礼物',
        'sksn_zhong': '我们是一家人',
        'sksn_dina': '黎凡特,请将光明带回班卡姆斯城',
        'sksn_fengxin': '欢迎下次光临~',
        'sksn_fangyu': '城邦由人民建造,<br>自然应属于人民',
        'sksn_beigemosi': '我的存在,<br>就是为了给世界带来灾厄',
        'sksn_yierma': '非得往水里加点什么你才愿意喝下去吗？',
        'sksn_misaer': '我们都是命运的奴隶',
        'sksn_guila': '妹妹,瞧!<br>你还是和原来一样完好无缺',
        'sksn_wangdaer': '飞云渡,就在眼前!',
        'sksn_poxisi': '我只不过是只普通的水母',
        'sksn_aisixiandi': '圣树啊,<br>请再次庇佑森林',
        'sksn_yiluoweiqi': '为了无穷的智慧,<br>牺牲是必要的',
        'sksn_lifante': '红色的火苗,将在清风的吹拂下,燃尽这个世界的每一寸土地.',
        'sksn_milong': '大音希声<br>大美无形',
        'sksn_zelian': '把欢笑带给世界!',
        'sksn_pankexi': '一旦成为欲念的奴隶,<br>就永远也解脱不了了',
        'sksn_andaoer': '净化世界<br>净化人心',
        'sksn_woruite': '我们的尊严不可亵渎,<br>他们的强权毁于怒焰!',
        'sksn_gelanjie': '如不能守一方安宁,<br>虽封侯拜相亦复何用？',
        'sksn_shaliye': '你像太阳一样慷慨地将光洒向我,从此人间被照亮',
        'sksn_meiweiya': '将弱小凝聚成强大,这便是阵的意义',
        'sksn_laiweien': '黑暗赐予的双眼<br>何须再见光明',
        'sksn_kongshi': '法不孤起,仗境方生<br>道不需行,遇缘则应',
    };
    game.sksn_winnerPlay = function (name, group) {
        var background = ui.create.div('.sksnw-background', document.body);
        var head = ui.create.div('.sksn-winner-head');
        var biankuang = ui.create.div('.sksn-winner-biankuang');
        head.setBackgroundImage('extension/时空枢纽/' + name + '.jpg');
        background.appendChild(head);
        background.appendChild(biankuang);
        var text = ui.create.div('.sksn-winner-text');
        var say = lib.sksn_winnerSay[name];
        if (say) {
            text.innerHTML = say;
        }
        background.appendChild(text);
        var win = ui.create.div('.sksn-win-text', background);
        win.innerHTML = "胜 利";
        text.style.color = 'yellow';
        if (group == 'SK_king') {
            background.setBackgroundImage('extension/时空枢纽/sksn_pic_background_king.jpg');
        } else if (group == 'SK_sea') {
            background.setBackgroundImage('extension/时空枢纽/sksn_pic_background_sea.jpg');
        } else if (group == 'SK_east') {
            background.setBackgroundImage('extension/时空枢纽/sksn_pic_background_east.jpg');
        } else if (group == 'SK_demon') {
            background.setBackgroundImage('extension/时空枢纽/sksn_pic_background_demon.jpg');
        } else if (group == 'SK_qun') {
            background.setBackgroundImage('extension/时空枢纽/sksn_pic_background_qun.jpg');
        } else if (group == 'SK_shen') {
            background.setBackgroundImage('extension/时空枢纽/sksn_pic_background_shen.jpg');
        } else {
            background.setBackgroundImage('extension/时空枢纽/sksn_pic_background_others.jpg');
        }
        background.addTempClass('start');
        setTimeout(function () {
            var button = ui.create.div('.sksn-win-close-button', background);
            button.innerHTML = "关闭";
            button.addEventListener('click', function () {
                background.delete();
            });
        }, 1000);
        return background;
    };
    var originGameOver = game.over;
    game.over = function (ret) {
        if (ret) {
            if (game.me && game.me.name && game.me.name.indexOf('sksn_') == 0 && game.me.group) {
                setTimeout(function () {
                    game.sksn_winnerPlay(game.me.name, game.me.group);
                }, 500);
            }
        }
        return originGameOver(ret);
    };
});