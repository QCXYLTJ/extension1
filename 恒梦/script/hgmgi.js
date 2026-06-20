const { lib, game, ui, get, ai, _status } = window.hgmg;
game.import('character', function (lib, game, ui, get, ai, _statu) {
  const hgmgi = {
    name: 'hgmgi',
    connect: true,
    characterTitle: {
      demotver: '难度1i<br>运营1i<br>菜刀1i<br>保核7i',
      geve: '难度1i<br>运营5i<br>菜刀2i<br>保核1i',
      mg: '难度1i<br>运营3i<br>菜刀5i<br>保核3i',
      tmhg: '难度5i<br>运营4i<br>菜刀4i<br>保核4i',
      aabolo: '阿波罗',
      gryb: '难度1i<br>运营5i<br>菜刀1i<br>保核5i',
      ugyt: '圣约',
      gjjlmoye: '难度2i<br>运营5i<br>菜刀3i<br>保核1i',
      mgxuuc: '梦许劭',
      dmglxx: '难度3i<br>运营2i<br>菜刀5i<br>保核1i',
      qiqqve: '难度4i<br>运营5i<br>菜刀2i<br>保核2i',
      siuivimg: '难度6i<br>运营6i<br>菜刀1i<br>保核1i',
      iftmyi: '难度6i<br>运营6i<br>菜刀3i<br>保核1i',
      jxqiromg: '难度1i<br>运营4i<br>菜刀1i<br>保核4i',
      tmeevimg: '难度4i<br>运营3i<br>菜刀1i<br>保核1i',
      yuyjjx: '难度2i<br>运营1i<br>菜刀1i<br>保核1i',
      lhvuvinv: '难度7i<br>运营6i<br>菜刀5i<br>保核1i',
      degula: '难度2i<br>运营6i<br>菜刀5i<br>保核1i',
    },
    character: {
      mg: ['female', 'wei', '3/6', ['hvmg', 'mgvs'], ['des:贯穿命运的强光']],
      goqumc: ['female', 'qun', '3/6', [], []],
      wwldmc: ['female', 'qun', '3/6', [], []],
      siuivimg: ['female', 'shen', 3, ['uimg', 'ggdp', 'hgyt'], ['des:四时之梦']],
      siui_iy: ['female', 'wu', 3, ['uimg', 'ggdp', 'hgyt'], []],
      siui_xx: ['female', 'jin', 3, ['uimg', 'ggdp', 'hgyt'], []],
      siui_qq: ['female', 'shu', 3, ['uimg', 'ggdp', 'hgyt'], []],
      siui_ds: ['female', 'wei', 3, ['uimg', 'ggdp', 'hgyt'], []],
      tmeevimg: ['female', 'qun', 3, ['hwbdxrwu', 'xrwum'], ['des:丑小鸭,总是梦想着蜕变为天鹅公主.<为了周瑜大人,小乔,要努力变强.>怀抱着这样的信念,小乔以天才的魔道之术努力战斗.然而不够,还是不够……即使已经濒临极限,也要和周瑜大人并肩战斗.终于,魔种的血脉苏醒.一半是纯洁无暇的少女之心,张开雪白的羽翼.一半是魅惑欲望的魔女之心,张开漆黑的羽翼.真爱,有毒.我愿为你起舞,至死方休']],
      jxqiromg: ['female', 'shu', 3, ['mlmli'], ['des:双生之花']],
      yuyjjx: ['male', 'qun', 3, ['igif', 'yuyj'], ['des:天行有常,人事无常']],
      tmhg: ['male', 'qun', 4, ['iihg', 'viig', 'uihg', 'tmhgFu', 'tmpk'], ['des:天衡']],
      qiqqve: ['female', 'wei', 3, ['qiqq'], []],
      geve: ['male', 'wei', 4, ['ystj', 'erxl'], []],
      lhvuvinv: ['female', 'shu', 3, ['zojm'], []],
      ceuiwujl: ['female', 'shu', 4, ['ceui', 'ceui2'], []],
      degula: ['male', 'shu', 9, ['xtqi', 'zuvz'], []],
    },
    characterIntro: {
      qiqqve: '在创立之初,魔法本质上是一门记忆的艺术,有些人认为这才是其最强力的形式.它无需任何科技,也无需魔杖或者其他施法媒介,只需要你有一颗魔法师的心.所有的那些祭祀里面的象形符号也仅仅是帮助记忆的手段,初衷是为了让施法者能够回想起施放法术时那大量的细节以及步骤.<br>在那个年代,最伟大的法师就是记忆天赋最高的人,然而魔法祈唤实在是太过艰深,因此所有的法师不得不有所专攻.即使是最刻苦的法师,将一辈子奉献给魔法,最多也只能掌握三到四个法术.普通的法师能掌握两个就心满意足了,而对于那些乡下的法师来说,只掌握一个法术也再正常不过——即使这样,在极少的真正需要使用魔法的场合,他还得借助魔典才能战胜自己的健忘.<br>然而,在那些早期的施法者中,有一个例外,一个智力超群,记忆力惊人的天才,以祈求者的名字为人们所知.在年少时,祈求者就已经掌握了不下十种法术.是的,不是四五个,也不是七八个,而是十个,而且他还能毫不费力的施放这些法术.他学到过更多的法术,但是因为觉得没用,试过一次以后就彻底从脑中遗忘,这样才能为其他更为有用的法术留出空间.这些法术就是包括永生之术——能让施法者永生的法术,那些在世界之初吟唱了这个法术的人还活得好好的(除非他们被物质毁灭了).而大多数这样的准不朽者都低调的生活在我们中间,害怕他们的秘密泄露:然而祈求者不是一个喜欢隐藏自己的天赋的人.<br>他来自远古,比任何人都要博学,而他的心智还有余力让他去思考他无穷的自我价值...以及更多的法术——他在世界毁灭之时的漫长暮色中用来自娱自乐的法术',
      geve: '命运家族离开海都议会已久,许多海都人,或许都已忘了它曾经的样子.曾经的命运家族,是海都执政者之一,以双眼洞察命运,为海都领航.指引前行的人,却在一场无端的厄运中,沉没深海,至此群星暗淡,再无光芒.海诺幼年时,命运神杖就预言,家族将注定迈向衰亡,所以有人说,海诺就是那厄运之人.如果家族衰亡是无限未来中最大的可能,那海诺从少年执掌家族开始,就孤身走在了与命运搏斗的路上.他不顾族人<罔顾祖训>的反对,毅然将命运启示殿搬到外城,承接普通民众诉求,为命运家族积累声望;面对其他家族倾轧蚕食时,决然将所有产业放弃,只保留了经营良好的餐厅和歌剧院,为命运家族保住了最后的基业.如此才让命运家族不像其他阿尔卡纳一样,彻底消亡.众人直到那时才发现,所谓的厄运之人,却在不知不觉间,成为了他们最值得信赖和依靠的存在.<我不相信既定的命运.>所谓命运,从不是无法挣脱的枷锁,亦不是宿命的终点,而是我们一生,自己走出的行迹.<行无穷命途,见万千命运>,海诺坚信,终局亦可逆转.他会让命运的光芒,再次绽放!',
    },
    characterSort: {
      hgmgi: {
        njdu1: ['geve', 'mg', 'mgxuuc', 'mgqbyilu', 'mgluxy', 'hwbdui', 'bdhell', 'yuqk', 'gryb', 'demotver', 'jxqiromg', 'jmsove', 'uijmddlirf'],
        njdu2: ['hzyi', 'tcqm', 'litdbd', 'gjjlmoye', 'ximffwxt', 'grnk', 'yuyjjx'],
        njdu3: ['dmglxx', 'xrvl'],
        njdu4: ['xnlsnv', 'qiqqve', 'xqlo', 'tmeevimg'],
        njdu5: ['tmhg'],
        njdu6: ['iftmyi', 'siuivimg', 'lqysyr', 'yian', 'bdfamonv'],
        njdu7: ['yuhldadi', 'lhvuevinv'],
      },
    },
    skill: {
      hxyzxkyuwuxk: {
        trigger: { player: 'useCard', target: 'useCardToTargeted' },
        filter(event, player, name) {
          if (name === 'useCardToTargeted') return event.player !== player;
          return get.isjiui(event.card, player);
        },
        firstDo: true,
        forced: true,
        charlotte: true,
        content() {
          if (event.triggername == 'useCardToTargeted') {
            trigger.excluded.addArray([player]);
            player.removeSkill('hxyzxkyuwuxk');
          } else {
            trigger.directHit.addArray(game.players);
          }
        },
        ai: {
          directHit_ai: true,
        },
        init(player) {
          game.broadcastAll(function (player) {
            player.style.opacity = '0.5';
          }, player);
        },
        onremove(player) {
          game.broadcastAll(function (player) {
            player.style.opacity = '1';
          }, player);
        },
      },
      bwjisv: {
        trigger: {
          player: 'damageBegin1',
        },
        firstDo: true,
        forced: true,
        filter(event, player) {
          return player.countMark('bwjisv');
        },
        content() {
          const num = Math.min(player.countMark('bwjisv'), trigger.num);
          player.loseMaxHp(num);
          player.removeMark('bwjisv', num, false);
          if (!player.countMark('bwjisv')) player.removeSkill('bwjisv');
          game.log(player, '失去了', get.translation(num), '个', '#g碎玉');
        },
        markimage: 'extension/恒梦/image/lsyk/svyu.png',
        intro: {
          name: '破碎的勾玉',
          content: '破碎勾玉数:#',
        },
        group: 'bwjisv_recover',
        subSkill: {
          recover: {
            trigger: { player: 'recover' },
            firstDo: true,
            forced: true,
            async content(event, trigger, player) {
              await player.removeMark('bwjisv', trigger.num, false);
              game.log(player, '回复了', get.translation(trigger.num), '个', '#g碎玉');
              if (!player.countMark('bwjisv')) player.removeSkill('bwjisv');
            },
          },
        },
      },
      bwjifw: {
        mod: {
          cardEnabled2(card, player) {
            return false;
          },
          cardRespondable(card, player) {
            return false;
          },
          cardSavable(card, player) {
            return false;
          },
        },
        init(player) {
          player.storage.bwjifwciuu = 1;
          game.broadcastAll(function (player) {
            player.style.transform += 'rotate(6400deg)';
            setTimeout(function () {
              player.style.transform += 'translateY(-100%) rotate(-6400deg)';
            }, 500);
          }, player);
        },
        onremove(player) {
          game.broadcastAll(function (player) {
            player.style.transform = 'translateY(0) rotate(0deg)';
          }, player);
        },
        charlotte: true,
        forced: true,
        trigger: {
          player: 'phaseAfter',
        },
        content() {
          player.removeSkill('bwjifw');
        },
        group: 'bwjifw_bmxk',
        subSkill: {
          bmxk: {
            trigger: { player: 'damageAfter' },
            forced: true,
            lastDo: true,
            _priority: -Infinity,
            content() {
              const target = player;
              target.removeSkill('bwjifw');
              target.addSkill('bwjisv');
              target.addMark('bwjisv', target.hp, false);
            },
          },
        },
      },
      bianhx: {},
      uldc: {
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'sha') return num + 1;
          },
        },
      },
      qivi: {
        mod: {
          ignoredHandcard(card, player) {
            return true;
          },
          cardDiscardable(card, player, name) {
            return false;
          },
          canBeDiscarded(card) {
            return false;
          },
          canBeGained(card) {
            return false;
          },
          cardChongzhuable(card, player) {
            return false;
          },
        },
      },
      uimg: {
        audio: 'ext:恒梦/audio/siuivimg:4',
        trigger: { global: 'phaseBefore', player: 'enterGame' },
        forced: true,
        filter(event, player) {
          return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
          player.loseToDiscardpile(player.getCards('h').randomGet(player.countCards('h') - 3), ui.cardPile)._triggered = null;
          const h = get.cards(9);
          const hs = player.getCards('h');
          if (hs.length) player.addGaintag(hs, player.storage.ggdp);
          player.loseToSpecial(h.svjiyiiu(3), 'uimg_xx').visible = true;
          player.loseToSpecial(h.svjiyiiu(3), 'uimg_qq').visible = true;
          player.loseToSpecial(h, 'uimg_ds').visible = true;
        },
        group: ['uimg_iy', 'uimg_xx', 'uimg_qq', 'uimg_ds', 'uimg_mark', 'uimg_sort'],
        subSkill: {
          sort: {
            audio: 'uimg',
            enable: 'phaseUse',
            filter(event, player) {
              return player.countCards('hs') > 1 && !player.hasSkillTag('noSortCard') && !player.hasHistory('useSkill', (evt) => evt.skill === 'ggdp');
            },
            filterCard(card, player) {
              let a = player.getCards('s', function (card) {
                return card.hasGaintag('uimg_iy');
              }),
                b = player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_xx');
                }),
                c = player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_qq');
                }),
                d = player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_ds');
                }),
                e = player.getCards('h'),
                f = [...a, ...b, ...c, ...d, ...e],
                g = [];
              for (let i of [a, b, c, d, e]) {
                if (i.length) g.push(i);
              }
              if (!f.bchj(card)) return false;
              if (ui.selected.cards.length) {
                for (let i of g) {
                  if (i.bchj(ui.selected.cards[0]) && i.bchj(card)) return false;
                }
              }
              return true;
            },
            selectCard: 2,
            complexCard: true,
            position: 'hs',
            lose: false,
            discard: false,
            delay: 0,
            prompt: '选择两张手牌,更换这两张手牌的时序',
            content() {
              let a = player.getCards('s', function (card) {
                return card.hasGaintag('uimg_iy');
              }),
                b = player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_xx');
                }),
                c = player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_qq');
                }),
                d = player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_ds');
                }),
                e = player.getCards('h'),
                f = [],
                g = [],
                h,
                k,
                l,
                m,
                o,
                p,
                x = [],
                y = [];
              if (e.includes(cards[1])) cards.reverse();
              for (let i of [a, b, c, d, e]) {
                if (i.length) g.push(i);
              }
              for (let i of g) {
                if (i.includes(cards[0])) {
                  f.push(i);
                  h = i.indexOf(cards[0]);
                }
              }
              for (let i of g) {
                if (i.includes(cards[1])) {
                  f.push(i);
                  k = i.indexOf(cards[1]);
                }
              }
              l = f[0].slice(0);
              m = f[1].slice(0);
              l[h] = cards[1];
              m[k] = cards[0];
              for (let i of l) {
                x.push(game.createCard2(i));
              }
              for (let i of m) {
                y.push(game.createCard2(i));
              }
              switch (f[0]) {
                case a:
                  o = 'uimg_iy';
                  break;
                case b:
                  o = 'uimg_xx';
                  break;
                case c:
                  o = 'uimg_qq';
                  break;
                case d:
                  o = 'uimg_ds';
                  break;
                case e:
                  o = player.storage.ggdp;
                  break;
              }
              switch (f[1]) {
                case a:
                  p = 'uimg_iy';
                  break;
                case b:
                  p = 'uimg_xx';
                  break;
                case c:
                  p = 'uimg_qq';
                  break;
                case d:
                  p = 'uimg_ds';
                  break;
              }
              let list = ['uimg_iy', 'uimg_xx', 'uimg_qq', 'uimg_ds'].yiiu(...[o, p]),
                listx = ['uimg_iy', 'uimg_xx', 'uimg_qq', 'uimg_ds'].yiiu(...[o, p, player.storage.ggdp]),
                listy = ['uimg_iy', 'uimg_xx', 'uimg_qq', 'uimg_ds'];
              if (f[0] === e) {
                game.broadcastAll(
                  function (s, a, b, c, d, e, player, f, o, k, list, p) {
                    player.lose(e, ui.special);
                    player.lose(f[1], ui.special);
                    player.directgain(s.reverse(), false);
                    switch (f[1]) {
                      case a:
                        player.loseToSpecial(k, o);
                        list.forEach((i) =>
                          player.loseToSpecial(
                            player.getCards('s', function (card) {
                              return card.hasGaintag(i);
                            }),
                            i
                          )
                        );
                        break;
                      case d:
                        list.forEach((i) =>
                          player.loseToSpecial(
                            player.getCards('s', function (card) {
                              return card.hasGaintag(i);
                            }),
                            i
                          )
                        );
                        player.loseToSpecial(k, o);
                        break;
                      default:
                        break;
                    }
                    if (f[1] === b && p === 'uimg_iy') {
                      player.loseToSpecial(k, o);
                      list.forEach((i) =>
                        player.loseToSpecial(
                          player.getCards('s', function (card) {
                            return card.hasGaintag(i);
                          }),
                          i
                        )
                      );
                    } else if (f[1] === b && p !== 'uimg_iy') {
                      player.loseToSpecial(
                        player.getCards('s', function (card) {
                          return card.hasGaintag(list[0]);
                        }),
                        list[0]
                      );
                      player.loseToSpecial(k, o);
                      player.loseToSpecial(
                        player.getCards('s', function (card) {
                          return card.hasGaintag(list[1]);
                        }),
                        list[1]
                      );
                    } else if (f[1] === c) {
                      switch (p) {
                        case 'uimg_ds':
                          list.forEach((i) =>
                            player.loseToSpecial(
                              player.getCards('s', function (card) {
                                return card.hasGaintag(i);
                              }),
                              i
                            )
                          );
                          player.loseToSpecial(k, o);
                          break;
                        default:
                          player.loseToSpecial(
                            player.getCards('s', function (card) {
                              return card.hasGaintag(list[0]);
                            }),
                            list[0]
                          );
                          player.loseToSpecial(k, o);
                          player.loseToSpecial(
                            player.getCards('s', function (card) {
                              return card.hasGaintag(list[1]);
                            }),
                            list[1]
                          );
                          break;
                      }
                    }
                    ui.updatehl();
                    player.update();
                  },
                  x,
                  a,
                  b,
                  c,
                  d,
                  e,
                  player,
                  f,
                  p,
                  y,
                  list,
                  o
                );
                const hs = player.getCards('h');
                if (hs.length) player.addGaintag(hs, player.storage.ggdp);
              } else {
                game.broadcastAll(
                  function (player, f, o, x, p, y, a, b, c, d, e, listx, listy) {
                    const oi = listy.indexOf(o),
                      pi = listy.indexOf(p),
                      li = listy.indexOf(listx[0]);
                    player.lose(f[0], ui.special);
                    player.lose(f[1], ui.special);
                    if (oi < pi && pi < li) {
                      player.loseToSpecial(x, o);
                      player.loseToSpecial(y, p);
                      player.loseToSpecial(
                        player.getCards('s', function (card) {
                          return card.hasGaintag(listx[0]);
                        }),
                        listx[0]
                      );
                    } else if (oi < li && li < pi) {
                      player.loseToSpecial(x, o);
                      player.loseToSpecial(
                        player.getCards('s', function (card) {
                          return card.hasGaintag(listx[0]);
                        }),
                        listx[0]
                      );
                      player.loseToSpecial(y, p);
                    } else if (pi < oi && oi < li) {
                      player.loseToSpecial(y, p);
                      player.loseToSpecial(x, o);
                      player.loseToSpecial(
                        player.getCards('s', function (card) {
                          return card.hasGaintag(listx[0]);
                        }),
                        listx[0]
                      );
                    } else if (pi < li && li < oi) {
                      player.loseToSpecial(y, p);
                      player.loseToSpecial(
                        player.getCards('s', function (card) {
                          return card.hasGaintag(listx[0]);
                        }),
                        listx[0]
                      );
                      player.loseToSpecial(x, o);
                    } else if (li < oi && oi < pi) {
                      player.loseToSpecial(
                        player.getCards('s', function (card) {
                          return card.hasGaintag(listx[0]);
                        }),
                        listx[0]
                      );
                      player.loseToSpecial(x, o);
                      player.loseToSpecial(y, p);
                    } else {
                      player.loseToSpecial(
                        player.getCards('s', function (card) {
                          return card.hasGaintag(listx[0]);
                        }),
                        listx[0]
                      );
                      player.loseToSpecial(y, p);
                      player.loseToSpecial(x, o);
                    }
                    ui.updatehl();
                    player.update();
                  },
                  player,
                  f,
                  o,
                  x,
                  p,
                  y,
                  a,
                  b,
                  c,
                  d,
                  e,
                  listx,
                  listy
                );
              }
              player.update();
              ui.updatehl();
            },
          },
          iy: {
            marktext: '春',
            intro: {
              mark(dialog, storage, player) {
                dialog.addAuto(
                  player.getCards('s', function (card) {
                    return card.hasGaintag('uimg_iy');
                  })
                );
              },
              markcount(storage, player) {
                return player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_iy');
                }).length;
              },
              onunmark(storage, player) {
                let cards = player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_iy');
                });
                if (cards.length) {
                  player.lose(cards, ui.discardPile);
                  player.$throw(cards, 1000);
                  game.log(cards, '进入了弃牌堆');
                }
              },
            },
          },
          xx: {
            marktext: '夏',
            intro: {
              mark(dialog, storage, player) {
                dialog.addAuto(
                  player.getCards('s', function (card) {
                    return card.hasGaintag('uimg_xx');
                  })
                );
              },
              markcount(storage, player) {
                return player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_xx');
                }).length;
              },
              onunmark(storage, player) {
                let cards = player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_xx');
                });
                if (cards.length) {
                  player.lose(cards, ui.discardPile);
                  player.$throw(cards, 1000);
                  game.log(cards, '进入了弃牌堆');
                }
              },
            },
          },
          qq: {
            marktext: '秋',
            intro: {
              mark(dialog, storage, player) {
                dialog.addAuto(
                  player.getCards('s', function (card) {
                    return card.hasGaintag('uimg_qq');
                  })
                );
              },
              markcount(storage, player) {
                return player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_qq');
                }).length;
              },
              onunmark(storage, player) {
                let cards = player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_qq');
                });
                if (cards.length) {
                  player.lose(cards, ui.discardPile);
                  player.$throw(cards, 1000);
                  game.log(cards, '进入了弃牌堆');
                }
              },
            },
          },
          ds: {
            marktext: '冬',
            intro: {
              mark(dialog, storage, player) {
                dialog.addAuto(
                  player.getCards('s', function (card) {
                    return card.hasGaintag('uimg_ds');
                  })
                );
              },
              markcount(storage, player) {
                if (player.storage.ggdp === 'uimg_ds') {
                  return player.getCards('h');
                }
                return player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_ds');
                }).length;
              },
              onunmark(storage, player) {
                let cards = player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_ds');
                });
                if (cards.length) {
                  player.lose(cards, ui.discardPile);
                  player.$throw(cards, 1000);
                  game.log(cards, '进入了弃牌堆');
                }
              },
            },
          },
          mark: {
            trigger: { player: ['gainBefore', 'ggdpAfter'] },
            forced: true,
            popup: false,
            silent: true,
            firstDo: true,
            filter(event, player) {
              if (event.name === 'gain') {
                const hs = player.getCards('h');
                const cards = event.getg(player);
                if (cards.length) return true;
                else return false;
              } else return true;
            },
            content() {
              if (trigger.name === 'gain') {
                trigger.gaintag.add(player.storage.ggdp);
              } else {
                const hs = player.getCards('h');
                if (hs.length) player.addGaintag(hs, player.storage.ggdp);
              }
            },
          },
        },
      },
      ggdp: {
        audio: 'ext:恒梦/audio/siuivimg:4',
        mod: {
          cardEnabled2(card, player) {
            if (player.getCards('h').includes(card)) return;
            else return false;
          },
          cardRespondable(card, player) {
            if (player.getCards('h').includes(card)) return;
            else return false;
          },
          cardSavable(card, player) {
            if (player.getCards('h').includes(card)) return;
            else return false;
          },
        },
        mark: true,
        intro: {
          content: '$',
        },
        init(player, storage) {
          if (!player.storage.ggdp) player.storage.ggdp = 'uimg_iy';
        },
        trigger: {
          player: ['useCardAfter', 'respondAfter'],
        },
        filter(event, player) {
          const suitx = event.card.suit;
          return lib.suit.includes(suitx);
        },
        ggdp(player) {
          ['uimg_iy', 'uimg_xx', 'uimg_qq', 'uimg_ds'].yiiu(player.storage.ggdp).forEach((i) =>
            player.loseToSpecial(
              player.getCards('s', function (card) {
                return card.hasGaintag(i);
              }),
              i
            )
          );
        },
        forced: true,
        content() {
          const s = trigger.card.suit,
            k = player.storage.ggdp;
          switch (s) {
            case 'heart':
              player.storage.ggdp = 'uimg_iy';
              break;
            case 'diamond':
              player.storage.ggdp = 'uimg_xx';
              break;
            case 'club':
              player.storage.ggdp = 'uimg_qq';
              break;
            case 'spade':
              player.storage.ggdp = 'uimg_ds';
              break;
          }
          let j,
            m,
            list = ['uimg_iy', 'uimg_xx', 'uimg_qq', 'uimg_ds'].yiiu(...[k, player.storage.ggdp]);
          if (k !== player.storage.ggdp) {
            switch (s) {
              case 'heart':
                m = 'siui_iy';
                break;
              case 'diamond':
                m = 'siui_xx';
                break;
              case 'club':
                m = 'siui_qq';
                break;
              case 'spade':
                m = 'siui_ds';
                break;
            }
            const info = lib.character[m];
            game.broadcastAll(
              function (player, i, m) {
                player.name = m;
                player.classList.add('fullskin');
                player.node.avatar.setBackgroundImage('extension/恒梦/image/characters/' + m + '.jpg');
                player.node.name.innerHTML = get.slimName(m);
                player.group = i[1];
              },
              player,
              info,
              m
            );
            if (k === 'uimg_iy') {
              player.loseToSpecial(player.getCards('h'), k)._triggered = null;
              list.forEach((i) =>
                player.loseToSpecial(
                  player.getCards('s', function (card) {
                    return card.hasGaintag(i);
                  }),
                  i
                )
              );
            } else if (k === 'uimg_xx' && player.storage.ggdp === 'uimg_iy') {
              player.loseToSpecial(player.getCards('h'), k)._triggered = null;
              list.forEach((i) =>
                player.loseToSpecial(
                  player.getCards('s', function (card) {
                    return card.hasGaintag(i);
                  }),
                  i
                )
              );
            } else if (k === 'uimg_xx' && player.storage.ggdp !== 'uimg_iy') {
              list.yiiu('uimg_iy');
              player.loseToSpecial(
                player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_iy');
                }),
                'uimg_iy'
              );
              player.loseToSpecial(player.getCards('h'), k)._triggered = null;
              player.loseToSpecial(
                player.getCards('s', function (card) {
                  return card.hasGaintag(list[0]);
                }),
                list[0]
              );
            } else if (k === 'uimg_qq' && player.storage.ggdp === 'uimg_ds') {
              list.forEach((i) =>
                player.loseToSpecial(
                  player.getCards('s', function (card) {
                    return card.hasGaintag(i);
                  }),
                  i
                )
              );
              player.loseToSpecial(player.getCards('h'), k)._triggered = null;
            } else if (k === 'uimg_qq' && player.storage.ggdp !== 'uimg_ds') {
              list.yiiu('uimg_ds');
              player.loseToSpecial(
                player.getCards('s', function (card) {
                  return card.hasGaintag(list[0]);
                }),
                list[0]
              );
              player.loseToSpecial(player.getCards('h'), k)._triggered = null;
              player.loseToSpecial(
                player.getCards('s', function (card) {
                  return card.hasGaintag('uimg_ds');
                }),
                'uimg_ds'
              );
            } else {
              list.forEach((i) =>
                player.loseToSpecial(
                  player.getCards('s', function (card) {
                    return card.hasGaintag(i);
                  }),
                  i
                )
              );
              player.loseToSpecial(player.getCards('h'), k)._triggered = null;
            }
            game.broadcastAll(
              function (s, j, player) {
                player.gain(s, 'nodelay');
                player.update();
                ui.updatehl();
              },
              player.getCards('s', function (card) {
                return card.hasGaintag(player.storage.ggdp);
              }),
              j,
              player
            );
            const hs = player.getCards('h');
            if (hs.length) player.addGaintag(hs, player.storage.ggdp);
            player.update();
            ui.updatehl();
          }
        },
      },
      hgyt: {
        audio: 'ext:恒梦/audio/siuivimg:2',
        trigger: { player: 'phaseDrawBefore' },
        forced: true,
        content() { },
        ai: {
          noh: true,
        },
        group: 'hgyt2',
      },
      hgyt2: {
        trigger: {
          player: 'loseAfter',
          global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
        },
        forced: true,
        filter(event, player) {
          if (event.name == 'gain' && event.player == player) return player.countCards('h') > 3;
          const evt = event.getl(player);
          if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= 3) return false;
          let evt2 = event;
          for (let i = 0; i < 4; i++) {
            evt2 = evt2.getParent('hgyt2');
            if (evt2.name != 'hgyt2') return true;
          }
          return false;
        },
        content() {
          const hs = player.getCards('h');
          if (hs.length && player.storage.ggdp) player.addGaintag(hs, player.storage.ggdp);
          const num = 3 - player.countCards('h');
          if (num > 0) player.draw(num);
          else player.chooseToDiscard('h', true, -num);
        },
      },
      hwbdxrwu: {
        subSkill: {
          nwxr: {
            mark: true,
            marktext: '内旋',
            intro: {
              content: '向内旋转芭蕾',
            },
            trigger: {
              global: 'loseAfter',
            },
            audio: 'hwbdxrwu',
            forced: true,
            mod: {
              aiOrder(player, card, num) {
                if (typeof card.number != 'number') return;
                if (player === _status.currentPhase) {
                  if (lib.skill.xrwum.filterNumber1(player, card.number)) {
                    if (card.number < 7) {
                      return num + 10 * (14 - card.number + player.storage.xrwum1);
                    } else if (card.number > 7) {
                      return num + 10 * (14 + card.number - player.storage.xrwum2);
                    } else {
                      return Math.min(num + 10 * (14 - card.number + player.storage.xrwum1), num + 10 * (14 + card.number - player.storage.xrwum2));
                    }
                  }
                } else {
                  if (lib.skill.xrwum.filterNumber2(player, card.number)) {
                    if (card.number < 7) {
                      return num + 10 * (14 + card.number - player.storage.xrwum1);
                    } else if (card.number > 7) {
                      return num + 10 * (14 - card.number + player.storage.xrwum2);
                    } else {
                      return Math.min(num + 10 * (14 + card.number - player.storage.xrwum1), num + 10 * (14 - card.number + player.storage.xrwum2));
                    }
                  }
                }
              },
            },
            filter(event, player) {
              if (event.player === _status.currentPhase) {
                if (event.cards.length) {
                  for (const i of event.cards) {
                    if (lib.skill.xrwum.filterNumber1(player, i.number)) return true;
                  }
                  return false;
                }
              } else {
                if (event.cards.length) {
                  for (const i of event.cards) {
                    if (lib.skill.xrwum.filterNumber2(player, i.number)) return true;
                  }
                  return false;
                }
              }
            },
            content() {
              const niu = player.storage.xrwum1,
                miu = player.storage.xrwum2;
              if (trigger.player === _status.currentPhase) {
                if (trigger.cards.length) {
                  for (const i of trigger.cards) {
                    const nx = i.number;
                    if (lib.skill.xrwum.filterNumber1(player, nx)) {
                      if (nx <= 7) {
                        player.storage.xrwum1 = nx;
                      }
                      if (nx >= 7) {
                        player.storage.xrwum2 = nx;
                      }
                    }
                  }
                }
              } else {
                if (trigger.cards.length) {
                  for (const i of trigger.cards) {
                    const nx = i.number;
                    if (lib.skill.xrwum.filterNumber2(player, nx)) {
                      if (nx <= 7) {
                        player.storage.xrwum1 = nx;
                      }
                      if (nx >= 7) {
                        player.storage.xrwum2 = nx;
                      }
                    }
                  }
                }
              }
              if (player === trigger.player && (player.storage.xrwum1 !== niu || player.storage.xrwum2 !== miu)) {
                player.draw(player.countCards('h') < player.maxHp ? 2 : 1, 'nodelay');
              }
            },
            sourceSkill: 'hwbdxrwu',
          },
          wdxr: {
            forced: true,
            mark: true,
            marktext: '外旋',
            intro: {
              content: '向外旋转芭蕾',
            },
            trigger: {
              global: 'loseAfter',
            },
            audio: 'hwbdxrwu',
            forced: true,
            mod: {
              aiOrder(player, card, num) {
                if (typeof card.number != 'number') return;
                if (player === _status.currentPhase) {
                  if (lib.skill.xrwum.filterNumber2(player, card.number)) {
                    if (card.number < 7) {
                      return num + 10 * (14 + card.number - player.storage.xrwum1);
                    } else if (card.number > 7) {
                      return num + 10 * (14 - card.number + player.storage.xrwum2);
                    } else {
                      return Math.min(num + 10 * (14 + card.number - player.storage.xrwum1), num + 10 * (14 - card.number + player.storage.xrwum2));
                    }
                  }
                } else {
                  if (lib.skill.xrwum.filterNumber1(player, card.number)) {
                    if (card.number < 7) {
                      return num + 10 * (14 - card.number + player.storage.xrwum1);
                    } else if (card.number > 7) {
                      return num + 10 * (14 + card.number - player.storage.xrwum2);
                    } else {
                      return Math.min(num + 10 * (14 - card.number + player.storage.xrwum1), num + 10 * (14 + card.number - player.storage.xrwum2));
                    }
                  }
                }
              },
            },
            filter(event, player) {
              if (event.player === _status.currentPhase) {
                if (event.cards.length) {
                  for (const i of event.cards) {
                    if (lib.skill.xrwum.filterNumber2(player, i.number)) return true;
                  }
                  return false;
                }
              } else {
                if (event.cards.length) {
                  for (const i of event.cards) {
                    if (lib.skill.xrwum.filterNumber1(player, i.number)) return true;
                  }
                  return false;
                }
              }
            },
            content() {
              const niu = player.storage.xrwum1,
                miu = player.storage.xrwum2;
              if (trigger.player === _status.currentPhase) {
                if (trigger.cards.length) {
                  for (const i of trigger.cards) {
                    const nx = i.number;
                    if (lib.skill.xrwum.filterNumber2(player, nx)) {
                      if (nx <= 7) {
                        player.storage.xrwum1 = nx;
                      }
                      if (nx >= 7) {
                        player.storage.xrwum2 = nx;
                      }
                    }
                  }
                }
              } else {
                if (trigger.cards.length) {
                  for (const i of trigger.cards) {
                    const nx = i.number;
                    if (lib.skill.xrwum.filterNumber1(player, nx)) {
                      if (nx <= 7) {
                        player.storage.xrwum1 = nx;
                      }
                      if (nx >= 7) {
                        player.storage.xrwum2 = nx;
                      }
                    }
                  }
                }
              }
              if (player === trigger.player && (player.storage.xrwum1 !== niu || player.storage.xrwum2 !== miu)) {
                player.draw(player.countCards('h') < player.maxHp ? 2 : 1, 'nodelay');
              }
            },
            sourceSkill: 'hwbdxrwu',
          },
        },
        trigger: {
          player: 'phaseUseBegin',
        },
        audio: 'ext:恒梦/audio/tmeevimg:4',
        async cost(event, trigger, player) {
          const list = ['内旋', '外旋', 'cancel2'];
          const result = await player
            .chooseControl(list)
            .set('prompt', get.prompt2('hwbdxrwu'))
            .set('ai', function () {
              let player = _status.event.player;
              if (player.storage.xrwum2 - player.storage.xrwum1 > 7) {
                return 0;
              } else if (player.storage.xrwum2 - player.storage.xrwum1 < 7) {
                return 1;
              } else return [0, 1].randomGet();
            })
            .forResult();
          if (result.control !== 'cancel2') {
            event.result = {
              bool: true,
              cost_data: {
                skill: result.control,
              },
            };
          }
        },
        async content(event, trigger, player) {
          const result = event.cost_data;
          switch (result.skill) {
            case '内旋': {
              player.addTempSkill('hwbdxrwu_nwxr', {
                player: 'phaseBefore',
              });
              break;
            }
            case '外旋': {
              player.addTempSkill('hwbdxrwu_wdxr', {
                player: 'phaseBefore',
              });
              break;
            }
          }
        },
      },
      xrwum: {
        audio: 'ext:恒梦/audio/tmeevimg:2',
        forced: true,
        sourceSkill: 'hwbdxrwu',
        trigger: {
          global: 'phaseBefore',
          player: 'enterGame',
        },
        filter(event, player) {
          return (event.name != 'phase' || game.phaseNumber == 0) && !player.storage.dcgusuan;
        },
        content() {
          const list = [];
          for (let i = 1; i <= 13; i++) {
            list.push(i);
          }
          list.sort((a, b) => {
            if (a < 7) {
              return b < 7 ? a - b : a + 13 - b;
            } else {
              return b < 7 ? a - b - 13 : a - b;
            }
          });
          player.storage.xrwum1 = 0;
          player.storage.xrwum2 = 14;
          player.markSkill('xrwum');
          let str = '#y';
          for (let i = 0; i < 13; i++) {
            str += get.strNumber(list[i]);
            if (i != 12) str += ',';
          }
          game.log(player, '将', '#y<圆环之理>', '赋值为', str);
        },
        filterNumber1(player, num) {
          const num1 = player.getStorage('xrwum1');
          const num2 = player.getStorage('xrwum2');
          return num > num1 && num < num2;
        },
        filterNumber2(player, num) {
          const num1 = player.getStorage('xrwum1');
          const num2 = player.getStorage('xrwum2');
          return num < num1 || num > num2;
        },
        marktext: '舞',
        intro: {
          name: '圆舞曲',
          markcount(storage, player) {
            let list = [player.storage.xrwum1, player.storage.xrwum2];
            list = list.map((num) => {
              let list = [1, 10, 11, 12, 13, 14];
              if (list.includes(num)) return ['A', 'X', 'J', 'Q', 'K', 'M'][list.indexOf(num)];
              return parseFloat(num);
            });
            return list.reduce((str, num) => {
              return str + num;
            }, '');
          },
          mark(dialog, storage, player) {
            dialog.content.style['overflow-x'] = 'visible';
            const list = [player.storage.xrwum1, player.storage.xrwum2];
            const list2 = player.getStorage('xrwum_homura');
            let core = document.createElement('div');
            core.style.width = '0';
            const centerX = -15,
              centerY = 80,
              radius = 80;
            const radian = (Math.PI * 2) / 15;
            const fulllist = ['0', 'Ａ', '２', '３', '４', '５', '６', '７', '８', '９', '10', 'Ｊ', 'Ｑ', 'Ｋ', '14'];
            for (let i = 0; i < 15; i++) {
              let td = document.createElement('div');
              let color = '';
              if (i === list[0]) color = ' class="yellowtext"';
              else if (i === list[1]) color = ' class="greentext"';
              td.innerHTML = '<span' + color + '>[' + fulllist[i] + ']</span>';
              td.style.position = 'absolute';
              core.appendChild(td);
              td.style.left = centerX + radius * Math.sin(radian * i) + 'px';
              td.style.top = centerY - radius * Math.cos(radian * i) + 'px';
            }
            dialog.content.appendChild(core);
          },
        },
      },
      goqu: {
        audio: 'ext:恒梦/audio/hvmg:9',
        enable: ['chooseToUse', 'chooseToRespond'],
        group: 'goqu_record',
        zhuanhuanji: true,
        mark: true,
        marktext: '☯',
        init(player) {
          if (!player.storage.goqux) player.storage.goqux = [];
          if (!player.storage.goquy) player.storage.goquy = [];
        },
        intro: {
          content(storage, player, skill) {
            if (storage) return player.hasSkill('wwld') ? '【转】你随机读取牌堆中等同你手牌数的牌.当你需要使用或打出一张牌时,你可以随机弃一张牌将其中本回合未以此法使用的牌至于〖未来〗上' : '【转】你随机读取弃牌堆中等同你手牌数的牌.当你需要使用或打出一张牌时,你可以随机弃一张牌视为使用其中本回合未以此法使用的牌';
            else return player.hasSkill('wwld') ? '【转】【回合】开始时,你随机读取牌堆中等同你手牌数的牌.当你需要使用或打出一张牌时,你可以随机弃一张牌将其中本回合未以此法使用的牌置于〖未来〗上' : '【转】你随机读取弃牌堆中等同你手牌数的牌.当你需要使用或打出一张牌时,你可以随机弃一张牌视为使用其中本回合未以此法使用的牌';
          },
        },
        filter(event, player) {
          if (!player.countCards('hs')) return false;
          let storage, storage2;
          if (player.storage.goqu) {
            if (player.storage.goqux.length) {
              storage = player.storage.goqux.slice(0);
              if (!storage.length) return false;
              storage2 = player.getStorage('goqu_used');
              return storage.some((name) => {
                return !storage2.includes(name) && event.filterCard({ name: name, storage: { goqu: true } }, player, event);
              });
            }
          } else {
            if (player.storage.goquy.length) {
              storage = player.storage.goquy.slice(0);
              if (!storage.length) return false;
              storage2 = player.getStorage('goqu_usedy');
              return storage.some((name) => {
                return !storage2.includes(name) && event.filterCard({ name: name, storage: { goqu: true } }, player, event);
              });
            }
          }
        },
        hiddenCard(player, name) {
          let list;
          if (player.storage.goqu) {
            list = player.storage.goqux.slice(0);
            if (player.getStorage('goqu_used').includes(name)) return false;
          } else {
            list = player.storage.goquy.slice(0);
            if (player.getStorage('goqu_usedy').includes(name)) return false;
          }
          return list.some((i) => {
            return i === name;
          });
        },
        chooseButton: {
          dialog(event, player) {
            let list = [];
            if (player.storage.goqu) {
              for (const name of player.storage.goqux.slice(0)) {
                if (get.type(name) == 'basic') list.push(['基本', '', name]);
                if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
              }
            } else {
              for (const name of player.storage.goquy.slice(0)) {
                if (get.type(name) == 'basic') list.push(['基本', '', name]);
                if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
              }
            }
            return ui.create.dialog(player.hasSkill('wwld') ? '未来' : '过去', [list, 'vcard']);
          },
          filter(button, player) {
            const card = { name: button.link[2], storage: { goqu: true } };
            if (player.storage.goqu) {
              if (player.getStorage('goqu_used').includes(card.name)) return false;
            } else {
              if (player.getStorage('goqu_usedy').includes(card.name)) return false;
            }
            return _status.event.parent.filterCard(card, player, _status.event.parent);
          },
          check(button) {
            return true;
          },
          backup(links, player) {
            return {
              filterCard() {
                return false;
              },
              audio: 'goqu',
              selectCard: -1,
              popname: true,
              position: 'hs',
              viewAs: {
                name: links[0][2],
                storage: {
                  goqu: true,
                  wwld: player.hasSkill('wwld') ? true : false,
                },
              },
              precontent() {
                const hs = player.getCards('h', function (card) {
                  return lib.filter.cardDiscardable(card, player, 'goqu');
                });
                player.discard(hs.randomGet());
                if (player.storage.goqu) {
                  player.addTempSkill('goqu_used');
                  player.markAuto('goqu_used', [event.result.card.name]);
                } else {
                  player.addTempSkill('goqu_usedy');
                  player.markAuto('goqu_usedy', [event.result.card.name]);
                }
                event.parent.addCount = false;
                player.changeZhuanhuanji('goqu');
                if (Math.random() > 0.5) player.useSkill('mcmc');
              },
            };
          },
          prompt(links, player) {
            return '将一张的手牌当做' + get.translation(links[0][2]) + '使用(无距离和次数限制)';
          },
        },
        mod: {
          cardEnabled(card, player) {
            let hs = player.getCards('h'),
              cards = [card];
            if (Array.isArray(card.cards)) cards.addArray(card.cards);
            for (let i of cards) {
              if (hs.includes(i)) return false;
            }
          },
          cardSavable(card, player) {
            let hs = player.getCards('h'),
              cards = [card];
            if (Array.isArray(card.cards)) cards.addArray(card.cards);
            for (let i of cards) {
              if (hs.includes(i)) return false;
            }
          },
        },
        ai: {
          respondSha: true,
          respondShan: true,
          order: 9,
          skillTagFilter(player, tag, arg) {
            let list;
            if (player.storage.goqu) {
              list = player.storage.goqux.slice(0);
              if (player.getStorage('goqu_used').length) list.yiiu(...player.getStorage('goqu_used'));
            } else {
              list = player.storage.goquy.slice(0);
              if (player.getStorage('goqu_usedy').length) list.yiiu(...player.getStorage('goqu_usedy'));
            }
            if (!list.length) return;
            switch (tag) {
              case 'respondSha':
                return (_status.event.type != 'phase' || player == game.me || player.isUnderControl() || player.isOnline()) && list.includes('sha');
              case 'respondShan':
                return list.includes('shan');
              case 'save':
                if (arg == player && storage.includes('jiu')) return true;
                return list.includes('tao');
            }
          },
          result: {
            player(player) {
              if (_status.event.type == 'dying') {
                return get.attitude(player, _status.event.dying);
              }
              return 1;
            },
          },
        },
        subSkill: {
          record: {
            trigger: { global: 'phaseBegin' },
            forced: true,
            popup: false,
            content() {
              player.storage.goqux = [];
              player.storage.goquy = [];
              for (const i of ui.discardPile.childNodes) {
                if (!['basic', 'trick'].includes(get.type(i))) continue;
                player.storage.goqux.add(i.name);
                player.storage.goqux = player.storage.goqux.randomGets(player.countCards('h'));
              }
              player.storage.goqux.sort((a, b) => {
                return lib.inpile.indexOf(a) - lib.inpile.indexOf(b);
              });
              for (const i of ui.cardPile.childNodes) {
                if (!['basic', 'trick'].includes(get.type(i))) continue;
                player.storage.goquy.add(i.name);
                player.storage.goquy = player.storage.goquy.randomGets(player.countCards('h'));
              }
              player.storage.goquy.sort((a, b) => {
                return lib.inpile.indexOf(a) - lib.inpile.indexOf(b);
              });
            },
          },
          used: {
            charlotte: true,
          },
          usedy: {
            charlotte: true,
          },
        },
      },
      wwld: {
        charlotte: true,
      },
      mgvs: {
        trigger: { player: 'useCardToTargeted' },
        forced: true,
        filter(event, player) {
          return event.getParent(2).name != 'mgvs_timeout' && event.card.storage.wwld;
        },
        content() {
          trigger.parent.cancel();
          game.broadcastAll(ui.clear);
          if (!player.storage.mgvs) player.storage.mgvs = [[], []];
          if (['equip', 'delay'].includes(get.type(card))) {
            const card = trigger.cards;
            player.addToExpansion(card, 'gain2').gaintag.add('mgvs');
            player.storage.mgvs[0].push(card);
          } else {
            const card = trigger.card;
            player.addToExpansion(game.createCard(card), 'gain2').gaintag.add('mgvs');
            player.storage.mgvs[0].push(game.createCard(card));
          }
          player.storage.mgvs[1].push(trigger.targets);
        },
        onremove(player, skill) {
          const cards = player.getExpansions(skill);
          if (cards.length) player.loseToDiscardpile(cards);
          delete player.storage[skill];
        },
        intro: {
          markcount(storage) {
            if (!storage) return 0;
            return storage[0].length;
          },
          mark(dialog, storage, player) {
            if (!storage) return;
            dialog.addAuto(storage[0]);
            dialog.addText(get.translation(storage[1]));
          },
          onunmark(storage, player) {
            player.storage.mgvs = [[], []];
          },
        },
        ai: {
          reverseEquip: true,
          effect: {
            target(card, player, target, current) {
              if (get.type(card) == 'equip' && !get.tag(card, 'gifts') && target.storage.mgvs && target.storage.mgvs[1].length) {
                const result1 = get.equipResult(player, target, card.name),
                  subtype = get.subtype(card);
                for (const i of target.storage.mgvs[0]) {
                  if (get.subtype(i, false) == subtype && get.equipResult(target, target, i.name) >= result1) return 'zerotarget';
                }
              }
            },
          },
        },
        group: 'mgvs_timeout',
        subSkill: {
          timeout: {
            audio: 'mgvs',
            trigger: { player: 'hvmg_wakeAfter' },
            forced: true,
            filter(event, player) {
              return player.storage.mgvs && player.storage.mgvs[0].length;
            },
            content() {
              let card = player.storage.mgvs[0].shift(),
                source = player.storage.mgvs[1].shift().sortBySeat(player);
              if (['equip', 'delay'].includes(get.type(card))) {
                player.useCard(card, source, false);
              } else
                player.useCard(
                  {
                    name: card.name,
                    nature: card.nature,
                  },
                  source,
                  false
                );
              if (player.storage.mgvs[0].length) event.redo();
              else {
                delete player.unmarkSkill('mgvs');
                const cards = player.getExpansions('mgvs');
                if (cards.length) game.cardsGotoSpecial(cards);
              }
            },
          },
        },
      },
      mcmc: {
        trigger: {
          player: [],
        },
        forced: true,
        filter(event, player) {
          return Math.random() > 0.5;
        },
        content() {
          player.setAvatar('mg', player.hasSkill('wwld') ? 'goqumc' : 'wwldmc');
          if (player.hasSkill('wwld')) {
            player.removeSkill('wwld');
            game.broadcastAll(function () {
              lib.translate.goqu = '过去';
            });
          } else {
            player.addSkill('wwld');
            game.broadcastAll(function () {
              lib.translate.goqu = '未来';
            });
          }
        },
      },
      hvmg: {
        derivation: ['goquyr', 'goqugd'],
        audio: 'ext:恒梦/audio/hvmg:6',
        trigger: { global: 'roundStart' },
        filter(event, player) {
          return event.parent.name != 'hvmg' && !player.hasSkill('hvmg_wake');
        },
        intro: {
          content: '回合结束后,场上及牌堆中的牌将回复到回合前的状态',
        },
        content() {
          let List, hp, handcards1, handcards2, judges, equips, viewAs, i, j;
          player.storage.data = [];
          player.storage.cardPile = [];
          for (const i of game.players) {
            viewAs = [];
            handcards1 = [];
            handcards2 = [];
            judges = [];
            equips = [];
            hp = i.hp;
            for (j of i.node.handcards1.childNodes) handcards1.push(j);
            for (j of i.node.handcards2.childNodes) handcards2.push(j);
            for (j of i.node.judges.childNodes) {
              viewAs.push(j.viewAs);
              judges.push(j);
            }
            for (j of i.node.equips.childNodes) equips.push(j);
            const datepush = {
              player: i,
              handcards1: handcards1,
              handcards2: handcards2,
              judges: judges,
              equips: equips,
              viewAs: viewAs,
              value: handcards1.length + handcards2.length + equips.length - judges.length,
            };
            List = ['hp', 'maxHp', 'sex', 'className', 'name', 'name1', 'name2', 'group', 'skipList', 'hujia', 'phaseNumber'];
            for (const k of List) {
              if (k != 'storage') {
                datepush[k] = i[k];
              } else {
                let storage = Object.assign({}, i.storage);
                for (let x in storage) {
                  if (['player', 'players', 'card', 'cards'].includes(get.itemtype(storage[x]))) {
                    delete storage[x];
                  }
                }
                datepush.storage = storage;
              }
            }
            player.storage.data.push(datepush);
          }
          const len = ui.cardPile.childElementCount;
          for (let i = 0; i < len; i++) {
            player.storage.cardPile.push(ui.cardPile.childNodes[i]);
          }
          game.players.forEach((p) => {
            let n = [],
              c = [],
              pmjxt = p.maxHp;
            for (let i = 1; i <= pmjxt; i++) {
              n.push(i);
            }
            p.hp = n.randomGet();
            const cards = p.getCards('hej');
            game.broadcastAll(function (cards) {
              for (const i of cards) {
                i.discard();
              }
            }, cards);
            for (let i = 1; i < pmjxt * 2; i++) {
              c.push(i);
            }
            const cr = c.randomGet();
            p.draw(cr, 'nodelay')._triggered = null;
          });
          if (Math.random() > 0.5) {
            player.setAvatar('mg', 'goqumc');
            game.broadcastAll(function () {
              lib.translate.goqu = '过去';
            });
          } else {
            player.setAvatar('mg', 'wwldmc');
            player.addSkill('wwld');
            game.broadcastAll(function () {
              lib.translate.goqu = '未来';
            });
          }
          player.addSkill(['goqu', 'mcmc', 'hvmg_wake']);
          player.markSkill('hvmg');
          ui.updatehl();
        },
        subSkill: {
          wake: {
            mark: true,
            trigger: { global: 'dieBegin' },
            _priority: 9,
            silent: true,
            content() {
              if (trigger.player === player) {
                trigger.cancel();
                player.loseHp();
              }
              const evt = _status.event.parent;
              evt.finish();
              evt.untrigger(true);
              player.setAvatar('mg', 'mg');
              player.removeSkill(['goqu', 'mcmc', 'hvmg_wake', 'wwld']);
              game.broadcastAll(function () {
                game.animate.window(1);
              });
              player.unmarkSkill('hvmg');
              const storage = player.storage.data;
              storage.forEach((i) => {
                const current = i.player;
                if (current.isAlive()) {
                  current.removeEquipTrigger();
                  game.broadcastAll(function (c) {
                    const hslen = c.getCards('hejxs').length;
                    for (let j = 0; j < hslen; j++) {
                      c.getCards('hejxs')[0].discard();
                    }
                  }, current);
                }
              });
              const storagex = player.storage.data;
              let current, i, j;
              for (const i of storagex) {
                current = i.player;
                if (current.isAlive()) {
                  game.broadcastAll(
                    function (i, j, current) {
                      for (const x in i) {
                        if (x != 'player' && x != 'handcards1' && x != 'handcards2' && x != 'judges' && x != 'equips' && x != 'viewAs' && x != 'value') {
                          current[x] = i[x];
                        }
                      }
                      for (j of i.handcards1) {
                        if (j.parentNode == ui.discardPile || j.parentNode == ui.cardPile) {
                          current.node.handcards1.appendChild(j);
                        } else {
                          current.node.handcards1.appendChild(game.createCard2(j));
                        }
                      }
                      for (j of i.handcards2) {
                        if (j.parentNode == ui.discardPile || j.parentNode == ui.cardPile) {
                          current.node.handcards2.appendChild(j);
                        } else {
                          current.node.handcards2.appendChild(game.createCard2(j));
                        }
                      }
                      for (j of i.equips) {
                        let sut;
                        switch (get.subtype(i)) {
                          case 'equip1':
                            sut = 1;
                            break;
                          case 'equip2':
                            sut = 2;
                            break;
                          case 'equip3':
                            sut = 3;
                            break;
                          case 'equip3':
                            sut = 4;
                            break;
                          case 'equip3':
                            sut = 5;
                            break;
                        }
                        if (!player.hasEnabledSlot(sut)) continue;
                        if (j.parentNode == ui.discardPile || j.parentNode == ui.cardPile) {
                          j.style.transform = '';
                          current.equip(j);
                        } else {
                          current.equip(game.createCard2(j));
                        }
                      }
                      for (j of i.judges) {
                        if (j.parentNode == ui.discardPile || j.parentNode == ui.cardPile) {
                          j.style.transform = '';
                          j.viewAs = i.viewAs[j];
                          if (j.viewAs && j.viewAs != j.name && j.classList.contains('fullskin')) {
                            j.classList.add('fakejudge');
                            j.node.background.innerHTML = lib.translate[j.viewAs + '_bg'] || get.translation(j.viewAs)[0];
                          }
                          current.node.judges.appendChild(j);
                        }
                      }
                      current.update();
                    },
                    i,
                    j,
                    current
                  );
                }
              }
              let data = {};
              for (const i of game.players) {
                data[i.dataset.position] = {
                  h: get.cardsInfo(i.getCards('h')),
                  e: get.cardsInfo(i.getCards('e')),
                  j: get.cardsInfo(i.getCards('j')),
                };
              }
              game.addVideo('skill', event.player, ['hvmg', data]);
              game.broadcastAll(function () {
                game.animate.window(2);
              });
              game.broadcastAll(function (player) {
                while (ui.cardPile.childElementCount) {
                  ui.cardPile.firstChild.discard();
                }
                for (const i of player.storage.cardPile) {
                  if (i.parentNode == ui.discardPile) {
                    ui.cardPile.appendChild(i);
                  } else {
                    ui.cardPile.appendChild(game.createCard(i));
                  }
                }
                ui.updatehl();
              }, player);
            },
            ai: {
              jueqing: true,
            },
          },
        },
      },
      ufmijing: {
        nobracket: true,
        enable: 'phaseUse',
        usable: 1,
        filterTarget: true,
        selectTarget: 1,
        content() {
          game.broadcastAll(function (target) {
            game.removePlayer(target);
          }, target);
        },
      },
      mlmli: {
        audio: 'ext:恒梦/audio/jxqiromg:2',
        mod: {
          ignoredHandcard(card, player) {
            if (!player.storage.mlmlit) return;
            if (player.storage.mlmlit.includes(card)) return true;
          },
        },
        forced: true,
        trigger: {
          global: 'roundStart',
        },
        async content(event, trigger, player) {
          const x = player.storage.mlmli;
          if (!x || x.classList.contains('dead') || x.hp <= 0 || player.getCards('h').length == 0) {
          } else {
            event.lmli = x;
            x.removeSkill('mlmli_hand');
            player.storage.mlmli = null;
            x.lose(x.getCards('h'), ui.special)._triggered = null;
            const result = await player.chooseCard('h', false, [1, Infinity], '连理:选择要交给' + get.translation(x) + '的牌').forResult();
            if (result.bool && result.cards && result.cards.length) {
              player.give(result.cards, event.lmli, 'giveAuto')._triggered = null;
            }
          }
          player.removeSkill(['mlmli_change', 'mlmli_gain']);
          const result = await player
            .chooseTarget(lib.filter.notMe)
            .set('ai', (target) => {
              return target.countCards('h');
            })
            .forResult();
          if (!result.bool) return;
          const target = result.targets[0];
          player.storage.mlmlit = target.getCards('h').slice();
          player.storage.mlmli = target;
          target.addSkill('mlmli_hand');
          const c1 = player.getCards('h').slice(),
            c2 = target.getCards('h').slice(),
            c3 = [...c1, ...c2];
          const cc = [];
          c3.forEach((i) => {
            cc.push(game.createCard2(i));
          });
          player.gain(target.getCards('h'), target, 'giveAuto')._triggered = null;
          game.broadcastAll(
            function (cc, player, target) {
              target.gain(cc, 'nodelay')._triggered = null;
              target.update();
              ui.updatehl();
            },
            cc,
            player,
            target
          );
          player.addSkills(['mlmli_change', 'mlmli_gain']);
        },
        mark: true,
        marktext: '蒂',
        intro: {
          content(storage, player, skill) {
            let str = '并蒂:' + get.translation(storage.name);
            return str;
          },
        },
        init: (player) => (player.storage.mlmli = null),
        subSkill: {
          hand: {
            charlotte: true,
            mod: {
              ignoredHandcard(card, player) {
                const m = game.filterPlayer((i) => i.name == 'jxqiromg');
                if (!m || !m.length) return;
                if (!m[0].storage.mlmlit) return;
                if (!m[0].storage.mlmlit.includes(card)) return true;
              },
            },
          },
          change: {
            charlotte: true,
            trigger: {
              global: ['loseAfter'],
            },
            _priority: Infinity,
            filter(event, player) {
              if (!player.storage.mlmli || !player.storage.mlmli.isIn()) return false;
              if (![player, player.storage.mlmli].includes(event.player)) return false;
              if (!event.getl(event.player).hs) return false;
              return true;
              return false;
            },
            forced: true,
            getIndex(event, player, triggername) {
              const targets = [];
              if (event.name == 'loseAsync') {
                targets.addArray(
                  game.filterPlayer(function (current) {
                    return event.getl(current).hs.length && [player, player.storage.mlmli].includes(current);
                  })
                );
              } else {
                targets.push(event.player);
              }
              return targets;
            },
            logTarget(event, player, triggername, target) {
              return target;
            },
            init(player) {
              if (!player.storage.mlmlit) player.storage.mlmlit = [];
            },
            async content(event, trigger, player) {
              let cardsx = [];
              if (trigger.name == 'loseAsync') {
                for (const i of [player, player.storage.mlmli]) {
                  const hs = trigger.getl(i).hs;
                  if (!hs.length) continue;
                  cardsx.push(...hs);
                }
              } else {
                cardsx.push(...trigger.cards);
              }
              const target = event.targets,
                cas = cardsx.slice();
              if (target.length === 1) {
                const mlist = [player, player.storage.mlmli].yiiu(trigger.player),
                  m = mlist[0],
                  prel1 = [],
                  prel2 = [];
                for (const i of m.getCards('h')) {
                  for (const j of cardsx) {
                    if (i.name === j.name && i.suit === j.suit && i.number === j.number && i.nature === j.nature) {
                      if (!player.storage.mlmlit.includes(j)) {
                        prel1.push(i);
                      } else {
                        prel2.push(i);
                      }
                    }
                  }
                }
                if (m === player) {
                  if (prel1.length) m.lose(prel1, ui.special);
                  if (prel2.length) m.lose(prel2, ui.special)._triggered = null;
                } else {
                  if (prel1.length) m.lose(prel1, ui.special)._triggered = null;
                  if (prel2.length) m.lose(prel2, ui.special);
                }
              } else {
                for (const i of [player, player.storage.mlmli]) {
                  const prell1 = [],
                    prell2 = [];
                  for (const j of i.getCards('h')) {
                    for (const p of cardsx) {
                      if (p.name === j.name && p.suit === j.suit && p.number === j.number && p.nature === j.nature) {
                        if (!player.storage.mlmlit.includes(p)) {
                          prell1.push(j);
                        } else {
                          prell2.push(j);
                        }
                      }
                    }
                  }
                  if (i === player) {
                    if (prell1.length) i.lose(prell1, ui.special);
                    if (prell2.length) i.lose(prell2, ui.special)._triggered = null;
                  } else {
                    if (prell1.length) i.lose(prell1, ui.special)._triggered = null;
                    if (prell2.length) i.lose(prell2, ui.special);
                  }
                }
              }
              player.storage.mlmlit.yiiu(...cas);
            },
          },
          gain: {
            charlotte: true,
            trigger: {
              global: ['gainAfter'],
            },
            init(player) {
              if (!player.storage.preg) player.storage.preg = [];
            },
            filter(event, player) {
              if (!player.storage.mlmli || !player.storage.mlmli.isIn()) return false;
              if (![player, player.storage.mlmli].includes(event.player)) return false;
              const evtg = event.getg(event.player).filter((i) => get.position(i) == 'h');
              return evtg && evtg.length;
            },
            forced: true,
            content() {
              player.storage.preg = [];
              const mlist = [player, player.storage.mlmli].yiiu(trigger.player),
                m = mlist[0],
                thg = trigger.getg(trigger.player).filter((i) => get.position(i) == 'h');
              game.broadcastAll(function (thg) {
                for (const i of thg) {
                  player.storage.preg.push(game.createCard2(i));
                }
              }, thg);
              m.gain(player.storage.preg, 'nodelay')._triggered = null;
              m.update();
              ui.updatehl();
              player.storage.mlmlit.add(...trigger.getg(player.storage.mlmli).filter((i) => get.position(i) == 'h'));
            },
          },
        },
      },
      igif: {
        audio: 'yuyj',
        trigger: {
          player: ['yuyjAfter', 'yuyjplus1After', 'yuyjplus2After', 'yuyjplus3After'],
        },
        filter(event, player) {
          const identitylist = [];
          for (const i of game.players) {
            let zhu = false;
            switch (get.mode()) {
              case 'identity': {
                zhu = i.isZhu;
                break;
              }
              case 'guozhan': {
                zhu = get.is.jun(i);
                break;
              }
              case 'versus': {
                zhu = i.identity == 'zhu';
                break;
              }
              case 'doudizhu': {
                zhu = i == game.zhu;
                break;
              }
            }
            if (zhu) continue;
            identitylist.add(i.identity);
          }
          if (
            game.players.every((target) => {
              let zhu = false;
              switch (get.mode()) {
                case 'identity': {
                  zhu = target.isZhu;
                  break;
                }
                case 'guozhan': {
                  zhu = get.is.jun(target);
                  break;
                }
                case 'versus': {
                  zhu = target.identity == 'zhu';
                  break;
                }
                case 'doudizhu': {
                  zhu = target == game.zhu;
                  break;
                }
              }
              if (zhu) return true;
              return (player.storage.yuyjm && player.storage.yuyjm.includes(target)) || target === player;
            }) &&
            (player.hasSkill('yuyj') || player.hasSkill('yuyjplus1'))
          )
            return true;
          if (
            identitylist.every((i) => {
              return player.storage.yuyjn.includes(i);
            }) &&
            (player.hasSkill('yuyj') || player.hasSkill('yuyjplus2'))
          )
            return true;
          if (
            game.players.every((target) => {
              let zhu = false;
              switch (get.mode()) {
                case 'identity': {
                  zhu = target.isZhu;
                  break;
                }
                case 'guozhan': {
                  zhu = get.is.jun(target);
                  break;
                }
                case 'versus': {
                  zhu = target.identity == 'zhu';
                  break;
                }
                case 'doudizhu': {
                  zhu = target == game.zhu;
                  break;
                }
              }
              if (zhu) return true;
              return (player.storage.yuyjz && player.storage.yuyjz.includes(target)) || target === player;
            })
          )
            return true;
          return false;
        },
        forced: true,
        content() {
          const identitylist = [];
          for (const i of game.players) {
            let zhu = false;
            switch (get.mode()) {
              case 'identity': {
                zhu = i.isZhu;
                break;
              }
              case 'guozhan': {
                zhu = get.is.jun(i);
                break;
              }
              case 'versus': {
                zhu = i.identity == 'zhu';
                break;
              }
              case 'doudizhu': {
                zhu = i == game.zhu;
                break;
              }
            }
            if (zhu) continue;
            identitylist.add(i.identity);
          }
          if (
            identitylist.every((i) => {
              return player.storage.yuyjn.includes(i);
            }) &&
            player.hasSkill('yuyj')
          ) {
            player.changeSkills(['yuyjplus1'], ['yuyj']);
          } else if (
            game.players.every((target) => {
              let zhu = false;
              switch (get.mode()) {
                case 'identity': {
                  zhu = target.isZhu;
                  break;
                }
                case 'guozhan': {
                  zhu = get.is.jun(target);
                  break;
                }
                case 'versus': {
                  zhu = target.identity == 'zhu';
                  break;
                }
                case 'doudizhu': {
                  zhu = target == game.zhu;
                  break;
                }
              }
              if (zhu) return true;
              return (player.storage.yuyjm && player.storage.yuyjm.includes(target)) || target === player;
            }) &&
            player.hasSkill('yuyj')
          ) {
            player.changeSkills(['yuyjplus2'], ['yuyj']);
          } else if (
            identitylist.every((i) => {
              return player.storage.yuyjn.includes(i);
            }) &&
            player.hasSkill('yuyjplus2')
          ) {
            player.changeSkills(['yuyjplus3'], ['yuyj', 'yuyjplus1', 'yuyjplus2']);
          } else if (
            game.players.every((target) => {
              let zhu = false;
              switch (get.mode()) {
                case 'identity': {
                  zhu = target.isZhu;
                  break;
                }
                case 'guozhan': {
                  zhu = get.is.jun(target);
                  break;
                }
                case 'versus': {
                  zhu = target.identity == 'zhu';
                  break;
                }
                case 'doudizhu': {
                  zhu = target == game.zhu;
                  break;
                }
              }
              if (zhu) return true;
              return (player.storage.yuyjm && player.storage.yuyjm.includes(target)) || target === player;
            }) &&
            player.hasSkill('yuyjplus1')
          ) {
            player.changeSkills(['yuyjplus3'], ['yuyj', 'yuyjplus1', 'yuyjplus2']);
          } else {
            player.awakenSkill('igif');
            player.changeSkills(['yuyjplus4'], ['yuyj', 'yuyjplus1', 'yuyjplus2', 'yuyjplus3']);
          }
          game.log(player, '修改了', '#g【预言】');
        },
        ai: {
          combo: 'yuyj',
        },
      },
      yuyj: {
        init(player) {
          if (!player.storage.yuyjz) player.storage.yuyjz = [];
          if (!player.storage.yuyjn) player.storage.yuyjn = [];
          if (!player.storage.yuyjm) player.storage.yuyjm = [];
          if (!player.storage.yuyjskip1) player.storage.yuyjskip1 = null;
          if (!player.storage.yuyjskip2) player.storage.yuyjskip2 = null;
        },
        audio: 'ext:恒梦/audio/yuyjjx:4',
        trigger: {
          global: 'roundStart',
        },
        $createButton(item, type, position, noclick, node) {
          node = ui.create.identityCard(item, position, noclick);
          node.link = item;
          return node;
        },
        filter(event, player) {
          return !player.hasHistory('useSkill', function (evt) {
            return evt.skill == 'yuyj' || evt.skill == 'yuyjplus1' || evt.skill == 'yuyjplus2' || evt.skill == 'yuyjplus3' || evt.skill == 'yuyjplus4';
          });
        },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseTarget(get.prompt('yuyj'), function (card, player, target) {
              if (player.storage.yuyjz.includes(target)) return false;
              let zhu = false;
              switch (get.mode()) {
                case 'identity': {
                  zhu = target.isZhu;
                  break;
                }
                case 'guozhan': {
                  zhu = get.is.jun(target);
                  break;
                }
                case 'versus': {
                  zhu = target.identity == 'zhu';
                  break;
                }
                case 'doudizhu': {
                  zhu = target == game.zhu;
                  break;
                }
              }
              if (zhu) return false;
              return target !== player;
            })
            .set('ai', function (target) {
              return 22 - get.attitude(_status.event.player, target);
            })
            .forResult();
        },
        async content(event, trigger, player) {
          const target = event.targets[0];
          player.line(target, 'green');
          let list = lib.config.mode_config.identity.identity.lastItem.slice();
          list.yiiu('zhu').unique();
          const links = await player
            .chooseButton(
              [
                '###预言:请预言其真实身份###<div class="text center">若正确,你获得其1个回合,否则其获得你1个回合</div>',
                [
                  list,
                  function (item, type, position, noclick, node) {
                    return lib.skill.yuyj.$createButton(item, type, position, noclick, node);
                  },
                ],
              ],

              true
            )
            .set('ai', (button) => {
              const player = _status.event.player,
                target = _status.event.target,
                att = get.attitude(player, target);
              if (att > 0) {
                return player.identity === button.link;
              } else if (att < 0) {
                return Math.random() < 0.7 + game.roundNumber * 0.1 ? button.link === target.identity : Math.random();
              } else return Math.random();
            })
            .set('target', target)
            .forResultLinks();
          if (!links || !links.length) return;
          player.addTempSkill('yuyj_skip', 'roundStart');
          let choice = links[0],
            identity = target.identity,
            yes;
          if (choice === identity) {
            yes = true;
            player.storage.yuyjz.add(target);
            player.storage.yuyjskip1 = target;
            player.storage.yuyjskip2 = player;
          } else {
            yes = false;
            player.storage.yuyjskip1 = player;
            player.storage.yuyjskip2 = target;
          }
          game.log(player, '查看了', target, '的身份');
          let color = '';
          if (identity === 'zhong') color = "<span class='yellowtext'>";
          else if (identity === 'fan') color = "<span class='greentext'>";
          else if (identity === 'nei') color = "<span class='bluetext'>";
          else if (identity === 'zhu') color = "<span class='redtext'>";
          player.chooseControl('ok').set('dialog', ['你的预言' + (yes ? "<span class='greentext'>正确</span>" : "<span class='redtext'>错误</span>"), get.translation(target) + '是' + color + get.translation(identity + '2') + '</span>', [[target.name], 'character']]);
          const func = function (target) {
            target.setIdentity();
          };
          if (player == game.me) func(target);
          else if (player.isOnline()) player.send(func, target);
          player.storage.yuyjm.add(target);
          player.storage.yuyjn.add(choice);
        },
        subSkill: {
          skip: {
            audio: 'yuyj',
            trigger: {
              global: 'phaseBeginStart',
            },
            filter(event, player) {
              return player.storage.yuyjskip1 === event.player;
            },
            forced: true,
            content() {
              const list = [],
                target = player.storage.yuyjskip2,
                targetx = player.storage.yuyjskip1;
              if (lib.character[targetx.name]) list.addArray(lib.character[targetx.name][3]);
              if (lib.character[targetx.name1]) list.addArray(lib.character[targetx.name1][3]);
              if (lib.character[targetx.name2]) list.addArray(lib.character[targetx.name2][3]);
              for (const i of list) {
                target.addTempSkill(i, 'phaseAfter');
              }
              target.phase('nodelay');
              if (!trigger._finished) {
                trigger.finish();
                trigger.untrigger(true);
                trigger._triggered = 5;
                game.players
                  .slice()
                  .concat(game.dead)
                  .forEach((current) => {
                    current.getHistory().isSkipped = true;
                    current.getStat().isSkipped = true;
                  });
                game.broadcastAll(function (player) {
                  player.classList.remove('glow_phase');
                  delete _status.currentPhase;
                }, targetx);
              }
              player.storage.yuyjskip1 = null;
              player.storage.yuyjskip2 = null;
            },
          },
        },
      },
      yuyjplus1: {
        init(player) {
          if (!player.storage.yuyjz) player.storage.yuyjz = [];
          if (!player.storage.yuyjn) player.storage.yuyjn = [];
          if (!player.storage.yuyjm) player.storage.yuyjm = [];
          if (!player.storage.yuyjskip1) player.storage.yuyjskip1 = null;
          if (!player.storage.yuyjskip2) player.storage.yuyjskip2 = null;
        },
        audio: 'yuyj',
        trigger: {
          global: 'roundStart',
        },
        lastDo: true,
        $createButton(item, type, position, noclick, node) {
          node = ui.create.identityCard(item, position, noclick);
          node.link = item;
          return node;
        },
        filter(event, player) {
          return !player.hasHistory('useSkill', function (evt) {
            return evt.skill == 'yuyj' || evt.skill == 'yuyjplus1' || evt.skill == 'yuyjplus2' || evt.skill == 'yuyjplus3' || evt.skill == 'yuyjplus4';
          });
        },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseTarget(get.prompt('yuyjplus1'), function (card, player, target) {
              let zhu = false;
              switch (get.mode()) {
                case 'identity': {
                  zhu = target.isZhu;
                  break;
                }
                case 'guozhan': {
                  zhu = get.is.jun(target);
                  break;
                }
                case 'versus': {
                  zhu = target.identity == 'zhu';
                  break;
                }
                case 'doudizhu': {
                  zhu = target == game.zhu;
                  break;
                }
              }
              if (zhu) return false;
              return target !== player;
            })
            .set('ai', function (target) {
              return 22 - get.attitude(_status.event.player, target);
            })
            .forResult();
        },
        async content(event, trigger, player) {
          const target = event.targets[0];
          player.line(target, 'green');
          let list = lib.config.mode_config.identity.identity.lastItem.slice();
          list.yiiu('zhu').unique();
          const links = await player
            .chooseButton(
              [
                '###预言:请预言其真实身份###<div class="text center">若正确,你获得其1个回合,否则其获得你1个回合</div>',
                [
                  list,
                  function (item, type, position, noclick, node) {
                    return lib.skill.yuyjplus1.$createButton(item, type, position, noclick, node);
                  },
                ],
              ],

              true
            )
            .set('ai', (button) => {
              const player = _status.event.player,
                target = _status.event.target,
                att = get.attitude(player, target);
              if (att > 0) {
                return player.identity === button.link;
              } else if (att < 0) {
                return Math.random() < 0.6 + game.roundNumber * 0.1 ? target.identity === button.link : Math.random();
              } else return Math.random();
            })
            .set('target', target)
            .forResultLinks();
          if (!links || !links.length) return;
          player.addTempSkill('yuyjplus1_skip', 'roundStart');
          let choice = links[0],
            identity = target.identity,
            yes;
          if (choice === identity) {
            yes = true;
            player.storage.yuyjz.add(target);
            player.storage.yuyjskip1 = target;
            player.storage.yuyjskip2 = player;
          } else {
            yes = false;
            player.storage.yuyjskip1 = player;
            player.storage.yuyjskip2 = target;
          }
          game.log(player, '查看了', target, '的身份');
          let color = '';
          if (identity === 'zhong') color = "<span class='yellowtext'>";
          else if (identity === 'fan') color = "<span class='greentext'>";
          else if (identity === 'nei') color = "<span class='bluetext'>";
          else if (identity === 'zhu') color = "<span class='redtext'>";
          player.chooseControl('ok').set('dialog', ['你的预言' + (yes ? "<span class='greentext'>正确</span>" : "<span class='redtext'>错误</span>"), get.translation(target) + '是' + color + get.translation(identity + '2') + '</span>', [[target.name], 'character']]);
          const func = function (target) {
            target.setIdentity();
          };
          if (player == game.me) func(target);
          else if (player.isOnline()) player.send(func, target);
          player.storage.yuyjm.add(target);
        },
        subSkill: {
          skip: {
            audio: 'yuyj',
            trigger: {
              global: 'phaseBeginStart',
            },
            filter(event, player) {
              return player.storage.yuyjskip1 === event.player;
            },
            forced: true,
            content() {
              const list = [],
                target = player.storage.yuyjskip2,
                targetx = player.storage.yuyjskip1;
              if (lib.character[targetx.name]) list.addArray(lib.character[targetx.name][3]);
              if (lib.character[targetx.name1]) list.addArray(lib.character[targetx.name1][3]);
              if (lib.character[targetx.name2]) list.addArray(lib.character[targetx.name2][3]);
              for (const i of list) {
                target.addTempSkill(i, 'phaseAfter');
              }
              target.phase('nodelay');
              if (!trigger._finished) {
                trigger.finish();
                trigger.untrigger(true);
                trigger._triggered = 5;
                game.players
                  .slice()
                  .concat(game.dead)
                  .forEach((current) => {
                    current.getHistory().isSkipped = true;
                    current.getStat().isSkipped = true;
                  });
                game.broadcastAll(function (player) {
                  player.classList.remove('glow_phase');
                  delete _status.currentPhase;
                }, targetx);
              }
              player.storage.yuyjskip1 = null;
              player.storage.yuyjskip2 = null;
            },
          },
        },
      },
      yuyjplus2: {
        init(player) {
          if (!player.storage.yuyjz) player.storage.yuyjz = [];
          if (!player.storage.yuyjn) player.storage.yuyjn = [];
          if (!player.storage.yuyjm) player.storage.yuyjm = [];
          if (!player.storage.yuyjskip1) player.storage.yuyjskip1 = null;
          if (!player.storage.yuyjskip2) player.storage.yuyjskip2 = null;
        },
        audio: 'yuyj',
        trigger: {
          global: 'roundStart',
        },
        lastDo: true,
        $createButton(item, type, position, noclick, node) {
          node = ui.create.identityCard(item, position, noclick);
          node.link = item;
          return node;
        },
        filter(event, player) {
          return !player.hasHistory('useSkill', function (evt) {
            return evt.skill == 'yuyj' || evt.skill == 'yuyjplus1' || evt.skill == 'yuyjplus2' || evt.skill == 'yuyjplus3' || evt.skill == 'yuyjplus4';
          });
        },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseTarget(get.prompt('yuyjplus2'), function (card, player, target) {
              if (player.storage.yuyjz.includes(target)) return false;
              let zhu = false;
              switch (get.mode()) {
                case 'identity': {
                  zhu = target.isZhu;
                  break;
                }
                case 'guozhan': {
                  zhu = get.is.jun(target);
                  break;
                }
                case 'versus': {
                  zhu = target.identity == 'zhu';
                  break;
                }
                case 'doudizhu': {
                  zhu = target == game.zhu;
                  break;
                }
              }
              if (zhu) return false;
              return target !== player;
            })
            .set('ai', function (target) {
              return 22 - get.attitude(_status.event.player, target);
            })
            .forResult();
        },
        async content(event, trigger, player) {
          const target = event.targets[0];
          player.line(target, 'green');
          let list = lib.config.mode_config.identity.identity.lastItem.slice();
          list.yiiu('zhu').unique();
          const link = await player
            .chooseButton(
              [
                '###预言:请预言其真实身份###<div class="text center">若正确,你获得其1个回合</div>',
                [
                  list,
                  function (item, type, position, noclick, node) {
                    return lib.skill.yuyjplus2.$createButton(item, type, position, noclick, node);
                  },
                ],
              ],

              true
            )
            .set('ai', (button) => {
              const player = _status.event.player,
                target = _status.event.target,
                att = get.attitude(player, target);
              if (att > 0) {
                return player.identity === button.link;
              } else if (att < 0) {
                return Math.random() < 0.6 + game.roundNumber * 0.1 ? button.link == target.identity : Math.random();
              } else return Math.random();
            })
            .set('target', target)
            .forResultLinks();
          if (!links || !links.length) return;
          player.addTempSkill('yuyjplus2_skip', 'roundStart');
          let choice = links[0],
            identity = target.identity,
            yes;
          if (choice === identity) {
            yes = true;
            player.storage.yuyjz.add(target);
            player.storage.yuyjskip1 = target;
            player.storage.yuyjskip2 = player;
          } else {
            yes = false;
            player.storage.yuyjskip1 = player;
            player.storage.yuyjskip2 = target;
          }
          game.log(player, '查看了', target, '的身份');
          let color = '';
          if (identity === 'zhong') color = "<span class='yellowtext'>";
          else if (identity === 'fan') color = "<span class='greentext'>";
          else if (identity === 'nei') color = "<span class='bluetext'>";
          else if (identity === 'zhu') color = "<span class='redtext'>";
          player.chooseControl('ok').set('dialog', ['你的预言' + (yes ? "<span class='greentext'>正确</span>" : "<span class='redtext'>错误</span>"), get.translation(target) + '是' + color + get.translation(identity + '2') + '</span>', [[target.name], 'character']]);
          const func = function (target) {
            target.setIdentity();
          };
          if (player == game.me) func(target);
          else if (player.isOnline()) player.send(func, target);
          player.storage.yuyjm.add(target);
        },
        subSkill: {
          skip: {
            audio: 'yuyj',
            trigger: {
              global: 'phaseBeginStart',
            },
            filter(event, player) {
              return player.storage.yuyjskip1 === event.player && player !== event.player;
            },
            forced: true,
            content() {
              const list = [],
                target = player.storage.yuyjskip2,
                targetx = player.storage.yuyjskip1;
              if (lib.character[targetx.name]) list.addArray(lib.character[targetx.name][3]);
              if (lib.character[targetx.name1]) list.addArray(lib.character[targetx.name1][3]);
              if (lib.character[targetx.name2]) list.addArray(lib.character[targetx.name2][3]);
              for (const i of list) {
                target.addTempSkill(i, 'phaseAfter');
              }
              target.phase('nodelay');
              if (!trigger._finished) {
                trigger.finish();
                trigger.untrigger(true);
                trigger._triggered = 5;
                game.players
                  .slice()
                  .concat(game.dead)
                  .forEach((current) => {
                    current.getHistory().isSkipped = true;
                    current.getStat().isSkipped = true;
                  });
                game.broadcastAll(function (player) {
                  player.classList.remove('glow_phase');
                  delete _status.currentPhase;
                }, targetx);
              }
              player.storage.yuyjskip1 = null;
              player.storage.yuyjskip2 = null;
            },
          },
        },
      },
      yuyjplus3: {
        init(player) {
          if (!player.storage.yuyjz) player.storage.yuyjz = [];
          if (!player.storage.yuyjn) player.storage.yuyjn = [];
          if (!player.storage.yuyjm) player.storage.yuyjm = [];
          if (!player.storage.yuyjskip1) player.storage.yuyjskip1 = null;
          if (!player.storage.yuyjskip2) player.storage.yuyjskip2 = null;
        },
        audio: 'yuyj',
        trigger: {
          global: 'roundStart',
        },
        lastDo: true,
        $createButton(item, type, position, noclick, node) {
          node = ui.create.identityCard(item, position, noclick);
          node.link = item;
          return node;
        },
        filter(event, player) {
          return !player.hasHistory('useSkill', function (evt) {
            return evt.skill == 'yuyj' || evt.skill == 'yuyjplus1' || evt.skill == 'yuyjplus2' || evt.skill == 'yuyjplus3' || evt.skill == 'yuyjplus4';
          });
        },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseTarget(get.prompt('yuyjplus3'), function (card, player, target) {
              let zhu = false;
              switch (get.mode()) {
                case 'identity': {
                  zhu = target.isZhu;
                  break;
                }
                case 'guozhan': {
                  zhu = get.is.jun(target);
                  break;
                }
                case 'versus': {
                  zhu = target.identity == 'zhu';
                  break;
                }
                case 'doudizhu': {
                  zhu = target == game.zhu;
                  break;
                }
              }
              if (zhu) return false;
              return target !== player;
            })
            .set('ai', function (target) {
              return 22 - get.attitude(_status.event.player, target);
            })
            .forResult();
        },
        async content(event, trigger, player) {
          const target = event.targets[0];
          player.line(target, 'green');
          let list = lib.config.mode_config.identity.identity.lastItem.slice();
          list.yiiu('zhu').unique();
          const links = await player
            .chooseButton(
              [
                '###预言:请预言其真实身份###<div class="text center">若正确,你获得其1个回合</div>',
                [
                  list,
                  function (item, type, position, noclick, node) {
                    return lib.skill.yuyjplus3.$createButton(item, type, position, noclick, node);
                  },
                ],
              ],

              true
            )
            .set('ai', (button) => {
              const player = _status.event.player,
                target = _status.event.target,
                att = get.attitude(player, target);
              if (att > 0) {
                return player.identity === button.link;
              } else if (att < 0) {
                return Math.random() < 0.6 + game.roundNumber * 0.1 ? button.link == target.identity : Math.random();
              } else return Math.random();
            })
            .set('target', target)
            .forResultLinks();
          player.addTempSkill('yuyjplus3_skip', 'roundStart');
          if (!links || !links.length) return;
          let choice = links[0],
            identity = target.identity,
            yes;
          if (choice === identity) {
            yes = true;
            player.storage.yuyjz.add(target);
            player.storage.yuyjskip1 = target;
            player.storage.yuyjskip2 = player;
          } else {
            yes = false;
            player.storage.yuyjskip1 = player;
            player.storage.yuyjskip2 = target;
          }
          game.log(player, '查看了', target, '的身份');
          let color = '';
          if (identity === 'zhong') color = "<span class='yellowtext'>";
          else if (identity === 'fan') color = "<span class='greentext'>";
          else if (identity === 'nei') color = "<span class='bluetext'>";
          else if (identity === 'zhu') color = "<span class='redtext'>";
          player.chooseControl('ok').set('dialog', ['你的预言' + (yes ? "<span class='greentext'>正确</span>" : "<span class='redtext'>错误</span>"), get.translation(target) + '是' + color + get.translation(identity + '2') + '</span>', [[target.name], 'character']]);
          const func = function (target) {
            target.setIdentity();
          };
          if (player == game.me) func(target);
          else if (player.isOnline()) player.send(func, target);
          player.storage.yuyjm.add(target);
        },
        subSkill: {
          skip: {
            audio: 'yuyj',
            trigger: {
              global: 'phaseBeginStart',
            },
            filter(event, player) {
              return player.storage.yuyjskip1 === event.player && player !== event.player;
            },
            forced: true,
            content() {
              const list = [],
                target = player.storage.yuyjskip2,
                targetx = player.storage.yuyjskip1;
              if (lib.character[targetx.name]) list.addArray(lib.character[targetx.name][3]);
              if (lib.character[targetx.name1]) list.addArray(lib.character[targetx.name1][3]);
              if (lib.character[targetx.name2]) list.addArray(lib.character[targetx.name2][3]);
              for (const i of list) {
                target.addTempSkill(i, 'phaseAfter');
              }
              target.phase('nodelay');
              if (!trigger._finished) {
                trigger.finish();
                trigger.untrigger(true);
                trigger._triggered = 5;
                game.players
                  .slice()
                  .concat(game.dead)
                  .forEach((current) => {
                    current.getHistory().isSkipped = true;
                    current.getStat().isSkipped = true;
                  });
                game.broadcastAll(function (player) {
                  player.classList.remove('glow_phase');
                  delete _status.currentPhase;
                }, targetx);
              }
              player.storage.yuyjskip1 = null;
              player.storage.yuyjskip2 = null;
            },
          },
        },
      },
      yuyjplus4: {
        init(player) {
          if (!player.storage.yuyjz) player.storage.yuyjz = [];
          if (!player.storage.yuyjn) player.storage.yuyjn = [];
          if (!player.storage.yuyjm) player.storage.yuyjm = [];
          if (!player.storage.yuyjskip1) player.storage.yuyjskip1 = null;
          if (!player.storage.yuyjskip2) player.storage.yuyjskip2 = null;
        },
        audio: 'yuyj',
        trigger: {
          global: 'roundStart',
        },
        $createButton(item, type, position, noclick, node) {
          node = ui.create.identityCard(item, position, noclick);
          node.link = item;
          return node;
        },
        filter(event, player) {
          return !player.hasHistory('useSkill', function (evt) {
            return evt.skill == 'yuyj' || evt.skill == 'yuyjplus1' || evt.skill == 'yuyjplus2' || evt.skill == 'yuyjplus3' || evt.skill == 'yuyjplus4';
          });
        },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseTarget(get.prompt('yuyjplus4'), function (card, player, target) {
              let zhu = false;
              switch (get.mode()) {
                case 'identity': {
                  zhu = target.isZhu;
                  break;
                }
                case 'guozhan': {
                  zhu = get.is.jun(target);
                  break;
                }
                case 'versus': {
                  zhu = target.identity == 'zhu';
                  break;
                }
                case 'doudizhu': {
                  zhu = target == game.zhu;
                  break;
                }
              }
              if (zhu) return false;
              return true;
            })
            .set('ai', function (target) {
              return 22 - get.attitude(_status.event.player, target);
            })
            .forResult();
        },
        async content(event, trigger, player) {
          const target = event.targets[0];
          player.line(target, 'green');
          let list = lib.config.mode_config.identity.identity.lastItem.slice();
          list.yiiu('zhu').unique();
          const link = await player
            .chooseButton(
              [
                '###一语成谶:请预言其真实身份###<div class="text center">你的预言直接决定其真实身份</div>',
                [
                  list,
                  function (item, type, position, noclick, node) {
                    return lib.skill.yuyjplus4.$createButton(item, type, position, noclick, node);
                  },
                ],
              ],

              true
            )
            .set('ai', (button) => {
              const player = _status.event.player;
              let zhu = false;
              switch (get.mode()) {
                case 'identity': {
                  zhu = player.isZhu;
                  break;
                }
                case 'versus': {
                  zhu = player.identity == 'zhu';
                  break;
                }
                default:
                  event.finish();
                  break;
              }
              if (zhu) {
                switch (get.mode()) {
                  case 'identity': {
                    return button.link == 'zhong';
                    break;
                  }
                  case 'versus': {
                    return button.link == 'zhong';
                    break;
                  }
                }
              } else {
                return player.identity;
              }
            });
          if (!link || !link.length) return;
          let choice = links[0],
            identity = target.identity;
          game.broadcastAll(
            function (target, choice, shown) {
              target.identity = choice;
            },
            target,
            choice,
            target.identityShown
          );
          game.log(player, '查看了', target, '的身份');
          let color = '';
          if (choice === 'zhong') color = "<span class='yellowtext'>";
          else if (choice === 'fan') color = "<span class='greentext'>";
          else if (choice === 'nei') color = "<span class='bluetext'>";
          else if (choice === 'zhu') color = "<span class='redtext'>";
          player.chooseControl('ok').set('dialog', ['你的预言纠正了未来', get.translation(target) + '是' + color + get.translation(choice + '2') + '</span>', [[target.name], 'character']]);
          const func = function (target) {
            target.setIdentity(choice);
          };
          if (player == game.me) func(target);
          else if (player.isOnline()) player.send(func, target);
          let over = false;
          if (game.players.length == 1) over = true;
          const alive = game.players;
          const enemies = alive[0].getEnemies();
          if (enemies.length == 0) over = true;
          if (over) {
            const winners = player.getFriends();
            game.over(player == game.me || winners.includes(game.me));
          }
        },
      },
      qiqq: {
        audio: 'ext:恒梦/audio/qiqqve:8',
        derivation: ['qiqq_hh', 'qiqq_hd', 'qiqq_hc', 'qiqq_hs', 'qiqq_dd', 'qiqq_dc', 'qiqq_ds', 'qiqq_cc', 'qiqq_cs', 'qiqq_ss'],
        intro: {
          content: '已使用过的花色:$',
        },
        trigger: { player: 'useCardAfter' },
        forced: true,
        filter(event, player) {
          if (!lib.suit.includes(event.card.suit)) return false;
          const suit = event.card.suit;
          if (player.getRoundHistory('useCard', (evt) => evt.card.suit == suit).indexOf(event) != 0) return false;
          return (event.targets && event.targets.length == 1) || player.hasCard((card) => card.suit == event.card.suit && player.canRecast(card), 'h');
        },
        content() {
          if (trigger.targets && trigger.targets.length == 1 && !trigger.targets[0].isLinked()) {
            trigger.targets[0].link(true);
            event.link = true;
          }
          let o;
          switch (trigger.card.suit) {
            case 'heart':
              o = 'qiqq_♥️️';
              break;
            case 'diamond':
              o = 'qiqq_♦️️';
              break;
            case 'club':
              o = 'qiqq_♣️️';
              break;
            case 'spade':
              o = 'qiqq_♠️️';
              break;
          }
          const cards = player.getCards('h', (card) => card.suit == trigger.card.suit && player.canRecast(card));
          if (cards.length) {
            player.discard(cards);
            player.gain(get.cards(cards.length), 'draw').gaintag.add(o);
            event.recast = true;
          }
        },
        init(player) {
          let suits = player
            .getRoundHistory('useCard', (evt) => {
              return lib.suits.includes(evt.card.suit);
            })
            .reduce((list, evt) => {
              return list.add(evt.card.suit);
            }, [])
            .sort((a, b) => lib.suits.indexOf(a) - lib.suits.indexOf(b));
          if (suits.length) {
            if (!player.storage.clandianzhan) {
              player.when({ global: 'roundStart' }).then(() => {
                delete player.storage.clandianzhan;
                player.unmarkSkill('qiqq');
              });
            }
            player.storage.clandianzhan = suits;
            player.markSkill('qiqq');
          }
        },
        group: ['qiqq_count', 'qiqq_gain'],
        subSkill: {
          gain: {
            audio: 'qiqq',
            trigger: { player: 'useCard' },
            forced: true,
            filter(event, player) {
              const tags = ['qiqq_♥️️', 'qiqq_♦️️', 'qiqq_♣️️', 'qiqq_♠️️'],
                card = event.card;
              if (!lib.suit.includes(card.suit)) return false;
              const suit = card.suit;
              return player.hasHistory('lose', function (evt) {
                if (evt.parent != event) return false;
                for (const i in evt.gaintag_map) {
                  for (const tag of evt.gaintag_map[i]) {
                    if (tags.includes(tag)) return true;
                  }
                }
                return false;
              });
            },
            content() {
              const tags = ['qiqq_♥️️', 'qiqq_♦️️', 'qiqq_♣️️', 'qiqq_♠️️'],
                card = trigger.card;
              player.hasHistory('lose', function (evt) {
                if (evt.parent != trigger) return false;
                for (const i in evt.gaintag_map) {
                  tags.removeArray(evt.gaintag_map[i]);
                }
                return tags.length == 0;
              });
              let o,
                p,
                op = ['h', 'h', 'd', 'd', 'c', 'c', 's', 's'],
                op2 = ['h', 'h', 'd', 'd', 'c', 'c', 's', 's'];
              switch (card.suit) {
                case 'heart':
                  o = 'h';
                  break;
                case 'diamond':
                  o = 'd';
                  break;
                case 'club':
                  o = 'c';
                  break;
                case 'spade':
                  o = 's';
                  break;
              }
              if (!tags.includes('qiqq_♥️️')) {
                p = 'h';
              } else if (!tags.includes('qiqq_♦️️')) {
                p = 'd';
              } else if (!tags.includes('qiqq_♣️️')) {
                p = 'c';
              } else if (!tags.includes('qiqq_♠️️')) {
                p = 's';
              }
              op.yiiu(o).yiiu(p);
              op2.yiiu(...op);
              const pres = 'qiqq_' + op2[0] + op2[1];
              game.log(pres);
              if (!player.hasSkill(pres)) {
                player.addSkill(pres);
              } else {
                player.removeSkill(pres);
                const cards = [];
                for (const i of lib.suit) {
                  const preg = get.cardPile2(function (card) {
                    return card.suit == i;
                  });
                  if (preg) cards.push(preg);
                }
                if (cards.length) player.gain(cards, 'gain2');
              }
            },
          },
          count: {
            charlotte: true,
            trigger: { player: 'useCardAfter' },
            filter(event, player) {
              let suit = event.card.suit;
              return lib.suits.includes(suit) && !player.getStorage('qiqq').includes(suit);
            },
            forced: true,
            silent: true,
            content() {
              let suits = player
                .getRoundHistory('useCard', (evt) => {
                  return lib.suits.includes(evt.card.suit);
                })
                .reduce((list, evt) => {
                  return list.add(evt.card.suit);
                }, [])
                .sort((a, b) => lib.suits.indexOf(a) - lib.suits.indexOf(b));
              if (!player.storage.qiqq) {
                player.when({ global: 'roundStart' }).then(() => {
                  delete player.storage.qiqq;
                  player.unmarkSkill('qiqq');
                });
              }
              player.storage.qiqq = suits;
              player.markSkill('qiqq');
            },
          },
          hh: { audio: 'ext:恒梦/audio/qiqqve:3', inherit: 'jijiu' },
          dd: { audio: 'ext:恒梦/audio/qiqqve:3', inherit: 'guose' },
          cc: { audio: 'ext:恒梦/audio/qiqqve:3', inherit: 'lianhuan' },
          ss: { audio: 'ext:恒梦/audio/qiqqve:3', inherit: 'jiuchi' },
          hd: { audio: 'ext:恒梦/audio/qiqqve:3', inherit: 'retieji' },
          hc: {
            audio: 'ext:恒梦/audio/qiqqve:3',
            inherit: 'xinfu_qingtan',
          },
          hs: { audio: 'ext:恒梦/audio/qiqqve:3', inherit: 'guanwei' },
          dc: { audio: 'ext:恒梦/audio/qiqqve:3', inherit: 'dcjianyin' },
          ds: { audio: 'ext:恒梦/audio/qiqqve:3', inherit: 'daoshu' },
          cs: { audio: 'ext:恒梦/audio/qiqqve:3', inherit: 'luanji' },
        },
      },
      tmpk: {
        intro: {
          name: '砝码',
          content: '当前砝码:#',
        },
        marktext: '天',
        mark: true,
        audio: 'ext:恒梦/audio/tmhg:2',
        forced: true,
        popup: false,
        _priority: Infinity,
        global: 'tmpk_hint',
        trigger: { player: 'addToExpansionAfter' },
        filter(event, player) {
          return event.getParent(2).name !== 'iihg_mopd';
        },
        content() {
          let mopd = player.getExpansions('iihg_mopd');
          let gsji = player.getExpansions('iihg_gsji');
          let uzuh = player.getExpansions('iihg_uzuh');
          let hvfu = player.getExpansions('iihg_hvfu');
          let syhd = player.getExpansions('iihg_syhd');
          let zovu = player.getExpansions('iihg_zovu');
          let jing = player.getExpansions('iihg_jing');
          let jkvi = player.getExpansions('iihg_jkvi');
          let cardx = [...mopd, ...gsji, ...uzuh, ...hvfu, ...syhd, ...zovu, ...jing, ...jkvi];
          let basic = 0;
          cardx.forEach((a) => {
            if (get.type(a) == 'basic') basic++;
          });
          let trick = 0;
          cardx.forEach((a) => {
            if (get.type(a) == 'trick') trick++;
          });
          let equip = 0;
          cardx.forEach((a) => {
            if (get.type(a) == 'equip') equip++;
          });
          let delay = 0;
          cardx.forEach((a) => {
            if (get.type(a) == 'delay') delay++;
          });
          player.storage.tmpk = basic + trick * 2 + equip * 3 + delay * 4;
          player.update();
        },
        subSkill: {
          hint: {
            trigger: {
              player: 'addToExpansionAfter',
            },
            forced: true,
            popup: false,
            lastDo: true,
            forceDie: true,
            forceOut: true,
            _priority: 10,
            filter(event, player) {
              if (event._tmpk_checked) return false;
              event._tmpk_checked = true;
              return true;
            },
            markColor: [
              ['rgba(241, 42, 42, 0.75)', 'black'],
              ['', ''],
              ['rgba(18, 4, 4, 0.75)', 'rgb(200, 200, 200)'],
            ],

            content() {
              let red = 0,
                black = 0;
              if (player.storage.tmpk > 4) red++;
              if (player.storage.tmpk <= 4) black++;
              game.broadcastAll(
                function (ind, player) {
                  let bgColor = lib.skill.tmpk_hint.markColor[ind][0],
                    text = '<span style="color: ' + lib.skill.tmpk_hint.markColor[ind][1] + '">天</span>';
                  if (player.marks.tmpk) {
                    player.marks.tmpk.firstChild.style.backgroundColor = bgColor;
                    player.marks.tmpk.firstChild.innerHTML = text;
                  }
                },
                Math.sign(black - red) + 1,
                player
              );
            },
          },
        },
      },
      uihg: {
        audio: 'ext:恒梦/audio/tmhg:2',
        trigger: {
          global: 'roundStart',
        },
        filter(event, player) {
          return game.roundNumber !== 1;
        },
        _priority: 10,
        async cost(event, trigger, player) {
          let num = game.countPlayer();
          event.result = await player
            .chooseTarget('选择一名角色,使其失去所有砝码和天平', [1, num], false)
            .set('filterTarget', (card, player, target) => {
              let skills = target.getSkills(null, false, false);
              for (let i of skills) {
                if (i.indexOf('iihg_') == 0) return true;
              }
            })
            .forResult();
        },
        async content(event, trigger, player) {
          event.targets.forEach((i) => {
            let skillx = lib.skill.iihg.derivation;
            i.removeSkill(skillx);
          });
        },
        ai: {
          result: {
            player(player) {
              return 0;
            },
          },
        },
      },
      iihg: {
        derivation: ['iihg_mopd', 'iihg_gsji', 'iihg_uzuh', 'iihg_hvfu', 'iihg_syhd', 'iihg_zovu', 'iihg_jing', 'iihg_jkvi'],
        audio: 'ext:恒梦/audio/tmhg:2',
        trigger: {
          global: 'roundStart',
        },
        forced: true,
        async content(event, trigger, player) {
          if (
            game.hasPlayer(function (current) {
              return !current.hasSkill('iihg_mopd') && !current.hasSkill('iihg_gsji') && !current.hasSkill('iihg_uzuh') && !current.hasSkill('iihg_hvfu') && !current.hasSkill('iihg_syhd') && !current.hasSkill('iihg_zovu') && !current.hasSkill('iihg_jing') && !current.hasSkill('iihg_jkvi');
            })
          ) {
            const result = await player
              .chooseTarget('持衡:请分配<天平>(摸)', false, function (card, player, target) {
                return !target.hasSkill('iihg_mopd') && !target.hasSkill('iihg_gsji') && !target.hasSkill('iihg_uzuh') && !target.hasSkill('iihg_hvfu') && !target.hasSkill('iihg_syhd') && !target.hasSkill('iihg_zovu') && !target.hasSkill('iihg_jing') && !target.hasSkill('iihg_jkvi');
              })
              .set('ai', function (target) {
                let player = _status.event.player;
                for (let j of lib.character[player.name][3]) {
                  let skill = lib.skill[j];
                  let info = lib.translate[j + '_info'];
                  if (info && info.includes('摸')) return 10;
                }
                return 1;
              })
              .forResult();
            if (result.bool) {
              player.line(result.targets[0], 'medal');
              result.targets[0].addSkill('iihg_mopd');
            }
          }
          if (
            game.hasPlayer(function (current) {
              return !current.hasSkill('iihg_mopd') && !current.hasSkill('iihg_gsji') && !current.hasSkill('iihg_uzuh') && !current.hasSkill('iihg_hvfu') && !current.hasSkill('iihg_syhd') && !current.hasSkill('iihg_zovu') && !current.hasSkill('iihg_jing') && !current.hasSkill('iihg_jkvi');
            })
          ) {
            const result = await player
              .chooseTarget('持衡:请分配<天平>(攻)', false, function (card, player, target) {
                return !target.hasSkill('iihg_mopd') && !target.hasSkill('iihg_gsji') && !target.hasSkill('iihg_uzuh') && !target.hasSkill('iihg_hvfu') && !target.hasSkill('iihg_syhd') && !target.hasSkill('iihg_zovu') && !target.hasSkill('iihg_jing') && !target.hasSkill('iihg_jkvi');
              })
              .set('ai', function (target) {
                let player = _status.event.player;
                for (let j of lib.character[player.name][3]) {
                  let skill = lib.skill[j];
                  let info = lib.translate[j + '_info'];
                  if (info && info.includes('对') && info.includes('伤害')) return 10;
                }
                return 1;
              })
              .forResult();
            if (result.bool) {
              player.line(result.targets[0], 'fire');
              result.targets[0].addSkill('iihg_gsji');
            }
          }
          if (
            game.hasPlayer(function (current) {
              return !current.hasSkill('iihg_mopd') && !current.hasSkill('iihg_gsji') && !current.hasSkill('iihg_uzuh') && !current.hasSkill('iihg_hvfu') && !current.hasSkill('iihg_syhd') && !current.hasSkill('iihg_zovu') && !current.hasSkill('iihg_jing') && !current.hasSkill('iihg_jkvi');
            })
          ) {
            const result = await player
              .chooseTarget('持衡:请分配<天平>(受)', false, function (card, player, target) {
                return !target.hasSkill('iihg_mopd') && !target.hasSkill('iihg_gsji') && !target.hasSkill('iihg_uzuh') && !target.hasSkill('iihg_hvfu') && !target.hasSkill('iihg_syhd') && !target.hasSkill('iihg_zovu') && !target.hasSkill('iihg_jing') && !target.hasSkill('iihg_jkvi');
              })
              .set('ai', function (target) {
                let player = _status.event.player;
                for (let j of lib.character[player.name][3]) {
                  let skill = lib.skill[j];
                  let info = lib.translate[j + '_info'];
                  if (info && info.includes('被') && info.includes('受到')) return 10;
                }
                return 1;
              })
              .forResult();
            if (result.bool) {
              player.line(result.targets[0], 'wood');
              result.targets[0].addSkill('iihg_uzuh');
            }
          }
          if (
            game.hasPlayer(function (current) {
              return !current.hasSkill('iihg_mopd') && !current.hasSkill('iihg_gsji') && !current.hasSkill('iihg_uzuh') && !current.hasSkill('iihg_hvfu') && !current.hasSkill('iihg_syhd') && !current.hasSkill('iihg_zovu') && !current.hasSkill('iihg_jing') && !current.hasSkill('iihg_jkvi');
            })
          ) {
            const result = await player
              .chooseTarget('持衡:请分配<天平>(恢)', false, function (card, player, target) {
                return !target.hasSkill('iihg_mopd') && !target.hasSkill('iihg_gsji') && !target.hasSkill('iihg_uzuh') && !target.hasSkill('iihg_hvfu') && !target.hasSkill('iihg_syhd') && !target.hasSkill('iihg_zovu') && !target.hasSkill('iihg_jing') && !target.hasSkill('iihg_jkvi');
              })
              .set('ai', function (target) {
                let player = _status.event.player;
                for (let j of lib.character[player.name][3]) {
                  let skill = lib.skill[j];
                  let info = lib.translate[j + '_info'];
                  if (info && info.includes('你') && info.includes('回复')) return 10;
                }
                return 1;
              })
              .forResult();
            if (result.bool) {
              player.line(result.targets[0], 'cyan');
              result.targets[0].addSkill('iihg_hvfu');
            }
          }
          if (
            game.hasPlayer(function (current) {
              return !current.hasSkill('iihg_mopd') && !current.hasSkill('iihg_gsji') && !current.hasSkill('iihg_uzuh') && !current.hasSkill('iihg_hvfu') && !current.hasSkill('iihg_syhd') && !current.hasSkill('iihg_zovu') && !current.hasSkill('iihg_jing') && !current.hasSkill('iihg_jkvi');
            })
          ) {
            const result = await player
              .chooseTarget('持衡:请分配<天平>(损)', false, function (card, player, target) {
                return !target.hasSkill('iihg_mopd') && !target.hasSkill('iihg_gsji') && !target.hasSkill('iihg_uzuh') && !target.hasSkill('iihg_hvfu') && !target.hasSkill('iihg_syhd') && !target.hasSkill('iihg_zovu') && !target.hasSkill('iihg_jing') && !target.hasSkill('iihg_jkvi');
              })
              .set('ai', function (target) {
                let player = _status.event.player;
                for (let j of lib.character[player.name][3]) {
                  let skill = lib.skill[j];
                  let info = lib.translate[j + '_info'];
                  if (info && info.includes('你') && info.includes('弃置')) return 10;
                }
                return 1;
              })
              .forResult();
            if (result.bool) {
              player.line(result.targets[0], 'lime');
              result.targets[0].addSkill('iihg_syhd');
            }
          }
          if (
            game.hasPlayer(function (current) {
              return !current.hasSkill('iihg_mopd') && !current.hasSkill('iihg_gsji') && !current.hasSkill('iihg_uzuh') && !current.hasSkill('iihg_hvfu') && !current.hasSkill('iihg_syhd') && !current.hasSkill('iihg_zovu') && !current.hasSkill('iihg_jing') && !current.hasSkill('iihg_jkvi');
            })
          ) {
            const result = await player
              .chooseTarget('持衡:请分配<天平>(佐)', false, function (card, player, target) {
                return !target.hasSkill('iihg_mopd') && !target.hasSkill('iihg_gsji') && !target.hasSkill('iihg_uzuh') && !target.hasSkill('iihg_hvfu') && !target.hasSkill('iihg_syhd') && !target.hasSkill('iihg_zovu') && !target.hasSkill('iihg_jing') && !target.hasSkill('iihg_jkvi');
              })
              .set('ai', function (target) {
                let player = _status.event.player;
                for (let j of lib.character[player.name][3]) {
                  let skill = lib.skill[j];
                  let info = lib.translate[j + '_info'];
                  if (info && (info.includes('桃') || info.includes('桃园结义') || info.includes('五谷丰登')) && info.includes('使用')) return 10;
                }
                return 1;
              })
              .forResult();
            if (result.bool) {
              player.line(result.targets[0], 'green');
              result.targets[0].addSkill('iihg_zovu');
            }
          }
          if (
            game.hasPlayer(function (current) {
              return !current.hasSkill('iihg_mopd') && !current.hasSkill('iihg_gsji') && !current.hasSkill('iihg_uzuh') && !current.hasSkill('iihg_hvfu') && !current.hasSkill('iihg_syhd') && !current.hasSkill('iihg_zovu') && !current.hasSkill('iihg_jing') && !current.hasSkill('iihg_jkvi');
            })
          ) {
            const result = await player
              .chooseTarget('持衡:请分配<天平>(技)', false, function (card, player, target) {
                return !target.hasSkill('iihg_mopd') && !target.hasSkill('iihg_gsji') && !target.hasSkill('iihg_uzuh') && !target.hasSkill('iihg_hvfu') && !target.hasSkill('iihg_syhd') && !target.hasSkill('iihg_zovu') && !target.hasSkill('iihg_jing') && !target.hasSkill('iihg_jkvi');
              })
              .set('ai', function (target) {
                let player = _status.event.player;
                for (let j of lib.character[player.name][3]) {
                  let skill = lib.skill[j];
                  let info = lib.translate[j + '_info'];
                  if (info && (info.includes('出牌阶段') || info.includes('当作') || info.includes('当做') || info.includes('视为'))) return 10;
                }
                return 1;
              })
              .forResult();
            if (result.bool) {
              player.line(result.targets[0], 'water');
              result.targets[0].addSkill('iihg_jing');
            }
          }
          if (
            game.hasPlayer(function (current) {
              return !current.hasSkill('iihg_mopd') && !current.hasSkill('iihg_gsji') && !current.hasSkill('iihg_uzuh') && !current.hasSkill('iihg_hvfu') && !current.hasSkill('iihg_syhd') && !current.hasSkill('iihg_zovu') && !current.hasSkill('iihg_jing') && !current.hasSkill('iihg_jkvi');
            })
          ) {
            const result = await player
              .chooseTarget('持衡:请分配<天平>(静)', false, function (card, player, target) {
                return !target.hasSkill('iihg_mopd') && !target.hasSkill('iihg_gsji') && !target.hasSkill('iihg_uzuh') && !target.hasSkill('iihg_hvfu') && !target.hasSkill('iihg_syhd') && !target.hasSkill('iihg_zovu') && !target.hasSkill('iihg_jing') && !target.hasSkill('iihg_jkvi');
              })
              .set('ai', function (target) {
                let player = _status.event.player;
                for (let j of lib.character[player.name][3]) {
                  let skill = lib.skill[j];
                  let info = lib.translate[j + '_info'];
                  if (info && info.includes('防止') && info.includes('不能')) return 10;
                }
                return 1;
              })
              .forResult();
            if (result.bool) {
              player.line(result.targets[0], 'blue');
              result.targets[0].addSkill('iihg_jkvi');
            }
          }
        },
        onremove(player, skill) {
          for (const p of game.players) {
            p.removeSkills(['iihg_mopd', 'iihg_gsji', 'iihg_uzuh', 'iihg_hvfu', 'iihg_syhd', 'iihg_zovu', 'iihg_jing', 'iihg_jkvi', 'tmpk']);
          }
        },
        subSkill: {
          mopd: {
            marktext: '摸',
            mark: true,
            intro: {
              content: 'expansion',
              markcount: 'expansion',
            },
            onremove(player, skill) {
              const preger = game.filterPlayer((i) => {
                return i.name === 'tmhg';
              })[0],
                cards = player.getExpansions(skill);
              if (cards.length && preger && preger.isIn()) preger.gain(cards, 'give', player);
              else player.loseToDiscardpile(cards);
              player.storage.tmpk = 0;
            },
            _priority: 6,
            forced: true,
            trigger: {
              player: 'gainAfter',
            },
            filter(event, player) {
              let evt = event.getParent('phaseDraw');
              if (evt && event.player == evt.player) return false;
              return event.parent.name != 'iihg2' && event.parent.name !== 'viig' && event.getParent(2).name !== 'iihg2';
            },
            content() {
              player.addToExpansion(get.cards(1), 'gain2').gaintag.add('iihg_mopd');
            },
          },
          gsji: {
            marktext: '攻',
            mark: true,
            intro: {
              content: 'expansion',
              markcount: 'expansion',
            },
            onremove(player, skill) {
              const preger = game.filterPlayer((i) => {
                return i.name === 'tmhg';
              })[0],
                cards = player.getExpansions(skill);
              if (cards.length && preger && preger.isIn()) preger.gain(cards, 'give', player);
              else player.loseToDiscardpile(cards);
              player.storage.tmpk = 0;
            },
            _priority: 6,
            forced: true,
            trigger: {
              source: 'damageAfter',
            },
            content() {
              player.addToExpansion(get.cards(1), 'gain2').gaintag.add('iihg_gsji');
            },
          },
          uzuh: {
            marktext: '受',
            mark: true,
            intro: {
              content: 'expansion',
              markcount: 'expansion',
            },
            onremove(player, skill) {
              const preger = game.filterPlayer((i) => {
                return i.name === 'tmhg';
              })[0],
                cards = player.getExpansions(skill);
              if (cards.length && preger && preger.isIn()) preger.gain(cards, 'give', player);
              else player.loseToDiscardpile(cards);
              player.storage.tmpk = 0;
            },
            _priority: 6,
            forced: true,
            trigger: {
              player: 'damageAfter',
            },
            content() {
              player.addToExpansion(get.cards(1), 'gain2').gaintag.add('iihg_uzuh');
            },
          },
          zovu: {
            marktext: '佐',
            mark: true,
            intro: {
              content: 'expansion',
              markcount: 'expansion',
            },
            onremove(player, skill) {
              const preger = game.filterPlayer((i) => {
                return i.name === 'tmhg';
              })[0],
                cards = player.getExpansions(skill);
              if (cards.length && preger && preger.isIn()) preger.gain(cards, 'give', player);
              else player.loseToDiscardpile(cards);
              player.storage.tmpk = 0;
            },
            _priority: 6,
            forced: true,
            trigger: {
              player: 'useCardToPlayered',
            },
            filter(event, player, name) {
              return get.effect(event.player, event.card, event.player, event.player) > 0;
            },
            content() {
              player.addToExpansion(get.cards(1), 'gain2').gaintag.add('iihg_zovu');
            },
          },
          hvfu: {
            marktext: '恢',
            mark: true,
            intro: {
              content: 'expansion',
              markcount: 'expansion',
            },
            onremove(player, skill) {
              const preger = game.filterPlayer((i) => {
                return i.name === 'tmhg';
              })[0],
                cards = player.getExpansions(skill);
              if (cards.length && preger && preger.isIn()) preger.gain(cards, 'give', player);
              else player.loseToDiscardpile(cards);
              player.storage.tmpk = 0;
            },
            _priority: 6,
            forced: true,
            trigger: {
              player: 'recoverAfter',
            },
            content() {
              player.addToExpansion(get.cards(1), 'gain2').gaintag.add('iihg_hvfu');
            },
          },
          jing: {
            marktext: '技',
            mark: true,
            intro: {
              content: 'expansion',
              markcount: 'expansion',
            },
            onremove(player, skill) {
              const preger = game.filterPlayer((i) => {
                return i.name === 'tmhg';
              })[0],
                cards = player.getExpansions(skill);
              if (cards.length && preger && preger.isIn()) preger.gain(cards, 'give', player);
              else player.loseToDiscardpile(cards);
              player.storage.tmpk = 0;
            },
            trigger: {
              player: ['useSkill', 'logSkillBegin', 'useCard', 'respond'],
            },
            _priority: 2,
            forced: true,
            popup: false,
            filter(event, player) {
              if (['global', 'equip'].includes(event.type)) return false;
              let skill = event.sourceSkill || event.skill;
              if (!skill || skill === 'iihg_jing') return false;
              let info = get.info(skill);
              while (true) {
                if (!info || info.charlotte || info.equipSkill) return false;
                if (info && !info.sourceSkill) break;
                skill = info.sourceSkill;
                info = get.info(skill);
              }
              return true;
            },
            content() {
              player.addToExpansion(get.cards(), 'gain2').gaintag.add('iihg_jing');
            },
          },
          syhd: {
            marktext: '损',
            mark: true,
            intro: {
              content: 'expansion',
              markcount: 'expansion',
            },
            onremove(player, skill) {
              const preger = game.filterPlayer((i) => {
                return i.name === 'tmhg';
              })[0],
                cards = player.getExpansions(skill);
              if (cards.length && preger && preger.isIn()) preger.gain(cards, 'give', player);
              else player.loseToDiscardpile(cards);
              player.storage.tmpk = 0;
            },
            _priority: 6,
            forced: true,
            trigger: {
              player: 'useCardToPlayered',
            },
            filter(event, player) {
              if (event.card.name == 'jiu') return false;
              return get.effect(event.player, event.card, event.player, event.player) < 0;
            },
            content() {
              player.addToExpansion(get.cards(1), 'gain2').gaintag.add('iihg_syhd');
            },
          },
          jkvi: {
            marktext: '静',
            mark: true,
            intro: {
              content: 'expansion',
              markcount: 'expansion',
            },
            onremove(player, skill) {
              const preger = game.filterPlayer((i) => {
                return i.name === 'tmhg';
              })[0],
                cards = player.getExpansions(skill);
              if (cards.length && preger && preger.isIn()) preger.gain(cards, 'give', player);
              else player.loseToDiscardpile(cards);
              player.storage.tmpk = 0;
            },
            _priority: 6,
            forced: true,
            trigger: {
              player: 'phaseAfter',
            },
            content() {
              player.addToExpansion(get.cards(1), 'gain2').gaintag.add('iihg_jkvi');
            },
          },
        },
        group: ['iihg1', 'iihg2'],
      },
      iihg1: {
        forced: true,
        trigger: {
          global: 'gameDrawAfter',
        },
        content() {
          game.players.forEach((i) => {
            i.addSkill('tmpk');
          });
        },
      },
      iihg2: {
        audio: 'ext:恒梦/audio/tmhg:2',
        init(player) {
          if (!player.storage.iihg2) player.storage.iihg2 = [];
        },
        trigger: {
          global: 'tmpkAfter',
        },
        logTarget: 'player',
        filter(event, player) {
          if (!event.player.storage.tmpk) return false;
          let x = event.player.countMark('tmpk');
          let num = game.filterPlayer(function (current) {
            let a = current.countMark('tmpk');
            return current !== event.player && a == x;
          });
          return num.length >= 2 && event.getParent(2).name !== 'iihg2';
        },
        content() {
          'step 0';
          player.removeSkill('viig');
          const name = get.translation(trigger.player),
            x = trigger.player.countMark('tmpk'),
            y = Math.ceil(x / 2),
            z = Math.ceil(x / 4);
          const list = game.filterPlayer(function (current) {
            let a = current.countMark('tmpk');
            return current !== trigger.player && a == x;
          });
          list.forEach((i) => player.storage.iihg2.push(i));
          if (trigger.player.hasSkill('iihg_mopd')) {
            if (trigger.player.countMark('tmpk') <= 4) {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['令' + name + '摸' + y + '张牌', '令' + name + '弃' + y + '张牌'])
                .set('target', trigger.player);
            } else {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['令' + name + '摸' + x + '张牌', '令' + name + '弃' + x + '张牌'])
                .set('target', trigger.player);
            }
            event.goto(1);
          }
          if (trigger.player.hasSkill('iihg_gsji') || trigger.player.hasSkill('iihg_uzuh') || trigger.player.hasSkill('iihg_hvfu')) {
            if (trigger.player.countMark('tmpk') <= 4) {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['令' + name + '回复一点体力', '令' + name + '失去一点体力'])
                .set('target', trigger.player);
            } else {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['令' + name + '回复' + z + '点体力', '令' + name + '失去' + z + '点体力'])
                .set('target', trigger.player);
            }
            event.goto(1);
          }
          if (trigger.player.hasSkill('iihg_syhd') || trigger.player.hasSkill('iihg_zovu')) {
            if (trigger.player.countMark('tmpk') <= 4) {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['视为' + name + '使用一张桃', '视为对' + name + '使用一张杀'])
                .set('target', trigger.player);
              event.goto(7);
            } else {
              player
                .chooseControl(function () {
                  return '选项一';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['视为' + name + '使用牌堆顶' + x + '张可对其使用的张牌', '取消']);
              event.goto(8);
            }
          }
          if (trigger.player.hasSkill('iihg_jing') || trigger.player.hasSkill('iihg_jkvi')) {
            if (trigger.player.countMark('tmpk') <= 4) {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['令' + name + '获得一个额外的摸牌阶段', '令' + name + '跳过一个摸牌阶段'])
                .set('target', trigger.player);
              event.goto(1);
            } else {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['令' + name + '获得一个额外回合', '令' + name + '翻面'])
                .set('target', trigger.player);
              event.goto(1);
            }
          }
          ('step 1');
          const j = trigger.player.countMark('tmpk'),
            k = Math.ceil(j / 2),
            l = Math.ceil(j / 4);
          if (trigger.player.hasSkill('iihg_mopd')) {
            if (trigger.player.countMark('tmpk') <= 4) {
              if (result.index === 0) {
                trigger.player.draw(k);
              } else {
                trigger.player.chooseToDiscard(k, 'he', true);
              }
            } else {
              if (result.index === 0) {
                trigger.player.draw(j);
              } else {
                trigger.player.chooseToDiscard(j, 'he', true);
              }
            }
            player.gain(trigger.player.getExpansions('iihg_mopd'), 'give', player);
            event.goto(2);
          }
          if (trigger.player.hasSkill('iihg_gsji') || trigger.player.hasSkill('iihg_uzuh') || trigger.player.hasSkill('iihg_hvfu')) {
            if (trigger.player.countMark('tmpk') <= 4) {
              if (result.index === 0) {
                if (trigger.player.isDamaged) trigger.player.recover();
              } else {
                trigger.player.loseHp();
              }
            } else {
              if (result.index === 0) {
                trigger.player.recover(l);
              } else {
                trigger.player.loseHp(l);
              }
            }
            player.gain(trigger.player.getExpansions('iihg_gsji'), 'give', player);
            player.gain(trigger.player.getExpansions('iihg_uzuh'), 'give', player);
            player.gain(trigger.player.getExpansions('iihg_hvfu'), 'give', player);
            event.goto(2);
          }
          if (trigger.player.hasSkill('iihg_syhd') || trigger.player.hasSkill('iihg_zovu')) {
            if (result.index === 0) {
              trigger.player.draw(k);
            } else {
              trigger.player.chooseToDiscard(k, 'he', true);
            }
            player.gain(trigger.player.getExpansions('iihg_syhd'), 'give', player);
            player.gain(trigger.player.getExpansions('iihg_zovu'), 'give', player);
            event.goto(2);
          }
          if (trigger.player.hasSkill('iihg_jing') || trigger.player.hasSkill('iihg_jkvi')) {
            if (trigger.player.countMark('tmpk') <= 4) {
              if (result.index === 0) {
                trigger.player.addTempSkill('iihg2Draw', {
                  player: 'phaseAfter',
                });
              } else {
                trigger.player.skip('phaseDraw');
              }
            } else {
              if (result.index === 0) {
                trigger.player.phase('nodelay');
              } else {
                trigger.player.turnOver();
              }
            }
            player.gain(trigger.player.getExpansions('iihg_jing'), 'give', player);
            player.gain(trigger.player.getExpansions('iihg_jkvi'), 'give', player);
            event.goto(2);
          }
          ('step 2');
          const mopd = trigger.player.getExpansions('iihg_mopd');
          const gsji = trigger.player.getExpansions('iihg_gsji');
          const uzuh = trigger.player.getExpansions('iihg_uzuh');
          const hvfu = trigger.player.getExpansions('iihg_hvfu');
          const syhd = trigger.player.getExpansions('iihg_syhd');
          const zovu = trigger.player.getExpansions('iihg_zovu');
          const jing = trigger.player.getExpansions('iihg_jing');
          const jkvi = trigger.player.getExpansions('iihg_jkvi');
          const cardx = [...mopd, ...gsji, ...uzuh, ...hvfu, ...syhd, ...zovu, ...jing, ...jkvi];
          let basic = 0;
          cardx.forEach((a) => {
            if (get.type(a) == 'basic') basic++;
          });
          let trick = 0;
          cardx.forEach((a) => {
            if (get.type(a) == 'trick') trick++;
          });
          let equip = 0;
          cardx.forEach((a) => {
            if (get.type(a) == 'equip') equip++;
          });
          trigger.player.storage.tmpk = basic + trick * 2 + equip * 3;
          trigger.player.update();
          ('step 3');
          const n = player.storage.iihg2.shift(),
            nam = get.translation(n),
            a = n.countMark('tmpk'),
            b = Math.ceil(a / 2),
            c = Math.ceil(a / 4);
          event.n = n;
          if (n.hasSkill('iihg_mopd')) {
            if (n.countMark('tmpk') <= 4) {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['令' + nam + '摸' + b + '张牌', '令' + nam + '弃' + b + '张牌'])
                .set('target', n);
            } else {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['令' + nam + '摸' + a + '张牌', '令' + nam + '弃' + a + '张牌'])
                .set('target', n);
            }
            event.goto(4);
          }
          if (n.hasSkill('iihg_gsji') || n.hasSkill('iihg_uzuh') || n.hasSkill('iihg_hvfu')) {
            if (n.countMark('tmpk') <= 4) {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['令' + nam + '回复一点体力', '令' + nam + '失去一点体力'])
                .set('target', n);
            } else {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['令' + nam + '回复' + c + '点体力', '令' + nam + '失去' + c + '点体力'])
                .set('target', n);
            }
            event.goto(4);
          }
          if (n.hasSkill('iihg_syhd') || n.hasSkill('iihg_zovu')) {
            if (n.countMark('tmpk') <= 4) {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['视为' + nam + '使用一张桃', '视为对' + nam + '使用一张杀'])
                .set('target', n);
              event.goto(13);
            } else {
              player
                .chooseControl(function () {
                  return '选项一';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['视为' + nam + '使用牌堆顶可对其使用的' + a + '张牌', '取消'])
                .set('target', n);
              event.goto(14);
            }
          }
          if (n.hasSkill('iihg_jing') || n.hasSkill('iihg_jkvi')) {
            if (n.countMark('tmpk') <= 4) {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['令' + nam + '获得一个额外的摸牌阶段', '令' + nam + '跳过一个摸牌阶段'])
                .set('target', n);
            } else {
              player
                .chooseControl(function () {
                  const player = _status.event.player,
                    target = _status.event.target;
                  return get.attitude(player, target) > 0 ? '选项一' : '选项二';
                })
                .set('prompt', '持衡:请选择一项')
                .set('choiceList', ['令' + nam + '获得一个额外回合', '令' + nam + '翻面'])
                .set('target', n);
            }
            event.goto(4);
          }
          ('step 4');
          const u = event.n.countMark('tmpk'),
            i = Math.ceil(u / 2),
            o = Math.ceil(u / 4);
          if (event.n.hasSkill('iihg_mopd')) {
            if (event.n.countMark('tmpk') <= 4) {
              if (result.index === 0) {
                event.n.draw(i);
              } else {
                event.n.chooseToDiscard(i, 'he', true);
              }
            } else {
              if (result.index === 0) {
                event.n.draw(u);
              } else {
                event.n.chooseToDiscard(u, 'he', true);
              }
            }
            const mopds = event.n.getExpansions('iihg_mopd');
            event.goto(5);
          }
          if (event.n.hasSkill('iihg_gsji') || event.n.hasSkill('iihg_uzuh') || event.n.hasSkill('iihg_hvfu')) {
            if (event.n.countMark('tmpk') <= 4) {
              if (result.index === 0) {
                if (event.n.isDamaged) event.n.recover();
              } else {
                event.n.loseHp();
              }
            } else {
              if (result.index === 0) {
                event.n.recover(o);
              } else {
                event.n.loseHp(o);
              }
            }
            const gsjis = event.n.getExpansions('iihg_gsji');
            const uzuhs = event.n.getExpansions('iihg_uzuh');
            const hvfus = event.n.getExpansions('iihg_hvfu');
            const guhs = [...gsjis, ...uzuhs, ...hvfus];
            event.goto(5);
          }
          if (event.n.hasSkill('iihg_syhd') || event.n.hasSkill('iihg_zovu')) {
            if (event.n.countMark('tmpk') <= 4) {
              if (result.index === 0) {
                event.n.draw(i);
              } else {
                event.n.chooseToDiscard(i, true);
              }
            } else {
              if (result.index === 0) {
                event.n.draw(u);
              } else {
                event.n.chooseToDiscard(u, true);
              }
            }
            const syhds = event.n.getExpansions('iihg_syhd');
            const zovus = event.n.getExpansions('iihg_zovu');
            const szs = [...syhds, ...zovus];
            event.goto(5);
          }
          if (event.n.hasSkill('iihg_jing') || event.n.hasSkill('iihg_jkvi')) {
            if (event.n.countMark('tmpk') <= 4) {
              if (result.index === 0) {
                event.n.addTempSkill('iihg2Draw', {
                  player: 'phaseAfter',
                });
              } else {
                event.n.skip('phaseDraw');
              }
            } else {
              if (result.index === 0) {
                event.n.phase('nodelay');
              } else {
                event.n.turnOver();
              }
            }
            const jings = event.n.getExpansions('iihg_jing');
            const jkvis = event.n.getExpansions('iihg_jkvi');
            const jjs = [...jings, ...jkvis];
            event.goto(5);
          }
          ('step 5');
          const mopd1 = event.n.getExpansions('iihg_mopd');
          const gsji1 = event.n.getExpansions('iihg_gsji');
          const uzuh1 = event.n.getExpansions('iihg_uzuh');
          const hvfu1 = event.n.getExpansions('iihg_hvfu');
          const syhd1 = event.n.getExpansions('iihg_syhd');
          const zovu1 = event.n.getExpansions('iihg_zovu');
          const jing1 = event.n.getExpansions('iihg_jing');
          const jkvi1 = event.n.getExpansions('iihg_jkvi');
          const cardx1 = [...mopd1, ...gsji1, ...uzuh1, ...hvfu1, ...syhd1, ...zovu1, ...jing1, ...jkvi1];
          let basicm = 0;
          cardx1.forEach((a) => {
            if (get.type(a) == 'basic') basicm++;
          });
          let trickm = 0;
          cardx1.forEach((a) => {
            if (get.type(a) == 'trick') trickm++;
          });
          let equipm = 0;
          cardx1.forEach((a) => {
            if (get.type(a) == 'equip') equipm++;
          });
          let delaym = 0;
          cardx1.forEach((a) => {
            if (get.type(a) == 'delay') delaym++;
          });
          event.n.storage.tmpk = basicm + trickm * 2 + equipm * 3 + delaym * 4;
          ('step 6');
          if (player.storage.iihg2.length) {
            event.goto(3);
          } else {
            event.finish();
          }
          ('step 7');
          if (result.index === 0) {
            if (get.itemtype(trigger.player) == 'player' && trigger.player.isDamaged()) {
              player.useCard({ name: 'tao' }, trigger.player);
            }
          } else {
            if (get.itemtype(trigger.player) == 'player' && player.canUse('sha', trigger.player, false)) {
              player.useCard({ name: 'sha' }, trigger.player, false, 'noai');
            }
          }
          player.gain(trigger.player.getExpansions('iihg_syhd'), 'give', player);
          player.gain(trigger.player.getExpansions('iihg_zovu'), 'give', player);
          event.goto(2);
          ('step 8');
          if (result.index === 0) {
            player.addTempSkill('fengyin', { player: 'iihg2After' });
            event.num = 1;
            const m = trigger.player.countMark('tmpk'),
              n = Math.ceil(m / 2),
              o = Math.ceil(m / 3);
            const cards = get.cards(m);
            player.storage.cs = cards;
            const cardy = cards.filter(function (i) {
              return player.hasUseTarget(i);
            });
            event.cardy = cardy;
            game.cardsGotoOrdering(cards);
            game.log(player, '展示【牌堆顶】的' + m + '张牌:', player.storage.cs);
          }
          ('step 9');
          const cards2 = player.storage.cs.filter(function (i) {
            return player.hasUseTarget(i);
          });
          if (cards2.length) {
            const next = player.chooseButton(['是否使用其中一张牌？', cards2]);
            next.set('ai', function (button) {
              const player = _status.event.player;
              const target = _status.event.target;
              return get.effect(
                target,
                {
                  name: button.link[2],
                  nature: button.link[3],
                },
                player,
                player
              );
            }).set('target', trigger.player);
          } else event.goto(11);
          ('step 10');
          if (result.bool) {
            const card = result.links[0];
            player.chooseUseTarget(true, card, false).set('filterTarget', function (card, player, target) {
              return [trigger.player, player].includes(target);
            });
            player.storage.cs.yiiu(card);
          }
          ('step 11');
          event.num++;
          if (event.num <= 4) {
            event.goto(9);
          }
          ('step 12');
          const loses = player.storage.cs;
          player.loseToDiscardpile(loses);
          player.gain(trigger.player.getExpansions('iihg_syhd'), 'give', player);
          player.gain(trigger.player.getExpansions('iihg_zovu'), 'give', player);
          event.goto(2);
          ('step 13');
          if (result.index === 0) {
            if (get.itemtype(event.n) == 'player' && event.n.isDamaged()) {
              player.useCard({ name: 'tao' }, event.n);
            }
          } else {
            if (get.itemtype(event.n) == 'player' && player.canUse('sha', event.n, false)) {
              player.useCard({ name: 'sha' }, event.n, false, 'noai');
            }
          }
          const syhdx = event.n.getExpansions('iihg_syhd');
          const zovux = event.n.getExpansions('iihg_zovu');
          const szx = [...syhdx, ...zovux];
          event.goto(5);
          ('step 14');
          if (result.index === 0) {
            player.addTempSkill('fengyin', { player: 'iihg2After' });
            event.num = 1;
            const m = event.n.countMark('tmpk');
            const cards = get.cards(m);
            player.storage.cs = cards;
            const cardy = cards.filter(function (i) {
              return player.hasUseTarget(i);
            });
            event.cardy = cardy;
            game.cardsGotoOrdering(cards);
            game.log(player, '展示【牌堆顶】的' + m + '张牌:', player.storage.cs);
          }
          ('step 15');
          const car = player.storage.cs.filter(function (i) {
            return player.hasUseTarget(i);
          });
          if (car.length) {
            const next = player.chooseButton(['是否使用其中一张牌？', car]);
            next.set('ai', function (button) {
              const player = _status.event.player;
              const target = _status.event.target;
              return get.effect(
                target,
                {
                  name: button.link[2],
                  nature: button.link[3],
                },
                player,
                player
              );
            }).set('target', event.n);
          } else event.goto(17);
          ('step 16');
          if (result.bool) {
            const card = result.links[0];
            player.chooseUseTarget(true, card, false).set('filterTarget', function (card, player, target) {
              return target == event.n;
            });
            player.storage.cs.yiiu(card);
          }
          ('step 17');
          event.num++;
          if (event.num <= 4) {
            event.goto(15);
          }
          ('step 18');
          const los = player.storage.cs;
          player.loseToDiscardpile(los);
          const syhdy = event.n.getExpansions('iihg_syhd');
          const zovuy = event.n.getExpansions('iihg_zovu');
          const szy = [...syhdy, ...zovuy];
          event.goto(5);
        },
      },
      iihg2Draw: {
        trigger: { player: 'phaseDrawBegin2' },
        forced: true,
        preHidden: true,
        filter(event, player) {
          return !event.numFixed;
        },
        content() {
          trigger.num += 2;
        },
        ai: {
          threaten: 1.5,
        },
      },
      viig: {
        audio: 'ext:恒梦/audio/tmhg:2',
        init(player) {
          if (!player.storage.viig) player.storage.viig = [];
        },
        trigger: {
          player: ['damageEnd', 'phaseEnd'],
          source: 'damageSource',
        },
        filter(event, player) {
          if (event.parent.name == 'iihg2') return false;
          let list = game.filterPlayer(function (current) {
            return current.countMark('tmpk') >= 1;
          });
          return list.length;
        },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseTarget('执秤:获得一名角色的砝码', (card, player, target) => {
              return target.storage.tmpk > 0;
            })
            .set('ai', (target) => {
              const tmpk = [];
              game.players.forEach((i) => {
                tmpk.push(i.storage.tmpk);
              });
              tmpk.sort((a, b) => b - a);
              return target.storage.tmpk;
            })
            .forResult();
        },
        async content(event, trigger, player) {
          const targeted = event.targets[0];
          player.storage.viig.push(targeted);
          player.line(targeted, 'blue');
          let mopd = targeted.getExpansions('iihg_mopd');
          let gsji = targeted.getExpansions('iihg_gsji');
          let uzuh = targeted.getExpansions('iihg_uzuh');
          let hvfu = targeted.getExpansions('iihg_hvfu');
          let syhd = targeted.getExpansions('iihg_syhd');
          let zovu = targeted.getExpansions('iihg_zovu');
          let jing = targeted.getExpansions('iihg_jing');
          let jkvi = targeted.getExpansions('iihg_jkvi');
          let cards = [...mopd, ...gsji, ...uzuh, ...hvfu, ...syhd, ...zovu, ...jing, ...jkvi];
          let dialog = ['执秤:选择获得一张砝码'];
          let basics = [],
            tricks = [],
            equips = [],
            delays = [];
          for (let i of cards) {
            if (get.type(i) == 'basic') basics.push(i);
            if (get.type(i) == 'trick') tricks.push(i);
            if (get.type(i) == 'equip') equips.push(i);
            if (get.type(i) == 'delay') delays.push(i);
          }
          if (basics.length) {
            dialog.push('<div class="text center">基本牌</div>');
            dialog.push(basics);
          }
          if (tricks.length) {
            dialog.push('<div class="text center">锦囊牌</div>');
            dialog.push(tricks);
          }
          if (equips.length) {
            dialog.push('<div class="text center">装备牌</div>');
            dialog.push(equips);
          }
          if (delays.length) {
            dialog.push('<div class="text center">延时牌</div>');
            dialog.push(delays);
          }
          const links = await player
            .chooseButton(dialog, false)
            .set('ai', (button) => {
              return get.value(button.link);
            })
            .forResultLinks();
          if (!links || !links.length) return;
          player.gain(links, 'gain2');
          let mopdx = player.storage.viig[0].getExpansions('iihg_mopd');
          let gsjix = player.storage.viig[0].getExpansions('iihg_gsji');
          let uzuhx = player.storage.viig[0].getExpansions('iihg_uzuh');
          let hvfux = player.storage.viig[0].getExpansions('iihg_hvfu');
          let syhdx = player.storage.viig[0].getExpansions('iihg_syhd');
          let zovux = player.storage.viig[0].getExpansions('iihg_zovu');
          let jingx = player.storage.viig[0].getExpansions('iihg_jing');
          let jkvix = player.storage.viig[0].getExpansions('iihg_jkvi');
          let cardxx = [...mopdx, ...gsjix, ...uzuhx, ...hvfux, ...syhdx, ...zovux, ...jingx, ...jkvix];
          let basicx = 0;
          cardxx.forEach((a) => {
            if (get.type(a) == 'basic') basicx++;
          });
          let trickx = 0;
          cardxx.forEach((a) => {
            if (get.type(a) == 'trick') trickx++;
          });
          let equipx = 0;
          cardxx.forEach((a) => {
            if (get.type(a) == 'equip') equipx++;
          });
          let delayx = 0;
          cardxx.forEach((a) => {
            if (get.type(a) == 'delay') delayx++;
          });
          player.storage.viig[0].storage.tmpk = basicx + trickx * 2 + equipx * 3 + delayx * 4;
          let filterTarget = function (card, player, target) {
            return target.hasSkill('iihg_mopd') || target.hasSkill('iihg_gsji') || target.hasSkill('iihg_uzuh') || target.hasSkill('iihg_hvfu') || target.hasSkill('iihg_syhd') || target.hasSkill('iihg_zovu') || target.hasSkill('iihg_jing') || target.hasSkill('iihg_jkvi');
          };
          if (
            !player.countCards('h') ||
            !game.hasPlayer(function (current) {
              return filterTarget(null, player, current);
            })
          )
            return;
          const resulta = await player
            .chooseCardTarget({
              forced: true,
              prompt: '将一张手牌作为<砝码>置于其他角色的武将牌上',
              filterTarget: filterTarget,
              filterCard: true,
              position: 'h',
              ai1(card) {
                if (get.type(card, false) == 'equip') return 6 - get.value(card);
                return 7 - get.value(card);
              },
              ai2(target) {
                const tmpk = [];
                game.players.forEach((i) => {
                  tmpk.push(i.storage.tmpk);
                });
                tmpk.sort((a, b) => b - a);
                let o = 0,
                  p = 0;
                switch (get.type(ui.selected.cards[0])) {
                  case 'basic':
                    o = 1;
                    break;
                  case 'trick':
                    o = 2;
                    break;
                  case 'equip':
                    o = 3;
                    break;
                  case 'delay':
                    o = 4;
                    break;
                }
                if (target.storage.tmpk >= tmpk[1]) p = 15;
                return 30 - Math.abs(target.storage.tmpk + o - tmpk[1]) - p;
              },
            })
            .forResult();
          let target = resulta.targets[0];
          let cardsx = resulta.cards;
          if (target.hasSkill('iihg_mopd')) target.addToExpansion(cardsx, player, 'give').gaintag.add('iihg_mopd');
          if (target.hasSkill('iihg_gsji')) target.addToExpansion(cardsx, player, 'give').gaintag.add('iihg_gsji');
          if (target.hasSkill('iihg_uzuh')) target.addToExpansion(cardsx, player, 'give').gaintag.add('iihg_uzuh');
          if (target.hasSkill('iihg_hvfu')) target.addToExpansion(cardsx, player, 'give').gaintag.add('iihg_hvfu');
          if (target.hasSkill('iihg_syhd')) target.addToExpansion(cardsx, player, 'give').gaintag.add('iihg_syhd');
          if (target.hasSkill('iihg_zovu')) target.addToExpansion(cardsx, player, 'give').gaintag.add('iihg_zovu');
          if (target.hasSkill('iihg_jing')) target.addToExpansion(cardsx, player, 'give').gaintag.add('iihg_jing');
          if (target.hasSkill('iihg_jkvi')) target.addToExpansion(cardsx, player, 'give').gaintag.add('iihg_jkvi');
          player.line(target, 'green');
          player.storage.viig = [];
        },
        ai: {
          maixue_hp: true,
          maixue_defend: true,
          result: {
            player: 1,
          },
        },
      },
      tmhgFu: {},
      ystj: {
        audio: 'ext:恒梦/audio/geve:7',
        trigger: { global: 'roundStart' },
        forced: true,
        silent: true,
        init(player) {
          if (!player.storage.ystj) player.storage.ystj = [];
        },
        content() {
          game.broadcastAll(function (g) {
            g.forEach((i) => {
              i.classList.remove('hidden');
              i.removeSkill('ystj_m3_hidden');
            });
          }, game.players);
          game.log(get.translation(player) + '发动了【咏叹】');
          const num = ['1', '2', '3', '4', '5', '6', '7', '8'].randomGet(),
            skill = 'ystj_' + num;
          if (!lib.skill.ystj.derivation.includes(skill)) event.finish();
          else {
            player.storage.ystj.push(num);
            event.weather_skill = skill;
          }
          player.addTempSkill('ystj_expire', 'roundStart');
          game.broadcastAll(
            function (bg) {
              _status.ystjBackground && _status.ystj.delete();
              _status.ystjBackground = game.createBackground(bg).classList.remove('blurbg');
            },
            'extension/恒梦/image/background/' + event.weather_skill + '_bg.jpg'
          );
          game.addVideo('skill', player, ['ystj', [true, event.weather_skill + '_bg']]);
        },
        video(player, info) {
          if (info[0]) {
            _status.tempBackground = info[1];
          } else {
            delete _status.tempBackground;
          }
          game.updateBackground();
        },
        group: ['ystj_phasee', 'ystj_m1_record'],
        derivation: ['ystj_1', 'ystj_2', 'ystj_3', 'ystj_4', 'ystj_5', 'ystj_6', 'ystj_7', 'ystj_8'],
        subSkill: {
          phasee: {
            audio: 'ystj',
            trigger: { global: 'phaseBeginStart' },
            forced: true,
            async content(event, trigger, player) {
              const key = 'ystj_' + player.playerid,
                players = game.players.concat(game.dead);
              for (const current of players) {
                current.removeAdditionalSkill(key);
              }
              game.log(get.translation(player) + '发动了【咏叹】');
              const skill = 'ystj_' + player.storage.ystj[player.storage.ystj.length - 1];
              if (!lib.skill.ystj.derivation.includes(skill)) return;
              event.weather_skill = skill;
              const result = await player
                .chooseTarget(true, '令一名角色获得技能【' + get.translation(skill) + '】')
                .set('ai', function (target) {
                  const player = _status.event.player,
                    s = _status.currentPhase;
                  if (player.storage.ystj[player.storage.ystj.length - 1] === '1') {
                    const sh = s.countCards('h') + s.hp * 2;
                    if (get.attitude(player, s) > 0 && sh >= 10) return s === target;
                    else if (get.attitude(player, s) > 0 && sh < 10) return target !== s;
                    else if (get.attitude(player, s) <= 0 && sh >= 10) return target !== s;
                    else if (get.attitude(player, s) <= 0 && sh < 10) return s === target;
                  } else if (player.storage.ystj[player.storage.ystj.length - 1] === '2') {
                    return get.attitude(_status.event.player, target);
                  } else if (player.storage.ystj[player.storage.ystj.length - 1] === '3') {
                    if (target.hasSkill('ystj_m3_hidden')) {
                      return get.attitude(player, target) * (10 - get.distance(s, target));
                    } else {
                      return -get.attitude(player, target);
                    }
                  } else if (player.storage.ystj[player.storage.ystj.length - 1] === '4') {
                    return -get.attitude(player, target);
                  } else if (player.storage.ystj[player.storage.ystj.length - 1] === '5') {
                    if (get.attitude(player, s) > 0) return -get.attitude(player, target);
                    else return s === target;
                  } else if (player.storage.ystj[player.storage.ystj.length - 1] === '6') {
                    const thp = target.hp;
                    if (get.attitude(player, target) > 0 && thp === target.maxHp) return 20 + get.attitude(player, target);
                    else return 10 - get.attitude(player, target) * target.getDamagedHp();
                  } else if (player.storage.ystj[player.storage.ystj.length - 1] === '7') {
                    if (get.attitude(player, target) > 0) {
                      if (target.isTurnedOver()) return 0;
                      else return get.attitude(player, target);
                    } else {
                      if (target.isTurnedOver()) return -get.attitude(player, target);
                      else return 0;
                    }
                  } else if (player.storage.ystj[player.storage.ystj.length - 1] === '8') {
                    if (get.attitude(player, target) > 0) {
                      if (target.isLinked()) return 0;
                      else return get.attitude(player, target);
                    } else {
                      if (target.isLinked()) return -get.attitude(player, target);
                      else return 0;
                    }
                  }
                  return target === player;
                })
                .forResult();
              if (!result.bool) return;
              const target = result.targets[0];
              player.line(target, 'green');
              target.addAdditionalSkill('ystj_' + player.playerid, event.weather_skill);
              game.log(target, '获得了天气技能', '#g【' + get.translation(event.weather_skill) + '】');
            },
          },
          expire: {
            charlotte: true,
            onremove(player) {
              const key = 'ystj_' + player.playerid,
                players = game.players.concat(game.dead);
              for (const current of players) {
                current.removeAdditionalSkill(key);
              }
              game.broadcastAll(function () {
                delete _status.tempBackground;
                game.updateBackground();
              });
              game.addVideo('skill', player, ['ystj', [false]]);
            },
          },
          1: {
            trigger: { global: 'phaseAfter' },
            mark: true,
            marktext: '溯',
            intro: {
              content: '锁定技.每回合结束阶段开始时,当前回合角色将体力值与手牌数调整至等同于其准备阶段对应数值',
            },
            forced: true,
            lastDo: true,
            filter(event, player) {
              for (const b of [true, false]) {
                if (
                  game.hasPlayer((current) => {
                    return lib.skill.ystj_1.getNum(current, b);
                  })
                )
                  return event.player !== player;
              }
              return false;
            },
            getNum(player, status) {
              if (!_status.ystj_1 || !_status.ystj_1[player.playerid]) return 0;
              let num = _status.ystj_1[player.playerid][status ? 1 : 0];
              if (status) {
                num -= player.countCards('h');
                if (num + player.countCards('h') > 5) num = 5 - player.countCards('h');
              } else {
                num -= player.hp;
                if (num + player.hp < 1) num = 1 - player.hp;
              }
              return num;
            },
            content() {
              let map = {};
              for (const b of [true, false]) {
                game.countPlayer((current) => {
                  if (!map[current.playerid]) map[current.playerid] = [];
                  map[current.playerid][b ? 1 : 0] = lib.skill.ystj_1.getNum(current, b);
                });
              }
              let num1 = map[trigger.player.playerid][0],
                num2 = map[trigger.player.playerid][1];
              if (num1) {
                if (num1 > 0) {
                  trigger.player.recover(num1);
                } else {
                  num1 = Math.min(trigger.player.hp - 1, -num1);
                  trigger.player.loseHp(num1);
                }
              }
              if (num2) {
                if (num2 > 0) {
                  num2 = Math.min(5 - trigger.player.countCards('h'), num2);
                  if (num2 > 0) trigger.player.draw(num2);
                } else {
                  num2 = -num2;
                  trigger.player.chooseToDiscard(num2, true).set('prompt', '驻颜:请弃置' + get.cnNumber(Math.abs(num2)) + '张手牌');
                }
              }
            },
          },
          m1_record: {
            trigger: {
              global: ['phaseZhunbeiAfter'],
            },
            lastDo: true,
            charlotte: true,
            forced: true,
            popup: false,
            forceDie: true,
            content() {
              if (!_status.ystj_1) _status.ystj_1 = {};
              _status.ystj_1[trigger.player.playerid] = [trigger.player.hp, trigger.player.countCards('h')];
            },
          },
          2: {
            trigger: { global: 'phaseJieshuBegin' },
            mark: true,
            marktext: '洞',
            charlotte: true,
            forced: true,
            popup: false,
            intro: {
              content: '锁定技.每回合结束阶段开始时,随机一名角色与另一名角色交换位置',
            },
            content() {
              let playera = game.players
                .concat(game.dead)
                .filter((p) => {
                  return p !== player;
                })
                .randomGet(),
                playerb = game.players
                  .concat(game.dead)
                  .filter((p) => {
                    return p !== player && p !== playera;
                  })
                  .randomGet();
              game.broadcastAll(
                function (a, b) {
                  game.swapSeat(a, b);
                },
                playera,
                playerb
              );
            },
          },
          3: {
            trigger: { global: 'phaseBefore' },
            mark: true,
            marktext: '夜',
            charlotte: true,
            forced: true,
            popup: false,
            intro: {
              content: '锁定技.每回合随机隐藏任意非当前回合角色',
            },
            filter(event, player) {
              return event.player !== player;
            },
            content() {
              const playerx = game.players
                .filter((p) => {
                  return p != trigger.player;
                })
                .randomGet();
              game.broadcastAll(function (i) {
                i.classList.add('hidden');
                i.addSkill('ystj_m3_hidden');
              }, playerx);
            },
          },
          m3_hidden: {
            mod: {
              targetEnabled(card, player, target) {
                if (player !== target) return false;
              },
            },
          },
          4: {
            audio: true,
            mark: true,
            marktext: '渊',
            intro: {
              content: '锁定技.其他角色造成火属性伤害时,取消之;一名角色受到雷属性伤害后,所有与其座次相邻的角色失去1点体力',
            },
            trigger: { global: 'damageEnd' },
            forced: true,
            filter(event, player) {
              return event.nature == 'thunder' && lib.skill.ystj_4.logTarget(event).length;
            },
            logTarget(event) {
              let list = [];
              if (!event.player.isIn()) return [];
              if (event.player.next.isIn()) list.push(event.player.next);
              if (event.player.previous.isIn()) list.push(event.player.previous);
              return list.sortBySeat(_status.currentPhase);
            },
            content() {
              const targets = lib.skill.ystj_4.logTarget(trigger);
              for (const i of targets) i.loseHp();
            },
            group: 'ystj_miehuo',
            global: 'ystj_m4_ai',
          },
          m4_ai: {
            ai: {
              effect: {
                player(card, player, target, current) {
                  if (get.tag(card, 'fireDamage') && !player.hasSkill('ystj_4')) {
                    return 'zerotarget';
                  } else if (get.tag(card, 'thunderDamage')) {
                    const list = lib.skill.ystj_4.logTarget({
                      player: target,
                    });
                    let eff = list.reduce(function (eff, current) {
                      eff += get.effect(current, { name: 'losehp' }, player, player);
                    }, 0);
                    return [1, eff];
                  }
                },
              },
            }, //QQQ
          },
          miehuo: {
            audio: 'ystj_4',
            trigger: { global: 'damageBegin2' },
            forced: true,
            logTarget: 'source',
            filter(event, player) {
              return event.nature == 'fire' && event.source && event.source.isIn() && event.source != player;
            },
            content() {
              trigger.cancel();
            },
          },
          5: {
            forced: true,
            mark: true,
            marktext: '谧',
            intro: {
              content: '锁定技.每回合其他角色第一次对使用牌时,此目标改为场上随机角色',
            },
            charlotte: true,
            trigger: {
              global: 'useCardToTargeted',
            },
            firstDo: true,
            filter(event, player) {
              if (event.player == player || event.targets.length !== 1) return false;
              return player.storage.ystjstat < 1;
            },
            init(player) {
              player.storage.ystjstat = 0;
            },
            content() {
              const evt = trigger.parent;
              evt.targets.yiiu(evt.targets);
              if (get.type(trigger.card) != 'delay')
                list = game.filterPlayer(function (c) {
                  return lib.filter.targetEnabled2(trigger.card, trigger.player, c);
                });
              else
                list = game.filterPlayer(function (current) {
                  return current.canAddJudge(trigger.card);
                });
              trigger.targets.add(list.randomGet());
              player.storage.ystjstat++;
              trigger.player.line(trigger.targets, 'fire');
              game.log(trigger.card, '的目标被改为', trigger.targets);
            },
            group: ['ystj_reset'],
          },
          reset: {
            trigger: {
              global: 'phaseEnd',
            },
            _priority: 6,
            forced: true,
            charlotte: true,
            popup: false,
            content() {
              player.storage.ystjstat = 0;
            },
          },
          6: {
            trigger: { global: 'phaseJieshuBegin' },
            mark: true,
            marktext: '墨',
            charlotte: true,
            forced: true,
            popup: false,
            intro: {
              content: '锁定技.每回合结束阶段开始时,其他所有角色随机回复或失去体力',
            },
            content() {
              game.countPlayer(function (i) {
                if (i === player) return;
                if (Math.random() > 0.5) i.recover();
                else i.loseHp();
              });
            },
          },
          7: {
            trigger: { global: 'phaseZhunbeiBegin' },
            mark: true,
            marktext: '霜',
            charlotte: true,
            forced: true,
            popup: false,
            intro: {
              content: '锁定技.每回合准备阶段开始时,所有角色随机翻面',
            },
            content() {
              game.players.forEach((i) => {
                if (i === player) return;
                if (Math.random() > 0.5) i.turnOver();
              });
            },
          },
          8: {
            trigger: { global: 'phaseZhunbeiBegin' },
            mark: true,
            marktext: '炎',
            charlotte: true,
            forced: true,
            popup: false,
            intro: {
              content: '锁定技.每回合准备阶段开始时,其他角色随机横置',
            },
            content() {
              game.players.forEach((i) => {
                if (i === player) return;
                if (Math.random() > 0.5) i.link();
              });
            },
            group: 'ystj_m8_damage',
          },
          m8_damage: {
            trigger: { global: 'damageBegin1' },
            forced: true,
            charlotte: true,
            filter(event, player) {
              return event.nature === 'fire';
            },
            content() {
              trigger.num++;
            },
          },
        },
      },
      erxl: {
        trigger: { player: 'ystjAfter' },
        filter(event, player) {
          const pre = player.storage.ystj.slice(),
            num = pre.unique().length;
          return num % 2 === 0;
        },
        audio: 'ext:恒梦/audio/geve:7',
        content() {
          const pre = player.storage.ystj.slice(),
            num = pre.unique().length;
          player.draw(num);
          player.showHandcards();
          player.addTempSkill('erxl_effect', { player: 'phaseJieshuEnd' });
          game.broadcastAll(function (cards) {
            cards.forEach((card) => card.addGaintag('erxl_tag'));
          }, player.getCards('h'));
        },
        ai: {
          threaten: 3,
        },
        subSkill: {
          effect: {
            audio: 'erxl',
            enable: 'chooseToUse',
            charlotte: true,
            onremove(player) {
              player.removeGaintag('erxl_tag');
            },
            hiddenCard(player, name) {
              return (
                get.type(name) == 'trick' &&
                !player.getStorage('erxl_viewed').includes(name) &&
                player.countCards('h', (card) => {
                  return get.color(card) == 'black' && card.hasGaintag('erxl_tag');
                }) > 0
              );
            },
            filter(event, player) {
              if (
                !player.hasCard((card) => {
                  return get.color(card) == 'black' && card.hasGaintag('erxl_tag');
                })
              )
                return false;
              const storage = player.getStorage('erxl_viewed');
              for (const i of lib.inpile) {
                if (!storage.includes(i) && get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) return true;
              }
              return false;
            },
            chooseButton: {
              dialog(event, player) {
                const cards = player.getCards('h', (card) => {
                  return get.color(card) == 'black' && card.hasGaintag('erxl_tag');
                });
                const storage = player.getStorage('erxl_viewed');
                let list = [];
                for (const i of lib.inpile) {
                  if (!storage.includes(i) && get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) {
                    list.push(['锦囊', '', i]);
                  }
                }
                return ui.create.dialog('二向箔', [list, 'vcard'], 'hidden');
              },
              check(button) {
                const player = _status.event.player;
                return player.getUseValue({ name: button.link[2] }) + 1;
              },
              backup(links, player) {
                return {
                  audio: 'erxl',
                  popname: true,
                  filterCard(card, player) {
                    return get.color(card) == 'black' && card.hasGaintag('erxl_tag');
                  },
                  selectCard: 1,
                  position: 'h',
                  viewAs: {
                    name: links[0][2],
                  },
                  onuse(links, player) {
                    player.addTempSkill('erxl_viewed');
                    player.markAuto('erxl_viewed', [links.card.name]);
                  },
                };
              },
              prompt(links, player) {
                return '将一张展示过的黑色手牌当做' + get.translation(links[0][2]) + '使用';
              },
            },
            group: 'erxl_draw',
            mod: {
              aiOrder(player, card, num) {
                let cards = [];
                if (card.cards) cards.addArray(cards);
                if (get.itemtype(card) == 'card') cards.push(card);
                for (const cardx of cards) {
                  if (get.color(cardx) != 'red') continue;
                  if (cardx.hasGaintag('erxl_tag')) return num + 0.2;
                }
              },
            },
            ai: {
              order: 12,
              result: {
                player: 1,
              },
            },
          },
          draw: {
            audio: 'erxl',
            forced: true,
            charlotte: true,
            trigger: { player: 'useCard' },
            filter(event, player) {
              const cards = event.cards.filter((card) => get.color(card, player) == 'red');
              return player.hasHistory('lose', (evt) => {
                if (event != evt.parent) return false;
                for (const i in evt.gaintag_map) {
                  if (evt.gaintag_map[i].includes('erxl_tag')) {
                    if (cards.some((card) => card.cardid == i)) return true;
                  }
                }
              });
            },
            content() {
              let num = 0;
              const cards = trigger.cards.filter((card) => get.color(card, player) == 'red');
              player.getHistory('lose', (evt) => {
                if (trigger != evt.parent) return false;
                for (const i in evt.gaintag_map) {
                  if (evt.gaintag_map[i].includes('erxl_tag')) {
                    if (cards.some((card) => card.cardid == i)) num++;
                  }
                }
              });
              while (num-- > 0) player.draw();
            },
          },
          viewed: {
            charlotte: true,
          },
          effect_backup: {
            audio: 'erxl',
          },
        },
      },
      zojm2: {
        init(player, skill) {
          if (!player.storage.zojm2) player.storage.zojm2 = [];
        },
        onremove(player, skill) {
          player.storage.zojm2 = [];
        },
        mod: {
          cardEnabled2(card, player) {
            if (get.position(card) == 'h' && player.storage.zojm2.includes(card.name)) return false;
          },
        },
        intro: {
          content: '本回合内不能使用$',
        },
      },
      zojm: {
        audio: 'ext:恒梦/audio/lhvuvinv:12',
        derivation: ['zojm2'],
        trigger: { player: 'useCardAfter' },
        forced: true,
        mod: {
          cardUsable(card, player) {
            if (card.storage && card.storage.zojm) return Infinity;
          },
          aiOrder(player, card, num) {
            if (player.storage.zojm) {
              if (player.hasValueTarget(card)) return 0;
              let val = player.getUseValue(card);
              if (get.type(card) === 'basic') val -= 20;
              return 40 - val;
            }
            if (get.type(card) === 'equip') {
              return num + 1;
            }
            if (typeof card.number != 'number') return;
            if (ui.cardPile.childElementCount < 8) return;
            const butlis = [],
              carnum = ui.cardPile.childElementCount,
              cn = card.number;
            for (let i = carnum - 1; i > carnum - 9; i--) {
              if (!ui.cardPile.childNodes[i]) continue;
              const c = ui.cardPile.childNodes[i];
              butlis.push(c.number);
            }
            const butlen = butlis.length;
            for (let j = 0; j < butlen; j++) {
              const bu = butlis.slice();
              bu.splice(j, 1, cn);
              for (let i = 0; i < 6; i++) {
                const x = bu.slice(i, i + 3),
                  xlen = x.length;
                if (xlen < 3) continue;
                const fwbonaqi = [1, 1, 2, 3, 5, 8, 13],
                  keng = [];
                for (let k = 0; k < 5; k++) {
                  keng.push(fwbonaqi.slice(k, k + 3));
                }
                if ((x[0] + x[1] === x[2] && keng.some((k) => k.includes(x[0]) && k.includes(x[1]) && k.includes(x[2]))) || (x[2] + x[1] === x[0] && keng.some((k) => k.includes(x[2]) && k.includes(x[1]) && k.includes(x[0])))) {
                  return num + 7;
                }
                const nb = [];
                for (let m = 0; m < xlen - 1; m++) {
                  nb.push(x[m + 1] / x[m]);
                }
                if (nb[0] === nb[1]) {
                  return num + 6;
                }
                const na = [];
                for (let m = 0; m < xlen - 1; m++) {
                  na.push(x[m + 1] - x[m]);
                }
                if (na[0] === na[1]) {
                  return num + 5;
                }
              }
            }
            return;
          },
        },
        getList(player, bool) {
          const natures = lib.inpile_nature.slice(0);
          const tricks = [],
            basics = [];
          for (const name of lib.inpile) {
            const info = lib.card[name];
            if (!info || info.type != 'trick') continue;
            tricks.push(name);
          }
          for (const name of lib.inpile) {
            const info = lib.card[name];
            if (!info || info.type != 'basic') continue;
            basics.push(name);
          }
          const history = player.actionHistory,
            hislen = history.length;
          for (let i = hislen - 1; i >= 0; i--) {
            const info = history[i];
            for (const evt of info.useCard) {
              const name = evt.card.name;
              if (name == 'sha') {
                if (evt.card.nature) natures.yiiu(evt.card.nature);
              } else {
                tricks.yiiu(name);
                basics.yiiu(name);
              }
            }
            if (info.isRound) break;
          }
          const vcards = [],
            evt = _status.event;
          for (const i of natures) {
            if (
              !player.hasUseTarget({
                name: 'sha',
                nature: i,
              })
            )
              continue;
            if (bool) return true;
            else vcards.push(['基本', '', 'sha', i]);
          }
          for (const i of basics) {
            if (!player.hasUseTarget({ name: i })) continue;
            if (bool) return true;
            else vcards.push(['基本', '', i]);
          }
          for (const i of tricks) {
            if (!player.hasUseTarget({ name: i })) continue;
            if (bool) return true;
            else vcards.push(['锦囊', '', i]);
          }
          if (bool) return false;
          return vcards;
        },
        filter(event, player) {
          if (event.cards.length != 1) return false;
          const number = event.card.number;
          if (!number) return false;
          if (
            !player.hasHistory('lose', function (evt) {
              return evt.hs.length && evt.parent == event;
            }) ||
            !event.cards.filterInD('oe').length
          )
            return false;
          return true;
        },
        async content(event, trigger, player) {
          const precar = get.bottomCards(8);
          game.cardsGotoOrdering(precar);
          if (!trigger.cards.filterInD('o').length) {
            const yrlen = precar.length,
              yrnum = Array.from(precar, ({ number }) => number);
            let yrarr = 0;
            for (let i = 0; i < yrlen; i++) {
              for (let j = i + 1; j < yrlen; j++) {
                if (yrnum[j] < yrnum[i]) yrarr++;
              }
            }
            game.log(yrarr);
            const links = await player
              .chooseButton(['作茧:交换两张牌的位置,你摸数组逆序数改变的值', precar], 2)
              .set('ai', function (button) {
                const player = _status.event.player,
                  len = _status.event.len,
                  nixu = _status.event.nixu,
                  yrs = _status.event.yrs,
                  val = player.getUseValue(button.link) / 10;
                if (ui.selected.buttons.length) {
                  const ind1 = precar.indexOf(ui.selected.buttons[0]),
                    ind2 = precar.indexOf(button.link),
                    yrscop = yrs.slice();
                  yrscop[ind1] = button.link.number;
                  yrscop[ind2] = ui.selected.buttons[0].number;
                  let yrarry = 0;
                  for (let i = 0; i < len; i++) {
                    for (let j = i + 1; j < len; j++) {
                      if (yrscop[j] < yrscop[i]) yrarry++;
                    }
                  }
                  const getnumx = Math.abs(yrarry - nixu);
                  if (getnumx <= player.maxHp) return 5 + getnumx;
                  else return 0;
                }
                const inda = precar.indexOf(button.link),
                  yrscop = yrs.slice(),
                  xrzelv = [];
                for (let h = 0; h < len; h++) {
                  if (h === inda) continue;
                  const change = yrscop[h];
                  yrscop[h] = button.link.number;
                  yrscop[inda] = change;
                  let yrarry = 0;
                  for (let i = 0; i < len; i++) {
                    for (let j = i + 1; j < len; j++) {
                      if (yrscop[j] < yrscop[i]) yrarry++;
                    }
                  }
                  const getnumx = Math.abs(yrarry - nixu);
                  if (getnumx <= player.maxHp) xrzelv.push(getnumx);
                }
                return Math.max(...xrzelv) + 1;
              })
              .set('len', yrlen)
              .set('nixu', yrarr)
              .set('yrs', yrnum)
              .forResultLinks();
            if (!links || !links.length) return;
            const ind1 = precar.indexOf(links[0]),
              ind2 = precar.indexOf(links[1]),
              yrcop = yrnum.slice();
            precar[ind1] = links[1];
            precar[ind2] = links[0];
            yrcop[ind1] = links[1].number;
            yrcop[ind2] = links[0].number;
            let yrarrx = 0;
            for (let i = 0; i < yrlen; i++) {
              for (let j = i + 1; j < yrlen; j++) {
                if (yrcop[j] < yrcop[i]) yrarrx++;
              }
            }
            const getnum = Math.abs(yrarrx - yrarr);
            if (getnum <= player.maxHp) player.draw(getnum);
            while (precar.length) {
              const prepop = precar.pop();
              if (!'hjsx'.includes(get.position(prepop, true))) {
                prepop.fix();
                ui.cardPile.appendChild(prepop);
              }
            }
            return;
          }
          const links = await player
            .chooseButton(['作茧:使用点数为<b>' + get.translation(trigger.cards[0].number || '') + '</b>的【' + get.translation(trigger.card.name) + '】替换一张牌张牌', precar], 1)
            .set('ai', function (button) {
              const player = _status.event.player,
                lincop = precar.slice(),
                trinum = trigger.cards[0].number,
                lincopnum = Array.from(lincop, ({ number }) => number),
                linind = lincop.indexOf(button.link),
                val = player.getUseValue(button.link) / 10;
              lincopnum.splice(linind, 1, trinum);
              const linlen = lincopnum.length;
              let extra = 0;
              if (player.storage.zojm2 && player.storage.zojm2.includes(button.link.name)) extra += 3;
              for (let i = 0; i < linlen - 2; i++) {
                if (i + 3 > linlen) continue;
                const x = lincopnum.slice(i, i + 3),
                  xlen = x.length;
                if (xlen < 3) continue;
                const fwbonaqi = [1, 1, 2, 3, 5, 8, 13],
                  keng = [];
                for (let k = 0; k < 5; k++) {
                  keng.push(fwbonaqi.slice(k, k + 3));
                }
                if ((x[0] + x[1] === x[2] && keng.some((k) => k.includes(x[0]) && k.includes(x[1]) && k.includes(x[2]))) || (x[2] + x[1] === x[0] && keng.some((k) => k.includes(x[2]) && k.includes(x[1]) && k.includes(x[0])))) {
                  return 12 + val - extra;
                }
                const ny = [];
                for (let j = 0; j < xlen - 1; j++) {
                  ny.push(x[j + 1] / x[j]);
                }
                if (ny[0] === ny[1]) {
                  return 11 + val - extra;
                }
                const nx = [];
                for (let j = 0; j < xlen - 1; j++) {
                  nx.push(x[j + 1] - x[j]);
                }
                if (nx[0] === nx[1]) {
                  return 10 + val - extra;
                }
                return 1 + val - extra;
              }
            })
            .forResultLinks();
          if (!links || !links.length) return;
          const ind = precar.indexOf(links[0]);
          player.gain(links[0], 'gain2');
          precar.splice(ind, 1, trigger.cards[0]);
          player.lose(trigger.cards[0], ui.cardPile);
          if (!player.hasSkill('zojm2')) player.addTempSkill('zojm2');
          player.storage.zojm2.push(trigger.cards[0].name);
          player.markSkill('zojm2');
          const prelen = precar.length,
            prelos = [];
          let dgia = false,
            dgbi = false,
            fwbo = false;
          for (let i = 0; i < prelen - 2; i++) {
            if (i + 3 > prelen) continue;
            const temarryr = precar.slice(i, i + 3),
              temlen = temarryr.length,
              temarr = Array.from(temarryr, ({ number }) => number);
            if (temlen < 3) continue;
            const numarra = [];
            for (let j = 0; j < temlen - 1; j++) {
              numarra.push(temarr[j + 1] - temarr[j]);
            }
            if (numarra[0] === numarra[1]) {
              dgia = true;
              for (let j = 0; j < temlen; j++) {
                if (prelos.includes(temarryr[j])) continue;
                prelos.push(temarryr[j]);
              }
            }
            let numarrb = [];
            for (let j = 0; j < temlen - 1; j++) {
              numarrb.push(temarr[j + 1] / temarr[j]);
            }
            if (numarrb[0] === numarrb[1]) {
              dgbi = true;
              for (let j = 0; j < temlen; j++) {
                if (prelos.includes(temarryr[j])) continue;
                prelos.push(temarryr[j]);
              }
            }
            const fwbonaqi = [1, 1, 2, 3, 5, 8, 13],
              keng = [];
            for (let k = 0; k < 5; k++) {
              keng.push(fwbonaqi.slice(k, k + 3));
            }
            if ((temarr[0] + temarr[1] === temarr[2] && keng.some((k) => k.includes(temarr[0]) && k.includes(temarr[1]) && k.includes(temarr[2]))) || (temarr[2] + temarr[1] === temarr[0] && keng.some((k) => k.includes(temarr[2]) && k.includes(temarr[1]) && k.includes(temarr[0])))) {
              fwbo = true;
              for (let j = 0; j < temlen; j++) {
                if (prelos.includes(temarryr[j])) continue;
                prelos.push(temarryr[j]);
              }
            }
          }
          while (precar.length) {
            const prepop = precar.pop();
            if (!'hjsx'.includes(get.position(prepop, true))) {
              prepop.fix();
              ui.cardPile.appendChild(prepop);
            }
          }
          game.log(dgia);
          game.log(dgbi);
          game.log(fwbo);
          let dgiax = false,
            dgbix = false,
            fwbox = false;
          if (dgia || dgbi || fwbo) {
            const linrem = await player
              .chooseButton(true, [get.prompt('zojm'), '<div class="text center">请选择移除三张牌,使得牌型符合以下条件:</div><div class="text center">1. 三张牌的点数成等差数列;</div><div class="text center">2. 三张牌的点数成等比数列;</div><div class="text center">3. 三张牌的点数属于斐波那契数列中连续项.</div>', prelos], 3)
              .set('ai', function (button) {
                const player = _status.event.player,
                  val = player.getUseValue(button.link) / 10;
                if (ui.selected.buttons.length === 2) {
                  const uiarr = ui.selected.buttons.slice(),
                    newuiarr = [...uiarr, button.link],
                    newnumarr = Array.from(newuiarr, ({ number }) => number);
                  newnumarr.sort(function (a, b) {
                    return a - b;
                  });
                  const xlen = newnumarr.length,
                    fwbonaqi = [1, 1, 2, 3, 5, 8, 13],
                    keng = [];
                  for (let k = 0; k < 5; k++) {
                    keng.push(fwbonaqi.slice(k, k + 3));
                  }
                  if ((newnumarr[0] + newnumarr[1] === newnumarr[2] && keng.some((k) => k.includes(newnumarr[0]) && k.includes(newnumarr[1]) && k.includes(newnumarr[2]))) || (newnumarr[2] + newnumarr[1] === newnumarr[0] && keng.some((k) => k.includes(newnumarr[2]) && k.includes(newnumarr[1]) && k.includes(newnumarr[0])))) {
                    return 13 - val;
                  }
                  const ny = [];
                  for (let j = 0; j < xlen - 1; j++) {
                    ny.push(newnumarr[j + 1] / newnumarr[j]);
                  }
                  if (ny[0] === ny[1]) {
                    return 12 - val;
                  }
                  const nx = [];
                  for (let j = 0; j < xlen - 1; j++) {
                    nx.push(newnumarr[j + 1] - newnumarr[j]);
                  }
                  if (nx[0] === nx[1]) {
                    return 11 - val;
                  }
                  return 8 - val;
                } else if (ui.selected.buttons.length === 1) {
                  return Math.abs(prelos.indexOf(button.link) - prelos.indexOf(ui.selected.buttons[0])) <= 1;
                } else {
                  return 10 - val;
                }
              })
              .forResultLinks();
            if (!linrem || !linrem.length) return;
            const temarrb = Array.from(linrem, (item) => item.number),
              temlen = temarrb.length;
            temarrb.sort(function (a, b) {
              return a - b;
            });
            let numx = [];
            for (let j = 0; j < temlen - 1; j++) {
              numx.push(temarrb[j + 1] - temarrb[j]);
            }
            if (numx.every((item) => item === numx[0])) dgiax = true;
            let numy = [];
            for (let j = 0; j < temlen - 1; j++) {
              numy.push(temarrb[j + 1] / temarrb[j]);
            }
            if (numy.every((item) => item === numy[0])) dgbix = true;
            const fwbonaqi = [1, 1, 2, 3, 5, 8, 13],
              keng = [];
            for (let k = 0; k < 5; k++) {
              keng.push(fwbonaqi.slice(k, k + 3));
            }
            if ((temarrb[0] + temarrb[1] === temarrb[2] && keng.some((k) => k.includes(temarrb[0]) && k.includes(temarrb[1]) && k.includes(temarrb[2]))) || (temarrb[2] + temarrb[1] === temarrb[0] && keng.some((k) => k.includes(temarrb[2]) && k.includes(temarrb[1]) && k.includes(temarrb[0])))) fwbox = true;
            game.cardsDiscard(linrem);
          }
          let card;
          if (fwbox) {
            const listc = lib.skill.zojm.getList(player);
            const linksc = await player
              .chooseButton([get.prompt('zojm'), '<div class="text center">将一张牌当以下的一张牌对使用</div>', [listc, 'vcard']])
              .set('ai', function (button) {
                const card = {
                  name: button.link[2],
                  nature: button.link[3],
                  storage: { zojm: true },
                },
                  player = _status.event.player;
                if (
                  player.hasCard(function (car) {
                    return car.name === card.name;
                  }, 'hs')
                )
                  return player.getUseValue(card);
                return 5 + player.getUseValue(card);
              })
              .forResultLinks();
            if (!linksc || !linksc.length) return;
            card = linksc[0];
          } else if (dgiax) {
            const lista = lib.skill.zojm.getList(player).filter((item) => item[0] === '基本');
            const linksa = await player
              .chooseButton([get.prompt('zojm'), '<div class="text center">将一张牌当以下的一张牌使用</div>', [lista, 'vcard']])
              .set('ai', function (button) {
                const card = {
                  name: button.link[2],
                  nature: button.link[3],
                  storage: { zojm: true },
                },
                  player = _status.event.player;
                if (
                  player.hasCard(function (car) {
                    return car.name === card.name;
                  }, 'hs')
                )
                  return player.getUseValue(card);
                return 5 + player.getUseValue(card);
              })
              .forResultLinks();
            if (!linksa || !linksa.length) return;
            card = linksa[0];
          } else if (dgbix) {
            const listb = lib.skill.zojm.getList(player).filter((item) => item[0] === '锦囊');
            const linksb = await player
              .chooseButton([get.prompt('zojm'), '<div class="text center">将一张牌当以下的一张牌对使用</div>', [listb, 'vcard']])
              .set('ai', function (button) {
                const card = {
                  name: button.link[2],
                  storage: { zojm: true },
                },
                  player = _status.event.player;
                if (
                  player.hasCard(function (car) {
                    return car.name === card.name;
                  }, 'hs')
                )
                  return player.getUseValue(card);
                return 5 + player.getUseValue(card);
              })
              .forResultLinks();
            if (!linksb || !linksb.length) return;
            card = linksb[0];
          }
          if (!card) return;
          game.broadcastAll(function (card) {
            lib.skill.zojm_backupx.viewAs = {
              name: card[2],
              nature: card[3],
              storage: { zojm: true },
            };
          }, card);
          player.storage.zojm = true;
          player.removeSkill('zojm2');
          player.when(['useSkillAfter', 'useCardAfter', 'phaseEnd']).then(() => {
            if (player.storage.zojm) {
              player.storage.zojm = false;
            }
          });
          await player
            .chooseToUse()
            .set('openskilldialog', '###作茧###将一张牌当作【' + get.translation(card.name) + '】使用')
            .set('norestore', true)
            .set('addCount', false)
            .set('_backupevent', 'zojm_backupx')
            .set('custom', {
              add: {},
              replace: { window() { } },
            })
            .backup('zojm_backupx');
        },
        subSkill: {
          backupx: {
            filterCard(card) {
              return get.itemtype(card) == 'card';
            },
            position: 'hes',
          },
        },
        ai: {
          threaten: 1.5,
          effect: {
            player_use(card, player, target) {
              if (_status.event.dying) return;
              if (get.type(card) === 'equip') return [1, 2];
              return [1, 1];
            },
          },
        },
      },
      sz_yudao: {
        trigger: {
          global: ['gameDraw', 'loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
        },
        qkkl(suits, colors) {
          const uuzu = [];
          if (suits === 0) uuzu.push(0);
          if (colors === 2) uuzu.push(1);
          if (suits === 4) uuzu.push(2);
          return uuzu;
        },
        filter(event, player) {
          let xm = game.players
            .reduce((o, k) => {
              o.push(...k.getCards('ej'));
              return o;
            }, [])
            .reduce((a, b) => {
              a.add(b.suit);
              return a;
            }, []).length;
          let co = game.players
            .reduce((o, k) => {
              o.push(...k.getCards('ej'));
              return o;
            }, [])
            .reduce((a, b) => {
              a.add(get.color(b));
              return a;
            }, []).length;
          return player.storage.sz_yudao !== xm || player.storage.sz_yudao2 !== co;
        },
        forced: true,
        content() {
          let suits = game.players
            .reduce((o, k) => {
              o.push(...k.getCards('ej'));
              return o;
            }, [])
            .reduce((a, b) => {
              a.add(b.suit);
              return a;
            }, []).length;
          let colors = game.players
            .reduce((o, k) => {
              o.push(...k.getCards('ej'));
              return o;
            }, [])
            .reduce((a, b) => {
              a.add(get.color(b));
              return a;
            }, []).length;
          player.storage.sz_yudao = suits;
          player.storage.sz_yudao2 = colors;
          const x = lib.skill.sz_yudao.qkkl(suits, colors);
          const list = ['paoxiao', 'wusheng', 'rende'];
          for (let i = 0; i < 3; i++) {
            player[x.includes(i) ? 'addSkill' : 'removeSkill'](list[i]);
          }
        },
      },
      jpdj: {
        trigger: {
          global: 'useCardAfter',
        },
        init() {
          game.addGlobalSkill('jpdj_judge');
          game.broadcastAll(() => lib.skill.jpdj.video());
        },
        zixiList: ['lebu', 'bingliang', 'shandian'],
        video() {
          const list = lib.skill.jpdj.zixiList;
          for (const name of list) {
            const namex = 'jpdj_' + name;
            if (!lib.card[namex]) {
              lib.card[namex] = {
                type: 'special_delay',
                fullskin: true,
                noEffect: true,
                wuxieable: false,
              };
              lib.card[namex].cardimage = name;
              lib.translate[namex] = lib.translate[name] + '·卦';
              lib.translate[namex + '_info'] = '由【谱卦】技能创造的无效果【' + lib.translate[name] + '】';
            }
          }
        },
        filter(event, player) {
          const cardlist = event.cards.slice();
          for (const i of cardlist) {
            if (player.storage.jpdj.some((j) => j.suit === i.suit && j.jiou === lib.skill.jpdj.jiou(i.number))) cardlist.remove(i);
          }
          if (!cardlist.length) return false;
          if (!event.cards.length) return false;
          if (event.player === player) return event.targets && event.targets.length;
          else return event.targets.includes(player);
        },
        init(player) {
          game.broadcastAll(() => lib.skill.jpdj.video());
          if (!player.storage.jpdj) {
            player.storage.jpdj = [];
          }
        },
        group: 'jpdj_jie',
        subSkill: {
          judge: {
            mod: {
              targetEnabled(card, player, target) {
                const list = lib.skill.jpdj.zixiList;
                const name = typeof card == 'string' ? card : card.viewAs ? card.viewAs : card.name;
                if (name.indexOf('jpdj_') == 0) {
                  const namex = name.slice('jpdj_'.length);
                  if (list.includes(namex) && target.hasJudge(namex)) return false;
                } else if (list.includes(name) && target.hasJudge('jpdj_' + name)) return false;
              },
            },
            ai: {
              threaten(player, target) {
                if (!player.hasSkill('jpdj') || ![1, 2, 3].includes(target.countCards('j'))) return;
                return 3 + target.countCards('j');
              },
            },
          },
          jie: {
            trigger: {
              global: 'roundStart',
            },
            forced: true,
            silent: true,
            filter(event, player) {
              return player.storage.jpdj.length;
            },
            content() {
              player.storage.jpdj = [];
            },
          },
        },
        jiou(num) {
          return num % 2;
        },
        async content(event, trigger, player) {
          const cardlist = trigger.cards.slice();
          for (const i of cardlist) {
            if (player.storage.jpdj.some((j) => j.suit === i.suit && j.jiou === lib.skill.jpdj.jiou(i.number))) cardlist.remove(i);
          }
          for (const i of cardlist) {
            player.storage.jpdj.push({
              suit: i.suit,
              jiou: lib.skill.jpdj.jiou(i.number),
            });
            const resulta = await player
              .chooseTarget(`请选择【${get.translation(i.name)}】置入的目标`, (card, player, target) => {
                return !target.isDisabledJudge() || target.hasEnabledSlot();
              })
              .set('ai', function (target) {
                return get.attitude(player, target) < 0 ? 0 : 1;
              })
              .forResult();
            if (!resulta.bool) continue;
            const target = resulta.targets[0];
            const list = [];
            if (target.hasEnabledSlot()) list.push('装备区');
            if (!target.isDisabledJudge()) list.push('判定区');
            const resultb = await player
              .chooseButton(['请选择置入的区域', [list, 'textbutton']])
              .set('ai', function (button) {
                return button.link === '判定区' ? 0.5 : 1;
              })
              .forResult();
            if (!resultb.bool) continue;
            let resultc;
            if (resultb.links[0] === '装备区') {
              let lista = ['将此牌置入武器区', '将此牌置入防具区', '将此牌置入防御马区', '将此牌置入进攻马区', '将此牌置入宝具区'];
              for (let j = 0; j < 5; j++) {
                if (!target.hasEnabledSlot(j + 1)) lista.splice(j, 1);
              }
              resultc = await player
                .chooseButton(['你可将一张手牌置于其任意装备栏内并替换原装备牌(<font color= #0088CC><b>以此法置入装备区的牌失去原有效果,失去后复原</b></font>)', [lista.map((item, j) => [j + 1, item]), 'textbutton']])
                .set('ai', function (button) {
                  return Math.random();
                })
                .forResult();
              if (!resultc.bool) continue;
              const index = resultc.links[0];
              const card = i;
              card.subtypes = [`equip${index}`];
              target.equip(card);
            } else {
              game.addVideo('skill', player, ['jpdj', []]);
              const tton = {
                乐不思蜀: 'lebu',
                兵粮寸断: 'bingliang',
                闪电: 'shandian',
              };
              let lista = ['乐不思蜀', '兵粮寸断', '闪电'];
              resultc = await player
                .chooseButton(1, ['###' + get.prompt('jpdj') + '###<div class="text center">将一张<判定牌>以你选择的牌名置于一名角色的判定区</div>', [lista, 'textbutton']])
                .set('filterButton', (button) => {
                  return target.canAddJudge({ name: 'jpdj_' + tton[button.link] });
                })
                .set('ai', function (button) {
                  return Math.random();
                })
                .forResult();
              if (!resultc.bool) continue;
              const cardname = tton[resultc.links[0]];
              player.$give(i, target, false);
              target.addJudge({ name: 'jpdj_' + cardname }, [i]);
            }
          }
        },
      },
      ceui: {
        enable: 'phaseUse',
        content() {
          const list = ['paoxiao', 'wusheng', 'rende'];
          list.yidsy('paoxiao', -3);
          l(list);
        },
      },
      ceui2: {
        enable: 'phaseUse',
        content() {
          function isColliding(element1, element2) {
            const rect1 = element1.getBoundingClientRect();
            const rect2 = element2.getBoundingClientRect();
            return !(rect2.right < rect1.left || rect2.left > rect1.right || rect2.bottom < rect1.top || rect2.top > rect1.bottom);
          }
          for (const deadElement of player.getCards('h')) {
            const uzpdindex = get.uzpdindex(deadElement, player);
            const bccy = deadElement.style.transition;
            const bccyx = deadElement.style.transform;
            let startX = 0;
            let startY = 0;
            let isDragging = false;
            deadElement.onmousedown = function (e) {
              deadElement.style.zIndex = 100;
              deadElement.style.transition = 'none';
              startX = e.clientX;
              startY = e.clientY;
              isDragging = true;
              document.onmousemove = function (e) {
                e.preventDefault();
                if (!isDragging) return;
                const deltaX = e.clientX - startX;
                const deltaY = e.clientY - startY;
                deadElement.style.transform = `translate(${deltaX + deadElement.offsetWidth * uzpdindex}px, ${deltaY}px)`;
              };
              document.onmouseup = function (e) {
                document.onmousemove = null;
                deadElement.style.transition = bccy;
                isDragging = false;
                for (let playerElement of game.players) {
                  if (isColliding(deadElement, playerElement)) {
                    player.draw();
                    xxyiuijm();
                    break;
                  } else {
                    deadElement.style.transform = bccyx;
                    ui.updatehl();
                  }
                }
              };
            };
          }
        },
      },
      ceui3: {
        trigger: {
          global: ['roundStart'],
        },
        audio: 'ext:随笔录/audio/skill:2',
        forced: true,
        filter(event, player) {
          if (game.roundNumber == 1) return true;
          return false;
        },
        content() { },
      },
      xtqi: {
        audio: 'ext:恒梦/audio/degula:14',
        trigger: {
          player: 'useCard2',
        },
        filter(event, player) {
          if (!event.targets || !event.targets.length || !event.isPhaseUsing(player)) return false;
          const history = player.getHistory('useCard'),
            index = history.indexOf(event) - 1;
          if (index < 0) return false;
          const evt = history[index];
          if (!evt || !evt.targets || !evt.targets.length || !evt.isPhaseUsing(player)) return false;
          for (const i of event.targets) {
            if (
              evt.targets.includes(i) &&
              player !== i &&
              player.storage.xtqi.every((j) => {
                return j[1] !== i;
              })
            )
              return true;
          }
          return false;
        },
        init(player) {
          player.storage.xtqi = [];
        },
        async content(event, trigger, player) {
          const targetss = player.getLastUsed(1).targets,
            targets = game.filterPlayer(function (current) {
              return (
                targetss.includes(current) &&
                trigger.targets.includes(current) &&
                player !== current &&
                player.storage.xtqi.every((j) => {
                  return j[1] !== current;
                })
              );
            }),
            tarlen = targets.length;
          for (let i = 0; i < tarlen; i++) {
            const target = targets[i];
            await target.gainMaxHp();
            const damaged = target.getDamagedHp();
            if (damaged) {
              player.loseHp(damaged);
              target.recover(damaged);
            }
            player.loseMaxHp();
            player.storage.xtqi.push([player, target]);
            player.lmxm(player, target, 'red');
          }
        },
        mod: {
          aiOrder(player, card, num) {
            if (typeof card == 'object' && player == _status.currentPhase) {
              const evt = player.getLastUsed();
              if (evt && evt.card && get.isjiui(evt.card)) {
                const info = lib.card[card.name];
                if (info.selectTarget != undefined) {
                  if (info.selectTarget[0] < 0 && !info.toself) return num + 10;
                }
                if (get.type(card) == 'equip') return num - 5;
              }
            }
          },
        },
        group: ['xtqi_xi'],
        subSkill: {
          xi: {
            logTarget: 'target',
            audio: 'xtqi',
            trigger: { global: 'useCardToTargeted' },
            filter(event, player) {
              return player.storage.xtqi.some((i) => i.includes(event.player) && i.includes(event.target) && event.player !== event.target);
            },
            async content(event, trigger, player) {
              const p = trigger.player,
                t = trigger.target;
              if (p !== player) {
                (p.getCards('h').length && player.gain(p.getCards('h').randomGet(), p, 'giveAuto')) || p.loseHp() || player.recover();
              } else {
                (t.getCards('h').length && player.gain(t.getCards('h').randomGet(), t, 'giveAuto')) || t.loseHp() || player.recover();
              }
            },
          },
        },
        ai: {
          effect: {
            player(card, player, target) {
              if (target === player) return;
              const history = player.getHistory('useCard'),
                index = history.indexOf(event) - 1;
              if (index < 0) return;
              const evt = history[index];
              if (!evt || !evt.targets || !evt.targets.length || !evt.isPhaseUsing(player)) return;
              if (evt.targets.includes(target) && player !== target) return [1, 3, 1, -1];
            },
          },
        },
      },
      zuvz: {
        forced: true,
        _priority: 9,
        audio: 'ext:恒梦/audio/degula:2',
        wuqilist() {
          const list = ['cixiong', 'fangtian', 'hanbing', 'qinggang', 'feilongduofeng', 'yitianjian', 'wufengjian', 'yajiaoqiang'];
          list.push(
            ...lib.inpile.filter((i) => {
              return get.tag({ name: i }, 'uizijx'); //QQQ
            })
          );
          return list;
        },
        trigger: {
          global: ['useCardToTargeted'],
        },
        init(player) {
          player.storage.xtqi = [];
        },
        //德古拉伯爵畏惧银制十字型武器,使用以上武器将使【血契之线】断裂(当有装备了银制十字型武器的角色使用<杀>指定目标时,若指示线与【血契之线】相交或重合,【血契之线】将被破坏,每次最多破坏1条解析几何层面距离最近的线.),并对德古拉伯爵造成一点无来源伤害
        filter(event, player) {
          if (event.card.name !== 'sha') return false;
          const wuqilist = lib.skill.zuvz.wuqilist();
          let bool = false;
          const wuqilen = wuqilist.length;
          for (let i = 0; i < wuqilen; i++) {
            if (event.player.getEquip(wuqilist[i])) bool = true;
          }
          if (!bool) return false;
          if (event.player === event.target) return false;
          if (player.storage.xtqi.some((i) => i.includes(event.player) && i.includes(event.target))) return true;
          for (const i of player.storage.xtqi) {
            const seat = [i[0].seatNum, i[1].seatNum].sort((a, b) => a - b);
            const playerx = game.filterPlayer((current) => seat[0] <= current.seatNum && current.seatNum <= seat[1]),
              targetx = game.filterPlayer((current) => seat[0] >= current.seatNum || current.seatNum >= seat[1]);
            if ((playerx.includes(event.player) && targetx.includes(event.target)) || (playerx.includes(event.target) && targetx.includes(event.player))) return true;
          } //QQQ
          return false;
        },
        async content(event, trigger, player) {
          const evtindex = [],
            seat = [trigger.player.seatNum, trigger.target.seatNum].sort((a, b) => a - b),
            playerx = game.filterPlayer((current) => seat[0] <= current.seatNum && current.seatNum <= seat[1]),
            targetx = game.filterPlayer((current) => seat[0] >= current.seatNum || current.seatNum >= seat[1]);
          for (const i of player.storage.xtqi) {
            if ((playerx.includes(i[0]) && targetx.includes(i[1])) || (playerx.includes(i[1]) && targetx.includes(i[0]))) {
              evtindex.push(i);
            }
          }
          const julilist = [];
          for (const i of evtindex) {
            const juli = Math.abs(trigger.player.seatNum - i[0].seatNum) + Math.abs(trigger.player.seatNum - i[1].seatNum);
            julilist.push(juli);
          }
          const juliindex = julilist.indexOf(Math.min(...julilist));
          const arr = evtindex[juliindex];
          arr[1].loseMaxHp();
          player.storage.xtqi.remove(arr);
          player.damage('nosource');
          player.gainMaxHp();
        },
        ai: {
          effect: {
            target(card, player, target) {
              let bool = false;
              const wuqilist = lib.skill.zuvz.wuqilist();
              for (const i of wuqilist) {
                if (player.getEquip(i)) {
                  bool = true;
                }
              }
              if (bool) return [1, 0, 1, -3];
              if (target.storage.xtqi && target.storage.xtqi.some((i) => i[1] === player)) {
                if (player.countCards('h') > 1) return [1, -1, 1, 1];
                else return [1, -2, 1, 2];
              }
            },
            player(card, player, target) {
              if (lib.skill.zuvz.wuqilist().includes(card.name)) return [0.5, -3];
              if (player.storage.xtqi.some((i) => i[1] === target)) {
                return [1, 1, 1, -1];
              }
            },
          },
        },
        group: ['zuvz_die'],
        subSkill: {
          die: {
            trigger: { global: 'dieAfter' },
            forced: true,
            forceDie: true,
            filter(event, player) {
              return player.storage.xtqi.some((i) => i.includes(event.player));
            },
            async content(event, trigger, player) {
              player.storage.xtqi = player.storage.xtqi.filter((xtqi) => {
                if (!xtqi.includes(trigger.player)) {
                  return true;
                }
                if (xtqi[1].isAlive()) xtqi[1].loseMaxHp();
                if (player.isAlive()) {
                  player.gainMaxHp();
                }
                return false;
              });
            },
          },
        },
      },
    },
    dynamicTranslate: {
      goqu(player) {
        if (player.hasSkill('wwld')) return '【转】你随机读取牌堆和弃牌堆中等同你手牌数的牌.当你需要使用或打出一张牌时,阴,你可以随机弃一张牌将弃牌堆中本回合未以此法使用的牌置于〖未来〗上.<br>阳,你可以随机弃一张牌将牌堆中本回合未以此法使用的牌置于〖未来〗上';
        return '【转】你随机读取牌堆和弃牌堆中等同你手牌数的牌.当你需要使用或打出一张牌时,阴,你可以随机弃一张牌视为使用弃牌堆中本回合未以此法使用的牌.<br>阳,你可以随机弃一张牌视为使用剩余牌堆中本回合未以此法使用的牌';
      },
    },
    translate: {
      njdu1: '难度★',
      njdu2: '<font color=#0BDA51>难度★★</font>',
      njdu3: '<font color=#00FFFF>难度★★★</font>',
      njdu4: '<font color=#FF00FF>难度★★★★</font>',
      njdu5: '<font color=#FFD700>难度★★★★★</font>',
      njdu6: '<font color=#FF0000>难度★★★★★★</font>',
      njdu7: '<font color=#333333>难度★★★★★★★</font>',
      hgmg: '<font color=#EE82EE>恒梦</font>',
      hgmgi: '<font color=#EE82EE>✿魔法</font>',
      degula: '德古拉伯爵',
      mg: '绘梦',
      siuivimg: '岁之梦',
      tmeevimg: '天鹅之梦',
      qiqqve: '祈求者',
      siui_iy: '初春',
      siui_xx: '仲夏',
      siui_qq: '晚秋',
      siui_ds: '暮冬',
      jxqiromg: '蔷薇恋',
      yuyjjx: '预言家',
      tmhg: '天秤座',
      geve: '咏叹者',
      lhvuvinv: '织蛛',
      ceuiwujl: '测试武将',
      xtqi: '血契',
      xtqi_info: '出牌阶段,当你对一名其他角色连续使用两张牌后,你可以在你们之间构筑一条血色之线,称为【<font color=#FF0000>血契之线</font>】,令目标并增加1点体力上限并吸食自己的血液,直到其体力值完全回复,并与其建立【<font color=#FF0000>血契</font>】.<br>【<font color=#FF0000>血契</font>】:当双方对对方使用牌时,德古拉伯爵可以获得【<font color=#FF0000>血契</font>】目标一张手牌,若目标没有手牌,则改为吸食其一点血液',
      zuvz: '诅咒',
      zuvz_info: '德古拉伯爵畏惧银制十字型武器,使用以上武器将使【<font color=#FF0000>血契之线</font>】断裂(当有装备了银制十字型武器的角色使用<杀>指定目标时,若指示线与【<font color=#FF0000>血契之线</font>】相交或重合,【<font color=#FF0000>血契之线</font>】将被破坏,每次最多破坏1条解析几何层面距离最近的线.),并对德古拉伯爵造成一点无来源伤害',
      zojm: '作茧',
      zojm_info: '当你使用一张实体牌数为1的牌时:<br>1.<font color=#EE82EE>若此牌位于处理区</font>,你可以观看牌堆底8张牌,并将此牌与其中一张进行置换.若8张牌中有至少三张牌符合条件(点数成等差数列、点数成等比数列、点数属于斐波那契数列中连续项)的牌,你可以弃置其中3张牌.若这三张牌符合条件:<br>①等差数列,X=>【基本】<br>②等比数列,X=>【锦囊】<br>③斐波那契数列,X=>【非装备牌】<br>你可以将一张牌当做本轮没有使用过的X牌使用(不计入次数).<br>2.<font color=#EE82EE>若此牌位于装备区</font>,你可以观看牌堆底8张牌,交换其中两张牌的位置,若此牌组的点数以由小到大为标准次序的逆序数发生了变化,且变化值不大于你的体力上限,你可以摸与逆序数变化值等量张牌',
      zojm2: '自缚',
      zojm2_info: '你无法使用与你本回合进入过牌堆的牌牌名相同的牌.当你因【作茧】而使用牌后,你重置【自缚】',
      bianhx_info: '生此岸,长彼岸,纵使花叶两不见,入骨相思在忘川',
      uimg: '时梦',
      uimg_info: '你拥有四副手牌,分别隶属时序:春、夏、秋、冬.出牌阶段,若你未发动【更迭】,你可调整手牌隶属时序',
      uimg_iy: '<font color=#99FF99>春♥️️</font>',
      uimg_xx: '<font color=#800080>夏♦️️</font>',
      uimg_qq: '<font color=#FFDD55>秋♣️️</font>',
      uimg_ds: '<font color=#70F3FF>冬♠️️</font>',
      ggdp: '更迭',
      ggdp_info: '你使用或打出手牌时,根据其花色转化季节(<font color=#99FF99>春♥️️</font>,<font color=#800080>夏♦️️</font>,<font color=#FFDD55>秋♣️️</font>,<font color=#70F3FF>冬♠️️</font>)',
      hgyt: '月恒',
      hgyt_info: '每个季节对应的手牌数恒为3张',
      hwbdxrwu: '旋舞',
      hwbdxrwu_info: '你的回合开始时,你可选择【内旋】或【外旋】,直到你的下回合开始.<br>【内旋】:当有角色回合内/回合外失去处于圆舞曲内/外的牌时,圆舞曲范围较靠近的一项调整至该牌点数.<br>【外旋】:当有角色回合内/回合外失去处于圆舞曲外/内的牌时,圆舞曲范围较靠近的一项调整至该牌点数.<br>若该角色为你,则你摸1张牌(若手牌数小于体力上限,则改为2张)',
      hvmg: '绘梦',
      hvmg_info: '每轮游戏开始时,记录场上角色体力、各区域牌,进入【梦境】<br>随机分配体力、手牌.<br>【<font color=#800080>梦境</font>】:状态技,在梦境中,你无法使用实体牌,拥有【过去】或【未来】,用牌有50%的概率在未来与过去中变幻形态,有角色死亡时,梦境破碎,回到现实记录状态,若该角色为你,改为你失去1点体力',
      goqu: '尚未定义',
      goqu_info: '尚未定义',
      goquyr: '<font color=#800080>过去</font>',
      goquyr_info: '转换技,每回合开始时,你随机读取牌堆和弃牌堆中等同你手牌数的牌.当你需要使用或打出一张牌时,阴,你可以随机弃一张牌视为使用弃牌堆中本回合未以此法使用的牌.阳,你可以随机弃一张牌视为使用剩余牌堆中本回合未以此法使用的牌',
      goqugd: '<font color=#800080>未来</font>',
      goqugd_info: '转换技,每回合开始时,你随机读取牌堆和弃牌堆中等同你手牌数的牌.当你需要使用或打出一张牌时,阴,你可以随机弃一张牌将弃牌堆中本回合未以此法使用的牌置于〖未来〗上.阳,你可以随机弃一张牌将牌堆中本回合未以此法使用的牌置于〖未来〗上',
      mcmc: '梦境',
      mcmc_info: '状态技,在梦境中用牌有50%的概率变幻形态',
      wwld: '未来',
      mgvs: '梦终',
      mgvs_info: '梦终之时,你对你梦中指定的角色使用【未来】牌',
      mlmli: '并蒂',
      mlmli_info: '每轮开始时,你可以和一名其他角色共用手牌(本轮其中一方获得或失去牌时,另一方获得或失去相同的牌).每轮结束时,你为你们分配手牌',
      yuyj: '预言',
      yuyj_info: '每轮开始时,你可以预言一名{<font color=#FF0080>身份牌未公开且你未曾正确预言的</font>}角色的身份{<font color=#F00078>,预言错误后,你的回合开始时,视为其回合开始</font>}.预言正确{<font color=#D9006C>后,其回合开始时,视为你的回合开始.双方以此法占据的回合内,视为拥有对方的技能</font>}',
      igif: '成谶',
      igif_info: '当你完成以下任务后:①预言过场上所有身份②预言过场上所有角色的身份③正确预言过场上所有角色的身份.你将【预言】描述中第等序号个{ }内的文字删除',
      yuyjplus1: '预言',
      yuyjplus1_info: '每轮开始时,你可以预言一名角色的身份{<font color=#F00078>,预言错误后,你的回合开始时,视为其回合开始</font>}.预言正确{<font color=#D9006C>后,其回合开始时,视为你的回合开始.双方以此法占据的回合内,视为拥有对方的技能</font>}',
      yuyjplus2: '预言',
      yuyjplus2_info: '每轮开始时,你可以预言一名{<font color=#FF0080>身份牌未公开且你未曾正确预言的</font>}角色的身份.预言正确{<font color=#D9006C>后,其回合开始时,视为你的回合开始.双方以此法占据的回合内,视为拥有对方的技能</font>}',
      yuyjplus3: '预言',
      yuyjplus3_info: '每轮开始时,你可以预言一名角色的身份.预言正确{<font color=#D9006C>后,其回合开始时,视为你的回合开始.双方以此法占据的回合内,视为拥有对方的技能</font>}',
      yuyjplus4: '预言',
      yuyjplus4_info: '每轮开始时,你可以预言一名角色的身份,预言正确',
      'qiqq_♥️️': '<font color=#FF0000>♥️️</font>',
      'qiqq_♦️️': '<font color=#FF0000>♦️️</font>',
      'qiqq_♣️️': '<font color=#000000>♣️️</font>',
      'qiqq_♠️️': '<font color=#000000>♠️️</font>',
      qiqq: '祈求',
      qiqq_info: '当你使用本轮未使用过花色的牌后,将此牌的目标角色横置,并重铸手牌中该花色的所有牌.当你使用通过【祈求】获得的牌后,根据该牌与发动【祈求】的牌的花色组合,获得对应技能',
      qiqq_hh: '急救<font color=#FF0000>♥️️♥️️</font>',
      qiqq_hh_info: '你的回合外,你可以将一张红色牌当做【桃】使用',
      qiqq_dd: '国色<font color=#FF0000>♦️️♦️️</font>',
      qiqq_dd_info: '你可以将一张♦️️牌当做【乐不思蜀】使用',
      qiqq_cc: '连环♣️️♣️️',
      qiqq_cc_info: '你可以将♣️️手牌当作【铁索连环】使用或重铸',
      qiqq_ss: '酒池♠️️♠️️',
      qiqq_ss_info: '你可以将一张♠️️手牌当作【酒】使用',
      qiqq_hd: '铁骑<font color=#FF0000>♥️️♦️️</font>',
      qiqq_hd_info: '当你使用【杀】指定一名角色为目标后,你可以进行一次判定并令该角色的非锁定技失效直到回合结束,除非该角色弃置一张与判定结果花色相同的牌,否则不能使用【闪】抵消此【杀】',
      qiqq_hc: '清谈<font color=#FF0000>♥️️</font>♣️️',
      qiqq_hc_info: '出牌阶段限一次,你可令所有有手牌的角色同时选择一张手牌并同时展示.你可以获得其中一种花色的牌,展示此花色牌的角色各摸一张牌.若如此做,弃置其他的牌',
      qiqq_hs: '观微<font color=#FF0000>♥️️</font>♠️️',
      qiqq_hs_info: '每回合限一次.一名角色的出牌阶段结束时,若其本回合使用过两张以上的牌且这些牌均有花色且花色均相同,则你可以弃置一张牌,令其摸两张牌并进行一个额外的出牌阶段',
      qiqq_dc: '渐营<font color=#FF0000>♦️️</font>♣️️',
      qiqq_dc_info: '当你使用与你使用的上一张牌点数或花色相同的牌时,你可以摸一张牌',
      qiqq_ds: '盗书<font color=#FF0000>♦️️</font>♠️️',
      qiqq_ds_info: '出牌阶段限一次.你可以选择一个花色并获得一名其他角色的一张手牌.若此牌花色与你选择的相同,则你对其造成1点伤害且你〖盗书〗于此阶段内可使用的次数上限+1.否则你须交给其一张与此牌花色不同的手牌(没有则展示手牌)',
      qiqq_cs: '乱击♣️️♠️️',
      qiqq_cs_info: '出牌阶段,你可以将任意两张相同花色的手牌当做【万箭齐发】使用',
      tmpk: '天平',
      tmpk_info: '处于天平之中',
      iihg: '持衡',
      iihg1: '持衡',
      iihg2: '持衡',
      iihg2_info: '你可以获得触发角色上所有【砝码】,并令该事件所有角色执行相应效果',
      iihg_info: '每轮开始时,你依次分配<摸>、<攻>、<受>、<恢>、<损>、<佐>、<技>、<静>标记,并将其置于【天平】上.<br>其砝码重量 = 基本 + 普锦 * 2 + 装备 * 3 + 延锦 * 4.<br>每当有角色的砝码重量发生变化时,若场上有至少两名角色的砝码重量相同,你可以获得该角色的所有【砝码】,并根据其标记和砝码重量,令其执行相应效果(X向上取整):<br>1.<font color=#EE82EE>重量<=4</font>:①摸:其弃置或摸X/2张牌②攻、受、恢:其回复或失去1点体力③损、佐:你视为对其使用一张【桃】或【杀】④技、静:你令其少1个摸牌阶段或多1个摸牌阶段.<br><font color=#EE82EE>2.重量>4</font>:①摸:你令其弃置或摸X张牌②攻、受、恢:你令其回复或失去X/4点体力③损、佐:你亮出牌堆顶X张牌,并可以使用至多4张牌④技、静:其获得一个额外的回合或翻面',
      uihg: '失衡',
      uihg_info: '每轮游戏开始时,你可以令任意名角色失去其【砝码】并获得以此法失去的【砝码】',
      viig: '执秤',
      viig_info: '当你造成/受到伤害/回合结束时,你可以获得场上一张【砝码】,并将一张手牌作为【砝码】置于一名角色的【天平】上',
      tmhgFu: '砝码',
      tmhgFu_info: '锁定技,当场上有角色完成标记内容时,你将牌堆顶一张牌置于其的武将牌上,称为【砝码】<br><font color=#EE82EE>标记内容</font>:①摸:摸牌阶段额外摸牌②攻:对其他角色造成伤害③受:受到其他角色造成的伤害④恢:回复体力⑤损:对其他角色使用负收益的牌⑥佐:使用正收益的牌⑦技:使用技能⑧静:进入结束阶段',
      ystj: '咏叹',
      ystj_info: '锁定技.每轮开始时,你咏叹一曲,随机更换场景环境.每回合开始时,你可以令一名角色免受环境的影响',
      ystj_1: '回溯',
      ystj_1_info: '锁定技.每回合结束阶段开始时,当前回合角色将体力值与手牌数调整至等同于其准备阶段对应数值',
      ystj_2: '黑洞',
      ystj_2_info: '锁定技.每回合结束阶段开始时,角色随机交换位置',
      ystj_3: '寂夜',
      ystj_3_info: '锁定技.每回合随机隐藏任意非当前回合角色',
      ystj_4: '沉渊',
      ystj_4_info: '锁定技.全场火属性伤害失效.一名角色受到雷属性伤害后,所有与其座次相邻的角色失去1点体力',
      ystj_5: '谧森',
      ystj_5_info: '锁定技.每回合第一次对使用牌时,此目标改为场上随机角色',
      ystj_6: '墨染',
      ystj_6_info: '锁定技.每回合结束阶段开始时,其他所有角色随机回复或失去体力',
      ystj_7: '冰河',
      ystj_7_info: '锁定技.每回合准备阶段开始时,所有角色随机翻面',
      ystj_8: '炎花',
      ystj_8_info: '锁定技.全场火属性伤害+1.每回合准备阶段开始时,其他角色随机横置',
      erxl: '二向',
      erxl_tag: '诗歌',
      erxl_info: '锁定技.咏叹结束后,若你咏叹诗歌数为双数,你可以摸已咏叹诗歌数的牌,并展示所有手牌.直到你的回合结束获得如下效果:1.你可以将其中一张黑色牌当做任意一张普通锦囊牌使用(每回合每种牌名限一次).2.当你使用其中的一张红色牌时,你摸一张牌',
    },
  };
  lib.config.characters.add('hgmgi');
  lib.config.all.characters.add('hgmgi');
  return hgmgi;
});
game.import('character', function (lib, game, ui, get, ai, _statu) {
  const hgmgf = {
    name: 'hgmgf',
    connect: true,
    characterTitle: {
      xrvl: '难度3i<br>运营5i<br>菜刀5i<br>保核2i',
      yuqk: '难度1i<br>运营3i<br>菜刀4i<br>保核6i',
      xqlo: '难度4i<br>运营1i<br>菜刀5i<br>保核2i',
      uijmddlirf: '难度1i<br>运营1i<br>菜刀2i<br>保核5i',
      hwbdui: '难度1i<br>运营1i<br>菜刀6i<br>保核2i',
      hzyi: '难度1i<br>运营5i<br>菜刀7i<br>保核1i',
      yuhldadi: '难度7i<br>运营5i<br>菜刀5i<br>保核1i',
      jbwu: '<font color=#FF0000><big><b>τнanκчou</b></big></font><br>难度4i<br>运营4i<br>菜刀6i<br>保核4i',
      whirwunv: '<font color=#FF0000><big><b>🐔你太霉</b></big></font><br>难度2i<br>运营1i<br>菜刀1i<br>保核6i',
      ihee: '难度6i<br>运营2i<br>菜刀6i<br>保核1i',
      hgmgfuxi: '难度3i<br>运营3i<br>菜刀3i<br>保核3i',
    },
    character: {
      hzyi: ['male', 'shu', 4, ['ueri'], ['des:半神之弓']],
      yuqk: ['male', 'shu', 2, ['dcui', 'hyyr', 'lwjp'], ['des:着我宝衣,不入沉沦']],
      xqlo: ['female', 'qun', '5/9', ['mjtolovfMark', 'uzwh', 'aimk', 'qigu', 'ughx'], ['des:秋去带黄叶,冬来生白雪']],
      mjtolohx: ['female', 'qun', 9, [], []],
      mjuuuahx: ['female', 'qun', 9, [], []],
      yuhldadi: ['male', 'wu', 3, ['hmdili', 'qslj', 'tmlb', 'vihg', 'diliugvi', 'diliqrdc', 'diliiigh'], ['des:真龙']],
      xrvl: ['male', 'qun', 3, ['jqxi', 'jqvr'], ['des:世上安得两全法,不负如来不负卿']],
      hwbdui: ['male', 'qun', 4, ['povh', 'ybyh', 'sohy', 'coyu'], ['des:黑白无常']],
      bian: ['male', 'qun', 4, ['sohy1', 'yhfu', 'rekuangcai', 'shejian'], []],
      wujq: ['male', 'qun', 4, ['sohy2', 'ybfu', 'refuqi', 'jiaozi'], []],
      jbwu: ['male', 'wei', '3/9', ['vfti', 'jbwunppj', 'yeho'], []],
      jbwudj: ['male', 'qun', '3/9', [], []],
      whirwunv: ['female', 'wei', 4, ['ybhy', 'whug'], []],
      ihee: ['female', 'shu', 3, ['ytxl', 'ytui', 'bfyt'], []],
      hgmgfuxi: ['male', 'qun', 3, ['wjfagvyix']],
    },
    characterIntro: {},
    characterSort: {
      hgmgf: {
        njdu1: ['geve', 'mg', 'mgxuuc', 'mgqbyilu', 'mgluxy', 'hwbdui', 'bdhell', 'yuqk', 'gryb', 'demotver', 'jxqiromg', 'jmsove', 'uijmddlirf'],
        njdu2: ['hzyi', 'tcqm', 'litdbd', 'gjjlmoye', 'ximffwxt', 'grnk', 'yuyjjx'],
        njdu3: ['dmglxx', 'xrvl'],
        njdu4: ['xnlsnv', 'qiqqve', 'xqlo', 'tmeevimg'],
        njdu5: ['tmhg'],
        njdu6: ['iftmyi', 'siuivimg', 'lqysyr', 'yian', 'bdfamonv'],
        njdu7: ['yuhldadi'],
      },
    },
    skill: {
      ytxlheart: {
        mark: true,
        marktext: '♥️️',
        intro: {
          name: '♥️️',
          content: 'expansion',
          markcount: 'expansion',
        },
      },
      ytxldiamond: {
        mark: true,
        marktext: '♦️️',
        intro: {
          name: '♦️️',
          content: 'expansion',
          markcount: 'expansion',
        },
      },
      ytxlclub: {
        mark: true,
        marktext: '♣️️',
        intro: {
          name: '♣️️',
          content: 'expansion',
          markcount: 'expansion',
        },
      },
      ytxlspade: {
        mark: true,
        marktext: '♠️️',
        intro: {
          name: '♠️️',
          content: 'expansion',
          markcount: 'expansion',
        },
      },
      ytxl: {
        trigger: { player: [], global: 'addToExpansionAfter' },
        group: ['ytxl_discard'],
        subfrequent: ['judge'],
        hxseuu(player) {
          let hxseuu = 0;
          const suits = get.hxse();
          for (const i of suits) {
            if (player.getExpansions(`ytxl${i}`) && player.getExpansions(`ytxl${i}`).length) hxseuu += 1;
          }
          return hxseuu;
        },
        ilzcyt(player) {
          const cards = [];
          const suits = get.hxse();
          for (const i of suits) {
            cards.push(...player.getExpansions(`ytxl${i}`));
          }
          const hearts = [],
            diamonds = [],
            clubs = [],
            spades = [];
          const suittosuits = {
            heart: hearts,
            diamond: diamonds,
            club: clubs,
            spade: spades,
          };
          for (const i in suittosuits) {
            suittosuits[i].push(cards.filter((j) => j.suit === i));
          }
          const suit = cards.reduce((a, b) => a.add(b.suit), []);
          const suittoname = {
            1: 'cjyt',
            2: 'xmyt',
            3: 'kvyt',
            4: 'mjyt',
          };
          for (const i of Object.keys(suittoname)) {
            const node = document.getElementById(suittoname[i]);
            if (node) {
              ui.window.style.transition = '';
              ui.window.removeChild(node);
            }
          }
          const ytxl = suittoname[suit.length];
          game.xmuitupm('extension/恒梦/image/ytll/' + ytxl + '.png', 0, { height: '16%', width: '9%' }, ytxl, function () {
            const dialogx = ui.create.dialog('月华:陈列月之真章', `<div class="text center">♥️️牌</div>`, player.getExpansions('ytxlheart') && player.getExpansions('ytxlheart').length ? player.getExpansions('ytxlheart') : '无', `<div class="text center">♦️️牌</div>`, player.getExpansions('ytxldiamond') && player.getExpansions('ytxldiamond').length ? player.getExpansions('ytxldiamond') : '无', `<div class="text center">♣️️牌</div>`, player.getExpansions('ytxlclub') && player.getExpansions('ytxlclub').length ? player.getExpansions('ytxlclub') : '无', `<div class="text center">♠️️牌</div>`, player.getExpansions('ytxlspade') && player.getExpansions('ytxlspade').length ? player.getExpansions('ytxlspade') : '无');
            setTimeout(function () {
              dialogx.close();
            }, 2000);
          });
        },
        forced: true,
        filter(event, player) {
          const cards = [];
          const suits = get.hxse();
          for (const i of suits) {
            cards.push(...player.getExpansions(`ytxl${i}`));
          }
          return !uuzuxlts(player.storage.ytxl, cards);
        },
        content() {
          lib.skill.ytxl.ilzcyt(player);
          const cards = [];
          const suits = get.hxse();
          for (const i of suits) {
            cards.push(...player.getExpansions(`ytxl${i}`));
          }
          player.storage.ytxl = cards;
        },
        init(player, skill) {
          player.storage.ytxl = [];
          const suits = get.hxse();
          const skills = suits.reduce((a, b) => {
            a.push(`ytxl${b}`);
            return a;
          }, []);
          player.addSkills(skills);
          if (Array.isArray(lib.skill.ytxl.trigger.player) == false) {
            lib.skill.ytxl.trigger.player = [];
          }
          for (let j = 0; j < lib.character.ihee[3].length; j++) {
            let skillm = lib.character.ihee[3][j];
            if (skillm != skill) {
              lib.skill.ytxl.trigger.player.add(`${skillm}After`);
            }
          }
          game.finishSkill('ytxl');
        },
        subSkill: {
          discard: {
            trigger: { global: ['loseAfter', 'loseAsyncAfter'] },
            filter(event, player) {
              if (event.type != 'discard' || event.getlx === false) return false;
              var cards = event.cards.slice();
              return cards.filterInD('d').length;
            },
            forced: true,
            content() {
              'step 0';
              const cards2 = trigger.cards.slice();
              const cards = cards2.filterInD('d');
              let atm = [],
                btm = [],
                ctm = [],
                dtm = [];
              const suittozimu = {
                heart: atm,
                diamond: btm,
                club: ctm,
                spade: dtm,
              };
              for (const i of cards) {
                if (suittozimu[i.suit]) {
                  suittozimu[i.suit].push(i);
                } //QQQ
              }
              event.stz = Object.values(suittozimu);
              ('step 1');
              const suittz = event.stz.shift();
              l(suittz);
              if (suittz.length) {
                player
                  .addToExpansion(suittz)
                  .gaintag.add(`ytxl${suittz[0].suit}`)
                  .sort((a, b) => a.number - b.number);
              }
              if (event.stz.length) event.redo();
            },
          },
        },
      },
      ytui: {
        audio: 'ext:恒梦/audio/ihee:4',
        trigger: { player: 'useCardAfter' },
        filter(event, player) {
          if (
            !player.hasHistory('lose', function (evt) {
              return evt.hs.length && evt.parent == event;
            })
          )
            return false;
          return player.getExpansions(`ytxl${event.card.suit}`) && player.getExpansions(`ytxl${event.card.suit}`).length;
        },
        async content(event, trigger, player) {
          const cards = [];
          const suits = get.hxse();
          for (const i of suits) {
            cards.push(...player.getExpansions(`ytxl${i}`));
          }
          const hearts = [],
            diamonds = [],
            clubs = [],
            spades = [];
          const suittosuits = {
            heart: hearts,
            diamond: diamonds,
            club: clubs,
            spade: spades,
          };
          for (const i in suittosuits) {
            suittosuits[i].push(cards.filter((j) => j.suit === i));
          }
          const suit = cards.reduce((a, b) => {
            a.add(b.suit);
            return a;
          }, []).length;
          const suittoname = {
            1: 'cjyt',
            2: 'xmyt',
            3: 'kvyt',
            4: 'mjyt',
          };
          const node = document.getElementById(suittoname[suit]);
          game.lmxmxy([0, window.innerHeight / 2, window.innerWidth, window.innerHeight / 2], 'pink', true, 'ytui', true);
          const expansion = player.getExpansions(`ytxl${trigger.card.suit}`);
          _status.texn = true;
          _status.buttonover = [];
          const buttonover = function () {
            const bg = document.getElementsByTagName('div');
            if (!bg.length) return;
            for (let i = 0; i < bg.length; i++) {
              _status.buttonover.addArray(bg[i].querySelectorAll('.card.fullskin'));
            }
            if (!_status.buttonover.length) return;
            _status.buttonover.forEach((button) => {
              if (button.onmouseover) return;
              button.onmouseover = function () {
                if (!lib.config.auto_confirm && !this.classList.contains('selected')) return;
                const card = button.link;
                let num;
                if (card && card.number) num = card.number;
                else return;
                let pd = Math.PI;
                let jndua = num <= 6 ? 180 - 30 * num : num <= 12 ? 540 - 30 * num : 999;
                let jnduc = 360 - jndua;
                let jndub = jndua - 180 < 0 ? 360 + jndua - 180 : jndua - 180;
                let krdu = window.innerWidth / 2,
                  gcdu = window.innerHeight / 2;
                if (jndua >= 45 && jndua <= 135) {
                  let jnduyi = ((90 - jndua) / 180) * pd,
                    jnduer = ((jnduyi + 180) / 180) * pd,
                    jndusj = ((360 - jnduyi) / 180) * pd;
                  let lmxmyi = gcdu + Math.tan(jnduyi) * gcdu,
                    lmxmer = gcdu - Math.tan(jnduyi) * gcdu,
                    lmxmsj = gcdu + Math.tan(jnduyi) * gcdu;
                  let nodeglxm = game.lmxmxy([ui.window.getBoundingClientRect().right, lmxmyi, 0, lmxmer], 'yellow', true, 'ytglxm', true);
                  let nodeveue;
                  setTimeout(function () {
                    nodeveue = game.lmxmxy([ui.window.getBoundingClientRect().right / 2, gcdu, 0, lmxmsj], 'blue', true, 'ytveue', true);
                    nodeveue.listenTransition(function () {
                      setTimeout(
                        function () {
                          if (nodeveue.classList.contains('removing')) return;
                          nodeveue.delete();
                        },
                        (lib.config.duration * 2) / 3
                      );
                    });
                  }, lib.config.duration / 2);
                  nodeglxm.listenTransition(function () {
                    setTimeout(
                      function () {
                        if (nodeglxm.classList.contains('removing')) return;
                        nodeglxm.delete();
                      },
                      (lib.config.duration * 2) / 3
                    );
                  });
                } else if (225 <= jndua && jndua <= 315) {
                  let jnduyi = ((270 - jndua) / 180) * Math.PI,
                    jnduer = Math.tan(jnduyi) * gcdu;
                  let lmxmyi = gcdu - jnduer,
                    lmxmer = gcdu + jnduer,
                    lmxmsj = gcdu - jnduer;
                  let nodeglxm = game.lmxmxy([0, lmxmyi, krdu * 2, lmxmer], 'yellow', true, 'ytglxm', true);
                  let nodeveue;
                  setTimeout(function () {
                    nodeveue = game.lmxmxy([krdu, gcdu, krdu * 2, lmxmsj], 'blue', true, 'ytveue', true);
                    nodeveue.listenTransition(function () {
                      setTimeout(
                        function () {
                          if (nodeveue.classList.contains('removing')) return;
                          nodeveue.delete();
                        },
                        (lib.config.duration * 2) / 3
                      );
                    });
                  }, lib.config.duration / 2);
                  nodeglxm.listenTransition(function () {
                    setTimeout(
                      function () {
                        if (nodeglxm.classList.contains('removing')) return;
                        nodeglxm.delete();
                      },
                      (lib.config.duration * 2) / 3
                    );
                  });
                } else if (135 <= jndua && jndua <= 225) {
                  let jnduyi = ((180 - jndua) / 180) * pd;
                  let jnduer = Math.tan(jnduyi) * krdu;
                  let lmxmyi = krdu + jnduer,
                    lmxmer = krdu - jnduer,
                    lmxmsj = krdu - jnduer;
                  let nodeglxm = game.lmxmxy([lmxmyi, 0, lmxmer, gcdu * 2], 'yellow', true, 'ytglxm', true);
                  let nodeveue;
                  setTimeout(function () {
                    nodeveue = game.lmxmxy([ui.window.getBoundingClientRect().right / 2, gcdu, lmxmsj, 0], 'blue', true, 'ytveue', true);
                    nodeveue.listenTransition(function () {
                      setTimeout(
                        function () {
                          if (nodeveue.classList.contains('removing')) return;
                          nodeveue.delete();
                        },
                        (lib.config.duration * 2) / 3
                      );
                    });
                  }, lib.config.duration / 2);
                  nodeglxm.listenTransition(function () {
                    setTimeout(
                      function () {
                        if (nodeglxm.classList.contains('removing')) return;
                        nodeglxm.delete();
                      },
                      (lib.config.duration * 2) / 3
                    );
                  });
                } else if ((0 <= jndua && jndua <= 45) || (315 <= jndua && jndua <= 360)) {
                  let jnduyi = (jndua / 180) * pd;
                  let jnduer = Math.tan(jnduyi) * krdu;
                  let lmxmyi = krdu + jnduer,
                    lmxmer = krdu - jnduer,
                    lmxmsj = krdu - jnduer;
                  let nodeglxm = game.lmxmxy([lmxmyi, gcdu * 2, lmxmer, 0], 'yellow', true, 'ytglxm', true);
                  let nodeveue;
                  setTimeout(function () {
                    nodeveue = game.lmxmxy([ui.window.getBoundingClientRect().right / 2, gcdu, lmxmsj, gcdu * 2], 'blue', true, 'ytveue', true);
                    nodeveue.listenTransition(function () {
                      setTimeout(
                        function () {
                          if (nodeveue.classList.contains('removing')) return;
                          nodeveue.delete();
                        },
                        (lib.config.duration * 2) / 3
                      );
                    });
                  }, lib.config.duration / 2);
                  nodeglxm.listenTransition(function () {
                    setTimeout(
                      function () {
                        if (nodeglxm.classList.contains('removing')) return;
                        nodeglxm.delete();
                      },
                      (lib.config.duration * 2) / 3
                    );
                  });
                } else {
                  let jd;
                  for (let i = 1; i <= 12; i++) {
                    jd = i <= 6 ? 180 - 30 * i : 540 - 30 * i;
                    if (jd >= 45 && jd <= 135) {
                      let jdyi = ((90 - jd) / 180) * pd,
                        jnduer = ((jdyi + 180) / 180) * pd,
                        jndusj = ((360 - jdyi) / 180) * pd;
                      let lmxmyi = gcdu + Math.tan(jdyi) * gcdu,
                        lmxmer = gcdu - Math.tan(jdyi) * gcdu,
                        lmxmsj = gcdu + Math.tan(jdyi) * gcdu;
                      let nodeveue = game.lmxmxy([ui.window.getBoundingClientRect().right / 2, gcdu, krdu * 2, lmxmsj], 'blue', true, 'ytveue', true);
                      nodeveue.listenTransition(function () {
                        setTimeout(
                          function () {
                            if (nodeveue.classList.contains('removing')) return;
                            nodeveue.delete();
                          },
                          (lib.config.duration * 2) / 3
                        );
                      });
                    } else if (jd >= 225 && jd <= 315) {
                      let jdyi = ((270 - jd) / 180) * Math.PI,
                        jnduer = Math.tan(jdyi) * gcdu;
                      let lmxmyi = gcdu - jnduer,
                        lmxmer = gcdu + jnduer,
                        lmxmsj = gcdu - jnduer;
                      let nodeveue = game.lmxmxy([ui.window.getBoundingClientRect().right / 2, gcdu, 0, lmxmsj], 'blue', true, 'ytveue', true);
                      nodeveue.listenTransition(function () {
                        setTimeout(
                          function () {
                            if (nodeveue.classList.contains('removing')) return;
                            nodeveue.delete();
                          },
                          (lib.config.duration * 2) / 3
                        );
                      });
                    } else if (jd >= 135 && jd <= 225) {
                      let jdyi = ((180 - jd) / 180) * pd;
                      let jnduer = Math.tan(jdyi) * krdu;
                      let lmxmyi = krdu - jnduer,
                        lmxmer = krdu + jnduer,
                        lmxmsj = krdu + jnduer;
                      let nodeveue = game.lmxmxy([ui.window.getBoundingClientRect().right / 2, gcdu, lmxmyi, 0], 'blue', true, 'ytveue', true);
                      nodeveue.listenTransition(function () {
                        setTimeout(
                          function () {
                            if (nodeveue.classList.contains('removing')) return;
                            nodeveue.delete();
                          },
                          (lib.config.duration * 2) / 3
                        );
                      });
                    } else if ((0 <= jd && jd <= 45) || (315 <= jd && jd <= 360)) {
                      let jdyi = (jd / 180) * pd;
                      let jnduer = Math.tan(jdyi) * krdu;
                      let lmxmyi = krdu + jnduer,
                        lmxmer = krdu - jnduer,
                        lmxmsj = krdu - jnduer;
                      let nodeveue = game.lmxmxy([krdu, gcdu, lmxmyi, gcdu * 2], 'blue', true, 'ytveue', true);
                      nodeveue.listenTransition(function () {
                        setTimeout(
                          function () {
                            if (nodeveue.classList.contains('removing')) return;
                            nodeveue.delete();
                          },
                          (lib.config.duration * 2) / 3
                        );
                      });
                    }
                  }
                }
              };
            });
          };
          buttonover();
          const uubnyids = setInterval(function () {
            buttonover();
            if (!_status.texn) clearInterval(uubnyids);
          }, 1000);
          const links = await player
            .chooseButton(get.prompt('ytui'), ['使用一张牌？', expansion], true)
            .set('ai', function (button) {
              return get.value(button.link);
            })
            .forResultLinks();
          _status.texn = false;
          l(links[0].name);
          if (!links || !links.length) return;
          const card = links[0];
          if (!player.hasUseTarget(card)) {
            await player.gain(card, 'gain2');
            return;
          } else await player.$gain(card, 'gain2');
          const fp = game.players.concat(game.dead).sortBySeat(player);
          const veuedu = lib.skill.ytxl.hxseuu(player) / 4;
          const num = card.number;
          let jndu = 360 / 12;
          let jndui = 360 / game.players.length;
          let jndux = num <= 6 ? 180 - 30 * num : num <= 12 ? 540 - 30 * num : 999;
          const jtsejndu = [];
          for (let i = 0; i < fp.length; i++) {
            jtsejndu.push(jndui * i);
          }
          l(jtsejndu);
          let jndua, jndub, jnduc;
          jndua = jndux;
          jndub = 360 - jndux;
          jnduc = jndux - 180 < 0 ? 360 + jndux - 180 : jndux - 180;
          let zvvsa, zvvsb, zvvsc;
          let yi = 360,
            er = 360,
            sj = 360;
          game.log(jndua, jndub, jnduc);
          for (let i = 0; i < fp.length; i++) {
            let yii = Math.abs(jtsejndu[i] - jndua),
              err = Math.abs(jtsejndu[i] - jndub),
              sjj = Math.abs(jtsejndu[i] - jnduc);
            if (yii < yi) {
              yi = yii;
              zvvsa = fp[i];
            }
            if (err < er) {
              er = err;
              zvvsb = fp[i];
            }
            if (sjj < sj) {
              sj = sjj;
              zvvsc = fp[i];
            }
          }
          let zvvs = [zvvsa, zvvsb, zvvsc].unique();
          if (player.storage.bfyt) zvvs.push(player);
          if (jndux >= 360) zvvs = game.players;
          const resulti = await player
            .chooseTarget([0, zvvs.length], get.prompt2('ytui'), '月光之轨迹指引着你的方向')
            .set('filterTarget', function (card, player, target) {
              return zvvs.includes(target);
            })
            .set('ai', function (target) {
              const player = _status.event.player,
                card = _status.event.cardx;
              return get.effect(target, card, player, player);
            })
            .set('cardx', card)
            .forResult();
          if (!resulti.bool) {
            player.gain(card, false);
            return;
          }
          const targets = resulti.targets;
          const zvvstargets = zvvs.reduce((a, b) => {
            if (targets.includes(b)) a.push(b);
            return a;
          }, []);
          await player.useCard(card, zvvstargets, false);
          if (resulti.targets.some((t) => trigger.targets.includes(t))) player.draw();
          const nodex = document.getElementById('ytui');
          if (nodex) {
            ui.window.style.transition = '';
            nodex.delete();
          }
        },
      },
      bfyt: {
        subSkill: {
          use: {
            trigger: { player: 'phaseEnd' },
            filter(event, player) {
              player.storage.bfyt = false;
              game.broadcastAll(function (p) {
                p.style.transform = '';
              }, player);
              const list = [];
              game.getGlobalHistory('cardMove', function (evt) {
                if (evt.name != 'lose' && evt.name != 'cardsDiscard') return false;
                if (evt.name == 'lose' && evt.position != ui.discardPile) return false;
                if (evt == event || evt.parent == event) return false;
                if (Array.isArray(evt.cards))
                  for (const i of evt.cards) {
                    var card = i;
                    list.add(get.suit(card, evt.cards2 && evt.cards2.includes(card) ? evt.player : false));
                  }
              });
              l(list);
              return list.length < 4;
            },
            forced: true,
            charlotte: true,
            async content(event, trigger, player) {
              player.removeSkill('bfyt_use');
              player.loseHp();
            },
          },
        },
        trigger: { player: 'phaseBeginStart' },
        filter(event, player) {
          if (player.storage.bfyt === true) return false;
          const cards = [];
          const suits = get.hxse();
          for (const i of suits) {
            cards.push(...player.getExpansions(`ytxl${i}`));
          }
          const hearts = [],
            diamonds = [],
            clubs = [],
            spades = [];
          const suittosuits = {
            heart: hearts,
            diamond: diamonds,
            club: clubs,
            spade: spades,
          };
          for (const i in suittosuits) {
            suittosuits[i].push(cards.filter((j) => j.suit === i));
          }
          const suit = cards.reduce((a, b) => {
            a.add(b.suit);
            return a;
          }, []).length;
          return suit === 4;
        },
        content() {
          game.broadcastAll(function (p) {
            let b = window.innerHeight / 2 - p.node.avatar.offsetHeight / 2;
            let c = p.getTop();
            let d = p.node.avatar.offsetHeight;
            let e = window.innerWidth / 2 - p.node.avatar.offsetWidth / 3;
            let f = p.getLeft();
            let g = p.node.avatar.offsetWidth;
            p.style.zIndex = 10;
            p.style.transform = 'translateY(' + (b - c - d) + 'px)';
            if (e < f || (f <= e && e < g)) p.style.transform += 'translateX(' + (e - f - g) + 'px)';
            else p.style.transform += 'translateX(' + (e - f + g) + 'px)';
          }, player);
          player.phase('nodelay');
          player.storage.bfyt = true;
          if (!trigger._finished) {
            trigger.finish();
            trigger.untrigger(true);
            trigger._triggered = 5;
            game.players
              .slice()
              .concat(game.dead)
              .forEach((current) => {
                current.getHistory().isSkipped = true;
                current.getStat().isSkipped = true;
              });
            const evt = player.phase('nodelay');
            if (trigger.skill) {
              evt.skill = trigger.skill;
            }
            game.broadcastAll(function (player) {
              player.classList.remove('glow_phase');
              delete _status.currentPhase;
            }, player);
            player.addTempSkill('bfyt_use', { player: 'phaseAfter' });
          }
        },
      },
      whug: {
        trigger: { player: 'dieBefore' },
        filter(event, player) {
          return game.hasPlayer(function (current) {
            return current.storage.ybhy_block && current.storage.ybhy_block.length;
          });
        },
        check(event, player) {
          return true;
        },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseTarget(get.prompt('whug'), function (card, player, target) {
              const filter = [];
              for (const i of game.filterPlayer((current) => current.getStorage('ybhy_block').length)) filter.push(...i.getStorage('ybhy_block'));
              return target.isDead() && filter.includes(target);
            })
            .set('deadTarget', true)
            .set('ai', function (target) {
              if (target.hp > player.maxHp) return 0.9;
              return Math.abs(target.hp - target.maxHp / 2);
            })
            .forResult();
        },
        async content(event, trigger, player) {
          trigger.cancel();
          const target = event.targets[0];
          player.recover(target.hp - player.hp);
          game.broadcastAll((target) => {
            target.style.transform = '';
            target.node.avatar.style.transform = '';
            target.node.avatar2.style.transform = '';
            target.hp = 0;
            target.node.hp.hide();
            target.update();
          }, target);
          const yrplayer = game.findPlayer((p) => p.getStorage('ybhy_block').includes(target));
          if (yrplayer) {
            const list = Array.from(lib.character[target.name][3]);
            game.expandSkills(list);
            yrplayer.removeSkill(list);
            yrplayer.storage.ybhy_block.remove(target);
            if (!yrplayer.getStorage('ybhy_block').length) yrplayer.removeSkill('ybhy_block');
            else lib.skill.ybhy.pddu(yrplayer);
          }
        },
      },
      ybhy: {
        audio: 'ext:恒梦/audio/whirwunv:2',
        group: ['ybhy_use'],
        subSkill: {
          use: {
            trigger: {
              global: ['useSkill', 'phaseAfter'],
            },
            filter(event, player) {
              if (event.name === 'phase') return event.player.storage.ybhy_block && event.player.storage.ybhy_block.length;
              if (['global', 'equip'].includes(event.type)) return false;
              let skill = event.sourceSkill || event.skill;
              if (!skill || skill === 'ybhy_use') return false;
              let info = get.info(skill);
              while (true) {
                if (!info || info.charlotte || info.equipSkill) return false;
                if (info && !info.sourceSkill) break;
                skill = info.sourceSkill;
                info = get.info(skill);
              }
              const ku = [];
              const evtp = event.player;
              for (const i of evtp.getStorage('ybhy_block')) {
                ku.push(...Array.from(lib.character[i.name][3]));
              }
              return ku.includes(skill);
            },
            firstDo: true,
            charlotte: true,
            forced: true,
            async content(event, trigger, player) {
              const trip = trigger.player;
              let fuuf;
              if (trigger.name === 'phase') fuuf = trip.getStorage('ybhy_block').randomGet();
              else {
                let skill = trigger.sourceSkill || trigger.skill;
                let info = get.info(skill);
                while (true) {
                  if (!info || info.charlotte || info.equipSkill) return false;
                  if (info && !info.sourceSkill) break;
                  skill = info.sourceSkill;
                  info = get.info(skill);
                }
                for (const i of trip.getStorage('ybhy_block')) {
                  if (lib.character[i.name][3].includes(skill)) fuuf = i;
                }
              }
              trip.loseHp();
              fuuf.hp += 1;
              fuuf.update();
              l(fuuf.hp);
              let iuuitili,
                yrvi = lib.character[fuuf.name][2];
              if (typeof yrvi == 'number') iuuitili = yrvi;
              else {
                let index = yrvi.indexOf('/');
                iuuitili = parseInt(yrvi.slice(0, index));
              }
              if (fuuf.hp >= iuuitili) {
                game.broadcastAll(
                  function (player, dead, shown) {
                    dead.revive(dead.maxHp);
                    let identity = player.identity;
                    if (player.identity == 'zhu') dead.identity = 'zhong';
                    else {
                      dead.identity = identity;
                    }
                    dead.setIdentity();
                  },
                  player,
                  fuuf,
                  fuuf.identityShown
                );
                game.addVideo('revive', fuuf);
                fuuf.showIdentity();
              } else {
                const result = await player
                  .chooseTarget(true, `将附身于${get.translation(trip.name)}的${get.translation(fuuf.name)}移动至其他角色身上`, function (card, player, target) {
                    return target !== trigger.player;
                  })
                  .set(ai, function (target) {
                    const seat = game.players.sortBySeat(_status.currentPhase);
                    const index = seat.indexOf(target);
                    const att = get.sgn(get.attitude(player, target));
                    const hp = target.hp;
                    return (10 - index) * (8 - att) * (6 + att * hp);
                  })
                  .forResult();
                if (!result.bool) return;
                const target = result.targets[0];
                let bwuu = Math.max(1 / 2, fuuf.hp / (fuuf.hp + 1));
                game.broadcastAll(
                  async function (d, a, bwuu) {
                    await d.fuuf(a, a.getStorage('ybhy_block').length || 0);
                    d.style.transform += 'scale(' + bwuu + ')';
                    d.node.avatar.style.transform = '';
                    d.node.avatar2.style.transform = '';
                    d.node.hp.show();
                    d.update();
                  },
                  fuuf,
                  target,
                  bwuu
                );
                target.addSkill(Array.from(lib.character[fuuf.name][3]));
                target.markAuto('ybhy_block', [fuuf]);
                target.addSkill('ybhy_block');
              }
              const list = Array.from(lib.character[fuuf.name][3]);
              game.expandSkills(list);
              trip.removeSkill(list);
              trip.storage.ybhy_block.remove(fuuf);
              if (trip.getStorage('ybhy_block').length === 0) trip.removeSkill('ybhy_block');
              else lib.skill.ybhy.pddu(trip);
            },
          },
          block: {
            onremove(player) {
              for (const i of player.getStorage('ybhy_block')) {
                player.removeSkill(Array.from(lib.character[i.name][3]));
              }
              if (player.storage.ybhy_block) delete player.storage.ybhy_block;
            },
          },
        },
        enable: 'phaseUse',
        selectTarget: 2,
        ai: {
          order: 12,
          result: {
            player(player, target) {
              const seat = game.players.sortBySeat(_status.currentPhase);
              const index = seat.indexOf(target);
              const att = get.sgn(get.attitude(player, target));
              const hp = target.hp;
              return (10 - index) * (8 - att) * (6 + att * hp);
            },
          },
        },
        filter(event, player) {
          return game.dead.length;
        },
        filterTarget(card, player, target) {
          _status.event.deadTarget = ui.selected.targets.length;
          if (ui.selected.targets.length) return target.isDead();
          return target.isAlive();
        },
        pddu(player) {
          for (let i = 0; i < player.getStorage('ybhy_block').length; i++) {
            let d = player.getStorage('ybhy_block')[i];
            let bwuu = Math.max(1 / 2, d.hp / (d.hp + 1));
            game.broadcastAll(
              async function (d, a, bwuu, i) {
                const m = i;
                await d.fuuf(a, m);
                d.style.transform += 'scale(' + bwuu + ')';
                d.update();
              },
              d,
              player,
              bwuu,
              i
            );
          }
        },
        async content(event, trigger, player) {
          const targets = event.targets;
          if (targets[0].isAlive()) targets.reverse();
          const [d, a] = [targets[0], targets[1]];
          const yrplayer = game.findPlayer((p) => p.getStorage('ybhy_block').includes(d));
          if (yrplayer) {
            const list = Array.from(lib.character[d.name][3]);
            game.expandSkills(list);
            yrplayer.removeSkill(list);
            yrplayer.storage.ybhy_block.remove(d);
            if (!yrplayer.getStorage('ybhy_block').length) yrplayer.removeSkill('ybhy_block');
            else lib.skill.ybhy.pddu(yrplayer);
          }
          let bwuu = Math.max(1 / 2, d.hp / (d.hp + 1));
          game.broadcastAll(
            async function (d, a, bwuu) {
              const config = a.getStorage('ybhy_block').length || 0;
              await d.fuuf(a, config);
              d.style.transform += 'scale(' + bwuu + ')';
              if (!d.hp || d.hp <= 0) d.hp = 0;
              d.node.avatar.style.transform = '';
              d.node.avatar2.style.transform = '';
              d.node.hp.show();
              d.update();
            },
            d,
            a,
            bwuu
          );
          a.addSkill(Array.from(lib.character[d.name][3]));
          a.markAuto('ybhy_block', [d]);
          a.addSkill('ybhy_block');
        },
      },
      bjuf: {
        keepTwoDecimal(num) {
          const result = Math.ceil(num * 10) / 10;
          return result;
        },
        group: ['bjufq', 'bjufw'],
        mod: {
          playerEnabled(card, player, target) {
            const m = target;
            if (m === player) return;
            if (player.storage.ueri && player.storage.ueri !== m) return false;
          },
          targetInRange(card, player) {
            return true;
          },
        },
        ai: {
          directHit_ai: true,
          skillTagFilter(player, tag, arg) {
            return player;
          },
        },
        subSkill: {
          moui: {
            nobracket: true,
            trigger: {
              player: ['useCardToPlayer'],
            },
            _priority: 3,
            forced: true,
            filter(event, player) {
              const suit = event.card.suit;
              if (!suit || !lib.suit.includes(suit)) return false;
              return event.target === player.storage.ueri;
            },
            content() {
              for (let i = 0; i < trigger.parent.effectCount; i++) {
                trigger.target.loseHp(lib.skill.bjuf.keepTwoDecimal(trigger.target.hp * 0.04));
              }
            },
            ai: {
              effect: {
                player_use(card, player, target) {
                  if (player !== target) {
                    let tars = [target];
                    if (ui.selected.targets.length) tars.addArray(ui.selected.targets.filter((i) => i !== player && i !== target));
                    if (tars.length < 2) return [1, 0, 1, -2];
                    return [1, 0, 1, -2 / tars.length];
                  }
                },
              },
            },
          },
          dmdc: {
            nobracket: true,
            trigger: {
              player: ['useCardToPlayer'],
            },
            _priority: 2,
            forced: true,
            filter(event, player) {
              const suit = event.card.suit;
              if (!suit || !lib.suit.includes(suit)) return false;
              return event.target === player.storage.ueri;
            },
            init(player) {
              player.storage.dmdc = 0;
            },
            content() {
              for (let i = 0; i < trigger.parent.effectCount; i++) {
                if (player.storage.dmdc % 3 !== 0) {
                  trigger.target.damage(0.4, 'thunder');
                } else {
                  trigger.target.damage(1.2, 'thunder');
                }
                player.storage.dmdc++;
              }
            },
          },
          wujb: {
            nobracket: true,
            trigger: {
              source: ['damageBegin2'],
            },
            _priority: 1,
            forced: true,
            filter(event, player) {
              return event.card && event.player === player.storage.reri && get.tag(event.card, 'damage') && Math.random() > 0.5;
            },
            content() {
              trigger.num *= 2;
            },
          },
        },
      },
      bjufw: {
        trigger: {
          player: ['useCard'],
        },
        silent: true,
        filter(event, player) {
          return ['basic', 'trick'].includes(get.type(event.card));
        },
        content() {
          trigger.directHit.add(player);
        },
      },
      bjufq: {
        mod: {
          aiOrder(player, card, num) {
            const suits = lib.suit.filter((suit) => {
              return game.hasPlayer2(function (current) {
                return current.getHistory('useCard', (evt) => evt.card.suit == suit).length;
              });
            });
            if (suits.length) return;
            if (get.itemtype(card) == 'card') {
              if (suits.includes(card.suit)) return num + 4;
            }
          },
        },
        ai: {
          effect: {
            player_use(card, player, target) {
              const suits = lib.suit.filter((suit) => {
                return game.hasPlayer2(function (current) {
                  return current.getHistory('useCard', (evt) => evt.card.suit == suit).length;
                });
              });
              if (suits.length) return;
              if (suits.length !== 4) {
                if (player === target) return [1, 4 - suits.length];
                else return [1, 4 - suits.length];
              } else if (suits.length == 4) {
                if (player === target) return [1, 4 - suits.length, 3, 0];
                else return [1, 4 - suits.length, 2, 0];
              }
            },
          },
        },
        audio: 'ext:恒梦/audio/hzyi:8',
        trigger: {
          player: ['useCard'],
        },
        forced: true,
        init(player) {
          if (!player.storage.bjufq) player.storage.bjufq = [];
        },
        filter(event, player) {
          const suit = event.card.suit;
          return suit && lib.suit.includes(suit);
        },
        mark: true,
        marktext: '神弓',
        intro: {
          name: '神弓',
          content: '已记录$',
        },
        content() {
          const suit = trigger.card.suit,
            m = player.storage.bjufq.length;
          if (!player.storage.bjufq.includes(suit)) player.storage.bjufq.add(suit);
          player.markSkill('bjufq');
          if (m >= 1 && !player.hasSkill('bjuf_moui')) player.addSkill('bjuf_moui');
          if (m >= 2 && !player.hasSkill('bjuf_dmdc')) player.addSkill('bjuf_dmdc');
          if (m >= 3 && !player.hasSkill('bjuf_wujb')) player.addSkill('bjuf_wujb');
          player.draw(4 - m);
          if (['basic', 'trick'].includes(get.type(trigger.card)) && m >= 4) {
            trigger.effectCount += 2;
            if (get.tag(trigger.card, 'damage')) {
              trigger.baseDamage *= 0.5;
            }
          }
        },
        subSkill: {
          phase: {
            trigger: {
              global: 'phaseAfter',
            },
            _priority: -50,
            forced: true,
            filter(event, player) {
              return player.storage.bjufq.length >= 4;
            },
            content() {
              player.phase('nodelay');
              player.storage.bjufq.length = 0;
              player.unmarkSkill('bjufq');
            },
          },
        },
      },
      ueri: {
        audio: 'ext:恒梦/audio/hzyi:4',
        usable: 1,
        enable: 'phaseUse',
        filterTarget: true,
        derivation: ['bjuf', 'riui', 'bjuf_moui', 'bjuf_dmdc', 'bjuf_wujb'],
        content() {
          player.storage.ueri = target;
          player.addTempSkill('ueriq', 'phaseUseAfter');
          player.addTempSkill('bjuf', 'phaseUseAfter');
          player.addTempSkill('riui', 'phaseUseAfter');
          player.markAuto('ueriq', [target]);
          target.addTempSkill('ueriw', 'phaseUseAfter');
        },
        ai: {
          order: 10,
          result: {
            player: 1,
            target: -1,
          },
        },
      },
      ueriq: {
        init(player) {
          player.maxHp *= 10;
          player.hp *= 10;
          player.update();
        },
        onremove(player) {
          player.maxHp = Math.round(player.maxHp / 10);
          player.hp = Math.round(player.hp / 10);
          player.update();
          player.storage.ueri = 0;
          player.storage.bjufq = [];
          player.unmarkSkill('bjufq');
          player.update();
        },
      },
      ueriw: {
        init(player) {
          player.maxHp *= 10;
          player.hp *= 10;
          player.update();
        },
        onremove(player) {
          player.maxHp = Math.round(player.maxHp / 10);
          player.hp = Math.round(player.hp / 10);
          player.update();
        },
      },
      riui: {
        audio: 'ext:恒梦/audio/hzyi:4',
        usable: 1,
        enable: 'phaseUse',
        filter(event, player) {
          const hs = player.getCards('h');
          if (!hs.length) return false;
          for (let i = 0; i < hs.length; i++) {
            const mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
            if (mod2 === false) return false;
          }
          return player.storage.ueri && player.storage.ueri.isIn();
        },
        content() {
          const cards = player.getCards('h', (i) => get.type(i) == 'basic');
          if (cards.length) {
            player.useCard({ name: 'wanjian', suit: 'none' }, cards, player.storage.ueri, false).set('oncard', () => {
              _status.event.baseDamage = cards.length;
            });
          }
        },
        ai: {
          damage: true,
          order: 3,
          result: {
            player(player) {
              return get.damageEffect(player.storage.ueri, player, player);
            },
          },
        },
      },
      vihg: {
        init(player) {
          player.storage.tmlb_viewed = [];
        },
        Equal(arr1, arr2) {
          if (arr1.length !== arr2.length) {
            return false;
          }
          const countMap1 = count(arr1);
          const countMap2 = count(arr2);
          function count(arr = []) {
            const resMap = new Map();
            for (const item of arr) {
              resMap.set(item, (resMap.get(item) || 0) + 1);
            }
            return resMap;
          }
          for (const [key, count] of countMap1) {
            if (countMap2.get(key) !== count) {
              return false;
            }
          }
          return true;
        },
        Equaluyxu(arr1, arr2) {
          if (!arr1 || !arr2) {
            return false;
          }
          if (arr1.length !== arr2.length) {
            return false;
          }
          for (let i = 0; i < arr1.length; i++) {
            if (Array.isArray(arr1[i]) && Arrar.isArray(arr2[i])) {
              if (!lib.skill.vihg.Equaluyxu(arr1[i], arr2[i])) {
                return false;
              }
            } else {
              if (arr1[i] !== arr2[i]) {
                return false;
              }
            }
          }
          return true;
        },
        audio: 'ext:恒梦/audio/yuhldadi:4',
        enable: 'phaseUse',
        position: 'he',
        filterCard: true,
        complexCard: true,
        selectCard() {
          if (ui.selected.cards.length && get.cardNameLength(ui.selected.cards[0]) === 1) {
            return [2, Infinity];
          }
          return [1, Infinity];
        },
        prompt: '弃置任意张牌并摸等量的牌',
        check(card) {
          const player = _status.event.player;
          let a = Array.from([ui.cardPile.firstChild ? ui.cardPile.firstChild : { name: 'null' }, ui.cardPile.childNodes[1] ? ui.cardPile.childNodes[1] : { name: 'null' }], ({ name }) => name),
            b = Array.from(player.getCards('h'), ({ name }) => name);
          a.yiiu(...b);
          if (
            player.hasCard((i) => {
              return get.cardNameLength(i) >= 2 && i.name === ui.cardPile.firstChild.name;
            }) ||
            !a.length
          ) {
            let nlength = 0;
            ui.selected.cards.forEach((i) => (nlength += get.cardNameLength(i)));
            if (card.name === (ui.cardPile.childNodes[ui.selected.cards.length] ? ui.cardPile.childNodes[ui.selected.cards.length].name : 'null')) return nlength >= 2 ? 8 - get.value(card) : 10;
            else return 0;
          } else {
            const un = Array.from(ui.selected.cards, ({ name }) => name),
              chin = Array.from(ui.cardPile.childNodes, ({ name }) => name),
              chinx = chin.slice(0, ui.selected.cards.length);
            let bolnum = 0;
            for (const i of un) {
              bolnum += get.translation(i).length;
            }
            if (uuzuxlts(un, chinx) && bolnum >= 2) return 0;
            else {
              const nlength = ui.selected.cards.length,
                getvalcar = get.value(card),
                uicar = Array.from(ui.cardPile.childNodes);
              let playerhe = player.getCards('he').slice(),
                plalen = playerhe.length,
                zseff = [],
                zseff2 = [];
              playerhe.sort((a, b) => get.value(a) - get.value(b));
              if (!ui.selected.cards.length) {
                for (let i = 0; i < plalen; i++) {
                  let valuex = 0,
                    valuey = 0;
                  for (let j = 0; j < i + 1; j++) {
                    valuex += get.value(playerhe[j]);
                  }
                  for (let j = 0; j < i + 1; j++) {
                    valuey += get.value(uicar[j]);
                  }
                  if (valuey > valuex) {
                    zseff.push(valuey - valuex);
                    zseff2.push(playerhe.slice(0, i + 1));
                  }
                }
                if (!zseff.length) return 0;
                const maxzseff = Math.max(...zseff),
                  maxzseff2 = zseff2[zseff.indexOf(maxzseff)];
                game.log(maxzseff, maxzseff2);
                ui.selected.cards.push(
                  ...player.getCards('he', (i) => {
                    return maxzseff2.some((x) => x.name === i.name && x.suit === i.suit && x.number === i.number && x.nature === i.nature);
                  })
                );
              } else {
                return get.value(card) < get.value(ui.cardPile.childNodes[ui.selected.cards.length]);
              }
            }
          }
        },
        content() {
          player.disableSkill('hmdili_fgso3', 'vihg');
          player.addTempSkill('hmdili_fgso3');
          let c = get.cards(cards.length),
            cs = [],
            cas = [];
          cs = Array.from(c, ({ name }) => name);
          cards.forEach((i) => cas.push(i.name));
          if (uuzuxlts(cs, cas)) player.removeSkills(['hmdili_fgso1', 'hmdili_fgso2']);
          player.gain(c, 'draw');
        },
        ai: {
          order(item, player) {
            if (player.hasSkill('hmdili_fgso1') && !player.hasSkill('hmdili_fgso2')) {
              const storage = player.storage.tmlb_viewed;
              const list = [],
                nam = Array.from(storage, ({ name }) => name),
                nat = Array.from(storage, ({ nature }) => nature);
              if (player.storage.tmlb) {
                for (const i of lib.inpile) {
                  if (get.type(i) == 'basic') {
                    if (
                      !storage.some((x) => {
                        return x.name == i && !x.nature;
                      })
                    )
                      list.push(i);
                    if (i == 'sha') {
                      for (const j of lib.inpile_nature) {
                        if (nat.includes(j)) continue;
                        list.push(i);
                      }
                    }
                  }
                }
              } else {
                for (const i of lib.inpile) {
                  if (!nam.includes(i) && get.type(i) == 'trick') {
                    list.push(i);
                  }
                }
              }
              if (ui.cardPile.firstChild && list.includes(ui.cardPile.firstChild.name)) return 9 - get.value(ui.cardPile.firstChild);
              return 7;
            } else if (!player.hasSkill('hmdili_fgso1') && player.hasSkill('hmdili_fgso2')) {
              if (player.hasCard((i) => get.value(i) > Math.max(6, 9 - player.hp), 'he')) return 1;
              return 8;
            } else if (!player.hasSkill('hmdili_fgso1') && !player.hasSkill('hmdili_fgso2')) {
              let a = Array.from([ui.cardPile.firstChild ? ui.cardPile.firstChild : { name: 'null' }, ui.cardPile.childNodes[1] ? ui.cardPile.childNodes[1] : { name: 'null' }], ({ name }) => name),
                b = Array.from(player.getCards('h'), ({ name }) => name);
              a.yiiu(...b);
              if (
                player.hasCard((i) => {
                  return get.cardNameLength(i) >= 2 && i.name === ui.cardPile.firstChild.name;
                }) ||
                !a.length
              )
                return 12;
              else {
                if (player.hasCard((i) => get.value(i) > Math.max(6, 9 - player.hp), 'he')) return 1;
                return 8;
              }
            } else {
              let ax = Array.from([ui.cardPile.firstChild ? ui.cardPile.firstChild : { name: 'null' }, ui.cardPile.childNodes[1] ? ui.cardPile.childNodes[1] : { name: 'null' }], ({ name }) => name),
                bx = Array.from(player.getCards('h'), ({ name }) => name);
              ax.yiiu(...bx);
              if (
                player.hasCard((i) => {
                  return get.cardNameLength(i) >= 2 && ui.cardPile.firstChild && i.name === ui.cardPile.firstChild.name;
                }) ||
                !ax.length
              ) {
                return 15;
              } else return 1;
            }
          },
          result: {
            player(player) {
              let a = Array.from([ui.cardPile.firstChild ? ui.cardPile.firstChild : { name: 'null' }, ui.cardPile.childNodes[1] ? ui.cardPile.childNodes[1] : { name: 'null' }], ({ name }) => name),
                b = Array.from(player.getCards('h'), ({ name }) => name);
              a.yiiu(...b);
              if (
                player.hasCard((i) => {
                  return get.cardNameLength(i) >= 2 && ui.cardPile.firstChild && i.name === ui.cardPile.firstChild.name;
                }) ||
                !a.length
              )
                return 1;
              else return 0.8;
            },
          },
          threaten: 1.5,
        },
      },
      qslj: {
        audio: 'ext:恒梦/audio/yuhldadi:4',
        enable: 'phaseUse',
        preHidden: true,
        async content(event, trigger, player) {
          let num1 = player.getSkills(null, false, false).filter(function (i) {
            const info = get.info(i);
            return info && !info.charlotte;
          }).length;
          for (let i = 1; i < 7; i++) {
            if (player.hasSkill('hmdili_fgso' + i)) num1--;
          }
          const cards = get.cards(num1);
          game.cardsGotoOrdering(cards);
          const next = player.chooseToMoveif();
          next.set('list', [['牌堆顶', cards], ['牌堆底']]);
          next.set('prompt', '观星:点击将牌移动到牌堆顶或牌堆底');
          next.processAI = function (list) {
            let cards = list[0][1],
              player = _status.event.player;
            const target = player.next;
            const att = get.attitude(player, target);
            const top = [],
              bottom = cards;
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
          const result = await next.forResult();
          const top = result.moved[0];
          const bottom = result.moved[1];
          player.disableSkill('hmdili_fgso1', 'qslj');
          player.addTempSkill('hmdili_fgso1');
          if (top.length === 0 || bottom.length === 0) player.removeSkills(['hmdili_fgso2', 'hmdili_fgso3']);
          top.reverse();
          for (let i = 0; i < top.length; i++) {
            ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
          }
          for (let i = 0; i < bottom.length; i++) {
            ui.cardPile.appendChild(bottom[i]);
          }
          player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
          game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
          game.updateRoundNumber();
        },
        ai: {
          order(item, player) {
            return 0.5;
          },
          result: {
            player(player) {
              return 0.8;
            },
          },
        },
      },
      tmlb: {
        audio: 'ext:恒梦/audio/yuhldadi:6',
        zhuanhuanji: true,
        mark: true,
        marktext: '☯',
        intro: {
          content(storage, player, skill) {
            if (storage) return '基本牌';
            else return '锦囊牌';
          },
        },
        enable: 'chooseToUse',
        init(player) {
          player.storage.tmlb_viewed = [];
        },
        hiddenCard(player, name) {
          const storage = player.storage.tmlb_viewed;
          const list = [],
            nam = Array.from(storage, ({ name }) => name),
            nat = Array.from(storage, ({ nature }) => nature);
          if (player.storage.tmlb) {
            for (const i of lib.inpile) {
              if (get.type(i) == 'basic') {
                if (
                  !storage.some((x) => {
                    return x.name == i && !x.nature;
                  })
                )
                  list.push(i);
                if (i == 'sha') {
                  for (const j of lib.inpile_nature) {
                    if (nat.includes(j)) continue;
                    list.push(i);
                  }
                }
              }
            }
          } else {
            for (const i of lib.inpile) {
              if (!nam.includes(i) && get.type(i) == 'trick') {
                list.push(i);
              }
            }
          }
          return list.includes(name);
        },
        filter(event, player) {
          const storage = player.storage.tmlb_viewed,
            nam = Array.from(storage, ({ name }) => name),
            nat = Array.from(storage, ({ nature }) => nature);
          for (const i of lib.inpile) {
            if (!event.filterCard({ name: i }, player, event)) continue;
            if (i != 'sha' && nam.includes(i)) continue;
            if (player.storage.tmlb) {
              if (get.type(i) == 'basic') {
                if (i == 'sha') {
                  for (const j of lib.inpile_nature) {
                    if (nat.includes(j)) continue;
                    return true;
                  }
                } else {
                  return true;
                }
              }
            } else {
              if (get.type(i) == 'trick') {
                return true;
              }
            }
          }
          return false;
        },
        chooseButton: {
          // 转换技,你可以将牌堆顶的牌置于牌堆底
          // 阴,视为使用一张本轮未以此法使用过的普通锦囊牌
          // 阳,视为使用一张本轮未以此法使用过的基本牌
          dialog(event, player) {
            const storage = player.storage.tmlb_viewed;
            const list = [],
              nam = Array.from(storage, ({ name }) => name),
              nat = Array.from(storage, ({ nature }) => nature);
            for (const i of lib.inpile) {
              if (!event.filterCard({ name: i }, player, event)) continue;
              if (i != 'sha' && nam.includes(i)) continue;
              if (player.storage.tmlb) {
                if (get.type(i) == 'basic') {
                  if (i == 'sha') {
                    for (const j of lib.inpile_nature) {
                      if (nat.includes(j)) continue;
                      list.push(['基本', '', 'sha', j]);
                    }
                  } else {
                    list.push(['基本', '', i]);
                  }
                }
              } else {
                if (get.type(i) == 'trick') {
                  list.push(['锦囊', '', i]);
                }
              }
            }
            return ui.create.dialog('天临', '位于牌堆顶的牌:【' + get.translation(ui.cardPile.firstChild ? ui.cardPile.firstChild.name : 无) + '】', [list, 'vcard'], 'hidden');
          },
          check(button) {
            const player = _status.event.player;
            return player.getUseValue({ name: button.link[2] }) + 1;
          },
          backup(links, player) {
            return {
              popname: true,
              filterTarget: lib.filter.filterTarget,
              filterCard() {
                return false;
              },
              selectCard: -1,
              position: 'h',
              viewAs: {
                name: links[0][2],
                nature: links[0][3],
              },
              precontent() {
                player.changeZhuanhuanji('tmlb');
              },
              onuse(links, player) {
                player.disableSkill('hmdili_fgso2', 'tmlb');
                player.addTempSkill('hmdili_fgso2');
                const card = get.cards()[0];
                if (links.card.name === card.name) player.removeSkills(['hmdili_fgso1', 'hmdili_fgso3']);
                card.fix();
                ui.cardPile.appendChild(card);
                player.addTempSkill('tmlb_viewed', 'roundStart');
                player.markAuto('tmlb_viewed', [{ name: links.card.name, nature: links.card.nature }]);
              },
            };
          },
          prompt(links, player) {
            return '是否将' + get.translation(ui.cardPile.firstChild ? ui.cardPile.firstChild.name : 无) + '置入牌堆底';
          },
        },
        subSkill: {
          backup: { audio: 'tmlb' },
          backup2: {
            filterCard: (i) => i.hasGaintag('tmlb'),
            selectCard: -1,
            position: 'h',
          },
          viewed: {
            charlotte: true,
          },
        },
        ai: {
          save: true,
          respondSha: true,
          respondShan: true,
          skillTagFilter(player, tag, arg) {
            const storage = player.getStorage('tmlb_viewed');
            const list = [],
              nam = Array.from(storage, ({ name }) => name),
              nat = Array.from(storage, ({ nature }) => nature);
            if (player.storage.tmlb) {
              for (const i of lib.inpile) {
                if (get.type(i) == 'basic') {
                  if (
                    !storage.some((x) => {
                      return x.name == i && !x.nature;
                    })
                  )
                    list.push(i);
                  if (i == 'sha') {
                    for (const j of lib.inpile_nature) {
                      if (nat.includes(j)) continue;
                      list.push(i);
                    }
                  }
                }
              }
            } else {
              for (const i of lib.inpile) {
                if (!nam.includes(i) && get.type(i) == 'trick') {
                  list.push(i);
                }
              }
            }
            if (tag == 'respondSha' || tag == 'respondShan') {
              if (arg == 'respond') return false;
              return list.includes(tag == 'respondSha' ? 'sha' : 'shan');
            }
            return list.includes('tao') || (list.includes('jiu') && arg == player);
          },
          order() {
            const player = _status.event.player,
              storage = player.storage.tmlb_viewed,
              list = [],
              nam = Array.from(storage, ({ name }) => name),
              nat = Array.from(storage, ({ nature }) => nature);
            if (player.storage.tmlb) {
              for (const i of lib.inpile) {
                if (get.type(i) == 'basic') {
                  if (
                    !storage.some((x) => {
                      return x.name == i && !x.nature;
                    })
                  )
                    list.push(i);
                  if (i == 'sha') {
                    for (const j of lib.inpile_nature) {
                      if (nat.includes(j)) continue;
                      list.push(i);
                    }
                  }
                }
              }
            } else {
              for (const i of lib.inpile) {
                if (!nam.includes(i) && get.type(i) == 'trick') {
                  list.push(i);
                }
              }
            }
            if (player && _status.event.type == 'phase') {
              if (player.hasSkill('hmdili_fgso1') && !player.hasSkill('hmdili_fgso3')) {
                if (ui.cardPile.firstChild && list.includes(ui.cardPile.firstChild.name)) return 7 + get.value(ui.cardPile.firstChild);
                else return 0.9;
              } else if (!player.hasSkill('hmdili_fgso1') && player.hasSkill('hmdili_fgso3')) {
                let max = 0,
                  add = false;
                if (list.includes('sha')) add = true;
                const list2 = list.slice().map((namex) => {
                  return { name: namex };
                });
                if (add)
                  lib.inpile_nature.forEach((naturex) =>
                    list2.push({
                      name: 'sha',
                      nature: naturex,
                    })
                  );
                for (const card of list2) {
                  if (player.getUseValue(card) > 0) {
                    let temp = get.order(card);
                    if (temp > max) max = temp;
                  }
                }
                if (max > 0) max += 0.3;
                return max;
              }
            } else if (!player.hasSkill('hmdili_fgso1') && !player.hasSkill('hmdili_fgso3')) {
              if (list.includes(ui.cardPile.firstChild.name)) return 9 + get.value(ui.cardPile.firstChild);
              else return 0.9;
            } else {
              if (list.includes(ui.cardPile.firstChild.name)) return 4 + get.value(ui.cardPile.firstChild);
              else return 0.9;
            }
          },
          result: { player: 1 },
        },
      },
      diliugvi: {
        audio: 'ext:恒梦/audio/yuhldadi:10',
        trigger: { player: ['logSkill', 'useSkillAfter'] },
        forced: true,
        mod: {
          aiOrder(player, card, num) {
            if (player.hasSkill('diliugvi_effect')) return;
            return Math.max(2, num - 2);
          },
        },
        filter(event, player) {
          if (event.type != 'player') return false;
          const skill = event.sourceSkill || event.skill;
          if (get.is.locked(skill)) return false;
          const info = get.info(skill);
          return !info.charlotte;
        },
        content() {
          player.disableSkill('hmdili_fgso4', 'diliugvi');
          player.addTempSkill('hmdili_fgso4');
          player.removeSkills(['hmdili_fgso5', 'hmdili_fgso6']);
          player.addTempSkill('diliugvi_effect');
        },
        subSkill: {
          effect: {
            mod: {
              cardUsable: () => Infinity,
              targetInRange: () => true,
            },
            trigger: { player: 'useCard1' },
            forced: true,
            charlotte: true,
            popup: false,
            firstDo: true,
            content() {
              if (trigger.addCount !== false) {
                trigger.addCount = false;
                player.getStat().card[trigger.card.name]--;
              }
              player.removeSkill('diliugvi_effect');
            },
            mark: true,
            intro: { content: '使用下一张牌无距离和次数限制' },
          },
        },
      },
      diliqrdc: {
        audio: 'ext:恒梦/audio/yuhldadi:10',
        trigger: { player: 'useCard' },
        forced: true,
        filter(event, player) {
          return (event.card && event.card.name == 'sha') || get.type(event.card, null, false) == 'trick';
        },
        mod: {
          aiOrder(player, card, num) {
            if (card.name !== 'sha' && get.type(card, null, false) !== 'trick') return;
            const cards1 = player.getCards('h', (card) => card.name === 'sha'),
              cards2 = player.getCards('h', (card) => get.type(card) === 'trick'),
              numm = cards1.length - cards2.length;
            if (card.name === 'sha') return 6 + numm + player.getUseValue(card) / 10;
            return 6 - numm + player.getUseValue(card) / 10;
          },
        },
        async content(event, trigger, player) {
          player.disableSkill('hmdili_fgso5', 'diliqrdc');
          player.addTempSkill('hmdili_fgso5');
          player.removeSkills(['hmdili_fgso4', 'hmdili_fgso6']);
          const cards1 = player.getCards('h', (card) => card.name === 'sha'),
            cards2 = player.getCards('h', (card) => get.type(card) === 'trick');
          if (cards1.length !== cards2.length) {
            const num = cards1.length - cards2.length,
              cards = num > 0 ? cards1 : cards2;
            let i = 0;
            cards.forEach((card) => {
              if (i < Math.abs(num) && lib.filter.cardDiscardable(card, player, 'diliqrdc')) i++;
            });
            if (i > 0) {
              await player.chooseToDiscard(i, true, `权道:请弃置${get.cnNumber(i)}张${num > 0 ? '杀' : '普通锦囊牌'}`, num > 0 ? (card) => card.name === 'sha' : (card) => get.type(card) === 'trick');
            }
          }
          await player.draw();
        },
        ai: {
          effect: {
            player_use(card, player, target) {
              if (card.name !== 'sha' && get.type(card, null, false) !== 'trick') return;
              const cards1 = player.getCards('h', (card) => card.name === 'sha'),
                cards2 = player.getCards('h', (card) => get.type(card) === 'trick'),
                numa = Math.abs(cards1.length - cards2.length - 1),
                numb = Math.abs(cards2.length - cards1.length - 1);
              if (card.name === 'sha') return [1, 1 - numa];
              else return [1, 1 - numb];
            },
          },
        },
      },
      diliiigh: {
        audio: 'ext:恒梦/audio/yuhldadi:10',
        trigger: { player: 'useCard2' },
        forced: true,
        filter(event, player) {
          if (!ui.cardPile.childElementCount) return false;
          if (get.type(event.card) !== 'equip') return false;
          const numx = get.cardNameLength(event.card),
            num1 = get.cardNameLength(ui.cardPile.firstChild),
            num2 = get.cardNameLength(ui.cardPile.lastChild);
          return numx === num1 || numx === num2;
        },
        content() {
          player.disableSkill('hmdili_fgso6', 'diliiigh');
          player.addTempSkill('hmdili_fgso6');
          player.removeSkills(['hmdili_fgso4', 'hmdili_fgso5']);
          const numx = get.cardNameLength(trigger.card),
            num1 = get.cardNameLength(ui.cardPile.firstChild),
            num2 = get.cardNameLength(ui.cardPile.lastChild);
          if (numx === num1) player.draw(1, 'bottom');
          else player.draw();
        },
        ai: {
          effect: {
            player(card, player, target) {
              if (!ui.cardPile.childElementCount) return;
              if (get.type(card) !== 'equip') return;
              const num = get.cardNameLength(card),
                num1 = get.cardNameLength(ui.cardPile.firstChild),
                num2 = get.cardNameLength(ui.cardPile.lastChild);
              if (num === num1) return [1, 1];
              if (num === num2) return [1, 2];
              return;
            },
          },
        },
      },
      hmdili: {
        subSkill: {
          fgso1: {
            onremove(player, skill) {
              player.enableSkill(skill);
            },
            charlotte: true,
          },
          fgso2: {
            onremove(player, skill) {
              player.enableSkill(skill);
            },
            charlotte: true,
          },
          fgso3: {
            onremove(player, skill) {
              player.enableSkill(skill);
            },
            charlotte: true,
          },
          fgso4: {
            onremove(player, skill) {
              player.enableSkill(skill);
            },
            charlotte: true,
          },
          fgso5: {
            onremove(player, skill) {
              player.enableSkill(skill);
            },
            charlotte: true,
          },
          fgso6: {
            onremove(player, skill) {
              player.enableSkill(skill);
            },
            charlotte: true,
          },
        },
      },
      jqxi: {
        subSkill: {
          1: {
            marktext: '♥️️️',
            mark: true,
            intro: {},
            charlotte: true,
          },
          2: {
            intro: {},
            marktext: '♦️️️',
            mark: true,
            charlotte: true,
          },
          3: {
            intro: {},
            marktext: '♠️️️',
            mark: true,
            charlotte: true,
          },
          4: {
            intro: {},
            marktext: '♣️️️',
            mark: true,
            charlotte: true,
          },
          5: {
            marktext: '基',
            mark: true,
            intro: {},
            charlotte: true,
          },
          6: {
            marktext: '装',
            mark: true,
            intro: {},
            charlotte: true,
          },
          7: {
            marktext: '锦',
            mark: true,
            intro: {},
            charlotte: true,
          },
        },
        forced: true,
        audio: 'ext:恒梦/audio/xrvl:4',
        trigger: {
          player: 'loseAfter',
        },
        content() {
          let a = 0,
            b = 0,
            c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;
          trigger.cards.forEach((i) => {
            if (i.suit == 'heart') a++;
          });
          trigger.cards.forEach((i) => {
            if (i.suit == 'diamond') b++;
          });
          trigger.cards.forEach((i) => {
            if (i.suit == 'spade') c++;
          });
          trigger.cards.forEach((i) => {
            if (i.suit == 'club') d++;
          });
          trigger.cards.forEach((i) => {
            if (get.type2(i, player) == 'basic') e++;
          });
          trigger.cards.forEach((i) => {
            if (get.type2(i, player) == 'equip') f++;
          });
          trigger.cards.forEach((i) => {
            if (get.type2(i, player) == 'trick') g++;
          });
          if (a > 0 && !player.hasSkill('jqxi_1')) {
            player.addSkill('jqxi_1');
          }
          if (b > 0 && !player.hasSkill('jqxi_2')) {
            player.addSkill('jqxi_2');
          }
          if (c > 0 && !player.hasSkill('jqxi_3')) {
            player.addSkill('jqxi_3');
          }
          if (d > 0 && !player.hasSkill('jqxi_4')) {
            player.addSkill('jqxi_4');
          }
          if (e > 0 && !player.hasSkill('jqxi_5')) {
            player.addSkill('jqxi_5');
          }
          if (f > 0 && !player.hasSkill('jqxi_6')) {
            player.addSkill('jqxi_6');
          }
          if (g > 0 && !player.hasSkill('jqxi_7')) {
            player.addSkill('jqxi_7');
          }
          if (player.hasSkill('jqxi_2') && player.hasSkill('jqxi_3') && player.hasSkill('jqxi_4')) {
            player.removeSkill(['jqxi_2', 'jqxi_3', 'jqxi_4']);
            player.addSkill('xivh');
            player.draw();
          }
          if (player.hasSkill('jqxi_1') && player.hasSkill('jqxi_3') && player.hasSkill('jqxi_4')) {
            player.removeSkill(['jqxi_1', 'jqxi_3', 'jqxi_4']);
            player.addSkill('xivh');
            player.draw();
          }
          if (player.hasSkill('jqxi_1') && player.hasSkill('jqxi_2') && player.hasSkill('jqxi_4')) {
            player.removeSkill(['jqxi_1', 'jqxi_2', 'jqxi_4']);
            player.addSkill('xivh');
            player.draw();
          }
          if (player.hasSkill('jqxi_1') && player.hasSkill('jqxi_2') && player.hasSkill('jqxi_3')) {
            player.removeSkill(['jqxi_1', 'jqxi_2', 'jqxi_3']);
            player.addSkill('xivh');
            player.draw();
          }
          if (player.hasSkill('jqxi_5') && player.hasSkill('jqxi_6') && player.hasSkill('jqxi_7')) {
            player.removeSkill(['jqxi_5', 'jqxi_6', 'jqxi_7']);
            player.addSkill('jxua');
            player.draw();
          }
        },
        mod: {
          aiOrder(player, card, num) {
            let ska,
              skb,
              a = 0,
              b = 0;
            switch (card.suit) {
              case 'heart':
                ska = 'jqxi_1';
                break;
              case 'diamond':
                ska = 'jqxi_2';
                break;
              case 'club':
                ska = 'jqxi_4';
                break;
              case 'spade':
                ska = 'jqxi_3';
                break;
              default:
                break;
            }
            if (ska && player.hasSkill(ska)) a = 3;
            switch (get.type2(card)) {
              case 'basic':
                skb = 'jqxi_5';
                break;
              case 'equip':
                skb = 'jqxi_6';
                break;
              case 'trick':
                skb = 'jqxi_7';
                break;
              default:
                break;
            }
            if (skb && player.hasSkill(skb)) b = 3;
            return Math.max(2, num - a - b);
          },
        },
        popup: false,
        mark: true,
        marktext: '九',
        onremove(player, skill) {
          player.removeSkill(['jqxi_1', 'jqxi_2', 'jqxi_3', 'jqxi_4', 'jqxi_5', 'jqxi_6', 'jqxi_7']);
        },
        intro: {
          content(storage, player, skill) {
            let str = '当前状态:';
            if (player.hasSkill('xivh')) str += '<br><li>♥️️️️:不限次数';
            if (player.hasSkill('jxua')) str += '<br><li>♦️️️:无距离限制';
            return str;
          },
        },
      },
      xivh: {
        mod: {
          cardUsable(card, player) {
            return Infinity;
          },
        },
      },
      jxua: {
        mod: {
          targetInRange(card, player) {
            return true;
          },
        },
      },
      jqvr: {
        audio: 'ext:恒梦/audio/xrvl:3',
        trigger: { player: 'jqxiAfter' },
        forced: true,
        filter(event, player) {
          return player.hasSkill('xivh') && player.hasSkill('jxua');
        },
        async content(event, trigger, player) {
          player.removeSkill(['xivh', 'jxua']);
          player.unmarkSkill('jiufa');
          event.cards = get.cards(9);
          event.cards.sort(function (a, b) {
            return b.number - a.number;
          });
          game.cardsGotoOrdering(event.cards);
          event.videoId = lib.status.videoId++;
          game.broadcastAll(
            function (player, id, cards) {
              let str;
              if (player == game.me && !_status.auto) {
                str = '九转:选择任意张点数满足条件的牌';
              } else {
                str = '九转';
              }
              const dialog = ui.create.dialog(str, cards);
              dialog.videoId = id;
            },
            player,
            event.videoId,
            event.cards
          );
          event.time = get.utc();
          game.addVideo('showCards', player, ['九转', get.cardsInfo(event.cards)]);
          game.addVideo('delay', null, 2);
          const links = await player
            .chooseButton([0, 9], true)
            .set('dialog', event.videoId)
            .set('filterButton', function (button) {
              const num = button.link.number,
                cards = _status.event.parent.cards;
              for (const i of ui.selected.buttons) {
                if (i.link.number == num) return false;
              }
              for (const i of cards) {
                if (i != button.link && i.number == num) return true;
              }
              return false;
            })
            .set('ai', function (button) {
              if (player.countCards('h') + ui.selected.buttons.length >= 9) return 0;
              return get.value(button.link, _status.event.player);
            })
            .forResultLinks();
          if (!links && !links.length) return;
          game.broadcastAll('closeDialog', event.videoId);
          const cards2 = links;
          if (cards2 && cards2.length) player.gain(cards2, 'log', 'gain2');
        },
        group: 'jqvr2',
      },
      jqvr2: {
        audio: 'ext:恒梦/audio/xrvl:3',
        trigger: {
          player: 'gainAfter',
        },
        forced: true,
        filter(event, player) {
          return player.countCards('h') > 9;
        },
        content() {
          const num = player.countCards('h');
          player.chooseToDiscard('h', true, num);
        },
      },
      mjtolovfMark: {
        marktext: '阵',
        mark: true,
        intro: {
          content: 'expansion',
          markcount: 'expansion',
        },
        onremove(player, skill) {
          let cards = player.getExpansions(skill);
          if (cards.length) player.loseToDiscardpile(cards);
        },
      },
      qigu: {
        audio: 'ext:恒梦/audio/xqlo:2',
        trigger: { player: 'useCard' },
        init(player) {
          player.storage.qigu = [];
        },
        forced: true,
        content() {
          let suitx = trigger.card.suit;
          if (!player.storage.qigu.includes(suitx)) {
            player.storage.qigu.push(suitx);
          } else player.loseHp();
        },
        ai: {
          effect: {
            player_use(card, player, target) {
              const m = player.storage.qigu.length;
              if (!player.storage.qigu.includes(card.suit)) return 1.2;
              if (player.hp <= 3) return [1.2, -1.8 * (3 - (player.hp * 2) / 3) + m / 10];
              else return [1.2, -0.8 + m / 10];
            },
          },
        },
        group: 'qigu_clear',
      },
      qigu_clear: {
        trigger: { player: ['uzwhAfter', 'uzwh2After'] },
        forced: true,
        content() {
          player.storage.qigu = [];
        },
      },
      ughx: {
        audio: 'ext:恒梦/audio/xqlo:2',
        trigger: {
          player: 'useCardToPlayered',
        },
        forced: true,
        filter(event, player) {
          if (event.getParent(2).name === 'ughx') return false;
          if (player !== _status.currentPhase) return false;
          let l = game.findPlayer(function (current) {
            return current.hasSkill('guhx');
          });
          if (!l) return false;
          if (event.target == player) return false;
          if (event.targets.length > 1) return false;
          return true;
        },
        content() {
          let list = game.filterPlayer(function (current) {
            return current.hasSkill('guhx');
          });
          player.storage.ughx = [];
          for (let i of list) {
            player.storage.ughx.push(i);
          }
          while (player.storage.ughx.length) {
            if (Math.random() < 0.5) {
              player.storage.ughx.shift().useCard(game.createCard(trigger.card.name), trigger.target)._triggered = null;
            }
          }
        },
        group: ['mjtolovf2', 'mjtolovf3'],
      },
      mjtolohx: {},
      mjuuuahx: {},
      mjtolovf: {
        prompt2: '令一名角色化作骨生花',
        audio: 'ext:恒梦/audio/xqlo:4',
        trigger: {
          player: 'useCardAfter',
        },
        filter(event, player) {
          if (get.type(event.card) == 'delay') return false;
          let list = [],
            cards = player.getExpansions('mjtolovfMark'),
            suitx = event.card.suit;
          for (let i of cards) {
            let suity = i.suit;
            if (!list.includes(suity)) {
              list.push(suity);
            }
          }
          return !list.includes(suitx);
        },
        async content(event, trigger, player) {
          event.card = trigger.cards.filterInD('oe');
          player.addToExpansion(event.card, 'gain2').gaintag.add('mjtolovfMark');
          let suits = ['heart', 'diamond', 'spade', 'club'],
            cards = player.getExpansions('mjtolovfMark');
          for (let i of cards) {
            let listx = i.suit;
            if (suits.includes(listx)) {
              suits.yiiu(listx);
            }
          }
          if (suits.length) {
            let card = get.cardPile2((card) => {
              return card.suit == suits.randomGet();
            });
            if (card) player.gain(card, 'gain2');
          }
          if (
            !game.hasPlayer(function (current) {
              return !current.hasSkill('guhx');
            })
          )
            return;
          const result = await player
            .chooseTarget(get.prompt2('mjtolovf'), '令1名角色获得〖骨花〗')
            .set('filterTarget', (card, player, target) => {
              return !target.hasSkill('guhx');
            })
            .set('ai', (target) => {
              const player = get.event('player');
              return 10 - get.attitude(player, target);
            })
            .forResult();
          if (result.bool) {
            player.line(result.targets[0], 'green');
            result.targets[0].addSkill('guhx');
          }
        },
      },
      mjtolovf2: {
        forced: true,
        audio: 'ext:恒梦/audio/xqlo:2',
        trigger: {
          player: 'phaseBegin',
        },
        filter(event, player) {
          const cards = player.getExpansions('mjtolovfMark');
          return cards.length;
        },
        content() {
          const cards = player.getExpansions('mjtolovfMark');
          player.loseToDiscardpile(cards);
          player.removeSkill('jicy');
          game.countPlayer(function (current) {
            if (current.hasSkill('guhx')) {
              player.line(current, 'green');
              current.removeSkill(['guhx', 'vfuf']);
              current.loseHp();
            }
          });
        },
      },
      mjtolovf3: {
        audio: 'ext:恒梦/audio/xqlo:2',
        trigger: { player: 'phaseUseEnd' },
        filter(event, player) {
          let list = game.countPlayer(function (current) {
            return current.hasSkill('guhx');
          });
          return list > 0;
        },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseTarget(get.prompt('mjtolovf3'), '将真身寄存在一朵骨花之中')
            .set('filterTarget', (card, player, target) => {
              return target.hasSkill('guhx');
            })
            .forResult();
        },
        async content(event, trigger, player) {
          let targets = event.targets;
          targets.sortBySeat();
          if (!player.hasSkill('jicy')) player.addSkill('jicy');
          game.countPlayer(function (current) {
            if (!targets.includes(current)) current.removeSkill('vfuf');
            else current.addSkill('vfuf');
          });
        },
      },
      jicy: {
        audio: 'ext:恒梦/audio/xqlo:2',
        init(player) {
          if (!player.hasSkill('guhx')) player.classList.add('likedead');
        },
        trigger: { player: ['damageBefore', 'recoverBefore'] },
        charlotte: true,
        forced: true,
        filter(event, player) {
          return !player.hasSkill('guhx') && event.parent.name !== 'uzwh';
        },
        content() {
          trigger.cancel();
        },
        onremove(player) {
          player.classList.remove('likedead');
        },
        ai: {
          effect: {
            target(card, player, target, current) {
              if (!player.hasSkill('guhx')) {
                if (get.tag(card, 'damage')) return 'zerotarget';
              }
            },
          },
        },
      },
      vfuf: {
        audio: 'ext:恒梦/audio/xqlo:2',
        trigger: { player: 'damageBegin2' },
        forced: true,
        charlotte: true,
        content() {
          trigger.cancel();
          let list = game.filterPlayer(function (current) {
            return current.hasSkill('guhx');
          }),
            list2 = game.filterPlayer(function (current) {
              return current.hasSkill('jicy');
            });
          for (let i of list) {
            i.line(list2[0], 'fire');
            i.removeSkill(['guhx', 'vfuf']);
          }
          list2[0].loseHp();
          list2[0].removeSkill('jicy');
          game.log(list2[0], '真身显现');
        },
      },
      guhx: {
        init(player) {
          lib.skill.guhx.caidan(player);
          game.broadcastAll(
            function (player, sex) {
              player.sex = sex;
            },
            player,
            lib.character.xqlo[0]
          );
        },
        caidan(player) {
          let list = ['曼殊', '沙华', '曼陀', '罗华'],
            nums = [0, 1, 2, 3];
          nums = nums.randomGets(player.name2 ? 2 : 1);
          nums.sort((a, b) => a - b);
          for (let i = 0, m = nums.length; i < m; i++) {
            let num = nums[i];
            game.log(player, '化作了', '#g' + list[num], '骨生花');
            game.broadcastAll(
              function (player, i, list, num) {
                player.node[i == 0 ? 'avatar' : 'avatar2'].setBackgroundImage('extension/恒梦/image/bianhx/' + list[num] + '.jpg');
                player.node[i == 0 ? 'name' : 'name2'].innerHTML = list[num];
              },
              player,
              i,
              list,
              num
            );
          }
        },
        trigger: {
          player: 'damageEnd',
        },
        filter(event, player) {
          let special = game.findPlayer(function (current) {
            return current.hasSkill('uzwh');
          });
          return special !== _status.currentPhase;
        },
        forced: true,
        content() {
          player.removeSkill('guhx');
        },
        onremove(player) {
          game.broadcastAll(
            function (player, sex) {
              player.sex = sex;
            },
            player,
            lib.character[player.name][0]
          );
          if (player.name1) {
            game.broadcastAll(function (player) {
              player.node.avatar.setBackground(player.name1, 'character');
              player.node.name.innerHTML = get.slimName(player.name1);
            }, player);
          }
          if (player.name2) {
            game.broadcastAll(function (player) {
              player.node.avatar2.setBackground(player.name2, 'character');
              player.node.name2.innerHTML = get.slimName(player.name2);
            }, player);
          }
        },
      },
      mjuuuahx_bian: {
        audio: 'ext:恒梦/audio/xqlo:2',
        trigger: {
          player: 'useCardAfter',
        },
        forced: true,
        filter(event, player) {
          if (event.getParent(2).name == 'mjuuuahx_bian') return false;
          if (!event.targets || !event.card) return false;
          const type = get.type(event.card);
          if (type != 'basic' && type != 'trick') return false;
          const cardx = player.getExpansions('mjtolovfMark');
          for (const i of cardx) {
            if (event.card.name == i.name) return true;
          }
          return false;
        },
        async content(event, trigger, player) {
          const card = {
            name: trigger.card.name,
            nature: trigger.card.nature,
          };
          const result = await player.chooseUseTarget(card, get.prompt('mjuuuahx_bian'), false, false).set('prompt2', '视为再使用一张' + get.translation(card));
          if (result.bool) {
            player.markAuto('mjuuuahx_bian', [trigger.card.name]);
            player.draw();
          }
        },
        ai: {
          threaten: 2,
        },
      },
      aimk: {
        audio: 'ext:恒梦/audio/xqlo:4',
        trigger: {
          global: 'loseHpAfter',
        },
        forced: true,
        content() {
          player.draw(Math.round(trigger.num));
        },
        subSkill: {
          damageS: {
            trigger: {
              source: 'damageBefore',
            },
            forced: true,
            audio: 'aimk',
            check() {
              return false;
            },
            content() {
              trigger.cancel();
              trigger.player.loseHp(trigger.num);
            },
            ai: {
              jueqing: true,
            },
          },
          damageP: {
            trigger: {
              player: 'damage2',
            },
            forced: true,
            audio: 'aimk',
            check() {
              return false;
            },
            content() {
              trigger.cancel();
              trigger.player.loseHp(trigger.num);
            },
            ai: {
              maixie: true,
              maixie_hp: true,
            },
          },
        },
      },
      uzwh: {
        derivation: ['mjtolovf', 'mjuuuahx_bian'],
        audio: 'ext:恒梦/audio/xqlo:6',
        enable: 'phaseUse',
        filter(event, player) {
          return player.storage.qigu.length >= 4;
        },
        async content(event, trigger, player) {
          player.storage.qigu = [];
          const x = player.getDamagedHp(),
            y = player.hp,
            z = x - y;
          if (x > y) {
            await player.recover(z);
          } else {
            await player.loseHp(-z);
          }
          if (!player.hasSkill('mjtolohx') && !player.hasSkill('mjuuuahx')) {
            player.addSkill(['mjtolohx', 'mjtolovf']);
            player.setAvatar('xqlo', 'mjtolohx');
          } else if (player.hasSkill('mjuuuahx')) {
            player.removeSkill(['mjuuuahx', 'mjuuuahx_bian']);
            player.addSkill(['mjtolohx', 'mjtolovf']);
            player.setAvatar('xqlo', 'mjtolohx');
          } else if (player.hasSkill('mjtolohx')) {
            player.removeSkill(['mjtolohx', 'mjtolovf']);
            player.addSkill(['mjuuuahx', 'mjuuuahx_bian']);
            player.setAvatar('xqlo', 'mjuuuahx');
          }
          const evt = _status.event.getParent('phase');
          if (evt && evt.name) {
            evt.finish();
          }
          const next = player.phase('nodelay');
          next._noTurnOver = true;
          next.setContent(lib.skill.uzwh.phase);
        },
        phase() {
          player.phaseUse();
          game.broadcastAll(function () {
            if (ui.tempnowuxie) {
              ui.tempnowuxie.close();
              delete ui.tempnowuxie;
            }
          });
          player.phaseDiscard();
          delete player._noSkill;
        },
        ai: {
          order: 9,
          result: {
            player(player) {
              if (player.hp === player.maxHp) {
                return 0;
              }
              if (player.storage.qigu.length >= 4) return 1;
              if (
                player.getStat().card.sha >= 1 &&
                !player.getCards('he').some((i) => {
                  return i.name === 'zhuge';
                })
              )
                return 1;
              return (player.countCards('h') + 3 - player.hp / 1.5) / 4;
            },
          },
        },
        group: ['uzwh3'],
      },
      uzwh2: {
        audio: 'ext:恒梦/audio/xqlo:2',
        trigger: { player: 'damageAfter' },
        forced: true,
        content() {
          if (!player.hasSkill('mjtolohx') && !player.hasSkill('mjuuuahx')) {
            player.addSkill(['mjtolohx', 'mjtolovf']);
            player.setAvatar('xqlo', 'mjtolohx');
            event.finish();
          } else if (player.hasSkill('mjuuuahx')) {
            player.removeSkill(['mjuuuahx', 'mjuuuahx_bian']);
            player.addSkill(['mjtolohx', 'mjtolovf']);
            player.setAvatar('xqlo', 'mjtolohx');
            event.finish();
          } else if (player.hasSkill('mjtolohx')) {
            player.removeSkill(['mjtolohx', 'mjtolovf']);
            player.addSkill(['mjuuuahx', 'mjuuuahx_bian']);
            player.setAvatar('xqlo', 'mjuuuahx');
            event.finish();
          }
        },
      },
      uzwh3: {
        trigger: { player: 'phaseUseAfter' },
        forced: true,
        content() {
          player.removeSkill(['mjtolohx', 'mjtolovf', 'mjuuuahx', 'mjuuuahx_bian']);
          if (!player.hasSkill('guhx')) {
            if (Math.random() < 0.5) {
              player.flashAvatar('xqlo', 'mjtolohx');
            } else {
              player.flashAvatar('xqlo', 'mjuuuahx');
            }
          } else {
            lib.skill.guhx.caidan(player);
          }
        },
      },
      dcui: {
        group: ['dcui_one', 'dcui_two'],
        audio: 'ext:恒梦/audio/yruitmzy:2',
        trigger: {
          global: 'roundStart',
        },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseTarget(get.prompt2('dcui'), true, lib.filter.notMe)
            .set('ai', function (target) {
              return get.attitude(_status.event.player, target);
            })
            .forResult();
        },
        async content(event, trigger, player) {
          const target = event.targets[0];
          player.addExpose(0.4);
          target.addTempSkill('dcui_ai', 'roundstart');
          player.storage.dcui_one = target;
        },
        subSkill: {
          ai: {
            ai: {
              maixue: true,
              maixue_hp: true,
              effect: {
                target(card, player, target, current) {
                  if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                  if (get.tag(card, 'damage') && !card.nature) return [1, 2];
                  else if (get.tag(card, 'damage') && card.nature === 'fire') return [1, -1];
                  else if (get.tag(card, 'damage') && card.nature === 'thunder') return [1, -2];
                  return;
                },
              },
            },
          },
          one: {
            audio: 'dcui',
            mark: true,
            intro: {
              content: 'player',
            },
            forced: true,
            trigger: {
              global: 'damageBegin4',
            },
            filter(event, player) {
              return player.storage.dcui_one == event.player && !event.nature;
            },
            content() {
              trigger.player = player;
            },
          },
          two: {
            forced: true,
            trigger: {
              global: 'dieAfter',
            },
            filter(event, player) {
              return player.storage.dcui_one == event.player;
            },
            content() {
              player.die();
            },
          },
        },
      },
      hyyr: {
        charlotte: true,
        audio: 'ext:恒梦/audio/yruitmzy:2',
        forced: true,
        trigger: {
          player: 'dying',
        },
        filter(event, player) {
          if (player.storage.lwjpq) return false;
          if (!player.storage.dcui_one || !player.storage.dcui_one.isIn()) return false;
          return event.getParent('damage').nature !== 'thunder';
        },
        content() {
          player.recover(player.storage.dcui_one.hp - player.hp);
          game.log(player, '进入了濒死状态,将体力回复至', player.storage.dcui_one.hp);
        },
        ai: {
          maixue: true,
          maixue_hp: true,
          effect: {
            target(card, player, target, current) {
              if (target.hp == 1) {
                if (get.tag(card, 'damage') && card.nature !== 'thunder') return [0, 2.5, 1, 0];
              }
            },
          },
        },
      },
      lwjp: {
        derivation: 'lwjp_jtxk',
        audio: 'ext:恒梦/audio/yruitmzy:2',
        forced: true,
        trigger: {
          player: 'damage',
        },
        _priority: -1,
        async content(event, trigger, player) {
          await player.addToExpansion(get.cards(3), 'gain2').set('gaintag', ['lwjp']);
          let list = [],
            discard = [],
            cards = player.getExpansions('lwjp');
          for (const i in cards) {
            const card = i,
              suit = card.suit,
              type = get.type2(card);
            if (!list.includes(suit)) {
              list.push(suit);
              discard.push(card);
            }
            if (!list.includes(type)) {
              list.push(type);
              if (!discard.includes(card)) {
                discard.push(card);
              }
            }
          }
          if (list.length === 7) {
            const audio = game.playAudio('../extension/恒梦/audio/lwjp');
            await player.showCards(discard, '雷劫');
            player.gain(discard, 'give', player, 'bySlef');
          }
        },
        marktext: '雷劫',
        intro: {
          content: 'expansion',
          markcount: 'expansion',
        },
        onremove(player, skill) {
          const cards = player.getExpansions(skill);
          if (cards.length) player.loseToDiscardpile(cards);
        },
        group: 'lwjp_judge',
        subSkill: {
          dying: {
            trigger: {
              player: ['phaseEnd', 'dyingBefore'],
            },
            superCharlotte: true,
            forced: true,
            silent: true,
            filter(event, player) {
              return event.name == 'dying' || player.hp < 1;
            },
            content() {
              if (trigger.name == 'dying') trigger.cancel();
              else player.die();
            },
          },
          judge: {
            audio: 2,
            trigger: {
              player: 'phaseZhunbeiBegin',
            },
            forced: true,
            _priority: 7,
            content() {
              'step 0';
              event.num = 3;
              ('step 1');
              player.storage.lwjpq = true;
              if (!player.hasSkill('lwjp_recover')) {
                player.addTempSkill('lwjp_recover');
              }
              if (!player.hasSkill('lwjp_jtxk')) {
                player.addTempSkill('lwjp_jtxk');
              }
              player
                .judge((card) => {
                  let number = card.number;
                  if (card.suit == 'spade' && number >= 2 && number <= 9) return -4;
                  return 2;
                })
                .set('judge2', (result) => {
                  return result.bool === false ? true : false;
                });
              ('step 2');
              if (!result.bool) {
                player.damage(Math.max(Math.floor(player.getExpansions('lwjp').length / 10), 1), 'thunder');
              }
              event.num--;
              if (event.num > 0) event.goto(1);
              ('step 3');
              if (player.hp > 0) {
                player.storage.lwjpq = false;
                if (player.hasSkill('lwjp_recover')) {
                  player.removeSkill('lwjp_recover');
                }
                if (player.hasSkill('lwjp_jtxk')) {
                  player.removeSkill('lwjp_jtxk');
                }
              }
            },
          },
          recover: {
            group: ['lwjp_unlimit', 'lwjp_dying'],
            trigger: {
              player: 'recoverAfter',
            },
            forced: true,
            charlotte: true,
            filter(event, player) {
              return player.hp > 0 && player.storage.lwjpq == true;
            },
            content() {
              delete player.storage.lwjpq;
            },
          },
          jtxk: {
            juexingji: true,
            trigger: {
              player: 'dyingBefore',
            },
            _priority: 999,
            async cost(event, trigger, player) {
              trigger.cancel();
              player.awakenSkill('lwjp_jtxk');
              const cards = player.getExpansions('lwjp');
              player.gain(cards, 'give', player, 'bySlef');
              const result = await player
                .chooseControl('♥️️', '♦️️', '♣️️', '♠️️')
                .set('prompt', '请选择一种花色的牌无次数限制')
                .set('ai', function (target) {
                  return ['♣️️', '♠️️'].randomGet();
                })
                .forResult();
              if (result.control !== 'cancel2') {
                event.result = {
                  bool: true,
                  cost_data: {
                    skill: result.control,
                  },
                };
              }
            },
            async content(event, trigger, player) {
              const result = event.cost_data;
              switch (result.skill) {
                case '♥️️':
                  player.storage.lwjp_jtxk = 'heart';
                  break;
                case '♦️️':
                  player.storage.lwjp_jtxk = 'diamond';
                  break;
                case '♣️️':
                  player.storage.lwjp_jtxk = 'club';
                  break;
                case '♠️️':
                  player.storage.lwjp_jtxk = 'spade';
                  break;
              }
            },
            onremove(player) {
              delete player.storage.lwjpq;
            },
          },
          unlimit: {
            mod: {
              cardUsable(card, player) {
                const list = player.storage.lwjp_jtxk;
                if (list == card.suit) return Infinity;
              },
            },
            trigger: {
              player: 'useCard1',
            },
            forced: true,
            popup: false,
            silent: true,
            firstDo: true,
            filter(event, player) {
              if (event.addCount === false) return true;
              const list = player.storage.lwjp_jtxk;
              return list == event.card.suit;
            },
            content() {
              trigger.addCount = false;
              const stat = player.getStat().card,
                name = trigger.card.name;
              if (stat[name] && typeof stat[name] == 'number') stat[name]--;
            },
          },
        },
      },
      ybyh: {
        audio: 'ext:恒梦/auido/hwbdwuih:2',
        trigger: {
          player: 'useCardAfter',
        },
        forced: true,
        filter(event, player) {
          if (event.parent.name == 'ybyh') return false;
          if (!event.targets.length || !event.card) return false;
          const type = get.type(event.card);
          if (type != 'basic' && type != 'trick') return false;
          const card = game.createCard(event.card.name, event.card.suit, event.card.number);
          for (const i of event.targets) {
            if (!i.isAlive()) return false;
            if (!player.canUse({ name: event.card.name }, i, false, false)) {
              return false;
            }
          }
          return true;
        },
        content() {
          const card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number);
          player.useCard(card, trigger.targets);
        },
        ai: {
          threaten: 2,
          effect: {
            player(card, player) {
              return 2;
            },
          },
        },
      },
      sohy: {
        audio: 'ext:恒梦/audio/hwbdwuih:3',
        trigger: {
          player: 'useCardToPlayer',
        },
        forced: true,
        filter(event, player) {
          if (player !== _status.currentPhase) return false;
          const l = game.findPlayer(function (current) {
            return current.name == 'bian' || current.name == 'wujq';
          });
          if (!l) return false;
          if (event.target == player) return false;
          if (event.targets.length > 1) return false;
          return true;
        },
        content() {
          const l = game.findPlayer(function (current) {
            return current.name == 'bian' || current.name == 'wujq';
          });
          l.useCard(game.createCard(trigger.card.name), trigger.target)._triggered = null;
        },
      },
      sohy1: {
        audio: 'sohy',
        trigger: {
          player: 'useCardToPlayer',
        },
        forced: true,
        filter(event, player) {
          const l = game.findPlayer(function (current) {
            return current.name == 'wujq';
          });
          if (!l) return false;
          if (event.target == player) return false;
          if (event.targets.length > 1) return false;
          return event.getParent(2).name != 'sohy2';
        },
        content() {
          const l = game.findPlayer(function (current) {
            return current.name == 'wujq';
          });
          l.useCard(game.createCard(trigger.card.name), trigger.target)._triggered = null;
        },
      },
      sohy2: {
        audio: 'sohy',
        trigger: {
          player: 'useCardToPlayer',
        },
        forced: true,
        filter(event, player) {
          const l = game.findPlayer(function (current) {
            return current.name == 'bian';
          });
          if (!l) return false;
          if (event.target == player) return false;
          if (event.targets.length > 1) return false;
          return event.getParent(2).name != 'sohy1';
        },
        content() {
          const l = game.findPlayer(function (current) {
            return current.name == 'bian';
          });
          l.useCard(game.createCard(trigger.card.name), trigger.target)._triggered = null;
        },
      },
      povh_mark: {
        charlotte: true,
        forced: true,
        popup: false,
        _priority: 3,
        trigger: {
          global: 'phaseBeginStart',
        },
        content() {
          game.players.forEach((i) => {
            if (i.getFriends().includes(player)) {
              if (!i.hasSkill('povh_ai')) i.addSkill('povh_ai');
              if (!i.hasMark('povh_mark')) {
                i.addMark('povh_mark', 1);
                i.unmarkSkill('povh_mark');
              }
            }
          });
          if (!player.hasMark('povh_mark')) {
            player.addMark('povh_mark', 1);
            player.unmarkSkill('povh_mark');
          }
        },
      },
      povh_ai: {
        charlotte: true,
        forced: true,
        popup: false,
        ai: {
          effect: {
            target(card, player, target, current) {
              if (get.itemtype(target) == 'player' && !player.hasMark('povh_mark') && player.hasSkill('lkti') && !get.tag(card, 'recover') && !get.tag(card, 'save') && target != player) return 'zeroplayertarget';
            },
          },
        },
      },
      povh1: {
        forced: true,
        trigger: {
          global: 'phaseBeginStart',
        },
        filter(event, player) {
          return player != event.player && !event.player._trueMe && event.player.hasSkill('lkti');
        },
        logTarget: 'player',
        content() {
          trigger.player._trueMe = player;
          game.addGlobalSkill('autoswap');
          if (trigger.player == game.me) {
            game.notMe = true;
            if (!_status.auto) ui.click.auto();
          }
          trigger.player.addSkill('povh2');
        },
      },
      povh2: {
        trigger: {
          player: ['phaseAfter', 'dieAfter'],
          global: 'phaseBefore',
        },
        lastDo: true,
        charlotte: true,
        forceDie: true,
        forced: true,
        silent: true,
        content() {
          player.removeSkill('povh2');
        },
        onremove(player) {
          if (player == game.me) {
            if (!game.notMe) game.swapPlayerAuto(player._trueMe);
            else delete game.notMe;
            if (_status.auto) ui.click.auto();
          }
          delete player._trueMe;
        },
        popup: false,
      },
      lkti: {
        forced: true,
        _priority: 5,
        audio: 'ext:恒梦:1',
        init(player) {
          if (!player.isLinked()) player.link(true);
        },
        trigger: {
          player: 'linkBefore',
          global: 'phaseBefore',
        },
        filter(event, player) {
          if (event.name == 'link') return player.isLinked();
          return event.name != 'phase' && !player.isLinked();
        },
        content() {
          if (trigger.name != 'link') player.link(true);
          else trigger.cancel();
        },
        group: ['lkti1', 'lkti2'],
      },
      lkti2: {
        trigger: {
          player: 'phaseBegin',
        },
        audio: 'ext:恒梦:2',
        forced: true,
        charlotte: true,
        filter(event, player) {
          return !player.hasSkill('lkti_ai');
        },
        init(player, skill) {
          if (_status.currentPhase == player) player.addTempSkill('lkti_ai');
        },
        content() {
          if (!player.hasSkill('lkti_ai')) player.addTempSkill('lkti_ai');
        },
      },
      lkti_ai: {
        charlotte: true,
        forceDie: true,
        forced: true,
        popup: false,
        mod: {
          aiValue(player, card, num) {
            if (!player.getEquip(1) && get.subtype(card) == 'equip1') return num + 10;
          },
          aiUseful(player, card, num) {
            if (!player.getEquip(1) && get.subtype(card) == 'equip1') return num + 10;
          },
        },
        ai: {
          effect: {
            target(card, player, target, current) {
              if (!target.hasMark('povh_mark') && (get.tag(card, 'recover') || get.tag(card, 'save'))) return 'zeroplayertarget';
            },
            player(card, player, target) {
              if (get.tag(card, 'damage') && get.tag(card, 'multitarget')) return [1, 30];
            },
          },
        },
      },
      lkti1: {
        trigger: { player: 'dieAfter' },
        forceDie: true,
        forced: true,
        content() {
          let name = player.name;
          game.broadcastAll(
            function (player, shown) {
              player.identity = player.storage.lkti1[0];
              player.showIdentity();
            },
            player,
            player.identityShown
          );
          player.reinit(name, player.storage.lkti1[1], false);
          if (player.maxHp > 0) player.loseMaxHp();
        },
      },
      coyu: {
        audio: 'ext:恒梦/audio/hwbdwuih:2',
        trigger: {
          player: 'dieBefore',
        },
        filter(event, player) {
          let characters = ['bian', 'wujq'];
          game.countPlayer((current) => {
            if (current.name1 == 'bian' || current.name2 == 'bian') {
              characters.yiiu('bian');
            }
            if (current.name1 == 'wujq' || current.name2 == 'wujq') {
              characters.yiiu('wujq');
            }
          });
          return characters.length;
        },
        check: () => true,
        _priority: 1,
        async content(event, trigger, player) {
          trigger.cancel();
          player.awakenSkill('coyu');
          let characters = ['bian', 'wujq'];
          game.countPlayer((current) => {
            if (current.name1 == 'bian' || current.name2 == 'bian') {
              characters.yiiu('bian');
            }
            if (current.name1 == 'wujq' || current.name2 == 'wujq') {
              characters.yiiu('wujq');
            }
          });
          const result = await player
            .chooseControl(characters)
            .set('dialog', ['选择要替换成的武将', [characters, 'character']])
            .set('ai', () => [0, 1].randomGet())
            .forResult();
          const character = result.control;
          if (!_status.characterlist) {
            lib.skill.pingjian.initList();
          }
          _status.characterlist.yiiu(character);
          _status.characterlist.add('hwbdui');
          player.init(character);
          player.recover(2 - player.hp);
          player.addSkill('povh');
        },
      },
      povh: {
        derivation: ['lkti'],
        audio: 'ext:恒梦/audio/hwbdwuih:2',
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          let characters = ['bian', 'wujq'];
          game.countPlayer((current) => {
            if (current.name1 == 'bian' || current.name2 == 'bian') {
              characters.yiiu('bian');
            }
            if (current.name1 == 'wujq' || current.name2 == 'wujq') {
              characters.yiiu('wujq');
            }
          });
          return game.dead.length && characters.length;
        },
        notarget: true,
        async content(event, trigger, player) {
          const result = await player
            .chooseTarget(true, '选择黑白无常灵体出窍位置')
            .set('filterTarget', function (card, player, target) {
              if (target.isAlive()) return false;
              if (target.maxHp < 1) return false;
              return true;
            })
            .set('deadTarget', true)
            .set('ai', function () {
              return 10;
            })
            .forResult();
          if (!result.bool) return;
          event.dead = result.targets[0];
          let charactersx = ['bian', 'wujq'];
          game.players.forEach((current) => {
            if (current.name1 == 'bian' || current.name2 == 'bian') {
              charactersx.yiiu('bian');
            }
            if (current.name1 == 'wujq' || current.name2 == 'wujq') {
              charactersx.yiiu('wujq');
            }
          });
          const resultx = await player
            .chooseControl(charactersx)
            .set('dialog', ['选择灵魂出窍者', [charactersx, 'character']])
            .set('ai', () => [0, 1].randomGet())
            .forResult();
          player.line(event.dead, 'fire');
          const dead = event.dead;
          dead.storage.lkti1 = [];
          dead.storage.lkti1.push(dead.identity);
          game.broadcastAll(
            function (player, dead, shown) {
              let identity = player.identity;
              if (player.identity == 'zhu') dead.identity = 'zhong';
              else {
                dead.identity = identity;
              }
            },
            player,
            dead,
            dead.identityShown
          );
          dead.showIdentity();
          dead.update();
          let charactery = resultx.control;
          if (!_status.characterlist) {
            lib.skill.pingjian.initList();
          }
          _status.characterlist.yiiu(charactery);
          _status.characterlist.add('hwbdui');
          let name = dead.name;
          dead.storage.lkti1.push(name);
          dead.reinit(name, charactery, false);
          game.broadcastAll(function (dead) {
            dead.revive(3);
          }, event.dead);
          game.addVideo('revive', event.dead);
          if (event.dead) event.dead.draw(2);
          if (!event.dead.hasSkill('lkti')) event.dead.addSkill('lkti');
          if (!event.dead.hasSkill('povhReturn')) event.dead.addSkill('povhReturn');
          event.dead.update();
          await player.give(player.getCards('h'), event.dead);
          event.dead.phase('nodelay');
          const evt = _status.event.getParent('phase');
          if (evt && evt.name) {
            evt.finish();
          }
        },
        ai: {
          order: 3,
          result: {
            player(player) {
              if (
                player.getStat().card.sha >= 1 &&
                !player.getCards('he').some((i) => {
                  return i.name === 'zhuge';
                })
              )
                return 1;
              return 0.6;
            },
          },
        },
        group: ['povh1', 'povh_mark', 'povh_ai'],
      },
      povhReturn: {
        trigger: { player: 'phaseAfter' },
        filter(event, player) {
          const list = game.filterPlayer(function (current) {
            return current.name === 'hwbdui';
          });
          return list.length;
        },
        forced: true,
        firstDo: true,
        async content(event, trigger, player) {
          const list1 = game.filterPlayer(function (current) {
            return current.hasSkill('povh');
          });
          await player.give(player.getCards('h'), list1[0]);
          player.die();
        },
      },
      yhfu: {
        trigger: { source: 'damageSource' },
        forced: true,
        content() {
          if (!trigger.player.hasSkill('yhMark')) trigger.player.addSkill('yhMark');
          trigger.player.addMark('yhMark', 1);
        },
      },
      yhMark: {
        intro: {
          name: '阳',
          content: '当前:#',
        },
        marktext: '阳',
        mark: true,
      },
      ybfu: {
        trigger: { source: 'damageSource' },
        forced: true,
        content() {
          if (!trigger.player.hasSkill('ybMark')) trigger.player.addSkill('ybMark');
          trigger.player.addMark('ybMark', 1);
        },
      },
      ybMark: {
        intro: {
          name: '阴',
          content: '当前:#',
        },
        marktext: '阴',
        mark: true,
        charlotte: true,
        forced: true,
        trigger: { global: ['yhfuAfter', 'ybfuAfter'] },
        filter(event, player) {
          return player.hasMark('yhMark') && player.hasMark('ybMark');
        },
        content() {
          player.removeMark('yhMark');
          player.removeMark('ybMark');
          player.loseHp();
        },
      },
      yeho: {
        nobracket: true,
        trigger: { player: 'useCardAfter' },
        filter(event, player) {
          if (!player.isPhaseUsing()) return false;
          if (event.cards.length !== 1) return false;
          const suit = event.card.suit;
          if (!lib.suit.includes(suit)) return false;
          if (player.storage.yehoc.includes(suit)) return false;
          if (
            !player.hasHistory('lose', function (evt) {
              return evt.hs.length && evt.parent == event;
            }) ||
            !event.cards.filterInD('o').length
          )
            return false;
          return true;
        },
        firstDo: true,
        audio: 'ext:恒梦/audio/jbwu:3',
        init(player) {
          game.addGlobalSkill('yeho_judge');
          game.broadcastAll(() => lib.skill.yeho.video());
          if (!player.storage.yehoc) player.storage.yehoc = [];
        },
        video() {
          const list = lib.skill.yeho.yehoList;
          for (const name of list) {
            const namex = 'yeho_' + name;
            if (!lib.card[namex]) {
              lib.card[namex] = {
                type: 'special_delay',
                fullskin: true,
                noEffect: true,
                wuxieable: false,
              };
              lib.card[namex].cardimage = name;
              lib.translate[namex] = lib.translate[name] + '·业火';
              lib.translate[namex + '_info'] = '由【业火】技能创造的无效果【' + lib.translate[name] + '】';
            }
          }
        },
        yehoList: ['lebu', 'bingliang', 'shandian'],
        async cost(event, trigger, player) {
          const cardx = trigger.cards.filterInD('o')[0];
          game.addVideo('skill', player, ['yeho', []]);
          const listx = get.inpileVCardList((info) => {
            const name = info[2];
            return lib.skill.yeho.yehoList.includes(name);
          });
          game.log(Array.from(listx, (info) => info[2]));
          const links = await player
            .chooseButton(1, ['###' + get.prompt('yeho') + '###<div class="text center">将一张<业火>以你选择的牌名置于一名角色的判定区</div>', [listx, 'vcard']])
            .set('filterButton', (button) => {
              return lib.skill.yeho.yehoList.some((name) => {
                return game.hasPlayer((target) => target.canAddJudge({ name: 'yeho_' + name }));
              });
            })
            .set('ai', (button) => {
              const player = get.event('player'),
                cardx = get.event('cardx'),
                list = lib.skill.yeho.yehoList;
              if (
                game.hasPlayer((current) => {
                  return get.attitude(player, current) < 0 && lib.skill.yeho.yehoList.some((name) => current.canAddJudge({ name: 'yeho_' + name }));
                })
              )
                return 2;
              return 1;
            })
            .set('cardx', cardx)
            .forResultLinks();
          if (!links || !links.length) return;
          const card = links[0],
            name = links[0][2];
          event.linksname = name;
          const result = await player
            .chooseTarget(
              `请选择【${get.translation(name)}( ${get.translation(cardx.name)})】置入的目标`,
              (card, player, target) => {
                return target.canAddJudge({ name: 'yeho_' + name });
              },
              true
            )
            .set('ai', (target) => {
              const player = get.event('player');
              if (
                game.hasPlayer((current) => {
                  return get.attitude(player, current) < 0 && current.canAddJudge({ name: `yeho_${name}` });
                })
              ) {
                return -get.attitude(player, target) * (game.countPlayer() + get.distance(player, target));
              }
              return target.countCards('j') + 1;
            })
            .set('card', cardx)
            .forResult();
          if (!result.bool) return;
          result.cost_data = name;
          event.result = result;
        },
        async content(event, trigger, player) {
          game.addVideo('skill', player, ['yeho', []]);
          const target = event.targets[0],
            name = event.cost_data,
            card = trigger.cards.filterInD('o');
          target.addJudge({ name: 'yeho_' + name }, [card[0]]);
        },
        mod: {
          aiOrder(player, card, num) {
            const suit = card.suit;
            if (!lib.suit.includes(suit)) return;
            if (player.storage.yehoc.includes(suit)) return num / 3;
            if (get.isjiui(card)) return num + 4; //QQQ
            return num;
          },
        },
        group: ['yeho_hvuz', 'yeho_count', 'yeho_clear'],
        subSkill: {
          count: {
            charlotte: true,
            trigger: { player: 'useCardAfter' },
            filter(event, player) {
              if (!player.isPhaseUsing()) return false;
              let suit = event.card.suit;
              return lib.suits.includes(suit) && !player.storage.yehoc.includes(suit);
            },
            forced: true,
            silent: true,
            marktext: '业火',
            intro: {
              content(s, p) {
                let str = '已使用花色';
                for (const suit of p.storage.yehoc) {
                  str += `【${get.translation(suit)}】`;
                }
                return str;
              },
            },
            content() {
              player.storage.yehoc.push(trigger.card.suit);
              player.markSkill('yeho_count');
            },
          },
          clear: {
            silent: true,
            forced: true,
            trigger: { player: 'phaseAfter' },
            content() {
              player.storage.yehoc = [];
              player.unmarkSkill('yeho_count');
            },
          },
          judge: {
            mod: {
              targetEnabled(card, player, target) {
                const list = lib.skill.yeho.yehoList;
                const name = typeof card == 'string' ? card : card.viewAs ? card.viewAs : card.name;
                if (name.indexOf('yeho_') === 0) {
                  const namex = name.slice('yeho_'.length);
                  if (list.includes(namex) && target.getCards('j').some((i) => i.name === namex)) return false;
                } else if (list.includes(name) && target.getCards('j').some((i) => (i.viewAs ? i.viewAs : i.name === `yeho_${name}`))) return false;
              },
            },
            ai: {
              threaten(player, target) {
                if (!player.hasSkill('yeho') || ![1, 2, 3].includes(target.countCards('j'))) return;
                return 3 + target.countCards('j');
              },
            },
          },
          uzhv: {
            audio: 'yeho',
            enable: 'phaseUse',
            filter(event, player) {
              return game.hasPlayer((current) => {
                return current.getCards('j').some((i) => get.kapdmkzi(i).indexOf('yeho_') !== -1);
              });
            },
            filterTarget(card, player, target) {
              if (!target.getCards('j') || !target.getCards('j').length) return false;
              if (!target.getCards('j').some((i) => get.kapdmkzi(i).indexOf('yeho_') !== -1)) return false;
              return target.countCards('j') && target.countCards('hs') && player !== target;
            },
            usable: 1,
            async content(event, trigger, player) {
              const target = event.targets[0];
              const choices = game.zvdrlujkxrxl(player, target, false);
              choices.push('cancel2');
              const result = await player
                .chooseControl(choices)
                .set('prompt', get.prompt('yeho_uzhv'))
                .set('将其一张牌以某个方向传递给你,沿途目标横置')
                .set('ai', function () {
                  return [0, 1].randomGet();
                })
                .forResult();
              if (result.control === 'cancel2') return;
              const resulta = await target
                .chooseCard(true, '将1张牌以' + (result.control === '↘' ? '↗' : '↖') + '方向传递给金乌,沿途目标横置', 1, 'he', (card, player) => true)
                .set('ai', (card) => {
                  const val = get.value(card),
                    att = get.attitude(player, target);
                  return 6 + (val * att) / Math.abs(att);
                })
                .forResult();
              const rcard = resulta.cards[0];
              let pretar = target;
              if (result.control == '↘') {
                while (pretar !== player) {
                  if (!pretar.isLinked()) pretar.link(true);
                  await pretar.$give(rcard, pretar.next, false, true);
                  pretar = pretar.next;
                }
              } else {
                while (pretar !== player) {
                  if (!pretar.isLinked()) pretar.link(true);
                  await pretar.$give(rcard, pretar.previous, false, true);
                  pretar = pretar.previous;
                }
              }
              game.log(pretar.name);
              await player.gain(rcard, target, false);
            },
            ai: {
              order: 12,
              result: {
                player: 1,
                target: -1,
              },
            },
          },
          hvuz: {
            trigger: { player: 'useCardToTargeted' },
            filter(event, player) {
              return event.target.getCards('j').some((i) => get.kapdmkzi(i).includes('yeho_'));
            },
            async cost(event, trigger, player) {
              event.result = await player.choosePlayerCard('he', trigger.target, true, `业火:将${get.translation(trigger.target)}的一张牌以某方向传递给金乌,沿途目标横置`).forResult();
            },
            async content(event, trigger, player) {
              const target = trigger.target;
              const rcard = event.cards[0];
              const choices = game.zvdrlujkxrxl(player, target, false);
              choices.push('cancel2');
              const result = await player
                .chooseControl(choices)
                .set('prompt', get.prompt('yeho_uzhv'))
                .set('prompt2', '令其将一张牌以某个方向传递给你,沿途目标横置')
                .set('choices', choices)
                .set('ai', function () {
                  return 0;
                })
                .forResult();
              if (result.control === 'cancel2') return;
              let pretar = target;
              if (result.control == '↘') {
                while (pretar !== player) {
                  if (!pretar.isLinked()) pretar.link(true);
                  await pretar.$give(rcard, pretar.next, false, true);
                  pretar = pretar.next;
                }
              } else {
                while (pretar !== player) {
                  if (!pretar.isLinked()) pretar.link(true);
                  await pretar.$give(rcard, pretar.previous, false, true);
                  pretar = pretar.previous;
                }
              }
              await player.gain(rcard, target, false);
            },
          },
        },
      },
      yehop: {
        mod: {
          aiOrder(player, card, num) {
            const suits = player.storage.yehoc;
            if (suits.length) return;
            if (get.itemtype(card) == 'card') {
              if (suits.includes(card.suit)) return num + 4;
            }
          },
        },
        nobracket: true,
        audio: 'ext:恒梦/audio/jbwu:5',
        trigger: { player: 'useCardToTargeted' },
        filter(event, player) {
          if (!event.isFirstTarget || event.targets.length !== 1) return false;
          return event.target.countCards('j') && (get.type(event.card) == 'basic' || get.type(event.card) == 'trick');
        },
        prompt2(event, player) {
          const target = event.target,
            j = target.getCards('j');
          let str = '目标判定区有:';
          if (j.some((i) => get.kapdmkzi(i).indexOf('yeho_') !== -1)) str += '业火、';
          if (j.some((i) => get.kapdmkzi(i).indexOf('lebu') !== -1)) str += '乐不思蜀、';
          if (j.some((i) => get.kapdmkzi(i).indexOf('bingliang') !== -1)) str += '兵粮寸断、';
          if (j.some((i) => get.kapdmkzi(i).indexOf('shandian') !== -1)) str += '闪电、';
          str = str.slice(0, str.length - 1);
          if (j.some((i) => get.kapdmkzi(i).indexOf('yeho_') !== -1)) str += '<br>令此牌改为火属性';
          if (j.some((i) => get.kapdmkzi(i).indexOf('lebu') !== -1)) str += '<br>令此牌不可被其响应';
          if (j.some((i) => get.kapdmkzi(i).indexOf('bingliang') !== -1)) str += '<br>令此牌不计入次数限制';
          if (j.some((i) => get.kapdmkzi(i).indexOf('shandian') !== -1)) str += '<br>令此牌牌面数值+1';
          return str;
        },
        logTarget: 'target',
        async content(event, trigger, player) {
          const target = trigger.target,
            j = target.getCards('j'),
            card = trigger.card;
          for (const i of j) {
            game.log(get.kapdmkzi(i));
          }
          if (j.some((i) => get.kapdmkzi(i).indexOf('yeho_') !== -1)) {
            game.setNature(trigger.card, 'fire');
            if (get.itemtype(trigger.card) == 'card') {
              const next = game.createEvent('zhuque_clear');
              next.card = trigger.card;
              event.next.remove(next);
              trigger.after.push(next);
              next.setContent(function () {
                game.setNature(trigger.card, []);
              });
            }
          }
          if (j.some((i) => get.kapdmkzi(i).indexOf('lebu') !== -1)) {
            trigger.directHit.add(target);
          }
          if (j.some((i) => get.kapdmkzi(i).indexOf('bingliang') !== -1)) {
            if (trigger.addCount !== false) {
              trigger.addCount = false;
              player.getStat().card[trigger.card.name]--;
            }
          }
          if (j.some((i) => get.kapdmkzi(i).indexOf('shandian') !== -1)) {
            if (get.tag(card, 'damage') > 0 || get.tag(card, 'recover') > 0) {
              trigger.baseDamage++;
            }
          }
        },
      },
      vfti: {
        init(player) {
          if (!player.storage.vftihgvi) player.storage.vftihgvi = 0;
          player.storage.vfti = false;
          game.broadcastAll(function (player) {
            player.node.avatar.setBackgroundImage('extension/恒梦/image/characters/jbwu.jpg');
            player.classList.add('fullskin');
            player.group = 'wei';
          }, player);
        },
        onremove(player) {
          game.broadcastAll(function (player) {
            player.node.avatar.setBackground(player.name, 'character');
            player.group = lib.character[player.name][1];
          }, player);
        },
        enable: 'phaseUse',
        zhuanhuanji: true,
        mark: true,
        marktext: '☯',
        intro: {
          content(storage) {
            if (storage) return '金乌';
            else return '人形态';
          },
        },
        filter(event, player) {
          return Math.abs(game.countPlayer((p) => p.isLinked()) - player.storage.vftihgvi) !== 0;
        },
        async content(event, trigger, player) {
          const num = game.countPlayer((p) => p.isLinked()),
            numx = Math.abs(num - player.storage.vftihgvi),
            skillx = 'yeho_uzhv';
          await player.draw(2);
          if (player.getStat('triggerSkill')[skillx] && player.getStat('triggerSkill')[skillx] >= 1) {
            delete player.getStat('triggerSkill')[skillx];
          }
          if (typeof get.skillCount(skillx) == 'number' && get.skillCount(skillx) >= 1) {
            delete player.getStat('skill')[skillx];
          }
          player.storage.vftihgvi = num;
          player.changeZhuanhuanji('vfti');
          if (player.storage.vfti) {
            game.trySkillAudio('yehop', player);
            game.broadcastAll(function (player) {
              player.node.avatar.setBackgroundImage('extension/恒梦/image/characters/jbwuvfti.jpg');
              player.group = 'shu';
            }, player);
            await player.changeSkills(['yehop'], ['yeho']);
          } else {
            game.trySkillAudio('yeho', player);
            game.broadcastAll(function (player) {
              player.node.avatar.setBackgroundImage('extension/恒梦/image/characters/jbwu.jpg');
              player.group = 'wei';
            }, player);
            await player.changeSkills(['yeho'], ['yehop']);
          }
          const evt = _status.event.getParent('phase');
          if (evt && evt.name) {
            evt.finish();
          }
          const next = player.phase('nodelay');
          next._noTurnOver = true;
          next.setContent(lib.skill.vfti.phase);
        },
        phase() {
          player.phaseUse();
          game.broadcastAll(function () {
            if (ui.tempnowuxie) {
              ui.tempnowuxie.close();
              delete ui.tempnowuxie;
            }
          });
          player.phaseDiscard();
          delete player._noSkill;
        },
        ai: {
          order(item, player) {
            return 6;
          },
          result: {
            player: 1,
          },
        },
        derivation: ['yeho', 'yehop'],
        subSkill: {
          vrhr: {
            trigger: { global: 'linkBegin' },
            silent: true,
            charlotte: true,
            content() {
              player.isvijing('vfti');
            },
          },
        },
      },
      jbwunppj: {
        trigger: { player: 'dieBefore' },
        charlotte: true,
        forced: true,
        forceDie: true,
        filter(event, player) {
          return game.hasPlayer((p) => p.getCards('j').some((i) => get.kapdmkzi(i).indexOf('yeho_') !== -1));
        },
        content() {
          trigger.cancel();
          const p = game.filterPlayer((p) => p.getCards('j').some((i) => get.kapdmkzi(i).indexOf('yeho_') !== -1)),
            pl = p.length;
          let x = 0;
          for (let i = 0; i < pl; i++) {
            const j = p[i].getCards('j').filter((m) => get.kapdmkzi(m).indexOf('yeho_') !== -1);
            x += j.length;
            p[i].discard(j).discarder = player;
          }
          player.reinit(player.name, 'jbwudj');
          player.recover(x - player.hp);
          player.when({ player: 'phaseBefore' }).then(() => {
            player.init('jbwu');
            if (player.storage.vfti === true) {
              player.changeZhuanhuanji('vfti');
              player.changeSkills(['yeho'], ['yehop']);
            }
            game.trySkillAudio('yeho', player);
            player.recover(3 - player.hp);
          });
        },
      },
    },
    dynamicTranslate: {
      tmlb(player) {
        if (!player.storage.tmlb) return '转换技,你可以将牌堆顶的牌置于牌堆底,<span class="bluetext">阴,视为使用一张本轮未以此法使用过的普通锦囊牌</span>.阳,视为使用一张本轮未以此法使用过的基本牌.【帝力】:你视为使用的牌名与你从牌堆顶置入牌堆底的牌名相同';
        return '转换技,你可以将牌堆顶的牌置于牌堆底,阴,视为使用一张本轮未以此法使用过的普通锦囊牌.<span class="bluetext">阳,视为使用一张本轮未以此法使用过的基本牌</span>.【帝力】:你视为使用的牌名与你从牌堆顶置入牌堆底的牌名相同';
      },
    },
    translate: {
      hgmgf: '<font color=#FFCC00>❃传说</font>',
      yuqk: '元始天尊',
      yuhldadi: '玉皇大帝',
      xrvl: '玄奘',
      jbwu: '金乌',
      xqlo: '彼岸花',
      hwbdui: '黑白无常',
      bian: '必安',
      wujq: '无救',
      hzyi: '后羿',
      whirwunv: '忘川巫女',
      ybhy: '引魂',
      ihee: '嫦娥',
      hgmgfuxi: '伏羲',
      wjfagvyix: '万法归一',
      wjfagvyix_info: '出牌阶段限一次,你可以选择若干张牌和若干名角色,系统随机检索出三个符合该选择方式的技能,你可以选择发动其中一个技能,此技能可发动次数+bnqmX(X为你本次选择的牌数).每个技能每局游戏只能选择一次',
      wjfagvyi: '万法归一',
      wjfagvyi_info: '出牌阶段限X次(X为你的体力上限),你可以选择若干张牌和若干名角色,系统随机检索出三个符合该选择方式的技能,你可以选择发动其中一个技能.每个技能每局游戏只能选择一次',
      ytxl: '月相',
      ytxl_info: '游戏开始时,你在战场中央创造一个bnqm【月】(点击【月】可阅览深藏月色之中的箴言).当有牌因弃置而进入弃牌区时,你将其置入【月】之中.随着【月】中箴言花色数变化,月相变为残月,弦月,亏月,满月',
      ytui: '月食',
      ytui_info: '当你使用一张手牌后,以屏幕水平中心线构造镜面,你可以使用一张【月】中相同花色的牌(不计入次数限制),此牌的指示指向根据此牌点数决定bnqm入射角度(参考时钟,k点为全角度),当你将目光注视【月】上之箴言时,可以提前预演光线轨迹.当你宣读箴言之时,根据反射和折射原理,光线从屏幕边缘射向【月】,光线所过之处皆为此牌可选目标(若月光命中多次,箴言对目标执行等量次),即便有微小偏差,亦视为命中.若这两张牌指定的目标有重合部分,你摸一张牌',
      bfyt: '奔月',
      bfyt_info: '回合开始时,若当前月相为满月,你可以奔月,将你的武将牌置于【月】之上并执行一个额外回合.此回合结束时,若本回合进入过弃牌堆的牌不足全花色,你失去一点体力',
      ybhy_info: '出牌阶段,你可以移动已阵亡角色,称为<bnqm灵魂>,使其附身一名角色.<br>每名被附身的角色发动<灵魂>技能/回合结束时,将遭到<灵魂>bnqm反噬(<灵魂>获得其一点体力值),你移动该<灵魂>.当<灵魂>的体力大于初始体力时,立即复活该角色并转化为你的阵营',
      $lkhy: '灵魂',
      $lkhy_info: '视为拥有<灵魂>武将牌上的技能',
      whug: '往生',
      whug_info: '当你即将死亡时,你可以选择一个<灵魂>,将体力值回复至该<灵魂>的体力值,灵魂回到已阵亡状态',
      hmdili: '帝力',
      hmdili_info: '你发动武将牌上的其余技能时,本回合封印该技能.若该技能为①锁定技,你解封你武将牌上的其余锁定技.②非锁定技,若该技能达成【帝力】,解封你武将牌上的其余非锁定技',
      qslj: '穹览',
      qslj_info: '出牌阶段,你可以观看牌堆顶的X张牌(X为武将牌已解封技能数),并将其以任意顺序置于牌堆项或牌堆底.【帝力】:你将【穹览】全放牌堆顶或牌堆底',
      tmlb: '天临',
      tmlb_info: '转换技,你可以将牌堆顶的牌置于牌堆底,阴,视为使用一张本轮未以此法使用过的普通锦囊牌;阳,视为使用一张本轮未以此法使用过的基本牌.【帝力】:你视为使用的牌名与你从牌堆顶置入牌堆底的牌名相同',
      vihg: '御衡',
      vihg_info: '出牌阶段,你可以弃置若干张牌并摸等量张牌,且牌名字数之和不小于2.【帝力】:你弃置的牌与摸到的牌牌名一一对应相同',
      diliugvi: '圣质',
      diliugvi_info: '锁定技.当你发动非锁定技后,你令你本回合使用的下一张牌无距离和次数限制',
      diliqrdc: '权道',
      diliqrdc_info: '锁定技.当你使用【杀】或普通锦囊牌时,{若你手牌中的【杀】或普通锦囊牌的数量之差X不为0,则你弃置X张数量较多的一种牌},你摸一张牌',
      diliiigh: '持纲',
      diliiigh_info: '锁定技.当你使用一张装备牌时,若此牌与牌堆顶/牌堆底的牌牌名字数相等,你从另一端摸一张牌',
      ughx: '生花',
      ughx_info: '当你使用杀或普通锦囊牌时,每个【骨生花】有50%概率额外使用一次此牌',
      mjtolovfMark: '曼陀罗阵',
      mjtolovf: '曼陀罗阵',
      mjtolovf2: '曼陀罗阵',
      mjtolovf3: '曼陀罗阵',
      mjtolovf_info: '【曼陀罗华】①出牌阶段,<font color=#FF0000>你使用牌时,若该牌花色与【阵】中花色均不同,你可将其置于武将牌上</font>,称为【阵】,从牌堆中获得一张花色与【阵】中的牌均不同的牌并幻化一名其他角色为【骨生花】.<br>②<font color=#FF0000>回合结束时</font>,你可隐匿,将真身寄于一朵【骨生花】中.【骨生花】受到伤害后回复武将牌,若此【骨生花】为你真身所寄,则骨生花均消散,你失去1点体力并解除隐匿状态.<br>③<font color=#FF0000>你的回合开始时</font>,所有骨生花失去1点体力',
      uzwh: '守望',
      uzwh_info: '<font color=#FF0000>当你使用你已使用过花色的牌时,失去1点体力</font>.<br><font color=#FF0000>出牌阶段,若你使用过的花色数达到4</font>,你可变幻形态直到回合结束,并重置已使用花色.<br><font color=#FF0000>你的当前血量与已失去血量对调并重置出牌阶段.</font>',
      aimk: '哀鸣',
      aimk_info: '锁定技,当有角色失去1点体力时,你摸1张牌',
      mjuuuahx_bian: '彼岸',
      mjuuuahx_bian_info: '【曼殊沙华】你使用与【阵】中同名的牌时,可额外结算一次',
      guhx: '骨花',
      guhx_info: '骨生花',
      jqxi: '锡锦',
      jqxi_info: '<font color=#C6A300>【九环锡杖】</font>:每当你失去的牌集齐三种花色时,你摸一张牌,并为九环锡杖赋法(使用牌无次数限制).<br><font color=#F75000>【锦澜袈裟】</font>:每当你失去的牌集齐所有类型时,你摸一张牌,并为锦斓袈裟赋法.(使用牌无距离限制)',
      jqvr: '九转',
      jqvr_info: '锁定技.当【九环锡杖】【锦澜袈裟】皆已赋法,你消耗所有法力,发动一次九转.当你的手牌数大于9时,你失去所有手牌',
      dcui: '道始',
      dcui_one: '道始',
      dcui3: '道始',
      dcui_info: '每轮开始时,庇佑一名其他角色.当其受到非属性伤害时,你承受之.你与其共存亡',
      lwjp: '雷劫',
      lwjp_jtxk: '道肆',
      lwjp_jtxk_info: '当你在雷劫之下濒死时,你获得所有【雷劫】并选择一种花色,你本回合使用该花色牌不限次数.回合结束时,若你的体力值不为正,你死亡',
      lwjp_info: '<b>锁定技</b>回合开始时,判定三道闪电,称为雷劫,每道闪电伤害取你武将牌上【雷劫】牌数量的十位数(动态变化).当你受到1点伤害时,将牌堆顶3张牌置于武将牌上,称为【雷劫】.当【雷劫】①花色包含:<♥️️️>,<♦️️️>,<♠️️️>,<♣️️️>.<br>②种类包含:<基本牌>,<锦囊牌>,<装备牌>时,你获得之',
      hyyr: '混元',
      hyyr_info: '锁定技,着我宝衣,不入地狱.当你不因雷电伤害而濒死时,你将体力值调整为你所庇佑者的体力值',
      ybyh: '阴阳',
      ybyh_info: '锁定技,你的基本牌或普通锦囊牌结算两次',
      coyu: '错域',
      coyu_info: '限定技,当你死亡时,你可以复活为【必安】或【无救】',
      sohy: '索魂',
      sohy_info: '锁定技,当你使用牌指定一名其他角色时,若场上有【必安】或【无救】则其视为对目标使用一张同名牌',
      sohy1: '索魂',
      sohy1_info: '锁定技,当你使用牌指定一名其他角色时,若场上有【无救】则其视为对目标使用一张同名牌',
      sohy2: '索魂',
      sohy2_info: '锁定技,当你使用牌指定一名其他角色时,若场上有【必安】则其视为对目标使用一张同名牌',
      povh: '破障',
      povh_info: '出牌阶段限一次,你可以释放分身于已阵亡角色上,并立即进入灵体回合',
      lkti: '灵体',
      lkti_info: '锁定技,回合开始时,你获得黑白无常的所有手牌.回合结束时,黑白无常收回灵体与手牌并使你的体力上限-1',
      yhfu: '阳符',
      yhfu_info: '攻击给目标施加【阳】符,若与【阴】符叠加,目标失去1点体力',
      ybfu: '阴符',
      ybfu_info: '攻击给目标施加【阴】符,若与【阳】符叠加,目标失去1点体力',
      ueri: '射日',
      ueri_info: '出牌阶段,你可以选择一名其他角色,其称为【日】,【日】拥有10倍于原来的血量和血量上限,也因如此,本回合你视为拥有【神弓】与【日矢】',
      bjuf: '神弓',
      bjuf_info: '你使用牌时,只能指定你与【日】为目标,你摸Y张牌且不可响应此牌.当X>=1/2/3时,你视为拥有【<font color=#FF0000>末世</font>】、【<font color=#F9F900>电刀</font>】、【<font color=#FF8000>无尽</font>】中的前等量项.(X为你本回合已使用花色数,Y为你本回合未使用花色数)',
      riui: '日矢',
      riui_info: '出牌阶段限一次,你可以将手牌中所有基本牌当一张🃏的万箭齐发使用(伤害基数为以此法转化的牌的数量)',
      bjuf_moui_info: '你使用牌指定【日】时,目标失去等同于当前体力值4%的体力',
      bjuf_moui: '<font color=#FF0000>末世</font>',
      bjuf_dmdc: '<font color=#F9F900>电刀</font>',
      bjuf_dmdc_info: '你使用牌指定【日】时,目标受到0.4点雷电伤害,若发动次数为3,目标分别横置、受到1.2点雷电伤害,并重置发动次数',
      bjuf_wujb: '<font color=#FF8000>无尽</font>',
      bjuf_wujb_info: '当你对【日】造成伤害时,有50%的概率暴击(双倍伤害)',
      yeho: `<font color=#0066CC>业火</font>`,
      yeho_info: '①锁定技,当你使用或打出有花色的牌时,若你本回合未使用过此花色的牌且此牌位于处理区,你将此牌当作一张无效果的判定牌置于一名角色的判定区,称为【业火】.②出牌阶段,当你使用牌指定一名判定区有【业火】的角色时,你可以获得其非判定区一张牌,此牌以最短路径在沿途角色手中依次传递并横置该角色直到传递给你',
      yehop: `<font color=#FF0000>业火</font>`,
      yehop_info: '当你使用基本牌或普通锦囊牌指定唯一目标后,你可根据其判定区内的牌执行对应项:1.有<业火>:此牌属性改为火属性;2.有<乐不思蜀>:此牌不可被其响应;3.有<兵粮寸断>:此牌不计入次数;4.有<闪电>:此牌牌面数值+1',
      vfti: '真体',
      vfti_info: '横置人数与本形态开始时横置人数不同时,你可以切换形态,摸两张牌并进入一个新的出牌阶段(不同形态【业火】效果不同).<br>阴:切换为金乌形态;阳:切换为人形态',
      jbwunppj: '涅槃',
      jbwunppj_info: '锁定技.当你即将死亡时,若场上有【业火】,你可以弃置场上的所有【业火】,化成一颗金乌蛋(初始体力为场上【业火】数量).回合开始时,若金乌蛋未破碎,你涅槃并将体力值调整为3',
    },
  };
  lib.config.characters.add('hgmgf');
  lib.config.all.characters.add('hgmgf');
  return hgmgf;
});
game.import('character', function (lib, game, ui, get, ai, _statu) {
  const hgmgt = {
    name: 'hgmgt',
    connect: true,
    characterTitle: {
      ximffwxt: '难度2i<br>运营2i<br>菜刀6i<br>保核1i',
      bdfamonv: '难度6i<br>运营6i<br>菜刀6i<br>保核1i',
      xnlsnv: '难度4i<br>运营1i<br>菜刀6i<br>保核1i',
      bdhell: '难度1i<br>运营6i<br>菜刀5i<br>保核3i',
      grnk: '难度2i<br>运营4i<br>菜刀3i<br>保核5i',
      litdbd: '难度2i<br>运营1i<br>菜刀6i<br>保核1i',
      tcqm: '难度2i<br>运营5i<br>菜刀4i<br>保核1i',
      yian: '难度7i<br>运营4i<br>菜刀3i<br>保核1i',
      lqysyr: '难度6i<br>运营6i<br>菜刀4i<br>保核3i',
      mgluxy: '难度1i<br>运营5i<br>菜刀2i<br>保核2i',
      mgqbyilu: '难度1i<br>运营6i<br>菜刀1i<br>保核1i',
      liuhyb: '难度7i<br>运营6i<br>菜刀1i<br>保核1i',
      duuurf: '难度5i<br>运营1i<br>菜刀1i<br>保核7i',
      wolsfgiu: '难度4i<br>运营5i<br>菜刀6i<br>保核1i',
      lsyk: '难度3i<br>运营6i<br>菜刀7i<br>保核1i',
    },
    character: {
      litdbd: ['male', 'wei', 4, ['ycyb', 'vexm', 'qklm', 'qljb'], ['des:谪仙人']],
      ximffwxt: ['male', 'shu', 4, ['ivxt', 'lohx', 'jmhf', 'fwxm'], ['des:二月初二,雪. 他早早的起床,取净水洁面,叠放整齐的白衣柔软合身. 剑已擦拭雪亮,他轻柔地抚摸剑身,犹如抚摸最心爱的女子. 桌上的簿子记着:<青州宋义威,擅八卦刀法,所使金环大背刀,刀背镶九金环,重二十三斤.于十一月劫杀定州宁氏,宁府上下四十八口无一幸免.> 二月初四,雪. 他已经在雪中站立许久,久到眼睫毛已经沾满雪花. 宋义威喘着粗气,问道:<你我素不相识,只因我劫杀宁氏,你要为其报仇.但你并不认识宁氏？> <是的.>他面色宁静的答道,就像取人性命如同简单寒暄一般轻松. <你千里而来杀我,究竟为何？> <应该为之而已.> 话音落,风吹雪,宋义威面上还带着惊恐之情,他似乎还有什么话想说,但再也说不来.因为死人,是不会说话的. 西门飞雪吹落了剑上的血花.每当了结一件大事时,他就想喝酒.滚烫的,能让人从骨头里烧起来的,驱除寂寞的酒. <世上还有什么事能使心再热起来？血再热起来？>看着手中的剑,西门陷入沉思']],
      bdfamonv: ['female', 'qun', 3, ['uufa', 'bdfauhui'], ['des:白发']],
      xnlsnv: ['female', 'shu', 4, ['yujm', 'hxjm', 'lmvu'], []],
      hxvijm: ['female', 'shu', 4, ['hxjm_jm'], []],
      mgqbyilu: ['male', 'qun', 4, ['mgpnpk', 'mgikli', 'mglqvr'], ['des:眼看前路如漂萍,驱兵策马']],
      mgluxy: ['male', 'wu', 3, ['mgqmxy', 'doui', 'mglmyk'], ['des:谦谦君子,温润如玉']],
      grnk: ['male', 'qun', '3/6', ['dyui'], ['des:愿宿野陌与虫歌,不枕歌楼听商女']],
      grnka: ['male', 'qun', '3/6', [], []],
      lqysyr: ['male', 'qun', 3, ['vunk'], ['des:吾父之基业,岂能亡于奸患之手']],
      lqysyra: ['male', 'qun', 3, [], []],
      tcqm: ['male', 'jin', 3, ['wuxm', 'jqyb', 'wulq'], ['des:登临山水,经日忘归,醉自然之乐']],
      yian: ['female', 'wu', 3, ['mcifu', 'hemk', 'qsyk'], []],
      bdhell: ['female', 'qun', 3, ['liyt', 'xrwo', 'suhv'], ['des:一生一世,不为尘埃']],
      liuhyb: ['male', 'qun', '4/8', ['lygx', 'gxmk'], []],
      duuurf: ['male', 'wu', 3, ['yuuibujt', 'kewfiyfg'], []],
      wolsfgiu: ['male', 'shu', '3/5', ['yzls', 'lrfg'], ['yuyb:1,2']],
      gjjlmoye: ['male', 'shu', '4/8', ['cvlm', 'tmjl', 'ulvs'], []],
      lsyk: ['male', 'qun', 4, ['lsxn', 'lsyb'], []],
    },
    characterIntro: {
      gjjlmoye: '大河之畔生活着贫寒的工匠夫妇.两人青梅竹马,相依为命.丈夫干将别无所长,只是一味痴迷于铸剑.废弃掉的剑在门外堆成了剑冢.村人都嘲笑这个不通世事的家伙,唯有妻子无怨无悔支持着他.<br>干将内心同样愧疚于妻子不能过上更好的生活.他只懂得铸剑,便希望能借此扬名,那样终究会有令妻子自豪和荣耀的一天.于是他带着作品去拜访各地的铸剑师,并挑战他们.他削断无数名匠之作,很快让自己的名字传遍云梦泽.自然,被砸掉招牌的铸剑师们也对他恨之入骨.世间公认有位绝代的大师.人们都说他的铸剑不仅削铁如泥,而且栖息着魂灵.大师许多弟子都败于干将之手,他们联合起来向师傅痛诉.于是大师向干将送上邀请拜访的帖子.胜过大师,自己就是名副其实的当世铸剑第一人.可他如约登门时,大师甚至没有露面,只命弟子持剑在门口迎接,轻轻一挥就将干将之剑斩成几半.匠人们出了一口恶气!他们放声嘲笑干将,把过往的耻辱加倍回报给他.<br>干将落荒而逃,失败在心中灼烧.他回到家中重复起枯燥的铸造生涯.熔炉四时不熄,每把剑都比前一把更加锋利,可它们始终是没有生命的铁片.死的剑和活的剑,犹如天上地下般的差距.他逐渐执念于铸剑,完全忘掉了初衷,连妻子的身体日渐衰弱都没有注意到.铸剑疯子的事传到阴阳家们耳中.自称为东皇太一的男人召见铸剑师,领他登上祭祀之地,那里矗立着一把剑.干将立刻认出这是大师的作品.<这把剑守护着太古的奇迹.它的名字叫巨阙,里面栖息着魂灵:它是剑——更是盾牌.接近它的人都会被剑锋撕裂.>东皇太一的计划困难而有效:锻造更锋利的剑,斩断它.<帮我得到奇迹,你就可达成心愿,成为世间无可逾越的铸剑师.在此之前,让我先告诉你让剑活过来的秘法吧.>干将浑身颤栗着,不敢相信耳中所闻.东皇太一交给他从太古保存下来的精铁.炉火燃烧了三天三夜,精铁无论如何都不能融化.干将眼里布满血丝,内心天人交战,需要一个生命才能让剑活过来.他太专注,没有注意到妻子悄无声息接近,眼神温柔而忧伤.她收到匿名来信,信上写着实现丈夫心愿的方法.自己的身体早已病入膏肓,命中注定要拿去成全爱人.干将从火炉的阴影中抬起头,正好迎上妻子最后的笑容——下一刻她便猛然跳入炉火中.<br>撕心裂肺的呼唤和陡然明亮的铁水席卷内心,另一手下意识握紧了铁锤.痛苦转瞬即逝,成功的狂热反倒熔炼了太古的精铁.天明时分,迄今最杰出的作品诞生了,里面栖息着魂灵.男人怀抱宝剑,呢喃着妻子的名字:莫邪.嘴角微微上翘:最爱的妻子和剑,如今是一体了.正如东皇太一计划的那样,莫邪剑斩断了巨阙,奇迹<转生之术>的力量被解放出来.这是太古建造的最后奇迹.付出那么多,终于可以凌驾世间所有铸剑者之上了!干将毫不犹豫扑向光辉中.炉火般的灼热力量包裹着他,魔道千锤百炼着血肉之躯,令其坚硬而锋利.他实现至高的愿望,将自己也锻造为剑',
      duuurf: '天予之,我自取之',
      liuhyb: '一个逍遥洒脱的仙君,在云上过着对酒当歌的日子,但是内心中他是一个很孤独的人,他会兴致勃勃的将自己的法器当做玩具供宴会的众人把玩,也会一个人安静的靠着阁楼看月亮.偶尔闲下来的空虚是他最放松的时候.每天的生活热闹又清凄,觥筹交错中有一些自己的小秘密,但还算享受自己的自洽',
    },
    characterSort: {
      hgmgt: {
        njdu1: ['geve', 'mg', 'mgxuuc', 'mgqbyilu', 'mgluxy', 'hwbdui', 'bdhell', 'yuqk', 'gryb', 'demotver', 'jxqiromg', 'jmsove', 'uijmddlirf'],
        njdu2: ['hzyi', 'tcqm', 'litdbd', 'gjjlmoye', 'ximffwxt', 'grnk', 'yuyjjx'],
        njdu3: ['dmglxx', 'xrvl'],
        njdu4: ['xnlsnv', 'qiqqve', 'xqlo', 'tmeevimg'],
        njdu5: ['tmhg'],
        njdu6: ['iftmyi', 'siuivimg', 'lqysyr', 'yian', 'bdfamonv'],
        njdu7: ['yuhldadi', 'liuhyb'],
      },
    },
    skill: {
      lsxn: {
        init(player) {
          if (!player.storage.lsxnx) {
            player.storage.lsxnx = {};
          }
        },
        audio: 'ext:恒梦/audio/lsyk:3',
        trigger: { player: 'useCardAfter' },
        zhuanhuanji: true,
        mark: true,
        marktext: '☯',
        intro: {
          content(storage) {
            if (!storage) return '当你使用左手时,你可以使用右手';
            return '当你使用右手时,你可以使用左手';
          },
        },
        filter(event, player) {
          const storage = player.storage.lsxn;
          if (!event.lsxnvi || !event.lsxnvi[player.playerid]) return false;
          if (!event.lsxnvi[player.playerid][player.storage.lsxn ? 'y' : 'x'].includes(0)) return false;
          if (
            !player.hasHistory('lose', (evt) => {
              if (evt.parent != event) return false;
              return event.cards && event.cards.every((card) => evt.hs.includes(card));
            })
          )
            return false;
          if (!player.countCards('h')) return false;
          const cardx = player.getCards('h')[player.storage.lsxn ? 0 : player.getCards('h').length - 1];
          if (!['basic', 'trick'].includes(get.type(cardx, false))) return false;
          if (!player.hasUseTarget(cardx)) return false;
          if (event.getParent(2).name == 'lsxn') return false;
          return true;
        },
        forced: true,
        content() {
          'step 0';
          const cardx = player.getCards('h')[player.storage.lsxn ? 0 : player.getCards('h').length - 1];
          const card = {
            name: cardx.name,
            nature: cardx.nature,
          };
          player.chooseUseTarget(card, get.prompt('lsxn'), false, false).set('prompt2', '视为使用一张' + get.translation(card))('step 1');
          if (result.bool) {
            if (!player.storage.lsxnx[trigger.card.name]) player.storage.lsxnx[trigger.card.name] = 0;
            player.storage.lsxnx[trigger.card.name]++;
            let list1 = trigger.targets,
              list2 = result.targets;
            if (list1.slice().removeArray(list2).length == 0 && list2.slice().removeArray(list1).length == 0) {
              player.draw();
            }
            player.changeZhuanhuanji('lsxn');
          }
        },
        ai: { threaten: 2 },
        group: ['lsxn_sort', 'lsxn_qiviuiys', 'lsxn_mark', 'lsxn_gain', 'lsxn_clear'],
        subSkill: {
          clear: {
            trigger: { player: 'phaseEnd' },
            forced: true,
            popup: false,
            content() {
              player.storage.lsxnx = {};
            },
          },
          gain: {
            trigger: {
              player: 'gainAfter',
            },
            filter(event, player) {
              if (player.hasSkill('lsxn_ban', null, null, false)) return false;
              return event.parent.name == 'draw' && event.getParent(2).name == 'lsxn';
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {
              player.addTempSkill('lsxn_ban');
            },
            sourceSkill: 'lsxn',
          },
          ban: {
            charlotte: true,
            ai: {
              noSortCard: true,
            },
            sourceSkill: 'lsxn',
          },
          mark: {
            charlotte: true,
            trigger: { player: 'useCardBegin' },
            filter(event, player) {
              const cards = player.getCards('h');
              if (!cards.length || !cards.includes(event.cards[0])) return false;
              return true;
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {
              const cards = player.getCards('h'),
                cardx = trigger.cards;
              if (!trigger.hguu) trigger.lsxnvi = {};
              trigger.lsxnvi[player.playerid] = {
                x: [],
                y: [],
              };
              for (const i of cardx) {
                trigger.lsxnvi[player.playerid].x.push(get.uzpdindex(i, player));
                trigger.lsxnvi[player.playerid].y.push(get.uzpdindex(i, player, false));
              }
            },
          },
          qiviuiys: {
            filterTarget(card, player, target) {
              return player.canUse('sha', target);
            },
            filter(event, player) {
              return player.countCards('h') > 1 && player.hasSkillTag('noSortCard');
            },
            mod: {
              aiOrder(player, card, num) {
                if (num <= 0 || get.itemtype(card) !== 'card' || get.type(card) !== 'equip') return num;
                let eq = player.getEquip(get.subtype(card));
                if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp)) return 0;
              },
            },
            enable: 'phaseUse',
            usable: 1,
            position: 'he',
            discard: false,
            lose: false,
            delay: false,
            filterCard: lib.filter.cardDiscardable,
            ai: {
              order(item, player) {
                if (player.hasCard((i) => get.value(i) > Math.max(6, 9 - player.hp), 'he')) return 1;
                return 10;
              },
              result: {
                player: 1,
              },
              nokeep: true,
              skillTagFilter(player, tag, arg) {
                if (tag === 'nokeep') return (!arg || (arg && arg.card && arg.card.name === 'tao')) && player.isPhaseUsing() && !player.getStat().skill.rezhiheng && player.hasCard((card) => card.name !== 'tao', 'h');
              },
              threaten: 1.55,
            },
            selectCard: [1, Infinity],
            check(card) {
              const player = _status.event.player;
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
              const svji = ['yi', 'er', 'sj', 'si'].randomGet();
              const card = {
                name: `lsyk_ui${svji}`,
              };
              player.useCard(card, cards, targets, false);
            },
          },
          sort: {
            enable: 'phaseUse',
            filter(event, player) {
              return player.countCards('h') > 1 && !player.hasSkillTag('noSortCard');
            },
            forced: true,
            lose: false,
            discard: false,
            delay: 0,
            prompt: '整理手牌顺序',
            async content(event, trigger, player) {
              event.getParent(2).goto(0);
              if (!event.isMine()) {
                player.tempBanSkill('lsxn_sort', {
                  player: ['useCard1', 'useSkillBegin', 'chooseToUseEnd'],
                });
              }
              const next = player.chooseToMoveif('龙啸:请整理手牌顺序', true);
              next.set('list', [['手牌', player.getCards('h')]]);
              next.set('processAI', (list) => {
                let player = get.player(),
                  cards = list[0][1].slice(0);
                cards.sort((a, b) => get.useful(b, player) - get.useful(a, player));
                if (player.storage.lsxn) cards.reverse();
                return [cards];
              });
              const result = await next.forResult();
              if (!result || !result.bool) return;
              let hs = result.moved[0].reverse();
              game.addVideo('lose', player, [get.cardsInfo(hs), [], [], []]);
              game.broadcastAll(
                (hs, player) => {
                  hs.forEach((i) => i.discard());
                  player.directgain(hs, false);
                },
                hs,
                player
              );
            },
            ai: {
              order: 10,
              result: {
                player: 1,
              },
            },
            sourceSkill: 'lsxn',
          },
        },
      },
      lsyb: {
        audio: 2,
        audioname: ['wufan'],
        trigger: {
          global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
        },
        forced: true,
        filter(event, player) {
          if (player != _status.currentPhase) return false;
          var cards = event.getd();
          if (!cards.length) return false;
          var list = [];
          var num = cards.length;
          if (Array.isArray(cards))
            for (const i of cards) {
              var card = i;
              list.add(card.suit);
            }
          game.getGlobalHistory('cardMove', function (evt) {
            if (evt.name != 'lose' && evt.name != 'cardsDiscard') return false;
            if (evt.name == 'lose' && evt.position != ui.discardPile) return false;
            if (evt == event || evt.parent == event) return false;
            num += evt.cards.length;
            if (Array.isArray(evt.cards))
              for (const i of evt.cards) {
                var card = i;
                list.remove(get.suit(card, evt.cards2 && evt.cards2.includes(card) ? evt.player : false));
              }
          });
          player.storage.lsyb_mark2 = num;
          return list.length;
        },
        content() {
          var list = [];
          var list2 = [];
          var cards = trigger.getd();
          if (Array.isArray(cards))
            for (const i of cards) {
              var card = i;
              var suit = card.suit;
              list.add(suit);
              list2.add(suit);
            }
          game.getGlobalHistory('cardMove', function (evt) {
            if (evt.name != 'lose' && evt.name != 'cardsDiscard') return false;
            if (evt.name == 'lose' && evt.position != ui.discardPile) return false;
            if (evt == trigger || evt.parent == trigger) return false;
            if (Array.isArray(evt.cards))
              for (const i of evt.cards) {
                var card = i;
                var suit = card.suit;
                list.remove(suit);
                list2.add(suit);
              }
          });
          list2.sort();
          for (let i = 0; i < list.length; i++) {
            const svji = ['yi', 'er', 'sj', 'si'].randomGet();
            player.gain(game.createCard(`lsyk_ui${svji}`));
          }
          player.storage.lsyb_mark = list2;
          player.addTempSkill('lsyb_mark');
          player.markSkill('lsyb_mark');
        },
        group: 'lsyb_damage',
        subSkill: {
          damage: {
            trigger: { source: 'damageBegin4' },
            filter(event, player) {
              return event.card && (event.card.uiyi || event.card.uier || event.card.uisj || event.card.uisi);
            },
            forced: true,
            popup: false,
            content() {
              trigger.player.changeHujia(1);
            },
          },
          change: {
            trigger: { player: 'useCard' },
            forced: true,
            filter(event, player) {
              return ['lsyk_uiyi', 'lsyk_uier', 'lsyk_uisj', 'lsyk_uisi'].includes(event.card.name);
            },
            content() {
              trigger.card.name = 'sha';
            },
          },
          mark: {
            onremove(player) {
              delete player.storage.lsyb_mark;
              delete player.storage.lsyb_mark2;
            },
            intro: {
              content(s, p) {
                var str = '本回合已经进入过弃牌堆的卡牌的花色:';
                for (let i = 0; i < s.length; i++) {
                  str += get.translation(s[i]);
                }
                str += '<br>本回合进入过弃牌堆的牌数:';
                str += p.storage.lsyb_mark2;
                return str;
              },
            },
          },
        },
      },
      ivxt: {
        audio: 'ext:恒梦/audio/ximffwxt:9',
        trigger: {
          player: 'useCardToPlayer',
        },
        _priority: 10,
        forced: true,
        filter(event, player) {
          if (event.targets.length != 1 || event.target == player || event.target.hasSkill('nodis')) return false;
          if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
          const target = event.target;
          const left = [],
            right = [];
          let left2 = player.previous,
            right2 = player.next;
          while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
            left.push(left2);
            right.push(right2);
            left2 = left2.previous;
            right2 = right2.next;
          }
          if (target == left2) {
            for (const i of left) {
              if (lib.filter.targetEnabled2(event.card, player, i)) return true;
            }
          }
          if (target == right2) {
            for (const i of right) {
              if (lib.filter.targetEnabled2(event.card, player, i)) return true;
            }
          }
          return false;
        },
        aiJudge(card, player, target, bool) {
          let left3 = false,
            right3 = false;
          let eff_left = 0,
            eff_right = 0;
          const left = [],
            right = [];
          let left2 = player.previous,
            right2 = player.next;
          while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
            left.push(left2);
            right.push(right2);
            left2 = left2.previous;
            right2 = right2.next;
          }
          if (target == left2) {
            for (const i of left) {
              if (lib.filter.targetEnabled2(card, player, i)) {
                left3 = true;
                eff_left += get.effect(i, card, player, player);
              }
            }
          }
          if (target == right2) {
            for (const i of right) {
              if (lib.filter.targetEnabled2(card, player, i)) {
                right3 = true;
                eff_right += get.effect(i, card, player, player);
              }
            }
          }
          if (left3 && right3) {
            if (!bool) return Math.max(eff_left, eff_right);
            if (eff_left > Math.max(0, eff_right)) return '↖顺时针';
            if (eff_right > Math.max(0, eff_left)) return '逆时针↗';
            return 'cancel2';
          } else if (left3) {
            if (bool) return eff_left > 0 ? '↖顺时针' : 'cancel2';
            return eff_left;
          } else if (right3) {
            if (bool) return eff_right > 0 ? '逆时针↗' : 'cancel2';
            return eff_right;
          } else return bool ? 'cancel2' : 0;
        },
        async content(event, trigger, player) {
          let choices = [];
          const target = trigger.target;
          const left = [],
            right = [];
          let left2 = player.previous,
            right2 = player.next;
          while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
            left.push(left2);
            right.push(right2);
            left2 = left2.previous;
            right2 = right2.next;
          }
          if (target == left2) {
            for (const i of left) {
              if (lib.filter.targetEnabled2(trigger.card, player, i)) {
                choices.push('↖顺时针');
                break;
              }
            }
          }
          if (target == right2) {
            for (const i of right) {
              if (lib.filter.targetEnabled2(trigger.card, player, i)) {
                choices.push('逆时针↗');
                break;
              }
            }
          }
          choices.push('cancel2');
          const result = await player
            .chooseControl(choices)
            .set('prompt', get.prompt('ivxt'))
            .set('prompt2', '令自己和' + get.translation(trigger.target) + '某个方向之间的所有角色均成为' + get.translation(trigger.card) + '的目标')
            .set('choices', choices)
            .set('ai', function () {
              let evt = _status.event.getTrigger();
              return lib.skill.ivxt.aiJudge(evt.card, evt.player, evt.target, true);
            })
            .forResult();
          if (result.control === 'cancel2') return;
          let targets = [];
          if (result.control == '↖顺时针') {
            let current = player.previous;
            while (current != trigger.target) {
              if (lib.filter.targetEnabled2(trigger.card, player, current)) targets.push(current);
              current = current.previous;
            }
          } else {
            let current = player.next;
            while (current != trigger.target) {
              if (lib.filter.targetEnabled2(trigger.card, player, current)) targets.push(current);
              current = current.next;
            }
          }
          event.targets = targets;
          if (event.isMine() || event.isOnline()) {
            event.finish();
          }
          trigger.targets.addArray(targets);
        },
        ai: {
          effect: {
            player_use(card, player, target) {
              if (!target || player._ivxt_judging || ui.selected.targets.length || player == target || target.hasSkill('nodis')) return;
              if (typeof card != 'object' || (card.name != 'sha' && get.type(card) != 'trick')) return false;
              player._ivxt_judging = true;
              let effect = lib.skill.ivxt.aiJudge(card, player, target);
              delete player._ivxt_judging;
              if (effect > 0) return [1, effect / Math.max(0.01, get.attitude(player, player))];
            },
          },
        },
      },
      jmhff: {
        audio: 'ext:恒梦/audio/ximffwxt:9',
        trigger: {
          player: 'jmhf_3After',
        },
        forced: true,
        filter(event, player) {
          return game.hasPlayer((current) => current.isDamaged() && player.canUse('sha', current, false) && get.distance(player, current, 'attack') <= 1);
        },
        async content(event, trigger, player) {
          const result = await player
            .chooseToUse(function (card, player, event) {
              if (card.name != 'sha') return false;
              return lib.filter.filterCard.apply(this, arguments);
            }, '对范围内的残血使用一张杀')
            .set('targetRequired', true)
            .set('complexSelect', true)
            .set('filterTarget', function (card, player, target) {
              if (!player.canUse('sha', target, false)) return false;
              if (target.isHealthy()) return false;
              if (get.distance(player, target, 'attack') > 1) return false;
              return lib.filter.targetEnabled.apply(this, arguments);
            })
            .set('addCount', false)
            .set('ai', (target) => {
              return get.effect(
                target,
                {
                  name: 'sha',
                },
                _status.event.player
              );
            })
            .forResult();
          if (!result.bool) return;
          player.removeMark('charge');
          const target = result.targets[0];
        },
      },
      jmhf: {
        trigger: {
          player: 'useCardToPlayered',
        },
        lastDo: true,
        forced: true,
        silent: true,
        filter(event, player) {
          return event.target !== player;
        },
        content() {
          trigger.target.addMark('jmhf');
        },
        marktext: '剑意',
        intro: {
          name: '剑意',
          content: '当前剑意:# / 4',
        },
        group: ['jmhf_2', 'jmhf_3', 'jmhff', 'jmhf_5'],
        subSkill: {
          2: {
            audio: 'jmhff',
            trigger: {
              source: 'damageSource',
            },
            forced: true,
            content() {
              trigger.player.addMark('jmhf');
            },
          },
          3: {
            trigger: {
              global: 'loseAfter',
            },
            filter(event, player) {
              return event.player.countMark('jmhf') >= 4;
            },
            forced: true,
            async content(event, trigger, player) {
              trigger.player.removeMark('jmhf', 4);
              player.draw(2);
              player.addMark('charge', 2);
            },
          },
          5: {
            audio: 'jmhff',
            trigger: {
              player: 'damageEnd',
            },
            filter(event, player) {
              return event.source != undefined && event.num > 0;
            },
            forced: true,
            content() {
              trigger.source.addMark('jmhf');
            },
            ai: {
              maixie_defend: true,
              expose: 0.4,
            },
          },
        },
      },
      lohx: {
        audio: 'ext:恒梦/audio/ximffwxt:9',
        chargeSkill: true,
        changeSeat: true,
        seatRelated: true,
        logTarget: 'target',
        init(player) {
          if (!player.hasMark('charge')) player.addMark('charge', 2);
        },
        prompt2: (event) => '与' + get.translation(event.target) + '换位',
        trigger: {
          player: 'useCardToPlayered',
        },
        filter(event, player) {
          if (event.card.name != 'sha' && get.type(event.card) != 'trick' && event.card.name == 'wuzhong') return false;
          if (event.target !== player.previous && event.target !== player.next) return false;
          return player.countMark('charge');
        },
        content() {
          const target = trigger.target;
          game.broadcastAll(
            function (p, t) {
              game.swapSeat(p, t);
            },
            player,
            target
          );
          target.addMark('jmhf');
          player.removeMark('charge', 1);
        },
      },
      fwxm: {
        mod: {
          cardname(card) {
            if (lib.skill.fwxm.isFwxm(card)) return 'sha';
          },
          cardnature(card) {
            if (lib.skill.fwxm.isFwxm(card)) return false;
          },
          suit(card) {
            if (lib.skill.fwxm.isFwxm(card)) return 'none';
          },
          targetInRange(card) {
            if (get.color(card) == 'none') return true;
          },
          cardUsable(card) {
            if (get.color(card) == 'none') return Infinity;
          },
        },
        isFwxm(card) {
          const info = lib.card[card.name];
          if (!info || (info.type != 'trick' && info.type != 'delay')) return false;
          if (info.notarget) return false;
          if (info.selectTarget != undefined) {
            if (Array.isArray(info.selectTarget)) {
              if (info.selectTarget[0] < 0) return !info.toself;
              return info.selectTarget[0] != 1 || info.selectTarget[1] != 1;
            } else {
              if (info.selectTarget < 0) return !info.toself;
              return info.selectTarget != 1;
            }
          }
          return false;
        },
      },
      bdfauhui: {
        audio: 'ext:恒梦/audio/bdfamonv:2',
        trigger: {
          player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
          global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
        },
        forced: true,
        filter(event, player) {
          const list = [],
            cards = player.getExpansions('uufa_mark');
          for (const i of cards) {
            const type = get.type2(i);
            if (!list.includes(type)) {
              list.add(type);
            }
          }
          if (event.getl && !event.getl(player) && !event.getl(player).hs.length) return false;
          return player.countCards('h') < list.length;
        },
        content() {
          const list = [],
            cards = player.getExpansions('uufa_mark');
          for (const i of cards) {
            const type = get.type2(i);
            if (!list.includes(type)) {
              list.add(type);
            }
          }
          player.draw(list.length - player.countCards('h'));
        },
        ai: {
          noh: true,
          skillTagFilter(player, tag) {
            const list = [],
              cards = player.getExpansions('uufa_mark');
            for (const i of cards) {
              const type = get.type2(i);
              if (!list.includes(type)) {
                list.add(type);
              }
            }
            if (tag == 'noh' && list.length < player.countCards('h')) {
              return false;
            }
          },
          effect: {
            player(card, player, target, current) {
              const list = [],
                cards = player.getExpansions('uufa_mark');
              for (const i of cards) {
                const type = get.type2(i);
                if (!list.includes(type)) {
                  list.add(type);
                }
              }
              if (player.countCards('h') > list.length) return;
              return [1, 1];
            },
          },
        },
      },
      uufa: {
        audio: 'ext:恒梦/audio/bdfamonv:4',
        trigger: {
          global: 'useCardAfter',
        },
        zhuanhuanji: true,
        ai: {
          effect: {
            player_use(card, player, target) {
              if (player.storage.uufa) {
                if (target !== player) return [1, 3];
              } else {
                if (target === player) return [1.2, 2.5];
              }
              return;
            },
          },
        },
        filter(event, player) {
          if (player.storage.uufa) {
            if (event.player !== player) return false;
            if (!event.targets) return false;
            for (const i of game.players) {
              if (i === player) continue;
              if (event.targets.includes(i)) return true;
            }
            return false;
          } else {
            const cards = player.getExpansions('uufa_mark');
            if (!cards.length) {
              return false;
            }
            return event.targets && event.targets.includes(player);
          }
        },
        mark: true,
        async cost(event, trigger, player) {
          if (player.storage.uufa) {
            event.result = await player
              .chooseCard('h', true, [Math.floor(player.countCards('h') / 2), Infinity], '束发:选择至少一半的牌置于武将牌上,称为<发>')
              .set('ai', (card) => {
                const player = get.event().player,
                  value = player.getUseValue(card, true),
                  name = card.name;
                if ((name == 'tao' && player.isDamaged()) || name == 'jiu' || name == 'wuzhong' || name == 'wugu' || name == 'zengbin' || name == 'gz_guguoanbang' || name == 'gz_wenheluanwu' || name == 'gz_kefuzhongyuan' || name == 'yiyi' || name == 'kaihua' || name == 'zhulu_card' || name == 'dongzhuxianji' || name == 'guaguliaodu' || name == 'diaobingqianjiang' || name == 'shezhanqunru' || get.type(card) === 'equip') {
                  if (
                    player.getCards('h').filter((i) => {
                      return (i.name == 'tao' && player.isDamaged()) || i.name == 'jiu' || i.name == 'wuzhong' || i.name == 'wugu' || i.name == 'zengbin' || i.name == 'gz_guguoanbang' || i.name == 'gz_wenheluanwu' || i.name == 'gz_kefuzhongyuan' || i.name == 'yiyi' || i.name == 'kaihua' || i.name == 'zhulu_card' || i.name == 'dongzhuxianji' || i.name == 'guaguliaodu' || i.name == 'diaobingqianjiang' || i.name == 'shezhanqunru' || get.type(i) === 'equip';
                    }).length -
                    ui.selected.cards.filter((i) => {
                      return (i.name == 'tao' && player.isDamaged()) || i.name == 'jiu' || i.name == 'wuzhong' || i.name == 'wugu' || i.name == 'zengbin' || i.name == 'gz_guguoanbang' || i.name == 'gz_wenheluanwu' || i.name == 'gz_kefuzhongyuan' || i.name == 'yiyi' || i.name == 'kaihua' || i.name == 'zhulu_card' || i.name == 'dongzhuxianji' || i.name == 'guaguliaodu' || i.name == 'diaobingqianjiang' || i.name == 'shezhanqunru' || get.type(i) === 'equip';
                    }).length <=
                    1
                  )
                    return 0;
                  return 2 - value;
                }
                if (value > 0 && get.type(card) == 'trick') {
                  return 10 + value;
                }
                return 25 - value - get.value(card) - get.useful(card);
              })
              .forResult();
          } else {
            const cards = player.getExpansions('uufa_mark'),
              num = Math.floor(cards.length / 2);
            const { bool, links } = await player
              .chooseButton(['###散发###<div class="text center">请移去至少' + get.cnNumber(num) + '张<束发>牌</div>', cards], [num, Infinity], true)
              .set('ai', (button) => {
                const player = get.event('player'),
                  value = player.getUseValue(button.link, true),
                  m = player.getExpansions('uufa_mark'),
                  n = [];
                let va = 0;
                for (const i of m) {
                  n.push(get.type2(i));
                }
                if (
                  n.filter((i) => {
                    return i === get.type2(button.link);
                  }).length <= 1
                ) {
                  va = 10;
                }
                if (value > 0) {
                  if (
                    !ui.selected.buttons.some((but) => {
                      return player.getUseValue(but.link, true) > 0;
                    })
                  )
                    return 8 + value - va;
                  return -40;
                }
                return Math.max(-40, -value - get.value(button.link));
              })
              .forResult();
            event.result = {
              bool: bool,
              cost_data: links,
            };
          }
        },
        mod: {
          cardUsable(card, player) {
            if (card.storage && card.storage.uufa) return Infinity;
          },
          aiOrder(player, card, num) {
            const name = card.name;
            if (player.storage.uufa) {
              if (get.type(card) === 'equip') return Math.max(1, num - 9);
              if (name == 'tao' || name == 'jiu' || name == 'wuzhong' || name == 'wugu' || name == 'zengbin' || name == 'gz_guguoanbang' || name == 'gz_wenheluanwu' || name == 'gz_kefuzhongyuan' || name == 'yiyi' || name == 'kaihua' || name == 'zhulu_card' || name == 'dongzhuxianji' || name == 'guaguliaodu' || name == 'diaobingqianjiang' || name == 'shezhanqunru') return Math.max(1, num - 10);
              else {
                if (get.tag(card, 'multitarget')) return num + 18;
                return num + 20;
              }
            } else {
              if (name == 'tao' || name == 'jiu' || name == 'wuzhong' || name == 'wugu' || name == 'zengbin' || name == 'gz_guguoanbang' || name == 'gz_wenheluanwu' || name == 'gz_kefuzhongyuan' || name == 'yiyi' || name == 'kaihua' || name == 'zhulu_card' || name == 'dongzhuxianji' || name == 'guaguliaodu' || name == 'diaobingqianjiang' || name == 'shezhanqunru' || get.info(card, false).toself) return Math.max(10, num + 18);
              if (get.type(card) == 'equip') return Math.max(10, num + 20);
            }
            return num;
          },
        },
        init(player) {
          if (!player.storage.uufa) player.storage.uufa = true;
        },
        async content(event, trigger, player) {
          player.changeZhuanhuanji('uufa');
          if (player.storage.uufa === false) {
            await player.addToExpansion(event.cards, player, 'give').set('gaintag', ['uufa_mark']);
          } else {
            const cardx = event.cost_data;
            await player.loseToDiscardpile(cardx);
            if (
              cardx.some(
                (card) =>
                  ['trick', 'basic', 'equip'].includes(get.type2(card)) &&
                  player.hasCard(
                    (cardxx) =>
                      player.hasUseTarget(
                        get.autoViewAs(
                          {
                            name: card.name,
                          },
                          [cardxx]
                        ),
                        true
                      ),
                    'hes'
                  )
              )
            ) {
              let result2;
              if (cardx.length === 1) {
                result2 = {
                  bool: true,
                  links: cardx,
                };
              } else {
                result2 = await player
                  .chooseButton(['###散发###<div class="text center">是否将一张牌当作一张移去的<散发>牌使用？</div>', cardx])
                  .set('filterButton', (button) => {
                    const player = get.event('player'),
                      card = button.link;
                    return player.hasCard(
                      (cardx) =>
                        player.hasUseTarget(
                          get.autoViewAs(
                            {
                              name: card.name,
                            },
                            [cardx]
                          ),
                          false
                        ),
                      'hes'
                    );
                  })
                  .set('ai', (button) => {
                    const player = get.event('player'),
                      card = button.link;
                    return player.getUseValue(
                      {
                        name: card.name,
                      },
                      true
                    );
                  })
                  .forResult();
              }
              if (result2.bool) {
                const card = result2.links[0];
                if (get.type2(card) !== 'equip') {
                  game.broadcastAll(function (card) {
                    lib.skill.uufa_backupx.viewAs = {
                      name: card.name,
                      nature: card.nature,
                      storage: {
                        uufa: true,
                      },
                    };
                  }, card);
                  await player
                    .chooseToUse(false)
                    .set('openskilldialog', '###散发###将一张牌当作【' + get.translation(card.name) + '】使用')
                    .set('norestore', true)
                    .set('addCount', false)
                    .set('_backupevent', 'uufa_backupx')
                    .set('custom', {
                      add: {},
                      replace: {
                        window() { },
                      },
                    })
                    .backup('uufa_backupx');
                } else {
                  const name = card.name;
                  const result3 = await player
                    .chooseCard('h', true, 1, '###散发###将一张牌当作【' + get.translation(card.name) + '】使用')
                    .set('norestore', true)
                    .set('addCount', false)
                    .set('ai', (card) => {
                      const player = get.event().player;
                      value = player.getUseValue(card, true);
                      return 15 - get.value(card) - get.useful(card);
                    })
                    .forResult();
                  if (result3.bool) {
                    const nam = result3.cards[0].name;
                    game.broadcastAll(
                      function (name, nam, player) {
                        const info1 = lib.card[name];
                        if (info1) {
                          let info = {
                            enable: true,
                            type: 'equip',
                            subtype: get.subtype(name),
                            cardimage: nam,
                            filterTarget(card, player, target) {
                              return target == player;
                            },
                            compound: true,
                            selectTarget: -1,
                            modTarget: true,
                            toself: true,
                            content: lib.element.content.equipCard,
                            legend: true,
                            source: [nam, name],
                            onEquip: [],
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
                          if (typeof info1.distance === 'object' && info1.distance !== null) Object.assign(info.distance, info1.distance);
                          if (info1.skills) {
                            info.skills = info.skills.concat(info1.skills);
                          }
                          if (info1.onEquip) {
                            if (Array.isArray(info1.onEquip)) {
                              info.onEquip = info.onEquip.concat(info1.onEquip);
                            } else {
                              info.onEquip.push(info1.onEquip);
                            }
                          }
                          if (info.onEquip.length == 0) delete info.onEquip;
                          let newName = 'xin_' + get.id() + '_' + name;
                          let changename = get.translation(nam).slice(0, 2) + '·' + get.translation(name).slice(0, 2);
                          lib.card[newName] = info;
                          lib.translate[newName] = changename;
                          lib.translate[newName + '_info'] = get.translation(name, 'info');
                          try {
                            game.addVideo('newcard', null, {
                              name: name,
                              translate: lib.translate[newName],
                              info: lib.translate[newName + '_info'],
                              legend: true,
                            });
                          } catch (e) {
                            console.log(e);
                          }
                          let cardy = result3.cards[0].init({
                            name: newName,
                            suit: result3.cards[0].suit,
                            number: result3.cards[0].number,
                          });
                          if (lib.config.background_audio) {
                            game.playAudio('../audio/card', player.sex, name);
                          }
                          game.addVideo('equip', player, get.cardInfo(cardy));
                          player.useCard(cardy, player);
                        }
                      },
                      name,
                      nam,
                      player
                    );
                  }
                }
              }
            }
          }
        },
        mark: true,
        marktext: '☯',
        intro: {
          content(storage) {
            if (storage) return '【转】【锁】当你使用对其他角色使用一张牌后,你将至少一半的牌置于你的武将牌上,称为<发>';
            return '【转】【锁】当你成为一张牌的目标后,你弃置至少一半的<发>,并将一张牌当其中一张牌使用';
          },
        },
        group: 'uufa_mark',
        subSkill: {
          mark: {
            intro: {
              content: 'expansion',
              markcount: 'expansion',
            },
            onremove(player, skill) {
              const cards = player.getExpansions(skill);
              if (cards.length) player.loseToDiscardpile(cards);
            },
          },
          backupx: {
            filterCard(card) {
              return get.itemtype(card) == 'card';
            },
            position: 'hes',
            check(card) {
              const player = get.event('player');
              if (!player.hasValueTarget(card, true, true)) return 0;
              return 3 - player.getUseValue(card);
            },
            log: false,
          },
        },
      },
      mcifu: {
        init(player) {
          if (!player.storage.mcifu) player.storage.mcifu = 0;
          if (!player.storage.loci) player.storage.loci = [];
          if (!player.storage.muljhx) player.storage.muljhx = [];
          if (!player.storage.wulkiy) player.storage.wulkiy = [];
          if (!player.storage.rumglk) player.storage.rumglk = [];
          if (!player.storage.jtju) player.storage.jtju = [];
          if (!player.storage.nmnujn) player.storage.nmnujn = [];
          if (!player.storage.ugugmj) player.storage.ugugmj = [];
          if (!player.storage.hrxiua) player.storage.hrxiua = [];
          if (!player.storage.dplmhx) player.storage.dplmhx = [];
          if (!player.storage.vegutm) player.storage.vegutm = [];
        },
        mark: true,
        marktext: '词',
        intro: {
          content(storage, player, skill) {
            let str = '词赋:' + storage;
            if (player.storage.muljhx) str += '<br><li>木兰花:' + get.translation(player.storage.muljhx);
            if (player.storage.wulkiy) str += '<br><li>武陵春:' + get.translation(player.storage.wulkiy);
            if (player.storage.rumglk) str += '<br><li>如梦令:' + get.translation(player.storage.rumglk);
            if (player.storage.jtju) str += '<br><li>绝句:' + get.translation(player.storage.jtju);
            if (player.storage.nmnujn) str += '<br><li>念奴娇:' + get.translation(player.storage.nmnujn);
            if (player.storage.ugugmj) str += '<br><li>声声慢:' + get.translation(player.storage.ugugmj);
            if (player.storage.hrxiua) str += '<br><li>浣溪沙:' + get.translation(player.storage.hrxiua);
            if (player.storage.dplmhx) str += '<br><li>蝶恋花:' + get.translation(player.storage.dplmhx);
            if (player.storage.vegutm) str += '<br><li>鹧鸪天:' + get.translation(player.storage.vegutm);
            return str;
          },
        },
        enable: 'phaseUse',
        audio: 'ext:恒梦/audio/yian:2',
        delay: false,
        usable: 1,
        filter(event, player) {
          let numx = player.getHistory('useSkill', (evt) => {
            return evt.skill == 'mcifu';
          }).length;
          return numx < 4;
        },
        mod: {
          aiOrder(player, card, num) {
            if (!player.getStat('skill').mcifu && _status.currentPhase === player) return;
            if (typeof card == 'object' && !get.tag(card, 'norepeat')) {
              const history = player.getAllHistory('useCard');
              if (history.length) {
                const cardx = history[history.length - 1].card;
                if (get.is.yayun(get.translation(cardx.name), get.translation(card.name))) return num + 15;
              }
            }
          },
        },
        async content(event, trigger, player) {
          let muljhxx = player.storage.muljhx,
            wulkiyx = player.storage.wulkiy,
            rumglkx = player.storage.rumglk,
            jtjux = player.storage.jtju,
            nmnujnx = player.storage.nmnujn,
            ugugmjx = player.storage.ugugmj,
            hrxiuax = player.storage.hrxiua,
            dplmhxx = player.storage.dplmhx,
            vegutmx = player.storage.vegutm;
          let listx = [...muljhxx, ...wulkiyx, ...rumglkx, ...jtjux, ...nmnujnx, ...ugugmjx, ...hrxiuax, ...dplmhxx, ...vegutmx];
          let numc = '123456789';
          const map = Array.prototype.map;
          let list = map.call(numc, function (i) {
            return `y${i}`;
          });
          let numd = [],
            nume = 10;
          while (nume < 19) {
            numd.push(`y${nume}`);
            nume++;
          }
          list.push(...numd);
          list.yiiu(...listx);
          game.log(list);
          list = list.randomGets(3).sort();
          if (!list.length) return;
          let prompt = event.prompt || '选择一张词赋牌';
          list.forEach((i) => {
            i = ['', '', i];
          });
          let dialog = ui.create.dialog('<span style="font-size:25pxfont-family:HYZLSJcolor: #f1d977weight:boldertop:-10px">词赋</span><img src=extension/恒梦/image/ui/arrow.png style=width:30pxheight:25pxmargin-bottom:-5pxleft:2px/>', '<span style="font-family: yuanlicolor: #F5D78E">' + prompt + '</span>', [list, 'vcard']);
          dialog.style.width = '1000px';
          dialog.style.height = '500px';
          dialog.style.top = '-10px';
          dialog.style.left = '0px';
          dialog.classList.add('scroll1', 'scroll2', 'fullwidth', 'fullheight', 'noupdate');
          game.broadcastAll(
            function (list, dialog) {
              for (const i of list) {
                const dd = dialog.querySelector('[data-card-name="' + i + '"]');
                dd.setBackgroundImage('extension/恒梦/image/ui/' + i + '.jpg');
                dd.style.backgroundSize = '100% 100%';
                dd.style.width = '100px';
                dd.style.height = '350px';
                dd.style.top = '10px';
              }
            },
            list,
            dialog
          );
          const links = await player
            .chooseButton(1, dialog, true)
            .set('ai', (button) => {
              const player = _status.event.player;
              let a = 0,
                b = 0;
              if (player.hasCard((card) => get.is.yayun(get.translation(card.name), get.translation(button.link[2])) && player.hasUseTarget(card), 'h')) {
                a += 1;
              }
              let muljhxai = player.storage.muljhx,
                wulkiyai = player.storage.wulkiy,
                rumglkai = player.storage.rumglk,
                jtjuai = player.storage.jtju,
                nmnujnai = player.storage.nmnujn,
                ugugmjai = player.storage.ugugmj,
                hrxiuaai = player.storage.hrxiua,
                dplmhxai = player.storage.dplmhx,
                vegutmai = player.storage.vegutm;
              let listai = [muljhxai, wulkiyai, rumglkai, jtjuai, nmnujnai, ugugmjai, hrxiuaai, dplmhxai, vegutmai].filter((i) => {
                return i.length;
              });
              if (listai.length) {
                for (const i of listai) {
                  if (i.includes(button.link[2])) {
                    b = 0.5;
                  }
                }
              }
              return a + b;
            })
            .forResultLinks();
          const y = links[0][2];
          game.log(y);
          const num = Math.ceil(parseInt(y.slice(1)) / 2);
          let card = get.cardPile2((card) => {
            return get.is.yayun(get.translation(card.name), get.translation(y));
          });
          if (card) player.gain(card, 'gain2');
          player.storage.hemk = num;
          let yy = {
            y1: 'muljhx',
            y3: 'wulkiy',
            y5: 'rumglk',
            y7: 'jtju',
            y9: 'nmnujn',
            y11: 'ugugmj',
            y13: 'hrxiua',
            y15: 'dplmhx',
            y17: 'vegutm',
          };
          const l = Object.keys(yy),
            llen = l.length;
          for (let i = 0; i < llen; i++) {
            yy['y' + String(2 * (i + 1))] = yy['y' + String(2 * (i + 1) - 1)];
          }
          player.storage[yy[y]].push(y);
        },
        group: 'mcifu_refresh',
        subSkill: {
          refresh: {
            trigger: {
              player: 'useCardAfter',
            },
            forced: true,
            firstDo: true,
            filter(event, player) {
              let history = player.getAllHistory('useCard'),
                index = history.indexOf(event);
              if (index < 1) return false;
              let evt = history[index - 1];
              return get.is.yayun(get.translation(event.card.name), get.translation(evt.card.name));
            },
            content() {
              let stat = player.getStat('skill');
              delete stat.mcifu;
              player.draw();
            },
          },
          clear: {
            trigger: {
              player: 'phaseEnd',
            },
            forced: true,
            silent: true,
            content() {
              player.storage.mcifu = 0;
              player.storage.muljhx = [];
              player.storage.wulkiy = [];
              player.storage.rumglk = [];
              player.storage.jtju = [];
              player.storage.nmnujn = [];
              player.storage.ugugmj = [];
              player.storage.hrxiua = [];
              player.storage.dplmhx = [];
              player.storage.vegutm = [];
            },
          },
        },
        ai: {
          order(item, player) {
            let muljhxx = player.storage.muljhx.slice(),
              wulkiyx = player.storage.wulkiy.slice(),
              rumglkx = player.storage.rumglk.slice(),
              jtjux = player.storage.jtju.slice(),
              nmnujnx = player.storage.nmnujn.slice(),
              ugugmjx = player.storage.ugugmj.slice(),
              hrxiuax = player.storage.hrxiua.slice(),
              dplmhxx = player.storage.dplmhx.slice(),
              vegutmx = player.storage.vegutm.slice();
            let listx = [...muljhxx, ...wulkiyx, ...rumglkx, ...jtjux, ...nmnujnx, ...ugugmjx, ...hrxiuax, ...dplmhxx, ...vegutmx];
            let list = ['y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7', 'y8', 'y9', 'y10', 'y11', 'y12', 'y13', 'y14', 'y15', 'y16', 'y17', 'y18'];
            list.yiiu(...listx);
            for (const i of list) {
              if (player.hasCard((card) => get.is.yayun(get.translation(card.name), get.translation(i)) && player.hasUseTarget(card), 'h')) return 16;
            }
            return 12;
          },
          result: {
            player(player) {
              return 1;
            },
          },
        },
      },
      qsyk: {
        derivation: ['vryy', 'loci'],
        trigger: {
          player: 'mcifuAfter',
        },
        forced: true,
        filter(event, player) {
          let numx = player.getHistory('useSkill', (evt) => {
            return evt.skill == 'mcifu';
          }).length;
          return numx % 2 == 0;
        },
        content() {
          let numx = player.getHistory('useSkill', (evt) => {
            return evt.skill == 'mcifu';
          }).length;
          switch (numx) {
            case 2:
              player.addTempSkill('vryy');
              break;
            case 4:
              player.addTempSkill('loci');
              break;
          }
        },
      },
      hemk: {
        init(player) {
          if (!player.storage._hemk) player.storage._hemk = [];
        },
        trigger: {
          player: 'mcifuAfter',
        },
        filter(event, player) {
          if (player.storage.muljhx.length >= 2 && !player.storage.loci.includes('yiana')) return true;
          if (player.storage.wulkiy.length >= 2 && !player.storage.loci.includes('yianb')) return true;
          if (player.storage.rumglk.length >= 2 && !player.storage.loci.includes('yianc')) return true;
          if (player.storage.jtju.length >= 2 && !player.storage.loci.includes('yiand')) return true;
          if (player.storage.nmnujn.length >= 2 && !player.storage.loci.includes('yiane')) return true;
          if (player.storage.ugugmj.length >= 2 && !player.storage.loci.includes('yianf')) return true;
          if (player.storage.hrxiua.length >= 2 && !player.storage.loci.includes('yiang')) return true;
          if (player.storage.dplmhx.length >= 2 && !player.storage.loci.includes('yianh')) return true;
          if (player.storage.vegutm.length >= 2 && !player.storage.loci.includes('yiani')) return true;
          return false;
        },
        async cost(event, trigger, player) {
          let list = ['caopi', 'fanyufeng', 're_fengfangnv', 'wangcan', 'dc_zhouxuān', 'yanfuren', 'liuyong', 're_zhangjiao', 'qinlang', 'yinfuren', 'zhangxuan', 'zhugeshang', 'jianggan', 'ruanyu', 'liwan', 'shen_zhaoyun', 'xuelingyun', 'zhujianping'];
          let characters;
          switch (player.storage.hemk) {
            case 1:
              characters = list.slice(0, 2);
              player.storage.loci.push('yiana');
              break;
            case 2:
              characters = list.slice(2, 4);
              player.storage.loci.push('yianb');
              break;
            case 3:
              characters = list.slice(4, 6);
              player.storage.loci.push('yianc');
              break;
            case 4:
              characters = list.slice(6, 8);
              player.storage.loci.push('yiand');
              break;
            case 5:
              characters = list.slice(8, 10);
              player.storage.loci.push('yiane');
              break;
            case 6:
              characters = list.slice(10, 12);
              player.storage.loci.push('yianf');
              break;
            case 7:
              characters = list.slice(12, 14);
              player.storage.loci.push('yiang');
              break;
            case 8:
              characters = list.slice(14, 16);
              player.storage.loci.push('yianh');
              break;
            case 9:
              characters = list.slice(16);
              player.storage.loci.push('yiani');
              break;
          }
          const result = await player
            .chooseButton(true)
            .set('ai', function (button) {
              return Math.random();
            })
            .set('createDialog', ['和鸣:选择一名和鸣角色', [characters, 'character']])
            .forResult();
          event.result = {
            bool: result.bool,
            cost_data: result.bool ? result.links[0] : [],
          };
        },
        async content(event, trigger, player) {
          const result1 = await player
            .chooseTarget(true, '令一名角色获得技能')
            .set('ai', function (target) {
              return get.attitude(_status.event.player, target);
            })
            .forResult();
          if (result1.bool) {
            player.storage._hemk.push(event.cost_data);
            let target = result1.targets[0];
            let listx = [];
            if (!lib.character[event.cost_data]) {
              player.draw(2);
            } else {
              listx.addArray(lib.character[event.cost_data][3]);
              for (let i of listx) {
                target.addTempSkill(i);
              }
              let skillx = listx.randomGet();
            }
          }
        },
      },
      vryy: {
        trigger: {
          player: ['logSkill', 'useSkillAfter'],
        },
        forced: true,
        filter(event, player) {
          if (event.type != 'player') return false;
          let skill = event.sourceSkill || event.skill;
          if (get.is.locked(skill)) return false;
          let info = get.info(skill);
          return !info.charlotte;
        },
        content() {
          player.addTempSkill('vryy_effect');
        },
        subSkill: {
          effect: {
            mod: {
              cardUsable: () => Infinity,
              targetInRange: () => true,
            },
            trigger: {
              player: 'useCard1',
            },
            forced: true,
            charlotte: true,
            popup: false,
            firstDo: true,
            content() {
              if (trigger.addCount !== false) {
                trigger.addCount = false;
                player.getStat().card[trigger.card.name]--;
              }
              player.removeSkill('vryy_effect');
            },
            mark: true,
            intro: {
              content: '使用下一张牌无距离和次数限制',
            },
          },
        },
      },
      yianbegin: {
        forced: true,
        _priority: 999,
        trigger: {
          global: 'gameStart',
        },
        content() {
          game.broadcastAll(function () {
            playVideo('易安.mp4', 200000);
          });
        },
      },
      loci: {
        ai: {
          order: 11,
          result: {
            player: 1,
          },
        },
        init(player) {
          if (!player.storage._loci) player.storage._loci = [];
        },
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return player.storage.loci.length > player.storage._loci.length;
        },
        audio: 'ext:恒梦/audio/yian:2',
        delay: false,
        async content(event, trigger, player) {
          let list = player.storage.loci.slice();
          list.removeArray(player.storage._loci);
          let prompt = event.prompt || '选择一张词牌名';
          if (!event.prompt) {
            prompt += ',选择是否词赋';
          }
          for (let i of list) i = ['', '', i];
          let dialog = ui.create.dialog('<span style="font-size:25pxfont-family:HYZLSJcolor: #f1d977weight:boldertop:-10px">词赋</span><img src=extension/恒梦/image/ui/arrow.png style=width:30pxheight:25pxmargin-bottom:-5pxleft:2px/>', '<span style="font-family: yuanlicolor: #F5D78E">' + prompt + '</span>', [list, 'vcard']);
          dialog.style.width = '1000px';
          dialog.style.height = '500px';
          dialog.style.top = '-10px';
          dialog.style.left = '0px';
          dialog.classList.add('scroll1', 'scroll2', 'fullwidth', 'fullheight', 'noupdate');
          game.broadcastAll(
            function (list, dialog) {
              for (const i of list) {
                const dd = dialog.querySelector('[data-card-name="' + i + '"]');
                dd.setBackgroundImage('extension/恒梦/image/ui/' + i + '.jpg');
                dd.style.backgroundSize = '100% 100%';
                dd.style.width = '100px';
                dd.style.height = '350px';
                dd.style.top = '10px';
              }
            },
            list,
            dialog
          );
          const links = await player
            .chooseButton(1, dialog, true)
            .set('ai', function (button) {
              return Math.random();
            })
            .forResultLinks();
          let listz;
          switch (links[0][2]) {
            case 'yiana':
              listz = ['y1', 'y2'];
              break;
            case 'yianb':
              listz = ['y3', 'y4'];
              break;
            case 'yianc':
              listz = ['y5', 'y6'];
              break;
            case 'yiand':
              listz = ['y7', 'y8'];
              break;
            case 'yiane':
              listz = ['y9', 'y10'];
              break;
            case 'yianf':
              listz = ['y11', 'y12'];
              break;
            case 'yiang':
              listz = ['y13', 'y14'];
              break;
            case 'yianh':
              listz = ['y15', 'y16'];
              break;
            case 'yiani':
              listz = ['y17', 'y18'];
              break;
          }
          event.control = links[0][2];
          let muljhxx = player.storage.muljhx,
            wulkiyx = player.storage.wulkiy,
            rumglkx = player.storage.rumglk,
            jtjux = player.storage.jtju,
            nmnujnx = player.storage.nmnujn,
            ugugmjx = player.storage.ugugmj,
            hrxiuax = player.storage.hrxiua,
            dplmhxx = player.storage.dplmhx,
            vegutmx = player.storage.vegutm;
          let listx = [...muljhxx, ...wulkiyx, ...rumglkx, ...jtjux, ...nmnujnx, ...ugugmjx, ...hrxiuax, ...dplmhxx, ...vegutmx];
          let listy = ['y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7', 'y8', 'y9', 'y10', 'y11', 'y12', 'y13', 'y14', 'y15', 'y16', 'y17', 'y18'];
          listx.yiiu(...listz);
          listy.yiiu(...listx);
          let length = listy.length,
            index,
            temp;
          for (let point = length - 1; point >= 0; point--) {
            index = Math.floor(Math.random() * point);
            temp = listy[index];
            listy[index] = listy[point];
            listy[point] = temp;
          }
          let promptm = event.prompt || '选择一张词赋牌';
          for (let i of listy) i = ['', '', i];
          let dialogm = ui.create.dialog('<span style="font-size:25pxfont-family:HYZLSJcolor: #f1d977weight:boldertop:-10px">词赋</span><img src=extension/恒梦/image/ui/arrow.png style=width:30pxheight:25pxmargin-bottom:-5pxleft:2px/>', '<span style="font-family: yuanlicolor: #F5D78E">' + promptm + '</span>', [listy, 'vcard']);
          dialogm.style.width = '1000px';
          dialogm.style.height = '500px';
          dialogm.style.top = '-10px';
          dialogm.style.left = '0px';
          dialogm.classList.add('scroll1');
          dialogm.classList.add('scroll2');
          dialogm.classList.add('fullwidth');
          dialogm.classList.add('fullheight');
          dialogm.classList.add('noupdate');
          dialogm.style.overflow = 'hidden';
          game.broadcastAll(
            function (listy, dialogm) {
              for (const i of listy) {
                const dd = dialogm.querySelector('[data-card-name="' + i + '"]');
                dd.setBackgroundImage('extension/恒梦/image/ui/' + i + '.jpg');
                dd.style.backgroundSize = '100% 100%';
                dd.style.width = '100px';
                dd.style.height = '350px';
                dd.style.top = '10px';
              }
            },
            listy,
            dialogm
          );
          const links2 = await player
            .chooseButton(2, dialogm, true)
            .set('ai', function (button) {
              return listz.includes(button.link[2]);
            })
            .forResultLinks();
          let a = 0,
            b = 0,
            c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            ebool = false;
          for (let i of links2) {
            if (i[2] == 'y1' || i[2] == 'y2') {
              a++;
            } else if (i[2] == 'y3' || i[2] == 'y4') {
              b++;
            } else if (i[2] == 'y5' || i[2] == 'y6') {
              c++;
            } else if (i[2] == 'y7' || i[2] == 'y8') {
              d++;
            } else if (i[2] == 'y9' || i[2] == 'y10') {
              e++;
            } else if (i[2] == 'y11' || i[2] == 'y12') {
              f++;
            } else if (i[2] == 'y13' || i[2] == 'y14') {
              g++;
            } else if (i[2] == 'y15' || i[2] == 'y16') {
              h++;
            } else if (i[2] == 'y17' || i[2] == 'y18') {
              i++;
            }
          }
          switch (event.control) {
            case 'yiana':
              if (a >= 2) ebool = true;
              break;
            case 'yianb':
              if (b >= 2) ebool = true;
              break;
            case 'yianc':
              if (c >= 2) ebool = true;
              break;
            case 'yiand':
              if (d >= 2) ebool = true;
              break;
            case 'yiane':
              if (e >= 2) ebool = true;
              break;
            case 'yianf':
              if (f >= 2) ebool = true;
              break;
            case 'yiang':
              if (g >= 2) ebool = true;
              break;
            case 'yianh':
              if (h >= 2) ebool = true;
              break;
            case 'yiani':
              if (i >= 2) ebool = true;
              break;
          }
          if (!ebool) {
            player.popup('杯具');
            game.log(player, '作词失败');
            return;
          }
          let listm = ['caopi', 'fanyufeng', 're_fengfangnv', 'wangcan', 'dc_zhouxuān', 'yanfuren', 'liuyong', 're_zhangjiao', 'qinlang', 'yinfuren', 'zhangxuan', 'zhugeshang', 'jianggan', 'ruanyu', 'liwan', 'shen_zhaoyun', 'xuelingyun', 'zhujianping'];
          player.storage._loci.push(event.control);
          let ch;
          switch (event.control) {
            case 'yiana':
              ch = listm.slice(0, 2);
              break;
            case 'yianb':
              ch = listm.slice(2, 4);
              break;
            case 'yianc':
              ch = listm.slice(4, 6);
              break;
            case 'yiand':
              ch = listm.slice(6, 8);
              break;
            case 'yiane':
              ch = listm.slice(8, 10);
              break;
            case 'yianf':
              ch = listm.slice(10, 12);
              break;
            case 'yiang':
              ch = listm.slice(12, 14);
              break;
            case 'yianh':
              ch = listm.slice(14, 16);
              break;
            case 'yiani':
              ch = listm.slice(16);
              break;
          }
          ch.yiiu(player.storage._hemk);
          const links3 = await player
            .chooseButton(3, ch, true)
            .set('ai', function (button) {
              return Math.random();
            })
            .set('createDialog', ['和鸣:选择一名和鸣角色', [ch, 'character']])
            .forResultLinks();
          event.wujl = links3[0];
          const result = await player
            .chooseTarget(true, '令一名角色获得技能')
            .set('ai', function (target) {
              return get.attitude(_status.event.player, target);
            })
            .forResult();
          if (!result.bool) return;
          let target = result.targets[0];
          let lista = [];
          if (!lib.character[event.wujl]) {
            player.draw(2);
          } else {
            lista.addArray(lib.character[event.wujl][3]);
            for (const i of lista) {
              target.addTempSkill(i, {
                player: 'phaseAfter',
              });
            }
            const skillx = lista.randomGet();
          }
        },
      },
      yujm: {
        audio: 'ext:恒梦/audio/xnlsnv:10',
        enable: 'phaseUse',
        filter(event, player) {
          if (!player.countCards('hs')) return false;
          for (const name of lib.inpile) {
            if (get.type(name) != 'trick') continue;
            if (player.getStorage('yujm_used').includes(name)) continue;
            if (
              event.filterCard(
                {
                  name: name,
                },
                player,
                event
              )
            )
              return true;
          }
          return false;
        },
        chooseButton: {
          dialog(event, player) {
            const list = [];
            for (const name of lib.inpile) {
              if (player.getStorage('yujm_used').includes(name)) continue;
              const info = get.info({
                name: name,
              });
              if (!info || info.type != 'trick') continue;
              if (info.notarget) continue;
              if (!info.selectTarget) continue;
              if (
                get.type(name) == 'trick' &&
                event.filterCard(
                  {
                    name: name,
                  },
                  player,
                  event
                )
              )
                list.push(['锦囊', '', name]);
            }
            const dialog = ui.create.dialog('御剑', [list, 'vcard']);
            return dialog;
          },
          filter(button, player) {
            return _status.event.parent.filterCard(
              {
                name: button.link[2],
                nature: button.link[3],
              },
              player,
              _status.event.parent
            );
          },
          check(button) {
            if (_status.event.parent.type != 'phase') return 1;
            const player = _status.event.player;
            if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
            return player.getUseValue({
              name: button.link[2],
              nature: button.link[3],
            });
          },
          backup(links, player) {
            return {
              audio: 'yujm',
              filterCard(card, player) {
                const num = game.countPlayer((current) => {
                  return player.canUse(card, current);
                });
                if (!num) return false;
                const cardx = get.copy(lib.skill.yujm_backup.viewAs);
                cardx.cards = [card];
                const num2 = game.countPlayer((current) => {
                  return player.canUse(cardx, current);
                });
                return num == num2;
              },
              popname: true,
              check(card) {
                return 8 - get.value(card);
              },
              position: 'hs',
              viewAs: {
                name: links[0][2],
              },
              precontent() {
                player.addTempSkill('jsrgjixiang_add');
                if (typeof player.storage.jsrgjixiang_add != 'number') player.storage.jsrgjixiang_add = 0;
                player.storage.jsrgjixiang_add--;
                player.addTempSkill('yujm_used');
                player.markAuto('yujm_used', [event.result.card.name]);
              },
            };
          },
          prompt(links, player) {
            return '将一张合法目标数与' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '相同的手牌当此牌使用';
          },
        },
        ai: {
          order: 7,
          result: {
            player(player) {
              if (_status.event.dying) return get.attitude(player, _status.event.dying);
              return 1;
            },
          },
        },
        subSkill: {
          used: {
            charlotte: true,
            mark: true,
            intro: {
              content: '已使用过$',
            },
          },
        },
      },
      lmvu: {
        audio: 'ext:恒梦/audio/xnlsnv:4',
        trigger: {
          global: 'dieAfter',
        },
        forced: true,
        filter(event, player) {
          return player.getStat('kill') > 0 || event.source === player;
        },
        content() {
          trigger.player.reinit(trigger.player.name, 'hxvijm', false);
          lib.skill.hxjm.caidan(trigger.player);
          player.phase('nodelay');
        },
      },
      hxjm: {
        forced: true,
        trigger: {
          player: 'useCardToTargeted',
        },
        firstDo: true,
        filter(event, player) {
          if (get.tag(event.card, 'damage')) {
            if (!event.target.hasSkill('hxjm_jm')) return false;
            const type = get.type2(event.card, false);
            return type == 'basic' || type == 'trick';
          } else if (event.target.hasSkill('hxjm_jm')) return false;
          return player !== event.target;
        },
        init(player) {
          if (!player.storage.yihxjm) player.storage.yihxjm = [];
          player.storage.Thiscard = null;
        },
        content() {
          player.storage.Thiscard = trigger.card.name;
          if (get.tag(trigger.card, 'damage')) {
            const evt = trigger.parent;
            evt.targets.yiiu(trigger.target);
            if (get.type(trigger.card) != 'delay')
              list = game.filterPlayer(function (c) {
                return !player.storage.yihxjm.includes(c) && lib.filter.targetEnabled2(trigger.card, trigger.player, c);
              });
            else
              list = game.filterPlayer(function (current) {
                return !player.storage.yihxjm.includes(c) && current.canAddJudge(trigger.card);
              });
            if (list.length) trigger.targets.push(list.randomGet());
            trigger.target.line(trigger.targets, 'fire');
            game.log(trigger.card, '的目标被改为', trigger.targets);
          } else {
            trigger.target.addTempSkill('hxjm_jm');
            player.storage.yihxjm.push(trigger.target);
          }
        },
        group: 'hxjm_clear',
        mod: {
          selectTarget(card, player, range) {
            if (get.info(card).toself) return;
            range[0] = 1;
            range[1] = Infinity;
          },
        },
        audio: 'ext:恒梦/audio/xnlsnv:12',
        caidan(player) {
          let list = ['花昔', '碎樱', '细翎', '银月'],
            nums = [0, 1, 2, 3];
          nums = nums.randomGets(player.name2 ? 2 : 1);
          nums.sort((a, b) => a - b);
          for (let i = 0, m = nums.length; i < m; i++) {
            let num = nums[i];
            game.log(player, '化作了', '#g' + list[num], '之剑');
            game.broadcastAll(
              function (player, i, list, num) {
                player.node[i == 0 ? 'avatar' : 'avatar2'].setBackgroundImage('extension/恒梦/image/hxjm/' + list[num] + '.jpg');
                player.node[i == 0 ? 'name' : 'name2'].innerHTML = list[num];
              },
              player,
              i,
              list,
              num
            );
          }
        },
        ai: {
          effect: {
            player_use(card, player, target) {
              if (player === target) return;
              if (lib.card[card.name]) {
                const trandom = game.filterPlayer((p) => {
                  return !player.storage.yihxjm.includes(p) && lib.filter.targetEnabled2(card, player, p);
                }),
                  gp = game.players;
                let tars = [target],
                  alleff = 0,
                  allatt = 0;
                if (ui.selected.targets.length) tars.addArray(ui.selected.targets.filter((i) => i !== player && i !== target));
                for (let i = 0; i < tars.length; i++) {
                  if (!tars[i] || !gp.includes(tars[i])) continue;
                  if (!player.storage.yihxjm.includes(tars[i])) alleff += get.effect(tars[i], card, player, player);
                  else alleff += trandom.length ? get.effect(trandom.randomGet(), card, player, player) : 0;
                  game.log(tars[i]);
                }
                if (get.tag(card, 'damage')) {
                  game.log(alleff);
                  return alleff;
                }
                if (
                  tars.filter((i) => {
                    return !player.storage.yihxjm.includes(i) && i !== player;
                  }).length >= trandom.length
                )
                  return -10;
                const sec = trandom.slice().removeArray(tars);
                for (const i of sec) {
                  allatt += get.attitude(player, i);
                }
                const endeff = ((10 - sec.length) * (-allatt / sec.length)) / (10 - gp.length);
                if (
                  player.hasCard((card) => {
                    return get.tag(card, 'damage');
                  })
                ) {
                  return [1, endeff, 1, 1];
                }
                return [1, 0, 1, 0.1];
              } //QQQ
            },
          },
        },
        subSkill: {
          clear: {
            trigger: {
              global: 'phaseEnd',
            },
            filter(event, player) {
              return player.storage.yihxjm;
            },
            charlotte: true,
            silent: true,
            async content(event, trigger, player) {
              player.storage.yihxjm = [];
            },
          },
          jm: {
            charlotte: true,
            init(player) {
              lib.skill.hxjm.caidan(player);
            },
            onremove(player) {
              if (player.name1) {
                game.broadcastAll(function (player) {
                  player.node.avatar.setBackground(player.name1, 'character');
                  player.node.name.innerHTML = get.slimName(player.name1);
                }, player);
              }
              if (player.name2) {
                game.broadcastAll(function (player) {
                  player.node.avatar2.setBackground(player.name2, 'character');
                  player.node.name2.innerHTML = get.slimName(player.name2);
                }, player);
              }
            },
          },
        },
      },
      dyui: {
        mod: {
          globalTo(from, to, distance) {
            return distance + Math.min(5, to.getDamagedHp());
          },
        },
        group: ['dyuix', 'dyuiy'],
        audio: 'ext:恒梦/audio/ljtkxu:2',
        trigger: {
          global: 'roundStart',
          player: ['dyui_0After', 'dyui_1After', 'dyui_2After', 'dyui_3After', 'dyui_4After'],
        },
        forced: true,
        logTarget() {
          return game.players;
        },
        async content(event, trigger, player) {
          player.$fullscreenpop('遁世', 'thunder');
          let i = -1;
          while (i++ < 5) {
            player.removeSkill('dyui_' + i);
          }
          let list = ['　仁:回复翻倍　', '　义:伤害翻倍　', '　礼:摸牌翻倍　', '　智:技能重置　', '　信:濒死免疫　'],
            listx = [];
          listx.push(...list);
          if (player.storage.dyui_round) {
            listx.removeArray(player.storage.dyui_round);
          }
          for (const i in list) {
            list[i] = [i, list[i]];
          }
          if (listx.length === 0) return;
          const links = await player
            .chooseButton(['遁世:请选择一项', [list, 'textbutton']])
            .set('forced', true)
            .set('selectButton', 1)
            .set('filterButton', function (button, player, storage) {
              if (player.storage.dyui_round) {
                if (player.storage.dyui_round.indexOf(button.link) !== -1) return false;
              }
              return true;
            })
            .forResultLinks();
          if (!links || !links.length) return;
          player.addTempSkill('dyui_round', 'roundStart');
          player.storage.dyui_round.push(links[0]);
          let map = [
            function (trigger, player, event) {
              player.addSkill('dyui_0');
              player.storage.dyui = 5;
              player.storage.dyui_round.push('　仁:回复翻倍　');
            },
            function (trigger, player, event) {
              player.addSkill('dyui_1');
              player.storage.dyui = 1;
              player.storage.dyui_round.push('　义:伤害翻倍　');
            },
            function (trigger, player, event) {
              player.addSkill('dyui_2');
              player.storage.dyui = 2;
              player.storage.dyui_round.push('　礼:摸牌翻倍　');
            },
            function (trigger, player, event) {
              player.addSkill('dyui_3');
              player.storage.dyui = 3;
              player.storage.dyui_round.push('　智:技能重置　');
            },
            function (trigger, player, event) {
              player.addSkill('dyui_4');
              player.storage.dyui = 4;
              player.storage.dyui_round.push('　信:濒死免疫　');
            },
          ];

          for (let i of links) {
            game.log(player, '选择了', '#g【遁世】', '的', '#y选项' + get.cnNumber(i + 1, true));
            map[i](trigger, player, event);
          }
        },
        subSkill: {
          0: {
            title: '回复翻倍',
            mark: true,
            marktext: '遁',
            trigger: {
              global: 'recoverBegin',
            },
            logTarget(event, player) {
              return event.player;
            },
            filter(event, player) {
              return !event.numFixed;
            },
            ai: {
              expose: 0.2,
            },
            check(event, player) {
              return get.attitude(player, event.player) > 0;
            },
            content() {
              player.line(trigger.player, 'green');
              trigger.num *= 2;
            },
            intro: {
              content(storage, player) {
                return '回复翻倍';
              },
            },
          },
          1: {
            title: '伤害翻倍',
            logTarget: 'source',
            usable: 1,
            mark: true,
            marktext: '遁',
            trigger: {
              global: 'damageBegin1',
            },
            filter(event, player) {
              return !event.numFixed;
            },
            ai: {
              expose: 0.2,
            },
            check(event, player) {
              return get.attitude(player, event.player) > 0;
            },
            content() {
              player.line(trigger.player, 'green');
              trigger.num *= 2;
            },
            intro: {
              content(storage, player) {
                return '伤害翻倍';
              },
            },
          },
          2: {
            ai: {
              expose: 0.2,
            },
            title: '摸牌翻倍',
            logTarget(event, player) {
              return event.player;
            },
            usable: 1,
            mark: true,
            marktext: '遁',
            trigger: {
              global: 'drawBegin',
            },
            check(event, player) {
              return get.attitude(player, event.player) > 0;
            },
            filter(event, player) {
              let evt = event.getParent('phaseDraw');
              if (evt && event.player == evt.player) return false;
              return !event.numFixed;
            },
            content() {
              player.line(trigger.player, 'green');
              trigger.num *= 2;
            },
            intro: {
              content(storage, player) {
                return '摸牌翻倍';
              },
            },
          },
          3: {
            title: '技能次数重置',
            logTarget(event, player) {
              return event.player;
            },
            mark: true,
            marktext: '遁',
            usable: 1,
            trigger: {
              global: ['useSkillAfter', 'logSkill'],
            },
            ai: {
              expose: 0.2,
            },
            check(event, player) {
              return get.attitude(player, event.player) > 0;
            },
            filter(event, player) {
              if (['global', 'equip'].includes(event.type)) return false;
              let skill = event.sourceSkill || event.skill;
              let info = get.info(skill);
              while (true) {
                if (!info || info.charlotte || info.equipSkill) return false;
                if (info && !info.sourceSkill) break;
                skill = info.sourceSkill;
                info = get.info(skill);
              }
              if (!info || !info.enable) return false;
              if (info.enable != 'phaseUse' && info.enable != 'chooseToUse' && (!Array.isArray(info.enable) || (!info.enable.includes('phaseUse') && !info.enable.includes('chooseToUse')))) return false;
              return true;
            },
            content() {
              let skill = trigger.sourceSkill || trigger.skill;
              const suffixs = ['used', 'round', 'block', 'blocker'];
              let info = get.info(skill);
              while (true) {
                if (!info || info.charlotte || info.equipSkill) return false;
                if (info && !info.sourceSkill) break;
                skill = info.sourceSkill;
                info = get.info(skill);
              }
              if (typeof info.usable == 'number') {
                if (trigger.trigger.player.getStat('triggerSkill')[skill] && trigger.player.getStat('triggerSkill')[skill] >= 1) {
                  delete trigger.player.getStat('triggerSkill')[skill];
                }
                if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
                  delete trigger.player.getStat('skill')[skill];
                }
              }
              if (info.round && trigger.player.storage[skill + '_roundcount']) {
                delete trigger.player.storage[skill + '_roundcount'];
              }
              if (trigger.player.storage[`temp_ban_${skill}`]) {
                delete trigger.player.storage[`temp_ban_${skill}`];
              }
              if (trigger.player.awakenedSkills.includes(skill)) {
                trigger.player.restoreSkill(skill);
              }
              for (const suffix of suffixs) {
                if (trigger.player.hasSkill(skill + '_' + suffix)) {
                  trigger.player.removeSkill(skill + '_' + suffix);
                }
              }
              const str = '【' + get.translation(skill) + '】';
              game.log(trigger.player, '重置了技能', '#g' + str);
            },
            intro: {
              content(storage, player) {
                return '技能次数重置';
              },
            },
            ai: {
              expose: 0.2,
            },
            check(event, player) {
              return get.attitude(player, event.player) > 0;
            },
          },
          4: {
            usable: 1,
            logTarget(event, player) {
              return event.player;
            },
            mark: true,
            marktext: '遁',
            trigger: {
              global: 'damageBegin4',
            },
            check(event, player) {
              return get.attitude(player, event.player) > 0;
            },
            filter(event, player) {
              return event.num >= event.player.hp;
            },
            content() {
              player.line(trigger.player, 'green');
              trigger.cancel();
            },
            intro: {
              content(storage, player) {
                return '免死';
              },
            },
            ai: {
              expose: 0.2,
            },
          },
          round: {
            charlotte: true,
            init(player) {
              if (!player.storage.dyui_round) player.storage.dyui_round = [];
            },
            onremove(player) {
              delete player.storage.dyui_round;
            },
          },
        },
      },
      dyuix: {
        audio: 'tnyb',
        trigger: {
          player: ['dyui_0After', 'dyui_1After', 'dyui_2After', 'dyui_3After', 'dyui_4After'],
        },
        firstDo: true,
        forced: true,
        logTarget: 'player',
        async content(event, trigger, player) {
          let cards = [];
          game.getGlobalHistory('cardMove', (evt) => {
            if ((evt.name == 'lose' && evt.position == ui.discardPile) || evt.name == 'cardsDiscard') {
              cards.addArray(evt.cards.filterInD('d'));
            }
          });
          let cardx = cards.filter(function (item) {
            if (player.storage.dyuiy && player.storage.dyuiy.includes(item.name)) return false;
            return ['basic', 'trick'].includes(get.type(item));
          });
          if (!cardx.length) return;
          const links = await player
            .chooseButton(['遁世:选择牌置入装备区', cards], true, 1)
            .set('filterButton', function (button, player, storage) {
              if (player.storage.dyuiy && player.storage.dyuiy.includes(button.link.name)) return false;
              return ['basic', 'trick'].includes(get.type(button.link));
            })
            .set('ai', (button) => {
              return get.buttonValue(button);
            }) //QQQ
            .forResultLinks();
          if (!links || !links.length) return;
          player.setAvatar('grnk', 'grnka');
          setTimeout(function () {
            player.setAvatar('grnk', 'grnk');
          }, 1700);
          player.storage.dyuiy.push(links[0].name);
          let name = 'dyui_' + player.storage.dyui,
            nam = links[0].name;
          game.broadcastAll(
            function (name, nam) {
              let info1 = lib.card[name];
              if (info1) {
                let info = {
                  enable: true,
                  type: 'equip',
                  subtype: get.subtype(name),
                  cardimage: nam,
                  filterTarget(card, player, target) {
                    return target == player;
                  },
                  compound: true,
                  selectTarget: -1,
                  modTarget: true,
                  toself: true,
                  content: lib.element.content.equipCard,
                  legend: true,
                  source: [nam, name],
                  onEquip: [],
                  onLose: [
                    function () {
                      const player = game.findPlayer((current) => current.hasSkill('dyuix'));
                      if (player) {
                        player.storage.dyuiy.yiiu(lib.card[card.name].source[0]);
                        player.maxHp += 1;
                        player.update();
                      }
                    },
                  ],

                  skills: [],
                  distance: {},
                  ai: {
                    order: 8.9,
                    equipValue: 5,
                    useful: 2.5,
                    value: 5,
                    result: {
                      target(player, target) {
                        return get.equipResult(player, target, name);
                      },
                    },
                  },
                };
                if (typeof info1.distance === 'object' && info1.distance !== null) Object.assign(info.distance, info1.distance);
                if (info.onEquip.length == 0) delete info.onEquip;
                if (info.onLose.length == 0) delete info.onLose;
                let newName = 'hmCreateCard_' + nam;
                let changename = get.translation(nam).slice(0, 2) + '·' + get.translation(name).slice(0, 4);
                lib.card[newName] = info;
                lib.translate[newName] = changename;
                lib.translate[newName + '_info'] = get.translation(name, 'info');
                try {
                  game.addVideo('newcard', null, {
                    name: name,
                    translate: lib.translate[newName],
                    info: lib.translate[newName + '_info'],
                    legend: true,
                  });
                } catch (e) {
                  console.log(e);
                }
              }
            },
            name,
            nam
          );
          let card = links[0].init({
            name: 'hmCreateCard_' + nam,
            suit: links[0].suit,
            number: links[0].number,
          });
          if (lib.config.background_audio) {
            game.playAudio('../audio/card', player.sex, name);
          }
          game.addVideo('equip', player, get.cardInfo(card));
          let storagex = player.storage.dyuiy.length;
          game.broadcastAll(
            function (player, storagex) {
              player.maxHp -= 1;
              player.update();
            },
            player,
            storagex
          );
          let chatx = ['宁宿野陌与虫歌', '不枕高楼听商女', '愿提春风绘天下', '奈何天下无春风'].randomGet();
          player.chat(chatx);
          player.useCard(card, player);
        },
      },
      dyuiy: {
        init(player) {
          if (!player.storage.dyuiy) player.storage.dyuiy = [];
        },
        audio: 2,
        hiddenCard(player, name) {
          let list = player.storage.dyuiy.slice(0);
          list.removeArray(player.getStorage('dyuiy_round'));
          return list.includes(name);
        },
        enable: ['chooseToUse', 'chooseToRespond'],
        filter(event, player) {
          let storage = player.storage.dyuiy.slice(0);
          storage.removeArray(player.getStorage('dyuiy_round'));
          if (!storage.length) return false;
          for (let i of storage) {
            let card = {
              name: i,
            };
            if (event.filterCard && event.filterCard(card, player, event)) return true;
          }
          return false;
        },
        chooseButton: {
          dialog(event, player) {
            let list = player.storage.dyuiy.slice(0);
            list.removeArray(player.getStorage('dyuiy_round'));
            let list2 = [];
            for (let i of list) {
              let type = get.type2(i, false);
              if (
                (type == 'basic' || type == 'trick') &&
                event.filterCard(
                  {
                    name: i,
                  },
                  player,
                  event
                )
              )
                list2.push([type, '', i]);
            }
            return ui.create.dialog('遁世', [list2, 'vcard']);
          },
          check(button) {
            if (_status.event.parent.type != 'phase') return 1;
            return _status.event.player.getUseValue(
              {
                name: button.link[2],
              },
              null,
              true
            );
          },
          backup(links, player) {
            return {
              audio: 'dyui',
              filterCard() {
                return false;
              },
              popname: true,
              viewAs: {
                name: links[0][2],
              },
              selectCard: -1,
              precontent() {
                player.addTempSkill('dyuiy_round');
                player.markAuto('dyuiy_round', [event.result.card.name]);
              },
            };
          },
          prompt(links, player) {
            return '选择【' + get.translation(links[0][2]) + '】的目标';
          },
        },
        ai: {
          respondSha: true,
          respondShan: true,
          skillTagFilter(player, tag, arg) {
            let storage = player.storage.dyuiy;
            if (!storage) return false;
            switch (tag) {
              case 'respondSha':
                return (_status.event.type != 'phase' || player == game.me || player.isUnderControl() || player.isOnline()) && storage.includes('sha');
              case 'respondShan':
                return storage.includes('shan');
              case 'save':
                if (arg == player && storage.includes('jiu')) return true;
                return storage.includes('tao');
            }
          },
          order: 2,
          result: {
            player(player) {
              if (_status.event.type == 'dying') {
                return get.attitude(player, _status.event.dying);
              }
              return 1;
            },
          },
        },
        subSkill: {
          backup: {
            audio: 'dyuiy',
          },
          round: {
            charlotte: true,
          },
        },
      },
      mgqmxy: {
        audio: 'ext:恒梦/audio/rulu:2',
        trigger: {
          target: 'useCardToBefore',
          player: 'judgeBefore',
        },
        filter(event, player) {
          if (event.parent.name == 'phaseJudge') {
            return true;
          }
          if (event.card && ['basic', 'trick'].includes(get.type(event.card))) return true;
        },
        content() {
          player.storage.mgqmxy = get.translation(trigger.card.name).length;
          player.storage.mglmyk = player.getCards('h').length;
          const cards = player.getCards('h');
          if (player.countCards('h')) {
            player.addToExpansion(cards, 'giveAuto', player).gaintag.add('mgqmxy2');
            player.addSkill('mgqmxy2');
          }
        },
        ai: {
          effect(card, player, target) {
            if (!target.hasFriend()) return;
            if (player == target) return;
            const type = get.type(card);
            const nh = target.countCards();
            if (type == 'trick') {
              if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
                if (get.tag(card, 'damage')) {
                  if (nh < 3 || target.hp <= 2) return 0.8;
                }
                return [1, nh];
              }
            } else if (type == 'delay') {
              return [0.5, 0.5];
            }
          },
        },
      },
      mgqmxy2: {
        trigger: {
          global: 'phaseBegin',
          source: 'damageSource',
        },
        forced: true,
        audio: 'ext:恒梦/audio/rulu:2',
        content() {
          const cards = player.getExpansions('mgqmxy2');
          if (cards.length) player.gain(cards, 'draw');
          player.removeSkill('mgqmxy2');
        },
        intro: {
          mark(dialog, storage, player) {
            const cards = player.getExpansions('mgqmxy2');
            if (player.isUnderControl(true)) dialog.addAuto(cards);
            else return '共有' + get.cnNumber(cards.length) + '张牌';
          },
          markcount: 'expansion',
        },
      },
      doui: {
        audio: 'ext:恒梦/audio/cards:2',
        trigger: {
          player: 'damage',
        },
        filter(event, player) {
          return player.hasSkill('mgqmxy2');
        },
        async content(event, trigger, player) {
          let numx = trigger.card && trigger.card.name && get.translation(trigger.card.name) ? get.translation(trigger.card.name).length : 1;
          const cards = player.getExpansions('mgqmxy2'),
            cardy = cards.filter(function (i) {
              return player.hasUseTarget(i);
            });
          game.cardsGotoOrdering(cards);
          player.showCards(cards, get.translation(player) + '发动了【度势】');
          if (cards.length) {
            while (numx >= 1) {
              const links = await player
                .chooseButton(['是否使用其中一张牌？还能使用' + numx + '张', cards])
                .set('filterButton', function (button) {
                  return player.hasUseTarget(button.link);
                })
                .set('ai', function (button) {
                  let card = button.link;
                  if (card.name == 'wuzhong' || card.name == 'shunshou' || card.name == 'wugu' || card.name == 'yiyi') return 30;
                  else {
                    return player.getUseValue(card);
                  }
                })
                .forResultLinks();
              if (!links || !links.length) break;
              player.chooseUseTarget(true, links[0], false);
              cards.yiiu(links[0]);
              numx--;
            }
          } //QQQ
          game.broadcastAll(
            function (player, cards) {
              player.gain(cards, 'gain2');
            },
            player,
            cards
          );
        },
      },
      mglmyk: {
        audio: 'ext:恒梦/audio/rulu:2',
        trigger: {
          player: ['loseAfter', 'mgqmxyAfter'],
          global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'respondAfter', 'chooseToCompareAfter'],
        },
        forced: true,
        filter(event, player) {
          if (event.name === 'lose' && event.parent.name === 'useCard') {
            const { targets, card } = event.getParent('useCard');
            if (['basic', 'trick'].includes(get.type(card))) {
              if (targets.includes(player)) return false;
            }
          }
          if (event.name === 'respond' && event.card !== 'wuxie') return false;
          if (player.countCards('h')) return false;
          if (event.name === 'mgqmxy') return true;
          const evt = event.getl(player);
          return evt && evt.hs && evt.hs.length && event.getParent(2) !== 'mglmyk';
        },
        async content(event, trigger, player) {
          if (player.storage.mgqmxy) {
            event.num = player.storage.mgqmxy;
            await player.chooseToGuanxing(event.num);
          }
          player.storage.mgqmxy = 0;
          if (player.storage.mglmyk <= 1) {
            player.draw();
            event.finish();
          } else {
            const result = await player
              .chooseTarget(get.prompt('mglmyk'), '令至多' + get.cnNumber(player.storage.mglmyk) + '名角色各摸一张牌', [1, player.storage.mglmyk], true)
              .set('ai', function (target) {
                let player = _status.event.player;
                if (player == target) return get.attitude(player, target) + 10;
                return get.attitude(player, target);
              })
              .forResult();
            if (result.targets.length) {
              game.asyncDraw(result.targets);
            }
          }
          player.storage.mglmyk = 1;
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
      buis: {
        trigger: {
          player: 'useCardToPlayer',
        },
        filter(event, player) {
          if (player.countCards('h') > 1) return false;
          event.targets.forEach((i) => {
            return i == player;
          });
          return true;
        },
        content() {
          lib.skill.mgqmxy.content();
        },
      },
      mgpnpk: {
        audio: 'ext:恒梦/audio/fupk:2',
        trigger: {
          player: 'useCard',
        },
        forced: true,
        zhuanhuanji: true,
        content() {
          player.changeZhuanhuanji('mgpnpk');
          let num = player.getHistory('useSkill', (evt) => evt.skill === 'mgpnpk').length;
          if (num <= 0) return;
          if (player.storage.mgpnpk) {
            player.draw(num);
          } else if (player.hasCard((card) => lib.filter.cardDiscardable(card, player, 'mgpnpk'), 'he')) {
            player.chooseToDiscard(true, 'he', num).set('ai', (card) => {
              let m = card.hasGaintag('mglqvr_tag') ? 0.5 : 0;
              if (['wuzhong', 'shunshou', 'yiyi'].includes(card.name)) {
                return 0 + m;
              } else if (card.name === 'zhuge' && get.position(card) === 'e') {
                return 2;
              } else if (card.name === 'zhuge' && get.position(card) === 'h') {
                return player.countCards('e', (i) => i.name === 'zhuge') ? 10 + m : 2 + m;
              } else if (card.name === 'sha' && player.countCards('e', (i) => i.name === 'zhuge')) {
                return 0 + m;
              } else if (['delay', 'trick'].includes(get.type(card))) {
                return 4 + m;
              } else if (['shan', 'wuxie'].includes(card.name)) {
                return 15 + m;
              } else {
                return 12 - player.getUseValue(card) + m;
              }
            });
          }
        },
        mark: true,
        marktext: '☯',
        intro: {
          content(storage) {
            if (storage) return '【转】【锁】当你使用一张牌时,你弃置X张牌.(X为你本阶段内发动过〖漂萍〗的次数且至多等于你的体力值)';
            return '【转】【锁】当你使用一张牌时,你摸X张牌.(X为你本阶段内发动过〖漂萍〗的次数且至多等于你的体力值)';
          },
        },
      },
      mgvubi: {
        audio: 'ext:恒梦/audio/fupk:2',
        trigger: {
          global: ['loseAfter', 'loseAsyncAfter'],
        },
        _priority: Infinity,
        filter(event, player) {
          if (event.type != 'discard' || event.getlx === false) return false;
          for (let i of event.cards) {
            if (i.suit == 'diamond') return true;
          }
          return false;
        },
        prompt2: '检索一张【无中生有】并置于牌堆顶',
        check(event, player) {
          if (!_status.currentPhase) return false;
          return get.attitude(player, _status.currentPhase.next) > 0;
        },
        content() {
          let card = get.cardPile(function (card) {
            return card.name == 'wuzhong' && card.suit != 'diamond';
          });
          if (card) {
            game.log(player, '将', card, '置于牌堆顶');
            card.fix();
            ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
            game.updateRoundNumber();
          }
        },
      },
      mglqvr: {
        audio: 'ext:恒梦/audio/fupk:2',
        group: ['mglqvr_mark', 'mglqvr_gain'],
        subSkill: {
          gain: {
            trigger: {
              player: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
            },
            forced: true,
            logTarget: () => _status.currentPhase,
            filter(event, player) {
              let current = _status.currentPhase;
              if (!current) return false;
              if (event.name == 'cardsDiscard') {
                let evtx = event.parent;
                if (evtx.name != 'orderingDiscard') return false;
                let evtx2 = evtx.relatedEvent || evtx.parent;
                return current.hasHistory('lose', function (evtx3) {
                  let evtx4 = evtx3.relatedEvent || evtx3.parent;
                  if (evtx2 != evtx4) return false;
                  for (let i in evtx3.gaintag_map) {
                    if (evtx3.gaintag_map[i].includes('mglqvr_tag')) return true;
                  }
                });
                return false;
              } else if (event.name == 'lose') {
                if (event.player != current || event.position != ui.discardPile) return false;
                for (let i in event.gaintag_map) {
                  if (event.gaintag_map[i].includes('mglqvr_tag')) return true;
                }
                return false;
              }
              return current.hasHistory('lose', function (evt) {
                if (evt.parent != event || evt.position != ui.discardPile) return false;
                for (let i in evt.gaintag_map) {
                  if (evt.gaintag_map[i].includes('mglqvr_tag')) return true;
                }
              });
            },
            content() {
              let cards,
                current = _status.currentPhase;
              if (trigger.name == 'lose')
                cards = trigger.hs.filter(function (i) {
                  return trigger.gaintag_map[i.cardid] && trigger.gaintag_map[i.cardid].includes('mglqvr_tag') && get.position(i, true) == 'd';
                });
              else if (trigger.name == 'cardsDiscard') {
                let evtx = trigger.parent;
                let evtx2 = evtx.relatedEvent || evtx.parent;
                let bool = false;
                let history = current.getHistory('lose', function (evtx3) {
                  let evtx4 = evtx3.relatedEvent || evtx3.parent;
                  if (evtx2 != evtx4) return false;
                  for (let i in evtx3.gaintag_map) {
                    if (evtx3.gaintag_map[i].includes('mglqvr_tag')) return true;
                  }
                });
                cards = trigger.cards.filter(function (i) {
                  for (let evt of history) {
                    if (evt.gaintag_map[i.cardid] && evt.gaintag_map[i.cardid].includes('mglqvr_tag') && get.position(i, true) == 'd') return true;
                  }
                  return false;
                });
              } else {
                cards = [];
                current.getHistory('lose', function (evt) {
                  if (evt.parent != trigger || evt.position != ui.discardPile) return false;
                  for (let card of evt.hs) {
                    if (get.position(card, true) != 'd') continue;
                    let i = card.cardid;
                    if (evt.gaintag_map[i] && evt.gaintag_map[i].includes('mglqvr_tag')) cards.push(card);
                  }
                });
              }
              if (cards && cards.length) player.addToExpansion(cards, 'gain2').gaintag.add('mgikli');
            },
          },
          mark: {
            trigger: {
              player: 'gainBegin',
            },
            forced: true,
            popup: false,
            silent: true,
            lastDo: true,
            filter(event, player) {
              let evt = event.getParent('phaseDraw');
              if (evt && evt.name == 'phaseDraw') return false;
              return true;
            },
            content() {
              trigger.gaintag.add('mglqvr_tag');
              trigger.player.addTempSkill('mglqvr_tag');
            },
          },
          tag: {
            charlotte: true,
            onremove: (player, skill) => player.removeGaintag(skill),
          },
        },
      },
      mgikli: {
        trigger: {
          player: 'phaseAfter',
        },
        forced: true,
        audio: 'ext:恒梦/audio/fupk:2',
        filter(event, player) {
          return (
            player.getHistory('useSkill', function (evt) {
              return evt.skill == 'mgpnpk';
            }).length > player.countCards('h')
          );
        },
        async content(event, trigger, player) {
          let cards = player.getExpansions('mgikli');
          const num = Math.min(
            player.getExpansions('mgikli').length,
            player.getHistory('useSkill', function (evt) {
              return evt.skill == 'mgpnpk';
            }).length - player.countCards('h')
          );
          let cards2 = player.getExpansions('mgikli');
          if (cards2.length) {
            const next = await player
              .chooseButton(['是否获得其中至多' + num + '张牌？', cards2], [1, num])
              .set('ai', function (button) {
                const player = _status.event.player,
                  card = button.link;
                const getn = function (card) {
                  return player.countCards('h', card.name) + ui.selected.buttons.filter((button) => button.link.name == card.name).length;
                };
                const val = player.getUseValue(card);
                if (card.name == 'tao' && getn(card) >= player.getDamagedHp()) return 0;
                if (card.name == 'sha' && getn(card) >= player.getCardUsable('sha')) return 0;
                if (card.name == 'wuzhong' || card.name == 'shunshou' || card.name == 'yiyi') return 30;
                return 10 + val;
              })
              .forResultLinks();
            if (!next || !next.length) return;
            await player.gain(next, 'gain2');
          }
          const cards3 = player.getExpansions('mgikli');
          player.loseToDiscardpile(cards3);
        },
        intro: {
          mark(dialog, storage, player) {
            let cards = player.getExpansions('mgikli');
            if (player.isUnderControl(true)) dialog.addAuto(cards);
            else return '共有' + get.cnNumber(cards.length) + '张牌';
          },
          markcount: 'expansion',
        },
      },
      vunk: {
        group: ['vunk_draw'],
        audio: 'ext:恒梦/audio/lqysyr:2',
        usable: 1,
        mod: {
          targetEnabled(card) {
            if (card.cards) {
              for (let i of card.cards) {
                if (i.hasGaintag('vunk')) return false;
              }
            } else if (get.itemtype(card) == 'card') {
              if (card.hasGaintag('vunk')) return false;
            }
          },
        },
        localMark(skill, player) {
          let name = skill,
            info;
          if (lib.skill[name]) info = lib.skill[name].intro;
          if (!info) return;
          if (player.marks[name]) player.marks[name].info = info;
          else player.marks[name] = player.mark(name, info);
        },
        enable: 'phaseUse',
        content() {
          'step 0';
          event.num = player.countCards('he');
          event.numx = event.num;
          ('step 1');
          player.chooseCardTarget({
            filterCard(card, player) {
              return get.itemtype(card) == 'card' && !card.hasGaintag('vunkm_tag');
            },
            position: 'he',
            filterTarget: lib.filter.notMe,
            selectCard: [1, event.num],
            prompt: '请选择要分配的卡牌和目标',
            ai1(card) {
              if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
              if (!ui.selected.cards.length && card.name == 'du') return 20;
              const player = get.owner(card);
              if (ui.selected.cards.length >= Math.max(1, player.countCards('h') - player.hp)) return 0;
              return 10 - get.value(card);
            },
            ai2(target) {
              let player = _status.event.player,
                card = ui.selected.cards[0];
              let val = target.getUseValue(card);
              if (val > 0) return val * get.attitude(player, target) * 2;
              return get.value(card, target) * get.attitude(player, target);
            },
          });
          ('step 2');
          if (result.bool) {
            let res = result.cards,
              target = result.targets[0];
            player.addGaintag(res, 'vunkm_tag');
            event.num -= res.length;
            if (!event.targetx) event.targetx = [];
            event.targetx.push(target);
            if (!event.given) event.given = [];
            event.given.push(res);
            if (event.num > 0) event.goto(1);
          } else event.finish(); //QQQ
          ('step 3');
          player.storage.fgxl = event.numx - event.num;
          for (let i = 0; i < event.given.length; i++) {
            player.give(event.given[i], event.targetx[i]).gaintag.add('vunk');
            player.line(event.targetx[i], 'green');
            if (!event.targetx[i].storage.vunk_block) event.targetx[i].storage.vunk_block = [];
            let skill = 'vunk_block';
            let func = lib.skill.vunk.localMark;
            if (event.player == game.me) func(skill, event.targetx[i]);
            else if (event.isOnline()) player.send(func, skill, event.targetx[i]);
            event.targetx[i].addSkill('vunk_block');
          }
          ('step 4');
          let list = [];
          for (let name of lib.inpile) {
            let type = get.type(name);
            if (type != 'basic' && type != 'trick') continue;
            if (player.getStorage('vunk_round').includes(name)) continue;
            let card = {
              name: name,
            };
            if (player.hasUseTarget(card)) {
              list.push([type, '', name]);
            }
            if (name == 'sha') {
              for (let i of lib.inpile_nature) {
                card.nature = i;
                if (player.hasUseTarget(card)) list.push([type, '', name, i]);
              }
            }
          }
          if (list.length) {
            player.chooseButton(['是否视为使用一张牌？', [list, 'vcard']]).set('ai', function (button) {
              return _status.event.player.getUseValue({
                name: button.link[2],
              });
            });
          } else event.finish();
          ('step 5');
          if (result.bool) {
            player.setAvatar('lqysyr', 'lqysyr');
            player.addTempSkill('vunk_round');
            player.markAuto('vunk_round', [result.links[0][2]]);
            player.chooseUseTarget(
              {
                name: result.links[0][2],
                nature: result.links[0][3],
              },
              true,
              false
            );
          } else event.finish();
        },
        ai: {
          fireAttack: true,
          order: 4,
          result: {
            target(player, target) {
              if (target.hasSkillTag('nogain')) return 0;
              if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                if (target.hasSkillTag('nodu')) return 0;
                return -10;
              }
              if (target.hasJudge('lebu')) return 0;
              let nh = target.countCards('h');
              let np = player.countCards('h');
              if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
                if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
              }
              return Math.max(1, 5 - nh);
            },
          },
        },
        getMax(event) {
          let max = 0,
            max2 = null,
            players = game.filterPlayer();
          for (let current of players) {
            let num = 0,
              cards = current.getCards('h', function (card) {
                return card.hasGaintag('vunk');
              });
            if (event) {
              if (event.name == 'gain' && event.gaintag.includes('vunk')) cards.removeArray(event.cards);
              let evt = event.getl(current);
              if (evt && evt.gaintag_map) {
                for (let i in evt.gaintag_map) {
                  if (evt.gaintag_map[i].includes('vunk')) num++;
                }
              }
            }
            num += cards.length;
            if (num > max) {
              max = num;
              max2 = current;
            } else if (num == max) max2 = null;
          }
          return max2;
        },
        subSkill: {
          round: {
            charlotte: true,
          },
          block: {
            trigger: {
              player: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
            },
            forced: true,
            filter(event, player) {
              return !player.getCards('h').filter(function (card) {
                return card.hasGaintag('vunk');
              }).length;
            },
            content() {
              player.removeSkill('vunk_block');
            },
            onremove(player) {
              player.removeGaintag('vunk');
            },
            mod: {
              aiOrder(player, card, num) {
                if (get.itemtype(card) == 'card' && card.hasGaintag('vunk')) return num + 1;
              },
            },
            marktext: '诛佞',
            charlotte: true,
            popup: false,
            intro: {
              name: '手牌',
              content: 'cards',
              mark(dialog, storage, player, tag) {
                if (
                  player &&
                  player.getCards('h').filter(function (card) {
                    return card.hasGaintag('vunk');
                  }).length
                ) {
                  dialog.addAuto(
                    player.getCards('h').filter(function (card) {
                      return card.hasGaintag('vunk');
                    })
                  );
                } else {
                  return '无';
                }
              },
            },
          },
          draw: {
            trigger: {
              global: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
            },
            _priority: 2,
            forced: true,
            filter(event, player) {
              if (event.name == 'lose' && event.getlx === false) return false;
              return lib.skill.vunk.getMax() != lib.skill.vunk.getMax(event);
            },
            content() {
              player.draw(player.isMaxHandcard() ? 1 : 2, 'nodelay');
              if (player.isPhaseUsing() && ['useCard', 'respond'].includes(trigger.parent.name)) {
                let stat = player.getStat('skill');
                delete stat.vunk;
                player.setAvatar('lqysyr', 'lqysyra');
              }
            },
          },
        },
        ai: {
          threaten: 1,
        },
      },
      wuxm: {
        audio: 'ext:恒梦/audio/uiwdxmyb:3',
        mark: true,
        marktext: '☯',
        intro: {
          content(storage) {
            if (storage) return '转换技.你可以切换手牌区';
            return '转换技.你可以切换牌堆顶X张牌';
          },
        },
        enable: 'phaseUse',
        init(player) {
          if (!player.storage.wulq) player.storage.wulq = 0;
          if (!player.storage.ww) player.storage.ww = [];
          if (!player.storage.gom) player.storage.gom = [];
          if (!player.storage.wwm) player.storage.wwm = [];
        },
        zhuanhuanji: true,
        async content(event, trigger, player) {
          player.changeZhuanhuanji('wuxm');
          if (player.storage.wuxm == true) {
            let handcards1 = [],
              handcards2 = [];
            player.storage.date = {};
            for (const j of player.node.handcards1.childNodes) handcards1.push(j);
            for (const j of player.node.handcards2.childNodes) handcards2.push(j);
            player.storage.date = {
              handcards1: handcards1,
              handcards2: handcards2,
            };
          }
          game.broadcastAll(function (player) {
            player.getCards('h').forEach((i) => {
              i.discard();
              if (!player.storage.wuxm) {
                game.cardsGotoSpecial(i);
              }
            });
            ui.updatehl();
            player.update();
          }, player);
          let storage;
          if (player.storage.wuxm == true) {
            let m = player.storage.wulq;
            player.storage.ww = [];
            for (let i = 0; i < m; i++) {
              player.storage.ww.push(ui.cardPile.childNodes[i]);
            }
            storage = player.storage.ww;
            game.broadcastAll(
              function (storage, player) {
                const preg = [],
                  stolen = storage.length;
                for (let i = 0; i < stolen; i++) {
                  preg.unshift(game.createCard2(storage[i]));
                }
                player.directgain(preg, false);
                player.update();
                ui.updatehl();
              },
              storage,
              player
            );
            player.addSkill(['wuxm_special', 'qivi']);
          } else {
            let sdate = player.storage.date,
              j;
            game.broadcastAll(
              function (player, sdate, j, ps) {
                player.node.handcards1.innerHTML = '';
                player.node.handcards2.innerHTML = '';
                for (j of sdate.handcards1) {
                  player.node.handcards1.appendChild(j);
                }
                for (j of sdate.handcards2) {
                  player.node.handcards2.appendChild(j);
                }
                for (const cur of ps) {
                  cur.update();
                  ui.updatehl();
                }
              },
              player,
              sdate,
              j,
              game.players
            );
            let data = {};
            for (const i of game.players) {
              data[i.dataset.position] = {
                h: get.cardsInfo(i.getCards('h')),
                e: get.cardsInfo(i.getCards('e')),
                j: get.cardsInfo(i.getCards('j')),
              };
            }
            game.addVideo('skill', event.player, ['wuxm', data]);
            game.broadcastAll(function () {
              ui.updatehl();
            });
            player.removeSkill(['wuxm_special', 'qivi']);
          }
        },
        group: 'wuxm_record',
        ai: {
          order(item, player) {
            if (player && get.event().type == 'phase') {
              const list = [];
              for (let i = 0; i < player.storage.wulq; i++) {
                list.push(ui.cardPile.childNodes[i]);
              }
              if (!list.length) return 0;
              list.sort((a, b) => (player.getUseValue(b, true, true) || 0) - (player.getUseValue(a, true, true) || 0));
              return get.order(list[0], player) * 0.99;
            }
            return 0.001;
          },
          result: {
            player(player) {
              if (player.storage.wuxm) return 0;
              const list = [];
              for (let i = 0; i < player.storage.wulq; i++) {
                list.push(ui.cardPile.childNodes[i]);
              }
              if (!list.length) return 0;
              list.sort((a, b) => (player.getUseValue(b, true, true) || 0) - (player.getUseValue(a, true, true) || 0));
              return (player.getUseValue(list[0], true, true) * 1.2 + player.storage.wulq) / (3 + get.translation(list[0].name).length) - 1;
            },
          },
        },
        subSkill: {
          special: {
            charlotte: true,
            lastDo: true,
            mod: {
              cardUsable(card, player, num) {
                if (card.name == 'jiu') return Infinity;
              },
              cardEnabled(card, player) {
                if (player.storage.wwm.length >= 5 && card.name !== 'jiu') return false;
              },
              cardSavable(card, player) {
                if (player.storage.wwm.length >= 5 && card.name !== 'jiu') return false;
              },
            },
            trigger: {
              player: 'useCard2',
            },
            forced: true,
            async content(event, trigger, player) {
              trigger.card.storage.special = true;
              let g = get.translation(trigger.card.name).length,
                sto = player.storage.wulq;
              player.storage.wulq = sto - g;
              if (trigger.name !== 'jiu') player.storage.wwm.add(trigger.card.name);
              let carm = [];
              for (let i of trigger.cards) {
                let carm = get.cardPile(function (c) {
                  return player.storage.ww.includes(c) && i.name == c.name && i.suit == c.suit && i.number == c.number;
                });
                game.broadcastAll(function (carm) {
                  game.cardsGotoSpecial(carm);
                }, carm);
              }
              player.changeZhuanhuanji('wuxm');
              game.broadcastAll(function (player) {
                player.getCards('h').forEach((i) => {
                  i.discard();
                  if (!player.storage.wuxm) {
                    game.cardsGotoSpecial(i);
                  }
                });
                ui.updatehl();
                player.update();
              }, player);
              let sdate = player.storage.date,
                j;
              game.broadcastAll(
                function (player, sdate, j, ps) {
                  player.node.handcards1.innerHTML = '';
                  player.node.handcards2.innerHTML = '';
                  for (j of sdate.handcards1) {
                    player.node.handcards1.appendChild(j);
                  }
                  for (j of sdate.handcards2) {
                    player.node.handcards2.appendChild(j);
                  }
                  for (const cur of ps) {
                    cur.update();
                    ui.updatehl();
                  }
                },
                player,
                sdate,
                j,
                game.players
              );
              let data = {};
              for (const i of game.players) {
                data[i.dataset.position] = {
                  h: get.cardsInfo(i.getCards('h')),
                  e: get.cardsInfo(i.getCards('e')),
                  j: get.cardsInfo(i.getCards('j')),
                };
              }
              game.addVideo('skill', event.player, ['wuxm', data]);
              game.broadcastAll(function () {
                ui.updatehl();
              });
              player.removeSkill(['wuxm_special', 'qivi']);
            },
            group: 'wuxm_end',
          },
          end: {
            trigger: {
              player: 'phaseUseEnd',
            },
            forced: true,
            filter(event, player) {
              return player.hasSkill('wuxm_special');
            },
            async content(event, trigger, player) {
              player.changeZhuanhuanji('wuxm');
              game.broadcastAll(function (player) {
                player.getCards('h').forEach((i) => {
                  i.discard();
                  if (!player.storage.wuxm) {
                    game.cardsGotoSpecial(i);
                  }
                });
                ui.updatehl();
                player.update();
              }, player);
              let sdate = player.storage.date,
                j;
              game.broadcastAll(
                function (player, sdate, j, ps) {
                  player.node.handcards1.innerHTML = '';
                  player.node.handcards2.innerHTML = '';
                  for (j of sdate.handcards1) {
                    player.node.handcards1.appendChild(j);
                  }
                  for (j of sdate.handcards2) {
                    player.node.handcards2.appendChild(j);
                  }
                  for (const cur of ps) {
                    cur.update();
                    ui.updatehl();
                  }
                },
                player,
                sdate,
                j,
                game.players
              );
              let data = {};
              for (const i of game.players) {
                data[i.dataset.position] = {
                  h: get.cardsInfo(i.getCards('h')),
                  e: get.cardsInfo(i.getCards('e')),
                  j: get.cardsInfo(i.getCards('j')),
                };
              }
              game.addVideo('skill', event.player, ['wuxm', data]);
              game.broadcastAll(function () {
                ui.updatehl();
              });
              player.removeSkill(['wuxm_special', 'qivi']);
            },
          },
          record: {
            forced: true,
            mod: {
              cardEnabled(card, player) {
                if (!player.hasSkill('wuxm_special') && card.name !== 'jiu' && player.storage.gom.length >= 5) return false;
              },
              cardSavable(card, player) {
                if (!player.hasSkill('wuxm_special') && card.name !== 'jiu' && player.storage.gom.length >= 5) return false;
              },
            },
            trigger: {
              player: 'useCardAfter',
            },
            filter(event, player) {
              return !event.card.storage.special;
            },
            async content(event, trigger, player) {
              if (trigger.card.name !== 'jiu') player.storage.gom.add(trigger.card.name);
              player.storage.ww = [];
              let g = get.translation(trigger.card.name).length,
                sto = player.storage.wulq;
              event.g = g * 5;
              player.storage.wulq = sto + g;
              event.cards = trigger.cards.filterInD('o');
              await player.gain(event.cards);
              let list = [],
                numm;
              for (let i = 0; i < event.g; i++) {
                list.push(i);
              }
              player.lose(event.cards, ui.cardPile).insert_index = function (event, card) {
                numm = list.randomGet();
                return ui.cardPile.childNodes[numm];
              };
              game.broadcastAll();
              game.updateRoundNumber();
              game.log(player, '把', get.cnNumber(event.cards.length), '张牌放在了牌堆里');
              let m = player.storage.wulq;
              for (let i = 0; i < m; i++) {
                player.storage.ww.push(ui.cardPile.childNodes[i]);
              }
            },
          },
        },
      },
      jqyb: {
        audio: 'ext:恒梦/audio/uiwdxmyb:4',
        mod: {
          globalTo(from, to, distance) {
            return distance + to.storage.jqyb;
          },
        },
        trigger: {
          target: 'useCardToTargeted',
        },
        filter(event, player) {
          if (event.player === player) return false;
          return get.tag(event.card, 'damage');
        },
        forced: true,
        async content(event, trigger, player) {
          const { bool } = await player
            .chooseBool(get.prompt('dcjiudun'), '摸一张牌,视为使用一张【酒】')
            .set('ai', () => 1)
            .forResult();
          if (!bool) return;
          player.draw();
          player.chooseUseTarget('jiu', true);
          player.storage.jqyb += 1;
          const card = get.discardPile(function (card) {
            return card.name == 'jiu';
          });
          if (card) {
            game.log(player, '将', card, '置于牌堆顶');
            card.fix();
            ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, 5)]);
            game.updateRoundNumber();
          }
        },
        ai: {
          jiuSustain: true,
          skillTagFilter(player, tag, name) {
            if (name != 'phase') return false;
          },
        },
        group: ['jqyb_round', 'jqyb_effect'],
        subSkill: {
          round: {
            trigger: {
              global: 'roundStart',
            },
            forced: true,
            content() {
              player.storage.jqyb = 0;
            },
          },
          effect: {
            forced: true,
            trigger: {
              player: 'useCard2',
            },
            filter(event, player) {
              return event.card && event.card.name === 'jiu';
            },
            content() {
              player.storage.gom = [];
              player.storage.wwm = [];
            },
          },
        },
      },
      wulq: {
        mark: true,
        marktext: '五',
        intro: {
          markcount(storage) {
            return storage;
          },
          content(storage, player) {
            const str = '不如大醉归去:';
            return str + storage;
          },
        },
      },
      liyt: {
        audio: 'ext:恒梦/audio/bdhell:4',
        subSkill: {
          1: {
            audio: 'liyt',
          },
        },
        trigger: {
          global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
        },
        prompt2(event, player) {
          const cards = event.getd(),
            cards2 = [];
          for (const i of cards) {
            if (get.position(i, true) == 'd') cards2.push(i);
          }
          return '是否使用' + get.translation(cards2) + '中的一张';
        },
        filter(event, player) {
          if (event.type != 'discard') return false;
          let cards = event.getd(),
            cards2 = [],
            bool;
          for (const i of cards) {
            if (
              player.getHistory('useCard', function (c) {
                return c.card.name == i.name;
              }).length < 1
            )
              bool = true;
          }
          for (const i of cards) {
            if (
              get.position(i, true) == 'd' &&
              game.hasPlayer(function (current) {
                return player.canUse(i, current, false);
              })
            )
              cards2.push(i);
          }
          return bool && cards2.length && event.getParent(2) !== 'judge';
        },
        async cost(event, trigger, player) {
          let cards = trigger.getd(),
            cards2 = [];
          for (const i of cards) {
            if (
              get.position(i, true) == 'd' &&
              i.name != 'wugu' &&
              game.hasPlayer(function (current) {
                return player.canUse(i, current, false);
              })
            )
              cards2.push(i);
          }
          const result = await player
            .chooseButton(['蜃楼:是否使用其中的一张牌？', cards2])
            .set('ai', function (button) {
              return _status.event.player.getUseValue(button.link, false);
            })
            .forResult();
          if (result.bool)
            event.result = {
              bool: true,
              cards: result.links,
            };
        },
        async content(event, trigger, player) {
          const cards = event.cards;
          player.$gain2(cards[0], false);
          player.chooseUseTarget(true, cards[0], false, 'nodistance');
        },
      },
      icxi: {
        audio: 'ext:恒梦/audio/波塞冬:4',
        trigger: {
          source: 'damageEnd',
        },
        logTarget(event, player) {
          return event.player.next;
        },
        check(event, player) {
          return get.effect(event.player.next, event.card, player, player) > 0;
        },
        filter(event, player) {
          if (event.getParent(2).name !== 'useCard') return false;
          if (player === event.player.next) return false;
          if (!player.canUse(event.card, event.player.next, false)) return false;
          if (get.distance(event.player, event.player.next) > 1) return false;
          return event.card && event.notLink();
        },
        content() {
          const num = trigger.getParent(2).targets.length;
          trigger.getParent(2).targets[num] = trigger.player.next;
          game.log(trigger.player.next, '额外成为了', '#y' + get.translation(trigger.card), '的目标');
        },
      },
      xrwo: {
        audio: 'ext:恒梦/audio/bdhell:4',
        trigger: {
          source: 'damageEnd',
        },
        filter(event, player) {
          if (player == event.player) return false;
          if (_status.currentPhase === player) return false;
          return event.player.isIn();
        },
        async content(event, trigger, player) {
          let pretar = trigger.player,
            prepla = player.next;
          while (pretar !== player) {
            if (pretar.getGainableCards(player, 'he')) await player.gain(pretar.getGainableCards(player, 'he').randomGet(), pretar, 'giveAuto');
            pretar = pretar.next;
          }
          while (prepla !== trigger.player && trigger.player.isIn()) {
            const hsp = player.getGainableCards(prepla, 'he');
            if (hsp) await prepla.gain(hsp.randomGet(), player, 'giveAuto');
            prepla = prepla.next;
          }
        },
      },
      suhv: {
        zhuanhuanji: true,
        subSkill: {
          hdhy: {
            trigger: { global: 'phaseUseBefore' },
            forced: true,
            content() {
              player.addMark('charge', 1);
            },
          },
          effect: {
            trigger: {
              global: 'useCard',
            },
            forced: true,
            popup: false,
            charlotte: true,
            filter(event, player) {
              return event.targets && event.targets.length > 1;
            },
            async content(event, trigger, player) {
              const targets = trigger.targets;
              trigger.targets = targets.reverse();
            },
          },
        },
        group: 'suhv_hdhy',
        audio: 'ext:恒梦/audio/bdhell:3',
        trigger: {
          source: 'damageSource',
        },
        filter(event, player) {
          if (_status.currentPhase === player) return false;
          const x = game.countPlayer();
          return player.countMark('charge') >= x;
        },
        mark: true,
        marktext: '☯',
        intro: {
          content(storage) {
            if (storage) return '顺时针';
            return '逆时针';
          },
        },
        content() {
          const x = game.countPlayer();
          player.removeMark('charge', x);
          for (let i = 0; i < x; i++) {
            const p = i;
            player.line(p, 'water');
            const nex = p.next,
              pre = p.previous;
            p.next = pre;
            p.previous = nex;
          }
          player.changeZhuanhuanji('suhv');
          player.storage.suhv ? player.addSkill('suhv_effect') : player.removeSkill('suhv_effect');
        },
      },
      lygx: {
        audio: 'ext:恒梦/audio/liuhyb:9',
        filter(event, player) {
          return player.countCards('h');
        },
        trigger: { player: ['phaseUseBegin', 'damageBegin4'] },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseTarget(get.prompt('twchaofeng'), '选择至多三名角色共同卦命.赢的角色摸天命卦数与所占卦数差值张牌', [1, 3], (card, player, target) => {
              return player.canCompare(target);
            })
            .set('ai', function (target) {
              const player = _status.event.player,
                targets = _status.event.getTrigger().targets;
              let num = 0,
                card = { name: 'sha', nature: 'fire' };
              if (target.hasSkill('twlvren')) num += 2 * (ui.selected.targets.length + 1);
              if (target.hasSkill('twchuanshu_effect')) num += 3;
              const hs = player.getCards('h').sort(function (a, b) {
                return Math.abs(a.number - (13 * player.hp) / 8 + (Math.random() > 0.5 ? 2 * Math.random() : -2 * Math.random())) - Math.abs(b.number - (13 * player.hp) / 8 + (Math.random() > 0.5 ? 2 * Math.random() : -2 * Math.random()));
              });
              const ts = target.getCards('h').sort(function (a, b) {
                return Math.abs(a.number - (13 * player.hp) / 4 + (Math.random() > 0.5 ? 2 * Math.random() : -2 * Math.random())) - Math.abs(b.number - (13 * player.hp) / 4 + (Math.random() > 0.5 ? 2 * Math.random() : -2 * Math.random()));
              });
              if (hs[0].number <= Math.min(13, ts[0].number + num)) {
                return 6 + get.effect(player, card, target, target);
              }
              return get.effect(target, { name: 'guohe_copy2' }, player, player) / 2 + get.effect(target, card, player, player);
            })
            .forResult();
        },
        async content(event, trigger, player) {
          const result = await player.chooseToLiuh(event.targets).setContent('chooseToLiuhMeanwhile').forResult();
          if (!result.winner) return;
          const prenum = Math.abs(result.maxNum - result.jpgo);
          game.playAudio('../extension/恒梦/audio/liuhyb/lygx' + [1, 2, 3, 4, 5, 6, 7, 8, 9].randomGet());
          result.winner.draw(Math.max(1, Math.round(Math.abs(result.maxNum - result.jpgo)) * (event.targets.length + 1)));
          if (trigger.name == 'damage') {
            if (prenum >= player.hp)
              if (trigger.name == 'damage') {
                trigger.cancel();
              }
          }
        },
        ai: {
          maixie: true,
          maixie_hp: true,
          maixie_defend: true,
        },
      },
      gxmk: {
        mod: {
          maxHandcard() {
            return 4;
          },
        },
        audio: 'ext:恒梦/audio/liuhyb:3',
        trigger: {
          player: 'compare',
          target: 'compare',
        },
        filter(event, player) {
          return player.countCards('he') && event.jpgo;
        },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseToDiscard(get.prompt('gxmk'), '弃置1张牌改变你所占之卦', '当前天命卦数为:' + trigger.jpgo, 'he')
            .set('filterCard', function (card) {
              return card.number !== trigger[player == trigger.player ? 'num1' : 'num2'];
            })
            .set('ai', function (card) {
              if (Math.abs(card.number - trigger.jpgo) < 1) return 0.1;
              const hgmglist = [trigger.card1, ...trigger.cardlist],
                hgmglist2 = Array.from(hgmglist, (card) => card.number);
              game.log(hgmglist, hgmglist2, trigger.jpgo);
              hgmglist2.sort(function (a, b) {
                return Math.abs(a - trigger.jpgo) - Math.abs(b - trigger.jpgo);
              });
              if (Math.abs(card.number - trigger.jpgo) >= Math.abs(hgmglist2[0] - trigger.jpgo)) return 0;
              return 13 - Math.abs(card.number - trigger.jpgo);
            })
            .forResult();
        },
        async content(event, trigger, player) {
          if (player == trigger.target || !trigger.iwhile) {
            trigger[player == trigger.player ? 'num1' : 'num2'] = event.cards[0].number;
            game.log(player + '的拼点牌点数改为' + event.cards[0].number);
          }
        },
      },
      yuuibujt: {
        audio: 'ext:恒梦/audio/duuurf:6',
        init(player) {
          if (!player.storage.yuuibujt) {
            player.storage.yuuibujt = [player.hp, [], []];
            player.markSkill('yuuibujt');
          }
        },
        trigger: { player: 'phaseBeginStart' },
        filter(event, player) {
          if (player.storage.fellow) return false;
          const storage = player.storage.yuuibujt;
          return storage[0] || storage[1].length;
        },
        forced: true,
        seatRelated: true,
        content: function* (event, map) {
          const player = map.player,
            storage = player.storage.yuuibujt;
          const sum = storage[0] < player.hp ? player.hp : storage[0];
          storage[1] = [];
          player.markSkill('yuuibujt');
          if (!sum) return;
          const list = get.inpileVCardList((info) => {
            if (info[2] == 'sha' && info[3]) return false;
            return info[0] != 'equip';
          });
          const func = () => {
            const event = get.event();
            const controls = [
              (link) => {
                const evt = get.event();
                if (evt.dialog && evt.dialog.buttons) {
                  for (let i = 0; i < evt.dialog.buttons.length; i++) {
                    const button = evt.dialog.buttons[i];
                    button.classList.remove('selectable');
                    button.classList.remove('selected');
                    const counterNode = button.querySelector('.caption');
                    if (counterNode) {
                      counterNode.childNodes[0].innerHTML = ``;
                    }
                  }
                  ui.selected.buttons.length = 0;
                  game.check();
                }
                return;
              },
            ];

            event.controls = [ui.create.control(controls.concat(['清除选择', 'stayleft']))];
          };
          if (event.isMine()) func();
          else if (event.isOnline()) event.player.send(func);
          const result = yield player
            .chooseButton(['遇事不决:是否记录至多' + get.cnNumber(sum) + '个牌名？', [list, 'vcard']], [1, sum], false)
            .set('ai', function (button) {
              switch (button.link[2]) {
                case 'wuxie':
                  return 5 + Math.random();
                case 'sha':
                  return 5 + Math.random();
                case 'tao':
                  return 4 + Math.random();
                case 'jiu':
                  return 3 + Math.random();
                case 'lebu':
                  return 3 + Math.random();
                case 'shan':
                  return 4.5 + Math.random();
                case 'wuzhong':
                  return 4 + Math.random();
                case 'shunshou':
                  return 2.7 + Math.random();
                case 'nanman':
                  return 2 + Math.random();
                case 'wanjian':
                  return 1.6 + Math.random();
                default:
                  return 1.5 + Math.random();
              }
            })
            .set('filterButton', (button) => {
              return !_status.event.names.includes(button.link[2]);
            })
            .set('names', storage[2])
            .set('custom', {
              add: {
                confirm(bool) {
                  if (bool != true) return;
                  const event = get.event().parent;
                  if (event.controls) event.controls.forEach((i) => i.close());
                  if (ui.confirm) ui.confirm.close();
                  game.uncheck();
                },
                button() {
                  if (ui.selected.buttons.length) return;
                  const event = get.event();
                  if (event.dialog && event.dialog.buttons) {
                    for (let i = 0; i < event.dialog.buttons.length; i++) {
                      const button = event.dialog.buttons[i];
                      const counterNode = button.querySelector('.caption');
                      if (counterNode) {
                        counterNode.childNodes[0].innerHTML = ``;
                      }
                    }
                  }
                  if (!ui.selected.buttons.length) {
                    const evt = event.parent;
                    if (evt.controls) evt.controls[0].classList.add('disabled');
                  }
                },
              },
              replace: {
                button(button) {
                  const event = get.event(),
                    sum = event.sum;
                  if (!event.isMine()) return;
                  if (button.classList.contains('selectable') == false) return;
                  if (ui.selected.buttons.length >= sum) return false;
                  button.classList.add('selected');
                  ui.selected.buttons.push(button);
                  let counterNode = button.querySelector('.caption');
                  const count = ui.selected.buttons.filter((i) => i == button).length;
                  if (counterNode) {
                    counterNode = counterNode.childNodes[0];
                    counterNode.innerHTML = `×${count}`;
                  } else {
                    counterNode = ui.create.caption(`<span style="font-size:24px; font-family:xinwei; text-shadow:#FFF 0 0 4px, #FFF 0 0 4px, rgba(74,29,1,1) 0 0 3px;">×${count}</span>`, button);
                    counterNode.style.right = '5px';
                    counterNode.style.bottom = '2px';
                  }
                  const evt = event.parent;
                  if (evt.controls) evt.controls[0].classList.remove('disabled');
                  game.check();
                },
              },
            })
            .set('sum', sum);
          if (result.bool) {
            const names = result.links.map((link) => link[2]);
            storage[0] -= names.length;
            storage[1] = names;
            storage[2] = names;
          } else storage[2] = [];
          player.markSkill('yuuibujt');
        },
        marktext: '遇事',
        intro: {
          markcount(storage) {
            return storage[1].length;
          },
          mark(dialog, content, player) {
            const storage = player.getStorage('yuuibujt');
            const sum = storage[0];
            const names = storage[1];
            if (player.isUnderControl(true) && names.length) {
              dialog.addText('当前记录牌名:');
              dialog.addSmall([names, 'vcard']);
            }
          },
        },
        group: 'yuuibujt_kanpo',
        subSkill: {
          kanpo: {
            audio: 'yuuibujt',
            trigger: { global: 'useCardToBefore' },
            filter(event, player) {
              return event.player != player && player.storage.yuuibujt[1].includes(event.card.name);
            },
            prompt2(event, player) {
              return '移除' + get.translation(event.card.name) + '的记录,令' + get.translation(event.card) + '无效';
            },
            check(event, player) {
              let effect = 0;
              if (event.card.name == 'wuxie' || event.card.name == 'shan') {
                if (get.attitude(player, event.player) < -1) effect = -1;
              } else if (event.targets && event.targets.length) {
                for (const i of event.targets) {
                  effect += get.effect(i, event.card, event.player, player);
                }
              }
              if (effect < 0) {
                if (event.card.name == 'sha') {
                  const target = event.targets[0];
                  if (target == player) return !player.countCards('h', 'shan');
                  else return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
                } else return true;
              }
              return false;
            },
            async cost(event, trigger, player) {
              event.result = await player
                .chooseTarget('遇事不决:位移至一名角色的位置', lib.filter.notMe())
                .set('ai', function (target) {
                  const playerx = trigger.player;
                  let targetx, cardx;
                  if (trigger.target) targetx = trigger.target;
                  if (trigger.card) cardx = trigger.card;
                  const targets = game
                    .filterPlayer(
                      (i) => {
                        if (get.effect(targetx, cardx, playerx, player) > 0) return get.attitude(player, i) > 0;
                        else return get.attitude(player, i) <= 0;
                      },
                      null,
                      true
                    )
                    .sortBySeat(_status.currentPhase);
                  let idx = targets.indexOf(target);
                  if (idx < 0) return -1;
                  return 1 / (idx + 1);
                })
                .forResult();
            },
            async content(event, trigger, player) {
              const target = event.targets[0],
                seata = trigger.player.seatNum;
              let seatb;
              if (trigger.target) seatb = trigger.target.seatNum;
              await game.broadcastAll(
                function (p, t) {
                  game.swapSeat(p, t);
                },
                player,
                target
              );
              if (player.storage.kewfiyfg) {
                const list = player.storage.kewfiyfg,
                  listlen = list.length;
                for (let i = 0; i < listlen; i++) {
                  if (!list[i].isAlive()) continue;
                  list[i].wwyi(player, (i = 1 ? 'uh' : (i = 2 ? 'yz' : 'xp')));
                }
              }
              if (trigger.player && seata !== trigger.player.seatNum) trigger.player = game.players.find((p) => p.seatNum == seata);
              if (trigger.target && seatb !== trigger.target.seatNum) trigger.target = game.players.find((p) => p.seatNum == seatb);
              trigger.player.line(trigger.target, 'wood');
              player.storage.yuuibujt[1].remove(trigger.card.name);
              player.markSkill('yuuibujt');
              player.draw();
            },
          },
        },
      },
      kewfiyfg: {
        audio: 'ext:恒梦/audio/duuurf:6',
        trigger: { player: 'dieBefore' },
        filter(event, player) {
          return !player.storage.kewfiyfg || !player.storage.kewfiyfg.length;
        },
        content() {
          'step 0';
          trigger.cancel();
          player.recover(1 - player.hp);
          event.fellow1 = game.ilzcFellow(false, player.name, player, 'uh');
          ('step 1');
          event.fellow2 = game.ilzcFellow(false, player.name, player, 'yz');
          ('step 2');
          event.fellow3 = game.ilzcFellow(false, player.name, player, 'xp');
          ('step 3');
          const fellows = [event.fellow1[0], event.fellow2[0], event.fellow3[0]];
          player.storage.kewfiyfg = fellows;
          for (const p of fellows) {
            p.hp = player.hp;
            p.storage.yuuibujt = player.storage.yuuibujt;
            p.storage.fellow = true;
            p.markSkill('yuuibujt');
            p.update();
          }
        },
        group: ['kewfiyfg_fellow', 'kewfiyfg_damage', 'kewfiyfg_fdie'],
        subSkill: {
          damage: {
            audio: 'kewfiyfg',
            trigger: { player: 'damageBegin4' },
            forced: true,
            popup: false,
            silent: true,
            lastDo: true,
            filter(event, player) {
              if (player.storage.fellow) return false;
              if (!player.storage.kewfiyfg || !player.storage.kewfiyfg.length) return false;
              return player.storage.kewfiyfg.some((i) => i.isIn());
            },
            async content(event, trigger, player) {
              game.log('iigs');
              trigger.cancel();
              const list = player.storage.kewfiyfg.filter((i) => i.isIn());
              list.randomGet().damage(trigger.source, trigger.nature, trigger.num).set('card', trigger.card).set('cards', trigger.cards);
            },
          },
          fellow: {
            audio: 'kewfiyfg',
            trigger: { player: 'phaseBeginStart' },
            forced: true,
            popup: false,
            firstDo: true,
            filter(event, player) {
              return player.storage.kewfiyfg && player.storage.kewfiyfg.length;
            },
            async content(e, t, p) {
              let hp = 0;
              for (const fellow of p.storage.kewfiyfg) {
                if (fellow.isAlive()) {
                  hp += fellow.hp;
                }
                if (!fellow.storage.fellow || fellow.isUnderControl(true)) continue;
                game.yiiuFellow(fellow);
              }
              p.storage.kewfiyfg = false;
              p.hp += hp;
              p.update();
            },
          },
          fdie: {
            trigger: { global: 'dyingBefore' },
            forced: true,
            popup: false,
            firstDo: true,
            filter(e, p) {
              return p.storage.kewfiyfg && p.storage.kewfiyfg.includes(e.player);
            },
            content() {
              trigger.player.die();
            },
          },
        },
      },
      ycyb: {
        audio: 'ext:恒梦/audio/litdbd:4',
        mod: {
          cardUsable(card, player, num) {
            if (player.hasSkill('jiu')) return Infinity;
          },
          cardname(card) {
            if (get.itemtype(card) == 'card' && card.name === 'tao') return 'jiu';
          },
        },
        trigger: {
          player: 'gainAfter',
          global: 'loseAsyncAfter',
        },
        filter(event, player) {
          const cards = event.getg(player).filter((i) => get.owner(i) == player && get.position(i) == 'h');
          if (!cards.length) return false;
          if (event.getParent(6).name === 'ycyb') return false;
          return !player.storage.qljbm;
        },
        group: ['ycyb_view', 'ycyb_draw', 'ycyb_ybjq'],
        async cost(event, trigger, player) {
          const cards = player.getCards('he');
          event.result = await player
            .chooseCardTarget({
              prompt: get.prompt('ycyb'),
              prompt2: '选择1张牌交给一名其他角色,摸一张牌',
              filterTarget(c, p, t) {
                return p !== t && !t.countCards('h', 'jiu');
              },
              filterCard: (card) => _status.event.cards.includes(card),
              cards: cards,
              selectCard: 1,
              ai1(card) {
                if (ui.selected.cards.length) return 0;
                return 3 / (Math.abs(get.value(card)) + 0.1);
              },
              ai2(target) {
                if (!target.inRangeOf(player)) return 0;
                return get.distance(player, target) - get.attitude(_status.event.player, target);
              },
            })
            .set('cards', cards)
            .forResult();
        },
        async content(event, trigger, player) {
          const target = event.targets[0];
          player.give(event.cards, target).gaintag.add('ycyb');
          target.addSkill('ycyb_view');
          player.useCard({ name: 'jiu' }, player);
          if (player === _status.currentPhase) {
            game.addVideo('jiuNode', target, true);
            game.broadcastAll(function (t) {
              if (!t.node.jiu && lib.config.jiu_effect) {
                t.node.jiu = ui.create.div('.playerjiu', t.node.avatar);
                t.node.jiu2 = ui.create.div('.playerjiu', t.node.avatar2);
              }
            }, target);
          }
        },
        ai: {
          jiuSustain: true,
          skillTagFilter(player, tag, name) {
            if (name != 'phase') return false;
          },
        },
        subSkill: {
          uzjq: {
            forced: true,
            silent: true,
            trigger: { player: ['gainAfter', 'loseAfter'] },
            filter(event, player) {
              if (event.name === 'lose') return !player.countCards('h', 'jiu');
              return event.getg(player).some((i) => get.position(i) == 'h' && i.name === 'jiu');
            },
            content() {
              if (trigger.name === 'gain') {
                game.broadcastAll(function (i) {
                  if (!i.node.jiu && lib.config.jiu_effect) {
                    i.node.jiu = ui.create.div('.playerjiu', i.node.avatar);
                    i.node.jiu2 = ui.create.div('.playerjiu', i.node.avatar2);
                  }
                }, player);
              } else {
                game.broadcastAll(function (t) {
                  if (t.node.jiu) {
                    t.node.jiu.delete();
                    t.node.jiu2.delete();
                    delete t.node.jiu;
                    delete t.node.jiu2;
                  }
                }, player);
              }
            },
          },
          ybjq: {
            trigger: { player: ['phaseBegin', 'phaseEnd'] },
            filter(event, player, name) {
              return event.triggername === 'phaseBegin'
                ? game.countPlayer((c) => {
                  return c !== player && c.countCards('h', 'jiu');
                })
                : true;
            },
            forced: true,
            silent: true,
            content() {
              switch (event.triggername) {
                case 'phaseBegin':
                  const a = game.filterPlayer((c) => {
                    return c !== player;
                  }),
                    alen = a.length;
                  for (let i = 0; i < alen; i++) {
                    a[i].addTempSkill('ycyb_uzjq');
                  }
                  game.broadcastAll(
                    function (g, l) {
                      g.filter((p) => {
                        return p !== l && p.countCards('h', 'jiu');
                      }).forEach((i) => {
                        if (!i.node.jiu && lib.config.jiu_effect) {
                          i.node.jiu = ui.create.div('.playerjiu', i.node.avatar);
                          i.node.jiu2 = ui.create.div('.playerjiu', i.node.avatar2);
                        }
                      });
                    },
                    game.players,
                    player
                  );
                  break;
                case 'phaseEnd':
                  game.broadcastAll(
                    function (g, l) {
                      g.filter((p) => {
                        return p !== l;
                      }).forEach((t) => {
                        if (t.node.jiu) {
                          t.node.jiu.delete();
                          t.node.jiu2.delete();
                          delete t.node.jiu;
                          delete t.node.jiu2;
                        }
                      });
                    },
                    game.players,
                    player
                  );
                  break;
              }
            },
          },
          view: {
            mod: {
              cardname(card) {
                if (get.itemtype(card) == 'card' && card.hasGaintag('ycyb')) return 'jiu';
              },
            },
            charlotte: true,
          },
          draw: {
            trigger: { player: 'useCard' },
            filter(event, player) {
              return event.card && event.card.name === 'jiu';
            },
            forced: true,
            content() {
              player.draw();
            },
          },
          effect: {
            mod: {
              cardUsable(card, player, num) {
                if (player.hasSkill('jiu')) return Infinity;
              },
            },
            trigger: {
              player: 'useCard1',
            },
            forced: true,
            charlotte: true,
            popup: false,
            firstDo: true,
            content() {
              if (trigger.addCount != false) {
                trigger.addCount = false;
                player.getStat().card[trigger.card.name]--;
              }
              player.removeSkill('ycyb_effect');
            },
            mark: true,
            intro: {
              content: '使用下一张牌无距离和次数限制',
            },
          },
        },
      },
      vexm: {
        ai: {
          effect: {
            player(card, player, target) {
              return [1, get.distance(player.storage.xuww, target) / (game.players.length - 1), 1, 0];
            },
          },
        },
        audio: 'ext:恒梦/audio/litdbd:7',
        group: ['vexm_2', 'vexm_end'],
        init(player) {
          player.storage.xuww = player;
          player.storage.vexm1 = player.style.transform;
          player.storage.vexm2 = player.style.zIndex;
        },
        trigger: {
          player: 'useCardToTarget',
        },
        forced: true,
        filter(event, player) {
          const m = event.target;
          return player !== m && player.storage.xuww !== m && event.targets.length === 1;
        },
        _priority: null,
        content() {
          player.addMark('qljb', get.distance(player.storage.xuww, trigger.target));
          player.storage.xuww = trigger.target;
          player.tnww(trigger.target);
          game.log(player.storage.xuww + '的视线突然移向' + player.name);
        },
        subSkill: {
          time: {
            charlotte: true,
            init(player) {
              if (!player.storage.vexm_time) player.storage.vexm_time = [];
            },
            onremove(player) {
              delete player.storage.vexm_time;
            },
          },
          2: {
            trigger: {
              player: 'useCardToAfter',
            },
            audio: 'vexm',
            forced: true,
            lastDo: true,
            filter(event, player) {
              let m = event.target;
              return event.targets.length == 1 && player !== m && player.storage.xuww.countCards('h', 'jiu') && !player.getStorage('vexm_time').includes(m);
            },
            async content(event, trigger, player) {
              player.addTempSkill('vexm_time');
              player.storage.vexm_time.push(trigger.target);
              game.addVideo('jiuNode', trigger.target, false);
              game.broadcastAll(function (t) {
                if (t.node.jiu) {
                  t.node.jiu.delete();
                  t.node.jiu2.delete();
                  delete t.node.jiu;
                  delete t.node.jiu2;
                }
              }, trigger.target);
              const cards = get.cards(1);
              player.showCards(get.translation(player) + '发动了【谪仙】', cards);
              const card = cards[0];
              const bool1 = game.hasPlayer(function (current) {
                return player.canUse(card, current);
              });
              const bool2 = game.hasPlayer(function (current) {
                return player.canUse({ name: 'sha' }, current);
              });
              let result, directindex;
              if (bool1 && bool2) {
                result = await player
                  .chooseControl(function () {
                    return 0;
                  })
                  .set('choiceList', ['使用' + get.translation(cards) + '', '将' + get.translation(cards) + '当做【杀】使用'])
                  .set('ai', function () {
                    return _status.event.choice;
                  })
                  .set('choice', player.getUseValue(card, false) > player.getUseValue({ name: 'sha', cards: cards }) ? 0 : 1)
                  .forResult();
              } else if (bool1) {
                directindex = 0;
              } else if (bool2) {
                directindex = 1;
              } else {
                ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                event.finish();
              }
              let ca = cards[0];
              if (result && typeof directindex != 'number') {
                directindex = result.index;
              }
              if (directindex == 1) {
                player.chooseUseTarget({ name: 'sha' }, cards, true, false).viewAs = true;
              } else {
                player.chooseUseTarget(ca, true, false);
              }
            },
          },
          end: {
            trigger: { global: 'phaseJieshuBegin' },
            forced: true,
            silent: true,
            filter(event, player) {
              return player.storage.xuww != player;
            },
            content() {
              player.storage.xuww = player;
              game.broadcastAll(
                function (p, a, b) {
                  p.style.transform = a;
                  p.style.zIndex = b;
                },
                player,
                player.storage.vexm1,
                player.storage.vexm2
              );
            },
          },
        },
      },
      qklm: {
        group: 'qklm_init',
        mod: {
          targetInRange(card, player, target) {
            return get.zowwjuli(player.storage.xuww, target) <= (!player.storage.jiu ? 0 : player.storage.jiu) + 1;
          },
          cardUsable(card, player, num) {
            if (card.name == 'jiu') return Infinity;
          },
          playerEnabled(card, player, target) {
            if (player === target) return;
            if (get.zowwjuli(player.storage.xuww, target) > (!player.storage.jiu ? 0 : player.storage.jiu) + 1) return false;
          },
        },
        init(player) {
          if (!player.storage.qklm) player.storage.qklm = 0;
        },
        trigger: { player: 'useCard' },
        filter(event, player) {
          return event.card && event.card.name == 'jiu';
        },
        silent: true,
        content() {
          player.storage.qklm += 1;
        },
        subSkill: {
          init: {
            trigger: { global: 'roundStart' },
            silent: true,
            content() {
              player.storage.qklm = 0;
            },
          },
        },
      },
      qljb: {
        audio: 'ext:恒梦/audio/litdbd:2',
        mark: true,
        marktext: '将进',
        intro: {
          name: '将进',
          content: '#',
        },
        enable: 'phaseUse',
        filter(event, player) {
          return player.storage.qljb >= game.countPlayer();
        },
        async content(event, trigger, player) {
          player.storage.qljb = 0;
          player.removeSkill('vexm_time');
          const len = game.filterPlayer((i) => i !== player && i.countCards('h', 'jiu')),
            lenlen = len.length;
          for (let i = 0; i < lenlen; i++) {
            player.gain(len[i].getCards('h', 'jiu'), player, 'give')._triggered = null;
            player.storage.xuww.damage(0.5, 'thunder');
          }
          game.broadcastAll(
            function (g, l) {
              g.filter((p) => {
                return p !== l && p.countCards('h', 'jiu');
              }).forEach((t) => {
                if (t.node.jiu) {
                  t.node.jiu.delete();
                  t.node.jiu2.delete();
                  delete t.node.jiu;
                  delete t.node.jiu2;
                }
              });
            },
            game.players,
            player
          );
        },
        ai: {
          threaten: 1.5,
          order: 3,
          result: {
            player(player) {
              return get.attitude(player, player.storage.xuww);
            },
          },
        },
      },
      yzls: {
        subSkill: {
          skin1: { audio: 'ext:恒梦/audio/wolsfgiu:2' },
          skin2: { audio: 'ext:恒梦/audio/wolsfgiu:2' },
          count: {
            trigger: {
              player: ['useCard1'],
            },
            silent: true,
            firstDo: true,
            noHidden: true,
            content() {
              player.storage.yzls = player.getAllHistory('useCard').length;
            },
            forced: true,
            popup: false,
            _priority: 1,
          },
          start: {
            trigger: {
              global: 'phaseBefore',
              player: 'enterGame',
            },
            forced: true,
            filter(event, player) {
              return event.name != 'phase' || game.phaseNumber == 0;
            },
            content() {
              game.broadcastAll(function (p) {
                p.maxHp = 5;
                p.hp = 3;
                p.update();
              }, player);
            },
          },
        },
        audio: 'ext:恒梦/audio/wolsfgiu:2',
        onChooseToUse(event) {
          if (!game.check() || !lib.config.auto_confirm || !event.dying.length) {
            const player = event.player;
            let str = '<li>总次数:',
              num = player.storage.yzls;
            str += num || 0;
            str += '<br><li><font color=#000000>游龙</font>:';
            str += num % player.hp || 0;
            str += `/${player.hp}`;
            str += '<br><li><font color=#FF0000>鸾凤</font>:';
            str += num % player.getDamagedHp() || 0;
            str += `/${player.getDamagedHp()}`;
            event.prompt = str;
          }
        },
        trigger: {
          player: ['useCard'],
        },
        forced: true,
        filter(event, player) {
          if (get.color(event.card, player) === 'red') return false;
          let num = player.getAllHistory('useCard').length;
          return num % player.hp == 0;
        },
        content() {
          let num = player.getAllHistory('useCard').length;
          const cards = [],
            list = [];
          let prename = 'sha';
          if (num % player.hp == 0) {
            player.recover();
            for (const i in lib.card) {
              if (get.type2(i) !== 'trick') continue;
              if (lib.card[i].mode && lib.card[i].mode.includes(get.mode()) === false) continue;
              if (lib.card[i].vanish || lib.card[i].destroy) continue;
              if (lib.card[i].destroy) continue;
              if (typeof filter == 'function' && !filter(i)) continue;
              if (lib.config.bannedcards.includes(i)) continue;
              if (!lib.translate[i + '_info']) continue;
              list.push(i);
            }
            prename = list.randomGet();
            const card = game.createCard(prename, 'none');
            if (card) cards.push(card);
          }
          if (cards.length) player.gain(cards, 'gain2');
        },
        group: ['yzls_start', 'yzls_count'],
        mark: true,
        intro: {
          content(num, player) {
            let str = '<li>总次数:';
            str += num;
            str += '<br><li>游龙:';
            str += num % player.hp;
            str += `/${player.hp}`;
            str += '<br><li>鸾凤:';
            str += num % player.getDamagedHp();
            str += `/${player.getDamagedHp()}`;
            return str;
          },
        },
        ai: {
          effect: {
            player(card, player, target) {
              let xngo = 0,
                ykbm = false;
              if (get.color(card, player) !== 'red') {
                let num = player.getAllHistory('useCard').length + 1;
                if (num % player.hp == 0) {
                  if (player.getDamagedHp() <= 1) xngo -= 10;
                  xngo += 2;
                }
              }
              if (get.color(card, player) !== 'black') {
                let num = player.getAllHistory('useCard').length + 1;
                if (num % player.getDamagedHp() == 0) {
                  if (player.hp <= 1) xngo -= 10;
                  xngo += 2;
                  ykbm = true;
                }
              }
              if (get.tag(card, 'recover') && player.getDamagedHp() <= (ykbm ? 2 : 1)) xngo = xngo - 10;
              return [1, xngo];
            },
          },
        },
      },
      lrfg: {
        subSkill: {
          skin1: { audio: 'ext:恒梦/audio/wolsfgiu:2' },
          skin2: { audio: 'ext:恒梦/audio/wolsfgiu:2' },
        },
        audio: 'ext:恒梦/audio/wolsfgiu:2',
        trigger: {
          player: ['useCardBefore'],
        },
        forced: true,
        filter(event, player) {
          if (get.color(event.card, player) === 'black') return false;
          let num = player.getAllHistory('useCard').length + 1;
          return num % player.getDamagedHp() == 0;
        },
        content() {
          let num = player.getAllHistory('useCard').length + 1;
          const cards = [];
          if (num % player.getDamagedHp() == 0) {
            player.loseHp();
            player
              .when('yingbian')
              .filter((evt) => evt.card === trigger.card)
              .then(() => {
                if (!Array.isArray(trigger.temporaryYingbian)) trigger.temporaryYingbian = [];
                trigger.temporaryYingbian.add('force');
                trigger.temporaryYingbian.addArray(get.yingbianEffects());
              });
          }
        },
      },
      tmjl: {
        audio: 'ext:恒梦/audio/gjjlmoye:2',
        prompt: '将装备区里的一张牌移动至其他角色的装备区',
        enable: 'phaseUse',
        position: 'e',
        filter(event, player) {
          return player.countCards('e') > 0;
        },
        check(card) {
          const player = _status.event.player;
          const stat = player.getStat().card.sha;
          const num = 2 - player.countCards('e', (c) => get.subtype(c) == 'equip1');
          if (get.subtype(card) == 'equip1') return stat + num - 3;
          return 6 - get.value(card) + player.countCards('h', (c) => get.subtype(c) == get.subtype(card)) * 3;
        },
        filterCard: true,
        filterTarget(event, player, target) {
          return target != player && target.canEquip(ui.selected.cards[0], true);
        },
        prepare: 'give',
        discard: false,
        lose: false,
        async content(event, trigger, player) {
          await event.target.equip(event.cards[0]);
          if (event.cards[0].name.indexOf('cvlm_') == 0 && !player.getCards('e').includes(event.cards[0])) {
            player.draw(2);
          }
        }, //QQQ
        ai: {
          order: 11,
          expose: 0.2,
          result: {
            target(player, target) {
              if (ui.selected.cards.length) {
                let card = ui.selected.cards[0];
                if (target.getEquip(card) || target.countCards('h', { subtype: get.subtype(card) })) return 0;
                return get.effect(target, card, player, target);
              }
              return 0;
            },
          },
        },
      },
      ulvs: {
        group: 'ulvs_init',
        subSkill: {
          init: {
            trigger: {
              global: 'phaseBefore',
              player: 'enterGame',
            },
            forced: true,
            filter(event, player) {
              return (event.name != 'phase' || game.phaseNumber == 0) && player.hasEnabledSlot(2);
            },
            content() {
              player.disableEquip(2);
              player.expandEquip(1);
            },
          },
        },
        logTarget: 'targets',
        audio: 'ext:恒梦/auido/hwbdwuih:2',
        trigger: {
          player: 'useCardAfter',
        },
        filter(event, player) {
          if (event.card.storage && event.card.storage.ulvs) return false;
          if (!event.targets.length || !event.card) return false;
          if (event.card.name !== 'sha') return false;
          const card = {
            name: event.card.name,
            suit: event.card.suit || 'none',
            number: event.card.number || 1,
          };
          for (const i of event.targets) {
            if (!i.isAlive()) return false;
            if (!player.canUse(card, i, false, false)) {
              return false;
            }
          }
          return true;
        },
        content() {
          game.broadcastAll((player) => {
            if (player.sex === 'male') player.sex = 'female';
            else player.sex = 'male';
          }, player);
          const card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number);
          card.storage.ulvs = true;
          player.useCard(card, trigger.targets);
        },
        ai: {
          threaten: 2,
          effect: {
            player(card, player) {
              return 2;
            },
          },
        },
      },
      cvlm: {
        audio: 'ext:恒梦/audio/gjjlmoye:6',
        enable: 'phaseUse',
        usable: 2,
        prompt: '你可以重铸至多4张不同花色牌,淬炼一柄八荒剑.①湛卢②泰阿③龙渊④鱼肠⑤巨阙⑥工布⑦纯钧⑧承影',
        filter(event, player) {
          return player.hasCard(function (card) {
            return lib.filter.cardDiscardable(card, player, 'cvlm');
          }, 'he');
        },
        selectCard: [1, Infinity],
        position: 'he',
        filterCard(card, player) {
          let num = 0;
          for (const i of ui.selected.cards) num += i.number;
          num = num % 8;
          if (num == 0) num = 8;
          let str = '<li>当前点数为:'.small();
          str += num;
          str += '<li>以此法淬炼而成的八荒剑为:'.small();
          let name = `cvlm_${num}`;
          str += `${lib.translate[name]}`;
          _status.event.prompt2 = ui.create.dialog(str);
          return true;
        },
        check(card) {
          const player = _status.event.player;
          const name = 'cvlm_' + (card.number % 8 || 8);
          let selnum = ui.selected.cards.length * 2;
          if (!lib.card[name] || (_status.cvlm && _status.cvlm[name])) {
            if (!player.countCards('h', 'sha')) return 4 - get.value(card) - selnum;
            return 0;
          }
          return 7 - get.value(card) - selnum;
        },
        content() {
          let suity = ['heart', 'diamond', 'club', 'spade'].randomGet();
          let num = 0;
          for (let i of cards) num += i.number;
          num = num % 8;
          if (num == 0) num = 8;
          player.addSkill('cvlm_destroy');
          if (!_status.cvlm) _status.cvlm = {};
          let rand = 0.7;
          rand = 1;
          let name = 'cvlm_' + num;
          if (!lib.card[name] || _status.cvlm[name] || Math.random() > rand) {
            player.popup('杯具');
            game.log(player, '冶炼失败');
            let card = get.cardPile(function (card) {
              return card.name == 'sha';
            });
            if (card) player.gain(card, 'gain2');
            player.draw(cards.length);
          } else {
            _status.cvlm[name] = true;
            player.gain(game.createCard(name, suity, num), 'gain2');
            player.loseMaxHp();
          }
        },
        ai: {
          order: 10,
          result: {
            player(player) {
              return 1;
            },
          },
        },
      },
      cvlm_destroy: {
        trigger: { global: ['loseEnd', 'cardsDiscardEnd'] },
        forced: true,
        charlotte: true,
        filter(event, player) {
          let cs = event.cards;
          for (let i of cs) {
            if (i.name.indexOf('cvlm_') == 0 && get.position(i, true) == 'd') return true;
          }
          return false;
        },
        forceDie: true,
        content() {
          if (!_status.cvlm) _status.cvlm = {};
          let list = [],
            cs = trigger.cards;
          for (let i of cs) {
            if (i.name.indexOf('cvlm_') == 0 && get.position(i, true) == 'd') {
              _status.cvlm[i.name] = false;
              list.push(i);
            }
          }
          game.log(list, '已被移出游戏');
          game.cardsGotoSpecial(list);
          player.gainMaxHp();
        },
      },
    },
    dynamicTranslate: {
      mgpnpk(player) {
        if (player.storage.mgpnpk) return '【转】【锁】当你使用一张牌时,阴:你摸X张牌.<span class="bluetext">阳:你弃置X(你本阶段内发动过【漂萍】的次数)张牌.</span>';
        return '【转】【锁】当你使用一张牌时,<span class="bluetext">阴:你摸X(你本阶段内发动过【漂萍】的次数)张牌.</span>阳:你弃置X张牌';
      },
      uufa(player) {
        if (player.storage.uufa) return '转换技,<span class="bluetext">阴:当你使用牌指定其他角色后,你须将至少一半的手牌置于武将牌上,称为【发】.</span>阳,当你被牌指定后,你须弃置至少一半的【发】,你可以用一张牌当其中一张牌使用';
        return '转换技,阴:当你使用牌指定其他角色后,你须将至少一半的手牌置于武将牌上,称为【发】.<span class="bluetext">阳,当你被牌指定后,你须弃置至少一半的【发】,你可以用一张牌当其中一张牌使用.</span>';
      },
      wuxm(player) {
        if (!player.storage.wuxm) return '转换技,你的回合内,<span class="bluetext">阴:你可以切换牌堆顶的X张牌</span>.阳:你可以切换手牌.X为{<font color=#EE82EE>你使用的牌名字数之和</font>}与{<font color=#EE82EE>你使用牌堆顶的牌名字数之和</font>}之差';
        return '转换技,你的回合内,阴:你可以切换牌堆顶的X张牌.<span class="bluetext">阳:你可以切换手牌</span>.X为{<font color=#EE82EE>你使用的牌名字数之和</font>}与{<font color=#EE82EE>你使用牌堆顶的牌名字数之和</font>}之差';
      },
    },
    translate: {
      njdu1: '难度★',
      njdu2: '难度★★',
      njdu3: '难度★★★',
      njdu4: '难度★★★★',
      njdu5: '难度★★★★★',
      njdu6: '难度★★★★★★',
      njdu7: '难度★★★★★★★',
      hgmgt: '<font color=#FF3131>❁历史</font>',
      duuurf: '读书人',
      tcqm: '世外弦音',
      grnk: '兰亭序',
      bdhell: '白鹤梁神女',
      mgluxy: '如鹿',
      mgqbyilu: '浮萍',
      lqysyr: '鸢',
      yian: '易安',
      bdfamonv: '白发魔女',
      xnlsnv: '小龙女',
      ximffwxt: '西门飞雪',
      litdbd: '李太白',
      wolsfgiu: '卧龙凤雏',
      gjjlmoye: '干将莫邪',
      lsyk: '龙影',
      lsxn: '龙啸',
      lsxn_info: '①你的左手拿着最左端的牌,右手拿着最右端的牌.阴:你的左手操作时,带出右手的那张牌.阳:反之.当你的左手和右手攻击同一目标时,你摸一张牌.②若你本回合未因此技能摸过牌,你可以整理手牌,否则出牌阶段限一次,你可以弃置任意张牌,视为使用一张随机拳',
      lsyb: '龙吟',
      lsyb_info: '锁定技,你的回合内,当一张牌进入弃牌堆后,若本回合内没有过与此牌花色相同的卡牌进入过弃牌堆,则你获得一张随机拳.(随机拳的基础伤害为1,造成伤害后,结算的伤害值-1)',
      cvlm: '淬炼',
      cvlm_info: '出牌阶段限两次,分别由干将和莫邪铸造.你可以弃置任意张手牌淬炼一柄八荒剑,并消耗一点体力上限对其进行附魔.淬炼而成的八荒剑由弃置牌点数之和决定武器,(X为这些牌的点数和对8取余).此武器牌进入弃牌堆时,将其移出游戏',
      tmjl: '天匠',
      tmjl_info: '出牌阶段,你可以将装备区的牌移动至其他角色的装备区(可替换原装备).若你以此法移动了〖淬炼〗的衍生装备,你摸两张牌',
      ulvs: '双冢',
      ulvs_info: '锁定技.游戏开始时,你废除一个防具栏,获得一个额外的武器栏.当干将/莫邪使用杀后,莫邪/干将可以再对相同目标使用一张杀',
      ivxt: '吹雪',
      ivxt_info: '<font color=#FF0000>使用【杀】或普锦指定唯一目标时</font>,可使路径上其他角色成为目标',
      fwxm: '飞仙',
      fwxm_info: '你的多目标锦囊均视为不计入次数、无限距离的🃏杀',
      jmhf: '剑意',
      jmhff: '剑意',
      jmhf_info: '锁定技.<font color=#FF0000>你换位、使用牌指定目标、受到或造成伤害时</font>,目标积累一层剑意.<br><font color=#FF0000>其失去牌时</font>,你可消耗其四层剑意,你摸两张牌并获得2点蓄力值.此时你可立即消耗1点蓄力值对你攻击范围内已受伤角色出杀',
      lohx: '落花',
      lohx_info: '<font color=#FF0000>使用【杀】或普通锦囊牌指定上家或下家为目标时</font>,可依次进行换位,每次换位需消耗1点蓄力值',
      yujm: '御剑',
      yujm_info: '你可以将一张手牌当一张本回合未以此法使用过的普通锦囊牌使用(此转化牌须与以此法转化的手牌的合法目标数相同)',
      hxjm: '化剑',
      hxjm_info: '当你使用非伤害牌/伤害牌指定其他角色为目标时,你将其化为【剑】/你视为对已阵亡的【剑】使用伤害牌,将该牌的所有目标改为非【剑】角色.<br>当你使用牌时,你可以选定任意合法目标',
      lmvu: '连诛',
      lmvu_info: '当你击杀一名角色后,你将其化为【剑】,并获得一个额外的回合',
      mcifu: '词赋',
      mcifu_info: '出牌阶段限一次,你可以发动词赋,在三条词阙中选择一条,你随机从牌堆中获取一张与该词阙押韵的牌,并将此词阙记录入你的词赋中.当你连续用押韵牌时,你摸一张牌并刷新此技能',
      qsyk: '琼英',
      qsyk_info: '你本回合发动词赋次数达到:2时,视为拥有【转韵】,4时,【词赋】失效并视为拥有【落辞】',
      hemk: '和鸣',
      hemk_info: '当你的词阙组成联对时,你可以从对应词牌名对应意境中获取一名武将的所有技能直到回合结束(若没有则摸两张牌)',
      loci: '落辞',
      loci_info: '出牌阶段限一次,若你已开启一条词牌名,你可以选择一项已开启的词牌名,从词阙库选择该词牌名对应的两句词阙.若选择正确,你可以令一名其他角色获得该词牌名内其余的角色和鸣直到其回合结束(若没有则摸两张牌)',
      vryy: '转韵',
      vryy_info: '你使用技能后,下一张牌无次数距离限制,且不计入次数',
      vunk: '诛佞',
      vunkm_tag: '诛佞',
      vunk_info: "出牌阶段,<font color=#FF0000>你可以将任意数量的牌以任意顺序分配给任意其他角色</font>,视为使用一张本轮未以此法使用的锦囊牌.<br>'诛佞'牌对你可见,且不可对你使用.<br><font color=#FF0000>在你分配牌时或牌移动事件发生时,全场<诛佞>牌最多的角色发生变化时,</font>,你摸两张牌(若你的手牌数量为全场最多,则改为摸一张牌).<br><font color=#FF0000>若<诛佞>牌数量最多的角色的变化是由其他角色的使用或响应触发的</font>,则你重置本回合<诛佞>的发动次数.",
      fgxl: '封乡',
      fgxl_info: '当你发动诛佞后,你可以选择任意拥有诛佞的角色并观看其中X张牌,并视为其使用或弃置其中一张牌.<br>你的回合内,每当有其他人使用牌名字数小于X的牌,你重置馋逆.X为你上次诛佞给出的总牌数',
      wuxm: '无弦',
      wuxm_info: '转换技,你的回合内,阴:你可以切换牌堆顶的X张牌.阳:你可以切换手牌.<br>X为{<font color=#0066CC>你使用的牌名字数之和</font>}与{<font color=#0066CC>你使用牌堆顶的牌名字数之和</font>}之差',
      jqyb: '酒隐',
      jqyb_info: '你每使用一张酒,可以刷新五柳.当你被伤害牌指定时,你从牌堆中提取一张酒,视为使用之,本轮其他人与你的距离+1',
      wulq: '五柳',
      wulq_info: '你每使用处于手牌区的牌,与牌堆顶此牌名字数*5的牌混合洗牌,你一局游戏最多可使用5张不同牌名的牌(酒不计入限制,牌堆中与手牌中各五张)',
      mgqmxy: '谦逊',
      mgqmxy2: '谦逊',
      mgqmxy_info: '你成为牌目标时,可将手牌置于武将牌上,并观星X(该牌字数).你造成伤害或本回合结束时,可获得【谦逊】牌',
      doui: '度势',
      doui_info: '你受伤时,可最多使用X(伤害来源牌的字数)张武将牌上的牌,并获得其余牌',
      mglmyk: '连营',
      mglmyk_info: '你失去最后一张牌时,可令至多X(你此次失去牌的数量)人摸1张牌',
      uufa: '束发',
      uufa_info: '转换技,阴,当你使用牌指定其他角色为目标后,你须将至少一半的手牌(向上取整)置于你的武将牌上,称为【发】.阳,当你被牌指定后,你须弃置至少一半的【发】(向上取整),你可以将一张手牌当作该牌使用',
      bdfauhui: '伤逝',
      bdfauhui_info: '当你的手牌数小于X时,你可以将手牌摸至X张(X为你的【发】所包含的类型)',
      mgpnpk: '漂萍',
      mgpnpk_info: '转换锁定技,当你使用一张牌时,阴:你摸X(你本阶段内发动过【漂萍】的次数)张牌.阳:你弃置X张牌',
      mgvubi: '铸币',
      mgvubi_info: '当有♦️️牌因弃置而进入弃牌堆后,你可以令系统从牌堆/弃牌堆中检索一张【无中生有】,并将此牌置于牌堆顶',
      mglqvr: '流转',
      mglqvr_tag: '转',
      mglqvr_info: '锁定技,①你的回合内不于摸牌阶段而获得的牌称为<转>.②当你的<转>因弃置进入弃牌堆后,你将其置于武将牌上,称为<揣>',
      mgikli: '揣栗',
      mgikli_info: '锁定技,你的回合结束后,若你本回合发动<漂萍>的次数大于你此时的手牌数,你可至多获得X张<揣>,并将其余的<揣>置入弃牌堆,否则保留<揣>.(你本回合使用【漂萍】的次数与你此时手牌数的差值)',
      dyui: '遁世',
      dyuiy: '遁世',
      dyui_info: '你与其他角色的距离+已损失的体力值.你的体力上限-X(X为你装备区中【仁义礼智信】的数量)..<br>每轮开始时,选择【仁义礼智信】之一.<br>①仁:回复体力值,对应宝物,②义:受到伤害,对应武器③礼:摸牌,对应防具,④智:使用出牌阶段技能,对应+1马,⑤信:进入濒死状态,对应-1马.<br><font color=#FF0000>【仁义礼智信】属性完成时</font>,你可令该效果翻倍(智为重置技能)并更换标记,<br><font color=#FF0000>若本回合弃牌堆中有装备区没有的非装备牌</font>,你可将其一置入【仁义礼智信】对应装备区.<br><font color=#FF0000>每回合每种牌名限一次</font>,你可以视为使用一张装备区的牌',
      liyt: '鲤跃',
      liyt_info: '当可使用有牌因弃置进入弃牌堆时,你可以使用其中一张',
      icxi: '潮汐',
      icxi_info: '当你使用单目标牌对目标造成伤害时,可以视为对其下家使用相同的牌,直到下家是你',
      xrwo: '旋涡',
      xrwo_info: '你的回合外,当你对一名角色造成伤害时,可以依次获得从该角色往后直到你的角色随机1张牌,并依次交给从你往后直到该角色随机1张牌',
      suhv: '溯洄',
      suhv_info: '你的回合外,当你造成伤害时,你可以消耗X个【溯】(X为存活人数),反转游戏回合/卡牌效果执行顺序.每名角色回合开始时,你获得一个【溯】',
      liuhyb: '虹云卦士',
      lygx: '论卦',
      lygx_info: '当你的受到伤害/出牌阶段开始时,你可以与至多三名角色共同论卦,<<font color=#0080FF>天命之人</font>>摸X张牌(X为<<font color=#FF0000>卦命</font>>和参与论卦的角色数量之积),<br>若<<font color=#FF0000>卦命</font>>大于你的体力值,防止此伤害.<br>论卦:你可以选择一张牌,作为【卦】,此牌点数称为<<font color=#800080>所占卦数</font>>.所有【卦】的点数平均值×(你当前体力值/4)称为<<font color=#FFCC00>天命卦数</font>>.<<font color=#800080>所占卦数</font>>与<<font color=#FFCC00>天命卦数</font>>的差值称为<<font color=#FF0000>卦命</font>>,<<font color=#FF0000>卦命</font>>最小的角色称为<<font color=#0080FF>天命之人</font>>',
      lygx_append: '<span class="text" style="font-family: yuanli">昨夜星辰昨夜风,画楼西畔桂堂东. </span>',
      gxmk: '卦命',
      gxmk_info: '你的【卦】亮出后,你可以弃置一张牌,将此牌点数作为你最终的<<font color=#800080>所占卦数</font>>(<<font color=#FFCC00>天命卦数</font>>如常).你的手牌上限始终为4',
      yuuibujt: '遇事不决',
      yuuibujt_info: '①回合开始时,你清除【遇事不决①】记录的牌名,你可以依次记录任意个未于上次发动【遇事不决①】记录清除过的非装备牌牌名(对其他角色不可见,至多记录X个牌名,X为你的体力值).<br>②其他角色使用【遇事不决①】记录过的牌名的牌时,你可以移去一个【遇事不决①】中的此牌名的记录并摸一张牌.你可以选择与一名其他角色交换位置,该牌的使用者和目标均改为交换后位于原使用者和目标位置的角色',
      kewfiyfg: '可问春风',
      kewfiyfg_info: '当你受到伤害且该伤害即将使你死亡时,若你没有幻象,你可以化解之并分裂出3个幻象形成矩阵(继承原体力,至少为1).<br>幻象在你受到伤害时优先受到伤害.<br>回合开始时,你将幻象与本体合并,体力值变为所有幻象与本体的体力之和',
      ycyb: '邀饮',
      ycyb_info: '当你获得牌时,你可以将一张手牌当作【酒】赠送给其他手牌中没有【酒】的角色,你视为使用了一次【酒】.<br>你使用酒时,你摸一张牌.当你处于【酒】的状态时,你使用的牌不计入次数限制.<br>你使用酒不限次数,且效果不会消失',
      qklm: '青莲',
      qklm_info: '当你使用酒时,你本轮的攻击范围+1,且攻击范围只可通过此法调整.你只能对攻击范围内的目标使用牌',
      vexm: '谪仙',
      vexm_info: '当你使用牌指定唯一目标时,你可以如虚影般移动至该目标位置.若其红温,你回复1点体力,并亮出牌堆顶的一张牌.你可以立即使用此牌,或将其当【杀】使用(以此法使用的牌不计入使用次数限制)',
      qljb: '将进',
      qljb_info: '当你进行虚影移动时,获得等同于此次位移距离的<将进>标记.当你的<将进>标记数量达到场上角色数时,你解锁<将进酒>技能.出牌阶段,你可以消耗所有<将进>标记,收回场上所有角色手牌中的【酒】.每次执行此操作时,对你虚影所在位置的角色造成0.5点伤害',
      yzls: '游龙',
      yzls_info: '锁定技.当你使用非黑牌时,若你本局游戏使用过的牌数和为你体力值的倍数,你回复一点体力并获得一张随机的🃏锦囊牌',
      lrfg: '鸾凤',
      lrfg_info: '锁定技.当你使用非红牌时,若你本局游戏使用过的牌数和为你已损失体力值的倍数,你失去一点体力并令此牌获得全部应变效果',
    },
  };
  lib.config.characters.add('hgmgt');
  lib.config.all.characters.add('hgmgt');
  return hgmgt;
});
game.import('character', function (lib, game, ui, get, ai, _statu) {
  const hgmgm = {
    name: 'hgmgm',
    connect: true,
    characterTitle: {
      jmsove: '难度1i<br>运营1i<br>菜刀2i<br>保核1i',
      uijmddlirf: '难度3i<br>运营★<br>菜刀2i<br>保核3i',
      mkjmyeyk: '难度2i<br>运营2i<br>菜刀5i<br>保核1i',
      yydrvumgui: '难度3i<br>运营1i<br>菜刀1i<br>保核7i',
      hrmgytvh: '难度7i<br>运营1i<br>菜刀2i<br>保核1i',
      tdhuvigl: '难度5i<br>运营3i<br>菜刀5i<br>保核1i',
      tnybui: '难度2i<br>运营2i<br>菜刀2i<br>保核2i',
      rfrjve: '难度7i<br>运营4i<br>菜刀4i<br>保核1i',
      bkjnjtjtzi: '难度1i<br>运营1i<br>菜刀7i<br>保核1i',
    },
    character: {
      jmsove: ['male', 'wei', 4, ['hvwjvihg', 'hvwj'], []],
      uijmddlirf: ['male', 'qun', 6, ['uijmhvsu', 'mkyy'], []],
      mkjmyeyk: ['male', 'wei', '3/6', ['mkjm', 'hgyeyk'], []],
      yydrvumgui: ['male', 'wei', '2/4', ['vumg', 'jkhx'], []],
      hrmgytvh: ['male', 'wei', 3, ['yttr', 'xpzz'], []],
      tdhuvigl: ['female', 'qun', 3, ['hguu', 'tdhujbvi'], []],
      tnybui: ['female', 'wu', 3, ['tnyb', 'qpge'], []],
      rfrjve: ['male', 'jin', 3, ['coto', 'rfrjyixi', 'iewu'], []],
      bkjnjtjtzi: ['female', 'shu', 3, ['zicj', 'klre', 'yuqqbumj'], []],
    },
    characterIntro: {
      bkjnjtjtzi: '恒梦病娇扩展',
      tnybui: '用你的双眼见证,这五彩斑斓的旋律吧!',
      rfrjve: '生而有涯,恍惚间,便已蹉跎',
      uijmddlirf: '时间代理人的故事始于21世纪末,人类科学家意外发现了一种能够操纵时空的技术.这一技术最初是在研究量子力学和平行宇宙理论时偶然获得的.科学家们通过实验,打开了通往过去和未来的通道,然而,这一发现却引发了巨大的伦理和安全隐患.随着时间旅行技术的逐步完善,时间流的脆弱性也逐渐显现.无意的历史干涉可能导致无法挽回的时间线扭曲,甚至威胁到整个人类文明的生存.为了应对这一危机,联合国成立了<时间维护局>,一个专门负责监控和保护时间线的秘密组织.时间代理人是从全球最优秀的科学家、军事专家和历史学家中精挑细选出来的.他不仅需要具备卓越的智力和技能,还要拥有极高的道德标准和心理素质.初次成为时间代理人的过程极为严苛,入选者必须经过严格的训练,学习如何在不干扰历史进程的情况下完成任务.时间代理人的任务是修复因早期实验造成的时间线损伤.他首次执行任务时,发现了一名意图改变历史的叛逃科学家,他试图通过改变一场关键的历史战役来统治未来.时间代理人成功阻止了这一阴谋,并首次证明了保护时间线的重要性.从那时起,时间代理人便肩负起维护历史正确走向的重大责任.他不断穿梭于时空之间,确保时间流的稳定,守护着人类文明的真实面貌,不为人知地守护着过去、现在与未来',
      jmsove: '在一个信息洪流席卷全球的未来,检索者从小就展现出与众不同的天赋.他出生在一个偏远的电子垃圾收集区,那里充斥着过时的设备和被遗忘的数据.年幼的检索者常常独自拆解这些废弃的硬件,并意外接触到残存的古老数据片段.某天,他发现自己可以直觉式地读取并解码复杂的数据流,无需任何外部设备的辅助.检索者的特殊能力迅速引起了数据猎头的关注,他们开始训练他成为一名<数据检索者>.他在无数次的任务中成长,深入废弃的服务器和受损的数据库,成功提取出失落的技术与历史记录.随着时间的推移,检索者不仅成为一名顶尖的数据检索者,更逐渐被视为现代信息时代最宝贵的资源.他能迅速找到被隐藏或加密的真相,是掌控信息的关键人物,始终游走在真理与危险的边缘',
      mkjmyeyk: '在遥远的未来,人类社会进入了一个被科技垄断的时代.人工智能不仅统治了所有的智能设施,还掌控了世界上最先进的武器系统.人类曾经依赖的高科技,成为了他们最大的束缚.智能化的监控系统、无人作战兵器、纳米级的生化武器,无不在人工智能的冷酷计算下运行,日夜无休地监视和压迫着人类.即便如此,科技的崇拜并未因此减少,反而在某些人心中愈发坚固——他们相信,只有更强大的科技才能击败现有的科技.<br>然而,少数人意识到,这场战斗不能只依赖于科技本身.在他们看来,依赖科技的终极失败,正是因为人类忘记了最基本的力量——那些来自远古的智慧与技艺.于是,一个由历史学家、考古学家、武术大师和工程师组成的秘密组织悄然成立.他们相信,未来的希望不在于创造新的科技,而在于发掘并复原被时间掩埋的古老力量.<br>在人类最绝望的时刻,这个如同隐士一般的秘密组织发现了古代文献中提到的一个神秘武器——曳影神剑.据记载,这把剑在古代被视为神迹,能够在黑夜中无声无息地斩断敌人的命脉,其剑气如影随形,迅捷无比,难以捉摸.然而,随着时间的流逝,曳影神剑早已遗失,关于它的故事也被人们淡忘.<br>    他们深知依赖现有的科技已经无法逆转局势,决定追随这些古老的传说,寻找曳影神剑的残片.他们穿越了荒凉的废墟,深入了被遗弃的古老遗迹,终于在一座古庙的地宫中发现了神剑的碎片.虽然这些碎片已经断裂生锈,但其中蕴含的力量依然未曾泯灭.<br>    通过结合古代锻造技艺和现代纳米技术,组织成员成功地将这些残片重新铸造为一把新的神剑.复原后的曳影剑不仅保留了古代的神秘力量,还融入了现代科技的坚韧和锋利.这把剑的重生,不仅仅是一个奇迹,更是人类精神与古老智慧的象征.<br>    尽管人工智能统治了最先进的科技,但鸣剑曳影不属于任何已知的系统,它无法被破解,也无法被控制.这种方式看似原始,却充满了灵动与力量,甚至可以绕过人工智能的精密监控系统,击败那些看似不可战胜的机械战士......',
      yydrvumgui: '起初,有筑梦师在梦中建造了一座辉煌的城市,但因为某些原因将其抛弃,城市因为没有筑梦师的维护,城墙建筑越来越破烂.直到某一天,这座梦中城市诞生了自己的生命体,但这个生命体经常给人们制造灾难,久而久之,筑梦师就被认为是最邪恶的巫术.有一天,某个少年梦到了这座城市,城市中的幽灵呼唤他来拯救这座城市,懵懂的少年竟然答应了,点燃那盏灯就可以进入梦中城,并唤醒这座城市.少年便承担起筑梦师的职责,在梦中给这座城市修补,并将城中美景画了下来.不料被人发现了所画之物,正是那邪恶的梦中城,人们打算烧掉他所画的作品,少年自然拼死抵抗,将那盏灯丢向了大火,梦中城突然在空中出现.梦中城在云端复苏,一瞬间地动山摇,少年脚下开始崩塌,独角鲲从天而降,救下了这名少年,从此就有了少年与鲲的故事',
    },
    characterSort: {
      hgmgm: {
        njdu1: ['geve', 'mg', 'mgxuuc', 'mgqbyilu', 'mgluxy', 'hwbdui', 'bdhell', 'yuqk', 'gryb', 'demotver', 'jxqiromg', 'jmsove'],
        njdu2: ['mkjmyeyk', 'vumgui', 'hzyi', 'tcqm', 'litdbd', 'gjjlmoye', 'ximffwxt', 'grnk', 'yuyjjx'],
        njdu3: ['dmglxx', 'xrvl', 'uijmddlirf'],
        njdu4: ['xnlsnv', 'qiqqve', 'xqlo', 'tmeevimg'],
        njdu5: ['tmhg'],
        njdu6: ['iftmyi', 'siuivimg', 'lqysyr', 'yian', 'bdfamonv'],
        njdu7: ['yuhldadi'],
      },
    },
    skill: {
      hvwjvihg: {
        audio: 'ext:恒梦/audio/jmsove:4',
        mod: {
          aiOrder(player, card, num) {
            if (num <= 0 || get.itemtype(card) !== 'card' || get.type(card) !== 'equip') return num;
            let eq = player.getEquip(get.subtype(card));
            if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp)) return 0;
          },
        },
        enable: 'phaseUse',
        usable: 1,
        position: 'he',
        filterCard: lib.filter.cardDiscardable,
        discard: false,
        lose: false,
        delay: false,
        selectCard: [1, Infinity],
        check(card) {
          const player = _status.event.player;
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
          player.discard(cards);
          event.num = 1;
          const hs = player.getCards('h'),
            hslen = hs.length;
          if (!hslen) event.num = 0;
          for (let i = 0; i < hslen; i++) {
            if (!cards.includes(hs[i])) {
              event.num = 0;
              break;
            }
          }
          player.draw(event.num + cards.length);
        },
        ai: {
          order(item, player) {
            if (player.hasCard((i) => get.value(i) * 1.5 - 1 > Math.max(6, 9 - player.hp), 'he')) return 1;
            return 7;
          },
          result: {
            player: 1,
          },
          nokeep: true,
          skillTagFilter(player, tag, arg) {
            if (tag === 'nokeep') return (!arg || (arg && arg.card && arg.card.name === 'tao')) && player.isPhaseUsing() && !player.getStat().skill.hvwjvihg && player.hasCard((card) => card.name !== 'tao', 'h');
          },
          threaten: 1.55,
        },
      },
      hvwj: {
        trigger: {
          player: 'drawBegin',
        },
        silent: true,
        filter(event, player) {
          return ui.cardPile.childElementCount > 1;
        },
        mod: {
          aiValue(player, card, num) {
            const jmnum = player.getCards('he', (i) => i.name === card.name).length + player.storage.pregs.filter((i) => i.name === card.name).length;
            if (card.name === 'bagua' && player.hp <= Math.ceil(player.maxHp / 2)) {
              return num + 5;
            }
            const hasSha = player.countCards('h', 'sha') + player.storage.pregs.filter((p) => p.name === 'sha').length;
            const hasZhuge = player.countCards('he', 'zhuge') === 0 && !player.storage.pregs.some((p) => p.name === 'zhuge');
            if (hasSha > 1 && hasZhuge && card.name === 'zhuge') {
              return num + hasSha * 3;
            }
            if (card.name === 'wuzhong') {
              return num + 10;
            }
            const defensiveCards = ['shan', 'jiedao', 'wuxie', 'huogong', 'guohe'];
            if (defensiveCards.includes(card.name)) {
              return num - 4 - jmnum * 4;
            }
            if (hasSha > 0 && hasZhuge && card.name === 'sha') {
              return num - 5;
            }
            if (player.hasCard((card) => card.name === 'zhuge', 'hes') && card.name === 'sha') {
              return num + 3;
            }
            const totalCards = player.countCards('h') + player.storage.pregs.length;
            const cardCount = player.getCards('he', (i) => i.name === card.name).length + player.storage.pregs.filter((i) => i.name === card.name).length;
            if (totalCards <= player.hp + cardCount && ['tao', 'taoyuan'].includes(card.name)) {
              return num - 3;
            }
            if (get.type(card) === 'equip') {
              const subtype = get.subtype(card);
              const hasSameSubtype = [...player.getCards('he'), ...player.storage.pregs].some((x) => get.subtype(x) === subtype);
              return hasSameSubtype ? num - 20 : num - 3;
            }
            return num - jmnum / 2;
          },
        },
        hiddenCard(player, name) {
          if (!player.storage.pregs) return false;
          return player.storage.pregs.includes(name);
        },
        init: (player) => (player.storage.pregs = []),
        content() {
          const cardPile = ui.cardPile;
          const num = cardPile.childElementCount;
          const pregs = [];
          let value = player.getUseValue(cardPile.firstChild);
          let aival = get.value(cardPile.firstChild);
          let aiuse = get.useful(cardPile.firstChild);
          const numm = trigger.num;
          for (let i = 1; i < num; i++) {
            const card = cardPile.childNodes[i];
            let bool2 = false;
            if (get.type(card) === 'equip') {
              const cardSubtype = get.subtype(card);
              const handAndPreEquipments = [...player.getCards('he'), ...pregs];
              bool2 = handAndPreEquipments.some((x) => get.subtype(x) === cardSubtype);
            }
            if (bool2) continue;
            const val = player.getUseValue(card);
            const av = get.value(card);
            const au = get.useful(card);
            if (av + val / 2 >= aival + value / 2) {
              value = val;
              aival = av;
              aiuse = au;
              pregs.push(card);
              player.storage.pregs.push(card);
            }
          }
          const vuge = get.cardPile((card) => card.name === 'zhuge' && !pregs.includes(card));
          if (vuge && player.countCards('h', 'sha') + pregs.filter((p) => p.name === 'sha').length > 1 && player.countCards('he', 'zhuge') === 0 && !pregs.some((p) => p.name === 'zhuge')) {
            pregs.push(vuge);
          }
          game.log(pregs.length);
          for (let i = 0; i < numm; i++) {
            if (pregs.length) {
              const card = pregs.pop();
              const insertBeforeNode = i === 0 ? cardPile.firstChild : cardPile.childNodes[i];
              cardPile.insertBefore(card, insertBeforeNode);
            }
          }
          player.storage.pregs = [];
        },
        ai: {
          effect: {
            player_use(card, player, target) {
              if (get.type(card) === 'delay') return [1, 0.5];
              return;
            },
          },
        },
        forced: true,
        _priority: 1,
        group: 'hvwj_judge',
        subSkill: {
          judge: {
            trigger: {
              global: 'judgeBegin',
            },
            forced: true,
            charlotte: true,
            silent: true,
            filter(event, player) {
              return !event.directresult;
            },
            content() {
              const len = ui.cardPile.childElementCount;
              if (get.attitude(player, trigger.player) > 0) {
                let tempcard = null,
                  temp = -Infinity;
                for (let i = 0; i < len; i++) {
                  let card = ui.cardPile.childNodes[i];
                  let temp2 = trigger.judge(card);
                  if (temp2 > temp) {
                    tempcard = card;
                    temp = temp2;
                  }
                }
                if (tempcard) trigger.directresult = tempcard;
              } else {
                let tempcard = null,
                  temp = Infinity;
                for (let i = 0; i < len; i++) {
                  let card = ui.cardPile.childNodes[i];
                  let temp2 = trigger.judge(card);
                  if (temp2 < temp) {
                    tempcard = card;
                    temp = temp2;
                  }
                }
                if (tempcard) trigger.directresult = tempcard;
              }
            },
            ai: {
              luckyStar: true,
            },
            popup: false,
            _priority: 1,
          },
        },
      },
      uijmhvsu: {
        audio: 'ext:恒梦/audio/uijmddlirf:6',
        trigger: { global: 'phaseBeginStart' },
        init(player) {
          if (!player.storage.uijma) player.storage.uijma = 1;
        },
        silent: true,
        intro: {
          content: '回合结束后,场上及牌堆中的牌将回复到回合前的状态',
        },
        content() {
          let List, hp, handcards1, handcards2, judges, equips, viewAs, i, j;
          player.storage.data = [];
          player.storage.cardPile = [];
          for (const i of game.players) {
            hp = i.hp;
            handcards1 = Array.from(i.node.handcards1.childNodes);
            handcards2 = Array.from(i.node.handcards2.childNodes);
            judges = Array.from(i.node.judges.childNodes);
            equips = Array.from(i.node.equips.childNodes);
            viewAs = judges.map((j) => j.viewAs);
            const datepush = {
              player: i,
              handcards1,
              handcards2,
              judges,
              equips,
              viewAs,
              value: handcards1.length + handcards2.length + equips.length - judges.length,
            };
            List = ['hp', 'maxHp', 'sex', 'className', 'name', 'name1', 'name2', 'group', 'storage', 'skipList', 'hujia', 'skills', 'additionalSkills', 'hiddenSkills', 'forbiddenSkills', 'disabledSkills', 'tempSkills', 'awakenedSkills', 'phaseNumber'];
            List.forEach((key) => {
              if (key !== 'storage') {
                datepush[key] = i[key];
              } else {
                datepush.storage = Object.assign({}, i.storage);
              }
            });
            player.storage.data.push(datepush);
          }
          player.storage.cardPile = Array.from(ui.cardPile.childNodes);
          if (player.storage.uijma <= 1) {
            player.unmarkSkill('uijmhvsu');
          }
          ui.updatehl();
          player.storage.uijma++;
        },
        group: 'uijmhvsu_wake',
        subSkill: {
          wake: {
            audio: 'uijmhvsu',
            prompt: '对此结局是否不满,若不满意,失去一点体力,重新开始此回合',
            trigger: { global: ['phaseAfter', 'dieBefore'] },
            _priority: 9,
            filter(event, player) {
              return player.storage.uijma > 1;
            },
            check(event, player) {
              if (event.name === 'phase') {
                let alleff = 0;
                const history = event.player.getHistory('useCard'),
                  liuilen = history.length;
                for (let i = 0; i < liuilen; i++) {
                  for (const j of history[i].targets) alleff += get.effect(j, history[i].card, history[i].player, player);
                }
                return alleff < -3 - player.getDamagedHp() * 0.8;
              } else {
                if (get.attitude(player, event.player) < 4) return false;
                const savableCardsCount = player.countCards('h', function (card) {
                  let mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                  if (mod2 !== 'unchanged') return mod2;
                  let mod = game.checkMod(card, player, event.player, 'unchanged', 'cardSavable', player);
                  if (mod !== 'unchanged') return mod;
                  let savable = get.info(card).savable;
                  if (typeof savable === 'function') {
                    savable = savable(card, player, event.player);
                  }
                  return savable;
                });
                if (savableCardsCount >= 1 - event.player.hp) return false;
                if (event.player === player || event.player === get.zhu(player)) return true;
                return !player.hasUnknown();
              }
            },
            async content(event, trigger, player) {
              trigger.cancel();
              player.markSkill('uijmhvsu');
              const storage = player.storage.data;
              storage.forEach((i) => {
                const current = i.player;
                if (current.isAlive()) {
                  current.removeEquipTrigger();
                  game.broadcastAll(function (c) {
                    c.getCards('hej').forEach((i) => i.discard());
                  }, current);
                }
              });
              const storagex = player.storage.data;
              let current, i, j;
              for (const i of storagex) {
                current = i.player;
                if (current.isAlive()) {
                  game.broadcastAll(
                    function (i, j, current) {
                      for (j of i.handcards1) {
                        if (j.parentNode == ui.discardPile || j.parentNode == ui.cardPile) {
                          current.node.handcards1.appendChild(j);
                        } else {
                          current.node.handcards1.appendChild(game.createCard2(j));
                        }
                      }
                      for (j of i.handcards2) {
                        if (j.parentNode == ui.discardPile || j.parentNode == ui.cardPile) {
                          current.node.handcards2.appendChild(j);
                        } else {
                          current.node.handcards2.appendChild(game.createCard2(j));
                        }
                      }
                      for (j of i.equips) {
                        let sut;
                        switch (get.subtype(i)) {
                          case 'equip1':
                            sut = 1;
                            break;
                          case 'equip2':
                            sut = 2;
                            break;
                          case 'equip3':
                            sut = 3;
                            break;
                          case 'equip4':
                            sut = 4;
                            break;
                          case 'equip5':
                            sut = 5;
                            break;
                        }
                        if (!player.hasEnabledSlot(sut)) continue;
                        if (j.parentNode == ui.discardPile || j.parentNode == ui.cardPile) {
                          j.style.transform = '';
                          current.equip(j);
                        } else {
                          current.equip(game.createCard2(j));
                        }
                      }
                      for (j of i.judges) {
                        if (j.parentNode == ui.discardPile || j.parentNode == ui.cardPile) {
                          j.style.transform = '';
                          j.viewAs = i.viewAs[j];
                          if (j.viewAs && j.viewAs != j.name && j.classList.contains('fullskin')) {
                            j.classList.add('fakejudge');
                            j.node.background.innerHTML = lib.translate[j.viewAs + '_bg'] || get.translation(j.viewAs)[0];
                          }
                          current.node.judges.appendChild(j);
                        }
                      }
                      for (const mark in current.marks) {
                        current.unmarkSkill(mark);
                      }
                      for (const x in i) {
                        if (['player', 'handcards1', 'handcards2', 'judges', 'equips', 'viewAs', 'value'].includes(x)) continue;
                        current[x] = i[x];
                      }
                      for (const mark in current.storage) {
                        if (lib.skill[mark] && (lib.skill[mark].mark || lib.skill[mark].marktext)) {
                          current.markSkill(mark);
                        }
                      }
                      current.update();
                    },
                    i,
                    j,
                    current
                  );
                }
              }
              let data = {};
              for (const i of game.players) {
                data[i.dataset.position] = {
                  h: get.cardsInfo(i.getCards('h')),
                  e: get.cardsInfo(i.getCards('e')),
                  j: get.cardsInfo(i.getCards('j')),
                };
              }
              game.broadcastAll(function (player) {
                while (ui.cardPile.childElementCount) {
                  ui.cardPile.firstChild.discard();
                }
                for (const i of player.storage.cardPile) {
                  if (i.parentNode == ui.discardPile) {
                    ui.cardPile.appendChild(i);
                  } else {
                    ui.cardPile.appendChild(game.createCard(i));
                  }
                }
                ui.updatehl();
              }, player);
              player.loseHp()._triggered = null;
              trigger.player.phase('nodelay');
              player.storage.uijma = 0;
            },
            ai: {
              jueqing: true,
            },
          },
        },
      },
      mkyy: {
        forced: true,
        audio: 'uijmhvsu',
        popup: false,
        _priority: 6,
        trigger: {
          global: 'useCard1',
        },
        getLast() {
          const cards = [];
          for (const current of game.filterPlayer()) {
            const history = current.actionHistory;
            if (history.length < 2) continue;
            if (history[history.length - 2].isMe) {
              const evts = history[history.length - 2].useCard,
                uijmlen = evts.length;
              for (let i = uijmlen - 1; i >= 0; i--) {
                const evt = evts[i];
                const evtx = evt.getParent('phaseUse');
                if (evtx && evtx.player == current)
                  cards.push({
                    name: evt.card.name,
                    nature: evt.card.nature,
                  });
              }
            }
          }
          return cards;
        },
        init(player) {
          player.storage.Thiscard = null;
        },
        filter(event, player) {
          if (player.storage.uijma > 1) return false;
          if (event.card.name === player.storage.Thiscard) return false;
          if (!event.targets.length) return false;
          const cards = lib.skill.mkyy.getLast(),
            ec = event.card;
          return cards.some((i) => {
            return ec.name === i.name && ec.nature === i.nature;
          });
        },
        async content(event, trigger, player) {
          game.broadcastAll(function () {
            ui.clear();
          });
          event.cleared = true;
          for (const i of game.players) {
            i.classList.remove('target');
          }
          trigger.targets.removeArray(trigger.targets);
          trigger.untrigger();
          player.storage.Thiscard = trigger.card.name;
          player.when({ global: 'useCardAfter' }).then(() => {
            player.storage.Thiscard = null;
          });
          if (get.type(trigger.card) == 'delay' || get.type(trigger.card) == 'equip') {
            const resulta = await player
              .chooseTarget(true, event.unchosen ? get.prompt('mkyy') : null, '选择一名角色成为' + get.translation(trigger.cards) + '的目标')
              .set('ai', function (target) {
                let trigger = _status.event.getTrigger();
                let player = _status.event.player;
                return get.effect(target, trigger.card, trigger.player, target) * get.attitude(player, target);
              })
              .set('card', trigger.card)
              .set('targets', trigger.targets)
              .forResult();
            if (resulta.bool) {
              event.targets = resulta.targets;
            }
          } else {
            const resultb = await player
              .chooseTarget(true, event.unchosen ? get.prompt('mkyy') : null, '改变' + get.translation(trigger.card) + '的目标', [1, Infinity])
              .set('ai', function (target) {
                let trigger = _status.event.getTrigger();
                let player = _status.event.player;
                return get.effect(target, trigger.card, trigger.player, target) * get.attitude(player, target);
              })
              .set('card', trigger.card)
              .set('targets', trigger.targets)
              .forResult();
            if (resultb.bool) {
              event.targets = resultb.targets;
            }
          }
          if (event.targets) {
            player.line(event.targets, 'key');
            trigger.targets.addArray(event.targets);
            game.log(event.targets, '代替成为了', get.translation(trigger.card), '的目标');
          }
        },
      },
      mkjm: {
        audio: 'ext:恒梦/audio/mkjmyeyk:12',
        trigger: {
          player: 'damageEnd',
          source: 'damageSource',
        },
        filter(event, player) {
          const name = [player.name, player.name1, player.name2];
          if (!name.includes('mkjmyeyk')) return false;
          return !player.storage.hgyeyk;
        },
        forced: true,
        fixed: true,
        charlotte: true,
        persevereSkill: true,
        superCharlotte: true,
        sole: true,
        async content(event, trigger, player) {
          const selnum = player.getDamagedHp();
          for (const i of game.players) {
            i.classList.remove('target');
          }
          const result = await player
            .chooseTarget([1, selnum], get.prompt('mkjm'), '令至多' + get.cnNumber(selnum) + '名角色进行斩杀')
            .set('filterTarget', lib.filter.notMe)
            .set('ai', function (target) {
              let att = get.attitude(player, target);
              if (att > 0) return 0;
              if (target.isLinked() && get.effect(target, { name: 'tiesuo' }, player, player) > 0) return -1.6 * att;
              if (ui.selected.targets.length >= Math.sqrt(1 + selnum)) return 0;
              if (target != player) return -1.3 * att;
              return -att;
            })
            .forResult();
          if (!result.bool) return;
          player.storage.mkjmt = [];
          event.pregai = 0;
          const targets = result.targets,
            yeykfuke = player.getDamagedHp();
          targets.forEach(function (i) {
            i.storage.ukjm = 0;
          });
          const num2 = 1 + yeykfuke - targets.length;
          event.zstargets = [];
          for (let j = 0; j < num2; j++) {
            event.zstargets.push(...targets);
          }
          while (event.zstargets.length) {
            const nowtarget = event.zstargets.shift();
            let prejx = 0;
            player.tnww(nowtarget);
            if (nowtarget.isIn()) {
              if (!player.storage.mkjmt.includes(nowtarget)) {
                const skills1 = nowtarget.getSkills(null, false, false).filter(function (i) {
                  if (!lib.translate[i + '_info'] || lib.translate[i + '_info'].length < 10) return false;
                  const info = get.info(i);
                  return info && !info.charlotte;
                }),
                  skills2 = lib.character[nowtarget.name][3],
                  skills = [...skills1, ...skills2];
                if (nowtarget.storage.mkjmdate && nowtarget.storage.mkjmdate.length) {
                  skills.removeArray(Array.from(nowtarget.storage.mkjmdate, ({ skill }) => skill));
                }
                skills.unique();
                game.log(skills);
                if (skills.length) {
                  const jmvi = Array.from(skills, (i) => Object.keys(lib.skill[i]).length),
                    mnuu = Array.from(skills, (i) => (lib.translate[i + '_info'] ? lib.translate[i + '_info'].length : 0)),
                    zvih = Math.max(...jmvi),
                    skillx = skills[jmvi.indexOf(zvih)];
                  game.log('键值对数量' + jmvi);
                  game.log(zvih, skillx);
                  if (!nowtarget.storage.mkjmdate) nowtarget.storage.mkjmdate = [];
                  for (const i of Object.keys(lib.skill[skillx])) {
                    game.log(lib.skill[skillx][i]);
                    if (lib.skill[skillx][i] === true) {
                      prejx++;
                      nowtarget.storage.mkjmdate.push({
                        skill: skillx,
                        key: i,
                      });
                      game.broadcastAll(
                        function (skillx, i) {
                          lib.skill[skillx][i] = false;
                        },
                        skillx,
                        i
                      );
                    }
                  }
                  if (nowtarget.storage.mkjmdate && Array.from(nowtarget.storage.mkjmdate, ({ skill }) => skill).includes(skillx)) {
                    nowtarget.disableSkill('mkjmtpqi', skillx);
                    nowtarget.addSkill('mkjmtpqi');
                  }
                }
                event.pregai += Math.max(1, prejx);
                player.storage.mkjmt.push(nowtarget);
              }
              await player.useCard({ name: 'sha', storage: { mkjm: true } }, nowtarget, false).set('oncard', () => {
                get.event().customArgs.default.customSource = {
                  isDead: () => true,
                };
              });
            }
            game.asyncDelay(0.5);
          }
          player.storage.mkjmt.forEach(function (i) {
            i.storage.ukjm = undefined;
          });
          player.storage.mkjmt = [];
          game.broadcastAll(
            function (p, a, b) {
              p.style.transform = a;
              p.style.zIndex = b;
            },
            player,
            player.storage.vexm1,
            player.storage.vexm2
          );
          const choices = Array.from({
            length: Math.max(1, event.pregai),
          }).map((_, i) => get.cnNumber(i + 1, true));
          const result2 = await player
            .chooseControl(choices, 'cancel2')
            .set('prompt', get.prompt('mkjm'))
            .set('prompt2', '你可以摸至多' + get.cnNumber(choices.length) + '张牌,但是你获得等量个【曳影】标记')
            .set('ai', () => {
              return choices.length - 1;
            })
            .set(
              'choice',
              (function () {
                const cards = player.getCards('hs', (card) => card.name !== 'sha' && player.hasValueTarget(card));
                const damage = Math.min(player.getCardUsable({ name: 'sha' }), player.countCards('hs', 'sha')) + cards.filter((i) => get.tag(i, 'damage')).length;
                if (player.isPhaseUsing() || player.hp + player.hujia + player.countCards('hs', (card) => get.tag(card, 'recover')) > 2) {
                  if (damage) return Math.min(choices.length - 1, cards.length - damage);
                  return Math.min(choices.length - 1, cards.length - 1);
                }
                return choices.length - 1;
              })()
            )
            .forResult();
          if (result2.control === 'cancel2') return;
          const num = result2.index + 1;
          player.draw(num);
          await player.addMark('hgyeyk', num);
        },
        init(player) {
          player.storage.removeSkillDate = [];
          player.storage.mkjmda = [];
          player.storage.mkjmt = [];
          player.storage.vexm1 = player.style.transform;
          player.storage.vexm2 = player.style.zIndex;
          if (!player.storage.hgyeyk) player.storage.hgyeyk = 0;
        },
        ai: {
          maixue: true,
          skillTagFilter(player) {
            const name = [player.name, player.name1, player.name2];
            if (!name.includes('mkjmyeyk')) return false;
            return !player.storage.hgyeyk;
          },
          effect: {
            player_use(card, player, target) {
              const name = [player.name, player.name1, player.name2];
              if (!name.includes('mkjmyeyk')) return;
              if (!player.storage.hgyeyk) {
                if (get.tag(card, 'damage')) {
                  return [1, 2];
                }
              }
              if (player.storage.hgyeyk) {
                return [1, 0.5];
              }
            },
          },
        },
        mod: {
          aiOrder(player, card, num) {
            const name = [player.name, player.name1, player.name2];
            if (!name.includes('mkjmyeyk')) return;
            if (get.tag(card, 'damage')) return player.storage.hgyeyk ? num / 3 : num + 6;
          },
        },
        group: ['mkjm_damage'],
        subSkill: {
          damage: {
            trigger: { player: 'useCard1' },
            silent: true,
            charlotte: true,
            forced: true,
            firstDo: true,
            filter(event, player) {
              const name = [player.name, player.name1, player.name2];
              if (!name.includes('mkjmyeyk')) return false;
              return event.card && event.card.storage && event.card.storage.mkjm;
            },
            content() {
              let dam = 0.5 - trigger.targets[0].storage.ukjm;
              if (dam > 0.1 && ![0.3, 0.4, 0.5].includes(dam)) dam = 0.2;
              trigger.baseDamage = Math.max(0.1, dam);
              trigger.targets[0].storage.ukjm += 0.1;
              trigger.directHit.addArray(game.players);
              trigger.untrigger(true);
              trigger._triggered = null;
            },
            ai: {
              directHit_ai: true,
              skillTagFilter(player, tag, arg) {
                const name = [player.name, player.name1, player.name2];
                if (!name.includes('mkjmyeyk')) return false;
                return arg.card.storage && arg.card.storage.mkjm;
              },
            },
          },
        },
      },
      hgyeyk: {
        mod: {
          globalTo(source, player, distance) {
            const name = [player.name, player.name1, player.name2];
            if (!name.includes('mkjmyeyk')) return;
            return distance + player.storage.hgyeyk;
          },
          cardUsable(card, player, num) {
            const name = [player.name, player.name1, player.name2];
            if (!name.includes('mkjmyeyk')) return;
            if (!player.storage.hgyeyk) return;
            return Infinity;
          },
        },
        _priority: 1,
        forced: true,
        fixed: true,
        charlotte: true,
        persevereSkill: true,
        superCharlotte: true,
        sole: true,
        trigger: {
          player: 'useCard',
        },
        filter(event, player) {
          const name = [player.name, player.name1, player.name2];
          if (!name.includes('mkjmyeyk')) return false;
          return true;
        },
        content() {
          player.removeMark('hgyeyk', 1);
        },
        marktext: '曳影',
        intro: {
          name: '曳影',
          name2: '影',
          content: '曳影剩余黑色牌数:#张',
        },
      },
      mkjmtpqi: {
        trigger: { player: 'useCard' },
        forced: true,
        filter(event, player) {
          if (!get.tag(event.card, 'damage')) return false;
          return player.storage.mkjmdate && player.storage.mkjmdate.length;
        },
        async content(event, trigger, player) {
          const prerem = player.storage.mkjmdate.pop(),
            grjmskill = prerem.skill;
          game.broadcastAll(function (prerem) {
            lib.skill[prerem.skill][prerem.key] = true;
          }, prerem);
          if (!player.storage.mkjmdate.length || player.storage.mkjmdate.every(({ skill }) => skill !== grjmskill)) {
            for (const i of Object.keys(player.disabledSkills)) {
              if (i == grjmskill) {
                player.disabledSkills[i].remove('mkjmtpqi');
                if (!player.disabledSkills[i].length) delete player.disabledSkills[i];
              }
            }
          }
          if (!player.storage.mkjmdate.length) player.removeSkill('mkjmtpqi');
        },
        onremove(player, skill) {
          for (const prerem of player.storage.mkjmdate) {
            game.broadcastAll(function (prerem) {
              lib.skill[prerem.skill][prerem.key] = true;
            }, prerem);
          }
          game.log('已移除');
          player.storage.mkjmdate = [];
          player.enableSkill(skill);
        },
        mark: true,
        charlotte: true,
        intro: {
          content(storage, player, skill) {
            const list = [];
            for (const i in player.disabledSkills) {
              if (player.disabledSkills[i].includes(skill)) list.push(i);
            }
            if (list.length) {
              let str = '失效技能:';
              for (let i = 0; i < list.length; i++) {
                let str2 = '';
                for (const j of player.storage.mkjmdate) {
                  if (j.skill === list[i]) str2 += j.key + ';';
                }
                if (lib.translate[list[i] + '_info']) str += get.translation(list[i]) + ':损伤数据:' + str2 + '<br>';
              }
              return str.slice(0, str.length - 4);
            }
          },
        },
      },
      vumg: {
        audio: 'ext:恒梦/audio/yydrvumgui:3',
        trigger: { global: 'roundStart' },
        lastDo: true,
        _priority: 1,
        init() {
          game.addGlobalSkill('vumg_ai');
        },
        filter(event, player) {
          return player.countCards('h');
        },
        async cost(event, trigger, player) {
          for (const i of game.players) {
            i.removeGaintag('vumg_tag');
          }
          player.storage.vumg = [];
          event.result = await player
            .chooseCard('请选择一张牌进行手搓梦境', player.getCards('he'))
            .set('ai', function (card) {
              return 10 - get.value(card);
            })
            .forResult();
        },
        async content(event, trigger, player) {
          await game.cardsGotoOrdering(event.cards);
          let ounum = 0,
            yivrhx = [];
          eveend = false;
          while (eveend === false) {
            const cards = event.cards;
            event.videoId = lib.status.videoId++;
            game.broadcastAll(
              function (player, id, cards) {
                let str;
                if (player == game.me && !_status.auto) {
                  str = '筑梦:请筑造梦境';
                } else {
                  str = '筑梦';
                }
                const dialog = ui.create.dialog(str, ounum % 2 == 0 ? cards : [cards, 'blank']);
                dialog.videoId = id;
              },
              player,
              event.videoId,
              cards
            );
            event.time = get.utc();
            game.addVideo('showCards', player, ['筑梦', get.cardsInfo(cards)]);
            game.addVideo('delay', null, 2);
            const links = await player
              .chooseButton(1)
              .set('dialog', event.videoId)
              .set('filterButton', function (button) {
                if (Math.floor(ounum / 2) >= player.maxHp) return false;
                return !['vumgmwmg', 'vumgeemg'].includes(button.link.name);
              })
              .set('ai', function (button) {
                let player = _status.event.player,
                  name = button.link.name,
                  val = get.value(button.link, player);
                if (['vumgmwmg', 'vumgeemg'].includes(name)) return true;
                if (name === 'tao') return 8 - (val + 2 * Math.min(3, 1 + player.getDamagedHp()));
                if (name === 'jiu' && player.hp < 3) return 8 - (val + 2 * (2.8 - player.hp));
                if (name === 'wuxie' && player.countCards('j') && !player.hasWuxie()) return 8 - (val + 5);
                if (player.hp > 1 && player.hasSkill('renxin') && player.hasFriend() && get.type(button.link) === 'equip') return 4 - val;
                return 8 - val;
              })
              .forResultLinks();
            game.broadcastAll('closeDialog', event.videoId);
            if (!links || !links.length) {
              eveend = true;
            }
            if ((ounum + 2) % 2 !== 0 && eveend === false) {
              await game.broadcastAll(function (cards) {
                cards[0].init([
                  cards[0].suit,
                  cards[0].number,
                  Math.random() > (ounum + 1) / 20
                    ? lib.inpile
                      .filter((i) => {
                        return !yivrhx.includes(i) && get.type(i) !== 'equip';
                      })
                      .randomGet()
                    : Math.random() > player.hp / player.maxHp
                      ? 'vumgmwmg'
                      : 'vumgeemg',
                ]);
              }, cards);
              yivrhx.push(cards[0].name);
            }
            game.log(yivrhx);
            ounum++;
          }
          await player.gain(event.cards[0], 'gain2').gaintag.add('vumg_tag');
          player.markAuto('vumg', event.cards[0]);
          if (!game.hasPlayer((current) => current != player)) return;
          game.log('选择交给其他角色');
          let targets = game
            .filterPlayer(
              (i) => {
                if (get.value(event.cards[0]) > 0) return get.attitude(player, i) > 0;
                else return get.attitude(player, i) <= 0;
              },
              null,
              true
            )
            .sortBySeat(
              get.zhu(player) ||
              game.findPlayer((i) => {
                return i.seatNum === 1;
              })
            );
          if (targets.includes(player)) targets = targets.slice(0, targets.indexOf(player));
          const result1 = await player
            .chooseTarget(true, `将${get.translation(event.cards[0])}交给一名角色？`)
            .set('ai', (target) => {
              let idx = _status.event.targets.indexOf(target);
              if (idx < 0) return -1;
              return 1 / (idx + 1);
            })
            .set('targets', targets)
            .forResult();
          if (!result1.bool || result1.targets === player) return;
          let target = result1.targets[0];
          ui.updatehl();
          player.line(target, 'green');
          if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.2);
          target.gain(event.cards[0], 'gain2').set('giver', player).gaintag.add('vumg_tag');
        },
        group: ['vumg_transfer', 'vumg_addTag'],
        subSkill: {
          transfer: {
            audio: 'vumg',
            trigger: {
              global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter', 'equipAfter'],
            },
            forced: true,
            filter(event, player) {
              if (
                !game.hasPlayer((current) => {
                  return !player.getStorage('vumg_transfer').includes(current);
                })
              )
                return false;
              return event.getd().some((card) => {
                return get.position(card) == 'd' && player.getStorage('vumg').includes(card);
              });
            },
            async content(event, trigger, player) {
              const cards = trigger.getd().filter((card) => {
                return get.position(card) == 'd' && player.getStorage('vumg').includes(card);
              }),
                targets = game
                  .filterPlayer((current) => {
                    return !player.getStorage('vumg_transfer').includes(current);
                  })
                  .sortBySeat(_status.currentPhase);
              if (targets.length && targets[0] === _status.currentPhase && !_status.currentPhase.getCardUsable('sha')) targets.push(targets.shift());
              event.cards = cards;
              for (const i of game.players) {
                i.classList.remove('target');
              }
              const val = get.value(cards[0]);
              const result = await player
                .chooseTarget(
                  `筑梦:将${get.translation(cards)}交给一名可选角色`,
                  (card, player, target) => {
                    return !player.getStorage('vumg_transfer').includes(target);
                  },
                  true
                )
                .set('ai', (target) => {
                  let att = get.sgnAttitude(_status.event.player, target),
                    idx = 1 + _status.event.targets.indexOf(target);
                  valcop = _status.event.val;
                  if (att < 0) return (-att - 1 / idx) * valcop;
                  return (att + 1 / idx) * valcop;
                })
                .set('targets', targets)
                .set('val', val)
                .forResult();
              if (!result.bool) return;
              const target = result.targets[0];
              if (!player.storage.vumg_transfer) {
                player.when({ global: 'phaseAfter' }).then(() => {
                  player.unmarkSkill('vumg_transfer');
                  delete player.storage.vumg_transfer;
                });
              }
              player.markAuto('vumg_transfer', target);
              target.gain(cards, 'gain2').set('giver', player).gaintag.add('vumg_tag');
            },
            intro: {
              content: '本回合已交给过$',
            },
          },
          addTag: {
            trigger: {
              global: ['gainAfter', 'loseAsyncAfter'],
            },
            charlotte: true,
            popup: false,
            silent: true,
            lastDo: true,
            filter(event, player) {
              return game.hasPlayer((current) => {
                const cards = event.getg(current);
                return cards.some((card) => player.getStorage('vumg').includes(card));
              });
            },
            content() {
              game.countPlayer((current) => {
                const cards = trigger.getg(current);
                if (cards.length) {
                  cardx = cards.filter((card) => player.getStorage('vumg').includes(card));
                  current.addGaintag(cardx, 'vumg_tag');
                }
              });
            },
          },
          ai: {
            mod: {
              aiOrder(player, card, num) {
                if (
                  get.itemtype(card) == 'card' &&
                  card.hasGaintag('vumg_tag') &&
                  game.hasPlayer((current) => {
                    return current.hasSkill('vumg') && get.attitude(player, current) >= 0;
                  })
                )
                  return num + 0.1;
              },
              aiValue(player, card, num) {
                if (
                  get.itemtype(card) == 'card' &&
                  card.hasGaintag('vumg_tag') &&
                  game.hasPlayer((current) => {
                    return current.hasSkill('vumg') && get.attitude(player, current) >= 0;
                  })
                )
                  return num / 10;
              },
              aiUseful() {
                return lib.skill.vumg_ai.mod.aiValue.apply(this, arguments);
              },
            },
            trigger: {
              player: 'dieAfter',
            },
            filter() {
              return !game.hasPlayer((i) => i.hasSkill('vumg'), true);
            },
            silent: true,
            forceDie: true,
            forced: true,
            popup: false,
            content() {
              game.removeGlobalSkill('vumg_ai');
            },
          },
        },
      },
      jkhx: {
        audio: 'ext:恒梦/audio/yydrvumgui:3',
        silent: true,
        init(player) {
          if (!player.storage.jkhx) player.storage.jkhx = player.hp + 2;
        },
        trigger: { global: 'phaseBegin' },
        forced: true,
        superCharlotte: true,
        check(event, player) {
          return true;
        },
        async content(event, trigger, player) {
          player.storage.jkhx--;
          if (player.storage.jkhx) return;
          for (const i of game.players) {
            i.classList.remove('target');
          }
          player.storage.jkhx = player.hp + 2;
          const result = await player
            .chooseTarget('选择化梦1名其他角色,使其也进入化梦状态', lib.filter.notMe)
            .set('ai', function (target) {
              if (get.attitude(player, target) < 0) return Object.keys(target.storage).length - 4 * Math.random();
              return Object.keys(target.storage).length - 2 * Math.random() + target.getDamagedHp();
            })
            .forResult();
          if (result.bool) {
            const targets = result.targets,
              tlen = targets.length;
            const target = targets[0];
            game.broadcastAll(function (target) {
              for (let j in target.storage) {
                if (typeof target.storage[j] == 'number') {
                  target.storage[j] = 0;
                }
              } //QQQ
              const skills = target.getStockSkills(true, true);
              for (const skill of skills) {
                target.addSkillTrigger(skill);
              }
              game.log(target.name + '进入纯净状态' + Object.keys(target.storage));
            }, target);
            await target.recover();
            if (_status.currentPhase !== target) await target.addTempSkill('diaohulishan');
          }
          await player.recover();
          if (_status.currentPhase !== player) await player.addTempSkill('diaohulishan');
        },
      },
      yttr: {
        audio: 'ext:恒梦/audio/hrmgytvh:3',
        ytqi: ['yttr_hstc', 'yttr_fhpm', 'yttr_mwhx', 'yttr_hwtc'],
        audioname: ['yue_daqiao'],
        trigger: {
          global: 'phaseBefore',
          player: 'enterGame',
        },
        filter(event, player) {
          return event.name != 'phase' || game.phaseNumber == 0;
        },
        forced: true,
        async content(event, trigger, player) {
          const hstc = game.createCard2('yttr_hstc', 'heart', 1),
            fhpm = game.createCard2('yttr_fhpm', 'diamond', 1),
            mwhx = game.createCard2('yttr_mwhx', 'club', 1),
            hwtc = game.createCard2('yttr_hwtc', 'spade', 1);
          cards = [hstc, fhpm, mwhx, hwtc];
          await player.gain(cards, 'gain2').set('gaintag', ['yttr_tag']);
          let tagcards = player.getCards('h').filter((card) => lib.skill.yttr.ytqi.includes(get.kapdmkzi(card)));
          player.addGaintag(tagcards, 'yttr_tag');
          player.markAuto('yttr', tagcards);
        },
        group: 'yttr_restore',
        subSkill: {
          tag: {},
          restore: {
            audio: 'yttr',
            audioname: ['yue_daqiao'],
            trigger: { global: 'phaseZhunbeiBegin' },
            forced: true,
            async content(event, trigger, player) {
              player.storage.yttrphase = _status.currentPhase;
              if (trigger.player === player) {
                const targets = game.players.slice().concat(game.dead);
                if (!targets.some((target) => target.getStorage('yttr').filterInD('d').length)) return;
                const cards = targets.reduce((list, target) => list.addArray(target.getStorage('yttr').filterInD('d')), []);
                l(Array.from(cards).map((card) => card.name));
                player.gain(cards, 'gain2').gaintag.add('yttr_tag');
              }
            },
          },
        },
        mod: {
          ignoredHandcard(card, player) {
            if (card.hasGaintag('yttr_tag')) return true;
          },
          cardDiscardable(card, player, name) {
            if (name == 'phaseDiscard' && card.hasGaintag('yttr_tag')) return false;
          },
        },
      },
      xpzz: {
        group: ['xpzz_usec', 'xpzz_usek'],
        init() {
          game.addGlobalSkill('xpzz_ai');
        },
        onremove() {
          if (!game.hasPlayer((i) => i.hasSkill('xpzz'), true)) game.removeGlobalSkill('xpzz_ai');
        },
        subSkill: {
          ai: {
            mod: {
              aiOrder(player, card, num) {
                const hryt = game.findPlayer((p) => p.hasSkill('xpzz'));
                const suit = card.suit,
                  suits = get.hxse(),
                  suitIndex = suits.indexOf(suit);
                if (!lib.suit.includes(suit)) return;
                if (hryt && get.attitude(player, hryt) < 0) return; //QQQ
                const list = ['yttr_hstc', 'yttr_fhpm', 'yttr_mwhx', 'yttr_hwtc'];
                const xxyiww = game.findPlayer((p) => p.hasCard((c) => get.kapdmkzi(c) === list.hzmm(list[suitIndex]), 'j'));
                if (!xxyiww) return;
                else if (get.attitude(player, xxyiww) <= 0) return;
                else if (get.attitude(player, xxyiww) > 0) return 1;
              },
            },
            ai: {
              effect: {
                player(card, player) {
                  if (!player.hasCard((c) => lib.skill.yttr.ytqi.includes(get.kapdmkzi(c)), 'j')) return;
                  const hryt = game.findPlayer((p) => p.hasSkill('xpzz'));
                  if (!hryt) return;
                  if ((hryt.storage.xpzz ? hryt.storage.xpzz : _status.currentPhase) === player) return;
                  return [1, get.sgnAttitude(player, hryt)];
                },
              },
            },
          },
          usec: {
            audio: 'yttr',
            trigger: {
              global: 'useCardAfter',
            },
            filter(event, player) {
              if (!event.player.isPhaseUsing()) return false;
              if (lib.skill.yttr.ytqi.includes(event.card.name)) return false;
              const j = event.player.getCards('j').filter((card) => lib.skill.yttr.ytqi.includes(get.kapdmkzi(card)));
              if (!j || !j.length) return false;
              const card = event.card,
                suits = Array.from(new Set(j.map((card) => card.suit)));
              return suits.includes(card.suit);
            },
            async cost(event, trigger, player) {
              const card = trigger.card,
                list = get.hxse(),
                uuzu = lib.skill.yttr.ytqi,
                suit = card.suit;
              const p = uuzu[list.indexOf(suit)],
                presuit = uuzu[list.indexOf(suit) + 1 > 3 ? 0 : list.indexOf(suit) + 1];
              const pc = trigger.player.getCards('j').find((card) => get.kapdmkzi(card).includes(p));
              const preiupd = game.findPlayer((i) => i.getCards('j').some((j) => get.kapdmkzi(j).includes(presuit)));
              event.result = await player
                .chooseTarget(true, `将${get.translation(p)}置入一名角色判定区`, `下一位即将奏响music的角色:${preiupd ? get.translation(preiupd.name) : `无`}`)
                .set('ai', function (target) {
                  const player = _status.event.player,
                    card = pc;
                  let jpgo = 0;
                  const list = ['yttr_hstc', 'yttr_fhpm', 'yttr_mwhx', 'yttr_hwtc'];
                  game.log(player.name, target.name, card.name, list);
                  let suit = get.hxse[list.indexOf(card.name)];
                  let wwxp = get.threaten(target, player) || 0,
                    tddu = get.attitude(player, target),
                    gp = game.players.sortBySeat(player.storage.yttrphase ? player.storage.yttrphase : player),
                    dhqm = gp.find((p) => p.hasCard((c) => list.includes(get.kapdmkzi(c)), 'j')),
                    dhqmytqi = [];
                  if (dhqm) {
                    dhqmytqi = dhqm.getCards('j', (c) => list.includes(get.kapdmkzi(c)));
                  } else dhqm = player;
                  let mubnytqi = target.getCards('j', (c) => list.includes(get.kapdmkzi(c))),
                    mlen = mubnytqi.length,
                    th = target.countCards('h', (c) => {
                      return c.suit == suit && target.hasUseTarget(c);
                    }),
                    ch = target.countCards('h');
                  const chen = Array.from(dhqmytqi, ({ suit }) => suit);
                  let tian = dhqm
                    .getCards('h', (c) => chen.includes(c.suit))
                    .slice()
                    .sort((a, b) => get.order(b, dhqm) - get.order(a, dhqm));
                  let tiansuit = Array.from(tian, ({ suit }) => suit).unique();
                  dhqmytqi.sort((a, b) => tiansuit.indexOf(a.suit) - tiansuit.indexOf(b.suit));
                  const dhqmww = dhqmytqi.length ? dhqmytqi[0].name : card.name;
                  const xxyiww = list.hzmm(dhqmww);
                  jpgo = (xxyiww === card.name ? tddu / 6 : 1) * (th + 1) + wwxp / 4;
                  let ukjm = 0;
                  if (target === _status.currentPhase) ukjm += 2;
                  if (mubnytqi && mlen) ukjm += 4 * mlen;
                  let juli = (gp.indexOf(target) + gp.length) / gp.length;
                  game.log(jpgo);
                  return jpgo * 4 - ukjm - juli;
                })
                .forResult();
            },
            async content(event, trigger, player) {
              const target = event.targets[0],
                card = trigger.card,
                list = get.hxse(),
                uuzu = lib.skill.yttr.ytqi,
                suit = card.suit,
                j = trigger.player.getCards('j').filter((card) => uuzu.includes(get.kapdmkzi(card)) && card.suit === suit);
              await target.addJudge(get.kapdmkzi(j[0]), j[0]);
              const presuit = uuzu[list.indexOf(suit) + 1 > 3 ? 0 : list.indexOf(suit) + 1];
              const preiupd = game.findPlayer((i) => i.getCards('j').some((j) => get.kapdmkzi(j).includes(presuit)));
              const evt = trigger.getParent('phaseUse', true);
              if (evt) {
                evt.skipped = true;
              }
              if (!preiupd) return;
              trigger.parent.next.push(preiupd.phaseUsex(player.storage.yttrphase));
            },
          },
          usek: {
            audio: 'yttr',
            trigger: {
              global: 'useCard',
            },
            forced: true,
            filter(event, player) {
              const ep = event.player;
              if (ep === player.storage.yttrphase) return false;
              return ep.getCards('j').some((card) => lib.skill.yttr.ytqi.includes(get.kapdmkzi(card)));
            },
            async content(event, trigger, player) {
              player.draw();
            },
          },
        },
        audio: 'yttr',
        trigger: { global: 'judgeFixing' },
        filter(event, player) {
          const suittoname = {
            heart: 'yttr_hstc',
            diamond: 'yttr_fhpm',
            club: 'yttr_mwhx',
            spade: 'yttr_hwtc',
          };
          if (!Array.from(event.player.getCards('j'), ({ name }) => name).includes(suittoname[event.result.suit])) return false;
          return event.result;
        },
        async cost(event, trigger, player) {
          const suittoname = {
            heart: 'yttr_hstc',
            diamond: 'yttr_fhpm',
            club: 'yttr_mwhx',
            spade: 'yttr_hwtc',
          },
            yttrcard = trigger.player.getCards('j').find((card) => card.name === suittoname[trigger.result.suit]);
          const list = get.hxse(),
            uuzu = lib.skill.yttr.ytqi,
            suit = yttrcard.suit,
            presuit = uuzu[(list.indexOf(suit) + 1) % 4],
            preiupd = game.findPlayer((i) => i.getCards('j').some((j) => get.kapdmkzi(j).includes(presuit)));
          const p = uuzu[list.indexOf(suit)];
          const pc = trigger.player.getCards('j').find((card) => get.kapdmkzi(card).includes(p)); //QQQ
          event.result = await player
            .chooseTarget(true, `将${get.translation(yttrcard.name)}置入一名角色判定区`, trigger.result.bool ? `下一位即将奏响music的角色:${get.translation(preiupd.name)}` : undefined)
            .set('ai', function (target) {
              const player = _status.event.player,
                card = pc;
              let jpgo = 0;
              const list = ['yttr_hstc', 'yttr_fhpm', 'yttr_mwhx', 'yttr_hwtc'];
              let suit = get.hxse[list.indexOf(card.name)];
              let wwxp = get.threaten(target, player) || 0,
                tddu = get.attitude(player, target),
                gp = game.players.sortBySeat(player.storage.yttrphase ? player.storage.yttrphase : player),
                dhqm = gp.find((p) => p.hasCard((c) => list.includes(get.kapdmkzi(c)), 'j')),
                dhqmytqi = [];
              if (dhqm) {
                dhqmytqi = dhqm.getCards('j', (c) => list.includes(get.kapdmkzi(c)));
              } else dhqm = player;
              let mubnytqi = target.getCards('j', (c) => list.includes(get.kapdmkzi(c))),
                mlen = mubnytqi.length,
                th = target.countCards('h', (c) => {
                  return c.suit == suit && target.hasUseTarget(c);
                }),
                ch = target.countCards('h');
              const chen = Array.from(dhqmytqi, ({ suit }) => suit);
              let tian = dhqm
                .getCards('h', (c) => chen.includes(c.suit))
                .slice()
                .sort((a, b) => get.order(b, dhqm) - get.order(a, dhqm));
              let tiansuit = Array.from(tian, ({ suit }) => suit).unique();
              dhqmytqi.sort((a, b) => tiansuit.indexOf(a.suit) - tiansuit.indexOf(b.suit));
              const dhqmww = dhqmytqi.length ? dhqmytqi[0].name : card.name;
              const xxyiww = list.hzmm(dhqmww);
              jpgo = (xxyiww === card.name ? tddu / 6 : 1) * (th + 1) + wwxp / 4;
              let ukjm = 0;
              if (target === _status.currentPhase) ukjm += 2;
              if (mubnytqi && mlen) ukjm += 4 * mlen;
              let juli = (gp.indexOf(target) + gp.length) / gp.length;
              return jpgo * 4 - ukjm - juli;
            })
            .forResult();
        },
        async content(event, trigger, player) {
          if (event.targets?.length) {
            trigger.player.skip('phaseUse');
          } //QQQ
          const suittoname = {
            heart: 'yttr_hstc',
            diamond: 'yttr_fhpm',
            club: 'yttr_mwhx',
            spade: 'yttr_hwtc',
          },
            yttrcard = trigger.player.getCards('j').find((card) => card.name === suittoname[trigger.result.suit]);
          const list = lib.skill.yttr.ytqi,
            c = trigger.cardname;
          event.targets[0].addJudge(yttrcard, get.kapdyrxk(yttrcard));
          const listIndex = list.indexOf(yttrcard.name);
          const presuit = list[(listIndex + 1) % 4];
          const preiupd = game.findPlayer((i) => i.getCards('j').some((j) => get.kapdmkzi(j).includes(presuit)));
          if (preiupd) trigger.parent.next.push(preiupd.phaseUsex(player.storage.yttrphase));
        },
      },
      hguu: {
        init(player) {
          player.storage.hguu = [];
        },
        onremove(player) {
          delete player.storage.hguu;
        },
        mod: {
          cardnumber(card, player) {
            if (card.number == 'unsure') return;
            const cards = player.getCards('h');
            let index = cards.indexOf(card);
            if (cards.includes(card) && index < 4) if (player.storage.hguu[index]) return lib.skill.hguu.vrhx[player.storage.hguu[index]];
          },
        },
        trigger: {
          global: 'phaseBefore',
          player: 'enterGame',
        },
        filter(event, player) {
          return event.name != 'phase' || game.phaseNumber == 0;
        },
        forced: true,
        content() {
          player.storage.hguu = Array.from(player.getCards('h').slice(0, 4), ({ number }) => number);
          const list = get.dmuu();
          if (player.storage.hguu.length < 4) {
            player.storage.hguu.push(...list.randomGets(4 - player.storage.hguu.length));
          }
        },
        vrhx: {
          nppjjijk_tag: 'n',
          ksxu_tag: 'k',
          iana_tag: 'i',
          mohu_tag: 'm',
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          10: 10,
          11: 11,
          12: 12,
          13: 13,
          hgheua_tag: 'h',
          aasgqi_tag: 'a',
          nayzta_tag: 'n',
          bukeuo_tag: 'b',
        },
        xrvs(ciuu, id) {
          const options = {
            height: '8 %',
            width: '14 %',
          };
          const div = document.createElement('div');
          let str = id === 'tdhujbvi' ? 'extension/恒梦/image/tdhuvigl/xrvs.gif' : 'extension/恒梦/image/tdhuvigl/xrvsi.gif';
          div.style.backgroundImage = 'url(' + str + '?range=' + Math.random() + ')';
          div.style.backgroundSize = '100% 100%';
          div.style.zIndex = '10';
          div.style.fontSize = '100px';
          div.style.padding = '50px 100px';
          if (options && options.height) {
            div.style.height = options.height;
          }
          if (options && options.width) {
            div.style.width = options.width;
          }
          let gc = div.style.height.slice(),
            kr = div.style.width.slice();
          if (gc.includes('px')) {
            gc = gc.replace('px', '');
            gc = (gc / window.innerHeight) * 100;
          } else if (gc.includes('%')) {
            gc = gc.replace('%', '');
          }
          if (kr.includes('px')) {
            kr = kr.replace('px', '');
            kr = (kr / window.innerWidth) * 100;
          } else if (kr.includes('%')) {
            kr = kr.replace('%', '');
          }
          div.style.position = 'fixed';
          let leftwwvi = 20 * ciuu - 7;
          div.style.left = `${leftwwvi - kr / 2}%`;
          div.style.top = `${50 - gc / 2}%`;
          div.id = id;
          ui.window.appendChild(div);
        },
        qmsi(event, player, card) {
          if (event.hguu && event.hguu[player.playerid]) return true;
          const cards = player.getCards('h');
          const index = cards.indexOf(card);
          return index < 4 && index >= 0;
        },
        xnuu: ['mohu_tag', 'iana_tag', 'ksxu_tag', 'nppjjijk_tag', 'nppjjijk_tag'],
        dauu: ['hgheua_tag', 'aasgqi_tag', 'nayzta_tag', 'bukeuo_tag', 'bukeuo_tag'],
        group: ['hguu_mark', 'hguu_usex', 'hguu_useBefore'],
        subSkill: {
          mohu: {
            mod: {
              cardname(card, player, name) {
                const random = lib.inpile.randomGet();
                return random;
              },
            },
          },
          iana: {
            audio: 2,
            trigger: { player: 'phaseUseBegin' },
            filter(event, player) {
              return !event.player.isMad();
            },
            content() {
              game.broadcastAll(function (player) {
                player.forceCountChoose = { phaseUse: 10 };
              }, player);
              player.addSkill('hguu_use');
              player.addSkill('hguu_cancel');
            },
            ai: {
              threaten: 4.5,
            },
          },
          use: {
            mod: {
              cardUsable(card) {
                if (get.info(card) && get.info(card).forceUsable) return;
                return Infinity;
              },
              targetInRange() {
                return true;
              },
              aiOrder(player, card, num) {
                var name = card.name;
                if (name == 'tao') return num + 7 + Math.pow(player.getDamagedHp(), 2);
                if (name == 'sha') return num + 6;
                if (get.subtype(card) == 'equip2') return num + get.value(card) / 3;
              },
            },
            trigger: { player: 'useCard' },
            forced: true,
            charlotte: true,
            silent: true,
            popup: false,
            filter(event, player) {
              if (!player.forceCountChoose || !player.forceCountChoose.phaseUse) {
                return false;
              }
              return true;
            },
            content() {
              if (player.forceCountChoose.phaseUse == 1) {
                var evt = event.getParent('phaseUse', true);
                if (evt) {
                  evt.skipped = true;
                }
              } else
                game.broadcastAll(function (player) {
                  player.forceCountChoose.phaseUse--;
                }, player);
            },
          },
          useBefore: {
            trigger: { player: 'phaseUseBefore' },
            charlotte: true,
            forced: true,
            async content(event, trigger, player) {
              lib.skill.tdhujbvi.uixmtupm(player);
            },
          },
          cancel: {
            trigger: { player: 'phaseUseEnd' },
            firstDo: true,
            silent: true,
            charlotte: true,
            content() {
              game.broadcastAll(function (player) {
                delete player.forceCountChoose;
              }, player);
              player.removeSkill('hguu_use');
              player.removeSkill('hguu_cancel');
            },
          },
          ksxu: {
            trigger: { player: 'useCardBefore' },
            charlotte: true,
            forced: true,
            filter(event, player) {
              return !player.getCards('h').includes(event.cards[0]) || !uuzuxlts(get.kapdyrxk(event.card), event.cards);
            },
            content() {
              trigger.cancel();
            },
          },
          nppjjijk: {
            init(player) {
              player.storage.nppjjijk = [];
              if (player.name1) player.storage.nppjjijk.push(player.name1);
              if (player.name2) player.storage.nppjjijk.push(player.name2);
              const list = [];
              for (const i of lib.characterPack) {
                if (!i.startWith('hgmg')) continue;
                list.addArray(Array.from(Object.keys(i)));
              }
              list.remove([player.name, player.name1, player.name2, 'tdhuvigl']);
              player.init(list.randomGet());
              player.maxHp = 1;
              player.update();
            },
            onremove(player) {
              player.storage.nppjjijk = [];
              if (player.name2) player.init(player.name1, player.name2);
              player.init(player.name1);
            },
          },
          mark: {
            charlotte: true,
            trigger: { player: 'useCardBegin' },
            filter(event, player) {
              const cards = player.getCards('h');
              player.storage.hguujbvi = cards.indexOf(event.cards[0]);
              if (!cards.length || !cards.includes(event.cards[0])) return false;
              l(player.storage.hguujbvi);
              return cards.indexOf(event.cards[0]) < 4;
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {
              const cards = player.getCards('h');
              if (!trigger.hguu) trigger.hguu = {};
              trigger.hguu[player.playerid] = cards.indexOf(trigger.cards[0]) + 1;
              game.log(trigger.hguu[player.playerid]);
            },
          },
          usex: {
            trigger: {
              player: 'useCard',
            },
            forced: true,
            silent: true,
            filter(event, player) {
              return event.hguu && event.hguu[player.playerid];
            },
            async content(event, trigger, player) {
              const card = trigger.card;
              const hguu = player.storage.hguu;
              let index = trigger.hguu[player.playerid];
              const tag = hguu[index - 1];
              const xnuu = lib.skill.hguu.xnuu.slice(),
                dauu = lib.skill.hguu.dauu.slice();
              const hguutag = [...xnuu, ...dauu];
              l(tag);
              if (!hguutag.includes(tag)) return;
              if (tag === 'mohu_tag') {
                for (let i = 0; i < trigger.targets.length; i++) {
                  if (player === trigger.targets[i]) continue;
                  trigger.targets[i].addTempSkill('hguu_mohu', 'roundStart');
                }
              } else if (tag === 'iana_tag') {
                for (let i = 0; i < trigger.targets.length; i++) {
                  if (player === trigger.targets[i]) continue;
                  trigger.targets[i].addTempSkill('hguu_iana', 'roundStart');
                }
              } else if (tag === 'ksxu_tag') {
                for (let i = 0; i < trigger.targets.length; i++) {
                  if (player === trigger.targets[i]) continue;
                  trigger.targets[i].addTempSkill('hguu_ksxu', 'roundStart');
                }
              } else if (tag === 'nppjjijk_tag') {
                for (let i = 0; i < trigger.targets.length; i++) {
                  if (player === trigger.targets[i]) continue;
                  trigger.targets[i].addTempSkill('hguu_nppjjijk', 'roundStart');
                }
              } else if (tag === 'hgheua_tag') {
                player.drawTo(4);
              } else if (tag === 'aasgqi_tag') {
                game.broadcastAll((player) => {
                  player.maxHp += 1;
                  player.hp += 1;
                  player.update();
                }, player);
              } else if (tag === 'nayzta_tag') {
                if (get.tag(card, 'damage') > 0 || get.tag(card, 'recover') > 0) {
                  trigger.baseDamage = 4;
                  game.log(card, '的伤害值/回复值改为了4');
                }
              } else if (tag === 'bukeuo_tag') {
                const list = [];
                for (const i of lib.characterPack) {
                  if (!i.startWith('hgmg')) continue;
                  list.addArray(Array.from(Object.keys(i)));
                }
                list.remove([player.name, player.name1, player.name2]);
                const listx = list.randomGets(4);
                let dialog = ['不可说:请选择一名武将作为你的副将'];
                dialog.push([listx, 'character']);
                const choice = await player
                  .chooseButton(dialog)
                  .set('ai', function (button) {
                    if (lib.rank.rarity.legend.includes(button.link)) return 2 * Math.random();
                    if (lib.rank.rarity.epic.includes(button.link)) return Math.random();
                    if (lib.rank.rarity.rare.includes(button.link)) return -Math.random();
                    if (lib.rank.rarity.junk.includes(button.link)) return -2 * Math.random();
                    return Math.random();
                  })
                  .forResult();
                if (!choice.bool) return;
                player.init(player.name1, choice.links[0]);
              }
            },
          },
        },
      },
      tdhujbvi: {
        audio: 'ext:恒梦/audio/tdhuvigl:4',
        jbvitupm(stryrxk, options, idyrxk, func) {
          if (typeof stryrxk !== 'number') stryrxk = stryrxk.replace('_tag', '');
          const div = document.createElement('div');
          const id = `hguu${idyrxk}`;
          let str = 'extension/恒梦/image/tdhuvigl/' + stryrxk + '.png';
          div.style.backgroundImage = 'url(' + str + '?range=' + Math.random() + ')';
          div.style.backgroundSize = '100% 100%';
          div.style.zIndex = '1';
          if (func) {
            div.onclick = func;
          }
          if (options && options.height) {
            div.style.height = typeof stryrxk === 'number' ? options.height : `${parseInt(options.height) * 2}%`;
          }
          if (options && options.width) {
            div.style.width = options.width;
          }
          let gc = div.style.height.slice(),
            kr = div.style.width.slice();
          if (gc.includes('px')) {
            gc = gc.replace('px', '');
            gc = (gc / window.innerHeight) * 100;
          } else if (gc.includes('%')) {
            gc = gc.replace('%', '');
          }
          if (kr.includes('px')) {
            kr = kr.replace('px', '');
            kr = (kr / window.innerWidth) * 100;
          } else if (kr.includes('%')) {
            kr = kr.replace('%', '');
          }
          div.style.position = 'absolute';
          let leftwwvi = 20 * idyrxk;
          div.style.left = `${leftwwvi - kr / 2}%`;
          div.style.top = `${50 - gc / 2}%`;
          div.id = id;
          ui.window.appendChild(div);
        },
        uixmtupm(player) {
          const func = lib.skill.tdhujbvi.jbvitupm;
          player.when('phaseUseEnd').then(() => {
            for (let i = 0; i < 4; i++) {
              game.qkiutupmbyid(`hguu${i + 1}`);
            }
          });
          for (let i = 0; i < 4; i++) {
            if (player == game.me)
              func(
                player.storage.hguu[i],
                {
                  height: '34%',
                  width: '18%',
                },
                i + 1
              );
            else if (player.isOnline())
              player.send(
                func,
                player.storage.hguu[i],
                {
                  height: '34%',
                  width: '18%',
                },
                i + 1
              );
          }
        },
        trigger: { player: 'useCard' },
        filter(event, player) {
          if (!event.cards || !event.cards.length) return false;
          if (!player.storage.tdhujbvi_mark) return false;
          let num1 = event.hguu && event.hguu[player.playerid] ? player.storage.hguu[event.hguu[player.playerid] - 1] : event.card.number,
            num2 = player.storage.tdhujbvi_mark[0];
          return typeof num1 == 'number' && typeof num2 == 'number' && (num2 % num1 == 0 || num1 % num2 == 0);
        },
        forced: true,
        async content(event, trigger, player) {
          let num2 = player.storage.tdhujbvi_mark[0];
          game.broadcastAll(
            (cardx, player) => {
              game.qkiutupmbyid('tdhujbvi');
              let num = cardx.number;
              let ciuu = num % 4 == 0 ? 4 : num % 4;
              lib.skill.hguu.xrvs(ciuu, 'tdhujbvi');
            },
            trigger.card,
            player
          );
          const qmsi = lib.skill.hguu.qmsi(trigger, player, trigger.card);
          let num1 = qmsi ? player.storage.hguu[trigger.hguu[player.playerid] - 1] : trigger.card.number;
          let ciuuyr = num1 % 4 == 0 ? 4 : num1 % 4;
          let vgfj;
          const cards1 = [],
            cards2 = [],
            num = player.storage.tdhujbvi_mark[0],
            dauu = lib.skill.hguu.dauu.slice(),
            xnuu = lib.skill.hguu.xnuu.slice(),
            vrhx = lib.skill.hguu.vrhx,
            vrhxjm = Object.keys(vrhx),
            phs = player.getCards('h'),
            phslen = phs.length,
            card = trigger.card;
          if ((typeof num1 == 'number' || vrhxjm.includes(num1)) && (typeof num == 'number' || vrhxjm.includes(num))) {
            if (typeof num1 == 'number' && typeof num == 'number') {
              if (num1 % num == 0) cards1.push(card);
              if (num % num1 == 0) cards2.push(card);
              vgfj = num1 > num ? 'bwuu' : num1 < num ? 'ytuu' : false;
            } else if (dauu.includes(num1) && typeof num == 'number') {
              cards1.push(card);
              vgfj = 'bwuu';
            } else if (xnuu.includes(num1) && typeof num == 'number') {
              cards2.push(card);
              vgfj = 'ytuu';
            } else if (typeof num1 == 'number' && dauu.includes(num)) {
              cards2.push(card);
              vgfj = 'ytuu';
            } else if (typeof num1 == 'number' && xnuu.includes(num)) {
              cards1.push(card);
              vgfj = 'bwuu';
            } else if (vrhxjm.indexOf(num1) <= vrhxjm.indexOf(num)) {
              cards2.push(card);
              if (vrhxjm.indexOf(num1) != vrhxjm.indexOf(num)) vgfj = 'ytuu';
            } else if (vrhxjm.indexOf(num1) >= vrhxjm.indexOf(num)) {
              cards1.push(card);
              if (vrhxjm.indexOf(num1) != vrhxjm.indexOf(num)) vgfj = 'bwuu';
            }
          }
          if (cards2.includes(card)) player.draw();
          if (!vgfj) return;
          _status.texn = true;
          _status.buttonover = [];
          const buttonover = function () {
            const bg = document.getElementsByTagName('div');
            if (!bg.length) return;
            for (let i = 0; i < bg.length; i++) {
              _status.buttonover.addArray(bg[i].querySelectorAll('.card.fullskin'));
            }
            if (!_status.buttonover.length) return;
            _status.buttonover.forEach((button) => {
              if (button.onmouseover) return;
              l(button.number);
              button.onmouseover = function () {
                if (!lib.config.auto_confirm && !this.classList.contains('selected')) return;
                const card = button;
                let numx;
                if (card && card.number) numx = card.number;
                else return;
                game.broadcastAll((numx) => {
                  game.qkiutupmbyid('tdhui');
                  let ciuu = numx % 4 == 0 ? 4 : numx % 4;
                  lib.skill.hguu.xrvs(ciuu, 'tdhui');
                }, numx);
              };
              button.onmouseout = function () {
                game.qkiutupmbyid('tdhui');
              };
            });
          };
          buttonover();
          const uubnyids = setInterval(function () {
            buttonover();
            if (!_status.texn) clearInterval(uubnyids);
          }, 1000);
          const result = await player
            .chooseToDiscard(`是否弃置一张牌？当前运算为${vgfj === 'ytuu' ? '减法' : '加法'}`, 'he', function (card) {
              return true;
            })
            .set('ai', function (card) {
              return Math.random();
            })
            .forResult();
          _status.texn = false;
          clearInterval(uubnyids);
          const bg = document.getElementsByTagName('div');
          if (!bg.length) return;
          for (let i = 0; i < bg.length; i++) {
            _status.buttonover.addArray(bg[i].querySelectorAll('.card.fullskin'));
          }
          _status.buttonover.forEach((button) => {
            button.onmouseover = null;
            button.onmouseout = null;
          });
          if (!result.bool) return;
          let numi = result.cards[0].number;
          let ciuui = numi % 4 == 0 ? 4 : numi % 4;
          let ciuuyrq = ciuuyr - 1,
            ciuuiq = ciuui - 1;
          const storage = player.storage.hguu;
          const stoyr = storage[ciuuyrq];
          const stoi = storage[ciuuiq];
          if (typeof storage[ciuuyrq] == 'number' && typeof storage[ciuuiq] == 'number') {
            storage[ciuuyrq] += vgfj === 'ytuu' ? -storage[ciuuiq] : storage[ciuuiq];
            storage[ciuuyrq] = storage[ciuuyrq] < 1 ? 'mohu_tag' : storage[ciuuyrq] > 13 ? 'hgheua_tag' : storage[ciuuyrq];
          } else if (typeof storage[ciuuyrq] == 'number') {
            if (vgfj === 'ytuu') {
              if (dauu.includes(stoi)) storage[ciuuyrq] = xnuu[dauu.indexOf(storage[ciuuiq])];
              else {
                storage[ciuuyrq] = storage[ciuuyrq] < 10 ? dauu[xnuu.indexOf(stoi)] : dauu[xnuu.indexOf(storage[ciuuiq]) + 1];
              }
            } else {
              storage[ciuuyrq] = storage[ciuuyrq] < 10 ? storage[ciuuiq] : dauu[dauu.indexOf(storage[ciuuiq]) + 1];
            }
          } else if (typeof storage[ciuuiq] == 'number') {
            if (vgfj === 'ytuu') {
              if (dauu.includes(stoyr)) {
              } else if (xnuu.includes(stoyr)) {
                storage[ciuuyrq] = stoi < 10 ? stoyr : xnuu[xnuu.indexOf(stoyr) + 1];
              }
            } else {
              if (dauu.includes(stoyr)) {
                storage[ciuuyrq] = stoi >= 10 ? dauu[dauu.indexOf(stoyr) + 1] : stoyr;
              } else if (xnuu.includes(stoyr)) {
              }
            }
          } else if (typeof storage[ciuuyrq] == 'string' && typeof storage[ciuuiq] == 'string') {
            const indexyr = xnuu.includes(stoyr) ? xnuu.indexOf(stoyr) : dauu.indexOf(stoyr);
            const indexi = xnuu.includes(stoi) ? xnuu.indexOf(stoi) : dauu.indexOf(stoi);
            if (xnuu.includes(stoyr) && xnuu.includes(stoi)) {
              if (vgfj === 'ytuu') {
                if (indexyr < indexi) {
                  storage[ciuuyrq] = stoi;
                } else if (indexyr > indexi) {
                  storage[ciuuyrq] = stoyr;
                } else {
                  storage[ciuuyrq] = xnuu[indexyr + 1];
                }
              } else {
                if (indexyr < indexi) {
                  storage[ciuuyrq] = stoi;
                } else if (indexyr > indexi) {
                  storage[ciuuyrq] = stoyr;
                } else {
                  storage[ciuuyrq] = indexyr === 0 ? (player.countCards('h') < ciuuyr ? get.dmuu().randomGet() : player.getCards('h')[ciuuyrq].number) : xnuu[indexyr - 1];
                }
              }
            } else if (dauu.includes(stoyr) && dauu.includes(stoi)) {
              if (vgfj === 'bwuu') {
                if (indexyr < indexi) {
                  storage[ciuuyrq] = stoi;
                } else if (indexyr > indexi) {
                  storage[ciuuyrq] = stoyr;
                } else {
                  storage[ciuuyrq] = xnuu[indexyr + 1];
                }
              } else {
                if (indexyr < indexi) {
                  storage[ciuuyrq] = stoi;
                } else if (indexyr > indexi) {
                  storage[ciuuyrq] = stoyr;
                } else {
                  storage[ciuuyrq] = indexyr === 0 ? (player.countCards('h') < ciuuyr ? get.dmuu().randomGet() : player.getCards('h')[ciuuyrq].number) : xnuu[indexyr - 1];
                }
              }
            } else if (xnuu.includes(stoyr) && dauu.includes(stoi)) {
              if (vgfj === 'ytuu') {
                if (xnuu.indexOf(stoyr) < dauu.indexOf(stoi)) {
                  storage[ciuuyrq] = xnuu[dauu.indexOf(stoi)];
                } else if (xnuu.indexOf(stoyr) > dauu.indexOf(stoi)) {
                } else {
                  storage[ciuuyrq] = xnuu[xnuu.indexOf(stoyr) + 1];
                }
              } else {
                if (xnuu.indexOf(stoyr) < dauu.indexOf(stoi)) {
                  storage[ciuuyrq] = stoi;
                } else if (xnuu.indexOf(stoyr) > dauu.indexOf(stoi)) {
                } else {
                  storage[ciuuyrq] = player.countCards('h') < ciuuyr ? get.dmuu().randomGet() : player.getCards('h')[ciuuyrq].number;
                }
              }
            } else if (dauu.includes(stoyr) && xnuu.includes(stoi)) {
              if (vgfj === 'bwuu') {
                if (dauu.indexOf(stoyr) < xnuu.indexOf(stoi)) {
                  storage[ciuuyrq] = stoi;
                } else if (dauu.indexOf(stoyr) > xnuu.indexOf(stoi)) {
                } else {
                  storage[ciuuyrq] = player.countCards('h') < ciuuyr ? get.dmuu().randomGet() : player.getCards('h')[ciuuyrq].number;
                }
              } else {
                if (dauu.indexOf(stoyr) < xnuu.indexOf(stoi)) {
                  storage[ciuuyrq] = dauu[xnuu.indexOf(stoi)];
                } else if (dauu.indexOf(stoyr) > xnuu.indexOf(stoi)) {
                } else {
                  storage[ciuuyrq] = dauu[dauu.indexOf(stoyr) + 1];
                }
              }
            }
          }
          if (ciuuiq !== ciuuyrq) storage[ciuuiq] = player.countCards('h') < ciuuiq + 1 ? get.dmuu().randomGet() : player.getCards('h')[ciuuiq].number;
          const func = function (ciuui, ciuuyr) {
            const node = document.getElementById(`hguu${ciuui}`);
            const nodeyr = document.getElementById(`hguu${ciuuyr}`);
            if (node) {
              game.broadcastAll(
                (node, nodeyr) => {
                  const a = node.style.left.slice(),
                    b = nodeyr.style.left.slice(),
                    ax = parseInt(a.replace('%', '')),
                    bx = parseInt(b.replace('%', ''));
                  node.style.transform = 'translateX(' + ((bx - ax) * window.innerWidth) / 100 + 'px)';
                },
                node,
                nodeyr
              );
            }
          };
          func(ciuui, ciuuyr);
          setTimeout(() => {
            game.broadcastAll(() => {
              for (let i = 0; i < 4; i++) {
                game.qkiutupmbyid(`hguu${i + 1}`);
              }
            });
            lib.skill.tdhujbvi.uixmtupm(player);
          }, 440);
        },
        mod: {
          cardUsable(card, player) {
            if (typeof card == 'object') {
              var evt = lib.skill.dcjianying.getLastUsed(player);
              if (!evt || !evt.card) return;
              var num1 = card.number,
                num2 = evt.card.number;
              if (num1 === 'unsure' || (typeof num1 == 'number' && typeof num2 == 'number' && num1 % num2 == 0)) return Infinity;
            }
          },
          aiOrder(player, card, num) {
            if (typeof card == 'object') {
              var evt = lib.skill.dcjianying.getLastUsed(player);
              if (!evt || !evt.card) return;
              var num1 = card.number,
                num2 = (num2 = evt.card.number);
              if (num1 === 'unsure' || (typeof num1 == 'number' && typeof num2 == 'number' && num2 % num1 == 0)) return num + 5;
            }
          },
        },
        init(player) {
          player.storage.tdhujbvi_mark = ['null', 'null'];
          player.addSkill('tdhujbvi_mark');
          var history = player.getAllHistory('useCard');
          if (history.length) {
            var trigger = history[history.length - 1],
              num = trigger.card.number;
            player.storage.tdhujbvi_mark.shift();
            player.storage.tdhujbvi_mark.push(num);
            player[typeof num != 'number' ? 'unmarkSkill' : 'markSkill']('tdhujbvi_mark');
          }
        },
        onremove(player) {
          player.removeSkill('tdhujbvi_mark');
          player.removeGaintag('tdhujbvi1');
          player.removeGaintag('tdhujbvi2');
          delete player.storage.tdhujbvi_mark;
        },
        subSkill: {
          mark: {
            charlotte: true,
            trigger: {
              player: ['useCard1', 'gainAfter'],
              global: 'loseAsyncAfter',
            },
            filter(event, player, name) {
              return name == 'useCard1' || event.getg(player).length;
            },
            forced: true,
            firstDo: true,
            content() {
              'step 0';
              player.removeGaintag('tdhujbvi1');
              player.removeGaintag('tdhujbvi2');
              if (event.triggername == 'useCard1') {
                const num = trigger.hguu && trigger.hguu[player.playerid] ? player.storage.hguu[trigger.hguu[player.playerid] - 1] : trigger.card.number;
                player.storage.tdhujbvi_mark.shift();
                player.storage.tdhujbvi_mark.push(num);
                player[typeof num != 'number' && !Object.values(lib.skill.hguu.vrhx).includes(num) ? 'unmarkSkill' : 'markSkill']('tdhujbvi_mark');
                if (typeof num != 'number') event.finish();
              }
              ('step 1');
              const cards1 = [],
                cards2 = [],
                num = player.storage.tdhujbvi_mark[1],
                dauu = lib.skill.hguu.dauu.slice(),
                xnuu = lib.skill.hguu.xnuu.slice(),
                vrhx = lib.skill.hguu.vrhx,
                vrhxjm = Object.keys(vrhx),
                phs = player.getCards('h');
              for (let i = 0; i < phs.length; i++) {
                const card = phs[i],
                  numx = i < 4 ? player.storage.hguu[i] : phs[i].number;
                if ((typeof numx !== 'number' && !vrhxjm.includes(numx)) || (typeof num !== 'number' && !vrhxjm.includes(num))) continue;
                if (typeof numx == 'number' && typeof num == 'number') {
                  if (numx % num == 0) cards1.push(card);
                  if (num % numx == 0) cards2.push(card);
                } else if (dauu.includes(numx) && typeof num == 'number') {
                  cards1.push(card);
                } else if (xnuu.includes(numx) && typeof num == 'number') {
                  cards2.push(card);
                } else if (typeof numx == 'number' && dauu.includes(num)) {
                  cards2.push(card);
                } else if (typeof numx == 'number' && xnuu.includes(num)) {
                  cards1.push(card);
                } else if (vrhxjm.indexOf(numx) <= vrhxjm.indexOf(num)) {
                  cards2.push(card);
                } else if (vrhxjm.indexOf(numx) >= vrhxjm.indexOf(num)) {
                  cards1.push(card);
                }
              }
              player.addGaintag(cards1, 'tdhujbvi1');
              player.addGaintag(cards2, 'tdhujbvi2');
            },
            intro: {
              content(storage, player, skill) {
                return `上一张牌的点数:${storage[1]}`;
              },
              markcount(storage, player) {
                return storage[1];
              },
            },
          },
        },
      },
      tnyb: {
        audio: 'ext:恒梦/audio/tnybui:3',
        initList() {
          let list;
          let banned = ['xunyi', 'mbyilie'];
          if (get.mode() == 'guozhan') {
            list = [];
            for (const i in lib.characterPack.mode_guozhan) list.push(i);
          } else {
            list = [];
            for (const i in lib.character) {
              if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
              list.push(i);
            }
          }
          const items = lib.extensionMenu.extension_恒梦.hgmg_ybyt.item;
          let jingku = items[lib.config.extension_恒梦_hgmg_ybyt];
          jingku = jingku.split('');
          const skills = jingku.reduce((a, b) => {
            const skilly = [];
            for (const i of list) {
              if (i.indexOf('gz_jun') == 0) continue;
              for (const j of lib.character[i][3]) {
                const skill = lib.skill[j];
                if (!skill || skill.zhuSkill || banned.includes(j) || !lib.translate[j + '_info']) continue;
                if (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
                const info = get.translation(j);
                if (info.includes(b) && !a.includes(j)) {
                  skilly.add(j);
                }
              }
            }
            a.push(skilly.length ? skilly.randomGet() : '无');
            return a;
          }, []);
          l(skills);
          _status.tnyb_list = skills;
        },
        getMap() {
          const tnyb_tdcilist = [];
          let list = get.gainableCharacters();
          list.svjipdxu();
          const listlen = list.length;
          const items = lib.extensionMenu.extension_恒梦.hgmg_ybyt.item;
          let jingku = items[lib.config.extension_恒梦_hgmg_ybyt];
          jingku = jingku.split('');
          for (let h = 0; h < jingku.length; h++) {
            const zifu = jingku[h];
            const skillx = [];
            for (let k = 0; k < listlen; k++) {
              let tniu;
              const name = list[k];
              const skills = get.character(name, 3);
              skills.forEach((skill) => {
                const info = get.info(skill);
                if (!info || (info.ai && info.ai.combo)) return;
                if (skill in tnyb_tdcilist) return;
                const voices = game.parseSkillText(skill, name);
                if (!voices.length) return;
                if (
                  voices.some((text) => {
                    const pinyins = get.pinyin(text, false);
                    for (let i = 0; i < pinyins.length; i++) {
                      if (pinyins[i] === get.pinyin(zifu, false)[0]) return true;
                    }
                    return false;
                  }) &&
                  !tnyb_tdcilist.includes(skill)
                ) {
                  skillx.add(skill);
                  tniu = true;
                }
              });
              if (tniu) break;
            }
            tnyb_tdcilist.push(skillx.randomGet() || '无');
          }
          l(tnyb_tdcilist);
          _status.tnyb_tdcilist = tnyb_tdcilist;
        },
        enable: 'phaseUse',
        usable: 1,
        async content(event, trigger, player) {
          const items = lib.extensionMenu.extension_恒梦.hgmg_ybyt.item;
          let jingku = items[lib.config.extension_恒梦_hgmg_ybyt],
            jingkulen = jingku.length;
          lib.skill.pingjian.initList();
          lib.skill.tnyb.initList();
          lib.skill.tnyb.getMap();
          const list = [],
            list1 = _status.tnyb_list.slice(),
            list2 = _status.tnyb_tdcilist.slice();
          const listcopy = [];
          for (let i = 0; i < jingkulen; i++) {
            listcopy.push([list1[i], list2[i]]);
          }
          for (let i = 0; i < jingkulen; i++) {
            let prepush = listcopy[i].randomRemove();
            if (prepush === '无') prepush = listcopy[i][0] === '无' ? _status.characterlist.randomGet() : listcopy[i][0];
            list.push(prepush);
          }
          const listx = [];
          for (const skill of list) {
            listx.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
          }
          const result = await player
            .chooseButton(['请选择获得至多2个技能', [listx, 'textbutton']])
            .set('forced', true)
            .set('selectButton', [1, 2])
            .set('ai', function (button) {
              const skill = button.link,
                skills = _status.event.skills.slice();
              return Math.random();
            })
            .set('skills', listx)
            .forResult();
          if (!result.bool) return;
          if (player.additionalSkills.tnyb && player.additionalSkills.tnyb.length) await player.removeAdditionalSkills('tnyb');
          const skills = result.links.filter((i) => i !== '无');
          if (!skills.length) return;
          player.addAdditionalSkills('tnyb', skills);
          const voiceMap = get.tdci(skills.randomGet());
          l(voiceMap);
          const pbyb = get.pinyin(jingku, false);
          for (let data of voiceMap) {
            if (!data.text) continue;
            const pinyins = get.pinyin(data.text, false);
            for (let i = 0; i < pinyins.length; i++) {
              if (pbyb.includes(pinyins[i])) {
                l('找到语音' + pinyins[i]);
                player.chat(data.text);
                game.broadcastAll((file) => game.playAudio(file), data.file);
                break;
              }
            }
          }
        },
        ai: {
          order: 10,
          result: { player: 1 },
        },
      },
      qpge: {
        audio: 'ext:恒梦/audio:2',
        init: (player, skill) => player.inituyfajix(skill),
        forced: true,
        popup: false,
        async clickable(player) {
          game.trySkillAudio('tnyb', player);
          if (player === _status.currentPhase) {
            player.chat('宝宝你正处于自己的回合哦');
            return;
          }
          if (!get.info('qpge').clickableFilter(player)) return;
          lib.skill.qpge.clickableContent(player, 'qpge');
        },
        clickableFilter(player) {
          if (player.isTempBanned('qpge')) return false;
          return !player.storage.qpge;
        },
        clickableFilterTime: 1000,
        clickableContent(player, skill) {
          player.tempBanSkill('qpge', 'roundStart', false);
          player.hvhe();
          game.bwjkybytx();
          xxyiuijm();
        },
        content() { },
        group: 'qpge_autoai',
        subSkill: {
          autoai: {
            trigger: {
              global: 'useCard2',
            },
            filter(event, player) {
              if (player === _status.currentPhase) return false;
              return (_status.auto || !player.isUnderControl(true)) && !player.isTempBanned('qpge');
            },
            check(event, player) {
              return get.attitude(player, _status.event.player) < 0;
            },
            async content(event, trigger, player) {
              lib.skill.qpge.clickable(player);
            },
          },
        },
      },
      coto: {
        group: ['coto_uiys', 'coto_uiysclear'],
        subSkill: {
          hvherfrj: {
            trigger: {
              player: 'phaseBeginStart',
            },
            filter(event, player) {
              return !event.hvherfrj;
            },
            silent: true,
            charlotte: true,
            forced: true,
            superCharlotte: true,
            content() {
              player.iaruhvherfrj().set('phaseList', player.storage.jidkjpdr.slice());
              if (!trigger._finished) {
                trigger.finish();
                trigger.untrigger(true);
                trigger._triggered = 5;
                game.players
                  .slice()
                  .concat(game.dead)
                  .forEach((current) => {
                    current.getHistory().isSkipped = true;
                    current.getStat().isSkipped = true;
                  });
                var evt = player.iaruhvherfrj();
                if (trigger.skill) evt.skill = trigger.skill;
                else delete evt.skill;
                game.broadcastAll(function (player) {
                  player.classList.remove('glow_phase');
                  delete _status.currentPhase;
                }, player);
              }
            },
          },
          uiys: {
            trigger: {
              player: ['useCard', 'respond'],
            },
            silent: true,
            charlotte: true,
            forced: true,
            superCharlotte: true,
            content() {
              player.storage.uiys = true;
            },
          },
          uiysclear: {
            trigger: {
              player: ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore', 'phaseJieshuBefore', 'phaseEnd', 'phaseAfter'],
            },
            _priority: 520,
            silent: true,
            charlotte: true,
            forced: true,
            superCharlotte: true,
            content() {
              if (event.triggername === 'phaseAfter') {
                for (const i of ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore', 'phaseJieshuBefore', 'phaseEnd']) {
                  player.storage[i] = null;
                }
              } else {
                player.hvsu_jilu(event.triggername);
              }
              player.storage.uiys = false;
            },
          },
        },
        audio: 'ext:恒梦/audio/rfrjve:2',
        trigger: {},
        _priority: 10,
        prompt(event, player) {
          const num1 = player.countCards('h'),
            num2 = player.getHandcardLimit(),
            mkzi = event.name;
          let str = '<span class="text center"><li>时间之矢:<li>',
            jpdr = player.storage.jidkjpdr;
          str += jpdr.length
            ? jpdr
              .map((i) => {
                if (i === mkzi) return `<font color=#FF0000>${get.fjyi(i)}</font>`;
                return get.fjyi(i);
              })
              .join('、')
            : '无';
          str += '<li>';
          if (num1 > num2) {
            str += '弃置' + get.cnNumber(num1 - num2) + '张牌';
          } else {
            str += '摸' + get.cnNumber(Math.min(8, num2 - num1)) + '张牌';
          }
          str += '<li>当前手牌上限:' + num2;
          str += `<li>当前阶段:${get.fjyi(mkzi)}`;
          str += '</span>';
          return str;
        },
        filter(event, player) {
          if (!event.parent.hvherfrj) return false;
          var num1 = player.countCards('h'),
            num2 = player.getHandcardLimit();
          return num1 != num2;
        },
        content() {
          let mkzi = trigger.name;
          let num1 = player.countCards('h'),
            num2 = player.getHandcardLimit();
          if (num1 < num2) {
            player.draw(num2 - num1);
          } else
            player.chooseToDiscard(num1 - num2, 'h').set('ai', function () {
              return Math.random();
            });
          player.storage.jidkjpdr.yidsy(mkzi, num2 - num1);
        },
        init(player) {
          player.phase = function (skill) {
            var next = game.createEvent('phase', false);
            next.player = this;
            next.setContent('hvherfrj');
            if (skill) {
              next.skill = skill;
            }
            if (!_status.roundStart) {
              _status.roundStart = this;
            }
            next.forceDie = true;
            next.includeOut = true;
            return next;
          };
          if (!player.storage.jidkjpdr) player.storage.jidkjpdr = get.hvheList();
          game.broadcastAll(() => {
            lib.skill.coto.trigger.player = get.hvheList().map((i) => `${i}Begin`);
            game.finishSkill('coto');
          });
        },
        onChooseToUse(event) {
          const player = event.player;
          if (!_status.dying.length && player === _status.currentPhase && player.isPhaseUsing()) {
            let str = '<span class="text center"><li>时间之矢:<li>',
              jpdr = player.storage.jidkjpdr;
            str += jpdr.length
              ? jpdr
                .map((i) => {
                  if (i === 'phaseUse') return `<font color=#FF0000>${get.fjyi(i)}</font>`;
                  return get.fjyi(i);
                })
                .join('、')
              : '无';
            let num = _status.event.parent.phaseIndex;
            str += `<br>※当前阶段:出牌阶段`;
            str += '</span>';
            event.prompt = str;
          }
        },
      },
      rfrjyixi: {
        group: 'rfrjyixi_pbdm',
        subSkill: {
          pbdm: {
            trigger: {
              player: 'compare',
            },
            forced: true,
            content() {
              trigger.num1 -= player.storage.rfrjyixi;
              if (trigger.num1 < 1) trigger.num1 = 1;
              game.log(`现在的${player}`, `的拼点牌点数-${player.storage.rfrjyixi}`);
            },
          },
        },
        trigger: {
          player: 'phaseEnd',
        },
        audio: 'ext:恒梦/audio/rfrjve:2',
        filter(event, player) {
          return event.hvherfrj;
        },
        async cost(event, trigger, player) {
          if (player.storage.cotox.length < 6) {
            event.result = await player
              .chooseBool(get.prompt('rfrjyixi'), '你未能执行你的既定阶段,是否要重拾你曾经的自己？')
              .set('ai', () => 1)
              .forResult();
          } else {
            const list = [];
            for (const jpdr of player.storage.jidkjpdr) {
              if (!player.storage.cotox.includes(jpdr)) continue;
              if (!player.storage[`${jpdr}Before`]) continue;
              const jpdruuzu = player.storage[`${jpdr}Before`].handcards1.length;
              list.push([jpdr, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.fjyi(jpdr) + '】</div><div>你当时的手牌数:' + jpdruuzu + '</div></div>']);
            }
            const result = await player
              .chooseButton(['请选择与一个时期的自己进行拼点,若成功,重拾那时的自己', [list, 'textbutton']])
              .set('filterButton', function (button) {
                return player.storage[`${button.link}Before`].handcards1.length;
              })
              .forResult();
            event.result = {
              bool: result.bool,
              cost_data: result.bool ? result.links[0] : [],
            };
          }
        },
        async content(event, trigger, player) {
          if (player.storage.cotox.length < 6) {
            const eewdjpdr = player.storage.jidkjpdr.slice().remove(...player.storage.cotox);
            player.phase('nodelay').set('phaseList', eewdjpdr);
          } else {
            const xrze = event.cost_data;
            player.storage.rfrjyixi = 6 - player.storage.jidkjpdr.indexOf(xrze);
            player.hvsu_jilu('phaseEnd');
            const result = await player.chooseToComparerfrj(player, `${xrze}Before`).forResult();
            if (result.rfrjyixi) {
              player.phase('nodelay').set('phaseList', player.storage.jidkjpdr.slice(player.storage.jidkjpdr.indexOf(xrze), player.storage.jidkjpdr.length));
            } else {
              player.hvsu_duqu('phaseEnd');
              player.discard(player.storage.lose_list);
              player.storage.lose_list = [];
            }
          }
        },
      },
      iewu: {
        audio: 'ext:恒梦/audio/rfrjve:2',
        dutySkill: true,
        group: ['iewu_achieve', 'iewu_fail'],
        subSkill: {
          achieve: {
            audio: 'iewu',
            trigger: { player: 'phaseAfter' },
            _priority: 4,
            forced: true,
            filter(event, player) {
              l('iewu');
              return uuzuxltsuyxu(player.storage.jidkjpdr, get.hvheList());
            },
            content() {
              game.log(player, '成功完成使命');
              player.awakenSkill('iewu');
              player.storage.iewu = true;
              lib.translate.coto_info = '将你的6个阶段依次排列成一条时间之矢.你的每个阶段开始时,你可以将你的手牌数调整为手牌上限,并将调整此阶段在时间之矢的位置,调整值与你的手牌数变化相等.该阶段你使用/未使用过牌,你按正常流程/<span style="opacity:1"class="legendtext">时间之矢</span>进入下一个阶段';
            },
          },
          fail: {
            audio: 'iewu',
            trigger: { player: 'dying' },
            forced: true,
            filter(event, player) {
              return !uuzuxltsuyxu(player.storage.jidkjpdr, get.hvheList());
            },
            content() {
              'step 0';
              game.log(player, '使命失败');
              player.awakenSkill('iewu');
              player.storage.iewu = false;
              lib.translate.coto_info = '将你的6个阶段依次排列成一条时间之矢.你的每个阶段开始时,你可以将你的手牌数调整为手牌上限,并将调整此阶段在时间之矢的位置,调整值与你的手牌数变化相等.该阶段你使用/未使用过牌,你按正常流程/<span style="opacity:0.5"class="legendtext">时间之矢</span>进入下一个阶段';
            },
          },
        },
      },
      yuqqbumj: {
        audio: 'ext:恒梦/audio/bkjnjtjtzi:2',
        trigger: { player: 'useCardToTargeted' },
        logTarget: 'target',
        filter(event, player) {
          return event.target.getCards('h').some((card) => {
            return card.name.indexOf('klre') === 0;
          });
        },
        content() {
          const target = trigger.target;
          const list = [],
            history = player.getHistory('useCard', (evt) => {
              return evt.targets.includes(trigger.target);
            });
          let pos = get.is.single() ? 'he' : 'hej';
          if (target.countGainableCards(player, pos)) player.gainPlayerCard(pos, [1, history.length], target).set('target', target).set('complexSelect', false).set('ai', lib.card.shunshou.ai.button);
        },
      },
      zicj: {
        enable: 'phaseUse',
        content() {
          player.loseHp();
        },
      },
      klre: {
        audio: 'ext:恒梦/audio/bkjnjtjtzi:2',
        group: ['klre_gain', 'klre_zavs'],
        subSkill: {
          zavs: {
            trigger: { player: 'zadjHit' },
            forced: true,
            popup: false,
            silent: true,
            filter(event, player) {
              return event.target !== player;
            },
            content() {
              const bnqk = trigger.bnqk,
                target = trigger.target;
              const jilv = player.hp / player.maxHp;
              if (Math.random() > jilv) {
                if (bnqk === 'flower') target.draw()._triggered = null;
                else if (bnqk === 'egg') target.discard(target.getCards('he').randomGet())._triggered = null;
                else if (bnqk === 'wine') target.recover()._triggered = null;
                else if (bnqk === 'shoe') target.damage()._triggered = null;
                else if (bnqk === 'jiasuo') target.turnOver()._triggered = null;
                else if (bnqk === 'suokao') target.link()._triggered = null;
                else if (bnqk === 'yuxis') target.gainMaxHp()._triggered = null;
                else if (bnqk === 'yuxisx') target.changeHujia()._triggered = null;
              }
            },
          },
          gain: {
            trigger: {
              player: 'gainAfter',
            },
            forced: true,
            popup: false,
            silent: true,
            lastDo: true,
            filter(event, player) {
              const evtg = event.getg(event.player).filter((i) => get.position(i) == 'h');
              return evtg.some((i) => i.name.indexOf('klre') === 0);
            },
            content() {
              const cards = trigger.getg(trigger.player).filter((i) => get.position(i) == 'h' && i.name.indexOf('klre') === 0);
              for (const yrsu of cards) {
                let startX = 0;
                let startY = 0;
                let isDragging = false;
                if (lib.config.touchscreen) {
                  yrsu.addEventListener('touchstart', function (e) {
                    const uzpdindex = get.uzpdindex(yrsu, player);
                    const bccy = yrsu.style.transition;
                    const bccyx = yrsu.style.transform;
                    yrsu.style.zIndex = 100;
                    yrsu.style.transition = 'none';
                    const touch = e.touches[0];
                    startX = touch.clientX;
                    startY = touch.clientY;
                    isDragging = true;
                    yrsu.addEventListener('touchmove', function (e) {
                      e.preventDefault();
                      if (!isDragging) return;
                      const touch = e.touches[0];
                      const deltaX = touch.clientX - startX;
                      const deltaY = touch.clientY - startY;
                      yrsu.style.transform = `translate(${deltaX + yrsu.offsetWidth * uzpdindex}px, ${deltaY}px)`;
                    });
                    yrsu.addEventListener('touchend', function (e) {
                      yrsu.style.transition = bccy;
                      isDragging = false;
                      for (let playerElement of game.players) {
                        if (yrsupgvl(yrsu, playerElement)) {
                          player.give(yrsu, playerElement, 'giveAuto');
                          const tupm = lib.card[yrsu.name].klre;
                          const bnqk = tupm.slice(0, tupm.length - 1);
                          if (game.online) {
                            game.send('zadj', playerElement, bnqk);
                          } else game.me.zadj(playerElement, bnqk);
                          for (let i = 0; i < yrsu.number - 1; i++) {
                            setTimeout(
                              function () {
                                if (game.online) {
                                  game.send('zadj', playerElement, bnqk);
                                } else game.me.zadj(playerElement, bnqk);
                                xxyiuijm();
                              },
                              125 * (i + 1)
                            );
                          }
                          xxyiuijm();
                          break;
                        } else {
                          yrsu.style.transform = bccyx;
                        }
                      }
                    });
                  });
                } else {
                  yrsu.onmousedown = function (e) {
                    const uzpdindex = get.uzpdindex(yrsu, player);
                    const bccy = yrsu.style.transition;
                    const bccyx = yrsu.style.transform;
                    yrsu.style.zIndex = 100;
                    yrsu.style.transition = 'none';
                    startX = e.clientX;
                    startY = e.clientY;
                    isDragging = true;
                    document.onmousemove = function (e) {
                      e.preventDefault();
                      if (!isDragging) return;
                      const deltaX = e.clientX - startX;
                      const deltaY = e.clientY - startY;
                      yrsu.style.transform = `translate(${deltaX + yrsu.offsetWidth * uzpdindex}px, ${deltaY}px)`;
                    };
                    document.onmouseup = function (e) {
                      document.onmousemove = null;
                      yrsu.style.transition = bccy;
                      isDragging = false;
                      for (let playerElement of game.players) {
                        if (yrsupgvl(yrsu, playerElement)) {
                          player.give(yrsu, playerElement, 'giveAuto');
                          const tupm = lib.card[yrsu.name].klre;
                          const bnqk = tupm.slice(0, tupm.length - 1);
                          if (game.online) {
                            game.send('zadj', playerElement, bnqk);
                          } else game.me.zadj(playerElement, bnqk);
                          for (let i = 0; i < yrsu.number - 1; i++) {
                            setTimeout(
                              function () {
                                if (game.online) {
                                  game.send('zadj', playerElement, bnqk);
                                } else game.me.zadj(playerElement, bnqk);
                                xxyiuijm();
                              },
                              125 * (i + 1)
                            );
                          }
                          xxyiuijm();
                          break;
                        } else {
                          yrsu.style.transform = bccyx;
                        }
                      }
                    };
                  };
                }
              }
            },
          },
        },
        trigger: { player: 'changeHp' },
        filter(event, player) {
          return event.num < 0 && player.countCards('h');
        },
        async cost(event, trigger, player) {
          event.result = await player
            .chooseCard('h', '将一张牌搓成表情')
            .set('filterCard', function (card) {
              return card.name.indexOf('klre') !== 0;
            })
            .set('ai', function (card) {
              return 10 - get.value(card);
            })
            .forResult();
        },
        async content(event, trigger, player) {
          game.broadcastAll((card) => {
            game.cardsGotoOrdering(card);
            const name = card.name;
            const namex = 'klre_' + name;
            lib.card[namex] = {};
            for (const key in lib.card[name]) {
              if (key === 'image') continue;
              lib.card[namex][key] = lib.card[name][key];
            }
            const namey = lib.guyzbnqk.randomGet(),
              nameys = namey.slice(0, -1);
            lib.translate[namex] = `${lib.translate[name]}·${lib.translate[nameys]}`;
            const nameytofjyi = {
              flower: '目标有X几率摸一张牌(X为你已损失体力与体力上限的比值)',
              egg: '目标有X几率弃一张牌(X为你已损失体力与体力上限的比值)',
              wine: '目标有X几率回复一点体力(X为你已损失体力与体力上限的比值)',
              shoe: '目标有X几率受到一点伤害(X为你已损失体力与体力上限的比值)',
              jiasuo: '目标有X几率翻面(X为你已损失体力与体力上限的比值)',
              suokao: '目标有X几率横置或重置(X为你已损失体力与体力上限的比值)',
              yuxis: '目标有X几率增加一点体力上限(X为你已损失体力与体力上限的比值)',
              yuxisx: '目标有X几率增加一点护甲(X为你已损失体力与体力上限的比值)',
            };
            lib.translate[namex + '_info'] = `${nameytofjyi[nameys]}.一点小表情就把你耍的团团转`;
            lib.card[namex].image = 'ext:恒梦/image/bnqk/' + namey + '.png';
            lib.card[namex].klre = namey;
            let cardx = card.init({
              name: namex,
              suit: card.suit,
              number: card.number,
            });
            player.gain(cardx, 'gain2');
          }, event.cards[0]);
        },
      },
      wjfagvyix: {
        audio: 'ext:恒梦/audio/hgmgfuxi:3',
        jmso(event, player, target, targets, cards) {
          const evtt = targets;
          const evtc = cards;
          event.uit = ui.selected.targets;
          event.uic = ui.selected.cards;
          const card = cards.length ? cards.randomGet() : player.getCards('h').length ? player.getCards('h').randomGet() : ui.cardPile.firstChild;
          if (card) l(card.name);
          if (player.storage.ev == false) {
            event.finish();
          } else {
            player.storage.ev = false;
            var list = [];
            var skills = [];
            var map = {};
            var evt = event.getParent(2);
            if (!_status.characterlist) {
              lib.skill.pingjian.initList();
            }
            var allList = _status.characterlist.slice(0);
            game.countPlayer(function (current) {
              if (current.name && lib.character[current.name] && current.name.indexOf('gz_shibing') != 0 && current.name.indexOf('gz_jun_') != 0) allList.add(current.name);
              if (current.name1 && lib.character[current.name1] && current.name1.indexOf('gz_shibing') != 0 && current.name1.indexOf('gz_jun_') != 0) allList.add(current.name1);
              if (current.name2 && lib.character[current.name2] && current.name2.indexOf('gz_shibing') != 0 && current.name2.indexOf('gz_jun_') != 0) allList.add(current.name2);
            });
            allList.randomSort();
            for (let i = 0; i < allList.length; i++) {
              var name = allList[i];
              if (name.includes('zuoci') || name.includes('xushao')) continue;
              var skills2 = lib.character[name][3];
              for (var j = 0; j < skills2.length; j++) {
                if (player.storage.wjfagvyi.includes(skills2[j])) continue;
                if (skills.includes(skills2[j])) {
                  if (cards.length == targets.length && lib.skill[skill2[j]] == 'jinghe') list.add(name);
                  if (!map[name]) map[name] = [];
                  map[name].push(skills2[j]);
                  skills.add(skills2[j]);
                  continue;
                }
                var list2 = [skills2[j]];
                game.expandSkills(list2);
                for (var k = 0; k < list2.length; k++) {
                  var info = lib.skill[list2[k]];
                  if (!info || !info.enable || info.charlotte || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
                  if (!(info.enable == 'phaseUse' || (Array.isArray(info.enable) && info.enable.includes('phaseUse')) || info.enable == 'chooseToUse' || (Array.isArray(info.enable) && info.enable.includes('chooseToUse')))) continue;
                  if (!info.content) continue;
                  if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) continue;
                  if (info.onChooseToUse) continue;
                  if (info.name == 'wjfagvyi') continue;
                  if (info.selectTarget && typeof info.selectTarget == 'function') {
                    if (!targets.length) {
                      if (info.filterTarget) continue;
                    } else if (targets.length == 1) {
                      if (!info.filterTarget) continue;
                      try {
                        ui.selected.targets = targets;
                        if (typeof info.filterTarget == 'function' && targets.some((target) => !info.filterTarget.apply(this, [card, player, target]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (Array.isArray(get.select(info.selectTarget))) {
                        if (get.select(info.selectTarget)[0] > targets.length || get.select(info.selectTarget)[1] < targets.length) continue;
                      } else if (info.selectTarget && get.select(info.selectTarget) != 1 && get.select(info.selectTarget) != -1) continue;
                    } else if (targets.length > 1) {
                      if (!info.filterTarget) continue;
                      try {
                        ui.selected.targets = targets;
                        if (typeof info.filterTarget == 'function' && targets.some((target) => !info.filterTarget.apply(this, [card, player, target]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (!info.selectTarget) continue;
                      else {
                        if (Array.isArray(get.select(info.selectTarget))) {
                          if (get.select(info.selectTarget)[0] > targets.length || get.select(info.selectTarget)[1] < targets.length) continue;
                        } else if (info.selectTarget && info.selectTarget() != targets.length) continue;
                      }
                    }
                  } else {
                    if (!targets.length) {
                      if (info.filterTarget) continue;
                    } else if (targets.length == 1) {
                      if (!info.filterTarget) continue;
                      try {
                        ui.selected.targets = targets;
                        if (typeof info.filterTarget == 'function' && targets.some((target) => !info.filterTarget.apply(this, [card, player, target]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (Array.isArray(get.select(info.selectTarget))) {
                        if (get.select(info.selectTarget)[0] > targets.length || get.select(info.selectTarget)[1] < targets.length) continue;
                      } else if (info.selectTarget && get.select(info.selectTarget) != 1 && get.select(info.selectTarget) != -1) continue;
                    } else if (targets.length > 1) {
                      if (!info.filterTarget) continue;
                      try {
                        ui.selected.targets = targets;
                        if (typeof info.filterTarget == 'function' && targets.some((target) => !info.filterTarget.apply(this, [card, player, target]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (!info.selectTarget) continue;
                      else {
                        if (Array.isArray(get.select(info.selectTarget))) {
                          if (get.select(info.selectTarget)[0] > targets.length || get.select(info.selectTarget)[1] < targets.length) continue;
                        } else if (info.selectTarget && info.selectTarget != targets.length) continue;
                      }
                    }
                  }
                  ui.selected.targets = [];
                  if (info.selectCard && typeof info.selectCard == 'function') {
                    if (!cards.length) {
                      if (info.filterCard) continue;
                    } else if (cards.length == 1) {
                      if (!info.filterCard) continue;
                      try {
                        ui.selected.cards = cards;
                        if (typeof info.filterCard == 'function' && cards.some((card) => !info.filterCard.apply(this, [card, player, evt]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (Array.isArray(get.select(info.selectCard))) {
                        if (get.select(info.selectCard)[0] > cards.length || get.select(info.selectCard)[1] < cards.length) continue;
                      } else if (info.selectCard && get.select(info.selectCard) != 1 && get.select(info.selectCard) != -1) continue;
                    } else if (cards.length > 1) {
                      if (!info.filterCard) continue;
                      try {
                        ui.selected.cards = cards;
                        if (typeof info.filterCard == 'function' && cards.some((card) => !info.filterCard.apply(this, [card, player, evt]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (!info.selectCard) continue;
                      else {
                        if (Array.isArray(get.select(info.selectCard))) {
                          if (get.select(info.selectCard)[0] > cards.length || get.select(info.selectCard)[1] < cards.length) continue;
                        } else if (info.selectCard && info.selectCard() != cards.length) continue;
                      }
                    }
                  } else {
                    if (!cards.length) {
                      if (info.filterCard) continue;
                    } else if (cards.length == 1) {
                      if (!info.filterCard) continue;
                      try {
                        ui.selected.cards = cards;
                        if (typeof info.filterCard == 'function' && cards.some((card) => !info.filterCard.apply(this, [card, player, evt]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (Array.isArray(get.select(info.selectCard))) {
                        if (get.select(info.selectCard)[0] > cards.length || get.select(info.selectCard)[1] < cards.length) continue;
                      } else if (info.selectCard && get.select(info.selectCard) != 1 && get.select(info.selectCard) != -1) continue;
                    } else if (cards.length > 1) {
                      if (!info.filterCard) continue;
                      try {
                        ui.selected.cards = cards;
                        if (typeof info.filterCard == 'function' && cards.some((card) => !info.filterCard.apply(this, [card, player, evt]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (!info.selectCard) continue;
                      else if (info.selectCard && Array.isArray(info.selectCard)) {
                        if (get.select(info.selectCard)[0] > cards.length || get.select(info.selectCard)[1] < cards.length) continue;
                      } else if (info.selectCard != cards.length) continue;
                    }
                  }
                  if (info.filterOk) {
                    let tngo;
                    ui.selected.cards = cards;
                    ui.selected.targets = targets;
                    if (!info.filterOk()) {
                      tngo = true;
                    }
                    if (tngo) continue;
                  }
                  if (info.filter) {
                    try {
                      var bool = info.filter(evt, player);
                      if (!bool) continue;
                    } catch (e) {
                      continue;
                    }
                  } else if (info.viewAs && typeof info.viewAs != 'function') {
                    try {
                      if (evt.filterCard && !evt.filterCard(info.viewAs, player, evt)) continue;
                      if (info.viewAsFilter && info.viewAsFilter(player) == false) continue;
                    } catch (e) {
                      continue;
                    }
                  }
                  list.add(name);
                  if (!map[name]) map[name] = [];
                  map[name].push(skills2[j]);
                  skills.add(skills2[j]);
                  break;
                }
              }
              if (list.length > 2) break;
            }
            event.mapx = map;
            if (skills.length) player.chooseControl(skills).set('dialog', ['万法:请选择尝试发动的技能', [list, 'character']]);
            else {
              player.draw(2);
              event.finish();
            }
          }
          ui.selected.cards = event.uic;
          ui.selected.targets = event.uit;
          event.cards = evtc;
          event.targets = evtt;
        },
        enable: 'phaseUse',
        usable: 1,
        selectCard: [0, Infinity],
        filterCard(card, player) {
          if (ui.selected.cards) return true;
          return false;
        },
        position: 'he',
        lose: false,
        selectTarget: [0, Infinity],
        filterTarget(card, player, target) {
          if (ui.selected.targets) return true;
          return false;
        },
        complexSelect: true,
        complexTarget: true,
        init(player) {
          if (!player.storage.wjfagvyi) player.storage.wjfagvyi = [];
        },
        contentBefore() {
          game.broadcastAll(() => {
            lib.skill.wjfagvyix.usable += cards.length;
            game.finishSkill('wjfagvyix');
          });
          player.when('phaseBegin').then(() => {
            game.broadcastAll(() => {
              lib.skill.wjfagvyix.usable = 1;
            });
          });
          player.storage.ev = true;
        },
        content() {
          'step 0';
          lib.skill.wjfagvyix.jmso(_status.event, player, target, targets, cards);
          ('step 1');
          const info = lib.skill[result.control];
          var cards = event.cards;
          var targets = event.targets;
          event.cards = cards;
          event.targets = targets;
          if (result.control) player.storage.wjfagvyi.push(result.control);
          else event.finish();
          var name = Object.keys(event.mapx).find((name) => event.mapx[name].includes(result.control));
          if (name) game.broadcastAll((player, name) => player.tempname.add(name), player, name);
          if (!lib.skill[result.control].lose || lib.skill[result.control].lose != false) player.discard(cards);
          player.addTempSkill(result.control, 'wjfagvyixAfter');
          if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].name == 'mouzhu' || lib.skill[result.control].name == 'gwjiquan') player.storage.eev = true;
          if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].contentBefore) {
            var next = game.createEvent(result.control);
            next.player = player;
            if (target) next.target = target;
            if (targets.length) next.targets = targets;
            if (cards.length) next.cards = cards;
            if (card) next.card = card;
            if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].contentBefore) next.setContent(lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].contentBefore);
          }
          if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].content) {
            var nextm = game.createEvent(result.control);
            nextm.num = event.num;
            nextm.player = player;
            if (target) nextm.target = target;
            if (targets.length) nextm.targets = targets;
            if (cards.length) nextm.cards = cards;
            if (card) nextm.card = card;
            if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].content) nextm.setContent(lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].content);
          }
          if (info.viewAs) {
            player.chooseUseTarget(info.viewAs, cards, true, false).viewAs = true;
          }
          if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].contentAfter) {
            var nextn = game.createEvent(result.control);
            nextn.player = player;
            if (target) nextn.target = target;
            if (targets.length) nextn.targets = targets;
            if (cards.length) nextn.cards = cards;
            if (card) nextn.card = card;
            if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].contentAfter) nextn.setContent(lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].contentAfter);
          }
        },
      },
      wjfagvyi: {
        enable: 'phaseUse',
        usable: 1,
        selectCard: [0, Infinity],
        filterCard(card, player) {
          if (ui.selected.cards) return true;
          return false;
        },
        position: 'he',
        lose: false,
        selectTarget: [0, Infinity],
        filterTarget(card, player, target) {
          if (ui.selected.targets) return true;
          return false;
        },
        complexSelect: true,
        complexTarget: true,
        init(player) {
          if (!player.storage.wjfagvyi) player.storage.wjfagvyi = [];
        },
        contentBefore() {
          game.broadcastAll(() => {
            lib.skill.wjfagvyi.usable = 100;
            game.finishSkill('wjfagvyi');
          });
          player.storage.ev = true;
        },
        content() {
          'step 0';
          const evtt = targets;
          const evtc = cards;
          event.uit = ui.selected.targets;
          event.uic = ui.selected.cards;
          const card = cards.length ? cards.randomGet() : player.getCards('h').length ? player.getCards('h').randomGet() : ui.cardPile.firstChild;
          if (card) l(card.name);
          if (player.storage.ev == false) {
            event.finish();
          } else {
            player.storage.ev = false;
            var list = [];
            var skills = [];
            var map = {};
            var evt = event.getParent(2);
            if (!_status.characterlist) {
              lib.skill.pingjian.initList();
            }
            var allList = _status.characterlist.slice(0);
            game.countPlayer(function (current) {
              if (current.name && lib.character[current.name] && current.name.indexOf('gz_shibing') != 0 && current.name.indexOf('gz_jun_') != 0) allList.add(current.name);
              if (current.name1 && lib.character[current.name1] && current.name1.indexOf('gz_shibing') != 0 && current.name1.indexOf('gz_jun_') != 0) allList.add(current.name1);
              if (current.name2 && lib.character[current.name2] && current.name2.indexOf('gz_shibing') != 0 && current.name2.indexOf('gz_jun_') != 0) allList.add(current.name2);
            });
            allList.randomSort();
            for (let i = 0; i < allList.length; i++) {
              var name = allList[i];
              if (name.includes('zuoci') || name.includes('xushao')) continue;
              var skills2 = lib.character[name][3];
              for (var j = 0; j < skills2.length; j++) {
                if (player.storage.wjfagvyi.includes(skills2[j])) continue;
                if (skills.includes(skills2[j])) {
                  if (cards.length == targets.length && lib.skill[skill2[j]] == 'jinghe') list.add(name);
                  if (!map[name]) map[name] = [];
                  map[name].push(skills2[j]);
                  skills.add(skills2[j]);
                  continue;
                }
                var list2 = [skills2[j]];
                game.expandSkills(list2);
                for (var k = 0; k < list2.length; k++) {
                  var info = lib.skill[list2[k]];
                  if (!info || !info.enable || info.charlotte || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
                  if (!(info.enable == 'phaseUse' || (Array.isArray(info.enable) && info.enable.includes('phaseUse')) || info.enable == 'chooseToUse' || (Array.isArray(info.enable) && info.enable.includes('chooseToUse')))) continue;
                  if (!info.content) continue;
                  if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) continue;
                  if (info.init || info.onChooseToUse) continue;
                  if (info.name == 'wjfagvyi') continue;
                  if (info.selectTarget && typeof info.selectTarget == 'function') {
                    if (!targets.length) {
                      if (info.filterTarget) continue;
                    } else if (targets.length == 1) {
                      if (!info.filterTarget) continue;
                      try {
                        ui.selected.targets = targets;
                        if (typeof info.filterTarget == 'function' && targets.some((target) => !info.filterTarget.apply(this, [card, player, target]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (Array.isArray(get.select(info.selectTarget))) {
                        if (get.select(info.selectTarget)[0] > targets.length || get.select(info.selectTarget)[1] < targets.length) continue;
                      } else if (info.selectTarget && get.select(info.selectTarget) != 1 && get.select(info.selectTarget) != -1) continue;
                    } else if (targets.length > 1) {
                      if (!info.filterTarget) continue;
                      try {
                        ui.selected.targets = targets;
                        if (typeof info.filterTarget == 'function' && targets.some((target) => !info.filterTarget.apply(this, [card, player, target]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (!info.selectTarget) continue;
                      else {
                        if (Array.isArray(get.select(info.selectTarget))) {
                          if (get.select(info.selectTarget)[0] > targets.length || get.select(info.selectTarget)[1] < targets.length) continue;
                        } else if (info.selectTarget && info.selectTarget() != targets.length) continue;
                      }
                    }
                  } else {
                    if (!targets.length) {
                      if (info.filterTarget) continue;
                    } else if (targets.length == 1) {
                      if (!info.filterTarget) continue;
                      try {
                        ui.selected.targets = targets;
                        if (typeof info.filterTarget == 'function' && targets.some((target) => !info.filterTarget.apply(this, [card, player, target]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (Array.isArray(get.select(info.selectTarget))) {
                        if (get.select(info.selectTarget)[0] > targets.length || get.select(info.selectTarget)[1] < targets.length) continue;
                      } else if (info.selectTarget && get.select(info.selectTarget) != 1 && get.select(info.selectTarget) != -1) continue;
                    } else if (targets.length > 1) {
                      if (!info.filterTarget) continue;
                      try {
                        ui.selected.targets = targets;
                        if (typeof info.filterTarget == 'function' && targets.some((target) => !info.filterTarget.apply(this, [card, player, target]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (!info.selectTarget) continue;
                      else {
                        if (Array.isArray(get.select(info.selectTarget))) {
                          if (get.select(info.selectTarget)[0] > targets.length || get.select(info.selectTarget)[1] < targets.length) continue;
                        } else if (info.selectTarget && info.selectTarget != targets.length) continue;
                      }
                    }
                  }
                  ui.selected.targets = [];
                  if (info.selectCard && typeof info.selectCard == 'function') {
                    if (!cards.length) {
                      if (info.filterCard) continue;
                    } else if (cards.length == 1) {
                      if (!info.filterCard) continue;
                      try {
                        ui.selected.cards = cards;
                        if (typeof info.filterCard == 'function' && cards.some((card) => !info.filterCard.apply(this, [card, player, evt]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (Array.isArray(get.select(info.selectCard))) {
                        if (get.select(info.selectCard)[0] > cards.length || get.select(info.selectCard)[1] < cards.length) continue;
                      } else if (info.selectCard && get.select(info.selectCard) != 1 && get.select(info.selectCard) != -1) continue;
                    } else if (cards.length > 1) {
                      if (!info.filterCard) continue;
                      try {
                        ui.selected.cards = cards;
                        if (typeof info.filterCard == 'function' && cards.some((card) => !info.filterCard.apply(this, [card, player, evt]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (!info.selectCard) continue;
                      else {
                        if (Array.isArray(get.select(info.selectCard))) {
                          if (get.select(info.selectCard)[0] > cards.length || get.select(info.selectCard)[1] < cards.length) continue;
                        } else if (info.selectCard && info.selectCard() != cards.length) continue;
                      }
                    }
                  } else {
                    if (!cards.length) {
                      if (info.filterCard) continue;
                    } else if (cards.length == 1) {
                      if (!info.filterCard) continue;
                      try {
                        ui.selected.cards = cards;
                        if (typeof info.filterCard == 'function' && cards.some((card) => !info.filterCard.apply(this, [card, player, evt]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (Array.isArray(get.select(info.selectCard))) {
                        if (get.select(info.selectCard)[0] > cards.length || get.select(info.selectCard)[1] < cards.length) continue;
                      } else if (info.selectCard && get.select(info.selectCard) != 1 && get.select(info.selectCard) != -1) continue;
                    } else if (cards.length > 1) {
                      if (!info.filterCard) continue;
                      try {
                        ui.selected.cards = cards;
                        if (typeof info.filterCard == 'function' && cards.some((card) => !info.filterCard.apply(this, [card, player, evt]))) continue;
                      } catch (e) {
                        continue;
                      }
                      if (!info.selectCard) continue;
                      else if (info.selectCard && Array.isArray(info.selectCard)) {
                        if (get.select(info.selectCard)[0] > cards.length || get.select(info.selectCard)[1] < cards.length) continue;
                      } else if (info.selectCard != cards.length) continue;
                    }
                  }
                  if (info.filterOk) {
                    let tngo;
                    ui.selected.cards = cards;
                    ui.selected.targets = targets;
                    if (!info.filterOk()) {
                      tngo = true;
                    }
                    if (tngo) continue;
                  }
                  if (info.filter) {
                    try {
                      var bool = info.filter(evt, player);
                      if (!bool) continue;
                    } catch (e) {
                      continue;
                    }
                  } else if (info.viewAs && typeof info.viewAs != 'function') {
                    try {
                      if (evt.filterCard && !evt.filterCard(info.viewAs, player, evt)) continue;
                      if (info.viewAsFilter && info.viewAsFilter(player) == false) continue;
                    } catch (e) {
                      continue;
                    }
                  }
                  list.add(name);
                  if (!map[name]) map[name] = [];
                  map[name].push(skills2[j]);
                  skills.add(skills2[j]);
                  break;
                }
              }
              if (list.length > 2) break;
            }
            event.mapx = map;
            if (skills.length) player.chooseControl(skills).set('dialog', ['万法:请选择尝试发动的技能', [list, 'character']]);
            else {
              player.draw(2);
              event.finish();
            }
          }
          ui.selected.cards = event.uic;
          ui.selected.targets = event.uit;
          event.cards = evtc;
          event.targets = evtt;
          ('step 1');
          var cards = event.cards;
          var targets = event.targets;
          event.cards = cards;
          event.targets = targets;
          if (result.control) player.storage.wjfagvyi.push(result.control);
          else event.finish();
          var name = Object.keys(event.mapx).find((name) => event.mapx[name].includes(result.control));
          if (name) game.broadcastAll((player, name) => player.tempname.add(name), player, name);
          if (!lib.skill[result.control].lose || lib.skill[result.control].lose != false) player.discard(cards);
          player.addTempSkill(result.control, 'wjfagvyiAfter');
          if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].name == 'mouzhu' || lib.skill[result.control].name == 'gwjiquan') player.storage.eev = true;
          if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].contentBefore) {
            var next = game.createEvent('wjfagvyi_insert');
            next.player = player;
            if (target) next.target = target;
            if (targets.length) next.targets = targets;
            if (cards.length) next.cards = cards;
            if (card) next.card = card;
            if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].contentBefore) next.setContent(lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].contentBefore);
          }
          if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].content) {
            var nextm = game.createEvent('wjfagvyi_insertm');
            nextm.num = event.num;
            nextm.player = player;
            if (target) nextm.target = target;
            if (targets.length) nextm.targets = targets;
            if (cards.length) nextm.cards = cards;
            if (card) nextm.card = card;
            if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].content) nextm.setContent(lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].content);
          }
          if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].contentAfter) {
            var nextn = game.createEvent('wjfagvyi_insertn');
            nextn.player = player;
            if (target) nextn.target = target;
            if (targets.length) nextn.targets = targets;
            if (cards.length) nextn.cards = cards;
            if (card) nextn.card = card;
            if (lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].contentAfter) nextn.setContent(lib.skill[player.storage.wjfagvyi[player.storage.wjfagvyi.length - 1]].contentAfter);
          }
        },
        ai: {
          threaten: 1.2,
          order: 4,
          result: {
            player: 1,
          },
        },
      },
    },
    dynamicTranslate: {},
    translate: {
      hgmgm: '<font color=#00FFFF>✾科幻</font>',
      jmsove: '检索者',
      yydrvumgui: '筑梦师',
      uijmddlirf: '时间代理人',
      mkjmyeyk: '鸣剑曳影',
      hrmgytvh: '幻梦乐章',
      tdhuvigl: '太湖之光',
      tnybui: '调音师',
      rfrjve: '荏苒者',
      bkjnjtjtzi: '病娇绝绝子',
      mkjm: '鸣剑',
      mkjm_info: '当你造成或受到伤害时,你可以腾空而出,对至多X名其他角色(X为你已损失的体力值)发动<bnqm克伐>.每次<克伐>对目标角色造成0.5点伤害(对同一目标每次伤害递减0.1,最低至0.1点).你每少选择一个目标,可以对每个已选择的目标额外进行一次<克伐>.在这次<克伐>过程中,你可以移除每个目标角色一个技能中所有布尔值为真的键(在所有键完整且键最多的技能中).克伐结束后,你可以至多摸等同于本次削去的键的数量张牌,并获得等量的<font color=#0080FF>【曳影】</font>',
      $kefa: '克伐',
      $kefa_info: '不可响应,不可捕捉的杀',
      hgyeyk: '曳影',
      hgyeyk_info: '当你拥有【曳影】时,你的回合内/外,你使用牌无次数限制/其他角色与你的距离+<font color=#0080FF>【曳影】</font>.当你使用一张牌时,你消耗一个<font color=#0080FF>【曳影】</font>.<br>其他角色不能发动键不完整的技能,其每使用一张伤害牌,修复一个最后被削去的键',
      mkjmtpqi: '削键',
      uijmhvsu: '时溯',
      uijmhvsu_info: '每个回合结束或有角色即将死亡时,你可以发动【时溯】,将时间回溯至当前回合开始',
      mkyy: '改写',
      mkyy_info: '处于【时溯】的回合中时,当有角色使用原本回合中当前角色使用过的牌时,你可以改写此牌目标',
      hvwjvihg: '检索',
      hvwjvihg_info: '出牌阶段限一次,你可以重铸任意牌,若以此法重铸了所有手牌,你多摸一张牌',
      hvwj: '览阅',
      hvwj_info: '速读牌堆.你对牌堆的掌控能力提高',
      vumg_tag: '<font color=#00FFFF>筑梦</font>',
      vumg: '筑梦',
      vumg_info: '每轮游戏开始时,你可以选择一张手牌,不断翻转这张牌,每次翻转将改变此牌的牌名,直到你翻出【<font color=#0080FF>梦境</font>】或翻转次数达到你的体力上限.当你停止翻转时,你可以获得此牌,并记录之,你可以将此牌交给一名角色.当此牌进入过弃牌堆后,你将此牌交给一名本回合未以此法得到过此牌的角色',
      jkhx: '化梦',
      jkhx_info: '每经过X名角色的回合(X为你上次【<font color=#800080>化梦</font>】时的体力值),你回复1点体力并清除所有标记,进入【调离】状态直到本回合结束.你可以选择1名其他角色,使其执行相同效果',
      yttr: '乐团',
      yttr_info: '游戏开始时,你获得4张乐器牌(特殊判定牌),分别对应4种乐器组:弦乐组(<font color=#FF0000>♥️️</font>)、木管乐组(<font color=#FF0000>♦️️</font>)、铜管乐组(<font color=#000000>♣️️</font>)、打击乐组(<font color=#000000>♠️️</font>).回合开始时,你获得所有处于弃牌堆的乐器牌',
      xpzz: '协奏',
      xpzz_info: '该角色的判定牌或出牌阶段使用的牌的花色若与其判定区中的乐器牌花色相同,你移动该乐器牌,并截断其本回合的出牌阶段,若有角色的判定区有下一个乐器组的乐器牌,则将出牌阶段转移给该角色.当判定区有乐器的角色于其回合外使用牌时,你摸一张牌',
      mohu_tag: '模糊',
      iana_tag: '刹那',
      ksxu_tag: '空虚',
      nppjjijk_tag: '涅槃寂静',
      hgheua_tag: '恒河沙',
      aasgqi_tag: '阿僧祗',
      nayzta_tag: '那由他',
      bukeuo_tag: '不可说',
      mohu_tag_info: '对牌的认知错乱',
      iana_tag_info: '只有10秒出牌时间',
      ksxu_tag_info: '无法使用转化牌与虚拟牌',
      nppjjijk_tag_info: '变为体力上限为1的恒梦武将',
      hgheua_tag_info: '将手牌摸至4',
      aasgqi_tag_info: '体力与体力上限+1',
      nayzta_tag_info: '该牌基础数值=4',
      bukeuo_tag_info: '不可说',
      hguu: '恒数',
      hguu_info: '游戏开始时,将你的前4张手牌的点数(若不足则取随机数)排列成一个序列,称为bnqm恒数.你的回合开始时,于寂静虚空中,依次浮现4个<恒数>.你的前等4张的点数分别视为<恒数>的第等量个.小数:bnqm模糊、bnqm刹那、bnqm空虚、bnqm涅槃寂静.大数:bnqm恒河沙、bnqm阿僧祗、bnqm那由他、bnqm不可说',
      tdhujbvi: '进制',
      tdhujbvi_info: '锁定技.当你使用点数不为X的牌时,若此点数为X的倍数/约数的牌无次数限制/摸一张牌(X为你本局游戏使用的上一张牌的点数),若此牌点数大于/小于X,你可以弃一张牌,使你使用的牌的点数对4取余的等位<恒数>加上/减去你弃置的牌的点数对4取余的等位<恒数>,空缺的<恒数>由等位置手牌的点数补充.当点数小于1/大于13时,该点数可向小数/大数首阶跃迁.常规的运算不再是小/大数的桎梏,唯有等次元的小/大数可以对其产生影响,向上阶或下阶跃迁',
      tdhujbvi1: '倍数',
      tdhujbvi2: '约数',
      uiyi: '式一',
      uiyi_info: '你向指定目标挥出一拳并获得一张随机装备牌',
      uier: '式二',
      uier_info: '你向指定目标挥出一拳,若命中,你下一张拳将拆分成两小拳',
      uisj: '式三',
      uisj_info: '你向指定目标挥出一招拳并化有形于无形',
      uisi: '式四',
      uisi_info: '你向指定目标挥出一拳,若命中,你将其击飞直到其回合结束,再次命中,你将其击落,并击碎其全部勾玉',
      tnyb: '调音',
      tnyb_info: '出牌阶段限一次,依次检索一个技能名或台词含有背景音乐歌名顺位字符的技能,你可以获得其中至多2个技能直到下次调音',
      qpge: '切歌',
      qpge_info: '瞬发技,每轮限一次,你可以任意时机发动,将当前事件改为自己的回合,并换一首背景音乐',
      coto: '蹉跎',
      coto_info: '将你的6个阶段依次排列成一条时间之矢.你的每个阶段开始时,你可以将你的手牌数调整为手牌上限,并将调整此阶段在时间之矢的位置,调整值与你的手牌数变化相等.该阶段你使用/未使用过牌,你按正常流程/<span style="opacity:0.75"class="legendtext">时间之矢</span>进入下一个阶段',
      rfrjyixi: '忆昔',
      rfrjyixi_info: '回合结束时,若你未能执行你的完整既定阶段,你重拾曾经未能执行的阶段.否则,你可以与过去的自己拼点,每跨越一个时间段你的拼点牌点数-1,若你赢,你重拾那时的自己.重要的不是输赢,而是你能否迈出这一步',
      iewu: '彻悟',
      iewu_info: '使命技,你在你回合内流程的执行取决于时间之矢的清晰度.成功:你最终未能改变时间之矢,但你将其变得更加清晰.失败:你最终改变了时间之矢,但你将其变得更加模糊',
      yuqqbumj: '欲求不满',
      yuqqbumj_info: '当你对一名拥有表情的角色使用牌时,你可以获得其X张牌(X为你本回合对其使用牌的次数)',
      zicj: '自残',
      zicj_info: '出牌阶段,你可以失去一点体力',
      klre: '狂热',
      klre_info: '当你的体力值减少时,你可以将你的固有牌转化为一张bnqm表情',
      $bnqk: '表情',
      $bnqk_info: '出牌阶段,你可以摁住此牌并将其移动到一名角色身上,松手后,此牌将交给该角色,并向其砸该牌点数次对应表情,每次砸表情执行一次该表情对应效果,当然,你也可以当原来的卡牌使用',
    },
  };
  lib.config.characters.add('hgmgm');
  lib.config.all.characters.add('hgmgm');
  return hgmgm;
});
game.import('character', function (lib, game, ui, get, ai, _statu) {
  const hgmgy = {
    name: 'hgmgy',
    connect: true,
    characterTitle: {
      buviho: '<font color=#EE82EE><big><b>ZI</b></big></font><br>难度5i<br>菜刀4i<br>运营4i<br>保核5i',
    },
    character: {
      buviho: ['female', 'shu', 3, ['yjwu', 'hgmglige'], []],
    },
    characterIntro: {},
    characterSort: {
      hgmgy: {},
    },
    skill: {
      yjwu: {
        audio: 'ext:恒梦/audio/buviho:3',
        group: ['yjwu_use', 'yjwu_die', 'yjwu_wu'],
        derivation: ['yjwu_iuwu', 'yjwu_vswu', 'yjwu_yeyan'],
        trigger: {
          player: 'phaseZhunbeiBegin',
        },
        forced: true,
        filter(event, player) {
          return player.phaseNumber <= 1 && game.hasPlayer((current) => current != player);
        },
        content() {
          'step 0';
          player.chooseTarget('焰舞:选择一名其他角色获得<初舞>', lib.filter.notMe, true).set('ai', (target) => {
            return get.attitude(get.player(), target);
          });
          ('step 1');
          if (result.bool) {
            var target = result.targets[0];
            player.line(target, 'fire');
            lib.skill.yjwu.addMark('iuwu', player, target);
            event.target = target;
          } else event.finish();
          ('step 2');
          if (
            game.hasPlayer((current) => {
              return current != player && current != target;
            })
          ) {
            player
              .chooseTarget(
                '焰舞:选择一名其他角色获得<终舞>',
                function (card, player, target) {
                  return target != player && target != _status.event.parent.target;
                },
                true
              )
              .set('ai', (target) => {
                return get.attitude(get.player(), target);
              });
          } else event.finish();
          ('step 3');
          if (result.bool) {
            var target = result.targets[0];
            player.line(target, 'thunder');
            lib.skill.yjwu.addMark('vswu', player, target);
          }
        },
        ai: {
          threaten: 3,
        },
        hasMark(mark, player, target) {
          if (!target) return player.getStorage('yjwu_' + mark).length;
          return target.getStorage('yjwu_' + mark).includes(player);
        },
        addMark(mark, player, target) {
          mark = 'yjwu_' + mark;
          target.addAdditionalSkill(`${mark}_${player.playerid}`, mark);
          target.markAuto(mark, [player]);
          game.log(player, '令', target, '获得了', `#g<${mark == 'yjwu_iuwu' ? '初舞' : '终舞'}>`);
        },
        removeMark(mark, player, target, log) {
          if (lib.skill.yjwu.hasMark(mark, player, target, log)) {
            mark = 'yjwu_' + mark;
            target.removeAdditionalSkill(`${mark}_${player.playerid}`);
            target.unmarkAuto(mark, [player]);
            if (log) game.log(target, '移去了', player, '给予的', `#g<${mark == 'yjwu_iuwu' ? '初舞' : '终舞'}>`);
            else game.log(player, '移去了', target, '的', `#g<${mark == 'yjwu_iuwu' ? '初舞' : '终舞'}>`);
          }
        },
        subSkill: {
          wu: {
            trigger: { global: 'useCardAfter' },
            forced: true,
            filter(event, player) {
              const ep = event.player;
              if (ep !== _status.currentPhase) return false;
              const iup = game.findPlayer((current) => current.hasSkill('yjwu_iuwu') && current.getStorage('yjwu_iuwu').includes(player));
              const vsp = game.findPlayer((current) => current.hasSkill('yjwu_vswu') && current.getStorage('yjwu_vswu').includes(player));
              return iup && vsp && [iup, vsp].includes(ep);
            },
            async content(event, trigger, player) {
              const tp = trigger.player;
              const iup = game.findPlayer((current) => current.hasSkill('yjwu_iuwu') && current.getStorage('yjwu_iuwu').includes(player));
              const vsp = game.findPlayer((current) => current.hasSkill('yjwu_vswu') && current.getStorage('yjwu_vswu').includes(player));
              if (tp == player) {
                if (iup && iup === vsp) {
                  await iup.draw();
                } //QQQ
                else {
                  if (iup) {
                    await iup.draw();
                  }
                  if (vsp) {
                    await vsp.draw();
                  }
                }
              } else await player.draw();
              let xrzep;
              if (tp == player) {
                if (get.tag(trigger.card, 'damage')) xrzep = iup;
                else xrzep = vsp;
              } else xrzep = player;
              if (!xrzep) return;
              const result = await xrzep
                .chooseToUse(
                  function (card, player, event) {
                    if (get.tag(trigger.card, 'damage') ? get.tag(card, 'damage') : !get.tag(card, 'damage')) return false;
                    return lib.filter.filterCard.apply(this, arguments);
                  },
                  `使用一张${get.tag(trigger.card, 'damage') ? `非伤害牌` : `伤害牌`}`
                )
                .set('targetRequired', true)
                .set('complexSelect', true)
                .set('filterTarget', function (card, player, target) {
                  if (!player.canUse(card, target)) return false;
                  return lib.filter.targetEnabled.apply(this, arguments);
                })
                .forResult();
            },
          },
          use: {
            audio: 'yjwu',
            enable: 'phaseUse',
            usable: 1,
            filter(event, player) {
              if (player.phaseNumber <= 1) return false;
              const skill = lib.skill.yjwu;
              return game.hasPlayer(function (current) {
                return skill.hasMark('iuwu', player, current) || skill.hasMark('vswu', player, current);
              });
            },
            filterTarget(card, player, target) {
              if (ui.selected.targets.length == 0) {
                const skill = lib.skill.yjwu;
                return skill.hasMark('iuwu', player, target) || skill.hasMark('vswu', player, target);
              }
              return true;
            },
            selectTarget: 2,
            complexSelect: true,
            complexTarget: true,
            multitarget: true,
            prompt: '移动场上的<初舞>或<终舞>',
            targetprompt: ['失去印', '获得印'],
            content() {
              'step 0';
              var skill = lib.skill.yjwu;
              var bool1 = skill.hasMark('iuwu', player, targets[0]),
                bool2 = skill.hasMark('vswu', player, targets[0]);
              if (bool1 && bool2) {
                player.chooseControl('初舞', '终舞').set('prompt', '选择要移动的<印>');
              } else {
                event._result = { control: bool1 ? '初舞' : '终舞' };
              }
              ('step 1');
              var skill = lib.skill.yjwu,
                mark = result.control == '初舞' ? 'iuwu' : 'vswu';
              skill.removeMark(mark, player, targets[0]);
              skill.addMark(mark, player, targets[1]);
            },
            ai: {
              order: 8,
              result: {
                target(player, target) {
                  if (ui.selected.targets.length == 0) {
                    return get.attitude(player, target) < 0 ? -999 : -3;
                  } else {
                    return target.countCards('h') + 1;
                  }
                },
              },
              expose: 0.4,
            },
          },
          die: {
            audio: 'yjwu',
            trigger: { global: 'die' },
            filter(event, player) {
              const skill = lib.skill.yjwu;
              return skill.hasMark('iuwu', player, event.player) || skill.hasMark('vswu', player, event.player);
            },
            forced: true,
            logTarget: 'player',
            content() {
              'step 0';
              if (lib.skill.yjwu.hasMark('iuwu', player, trigger.player)) {
                player.chooseTarget('焰舞:选择一名角色获得<初舞>', true).set('ai', (target) => {
                  return get.attitude(get.player(), target);
                });
              } else event.goto(2);
              ('step 1');
              if (result.bool) {
                var target = result.targets[0];
                player.line(target, 'fire');
                lib.skill.yjwu.addMark('iuwu', player, target);
                event.target = target;
              } else event.finish();
              ('step 2');
              if (lib.skill.yjwu.hasMark('vswu', player, trigger.player)) {
                player.chooseTarget('焰舞:选择一名角色获得<终舞>', true).set('ai', (target) => {
                  return get.attitude(get.player(), target);
                });
              } else event.finish();
              ('step 3');
              if (result.bool) {
                var target = result.targets[0];
                player.line(target, 'thunder');
                lib.skill.yjwu.addMark('vswu', player, target);
              }
            },
          },
          iuwu: {
            marktext: '初',
            intro: {
              name: '初舞',
              content: '',
            },
            charlotte: true,
          },
          vswu: {
            marktext: '终',
            intro: {
              name: '终舞',
              content: '',
            },
            charlotte: true,
          },
        },
      },
      hgmglige: {
        trigger: { global: 'dyingBefore' },
        round: 1,
        filter(event, player) {
          const ep = event.player;
          const iup = game.findPlayer((current) => current.hasSkill('yjwu_iuwu') && current.getStorage('yjwu_iuwu').includes(player));
          const vsp = game.findPlayer((current) => current.hasSkill('yjwu_vswu') && current.getStorage('yjwu_vswu').includes(player));
          return iup && vsp && [iup, vsp].includes(ep);
        }, //QQQ
        async content(event, trigger, player) {
          trigger.cancel();
          const tp = trigger.player;
          const iup = game.findPlayer((current) => current.hasSkill('yjwu_iuwu') && current.getStorage('yjwu_iuwu').includes(player));
          const vsp = game.findPlayer((current) => current.hasSkill('yjwu_vswu') && current.getStorage('yjwu_vswu').includes(player));
          let iuphp = iup.hp,
            vsphp = vsp.hp,
            iavi = Math.abs(iuphp - vsphp);
          tp.when('shaDamage')
            .vars({ p: player })
            .filter((evt) => evt.skill === 'hgmglige')
            .then(() => {
              p.phase('nodelay');
            });
          if (trigger.source)
            for (let i = 0; i < iavi; i++) {
              await tp.useCard({ name: 'sha', nature: 'fire' }, trigger.source, false);
            }
          tp.recover(iavi);
          if (tp === iup) {
            vsp.loseHp(iavi);
          } else {
            iup.loseHp(iavi);
          }
        },
      },
    },
    dynamicTranslate: {},
    translate: {
      hgmgy: '<font color=#33FFCC>☘次元</font>',
      buviho: '不知火',
      yjwu: '焰舞',
      yjwu_info: '①你的第一个准备阶段开始时,你令一名其他角色获得<初舞>,令另一名其他角色获得<终舞>.②出牌阶段限一次.若当前回合不是你的第一个回合,则你可以移动场上的<初舞>或<终舞>.③<初舞>或<终舞>的其他角色死亡时,你转移该角色的<初舞>和<终舞>.④<初舞>/<终舞>角色在自己的回合内使用非伤害牌/伤害牌时,你摸一张牌并可以使用一张伤害牌/非伤害牌.⑤你在自己的回合内使用伤害牌/非伤害牌时,<初舞>和<终舞>角色各摸一张牌,<初舞>/<终舞>角色可以使用一张非伤害牌/伤害牌',
      hgmglige: '离歌',
      hgmglige_info: '当<初舞>/<终舞>角色濒死时,其可以对伤害来源使用bnqmX(<初舞>和<终舞>角色的体力差值)张bnqm火杀(每造成一次伤害,你获得一个额外回合),并与<终舞>/<初舞>角色交换血量',
      hgmgpomo: '泼墨',
      hgmgpomo_info: '当你于回合内/回合外使用一张牌后,你可以令一名角色获得一枚阴/阳印',
      xpyi: '写意',
      xpyi_info: '当有阴阳调和的角色使用锦囊牌时,你选择一项:①改变此牌目标并移动其一枚阴;②改变此牌效果并移动其一枚阴.③改变此牌目标和效果,并弃置其一阴一阳',
      jxjk: '佳境',
      jxjk_info: '场上每出现一个阴阳调和的角色,你摸一张牌',
    },
  };
  lib.config.characters.add('hgmgy');
  lib.config.all.characters.add('hgmgy');
  return hgmgy;
});
