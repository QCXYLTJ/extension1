import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
import { getCharacterSortImage } from '../precontent.js';
export let info = {
  name: 'dqzw_trashbin',
  connect: true,
  characterSort: {
    dqzw_trashbin: {
      rubbish_qunxiongzhulu: ['dqzw_rubbish_liuyan'],
      rubbish_langya_zhuge: ['dqzw_rubbish_clan_zhugeliang', 'dqzw_rubbish_clan_zhugedan', 'dqzw_rubbish_clan_zhugejin', 'dqzw_rubbish_clan_zhugezhan', 'dqzw_rubbish_clan_zhugeke', 'dqzw_rubbish_clan_zhugeguo'],
      rubbish_langya_wangshi: ['dqzw_rubbish_clan_wangxiang', 'dqzw_rubbish_clan_wangdun', 'dqzw_rubbish_clan_wangdao', 'dqzw_rubbish_clan_wangxizhi', 'dqzw_rubbish_clan_wanghuizhi', 'dqzw_rubbish_clan_wangningzhi', 'dqzw_rubbish_clan_wangyan', 'dqzw_rubbish_clan_wangxianzhi', 'dqzw_rubbish_clan_wangrong']
    }
  },
  characterTitle: {
    dqzw_rubbish_clan_zhugezhan: '临危不挠',
    dqzw_rubbish_clan_zhugeke: '白浪掀天',
    dqzw_rubbish_clan_wangxiang: '毗倚隆政',
    dqzw_rubbish_clan_wangdun: '蜂目豺声',
    dqzw_rubbish_clan_wangdao: '江左管夷',
    dqzw_rubbish_clan_wangxizhi: '凤阙亭歌 ',
    dqzw_rubbish_clan_wanghuizhi: '卓荦真我',
    dqzw_rubbish_clan_wangningzhi: '胡为泥中',
    dqzw_rubbish_clan_wangyan: '神锋太俊',
    dqzw_rubbish_clan_wangxianzhi: '河朔清憩',
    dqzw_rubbish_clan_wangrong: '孤渠清赏',
    dqzw_rubbish_clan_xiean: '东山潜鳞',
    dqzw_rubbish_clan_xiexuan: '趋川文虎',
    dqzw_rubbish_clan_xielingyun: '俞掠芙蕖',
    dqzw_rubbish_clan_xiedaoyun: '林泉贞蕤'
  },
  character: {
    dqzw_rubbish_clan_zhugeliang: ['male', 'shu', 3, ['dqzw_rubbish_zhimou', 'dqzw_guanxing', 'dqzw_rubbish_kanpo', 'dqzw_rubbish_bazhen'], ['clan:琅琊诸葛氏', 'character:jsrg_zhugeliang'], ['des:诸葛亮(181年－234年10月8日),字孔明,号卧龙(也作伏龙),汉族,徐州琅琊阳都(今山东临沂市沂南县)人,三国时期蜀汉丞相,杰出的政治家、军事家、散文家、书法家、发明家.在世时被封为武乡侯,死后追谥忠武侯,东晋政权因其军事才能特追封他为武兴王.其散文代表作有<出师表>、<诫子书>等.曾发明木牛流马、孔明灯等,并改造连弩,叫做诸葛连弩,可一弩十矢俱发.于建兴十二年(234年)在五丈原(今宝鸡岐山境内)逝世.刘禅追谥其为忠武侯,故后世常以武侯、诸葛武侯尊称诸葛亮.诸葛亮一生鞠躬尽瘁、死而后已,是中国传统文化中忠臣与智者的代表人物.']],
    dqzw_rubbish_clan_zhugezhan: ['male', 'shu', 3, ['dqzw_rubbish_zhimou', 'dqzw_rubbish_zuilun', 'dqzw_rubbish_fuyin'], ['clan:琅琊诸葛氏', 'character:zhugezhan'], ['des:诸葛瞻(227年-263年),字思远,琅琊郡阳都县(今山东省沂南县)人.三国时期蜀汉大臣,蜀汉丞相诸葛亮之子.']],
    dqzw_rubbish_clan_zhugeguo: ['female', 'shu', 3, ['dqzw_rubbish_zhimou', 'dqzw_rubbish_qixiang', 'dqzw_rubbish_yuhua'], ['clan:琅琊诸葛氏', 'character:tw_zhugeguo'], ['des:诸葛果,诸葛亮与黄月英的女儿.自小聪明绝顶,无所不通.诸葛果尤其擅长灵阵奇术,曾只身误闯入迷阵,却安然而出.诸葛果出生之时野外仙气飘渺,后她与父母同游山中道观时,曾引来百鹤围绕,与之共舞.传说诸葛果似乎能通灵禽之意.父母对诸葛果宠爱有加,力保其无忧无虑地成长,因而让她能全心全意地投入到自己的思考之中,始终保有纯真的天性.由于经常陷入自己的沉思之中,对周围事物常常表现出非常迟钝的反应.诸葛果所思考的范围不仅仅是这纷乱的三国乱世,更是苍穹之上,宇宙天空的奥秘.传说她在父母去世之后羽化登仙,乘云而去.']],
    dqzw_rubbish_clan_zhugeke: ['male', 'wu', 3, ['dqzw_rubbish_zhimou', 'dqzw_rubbish_aocai', 'dqzw_rubbish_duwu'], ['clan:琅琊诸葛氏', 'character:zhugeke'], ['des:诸葛恪(203－253年),字元逊,琅邪阳都(今山东沂南)人.他体格肥胖,是三国时期东吴权臣,蜀汉丞相诸葛亮之侄,大将军诸葛瑾长子.']],
    dqzw_rubbish_clan_zhugedan: ['male', 'wei', 4, ['dqzw_rubbish_zhimou', 'dqzw_rubbish_gongao', 'dqzw_rubbish_juyi', 'dqzw_rubbish_weizhong'], ['clan:琅琊诸葛氏', 'character:zhugedan'], ['des:诸葛诞(？～258年4月10日),字公休,琅琊郡阳都县(今山东省沂南县)人,西汉司隶校尉诸葛丰之后,诸葛亮族弟.三国时期曹魏将领.']],
    dqzw_rubbish_clan_zhugejin: ['male', 'wu', 3, ['dqzw_rubbish_zhimou', 'dqzw_rubbish_huanshi', 'dqzw_rubbish_hongyuan', 'dqzw_rubbish_mingzhe'], ['clan:琅琊诸葛氏', 'character:zhugejin'], ['des:诸葛瑾(174年~241年),字子瑜,琅琊阳都(今山东沂南)人.三国时期孙吴重臣,蜀汉丞相诸葛亮之兄,太傅诸葛恪之父.']],
    dqzw_rubbish_clan_wangxiang: ['male', 'jin', 3, ['dqzw_rubbish_bingxin', 'dqzw_rubbish_lanying'], ['clan:琅琊王氏', 'character:wangxiang'], ['des:王祥(184年,一作180年－268年4月30日),字休徵.琅邪临沂(今山东省临沂市西孝友村)人  .三国曹魏至西晋时大臣.']],
    dqzw_rubbish_clan_wangdun: ['male', 'jin', '4/5', ['dqzw_rubbish_hongzhi', 'dqzw_rubbish_lanying'], ['clan:琅琊王氏'], ['des:王敦(266年~324年),字处仲,琅琊临沂(今山东省临沂市)人.东晋时期大臣,晋武帝司马炎的女婿,治书侍御史王基的儿子.']],
    dqzw_rubbish_clan_wangxizhi: ['male', 'jin', 3, ['dqzw_rubbish_shangxu', 'dqzw_rubbish_qinxuan', 'dqzw_rubbish_lanying'], ['clan:琅琊王氏'], ['des:王羲之(303年—361年,一作321年—379年),字逸少,汉族,东晋时期著名书法家,有<书圣>之称.琅琊(今属山东临沂)人,后迁会稽山阴(今浙江绍兴),晚年隐居剡县金庭.']],
    dqzw_rubbish_clan_wanghuizhi: ['male', 'jin', 3, ['dqzw_rubbish_ranfeng', 'dqzw_rubbish_guixian', 'dqzw_rubbish_lanying'], ['clan:琅琊王氏'], ['des:王徽之(338年～386年),字子猷,琅琊郡临沂县(今山东省临沂市)人.东晋时期名士、书法家,右军将军王羲之(书圣)第五子.']],
    dqzw_rubbish_clan_wangningzhi: ['male', 'jin', '3/4', ['dqzw_rubbish_boyan', 'dqzw_rubbish_wangsu', 'dqzw_rubbish_lanying'], ['clan:琅琊王氏'], ['des:王凝之(334年～399年),字叔平,东晋时期大臣、书法家.<书圣>王羲之次子,才女谢道韫的丈夫,中书令王献之的兄长.']],
    dqzw_rubbish_clan_wangyan: ['male', 'jin', 3, ['dqzw_rubbish_taoyi', 'dqzw_rubbish_chonghua', 'dqzw_rubbish_lanying'], ['clan:琅琊王氏', 'character:wangyan'], ['des:王衍(256年～311年),字夷甫,琅邪郡临沂县(今山东郡临沂市)人.西晋末年重臣,著名的清谈家、思想家.名士王戎之弟,平北将军王义之子.']],
    dqzw_rubbish_clan_wangrong: ['male', 'jin', 3, ['dqzw_rubbish_suhui', 'dqzw_rubbish_qingtan', 'dqzw_rubbish_lanying'], ['clan:琅琊王氏']],
    dqzw_rubbish_liuyan: ['male', 'qun', 3, ['dqzw_rubbish_lietu', 'dqzw_rubbish_tumu'], ['character:liuyan']]
  },
  skill: {
    // 族诸葛亮
    dqzw_guanxing: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        player: 'phaseZhunbeiBegin'
      },
      filter(_event, player) {
        return player.countExpansions('dqzw_rubbish_zhimou') > 0;
      },
      forced: true,
      content() {
        'step 0';
        let next = player.chooseToMove('观星:是否交换[智]和手牌？');
        next.set('list', [
          [get.translation(player) + '(你)的[智]', player.getExpansions('dqzw_rubbish_zhimou')],
          ['你区域内的牌', player.getCards('hej')]]
        );
        next.set('filterMove', (_from, to) => typeof to != 'number');
        next.set('processAI', (list) => {
          let player = _status.event.player,
            cards = list[0][1].concat(list[1][1]).sort((a, b) => get.useful(a) - get.useful(b)),
            cards2 = cards.splice(0, player.getExpansions('dqzw_rubbish_zhimou').length);
          return [cards2, cards];
        });
        'step 1';
        if (result.moved) {
          let pushs = result.moved[0],
            gains = result.moved[1];
          pushs.removeArray(player.getExpansions('dqzw_rubbish_zhimou'));
          gains.removeArray(player.getCards('hejs'));
          if (!pushs.length || pushs.length != gains.length) return;
          lib.skill.dqzw_rubbish_zhimou.add(player, pushs);
          player.gain(gains, 'gain2');
        }
      }
    },
    dqzw_rubbish_kanpo: {
      audio: 'ext:大权在握/audio/skill:2',
      enable: 'phaseUse',
      usable: 1,
      filterTarget(_card, player, target) {
        return target != player && target.countCards('h');
      },
      content() {
        'step 0';
        let list = [];
        for (let suit of lib.suit) if (!player.getExpansions('dqzw_rubbish_zhimou').some((card) => card.suit == suit)) list.add(suit);
        player.choosePlayerCard(target, true, 'h', 'visible', '将' + get.translation(target) + '的一张手牌置入[智]' + (list.length ? '<br>缺少花色:' + get.translation(list) : ''), (button) => {
          let player = _status.event.player,
            val = get.value(button.link, _status.event.target);
          if (!player.getExpansions('dqzw_rubbish_zhimou').some((card) => card.suit == button.link.suit)) val += 10;
          return val;
        });
        'step 1';
        if (result.links?.length) {
          let link = result.links[0];
          if (!player.getExpansions('dqzw_rubbish_zhimou').some((card) => card.suit == link.suit)) {
            let count = player.getStat('triggerSkill'),
              stat = player.getStat().skill;
            if (count || stat) {
              if (count) count[event.name] = 0;
              if (stat) stat[event.name] = 0;
              game.log(player, '重置了', '#g【' + get.translation(event.name) + '】的使用次数');
            }
          }
          lib.skill.dqzw_rubbish_zhimou.add(player, result.links);
        }
      },
      ai: {
        order: 12,
        result: {
          player: 1,
          target(player, target, card) {
            return -target.countCards('h');
          }
        }
      }
    },
    dqzw_rubbish_bazhen: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        global: ['useCardAfter', 'respondAfter']
      },
      filter(event, player) {
        if (!Array.isArray(event.respondTo) || event.respondTo[0] == event.player || ![event.respondTo[0], event.player].includes(player)) return false;
        let cards = ((get.itemtype(event.respondTo[1]) == 'card' ? [event.respondTo[1]] : event.respondTo[1].cards ? event.respondTo[1].cards : 0) || []).filterInD('od');
        return (event.getParent(3).targets || []).length == 1;
      },
      forced: true,
      content() {
        'step 0';
        let cards = ((get.itemtype(trigger.respondTo[1]) == 'card' ? [trigger.respondTo[1]] : trigger.respondTo[1].cards ? trigger.respondTo[1].cards : 0) || []).filterInD('od');
        event.cards = cards;
        if (cards.length) {
          let next = player.chooseToMove('八阵:是否交换[智]和这些牌？');
          next.set('list', [
            [get.translation(player) + '(你)的[智]', player.getExpansions('dqzw_rubbish_zhimou')],
            ['响应的牌', cards]]
          );
          next.set('filterMove', (_from, to) => typeof to != 'number');
          next.set('processAI', (list) => {
            let player = _status.event.player,
              cards = list[0][1].concat(list[1][1]).sort((a, b) => get.useful(a) - get.useful(b)),
              cards2 = cards.splice(0, player.getExpansions('dqzw_rubbish_zhimou').length);
            return [cards2, cards];
          });
        } else event.finish();
        'step 1';
        if (result.moved) {
          let pushs = result.moved[0],
            replace = result.moved[1];
          pushs.removeArray(player.getExpansions('dqzw_rubbish_zhimou'));
          replace.removeArray(event.cards);
          if (!pushs.length || pushs.length != replace.length) return;
          if (get.itemtype(trigger.respondTo[1]) == 'card') trigger.respondTo[1] = replace[0]; else
            if (trigger.respondTo[1].cards) trigger.respondTo[1].cards = replace;
          player.lose(replace, 'visible', ui.ordering);
          lib.skill.dqzw_rubbish_zhimou.add(player, pushs);
        }
      }
    },
    // 族诸葛诞
    dqzw_rubbish_gongao: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        global: ['die', 'dyingAfter']
      },
      filter(event, player) {
        if (event.name == 'dying') return !event.player.isDying() && event.player != player && event.player.isAlive() && (player.countCards('he', { type: 'equip' }) > 0 || player.getExpansions('dqzw_rubbish_zhimou').length) && !player.getStorage('dqzw_rubbish_gongao').includes(event.player);
        return true;
      },
      forced: true,
      content() {
        'step 0';
        if (trigger.name == 'dying') {
          const cards = player.getCards('he', { type: 'equip' }).concat(player.getExpansions('dqzw_rubbish_zhimou'));
          if (cards[0]) {
            player.chooseButton(['功獒:弃置一张装备牌或[智],对' + get.translation(trigger.player) + '造成一点伤害', cards], true); //QQQ
          }
        } else {
          player.addMark(event.name + '_max', 2, false);
          player.addSkill(event.name + '_max');
          game.log(player, '的', '#g手牌上限+2');
        }
        'step 1';
        if (result.links && result.links.length) {
          player.loseToDiscardpile(result.links);
          player.markAuto(event.name, trigger.player);
          trigger.player.damage();
        }
      },
      subSkill: {
        max: {
          charlotte: true,
          mod: {
            maxHandcard(player, num) {
              let add = player.countMark('dqzw_rubbish_gongao_max');
              if (typeof add == 'number') return num + add;
            }
          },
          markimage: 'image/card/handcard.png',
          intro: {
            content(num, player) {
              let str = '<li>手牌上限';
              if (num >= 0) str += '+';
              str += num;
              return str;
            }
          }
        }
      }
    },
    dqzw_rubbish_juyi: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        player: 'phaseZhunbeiBegin'
      },
      filter: (_event, player) => player.getExpansions('dqzw_rubbish_zhimou').length,
      forced: true,
      content() {
        'step 0';
        player.chooseTarget(get.prompt2(event.name), [1, player.getExpansions('dqzw_rubbish_zhimou').length]);
        'step 1';
        if (result.targets && result.targets.length) {
          result.targets.forEach((target) => {
            event.insert(
              function () {
                'step 0';
                player.chooseButton(['获得一张[智]', target.getExpansions('dqzw_rubbish_zhimou')], true);
                'step 1';
                if (result.links && result.links.length) player.gain(result.links, 'gain2');
              },
              {
                player: target,
                target: player
              }
            );
          });
        }
        'step 2';
        if (result.targets && result.targets.length) player.draw(result.targets.length, 'nodelay');
      }
    },
    dqzw_rubbish_weizhong: {
      audio: 'ext:大权在握/audio/skill:2',
      global: 'dqzw_rubbish_weizhong_give',
      subSkill: {
        give: {
          enable: 'phaseUse',
          usable: 1,
          position: 'he',
          prompt: '将一张牌置于[智]内并摸一张牌',
          filterCard: true,
          lose: false,
          discard: false,
          forced: true,
          log: 'notarget',
          filterCard: true,
          get filterTarget() {
            if (_status.event.player && !_status.event.player.hasSkill('dqzw_rubbish_weizhong')) return (_card, _player, target) => target.hasSkill('dqzw_rubbish_weizhong');
            return (_card, player, target) => target == player;
          },
          get selectTarget() {
            if (!_status.event.player || _status.event.player.hasSkill('dqzw_rubbish_weizhong')) return -1;
          },
          check: (card) => 10 - get.value(card),
          content() {
            lib.skill.dqzw_rubbish_zhimou.add(target, cards);
            player.draw('nodelay');
          },
          ai: {
            order: 10,
            result: {
              player: 1,
              target: 1
            }
          }
        }
      }
    },
    // 族诸葛瑾
    dqzw_rubbish_huanshi: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        global: 'useCardToTarget'
      },
      filter(event, player) {
        return player.getExpansions('dqzw_rubbish_zhimou').length && get.distance(event.target, player) <= 1 && get.tag(event.card, 'damage');
      },
      usable: 1,
      forced: true,
      content() {
        'step 0';
        player.
          chooseButton([get.prompt2(event.name, trigger.target), player.getExpansions('dqzw_rubbish_zhimou')], (button) => {
            let player = _status.event.player,
              evt = _status.event._trigger;
            if (
              evt.targets && evt.targets.length > 1 ?
                !evt.targets.some((target) => {
                  let eff = get.effect(target, evt.card, evt.player, player);
                  return eff < 0 && eff < get.effect(evt.target, evt.card, evt.player, player);
                }) :
                get.effect(evt.target, evt.card, evt.player, player) < 0)

              return 100 - get.value(button.link);
            return 0;
          }).
          set('_trigger', trigger);
        'step 1';
        let count = player.getStat('triggerSkill');
        if (result.links && result.links.length) {
          let list = [];
          player.loseToDiscardpile(result.links);
          trigger.targets.remove(trigger.target);
          trigger.parent.triggeredTargets2.remove(trigger.target);
          trigger.untrigger();
          list.add(player, trigger.target);
          list.forEach((target) => {
            event.insert(
              function () {
                'step 0';
                player.chooseCard('缓释:是否重铸一张牌？', 'he').set('ai', (card) => 6 - get.value(card));
                'step 1';
                if (result.cards) player.recast(result.cards);
              },
              {
                player: target
              }
            );
          });
        } else if (count && count[event.name]) count[event.name] = 0;
      }
    },
    dqzw_rubbish_hongyuan: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        player: 'phaseZhunbeiBegin'
      },
      forced: true,
      content() {
        'step 0';
        player.chooseTarget(
          get.prompt2(event.name),
          [1, 2],
          () => true,
          (target) => {
            let player = _status.event.player,
              att = get.attitude(player, target),
              num = player.countCards('hej');
            if (!num || player.countCards('hej', (card) => get.value(card, player) < 1) == num) return -att;
            if (att < 0) return 0;
            if (target.countCards('j', (card) => get.effect(target, card, player, player) < 0)) return att + 100;
            if (player.countCards('hj')) return att + target.countCards('hej');
            return 0;
          }
        );
        'step 1';
        if (result.targets && result.targets.length) {
          result.targets.forEach((target) => {
            event.insert(
              function () {
                'step 0';
                player.gainPlayerCard(target, target != player ? 'hej' : 'ej', true);
                'step 1';
                player.choosePlayerCard(player, 'hej', [1, Infinity], true, '将自己区域内至少一张牌置入' + get.translation(target) + '的[智]');
                'step 2';
                if (result.links && result.links.length) lib.skill.dqzw_rubbish_zhimou.add(target, result.links);
              },
              {
                player: target,
                target: player
              }
            );
          });
        }
      }
    },
    dqzw_rubbish_mingzhe: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        player: ['phaseAfter', 'loseAfter'],
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter']
      },
      filter(event, player) {
        let evt;
        if (event.name == 'phase') return player.getHandcardLimit() - player.countCards('h') > 0;
        if (event.getl) evt = event.getl(player);
        return (
          (evt || event).cards &&
          (evt || event).cards.some((card) => {
            if (event.gaintag_map && Object.values(event.gaintag_map).some((tags) => tags.includes('dqzw_rubbish_zhimou'))) return true;
            return event.type != 'use' && !card.storage.dqzw_rubbish_zhimou && get.type2(card) == 'trick' && !(event.gaintag_map && event.gaintag_map[card.cardid] && event.gaintag_map[card.cardid].includes('dqzw_rubbish_zhimou'));
          }));

      },
      forced: true,
      content() {
        if (trigger.name == 'phase') {
          player.drawTo(player.getHandcardLimit());
        } else {
          let cards = trigger.cards;
          player.addSkill(event.name + '_max');
          if (trigger.getl) cards = trigger.getl(player).cards;
          if (trigger.gaintag_map && Object.values(trigger.gaintag_map).some((tags) => tags.includes('dqzw_rubbish_zhimou'))) {
            if (!player.storage[event.name + '_max']) player.storage[event.name + '_max'] = 0;
            player.storage[event.name + '_max']--;
            player.markSkill(event.name + '_max');
            game.log(player, '的', '<span style = "color: red;">手牌上限-1</span>');
          }
          if (cards.some((card) => trigger.type != 'use' && !card.storage.dqzw_rubbish_zhimou && get.type2(card) == 'trick' && !(event.gaintag_map && event.gaintag_map[card.cardid] && event.gaintag_map[card.cardid].includes('dqzw_rubbish_zhimou')))) {
            player.addMark(event.name + '_max', 1, false);
            game.log(player, '的', '#g手牌上限+1');
          }
        }
      },
      subSkill: {
        max: {
          charlotte: true,
          mod: {
            maxHandcard(player, num) {
              let add = player.countMark('dqzw_rubbish_mingzhe_max');
              if (typeof add == 'number') return num + add;
            }
          },
          markimage: 'image/card/handcard.png',
          intro: {
            content(num, player) {
              let str = '<li>手牌上限';
              if (num >= 0) str += '+';
              str += num;
              str += '<li>当前手牌上限';
              str += player.getHandcardLimit();
              return str;
            }
          }
        }
      }
    },
    // 临危不挠--族诸葛瞻
    //锁定技,①当你手牌数为全场最少时,你随机获得一张［智］.②弃牌阶段开始时,你须弃置一张牌跳过此阶段.③当你造成伤害时,若受伤角色手牌数大于［智］的数量则防止此次伤害并将其区域内的一张牌置于［智］内
    dqzw_rubbish_zuilun: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        player: ['phaseDiscardBegin', 'loseAfter'],
        global: ['gainAfter'],
        source: 'damageBegin4'
      },
      filter(event, player) {
        if (event.name == 'phaseDiscard') return player.countCards('he') > 0;
        if (event.name == 'damage') {
          return event.player.countCards('h') > player.getExpansions('dqzw_rubbish_zhimou').length && event.player.countCards('hej') > 0;
        }
        return player.isMinHandcard() && player.getExpansions('dqzw_rubbish_zhimou').length;
      },
      logTarget: (event) => event.name == 'damage' ? 'player' : void 0,
      forced: true,
      async content(event, trigger, player) {//QQQ
        if (trigger.name == 'damage') {
          trigger.cancel(); const {
            links } = await player.choosePlayerCard('hej', true, trigger.player, '将' + get.translation(trigger.player) + '区域内一张牌置入[智]').forResult();
          if (links && links.length) {
            lib.skill.dqzw_rubbish_zhimou.add(player, links);
            player.line(trigger.player);
          }
        } else
          if (trigger.name == 'phaseDiscard') {
            const {
              bool } = await player.chooseToDiscard('弃置一张牌并跳过此阶段', true).forResult();
            if (bool) {
              trigger.cancel();
            }
          } else {
            player.gain(player.getExpansions('dqzw_rubbish_zhimou').randomGet(), 'gain2');
          }
      }
    },
    dqzw_rubbish_fuyin: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        player: 'gainAfter',
        target: 'useCardToTargeted'
      },
      filter: (event, player) =>
        player.countCards('he') > 0 &&
        player.getExpansions('dqzw_rubbish_zhimou').some(
          (card) =>
            get.type2(card) == 'trick' &&
            player.hasUseTarget({
              name: card.name
            })
        ) &&
        !player.hasSkill('dqzw_rubbish_fuyin_used'),
      forced: true,
      content() {
        player.
          chooseToUse({
            norestore: true,
            logSkill: event.name,
            _skill: event.name + '_backup',
            _backupevent: event.name + '_backup',
            custom: {
              add: {},
              replace: {
                window: () => 0
              }
            }
          }).
          backup(event.name + '_backup');
      },
      subSkill: {
        backup: {
          chooseButton: {
            dialog: (event, player) =>
              ui.create.dialog(get.prompt2(event.logSkill), [
                [
                  ...new Set(
                    player.
                      getExpansions('dqzw_rubbish_zhimou').
                      filter((card) => get.type2(card) == 'trick').
                      map((card) => card.name)
                  )].

                  sort((a, b) => lib.inpile.indexOf(a) - lib.inpile.indexOf(b)).
                  map((name) => [get.type(name), '', name]),
                'vcard']
              ),
            filter: (button) => {
              let event = _status.event;
              event.custom.replace.confirm = (bool) => {
                if (bool === false) {
                  delete event.custom.replace.confirm;
                  event.parent.finish();
                  event.parent.step = 4;
                  ui.click.cancel();
                }
                if (bool === true) {
                  delete event.custom.replace.confirm;
                  ui.click.ok();
                }
              };
              return get.player().hasUseTarget({
                name: button.link[2]
              });
            },
            check: (button) =>
              get.player().getUseValue({
                name: button.link[2]
              }),
            backup: (links) => {
              return {
                popname: true,
                viewAs: {
                  name: links[0][2]
                },
                position: 'he',
                filterCard: true,
                onuse: (_result, player) => player.addTempSkill('dqzw_rubbish_fuyin_used', lib.phaseName)
              };
            },
            prompt: (links) => '将一张牌当【' + get.translation(links[0][2]) + '】使用'
          }
        },
        used: {
          charlotte: true
        }
      }
    },
    //当有牌销毁时,你随机获得一张装备牌.你可将装备牌当做以下牌名使用:【无懈可击】/【以逸待劳】/【借刀】每当使用一种牌名移除一种牌名.当所有牌名被移除时,回复所有牌名
    dqzw_rubbish_qixiang: {
      audio: 'ext:大权在握/audio/skill:2',
      enable: 'chooseToUse',
      filter(event, player) {
        var storage = player.getStorage('dqzw_rubbish_qixiang');
        return ['jiedao', 'wuxie', 'yiyi'].some((name) => !storage.includes(name) && player.hasCard((card) => get.type(card) == 'equip' && event.filterCard({ name: name }, player, event), 'hes'));
      },
      hiddenCard(player, name) {
        var storage = player.getStorage('dqzw_rubbish_qixiang');
        return ['jiedao', 'wuxie', 'yiyi'].includes(name) && !storage.includes(name) && player.countCards('hes', { type: 'equip' });
      },
      chooseButton: {
        dialog(event, player) {
          var storage = player.getStorage(event.result.skill);
          var dialog = ui.create.dialog(get.prompt(event.result.skill), 'hidden');
          dialog.add([['jiedao', 'wuxie', 'yiyi'].filter((name) => !storage.includes(name) && event.filterCard({ name: name }, player, event)), 'vcard']);
          dialog.direct = true;
          return dialog;
        },
        check(button) {
          return _status.event.player.getUseValue({ name: button.link[2] });
        },
        backup(links, player) {
          return {
            audio: 'dqzw_rubbish_qixiang',
            filterCard: { type: 'equip' },
            selectCard: 1,
            position: 'hes',
            check: (card) => 8 - get.value(card),
            viewAs: { name: links[0][2] },
            onuse(result, player) {
              lib.translate[result.skill] = '祈禳';
              var storage = player.getStorage('dqzw_rubbish_qixiang');
              if (storage.length == 2) {
                player.unmarkAuto('dqzw_rubbish_qixiang', storage);
              } else {
                player.markAuto('dqzw_rubbish_qixiang', [result.card.name]);
              }
            }
          };
        },
        prompt(links, player) {
          return '将一张装备牌当做【' + get.translation(links[0][2]) + '】使用';
        }
      },
      intro: {
        content(storage) {
          var list = ['jiedao', 'wuxie', 'yiyi'];
          return '已使用牌名:' + get.translation(storage.sort((a, b) => list.indexOf(a) - list.indexOf(b)));
        }
      },
      ai: {
        order: 1,
        result: {
          player: 1
        }
      },
      group: 'dqzw_rubbish_qixiang_gain',
      subSkill: {
        gain: {
          audio: 'dqzw_rubbish_qixiang',
          forced: true,
          trigger: {
            global: ['loseAfter', 'cardsGotoSpecialAfter']
          },
          filter(event, player, name) {
            if (name == 'cardsGotoSpecialAfter') return true;
            return event.cards?.some((card) => card.destroyed);
          }, //QQQ
          content() {
            var card = get.cardPile2((card) => get.type(card) == 'equip');
            if (card) player.gain(card, 'gain2');
          }
        }
      }
    },
    dqzw_rubbish_yuhua: {
      audio: 'ext:大权在握/audio/skill:2',
      forced: true,
      trigger: {
        player: 'phaseEnd'
      },
      filter(event, player) {
        return game.hasPlayer((target) => target.countCards('ej'));
      },
      content() {
        'step 0';
        player.
          chooseTarget(get.prompt(event.name), '令一名角色弃置场上的所有牌', function (card, player, target) {
            return target.countCards('ej');
          }).
          set('ai', function (target) {
            var att = get.attitude(_status.event.player, target);
            if (att < 0) att = -Math.sqrt(-att); else
              att = Math.sqrt(att);
            return (
              att *
              lib.card.guohe_copy.ai.result.target(_status.event.player, target, {
                name: 'guohe_copy',
                position: 'ej'
              }));

          });
        'step 1';
        if (result.bool) {
          var target = result.targets[0];
          var cards = target.getCards('ej');
          target.discard(cards, 'notBySelf');
          var num = new Set(cards.map((card) => card.suit)).size;
          if (player.hasAllHistory('custom', (evt) => evt.name == event.name && evt.target == target)) {
            event.finish();
          } else {
            player.chooseBool('羽化:是否令其选择其中一项执行', '摸牌/回复体力/增加体力上限(' + num + ')').set('ai', function (event, player) {
              return get.attitude(player, event.target);
            });
            event.target = target;
            event.num = num;
          }
        } else {
          event.finish();
        }
        'step 2';
        if (result.bool) {
          player.getHistory('custom').push({ name: event.name, target: target });
          target.chooseControlList('羽化:请选择一项', ['摸' + event.num + '张牌', '回复' + event.num + '点体力', '增加' + event.num + '点体力上限'], true).set('ai', function (event, player) {
            if (player.needsToDiscard() && player.isHealthy()) return 2;
            if (player.hp == 1 && player.maxHp > 2) return 1; else
              if (player.hp == 2 && player.maxHp > 2 && player.countCards('h') > 1) return 1; else
                return 0;
          });
        } else {
          event.finish();
        }
        'step 3';
        var keys = ['draw', 'recover', 'gainMaxHp'];
        target[keys[result.index]](event.num);
      }
    },
    // 白浪掀天--诸葛恪
    dqzw_rubbish_aocai: {
      audio: 'ext:大权在握/audio/skill:2',
      enable: 'chooseToUse',
      usable: 1,
      filter: (event, player) =>
        !player.hasSkill('dqzw_rubbish_aocai_used') && (
          event.filterCard ?
            lib.inpile.some(
              (name) =>
                get.type(name) != 'equip' &&
                event.filterCard(
                  {
                    name: name,
                    storage: {
                      dqzw_rubbish_aocai: true
                    },
                    cards: [ui.cardPile.children[0]]
                  },
                  player,
                  event
                )
            ) :
            true),
      hiddenCard: (player, name) => !player.hasSkill('dqzw_rubbish_aocai_used') && get.type(name) != 'equip' && lib.inpile.includes(name),
      chooseButton: {
        dialog(event, player) {
          let list = [];
          for (let name of lib.inpile) {
            if (get.type(name) == 'equip') continue;
            if (
              event.filterCard &&
              event.filterCard(
                {
                  name,
                  storage: {
                    dqzw_rubbish_aocai: true
                  },
                  cards: [ui.cardPile.children[0]]
                },
                player,
                event
              )) {
              list.push([get.type(name), '', name]);
              if (name == 'sha')
                for (let nature of lib.inpile_nature)
                  if (
                    event.filterCard &&
                    event.filterCard(
                      {
                        name,
                        nature,
                        storage: {
                          dqzw_rubbish_aocai: true
                        },
                        cards: [ui.cardPile.children[0]]
                      },
                      player,
                      event
                    ))

                    list.push([get.type(name), '', name, nature]);
            }
          }
          event._dqzw_rubbish_aocai_list = list;
          if (list.length > 1) return ui.create.dialog(get.prompt2('dqzw_rubbish_aocai'), [list, 'vcard']);
          if (list.length) return ui.create.dialog(get.prompt('dqzw_rubbish_aocai'), '将牌堆顶的一张牌当' + (list[0][3] ? get.translation(list[0][3]) : '') + '【' + get.translation(list[0][2]) + '】使用');
          return ui.create.dialog('无可用牌');
        },
        get chooseControl() {
          let event = _status.event,
            player = event.player;
          if (player && event._dqzw_rubbish_aocai_list && event._dqzw_rubbish_aocai_list.length == 1)
            return function () {
              return ['ok', 'cancel2'];
            };
        },
        check(button) {
          let evt = _status.event,
            event = evt.parent,
            ai = event.ai1 || event.ai,
            player = event.player,
            list = event._dqzw_rubbish_aocai_list || [],
            card = {
              name: button && button.link ? button.link[2] : list[0][2],
              nature: button && button.link ? button.link[3] : list[0][3],
              storage: {
                dqzw_rubbish_aocai: true
              },
              cards: [ui.cardPile.children[0]]
            };
          if (list.length > 1) return player.getUseValue(card) + (get.type(card) == 'trick' ? 8 : 0);
          _status.event = event;
          if (event.ai2 && event.filterTarget ? game.hasPlayer((target) => (event.filterTarget === true || event.filterTarget(card, player, target)) && event.ai2(target, card, player, player) > 0 && ai ? ai(card, player, event) : true) : ai && ai(card, player, event) > 0) {
            _status.event = evt;
            return 'ok';
          }
          _status.event = evt;
          return 'cancel2';
        },
        backup(links, player) {
          let event = _status.event,
            list = event._dqzw_rubbish_aocai_list;
          return {
            audio: 'dqzw_rubbish_aocai',
            viewAs: {
              name: list.length > 1 ? links[0][2] : list[0][2],
              nature: list.length > 1 ? links[0][3] : list[0][3],
              storage: {
                dqzw_rubbish_aocai: true
              },
              cards: [ui.cardPile.children[0]]
            },
            filterCard: () => false,
            selectCard: -1,
            popname: true,
            precontent() {
              let card = get.cards()[0];
              if (!card) {
                event.parent.finish();
                return;
              }
              player.showCards(card, get.translation('dqzw_rubbish_aocai'));
              event.result.cards = [card];
              player.addTempSkill('dqzw_rubbish_aocai_used', {
                player: 'gainBegin'
              });
              // 防止无中这种一直用
              player.
                when('useCardAfter').
                then(function () {
                  player.addTempSkill('dqzw_rubbish_aocai_used', {
                    player: 'gainBegin'
                  });
                }).
                filter((event) => event.card.storage && event.card.storage.dqzw_rubbish_aocai);
              player.getStat('triggerSkill').dqzw_rubbish_aocai = 1;
            }
          };
        },
        prompt: (links) => {
          let list = _status.event._dqzw_rubbish_aocai_list;
          if (!list || list.length > 1) list = links;
          return '将牌堆顶的一张牌当' + (list[0][3] ? get.translation(list[0][3]) : '') + '【' + get.translation(list[0][2]) + '】使用';
        }
      },
      ai: {
        order: 12,
        fireAttack: true,
        respondSha: true,
        respondShan: true,
        skillTagFilter: (player) => {
          if (!ui.cardPile.children.length || player.hasSkill('dqzw_rubbish_aocai_used')) return false;
        },
        result: {
          player: (player) => {
            if (_status.event.dying) return get.attitude(player, _status.event.dying);
            return 1;
          }
        }
      },
      subSkill: {
        backup: {},
        used: {
          charlotte: true
        }
      }
    },
    dqzw_rubbish_duwu: {
      audio: 'ext:大权在握/audio/skill:2',
      enable: 'phaseUse',
      getResetbleSkills(player, exec) {
        let skills = player.getStockSkills(true, true),
          resetSkills = [],
          suffixs = ['used', 'round', 'block', 'blocker'];
        for (let skill of skills) {
          let info = get.info(skill);
          if (typeof info.usable == 'number') {
            if (player.getStat('triggerSkill')[skill] && player.getStat('triggerSkill')[skill] >= 1) {
              if (exec) delete player.getStat('triggerSkill')[skill];
              resetSkills.add(skill);
            }
            if (typeof get.skillCount(skill, player) == 'number' && get.skillCount(skill) >= 1) {
              if (exec) delete player.getStat('skill')[skill];
              resetSkills.add(skill);
            }
          }
          if (info.round && player.storage[skill + '_roundcount']) {
            if (exec) delete player.storage[skill + '_roundcount'];
            resetSkills.add(skill);
          }
          if (player.awakenedSkills.includes(skill)) {
            if (exec) player.restoreSkill(skill);
            resetSkills.add(skill);
          }
          for (let suffix of suffixs)
            if (player.hasSkill(skill + '_' + suffix)) {
              if (exec) player.removeSkill(skill + '_' + suffix, true);
              resetSkills.add(skill);
            }
        }
        return resetSkills.length;
      },
      //出牌阶段,你可失去x点体力,重置你武将牌上的技能并获得一张［智］( X为本回合此技能发动次数)
      async content(event, trigger, player) {//QQQ
        let num = player.getHistory('useSkill', (evt) => evt.skill == event.name).length - 1;
        if (num > 0) player.loseHp(num);
        if (lib.skill.clanzhongliu) {
          const next = game.createEvent(`clanzhongliu`);
          next.player = player;
          next._trigger = trigger;
          await next.setContent(lib.skill.clanzhongliu.content);
        } else {
          let skills = lib.skill[event.name].getResetbleSkills(player, true);
          if (skills.length) game.log(player, '重置了技能', '#g' + skills.map((name) => '【' + get.translation(name) + '】').join('、'));
        }
        if (player.getExpansions('dqzw_rubbish_zhimou').length) {
          const {
            links } = await player.chooseButton(['智谋:请选择要获得的[智]', player.getExpansions('dqzw_rubbish_zhimou')], true, (button) => get.value(button.link)).forResult();
          if (links?.length) {
            player.gain(links, 'gain2');
          }
        }
      },
      ai: {
        order: 5,
        result: {
          player: (player) => {
            let skills = lib.skill.dqzw_rubbish_duwu.getResetbleSkills(player),
              num = player.getHistory('useSkill', (evt) => evt.skill == 'dqzw_rubbish_duwu').length - 1;
            if (num >= player.hp) return 0;
            if (
              num > skills.length &&
              get.effect(
                player,
                {
                  name: 'losehp'
                },
                player,
                player
              ) < 1)

              return 0;
            return 1;
          }
        }
      }
    },
    dqzw_rubbish_zhimou: {
      audio: 'ext:大权在握/audio/skill:2',
      audioname: ['dqzw_rubbish_clan_zhugeliang', 'dqzw_rubbish_clan_zhugedan', 'dqzw_rubbish_clan_zhugejin'],
      trigger: {
        player: ['phaseBegin', 'gainAfter'],
        global: 'useCardBegin'
      },
      clanSkill: true,
      forced: true,
      _priority: 5,
      gain(player, cards, log) {
        let list = [];
        for (let card of cards) {
          let cardx = game.createCard(card);
          cardx.storage.dqzw_rubbish_zhimou = true;
          list.push(cardx);
        }
        player.addToExpansion(list, player, 'gain2').gaintag.add('dqzw_rubbish_zhimou');
        if (log !== false) game.log(player, '将', cards, '的复制置入', '#g[智]');
      },
      add(player, cards, log) {
        player.addToExpansion(cards, player, 'gain2').gaintag.add('dqzw_rubbish_zhimou');
        if (log !== false) game.log(player, '将', cards, '置入', '#g[智]');
      },
      filter(event, player) {
        if (event.name == 'phase') return player.getExpansions('dqzw_rubbish_zhimou').length;
        if (event.name == 'gain') return event.cards && event.cards.some((card) => card.storage.dqzw_rubbish_zhimou);
        return event.player.hasClan('琅琊诸葛氏') && get.type(event.card) == 'trick' && get.itemtype(event.cards) == 'cards' && event.cards.some((card) => !card.storage.dqzw_rubbish_zhimou);
      },
      content() {
        'step 0';
        if (trigger.name == 'phase') {
          if (player.getExpansions('dqzw_rubbish_zhimou').length > 1) player.chooseButton(['智谋:请选择要获得的[智]', player.getExpansions('dqzw_rubbish_zhimou')], true, (button) => get.value(button.link)); else

            event._result = {
              links: player.getExpansions('dqzw_rubbish_zhimou')
            };
        } else
          if (trigger.name == 'gain') trigger.cards.filter((card) => card.storage.dqzw_rubbish_zhimou).forEach((card) => card.addGaintag('dqzw_rubbish_zhimou')); else {
            lib.skill[event.name].gain(
              player,
              trigger.cards.filter((card) => !card.storage.dqzw_rubbish_zhimou)
            );
            event.finish();
          }
        'step 1';
        if (result.links && result.links.length) {
          player.gain(result.links, 'gain2');
        }
      },
      marktext: '智',
      intro: {
        mark(dialog, _storage, player) {
          let content = player.getExpansions('dqzw_rubbish_zhimou');
          if (content.length) {
            let buttons = ui.create.div('.buttons.smallzoom');
            for (let card of content) {
              let button = ui.create.button(card, 'card', buttons);
              if (card.storage.dqzw_rubbish_zhimou) button.node.gaintag.innerHTML = '谋';
            }
            dialog.add(buttons);
          }
        },
        content: 'expansion',
        markcount: 'expansion',
        onunmark: 'expansion'
      },
      onremove(player, skill) {
        let cards = player.getExpansions(skill);
        if (cards.length) game.cardsGotoSpecial(cards);
      },
      group: 'dqzw_rubbish_zhimou_destroy',
      subSkill: {
        destroy: {
          trigger: {
            global: ['loseEnd', 'cardsDiscardEnd']
          },
          silent: true,
          forced: true,
          forceDie: true,
          forceOut: true,
          firstDo: true,
          charlotte: true,
          filter(event, player) {
            return event.getd().some((card) => card.storage.dqzw_rubbish_zhimou && get.position(card, true) == 'd');
          },
          content() {
            let cards = trigger.getd().filter((card) => card.storage.dqzw_rubbish_zhimou && get.position(card, true) == 'd');
            if (cards.length) {
              game.log(cards, '已被移出游戏');
              game.cardsGotoSpecial(cards);
            }
          }
        }
      }
    },
    // 毗倚隆政--族王祥
    dqzw_rubbish_bingxin: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        player: ['useCardBefore', 'respondBefore', 'useCardBegin']
      },
      filter(event, player, name) {
        if (name != 'useCardBegin' && (event.cards.length > 1 || event.card.storage.dqzw_rubbish_bingxin)) return false;
        if (name == 'useCardBegin' && (!game.hasPlayer((target) => !event.targets.includes(target) && target.countCards('h') <= event.cards.length && game.checkMod(event.card, player, target, 'unchanged', 'playerEnabled', player) != false && game.checkMod(event.card, player, target, 'unchanged', 'targetEnabled', target) != false) || !event.cards || !event.cards.length)) return false;
        if (name == 'useCardBegin' && event.card.storage.dqzw_rubbish_bingxin) return true;
        let map = {},
          cur = event.cards[0].suit;
        player.getCards('h', (card) => {
          let suit = card.suit;
          if (suit && suit != 'none') {
            if (!map[suit]) map[suit] = 1; else
              map[suit]++;
          }
        });
        if (!map[cur]) return;
        let max = true,
          min = true;
        for (let suit in map) {
          if (suit != cur && map[suit] >= map[cur]) max = false;
          if (suit != cur && map[suit] <= map[cur]) min = false;
        }
        if (name != 'useCard' && max && min) return;
        if (max && event.card.name == 'tao') return true;
        if (min && event.card.name == 'kaihua') return true;
      },
      forced: true,
      content() {
        'step 0';
        if (event.triggername != 'useCardBegin') {
          let suit = trigger.cards[0].suit;
          trigger.cards = player.getCards('h', { suit: suit });
          return;
        }
        player.
          chooseTarget(
            '###' + get.prompt(event.name) + '###令手牌数不大于' + get.cnNumber(trigger.cards.length, true) + '的角色成为' + get.translation(trigger.card) + '的额外目标',
            (_card, player, target) => !_status.event.targets.includes(target) && target.countCards('h') <= _status.event.num && lib.filter.filterTarget2(_status.event.card, player, target),
            (target) => {
              let player = _status.event.player;
              return get.effect(target, _status.event.card, player, player);
            }
          ).
          set('targets', trigger.targets).
          set('card', trigger.card).
          set('num', trigger.cards.length);
        'step 1';
        if (result.targets && result.targets.length) {
          trigger.targets.add(...result.targets);
          game.log(result.targets, '成为了', trigger.card, '的额外目标');
        }
      },
      group: 'dqzw_rubbish_bingxin_use',
      subSkill: {
        use_backup: {},
        use: {
          mod: {
            cardname(card, player) {
              let map = {},
                cur = card.suit;
              player.getCards('h', (card) => {
                let suit = card.suit;
                if (suit && suit != 'none') {
                  if (!map[suit]) map[suit] = 1; else
                    map[suit]++;
                }
              });
              if (!map[cur]) return;
              let max = true,
                min = true;
              for (let suit in map) {
                if (suit != cur && map[suit] >= map[cur]) max = false;
                if (suit != cur && map[suit] <= map[cur]) min = false;
              }
              if (min && max) return;
              if (min) return 'kaihua';
              if (max) return 'tao';
            },
            cardEnabled(card, player) {
              let suits = [];
              player.getCards('h', (card) => {
                let suit = card.suit;
                if (suit && suit != 'none') suits.add(suit);
              });
              if (suits.length == 1 && card.suit == suits[0] && !(card.storage && card.storage.dqzw_rubbish_bingxin)) return false;
            },
            cardUsable(card, player) {
              let suits = [];
              player.getCards('h', (card) => {
                let suit = card.suit;
                if (suit && suit != 'none') suits.add(suit);
              });
              if (suits.length == 1 && card.suit == suits[0] && !(card.storage && card.storage.dqzw_rubbish_bingxin)) return false;
            },
            cardRespondable(card, player) {
              let suits = [];
              player.getCards('h', (card) => {
                let suit = card.suit;
                if (suit && suit != 'none') suits.add(suit);
              });
              if (suits.length == 1 && card.suit == suits[0] && !(card.storage && card.storage.dqzw_rubbish_bingxin)) return false;
            },
            cardSavable(card, player) {
              let suits = [];
              player.getCards('h', (card) => {
                let suit = card.suit;
                if (suit && suit != 'none') suits.add(suit);
              });
              if (suits.length == 1 && card.suit == suits[0] && !(card.storage && card.storage.dqzw_rubbish_bingxin)) return false;
            }
          },
          get enable() {
            let player = _status.event.player;
            if (player) {
              let suits = [];
              player.getCards('h', (card) => {
                let suit = card.suit;
                if (suit && suit != 'none') suits.add(suit);
              });
              if (suits.length == 1) return ['chooseToUse', 'chooseToRespond'];
            }
          },
          get hiddenCard() {
            let player = _status.event.player;
            if (player) {
              let suits = [];
              player.getCards('h', (card) => {
                let suit = card.suit;
                if (suit && suit != 'none') suits.add(suit);
              });
              if (suits.length == 1) return (_player, name) => ['tao', 'kaihua'].includes(name);
            }
          },
          get filter() {
            let player = _status.event.player;
            if (player) {
              let suits = [];
              player.getCards('h', (card) => {
                let suit = card.suit;
                if (suit && suit != 'none') suits.add(suit);
              });
              if (suits.length == 1)
                return (event, player) =>
                  ['tao', 'kaihua'].some(
                    (name) =>
                      event.filterCard &&
                      event.filterCard(
                        {
                          name: name,
                          storage: {
                            dqzw_rubbish_bingxin: true
                          },
                          cards: player.getCards('h', { suit: suits[0] })
                        },
                        player,
                        event
                      )
                  );
            }
          },
          get chooseButton() {
            let player = _status.event.player;
            if (player) {
              let suits = [];
              player.getCards('h', (card) => {
                let suit = card.suit;
                if (suit && suit != 'none') suits.add(suit);
              });
              if (suits.length == 1)
                return {
                  dialog(event, player) {
                    return ui.create.dialog(get.translation('dqzw_rubbish_bingxin'), '将所有' + get.translation(suits[0]) + '牌当【桃】/【树上开花】' + event.name == 'chooseToUse' ? '使用' : '打出', [['tao', 'kaihua'].map((name) => [get.type(name), '', name]), 'vcard']);
                  },
                  filter: (button) => {
                    let event = _status.event.parent;
                    return (
                      event &&
                      event.filterCard &&
                      event.filterCard(
                        {
                          name: button.link[2],
                          storage: {
                            dqzw_rubbish_bingxin: true
                          },
                          cards: _status.event.player.getCards('h', {
                            suit: suits[0]
                          })
                        },
                        _status.event.player,
                        event
                      ));

                  },
                  check: (button) => {
                    let player = _status.event.player,
                      val = player.getUseValue({
                        name: button.link[2],
                        storage: {
                          dqzw_rubbish_bingxin: true
                        },
                        cards: player.getCards('h', { suit: suits[0] })
                      });
                    if (
                      player.getCards('h', { suit: suits[0] }).reduce((pre, cur) => {
                        return pre + get.value(cur);
                      }, 0) < val)

                      return val;
                    return 0;
                  },
                  backup(links, player) {
                    return {
                      audio: 'dqzw_rubbish_bingxin',
                      viewAs: {
                        name: links[0][2],
                        storage: {
                          dqzw_rubbish_bingxin: true
                        },
                        cards: player.getCards('h', { suit: suits[0] })
                      },
                      filterCard: { suit: suits[0] },
                      selectCard: -1,
                      popname: true
                    };
                  },
                  prompt: (links) => '选择【' + get.translation(links[0][2]) + '】的目标'
                };
            }
          },
          ai: {
            order: 1,
            save: true,
            result: {
              player: 1
            }
          }
        }
      }
    },
    // 蜂目豺声--族王敦
    dqzw_rubbish_hongzhi: {
      enable: 'chooseToUse',
      filter(event, player) {
        let list = [['zengbin']];
        if (player.countCards('h') > player.getHandcardLimit()) list.push(['sha', 'fire']);
        return (
          player.countCards('h') >= player.getHandcardLimit() &&
          list.some(
            (item) =>
              !player.getStat()['dqzw_rubbish_hongzhi_' + item[0]] &&
              !player.storage['dqzw_rubbish_hongzhi_' + item[0]] &&
              event.filterCard &&
              event.filterCard(
                {
                  name: item[0],
                  nature: item[1]
                },
                player,
                event
              )
          ));

      },
      position: 'hes',
      get viewAs() {
        let player = _status.event.player;
        if (player && player.countCards('h') > player.getHandcardLimit()) return;
        return { name: 'zengbin' };
      },
      get filterCard() {
        let player = _status.event.player;
        if (player && player.countCards('h') > player.getHandcardLimit()) return;
        return true;
      },
      selectCard() {
        let player = _status.event.player;
        if (player) return player.getHandcardLimit();
        return -1;
      },
      check: (card) => 6 - get.value(card),
      onuse(result, player) {
        player.getStat()['dqzw_rubbish_hongzhi_' + result.card.name] = true;
      },
      get chooseButton() {
        let player = _status.event.player;
        if (player && player.countCards('h') > player.getHandcardLimit())
          return {
            dialog(event, player) {
              return ui.create.dialog(get.translation('dqzw_rubbish_hongzhi'), '将' + get.cnNumber(player.getHandcardLimit()) + '张牌当【增兵减灶】使用或将' + get.cnNumber(player.countCards('h') - player.getHandcardLimit()) + '张牌当火【杀】使用', [[['zengbin'], ['sha', 'fire']].map((item) => [get.type(item[0]), '', item[0], item[1]]), 'vcard']);
            },
            filter: (button) => {
              let event = _status.event.parent,
                evt = _status.event;
              if (event.parent.name == 'dqzw_rubbish_hongzhi_phase')
                evt.custom.replace.confirm = (bool) => {
                  if (bool === false) {
                    delete evt.custom.replace.confirm;
                    evt.parent.finish();
                    evt.parent.step = 4;
                    ui.click.cancel();
                  }
                  if (bool === true) {
                    delete evt.custom.replace.confirm;
                    ui.click.ok();
                  }
                };
              return (
                event &&
                event.filterCard &&
                !player.getStat()['dqzw_rubbish_hongzhi_' + button.link[2]] &&
                !player.storage['dqzw_rubbish_hongzhi_' + button.link[2]] &&
                event.filterCard(
                  {
                    name: button.link[2],
                    nature: button.link[3]
                  },
                  player,
                  event
                ));

            },
            check: (button) => {
              let player = _status.event.player;
              return player.getUseValue({
                name: button.link[2],
                nature: button.link[3]
              });
            },
            backup(links, player) {
              let max = player.getHandcardLimit();
              return {
                audio: 'dqzw_rubbish_hongzhi',
                viewAs: {
                  name: links[0][2],
                  nature: links[0][3]
                },
                position: 'hes',
                check: (card) => (links[0][2] == 'sha' ? 5 : 6) - get.value(card),
                filterCard: true,
                selectCard: links[0][2] == 'sha' ? player.countCards('h') - max : max,
                popname: true,
                onuse(result, player) {
                  player.getStat()['dqzw_rubbish_hongzhi_' + result.card.name] = true;
                }
              };
            },
            prompt: (links) => '选择' + (links[0][3] ? get.translation(links[0][3]) : '') + '【' + get.translation(links[0][2]) + '】的目标'
          };
      },
      ai: {
        respondSha: true,
        result: {
          target: (target) => Math.max(1, 2 - target.countCards('h') / 10)
        }
      },
      group: 'dqzw_rubbish_hongzhi_phase',
      subSkill: {
        backup: {},
        phase: {
          trigger: {
            global: 'phaseAfter'
          },
          filter: (event, player) => event.player.countCards('h') > player.countCards('h'),
          forced: true,
          content() {
            'step 0';
            let evt = player.chooseToUse({
              prompt: get.prompt2('dqzw_rubbish_hongzhi'),
              norestore: true,
              logSkill: 'dqzw_rubbish_hongzhi',
              _backupevent: 'dqzw_rubbish_hongzhi',
              custom: {
                add: {},
                replace: {
                  window: () => 0
                }
              }
            });
            if (!lib.skill.dqzw_rubbish_hongzhi.filter(evt, player)) evt.finish();
            evt.backup('dqzw_rubbish_hongzhi');
            'step 1';
            if (result.bool) {
              player.storage['dqzw_rubbish_hongzhi_' + result.card.name] = true;
            }
          }
        }
      }
    },
    // 江左管夷--族王导
    dqzw_rubbish_xieluo: {
      trigger: {
        player: 'useCardToPlayered',
        target: 'useCardToTargeted'
      },
      filter: (event, player, name) => get.type2(event.card) == 'trick' && event.targets && event.targets.length && event.target == (name == 'useCardToPlayered' ? event.targets[0] : player),
      usable: 1,
      forced: true,
      content() {
        'step 0';
        let arr = [];
        game.filterPlayer((current) => {
          let num = current.countCards('h');
          if (!arr[num]) arr[num] = 1; else
            arr[num]++;
        });
        let clone = [...arr];
        clone.sort((a, b) => b - a);
        arr = Math.min(...arr.filter((num) => num == clone[0]).map((num) => arr.indexOf(num)));
        event.num = arr;
        player.
          chooseTarget(
            '###' + get.prompt(event.name) + '###令一名目标角色将手牌调整至' + get.cnNumber(arr) + '张' + (trigger.cards && trigger.cards.filterInD('o').length ? ',若其因此弃置了牌则其获得' + get.translation(trigger.cards.filterInD('o')) : ''),
            (_card, _player, target) => {
              let evt = _status.event.getTrigger();
              return evt.targets && evt.targets.includes(target) && target.countCards('h') != _status.event.num;
            },
            (target) => {
              let player = get.player(),
                num = _status.event.num,
                hs = target.getCards('h'),
                evt = _status.event.getTrigger(),
                cards = evt.cards.filterInD('o'),
                att = get.attitude(player, target);
              if (att > 0) {
                let discard = [];
                if (hs.length > num && hs.length - num <= cards.length && cards.every((card) => hs.some((cardx) => !discard.includes(cardx) && lib.filter.cardDiscardable(card, target, evt) && get.value(cardx, target) < get.value(card, target) && discard.push(cardx)))) return att - hs.length;
                if (hs.length < num) return att + hs.length - num;
              }
              if (att < 0) if (hs.length + 1 > num) return -att + hs.length - num;
              return 0;
            }
          ).
          set('num', arr);
        'step 1';
        let count = player.getStat('triggerSkill');
        if (result.targets && result.targets.length) {
          let target = result.targets[0],
            num = target.countCards('h');
          if (num > event.num) target.chooseToDiscard(num - event.num, true); else
            target.drawTo(event.num);
          event.target = target;
        } else if (count && count[event.name]) count[event.name] = 0;
        'step 2';
        let cards = trigger.cards && trigger.cards.filterInD('o');
        if (result.cards && result.cards.length && cards && cards.length && target) target.gain(cards, 'gain2');
      }
    },
    dqzw_rubbish_chegang: {
      trigger: {
        player: 'phaseJieshuBegin'
      },
      filter: () => game.hasPlayer((current) => current.countCards('h') > 0),
      forced: true,
      content() {
        'step 0';
        player.
          chooseTarget(get.prompt2(event.name), (_card, _player, target) => target.countCards('h') > 0).
          set('ai', (target) => {
            let player = _status.event.player,
              att = get.attitude(player, target);
            if (att > 0) return att + target.countCards('hs');
            return 0;
          });
        'step 1';
        if (result.targets && result.targets.length) {
          let target = result.targets[0];
          target.chooseToUse(get.translation(event.name) + ':使用一张手牌,' + (target == player ? '若指定了目标,则你摸一张牌' : '若指定了其他角色为目标则' + get.translation(player) + '摸一张牌,否则你摸一张牌'));
          event.target = target;
        }
        'step 2';
        if (result.card && result.targets && result.targets.length && target) {
          if (result.targets.some((current) => current != target)) player.draw('nodelay'); else
            target.draw('nodelay');
        }
      }
    },
    // 凤阙亭歌--王羲之
    dqzw_rubbish_shangxu: {
      audio: 'ext:大权在握/audio/skill:2',
      enable: 'phaseUse',
      usable: 1,
      filter: (_event, player) => player.countCards('hes', { type: 'basic' }),
      filterCard: { type: 'basic' },
      filterTarget(_card, player, target) {
        return ui.selected.targets.length ?
          lib.filter.filterTarget(
            {
              name: 'yiyi',
              storage: {
                dqzw_rubbish_shangxu: true
              }
            },
            player,
            target
          ) :
          target == player;
      },
      selectTarget: [1, 3],
      viewAs: {
        name: 'yiyi',
        storage: {
          dqzw_rubbish_shangxu: true
        }
      },
      onuse(result, player) {
        if (result.targets) for (let target of result.targets) target.addTempSkill('dqzw_rubbish_shangxu_ai');
      },
      group: 'dqzw_rubbish_shangxu_discard',
      subSkill: {
        ai: {
          trigger: {
            player: 'chooseToDiscardBefore'
          },
          filter: (event) => event.parent.name == 'yiyi' && event.parent.card.storage.dqzw_rubbish_shangxu,
          silent: true,
          firstDo: true,
          content() {
            trigger.ai = function (card) {
              let event = _status.event,
                player = event.player,
                num = get.unuseful.apply(this, arguments);
              if (card.suit == 'club' || card.name == 'jiu') return num + (!player.hasSkill('dqzw_rubbish_shangxu') ? 10 : get.type(card) == 'equip' ? 8 : 3.5);
              return num;
            };
            player.removeSkill(event.name, true);
          },
          charlotte: true
        },
        discard: {
          trigger: {
            player: 'useCardAfter'
          },
          filter: (event) => {
            return event.card && event.card.storage && event.card.storage.dqzw_rubbish_shangxu && event.targets && event.targets.length && event.targets.some((target) => target.getHistory('lose', (evt) => evt.type == 'discard' && evt.getParent(3).name == 'yiyi' && evt.getParent(3).card == event.card && evt.cards.some((card) => card.suit == 'club' || card.name == 'jiu')).length);
          },
          silent: true,
          content() {
            let targets = trigger.targets.filter((target) => target.getHistory('lose', (evt) => evt.type == 'discard' && evt.getParent(3).name == 'yiyi' && evt.getParent(3).card == trigger.card && evt.cards.some((card) => card.suit == 'club' || card.name == 'jiu')).length);
            for (let target of targets) {
              let cards = [];
              if (!target.hasSkill('dqzw_rubbish_shangxu')) target.addSkillLog('dqzw_rubbish_shangxu');
              target.getHistory('lose', (evt) => evt.type == 'discard' && evt.getParent(3).name == 'yiyi' && evt.getParent(3).card == trigger.card && cards.push(...evt.cards.filter((card) => card.suit == 'club' || card.name == 'jiu').filterInD('od')));
              for (let card of cards) target.chooseUseTarget(card);
            }
          }
        }
      }
    },
    dqzw_rubbish_qinxuan: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        global: 'useCardAfter'
      },
      filter: (event, player) => _status.currentPhase == player && get.color(event.card) == 'black' && !player.getStat().dqzw_rubbish_qinxuan_use,
      forced: true,
      content() {
        'step 0';
        player.chooseCardTarget({
          prompt: get.translation(event.name) + ':弃置一张牌令一名目标回复一点体力或取消并令' + get.translation(trigger.card) + '额外结算一次',
          position: 'he',
          filterCard: lib.filter.cardDiscardable,
          filterTarget(_card, _player, target) {
            return target.isDamaged() && _status.event.targets.includes(target);
          },
          ai1: (card) => 7 - get.value(card),
          ai2: (target) => {
            let player = _status.event.player;
            return get.recoverEffect(target, player, player);
          },
          targets: trigger.targets
        });
        player.getStat().dqzw_rubbish_qinxuan_use = true;
        'step 1';
        if (result.cards && result.targets && result.cards.length && result.targets.length) {
          player.discard(result.cards);
          result.targets[0].recover(player);
        } else {
          trigger.finished = false;
          trigger.effectCount++;
          trigger.goto(10);
        }
      }
    },
    // 卓荦真我--王徽之
    dqzw_rubbish_ranfeng: {
      enable: 'chooseToUse',
      filter(event, player) {
        let current = _status.currentPhase;
        if (!current || event.filterCard && !event.filterCard({ name: 'jiu' }, player, event) || player.getStat().dqzw_rubbish_ranfeng || current.countDiscardableCards(player, 'he') + player.countDiscardableCards(player, 'he') < 3) return false;
        return true;
      },
      chooseButton: {
        dialog(event, player) {
          let dialog = [],
            target = _status.currentPhase;
          dialog.push('然风:弃置' + (target == player ? '' : '你与' + get.translation(target) + '共计') + '三张牌并视为使用一张【酒】,因此弃置牌的角色摸等量的牌');
          if (player.countCards('h')) dialog.push(...['<div class = "text center">你的手牌</div>', player.getCards('h')]);
          if (player.countCards('e')) dialog.push(...['<div class = "text center">你的装备</div>', player.getCards('e')]);
          if (target != player) {
            if (target.countCards('h')) {
              dialog.push('<div class="text center">' + get.translation(target) + '的手牌</div>');
              if (player.hasSkillTag('viewHandcard', null, target, true)) dialog.push(target.getCards('h')); else
                dialog.push([target.getCards('h'), 'blank']);
            }
            if (target.countCards('e')) dialog.push(...['<div class="text center">' + get.translation(target) + '的装备</div>', target.getCards('e')]);
          }
          return ui.create.dialog(...dialog);
        },
        select: 3,
        forced: true,
        filter: (button) => lib.filter.canBeDiscarded(button.link, _status.event.player, get.owner(button.link)),
        check: (button) => {
          let player = _status.event.player,
            target = _status.currentPhase,
            att = get.attitude(player, target),
            card = button.link;
          if (att < 2 && get.owner(card) != player) return 0;
          return 6 - get.value(card);
        },
        backup(links, player) {
          let list1 = [],
            list2 = [],
            target = _status.currentPhase;
          for (let card of links) {
            if (get.owner(card) == player) list1.push(card); else
              list2.push(card);
          }
          game.
            loseAsync({
              lose_list: [
                [player, list1],
                [target, list2]],

              discarder: player
            }).
            setContent('discardMultiple');
          player.draw(list1.length, 'nodelay');
          target.draw(list2.length, 'nodelay');
          player.getStat().dqzw_rubbish_ranfeng = true;
          return {
            audio: true,
            viewAs: {
              name: 'jiu'
            },
            popname: true,
            filterCard: () => false,
            selectCard: -1
          };
        }
      },
      ai: {
        order: 8,
        save: true,
        result: {
          player: (player) => Number(player.getUseValue({ name: 'jiu' }) > 0)
        }
      }
    },
    dqzw_rubbish_guixian: {
      trigger: {
        player: 'phaseEnd'
      },
      filter(event, player) {
        let used = [];
        player.getHistory('useCard', (evt) => used.add(evt.card.name));
        return [...ui.discardPile.children].some((card) => !used.includes(card.name) && get.type(card) == 'basic' && player.hasUseTarget(card));
      },
      forced: true,
      content() {
        'step 0';
        let used = [],
          skill = ([player.name, player.name1, player.name2].includes('dqzw_rubbish_clan_wanghuizhi') ? lib.character.dqzw_rubbish_clan_wanghuizhi[3] : player.getSkills(true, false, false)).find((name) => lib.skill[name] && !lib.skill[name].limited);
        player.getHistory('useCard', (evt) => used.add(evt.card.name));
        player.chooseButton([get.translation(event.name) + ':使用一张基本牌' + (skill ? ',若未造成体力值变动则将『' + get.translation(skill) + '』改为限定技' : ''), [...ui.discardPile.children].filter((card) => !used.includes(card.name) && get.type(card) == 'basic' && player.hasUseTarget(card)).sort((a, b) => lib.inpile.indexOf(a.name) - lib.inpile.indexOf(b.name))], true, (button) => _status.event.player.getUseValue(button.link) + (get.tag(button.link, 'recover') || get.tag(button.link, 'damage')) ? 5 : -3);
        event.skill = skill;
        'step 1';
        if (result.links?.length) {
          player.chooseUseTarget(result.links[0], true);
          player.addTempSkill(event.name + '_change', 'changeHp');
        }
        'step 2';
        if (player.hasSkill(event.name + '_change')) {
          let info = get.info(event.skill),
            translate = lib.translate[event.skill + '_info'] || '';
          info.limited = true;
          info.dqzw_rubbish_guixian_change = true;
          if (!info.contentAfter)
            eval(`info.contentAfter = function () {
                                                player.awakenSkill('${event.skill}');
                                            };`);
          game.finishSkill(event.skill);
          if (!player.marks[event.skill]) player.markSkill(event.skill);
          if (!/限定技(,|,)/g.test(translate)) lib.translate[event.skill + '_info'] = '限定技' + (/^,|,/.test(translate) ? '' : ',') + translate;
          game.log('#g『' + get.translation(event.skill) + '』', '被改为', '#y限定技');
        }
      },
      global: 'dqzw_rubbish_ranfeng_awaken',
      subSkill: {
        awaken: {
          trigger: {
            player: 'logSkillBegin'
          },
          silent: true,
          forceDie: true,
          forceOut: true,
          forced: true,
          charlotte: true,
          firstDo: true,
          filter(event, player) {
            let info = get.info(event.skill);
            return info && info.limited && info.dqzw_rubbish_guixian_change;
          },
          content() {
            player.awakenSkill(trigger.skill);
          }
        },
        change: {
          charlotte: true
        }
      }
    },
    // 胡为泥中--王凝之
    dqzw_rubbish_boyan: {
      trigger: {
        player: ['recoverAfter', 'gainAfter']
      },
      filter(event, player) {
        let card = player.getCards('h').find((card) => card.suit != 'none');
        if (player.storage.dqzw_rubbish_boyan) return event.name != 'gain' && !player.isDamaged();
        return event.name == 'gain' && card && player.getCards('h').every((handcard) => handcard.suit == card.suit || handcard.suit == 'none');
      },
      zhuanhuanji: true,
      forced: true,
      _priority: 5,
      content() {
        player.changeZhuanhuanji(event.name);
        player.loseHp();
        player.draw(2, 'delay', 'bottom');
      },
      mark: true,
      marktext: '☯',
      intro: {
        content(storage) {
          let str = '';
          if (storage) str = '回复体力后,若你未受伤'; else
            str = '获得牌后,若你手牌花色唯一';
          return str + ',失去1点体力并从牌堆底摸两张牌';
        }
      }
    },
    dqzw_rubbish_wangsu: {
      trigger: {
        target: 'useCardToTargeted'
      },
      filter(event, player) {
        return event.targets && event.targets.length == 1 && event.card.name == 'sha' && player.isDamaged();
      },
      check(event, player) {
        if (get.attitude(player, event.player) > 1) return true;
        return (
          get.recoverEffect(player, player, player) >
          player.
            getCards('h').
            randomGets(2).
            reduce((pre, cur) => pre + player.getUseValue(cur), 0) /
          2);

      },
      logTarget: 'player',
      content() {
        'step 0';
        player.recover();
        trigger.player.chooseBool('是否' + ((trigger.cards || []).filterInD('od').length ? '将' + get.translation(trigger.cards.filterInD('od')) + '置于牌堆底并' : '') + '弃置' + get.translation(player) + '两张牌？').set('ai', () => {
          let player = _status.event.player,
            evt = _status.event.getTrigger(),
            target = evt.target;
          if (get.attitude(player, target) > 1) return false;
          return true;
        });
        'step 1';
        if (result.bool) {
          let cards = (trigger.cards || []).filterInD('od');
          if (cards.length) game.log(trigger.player, '将', cards, '置于', '#y牌堆底');
          while (cards.length) ui.cardPile.appendChild(cards.pop().fix());
          game.updateRoundNumber();
          trigger.player.discardPlayerCard(player, 2, true);
        }
      }
    },
    // 神锋太俊--王衍
    dqzw_rubbish_taoyi: {
      audio: 'ext:大权在握/audio/skill:2',
      trigger: {
        global: 'roundStart'
      },
      filter: (_event, player) =>
        player.hasUseTarget({
          name: 'shengdong'
        }),
      forced: true,
      content() {
        player.
          chooseUseTarget(
            {
              name: 'shengdong',
              storage: {
                dqzw_rubbish_taoyi: true
              }
            },
            get.prompt2(event.name)
          );
      },
      group: 'dqzw_rubbish_taoyi_use',
      subSkill: {
        use: {
          trigger: {
            player: 'useCardAfter'
          },
          filter: (event) => event.targets && event.targets.length && event.card.storage && event.card.storage.dqzw_rubbish_taoyi,
          silent: true,
          _priority: get.id(),
          content() {
            'step 0';
            let filter = (evt) => evt.type == 'gain' && evt.getParent(2).name == 'shengdong' && evt.getParent('dqzw_rubbish_taoyi').name == 'dqzw_rubbish_taoyi' && evt.getParent(2).card.storage && evt.getParent(2).card.storage.dqzw_rubbish_taoyi && (evt.parent.giver || evt.parent.source) && evt.parent.animate && evt.parent.animate.includes('give') && evt.cards && evt.cards.length && evt.cards.some((card) => get.owner(card) != (evt.parent.giver || evt.parent.source) && get.type(card) == 'trick' && lib.filter.filterTarget2(card, evt.parent.giver || evt.parent.source, player)),
              map = {};
            targets = trigger.targets.filter(
              (target) =>
                target.getHistory('lose', (evt) => {
                  if (filter(evt)) {
                    map[evt.player.playerid] = map[evt.player.playerid] || [];
                    map[evt.player.playerid].add(...evt.cards.filter((card) => get.owner(card) != (evt.parent.giver || evt.parent.source) && get.type(card) == 'trick' && lib.filter.filterTarget2(card, evt.parent.giver || evt.parent.source, player)).map((card) => card.name));
                    return true;
                  }
                }).length
            );
            for (target of targets)
              if (map[target.playerid] && map[target.playerid].length)
                event.insert(
                  function () {
                    'step 0';
                    target.classList.add('selected');
                    if (cards.length > 1)
                      player.
                        chooseButton(['是否视为' + (target != player ? '对' + get.translation(target) : '') + '使用以下一张牌？', [cards.map((item) => [get.type(item), '', item]), 'vcard']], (button) =>
                          get.effect(
                            _status.event.target,
                            {
                              name: button.link[2]
                            },
                            get.player(),
                            get.player()
                          )
                        ).
                        set('target', target); else

                      player.
                        chooseBool('是否视为' + (target != player ? '对' + get.translation(target) : '') + '使用' + get.translation(cards[0]) + '？').
                        set('ai', () => get.effect(_status.event.target, _status.event.card, get.player(), get.player()) > 0).
                        set('card', {
                          name: cards[0]
                        }).
                        set('target', target);
                    'step 1';
                    if (result.bool)
                      player.useCard(
                        {
                          name: result.links && result.links.length ? result.links[0][2] : cards[0]
                        },
                        target
                      );
                  },
                  {
                    cards: map[target.playerid],
                    target: player,
                    player: target
                  }
                );
          }
        }
      }
    },
    dqzw_rubbish_chonghua: {
      audio: 'ext:大权在握/audio/skill:2',
      enable: 'chooseToUse',
      filter(event, player) {
        return event.filterCard ?
          event.filterCard(
            {
              name: 'wuxie',
              storage: {
                dqzw_rubbish_chonghua: true
              }
            },
            player,
            event
          ) :
          true && player.countCards('h') < game.findPlayer((target) => target.isMaxHandcard()).countCards('h');
      },
      hiddenCard(player, name) {
        return name == 'wuxie' && player.countCards('h') < game.findPlayer((target) => target.isMaxHandcard()).countCards('h');
      },
      chooseButton: {
        dialog(_event, player) {
          let num = game.findPlayer((target) => target.isMaxHandcard()).countCards('h') - player.countCards('h');
          return ui.create.dialog('###是否' + (num > 0 ? '摸' + get.cnNumber(num) + '张牌并' : '') + '发动【' + get.skillTranslation('dqzw_rubbish_chonghua', player) + '】？###' + get.skillInfoTranslation('dqzw_rubbish_chonghua', player));
        },
        chooseControl: () => ['ok', 'cancel2'],
        check() {
          let num = game.findPlayer((target) => target.isMaxHandcard()).countCards('h'),
            player = get.player(),
            card = {
              name: 'wuxie',
              storage: {
                dqzw_rubbish_chonghua: true
              }
            },
            evt = _status.event,
            event = evt.parent,
            ai = event.ai1 || event.ai,
            dnum = num - player.countCards('h');
          if (dnum < player.countCards('h', { type: 'basic' }) || player.hp < 3 && dnum > 2) return 'cancel2';
          _status.event = event;
          if (event.ai2 && event.filterTarget ? game.hasPlayer((target) => (event.filterTarget === true || event.filterTarget(card, player, target)) && event.ai2(target, card, player, player) > 0 && ai ? ai(card, player, event) > 0 : true) : ai && ai(card, player, event) > 0) {
            _status.event = evt;
            return 'ok';
          }
          return 'cancel2';
        },
        backup(_result, player) {
          player.drawTo(game.findPlayer((target) => target.isMaxHandcard()).countCards('h'));
          return {
            audio: 'dqzw_rubbish_chonghua',
            viewAs: {
              name: 'wuxie',
              storage: {
                dqzw_rubbish_chonghua: true
              }
            },
            position: 'h',
            filterCard: { type: 'basic' },
            selectCard: -1,
            popname: true
          };
        }
      },
      ai: {
        order: 8,
        result: {
          player: 1
        }
      },
      group: 'dqzw_rubbish_chonghua_lose',
      subSkill: {
        lose: {
          trigger: {
            player: 'useCardAfter'
          },
          filter: (event) => event.card.storage && event.card.storage.dqzw_rubbish_chonghua,
          silent: true,
          _priority: get.id(),
          content() {
            'step 0';
            if (trigger.cards.length > 1)
              player.
                chooseControl('失去1点体力', '失去技能【' + get.skillTranslation('dqzw_rubbish_chonghua', player) + '】').
                set('prompt', get.skillTranslation('dqzw_rubbish_chonghua', player) + ':请选择一项').
                set('ai', () => {
                  let player = get.player();
                  if (get.effect(player, { name: 'losehp' }, player, player) > 0) return 0;
                  if (
                    player.hp < 2 &&
                    !game.hasPlayer(
                      (target) =>
                        get.attitude(target, player) > 0 && (
                          target.canSave(player) ||
                          target.countCards('hs', (card) => {
                            let info = get.info(card);
                            if (!info.singleCard) {
                              let mod = game.checkMod(card, target, player, 'unchanged', 'playerEnabled', target);
                              if (mod == false) return false;
                              mod = game.checkMod(card, target, player, 'unchanged', 'targetEnabled', player);
                              if (mod != 'unchanged') return mod;
                            }
                            return lib.filter.cardSavable(card, target, player);
                          }) > 0)
                    ))

                    return 1;
                  return 0;
                });
            'step 1';
            switch (result.index) {
              case 0:
                player.loseHp();
                break;
              case 1:
                player.removeSkill('dqzw_rubbish_chonghua', true);
                player.popup(get.skillTranslation('dqzw_rubbish_chonghua', player), 'fire');
                game.log(player, '失去了技能' + '<span style = "color: red;">' + '【' + get.skillTranslation('dqzw_rubbish_chonghua', player) + '】</span>');
            }
          }
        }
      }
    },
    // 河朔清憩--王献之
    dqzw_rubbish_ningshu: {
      mod: {
        ignoredHandcard(card, player) {
          if (!player.countCards('h', (cardx) => get.type(cardx) != get.type(card) && player.countCards('h', { type: get.type(cardx) }) >= player.countCards('h', { type: get.type(card) }))) return true;
        }
        /*cardDiscardable(card, player, name){
                                                    if (!player.countCards(                                'h', 
                                                        cardx => get.type(cardx) != get.type(card)
                                                          && player.countCards(                                    'h',
                                                            {type: get.type(cardx)}
                                                          ) >= player.countCards(                                    'h',
                                                            {type: get.type(card)}
                                                          )
                                                    ) && name == 'phaseDiscard') return false;
                                                },*/
      },
      trigger: {
        global: 'phaseJieshuBegin'
      },
      filter: (_event, player) => !player.getHistory('lose').length && [...new Set(player.getCards('h').map((card) => get.type(card)))].find((type) => !player.countCards('h', (cardx) => get.type(cardx) != type && player.countCards('h', { type: get.type(cardx) }) >= player.countCards('h', { type: type }))),
      prompt2(_event, player) {
        let type = [...new Set(player.getCards('h').map((card) => get.type(card)))].find((type) => !player.countCards('h', (cardx) => get.type(cardx) != type && player.countCards('h', { type: get.type(cardx) }) >= player.countCards('h', { type: type })));
        return '弃置所有' + get.translation(type) + '牌并摸两张牌';
      },
      check(_event, player) {
        let cards = player.getCards('h', {
          type: [...new Set(player.getCards('h').map((card) => get.type(card)))].find((type) => !player.countCards('h', (cardx) => get.type(cardx) != type && player.countCards('h', { type: get.type(cardx) }) >= player.countCards('h', { type: type })))
        });
        return cards.every((card) => get.value(card) < 7) || cards.length < 2 && !cards.some((card) => get.value(card) > 7);
      },
      content() {
        let cards = player.getCards('h', {
          type: [...new Set(player.getCards('h').map((card) => get.type(card)))].find((type) => !player.countCards('h', (cardx) => get.type(cardx) != type && player.countCards('h', { type: get.type(cardx) }) >= player.countCards('h', { type: type })))
        });
        if (cards.length) player.discard(cards);
        player.draw(2);
      }
    },
    dqzw_rubbish_junci: {
      trigger: {
        player: 'useCardToPlayered',
        target: 'useCardToTargeted'
      },
      filter: (event, player, name) => get.type(event.card) == 'basic' && (player.isDamaged() ? event.player.countCards('h') : event.targets && event.targets.some((target) => target.countCards('h'))) && event.target == (name == 'useCardToPlayered' ? event.targets[0] : player),
      forced: true,
      content() {
        'step 0';
        let target = event.target || (!player.isDamaged() && trigger.targets.length == 1 ? trigger.targets[0] : trigger.player),
          visible = target.isUnderControl() || player.hasSkillTag('viewHandcard', null, target, true) || target == player,
          dialog = [get.prompt2(event.name, target), visible ? target.getCards('h') : [target.getCards('h'), 'blank']];
        if (typeof event.videoId != 'number') event.videoId = lib.status.videoId++;
        if (!event.dialog && target.getCards('h') && !(!player.isDamaged() && trigger.targets.length != 1 && !event.target)) {
          if (player.isOnline2())
            player.send(
              (dialog, id) => {
                ui.create.dialog(...dialog).videoId = id;
              },
              dialog,
              event.videoId
            );
          event.dialog = ui.create.dialog(...dialog);
          event.dialog.videoId = event.videoId;
          if (!event.isMine()) event.dialog.style.display = 'none';
        }
        event._visible = visible;
        if (visible && !(!player.isDamaged() && trigger.targets.length != 1 && !event.target)) {
          event._result = {
            links: target.getCards('h'),
            bool: true
          };
          return;
        }
        if (player.isDamaged() || event.target || trigger.targets.length == 1) player.chooseButton([1, 2]).set('dialog', event.videoId); else

          player.
            chooseTarget(
              get.prompt2(event.name),
              (_card, _player, target) => _status.event.targets && _status.event.targets.includes(target) && target.countCards('h'),
              (target) => get.attitude(get.player(), target) < 0 ? -get.attitude(get.player(), target) + target.countCards('h') : 0
            ).
            set('targets', trigger.targets);
        'step 1';
        event._showCard = (result, id, target, visible) => {
          let dialog = get.idDialog(id);
          if (!dialog) return;
          dialog.content.children[1].textContent = (visible ? '' : get.translation(target) + '的' + get.cnNumber(result.links.length) + '张手牌,请') + '将其中一张牌置于牌堆顶';
          for (let button of dialog.buttons)
            if (result.links.includes(button.link)) {
              let card = ui.create.button(button.link, 'card');
              button.parentNode.replaceChild(card, button);
              dialog.buttons[dialog.buttons.indexOf(button)] = card;
            }
        };
        if (result.links && result.links.length) {
          let target = event.target || (!player.isDamaged() && trigger.targets.length == 1 ? trigger.targets[0] : trigger.player);
          if (player.isOnline2()) player.send(event._showCard, result, event.videoId, target, event._visible); else
            event._showCard(result, event.videoId, target, event._visible);
          player.
            chooseButton().
            set('dialog', event.videoId).
            set('links', result.links).
            set('filterButton', (button) => _status.event.links && _status.event.links.includes(button.link)).
            set('ai', (button) => {
              let current = _status.currentPhase,
                player = get.player(),
                target = _status.event.target;
              if (current && get.attitude(player, current.next) > 1) return get.buttonValue(button);
              if (get.attitude(player, target) > 1) return 6 - get.value(button.link, player);
              return 20 - get.value(button.link);
            }).
            set('target', target);
        } else if (result.targets && result.targets.length) {
          event.target = result.targets[0];
          event.goto(0);
        }
        event._result = {};
        'step 2';
        if (result.links && result.links.length) {
          (event.target || (!player.isDamaged() && trigger.targets.length == 1 ? trigger.targets[0] : trigger.player)).lose(result.links, ui.cardPile, 'insert');
          game.log(player, '将', result.links, '置于牌堆顶');
        }
        game.broadcastAll('closeDialog', event.videoId);
      }
    },
    // 孤渠清赏--王戎
    dqzw_rubbish_suhui: {
      trigger: {
        player: 'useCardToPlayered'
      },
      filter: (event, player) => get.type2(event.card) == 'trick' && event.targets && event.targets.length == 1 && (player.countCards('h') < player.maxHp || event.target.countCards('h') < event.target.maxHp),
      forced: true,
      usable: 1,
      content() {
        'step 0';
        let list = ['自己', '对方'];
        if (trigger.target.countCards('h') > trigger.target.maxHp) list.shift();
        if (player.countCards('h') > player.maxHp) list.pop();
        if (!list.length) return;
        trigger.target.
          chooseControl(...list.add('cancel2')).
          set('prompt', '###是否' + (trigger.player != player ? '令' + get.translation(player) : '') + '发动【' + get.skillTranslation(event.name, player) + '】？###' + '令自己或其用【<dqzw-tiptext text = "当此牌进入弃牌堆后,系统将此牌移出游戏.">影</dqzw-tiptext>】将手牌补至体力上限,若本回合没有角色弃置【影】则其失去1点体力.').
          set('ai', () => {
            let list = _status.event.controls,
              target = _status.event.target,
              player = get.player(),
              discarded = game.hasPlayer((target) => target.hasHistory('lose', (evt) => evt.type == 'discard' && evt.cards.some((card) => card.name == 'ying'))),
              att = get.attitude(player, target);
            if (list) {
              if (list.includes('自己') && (discarded || player.maxHp - player.countCards('h') > 2 && player.hp > 2)) return '自己';
              if (list.includes('对方') && att > 1 && (discarded || target == player && !target.isDamaged() || target.maxHp - target.countCards('h') > 2 && player.hp > 2)) return '对方';
            }
            return 'cancel2';
          }).
          set('target', player);
        'step 1';
        let count = player.getStat('triggerSkill');
        if (result.control != 'cancel2') {
          if (!lib.card.ying) {
            lib.card.ying = {
              audio: true,
              fullskin: true,
              type: 'basic',
              enable: false,
              getYing(count) {
                let cards = [];
                if (typeof count != 'number') count = 1;
                while (count-- > 0) cards.push(game.createCard('ying', 'spade', 1));
                return cards;
              },
              global: 'ying_destroy',
              ai: {
                basic: {
                  useful: 0,
                  value: 0
                }
              }
            };
            lib.translate.ying = '影';
            lib.translate.ying_info = '当此牌进入弃牌堆后,系统将此牌移出游戏.';
          }
          if (result.control == '自己') fill(trigger.target);
          if (result.control == '对方') fill(player);
          trigger.target.addTempSkill(event.name + '_loseHp', 'phaseAfter');
          function fill(target) {
            let num = target.maxHp - target.countCards('h'),
              cards = lib.card.ying.getYing(num);
            target.directgain(cards);
          }
        } else if (count && count[event.name]) count[event.name] = 0;
      },
      subSkill: {
        loseHp: {
          trigger: {
            global: 'phaseEnd'
          },
          filter: () => !game.hasPlayer((target) => target.hasHistory('lose', (evt) => evt.type == 'discard' && evt.cards.some((card) => card.name == 'ying'))),
          silent: true,
          firstDo: true,
          _priority: 20,
          content() {
            player.loseHp();
            player.removeSkill(event.name, true);
          }
        }
      }
    },
    dqzw_rubbish_qingtan: {
      trigger: {
        global: 'phaseJieshuBegin'
      },
      filter: (event, player) => event.player.countCards('h') <= player.countCards('h'),
      check(event, player) {
        return get.effect(
          event.player,
          {
            name: 'tuixinzhifu',
            storage: {
              dqzw_rubbish_qingtan: true
            }
          },
          player,
          player
        );
      },
      logTarget: 'player',
      content() {
        'step 0';
        player.useCard(
          {
            name: 'tuixinzhifu',
            storage: {
              dqzw_rubbish_qingtan: true
            }
          },
          trigger.player
        );
        'step 1';
        for (let target of game.players)
          if (target.hasHistory('lose', (evt) => evt.type == 'gain' && evt.getParent(2).name == 'tuixinzhifu' && evt.getParent(event.name).name == event.name && evt.getParent(2).card.storage && evt.getParent(2).card.storage.dqzw_rubbish_qingtan && (evt.parent.giver || evt.parent.source) && evt.parent.animate && evt.parent.animate.includes('give') && evt.cards && evt.cards.length && evt.cards.some((card) => get.owner(card) != (evt.parent.giver || evt.parent.source) && card.suit == 'spade'))) {
            player.line(target);
            target.draw('nodelay');
          }
      }
    },
    ying_destroy: {
      trigger: {
        global: ['loseEnd', 'cardsDiscardEnd']
      },
      silent: true,
      forced: true,
      forceDie: true,
      forceOut: true,
      firstDo: true,
      charlotte: true,
      filter: (event) => event.getd && event.getd().some((card) => card.name == 'ying'),
      content() {
        let cards = trigger.getd().filter((card) => card.name == 'ying');
        game.cardsGotoSpecial(cards);
        if (cards.length) game.log(cards, '被销毁了');
      }
    },
    dqzw_rubbish_lanying: {
      audio: 'ext:大权在握/audio/skill:2',
      audioname: ['dqzw_rubbish_clan_wangyan'],
      trigger: {
        player: 'loseAfter',
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter']
      },
      filter(event, player) {
        if (_status.currentPhase == player || player.hasSkill('dqzw_rubbish_lanying_round')) return false;
        let evt;
        if (event.getl) evt = event.getl(player);
        return (evt || event).hs && (evt || event).hs.some((card) => card.original == 'h');
      },
      clanSkill: true,
      silent: true,
      //usable: 1,
      content() {
        'step 0';
        let cards = trigger.hs,
          num,
          hp = player.getDamagedHp();
        if (trigger.getl) cards = trigger.getl(player).hs;
        num = cards.filter((card) => card.original == 'h').length;
        if (/^[1-3]$/.test(hp) && num >= hp) {
          let info = lib.translate.xinjujian_info;
          player.chooseTarget(
            '###' + get.prompt(event.name) + '###令一名同族角色执行『举荐』的第' + get.cnNumber(hp, true) + '项' + (info ? '-' + info.slice(info.indexOf(hp + '.') + 2, info.indexOf(hp > 2 ? '.' : ';', info.indexOf(hp + '.') + 2)) : ''),
            (_card, _player, target) => target.hasClan('琅琊王氏'),
            (target) => {
              let player = _status.event.player,
                att = get.attitude(player, target),
                hp = player.getDamagedHp();
              if (att > 0) {
                if (hp > 2 && target.isTurnedOver()) att += 3;
                if (hp == 2) {
                  if (hp == 1) att += 3;
                  if (!target.getDamagedHp()) att = 0;
                }
                if (hp == 1) return Math.max(1, att - target.countCards('h'));
              }
              return att;
            }
          );
        }
        'step 1';
        let list = ['draw_card', 'recover_hp', 'reset_character'];
        //, count = player.getStat('triggerSkill');
        if (result.targets && result.targets.length) {
          event.insert((lib.skill.xinjujian || {}).content || (() => { }), {
            target: result.targets[0],
            step: 2,
            _result: {
              control: list[player.getDamagedHp() - 1]
            }
          });
          player.addTempSkill(event.name + '_round', 'roundStart');
        }
        /*else if (count && count[event.name])
                                                  count[event.name] = 0;       */
      },
      subSkill: {
        round: {
          charlotte: true
        }
      }
    },
    dqzw_rubbish_lietu: {
      audio: 'ext:大权在握/audio/skill:2',
      forced: true,
      trigger: {
        source: 'damageSource',
        player: ['phaseBegin', 'damageEnd']
      },
      filter(event, player) {
        return game.hasPlayer((target) => target != _status.currentPhase && !target.hasSkill('undist'));
      },
      content() {
        'step 0';
        player.
          chooseTarget(get.prompt2(event.name), function (card, player, target) {
            return target != _status.currentPhase && !target.hasSkill('undist');
          }).
          set('ai', function (target) {
            return lib.card.diaohulishan.ai.result.player(get.player(), target);
          });
        'step 1';
        if (result.bool) {
          var current = result.targets[0];
          current.addTempSkill('dqzw_rubbish_lietu_undist');
          if (current == player) {
            current.setStorage('dqzw_rubbish_lietu_undist', true);
          }
        }
      },
      subSkill: {
        undist: {
          mod: {
            mod: {
              cardEnabled2(card, player) {
                if (player.hasStorage('dqzw_rubbish_lietu_undist', true) && get.position(card) == 'h') return false;
              }
            },
            charlotte: true,
            mark: true,
            intro: {
              content(storage) {
                return '本回合不计入距离' + (storage ? '<br>本回合不能使用或打出手牌' : '');
              }
            },
            group: 'undist',
            ai: {
              effect: {
                target(card, player, target) {
                  if (target.hasStorage('dqzw_rubbish_lietu_undist', true) && get.tag(card, 'damage')) return [0, -99999];
                }
              }
            }
          }
        }
      }
    },
    dqzw_rubbish_tumu: {
      audio: 'ext:大权在握/audio/skill:2',
      forced: true,
      trigger: {
        global: 'useCardAfter'
      },
      filter(event, player) {
        return get.type(event.card) == 'trick' && !game.hasGlobalHistory('changeHp', (evt) => evt.parent.name == 'damage' && evt.getParent(3) == event);
      },
      content() {
        'step 0';
        player.chooseControlList(get.prompt(event.name), ['令' + get.translation(_status.currentPhase) + '使用的下一张牌无距离与次数限制', '摸一张牌(至多摸至5张)']).set('ai', function (event, player) {
          var current = _status.currentPhase,
            trigger = event._trigger;
          if (current.hasSkill('dqzw_rubbish_tumu_effect')) return 1;
          var att = get.attitude(player, current);
          if (att > 0) {
            var num = 0;
            if (current == player) {
              if (
                player.hasCard(function (card) {
                  return ['basic', 'trick'].includes(get.type(card, 'trick')) && player.hasUseTarget(card, null, true) && get.effect(player, card, player) > 0 && player.getUseValue(card, null, true) > 0;
                }, 'hs'))

                return 0;
              return 1;
            }
            if (num > 2) return 1;
            var needs = current.countCards('h') - current.needsToDiscard();
            if (
              needs <=
              Math.max(
                Math.min(
                  2 + (current.hp <= 1 ? 1 : 0),
                  player.countCards('he', function (card) {
                    return get.value(card, player) < Math.max(5.5, 8 - needs);
                  })
                ),
                player.countCards('he', function (card) {
                  return get.value(card, player) <= 0;
                })
              ) &&
              get.damageEffect(current, player, player) > 0)

              return 0;
            if (!current.isPhaseUsing() || get.attitude(player, current) > 0) return 1;
            if (trigger.card.name == 'sha' && !current.getCardUsable('sha')) return 1;
            if (player.countCards('h') >= 5) return 0;
            return 1;
          }
          return 1;
        });
        'step 1';
        if (result.control && result.control != 'cancel2') {
          if (result.index) {
            player.draw(player.countCards('h') < 5 ? 1 : 0);
          } else {
            if (_status.currentPhase) _status.currentPhase.addTempSkill('dqzw_rubbish_tumu_effect');
          }
        }
      },
      subSkill: {
        effect: {
          mod: {
            cardUsable: () => Infinity,
            targetInRange: () => true
          },
          silent: true,
          firstDo: true,
          charlotte: true,
          trigger: {
            player: 'useCard1'
          },
          content() {
            if (trigger.addCount !== false) {
              trigger.addCount = false;
              player.getStat('card')[trigger.card.name]--;
            }
            player.removeSkill(event.name);
          },
          mark: true,
          intro: {
            content: '使用下一张牌无距离和次数限制'
          }
        }
      }
    }
  },
  translate: {
    rubbish_langya_zhuge: '琅琊·诸葛',
    rubbish_langya_wangshi: '琅琊·王氏',
    rubbish_qunxiongzhulu: '群雄逐鹿',
    // --琅琊·诸葛-- //
    dqzw_clan_zhugeliang: '族诸葛亮',
    dqzw_guanxing: '观星',
    dqzw_guanxing_info: '准备阶段,你可将你区域内的任意张牌与［智］等量交换',
    dqzw_kanpo: '看破',
    dqzw_kanpo_info: '出牌阶段限一次,你可观看一名角色的手牌并将其中一张牌置入［智］.若［智］当中的花色数因此变多,此技能视为未发动过.',
    dqzw_bazhen: '八阵',
    dqzw_bazhen_info: '当你响应其他角色使用的牌或你使用的牌被响应结算完成后,若响应的牌目标唯一,你可将响应牌的实体牌与［智］进行等量交换.',
    dqzw_clan_zhugedan: '族诸葛诞',
    dqzw_gongao: '功獒',
    dqzw_gongao_info: '锁定技,①一名角色死亡时,你增加两点手牌上限.②一名其他角色首次脱离濒死时,你须弃置一张装备牌或［智］对其造成一点伤害.',
    dqzw_juyi: '举义',
    dqzw_juyi_info: '准备阶段,你可令至多X名角色获得你的一张［智］,你摸等量的牌.( X为［智］的数量)',
    dqzw_weizhong: '威重',
    dqzw_weizhong_info: '每名角色的出牌阶段限一次,其可将一张牌放于你的［智］内其摸一张牌.',
    dqzw_clan_zhugejin: '族诸葛瑾',
    dqzw_huanshi: '缓释',
    dqzw_huanshi_info: '每回合限一次,与你距离为1的角色成为伤害牌目标时,你可弃置一张［智］取消之,若此做,你可与其分别重铸一张牌.',
    dqzw_hongyuan: '弘援',
    dqzw_hongyuan_info: '准备阶段开始时,你可令至多两名角色获得你区域内的一张牌并令其将区域内至少一张牌置入［智］.',
    dqzw_mingzhe: '明哲',
    dqzw_mingzhe_info: '锁定技,回合结束时,你将手牌补充至手牌上限.当你不因使用失去区域内的锦囊牌时,手牌上限+1.当你失去［智］内的牌时,手牌上限-1.',
    dqzw_clan_zhugezhan: '族诸葛瞻',
    dqzw_zuilun: '罪论',
    dqzw_zuilun_info: '锁定技,①当你手牌数为全场最少时,你随机获得一张［智］.②弃牌阶段开始时,你须弃置一张牌跳过此阶段.③当你造成伤害时,若受伤角色手牌数大于［智］的数量则防止此次伤害并将其区域内的一张牌置于［智］内.',
    dqzw_fuyin: '父荫',
    dqzw_fuyin_info: '每阶段限一次,当你获得牌或被一名角色使用牌指定结算后,你可将一张牌当做［智］内的锦囊牌使用',
    dqzw_clan_zhugeguo: '族诸葛果',
    dqzw_qixiang: '祈禳',
    dqzw_qixiang_info: '当有牌销毁时,你随机获得一张装备牌.你可将装备牌当做以下牌名使用:【无懈可击】/【以逸待劳】/【借刀】每当使用一种牌名移除一种牌名.当所有牌名被移除时,回复所有牌名',
    dqzw_yuhua: '羽化',
    dqzw_yuhua_info: '羽化:回合结束时,你可以令一名角色弃置其场上的所有牌,你可令其选择一项:1.摸X张牌2.回复X点体力3.增加X点体力上限(每名角色限一次).(X为弃置牌的花色数)',
    dqzw_clan_zhugeke: '族诸葛恪',
    dqzw_aocai: '傲才',
    dqzw_aocai_info: '每回合限一次,你可亮出牌堆顶的一张牌并当做任意非装备牌使用,若如此做则直到你下次获得牌时本技能失效.',
    dqzw_duwu: '黩武',
    dqzw_duwu_info: '出牌阶段,你可失去x点体力,重置你武将牌上的技能并获得一张［智］( X为本回合此技能发动次数).',
    dqzw_zhimou: '智谋',
    dqzw_zhimou_info: '宗族技,锁定技,当同族角色使用普通锦囊牌时,你将此牌所有实体牌复制一份置于你的武将牌上称为［智］.回合开始时,你获得一张［智］.因此法复制的牌不可再次复制且进入弃牌堆时销毁.',
    // --琅琊·王氏-- //
    dqzw_clan_wangxiang: '族王祥',
    dqzw_bingxin: '冰心',
    dqzw_bingxin_info: '你手牌中花色唯一最多/最少的牌视为【桃】/【树上开花】,若均满足则只可将之当【桃】或【树上开花】使用或打出,你使用以此法转化的牌时将与之同花色的手牌作为转化底牌一同使用且可额外指定一名手牌数不大于<dqzw-tiptext text = "转化前的卡牌">转化底牌</dqzw-tiptext>数的角色为目标.',
    dqzw_clan_wangdun: '族王敦',
    dqzw_hongzhi: '泓志',
    dqzw_hongzhi_info: '每回合各限一次,你可以:1.将手牌上限张牌当【增兵减灶】使用;2.将超出上限的手牌数张牌当火【杀】使用.手牌数大于你的角色的结束阶段,你可以执行并删除一项.',
    dqzw_clan_wangdao: '族王导',
    dqzw_xieluo: '协络',
    dqzw_xieluo_info: '每回合限一次,你指定或成为锦囊牌的目标后,可以令一名目标将手牌数调整为场上的最小众数,若其因此弃置了牌则其获得该锦囊牌.',
    dqzw_chegang: '掣纲',
    dqzw_chegang_info: '结束阶段,你可以令一名角色选择是否使用一张手牌;若其因此使用了牌且未指定其他角色,其摸一张牌,否则你摸一张牌.',
    dqzw_clan_wangxizhi: '族王羲之',
    dqzw_shangxu: '觞序',
    dqzw_shangxu_info: '出牌阶段限一次,你可以将一张基本牌当【以逸待劳】对包含你的至多三名角色使用,因此弃置了♧牌或【酒】的角色可以使用之并获得此技能.',
    dqzw_qinxuan: '沁玄',
    dqzw_qinxuan_info: '锁定技,一名角色于你回合内使用的首张黑色牌结算后,你须选择一项:1.令此牌再结算一次;2.弃置一张牌并令一名目标回复1点体力.',
    dqzw_clan_wanghuizhi: '族王徽之',
    dqzw_ranfeng: '然风',
    dqzw_ranfeng_info: '每回合限一次,你可以弃置你与当前回合角色的共计三张牌并视为使用一张【酒】,因此弃置牌的角色摸等量牌.',
    dqzw_guixian: '归弦',
    dqzw_guixian_info: '锁定技,回合结束时,你须从弃牌堆使用一张本回合未使用过的基本牌,若你因此使用了牌且未造成体力值变化,你将武将牌上首个非限定技改为限定技.',
    dqzw_clan_wangningzhi: '族王凝之',
    dqzw_boyan: '薄言',
    dqzw_boyan_info: '转换技,锁定技,你需于下述时机失去1点体力并从牌堆底摸两张牌:阳:你回复体力后,若你未受伤;阴:你获得牌后,若你手牌花色唯一.',
    dqzw_wangsu: '往愬',
    dqzw_wangsu_info: '你成为【杀】的唯一目标后,可以回复1点体力;使用者可以将此【杀】置于牌堆底并弃置你两张牌.',
    dqzw_clan_wangyan: '族王衍',
    dqzw_taoyi: '滔易',
    dqzw_taoyi_info: '轮次开始时,你可以视为使用【声东击西】.此牌结算后,目标可以视为对你使用因此被交出的一张普通锦囊牌.',
    dqzw_chonghua: '崇华',
    dqzw_chonghua_info: '你需要使用【无懈可击】时,可以将手牌数摸至场上最多,将手牌中所有基本牌当【无懈可击】使用;结算后若底牌数大于1,你需失去此技能或1点体力.',
    dqzw_clan_wangxianzhi: '族王献之',
    dqzw_ningshu: '宁树',
    dqzw_ningshu_info: '你手牌中唯一最多类型的牌不计入上限;你未失去过牌的回合结束时,可以弃置这些牌并摸两张牌.',
    dqzw_junci: '峻辞',
    dqzw_junci_info: '你指定或成为基本牌的目标后,若你已/未受伤,你可以观看使用者/一名目标的两张手牌并将其中一张置于牌堆顶.',
    dqzw_clan_wangrong: '族王戎',
    dqzw_suhui: '夙慧',
    dqzw_suhui_info: '每回合限一次,你使用锦囊牌指定唯一目标后,其可以令你或其将手牌用【<dqzw-tiptext text = "当此牌进入弃牌堆后,系统将此牌移出游戏.">影</dqzw-tiptext>】补至体力上限;本回合结束时,若没有角色弃置过【影】,其失去1点体力.',
    dqzw_qingtan: '卿谈',
    dqzw_qingtan_info: '手牌数不大于你的角色的结束阶段,你可以视为对其使用【推心置腹】,因此交出♤牌的角色摸一张牌. ',
    dqzw_lanying: '阑缨',
    dqzw_lanying_info: '宗族技,每轮限一次,你回合外一次性失去不少于X张手牌后,可以令一名同族角色执行『举荐』的第X项(X为你的已损失体力值).',
    dqzw_liuyan: '刘焉',
    dqzw_lietu: '裂土',
    dqzw_lietu_info: '回合开始时,你受到或造成伤害后,你可以令一名非当前回合角色本回合不计入距离的计算,若该角色是你,你本回合不能使用或打出手牌.',
    dqzw_tumu: '图牧',
    dqzw_tumu_info: '一张未造成过伤害的普通锦囊牌结算完成后,你可以选择一项:1.令当前回合角色使用的下一张牌无距离次数限制.2.摸一张牌.(至多摸至5张)'
  },
  custom: (info) => {
    let char = info.character,
      translate = info.translate;
    for (let name in translate)
      if (!name.startsWith('rubbish')) {
        translate[name.slice(0, 5) + 'rubbish_' + name.slice(5)] = translate[name];
        delete translate[name];
      }
    for (let name in char) {
      char[name][4] = char[name][4] || [];
      char[name][4].add('ext:大权在握/image/character/' + name.replace('rubbish_', '') + '.jpg', 'die:ext:大权在握/audio/die/' + name.replace('rubbish_', '') + '.mp3', 'win:ext:大权在握/audio/win/name', 'lose:ext:大权在握/audio/lose/name', 'tie:ext:大权在握/audio/tie/name');
    }
    for (let sort in info.characterSort.dqzw_trashbin) {
      info.translate[sort] = getCharacterSortImage(sort.replace('rubbish_', ''));
    }
    for (let name in info.skill) {
      name = name.replace('_rubbish', '');
      if (lib.skill[name]) {
        info.skill.audio = name;
      } //QQQ
    }
  }
};