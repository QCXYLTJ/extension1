import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
const dynamicTranslates = {
  hokshanezhenduan(player) {
    if (!player.storage.hokshanezhenduan) return `转换技,出牌阶段限一次,你可以令一名角色<span class="bluetext">减</span>/加1点体力上限直到其的下个回合开始并触发<span class="bluetext">【毒】</span>/【桃】.`;
    return `转换技,出牌阶段限一次,你可以令一名角色减/<span class="bluetext">加</span>1点体力上限直到其的下个回合开始并触发【毒】/<span class="bluetext">【桃】</span>.`;
  },
  hokzhanfangdaofeng(player) {
    if (player.storage.hokzhanfangdaofeng) return `转换技,每回合限一次,你可以将一张①红<span class="bluetext">②黑</span>色手牌当①火<span class="bluetext">②雷</span>【杀】使用;你视为拥有①<${HOK.skillTipsIndicate('hokkongliezhan')}>和<${HOK.skillTipsIndicate('hokxuanwuzhihua')}><span class="bluetext">②<${HOK.skillTipsIndicate('hokcangpozhan')}>和<${HOK.skillTipsIndicate('hokxunliezhihua')}></span>.`;
    return `转换技,每回合限一次,你可以将一张<span class="bluetext">①红</span>②黑色手牌当<span class="bluetext">①火</span>②雷【杀】使用;你视为拥有<span class="bluetext">①<${HOK.skillTipsIndicate('hokkongliezhan')}>和<${HOK.skillTipsIndicate('hokxuanwuzhihua')}></span>②<${HOK.skillTipsIndicate('hokcangpozhan')}>和<${HOK.skillTipsIndicate('hokxunliezhihua')}>.`;
  },
  hokchuanliubuxi(player) {
    const list = get.info('hokchuanliubuxi').getList(player);
    const description = [`<br>①其他角色失去至少两张牌后,你可与其各摸一张牌;`, `<br>②你可令其他角色将你的全部手牌当任意基本牌使用;`, `<br>③其他角色获得至少两张牌后,你可弃置其的一张牌;`, `<br>④其他角色可令你将其的全部手牌当任意锦囊牌使用.`];
    return `每次发动删除后一项描述,若为第一项,重置所有项.` + description.slice(0, list.length).join('');
  },
  hokjinghongdiao(player) {
    return ['韵律技,每回合限一次,你发动非韵律技后,若无濒死角色,你可令目标角色<span style=color: #87CEFA>受到1点伤害</span>/回复1点体力.转韵:每回合首次使用伤害或回复牌', '韵律技,每回合限一次,你发动非韵律技后,若无濒死角色,你可令目标角色受到1点伤害/<span style=color: #98ff98>回复1点体力</span>.转韵:每回合首次使用伤害或回复牌'][!player.storage.hokjinghongdiao ? 0 : 1];
  },
  hokxingyiliuhe(player) {
    if (player.storage.hokxingyiliuhe) return `转换技,每回合限一次,当你使用①基本<span class="bluetext">②锦囊</span>牌结算后,若此牌未造成伤害,你可以获得一张相同类型的牌;你视为拥有①<${HOK.skillTipsIndicate('hokchongquanshi')}>和<${HOK.skillTipsIndicate('hokqishoushi')}><span class="bluetext">②<${HOK.skillTipsIndicate('hokhuxiaoshi')}>和<${HOK.skillTipsIndicate('hokhuyueshi')}></span>.`;
    return `转换技,每回合限一次,当你使用<span class="bluetext">①基本</span>②锦囊牌结算后,若此牌未造成伤害,你可以获得一张相同类型的牌;你视为拥有<span class="bluetext">①<${HOK.skillTipsIndicate('hokchongquanshi')}>和<${HOK.skillTipsIndicate('hokqishoushi')}></span>②<${HOK.skillTipsIndicate('hokhuxiaoshi')}>和<${HOK.skillTipsIndicate('hokhuyueshi')}>.`;
  },
  hokfeigong(player) {
    const leval_num = player.getAllHistory('custom', (evt) => evt.hokfeigong).length;
    switch (leval_num) {
      case 0:
        return `出牌阶段限一次,你可以重铸两张牌.`;
      case 1:
        return `出牌阶段限一次,你可以重铸两张牌,本回合你使用牌的点数在这两张牌点数:之间,无次数限制.`;
      case 2:
        return `出牌阶段限一次,你可以重铸两张牌,本回合你使用牌的点数在这两张牌点数:之间,无次数限制;之外,无距离限制.`;
      default:
        return `出牌阶段限一次,你可以重铸两张牌,本回合你使用牌的点数在这两张牌点数:之间,无次数限制;之外,无距离限制.若与其一相等,你摸一张牌.`;
    }
  },
  hokzhuxing(player) {
    return ['每回合限一次,当你使用手牌结算后,你可以观看牌堆顶和牌堆底的三张牌并使用其中一张同类型牌', '每回合限一次,当你使用手牌结算后,你可以观看牌堆顶<del>和牌堆底</del>的三张牌并使用其中一张同类型牌'][player.hasSkill('hokzhuxing_effect') ? 0 : 1];
  },
  hokguichen(player) {
    return ['每轮限一次,当你使用或被使用即时牌时,你可以将此牌改为被使用的上或上上张即时牌.记录你每回合首次受到的伤害并于回合结束时结算', '每轮限一次,当你<del>使用或</del>被使用即时牌时,你可以将此牌改为被使用的上<del>或上上</del>张即时牌.记录你每回合首次受到的伤害并于回合结束时结算'][player.hasSkill('hokzhuxing_effect') ? 0 : 1];
  },
  hokshafuzhiyin(player) {
    return `每轮限一次,其他角色的回合开始时,你可以摸一张牌并与其拼点.若你没赢,你翻面,否则你可以重新指定${get.cnNumber(player.hasSkill('hokshafuzhiyin_rewrite') ? 2 : 1)}次其本回合使用牌的目标.`;
  },
  hokhuange(player) {
    if (player.storage.hokhuange) return `韵律技,出牌阶段限一次,你可以指定一名其他角色,当你与其下次不因此法摸牌<span class="bluetext">回复体力</span>后,可以令另一方如此做.转韵:你发动<逐浪>后.`;
    return `韵律技,出牌阶段限一次,你可以指定一名其他角色,当你与其下次不因此法<span class="bluetext">摸牌</span>回复体力后,可以令另一方如此做.转韵:你发动<逐浪>后.`;
  },
  hokmingyundongcha(player) {
    if (player.storage.hokmingyundongcha) return `转换技,其他角色令你①获得牌或你受到其造成的伤害<span class="bluetext">②回复体力或你对其造成伤害</span>后,你可以令其执行另一分支的一项.`;
    return `转换技,其他角色令你<span class="bluetext">①获得牌或你受到其造成的伤害</span>②回复体力或你对其造成伤害后,你可以令其执行另一分支的一项.`;
  }
};
export default dynamicTranslates;