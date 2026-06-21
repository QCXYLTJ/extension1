'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
  game.import('character', function () {
    lib.config.all.characters.add('sdxl');
    lib.config.characters.add('sdxl');
    lib.translate.sdxl_character_config = '<img style=width:100px  src=extension/金庸群侠传/image/title/jy_title_sdxl.jpg>';
    var Group = function (str1, str2) {
      if (!str2) return str1;
      return lib.config.extension_金庸群侠传_changeGroup ? str2 : str1;
    };
    var tupo = function (str1, str2) {
      return lib.config.extension_金庸群侠传_jiexiantupo ? str2 : str1;
    };
    var sdxl = {
      name: 'sdxl',
      connect: true,
      characterSort: {
        sdxl: {
          //绝世高手
          sdxl_jueshi: ['sdxl_jue_yanggaizhi', 'sdxl_guojinghuangrong', 'sdxl_jue_duguqiubai', 'sdxl_juezhoubotong'],
          //襄阳郭家
          sdxl_xiangyangguojia: ['sdxl_guofuX', 'sdxl_guopolu', 'sdxl_spguoxiang', 'sdxl_wudunruwuxiuwen'],
          //桃花岛
          sdxl_taohuadao: ['sdxl_fengmofeng', 'sdxl_chengying'],
          //古墓派
          sdxl_gumu: ['sdxl_xie_limochou', 'sdxl_xiaolongnv', 'sdxl_spyangguo', 'sdxl_limochou', 'sdxl_yangguo', 'sdxl_yangguoxiaolongnv'],
          //全真教
          sdxl_quanzhen: ['sdxl_zhaozhijin', 'sdxl_zhenzhibing'],
          //绝情谷
          sdxl_jueqinggu: ['sdxl_xie_gongsunzhi', 'sdxl_qiuqianchi', 'sdxl_gongsunlve', 'sdxl_gongsunzhi'],
          //陆家庄
          sdxl_lujia: ['sdxl_luwushuang', 'sdxl_luzhanyuan'],
          //蒙古国
          sdxl_menggu: ['sdxl_maguangzuo', 'sdxl_nimoxing', 'sdxl_xiaoxiangziyinkexi', 'sdxl_sp_jinlunfawang', 'sdxl_jinlunfawang', 'sdxl_huodu', 'sdxl_mengge', 'sdxl_hubilie', 'sdxl_daerba', 'sdxl_gongsunlve'],
          //丐帮
          sdxl_gaibang: [''],
          //少林
          sdxl_shaolin: ['sdxl_wusechanshi'],
          //江湖侠客
          sdxl_xiake: [''],
        },
      },
      character: {
        //神雕侠侣侠客信息
        sdxl_maguangzuo: ['male', Group('qun', 'jy_lie'), 4, ['sdxl_jueli', 'sdxl_manba', 'sdxl_zhuangzhi'], ['bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 2 }],
        sdxl_wusechanshi: ['male', Group('wei', 'jy_song'), 3, ['sdxl_zengou', 'sdxl_boyan'], ['bangpai:jy_shaolin'], { drawer: '画师:佚名', skinLevel: 1 }],
        sdxl_luwushuang: ['female', Group('wei', 'jy_song'), 3, ['sdxl_jiahen', 'sdxl_guchu'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 3 }],
        sdxl_nimoxing: ['male', Group('qun', 'jy_lie'), 3, ['sdxl_zhengxun', 'sdxl_duanzu', 'sdxl_kuxing'], ['bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 2 }],
        sdxl_xie_limochou: ['female', Group('jin', 'jy_xie'), 3, ['sdxl_daoge', 'sdxl_duzhuan', 'sdxl_yuhai'], ['bangpai:jy_gumu'], { drawer: '画师:全民武馆', skinLevel: 2 }],
        sdxl_xie_gongsunzhi: ['male', Group('jin', 'jy_xie'), 4, ['sdxl_fenqing', 'sdxl_boqing', 'sdxl_wuqing'], ['bangpai:jy_jueqinggu'], { drawer: '画师:新射雕英雄传', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=361101697&bvid=BV1S94y1i7w5&cid=1201533869&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        sdxl_sp_jinlunfawang: ['male', Group('qun', 'jy_lie'), 4, ['sdxl_feilun_new', 'sdxl_banruo'], ['bangpai:jy_zangzong:jy_dalu'], { drawer: '画师:佚名', skinLevel: 2 }],
        sdxl_xiaoxiangziyinkexi: ['male', Group('qun', 'jy_lie'), 3, ['sdxl_qiejing', 'sdxl_huji'], ['bangpai:jy_dalu'], { drawer: '画师:新射雕英雄传', skinLevel: 2 }],
        sdxl_jue_yanggaizhi: ['male', Group('shen', 'jy_jue'), '4/5', ['sdxl_gaizhi', 'sdxl_shangqing', 'sdxl_xikuang'], ['bangpai:jy_gumu'], { drawer: '画师:沉默的D也有人注册', skinLevel: 4 }], //weibo.com/p/1005056750398984
        sdxl_huodu: ['male', Group('qun', 'jy_lie'), 3, ['sdxl_tuoqiao', 'sdxl_juao', 'sdxl_xianzha'], ['bangpai:jy_dalu'], { drawer: '画师:全民裁决', skinLevel: 4 }],
        sdxl_juezhoubotong: ['male', Group('shen', 'jy_jue'), 3, ['sdxl_hubo', 'sdxl_kongming', 'sdxl_zhuxi'], ['bangpai:jy_quanzhen'], { drawer: '画师:Li FengYang', skinLevel: 4 }],
        sdxl_gongsunlve: ['female', Group('wei', 'jy_song'), 3, ['sdxl_xiandan', 'sdxl_kunqing'], ['bangpai:jy_jueqinggu'], { drawer: '画师:杨杰', skinLevel: 4 }],
        //jy_jueqinggu【绝情谷】
        sdxl_wudunruwuxiuwen: ['male', Group('wei', 'jy_song'), 3, ['sdxl_xiqiang', 'sdxl_shubian'], ['bangpai:jy_taohuadao'], { drawer: '画师:莫那CG绘画学院', skinLevel: 3 }],
        sdxl_daerba: ['male', Group('qun', 'jy_lie'), 4, ['sdxl_qitun', 'sdxl_kuangchu'], ['bangpai:jy_zangzong:jy_dalu'], { drawer: '画师:龙印', skinLevel: 4 }],
        //jy_zangzong<西藏金刚宗等>
        sdxl_luzhanyuan: ['male', Group('wei', 'jy_song'), 3, ['sdxl_wenqing', 'sdxl_huaijuan'], ['bangpai:jy_wangzu'], { drawer: '画师:银色骐骥', skinLevel: 4 }],
        //jy_wangzu<名门望族>
        sdxl_spyangguo: ['male', Group('wei', 'jy_song'), 4, ['sdxl_zhangqing', 'sdxl_liufang'], ['bangpai:jy_gumu:jy_baituoshan'], { drawer: '画师:英雄之刃', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=460201525&bvid=BV1d5411c75v&cid=327216367&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=361472700&bvid=BV1V94y1i7s3&cid=1211332535&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        //jy_gumu<古墓派>
        sdxl_baiban: ['male', Group('wei', 'jy_song'), 1, [], []],
        sdxl_shendiao: ['male', Group('wei', 'jy_song'), 3, ['sdxl_shouzhong', 'qtpz_duwu'], []],
        sdxl_zhenzhibing: ['male', Group('wei', 'jy_song'), 4, ['sdxl_qieyu', 'sdxl_dajie'], ['bangpai:jy_quanzhen'], { drawer: '画师:打夜作', skinLevel: 4 }],
        sdxl_fengmofeng: ['male', Group('wei', 'jy_song'), 3, ['sdxl_qiaojiang', 'sdxl_qianying'], ['bangpai:jy_taohuadao'], { drawer: '画师:龙印2', skinLevel: 4 }],
        sdxl_jue_duguqiubai: ['male', Group('shen', 'jy_jue'), '2/3', ['jue_wuzhao', 'jue_zangjian'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=955667792&bvid=BV1EW4y1f72x&cid=1189252518&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=635832852&bvid=BV1Zb4y1J7HH&cid=489361073&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        sdxl_chengying: ['female', Group('wei', 'jy_song'), 3, ['sdxl_shentong', 'sdxl_xiaoyin'], ['bangpai:jy_taohuadao'], { drawer: '画师:杨杰', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=330132889&bvid=BV1TA411j73s&cid=254035086&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }], //www.artstation.com/jieyang
        sdxl_guojinghuangrong: ['male', Group('shen', 'jy_jue'), '2/3', ['sdxl_gulei', 'sdxl_yingguan', 'sdxl_weicheng'], ['bangpai:jy_taohuadao:jy_gaibang'], { drawer: '画师:ART OF MAIIMOU', skinLevel: 2 }],
        sdxl_hubilie: ['male', Group('qun', 'jy_lie'), 4, ['sdxl_kaoshang', 'sdxl_quanxiang'], ['bangpai:jy_dalu'], { drawer: '画师:大唐无双', skinLevel: 4 }],
        sdxl_yangguoxiaolongnv: ['double', Group('wei', 'jy_song'), 3, ['sdxl_bihe', 'sdxl_xianlv'], ['bangpai:jy_gumu'], { drawer: '画师:王啸宇Xiaoyu Wang', skinLevel: 4 }], //artstation.com/wangxiaoyu
        sdxl_yangguo: ['male', Group('wei', 'jy_song'), 3, ['sdxl_anhun', 'sdxl_biefu', 'sdxl_shangli'], ['zhu', 'bangpai:jy_gumu:jy_baituoshan'], { drawer: '画师:战江湖', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=359739292&bvid=BV13X4y1x7YA&cid=1231404498&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=274721356&bvid=BV1iF411Z76H&cid=1231397492&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        sdxl_xiaolongnv: ['female', Group('wei', 'jy_song'), 3, ['sdxl_luowang', 'sdxl_hebi', 'sdxl_muzong'], ['zhu', 'bangpai:jy_gumu'], { drawer: '画师:新射雕英雄传', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=702170053&bvid=BV1hm4y1p7rz&cid=1231863554&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'], spineSkins: { diewu: { name: '蝶舞轻灵', file: 'extension/金庸群侠传皮肤包/spine/xiaolongnv/蝶舞轻灵/daiji.json', x: 0, y: 300, scale: 0, width: 600, height: 800, animation: 'daiji', background: 'extension/金庸群侠传皮肤包/skin/xiaolongnv/蝶舞轻灵/bg.jpg' } } }],
        sdxl_jinlunfawang: ['male', Group('qun', 'jy_lie'), 4, ['sdxl_longxiang', 'sdxl_mizong'], ['bangpai:jy_zangzong:jy_dalu'], { drawer: '画师:佚名', skinLevel: 4 }],
        sdxl_mengge: ['male', Group('qun', 'jy_lie'), 4, ['sdxl_fasong', 'sdxl_xiezhi'], ['bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 1 }],
        sdxl_gongsunzhi: ['male', Group('wei', 'jy_song'), 4, ['sdxl_qinggu', 'sdxl_zhenwang'], ['bangpai:jy_jueqinggu'], { drawer: '画师:佚名', skinLevel: 2 }],
        sdxl_spguoxiang: ['female', Group('wei', 'jy_song'), 4, ['sdxl_qinmu', 'sdxl_renxia'], ['bangpai:jy_taohuadao'], { drawer: '画师:龙印', skinLevel: 2 }],
        sdxl_limochou: ['female', Group('wei', 'jy_song'), 3, ['sdxl_shixin', 'sdxl_bingpo', 'sdxl_sanwu'], ['bangpai:jy_gumu'], { drawer: '画师:战江湖', skinLevel: 4 }],
        sdxl_qiuqianchi: ['female', Group('wei', 'jy_song'), 3, ['sdxl_guofu', 'sdxl_heji', 'sdxl_zifu'], ['bangpai:jy_jueqinggu'], { drawer: '画师:佚名', skinLevel: 1 }],
        sdxl_zhaozhijin: ['male', Group('wei', 'jy_song'), 4, ['sdxl_lingxie', 'sdxl_bishan', 'sdxl_tongbi'], ['bangpai:jy_quanzhen'], { drawer: '画师:超', skinLevel: 1 }],
        sdxl_guofuX: ['female', Group('wei', 'jy_song'), 4, ['sdxl_jiaozi', 'sdxl_danni'], ['bangpai:jy_taohuadao'], { drawer: '画师:剑网3', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=507572519&bvid=BV1Gu411S72g&cid=469147735&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        sdxl_guopolu: ['male', Group('wei', 'jy_song'), 3, ['sdxl_zhulu', 'sdxl_zhonggu'], ['bangpai:jy_taohuadao'], { drawer: '画师:九阴真经', skinLevel: 3 }],
      },
      characterIntro: {
        //神雕侠侣侠客小传
      },
      characterTitle: {
        //武将称号
        sdxl_maguangzuo: '匹夫之勇',
        sdxl_wusechanshi: '物薄情厚',
        sdxl_luwushuang: '苦海孤雏',
        sdxl_nimoxing: '天竺矮僧',
        sdxl_wudunruwuxiuwen: '兄弟阋墙',
        sdxl_daerba: '拔地参天',
        sdxl_luzhanyuan: '负心薄幸',
        sdxl_spyangguo: '神雕大侠',
        sdxl_shendiao: '百年神兽',
        sdxl_zhenzhibing: '大节不亏',
        sdxl_fengmofeng: '巧夺天工',
        sdxl_jue_duguqiubai: '剑魔',
        sdxl_chengying: '契若金兰',
        sdxl_guojinghuangrong: '孤城临险',
        sdxl_hubilie: '悬赏劫营',
        sdxl_yangguoxiaolongnv: '双剑合璧',
        sdxl_yangguo: '西狂',
        sdxl_xiaolongnv: '古墓仙踪',
        sdxl_jinlunfawang: '蒙古国师',
        sdxl_mengge: '兴师伐宋',
        sdxl_gongsunzhi: '绝情谷主',
        sdxl_spguoxiang: '小东邪',
        sdxl_limochou: '赤练仙子',
        sdxl_qiuqianchi: '铁掌莲花',
        sdxl_zhaozhijin: '通敌叛教',
        sdxl_guofuX: '鲜衣白驹',
        sdxl_guopolu: '满门忠烈',
      },
      perfectPair: {
        sdxl_yangguo: ['sdxl_xiaolongnv'],
      },
      //------------------技能开始----------------------------
      skill: {
        //
        //马光佐 霸天 20240610
        sdxl_jueli: {
          shaRelated: true,
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: 'useCardToPlayered',
          },
          filter(event, player) {
            if (!player.countCards('h')) return false;
            if (!event.target.countCards('h')) return false;
            return event.card && event.card.name == 'sha';
          },
          logTarget: 'target',
          preHidden: true,
          cost() {
            'step 0';
            const playerd = player.getCards('h').filter((card) => lib.filter.cardDiscardable(card, player, event.name)).length;
            const targetd = trigger.target.getCards('h').filter((card) => lib.filter.cardDiscardable(card, trigger.target, event.name)).length;
            const min = Math.min(playerd, targetd);
            const next = player.chooseCard([1, min], 'h', get.prompt2('sdxl_jueli', trigger.target), lib.filter.cardDiscardable);
            next.set('ai', function (card) {
              if (!_status.event.check) return -1;
              if (ui.selected.cards.length >= 1) return 0;
              return card.number;
            });
            next.set('check', get.effect(trigger.target, trigger.card, player, player) > 0);
            ('step 1');
            if (result.bool) {
              event.result = {
                bool: true,
                targets: [trigger.target],
                cost_data: {
                  cards: result.cards,
                },
              };
            } else {
              event.result = {
                bool: false,
              };
            }
          },
          content() {
            'step 0';
            event.list1 = event.cost_data.cards;
            event.list2 = [];
            const playerd = player.getCards('h').filter((card) => lib.filter.cardDiscardable(card, player, event.name)).length;
            const targetd = trigger.target.getCards('h').filter((card) => lib.filter.cardDiscardable(card, trigger.target, event.name)).length;
            const min = Math.min(playerd, targetd);
            const next = trigger.target.chooseCard(true, [1, min], 'h', 'sdxl_jueli:选择要弃置的牌', lib.filter.cardDiscardable);
            next.set('ai', function (card) {
              if (!_status.event.check) return -1;
              if (ui.selected.cards.length >= 1) return 0;
              return card.number;
            });
            next.set('check', get.effect(trigger.target, trigger.card, player, trigger.target) > 0);
            ('step 1');
            if (result.bool) {
              event.list2 = result.cards;
            }
            event.maxNumPlayer = (function () {
              const playerCount = event.list1.reduce(function (sum, card) {
                return sum + card.number;
              }, 0);
              const targetCount = event.list2.reduce(function (sum, card) {
                return sum + card.number;
              }, 0);
              game.log(player, '弃置牌点数:', playerCount);
              game.log(trigger.target, '弃置牌点数:', targetCount);
              if (playerCount > targetCount) {
                return player;
              } else if (playerCount < targetCount) {
                return trigger.target;
              }
              return null;
            })();
            event.maxLengthPlayer = (function () {
              game.log(player, '弃置牌张数:', event.list1.length);
              game.log(trigger.target, '弃置牌张数:', event.list2.length);
              if (event.list1.length > event.list2.length) {
                return player;
              } else if (event.list1.length < event.list2.length) {
                return trigger.target;
              }
              return null;
            })();
            if (event.list1.length && event.list2.length) {
              game.loseAsync({
                lose_list: [
                  [player, event.list1],
                  [trigger.target, event.list2],
                ],

                discarder: player,
              }).setContent('discardMultiple');
            } else if (event.list2.length) {
              trigger.target.discard(event.list2);
            } else player.discard(event.list1);
            ('step 2');
            if (event.maxNumPlayer) {
              const strsha = get.translation(trigger.card);
              const strtarget = get.translation(trigger.target);
              event.maxNumPlayer.chooseBool(`是否令${strsha}对${strtarget}无效？否则${strsha}对${strtarget}不可响应`).set('choice', get.effect(trigger.target, trigger.card, trigger.player, event.maxNumPlayer) < 0);
            } else {
              event.goto(4);
            }
            ('step 3');
            if (result.bool) {
              trigger.parent.excluded.add(trigger.target);
              game.log(trigger.card, '对', trigger.target, '无效!');
            } else {
              trigger.parent.directHit.add(trigger.target);
              game.log(trigger.card, '对', trigger.target, '不可响应!');
            }
            ('step 4');
            if (event.maxLengthPlayer) {
              const strsha = get.translation(trigger.card);
              const strtarget = get.translation(trigger.target);
              event.maxLengthPlayer.chooseBool(`是否令${strsha}对${strtarget}伤害+1？否则${strsha}对${strtarget}伤害-1`).set('choice', get.effect(trigger.target, trigger.card, trigger.player, event.maxLengthPlayer) > 0);
            } else {
              event.finish();
            }
            ('step 5');
            const id = trigger.target.playerid;
            const map = trigger.parent.customArgs;
            if (!map[id]) map[id] = {};
            if (typeof map[id].extraDamage != 'number') {
              map[id].extraDamage = 0;
            }
            if (result.bool) {
              map[id].extraDamage += 1;
              game.log(trigger.card, '对', trigger.target, '伤害+1');
            } else {
              map[id].extraDamage -= 1;
              game.log(trigger.card, '对', trigger.target, '伤害-1');
            }
          },
        },
        sdxl_manba: {
          mod: {
            cardnumber(card, owner, number) {
              if (get.itemtype(card) != 'card') return;
              if (typeof number != 'number') return;
              if ([1, 11, 12].includes(number)) return 13;
            },
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['useCard1', 'respond'],
          },
          filter(event, player) {
            //if(event.skill) return false;
            if (event.card.number != 13) return false;
            if (!event.cards) return false;
            if (event.cards.length != 1) return false;
            return [1, 11, 12].includes(event.card.number);
          },
          forced: true,
          firstDo: true,
          content() { },
        },
        sdxl_zhuangzhi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin',
          },
          forced: true,
          getCount(player) {
            const history = player.getHistory('useCard', function (evt) {
              //if(!evt.targets||!evt.targets.length) return false;
              return get.tag(evt.card, 'damage');
            });
            let count = 0;
            if (!history.length) {
              count = 2;
            } else {
              count = history.filter(function (evt) {
                return !game.hasPlayer2(function (current) {
                  return current.getHistory('damage', function (damage) {
                    return damage.card == evt.card;
                  }).length;
                });
              }).length;
            }
            return count;
          },
          filter(event, player) {
            return lib.skill.sdxl_zhuangzhi.getCount(player) > 0;
          },
          content() {
            player.draw(lib.skill.sdxl_zhuangzhi.getCount(player));
          },
        },
        //无色禅师 霸天 20240609
        sdxl_zengou: {
          subSkill: {
            removeSkill: {
              trigger: {
                global: ['phaseBegin', 'die'],
              },
              forced: true,
              forceDie: true,
              charlotte: true,
              forced: true,
              content() {
                'step 0';
                if (trigger.name == 'die' && trigger.player == player) {
                  player.removeSkill('sdxl_zengou_gainSkill');
                  event.finish();
                  return;
                }
                event.loseSkill = player.storage.sdxl_zengou_gainSkill.filter((i) => i.source && i.source == trigger.player);
                if (event.loseSkill.length) {
                  player.storage.sdxl_zengou_gainSkill.removeArray(event.loseSkill);
                  const loseSkills = event.loseSkill.map((i) => i.skill);
                  loseSkills.forEach((element) => {
                    player.removeAdditionalSkills('sdxl_zengou_gainSkill', element);
                  });
                }
                ('step 1');
                if (!player.storage.sdxl_zengou_gainSkill.length) {
                  player.removeSkill('sdxl_zengou_gainSkill');
                }
              },
            },
            gainSkill: {
              group: 'sdxl_zengou_removeSkill',
              trigger: {
                player: 'phaseEnd',
              },
              init(player, skill) {
                if (!player.storage[skill]) player.storage[skill] = [];
              },
              forced: true,
              charlotte: true,
              forced: true,
              content() {
                'step 0';
                event.gives = player.storage.sdxl_zengou_gainSkill.filter((i) => Boolean(i.equip) && player.getCards('e').includes(i.equip));
                ('step 1');
                if (event.gives.length) {
                  event.give = event.gives.shift();
                  if (!event.give || !player.getCards('e').includes(event.give.equip)) {
                    event.redo();
                    return;
                  }
                } else {
                  event.finish();
                  return;
                }
                player
                  .chooseTarget(`令一名其他角获得【${get.translation(event.give.equip)}】和【${get.translation(event.give.skill)}】`, function (card, player, target) {
                    if (!target.canEquip(event.give.equip)) return false;
                    return target != player && target != event.give.source;
                  })
                  .set('ai', function (target) {
                    const player = _status.event.player;
                    return get.attitude(player, target);
                  });
                ('step 2');
                if (result.bool) {
                  result.targets[0].equip(event.give.equip);
                  player.$give(event.give.equip, result.targets[0]);
                  player.line(result.targets, 'green');
                  result.targets[0].addSkill('sdxl_zengou_gainSkill');
                  result.targets[0].addAdditionalSkills('sdxl_zengou_gainSkill', event.give.skill, true);
                  result.targets[0].storage.sdxl_zengou_gainSkill.push({
                    source: event.give.source,
                    skill: event.give.skill,
                    equip: null,
                  });
                }
                event.goto(1);
              },
            },
          },
          enable: 'phaseUse',
          filterCard() {
            return false;
          },
          selectCard: -1,
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filterTarget(card, player, target) {
            if (target == player) return false;
            return get.cardPile(function (card) {
              if (get.type(card) != 'equip') return false;
              if (get.subtype(card) != 'equip5') return false;
              if (get.cardtag(card, 'gifts')) return false;
              if (!target.canUse(card, target)) return false;
              return target.canEquip(card, true);
            });
          },
          content() {
            const equip = get.cardPile(function (card) {
              if (get.type(card) != 'equip') return false;
              if (get.subtype(card) != 'equip5') return false;
              if (get.cardtag(card, 'gifts')) return false;
              if (!target.canUse(card, target)) return false;
              return target.canEquip(card, true);
            });
            target.useCard(equip, false, target, 'noai');
            const gainSkill = lib.jy_shaolin_skills.filter((i) => !target.hasSkill(i)).randomGet();
            target.addSkill('sdxl_zengou_gainSkill');
            target.addAdditionalSkills('sdxl_zengou_gainSkill', gainSkill, true);
            target.storage.sdxl_zengou_gainSkill.push({
              source: player,
              skill: gainSkill,
              equip: equip,
            });
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                if (target.hasEmptySlot('equip5')) return 5;
                return 2;
              },
            },
          },
        },
        sdxl_boyan: {
          getNoPlayerSkill(player) {
            const Origina = player.getOriginalSkills();
            const playerSkills = lib.skill.sdxl_boyan.getSkillCount(player, true);
            return playerSkills.filter((i) => !Origina.includes(i)).length;
          },
          getSkillCount(player, arr) {
            const skills = player.getSkills(null, false, false).slice(0);
            const skills2 = game.filterSkills(skills, player);
            for (var i in player.disabledSkills) {
              if (player.disabledSkills[i].length == 1 && player.disabledSkills[i][0] == i + '_awake' && !player.hiddenSkills.includes(i)) {
                skills.add(i);
              }
            }
            const results = skills.filter(function (skill) {
              if (!lib.skill[skill]) return false;
              if (lib.skill[skill].nopop) return false;
              if (lib.skill[skill].equipSkill) return false;
              if (!lib.translate[skill + '_info'] || !lib.translate[skill + '_info'].length) return false;
              if (!lib.translate[skill]) return false;
              return true;
            });
            if (arr) return results;
            return results.length;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseDrawBegin2',
          },
          forced: true,
          mod: {
            maxHandcard(player, num) {
              const storage = player.storage.sdxl_boyan;
              if (!storage) {
                const players = game.filterPlayer((i) => lib.skill.sdxl_boyan.getNoPlayerSkill(i) > 0);
                if (players.length) {
                  return num + players.length;
                }
              } else {
                const nums = game.filterPlayer().map((i) => lib.skill.sdxl_boyan.getSkillCount(i));
                const maxnum = Math.max(...nums);
                return num + maxnum;
              }
            },
          },
          content() {
            'step 0';
            if (!trigger.numFixed) {
              const storage = player.storage.sdxl_boyan;
              if (storage) {
                const players = game.filterPlayer((i) => lib.skill.sdxl_boyan.getNoPlayerSkill(i) > 0);
                if (players.length) {
                  game.log('本回合拥有非武将牌上技能的角色', players, '角色数量', players.length);
                  trigger.num += players.length;
                }
              } else {
                const nums = game.filterPlayer().map((i) => lib.skill.sdxl_boyan.getSkillCount(i));
                const maxnum = Math.max(...nums);
                if (maxnum) {
                  const players = game.filterPlayer((i) => lib.skill.sdxl_boyan.getSkillCount(i) == maxnum);
                  if (players.length) {
                    game.log('拥有技能最多的角色或之一的角色', players, '技能数量', maxnum);
                  }
                  trigger.num += maxnum;
                }
              }
            }
            ('step 1');
            player.changeZhuanhuanji(event.name);
          },
          zhuanhuanji: true,
          mark: true,
          marktext: '☯',
          intro: {
            content(storage, player) {
              if (storage) return '摸牌阶段摸牌时,你可多摸:阳: X张牌,本回合手牌上限+X(X为场上拥有非武将牌上技能的角色数)';
              return '摸牌阶段摸牌时,阴: Y张牌,本回合手牌上限+Y(Y为场上拥有技能最多的角色或之一的技能数) .';
            },
          },
        },
        //陆无双 霸天 20240607
        sdxl_jiahen2: {
          audio: 'sdxl_jiahen',
          trigger: {
            player: 'loseEnd',
            global: ['equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd'],
          },
          cost() {
            'step 0';
            player.chooseTarget(
              get.prompt('sdxl_jiahen'),
              '横置或重置至多3名角色',
              [1, 3],
              function (card, player, target) {
                return true;
              },
              function (target) {
                const player = _status.event.player;
                return get.effect(target, { name: 'tiesuo_ai' }, player, player);
              },
            );
            ('step 1');
            event.result = result;
          },
          filter(event, player) {
            if (player.countCards('h')) return false;
            var evt = event.getl(player);
            return evt && evt.player == player && evt.hs && evt.hs.length;
          },
          content() {
            event.targets.filter((i) => i.link());
          },
        },
        sdxl_jiahen: {
          group: 'sdxl_jiahen2',
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:3',
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          filterCard(card, player) {
            return false;
          },
          selectCard: -1,
          usable: 1,
          filterTarget(card, player, target) {
            if (target == player) return false;
            return true;
          },
          content() {
            'step 0';
            target.choosePlayerCard('家恨:展示' + get.translation(player) + '一张手牌', 'h', player, true);
            ('step 1');
            if (result.bool) {
              event.cardx = result.links[0];
              target.showCards(event.cardx, get.translation(player) + '被展示');
            } else {
              event.finish();
            }
            ('step 2');
            if (event.cardx) {
              const color = get.color(event.cardx);
              if (color == 'red') {
                player.discard(event.cardx).discarder = target;
              } else if (color == 'black') {
                player.give(event.cardx, target);
              }
            }
          },
          ai: {
            order: 0.2,
            result: {
              target(player, target) {
                return 1;
              },
            },
          },
        },
        sdxl_guchu: {
          subSkill: {
            lose: {
              disContent() {
                'step 0';
                player.chooseBool(get.prompt('sdxl_guchu'), `获得三张${get.translation(event.loseCard.suit)}牌`);
                ('step 1');
                if (result.bool) {
                  const suit = event.loseCard.suit;
                  const gains = get.randomCards(3, (card) => card.suit == suit);
                  if (gains && gains.length) {
                    player.gain(gains, 'log', 'gain2');
                  } else {
                    game.log(`牌堆没有${get.translation(suit)}牌了!`);
                  }
                }
              },
              gainContent() {
                'step 0';
                player
                  .chooseTarget(get.prompt('sdxl_guchu'), '获得其他一至三名角色的各一张手牌', [1, 3], function (card, player, target) {
                    return target != player && target.countGainableCards(player, 'he') > 0;
                  })
                  .set('ai', function (target) {
                    const player = _status.event.player;
                    return get.effect(
                      target,
                      {
                        name: 'shunshou_ai',
                        position: 'he',
                      },
                      player,
                      player,
                    );
                  });
                ('step 1');
                if (result.bool) {
                  player.gainMultiple(result.targets, 'he');
                }
              },
              respondContent() {
                'step 0';
                player
                  .chooseTarget(get.prompt('sdxl_guchu'), '分配一点火焰伤害', function (card, player, target) {
                    return target != player;
                  })
                  .set('ai', function (target) {
                    const player = _status.event.player;
                    return get.damageEffect(target, player, player, 'fire');
                  });
                ('step 1');
                if (result.bool) {
                  result.targets[0].damage('fire');
                }
              },
              useContent() {
                'step 0';
                const libVcard = lib.inpile.filter(function (name) {
                  if (event.noUseName && event.noUseName == name) return false;
                  const Vcard = { name: name };
                  if (get.type(Vcard) != 'trick') return false;
                  return player.hasUseTarget(Vcard);
                });
                if (!libVcard.length) {
                  event.finish();
                  return;
                }
                const libVcards = [];
                for (let use of libVcard) {
                  libVcards.push([get.type(use), '', use]);
                }
                player
                  .chooseButton([get.prompt('sdxl_guchu') + '视为使用一张普通锦囊牌', [libVcards, 'vcard']])
                  .set('filterButton', function (button) {
                    const player = _status.event.player;
                    const Vcard = {
                      name: button.link[2],
                      nature: button.link[3],
                    };
                    return player.hasUseTarget(Vcard);
                  })
                  .set('ai', function (button) {
                    const player = _status.event.player;
                    const Vcard = {
                      name: button.link[2],
                      nature: button.link[3],
                    };
                    return player.getUseValue(Vcard);
                  });
                ('step 1');
                if (result.bool) {
                  const Vcard = {
                    name: result.links[0][2],
                    nature: result.links[0][3],
                  };
                  player.chooseUseTarget(Vcard, true, false);
                  if (!event.noUseName) {
                    const next = game.createEvent(`${event.name}`, false, event.parent);
                    next.loseCard = event.loseCard;
                    next.noUseName = result.links[0][2];
                    next.player = player;
                    next.setContent(lib.skill.sdxl_guchu_lose.useContent);
                  } else {
                  }
                }
              },
              forced: true,
              popup: false,
              trigger: {
                player: 'loseAfter',
                global: ['gainAfter', 'loseAsyncAfter', 'useCardAfter', 'respondAfter'],
              },
              getIndex(event, player, triggername) {
                const loseEvt = [];
                if (event.type == 'use') return false;
                if (event.name == 'useCard' || event.name == 'respond') {
                  player.getHistory('lose', function (evt) {
                    if (evt.type != 'use') return false;
                    if (evt.parent != event) return false;
                    loseEvt.push(evt);
                  });
                } else {
                  const evt = event.getl(player);
                  if (evt && evt.player == player && evt.cards && evt.cards.length) loseEvt.push(evt);
                }
                const ArrayCard = [];
                for (const e of loseEvt) {
                  for (var i in e.gaintag_map) {
                    if (e.gaintag_map[i].includes('sdxl_guchu')) {
                      if (event.name == 'useCard' || event.name == 'respond') {
                        ArrayCard.push([event.name, e.cards.find((card) => card.cardid == i)]);
                      } else if (event.type == 'discard') {
                        ArrayCard.push(['discard', e.cards.find((card) => card.cardid == i)]);
                      } else if (event.name == 'gain' || event.type == 'gain') {
                        ArrayCard.push(['gain', e.cards.find((card) => card.cardid == i)]);
                      }
                    }
                  }
                }
                return ArrayCard.length ? ArrayCard : false;
              },
              content() {
                const indexedData = event.indexedData;
                if (indexedData[0] == 'discard') {
                  const next = game.createEvent(`${event.name}${indexedData[0]}`, false);
                  next.loseCard = event.indexedData[1];
                  next.player = player;
                  next.setContent(lib.skill.sdxl_guchu_lose.disContent);
                } else if (indexedData[0] == 'gain') {
                  const next = game.createEvent(`${event.name}${indexedData[0]}`, false);
                  next.loseCard = event.indexedData[1];
                  next.player = player;
                  next.setContent(lib.skill.sdxl_guchu_lose.gainContent);
                } else if (indexedData[0] == 'useCard') {
                  const next = game.createEvent(`${event.name}${indexedData[0]}`, false);
                  next.loseCard = event.indexedData[1];
                  next.player = player;
                  next.setContent(lib.skill.sdxl_guchu_lose.useContent);
                } else if (indexedData[0] == 'respond') {
                  const next = game.createEvent(`${event.name}${indexedData[0]}`, false);
                  next.loseCard = event.indexedData[1];
                  next.player = player;
                  next.setContent(lib.skill.sdxl_guchu_lose.respondContent);
                }
              },
            },
          },
          group: 'sdxl_guchu_lose',
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: { player: ['damageEnd', 'phaseEnd'] },
          forced: true,
          getIndex(event, player, triggername) {
            if (event.name == 'damage') return Math.min(event.num, 9) || 1;
            return 1;
          },
          content() {
            'step 0';
            player.draw();
            ('step 1');
            if (player.countCards('h', (i) => !i.hasGaintag('sdxl_guchu'))) {
              player.chooseCard('将一张未标记过的手牌标记为<雏>牌', true, function (card) {
                return !card.hasGaintag('sdxl_guchu');
              });
            } else {
              event.finish();
            }
            ('step 2');
            if (result.bool) {
              player.addGaintag(result.cards, 'sdxl_guchu');
            }
          },
        },
        //尼摩星 霸天   2024 - 05
        sdxl_zhengxun2: {
          charlotte: true,
          marktext: '争',
          forced: true,
          intro: {
            content: '$造成伤害时,你成为此伤害来源',
          },
          silent: true,
          nopop: true,
          audio: 'sdxl_zhengxun',
          trigger: {
            global: 'damageBefore',
          },
          filter(event, player) {
            if (!event.source) return false;
            if (!event.source.isIn()) return false;
            if (event.source == player) return false;
            if (!player.getStorage('sdxl_zhengxun2').includes(event.source)) return false;
            return true;
          },
          content() {
            game.log(player, '代替', trigger.source, '成为了伤害来源');
            trigger.source = player;
          },
        },
        sdxl_zhengxun: {
          logTarget: 'source',
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            global: 'damageEnd',
          },
          filter(event, player) {
            if (!event.source) return false;
            if (!event.source.isIn()) return false;
            if (event.source == player) return false;
            if (event.source.countCards('h') <= player.countCards('h')) return false;
            if (player.getStorage('sdxl_zhengxun2').includes(event.source)) return false;
            return true;
          },
          content() {
            'step 0';
            const next = trigger.source.chooseBool('是否令' + get.translation(player) + '将手牌摸着至与你手牌相等?否则其成为你成为其本局造成伤害的来源');
            next.set('choice', get.attitude(trigger.source, player) > 0);
            ('step 1');
            if (result.bool) {
              player.drawTo(trigger.source.countCards('h'));
            } else {
              player.addSkill('sdxl_zhengxun2');
              player.markAuto('sdxl_zhengxun2', [trigger.source]);
            }
          },
        },
        sdxl_duanzu: {
          subSkill: {
            link: {
              trigger: {
                player: 'linkBefore',
              },
              silent: true,
              nopop: true,
              charlotte: true,
              init(player, skill) {
                const next = game.createEvent('zhuque_clear');
                next.player = player;
                next.setContent(function () {
                  if (!player.isLinked()) player.link();
                });
              },
              forced: true,
              filter(event, player) {
                return player.isLinked();
              },
              content() {
                trigger.cancel();
              },
              ai: {
                link: true,
                effect: {
                  target(card) {
                    if (card.name == 'tiesuo') return 'zeroplayertarget';
                  },
                },
              },
            },
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['damageAfter', 'dying'],
            target: 'useCardToTargeted',
          },
          mark: true,
          limited: true,
          filter(event, player) {
            if (event.name == 'damage') {
              return event.hasNature('jy_du');
            } else if (event.name == 'dying') {
              return true;
            } else {
              return event.card && event.card.name == 'jydiy_bingpoyinzhen';
            }
          },
          content() {
            player.awakenSkill(event.name);
            if (player.countEnabledSlot(3)) player.disableEquip(3);
            if (player.countEnabledSlot(4)) player.disableEquip(4);
            player.addSkill('sdxl_duanzu_link');
            player.removeSkills('sdxl_zhengxun');
          },
          intro: {
            content: 'limited',
          },
          init(player, skill) {
            player.storage[skill] = false;
          },
        },
        sdxl_kuxing: {
          mod: {
            maxHandcard(player, num) {
              return num + get.jy_deEffect2(player);
            },
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd',
            source: 'damageSource',
          },
          prompt2(event, player) {
            return '摸' + get.jy_deEffect2(player) + '张牌';
          },
          filter(event, player) {
            if (get.jy_deEffect2(player) == 0) return false;
            return event.num > 0;
          },
          content() {
            player.draw(get.jy_deEffect2(player));
          },
          usable: 1,
        },
        //邪李莫愁 霸天 20240508
        sdxl_daoge: {
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            player: 'chooseToUseBegin',
          },
          filterRed() {
            return (
              game.countPlayer(function (i) {
                return i.countCards('ej', { color: 'red' }) - i.countCards('ej', { color: 'black' });
              }) > 0
            );
          },
          filterBlack() {
            return (
              game.countPlayer(function (i) {
                return i.countCards('ej', { color: 'red' }) - i.countCards('ej', { color: 'black' });
              }) < 0
            );
          },
          filter(event, player) {
            if (event.responded) return false;
            if (!event.type) return false;
            if (event.type != 'jydiy_qinghua' && event.type != 'jydiy_bingpoyinzhen') return false;
            if (event.type == 'jydiy_bingpoyinzhen' && event.parent._trigger.name != 'useCard') return false;
            if (event.type == 'jydiy_qinghua' && !lib.skill.sdxl_daoge.filterRed()) return false;
            if (event.type == 'jydiy_bingpoyinzhen' && !lib.skill.sdxl_daoge.filterBlack()) return false;
            if (!event.useTarget) return false;
            //game.log("filter2")
            return true;
          },
          forced: true,
          content() {
            //game.log("filter3")
            const cardName = trigger.type;
            let bool = Math.random() < 0.5;
            if (cardName == 'jydiy_qinghua') {
              bool = true;
            }
            if (bool) {
              //game.log("filter4")
              trigger.untrigger();
              trigger.set('responded', true);
              trigger.result = {
                bool: true,
                card: { name: cardName },
                targets: [trigger.useTarget],
              };
            } else {
              if (!player.hasUsableCard(cardName, 'all')) trigger.cancel();
            }
          },
          ai: {
            customEnable: true,
            skillTagFilter(player, tag, arg) {
              //game.log("filter1")
              //game.log("argcard",arg.card)
              if (!arg) return false;
              if (!arg.name) return false;
              if (arg && arg.name != 'jydiy_qinghua' && arg.name != 'jydiy_bingpoyinzhen') return false;
              if (arg && arg.name == 'jydiy_bingpoyinzhen' && arg.event.name != 'useCard') return false;
              if (arg && arg.name == 'jydiy_qinghua' && !lib.skill.sdxl_daoge.filterRed()) return false;
              if (arg && arg.name == 'jydiy_bingpoyinzhen' && !lib.skill.sdxl_daoge.filterBlack()) return false;
              //game.log("argcard222",arg.card)
              return true;
            },
          },
        },
        sdxl_duzhuan: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          position: 'h',
          filterCard(card, player, event) {
            const name = card.name;
            const names = lib.jy_duyaoList.slice(0);
            names.addArray(lib.jy_anqiList);
            if (!names.includes(name)) return false;
            return lib.filter.cardDiscardable(card, player, event);
          },
          filter(event, player) {
            return (
              player.countCards('h', function (card) {
                return lib.skill.sdxl_duzhuan.filterCard(card, player);
              }) > 0
            );
          },
          discard: false,
          lose: false,
          delay: false,
          selectCard: [1, Infinity],
          check(card) {
            return 1;
          },
          group: 'sdxl_duzhuan2',
          content() {
            player.discard(cards);
            player.draw(cards.length * 3);
          },
          ai: {
            order(item, player) {
              return 1;
            },
            result: {
              player: 1,
            },
          },
        },
        sdxl_duzhuan2: {
          audio: 'sdxl_duzhuan',
          trigger: {
            target: 'useCardToTargeted',
          },
          filter(event, player) {
            if (lib.jy_anqiList.includes(event.card.name)) return true;
            if (lib.jy_duyaoList.includes(event.card.name)) return true;
            return false;
          },
          forced: true,
          content() {
            player.draw(3);
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (lib.jy_anqiList.includes(card.name)) return [1, 3];
                if (lib.jy_duyaoList.includes(card.name)) return [1, 3];
              },
            },
          },
        },
        sdxl_yuhai: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: 'damageEnd',
          },
          filter(event, player) {
            if (!game.hasPlayer((i) => !i.hasSkill('sdxl_yuhai_hs'))) return false;
            return event.num > 0;
          },
          forced: true,
          content() {
            'step 0';
            event.num1 = trigger.num;
            ('step 1');
            player
              .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                return !target.hasSkill('sdxl_yuhai_hs');
              })
              .set('ai', function (target) {
                if (player.hasSkill('sdxl_duzhuan') && target == player) return get.attitude(player, target);
                return -get.attitude(player, target);
              });
            ('step 2');
            if (result.bool) {
              result.targets[0].addSkill('sdxl_yuhai_hs');
              event.num1--;
              if (lib.skill[event.name].filter({ num: event.num1 })) event.goto(1);
            }
          },
          subSkill: {
            hs: {
              marktext: '欲',
              intro: {
                content: '红色非装备手牌视为情花',
              },
              mark: true,
              charlotte: true,
              mod: {
                cardname(card, player) {
                  if (get.color(card) == 'red' && get.type(card, null, false) != 'equip') return 'jydiy_qinghua';
                },
              },
            },
          },
        },
        //邪公孙止 霸天20230709
        sdxl_fenqing2: {
          marktext: '焚',
          intro: {
            name: '焚情',
            content: 'mark',
          },
        },
        sdxl_fenqing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            source: 'damageSource',
            player: 'damageEnd',
          },
          forced: true,
          marktext: '焚',
          intro: {
            name: '焚情',
            content: 'mark',
          },
          filter(event, player) {
            if (player.countMark('sdxl_fenqing2') >= 3) return false;
            return event.num > 0;
          },
          async content(event, trigger, player) {
            await player.addMark('sdxl_fenqing2', 1, false);
            if (player.countMark('sdxl_fenqing2') >= 3) {
              player.awakenSkill(event.name);
              player.storage[event.name] = true;
            }
            let count = get.randomCards(999, (i) => i.name == 'jydiy_qinghua').length;
            count += game.countPlayer(function (current) {
              return current.countCards('hejsx', (i) => i.name == 'jydiy_qinghua');
            });
            if (!count) count = 2;
            await lib.inpile.add('jydiy_qinghua');
            let cards = [];
            for (var i = 0; i < count; i++) {
              cards.push(game.createCard2('jydiy_qinghua', 'heart', null));
            }
            game.log(cards, '洗入了牌堆!');
            while (cards.length) {
              let num = get.rand(ui.cardPile.childElementCount);
              let card = cards.pop();
              card.fix();
              ui.cardPile.insertBefore(card, ui.cardPile.childNodes[num]);
            }
            game.updateRoundNumber();
          },
        },
        sdxl_boqing: {
          mod: {
            ignoredHandcard(card, player) {
              if (card.suit == 'heart') return true;
            },
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && card.suit == 'heart') return false;
            },
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseJieshuBegin',
          },
          filter(event, player) {
            return event.player != player;
          },
          forced: true,
          async content(event, trigger, player) {
            const loseCards = [];
            const history = trigger.player.getHistory('useCard');
            const history2 = trigger.player.getHistory('lose');
            for await (const useCard of history) {
              loseCards.addArray(useCard.cards || []);
            }
            for await (const lose of history2) {
              if (lose.type == 'discard') {
                loseCards.addArray(lose.cards2 || []);
              }
            }
            const resultCards = loseCards.filterInD('d').filter((i) => i.suit == 'heart');
            const gainCards = resultCards.length > 2 ? resultCards.randomGets(2) : resultCards;
            if (!gainCards.length) return;
            event.cards = gainCards;
            event.lose = false;
            event.recover = false;
            for await (const i of gainCards) {
              const str = lib.translate[i.name + '_info'];
              if (str.includes('回复')) {
                event.recover = true;
              }
              if (str.includes('伤害')) {
                event.lose = true;
              }
            }
            const { bool } = await player
              .chooseBool()
              .set('createDialog', [get.prompt(event.name), '获得这些牌', gainCards])
              .set('ai', (evt, playerx) => {
                const effect = get.damageEffect(playerx, playerx, playerx);
                if (evt.lose && effect > 0) return true;
                if (evt.lose && evt.recover) {
                  if (playerx.isDamaged()) {
                    if (playerx.hp == 1) return false;
                    return true;
                  } else {
                    return true;
                  }
                }
                if (evt.lose && !evt.recover) {
                  if (evt.cards.length < 2) return false;
                }
                return true;
              })
              .forResult();

            if (bool) {
              player.gain(gainCards, 'log', 'gain2');
              if (event.lose) player.damage('nosource', 'nocard');
              if (event.recover) player.recover();
            }
          },
        },
        sdxl_wuqing: {
          trigger: { player: 'phaseZhunbeiBegin' },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          juexingji: true,
          derivation: ['sdxl_jieqing'],
          filter(event, player) {
            if (player.storage.sdxl_wuqing) return false;
            let count1 = player.countCards('hej');
            let count2 = player.countCards('hej', (i) => i.suit == 'heart');
            return count2 > count1 - count2;
          },
          async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
            player.loseMaxHp();
            player.recover();
            player.addSkills('sdxl_jieqing');
          },
        },
        sdxl_jieqing: {
          enable: ['chooseToUse', 'chooseToRespond'],
          audio: 'ext:金庸群侠传/peiyin:2',
          prompt: '你可以将♠️️牌当【绝情丹】使用、将♣️️牌当【断肠草】使用',
          viewAs(cards, player) {
            var name = false;
            var suit = cards[0].suit;
            if (suit == 'club') return { name: 'jydiy_duanchangcao' };
            if (suit == 'spade') return { name: 'jydiy_jueqindan' };
            return null;
          },
          check(card) {
            if (ui.selected.cards.length) return 0;
            var player = _status.event.player;
            return 7 - get.value(card);
          },
          init(player, name) {
            if (!lib.skill.global.includes('jydiy_duanchangcao_skill')) game.addGlobalSkill('jydiy_duanchangcao_skill');
            if (!lib.skill.global.includes('jydiy_jueqindan_skill')) game.addGlobalSkill('jydiy_jueqindan_skill');
          },
          selectCard: [1, 1],
          complexCard: true,
          position: 'hs',
          filterCard(card, player, event) {
            //如果已经选了一张牌 那么第二张牌和第一张花色相同即可
            if (ui.selected.cards.length) return false;
            event = event || _status.event;
            //获取当前时机的卡牌选择限制
            var filter = event._backup.filterCard;
            //获取卡牌花色
            var name = card.suit;
            if (name == 'spade' && filter({ name: 'jydiy_jueqindan', cards: [card] }, player, event)) return true;
            //如果这张牌是♥️️并且当前时机能够使用/打出桃 那么这张牌可以选择
            if (name == 'club' && filter({ name: 'jydiy_duanchangcao', cards: [card] }, player, event)) return true;
            //上述条件都不满足 那么就不能选择这张牌
            return false;
          },
          filter(event, player) {
            //获取当前时机的卡牌选择限制
            var filter = event.filterCard;
            if (
              filter({ name: 'jydiy_duanchangcao' }, player, event) &&
              player.countCards('hs', function (i) {
                return i.suit == 'club';
              })
            )
              return true;
            //如果当前时机能够使用/打出无懈可击并且角色有♠️️ 那么可以发动技能
            if (
              filter({ name: 'jydiy_jueqindan' }, player, event) &&
              player.countCards('hs', function (i) {
                return i.suit == 'spade';
              })
            )
              return true;
            return false;
          },
          ai: { order: 1 },
          hiddenCard(player, name) {
            if (name == 'jydiy_duanchangcao')
              return (
                player.countCards('hs', function (i) {
                  return i.suit == 'club';
                }) > 0
              );

            if (name == 'jydiy_jueqindan')
              return (
                player.countCards('hs', function (i) {
                  return i.suit == 'spade';
                }) > 0
              );

            return false;
          },
        },
        //尹克西潇湘子 -霸天20230621
        sdxl_qiejing2: {
          forceDie: true,
          popup: false,
          silent: true,
          charlotte: true,
          forced: true,
          nopop: true,
          audio: 'sdxl_qiejing',
          trigger: {
            player: ['loseChongWu', 'loseEnd', 'die'],
          },
          content() {
            var cards = player.storage['sdxl_qiejing2'];
            var cards2 = player.getCards('e', function (i) {
              return cards.includes(i);
            });
            if (!cards2.length || trigger.name == 'die') {
              player.removeSkill('sdxl_qiejing2');
              return;
            } else {
              if (trigger.name == 'loseChongWu' && trigger.type == 'lingShou') {
                player.loseToDiscardpile(cards2);
                player.removeSkill('sdxl_qiejing2');
              } else {
                player.storage['sdxl_qiejing2'] = cards2;
              }
            }
          },
        },
        sdxl_qiejing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'gainChongWu',
          },
          filter(event, player) {
            return event.type == 'lingShou';
          },
          logTarget: 'player',
          async content(event, trigger, player) {
            let jiuyangzhengjing = null;
            let card = null;
            let list = get.randomCards(100, (cardx) => {
              if (get.type(cardx) != 'equip') return false;
              if (get.cardtag(cardx, 'gifts')) return false;
              if (!trigger.player.canUse(cardx, trigger.player)) {
                return false;
              }
              if (cardx.name == 'jydiy_jiuyangzhengjing') jiuyangzhengjing = cardx;
              return true;
            });
            if (trigger.chongWu == 'jycw_tonglingbaiyuan' && jiuyangzhengjing && Math.random() >= 0.5) {
              card = jiuyangzhengjing;
            } else if (list.length > 1) {
              card = list.randomGet();
            } else {
              return;
            }
            if (card) {
              if (!trigger.player.storage['sdxl_qiejing2']) trigger.player.storage['sdxl_qiejing2'] = [];
              trigger.player.storage['sdxl_qiejing2'].add(card);
              trigger.player.addSkill('sdxl_qiejing2');
              trigger.player.useCard(card, trigger.player, false);
              if (get.subtype(card) == 'equip5' || card.name == 'jydiy_jiuyangzhengjing') {
                if (card.name == 'jydiy_jiuyangzhengjing') {
                  player.draw(3);
                } else {
                  player.draw(2);
                }
              }
            }
          },
        },
        sdxl_huji_count: {
          audio: 'sdxl_huji',
          trigger: {
            player: 'phaseUseBegin',
          },
          forced: true,
          async content(event, trigger, player) {
            let list = ['蓝色', '红色'];
            if (player.storage.sdxl_huji[0] == 0) list = ['蓝色'];
            else if (player.storage.sdxl_huji[1] == 0) list = ['红色'];
            const {
              result: { control },
            } =
              list.length == 1
                ? { result: { control: list[0] } }
                : await player
                  .chooseControl(list)
                  .set('ai', () => {
                    let player = get.player();
                    if (player.storage.sdxl_huji[0] > 1) return '红色';
                    if (player.storage.sdxl_huji[1] > 1) return '蓝色';
                    return '红色';
                  })
                  .set('prompt', '互忌:令红色数字或蓝色数字其中一项加1,另一项减1 ');
            switch (control) {
              case '蓝色':
                {
                  player.storage.sdxl_huji[0] += 1;
                  player.storage.sdxl_huji[1] -= 1;
                  player.popup('蓝色');
                  game.log(player, '选择了蓝色加一');
                }
                break;
              case '红色':
                {
                  player.storage.sdxl_huji[1] += 1;
                  player.storage.sdxl_huji[0] -= 1;
                  player.popup('红色');
                  game.log(player, '选择了红色加一');
                }
                break;
            }
            if (player.storage.sdxl_huji[0] == 0 || player.storage.sdxl_huji[1] == 0) {
              player.loseHp(1);
            }
          },
        },
        sdxl_huji_draw: {
          audio: 'sdxl_huji',
          enable: 'phaseUse',
          usable: 1,
          position: 'he',
          filter(event, player) {
            return player.countCards('he', (card) => {
              return lib.skill.sdxl_huji_draw.filterCard(card, player, event);
            });
          },
          prompt() {
            let player = _status.event.player;
            let count = player.storage.sdxl_huji[1];
            return '互忌:弃置一张♥️️牌,摸' + count + '张牌.';
          },
          filterCard(card, player, event) {
            if (card.suit != 'heart') return false;
            return lib.filter.cardDiscardable(card, player, event);
          },
          discard: false,
          lose: false,
          delay: false,
          selectCard: [1, 1],
          check(card) {
            return 8 - get.value(card);
          },
          async content(event, trigger, player) {
            await player.discard(event.cards);
            if (player.storage.sdxl_huji[1] > 0) {
              player.draw(player.storage.sdxl_huji[1]);
            }
          },
          ai: {
            order: 1,
            result: {
              player(player, target) {
                return player.storage.sdxl_huji[1];
              },
            },
          },
        },
        sdxl_huji: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['sdxl_huji_draw', 'sdxl_huji_count'],
          init(player, name) {
            if (!player.storage[name]) player.storage[name] = [2, 2];
          },
          mod: {
            selectTarget(card, player, range) {
              if (card.name != 'sha') return;
              if (!game.hasNature(card, 'jy_du')) return;
              if (Array.isArray(range) && range[1] == -1) return;
              range[1] += player.storage.sdxl_huji[0];
            },
          },
          forced: true,
          trigger: {
            player: 'useCard',
          },
          filter(event, player) {
            let name = event.card.name;
            if (name != 'sha') return false;
            if (!game.hasNature(event.card, 'jy_du')) return false;
            return true;
          },
          async content(event, trigger, player) {
            trigger.directHit.addArray(game.filterPlayer((i) => i != player));
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (!arg.card) return false;
              let card = arg.card;
              let name = card.name;
              if (name != 'sha') return false;
              if (!game.hasNature(card, 'jy_du')) return false;
              return true;
            },
          },
        },
        //绝杨改之--20221221霸天
        sdxl_xikuang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCardToPlayered',
          },
          usable: 1,
          check(event, player) {
            if (get.attitude(player, event.target) >= 0) return false;
            const dis = event.target.getCards('he', function (i) {
              if (i.suit != 'heart') return false;
              return lib.filter.cardDiscardable(i, event.target, 'sdxl_xikuang');
            });
            return dis.length >= 2 || dis.length == 0;
          },
          filter(event, player) {
            if (!get.tag(event.card, 'damage')) return false;
            return event.player != event.target;
          },
          logTarget: 'target',
          content() {
            'step 0';
            player
              .chooseControl('sdxl_xikuang_discard', 'sdxl_xikuang_usecard', function (event, player) {
                return 'sdxl_xikuang_usecard';
              })
              .set('prompt', '西狂')
              .set('prompt2', '执行下列两项中的一项并令目标执行另一项:<br>1.弃置所有♥️️牌(无♥️️牌则改为失去一点体力) ; <br>2.下个回合内至多只能使用两张牌.');
            ('step 1');
            let playerx = player,
              targetx = trigger.target;
            if (result.control == 'sdxl_xikuang_discard') {
              playerx = trigger.target;
              targetx = player;
            }
            const dis = targetx.getCards('he', function (i) {
              if (i.suit != 'heart') return false;
              return lib.filter.cardDiscardable(i, targetx, 'sdxl_xikuang');
            });
            if (dis.length == 0) {
              targetx.loseHp();
            } else {
              targetx.discard(dis);
            }
            playerx.addTempSkill('sdxl_xikuang_usecard', { player: 'phaseZhunbeiEnd' });
          },
          subSkill: {
            discard: {
              name: '选项一',
            },
            usecard: {
              name: '选项二',
              mark: true,
              trigger: {
                player: 'phaseZhunbeiBegin',
              },
              marktext: '狂',
              intro: {
                name: '西狂',
                name2: '狂',
                content: '下个回合内至多只能使用两张牌',
              },
              forced: true,
              popup: false,
              nopop: true,
              charlotte: true,
              content() {
                player.addTempSkill('sdxl_xikuang_usecard2');
              },
            },
            usecard2: {
              mark: true,
              marktext: '狂',
              intro: {
                name: '西狂',
                name2: '狂',
                content: '回合内至多只能使用两张牌',
              },
              forced: true,
              popup: false,
              nopop: true,
              charlotte: true,
              mod: {
                cardEnabled2(card, player) {
                  const history = player.getHistory('useCard');
                  const list = history.filter((i) => i.isPhaseUsing());
                  if (list.length >= 2) return false;
                },
                cardEnabled(card, player) {
                  return lib.skill['sdxl_xikuang_usecard2'].mod.cardEnabled2(card, player);
                },
                cardSavable(card, player) {
                  return lib.skill['sdxl_xikuang_usecard2'].mod.cardEnabled2(card, player);
                },
              },
            },
          },
        },
        sdxl_shangqing: {
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            player: 'phaseJieshuBegin',
          },
          forced: true,
          filter(event, player) {
            var func = function (card) {
              var suit = card.suit;
              return suit == 'heart';
            };
            var bool = player.countCards('h', func) == 0;
            var card = get.cardPile(func);
            return bool && card;
          },
          content() {
            var func = function (card) {
              var suit = card.suit;
              return suit == 'heart';
            };
            var cardx = get.randomCard(func);
            player.gain(cardx, 'gain2', 'log');
          },
          group: 'sdxl_shangqing_buff',
          subSkill: {
            buff: {
              trigger: {
                player: 'useCard',
              },
              audio: 'sdxl_shangqing',
              forced: true,
              logTarget: 'targets',
              lastDo: true,
              filter(event, player) {
                var type = get.type(event.card);
                var suit = event.card.suit;
                if (player.hp <= 1) return false;
                if (!event.targets || event.targets.length == 0) return false;
                if (type == 'basic' && suit == 'heart') return true;
                if (type == 'trick' && suit == 'heart') return true;
                return false;
              },
              content() {
                var hp = player.hp - 1;
                player.loseHp(hp);
                trigger.effectCount += hp;
                game.log(trigger.card, '额外结算', hp, '次');
              },
            },
          },
        },
        sdxl_gaizhi: {
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            player: 'useCardToPlayer',
            target: 'useCardToTarget',
          },
          //usable:2,
          shaRelated: true,
          filter(event, player) {
            if (!event.targets.length) return false;
            if (event.card.name != 'sha') return false;
            var count = player.getHistory('custom', function (evt) {
              return evt.sdxl_gaizhi == event.player;
            }).length;
            if (event.player == player) {
              if (count > 1) return false;
            } else {
              if (count > 0) return false;
            }
            if (player == event.player && !event.isFirstTarget) return false;
            const bool = lib.inpile.some(function (name) {
              if (get.type(name) != 'trick') return false;
              const vcard = {
                name: name,
                suit: event.card.suit,
                number: event.card.number,
              };
              const info = get.info(vcard);
              if (info.notarget) return false;
              if (!info.enable) return false;
              return event.targets.some((i) => lib.filter.targetEnabled2(vcard, event.player, i));
            });
            if (!bool) return false;
            return true;
          },
          forced: true,
          content() {
            'step 0';
            const func = function (player, cardx, targetsx) {
              player._sdxl_gaizhi = true;
              player._sdxl_gaizhi3 = true;
              let numx = 0;
              for (var i of targetsx) {
                numx += get.effect(i, cardx, player, player);
              }
              delete player._sdxl_gaizhi;
              delete player._sdxl_gaizhi3;
              return numx;
            };
            const result1 = func(trigger.player, trigger.card, trigger.targets);
            const inpile = lib.inpile.filter(function (name) {
              if (get.type(name) != 'trick') return false;
              const vcard = {
                name: name,
                suit: trigger.card.suit,
                number: trigger.card.number,
              };
              const info = get.info(vcard);
              if (info.notarget) return false;
              if (!info.enable) return false;
              return trigger.targets.some((i) => lib.filter.targetEnabled2(vcard, trigger.player, i));
            });
            let text = get.prompt2(event.name);
            if (trigger.player != player) text = '是否发动' + get.translation(player) + '的【改之】？';
            trigger.player
              .chooseVCardButton(inpile, text)
              .set('ai', function (button) {
                const name = button.link[2];
                const player = _status.event.player;
                const evt = _status.event._trigger;
                const vcard = {
                  name: name,
                  suit: evt.card.suit,
                  number: evt.card.number,
                };
                const effect = _status.event.funcx(evt.player, vcard, evt.targets) - _status.event.aicheck;
                //game.log("effectx",name,effect)//测试用//------------------//
                return effect;
              })
              .set('aicheck', result1)
              .set('_trigger', trigger)
              .set('funcx', func);
            ('step 1');
            if (result.bool) {
              const evt = trigger.parent;
              const card = evt.card;
              const vcard = card;
              card.name = result.links[0][2];
              game.log(vcard, '改为了', card);
              player.getHistory('custom').push({ sdxl_gaizhi: trigger.player });
              if (trigger.player != player) trigger.player.line(player);
              if (evt.addCount !== false) {
                //if(trigger.player!=player)  {evt.effectCount=1;}
                if (trigger.player == player) {
                  evt.player.getStat().card.sha--;
                  evt.addCount = false;
                }
              }
            }
          },
          ai: {
            unequip: true,
            skillTagFilter(player, tag, arg) {
              if (!arg || arg.name != 'sha') return false;
              if (player.getStat('triggerSkill').sdxl_gaizhi >= 2) return false;
              if (player._sdxl_gaizhi2) return false;
              if (player._sdxl_gaizhi3) return false;
              const evt = _status.event;
              const usecard = evt.getParent('useCard');
              const chooseUseTarget = evt.parent;
              if (chooseUseTarget.name != 'chooseUseTarget' && evt.name != 'chooseToUse') return false;
              return true;
            },
            effect: {
              player(card, player, target) {
                //猪脑过载***********
                if (player.getStat('triggerSkill').sdxl_gaizhi >= 2) return;
                if (player._sdxl_gaizhi) return;
                if (card.name != 'sha') return;
                const evt = _status.event;
                const usecard = evt.getParent('useCard');
                const chooseUseTarget = evt.parent;
                if (chooseUseTarget.name != 'chooseUseTarget' && evt.name != 'chooseToUse') return; ///父级事件是使用牌时则跳过
                const range = lib.filter.selectTarget(card, player); //这张牌选择目标的数量的数组
                //const targets=game.filterPlayer(i=>player.canUse(card,i));
                if (range[0] == range[1] && range[1] == 1 && target && player != target) {
                  player._sdxl_gaizhi = true;
                  //const eff1=get.effect(target,card,player,player);
                  player._sdxl_gaizhi2 = true;
                  const value = player.getUseValue(card);
                  const eff2 = get.effect(target, card, player, player);
                  delete player._sdxl_gaizhi2;
                  if (eff2 > 0) {
                    delete player._sdxl_gaizhi;
                    return;
                  }
                  const bool = lib.inpile.some(function (name) {
                    if (get.type(name) != 'trick') return false;
                    let vcard = {
                      name: name,
                      suit: card.suit,
                      number: card.number,
                    };
                    let info = get.info(vcard);
                    if (info.notarget) return false;
                    if (!info.enable) return false;
                    if (!lib.filter.targetEnabled2(vcard, player, target)) return false;
                    return get.effect(target, vcard, player, player) > 0;
                  });
                  delete player._sdxl_gaizhi;
                  if (bool) {
                    let count = player.countCards('hs', function (sha) {
                      if (sha.name != 'sha') return false;
                      if (ui.selected.cards || ui.selected.cards.includes(sha)) return false;
                      //const value2=player.getUseValue(sha);
                      return player.hasUseTarget(sha);
                    });
                    let count2 = 0;
                    if (_status.currentPhase == player) {
                      count2 = player.getCardUsable(card, false) - (evt.name == 'chooseToUse') ? 1 : 0;
                    }
                    if (get.attitude(player, target) > 0 && count > 0 && count2 < 1) return value <= 0 ? [1, 4, 0, 0] : [1, 3, 0, 0];
                    //[使用者的收益倍数,使用者的额外收益,卡牌对目标的收益倍数,卡牌对目标额外的收益]
                    return value <= 0 ? [1, 3, 0, 0] : [1, 1.6, 0, 0];
                  }
                }
              },
              target(card, player, target) {
                if (target.getStat('triggerSkill').sdxl_gaizhi >= 2) return;
                if (player._sdxl_gaizhi) return;
                if (card.name != 'sha') return;
                const evt = _status.event;
                const usecard = evt.getParent('useCard');
                const chooseUseTarget = evt.parent;
                if (chooseUseTarget.name != 'chooseUseTarget' && evt.name != 'chooseToUse') return; ///父级事件是使用牌时则跳过
                const range = lib.filter.selectTarget(card, player); //这张牌选择目标的数量的数组
                //const targets=game.filterPlayer(i=>player.canUse(card,i));
                if (range[0] == range[1] && range[1] == 1 && target && player != target) {
                  player._sdxl_gaizhi = true;
                  //const eff1=get.effect(target,card,player,player);
                  player._sdxl_gaizhi2 = true;
                  const value = player.getUseValue(card);
                  const eff2 = get.effect(target, card, player, player);
                  delete player._sdxl_gaizhi2;
                  if (eff2 > 0) {
                    delete player._sdxl_gaizhi;
                    return;
                  }
                  const bool = lib.inpile.some(function (name) {
                    if (get.type(name) != 'trick') return false;
                    let vcard = {
                      name: name,
                      suit: card.suit,
                      number: card.number,
                    };
                    let info = get.info(vcard);
                    if (info.notarget) return false;
                    if (!info.enable) return false;
                    if (!lib.filter.targetEnabled2(vcard, player, target)) return false;
                    return get.effect(target, vcard, player, player) > 0;
                  });
                  delete player._sdxl_gaizhi;
                  if (bool) {
                    let count = player.countCards('hs', function (sha) {
                      if (sha.name != 'sha') return false;
                      if (ui.selected.cards || ui.selected.cards.includes(sha)) return false;
                      //const value2=player.getUseValue(sha);
                      return player.hasUseTarget(sha);
                    });
                    let count2 = 0;
                    if (_status.currentPhase == player) {
                      count2 = player.getCardUsable(card, false) - (evt.name == 'chooseToUse') ? 1 : 0;
                    }
                    if (get.attitude(player, target) > 0 && count > 0 && count2 < 1) return value <= 0 ? [0, 0, 1, 4] : [0, 0, 1, 3];
                    //[卡牌对目标的收益倍数,卡牌对目标的额外收益,使用者收益倍数,使用者的额外收益]
                    return value <= 0 ? [0, 0, 1, 3] : [0, 0, 1, 1.6];
                  }
                }
              },
            },
          },
          global: 'sdxl_gaizhi_unequip',
          subSkill: {
            unequip: {
              ai: {
                unequip: true,
                skillTagFilter(player, tag, arg) {
                  if (!arg || arg.name != 'sha') return false;
                  if (!arg.target) return false;
                  if (player.hasSkill('sdxl_gaizhi')) return false;
                  if (!arg.target.hasSkill('sdxl_gaizhi')) return false;
                  if (arg && arg.arg.target.getStat('triggerSkill').sdxl_gaizhi >= 2) return false;
                  if (player._sdxl_gaizhi2) return false;
                  if (player._sdxl_gaizhi3) return false;
                  //if(tag=="unequip2"&&!player._sdxl_gaizhi2) return false;
                  const evt = _status.event;
                  const usecard = evt.getParent('useCard');
                  const chooseUseTarget = evt.getParent(2);
                  if (usecard && chooseUseTarget.name != 'chooseUseTarget' && evt.name != 'chooseToUse') return false;
                  return true;
                },
              },
            },
          },
        },
        //新霍都 霸天 230715
        sdxl_juao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin',
          },
          forced: true,
          filter(event, player) {
            return player.countCards('h') > player.hp;
          },
          content() {
            'step 0';
            var next = player.chooseCardTarget({
              position: 'h',
              selectCard: (function (player) {
                var num = player.countCards('h') - player.hp;
                if (num >= 2) return [1, 2];
                return [1, 1];
              })(player),
              selectTarget() {
                return [1, ui.selected.cards.length];
              },
              complexSelect: true,
              filterCard: lib.filter.cardDiscardable,
              filterTarget(card, player, target) {
                return target != player;
              },
              ai1(card) {
                if (card.hasGaintag('sdxl_tuoqiao')) return 1;
                return get.unuseful(card) + 9;
              },
              ai2(target) {
                var player = _status.event.player;
                return get.damageEffect(target, player, player);
              },
              prompt: get.prompt('sdxl_juao'),
              prompt2: get.translation('sdxl_juao_info'),
            });
            ('step 1');
            if (result.bool) {
              player.discard(result.cards);
              result.targets.filter((i) => i.damage(player));
            }
          },
        },
        sdxl_tuoqiao3: {
          forced: true,
          _priority: -100,
          lastDo: true,
          popup: false,
          nopop: true,
          charlotte: true,
          audio: 'sdxl_tuoqiao',
          trigger: {
            player: 'damageBegin4',
          },
          forced: true,
          filter(event, player) {
            var cards = player.getCards('h', function (card) {
              return card.hasGaintag('sdxl_tuoqiao');
            });
            if (!cards.length) {
              return false;
            }
            if (event.num < 1) return false;
            if (event.num > 1) return true;
            return event.num >= player.hp;
          },
          content() {
            'step 0';
            var next = player.chooseToDiscard(function (card, player) {
              return card.hasGaintag('sdxl_tuoqiao');
            }, '是否弃置一张脱壳牌防止此伤害');
            next.set('ai', function (card) {
              return 4;
            });
            ('step 1');
            if (result.bool) {
              trigger.cancel();
            }
          },
        },
        sdxl_tuoqiao2: {
          group: 'sdxl_tuoqiao3',
          forced: true,
          _priority: 100,
          firstDo: true,
          popup: false,
          nopop: true,
          charlotte: true,
          mod: {
            aiValue(player, card, num) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('sdxl_tuoqiao')) return 100;
            },
            aiOrder(player, card, num) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('sdxl_tuoqiao')) return -1;
              if (card.cards && card.cards.some((i) => get.itemtype(i) == 'card' && i.hasGaintag('sdxl_tuoqiao'))) return -1;
            },
            aiUseful(player, card, num) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('sdxl_tuoqiao')) return 100;
            },
            ignoredHandcard(card, player) {
              if (card.hasGaintag('sdxl_tuoqiao')) {
                return true;
              }
            },
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && card.hasGaintag('sdxl_tuoqiao')) return false;
            },
          },
          audio: 'sdxl_tuoqiao',
          trigger: {
            player: 'loseEnd',
          },
          content() {
            var cards = player.getCards('h', function (card) {
              return card.hasGaintag('sdxl_tuoqiao');
            });
            if (!cards.length) {
              player.removeSkills('sdxl_tuoqiao');
            }
            if (trigger.type != 'use') {
              var num = 0;
              for (var i in trigger.gaintag_map) {
                if (trigger.gaintag_map[i].includes('sdxl_tuoqiao')) num += 2;
              }
              if (num > 0) player.draw(num);
            }
          },
        },
        sdxl_tuoqiao: {
          filterCard: true,
          discard: false,
          lose: false,
          delay: false,
          selectCard: [1, 6],
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:4',
          mark: true,
          limited: true,
          init(player, skill) {
            player.storage[skill] = false;
          },
          filter(event, player) {
            if (player.storage.sdxl_tuoqiao) return false;
            return player.countCards('h') > 0;
          },
          content() {
            'step 0';
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
            player.addSkill('sdxl_tuoqiao2');
            player.addGaintag(cards, 'sdxl_tuoqiao');
          },
          ai: {
            order: 0.5,
            result: {
              player(player) {
                if (player.countCards('h') > 3) return 10;
                return 0;
              },
            },
          },
          intro: {
            content: 'limited',
          },
        },
        sdxl_xianzha: {
          filter(event, player) {
            if (event.targets.length > 1) return false;
            return event.player != player && event.card && get.type(event.card) == 'trick';
          },
          logTarget: 'player',
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
              if (event.card.name == 'shuiyanqijunx') return player.countCards('e') == 0;
              return true;
            } else if ((event.card.name == 'shunshou' || (event.card.name == 'zhujinqiyuan' && (event.card.yingbian || get.distance(event.player, player) < 0))) && player.hp > 2) {
              return true;
            }
            return false;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            target: 'useCardToTargeted',
          },
          content() {
            'step 0';
            player.loseHp();
            ('step 1');
            trigger.parent.excluded.add(player);
            ('step 2');
            player.draw();
          },
        },
        /////////////////////////////////
        //旧霍都
        sdxl_tuoqiao_old: {
          ///从濒死阶段移动到濒死求桃阶段//跟涅槃一个时机//丐版涅槃？？
          enable: 'chooseToUse',
          mark: true,
          limited: true,
          intro: { content: 'limited' },
          init(player) {
            player.storage.sdxl_tuoqiao_old = false;
          },
          filter(event, player) {
            if (player.storage.sdxl_tuoqiao_old) return false;
            if (event.type == 'dying') {
              if (player != event.dying) return false;
              return true;
            }
            return false;
          },
          content() {
            'step 0';
            player.awakenSkill('sdxl_tuoqiao_old');
            player.storage.sdxl_tuoqiao_old = true;
            var cards = player.getCards('hej');
            if (cards.length) player.discard(cards);
            ('step 1');
            if (player.isLinked()) player.link();
            ('step 2');
            if (player.isTurnedOver()) player.turnOver();
            ('step 3');
            player.draw(3);
            ('step 4');
            if (player.hp < 1) {
              player.recover(1 - player.hp);
            }
            //player.addSkill('sdxl_duozhang');
          },
          ai: {
            order: 1,
            skillTagFilter(player, arg, target) {
              if (player != target || player.storage.sdxl_tuoqiao_old) return false;
            },
            save: true,
            result: {
              player(player) {
                if (player.hp <= 0) return 10;
                if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
                return 0;
              },
            },
            threaten(player, target) {
              if (!target.storage.sdxl_tuoqiao_old) return 0.6;
            },
          },
        },
        sdxl_juao_old: {
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (!player._sdxl_juao_old) return false;
              return true;
            },
          },
          trigger: { player: 'gainEnd' },
          prompt: '是否发动【倨傲】观看牌堆顶三张牌',
          filter(event, player) {
            var evt = event.getParent(2);
            if (evt && evt.name == 'phaseDraw' && evt.player == player) return false;
            return event.cards && event.cards.length;
          },
          usable: 2,
          content() {
            'step 0';
            player._sdxl_juao_old = true;
            var cards = get.cards(3);
            if (Array.isArray(cards))
              for (var i of cards) {
                ui.cardPile.insertBefore(i.fix(), ui.cardPile.firstChild);
              }
            player
              .chooseButton(['倨傲:选择要使用的牌', cards])
              .set('filterButton', function (button) {
                return _status.event.cards.includes(button.link);
              })
              .set(
                'cards',
                cards.filter(function (card) {
                  return player.hasUseTarget(card);
                }),
              )
              .set('ai', function (button) {
                return _status.event.player.getUseValue(button.link);
              });
            ('step 1');
            if (result.bool && result.links && result.links.length) {
              var card = result.links[0];
              var next = player.chooseUseTarget(card, true, false);
              var bool = get.type(card) == 'trick' || (get.type(card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(card.name));
              if (bool) {
                next.set('oncard', function (card, player) {
                  delete player._sdxl_juao_old;
                  var that = this;
                  that.directHit.addArray(
                    game.filterPlayer(function (current) {
                      return current != player;
                    }),
                  );
                });
              }
              var str = '!';
              if (bool) str = '且此牌不能被响应!';
              next.set('prompt2', '此牌不计入次数' + str);
            }
            ('step 2');
            if (player._sdxl_juao_old) {
              delete player._sdxl_juao_old;
            }
          },
        },
        sdxl_xianzha_old: {
          filter(event, player) {
            return event.player != player && event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick');
          },
          logTarget: 'player',
          check(event, player) {
            if (event.parent.excluded.includes(player)) return false;
            var eff = get.effect(player, event.card, event.player, player);
            if (eff >= 0) return false;
            if (get.tag(event.card, 'respondSha')) {
              if (player.countCards('h', { name: 'sha' }) == 0) {
                return true;
              }
            } else if (get.tag(event.card, 'respondShan')) {
              if (player.countCards('h', { name: 'shan' }) == 0) {
                return true;
              }
            } else if (get.tag(event.card, 'damage')) {
              if (event.parent.directHit.includes(player)) return true;
              if (event.card.name == 'shuiyanqijunx') return player.countCards('e') == 0;
              return true;
            }
            return false;
          },
          trigger: { target: 'useCardToTargeted' },
          content() {
            'step 0';
            player.loseHp();
            ('step 1');
            trigger.parent.excluded.add(player);
            ('step 2');
            //摸牌时机移动到此牌结算完毕//
            var next = player.draw();
            event.next.remove(next);
            trigger.parent.after.push(next);
          },
          ai: { expose: 0.3 },
        },
        sdxl_duozhang: {
          trigger: {
            player: 'phaseBefore',
          },
          forced: true,
          content() {
            'step 0';
            var card = get.cardPile('jydiy_dagoubang', 'field');
            if (card) {
              player.gain(card, 'gain2', 'log');
            }
            ('step 1');
            player.removeSkill('sdxl_duozhang');
          },
        },
        //绝周伯通
        //互搏(霸天)
        sdxl_hubo: {
          name_used: {
            shunshou: 'guohe',
            guohe: 'shunshou',
            huogong: 'tiesuo',
            tiesuo: 'huogong',
            taoyuan: 'wugu',
            wugu: 'taoyuan',
            juedou: 'jiedao',
            jiedao: 'juedou',
            nanman: 'wanjian',
            wanjian: 'nanman',
            jiu: 'tao',
            tao: 'jiu',
            wuzhong: 'wuzhong',
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCardAfter' },
          forced: true,
          filter(event, player) {
            var evt = event.getParent(2);
            if (evt.name == 'sdxl_hubo') return false;
            var used = lib.skill.sdxl_hubo.name_used[event.card.name];
            if (!used) return false;
            var card = {
              name: used,
            };
            return player.hasUseTarget(card);
          },
          content() {
            var used = lib.skill.sdxl_hubo.name_used[trigger.card.name];
            var card = {
              name: used,
            };
            var next = player.chooseUseTarget(card, false);
            next.set('prompt', get.prompt(event.name));
            next.set('prompt2', '视为使用一张' + get.translation(card) + '？');
          },
        },
        //逐戏(藏海)
        sdxl_zhuxi: {
          group: 'sdxl_zhuxi2',
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          selectCard: [1, Infinity],
          filter(event, player) {
            return player.countCards('h', { type: 'delay' }) > 0;
          },
          filterCard: { type: 'delay' },
          prompt: '出牌阶段,你可以弃置任意张延时锦囊牌,获得2倍普通锦囊牌.',
          check(card) {
            return 10 - get.value(card);
          },
          content() {
            var gain = get.randomCards(cards.length * 2, function (card) {
              return get.type(card) == 'trick';
            });
            if (gain.length) player.gain(gain, 'log', 'gain2');
          },
          ai: {
            order: 11,
            result: { player: 1 },
          },
        },
        sdxl_zhuxi2: {
          trigger: { global: 'useCard' },
          audio: 'sdxl_zhuxi',
          filter(event, player) {
            var respondTo = event.respondTo;
            if (!respondTo) return false;
            if (event.card.name != 'wuxie') return false;
            if (player == event.player) return true;
            if (respondTo[0] == player) return true;
            //自己使用金刚护体响应牌 和其他角色使用金刚护体响应自己//
            ///********************************///
            if (player != event.player && respondTo[0] != player) {
              var evt = event.getParent('_wuxie');
              if (!evt) return false;
              var evt2 = evt._trigger;
              if (!evt2 || !evt2.target || !evt2.card) return false;
              return evt.player == player && evt2.target == player && evt2.card == respondTo[1];
            }
            ////其他角色bamh
            ///********************************************///
            return false;
          },
          content() {
            var respondTo = trigger.respondTo;
            var num = player == trigger.player && respondTo[0] == player ? 4 : 2;
            var gain = get.randomCards(num, function (card) {
              return get.type(card) == 'trick';
            });
            if (gain.length) player.gain(gain, 'log', 'gain2');
          },
        },
        //-------空明(藏海)
        sdxl_kongming: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'shaBegin' },
          forced: true,
          filter(event, player) {
            var number = event.card.number;
            return typeof number == 'number';
          },
          content() {
            trigger.set('sdxl_kongming', true);
            trigger.target.addTempSkill('sdxl_kongming_dianshu', 'shaAfter');
          },
          subSkill: {
            dianshu: {
              mark: true,
              marktext2: '空',
              markimage: 'extension/金庸群侠传/image/icon/jykongming.jpg',
              intro: {
                content: '你只能使用比此杀点数小的闪来抵消之.',
              },
              mod: {
                cardEnabled(card, player) {
                  if (card.name != 'shan') return;
                  var evt = _status.event.getParent('sha');
                  if (!evt || !evt.sdxl_kongming) return;
                  var number = card.number;
                  var number2 = evt.card.number;
                  if (typeof number != 'number') return false;
                  if (number >= number2) return false;
                },
                cardRespondable(card, player) {
                  return lib.skill.sdxl_kongming_dianshu.mod.cardEnabled(card, player);
                },
              },
            },
          },
        },
        //公孙绿萼
        //----<献丹>
        sdxl_kunqing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['loseAfter'],
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
          },
          forced: true,
          filter(event, player) {
            var evt = event.getl(player);
            if (player.countCards('h', { suit: 'heart' }) && player.countCards('e', { suit: 'heart' })) return false;
            if (evt && evt.player == player && player.hp > 1) {
              if (evt.hs && evt.hs.length && !player.countCards('h', { suit: 'heart' })) {
                for (var i of evt.hs) {
                  if (i.suit == 'heart') return true;
                }
              }
              if (evt.es && evt.es.length && !player.countCards('e', { suit: 'heart' })) {
                for (var i of evt.es) {
                  if (i.suit == 'heart') return true;
                }
              }
            }
            return false;
          },
          content() {
            player.damage('jy_du', 'nosource', 'nocard');
          },
        },
        //-----<献丹>
        sdxl_xiandan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['damageEnd', 'linkAfter'],
          },
          filter(event, player) {
            if (event.name == 'damage') return event.num > 0;
            if (event.name == 'link') return event.player.isLinked();
            return false;
          },
          forced: true,
          content() {
            'step 0';
            if (trigger.name == 'damage') {
              event.count = Math.min(trigger.num, 9);
            } else event.count = 1;
            ('step 1');
            event.count--;
            var cards1 = [];
            for (var i = 0; i < 3; i++) {
              var tao = get.cardPile(function (card) {
                return !cards1.includes(card) && card.suit == 'heart';
              });
              if (tao) {
                cards1.push(tao);
              } else break;
            }
            if (cards1.length) {
              player.chooseTarget('令一名角色获得' + get.translation(cards1), true).set('ai', function (target) {
                var player = _status.event.player;
                var att = get.attitude(player, target);
                if (player == target) att /= 2;
                return att;
              });
            } else {
              player.chat('牌堆或弃牌堆没有♥️️牌了!');
              event.finish();
            }
            event.cards1 = cards1;
            ('step 2');
            if (result.targets && result.targets.length) {
              var target = result.targets[0];
              target.gain(event.cards1, 'gain2');
            }
            ('step 3');
            if (event.count > 0) player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
            else event.finish();
            ('step 4');
            if (result.bool) {
              event.goto(1);
            }
          },
          ai: {
            maixie: true,
            maixie_hp: true,
            effect: {
              target(card, player, target) {
                if (get.tag(card, 'damage')) {
                  if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                  if (!target.hasFriend()) return;
                  var num = 1;
                  if (get.attitude(player, target) > 0) {
                    if (player.needsToDiscard()) {
                      num = 0.7;
                    } else {
                      num = 0.5;
                    }
                  }
                  if (target.hp >= 4) return [1, num * 2];
                  if (target.hp == 3) return [1, num * 1.5];
                  if (target.hp == 2) return [1, num * 0.5];
                }
              },
            },
          },
        },
        //大武小武
        sdxl_xiqiang: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = [];
          },
          mark: true,
          marktext: '阋',
          intro: {
            name: '阋墙',
            content: 'players',
          },
          mode: ['identity', 'guozhan'],
          available(mode) {
            if (mode == 'identity' && _status.mode == 'purple') return false;
          },
          filter(event, player) {
            return game.hasPlayer(function (target) {
              return player.canCompare(target) && !player.storage.sdxl_xiqiang.includes(target) && target.getCards('e').length;
            });
          },
          changeSeat: true,
          filterTarget(card, player, target) {
            return player.canCompare(target) && !player.storage.sdxl_xiqiang.includes(target) && target.getCards('e').length;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            player.storage.sdxl_xiqiang.add(target);
            player.markSkill('sdxl_xiqiang');
            ('step 1');
            player.chooseToCompare(target);
            ('step 2');
            if (result.bool) {
              //list.sortBySeat(_status.jy_roundStart||game.zhu);
              if (target.seatNum == 1) {
                event.finish();
                return;
              }
              player.chooseBool(
                function () {
                  return lib.skill.sdxl_xiqiang.ai.result.player(player, target) > 0;
                },
                '是否与' + get.translation(target) + '交换位置？',
              );
            } else {
              var cards = player.getCards('he');
              if (cards.length) player.discard(cards);
              event.finish();
            }
            ('step 3');
            if (result.bool) {
              game.jy_swapSeat(player, target);
            }
          },
          ai: {
            order(name, player) {
              var cards = player.getCards('h');
              if (Array.isArray(cards))
                for (var i of cards) {
                  if (i.number >= 11 && get.value(i) < 7) {
                    return 9;
                  }
                }
              //if(player.needsToDiscard()){
              //return 0.7;
              //};
              if (player.countCards('h') == 1 && player.countCards('e') == 0) {
                return 0.5;
              }
              return 0;
            },
            result: {
              player(player, target) {
                var att = get.attitude(player, target);
                if (target == player.previous && att > 0) return att;
                if (target == player.next && att < 0) return -att;
                var att2 = get.attitude(player, player.next);
                if (target == player.next.next && att < 0 && att2 < 0) return -att - att2;
                return 0;
              },
              target(player, target) {
                var num = target.countCards('h');
                if (num == 1) return -1;
                if (num == 2) return -0.7;
                return -0.5;
              },
            },
          },
        },
        sdxl_shubian: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          mode: ['identity', 'guozhan'],
          available(mode) {
            if (mode == 'identity' && _status.mode == 'purple') return false;
          },
          filterTarget(card, player, target) {
            var list = game.players.slice(0);
            list.sort(function (a, b) {
              return a.seatNum - b.seatNum;
            });
            //list.sortBySeat(_status.jy_roundStart);
            if (target.nextSeat.isDead() && target.previousSeat.isDead()) return true;
            return target == list[0] || target == list[list.length - 1];
          },
          selectTarget: [1, Infinity],
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            var equip = get.cardPile(function (cardx) {
              return get.type(cardx) == 'equip' && target.canUse(cardx, target);
            });
            if (equip) {
              target.useCard(equip, target);
            } else {
              game.log('牌堆没有合法的装备牌!!');
            }
            ('step 1');
            target.draw();
          },
          ai: {
            result: {
              target: 1,
            },
            order: 12,
          },
        },
        //达尔巴
        sdxl_qitun: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: 'useCard',
          },
          filter(event, player) {
            return event.targets && event.targets.length && (event.card.name == 'sha' || event.card.name == 'juedou');
          },
          lastDo: true,
          forced: true,
          logTarget: 'targets',
          content() {
            trigger.effectCount += 1;
            game.log(trigger.card, '额外结算一次');
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              //无双  杀的ai
              // 决斗的有点特殊 就没抄
              if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
            },
          },
        },
        sdxl_kuangchu: {
          mod: {
            selectTarget(card, player, range) {
              if (card.name == 'juedou' && card.sdxl_kuangchu) {
                if (card.number == 13) {
                  if (Array.isArray(range) && range[1] != -1) range[1] += 1;
                }
              }
            },
          },
          enable: 'phaseUse',
          filterCard(card, player) {
            return get.type(card) == 'equip';
          },
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:3',
          position: 'hes',
          viewAs: { name: 'juedou', sdxl_kuangchu: true },
          viewAsFilter(player) {
            if (!player.countCards('he', { type: 'equip' })) return false;
            return true;
          },
          check(card) {
            var player = _status.event.player;
            if (player.countCards('hes', { subtype: get.subtype(card) }) > 1) {
              return 11 - get.equipValue(card);
            }
            return 4 - get.value(card);
          },
          ai: {
            basic: {
              order: 10, //改了优先度5为10  免得顶装备 浪费装备牌 装备牌的优先度是8.5左右
              useful: 1,
              value: 5.5,
            },
          },
        },
        //陆展元
        sdxl_wenqing: {
          group: ['sdxl_wenqing2'],
          audio: 'ext:金庸群侠传/peiyin:2',
          //trigger:{
          //    global:['loseAfter','equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter'],
          //},
          forced: true,
          //可能是没找到event.player导致弹窗
          //filter:function(event,player){
          //    var evt=event.getl(event.player);
          //    return evt&&evt.cards2&&evt.cards2.length>1&&event.player.sex=='female'
          //},
          trigger: { global: 'loseAfter' },
          filter(event, player) {
            return event.cards2 && event.cards2.length > 1 && event.player.hasSex('female');
          },
          content() {
            player.draw();
          },
        },
        sdxl_wenqing2: {
          audio: 'sdxl_wenqing',
          trigger: {
            player: ['loseAfter'],
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
          },
          forced: true,
          filter(event, player) {
            var evt = event.getl(player);
            return (
              evt &&
              evt.cards2 &&
              evt.cards2.length > 1 &&
              game.hasPlayer(function (current) {
                return current.hasSex('female');
              })
            );
          },
          content() {
            'step 0';
            player
              .chooseTarget(get.prompt('sdxl_wenqing'), '令一名女性角色摸一张牌', function (card, player, target) {
                return target.hasSex('female');
              })
              .set('ai', function (target) {
                return get.attitude(player, target);
              });
            ('step 1');
            if (result.bool) {
              result.targets[0].draw();
            }
          },
        },
        sdxl_huaijuan_number: {
          mark: true,
          marktext2: '点',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_huaijuan.jpg',
          intro: { content: '当前点数:&' },
          audio: 'sdxl_huaijuan',
          trigger: {
            player: 'useCard',
            target: 'useCardToPlayered',
          },
          forced: true,
          charlotte: true,
          filter(event, player, name) {
            if (get.type(event.card) == 'equip') return false;
            if (name == 'useCardToPlayered' && event.player == player) return false;
            return player.storage.sdxl_huaijuan_number && event.card.number == player.storage.sdxl_huaijuan_number && player.isDamaged();
          },
          content() {
            player.recover(2);
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (get.type(card) != 'equip' && player != target && target.storage.sdxl_huaijuan_number && card.number == target.storage.sdxl_huaijuan_number && target.isDamaged()) return [1, 2];
              },
              player(card, player, target) {
                if (get.type(card) != 'equip' && player.storage.sdxl_huaijuan_number && card.number == player.storage.sdxl_huaijuan_number && player.isDamaged()) return [1, 2];
              },
            },
          },
        },
        sdxl_huaijuan_suit: {
          mark: true,
          marktext2: '花',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_huaijuan.jpg',
          intro: { content: '当前花色:$' },
          audio: 'sdxl_huaijuan',
          trigger: {
            player: 'useCard',
            target: 'useCardToPlayered',
          },
          forced: true,
          charlotte: true,
          filter(event, player, name) {
            if (get.type(event.card) == 'equip') return false;
            if (name == 'useCardToPlayered' && event.player == player) return false;
            return player.storage.sdxl_huaijuan_suit && event.card.suit == player.storage.sdxl_huaijuan_suit;
          },
          content() {
            player.draw(2);
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (get.type(card) != 'equip' && player != target && target.storage.sdxl_huaijuan_suit && card.suit == target.storage.sdxl_huaijuan_suit) return [1, 2];
              },
              player(card, player, target) {
                if (get.type(card) != 'equip' && player.storage.sdxl_huaijuan_suit && card.suit == player.storage.sdxl_huaijuan_suit) return [1, 2];
              },
            },
          },
        },
        sdxl_huaijuan: {
          limited: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player) {
            player.storage.sdxl_huaijuan = false;
          },
          intro: { content: 'limited' },
          mark: true,
          marktext2: '怀',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_huaijuan.jpg',
          line: 'fire',
          enable: 'phaseUse',
          filter(event, player) {
            if (player.storage.sdxl_huaijuan) return false;
            return player.countCards('h') > 0;
          },
          check(card) {
            return 10 - get.value(card);
          },
          filterCard: true,
          position: 'h',
          filterTarget(card, player, target) {
            if (ui.selected.targets.length == 0) {
              return !target.hasSkill('sdxl_huaijuan_suit');
            }
            return !target.hasSkill('sdxl_huaijuan_number');
          },
          complexTarget: true,
          multitarget: true,
          multiline: true,
          complexSelect: true,
          complexCard: true,
          targetprompt: ['花色', '点数'],
          selectTarget: 2,
          content() {
            player.awakenSkill('sdxl_huaijuan');
            player.storage.sdxl_huaijuan = true;
            targets[0].storage.sdxl_huaijuan_suit = cards[0].suit;
            targets[1].storage.sdxl_huaijuan_number = cards[0].number;
            targets[0].addSkill('sdxl_huaijuan_suit');
            targets[1].addSkill('sdxl_huaijuan_number');
          },
          ai: {
            order: 8,
            result: {
              target(player, target) {
                return 3;
              },
            },
            expose: 0.4,
            threaten: 2,
          },
        },
        //SP杨过
        sdxl_zhangqing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCardAfter',
            target: 'useCardToPlayered',
          },
          forced: true,
          filter(event, player, name) {
            if (name == 'useCardToPlayered' && event.player == player) return false;
            return event.card.suit == 'heart';
          },
          content() {
            'step 0';
            if (player.storage.sdxl_zhangqing || (get.mode() == 'guozhan' && player.hiddenSkills.includes('sdxl_zhangqing'))) {
              if (!player.storage.sdxl_zhangqing) {
                event.skillHidden = true;
              }
              player.chooseBool(get.prompt2('sdxl_zhangqing')).set('ai', function () {
                var player = _status.event.player;
                if (player.hp > 3) return true;
                if (player.hp == 3 && player.countCards('h') < 3) return true;
                if (player.hp == 2 && player.countCards('h') == 0) return true;
                return false;
              });
            } else {
              event.forced = true;
            }
            ('step 1');
            if (event.forced || result.bool) {
              player.loseHp();
            } else {
              event.finish();
            }
            ('step 2');
            player.draw(4);
            ('step 3');
            player.chooseToDiscard(2, true);
          },
          ai: {
            threaten: 1.5,
          },
        },
        sdxl_liufang: {
          juexingji: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          derivation: ['sdxl_xiaohun'],
          trigger: { player: 'sdxl_zhangqingAfter' },
          //_priority:10,
          forced: true,
          filter(event, player) {
            if (player.storage.sdxl_zhangqing) return false;
            var draw = 0;
            player.getAllHistory('gain', function (evt) {
              if (evt.getParent(2).name == 'sdxl_zhangqing') draw += evt.cards.length;
            });
            return draw >= 16;
          },
          addfujiang(player, name) {
            var temp_name;
            if (player.name2 && lib.character[player.name2]) {
              temp_name = player.name2;
            } else {
              player.name2 = 'sdxl_baiban';
              temp_name = player.name2;
            }
            player.classList.add('fullskin2');
            player.reinit(player.name2, name, [player.hp, player.maxHp]);
            player.node.avatar2.show();
            player.node.count.classList.add('p2');
            player.node.name2.show();
          },
          content() {
            'step 0';
            //修复流放
            player.storage.sdxl_zhangqing = true;
            player.awakenSkill('sdxl_liufang');
            player.loseMaxHp();
            ('step 1');
            if (player.isDamaged()) {
              player.recover();
            }
            ('step 2');
            player.addSkills('sdxl_xiaohun');
            ('step 3');
            player
              .chooseTarget('令一名其他角色将侠客牌翻面', true, function (card, player, target) {
                return player != target;
              })
              .set('ai', function (target) {
                if (target.hasSkillTag('noturn')) return 0;
                var player = _status.event.player;
                if (get.attitude(_status.event.player, target) == 0) return 0;
                if (get.attitude(_status.event.player, target) > 0) {
                  if (target.isTurnedOver()) return 3;
                  return -1;
                } else {
                  if (target.isTurnedOver()) return -3;
                  return 3;
                }
                return 0;
              });
            ('step 4');
            if (result.bool) {
              result.targets[0].turnOver();
            }
            ('step 5');
            if (!player.name2) {
              //赋值白板武将
              lib.skill.sdxl_liufang.addfujiang(player, 'sdxl_shendiao');
            } else {
              player.addSkills('sdxl_shouzhong');
              player.addSkills('qtpz_duwu');
            }
          },
        },
        sdxl_xiaohun: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCardToPlayered' },
          logTarget: 'target',
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return true;
          },
          content() {
            'step 0';
            trigger.target
              .chooseToDiscard('弃置一张♥️️牌,或令' + get.translation(player) + '随机获得一张♥️️牌', 'he', function (card) {
                return card.suit == 'heart';
              })
              .set('ai', function (card) {
                var trigger = _status.event.getTrigger();
                return -get.attitude(trigger.target, trigger.player) - get.value(card);
              });
            ('step 1');
            if (result.bool == false) {
              var heart = get.randomCard(function (cardx) {
                return cardx.suit == 'heart';
              });
              if (heart) {
                player.gain(heart, 'log', 'gain2');
              }
            }
          },
        },
        //神雕
        sdxl_duwushendiao: {
          audio: 'ext:金庸群侠传/peiyin:2',
        },
        sdxl_shouzhong: {
          ai: {
            order: 4,
            result: {
              player(player) {
                return 1;
              },
            },
          },
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          content() {
            'step 0';
            var cards = get.cards(5);
            event.cards = cards;
            var content = ['牌堆顶的五张牌', event.cards];
            player.chooseControl('ok').set('dialog', content);
            ('step 1');
            var list = [];
            while (cards.length) {
              var cardx = event.cards.pop();
              if (get.type(cardx) == 'equip') {
                list.push(cardx);
              } else {
                ui.cardPile.insertBefore(cardx, ui.cardPile.firstChild);
              }
            }
            event.cards = list;
            ('step 2');
            if (event.cards.length > 1) {
              var next = player.chooseCardButton(event.cards, true, 1, '选择分配一张装备牌');
              next.set('ai', function (button) {
                if (ui.selected.buttons.length == 0) return 1;
                return 0;
              });
            } else if (event.cards.length == 1) {
              event._result = { links: event.cards.slice(0), bool: true };
            } else {
              event.finish();
            }
            ('step 3');
            if (result.bool) {
              for (var i of result.links) {
                event.cards.remove(i);
              }
              event.togive = result.links.slice(0);
              player
                .chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
                .set('ai', function (target) {
                  var att = get.attitude(_status.event.player, target);
                  if (get.type(_status.event.cardx) == 'equip' && target.hasEmptySlot(get.subtype(_status.event.cardx))) return 3 * att;
                  return att;
                })
                .set('cardx', event.togive[0]);
            }
            ('step 4');
            if (result.targets.length) {
              player.give(event.togive, result.targets[0], true);
              //result.targets[0].gain(event.togive,'draw','gain2');
              //player.line(result.targets[0],'green');
              event.goto(2);
            }
          },
        },
        //甄志丙
        sdxl_qieyu: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filterTarget(card, player, target) {
            if (player == target) return false;
            if (
              !target.countCards('j', function (card) {
                return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
              }) &&
              !target.isTurnedOver() &&
              !target.isLinked()
            )
              return false;
            return target.countGainableCards(player, 'hej') > 0;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filter(event, player) {
            return game.hasPlayer(function (current) {
              if (player == current) return false;
              if (
                !current.countCards('j', function (card) {
                  return (card.viewAs || card.name) != 'jydiy_yungongliaoshang';
                }) &&
                !current.isTurnedOver() &&
                !current.isLinked()
              )
                return false;
              return current.countGainableCards(player, 'hej') > 0;
            });
          },
          content() {
            var num = 1;
            if (target.hasSex('female')) num = 2;
            if (target.countGainableCards(player, 'hej')) {
              player.gainPlayerCard([1, num], 'hej', target, true);
            }
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                return lib.card.shunshou.ai.result.target(player, target);
              },
            },
            threaten: 2,
          },
        },
        sdxl_dajie2: {
          mod: {
            aiOrder(player, card, num) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('sdxl_dajie')) return num + 8;
            },
            aiValue(player, card, num) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('sdxl_dajie')) return 0;
            },
          },
          trigger: { player: ['respond', 'useCard'] },
          forced: true,
          filter(event, player) {
            if (!event.respondTo) return false;
            //if(event.player!=player) return false;
            if (player == event.respondTo[0]) return false;
            if (event.card.name == 'shan') {
              if (event.respondTo[1].name != 'sha' && event.respondTo[1].name != 'wanjian') return false;
            } else if (event.card.name == 'sha') {
              if (event.respondTo[1].name != 'juedou' && event.respondTo[1].name != 'nanman' && event.respondTo[1].name != 'juedou') return false;
            } else return false;
            //if(event.cards&&event.cards.length&&event.cards.filterInD('od').length){
            if (event.cards && event.cards.length) {
              //var cards=event.cards.filterInD('od');
              var cards = event.cards;
              for (var card of cards) {
                if (get.position(card) == 'd' && card.storage && card.storage.sdxl_dajie && card.storage.sdxl_dajie_respondTo && card.storage.sdxl_dajie_respondTo == event.respondTo[1]) {
                  if (
                    game.hasPlayer(function (current) {
                      return !card.storage.sdxl_dajie.includes(current);
                    })
                  )
                    return true;
                }
              }
            }
            return false;
          },
          forced: true,
          charlotte: true,
          content() {
            'step 0';
            var cards = trigger.cards.filterInD('od');
            cards = cards.filter(function (iiii) {
              return iiii.storage && iiii.storage.sdxl_dajie && iiii.storage.sdxl_dajie_respondTo && iiii.storage.sdxl_dajie_respondTo == trigger.respondTo[1];
            });
            event.togive = cards.slice(0);
            ('step 1');
            event.card = [event.togive.shift()];
            var players = game.filterPlayer(function (current) {
              return current != player && get.attitude(player, current) > 0 && !event.card[0].storage.sdxl_dajie.includes(current);
            });
            players.sort(lib.sort.seat);
            var next = player.chooseTarget('是否将' + get.translation(event.card) + '交给一名其他角色？', function (card, player, target) {
              return !event.card[0].storage.sdxl_dajie.includes(target);
            });
            var choice = players[0];
            next.set('ai', function (target) {
              return target == _status.event.choice ? 1 : -1;
            });
            next.set('choice', choice);
            ('step 2');
            if (result && result.bool && result.targets && result.targets.length) {
              //player.line(result.targets[0]);
              player.give(event.card, result.targets[0], true).gaintag.add('sdxl_dajie');
              //result.targets[0].gain(event.card,'gain2','log').gaintag.add('sdxl_dajie');
              for (var card of event.card) {
                card.storage.sdxl_dajie.add(result.targets[0]);
              }
            }
            if (event.togive.length) event.goto(1);
          },
        },
        sdxl_dajie: {
          global: 'sdxl_dajie2',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: ['respond', 'useCard'] },
          //trigger:{global:['respond','useCard']},
          filter(event, player) {
            if (!event.respondTo) return false;
            if (event.player != player) return false;
            if (player == event.respondTo[0]) return false;
            if (event.card.name == 'shan') {
              if (event.respondTo[1].name != 'sha' && event.respondTo[1].name != 'wanjian') return false;
            } else if (event.card.name == 'sha') {
              if (event.respondTo[1].name != 'nanman' && event.respondTo[1].name != 'juedou') return false;
            } else return false;
            return event.cards && event.cards.length && event.cards.filterInD('od').length;
          },
          forced: true,
          content() {
            'step 0';
            var cards = trigger.cards.filterInD('od');
            event.togive = cards.slice(0);
            var players = game.filterPlayer(function (current) {
              return current != player && get.attitude(player, current) > 0;
            });
            players.sort(lib.sort.seat);
            var next = player.chooseTarget(get.prompt('sdxl_dajie'), '将' + get.translation(event.togive) + '交给一名其他角色', function (card, player, target) {
              return target != player;
            });
            var choice = players[0];
            next.set('ai', function (target) {
              return target == _status.event.choice ? 1 : -1;
            });
            next.set('choice', choice);
            ('step 1');
            if (result && result.bool && result.targets && result.targets.length) {
              player.give(event.togive, result.targets[0], true).gaintag.add('sdxl_dajie');
              //result.targets[0].gain(event.togive,'gain2','log').gaintag.add('sdxl_dajie');
              //result.targets[0].addTempSkill('funan_use');
              for (var card of event.togive) {
                if (!card.storage) card.storage = {};
                card.storage.sdxl_dajie = [];
                card.storage.sdxl_dajie.add(result.targets[0]);
                card.storage.sdxl_dajie_respondTo = trigger.respondTo[1];
              }
              var evt = event.getParent('useCard');
              if (!evt.sdxl_dajie_cardList) evt.sdxl_dajie_cardList = [];
              evt.sdxl_dajie_cardList.addArray(event.togive);
              //if(evt&&evt.name=='useCard'&&!evt.sdxl_dajie){
              if (!evt.sdxl_dajie) {
                var next = game.createEvent('sdxl_dajie_clear');
                _status.event.next.remove(next);
                evt.after.push(next);
                evt.sdxl_dajie = true;
                next.forceDie = true;
                //next.player=player;
                next.setContent(function () {
                  var cardList = event.parent.sdxl_dajie_cardList;
                  while (cardList.length) {
                    var card = cardList.shift();
                    delete card.storage.sdxl_dajie;
                    delete card.storage.sdxl_dajie_respondTo;
                    card.removeGaintag('sdxl_dajie');
                  }
                });
              }
            }
          },
        },
        //冯默风:巧匠、潜营
        sdxl_qianying: {
          subSkill: {
            off: {
              mark: true,
              marktext2: '潜',
              markimage: 'extension/金庸群侠传/image/icon/jy_icon_qianying.jpg',
              intro: {
                content: '你本轮已发动【潜营】.',
              },
            },
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseUseBefore',
          },
          logTarget: 'player',
          check(event, player) {
            //////////////
            if (get.attitude(player, event.player) > 0) return false;
            //////////////
            return event.player.countCards('h') > 3;
          },
          filter(event, player) {
            if (player.hasSkill('sdxl_qianying_off')) return false;
            return event.player != player && player.countCards('h') > 0;
          },
          content() {
            'step 0';
            var cards = player.getCards('h');
            event.count = cards.length;
            //trigger.player.gain(cards,player,'giveAuto');
            player.give(cards, trigger.player, true);
            player.addTempSkill('sdxl_qianying_off', 'roundStart');
            ('step 1');
            if (trigger.player.countGainableCards(player, 'h')) {
              if (event.count > trigger.player.countGainableCards(player, 'h')) event.count = trigger.player.countGainableCards(player, 'h');
              player.gainPlayerCard(event.count, 'h', trigger.player, true, 'visible').set('ai', function (button) {
                var player = _status.event.player;
                var target = _status.event.target;
                var bool = get.attitude(player, target) > 0;
                var value = get.value(button.link, player);
                return bool ? -value : value;
              });
            }
          },
        },
        sdxl_qiaojiang: {
          mod: {
            selectTarget(card, player, range) {
              if (card.name == 'tiesuo' && Array.isArray(range) && range[1] != -1) range[1] = 4;
            },
          },
          derivation2: ['jydiytaohuazhen', 'jydiy_shenghuoling', 'jydiy_ruanweijia', 'jydiy_tulongdao', 'jydiy_dagoubang', 'jydiy_yitianjian'],
          enable: 'phaseUse',
          //usable:1,(出牌阶段不限次数)
          audio: 'ext:金庸群侠传/peiyin:3',
          prompt: '是否对一名角色装备区里的装备牌进行升级？',
          filter(event, player) {
            return game.hasPlayer(function (target) {
              return target.countCards('e', function (card) {
                if (card.origin_name) {
                  return false;
                }
                return lib.skill.sdxl_qiaojiang.derivation2.includes(card.name);
              });
            });
          },
          filterTarget(card, player, target) {
            return target.countCards('e', function (card) {
              if (card.origin_name) {
                return false;
              }
              return lib.skill.sdxl_qiaojiang.derivation2.includes(card.name);
            });
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            var cards = target.getCards('e', function (card) {
              if (card.origin_name) {
                return false;
              }
              return lib.skill.sdxl_qiaojiang.derivation2.includes(card.name);
            });
            if (cards.length == 1) {
              event._result = { bool: true, links: cards };
            } else {
              player
                .choosePlayerCard('e', target, true)
                .set('filterButton', function (button) {
                  if (button.link.origin_name) {
                    return false;
                  }
                  return lib.skill.sdxl_qiaojiang.derivation2.includes(button.link.name);
                })
                .set('ai', function (button) {
                  return 1;
                });
            }
            ('step 1');
            var card = result.links[0];
            //var info=get.info(card);
            target.removeEquipTrigger(card);
            card.init([card.suit, card.number, card.name + '_re', card.nature]);
            target.addEquipTrigger(card);
          },
          ai: { order: 9, result: { target: 2 }, threaten: 2 },
        },
        //程英:神通、箫吟
        sdxl_shentong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          selectCard: [1, Infinity],
          filterCard(card, player) {
            return true;
          },
          position: 'he',
          selectTarget: 1,
          filterTarget(card, player, target) {
            return player != target;
          },
          check(card) {
            var player = _status.event.player;
            var num = player.needsToDiscard();
            num = num > 0 ? num : 1;
            var lengthx = ui.selected.cards.length;
            if (lengthx && !player.getCards('e').includes(card)) return -1;
            if (lengthx) {
              if (
                game.hasPlayer(function (target) {
                  return target != player && lib.skill.sdxl_shentong.ai.result.target(player, target) > 50;
                })
              ) {
                if (lengthx < num) return 12 - get.value(card);
                return -1;
              }
              if (
                game.hasPlayer(function (target) {
                  return target != player && lib.skill.sdxl_shentong.ai.result.target(player, target) > 0;
                })
              ) {
                return -1;
              }
              if (
                game.hasPlayer(function (target) {
                  return target != player && lib.skill.sdxl_shentong.ai.result.target(player, target) < 0;
                })
              ) {
                return -1;
              }
              if (lengthx <= 2) return 8 - get.value(card);
              return -1;
            }
            return 8 - get.value(card);
          },
          content() {
            'step 0';
            event.discount = cards.length;
            var tar = target;
            target.discardPlayerCard(target, event.discount + 1, 'hej', '是否弃置区域内的' + get.cnNumber(event.discount + 1) + '张牌？否则你摸' + get.cnNumber(event.discount) + '张牌并翻面.').set('ai', function (button) {
              var card = button.link;
              if (tar.isTurnedOver()) {
                return -10;
              }
              return 6 - get.jyValue(card, tar);
            });
            ('step 1');
            if (result.bool) {
              event.finish();
            }
            ('step 2');
            target.draw(event.discount);
            ('step 3');
            target.turnOver();
          },
          ai: {
            order: 1,
            result: {
              target(player, target) {
                var att = get.attitude(player, target);
                if (att > 0 && target.isTurnedOver()) {
                  return 100;
                }
                var num = target.countDiscardableCards(target, 'hej', function (cardx) {
                  return get.jyValue(cardx, target) <= 0;
                });
                if (att > 0 && num == ui.selected.cards.length + 1) return 16;
                if (att <= 0 && num > 0) return 0;
                if (att < 0) return -1;
                return 0;
              },
            },
          },
        },
        sdxl_xiaoyin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { target: 'useCardToTargeted' },
          usable: 1,
          filter(event, player) {
            if (event.player == player) return false;
            return event.player.countCards('h') % 2 != player.countCards('h') % 2;
          },
          check(event, player) {
            return true;
          },
          content() {
            'step 0';
            var tp = trigger.player;
            var p = player;
            //var att=get.attitude(p,tp)>0;
            player.chooseBool('是否摸一张牌？否则你令' + get.translation(trigger.player) + '弃置一张牌.').set('ai', function () {
              if (get.attitude(p, tp) >= 0) {
                return true;
              }
              if (tp.countCards('he') <= 1) {
                return false;
              }
              return true;
            });
            ('step 1');
            if (result.bool) {
              player.draw();
            } else {
              player.line(trigger.player);
              trigger.player.chooseToDiscard(1, true, 'he');
            }
          },
        },
        sdxl_gulei: {
          trigger: {
            global: 'gameStart',
            player: 'enterGame',
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return !player.storage.sdxl_gulei_end;
          },
          content() {
            'step 0';
            var card = get.cardPile(function (cardx) {
              return cardx.name == 'jydiy_tulongdao';
            });
            if (!card) {
              card = game.createCard('jydiy_tulongdao');
            }
            player.useCard(card, player);
            player.storage.sdxl_gulei_end = true;
            ('step 1');
            var card1 = get.cardPile(function (cardx) {
              return cardx.name == 'jydiy_wumuyishu';
            });
            if (!card1) {
              card1 = game.createCard('jydiy_wumuyishu');
            }
            player.useCard(card1, player);
            player.storage.sdxl_gulei_end = true;
            player.awakenSkill('sdxl_gulei');
          },
        },
        sdxl_yingguan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          derivation: ['sdxl_yuxue', 'sdxl_yuanshou'],
          global: 'sdxl_yingguan1',
          ai: {
            threaten: 2.5,
          },
        },
        sdxl_yingguan1: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          prompt: '减一点体力上限,获得【浴血】、【援守】.',
          line: true,
          selectTarget: 1,
          //direct:true,
          filter(event, player) {
            if (player.hasSkill('sdxl_yuanshou') || player.hasSkill('sdxl_yuxue')) {
              return false;
            }
            if (player.storage.sdxl_yingguan1_end) {
              return false;
            }
            return game.hasPlayer(function (target) {
              return target != player && target.hasSkill('sdxl_yingguan') && target.isIn();
            });
          },
          filterTarget(card, player, target) {
            return target.hasSkill('sdxl_yingguan');
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            game.playJY(['sdxl_yingguan1', 'sdxl_yingguan2'].randomGet());
            player.say(['郭大侠,黄帮主,我等前来相助!', '保家卫国,我等义不容辞!'].randomGet());
            player.addSkills('sdxl_yuxue');
            player.addSkills('sdxl_yuanshou');
            player.storage.sdxl_yingguan_target = target;
            var card = player.getEquip(2);
            var ygCard = target.getEquip(2);
            if (!card && ygCard) {
              var info = get.info(ygCard);
              player.addAdditionalSkills('sdxl_yuanshou', info.skills);
            }
            player.storage.sdxl_yingguan1_end = true;
            ('step 1');
            target.gainMaxHp(1);
            ('step 2');
            target.recover(1);
            ('step 3');
            player.loseMaxHp(1);
          },
          ai: {
            order: 5,
            expose: 2,
            result: {
              target: 10,
            },
          },
        },
        sdxl_weicheng: {
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          trigger: {
            player: 'phaseDrawBegin1',
          },
          filter(event, player) {
            return !event.numFixed;
          },
          group: ['sdxl_weicheng_discard', 'sdxl_weicheng_die'],
          content() {
            var num = player.maxHp - player.hp;
            if (player.hp == 1) {
              player.$fullscreenpop('背水一战!', 'fire');
              player.say(['破釜沉舟,死守襄阳!', '国家存亡,就在今日!'].randomGet());
            } else if (num <= 1) {
              num = 1;
              player.say('战事稍缓,且待暂息.');
            } else if (num >= 6) {
              player.say(['战事危急,我等当效死力!', '拼上性命,也要守住襄阳!'].randomGet());
            }
            trigger.changeToZero();
            if (num > 0) {
              player.draw(num);
            }
            //trigger.num=num;
          },
          subSkill: {
            discard: {
              audio: 'ext:金庸群侠传/peiyin:2',
              forced: true,
              trigger: {
                player: 'useCard',
              },
              filter(event, player) {
                if (!player.isPhaseUsing()) return false;
                var hcards = player.getCards('h');
                var ecards = player.getCards('e');
                if ((!hcards || hcards.length == 0) && (!ecards || ecards.length == 0)) {
                  return false;
                }
                if (player.getCards('h').length > player.hp) {
                  return true;
                }
                return false;
              },
              content() {
                game.playJY(['sdxl_weicheng1', 'sdxl_weicheng2', 'sdxl_weicheng3', 'sdxl_weicheng4', 'sdxl_weicheng5', 'sdxl_weicheng6'].randomGet());
                player.chooseToDiscard(1, true, '请弃置一张牌', 'he', function (card) {
                  return true;
                });
              },
            },
            die: {
              audio: 'ext:金庸群侠传/peiyin:2',
              forced: true,
              trigger: { global: 'dieAfter' },
              filter(event, player) {
                if (!event.player.hasSkill('sdxl_yuanshou') && !event.player.hasSkill('sdxl_yuxue')) {
                  return false;
                }
                return event.player.storage.sdxl_yingguan_target == player;
              },
              content() {
                game.playJY(['sdxl_yuanshou1', 'sdxl_yuanshou2'].randomGet());
                player.say(['我痛失一臂矣!', '将军安息,这血债郭某必让鞑子血偿!', '逝者长已矣,生者当奋进!'].randomGet());
                player.loseMaxHp(1);
              },
            },
          },
        },
        sdxl_yuxue: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'damageBegin' },
          _priority: 15,
          forced: true,
          check(event, player) {
            const target = player.storage.sdxl_yingguan_target;
            if (target) {
              return get.attitude(target, player) > 0;
            }
            return false;
          },
          filter(event, player) {
            const target = player.storage.sdxl_yingguan_target;
            return target && target.isIn() && target.hasSkill('sdxl_yingguan');
          },
          content() {
            'step 0';
            const targetx = player.storage.sdxl_yingguan_target;
            targetx.chooseBool('是否代替' + get.translation(player) + '受到伤害？').set('ai', function () {
              return get.attitude(targetx, trigger.player) > 0;
            });
            ('step 1');
            if (result.bool) {
              player.storage.sdxl_yingguan_target.say(['鞑子兵精将猛,你们快些入城!', '我等勠力同心,方可克敌制胜!'].randomGet());
              trigger.player = player.storage.sdxl_yingguan_target;
              trigger.player.draw(2);
            }
          },
          ai: {
            threaten: 0,
          },
        },
        sdxl_yuanshou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          prompt: '对援守角色使用桃',
          line: true,
          selectTarget: 1,
          selectCard: 1,
          group: ['sdxl_yuanshou_equip'],
          filter(event, player) {
            return game.hasPlayer(function (target) {
              if (!lib.filter.targetEnabled2({ name: 'tao' }, player, target)) return false;
              return target != player && target == player.storage.sdxl_yingguan_target && target.isIn() && target.hasSkill('sdxl_yingguan');
            });
          },
          filterTarget(card, player, target) {
            //game.log(ui.selected.cards[0]);//---美妙
            var tao = ui.selected.cards[0];
            if (!lib.filter.targetEnabled2(tao, player, target)) return false;
            return target == player.storage.sdxl_yingguan_target && target.hasSkill('sdxl_yingguan');
          },
          discard: false,
          lose: false,
          filterCard(card, player) {
            return card.name == 'tao';
          },
          content() {
            'step 0';
            var card = cards[0];
            player.useCard(card, target, false);
            ('step 1');
            player.draw(1);
          },
          ai: {
            order: 10,
            expose: 1,
            result: { target: 2 },
          },
          subSkill: {
            equip: {
              audio: 'ext:金庸群侠传/peiyin:2',
              forced: true,
              popup: false,
              trigger: {
                global: ['equipEnd', 'loseEnd'],
              },
              filter(event, player) {
                if (event.player != player.storage.sdxl_yingguan_target && event.player != player) return false;
                if (event.name == 'equip' && get.subtype(event.card) == 'equip2') return true;
                if (event.name == 'lose' && event.es && event.es.length) {
                  for (var i = 0; i < event.es.length; i++) {
                    if (get.subtype(event.es[i]) == 'equip2') return true;
                  }
                }
                return false;
              },
              content() {
                if (trigger.name == 'equip') {
                  if (trigger.player == player) {
                    player.removeAdditionalSkills('sdxl_yuanshou');
                  } else {
                    var card = trigger.card;
                    var myCard = player.getEquip(2);
                    if (card && !myCard) {
                      var info = get.info(card);
                      if (info.skills) {
                        player.addAdditionalSkills('sdxl_yuanshou', info.skills);
                      }
                    }
                  }
                } else {
                  if (trigger.player == player) {
                    //此行修复郭靖黄蓉无防具时,援守角色视为装备其防具时的弹窗
                    if (player.storage.sdxl_yingguan_target.isIn() && player.storage.sdxl_yingguan_target.getEquip(2)) {
                      //if(player.storage.sdxl_yingguan_target.isIn()){
                      var card = player.storage.sdxl_yingguan_target.getEquip(2);
                      var info = get.info(card);
                      if (info.skills) {
                        player.addAdditionalSkills('sdxl_yuanshou', info.skills);
                      }
                    }
                  } else {
                    var myCard = player.getEquip(2);
                    if (!myCard) {
                      player.removeAdditionalSkills('sdxl_yuanshou');
                    }
                  }
                }
              },
            },
          },
        },
        //神雕侠侣mark
        sdxl_quanxiang: {
          trigger: {
            source: 'damageEnd',
          },
          filter(event, player) {
            if (!event.player.countCards('e')) return false;
            return event.card && event.card.name == 'sha';
          },
          check(event, player) {
            return event.player.isDamaged() && get.attitude(player, event.player) > 0;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          logTarget: 'player',
          content() {
            'step 0';
            var str = '劝降:是否将一张装备牌置于' + get.translation(player) + '侠客牌上作为<赏>?';
            str += '否则你弃置一张装备牌';
            trigger.player
              .chooseCard(1, 'he', str, function (card) {
                return get.type(card) == 'equip';
              })
              .set('ai', function (card) {
                if (get.position(card) == 'h') return 12 - get.value(card);
                return 10 - get.value(card);
              });
            ('step 1');
            if (result.cards && result.cards.length) {
              player.addToExpansion(result.cards, 'gain2', 'log', 'fromStorage', player).gaintag.add('sdxl_kaoshang');
              if (trigger.player.isDamaged()) trigger.player.recover();
            } else {
              trigger.player.chooseToDiscard(true, '请弃置一张装备牌', 'he', function (card) {
                return get.type(card) == 'equip';
              });
            }
          },
        },
        sdxl_kaoshang: {
          group: ['sdxl_kaoshang2'],
          marktext2: '犒',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_kaoshang.jpg',
          intro: {
            content: 'expansion',
            markcount: 'expansion',
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          },
          trigger: { player: 'phaseDrawBegin2' },
          threaten: 1.4,
          filter(event, player) {
            return !event.numFixed && player.hp > 0;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          content() {
            trigger.num += player.hp;
            var next = game.createEvent('sdxl_kaoshang_after', false);
            next.player = player;
            next.num = player.hp;
            next.setContent(lib.skill.sdxl_kaoshang.contentx);
            event.next.remove(next);
            trigger.after.push(next);
          },
          contentx() {
            'step 0';
            var number = Math.min(num, player.countCards('h'));
            if (number > 0 && player.isIn()) {
              player.chooseCard(number, '将' + get.cnNumber(number) + '张手牌置于侠客牌上作为<赏>', true);
            } else {
              event.finish();
            }
            ('step 1');
            if (result.cards && result.cards.length) {
              player.addToExpansion(result.cards, 'gain2', 'log', player).gaintag.add('sdxl_kaoshang');
              player.say('立下大功者,赏千金,封万户侯!');
            }
          },
        },
        sdxl_kaoshang2: {
          trigger: { global: ['damageAfter', 'die'] },
          forced: true,
          audio: 'sdxl_kaoshang',
          filter(event, player, name) {
            if (!event.source || !event.source.isIn()) return false;
            if (!player.getExpansions('sdxl_kaoshang').length) return false;
            if (event.player == player) return false;
            if (name == 'damageAfter') {
              return event.player.inRange(player);
            } else if (name == 'die') {
              if (event.player == player) return false;
              return event.player.inRange(player);
            }
            return false;
          },
          content() {
            'step 0';
            if (trigger.name == 'damage' && player.getExpansions('sdxl_kaoshang').length > 1) {
              player
                .chooseCardButton(get.prompt('sdxl_kaoshang', trigger.source), player.getExpansions('sdxl_kaoshang'), [1, 1])
                .set('ai', function (button) {
                  if (_status.event.att < 0) {
                    if (button.link.name == 'du') return 2;
                    return 0;
                  } else if (_status.event.att > 0) {
                    return get.value(button.link, _status.event.sourcex);
                  }
                  return 0;
                })
                .set('att', get.attitude(player, trigger.source))
                .set('sourcex', trigger.source)
                .set('prompt2', '交给' + get.translation(trigger.source) + '一张"赏"');
            } else {
              event.allCard = true;
              var str = '交给' + get.translation(trigger.source) + (trigger.name == 'damage' ? '一张"赏"' : get.translation(player.getExpansions('sdxl_kaoshang')));
              player
                .chooseBool(get.prompt('sdxl_kaoshang', trigger.source))
                .set('ai', function (evt, playerx) {
                  return _status.event.bool;
                })
                .set('bool', get.attitude(player, trigger.source) > 0)
                .set('prompt2', str);
            }
            ('step 1');
            if (result.bool) {
              var links = event.allCard ? player.getExpansions('sdxl_kaoshang').slice(0) : result.links;
              //trigger.source.gain(links,player,'fromStorage','give','log');
              player.give(links, trigger.source, true);
              if (trigger.source != player) {
                trigger.source.say('多谢王爷!');
              }
            }
          },
        },
        sdxl_bihe: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: 'phaseZhunbeiBegin',
          },
          filter(event, player) {
            if (player.getEquip(1)) {
              return false;
            }
            return true;
          },
          content() {
            'step 0';
            player
              .chooseControl(['玄铁重剑', '君子淑女剑'])
              .set('prompt', '请选择你本回合视为装备的武器')
              .set('ai', function () {
                var count = game.countPlayer(function (current) {
                  //if(!current.hasSex('female')) return false;
                  if (!player.differentSexFrom(current)) return false;
                  if (get.attitude(player, current) > 0) return false;
                  if (get.distance(player, current) > player.getAttackRange()) return false;
                  return true;
                });
                return count > 0 ? '君子淑女剑' : '玄铁重剑';
              });
            ('step 1');
            if (result && result.control) {
              if (result.control == '君子淑女剑') {
                player.addTempSkills('sdxl_bihe_junzishunv', 'phaseUseEnd');
              } else if (result.control == '玄铁重剑') {
                player.addTempSkills('sdxl_bihe_xuantie', 'phaseUseEnd');
              }
              game.log(player, '视为装备了', result.control);
            }
          },
          subSkill: {
            junzishunv: {
              audio: 'ext:金庸群侠传/peiyin:2',
              inherit: 'jydiy_junzishunvjian_skill',
              mod: {
                attackRange(from, distance) {
                  if (from.hasEmptySlot(1)) return distance + 1;
                },
              },
              filter(event, player) {
                if (!lib.skill.jydiy_junzishunvjian_skill.filter(event, player)) return false;
                if (!player.hasEmptySlot(1)) return false;
                return true;
              },
            },
            xuantie: {
              audio: 'ext:金庸群侠传/peiyin:2',
              inherit: 'jydiy_xuantiezhongjian_skill',
              mod: {
                attackRange(from, distance) {
                  if (from.hasEmptySlot(1)) return distance + 1;
                },
              },
              filter(event, player) {
                if (!lib.skill.jydiy_xuantiezhongjian_skill.filter(event, player)) return false;
                if (!player.hasEmptySlot(1)) return false;
                return true;
              },
            },
          },
        },
        sdxl_xianlv: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['gainAfter', 'loseAfter'],
          },
          forced: true,
          filter(event, player) {
            if (event.name == 'gain' && event.parent.parent.name == 'phaseDraw') return false;
            if (player.countCards('h') % 2 != 1) return false;
            if (_status.currentPhase != player) return true;
            return !player.isPhaseUsing(true);
          },
          content() {
            player.draw();
          },
          ai: {
            threaten: 2.1,
            noh: true,
            skillTagFilter(player, tag) {
              if (tag == 'noh') {
                if (player.countCards('h') % 2 != 0) return false;
              }
            },
          },
        },
        sdxl_jiaozi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'damageEnd' },
          filter(event, player) {
            if (player.isDisabledJudge() && player.countDisabledSlot() >= 5) return false;
            return event.source != undefined && event.source != player;
          },
          check(event, player) {
            var att = get.attitude(player, event.source);
            if (event.source.isTurnedOver()) {
              if (att > 0 && !player.isDisabledJudge()) return true;
              if (att > 0 && player.countCards('e') < 2) return true;
              return false;
            } else {
              if (att < 0 && !player.isDisabledJudge()) return true;
              if (att < 0 && player.countCards('e') < 2) return true;
              return false;
            }
          },
          logTarget: 'source',
          content() {
            'step 0';
            var list = [];
            if (!player.isDisabledJudge()) list.push('判定区');
            if (player.countDisabledSlot() < 5) list.push('装备区');
            if (list.length == 2) {
              player
                .chooseControl(list, function (event, player) {
                  return '判定区';
                })
                .set('prompt', '娇恣:选择废除装备区或判定区');
            } else {
              event._dis = list[0];
            }
            ('step 1');
            var dis = result.control || event._dis;
            if (dis == '装备区') {
              if (!player.hasDisabledSlot(1)) player.disableEquip(1);
              if (!player.hasDisabledSlot(2)) player.disableEquip(2);
              if (!player.hasDisabledSlot(3)) player.disableEquip(3);
              if (!player.hasDisabledSlot(4)) player.disableEquip(4);
              if (!player.hasDisabledSlot(5)) player.disableEquip(5);
            } else if (dis == '判定区') {
              player.disableJudge();
            }
            trigger.source.turnOver();
          },
        },
        sdxl_baiju2: {
          shaRelated: true,
          trigger: { player: 'useCard2' },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && player.canUse(event.card, current);
            });
          },
          forced: true,
          content() {
            'step 0';
            player
              .chooseTarget('白驹', '是否为' + get.translation(trigger.card) + '增加至多一个目标?', function (card, player, target) {
                return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
              })
              .set('sourcex', trigger.targets)
              .set('ai', function (target) {
                var player = _status.event.player;
                return get.effect(target, _status.event.card, player, player);
              })
              .set('card', trigger.card);
            ('step 1');
            if (result.bool) {
              event.targets = result.targets;
            } else {
              event.finish();
            }
            ('step 2');
            player.line(event.targets);
            trigger.targets.addArray(event.targets);
          },
        },
        sdxl_baiju: {
          group: 'sdxl_baiju2',
          mod: {
            //selectTarget:function(card,player,range){
            //    if(card.name=='sha'&&range[1]!=-1) range[1]++;
            //},
            globalFrom(from, to, distance) {
              return distance - 2;
            },
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          position: 'he',
          prompt: '出牌阶段,你可以重铸装备牌,或者将一张装备牌置入一名其他角色装备区里.',
          selectTarget: [0, 1],
          complexCard: true,
          complexSelect: true,
          complexTarget: true,
          enable: 'phaseUse',
          filterOk() {
            const card = ui.selected.cards[0],
              event = _status.event,
              player = event.player;
            const selected = ui.selected.targets.length;
            if (selected.length) {
              return selected[0].canEquip(card);
            } else {
              return player.canRecast(card);
            }
            return false;
          },
          discard: false,
          lose: false,
          delay: false,
          filter(event, player) {
            return player.countCards('he', { type: 'equip' }) > 0;
          },
          filterCard(card, player, event) {
            if (get.type(card) != 'equip') return false;
            if (player.canRecast(card)) return true;
            return game.hasPlayer((i) => i != player && i.canEquip(card));
          },
          check(card) {
            const player = _status.event.player;
            if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
              return 11 - get.equipValue(card);
            }
            return 11 - get.value(card);
          },
          filterTarget(card, player, target) {
            return player != target && target.canEquip(card);
          },
          content() {
            if (targets && targets.length) {
              player.$give(cards, targets[0]);
              targets[0].equip(cards[0]);
            } else {
              player.recast(cards);
            }
          },
          lose: false,
          discard: false,
          ai: {
            basic: {
              order: 10,
            },
            result: {
              player: 1,
              target(player, target) {
                var card = ui.selected.cards[0];
                if (card) return get.effect(target, card, target, target);
                return 0;
              },
            },
            threaten: 1.3,
          },
        },
        sdxl_danni: {
          audio: 'ext:金庸群侠传/peiyin:2',
          juexingji: true,
          trigger: {
            player: ['disableJudgeEnd', 'disableEquipEnd'],
          },
          init(player) {
            player.storage.sdxl_danni = false;
          },
          forced: true,
          filter(event, player) {
            if (player.isDisabledJudge() && player.countDisabledSlot() >= 5) {
              return !player.storage.sdxl_danni;
            }
            return false;
          },
          derivation: ['sdxl_baiju', 'sdyx_baojia'],
          content() {
            player.loseMaxHp();
            player.addSkills('sdxl_baiju');
            player.addSkills('sdyx_baojia');
            player.storage.sdxl_danni = true;
            player.awakenSkill('sdxl_danni');
          },
        },
        sdxl_lingxie: {
          group: 'sdxl_lingxie_damage',
          subSkill: {
            damage: {
              audio: 'ext:金庸群侠传/peiyin:2',
              trigger: {
                global: 'damageAfter',
              },
              mode: ['identity'],
              filter(event, player) {
                if (event.card && event.card.name && event.player.identity == 'zhu' && event.num > 0) {
                  return event.player.storage.sdxl_lingxie_names && event.player.storage.sdxl_lingxie_names.includes(event.card.name);
                }
                return false;
              },
              forced: true,
              content() {
                player.draw();
                player.storage.sdxl_lingxie++;
                player.markSkill('sdxl_lingxie');
              },
            },
            names: {
              mark: true,
              marktext2: '胁',
              init(player, skill) {
                if (!player.storage[skill]) player.storage[skill] = [];
              },
              markimage: 'extension/金庸群侠传/image/icon/jylinxie.jpg',
              intro: {
                mark(dialog, storage, player) {
                  if (!storage.length) return '无';
                  var list = [];
                  for (var i = 0; i < storage.length; i++) {
                    list.push(['锦囊', '', storage[i]]);
                  }
                  dialog.addAuto([list, 'vcard']);
                },
                markcount(storage, player) {
                  return storage.length;
                },
              },
            },
          },
          init(player, skill) {
            player.storage[skill] = 0;
          },
          mark: true,
          marktext2: '摸',
          markimage: 'extension/金庸群侠传/image/icon/jylinxie.jpg',
          intro: {
            content(storage) {
              return '你当前因【凌胁】共摸了' + storage + '张牌.';
            },
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'damageEnd',
          },
          mode: ['identity'],
          logTarget(event, player) {
            return event.source;
          },
          filter(event, player) {
            if (event.card && event.card.name && event.source && event.source.identity == 'zhu' && event.num > 0) {
              if (!event.source.storage.sdxl_lingxie_names) {
                event.source.storage.sdxl_lingxie_names = [];
              }
              return !event.source.storage.sdxl_lingxie_names.includes(event.card.name);
            }
            return false;
          },
          content() {
            trigger.source.addSkill('sdxl_lingxie_names');
            trigger.source.storage.sdxl_lingxie_names.add(trigger.card.name);
            trigger.source.markSkill('sdxl_lingxie_names');
          },
        },
        sdxl_bishan: {
          mode: ['identity'],
          init(player) {
            player.storage.sdxl_bishan = false;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin',
          },
          filter(event, player) {
            if (player.storage.sdxl_lingxie && player.storage.sdxl_lingxie >= 7) {
              return !player.storage.sdxl_bishan;
            }
            return false;
          },
          forced: true,
          _priority: 3,
          content() {
            'step 0';
            var zhu = get.zhu(player) || game.zhu;
            if (player != zhu) {
              player.line(zhu, 'fire');
              player.$fullscreenpop('我才是主公', 'fire');
              var plid = player.identity;
              zhu.identity = plid;
              zhu.setIdentity(plid);
              zhu.isZhu = false;
              zhu.identityShown = true;
              player.identity = 'zhu';
              player.setIdentity('zhu');
              game.zhu = player;
              player.isZhu = true;
              player.identityShown = true;
            }
            ('step 1');
            player.gainMaxHp();
            player.awakenSkill('sdxl_bishan');
            player.storage.sdxl_bishan = true;
          },
        },
        sdxl_tongbi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: ['chooseToRespondBegin', 'chooseToUseBegin'] },
          filter(event, player) {
            if (event.responded) return false;
            if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
            if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
            if (!player.countCards('hs')) return false;
            return game.hasPlayer(function (current) {
              return current != player && current.isMaxHandcard(true);
            });
          },
          forced: true,
          checkx(event, player) {
            if (event && (event.ai || event.ai1)) {
              var ai = event.ai || event.ai1;
              var tmp = _status.event;
              _status.event = event;
              var result = ai({ name: 'shan' }, _status.event.player, event);
              _status.event = tmp;
              return result > 0;
            }
            return true;
          },
          content() {
            'step 0';
            event.targets = game.filterPlayer(function (current) {
              return current != player && current.isMaxHandcard(true);
            });
            if (!event.targets.length || event.targets.length != 1) {
              event.finish();
              return;
            }
            event.target = event.targets[0];
            var bool = lib.skill.sdxl_tongbi.checkx(trigger, player); //QQQ
            player
              .chooseCard('hs', get.prompt2('sdxl_tongbi', event.target))
              .set('ai', function (card) {
                if (!_status.event.boolai) return -1;
                var player = _status.event.player;
                var target = _status.event.sourcex;
                var att = get.attitude(player, target);
                if (att > 0) {
                  return 15 - get.value(card);
                }
                return 4 - get.value(card);
              })
              .set('boolai', bool)
              .set('sourcex', event.target);
            ('step 1');
            if (result.bool) {
              //target.gain(result.cards[0],player,'giveAuto');
              player.give(result.cards[0], target, true);
              trigger.untrigger();
              trigger.set('responded', true);
              trigger.result = { bool: true, card: { name: 'shan' } };
            }
          },
        },
        sdxl_qinmu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin',
          },
          derivation: ['sdxl_guizong'],
          filter(event, player) {
            return (
              game.filterPlayer(function (current) {
                return current != player && current.hasSex('male') && !current.hasSkill('sdxl_qinmu2') && !current.hasSkill('sdxl_qinmu3') && !current.hasSkill('sdxl_qinmu4');
              }).length >= 1
            );
          },
          content() {
            'step 0';
            player
              .chooseTarget(get.prompt2('sdxl_qinmu'), true, function (card, player, target) {
                return target.hasSex('male') && target != player && !target.hasSkill('sdxl_qinmu2') && !target.hasSkill('sdxl_qinmu3') && !target.hasSkill('sdxl_qinmu4');
              })
              .set('ai', function (target) {
                return get.attitude(player, target);
              });
            ('step 1');
            if (result.bool) {
              player.say('大哥哥,你答应我要帮我实现三个愿望的!');
              var target = result.targets[0];
              player.line(target, 'green');
              game.log(target, '成为了', '【倾慕】', '的目标');
              target.storage.sdxl_qinmu2 = player;
              target.storage.sdxl_qinmu3 = player;
              target.storage.sdxl_qinmu4 = player;
              target.addSkill('sdxl_qinmu1');
              target.addSkill('sdxl_qinmu2');
              target.addSkill('sdxl_qinmu3');
              target.addSkill('sdxl_qinmu4');
              player.addSkill('sdxl_qinmu5');
              player.awakenSkill('sdxl_qinmu');
            }
          },
        },
        sdxl_qinmu1: {},
        sdxl_qinmu2: {
          intro: { content: '<b>限定技.</b>当你的侠客牌翻至背面向上后,你可以翻面,$将侠客牌翻至正面向上.' },
          nopop: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'turnOverEnd' },
          popup: false,
          filter(event, player) {
            return player.isTurnedOver() && player.storage.sdxl_qinmu2 && player.storage.sdxl_qinmu2.isIn();
          },
          content() {
            'step 0';
            'step 1';
            var target = player.storage.sdxl_qinmu2;
            target.say('我的第一个愿望就是,我想要你摘下面具,让我看看你的真面目');
            player.line(target, 'green');
            player.$fullscreenpop('一见杨过误终生', 'fire');
            player.turnOver();
            target.turnOver(false);
            player.awakenSkill('sdxl_qinmu2');
          },
        },
        sdxl_qinmu3: {
          intro: {
            content: '<b>限定技.</b>当你进入濒死状态时,你可以将体力回复至一点,$回复一点体力.',
          },
          nopop: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'dying' },
          popup: false,
          filter(event, player) {
            return player.hp <= 0 && player.storage.sdxl_qinmu3 && player.storage.sdxl_qinmu3.isIn();
          },
          content() {
            'step 0';
            'step 1';
            var target = player.storage.sdxl_qinmu3;
            target.say('大哥哥,千万不要想不开……');
            player.line(target, 'green');
            player.recover(1 - player.hp);
            target.recover();
            player.awakenSkill('sdxl_qinmu3');
          },
        },
        sdxl_qinmu4: {
          intro: {
            content: '<b>限定技.</b>当你失去最后的手牌时,你可摸等同于体力值的牌,$摸等量的牌.',
          },
          nopop: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['loseAfter'],
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
          },
          forced: true,
          _priority: -2019,
          filter(event, player) {
            if (!player.storage.sdxl_qinmu4 && !player.storage.sdxl_qinmu4.isIn()) return false;
            if (player.countCards('h')) return false;
            var evt = event.getl(player);
            return evt && evt.player == player && evt.hs && evt.hs.length;
          },
          content() {
            var target = player.storage.sdxl_qinmu4;
            target.say('大哥哥,千万不要想不开……');
            var num = player.hp;
            player.draw(num);
            target.draw(num);
            player.awakenSkill('sdxl_qinmu4');
          },
          ai: {
            order: 2,
            result: {
              player(player) {
                return 1;
              },
            },
          },
        },
        sdxl_qinmu5: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'dieBegin',
          },
          forced: true,
          filter(event, player) {
            return event.player.hasSkill('sdxl_qinmu1');
          },
          content() {
            player.$fullscreenpop('开宗立派', 'fire');
            player.loseMaxHp();
            player.addSkills('sdxl_guizong');
            player.awakenSkill('sdxl_qinmu5');
            player.update();
          },
        },
        sdxl_renxia: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['loseAfter'],
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
          },
          filter(event, player) {
            var evt = event.getl(player);
            return (
              evt &&
              evt.player == player &&
              evt.es &&
              evt.es.length &&
              game.hasPlayer(function (current) {
                return player.canUse({ name: 'sha' }, current, false);
              })
            );
          },
          forced: true,
          content() {
            player
              .chooseUseTarget(
                get.prompt2('sdxl_renxia'),
                {
                  name: 'sha',
                },
                false,
                'nodistance',
              )
              .set('selectTarget', [1, 1])
              .set('oncard', function (card, player) {
                if (!player) player = this.player;
                var chat = ['明枪易躲,暗箭难防', '巾帼不让须眉'].randomGet();
                player.say(chat);
                player.draw();
              });
          },
          ai: {
            expose: 2,
            noe: true,
            reverseEquip: true,
            effect: {
              target(card, player, target, current) {
                if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
              },
            },
          },
        },
        sdxl_guizong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: "shaUnhirt'",
          },
          forced: true,
          filter(event, player) {
            return (
              player.isAlive() &&
              get.randomCard(function (card) {
                return get.type(card) == 'equip' && !player.hasDisabledSlot(get.subtype(card));
              })
            );
          },
          content() {
            event.card = get.randomCard(function (card) {
              return get.type(card) == 'equip' && !player.hasDisabledSlot(get.subtype(card));
            });
            if (event.card) {
              player.equip(event.card, true).set('delay', true);
            }
          },
          ai: {
            order: 1,
            expose: 0.2,
          },
        },
        sdxl_shixin: {
          trigger: {
            player: 'damageEnd',
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (!event.source) return false;
            if (event.source == player) return false;
            if (!event.source.isIn()) return false;
            const source = event.source;
            const boole = player.countCards('e') > 0 && source.countCards('e') > 0;
            const boolh = player.countCards('h') > 0 && source.countCards('h') > 0;
            if (!boole && !boolh) return false;
            return event.num > 0;
          },
          getIndex(event, player, triggername) {
            return Math.min(event.num, 9) || 1;
          },
          cost() {
            'step 0';
            const source = trigger.source;
            const boole = player.countCards('e') > 0 && source.countCards('e') > 0;
            const boolh = player.countCards('h') > 0 && source.countCards('h') > 0;
            const getResult = function (pos) {
              const sourceCards = source.getDiscardableCards(player, pos);
              const playerCards = player.getDiscardableCards(player, pos);
              let sourceResult = 0;
              let playerResult = 0;
              for (const card of sourceCards) {
                const result = lib.card.guohe_ai.iCard(card, player, source);
                if (result > 0) {
                  sourceResult += 1;
                } else {
                  sourceResult -= 1;
                }
              }
              for (const card of playerCards) {
                const result = lib.card.guohe_ai.iCard(card, player, player);
                if (result > 0) {
                  playerResult += 1;
                } else {
                  playerResult -= 1;
                }
              }
              return sourceResult + playerResult;
            };
            const choose = [];
            let Control = '取消';
            let maxnum = 0;
            if (boolh) {
              choose.push('手牌区');
              const geth = getResult('h');
              if (geth > maxnum) {
                Control = '手牌区';
                maxnum = geth;
              }
            }
            if (boole) {
              choose.push('装备区');
              const gete = getResult('e');
              if (gete > maxnum) {
                Control = '装备区';
                maxnum = gete;
              }
            }
            choose.push('取消');
            const next = player.chooseControl(choose);
            next.set('getResult', Control);
            next.set('ai', function () {
              return _status.event.getResult;
            });
            next.set('prompt', get.prompt('sdxl_shixin', source));
            ('step 1');
            if (result.control == '手牌区') {
              event.result = {
                bool: true,
                targets: [trigger.source],
                cost_data: {
                  pos: 'h',
                },
              };
            } else if (result.control == '装备区') {
              event.result = {
                bool: true,
                targets: [trigger.source],
                cost_data: {
                  pos: 'e',
                },
              };
            } else {
              event.result = { bool: false };
            }
          },
          content() {
            const pos = event.cost_data.pos;
            const sourceCards = trigger.source.getDiscardableCards(player, pos);
            const playerCards = player.getDiscardableCards(player, pos);
            if (sourceCards.length && playerCards.length) {
              game.loseAsync({
                lose_list: [
                  [player, playerCards],
                  [trigger.source, sourceCards],
                ],

                discarder: player,
              }).setContent('discardMultiple');
            } else if (sourceCards.length) {
              trigger.source.discard(sourceCards);
            } else if (playerCards.length) {
              player.discard(playerCards);
            }
          },
          content_old() {
            'step 0';
            var target = trigger.source;
            var num = player.countCards('e');
            var nh = target.countCards('e');
            var numh = player.countCards('h');
            var nhh = target.countCards('h');
            player.chooseControl('手牌区', '装备区', '取消').ai = function () {
              if (get.attitude(player, target) > 0) {
                if (target.hasSkillTag('receiveEquip') || (target.hasSkillTag('noe') && nh > 1 && num < 3)) return '装备区';
                if (target.isDamaged() && nh < 3 && num < 2 && target.getEquip('baiyin')) return '装备区';
                if (nh < 2 && num < 3 && player.getEquip('baiyin')) return '装备区';
                if (numh < 3 && !player.countCards('h', { name: 'tao' }) && target.hasSkillTag('noh') && nhh < 3) return '手牌区';
              } else {
                if (nh < 1) return '手牌区';
                if (nhh < 1) return '装备区';
                if (target.hasSkillTag('receiveEquip') || target.hasSkillTag('noe')) return '手牌区';
                if (!target.hasSkillTag('receiveEquip') && !target.hasSkillTag('noe')) {
                  if (target.isDamaged() && target.getEquip('baiyin') && nh < 3) return '手牌区';
                  if (nh > 0 && num < 1) return '装备区';
                  if (nh - num > 2) return '装备区';
                  if (player.getEquip('baiyin') && player.isDamaged() && num < 3) return '装备区';
                  return '手牌区';
                }
                if (target.hasSkillTag('noh') && nhh < 3) return '手牌区';
                if (!target.hasSkillTag('noh')) {
                  var nk = game.countPlayer(function (current) {
                    return current.countCards('h') < 1;
                  });
                  if (nk > 1 && numh < 4) return '手牌区';
                  if (numh < 1 && nhh > 0) return '手牌区';
                  if (nhh - numh > 3) return '手牌区';
                }
              }
              return '取消';
            };
            ('step 2');
            if (result.control == '取消') event.finish();
            if (result.control == '手牌区') {
              var card = player.getCards('h');
              var card1 = trigger.source.getCards('h');
              player.discard(card);
              trigger.source.discard(card1);
            }
            if (result.control == '装备区') {
              var card = player.getCards('e');
              var card1 = trigger.source.getCards('e');
              player.discard(card);
              trigger.source.discard(card1);
            }
            ('step 3');
            event.num--;
            ('step 4');
            if (event.num > 0) event.goto(1);
          },
        },
        //新冰魄
        sdxl_bingpo: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'chooseToUse',
          filterCard(card, player) {
            return get.color(card) == 'black';
          },
          position: 'hes',
          viewAs: { name: 'jydiy_bingpoyinzhen' },
          viewAsFilter(player) {
            if (!player.countCards('hes', { color: 'black' })) return false;
            return true;
          },
          prompt: '将一张黑色牌当过【冰魄银针】使用',
          check(card) {
            return 6 - get.value(card);
          },
        },
        sdxl_sanwu: {
          trigger: {
            global: ['equipEnd', 'addJudgeEnd', 'loseEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd'],
          },
          forced: true,
          filter(event, player) {
            const count = game.countPlayer(function (current) {
              return current.countCards('h') == 0;
            });
            if (count != 3) return false;
            return game.hasPlayer(function (current) {
              var evt = event.getl(current);
              return evt && evt.hs && evt.hs.length && current.countCards('h') == 0;
            });
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          content() {
            player.draw(3);
          },
        },
        sdxl_guofu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'discardAfter' },
          filter(event, player) {
            //if(event.player==player) return false;
            var cards = event.cards.filter(function (card) {
              if (card.suit != 'heart') return false;
              if (get.position(card) != 'd') return false;
              if (lib.config.extension_金庸群侠传_jiexiantupo) return true;
              return player.hasUseTarget(card);
            });
            return cards.length;
          },
          forced: true,
          content() {
            'step 0';
            'step 1';
            var cards = trigger.cards.filter(function (card) {
              if (card.suit != 'heart') return false;
              if (get.position(card) != 'd') return false;
              if (lib.config.extension_金庸群侠传_jiexiantupo) return true;
              return player.hasUseTarget(card);
            });
            event.use = [];
            if (cards.length) {
              event.use = cards;
            }
            ('step 2');
            if (event.use.length) {
              var str = '是否发动果腹<br>选择一张♥️️牌使用之?';
              if (lib.config.extension_金庸群侠传_jiexiantupo) str += '不能使用则你改为获得之.';
              player
                .chooseCardButton(event.use, 1, str)
                .set('filterButton', function (button) {
                  if (lib.config.extension_金庸群侠传_jiexiantupo) return true;
                  return _status.event.player.hasUseTarget(button.link);
                })
                .set('ai', function (button) {
                  var player = _status.event.player;
                  if (player.hasUseTarget(button.link)) return player.getUseValue(button.link);
                  if (lib.config.extension_金庸群侠传_jiexiantupo) return get.value(button.link);
                  return 0;
                });
            } else {
              event.finish();
            }
            ('step 3');
            if (result.bool) {
              if (player.hasUseTarget(result.links[0])) {
                player.chooseUseTarget(result.links[0], true);
              } else if (lib.config.extension_金庸群侠传_jiexiantupo) {
                player.gain(result.links[0], 'log', 'gain2');
              }
              event.finish();
            }
          },
        },
        sdxl_heji: {
          mod: {
            targetInRange(card) {
              if (card.suit == 'spade' && card.name == 'sha') return true;
            },
          },
          group: ['sdxl_heji_hit'],
          subSkill: {
            hit: {
              audio: 'sdxl_guofu',
              trigger: { player: 'useCard' },
              filter(event, player) {
                return event.targets && event.targets.length && event.card.suit == 'spade' && event.card.name == 'sha';
              },
              forced: true,
              logTarget: 'targets',
              content() {
                trigger.directHit.addArray(game.filterPlayer());
                //trigger.directHit.addArray(game.filterPlayer(function(current){
                //return current!=player;
                //}));
              },
              ai: {
                directHit_ai: true,
                skillTagFilter(player, tag, arg) {
                  if ((arg && arg.card.name != 'sha') || arg.card.suit != 'spade') return false;
                },
              },
            },
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { source: 'damageSource' },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && event.player.isIn() && event.player.countDiscardableCards(player, 'h') > 0;
          },
          forced: true,
          logTarget: 'player',
          content() {
            player.discardPlayerCard(trigger.player, 'h', 'visible').set('filterButton', function (button) {
              return button.link.suit == 'heart';
            });
          },
          ai: {
            effect: {
              player(card, player, target) {
                if (card.name == 'sha' && card.suit == 'spade') return [1, 1];
              },
            },
          },
        },
        sdxl_zifu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseUseBegin',
          },
          logTarget: 'player',
          filter(event, player) {
            if (player.isLinked()) return false;
            return lib.filter.filterCard({ name: 'jiu' }, event.player, event);
          },
          check(event, player) {
            // if(event.player!=player) return false;
            if (get.attitude(player, event.player) <= 0) return false;
            if (player.hp < 3) return false;
            if (!event.player.hasSha()) return false;
            return game.hasPlayer(function (current) {
              return get.effect(current, { name: 'sha' }, event.player, event.player) > 0 && event.player.canUse({ name: 'sha' }, current);
            });
          },
          content() {
            player.loseHp();
            player.link();
            trigger.player.useCard({ name: 'jiu' }, trigger.player);
          },
        },
        sdxl_qinggu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseUseBegin',
          },
          filter(event, player) {
            if (event.player == player) return false;
            return player.countCards('he', { suit: 'heart' }) > 0;
          },
          forced: true,
          content() {
            'step 0';
            player
              .chooseCard(1, 'he', get.prompt2('sdxl_qinggu', trigger.player), function (card, player) {
                return card.suit == 'heart';
              })
              .set('ai', function (card) {
                var sourcex = _status.event.sourcex;
                var att = get.attitude(_status.event.player, sourcex);
                if (sourcex.countCards('h', { suit: 'heart' }) == sourcex.countCards('h')) return att;
                return -att;
              })
              .set('sourcex', trigger.player);
            ('step 1');
            if (result.bool) {
              //trigger.player.gain(result.cards[0],player,'give','log');
              player.give(result.cards[0], trigger.player, true);
              trigger.player.addTempSkill('sdxl_qinggu_noheart');
              trigger.player.addTempSkill('sdxl_qinggu_draw');
              trigger.player.storage.sdxl_qinggu_draw = player;
            }
          },
          subSkill: {
            noheart: {
              mark: true,
              marktext2: '情',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_qinggu.jpg',
              intro: {
                content: '你本回合内不能使用非♥️️牌.',
              },
              charlotte: true,
              mod: {
                cardEnabled(card, player) {
                  if (card.suit != 'heart') return false;
                },
                cardUsable(card, player) {
                  if (card.suit != 'heart') return false;
                },
                cardSavable(card, player) {
                  if (card.suit != 'heart') return false;
                },
                targetInRange(card) {
                  if (card.suit != 'heart') return false;
                },
              },
            },
            draw: {
              trigger: { player: 'useCard' },
              forced: true,
              popup: false,
              filter(event, player) {
                return event.card.suit == 'heart';
              },
              charlotte: true,
              content() {
                if (player.storage.sdxl_qinggu_draw && player.storage.sdxl_qinggu_draw.isIn()) {
                  player.storage.sdxl_qinggu_draw.draw(2);
                }
                player.storage.sdxl_qinggu_draw2 = true;
              },
              onremove(player) {
                if (!player.storage.sdxl_qinggu_draw2) {
                  if (player.storage.sdxl_qinggu_draw && player.storage.sdxl_qinggu_draw.isIn()) {
                    player.damage(1, 'fire', player.storage.sdxl_qinggu_draw);
                  }
                }
                delete player.storage.sdxl_qinggu_draw2;
                delete player.storage.sdxl_qinggu_draw;
              },
            },
          },
        },
        sdxl_zhenwang: {
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'linkAfter' },
          forced: true,
          filter(event, player) {
            if (!event.player.isLinked()) return false;
            return game.hasPlayer(function (current) {
              return !current.isLinked();
            });
          },
          content() {
            'step 0';
            player
              .chooseTarget(get.prompt2('sdxl_zhenwang'), function (card, player, target) {
                return !target.isLinked();
              })
              .set('ai', function (target) {
                var player = _status.event.player;
                var att = get.attitude(player, target);
                if (att == 0) return 0;
                var num = lib.card.tiesuo.ai.result.target(player, target);
                if (att < 0) num = -num;
                return num;
              });
            ('step 1');
            if (result.bool) {
              result.targets[0].link();
            } else {
              player.getStat('triggerSkill').sdxl_zhenwang--;
            }
          },
        },
        sdxl_fasong: {
          mod: {
            globalFrom(from, to, distance) {
              return (
                distance -
                game.countPlayer(function (current) {
                  var group = 'qun';
                  if (lib.jy_changeSkill) group = 'jy_lie';
                  return current.group == group;
                })
              );
            },
          },
        },
        sdxl_xiezhi: {
          audio: 'ext:金庸群侠传/peiyin:4',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            if (game.countPlayer() < 3) return false;
            return game.hasPlayer(function (current1) {
              return (
                get.distance(player, current1) <= 1 &&
                game.hasPlayer(function (current) {
                  return current1 != player && current != player && current1 != current && current.inRange(player);
                })
              );
            });
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            if (target == player) return false;
            return (
              get.distance(player, target) <= 1 &&
              game.hasPlayer(function (current) {
                return target != player && current != player && target != current && current.inRange(player);
              })
            );
          },
          content() {
            'step 0';
            event.targets = game
              .filterPlayer(function (current) {
                return current != targets[0] && current != player && current.inRange(player);
              })
              .sortBySeat();
            event.source = targets[0];
            event.num1 = 0;
            event.num2 = 0;
            //player.line(event.targets,'fire');
            ('step 1');
            if (!source.isIn()) {
              event.finish();
              return;
            }
            if (targets.length) {
              var target = targets.shift();
              event.target = target;
              if (!target.isIn()) {
                event.redo();
                return;
              }
              player.line(target, 'fire');
              target.addTempClass('target');
              var str = '是否弃置一张牌保护' + get.translation(source) + '？若弃牌角色数不大于未弃牌角色数则' + get.translation(source) + '受到一点伤害';
              target
                .chooseToDiscard(1, 'he', str)
                .set('aicheck', get.attitude(target, source) > 0)
                .set('ai', function (card) {
                  var evt = _status.event;
                  if (!evt.aicheck) return -1;
                  if (evt.num1 >= evt.num2) {
                    return 6 - get.value(card);
                  }
                  return -1;
                })
                .set('num1', event.num1)
                .set('num2', event.num2);
            } else {
              event.goto(3);
            }
            ('step 2');
            if (result.bool) {
              event.num1++;
              game.log('已弃牌' + event.num1 + '人', '没有弃牌' + event.num2 + '人');
            } else {
              event.damage = true;
              event.num2++;
              game.log(target, '没有弃牌!');
              game.log('已弃牌' + event.num1 + '人', '没有弃牌' + event.num2 + '人');
            }
            event.goto(1);
            ('step 3');
            if (event.num2 >= event.num1) {
              if (event.damage) {
                event.source.damage(player);
              } else {
                game.log('其他角色攻击范围没有你', source, '免受伤害');
              }
            } else {
              game.log('已弃牌角色数大于没有弃牌角色数', source, '免受伤害');
            }
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                if (target.hp == 1) return -5;
                return -2;
              },
            },
            threaten: 2,
          },
        },
        sdxl_banruo: {
          audio: 'sdxl_longxiang',
          shaRelated: true,
          forced: true,
          trigger: {
            player: 'useCard1',
          },
          logTarget: 'targets',
          filter(event, player) {
            if (!event.cards || !event.cards.length) return false;
            if (game.roundNumber == 1) return false;
            return event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
          },
          content() {
            if (game.roundNumber > player.maxHp) {
              if (!trigger.baseDamage) trigger.baseDamage = 1;
              trigger.baseDamage += 1;
            }
            var func = function (i) {
              var id = i.playerid;
              var map = trigger.customArgs;
              if (!map[id]) map[id] = {};
              if (trigger.card.name == 'sha') {
                if (typeof map[id].shanRequired == 'number') {
                  map[id].shanRequired += game.roundNumber - 1;
                } else {
                  map[id].shanRequired = game.roundNumber;
                }
              } else {
                if (!map[id].shaReq) map[id].shaReq = {};
                if (!map[id].shaReq[id]) map[id].shaReq[id] = 1;
                map[id].shaReq[id] += game.roundNumber - 1;
              }
            };
            game.filterPlayer(func);
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (game.roundNumber == 1) return false;
              if (arg && arg.card.name != 'juedou' && arg.card.name != 'sha') return false;
              if (arg && arg.card.name == 'juedou' && Math.floor(arg.target.countCards('h', 'sha') / game.roundNumber) > player.countCards('h', 'sha')) return false;
              if (arg && arg.card.name == 'sha' && arg.target.countCards('h', 'shan') > game.roundNumber) return false;
            },
          },
        },
        sdxl_feilun_new: {
          audio: 'sdxl_mizong',
          precontent() {
            player.getHistory('custom').push({ sdxl_feilun_new: event.result.cards[0].number });
          },
          enable: 'phaseUse',
          filterCard(card, player) {
            var numbers = [];
            var all = player.getAllHistory('custom');
            for (var evt of all) {
              if (evt.sdxl_feilun_new) numbers.add(evt.sdxl_feilun_new);
            }
            var num = card.number;
            return !numbers.includes(num);
          },
          filter(event, player) {
            var numbers = [];
            var all = player.getAllHistory('custom');
            for (var evt of all) {
              if (evt.sdxl_feilun_new) numbers.add(evt.sdxl_feilun_new);
            }
            return (
              player.countCards('hes', function (card) {
                var num = card.number;
                return !numbers.includes(num);
              }) > 0
            );
          },
          position: 'hes',
          viewAs: {
            name: 'juedou',
          },
          usable: 1,
          prompt() {
            var player = _status.event.player;
            var str = '将一张本局内未以此法使用过的点数的牌当【比武】使用.';
            var numbers = [];
            var all = player.getAllHistory('custom');
            for (var evt of all) {
              if (evt.sdxl_feilun_new) numbers.add(evt.sdxl_feilun_new);
            }
            if (numbers.length) {
              numbers.sort(function (a, b) {
                return a - b;
              });
              return str + '已使用点数:(' + get.translation(numbers.map((i) => get.strNumber(i))) + ')';
            } else {
              return str;
            }
          },
          check(card) {
            var val = get.value(card);
            return 5 - val;
          },
        },
        sdxl_mizong: {
          //audioname:["qtpz_sangjielama"],
          audioname2: {
            qtpz_sangjielama: 'qtpz_mizong',
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          mod: {
            selectTarget(card, player, range) {
              if (card.name == 'juedou' && card.sdxl_mizong && ui.selected.cards.length) {
                if (Array.isArray(range) && range[1] != -1) range[1] += ui.selected.cards.length - 1;
              }
            },
          },
          enable: 'phaseUse',
          usable: 1,
          check(card) {
            var evt = _status.event;
            if (!evt.sdxl_mizong) evt.sdxl_mizong = lib.skill.sdxl_mizong.getResult(evt.player.getCards('h'), evt.player);
            if (!evt.sdxl_mizong.includes(card)) return 0;
            return 1;
          },
          getResult(cards, player, bool) {
            var numplayer = game.countPlayer(function (current) {
              return player.canUse({ name: 'juedou' }, current) && get.effect(current, { name: 'juedou' }, player, player) > 0;
            });
            var l = cards.length;
            var all = Math.pow(l, 2);
            var list = [];
            for (var i = 1; i < all; i++) {
              var array = [];
              for (var j = 0; j < l; j++) {
                if (Math.floor((i % Math.pow(2, j + 1)) / Math.pow(2, j)) > 0) array.push(cards[j]);
              }
              var num = 0;
              for (var k of array) {
                num += k.number;
              }
              if (num == 13) list.push(array);
            }
            if (list.length) {
              if (bool) return true;
              list.sort(function (a, b) {
                if (a.length == b.length && a.length == numplayer) get.value(a) - get.value(b);
                if (a.length == numplayer) return 1;
                if (b.length == numplayer) return 1;
                if (a.length != b.length) return b.length - a.length;
                return get.value(a) - get.value(b);
              });
              return list[0];
            }
            return false;
          },
          filterCard(card, player) {
            var num = 0;
            if (Array.isArray(ui.selected.cards))
              for (var i of ui.selected.cards) {
                num += i.number;
              }
            return card.number + num <= 13;
          },
          complexCard: true,
          filterOk() {
            var num = 0;
            if (Array.isArray(ui.selected.cards))
              for (var i of ui.selected.cards) {
                num += i.number;
              }
            return num == 13;
          },
          selectCard: [1, Infinity],
          filter(event, player) {
            if (!player.countCards('h')) return false;
            return lib.skill.sdxl_mizong.getResult(player.getCards('h'), player, true);
          },
          viewAs: { name: 'juedou', sdxl_mizong: true },
        },
        //龙象开始
        sdxl_longxiang: {
          shaRelated: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          group: ['sdxl_longxiang1', 'sdxl_longxiang2'],
        },
        sdxl_longxiang1: {
          audio: 'sdxl_longxiang',
          trigger: { player: 'useCardToPlayered' },
          forced: true,
          filter(event, player) {
            return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
          },
          //_priority:-1,
          logTarget: 'target',
          content() {
            var id = trigger.target.playerid;
            var map = trigger.parent.customArgs;
            if (!map[id]) map[id] = {};
            if (typeof map[id].shanRequired == 'number') {
              map[id].shanRequired++;
            } else {
              map[id].shanRequired = 2;
            }
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
            },
          },
        },
        sdxl_longxiang2: {
          audio: 'sdxl_longxiang',
          trigger: { player: 'useCardToPlayered', target: 'useCardToTargeted' },
          forced: true,
          logTarget(trigger, player) {
            return player == trigger.player ? trigger.target : trigger.player;
          },
          filter(event, player) {
            return event.card && event.card.name == 'juedou';
          },
          //_priority:-1,
          content() {
            var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
            var idt = trigger.target.playerid;
            var map = trigger.parent.customArgs;
            if (!map[idt]) map[idt] = {};
            if (!map[idt].shaReq) map[idt].shaReq = {};
            if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
            map[idt].shaReq[id]++;
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if ((arg && arg.card.name != 'juedou') || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
            },
          },
        },
        //龙象结束
        //龙象结束
        jue_wuzhao2: {
          //audio:"jue_wuzhao",//太吵,隐藏
          trigger: {
            player: 'gainBefore',
            global: 'gameDrawAfter',
          },
          init(player, skill) {
            const cards = player.getCards('h');
            if (cards.length) {
              player.discard(cards);
            }
          },
          forced: true,
          filter(event, player) {
            if (event.name == 'gain') return true;
            return player.getCards('h').length;
          },
          content() {
            if (trigger.name == 'gain') {
              //if(false){
              trigger.cancel();
              var owner = get.owner(trigger.cards[0]);
              if (owner && owner.getCards('hejsx').includes(trigger.cards[0])) owner.lose(trigger.cards, ui.discardPile);
              else game.cardsDiscard(trigger.cards);
              game.log(trigger.cards, '进入了弃牌堆');
              event.trigger('jue_wuzhaoDicCard');
            } else {
              var cards = player.getCards('h');
              if (cards.length) {
                player.discard(cards);
              }
            }
          },
          ai: {
            nokeep: true,
          },
        },
        jue_wuzhao: {
          group: ['jue_wuzhao2'],
          audio: 'ext:金庸群侠传/peiyin:7',
          trigger: { player: ['chooseToRespondBegin', 'chooseToUseBegin'] },
          forced: true,
          firstDo: true,
          silent: true,
          mod: {
            cardEnabled2(card, player) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('jue_wuzhao')) {
                var evt = get.event();
                //if(evt.name!='chooseToRespond'&&evt.name!='chooseToUse') return false;
              }
            },
          },
          onremove(player, skill) {
            const cards2 = player.getCards('s', function (card) {
              return card.hasGaintag('jue_wuzhao');
            });
            if (cards2.length) {
              lib.skill.jue_wuzhao.onUpdate(player, cards2);
            }
          },
          onUpdate(player, cards2) {
            if (player.isOnline2()) {
              player.send(
                function (cards, player) {
                  cards.forEach((i) => i.delete());
                  if (player == game.me) ui.updatehl();
                },
                cards2,
                player,
              );
            }
            cards2.forEach((i) => i.delete());
            if (player == game.me) ui.updatehl();
          },
          content() {
            const cards = get.cards(4, true);
            const gains = cards.map(function (card) {
              const cardx = ui.create.card();
              cardx.init(get.cardInfo(card));
              cardx._cardid = card.cardid;
              return cardx;
            });
            player.directgains(gains, null, 'jue_wuzhao');
            trigger.pushHandler(function (event, option) {
              if (event.jue_wuzhao) return;
              if (event.step == 4 && option.state == 'begin') {
                event.set('jue_wuzhao', true);
                const player = event.player;
                const playerCards = player.getCards('s', function (card) {
                  return card.hasGaintag('jue_wuzhao');
                });
                if (event.result && event.result.bool) {
                  const cards = get.cards(4, true);
                  const cards2 = [];
                  if (!event.result.cards) event.result.cards = [];
                  for (var card of event.result.cards) {
                    var cardx = cards.filter((cardx) => cardx.cardid == card._cardid);
                    if (cardx.length) cards2.push(cardx[0]);
                  }
                  if (cards2.length) {
                    event.result.cards = cards2;
                    event.result.card.cards = cards2;
                  }
                }
                if (player.isOnline2()) {
                  player.send(
                    function (cards, player) {
                      cards.forEach((i) => i.delete());
                      if (player == game.me) ui.updatehl();
                    },
                    playerCards,
                    player,
                  );
                }
                playerCards.forEach((i) => i.delete());
                if (player == game.me) ui.updatehl();
              }
            });
          },
          hiddenCard(player, name) {
            const cards = get.cards(4, true);
            return cards.some((i) => i.name == name);
          },
          markimage: 'extension/金庸群侠传/image/icon/jywuzhao.jpg',
          mark: true,
          intro: {
            mark(dialog, storage, player) {
              const cards = get.cards(4, true);
              if (player.isUnderControl(true)) {
                dialog.addAuto(cards);
              } else {
                return '';
              }
            },
          },
          ai: {
            respondShan: true,
            respondSha: true,
            save: true,
            skillTagFilter(player, tag, arg) {
              const cards = get.cards(4, true);
              if (Array.isArray(cards))
                for (var i of cards) {
                  if (tag == 'respondSha') {
                    if (i.name == 'sha') return true;
                  } else if (tag == 'respondShan') {
                    if (i.name == 'shan') return true;
                  } else if (tag == 'save') {
                    if (i.name == 'jiu' || i.name == 'tao') return true;
                  }
                }
              return false;
            },
          },
        },
        jue_wuzhao_old: {
          marktext2: '无',
          markimage: 'extension/金庸群侠传/image/icon/jywuzhao.jpg',
          mark: true,
          intro: {
            content(storage, player) {
              if (!ui.cardPile.childNodes.length) return '';
              var list = [];
              var num = Math.min(4, ui.cardPile.childNodes.length);
              for (var i = 0; i < num; i++) {
                list.push(ui.cardPile.childNodes[i]);
              }
              if (player.isUnderControl(true)) {
                return get.translation(list);
              } else {
                return '';
              }
            },
            mark(dialog, storage, player) {
              if (!ui.cardPile.childNodes.length) return '';
              var list = [];
              var num = Math.min(4, ui.cardPile.childNodes.length);
              for (var i = 0; i < num; i++) {
                list.push(ui.cardPile.childNodes[i]);
              }
              if (player.isUnderControl(true)) {
                dialog.addAuto(list);
              } else {
                return '';
              }
            },
          },
          group: 'jue_wuzhao2',
          enable: ['chooseToUse', 'chooseToRespond'],
          audio: 'ext:金庸群侠传/peiyin:7',
          hiddenCard(player, name) {
            var event = _status.event;
            if (!ui.cardPile.childNodes.length) return false;
            if (event.Countjue_wuzhao && event.Countjue_wuzhao > 1) return false;
            //if(lib.inpile.includes(name)) return true;
            var num1 = 4;
            if (num1 > ui.cardPile.childNodes.length) {
              num1 = ui.cardPile.childNodes.length;
            }
            for (var i = 0; i < num1; i++) {
              if (ui.cardPile.childNodes[i].name == name) return true;
            }
            return false;
          },
          filter(event, player) {
            if (!ui.cardPile.childNodes.length) return false;
            if (event.Countjue_wuzhao && event.Countjue_wuzhao > 1) return false;
            var num1 = 4;
            if (num1 > ui.cardPile.childNodes.length) {
              num1 = ui.cardPile.childNodes.length;
            }
            for (var i = 0; i < num1; i++) {
              if (event.filterCard && event.filterCard(ui.cardPile.childNodes[i], player, event)) return true;
            }
            return false;
          },
          chooseButton: {
            dialog(event, player) {
              var num1 = 4;
              var cards = [];
              if (num1 > ui.cardPile.childNodes.length) {
                num1 = ui.cardPile.childNodes.length;
              }
              for (var i = 0; i < num1; i++) {
                cards.push(ui.cardPile.childNodes[i]);
              }
              if (!event.Countjue_wuzhao) {
                event.Countjue_wuzhao = 0;
              }
              event.Countjue_wuzhao += 1;
              return ui.create.dialog('<img style=width:150px  src=extension/金庸群侠传/image/button/jy_button_wuzhao.jpg>', cards, 'hidden');
            },
            filter(button, player) {
              var evt = _status.event.parent;
              if (evt && evt.filterCard) {
                return evt.filterCard(button.link, player, evt);
              }
              return true;
            },
            check(button) {
              var player = _status.event.player;
              if (_status.event.parent.type != 'phase') {
                var evt = _status.event.parent;
                //////////
                if (evt && evt.type == 'dying') {
                  return get.effect(evt.dying, button.link, player, player);
                }
                //////////////
                if (evt && (evt.ai || evt.ai1)) {
                  var tmp = _status.event;
                  _status.event = evt;
                  var result = (evt.ai || evt.ai1)(button.link, _status.event.player, evt);
                  _status.event = tmp;
                  return result;
                }
              }
              if (button.link.name == 'du') return 0;
              if (player.getUseValue(button.link) > 0) return get.order(button.link);
              return -1;
            },
            backup(links, player) {
              return {
                filterCard() {
                  return false;
                },
                selectCard: -1,
                position: 'h',
                viewAs: links[0],
                precontent() {
                  game.playJY(['jue_wuzhao1', 'jue_wuzhao2', 'jue_wuzhao3', 'jue_wuzhao4', 'jue_wuzhao5', 'jue_wuzhao6', 'jue_wuzhao7', 'jue_wuzhao8', 'jue_wuzhao9', 'jue_wuzhao10', 'jue_wuzhao11'].randomGet());
                },
              };
            },
            prompt(links) {
              return '选择' + get.translation(links) + '的目标';
            },
          },
          ai: {
            respondShan: true,
            respondSha: true,
            save: true,
            skillTagFilter(player, tag, arg) {
              var event = _status.event;
              if (!ui.cardPile.childNodes.length) return false;
              if (event.Countjue_wuzhao && event.Countjue_wuzhao > 1) return false;
              var num1 = 4;
              if (num1 > ui.cardPile.childNodes.length) {
                num1 = ui.cardPile.childNodes.length;
              }
              for (var i = 0; i < num1; i++) {
                if (tag == 'respondSha') {
                  if (ui.cardPile.childNodes[i].name == 'sha') return true;
                } else if (tag == 'respondShan') {
                  if (ui.cardPile.childNodes[i].name == 'shan') return true;
                } else if (tag == 'save') {
                  if (ui.cardPile.childNodes[i].name == 'jiu' || ui.cardPile.childNodes[i].name == 'tao') return true;
                }
              }
              return false;
            },
            order(item, player) {
              var event = _status.event;
              if (event.type != 'phase') return 4;
              if (!player) return -1;
              if (!ui.cardPile.childNodes.length) return -1;
              var num1 = 4;
              var cards = [];
              if (num1 > ui.cardPile.childNodes.length) {
                num1 = ui.cardPile.childNodes.length;
              }
              for (var i = 0; i < num1; i++) {
                cards.push(ui.cardPile.childNodes[i]);
              }
              var order = 0;
              if (Array.isArray(cards))
                for (var i of cards) {
                  if (player.getUseValue(i) > 0) {
                    var order2 = get.order(i);
                    if (order2 > order) order = order2;
                  }
                }
              return order;
            },
            result: {
              player(player) {
                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                return 1;
              },
            },
            useful: -1,
            value: -1,
          },
        },
        jue_zangjian2: {
          trigger: {
            global: 'phaseDrawEnd',
          },
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          forced: true,
          filter(event, player) {
            if (!event.cards || !event.cards.length) return false;
            if (Array.isArray(event.cards))
              for (var i of event.cards) {
                if (player.storage.jue_zangjian.includes(i)) {
                  return true;
                }
              }
            return false;
          },
          content() {
            'step 0';
            game.playJY(['jue_zangjian1', 'jue_zangjian2'].randomGet()); //重复触发,故加两条空配音
            player.line(trigger.player, 'green');
            ('step 1');
            if (Array.isArray(trigger.cards))
              for (var i of trigger.cards) {
                if (player.storage.jue_zangjian.includes(i)) {
                  player.storage.jue_zangjian.remove(i);
                  player.markSkill('jue_zangjian');
                  trigger.player.showCards(i, '葬剑');
                  var Skills = get.info(i, false).skills;
                  if (Skills && Skills.length) trigger.player.addSkills(Skills);
                }
              }
          },
          ai: {
            order: 3,
            result: {
              player: 1,
            },
          },
        },
        jue_zangjian: {
          ai: {
            order: 1,
            result: {
              player(player, target) {
                var bool = get.attitude(player, player.next) > 0;
                var Num = 0;
                var filter = function (card) {
                  if (get.type(card) == 'equip' && get.subtype(card) == 'equip1') return true;
                  if (['jydiy_wumuyishu', 'jydiy_jiuyinzhengjing', 'jydiy_kuihuabaodian', 'jydiy_jiuyangzhengjing'].includes(card.name)) return true;
                  return false;
                };
                var cardPile = Array.from(ui.cardPile.childNodes);
                if (!cardPile.length) return 0;
                cardPile = cardPile.slice(0, Math.min(4, cardPile.length));
                for (var i = 0; i < cardPile.length; i++) {
                  if (filter(cardPile[i])) {
                    if (!bool && get.cardtag(cardPile[i], 'gifts') && !player.next.hasJudge('bingliang')) Num = 2;
                    if (bool && !get.cardtag(cardPile[i], 'gifts') && !player.next.hasJudge('bingliang')) Num = 2;
                  }
                }
                return Num;
              },
            },
            threaten: 0.8,
          },
          group: ['jue_zangjian2'],
          init(player) {
            player.storage.jue_zangjian = [];
          },
          marktext2: '葬',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_zangjian.jpg',
          intro: {
            content: 'cards',
          },
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            var filter = function (card) {
              //return true;
              if (get.type(card) == 'equip' && get.subtype(card) == 'equip1') return true;
              if (['jydiy_wumuyishu', 'jydiy_jiuyinzhengjing', 'jydiy_kuihuabaodian', 'jydiy_jiuyangzhengjing'].includes(card.name)) return true;
              return false;
            };
            var cardPile = Array.from(ui.cardPile.childNodes);
            if (!cardPile.length) return false;
            cardPile = cardPile.slice(0, Math.min(4, cardPile.length));
            return cardPile.some((i) => filter(i));
          },
          content() {
            'step 0';
            var cardPile = Array.from(ui.cardPile.childNodes);
            cardPile = cardPile.slice(0, Math.min(4, cardPile.length));
            var list = [];
            for (var i = 0; i < 5; i++) {
              if (i >= ui.cardPile.childNodes.length) continue;
              list.push([i, '第' + get.translation(i + 1) + '张']);
            }
            var next = player.chooseButton(2, true, ['<img style=width:200px height:50px src=extension/金庸群侠传/image/button/jy_button_jianzhong.jpg>', '<div class="text center">请将一张武器或秘籍置于牌堆前5张任意位置,于摸牌阶段获得此牌的角色永久获得此装备的技能.</div>', [list, 'tdnodes'], '<div class="text center">牌堆</div>', cardPile]);
            next.set('filterButton', function (button) {
              if (!ui.selected.buttons.length) {
                if (typeof button.link == 'number') return false;
                //return true;
                if (get.type(button.link) == 'equip' && get.subtype(button.link) == 'equip1') return true;
                if (['jydiy_wumuyishu', 'jydiy_jiuyinzhengjing', 'jydiy_kuihuabaodian', 'jydiy_jiuyangzhengjing'].includes(button.link.name)) return true;
                return false;
              } else {
                if (typeof ui.selected.buttons[0].link == 'number') return false;
                return typeof button.link == 'number';
              }
              return false;
            }).set('ai', function (button) {
              var player = _status.event.player;
              var target = player.next;
              if (typeof button.link == 'number' && button.link == 1) return 10;
              var bool = get.attitude(player, player.next) > 0;
              if (typeof button.link != 'number' && get.type(button.link) == 'equip') {
                if (!bool && get.cardtag(button.link, 'gifts') && !target.hasJudge('bingliang')) return 10;
                if (bool && !get.cardtag(button.link, 'gifts') && !target.hasJudge('bingliang')) return 10;
              }
              return 0;
            });
            ('step 1');
            if (result.bool) {
              var card = result.links[0];
              var num = result.links[1];
              ui.cardPile.removeChild(card);
              player.markSkill('jue_zangjian');
              player.storage.jue_zangjian.add(card);
              if (num >= ui.cardPile.childNodes.length) {
                ui.cardPile.appendChild(card);
              } else {
                ui.cardPile.insertBefore(card, ui.cardPile.childNodes[num]);
              }
            }
          },
        },
        sdxl_anhun: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'damage' },
          ai: {
            maixie: true,
            maixie_hp: true,
          },
          filter(event, player) {
            return player.isAlive();
          },
          content() {
            'step 0';
            var cards = get.cards(5),
              list = [];
            player.showCards(cards);
            game.cardsGotoOrdering(cards);
            if (Array.isArray(cards))
              for (var i of cards) {
                if (lib.config.extension_金庸群侠传_jiexiantupo) {
                  if (get.tag(i, 'damage')) {
                    list.push(i);
                  }
                } else {
                  if (i.name == 'sha') {
                    list.push(i);
                  }
                }
              }
            event.list = list;
            ('step 1');
            if (event.list.length && event.list.length != 1) {
              var next = player.chooseCardButton('<img style=width:150px height=38px src=extension/金庸群侠传/image/button/jy_button_anranxiaohunzhang.jpg><br>请选择要使用的<杀>:', event.list);
              next.set('filterButton', function (button) {
                return _status.event.player.hasUseTarget(button.link, false);
              });
              next.set('ai', function (button) {
                return _status.event.player.getUseValue(button.link, false);
              });
            } else if (event.list.length == 1) {
              if (player.hasUseTarget(event.list[0], false)) {
                event._result = { bool: true, links: event.list };
              } else {
                event.finish();
              }
            } else {
              event.finish();
            }
            ('step 2');
            if (result.bool) {
              event._result = { bool: false };
              event.using = result.links[0];
              player.chooseUseTarget(event.using, false, 'nodistance');
            } else {
              event.finish();
            }
            ('step 3');
            if (result && result.bool) {
              event.list.remove(event.using);
              var chat = ['黯然销魂者,唯别而已矣', '人不犯我,我不犯人.人若犯我,十倍奉还', ''].randomGet();
              player.$fullscreenpop('黯然销魂掌', 'fire');
              player.say(chat);
              if (event.list.length) event.goto(1);
            }
          },
        },
        sdxl_biefu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin',
          },
          _priority: 16,
          checkx(event, player) {
            var group = 'wei';
            if (lib.jy_changeSkill) group = 'jy_song';
            var num = 1,
              targets = game.filterPlayer(function (current) {
                if (group != current.group) return false;
                return current != player;
              });
            while (targets.length) {
              var target = targets.shift();
              if (get.attitude(player, target) >= 0) {
                num++;
              } else {
                num--;
              }
            }
            return num;
          },
          check(event, player) {
            var num = player.isTurnedOver() ? 0 : -3;
            var num2 = 0;
            if (player.isDamaged()) num += 2;
            if (player.hasZhuSkill('sdxl_shangli') && lib.skill.sdxl_biefu.checkx(event, player) > 0) {
              num += lib.skill.sdxl_biefu.checkx(event, player);
            }
            var targets = game.filterPlayer(function (current) {
              return get.attitude(player, current) >= 0;
            });
            while (targets.length) {
              var num3 = 0;
              var target = targets.shift();
              if (target.isDamaged()) num3 += 2;
              if (target.hasSex('female')) num3 += 1;
              if (num3 >= num2) {
                num2 = num3;
              }
            }
            return num + num2 > 0;
          },
          content() {
            'step 0';
            player.turnOver();
            ('step 1');
            player
              .chooseTarget(true, '请选择【别赋】的目标', function (card, player, target) {
                return target != player;
              })
              .set('ai', function (target) {
                var num = 0;
                if (target.isDamaged()) num += 2;
                if (target.hasSex('female')) num += 1;
                if (get.attitude(player, target) >= 0) {
                  return num;
                } else return 0;
              });
            ('step 2');
            if (result.bool) {
              player.line(result.targets, 'fire');
              if (player.isDamaged()) player.recover();
              if (result.targets[0].isDamaged()) result.targets[0].recover();
              result.targets[0].addTempSkill('sdxl_biefu2', { player: 'phaseJieshuBegin' });
              if (result.targets[0].hasSex('female')) {
                result.targets[0].draw();
              }
            }
          },
          ai: {
            expose: 0.8,
          },
        },
        sdxl_biefu2: {
          trigger: { player: 'useCard2' },
          forced: true,
          mark: true,
          intro: { content: '你使用黑色基本牌或非延时黑色锦囊牌以多选择一个个目标' },
          filter(event, player) {
            if (get.color(event.card) != 'black') return false;
            var type = get.type(event.card);
            if (type != 'trick' && type != 'basic') return false;
            var info = get.info(event.card);
            if (info.allowMultiple == false) return false;
            if (event.targets && !info.multitarget) {
              if (
                game.hasPlayer(function (current) {
                  return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
                })
              ) {
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            player
              .chooseTarget(1, '【别赋】', function (card, player, target) {
                var player = _status.event.player;
                if (_status.event.targets.includes(target)) return false;
                return lib.filter.targetEnabled2(_status.event.card, player, target);
              })
              .set('prompt2', '额外指定一名' + get.translation(trigger.card) + '的目标')
              .set('ai', function (target) {
                var trigger = _status.event.getTrigger();
                var player = _status.event.player;
                return get.effect(target, trigger.card, player, player);
              })
              .set('targets', trigger.targets)
              .set('card', trigger.card);
            ('step 1');
            if (result.bool) {
              event.targets = result.targets;
            } else {
              event.finish();
            }
            ('step 2');
            if (event.targets) {
              player.line(event.targets);
              trigger.targets.addArray(event.targets);
            }
          },
          //mod:{
          //    selectTarget:function(card,player,range){
          //        if(get.type(card)!='delay'&&get.color(card)=='black'&&range[1]==1)range[1]++;
          //    },
          //},
        },
        sdxl_shangli: {
          group: ['sdxl_shangli_remove'],
          subSkill: {
            remove: {
              trigger: {
                global: 'gameStart',
                player: 'enterGame',
              },
              popup: false,
              forced: true,
              filter(event, player) {
                return player.identity != 'zhu';
              },
              content() {
                player.removeSkill('sdxl_shangli');
              },
            },
          },
          check(event, player) {
            var group = 'wei';
            if (lib.jy_changeSkill) group = 'jy_song';
            var num = 1,
              targets = game.filterPlayer(function (current) {
                if (group != current.group) return false;
                return current != player;
              });
            while (targets.length) {
              var target = targets.shift();
              if (get.attitude(player, target) >= 0) {
                num++;
              } else {
                num--;
              }
            }
            return num > 0;
          },
          logTarget(event, player) {
            var group = 'wei';
            if (lib.jy_changeSkill) group = 'jy_song';
            var targets = game.filterPlayer(function (current) {
              return current == player || group == current.group;
            });
            return targets;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'turnOverEnd',
          },
          _priority: 6,
          zhuSkill: true,
          filter(event, player) {
            if (!player.hasZhuSkill('sdxl_shangli')) return false;
            var group = 'wei';
            if (lib.jy_changeSkill) group = 'jy_song';
            return game.hasPlayer(function (current) {
              if (group != current.group) return false;
              return current != player;
            });
          },
          content() {
            var group = 'wei';
            if (lib.jy_changeSkill) group = 'jy_song';
            var targets = game.filterPlayer(function (current) {
              return current == player || group == current.group;
            });
            game.asyncDraw(targets);
          },
        },
        sdxl_muzong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseJieshuBegin',
          },
          _priority: 6,
          forced: true,
          zhuSkill: true,
          filter(event, player) {
            var group = 'wei';
            if (lib.jy_changeSkill) group = 'jy_song';
            if (player == event.player) return false;
            if (!player.hasZhuSkill('sdxl_muzong')) return false;
            if (group != event.player.group) return false;
            return true;
          },
          content() {
            'step 0';
            trigger.player
              .chooseBool('是否横置或重置侠客牌？')
              .set('ai', function () {
                var player = _status.event.player;
                var source = _status.event.sourcex;
                if (get.attitude(player, source) > 0 && !player.isLinked() && source.hasSkill('sdxl_luowang')) return true;
                if (get.attitude(player, source) < 0 && !player.isLinked() && source.hasSkill('sdxl_luowang')) return false;
                return lib.card.tiesuo.ai.result.target(player, player) > 0;
              })
              .set('sourcex', player);
            ('step 1');
            if (result.bool) {
              trigger.player.line(player);
              trigger.player.link();
            }
          },
        },
        sdxl_hebi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'turnOverEnd',
          },
          usable: 1,
          filter(event, player) {
            return event.player.isTurnedOver();
          },
          content() {
            'step 0';
            player
              .chooseTarget(get.prompt('sdxl_hebi'), function (card, player, target) {
                return target != player && !target.isTurnedOver();
              })
              .set('ai', function (target) {
                return -get.attitude(player, target);
              });
            ('step 1');
            if (result.bool) {
              player.line(result.targets[0]);
              result.targets[0].turnOver();
            } else {
              event.finish();
            }
          },
          ai: {
            basic: {
              result: {
                player: 1,
              },
              expose: 0.8,
            },
          },
        },
        sdxl_luowang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd',
          },
          forced: true,
          group: 'sdxl_luowang2',
          content() {
            'step 0';
            player
              .chooseTarget(get.prompt2('sdxl_luowang'), [1, 2], function (card, player, target) {
                return true;
              })
              .set('ai', function (target) {
                var player = _status.event.player;
                var att = get.attitude(player, target);
                var num = lib.card.tiesuo.ai.result.target(player, target);
                if (att < 0) {
                  return -num;
                } else {
                  if (target.isLinked()) return num;
                  return 0.2;
                }
              });
            ('step 1');
            if (result.bool) {
              event.targets = result.targets;
              event.num = 0;
              player.say('罗网恢恢,疏而不漏.');
            } else {
              event.finish();
            }
            ('step 2');
            if (event.num < event.targets.length) {
              event.targets[event.num].link();
              event.num++;
              event.redo();
            }
          },
          ai: {
            expose: 0.3,
          },
        },
        sdxl_luowang2: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'linkAfter',
          },
          forced: true,
          filter(event, player) {
            return event.player.isLinked();
          },
          content() {
            //game.playJY(['sdxl_luowang1','sdxl_luowang2'].randomGet());
            player.draw();
          },
        },
      },
      translate: {
        //神雕侠侣mark
        sdxl_shaolin: '少林',
        sdxl_wusechanshi: '无色禅师',
        sdxl_zengou: '赠偶',
        sdxl_zengou_info: '出牌阶段限一次,你可以令一名其他角色随机使用一张宝物牌,并从<少林技能库>中随机获得一个技能.你以此法选择的角色回合结束时,其可以将宝物牌置入另一名其他角色的装备区,并令该角色获得其获得的技能.以此法获得的技能在你下回合开始时或你死亡后移除.',
        sdxl_boyan: '博研',
        sdxl_boyan_info: '<b>转换技.</b>摸牌阶段摸牌时,你可多摸:阳:X张牌,本回合手牌上限+X(X为场上拥有非武将牌上技能的角色数);阴:Y张牌,本回合手牌上限+Y(Y为场上拥有技能最多的角色或之一的技能数).',
        sdxl_xiaoxiangziyinkexi: '潇湘子尹克西',
        sdxl_qiejing: '窃经',
        sdxl_qiejing_info: '一名角色获得宠物类副将之后,你可以令其使用一张装备牌,若为宝物牌,你摸2张牌,若为九阳真经,改为摸3张牌(若宠物副将为通灵白猿,则依此法使用装备牌时有50%的几率使用【九阳真经】;其失去该宠物副将后,需弃置依此法获得的装备牌).',
        sdxl_huji: '互忌',
        sdxl_huji_info: "<b>锁定技,</b>你使用的【毒杀】不能被抵消;你使用【毒杀】的额定目标数+<span class='bluetext'>2</span>.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出牌阶段限一次,你可弃置一张♥️️牌,摸<span class='firetext'>2</span>张牌.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>锁定技,</b>出牌阶段开始时,你需令红色数字和蓝色数字其中一项加1,另一项减1(若已经为0,则该项数字只能加不能减).若有数字因此变成0,你失去1点体力.",
        sdxl_huji_draw: '互忌',
        sdxl_huji_count: '互忌',
        sdxl_qiejing2: '窃经',
        sdxl_jue_yanggaizhi: '绝杨改之',
        sdxl_shangqing: '伤情',
        sdxl_shangqing_info: '<b>锁定技,</b>回合结束时,若你手牌中没有♥️️牌,你获得一张♥️️牌.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>锁定技,</b>你使用♥️️基本牌或♥️️普通锦囊牌时,若你体力值大于1,你失去体力值至1点,此牌对所有目标额外结算X次(X为你此次失去的体力值).',
        sdxl_gaizhi: '改之',
        sdxl_gaizhi_info: '其他角色/你每回合限一/两次,其对你/你对其他角色使用【杀】时,其可以将之改为任意普通锦囊牌(你依此法改的牌不占用杀的使用次数).',
        sdxl_xikuang: '西狂',
        sdxl_xikuang_info: '每回合限一次,你使用伤害类卡牌指定目标后,你可以执行下列两项中的一项并令一名目标执行另一项:<p>1.弃置所有♥️️牌(无♥️️牌则改为失去一点体力);<p>2.下个回合内至多只能使用2张牌.',
        sdxl_luwushuang: '陆无双',
        sdxl_jiahen: '家恨',
        sdxl_jiahen_info: '出牌阶段限一次,你可令一名其他角色展示你一张手牌,若为:红色/黑色,其弃置/获得之.你失去最后的手牌后,可以横置或重置至多3名角色.',
        sdxl_guchu: '孤雏',
        sdxl_guchu2: '孤雏',
        sdxl_guchu_info: '回合结束时、每当你受到一点伤害后,你摸1张牌,并将一张未标记过的手牌标记为<雏>牌.每有一张<雏>离开你的手牌区后,若此牌离开你手牌区的方式为:使用:你可以视为使用两张牌名不同的普通锦囊牌;打出:你分配一点火焰伤害;弃置:你获得3张与此<雏>同花色的牌;被其他角色获得:你获得至多3名角色各一张牌.',
        sdxl_guchu2_info: '回合结束时、每当你受到一点伤害后,你摸1张牌,并将一张未标记过的手牌标记为<雏>牌.每有一张<雏>离开你的手牌区后,若此牌离开你手牌区的方式为:使用:你可以视为使用两张牌名不同的普通锦囊牌;打出:你分配一点火焰伤害;弃置:你获得3张与此<雏>同花色的牌;被其他角色获得:你获得至多3名角色各一张牌.',
        sdxl_tuoqiao_old: '脱壳',
        sdxl_tuoqiao_old_info: '<b>限定技,</b>当你处于濒死状态时,你可以弃置区域里的所有牌,复原你的侠客牌,摸三张牌,将体力回复至1点.',
        sdxl_juao_old: '倨傲',
        sdxl_juao_old_info: '每回合限两次,你于你的摸牌阶段外获得牌时,可观看牌顶三张牌,并立即选择一张使用之,你以此法使用的牌无视次数限制且无法被响应.',
        sdxl_xianzha_old: '险诈',
        sdxl_xianzha_old_info: '当你成为【杀】或非延时锦囊的目标时,你可选择失去一点体力,使此牌对你无效,摸一张牌.',
        //"sdxl_duozhang":"夺棒",
        //"sdxl_duozhang_info":"XXX",
        sdxl_tuoqiao: '脱壳',
        sdxl_tuoqiao_info: '<b>限定技.</b>出牌阶段限一次,你可以将你的3至6张手牌标记为<脱壳>牌,这些牌不占用你的手牌上限.<p>当你受到大于1点的伤害时,或受到令你进入濒死状态的伤害时,你可以弃置一张<脱壳>牌来防止此伤害.<p><b>锁定技,</b>当你不因使用或打出而失去<脱壳>牌后,你摸2张牌.',
        sdxl_juao: '倨傲',
        sdxl_juao_info: '回合开始时,若你的手牌数大于你的体力值,你可弃置其中的至多2张牌(剩余手牌数不能小于体力值),对等量其他角色各造成1点伤害.',
        sdxl_xianzha: '险诈',
        sdxl_xianzha_info: '当你成为普通锦囊牌的唯一目标时,你可以失去1点体力,令此牌对你无效,摸1张牌.',
        sdxl_tuoqiao2: '脱壳2',
        sdxl_tuoqiao2_info: 'undefined',
        sdxl_tuoqiao3: '脱壳3',
        sdxl_tuoqiao3_info: 'undefined',
        sdxl_huodu: '霍都',
        sdxl_qiaojiang: '巧匠',
        sdxl_qiaojiang_info: '<b>锁定技,</b>你使用的【玄铁索链】可至多指定4名目标.出牌阶段,你可按如下规则升级场上一张装备牌:【圣火令】→【玄铁圣火令】;【倚天剑】→【倚天寒锋剑】;【屠龙刀】→【伏龙屠狮刀】;【打狗棒】→【降魔绿玉杖】;【桃花阵】→【五行八卦阵】;【软猬甲】→【厉刃百兽甲】.',
        sdxl_qianying: '潜营',
        sdxl_qianying_info: '每轮限一次,其他角色出牌阶段开始时,你可将所有手牌交给该角色,你观看其手牌并获得其中等同你交给其手、牌数的牌(不足则全部获得).',
        sdxl_fengmofeng: '冯默风',
        sdxl_chengying: '程英',
        sdxl_shentong: '神通',
        sdxl_shentong_info: '出牌阶段限一次,你可以弃置任意张牌,令一名其他角色选择:弃置区域内X+1张牌;或摸X张牌并翻面(X为你因此技能弃置的牌数).',
        sdxl_xiaoyin: '箫吟',
        sdxl_xiaoyin_info: '每回合限一次,当你成为其他角色使用牌的目标后,若你手牌数与其手牌数奇偶性不同,你可以摸一张牌或令其弃置一张牌.',
        sdxl_guojinghuangrong: '绝郭靖黄蓉',
        sdxl_gulei: '固垒',
        sdxl_gulei_info: '游戏开始时,你使用武穆遗书、屠龙刀.',
        sdxl_weicheng: '危城',
        sdxl_weicheng_info: '<b>锁定技.</b>摸牌阶段,你摸等同于已损失体力值数量的牌(至少为1).出牌阶段,当你使用牌后,若你的手牌数大于体力值,你需弃置一张牌.对你发动过〖缨冠〗的角色死亡后,你减一点体力上限.',
        sdxl_yingguan: '缨冠',
        sdxl_yingguan_info: '其他角色每局限一次,其可以于出牌阶段减一点体力上限,令你加一点体力上限,并回复一点体力,其获得〖浴血〗和〖援守〗.',
        sdxl_yingguan1: '缨冠',
        sdxl_yingguan1_info: '',
        sdxl_yuxue: '浴血',
        sdxl_yuxue_info: '当你受到伤害时,绝郭靖黄蓉可以代替你受到此次伤害,其摸两张牌.',
        sdxl_yuanshou: '援守',
        sdxl_yuanshou_info: '出牌阶段,你可以对绝郭靖黄蓉使用【九花玉露丸】,你摸一张牌.<b>锁定技,</b>若你没有装备防具牌,你视为装备了绝郭靖黄蓉的防具牌.',
        sdxl_hubilie: '忽必烈',
        sdxl_kaoshang: '犒赏',
        sdxl_kaoshang_info: '摸牌阶段,你可多摸X张牌并将X张手牌当<赏>置于侠客牌旁(X为你的体力值).一名角色对攻击范围有你的角色造成伤害后,你可以交给其一张<赏>;一名角色击杀攻击范围内有你的角色后,你可以令其获得你所有的<赏>.',
        sdxl_kaoshang2: '犒赏',
        sdxl_kaoshang2_info: '',
        sdxl_quanxiang: '劝降',
        sdxl_quanxiang_info: '你使用杀造成伤害后,若其装备区里有装备牌,你可以令其选择:将一张装备牌当<赏>置于你侠客牌旁并回复一点体力;或弃置一张装备牌.',
        sdxl_jue_duguqiubai: '绝独孤求败',
        jue_wuzhao: '无招',
        jue_wuzhao_info: '你获得牌前,你将这些牌置入弃牌堆.牌堆顶的4张牌对你始终可见,且你可将牌堆顶4张牌当手牌般使用或打出.',
        jue_wuzhao2: '无招',
        jue_zangjian: '葬剑',
        jue_zangjian_info: '出牌阶段限一次, 你可将牌堆顶前4张牌中的一张武器牌或秘籍牌(【武穆遗书】、【九阴真经】、【九阳真经】、【葵花宝典】)置于牌堆前5张任意位置,于摸牌阶段获得此牌的角色永久获得此装备牌的技能.',
        jue_zangjian2: '葬剑',
        sdxl_yangguoxiaolongnv: '杨过小龙女',
        sdxl_xianlv: '仙侣',
        sdxl_xianlv_info: '除摸牌阶段和出牌阶段以外, 每当你获得牌或失去手牌后,若你的手牌数为奇数,你摸1张牌.',
        sdxl_bihe: '壁合',
        sdxl_bihe_info: '回合开始时,若你没装备武器牌,你可以选择于本回合内视为装备了【君子淑女剑】或【玄铁重剑】.',
        sdxl_guofuX: '郭芙',
        sdxl_jiaozi: '娇恣',
        sdxl_jiaozi_info: '当你受到伤害后,你可以废除你的装备区或判定区,伤害来源翻面.',
        sdxl_baiju: '白驹',
        sdxl_baiju_info: '<b>锁定技.</b>你计算与其他角色的距离-2;你使用的【杀】可以额外选择一名目标;出牌阶段,你可以重铸装备牌,或者将一张装备牌置入一名其他角色装备区里.',
        sdxl_danni: '耽溺',
        sdxl_danni_info: '<b>觉醒技.</b>当你的装备区和判定区均被废除后,你减一点体力上限,获得〖宝甲〗和〖白驹〗.',
        sdxl_zhaozhijin: '赵志敬',
        sdxl_lingxie: '凌胁',
        sdxl_lingxie_info: '当前主公使用牌造成伤害后,你可以令其获得一枚<胁>标记并记录此牌名(每种牌名限记录一次).<b>锁定技,</b>每当主公受到伤害后,若其有记录造成此伤害的牌名的<胁>标记,你摸一张牌.',
        sdxl_bishan: '逼禅',
        sdxl_bishan_info: '<b>觉醒技,</b><b>锁定技,</b>准备阶段开始时,若你因〖凌胁〗摸牌数不少于7,你加一点体力上限,若你不是主公,则你与主公交换身份牌.',
        sdxl_tongbi: '通庇',
        sdxl_tongbi_info: '当你需要使用【闪】时,你可以一张手牌交给手牌数最多的一名其他角色,视为你使用了一张【闪】.',
        sdxl_qiuqianchi: lib.config.extension_金庸群侠传_jiexiantupo ? '界裘千尺' : '裘千尺',
        sdxl_guofu: '果腹',
        sdxl_guofu_info: (function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '每回合限一次,一名角色的牌因弃置进入弃牌堆后,你可以使用其中一张♥️️牌(若不能使用则改为获得一张牌)';
          return '每回合限一次,一名角色的牌因弃置进入弃牌堆后,你可以使用其中一张♥️️牌.';
        })(),
        sdxl_heji: '核击',
        sdxl_heji_info: '<b>锁定技.</b>你的♠️️【杀】无距离限制且不能被【闪】抵消.你使用【杀】目标造成伤害后,你可以观看其手牌并弃置其中一张♥️️牌.',
        sdxl_zifu: '自缚',
        sdxl_zifu_info: '一名角色的出牌阶段开始时,你可以横置你的侠客牌并失去一点体力,若如此做,视为其使用了一张【酒】.',
        sdxl_limochou: '李莫愁',
        sdxl_shixin: '蚀心',
        sdxl_shixin_info: '你每受到1点伤害后,你可以选择与伤害来源共同弃置所有手牌或装备区里的所有牌.',
        sdxl_bingpo: '冰魄',
        sdxl_bingpo_info: '你可以将黑色手牌当【冰魄银针】使用>.',
        sdxl_sanwu: '三无',
        sdxl_sanwu_info: '<b>锁定技.</b>当一名角色失去最后的手牌时,若此时场上手牌数为0的角色数为3,则你摸3张牌.',
        sdxl_spguoxiang: 'SP郭襄',
        sdxl_qinmu: '倾慕',
        sdxl_qinmu_info: '<b>限定技.</b>回合结束阶段,你选择一名男性角色,令其获得以下三个限定技:<p><b>〖芳踪〗:</b>当其武将翻至背面向上时,其与你可立即将侠客牌均正面朝上.<p><b>〖恻隐〗:</b>当其进入濒死状态,其可回复体力至1你回复一点体力.<p><b>〖惜缘〗:</b>当其失去最后的手牌,其可摸等同于体力值的牌,你摸等量的牌.<p>你<倾慕>的角色阵亡后,你减少一点体力上限,获得〖归宗〗.',
        sdxl_qinmu2: '芳踪',
        sdxl_qinmu2_info: '<b>限定技.</b>当你的侠客牌背面朝上后,你可将侠客牌翻面,郭襄将侠客牌翻至正面朝上.',
        sdxl_qinmu3: '恻隐',
        sdxl_qinmu3_info: '<b>限定技.</b>当你进入濒死状态时,你可以将体力回复至一点,郭襄回复一点体力.',
        sdxl_qinmu4: '惜缘',
        sdxl_qinmu4_info: '<b>限定技.</b>当你失去最后一张手牌时,你可摸等同当前体力值的牌,郭襄摸等量的牌.',
        sdxl_qinmu5: '倾慕',
        sdxl_qinmu5_info: '若你<倾慕>的角色阵亡时,你减少一点体力上限并获得技能〖归宗〗.',
        sdxl_renxia: '任侠',
        sdxl_renxia_info: '当你失去一张装备区的牌时,你可视为对任意一名其他角色使用一张无距离【杀】,你摸一张牌.',
        sdxl_guizong: '归宗',
        sdxl_guizong_info: '当一名其他角色使用的【杀】被响应后,你可随机使用一张装备牌.',
        sdxl_gongsunzhi: '公孙止',
        sdxl_qinggu: '情蛊',
        sdxl_qinggu_info: '一名其他角色的出牌阶段开始时,你可以展示并交给其一 张♥️️牌,若如此做,其本回合内不能使用非♥️️牌,且其每使用一张♥️️牌后,你摸2张牌.其回合结束时,若其未于此回合内使用过♥️️牌,其受到你的1点蛊毒伤害',
        //"sdxl_qinggu_info":"一名其他角色的出牌阶段开始时,你可以展示并交给其一张♥️️手牌<br><br><li>若其能使用此牌,其立即使用此牌并且其本回合不能使用非♥️️牌同时你摸一张牌.<br><br><li>若其不能使用此牌,其受到你一点🔥伤害.",
        sdxl_zhenwang: '网阵',
        sdxl_zhenwang_info: '每回合限一次,当有角色横置侠客牌时,你可以横置一名角色的侠客牌.',
        sdxl_mengge: '蒙哥',
        sdxl_fasong: '伐宋',
        sdxl_fasong_info: (function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>锁定技.</b>你的攻击范围+X(X为存活的列国势力角色数).';
          return '<b>锁定技.</b>你的攻击范围+X(X为存活的群雄势力角色数).';
        })(),
        //"sdxl_fasong_info":"<b>锁定技.</b>你的攻击范围+X(X为存活的XXX势力角色数).",
        sdxl_xiezhi: '挟制',
        sdxl_xiezhi_info: '出牌阶段限一次,你可以选择一名距离1以内的其他角色,称为<人质>,并令攻击范围有你的除人质以外的所有其他角色选择是否弃置一张牌,若选择弃牌的角色数不大于未弃牌的角色数,你对<人质>造成一点伤害.',
        sdxl_jinlunfawang: '金轮法王',
        sdxl_mizong: '密宗',
        sdxl_mizong_info: '你可以将任意张点数和为13的牌当【比武】对至多X名角色使用(X为你以此法使用的牌数).',
        sdxl_longxiang: '龙象',
        sdxl_longxiang_info: '<b>锁定技.</b>你使用的【杀】或【比武】需要使用两张【闪】或杀来响应;其他角色使用比武指定你为目标后,其每次响应此牌需连续使用两张【杀】.',
        sdxl_longxiang1: '龙象',
        sdxl_longxiang1_info: '',
        sdxl_longxiang2: '龙象',
        sdxl_longxiang2_info: '',
        sdxl_yangguo: lib.config.extension_金庸群侠传_jiexiantupo ? '界杨过' : '杨过',
        sdxl_luowang: '罗网',
        sdxl_luowang2: '罗网',
        sdxl_anhun: '黯然',
        sdxl_anhun_info: (function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '每当你受到伤害时,你可以亮出牌堆顶5张牌,你可以无距离限制地使用其中任意张伤害类卡牌.';
          return '每当你受到伤害时,你可以亮出牌堆顶5张牌,你可以无距离限制地使用其中任意张【杀】.';
        })(),
        sdxl_biefu: '别赋',
        sdxl_biefu_info: '回合结束时,你可以翻面,令一名其他角色与你各回复一点体力(若为女性角色,则其再摸1张牌).直到其下回合结束,其使用黑色普通锦囊牌或基本牌时,可额外指定一名目标.',
        sdxl_shangli: '伤离',
        sdxl_shangli_info: (function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>主公技.</b>当你的侠客牌翻面时,你可以与其他宋势力角色各摸1张牌.';
          return '<b>主公技.</b>当你的侠客牌翻面时,你可以与其他魏势力角色各摸1张牌.';
        })(),
        //"sdxl_shangli_info":"<b>主公技.</b>当你的侠客牌翻面时,你可以与其他XXX势力角色各摸1张牌.",
        sdxl_biefu2: '别赋',
        sdxl_biefu2_info: '',
        sdxl_xiaolongnv: '小龙女',
        sdxl_luowang_info: '当你受到伤害后,你可以选择至多两名角色,横置其侠客牌.每当一名角色横置侠客牌后,你可以摸1张牌.',
        sdxl_luowang2_info: '每当一名角色横置侠客牌后,你可以摸1张牌.',
        sdxl_hebi: '合璧',
        sdxl_hebi_info: '每回合限一次,当一名角色的将侠客牌翻至背面向上时,你可令另一名侠客牌正面向上的其他角色翻面.',
        sdxl_muzong: '墓宗',
        sdxl_muzong_info: (function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>主公技.</b>其他宋势力角色的回合结束时,其可以横置或重置其侠客牌.';
          return '<b>主公技.</b>其他魏势力角色的回合结束时,其可以横置或重置其侠客牌.';
        })(),
        //"sdxl_muzong_info":"<b>主公技.</b>其他XXX势力角色的回合结束时,其可以横置或重置其侠客牌.",
        sdxl_jueshi: '绝世高手',
        //襄阳郭家
        sdxl_xiangyangguojia: '襄阳北侠',
        //桃花岛
        sdxl_taohuadao: '桃花岛',
        //古墓派
        sdxl_gumu: '古墓派',
        //全真教
        sdxl_quanzhen: '全真教',
        //绝情谷
        sdxl_jueqinggu: '绝情谷',
        //陆家庄
        sdxl_lujia: '陆家庄',
        //蒙古国
        sdxl_menggu: '蒙古国',
        //丐帮
        sdxl_gaibang: '丐帮',
        //江湖侠客
        sdxl_xiake: '江湖侠客',
        sdxl_xie_limochou: '邪李莫愁',
        sdxl_daoge: '悼歌',
        sdxl_daoge_info: '<b>锁定技.</b>若场上颜色较多的牌为:红色,所有角色的回合结束时,你视为对其使用一张【情花】;黑色,所有角色使用【闪】时,你有50%的几率视为对其使用一张【冰魄银针】.',
        sdxl_duzhuan: '毒传',
        sdxl_duzhuan_info: '你成为毒药牌或暗器牌的目标后,你可以摸三张牌;出牌阶段限一次,你可以弃置任意张毒药牌或暗器牌,摸三倍的牌.',
        sdxl_yuhai: '欲海',
        sdxl_yuhai_info: '每当你受到伤害后,你可以选择一名未选择过的角色,其红色非装备手牌本局始终视为【情花】.',
        sdxl_duzhuan2: '毒传',
        sdxl_duzhuan2_info: '你成为毒药牌或暗器牌的目标后,你可以摸三张牌;出牌阶段限一次,你可以弃置任意张毒药牌或暗器牌,摸三倍的牌.',
        sdxl_jue_wangchongyang: '绝王重阳',
        sdxl_candou: '参斗',
        sdxl_candou_info: '你出场时,你将点数A、3、5、7、9、J、K随机排列为一个数列,称为<北斗>.当你使用的或以你为目标的与<北斗>点数相同的牌结算完后,若<北斗>中的该点数未点亮,点亮之.你每点亮一颗<北斗>, 获得一枚对应的<七星>标记(你每移除个<北斗>对应的<七星>标记,熄灭该<北斗>).',
        sdxl_xingluo: '星罗',
        sdxl_xingluo_info: '每当你受到或造成伤害后,你可以对换两颗<北斗>的位置.摸牌阶段摸牌时,你可以观看牌堆顶前2X张牌,从中选择要摸的牌(X为北斗归位的数量).',
        sdxl_ziwei: '紫微',
        sdxl_ziwei_info: '<b>锁定技,</b>当<北斗>全部点亮时,你获得七张7点的牌.',
        sdxl_xingluo2: '星罗',
        sdxl_xingluo2_info: '每当你受到或造成伤害后,你可以对换两颗<北斗>的位置.摸牌阶段摸牌时,你可以观看牌堆顶前2X张牌,从中选择要摸的牌(X为北斗归位的数量).',
        sdxl_tiangang2: '天罡',
        sdxl_tiangang2_info: '<b>觉醒技.</b>当全部北斗归位时,你失去〖星罗〗,将摸牌阶段摸牌基数和体力上限均改为7.',
        sdxl_tiangang: '天罡',
        sdxl_tiangang_info: '<b>觉醒技.</b>当全部北斗归位时,你失去〖星罗〗,将摸牌阶段摸牌基数和体力上限均改为7.',
        sdxl_zhenzhibing: '甄志丙',
        sdxl_qieyu: '窃玉',
        sdxl_qieyu_info: '出牌阶段限一次,你可以获得一名处于负面状态的角色区域里一张牌(若为女性,改为获得两张牌).',
        sdxl_dajie: '大节',
        sdxl_dajie_info: '你使用或打出【闪】、【杀】抵消或响应伤害类卡牌后,你可将响应牌交给一名其他角色,直到来源牌结算完毕,凡是使用或打出你以此法交出的牌的角色可以将此牌交给另一名角色(不能交给获得过此牌的角色).',
        sdxl_dajie2: '大节',
        sdxl_dajie2_info: '你使用或打出【闪】、【杀】抵消或响应伤害类卡牌后,你可将响应牌交给一名其他角色,直到来源牌结算完毕,凡是使用或打出你以此法交出的牌的角色可以将此牌交给另一名角色(不能交给获得过此牌的角色).',
        sdxl_duwushendiao: '督武',
        sdxl_duwushendiao_info: '其他角色的回合结束时,若其未于此回合内使用过杀,你可以令其摸一张牌并展示之,若为杀,其可以使用之.',
        sdxl_shouzhong: '守冢',
        sdxl_shouzhong_info: '出牌阶段限一次,你可以观看牌堆顶的前5张牌,任意分配其中的装备牌.',
        sdxl_shendiao: '神雕',
        sdxl_zhangqing: '葬情',
        sdxl_zhangqing_info: '<b>锁定技.</b>你使用♥️️牌后,或你成为其他角色使用♥️️牌的目标时,你失去1点体力,你摸4张牌并弃置2张手牌.',
        sdxl_liufang: '流放',
        sdxl_liufang_info: '<b>觉醒技.</b>当你因〖葬情〗摸第16张牌后,你减一点体力上限,回复一点体力,将〖葬情〗改为非锁定技,获得〖销魂〗,将一名其他角色翻面,召唤神雕成为你的副将(若已为双将则获得其技能).',
        sdxl_xiaohun: '销魂',
        sdxl_xiaohun_info: '你使用【杀】指定目标时,可令目标选择一项:其弃置一张♥️️牌;令你随机获得一张♥️️牌.',
        sdxl_spyangguo: 'sp杨过',
        sdxl_baiban: '白板武将',
        sdxl_luzhanyuan: '陆展元',
        sdxl_wenqing: '问情',
        sdxl_wenqing_info: '一名女性角色一次性失去至少两张牌后,你可摸一张牌;你一次性失去至少两张牌后,你可令一名女性角色摸一张牌.',
        sdxl_huaijuan: '怀绢',
        sdxl_huaijuan_number: '怀绢',
        sdxl_huaijuan_suit: '怀绢',
        sdxl_huaijuan_info: '<b>限定技,</b>出牌阶段,你弃置一张手牌并选择两名角色,你令其中一名角色记录此牌花色,另一名角色记录此牌点数.记录此牌花色的角色使用此花色的非装备牌时或成为其他角色使用此花色牌的目标时,其摸两张牌;记录此牌点数的角色使用此点数的非装备牌时或成为其他角色使用此点数牌的目标时,回复两点体力.',
        sdxl_daerba: '达尔巴',
        sdxl_qitun: '气吞',
        sdxl_qitun_info: '<b>锁定技.</b>你使用的【杀】或【比武】对目标需额外结算一次.',
        sdxl_kuangchu: '狂杵',
        sdxl_kuangchu_info: '出牌阶段限一次,你可将一张装备牌当【比武】使用,若此牌点数为K,你可以额外指定一名目标.',
        sdxl_wudunruwuxiuwen: '武敦儒武修文',
        sdxl_xiqiang: '阋墙',
        sdxl_xiqiang_info: '出牌阶段限一次,你可以与一名装备区里有的装备牌的角色拼点,若你赢且其不是主公或一号位,则你可以与其交换坐次,若你未赢,你弃置所有的牌.你只能对同一名角色发动一次〖阋墙〗.<p>身份局专属角色.',
        sdxl_shubian: '戍边',
        sdxl_shubian_info: '出牌阶段限一次,你可以在满足以下条件的角色中选择任意名角色,你令你选择的这些角色使用一张装备牌并摸一张牌:存活角色中坐次号为最小或最大的角色;相邻坐次均已死亡的角色.',
        sdxl_gongsunlve: '公孙绿萼',
        sdxl_xiandan: '献丹',
        sdxl_xiandan_info: '每当你受到一点伤害后,或你的侠客牌处于横置状态后,你可以令一名角色获得3张♥️️牌.',
        sdxl_kunqing: '困情',
        sdxl_kunqing_info: '当你失去手牌区或装备区里最后的♥️️牌后,若你此时的体力值大于一,你受到一点无来源的蛊毒伤害.',
        sdxl_juezhoubotong: '绝周伯通',
        sdxl_zhuxi: '逐戏',
        sdxl_zhuxi_info: '出牌阶段,你可以弃置任意张延时锦囊牌,获得2倍数量的普通锦囊牌.当你使用【金刚护体】后、其他角色对以你为目标的普通锦囊牌使用金刚护体后、其他角色对你使用的普通锦囊牌使用金刚护体后,你可以获得两张普通锦囊牌.',
        sdxl_zhuxi2: '逐戏',
        sdxl_zhuxi2_info: '当你使用【金刚护体】后、其他角色对以你为目标的普通锦囊牌使用金刚护体后、其他角色对你使用的普通锦囊牌使用金刚护体后,你可以获得两张普通锦囊牌.',
        sdxl_kongming: '空明',
        sdxl_kongming_info: '<b>锁定技,</b>你使用【杀】指定目标后,目标只能使用点数比此杀小的【闪】来抵消之.',
        sdxl_hubo: '互搏',
        sdxl_hubo_info: '在以下牌组中,每当你不因此技能使用其中一张牌后,你可以视为使用了另一张牌.<br>【妙手空空】:【见招拆招】<br>【鞑虏入侵】:【漫天花雨】<br>【歃血为盟】:【开仓放粮】<br>【无极而生】:【无极而生】<br>【玄铁索链】:【硝磷火弹】<br>【借剑杀人】:【比武】<br>【九花玉露丸】:【酒】',
        sdxl_sp_jinlunfawang: 'SP金轮法王',
        sdxl_banruo: '般若',
        sdxl_banruo_info: '<b>锁定技,</b>其他角色抵消或响应你使用的实体【杀】或【比武】需使用X张【闪】或打出X张【杀】(X为游戏轮数.若X大于你的体力上限,则造成的伤害+1).',
        sdxl_feilun_new: '飞轮',
        sdxl_feilun_new_info: '出牌阶段限一次,你可以将一张本局内未以此法使用过的点数的牌当【比武】使用.',
        sdxl_xie_gongsunzhi: '邪公孙止',
        sdxl_fenqing: '焚情',
        sdxl_fenqing_info: '当你受到或造成伤害后,可令游戏环境中的【情花】加倍(若游戏环境无【情花】则先洗入一张再加倍,每局限发动三次).',
        sdxl_boqing: '薄情',
        sdxl_boqing_info: '<b>锁定技,</b>♥️️牌不占你的手牌上限.其他角色回合结束时,你可获得其本回合内进入弃牌堆的♥️️牌.若这些牌描述中含有:<回复>,你回复一点体力;<伤害>,你受到1点无来源的伤害.',
        sdxl_wuqing: '无情',
        sdxl_wuqing_info: '<b>觉醒技.</b>准备阶段,若你区域内的♥️️牌比其他花色的总数更多,你失去一点体力上限,回复一点体力,获得【解情】.',
        sdxl_jieqing: '解情',
        sdxl_jieqing_info: '你可以将♠️️牌当【绝情丹】使用、将♣️️牌当【断肠草】使用.',
        tlbb_wcy_tianshu1: '天枢A',
        tlbb_wcy_tianshu1_info: '一名角色的摸牌阶段结束时,你可以移除此标记,令其有60%的几率额外执行一个摸牌阶段.',
        tlbb_wcy_tianxuan3: '天璇3',
        tlbb_wcy_tianxuan3_info: '其他角色受到伤害后,你可以移除此标记,令其永久免疫一种属性伤害.',
        tlbb_wcy_tianji5: '天玑5',
        tlbb_wcy_tianji5_info: '一名角色的判定阶段开始时,你可以移除此标记,令其跳过此阶段.',
        tlbb_wcy_tianquan7: '天权7',
        tlbb_wcy_tianquan7_info: '出牌阶段,你可以移除此标记,令一名角色使用一张【天罡北斗阵】.',
        tlbb_wcy_yuheng9: '玉衡9',
        tlbb_wcy_yuheng9_info: '一名角色的弃牌阶段开始,你可以移除此标记,令其跳过此阶段.',
        tlbb_wcy_kaiyang11: '开阳J',
        tlbb_wcy_kaiyang11_info: '一名角色在回合内使用【杀】后,你可以移除此标记,令此杀不计入次数.',
        tlbb_wcy_yaoguang13: '瑶光K',
        tlbb_wcy_yaoguang13_info: '一名角色的结束阶段,你可以移除此标记,令其获得三张奇数点数的牌.',
        sdxl_nimoxing: '尼摩星',
        sdxl_zhengxun: '争勋',
        sdxl_zhengxun_info: '每回合限一次,当一名手牌数大于你的其他角色造成伤害后,你可令其选择一项: 1.令你将手牌摸至与其相等;2.令你成为其本局造成伤害的来源(若其选择此项,你不能再对其发动本技能).',
        sdxl_duanzu: '断足',
        sdxl_duanzu_info: '<b>限定技.</b>当你受到蛊毒伤害后、成为【冰魄银针】的目标后或进入濒死状态时,你可废除坐骑栏并永久横置,失去〖争勋〗(但保留你成为选择过第2项的角色造成伤害的来源的效果).',
        sdxl_kuxing: '苦行',
        sdxl_kuxing_info: '每回合限一次,你造成或受到伤害后,你摸X张牌;<b>锁定技,</b>你的手牌上限加X(X为你的负面状态种数).',
        sdxl_zhengxun2: '争勋②',
        sdxl_zhengxun2_info: '',
        sdxl_maguangzuo: '马光佐',
        sdxl_jueli: '角力',
        sdxl_jueli_info: '当你使用【杀】指定目标时,若你与目标均有手牌,你可以与其同时选择弃置至多X张手牌(X为手牌较少的角色手牌数).以此法弃置牌点数之和更大的角色选择此【杀】不可响应或无效;以此法弃置牌张数更多的角色选择此【杀】伤害+1或-1.',
        sdxl_manba: '蛮霸',
        sdxl_manba_info: '<b>锁定技.</b>你的字母点数牌点数均视为K.',
        sdxl_zhuangzhi: '戆直',
        sdxl_zhuangzhi_info: '回合结束时,你摸X张牌(X为你本回合使用过但未造成伤害的伤害牌数,若本回合未使用过伤害牌则X为2).',
      },
      dynamicTranslate: {
        sdxl_huji(player) {
          if (!player.storage.sdxl_huji) player.storage.sdxl_huji = [2, 2];
          var strinfo = ["你使用的【毒杀】不能被抵消;你使用【毒杀】的额定目标数+<span class='bluetext'>", player.storage.sdxl_huji[0], '</span>.', "出牌阶段限一次,你可弃置一张♥️️牌, 摸<span class='firetext'>", player.storage.sdxl_huji[1], '</span>张牌.', '锁定技,出牌阶段开始时,你需令红色数字和蓝色数字其中一项加1,另一项减1 (若已经为0,则该项数字只能加不能减).若有数字因此变成0,你失去一点体力..'];
          return strinfo.join('');
        },
      },
    };
    for (var i in sdxl.character) {
      sdxl.character[i][4].push('jy_die_audio');
      //sdxl.character[i][4].push(`die:ext:金庸群侠传/peiyin/${i}.mp3`);
      sdxl.character[i][4].push(`die:ext:金庸群侠传/peiyin:true`);
      sdxl.character[i][4].push('ext:金庸群侠传/character/yuanban/' + i + '.jpg');
    }
    return sdxl;
  });
});
