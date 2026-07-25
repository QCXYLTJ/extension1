import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
const dynamicTranslate = {
  //——————————————————————————————————————————————————————BLEACH——————————————————————————————————————————————————————//
  //转换技
  bleach_lingbi(player) {
    if (player.storage.bleach_lingbi == true) return '转换技，阳：当一名你与其距离为1以内的角色受到伤害时，你可以重铸一张黑色牌，防止该伤害。<span class="bluetext">阴：当一名与你距离1以内的角色对其他角色造成伤害时，其可以令你选择是否重铸一张红色牌，令伤害值+1。</span>';
    return '转换技，<span class="bluetext">阳：当一名你与其距离为1以内的角色受到伤害时，你可以重铸一张黑色牌，防止该伤害。</span>阴：当一名与你距离1以内的角色对其他角色造成伤害时，其可以令你选择是否重铸一张红色牌，令伤害值+1。';
  },
  bleach_relingbi(player) {
    if (player.storage.bleach_relingbi == true) return '转换技，阳：当你受到伤害后，你可以摸两张牌或回复1点体力。<span class="bluetext">阴：当你造成伤害时，你可以重铸一张牌令伤害值+1；</span>你的攻击范围+1。';
    return '转换技，<span class="bluetext">阳：当你受到伤害后，你可以摸两张牌或回复1点体力。</span>阴：当你造成伤害时，你可以重铸一张牌令伤害值+1；你的攻击范围+1。';
  },
  bleach_rexunjie(player) {
    var str = '转换技，每回合限两次，当你使用或打出一张牌后，你可以：';
    if (!player.storage.bleach_rexunjie) str += '<span class="bluetext">阳：摸一张牌；</span>阴：弃置其他角色一张牌，你弃置一张牌，若此次弃置牌中包含2种颜色，你对一名其他角色造成1点伤害。';
    else str += '阳：摸一张牌；<span class="bluetext">阴：弃置其他角色一张牌，你弃置一张牌，若此次弃置牌中包含2种颜色，你对一名其他角色造成1点伤害。</span>';
    return str;
  },
  bleach_xuezhuang(player) {
    var str = '转换技，回合开始时，你可以摸一张牌，获得以下效果：';
    if (!player.storage.bleach_xuezhuang) str += '<span class="bluetext">你使用牌没有距离限制。</span>';
    else str += '<span class="bluetext">你每次至多受到1点伤害，你的手牌上限为体力上限。';
    return str;
  },
  burnthewitch_mozhen(player) {
    if (player.storage.burnthewitch_mozhen) return '转换技，阳：当你于一回合内失去第二张手牌时，你可以视为使用一张基本牌；<span class="bluetext">阴：当你使用与本回合上一张使用的牌颜色相同的手牌后，你可以摸一张牌或随机使用一张装备牌。</span>';
    return '转换技，<span class="bluetext">阳：当你于一回合内失去第二张手牌时，你可以视为使用一张基本牌；</span>阴：当你使用与本回合上一张使用的牌颜色相同的手牌后，你可以摸一张牌或随机使用一张装备牌。';
  },
  bleach_yinyi(player) {
    if (player.storage.bleach_yinyi) return '锁定技，转换技，阳：当你造成牌的伤害后；<span class="bluetext">阴：当你响应其他角色使用的牌后。</span>你获得该牌，并将一张牌置于武将牌上，称为「翼」。周始：你摸一张牌。';
    return '锁定技，转换技，<span class="bluetext">阳：当你造成牌的伤害后；</span>阴：当你响应其他角色使用的牌后。你获得该牌，并将一张牌置于武将牌上，称为「翼」。周始：你摸一张牌。';
  },
  //修改技
  bleach_wxxushan(player) {
    if (player.storage.bleach_qunlang_mark) return lib.translate.bleach_wxxushan1_info;
    return lib.translate.bleach_wxxushan_info;
  },
  bleach_zhouai(player) {
    var str = '出牌阶段，你可以声明一种伤害锦囊牌';
    if (!player.storage.bleach_sengjia) str += '<span class="hrefnode">并弃置一张非基本牌</span>';
    str += '，将一名其他角色的随机一张牌当声明牌视为由其使用，若目标与使用者相同或其未受到伤害，本回合本技能失效。';
    return str;
  },
  bleach_jianliu(player) {
    if (player.storage.bleach_jiejin) return lib.translate.bleach_jianliu1_info;
    return lib.translate.bleach_jianliu_info;
  },
  bleach_duanfeng(player) {
    if (player.storage.bleach_tiequan) return lib.translate.bleach_duanfeng1_info;
    return lib.translate.bleach_duanfeng_info;
  },
  bleach_lianfu(player) {
    var num = player.countMark('bleach_lianfu');
    var str = '当你使用牌指定其他角色为目标时，你可以摸一张牌执行并移除首项（若其为上次本技能的目标，额外执行前一项）：';
    var list = ['1.令其不能响应此牌；', '2.横置其；', '3.弃置其一张牌；', '4.对其造成1点火焰伤害。'];

    if (num > 0) str += '<span style="text-decoration: line-through;">';
    for (var i = 0; i < 4; i++) {
      str += list[i];
      if (i + 1 == num) {
        str += '</span>';
      }
    }
    return str;
  },
  bleach_tianding(player) {
    if (player.storage.bleach_tianding_mark) return lib.translate.bleach_tianding_info.replace(/-1/g, '-1<span style="text-decoration: line-through;">');
    return lib.translate.bleach_tianding_info;
  },
};
export default dynamicTranslate;
