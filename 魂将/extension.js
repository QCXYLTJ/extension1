import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
  return {
    name: '魂将',
    content(config, pack) {
      lib.group.add('hunjiangshili');
      lib.translate.hunjiangshili = '魂';
      lib.translate.hunjiangshili2 = '魂';
      lib.groupnature.hunjiangshili = 'hunjiangshili';
      get.drawcardPile = function (name) {
        var card;
        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
          card = ui.cardPile.childNodes[i];
          if (typeof name == 'string') {
            if (card.name == name) {
              return card;
            }
          } else if (typeof name == 'function') {
            if (name(card)) {
              return card;
            }
          }
        }
        return null;
      };
      if (lib.rank) {
        //精品(A)
        lib.rank.rarity.junk.addArray([]);
        //史诗(S)
        lib.rank.rarity.rare.addArray([]);
        //传说(SS)
        lib.rank.rarity.epic.addArray(['hj_jl_hundongzhuo', 'hj_jl_hunxunyu', 'hj_jl_hundianwei', 'hj_jl_hunxizhicai', 'hj_jl_hunxuchu', 'hj_jl_hunxiahoudun', 'hj_jl_hunzhangfei', 'hj_jl_hunmachao', 'hj_jl_hunganning', 'hj_jl_hunlvmeng', 'hj_jl_hunwuyi', 'hj_jl_hunzhanghegaolan', 'hj_jl_hunyanliangwenchou', 'hj_jl_hunsunshangxiang', 'hj_jl_hundiaochan', 'hj_jl_hunhuatuo', 'hj_jl_hunsimahui', 'hj_jl_hunzhenji', 'hj_jl_huncaiwenji', 'hj_jl_hun☆luxun', 'hj_jl_hun☆zhaoyun', 'hj_jl_hundaqiaoxiaoqiao', 'hj_jl_hun☆huatuo', 'hj_jl_hunxiaoqiao', 'hj_jl_hundaqiao', 'hj_bm_hunsunjian', 'hj_bm_huncaozhi', 'hj_bm_huncaoren', 'hj_bm_hunyujin', 'hj_bm_hundengai', 'hj_bm_hunguohuai', 'hj_bm_hunzhugedan', 'hj_bm_hunjiangwei', 'hj_bm_hunweiyan', 'hj_bm_hunhuangzhong', 'hj_bm_hunlusu', 'hj_bm_huntaishici', 'hj_bm_hunxusheng', 'hj_bm_hunlingtong', 'hj_bm_hunzhuran', 'hj_bm_hunmiheng', 'hj_bm_hunzhangxiu', 'hj_bm_hunzhangrang', 'hj_bm_hunyuejin', 'hj_bm_hunxuhuang', 'hj_bm_hunzhanghe', 'hj_bm_huncaochun']);
        //神话(SSS)
        lib.rank.rarity.legend.addArray(['hj_jl_huncaocao', 'hj_jl_hunhuangyueying', 'hj_jl_hunliubei', 'hj_jl_hun★lvbu', 'hj_jl_hunlvlingqi', 'hj_jl_hunsunquan', 'hj_jl_hunzhangjiao', 'hj_jl_hunlvbu', 'hj_jl_hunguojia', 'hj_jl_hunsimayi', 'hj_jl_hunzhangliao', 'hj_jl_hunguanyu', 'hj_jl_hunzhaoyun', 'hj_jl_hunzhugeliang', 'hj_jl_hunzhouyu', 'hj_jl_hunluxun', 'hj_jl_hunjiaxu', 'hj_jl_hun☆zhugeliang', 'hj_jl_hun☆lvbu', 'hj_bm_hunsunce', 'hj_bm_hunzhonghui', 'hj_bm_hunpangtong', 'hj_bm_hunzuoci', 'hj_bm_hunsunshangxiang', 'hj_bm_huncaoying']);
      }
    },
    precontent() {
      game.import('character', function (lib, game, ui, get, ai, _status) {
        var SSS = {
          name: '魂将',
          connect: true,
          character: {
            hj_bm_hunsunce: ['male', 'wu', '2/4', ['hj_bm_bawang', 'hj_bm_jiang', 'hj_bm_hunzi'], ['zhu']],
            hj_bm_hunsunjian: ['male', 'wu', '4/5', ['hj_bm_yinghun2', 'hj_bm_wulie', 'hj_bm_hunyou'], ['zhu']],
            hj_bm_huncaoren: ['male', 'wei', 4, ['hj_bm_jushou', 'hj_bm_lizhan'], []],
            hj_bm_huncaozhi: ['male', 'wei', '3/5', ['hj_bm_zuijiu', 'hj_bm_luohua', 'hj_bm_shifu'], []],
            hj_bm_huncaochun: ['male', 'wei', 4, ['hj_bm_xiaorui', 'hj_bm_shanjia'], []],
            hj_bm_huncaoying: ['female', 'wei', 4, ['hj_bm_lingren', 'hj_bm_fujian'], []],
            hj_bm_hunyujin: ['male', 'wei', 4, ['hj_bm_yizhong', 'hj_bm_zhenjun', 'hj_bm_jieyue'], []],
            hj_bm_hunzhanghe: ['male', 'wei', 4, ['hj_bm_yuanlue', 'hj_bm_mingzhu'], []],
            hj_bm_hunxuhuang: ['male', 'wei', 4, ['hj_bm_duzhan', 'hj_bm_jiezi'], []],
            hj_bm_hunyuejin: ['male', 'wei', 4, ['hj_bm_xiaoyong', 'hj_bm_cuorui'], []],
            hj_bm_hunzhonghui: ['male', 'wei', '4', ['hj_bm_quanji', 'hj_bm_paiyi', 'hj_bm_yexin'], []],
            hj_bm_hundengai: ['male', 'wei', '4', ['hj_bm_tuntian', 'hj_bm_zhenggong', 'hj_bm_jixi'], []],
            hj_bm_hunzhugedan: ['male', 'wei', 4, ['hj_bm_gongao', 'hj_bm_weizhong'], []],
            hj_bm_hunguohuai: ['male', 'wei', 5, ['hj_bm_jingce'], []],
            hj_bm_hunpangtong: ['male', 'shu', 3, ['hj_bm_xingkui', 'hj_bm_mingqi'], []],
            hj_bm_hunhuangzhong: ['male', 'shu', 4, ['hj_bm_pozhen', 'hj_bm_liegong'], []],
            hj_bm_hunweiyan: ['male', 'shu', 4, ['hj_bm_kuanglang', 'hj_bm_aogu'], []],
            hj_bm_hunjiangwei: ['male', 'shu', 4, ['hj_bm_tiaoxin', 'hj_bm_tianxing'], []],
            hj_bm_hunlusu: ['male', 'wu', 3, ['hj_bm_dewang', 'hj_bm_haoshi', 'hj_bm_dimeng'], []],
            hj_bm_huntaishici: ['male', 'wu', 4, ['hj_bm_yizhen', 'hj_bm_dulie'], []],
            hj_bm_hunxusheng: ['male', 'wu', 4, ['hj_bm_pojun', 'hj_bm_tiebi'], []],
            hj_bm_hunlingtong: ['male', 'wu', 4, ['hj_bm_xuanfeng', 'hj_bm_jiliu', 'hj_bm_yongjin'], []],
            hj_bm_hunzhuran: ['male', 'wu', 5, ['hj_bm_danshou'], []],
            hj_bm_hunsunshangxiang: ['female', 'wu', 3, ['hj_bm_xiaoji', 'hj_bm_jianwu', 'hj_bm_jianying', 'hj_bm_yujian'], []],
            hj_bm_hunzhangxiu: ['male', 'qun', 4, ['hj_bm_xiongluan', 'hj_bm_congjian'], []],
            hj_bm_hunzhangrang: ['male', 'qun', 5, ['hj_bm_luanzheng'], []],
            hj_bm_hunmiheng: ['male', 'qun', 4, ['hj_bm_kuangcai', 'hj_bm_shejian'], []],
            hj_bm_hunzuoci: ['male', 'qun', 4, ['hj_bm_huanhua', 'hj_bm_dunshu'], []],
            hj_jl_huncaocao: ['male', 'wei', 4, ['hj_jl_zhishi', 'hj_jl_zhaoxiang', 'hj_jl_guixin'], ['zhu']],
            hj_jl_hunliubei: ['male', 'shu', 4, ['hj_jl_junwang', 'hj_jl_jizhao', 'hj_jl_longnu'], ['zhu']],
            hj_jl_hunsunquan: ['male', 'wu', 5, ['hj_jl_huju', 'hj_jl_xionglve'], ['zhu']],
            hj_jl_hunzhangjiao: ['male', 'qun', 4, ['hj_jl_dianjie', 'hj_jl_shendao', 'hj_jl_leihun'], ['zhu']],
            hj_jl_hunguojia: ['male', 'wei', 3, ['hj_jl_tianji', 'hj_jl_tianqi', 'hj_jl_choumou', 'hj_jl_qizuo'], []],
            hj_jl_hunsimayi: ['male', 'wei', 3, ['hj_jl_guicai', 'hj_jl_jilve', 'hj_jl_zhuizun', 'hj_jl_tongtian'], []],
            hj_jl_hunxiahoudun: ['male', 'wei', 6, ['hj_jl_ganglie', 'hj_jl_danjing', 'hj_jl_zhonghun'], []],
            hj_jl_hunzhangliao: ['male', 'wei', 4, ['hj_jl_nizhan', 'hj_jl_wuwei', 'hj_jl_cuifeng', 'hj_jl_weizhen'], []],
            hj_jl_hundianwei: ['male', 'wei', 5, ['hj_jl_zhiji', 'hj_jl_baoyong', 'hj_jl_duoren'], []],
            hj_jl_hunguanyu: ['male', 'shu', 5, ['hj_jl_wushen', 'hj_jl_suohun', 'hj_jl_wuhun'], []],
            hj_jl_hunzhangfei: ['male', 'shu', 4, ['hj_jl_paoxiao', 'hj_jl_shayi', 'hj_jl_zhenhun'], []],
            hj_jl_hunzhugeliang: ['male', 'shu', 3, ['hj_jl_qixing', 'hj_jl_kuangfeng', 'hj_jl_dawu', 'hj_jl_weiwo'], []],
            hj_jl_hunzhaoyun: ['male', 'shu', 4, ['hj_jl_juejing', 'hj_jl_longying', 'hj_jl_longhun'], []],
            hj_jl_hunhuangyueying: ['female', 'shu', 3, ['hj_jl_zhiming', 'hj_jl_hemou', 'hj_jl_qicai', 'hj_jl_suyin'], []],
            hj_jl_hunzhouyu: ['male', 'wu', 4, ['hj_jl_yingcai', 'hj_jl_qinyin', 'hj_jl_yeyan'], []],
            hj_jl_hunlvmeng: ['male', 'wu', 4, ['hj_jl_shelie', 'hj_jl_gongxin', 'hj_jl_guoshi'], []],
            hj_jl_hunluxun: ['male', 'wu', 4, ['hj_jl_jieyan', 'hj_jl_fenying', 'hj_jl_lianying'], []],
            hj_jl_hunganning: ['male', 'wu', 5, ['hj_jl_youxia', 'hj_jl_lvezhen', 'hj_jl_youlong'], []],
            hj_jl_hunsunshangxiang: ['female', 'shu', 3, ['hj_jl_jieyin', 'hj_jl_yinmeng', 'hj_jl_xianzhu', 'hj_jl_liangyuan'], []],
            hj_jl_hunlvbu: ['male', 'qun', 5, ['hj_jl_kuangbao', 'hj_jl_wuqian', 'hj_jl_shenfen'], ['zhu']],
            hj_jl_hunjiaxu: ['male', 'qun', 3, ['hj_jl_yanmie', 'hj_jl_shunshi', 'hj_jl_weimu', 'hj_jl_luanwu'], []],
            hj_jl_hunsimahui: ['male', 'qun', 4, ['hj_jl_zhitian', 'hj_jl_yinshi'], []],
            hj_jl_hunhuatuo: ['male', 'qun', 3, ['hj_jl_xingyi', 'hj_jl_guagu', 'hj_jl_jishi', 'hj_jl_xuanxin'], []],
            hj_jl_hundiaochan: ['female', 'qun', 3, ['hj_jl_tianzi', 'hj_jl_manwu', 'hj_jl_meixin', 'hj_jl_baiyue'], []],
            hj_jl_hundongzhuo: ['male', 'qun', 5, ['hj_jl_baolian', 'hj_jl_baozheng', 'hj_jl_lingnu'], ['zhu']],
            hj_jl_hunxuchu: ['male', 'wei', 4, ['hj_jl_luoyi', 'hj_jl_aozhan', 'hj_jl_huxiao'], []],
            hj_jl_hunzhenji: ['female', 'wei', 3, ['hj_jl_luoshen', 'hj_jl_liuyun', 'hj_jl_lingbo', 'hj_jl_qingcheng'], []],
            hj_jl_hundaqiao: ['female', 'wu', 3, ['hj_jl_guose', 'hj_jl_fangxin', 'hj_jl_xiyu', 'hj_jl_wanrou'], []],
            hj_jl_hunmachao: ['male', 'shu', 4, ['hj_jl_qianqi', 'hj_jl_benxi', 'hj_jl_juechen'], []],
            'hj_jl_hun☆lvbu': ['male', 'qun', 4, ['hj_jl_luosha', 'hj_jl_shajue', 'hj_jl_guiqu'], []],
            'hj_jl_hun☆zhugeliang': ['male', 'shu', 7, ['hj_jl_yaozhi', 'hj_jl_xingyun'], []],
            hj_jl_hunxiaoqiao: ['female', 'wu', 3, ['hj_jl_tianxiang', 'hj_jl_jiaohua', 'hj_jl_piaoling', 'hj_jl_hongyan'], []],
            hj_jl_huncaiwenji: ['female', 'qun', 3, ['hj_jl_beige', 'hj_jl_chenqing', 'hj_jl_moshi'], []],
            hj_jl_hunxunyu: ['male', 'wei', 3, ['hj_jl_wangzuo', 'hj_jl_quhu', 'hj_jl_jieming', 'hj_jl_xianshi'], []],
            'hj_jl_hun★lvbu': ['male', 'qun', 4, ['hj_jl_zhanshen', 'hj_jl_wushuang', 'hj_jl_liqu'], []],
            hj_jl_hunzuoyou: ['female', 'qun', 5, ['hj_jl_youmei'], []],
            hj_jl_hunlvlingqi: ['female', 'qun', 4, ['hj_jl_jiwu', 'hj_jl_zhanmo', 'hj_jl_youlin'], []],
            hj_jl_hunwuyi: ['male', 'shu', 4, ['hj_jl_mashu', 'hj_jl_zhidi', 'xinbenxi'], []],
            'hj_jl_hun☆huatuo': ['male', 'qun', 4, ['hj_jl_yuanhua', 'hj_jl_guiyuan', 'hj_jl_chongsheng'], []],
            'hj_jl_hun☆luxun': ['male', 'wu', 4, ['hj_jl_dailao', 'hj_jl_youdi', 'hj_jl_ruya'], []],
            'hj_jl_hun☆zhaoyun': ['male', 'shu', 4, ['hj_jl_longdan', 'hj_jl_yajiao', 'hj_jl_chongzhen'], []],
            hj_jl_hunzhanghegaolan: ['male', 'qun', 4, ['hj_jl_shanlie', 'hj_jl_xiying', 'hj_jl_yingzhen'], []],
            hj_jl_hunyanliangwenchou: ['male', 'qun', 4, ['reshuangxiong', 'hj_jl_hubu', 'hj_jl_tanlang'], []],
            hj_jl_hundaqiaoxiaoqiao: ['female', 'wu', 4, ['hj_jl_guose', 'hj_jl_tianxiang', 'hj_jl_hongyan'], []],
            hj_jl_hunxizhicai: ['male', 'wei', 3, ['hj_jl_tiandu', 'hj_jl_tiance', 'hj_jl_jiexin', 'hj_jl_xianfu'], []],
          },
          skill: {
            hj_bm_bawang: {
              //霸王
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙策:2',
              trigger: {
                source: 'damageEnd',
              },
              forced: true,
              _priority: 100,
              content() {
                player.gainMaxHp(trigger.num);
              },
            },
            hj_bm_jiang: {
              //激昂
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙策:2',
              trigger: {
                global: ['useCard'],
              },
              filter(event, player) {
                if (!(event.card.name == 'juedou' || event.card.name == 'sha')) return false;
                return player == event.player || event.targets.includes(player);
              },
              forced: true,
              content() {
                var num = player.maxHp - player.hp;
                if (num > 0 && player.isMinHp()) {
                  player.draw(num);
                  if (num > player.hp) player.chooseToDiscard('he', true);
                } else {
                  player.draw();
                }
              },
              ai: {
                effect: {
                  target(card, player, target) {
                    if (card.name == 'sha' || card.name == 'juedou') return [1, 0.6];
                  },
                  player(card, player, target) {
                    if (card.name == 'sha' || card.name == 'juedou') return [1, 1];
                  },
                },
              },
            },
            hj_bm_zhiba: {
              //制霸
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙策:2',
              trigger: {
                player: 'useCardToBegin',
              },
              check(event, player) {
                return get.attitude(player, event.target) < 0;
              },
              filter(event, player) {
                return (event.card.name == 'sha' || event.card.name == 'juedou') && player.canCompare(event.target);
              },
              logTarget: 'target',
              content() {
                'step 0';
                player.chooseToCompare(trigger.target);
                ('step 1');
                if (result.bool) {
                  trigger.directHit = true;
                } else {
                  trigger.target.draw();
                }
              },
            },
            hj_bm_hunzi: {
              //魂姿
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙策:2',
              derivation: ['hj_bm_yinghun', 'hj_bm_yingzi', 'hj_bm_zhiba', 'hj_bm_yingyabg'],
              trigger: {
                player: 'changeHp',
              },
              filter(event, player) {
                return player.hp <= 1 && !player.storage.hj_bm_hunzi;
              },
              forced: true,
              content() {
                if (player.hp < 1) {
                  player.recover(1 - player.hp);
                }
                player.addSkill('hj_bm_yinghun');
                player.addSkill('hj_bm_yingzi');
                player.addSkill('hj_bm_zhiba');
                player.addSkill('hj_bm_yingyang');
                player.awakenSkill('hj_bm_hunzi');
                player.storage.hj_bm_hunzi = true;
              },
              ai: {
                threaten(player, target) {
                  if (target.hp == 1) return 2;
                  return 1;
                },
                maixie: true,
                effect: {
                  target(card, player, target) {
                    if (!target.hasFriend()) return;
                    if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                  },
                },
              },
            },
            hj_bm_yingyang: {
              //鹰扬
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙策:2',
              trigger: {
                player: 'compare',
                target: 'compare',
              },
              filter(event, player) {
                return !event.iwhile;
              },
              forced: true,
              content() {
                'step 0';
                var num1 = player.maxHp - player.hp;
                var num2 = player.maxHp + num1;
                event.num = num2;
                player
                  .chooseControl('点数+' + event.num, '点数-' + event.num, 'cancel2')
                  .set('prompt', get.prompt('hj_bm_yingyang'))
                  .set('ai', function () {
                    if (_status.event.small) return 1;
                    else return 0;
                  })
                  .set('small', trigger.small);
                ('step 1');
                if (result.index != 2) {
                  if (result.index == 0) {
                    player.popup('＋' + event.num);
                    game.log(player, '拼点牌点数+' + event.num);
                    if (player == trigger.player) {
                      trigger.num1 += event.num;
                    } else {
                      trigger.num2 += event.num;
                    }
                  } else {
                    player.popup('－' + event.num);
                    game.log(player, '拼点牌点数-' + event.num);
                    if (player == trigger.player) {
                      trigger.num1 -= event.num;
                    } else {
                      trigger.num2 -= event.num;
                    }
                  }
                }
              },
            },
            hj_bm_yingzi: {
              //英姿
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙策:2',
              trigger: {
                player: 'phaseDrawBegin',
              },
              forced: true,
              content() {
                trigger.num += player.maxHp - 2;
              },
              ai: {
                threaten: 1.5,
              },
              mod: {
                maxHandcard(player, num) {
                  var sun = player.maxHp - player.hp;
                  if (player.hp < player.maxHp) return (num = player.maxHp + sun);
                },
              },
            },
            hj_bm_yinghun: {
              //英魂
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙策:2',
              trigger: {
                player: 'phaseBegin',
              },
              filter(event, player) {
                return player.hp < player.maxHp;
              },
              forced: true,
              content() {
                'step 0';
                player
                  .chooseTarget(get.prompt('hj_bm_yinghun'), function (card, player, target) {
                    return player != target;
                  })
                  .set('ai', function (target) {
                    var player = _status.event.player;
                    if (player.maxHp - player.hp == 1 && target.countCards('he') == 0) {
                      return 0;
                    }
                    if (get.attitude(_status.event.player, target) > 0) {
                      return 10 + get.attitude(_status.event.player, target);
                    }
                    if (player.maxHp - player.hp == 1) {
                      return -1;
                    }
                    return 1;
                  });
                ('step 1');
                if (result.bool) {
                  event.num = player.maxHp - player.hp;
                  if (player.countCards('e') >= player.hp) {
                    event.num = player.maxHp;
                  }
                  event.target = result.targets[0];
                  if (event.num == 1) {
                    event.directcontrol = true;
                  } else {
                    var str1 = '摸' + get.cnNumber(event.num, true) + '弃一';
                    var str2 = '摸一弃' + get.cnNumber(event.num, true);
                    player
                      .chooseControl(str1, str2, function (event, player) {
                        return _status.event.choice;
                      })
                      .set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                    event.str = str1;
                  }
                } else {
                  event.finish();
                }
                ('step 2');
                if (event.directcontrol || result.control == event.str) {
                  event.target.draw(event.num);
                  event.target.chooseToDiscard(true, 'he');
                } else {
                  event.target.draw();
                  event.target.chooseToDiscard(event.num, true, 'he');
                }
              },
              ai: {
                threaten(player, target) {
                  if (target.hp == 1 || target.countCards('e') >= target.hp) return 2;
                  if (target.hp == target.maxHp) return 0.5;
                  if (target.hp == 2) return 1.5;
                  return 0.5;
                },
                maixie: true,
                effect: {
                  target(card, player, target) {
                    if (target.maxHp <= 3) return;
                    if (get.tag(card, 'damage')) {
                      if (target.hp == target.maxHp) return [0, 1];
                    }
                    if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                  },
                },
              },
            },
            hj_bm_yinghun2: {
              //英魂
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙坚:2',
              trigger: {
                player: 'phaseBegin',
              },
              filter(event, player) {
                return player.hp < player.maxHp;
              },
              forced: true,
              content() {
                'step 0';
                player
                  .chooseTarget(get.prompt('hj_bm_yinghun2'), function (card, player, target) {
                    return player != target;
                  })
                  .set('ai', function (target) {
                    var player = _status.event.player;
                    if (player.maxHp - player.hp == 1 && target.countCards('he') == 0) {
                      return 0;
                    }
                    if (get.attitude(_status.event.player, target) > 0) {
                      return 10 + get.attitude(_status.event.player, target);
                    }
                    if (player.maxHp - player.hp == 1) {
                      return -1;
                    }
                    return 1;
                  });
                ('step 1');
                if (result.bool) {
                  event.num = player.maxHp - player.hp;
                  if (player.countCards('e') >= player.hp) {
                    event.num = player.maxHp;
                  }
                  event.target = result.targets[0];
                  if (event.num == 1) {
                    event.directcontrol = true;
                  } else {
                    var str1 = '摸' + get.cnNumber(event.num, true) + '弃一';
                    var str2 = '摸一弃' + get.cnNumber(event.num, true);
                    player
                      .chooseControl(str1, str2, function (event, player) {
                        return _status.event.choice;
                      })
                      .set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                    event.str = str1;
                  }
                } else {
                  event.finish();
                }
                ('step 2');
                if (event.directcontrol || result.control == event.str) {
                  event.target.draw(event.num);
                  event.target.chooseToDiscard(true, 'he');
                } else {
                  event.target.draw();
                  event.target.chooseToDiscard(event.num, true, 'he');
                }
              },
              ai: {
                threaten(player, target) {
                  if (target.hp == 1 || target.countCards('e') >= target.hp) return 2;
                  if (target.hp == target.maxHp) return 0.5;
                  if (target.hp == 2) return 1.5;
                  return 0.5;
                },
                maixie: true,
                effect: {
                  target(card, player, target) {
                    if (target.maxHp <= 3) return;
                    if (get.tag(card, 'damage')) {
                      if (target.hp == target.maxHp) return [0, 1];
                    }
                    if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                  },
                },
              },
            },
            hj_bm_wulie: {
              //武烈
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙坚:2',
              trigger: {
                global: 'phaseBegin',
              },
              forced: true,
              content() {
                'step 0';
                player.chooseBool('是否令' + get.translation(trigger.player) + '失去一点体力并摸一张牌,其本回合内首次造成的伤害＋1且每次造成伤害后摸一张牌？').ai = function (event, player) {
                  if (get.attitude(player, trigger.player) <= 0 && trigger.player.hp < 2) return true;
                  if (get.attitude(player, trigger.player) <= 0 && trigger.player.countCards('h') < 2) return true;
                  if (get.attitude(player, trigger.player) <= 0 && trigger.player.countCards('j')) return true;
                  if (get.attitude(player, trigger.player) > 2 && trigger.player.hp >= 3 && trigger.player.countCards('h') >= 4 && trigger.player.maxHp >= 4) return true;
                  if (get.attitude(player, trigger.player) > 2 && trigger.player.countCards('j')) return false;
                  if (trigger.player == player && player.hp > 2) return true;
                  return false;
                };
                ('step 1');
                if (result.bool) {
                  trigger.player.loseHp();
                  trigger.player.draw();
                  trigger.player.addTempSkill('hj_bm_wulie_buff1');
                  trigger.player.addTempSkill('hj_bm_wulie_buff2');
                }
              },
              subSkill: {
                buff1: {
                  trigger: {
                    source: 'damageBegin',
                  },
                  popup: false,
                  forced: true,
                  content() {
                    trigger.num++;
                    player.removeSkill('hj_bm_wulie_buff1');
                  },
                },
                buff2: {
                  trigger: {
                    source: 'damageAfter',
                  },
                  mark: true,
                  marktext: '武',
                  popup: false,
                  forced: true,
                  content() {
                    player.draw();
                  },
                  intro: {
                    content: '下一次造成的伤害加一且每造成一次伤害便摸一张牌',
                  },
                },
              },
            },
            hj_bm_hunyou: {
              //魂佑
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙坚:2',
              trigger: {
                global: 'damageBegin',
              },
              forced: true,
              filter(event, player) {
                if (player.countCards('he') > 0 && event.num > 1) return true;
                if (player.countCards('he') > 0 && event.num > event.player.hp) return true;
                return false;
              },
              content() {
                'step 0';
                player.chooseToDiscard('是否弃置一张牌令' + get.translation(trigger.player) + '即将受到的伤害值改为1？', 'he').set('ai', function (card) {
                  if (get.attitude(player, trigger.player) > 2) return 8 - get.useful(card);
                  if (player.getEquip('baiyin')) return false;
                  return false;
                });
                ('step 1');
                if (result.bool) {
                  trigger.num = 1;
                }
              },
            },
            hj_bm_jushou: {
              //据守
              audio: 'ext:魂将/武将配音/兵谋篇/魂曹仁:2',
              trigger: {
                player: 'phaseEnd',
              },
              content() {
                player.draw(3);
                player.moveCard();
                player.turnOver();
              },
              mod: {
                targetEnabled(card, player, target, now) {
                  if (target.isTurnedOver()) {
                    if (card.name == 'juedou' || card.name == 'huogong') return false;
                  }
                },
              },
              group: ['hj_bm_jushou_de'],
              subSkill: {
                de: {
                  trigger: {
                    player: 'damageEnd',
                  },
                  audio: 'ext:魂将/武将配音/兵谋篇/魂曹仁:2',
                  filter(event, player) {
                    return player.isTurnedOver();
                  },
                  forced: true,
                  content() {
                    'step 0';
                    player.chooseToDiscard('he', get.prompt('hj_bm_jushou_de'), '据守:是否弃置一张牌,将武将牌翻回正面？').set('ai', function (card) {
                      return 8 - get.value(card);
                    });
                    ('step 1');
                    if (result.bool) {
                      player.turnOver();
                      player.moveCard();
                    } else {
                      event.finish();
                    }
                  },
                },
              },
            },
            hj_bm_lizhan: {
              //励战
              audio: 'ext:魂将/武将配音/兵谋篇/魂曹仁:2',
              trigger: {
                player: 'turnOverAfter',
              },
              forced: true,
              content() {
                'step 0';
                player
                  .chooseTarget(get.prompt('hj_bm_lizhan'), [1, Infinity], function (card, player, target) {
                    return target;
                  })
                  .set('ai', function (target) {
                    return get.attitude(player, target) > 2;
                  });
                ('step 1');
                if (result.targets?.length) {
                  game.asyncDraw(result.targets);
                }
              },
              group: ['hj_bm_lizhan_hp', 'hj_bm_lizhan_sha'],
              subSkill: {
                hp: {
                  trigger: {
                    global: ['recoverAfter', 'loseMaxHpAfter'],
                  },
                  forced: true,
                  content() {
                    'step 0';
                    player.chooseBool('是否让' + get.translation(trigger.player) + '摸一张牌？').ai = function (event, player) {
                      return get.attitude(player, trigger.player) > 2;
                    };
                    ('step 1');
                    if (result.bool) {
                      trigger.player.draw();
                    }
                  },
                },
                sha: {
                  trigger: {
                    global: 'shaBegin',
                  },
                  forced: true,
                  content() {
                    'step 0';
                    player.chooseBool('是否让' + get.translation(trigger.target) + '摸一张牌？').ai = function (event, player) {
                      return get.attitude(player, trigger.target) > 2;
                    };
                    ('step 1');
                    if (result.bool) {
                      trigger.target.draw();
                    }
                  },
                },
              },
              ai: {
                expose: 0.3,
                threaten: 1.3,
              },
            },
            hj_bm_zuijiu: {
              //醉酒
              audio: 'ext:魂将/武将配音/兵谋篇/魂曹植:2',
              init(player) {
                if (!player.storage.hj_bm_zuijiu) player.storage.hj_bm_zuijiu = 0;
              },
              marktext: '酒',
              intro: {
                content: '当前【杀】的伤害基数＋#',
              },
              mark: true,
              enable: 'phaseUse',
              usable: 1,
              filter(event, player) {
                return player.isDamaged();
              },
              content() {
                player.loseMaxHp();
                player.storage.hj_bm_zuijiu++;
              },
              group: ['hj_bm_zuijiu_sha', 'hj_bm_zuijiu_binsi'],
              subSkill: {
                sha: {
                  trigger: {
                    player: 'shaBegin',
                  },
                  logTarget: 'target',
                  forced: true,
                  popup: false,
                  content() {
                    if (typeof trigger.extraDamage != 'number') {
                      trigger.extraDamage = 0;
                    }
                    var num = player.storage.hj_bm_zuijiu;
                    trigger.extraDamage += num;
                    game.log(player, '对', trigger.target, '使用的', trigger.card, '的伤害基数＋', num);
                  },
                },
                binsi: {
                  trigger: {
                    player: 'dying',
                  },
                  forced: true,
                  popup: false,
                  content() {
                    player.gainMaxHp();
                    player.draw();
                  },
                },
              },
              ai: {
                order: 12,
                result: {
                  player(player) {
                    if (player.maxHp > 3) return 1;
                    if (player.maxHp <= 3) return -100;
                    return 0;
                  },
                },
              },
            },
            hj_bm_luohua: {
              //落花
              audio: 'ext:魂将/武将配音/兵谋篇/魂曹植:2',
              init(player) {
                if (!player.storage.hj_bm_luohua) player.storage.hj_bm_luohua = 0;
              },
              marktext: '花',
              intro: {
                content: '本轮还能获得#张♣️️牌',
              },
              mark: true,
              forced: true,
              charlotte: true,
              gainable: true,
              group: ['hj_bm_luohua_shuaxin', 'hj_bm_luohua_kapai', 'hj_bm_luohua_panding'],
              subSkill: {
                shuaxin: {
                  trigger: {
                    global: 'roundStart',
                  },
                  forced: true,
                  popup: false,
                  content() {
                    player.storage.hj_bm_luohua = 7;
                  },
                },
                kapai: {
                  trigger: {
                    global: ['useCardAfter', 'respondAfter', 'discardAfter'],
                  },
                  forced: true,
                  popup: false,
                  filter(event, player) {
                    if (player == _status.currentPhase) return false;
                    if (Array.isArray(event.cards))
                      for (var i of event.cards) {
                        if (player.storage.hj_bm_luohua > 0 && i.suit == 'club' && get.position(i) == 'd') {
                          return true;
                        }
                      }
                    return false;
                  },
                  content() {
                    var cards = [];
                    for (var i = 0; i < trigger.cards.length; i++) {
                      if (trigger.cards[i].suit == 'club' && get.position(trigger.cards[i]) == 'd') {
                        cards.push(trigger.cards[i]);
                      }
                    }
                    if (cards.length) {
                      player.gain(cards, 'log');
                      player.$gain2(cards);
                    }
                    player.storage.hj_bm_luohua--;
                  },
                },
                panding: {
                  trigger: {
                    global: 'judgeAfter',
                  },
                  forced: true,
                  popup: false,
                  filter(event, player) {
                    if (player == _status.currentPhase) return false;
                    if (event.result.card.parentNode.id != 'discardPile') return false;
                    if (event.result.card.suit == 'club' && player.storage.hj_bm_luohua > 0) return true;
                    return false;
                  },
                  content() {
                    player.gain(trigger.result.card, 'log');
                    player.$gain2(trigger.result.card);
                    player.storage.hj_bm_luohua--;
                  },
                },
              },
            },
            hj_bm_shifu: {
              //诗赋
              audio: 'ext:魂将/武将配音/兵谋篇/魂曹植:2',
              init(player) {
                if (!player.storage.hj_bm_shifu) player.storage.hj_bm_shifu = 0;
              },
              marktext: '赋',
              intro: {
                content: '本回合内【杀】和【酒】的使用次数＋#,计算与其他角色的距离－#',
              },
              mod: {
                globalFrom(from, to, distance) {
                  if (from.storage.hj_bm_shifu) return distance - from.storage.hj_bm_shifu.length;
                },
                cardUsable(card, player, num) {
                  if ((card.name == 'sha' || card.name == 'jiu') && player.storage.hj_bm_shifu) return num + player.storage.hj_bm_shifu;
                },
              },
              forced: true,
              charlotte: true,
              group: ['hj_bm_shifu_mopai', 'hj_bm_shifu_huanpai', 'hj_bm_shifu_guiling'],
              subSkill: {
                mopai: {
                  trigger: {
                    player: 'phaseDrawBefore',
                  },
                  forced: true,
                  popup: false,
                  filter(event, player) {
                    return player.storage.hj_bm_luohua <= 5;
                  },
                  content() {
                    trigger.cancel();
                  },
                },
                huanpai: {
                  trigger: {
                    player: 'phaseUseBegin',
                  },
                  forced: true,
                  popup: false,
                  filter(event, player) {
                    return player.countCards('h', { suit: 'club' }) > 0;
                  },
                  content() {
                    var cards = player.getCards('h', { suit: 'club' });
                    player.discard(cards);
                    var num = cards.length;
                    player.draw(num);
                    player.storage.hj_bm_shifu = num;
                    player.markSkill('hj_bm_shifu');
                    game.log(player, '本回合内使用杀和酒的次数＋', num, ',计算与其他角色的距离－', num);
                  },
                },
                guiling: {
                  trigger: {
                    player: 'phaseAfter',
                  },
                  forced: true,
                  popup: false,
                  forced: true,
                  filter(event, player) {
                    return player.storage.hj_bm_shifu > 0 || player.storage.hj_bm_shifu == Infinity;
                  },
                  content() {
                    player.storage.hj_bm_shifu = 0;
                    player.unmarkSkill('hj_bm_shifu');
                  },
                },
              },
            },
            hj_bm_xiaorui: {
              //骁锐
              audio: 'ext:魂将/武将配音/兵谋篇/魂曹纯:2',
              trigger: {
                player: 'phaseBeginStart',
              },
              forced: true,
              content() {
                'step 0';
                var num1 = game.players.length;
                player.draw(num1);
                ('step 1');
                var sl = game.countPlayer(function (current) {
                  return current.group != player.group;
                });
                var num2 = Math.max(1, sl);
                player.chooseToDiscard('he', true, num2);
                ('step 2');
                if (result.cards?.length) {
                  event.num = 0;
                  for (var i = 0; i < result.cards.length; i++) {
                    if (get.type(result.cards[i]) == 'equip') {
                      event.num++;
                    }
                  }
                }
                if (event.num > 0) {
                  var num3 = result.cards.length;
                  player.chooseTarget('是否对至多' + get.translation(num3) + '名其他角色视为使用一张【杀】？', [1, num3], function (card, player, target) {
                    return target != player;
                  }).ai = function (target) {
                    var player = _status.event.player;
                    return get.effect(target, { name: 'sha' }, player, player);
                  };
                } else event.finish();
                ('step 3');
                if (result.bool && result.targets) {
                  player.useCard({ name: 'sha' }, result.targets, false);
                } else event.finish();
              },
            },
            hj_bm_shanjia: {
              //缮甲
              audio: 'ext:魂将/武将配音/兵谋篇/魂曹纯:2',
              group: ['xinshanjia_count'],
              mod: {
                aiValue(player, card, num) {
                  if ((player.storage.xinshanjia || 0) < 3 && get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) {
                    if (get.position(card) == 'e') return num / player.hp;
                    return num * player.hp;
                  }
                },
              },
              subSkill: {
                count: {
                  forced: true,
                  silent: true,
                  popup: false,
                  trigger: {
                    player: 'loseEnd',
                  },
                  filter(event, player) {
                    return event.es.length;
                  },
                  content() {
                    lib.skill.xinshanjia.sync(player);
                  },
                },
              },
              audio: 'ext:魂将/武将配音/兵谋篇/魂曹纯:2',
              trigger: {
                player: 'phaseUseBegin',
              },
              intro: {
                content: '本局游戏内已失去过#张装备区内的牌',
              },
              forced: true,
              sync(player) {
                var history = player.actionHistory;
                var num = 0;
                for (var i = 0; i < history.length; i++) {
                  for (var j = 0; j < history[i].lose.length; j++) {
                    num += history[i].lose[j].es.length;
                  }
                }
                player.storage.xinshanjia = num;
                if (num > 0) player.markSkill('xinshanjia');
              },
              content() {
                'step 0';
                player.draw(3);
                ('step 1');
                lib.skill.xinshanjia.sync(player);
                var num = 3 - player.storage.xinshanjia;
                if (num > 0) {
                  player.chooseToDiscard('he', true, num).ai = get.disvalue;
                }
                ('step 2');
                var bool = true;
                if (result.cards?.length) {
                  for (var i = 0; i < result.cards.length; i++) {
                    if (['basic', 'trick'].includes(get.type(result.cards[i], 'trick', result.cards[i].original == 'h' ? player : false))) {
                      bool = false;
                      break;
                    }
                  }
                }
                if (bool) {
                  player.chooseUseTarget({ name: 'sha' }, '是否视为使用一张【杀】？', false);
                }
              },
              ai: {
                threaten: 3,
                noe: true,
                reverseOrder: true,
                skillTagFilter(player) {
                  if (player.storage.xinshanjia > 2) return false;
                },
                effect: {
                  target(card, player, target) {
                    if (player.storage.xinshanjia < 3 && get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                  },
                },
              },
            },
            hj_bm_lingren: {
              //凌人
              audio: 'ext:魂将/武将配音/兵谋篇/魂曹婴:2',
              trigger: {
                global: ['gameDrawAfter', 'dieAfter', 'roundStart'],
                player: 'phaseBefore',
              },
              forced: true,
              popup: false,
              derivation: ['hj_bm_jianxiong', 'hj_bm_xingshang'],
              content() {
                player.removeAdditionalSkill('hj_bm_lingren');
                var num = game.countPlayer(function (current) {
                  return current.group == 'wei';
                });
                var list = [];
                if (num >= 1) {
                  list.push('hj_bm_jianxiong');
                }
                if (num >= 2) {
                  list.push('hj_bm_xingshang');
                }
                if (list.length) {
                  player.addAdditionalSkill('hj_bm_lingren', list);
                }
              },
              group: ['hj_bm_lingren_2', 'hj_bm_lingren_3', 'hj_bm_lingren_4'],
              subSkill: {
                2: {
                  audio: 'hj_bm_lingren',
                  trigger: {
                    source: 'damageBegin',
                  },
                  forced: true,
                  filter(event, player) {
                    return event.card && event.card.name == 'sha';
                  },
                  content() {
                    var a = game.countPlayer(function (current) {
                      return current.group == 'wei';
                    });
                    trigger.num += a;
                  },
                },
                3: {
                  trigger: {
                    player: 'phaseUseBegin',
                  },
                  audio: 'hj_bm_lingren',
                  forced: true,
                  content() {
                    var list = ['sha', 'juedou', 'nanman', 'wanjian', 'huogong'];
                    player.gain(get.cardPile(list.randomGet()));
                    player.$draw();
                  },
                },
                4: {
                  trigger: {
                    player: 'phaseEnd',
                  },
                  audio: 'hj_bm_lingren',
                  forced: true,
                  content() {
                    var list = ['shan', 'tao', 'jiu', 'wuxie'];
                    player.gain(get.cardPile(list.randomGet()));
                    player.$draw();
                  },
                },
              },
            },
            hj_bm_fujian: {
              //伏间
              audio: 'ext:魂将/武将配音/兵谋篇/魂曹婴:2',
              enable: 'phaseUse',
              usable: 1,
              selectTarget: 1,
              filterTarget(card, player, target) {
                if (player == target) return false;
                return target.countCards('h') || target.isUnseen(2);
              },
              content() {
                'step 0';
                player.chooseCardButton(target, target.getCards('h')).set('filterButton', function (button) {
                  return get.color(button.link) == 'red';
                });
                ('step 1');
                if (result.links?.length) {
                  event.card = result.links[0];
                  player.gain(event.card, target);
                  target.$give(event.card, player);
                }
              },
              ai: {
                threaten: 1.5,
                result: {
                  target(player, target) {
                    return -target.countCards('h');
                  },
                },
                order: 10,
                expose: 0.4,
              },
              group: ['hj_bm_fujian_a'],
              subSkill: {
                a: {
                  trigger: {
                    player: ['useCardAfter', 'respondAfter'],
                  },
                  audio: 'hj_bm_fujian',
                  forced: true,
                  usable: 1,
                  filter(event, player) {
                    if (player == _status.currentPhase) return false;
                    var name = event.card.name;
                    var enemies = player.getEnemies();
                    for (var i = 0; i < enemies.length; i++) {
                      if (enemies[i].countCards('h', name)) {
                        return true;
                      }
                    }
                  },
                  content() {
                    var list = [];
                    var name = trigger.card.name;
                    var enemies = player.getEnemies();
                    for (var i = 0; i < enemies.length; i++) {
                      list.addArray(enemies[i].getCards('h', name));
                    }
                    if (list.length) {
                      var card = list.randomGet();
                      var owner = get.owner(card);
                      player.line(owner, 'green');
                      owner.give(card, player, true);
                    }
                  },
                },
              },
            },
            hj_bm_jianxiong: {
              //奸雄
              audio: 'ext:魂将/武将配音/兵谋篇/魂曹婴:2',
              trigger: {
                player: 'damageEnd',
              },
              content() {
                'step 0';
                player.draw();
                ('step 1');
                if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0]) == 'd') {
                  player.gain(trigger.cards, 'gain2');
                }
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
            hj_bm_xingshang: {
              //行殇
              audio: 'ext:魂将/武将配音/兵谋篇/魂曹婴:2',
              trigger: { global: 'die' },
              filter(event, player) {
                return player.isDamaged() || event.player.countCards('he') > 0;
              },
              forced: true,
              content() {
                'step 0';
                var choice = [];
                if (player.isDamaged()) choice.push('回复体力');
                if (trigger.player.countCards('he')) choice.push('获得牌');
                choice.push('cancel2');
                player
                  .chooseControl(choice)
                  .set('prompt', get.prompt2('hj_bm_xingshang'))
                  .set('ai', function () {
                    if (choice.length == 2) return 0;
                    if (get.value(trigger.player.getCards('he')) > 8) return 1;
                    return 0;
                  });
                ('step 1');
                if (result.control != 'cancel2') {
                  if (result.control == '获得牌') {
                    event.togain = trigger.player.getCards('he');
                    player.gain(event.togain, trigger.player, 'giveAuto');
                  } else player.recover();
                }
              },
            },
            hj_bm_yizhong: {
              //毅重
              audio: 'ext:魂将/武将配音/兵谋篇/魂于禁:2',
              trigger: {
                target: 'shaBegin',
              },
              forced: true,
              filter(event, player) {
                if (player.getEquip(2)) return false;
                return event.card.name == 'sha' && get.color(event.card) == 'black';
              },
              content() {
                trigger.cancel();
              },
              mod: {
                maxHandcard(player, num) {
                  if (player.hp < player.maxHp) return num + 2;
                },
              },
            },
            hj_bm_zhenjun: {
              //镇军
              audio: 'ext:魂将/武将配音/兵谋篇/魂于禁:2',
              trigger: {
                player: 'phaseBegin',
              }, //QQQ
              filter(event, player) {
                return player.countCards('he') > 0;
              },
              forced: true,
              check(event, player) {
                return get.attitude(player, event.player) > 0;
              },
              content() {
                'step 0';
                player.chooseCardTarget({
                  selectCard: 1,
                  position: 'he',
                  filterTarget(card, player, target) {
                    return player != target;
                  },
                  prompt: '将一张牌交给一名其他角色并根据你们体力的大小产生效果',
                });
                ('step 1');
                if (result.targets?.length) {
                  event.target = result.targets[0];
                  result.targets[0].gain(result.cards, event.player);
                  event.player.$give(result.cards.length, result.targets[0]);
                  player.line(result.targets, 'green');
                } else {
                  event.finish();
                }
                ('step 2');
                if (player.hp < event.target.hp) {
                  player.chooseDrawRecover(2, true, function (event, player) {
                    if (player.hp <= 2 && player.isDamaged()) return 'recover_hp';
                    return 'draw_card';
                  });
                } else if (event.target.hp < player.hp) {
                  event.target.chooseDrawRecover(2, true, function (event, player) {
                    if (player.hp <= 2 && player.isDamaged()) return 'recover_hp';
                    return 'draw_card';
                  });
                  player.loseHp();
                  player.draw();
                } else if ((event.target.hp = player.hp)) {
                  player.draw();
                  event.target.draw();
                }
              },
            },
            hj_bm_jieyue: {
              //节钺
              audio: 'ext:魂将/武将配音/兵谋篇/魂于禁:2',
              usable: 1,
              enable: 'phaseUse',
              filter(event, player) {
                return player.countCards('h') > 0;
              },
              filterTarget(card, player, target) {
                return target.countCards('h') && player != target;
              },
              content() {
                'step 0';
                event.card = target.getCards('h').randomGet();
                target.showCards(event.card);
                player.chooseCard(get.translation(target) + '展示的牌是' + get.translation(event.card) + ',请选择你展示的牌', true).ai = function (card) {
                  var att = get.attitude(player, target);
                  if (get.color(card) == get.color(event.card)) if (get.type(card, 'trick') == get.type(event.card, 'trick')) return 1;
                  if (card.suit == event.card.suit) return 1;
                  return 0;
                };
                ('step 1');
                player.showCards(result.cards[0]);
                if (get.color(result.cards[0]) == get.color(event.card)) {
                  player.draw();
                }
                if (get.type(result.cards[0], 'trick') == get.type(event.card, 'trick')) {
                  target.discard(event.card);
                }
                if (result.cards[0].suit == event.card.suit) {
                  target.turnOver();
                }
              },
              ai: {
                order: 8,
                result: {
                  player(player, target) {
                    if (get.attitude(player, target) < 0) return 1.5;
                    return -1;
                  },
                },
              },
            },
            hj_bm_yuanlue: {
              //远略
              audio: 'ext:魂将/武将配音/兵谋篇/魂张郃:2',
              trigger: {
                player: 'phaseUseBegin',
              },
              filter(event, player) {
                return player.countDisabled() < 5;
              },
              check(event, player) {
                if (player.countDisabled() >= 5) return false;
                return true;
              },
              content() {
                'step 0';
                player.chooseToDisable().ai = function (event, player, list) {
                  if (list.includes('equip5')) return 'equip5';
                  return list.randomGet();
                };
                ('step 1');
                player.draw(3);
                if (!player.storage.hj_bm_mingzhu) {
                  player.addTempSkill('hj_bm_yuanlue_buff1');
                  player.addTempSkill('hj_bm_yuanlue_buff2');
                } else {
                  player.addTempSkill('hj_bm_yuanlue_buff2');
                }
              },
              subSkill: {
                buff1: {
                  trigger: {
                    player: 'useCard',
                  },
                  forced: true,
                  content() {
                    player.draw();
                  },
                },
                buff2: {
                  mod: {
                    targetInRange() {
                      return true;
                    },
                  },
                },
              },
            },
            hj_bm_mingzhu: {
              //明主
              audio: 'ext:魂将/武将配音/兵谋篇/魂张郃:2',
              trigger: {
                player: 'phaseBeginStart',
              },
              forced: true,
              juexingji: true,
              derivation: ['hj_bm_qiaobian'],
              init(player) {
                player.storage.hj_bm_mingzhu = false;
              },
              filter(event, player) {
                return !player.storage.hj_bm_mingzhu && (player.countDisabled() >= 5 || player.hp <= 2);
              },
              content() {
                'step 0';
                player.enableEquip(1);
                player.enableEquip(2);
                player.enableEquip(3);
                player.enableEquip(4);
                player.enableEquip(5);
                var num = player.maxHp - player.countCards('h');
                if (num > 0) player.draw(num);
                ('step 1');
                player.addSkill('hj_bm_qiaobian');
                player.storage.hj_bm_mingzhu = true;
              },
            },
            hj_bm_qiaobian: {
              //巧变
              audio: 'ext:魂将/武将配音/兵谋篇/魂张郃:2',
              trigger: {
                player: 'phaseBegin',
              },
              forced: true,
              content() {
                'step 0';
                player.chooseTarget('巧变:是否令一名其他角色废除一个装备栏？', function (card, player, target) {
                  return target != player && target.countDisabled() < 5;
                }).ai = function (target) {
                  return -get.attitude(target, player, player);
                };
                ('step 1');
                if (result.targets?.length) {
                  result.targets[0].chooseToDisable();
                  event.goto(2);
                } else {
                  event.finish();
                }
                ('step 2');
                if (player.countDisabled()) {
                  player.chooseToEnable();
                } else {
                  event.finish();
                }
              },
              group: ['hj_bm_qiaobian_de'],
              subSkill: {
                de: {
                  trigger: {
                    player: 'damageEnd',
                  },
                  filter(event, player) {
                    return player.countDisabled();
                  },
                  forced: true,
                  check(event, player) {
                    return true;
                  },
                  content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    ('step 1');
                    player.chooseToEnable();
                    event.num--;
                    ('step 2');
                    if (event.num > 0) {
                      event.goto(1);
                    } else {
                      event.finish();
                    }
                  },
                },
              },
              ai: {
                maixie: true,
              },
            },
            hj_bm_jingce: {
              //精策
              audio: 'ext:魂将/武将配音/兵谋篇/魂郭淮:2',
              group: ['hj_bm_jingce_end'],
              marktext: '策',
              init(player) {
                player.storage.hj_bm_jingce = [];
              },
              intro: {
                content: 'cards',
              },
              trigger: {
                player: 'useCardAfter',
              },
              forced: true,
              filter(event, player) {
                if (_status.currentPhase != player) return false;
                return player.storage.hj_bm_jingce.length < 5;
              },
              content() {
                var cards = get.cards();
                player.storage.hj_bm_jingce = player.storage.hj_bm_jingce.concat(cards);
                player.$gain2(cards);
                game.log(player, '将一张牌置于武将牌上');
                player.markSkill('hj_bm_jingce');
              },
              subSkill: {
                end: {
                  trigger: {
                    player: 'phaseEnd',
                  },
                  forced: true,
                  filter(event, player) {
                    return player.storage.hj_bm_jingce.length;
                  },
                  content() {
                    'step 0';
                    player.chooseControl('收入手牌', '摸牌翻面', ui.create.dialog('精策', player.storage.hj_bm_jingce)).ai = function (event, player) {
                      if (player.hp > 2 && player.countCards('e') >= 2 && player.storage.hj_bm_jingce.length == 5) return '摸牌翻面';
                      return '收入手牌';
                    };
                    ('step 1');
                    var cards = [];
                    while (player.storage.hj_bm_jingce.length) {
                      cards = cards.concat(player.storage.hj_bm_jingce.shift());
                    }
                    if (result.control == '摸牌翻面') {
                      player.discard(cards);
                      var ax = cards.length + cards.length;
                      player.draw(ax);
                      player.turnOver();
                    } else {
                      player.gain(cards, 'gain2');
                      var sp = player.countCards('h') + cards.length;
                      if (sp <= player.maxHp) player.recover();
                    }
                    if (!player.storage.hj_bm_jingce.length) {
                      player.unmarkSkill('hj_bm_jingce');
                    }
                  },
                },
              },
            },
            hj_bm_duzhan: {
              //督战
              audio: 'ext:魂将/武将配音/兵谋篇/魂徐晃:2',
              enable: 'phaseUse',
              usable: 1,
              filterTarget(card, player, target) {
                return player != target;
              },
              content() {
                'step 0';
                player.judge(function (card) {
                  if (get.color(card) == 'red') return 2;
                  if (get.color(card) == 'black') return 2;
                  return 0;
                });
                ('step 1');
                if (result.color == 'black') {
                  target.addTempSkill('hj_bm_duzhan');
                  player.gain(result.card, 'gain2');
                } else {
                  target.damage();
                  if (target.isAlive()) {
                    target.gain(result.card, 'gain2');
                  } else {
                    player.gain(result.card, 'gain2');
                  }
                }
              },
              ai: {
                order: 9,
                result: {
                  target: -1,
                },
                threaten: 1.1,
              },
              subSkill: {
                jin: {
                  mark: true,
                  marktext: '禁',
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
                    content: '不能使用或打出卡牌',
                  },
                },
              },
            },
            hj_bm_jiezi: {
              //劫辎
              audio: 'ext:魂将/武将配音/兵谋篇/魂徐晃:2',
              trigger: {
                player: 'phaseEnd',
              },
              forced: true,
              filter(event, player) {
                return game.players.length > 1;
              },
              content() {
                'step 0';
                player
                  .chooseTarget(get.prompt('hj_bm_jiezi'), true, function (card, player, target) {
                    return target != player && !target.hasSkill('hj_bm_jiezi_mark');
                  })
                  .set('ai', function (target) {
                    var att = get.attitude(_status.event.player, target);
                    if (att < 0) return -att + 3;
                    return Math.random();
                  });
                ('step 1');
                if (result.targets?.length) {
                  var target = result.targets[0];
                  game.log(target, '成为了', '【劫辎】', '的目标');
                  target.storage.hj_bm_jiezi_mark = player;
                  target.addSkill('hj_bm_jiezi_mark');
                }
              },
              group: ['hj_bm_jiezi_gain', 'hj_bm_jiezi_delete'],
              subSkill: {
                mark: {
                  onremove(player) {
                    delete player.storage.hj_bm_jiezi_mark;
                  },
                  intro: {
                    content: '你获得牌后,$选择一项:摸一张牌,或弃置一名角色区域内一张牌',
                  },
                },
                delete: {
                  trigger: {
                    player: ['phaseBefore', 'dieBegin'],
                  },
                  forced: true,
                  popup: false,
                  _priority: 10,
                  content() {
                    for (var i = 0; i < game.players.length; i++) {
                      if (game.players[i].hasSkill('hj_bm_jiezi_mark')) {
                        game.players[i].removeSkill('hj_bm_jiezi_mark');
                      }
                    }
                  },
                },
                gain: {
                  trigger: {
                    global: 'gainAfter',
                  },
                  forced: true,
                  popup: false,
                  filter(event, player) {
                    return event.player.hasSkill('hj_bm_jiezi_mark');
                  },
                  content() {
                    'step 0';
                    player.chooseTarget('劫辎:弃置一名角色区域内一张牌', function (card, player, target) {
                      return target.countCards('hej');
                    }).ai = function (target) {
                      var player = _status.event.player;
                      var att = get.attitude(player, target);
                      if (att < 0) {
                        att = -Math.sqrt(-att);
                      } else {
                        att = Math.sqrt(att);
                      }
                      if (player.countCards('h') < 4 || player.countCards('h', 'shan') < 1) return false;
                      return att * lib.card.guohe.ai.result.target(player, target);
                    };
                    ('step 1');
                    if (result.targets?.length) {
                      player.discardPlayerCard(result.targets[0], true, 'hej');
                      event.finish();
                    } else {
                      player.draw();
                    }
                  },
                },
              },
            },
            hj_bm_xiaoyong: {
              //骁勇
              audio: 'ext:魂将/武将配音/兵谋篇/魂乐进:2',
              trigger: {
                player: 'damageEnd',
              },
              filter(event, player) {
                return event.num > 0;
              },
              init(player) {
                player.storage.hj_bm_xiaoyong = [];
              },
              intro: {
                content: 'cards',
              },
              forced: true,
              content() {
                'step 0';
                var num = trigger.num;
                event.num = num;
                ('step 1');
                var card = get.cards()[0];
                ui.special.appendChild(card);
                player.$draw(card);
                player.storage.hj_bm_xiaoyong.push(card);
                game.log(player, '将', card, '置于武将牌上');
                player.markSkill('hj_bm_xiaoyong');
                event.trigger('addCardToStorage');
                event.num--;
                ('step 2');
                if (event.num > 0) {
                  event.goto(1);
                } else {
                  event.finish();
                }
              },
              ai: {
                maixie: true,
                maixie_hp: true,
                effect: {
                  target(card, player, target) {
                    if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                    if (get.tag(card, 'damage')) return [1, 0.55];
                  },
                },
              },
              group: ['hj_bm_xiaoyong_yiqu'],
              subSkill: {
                yiqu: {
                  trigger: {
                    player: 'phaseBegin',
                  },
                  audio: 'hj_bm_xiaoyong',
                  forced: true,
                  popup: false,
                  forced: true,
                  filter(event, player) {
                    return player.storage.hj_bm_xiaoyong.length;
                  },
                  content() {
                    var num = player.storage.hj_bm_xiaoyong.length;
                    player.draw(2 * num);
                    if (num >= player.hp) {
                      player.recover();
                      player.addTempSkill('hj_bm_xiaoyong_buff2');
                    }
                    player.addTempSkill('hj_bm_xiaoyong_buff1');
                    player.$throw(player.storage.hj_bm_xiaoyong.slice(0), 1000);
                    player.storage.hj_bm_xiaoyong_buff1 = num;
                    game.cardsDiscard(player.storage.hj_bm_xiaoyong);
                    player.storage.hj_bm_xiaoyong = [];
                    player.unmarkSkill('hj_bm_xiaoyong');
                  },
                },
                buff1: {
                  mod: {
                    cardUsable(card, player, num) {
                      if (card.name == 'sha' && player.storage.hj_bm_xiaoyong_buff1) return num + player.storage.hj_bm_xiaoyong_buff1;
                    },
                    globalFrom(from, to, distance) {
                      if (from.storage.hj_bm_xiaoyong_buff1) return distance - from.storage.hj_bm_xiaoyong_buff1;
                    },
                  },
                },
                buff2: {
                  ai: {
                    unequip: true,
                  },
                },
              },
            },
            hj_bm_cuorui: {
              //挫锐
              audio: 'ext:魂将/武将配音/兵谋篇/魂乐进:2',
              enable: 'phaseUse',
              usable: 1,
              filterCard: true,
              position: 'he',
              filterTarget(card, player, target) {
                return target != player;
              },
              check: (card) => 8 - get.value(card),
              selectCard: 1,
              discard: false,
              prepare: 'give',
              content() {
                'step 0';
                target.gain(cards, player);
                ('step 1');
                player.chooseControl('失去体力', '废除武器栏', '废除防具栏', '废除进攻马', '废除防御马', '废除宝物栏');
                ('step 2');
                if (result.control == '失去体力') {
                  target.loseHp(1);
                }
                if (result.control == '废除武器栏') {
                  target.disableEquip(1);
                }
                if (result.control == '废除防具栏') {
                  target.disableEquip(2);
                }
                if (result.control == '废除进攻马') {
                  target.disableEquip(4);
                }
                if (result.control == '废除防御马') {
                  target.disableEquip(3);
                }
                if (result.control == '废除宝物栏') {
                  target.disableEquip(5);
                }
              },
              ai: {
                order: 1,
                result: {
                  target(player, target) {
                    var eff = get.damageEffect(target, player);
                    if (eff >= 0) return 1 + eff;
                    var value = 0,
                      i;
                    var cards = player.getCards('h');
                    for (i = 0; i < cards.length; i++) {
                      value += get.value(cards[i]);
                    }
                    value /= player.countCards('h');
                    if (target.hp == 1) return Math.min(0, value - 7);
                    return Math.min(0, value - 5);
                  },
                },
              },
            },
            hj_bm_quanji: {
              //权计
              audio: 'ext:魂将/武将配音/兵谋篇/魂钟会:2',
              trigger: {
                player: ['damageEnd', 'phaseUseEnd', 'loseHpEnd', 'recoverEnd'],
              },
              forced: true,
              notemp: true,
              init(player) {
                player.storage.hj_bm_quanji = [];
              },
              filter(event, player) {
                if (event.name == 'phaseUse') return player.countCards('h') > 0;
                return event.num > 0;
              },
              content() {
                'step 0';
                event.count = trigger.num || 1;
                ('step 1');
                event.count--;
                player.draw(2);
                ('step 2');
                if (player.countCards('he')) {
                  player.chooseCard('将一张手牌置于武将牌上作为<权>', true);
                } else {
                  event.goto(4);
                }
                ('step 3');
                if (result.cards?.length) {
                  player.lose(result.cards, ui.special, 'toStorage');
                  player.storage.hj_bm_quanji = player.storage.hj_bm_quanji.concat(result.cards);
                  player.markSkill('hj_bm_quanji');
                  game.log(player, '将', result.cards, '置于武将牌上作为<权>');
                }
                ('step 4');
                if (event.count > 0) {
                  player.chooseBool(get.prompt2('hj_bm_quanji')).set('frequentSkill', 'hj_bm_quanji');
                } else event.finish();
                ('step 5');
                if (result.bool) {
                  event.goto(1);
                }
              },
              intro: {
                content: 'cards',
              },
              marktext: '权',
              mod: {
                maxHandcard(player, num) {
                  return num + player.storage.hj_bm_quanji.length;
                },
                cardUsable(card, player, num) {
                  //if(player.getEquip(1)) return;
                  var x = Math.floor(player.storage.hj_bm_quanji.length / 2);
                  if (card.name == 'sha') return num + x;
                },
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
                      if (!target.hasSkill('paiyi') && target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
                      if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
                      if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                    }
                  },
                },
              },
            },
            hj_bm_paiyi: {
              //排异
              audio: 'ext:魂将/武将配音/兵谋篇/魂钟会:2',
              trigger: {
                global: 'phaseUseBefore',
              },
              _priority: 15,
              check(event, player) {
                return get.attitude(player, event.player) < 0;
              },
              logTarget: 'player',
              filter(event, player) {
                return player.canCompare(event.player);
              },
              content() {
                'step 0';
                player.chooseToCompare(trigger.player);
                ('step 1');
                if (result.bool) {
                  trigger.cancel();
                } else {
                  trigger.player.gainPlayerCard(player, 'he', true);
                  player.gain([result.player, result.target]);
                  player.$gain2([result.player, result.target]);
                }
              },
              ai: {
                expose: 0.2,
                result: {
                  target: -2,
                },
              },
            },
            hj_bm_yexin: {
              //野心
              audio: 'ext:魂将/武将配音/兵谋篇/魂钟会:2',
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
                  player.gainPlayerCard(target, 'he', true);
                  target.turnOver();
                } else {
                  target.draw(2);
                }
              },
              ai: {
                order: 3,
                result: {
                  player: -0.5,
                  target: -1.2,
                },
                threaten: 1.2,
              },
            },
            hj_bm_tuntian: {
              //屯田
              audio: 'ext:魂将/武将配音/兵谋篇/魂邓艾:2',
              trigger: {
                player: 'loseEnd',
              },
              forced: true,
              filter(event, player) {
                if (player == _status.currentPhase) return false;
                if (Array.isArray(event.cards))
                  for (var i of event.cards) {
                    if (i.original && i.original != 'j') return true;
                  }
                return event.cards && event.cards.length;
              },
              group: 'hj_bm_tuntian_dist',
              content() {
                'step 0';
                event.num = trigger.cards.length;
                ('step 1');
                player.judge(function (card) {
                  if (card.suit == 'heart') return -1;
                  return 1;
                }, ui.special).nogain = function (card) {
                  return card.suit != 'heart';
                };
                ('step 2');
                if (result.bool) {
                  result.card.goto(ui.special);
                  event.trigger('addCardToStorage');
                  player.storage.hj_bm_tuntian.push(result.card);
                  result.node.moveDelete(player);
                  game.broadcast(
                    function (cardid, player) {
                      var node = lib.cardOL[cardid];
                      if (node) {
                        node.moveDelete(player);
                      }
                    },
                    result.node.cardid,
                    player
                  );
                  game.addVideo('gain2', player, get.cardsInfo([result.node]));
                  player.markSkill('hj_bm_tuntian');
                  game.addVideo('storage', player, ['hj_bm_tuntian', get.cardsInfo(player.storage.hj_bm_tuntian), 'cards']);
                } else {
                  player.gain(result.card);
                  player.$gain2(result.card);
                  player.draw();
                }
                event.num--;
                if (event.num > 0) {
                  event.goto(1);
                } else {
                  event.finish();
                }
              },
              init(player) {
                player.storage.hj_bm_tuntian = [];
              },
              intro: {
                content: 'cards',
              },
              subSkill: {
                dist: {
                  mod: {
                    globalFrom(from, to, distance) {
                      if (from.storage.hj_bm_tuntian) return distance - from.storage.hj_bm_tuntian.length;
                    },
                  },
                },
              },
            },
            hj_bm_zhenggong: {
              //争功
              audio: 'ext:魂将/武将配音/兵谋篇/魂邓艾:2',
              trigger: {
                player: 'phaseUseBegin',
              },
              check(event, player) {
                var nh = player.hp;
                if (nh >= 2) return true;
                return false;
              },
              content() {
                player.draw(3);
                player.addTempSkill('hj_bm_zhenggong_end');
              },
              subSkill: {
                end: {
                  trigger: {
                    player: 'phaseEnd',
                  },
                  filter(event, player) {
                    return !player.getStat('damage');
                  },
                  forced: true,
                  content() {
                    player.loseHp();
                  },
                },
              },
            },
            hj_bm_jixi: {
              //急袭
              audio: 'ext:魂将/武将配音/兵谋篇/魂邓艾:2',
              enable: 'phaseUse',
              mark: true,
              marktext: '袭',
              filter(event, player) {
                return player.storage.hj_bm_tuntian.length;
              },
              chooseButton: {
                dialog(event, player) {
                  return ui.create.dialog('急袭', player.storage.hj_bm_tuntian, 'hidden');
                },
                backup(links, player) {
                  return {
                    filterCard() {
                      return false;
                    },
                    selectCard: -1,
                    viewAs: { name: 'shunshou' },
                    cards: links,
                    onuse(result, player) {
                      result.cards = lib.skill[result.skill].cards;
                      var card = result.cards[0];
                      player.storage.hj_bm_tuntian.remove(card);
                      if (!player.storage.hj_bm_tuntian.length) {
                        player.unmarkSkill('hj_bm_tuntian');
                      } else {
                        player.markSkill('hj_bm_tuntian');
                      }
                    },
                  };
                },
                prompt(links, player) {
                  return '选择急袭的目标';
                },
              },
              ai: {
                order: 10,
                result: {
                  player(player) {
                    return player.storage.hj_bm_tuntian.length - 1;
                  },
                },
              },
            },
            hj_bm_gongao: {
              //功獒
              audio: 'ext:魂将/武将配音/兵谋篇/魂诸葛诞:2',
              init(player) {
                if (!player.storage.hj_bm_gongao) player.storage.hj_bm_gongao = 0;
              },
              marktext: '功',
              intro: {
                content: '当前有#个<战功>标记',
              },
              mark: true,
              group: ['hj_bm_gongao_gong', 'hj_bm_gongao_die', 'hj_bm_gongao_ao', 'hj_bm_gongao_draw'],
              subSkill: {
                die: {
                  trigger: {
                    global: 'dieAfter',
                  },
                  audio: 'hj_bm_gongao',
                  forced: true,
                  popup: false,
                  forced: true,
                  filter(event, player) {
                    return player.isAlive();
                  },
                  content() {
                    player.storage.hj_bm_gongao++;
                    game.log(player, '获得了1枚<战功>标记');
                  },
                },
                gong: {
                  trigger: {
                    source: 'damageEnd',
                  },
                  audio: 'hj_bm_gongao',
                  forced: true,
                  popup: false,
                  forced: true,
                  content() {
                    player.storage.hj_bm_gongao += trigger.num;
                    game.log(player, '获得了', trigger.num, '枚<战功>标记');
                  },
                },
                ao: {
                  trigger: {
                    player: 'damageBegin',
                  },
                  audio: 'hj_bm_gongao',
                  forced: true,
                  popup: false,
                  forced: true,
                  _priority: -10,
                  filter(event, player) {
                    return player.storage.hj_bm_gongao > 0;
                  },
                  content() {
                    player.storage.hj_bm_gongao--;
                    game.log(player, '失去了1枚<战功>标记');
                    trigger.cancel();
                  },
                },
                draw: {
                  trigger: {
                    player: 'phaseDrawBegin',
                  },
                  audio: 'hj_bm_gongao',
                  forced: true,
                  popup: false,
                  forced: true,
                  filter(event, player) {
                    return player.storage.hj_bm_gongao > 0;
                  },
                  content() {
                    var num = Math.min(3, player.storage.hj_bm_gongao);
                    trigger.num += num;
                  },
                },
              },
            },
            hj_bm_weizhong: {
              //威重
              audio: 'ext:魂将/武将配音/兵谋篇/魂诸葛诞:2',
              group: ['hj_bm_weizhong_target', 'hj_bm_weizhong_player'],
              subSkill: {
                target: {
                  trigger: {
                    source: 'damageBegin',
                  },
                  forced: true,
                  popup: false,
                  forced: true,
                  filter(event, player) {
                    return event.player.hp < player.hp;
                  },
                  content() {
                    trigger.num++;
                  },
                },
                player: {
                  trigger: {
                    player: 'damageBegin',
                  },
                  forced: true,
                  popup: false,
                  forced: true,
                  filter(event, player) {
                    return event.source && event.source.hp <= player.hp; //QQQ
                  },
                  content() {
                    trigger.num++;
                  },
                },
              },
            },
            hj_bm_xingkui: {
              //形愧
              audio: 'ext:魂将/武将配音/兵谋篇/魂庞统:2',
              trigger: {
                player: 'phaseDrawBegin',
              },
              forced: true,
              content() {
                trigger.num--;
              },
              mod: {
                maxHandcard(player, num) {
                  if (player.hp <= player.maxHp) return num - 1;
                },
              },
            },
            hj_bm_mingqi: {
              //鸣岐
              audio: 'ext:魂将/武将配音/兵谋篇/魂庞统:2',
              limited: true,
              init(player) {
                player.storage.hj_bm_mingqi = false;
              },
              derivation: 'hj_bm_zhanji',
              trigger: {
                player: ['phaseBefore', 'dyingBegin'],
              },
              filter(event, player) {
                if (player.storage.hj_bm_mingqi == true) return false;
                return true;
              },
              content() {
                player.awakenSkill('hj_bm_mingqi');
                if (player.isDamaged()) {
                  player.gainMaxHp(2);
                  player.recover(9);
                } else {
                  player.gainMaxHp(), player.removeSkill('hj_bm_xingkui');
                }
                player.addSkill('hj_bm_zhanji'), player.addSkill('hj_bm_qiwu');
                player.storage.hj_bm_mingqi = true;
              },
              mark: true,
              intro: {
                content: 'limited',
              },
            },
            hj_bm_qiwu: {
              //栖梧
              audio: 'ext:魂将/武将配音/兵谋篇/魂庞统:2',
              forced: true,
              trigger: {
                player: 'useCardAfter',
              },
              logTarget: 'player',
              forced: true,
              check(event, player) {
                return true;
              },
              content() {
                player.draw();
                player.chooseToDiscard('he', true);
              },
            },
            hj_bm_zhanji: {
              //展骥
              audio: 'ext:魂将/武将配音/兵谋篇/魂庞统:2',
              trigger: {
                player: 'gainAfter',
              },
              forced: true,
              filter(event, player) {
                return event.parent.name == 'draw' && event.getParent(2).name != 'hj_bm_zhanji';
              },
              content() {
                player.draw('nodelay');
              },
            },
            hj_bm_pozhen: {
              //破阵
              audio: 'ext:魂将/武将配音/兵谋篇/魂黄忠:2',
              group: ['hj_bm_pozhen_dian', 'hj_bm_pozhen_hu1', 'hj_bm_pozhen_hu2', 'hj_bm_pozhen_die'],
              subSkill: {
                dian: {
                  trigger: {
                    global: 'gameDrawAfter',
                  },
                  audio: 'hj_bm_pozhen',
                  forced: true,
                  filter(event, player) {
                    return game.players.length > 1;
                  },
                  content() {
                    'step 0';
                    player
                      .chooseTarget('选择【破阵】的目标', true, function (card, player, target) {
                        return target != player && !target.hasSkill('hj_bm_pozhen_mark');
                      })
                      .set('ai', function (target) {
                        var att = get.attitude(_status.event.player, target);
                        if (att < 0) return -att + 3;
                        return Math.random();
                      });
                    ('step 1');
                    if (result.targets?.length) {
                      var target = result.targets[0];
                      player.line(target, 'green');
                      game.log(target, '成为了', '【点虎】', '的目标');
                      target.storage.hj_bm_pozhen_mark = player;
                      target.addSkill('hj_bm_pozhen_mark');
                    }
                  },
                },
                mark: {
                  intro: {
                    content: '当你受到伤害后,$可以令伤害来源或自己摸一张牌;当你回复体力后,$摸一张牌',
                  },
                },
                hu1: {
                  trigger: {
                    global: 'damageAfter',
                  },
                  audio: 'hj_bm_pozhen',
                  forced: true,
                  filter(event, player) {
                    return event.player.isAlive() && event.player.hasSkill('hj_bm_pozhen_mark');
                  },
                  content() {
                    'step 0';
                    if (trigger.source && trigger.source != player) {
                      event.goto(1);
                    } else {
                      player.draw();
                      event.finish();
                    }
                    ('step 1');
                    player.chooseControl('令自己摸牌', '令伤害来源摸牌', function (event, player) {
                      var att = get.attitude(player, trigger.source);
                      if (att <= 0) return '令自己摸牌';
                      if (att > 2 && trigger.source.countCards('h') < player.countCards('h')) return '令伤害来源摸牌';
                      return '令自己摸牌';
                    });
                    ('step 2');
                    if (result.control == '令自己摸牌') {
                      player.draw();
                    } else {
                      player.line(trigger.source);
                      trigger.source.draw();
                    }
                  },
                },
                hu2: {
                  trigger: {
                    global: 'recoverAfter',
                  },
                  audio: 'hj_bm_pozhen',
                  forced: true,
                  filter(event, player) {
                    return event.player.isAlive() && event.player.hasSkill('hj_bm_pozhen_mark');
                  },
                  content() {
                    player.draw();
                  },
                },
                die: {
                  trigger: {
                    global: 'dieAfter',
                  },
                  audio: 'hj_bm_pozhen',
                  forced: true,
                  filter(event, player) {
                    return player.isAlive() && event.player.hasSkill('hj_bm_pozhen_mark');
                  },
                  content() {
                    'step 0';
                    player.gainMaxHp();
                    player.recover();
                    player.chooseSkill(trigger.player, true, function (info, skill) {
                      return !player.hasSkill(skill);
                    });
                    ('step 1');
                    if (result.bool) {
                      var skill = result.skill;
                      player.addSkill(skill);
                      player.popup(skill);
                      game.log(player, '获得技能', '【' + get.translation(skill) + '】');
                    }
                  },
                },
              },
            },
            hj_bm_liegong: {
              //烈弓
              audio: 'ext:魂将/武将配音/兵谋篇/魂黄忠:2',
              mod: {
                targetInRange(card) {
                  if (card.name == 'sha') return true;
                },
              },
              group: ['hj_bm_huaquegong'],
              derivation: ['hj_bm_huaquegong'],
              trigger: {
                player: 'shaBegin',
              },
              logTarget: 'target',
              check(event, player) {
                return get.attitude(player, event.target) <= 0;
              },
              filter(event, player) {
                if (event.target.countCards('h') <= player.countCards('h')) return true;
                if (event.target.hp > player.hp) return true;
                return false;
              },
              content() {
                if (trigger.target.countCards('h') <= player.countCards('h')) trigger.directHit = true;
                if (trigger.target.hp > player.hp) {
                  var hp = trigger.target.hp - player.hp;
                  var num = Math.min(5, hp);
                  player.chooseDrawRecover(num, true, function (event, player) {
                    if (player.hp < player.countCards('h') && player.isDamaged()) return 'recover_hp';
                    return 'draw_card';
                  });
                }
              },
              ai: {
                threaten: 0.5,
              },
            },
            hj_bm_huaquegong: {
              //画雀弓
              audio: 'hj_bm_pozhen',
              trigger: {
                source: 'damageBegin',
              },
              check(event, player) {
                var att = get.attitude(player, event.player);
                if (att > 0 && event.player.countCards('j')) return true;
                if (att <= 0 && event.player.countCards('he')) return true;
                return false;
              },
              filter(event, player) {
                return !player.getEquip(1) && event.card && event.card.name == 'sha' && event.player != player && event.player.countCards('hej') && event.player.countDiscardableCards(player, 'hej');
              },
              _priority: 7,
              logTarget: 'player',
              content() {
                'step 0';
                if (trigger.player.countDiscardableCards(player, 'hej')) {
                  player.discardPlayerCard('hej', trigger.player, true);
                }
                ('step 1');
                var card = result.cards[0];
                if (get.type(card) == 'equip') {
                  player.gain(card, 'gain2');
                }
              },
              ai: {
                effect: {
                  target(card, player, target) {
                    if (player == target && get.subtype(card) == 'equip1' && card.name != 'zhuge') {
                      return -1;
                    }
                    if (!target.isEmpty(1)) return;
                    return 1;
                  },
                },
              },
            },
            hj_bm_kuanglang: {
              //狂狼
              audio: 'ext:魂将/武将配音/兵谋篇/魂魏延:2',
              enable: 'phaseUse',
              usable: 1,
              filterTarget(card, player, target) {
                return target != player && target.countCards('h');
              },
              filter(event, player) {
                return player.countCards('h');
              },
              content() {
                'step 0';
                player.chooseToCompare(target);
                ('step 1');
                if (result.bool) {
                  player.draw();
                  player.useCard({ name: 'juedou' }, targets, 'noai').animate = false;
                } else {
                  player.draw(2);
                  player.useCard({ name: 'sha' }, target, false);
                }
              },
              ai: {
                order: 8,
                result: {
                  target(player, target) {
                    return get.damageEffect(target, player, target);
                  },
                },
              },
            },
            hj_bm_aogu: {
              //傲骨
              audio: 'ext:魂将/武将配音/兵谋篇/魂魏延:4',
              trigger: {
                source: 'damageEnd',
              },
              forced: true,
              content() {
                'step 0';
                var list = ['摸二弃一', '摸一回血', '取消'];
                player
                  .chooseControl(list)
                  .set('prompt', get.prompt('hj_bm_aogu'))
                  .set('ai', function () {
                    return list[[0, 1].randomGet()];
                  });
                ('step 1');
                switch (result.control) {
                  case '摸二弃一': {
                    player.draw(2);
                    player.chooseToDiscard('he', true);
                    break;
                  }
                  case '摸一回血': {
                    player.draw();
                    player.recover();
                    break;
                  }
                  case '取消': {
                    break;
                  }
                }
              },
            },
            hj_bm_tiaoxin: {
              //挑衅
              audio: 'ext:魂将/武将配音/兵谋篇/魂姜维:2',
              enable: 'phaseUse',
              usable: 1,
              filterCard: true,
              selectCard: true,
              position: 'h',
              filter(event, player) {
                return player.countCards('h') > 0;
              },
              filterTarget(card, player, target) {
                return target != player && target.countCards('he') > 0;
              },
              content() {
                'step 0';
                player.discardPlayerCard(target, true);
                ('step 1');
                if (cards[0].name == 'sha' || result.links[0].name == 'sha') {
                  if (cards[0].name == 'sha') {
                    target.damage(player, true);
                  }
                  if (result.links[0].name == 'sha' && target.isAlive()) {
                    player.damage(target, true);
                  }
                } else {
                  player.draw();
                  target.draw();
                }
              },
              ai: {
                order: 4,
                expose: 0.2,
                result: {
                  target: -1,
                  player(player, target) {
                    if (target.countCards('h') == 0) return 0;
                    if (target.countCards('h') == 1) return -0.1;
                    if (player.hp <= 2) return -2;
                    if (player.countCards('h', 'shan') == 0) return -1;
                    return -0.5;
                  },
                },
                threaten: 1.1,
              },
            },
            hj_bm_tianxing: {
              //天星
              audio: 'ext:魂将/武将配音/兵谋篇/魂姜维:2',
              trigger: {
                player: 'phaseBegin',
              },
              _priority: -1,
              content() {
                'step 0';
                player.skip('phaseDraw');
                ('step 1');
                if (game.countPlayer() > 5) {
                  event.cards = get.cards(7);
                } else {
                  event.cards = get.cards(5);
                }
                if (player.maxHp - player.hp > 1) {
                  var num = player.maxHp - player.hp;
                } else {
                  var num = 1;
                }
                if (num < event.cards.length) {
                  player.chooseCardButton(event.cards, [num, Infinity], '天星:请将至少' + get.translation(num) + '张牌置于牌堆顶', true).set('ai', ai.get.buttonValue);
                } else {
                  player.chooseCardButton(event.cards, [1, Infinity], '天星:请将至少一张牌置于牌堆顶', true).set('ai', ai.get.buttonValue);
                }
                ('step 2');
                if (result.bool) {
                  var xing = [];
                  for (var i = 0; i < result.links.length; i++) {
                    xing.push(result.links[i]);
                    cards.remove(result.links[i]);
                  }
                  player.gain(cards, 'gain2');
                  while (xing.length) {
                    ui.cardPile.insertBefore(xing.pop(), ui.cardPile.firstChild);
                  }
                }
              },
            },
            hj_bm_dewang: {
              //德望
              audio: 'ext:魂将/武将配音/兵谋篇/魂鲁肃:2',
              forced: true,
              trigger: {
                target: 'useCardToBegin',
              },
              forced: true,
              filter(event, player) {
                if (event.player.hp <= player.hp) return true;
                if (event.targets.length > 1) return true;
                var hs = player.getCards('h');
                var names = ['sha', 'shan'];
                for (var i = 0; i < hs.length; i++) {
                  names.remove(hs[i].name);
                }
                for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                  if (names.includes(ui.cardPile.childNodes[i].name)) {
                    return true;
                  }
                }
                return false;
              },
              usable: 111,
              content() {
                var hs = player.getCards('h');
                var list = [];
                var names = ['sha', 'shan'];
                for (var i = 0; i < hs.length; i++) {
                  names.remove(hs[i].name);
                }
                for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                  if (names.includes(ui.cardPile.childNodes[i].name)) {
                    list.push(ui.cardPile.childNodes[i]);
                  }
                }
                if (list.length) {
                  player.gain(list.randomGet(), 'draw');
                }
              },
            },
            hj_bm_haoshi: {
              //好施
              audio: 'ext:魂将/武将配音/兵谋篇/魂鲁肃:2',
              trigger: {
                player: 'phaseDrawBefore',
              },
              check(event, player) {
                return game.players.length > 2 && player.countCards('h') <= 5;
              },
              content() {
                'step 0';
                trigger.cancel();
                ('step 1');
                var num1 = game.players.length;
                player.draw(num1);
                ('step 2');
                event.num = 3;
                ('step 3');
                player.chooseCardTarget({
                  selectCard: 1,
                  position: 'he',
                  filterTarget(card, player, target) {
                    return player != target && !target.hasSkill('hj_bm_haoshi_xianzhi');
                  },
                  prompt: '是否将一张牌交给一名其他角色？',
                });
                ('step 4');
                if (result.bool) {
                  event.num--;
                  event.target = result.targets[0];
                  player.line(event.target, 'white');
                  player.$give(result.cards.length, event.target);
                  event.target.gain(result.cards, player);
                  event.target.addTempSkill('hj_bm_haoshi_xianzhi');
                } else {
                  event.goto(6);
                }
                ('step 5');
                if (event.num > 0) {
                  event.goto(3);
                } else {
                  event.goto(6);
                }
                ('step 6');
                var num1 = player.countCards('h') - 5;
                if (num1 > 0) {
                  player.chooseToDiscard(num1, 'h', true);
                } else {
                  event.finish();
                }
              },
              subSkill: {
                xianzhi: {},
              },
            },
            hj_bm_dimeng: {
              //缔盟
              audio: 'ext:魂将/武将配音/兵谋篇/魂鲁肃:2',
              enable: 'phaseUse',
              usable: 1,
              filterTarget(card, player, target) {
                return target != player && target.countCards('h');
              },
              content() {
                'step 0';
                var num = [1, 2, 3].randomGet();
                var hs = target.getCards('h').randomGets(num);
                event.hs = hs;
                target.showCards(hs);
                ('step 1');
                if (game.players.length > 2) {
                  event.goto(2);
                } else {
                  player.line(target, 'white');
                  target.discard(event.hs);
                  event.finish();
                }
                ('step 2');
                player.chooseControl('将这些牌交给一名其他角色', '弃置这些牌', function (event, player) {
                  var num1 = game.countPlayer(function (current) {
                    return player.getFriends().includes(current);
                  });
                  if (num1 > 0) return '将这些牌交给一名其他角色';
                  return '弃置这些牌';
                });
                ('step 3');
                if (result.control == '弃置这些牌') {
                  player.line(target, 'white');
                  target.discard(event.hs);
                  event.finish();
                } else {
                  event.goto(4);
                }
                ('step 4');
                event.target = target;
                player.chooseTarget('缔盟:选择一名角色,令其获得这些牌', true, function (card, player, target) {
                  return target != player && target != event.target;
                }).ai = function (target) {
                  return get.attitude(player, target) > 2;
                };
                ('step 5');
                if (result.targets?.length) {
                  event.target.line(result.targets[0], 'white');
                  event.target.$give(event.hs, result.targets[0]);
                  result.targets[0].gain(event.hs, event.target);
                }
              },
              ai: {
                order: 10,
                result: {
                  target: -2,
                },
              },
            },
            hj_bm_yizhen: {
              //天义
              audio: 'ext:魂将/武将配音/兵谋篇/魂太史慈:2',
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
                  player.addTempSkill('hj_bm_yizhen_win', 'phaseEnd');
                } else {
                  player.addTempSkill('hj_bm_yizhen_lose', 'phaseUseEnd');
                }
              },
              group: ['hj_bm_yizhen_compare'],
              subSkill: {
                compare: {
                  trigger: {
                    player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                    target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                  },
                  popup: false,
                  forced: true,
                  filter(event, player) {
                    if (event.preserve) return false;
                    if (player == event.player) {
                      if (event.num1 > event.num2) {
                        return !get.owner(event.card2);
                      } else {
                        return !get.owner(event.card1);
                      }
                    } else {
                      if (event.num1 < event.num2) {
                        return !get.owner(event.card1);
                      } else {
                        return !get.owner(event.card2);
                      }
                    }
                  },
                  content() {
                    'step 0';
                    player.chooseBool('义阵:是否获得点数小的一张的拼点牌？若你主将或副将为>兵谋孙策<,则改为获得两张拼点牌');
                    ('step 1');
                    if (result.bool) {
                      event.goto(2);
                    } else {
                      event.finish();
                    }
                    ('step 2');
                    if (player.name == 'hj_bm_sunce' || player.name2 == 'hj_bm_sunce') {
                      player.gain(trigger.card1, 'gain2');
                      player.gain(trigger.card2, 'gain2');
                      event.finish();
                    } else {
                      event.goto(3);
                    }
                    ('step 3');
                    if (player == trigger.player) {
                      if (trigger.num1 > trigger.num2) {
                        player.gain(trigger.card2, 'gain2');
                      } else {
                        player.gain(trigger.card1, 'gain2');
                      }
                    } else {
                      if (trigger.num1 < trigger.num2) {
                        player.gain(trigger.card1, 'gain2');
                      } else {
                        player.gain(trigger.card2, 'gain2');
                      }
                    }
                  },
                },
                win: {
                  mod: {
                    targetInRange(card, player, target, now) {
                      if (card.name == 'sha') return true;
                    },
                    selectTarget(card, player, range) {
                      if (card.name == 'sha' && range[1] && range[1] != -1) range[1]++;
                    },
                    cardUsable(card, player, num) {
                      if (card.name == 'sha') return num + 1;
                    },
                  },
                  ai: {
                    unequip: true,
                  },
                },
                lose: {
                  mod: {
                    cardEnabled(card) {
                      if (card.name == 'sha') return false;
                    },
                  },
                },
              },
              ai: {
                order(name, player) {
                  var cards = player.getCards('h');
                  if (player.countCards('h', 'sha') == 0) {
                    return 1;
                  }
                  for (var i = 0; i < cards.length; i++) {
                    if (cards[i].name != 'sha' && cards[i].number > 11 && get.value(cards[i]) < 7) {
                      return 9;
                    }
                  }
                  return get.order({ name: 'sha' }) - 1;
                },
                result: {
                  player(player) {
                    if (player.countCards('h', 'sha') > 0) return 0.6;
                    var num = player.countCards('h');
                    if (num > player.hp) return 0;
                    if (num == 1) return -2;
                    if (num == 2) return -1;
                    return -0.7;
                  },
                  target(player, target) {
                    var num = target.countCards('h');
                    if (num == 1) return -1;
                    if (num == 2) return -0.7;
                    return -0.5;
                  },
                },
                threaten: 1.3,
              },
            },
            hj_bm_dulie: {
              //笃烈
              audio: 'ext:魂将/武将配音/兵谋篇/魂太史慈:2',
              init(player) {
                player.storage.hj_bm_dulie = 0;
              },
              intro: {
                content: '共有#个<兴>',
              },
              trigger: {
                source: 'damageEnd',
              },
              forced: true,
              filter(event, player) {
                return player.isAlive() && player.storage.hj_bm_dulie < 4;
              },
              content() {
                player.storage.hj_bm_dulie++;
                if (!player.markSkill('hj_bm_dulie')) {
                  player.markSkill('hj_bm_dulie');
                }
              },
              group: ['hj_bm_dulie_a', 'hj_bm_dulie_b', 'hj_bm_dulie_c', 'hj_bm_dulie_d'],
              subSkill: {
                a: {
                  mod: {
                    maxHandcard(player, num) {
                      if (player.storage.hj_bm_dulie >= 1) {
                        if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                      }
                    },
                  },
                },
                b: {
                  trigger: {
                    player: 'phaseDrawBegin',
                  },
                  popup: false,
                  forced: true,
                  filter(event, player) {
                    return player.storage.hj_bm_dulie >= 2;
                  },
                  content() {
                    trigger.num++;
                  },
                },
                c: {
                  trigger: {
                    player: 'phaseJudgeBefore',
                  },
                  popup: false,
                  forced: true,
                  filter(event, player) {
                    return player.storage.hj_bm_dulie >= 3;
                  },
                  content() {
                    trigger.cancel();
                    game.log(player, '跳过了判定阶段');
                  },
                },
                d: {
                  trigger: {
                    player: 'loseEnd',
                  },
                  popup: false,
                  forced: true,
                  filter(event, player) {
                    if (player == _status.currentPhase) return false;
                    if (event.cards) {
                      if (Array.isArray(event.cards))
                        for (var i of event.cards) {
                          if (i.original != 'j' && player.storage.hj_bm_dulie >= 4) return true;
                        }
                    }
                    return false;
                  },
                  content() {
                    player.draw();
                  },
                },
              },
            },
            hj_bm_huanhua: {
              //幻化
              audio: 'ext:魂将/武将配音/兵谋篇/魂左慈:2',
              trigger: {
                global: 'gameDrawAfter',
                player: ['phaseBefore', 'enterGame', 'phaseAfter'],
              },
              forced: true,
              content() {
                'step 0';
                var chat = ['哼,肉眼凡胎,岂能窥视,仙人变幻？', '万物苍生,幻化由心'].randomGet();
                player.say(chat);
                var list = get.gainableCharacters(function (info) {
                  return info[2] >= 0;
                });
                var players = game.players.concat(game.dead);
                for (var i = 0; i < players.length; i++) {
                  list.remove(players[i].name);
                  list.remove(players[i].name1);
                  list.remove(players[i].name2);
                }
                var dialog = ui.create.dialog('选择一张幻化牌', 'hidden');
                dialog.add([list.randomGets(2), 'character']);
                player.chooseButton(dialog).ai = function (button) {
                  return get.rank(button.link, true);
                };
                ('step 1');
                if (result.bool) {
                  var chat = ['吐故纳新,师法天地', '眼之所见,皆为幻象', '为仙之道,飘渺莫测', '仙人之力,昭于世间', '感觉到了新的魂魄'].randomGet();
                  player.say(chat);
                  player.unmark(player.storage.hj_bm_huanhua + '_charactermark');
                  var name = result.links[0];
                  var list = [];
                  var skills = lib.character[result.links[0]][3];
                  for (var j = 0; j < skills.length; j++) {
                    if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !player.hasSkill(skills[j] && !lib.skill[skills[j]].zhuSkill)) {
                      list.push(skills[j]);
                    }
                  }
                  player.addAdditionalSkill('hj_bm_huanhua', list);
                  player.markCharacter(name, null, true, true);
                  game.addVideo('markCharacter', player, {
                    name: '幻化',
                    content: '',
                    id: 'hj_bm_huanhua',
                    target: name,
                  });
                  player.storage.hj_bm_huanhua = name;
                  player.update();
                }
              },
            },
            hj_bm_dunshu: {
              //遁书
              audio: 'ext:魂将/武将配音/兵谋篇/魂左慈:2',
              mod: {
                globalFrom(from, to, distance) {
                  return distance - 1;
                },
                globalTo(from, to, distance) {
                  return distance + 1;
                },
              },
              group: ['hj_bm_dunshu_lose', 'hj_bm_dunshu_max'],
              trigger: {
                target: 'useCardToBefore',
              },
              forced: true,
              usable: 1,
              _priority: 7,
              filter(event, player) {
                if (player.getEquip(2)) return false;
                return event.card.name == 'sha';
              },
              content() {
                var chat = ['治人者握权,治于人者失命', '止兵止战,休养生息'].randomGet();
                player.say(chat);
                trigger.cancel();
              },
              subSkill: {
                lose: {
                  trigger: {
                    player: 'loseMaxHpBefore',
                  },
                  audio: 'hj_bm_dunshu',
                  forced: true,
                  filter(event, player) {
                    if (player.maxHp <= 4) return true;
                    return false;
                  },
                  content() {
                    var chat = ['死而复生,生生死死', '死生存亡,命之行也'].randomGet();
                    player.say(chat);
                    trigger.cancel();
                  },
                },
                max: {
                  trigger: {
                    global: ['useCard', 'useSkill'],
                  },
                  forced: true,
                  filter(event, player) {
                    if (player.maxHp < 4) return true;
                    return false;
                  },
                  content() {
                    var chat = ['神光不灭,仙力不绝', '放下俗念,为道为仙'].randomGet();
                    player.say(chat);
                    player.maxHp = 4;
                    player.recover(4 - player.hp);
                    player.update();
                  },
                },
              },
            },
            hj_bm_xiongluan: {
              //雄乱
              audio: 'ext:魂将/武将配音/兵谋篇/魂张绣:2',
              usable: 1,
              enable: 'phaseUse',
              filterTarget(card, player, target) {
                return player != target;
              },
              check(event, player) {
                return get.attitude(player, event.player) > 0;
              },
              content() {
                'step 0';
                var num = target.maxHp - target.countCards('h');
                if (num > 0) {
                  target.recover();
                  target.draw(num);
                } else {
                  target.recover();
                  target.draw();
                }
                ('step 1');
                player.chooseControl('调整手牌', '获得技能', function (event, player) {
                  var num1 = player.countCards('h');
                  var b = target.countCards('h') - num1;
                  if (b >= 2) return '调整手牌';
                  return '获得技能';
                });
                ('step 2');
                if (result.control == '调整手牌') {
                  var num2 = target.countCards('h');
                  var c = num2 - player.countCards('h');
                  player.draw(c);
                } else {
                  player.draw();
                  player.addTempSkill('hj_bm_xiongluan2');
                }
              },
              ai: {
                order: 10,
                result: {
                  target: 2,
                  player: 1,
                },
              },
            },
            hj_bm_xiongluan2: {
              audio: 'hj_bm_xiongluan',
              mod: {
                targetInRange() {
                  return true;
                },
                cardUsable(card) {
                  if (get.info(card) && get.info(card).forceUsable) return;
                  return Infinity;
                },
              },
              mark: true,
              marktext: '乱',
              intro: {
                content: '使用牌无次数限制和距离限制',
              },
            },
            hj_bm_congjian: {
              //从谏
              audio: 'ext:魂将/武将配音/兵谋篇/魂张绣:2',
              trigger: {
                target: 'useCardToBefore',
              },
              usable: 1,
              _priority: 7,
              filter(event, player) {
                return event.player != player;
              },
              check(event, player) {
                return get.attitude(player, event.player) <= 0;
              },
              content() {
                'step 0';
                trigger.player.draw();
                trigger.player.damage();
                ('step 1');
                trigger.target = trigger.player;
                trigger.player = player;
                trigger.untrigger();
                trigger.trigger('useCardToBefore');
              },
              ai: {
                result: {
                  target: -2,
                  player: 1,
                },
              },
            },
            hj_bm_luanzheng: {
              //乱政
              audio: 'ext:魂将/武将配音/兵谋篇/魂张让:4',
              trigger: {
                global: 'useCardToBefore',
              },
              filter(event, player) {
                return event.target != player && get.type(event.card) != 'equip' && event.targets.length == 1;
              },
              forced: true,
              content() {
                'step 0';
                player
                  .chooseTarget(get.prompt2('hj_bm_luanzheng'), function (card, player, target) {
                    return target != trigger.target;
                  })
                  .set('ai', function (target) {
                    if (trigger.card.name != 'wuzhong' && trigger.card.name != 'jiu' && trigger.card.name != 'tao') {
                      return -get.attitude(player, target);
                    } else {
                      if (player.getEnemies().includes(trigger.player)) return get.attitude(player, target);
                    }
                    return 0;
                  });
                ('step 1');
                if (result.targets?.length) {
                  trigger.target = result.targets[0];
                  game.log(player, '将', trigger.card, '的目标重新指定为' + get.translation(result.targets[0]));
                  if (result.targets[0] == player) {
                    player.draw();
                  }
                  trigger.untrigger();
                  trigger.trigger('useCardToBegin');
                }
              },
            },
            hj_bm_luoshen: {
              init(player) {
                player.storage.hj_bm_luoshen = 0;
              },
              intro: {
                content(storage) {
                  if (storage > 0) return '本回合因此技能获得' + storage + '张牌';
                  if (storage < 0) return '本回合因此技能获得' + storage + '张牌';
                  return '未发动';
                },
              },
              audio: 'ext:混沌界:2',
              trigger: {
                player: 'phaseBegin',
              },
              content() {
                'step 0';
                player.judge(function (card) {
                  if (card.suit != 'heart') return 1.5;
                  return -1.5;
                });
                ('step 1');
                if (result.judge > 0) {
                  player.gain(result.card, 'gain2');
                  player.storage.hj_bm_luoshen++;
                  player.markSkill('hj_bm_luoshen');
                } else {
                  event.finish();
                }
                ('step 2');
                if (result.bool) {
                  event.goto(0);
                }
              },
              group: 'hj_bm_luoshen_Over',
              subSkill: {
                Over: {
                  audio: 'ext:混沌界:2',
                  trigger: {
                    player: 'phaseEnd',
                  },
                  forced: true,
                  _priority: 100,
                  content() {
                    'step 0';
                    if (player.storage.hj_bm_luoshen <= 2) {
                      player.storage.hj_bm_luoshen = 0;
                      player.markSkill('hj_bm_luoshen');
                    } else {
                      player.storage.hj_bm_luoshen = 0;
                      player.markSkill('hj_bm_luoshen');
                      event.finish();
                    }
                    ('step 1');
                    player.chooseTarget(get.prompt('hj_bm_luoshen_Over'), function (card, player, target) {
                      return target.isEnemiesOf(player);
                    }).ai = function (target) {
                      var att = get.attitude(player, target);
                      if (target.isTurnedOver()) {
                        if (att > 0) {
                          return att + 5;
                        }
                        return -1;
                      }
                      if (player.isTurnedOver()) {
                        return 5 - att;
                      }
                      return -att;
                    };
                    ('step 2');
                    if (result.targets?.length) {
                      result.targets[0].turnOver();
                    }
                  },
                  ai: {
                    threaten: 1.7,
                  },
                },
              },
            },
            hj_bm_fanghua: {
              audio: 'ext:混沌界:2',
              trigger: {
                global: 'turnOverAfter',
              },
              forced: true,
              filter(event, player) {
                return event.player.isTurnedOver() && event.player != player;
              },
              content() {
                trigger.player.loseHp();
              },
              ai: {
                expose: 0,
              },
            },
            hj_bm_xishui: {
              audio: 'ext:混沌界:2',
              group: 'hj_bm_xishui2',
              enable: ['chooseToRespond', 'chooseToUse'],
              filterCard(card) {
                return card.suit == 'spade' || card.suit == 'club' || card.suit == 'diamond';
              },
              position: 'he',
              viewAs: {
                name: 'shan',
                suit: 'spade',
                number: 13,
              },
              viewAsFilter(player) {
                if (!player.countCards('he')) return false;
              },
              prompt: '将一张非♥️️️手牌当做【闪】打出',
              check() {
                return 1;
              },
              ai: {
                respondShan: true,
                skillTagFilter(player) {
                  if (!player.countCards('he')) return false;
                },
                effect: {
                  target(card, player, target, current) {
                    if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                  },
                },
                basic: {
                  useful: [7, 2],
                  value: [7, 2],
                },
                order: 3,
                result: {
                  player: 1,
                },
              },
            },
            hj_bm_zishu: {
              marktext: '书',
              intro: {
                content: 'cards',
              },
              init(player) {
                player.storage.hj_bm_zishu = [];
              },
              trigger: {
                player: 'gainAfter',
              },
              forced: true,
              _priority: -1,
              forced: true,
              filter(event, player) {
                return _status.currentPhase != player;
              },
              content() {
                if (!player.storage.hj_bm_zishu_gain) {
                  player.storage.hj_bm_zishu_gain = [];
                }
                player.storage.hj_bm_zishu_gain.addArray(trigger.cards);
              },
              subSkill: {
                mark: {
                  audio: 'ext:混沌界:2',
                  trigger: {
                    global: 'phaseEnd',
                  },
                  forced: true,
                  _priority: 100,
                  filter(event, player) {
                    if (player.storage.hj_bm_zishu_gain) {
                      var he = player.getCards('he');
                      for (var i = 0; i < player.storage.hj_bm_zishu_gain.length; i++) {
                        if (he.includes(player.storage.hj_bm_zishu_gain[i])) {
                          return true;
                        }
                      }
                      return false;
                    }
                  },
                  content() {
                    var he = player.getCards('he');
                    var list = [];
                    for (var i = 0; i < player.storage.hj_bm_zishu_gain.length; i++) {
                      if (he.includes(player.storage.hj_bm_zishu_gain[i])) {
                        list.push(player.storage.hj_bm_zishu_gain[i]);
                      }
                    }
                    player.$give(list.length, player);
                    player.lose(list, ui.special);
                    player.storage.hj_bm_zishu = player.storage.hj_bm_zishu.concat(list);
                    player.markSkill('hj_bm_zishu');
                    game.log(player, '将', list, '置于武将牌上称为', '#y<书>');
                  },
                },
                target: {
                  trigger: {
                    target: 'useCardToBefore',
                  },
                  filter(event, player) {
                    return event.player != player;
                  },
                  forced: true,
                  _priority: 100,
                  content() {
                    player.draw('nodelay');
                  },
                },
                gain: {
                  audio: 'ext:混沌界:2',
                  trigger: {
                    player: 'gainAfter',
                  },
                  forced: true,
                  filter(event, player) {
                    return event.getParent(2).name != 'hj_bm_zishu_gain';
                  },
                  content() {
                    player.draw('nodelay');
                  },
                },
              },
              ai: {
                threaten: 1.2,
                nogain: 1,
              },
              group: ['hj_bm_zishu_target', 'hj_bm_zishu_mark', 'hj_bm_zishu_gain'],
            },
            hj_bm_yingyuan: {
              group: ['hj_bm_yingyuan_use', 'hj_bm_yingyuan_discard'],
              subSkill: {
                use: {
                  trigger: {
                    player: ['useCardAfter', 'respondAfter'],
                  },
                  forced: true,
                  _priority: -1,
                  filter(event, player) {
                    if (event.cards) {
                      if (Array.isArray(event.cards))
                        for (var i of event.cards) {
                          if (i.isInPile()) return true;
                        }
                    }
                    return false;
                  },
                  content() {
                    'step 0';
                    player
                      .chooseTarget(get.prompt('hj_bm_yingyuan'), '将' + get.translation(trigger.cards) + '交给一名其他角色', function (card, player, target) {
                        return target != player;
                      })
                      .set('ai', function (target) {
                        if (target.hasJudge('lebu')) return 0;
                        var att = get.attitude(_status.event.player, target);
                        if (att < 3) return 0;
                        if (target.hasSha() && _status.event.sha) {
                          att /= 5;
                        }
                        if (event.wuxie && target.needsToDiscard(1)) {
                          att /= 5;
                        }
                        return att / (1 + get.distance(player, target, 'absolute'));
                      })
                      .set('sha', trigger.cards[0].name == 'sha')
                      .set('wuxie', trigger.cards[0].name == 'wuxie');
                    ('step 1');
                    if (result.targets?.length) {
                      player.line(result.targets[0]);
                      result.targets[0].gain(trigger.cards, 'gain2');
                    }
                  },
                  ai: {
                    threaten: 1.8,
                  },
                },
                USE: {
                  trigger: {
                    player: ['useCardAfter', 'respondAfter'],
                  },
                  forced: true,
                  _priority: -1,
                  filter(event, player) {
                    if (Array.isArray(event.cards))
                      for (var i of event.cards) {
                        if (get.type(i) != 'delay') {
                          return true;
                        }
                      }
                    return false;
                  },
                  content() {
                    'step 0';
                    player
                      .chooseTarget(get.prompt('hj_bm_yingyuan'), '将' + get.translation(trigger.cards) + '交给一名其他角色', function (card, player, target) {
                        return target != player;
                      })
                      .set('ai', function (target) {
                        if (target.hasJudge('lebu')) return 0;
                        var att = get.attitude(_status.event.player, target);
                        if (att < 3) return 0;
                        if (target.hasSha() && _status.event.sha) {
                          att /= 5;
                        }
                        if (event.wuxie && target.needsToDiscard(1)) {
                          att /= 5;
                        }
                        return att / (1 + get.distance(player, target, 'absolute'));
                      })
                      .set('sha', trigger.cards[0].name == 'sha')
                      .set('wuxie', trigger.cards[0].name == 'wuxie');
                    ('step 1');
                    if (result.targets?.length) {
                      player.line(result.targets[0]);
                      result.targets[0].gain(trigger.cards, 'gain2');
                    }
                  },
                  ai: {
                    threaten: 1.8,
                  },
                },
                discard: {
                  trigger: {
                    player: 'discardAfter',
                  },
                  forced: true,
                  _priority: -1,
                  filter(event, player) {
                    if (event.cards) {
                      if (Array.isArray(event.cards))
                        for (var i of event.cards) {
                          if (i.isInPile()) return true;
                        }
                    }
                    return false;
                  },
                  content() {
                    'step 0';
                    player
                      .chooseTarget(get.prompt('hj_bm_yingyuan'), '将' + get.translation(trigger.cards) + '交给一名其他角色', function (card, player, target) {
                        return target != player;
                      })
                      .set('ai', function (target) {
                        if (target.hasJudge('lebu')) return 0;
                        var att = get.attitude(_status.event.player, target);
                        if (att < 3) return 0;
                        if (target.hasSha() && _status.event.sha) {
                          att /= 5;
                        }
                        if (event.wuxie && target.needsToDiscard(1)) {
                          att /= 5;
                        }
                        return att / (1 + get.distance(player, target, 'absolute'));
                      })
                      .set('sha', trigger.cards[0].name == 'sha')
                      .set('wuxie', trigger.cards[0].name == 'wuxie');
                    ('step 1');
                    if (result.targets?.length) {
                      player.line(result.targets[0]);
                      result.targets[0].gain(trigger.cards, 'gain2');
                    }
                  },
                  ai: {
                    threaten: 1.8,
                  },
                },
              },
            },
            hj_bm_xiemu: {
              audio: 'ext:混沌界:2',
              trigger: {
                target: 'useCardToBegin',
              },
              _priority: 100,
              check(event, player) {
                if (event.parent.excluded.includes(player)) return false;
                if (get.attitude(player, event.player) > 0) {
                  return false;
                }
                if (get.tag(event.card, 'respondSha')) {
                  if (player.countCards('h', { name: 'sha' }) == 0) {
                    return true;
                  }
                } else if (get.tag(event.card, 'respondShan')) {
                  if (player.countCards('h', { name: 'shan' }) == 0) {
                    return true;
                  }
                } else if (get.tag(event.card, 'damage')) {
                  return true;
                } else if (event.card.name == 'shunshou') {
                  return true;
                }
                return false;
              },
              filter(event, player) {
                return event.player != player && event.card && player.hasSkill('hj_bm_zishu') && player.storage.hj_bm_zishu.length;
              },
              content() {
                'step 0';
                player.line('thunder', trigger.player);
                trigger.player.chooseCardButton('选择并获得一张<书>', player.storage.hj_bm_zishu, true);
                ('step 1');
                if (result.links?.length) {
                  player.$give(result.links.length, trigger.player);
                  player.storage.hj_bm_zishu.remove(result.links[0]);
                  player.markSkill('hj_bm_zishu');
                  trigger.player.gain(result.links[0], 'fromStorage');
                }
                ('step 2');
                if (result.bool) {
                  trigger.player.chooseCard(2, '交给' + get.translation(player) + '两张牌,或令此牌对其无效').ai = function (card) {
                    if (get.attitude(player, trigger.player) > 0) return 6 - get.value(card);
                    return 0;
                  };
                } else {
                  event.finish();
                }
                ('step 3');
                if (result.cards?.length) {
                  player.gain(result.cards, trigger.player);
                  trigger.player.$give(result.cards, player);
                } else {
                  trigger.cancel();
                }
              },
            },
            hj_bm_fubing: {
              audio: 'ext:魂将/武将配音/阴间篇/魂·程昱:2',
              trigger: {
                player: ['phaseDiscardBefore', 'damageAfter'],
              },
              forced: true,
              marktext: '伏',
              group: ['hj_bm_fubing_fuji'],
              init(player) {
                player.storage.hj_bm_fubing = [];
                player.storage.hj_bm_fubing2 = [];
              },
              filter(event, player) {
                return player.countCards('he') > 0;
              },
              intro: {
                content: 'cards',
                mark(dialog, content, player) {
                  if (content && content.length) {
                    dialog.addAuto(content);
                    if (player.isUnderControl(true)) {
                      var str = '';
                      for (var i = 0; i < player.storage.hj_bm_fubing2.length; i++) {
                        str += get.translation(player.storage.hj_bm_fubing2[i]);
                        if (i < player.storage.hj_bm_fubing2.length - 1) {
                          str += '、';
                        }
                      }
                      dialog.add('<div class="text center">' + str + '</div>');
                    }
                  }
                },
              },
              content() {
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
                  .chooseButton([get.prompt('hj_bm_fubing'), [list1.concat(list2).concat(list3), 'vcard']])
                  .set('filterButton', function (button) {
                    var player = _status.event.player;
                    if (player.storage.hj_bm_fubing2 && player.storage.hj_bm_fubing2.includes(button.link[2])) return false;
                    return true;
                  })
                  .set('ai', function (button) {
                    var rand = _status.event.rand * 2;
                    switch (button.link[2]) {
                      case 'sha':
                        return 5 + rand[1];
                      case 'tao':
                        return 4 + rand[2];
                      case 'lebu':
                        return 3 + rand[3];
                      case 'shan':
                        return 4.5 + rand[4];
                      case 'wuzhong':
                        return 4 + rand[5];
                      case 'shunshou':
                        return 3 + rand[6];
                      case 'nanman':
                        return 2 + rand[7];
                      case 'wanjian':
                        return 2 + rand[8];
                      default:
                        return rand[9];
                    }
                  })
                  .set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()], Math.random());
                ('step 1');
                if (result.links?.length) {
                  player.storage.hj_bm_fubing2.push(result.links[0][2]);
                  player.chooseCard('he', '选择一张手牌作为<伏兵>', true);
                  if (player.isOnline2()) {
                    player.send(function (storage) {
                      game.me.storage.hj_bm_fubing2 = storage;
                    }, player.storage.hj_bm_fubing2);
                  }
                } else {
                  event.finish();
                }
                ('step 2');
                if (result.cards?.length) {
                  var card = result.cards[0];
                  player.lose(card, ui.special, 'toStorage');
                  player.storage.hj_bm_fubing.push(card);
                  player.markSkill('hj_bm_fubing');
                  player.$give(card, player);
                }
              },
              subSkill: {
                fuji: {
                  trigger: {
                    global: ['useCard', 'respondEnd'],
                  },
                  _priority: 15,
                  filter(event, player) {
                    if (event.player == player) return false;
                    if (event.name == 'respond') {
                      if (event.getParent(2).name != 'sha') return false;
                    }
                    return player.storage.hj_bm_fubing2 && player.storage.hj_bm_fubing2.includes(event.card.name);
                  },
                  forced: true,
                  content() {
                    'step 0';
                    var effect = 0;
                    if (trigger.card.name == 'wuxie' || trigger.name == 'respond') {
                      if (get.attitude(player, trigger.player) < -1) {
                        effect = -1;
                      }
                    } else if (trigger.targets && trigger.targets.length) {
                      for (var i = 0; i < trigger.targets.length; i++) {
                        effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                      }
                    }
                    var str = '设伏:是否令' + get.translation(trigger.player);
                    if (trigger.targets && trigger.targets.length) {
                      str += '对' + get.translation(trigger.targets);
                    }
                    str += '的' + get.translation(trigger.card) + '失效？';
                    var next = player.chooseBool(str, function () {
                      var player = _status.event.player;
                      var trigger = _status.event.getTrigger();
                      if (_status.event.effect < 0) {
                        if (trigger.card.name == 'sha') {
                          var target = trigger.targets[0];
                          if (target == player) {
                            return !player.countCards('h', 'shan');
                          } else {
                            return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
                          }
                        } else {
                          return true;
                        }
                      }
                      return false;
                    });
                    next.set('effect', effect);
                    ('step 1');
                    if (result.bool) {
                      var index = player.storage.hj_bm_fubing2.indexOf(trigger.card.name);
                      if (index != -1) {
                        var card = player.storage.hj_bm_fubing[index];
                        card.discard();
                        player.$throw(card);
                        player.storage.hj_bm_fubing.splice(index, 1);
                        player.storage.hj_bm_fubing2.splice(index, 1);
                        if (player.storage.hj_bm_fubing.length == 0) {
                          player.unmarkSkill('hj_bm_fubing');
                        } else {
                          player.markSkill('hj_bm_fubing');
                          if (player.isOnline2()) {
                            player.send(function (storage) {
                              game.me.storage.hj_bm_fubing2 = storage;
                            }, player.storage.hj_bm_fubing2);
                          }
                        }
                      }
                      if (trigger.name == 'respond') {
                        if (trigger.parent.result) {
                          trigger.parent.result.bool = false;
                        }
                      } else {
                        trigger.cancel();
                      }
                    } else {
                      event.finish();
                    }
                    ('step 2');
                    player.$draw(trigger.cards);
                    player.gain(trigger.cards);
                    trigger.player.loseHp();
                    game.broadcastAll(ui.clear);
                  },
                  ai: {
                    threaten: 1.8,
                    expose: 0.3,
                  },
                },
              },
            },
            hj_bm_benyu: {
              audio: 'ext:魂将/武将配音/阴间篇/魂·程昱:2',
              trigger: {
                player: 'damageEnd',
              },
              filter(event, player) {
                return event.source != undefined;
              },
              _priority: 6,
              forced: true,
              checkx(event, player) {
                var att1 = get.attitude(player, event.player);
                var att2 = get.attitude(player, event.source);
                return att1 > 0 && att2 <= 0;
              },
              content() {
                'step 0';
                var c = trigger.source.countCards('h');
                if (c > 5) c = 5;
                player.draw(c);
                ('step 1');
                var kk = player.hp;
                var next = player.chooseToDiscard('he', kk, get.prompt('hj_bm_benyu'));
                var check = lib.skill.beige.checkx(trigger, player);
                next.set('ai', function (card) {
                  if (_status.event.goon) return 8 - get.value(card);
                  return 0;
                });
                next.set('goon', check);
                ('step 2');
                if (result.bool) {
                  trigger.source.damage(trigger.num);
                }
              },
              ai: {
                maixie_defend: true,
                effect: {
                  target(card, player, target) {
                    if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                      if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                      if (get.attitude(target, player) < 0) return [1, 1];
                    }
                  },
                },
              },
            },
            hj_bm_xuanfeng: {
              //旋风
              audio: 'ext:魂将/武将配音/兵谋篇/魂凌统:2',
              trigger: {
                player: 'loseEnd',
              },
              forced: true,
              filter(event, player) {
                if (Array.isArray(event.cards))
                  for (var i of event.cards) {
                    if (i.original == 'e') return true;
                  }
                return false;
              },
              content() {
                'step 0';
                player
                  .chooseTarget(get.prompt('hj_bm_xuanfeng'), function (card, player, target) {
                    if (target == player) return false;
                    return get.distance(player, target) <= 1 || player.canUse('sha', target, false);
                  })
                  .set('ai', function (target) {
                    if (get.distance(player, target) <= 1) {
                      return get.damageEffect(target, player, player) * 2;
                    } else {
                      return get.effect(target, { name: 'sha' }, player, player);
                    }
                  });
                ('step 1');
                if (result.targets?.length) {
                  var target = result.targets[0];
                  var distance = get.distance(player, target);
                  if (distance <= 1 && player.canUse('sha', target, false)) {
                    player.chooseControl('出杀', '造成伤害').ai = function () {
                      return '造成伤害';
                    };
                    event.target = target;
                  } else if (distance <= 1) {
                    target.damage();
                    player.draw();
                    event.finish();
                  } else {
                    player.discardPlayerCard(target, 'he', [1, 2], true);
                    player.useCard({ name: 'sha' }, target, false).animate = false;
                    event.finish();
                  }
                } else {
                  event.finish();
                }
                ('step 2');
                var target = event.target;
                if (result.control == '出杀') {
                  player.discardPlayerCard(target, 'he', [1, 2], true);
                  player.useCard({ name: 'sha' }, target, false).animate = false;
                } else {
                  target.damage();
                  player.draw();
                }
              },
              ai: {
                effect: {
                  target(card, player, target, current) {
                    if (get.type(card) == 'equip') return [3, 1];
                  },
                },
                reverseEquip: true,
                noe: true,
              },
            },
            hj_bm_jiliu: {
              //激流
              audio: 'ext:魂将/武将配音/兵谋篇/魂凌统:2',
              trigger: {
                global: 'discardAfter',
              },
              filter(event, player) {
                if (event.player == player) return false;
                if (Array.isArray(event.cards))
                  for (var i of event.cards) {
                    if (get.type(i) == 'equip' && get.position(i) == 'd') {
                      return true;
                    }
                  }
                return false;
              },
              frequent: 'check',
              check(event, player) {
                if (Array.isArray(event.cards))
                  for (var i of event.cards) {
                    if (get.type(i) == 'equip' && get.position(i) == 'd') {
                      if (i.name == 'du') return false;
                    }
                  }
                return true;
              },
              content() {
                'step 0';
                if (trigger.delay == false) game.delay();
                ('step 1');
                var cards = [];
                for (var i = 0; i < trigger.cards.length; i++) {
                  if (get.type(trigger.cards[i]) == 'equip' && get.position(trigger.cards[i]) == 'd') {
                    cards.push(trigger.cards[i]);
                  }
                }
                if (cards.length) {
                  player.gain(cards, 'log');
                  player.$gain2(cards);
                }
              },
            },
            hj_bm_yongjin: {
              //勇进
              audio: 'ext:魂将/武将配音/兵谋篇/魂凌统:2',
              audioname: ['xin_lingtong'],
              limited: true,
              enable: 'phaseUse',
              filter(event, player, cards) {
                return game.hasPlayer(function (current) {
                  var es = current.getCards('e', function (card) {
                    return !cards || !cards.includes(card);
                  });
                  for (var i = 0; i < es.length; i++) {
                    if (
                      game.hasPlayer(function (current2) {
                        return current != current2 && !current2.isMin() && current2.isEmpty(get.subtype(es[i]));
                      })
                    ) {
                      return true;
                    }
                  }
                });
              },
              content() {
                'step 0';
                player.awakenSkill('hj_bm_yongjin');
                event.count = 3;
                event.cards = [];
                ('step 1');
                event.count--;
                if (!lib.skill.hj_bm_yongjin.filter(null, player, cards)) {
                  event.finish();
                  return;
                }
                var next = player.chooseTarget(2, function (card, player, target) {
                  if (ui.selected.targets.length) {
                    var from = ui.selected.targets[0];
                    if (target.isMin()) return false;
                    var es = from.getCards('e', function (card) {
                      return !_status.event.cards.includes(card);
                    });
                    for (var i = 0; i < es.length; i++) {
                      if (target.isEmpty(get.subtype(es[i]))) return true;
                    }
                    return false;
                  } else {
                    return (
                      target.countCards('e', function (card) {
                        return !_status.event.cards.includes(card);
                      }) > 0
                    );
                  }
                });
                next.set('ai', function (target) {
                  var player = _status.event.player;
                  var att = get.attitude(player, target);
                  var sgnatt = get.sgn(att);
                  if (ui.selected.targets.length == 0) {
                    if (att > 0) {
                      if (
                        target.countCards('e', function (card) {
                          return (
                            get.value(card, target) < 0 &&
                            !_status.event.cards.includes(card) &&
                            game.hasPlayer(function (current) {
                              return current != target && get.attitude(player, current) < 0 && current.isEmpty(get.subtype(card));
                            })
                          );
                        }) > 0
                      )
                        return 9;
                    } else if (att < 0) {
                      if (
                        game.hasPlayer(function (current) {
                          if (current != target && get.attitude(player, current) > 0) {
                            var es = target.getCards('e', function (card) {
                              return !_status.event.cards.includes(card);
                            });
                            for (var i = 0; i < es.length; i++) {
                              if (get.value(es[i], target) > 0 && current.isEmpty(get.subtype(es[i])) && get.effect(current, es[i], player, current) > 0) return true;
                            }
                          }
                        })
                      ) {
                        return -att;
                      }
                    }
                    return 0;
                  }
                  var es = ui.selected.targets[0].getCards('e', function (card) {
                    return !_status.event.cards.includes(card);
                  });
                  var i;
                  var att2 = get.sgn(get.attitude(player, ui.selected.targets[0]));
                  for (i = 0; i < es.length; i++) {
                    if (sgnatt != 0 && att2 != 0 && sgnatt != att2 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.effect(target, es[i], player, target)) == sgnatt && target.isEmpty(get.subtype(es[i]))) {
                      return Math.abs(att);
                    }
                  }
                  if (i == es.length) {
                    return 0;
                  }
                  return -att * get.attitude(player, ui.selected.targets[0]);
                });
                next.set('multitarget', true);
                next.set('cards', cards);
                next.set('targetprompt', ['被移走', '移动目标']);
                next.set('prompt', '移动场上的一张装备牌');
                ('step 2');
                if (result.targets?.length) {
                  player.line2(result.targets, 'green');
                  event.targets = result.targets;
                } else {
                  event.finish();
                }
                ('step 3');
                ('step 4');
                if (targets.length == 2) {
                  player
                    .choosePlayerCard(
                      'e',
                      true,
                      function (button) {
                        var player = _status.event.player;
                        var targets0 = _status.event.targets0;
                        var targets1 = _status.event.targets1;
                        if (get.attitude(player, targets0) > 0 && get.attitude(player, targets1) < 0) {
                          if (get.value(button.link, targets0) < 0 && get.effect(targets1, button.link, player, targets1) > 0) return 10;
                          return 0;
                        } else {
                          return get.value(button.link) * get.effect(targets1, button.link, player, player);
                        }
                      },
                      targets[0]
                    )
                    .set('nojudge', event.nojudge || false)
                    .set('targets0', targets[0])
                    .set('targets1', targets[1])
                    .set('filterButton', function (button) {
                      if (_status.event.cards.includes(button.link)) return false;
                      var targets1 = _status.event.targets1;
                      return targets1.isEmpty(get.subtype(button.link));
                    })
                    .set('cards', cards);
                } else {
                  event.finish();
                }
                ('step 5');
                if (result.links?.length) {
                  var link = result.links[0];
                  cards.add(link);
                  event.targets[1].equip(link);
                  event.targets[0].$give(link, event.targets[1]);
                } else event.finish();
                ('step 6');
                if (event.count > 0) event.goto(1);
              },
              ai: {
                order: 7,
                result: {
                  player(player) {
                    var num = 0;
                    var friends = game.filterPlayer(function (current) {
                      return get.attitude(player, current) >= 4;
                    });
                    var vacancies = {
                      equip1: 0,
                      equip2: 0,
                      equip3: 0,
                      equip4: 0,
                      equip5: 0,
                    };
                    for (var i = 0; i < friends.length; i++) {
                      for (var j = 1; j <= 5; j++) {
                        if (friends[i].isEmpty(j)) {
                          vacancies['equip' + j]++;
                        }
                      }
                    }
                    var sources = game.filterPlayer(function (current) {
                      return get.attitude(player, current) < 0 && current.countCards('e');
                    });
                    for (var i = 0; i < sources.length; i++) {
                      var es = sources[i].getCards('e');
                      for (var j = 0; j < es.length; j++) {
                        var type = get.subtype(es[j]);
                        if (vacancies[type] && get.value(es[j]) > 0) {
                          num++;
                          if (num >= 3) {
                            return 1;
                          }
                          vacancies[type]--;
                        }
                      }
                    }
                    if (num && player.hp == 1) {
                      return 0.5;
                    }
                    return 0;
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
            hj_bm_kuangcai: {
              //狂才
              init(player) {
                player.storage.hj_bm_kuangcai = 0;
              },
              group: ['hj_bm_kuangcai_buff3'],
              audio: 'ext:魂将/武将配音/兵谋篇/魂祢衡:2',
              trigger: {
                player: 'phaseUseBegin',
              },
              forced: true,
              content() {
                'step 0';
                player.chooseBool(get.prompt2('hj_bm_kuangcai')).ai = function (event, player) {
                  return true;
                };
                ('step 1');
                if (result.bool) {
                  if (player.countCards('h') < 3) {
                    player.draw(2);
                  } else {
                    player.draw();
                  }
                  player.addTempSkill('hj_bm_kuangcai_buff1');
                  player.addTempSkill('hj_bm_kuangcai_buff2');
                }
              },
              subSkill: {
                buff1: {
                  trigger: {
                    player: 'useCard',
                  },
                  filter(event, player) {
                    return player.getHandcardLimit() > 0;
                  },
                  forced: true,
                  content() {
                    'step 0';
                    player.chooseBool('是否摸一张牌并令手牌上限－1？').ai = function (event, player) {
                      if (player.countCards('h', 'tao') > 0 && player.getHandcardLimit() > 1) return true;
                      if (player.countCards('h', 'tao') == 0 && player.getHandcardLimit() > 0) return true;
                      if (player.countCards('h', 'tao') >= 3 && player.getHandcardLimit() > 1) return true;
                      return false;
                    };
                    ('step 1');
                    if (result.bool) {
                      player.draw();
                      player.storage.hj_bm_kuangcai++;
                    }
                  },
                },
                buff2: {
                  mod: {
                    maxHandcard(player, num) {
                      var b = player.storage.hj_bm_kuangcai;
                      return num + 2 - b;
                    },
                    targetInRange() {
                      return true;
                    },
                    cardUsable(card) {
                      if (get.info(card) && get.info(card).forceUsable) return;
                      return Infinity;
                    },
                  },
                },
                buff3: {
                  trigger: {
                    player: ['phaseEnd', 'phaseUseBefore'],
                  },
                  filter(event, player) {
                    return player.storage.hj_bm_kuangcai != 0;
                  },
                  popup: false,
                  forced: true,
                  content() {
                    player.storage.hj_bm_kuangcai = 0;
                  },
                },
              },
            },
            hj_bm_shejian: {
              //舌剑
              audio: 'ext:魂将/武将配音/兵谋篇/魂祢衡:2',
              trigger: {
                player: 'phaseDiscardEnd',
              },
              forced: true,
              filter(event, player) {
                return event.cards && event.cards.length;
              },
              content() {
                'step 0';
                var num = trigger.cards.length;
                player
                  .chooseTarget(get.prompt('hj_bm_shejian'), [1, num], function (card, player, target) {
                    return target != player && target.countCards('he') > 0;
                  })
                  .set('ai', function (target) {
                    return -get.attitude(_status.event.player, target);
                  });
                ('step 1');
                if (result.targets?.length) {
                  event.targets = result.targets;
                  event.num = 0;
                } else {
                  event.finish();
                }
                ('step 2');
                if (event.num < event.targets.length) {
                  player.discardPlayerCard('he', event.targets[event.num], true);
                  event.num++;
                  event.redo();
                }
              },
            },
            hj_bm_xiaoji: {
              //枭姬
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙尚香:2',
              charlotte: true,
              mark: true,
              marktext: '枭',
              intro: {
                name: '枭姬',
                content: '生效装备:$',
              },
              forced: true,
              init(player) {
                if (!player.storage.hj_bm_xiaoji) player.storage.hj_bm_xiaoji = [];
              },
              mod: {
                targetInRange(card, player, target) {
                  if (card.name == 'sha') {
                    if (get.distance(player, target) <= player.countCards('he', { type: 'equip' }) + 1) return true;
                  }
                },
                ignoredHandcard(card, player) {
                  if (get.subtype(card) == 'equip1' || get.subtype(card) == 'equip2') {
                    return true;
                  }
                },
                cardDiscardable(card, player, name) {
                  if (name == 'phaseDiscard' && (get.subtype(card) == 'equip1' || get.subtype(card) == 'equip2')) return false;
                },
              },
              ai: {
                threaten: 0.25,
              },
            },
            hj_bm_jianwu: {
              //剑舞
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙尚香:2',
              trigger: {
                player: 'loseEnd',
              },
              filter(event, player) {
                for (var i = 0; i < event.cards2.length; i++) {
                  if (get.type(event.cards2[i], event.player) == 'equip') {
                    return true;
                  }
                }
                return false;
              },
              forced: true,
              content() {
                player.draw(2);
              },
            },
            hj_bm_jianying: {
              //剑影
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙尚香:2',
              enable: 'phaseUse',
              usable: 1,
              filter(event, player) {
                return player.countCards('he', { type: 'equip' }) > 0;
              },
              filterTarget: true,
              position: 'he',
              filterCard: {
                type: 'equip',
              },
              selectCard: 1,
              selectTarget: 1,
              check(card) {
                return 4 - get.value(card);
              },
              content() {
                'step 0';
                if (target.isDamaged()) event.goto(2);
                ('step 1');
                target.damage(1);
                event.goto(4);
                ('step 2');
                player.chooseControl('令' + get.translation(target) + '回复1点体力', '对' + get.translation(target) + '造成1点伤害').set('ai', function (event, player) {
                  if (get.attitude(player, event.target) >= 0) return '令' + get.translation(target) + '回复1点体力';
                  return '对' + get.translation(target) + '造成1点伤害';
                });
                ('step 3');
                if (result.control == '令' + get.translation(target) + '回复1点体力') {
                  target.recover(1);
                } else {
                  target.damage(1);
                }
                ('step 4');
              },
              ai: {
                expose: 0.4,
                threaten: 0.4,
                order: 1,
                result: {
                  target(player, target) {
                    if (get.attitude(player, target) < 0 && target.isMinHp()) return -1;
                    if (get.attitude(player, target) > 0 && target.isMinHp() && target.isDamaged()) return 1;
                    return 0;
                  },
                },
              },
            },
            hj_bm_yujian: {
              //御剑
              forceDie: true,
              enable: 'phaseUse',
              usable: 1,
              audio: 'ext:魂将/武将配音/兵谋篇/魂孙尚香:2',
              mark: true,
              marktext: '剑',
              init(player) {
                player.storage.hj_bm_yujian = false;
              },
              filter(event, player) {
                if (player.storage.hj_bm_yujian) return false;
                return player.countCards('he', { type: 'equip' }) < 1;
              },
              content() {
                'step 0';
                player.awakenSkill('hj_bm_yujian');
                ('step 1');
                var huode = [];
                while (huode.length < 4) {
                  var card = get.cardPile2(function (card) {
                    return !huode.includes(card) && get.type(card) == 'equip';
                  });
                  if (card) {
                    huode.push(card);
                  } else break;
                }
                if (huode.length) player.gain(huode, 'gain2');
              },
              intro: {
                name: '御剑',
                content: 'limited',
              },
              ai: {
                threaten: 0.2,
                order: 20,
                result: {
                  player: 1,
                },
              },
            },
            hj_bm_pojun: {
              //破军
              shaRelated: true,
              audio: 'ext:魂将/武将配音/兵谋篇/魂徐盛:2',
              trigger: {
                player: 'useCardToPlayered',
              },
              forced: true,
              filter(event, player) {
                return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
              },
              content() {
                'step 0';
                var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt('repojun', trigger.target));
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
                  target.addSkill('repojun2');
                  target.storage.repojun2.addArray(result.cards);
                  target.lose(result.cards, ui.special, 'toStorage');
                  game.log(target, '失去了' + get.cnNumber(result.cards.length) + '张牌');
                  target.markSkill('repojun2');
                }
              },
              ai: {
                unequip: true,
                directHit_ai: true,
                skillTagFilter(player, tag, arg) {
                  //QQQ
                  if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                  if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                  return false;
                },
              },
              group: 'repojun3',
            },
            hj_bm_tiebi: {
              //铁壁
              audio: 'ext:魂将/武将配音/兵谋篇/魂徐盛:2',
              group: ['hj_bm_tiebi_turn', 'hj_bm_tiebi_damage'],
              subSkill: {
                damage: {
                  trigger: {
                    source: 'damageBegin1',
                  },
                  forced: true,
                  filter(event, player) {
                    return event.notLink() && event.card && event.card.name == 'sha' && event.player.hp >= player.hp;
                  },
                  content() {
                    trigger.num++;
                  },
                },
                turn: {
                  trigger: {
                    player: 'turnOverBefore',
                  },
                  _priority: 20,
                  forced: true,
                  filter(event, player) {
                    return !player.isTurnedOver();
                  },
                  content() {
                    trigger.cancel();
                    game.log(player, '取消了翻面');
                  },
                },
              },
              mod: {
                globalFrom(from, to, distance) {
                  return distance - 1;
                },
              },
              ai: {
                noturn: true,
              },
            },
            hj_bm_danshou: {
              //胆守
              audio: 'ext:魂将/武将配音/兵谋篇/魂朱然:2',
              trigger: {
                target: 'useCardToBefore',
              },
              _priority: 7,
              filter(event, player) {
                return event.player != player && event.player.countCards('he');
              },
              check(event, player) {
                return get.attitude(player, event.player) <= 0;
              },
              content() {
                'step 0';
                player.discardPlayerCard('he', true, trigger.player);
                ('step 1');
                var card = result.cards[0];
                if (get.color(card) == 'black') player.draw();
                if (get.color(card) == 'red') trigger.cancel();
                if (get.type(card) == 'basic') player.gain(card, 'gain2');
                if (get.type(card) == 'delay' || get.type(card) == 'trick') trigger.player.damage();
                if (get.type(card) == 'equip') player.equip(card, true);
              },
              ai: {
                result: {
                  target: -2,
                  player: 1,
                },
              },
            },
            hj_jl_zhishi: {
              //治世
              audio: 'ext:魂将/武将配音/极略篇/魂曹操:2',
              enable: 'phaseUse',
              usable: 1,
              filterTarget(card, player, target) {
                return player != target;
              },
              content() {
                'step 0';
                target.chooseToDiscard('弃置一张基本牌,并回复一点体力.或受到一点伤害,该角色摸两张牌', { type: 'basic' }).ai = function (card) {
                  if (target.hp <= 1) return 10 - get.value(card);
                  if (get.damageEffect(target, player, player) > 0) return 0;
                  return 6 - get.value(card);
                };
                ('step 1');
                if (result.bool) {
                  target.recover();
                } else {
                  target.damage(player);
                  target.draw(2);
                }
              },
              ai: {
                order: 8,
                result: {
                  target(player, target) {
                    if (!target.hasSkillTag('maixie') && target.isDamaged() && target.hp > 1 && target.countCards('h') > 2) return 1;
                    if (target.hasSkillTag('maixie') && target.hp > 1) return get.damageEffect(target, player, player);
                    if (!target.countCards('h') && target.hp == 1) return -1;
                    return 0;
                  },
                },
              },
            },
            hj_jl_guixin: {
              //归心
              audio: 'ext:魂将/武将配音/极略篇/魂曹操:2',
              trigger: {
                player: 'damageEnd',
              },
              mod: {
                globalTo(from, to, distance) {
                  return distance + 1;
                },
              },
              check(event, player) {
                var num = game.countPlayer(function (current) {
                  if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                    return true;
                  }
                  if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                    return true;
                  }
                });
                return num >= 2;
              },
              content() {
                'step 0';
                var targets = game.filterPlayer();
                targets.remove(player);
                targets.sort(lib.sort.seat);
                event.targets = targets;
                event.num = 0;
                trigger.cancel();
                player.line(targets, 'green');
                ('step 1');
                if (num < event.targets.length) {
                  if (event.targets[num].countCards('hej')) {
                    player.gainPlayerCard(event.targets[num], 'hej', true);
                  }
                  event.num++;
                  event.redo();
                }
                ('step 2');
                var dn = game.dead.length;
                player.draw(dn);
                ('step 3');
                player.turnOver();
              },
              ai: {
                threaten(player, target) {
                  if (target.hp == 1) return 2.5;
                  return 1;
                },
              },
            },
            hj_jl_zhaoxiang: {
              //招降
              audio: 'ext:魂将/武将配音/极略篇/魂曹操:2',
              trigger: { global: 'shaBegin' },
              filter(event, player) {
                return event.player != player;
              },
              forced: true,
              content() {
                'step 0';
                if (get.distance(player, trigger.player, 'attack') <= 1) {
                  player.chooseBool('是否对' + get.translation(trigger.player) + '发动【招降】？').ai = function () {
                    return get.attitude(player, trigger.player) < -3;
                  };
                } else {
                  player.chooseToDiscard('是否弃置一张牌对' + get.translation(trigger.player) + '发动【招降】？').ai = function (card) {
                    if (player.countCards('h') > player.hp && get.attitude(player, trigger.player) < -3) {
                      return 6 - get.value(card);
                    }
                    return false;
                  };
                }
                ('step 1');
                if (result.bool) {
                  if (trigger.player.countCards('h')) {
                    trigger.player.chooseControl('令其获得你一张手牌', '此杀无效').ai = function () {
                      return 0;
                    };
                  } else {
                    trigger.untrigger();
                    trigger.finish();
                    event.finish();
                  }
                } else {
                  event.finish();
                }
                ('step 2');
                if (result.control == '令其获得你一张手牌') {
                  player.gainPlayerCard('h', trigger.player, true);
                } else {
                  trigger.untrigger();
                  trigger.finish();
                }
              },
              ai: {
                expose: 0.5,
              },
            },
            hj_jl_junwang: {
              //君望
              audio: 'ext:魂将/武将配音/极略篇/魂刘备:2',
              trigger: {
                global: 'phaseUseBegin',
              },
              forced: true,
              filter(event, player) {
                return event.player != player && event.player.countCards('h') >= player.countCards('h');
              },
              content() {
                'step 0';
                trigger.player.chooseCard('交给' + get.translation(player) + '一张手牌', true).ai = function (card) {
                  if (get.attitude(trigger.player, player) > 0) {
                    return get.value(card);
                  } else {
                    return -get.value(card);
                  }
                };
                ('step 1');
                if (result.cards?.length) {
                  player.gain(result.cards[0]);
                  trigger.player.$give(1, player);
                }
              },
            },
            hj_jl_jizhao: {
              //激诏
              audio: 'ext:魂将/武将配音/极略篇/魂刘备:2',
              enable: 'phaseUse',
              filterCard: true,
              selectCard: [1, Infinity],
              filter(event, player) {
                for (var i = 0; i < game.players.length; i++) {
                  if (!game.players[i].storage.hj_jl_jizhao) return true;
                }
                return false;
              },
              discard: false,
              prepare(cards, player, targets) {
                player.$give(cards.length, targets[0]);
              },
              filterTarget(card, player, target) {
                return !target.storage.hj_jl_jizhao && player != target;
              },
              content() {
                target.gain(cards);
                target.addTempSkill('hj_jl_jizhao_zhao', { player: 'phaseAfter' });
                target.storage.hj_jl_jizhao = true;
                target.storage.hj_jl_jizhao2 = player;
              },
              subSkill: {
                zhao: {
                  audio: 1,
                  trigger: {
                    player: 'phaseEnd',
                  },
                  mark: true,
                  marktext: '诏',
                  forced: true,
                  content() {
                    'step 0';
                    player.storage.hj_jl_jizhao = false;
                    if (!player.getStat('damage')) {
                      player.damage(player.storage.hj_jl_jizhao2);
                    }
                    ('step 1');
                    delete player.storage.hj_jl_jizhao2;
                  },
                  intro: {
                    content: 'mark',
                  },
                },
              },
            },
            hj_jl_longnu: {
              //龙怒
              audio: 'ext:魂将/武将配音/极略篇/魂刘备:2',
              usable: 2,
              enable: 'phaseUse',
              filter(event, player) {
                return player.countCards('h') > 0;
              },
              check(card) {
                return 7 - get.value(card);
              },
              filterCard: true,
              content() {
                'step 0';
                event.cards1 = get.cards(3);
                player.showCards(event.cards1);
                event.types = [];
                for (var i = 0; i < event.cards1.length; i++) {
                  event.types.add(get.type(event.cards1[i], 'trick'));
                }
                event.dialog = ui.create.dialog('弃置一张与' + get.translation(player) + '弃置的牌类别均不同的牌,让' + get.translation(player) + '获得' + get.translation(event.cards1) + '或受到来自' + get.translation(player) + '的1点伤害并获得其中1种类别的牌', 'hidden');
                event.dialog.classList.add('noselect');
                event.dialog.add(event.cards1);
                ('step 1');
                player.chooseTarget(function (card, player, target) {
                  return player != target;
                }, true).ai = function (target) {
                  return get.attitude(player, target) <= 0 ? Math.random() : -Math.random();
                };
                ('step 2');
                event.target = result.targets[0];
                player.line(event.target);
                event.target.chooseToDiscard(dialog, function (card) {
                  return !event.types.includes(get.type(card, 'trick'));
                }).ai = function (card) {
                  if (card.name == 'tao') return -1;
                  if (event.target.hp <= 2) return 7.1 - get.value(card);
                  if (event.target.isTurnedOver()) return -1;
                  return 7 - get.value(card);
                };
                ('step 3');
                if (result.bool) {
                  player.gain(event.cards1, 'gain2');
                  event.finish();
                  return;
                } else {
                  event.target.damage();
                  var dialog = ui.create.dialog('龙怒:选择一张的卡牌获得之', event.cards1);
                  if (event.target.isAlive()) {
                    event.target.chooseButton([1], dialog, true).filterButton = function (button) {
                      if (ui.selected.buttons.length == 0) return get.value(button.link);
                      for (var i = 0; i < ui.selected.buttons.length; i++) {
                        if (get.type(button.link) != get.type(ui.selected.buttons[i].link)) return false;
                      }
                      return true;
                    };
                  }
                }
                ('step 4');
                var cards2 = [];
                if (event.target.isAlive()) {
                  for (var i = 0; i < result.buttons.length; i++) {
                    cards2.push(result.buttons[i].link);
                    event.cards1.remove(result.buttons[i].link);
                  }
                  event.target.gain(cards2, 'gain2');
                }
                if (event.cards1.length) {
                  player.gain(event.cards1, 'gain2');
                }
              },
              ai: {
                order: 4,
                result: {
                  player: 1,
                },
              },
            },
            hj_jl_huju: {
              //虎踞
              audio: 'ext:魂将/武将配音/极略篇/魂孙权:2',
              trigger: {
                player: 'phaseBegin',
              },
              filter(event, player) {
                var num = player.countCards('h');
                for (var i = 0; i < game.players.length; i++) {
                  if (game.players[i].countCards('h') > num) return false;
                }
                return true;
              },
              forced: true,
              content() {
                'step 0';
                player
                  .chooseControl('选项一', '选项二', function () {
                    if (
                      player.hp == 1 &&
                      !player.countCards('h', function (card) {
                        return get.tag(card, 'recover');
                      })
                    ) {
                      return '选项二';
                    }
                    return '选项一';
                  })
                  .set('prompt', '虎踞<div class="text">1:失去1点体力.</div><div class="text">2:减1点体力上限,失去<虎踞>,获得<制衡>和<虎缚>.</div>')
                  .set('ai', function () {
                    if (game.countPlayer() > 3) return '选项一';
                    return '选项二';
                  });
                ('step 1');
                if (result.control == '选项一') {
                  player.loseHp();
                } else {
                  player.loseMaxHp();
                  player.removeSkill('hj_jl_huju');
                  player.removeSkill('hj_jl_huju_draw');
                  player.addSkill('hj_jl_zhiheng');
                  player.addSkill('hj_jl_hufu');
                }
              },
              group: ['hj_jl_huju_draw'],
              subSkill: {
                draw: {
                  audio: 2,
                  trigger: {
                    global: 'phaseBegin',
                  },
                  filter(event, player) {
                    return event.player != player;
                  },
                  forced: true,
                  content() {
                    player.draw();
                  },
                },
              },
            },
            hj_jl_zhiheng: {
              //制衡
              audio: 'ext:魂将/武将配音/极略篇/魂孙权:2',
              audioname: ['shen_caopi'],
              enable: 'phaseUse',
              usable: 1,
              position: 'he',
              filterCard: lib.filter.cardDiscardable,
              discard: false,
              lose: false,
              delay: false,
              selectCard: [1, Infinity],
              check(card) {
                var player = _status.event.player;
                if (
                  get.position(card) == 'h' &&
                  !player.countCards('h', 'du') &&
                  (player.hp > 2 ||
                    !player.countCards('h', function (card) {
                      return get.value(card) >= 8;
                    }))
                ) {
                  return 1;
                }
                return 6 - get.value(card);
              },
              content() {
                'step 0';
                player.discard(cards);
                event.num = 1;
                var hs = player.getCards('h');
                if (!hs.length) event.num = 0;
                for (var i = 0; i < hs.length; i++) {
                  if (!cards.includes(hs[i])) {
                    event.num = 0;
                    break;
                  }
                }
                ('step 1');
                player.draw(event.num + cards.length);
              },
              //group:'hj_jl_zhiheng_draw',
              subSkill: {
                draw: {
                  trigger: { player: 'loseEnd' },
                  silent: true,
                  filter(event, player) {
                    if (event.getParent(2).skill != 'hj_jl_zhiheng' && event.getParent(2).skill != 'jilue_zhiheng') return false;
                    if (player.countCards('h')) return false;
                    if (Array.isArray(event.cards))
                      for (var i of event.cards) {
                        if (i.original == 'h') return true;
                      }
                    return false;
                  },
                  content() {
                    player.addTempSkill('hj_jl_zhiheng_delay', trigger.getParent(2).skill + 'After');
                  },
                },
                delay: {},
              },
              ai: {
                order: 1,
                result: {
                  player: 1,
                },
                threaten: 1.55,
              },
            },
            hj_jl_hufu: {
              //虎缚
              audio: 'ext:魂将/武将配音/极略篇/魂孙权:2',
              enable: 'phaseUse',
              usable: 1,
              filterTarget(card, player, target) {
                return player != target && target.countCards('e');
              },
              content() {
                target.chooseToDiscard(target.countCards('e'), true, 'he');
              },
              ai: {
                expose: 0.3,
                order: 10,
                result: {
                  target(player, target) {
                    return -target.countCards('e');
                  },
                },
              },
            },
            hj_jl_xionglve: {
              //雄略
              audio: 'ext:魂将/武将配音/极略篇/魂孙权:2',
              marktext: '雄',
              trigger: {
                player: 'phaseDrawBegin',
              },
              check(event, player) {
                if (player.skipList.includes('phaseUse')) return 1;
                return player.storage.hj_jl_xionglve.length <= 3;
              },
              content() {
                'step 0';
                trigger.finish();
                trigger.untrigger();
                event.cards = get.cards(2);
                player.chooseCardButton(event.cards, true);
                ('step 1');
                if (result.links?.length) {
                  player.gain(result.links[0]);
                  player.$gain2(result.links[0]);
                  event.cards.remove(result.links[0]);
                  if (event.cards.length) {
                    player.lose(event.cards, ui.special);
                    player.storage.hj_jl_xionglve = player.storage.hj_jl_xionglve.concat(event.cards);
                    player.markSkill('hj_jl_xionglve');
                  }
                }
              },
              init(player) {
                player.storage.hj_jl_xionglve = [];
              },
              intro: {
                content: 'cards',
              },
              group: ['hj_jl_xionglve_x2'],
              subSkill: {
                x2: {
                  audio: 1,
                  enable: 'phaseUse',
                  delay: false,
                  forced: true,
                  gainable: false,
                  filter(event, player) {
                    return player.storage.hj_jl_xionglve.length;
                  },
                  createDialog(player, card) {
                    if (get.type(card, 'trick') == 'trick') {
                      var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
                      for (var i = 0; i < list.length; i++) {
                        list[i] = ['锦囊', '', list[i]];
                      }
                    } else {
                      var list = ['sha', 'shan', 'tao', 'jiu'];
                      for (var i = 0; i < list.length; i++) {
                        list[i] = ['basic', '', list[i]];
                      }
                    }
                    var dialog = ui.create.dialog([list, 'vcard']);
                    return dialog;
                  },
                  content() {
                    'step 0';
                    player.chooseCardButton('雄略', player.storage.hj_jl_xionglve).ai = function (button) {
                      var player = _status.event.player;
                      var type = get.type(button.link, 'trick');
                      var recover = 0,
                        lose = 1;
                      for (var i = 0; i < game.players.length; i++) {
                        if (!game.players[i].isOut()) {
                          if (game.players[i].hp < game.players[i].maxHp) {
                            if (get.attitude(player, game.players[i]) > 0) {
                              if (game.players[i].hp < 2) {
                                lose--;
                                recover += 0.5;
                              }
                              lose--;
                              recover++;
                            } else if (get.attitude(player, game.players[i]) < 0) {
                              if (game.players[i].hp < 2) {
                                lose++;
                                recover -= 0.5;
                              }
                              lose++;
                              recover--;
                            }
                          } else {
                            if (get.attitude(player, game.players[i]) > 0) {
                              lose--;
                            } else if (get.attitude(player, game.players[i]) < 0) {
                              lose++;
                            }
                          }
                        }
                      }
                      var equipTarget = false;
                      var shaTarget = false;
                      var shunTarget = false;
                      var chaiTarget = false;
                      for (var i = 0; i < game.players.length; i++) {
                        if (get.attitude(player, game.players[i]) > 0) {
                          if (player != game.players[i] && !game.players[i].getEquips(get.subtype(button.link))[0]) {
                            equipTarget = true;
                          }
                        }
                        if (player.canUse('shunshou', game.players[i]) && ai.get.effect(game.players[i], { name: 'shunshou' }, player)) {
                          shunTarget = true;
                        }
                        if (player.canUse('guohe', game.players[i]) && ai.get.effect(game.players[i], { name: 'guohe' }, player) >= 0) {
                          chaiTarget = true;
                        }
                        if (player.canUse('sha', game.players[i]) && ai.get.effect(game.players[i], { name: 'sha' }, player) > 0) {
                          shaTarget = true;
                        }
                      }
                      if (lose > recover && lose > 0) return type == 'trick' ? 1 : -1;
                      if (lose < recover && recover > 0) return type == 'trick' ? 1 : -1;
                      if (player.isDamaged()) return type == 'basic' ? 1 : -1;
                      if (shaTarget && player.countCards('h', 'sha') && !player.countCards('h', 'jiu')) return type == 'basic' ? 1 : -1;
                      if (equipTarget) return type == 'equip' ? 1 : -1;
                      if (shunTarget || chaiTarget) return type == 'trick' ? 1 : -1;
                      if (shaTarget && !player.countCards('h', 'sha')) return type == 'basic' ? 1 : -1;
                      return 0;
                    };
                    ('step 1');
                    if (result.links?.length) {
                      event.cards0 = result.links[0];
                      if (get.type(event.cards0) != 'equip') {
                        event.dialog = lib.skill.hj_jl_xionglve_x2.createDialog(player, event.cards0);
                        var next = player.chooseButton(event.dialog, true);
                        next.filterButton = function (button, player) {
                          return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                        };
                        next.ai = function (button) {
                          var player = _status.event.player;
                          var recover = 0,
                            lose = 1;
                          for (var i = 0; i < game.players.length; i++) {
                            if (!game.players[i].isOut()) {
                              if (game.players[i].hp < game.players[i].maxHp) {
                                if (get.attitude(player, game.players[i]) > 0) {
                                  if (game.players[i].hp < 2) {
                                    lose--;
                                    recover += 0.5;
                                  }
                                  lose--;
                                  recover++;
                                } else if (get.attitude(player, game.players[i]) < 0) {
                                  if (game.players[i].hp < 2) {
                                    lose++;
                                    recover -= 0.5;
                                  }
                                  lose++;
                                  recover--;
                                }
                              } else {
                                if (get.attitude(player, game.players[i]) > 0) {
                                  lose--;
                                } else if (get.attitude(player, game.players[i]) < 0) {
                                  lose++;
                                }
                              }
                            }
                          }
                          var shunTarget = false;
                          var chaiTarget = false;
                          var shaTarget = false;
                          for (var i = 0; i < game.players.length; i++) {
                            if (player.canUse('shunshou', game.players[i]) && ai.get.effect(game.players[i], { name: 'shunshou' }, player)) {
                              shunTarget = true;
                            }
                            if (player.canUse('guohe', game.players[i]) && ai.get.effect(game.players[i], { name: 'guohe' }, player) >= 0) {
                              chaiTarget = true;
                            }
                            if (player.canUse('sha', game.players[i]) && ai.get.effect(game.players[i], { name: 'sha' }, player) > 0) {
                              shaTarget = true;
                            }
                          }
                          if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
                          if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
                          if (shunTarget) return button.link[2] == 'shunshou' ? 1 : -1;
                          if (chaiTarget) return button.link[2] == 'guohe' ? 1 : -1;
                          if (player.isDamaged()) return button.link[2] == 'tao' ? 1 : -1;
                          if (shaTarget && player.countCards('h', 'sha') && !player.countCards('h', 'jiu')) return button.link[2] == 'jiu' ? 1 : -1;
                          if (shaTarget && !player.countCards('h', 'sha')) return button.link[2] == 'sha' ? 1 : -1;
                          return button.link[2] == 'sha' || button.link[2] == 'wuzhong' ? 1 : -1;
                        };
                      } else {
                        var next = (player.chooseTarget(function (card, player, target) {
                          return player != target && !target.getEquips(get.subtype(event.cards0));
                        }).at = function (target) {
                          return get.attitude(_status.event.player, target) + 10;
                        });
                        event.goto(3);
                      }
                    } else {
                      event.finish();
                    }
                    ('step 2');
                    if (result.bool) {
                      lib.skill.xl_backup.cards = event.cards0;
                      lib.skill.xl_backup.viewAs = { name: result.buttons[0].link[2] };
                      event.parent.parent.backup('xl_backup');
                      event.parent.parent.step = 0;
                      if (event.isMine()) {
                        event.parent.parent.openskilldialog = '将一张『略』当' + get.translation(result.buttons[0].link[2]) + '使用';
                      }
                      event.finish();
                    }
                    ('step 3');
                    if (result.bool) {
                      var card = event.cards0;
                      player.storage.hj_jl_xionglve.remove(card);
                      if (!player.storage.hj_jl_xionglve.length) {
                        player.unmarkSkill('hj_jl_xionglve');
                      }
                      player.$give(card, result.targets[0], false);
                      result.targets[0].equip(card);
                    }
                  },
                  chooseButton: {
                    dialog(event, player) {
                      return ui.create.dialog('雄略', player.storage.hj_jl_xionglve, 'hidden');
                    },
                    check(button) {
                      var player = _status.event.player;
                      var type = get.type(button.link, 'trick');
                      var recover = 0,
                        lose = 1;
                      for (var i = 0; i < game.players.length; i++) {
                        if (!game.players[i].isOut()) {
                          if (game.players[i].hp < game.players[i].maxHp) {
                            if (get.attitude(player, game.players[i]) > 0) {
                              if (game.players[i].hp < 2) {
                                lose--;
                                recover += 0.5;
                              }
                              lose--;
                              recover++;
                            } else if (get.attitude(player, game.players[i]) < 0) {
                              if (game.players[i].hp < 2) {
                                lose++;
                                recover -= 0.5;
                              }
                              lose++;
                              recover--;
                            }
                          } else {
                            if (get.attitude(player, game.players[i]) > 0) {
                              lose--;
                            } else if (get.attitude(player, game.players[i]) < 0) {
                              lose++;
                            }
                          }
                        }
                      }
                      var equipTarget = false;
                      var shaTarget = false;
                      var shunTarget = false;
                      var chaiTarget = false;
                      for (var i = 0; i < game.players.length; i++) {
                        if (get.attitude(player, game.players[i]) > 0) {
                          if (player != game.players[i] && !game.players[i].getEquips(get.subtype(button.link))[0] && get.attitude(player, game.players[i]) > 0) {
                            equipTarget = true;
                          }
                        }
                        if (player.canUse('shunshou', game.players[i]) && ai.get.effect(game.players[i], { name: 'shunshou' }, player)) {
                          shunTarget = true;
                        }
                        if (player.canUse('guohe', game.players[i]) && ai.get.effect(game.players[i], { name: 'guohe' }, player) >= 0) {
                          chaiTarget = true;
                        }
                        if (player.canUse('sha', game.players[i]) && ai.get.effect(game.players[i], { name: 'sha' }, player) > 0) {
                          shaTarget = true;
                        }
                      }
                      if (player.isDamaged()) return type == 'basic' ? 2 : -1;
                      if (shaTarget && player.countCards('h', 'sha') && !player.countCards('h', 'jiu')) return type == 'basic' ? 1 : -1;
                      if (lose > recover && lose > 0) return type == 'trick' ? 1 : -1;
                      if (lose < recover && recover > 0) return type == 'trick' ? 1 : -1;
                      if (equipTarget) return type == 'equip' ? 1 : -1;
                      if (shunTarget || chaiTarget) return type == 'trick' ? 1 : -1;
                      if (shaTarget && !player.countCards('h', 'sha')) return type == 'basic' ? 1 : -1;
                      return 0;
                    },
                    backup(links, player) {
                      if (get.type(links[0], 'trick') == 'trick') {
                        return {
                          cards: links,
                          chooseButton: {
                            dialog() {
                              var list = [];
                              for (var i in lib.card) {
                                if (!lib.translate[i + '_info']) continue;
                                if (!lib.card[i].content) continue;
                                if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                                if (lib.card[i].type == 'trick') list.push(['锦囊', '', i]);
                              }
                              return ui.create.dialog('雄略:请选择想要使用的锦囊牌', [list, 'vcard']);
                            },
                            filter(button, player) {
                              return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                            },
                            check(button) {
                              var player = _status.event.player;
                              var recover = 0,
                                lose = 1;
                              for (var i = 0; i < game.players.length; i++) {
                                if (!game.players[i].isOut()) {
                                  if (game.players[i].hp < game.players[i].maxHp) {
                                    if (get.attitude(player, game.players[i]) > 0) {
                                      if (game.players[i].hp < 2) {
                                        lose--;
                                        recover += 0.5;
                                      }
                                      lose--;
                                      recover++;
                                    } else if (get.attitude(player, game.players[i]) < 0) {
                                      if (game.players[i].hp < 2) {
                                        lose++;
                                        recover -= 0.5;
                                      }
                                      lose++;
                                      recover--;
                                    }
                                  } else {
                                    if (get.attitude(player, game.players[i]) > 0) {
                                      lose--;
                                    } else if (get.attitude(player, game.players[i]) < 0) {
                                      lose++;
                                    }
                                  }
                                }
                              }
                              var shunTarget = false;
                              var chaiTarget = false;
                              for (var i = 0; i < game.players.length; i++) {
                                if (player.canUse('shunshou', game.players[i]) && ai.get.effect(game.players[i], { name: 'shunshou' }, player)) {
                                  shunTarget = true;
                                }
                                if (player.canUse('guohe', game.players[i]) && ai.get.effect(game.players[i], { name: 'guohe' }, player) >= 0) {
                                  chaiTarget = true;
                                }
                              }
                              if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
                              if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
                              if (shunTarget) return button.link[2] == 'shunshou' ? 1 : -1;
                              if (chaiTarget) return button.link[2] == 'guohe' ? 1 : -1;
                              return button.link[2] == 'wuzhong' ? 1 : -1;
                            },
                            backup(links, player) {
                              return {
                                filterCard() {
                                  return false;
                                },
                                selectCard: -1,
                                popname: true,
                                viewAs: { name: links[0][2] },
                                onuse(result, player) {
                                  result.cards = lib.skill.hj_jl_xionglve_x2_backup.cards;
                                  var card = result.cards[0];
                                  player.storage.hj_jl_xionglve.remove(card);
                                  if (!player.storage.hj_jl_xionglve.length) {
                                    player.unmarkSkill('hj_jl_xionglve');
                                  } else {
                                    player.markSkill('hj_jl_xionglve');
                                  }
                                },
                              };
                            },
                            prompt(links, player) {
                              return '将一张雄略牌当' + get.translation(links[0][2]) + '使用';
                            },
                          },
                        };
                      } else if (get.type(links[0], 'trick') == 'basic') {
                        return {
                          cards: links,
                          chooseButton: {
                            dialog() {
                              var list = [];
                              for (var i in lib.card) {
                                if (!lib.translate[i + '_info']) continue;
                                if (!lib.card[i].content) continue;
                                if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                                if (lib.card[i].type == 'basic') list.push(['basic', '', i]);
                              }
                              return ui.create.dialog('雄略:请选择想要使用的基本牌', [list, 'vcard']);
                            },
                            filter(button, player) {
                              return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                            },
                            check(button) {
                              var player = _status.event.player;
                              var shaTarget = false;
                              for (var i = 0; i < game.players.length; i++) {
                                if (player.canUse('sha', game.players[i]) && ai.get.effect(game.players[i], { name: 'sha' }, player) > 0) {
                                  shaTarget = true;
                                }
                              }
                              if (player.isDamaged()) return button.link[2] == 'tao' ? 1 : -1;
                              if (shaTarget && player.countCards('h', 'sha') && !player.countCards('h', 'jiu')) return button.link[2] == 'jiu' ? 1 : -1;
                              if (shaTarget && !player.countCards('h', 'sha')) return button.link[2] == 'sha' ? 1 : -1;
                              return button.link[2] == 'sha' ? 1 : -1;
                            },
                            backup(links, player) {
                              return {
                                filterCard() {
                                  return false;
                                },
                                selectCard: -1,
                                audio: 1,
                                popname: true,
                                viewAs: { name: links[0][2] },
                                onuse(result, player) {
                                  result.cards = lib.skill.hj_jl_xionglve_x2_backup.cards;
                                  var card = result.cards[0];
                                  player.storage.hj_jl_xionglve.remove(card);
                                  if (!player.storage.hj_jl_xionglve.length) {
                                    player.unmarkSkill('hj_jl_xionglve');
                                  } else {
                                    player.markSkill('hj_jl_xionglve');
                                  }
                                },
                              };
                            },
                            prompt(links, player) {
                              return '将一张雄略牌当' + get.translation(links[0][2]) + '使用';
                            },
                          },
                        };
                      } else {
                        return {
                          forced: true,
                          cards: links,
                          filterTarget(card, player, target) {
                            var cards = lib.skill.hj_jl_xionglve_x2_backup.cards;
                            return player != target && !target.getEquips(get.subtype(cards[0]));
                          },
                          filterCard() {
                            return false;
                          },
                          selectCard: -1,
                          prepare(cards, player, targets) {
                            var cards = lib.skill.hj_jl_xionglve_x2_backup.cards;
                            player.$give(cards[0], targets[0], false);
                          },
                          ai2(target) {
                            return get.attitude(_status.event.player, target) + 10;
                          },
                          content() {
                            event.cards = lib.skill.hj_jl_xionglve_x2_backup.cards;
                            var card = event.cards[0];
                            player.storage.hj_jl_xionglve.remove(card);
                            if (!player.storage.hj_jl_xionglve.length) {
                              player.unmarkSkill('hj_jl_xionglve');
                            } else {
                              player.markSkill('hj_jl_xionglve');
                            }
                            target.equip(card);
                          },
                        };
                      }
                    },
                  },
                  ai: {
                    order: 6,
                    result: {
                      player(player) {
                        if (player.hp <= 2) return 3;
                        return player.storage.hj_jl_xionglve.length - 1;
                      },
                    },
                  },
                },
              },
            },
            hj_jl_dianjie: {
              //电界
              audio: 'ext:魂将/武将配音/极略篇/魂张角:2',
              trigger: { player: ['phaseDrawBefore', 'phaseUseBefore'] },
              prompt(event, player) {
                if (event.name == 'phaseDraw') {
                  return '是否发动【电界】跳过摸牌阶段？';
                }
                return '是否发动【电界】跳过出牌阶段？';
              },
              check(event, player) {
                if (event.name == 'phaseDraw') {
                  if (player.countCards('h') <= 1 || player.hp == 1) return -1;
                } else {
                  if (
                    player.countCards('h', function (card) {
                      return get.value(card) > 7;
                    })
                  )
                    return -1;
                  if (player.countCards('h') - player.hp >= 3) return -1;
                }
                return 1;
              },
              content() {
                'step 0';
                trigger.finish();
                trigger.untrigger();
                player.judge(function (card) {
                  return get.color(card) == 'black' ? 1.5 : -1;
                });
                ('step 1');
                if (result.bool) {
                  player.chooseTarget('选择一个目标对其造成2点雷电伤害').ai = function (target) {
                    // if (player.hp == 1) return target == player ? 1 : -1;
                    return get.damageEffect(target, player, player, 'thunder');
                  };
                } else {
                  player.chooseTarget('选择一至两个目标将其横置', [1, 2], function (card, player, target) {
                    return !target.isLinked();
                  }).ai = function (target) {
                    return -get.attitude(player, target);
                  };
                  event.goto(3);
                }
                ('step 2');
                if (result.targets?.length) {
                  player.line(result.targets[0], 'thunder');
                  result.targets[0].damage('thunder', 2);
                }
                event.finish();
                ('step 3');
                if (result.targets?.length) {
                  player.line(result.targets, 'thunder');
                  for (var i = 0; i < result.targets.length; i++) {
                    result.targets[i].link();
                  }
                }
              },
            },
            hj_jl_shendao: {
              //神道
              audio: 'ext:魂将/武将配音/极略篇/魂张角:2',
              trigger: { global: 'judge' },
              forced: true,
              content() {
                'step 0';
                player.chooseTarget(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否发动【神道】？', function (card, player, target) {
                  if (target == player) return target.countCards('hej');
                  return target.countCards('ej');
                }).ai = function (target) {
                  return player == target;
                };
                ('step 1');
                if (result.targets?.length) {
                  event.target = result.targets[0];
                  if (result.targets[0] == player) {
                    player
                      .chooseCard('请选择改判牌', 'hej')
                      .set('ai', function (card) {
                        var trigger = _status.event.getTrigger();
                        var player = _status.event.player;
                        var judging = _status.event.judging;
                        var result = trigger.judge(card) - trigger.judge(judging);
                        var attitude = get.attitude(player, trigger.player);
                        if (attitude == 0 || result == 0) return 0;
                        if (attitude > 0) {
                          return result - get.value(card) / 2;
                        } else {
                          return -result - get.value(card) / 2;
                        }
                      })
                      .set('judging', trigger.player.judging[0]);
                  } else {
                    player
                      .choosePlayerCard('请选择改判牌', result.targets[0], 'ej')
                      .set('ai', function (button) {
                        var trigger = _status.event.getTrigger();
                        var player = _status.event.player;
                        var judging = _status.event.judging;
                        var result = trigger.judge(button) - trigger.judge(judging);
                        var attitude = get.attitude(player, trigger.player);
                        if (attitude == 0 || result == 0) return 0;
                        if (attitude > 0) {
                          return result - get.value(button) / 2;
                        } else {
                          return -result - get.value(button) / 2;
                        }
                      })
                      .set('judging', trigger.player.judging[0]);
                  }
                }
                ('step 2');
                if (result.links?.length) {
                  event.cardx = result.cards[0] || result.links[0];
                  if (event.target != player) {
                    event.target.$throw(event.cardx);
                    event.target.lose(event.cardx, ui.ordering, 'visible').relatedEvent = trigger;
                    game.broadcastAll(function (card) {
                      if (card.clone) {
                        card.clone.classList.add('thrownhighlight');
                      }
                    }, event.cardx);
                  } else {
                    player.respond(event.cardx, 'highlight', event.name, 'noOrdering');
                  }
                } else {
                  event.finish();
                }
                ('step 3');
                player.gain(trigger.player.judging[0], 'gain2');
                trigger.player.judging[0] = event.cardx;
                trigger.orderingCards.add(event.cardx);
                game.log(trigger.player, '的判定牌改为', event.cardx);
                ('step 4');
              },
              ai: {
                tag: {
                  rejudge: 1,
                },
              },
            },
            hj_jl_leihun: {
              //雷魂
              audio: 'ext:魂将/武将配音/极略篇/魂张角:2',
              trigger: {
                player: 'damageBegin',
              },
              forced: true,
              filter(event, player) {
                if (event.nature == 'thunder') return true;
              },
              content() {
                trigger.untrigger();
                trigger.finish();
                player.recover(trigger.num);
                player.draw(1);
              },
              ai: {
                nothunder: true,
                effect: {
                  target(card, player, target, current) {
                    if (get.tag(card, 'thunderDamage')) return [0, 2];
                  },
                },
              },
            },
            hj_jl_tianji: {
              //天机
              audio: 'ext:魂将/武将配音/极略篇/魂郭嘉:2',
              trigger: {
                global: 'phaseUseBegin',
              },
              forced: true,
              init(player) {
                player.storage.pd = undefined;
              },
              content() {
                'step 0';
                var nh = player.countCards('h');
                var num = 0;
                for (var i = 0; i < game.players.length; i++) {
                  var np = game.players[i].countCards('h');
                  if (np > nh) num++;
                }
                var cards = [];
                cards.push(ui.cardPile.firstChild);
                event.cards = cards;
                var dialog = ui.create.dialog('天机', event.cards, 'hidden');
                dialog.classList.add('noselect');
                if (num > 0) {
                  player.chooseControl('获得', '替换', 'cancel', dialog).ai = function () {
                    return '获得';
                  };
                } else {
                  player.chooseControl('替换', 'cancel', dialog).ai = function () {
                    if (_status.currentPhase !== player) {
                      if (get.type(cards[0]) == 'basic' && player.countCards('h', { type: 'basic' }) < player.countCards('h') / 2) return '替换';
                      if (get.type(cards[0]) != 'basic') return '替换';
                    }
                    if (_status.currentPhase == player) {
                      if (get.type(cards[0]) == 'trick' && player.hp <= player.maxHp / 2) return '替换';
                      if (get.type(cards[0]) == 'basic' && player.hp > player.maxHp / 2 && player.countCards('h', { type: 'trick' })) return '替换';
                      if (get.type(cards[0]) == 'equip' && player.countCards('e') < 4) return '替换';
                    }
                    if (get.type(cards[0]) == 'basic') player.storage.pd = 'basic';
                    else player.storage.pd = 'trick';
                    return 'cancel';
                  };
                }
                ('step 1');
                if (result.control == '获得') {
                  player.gain(event.cards, 'draw');
                  event.finish();
                } else if (result.control == '替换') {
                  player.chooseCard('选择一张牌置于牌堆顶', 'h', true).ai = function (card) {
                    if (_status.currentPhase == player) {
                      if (player.hp <= player.maxHp / 2 && player.countCards('h', { type: 'basic' })) {
                        return get.type(card) == 'basic';
                      }
                      if (player.hp > player.maxHp / 2 && player.countCards('h', { type: 'trick' })) {
                        return get.type(card) == 'trick';
                      }
                    } else {
                      return 15 - get.value(card);
                    }
                  };
                } else {
                  event.finish();
                }
                ('step 2');
                event.card = result.cards[0];
                if (get.type(result.cards[0]) == 'basic') {
                  player.storage.pd = 'basic';
                } else {
                  player.storage.pd = 'trick';
                }
                player.lose(result.cards, ui.special);
                var cardx = ui.create.card();
                cardx.classList.add('infohidden');
                cardx.classList.add('infoflip');
                player.$throw(cardx, 1000);
                ('step 3');
                ('step 4');
                if (event.card) {
                  event.card.fix();
                  ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                  player.gain(event.cards, 'draw');
                }
              },
            },
            hj_jl_tianqi: {
              //天启
              audio: 'ext:魂将/武将配音/极略篇/魂郭嘉:2',
              usable: 1,
              enable: 'phaseUse',
              chooseButton: {
                dialog() {
                  var list = ['sha', 'shan', 'tao', 'jiu'];
                  for (var i = 0; i < list.length; i++) {
                    list[i] = ['basic', '', list[i]];
                  }
                  var list2 = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
                  for (var i = 0; i < list2.length; i++) {
                    list2[i] = ['trick', '', list2[i]];
                  }
                  var dialog = ui.create.dialog();
                  dialog.add('基本牌');
                  dialog.add([list, 'vcard']);
                  dialog.add('锦囊牌');
                  dialog.add([list2, 'vcard']);
                  return dialog;
                },
                filter(button, player) {
                  return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                },
                check(button, player) {
                  var player = _status.event.player;
                  var recover = 0,
                    lose = 1;
                  if (player.storage.hj_jl_tianji_top != get.type(ui.cardPile.firstChild)) delete player.storage.hj_jl_tianji_top;
                  for (var i = 0; i < game.players.length; i++) {
                    if (!game.players[i].isOut()) {
                      if (game.players[i].hp < game.players[i].maxHp) {
                        if (get.attitude(player, game.players[i]) > 0) {
                          if (game.players[i].hp < 2) {
                            lose--;
                            recover += 0.5;
                          }
                          lose--;
                          recover++;
                        } else if (get.attitude(player, game.players[i]) < 0) {
                          if (game.players[i].hp < 2) {
                            lose++;
                            recover -= 0.5;
                          }
                          lose++;
                          recover--;
                        }
                      } else {
                        if (get.attitude(player, game.players[i]) > 0) {
                          lose--;
                        } else if (get.attitude(player, game.players[i]) < 0) {
                          lose++;
                        }
                      }
                    }
                  }
                  if (lose > recover && lose > 0 && player.storage.hj_jl_tianji_top == 'trick') return button.link[2] == 'wanjian' ? 1 : -1;
                  if (lose < recover && recover > 0 && player.storage.hj_jl_tianji_top == 'trick') return button.link[2] == 'taoyuan' ? 1 : -1;
                  if (player.storage.hj_jl_tianji_top == 'basic' && player.isDamaged()) return button.link[2] == 'tao' ? 1 : -1;
                  if (player.storage.hj_jl_tianji_top == 'basic' && player.countCards('h', 'sha')) return button.link[2] == 'jiu' ? 1 : -1;
                  if (player.storage.hj_jl_tianji_top == 'basic' && !player.countCards('h', 'sha')) return button.link[2] == 'sha' ? 1 : -1;
                  if (player.storage.hj_jl_tianji_top == 'trick') return button.link[2] == 'wuzhong' ? 1 : -1;
                  if (game.players.length < 4 && player.storage.hj_jl_tianji_top == 'trick') return button.link[2] == 'shunshou' ? 1 : -1;
                  return button.link[2] == 'guohe' ? 1 : -1;
                },
                backup(links, player) {
                  return {
                    filterCard() {
                      return false;
                    },
                    selectCard: -1,
                    popname: true,
                    viewAs: { name: links[0][2] },
                    onuse(result, player) {
                      game.log(player, '声明了' + get.translation(links[0][0]) + '牌');
                      var cards = get.cards();
                      player.showCards(cards);
                      result.cards = cards;
                      if (get.type(cards[0], 'trick') != links[0][0]) {
                        player.loseHp();
                      }
                      delete player.storage.hj_jl_tianji_top;
                    },
                  };
                },
                prompt(links, player) {
                  return '亮出牌堆顶的一张牌,并将此牌当' + get.translation(links[0][2]) + '使用.若亮出的牌不为' + get.translation(links[0][0]) + '牌,你须先失去1点体力.(你的出牌阶段限一次.)';
                },
              },
              group: ['hj_jl_tianqi2', 'hj_jl_tianqi3', 'hj_jl_tianqi4', 'hj_jl_tianqi5'],
              ai: {
                order: 10,
                result: {
                  player(player) {
                    if (player.storage.hj_jl_tianji_top != undefined) return 1;
                    if (player.storage.hj_jl_tianji_top == undefined) return -10;
                    return -1;
                  },
                },
                threaten: 4,
              },
            },
            hj_jl_tianqi2: {
              //天启
              enable: 'chooseToUse',
              audio: 'hj_jl_tianqi',
              filter(event, player) {
                return _status.event.dying != player && event.parent.name != 'phaseUse';
              },
              filterCard() {
                return false;
              },
              selectCard: -1,
              viewAs: {
                name: 'tao',
              },
              check(card, event) {
                var player = _status.event.player;
                if (player.storage.hj_jl_tianji_top == 'basic') return 1;
                if (player.countCards('h', 'tao')) return 0;
                return player.hp - 1;
              },
              onuse(result, player) {
                var cards = get.cards();
                player.showCards(cards);
                result.cards = cards;
                if (get.type(cards[0], 'trick') != 'basic') {
                  player.loseHp();
                }
                delete player.storage.hj_jl_tianji_top;
              },
              ai: {
                result: {
                  player(player) {
                    if (player.storage.hj_jl_tianji_top != 'basic') return -1;
                    return -0.5;
                  },
                  target(player, target) {
                    return get.effect(target, { name: 'tao' }, player, player);
                  },
                  target_use(player, target) {
                    // if(player==target&&player.hp<=0) return 2;
                    if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                    var nd = player.needsToDiscard();
                    var keep = false;
                    if (nd <= 0) {
                      keep = true;
                    } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                      keep = true;
                    }
                    var mode = get.mode();
                    if (target.hp >= 2 && keep && target.hasFriend()) {
                      if (target.hp > 2 || nd == 0) return 0;
                      if (target.hp == 2) {
                        if (
                          game.hasPlayer(function (current) {
                            if (target != current && get.attitude(target, current) >= 3) {
                              if (current.hp <= 1) return true;
                              if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                            }
                          })
                        ) {
                          return 0;
                        }
                      }
                    }
                    if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                    var att = get.attitude(player, target);
                    if (att < 3 && att >= 0 && player != target) return 0;
                    var tri = _status.event.getTrigger();
                    if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                      if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                        var num = game.countPlayer(function (current) {
                          if (current.identity == 'fan') {
                            return current.countCards('h', 'tao');
                          }
                        });
                        if (num > 1 && player == target) return 2;
                        return 0;
                      }
                    }
                    if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                      if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                        return 0;
                      }
                    }
                    if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                      return 0;
                    }
                    return 2;
                  },
                },
                skillTagFilter(player) {
                  return _status.dying != player;
                },
                threaten: 1.5,
                save: true,
                basic: {
                  order(card, player) {
                    if (player.hasSkillTag('pretao')) return 5;
                    return 2;
                  },
                  useful: [8, 6.5, 5, 4],
                  value: [8, 6.5, 5, 4],
                },
                tag: {
                  recover: 1,
                  save: 1,
                },
              },
            },
            hj_jl_tianqi3: {
              //天启
              enable: ['chooseToUse', 'chooseToRespond'],
              audio: 'hj_jl_tianqi',
              filter(event, player) {
                return _status.event.dying != player && event.parent.name != 'phaseUse';
              },
              filterCard() {
                return false;
              },
              selectCard: -1,
              check(card, event) {
                var player = _status.event.player;
                if (player.storage.hj_jl_tianji_top == 'basic') return 1;
                if (player.countCards('h', 'sha')) return 0;
                return 1;
              },
              viewAs: {
                name: 'sha',
              },
              onuse(result, player) {
                var cards = get.cards();
                player.showCards(cards);
                result.cards = cards;
                if (get.type(cards[0], 'trick') != 'basic') {
                  player.loseHp();
                }
                delete player.storage.hj_jl_tianji_top;
              },
              onrespond(result, player) {
                var cards = get.cards();
                player.showCards(cards);
                result.cards = cards;
                if (get.type(cards[0], 'trick') != 'basic') {
                  player.loseHp();
                }
                delete player.storage.hj_jl_tianji_top;
              },
              ai: {
                skillTagFilter(player) {
                  return _status.dying != player;
                },
                respondSha: true,
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
                  ) {
                    return false;
                  }
                  if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                  return true;
                },
                basic: {
                  useful: [5, 1],
                  value: [5, 1],
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
                    ) {
                      return 3.1;
                    }
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
                    ) {
                      return eff / 1.2;
                    }
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
            hj_jl_tianqi4: {
              //天启
              enable: 'chooseToUse',
              audio: 'hj_jl_tianqi',
              filter(event, player) {
                return _status.event.dying != player && event.parent.name != 'phaseUse';
              },
              filterCard() {
                return false;
              },
              ai2(target) {
                var player = _status.event.player;
                if (player.storage.pd == 'trick') return 1;
                if (player.hp == 1 && player.storage.pd != 'trick') return 0;
                if (get.attitude(player, _status.currentPhase) >= 2) {
                  if (_status.currentPhase.hasJudge('lebu') || _status.currentPhase.hasJudge('bingliang')) {
                    return 10;
                  }
                  return 0;
                }
                if (player.hp <= 2 && !player.countCards('h', 'tao')) return 0;
                return 1;
              },
              selectCard: -1,
              viewAs: {
                name: 'wuxie',
              },
              viewAsFilter(player) {
                return _status.dying != player;
              },
              onuse(result, player) {
                var cards = get.cards();
                player.showCards(cards);
                result.cards = cards;
                if (get.type(cards[0], 'trick') != 'trick') {
                  player.loseHp();
                }
                delete player.storage.hj_jl_tianji_top;
              },
              ai: {
                basic: {
                  useful: [6, 4],
                  value: [6, 4],
                },
                result: {
                  player: 1,
                },
                expose: 0.2,
              },
            },
            hj_jl_tianqi5: {
              //天启
              enable: ['chooseToUse', 'chooseToRespond'],
              audio: 'hj_jl_tianqi',
              filter(event, player) {
                return _status.event.dying != player && event.parent.name != 'phaseUse';
              },
              filterCard() {
                return false;
              },
              selectCard: -1,
              check(card, event) {
                var player = _status.event.player;
                if (player.storage.pd == 'basic') return 1;
                if (player.countCards('h', 'shan')) return 0;
                return 1;
              },
              viewAs: {
                name: 'shan',
              },
              onuse(result, player) {
                var cards = get.cards();
                player.showCards(cards);
                result.cards = cards;
                if (get.type(cards[0], 'trick') != 'basic') {
                  player.loseHp();
                }
                delete player.storage.hj_jl_tianji_top;
              },
              onrespond(result, player) {
                var cards = get.cards();
                player.showCards(cards);
                result.cards = cards;
                if (get.type(cards[0], 'trick') != 'basic') {
                  player.loseHp();
                }
                delete player.storage.hj_jl_tianji_top;
              },
              ai: {
                skillTagFilter(player) {
                  return _status.dying != player;
                },
                respondShan: true,
                order: 3,
                basic: {
                  useful: [7, 2],
                  value: [7, 2],
                },
                result: {
                  player: 1,
                },
              },
            },
            hj_jl_choumou: {
              //筹谋
              audio: 'ext:魂将/武将配音/极略篇/魂郭嘉:2',
              srlose: true,
              trigger: { player: 'phaseZhunbeiBegin' },
              filter(event, player) {
                return player.countDiscardableCards(player, 'h');
              },
              forced: true,
              content() {
                'step 0';
                var check = player.canMoveCard(true);
                var next = player.chooseToDiscard('是否弃置一张手牌发动【筹谋】？');
                next.set('ai', function (card) {
                  if (check) {
                    return 8 - get.value(card);
                  }
                  return 4 - get.value(card);
                });
                ('step 1');
                if (result.bool) {
                  player.judge(function (card) {
                    if (get.color(card) == 'red') return player.canMoveCard(true) ? 1.5 : 0;
                    return 1;
                  });
                } else {
                  event.finish();
                }
                ('step 2');
                if (result.color) {
                  event.result = result.color;
                  if (result.color == 'red') {
                    player.moveCard();
                    event.finish();
                  } else {
                    player.chooseTarget('选择一名目标对其造成1点伤害,摸一张牌', true).ai = function (target) {
                      return get.damageEffect(target, player, player) + 2;
                    };
                  }
                }
                ('step 3');
                if (result.targets?.length) {
                  player.line(result.targets[0]);
                  result.targets[0].damage(player);
                  player.draw();
                }
                // player.line2(result.targets);
                // event.targets = result.targets;
              },
            },
            hj_jl_qizuo: {
              //奇佐
              audio: 'ext:魂将/武将配音/极略篇/魂郭嘉:2',
              trigger: {
                player: 'useCardAfter',
              },
              filter(event, player) {
                if (event.parent.name == 'hj_jl_qizuo') return false;
                if (!event.targets || !event.card) return false;
                if (event.card && event.card.name == 'wuxie') return false;
                var type = get.type(event.card);
                if (type != 'trick') return false;
                var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                var targets = event._targets || event.targets;
                for (var i = 0; i < targets.length; i++) {
                  if (!targets[i].isIn()) return false;
                  if (!player.canUse({ name: event.card.name }, targets[i], false, false)) {
                    return false;
                  }
                }
                return true;
              },
              check(event, player) {
                if (event.card.name == 'tiesuo') return false;
                return true;
              },
              content() {
                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                player.useCard(card, (trigger._targets || trigger.targets).slice(0));
              },
              ai: {
                threaten: 1.3,
              },
            },
            hj_jl_tiandu: {
              //天妒
              audio: 'ext:魂将/武将配音/极略篇/魂戏志才:2',
              audioname: ['re_guojia', 'xizhicai', 'gz_nagisa'],
              trigger: { player: 'judgeEnd' },
              preHidden: true,
              frequent(event) {
                if (event.result.card.name == 'du') return false;
                //if(get.mode()=='guozhan') return false;
                return true;
              },
              check(event) {
                if (event.result.card.name == 'du') return false;
                return true;
              },
              filter(event, player) {
                return get.position(event.result.card, true) == 'o';
              },
              content() {
                player.gain(trigger.result.card, 'gain2');
              },
            },
            hj_jl_tiance: {
              //天策
              audio: 'ext:魂将/武将配音/极略篇/魂戏志才:2',
              trigger: { player: 'phaseZhunbeiBegin' },
              forced: true,
              content() {
                'step 0';
                if (event.target) return;
                player.chooseTarget(get.prompt2('hj_jl_tiance'));
                ('step 1');
                if (!event.target) {
                  if (!result.bool) {
                    event.finish();
                    return;
                  }
                  event.target = result.targets[0];
                }
                event.target.judge();
                ('step 2');
                event.result = result;
                if (!result.suit) return;
                player
                  .chooseControl('牌堆', '弃牌堆', '角色')
                  .set('ai', function () {
                    return Math.floor(Math.random() * 3);
                  })
                  .set('prompt', `请选择${get.translation(event.target)}获得牌的区域`);
                ('step 3');
                game.log(player, '选择了', result.control);
                if (result.control == '弃牌堆') {
                  var validCards = Array.from(ui.discardPile.childNodes).filter((c) => c.suit === event.result.suit);
                  if (validCards.length) {
                    var cards = validCards.randomGets(2);
                    event.target.gain(cards, 'gain2');
                  }
                } else if (result.control == '角色') {
                  var target = game.filterPlayer((p) => p != event.target && p.countCards('he', (c) => c.suit == event.result.suit)).randomGet();
                  if (target) {
                    var cards = target.getCards('he', (c) => c.suit == event.result.suit).randomGets(2);
                    event.target.gain(target, cards, 'give');
                  }
                } else {
                  var validCards = Array.from(ui.cardPile.childNodes).filter((c) => c.suit === event.result.suit);
                  if (validCards.length) {
                    var cards = validCards.randomGets(2);
                    event.target.gain(cards, 'gain2');
                  }
                }
              },
            },
            hj_jl_jiexin: {
              //竭心
              audio: 'ext:魂将/武将配音/极略篇/魂戏志才:2',
              trigger: { player: 'damageEnd' },
              forced: true,
              content() {
                'step 0';
                player.chooseTarget(get.prompt2(event.name));
                ('step 1');
                if (!result.bool) {
                  event.finish();
                  return;
                }
                var target = result.targets[0];
                var next = game.createEvent('hj_jl_jiexin_tiance');
                next.player = player;
                next.target = target;
                next.setContent(lib.skill.hj_jl_tiance.content);
                ('step 2');
                if (result.color && trigger.card && result.color === get.color(trigger.card)) {
                  player.chooseTarget('是否再次发动【天策】？');
                } else {
                  event.finish();
                }
                ('step 3');
                if (!result.bool) {
                  event.finish();
                  return;
                }
                var target = result.targets[0];
                var next = game.createEvent('hj_jl_jiexin_tiance');
                next.player = player;
                next.target = target;
                next.setContent(lib.skill.hj_jl_tiance.content);
              },
              ai: {
                maixie: true,
                maixie_hp: true,
                effect: {
                  target(card, player, target) {
                    if (get.tag(card, 'damage')) {
                      if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                      if (!target.hasFriend()) return;
                      if (target.hp >= 4) return [1, get.tag(card, 'damage') * 1.5];
                      if (target.hp == 3) return [1, get.tag(card, 'damage') * 1];
                      if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                    }
                  },
                },
              },
            },
            hj_jl_xianfu: {
              //先辅
              trigger: {
                global: 'phaseBefore',
                player: 'enterGame',
              },
              forced: true,
              filter(event, player) {
                return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0);
              },
              audio: 'ext:魂将/武将配音/极略篇/魂戏志才:2',
              content() {
                'step 0';
                player
                  .chooseTarget('请选择【先辅】的目标', lib.translate.hj_jl_xianfu_info, true, function (card, player, target) {
                    return target != player && (!player.storage.hj_jl_xianfu2 || !player.storage.hj_jl_xianfu2.includes(target));
                  })
                  .set('ai', function (target) {
                    var att = get.attitude(_status.event.player, target);
                    if (att > 0) return att + 1;
                    if (att == 0) return Math.random();
                    return att;
                  }).animate = false;
                ('step 1');
                if (result.targets?.length) {
                  var target = result.targets[0];
                  if (!player.storage.hj_jl_xianfu2) player.storage.hj_jl_xianfu2 = [];
                  player.storage.hj_jl_xianfu2.push(target);
                  player.addSkill('hj_jl_xianfu2');
                }
              },
            },
            hj_jl_xianfu_mark: {
              marktext: '辅',
              intro: {
                name: '先辅',
                content: '当你受到伤害后,$受到等量的伤害,当你回复体力后,$回复等量的体力',
              },
            },
            hj_jl_xianfu2: {
              audio: 'hj_jl_xianfu',
              charlotte: true,
              trigger: { global: ['damageEnd', 'recoverEnd'] },
              forced: true,
              filter(event, player) {
                if (event.player.isDead() || !player.storage.hj_jl_xianfu2 || !player.storage.hj_jl_xianfu2.includes(event.player) || event.num <= 0) return false;
                if (event.name == 'damage') return true;
                return player.isDamaged();
              },
              logTarget: 'player',
              content() {
                'step 0';
                var target = trigger.player;
                if (!target.storage.hj_jl_xianfu_mark) target.storage.hj_jl_xianfu_mark = [];
                target.storage.hj_jl_xianfu_mark.add(player);
                target.storage.hj_jl_xianfu_mark.sortBySeat();
                target.markSkill('hj_jl_xianfu_mark');
                ('step 1');
                player[trigger.name](trigger.num, 'nosource');
              },
              onremove(player) {
                if (!player.storage.hj_jl_xianfu2) return;
                game.countPlayer(function (current) {
                  if (player.storage.hj_jl_xianfu2.includes(current) && current.storage.hj_jl_xianfu_mark) {
                    current.storage.hj_jl_xianfu_mark.remove(player);
                    if (!current.storage.hj_jl_xianfu_mark.length) current.unmarkSkill('xianfu_mark');
                    else current.markSkill('hj_jl_xianfu_mark');
                  }
                });
                delete player.storage.hj_jl_xianfu2;
              },
              group: 'hj_jl_xianfu3',
            },
            hj_jl_xianfu3: {
              trigger: { global: 'dieBegin' },
              silent: true,
              filter(event, player) {
                return event.player == player || (player.storage.hj_jl_xianfu2 && player.storage.hj_jl_xianfu2.includes(player));
              },
              content() {
                if (player == trigger.player) lib.skill.hj_jl_xianfu2.onremove(player);
                else player.storage.hj_jl_xianfu2.remove(event.player);
              },
            },
            hj_jl_quhu: {
              //驱虎
              audio: 'ext:魂将/武将配音/极略篇/魂荀彧:2',
              audioname: ['re_xunyu'],
              enable: 'phaseUse',
              usable: 1,
              filter(event, player) {
                if (player.countCards('h') == 0) return false;
                return game.hasPlayer(function (current) {
                  return current.hp > player.hp && current.countCards('h');
                });
              },
              filterTarget(card, player, target) {
                return target.hp > player.hp && player.canCompare(target);
              },
              content() {
                'step 0';
                player.chooseToCompare(target);
                ('step 1');
                if (result.bool) {
                  if (
                    game.hasPlayer(function (player) {
                      return player != target && target.inRange(player);
                    })
                  ) {
                    player
                      .chooseTarget(function (card, player, target) {
                        var source = _status.event.source;
                        return target != source && source.inRange(target);
                      }, true)
                      .set('ai', function (target) {
                        return get.damageEffect(target, _status.event.source, player);
                      })
                      .set('source', target);
                  } else {
                    event.finish();
                  }
                } else {
                  player.damage(target);
                  event.finish();
                }
                ('step 2');
                if (result.targets?.length) {
                  target.line(result.targets[0], 'green');
                  result.targets[0].damage(target);
                }
              },
              ai: {
                order: 0.5,
                result: {
                  target(player, target) {
                    var att = get.attitude(player, target);
                    var oc = target.countCards('h') == 1;
                    if (att > 0 && oc) return 0;
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                      if (players[i] != target && players[i] != player && target.inRange(players[i])) {
                        if (get.damageEffect(players[i], target, player) > 0) {
                          return att > 0 ? att / 2 : att - (oc ? 5 : 0);
                        }
                      }
                    }
                    return 0;
                  },
                  player(player, target) {
                    if (target.hasSkillTag('jueqing', false, target)) return -10;
                    var mn = 1;
                    var hs = player.getCards('h');
                    for (var i = 0; i < hs.length; i++) {
                      mn = Math.max(mn, hs[i].number);
                    }
                    if (mn <= 11 && player.hp < 2) return -20;
                    var max = player.maxHp - hs.length;
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                      if (get.attitude(player, players[i]) > 2) {
                        max = Math.max(Math.min(5, players[i].hp) - players[i].countCards('h'), max);
                      }
                    }
                    switch (max) {
                      case 0:
                        return mn == 13 ? 0 : -20;
                      case 1:
                        return mn >= 12 ? 0 : -15;
                      case 2:
                        return 0;
                      case 3:
                        return 1;
                      default:
                        return max;
                    }
                  },
                },
                expose: 0.2,
              },
            },
            hj_jl_jieming: {
              //节命
              audio: 'ext:魂将/武将配音/极略篇/魂荀彧:2',
              trigger: {
                player: 'damageEnd',
              },
              forced: true,
              content() {
                'step 0';
                event.count = Math.min(trigger.num, 9);
                ('step 1');
                player.chooseTarget(get.prompt('hj_jl_jieming'), '令一名角色摸两张牌.若其手牌数少于体力上限,你摸一张牌').set('ai', function (target) {
                  var att = get.attitude(_status.event.player, target);
                  if (att > 2) {
                    if (target.maxHp - target.countCards('h') > 2) return 2 * att;
                    return att;
                  }
                  return att / 3;
                });
                ('step 2');
                if (result.targets?.length) {
                  event.current = result.targets[0];
                  player.line(event.current, 'thunder');
                  event.current.draw(2);
                  event.count--;
                } else event.finish();
                ('step 3');
                if (event.current.countCards('h') < event.current.maxHp) {
                  player.draw();
                }
                if (event.count > 0) event.goto(1);
              },
              ai: {
                maixie: true,
                maixie_hp: true,
                effect: {
                  target(card, player, target, current) {
                    if (get.tag(card, 'damage') && target.hp > 1) {
                      if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                      var max = 0;
                      var players = game.filterPlayer();
                      for (var i = 0; i < players.length; i++) {
                        if (get.attitude(target, players[i]) > 0) {
                          max = Math.max(Math.min(5, players[i].hp) - players[i].countCards('h'), max);
                        }
                      }
                      switch (max) {
                        case 0:
                          return 2;
                        case 1:
                          return 1.5;
                        case 2:
                          return [1, 2];
                        default:
                          return [0, max];
                      }
                    }
                    if ((card.name == 'tao' || card.name == 'caoyao') && target.hp > 1 && target.countCards('h') <= target.hp) return [0, 0];
                  },
                },
              },
            },
            hj_jl_wangzuo: {
              //王佐
              trigger: {
                player: ['damageEnd', 'phaseZhunbeiBegin'],
              },
              forced: true,
              audio: 'ext:魂将/武将配音/极略篇/魂荀彧:2',
              content() {
                'step 0';
                player.draw();
                ('step 1');
                var list;
                if (_status.characterlist) {
                  list = [];
                  for (var i = 0; i < _status.characterlist.length; i++) {
                    var name = _status.characterlist[i];
                    list.push(name);
                  }
                }
                var players = game.players.concat(game.dead);
                for (var i = 0; i < players.length; i++) {
                  list.remove(players[i].name);
                  list.remove(players[i].name1);
                  list.remove(players[i].name2);
                }
                player
                  .chooseButton(true)
                  .set('ai', function (button) {
                    if (button.link.group == 'wei' || button.link.group == 'shen') return 10;
                    return Math.random();
                  })
                  .set('createDialog', ['请选择一张武将牌', [list.randomGets(3), 'character']]);
                ('step 2');
                var link = result.links[0];
                event.link = link;
                ('step 3');
                var list = [];
                var listm = [];
                listm = lib.character[event.link][3];
                var func = function (skill) {
                  var info = get.info(skill);
                  if (!info || info.charlotte) return false;
                  return true;
                };
                for (var i = 0; i < listm.length; i++) {
                  if (func(listm[i])) list.add(listm[i]);
                }
                event.skills = list;
                player.chooseControl(list).set('prompt', '请选择一个技能');
                ('step 4');
                var skill = result.control;
                event.skill = skill;
                player
                  .chooseTarget('请选择要获得技能的角色', function (card, player, target) {
                    return true;
                  })
                  .set('ai', function (target) {
                    return get.attitude(player, target);
                  });
                ('step 5');
                if (result.targets?.length) {
                  var target = result.targets[0];
                  event.target = target;
                  player.line(target);
                  target.addTempSkill(skill, { player: 'phaseEnd' });
                } else event.finish();
                ('step 6');
                if (lib.character[event.link][1] == 'wei' || lib.character[event.link][1] == 'shen') {
                  player.chooseControl('摸牌', '回复体力', 'cancel2').set('prompt', '令' + get.translation(target) + '执行一项');
                }
                ('step 7');
                if (result.control == '摸牌') event.target.draw();
                if (result.control == '回复体力') event.target.recover();
              },
            },
            hj_jl_xianshi: {
              //先识
              trigger: {
                global: 'phaseBegin',
              },
              audio: 'ext:魂将/武将配音/极略篇/魂荀彧:2',
              init(player, skill) {
                if (!player.storage.hj_jl_xianshi) player.storage.hj_jl_xianshi = [];
              },
              filter(event, player) {
                if (player.storage.hj_jl_xianshi.includes(event.player)) return false;
                return true;
              },
              forced: true,
              content() {
                'step 0';
                player.chooseCard('he', get.prompt2('hj_jl_xianshi')).set('ai', function (card) {
                  if (_status.event.goon) return 8 - get.value(card);
                  return 0;
                });
                ('step 1');
                if (result.cards?.length) {
                  var card = result.cards[0];
                  player.lose(card, ui.discardPile, 'visible');
                  player.$throw(card, 1000);
                  game.log(player, '将', card, '置入弃牌堆');
                  player.draw();
                } else event.finish();
                ('step 2');
                if (!player.storage.hj_jl_xianshi) player.storage.hj_jl_xianshi = [];
                player.storage.hj_jl_xianshi.add(trigger.player);
                player.markSkill('hj_jl_xianshi');
                player
                  .chooseControl(function () {
                    return get.attitude(player, trigger.player) < 0 ? '选项一' : '选项二';
                  })
                  .set('prompt', '先识')
                  .set('choiceList', ['令' + get.translation(trigger.player) + '跳过摸牌阶段和出牌阶段', '令' + get.translation(trigger.player) + '跳过判定阶段和弃牌阶段']);
                ('step 3');
                if (result.control == '选项一') {
                  trigger.player.skip('phaseDraw');
                  trigger.player.skip('phaseUse');
                } else {
                  trigger.player.skip('phaseJudge');
                  trigger.player.skip('phaseDiscard');
                }
              },
              intro: {
                content: '已对$发动过技能',
              },
            },
            hj_jl_zhuizun: {
              //追尊
              audio: 'ext:魂将/武将配音/极略篇/魂司马懿:2',
              srlose: true,
              enable: 'chooseToUse',
              mark: true,
              init(player) {
                player.storage.hj_jl_zhuizun = false;
              },
              filter(event, player) {
                if (event.type != 'dying') return false;
                if (player != event.dying) return false;
                if (player.storage.hj_jl_zhuizun) return false;
              },
              content() {
                'step 0';
                player.hp = Math.min(1, player.maxHp);
                player.update();
                player.unmarkSkill('hj_jl_zhuizun');
                player.storage.hj_jl_zhuizun = true;
                player.addSkill('hj_jl_zhuizun2');
                ('step 1');
                var targets = game.players.slice(0);
                targets.remove(player);
                targets.sort(lib.sort.seat);
                event.targets = targets;
                ('step 2');
                if (event.targets.length) {
                  event.target = event.targets.shift();
                } else {
                  event.finish();
                }
                ('step 3');
                if (event.target.countCards('h')) {
                  event.target.chooseCard('选择一张手牌交给' + get.translation(player), true).ai = function (card) {
                    return -get.value(card);
                  };
                } else {
                  event.goto(2);
                }
                ('step 4');
                if (result.cards?.length) {
                  player.gain(result.cards[0]);
                  target.$give(1, player);
                }
                event.goto(2);
              },
              ai: {
                order: 1,
                skillTagFilter(player) {
                  if (player.storage.hj_jl_zhuizun) return false;
                  if (player.hp > 0) return false;
                },
                save: true,
                result: {
                  player: 10,
                },
                threaten(player, target) {
                  if (!target.storage.hj_jl_zhuizun) return 0.6;
                },
              },
              intro: {
                content: 'limited',
              },
            },
            hj_jl_guicai: {
              //鬼才
              audio: 'ext:魂将/武将配音/极略篇/魂司马懿:2',
              srlose: true,
              trigger: {
                global: 'judge',
              },
              check(event, player) {
                var judge = event.judge(event.player.judging[0]);
                if (get.attitude(player, event.player) < 0) return judge > 0;
                if (get.attitude(player, event.player) > 0) {
                  return judge < 0;
                }
                return 0;
              },
              content() {
                'step 0';
                player
                  .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',打出一张手牌代替之或亮出牌顶的一张牌代替之')
                  .set('ai', function (card) {
                    var trigger = _status.event.parent._trigger;
                    var player = _status.event.player;
                    var judging = _status.event.judging;
                    var result = trigger.judge(card) - trigger.judge(judging);
                    var attitude = get.attitude(player, trigger.player);
                    if (attitude == 0 || result == 0) return 0;
                    if (attitude > 0) {
                      return result - get.value(card) / 2;
                    } else {
                      return -result - get.value(card) / 2;
                    }
                  })
                  .set('judging', trigger.player.judging[0]);
                ('step 1');
                if (result.cards?.length) {
                  player.respond(result.cards, 'highlight');
                } else {
                  event.cards = get.cards();
                  game.log(get.translation(player) + '亮出了牌堆顶的' + get.translation(event.cards));
                  player.showCards(event.cards);
                  player.respond(event.cards, 'highlight');
                }
                ('step 2');
                if (result.bool) {
                  if (trigger.player.judging[0].clone) {
                    trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                    game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                  }
                  ui.discardPile.appendChild(trigger.player.judging[0]);
                  trigger.player.judging[0] = result.cards[0];
                  if (!get.owner(result.cards[0], 'judge')) {
                    trigger.position.appendChild(result.cards[0]);
                  }
                  game.log(trigger.player, '的判定牌改为', result.cards[0]);
                } else {
                  if (trigger.player.judging[0].clone) {
                    trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                    game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                  }
                  ui.discardPile.appendChild(trigger.player.judging[0]);
                  trigger.player.judging[0] = event.cards[0];
                  if (!get.owner(event.cards[0], 'judge')) {
                    trigger.position.appendChild(event.cards[0]);
                  }
                  game.log(trigger.player, '的判定牌改为', event.cards[0]);
                }
              },
              ai: {
                tag: {
                  rejudge: 1,
                },
              },
            },
            hj_jl_jilve: {
              //极略
              audio: 'ext:魂将/武将配音/极略篇/魂司马懿:3',
              enable: 'phaseUse',
              filter(event, player) {
                return !player.hasSkill('hj_jl_jilve2');
              },
              content() {
                'step 0';
                player.draw();
                player.chooseToUse().filterCard = function (card, player) {
                  return lib.filter.cardEnabled(card, player, event.parent.parent) && lib.filter.cardUsable(card, player, event.parent.parent);
                };
                ('step 1');
                if (!result.bool) {
                  player.chooseToDiscard('he', true);
                  player.addTempSkill('hj_jl_jilve2', 'phaseAfter');
                }
              },
              ai: {
                threaten: 4,
                order: 15,
                result: {
                  player: 1,
                },
                effect: {
                  player(card, player) {
                    if (get.type(card) != 'basic') return [1, 3];
                  },
                },
              },
            },
            hj_jl_jilve2: {
              //极略2
              //只是作为标签,可以用其他方法代替
            },
            hj_jl_tongtian: {
              //通天
              audio: 'ext:魂将/武将配音/极略篇/魂司马懿:2',
              enable: 'phaseUse',
              position: 'he',
              mark: true,
              filter(event, player) {
                return !player.storage.hj_jl_tongtian;
              },
              filterCard(card) {
                var suit = card.suit;
                for (var i = 0; i < ui.selected.cards.length; i++) {
                  if (ui.selected.cards[i].suit == suit) return false;
                }
                return true;
              },
              selectCard: [1, 4],
              check(card) {
                return 8 - get.value(card);
              },
              init(player) {
                player.storage.hj_jl_tongtian = false;
              },
              content() {
                'step 0';
                player.storage.hj_jl_tongtian = true;
                for (var i = 0; i < cards.length; i++) {
                  if (cards[i].suit == 'heart') {
                    player.addSkill('hj_jl_guanxing');
                    lib.skill.hj_jl_guanxing.audioname = ['hjsoul_simayi'];
                  }
                  if (cards[i].suit == 'diamond') {
                    player.addSkill('hj_jl_zhiheng2');
                    lib.skill.hj_jl_zhiheng2.audioname = ['hjsoul_simayi'];
                  }
                  if (cards[i].suit == 'club') {
                    player.addSkill('hj_jl_wansha');
                    lib.skill.hj_jl_wansha.audioname = ['hjsoul_simayi'];
                  }
                  if (cards[i].suit == 'spade') {
                    player.addSkill('hj_jl_fankui');
                    lib.skill.hj_jl_fankui.audioname = ['hjsoul_simayi'];
                  }
                }
                ('step 1');
                player.unmarkSkill('hj_jl_tongtian');
              },
              ai: {
                order: 6,
                result: {
                  player(player) {
                    var cards = player.getCards('he');
                    var suits = [];
                    for (var i = 0; i < cards.length; i++) {
                      if (!suits.includes(cards[i].suit)) {
                        suits.push(cards[i].suit);
                      }
                    }
                    if (suits.length < 3) return -1;
                    return suits.length;
                  },
                },
              },
              intro: {
                content: 'limited',
              },
            },
            hj_jl_fankui: {
              //反馈
              audio: 'ext:魂将/武将配音/极略篇/魂司马懿:2',
              trigger: { player: 'damageEnd' },
              forced: true,
              filter(event, player) {
                return event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player;
              },
              content() {
                'step 0';
                event.count = Math.min(trigger.num, 9);
                ('step 1');
                event.count--;
                player.gainPlayerCard(get.prompt('hj_jl_fankui', trigger.source), trigger.source, get.buttonValue, 'he')('step 2');
                if (result.bool && event.count > 0 && trigger.source.countGainableCards(player, 'he') > 0) event.goto(1);
              },
              ai: {
                maixie_defend: true,
                effect: {
                  target(card, player, target) {
                    if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                      if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                      if (get.attitude(target, player) < 0) return [1, 1];
                    }
                  },
                },
              },
            },
            hj_jl_wansha: {
              //完杀
              audio: 'ext:魂将/武将配音/极略篇/魂司马懿:2',
              audioname: ['re_jiaxu', 'shen_simayi', 'boss_lvbu2'],
              global: 'hj_jl_wansha_global',
              trigger: { global: 'dyingBegin' },
              forced: true,
              logTarget: 'player',
              filter(event, player) {
                return player == _status.currentPhase;
              },
              content() {
                game.countPlayer(function (current) {
                  if (current != player && current != trigger.player) current.addSkillBlocker('hj_jl_wansha_fengyin');
                });
                player.addTempSkill('hj_jl_wansha_clear');
              },
              subSkill: {
                global: {
                  mod: {
                    cardEnabled(card, player) {
                      var source = _status.currentPhase;
                      if (card.name == 'tao' && source && source != player && source.hasSkill('hj_jl_wansha') && !player.isDying()) return false;
                    },
                    cardSavable(card, player) {
                      var source = _status.currentPhase;
                      if (card.name == 'tao' && source && source != player && source.hasSkill('hj_jl_wansha') && !player.isDying()) return false;
                    },
                  },
                },
                fengyin: {
                  inherit: 'fengyin',
                },
                clear: {
                  trigger: { global: 'dyingAfter' },
                  forced: true,
                  charlotte: true,
                  popup: false,
                  filter(event, player) {
                    return !_status.dying.length;
                  },
                  content() {
                    player.removeSkill('hj_jl_wansha_clear');
                  },
                  onremove() {
                    game.countPlayer2(function (current) {
                      current.removeSkillBlocker('hj_jl_wansha_fengyin');
                    });
                  },
                },
              },
            },
            hj_jl_guanxing: {
              //观星
              audio: 'ext:魂将/武将配音/极略篇/魂司马懿:2',
              audioname: ['jiangwei', 're_jiangwei', 're_zhugeliang', 'gexuan', 'ol_jiangwei'],
              trigger: { player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'] },
              forced: true,
              filter(event, player, name) {
                if (name == 'phaseJieshuBegin') {
                  return player.hasSkill('hj_jl_guanxing_on');
                }
                return true;
              },
              content() {
                'step 0';
                var num = game.countPlayer() < 4 ? 3 : 5;
                var cards = get.cards(num);
                game.cardsGotoOrdering(cards);
                var next = player.chooseToMove();
                next.set('list', [['牌堆顶', cards], ['牌堆底']]);
                next.set('prompt', '观星:点击将牌移动到牌堆顶或牌堆底');
                next.processAI = function (list) {
                  var cards = list[0][1],
                    player = _status.event.player;
                  var target = _status.event.getTrigger().name == 'phaseZhunbei' ? player : player.next;
                  var att = get.sgn(get.attitude(player, target));
                  const top = [], bottom = cards;
                  for (const i of target.getCards('j')) {
                    const judge = get.judge(i);
                    bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
                    if (bottom.length) {
                      top.push(bottom.shift());
                    }
                  }
                  bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
                  while (bottom.length) {
                    top.push(bottom.shift());
                  }
                  return [top, bottom];
                };
                ('step 1');
                var top = result.moved[0];
                var bottom = result.moved[1];
                top.reverse();
                for (var i = 0; i < top.length; i++) {
                  ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                }
                for (i = 0; i < bottom.length; i++) {
                  ui.cardPile.appendChild(bottom[i]);
                }
                if (event.triggername == 'phaseZhunbeiBegin' && top.length == 0) {
                  player.addTempSkill('hj_jl_guanxing_on');
                }
                player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                game.updateRoundNumber();
              },
              subSkill: {
                on: {},
              },
            },
            hj_jl_zhiheng2: {
              //制衡
              audio: 'ext:魂将/武将配音/极略篇/魂司马懿:2',
              audioname: ['shen_caopi'],
              enable: 'phaseUse',
              usable: 1,
              position: 'he',
              filterCard: lib.filter.cardDiscardable,
              discard: false,
              lose: false,
              delay: false,
              selectCard: [1, Infinity],
              check(card) {
                var player = _status.event.player;
                if (
                  get.position(card) == 'h' &&
                  !player.countCards('h', 'du') &&
                  (player.hp > 2 ||
                    !player.countCards('h', function (card) {
                      return get.value(card) >= 8;
                    }))
                ) {
                  return 1;
                }
                return 6 - get.value(card);
              },
              content() {
                'step 0';
                player.discard(cards);
                event.num = 1;
                var hs = player.getCards('h');
                if (!hs.length) event.num = 0;
                for (var i = 0; i < hs.length; i++) {
                  if (!cards.includes(hs[i])) {
                    event.num = 0;
                    break;
                  }
                }
                ('step 1');
                player.draw(event.num + cards.length);
              },
              //group:'hj_jl_zhiheng2_draw',
              subSkill: {
                draw: {
                  trigger: { player: 'loseEnd' },
                  silent: true,
                  filter(event, player) {
                    if (event.getParent(2).skill != 'hj_jl_zhiheng2' && event.getParent(2).skill != 'jilue_zhiheng') return false;
                    if (player.countCards('h')) return false;
                    if (Array.isArray(event.cards))
                      for (var i of event.cards) {
                        if (i.original == 'h') return true;
                      }
                    return false;
                  },
                  content() {
                    player.addTempSkill('hj_jl_zhiheng2_delay', trigger.getParent(2).skill + 'After');
                  },
                },
                delay: {},
              },
              ai: {
                order: 1,
                result: {
                  player: 1,
                },
                threaten: 1.55,
              },
            },
            hj_jl_ganglie: {
              //刚烈
              audio: 'ext:魂将/武将配音/极略篇/魂夏侯惇:2',
              trigger: {
                player: 'phaseUseBegin',
              },
              srlose: true,
              check(event, player) {
                return 1;
              },
              content() {
                player.loseHp();
                player.addTempSkill('hj_jl_ganglie_damage', 'phaseAfter');
                player.addTempSkill('hj_jl_ganglie_phaseEnd', 'phaseAfter');
              },
              subSkill: {
                damage: {
                  trigger: {
                    source: 'damageBegin',
                  },
                  forced: true,
                  filter(event, player) {
                    return event.num > 0;
                  },
                  content() {
                    trigger.num++;
                    player.removeSkill('hj_jl_ganglie_damage');
                  },
                },
                phaseEnd: {
                  audio: 2,
                  trigger: {
                    player: 'phaseEnd',
                  },
                  forced: true,
                  filter(event, player) {
                    return player.getStat('damage') > 0;
                  },
                  content() {
                    player.draw(player.getStat('damage'));
                  },
                },
              },
            },
            hj_jl_danjing: {
              //啖睛
              audio: 'ext:魂将/武将配音/极略篇/魂夏侯惇:2',
              enable: 'phaseUse',
              usable: 1,
              filterTarget(card, player, target) {
                return player != target;
              },
              content() {
                'step 0';
                player.loseHp();
                player.chooseControl('摸三张牌', '弃三张牌').ai = function () {
                  if (get.attitude(player, target) > 0) return '摸三张牌';
                  return '弃三张牌';
                };
                ('step 1');
                if (result.control == '摸三张牌') {
                  target.draw(3);
                } else {
                  target.chooseToDiscard(3, 'he', true);
                }
              },
              ai: {
                order: 5,
                result: {
                  player(player) {
                    if (player.isZhu) {
                      if (player.hp <= 2) return -5;
                      return -1;
                    }
                    return -1;
                  },
                  target(player, target) {
                    if (get.attitude(player, target) > 0) return 3;
                    if (get.attitude(player, target) < 0) {
                      if (target.countCards('he') < 3) return 0;
                      return -3;
                    }
                    return 0;
                  },
                },
              },
            },
            hj_jl_zhonghun: {
              //忠魂
              audio: 'ext:魂将/武将配音/极略篇/魂夏侯惇:2',
              trigger: {
                player: 'dieBegin',
              },
              forced: true,
              content() {
                'step 0';
                player.chooseTarget(function (card, player, target) {
                  return player != target;
                }).ai = function (target) {
                  return get.attitude(player, target);
                };
                ('step 1');
                if (result.bool) {
                  for (var i = 0; i < player.skills.length; i++) {
                    result.targets[0].addSkill(player.skills[i]);
                  }
                }
              },
            },
            hj_jl_nizhan: {
              //逆战
              audio: 'ext:魂将/武将配音/极略篇/魂张辽:2',
              trigger: {
                global: 'damageEnd',
              },
              filter(event, player) {
                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
              },
              init(player) {
                for (var i = 0; i < game.players.length; i++) {
                  game.players[i].storage.hj_jl_nizhan_mark = 0;
                }
              },
              forced: true,
              content() {
                'step 0';
                player.chooseTarget('是否发动【逆战】？', function (card, player, target) {
                  return (trigger.source == target || trigger.player == target) && player != target;
                }).ai = function (target) {
                  if (get.attitude(player, trigger.player) < 0) return target == trigger.player ? 1 : -1;
                  return target == trigger.source ? 1 : -1;
                };
                ('step 1');
                if (result.targets?.length) {
                  result.targets[0].storage.hj_jl_nizhan_mark += 1;
                  result.targets[0].markSkill('hj_jl_nizhan_mark');
                }
              },
              subSkill: {
                mark: {
                  marktext: '袭',
                  intro: {
                    content: 'mark',
                  },
                },
              },
            },
            hj_jl_wuwei: {
              //无畏
              audio: 'ext:魂将/武将配音/极略篇/魂张辽:2',
              srlose: true,
              trigger: {
                player: 'phaseDrawBegin',
              },
              _priority: -1,
              check(event) {
                return event.num <= 3;
              },
              prompt: '是否发动技能【无畏】,展示牌中每有一张基本牌便可视为对一名角色使用一张【杀】',
              content() {
                'step 0';
                trigger.untrigger();
                trigger.finish();
                event.cards = get.cards(4);
                player.showCards(event.cards);
                ('step 1');
                event.lose = 0;
                if (Array.isArray(event.cards))
                  for (var i of event.cards) {
                    if (get.type(i, 'trick') == 'basic') {
                      event.lose++;
                    }
                  }
                if (event.lose > 0) {
                  var next = player.chooseCardButton('请选择无畏视为【杀】使用的牌', event.cards);
                  next.ai = function (button) {
                    return 8 - get.value(button.link);
                  };
                  next.filterButton = function (button) {
                    return get.type(button.link) == 'basic';
                  };
                } else {
                  player.gain(event.cards, 'gain2');
                  event.finish();
                }
                ('step 2');
                if (result.links?.length) {
                  event.cards1 = result.links[0];
                  player.chooseTarget('请选择无畏的目标', function (card, player, target) {
                    return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                  }).ai = function (target) {
                    return ai.get.effect(target, { name: 'sha' }, _status.event.player, _status.event.player);
                  };
                } else {
                  player.gain(event.cards, 'gain2');
                  event.finish();
                }
                ('step 3');
                if (result.targets?.length) {
                  player.useCard({ name: 'sha' }, result.targets, [event.cards1], false);
                  event.cards.remove(event.cards1);
                  event.goto(1);
                } else {
                  player.gain(event.cards, 'gain2');
                  event.finish();
                }
              },
              ai: {
                threaten: 1.3,
                expose: 0.2,
              },
            },
            hj_jl_cuifeng: {
              //摧锋
              audio: 'ext:魂将/武将配音/极略篇/魂张辽:2',
              trigger: {
                player: 'phaseEnd',
              },
              forced: true,
              filter(event, player) {
                var num = 0;
                for (var i = 0; i < game.players.length; i++) {
                  num += game.players[i].storage.hj_jl_nizhan_mark;
                }
                if (num >= 4) return true;
                return false;
              },
              content() {
                'step 0';
                for (var i = 0; i < game.players.length; i++) {
                  if (game.players[i].storage.hj_jl_nizhan_mark) {
                    player.line(game.players[i], 'fire');
                    if (game.players[i].countCards('h') >= game.players[i].storage.hj_jl_nizhan_mark) {
                      player.gainPlayerCard(game.players[i].storage.hj_jl_nizhan_mark, game.players[i], 'h', true);
                    } else {
                      player.gain(game.players[i].getCards('h'));
                      game.players[i].$give(game.players[i].countCards('h'), player);
                      game.players[i].damage();
                    }
                  }
                }
                ('step 1');
                for (var i = 0; i < game.players.length; i++) {
                  game.players[i].unmarkSkill('hj_jl_nizhan_mark');
                  game.players[i].storage.hj_jl_nizhan_mark = 0;
                }
              },
            },
            hj_jl_weizhen: {
              //威震
              audio: 'ext:魂将/武将配音/极略篇/魂张辽:2',
              trigger: {
                player: 'phaseBegin',
              },
              filter(event, player) {
                var num = 0;
                for (var i = 0; i < game.players.length; i++) {
                  num += game.players[i].storage.hj_jl_nizhan_mark;
                }
                if (num > 0) return true;
                return false;
              },
              prompt(event, player) {
                var str = '';
                var num = 0;
                for (var i = 0; i < game.players.length; i++) {
                  num += game.players[i].storage.hj_jl_nizhan_mark;
                }
                str += '移除场上全部的【袭】标记,摸' + num + '张牌';
                return str;
              },
              check(event, player) {
                if (player.countCards('h') == 0 || player.hp == 1) return 1;
                return 0;
              },
              content() {
                var num = 0;
                for (var i = 0; i < game.players.length; i++) {
                  if (game.players[i].storage.hj_jl_nizhan_mark) {
                    player.line(game.players[i], 'water');
                  }
                  num += game.players[i].storage.hj_jl_nizhan_mark;
                  game.players[i].unmarkSkill('hj_jl_nizhan_mark');
                  game.players[i].storage.hj_jl_nizhan_mark = 0;
                }
                player.draw(num);
              },
            },
            hj_jl_zhiji: {
              //掷戟
              audio: 'ext:魂将/武将配音/极略篇/魂典韦:2',
              usable: 1,
              enable: 'phaseUse',
              filter(event, player) {
                return player.countCards('he', { subtype: 'equip1' });
              },
              filterCard(card) {
                return get.subtype(card) == 'equip1';
              },
              position: 'he',
              selectCard: [1, Infinity],
              filterTarget(card, player, target) {
                return player != target;
              },
              check(card) {
                8 - get.value(card);
              },
              content() {
                target.damage(cards.length);
              },
              group: ['hj_jl_zhiji_damage'],
              subSkill: {
                damage: {
                  trigger: {
                    player: 'damageEnd',
                  },
                  check() {
                    return 1;
                  },
                  content() {
                    var card = get.cardPile(function (card) {
                      return get.subtype(card) == 'equip1';
                    });
                    if (card) {
                      player.gain(card, 'gain2');
                      game.log(player, '从牌堆获得了', card);
                    }
                  },
                },
              },
              ai: {
                order() {
                  return lib.card.sha.ai.order - 1;
                },
                result: {
                  target(player, target) {
                    return get.damageEffect(target, player);
                  },
                },
              },
            },
            hj_jl_baoyong: {
              //暴勇
              audio: 'ext:魂将/武将配音/极略篇/魂典韦:2',
              enable: 'phaseUse',
              usable: 1,
              filterTarget(card, player, target) {
                return target != player && target.countCards('he') > 0;
              },
              content() {
                'step 0';
                target.chooseCard('he', '交给' + get.translation(player) + '一张牌', true);
                ('step 1');
                player.gain(result.cards, target, 'giveAuto');
                ('step 2');
                if (player.countCards('h') <= target.countCards('h')) {
                  event.finish();
                  return;
                }
                var list = [];
                if (target.canUse('sha', player, false)) list.push('sha');
                if (target.canUse('juedou', player, false)) list.push('juedou');
                if (!list.length) event.finish();
                else if (list.length == 1) event._result = { control: list[0] };
                else
                  target.chooseControl(list).set('prompt', '对' + get.translation(player) + '使用一张【杀】或【决斗】').ai = function () {
                    return get.effect(player, { name: 'sha' }, target, target) >= get.effect(player, { name: 'juedou' }, target, target) ? 'sha' : 'juedou';
                  };
                ('step 3');
                target.useCard({ name: result.control }, player, 'noai');
              },
              ai: {
                order: 7,
                result: {
                  target: -1.2,
                  player(player, target) {
                    if (target.countCards('h') - player.countCards('h') > 1) return 1;
                    if (get.damageEffect(target, player, player, player) > 0) return 1;
                    if (player.hp > 3 || (player.countCards('h', 'sha') && player.countCards('h', 'shan'))) return 0;
                    if (player.hp > 2) return -1.1;
                    return -2;
                  },
                },
              },
            },
            hj_jl_duoren: {
              //夺刃
              trigger: { target: 'useCardToTargeted' },
              filter(event, player) {
                return event.card.name == 'sha' && (get.color(event.card) == 'red' ? event.player.getEquip(1) : player.countCards('he') > 0);
              },
              forced: true,
              audio: 'ext:魂将/武将配音/极略篇/魂典韦:2',
              content() {
                'step 0';
                var prompt = '弃置一张牌';
                if (trigger.player.getEquip(1)) prompt += ',获得' + get.translation(trigger.player) + '装备区中的' + get.translation(trigger.player.getEquip(1));
                var next = player.chooseToDiscard('he', get.prompt('hj_jl_duoren', trigger.player), prompt);
                next.set('ai', function (card) {
                  if (!_status.event.getTrigger().player.getEquip(1)) return 0;
                  if (get.attitude(_status.event.player, _status.event.getTrigger().player) * get.value(_status.event.getTrigger().player.getEquip(1)) <= 0) {
                    return 6 - get.value(card);
                  }
                  return 0;
                });
                ('step 1');
                if (result.bool && trigger.player.getEquip(1)) {
                  player.gain(trigger.player.getEquip(1), trigger.player, 'give', 'bySelf');
                }
              },
            },
            hj_jl_kuangxi: {
              //狂袭
              audio: 'ext:魂将/武将配音/极略篇/魂典韦:2',
              trigger: {
                global: 'damageBefore',
              },
              forced: true,
              filter(event, player) {
                return true;
              },
              content() {
                trigger.source = player;
              },
            },
            hj_jl_wushen: {
              //武神
              audio: 'ext:魂将/武将配音/极略篇/魂关羽:2',
              mod: {
                targetEnabled(card, player, target, now) {
                  if (card.name == 'tao') return false;
                },
                cardEnabled(card, player) {
                  if (card.name == '') return false;
                },
                cardUsable(card, player) {
                  if (card.name == 'tao') return false;
                },
                cardSavable(card, player) {
                  if (card.name == 'tao') return false;
                },
                cardRespondable(card, player) {
                  if (card.name == 'sha') return false;
                },
                globalFrom(from, to, distance) {
                  return distance + 10;
                },
              },
              enable: ['phaseUse', 'chooseToRespond', 'chooseToUse'],
              filter(event, player) {
                return player.countCards('h', { name: ['sha', 'tao'] }) > 0;
              },
              filterCard: {
                name: ['sha', 'tao'],
              },
              viewAs: {
                name: 'juedou',
              },
              check(event, player) {
                return true;
              },
              ai: {
                effect: {
                  target(card, player, target, current) {
                    if (get.tag(card, 'respondSha') && current < 0) {
                      return 0.6;
                    }
                  },
                },
                order: 4,
                useful: -1,
                value: -1,
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
            hj_jl_suohun: {
              //索魂
              audio: 'ext:魂将/武将配音/极略篇/魂关羽:2',
              trigger: {
                player: 'damageEnd',
              },
              filter(event, player) {
                return event.source && event.source != player;
              },
              forced: true,
              init(player) {
                for (var i = 0; i < game.players.length; i++) {
                  game.players[i].storage.hj_jl_suohun_mark = 0;
                }
              },
              content() {
                trigger.source.storage.hj_jl_suohun_mark += trigger.num;
                trigger.source.markSkill('hj_jl_suohun_mark');
              },
              global: ['hj_jl_suohun_mark'],
              subSkill: {
                mark: {
                  marktext: '魂',
                  intro: {
                    content: 'mark',
                  },
                },
              },
              group: ['hj_jl_suohun2'],
            },
            hj_jl_suohun2: {
              //索魂2
              audio: 'hj_jl_suohun',
              trigger: { player: 'dying' },
              _priority: 10,
              forced: true,
              filter(event, player) {
                return player.hp <= 0;
              },
              content() {
                'step 0';
                if (player.maxHp > 1) {
                  player.maxHp = Math.ceil(player.maxHp / 2);
                  player.hp = player.maxHp;
                  player.update();
                } else {
                  player.loseMaxHp();
                  player.update();
                }
                ('step 1');
                for (var i = 0; i < game.players.length; i++) {
                  if (game.players[i].storage.hj_jl_suohun_mark) {
                    player.line(game.players[i], 'fire');
                    game.players[i].damage(game.players[i].storage.hj_jl_suohun_mark);
                    game.players[i].storage.hj_jl_suohun_mark = 0;
                    game.players[i].unmarkSkill('hj_jl_suohun_mark');
                  }
                }
              },
              ai: {
                threaten: 0.9,
                effect: {
                  target(card, player, target) {
                    if (target.maxHp == 1) return;
                    var num = 0;
                    for (var i = 0; i < game.players.length; i++) {
                      if (game.players[i].storage.hj_jl_suohun_mark && get.attitude(target, game.players[i]) <= -2) num += game.players[i].storage.hj_jl_suohun_mark;
                    }
                    if (get.tag(card, 'damage')) {
                      if (target.hp == 1) return [0, 2 * num];
                      return [1, 0.5];
                    }
                  },
                },
              },
            },
            hj_jl_wuhun: {
              //武魂
              audio: 'ext:魂将/武将配音/极略篇/魂关羽:2',
              trigger: {
                player: 'die',
              },
              forced: true,
              forceDie: true,
              content() {
                'step 0';
                player
                  .chooseTarget(get.prompt2('hj_jl_wuhun'), true, function (card, player, target) {
                    return player != target;
                  })
                  .set('forceDie', true)
                  .set('ai', function (target) {
                    var num = get.attitude(_status.event.player, target);
                    if (num < 0) {
                      return 1;
                    }
                    return -1;
                  });
                ('step 1');
                if (result.targets?.length) {
                  var target = result.targets[0];
                  event.target = target;
                } else event.finish();
                ('step 2');
                event.target.judge(function (card) {
                  if (card.suit == 'heart' && card.number > 1 && card.number < 10) return 0;
                  return -6;
                });
                ('step 3');
                if (result.bool == false) {
                  event.target.die();
                } else {
                  event.target.loseMaxHp();
                  game.log(event.target, '失去了所有技能');
                  event.target.clearSkills();
                }
              },
              subSkill: {
                log: {},
              },
              ai: {
                expose: 0.5,
              },
            },
            hj_jl_paoxiao: {
              //咆哮
              audio: 'ext:魂将/武将配音/极略篇/魂张飞:2',
              srlose: true,
              trigger: {
                source: 'damageAfter',
              },
              filter(event, player) {
                return event.card && event.card.name == 'sha';
              },
              check(event, player) {
                return get.attitude(player, event.player) <= 0 && event.notLink();
              },
              _priority: 5,
              content() {
                'step 0';
                player.draw();
                player.chooseToUse({ name: 'sha' }, function (card, target, player) {
                  return player.canUse({ name: 'sha' }, target);
                });
                ('step 1');
                if (!result.bool) {
                  trigger.player.discardPlayerCard(player, 'he');
                }
              },
            },
            hj_jl_shayi: {
              //杀意
              audio: 'ext:魂将/武将配音/极略篇/魂张飞:2',
              trigger: {
                player: 'phaseUseBegin',
              },
              filter(event, player) {
                return player.countCards('h') > 0;
              },
              forced: true,
              content() {
                'step 0';
                player.showHandcards();
                ('step 1');
                if (!player.countCards('h', 'sha')) {
                  player.addTempSkill('hj_jl_shayi_success', 'phaseAfter');
                } else {
                  player.draw();
                }
              },
              subSkill: {
                success: {
                  audio: 2,
                  enable: ['chooseToRespond', 'chooseToUse'],
                  filterCard(card) {
                    return get.color(card) == 'black';
                  },
                  position: 'he',
                  viewAs: {
                    name: 'sha',
                  },
                  viewAsFilter(player) {
                    if (!player.countCards('he', { color: 'black' })) return false;
                  },
                  prompt: '将一张黑色牌当杀使用或打出',
                  check(card) {
                    return 4 - get.value(card);
                  },
                  ai: {
                    skillTagFilter(player) {
                      if (!player.countCards('he', { color: 'black' })) return false;
                    },
                    respondSha: true,
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
                      ) {
                        return false;
                      }
                      if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) {
                        return false;
                      }
                      return true;
                    },
                    basic: {
                      useful: [5, 1],
                      value: [5, 1],
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
                        ) {
                          return 3.1;
                        }
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
                        ) {
                          return eff / 1.2;
                        }
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
                  mod: {
                    cardUsable(card, player, num) {
                      if (card.name == 'sha') return Infinity;
                    },
                    targetInRange(card) {
                      if (card.name == 'sha') return true;
                    },
                  },
                },
              },
            },
            hj_jl_zhenhun: {
              //震魂
              audio: 'ext:魂将/武将配音/极略篇/魂张飞:2',
              enable: 'phaseUse',
              usable: 1,
              filterTarget(card, player, target) {
                return player != target;
              },
              selectTarget: -1,
              content() {
                if (!target.hasSkill('hj_jl_zhenhun_enableSkill')) {
                  var list = [];
                  for (var i = 0; i < target.skills.length; i++) {
                    if (!get.is.locked(target.skills[i])) {
                      list.push(target.skills[i]);
                    }
                  }
                  if (list.length) {
                    target.disableSkill('hj_jl_zhenhun', list);
                    target.addSkill('hj_jl_zhenhun_enableSkill');
                  }
                }
              },
              ai: {
                order: 10,
                result: {
                  player: 1,
                  target: -1,
                },
                threaten: 1.3,
              },
              subSkill: {
                enableSkill: {
                  trigger: {
                    global: 'phaseAfter',
                  },
                  forced: true,
                  popup: false,
                  content() {
                    player.enableSkill('hj_jl_zhenhun');
                    player.removeSkill('hj_jl_zhenhun_enableSkill');
                  },
                  mark: true,
                  intro: {
                    content(st, player) {
                      var storage = player.disabledSkills.hj_jl_zhenhun;
                      if (storage && storage.length) {
                        var str = '失效技能:';
                        for (var i = 0; i < storage.length; i++) {
                          if (lib.translate[storage[i] + '_info']) {
                            str += get.translation(storage[i]) + '、';
                          }
                        }
                        return str.slice(0, str.length - 1);
                      }
                    },
                  },
                },
              },
            },
            hj_jl_kuangfeng: {
              //狂风
              audio: 'ext:魂将/武将配音/极略篇/魂诸葛亮:2',
              group: ['hj_jl_kuangfeng3'],
              trigger: {
                player: 'phaseUseBegin',
              },
              forced: true,
              filter(event, player) {
                return game.hasPlayer(function (current) {
                  return current != player && !current.hasSkill('hj_jl_kuangfeng2');
                });
              },
              content() {
                'step 0';
                player.chooseTarget('选择角色获得狂风标记').set('ai', function (target) {
                  return 0 - get.attitude(player, target) * 2 - target.hp;
                });
                ('step 1');
                if (result.targets?.length) {
                  var target = result.targets[0];
                  if (!target.hasSkill('hj_jl_kuangfeng2')) {
                    player.discardPlayerCard(target, true, 'he');
                    target.addSkill('hj_jl_kuangfeng2');
                  }
                }
              },
            },
            hj_jl_kuangfeng2: {
              //狂风2
              group: ['hj_jl_kf_huo', 'hj_jl_kf_lei'],
              mark: true,
              marktext: '风',
              intro: {
                content: '已获得<风>标记',
              },
            },
            hj_jl_kuangfeng3: {
              //狂风3
              trigger: {
                global: 'damageAfter',
              },
              forced: true,
              filter(event, player) {
                return event.player != player && event.player.hasSkill('hj_jl_kuangfeng2');
              },
              content() {
                player.draw();
              },
            },
            hj_jl_kuangfeng4: {
              //狂风4
              trigger: {
                player: 'damageBegin',
              },
              forced: true,
              filter(event, player) {
                return event.nature == 'fire';
              },
              content() {
                trigger.num++;
              },
            },
            hj_jl_kuangfeng5: {
              //狂风5
              trigger: {
                player: 'damageAfter',
              },
              forced: true,
              filter(event, player) {
                return event.nature == 'thunder';
              },
              content() {
                player.randomDiscard(2, true);
              },
            },
            hj_jl_kf_huo: {
              //狂风-火
              trigger: {
                player: 'damageBegin',
              },
              forced: true,
              filter(event, player) {
                return event.nature == 'fire';
              },
              content() {
                trigger.num++;
              },
            },
            hj_jl_kf_lei: {
              //狂风-雷
              trigger: {
                player: 'damageAfter',
              },
              forced: true,
              filter(event, player) {
                return event.nature == 'thunder';
              },
              content() {
                player.randomDiscard(2, true);
              },
            },
            hj_jl_qixing: {
              //七星
              audio: 'ext:魂将/武将配音/极略篇/魂诸葛亮:2',
              trigger: {
                global: 'gameDrawAfter',
                player: 'phaseBegin',
              },
              forced: true,
              check(event, player) {
                return true; //player.hp<=1;
              },
              marktext: '星',
              filter(event, player) {
                return !player.storage.hj_jl_qixing;
              },
              content() {
                'step 0';
                player.gain(get.cards(7))._triggered = null;
                ('step 1');
                if (player == game.me) {
                  game.addVideo('delay', null);
                }
                player.chooseCard('选择七张牌作为星', 7, true).ai = function (card) {
                  return get.value(card);
                };
                ('step 2');
                player.lose(result.cards, ui.special)._triggered = null;
                player.storage.hj_jl_qixing = result.cards;
              },
              mark: true,
              intro: {
                mark(dialog, content, player) {
                  if (content && content.length) {
                    if (player == game.me || player.isUnderControl()) {
                      dialog.add(content);
                    } else {
                      return '共有' + get.cnNumber(content.length) + '张星';
                    }
                  }
                },
                content(content, player) {
                  if (content && content.length) {
                    if (player == game.me || player.isUnderControl()) {
                      return get.translation(content);
                    }
                    return '共有' + get.cnNumber(content.length) + '张星';
                  }
                },
              },
              group: ['hj_jl_qixing2'],
            },
            hj_jl_qixing2: {
              //七星2
              trigger: {
                player: 'phaseDrawAfter',
              },
              forced: true,
              filter(event, player) {
                return player.storage.hj_jl_qixing && player.storage.hj_jl_qixing.length;
              },
              content() {
                'step 0';
                player.chooseCard(get.prompt('hj_jl_qixing'), [1, player.countCards('h')]).ai = function (card) {
                  return 1;
                };
                ('step 1');
                if (result.cards?.length) {
                  player.lose(result.cards, ui.special)._triggered = null;
                  player.storage.hj_jl_qixing = player.storage.hj_jl_qixing.concat(result.cards);
                  event.num = result.cards.length;
                } else {
                  event.finish();
                }
                ('step 2');
                player.chooseCardButton(player.storage.hj_jl_qixing, '选择' + event.num + '张牌作为手牌', event.num, true).ai = function (button) {
                  if (player.skipList.includes('phaseUse') && button.link != 'du') {
                    return -get.value(button.link);
                  }
                  return get.value(button.link);
                };
                if (player == game.me && _status.auto) {
                }
                ('step 3');
                player.gain(result.links)._triggered = null;
                for (var i = 0; i < result.links.length; i++) {
                  player.storage.hj_jl_qixing.remove(result.links[i]);
                }
                if (player == game.me && _status.auto) {
                }
              },
            },
            hj_jl_dawu: {
              //大雾
              audio: 'ext:魂将/武将配音/极略篇/魂诸葛亮:2',
              trigger: {
                player: 'phaseEnd',
              },
              _priority: 1,
              forced: true,
              filter(event, player) {
                return player.storage.hj_jl_qixing && player.storage.hj_jl_qixing.length;
              },
              content() {
                'step 0';
                player.chooseTarget('选择角色获得大雾标记', [1, Math.min(game.players.length, player.storage.hj_jl_qixing.length)]).ai = function (target) {
                  if (target.isMin()) return 0;
                  var att = get.attitude(player, target);
                  if (att >= 4) {
                    if ((target.hp == 1 && target.maxHp > 2) || target.countCards('he') <= 2) return att;
                    if (target.hp == 2 && target.maxHp > 3 && target.countCards('he') < 2) return att * 0.7;
                    return 0;
                  }
                  return -1;
                };
                ('step 1');
                if (result.targets?.length) {
                  var length = result.targets.length;
                  for (var i = 0; i < length; i++) {
                    result.targets[i].addSkill('hj_jl_dawu2');
                    result.targets[i].popup('hj_jl_dawu');
                  }
                  player.chooseCardButton('弃置' + get.cnNumber(length) + '枚星', length, player.storage.hj_jl_qixing, true);
                } else {
                  event.finish();
                }
                ('step 2');
                for (var i = 0; i < result.links.length; i++) {
                  player.storage.hj_jl_qixing.remove(result.links[i]);
                }
                if (player.storage.hj_jl_qixing.length == 0) {
                  player.unmarkSkill('hj_jl_qixing');
                }
                player.discard(result.links);
              },
              group: ['hj_jl_dawu_remove'],
              subSkill: {
                remove: {
                  trigger: {
                    player: ['phaseBegin', 'dieBegin'],
                  },
                  forced: true,
                  popup: false,
                  silent: true,
                  content() {
                    for (var i = 0; i < game.players.length; i++) {
                      if (game.players[i].hasSkill('hj_jl_dawu2')) {
                        game.players[i].removeSkill('hj_jl_dawu2');
                        game.players[i].popup('hj_jl_dawu');
                      }
                      if (game.players[i].hasSkill('hj_jl_kuangfeng2')) {
                        game.players[i].removeSkill('hj_jl_kuangfeng2');
                        game.players[i].popup('hj_jl_kuangfeng2');
                      }
                    }
                  },
                },
              },
            },
            hj_jl_dawu2: {
              //大雾2
              trigger: {
                player: 'damageBefore',
              },
              filter(event, player) {
                if (event.nature != 'thunder') return true;
                return false;
              },
              marktext: '雾',
              mark: true,
              forced: true,
              content() {
                trigger.untrigger();
                trigger.finish();
              },
              ai: {
                nofire: true,
                nodamage: true,
                effect: {
                  target(card, player, target, current) {
                    if (get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return [0, 0];
                  },
                },
              },
              intro: {
                content: '已获得大雾标记',
              },
            },
            hj_jl_weiwo: {
              //帷幄
              audio: 'ext:魂将/武将配音/极略篇/魂诸葛亮:2',
              srlose: true,
              trigger: {
                player: 'damageBegin',
              },
              filter(event, player) {
                if (event.nature && player.countCards('h')) return true;
                if (!event.nature && !player.countCards('h')) return true;
                return false;
              },
              mark: true,
              forced: true,
              content() {
                trigger.untrigger();
                trigger.finish();
              },
              ai: {
                nofire(player) {
                  return player.countCards('h') > 0;
                },
                nothunder(player) {
                  return player.countCards('h') > 0;
                },
                effect: {
                  target(card, player, target, current) {
                    if (get.tag(card, 'natureDamage') && target.countCards('h') > 0) return 0;
                    if (card.name == 'tiesuo' && target.countCards('h') > 0) return [0, 0];
                    if (!get.tag(card, 'natureDamage') && !target.countCards('h')) return [0, 0];
                  },
                },
              },
              intro: {
                content(storage, player) {
                  var str = '';
                  if (player.countCards('h')) {
                    str += '防止属性伤害';
                  } else {
                    str += '防止非属性伤害';
                  }
                  return str;
                },
              },
            },
            hj_jl_yaozhi: {
              //妖智
              audio: 'ext:魂将/武将配音/极略篇/魂☆诸葛亮:2',
              trigger: {
                player: ['phaseZhunbeiBegin', 'damageEnd', 'phaseJieshuBegin'],
              },
              forced: true,
              content() {
                'step 0';
                if (!player.storage.hj_jl_yaozhi) player.storage.hj_jl_yaozhi = [];
                player.draw();
                ('step 1');
                if (!_status.characterlist) {
                  lib.skill.pingjian.initList();
                }
                var list = [];
                var skills = [];
                _status.characterlist.randomSort();
                var name2 = event.triggername;
                for (var i = 0; i < _status.characterlist.length; i++) {
                  var name = _status.characterlist[i];
                  if (name.includes('zuoci') || name.includes('xushao') || name == 'jlsgsoul_sp_xushao') continue;
                  var skills2 = lib.character[name][3];
                  for (var j = 0; j < skills2.length; j++) {
                    if (player.hasSkill(skills2[j])) continue;
                    if (skills.includes(skills2[j])) continue;
                    var list2 = [skills2[j]];
                    game.expandSkills(list2);
                    for (var k = 0; k < list2.length; k++) {
                      var info = lib.skill[list2[k]];
                      if (!info || !info.trigger || !info.trigger.player || info.silent || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
                      if (info.trigger.player == name2 || (Array.isArray(info.trigger.player) && info.trigger.player.includes(name2))) {
                        if (info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                        if (info.filter) {
                          try {
                            var bool = info.filter(trigger, player, name2);
                            if (!bool) continue;
                          } catch (e) {
                            continue;
                          }
                        }
                        list.add(name);
                        skills.add(skills2[j]);
                        break;
                      }
                    }
                    if (skills.includes(skills2[j])) {
                      break;
                    }
                  }
                  if (skills.length > 2) break;
                }
                player
                  .chooseControl(skills)
                  .set('dialog', ['请选择要发动的技能', [list, 'character']])
                  .set('ai', function () {
                    return 0;
                  });
                ('step 2');
                if (result.control == '摸一张牌') {
                  player.draw();
                  return;
                }
                player.storage.hj_jl_yaozhi.add(result.control);
                var removeT = 'damageAfter';
                if (event.triggername == 'phaseJieshuBegin') {
                  removeT = 'phaseJieshu';
                } else if (event.triggername == 'phaseZhunbeiBegin') {
                  removeT = 'phaseZhunbei';
                }
                player.addTempSkill(result.control, removeT);
              },
              group: 'hj_jl_yaozhi_use',
            },
            hj_jl_yaozhi_use: {
              audio: 'hj_jl_yaozhi',
              enable: 'phaseUse',
              usable: 1,
              content() {
                'step 0';
                if (!player.storage.hj_jl_yaozhi) player.storage.hj_jl_yaozhi = [];
                player.draw();
                ('step 1');
                var list = [];
                var skills = [];
                if (!_status.characterlist) {
                  lib.skill.pingjian.initList();
                }
                _status.characterlist.randomSort();
                for (var i = 0; i < _status.characterlist.length; i++) {
                  var name = _status.characterlist[i];
                  if (name.includes('zuoci') || name.includes('xushao') || name == 'jlsgsoul_sp_xushao') continue;
                  var skills2 = lib.character[name][3];
                  for (var j = 0; j < skills2.length; j++) {
                    if (skills.includes(skills2[j])) continue;
                    if (player.hasSkill(skills2[j])) continue;
                    if (lib.skill.pingjian.phaseUse_special.includes(skills2[j])) {
                      list.add(name);
                      skills.add(skills2[j]);
                      continue;
                    }
                    var list2 = [skills2[j]];
                    game.expandSkills(list2);
                    for (var k = 0; k < list2.length; k++) {
                      var info = lib.skill[list2[k]];
                      if (!info || !info.enable || info.viewAs || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
                      if (info.enable == 'phaseUse' || (Array.isArray(info.enable) && info.enable.includes('phaseUse'))) {
                        if (info.init || info.onChooseToUse || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                        if (info.filter) {
                          try {
                            var bool = info.filter(event.getParent(2), player);
                            if (!bool) continue;
                          } catch (e) {
                            continue;
                          }
                        }
                        list.add(name);
                        skills.add(skills2[j]);
                        break;
                      }
                    }
                    if (skills.includes(skills2[j])) break;
                  }
                  if (skills.length > 2) break;
                }
                player
                  .chooseControl(skills)
                  .set('dialog', ['请选择要发动的技能', [list, 'character']])
                  .set('ai', function () {
                    return 0;
                  });
                ('step 2');
                if (result.control == '摸一张牌') {
                  player.draw();
                  return;
                }
                player.storage.hj_jl_yaozhi.add(result.control);
                player.addTempSkill(result.control, 'phaseUseEnd');
                player.addTempSkill('hj_jl_yaozhi_temp', 'phaseUseEnd');
                player.storage.hj_jl_yaozhi_temp = result.control;
                //event.getParent(2).goto(0);
              },
              ai: { order: 10, result: { player: 1 } },
            },
            hj_jl_yaozhi_temp: {
              trigger: { player: ['useSkillBegin', 'useCard1'] },
              silent: true,
              firstDo: true,
              filter(event, player) {
                var info = lib.skill[event.skill];
                if (!info) return false;
                if (event.skill == player.storage.hj_jl_yaozhi_temp) return true;
                if (info.sourceSkill == player.storage.hj_jl_yaozhi_temp || info.group == player.storage.hj_jl_yaozhi_temp) return true;
                if (Array.isArray(info.group) && info.group.includes(player.storage.hj_jl_yaozhi_temp)) return true;
                return false;
              },
              content() {
                player.removeSkill(player.storage.hj_jl_yaozhi_temp);
                player.removeSkill('hj_jl_yaozhi_temp');
              },
            },
            hj_jl_xingyun: {
              //星陨
              audio: 'ext:魂将/武将配音/极略篇/魂☆诸葛亮:2',
              forced: true,
              trigger: { player: 'phaseEnd' },
              content() {
                'step 0';
                player.loseMaxHp();
                ('step 1');
                if (!player.storage.hj_jl_yaozhi || !player.storage.hj_jl_yaozhi.length) {
                  event.finish();
                  return;
                }
                var characters = [];
                var leftSkills = player.storage.hj_jl_yaozhi.randomGets(16);
                var skills = [];
                for (var c in lib.character) {
                  var info = lib.character[c];
                  if (info[3].some((s) => leftSkills.includes(s))) {
                    characters.push(c);
                    skills.push(...leftSkills.filter((s) => info[3].includes(s)));
                    leftSkills.remove(info[3]);
                    if (!leftSkills.length) break;
                  }
                }
                var list = characters;
                if (player.isUnderControl()) {
                  game.swapPlayerAuto(player);
                }
                var switchToAuto = function () {
                  _status.imchoosing = false;
                  event._result = {
                    bool: true,
                    skills: skills.randomGets(1),
                  };
                  if (event.dialog) event.dialog.close();
                  if (event.control) event.control.close();
                };
                var chooseButton = function (list, skills) {
                  var event = _status.event;
                  if (!event._result) event._result = {};
                  event._result.skills = [];
                  var rSkill = event._result.skills;
                  var dialog = ui.create.dialog('请选择获得的技能', [list, 'character'], 'hidden');
                  event.dialog = dialog;
                  var table = document.createElement('div');
                  table.classList.add('add-setting');
                  table.style.margin = '0';
                  table.style.width = '100%';
                  table.style.position = 'relative';
                  for (var i = 0; i < skills.length; i++) {
                    var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                    td.link = skills[i];
                    table.appendChild(td);
                    td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                    td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                      if (_status.dragged) return;
                      if (_status.justdragged) return;
                      _status.tempNoButton = true;
                      setTimeout(function () {
                        _status.tempNoButton = false;
                      }, 500);
                      var link = this.link;
                      if (!this.classList.contains('bluebg')) {
                        if (rSkill.length >= 1) return;
                        rSkill.add(link);
                        this.classList.add('bluebg');
                      } else {
                        this.classList.remove('bluebg');
                        rSkill.remove(link);
                      }
                    });
                  }
                  dialog.content.appendChild(table);
                  dialog.add('　　');
                  dialog.open();
                  event.switchToAuto = function () {
                    event.dialog.close();
                    event.control.close();
                    game.resume();
                    _status.imchoosing = false;
                  };
                  event.control = ui.create.control('ok', function (link) {
                    event.dialog.close();
                    event.control.close();
                    game.resume();
                    _status.imchoosing = false;
                  });
                  for (var i = 0; i < event.dialog.buttons.length; i++) {
                    event.dialog.buttons[i].classList.add('selectable');
                  }
                  game.pause();
                  game.countChoose();
                };
                if (event.isMine()) {
                  chooseButton(list, skills);
                } else if (event.isOnline()) {
                  event.player.send(chooseButton, list, skills);
                  event.player.wait();
                  game.pause();
                } else {
                  switchToAuto();
                }
                ('step 2');
                var map = event.result || result;
                if (map && map.skills && map.skills.length) {
                  for (var s of map.skills) {
                    player.addSkillLog(s);
                    player.storage.hj_jl_yaozhi.remove(s);
                  }
                }
              },
              ai: {
                halfneg: true,
                combo: 'hj_jl_yaozhi',
              },
            },
            hj_jl_juejing: {
              //绝境
              audio: 'ext:魂将/武将配音/极略篇/魂赵云:2',
              trigger: {
                global: 'phaseEnd',
              },
              filter(event, player) {
                return player.hp >= 1;
              },
              forced: true,
              content() {
                if (player.hp == 1) {
                  player.draw();
                } else {
                  player.loseHp();
                  player.draw(2);
                }
              },
            },
            hj_jl_longying: {
              //龙影
              audio: 'ext:魂将/武将配音/极略篇/魂赵云:2',
              mod: {
                maxHandcard(player, num) {
                  return 2 + num;
                },
              },
              trigger: {
                player: ['dying', 'dyingAfter'],
              },
              forced: true,
              content() {
                player.draw();
              },
            },
            hj_jl_longhun: {
              //龙魂
              audio: 'ext:魂将/武将配音/极略篇/魂赵云:3',
              enable: ['chooseToUse', 'chooseToRespond'],
              prompt: '将♦️️牌当做杀,♥️️牌当做桃,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
              viewAs(cards, player) {
                var name = false;
                var nature = null;
                //根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
                switch (cards[0]?.suit) {
                  case 'club':
                    name = 'shan';
                    break;
                  case 'diamond':
                    name = 'sha';
                    nature = 'fire';
                    break;
                  case 'spade':
                    name = 'wuxie';
                    break;
                  case 'heart':
                    name = 'tao';
                    break;
                }
                //返回判断结果
                if (name) return { name: name, nature: nature };
                return null;
              },
              check(card) {
                if (ui.selected.cards.length) return 0;
                var player = _status.event.player;
                if (_status.event.type == 'phase') {
                  var max = 0;
                  var name2;
                  var list = ['sha', 'tao'];
                  var map = { sha: 'diamond', tao: 'heart' };
                  for (var i = 0; i < list.length; i++) {
                    var name = list[i];
                    if (
                      player.countCards('he', function (card) {
                        return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                      }) > 0 &&
                      player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                    ) {
                      var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                      if (temp > max) {
                        max = temp;
                        name2 = map[name];
                      }
                    }
                  }
                  if (name2 == card.suit) return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                  return 0;
                }
                return 1;
              },
              selectCard: [1, 2],
              complexCard: true,
              position: 'he',
              filterCard(card, player, event) {
                //如果已经选了一张牌 那么第二张牌和第一张花色相同即可
                if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
                event = event || _status.event;
                //获取当前时机的卡牌选择限制
                var filter = event._backup.filterCard;
                //获取卡牌花色
                var name = card.suit;
                //如果这张牌是♣️️并且当前时机能够使用/打出闪 那么这张牌可以选择
                if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                //如果这张牌是♦️️并且当前时机能够使用/打出火杀 那么这张牌可以选择
                if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
                //如果这张牌是♠️️并且当前时机能够使用/打出无懈 那么这张牌可以选择
                if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
                //如果这张牌是♥️️并且当前时机能够使用/打出桃 那么这张牌可以选择
                if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                //上述条件都不满足 那么就不能选择这张牌
                return false;
              },
              filter(event, player) {
                //获取当前时机的卡牌选择限制
                var filter = event.filterCard;
                //如果当前时机能够使用/打出火杀并且角色有♦️️ 那么可以发动技能
                if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('he', { suit: 'diamond' })) return true;
                //如果当前时机能够使用/打出闪并且角色有♣️️ 那么可以发动技能
                if (filter({ name: 'shan' }, player, event) && player.countCards('he', { suit: 'club' })) return true;
                //如果当前时机能够使用/打出桃并且角色有♥️️ 那么可以发动技能
                if (filter({ name: 'tao' }, player, event) && player.countCards('he', { suit: 'heart' })) return true;
                //如果当前时机能够使用/打出无懈可击并且角色有♠️️ 那么可以发动技能
                if (filter({ name: 'wuxie' }, player, event) && player.countCards('he', { suit: 'spade' })) return true;
                return false;
              },
              ai: {
                respondSha: true,
                respondShan: true,
                skillTagFilter(player, tag) {
                  var name;
                  switch (tag) {
                    case 'respondSha':
                      name = 'diamond';
                      break;
                    case 'respondShan':
                      name = 'club';
                      break;
                    case 'save':
                      name = 'heart';
                      break;
                  }
                  if (!player.countCards('he', { suit: name })) return false;
                },
                order(item, player) {
                  if (player && _status.event.type == 'phase') {
                    var max = 0;
                    var list = ['sha', 'tao'];
                    var map = { sha: 'diamond', tao: 'heart' };
                    for (var i = 0; i < list.length; i++) {
                      var name = list[i];
                      if (
                        player.countCards('he', function (card) {
                          return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                        }) > 0 &&
                        player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                      ) {
                        var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                        if (temp > max) max = temp;
                      }
                    }
                    max /= 1.1;
                    return max;
                  }
                  return 2;
                },
              },
              hiddenCard(player, name) {
                if (name == 'wuxie' && _status.connectMode && player.countCards('h') > 0) return true;
                if (name == 'wuxie') return player.countCards('he', { suit: 'spade' }) > 0;
                if (name == 'tao') return player.countCards('he', { suit: 'heart' }) > 0;
              },
              group: ['hj_jl_longhun_num', 'hj_jl_longhun_discard'],
            },
            hj_jl_longhun1: {
              //龙魂1
              audio: 'ext:魂将/武将配音/极略篇/魂赵云:1',
              enable: ['chooseToUse', 'chooseToRespond'],
              prompt() {
                return '将至多两张♥️️牌当作桃使用';
              },
              position: 'he',
              check(card, event) {
                if (ui.selected.cards.length) return 0;
                return 10 - get.value(card);
              },
              selectCard: [1, 2],
              viewAs: {
                name: 'tao',
              },
              filter(event, player) {
                return player.countCards('he', { suit: 'heart' }) > 0;
              },
              filterCard(card) {
                return card.suit == 'heart';
              },
              ai: {
                basic: {
                  order(card, player) {
                    if (player.hasSkillTag('pretao')) return 5;
                    return 2;
                  },
                  useful: [8, 6.5, 5, 4],
                  value: [8, 6.5, 5, 4],
                },
                result: {
                  target: 2,
                  target_use(player, target) {
                    // if(player==target&&player.hp<=0) return 2;
                    if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                    var nd = player.needsToDiscard();
                    var keep = false;
                    if (nd <= 0) {
                      keep = true;
                    } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                      keep = true;
                    }
                    var mode = get.mode();
                    if (target.hp >= 2 && keep && target.hasFriend()) {
                      if (target.hp > 2 || nd == 0) return 0;
                      if (target.hp == 2) {
                        if (
                          game.hasPlayer(function (current) {
                            if (target != current && get.attitude(target, current) >= 3) {
                              if (current.hp <= 1) return true;
                              if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                            }
                          })
                        ) {
                          return 0;
                        }
                      }
                    }
                    if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                    var att = get.attitude(player, target);
                    if (att < 3 && att >= 0 && player != target) return 0;
                    var tri = _status.event.getTrigger();
                    if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                      if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                        var num = game.countPlayer(function (current) {
                          if (current.identity == 'fan') {
                            return current.countCards('h', 'tao');
                          }
                        });
                        if (num > 1 && player == target) return 2;
                        return 0;
                      }
                    }
                    if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                      if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                        return 0;
                      }
                    }
                    if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                      return 0;
                    }
                    return 2;
                  },
                },
                tag: {
                  recover: 1,
                  save: 1,
                },
              },
            },
            hj_jl_longhun2: {
              //龙魂2
              audio: 'ext:魂将/武将配音/极略篇/魂赵云:1',
              enable: ['chooseToUse', 'chooseToRespond'],
              prompt() {
                return '将至多两张♦️️牌当作火杀使用或打出';
              },
              position: 'he',
              check(card, event) {
                if (ui.selected.cards.length) return 0;
                return 10 - get.value(card);
              },
              selectCard: [1, 2],
              viewAs: {
                name: 'sha',
                nature: 'fire',
              },
              filter(event, player) {
                return player.countCards('he', { suit: 'diamond' }) > 0;
              },
              filterCard(card) {
                return card.suit == 'diamond';
              },
              ai: {
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
                  ) {
                    return false;
                  }
                  if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                  return true;
                },
                basic: {
                  useful: [5, 1],
                  value: [5, 1],
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
                    ) {
                      return 3.1;
                    }
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
                    ) {
                      return eff / 1.2;
                    }
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
            hj_jl_longhun3: {
              //龙魂3
              audio: 'ext:魂将/武将配音/极略篇/魂赵云:1',
              enable: ['chooseToUse', 'chooseToRespond'],
              prompt() {
                return '将至多两张♠️️牌当作无懈可击使用';
              },
              position: 'he',
              check(card, event) {
                if (ui.selected.cards.length) return 0;
                return 7 - get.value(card);
              },
              selectCard: [1, 2],
              viewAs: {
                name: 'wuxie',
              },
              viewAsFilter(player) {
                return player.countCards('he', { suit: 'spade' }) > 0;
              },
              filterCard(card) {
                return card.suit == 'spade';
              },
              ai: {
                basic: {
                  useful: [6, 4],
                  value: [6, 4],
                },
                result: {
                  player: 1,
                },
                expose: 0.2,
              },
            },
            hj_jl_longhun4: {
              //龙魂4
              audio: 'ext:魂将/武将配音/极略篇/魂赵云:1',
              enable: ['chooseToUse', 'chooseToRespond'],
              prompt() {
                return '将至多两张♣️️牌当作闪使用或打出';
              },
              position: 'he',
              check(card, event) {
                if (ui.selected.cards.length) return 0;
                return 10 - get.value(card);
              },
              selectCard: [1, 2],
              viewAs: {
                name: 'shan',
              },
              filter(event, player) {
                return player.countCards('he', { suit: 'club' }) > 0;
              },
              filterCard(card) {
                return card.suit == 'club';
              },
              ai: {
                order: 3,
                basic: {
                  useful: [7, 2],
                  value: [7, 2],
                },
                result: {
                  player: 1,
                },
              },
            },
            hj_jl_longhun: {
              //龙魂
              audio: 'ext:魂将/武将配音/极略篇/魂赵云:2',
              group: ['hj_jl_longhun1', 'hj_jl_longhun2', 'hj_jl_longhun3', 'hj_jl_longhun4', 'hj_jl_longhun_num', 'hj_jl_longhun_discard'],
              ai: {
                skillTagFilter(player, tag) {
                  switch (tag) {
                    case 'respondSha': {
                      if (player.countCards('he', { suit: 'diamond' }) == 0) return false;
                      break;
                    }
                    case 'respondShan': {
                      if (player.countCards('he', { suit: 'club' }) == 0) return false;
                      break;
                    }
                    case 'save': {
                      if (player.countCards('he', { suit: 'heart' }) == 0) return false;
                      break;
                    }
                  }
                },
                respondSha: true,
                respondShan: true,
                threaten: 1.8,
              },
              subSkill: {
                num: {
                  trigger: {
                    player: 'useCard',
                  },
                  forced: true,
                  popup: false,
                  filter(event, player) {
                    var evt = event;
                    return (evt.skill == 'hj_jl_longhun1' || evt.skill == 'hj_jl_longhun2' || (['sha', 'tao'].includes(evt.card.name) && evt.skill == 'relonghun')) && evt.cards && evt.cards.length == 2;
                  },
                  content() {
                    trigger.baseDamage++;
                  },
                },
                discard: {
                  trigger: {
                    player: ['useCardAfter', 'respondAfter'],
                  },
                  forced: true,
                  popup: false,
                  logTarget() {
                    return _status.currentPhase;
                  },
                  autodelay(event) {
                    return event.name == 'respond' ? 0.5 : false;
                  },
                  filter(evt, player) {
                    return (evt.skill == 'hj_jl_longhun3' || evt.skill == 'hj_jl_longhun4' || (['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'relonghun')) && evt.cards && evt.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
                  },
                  content() {
                    player.line(_status.currentPhase, 'green');
                    player.discardPlayerCard(_status.currentPhase, 'he', true);
                  },
                },
              },
            },
            hj_jl_hemou: {
              //合谋
              audio: 'ext:魂将/武将配音/极略篇/魂黄月英:2',
              srlose: true,
              trigger: {
                global: 'phaseBegin',
              },
              filter(event, player) {
                return event.player != player && player.countCards('h') > 0;
              },
              forced: true,
              content() {
                'step 0';
                player.chooseCard('是否对' + get.translation(trigger.player) + '发动【合谋】?').ai = function (card) {
                  if (get.attitude(player, trigger.player) > 0 && !trigger.player.countCards('j', 'lebu') && trigger.player.countCards('h') > 2) return 4 - get.value(card);
                  return false;
                };
                ('step 1');
                if (result.cards?.length) {
                  trigger.player.gain(result.cards);
                  player.$give(1, trigger.player);
                  switch (result.cards[0].suit) {
                    case 'heart':
                      trigger.player.addTempSkill('hj_jl_hemou_heart', 'phaseAfter');
                      break;
                    case 'diamond':
                      trigger.player.addTempSkill('hj_jl_hemou_diamond', 'phaseAfter');
                      break;
                    case 'club':
                      trigger.player.addTempSkill('hj_jl_hemou_club', 'phaseAfter');
                      break;
                    case 'spade':
                      trigger.player.addTempSkill('hj_jl_hemou_spade', 'phaseAfter');
                      break;
                  }
                } else {
                  event.finish();
                }
              },
              subSkill: {
                heart: {
                  enable: 'phaseUse',
                  usable: 1,
                  marktext: '♥️️︎',
                  mark: true,
                  filter(event, player) {
                    return player.countCards('h', { suit: 'heart' });
                  },
                  viewAs: {
                    name: 'shunshou',
                  },
                  viewAsFilter(player) {
                    if (!player.countCards('h', { suit: 'heart' })) return false;
                  },
                  prompt: '将一张♥️️︎牌当顺手牵羊使用',
                  filterCard(card, player) {
                    return card.suit == 'heart';
                  },
                  check(card) {
                    return 6 - get.value(card);
                  },
                  ai: {
                    order: 7.5,
                    threaten: 1.5,
                    wuxie(target, card, player, viewer) {
                      if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                        return 0;
                      }
                    },
                    basic: {
                      order: 7.5,
                      useful: 4,
                      value: 9,
                    },
                    result: {
                      target(player, target) {
                        if (get.attitude(player, target) <= 0)
                          return target.countCards('he', function (card) {
                            return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                          }) > 0
                            ? -1.5
                            : 1.5;
                        var js = target.getCards('j');
                        if (js.length) {
                          var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                          //if(jj.name=='shunshou') return 3;
                          if (js.length == 1 && get.effect(target, jj, target, player) >= 0) {
                            return -1.5;
                          }
                          return 3;
                        }
                        return -1.5;
                      },
                      player(player, target) {
                        if (
                          get.attitude(player, target) < 0 &&
                          !target.countCards('he', function (card) {
                            return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                          })
                        ) {
                          return 0;
                        }
                        if (get.attitude(player, target) > 1) {
                          var js = target.getCards('j');
                          if (js.length) {
                            var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                            //if(jj.name=='shunshou') return 1;
                            if (js.length == 1 && get.effect(target, jj, target, player) >= 0) {
                              return 0;
                            }
                            return 1;
                          }
                          return 0;
                        }
                        return 1;
                      },
                    },
                    tag: {
                      loseCard: 1,
                      gain: 1,
                    },
                  },
                  intro: {
                    name: '合谋·顺手',
                    content: '回合限一次,可将一张♥️️︎牌当顺手牵羊使用',
                  },
                },
                diamond: {
                  enable: 'chooseToUse',
                  usable: 1,
                  marktext: '♦️️︎',
                  mark: true,
                  viewAs: {
                    name: 'huogong',
                    nature: 'fire',
                  },
                  filterCard(card, player) {
                    return card.suit == 'diamond';
                  },
                  viewAsFilter(player) {
                    if (!player.countCards('h', { suit: 'diamond' })) return false;
                  },
                  prompt: '将一张♦️️︎牌当火攻使用',
                  check(card) {
                    var player = _status.currentPhase;
                    if (player.countCards('h') > player.hp) {
                      return 6 - get.value(card);
                    }
                    return 4 - get.value(card);
                  },
                  ai: {
                    order: 4,
                    threaten: 1.5,
                    basic: {
                      order: 4,
                      value: [3, 1],
                      useful: 1,
                    },
                    wuxie(target, card, player, current, state) {
                      if (get.attitude(current, player) >= 0 && state > 0) return false;
                    },
                    result: {
                      player(player) {
                        var nh = player.countCards('h');
                        if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                          if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                            return -10;
                          }
                          if (_status.event.skill) {
                            var viewAs = get.info(_status.event.skill).viewAs;
                            if (viewAs == 'huogong') return -10;
                            if (viewAs && viewAs.name == 'huogong') return -10;
                          }
                        }
                        return 0;
                      },
                      target(player, target) {
                        if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                        if (player.countCards('h') <= 1) return 0;
                        if (target == player) {
                          if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                            return -1.5;
                          }
                          if (_status.event.skill) {
                            var viewAs = get.info(_status.event.skill).viewAs;
                            if (viewAs == 'huogong') return -1.5;
                            if (viewAs && viewAs.name == 'huogong') return -1.5;
                          }
                          return 0;
                        }
                        return -1.5;
                      },
                    },
                    tag: {
                      damage: 1,
                      fireDamage: 1,
                      natureDamage: 1,
                      norepeat: 1,
                    },
                  },
                  intro: {
                    name: '合谋·火攻',
                    content: '回合限一次,可将一张♦️️︎牌当火攻使用',
                  },
                },
                club: {
                  enable: 'phaseUse',
                  usable: 1,
                  marktext: '♣️️︎',
                  mark: true,
                  viewAs: {
                    name: 'jiedao',
                  },
                  filterCard(card, player) {
                    return card.suit == 'club';
                  },
                  viewAsFilter(player) {
                    if (!player.countCards('h', { suit: 'club' })) return false;
                  },
                  prompt: '将一张♣️️︎牌当借刀杀人使用',
                  check(card) {
                    return 6 - get.value(card);
                  },
                  ai: {
                    order: 8,
                    wuxie(target, card, player, viewer) {
                      if (player == game.me && get.attitude(viewer, player) > 0) {
                        return 0;
                      }
                    },
                    basic: {
                      order: 8,
                      value: 2,
                      useful: 1,
                    },
                    result: {
                      target: -1.5,
                      player(player) {
                        if (player.getCards('he', { subtype: 'equip1' }).length) return 0;
                        return 1.5;
                      },
                    },
                    tag: {
                      gain: 1,
                      use: 1,
                      useSha: 1,
                      loseCard: 1,
                    },
                  },
                  intro: {
                    name: '合谋·借刀',
                    content: '回合限一次,可将一张♣️️︎牌当借刀杀人使用',
                  },
                },
                spade: {
                  enable: 'phaseUse',
                  usable: 1,
                  marktext: '♠️️︎',
                  mark: true,
                  viewAs: {
                    name: 'juedou',
                  },
                  filterCard(card, player) {
                    return card.suit == 'spade';
                  },
                  check(card) {
                    return 6 - get.value(card);
                  },
                  ai: {
                    order: 5,
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
                  intro: {
                    name: '合谋·决斗',
                    content: '回合限一次,可将一张♠️️︎牌当决斗使用',
                  },
                },
              },
            },
            hj_jl_zhiming: {
              //知命
              audio: 'ext:魂将/武将配音/极略篇/魂黄月英:2',
              trigger: {
                global: 'phaseBegin',
              },
              filter(event, player) {
                return event.player != player && event.player.countCards('h') && player.countCards('h');
              },
              forced: true,
              content() {
                'step 0';
                player.chooseToDiscard('h', '知命:你可以弃置一张手牌,弃置其一张手牌,若两张牌颜色相同,你令其跳过此回合的摸牌阶段或出牌阶段').ai = function (card) {
                  if (get.attitude(player, trigger.player) < -3) return 10 - get.value(card);
                  return 0;
                };
                ('step 1');
                if (result.cards?.length) {
                  event.color = get.color(result.cards[0]);
                  event.card = trigger.player.getCards('h').randomGet();
                  trigger.player.discard(event.card);
                } else {
                  event.finish();
                }
                ('step 2');
                if (event.color == get.color(event.card)) {
                  player.chooseControl('跳过摸牌', '跳过出牌').ai = function () {
                    if (trigger.player.countCards('h') > trigger.player.hp) return '跳过出牌';
                    return '跳过摸牌';
                  };
                } else {
                  event.finish();
                }
                ('step 3');
                if (result.control == '跳过摸牌') {
                  trigger.player.skip('phaseDraw');
                  game.log(trigger.player, '跳过了摸牌阶段');
                }
                if (result.control == '跳过出牌') {
                  trigger.player.skip('phaseUse');
                  game.log(trigger.player, '跳过了出牌阶段');
                }
              },
              ai: {
                expose: 0.4,
              },
            },
            hj_jl_suyin: {
              //夙隐
              audio: 'ext:魂将/武将配音/极略篇/魂黄月英:2',
              trigger: {
                player: 'loseEnd',
              },
              forced: true,
              filter(event, player) {
                if (player.countCards('h')) return false;
                if (Array.isArray(event.cards))
                  for (var i of event.cards) {
                    if (i.original == 'h') return _status.currentPhase != player;
                  }
                return false;
              },
              content() {
                'step 0';
                player.chooseTarget('【夙隐】:选择一名角色将其翻面', function (card, player, target) {
                  return player != target;
                }).ai = function (target) {
                  if (target.isTurnedOver() && get.attitude(player, target) > 0) return 10;
                  if (!target.isTurnedOver() && get.attitude(player, target) < 0) return target.countCards('h');
                  return 0;
                };
                ('step 1');
                if (result.targets?.length) {
                  result.targets[0].turnOver();
                }
              },
              ai: {
                expose: 0.3,
              },
            },
            hj_jl_qicai: {
              //奇才
              audio: 'ext:魂将/武将配音/极略篇/魂黄月英:2',
              srlose: true,
              trigger: {
                player: 'loseEnd',
              },
              forced: true,
              filter(event, player) {
                if (Array.isArray(event.cards))
                  for (var i of event.cards) {
                    if (i.original == 'h') return true;
                  }
                return false;
              },
              content() {
                'step 0';
                player.judge(function (card) {
                  if (get.color(card) == 'red') return 2;
                  return -2;
                });
                ('step 1');
                if (result.bool) {
                  player.draw();
                }
              },
              ai: {
                threaten: 0.8,
                effect: {
                  target(card) {
                    if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.3;
                  },
                },
              },
            },
            hj_jl_yingcai: {
              //英才
              audio: 'ext:魂将/武将配音/极略篇/魂周瑜:2',
              trigger: {
                player: 'phaseDrawBegin',
              },
              check() {
                return 1;
              },
              content() {
                'step 0';
                trigger.untrigger();
                trigger.finish();
                event.suit = [];
                event.cards = [];
                ('step 1');
                event.cards2 = get.cards();
                if (!event.suit.includes(event.cards2.suit)) event.suit.push(event.cards2.suit);
                if (event.suit.length <= 2) {
                  event.cards = event.cards.concat(event.cards2);
                  event.redo();
                } else {
                  event.cards1 = event.cards;
                  event.cards1 = event.cards1.concat(event.cards2[0]);
                  player.showCards(event.cards1);
                  ui.discardPile.appendChild(event.cards2[0]);
                }
                ('step 2');
                player.gain(event.cards);
                if (event.cards.length) {
                  player.$draw(event.cards);
                }
              },
            },
            hj_jl_qinyin: {
              //琴音
              audio: 'ext:魂将/武将配音/极略篇/魂周瑜:2',
              trigger: {
                player: 'phaseDiscardBegin',
              },
              check() { },
              filter(event, player) {
                return player.countCards('h') > 0;
              },
              content() {
                'step 0';
                player
                  .chooseControl('选项一', '选项二', function () {
                    return Math.random() < 0.5 ? '选项一' : '选项二';
                  })
                  .set('prompt', '琴音<div class="text">1:摸两张牌,令所有角色合失去1点体力.</div><div class="text">2:弃一张牌,令所有角色各回复1点体力.</div>')
                  .set('ai', function (event, player) {
                    var friends = player.getFriends(target);
                    var diren = player.getEnemies(target);
                    var lose = 1,
                      recover = 0;
                    if (player.hp < player.maxHp / 2) recover = 10;
                    for (var i = 0; i < friends.length; i++) {
                      if (friends[i].hp < 2) {
                        if (friends[i].isZhu) recover++;
                        recover++;
                      }
                    }
                    for (var i = 0; i < diren.length; i++) {
                      if (diren[i].hp < 2) {
                        if (diren[i].isZhu) lose++;
                        lose++;
                      }
                    }
                    if (recover < lose) {
                      return '选项一';
                    } else {
                      return '选项二';
                    }
                  });
                ('step 1');
                if (result.control == '选项一') {
                  player.draw(2);
                  event.players = game.players.slice(0);
                  for (var i = 0; i < event.players.length; i++) {
                    event.players[i].loseHp();
                  }
                } else {
                  player.chooseToDiscard(true);
                  event.players = game.players.slice(0);
                  for (var i = 0; i < event.players.length; i++) {
                    event.players[i].recover(1);
                  }
                }
              },
            },
            hj_jl_yeyan: {
              //业炎
              audio: 'ext:魂将/武将配音/极略篇/魂周瑜:3',
              enable: 'phaseUse',
              filter(event, player) {
                return !player.storage.hj_jl_yeyan;
              },
              init(player) {
                player.storage.hj_jl_yeyan = false;
              },
              filterTarget(card, player, target) {
                return target != player;
              },
              filterCard(card) {
                var suit = card.suit;
                for (var i = 0; i < ui.selected.cards.length; i++) {
                  if (ui.selected.cards[i].suit == suit) return false;
                }
                return true;
              },
              mark: true,
              selectCard: [1, 4],
              line: 'fire',
              check() {
                return -1;
              },
              selectTarget: [1, 2],
              content() {
                'step 0';
                var i = 0;
                player.unmark('hj_jl_yeyan');
                player.storage.hj_jl_yeyan = true;
                if (cards.length >= 3 && !i) {
                  player.loseHp(3);
                  i++;
                }
                ('step 1');
                for (var i = 0; i < targets.length; i++) {
                  targets[i].damage('fire', cards.length);
                }
              },
              intro: {
                content: 'limited',
              },
              ai: {
                order: 1,
                result: {
                  target(player, target) {
                    if (target.hasSkillTag('nofire')) return 0;
                    if (lib.config.mode == 'versus') return -1;
                    for (var i = 0; i < game.players.length; i++) {
                      if (lib.config.mode == 'identity') {
                        if (game.players[i].ai.shown <= 0.2) return 0;
                      } else if (lib.config.mode == 'guozhan') {
                        if (game.players[i].identity == 'unknown') return 0;
                      }
                    }
                    return get.damageEffect(target, player);
                  },
                },
              },
            },
            hj_jl_guoshi: {
              //国士
              audio: 'ext:魂将/武将配音/极略篇/魂吕蒙:2',
              trigger: {
                global: 'phaseEnd',
              },
              filter(event, player) {
                return event.player.storage.hj_jl_guoshi.length;
              },
              init() {
                for (var i = 0; i < game.players.length; i++) {
                  game.players[i].storage.hj_jl_guoshi = [];
                }
              },
              forced: true,
              content() {
                'step 0';
                var att = get.attitude(player, trigger.player);
                player.chooseCardButton(trigger.player.storage.hj_jl_guoshi, '是否对' + get.translation(trigger.player) + '发动【国士】？').ai = function (button) {
                  if (att > 0) return 1;
                  return 0;
                };
                ('step 1');
                if (result.bool) {
                  trigger.player.gain(result.buttons[0].link);
                  trigger.player.$gain(result.buttons[0].link);
                }
                ('step 2');
                delete trigger.player.storage.hj_jl_guoshi;
              },
              group: ['hj_jl_guoshi2'],
              global: ['hj_jl_guoshi_check'],
              subSkill: {
                check: {
                  trigger: {
                    player: 'phaseBefore',
                  },
                  forced: true,
                  popup: false,
                  content() {
                    player.storage.hj_jl_guoshi = [];
                    player.addTempSkill('hj_jl_guoshi_judge', 'phaseAfter');
                    player.addTempSkill('hj_jl_guoshi_discard', 'phaseAfter');
                  },
                },
                judge: {
                  audio: 2,
                  trigger: {
                    global: 'judgeAfter',
                  },
                  forced: true,
                  popup: false,
                  filter(event, player) {
                    if (_status.currentPhase != player) return false;
                    if (event.result.card.parentNode.id == 'discardPile') return true;
                    return false;
                  },
                  content() {
                    if (trigger.result.card) player.storage.hj_jl_guoshi = player.storage.hj_jl_guoshi.concat(trigger.result.card);
                  },
                },
                discard: {
                  audio: 2,
                  trigger: {
                    global: 'discardAfter',
                  },
                  filter(event, player) {
                    if (_status.currentPhase != player) return false;
                    if (Array.isArray(event.cards))
                      for (var i of event.cards) {
                        if (get.position(i) == 'd') {
                          return true;
                        }
                      }
                    return false;
                  },
                  forced: true,
                  popup: false,
                  content() {
                    'step 0';
                    for (var i = 0; i < trigger.cards.length; i++) {
                      if (get.position(trigger.cards[i]) == 'd' && trigger.cards[i]) {
                        player.storage.hj_jl_guoshi = player.storage.hj_jl_guoshi.concat(trigger.cards[i]);
                      }
                    }
                  },
                },
              },
              ai: {
                expose: 0.2,
              },
            },
            hj_jl_guoshi2: {
              //国士2
              audio: 'hj_jl_guoshi',
              trigger: { global: 'phaseBegin' },
              prompt: '是否发动【国士】观看牌顶的牌？',
              forced: true,
              content() {
                'step 0';
                if (player.isUnderControl()) {
                  game.modeSwapPlayer(player);
                }
                var cards = get.cards(2);
                event.cards = cards;
                var switchToAuto = function () {
                  _status.imchoosing = false;
                  if (event.dialog) event.dialog.close();
                  if (event.control) event.control.close();
                  const target = trigger.player;
                  const att = get.attitude(player, target);
                  const top = [], bottom = cards;
                  for (const i of target.getCards('j')) {
                    const judge = get.judge(i);
                    bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
                    if (bottom.length) {
                      top.push(bottom.shift());
                    }
                  }
                  bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
                  while (bottom.length) {
                    top.push(bottom.shift());
                  }
                  for (var i = 0; i < top.length; i++) {
                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                  }
                  for (i = 0; i < bottom.length; i++) {
                    ui.cardPile.appendChild(bottom[i]);
                  }
                  player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                  game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                };
                var chooseButton = function (online, player, cards) {
                  var event = _status.event;
                  player = player || event.player;
                  cards = cards || event.cards;
                  event.top = [];
                  event.bottom = [];
                  event.status = true;
                  event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌(先选择的在上)', cards);
                  event.switchToAuto = function () {
                    event._result = 'ai';
                    event.dialog.close();
                    event.control.close();
                    _status.imchoosing = false;
                  };
                  event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function (link) {
                    var event = _status.event;
                    if (link == 'ok') {
                      if (online) {
                        event._result = {
                          top: [],
                          bottom: [],
                        };
                        for (var i = 0; i < event.top.length; i++) {
                          event._result.top.push(event.top[i].link);
                        }
                        for (var i = 0; i < event.bottom.length; i++) {
                          event._result.bottom.push(event.bottom[i].link);
                        }
                      } else {
                        var i;
                        for (i = 0; i < event.top.length; i++) {
                          ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                        }
                        for (i = 0; i < event.bottom.length; i++) {
                          ui.cardPile.appendChild(event.bottom[i].link);
                        }
                        for (i = 0; i < event.dialog.buttons.length; i++) {
                          if (event.dialog.buttons[i].classList.contains('glow') == false && event.dialog.buttons[i].classList.contains('target') == false) ui.cardPile.appendChild(event.dialog.buttons[i].link);
                        }
                        player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
                        game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
                      }
                      event.dialog.close();
                      event.control.close();
                      game.resume();
                      _status.imchoosing = false;
                    } else if (link == 'pileTop') {
                      event.status = true;
                      event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
                    } else {
                      event.status = false;
                      event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
                    }
                  });
                  for (var i = 0; i < event.dialog.buttons.length; i++) {
                    event.dialog.buttons[i].classList.add('selectable');
                  }
                  event.custom.replace.button = function (link) {
                    var event = _status.event;
                    if (link.classList.contains('target')) {
                      link.classList.remove('target');
                      event.top.remove(link);
                    } else if (link.classList.contains('glow')) {
                      link.classList.remove('glow');
                      event.bottom.remove(link);
                    } else if (event.status) {
                      link.classList.add('target');
                      event.top.unshift(link);
                    } else {
                      link.classList.add('glow');
                      event.bottom.push(link);
                    }
                  };
                  event.custom.replace.window = function () {
                    for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                      _status.event.dialog.buttons[i].classList.remove('target');
                      _status.event.dialog.buttons[i].classList.remove('glow');
                      _status.event.top.length = 0;
                      _status.event.bottom.length = 0;
                    }
                  };
                  game.pause();
                  game.countChoose();
                };
                event.switchToAuto = switchToAuto;
                if (event.isMine()) {
                  chooseButton();
                  event.finish();
                } else if (event.isOnline()) {
                  event.player.send(chooseButton, true, event.player, event.cards);
                  event.player.wait();
                  game.pause();
                } else {
                  event.switchToAuto();
                  event.finish();
                }
                ('step 1');
                if (event.result == 'ai' || !event.result) {
                  event.switchToAuto();
                } else {
                  var top = event.result.top || [];
                  var bottom = event.result.bottom || [];
                  for (var i = 0; i < top.length; i++) {
                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                  }
                  for (i = 0; i < bottom.length; i++) {
                    ui.cardPile.appendChild(bottom[i]);
                  }
                  for (i = 0; i < event.cards.length; i++) {
                    if (!top.includes(event.cards[i]) && !bottom.includes(event.cards[i])) {
                      ui.cardPile.appendChild(event.cards[i]);
                    }
                  }
                  player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
                  game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                }
              },
            },
            hj_jl_shelie: {
              //涉猎
              audio: 'ext:魂将/武将配音/极略篇/魂吕蒙:2',
              trigger: {
                player: 'phaseDrawBegin',
              },
              forced: true,
              content() {
                'step 0';
                trigger.untrigger();
                trigger.finish();
                event.cards = [];
                ('step 1');
                player
                  .chooseControl('basic', 'trick', 'equip', function () {
                    if (Math.random() < 0.4) return 'trick';
                    if (Math.random() < 0.8 && Math.random() >= 0.4) return 'basic';
                    return 'equip';
                  })
                  .set('prompt', '请选择想要获得牌的类型');
                ('step 2');
                event.control = result.control;
                var card = get.drawcardPile(function (card) {
                  return get.type(card) == event.control;
                });
                ui.cardPile.removeChild(card);
                event.cards.push(card);
                if (event.cards.length < 4) {
                  event.goto(1);
                } else {
                  player.gain(event.cards, 'draw');
                }
              },
            },
            hj_jl_gongxin: {
              //攻心
              audio: 'ext:魂将/武将配音/极略篇/魂吕蒙:2',
              enable: 'phaseUse',
              usable: 1,
              filterTarget(card, player, target) {
                return target != player && target.countCards('h');
              },
              content() {
                'step 0';
                player.viewCards('攻心', target.getCards('h'));
                event.cards = targe.getCards('h', function (card) {
                  return card.suit == 'heart';
                });
                if (event.cards.length) {
                  target.showCards(event.cards);
                } else {
                  event.finish();
                }
                ('step 1');
                if (event.cards.length == 1) {
                  target.discard(event.cards);
                  target.damage();
                  event.finish();
                } else {
                  player.chooseCardButton('选择一张获得之', event.cards);
                }
                ('step 2');
                player.gain(result.links[0]);
                target.$give(result.links[0], player);
              },
              ai: {
                threaten: 1.5,
                result: {
                  target(player, target) {
                    return -target.countCards('h');
                  },
                },
                order: 10,
                expose: 0.4,
              },
            },
            hj_jl_dailao: {
              //待劳
              audio: 'ext:魂将/武将配音/极略篇/魂☆陆逊:2',
              usable: 1,
              srlose: true,
              enable: 'phaseUse',
              filterTarget(cards, target, player) {
                return player != target;
              },
              filterCard: true,
              position: 'he',
              check(card) {
                return 6 - get.value(card);
              },
              selectCard: [0, 1],
              content() {
                if (cards.length == 0) {
                  game.asyncDraw([player, target]);
                } else {
                  target.chooseToDiscard('he', true);
                }
                player.turnOver();
                target.turnOver();
              },
              ai: {
                order: 9,
                result: {
                  player(player) {
                    if (ui.selected.cards.length) {
                      if (player.isTurnedOver()) return 3;
                      if (!player.isTurnedOver()) return -4;
                    }
                    if (ui.selected.cards.length == 0) {
                      if (player.isTurnedOver()) return 4;
                      if (!player.isTurnedOver()) return -3;
                    }
                  },
                  target(player, target, card) {
                    if (ui.selected.cards.length) {
                      if (target.isTurnedOver()) return 3;
                      if (!target.isTurnedOver()) return -4;
                    }
                    if (ui.selected.cards.length == 0) {
                      if (target.isTurnedOver()) return 4;
                      if (!target.isTurnedOver()) return -3;
                    }
                  },
                },
              },
            },
            hj_jl_youdi: {
              //诱敌
              audio: 'ext:魂将/武将配音/极略篇/魂☆陆逊:2',
              srlose: true,
              enable: ['chooseToUse', 'chooseToRespond'],
              filterCard() {
                return false;
              },
              selectCard: -1,
              viewAs: { name: 'shan' },
              viewAsFilter(player) {
                return player.isTurnedOver();
              },
              prompt: '可以将你的武将牌正面朝上,视为打出一张【闪】',
              check() {
                return true;
              },
              onuse(result, player) {
                player.turnOver(false);
              },
              onrespond(result, player) {
                player.turnOver(false);
              },
              ai: {
                skillTagFilter(player) {
                  return player.isTurnedOver();
                },
                respondShan: true,
              },
              group: 'hj_jl_youdi2',
            },
            hj_jl_youdi2: {
              trigger: { global: 'shaMiss' },
              filter(event, player) {
                return event.target == player;
              },
              forced: true,
              content() {
                'step 0';
                player.chooseToDiscard('是否发动【诱敌】？', [1, trigger.player.countCards('he')], 'he').ai = function (card) {
                  if (get.attitude(player, trigger.player) <= 0) return 4 - get.value(card);
                  return false;
                };
                ('step 1');
                if (result.cards?.length) {
                  trigger.player.chooseToDiscard(result.cards.length, 'he', true);
                }
              },
            },
            hj_jl_ruya: {
              //儒雅
              audio: 'ext:魂将/武将配音/极略篇/魂☆陆逊:2',
              srlose: true,
              trigger: {
                player: 'loseEnd',
              },
              forced: true,
              filter(event, player) {
                if (player.countCards('h')) return false;
                if (Array.isArray(event.cards))
                  for (var i of event.cards) {
                    if (i.original == 'h') return true;
                  }
                return false;
              },
              content() {
                player.turnOver();
                player.draw(player.maxHp - player.countCards('h'));
              },
              ai: {
                threaten: 0.8,
                effect: {
                  target(card, player, target) {
                    if (target.countCards('h') == 1 && card.name == 'guohe') return 0.5;
                    if (target.isTurnedOver() && target.countCards('h') == 1 && (card.name == 'guohe' || card.name == 'shunshou')) return -10;
                  },
                },
                noh: true,
              },
            },
            hj_jl_jieyan: {
              //劫焰
              audio: 'ext:魂将/武将配音/极略篇/魂陆逊:2',
              trigger: {
                global: 'useCardToBefore',
              },
              forced: true,
              filter(event, player) {
                return player.countCards('h') > 0 && (get.type(event.card) == 'trick' || event.card.name == 'sha') && get.color(event.card) == 'red' && event.targets.length == 1;
              },
              content() {
                'step 0';
                player.chooseToDiscard('是否对' + get.translation(trigger.target) + '发动【劫焰】？', 'h').ai = function (card) {
                  if (get.attitude(player, trigger.target) <= 0) return 4 - get.value(card);
                  return -1;
                };
                ('step 1');
                if (result.bool) {
                  trigger.untrigger();
                  trigger.finish();
                  trigger.target.damage('fire');
                }
              },
              ai: {
                expose: 0.2,
              },
            },
            hj_jl_lianying: {
              //连营
              audio: 'ext:魂将/武将配音/极略篇/魂陆逊:2',
              trigger: {
                global: 'damageAfter',
              },
              forced: true,
              filter(event, player) {
                return event.nature == 'fire' && player.countCards('h') <= player.maxHp && player.countCards('he', { color: 'red' }) > 0;
              },
              content() {
                'step 0';
                player.chooseCardTarget({
                  filterCard(card) {
                    return get.color(card) == 'red';
                  },
                  filterTarget(card, player, target) {
                    return get.distance(trigger.player, target) <= 1;
                  },
                  ai1(card) {
                    return 6 - get.value(card);
                  },
                  ai2(target) {
                    return get.damageEffect(target, player, player, 'fire');
                  },
                  position: 'he',
                  prompt: '连营:弃置一张红色牌对目标或与其相距最近的其他目标造成等量火焰伤害',
                });
                ('step 1');
                if (result.cards?.length) {
                  player.discard(result.cards[0]);
                  result.targets[0].damage('fire', trigger.num);
                }
              },
            },
            hj_jl_fenying: {
              //焚营
              audio: 'ext:魂将/武将配音/极略篇/魂陆逊:2',
              trigger: {
                global: 'loseAfter',
              },
              forced: true,
              _priority: -1,
              filter(event, player) {
                if (event.player.countCards('h')) return false;
                if (event.player.hp <= 0) return false;
                if (!event.player.isAlive()) return false;
                if (Array.isArray(event.cards))
                  for (var i of event.cards) {
                    if (i.original == 'h') return true;
                  }
                return false;
              },
              content() {
                'step 0';
                if (trigger.player.hp >= player.hp) {
                  player.draw(Math.min(player.hp, 20));
                } else {
                  player.draw(trigger.player.hp);
                }
                ('step 1');
                if (trigger.player != player && trigger.player.isLinked()) {
                  player.line(trigger.player, 'fire');
                  trigger.player.damage('fire');
                }
              },
              ai: {
                threaten: 0.8,
                effect: {
                  target(card) {
                    if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                  },
                },
                noh: true,
                skillTagFilter(player, tag) {
                  if (tag == 'noh') {
                    if (player.countCards('h') != 1) return false;
                  }
                },
              },
            },
            hj_jl_youxia: {
              //游侠
              audio: 'ext:魂将/武将配音/极略篇/魂甘宁:2',
              srlose: true,
              enable: 'phaseUse',
              filterTarget(card, target, player) {
                return player != target && target.countCards('hej') > 0;
              },
              filter(event, player) {
                return !player.isTurnedOver();
              },
              selectTarget: [1, 3],
              multitarget: true,
              multiline: true,
              content() {
                player.turnOver();
                for (var i = 0; i < targets.length; i++) {
                  player.gainPlayerCard('hej', targets[i]);
                }
              },
              mod: {
                targetEnabled(card, player, target, now) {
                  if (target.isTurnedOver()) {
                    if (card.name == 'sha' || card.name == 'juedou') return false;
                  }
                },
              },
              ai: {
                order: 9,
                result: {
                  player: -1,
                  target(player, target) {
                    if (get.attitude(player, target) <= 0) return target.countCards('he') > 0 ? -1.5 : 1.5;
                    return 0;
                  },
                },
              },
            },
            hj_jl_lvezhen: {
              //掠阵
              audio: 'ext:魂将/武将配音/极略篇/魂甘宁:2',
              trigger: {
                player: 'shaBegin',
              },
              filter(event, player) {
                return event.target.countCards('he');
              },
              check(event, player) {
                return get.attitude(player, event.target) < 0;
              },
              content() {
                'step 0';
                event.cards = get.cards(3);
                player.showCards(event.cards);
                ('step 1');
                event.numx = 0;
                if (Array.isArray(event.cards))
                  for (var i of event.cards) {
                    if (get.type(i) != 'basic') event.numx++;
                    ui.discardPile.appendChild(i);
                  }
                player.$throw(event.cards);
                if (event.numx) {
                  player.discardPlayerCard('请选择想要弃置的牌', trigger.target, [1, event.numx], 'he');
                }
              },
            },
            hj_jl_youlong: {
              //游龙
              audio: 'ext:魂将/武将配音/极略篇/魂甘宁:2',
              enable: 'phaseUse',
              filterCard(card) {
                return get.color(card) == 'black';
              },
              filter(event, player) {
                return ui.discardPile.childNodes.length > ui.cardPile.childNodes.length;
              },
              viewAs: {
                name: 'shunshou',
              },
              viewAsFilter(player) {
                if (!player.countCards('h', { color: 'black' })) return false;
              },
              prompt: '将一张黑色手牌当顺手牵羊使用',
              check(card) {
                return 8 - get.value(card);
              },
              ai: {
                order: 9.5,
                wuxie(target, card, player, viewer) {
                  if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                    return 0;
                  }
                },
                basic: {
                  order: 7.5,
                  useful: 4,
                  value: 9,
                },
                result: {
                  target(player, target) {
                    if (get.attitude(player, target) <= 0) {
                      return target.countCards('he', function (card) {
                        return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                      }) > 0
                        ? -1.5
                        : 1.5;
                      var js = target.getCards('j');
                      if (js.length) {
                        var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                        //if(jj.name=='shunshou') return 3;
                        if (js.length == 1 && get.effect(target, jj, target, player) >= 0) {
                          return -1.5;
                        }
                        return 3;
                      }
                      return -1.5;
                    }
                  },
                  player(player, target) {
                    if (
                      get.attitude(player, target) < 0 &&
                      !target.countCards('he', function (card) {
                        return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                      })
                    ) {
                      return 0;
                    }
                    if (get.attitude(player, target) > 1) {
                      var js = target.getCards('j');
                      if (js.length) {
                        var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                        //if(jj.name=='shunshou') return 1;
                        if (js.length == 1 && get.effect(target, jj, target, player) >= 0) {
                          return 0;
                        }
                        return 1;
                      }
                      return 0;
                    }
                    return 1;
                  },
                },
                tag: {
                  loseCard: 1,
                  gain: 1,
                },
              },
            },
            hj_jl_jieyin: {
              //结姻
              audio: 'ext:魂将/武将配音/极略篇/魂孙尚香:2',
              enable: 'phaseUse',
              filterCard: true,
              usable: 1,
              position: 'he',
              filter(event, player) {
                return player.countCards('he') > 0;
              },
              check(card) {
                var player = _status.event.player;
                if (get.position(card) == 'e') {
                  var subtype = get.subtype(card);
                  if (
                    !game.hasPlayer(function (current) {
                      return current != player && current.hp != player.hp && get.attitude(player, current) > 0 && !current.countCards('e', { subtype: subtype });
                    })
                  ) {
                    return 0;
                  }
                  if (player.countCards('h', { subtype: subtype })) return 20 - get.value(card);
                  return 10 - get.value(card);
                } else {
                  if (player.countCards('e')) return 0;
                  if (player.countCards('h', { type: 'equip' })) return 0;
                  return 8 - get.value(card);
                }
              },
              filterTarget(card, player, target) {
                if (!target.hasSex('male')) return false;
                var card = ui.selected.cards[0];
                if (!card) return false;
                if (get.position(card) == 'e' && !target.isEmpty(get.subtype(card))) return false;
                return true;
              },
              discard: false,
              delay: false,
              lose: false,
              content() {
                'step 0';
                if (get.position(cards[0]) == 'e') event._result = { index: 0 };
                else if (get.type(cards[0]) != 'equip' || !target.isEmpty(get.subtype(cards[0]))) event._result = { index: 1 };
                else
                  player.chooseControl().set('choiceList', ['将' + get.translation(cards[0]) + '置入' + get.translation(target) + '的装备区', '弃置' + get.translation(cards[0])]).ai = function () {
                    return 1;
                  };
                ('step 1');
                if (result.index == 0) {
                  player.$give(cards, target, false);
                  target.equip(cards[0]);
                } else {
                  player.discard(cards);
                }
                ('step 2');
                if (player.hp > target.hp) {
                  player.draw();
                  if (target.isDamaged()) target.recover();
                } else if (player.hp < target.hp) {
                  target.draw();
                  if (player.isDamaged()) player.recover();
                }
              },
              ai: {
                order() {
                  var player = _status.event.player;
                  var es = player.getCards('e');
                  for (var i = 0; i < es.length; i++) {
                    if (player.countCards('h', { subtype: get.subtype(es[i]) })) return 10;
                  }
                  return 2;
                },
                result: {
                  target(player, target) {
                    var goon = function () {
                      var es = player.getCards('e');
                      for (var i = 0; i < es.length; i++) {
                        if (player.countCards('h', { subtype: get.subtype(es[i]) })) return true;
                      }
                      return false;
                    };
                    if (player.hp < target.hp) {
                      if (player.isHealthy()) {
                        if (!player.needsToDiscard(1) || goon()) return 0.1;
                        return 0;
                      }
                      return 1.5;
                    }
                    if (player.hp > target.hp) {
                      if (target.isHealthy()) {
                        if (!player.needsToDiscard(1) || goon()) return 0.1;
                        return 0;
                      }
                      return 1;
                    }
                    return 0;
                  },
                },
              },
            },
            hj_jl_yinmeng: {
              //姻盟
              audio: 'ext:魂将/武将配音/极略篇/魂孙尚香:2',
              srlose: true,
              enable: 'phaseUse',
              filter(event, player) {
                return player.countCards('h') && player.storage.hj_jl_yinmeng < Math.max(1, player.maxHp - player.hp);
              },
              filterTarget(card, player, target) {
                return target.sex == 'male' && target.countCards('h') && player != target;
              },
              content() {
                'step 0';
                player.storage.hj_jl_yinmeng++;
                ('step 1');
                event.card = target.getCards('h').randomGet();
                target.$phaseJudge(event.card);
                player.chooseCard(get.translation(target) + '展示的牌是' + get.translation(event.card) + ',请选择你展示的牌', true).ai = function (card) {
                  if (get.attitude(player, target) > 0) return get.type(event.card, 'trick') == get.type(card, 'trick');
                  return get.type(event.card, 'trick') != get.type(card, 'trick');
                };
                ('step 2');
                player.showCards(result.cards[0]);
                if (get.type(result.cards[0], 'trick') == get.type(event.card, 'trick')) {
                  game.asyncDraw([player, target]);
                } else {
                  target.discard(event.card);
                }
              },
              ai: {
                order: 4,
                result: {
                  player: 0.5,
                  target(player, target) {
                    var hs = player.getCards('h');
                    var suit = ['heart', 'diamond', 'club', 'spade'];
                    var num = 0;
                    for (var i = 0; i < hs.length; i++) {
                      if (suit.includes(hs[i].suit)) {
                        suit.remove(hs[i].suit);
                        num++;
                      }
                    }
                    var m = num / 4;
                    if (get.attitude(player, target) > 0 && Math.random() < m) return 1;
                    if (get.attitude(player, target) < 0 && Math.random() < m) return -1;
                    return 0;
                  },
                },
              },
              group: ['hj_jl_yinmeng2'],
            },
            hj_jl_yinmeng2: {
              //姻盟2
              trigger: {
                player: 'phaseBefore',
              },
              forced: true,
              silent: true,
              popup: false,
              _priority: 10,
              content() {
                player.storage.hj_jl_yinmeng = 0;
              },
            },
            hj_jl_xianzhu: {
              //贤助
              audio: 'ext:魂将/武将配音/极略篇/魂孙尚香:2',
              trigger: {
                global: 'recoverAfter',
              },
              check(event, player) {
                return get.attitude(player, event.player) >= 0;
              },
              prompt(event, player) {
                var str = '';
                str += '是否对' + get.translation(event.player) + '发动【贤助】？';
                return str;
              },
              content() {
                trigger.player.draw(2);
              },
              group: 'hj_jl_xianzhu2',
            },
            hj_jl_xianzhu2: {
              //贤助2
              audio: 'ext:魂将/武将配音/极略篇/魂孙尚香:2',
              trigger: {
                global: 'loseEnd',
              },
              check(event, player) {
                return get.attitude(player, event.player) >= 0;
              },
              filter(event, player) {
                if (Array.isArray(event.cards))
                  for (var i of event.cards) {
                    if (i.original == 'e') return true;
                  }
                return false;
              },
              prompt(event, player) {
                var str = '';
                str += '是否对' + get.translation(event.player) + '发动【贤助】？';
                return str;
              },
              content() {
                var num = 0;
                for (var i = 0; i < trigger.cards.length; i++) {
                  if (trigger.cards[i].original == 'e') num += 2;
                }
                trigger.player.draw(num);
              },
            },
            hj_jl_liangyuan: {
              //良缘
              audio: 'ext:魂将/武将配音/极略篇/魂孙尚香:2',
              enable: 'phaseUse',
              init(player) {
                player.storage.hj_jl_liangyuan = false;
              },
              filter(event, player) {
                return !player.storage.hj_jl_liangyuan;
              },
              filterTarget(card, player, target) {
                return player != target && target.sex == 'male';
              },
              content() {
                player.storage.hj_jl_liangyuan = true;
                target.addSkill('hj_jl_liangyuan2');
              },
              ai: {
                order: 6,
                result: {
                  target: 3,
                },
              },
            },
            hj_jl_liangyuan2: {
              mark: true,
              intro: {
                content: 'mark',
              },
              marktext: '缘',
              trigger: { global: 'phaseEnd' },
              filter(event, player) {
                return event.player.hasSkill('hj_jl_liangyuan');
              },
              forced: true,
              content() {
                player.phase('nodelay');
              },
              ai: {
                threaten: 2,
              },
            },
            hj_jl_kuangbao: {
              //狂暴
              audio: 'ext:魂将/武将配音/极略篇/魂吕布:2',
              trigger: {
                source: 'damageEnd',
                player: 'damageEnd',
              },
              forced: true,
              mark: true,
              marktext: '暴',
              filter(event, player) {
                return event.num > 0;
              },
              init(player) {
                player.storage.hj_jl_kuangbao = 4;
                player.markSkill('hj_jl_kuangbao');
              },
              content() {
                player.storage.hj_jl_kuangbao += trigger.num;
                player.markSkill('hj_jl_kuangbao');
              },
              intro: {
                content: 'mark',
              },
            },
            hj_jl_wuqian: {
              //无前
              audio: 'ext:魂将/武将配音/极略篇/魂吕布:2',
              enable: 'phaseUse',
              usable: 1,
              filter(event, player) {
                return player.storage.hj_jl_kuangbao > 1;
              },
              content() {
                'step 0';
                player.storage.hj_jl_kuangbao -= 2;
                ('step 1');
                player.addTempSkill('hj_jl_wushuang', 'phaseAfter');
                player.addTempSkill('hj_jl_wuqian_buff', 'phaseAfter');
                ('step 2');
                player.draw(player.maxHp - player.hp);
              },
              subSkill: {
                buff: {
                  trigger: {
                    source: 'damageEnd',
                  },
                  forced: true,
                  popup: false,
                  filter(event, player) {
                    return event.num > 0;
                  },
                  content() {
                    player.storage.hj_jl_kuangbao++;
                  },
                },
              },
              ai: {
                order: 10,
                result: {
                  player(player) {
                    if (player.countCards('h', 'sha') > 0 && !player.hasSkill('hj_jl_wushuang')) {
                      return 2;
                    }
                    var ph = player.getCards('h');
                    var num = 0;
                    for (var i = 0; i < ph.length; i++) {
                      if (get.tag(ph[i], 'damage')) num++;
                    }
                    if (num > 1) return num;
                    return 0;
                  },
                },
              },
            },
            hj_jl_shenfen: {
              //神愤
              audio: 'ext:魂将/武将配音/极略篇/魂吕布:2',
              enable: 'phaseUse',
              usable: 1,
              filter(event, player) {
                return player.storage.hj_jl_kuangbao >= 4;
              },
              mark: true,
              content() {
                'step 0';
                player.storage.hj_jl_kuangbao -= 6;
                event.targets = game
                  .filterPlayer(function (current) {
                    return player != current;
                  })
                  .sortBySeat();
                event.targets2 = event.targets.slice(0);
                ('step 1');
                if (event.targets.length) {
                  event.targets.shift().damage();
                  event.redo();
                }
                ('step 2');
                if (event.targets2.length) {
                  var cur = event.targets2.shift();
                  if (cur && cur.countCards('he')) {
                    cur.discard(cur.getCards('he'));
                  }
                  event.redo();
                }
                ('step 3');
                player.turnOver();
                player.recover();
              },
              ai: {
                order: 9,
                result: {
                  player(player) {
                    var num = 0;
                    for (var i = 0; i < game.players.length; i++) {
                      if (game.players[i] != player) {
                        if (game.players[i].ai.shown == 0) return 0;
                        num += get.damageEffect(game.players[i], player, player) > 0 ? 1 : -1;
                      }
                    }
                    return num;
                  },
                },
              },
            },
            hj_jl_wushuang: {
              //无双
              audio: 'ext:魂将/武将配音/极略篇/魂★吕布:2',
              mod: {
                selectTarget(card, player, range) {
                  if (card.name == 'juedou') range[1] += 2;
                  if (card.name == 'sha') range[1] += 2;
                },
                cardUsable(card, player, num) {
                  if (card.name == 'sha') return num + 2;
                },
              },
              trigger: {
                player: 'shaBegin',
              },
              forced: true,
              filter(event, player) {
                return !event.directHit;
              },
              _priority: -1,
              content() {
                if (typeof trigger.shanRequired == 'number') {
                  trigger.shanRequired++;
                } else {
                  trigger.shanRequired = 2;
                }
              },
              group: 'hj_jl_wushuang_juedou',
              subSkill: {
                juedou: {
                  trigger: {
                    player: 'juedou',
                    target: 'juedou',
                  },
                  forced: true,
                  filter(event, player) {
                    return event.turn != player;
                  },
                  _priority: -1,
                  content() {
                    'step 0';
                    var next = trigger.turn.chooseToRespond({ name: 'sha' }, '请打出一张杀响应决斗');
                    next.set('prompt2', '(共需打出2张杀)');
                    next.autochoose = lib.filter.autoRespondSha;
                    next.set('ai', function (card) {
                      var player = _status.event.player;
                      var trigger = _status.event.getTrigger();
                      if (get.attitude(trigger.turn, player) < 0 && trigger.turn.countCards('h', 'sha') > 1) {
                        return get.unuseful2(card);
                      }
                      return -1;
                    });
                    ('step 1');
                    if (result.bool == false) {
                      trigger.directHit = true;
                    }
                  },
                  ai: {
                    result: {
                      target(card, player, target) {
                        if (card.name == 'juedou' && target.countCards('h') > 0) return [1, 0, 0, -1];
                      },
                    },
                  },
                },
              },
            },
            hj_jl_liqu: {
              //利驱
              audio: 'ext:魂将/武将配音/极略篇/魂★吕布:2',
              trigger: {
                source: 'damageAfter',
              },
              forced: true,
              _priority: -1,
              filter(event, player) {
                return event.card && event.card.name == 'sha' && event.player.isAlive() && event.player.countGainableCards(player, 'he') > 0;
              },
              content() {
                'step 0';
                player.gainPlayerCard(get.prompt2('hj_jl_liqu', trigger.player), trigger.player, 'he', [1, 2], 'visibleMove').set('ai', function (button) {
                  var player = _status.event.player;
                  var evt = _status.event.target;
                  if (get.type(button.link) == 'equip') {
                    if (
                      get.attitude(player, evt) > 0 &&
                      game.hasPlayer(function (current) {
                        return player.canUse({ name: 'juedou' }, current) && current != evt.target && get.effect(current, { name: 'juedou' }, player, player) > 2;
                      })
                    ) {
                      return 5;
                    } else if (
                      game.hasPlayer(function (current) {
                        return player.canUse({ name: 'juedou' }, current) && current != evt && current != player && get.effect(current, { name: 'juedou' }, player, player) < 0;
                      })
                    ) {
                      return 1;
                    } else return 4;
                  }
                  return 3;
                })('step 1');
                if (result.cards?.length) {
                  if (get.type(result.cards[0]) == 'equip' && get.type(result.cards[1]) == 'equip') {
                    player.loseHp();
                  }
                }
                ('step 2');
                if (get.type(result.cards[0]) == 'basic' && get.type(result.cards[1]) == 'basic') {
                  player.lose(result.cards[0], ui.special2);
                  player.lose(result.cards[1], ui.special2);
                  player.gain(game.createCard('juedou'), 'gain2');
                }
                if (result.cards?.length) {
                  if (result.cards.length == 2) {
                    trigger.player.draw();
                  }
                }
              },
              ai: {
                halfneg: true,
              },
            },
            hj_jl_zhanshen: {
              //战神
              audio: 'ext:魂将/武将配音/极略篇/魂★吕布:2',
              group: ['hj_jl_zhanshen_fanmian', 'hj_jl_zhanshen_zhunbei'],
              subSkill: {
                fanmian: {
                  trigger: {
                    player: 'turnOverBefore',
                  },
                  forced: true,
                  content() {
                    trigger.cancel();
                    game.log(player, '取消了翻面');
                  },
                },
                zhunbei: {
                  trigger: {
                    player: 'phaseBegin',
                  },
                  forced: true,
                  content() {
                    player.draw(1);
                  },
                },
              },
              ai: {
                noturnOver: true,
                effect: {
                  target(card, player, target, current) {
                    if (get.tag(card, 'turnOver')) return [0, 0];
                  },
                },
              },
            },
            hj_jl_luosha: {
              //罗刹
              audio: 'ext:魂将/武将配音/极略篇/魂☆吕布:2',
              initList() {
                if (!_status.characterlist) {
                  lib.skill.pingjian.initList();
                }
                _status.hj_jl_luosha_list = [];
                for (var c of _status.characterlist) {
                  _status.hj_jl_luosha_list.addArray(lib.character[c][3].filter((s) => lib.skill[s] && lib.skill[s].shaRelated && lib.translate[s] && lib.translate[s + '_info']));
                }
              },
              trigger: {
                player: 'enterGame',
                global: 'phaseBefore',
              },
              forced: true,
              filter(event, player) {
                return event.name != 'phase' || game.phaseNumber == 0;
              },
              content() {
                if (!_status.hj_jl_luosha_list) {
                  lib.skill.hj_jl_luosha.initList();
                }
                var skills = _status.hj_jl_luosha_list.filter((s) => !player.hasSkill(s));
                skills = skills.randomGets(3);
                for (var i of skills) player.addSkillLog(i);
              },
              group: 'hj_jl_luosha2',
            },
            hj_jl_luosha2: {
              audio: 'hj_jl_luosha',
              trigger: {
                global: 'dying',
              },
              filter(event, player) {
                return event.player != player;
              },
              forced: true,
              content() {
                'step 0';
                if (!_status.hj_jl_luosha_list) {
                  lib.skill.hj_jl_luosha.initList();
                }
                player.draw(2);
                ('step 1');
                var skill = _status.hj_jl_luosha_list.filter((s) => !player.hasSkill(s)).randomGet();
                if (skill) {
                  player.addSkillLog(skill);
                }
              },
            },
            hj_jl_shajue: {
              //杀绝
              audio: 'ext:魂将/武将配音/极略篇/魂☆吕布:2',
              enable: 'phaseUse',
              usable: 1,
              filterTarget: lib.filter.notMe,
              precontent() {
                player.loseHp();
              },
              content() {
                'step 0';
                event.cards = new Set(player.getCards('h'));
                ('step 1');
                var card = player.getCards('h', (c) => event.cards.has(c)).randomGet();
                if (!card || !target.isIn()) {
                  event.finish();
                  return;
                }
                player.useCard(
                  {
                    name: 'sha',
                    nature: lib.inpile_nature.concat(null).randomGet(),
                    storage: {
                      hj_jl_shajue: true,
                    },
                  },
                  [card],
                  target
                );
                event.redo();
              },
              ai: {
                order() {
                  return get.order({ name: 'sha' }) - 0.5;
                },
                result: { target: -2 },
                threaten: 2.5,
                unequip: true,
                skillTagFilter(player, tag, arg) {
                  if (!arg || !arg.card || !arg.card.storage || !arg.card.storage.hj_jl_shajue) return false;
                },
              },
            },
            hj_jl_guiqu: {
              //鬼躯
              audio: 'ext:魂将/武将配音/极略篇/魂☆吕布:2',
              enable: 'chooseToUse',
              getSkills(player) {
                return player.skills.filter((s) => lib.translate[s] && lib.translate[s + '_info'] && lib.skill[s] && !lib.skill[s].nopopup && !lib.skill[s].equipSkill);
              },
              filter(event, player) {
                return player.isDying() && event.filterCard({ name: 'tao' }, player, event) && lib.skill.hj_jl_guiqu.getSkills(player).length > 1;
              },
              hiddenCard(player, name) {
                return player.isDying() && name === 'tao' && lib.skill.hj_jl_guiqu.getSkills(player).length > 1;
              },
              chooseButton: {
                dialog(event, player) {
                  var dialog = ui.create.dialog('鬼躯', 'hidden');
                  var table = document.createElement('div');
                  table.classList.add('add-setting');
                  table.style.margin = '0';
                  table.style.width = '100%';
                  table.style.position = 'relative';
                  var skills = lib.skill.hj_jl_guiqu.getSkills(player);
                  skills = skills.remove('hj_jl_guiqu');
                  for (var s of skills) {
                    var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                    td.innerHTML = '<span>' + lib.translate[s] + '</span>';
                    td.link = s;
                    td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                    table.appendChild(td);
                    dialog.buttons.add(td);
                  }
                  dialog.content.appendChild(table);
                  dialog.add('　');
                  return dialog;
                },
                check(button) {
                  return Math.random();
                },
                prompt(links, player) {
                  return `失去〖${get.translation(links[0])}〗,视为使用一张【桃】`;
                },
                backup(links) {
                  return {
                    audio: 'hj_jl_guiqu',
                    viewAs: {
                      name: 'tao',
                    },
                    selectCard: -1,
                    filterCard: () => false,
                    skill: links[0],
                    onuse(links, player) {
                      player.removeSkill(this.skill);
                      player.popup(this.skill);
                    },
                  };
                },
              },
              ai: {
                result: {
                  player(player) {
                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                    return 1;
                  },
                },
              },
              mod: {
                maxHandcard(player, num) {
                  return lib.skill.hj_jl_guiqu.getSkills(player).length;
                },
              },
            },
            hj_jl_yanmie: {
              //湮灭
              audio: 'ext:魂将/武将配音/极略篇/魂贾诩:2',
              enable: 'phaseUse',
              filter(event, player) {
                return player.countCards('he', { suit: 'spade' }) > 0;
              },
              check(card) {
                return 6 - get.value(card);
              },
              filterCard(card) {
                return card.suit == 'spade';
              },
              position: 'he',
              filterTarget(card, player, target) {
                return player != target && target.countCards('h');
              },
              content() {
                'step 0';
                var num = target.countCards('h');
                target.discard(target.getCards('h'));
                target.draw(num);
                target.showHandcards();
                ('step 1');
                var num = target.countCards('h', function (card) {
                  return get.type(card) != 'basic';
                });
                target.discard(
                  targe.getCards('h', function (card) {
                    return get.type(card) != 'basic';
                  })
                );
                if (num > 0) target.damage(num);
              },
              ai: {
                order: 5,
                expose: 0.3,
                threaten: 1.8,
                result: {
                  target(player, target) {
                    return -target.countCards('h') - 1;
                  },
                },
              },
            },
            hj_jl_shunshi: {
              //顺世
              audio: 'ext:魂将/武将配音/极略篇/魂贾诩:2',
              trigger: {
                target: 'useCardToBegin',
              },
              filter(event, player) {
                return event.player != player && get.type(event.card) == 'basic';
              },
              content() {
                'step 0';
                player.chooseTarget('是否发动【顺世】?', [1, 3], true, function (card, player, target) {
                  return player != target && trigger.player != target;
                }).ai = function (target) {
                  if (trigger.card.name == 'sha') {
                    if (target.countCards('e', { subtype: 'equip2' }) && target.getCards('e') != 'baiyin') return 0;
                    return -get.attitude(player, target);
                  }
                  if (trigger.card.name == 'tao') {
                    if (!target.isDamaged()) return 0;
                    return get.attitude(player, target);
                  }
                };
                ('step 1');
                if (result.bool) {
                  player.draw();
                  game.asyncDraw(result.targets);
                  for (var i = 0; i < result.targets.length; i++) {
                    trigger.targets.push(result.targets[i]);
                    game.log(result.targets[i], '成为了额外目标');
                  }
                }
              },
            },
            hj_jl_weimu: {
              //帷幕
              audio: 'ext:魂将/武将配音/极略篇/魂贾诩:2',
              trigger: {
                target: 'useCardToBefore',
              },
              forced: true,
              _priority: 1005,
              filter(event, player) {
                return (event.player != player && get.type(event.card, 'trick') == 'trick') || get.type(event.card, 'delay') == 'delay';
              },
              content() {
                trigger.cancel();
              },
            },
            hj_jl_luanwu: {
              //乱武
              audio: 'ext:魂将/武将配音/极略篇/魂贾诩:2',
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
                player.awakenSkill('hj_jl_luanwu');
                event.current = player.next;
                event.currented = [];
                ('step 1');
                event.currented.push(event.current);
                event.current.addTempClass('target');
                event.current.chooseToUse('乱武:使用一张杀或流失一点体力', { name: 'sha' }, function (card, player, target) {
                  if (player == target) return false;
                  if (!player.canUse('sha', target)) return false;
                  if (get.distance(player, target) <= 1) return true;
                  if (
                    game.hasPlayer(function (current) {
                      return current != player && get.distance(player, current) < get.distance(player, target);
                    })
                  ) {
                    return false;
                  }
                  return true;
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
                    for (var i = 0; i < players.length; i++) {
                      var att = get.attitude(player, players[i]);
                      if (att > 0) att = 1;
                      if (att < 0) att = -1;
                      if (players[i] != player && players[i].hp <= 3) {
                        if (players[i].countCards('h') == 0) num += att / players[i].hp;
                        else if (players[i].countCards('h') == 1) num += att / 2 / players[i].hp;
                        else if (players[i].countCards('h') == 2) num += att / 4 / players[i].hp;
                      }
                      if (players[i].hp == 1) num += att * 1.5;
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
            hj_jl_zhitian: {
              //知天
              audio: 'ext:魂将/武将配音/极略篇/魂司马徽:2',
              trigger: {
                player: 'phaseBegin',
              },
              forced: true,
              filter(event, player) {
                return player.countCards('h') > 0;
              },
              content() {
                'step 0';
                player.chooseTarget('知天:将所有手牌交给一名角色', true).ai = function (target) {
                  return get.attitude(player, target);
                };
                ('step 1');
                if (result.targets?.length) {
                  player.$giveAuto(player.getCards('h').length, result.targets[0]);
                  var cards = player.getCards('h');
                  player.lose(cards, ui.special);
                  result.targets[0].gain(cards);
                  var skills = [];
                  for (var i in lib.character) {
                    for (var j = 0; j < lib.character[i][3].length; j++) {
                      var info = lib.skill[lib.character[i][3][j]];
                      if (info && (info.gainable || !info.unique) && !info.zhuSkill) {
                        skills.add(lib.character[i][3][j]);
                      }
                    }
                  }
                  var link = skills.randomGet();
                  player.line(result.targets[0], 'green');
                  result.targets[0].addSkill(link);
                  result.targets[0].mark(link, {
                    name: get.translation(link),
                    content: lib.translate[link + '_info'],
                  });
                  game.log(result.targets[0], '获得技能', '【' + get.translation(link) + '】');
                  player.loseHp();
                }
              },
            },
            hj_jl_yinshi: {
              //隐世
              audio: 'ext:魂将/武将配音/极略篇/魂司马徽:2',
              trigger: {
                player: 'damageBegin',
              },
              filter(event, player) {
                return event.num > 0;
              },
              forced: true,
              content() {
                trigger.untrigger();
                trigger.finish();
                player.draw();
              },
              ai: {
                threaten: 0.2,
                result: {
                  effect(card, player, target) {
                    if (get.tag(card, 'damage')) {
                      if (player.hasSkill('jueqing')) return [1, -2];
                      if (target.countCards('h') + 1 <= target.hp) return [0, 1];
                      if (target.hasFriend()) return [1, 1];
                    }
                  },
                },
              },
            },
            hj_jl_xingyi: {
              //行医
              audio: 'ext:魂将/武将配音/极略篇/魂华佗:2',
              enable: 'phaseUse',
              usable: 1,
              srlose: true,
              filterTarget(card, player, target) {
                return target.countCards('h') && player != target;
              },
              content() {
                if (target.countCards('he')) {
                  player.gainPlayerCard(target, true, 'h');
                }
                target.recover();
              },
              ai: {
                order: 2,
                result: {
                  target(player, target) {
                    if (target.hp == 1) return 2;
                    if (target.countCards('h') > target.hp && target.isDamaged()) return 5;
                    if (!target.isDamaged()) return -1;
                    return 1;
                  },
                },
                threaten: 2,
              },
            },
            hj_jl_guagu: {
              //刮骨
              audio: 'ext:魂将/武将配音/极略篇/魂华佗:2',
              usable: 1,
              srlose: true,
              trigger: {
                global: 'dying',
              },
              _priority: 6,
              filter(event, player) {
                return event.player.hp <= 0 && event.player.countCards('h') > 0;
              },
              prompt(event, player) {
                var str = '';
                str += '是否对' + get.translation(event.player) + '发动【刮骨】';
                return str;
              },
              check(event, player) {
                var cards = event.player.getCards('h');
                var save = false;
                for (var i = 0; i < cards.length; i++) {
                  if (get.tag(cards[i], 'save')) {
                    save = true;
                  }
                }
                if (get.attitude(player, event.player) < 0) {
                  if (cards.length > 1 && save) return 1;
                  if (!save) {
                    return -10;
                  }
                }
                if (get.attitude(player, event.player) > 0) {
                  if (save) return 0;
                  if (!save) {
                    if (event.player.hasSkill('jiushi') && !event.player.isTurnedOver()) return 0;
                    if (player.countCards('h', 'tao') && event.player.countCards('h') >= 2) return 0;
                    return 1;
                  }
                }
                return 0;
              },
              content() {
                'step 0';
                var cards = trigger.player.getCards('h');
                event.bool = cards.length >= 2;
                trigger.player.discard(cards);
                trigger.player.recover();
                ('step 1');
                if (event.bool) {
                  trigger.player.draw();
                }
              },
              ai: {
                expose: 0.2,
                threaten: 1.5,
              },
            },
            hj_jl_jishi: {
              //济世
              audio: 'ext:魂将/武将配音/极略篇/魂华佗:2',
              usable: 1,
              enable: 'phaseUse',
              filter(event, player) {
                return player.countCards('he', { suit: 'heart' }) > 0;
              },
              check(card) {
                return 6 - get.value(card);
              },
              filterCard(card) {
                return card.suit == 'heart';
              },
              filterTarget(card, player, target) {
                return target.countCards('h') > 0;
              },
              position: 'he',
              content() {
                'step 0';
                var num = target.countCards('h');
                target.discard(target.getCards('h'));
                target.draw(num);
                target.showHandcards();
                ('step 1');
                var num = target.countCards('h', function (card) {
                  return get.type(card) != 'basic';
                });
                if (num == 0) {
                  event.finish();
                } else {
                  var recover = target.maxHp - target.hp;
                  if (num > 0 && num <= recover) {
                    target.recover(num);
                  } else {
                    if (recover > 0) target.recover(recover);
                    target.draw(num - recover);
                  }
                }
              },
              ai: {
                order: 9,
                result: {
                  target(player, target) {
                    var recover = target.maxHp - target.hp;
                    var nh = target.countCards('h');
                    if (recover >= 2) return nh + recover;
                    return nh;
                  },
                },
                threaten: 2,
              },
            },
            hj_jl_xuanxin: {
              //悬心
              audio: 'ext:魂将/武将配音/极略篇/魂华佗:2',
              trigger: {
                global: 'damage',
              },
              check() {
                return 1;
              },
              content() {
                'step 0';
                var cards = [];
                for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                  if (ui.discardPile.childNodes[i].suit == 'heart') {
                    cards = cards.concat(ui.discardPile.childNodes[i]);
                  }
                }
                if (cards.length) {
                  var card = cards.randomGet();
                  player.gain(card, 'gain2');
                  game.log(player, '从弃牌堆获得了', card);
                  if (trigger.player && trigger.player != player) {
                    player.chooseCard('是否交给' + get.translation(trigger.player) + '一张牌？').ai = function (card) {
                      if (get.attitude(player, trigger.player) > 0) return 6 - get.value(card);
                      return 0;
                    };
                  }
                } else {
                  event.finish();
                }
                ('step 1');
                if (result.cards?.length) {
                  trigger.player.gain(result.cards[0]);
                  player.$give(1, trigger.player);
                }
              },
            },
            hj_jl_manwu: {
              //曼舞
              audio: 'ext:魂将/武将配音/极略篇/魂貂蝉:2',
              srlose: true,
              enable: 'phaseUse',
              usable: 1,
              filter(event, player) {
                return player.countCards('h') > 0;
              },
              filterTarget(card, player, target) {
                if (target.sex != 'male') return false;
                return target.countCards('h') && player != target;
              },
              content() {
                event.card = target.getCards('h').randomGet();
                player.showCards(event.card);
                if (event.card.suit == 'diamond') {
                  target.addJudge('lebu', event.card);
                  target.$give(event.card, target);
                } else {
                  player.gain(event.card);
                  target.$give(event.card, player);
                }
              },
              ai: {
                order: 9,
                result: {
                  target(player, target, card) {
                    return ai.get.effect(target, { name: 'lebu' }, player, target);
                  },
                  player: 1,
                },
              },
            },
            hj_jl_baiyue: {
              //拜月
              audio: 'ext:魂将/武将配音/极略篇/魂貂蝉:2',
              srlose: true,
              trigger: {
                player: 'phaseEnd',
              },
              filter(event, player) {
                return player.storage.hj_jl_baiyue.length;
              },
              forced: true,
              content() {
                'step 0';
                player.chooseCardButton('是否发动【拜月】？', player.storage.hj_jl_baiyue).ai = function (button) {
                  return get.value(button.link);
                };
                ('step 1');
                if (result.bool) {
                  player.storage.hj_jl_baiyue.remove(result.buttons[0].link);
                  player.gain(result.buttons[0].link);
                  player.$gain(result.buttons[0].link);
                }
                delete player.storage.hj_jl_baiyue;
                player.storage.hj_jl_baiyue = [];
              },
              group: ['hj_jl_baiyue_countGeneral'],
              subSkill: {
                countGeneral: {
                  trigger: {
                    global: ['useCardAfter', 'respondAfter', 'discardAfter'],
                  },
                  forced: true,
                  popup: false,
                  filter(event, player) {
                    if (player != _status.currentPhase) return false;
                    if (event.player == player) return false;
                    if (event.cards) {
                      if (Array.isArray(event.cards))
                        for (var i of event.cards) {
                          if (i.position != 'd') return true;
                        }
                    }
                    return false;
                  },
                  content() {
                    for (var i = 0; i < trigger.cards.length; i++) {
                      if (get.position(trigger.cards[i]) == 'd') {
                        player.storage.hj_jl_baiyue = player.storage.hj_jl_baiyue.concat(trigger.cards[i]);
                      }
                    }
                  },
                },
                countJudge: {
                  trigger: {
                    global: 'judgeAfter',
                  },
                  forced: true,
                  popup: false,
                  filter(event, player) {
                    if (player != _status.currentPhase) return false;
                    if (event.player == player) return false;
                    if (event.result.card.parentNode.id != 'discardPile') return false;
                    return true;
                  },
                  content() {
                    player.storage.hj_jl_baiyue = player.storage.hj_jl_baiyue.concat(trigger.result.card);
                  },
                },
              },
              init(player) {
                player.storage.hj_jl_baiyue = [];
              },
            },
            hj_jl_tianzi: {
              //天姿
              audio: 'ext:魂将/武将配音/极略篇/魂貂蝉:2',
              trigger: {
                player: 'phaseDrawBefore',
              },
              check(event, player) {
                if (game.players.length < 3) return 0;
              },
              content() {
                'step 0';
                trigger.finish();
                trigger.untrigger();
                event.current = player.next;
                ('step 1');
                event.current.chooseCard('交给' + get.translation(player) + '一张手牌或令其摸一张牌').ai = function (card) {
                  if (get.attitude(event.current, player) > 0) {
                    return -1;
                  } else {
                    return 3 - get.value(card);
                  }
                };
                ('step 2');
                if (result.bool == false) {
                  event.current.line(player, 'green');
                  game.log(get.translation(event.current) + '让' + get.translation(player) + '摸了一张牌');
                  player.draw();
                } else {
                  player.gain(result.cards[0]);
                  event.current.$give(1, player);
                }
                if (event.current.next != player) {
                  event.current = event.current.next;
                  event.goto(1);
                }
              },
            },
            hj_jl_meixin: {
              //魅心
              audio: 'ext:魂将/武将配音/极略篇/魂貂蝉:4',
              enable: 'phaseUse',
              usable: 1,
              filterCard: true,
              position: 'he',
              filterTarget(card, player, target) {
                if (player == target) return false;
                if (target.sex != 'male') return false;
                return true;
              },
              check(card) {
                return 6 - get.value(card);
              },
              content() {
                target.markSkillCharacter('hj_jl_meixin', player, '魅心', '本阶段当你使用一张基本牌后,该目标弃置一张牌;当你使用一张锦囊牌后,你获得该目标一张牌;当你使用一张装备牌后,你对该目标造成1点伤害');
                player.storage.hj_jl_meixin = target;
                player.addTempSkill('hj_jl_meixin2', 'phaseAfter');
                player.addTempSkill('hj_jl_meixin3', 'phaseAfter');
              },
              ai: {
                threaten: 3,
                order: 15,
                expose: 0.3,
                result: {
                  target(player, target) {
                    return -target.countCards('h') - 1;
                  },
                },
              },
            },
            hj_jl_meixin2: {
              audio: 'hj_jl_meixin',
              trigger: {
                player: 'useCardAfter',
              },
              filter(event, player) {
                return player.storage.hj_jl_meixin && player.storage.hj_jl_meixin.isAlive();
              },
              forced: true,
              content() {
                var target = player.storage.hj_jl_meixin;
                if (get.type(trigger.card, 'trick') == 'basic' && target.countCards('he') > 0) {
                  target.chooseToDiscard('he', true);
                }
                if (get.type(trigger.card, 'trick') == 'trick' && target.countCards('he') > 0) {
                  player.gainPlayerCard('he', target, true);
                }
                if (get.type(trigger.card, 'trick') == 'equip') {
                  target.damage();
                }
              },
            },
            hj_jl_meixin3: {
              audio: 'hj_jl_meixin',
              trigger: {
                player: 'phaseEnd',
              },
              forced: true,
              popup: false,
              filter(event, player) {
                return player.storage.hj_jl_meixin && player.storage.hj_jl_meixin.isAlive();
              },
              content() {
                var target = player.storage.hj_jl_meixin;
                target.unmarkSkill('hj_jl_meixin');
                delete player.storage.hj_jl_meixin;
              },
            },
            hj_jl_baozheng: {
              //暴征
              audio: 'ext:魂将/武将配音/极略篇/魂董卓:2',
              trigger: {
                player: 'phaseEnd',
              },
              forced: true,
              _priority: 10,
              content() {
                'step 0';
                var targets = game.players.slice(0);
                targets.remove(player);
                targets.sort(lib.sort.seat);
                event.targets = targets;
                event.num = 0;
                ('step 1');
                if (event.num < event.targets.length) {
                  event.target = event.targets[event.num];
                  if (event.target.countCards('he') >= 2) {
                    event.target.chooseCard('交给' + get.translation(player) + '一张牌,或弃置两张牌对其造成1点伤害', 'he').ai = function (card) {
                      if (get.attitude(event.target, player) > 0) return 10 - get.value(card);
                      return 0;
                    };
                  } else if (event.target.countCards('he') == 1) {
                    event.target.chooseCard('交给' + get.translation(player) + '一张牌', 'he', true);
                  } else {
                    event.num++;
                    event.redo();
                  }
                } else {
                  event.finish();
                }
                ('step 2');
                if (result.cards?.length) {
                  player.gain(result.cards[0]);
                  event.target.$give(1, player);
                  event.num++;
                  event.goto(1);
                } else {
                  event.target.chooseToDiscard('弃置两张牌对' + get.translation(player) + '造成一点伤害', 2, true);
                  event.target.line(player, 'fire');
                  player.damage(event.target);
                  event.num++;
                  event.goto(1);
                }
              },
            },
            hj_jl_lingnu: {
              //凌怒
              audio: 'ext:魂将/武将配音/极略篇/魂董卓:2',
              trigger: {
                player: 'phaseEnd',
              },
              forced: true,
              _priority: 9,
              filter(event, player) {
                return player.storage.hj_jl_lingnu >= 2;
              },
              content() {
                'step 0';
                player.loseMaxHp();
                var targets = game.players.slice(0);
                targets.remove(player);
                targets.sort(lib.sort.seat);
                event.targets = targets;
                event.num = 0;
                ('step 1');
                if (num < event.targets.length) {
                  if (event.targets[num].countCards('hej')) {
                    player.gainPlayerCard(event.targets[num], 'hej', true);
                  }
                  event.num++;
                  event.redo();
                }
              },
              group: ['hj_jl_lingnu_getStat', 'hj_jl_lingnu_init'],
              subSkill: {
                getStat: {
                  trigger: {
                    player: 'damageEnd',
                  },
                  forced: true,
                  popup: false,
                  silent: true,
                  content() {
                    player.storage.hj_jl_lingnu += trigger.num;
                  },
                },
                init: {
                  trigger: {
                    player: 'phaseBegin',
                  },
                  forced: true,
                  popup: false,
                  silent: true,
                  content() {
                    player.storage.hj_jl_lingnu = 0;
                  },
                },
              },
            },
            hj_jl_baolian: {
              //暴敛
              audio: 'ext:魂将/武将配音/极略篇/魂董卓:2',
              init(player) {
                player.storage.hj_jl_baolian = 0;
              },
              trigger: {
                global: 'gameDrawAfter',
              },
              forced: true,
              _priority: 101,
              content() {
                'step 0';
                event.targets = game.filterPlayer();
                event.targets.remove(player);
                event.targets.sort(lib.sort.seat);
                player.line(event.targets);
                ('step 1');
                if (event.targets.length) {
                  event.targets.shift().loseMaxHp()._triggered = null;
                  event.redo();
                }
                ('step 2');
                player.gainMaxHp(game.countPlayer() - 1);
                ('step 3');
                player.recover(game.countPlayer() - 1);
                ('step 4');
                player.storage.hj_jl_baolian += game.countPlayer() - 1;
                player.markSkill('hj_jl_baolian');
              },
              group: 'hj_jl_baolian_lose',
              subSkill: {
                lose: {
                  trigger: {
                    player: 'phaseEnd',
                  },
                  forced: true,
                  _priority: -1,
                  filter(event, player) {
                    return player.storage.hj_jl_baolian > 0;
                  },
                  content() {
                    'step 0';
                    player.storage.hj_jl_baolian--;
                    player.markSkill('hj_jl_baolian');
                    ('step 1');
                    player.recover();
                    ('step 2');
                    player.loseMaxHp();
                  },
                },
              },
            },
            hj_jl_luoyi: {
              //裸衣
              audio: 'ext:魂将/武将配音/极略篇/魂许褚:2',
              trigger: {
                player: 'phaseDrawBegin1',
              },
              forced: true,
              filter(event, player) {
                return !event.numFixed;
              },
              content() {
                'step 0';
                var cards = get.cards(3);
                game.cardsGotoOrdering(cards);
                player.showCards(cards, '裸衣');
                var cardsx = [];
                for (var i = 0; i < cards.length; i++) {
                  if (get.type(cards[i]) == 'basic' || cards[i].name == 'juedou' || (get.type(cards[i]) == 'equip' && get.subtype(cards[i]) == 'equip1')) {
                    cardsx.push(cards[i]);
                  }
                }
                event.cards = cardsx;
                player.chooseBool('是否放弃摸牌' + (cardsx.length ? ',改为获得' + get.translation(cardsx) : '') + '？').ai = function () {
                  var num = 3;
                  return cardsx.length >= trigger.num;
                };
                ('step 1');
                if (result.bool) {
                  if (cards.length) player.gain(cards, 'gain2');
                  //game.cardsDiscard(cards2);
                  player.addTempSkill('reluoyi2', { player: 'phaseBefore' });
                  trigger.changeToZero();
                }
                //else game.cardsDiscard(cards);
              },
            },
            hj_jl_aozhan: {
              //鏖战
              audio: 'ext:魂将/武将配音/极略篇/魂许褚:2',
              marktext: '战',
              forced: true,
              trigger: {
                player: 'damageEnd',
                source: 'damageEnd',
              },
              filter(event, player) {
                if (event.num <= 0) return false;
                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
              },
              init(player) {
                player.storage.hj_jl_aozhan = [];
              },
              content() {
                var cards = get.cards(trigger.num);
                player.storage.hj_jl_aozhan = player.storage.hj_jl_aozhan.concat(cards);
                player.$gain2(cards);
                game.log(player, '将' + get.cnNumber(cards.length) + '张牌置于武将牌上');
                player.markSkill('hj_jl_aozhan');
              },
              intro: {
                content: 'cards',
              },
              group: ['hj_jl_aozhan2'],
            },
            hj_jl_aozhan2: {
              //鏖战2
              audio: 1,
              enable: 'phaseUse',
              usable: 1,
              filter(event, player) {
                return player.storage.hj_jl_aozhan.length;
              },
              content() {
                'step 0';
                player.chooseControl('收入手牌', '置入弃牌堆', ui.create.dialog('战', player.storage.hj_jl_aozhan)).ai = function (event, player) {
                  var value = 0,
                    i;
                  var cards = player.storage.hj_jl_aozhan;
                  for (i = 0; i < cards.length; i++) {
                    value += get.value(cards[i]);
                  }
                  value /= player.storage.hj_jl_aozhan.length;
                  if (value > 4) return '收入手牌';
                  return '置入弃牌堆';
                };
                ('step 1');
                var cards = [];
                while (player.storage.hj_jl_aozhan.length) {
                  cards = cards.concat(player.storage.hj_jl_aozhan.shift());
                }
                if (result.control == '置入弃牌堆') {
                  player.discard(cards);
                  player.draw(cards.length);
                } else {
                  game.log(player, '获得了', cards);
                  player.gain(cards, 'gain2');
                }
                if (!player.storage.hj_jl_aozhan.length) {
                  player.unmarkSkill('hj_jl_aozhan');
                }
              },
              ai: {
                order: 1,
                result: {
                  player(player) {
                    if (player.storage.hj_jl_aozhan.length >= 2) return 1;
                    if (player.hp + player.countCards('h') <= 3) return 0.5;
                    return 0;
                  },
                },
              },
            },
            hj_jl_huxiao: {
              //虎啸
              audio: 'ext:魂将/武将配音/极略篇/魂许褚:2',
              trigger: {
                source: 'damageBegin',
              },
              filter(event, player) {
                return !player.isTurnedOver() && _status.currentPhase == player && event.card && event.card.name == 'sha';
              },
              _priority: 10,
              check(event, player) {
                if (get.attitude(player, event.player) > 0) return false;
                var e2 = event.player.getEquips(2);
                if (e2) {
                  if (e2.name == 'tengjia') {
                    if (event.nature == 'fire') return 10;
                  }
                  if (e2.name == 'baiyin') return 0;
                }
                if (event.player.hasSkill('kuangfeng2') && event.nature == 'fire') return 10;
                return get.damageEffect(player, event.player, player);
              },
              content() {
                trigger.num++;
                player.draw();
                player.addTempSkill('hj_jl_huxiao2', 'shaAfter');
              },
            },
            hj_jl_huxiao2: {
              //虎啸2
              trigger: { player: 'shaEnd' },
              forced: true,
              popup: false,
              content() {
                player.turnOver();
                player.skip('phaseDiscard');
              },
            },
            hj_jl_huchi: {
              //虎痴
              audio: 'ext:魂将/武将配音/极略篇/魂许褚:2',
              trigger: {
                source: 'damageBefore',
              },
              usable: 1,
              filter(event, player) {
                return event.card && event.notLink();
              },
              content() {
                player.recover();
                player.draw();
              },
            },
            hj_jl_qianqi: {
              //千骑
              audio: 'ext:魂将/武将配音/极略篇/魂马超:2',
              trigger: {
                player: 'enterGame',
                global: 'phaseBefore',
              },
              forced: true,
              filter(event, player) {
                return event.name != 'phase' || game.phaseNumber == 0;
              },
              content() {
                'step 0';
                var defend = lib.inpile.filter((c) => lib.card[c].toself && lib.card[c].subtype == 'equip3');
                defend = defend.randomGet();
                if (defend) {
                  var card = game.createCard(defend);
                  player.$gain2(card);
                  player.equip(card);
                }
                ('step 1');
                var attack = lib.inpile.filter((c) => lib.card[c].toself && lib.card[c].subtype == 'equip4');
                attack = attack.randomGet();
                if (attack) {
                  var card = game.createCard(attack);
                  player.$gain2(card);
                  player.equip(card);
                }
              },
              marktext: '骑',
              intro: {
                content: 'mark',
              },
              group: ['hj_jl_qianqi_gain', 'hj_jl_qianqi2'],
              subSkill: {
                gain: {
                  audio: 'hj_jl_qianqi',
                  trigger: {
                    global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                  },
                  forced: true,
                  filter(event, player) {
                    return game.hasPlayer((p) => {
                      var evt = event.getl(p);
                      return evt && evt.es && evt.es.some((c) => ['equip3', 'equip4', 'equip6'].includes(get.subtype(c, p)));
                    });
                  },
                  content() {
                    var cnt = game.countPlayer((p) => {
                      var evt = trigger.getl(p);
                      return evt && evt.es && evt.es.some((c) => ['equip3', 'equip4', 'equip6'].includes(get.subtype(c, p)));
                    });
                    player.addMark('hj_jl_qianqi', 2 * cnt);
                  },
                },
              },
            },
            hj_jl_qianqi2: {
              //千骑2
              audio: 'ext:魂将/武将配音/极略篇/魂马超:2',
              prompt: '弃置一枚「千骑」标记,视为使用一张杀',
              enable: 'chooseToUse',
              viewAs: {
                name: 'sha',
                storage: { hj_jl_qianqi: true },
              },
              viewAsFilter(player) {
                return player.countMark('hj_jl_qianqi');
              },
              filterCard() {
                return false;
              },
              filter: (event, player) => player.countMark('jlsg_qianqi'), //QQQ
              selectCard: -1,
              precontent() {
                player.removeMark('hj_jl_qianqi', 1);
              },
              mod: {
                targetInRange(card) {
                  if (card.storage && card.storage.hj_jl_qianqi) return true;
                },
                cardUsable(card, player) {
                  if (card.storage && card.storage.hj_jl_qianqi) return Infinity;
                },
              },
              ai: {
                respondSha: true,
                skillTagFilter(player) {
                  return player.countMark('hj_jl_qianqi');
                },
              },
            },
            hj_jl_benxi: {
              //奔袭
              shaRelated: true,
              audio: 'ext:魂将/武将配音/极略篇/魂马超:2',
              srlose: true,
              trigger: { player: 'shaBegin' },
              forced: true,
              content() {
                'step 0';
                trigger.target.chooseToDiscard('请弃置一张装备牌,否则不能使用闪抵消此杀', 'he', function (card) {
                  return get.type(card) == 'equip';
                }).ai = function (card) {
                  var num = trigger.target.countCards('h', 'shan');
                  if (num == 0) return 0;
                  return 8 - get.value(card);
                };
                ('step 1');
                if (!result.bool) {
                  trigger.directHit = true;
                }
              },
              mod: {
                globalFrom(from, to, distance) {
                  return distance - 1;
                },
              },
            },
            hj_jl_juechen: {
              //绝尘
              audio: 'ext:魂将/武将配音/极略篇/魂马超:2',
              trigger: { source: 'damageBegin2' },
              forced: true,
              shaRelated: true,
              filter(event, player) {
                return event.card && event.card.name == 'sha' && event.player != player;
              },
              content() {
                'step 0';
                player
                  .chooseControlList(get.prompt(event.name, trigger.player), [`改为其失去${trigger.num}点体力`, `改为其失去1点体力上限`], function () {
                    if (get.attitude(_status.event.player, _status.event.target) < 0) {
                      return _status.event.target.isDamaged ? 0 : 1;
                    }
                    return 2;
                  })
                  .set('target', trigger.player);
                ('step 1');
                if (result.control == 'cancel2') {
                  event.finish();
                  return;
                }
                trigger.cancel();
                if (result.index == 0) {
                  trigger.player.loseHp(trigger.num);
                } else {
                  trigger.player.loseMaxHp();
                }
              },
            },
            hj_jl_liuyun: {
              //流云
              audio: 'ext:魂将/武将配音/极略篇/魂甄姬:4',
              enable: 'phaseUse',
              usable: 1,
              filterCard(card) {
                return get.color(card) == 'black';
              },
              position: 'he',
              filter(event, player) {
                return player.countCards('he', { color: 'black' }) > 0 && !player.isLinked();
              },
              check(card) {
                return 8 - get.value(card);
              },
              prompt: '弃置一张黑色牌,令一名角色选择一项:回复一点体力或摸两张牌',
              filterTarget: true,
              content() {
                'step 0';
                player.link();
                event.target = target;
                if (target.hp == target.maxHp) {
                  target.draw(2);
                  event.finish();
                } else {
                  var controls = ['draw_card'];
                  if (target.hp < target.maxHp) {
                    controls.push('recover_hp');
                  }
                  target.chooseControl(controls).ai = function () {
                    if (target.hp == 1 && target.maxHp > 2) {
                      return 'recover_hp';
                    } else if (target.hp == 2 && target.maxHp > 2 && target.countCards('h') > 1) {
                      return 'recover_hp';
                    } else {
                      return 'draw_card';
                    }
                  };
                }
                ('step 1');
                event.control = result.control;
                switch (event.control) {
                  case 'recover_hp':
                    event.target.recover();
                    event.finish();
                    break;
                  case 'draw_card':
                    event.target.draw(2);
                    event.finish();
                    break;
                }
              },
              ai: {
                expose: 0.2,
                order: 9,
                result: {
                  player(player) {
                    if (player.countCards('h') > player.hp) return 1;
                    return -1;
                  },
                  target(player, target) {
                    if (target.hp < 2) return 5;
                    return 2;
                  },
                },
                threaten: 1.5,
              },
            },
            hj_jl_lingbo: {
              //凌波
              audio: 'ext:魂将/武将配音/极略篇/魂甄姬:4',
              trigger: {
                global: 'phaseBegin',
              },
              check(event, player) {
                if (get.attitude(player, event.player) > 0) return event.player.countCards('j');
                if (get.attitude(player, event.player) < 0) return event.player.countCards('e');
                return 0;
              },
              filter(event, player) {
                var num = 0;
                for (var i = 0; i < game.players.length; i++) {
                  num += game.players[i].countCards('ej');
                }
                return (player.isLinked() || player.isTurnedOver()) && num > 0;
              },
              content() {
                'step 0';
                if (player.isLinked()) player.link();
                if (player.isTurnedOver()) player.turnOver();
                player.chooseTarget('将场上的一张牌置于牌堆顶', function (card, player, target) {
                  return target.countCards('ej') > 0;
                }).ai = function (target) {
                  if (get.attitude(player, target) > 0) return target.countCards('j');
                  if (get.attitude(player, target) < 0) return target.countCards('e');
                  return 0;
                };
                ('step 1');
                if (result.targets?.length) {
                  event.target = result.targets[0];
                  player.choosePlayerCard('将目标的一张牌置于牌堆顶', event.target, 'ej', true);
                } else {
                  event.finish();
                }
                ('step 2');
                if (result.links?.length) {
                  event.card = result.links[0];
                  event.target.lose(event.card, ui.special);
                  game.broadcastAll(function (player) {
                    var cardx = ui.create.card();
                    cardx.classList.add('infohidden');
                    cardx.classList.add('infoflip');
                    player.$throw(cardx, 1000, 'nobroadcast');
                  }, event.target);
                  game.log(player, '将', event.target, '的', event.card, '置于牌堆顶');
                } else {
                  event.card = null;
                }
                ('step 3');
                if (event.target == game.me) game.delay(0.5);
                ('step 4');
                if (event.card) {
                  event.card.fix();
                  ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                }
              },
              ai: {
                effect: {
                  target(card) {
                    if (card.name == 'tiesuo') return 0.5;
                  },
                },
              },
            },
            hj_jl_qingcheng: {
              //倾城
              audio: 'ext:魂将/武将配音/极略篇/魂甄姬:4',
              srlose: true,
              enable: ['chooseToUse', 'chooseToRespond'],
              filterCard() {
                return false;
              },
              selectCard: -1,
              viewAs: {
                name: 'sha',
              },
              viewAsFilter(player) {
                return !player.isLinked();
              },
              prompt: '横置你的武将牌,视为打出一张杀',
              check() {
                return 1;
              },
              onuse(result, player) {
                player.link();
              },
              onrespond(result, player) {
                player.link();
              },
              ai: {
                skillTagFilter(player) {
                  return !player.isLinked();
                },
                respondSha: true,
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
                  ) {
                    return false;
                  }
                  if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                  return true;
                },
                basic: {
                  useful: [5, 1],
                  value: [5, 1],
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
                    ) {
                      return 3.1;
                    }
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
                    ) {
                      return eff / 1.2;
                    }
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
              group: ['hj_jl_qingcheng2'],
            },
            hj_jl_qingcheng2: {
              //倾城2
              audio: 1,
              enable: 'chooseToRespond',
              filterCard() {
                return false;
              },
              selectCard: -1,
              viewAs: { name: 'shan' },
              viewAsFilter(player) {
                return player.isLinked();
              },
              prompt: '重置你的武将牌,视为打出一张闪',
              check() {
                return 1;
              },
              onrespond(result, player) {
                player.link();
              },
              ai: {
                skillTagFilter(player) {
                  return player.isLinked();
                },
                respondShan: true,
              },
            },
            hj_jl_luoshen: {
              //洛神
              audio: 'ext:魂将/武将配音/极略篇/魂甄姬:4',
              trigger: {
                player: 'phaseBegin',
              },
              forced: true,
              filter(event, player) {
                return !player.hasSkill('hj_jl_luoshen2');
              },
              content() {
                'step 0';
                player.chooseTarget(get.prompt('hj_jl_luoshen'), [1, 2], function (card, player, target) {
                  return target != player;
                }).ai = function (target) {
                  return get.attitude(player, target);
                };
                ('step 1');
                if (result.targets?.length) {
                  result.targets.sortBySeat();
                  result.targets.unshift(player);
                  game.asyncDrawAuto(result.targets, function (current) {
                    return current == player ? 1 : 2;
                  });
                  player.addSkill('hj_jl_luoshen2');
                }
              },
            },
            hj_jl_luoshen2: {
              //洛神2
              marktext: '洛',
              intro: {
                content: '跳过下一个摸牌阶段',
              },
              mark: true,
              audio: 'ext:魂将/武将配音/极略篇/魂甄姬:4',
              trigger: {
                player: 'phaseDrawBegin',
              },
              forced: true,
              content() {
                'step 0';
                trigger.cancel();
                ('step 1');
                game.log(player, '因技能', '【' + get.translation('hj_jl_luoshen') + '】', '的影响跳过了摸牌阶段');
                player.removeSkill('hj_jl_luoshen2');
              },
            },
            hj_jl_fangxin: {
              //芳馨
              audio: 'ext:魂将/武将配音/极略篇/魂大乔:2',
              enable: 'chooseToUse',
              discard: false,
              prepare(cards, player) {
                player.$give(cards, player);
              },
              filter(event, player) {
                if (event.type == 'dying') {
                  return event.filterCard({ name: 'tao' }, player) && ((!player.hasJudge('lebu') && player.countCards('he', { suit: 'diamond' })) || (!player.hasJudge('bingliang') && player.countCards('he', { suit: 'club' })));
                }
                if (event.parent.name != 'phaseUse') return false;
                if (!lib.filter.filterCard({ name: 'tao' }, player, event)) {
                  return false;
                }
                return player.isDamaged() && ((!player.hasJudge('lebu') && player.countCards('he', { suit: 'diamond' })) || (!player.hasJudge('bingliang') && player.countCards('he', { suit: 'club' })));
              },
              position: 'he',
              filterCard(card, player, target) {
                return (card.suit == 'diamond' && !player.hasJudge('lebu')) || (card.suit == 'club' && !player.hasJudge('bingliang'));
              },
              filterTarget(card, player, target) {
                if (_status.event.type == 'dying') {
                  return target == _status.event.dying;
                }
                return player == target;
              },
              selectTarget: -1,
              check(card) {
                return 8 - get.value(card);
              },
              content() {
                if (cards[0].suit == 'diamond') {
                  player.addJudge('lebu', cards[0]);
                } else {
                  player.addJudge('bingliang', cards[0]);
                }
                player.useCard({ name: 'tao' }, targets).delayx = false;
              },
              ai: {
                threaten: 1.5,
                save: true,
                order: 9,
                result: {
                  player(player) {
                    return ai.get.effect(player, { name: 'lebu' }, player, player);
                  },
                  target(player, target) {
                    return ai.get.effect(target, { name: 'tao' }, player, target);
                  },
                },
              },
            },
            hj_jl_xiyu: {
              //细语
              audio: 'ext:魂将/武将配音/极略篇/魂大乔:2',
              trigger: {
                player: 'phaseBegin',
              },
              forced: true,
              content() {
                'step 0';
                player.chooseTarget('细语:弃置一名角色的一张牌,该角色进行一个额外的出牌阶段', function (card, player, target) {
                  return target.countCards('he') > 0;
                }).ai = function (target) {
                  if (target.countCards('h') >= 3) return get.attitude(_status.event.player, target);
                  if (target.countCards('h') < 2) return -get.attitude(_status.event.player, target);
                  return -get.attitude(_status.event.player, target);
                };
                ('step 1');
                if (result.targets?.length) {
                  event.targets = result.targets;
                  if (event.targets[0].countCards('he') > 0) {
                    player.discardPlayerCard('he', event.targets[0]);
                  }
                  event.targets[0].phaseUse();
                  event.targets[0].getStat().card = {};
                  event.targets[0].getStat().skill = {};
                }
              },
            },
            hj_jl_wanrou: {
              //婉柔
              audio: 'ext:魂将/武将配音/极略篇/魂大乔:2',
              trigger: {
                player: ['useCardAfter', 'respondAfter', 'discardAfter'],
              },
              forced: true,
              filter(event, player) {
                if (event.cards) {
                  if (Array.isArray(event.cards))
                    for (var i of event.cards) {
                      if (i.suit == 'diamond' && i.original != 'j' && get.position(i) == 'd') return true;
                    }
                }
                return false;
              },
              content() {
                'step 0';
                player.chooseTarget('婉柔:选择一名目标令其摸一张牌').ai = function (target) {
                  return get.attitude(player, target);
                };
                ('step 1');
                if (result.targets?.length) {
                  result.targets[0].draw();
                }
              },
              ai: {
                threaten: 0.7,
              },
              group: 'hj_jl_wanrou2',
            },
            hj_jl_wanrou2: {
              //婉柔2
              trigger: { player: 'loseEnd' },
              filter(event, player) {
                if (Array.isArray(event.cards))
                  for (var i of event.cards) {
                    if (i.original == 'j') return true;
                  }
                return false;
              },
              forced: true,
              content() {
                'step 0';
                player.chooseTarget('婉柔:选择一名目标令其摸一张牌').ai = function (target) {
                  return get.attitude(player, target);
                };
                ('step 1');
                if (result.targets?.length) {
                  result.targets[0].draw();
                }
              },
            },
            hj_jl_guose: {
              //国色
              audio: 'ext:魂将/武将配音/极略篇/魂大乔:2',
              group: 'hj_jl_guose2',
              enable: 'phaseUse',
              discard: false,
              filter(event, player) {
                return player.countCards('he', { suit: 'diamond' }) > 0;
              },
              prepare: 'throw',
              position: 'he',
              filterCard: {
                suit: 'diamond',
              },
              filterTarget(card, player, target) {
                if (target.hasJudge('lebu')) return true;
                return lib.filter.targetEnabled({ name: 'lebu' }, player, target);
              },
              check(card) {
                return 7 - get.value(card);
              },
              content() {
                if (target.hasJudge('lebu')) {
                  target.discard(target.getJudge('lebu'));
                } else {
                  var next = player.useCard({ name: 'lebu' }, target, cards);
                  next.animate = false;
                  next.audio = false;
                }
                player.draw();
              },
              ai: {
                result: {
                  target(player, target) {
                    if (target.hasJudge('lebu')) return -get.effect(target, { name: 'lebu' }, player, target);
                    return get.effect(target, { name: 'lebu' }, player, target);
                  },
                },
                order: 9,
              },
            },
            hj_jl_guose2: {
              trigger: {
                global: ['phaseUseSkipped', 'phaseUseCancelled'],
              },
              forced: true,
              filter(event, player) {
                return event.player != player;
              },
              content() {
                player.draw();
              },
            },
            hj_jl_jiaohua: {
              //娇花
              audio: 'ext:魂将/武将配音/极略篇/魂小乔:2',
              group: 'hj_jl_jiaohua_1',
              enable: 'phaseUse',
              usable: 1,
              viewAsFilter(player) {
                return player.countCards('h', { suit: 'heart' }) > 0;
              },
              viewAs: {
                name: 'wuzhong',
              },
              filterCard: {
                suit: 'heart',
              },
              check(card) {
                return 8 - get.value(card);
              },
              subSkill: {
                1: {
                  trigger: {
                    player: 'useCard',
                  },
                  forced: true,
                  filter(event, player) {
                    return event.card.name == 'wuzhong';
                  },
                  content() {
                    trigger.nowuxie = true;
                  },
                },
              },
              ai: {
                basic: {
                  order: 7.2,
                  useful: 4.5,
                  value: 9.2,
                },
                result: {
                  target: 2,
                },
                tag: {
                  draw: 2,
                },
              },
            },
            hj_jl_hongyan: {
              //红颜
              audio: 'ext:魂将/武将配音/极略篇/魂小乔:2',
              mod: {
                suit(card, suit) {
                  if (suit == 'spade') return 'heart';
                },
                maxHandcardBase(player, num) {
                  if (
                    player.countCards('e', function (card) {
                      return card.suit == 'heart';
                    })
                  )
                    return player.maxHp;
                },
              },
            },
            hj_jl_tianxiang: {
              //天香
              audio: 'ext:魂将/武将配音/极略篇/魂小乔:2',
              trigger: {
                player: 'damageBegin4',
              },
              forced: true,
              filter(event, player) {
                return player.countCards('h', { suit: 'heart' }) > 0 && event.num > 0;
              },
              content() {
                'step 0';
                player.draw(),
                  player.chooseCardTarget({
                    filterCard(card, player) {
                      return card.suit == 'heart' && lib.filter.cardDiscardable(card, player);
                    },
                    filterTarget(card, player, target) {
                      return player != target;
                    },
                    // position:'he',
                    ai1(card) {
                      return 10 - get.value(card);
                    },
                    ai2(target) {
                      var att = get.attitude(_status.event.player, target);
                      var trigger = _status.event.getTrigger();
                      var da = 0;
                      if (_status.event.player.hp == 1) {
                        da = 10;
                      }
                      var eff = get.damageEffect(target, trigger.source, target);
                      if (att == 0) return 0.1 + da;
                      if (eff >= 0 && att > 0) {
                        return att + da;
                      }
                      if (att > 0 && target.hp > 1) {
                        if (target.maxHp - target.hp >= 3) return att * 1.1 + da;
                        if (target.maxHp - target.hp >= 2) return att * 0.9 + da;
                      }
                      return -att + da;
                    },
                    prompt: get.prompt('hj_jl_tianxiang'),
                    prompt2: lib.translate.hj_jl_tianxiang_info,
                  });
                ('step 1');
                if (result.cards?.length) {
                  player.discard(result.cards);
                  var target = result.targets[0];
                  player
                    .chooseControlList(
                      true,
                      function (event, player) {
                        var target = _status.event.target;
                        var att = get.attitude(player, target);
                        if (target.hasSkillTag('maihp')) att = -att;
                        if (att > 0) {
                          return 0;
                        } else {
                          return 1;
                        }
                      },
                      ['令' + get.translation(target) + '受到伤害来源对其造成的X点伤害,摸Y张牌(Y为其已损失体力值)', '令' + get.translation(target) + '失去X点体力,获得' + get.translation(result.cards)]
                    )
                    .set('target', target);
                  trigger.cancel();
                  event.target = target;
                  event.card = result.cards[0];
                } else {
                  event.finish();
                }
                ('step 2');
                if (typeof result.index == 'number') {
                  event.index = result.index;
                  if (result.index) {
                    event.related = event.target.loseHp(trigger.num);
                  } else {
                    event.related = event.target.damage(trigger.num, trigger.source || 'nosource', 'nocard');
                  }
                } else event.finish();
                ('step 3');
                if (event.related.cancelled || target.isDead()) return;
                if (event.index && card.isInPile()) target.gain(card, 'gain2');
                else if (target.getDamagedHp()) target.draw(target.getDamagedHp());
              },
              ai: {
                maixie_defend: true,
                effect: {
                  target(card, player, target) {
                    if (player.hasSkillTag('jueqing', false, target)) return;
                    if (get.tag(card, 'damage') && target.countCards('he') > 1) return 0.7;
                  },
                },
              },
            },
            hj_jl_piaoling: {
              //飘零
              audio: 'ext:魂将/武将配音/极略篇/魂小乔:2',
              trigger: {
                player: 'phaseJieshuBegin',
              },
              forced: true,
              content() {
                'step 0';
                player.judge(function (card) {
                  return card.suit == 'heart' ? 2 : 0;
                });
                ('step 1');
                event.card = result.card;
                if (result.bool && get.position(event.card, true) == 'd') {
                  player.chooseTarget('令一名角色获得' + get.translation(event.card) + ',或点【取消】将其置于牌堆顶').set('ai', function (target) {
                    var player = _status.event.player;
                    var att = get.attitude(player, target);
                    if (player == target) att /= 2;
                    return att;
                  });
                } else event.finish();
                ('step 2');
                if (result.targets?.length) {
                  var target = result.targets[0];
                  player.line(target, 'green');
                  target.gain(card, 'gain2', 'log');
                  if (player == target) player.chooseToDiscard('he', true);
                } else {
                  card.fix();
                  ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                  game.updateRoundNumber();
                }
              },
            },
            hj_jl_youmei: {
              trigger: {
                global: 'roundStart',
              },
              audio: 'ext:云将/audio:5',
              check(event, player) {
                if (player.hp > 2) return true;
                else return false;
              },
              content() {
                'step 0';
                event.trigger('fanghun');
                ('step 1');
                var list;
                if (_status.characterlist) {
                  list = [];
                  for (var i = 0; i < _status.characterlist.length; i++) {
                    var name = _status.characterlist[i];
                    if (lib.character[name][1] == 'qun') list.push(name);
                  }
                } else if (_status.connectMode) {
                  list = get.charactersOL(function (i) {
                    return lib.character[i][1] != 'qun';
                  });
                } else {
                  list = get.gainableCharacters(function (info) {
                    return info[1] == 'qun';
                  });
                }
                var players = game.players.concat(game.dead);
                for (var i = 0; i < players.length; i++) {
                  list.remove(players[i].name);
                  list.remove(players[i].name1);
                  list.remove(players[i].name2);
                }
                list.remove('zhaoxiang');
                list.remove('tw_zhaoxiang');
                list.remove('yunzhaoxiang');
                var num = player.hp;
                list = list.randomGets(num, game.countPlayer());
                var skills = [];
                for (var i of list) {
                  skills.addArray(
                    (lib.character[i][3] || []).filter(function (skill) {
                      var info = get.info(skill);
                      return info && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill && !info.zhuSkill;
                    })
                  );
                }
                if (!list.length || !skills.length) {
                  event.finish();
                  return;
                }
                if (player.isUnderControl()) {
                  game.swapPlayerAuto(player);
                }
                var switchToAuto = function () {
                  _status.imchoosing = false;
                  event._result = {
                    bool: true,
                    skills: skills.randomGets(num),
                  };
                  if (event.dialog) event.dialog.close();
                  if (event.control) event.control.close();
                };
                var chooseButton = function (list, skills) {
                  var event = _status.event;
                  if (!event._result) event._result = {};
                  event._result.skills = [];
                  var rSkill = event._result.skills;
                  var dialog = ui.create.dialog('请选择获得至多' + num + '个技能', [list, 'character'], 'hidden');
                  event.dialog = dialog;
                  var table = document.createElement('div');
                  table.classList.add('add-setting');
                  table.style.margin = '0';
                  table.style.width = '100%';
                  table.style.position = 'relative';
                  for (var i = 0; i < skills.length; i++) {
                    var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                    td.link = skills[i];
                    table.appendChild(td);
                    td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                    td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                      if (_status.dragged) return;
                      if (_status.justdragged) return;
                      _status.tempNoButton = true;
                      setTimeout(function () {
                        _status.tempNoButton = false;
                      }, 500);
                      var link = this.link;
                      if (!this.classList.contains('bluebg')) {
                        if (rSkill.length >= num) return;
                        rSkill.add(link);
                        this.classList.add('bluebg');
                      } else {
                        this.classList.remove('bluebg');
                        rSkill.remove(link);
                      }
                    });
                  }
                  dialog.content.appendChild(table);
                  dialog.add('');
                  dialog.open();
                  event.switchToAuto = function () {
                    event.dialog.close();
                    event.control.close();
                    game.resume();
                    _status.imchoosing = false;
                  };
                  event.control = ui.create.control('ok', function (link) {
                    event.dialog.close();
                    event.control.close();
                    game.resume();
                    _status.imchoosing = false;
                  });
                  for (var i = 0; i < event.dialog.buttons.length; i++) {
                    event.dialog.buttons[i].classList.add('selectable');
                  }
                  game.pause();
                  game.countChoose();
                };
                if (event.isMine()) {
                  chooseButton(list, skills);
                } else if (event.isOnline()) {
                  event.player.send(chooseButton, list, skills);
                  event.player.wait();
                  game.pause();
                } else {
                  switchToAuto();
                }
                ('step 2');
                var map = event.result || result;
                if (map && map.skills && map.skills.length) {
                  for (var i of map.skills) player.addTempSkill(i, { player: 'fanghun' });
                }
              },
            },
            hj_jl_zhanmo: {
              //战陌
              audio: 'ext:魂将/武将配音/极略篇/魂吕玲绮:2',
              group: 'hj_jl_zhanmo2',
              trigger: {
                player: 'useCardToTargeted',
              },
              forced: true,
              filter(event, player) {
                //if(event.parent.name=="hj_jl_zhanmo") return false;
                return get.type(event.card) != 'delay' && get.type(event.card) != 'equip' && event.card.name != 'shan' && event.card.name != 'wuxie' && (!player.countCards('e') || player.hp <= 2);
              },
              content() {
                if (!player.countCards('e') && trigger.targets && trigger.card && trigger.card.name != 'wuxie' && trigger.card.name != 'shan' && get.type(trigger.card) != 'delay' && trigger.targets.length == trigger.parent.triggeredTargets4.length) {
                  trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                  trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                }
              },
            },
            hj_jl_zhanmo2: {
              //战陌
              trigger: {
                player: 'useCardToPlayered',
              },
              forced: true,
              filter(event, player) {
                //if(event.parent.name=="hj_jl_zhanmo") return false;
                return get.type(event.card) != 'delay' && get.type(event.card) != 'equip' && event.card.name != 'shan' && event.card.name != 'wuxie' && (!player.countCards('e') || player.hp <= 2);
              },
              content() {
                'step 0';
                if (player.hp <= 2 && player.hp > 0 && trigger.parent.triggeredTargets3.length == 1) {
                  player
                    .chooseTarget(true, '对一名其他角色造成1点雷电伤害', function (card, player, target) {
                      return target != player;
                    })
                    .set('ai', function (target) {
                      var player = _status.event.player;
                      return get.damageEffect(target, player, player);
                    });
                }
                ('step 1');
                if (result.targets?.length) {
                  var target = result.targets[0];
                  player.line(target);
                  target.damage('thunder');
                }
              },
            },
            hj_jl_youlin: {
              //犹凛
              group: 'hj_jl_youlin_jieshu',
              intro: {
                content: '计算与其他角色的距离-#',
              },
              audio: 'ext:魂将/武将配音/极略篇/魂吕玲绮:2',
              trigger: {
                player: 'phaseUseBegin',
              },
              forced: true,
              content() {
                'step 0';
                var cards = player.getCards('he');
                var todis = [];
                for (var i = 0; i < cards.length; i++) {
                  if (get.type(cards[i]) == 'equip') todis.push(cards[i]);
                }
                if (todis.length) {
                  player.lose(todis, ui.discardPile, 'visible');
                  player.$throw(todis, 1000);
                  game.log(player, '将', todis, '置入弃牌堆');
                  player.draw(todis.length);
                }
                ('step 1');
                if (player.countDisabled() == 5) event.finish();
                else player.chooseToDisable();
                ('step 2');
                player
                  .chooseControl(function (event, player) {
                    return Math.random();
                  })
                  .set('prompt', '犹凛')
                  .set('choiceList', ['使用杀目标数和次数+1', '横置任意名角色', '计算与其他角色距离-1']);
                ('step 3');
                if (result.control == '选项一') {
                  player.addTempSkill('hj_jl_youlin_sha');
                  event.finish();
                }
                if (result.control == '选项二') event.goto(4);
                if (result.control == '选项三') {
                  if (!player.storage.hj_jl_youlin) player.storage.hj_jl_youlin = 0;
                  player.markSkill('hj_jl_youlin');
                  player.storage.hj_jl_youlin++;
                  player.addSkill('hj_jl_youlin_mashu');
                  event.finish();
                }
                ('step 4');
                player
                  .chooseTarget('横置任意名角色', [1, Infinity], function (card, player, target) {
                    return true;
                  })
                  .set('ai', function (target) {
                    return -get.attitude(_status.event.player, target);
                  });
                ('step 5');
                if (result.targets?.length) {
                  event.targets = result.targets;
                  event.num = 0;
                } else {
                  event.finish();
                }
                ('step 6');
                if (event.num < event.targets.length) {
                  event.targets[event.num].link(true);
                  event.num++;
                  event.redo();
                }
              },
              subSkill: {
                jieshu: {
                  audio: 'hj_jl_youlin',
                  trigger: {
                    player: 'phaseJieshuBegin',
                  },
                  forced: true,
                  async content(event, trigger, player) {
                    //QQQ
                    if (player.countDisabled()) {
                      player.draw(player.countDisabled());
                      if (player.countDisabled() == 5) {
                        player.recover();
                        var list = [];
                        for (var i = 1; i < 6; i++) {
                          if (player.isDisabled(i)) list.add(i);
                        }
                        var num = list.randomGets(2);
                        for (var i of list) player.enableEquip(num);
                      }
                    }
                  },
                },
                mashu: {
                  mod: {
                    globalFrom(from, to, distance) {
                      return distance - from.storage.hj_jl_youlin;
                    },
                  },
                },
              },
            },
            hj_jl_youlin_sha: {
              mod: {
                selectTarget(card, player, range) {
                  if (card.name == 'sha' && range[1] && range[1] != -1) range[1]++;
                },
                cardUsable(card, player, num) {
                  if (card.name == 'sha') return num + 1;
                },
              },
              charlotte: true,
            },
            hj_jl_jiwu: {
              audio: 'ext:极略:3',
              trigger: { player: 'phaseUseBegin' },
              shaRelated: true,
              filter(event, player) {
                return player.countCards('h', 'sha') > 0;
              },
              forced: true,
              async content(event, trigger, player) {
                //QQQ
                const result = await player
                  .chooseCard(get.prompt('jlsg_jiwux'), function (card, player, target) {
                    return card.name == 'sha' && (!card.storage.jiwu || !['1', '2', '3'].every((item) => card.storage.jiwu.includes(item)));
                  })
                  .set('ai', (card) => 20 - get.value(card))
                  .forResult();
                if (result.cards?.length) {
                  player.showCards(result.cards[0]);
                  if (!result.cards[0].storage.jiwu) result.cards[0].storage.jiwu = [];
                  var list = ['此【杀】的伤害值+1', '此【杀】不计入次数限制', '此【杀】无距离限制,且可以额外指定1个目标'];
                  if (result.cards[0].storage.jiwu.includes('1')) list.remove('此【杀】的伤害值+1');
                  if (result.cards[0].storage.jiwu.includes('2')) list.remove('此【杀】不计入次数限制');
                  if (result.cards[0].storage.jiwu.includes('3')) list.remove('此【杀】无距离限制,且可以额外指定1个目标');
                  const result1 = await player.chooseControl(list).forResult();
                  if (result1.control == '此【杀】的伤害值+1') result.cards[0].storage.jiwu.push('1');
                  if (result1.control == '此【杀】不计入次数限制') result.cards[0].storage.jiwu.push('2');
                  if (result1.control == '此【杀】无距离限制,且可以额外指定1个目标') result.cards[0].storage.jiwu.push('3');
                }
              },
              group: ['hj_jl_jiwu_1'],
              subSkill: {
                1: {
                  mod: {
                    cardUsable(card, player) {
                      if (card.storage && card.storage.jiwu && card.storage.jiwu.includes('2')) return Infinity;
                    },
                    targetInRange(card, player) {
                      if (card.storage && card.storage.jiwu && card.storage.jiwu.includes('3')) return true;
                    },
                  },
                  trigger: { player: 'useCard' },
                  filter(event, player) {
                    return event.card.storage && event.card.storage.jiwu;
                  },
                  forced: true,
                  async content(event, trigger, player) {
                    //QQQ
                    if (trigger.card.storage.jiwu.includes('2')) player.stat[player.stat.length - 1].card.sha--;
                    if (trigger.card.storage.jiwu.includes('1')) trigger.baseDamage++;
                    if (trigger.card.storage.jiwu.includes('3')) {
                      const result = await player
                        .chooseTarget('额外指定1个目标', (card, player, target) => target != player && !trigger.targets.includes(target))
                        .set('ai', (target) => -get.attitude(_status.event.player, target))
                        .forResult();
                      if (result.targets?.length) {
                        trigger.targets.push(result.targets[0]);
                      }
                    }
                    trigger.card.storage.jiwu = [];
                  },
                },
              },
            },
            hj_jl_shanlie: {
              //善列
              audio: 'ext:魂将/武将配音/极略篇/魂张郃高览:2',
              trigger: {
                player: ['phaseDiscardBegin'],
              },
              mod: {
                maxHandcard(player, num) {
                  return 6;
                },
              },
              forced: true,
              content() {
                player.draw(player.maxHp - player.hp + 2);
              },
              ai: {
                threaten: 1.3,
              },
            },
            hj_jl_yingzhen: {
              //营阵
              audio: 'ext:魂将/武将配音/极略篇/魂张郃高览:4',
              enable: 'phaseUse',
              usable: 2,
              mark: true,
              marktext: '营',
              intro: {
                content: '你的营阵:#次/2次',
              },
              init(player) {
                player.storage.hj_ls_yingzhen = 0;
                player.markSkill('hj_jl_yingzhen');
              },
              filterTarget(card, player, target) {
                return player.canCompare(target) && target.countCards('h') > 1;
              },
              filter(event, player) {
                return player.countCards('h') > 0;
              },
              content() {
                'step 0';
                player.chooseToCompare(target);
                player.storage.hj_ls_yingzhen += 1;
                player.markSkill('hj_jl_yingzhen');
                ('step 1');
                if (result.bool) {
                  player.gainPlayerCard('hej', target, true);
                } else {
                  //player.discardPlayerCard('hej',target,true);
                  player.useCard({ name: 'guohe' }, target, true);
                }
              },
              ai: {
                basic: {
                  order: 9,
                  useful: 1,
                  value: 5,
                },
                result: {
                  target(player, target) {
                    var att = get.attitude(player, target);
                    var nh = target.countCards('h');
                    if (att > 0) {
                      var js = target.getCards('j');
                      if (js.length) {
                        var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                        if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                          return 3;
                        }
                      }
                      if (target.getEquip('baiyin') && target.isDamaged() && get.recoverEffect(target, player, player) > 0) {
                        if (target.hp == 1 && !target.hujia) return 1.6;
                        if (target.hp == 2) return 0.01;
                        return 0;
                      }
                    }
                    var es = target.getCards('e');
                    var noe = es.length == 0 || target.hasSkillTag('noe');
                    var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                    var noh = nh == 0 || target.hasSkillTag('noh');
                    if (noh && (noe || noe2)) return 0;
                    if (att <= 0 && !target.countCards('he')) return 1.5;
                    return -1.5;
                  },
                },
                tag: {
                  loseCard: 1,
                  discard: 1,
                },
              },
              group: ['hj_jl_yingzhen_重置'],
              subSkill: {
                重置: {
                  trigger: {
                    player: ['phaseEnd'],
                  },
                  forced: true,
                  popup: false,
                  content() {
                    player.storage.hj_ls_yingzhen = 0;
                    player.markSkill('hj_jl_yingzhen');
                  },
                },
              },
            },
            hj_jl_xiying: {
              //袭营
              trigger: { player: 'phaseUseBegin' },
              audio: 'ext:魂将/武将配音/极略篇/魂张郃高览:2',
              forced: true,
              filter(event, player) {
                return (
                  player.countCards('h', function (card) {
                    return _status.connectMode || get.type(card) != 'basic';
                  }) > 0
                );
              },
              content() {
                'step 0';
                var list = game.filterPlayer(function (current) {
                  return current != player;
                });
                list.sortBySeat();
                event.targets = list;
                player
                  .chooseToDiscard(get.prompt2('hj_jl_xiying'), 'h', function (card) {
                    return get.type(card) != 'basic';
                  })
                  .set('ai', function (card) {
                    return _status.event.val - get.value(card);
                  })
                  .set(
                    'val',
                    (function () {
                      return (
                        4 *
                        Math.sqrt(
                          game.countPlayer(function (current) {
                            return get.attitude(player, current) < 0 && current.countCards('he') > 0;
                          })
                        )
                      );
                    })()
                  );
                ('step 1');
                if (!result.bool) event.finish();
                else player.addTempSkill('hj_jl_xiying_gain');
                ('step 2');
                var target = targets.shift();
                event.target = target;
                if (target.isAlive())
                  target.chooseToDiscard('he', '弃置一张牌,或本回合内不能使用或打出牌').set('ai', function (card) {
                    var player = _status.event.player;
                    var source = _status.event.getTrigger().player;
                    if (get.attitude(source, player) > 0) return -1;
                    if (_status.event.getRand() > 0.5) return 5 - get.value(card);
                    return -1;
                  });
                ('step 3');
                if (target.isAlive() && !result.bool) target.addTempSkill('hj_jl_xiying2');
                if (targets.length) event.goto(2);
              },
              ai: {
                directHit_ai: true,
                skillTagFilter(player, tag, arg) {
                  return arg.target.hasSkill('hj_jl_xiying2');
                },
              },
              subSkill: {
                gain: {
                  trigger: { player: 'phaseJieshuBegin' },
                  forced: true,
                  charlotte: true,
                  filter(event, player) {
                    return player.getHistory('sourceDamage', function (evt) {
                      return evt.isPhaseUsing(player);
                    }).length;
                  },
                  content() {
                    var card = get.cardPile2(function (card) {
                      var type = get.type(card, false);
                      if (type != 'basic' && type != 'trick') return false;
                      return get.tag(card, 'damage') > 0;
                    });
                    if (card) player.gain(card, 'gain2');
                  },
                },
              },
            },
            hj_jl_xiying2: {
              //袭营
              mark: true,
              intro: { content: '本回合内不能使用或打出牌' },
              mod: {
                cardEnabled2(card) {
                  return false;
                },
              },
            },
            hj_jl_hubu: {
              //虎步
              audio: 'ext:魂将/武将配音/极略篇/魂颜良文丑:2',
              trigger: {
                player: 'damageEnd',
                source: 'damageEnd',
              },
              filter(event, player) {
                return event.card && event.card.name == 'sha' && event.notLink();
              },
              forced: true,
              content() {
                'step 0';
                player.chooseTarget('是否发动【虎步】？', function (card, player, target) {
                  return player != target && player.canUse('juedou', target);
                }).ai = function (target) {
                  if (ai.get.effect(target, { name: 'juedou' }, player, target) > 0) return 1;
                  return 0;
                };
                ('step 1');
                if (result.targets?.length) {
                  event.target = result.targets[0];
                  event.target.judge(function (card) {
                    if (card.suit != 'spade') return 1;
                    return -0.5;
                  });
                } else {
                  event.finish();
                }
                ('step 2');
                if (result.bool) {
                  lib.skill.global.remove('_wuxie');
                  player.useCard({ name: 'juedou' }, event.target);
                } else {
                  event.finish();
                }
                ('step 3');
                lib.skill.global.push('_wuxie');
              },
            },
            hj_jl_tanlang: {
              //贪狼
              audio: 'ext:魂将/武将配音/极略篇/魂颜良文丑:2',
              forced: true,
              group: ['hj_jl_tanlang1', 'hj_jl_tanlang2'],
            },
            hj_jl_tanlang1: {
              //贪狼
              audio: 'ext:魂将/武将配音/极略篇/魂颜良文丑:2',
              forced: true,
              trigger: {
                source: 'damageEnd',
              },
              filter(event, player) {
                return event.card && event.card.name == 'sha' && event.player.countCards('he');
              },
              async content(event, trigger, player) {
                //QQQ
                if (trigger.player.countCards('he')) {
                  const result = await player.discardPlayerCard(trigger.player, 'he', true);
                  if (result.cards?.length) {
                    if (get.type(result.cards[0]) == 'equip') player.useCard({ name: 'sha' }, trigger.player, false);
                  }
                }
              },
            },
            hj_jl_tanlang2: {
              //贪狼
              audio: 'ext:魂将/武将配音/极略篇/魂颜良文丑:2',
              forced: true,
              trigger: {
                source: 'damageEnd',
              },
              filter(event, player) {
                return event.card && event.card.name == 'juedou' && event.player.countCards('he');
              },
              content() {
                'step 0';
                player.discardPlayerCard(trigger.player, 'he', true);
                ('step 1');
                var card = result.cards[0];
                if (get.type(card) == 'equip') player.useCard({ name: 'juedou' }, trigger.player, false);
              },
            },
            hj_jl_zhidi: {
              //制敌
              audio: 'ext:魂将/武将配音/极略篇/魂吴毅:2',
              trigger: { player: 'phaseZhunbeiBegin' },
              shaRelated: true,
              init(player) {
                player.storage.hj_jl_zhidi = [false, false, false, false];
              },
              forced: true,
              filter(event, player) {
                return player.storage.hj_jl_zhidi.reduce((a, b) => a + b) < 4;
              },
              content() {
                var candidates = Array.from(Array(4).keys());
                candidates = candidates.filter((c) => !player.storage.hj_jl_zhidi[c]);
                var candidate = candidates.randomGet();
                player.storage[event.name][candidate] = true;
                game.log(player, `获得了〖制敌〗效果${get.cnNumber(candidate + 1)}`);
                player.addSkill(event.name + (candidate + 1));
                player.markSkill(event.name);
              },
              intro: {
                content(storage, player, skill) {
                  return '已经获得效果: ' + storage.map((f, i) => (f ? i + 1 : '')).reduce((a, b) => a + b);
                },
                markcount(storage, player, skill) {
                  return storage.reduce((a, b) => a + b);
                },
              },
            },
            hj_jl_zhidi1: {
              forced: true,
              trigger: {
                source: 'damageSource',
              },
              content() {
                player.draw();
              },
            },
            hj_jl_zhidi2: {
              trigger: { player: 'useCard' },
              forced: true,
              filter(event, player) {
                return event.card.name == 'sha';
              },
              content() {
                trigger.directHit.addArray(game.players);
              },
              ai: {
                unequip: true,
                unequip: true,
                directHit_ai: true,
                skillTagFilter(player, tag, arg) {
                  if (tag === 'directHit_ai') {
                    return arg.card.name == 'sha';
                  }
                  return arg && arg.card.name == 'sha';
                },
              },
            },
            hj_jl_zhidi3: {
              mod: {
                targetInRange(card, player) {
                  if (card.name == 'sha') return true;
                },
                cardUsable(card, player, num) {
                  if (card.name == 'sha') return num + player.storage.hj_jl_zhidi.reduce((a, b) => a + b);
                },
              },
            },
            hj_jl_zhidi4: {
              mod: {
                selectTarget(card, player, range) {
                  if (card.name != 'sha') return;
                  if (range[1] == -1) return;
                  range[1] += player.storage.hj_jl_zhidi.reduce((a, b) => a + b);
                },
              },
            },
            hj_jl_mashu: {
              //马术
              mod: {
                globalFrom(from, to, distance) {
                  return distance - 1;
                },
              },
            },
            hj_jl_yuanhua: {
              //元化
              audio: 'ext:魂将/武将配音/极略篇/魂☆华佗:2',
              mark: true,
              intro: {
                content: '发动元化移出游戏了#张牌',
              },
              init(player) {
                player.storage.hj_jl_yuanhua = 0;
              },
              forced: true,
              trigger: { player: 'gainAfter' },
              filter(event, player) {
                return event.cards && event.cards.some((c) => c.name == 'tao');
              },
              content() {
                'step 0';
                event.cards = trigger.cards.filter((c) => c.name == 'tao');
                ('step 1');
                event.card = event.cards.pop();
                if (player.isDamaged()) {
                  player.recover();
                } else {
                  player.draw(2, 'nodelay');
                }
                ('step 2');
                game.log(player, '将', event.card, '移出游戏');
                player.lose(event.card, ui.special);
                player.addMark('hj_jl_yuanhua', 1, false);
                ('step 3');
                if (event.cards.length) {
                  event.goto(1);
                }
              },
            },
            hj_jl_guiyuan: {
              //归元
              audio: 'ext:魂将/武将配音/极略篇/魂☆华佗:2',
              global: 'hj_jl_guiyuan_ai',
              enable: 'phaseUse',
              usable: 1,
              content() {
                'step 0';
                player.loseHp();
                event.targets = game.filterPlayer((p) => p != player);
                event.targets.sortBySeat();
                player.line(event.targets, 'green');
                event.gained = false;
                ('step 1');
                event.target = event.targets.shift();
                if (event.target.countCards('h', 'tao')) {
                  var card = event.target.getCards('h', 'tao').randomGet();
                  player.gain(event.target, card, 'visible', 'give');
                  event.gained = true;
                }
                ('step 2');
                if (event.targets.length) {
                  event.goto(1);
                } else if (!event.gained) {
                  var card = get.cardPile((c) => c.name == 'tao');
                  if (card) player.gain(card, 'gain2');
                }
              },
              ai: {
                order: 12,
                result: {
                  player(player) {
                    return player.hp > 1 || player.canSave(player) ? 1 : 0;
                  },
                },
              },
            },
            hj_jl_guiyuan_ai: {
              ai: {
                nokeep: true,
                skillTagFilter(player) {
                  if (!game.hasPlayer((p) => p.hasSkill('hj_jl_guiyuan') && get.attitude(player, p) < 2)) return false;
                },
              },
            },
            hj_jl_chongsheng: {
              //重生
              audio: 'ext:魂将/武将配音/极略篇/魂☆华佗:2',
              limited: true,
              trigger: { global: 'dying' },
              check(event, player) {
                if (get.attitude(player, event.player) < 4) return false;
                if (
                  player.countCards('h', function (card) {
                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                    if (mod2 != 'unchanged') return mod2;
                    var mod = game.checkMod(card, player, event.player, 'unchanged', 'cardSavable', player);
                    if (mod != 'unchanged') return mod;
                    var savable = get.info(card).savable;
                    if (typeof savable == 'function') savable = savable(card, player, event.player);
                    return savable;
                  }) >=
                  1 - event.player.hp
                )
                  return false;
                if (event.player == player || event.player == get.zhu(player)) return true;
                return !player.hasUnknown();
              },
              filter(event, player) {
                return event.player.hp <= 0;
              },
              logTarget: 'player',
              content() {
                'step 0';
                player.awakenSkill('hj_jl_chongsheng');
                ('step 1');
                var num = player.storage.hj_jl_yuanhua || 1;
                if (num > trigger.player.maxHp - trigger.player.hp) {
                  trigger.player.hp = trigger.player.maxHp;
                  trigger.player.draw(num - (trigger.player.maxHp - trigger.player.hp));
                } else {
                  trigger.player.recover(num);
                }
                ('step 2');
                if (!trigger.player.isAlive() || !trigger.player.group || trigger.player.group == 'unknown' || trigger.player.isUnseen(0)) {
                  event.finish();
                  return;
                }
                var group = trigger.player.group;
                var list;
                if (_status.characterlist) {
                  list = [];
                  for (var i = 0; i < _status.characterlist.length; i++) {
                    var name = _status.characterlist[i];
                    if (lib.character[name][1] == group) list.push(name);
                  }
                } else if (_status.connectMode) {
                  list = get.charactersOL(function (i) {
                    return lib.character[i][1] != group;
                  });
                } else {
                  list = get.gainableCharacters(function (info) {
                    return info[1] == group;
                  });
                }
                var players = game.players.concat(game.dead);
                for (var i = 0; i < players.length; i++) {
                  list.remove(players[i].name);
                  list.remove(players[i].name1);
                  list.remove(players[i].name2);
                }
                list = list.randomGets(3);
                if (!list.length) {
                  event.finish();
                  return;
                }
                trigger.player
                  .chooseButton()
                  .set('ai', function (button) {
                    return get.rank(button.link, true) - lib.character[button.link][2] - (get.rank(trigger.player.name1, true) - lib.character[trigger.player.name1][2]);
                  })
                  .set('createDialog', ['将武将牌替换为一名角色', [list, 'character']]);
                ('step 3');
                if (result.links?.length) {
                  trigger.player.reinit(trigger.player.name, result.links[0]);
                }
              },
            },
            hj_jl_longdan: {
              //龙胆
              audio: 'ext:魂将/武将配音/极略篇/魂☆赵云:2',
              enable: ['chooseToRespond', 'chooseToUse'],
              filter(event, player) {
                return player.countCards('he', { type: 'basic' }) > 0;
              },
              chooseButton: {
                dialog(event, player) {
                  var list = ['huosha', 'shan', 'tao', 'jiu'];
                  for (var i = 0; i < list.length; i++) {
                    list[i] = ['基本', '', list[i]];
                  }
                  return ui.create.dialog('龙胆', [list, 'vcard']);
                },
                filter(button, player) {
                  return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                },
                backup(links, player) {
                  return {
                    audio: 'hj_jl_longdan',
                    filterCard(card, player) {
                      var name = links[0][2];
                      if (name == 'sha' || name == 'tao') {
                        return get.color(card) == 'red' && get.type(card) == 'basic';
                      }
                      if (name == 'shan' || name == 'jiu') {
                        return get.color(card) == 'black' && get.type(card) == 'basic';
                      }
                      return false;
                    },
                    position: 'hes',
                    selectCard: 1,
                    popname: true,
                    ai(card) {
                      return 8 - get.value(card);
                    },
                    viewAs: {
                      name: links[0][2],
                      nature: links[0][3],
                    },
                  };
                },
                prompt(links, player) {
                  return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                },
              },
              ai: {
                respondSha: true,
                respondShan: true,
                save: true,
              },
            },
            hj_jl_yajiao: {
              //涯角
              audio: 'ext:魂将/武将配音/极略篇/魂☆赵云:2',
              trigger: {
                player: 'loseAfter',
              },
              forced: true,
              filter(event, player) {
                return player != _status.currentPhase && event.hs && event.hs.length && ['useCard', 'respond'].includes(event.parent.name);
              },
              content() {
                'step 0';
                event.card = get.cards()[0];
                game.cardsGotoOrdering(event.card);
                event.videoId = lib.status.videoId++;
                var judgestr = get.translation(player) + '发动了〖涯角〗';
                game.addVideo('judge1', player, [get.cardInfo(event.card), judgestr, event.videoId]);
                game.broadcastAll(
                  function (player, card, str, id, cardid) {
                    var event;
                    if (game.online) {
                      event = {};
                    } else {
                      event = _status.event;
                    }
                    if (game.chess) {
                      event.node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
                    } else {
                      event.node = player.$throwordered(card.copy(), true);
                    }
                    if (lib.cardOL) lib.cardOL[cardid] = event.node;
                    event.node.cardid = cardid;
                    event.node.classList.add('thrownhighlight');
                    ui.arena.classList.add('thrownhighlight');
                    event.dialog = ui.create.dialog(str);
                    event.dialog.classList.add('center');
                    event.dialog.videoId = id;
                  },
                  player,
                  event.card,
                  judgestr,
                  event.videoId,
                  get.id()
                );
                game.log(player, '展示了', event.card);
                player
                  .chooseTarget('选择获得此牌的角色')
                  .set('ai', function (target) {
                    var att = get.attitude(_status.event.player, target);
                    if (_status.event.du) {
                      if (target.hasSkillTag('nodu')) return 0;
                      return -att;
                    }
                    if (att > 0) {
                      return att + Math.max(0, 5 - target.countCards('h'));
                    }
                    return att;
                  })
                  .set('du', event.card.name == 'du');
                ('step 1');
                if (result.bool) {
                  event.dialog.close();
                  game.addVideo('judge2', null, event.videoId);
                  player.line(result.targets, 'green');
                  result.targets[0].gain(event.card, 'log');
                  ui.arena.classList.remove('thrownhighlight');
                } else {
                  event.dialog.close();
                  game.addVideo('judge2', null, event.videoId);
                  ui.arena.classList.remove('thrownhighlight');
                }
                ('step 2');
                if (get.type(event.card, 'trick') != get.type(trigger.parent.card, 'trick')) {
                  event.disbool = true;
                  player
                    .chooseTarget('是否弃置一名角色区域里的一张牌？', function (card, player, target) {
                      return target.countDiscardableCards(player, 'hej') > 0;
                    })
                    .set('ai', function (target) {
                      var player = _status.event.player;
                      return get.effect(target, { name: 'guohe' }, player, player);
                    });
                } else {
                  event.recoverbool = true;
                  player
                    .chooseTarget('是否令一名角色回复1点体力？', function (card, player, target) {
                      return target.hp < target.maxHp;
                    })
                    .set('ai', function (target) {
                      return get.attitude(player, target);
                    });
                }
                ('step 3');
                if (event.recoverbool) {
                  if (result.targets?.length) {
                    player.line(result.targets[0], 'green');
                    result.targets[0].recover();
                  }
                  event.dialog.close();
                  game.addVideo('judge2', null, event.videoId);
                  ui.arena.classList.remove('thrownhighlight');
                } else if (event.disbool) {
                  if (result.targets?.length) {
                    player.line(result.targets[0], 'green');
                    player.discardPlayerCard(result.targets[0], 'hej', true);
                  }
                  event.dialog.close();
                  game.addVideo('judge2', null, event.videoId);
                  ui.arena.classList.remove('thrownhighlight');
                }
              },
              ai: {
                effect: {
                  target(card, player, target) {
                    if (get.tag(card, 'respond') && target.countCards('h') > 1) return [1, 0.2];
                  },
                },
              },
            },
            hj_jl_chongzhen: {
              //冲阵
              audio: 'ext:魂将/武将配音/极略篇/魂☆赵云:2',
              srlose: true,
              trigger: { global: ['loseAfter', 'cardsDiscardAfter'] },
              filter(event, player) {
                if (event.name == 'lose' && event.position != ui.discardPile) return false;
                var criterion0 = event.cards.filter((card) => card.name == 'shan' && get.position(card, true) == 'd').length;
                var criterion1 = player.countCards('he', (card) => card.name != 'shan') != 0;
                return criterion0 && criterion1;
              },
              forced: true,
              content() {
                'step 0';
                event.cards = trigger.cards.slice(0);
                event.cards = event.cards.filter((card) => get.position(card) == 'd' && card.name == 'shan');
                ('step 1');
                event.card = event.cards.shift();
                player.chooseToDiscard('是否发动【冲阵】替换弃牌堆中的' + get.translation(event.card) + '?', 'he', (card) => card.name != 'shan').ai = function (card) {
                  if (player.countCards('h', { name: 'shan' }) >= 2) return false;
                  return 6 - get.value(card);
                };
                ('step 2');
                if (result.bool) {
                  player.gain(event.card, 'gain2');
                  if (_status.currentPhase != player) {
                    player.chooseBool('是否对' + get.translation(_status.currentPhase) + '使用一张无视防具的杀？').ai = function () {
                      return get.attitude(player, _status.currentPhase) < 0;
                    };
                  } else {
                    event.finish();
                  }
                } else {
                  event.finish();
                }
                ('step 3');
                if (result.bool) {
                  player.addTempSkill('unequip', 'shaAfter');
                  player.useCard({ name: 'sha' }, _status.currentPhase, false);
                }
                ('step 4');
                if (event.cards.length) event.goto(1);
              },
            },
            hj_jl_beige: {
              //悲歌
              audio: 'ext:魂将/武将配音/极略篇/魂蔡文姬:2',
              trigger: {
                global: 'damageEnd',
              },
              forced: true,
              _priority: -1,
              checkx(event, player) {
                var att1 = get.attitude(player, event.player);
                var att2 = get.attitude(player, event.source);
                return att1 > 0 && att2 <= 0;
              },
              filter(event, player) {
                return player.countCards('he') && event.source && event.source != player && event.player.isAlive();
              },
              prompt2(event, card) {
                return '是否发动【悲歌】？', '锁定技,每当一名角色(' + get.translation(trigger.player) + ')受到其他角色(' + get.translation(trigger.source) + ')造成的伤害时,若伤害来源不为你,你可以弃置一张牌令其进行一次判定,并根据最终判定花色执行其对应效果(X为此次伤害数值):♥️️️该角色回复X点体力;♦️️️︎该角色摸1+X张牌;♣️️️伤害来源弃置1+X张牌;♠️️️伤害来源翻面并失去X点体力';
              },
              content() {
                'step 0';
                player.chooseToDiscard('he', get.prompt2('hj_jl_beige')).set('ai', function (card) {
                  return 8 - get.useful(card);
                });
                ('step 1');
                if (result.bool) {
                } else {
                  event.finish();
                }
                ('step 2');
                if (result.bool) {
                  trigger.player.judge();
                } else {
                  event.finish();
                }
                ('step 3');
                switch (result.card.suit) {
                  case 'heart':
                    trigger.player.recover(trigger.num);
                    break;
                  case 'diamond':
                    trigger.player.draw(1 + trigger.num);
                    break;
                  case 'club':
                    trigger.source.chooseToDiscard('he', 1 + trigger.num, true);
                    break;
                  case 'spade':
                    trigger.source.turnOver() && trigger.source.loseHp(trigger.num);
                    break;
                }
              },
              ai: {
                expose: 0.3,
              },
            },
            hj_jl_moshi: {
              //默识
              audio: 'ext:魂将/武将配音/极略篇/魂蔡文姬:2',
              trigger: {
                player: 'phaseDiscardBegin',
              },
              forced: true,
              filter(event, player) {
                return (
                  player.getHistory('useCard', function (evt) {
                    return evt.isPhaseUsing() && ['basic', 'trick', 'delay'].includes(get.type(evt.card));
                  }).length && player.countCards('h') > 0
                );
              },
              content() {
                'step 0';
                event.history = player.getHistory('useCard', function (evt) {
                  return evt.isPhaseUsing() && ['basic', 'trick', 'delay'].includes(get.type(evt.card));
                });
                ('step 1');
                event._result = {};
                if (event.history.length && player.countCards('h')) {
                  var card = event.history.shift().card;
                  card = { name: card.name, nature: card.nature };
                  if (lib.filter.cardEnabled(card)) {
                    if (
                      game.hasPlayer(function (current) {
                        return player.canUse(card, current);
                      })
                    ) {
                      lib.skill.hj_jl_moshi_card.viewAs = card;
                      var next = player.chooseToUse();
                      if (next.isOnline()) {
                        player.send(function (card) {
                          lib.skill.hj_jl_moshi_card.viewAs = card;
                        }, card);
                      }
                      next.set('openskilldialog', '默识:将一张手牌当' + get.translation(card) + '使用');
                      next.set('norestore', true);
                      next.set('_backupevent', 'hj_jl_moshi_card');
                      next.backup('hj_jl_moshi_card');
                    }
                  }
                }
                ('step 2');
                if (result && result.bool) event.goto(1);
              },
              group: 'hj_jl_moshi_card',
              subSkill: {
                card: {
                  filterCard(card) {
                    return get.itemtype(card) == 'card';
                  },
                  selectCard: true,
                  popname: true,
                },
              },
            },
            hj_jl_chenqing: {
              //陈情
              audio: 'ext:魂将/武将配音/极略篇/魂蔡文姬:2',
              trigger: {
                global: 'dying',
              },
              usable: 1,
              forced: true,
              _priority: 100,
              filter(event, player) {
                return event.player.hp <= 0;
              },
              content() {
                'step 0';
                player
                  .chooseTarget(get.prompt2('hj_jl_chenqing'), function (card, player, target) {
                    return target != _status.event.getTrigger().player;
                  })
                  .set('ai', function (target) {
                    var player = _status.event.player;
                    var trigger = _status.event.getTrigger();
                    if (get.attitude(player, trigger.player) > 0) {
                      var att1 = get.attitude(target, player);
                      var att2 = get.attitude(target, trigger.player);
                      var att3 = get.attitude(player, target);
                      if (att3 < 0) return 0;
                      return att1 / 2 + att2 + att3;
                    } else {
                      return 0;
                      // return get.attitude(player,target);
                    }
                  });
                ('step 1');
                if (result.targets?.length) {
                  event.target = result.targets[0];
                  player.line('thunder', event.target);
                  event.target.draw(5);
                } else {
                  event.finish();
                }
                ('step 2');
                var target = event.target;
                var tosave = trigger.player;
                var att = get.attitude(target, tosave);
                var hastao = target.countCards('h', 'tao');
                target
                  .chooseToDiscard(4, true, 'he')
                  .set('ai', function (card) {
                    var hastao = _status.event.hastao;
                    var att = _status.event.att;
                    if (!hastao && att > 0) {
                      var suit = card.suit;
                      for (var i = 0; i < ui.selected.cards.length; i++) {
                        if (ui.selected.cards[i].suit == suit) {
                          return -4 - get.value(card);
                        }
                      }
                    }
                    if (att < 0 && ui.selected.cards.length == 3) {
                      var suit = card.suit;
                      for (var i = 0; i < ui.selected.cards.length; i++) {
                        if (ui.selected.cards[i].suit == suit) {
                          return -get.value(card);
                        }
                      }
                      return -10 - get.value(card);
                    }
                    return -get.value(card);
                  })
                  .set('hastao', hastao)
                  .set('att', att);
                ('step 3');
                if (result.cards && result.cards.length == 4) {
                  var suits = [];
                  for (var i = 0; i < result.cards.length; i++) {
                    suits.add(result.cards[i].suit);
                  }
                  if (suits.length == 4) {
                    if (trigger.player.hp < 1) {
                      event.target.line(trigger.player);
                      trigger.player.recover(1 - trigger.player.hp, event.target);
                    }
                  } else {
                    if (player.hp > 0) {
                      player.loseHp();
                    }
                    player.gain(result.cards, 'gain2');
                    game.log(player, '获得了', result.cards);
                  }
                }
              },
              ai: {
                expose: 0.2,
                threaten: 1.5,
                save: true,
              },
            },
          },
          translate: {
            hj_bm_hunsunce: '魂孙策',
            hj_bm_hunsunjian: '魂孙坚',
            hj_bm_huncaoren: '魂曹仁',
            hj_bm_huncaozhi: '魂曹植',
            hj_bm_huncaochun: '魂曹纯',
            hj_bm_huncaoying: '魂曹婴',
            hj_bm_hunyujin: '魂于禁',
            hj_bm_hunzhanghe: '魂张郃',
            hj_bm_hunxuhuang: '魂徐晃',
            hj_bm_hunyuejin: '魂乐进',
            hj_bm_hunzhonghui: '魂钟会',
            hj_bm_hundengai: '魂邓艾',
            hj_bm_hunzhugedan: '魂诸葛诞',
            hj_bm_hunguohuai: '魂郭淮',
            hj_bm_hunpangtong: '魂庞统',
            hj_bm_hunhuangzhong: '魂黄忠',
            hj_bm_hunweiyan: '魂魏延',
            hj_bm_hunjiangwei: '魂姜维',
            hj_bm_hunlusu: '魂鲁肃',
            hj_bm_huntaishici: '魂太史慈',
            hj_bm_hunxusheng: '魂徐盛',
            hj_bm_hunlingtong: '魂凌统',
            hj_bm_hunzhuran: '魂朱然',
            hj_bm_hunsunshangxiang: '魂孙尚香',
            hj_bm_hunzhangxiu: '魂张绣',
            hj_bm_hunzhangrang: '魂张让',
            hj_bm_hunzuoci: '魂左慈',
            hj_bm_hunmiheng: '魂祢衡',
            hj_bm_bawang: '霸王',
            hj_bm_bawang_info: '锁定技,当你造成伤害后,你增加等同于此次伤害量的体力值上限',
            hj_bm_jiang: '激昂',
            hj_bm_jiang_info: '当你使用【杀】或【决斗】指定目标后/成为【杀】或【决斗】的目标后,你可以摸一张牌,若你的体力值为全场最少(或之一),你改为摸X张牌(X为你已损体力值)并弃置一张牌',
            hj_bm_hunzi: '魂姿',
            hj_bm_hunzi_info: '觉醒技,当你体力值降到1或者更低时,你将体力值回复至1点,并获得技能〖英魂〗、〖英姿〗、〖制霸〗、〖鹰扬〗并终止一切结算,立即开始你的回合',
            hj_bm_zhiba: '制霸',
            hj_bm_zhiba_info: '当你使用【杀】或【决斗】指定目标后,可以与其进行一次拼点,若你赢,该【杀】或【决斗】不可被响应,否则,其摸一张牌',
            hj_bm_yingyang: '鹰扬',
            hj_bm_yingyang_info: '当你的拼点牌亮出后,你可以令此牌点数增加或减少X+Y点(X为你的体力值上限,Y为你已损失的体力值)',
            hj_bm_yingzi: '英姿',
            hj_bm_yingzi_info: '锁定技,摸牌阶段摸牌时,你的摸牌数为你的体力值上限数;你的手牌上限为X(X为你的体力值上限＋你已损失的体力值)',
            hj_bm_yinghun: '英魂',
            hj_bm_yinghun_info: '准备阶段开始时,若你已受伤,你可令一名其他角色执行一项:1.摸X张牌,弃置一张牌;2.摸一张牌,弃置X张牌(X为你已损失的体力值,若你装备区内牌的数量不小于你的体力值,则X改为你的体力值上限)',
            hj_bm_yinghun2: '英魂',
            hj_bm_yinghun2_info: '准备阶段开始时,若你已受伤,你可令一名其他角色执行一项:1.摸X张牌,弃置一张牌;2.摸一张牌,弃置X张牌(X为你已损失的体力值,若你装备区内牌的数量不小于你的体力值,则X改为你的体力值上限)',
            hj_bm_wulie: '武烈',
            hj_bm_wulie_info: '一名角色的准备阶段开始时,你可以令其失去一点体力并摸一张牌,如若此做,其本回合内首次造成的伤害值＋1且每次造成伤害后摸一张牌',
            hj_bm_hunyou: '魂佑',
            hj_bm_hunyou_info: '当一名角色即将受到大于1点的伤害时,你可以弃置一张牌,如若此做,此次伤害值改为1',
            hj_bm_jushou: '据守',
            hj_bm_jushou_info: '结束阶段,你可以摸三张牌,你可以移动场上的一张牌,最后将你的武将牌翻面.<br/>当你的武将牌背面朝上时,你不能成为【决斗】和【火攻】的目标.当你受到伤害后,若你武将牌背面朝上,你可以弃置一张牌,你翻面.若你以此法翻回正面,你亦可移动场上的一张牌',
            hj_bm_lizhan: '励战',
            hj_bm_lizhan_info: '当你武将牌翻面后,你可以令任意名角色摸一张牌.<br/>当一名角色回复体力或失去体力上限后或当其成为【杀】的目标时,你可以令其摸一张牌',
            hj_bm_zuijiu: '醉酒',
            hj_bm_zuijiu_info: '出牌阶段限一次,若你已受伤,你可以失去一点体力值上限,你获得一枚［醉酒］标记.<br/>锁定技,你使用【杀】造成的伤害基数＋X(X为你的［醉酒］标记数).<br/>当你进入濒死状态时,你增加一点体力值上限并摸一张牌',
            hj_bm_luohua: '落花',
            hj_bm_luohua_info: '锁定技,你的回合外,每当一张♣️️牌因使用、响应、弃置或判定而进入弃牌堆时,你弃置一枚［落花］标记并获得之;每轮开始时,你将［落花］标记补充至7',
            hj_bm_shifu: '诗赋',
            hj_bm_shifu_info: '锁定技,摸牌阶段开始时,若你［落花］标记数不大于5,你跳过摸牌阶段;出牌阶段开始时,你弃置手中所有的♣️️牌并摸取等量的牌,你本回合内使用【杀】和【酒】的次数＋X且你计算与其他角色的距离－X(X为你以此法弃置的牌数)',
            hj_bm_xiaorui: '骁锐',
            hj_bm_xiaorui_info: '准备阶段,你可以摸X张牌(X为当前存活人数),你弃置Y张牌(Y为势力与你不同的角色数且至少为1).若你以此法弃置了装备牌,你可以选择至多Y名角色,视为对他们使用了一张【杀】(无视距离且不计入次数限制)',
            hj_bm_shanjia: '缮甲',
            hj_bm_shanjia_info: '出牌阶段开始时,你可以摸三张牌,弃置3-X张牌(X为你本局游戏内失去过的装备区内的牌的数目且至多为3).若你没有以此法弃置基本牌或锦囊牌,则你可以视为使用了一张不计入出牌阶段使用次数的【杀】',
            hj_bm_lingren: '凌人',
            hj_bm_lingren_info: '锁定技,你使用【杀】造成的伤害值＋X(X为当前场上【魏】势力角色数).<br/>你根据当前场上【魏】势力角色数来获得以下技能:1个〖奸雄〗、2个〖行殇〗.<br/>锁定技,出牌阶段开始时,你随机获得一张进攻类型牌;结束阶段,你随机获得一张防御类型牌',
            hj_bm_fujian: '伏间',
            hj_bm_fujian_info: '出牌阶段限一次,你可以观看一名角色的手牌,你可以获得其中一张红色牌.<br/>锁定技,回合外每名角色回合限一次,当你使用或打出一张牌后,你随机获得一名角色手牌中同名的一张牌',
            hj_bm_jianxiong: '奸雄',
            hj_bm_jianxiong_info: '每当你受到伤害后,你可以摸一张牌并获得对你造成伤害的牌',
            hj_bm_xingshang: '行殇',
            hj_bm_xingshang_info: '当其他角色死亡后,你可以选择一项执行:1.回复1点体力;2.获得其所有牌',
            hj_bm_yizhong: '毅重',
            hj_bm_yizhong_info: '锁定技,当你没有装备防具时,黑色的【杀】对你无效.<br/>若你已受伤,你的手牌上限＋2',
            hj_bm_zhenjun: '镇军',
            hj_bm_zhenjun_info: '准备阶段,你可以选择一名其他角色并交给其一张牌.若你的体力值小于其,你选择一项:回复一点体力或摸两张牌;若你体力值大于其,你令其选择一项:回复一点体力或摸两张牌,你摸一张牌并失去一点体力.否则,你与其各摸一张牌',
            hj_bm_jieyue: '节钺',
            hj_bm_jieyue_info: '出牌阶段限一次,你可以展示一名角色的一张手牌,你展示一张手牌,若你与其展示的牌:1.颜色相同,你摸一张牌;2.类别相同,你弃置其展示的牌;3.花色相同,你令其将武将牌翻面',
            hj_bm_yuanlue: '远略',
            hj_bm_yuanlue_info: '出牌阶段开始时,若你有未被废除的装备栏,你可以废除一个装备栏,如若此做,你摸三张牌,本回合使用牌无距离限制且每用一张牌便摸一张牌(若你已经发动了【明主】,则没有使用牌摸一张的效果)',
            hj_bm_mingzhu: '明主',
            hj_bm_mingzhu_info: '觉醒技,准备阶段开始时,若你的装备栏均已被废除或你的体力值不大于2,则你回复所有装备栏并将手牌补至体力上限数,获得技能【巧变】',
            hj_bm_qiaobian: '巧变',
            hj_bm_qiaobian_info: '准备阶段,你可以选择一名其他角色,令其选择废除一个装备栏,如若此做,若你有已被废除的装备栏,你选择回复一个装备栏.当你受到一点伤害后,你亦可回复一个装备栏',
            hj_bm_jingce: '精策',
            hj_bm_jingce_info: '锁定技,你的回合内,当你使用了一张牌结算完成后,你将牌堆顶的一张牌置于武将牌上,称为「策」(至多五张).结束阶段,若你武将牌上有「策」,你需选择一项执行:1.将所有「策」收入手牌,若你的手牌数不大于你的体力值上限,你回复1点体力;2.弃置所有的「策」,你摸双倍数量的牌并将武将牌翻面',
            hj_bm_duzhan: '督战',
            hj_bm_duzhan_info: '出牌阶段限一次,你可以选择一名其他角色,你进行一次判定,若判定结果颜色为黑色,你获得此判定牌并令其本回合内不能使用或打出手牌,若判定结果颜色为红色,你对其造成1点伤害并令其获得此判定牌,若其因此死亡,则由你获得此判定牌',
            hj_bm_jiezi: '劫辎',
            hj_bm_jiezi_info: '结束阶段,你可以选择一名其他角色,直到你下回合开始前,每当其获得牌后,你选择一项执行:1.摸一张牌;2.弃置一名角色区域内的一张牌',
            hj_bm_xiaoyong: '骁勇',
            hj_bm_xiaoyong_info: '当你受到1点伤害后,你可以将牌堆顶的一张牌置于你的武将牌上,称为「勇」.准备阶段,你移去所有的「勇」,摸取双倍数量的牌且本回合内使用【杀】的次数＋X,计算与其他角色的距离－X(X为你移去「勇」的数量).若你移去「勇」的数量不小于当前体力值数,你回复1点体力且获得使用【杀】无视目标角色防具的效果直到回合结束',
            hj_bm_cuorui: '挫锐',
            hj_bm_cuorui_info: '出牌阶段限一次,你可以交给一名其他角色一张牌,选择废除其一个装备栏或令其失去一点体力',
            hj_bm_quanji: '权计',
            hj_bm_quanji_info: '出牌阶段结束时;或当你受到1点伤害/回复1点体力后,你可以摸两张牌,将一张手牌置于武将牌上,称为「权」;<br/>锁定技,你的手牌上限+X且出牌阶段内你可以多使用Y张【杀】(X为「权」的数量,Y为「权」数量的一半,向下取整)',
            hj_bm_yexin: '野心',
            hj_bm_yexin_info: '出牌阶段限一次,你可以和一名其他角色拼点,若你赢,你获得其一张牌并令其将武将牌翻面,否则其摸两张牌',
            hj_bm_paiyi: '排异',
            hj_bm_paiyi_info: '其他角色的出牌阶段开始时,你可以与该角色进行一次拼点.若你赢,该角色跳过出牌阶段,否则其获得你的一张牌,你获得此次两张拼点牌',
            hj_bm_tuntian: '屯田',
            hj_bm_tuntian_info: '锁定技,每当你于回合外失去一张牌后,你进行一次判定,若判定结果花色不为♥️️,你将其置于你的武将牌上,称为「田」,否则你获得此判定牌并摸一张牌;<br/>锁定技,你计算与其他角色的距离时始终－X(X为你武将牌上「田」的数量)',
            hj_bm_jixi: '急袭',
            hj_bm_jixi_info: '出牌阶段,你可以将一张「田」当作【顺手牵羊】对一名其他角色使用',
            hj_bm_zhenggong: '争功',
            hj_bm_zhenggong_info: '出牌阶段开始时,你可以摸三张牌,如若此做,结束阶段开始时,若你于本回合内没有造成过伤害,你失去一点体力',
            hj_bm_gongao: '功獒',
            hj_bm_gongao_info: '锁定技,当一名其他角色死亡后,你获得1枚［战功］标记;<br/>当你造成伤害后,你获得X枚［战功］标记(X为此次伤害值);<br/>当你即将受到伤害时,你失去1枚［战功］标记,防止此伤害;<br/>摸牌阶段你额外摸X张牌(X为你拥有的［战功］标记数,且至多为3)',
            hj_bm_weizhong: '威重',
            hj_bm_weizhong_info: '锁定技,你对体力值小于你的其他角色造成的伤害值＋1;体力值不大于你的其他角色对你造成的伤害值值＋1',
            hj_bm_xingkui: '形愧',
            hj_bm_xingkui_info: '锁定技,摸牌阶段你少摸一张牌;弃牌阶段你多弃置一张牌',
            hj_bm_mingqi: '鸣岐',
            hj_bm_mingqi_info: '限定技,你的回合开始前或你进入濒死状态后,1.若你未受伤,则你增加一点体力值上限并失去技能〖形愧〗;2.若你已受伤,则你增加两点体力值上限并将体力值回满.最后获得技能〖展骥〗和〖栖梧〗',
            hj_bm_qiwu: '栖梧',
            hj_bm_qiwu_info: '锁定技,当你使用的牌结算完成后,你摸一张牌,弃置一张牌',
            hj_bm_zhanji: '展骥',
            hj_bm_zhanji_info: '锁定技,当你不因此技能效果获得牌时,额外摸一张牌',
            hj_bm_pozhen: '破阵',
            hj_bm_pozhen_info: '游戏开始时,你选择一名其他角色.当其受到伤害后,你可以令伤害来源或自己摸一张牌;当其回复体力值后,你摸一张牌;当其死亡后,你增加一点体力值上限并回复1点体力,选择并获得其武将牌上的一项技能',
            hj_bm_liegong: '烈弓',
            hj_bm_liegong_info: '锁定技,你使用的【杀】无距离限制.<br/>锁定技,若你没有装备武器牌,你视为装备着〖画雀弓〗(当你使用【杀】对其他角色造成伤害时,你可以弃置其一张牌.若此牌为装备牌,你获得之).<br/>当你使用【杀】指定目标后:1.若目标角色手牌数不大于你,你可令此【杀】不可被响应;2.若目标角色体力值大于你,你可以选择回复1点体力,或摸X张牌(X为你与其体力值之差且至多为5)',
            hj_bm_huaquegong: '画雀弓',
            hj_bm_huaquegong_info: '当你使用【杀】对其他角色造成伤害时,你可以弃置其一张牌.若此牌为装备牌,你获得之',
            hj_bm_kuanglang: '狂狼',
            hj_bm_kuanglang_info: '出牌阶段限一次,你可以与一名其他角色进行一次拼点:若你赢,你摸一张牌并视为对其使用了一张不可被【无懈可击】响应的【决斗】,否则,你摸两张牌并视为对其使用了一张不计入出牌阶段使用次数的【杀】',
            hj_bm_aogu: '傲骨',
            hj_bm_aogu_info: '当你造成伤害后,你可以选择一项执行:1.摸两张牌弃置一张牌;2.摸一张牌并回复1点体力',
            hj_bm_tiaoxin: '挑衅',
            hj_bm_tiaoxin_info: '出牌阶段限一次,你可以弃置一张手牌,弃置一名其他角色的一张牌.若你以此法弃置的两张牌均不为【杀】,你与其各摸一张牌.否则,若你弃置的牌为【杀】,你对其造成1点伤害.若你弃置目标角色的牌为【杀】,该角色对你造成1点伤害',
            hj_bm_tianxing: '天星',
            hj_bm_tianxing_info: '准备阶段开始时,你可以跳过本回合的摸牌阶段并观看牌堆顶的7张牌(场上现存活角色数不大于5时改为5张牌),将其中的至少X张牌(X为你的已损失体力值且至少为1)以任意顺序依次置于牌堆顶并获得其余的所有牌',
            hj_bm_dewang: '德望',
            hj_bm_dewang_info: '锁定技,当你成为卡牌的合法目标后,若你手牌中没有【杀】或【闪】,你随机获得牌堆里的一张【杀】或【闪】',
            hj_bm_haoshi: '好施',
            hj_bm_haoshi_info: '摸牌阶段,你可以放弃摸牌,如若此做,你摸X张牌(X为当前场上存活人数).你可以依次将一张牌交给一名以此法没有获得过牌的其他角色(至多3名角色),最后,若你的手牌数大于5张,你需将手牌数弃置至5张',
            hj_bm_dimeng: '缔盟',
            hj_bm_dimeng_info: '出牌阶段限一次,你可以选择一名有手牌的其他角色,随机展示其1~3张手牌,你可以令一名其他角色获得这些牌或你弃置这些牌',
            hj_bm_yizhen: '天义',
            hj_bm_yizhen_info: '出牌阶段限一次,你可以与一名其他角色进行一次拼点:若你赢,本回合内你获得以下效果:1.你的攻击范围无限并且可以多使用一张【杀】;2.使用【杀】的目标数＋1并无视其防具.若你没赢,你不能使用【杀】直到出牌阶段结束.拼点结束后,你可以获得点数小的一张拼点牌',
            hj_bm_dulie: '笃烈',
            hj_bm_dulie_info: '锁定技,当你造成伤害后,你获得一枚［笃烈］标记(至多4枚).若你拥有的［笃烈］标记数量为:至少一个,手牌上限改为体力值上限;至少两个,摸牌阶段你额外摸一张牌;至少三个,你跳过判定阶段;四个,当你于回合外失去牌时,摸一张牌',
            hj_bm_pojun: '破军',
            hj_bm_pojun_info: '当你使用【杀】指定目标后,你可以将其的至多X张牌置于其武将牌上(X为其体力值),其于当前回合结束时获得这些牌.<br/>当你因执行【杀】的效果而对一名角色造成伤害时,若该角色的手牌数和装备区内的牌数均不大于你,则此【杀】伤害值+1',
            hj_bm_tiebi: '铁壁',
            hj_bm_tiebi_info: '锁定技,你计算与其他角色的距离时始终－1且你的武将牌不能被翻面.<br/>锁定技,你使用【杀】对体力值不小于你的角色造成的伤害值+1',
            hj_bm_xuanfeng: '旋风',
            hj_bm_xuanfeng_info: '每当你失去一次装备区内的牌时,你可以选择执行一项:1.视为对任意一名其他角色使用一张【杀】并弃置其1～2张牌(此【杀】不计入每回合的使用限制);2.对与你距离1以内的一名其他角色造成1点伤害并摸一张牌',
            hj_bm_jiliu: '激流',
            hj_bm_jiliu_info: '当其他角色的装备牌,因卡牌弃牌或机制弃牌而进入弃牌堆时,你可以获得之',
            hj_bm_yongjin: '勇进',
            hj_bm_yongjin_info: '限定技,出牌阶段,你可以依次移动场上的至多三张不同的装备牌',
            hj_bm_danshou: '胆守',
            hj_bm_danshou_info: '当你成为其他角色使用的牌的目标后,若其有牌,你可以弃置其一张牌并根据你以此弃置的牌执行对应效果:1.若此牌为黑色,你摸一张牌;2.若此牌为红色,其使用的牌对你无效;3.若此牌为基本牌,你获得此牌;4.若此牌为锦囊牌,你对其造成一点伤害;5.若此牌为装备牌,你使用之',
            hj_bm_xiaoji: '枭姬',
            hj_bm_xiaoji_info: '锁定技,游戏开始时你获得以下效果:1.废除你的武器栏和防具栏;2.你视为拥有手牌中所有武器和防具的技能;3.游戏开始、回合开始、当你获得武器或防具时,展示你手牌中的所有武器与防具;4.你的武器和防具不计入手牌上限;5.你的攻击范围+X(X为你手牌中与装备区内的装备牌数量)',
            hj_bm_jianwu: '剑舞',
            hj_bm_jianwu_info: '每当你使用或失去一张装备牌,你可以摸两张牌',
            hj_bm_jianying: '剑影',
            hj_bm_jianying_info: '出牌阶段限一次,你可以弃置一张装备牌,令一名角色回复1点体力或对其造成1点伤害',
            hj_bm_yujian: '御剑',
            hj_bm_yujian_info: '限定技,出牌阶段,若你没有装备牌,你可以从牌堆中随机获得四张装备牌',
            hj_bm_huanhua: '幻化',
            hj_bm_huanhua_info: '锁定技,游戏开始时,或你的回合开始时、回合结束时,你随机观看两张武将牌,你可以选择其中一张,获得其所有技能直到你的下一次变化(不可获得主公技)',
            hj_bm_dunshu: '遁书',
            hj_bm_dunshu_info: '锁定技,其他角色计算与你的距离时始终＋1,你计算与其他角色的距离时始终－1.<br/>每个回合限一次,当你成为【杀】的目标时,若你装备区内没有防具牌,此【杀】对你无效.<br/>你的体力值上限最少为4,任何时候,当你的体力上限低于4时,你将体力上限改为4,将体力值回复至4',
            hj_bm_xiongluan: '雄乱',
            hj_bm_xiongluan_info: '出牌阶段限一次,你可以选择一名其他角色,令其回复1点体力,若其手牌数不等于体力值上限,你令其将手牌补至体力值上限数,否则其摸一张牌.你选择一项执行:1.将手牌数调整至与其相同;2.摸一张牌,本回合内使用牌无距离和次数限制',
            hj_bm_xiongluan2: '雄乱',
            hj_bm_xiongluan2_info: '',
            hj_bm_congjian: '从谏',
            hj_bm_congjian_info: '每回合限一次,当你成为其他角色使用的牌的目标后,你可以令使用者摸一张牌,你对其造成1点伤害,如若此做,此牌对你无效,改为你对其使用了此牌',
            hj_bm_luanzheng: '乱政',
            hj_bm_luanzheng_info: '当一名角色使用的一张非装备牌对其指定的目标即将生效时,若此牌目标只有一个且不为你,你可以重新为此牌指定新的目标(新的目标不得为原来的目标),若新指定的目标为你,你摸一张牌',
            hj_bm_luoshen: '洛神',
            hj_bm_luoshen_info: '锁定技,准备阶段,你可以进行一定判定:若判定结果的花色不为♥️️️,你获得此牌并继续判定,直至出现♥️️️花色;若你因此技能而获得的牌数不大于2,结束阶段,你可以令一名其他角色翻面',
            hj_bm_fanghua: '芳华',
            hj_bm_fanghua_info: '锁定技,当一名其他角色将武将牌翻至背面后,其失去一点体力',
            hj_bm_xishui: '汐水',
            hj_bm_xishui_info: '锁定技,你可以将一张非♥️️️卡牌当做【闪】打出;每当你使用或打出一张【闪】时,你可以令一名其他角色翻面',
            hj_bm_zishu: '自书',
            hj_bm_zishu_info: '锁定技,你于回合外获得的牌均会在当前回合结束时置于你的武将牌旁称为<书>;每当你成为其他角色卡牌的目标或不以此法获得牌时,你额外摸一张牌',
            hj_bm_yingyuan: '应援',
            hj_bm_yingyuan_info: '锁定技,你可以将你使用打出或弃置的牌交给一名其他角色',
            hj_bm_xiemu: '协穆',
            hj_bm_xiemu_info: '锁定技,每当你成为其他角色卡牌的目标时,你可以令其选择并获得一张<书>.若如此做,其需选择交给你两张牌或令此牌对你无效',
            hj_bm_fubing: '伏兵',
            hj_bm_fubing_info: '弃牌阶段开始前或当你受到伤害后,你可以将一张牌移出游戏,你为此牌记录一张基本牌或者锦囊牌的名字,称为<伏兵>.当一名其他角色使用一张与你记录的牌名相同的牌时,你可以移去此<伏兵>,令其使用的牌无效,你获得其使用的牌并令其失去一点体力',
            hj_bm_benyu: '贲育',
            hj_bm_benyu_info: '当你受到伤害后,你可以摸X张牌(X为伤害来源的手牌数且至多为5),如若此做,你可以弃置等同与你当前体力值数的牌,对伤害来源造成等量的伤害',
            hj_bm_kuangcai: '狂才',
            hj_bm_kuangcai_info: '出牌阶段开始时,你可以获得以下效果直到回合结束:</br><li>摸两张牌(若手牌数不小于3张,则改为摸一张牌).</br><li>使用牌无次数与距离限制.</br><li>每用一张牌便可以摸一张牌,手牌上限－1(手牌上限为0时,不能发动此效果).</br><li>手牌上限＋2',
            hj_bm_shejian: '舌剑',
            hj_bm_shejian_info: '弃牌阶段结束时,若你于此阶段内有弃置过牌,你可以选择至多X名有牌的其他角色(X为你于弃牌阶段内弃置的牌数),你弃置他们各一张牌',
            hj_jl_huncaocao: '魂曹操',
            hj_jl_hunliubei: '魂刘备',
            hj_jl_hunsunquan: '魂孙权',
            hj_jl_hunzhangjiao: '魂张角',
            hj_jl_hunguojia: '魂郭嘉',
            hj_jl_hunsimayi: '魂司马懿',
            hj_jl_hunxiahoudun: '魂夏侯惇',
            hj_jl_hunzhangliao: '魂张辽',
            hj_jl_hundianwei: '魂典韦',
            hj_jl_hunguanyu: '魂关羽',
            hj_jl_hunzhangfei: '魂张飞',
            hj_jl_hunzhugeliang: '魂诸葛亮',
            hj_jl_hunzhaoyun: '魂赵云',
            hj_jl_hunhuangyueying: '魂黄月英',
            hj_jl_hunzhouyu: '魂周瑜',
            hj_jl_hunlvmeng: '魂吕蒙',
            hj_jl_hunluxun: '魂陆逊',
            hj_jl_hunganning: '魂甘宁',
            hj_jl_hunsunshangxiang: '魂孙姬',
            hj_jl_hunlvbu: '魂吕布',
            hj_jl_hunjiaxu: '魂贾诩',
            hj_jl_hunsimahui: '魂司马徽',
            hj_jl_hunhuatuo: '魂华佗',
            hj_jl_hundiaochan: '魂貂蝉',
            hj_jl_hundongzhuo: '魂董卓',
            hj_jl_hunxuchu: '魂许褚',
            hj_jl_hunzhenji: '魂甄姬',
            hj_jl_hundaqiao: '魂大乔',
            hj_jl_hunmachao: '魂马超',
            'hj_jl_hun☆lvbu': '魂☆吕布',
            'hj_jl_hun☆zhugeliang': '魂☆诸葛亮',
            hj_jl_hunxizhicai: '魂戏志才',
            hj_jl_hunxiaoqiao: '魂小乔',
            hj_jl_huncaiwenji: '魂蔡文姬',
            hj_jl_hunxunyu: '魂荀彧',
            'hj_jl_hun★lvbu': '魂★吕布',
            hj_jl_hunzuoyou: '魂左幽',
            hj_jl_hunlvlingqi: '魂吕玲绮',
            hj_jl_hunwuyi: '魂吴毅',
            'hj_jl_hun☆huatuo': '魂☆华佗',
            'hj_jl_hun☆luxun': '魂☆陆逊',
            'hj_jl_hun☆zhaoyun': '魂☆赵云',
            hj_jl_hunzhanghegaolan: '魂张郃高览',
            hj_jl_hunyanliangwenchou: '魂颜良文丑',
            hj_jl_hundaqiaoxiaoqiao: '魂大乔小乔',
            hj_jl_zhishi: '治世',
            hj_jl_zhishi_info: '出牌阶段限一次,你可以指定一名其他角色,令其选择一项执行:1.弃置一张基本牌,回复1点体力;2.受到你造成的1点伤害,该角色摸两张牌',
            hj_jl_guixin: '归心',
            hj_jl_guixin_info: '当你受到伤害后,你可以依次选择获得每名其他角色区域里的一张牌,摸X张牌(X为阵亡/败退的角色数),最后将你的武将牌翻面.<br/>锁定技,你的防御距离始终+1',
            hj_jl_zhaoxiang: '招降',
            hj_jl_zhaoxiang_info: '当一名其他角色使用【杀】指定目标后,你可以令该【杀】使用者选择一项执行:1.交给你一张牌;2.令此【杀】对目标无效.若该【杀】使用者或该【杀】的目标不在你的攻击范围内,你须先弃置一张手牌',
            hj_jl_junwang: '君望',
            hj_jl_junwang_info: '锁定技,其他角色的出牌阶段开始时,若其手牌数不小于你,其须交给你一张手牌',
            hj_jl_jizhao: '激诏',
            hj_jl_jizhao_info: '出牌阶段对每名其他角色限一次,你可以交给其至少一张手牌,并令其获得一个［诏］标记.拥有［诏］标记的角色回合结束时,若其本回合内未造成过伤害,其受到你造成的1点伤害并失去［诏］标记',
            hj_jl_longnu: '龙怒',
            hj_jl_longnu_info: '出牌阶段限两次,你可以弃置一张牌并展示牌堆顶的三张牌,令一名其他角色选择一项执行:1.弃置一张与此三张牌类型均不同的牌,令你获得这些牌;2.受到你造成的1点伤害并获得其中一张牌,你获得其余的牌',
            hj_jl_huju: '虎踞',
            hj_jl_huju_info: '锁定技,其他角色的回合开始时,你摸一张牌.<br/>你的回合开始时,若你的手牌数为全场最多或其中之一,你选择一项执行:1.失去一点体力;2.减1点体力值上限,失去技能〖虎踞〗,获得技能〖虎缚〗和〖制衡〗',
            hj_jl_zhiheng: '制衡',
            hj_jl_zhiheng_info: '出牌阶段限一次,你可以弃置任意张牌并摸等量的牌,若你在发动〖制衡〗时弃置了所有手牌,则你多摸一张牌',
            hj_jl_hufu: '虎缚',
            hj_jl_hufu_info: '出牌阶段限一次,你可以指定一名其他角色,令其弃置X张牌(X为其装备区内牌的数量)',
            hj_jl_xionglve: '雄略',
            hj_jl_xionglve_info: '摸牌阶段,你可以放弃摸牌,展示牌堆顶的两张牌,你选择获得其中一张牌,将另一张牌置于你的武将牌上,称为「略」.<br/>出牌阶段,你可以选择一张「略」,若该牌类型为基本牌或锦囊牌,你可以视为将其当做与之同类型的任意一张牌(延时类锦囊牌除外)使用之;若该牌类型为装备牌,你可将其置于一名其他角色装备区内的相应位置',
            hj_jl_dianjie: '电界',
            hj_jl_dianjie_info: '你可以跳过你的摸牌阶段或出牌阶段,进行一次判定:若判定结果颜色为黑色,你对一名角色造成2点雷电伤害;若判定结果颜色为红色,你令至多两名武将牌未横置的角色将其武将牌横置',
            hj_jl_shendao: '神道',
            hj_jl_shendao_info: '一名角色的判定结果生效前,你可以打出一张手牌或使用场上的一张牌代替之,你获得原判定牌',
            hj_jl_leihun: '雷魂',
            hj_jl_leihun_info: '锁定技,你受到的雷电伤害均视为体力回复,并摸一张牌',
            hj_jl_tianji: '天机',
            hj_jl_tianji_info: '一名角色的出牌阶段开始时,你可以观看牌堆顶的一张牌,你可以选择一项:用一张手牌替换之;若你的手牌数不是全场最多的(或之一),你可以获得之',
            hj_jl_tianqi: '天启',
            hj_jl_tianqi_info: '你的濒死状态除外,每当你需要使用或打出一张基本牌或非延时类锦囊牌时,你可以声明之,亮出牌堆顶的一张牌,并将此牌当你所述之牌使用或打出,若其与你所述之牌不为同一类型,你失去一点体力(你的出牌阶段限一次)',
            hj_jl_tianqi2: '天启',
            hj_jl_tianqi2_info: '',
            hj_jl_tianqi3: '天启',
            hj_jl_tianqi3_info: '',
            hj_jl_tianqi4: '天启',
            hj_jl_tianqi4_info: '',
            hj_jl_tianqi5: '天启',
            hj_jl_tianqi5_info: '',
            hj_jl_choumou: '筹谋',
            hj_jl_choumou_info: '回合开始阶段,你可以弃置一张手牌,进行一次判定,若判定结果为红色,你将场上的一张牌移动到一个合理的位置;若判定结果为黑色,你对一名角色造成1点伤害,你摸一张牌',
            hj_jl_qizuo: '奇佐',
            hj_jl_qizuo_info: '当你使用的普通类锦囊牌结算完毕后,你可以令此牌对所有目标额外结算一次',
            hj_jl_wangzuo: '王佐',
            hj_jl_wangzuo_info: '准备阶段开始时或当你受到伤害后,你摸一张牌并从三张随机的未登场武将牌上选择一个技能,你可令一名角色获得此技能直至其回合结束.若其以此法获得的技能来自魏或神势力,则你可令其回复1点体力或摸一张牌',
            hj_jl_quhu: '驱虎',
            hj_jl_quhu_info: '出牌阶段限一次,你可以与一名体力值大于你的角色拼点,若你赢,则该角色对其攻击范围内另一名由你指定的角色造成1点伤害.若你没赢,该角色对你造成一点伤害',
            hj_jl_jieming: '节命',
            hj_jl_jieming_info: '当你受到1点伤害后,你可以令一名角色摸两张牌.若其手牌数小于体力上限,则你摸一张牌',
            hj_jl_xianshi: '先识',
            hj_jl_xianshi_info: '每名角色限一次,当一名角色的回合开始时,你可重铸一张牌并令其跳过:1.摸牌阶段和出牌阶段;2.判定阶段和弃牌阶段',
            hj_jl_tiandu: '天妒',
            hj_jl_tiandu_info: '锁定技,当你的判定牌生效时,你可以获得此牌',
            hj_jl_tiance: '天策',
            hj_jl_tiance_info: '回合开始阶段,你可以令一名角色进行一次判定,你选择并令其从牌堆或弃牌堆或除其以外的随机一名角色处获得两张与判定结果花色相同的牌',
            hj_jl_jiexin: '竭心',
            hj_jl_jiexin_info: '当你受到伤害后,你可以发动一次〖天策〗,若判定结果与对你造成伤害牌的颜色相同,你额外再发动一次〖天策〗',
            hj_jl_xianfu: '先辅',
            hj_jl_xianfu_info: '锁定技,游戏开始时,你选择一名其他角色,当其受到伤害后,你受到等量的伤害,当其回复体力后,你回复等量的体力',
            hj_jl_zhuizun: '追尊',
            hj_jl_zhuizun_info: '限定技,当你进入濒死状态时,你可以将体力值回复至1点,令所有其他角色依次交给你一张手牌.最后,当前角色的回合结束后,你进行一个额外的回合',
            hj_jl_guicai: '鬼才',
            hj_jl_guicai_info: '一名角色的判定牌结果生效前,你可以选择一项执行:1.打出一张手牌代替之;2.亮出牌堆顶的一张牌代替之',
            hj_jl_jilve: '极略',
            hj_jl_jilve_info: '出牌阶段,你可以摸一张牌,选择使用一张牌或弃置一张牌.若你以此法选择了弃置牌,则本回合内此技能失效',
            hj_jl_jilve2: '极略',
            hj_jl_jilve2_info: '',
            hj_jl_tongtian: '通天',
            hj_jl_tongtian_info: '限定技,出牌阶段内,你可以弃置任意张花色均不相同的牌,根据弃置的花色获得相对应的技能:♠️️〖反馈〗. ♥️️〖观星〗.♣️️〖完杀〗.♦️️〖制衡〗',
            hj_jl_zhiheng2: '制衡',
            hj_jl_zhiheng2_info: '出牌阶段限一次,你可以弃置任意张牌并摸等量的牌,若你在发动〖制衡〗时弃置了所有手牌,则你多摸一张牌',
            hj_jl_fankui: '反馈',
            hj_jl_fankui_info: '每当你受到1点伤害后,你可以获得伤害来源的一张牌',
            hj_jl_wansha: '完杀',
            hj_jl_wansha_info: '锁定技,1.你的回合内,不处于濒死状态的角色不能使用【桃】;2.当有角色于你的回合内进入濒死状态时,你令所有其他角色的非锁定技失效直到此濒死状态结算结束',
            hj_jl_guanxing: '观星',
            hj_jl_guanxing_info: '准备阶段,你可以观看牌堆顶的5张牌(存活角色小于4时改为3张),并将其以任意顺序置于牌堆项或牌堆底,若你将〖观星〗的牌都放在了牌堆底,则你可以在结束阶段再次发动〖观星〗',
            hj_jl_ganglie: '刚烈',
            hj_jl_ganglie_info: '出牌阶段开始时,你可以失去一点体力,若如此做,你本回合内第一次造成伤害时,此伤害值+1.回合结束后,你摸x张牌(x为你回合内造成的伤害值)',
            hj_jl_danjing: '啖睛',
            hj_jl_danjing_info: '出牌阶段限一次,你可以失去一点体力,令一名其他角色摸三张牌或弃置三张牌',
            hj_jl_zhonghun: '忠魂',
            hj_jl_zhonghun_info: '当你死亡时,你可以令一名其他角色获得你武将牌上当前所有的技能',
            hj_jl_nizhan: '逆战',
            hj_jl_nizhan_info: '当一名角色受到【杀】或【决斗】造成的伤害时,你可以将一枚[袭]标记放置在该角色或伤害来源(不为你)的武将牌上',
            hj_jl_wuwei: '无畏',
            hj_jl_wuwei_info: '摸牌阶段,你可以放弃摸牌,改为亮出牌堆顶的四张牌,其中每有一张基本牌,你便可弃置此基本牌视为对一名其他角色使用一张【杀】(无距离以及次数限制),最后获得其余展示的牌',
            hj_jl_cuifeng: '摧锋',
            hj_jl_cuifeng_info: '锁定技,回合结束阶段,若场上的［袭］标记总数不小于4,你须依次从每名被标记的角色处获得等同于其［袭］标记数量的手牌.若该角色手牌不足,则你获得其全部手牌,该角色受到你对其造成的1点伤害.最后移除场上全部的［袭］标记',
            hj_jl_weizhen: '威震',
            hj_jl_weizhen_info: '回合开始阶段,你可以移除场上全部的[袭]标记,摸等量的牌',
            hj_jl_zhiji: '掷戟',
            hj_jl_zhiji_info: '出牌阶段限一次,你可以弃置至少一张武器牌,对一名其他角色造成等量的伤害.<br/>当你受到伤害后,你可以从弃牌堆或牌堆中随机获得一张武器牌',
            hj_jl_baoyong: '暴勇',
            hj_jl_baoyong_info: '出牌阶段限一次,你可以令一名有牌的其他角色交给你一张牌.若你的手牌数大于其,其选择视为对你使用一张【杀】或【决斗】',
            hj_jl_duoren: '夺刃',
            hj_jl_duoren_info: '当你成为【杀】的目标后,你可以弃置一张牌.你获得此【杀】使用者装备区里的武器牌',
            hj_jl_kuangxi: '狂袭',
            hj_jl_kuangxi_info: '锁定技,当你存活时,所有的伤害来源均视为你',
            hj_jl_wushen: '武神',
            hj_jl_wushen_info: '锁定技,你手牌中的【杀】和【桃】均视为【决斗】',
            hj_jl_suohun: '索魂',
            hj_jl_suohun_info: '锁定技,每当你受到1点伤害后,伤害来源(除你以外)获得一个［魂］标记. <br/>当你进入濒死状态时,减一半(向上取整)的体力值上限并回复体力至体力值上限,拥有［魂］标记的角色依次弃置所有的［魂］标记,受到与弃置的［魂］标记数量相同的伤害',
            hj_jl_suohun2: '索魂',
            hj_jl_suohun2_info: '',
            hj_jl_wuhun: '武魂',
            hj_jl_wuhun_info: '锁定技,当你死亡后,你选择一名角色,令其进行一次判定,若判定结果花色点数不为♥️️️2~9,其立即死亡,否则,其失去1点体力上限并失去所有技能',
            hj_jl_paoxiao: '咆哮',
            hj_jl_paoxiao_info: '出牌阶段内,当你使用【杀】对目标角色造成一次伤害并结算完毕后,你可以摸一张牌,选择继续使用一张【杀】,或令其弃置你一张牌',
            hj_jl_shayi: '杀意',
            hj_jl_shayi_info: '锁定技,出牌阶段开始时,你展示所有的手牌,若其中有【杀】,你摸一张牌;若其中没有【杀】,你于本回合内可以将一张黑色牌当做【杀】使用,且你使用【杀】无距离限制、无次数限制',
            hj_jl_zhenhun: '震魂',
            hj_jl_zhenhun_info: '出牌阶段限一次,你可以令所有其他角色的非锁定技能于本回合内失效',
            hj_jl_kuangfeng: '狂风',
            hj_jl_kuangfeng_info: '出牌阶段开始时,你可以选择一名其他角色,你弃置该角色的一张牌,令该角色获得一枚[风]标记,直到你的下回合开始前. <br/>锁定技,有[风]标记的角色受到火焰伤害时,该伤害值＋1;受到雷电伤害后随机弃置两张牌. <br/>锁定技,有[风]标记的角色受到伤害后,你摸一张牌',
            hj_jl_kuangfeng2: '狂风',
            hj_jl_kuangfeng2_info: '',
            hj_jl_kuangfeng3: '狂风',
            hj_jl_kuangfeng3_info: '',
            hj_jl_kuangfeng4: '狂风',
            hj_jl_kuangfeng4_info: '',
            hj_jl_kuangfeng5: '狂风',
            hj_jl_kuangfeng5_info: '',
            hj_jl_kf_huo: '狂风-火',
            hj_jl_kf_huo_info: '',
            hj_jl_kf_lei: '狂风-雷',
            hj_jl_kf_lei_info: '',
            hj_jl_qixing: '七星',
            hj_jl_qixing_info: '分发起始手牌前,你将获得起始手牌改为观看牌堆顶的十一张牌并获得其中的四张牌,将其余的牌扣置于武将牌旁,称为「星」,摸牌阶段结束时,你可以用至少一张手牌替换等量的「星」',
            hj_jl_qixing2: '七星',
            hj_jl_qixing2_info: '',
            hj_jl_dawu: '大雾',
            hj_jl_dawu_info: '回合结束阶段开始时,你可以将至少一张「星」置入你选择的等量角色的武将牌旁,若如此做,每当该角色于你的下回合开始之前受到非雷电伤害时,你防止此伤害.若因此而成功防止伤害,你下回合开始时回收该「星」,否则将其置入弃牌堆',
            hj_jl_dawu2: '大雾',
            hj_jl_dawu2_info: '',
            hj_jl_weiwo: '帷幄',
            hj_jl_weiwo_info: '锁定技,当你有手牌时,防止你受到的属性伤害;当你没有手牌时,防止你受到的非属性伤害',
            hj_jl_yaozhi: '妖智',
            hj_jl_yaozhi_info: '准备阶段开始时/结束阶段开始时/当你受到伤害后/出牌阶段限一次,你可以摸一张牌,系统随机挑选三个可以在对应时机发动的技能,你选择其中一个技能发动',
            hj_jl_xingyun: '星陨',
            hj_jl_xingyun_info: '锁定技,回合结束后,你减一点体力值上限,选择获得一个你因〖妖智〗而发动过的技能',
            hj_jl_juejing: '绝境',
            hj_jl_juejing_info: '锁定技,一名角色的回合开始时,若你的体力值为1,你摸一张牌;大于1,你失去一点体力,摸两张牌',
            hj_jl_longying: '龙影',
            hj_jl_longying_info: '锁定技,你的手牌上限+2;当你进入或脱离濒死状态时,你摸一张牌',
            hj_jl_relonghun: '龙魂',
            hj_jl_relonghun_info: '你可以将同花色的一至两张牌按下列规则使用或打出:♥️️当【桃】;♦️️当【火杀】;♣️️当【闪】;♠️️当【无懈可击】;若你以此法使用了两张红色牌,则此牌回复值或伤害值+1;若你以此法使用了两张黑色牌,则你弃置当前回合角色的一张牌',
            hj_jl_longhun1: '龙魂♥️️︎',
            hj_jl_longhun1_info: '',
            hj_jl_longhun2: '龙魂♦️️︎',
            hj_jl_longhun2_info: '',
            hj_jl_longhun3: '龙魂♠️️︎',
            hj_jl_longhun3_info: '',
            hj_jl_longhun4: '龙魂♣️️︎',
            hj_jl_longhun4_info: '',
            hj_jl_longhun: '龙魂',
            hj_jl_longhun_info: '你可以将同花色的一至两张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当普【无懈可击】.若你以此法使用了两张红色牌,则此牌回复值或伤害值+1.若你以此法使用了两张黑色牌,则你弃置当前回合角色一张牌',
            hj_jl_hemou: '合谋',
            hj_jl_hemou_info: '其他角色的出牌阶段开始时,你可以将一张手牌正面朝上交给该角色,该角色本阶段限一次,可将一张与之相同花色的手牌按下列规则使用:♠️️当【决斗】;♣️️当【借刀杀人】;♥️️当【顺手牵羊】;♦️️当【火攻】',
            hj_jl_zhiming: '知命',
            hj_jl_zhiming_info: '其他角色的回合开始阶段开始时,若其有手牌,你可以弃置一张手牌,弃置其一张手牌,若两张牌颜色相同,你令其跳过此回合的摸牌阶段或出牌阶段',
            hj_jl_suyin: '夙隐',
            hj_jl_suyin_info: '你的回合外,当你失去最后的手牌时,可令一名其他角色将其武将牌翻面',
            hj_jl_qicai: '奇才',
            hj_jl_qicai_info: '每当你失去一次手牌时,你可以进行一次判定,若判定结果颜色为红色,你摸一张牌',
            hj_jl_yingcai: '英才',
            hj_jl_yingcai_info: '摸牌阶段,你可以放弃摸牌,改为展示牌堆顶的一张牌,你重复此流程直到你展示出第三种花色的牌时,将这张牌置入弃牌堆,获得其余的牌',
            hj_jl_qinyin: '琴音',
            hj_jl_qinyin_info: '弃牌阶段开始时,若你有手牌,可以选择一项执行:1.摸两张牌,令所有角色各失去一点体力;2.弃置一张牌,令所有角色各回复1点体力',
            hj_jl_yeyan: '业炎',
            hj_jl_yeyan_info: '限定技,出牌阶段内,你可以弃置任意张花色不同的手牌,对一至两名其他角色各造成等量的火焰伤害.若你以此法弃置的手牌数不少于三,你须先失去三点体力,结算完毕后,若有目标角色未死亡,则你视为对其额外结算一次(无需弃牌,但仍需失去体力)',
            hj_jl_guoshi: '国士',
            hj_jl_guoshi_info: '一名角色的回合开始阶段开始时,你可以观看牌堆顶的两张牌,并将其以任意顺序置于牌堆顶或牌堆底.<br/>一名角色的回合结束阶段开始时,你可以令其获得本回合因弃置或判定进入弃牌堆的一张牌',
            hj_jl_shelie: '涉猎',
            hj_jl_shelie_info: '锁定技,摸牌阶段,你摸四张牌,你须依次指定以此法获得牌的类型,从牌堆随机获得之',
            hj_jl_gongxin: '攻心',
            hj_jl_gongxin_info: '出牌阶段限一次,你可以观看一名角色的手牌,并展示其中所有的♥️️牌,若展示的牌数为1,你弃置此牌并对其造成1点伤害;若大于1,你选择获得其中的一张牌',
            hj_jl_dailao: '待劳',
            hj_jl_dailao_info: '出牌阶段限一次,你可以选择一名其他角色,令其与你各摸一张牌或各弃置一张牌,你与其依次将武将牌翻面',
            hj_jl_youdi: '诱敌',
            hj_jl_youdi_info: '若你的武将牌背面朝上,你可以将武将牌重置,视为你使用了一张【闪】.<br/>每当你使用【闪】响应了一名角色使用的【杀】后,你可以弃置至多X张牌,该角色弃置等量的牌(X为该角色的牌数)',
            hj_jl_ruya: '儒雅',
            hj_jl_ruya_info: '锁定技,当你失去最后的手牌时,你将武将翻面并将手牌补至你体力值上限的张数',
            hj_jl_jieyan: '劫焰',
            hj_jl_jieyan_info: '当一张红色的【杀】或红色非延时类锦囊牌仅指定一名角色为目标后,你可以弃置一张手牌令此牌无效,对目标角色造成1点火焰伤害',
            hj_jl_lianying: '连营',
            hj_jl_lianying_info: '当一名角色受到火焰伤害后,若你的手牌数不大于体力上限,你可以弃置一张红色牌,对该角色或与其距离最近的一名角色造成等量的火焰伤害',
            hj_jl_fenying: '焚营',
            hj_jl_fenying_info: '每当一名角色失去最后一张手牌后,你摸X张牌(X为你或其体力值较少一方的当前体力值).若该角色不为你且其处于横置状态,你对其造成1点火焰伤害',
            hj_jl_youxia: '游侠',
            hj_jl_youxia_info: '出牌阶段,若你的武将牌正面朝上,你可以将你的武将牌翻面,从至多三名其他角色处各获得一张牌.<br/>锁定技,若你的武将牌背面朝上,你不能成为【杀】和【决斗】的目标',
            hj_jl_lvezhen: '掠阵',
            hj_jl_lvezhen_info: '当你使用【杀】指定目标后,你可以展示并弃置牌堆顶的三张牌,你可以弃置目标角色的X张牌(X为展示牌中非基本牌的数量)',
            hj_jl_youlong: '游龙',
            hj_jl_youlong_info: '出牌阶段内,若弃牌堆的牌数多于牌堆,你可以将黑色手牌当【顺手牵羊】使用',
            hj_jl_jieyin: '结姻',
            hj_jl_jieyin_info: '出牌阶段限一次,你可以选择一名男性角色并弃置一张手牌或将装备区内的一张装备牌置于其装备区,你与其体力较高的角色摸一张牌,体力值较低的角色回复1点体力',
            hj_jl_yinmeng: '姻盟',
            hj_jl_yinmeng_info: '出牌阶段限X次,若你有手牌,你可以展示一名其他男性角色的一张手牌,展示你的一张手牌,若两张牌类型相同,你与其各摸一张牌;若不同,你弃置其展示的牌(X为你所损失的体力值且至少为1)',
            hj_jl_yinmeng2: '姻盟',
            hj_jl_yinmeng2_info: '',
            hj_jl_xianzhu: '贤助',
            hj_jl_xianzhu_info: '当一名角色回复体力后,或失去装备区里的牌后,你可以令其摸两张牌',
            hj_jl_xianzhu2: '贤助',
            hj_jl_xianzhu2_info: '',
            hj_jl_liangyuan: '良缘',
            hj_jl_liangyuan_info: '限定技,出牌阶段,你可以选择一名其他男性角色,则于本局游戏中,你的自然回合结束时,该角色进行一个额外的回合',
            hj_jl_liangyuan2: '良缘',
            hj_jl_liangyuan2_info: '',
            hj_jl_kuangbao: '狂暴',
            hj_jl_kuangbao_info: '锁定技,游戏开始时你获得4枚[暴怒]标记,游戏中你每造成或受到1点伤害,你获得1枚[暴怒]标记',
            hj_jl_wuqian: '无前',
            hj_jl_wuqian_info: '出牌阶段内,你可以弃2枚[暴怒]标记,获得技能〖无双〗,且使用【杀】指定目标后,令其防具失效,并摸X张牌,直到回合结束(X为你已损失的体力值)',
            hj_jl_shenfen: '神愤',
            hj_jl_shenfen_info: '出牌阶段限一次,你可弃置4枚[暴怒]标记,你对每名其他角色各造成1点伤害,其他角色依次弃置各自装备区内所有的牌,再依弃置所有的手牌,最后将你的武将牌翻面并回复1点体力',
            hj_jl_wushuang: '无双',
            hj_jl_wushuang_info: '锁定技,你使用【杀】或【决斗】的次数上限与可选目标数的基数为3,且目标响应时需额外打出一张【闪】或【杀】',
            hj_jl_liqu: '利趋',
            hj_jl_liqu_info: '当你使用【杀】造成伤害后,你可以选择获得该角色的至多两张牌.若你获得了该角色的两张牌,其摸一张牌;若两张牌均为基本牌,你将其置于弃牌堆并获得一张【决斗】;若两张牌均为装备牌,你失去一点体力',
            hj_jl_zhanshen: '战神',
            hj_jl_zhanshen_info: '锁定技,你的武将牌不能被翻面.<br/>准备阶段开始时,你摸一张牌',
            hj_jl_luosha: '罗刹',
            hj_jl_luosha_info: '锁定技,游戏开始时,你随机获得三个与【杀】有关的技能.<br/>当其他角色进入濒死状态时,你摸两张牌,随机获得一个与【杀】有关的技能',
            hj_jl_shajue: '杀绝',
            hj_jl_shajue_info: '出牌阶段限一次,你可以失去一点体力并选择一名其他角色,你将随机一张手牌当随机属性且无视防具的【杀】对其使用,重复此流程直到你失去这些手牌',
            hj_jl_guiqu: '鬼躯',
            hj_jl_guiqu_info: '锁定技,你的手牌上限为你当前武将牌上所拥有技能的数量.<br/>当你处于濒死状态时,你可以选择失去一个技能,视为使用一张【桃】',
            hj_jl_yanmie: '湮灭',
            hj_jl_yanmie_info: '出牌阶段,你可以弃置一张花色为♠️️的牌,令一名其他角色先弃置所有手牌再摸等量的牌并展示之,你可以弃置其中所有的非基本牌,并对其造成等量的伤害',
            hj_jl_shunshi: '顺世',
            hj_jl_shunshi_info: '当你成为其他角色使用【杀】或【桃】的目标后,你可以令你与除该角色外的至多三名其他角色各摸一张牌,这些角色也成为此牌的目标',
            hj_jl_weimu: '帷幕',
            hj_jl_weimu_info: '锁定技,当你成为其他角色使用的锦囊牌的目标时,取消之',
            hj_jl_luanwu: '乱武',
            hj_jl_luanwu_info: '限定技,出牌阶段,你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】,否则失去一点体力',
            hj_jl_zhitian: '知天',
            hj_jl_zhitian_info: '锁定技,回合开始时,你须将所有手牌交给一名角色,并令其随机获得未加入本局游戏的武将的一个技能(主公技、觉醒技除外),你失去一点体力',
            hj_jl_yinshi: '隐世',
            hj_jl_yinshi_info: '锁定技,当你受到伤害时,你防止此伤害,摸一张牌',
            hj_jl_xingyi: '行医',
            hj_jl_xingyi_info: '出牌阶段限一次,你可以获得一名有手牌的其他角色一张手牌,令其回复1点体力',
            hj_jl_guagu: '刮骨',
            hj_jl_guagu_info: '每回合每名角色限一次,当其进入濒死状态时,你可以弃置其所有的手牌(至少一张),该角色回复1点体力.若你以此法弃置其两张或更多的手牌时,该角色摸一张牌',
            hj_jl_jishi: '济世',
            hj_jl_jishi_info: '出牌阶段限一次,你可以弃置一张花色为♥️️的牌,令一名角色先弃置所有手牌再摸等量的牌并展示;其中每有一张非基本牌,你令其回复1点体力,以此法回复的过量体力效果改为令其摸等量的牌',
            hj_jl_xuanxin: '悬心',
            hj_jl_xuanxin_info: '当一名角色受到伤害时,你可以从弃牌堆获得一张花色为♥️️的牌,可以交给其一张牌',
            hj_jl_manwu: '曼舞',
            hj_jl_manwu_info: '出牌阶段限一次,你可以展示一名男性角色的一张手牌,若此牌花色为♦️️,将之置于该角色的判定区内,视为【乐不思蜀】;若此牌花色不为♦️️,你获得之',
            hj_jl_baiyue: '拜月',
            hj_jl_baiyue_info: '回合结束阶段开始时,你可以获得本回合其他角色进入弃牌堆的一张牌',
            hj_jl_tianzi: '天姿',
            hj_jl_tianzi_info: '摸牌阶段,你可以放弃摸牌,令所有其他角色依次选择一项:1.交给你一张牌;2.令你摸一张牌',
            hj_jl_meixin: '魅心',
            hj_jl_meixin_info: '出牌阶段限一次,你可以弃置一张牌并选择一名其他男性角色,若如此做,本阶段当你使用一张基本牌后,你弃置其一张牌;当你使用一张锦囊牌后,你获得其一张牌;当你使用一张装备牌后,你对其造成1点伤害',
            hj_jl_meixin2: '魅心',
            hj_jl_meixin2_info: '',
            hj_jl_meixin3: '魅心',
            hj_jl_meixin3_info: '',
            hj_jl_baozheng: '暴征',
            hj_jl_baozheng_info: '锁定技,你的回合结束阶段开始时,你令所有其他角色依次选择一项执行:1.交给你一张牌;2.弃置两张牌,对你造成1点伤害',
            hj_jl_lingnu: '凌怒',
            hj_jl_lingnu_info: '锁定技,你的回合结束时,若你于此回合内受到过2点或更多的伤害,你减一点体力值上限,从所有其他角色处依次获得一张牌',
            hj_jl_baolian: '暴敛',
            hj_jl_baolian_info: '锁定技,游戏开始时,你掠夺所有其他所有角色一点体力值上限并回复等量的体力.<br/>锁定技,你的回合结束后,你回复1点体力并失去一点以此法获得的体力值上限',
            hj_jl_luoyi: '裸衣',
            hj_jl_luoyi_info: '摸牌阶段开始时,你展示牌堆顶的三张牌.你可以放弃摸牌.若如此做,你获得其中的基本牌、武器牌和【决斗】,且直到你的下回合开始,你使用的【杀】或【决斗】造成伤害时,此伤害+1.否则,你将这些牌置入弃牌堆',
            hj_jl_aozhan: '鏖战',
            hj_jl_aozhan_info: '当你因【杀】或【决斗】造成或受到1点伤害后,你可将牌堆顶的一张牌置于你的武将牌上,称为「战」.<br/>出牌阶段限一次,你可以选择一项执行:1.将所有的「战」收入手牌;2.将所有的「战」弃置,摸等量的牌',
            hj_jl_aozhan2: '鏖战',
            hj_jl_aozhan2_info: '',
            hj_jl_huxiao: '虎啸',
            hj_jl_huxiao_info: '出牌阶段内,当你使用【杀】造成伤害时,若你的武将牌正面朝上,你可以令此伤害值+1并摸一张牌.若如此做,则此【杀】结算完毕后,将你的武将牌翻面并结束当前回合',
            hj_jl_huxiao2: '虎啸',
            hj_jl_huxiao2_info: '',
            hj_jl_huchi: '虎痴',
            hj_jl_huchi_info: '锁定技,每名角色回合限一次,当你造成伤害后,你回复1点体力并摸一张牌',
            hj_jl_qianqi: '千骑',
            hj_jl_qianqi2: '千骑',
            hj_jl_qianqi_info: '游戏开始时,你装备随机+1与-1坐骑牌.当一名角色从装备区里失去坐骑牌后,你获得2枚「千骑」标记.出牌阶段,你可以弃置一枚「千骑」标记,视为使用一张无距离与次数限制的【杀】',
            hj_jl_benxi: '奔袭',
            hj_jl_benxi_info: '锁定技,你计算与其他角色的距离时始终-1.你使用【杀】指定目标后,目标角色须弃置一张装备牌,否则此【杀】不可被【闪】响应',
            hj_jl_juechen: '绝尘',
            hj_jl_juechen_info: '当你使用【杀】对其他角色造成伤害时,你可以防止此伤害,改为令其失去X点体力(X为伤害值),或减一点体力上限',
            hj_jl_liuyun: '流云',
            hj_jl_liuyun_info: '出牌阶段限一次,你可以横置你的武将牌并弃置一张黑色牌,令一名角色选择一项执行:1.回复1点体力;2.摸两张牌',
            hj_jl_lingbo: '凌波',
            hj_jl_lingbo_info: '一名角色的回合开始阶段,你可以重置你的武将牌,将场上的一张牌置于牌堆顶',
            hj_jl_qingcheng: '倾城',
            hj_jl_qingcheng_info: '你可以横置你的武将牌,视为你使用或打出一张【杀】;你可以重置你的武将牌,视为你使用或打出一张【闪】',
            hj_jl_qingcheng2: '倾城',
            hj_jl_qingcheng2_info: '',
            hj_jl_luoshen: '洛神',
            hj_jl_luoshen_info: '准备阶段,若你没有[洛]标记,你可选择至多两名其他角色,你摸一张牌并令他们各摸两张牌,如若此做,你获得一个[洛]标记. <br/>锁定技,若你有[洛]标记,你跳过摸牌阶段,失去[洛]标记',
            hj_jl_luoshen2: '洛神',
            hj_jl_luoshen2_info: '',
            hj_jl_fangxin: '芳馨',
            hj_jl_fangxin_info: '当你需要使用一张【桃】时,你可以将一张♣️️牌当【兵粮寸断】或将一张♦️️牌当【乐不思蜀】对自己使用,若如此做,视为你使用一张【桃】',
            hj_jl_xiyu: '细语',
            hj_jl_xiyu_info: '你的回合开始时,你可以弃置一名角色的一张牌,该角色进行一个额外的出牌阶段',
            hj_jl_wanrou: '婉柔',
            hj_jl_wanrou_info: '当你的♦️️牌或你判定区内的牌进入弃牌堆时,你可以令一名角色摸一张牌',
            hj_jl_wanrou2: '婉柔',
            hj_jl_wanrou2_info: '',
            hj_jl_guose: '国色',
            hj_jl_guose_info: '出牌阶段,你可以选择一项执行:1.将一张♦️️牌当做【乐不思蜀】使用;2.弃置一张♦️️牌并弃置场上的一张【乐不思蜀】.选择完成后,你摸一张牌.<br/>锁定技,当其他角色跳过出牌阶段后,你摸一张牌',
            hj_jl_guose2: '国色',
            hj_jl_guose2_info: '',
            hj_jl_jiaohua: '娇花',
            hj_jl_jiaohua_info: '出牌阶段限一次,你可以将一张♥️️️手牌当做【无中生有】使用. <br/>锁定技,你使用的【无中生有】无法被【无懈可击】响应',
            hj_jl_hongyan: '红颜',
            hj_jl_hongyan_info: '锁定技,你的♠️️️花色的手牌视为♥️️️花色;若你的装备区内有♥️️️花色的牌,则你的手牌上限视为体力值上限',
            hj_jl_tianxiang: '天香',
            hj_jl_tianxiang_info: '当你受到伤害时,你摸一张牌,你可以弃置一张♥️️️手牌,防止此次伤害并选择一名其他角色,你选择一项执行:1.令其受到X点伤害,摸Y张牌(Y为其已损失体力值);2.令其失去X点体力,获得你弃置的牌(X为本次伤害值)',
            hj_jl_piaoling: '飘零',
            hj_jl_piaoling_info: '结束阶段,你可以进行一次判定,若判定结果花色为♥️️️,则你选择一项执行:1.将此牌交给一名角色,若你交给了自己,则你弃置一张牌;2.将此牌置于牌堆顶',
            hj_jl_beige: '悲歌',
            hj_jl_beige_info: '当一名角色受到其他角色造成的伤害时,若伤害来源不为你,你可以弃置一张牌令其进行一次判定,并根据最终判定花色对其执行相应效果(X为此次伤害数值):♥️️️该角色回复X点体力;♦️️️︎该角色摸1+X张牌;♣️️️伤害来源弃置1+X张牌;♠️️️伤害来源将武将牌翻面并失去X点体力',
            hj_jl_moshi: '默识',
            hj_jl_moshi_info: '弃牌阶段开始时,你可以将手牌依次当做你于本回合出牌阶段内,所使用的非装备牌使用',
            hj_jl_chenqing: '陈情',
            hj_jl_chenqing_info: '每名角色回合限一次,当一名角色进入濒死状态时,你可以令一名存活的角色摸五张牌并弃置四张牌.若弃置牌的花色均不同,则视为其令该角色将体力值回复至1点;否则,你获得所有弃置牌,若此时你未处于濒死状态,你失去一点体力',
            hj_jl_youmei: '幽魅',
            hj_jl_youmei_info: '一轮游戏开始时,你可以从随机X名【群】势力角色中选择并获得至多X个技能(不包含主公技、觉醒技、隐匿技、使命技)直到你再次因【幽魅】获得技能(X为你当前体力值)',
            hj_jl_jiwu: '戟舞',
            hj_jl_jiwu_info: '出牌阶段开始时,你可以展示一张【杀】,令其获得以下效果之一(离开手牌区后失效):1.此【杀】不计入使用次数限制,且此【杀】被【闪】响应时你从牌堆中获得一张【杀】;2.此【杀】无距离限制且可以额外指定1个目标,若此【杀】未造成伤害,你令你手牌中所有【杀】获得随机一项【戟舞】效果;3.此【杀】造成的伤害值+1,且你使用此【杀】指定目标后,可以弃置一张【杀】令此【杀】结算时视为拥有其余两项【戟舞】效果',
            hj_jl_zhanmo: '战陌',
            hj_jl_zhanmo_info: '锁定技,当你使用基本牌或普通锦囊牌指定合法目标后,若你的当前体力值不大于2,你可以对一名其他角色造成1点雷电伤害;若你的装备区被没有牌,你令此牌额外结算一次',
            hj_jl_youlin: '犹凛',
            hj_jl_youlin_info: '锁定技,出牌阶段开始时,你弃置所有装备牌并摸等量的牌,废除一个装备栏并选择一项执行:1.本阶段你使用【杀】的次数和额定目标数+1;2.你横置任意名角色;3.你计算与其他角色的距离-1.<br/>结束阶段开始时,你摸等同于你已废除装备栏数量的牌,若你的装备栏均已废除,你回复1点体力并回复两个装备栏',
            hj_jl_shanlie: '善列',
            hj_jl_shanlie_info: '锁定技,弃牌阶段开始时,你摸两张牌,你的手牌上限为6',
            hj_jl_yingzhen: '营阵',
            hj_jl_yingzhen_info: '出牌阶段限两次,你可以与一名其他角色进行一次拼点,若你赢,你获得其一张牌;否则,你视为对其使用一张【过河拆桥】',
            hj_jl_xiying: '袭营',
            hj_jl_xiying_info: '出牌阶段开始时,你可以弃置一张非基本手牌,令所有其他角色依次选择一项:弃置一张牌,或本回合内不能使用或打出牌.<br/>结束阶段,若你于出牌阶段内造成过伤害,则你从牌堆中随机获得一张【杀】或普通类锦囊牌',
            hj_jl_xiying2: '袭营2',
            hj_jl_xiying2_info: '',
            hj_jl_hubu: '虎步',
            hj_jl_hubu_info: '当你使用【杀】造成伤害后或受到【杀】造成的伤害后,可以选择一名角色令其进行一次判定;若结果花色不为♠️️,则视为你对其使用一张【决斗】(此【决斗】不能被【无懈可击】响应)',
            hj_jl_tanlang: '贪狼',
            hj_jl_tanlang_info: '锁定技,当你使用【杀】或【决斗】造成伤害后你弃置目标角色一张牌,若弃置的牌为装备牌,视为你对其使用一张【杀】或【决斗】',
            hj_jl_tanlang1: '贪狼',
            hj_jl_tanlang1_info: '',
            hj_jl_tanlang2: '贪狼',
            hj_jl_tanlang2_info: '',
            hj_jl_mashu: '马术',
            hj_jl_mashu_info: '锁定技,你与其他角色计算距离时始终-1',
            hj_jl_zhidi: '制敌',
            hj_jl_zhidi_info: '锁定技,准备阶段,你随机获得以下一项你还未获得的效果:1.你使用【杀】造成伤害后,摸一张牌;2.你使用【杀】无视目标防具且不能被【闪】响应;3.你使用【杀】无距离限制且使用次数上限+X;4.你使用【杀】可以额外指定X个目标(X为你以此法获得的效果数)',
            hj_jl_longdan: '龙胆',
            hj_jl_longdan_info: '你可将一张红色基本牌当【火杀】或【桃】使用或打出;你可将一张黑色基本牌当【闪】或【酒】使用或打出',
            hj_jl_yajiao: '涯角',
            hj_jl_yajiao_info: '当你于回合外使用或打出手牌后,你展示牌堆顶的一张牌并可将之交给一名角色,若此牌与你打出的手牌类别相同,你可令一名角色回复1点体力;否则你可弃置一名角色区域里的一张牌',
            hj_jl_chongzhen: '冲阵',
            hj_jl_chongzhen_info: '当一张【闪】进入弃牌堆时,你可以用一张不为【闪】的牌替换之.若此时不是你的回合,你可以视为对当前回合角色使用一张无视防具的【杀】',
            hj_jl_yuanhua: '元化',
            hj_jl_yuanhua_info: '锁定技,当你获得【桃】后,若你已受伤,你回复1点体力,否则你摸两张牌.将此【桃】移出游戏',
            hj_jl_guiyuan: '归元',
            hj_jl_guiyuan_info: '出牌阶段限一次,你可以失去一点体力,令所有其他角色依次交给你一张【桃】,若你没有以此法获得【桃】,你随机从牌堆或弃牌堆中获得一张【桃】',
            hj_jl_chongsheng: '重生',
            hj_jl_chongsheng_info: '限定技,一名角色进入濒死状态时,你可以令其回复X点体力(过量回复改为摸牌),其可以从随机三张同势力武将牌中选择一张替换之(X为你发动〖元化〗移除【桃】的数量且至少为1)',
            //
          },
        };
        for (var i in SSS.character) {
          SSS.character[i][4].push('ext:魂将/image/' + i + '.jpg');
        }
        lib.config.all.characters.add('魂将');
        lib.config.characters.add('魂将'); //包名翻译
        lib.translate['魂将_character_config'] = '魂将';
        return SSS;
      });
    },
    package: {
      intro: "篇章开启按钮<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
      author: '<br/>整体设计:随缘 <br/>代码技术:无 <br/>功能技术:折月醉倾城 <br/>BUG反馈:猫儿不吃鱼<br/>感谢诸位的鼎力支持与帮助,如果有兴趣愿意与我们一同更新此扩展包的小伙伴,可以联系我门,共同探讨.<br/>联系方式:<br/>1群:627735076<br/>2群:839470556<br/>扩展介绍:<br/>魂将目前共分为四大篇章,即已上线的【极略篇】、【兵谋篇】,和未上线的【混沌篇】、【限定篇】.<br/>分篇介绍:<br/>1 、【极略篇】:借鉴引用了扩展包〖极略自用〗以及〖阳光包〗的大部分技能.<br/>原创作者:xiaoas、阳光微凉<br/>2、【兵谋篇】:借鉴引用了扩展包〖上兵伐谋〗以及〖乱世天下〗的大部分技能.<br/>原创作者:烟雨墨染<br/>3、【混沌篇】:此篇章分为两部分,一部分是借鉴引用了扩展包〖混沌界〗的大部分技能.<br/>原创作者:淡雾云曦<br/>另一部分是由作者收集整理的其他武将组成.<br/>4、〖限定篇〗:此篇章为特殊篇章,分为两部分,一部分是特殊武将.<br/>另一部分是为【魂将】做出过贡献的作者武将.<br/>更新日志:<br/>6月13日,魂将2.2(重置版)更新.<br/>更新内容:<br/>1、魂典韦体力值调整为5.移除技能〖狂袭〗,新增技能〖暴勇〗和〖夺刃〗.<br/>2、魂许褚移除技能〖虎痴〗,新增技能〖裸衣〗.<br/>3、魂☆吕布调整技能〖鬼躯〗.<br/>4、魂张角重做.<br/>5、新增武将:魂☆赵云、魂☆陆逊、魂☆华佗、魂吕玲绮、魂吴毅、魂张郃高览、魂颜良文丑、魂大乔小乔.以及彩蛋武将:魂左幽',
      version: '1.0',
    },
  };
});
