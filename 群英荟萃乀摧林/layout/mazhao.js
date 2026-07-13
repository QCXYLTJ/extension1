'use strict';
qyhcCL.arenaReady.push((lib, game, ui, get, ai, _status, config) => {
    lib.translate.sbtieji_info = '当你使用【杀】指定其他角色为目标后,你可以令其不能响应此【杀】且其所有非锁定技失效直到有回合开始或结束,你与其谋弈,若结果为:你<直取敌营>其<出阵迎战>,你获得其一张牌;你<扰阵疲敌>其<拱卫中军>,你摸两张牌.';
    lib.translate.sbduanliang_info = '出牌阶段限一次,你可以与一名角色谋弈,若结果为:你<围城断粮>其<固守城池>,若其判定区没有【兵粮寸断】,你将牌堆顶牌当【兵粮寸断】对其使用,否则你获得其一张牌;你<擂鼓进军>其<突出重围>,你视为对其使用一张【决斗】.';
    if (config.clwt_zhongyan && config.clwt_zhongyan != 'none') {
        lib.translate.bolan_info = '①出牌阶段开始时,你可以从随机三个技能描述中包含<出牌阶段限一次>的技能中选择一个并令当前回合角色此阶段获得之;②当你受到伤害后,你可以从随机三个与受到伤害后有关的技能中选择一个于当前时机内获得;③其他角色出牌阶段限一次,其可以失去1点体力,令你发动〖博览①〗.';
        if (lib.skill.bolan) {
            lib.skill.bolan.trigger = { player: ['phaseUseBegin', 'damageEnd'] };
            lib.skill.bolan.content = function () {
                'step 0';
                if (trigger && trigger.name == 'damage') {
                    var skills = qyhcCL
                        .getYuhengku('bolanBjing')
                        .filter((skill) => {
                            return !player.hasSkill(skill, null, false, false);
                        })
                        .randomGets(3);
                    var skills2 = qyhcCL
                        .getYuhengku('bolanDamage')
                        .filter((skill) => {
                            return !player.hasSkill(skill, null, false, false);
                        })
                        .randomGets(3);
                    switch (lib.config.extension_群英荟萃乀摧林_clwt_zhongyan) {
                        case 'xianding':
                            skills = skills2;
                            break;
                        case 'suiji':
                            break;
                        default:
                            skills = [skills[0], skills2[0], skills[1]];
                            break;
                    }
                    if (skills.length == 0) return event.finish();
                    else if (skills.length > 1) {
                        player.chooseSkills('###〖博览〗请选择以下一个技能于此次受到伤害后的时机内获得###', 'big', true, skills).set('ai', function (button) {
                            return get.skillRank(button.link, 'out');
                        });
                    } else event._result = { bool: true, links: skills };
                    event.goto(3);
                }
                ('step 1');
                if (player.isIn()) {
                    var skills = qyhcCL
                        .getYuhengku('bolanAjing')
                        .filter((skill) => {
                            return !player.hasSkill(skill, null, false, false);
                        })
                        .randomGets(3);
                    var skills2 = qyhcCL
                        .getYuhengku('bolanUse')
                        .filter((skill) => {
                            return !player.hasSkill(skill, null, false, false);
                        })
                        .randomGets(3);
                    switch (lib.config.extension_群英荟萃乀摧林_clwt_zhongyan) {
                        case 'xianding':
                            skills = skills2;
                            break;
                        case 'suiji':
                            break;
                        default:
                            skills = [skills[0], skills2[0], skills[1]];
                            break;
                    }
                    if (skills.length == 0 || !_status.currentPhase || !_status.currentPhase.isIn()) event.finish();
                    else if (skills.length > 1) {
                        player.chooseSkills('###〖博览〗请选择以下一个技能###' + (_status.currentPhase == player ? '<center>你此阶段获得此技能</center>' : '<center>' + get.translation(_status.currentPhase) + '此阶段获得此技能</center>'), 'big', true, skills).set('ai', function (button) {
                            return get.skillRank(button.link, 'in') * get.attitude(_status.event.player, _status.currentPhase);
                        });
                    } else event._result = { bool: true, links: skills };
                } else event.finish();
                ('step 2');
                _status.currentPhase.addTempSkill(result.links[0], 'phaseUseEnd');
                player.popup(result.links[0]);
                game.log(_status.currentPhase, '此阶段获得了', '#g【' + get.translation(result.links) + '】');
                event.finish();
                ('step 3');
                player.addTempSkill(result.links[0], { player: ['damageAfter', 'phaseAfter'] });
                player.popup(result.links[0]);
                game.log(_status.currentPhase, '此次受到伤害后的时机获得了', '#g【' + get.translation(result.links) + '】');
            };
            lib.skill.bolan.subSkill.g.audio = false;
            lib.skill.bolan.subSkill.g.content = function () {
                'step 0';
                player.loseHp();
                ('step 1');
                if (target.isIn() && player.isIn()) target.useSkill('bolan');
            };
        }
    }
    if (!config.mazhao) return [lib, game, ui, get, ai, _status];
    var obj = {
        xinchoufa_info: '出牌阶段限一次,你可以展示一名其他角色的一张手牌,此时其与此牌类别不同的所有手牌均视为【杀】直到其下个回合结束,若你有明置牌,其交给你展示牌.',
        tuishi_info: '隐匿技,你受到过伤害的回合结束时,你可以失去〖推弑〗并选择当前回合角色攻击范围内的一名角色,除非当前回合角色对你选择的角色使用一张【杀】,否则你对当前回合角色造成1点伤害.',
        huirong_info: '隐匿技,准备阶段或当你登场后,你可以选择一名角色,若其:手牌数等于体力,你令其回复或失去1点体力;否则其将手牌调整至数量与体力相同(至多调整两张).',
        caiyuan_info: '锁定技,结束阶段,若:你「媛」数不大于体力,你摸两张牌→你将「媛」调整至数量与你体力相同.',
        ciwei_info: '基本牌或普通锦囊牌被其他角色使用时,若之为其于当前回合内使用的第二张牌,你可以弃置一张牌并取消此牌.',
        shiren_info: '隐匿技,每轮限一次,当你受到伤害后,你可以对当前回合角色发动〖宴戏〗.',
        jyishi_info: '每阶段限一次,当牌因弃置而置入弃牌堆后,你可以选择其中一张令当前回合角色获得之,你获得其中另一张.',
        baoqie_info: '隐匿技,锁定技,你登场后或每轮结束时,你印刷一张随机宝物牌、获得之并可以使用手牌中的之.',
        shiduo_info: '出牌阶段限一次,你可以与一名其他角色拼点:没赢的角色弃置一张牌.',
        sbtieji_info: '当你使用伤害牌指定其他角色为目标后,你可以令其不能响应之且其所有非锁定技失效直到有回合开始或结束,你与其谋弈,若结果为:你<直取敌营>其<出阵迎战>,你获得其一张牌;你<扰阵疲敌>其<拱卫中军>,你摸两张牌.',
        sbduanliang_info: '出牌阶段限两次,你可以与一名角色谋弈,若结果为:你<围城断粮>其<固守城池>,若其判定区没有【兵粮寸断】,你将牌堆顶牌当【兵粮寸断】对其使用,否则你获得其一张牌;你<擂鼓进军>其<突出重围>,你视为对其使用一张【决斗】.',
        dingfa_info: '锁定技,一名角色的回合结束时,若本回合你失去的牌数不小于你的体力,你回复1点体力或对攻击范围内的一名角色造成1点伤害.',
        beini_info: '出牌阶段限一次,你可以依次选择两名角色,第一名角色摸两张牌,第二名角色视为对其使用一张【杀】.',
        //xinfu_qinguo_info:"每回合每种类别的牌限一次,当你使用或打出牌时,若此牌:有目标,你可以无距离限制地视为对一名不是此牌目标的角色使用一张【杀】;否则你若你的手牌数等于体力值,你可以回复1点体力或对攻击范围内的一名角色造成1点伤害.",
        yingfeng_info: '每轮开始时,你可以令一名角色本轮使用牌无距离限制.',
        bingqing_info: '你每回合首次使用或打出一种花色的牌时,若你本回合使用或打出过的牌中的花色数等于〈2／3／4〉,则你可以〈令一名角色摸两张牌／弃置一名角色区域内的一张牌／对一名其他角色造成1点伤害〉.',
        yidu_info: '当你使用伤害牌指定目标后,你可以展示其一至三张手牌,若这些牌颜色相同,此牌结算结束后,其弃置这些牌.',
        olfengji_info: '锁定技,摸牌阶段开始时,你令一名角色摸牌阶段多摸两张牌直到其回合结束,令一名角色使用【杀】的次数限制+2直到其回合结束,你本回合摸牌阶段少摸一张牌且使用【杀】的次数限制-1.',
        olfuyuan: '扶援',
        olfuyuan_info: '当一名角色使用牌确定目标后,若当前回合内没有牌结算结束过,你可以令一名不为其的目标角色摸一张牌.',
        sbzhiji: '烬国',
        sbtiaoxin_info: '出牌阶段限一次,你可以选择至多X名其他角色(X为你已损失的体力值),你记录弃牌堆中所有牌,这些角色选择一项:1.合法对包含你的角色使用一张【杀】;2.弃置一张牌,若你在其攻击范围内,你弃置其一张牌→若你:未以此法受到伤害,你获得弃牌堆中未以此法记录的所有牌;否则直到当前回合结束,你的非锦囊牌视为【杀】→你清除以此法记录的记录.',
        sbzhiji_info: '限定技,当一名角色处于濒死状态时,你可以令其回复体力至2点并令你使用牌无距离和次数限制,你获得一个回合且此回合结束时,若当前回合内没有角色死亡,你将所有牌交给一名角色且死亡.',
        xinxingluan_info: '每回合限一次,当你使用牌结算结束后,你可以选择一项:1.若X:大于1,你观看牌堆中随机X张点数为6的牌并获得其中一张(X为牌堆中点数为6的牌的数量且至多为2);等于1,你获得牌堆中点数为6的牌;否则你亮出牌堆顶六张牌并获得其中一张牌;2.令一名其他角色弃置一张点数为6的牌或交给你一张牌;3.获得场上一张点数为6的牌.',
        twchuanshu_info: '准备阶段,你可以选择一名角色,直到你下回合开始,其:拼点牌亮出时,之点数+3;使用的下一张【杀】对除你外的角色造成伤害时,之+1;使用的下一张【杀】结算结束后,若其不为你,你摸等同于之造成的伤害值张牌.',
        sbxuanhuo_info: '出牌阶段限一次,你可以令一名没有「眩」的其他角色摸两张牌并获得1枚「眩」,你视为对其使用一张【杀】.有「眩」且「眩」数不大于5的其他角色于摸牌阶段外获得牌后,你令其获得1枚「眩」并获得其一张手牌.你受到伤害后,若来源「眩」数大于1,其移去1枚「眩」.',
        sbenyuan_info: '锁定技,准备阶段,你令所有有「眩」的其他角色依次执行:其移去所有「眩」;若其此次移去的「眩」数大于3,你交给其一张牌;若其此次移去的「眩」数小于2,其失去1点体力,你回复1点体力.',
        clanzhanding_info: '每回合限四次,你可以将任意张牌当【杀】使用,此【杀】结算结束后,若之造成伤害,你将手牌调整至手牌上限.',
        clanjintao: '进讨',
        clanjintao_info: '锁定技,你的回合内,其他角色:响应你使用的牌时,你手牌上限-1且本回合攻击范围和使用【杀】的次数限制+1;进入濒死状态时,你手牌上限+1.',
        reqianxun_info: '当锦囊牌对你生效时,你可以将所有手牌扣置于武将牌上,若如此做,有回合结束时,你获得武将牌上以此法扣置的所有牌.',
        qirang_info: '当你的装备区内置入牌时,你可以检索一张锦囊牌获得之.',
        tianzuo_info: '锁定技,游戏开始时,你印刷八张花色点数分别为♠️️2、♠️️4、♠️️6、♠️️8、♣️️3、♣️️5、♣️️7、♣️️9的【奇正相生】加入牌堆,修改此局游戏内【奇正相生】的效果;【奇正相生】对你无效.',
        old_tianzuo_info: '锁定技,游戏开始时,你印刷八张花色点数分别为♠️️2、♠️️4、♠️️6、♠️️8、♣️️3、♣️️5、♣️️7、♣️️9的【奇正相生】加入牌堆,修改此局游戏内【奇正相生】的效果;当一名角色成为【奇正相生】的目标后,你可以观看其手牌,为其秘密记录<奇兵>或<正兵>至此牌.',
        xinwanyi_info: '当你使用【杀】或普通锦囊牌指定其他角色为唯一目标后,你可以将其一张牌置于你武将牌上,称为<嫕>;你不能使用、打出或弃置花色为<嫕>中包含的花色的牌且这些牌不计入手牌上限;结束阶段或当你受到伤害后,你令一名角色获得一张<嫕>.',
        yuhua_info: '锁定技,你的非基本牌不计入手牌上限;准备或结束阶段,你摸两张牌并将一张牌置于牌堆顶.',
        qizhi_info: '当你使用牌时,你可以弃置不为此牌目标的一名角色的一张牌,其令你或其摸一张牌.',
        jinqu_info: '每回合结束时,你可以令至多X名手牌数不大于X的角色依次摸两张牌并将手牌弃至X张(X为你当前回合发动〖奇制〗的次数).',
        dclongsong_info: '出牌阶段开始时,你可以选择自己并弃置一张红色牌,或交给一名其他角色一张红色牌,若:其有技能描述中包含<出牌阶段>的你没有的技能,你选择其这些技能中的一个,直到当前阶段结束后,其的此技能失效且你获得此技能;否则你从随机三个描述的前四个字符为<出牌阶段>且你没有的技能中选择一个获得直到当前阶段结束后.',
        dcxiuwen_info: '每牌堆每种牌名的牌限一次,当你使用牌时,你可以摸一张牌.',
        clanlianhe_info: '出牌阶段开始时,你可以选择两名角色:其连环,且直到其出牌阶段结束后,其出牌阶段结束时,若其此阶段未摸牌,其令你摸X+1张牌或交给你X-1张牌(X为其此阶段获得的牌数且至多为3).',
        clanfangzhen_info: '出牌阶段开始时,你可以连环一名角色并选择一项:1.摸两张牌,交给其两张牌;2.令其回复1点体力→其下个弃牌阶段开始时可以交给你一张牌.',
        clanliuju_info: '出牌阶段结束时,你可以与一名角色拼点,输者可以使用任意张拼点牌,若输者如此做且:你与其或其与你的距离与输者选择使用牌前不同,你复原〖恤民〗;其以此法使用了非基本牌,你可以发动〖放赈〗.',
        clanhuanjia_info: '出牌阶段结束时,你可以拼点,你获得其中一张拼点牌,赢者可以使用另一张拼点牌,若赢者如此做且其因此牌:造成了伤害,你失去一个技能;否则你可以发动〖连和〗.',
        zhujian_info: '出牌阶段限一次,你可以依次执行:令你随机一个空置装备栏内置入一张印刷的【长安大舰】;令任意名装备区内有牌的角色各摸一张牌并横置另一名角色.',
        duansuo_info: '出牌阶段限一次,你可以重置任意名角色,视为对这些角色使用一张火【杀】.',
        olfangquan_info: '每轮限一次,出牌阶段开始时,你可以跳过此阶段并交给一名其他角色一张手牌,其获得一个回合.',
        clanchenya_info: '当一名角色发动技能描述中包含<出牌阶段限一次>的技能后,你可以令其可以重铸一张牌,若其以此法重铸牌名字数为X的牌(X为其手牌数),你视为对其使用一张【推心置腹】.',
        clanjianyuan_info: '当一名角色发动技能描述中包含<出牌阶段限一次>的技能后,你可以令其可以重铸一张牌,若其以此法重铸牌名字数为X的牌(X为其当前阶段使用牌数),你将此牌当【浮雷】对其使用.',
        dcdanyi_info: '当你使用牌确定目标后,若此牌目标与你使用的上一张有目标的牌有至少一名相同的目标角色,你可以摸一张牌.',
        olsaogu_info: '转换技,结束阶段,你可以令一名其他角色,或出牌阶段,你可以:〖阴〗弃置两张花色不为你本阶段弃置过的牌中包含的花色的牌,使用其中的【杀】;〖阳〗摸一张牌.',
        qianya_info: '当你成为锦囊牌的目标后,你可以将任意张牌交给一名其他角色,若你手牌数小于其,你将手牌摸至与其相同并令此技能失效直到有轮结束(至多摸四张).',
        shuimeng_info: '出牌阶段结束时,你可以拼点:若你未输,你视为使用一张【无中生有】;否则赢者视为对你使用一张【过河拆桥】.',
        caozhao_backup: '草诏',
        caozhao_info: '出牌阶段限一次,你可展示一张手牌并声明一种未以此法声明过的基本牌或普通锦囊牌,令一名体力不大于你的其他角色选择一项:1.失去1点体力;2.令你可以将此牌交给一名角色,令此牌视为你声明的牌.',
        olxibing_info: '当你造成或受到伤害后,你可以弃置伤者和来源共计两张牌,两者中手牌少于对方的角色摸两张牌且本回合不能使用牌指定你为目标.',
        clanjiejian_info: '当你每回合使用第X张牌确定目标后,你可以令一名目标角色摸X张牌(X为此牌牌名字数).',
        olmouzhu_info: '出牌阶段限一次,你可以令一名有手牌的其他角色交给你一张手牌,若其手牌数小于你,其视为对你使用一张【决斗】.',
        olyanhuo_info: '当你受到伤害后,你可以令下一次有角色造成伤害时,之+1.',
        splveying: '掠影',
        splveying_info: '锁定技:①出牌阶段限四次,当你使用【杀】或武器牌时,你获得1枚<椎>;②当你使用【杀】或武器牌后,若你的「椎」数大于1,则你移去2枚「椎」并摸一张牌,视为使用一张【过河拆桥】.',
        spyingwu: '莺舞',
        spyingwu_info: '锁定技:①出牌阶段限四次,当你使用普通锦囊牌时,你获得1枚<椎>;②当你使用普通锦囊牌后,若你的「椎」数大于1,则你移去2枚「椎」并摸一张牌,视为使用一张【杀】.',
        quxi_info: '①每轮开始时,或当一名角色死亡时,你可以移去所有角色的「丰」和「歉」且令一名角色获得1枚「丰」,你令另一名角色获得1枚「歉」,若角色数为2,你令你不能再发动〖驱徙①〗且令前者获得后者一张牌;②有「丰」的角色的摸牌阶段结束时或受到伤害后,你令其摸一张牌;③有「歉」的角色的摸牌阶段结束时或回复体力后,你令其弃置一张牌.',
        bixiong_info: '锁定技,有「丰」或「歉」的角色失去最后的手牌后,你回复1点体力.',
        dcchiying_info: '出牌阶段每名角色限一次,你可以选择一名体力不大于你的角色,令其攻击范围内的其他角色依次弃置一张牌,若你选择的角色不为你,你获得以此法弃置的牌中所有的基本牌.',
        huguan_info: '一名角色于出牌阶段内使用第一张有花色的牌时,你可以令其检索一张此花色的牌获得之且其本回合此花色的手牌不计入手牌上限.',
        shefu_info: '游戏开始时或结束阶段,你可以记录一个基本牌或普通锦囊牌的牌名(不能为你武将牌上的牌对应的牌名中包含的牌名)并将一张牌置于武将牌上;当有其他角色使用手牌时,若你以此法记录的牌名中包含此牌牌名,你可以移去对应扣置的牌、取消此牌并对其造成1点伤害.',
        benyu_info: '当你受到伤害后,你可以将手牌摸至与来源相同(至多摸5张),你可以弃置不小于来源手牌数张牌对其造成1点伤害.',
        polu_info: '锁定技,游戏开始时、准备阶段或当你受到伤害后,你摸一张牌并装备【霹雳车】.',
        dcniji_info: '当你成为牌的目标后,你可以摸一张牌;一名角色的结束阶段,你使用一张<逆击>牌或弃置所有<逆击>牌.',
        caiwang_info: '当你使用或打出牌响应其他角色使用的牌,或其他角色使用或打出牌响应你使用的牌后,若这两张牌的花色不同,你可以获得其一张牌.',
        naxiang: '迫江',
        naxiang_info: '锁定技,当你造成伤害后,若你能视为对伤者使用一张【过河拆桥】,你须如此做,否则你回复1点体力.',
        oldianjun_info: '锁定技,一名角色的回合结束时,若:你本回合内使用或打出过基本牌,则你摸一张牌或视为使用其中一张牌;其为你,你受到1点伤害并获得一个出牌阶段.',
    };
    for (var i in obj) lib.translate[i] = obj[i];
    lib.skill.oldianjun = {
        audio: 2,
        trigger: { global: 'phaseEnd' },
        forced: true,
        filter(event, player) {
            if (event.player == player) return true;
            return (
                player.getHistory('useCard', function (card) {
                    return get.type(card.card) == 'basic';
                }).length > 0 ||
                player.getHistory('respond', function (card) {
                    return get.type(card.card) == 'basic';
                }).length > 0
            );
        },
        content() {
            'step 0';
            var list = [];
            player.getHistory('useCard', function (evt) {
                if (get.type(evt.card) != 'basic') return;
                var name = evt.card.name,
                    nature = evt.card.nature;
                if (!list.some((i) => i[0] == name && i[1] == nature)) list.push([name, nature]);
            });
            player.getHistory('respond', function (evt) {
                if (get.type(evt.card) != 'basic') return;
                var name = evt.card.name,
                    nature = evt.card.nature;
                if (!list.some((i) => i[0] == name && i[1] == nature)) list.push([name, nature]);
            });
            if (list.length) {
                for (var ki of list) if (player.hasUseTarget({ name: ki[0], nature: ki[1] })) var ppppp = true;
                if (ppppp)
                    player.chooseButton(
                        [
                            '〖执义〗请使用其中一张牌<br><span class=text><center>或点取消摸一张牌</center></span>',
                            [
                                list.map(function (name) {
                                    return ['🃏', '虚拟', name[0], name[1]];
                                }),
                                'vcard',
                            ],
                        ],
                        function (button) {
                            return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                        },
                        function (button) {
                            return _status.event.player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
                        }
                    );
                else event._result = { bool: false };
            } else event.goto(2);
            ('step 1');
            if (!result.bool) player.draw();
            else player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, true);
            ('step 2');
            if (player != trigger.player) event.finish();
            ('step 3');
            player.damage('nosource');
            ('step 4');
            trigger.phaseList.splice(trigger.num, 0, 'phaseUse|oldianjun');
        },
    };
    lib.skill.caiwang = {
        audio: 2,
        trigger: { global: ['useCard', 'respond'] },
        filter(event, player) {
            if (!Array.isArray(event.respondTo) || event.respondTo[0] == event.player || ![event.respondTo[0], event.player].includes(player)) return false;
            var color = event.card.suit;
            var color2 = event.respondTo[1].suit;
            if (color == color2) return false;
            var target = lib.skill.caiwang.logTarget(event, player);
            return target.countGainableCards(player, 'he') > 0;
        },
        logTarget(event, player) {
            return player == event.respondTo[0] ? event.player : event.respondTo[0];
        },
        prompt2: '<center>获得该角色的一张牌</center>',
        check(event, player) {
            return get.attitude(player, lib.skill.caiwang.logTarget(event, player)) <= 0;
        },
        popup: false,
        content() {
            'step 0';
            var target = lib.skill.caiwang.logTarget(trigger, player);
            player.gainPlayerCard(target, 'he', true);
        },
    };
    lib.skill.naxiang = {
        audio: 2,
        trigger: {
            source: 'damageSource',
        },
        filter(event, player) {
            if (player.isDamaged()) return true;
            return event.player && event.player != player && event.player.isIn() && player.canUse('guohe', event.player);
        },
        forced: true,
        logTarget: 'player',
        content() {
            if (trigger.player && trigger.player != player && trigger.player.isIn() && player.canUse('guohe', trigger.player)) player.useCard({ name: 'guohe' }, trigger.player);
            else player.recover();
        },
    };
    lib.skill.dcniji = {
        audio: 2,
        trigger: { target: 'useCardToTargeted' },
        forced: true,
        group: 'dcniji_discard',
        content() {
            player.draw().gaintag = ['dcniji'];
        },
        subSkill: {
            discard: {
                audio: 'dcniji',
                trigger: { global: 'phaseJieshuBegin' },
                filter(event, player) {
                    return player.hasCard((card) => card.hasGaintag('dcniji'), 'h');
                },
                forced: true,
                content() {
                    'step 0';
                    var cards = player.getCards('h', (card) => card.hasGaintag('dcniji'));
                    event.cards = cards;
                    if (cards.some((card) => player.hasUseTarget(card))) {
                        player.chooseToUse({
                            prompt: '是否使用一张<逆击>牌？',
                            prompt2: '或点取消弃置所有<逆击>牌',
                            filterCard(card, player) {
                                if (get.itemtype(card) != 'card' || !card.hasGaintag('dcniji')) return false;
                                return lib.filter.filterCard.apply(this, arguments);
                            },
                            ai1(card) {
                                return get.player().getUseValue(card) + 0.1;
                            },
                        });
                    }
                    ('step 1');
                    if (!result.bool) {
                        var cards = cards.filter((card) => get.owner(card) == player && get.position(card) == 'h' && lib.filter.cardDiscardable(card, player, 'dcniji'));
                        if (cards.length) player.discard(cards);
                    }
                },
            },
        },
        ai: {
            reverseEquip: true,
        },
    };
    lib.skill.polu = {
        trigger: {
            global: 'skillStart',
            player: ['phaseZhunbeiBegin', 'damageEnd'],
        },
        audio: 2,
        forced: true,
        content() {
            'step 0';
            player.draw();
            ('step 1');
            if (!player.storage.polu) player.storage.polu = game.createCard2('piliche', 'heart', 5, false);
            if (get.position(player.storage.polu) != 'e' || get.owner(player.storage.polu) != player) {
                player.chooseUseTarget(player.storage.polu, player, true, 'nopopup', 'noanimate', 'noTargetDelay');
            }
        },
        mod: {
            aiValue(player, card, num) {
                if (get.equiptype(card) == 1) {
                    if (player.beOn('phaseUse') && player.getCardUsable(card) > 0) return num;
                    return 0.5;
                }
            },
        },
    };
    if (lib.skill.shefu) {
        lib.skill.shefu.trigger = { player: 'phaseJieshuBegin', global: 'skillStart' };
        lib.skill.shefu.content = function () {
            'step 0';
            var list1 = [],
                list2 = [],
                list3 = [];
            for (var i = 0; i < lib.inpile.length; i++) {
                var type = get.type(lib.inpile[i]);
                if (type == 'basic') {
                    list1.push(['基本', '', lib.inpile[i]]);
                } else if (type == 'trick') {
                    list2.push(['锦囊', '', lib.inpile[i]]);
                } else if (type == 'delay') {
                    list3.push(['锦囊', '', lib.inpile[i]]);
                }
            }
            player
                .chooseButton(['〖设伏〗你可以记录一个牌名并将一张牌置于武将牌上', [list1.concat(list2).concat(list3), 'vcard']])
                .set('filterButton', function (button) {
                    var player = _status.event.player;
                    if (player.storage.shefu2 && player.storage.shefu2.includes(button.link[2])) return false;
                    return true;
                })
                .set('ai', function (button) {
                    var rand = _status.event.rand;
                    switch (button.link[2]) {
                        case 'sha':
                            return 7 + rand[1];
                        case 'tao':
                            return 5 + rand[2];
                        case 'lebu':
                            return 5 + rand[3];
                        case 'shan':
                            return 6.5 + rand[4];
                        case 'wuzhong':
                            return 6 + rand[5];
                        case 'shunshou':
                            return 5 + rand[6];
                        case 'nanman':
                            return 4 + rand[7];
                        case 'wanjian':
                            return 4 + rand[8];
                        default:
                            return rand[0];
                    }
                })
                .set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]);
            ('step 1');
            if (result.links?.length) {
                event.cardname = result.links[0][2];
                player.chooseCard('he', '选择一张牌置于武将牌上');
            } else event.finish();
            ('step 2');
            if (result.cards?.length) {
                var card = result.cards[0];
                event.card = card;
                player.addToExpansion(card, player, 'give').gaintag.add('shefu');
            } else event.finish();
            ('step 3');
            if (player.getExpansions('shefu').includes(event.card)) {
                player.storage.shefu.push(card);
                player.storage.shefu2.push(event.cardname);
                if (player.isOnline2()) {
                    player.send(function (storage) {
                        game.me.storage.shefu2 = storage;
                    }, player.storage.shefu2);
                }
                player.markSkill('shefu');
            }
        };
        lib.skill.shefu2 = {
            trigger: { global: ['useCard'] },
            audio: 'shefu',
            filter(event, player) {
                if (_status.currentPhase == player || event.player == player) return false;
                return (
                    player.storage.shefu2 &&
                    player.storage.shefu2.includes(event.card.name) &&
                    event.player.getHistory('lose', function (evt) {
                        return evt.parent == event && evt.hs && evt.hs.length == event.cards.length;
                    }).length
                );
            },
            logTarget: 'player',
            check(trigger, player) {
                if (get.attitude(player, trigger.player) >= 0) return false;
                var effect = 0;
                if (trigger.card.name == 'wuxie' || trigger.card.name == 'shan') {
                    if (get.attitude(player, trigger.player) < -1) effect = -1;
                } else if (trigger.targets && trigger.targets.length) {
                    for (var i = 0; i < trigger.targets.length; i++) {
                        effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                    }
                }
                if (effect < 0) {
                    if (trigger.card.name == 'sha') {
                        var target = trigger.targets[0];
                        if (target == player) return !player.countCards('h', 'shan');
                        else return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
                    } else return true;
                }
                return false;
            },
            prompt2(trigger, player) {
                var str = '<center>取消其';
                if (trigger.targets && trigger.targets.length) str += '对' + get.translation(trigger.targets);
                str += '使用的' + get.translation(trigger.card) + '</center>';
                return str;
            },
            content() {
                'step 0';
                var index = player.storage.shefu2.indexOf(trigger.card.name);
                if (index != -1) {
                    var card = player.storage.shefu[index];
                    player.loseToDiscardpile(card);
                    player.storage.shefu.splice(index, 1);
                    player.storage.shefu2.splice(index, 1);
                    if (player.storage.shefu.length == 0) player.unmarkSkill('shefu');
                    else {
                        player.markSkill('shefu');
                        if (player.isOnline2()) {
                            player.send(function (storage) {
                                game.me.storage.shefu2 = storage;
                            }, player.storage.shefu2);
                        }
                    }
                }
                trigger.targets.length = 0;
                trigger.all_excluded = true;
                ('step 1');
                trigger.player.damage();
            },
            ai: {
                threaten: 1.8,
                expose: 0.3,
            },
        };
        lib.skill.benyu = {
            audio: 2,
            forced: true,
            trigger: { player: 'damageEnd' },
            filter(event, player) {
                return event.source && event.source.isIn();
            },
            logTarget: 'source',
            content() {
                'step 0';
                var sh = trigger.source.countCards('h');
                var ph = player.countCards('h');
                if (ph < sh) player.draw(Math.min(sh - ph, 5));
                ('step 1');
                var num = trigger.source.countCards('h');
                player
                    .chooseToDiscard([num, player.countDiscardableCards(player, 'he')], 'he', '〖贲育〗你可以弃置至少' + get.cnNumber(num) + '张牌对' + get.translation(trigger.source) + '造成1点伤害')
                    .set('ai', function (card) {
                        var trigger = _status.event.getTrigger();
                        var player = _status.event.player;
                        if (ui.selected.cards.length >= _status.event.num) return -1;
                        if (get.damageEffect(trigger.source, player, player) > 0 && (get.value(card, player) < 0 || _status.event.num <= 2)) return 8 - get.value(card);
                        return -1;
                    })
                    .set('num', num);
                ('step 2');
                if (result.bool) trigger.source.damage();
            },
        };
    }
    lib.skill.dcchiying = {
        audio: 2,
        enable: 'phaseUse',
        everyOnce: '1:phaseUse',
        filter(event, player) {
            return game.hasPlayer((current) => lib.skill.dcchiying.filterTarget(event, player, current));
        },
        filterTarget(card, player, target) {
            return target.hp <= player.hp && player.getEveryOnce('dcchiying', target);
        },
        content() {
            'step 0';
            player.addCountNum('dcchiying', target, 'phaseUseBefore');
            var targets = game.filterPlayer((current) => target.inRange(current) && current != player).sortBySeat(player);
            event.targets = targets;
            if (!targets.length) event.finish();
            ('step 1');
            var current = targets.shift();
            if (current.countCards('he')) current.chooseToDiscard('〖驰应〗请弃置一张牌', 'he', true);
            if (targets.length) event.redo();
            ('step 2');
            if (target != player) {
                var cards = [];
                game.getGlobalHistory('cardMove', (evt) => {
                    if (evt.getParent(3) == event) {
                        cards.addArray(evt.cards.filter((card) => get.type(card) == 'basic'));
                    }
                });
                cards = cards.filterInD('d');
                if (cards.length) player.gain(cards, 'gain2');
            }
        },
        ai: {
            order: 9,
            result: {
                target(player, target) {
                    var targets = game.filterPlayer((current) => target.inRange(current) && current != player);
                    var eff = 0;
                    for (var targetx of targets) {
                        var effx = get.effect(targetx, { name: 'guohe_copy2' }, player, target);
                        if (get.attitude(player, targetx) < 0) effx /= 2;
                        eff += effx;
                    }
                    return (target == player ? 0.5 : 1) * eff * (get.attitude(player, target) <= 0 ? 0.75 : 1);
                },
            },
        },
    };
    lib.skill.huguan = {
        audio: 2,
        audioname: ['wangyue'],
        trigger: { global: 'useCard' },
        check(event, player) {
            return get.attitude(player, event.player) > 0;
        },
        logTarget: 'player',
        frequent: 'check',
        prompt2(event, player) {
            return '<center>其检索一张' + get.translation(event.card.suit) + '花色的牌获得之,且本回合此花色的牌不计入其手牌上限</center>';
        },
        filter(event, player) {
            if (!lib.config.autoskilllist.includes('huguan') && get.attitude(player, event.player) < 0) return false;
            if (!event.player.beOn('phaseUse')) return false;
            return (
                event.player
                    .getHistory('useCard', function (event) {
                        return event.getParent('phaseUse') == _status.currentStage && lib.suit.includes(event.card.suit);
                    })
                    .indexOf(event) == 0
            );
        },
        content() {
            'step 0';
            var card = get.cardPile((card) => card.suit == trigger.card.suit);
            if (card) trigger.player.gain(card, 'gain2');
            ('step 1');
            trigger.player.addTempSkill('huguan_add');
            trigger.player.markAuto('huguan_add', [trigger.card.suit]);
        },
        subSkill: {
            add: {
                charlotte: true,
                mod: {
                    ignoredHandcard(card, player) {
                        if (player.getStorage('huguan_add').includes(card.suit)) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && player.getStorage('huguan_add').includes(card.suit)) return false;
                    },
                },
                intro: {
                    content: '<center>本回合$花色的牌不计入手牌上限</center>',
                    markcount(storage, player) {
                        if (storage && storage.length == 1) return get.translation(storage);
                        return (storage || []).length;
                    },
                },
            },
        },
    };
    lib.skill.quxi = {
        audio: 2,
        group: ['quxi_gainA', 'quxi_loseA'],
        trigger: { global: ['roundStart', 'die'] },
        forced: true,
        filter(event, player) {
            return !player.storage.quxi;
        },
        content() {
            'step 0';
            player.chooseTarget('〖驱徙〗你可以令一名角色获得「丰」<br><span class=text>你移去此前发配的所有「丰」「歉」并于此后发配「歉」<br>有「丰」的角色摸牌阶段结束时或受到伤害后,其摸一张牌</span>').set('ai', function (target) {
                var player = _status.event.player;
                return get.attitude(player, target);
            });
            ('step 1');
            if (result.targets?.length) {
                var target = result.targets[0];
                event.target = target;
                game.countPlayer((current) => {
                    var gain = current.countMark('quxi_gain');
                    var lose = current.countMark('quxi_lose');
                    if (gain) current.removeMark('quxi_gain', gain);
                    if (lose) current.removeMark('quxi_lose', gain);
                });
                target.addMark('quxi_gain', 1);
            } else event.finish();
            ('step 2');
            if (
                game.hasPlayer(function (current) {
                    return current != target;
                })
            )
                player
                    .chooseTarget(true, '〖驱徙〗请令另一名角色获得「歉」<br><span class=text>有「歉」的角色摸牌阶段结束时或回复体力后,其弃置一张牌</span>', function (card, player, target) {
                        return target != _status.event.getParent('quxi').target;
                    })
                    .set('ai', function (target) {
                        var player = _status.event.player;
                        return -get.attitude(player, target);
                    });
            else event.finish();
            ('step 3');
            if (result.bool) {
                var targets = result.targets;
                event.qian = targets[0];
                player.logSkill_qyhccl(['quxi', '驱徙·歉'], targets);
                targets[0].addMark('quxi_lose', 1);
            }
            ('step 4');
            if (game.countPlayer() == 2) {
                player.storage.quxi = true;
                var next = target.gainPlayerCard(event.qian, 'he', '〖驱徙〗获得' + get.translation(event.qian) + '一张牌', true);
                target
                    .when('rewriteGainResult')
                    .filter((evt) => evt.parent == next)
                    .then(() => {
                        player.logSkill_qyhccl('quxi');
                        player.$skill('驱徙');
                    });
            }
        },
        subSkill: {
            gainA: {
                trigger: { global: ['phaseDrawEnd', 'damageEnd'] },
                forced: true,
                filter(event, player) {
                    return event.player.countMark('quxi_gain') != 0;
                },
                logTarget: 'player',
                content() {
                    trigger.player.draw();
                },
            },
            loseA: {
                trigger: { global: ['phaseDrawEnd', 'recoverEnd'] },
                forced: true,
                filter(event, player) {
                    return event.player.countMark('quxi_lose') != 0 && event.player.countDiscardableCards(event.player, 'he');
                },
                logTarget: 'player',
                content() {
                    trigger.player.chooseToDiscard(true, '〖驱徙〗请弃置一张牌', 'he');
                },
            },
            gain: {
                marktext: '丰',
                intro: {
                    name: '驱徙(丰)',
                    name2: '丰',
                    content: 'mark',
                },
            },
            lose: {
                marktext: '歉',
                intro: {
                    name: '驱徙(歉)',
                    name2: '歉',
                    content: 'mark',
                },
            },
        },
    };
    lib.skill.bixiong = {
        audio: 2,
        trigger: { global: 'loseCardAfter' },
        filter(event, player) {
            return event.lasth && event.loser && (event.loser.countMark('quxi_gain') || event.loser.countMark('quxi_lose')) && player.isDamaged();
        },
        forced: true,
        content() {
            trigger.loser.line(player);
            player.recover();
        },
    };
    lib.skill.splveying = {
        audio: 2,
        trigger: { player: 'useCardAfter' },
        forced: true,
        filter(event, player) {
            if (player.countMark('splveying') < 2) return false;
            return event.card.name == 'sha' || get.equiptype(event.card) == 1;
        },
        content() {
            'step 0';
            player.removeMark('splveying', 2);
            player.draw();
            ('step 1');
            player.chooseUseTarget('guohe', true);
        },
        marktext: '椎',
        intro: {
            name: '椎(掠影/莺舞)',
            name2: '椎',
            content: 'mark',
        },
        group: 'splveying_add',
        subSkill: {
            add: {
                trigger: { player: 'useCard' },
                forced: true,
                usable: 4,
                updateUsable: 'phaseUse',
                filter(event, player) {
                    if (!player.beOn('phaseUse')) return false;
                    return event.card.name == 'sha' || get.equiptype(event.card) == 1;
                },
                content() {
                    player.stageUsableAt('splveying', true);
                    player.addMark('splveying', 1);
                },
            },
        },
    };
    lib.skill.jsrgfenjian = {
        audio: 2,
        enable: 'chooseToUse',
        filter(event, player) {
            return ['juedou', 'tao'].some((name) => {
                return (
                    !player.getStorage('jsrgfenjian_used').includes(name) &&
                    event.filterCard(
                        {
                            name: name,
                        },
                        player,
                        event
                    )
                );
            });
        },
        hiddenCard(player, name) {
            if (['juedou', 'tao'].some((i) => i == name && !player.getStorage('jsrgfenjian_used').includes(name))) return true;
            return false;
        },
        chooseButton: {
            dialog(event, player) {
                var dialog = ui.create.dialog('奋剑', [['juedou', 'tao'].filter((name) => !player.getStorage('jsrgfenjian_used').includes(name)), 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            filter(button, player) {
                var evt = _status.event.parent;
                return evt.filterCard(
                    {
                        name: button.link[2],
                    },
                    player,
                    evt
                );
            },
            check(button) {
                return _status.event.player.getUseValue({
                    name: button.link[2],
                });
            },
            backup(links) {
                return {
                    audio: 'jsrgfenjian',
                    viewAs: {
                        name: links[0][2],
                    },
                    filterCard: () => false,
                    selectCard: -1,
                    precontent() {
                        delete event.result.skill;
                        player.addTempSkill('jsrgfenjian_effect');
                        player.addMark('jsrgfenjian_effect', 1, false);
                        if (!player.storage.jsrgfenjian_used)
                            player.when({ global: 'phaseAfter' }).then(() => {
                                delete player.storage.jsrgfenjian_used;
                            });
                        player.markAuto('jsrgfenjian_used', [event.result.card.name]);
                    },
                };
            },
            prompt(links) {
                return '奋剑:令你本回合受到的伤害+1,视为使用' + get.translation(links[0][2]);
            },
        },
        ai: {
            order(item, player) {
                return Math.max(get.order({ name: 'juedou' }), get.order({ name: 'tao' })) + 0.2;
            },
            result: { player: 1 },
        },
        subSkill: {
            effect: {
                audio: 'jsrgfenjian',
                charlotte: true,
                trigger: { player: 'damageBegin1' },
                forced: true,
                content() {
                    trigger.num += player.countMark('jsrgfenjian_effect');
                },
                intro: { content: '本回合受到的伤害+#' },
            },
        },
    };
    lib.translate.jsrgfenjian_info = '每回合各限一次,当你需要使用【决斗】或【桃】时,你可以令你本回合受到的伤害+1,视为使用之.';
    lib.skill.spyingwu = {
        group: 'spyingwu_add',
        audio: 2,
        trigger: { player: 'useCardAfter' },
        forced: true,
        filter(event, player) {
            if (player.countMark('splveying') < 2) return false;
            return get.type(event.card) == 'trick';
        },
        content() {
            'step 0';
            player.removeMark('splveying', 2);
            player.draw();
            ('step 1');
            player.chooseUseTarget('sha', true).set('addCount', false);
        },
        subSkill: {
            add: {
                trigger: { player: 'useCard' },
                forced: true,
                usable: 4,
                updateUsable: 'phaseUse',
                filter(event, player) {
                    if (!player.beOn('phaseUse')) return false;
                    return get.type(event.card) == 'trick';
                },
                content() {
                    player.stageUsableAt('spyingwu', true);
                    player.addMark('splveying', 1);
                },
            },
        },
    };
    if (lib.skill.olmouzhu) {
        lib.skill.olmouzhu.filter = function (event, player) {
            return game.hasPlayer((current) => current != player && current.countCards('h'));
        };
        lib.skill.olmouzhu.content = function () {
            'step 0';
            target.chooseCard('h', get.translation(player) + '对你发动〖谋诛〗,请交给其一张手牌<br><span class=text>若你手牌数小于其,你视为对其使用一张【决斗】</span>', true);
            ('step 1');
            if (result.bool) target.give(result.cards, player);
            ('step 2');
            if (player.countCards('h') > target.countCards('h') && target.canUse('juedou', player)) target.useCard({ name: 'juedou' }, player);
        };
        lib.skill.olmouzhu.ai.result.target = function (player, target) {
            return -2;
        };
        lib.skill.olmouzhu.ai.result.player = function (player, target) {
            if (target.countCards('h') < player.countCards('h') + 2) return get.effect(player, { name: 'juedou' }, target, player) / player.hp;
        };
        lib.skill.olyanhuo = {
            audio: 'yanhuo',
            trigger: { player: 'damageEnd' },
            check(event, player) {
                if (event.lianhuanable) {
                    var targets =
                        event.lianhuantargets ||
                        game.filterPlayer(function (current) {
                            return current != player && current.isLinked();
                        });
                    if (targets.length) targets.sortBySeat(_status.currentPhase);
                    else return false;
                    return -get.attitude(player, targets[0]);
                }
                if (_status.currentPhase.beOn('canDamage')) return get.attitude(player, _status.currentPhase);
            },
            prompt2: '<center>令下一次有角色造成伤害时,之+1</center>',
            filter(event, player) {
                return !qyhcCL.skillid.olyanhuo;
            },
            content() {
                game.addGlobalSkill('olyanhuo_effect');
                qyhcCL.skillid.olyanhuo = ui.create.system(
                    '延祸',
                    function () {
                        var uiintro = ui.create.dialog('hidden');
                        uiintro.listen(function (e) {
                            e.stopPropagation();
                        });
                        uiintro.addText('下一次有角色造成的伤害+1');
                        return uiintro;
                    },
                    true
                );
                lib.setPopped(
                    qyhcCL.skillid.olyanhuo,
                    function () {
                        var uiintro = ui.create.dialog('hidden');
                        uiintro.listen(function (e) {
                            e.stopPropagation();
                        });
                        uiintro.addText('下一次有角色造成的伤害+1');
                        return uiintro;
                    },
                    230
                );
            },
            subSkill: {
                effect: {
                    trigger: {
                        source: 'damageBegin1',
                    },
                    charlotte: true,
                    forced: true,
                    content() {
                        game.log('#g〖延祸〗', '效果触发');
                        player.logSkill_qyhccl('olyanhuo', trigger.player);
                        game.removeGlobalSkill('olyanhuo_effect');
                        trigger.num++;
                        if (qyhcCL.skillid.olyanhuo) {
                            qyhcCL.skillid.olyanhuo.remove();
                            delete qyhcCL.skillid.olyanhuo;
                        }
                    },
                },
            },
        };
    }
    if (config.jiangshanrugu) {
        lib.skill.olmouzhu.audio = 'jsrgzhuhuan';
        lib.skill.olyanhuo.audio = 'jsrgyanhuo';
    }
    if (lib.skill.clanjiejian) {
        lib.skill.clanjiejian.filter = function (event, player) {
            if (!event.isFirstTarget) return false;
            return get.cardNameLength(event.card) == player.getHistory('useCard').indexOf(event.parent) + 1;
        };
        lib.skill.clanjiejian.locked = false;
    }
    lib.skill.qianya = {
        audio: 2,
        trigger: { target: 'useCardToTargeted' },
        forced: true,
        filter(event, player) {
            return get.type(event.card, 'trick') == 'trick' && player.countCards('he');
        },
        content() {
            'step 0';
            var nh = player.countCards('he');
            player.chooseCardTarget({
                filterCard: true,
                filterTarget(card, player, target) {
                    return target != player;
                },
                selectCard: [1, nh],
                position: 'he',
                ai1(card) {
                    var player = _status.event.player;
                    if (_status.event.du) return -get.value(card, player, 'raw');
                    return 1;
                },
                ai2(target) {
                    var att = get.attitude(_status.event.player, target);
                    var nh2 = target.countCards('h');
                    var num = Math.sqrt(1 + nh2);
                    if (_status.event.du) return 0.5 - att;
                    else return att / num;
                },
                du: player.hasCard(function (card) {
                    return get.value(card, player, 'raw') < 0;
                }),
                prompt: '〖谦雅〗你可以将任意张牌交给一名其他角色<br><span class=text>若你手牌数小于其,你将手牌摸至与其相同并令本轮此技能失效(至多摸四张)</span>',
            });
            ('step 1');
            if (result.targets?.length) {
                player.give(result.cards, result.targets[0]);
                event.target = result.targets[0];
            } else event.finish();
            ('step 2');
            var th = target.countCards('h');
            var ph = player.countCards('h');
            if (ph < th) {
                player.draw(Math.min(th - ph, 4));
                player.addTempSkill('qianya_disable', 'roundFinish');
            }
        },
        mark: true,
        marktext: '<span class=greentext>谦雅✓</span>',
        intro: {
            content: '<span class=greentext><center>本轮〖谦雅〗仍可再发动</center></span>',
            name: '<span class=greentext>谦雅✓</span>',
            updatetrigger: { global: ['phaseAfter', 'creatMark'], player: ['qianyaEnd', 'clAddSkill'] },
        },
        mark: true,
        subSkill: {
            disable: {
                inherit: 'fengyin',
                skillBlocker(skill, player) {
                    return skill == 'qianya';
                },
                mark: true,
                marktext: '<span class=redtext>谦雅×</span>',
                intro: {
                    content: '<span class=redtext><center>本轮〖谦雅〗不可再发动</center></span>',
                    name: '<span class=redtext>谦雅×</span>',
                    updatetrigger: { global: ['phaseAfter', 'creatMark'], player: ['qianyaEnd', 'clAddSkill'] },
                },
            },
        },
    };
    lib.skill.shuimeng = {
        audio: 2,
        trigger: { player: 'phaseUseAfter' },
        forced: true,
        filter(event, player) {
            return player.countCards('h');
        },
        content() {
            'step 0';
            player
                .chooseTarget('〖说盟〗你可以与一名角色拼点', '<center>若你未输,你视为使用一张【无中生有】;否则其视为对你使用一张【过河拆桥】</center>', function (card, player, target) {
                    return player.canCompare(target);
                })
                .set('ai', function (target) {
                    if (!_status.event.goon) return 0;
                    return -get.attitude(_status.event.player, target);
                })
                .set(
                    'goon',
                    player.hasSkill('qianya') ||
                    player.needsToDiscard() ||
                    player.hasCard(function (card) {
                        var val = get.value(card);
                        if (val < 0) return true;
                        if (val <= 5) return card.number >= 11;
                        if (val <= 6) return card.number >= 12;
                        return false;
                    })
                );
            ('step 1');
            if (result.targets?.length) {
                event.target = result.targets[0];
                player.chooseToCompare(event.target);
            } else event.finish();
            ('step 2');
            if (result.bool || result.tie) player.chooseUseTarget({ name: 'wuzhong' }, true);
            else if (event.target.canUse('guohe', player)) event.target.useCard({ name: 'guohe' }, player);
        },
    };
    if (lib.skill.olsaogu) {
        lib.skill.olsaogu.intro.content = 'base';
        lib.skill.olsaogu.ai.order = function (item, player) {
            if (player.storage.olsaogu) return 20;
            return get.order({ name: 'sha' }, player) + 0.2;
        };
        lib.skill.olsaogu.subSkill.effect = {
            trigger: { player: 'phaseJieshuBegin' },
            forced: true,
            content() {
                'step 0';
                var list = [];
                player.getHistory('lose', (evt) => {
                    if (evt.type == 'discard' && evt.getParent('phaseJieshu').name == 'phaseJieshu') list.addArray(evt.cards2);
                });
                event.list = list;
                var str,
                    storage = player.storage.olsaogu;
                if (storage) str = '令一名其他角色摸一张牌';
                else {
                    str = '令一名其他角色弃置两张牌,其使用弃置的【杀】';
                    if (list.length) {
                        var text = '',
                            suits = list
                                .reduce(function (list, card) {
                                    return list.add(card.suit), list;
                                }, [])
                                .sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                        for (var i = 0; i < suits.length; i++) text += get.translation(suits[i]);
                        str = str.replace(',', '(不能包含' + text + '花色),');
                    }
                }
                player
                    .chooseTarget(
                        get.prompt('olsaogu'),
                        '<center>' + str + '</center>',
                        function (card, player, target) {
                            return player != target && (player.storage.olsaogu || target.countCards('he') > 1);
                        },
                        function (target) {
                            var player = _status.event.player;
                            var att = get.attitude(player, target);
                            if (player.storage.olsaogu) return att;
                            var list = _status.event.list.slice();
                            var cards = target.getCards('he', (card) => {
                                if (card.name != 'sha' || list.some((cardx) => cardx.suit == card.suit)) return false;
                                return (
                                    lib.filter.cardDiscardable(card, target) &&
                                    game.hasPlayer(function (current) {
                                        if (!current.canUse(card, target, false)) return false;
                                        return get.effect(current, card, target, target) > 0 && get.effect(current, card, target, player) > 0;
                                    })
                                );
                            });
                            if (cards.length && att > 0)
                                return (
                                    Math.sqrt(Math.min(2, cards.length)) *
                                    cards.reduce(function (num, card) {
                                        var players = game.filterPlayer((current) => target.canUse(card, current, false));
                                        players.sort((a, b) => get.effect(b, card, target, target) * get.effect(b, card, target, player) - get.effect(a, card, target, target) * get.effect(a, card, target, player));
                                        return (num = get.effect(players[0], card, target, target) * get.effect(players[0], card, target, player));
                                    }, 0)
                                );
                            return (
                                get.effect(target, { name: 'guohe_copy2' }, player, player) *
                                Math.sqrt(
                                    Math.min(
                                        2,
                                        target.getDiscardableCards(player, 'he').filter((card) => {
                                            return !list.some((cardx) => cardx.suit == card.suit);
                                        }).length
                                    )
                                )
                            );
                        }
                    )
                    .set('list', list);
                ('step 1');
                if (result.targets?.length) {
                    var target = result.targets[0];
                    player.changeZhuanhuanji('olsaogu');
                    if (!player.storage.olsaogu) {
                        target.draw();
                        event.finish();
                    } else {
                        event.target = target;
                        var list = result.cards.slice();
                        player.getHistory('lose', (evt) => {
                            if (evt.type == 'discard' && evt.getParent('phaseJieshu').name == 'phaseJieshu') list.addArray(evt.cards2);
                        });
                        var cards = target.getCards('he', (card) => {
                            return lib.filter.cardDiscardable(card, target) && !list.some((cardx) => cardx.suit == card.suit);
                        });
                        if (cards.length) {
                            var text = '',
                                suits = list
                                    .reduce(function (list, card) {
                                        return list.add(card.suit), list;
                                    }, [])
                                    .sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                            for (var i = 0; i < suits.length; i++) text += get.translation(suits[i]);
                            target
                                .chooseToDiscard(
                                    'he',
                                    '〖扫谷〗弃置两张牌(不能弃置' + text + '花色的牌),使用其中的【杀】',
                                    function (card, player) {
                                        var list = _status.event.list;
                                        return !list.some((cardx) => cardx.suit == card.suit);
                                    },
                                    Math.min(cards.length, 2),
                                    true
                                )
                                .set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (card.name == 'sha' && player.hasValueTarget(card)) return 10;
                                    return -get.value(card);
                                })
                                .set('list', list);
                        } else event.finish();
                    }
                } else event.finish();
                ('step 2');
                if (result.bool) {
                    var cards = result.cards.filter((card) => card.name == 'sha');
                    if (cards.length) {
                        var next = game.createEvent('olsaogu_chooseToUseSha');
                        next.player = target;
                        next.cards = cards;
                        next.setContent(lib.skill.olsaogu.chooseToUseSha);
                    }
                }
            },
        };
    }
    if (lib.skill.xinchoufa) {
        //司马昭
        lib.skill.xinchoufa.content = function () {
            'step 0';
            player.choosePlayerCard(target, 'h', true);
            ('step 1');
            player.showCards(result.cards, get.translation(player) + '对' + get.translation(target) + '发动了【筹伐】');
            var type = get.type2(result.cards[0], target),
                hs = target.getCards('h', function (card) {
                    return card != result.cards[0] && get.type2(card, target) != type;
                });
            if (hs.length) {
                target.addGaintag(hs, 'xinchoufa');
                target.addTempSkill('xinchoufa2', { player: 'phaseAfter' });
            }
            event.card = result.cards[0];
            ('step 2');
            if (player.getShownCards().length) target.give(card, player, true);
        };
        lib.skill.tuishi = {
            audio: 2,
            forced: true,
            trigger: { global: 'phaseEnd' },
            filter(event, player) {
                var target = _status.currentPhase;
                return (
                    player.getHistory('damage').length &&
                    target &&
                    target.isIn() &&
                    game.hasPlayer(function (current) {
                        return current != target && target.inRange(current);
                    })
                );
            },
            content() {
                'step 0';
                var target = _status.currentPhase;
                event.target = target;
                player
                    .chooseTarget('###你可以选择其中一名角色以对' + get.translation(target) + '发动〖推弑〗###<center>你失去〖推弑〗且除非其对你选择的角色使用一张【杀】,否则你对其造成1点伤害</center>', function (card, player, target) {
                        var source = _status.event.source;
                        return source != target && source.inRange(target);
                    })
                    .set('source', target)
                    .set('goon', get.damageEffect(target, player, player) > 1)
                    .set('ai', function (target) {
                        if (!_status.event.goon) return 0;
                        var evt = _status.event;
                        return get.effect(target, { name: 'sha' }, evt.source, evt.player);
                    });
                ('step 1');
                if (result.targets?.length) {
                    event.target2 = result.targets[0];
                    target.line(event.target2);
                    player.removeSkill('tuishi');
                } else event.finish();
                ('step 2');
                target.chooseToUse({
                    preTarget: event.target2,
                    prompt: '〖推弑〗请对' + get.translation(event.target2) + '使用一张【杀】',
                    prompt2: '或点取消受到' + get.translation(player) + '造成的一点伤害',
                    filterCard(card, player) {
                        return card.name == 'sha' && lib.filter.filterCard.apply(this, arguments);
                    },
                    filterTarget(card, player, target) {
                        return target == _status.event.preTarget && lib.filter.filterTarget.apply(this, arguments);
                    },
                    addCount: false,
                });
                ('step 3');
                if (!result.bool) target.damage();
            },
        };
    }
    if (lib.skill.huirong) {
        //羊徽瑜
        lib.skill.huirong = {
            trigger: { player: ['showCharacterAfter', 'phaseZhunbeiBegin'] },
            forced: true,
            filter(event, player, name) {
                if (name == 'phaseZhunbeiBegin') return true;
                return event.toShow && event.toShow.includes('jin_yanghuiyu');
            },
            hiddenSkill: true,
            content() {
                'step 0';
                player.chooseTarget('〖慧容〗你可以选择一名角色', '<center>若其手牌数等于体力,你令其回复或失去1点体力<br>否则其将手牌调整至数量与体力相同(至多调整两张)</center>').set('ai', function (target) {
                    var player = _status.event.player;
                    var hs = target.countCards('h');
                    var num = Math.min(Math.abs(hs - target.hp), 2);
                    if (num == 0) {
                        if (target.isHealthy()) return get.losehpEffect(target, player);
                        return Math.max(get.recoverEffect(target, player, player), get.losehpEffect(target, player));
                    }
                    if (hs > target.hp) return get.yanzhuEffect(target, player, num);
                    return get.drawEffect(target, num, player);
                });
                ('step 1');
                if (result.targets?.length) {
                    var target = result.targets[0];
                    event.target = target;
                    var hs = target.countCards('h');
                    var num = Math.min(Math.abs(hs - target.hp), 2);
                    if (num == 0) {
                        if (target.isHealthy()) target.loseHp();
                        else event.goto(3);
                    } else if (hs < target.hp) target.draw(num);
                    else target.chooseToDiscard('h', true, num, get.translation(player) + '对你发动〖慧容〗').set('prompt2', '<center>请弃置' + get.cnNumber(num) + '张牌</center>');
                }
                ('step 2');
                event.finish();
                ('step 3');
                player
                    .chooseControl(['回复1点体力', '失去1点体力'])
                    .set('prompt', '你对' + get.translation(event.target) + '发动〖慧容〗,令其...')
                    .set('choice', get.recoverEffect(target, player, player) >= get.losehpEffect(target, player) ? 0 : 1);
                ('step 4');
                player.line(event.target);
                if (result.index) event.target.loseHp();
                else event.target.recover();
            },
        };
        lib.skill.caiyuan = {
            trigger: { player: 'phaseEnd' },
            forced: true,
            content() {
                'step 0';
                var ct = player.countMark('caiyuan');
                if (ct <= player.hp) player.draw(2);
                ('step 1');
                player.storage.caiyuan = player.hp;
            },
            mark: true,
            marktext: '媛',
            intro: {
                content: '<center>拥有#枚「媛」</center>',
                markcount: (storage) => (storage || 0).toString(),
            },
            audio: 2,
        };
        lib.skill.ciwei = {
            trigger: { global: 'useCard' },
            forced: true,
            preHidden: true,
            filter(event, player) {
                if (event.player == player || !player.countCards('he')) return false;
                return event.player.getHistory('useCard').indexOf(event) == 1 && ['basic', 'trick'].includes(get.type(event.card));
            },
            content() {
                'step 0';
                player
                    .chooseToDiscard('是否发动〖慈威〗？', '<center>弃置一张牌并取消' + get.translation(trigger.card) + '</center>', 'he')
                    .set('ai', function (card) {
                        return _status.event.goon / 1.4 - get.value(card);
                    })
                    .set(
                        'goon',
                        (function () {
                            if (trigger.all_excluded) return 0;
                            if (!trigger.targets.length) return -get.attitude(player, trigger.player);
                            var num = 0;
                            for (var i of trigger.targets) {
                                num -= get.effect(i, trigger.card, trigger.player, player);
                            }
                            return num;
                        })()
                    )
                    .setHiddenSkill(event.name);
                ('step 1');
                if (result.bool) {
                    trigger.targets.length = 0;
                    trigger.all_excluded = true;
                    game.log(trigger.card, '被取消了');
                }
            },
            global: 'ciwei_ai',
        };
        lib.skill.ciwei_ai.mod.aiOrder = function (player, card, num) {
            if (
                player.getHistory('useCard').length > 1 ||
                !game.hasPlayer(function (current) {
                    return current != player && (get.realAttitude || get.attitude)(current, player) < 0 && current.hasSkill('ciwei') && current.countCards('he') > 0;
                })
            )
                return;
            if (player.getHistory('useCard').length == 0) {
                if (['basic', 'trick'].includes(get.type(card))) return num + 10;
                return;
            }
            if (!['basic', 'trick'].includes(get.type(card))) return num + 10;
            if (!player._ciwei_temp) {
                player._ciwei_temp = true;
                num /= Math.max(1, player.getUseValue(card));
            }
            delete player._ciwei_temp;
            return num;
        };
    }
    if (lib.skill.shiren) {
        //王元姬
        lib.skill.shiren.filter = function (event, player) {
            var target = _status.currentPhase;
            return target && target != player && target.isAlive() && target.countCards('h') > 0;
        };
        lib.skill.shiren.trigger = { player: 'damageEnd' };
        lib.skill.shiren.round = 1;
        lib.skill.yanxi.creatTrigger = true;
    }
    if (lib.skill.jyishi) {
        //夏侯徽
        lib.skill.jyishi = {
            trigger: {
                global: ['loseAfter', 'loseAsyncAfter'],
            },
            updateUsable: 'stages',
            audio: 2,
            forced: true,
            filter(event, player) {
                player.trymarkAutoSkill('jyishi_QYHCqyhc_cl');
                if (!_status.currentStage || player.getCountNum('jyishi')) return false;
                var target = _status.currentPhase;
                if (!target || !target.isIn() || event.type != 'discard' || event.getlx === false || !_status.currentStage) return false;
                return game.hasPlayer2((current) => {
                    var evt = event.getl(current);
                    for (var i of evt.cards) if (get.position(i, true) == 'd') return true;
                    return false;
                });
            },
            content() {
                'step 0';
                event.target = _status.currentPhase;
                event.cards = [];
                game.hasPlayer2((current) => {
                    var evt = trigger.getl(current);
                    for (var i of evt.cards) if (get.position(i, true) == 'd') event.cards.add(i);
                    return false;
                });
                var str = '###你可以发动〖宜室〗选择以下牌中的一张###<center>' + get.translation(event.target) + '获得此牌';
                if (event.cards.length > 1) str += ',你从剩余的牌中选择一张获得';
                str += '<center>';
                var maxvalue = -Infinity;
                for (var i of event.cards) maxvalue = Math.max(maxvalue, get.value(i));
                player
                    .chooseButton([str, event.cards])
                    .set('ai', function (button) {
                        var card = button.link;
                        var source = _status.event.source;
                        if (get.attitude(player, source) >= 0) return Math.max(1, source.getUseValue(card, null, true));
                        if (_status.event.maxvalue > 2) return _status.event.maxvalue - get.value(card) - 2;
                        return -get.value(card);
                    })
                    .set('source', event.target)
                    .set('maxvalue', maxvalue)
                    .setHiddenSkill(event.name);
                ('step 1');
                if (result.bool) {
                    player.stageUsableAt('jyishi', true);
                    target.gain(result.links[0], 'gain2');
                    cards.remove(result.links[0]);
                    if (cards.length) player.chooseButton(['〖宜室〗请获得以下一张牌', cards], true).set('ai', get.buttonValue).direct = true;
                    else event.finish();
                } else event.finish();
                ('step 2');
                if (result.bool) player.gain(result.links[0], 'gain2');
            },
        };
        lib.skill.shiduo.creatTrigger = true;
        lib.skill.shiduo.content = function () {
            'step 0';
            player.chooseToCompare(target);
            ('step 1');
            if (result.bool) event.balantargets = [target];
            else if (result.tie) event.balantargets = [player, target];
            else event.balantargets = [player];
            ('step 2');
            if (event.balantargets.length) {
                event.balantargets.sortBySeat(_status.currentPhase);
                event.balantargets.shift().chooseToDiscard('〖识度〗你拼点未赢,请弃置一张牌', true, 'he');
                event.redo();
            }
        };
        lib.skill.shiduo.ai = {
            order: 6,
            result: {
                target(player, target) {
                    return get.yanzhuEffect(target);
                },
            },
        };
        lib.skill.baoqie = {
            audio: 2,
            trigger: { player: 'showCharacterAfter', global: 'roundFinish' },
            forced: true,
            hiddenSkill: true,
            filter(event, player, name) {
                if (name == 'roundFinish') return true;
                return event.toShow && event.toShow.includes('jin_xiahouhui');
            },
            content() {
                'step 0';
                var equips = [];
                for (var i of ['changandajian_equip5', 'dinglanyemingzhu', 'lingsheji', 'muniu', 'sanlve', 'shanrangzhaoshu', 'shufazijinguan', 'taigongyinfu', 'tianjitu', 'xinge', 'xuwangzhimian', 'yuxi', 'zhaogujing', 'zhuangshu_basic', 'zhuangshu_equip', 'zhuangshu_trick']) if (lib.card[i]) equips.push(i);
                if (equips.length) {
                    event.equip5 = game.createCard2(equips.randomGet());
                    player.gain(event.equip5, 'gain2');
                }
                ('step 1');
                if (event.equip5 && player.getCards('h').includes(event.equip5) && player.hasUseTarget(event.equip5))
                    player
                        .chooseUseTarget(event.equip5)
                        .set('nopopup', true)
                        .set('oncard', (card) => {
                            if (get.info(card).updateUsable == 'phaseUse') _status.event.addCount = false;
                        });
            },
        };
    }
    lib.characterPack.yingbian.ol_huaxin = ['male', 'wei', 3, ['caozhao', 'olxibing'], ['ext:群英荟萃乀摧林/image/character/huaxin.jpg']];
    if (lib.config.characters.includes('yingbian')) lib.character.ol_huaxin = ['male', 'wei', 3, ['caozhao', 'olxibing'], ['ext:群英荟萃乀摧林/image/character/huaxin.jpg']];
    lib.characterPack.shenhua.chendao = ['male', 'shu', 4, ['qyhc_wanglie', 'qyhc_zhonghe'], []];
    if (lib.config.characters.includes('shenhua')) lib.character.chendao = ['male', 'shu', 4, ['qyhc_wanglie', 'qyhc_zhonghe'], []];
    lib.characterPack.yingbian.simazhou = ['male', 'jin', 4, ['caiwang', 'naxiang'], []];
    if (lib.config.characters.includes('yingbian')) lib.character.simazhou = ['male', 'jin', 4, ['caiwang', 'naxiang'], []];
    lib.skill.olxibing = {
        audio: 2,
        trigger: {
            player: 'damageEnd',
            source: 'damageSource',
        },
        filter(event, player) {
            return event.player && event.source && event.player.isIn() && event.source.isIn() && event.player.countDiscardableCards(player, 'he') + event.source.countDiscardableCards(player, 'he') > 1;
        },
        forced: true,
        content() {
            'step 0';
            var target = player == trigger.player ? trigger.source : trigger.player;
            event.target = target;
            var dialog = [];
            dialog.push(player == target ? '〖息兵〗你可以弃置你两张牌' : '〖息兵〗弃置你与' + get.translation(target) + '的共计两张牌');
            if (player != target) {
                dialog.push('<div class="text center">你与其中手牌少于对方的角色摸两张牌且本回合不能使用牌指定你为目标</div>');
                if (target.countCards('h')) {
                    dialog.add('<div class="text center">' + get.translation(target) + '的手牌</div>');
                    if (player.hasSkillTag('viewHandcard', null, target, true)) dialog.push(target.getCards('h'));
                    else dialog.push([target.getCards('h'), 'blank']);
                }
                if (target.countCards('e')) dialog.addArray(['<div class="text center">' + get.translation(target) + '的装备</div>', target.getCards('e')]);
            }
            if (player.countCards('h')) dialog.addArray(['<div class="text center">你的手牌</div>', player.getCards('h')]);
            if (player.countCards('e')) dialog.addArray(['<div class="text center">你的装备</div>', player.getCards('e')]);
            player
                .chooseButton(2)
                .set('createDialog', dialog)
                .set('filterButton', (button) => {
                    if (!get.owner(button.link).getDiscardableCards(_status.event.player, 'he').includes(button.link)) return false;
                    return true;
                })
                .set('filterOk', () => {
                    return ui.selected.buttons.length == 2;
                })
                .set('ai', (button) => {
                    var player = _status.event.player;
                    var target = _status.event.parent.target;
                    var owner = get.owner(card);
                    var card = button.link;
                    if (_status.event.twice) {
                        if (!ui.selected.cards.length) {
                            if (owner != player) return -get.buttonValue(button);
                            return 0;
                        }
                        if (owner != player) return 0;
                        return 6 - get.value(button.link);
                    }
                    if (owner == player) {
                        var cards = player.getDiscardableCards(player, 'he').sort(function (a, b) {
                            return get.useful(a) - get.useful(b);
                        });
                        if (
                            player.countCards('h') - target.countCards('h') <
                            Math.max(
                                0,
                                Math.min(cards.length, 2) -
                                player.countCards('e', function (card) {
                                    var index = cards.indexOf(card);
                                    return index != -1 && index < 2;
                                })
                            ) &&
                            cards.length < 2
                        )
                            return 5.5 - get.value(card);
                        return 0;
                    } else {
                        if (get.attitude(player, target) > 0) return 0;
                        var cards = target.getDiscardableCards(player, 'he').sort(function (a, b) {
                            return get.buttonValue({ link: b }) - get.buttonValue({ link: a });
                        });
                        if (
                            target.countCards('h') - player.countCards('h') >=
                            Math.max(
                                0,
                                Math.min(2, cards.length) -
                                target.countCards('e', function (card) {
                                    var index = cards.indexOf(card);
                                    return index != -1 && index < 2;
                                })
                            )
                        )
                            return get.buttonValue({ link: card });
                        return 0;
                    }
                })
                .set('twice', !player.countCards('e') && !target.countCards('e') && player.countCards('h') == target.countCards('h') + 1);
            ('step 1');
            if (result.bool) {
                var links = result.links;
                var list1 = [],
                    list2 = [],
                    targets = [];
                event.players = [player, target];
                for (var card of links) {
                    if (get.owner(card) == player) list1.push(card), targets.add(player);
                    else list2.push(card), targets.add(target);
                }
                if (list1.length && list2.length) {
                    game.loseAsync({
                        lose_list: [
                            [player, list1],
                            [target, list2],
                        ],
                        discarder: player,
                    }).setContent('discardMultiple');
                } else if (list2.length) target.discard(list2);
                else player.discard(list1);
            } else event.finish();
            ('step 2');
            if (player.isIn() && target.isIn()) {
                var hs = player.countCards('h'),
                    ts = target.countCards('h');
                if (hs != ts) {
                    var drawer = hs > ts ? target : player;
                    drawer.draw(2);
                    player.addTempSkill('olxibing2');
                    player.markAuto('olxibing2', [drawer]);
                }
            }
        },
    };
    lib.skill.clanchenya = {
        //王浑
        audio: 2,
        trigger: {
            global: ['useSkillAfter', 'logSkill'],
        },
        frequent(event, player) {
            return event.player == player;
        },
        filter(event, player) {
            if (event.type != 'player') return false;
            var skill = event.sourceSkill || event.skill;
            var info = get.info(skill);
            if (info.charlotte) return false;
            var translation = get.skillInfoTranslation(skill, event.player);
            if (!translation || !/(?<!<)出牌阶段限一次/.test(translation)) return false;
            return event.player.hasCard(lib.filter.cardRecastable, 'he');
        },
        prompt2: '<center>令其选择是否重铸一张牌,若其重铸且重铸的牌的牌名字数等于其重铸后的手牌数,你视为对其使用一张【推心置腹】</center>',
        check(event, player) {
            return get.attitude(player, event.player) > 0;
        },
        logTarget: 'player',
        content() {
            'step 0';
            trigger.player.chooseCard(get.translation(player) + '对你发动〖沉雅〗:你可以重铸一张牌<br><span class=text>若重铸后之牌名字数等于你手牌数,其视为对你使用一张【推心置腹】</span>', 'he', lib.filter.cardRecastable).set('ai', (card) => {
                return 6 - get.value(card);
            });
            ('step 1');
            if (result.bool) {
                trigger.player.recast(result.cards);
                event.cards = result.cards;
            } else event.finish();
            ('step 2');
            if (get.cardNameLength(cards[0], null) == trigger.player.countCards('h')) player.useCard({ name: 'tuixinzhifu' }, trigger.player);
        },
    };
    lib.skill.clanjianyuan = {
        inherit: 'clanchenya',
        prompt2: '<center>令其选择是否重铸一张牌,若其重铸且重铸的牌的牌名字数等于其当前阶段使用牌数,你将其重铸的牌当【浮雷】对其使用</center>',
        content() {
            'step 0';
            var num = 0;
            for (var phase of lib.phaseName) {
                var evt = trigger.getParent(phase);
                if (evt && evt.name == phase) {
                    num += trigger.player.getHistory('useCard', (evtx) => evtx.getParent(phase) == evt).length;
                }
            }
            trigger.player.chooseCard(get.translation(player) + '对你发动〖简远〗:你可以重铸一张牌<br><span class=text>若你重铸牌名字数等于你当前阶段使用牌数(' + num + ')<br>其将你重铸的牌当【浮雷】对你使用</span>', 'he', lib.filter.cardRecastable).set('ai', (card) => {
                return 6 - get.value(card);
            });
            ('step 1');
            if (result.bool) {
                trigger.player.recast(result.cards);
                event.cards = result.cards;
            } else event.finish();
            ('step 2');
            var num = 0;
            for (var phase of lib.phaseName) {
                var evt = trigger.getParent(phase);
                if (evt && evt.name == phase) {
                    num += trigger.player.getHistory('useCard', (evtx) => evtx.getParent(phase) == evt).length;
                }
            }
            var card = cards[0];
            var cardx = { name: 'fulei' };
            if (get.cardNameLength(cards[0], null) == num && player.canUse(cardx, trigger.player)) {
                player.useCard(cardx, [card], trigger.player);
            }
        },
        intro: {
            content(storage, player, skill) {
                var num = 0,
                    trigger = _status.event;
                for (var phase of lib.phaseName) {
                    var evt = trigger.getParent(phase);
                    if (evt && evt.name == phase) {
                        num += player.getHistory('useCard', (evtx) => evtx.getParent(phase) == evt).length;
                    }
                }
                return '<center>当前阶段使用过' + num + '张牌</center>';
            },
            markcount(storage, player) {
                var num = 0,
                    trigger = _status.event;
                for (var phase of lib.phaseName) {
                    var evt = trigger.getParent(phase);
                    if (evt && evt.name == phase) {
                        num += player.getHistory('useCard', (evtx) => evtx.getParent(phase) == evt).length;
                    }
                }
                return num + '';
            },
            updatetrigger: {
                global: ['phaseUseBegin', 'useCard', 'phaseUseAfter'],
                player: 'dieBegin',
                qyhc_markfilter(player, name) {
                    for (var player of game.filterPlayer()) {
                        if (player.beOn('phaseUse') && name != 'phaseUseAfter' && game.hasPlayer((current) => current.hasSkill('clanjianyuan'))) {
                            player.markSkill('clanjianyuan');
                        }
                    }
                    return NaN;
                },
            },
        },
    };
    lib.skill.dcdanyi = {
        audio: 2,
        marktext: qyhcCL.beOwned10 ? '<span></span>' : '耽意',
        intro: {
            content(storage, player) {
                var event = lib.skill.dcdanyi.getLastUsed(player);
                if (event && (event.targets || []).length) {
                    player.line(event.targets);
                    for (var target of event.targets) target.popup('耽意目标');
                    return '<center>你使用的下一张牌确定包含<br>' + get.translation(event.targets) + '的角色为目标后摸一张牌<center>';
                } else return '未使用过有目标的牌';
            },
            markcount(storage, player) {
                var event = lib.skill.dcdanyi.getLastUsed(player);
                if (!event || (event.targets || []).length == 0) return qyhcCL.beOwned10 ? '耽意×' : '×';
                if (event.targets.length == 1) return qyhcCL.beOwned10 ? get.translation(event.targets[0]) : '1';
                if (event.targets.length) return (qyhcCL.beOwned10 ? '耽意' : '') + event.targets.length;
            },
            updatetrigger: { player: ['useCard', 'chooseToUseBegin'] },
        },
        mark: true,
        trigger: { player: 'useCardToPlayered' },
        getLastUsed(player, event) {
            var history = player.getAllHistory('useCard');
            var index;
            if (event) index = history.indexOf(event) - 1;
            else index = history.length - 1;
            while (index >= 0 && (history[index].targets || []).length == 0) index--;
            if (index >= 0) return history[index];
            return false;
        },
        filter(event, player) {
            if (!event.isFirstTarget) return false;
            if (!event.targets || !event.targets.length) return false;
            var evt = lib.skill.dcdanyi.getLastUsed(player, event.parent);
            if (!evt || !evt.targets || !evt.targets.length) return false;
            for (var i of event.targets) for (var j of evt.targets) if (i == j) return true;
            return false;
        },
        forced: true,
        content() {
            player.draw();
        },
        mod: {
            aiOrder(player, card, num) {
                var evt = lib.skill.dcdanyi.getLastUsed(player);
                if (!evt) return;
                var targets = evt.targets;
                if (!targets.length) return;
                var select = get.select(_status.event.selectTarget);
                if (select[0] == -1);
                else if (targets.length >= select[0] && targets.length <= select[1]) {
                    var eff = 0;
                    for (var i of targets) eff += get.effect(i, card, player, player);
                    if (eff < 0) return;
                }
                return num + 10;
            },
        },
        ai: {
            threaten: 2.5,
            effect: {
                player(card, player, target) {
                    if (player._dcdanyi_aiChecking) return;
                    player._dcdanyi_aiChecking = true;
                    var evt = lib.skill.dcdanyi.getLastUsed(player),
                        targets;
                    if (evt) {
                        if (evt.card == card) return;
                        targets = evt.targets;
                        var eff = 0;
                        for (var i of targets) eff += get.effect(i, card, player, player);
                        delete player._dcdanyi_aiChecking;
                        if (eff < 0) return;
                        if ((targets || []).includes(target)) return [1, 1 / (ui.selected.targets.length + 1)];
                    }
                },
            },
        },
    };
    if (lib.skill.sbtieji) {
        //谋马超
        if (lib.skill.sbtieji.group == 'sbtieji_use') {
            lib.skill.sbtieji.subSkill.use.filter = function (event, player) {
                return player != event.target && ['trick', 'basic'].includes(get.type(event.card)) && get.tag(event.card, 'damage') && event.target.isIn();
            };
            lib.skill.sbtieji.subSkill.use.check = function (event, player) {
                return get.attitude(player, event.target) < 0 || (!get.tag(event.card, 'respondSha') && !get.tag(event.card, 'respondShan'));
            };
        } else {
            lib.skill.sbtieji.filter = function (event, player) {
                return player != event.target && ['trick', 'basic'].includes(get.type(event.card)) && get.tag(event.card, 'damage') && event.target.isIn();
            };
            lib.skill.sbtieji.check = function (event, player) {
                return get.attitude(player, event.target) < 0;
            };
        }
    }
    if (lib.skill.sbduanliang) {
        //谋徐晃
        if (lib.skill.sbduanliang.group == 'sbduanliang_use') lib.skill.sbduanliang.subSkill.use.usable = 2;
        else lib.skill.sbduanliang.usable = 2;
        lib.skill.sbduanliang.ai.result = {
            target(player, target) {
                return -((a) => (a > 0 ? a : 0.1))(get.threaten(target, player, true));
            },
        };
    }
    //TW贾充、谋姜维、OL陈登、OL界祝融
    lib.skill.dingfa = {
        audio: 2,
        trigger: { global: 'phaseEnd' },
        forced: true,
        mark: true,
        intro: {
            name: '定法',
            content(storage, player) {
                var num = 0;
                player.getHistory('lose', function (evt) {
                    num += evt.cards2.length;
                });
                return '<center>本回合失去的牌数:' + num + '</center>';
            },
            markcount(storage, player) {
                var num = 0;
                player.getHistory('lose', function (evt) {
                    num += evt.cards2.length;
                });
                return num.toString();
            },
            updatetrigger: { global: ['loseEnd', 'gainEnd', 'equipEnd', 'addJudgeEnd', 'loseAsyncEnd', 'qyhcLoseGainEnd', 'addToExpansionEnd'] },
        },
        filter(event, player) {
            var num = 0;
            player.getHistory('lose', function (evt) {
                num += evt.cards2.length;
            });
            return num >= player.hp && (player.isDamaged() || game.hasPlayer((current) => player.inRange(current)));
        },
        content() {
            'step 0';
            var ps = game.filterPlayer((current) => player.inRange(current));
            var len = ps.length;
            if (len > 1 || (player.isDamaged() && len > 0)) {
                var next = player
                    .chooseTarget('〖定法〗发动:请对一名攻击范围内的角色造成1点伤害', (card, player, target) => {
                        return player.inRange(target);
                    })
                    .set('ai', function (target) {
                        return get.damageEffect(target, player, player) - get.recoverEffect(player, player, player);
                    });
                if (player.isDamaged()) next.set('prompt2', '<center>或点取消回复1点体力<center>');
                else next.set('forced', true);
            } else if (len == 1) event._result = { bool: true, targets: ps };
            else event._result = { bool: false };
            ('step 1');
            if (result.targets?.length) {
                result.targets[0].damage(player);
            } else {
                player.recover();
            }
        },
    };
    lib.skill.beini = {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filterTarget: true,
        selectTarget: 2,
        complexTarget: true,
        multitarget: true,
        prompt: '<center>选择两名角色,第一名角色摸两张牌,第二名角色视为对其使用一张【杀】</center>',
        multiline: true,
        targetprompt: ['摸牌者', '出杀者'],
        content() {
            'step 0';
            targets[0].draw(2);
            ('step 1');
            targets[1].chooseUseTarget({ name: 'sha' }, targets[0], true, false, 'nodistance').selectTarget = [-1, -1];
        },
        ai: {
            order: 9,
            expose: 0.01,
            result: {
                target(player, target) {
                    var card = { name: 'sha' };
                    var att = get.attitude(player, target) > 0;
                    if (ui.selected.targets.length == 0) {
                        if (player == target && !player.isDamaged()) return 2.5;
                        var max = -100;
                        var min = 100;
                        var gain = get.drawEffect(target, 2);
                        for (var i of game.filterPlayer())
                            if (i != target) {
                                var eff = get.effect(target, card, i, target);
                                if (i.hasSkillTag('directHit_ai', true, { target: target, card: card }, true)) eff -= 10;
                                max = Math.max(max, eff);
                                min = Math.min(min, eff);
                            }
                        if (target.hasShan()) {
                            max += 5;
                            min += 5;
                        }
                        if (target.hasSkill('jianhui')) {
                            max += 5;
                            min += 5;
                        }
                        if (att) return gain + max / 30;
                        else return gain + min / 30;
                    }
                    if (player == ui.selected.targets[0]) return -0.1;
                    return get.effect(ui.selected.targets[0], card, target, target) / 100;
                },
            },
        },
        mod: {
            aiOrder(player, card, num) {
                if (get.equiptype(card) == 2) return num + 15;
            },
        },
    };
    if (lib.skill.jianhui) {
        lib.skill.jianhui.mark = true;
        lib.skill.jianhui.marktext = qyhcCL.beOwned10 ? '<span></span>' : '奸回';
        lib.skill.jianhui.logTarget = (event, player) => (event.player == player ? event.source : event.player);
        lib.skill.jianhui.intro = {
            content(storage, player) {
                var target = lib.skill.jianhui.getLastPlayer(null, player);
                if (target) {
                    player.line(target);
                    target.popup('奸回目标');
                    return '<center>上一次对你造成伤害的角色:<br>' + get.translation(target) + '<center>';
                } else return '没有角色对你造成过伤害';
            },
            markcount(storage, player) {
                var target = lib.skill.jianhui.getLastPlayer(null, player);
                if (!qyhcCL.beOwned10) return target ? '1' : '×';
                if (target) return get.translation(target);
                else return '奸回×';
            },
        };
    }
    lib.characterPack.tw.jiachong = ['male', 'jin', 3, ['beini', 'dingfa', 'jianhui']];
    lib.characterPack.sp.ol_chendeng = ['male', 'qun', 4, ['olfengji', 'olfuyuan'], []];
    lib.characterPack.sp.sunshao = ['male', 'wu', 3, ['qyhc_bizheng', 'qyhc_yidian'], []];
    lib.characterPack.mobile.sp_maojie = ['male', 'wei', 3, ['bingqing', 'yingfeng'], []];
    if (lib.config.characters.includes('mobile')) lib.character.sp_maojie = ['male', 'wei', 3, ['bingqing', 'yingfeng'], []];
    lib.characterPack.sp2.xinping = ['male', 'qun', 3, ['clwt_fuyuan', 'zhongjie', 'qyhc_yongdi'], []];
    lib.characterPack.sb.sb_jiangwei = ['male', 'shu', '2/5/2', ['sbtiaoxin', 'sbzhiji'], []];
    lib.characterPack.sb.sb_zhouyu = ['male', 'wu', 3, ['sbyingzi', 'qyhc_fanjian'], []];
    lib.characterPack.shenhua.yanyan = ['male', 'shu', 4, ['nzry_juzhan', 'qyhc_nvezhuo'], []];
    lib.characterPack.refresh.ol_zhurong = ['female', 'shu', 4, ['juxiang', 'relieren', 'changbiao'], []];
    lib.characterPack.refresh.re_sunxiu = ['male', 'wu', 3, ['qyhc_yanzhu', 'qyhc_xingxue', 'qyhc_zhaofu'], ['zhu']];
    if (lib.config.characters.includes('sp2')) {
        lib.character.xinping = ['male', 'qun', 3, ['clwt_fuyuan', 'zhongjie', 'qyhc_yongdi'], []];
    }
    if (lib.config.characters.includes('shenhua')) {
        lib.character.yanyan = ['male', 'shu', 4, ['nzry_juzhan', 'qyhc_nvezhuo'], []];
    }
    if (lib.config.characters.includes('tw')) {
        lib.character.jiachong = ['male', 'jin', 3, ['beini', 'dingfa', 'jianhui'], []];
    }
    if (lib.config.characters.includes('sp')) {
        lib.character.sunshao = ['male', 'wu', 3, ['qyhc_bizheng', 'qyhc_yidian'], []];
        lib.character.ol_chendeng = ['male', 'qun', 4, ['olfengji', 'olfuyuan'], []];
    }
    if (lib.config.characters.includes('sb')) {
        lib.character.sb_jiangwei = ['male', 'shu', '2/5/2', ['sbtiaoxin', 'sbzhiji'], []];
        lib.character.sb_zhouyu = ['male', 'wu', 3, ['sbyingzi', 'qyhc_fanjian'], []];
    }
    if (lib.config.characters.includes('refresh')) {
        lib.character.ol_zhurong = ['female', 'shu', 4, ['juxiang', 'relieren', 'changbiao'], []];
        lib.character.re_sunxiu = ['male', 'wu', 3, ['qyhc_yanzhu', 'qyhc_xingxue', 'qyhc_zhaofu'], ['zhu']];
    }
    if (lib.skill.yingfeng) {
        lib.skill.yingfeng = {
            trigger: { global: 'roundStart' },
            forced: true,
            content() {
                'step 0';
                if (!qyhcCL.beOwned10) lib.translate.yingfeng_bg = '奉';
                player.chooseTarget('###〖迎奉〗你可以选择一名角色###<center>其本轮使用牌无距离限制</center>').set('ai', function (target) {
                    var player = _status.event.player,
                        att = get.attitude(player, target);
                    if (att <= 0) return 0;
                    var eff = 0.1;
                    var preTarget = game.findPlayer(function (current) {
                        return current != target && current.hasSkill('yingfeng_mark');
                    });
                    if (preTarget) {
                        if (get.attitude(player, preTarget) < 0) eff += 4;
                        else if (preTarget.hasValueTarget({ name: 'sha' }, false) && !preTarget.hasValueTarget({ name: 'sha' })) eff -= 3;
                    }
                    if (target.hasValueTarget({ name: 'sha' }, false) && !target.hasValueTarget({ name: 'sha' })) eff += 3;
                    if (player == target) att *= 1.2;
                    return 0.01 + att * eff;
                });
                ('step 1');
                if (result.targets?.length) {
                    var target = result.targets[0];
                    target.addTempSkill('yingfeng_mark', 'roundFinish');
                }
            },
            subSkill: {
                mark: {
                    charlotte: true,
                    mark: true,
                    mod: {
                        targetInRange: () => true,
                    },
                    intro: { content: '<center>使用牌无距离限制<br>直到其回合结束</center>' },
                },
            },
        };
        lib.skill.bingqing = {
            audio: 2,
            forced: true,
            trigger: { player: ['useCard', 'respond'] },
            mark: true,
            intro: {
                content(storage, player) {
                    var list = qyhcCL.suits(player.getHistory('useCard').concat(player.getHistory('respond')), null, true);
                    if (!list.length) return '<center>本回合未使用或打出过牌</center>';
                    return '<center>本回合使用或打出过的牌中包含的花色:' + get.colorful(list, 'S') + '</center>';
                },
                markcount(storage, player) {
                    var list = qyhcCL.suits(player.getHistory('useCard').concat(player.getHistory('respond')), null, true);
                    return qyhcCL.Csuitchange(list, player, 'bingqing', '秉');
                },
            },
            filter(event, player) {
                player.trymarkAutoSkill('bingqing');
                if (
                    player
                        .getHistory('useCard', (evt) => {
                            return evt.card.suit == event.card.suit;
                        })
                        .concat(
                            player.getHistory('respond', (evt) => {
                                return evt.card.suit == event.card.suit;
                            })
                        ).length != 1
                )
                    return false;
                var suits = qyhcCL.suits(player.getHistory('useCard').concat(player.getHistory('respond')));
                if (suits == 2) return true;
                if (suits == 4 && game.hasPlayer((current) => current != player)) return true;
                if (suits == 3 && game.hasPlayer((current) => current.countDiscardableCards(player, 'hej') > 0)) return true;
                return false;
            },
            content() {
                'step 0';
                player.trymarkAutoSkill('bingqing');
                event.num = qyhcCL.suits(player.getHistory('useCard').concat(player.getHistory('respond')));
                switch (event.num) {
                    case 2:
                        prompt = '〖秉清〗你可以令一名角色摸两张牌';
                        filterTarget = function (card, player, target) {
                            return true;
                        };
                        ai = function (target) {
                            var player = _status.event.player;
                            var att = get.attitude(player, target);
                            if (target.hasSkill('nogain')) att /= 10;
                            return att / Math.sqrt(Math.min(5, 1 + target.countCards('h')));
                        };
                        break;
                    case 3:
                        prompt = '〖秉清〗你可以弃置一名角色区域内的一张牌';
                        filterTarget = function (card, player, target) {
                            return target.countDiscardableCards(player, 'hej');
                        };
                        ai = function (target) {
                            var player = _status.event.player;
                            return get.effect(target, { name: 'guohe_copy' }, player, player);
                        };
                        break;
                    case 4:
                        prompt = '〖秉清〗你可以对一名其他角色造成1点伤害';
                        filterTarget = function (card, player, target) {
                            return target != player;
                        };
                        ai = function (target) {
                            var player = _status.event.player;
                            return get.damageEffect(target, player, player);
                        };
                        break;
                    default:
                        event.finish();
                        return;
                }
                player.chooseTarget(prompt, filterTarget).set('ai', ai);
                ('step 1');
                if (result.targets?.length) {
                    var target = result.targets[0];
                    event.target = target;
                    event.goto(event.num);
                } else event.finish();
                ('step 2');
                target.draw(2);
                event.finish();
                ('step 3');
                player.discardPlayerCard(target, true, 'hej');
                event.finish();
                ('step 4');
                target.damage();
            },
            subSkill: {
                effect: {
                    audio: 'bingqing',
                    trigger: { player: 'useCardAfter' },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        if (event.bingqing_suits == 2) return true;
                        if (event.bingqing_suits == 4 && game.hasPlayer((current) => current != player)) return true;
                        if (event.bingqing_suits == 3 && game.hasPlayer((current) => current.countDiscardableCards(player, 'hej') > 0)) return true;
                        return false;
                    },
                    content() {
                        'step 0';
                        player.trymarkAutoSkill('bingqing');
                        event.num = trigger.bingqing_suits;
                        switch (event.num) {
                            case 2:
                                prompt = '〖秉清〗你可以令一名角色摸两张牌';
                                filterTarget = function (card, player, target) {
                                    return true;
                                };
                                ai = function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    if (target.hasSkill('nogain')) att /= 10;
                                    return att / Math.sqrt(Math.min(5, 1 + target.countCards('h')));
                                };
                                break;
                            case 3:
                                prompt = '〖秉清〗你可以弃置一名角色区域内的一张牌';
                                filterTarget = function (card, player, target) {
                                    return target.countDiscardableCards(player, 'hej');
                                };
                                ai = function (target) {
                                    var player = _status.event.player;
                                    return get.effect(target, { name: 'guohe_copy' }, player, player);
                                };
                                break;
                            case 4:
                                prompt = '〖秉清〗你可以对一名其他角色造成1点伤害';
                                filterTarget = function (card, player, target) {
                                    return target != player;
                                };
                                ai = function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                };
                                break;
                            default:
                                event.finish();
                                return;
                        }
                        player.chooseTarget(prompt, filterTarget).set('ai', ai);
                        ('step 1');
                        if (result.targets?.length) {
                            var target = result.targets[0];
                            player.logSkill_qyhccl('bingqing', target);
                            event.target = target;
                            event.goto(event.num);
                        } else event.finish();
                        ('step 2');
                        target.draw(2);
                        event.finish();
                        ('step 3');
                        player.discardPlayerCard(target, true, 'hej');
                        event.finish();
                        ('step 4');
                        target.damage();
                    },
                },
            },
        };
    }
    if (lib.skill.yidu) {
        lib.skill.yidu = {
            audio: 2,
            trigger: { player: 'useCardToPlayered' },
            filter(event, player) {
                return ['trick', 'basic'].includes(get.type(event.card)) && get.tag(event.card, 'damage') && event.target.countCards('h');
            },
            forced: true,
            content() {
                'step 0';
                var num = Math.min(3, trigger.target.countCards('h'));
                var str = '一';
                if (num == 2) str = '一至两';
                if (num == 3) str = '一至三';
                player.choosePlayerCard(trigger.target, '###〖遗毒〗你可以展示' + get.translation(trigger.target) + str + '张手牌###<center>若这些牌颜色相同,此牌结算结束后,其弃置这些牌</center>', 'h', [1, num]).set('ai', function (button) {
                    if (ui.selected.buttons.length) return 0;
                    return 1 + Math.random();
                });
                ('step 1');
                if (result.bool) {
                    var cards = result.cards;
                    player.showCards(cards, get.translation(player) + '对' + get.translation(trigger.target) + '发动了〖遗毒〗');
                    var color = get.color(cards[0], trigger.target);
                    var bool = true;
                    for (var i = 1; i < cards.length; i++)
                        if (get.color(cards[i], trigger.target) != color) {
                            bool = false;
                            break;
                        }
                    if (bool) {
                        trigger.target.addGaintag(cards, 'yidu');
                        if (!trigger.getParent('useCard').qyhc_be_yidu_players) trigger.getParent('useCard').qyhc_be_yidu_players = [];
                        trigger.getParent('useCard').qyhc_be_yidu_players.push(trigger.target);
                        trigger.target.addTempSkill('yidu_effect');
                    }
                } else event.finish();
            },
            subSkill: {
                effect: {
                    charlotte: true,
                    forced: true,
                    audio: 'yidu',
                    trigger: { global: 'useCardAfter' },
                    filter(event, player) {
                        return (
                            event.qyhc_be_yidu_players &&
                            event.qyhc_be_yidu_players.includes(player) &&
                            player.hasCard((card) => {
                                return card.hasGaintag('yidu');
                            }, 'h')
                        );
                    },
                    content() {
                        var cards = player.getCards('h', (card) => {
                            return card.hasGaintag('yidu');
                        });
                        if (cards.length) player.discard(cards);
                    },
                },
            },
        };
        lib.skill.zhefu.content = function () {
            'step 0';
            player
                .chooseTarget('〖哲妇〗选择一名有手牌的其他角色', function (card, player, target) {
                    return target != player && target.countCards('h') > 0;
                })
                .set('ai', function (target) {
                    var player = _status.event.player;
                    return get.damageEffect(target, player, player) / Math.sqrt(target.countCards('h'));
                })
                .set('prompt2', '<center>除非其弃置一张【' + get.translation(trigger.card.name) + '】,否则其受到你造成的1点伤害</center>');
            ('step 1');
            if (result.targets?.length) {
                var target = result.targets[0];
                event.target = target;
                var name = trigger.card.name;
                target
                    .chooseToDiscard('he', { name: name }, '###' + get.translation(player) + '对你发动〖遗毒〗###<center>请弃置一张【' + get.translation(name) + '】或受到其造成的1点伤害</center>')
                    .set('ai', function (card) {
                        var player = _status.event.player;
                        if (_status.event.take || (card.name == 'tao' && !player.hasJudge('lebu'))) return 0;
                        return 8 - get.value(card);
                    })
                    .set('take', get.damageEffect(target, player, target) >= 0);
            } else event.finish();
            ('step 2');
            if (!result.bool) target.damage();
        };
    }
    lib.skill.olfengji = {
        audio: 2,
        trigger: { player: 'phaseDrawBegin2' },
        forced: true,
        filter(event, player) {
            return !player.numFixed;
        },
        content() {
            'step 0';
            player
                .chooseTarget('〖丰积〗请选择一名角色,其摸牌阶段多摸两张牌直到其回合结束')
                .set('ai', function (target) {
                    var player = _status.event.player;
                    if (target.hasJudge('lebu') || target.hasJudge('bingliang')) return 0;
                    var att = get.attitude(player, target),
                        dist = get.distance(player, target, 'absolute');
                    if (_status.event.goon) {
                        return att / dist;
                    }
                    if (
                        game.countPlayer(function (current) {
                            return current != player && current != target && get.attitude(player, current) < 0 && get.distance(player, current, 'absolute') < dist;
                        }) >= target.hp
                    )
                        return 0;
                    return att / dist;
                })
                .set('goon', player.beOn('skip', 'phaseUse'))
                .set('prompt2', '<center>点取消则默认选择自己<br><span class=redtext>此阶段少摸一张牌</span></center>');
            ('step 1');
            if (!player.storage.olfengji_draw) player.storage.olfengji_draw = 0;
            if (result.bool) var target = result.targets[0];
            else var target = player;
            player.line(target, 'thunder');
            if (!target.storage.olfengji_draw) target.storage.olfengji_draw = 0;
            target.storage.olfengji_draw += 2;
            target.addTempSkill('olfengji_draw', { player: 'phaseAfter' });
            target.markSkill('olfengji_draw');
            ('step 2');
            player
                .chooseTarget('〖丰积〗请选择一名角色,其使用【杀】的次数限制+2直到其回合结束')
                .set('ai', function (target) {
                    var player = _status.event.player;
                    if (target.countMark('olfengji_draw') > 0 && target.getCardUsable('sha') < 2) return get.attitude(player, target);
                    return 0;
                })
                .set('prompt2', '<center>点取消则默认选择自己<br><span class=redtext>你本回合使用【杀】的次数限制-1</span></center>');
            ('step 3');
            if (!player.storage.olfengji_sha) player.storage.olfengji_sha = 0;
            if (result.bool) var target = result.targets[0];
            else var target = player;
            player.line(target, 'fire');
            if (!target.storage.olfengji_sha) target.storage.olfengji_sha = 0;
            target.storage.olfengji_sha += 2;
            target.addTempSkill('olfengji_sha', { player: 'phaseAfter' });
            target.markSkill('olfengji_sha');
            ('step 4');
            player.storage.olfengji_draw--;
            player.storage.olfengji_sha--;
            player.addTempSkill('olfengji_draw');
            player.markSkill('olfengji_draw');
            player.addTempSkill('olfengji_sha');
            player.markSkill('olfengji_sha');
        },
        subSkill: {
            sha: {
                charlotte: true,
                intro: {
                    content(storage, player) {
                        if (storage) return '使用【杀】的次数限制' + get.colorful(storage, '+-');
                    },
                    markcount(storage, player) {
                        if (storage) {
                            if (qyhcCL.beOwned10) return get.colorful(storage, '+-');
                            else {
                                player.chanMarkinner('olfengji_sha', '<span class=' + (storage >= 0 ? 'impor' : 'imred') + 'text>' + '积' + '</span>');
                                return get.colorful([storage, 10], '￥');
                            }
                        }
                    },
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha' && player.storage.olfengji_sha) return num + player.storage.olfengji_sha;
                    },
                },
            },
            draw: {
                charlotte: true,
                intro: {
                    content(storage, player) {
                        if (storage) return '摸牌阶段' + (storage >= 0 ? '多' : '少') + '摸' + get.cnNumber(Math.abs(storage)) + '张牌';
                    },
                    markcount(storage, player) {
                        if (storage) {
                            if (qyhcCL.beOwned10) return get.colorful(storage, '+-');
                            else {
                                player.chanMarkinner('olfengji_draw', '<span class=' + (storage >= 0 ? 'impor' : 'imred') + 'text>' + '丰' + '</span>');
                                return get.colorful([storage, 10], '￥');
                            }
                        }
                    },
                },
                trigger: { player: 'phaseDrawBegin2' },
                forced: true,
                filter(event, player) {
                    return !event.numFixed && player.storage.olfengji_draw;
                },
                content() {
                    trigger.num += player.storage.olfengji_draw;
                },
            },
        },
    };
    lib.skill.olfuyuan = {
        audio: 'refuyuan',
        trigger: {
            global: 'useCardToPlayered',
        },
        forced: true,
        filter(event, player) {
            if (!event.isFirstTarget) return false;
            var t = qyhcCL.qyhc_firstGain([], 'qyhc_lastfinish');
            var len = t.length;
            if (len && t[len - 1].phaseNumber == game.phaseNumber) return false;
            for (var i of event.targets) if (i != event.player) return true;
            return false;
        },
        content() {
            'step 0';
            var filtP = game.filterPlayer((target) => {
                return target != trigger.player && trigger.targets.includes(target);
            });
            var next = player
                .chooseTarget('〖扶援〗你可以令这些角色中的其中一名摸一张牌', (A, B, C) => _status.event.filtP.includes(C))
                .set('ai', ai.drawEffect)
                .set('filtP', filtP);
            if (filtP.length == 1) {
                event.randomtarget = filtP[0];
                if (!_status.auto && game.me == player) event.randomtarget.classList.add('glow');
                next.set('selectTarget', [0, 1]);
                next.set('prompt2', '<center>直接点确定默认选择' + get.translation(event.randomtarget) + '(发蓝光者)</center>');
            }
            ('step 1');
            if (event.randomtarget) event.randomtarget.classList.remove('glow');
            if (result.targets?.length) {
                if (!result.targets[0]) {
                    if (!_status.auto && game.me == player) var target = event.randomtarget;
                } else var target = result.targets[0];
                if (target) {
                    target.draw();
                }
            }
        },
    };
    lib.skill.sbtiaoxin = {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filterTarget: lib.filter.notMe,
        selectTarget() {
            return [
                1,
                Math.min(
                    _status.event.player.getDamagedHp(),
                    game.countPlayer((current) => current != _status.event.player)
                ),
            ];
        },
        filter(event, player) {
            return player.getDamagedHp() > 0;
        },
        prompt() {
            var player = _status.event.player;
            return '请选择至多' + get.cnNumber(player.getDamagedHp()) + '名其他角色,这些角色对你出杀或弃牌<br>若你未以此法受到伤害,你可以获得弃牌堆此技能结算过程中进入的牌';
        },
        multiline: true,
        contentBefore() {
            player.storage.sbtiaoxin_bedamage = false;
            player.storage.sbtiaoxin = Array.from(ui.discardPile.childNodes);
        },
        content() {
            'step 0';
            var targets2 = targets.slice(0);
            targets2.remove(target);
            var str = '你';
            var prompt2 = '<center>对' + get.translation(player) + '合法使用一张【杀】,或弃置一张牌<br><span class=imredtext>若其未以此法受到伤害,其会从弃牌堆获得本次〖挑衅〗置入的牌</span>';
            if (target.inRange(player)) prompt2 += '<br><span class=imredtext>你攻击范围内包含' + get.translation(player) + ',不对其使用杀会再被其弃置一张牌</span>';
            prompt2 += '</center>';
            if (targets2.length) {
                str += '、';
                str += get.translation(targets2);
                for (var i = str.length - 1; i > 0; i--)
                    if (str[i] == '、') {
                        str[i] = '和';
                        break;
                    }
            }
            target
                .chooseToUse(
                    function (card, player, event) {
                        if (card.name != 'sha') return false;
                        return lib.filter.filterCard.apply(this, arguments);
                    },
                    get.translation(player) + '对' + str + '发动〖挑衅〗'
                )
                .set('targetRequired', true)
                .set('complexSelect', true)
                .set('filterTarget', function (card, player, target) {
                    if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                    return lib.filter.filterTarget.apply(this, arguments);
                })
                .set('sourcex', player)
                .set('prompt2', prompt2)
                .set('ai2', function (target, card, player, player2, isLink) {
                    return get.effect_use.apply(this, arguments) + (get.attitude(target, player) > 0 ? 0 : 4);
                });
            ('step 1');
            if (
                player.getHistory('damage', function (evt) {
                    return evt.parent.type == 'card' && evt.getParent(4) == event;
                }).length > 0
            )
                player.storage.sbtiaoxin_bedamage = true;
            if (!result.bool) {
                if (target.countDiscardableCards(target, 'he') > 0) {
                    var next = target.chooseToDiscard('he', '请弃置一张牌', true);
                    if (!player.storage.sbtiaoxin_bedamage) next.set('prompt2', '<center><span class=imredtext>此牌可能会被' + get.translation(player) + '获得</span><center>');
                }
            } else event.finish();
            ('step 2');
            if (target.inRange(player) && target.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(target, 'he', '请弃置' + get.translation(target) + '一张牌', true);
        },
        contentAfter() {
            'step 0';
            if (!player.storage.sbtiaoxin_bedamage) {
                if (!player.storage.sbtiaoxin) player.storage.sbtiaoxin = [];
                var list = [];
                for (var i = 0; i < ui.discardPile.childNodes.length; i++) if (!player.storage.sbtiaoxin.includes(ui.discardPile.childNodes[i])) list.push(ui.discardPile.childNodes[i]);
                if (list.length) player.gain(list, 'gain2');
            } else {
                player.addTempSkill('sbtiaoxin_view');
                player.markSkill('sbtiaoxin_view');
            }
            ('step 1');
            player.storage.sbtiaoxin = [];
        },
        mod: {
            aiOrder(player, card, num) {
                if (get.equiptype(card) == 2) return num + 15;
                if (get.equiptype(card) == 3) return num + 15;
            },
        },
        ai: {
            threaten: 1.2,
            order: 4,
            expose: 0.2,
            result: {
                target(player, target) {
                    if (target.countDiscardableCards(target, 'he') == 0) return 0;
                    if (target.inRange(player)) return -2;
                    return -1;
                },
                player(player, target) {
                    if (!target.canUse('sha', player)) return 0;
                    if (target.countCards('h') == 0) return 0;
                    if (target.countCards('h') == 1) return -0.1;
                    if (!target.hasUsableCard('sha')) return 0;
                    if (player.countCards('h', 'shan') + player.hp < 4) return -1.8;
                    return -0.5;
                },
            },
        },
        subSkill: {
            view: {
                charlotte: true,
                superCharlotte: true,
                audio: 'sbtiaoxin',
                mod: {
                    cardname(card, player) {
                        if (!['trick', 'delay'].includes(lib.card[card.name].type)) return 'sha';
                    },
                    cardnature(card, player) {
                        if (!['trick', 'delay'].includes(lib.card[card.name].type)) return false;
                    },
                },
                intro: {
                    name: '挑衅',
                    content: '<center>因〖挑衅〗所有非锦囊牌视为【杀】</center>',
                },
            },
        },
    };
    lib.skill.sbzhiji = {
        enable: 'chooseToUse',
        audio: 2,
        mark: true,
        limited: true,
        filter(event) {
            if (event.type == 'dying') return event.dying && event.dying.isIn() && event.dying.hp <= 0;
            return false;
        },
        filterTarget(event, player, target) {
            return _status.event.dying == target;
        },
        selectTarget: [-1, -1],
        content() {
            'step 0';
            player.awakenSkill('sbzhiji');
            player.storage.sbzhiji = true;
            if (2 > target.hp) target.recover(2 - target.hp);
            ('step 1');
            player.addSkill('sbzhiji_jinguo');
            player.markSkill('sbzhiji_jinguo');
            ('step 2');
            player.phase('nodelay');
        },
        ai: {
            order: 1,
            skillTagFilter(player, arg, target) {
                if (player.storage.sbzhiji) return false;
            },
            save: true,
            result: {
                player(player, dying) {
                    if (player.hasUsableCard('tao')) return 0;
                    if (dying == player && player.hp < 0) return 10;
                    if (dying == player && (player.hasUsableCard('jiu') || player.hasUsableCard('xujiu'))) return 0;
                    if (dying == player && player.hp == 0) return 0.2;
                    if (dying == game.zhu && player.identity == 'zhong') return 1;
                    if (get.attitude(player, dying) >= 10 && !player.hasUsableCard('tao') && !dying.hasUsableCard('tao') && !dying.hasUsableCard('jiu') && !dying.hasUsableCard('xujiu')) return 1;
                },
            },
        },
        intro: {
            content: 'limited',
        },
        subSkill: {
            jinguo: {
                charlotte: true,
                superCharlotte: true,
                forced: true,
                audio: 'sbzhiji',
                mod: {
                    targetInRange: () => true,
                    cardUsable: () => Infinity,
                },
                trigger: {
                    player: 'phaseEnd',
                },
                filter(event, player) {
                    return event.skill == 'sbzhiji' && (typeof game.phaseNumber != 'number' || !qyhcCL.dieauto || !qyhcCL.dieauto[game.phaseNumber] || !qyhcCL.dieauto[game.phaseNumber].length);
                },
                content() {
                    'step 0';
                    if (player.countCards('he')) {
                        player.chooseTarget('请将所有牌交给一名角色,你死亡', lib.filter.notMe, true).set('ai', ai.getattitude);
                    } else {
                        player.$skill('烬国', 'fire');
                        player.logSkill_qyhccl('sbzhiji');
                        event.goto(2);
                    }
                    ('step 1');
                    player.$skill('烬国', 'fire');
                    player.logSkill_qyhccl('sbzhiji', result.targets[0]);
                    player.give(player.getCards('he'), result.targets[0]);
                    ('step 2');
                    player.die();
                },
                intro: {
                    name: '烬国',
                    content: '<center>使用牌无距离及次数限制<br>其因〖烬国〗执行的额外回合结束时,若此回合内没有角色死亡,其将所有手牌交给一名角色且死亡</center>',
                },
            },
        },
    };
    if (lib.skill.relieren) {
        lib.qyhc_firstGain({}, 'skill', 'relieren', 'audioname2').ol_zhurong = 'lieren_ol_zhurong';
        lib.skill.relieren.logTarget = 'target';
    }
    //樊稠
    lib.skill.xinxingluan = {
        audio: 'xinfu_xingluan',
        trigger: { player: 'useCardAfter' },
        forced: true,
        filter(event, player) {
            return !player.getCountNum('xinxingluan');
        },
        creatTrigger: 1,
        content() {
            'step 0';
            var list = ['尝试获得牌堆中一张点数为6的牌', '令一名其他角色弃置一张点数为6的牌或交给你一张牌', '获得场上一张点数为6的牌'];
            var bool2 = false,
                bool3 = !!game.countPlayer(function (current) {
                    if (current != player && current.countCards('he') > 0) bool2 = true;
                    return current.hasCard(function (card) {
                        return card.number == 6 && lib.filter.canBeGained(card, current, player);
                    }, 'ej');
                });
            var func = function (player) {
                if (
                    game.hasPlayer(function (current) {
                        if (current == player) return false;
                        var att = -get.sgn(get.attitude(player, current) - 0.1);
                        return current.hasCard(function (card) {
                            return card.number == 6 && lib.filter.canBeGained(card, current, player) && get.sgn(get.useful(card, current)) == att;
                        }, 'ej');
                    })
                )
                    return 2;
                if (
                    game.hasPlayer(function (target) {
                        if (target == player) return false;
                        var att = get.attitude(player, target);
                        return (
                            att < 0 &&
                            target.countCards('he') > 0 &&
                            !target.hasCard(function (card) {
                                return get.value(card, target) <= 0;
                            }, 'he')
                        );
                    })
                )
                    return 1;
                return 0;
            };
            event.thisresult = func(player);
            if (!event.isMine() || (bool2 && bool3)) {
                event.dialog = ui.create.qyhcTXT('〖兴乱〗你可以选择一项', list, 1, player);
                var next = player.chooseButton().set('ai', function (button) {
                    if (_status.event.parent.thisresult == button.link) return 4;
                    return 0;
                });
                if (bool2 && bool3);
                else if (bool2) next.set('filterButton', (button) => button.link != 2);
                else if (bool3) next.set('filterButton', (button) => button.link != 1);
                else next.set('filterButton', (button) => button.link == 0);
            } else if (bool2) {
                event.stepvalue = 1;
                player
                    .chooseTarget('###〖兴乱〗你可以选择一名角色###<center>若其不为你,则除非其弃置一张点数为6的牌,否则其交给你一张牌<br>若其为你,则你尝试获得牌堆中一张点数为6的牌</center>', function (card, player, current) {
                        return current == player || current.countCards('he') > 0;
                    })
                    .set('ai', function (target) {
                        var player = _status.event.player,
                            att = get.attitude(player, target);
                        if (att >= 0) return 0;
                        if (
                            !target.hasCard(function (card) {
                                return get.value(card, target) <= 0;
                            }, 'he')
                        )
                            return -att / Math.sqrt(target.countCards('he'));
                        return 0;
                    });
            } else if (bool3) {
                event.stepvalue = 2;
                player
                    .chooseTarget('###〖兴乱〗请选择一名角色,或直接点确定,或点取消不发动此技能###<center>若选择角色,则你获得其场上一张点数为6的牌<br>若直接点确定,则你尝试获得牌堆中一张点数为6的牌</center>', [0, 1], function (card, player, current) {
                        return current.hasCard(function (card) {
                            return card.number == 6 && lib.filter.canBeGained(card, current, player);
                        }, 'ej');
                    })
                    .set('ai', function (target) {
                        var player = _status.event.player,
                            att = -get.sgn(get.attitude(player, target) - 0.1),
                            max = 0,
                            ej = target.getCards('ej', function (card) {
                                return card.number == 6 && lib.filter.canBeGained(card, target, player);
                            });
                        for (var i of ej) {
                            var num = get.useful(i, target) * att;
                            if (num > max) max = num;
                            return max;
                        }
                    });
            } else {
                event.stepvalue = 3;
                player.chooseBool('是否发动〖兴乱〗尝试获得牌堆中一张点数为6的牌？').set('choice', true);
            }
            ('step 1');
            if (event.dialog) event.dialog.close();
            if (result.bool) {
                switch (event.stepvalue) {
                    case 1:
                        if (result.targets[0] == player) { }
                        else {
                            event._result = { bool: true, targets: result.targets.slice(0) };
                            event.goto(7);
                        }
                        break;
                    case 2:
                        if (result.targets[0]) {
                            event._result = { bool: true, targets: result.targets.slice(0) };
                            event.goto(5);
                        }
                        break;
                    case 3:
                        break;
                    default:
                        if (result.links[0] == 0) { }
                        else if (result.links[0] == 1) event.goto(6);
                        else event.goto(4);
                        break;
                }
            } else event.finish();
            ('step 2');
            player.addCountNum('xinxingluan');
            var cards = [];
            while (cards.length < 2) {
                var card = get.cardPile2(function (card) {
                    return !cards.includes(card) && card.number == 6;
                });
                if (!card) break;
                cards.push(card);
            }
            if (!cards.length) event.goto(10);
            else player.chooseButton(['〖兴乱〗请获得以下一张牌', cards], true).set('ai', get.buttonValue).direct = true;
            ('step 3');
            if (result.bool) player.gain(result.links, 'draw'), player.$gainLog('draw', result.links, 'auto');
            event.finish();
            ('step 4');
            player
                .chooseTarget('###〖兴乱〗请选择一名角色###<center>你获得其场上一张点数为6的牌</center>', true, function (card, player, current) {
                    return current.hasCard(function (card) {
                        return card.number == 6 && lib.filter.canBeGained(card, current, player);
                    }, 'ej');
                })
                .set('ai', function (target) {
                    var player = _status.event.player,
                        att = -get.sgn(get.attitude(player, target) - 0.1),
                        max = 0,
                        ej = target.getCards('ej', function (card) {
                            return card.number == 6 && lib.filter.canBeGained(card, target, player);
                        });
                    for (var i of ej) {
                        var num = get.useful(i, target) * att;
                        if (num > max) max = num;
                        return max;
                    }
                });
            ('step 5');
            if (result.bool) {
                player.addCountNum('xinxingluan');
                var target = result.targets[0];
                player.gainPlayerCard(target, 'ej', true).set('filterButton', function (button) {
                    return button.link.number == 6;
                });
            }
            event.finish();
            ('step 6');
            player
                .chooseTarget('###〖兴乱〗请选择一名其他角色###<center>除非其弃置一张点数为6的牌,否则其交给你一张牌</center>', true, function (card, player, current) {
                    return current != player && current.countCards('he') > 0;
                })
                .set('ai', function (target) {
                    var player = _status.event.player,
                        att = get.attitude(player, target);
                    if (att >= 0) return 0;
                    if (
                        !target.hasCard(function (card) {
                            return get.value(card, target) <= 0;
                        }, 'he')
                    )
                        return -att / Math.sqrt(target.countCards('he'));
                    return 0;
                });
            ('step 7');
            if (result.bool) {
                player.addCountNum('xinxingluan');
                var target = result.targets[0];
                event.target = target;
                if (target.countDiscardableCards(target, 'he', (card) => card.number == 6) > 0)
                    target.chooseToDiscard('he', '〖兴乱〗请弃置一张点数为6的牌,或点取消交给' + get.translation(player) + '一张牌', function (card) {
                        return card.number == 6;
                    }).ai = (card) => {
                        var player = _status.event.player;
                        if (!player.hasCard((cardx) => get.value(cardx) < get.value(card), 'he')) return 100 - get.value(card);
                        return 8 - get.value(card);
                    };
                else event._result = { bool: false };
            }
            ('step 8');
            if (!result.bool) target.chooseCard('he', true, '〖兴乱〗请交给' + get.translation(player) + '一张牌');
            else event.finish();
            ('step 9');
            if (result.bool) target.give(result.cards, player, 'giveAuto');
            event.finish();
            ('step 10');
            event.cards = get.cards(6);
            player.$draw(event.cards);
            game.cardsGotoOrdering(event.cards);
            event.dialogid = lib.status.videoId++;
            if (player == game.me && !_status.auto) {
                var dialog = ui.create.dialog('〖兴乱〗亮出');
                dialog.addText('请获得其中一张牌');
                dialog.add(event.cards);
            } else {
                var dialog = ui.create.dialog('〖兴乱〗亮出', event.cards);
            }
            dialog.videoId = event.dialogid;
            game.log(event.target, '因', '#g〖兴乱〗', '亮出了', event.cards);
            ('step 11');
            player.chooseButton(true).set('dialog', event.dialogid).set('ai', get.buttonValue);
            ('step 12');
            game.broadcastAll('closeDialog', event.dialogid);
            player.gain(result.links, 'log', 'gain2');
            event.cards.remove(result.links[0]);
            player.loseToDiscardpile(event.cards);
        },
    };
    lib.skill.twchuanshu = {
        audio: 2,
        trigger: { player: 'phaseZhunbeiBegin' },
        forced: true,
        content() {
            'step 0';
            player.chooseTarget('你可以选择一名角色,对其发动〖传术〗').set('ai', ai.getattitude).set('prompt2', '<center>直到你下回合开始,其:拼点牌亮出时,之点数+3;使用的下一张【杀】对除你外的角色造成伤害时,之+1;使用的下一张【杀】结算结束后,若其不为你,你摸等同于之造成的伤害值张牌</center>');
            ('step 1');
            if (result.targets?.length) {
                var target = result.targets[0];
                qyhcCL.qyhc_firstGain(0, 'num_twchuanshu');
                var comparename = 'twchuanshu_qyhcCL_compare' + qyhcCL.num_twchuanshu;
                var recordname = 'twchuanshu_qyhcCL_record' + qyhcCL.num_twchuanshu;
                lib.skill[comparename] = {
                    audio: 'twchuanshu',
                    trigger: {
                        player: 'compare',
                        target: 'compare',
                    },
                    forced: true,
                    charlotte: true,
                    filter(event, player, name) {
                        if (event.player == player && event.iwhile > 0) return false;
                        return (player == event.player ? event.num1 : event.num2) < 13;
                    },
                    content() {
                        if (player == trigger.player) {
                            game.log(player, '的拼点牌点数+3,结果为', '#g' + (trigger.num1 + 3));
                            trigger.num1 = Math.min(13, trigger.num1 + 3);
                        } else {
                            game.log(player, '的拼点牌点数+3,结果为', '#g' + (trigger.num2 + 3));
                            trigger.num2 = Math.min(13, trigger.num2 + 3);
                        }
                    },
                };
                lib.translate[comparename] = '传术';
                lib.translate[recordname] = '传术';
                target.storage[comparename] = player;
                lib.skill[recordname] = {
                    silent: true,
                    forced: true,
                    charlotte: true,
                    superCharlotte: true,
                    firstDo: true,
                    trigger: {
                        player: 'useCard1',
                    },
                    filter(event, player) {
                        return event.card.name == 'sha';
                    },
                    content() {
                        if (!trigger.twchuanshu_players) trigger.twchuanshu_players = [player.storage[event.name]];
                        else trigger.twchuanshu_players.push(player.storage[event.name]);
                        player.removeSkill(event.name);
                    },
                };
                target.storage[recordname] = player;
                target.addSkill([comparename, recordname]);
                game.addGlobalSkill('twchuanshu_damage');
                player.addSkill(['twchuanshu_draw', 'twchuanshu_clear']);
                target.trymarkSkill('twchuanshu_damage');
            }
        },
        subSkill: {
            damage: {
                trigger: { source: ['damageBegin1'] },
                forced: true,
                forceaudio: true,
                audio: 'twchuanshu',
                charlotte: true,
                logTarget: 'player',
                filter(event, player) {
                    if (event.card) var evt = event.getParent('useCard', true);
                    else return false;
                    if (!evt || !evt.twchuanshu_players) return false;
                    for (var i of evt.twchuanshu_players) if (i != event.player) return true;
                    return false;
                },
                content() {
                    var evt = trigger.getParent('useCard');
                    if (Array.isArray(evt.twchuanshu_players)) for (var i of evt.twchuanshu_players) if (i != trigger.player) trigger.num++;
                },
                intro: {
                    content(storage, player) {
                        var str = '<ul type=circle>';
                        var comparenum = 0;
                        var drawplayers = [];
                        for (var x in player.storage) {
                            if (x.includes('twchuanshu_qyhcCL_compare')) comparenum += 3;
                            if (x.includes('twchuanshu_qyhcCL_record')) drawplayers.push(player.storage[x]);
                        }
                        if (!comparenum && !damagenum) {
                            return;
                        }
                        if (comparenum) str += '<li>拼点牌亮出时,之点数+' + comparenum + '</li>';
                        if (drawplayers.length) {
                            drawplayers.sortBySeat(_status.currentPhase);
                            for (var i = 0; i < drawplayers.length; i++) {
                                var num = 1;
                                if (drawplayers[i + 1] == drawplayers[i]) i++, num++;
                                str += '<li>使用的下一张【杀】对' + get.translation(drawplayers[i]) + '外的角色造成的伤害+' + num + '</li>';
                                if (player != drawplayers[i]) {
                                    var num = 1;
                                    if (drawplayers[i + 1] == drawplayers[i]) i++, num++;
                                    str += '<li>使用的下一张【杀】结算结束后,' + get.translation(drawplayers[i]) + '摸';
                                    if (num > 1) str += get.cnNumber(num) + '次';
                                    str += '等同于此【杀】造成的伤害值张牌</li>';
                                }
                            }
                        }
                        return str + '</ul>';
                    },
                    markcount(storage, player) {
                        var ans = 0;
                        for (var x in player.storage) {
                            if (x.includes('twchuanshu_qyhcCL_compare')) ans++;
                            if (x.includes('twchuanshu_qyhcCL_record')) ans += player.storage[x] == player ? 1 : 2;
                        }
                        return ans;
                    },
                    updatetrigger: {
                        player: 'useCard1',
                    },
                    name: '传术',
                },
            },
            draw: {
                trigger: {
                    global: 'useCardAfter',
                },
                charlotte: true,
                forced: true,
                audio: 'twchuanshu',
                filter(event, player) {
                    return (
                        player != event.player &&
                        event.twchuanshu_players &&
                        event.twchuanshu_players.includes(player) &&
                        event.player.getHistory('sourceDamage', function (evt) {
                            return evt.num > 0 && evt.card == event.card && evt.parent.type == 'card';
                        }).length > 0
                    );
                },
                content() {
                    'step 0';
                    trigger.player.line(player);
                    var num2 = 0;
                    trigger.player.getHistory('sourceDamage', function (evt) {
                        if (evt.card == trigger.card && evt.parent.type == 'card') num2 += evt.num;
                    });
                    player.draw(num2);
                    trigger.twchuanshu_players.remove(player);
                    if (trigger.twchuanshu_players.includes(player)) event.redo();
                },
            },
            clear: {
                trigger: { player: 'phaseBeginStart' },
                forced: true,
                silent: true,
                charlotte: true,
                content() {
                    for (var i of game.players) for (var x in i.storage) if (x.includes('twchuanshu_qyhcCL_') && i.storage[x] == player) i.removeSkill(x);
                },
            },
        },
    };
    if (lib.skill.tianzuo) {
        delete lib.skill.tianzuo.filter;
        lib.skill.tianzuo.trigger = { global: 'skillStart' };
        lib.skill.tianzuo.content = function () {
            game.addGlobalSkill('tianzuo_global');
            for (var i = 2; i < 10; i++) {
                var card = game.createCard2('qizhengxiangsheng', i % 2 ? 'club' : 'spade', i);
                ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
            }
            game.broadcastAll(function () {
                lib.inpile.add('qizhengxiangsheng');
            });
            game.updateRoundNumber();
            lib.card.qizhengxiangsheng = qyhcCL.shenxunyu_qizhengxiangsheng;
            lib.translate.qizhengxiangsheng_info = '出牌阶段,对一名其他角色使用:若此牌上目标角色未被记录过<奇兵>或<正兵>,使用者秘密为目标角色声明<奇兵>或<正兵>→目标角色可以打出一张【杀】或【闪】→若使用者声明<奇兵>或目标角色被此牌记录<奇兵>,且目标角色未打出【杀】,使用者对目标角色造成1点伤害;若使用者声明<正兵>或目标角色被此牌记录<正兵>,且目标角色未打出【闪】,使用者获得目标角色一张牌.';
            game.removeGlobalSkill('qizhengxiangsheng_skill');
        };
    }
    if (lib.skill.olfangquan) {
        lib.skill.olfangquan.round = 1;
        lib.skill.olfangquan.content = function () {
            'step 0';
            player.chooseCardTarget({
                filterCard: true,
                selectCard: 1,
                position: 'h',
                complexTarget: true,
                complexCard: true,
                prompt: '是否发动〖放权〗？',
                prompt2: '<center>跳过此出牌阶段并交给一名其他角色一张手牌,其获得一个回合</center>',
                filterTarget: lib.filter.notMe,
                ai1(card) {
                    if (
                        !game.hasPlayer(function (target) {
                            if (target.hasJudge('lebu') || target == player) return false;
                            if (get.attitude(player, target) > 4) {
                                return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1) > 0;
                            }
                            return false;
                        })
                    )
                        return -1;
                    return 30 + get.value(card) - get.useful(card);
                },
                ai2(target) {
                    if (target.hasJudge('lebu')) return -1;
                    if (get.attitude(player, target) > 4) {
                        return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1);
                    }
                    return -1;
                },
            });
            ('step 1');
            if (result.targets?.length) {
                var target = result.targets[0];
                trigger.cancel();
                player.give(result.cards, target);
                target.markSkillCharacter('olfangquan', player, '放权', '获得了一个回合');
                target.phase('nodelay');
                target.addSkill('olfangquan3');
            }
        };
        lib.skill.xiangle.logTarget = 'player';
        lib.skill.xiangle.filter = function (event, player) {
            return event.card.name == 'sha' && event.player.isIn();
        };
    }
    if (0) {
        delete lib.skill.sbxuanhuo.filterCard;
        lib.skill.sbxuanhuo.global = 'sbxuanhuo_ai';
        lib.skill.sbxuanhuo.group = ['sbxuanhuo_rob', 'sbxuanhuo_damage'];
        lib.skill.sbxuanhuo_ai = {
            ai: {
                skillTagFilter(player) {
                    return player.qyhcAI && player.qyhcAI.qyhc_Eskills && player.qyhcAI.qyhc_Eskills.sbxuanhuo && player.hasMark('sbxuanhuo_mark');
                },
            },
        };
        lib.skill.sbxuanhuo.content = function () {
            'step 0';
            target.draw(2);
            ('step 1');
            target.addMark('sbxuanhuo_mark');
            ('step 2');
            if (player.canUse('sha', target, false)) player.chooseUseTarget({ name: 'sha' }, target, true, false, 'nodistance').selectTarget = [-1, -1];
        };
        lib.skill.sbxuanhuo.subSkill.mark.intro = {
            name: '眩惑',
            name2: '眩',
            markcount: (storage) => storage,
            content: '<center>拥有#枚「眩」</center>',
        };
        lib.skill.sbxuanhuo.subSkill.rob = {
            audio: 'sbxuanhuo',
            trigger: {
                global: ['gainAfter', 'loseAsyncAfter'],
            },
            forced: true,
            filter(event, player) {
                return game.hasPlayer((current) => {
                    if (player == current || current.beOn('phaseDraw')) return false;
                    if (!event.getg(current).length || !current.hasMark('sbxuanhuo_mark')) return false;
                    if (current.countMark('sbxuanhuo_mark') > 5) return false;
                    return current.hasCard((card) => lib.filter.canBeGained(card, current, player), 'he');
                });
            },
            content() {
                'step 0';
                var targets = game.filterPlayer((current) => {
                    if (player == current || current.beOn('phaseDraw')) return false;
                    if (!trigger.getg(current).length || !current.hasMark('sbxuanhuo_mark')) return false;
                    if (current.countMark('sbxuanhuo_mark') > 5) return false;
                    return current.hasCard((card) => lib.filter.canBeGained(card, current, player), 'he');
                });
                event.targets = targets;
                ('step 1');
                var target = targets.shift();
                event.target = target;
                target.addMark('sbxuanhuo_mark');
                ('step 2');
                var target = event.target;
                player.gainPlayerCard(target, 'h', '〖眩惑〗获得' + get.translation(target) + '一张手牌', true)
                if (targets.length > 0) event.redo();
            },
        };
        lib.skill.sbxuanhuo.subSkill.damage = {
            audio: 'sbxuanhuo',
            trigger: {
                player: ['damageEnd'],
            },
            forced: true,
            filter(trigger, player) {
                return trigger.source && trigger.source.isIn() && trigger.source.countMark('sbxuanhuo_mark') > 1;
            },
            logTarget: 'source',
            content() {
                trigger.source.removeMark('sbxuanhuo_mark');
            },
        };
        lib.skill.sbenyuan = {
            audio: 2,
            forced: true,
            trigger: { player: 'phaseZhunbeiBegin' },
            logTarget(event, player) {
                return game.filterPlayer((current) => current.countMark('sbxuanhuo_mark') > 0 && current != player);
            },
            filter(event, player) {
                return game.hasPlayer((current) => current.countMark('sbxuanhuo_mark') > 0 && current != player);
            },
            content() {
                'step 0';
                var targets = game.filterPlayer((current) => current.countMark('sbxuanhuo_mark') > 0 && current != player);
                event.targets = targets;
                ('step 1');
                var target = targets.shift();
                event.target = target;
                event.num = target.countMark('sbxuanhuo_mark');
                player.line(target);
                target.removeMark('sbxuanhuo_mark', event.num);
                ('step 2');
                if (event.num > 3) player.chooseCard('〖恩怨〗交给' + get.translation(event.target) + '一张牌', true, 'he');
                else event.goto(4);
                ('step 3');
                if (result.bool) player.give(result.cards, event.target);
                ('step 4');
                if (event.num < 2) {
                    target.loseHp();
                    player.recover();
                }
                ('step 5');
                if (targets.length) event.goto(1);
            },
        };
    }
    lib.characterPack.refresh.ol_dengai = ['male', 'wei', 4, ['qyhc_tuntian', 'qyhc_zaoxian'], []];
    if (lib.config.characters.includes('refresh')) {
        lib.character.ol_dengai = ['male', 'wei', 4, ['qyhc_tuntian', 'qyhc_zaoxian'], []];
    }
    lib.characterPack.clan.clan_xuncan = ['male', 'wei', 3, ['qyhc_yunshen', 'qyhc_shangshen', 'clanfenchai', 'clandaojie'], ['clan:颍川荀氏']];
    lib.characterPack.clan.clan_wuban = ['male', 'shu', 4, ['clanzhanding', 'clanjintao', 'clanmuyin'], ['clan:陈留吴氏']];
    lib.skill.clanzhanding = {
        audio: 2,
        prompt: '<center>将任意张牌当【杀】使用<br>此【杀】结算结束后,若之造成伤害,你将手牌调整至手牌上限</center>',
        usable: 4,
        creatTrigger: true,
        enable: 'chooseToUse',
        viewAsFilter(player) {
            return player.countCards('hes') > 0;
        },
        viewAs: { name: 'sha' },
        filterCard: true,
        position: 'hes',
        selectCard: [1, Infinity],
        check(card) {
            var len = _status.event.player.countCards('h');
            if (get.position(card) == 'e') return ui.selected.cards.length || len ? 0 : 11 - get.value(card);
            return len - ui.selected.cards.length + Math.random() - 0.5;
        },
        mod: {
            aiOrder(player, card, num) {
                var name = card.name;
                if (name == 'liannu' || name == 'zhuge') return 16;
                if (card.name != 'sha' && player.countCards('h') > 1) return num + 6;
            },
        },
        onuse(links, player) {
            player.addTempSkill('clanzhanding_effect');
        },
        ai: {
            order: 5,
            respondSha: true,
            skillTagFilter(player) {
                return player.countCards('hes') > 0;
            },
        },
        subSkill: {
            effect: {
                trigger: { player: 'useCardAfter' },
                forced: true,
                charlotte: true,
                audio: 'clanzhanding',
                filter(event, player) {
                    return event.skill == 'clanzhanding' && player.hasHistory('sourceDamage', (evt) => evt.card == event.card) && player.countCards('h') != player.getHandcardLimit();
                },
                content() {
                    var num1 = player.countCards('h'),
                        num2 = player.getHandcardLimit();
                    if (num1 <= num2) player.drawTo(num2);
                    else player.chooseToDiscard(num1 - num2, true, '〖斩钉〗请弃置' + get.cnNumber(num1 - num2) + '张牌');
                },
            },
        },
    };
    lib.skill.clanjintao = {
        trigger: {
            global: ['useCard', 'respond', 'dying'],
        },
        audio: 'jintao',
        forced: true,
        filter(event, player, name) {
            if (!player.beOn()) return false;
            if (name == 'dying' && event.player != player) return true;
            return event.respondTo && player != event.player && event.respondTo[0] == player;
        },
        content() {
            'step 0';
            trigger.player.line(player);
            if (event.triggername == 'dying') {
                player.qyhc_moveMaxhand('clanjintao');
                event.finish();
            }
            ('step 1');
            player.qyhc_moveMaxhand('clanjintao', -1);
            player.addTempSkill('clanjintao_range');
            ('step 2');
            player.storage.clanjintao_range++;
            player.trymarkAutoSkill('clanjintao_range');
        },
        ai: {
            halfneg: true,
            effect: {
                player(card, player, target) {
                    if (get.tag(card, 'damage') && player.getHandcardLimit() == 0) return 2;
                },
            },
        },
        subSkill: {
            range: {
                charlotte: true,
                init(player, skill) {
                    player.storage[skill] = 0;
                    player.markSkill(skill);
                },
                mod: {
                    attackRange(player, distance) {
                        return distance + (player.storage.clanjintao_range ? player.storage.clanjintao_range : 0);
                    },
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + (player.storage.clanjintao_range ? player.storage.clanjintao_range : 0);
                    },
                },
                intro: {
                    name(storage, player) {
                        if (storage) {
                            return '进讨·范围&杀限<span class=greentext>+' + storage + '</span>';
                        }
                        return;
                    },
                    content(storage, player) {
                        if (storage) {
                            return '<center>因〖进讨〗当前回合攻击范围和使用【杀】的次数限制<span class=greentext>+' + storage + '</span></center>';
                        }
                        return;
                    },
                    markcount(storage, player) {
                        if (qyhcCL.beOwned10) {
                            player.chanMarkinner('clanjintao_range', '进讨<span class=greentext>+' + storage + '</span>');
                            return 0;
                        }
                        player.chanMarkinner('clanjintao_range', '讨');
                        return storage;
                    },
                },
            },
        },
    };
    lib.skill.reqianxun = {
        audio: 2,
        trigger: {
            target: 'useCardToBegin',
            player: 'judgeBefore',
        },
        prompt: '是否发动〖谦逊〗将所有手牌置于武将牌上？',
        prompt2: '<center>你于当前回合结束时收回这些牌</center>',
        filter(event, player) {
            if (player.countCards('h') == 0) return false;
            if (event.parent.name == 'phaseJudge') return true;
            if (event.name == 'judge') return false;
            if (event.card && get.type(event.card) == 'trick') return true;
        },
        content() {
            var cards = player.getCards('h');
            player.addToExpansion(cards, 'draw', player).gaintag.add('reqianxun2');
            player.addSkill('reqianxun2');
        },
        ai: {
            effect: {
                target(card, player, target) {
                    if (!target.hasFriend()) return;
                    if (player == target) return;
                    var type = get.type(card);
                    var nh = target.countCards();
                    if (type == 'trick') {
                        if (get.tag(card, 'damage')) {
                            if (nh < 3 || target.hp <= 2) return 0.8;
                        }
                        return [1, nh];
                    } else if (type == 'delay') return [0.5, 0.5];
                },
            },
        },
    };
    if (lib.skill.reqianxun2) {
        lib.skill.reqianxun2.charlotte = true;
        lib.skill.reqianxun2.audio = 'reqianxun';
    }
    lib.skill.qirang = {
        audio: 2,
        trigger: { player: 'equipEnd' },
        forced: true,
        content() {
            var card = get.cardPile(function (card) {
                return get.type2(card) == 'trick';
            });
            if (card) player.gain(card, 'draw');
        },
        ai: {
            reverseEquip: true,
            effect: {
                target(card, player, target, current) {
                    if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                },
            },
        },
    };
    lib.skill.yuhua = {
        trigger: { player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'] },
        //direct:true,
        forced: true,
        audio: 2,
        content() {
            'step 0';
            player.draw(2);
            ('step 1');
            if (player.countCards('he') > 0) player.chooseCard('he', '〖羽化〗请将一张牌置于牌堆顶', true).set('ai', ai.choosecardtop);
            else event.finish();
            ('step 2');
            if (result.cards?.length) {
                player.$throw(get.position(result.cards[0]) == 'e' ? result.cards[0] : 1, 800);
                game.log(player, '将', get.position(result.cards[0]) == 'e' ? result.cards[0] : '#y一张手牌', '置于了牌堆顶');
                player.lose(result.cards, ui.cardPile, 'insert');
            } else event.finish();
            ('step 3');
            game.updateRoundNumber();
        },
        mod: {
            ignoredHandcard(card, player) {
                if (get.type(card) != 'basic') return true;
            },
            cardDiscardable(card, player, name) {
                if (name == 'phaseDiscard' && get.type(card) != 'basic') return false;
            },
        },
        ai: {
            effect: {
                target(card) {
                    if (get.type(card) == 'delay') return 0.3;
                },
            },
        },
    };
    if (lib.skill.xinwanyi) {
        lib.skill.xinwanyi.locked = false;
        lib.skill.xinwanyi.mod = {
            cardEnabled(card, player) {
                var cards = player.getExpansions('xinwanyi');
                if (cards.length) {
                    var suit = card.suit;
                    for (var i of cards) if (i.suit == suit) return false;
                }
            },
            cardRespondable(card, player) {
                var cards = player.getExpansions('xinwanyi');
                if (cards.length) {
                    var suit = card.suit;
                    for (var i of cards) if (i.suit == suit) return false;
                }
            },
            cardSavable(card, player) {
                var cards = player.getExpansions('xinwanyi');
                if (cards.length) {
                    var suit = card.suit;
                    for (var i of cards) if (i.suit == suit) return false;
                }
            },
            cardDiscardable(card, player) {
                var cards = player.getExpansions('xinwanyi');
                if (cards.length) {
                    var suit = card.suit;
                    for (var i of cards) if (i.suit == suit) return false;
                }
            },
            ignoredHandcard(card, player) {
                var cards = player.getExpansions('xinwanyi');
                if (cards.length) {
                    var suit = card.suit;
                    for (var i of cards) if (i.suit == suit) return true;
                }
            },
        };
    }
    if (lib.config.characters.includes('clan')) {
        lib.character.clan_xuncan = ['male', 'wei', 3, ['qyhc_yunshen', 'qyhc_shangshen', 'clanfenchai', 'clandaojie'], ['clan:颍川荀氏']];
        lib.character.clan_wuban = ['male', 'shu', 4, ['clanzhanding', 'clanjintao', 'clanmuyin'], ['clan:陈留吴氏']];
    }
    /*lib.skill.qiz2hi={
        audio:2,
        trigger:{
            player:'useCard'
        },
        direct:true,
        filter:function(event,player){
            return player.getCountNum('qiz2hi')<4;
        },
        creatTrigger:[
            function(s,player){
                var left=player.getHistory('useSkill',function(evt){
                    return (evt.sourceSkill||evt.skill)=='qiz2hi';
                }).length;
                var all=left+4-player.getCountNum('qiz2hi');
                if(all>left) return "<span class=greentext><center>奇制"+left+'/'+all+"</center></span>";
                return "<span class=redtext><center>奇制"+left+"</center></span>";
            },
            function(s,player){
                var left=player.getHistory('useSkill',function(evt){
                    return (evt.sourceSkill||evt.skill)=='qiz2hi';
                }).length;
                var all=left+4-player.getCountNum('qiz2hi');
                if(all>left){
                    return "<center><span class=greentext>本回合还可发动"+(all-left)+"次〖奇制〗<br>(已发动"+left+"次奇制,共"+all+"次)</span></center>";
                }
                return "<center><span class=redtext>本回合无法再发动〖奇制〗<br>(本回合已发动过"+left+"次奇制)</span></center>";
            },
            function(s,player){
                var left=player.getHistory('useSkill',function(evt){
                    return (evt.sourceSkill||evt.skill)=='qiz2hi';
                }).length;
                var all=left+4-player.getCountNum('qiz2hi');
                if(qyhcCL.beOwned10){
                    if(all>left){
                        player.chanMarkinner('qiz2hi_QYHCqyhc_cl',"<span class=greentext>奇制</span>");
                        return left+'/'+all;
                    }
                    player.chanMarkinner('qiz2hi_QYHCqyhc_cl',"<span class=redtext>奇制</span>");
                    return left;
                }
                if(all>left) player.chanMarkinner('qiz2hi_QYHCqyhc_cl',"<span class=greentext>"+left+"</span>");else player.chanMarkinner('qiz2hi_QYHCqyhc_cl',"<span class=redtext>奇</span>");
                return left;
            }
        ],
        content:function(){
            'step 0'
            var str='';
            if(event.isMine()&&trigger.targets.length&&game.hasPlayer((current)=>(!trigger.targets.includes(current)))){
                str='<br>(选择脸上显示〇的角色可以摸一张牌或令本回合发动〖奇制〗的次数限制+1)';
                for(var i of game.filterPlayer()) if(!trigger.targets.includes(i)) i.prompt('〇');
            }
            player.chooseTarget('〖奇制〗你可以选择一名角色','<center>你重铸其一张牌,或令其重铸一张牌'+str+'</center>',function(card,player,target){
                return target.countCards('he',function(card){
                    return target.canRecast(card,player);
                })>0;
            }).set('ai',function(target){
                var player=_status.event.player;
                if(_status.event.targets.includes(target)) return 0.2;
                if(target==player) return 1.6;
                if(get.attitude(player,target)<=0&&target.countCards('e',(card)=>(get.value(card)>6))) return 2;
                if(get.attitude(player,target)<=0&&target.hasSkillTag('nogain')) return 1.8;
                if(get.drawEffect(target,1,player)>1.5) return 1.7;
                return 1;
            }).set('targets',trigger.targets);
            'step 1'
            if(result.bool){
                var target=result.targets[0];
                player.addCountNum('qiz2hi');
                player.trymarkAutoSkill('qiz2hi_QYHCqyhc_cl');
                event.target=target;
                if(target==player){
                    player.chooseCard('〖奇制〗请重铸一张牌','he',true,lib.filter.cardRecastable);
                    event.goto(3);
                }else player.choosePlayerCard(target,'he','〖奇制〗请重铸'+get.translation(target)+'一张牌<br>或点取消令其重铸一张牌',function(button){
                    return _status.event.target.canRecast(button.link,_status.event.player);
                });
            }else event.finish();
            'step 2'
            if(result.bool){
                event.target.recast(result.links);
                event.goto(4);
            }else event.target.chooseCard(get.translation(player)+'对你发动〖奇制〗:请重铸一张牌','he',true,lib.filter.cardRecastable);
            'step 3'
            if(result.bool) event.target.recast(result.cards);
            'step 4'
            if(trigger.targets.length&&!trigger.targets.includes(event.target)) player.chooseControl('摸一张牌','奇制次数+1').set('prompt','请选择:摸一张牌或令你本回合发动〖奇制〗的次数限制+1').set('choice',+(player.getCountNum('qiz2hi')==4));
            else event.finish();
            'step 5'
            if(result.index) player.addCountNum('qiz2hi',-1);
            else player.draw('nodelay');
            player.trymarkAutoSkill('qiz2hi_QYHCqyhc_cl');
        }
    }*/
    lib.skill.qizhi = {
        audio: 2,
        trigger: {
            player: 'useCard',
        },
        content() {
            'step 0';
            event.qizhinum = player.getHistory('useSkill', function (evt) {
                return (evt.sourceSkill || evt.skill) == 'qizhi';
            }).length;
            event.fpp = game.filterPlayer((current) => !(trigger.targets || []).includes(current) && current.countDiscardableCards(player, 'he') > 0);
            if (event.fpp.length == 0) event.finish();
            else if (event.fpp.length == 1 && event.isMine()) {
                event.target = event.fpp[0];
                var str = '〖奇制〗你可以弃置' + get.translation(event.target) + '一张牌<br><span class=text>其令你或其摸一张牌</span>';
                if (event.target == player) str = '〖奇制〗你可以弃置一张牌摸一张牌';
                player.discardPlayerCard(str, event.target, 'he')
                event.goto(3);
            } else
                player
                    .chooseTarget('〖奇制〗你可以选择一名' + ((trigger.targets || []).length ? '不为此牌目标的' : '') + '角色', '<center>你弃置其一张牌,其令你或其摸一张牌</center>', function (card, player, target) {
                        return !_status.event.targets.includes(target) && target.countDiscardableCards(player, 'he') > 0;
                    })
                    .set('ai', function (target) {
                        var player = _status.event.player;
                        if (get.effect(target, { name: 'guohe_copy2' }, player, target) >= 0) return 2 * get.drawEffect(target) + Math.random();
                        if (get.attitude(player, target) > 0) {
                            if (player.canView(target) && target.hasCard((card) => get.value(card) < 5, 'he')) return 1.5 * get.drawEffect(target) + Math.random() / 2;
                            if (target.countCards('h') <= _status.event.parent.qizhinum && !target.hasCard((card) => get.value(card) > 6)) return get.drawEffect(target) + Math.random() / 3;
                            if (get.drawEffect(target) < 0.2) return -1;
                            if (target == player && player.hasCard((card) => (player.beOn() ? player.getUseValue(card) : get.useful(card)) < 2 + Math.random(), 'he')) return 0.1;
                            return -0.1;
                        }
                        if (target.countCards('e', (card) => get.value(card) > 6)) return 2 - get.drawEffect(target);
                        if (player.canView(target) && target.hasCard((card) => get.value(card) > 8)) return 2 - get.drawEffect(target);
                        if (get.drawEffect(target) < 0.2) return 1.4;
                        return player.hasSkill('jinqu') ? 0.1 : 0;
                    })
                    .set('targets', trigger.targets || []);
            ('step 1');
            if (result.targets?.length) {
                var target = result.targets[0];
                player.addCountNum('qizhi');
                player.trymarkAutoSkill('qizhi_QYHCqyhc_cl');
                event.target = target;
                player.discardPlayerCard(target != player ? '〖奇制〗弃置' + get.translation(target) + '一张牌<br><span class=text>其令你或其摸一张牌</span>' : '〖奇制〗请弃置一张牌,摸一张牌', target, true, 'he').set('delay', false);
            } else event.finish();
            ('step 2');
            var next = target.chooseBool('〖奇制〗是否摸一张牌？<br><span class=text>或点取消令' + get.translation(player) + '摸一张牌</span>').set('choice', get.attitude(target, player) <= 0 || (target.countCards('h') > event.qizhinum + 1 && player.countCards('h') > 3));
            if (target == player) next.frequentSkill = true;
            event.goto(4);
            ('step 3');
            if (result.bool) {
                player.addCountNum('qizhi');
                player.trymarkAutoSkill('qizhi_QYHCqyhc_cl');
                var next = target.chooseBool('〖奇制〗是否摸一张牌？<br><span class=text>或点取消令' + get.translation(player) + '摸一张牌</span>').set('choice', get.attitude(target, player) <= 0 || (target.countCards('h') > event.qizhinum + 1 && player.countCards('h') > 3));
                if (target == player) next.frequentSkill = true;
            } else event.finish();
            ('step 4');
            if (result.bool) target.draw();
            else {
                target.line(player);
                player.draw();
            }
        },
        forced: true,
        filter(event, player) {
            return game.hasPlayer(function (target) {
                if (event.targets && event.targets.includes(target)) return false;
                return target.countDiscardableCards(player, 'he') > 0;
            });
        },
        mark: true,
        intro: {
            updatetrigger: {
                global: 'phaseBefore',
                player: ['qizhiEnd', 'useCard1'],
            },
            markcount: (storage, player) => player.getCountNum('qizhi').toString(),
            content: (storage, player) => (player.getCountNum('qizhi') ? '本回合已发动' + get.cnNumber(player.getCountNum('qizhi')) + '次〖奇制〗' : '本回合未发动过〖奇制〗'),
        },
    };
    /*lib.skill.jinqu={
        audio:2,
        trigger:{player:'phaseDiscardBefore'},
        direct:true,
        content:function(){
            'step 0'
            event.used=player.getHistory('useSkill',function(evt){
                return (evt.sourceSkill||evt.skill)=='qizhi';
            }).length;
            var used=event.used;
            var cn=get.cnNumber(used);
            var needdis=player.needsToDiscard();
            if(used==2){
                event.cxk=true;
                player.chooseBool('是否发动〖进趋〗将此弃牌阶段改为摸两张牌将手牌弃至两张？').set('choice',needdis<=2||player.countCards('h')<=2);
            }else player.chooseControl('摸二弃至'+cn,'摸'+cn+'弃至二','cancel2').set('prompt','###〖进趋〗你可以将此弃牌阶段改为...###<center>摸二弃至'+cn+':摸两张牌,将手牌弃至'+cn+'张<br>摸'+cn+'弃至二:摸'+cn+'张牌,将手牌弃至两张</center>').set('choice',function(hs){
                var drawTo=hs+used,drawTo2=hs+2;
                var disTo=2,disTo2=used,disTo3=hs-needdis;
                if(drawTo<disTo) disTo=drawTo;
                if(drawTo2<disTo2) disTo2=drawTo2;
                if(disTo>disTo2&&disTo>disTo3) return 1;
                if(disTo2>disTo&&disTo2>disTo3) return 0;
                if(disTo3>disTo&&disTo3>disTo2) return 2;
                if(disTo>disTo2) return 1;
                if(disTo2>disTo) return 0;
                if(used>2) return 1;
                return 0;
            }(player.countCards('h')));
            'step 1'
            if(event.cxk) if(!result.bool) event.finish();else var draws=2,disto=2;
            if(!event.cxk) if(result.control=='cancel2') event.finish();else if(result.index) var draws=event.used,disto=2;else var draws=2,disto=event.used;
            if(draws||disto){
                trigger.setContent(function(){
                    'step 0'
                    game.log(player,'进入了弃牌阶段');
                    player.draw(event.draws);
                    'step 1'
                    event.num=player.countCards('h')-event.disto;
                    if(event.num<=0) event.finish();
                    else{
                        game.broadcastAll(function(player){
                            if(lib.config.show_phase_prompt) player.popup('弃牌阶段',null,false);
                        },player);
                    }
                    event.trigger('phaseDiscard');
                    'step 2'
                    player.chooseToDiscard(num,true);
                    "step 3"
                    event.cards=result.cards;
                });
                trigger.disto=disto;
                trigger.draws=draws;
            }
        },
        ai:{combo:'qizhi'}
    }*/
    lib.skill.jinqu = {
        audio: 2,
        trigger: { global: 'phaseEnd' },
        forced: true,
        filter(event, player) {
            var qizhi = player.getHistory('useSkill', function (evt) {
                return (evt.sourceSkill || evt.skill) == 'qizhi';
            }).length;
            return (
                qizhi &&
                game.hasPlayer((current) => {
                    return current.countCards('h') <= qizhi;
                })
            );
        },
        content() {
            'step 0';
            event.qizhinum = player.getHistory('useSkill', function (evt) {
                return (evt.sourceSkill || evt.skill) == 'qizhi';
            }).length;
            player
                .chooseTarget([1, event.qizhinum], '〖进趋〗你可以选择' + (event.qizhinum == 1 ? '一名' : '至多' + get.cnNumber(event.qizhinum) + '名') + '手牌数不大于' + event.qizhinum + '的角色', '<center>这些角色依次摸两张牌并将手牌弃至' + get.cnNumber(event.qizhinum) + '张</center>', function (card, player, target) {
                    return target.countCards('h') <= _status.event.parent.qizhinum;
                })
                .set('ai', function (target) {
                    return get.drawEffect(target, Math.min(2, _status.event.parent.qizhinum - target.countCards('h')), _status.event.player) + get.sgn(get.attitude(_status.event.player, target));
                });
            ('step 1');
            if (result.bool) {
                event.targets = result.targets.slice().sortBySeat(_status.currentPhase);
            } else event.finish();
            ('step 2');
            if (event.targets.length) {
                event.targets.sortBySeat(_status.currentPhase);
                event.target = event.targets.shift();
                event.target.draw(2);
            } else event.finish();
            ('step 3');
            var num = target.countCards('h') - event.qizhinum;
            if (num > 0) target.chooseToDiscard(num, '〖进趋〗请将手牌弃至' + get.cnNumber(event.qizhinum) + '张', true);
            event.goto(2);
        },
        ai: { combo: 'qizhi' },
    };
    if (lib.skill.dclongsong) {
        lib.skill.dclongsong.filter = function (event, player) {
            return player.hasCard({ color: 'red' }, 'he');
        };
        lib.skill.dclongsong.content = function () {
            'step 0';
            player.chooseCardTarget({
                filterCard: { color: 'red' },
                selectCard: 1,
                complexTarget: true,
                complexCard: true,
                position: 'he',
                filterTarget(card, player, target) {
                    if (player == target && ui.selected.cards.length) return lib.filter.cardDiscardable(ui.selected.cards[0], player);
                    return true;
                },
                ai1(card) {
                    return 11 - get.value(card);
                },
                ai2(target) {
                    var player = _status.event.player;
                    if (player == target) return 0.3;
                    var att = get.attitude(player, target);
                    if (target.hasSkillTag('nogain')) att /= 10;
                    return att / 2;
                },
                prompt: '〖龙颂〗你可以选择一名角色和一张红色牌',
                prompt2: '<center>若其为你,你弃置此牌,否则你将此牌交给其<br>' + (lib.config.extension_群英荟萃乀摧林_prom ? '你会获得一个技能(请阅读技能描述)' : '若其有技能描述中包含<出牌阶段>的你没有的技能,你选择其这些技能中的一个,直到当前阶段结束后,其的此技能失效且你获得此技能;否则你从随机三个描述的前四个字符为<出牌阶段>且你没有的技能中选择一个获得直到当前阶段结束后') + '</center>',
            });
            ('step 1');
            if (result.targets?.length) {
                var target = result.targets[0];
                event.target = target;
                if (player == target) player.discard(result.cards);
                else player.give(result.cards, target);
                var skills = target.getSkills(null, false, false).filter((skill) => {
                    if (player.hasSkill(skill, null, false, false)) return false;
                    if (get.translation(skill + '_info').includes('出牌阶段')) return true;
                    return false;
                });
                if (!skills.length) {
                    event.notdis = true;
                    var skills = qyhcCL
                        .getYuhengku('phaseUsejing')
                        .filter((skill) => {
                            return !player.hasSkill(skill, null, false, false);
                        })
                        .randomGets(3);
                }
                if (skills.length > 1) {
                    player.chooseSkills('###〖龙诵〗请选择以下一个技能获得直到当前阶段结束后###' + (event.notdis ? '' : '<center>且' + get.translation(target) + '的此技能失效直到当前阶段结束后</center>'), 'big', true, skills).set('ai', function (button) {
                        return get.skillRank(button.link, 'in');
                    });
                } else if (skills.length == 1) event._result = { bool: true, links: skills };
                else event.finish();
            }
            ('step 2');
            var target = event.target;
            if (result.bool) {
                if (!event.notdis) {
                    target.disableSkill('dclongsong_back', result.links);
                    target.markAuto('dclongsong_back', result.links);
                    target.addTempSkill('dclongsong_back', ['phaseUseAfter', 'phaseAfter']);
                    game.log(target, '的技能', '#g' + get.colorful(result.links), '失效直到当前阶段结束');
                    game.log(player, '获得技能', '#g' + get.colorful(result.links), '直到当前阶段结束');
                    player.popup(result.links, 'thunder');
                    player.addTempSkill(result.links[0], ['phaseUseAfter', 'phaseAfter']);
                } else player.addTempSkill(result.links[0], ['phaseUseAfter', 'phaseAfter']);
            }
        };
        lib.skill.dcxiuwen.filter = function (event, player) {
            var t = player.storage.dcxiuwen;
            if (t && t[game.shuffleNumber] && t[game.shuffleNumber].includes(event.card.name)) return false;
            return true;
        };
        lib.skill.dcxiuwen.content = function () {
            player.qyhc_firstGain([], 'storage', 'dcxiuwen', game.shuffleNumber);
            player.storage.dcxiuwen[game.shuffleNumber].push(trigger.card.name);
            player.draw();
        };
        lib.skill.dcxiuwen.mark = true;
        lib.skill.dcxiuwen.intro = {
            mark(dialog, storage, player) {
                if (!storage || !storage[game.shuffleNumber]) return '';
                var list = [];
                for (var i of storage[game.shuffleNumber]) list.push(['', '', i]);
                return dialog.addAuto([list, 'vcard']);
            },
            name(storage, player) {
                if (!storage || !storage[game.shuffleNumber]) return '当前牌堆未发动过〖修文〗';
                return '当前牌堆已因以下牌名发动过〖修文〗';
            },
            markcount(storage, player) {
                if (!storage || !storage[game.shuffleNumber]) return '0';
                return storage[game.shuffleNumber].length;
            },
            updatetrigger: {
                player: 'dcxiuwenEnd',
            },
        };
    }
    if (lib.skill.clanhuanjia) {
        lib.skill.clanlianhe = {
            audio: 2,
            trigger: { player: 'phaseUseBegin' },
            filter(event, player) {
                return game.countPlayer() > 1;
            },
            forced: true,
            addcreateSkill(target) {
                qyhcCL.qyhc_firstGain(0, 'skillid', 'clanlianhe');
                qyhcCL.skillid.clanlianhe++;
                var thisname = 'clanlianhe_effect' + qyhcCL.skillid.clanlianhe;
                target.storage[thisname] = _status.event.player;
                lib.translate[thisname] = '连和';
                lib.skill[thisname] = ((skill) => ({
                    charlotte: true,
                    forced: true,
                    init(player, skill) {
                        player.markSkill(skill);
                    },
                    onremove(player, skill) {
                        player.tryunmarkSkill(skill);
                        if (player.storage[skill]) delete player.storage[skill];
                    },
                    forced: true,
                    filter(event, player) {
                        return !player.hasHistory('gain', (evt) => {
                            return evt.parent.name == 'draw' && evt.getParent('phaseUse') == event;
                        });
                    },
                    intro: {
                        name: '连和',
                        content(target, player) {
                            if (target) {
                                player.line(target);
                                target.popup('连和来源');
                                return '<center>你的出牌阶段结束时,若你未于此阶段摸牌,你令' + get.translation(target) + '摸X+1张牌或交给其X-1张牌(X为你此阶段获得的牌数且至多为3)<br>此效果直至你出牌阶段结束后<center>';
                            }
                        },
                        markcount(storage, player) {
                            if (!player.beOn('phaseUse')) return 0;
                            if (
                                player.hasHistory('gain', (evt) => {
                                    return evt.parent.name == 'draw' && evt.getParent('phaseUse') == _status.currentStage;
                                })
                            )
                                return '×';
                            var num = 0;
                            player.getHistory('gain', (evt) => {
                                if (evt.getParent('phaseUse') != _status.currentStage) return false;
                                num += evt.cards.length;
                            });
                            return Math.min(num, 3).toString();
                        },
                        updatetrigger: {
                            player: ['gainAfter'],
                            global: ['loseAsyncAfter', 'qyhcLoseGainAfter'],
                        },
                    },
                    trigger: { player: 'phaseUseEnd' },
                    content() {
                        'step 0';
                        var fromer = player.storage[event.name];
                        if (!fromer || !fromer.isIn()) return event.finish();
                        fromer.logSkill_qyhccl(['clanlianhe', '连和效果'], player);
                        var num = 0;
                        player.getHistory('gain', (evt) => {
                            if (evt.getParent('phaseUse') != trigger) return false;
                            num += evt.cards.length;
                        });
                        num = Math.min(num, 3);
                        event.num = num;
                        if (num <= 1 || fromer == player) event._result = { bool: false };
                        else {
                            player
                                .chooseCard('〖连和〗效果:交给' + get.translation(fromer) + get.cnNumber(num - 1) + '张牌,或点取消令其摸' + get.cnNumber(num + 1) + '张牌', num - 1, 'he')
                                .set('ai', (card) => {
                                    if (_status.event.draw) return 0;
                                    return 5 - get.value(card);
                                })
                                .set('draw', get.attitude(player, fromer) >= 0);
                        }
                        ('step 1');
                        var fromer = player.storage[event.name];
                        if (result.bool) player.give(result.cards, fromer);
                        else fromer.draw(num + 1);
                    },
                    mark: true,
                }))(thisname);
                game.finishSkill(thisname);
                target.addTempSkill(thisname, { player: 'phaseUseAfter' });
            },
            content() {
                'step 0';
                player.chooseTarget('〖连和〗你可以选择两名角色', '<center>其连环(若其横置则重置,否则其横置),且其下个出牌阶段结束时,若其此阶段未摸牌,其令你摸X+1张牌或交给你X-1张牌(X为其此阶段获得的牌数且至多为3)</center>', 2).set('ai', (target) => {
                    var player = _status.event.player;
                    var eff = get.effect(target, { name: 'tiesuo' }, player, player);
                    return eff + target.hp / 3 + 100;
                });
                ('step 1');
                if (result.bool) {
                    var targets = result.targets.sortBySeat();
                    targets.forEach((i) => {
                        i.link();
                        lib.skill.clanlianhe.addcreateSkill(i);
                    });
                }
            },
        };
        lib.skill.clanhuanjia = {
            audio: 2,
            trigger: { player: 'phaseUseEnd' },
            filter(event, player) {
                return game.hasPlayer((current) => player.canCompare(current));
            },
            forced: true,
            content() {
                'step 0';
                player
                    .chooseTarget('〖缓颊〗你可以与一名其他角色拼点', '<center>你获得其中一张拼点牌,赢者可以使用另一张拼点牌,若赢者如此做且其因此牌:造成了伤害,你失去一个技能;否则你可以发动〖连和〗</center>', (card, player, target) => {
                        return player.canCompare(target);
                    })
                    .set('ai', (target) => {
                        var player = _status.event.player;
                        if (get.attitude(player, target) <= 0) {
                            var hs = player.getCards('h').sort((a, b) => b.number - a.number);
                            var ts = target.getCards('h').sort((a, b) => b.number - a.number);
                            if (!hs.length || !ts.length) return 0;
                            if (hs[0].number >= ts[0].number || !(get.tag(hs[0], 'damage') && target.hasValueTarget(hs[0]))) return 1;
                            return Math.random() - 0.6;
                        }
                        return 0;
                    });
                ('step 1');
                if (result.targets?.length) {
                    var target = result.targets[0];
                    event.target = target;
                    player.chooseToCompare(target);
                } else event.finish();
                ('step 2');
                var cards = [],
                    winner = result.bool ? player : target;
                if (result.tie) winner = null;
                event.winner = winner;
                game.getGlobalHistory('cardMove', (evt) => {
                    if (evt.getParent(3) == event) cards.addArray(evt.cards.filterInD('d'));
                });
                if (winner) var str = '<center>' + (winner == player ? '你' : get.translation(winner)) + '可以使用其中另一张牌<br>若其如此做且其因此牌:造成了伤害,你失去一个技能;否则你可以发动〖连和〗</center>';
                else var str = '';
                if (cards.length) event.cards = cards;
                else return event.finish();
                player
                    .chooseCardButton(event.cards, '###请获得其中一张牌###' + str, true)
                    .set('ai', (button) => {
                        var player = _status.event.player,
                            winner = _status.event.winner;
                        if (winner) if (get.attitude(player, winner) <= 0) return -winner.getUseValue(button.link);
                        return get.buttonValue(button);
                    })
                    .set('winner', winner);
                ('step 3');
                if (result.bool) {
                    player.gain(result.links, 'gain2');
                    event.cards.remove(result.links[0]);
                } else event.finish();
                ('step 4');
                if (!event.winner) return event.finish();
                var cardsx = cards.filter((i) => get.position(i, true) == 'd' && event.winner.hasUseTarget(i));
                if (!cardsx.length) return event.finish();
                cardsx = cardsx[0];
                var att = get.attitude(event.winner, player),
                    damage = 1;
                if (att > 2 && get.tag(cardsx, 'damage')) damage *= 2;
                if (player.getUseValue(cardsx) * damage + 0.1 <= 0 && !event.isMine()) return event.finish();
                event.winner.chooseUseTarget(cardsx, false).set('oncard', (card) => {
                    _status.event.getParent('clanhuanjia').evtcard = card;
                });
                ('step 5');
                if (event.evtcard) {
                    if (event.winner.hasHistory('sourceDamage', (evt) => evt.card == event.evtcard)) {
                        var skills = player.getSkills(null, false, false).filter((skill) => {
                            var info = get.info(skill);
                            if (!info || get.is.empty(info) || info.charlotte) return false;
                            return true;
                        });
                        if (skills)
                            player.chooseSkills('〖缓颊〗请选择一个技能失去', skills.length > 2 ? 'big' : null, skills, true).set('ai', function (button) {
                                var info = get.info(button.link);
                                if (info && info.ai && info.ai.neg) return 3;
                                if (button.link == 'clanxumin') return 1;
                                var value = get.skillRank(button.link, 'inout');
                                return value / 30;
                            });
                        else event.finish();
                    } else event.goto(7);
                } else event.finish();
                ('step 6');
                if (result.bool) player.removeSkillLog(result.links[0]);
                event.finish();
                ('step 7');
                player.useSkill('clanlianhe');
            },
            ai: {
                expose: 0.1,
            },
        };
    }
    if (lib.skill.clanfangzhen) {
        lib.skill.clanfangzhen = {
            audio: 2,
            trigger: { player: 'phaseUseBegin' },
            forced: true,
            addcreateSkill(target) {
                qyhcCL.qyhc_firstGain(0, 'skillid', 'clanfangzhen');
                qyhcCL.skillid.clanfangzhen++;
                var thisname = 'clanfangzhen_effect' + qyhcCL.skillid.clanfangzhen;
                target.storage[thisname] = _status.event.player;
                lib.translate[thisname] = '放赈';
                lib.skill[thisname] = ((skill) => ({
                    charlotte: true,
                    forced: true,
                    init(player, skill) {
                        player.markSkill(skill);
                    },
                    onremove(player, skill) {
                        player.tryunmarkSkill(skill);
                        if (player.storage[skill]) delete player.storage[skill];
                    },
                    forced: true,
                    filter(event, player) {
                        return player.countCards('he');
                    },
                    intro: {
                        name: '放赈',
                        content(target, player) {
                            if (target) {
                                player.line(target);
                                target.popup('放赈来源');
                                return '<center>你的下个弃牌阶段开始时,可以交给' + get.translation(target) + '一张牌<center>';
                            }
                        },
                        markcount: () => 0,
                    },
                    trigger: { player: 'phaseDiscardBegin' },
                    content() {
                        'step 0';
                        var fromer = player.storage[event.name];
                        if (fromer && fromer.isIn())
                            player
                                .chooseCard('〖放赈〗效果:你可以交给' + get.translation(fromer) + '一张牌', 'he')
                                .set('ai', (card) => {
                                    if (_status.event.give && get.position(card) == 'h') return 114 - get.useful(card);
                                    return 2 - get.useful(card);
                                })
                                .set('give', player.hasSkillTag('noh') || player.hasSkillTag('nokeep') || player.needsToDiscard());
                        else {
                            player.removeSkill(event.name);
                            event.finish();
                        }
                        ('step 1');
                        if (result.bool) {
                            var fromer = player.storage[event.name];
                            player.logSkill_qyhccl(['clanfangzhen', '放赈效果'], fromer);
                            player.give(result.cards, fromer);
                        }
                        player.removeSkill(event.name);
                    },
                    mark: true,
                }))(thisname);
                target.addSkill(thisname);
            },
            content() {
                'step 0';
                player
                    .chooseTarget('###〖放赈〗你可以连环一名角色###<center>你选择:1.其回复1点体力;2.你摸两张牌且交给其两张牌<br>其下个弃牌阶段开始时可以交给你一张牌</center>')
                    .set('ai', (target) => {
                        var player = _status.event.player;
                        if (target.isLinked()) return Math.max(get.effect(target, { name: 'wuzhong' }, player, player) + get.effect(player, { name: 'wuzhong' }, player, player) / 3, get.recoverEffect(target, player, player)) + get.effect(target, { name: 'tiesuo' }, player, player);
                        if (_status.event.goon && target != player) {
                            target.classList.add('linked');
                            target.classList.add('linked2');
                            try {
                                var cards = player.getCards('hs', (cardx) => {
                                    return cardx.name == 'sha' && lib.linked.includes(get.nature(cardx));
                                });
                                cards.map((i) => [i, get.effect(target, i, player, player)]);
                                cards.sort((a, b) => b[1] - a[1]);
                            } catch (e) {
                                target.classList.remove('linked');
                                target.classList.remove('linked2');
                            }
                            target.classList.remove('linked');
                            target.classList.remove('linked2');
                            var eff = cards[0][1];
                            if (eff > 0) return eff;
                            return Math.max(get.effect(target, { name: 'wuzhong' }, player, player) + get.effect(player, { name: 'wuzhong' }, player, player) / 3, get.recoverEffect(target, player, player));
                        }
                        return Math.max(get.effect(target, { name: 'wuzhong' }, player, player) + get.effect(player, { name: 'wuzhong' }, player, player) / 3, get.recoverEffect(target, player, player));
                    })
                    .set(
                        'goon',
                        player.countCards('hs', (card) => {
                            return card.name == 'jiu' && player.hasUseTarget(card);
                        }) &&
                        player.countCards('hs', (card) => {
                            return card.name == 'sha' && lib.linked.includes(get.nature(card));
                        })
                    );
                ('step 1');
                if (result.targets?.length) {
                    var target = result.targets[0];
                    event.target = target;
                    target.link();
                    if (target.isHealthy()) event._result = { index: 0 };
                    else {
                        if (player == target) var next = player.chooseControl(['摸两张牌', '回复1点体力']).set('prompt', '〖放赈〗请选择...');
                        else var next = player.chooseControl(['摸二给二', '令其回血']).set('prompt', '###〖放赈〗请选择...###<center>摸二给二:你摸两张牌,交给' + get.translation(target) + '两张牌<br>令其回血:令' + get.translation(target) + '回复1点体力</center>');
                        next.set('ai', () => {
                            var player = _status.event.player,
                                target = _status.event.parent.target;
                            if (!target.isDamaged()) return 0;
                            if (get.attitude(player, target) <= 0 && player.countCards('he', (card) => get.value(card) < 0) >= 2) return 0;
                            return get.effect(target, { name: 'wuzhong' }, player, player) + get.effect(player, { name: 'wuzhong' }, player, player) / 3 > get.recoverEffect(target, player, player) ? 0 : 1;
                        });
                    }
                } else event.finish();
                ('step 2');
                if (result.index) {
                    target.recover();
                    event.goto(5);
                } else {
                    player.draw(2);
                    if (player == target) event.goto(5);
                }
                ('step 3');
                player.chooseCard('〖放赈〗交给' + get.translation(target) + '两张牌', 'he', 2, true);
                ('step 4');
                if (result.bool) player.give(result.cards, target);
                ('step 5');
                if (player != target) lib.skill.clanfangzhen.addcreateSkill(target);
            },
            ai: {
                expose: 0.2,
            },
        };
        lib.skill.clanliuju = {
            audio: 2,
            trigger: { player: 'phaseUseEnd' },
            filter(event, player) {
                return game.hasPlayer((current) => player.canCompare(current));
            },
            forced: true,
            content() {
                'step 0';
                player
                    .chooseTarget('〖留驹〗你可以与一名角色拼点', '<center>输者可以使用任意张拼点牌,若输者如此做且:你与其或其与你的距离与输者选择使用牌前不同,你复原〖恤民〗;其以此法使用了非基本牌,你可以发动〖放赈〗</center>', (card, player, target) => {
                        return player.canCompare(target);
                    })
                    .set('ai', (target) => {
                        var player = _status.event.player;
                        var ts = target.getCards('h').sort((a, b) => a.number - b.number);
                        if (get.attitude(player, target) < 0) {
                            var hs = player.getCards('h').sort((a, b) => a.number - b.number);
                            if (!hs.length || !ts.length) return 0;
                            if (hs[0].number <= ts[0].number) return 1;
                            return Math.random() - 0.6;
                        }
                        return target.getUseValue(ts[0]) > 4;
                    });
                ('step 1');
                if (result.targets?.length) {
                    var target = result.targets[0];
                    event.target = target;
                    player.chooseToCompare(target).set('small', true);
                } else event.finish();
                ('step 2');
                if (!result.tie) {
                    var loser = result.bool ? target : player;
                    var cards = [];
                    game.getGlobalHistory('cardMove', (evt) => {
                        if (evt.getParent(2) == event)
                            cards.addArray(
                                evt.cards.filter((i) => {
                                    return get.position(i, true) == 'd';
                                })
                            );
                    });
                    event.loser = loser;
                    event.distance = [get.distance(player, target), get.distance(target, player)];
                    if (cards.length) event.cards = cards;
                    else event.finish();
                } else event.finish();
                ('step 3');
                var cardsx = cards.filter((i) => get.position(i, true) == 'd' && event.loser.hasUseTarget(i));
                if (!cardsx.length) event.goto(6);
                else if (cardsx.length > 1)
                    event.loser
                        .chooseButton(['〖留驹〗是否使用其中的一张牌？', cardsx])
                        .set('filterButton', (button) => {
                            return _status.event.player.hasUseTarget(button.link);
                        })
                        .set('ai', (button) => {
                            return _status.event.player.getUseValue(button.link) + 0.1;
                        });
                else if (event.loser.hasUseTarget(cardsx[0])) {
                    var card = cardsx[0];
                    event.cards.remove(card);
                    event.loser.chooseUseTarget(card, false).set('oncard', (card) => {
                        if (get.type(card) != 'basic') _status.event.getParent('clanliuju').cardnums = true;
                    });
                    event.goto(6);
                }
                ('step 4');
                if (result.links?.length) {
                    var card = result.links[0];
                    event.cards.remove(card);
                    event.loser.$gain2(card, false);
                    event.loser.chooseUseTarget(true, card, false).set('oncard', (card) => {
                        if (get.type(card) != 'basic') _status.event.getParent('clanliuju').cardnums = true;
                    });
                } else event.goto(6);
                ('step 5');
                if (cards.filter((i) => get.position(i, true) == 'd' && event.loser.hasUseTarget(i)).length) event.goto(3);
                ('step 6');
                if (!qyhcCL.ObjEqual([get.distance(player, target), get.distance(target, player)], event.distance)) player.restoreSkill('clanxumin');
                ('step 7');
                if (event.cardnums) player.useSkill('clanfangzhen');
            },
        };
    }
    if (lib.skill.zhujian) {
        lib.skill.zhujian = {
            audio: 2,
            enable: 'phaseUse',
            usable: 1,
            creatTrigger: true,
            content() {
                'step 0';
                var equips = [];
                for (var i = 1; i < 6; i++) if (lib.card['changandajian_equip' + i] && player.hasEmptySlot(i)) equips.push('changandajian_equip' + i);
                if (equips.length) player.equip(game.createCard2(equips.randomGet()));
                ('step 1');
                player
                    .chooseTarget(
                        '###〖筑舰〗请选择任意名装备区内有牌的角色###<center>这些角色各摸一张牌,你横置另一名角色</center>',
                        true,
                        function (event, player, target) {
                            return target.countCards('e');
                        },
                        [1, game.countPlayer((current) => current.countCards('e'))]
                    )
                    .set('ai', ai.drawEffect);
                ('step 2');
                if (result.bool) {
                    player.line(result.targets);
                    game.asyncDraw(result.targets);
                    event.targets = game.filterPlayer((current) => !result.targets.includes(current));
                } else event.finish();
                ('step 3');
                player
                    .chooseTarget('〖筑舰〗请横置其中一名角色', true, function (event, player, target) {
                        return _status.event.parent.targets.includes(target) && !target.isLinked();
                    })
                    .set('ai', function (target) {
                        return get.effect(target, { name: 'tiesuo' }, _status.event.player, _status.event.player);
                    });
                ('step 4');
                if (result.targets?.length) {
                    player.line(result.targets[0]);
                    result.targets[0].link(true);
                }
            },
            ai: {
                order: 8,
                result: { player: 1 },
            },
        };
        lib.skill.duansuo = {
            audio: 2,
            enable: 'phaseUse',
            usable: 1,
            creatTrigger: true,
            filterTarget(card, player, target) {
                return target.isLinked();
            },
            prompt: '重置任意名角色,视为对这些角色使用一张火【杀】',
            selectTarget() {
                return [1, game.countPlayer((current) => current.isLinked())];
            },
            multiline: true,
            multitarget: true,
            filter(event, player) {
                return game.countPlayer((current) => current.isLinked());
            },
            content() {
                'step 0';
                event.targets = targets.sortBySeat();
                for (var i of event.targets) i.link(false);
                ('step 1');
                var targets = targets.filter((i) => player.canUse({ name: 'sha', nature: 'fire' }, i, false));
                if (targets.length) player.useCard({ name: 'sha', nature: 'fire' }, targets).set('addCount', false);
            },
            ai: {
                order: 7.9,
                result: {
                    target(player, target) {
                        if (target.isLinked()) {
                            if (target.classList.contains('linked')) {
                                target.classList.remove('linked');
                                var linked = true;
                            }
                            if (target.classList.contains('linked2')) {
                                target.classList.remove('linked2');
                                var linked2 = true;
                            }
                            var effect1 = get.effect(target, { name: 'sha', nature: 'fire' }, player, target);
                            if (linked) target.classList.add('linked');
                            if (linked2) target.classList.add('linked2');
                            var effect2 = get.effect(target, { name: 'tiesuo' }, player, target);
                            return effect1 * 2 + effect2;
                        }
                        return get.effect(target, { name: 'sha', nature: 'fire' }, player, target);
                    },
                },
            },
        };
    }
    lib.characterPack.yijiang.guohuai = ['male', 'wei', 4, ['qyhc_jingce'], []];
    if (lib.config.characters.includes('yijiang')) lib.character.guohuai = ['male', 'wei', 4, ['qyhc_jingce'], []];
    return [lib, game, ui, get, ai, _status];
});
