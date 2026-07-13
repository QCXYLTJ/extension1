'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
  game.import('character', function () {
    lib.config.all.characters.add('xajh');
    lib.config.characters.add('xajh');
    lib.translate.xajh_character_config = '<img style=width:100px  src=extension/金庸群侠传/image/title/jy_title_xajh.jpg>';
    var Group = function (str1, str2) {
      if (!str2) return str1;
      return lib.config.extension_金庸群侠传_changeGroup ? str2 : str1;
    };
    var tupo = function (str1, str2) {
      return lib.config.extension_金庸群侠传_jiexiantupo ? str2 : str1;
    };
    var xajh = {
      name: 'xajh',
      connect: true,
      characterFilter: {},
      characterSort: {
        xajh: {
          //绝世高手
          xajh_jueshi: ['xajh_wumingtaijian'],
          //华山派
          xajh_huashan: ['xajh_xieyuebuqun', 'xajh_linghuchongrenyinyin', 'xajh_fengqingyang', 'xajh_linghuchong', 'xajh_yuebuqun', 'xajh_yuelingsan', 'xajh_linpingzhi', 'xajh_liangfa', 'xajh_ludayou', 'xajh_laodenuo', 'xajh_ningzhongze'],
          //日月神教
          xajh_riyue: ['xajh_tongbaixiong', 'xajh_lvzhuwong', 'xajh_xie_renwoxing', 'xajh_xie_dongfangbubai', 'xajh_xiangwentian', 'xajh_shangguanyun', 'xajh_zhuqianqiu', 'xajh_yanglianting', 'xajh_jiangnansiyou', 'xajh_qufeiyan', 'xajh_dongfangbubai', 'xajh_dongfangbubaiyanglianting', 'xajh_spdongfangbubai', 'xajh_renwoxing', 'xajh_renyingying'],
          //嵩山派
          xajh_songshan: ['xajh_xie_zuolengchan', 'xajh_yuehou', 'xajh_zuolengchan', 'xajh_feibin'],
          //恒山派
          xajh_beiyuehengshan: ['xajh_yilin', 'xajh_dingxianshitai'],
          //衡山派
          xajh_hengshan: ['xajh_moda', 'xajh_liuzhengfengquyang'],
          //泰山派
          xajh_taishan: ['xajh_tianmendaozhang'],
          //青城派
          xajh_qingcheng: ['xajh_yurenyan', 'xajh_yucanghai'],
          //福威镖局
          xajh_fuweibiaoju: ['xajh_linzhennan'],
          //五毒教
          xajh_wudujiao: ['xajh_lanfenghuang'],
          //江湖侠客
          xajh_xiake: ['xajh_xie_taoguliuxian', 'xajh_taoguliuxian', 'xajh_tianboguang', 'xajh_sp_tianboguang', 'xajh_pingyizhi']
        }
      },
      character: {
        //笑傲江湖角色信息
        xajh_xie_taoguliuxian: ['male', Group('jin', 'jy_xie'), 6, ['xajh_taoxian', 'xajh_jingguai', 'xajh_huabing'], ['bangpai:jy_youxia', 'InitFilter:noZhuHp'], { drawer: '画师:陈彦廷', skinLevel: 1 }],
        xajh_tongbaixiong: ['male', Group('wu', 'jy_ming'), 4, ['xajh_duyi', 'xajh_duanen'], ['bangpai:jy_riyue'], { drawer: '画师:佚名', skinLevel: 1 }],
        xajh_yurenyan: ['male', Group('wu', 'jy_ming'), 4, ['xajh_feili', 'xajh_aoshi'], ['bangpai:jy_qingcheng'], { drawer: '画师:佚名', skinLevel: 2 }],
        xajh_xie_zuolengchan: ['male', Group('jin', 'jy_xie'), 4, ['xajh_yingong', 'xajh_hanmou', 'xajh_bingyue', 'xajh_jianbing'], ['bangpai:jy_songshan'], { drawer: '画师:knty1438151', skinLevel: 2 }],
        xajh_xieyuebuqun: ['male', Group('jin', 'jy_xie'), 2, ['xajh_weishan', 'xajh_koumi', 'xajh_fujian'], ['bangpai:jy_huashan']],
        xajh_lvzhuwong: ['male', Group('wei', 'jy_ming'), 4, ['xajh_jianpu', 'xajh_yuye', 'xajh_zhuyun'], ['bangpai:jy_riyue'], { drawer: '画师:佚名', skinLevel: 1, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=744806103&bvid=BV17r4y1d7qS&cid=1234006097&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        xajh_xie_renwoxing: ['male', Group('jin', 'jy_xie'), 9, ['xajh_shaqi', 'xajh_xixing_xierenwoxing', 'xajh_mowei'], ['bangpai:jy_riyue'], { drawer: '画师:baimu', skinLevel: 4 }],
        xajh_xie_dongfangbubai: ['male', Group('wei', 'jy_xie'), 4, ['xajh_zhenfeng_new', 'xajh_bigong_new', 'xajh_duanxiu_new'], ['bangpai:jy_riyue'], { drawer: '画师:yukivscandy', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=317248401&bvid=BV12P411W7r5&cid=1232375853&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        xajh_xiangwentian: ['male', Group('wei', 'jy_ming'), 4, ['xajh_gujun', 'xajh_lianmei', 'xajh_yingjiu'], ['bangpai:jy_riyue'], { drawer: '画师:浅水湾', skinLevel: 2 }],
        xajh_yuehou: ['male', Group('wei', 'jy_ming'), 3, ['xajh_yinyang', 'xajh_shuangzhang'], ['bangpai:jy_songshan'], { drawer: '画师:佚名', skinLevel: 2 }],
        xajh_linzhennan: ['male', Group('wei', 'jy_ming'), 3, ['xajh_qibiao', 'xajh_huaibi'], ['bangpai:jy_wangzu'], { drawer: '画师:佚名', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=404711789&bvid=BV1SV41137dQ&cid=1230604261&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        xajh_qufeiyan: ['female', Group('wei', 'jy_ming'), 3, ['xajh_shuoyan', 'xajh_yanmie'], ['bangpai:jy_riyue'], { drawer: '画师:佚名', skinLevel: 3 }],
        xajh_dingxianshitai: ['female', Group('wei', 'jy_ming'), 3, ['xajh_liedan', 'xajh_mengshou', 'xajh_shouwei'], ['bangpai:jy_beiyuehengshan'], { drawer: '画师:新笑傲江湖', skinLevel: 2 }],
        xajh_jiangnansiyou: ['male', Group('wu', 'jy_ming'), 4, ['xajh_zhenniang', 'xajh_duiyi', 'xajh_dianjing', 'xajh_huihao'], ['bangpai:jy_riyue'], { drawer: '画师:我心中的笑傲江湖', skinLevel: 4 }],
        //jy_riyue【日月神教】
        xajh_sp_tianboguang: ['male', Group('wu', 'jy_ming'), 4, ['xajh_kuaidao', 'xajh_luanhong', 'yttl_zhuiyun'], ['bangpai:jy_youxia:jy_beiyuehengshan'], { drawer: '画师:佚名', skinLevel: 4 }],
        xajh_liangfa: ['male', Group('wei', 'jy_ming'), 4, [lib.config.extension_金庸群侠传_jiexiantupo ? 'xajh_yingjie2' : 'xajh_yingjie', 'xajh_sijie'], ['bangpai:jy_huashan'], { drawer: '画师:我是老王吖', skinLevel: 3 }], //zcool.com.cn/u/15765994
        //jy_huashan【华山派】
        xajh_wumingtaijian: ['male', Group('shen', 'jy_jue'), 3, ['xajh_huanhai', 'xajh_xiedian'], ['bangpai:jy_youxia'], { drawer: '画师:无名太监', skinLevel: 2 }],
        xajh_fengqingyang: ['male', Group('wu', 'jy_ming'), 4, ['xajh_shoujian', 'xajh_jianzong'], ['bangpai:jy_huashan'], { drawer: '画师:战江湖', skinLevel: 2 }],
        xajh_ningzhongze: ['female', Group('wu', 'jy_ming'), 4, ['xajh_qizong', 'xajh_lanxin'], ['bangpai:jy_huashan'], { drawer: '画师:九阴真经', skinLevel: 3 }],
        xajh_feibin: ['male', Group('wei', 'jy_ming'), 4, ['xajh_taozui', 'xajh_shajue'], ['bangpai:jy_songshan'], { drawer: '画师:佚名', skinLevel: 2 }],
        xajh_tianmendaozhang: ['male', Group('wei', 'jy_ming'), 4, ['xajh_xueyong', 'xajh_gangjue'], ['bangpai:jy_taishan'], { drawer: '画师:三剑豪2', skinLevel: 4 }],
        //jy_taishan【泰山派】
        xajh_linghuchongrenyinyin: ['male', Group('wei', 'jy_ming'), 3, ['xajh_jiufu', 'xajh_qinxin'], ['bangpai:jy_huashan:jy_riyue:jy_beiyuehengshan'], { drawer: '画师:黑色禁药', skinLevel: 4 }],
        xajh_dongfangbubai: ['double', Group('wei', 'jy_ming'), 3, ['xajh_weizhong', 'xajh_daoxi'], ['bangpai:jy_riyue'], { drawer: '画师:佚名', skinLevel: 3 }],
        xajh_ludayou: ['male', Group('shu', 'jy_ming'), 3, ['xajh_digong', 'xajh_nianjue'], ['bangpai:jy_huashan'], { drawer: '画师:新笑傲江湖', skinLevel: 3 }],
        xajh_renwoxing: ['male', Group('shu', 'jy_ming'), 4, ['xajh_biguan', 'xajh_xixing', lib.config.extension_金庸群侠传_jiexiantupo ? 'xajh_chushan2' : 'xajh_chushan', 'xajh_quanbing'], ['zhu', 'bangpai:jy_riyue'], { drawer: '画师:Rango87', skinLevel: 3 }],
        xajh_yanglianting: ['male', Group('wei', 'jy_ming'), 3, ['xajh_shanquan', 'xajh_shichong'], ['bangpai:jy_riyue'], { drawer: '画师:佚名', skinLevel: 1 }],
        xajh_yuelingsan: ['female', Group('shu', 'jy_ming'), 3, ['xajh_jianwu', 'xajh_huizhi', 'xajh_fanghun'], ['bangpai:jy_huashan'], { drawer: '画师:新笑傲江湖', skinLevel: 3 }],
        xajh_yuebuqun: ['male', Group('shu', 'jy_ming'), 3, ['xajh_jianxie', 'xajh_qiaowei', 'xajh_yuli'], ['zhu', 'bangpai:jy_huashan'], { drawer: '画师:knty1438151', skinLevel: 2, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=509296579&bvid=BV1Uu411X7HQ&cid=516191936&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=50340313&bvid=BV1t441187aM&cid=88130380&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        xajh_linghuchong: [
        'male',
        Group('shu', 'jy_ming'),
        4,
        ['xajh_jianhao', 'xajh_zuixia', 'xajh_wangyou'],
        ['zhu', 'bangpai:jy_huashan:jy_beiyuehengshan'],
        {
          drawer: '画师:战江湖',
          skinLevel: 2,
          videos: ['<iframe src="http://player.bilibili.com/player.html?aid=957321112&bvid=BV1Pp4y137Rf&cid=1235021191&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'],
          spineSkins: {
            jianhao: {
              name: '剑豪醉侠',
              file: 'extension/金庸换肤/spine/令狐冲/剑豪醉侠/jianhaozhuixia.json',
              x: [0, 0.5],
              y: [0, 0.5],
              scale: 0,
              width: 700,
              height: 933,
              animation: 'daiji',
              background: 'extension/金庸换肤/skin/2.jpg',
              audios: {
                gongji: '../extension/金庸换肤/spine/令狐冲/剑豪醉侠/jianhaozhuixia.mp3'
              }
            }
          }
        }],

        //jy_beiyuehengshan【恒山派,因与衡山同音,添加beiyue前缀】
        xajh_moda: ['male', Group('wei', 'jy_ming'), 4, ['xajh_zhongsu', 'xajh_qinjian'], ['bangpai:jy_hengshan'], { drawer: '画师:三剑豪2', skinLevel: 4 }],
        xajh_zuolengchan: ['male', Group('wei', 'jy_ming'), 4, ['xajh_linhan', 'xajh_weijian', 'xajh_bingpai'], ['zhu', 'bangpai:jy_songshan'], { drawer: '画师:笑傲江湖OL', skinLevel: 2 }],
        //测试工具人
        //"xajh_zuolengchan":["male",Group("wei","jy_ming"),4,["xajh_linhan","xajh_weijian","xajh_bingpai","xajh_zhuceshi"],['zhu']],
        //测试工具人
        xajh_laodenuo: ['male', Group('shu', 'jy_ming'), 3, ['xajh_qianxing', 'xajh_anxi'], ['bangpai:jy_huashan:jy_songshan'], { drawer: '画师:佚名', skinLevel: 1 }],
        xajh_linpingzhi: ['male', Group('wei', 'jy_ming'), 4, ['xajh_renru', 'xajh_qushi'], ['bangpai:jy_huashan'], { drawer: '画师:佚名', skinLevel: 4, videos: ['<iframe src="http:iframe src="http://player.bilibili.com/player.html?aid=274684284&bvid=BV1sF411Z7BB&cid=&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        xajh_zhuqianqiu: ['male', Group('wei', 'jy_ming'), 3, ['xajh_lunbei', 'xajh_yaojiu'], ['bangpai:jy_riyue'], { drawer: '画师:火熊网佚名画师', skinLevel: 2 }],
        xajh_tianboguang: ['male', Group('wei', 'jy_ming'), 4, ['xajh_xunfang', 'xajh_aotu'], ['bangpai:jy_youxia:jy_beiyuehengshan'], { drawer: '画师:zeroyuen', skinLevel: 4 }],
        xajh_renyingying: ['female', Group('shu', 'jy_ming'), 3, ['xajh_qugang', 'xajh_heming'], ['bangpai:jy_riyue'], { drawer: '画师:羲葵', skinLevel: 4 }],
        xajh_pingyizhi: ['male', Group('wei', 'jy_ming'), 3, ['xajh_tiandao', 'xajh_qihuang'], ['bangpai:jy_youxia'], { drawer: '画师:虞小白', skinLevel: 4 }],
        xajh_spdongfangbubai: ['male', Group('wei', 'jy_ming'), 4, ['xajh_feizhen', 'xajh_shanbian'], ['bangpai:jy_riyue'], { drawer: '画师:Michael.劉', skinLevel: 4 }],
        xajh_yilin: ['female', Group('shu', 'jy_ming'), 3, ['xajh_jiecheng', 'xajh_fanxin', 'xajh_qiyuan'], ['bangpai:jy_beiyuehengshan'], { drawer: '画师:跳梁小丑', skinLevel: 2 }],
        xajh_yucanghai: ['male', Group('wei', 'jy_ming'), 3, ['xajh_bianlian', 'xajh_miemen'], ['bangpai:jy_qingcheng'], { drawer: '画师:rex00k', skinLevel: 4 }],
        //jy_qingcheng【青城派】
        xajh_dongfangbubaiyanglianting: ['male', Group('wei', 'jy_ming'), 3, ['xajh_zongqing', 'xajh_suoyu'], ['bangpai:jy_riyue'], { drawer: '画师:陈慕容', skinLevel: 4 }],
        xajh_lanfenghuang: ['female', Group('wei', 'jy_ming'), 3, ['xajh_liangu', 'xajh_zhuanxue'], ['bangpai:jy_wudu'], { drawer: '画师:阿墩_Arde', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=659647776&bvid=BV1wh4y1Q7wU&cid=1232364581&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=722637850&bvid=BV1oD4y1c7B3&cid=469858869&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
        //jy_wudu【五毒教】
        xajh_taoguliuxian: ['male', Group('wei', 'jy_ming'), 6, ['xajh_shejian', 'xajh_zibian', 'xajh_guici', 'xajh_shenlv'], ['bangpai:jy_youxia'], { drawer: '画师:tjmy07zh', skinLevel: 4 }],
        xajh_liuzhengfengquyang: ['male', Group('wei', 'jy_ming'), 4, ['xajh_diezou', 'xajh_juechang'], ['bangpai:jy_riyue:jy_hengshan'], { drawer: '画师:笑傲江湖OL', skinLevel: 4 }],
        //jy_hengshan【衡山派】
        xajh_shangguanyun: ['male', Group('wei', 'jy_ming'), 4, ['xajh_shunshi', 'xajh_fengying'], ['bangpai:jy_riyue'], { drawer: '画师:ZXR', skinLevel: 2 }]
      },
      characterIntro: {

        //笑傲江湖角色资料
      }, characterTitle: {
        xajh_xie_taoguliuxian: '诡辩如簧',
        xajh_tongbaixiong: '义绝恩断',
        xajh_yurenyan: '欺男霸女',
        xajh_xie_zuolengchan: '吞并五岳',
        xajh_xieyuebuqun: '口蜜腹剑',
        xajh_linzhennan: '镖行天下',
        xajh_yuehou: '大阴阳手',
        xajh_dingxianshitai: '烈胆巾帼',
        xajh_jiangnansiyou: '玩物丧志',
        xajh_sp_tianboguang: '护花危情',
        xajh_liangfa: '年少英杰',
        xajh_wumingtaijian: '天乾地坤',
        xajh_fengqingyang: '剑术神通',
        xajh_ningzhongze: '女中君子',
        xajh_feibin: '大嵩阳手',
        xajh_tianmendaozhang: '血气之勇',
        xajh_linghuchongrenyinyin: '剑胆琴心',
        xajh_dongfangbubai: '日月教主',
        xajh_ludayou: '六猴儿',
        xajh_renwoxing: '魔王',
        xajh_yanglianting: '红粉颜蓝',
        xajh_yuelingsan: '芳心无悔',
        xajh_yuebuqun: '岳掌门',
        xajh_linghuchong: '醉仙狂剑',
        xajh_moda: '潇湘夜雨',
        xajh_zuolengchan: '五岳盟主',
        xajh_laodenuo: '趁人之危',
        xajh_linpingzhi: '小林子',
        xajh_zhuqianqiu: '觥筹交措',
        xajh_tianboguang: '万里独行',
        xajh_renyingying: '曲高和寡',
        xajh_pingyizhi: '杀人名医',
        xajh_spdongfangbubai: '深闺刺绣',
        xajh_yilin: '梵心佛语',
        xajh_yucanghai: '余观主',
        xajh_dongfangbubaiyanglianting: '末日挽歌',
        xajh_lanfenghuang: '五毒教主',
        xajh_taoguliuxian: '砌辞诡辩',
        xajh_liuzhengfengquyang: '琴箫合鸣',
        xajh_shangguanyun: '趋炎附势'
      },
      perfectPair: {

        //"jyqxz_xajh_genie":['jyqxz_xajh_weizhuang'],
      }, //笑傲包衍生卡牌
      card: {
        jydiy_bixiejianpu: {
          derivation: 'xajh_xieyuebuqun',
          type: 'equip',
          subtype: 'equip5',
          skills: ['jydiy_bixiejianpu_skill'],
          fullskin: true
        }
      },
      /////////////////////////角色技能开始//////////////////////////////
      skill: {
        //邪桃谷六仙 霸天 20240709
        xajh_taoxian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'changeHp'
          },
          lastDo: true,
          forced: true,
          filter(event, player) {
            if (event.xajh_jingguai) return false;
            return event.num != 0;
          },
          init(player) {
            player.removeAdditionalSkills('xajh_taoxian');
            if (player.hp <= 6 && player.hp >= 1) {
              player.addAdditionalSkills('xajh_taoxian', [lib.skill.xajh_taoxian.derivation[player.hp - 1]]);
            }
          },
          derivation: ['xajh_yiti', 'xajh_shiyan', 'xajh_qiangbian', 'xajh_wangyu', 'xajh_duoli', 'xajh_xinkou'],
          content() {
            player.removeAdditionalSkills('xajh_taoxian');
            if (player.hp <= 6 && player.hp >= 1) {
              player.addAdditionalSkills('xajh_taoxian', [lib.skill.xajh_taoxian.derivation[player.hp - 1]]);
            }
          },
          group: 'xajh_taoxian_maxhp',
          subSkill: {
            maxhp: {
              trigger: {
                player: ['loseMaxHpBegin', 'gainMaxHpBegin']
              },
              forced: true,
              content() {
                trigger.cancel();
              }
            }
          }
        },
        xajh_jingguai: {
          firstDo: true,
          subSkill: {
            off: {
              mark: true,
              charlotte: true,
              intro: {
                content: '精怪失效>'
              }
            }
          },
          marktext: '驳',
          intro: {
            name2: '驳',
            content: '当前有#枚<驳>'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'changeHp'
          },
          forced: true,
          filter(event, player) {
            if (player.hasSkill('xajh_jingguai_off')) return false;
            const evt = event.parent;
            if (evt && (evt.name == 'xajh_jingguai' || evt.name == 'xajh_qiangbian')) return false;
            return event.num != 0;
          },
          content() {
            'step 0';
            player.throwDice();
            trigger.set('xajh_jingguai', true);
            'step 1';
            const playerHp = player.hp;
            if (playerHp != event.num) {
              const change = event.num - playerHp;
              player.changeHp(change);
              if (change < 0) {
                player.draw(-change);
              } else {
                player.addMark('xajh_jingguai', change);
              }
            }
          }
        },
        xajh_huabing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          global: 'xajh_huabing2',
          subSkill: {
            off: {
              charlotte: true
            }
          }
        },
        xajh_huabing2: {
          enable: 'phaseUse',
          audio: 'xajh_huabing',
          discard: false,
          lose: false,
          delay: false,
          line: true,
          prepare(cards, player, targets) {
          },
          prompt() {
            const player = _status.event.player;
            const list = game.filterPlayer(function (target) {
              return lib.skill['xajh_huabing2'].filterTarget(null, player, target);
            });
            let str2 = get.translation(list);
            if (list.length > 1) str2 += '中的一人';
            return `出牌阶段限一次,${str2}可以移除2枚 <驳>.
                        若如此做,你可以选择一项:${str2}下回合开始前【xajh_jingguai】失效;
                        失去因【xajh_taoxian】获得的技能(不影响${str2}再次获得该技能).`;
          },
          filter(event, player) {
            return game.hasPlayer(function (target) {
              return lib.skill['xajh_huabing2'].filterTarget(null, player, target);
            });
          },
          filterCard(card, player) {
            return false;
          },
          selectCard: -1,
          log: false,
          filterTarget(card, player, target) {
            return target != player && target.hasSkill('xajh_huabing') && !target.hasSkill('xajh_huabing_off') && target.countMark('xajh_jingguai') >= 2;
          },
          content() {
            'step 0';
            target.addTempSkill('xajh_huabing_off', 'phaseUseEnd');
            target.removeMark('xajh_jingguai', 2);
            target.removeAdditionalSkills('xajh_taoxian');
            'step 1';
            let str2 = get.translation(target);
            player.
            chooseControl().
            set('choiceList', [`${str2}【精怪】失效`, `${str2}失去因【桃仙】获得的技能`]).
            set('ai', function () {
              return Math.random() > 0.5 ? 1 : 0;
            });
            'step 2';
            if (result.index == 1) {
              target.removeAdditionalSkills('xajh_taoxian');
            } else {
              target.addTempSkill('xajh_jingguai_off', { player: 'phaseBegin' });
            }
          },
          ai: {
            expose: 0.3,
            order: 10,
            result: {
              target: 1
            }
          }
        },
        xajh_yiti: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseJieshuBegin'
          },
          check(event, player) {
            const att1 = get.attitude(player, event.player);
            const att2 = get.attitude(player, event.player.next);
            if (!(att1 <= 0 && att2 > 0)) return false;
            let count = 0;
            const cards = event.player.getCards('e');
            const target = event.player.next;
            for (var i of cards) {
              if (target.canEquip(i, true)) {
                if (get.effect(target, i, target, target) > 0) {
                  count += 1;
                } else {
                  count -= 1;
                }
              }
            }
            return count > 0;
          },
          logTarget: 'player',
          filter(event, player) {
            return (
              event.player.countCards('e', function (i) {
                return event.player.next.canEquip(i, true);
              }) > 0);

          },
          content() {
            const cards = trigger.player.getCards('e');
            const targetx = trigger.player.next;
            for (var i of cards) {
              if (targetx.canEquip(i, true)) {
                targetx.equip(i);
                trigger.player.$give(i, targetx, false);
                game.log(trigger.player, '的', i, '被移动给了', targetx);
              }
            }
          }
        },
        xajh_shiyan: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 3,
          filter(event, player) {
            return game.hasPlayer(function (target) {
              return lib.skill.xajh_shiyan.filterTarget(null, player, target);
            });
          },
          filterTarget(card, player, target) {
            return (
              target.countCards('e', function (card) {
                if (card.origin_name) {
                  return false;
                }
                const cardx = card;
                const subtype = get.subtype(cardx);
                return lib.inpile.some(function (name) {
                  return get.type({ name: name }) == 'equip' && get.subtype({ name: name }) == subtype && name != cardx.name;
                });
              }) > 0);

          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            const equips = target.getCards('e', function (card) {
              if (card.origin_name) {
                return false;
              }
              const cardx = card;
              const subtype = get.subtype(cardx);
              return lib.inpile.some(function (name) {
                return get.type({ name: name }) == 'equip' && get.subtype({ name: name }) == subtype && name != cardx.name;
              });
            });
            if (equips.length == 1) {
              event._result = { bool: true, links: equips };
            } else {
              player.
              choosePlayerCard('e', target, true).
              set('filterButton', function (button) {
                if (button.link.origin_name) {
                  return false;
                }
                const cardx = button.link;
                const subtype = get.subtype(cardx);
                return lib.inpile.some(function (name) {
                  return get.type({ name: name }) == 'equip' && get.subtype({ name: name }) == subtype && name != cardx.name;
                });
              }).
              set('ai', function (button) {
                const cardx = button.link;
                const newCard = cardx;
                const target = _status.event.target;
                const player = _status.event.player;
                const subtype = get.subtype(cardx);
                const eff = get.effect(target, cardx, target, player);
                const list = lib.inpile.
                filter(function (name) {
                  return get.type({ name: name }) == 'equip' && get.subtype({ name: name }) == subtype && name != cardx.name;
                }).
                map(function (name) {
                  newCard.name = name;
                  return get.effect(target, newCard, target, player) - eff;
                });
                return Math.max(...list);
              });
            }
            'step 1';
            event.resultEquip = result.links[0];
            const cardx = event.resultEquip;
            const newCard = cardx;
            let maxnum = get.effect(target, cardx, target, player);
            let maxname = cardx.name;
            const subtype = get.subtype(cardx);
            const list2 = lib.inpile.filter(function (name) {
              return get.type({ name: name }) == 'equip' && get.subtype({ name: name }) == subtype && name != cardx.name;
            });
            for (var i of list2) {
              newCard.name = i;
              const temp = get.effect(target, newCard, target, player);
              if (temp > maxnum) {
                maxnum = temp;
                maxname = i;
              }
            }
            const list = list2.map(function (name) {
              return [get.subtype(name), '', name];
            });
            if (list.length == 1) {
              event._result = { bool: true, links: list };
            } else {
              player.
              chooseButton(['选择要改变的牌名', [list, 'vcard']], true).
              set('ai', function (button) {
                if (button.link[2] == _status.event.airesuit) return 10;
                return 0;
              }).
              set('airesuit', maxname);
            }
            'step 2';
            const name2 = result.links[0][2];
            target.removeEquipTrigger(event.resultEquip);
            event.resultEquip.init([event.resultEquip.suit, event.resultEquip.number, name2, event.resultEquip.nature]);
            target.addEquipTrigger(event.resultEquip);
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                const att = get.sgn(get.attitude(player, target));
                return (
                  (target.countCards('e', function (card) {
                    if (card.origin_name) {
                      return false;
                    }
                    const cardx = card;
                    const subtype = get.subtype(cardx);
                    const newCard = cardx;
                    const eff = get.effect(target, cardx, target, player);
                    return lib.inpile.some(function (name) {
                      if (get.type({ name: name }) != 'equip') return false;
                      if (get.subtype({ name: name }) != subtype) return false;
                      if (name == cardx.name) return false;
                      newCard.name = name;
                      return get.effect(target, newCard, target, player) - eff > 0;
                    });
                  }) > 0 ?
                  1 :
                  0) * att);

              }
            }
          }
        },
        xajh_qiangbian: {
          group: 'xajh_qiangbian_change',
          subSkill: {
            change: {
              trigger: {
                player: 'compare',
                target: 'compare'
              },
              filter(event, player) {
                //if(event.player==player) return !event.iwhile;
                return Boolean(event.card1) && Boolean(event.card2);
                //return Boolean(event.target);
              },
              check(trigger, player) {
                //if(get.effect(player,{name:'losehp'},player)>0) return true;
                if (player == trigger.player) {
                  return trigger.num1 < trigger.num2;
                } else {
                  return trigger.num1 > trigger.num2;
                }
              },
              prompt: '是否失去一体力交换拼点牌?',
              content() {
                const num1 = trigger.num1;
                const num2 = trigger.num2;
                const card1 = trigger.card1;
                const card2 = trigger.card2;
                trigger.num1 = num2;
                trigger.num2 = num1;
                trigger.card1 = card2;
                trigger.card2 = card1;
                game.log(player, '交换了拼点牌');
                player.loseHp();
              }
            }
          },
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          usable: 1,
          filterTarget(event, player, target) {
            return player.canCompare(target);
          },
          content() {
            'step 0';
            const att = get.attitude(player, target);
            const next = player.chooseToCompare(target);
            //if(att>0&&player.hp>target.hp) next.set('small',true);
            'step 1';
            if (result.bool) {
              if (player.hp != target.hp) {
                const change = Math.min(target.maxHp, player.hp) - target.hp;
                if (change != 0) {
                  target.changeHp(change);
                }
              }
            }
          },
          ai: {
            order: 4,
            result: {
              target(player, target) {
                if (player.hp != target.hp) {
                  const change = Math.min(target.maxHp, player.hp) - target.hp;
                  if (change != 0) {
                    return change;
                  }
                }
                return 0;
              }
            }
          }
        },
        xajh_wangyu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'judge'
          },
          getSuit(event, player) {
            if (event.fixedResult && event.fixedResult.suit) return event.fixedResult.suit;
            return event.player.judging[0].suit;
          },
          cost() {
            'step 0';
            const vcards = ['spade', 'heart', 'club', 'diamond'].remove(lib.skill.xajh_wangyu.getSuit(trigger, player)).map(function (i) {
              return ['', '', 'lukai_' + i];
            });
            const dialog = [get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('xajh_wangyu') + '将其改为一种花色', [vcards, 'vcard']];
            player.
            chooseButton(dialog).
            set('ai', function (button) {
              const player = _status.event.player;
              const suit = button.link[2].slice(6);
              const judging = _status.event.judging;
              const trigger = _status.event.getTrigger();
              const res1 = trigger.judge(judging);
              const attitude = get.attitude(player, trigger.player);
              if (attitude == 0) return -1;
              const getj = function (suit) {
                return trigger.judge({
                  name: judging.name,
                  nature: get.nature(judging),
                  suit: suit,
                  number: judging.number
                });
              };
              return (getj(suit) - res1) * attitude;
            }).
            set('judging', trigger.player.judging[0]);
            'step 1';
            if (result.bool) {
              event.result = {
                bool: true,
                cost_data: result.links[0][2].slice(6)
              };
            } else {
              event.result = { bool: false };
            }
          },
          content() {
            const suit = event.cost_data;
            player.addExpose(0.25);
            player.popup(suit);
            game.log(player, '将判定结果改为了', '#y' + get.translation(suit + 2));
            if (!trigger.fixedResult) trigger.fixedResult = {};
            trigger.fixedResult.suit = suit;
            trigger.fixedResult.color = get.color({ suit: suit });
            if (suit == 'heart' || suit == 'diamond') {
              if (player.isDamaged()) player.recover();
            } else {
              player.loseHp();
            }
          },
          ai: {
            rejudge: true,
            tag: {
              rejudge: 0.4
            },
            expose: 0.5
          }
        },
        xajh_duoli: {
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCardToTarget'
          },
          check(event, player) {
            if (get.effect(event.target, event.card, event.player, player) > 0) return false;
            return get.effect(player, event.card, event.player, player) > 0;
          },
          logTarget: 'target',
          filter(event, player) {
            if (get.color(event.card) != 'red') return false;
            if (get.type(event.card) == 'equip') return false;
            if (!event.isFirstTarget) return false;
            if (!event.targets) return false;
            if (event.player == player) return false;
            if (event.target == player) return false;
            if (event.targets.includes(player)) return false;
            if (event.targets.length != 1) return false;
            return lib.filter.targetEnabled2(event.card, event.player, player);
          },
          content() {
            const evt = trigger.parent;
            evt.triggeredTargets2.remove(trigger.target);
            evt.targets.remove(trigger.target);
            evt.targets.push(player);
          }
        },
        xajh_xinkou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCardToPlayer'
          },
          filter(event, player) {
            if (get.type(event.card) != 'delay') return false;
            if (!event.targets || event.targets.length != 1) return false;
            if (!event.isFirstTarget) return false;
            const newCard = event.card;
            return lib.inpile.some(function (name) {
              if (get.type({ name: name }) != 'trick') return false;
              newCard.name = name;
              return event.player.canUse(newCard, event.target, false);
            });
          },
          cost() {
            'step 0';
            const newCard = trigger.card;
            const list2 = lib.inpile.filter(function (name) {
              if (get.type({ name: name }) != 'trick') return false;
              newCard.name = name;
              return event.player.canUse(newCard, trigger.target, false);
            });
            const list = list2.map(function (i) {
              return [get.type(i), '', i];
            });
            const dialog = [get.prompt2('xajh_xinkou', trigger.target), [list, 'vcard']];
            let maxnum = get.effect(trigger.target, trigger.card, trigger.player, player);
            let maxname = trigger.card.name;
            for (var i of list2) {
              newCard.name = i;
              const temp = get.effect(trigger.target, newCard, trigger.player, player);
              if (temp > maxnum) {
                maxnum = temp;
                maxname = i;
              }
            }
            player.
            chooseButton(dialog).
            set('ai', function (button) {
              if (button.link[2] == _status.event.airesuit) return 10;
              return 0;
            }).
            set('airesuit', maxname);
            'step 1';
            if (result.bool) {
              event.result = {
                bool: true,
                targets: [trigger.target],
                cost_data: result.links[0][2]
              };
            } else {
              event.result = { bool: false };
            }
          },
          content() {
            const cardName = event.cost_data;
            const oldCard = trigger.card;
            trigger.card.name = cardName;
            game.log(oldCard, '改为了', trigger.card);
          }
        },
        //童百熊  霸天 20240615
        xajh_duyi: {
          intro: {
            content: 'players'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCardToTargeted'
          },
          lastDo: true,
          logTarget: 'player',
          check(event, player) {
            if (get.attitude(player, event.player) > 0) return false;
            if (get.effect(event.target, event.card, event.player, player) > 0) return false;
            return true;
          },
          filter(event, player) {
            if (!event.isFirstTarget) return false;
            if (event.player == player) return false;
            if (event.target == player) return false;
            if (event.target == event.player) return false;
            if (!player.canCompare(event.player, false, false)) return false;
            if (!get.tag(event.card, 'damage')) return false;
            return event.targets && event.targets.length == 1;
          },
          content() {
            'step 0';
            player.markAuto('xajh_duyi', [trigger.target]);
            event.wined = 0;
            event.losed = 0;
            event.targetCards = [];
            'step 1';
            if (player.canCompare(trigger.player, false, false)) {
              player.chooseToCompare(trigger.player);
            } else {
              event.goto(5);
            }
            'step 2';
            if (result.bool) {
              event.wined += 1;
            } else if (!result.tie) {
              event.losed += 1;
            }
            if (result.target) event.targetCards.add(result.target);
            if (result.player && player.canCompare(trigger.player, true, false)) {
              const next1 = player.chooseToCompare(trigger.player);
              next1.fixedResult = {};
              next1.fixedResult[player.playerid] = result.player;
            } else {
              event.goto(5);
            }
            'step 3';
            if (result.bool) {
              event.wined += 1;
            } else if (!result.tie) {
              event.losed += 1;
            }
            if (result.target) event.targetCards.add(result.target);
            if (result.player && player.canCompare(trigger.player, true, false)) {
              const next2 = player.chooseToCompare(trigger.player);
              next2.fixedResult = {};
              next2.fixedResult[player.playerid] = result.player;
            } else {
              event.goto(5);
            }
            'step 4';
            if (result.bool) {
              event.wined += 1;
            } else if (!result.tie) {
              event.losed += 1;
            }
            if (result.target) event.targetCards.add(result.target);
            'step 5';
            if (event.wined >= 2) {
              trigger.parent.excluded.add(trigger.target);
              game.log(trigger.card, '对', trigger.target, '无效');
            }
            if (event.wined >= 3) {
              if (trigger.target.isDamaged()) trigger.target.recover(1);
              event.goto(7);
            }
            if (event.losed >= 2) {
              player.loseHp();
            }
            if (event.losed >= 3) {
              trigger.parent.targets.add(player);
              game.log(player, '成为', trigger.card, '额外目标');
            }
            'step 6';
            event.finish();
            'step 7';
            const togain = event.targetCards.filterInD('od');
            if (togain.length) {
              player.chooseButton(['是否选择要获得一张对方拼点的牌？', togain], 1).set('ai', function (button) {
                return get.value(button.link, _status.event.player, 'raw');
              });
            } else {
              event.finish();
            }
            'step 8';
            if (result.bool) {
              player.gain(result.links, 'gain2', 'log');
            }
          }
        },
        xajh_chujian: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return game.hasPlayer((current) => current != player && get.jy_hasbangpai(current));
          },
          filterCard(card, player) {
            return false;
          },
          selectCard: [-1, -1],
          filterTarget(card, player, target) {
            if (player == target) return false;
            return get.jy_hasbangpai(target);
          },
          content() {
            let damage = 1;
            if (player.getStorage('xajh_duyi').includes(target)) damage = 2;
            target.damage('nocard', damage);
          },
          ai: {
            damage: true,
            order: 8,
            result: {
              target(player, target) {
                let damage = 1;
                const bool = !target.hasSkillTag('filterDamage', null, { player: player });
                if (bool && player.getStorage('xajh_duyi').includes(target)) damage = 2;
                return damage * get.damageEffect(target, player, target);
              }
            },
            threaten: 1.3
          }
        },
        xajh_duanen: {
          juexingji: true,
          derivation: 'xajh_chujian',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd',
            global: 'gainSkillBangPai'
          },
          filter(event, player) {
            if (player.storage.xajh_duanen) return false;
            const list = player.getStorage('xajh_duyi');
            if (event.name == 'damage') {
              if (!event.source) return false;
              if (event.source == player) return false;
              return list.includes(event.source);
            } else {
              return list.includes(event.player);
            }
          },
          forced: true,
          content() {
            'step 0';
            player.awakenSkill(event.name);
            player.storage[event.name] = true;
            'step 1';
            if (player.hasSkill('xajh_duyi', null, null, false)) player.removeSkills('xajh_duyi');
            'step 2';
            const count = player.maxHp - player.hp;
            if (count > 0) {
              player.recover(count);
            }
            'step 3';
            player.addSkills('xajh_chujian');
          }
        },
        //余人彦 霸天 20240610
        xajh_feili: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          filter(event, player) {
            return player.getStorage('xajh_feili').some((i) => !player.hasSkill(lib.card[i].skill));
          },
          content() {
            'step 0';
            player.draw('visible');
            'step 1';
            const playerCards = player.getCards('h');
            if (result && Array.isArray(result) && get.itemtype(result) == 'cards' && !result.some((i) => !playerCards.includes(i))) {
              player.showCards(result);
              if (!result.some((i) => get.color(i, false) == 'red')) event.finish();
            } else {
              event.finish();
            }
            'step 2';
            const skills = player.getStorage('xajh_feili').filter((i) => !player.hasSkill(lib.card[i].skill));
            player.chooseVCardButton(skills, '选择要获得的技能', true, 'notype').set('ai', function (button) {
              const name = button.link[2];
              const player = _status.event.player;
              return get.skillRank(lib.card[name].skill, 'in');
            });
            'step 3';
            if (result.links?.length) {
              const cardname = result.links[0][2];
              player.addTempSkills(lib.card[cardname].skill);
            }
          },
          ai: {
            order: 15,
            result: {
              player: 1
            }
          },
          initList() {
            var list = [];
            if (_status.connectMode) list = get.charactersOL();else
            {
              var list = [];
              for (var i in lib.character) {
                if (!lib.filter.characterDisabled2(i) && !lib.filter.characterDisabled(i)) list.push(i);
              }
            }
            game.countPlayer2(function (current) {
              list.remove(current.name);
              list.remove(current.name1);
              list.remove(current.name2);
            });
            _status.characterlist = list;
          },
          init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = [];
            if (!_status.characterlist) {
              lib.skill.xajh_feili.initList();
            }
            _status.characterlist.randomSort();
            for (var i = 0; i < _status.characterlist.length; i++) {
              const name = _status.characterlist[i];
              const skills = lib.character[name][3].filter((skill) => {
                const translation = get.skillInfoTranslation(skill);
                if (!translation) return false;
                const match = translation.match(/<?女性角色/g);
                if (!match || match.every((value) => value != '女性角色')) return false;
                return true;
              });
              for (const j of skills) {
                const cardname = 'xajh_feili_card_' + j;
                lib.card[cardname] = {
                  derivation: name,
                  fullimage: true,
                  image: 'character:' + name,
                  skill: j
                };
                player.storage[skill].add(cardname);
                lib.translate[cardname] = lib.translate[j];
                lib.translate[cardname + '_info'] = lib.translate[j + '_info'];
              }
            }
          }
        },
        xajh_aoshi: {
          subSkill: {
            nouse: {
              mark: true,
              intro: { content: '本回合不能使用牌且需弃置获得的牌' },
              trigger: {
                player: 'gainAfter'
              },
              silent: true,
              forced: true,
              popup: false,
              content() {
                const dis = player.getCards('h').filter((i) => trigger.cards.includes(i));
                if (dis.length) {
                  player.discard(dis);
                }
              },
              ai: {
              },
              firstDo: true,
              charlotte: true,
              mod: {
                cardEnabled(card, player) {
                  return false;
                },
                cardUsable(card, player) {
                  return false;
                },
                cardSavable(card, player) {
                  return false;
                }
              },
              _priority: 1
            },
            gain: {
              trigger: {
                player: 'useCardEnd',
                source: 'damageSource'
              },
              forced: true,
              firstDo: true,
              init(player, skill) {
                if (!player.storage[skill]) player.storage[skill] = [];
              },
              charlotte: true,
              onremove(player, skill) {
                delete player.storage[skill];
              },
              silent: true,
              popup: false,
              content() {
                const storage = player.getStorage('xajh_aoshi_gain');
                if (trigger.name == 'useCard') {
                  const list = storage.filter((i) => i[0] == trigger);
                  storage.removeArray(list);
                  if (!storage.length) {
                    player.removeSkill('xajh_aoshi_gain');
                  }
                } else {
                  if (!trigger.card) return;
                  const bool = storage.filter((i) => i[0].card == trigger.card).some((i) => i[1] == trigger.player);
                  if (bool) {
                    if (trigger.player.countGainableCards(player, 'he')) {
                      player.gainPlayerCard('he', trigger.player, true);
                    }
                  }
                }
              },
              _priority: 1
            },
            compare: {
              trigger: {
                player: 'useCardToTargeted'
              },
              lastDo: true,
              filter(event, player) {
                if (event.card.name != 'sha') return false;
                if (event.targets.length != event.parent.triggeredTargets4.length) return false;
                if (event.targets.some((i) => !player.canCompare(i))) return false;
                return true;
              },
              logTarget: 'targets',
              check(event, player) {
                if (event.targets.some((i) => get.attitude(player, i) > 0)) return false;
                return true;
              },
              prompt2(event, player) {
                return '用一张手牌与所有目标拼点.';
              },
              content() {
                player.chooseToCompare(event.targets).callback = lib.skill.xajh_aoshi_compare.callback;
              },
              callback() {
                'step 0';
                if (event.num1 > event.num2) {
                  const usecard = event.getParent(2)._trigger;
                  const shaevt = usecard.parent;
                  const index = [1, 2, 3].randomGet();
                  if (index == 1) {
                    player.addTempSkill('xajh_aoshi_gain');
                    player.storage.xajh_aoshi_gain.push([shaevt, target]);
                    game.log(shaevt.card, '对', target, '造成伤害后', player, '获得', target, '一张牌');
                  } else if (index == 2) {
                    target.addTempSkill('xajh_aoshi_nouse');
                    game.log(target, '本回合不能使用牌且需弃置获得的牌');
                  } else if (index == 3) {
                    if (!target.isLinked()) target.link();
                    const dis = target.getCards('he').filter((card) => lib.filter.cardDiscardable(card, target, event.name));
                    if (dis.length) {
                      target.chooseToDiscard(1, 'he', true);
                    }
                  }
                } else {
                  player.loseHp();
                }
              }
            }
          },
          group: 'xajh_aoshi_compare',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCard2'
          },
          getSkillCount(player) {
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
            if (results.length) return results.length;
            return 1;
          },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && player.canUse(event.card, current);
            });
          },
          cost() {
            'step 0';
            const count = lib.skill.xajh_aoshi.getSkillCount(player);
            player.
            chooseTarget([1, count], get.prompt('xajh_aoshi'), '为' + get.translation(trigger.card) + '增加目标', function (card, player, target) {
              return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
            }).
            set('sourcex', trigger.targets).
            set('ai', function (target) {
              const player = _status.event.player;
              return get.effect(target, _status.event.card, player, player);
            }).
            set('card', trigger.card);
            'step 1';
            event.result = result;
          },
          content() {
            trigger.targets.addArray(event.targets);
            game.log(event.targets, '成为了', trigger.card, '的额外目标');
          }
        },
        //邪左冷禅 霸天 20240415
        xajh_yingong: {
          group: 'xajh_yingong_useCard',
          subSkill: {
            useCard: {
              forced: true,
              trigger: {
                global: 'useCardAfter'
              },
              filter(event, player) {
                if (event.card.name != 'sha') return false;
                if (game.hasNature(event.card)) return false;
                if (event.skill) return false;
                if (event.cards.length != 1) return false;
                if (event.card.name != 'sha') return false;
                if (game.hasNature(event.cards[0])) return false;
                return [event.player].addArray(event.targets).includes(player);
              },
              async content(event, trigger, player) {
                trigger.cards[0].addNature('ice');
                trigger.cards[0].setMark('xajh_yingong', player);
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'damageBegin1'
          },
          forced: true,
          filter(event, player) {
            if (event.hasNature('ice')) {
              return event.source != player;
            }
            if (!event.hasNature()) {
              return event.player == player || event.source == player;
            }
            return false;
          },
          content() {
            if (!trigger.hasNature()) {
              game.setNature(trigger, 'ice');
            } else {
              trigger.source = player;
            }
          }
        },
        xajh_hanmou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'discardEnd'
          },
          filter(event, player) {
            var evt = event.getParent(2);
            if (!evt || evt.name != 'icesha_skill') return false;
            if (
            player.getHistory('custom', function (evt) {
              return evt.xajh_hanmou && evt.xajh_hanmou == event.player;
            }).length)

            return false;
            return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'd';
          },
          check(event, player) {
            return player.getUseValue(event.cards[0]) > 0;
          },
          prompt2(event, player) {
            return '是否蓄谋' + get.translation(event.cards[0]) + '';
          },
          content() {
            player.addJudge({ name: 'xumou_jsrg' }, [trigger.cards[0]]);
            player.getHistory('custom').push({ xajh_hanmou: trigger.player });
          }
        },
        xajh_bingyue: {
          zhuSkill: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseEnd'
          },
          filter(event, player) {
            if (player == event.player) return false;
            return player.hasZhuSkill('xajh_bingyue', event.player);
          },
          forced: true,
          content() {
            'step 0';
            trigger.player.chooseBool('是否发动' + get.translation(player) + '的【xajh_bingyue】？').set('choice', get.attitude(trigger.player, player) > 0);
            'step 1';
            if (result.bool) {
              trigger.player.line(player, 'green');
              if (
              player.countDiscardableCards(player, 'j', (card) => {
                return (card.viewAs || card.name) == 'xumou_jsrg';
              }))
              {
                player.
                discardPlayerCard('j', player, '是否弃置一张蓄谋牌?否则你蓄谋牌堆顶一张牌.').
                set('ai', function (button) {
                  var card = button.link;
                  var player = get.player();
                  return player.getUseValue(card) <= 0;
                }).
                set('filterButton', function (button) {
                  var card = button.link;
                  return (card.viewAs || card.name) == 'xumou_jsrg';
                });
              } else {
                event._result = { bool: false };
              }
            } else {
              event.finish();
            }
            'step 2';
            if (!result.bool) {
              player.addJudge({ name: 'xumou_jsrg' }, get.cards());
            }
          }
        },
        xajh_jianbing: {
          forced: true,
          zhuSkill: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCardAfter'
          },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            if (game.hasNature(event.card)) return false;
            if (event.skill) return false;
            if (event.cards.length != 1) return false;
            if (event.card.name != 'sha') return false;
            if (game.hasNature(event.cards[0])) return false;
            if (!player.hasZhuSkill('xajh_jianbing', event.player)) return false;
            return ![event.player].addArray(event.targets).includes(player);
          },
          async content(event, trigger, player) {
            trigger.cards[0].addNature('ice');
            trigger.cards[0].setMark('xajh_jianbing', player);
          }
        },
        //邪岳不群 霸天 20230728
        //辟邪剑谱技能
        jydiy_bixiejianpu_skill: {
          audio: 'ext:金庸群侠传/peiyin:true',
          trigger: {
            source: 'damageBegin1'
          },
          equipSkill: true,
          filter(event, player) {
            if (player.maxHp < 2) return false;
            return event.notLink();
          },
          forced: true,
          content() {
            player.loseMaxHp();
            trigger.num++;
          },
          ai: {
            effect: {
              player(card, player, target, current, isLink) {
                if (!target) return;
                if (isLink) return;
                if (player.maxHp < 2) return;
                if (!get.tag(card, 'damage')) return;
                if (
                target.hasSkillTag('filterDamage', null, {
                  player: player,
                  card: card
                }))

                return [1, -2, 1, 0];
                return [1, -1.5, 1, -1.5];
              }
            }
          }
        },
        xajh_weishan2: {
          forced: true,
          audio: 'xajh_weishan',
          trigger: {
            global: 'phaseZhunbeiBegin'
          },
          filter(event, player) {
            if (event.player == player) return false;
            if (player.hasSkill('xajh_weishan_ren')) return true;
            if (player.hasSkill('xajh_weishan_yi')) return true;
            if (player.hasSkill('xajh_weishan_li')) return true;
            return false;
          },
          content() {
            'step 0';
            var list = [
            [0, '仁:当前回合内,所有角色共计只能造成1点伤害.'],
            [1, '义:该角色本回合无法使用黑色装备牌.'],
            [2, '礼:该角色本回合无法使用负面延时锦囊牌.']];

            var next = player.chooseButton([get.prompt('xajh_weishan'), [list, 'textbutton']]);
            next.set('selectButton', [1, 1]);
            next.set('filterButton', function (button) {
              var player = _status.event.player;
              if (player.hasSkill('xajh_weishan_ren') && button.link == 0) return true;
              if (player.hasSkill('xajh_weishan_yi') && button.link == 1) return true;
              if (player.hasSkill('xajh_weishan_li') && button.link == 2) return true;
              return false;
            });
            next.set('ai', function (button) {
              var player = _status.event.player;
              var event = _status.event.getTrigger();
              var att = get.attitude(player, event.player);
              switch (button.link) {
                case 0:{
                    return -att;
                  }
                case 1:{
                    return -att;
                  }
                case 2:{
                    return -att;
                  }
              }
            });
            'step 1';
            if (result && result.bool) {
              var link = result.links[0];
              if (link == 0) {
                game.countPlayer(function (current) {
                  current.addTempSkill('xajh_weishan_0');
                });
              } else if (link == 1) {
                trigger.player.addTempSkill('xajh_weishan_1');
              } else if (link == 2) {
                trigger.player.addTempSkill('xajh_weishan_2');
              }
            }
          }
        },
        xajh_weishan: {
          group: 'xajh_weishan2',
          subSkill: {
            0: {
              mark: true,
              marktext: '伪',
              charlotte: true,
              popup: false,
              forced: true,
              intro: {
                name: '伪善 — 伤害',
                content: '当前回合内,所有角色共计只能造成1点伤害.'
              },
              trigger: {
                player: 'damageBegin4'
              },
              filter(event, player) {
                return event.num > 0;
              },
              content() {
                var bool = game.hasPlayer(function (current) {
                  return current.getHistory('damage').length;
                });
                if (bool) {
                  trigger.cancel();
                } else {
                  trigger.num = 1;
                  game.countPlayer(function (current) {
                    current.addTempSkill('xajh_weishan_4');
                  });
                }
              }
            },
            1: {
              mark: true,
              marktext: '伪',
              charlotte: true,
              popup: false,
              forced: true,
              intro: {
                name: '伪善 - 装备牌',
                content: '本回合无法使用黑色装备牌'
              },
              mod: {
                cardEnabled(card, player) {
                  if (get.type(card) == 'equip' && get.color(card) == 'black') return false;
                },
                cardSavable(card, player) {
                  if (get.type(card) == 'equip' && get.color(card) == 'black') return false;
                }
              }
            },
            2: {
              mark: true,
              marktext: '伪',
              charlotte: true,
              popup: false,
              forced: true,
              intro: {
                name: '伪善 - 延时锦囊牌',
                content: '本回合无法使用负面延时锦囊牌'
              },
              mod: {
                cardEnabled(card, player) {
                  if (get.type(card) == 'delay' && card.name != 'jydiy_yungongliaoshang') return false;
                },
                cardSavable(card, player) {
                  if (get.type(card) == 'delay' && card.name != 'jydiy_yungongliaoshang') return false;
                }
              }
            },
            4: {
              charlotte: true,
              popup: false,
              forced: true,
              ai: {
                effect: {
                  target(card, player, target) {
                    if (player.hasSkillTag('jueqing', false, target)) return;
                    if (get.tag(card, 'damage')) return 'zeroplayertarget';
                  }
                }
              }
            },
            ren: {
              marktext: '仁',
              intro: {
                content: '仁标记'
              }
            },
            yi: {
              marktext: '义',
              intro: {
                content: '义标记'
              }
            },
            li: {
              marktext: '礼',
              intro: {
                content: '礼标记'
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:6',
          trigger: {
            global: 'phaseBefore',
            player: 'enterGame'
          },
          forced: true,
          filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
          },
          content() {
            'step 0';
            player.changeHujia(3, 'xajh_weishan', true);
            'step 1';
            if (player.hujia > 0) {
              player.addSkill('xajh_weishan_ren');
            }
            if (player.hujia > 1) {
              player.addSkill('xajh_weishan_yi');
            }
            if (player.hujia > 2) {
              player.addSkill('xajh_weishan_li');
            }
          }
        },
        xajh_koumi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'changeHujiaEnd'
          },
          forced: true,
          filter(event, player) {
            if (event.num > 0) return false;
            if (player.hasSkill('xajh_weishan_ren') && player.hujia < 1) return true;
            if (player.hasSkill('xajh_weishan_yi') && player.hujia < 2) return true;
            if (player.hasSkill('xajh_weishan_li') && player.hujia < 3) return true;
            return false;
          },
          content() {
            'step 0';
            if (trigger.type == 'damage') {
              var target = trigger.getParent(2).source;
              if (player.hasSkill('xajh_weishan_ren') && player.hujia < 1) {
                if (target && target.hp > player.hp) {
                  target.loseHp(target.hp - player.hp);
                }
                player.removeSkill('xajh_weishan_ren');
              }
              if (player.hasSkill('xajh_weishan_yi') && player.hujia < 2) {
                player.removeSkill('xajh_weishan_yi');
                if (target && target.isIn() && target.countCards('he')) {
                  event.target = target;
                  event.goto(2);
                }
              }
              if (player.hasSkill('xajh_weishan_li') && player.hujia < 3) {
                player.removeSkill('xajh_weishan_li');
                if (target) {
                  var list = [];
                  get.randomCards(100, function (cardx) {
                    if (get.type(cardx, null, false) != 'delay') return false;
                    var name = cardx.name;
                    if (name == 'jydiy_yungongliaoshang') return false;
                    if (!target.canAddJudge({ name: name })) return false;
                    list.push(cardx);
                    return false;
                  });
                  if (list.length) {
                    var judge = list.randomGet();
                    target.addJudge(judge.name, [judge]);
                  }
                }
              }
            }
            'step 1';
            event.finish();
            'step 2';
            player.
            chooseTarget(
              function (card, player, target) {
                var evt = _status.event.parent;
                return evt.target.canUse({ name: 'juedou' }, target) && target != _status.event.player;
              },
              '选择一名角色,令' + get.translation(target) + '对其使用【比武】'
            ).
            set('ai', function (target) {
              var evt = _status.event.parent;
              return get.effect(target, { name: 'juedou' }, evt.target, _status.event.player) - 2;
            });
            'step 3';
            if (result.targets?.length) {
              event.target1 = result.targets[0];
              var cardsx = target.getCards('he', function (i) {
                return target.canUse({ name: 'juedou' }, event.target1, false);
              });
              if (cardsx.length) {
                target.
                chooseCard('he', true, '将一张牌当做【比武】对' + get.translation(event.target1) + '使用', function (card, player) {
                  return _status.event.cardsx.includes(card);
                }).
                set('cardsx', cardsx).
                set('ai', function (card) {
                  if (get.effect(event.target1, { name: 'juedou' }, _status.event.player) <= 0) return -1;
                  return 6 - get.value(card);
                });
              } else {
                event.finish();
              }
            } else {
              event.finish();
            }
            'step 4';
            if (result.bool) {
              target.useCard({ name: 'juedou' }, result.cards, false, event.target1);
            }
          }
        },
        xajh_fujian2: {
          enable: 'phaseUse',
          filterCard(card, player) {
            return true;
          },
          usable: 1,
          audio: 'xajh_fujian',
          position: 'hes',
          viewAs: {
            name: 'juedou'
          },
          viewAsFilter(player) {
            if (player.hujia) return false;
            if (!player.countCards('hes')) return false;
          },
          prompt: '将一张牌当【比武】使用',
          check(card) {
            return 7 - get.value(card);
          },
          ai: {
            wuxie(target, card, player, viewer) {
              if (player == game.me && get.attitude(viewer, player) > 0) {
                return 0;
              }
            },
            basic: {
              order: 5,
              useful: 1,
              value: 5.5
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
                    card: card
                  },
                  true
                ))
                {
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
              }
            },
            tag: {
              respond: 2,
              respondSha: 2,
              damage: 1
            }
          }
        },
        xajh_fujian: {
          forced: true,
          group: 'xajh_fujian2',
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          filter(event, player) {
            return !player.hujia;
          },
          content() {
            player.gainMaxHp();
            if (!lib.inpile.includes('jydiy_bixiejianpu')) {
              lib.inpile.add('jydiy_bixiejianpu');
            }
            if (!player.countCards('he', 'jydiy_bixiejianpu')) {
              var cardx = get.cardPile(function (card) {
                return card.name == 'jydiy_bixiejianpu';
              });
              if (!cardx) cardx = game.createCard2('jydiy_bixiejianpu', 'diamond', 1);
              player.gain(cardx, 'log', 'gain2');
            }
          }
        },
        //绿竹翁 霸天 20230717
        xajh_jianpu: {
          contentList: ['伤害', '回复', '弃置', '摸牌', '获得', '使用'],
          content0() {
            'step 0';
            player.chooseBool('是否令' + get.translation(target) + '受到一点伤害？').set('ai', function () {
              var player = _status.event.player;
              return get.damageEffect(target, player, player) > 0;
            });
            'step 1';
            if (result.bool) {
              player.line(target);
              target.damage(player);
            }
          },
          content1() {
            'step 0';
            if (!target.isDamaged()) {
              event.finish();
              return;
            }
            player.chooseBool('是否令' + get.translation(target) + '回复一体力？').set('ai', function () {
              if (get.recoverEffect(target, player, player) > 0) return true;
              return false;
            });
            'step 1';
            if (result.bool) {
              player.line(target);
              target.recover();
            }
          },
          content2() {
            'step 0';
            var count = target.countCards('he', function (card) {
              return lib.filter.cardDiscardable(card, target, event.name);
            });
            if (!count) {
              event.finish();
              return;
            }
            player.chooseBool('是否令' + get.translation(target) + '弃置两张牌？').set('ai', function () {
              if (get.attitude(player, target) << 0) return true;
              return false;
            });
            'step 1';
            if (result.bool) {
              player.line(target);
              var count = target.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, target, event.name);
              });
              if (count) {
                if (count > 2) count = 2;
                target.chooseToDiscard('he', true, count);
              }
            }
          },
          content3() {
            'step 0';
            player.chooseBool('是否摸两张牌？').set('ai', function () {
              return true;
            });
            'step 1';
            if (result.bool) {
              player.draw(2);
            }
            'step 2';
            player.chooseBool('是否令' + get.translation(target) + '摸两张牌？').set('ai', function () {
              if (get.attitude(player, target) > 0) return true;
              return false;
            });
            'step 3';
            if (result.bool) {
              player.line(target);
              target.draw(2);
            }
          },
          content4() {
            if (target != player && target.countGainableCards(player, 'he')) {
              player.gainPlayerCard('he', target);
            }
          },
          content5() {
            'step 0';
            var list = [];
            lib.inpile.filter(function (i) {
              var type = get.type(i);
              if (type != 'basic' && type != 'trick') return false;
              if (!player.hasUseTarget({ name: i }, false)) return false;
              list.push([type, '', i]);
              if (i == 'sha') {
                for (var j of lib.inpile_nature) {
                  if (player.hasUseTarget({ name: i, nature: j }, false)) list.push([type, '', i, j]);
                }
              }
            });
            if (list.length) {
              player.chooseButton(['是否视为使用一张基本牌或锦囊牌？', [list, 'vcard']]).set('ai', function (button) {
                var player = _status.event.player;
                var card = { name: button.link[2], nature: button.link[3] };
                //return player.getUseValuet(card,false)
                return player.getUseValue(card, false);
              });
            } else {
              event.finish();
            }
            'step 1';
            if (result && result.bool && result.links[0]) {
              var card = { name: result.links[0][2], nature: result.links[0][3] };
              player.chooseUseTarget(card, true, false, 'nodistance');
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCard'
          },
          filter(event, player) {
            if (get.type(event.card) != 'equip') return false;
            if (event.cards.length != 1) return false;
            if (event.cards[0].origin_name) return false;
            return lib.jy_mijiList.includes(event.card.name);
          },
          logTarget: 'player',
          content() {
            'step 0';
            var inpile = lib.jy_mijiList.slice(0);
            inpile.remove(trigger.card.name);
            player.chooseVCardButton(inpile, get.prompt2(event.name, trigger.player)).set('ai', function (button) {
              return Math.random();
            });
            'step 1';
            if (result.links?.length) {
              var name = result.links[0][2];
              var origin_name = trigger.card.name;
              trigger.card.name = name;
              trigger.cards[0].origin_name = origin_name;
              var oldCard = trigger.card;
              trigger.card.name = name;
              game.log(oldCard, '改为了', trigger.card);
              var info = get.translation(name + '_info');
              if (info.includes('伤害')) {
                var next = game.createEvent('xajh_jianpu_use', false);
                next.setContent(lib.skill.xajh_jianpu['content0']);
                next.player = player;
                next.target = trigger.player;
              }
              if (info.includes('回复')) {
                var next = game.createEvent('xajh_jianpu_use', false);
                next.setContent(lib.skill.xajh_jianpu['content1']);
                next.player = player;
                next.target = trigger.player;
              }
              if (info.includes('弃置')) {
                var next = game.createEvent('xajh_jianpu_use', false);
                next.setContent(lib.skill.xajh_jianpu['content2']);
                next.player = player;
                next.target = trigger.player;
              }
              if (info.includes('摸牌')) {
                var next = game.createEvent('xajh_jianpu_use', false);
                next.setContent(lib.skill.xajh_jianpu['content3']);
                next.player = player;
                next.target = trigger.player;
              }
              if (info.includes('获得')) {
                var next = game.createEvent('xajh_jianpu_use', false);
                next.setContent(lib.skill.xajh_jianpu['content4']);
                next.player = player;
                next.target = trigger.player;
              }
              if (info.includes('使用')) {
                var next = game.createEvent('xajh_jianpu_use', false);
                next.setContent(lib.skill.xajh_jianpu['content5']);
                next.player = player;
                next.target = trigger.player;
              }
            }
          }
        },
        xajh_yuye: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCard1'
          },
          forced: true,
          filter(event, player) {
            if (event.card.name != 'jiu') return false;
            if (event.card.nature) return false;
            return true;
          },
          content() {
            'step 0';
            var list = [
            ['basic', '', 'jiu', 'jy_tusu'],
            ['basic', '', 'jiu', 'jy_wubao'],
            ['basic', '', 'jiu', 'jy_lanlin'],
            ['basic', '', 'jiu', 'jy_zhuangyuan'],
            ['basic', '', 'jiu', 'jy_yuhu']];

            var next = player.chooseButton([get.prompt(event.name, trigger.player), '<div class="text center">' + get.translation(event.name, 'info') + '</div>', [list, 'vcard']]);
            next.set('ai', function (button) {
              var player = _status.event.player;
              var nature = button.link[3];
              if (get.attitude(player, trigger.player) <= 0) return 0;
              if (nature == 'jy_tusu' && trigger.player.hasSkill('jy_tusu')) return 0;
              if (nature == 'jy_wubao') return 0;
              if (nature == 'jy_zhuangyuan' && trigger.player.countCards('h', { suit: 'heart' }) < 2) return 0;
              return Math.random() + 1;
            });
            'step 1';
            if (result && result.bool && result.links[0]) {
              var oldCard = trigger.card;
              trigger.card.nature = result.links[0][3];
              game.log(oldCard, '改为了', trigger.card);
              var bool = false;
              if (trigger.skill) {
                bool = true;
              } else if (!trigger.card.isCard) {
                bool = true;
              } else if (trigger.cards.length != 1) {
                bool = true;
              }
              if (bool) {
                var natures = ['jy_tusu', 'jy_wubao', 'jy_lanlin', 'jy_zhuangyuan', 'jy_yuhu'];
                var cards = [game.createCard('jiu', null, null, natures.randomGet())];
                player.gain(cards, 'log', 'gain2');
              }
            }
          }
        },
        xajh_zhuyun2: {
          audio: 'xajh_zhuyun',
          trigger: {
            global: 'jydiy_yungongliaoshangBegin'
          },
          forced: true,
          filter(event, player) {
            if (!event.card) return false;
            if (event.card.name != 'jydiy_yungongliaoshang') return false;
            if (event.type == 'card') return false;
            if (!event._result) return false;
            var color = event._result.color;
            //game.log("***"+color)
            return color == 'red' || color == 'black';
          },
          content() {
            if (trigger._result.color == 'red') {
              player.draw(2);
            } else {
              player.addMark('xajh_zhuyun', 1, false);
            }
          }
        },
        xajh_zhuyun: {
          group: 'xajh_zhuyun2',
          marktext: '竹',
          intro: {
            name: '竹韵',
            name2: '竹',
            content: '手牌上限+#'
          },
          mod: {
            maxHandcard(player, num) {
              return num + player.countMark('xajh_zhuyun');
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCard'
          },
          logTarget: 'player',
          check(event, player) {
            var oldcard = event.card;
            oldcard.name = 'jydiy_yungongliaoshang';
            var effect = get.effect(event.targets[0], oldcard, event.player, player);
            var effect2 = get.effect(event.targets[0], event.card, event.player, player);
            return effect - effect2 > 0;
          },
          filter(event, player) {
            if (event.card.name != 'jydiy_zouhuorumo') return false;
            if (!event.targets.length) return false;
            var oldcard = event.card;
            oldcard.name = 'jydiy_yungongliaoshang';
            return event.player.canUse(oldcard, event.targets[0]);
          },
          content() {
            var oldcard = trigger.card;
            trigger.card.name = 'jydiy_yungongliaoshang';
            game.log(oldcard, '改为了', trigger.card);
          }
        },
        //邪任我行 霸天230705
        //新煞气
        xajh_shaqi: {
          subSkill: {
            lose: {
              mark: true,
              marktext: '煞',
              intro: {
                content: '手牌上限改为已失去体力值'
              },
              charlotte: true,
              forced: true,
              mod: {
                maxHandcardBase(player, num) {
                  return player.getDamagedHp();
                }
              }
            },
            hp: {
              mark: true,
              marktext: '煞',
              intro: {
                content: '手牌上限改为体力值'
              },
              charlotte: true,
              forced: true,
              mod: {
                maxHandcardBase(player, num) {
                  return player.getHp();
                }
              }
            }
          },
          mark: true,
          marktext: '☯',
          zhuanhuanji: true,
          intro: {
            content(storage, player) {
              return lib.dynamicTranslate.xajh_shaqi(player);
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          init(player) {
            lib.dynamicTranslate.xajh_shaqi = function (player) {
              const str = '<b>转换技.</b>结束阶段,你可以所有角色手牌上限调整为:';
              const str1 = '阳:已失去体力值.';
              const str2 = '阴:体力值.';
              if (player.storage.xajh_shaqi) {
                return str + '<span class="firetext">' + str1 + '</span>' + str2;
              } else {
                return str + str1 + '<span class="bluetext">' + str2 + '</span>';
              }
            };
          },
          logTarget(event, player) {
            return game.players.slice(0);
          },
          content() {
            const addskill = player.storage.xajh_shaqi ? 'xajh_shaqi_lose' : 'xajh_shaqi_hp';
            game.countPlayer(function (i) {
              i.removeSkill('xajh_shaqi_lose');
              i.removeSkill('xajh_shaqi_hp');
              i.addTempSkill(addskill, { player: 'die' });
            });
            player.changeZhuanhuanji(event.name);
          }
        },
        //旧煞气
        xajh_shaqi_old: {
          audio: 'xajh_shaqi',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          logTarget(event, player) {
            return game.filterPlayer(function (current) {
              return current != player;
            });
          },
          content() {
            'step 0';
            event.targets = game.
            filterPlayer(function (current) {
              return current != player;
            }).
            sortBySeat(player);
            'step 1';
            if (targets.length) {
              var target = targets.shift();
              event.target = target;
              if (!target.isIn()) {
                event.redo();
                return;
              }
              player.line(target);
              target.addTempClass('target');
            } else {
              event.finish();
            }
            'step 2';
            if (target.countCards('h', { suit: 'spade' })) {
              target.
              chooseCard('是否选择一张♠️️手牌交给' + get.translation(player) + ',否则' + get.translation(player) + '对你使用一张走火入魔', function (i) {
                return i.suit == 'spade';
              }).
              set('ai', function (card) {
                if (!_status.event.aicheck) return 0;
                return 7 - get.value(card);
              }).
              set('aicheck', player.canUse({ name: 'jydiy_zouhuorumo' }, target));
            } else {
              event._result = { bool: false };
            }
            'step 3';
            if (result.bool) {
              target.give(result.cards, player);
            } else {
              var cardx = get.cardPile(function (card) {
                if (card.name != 'jydiy_zouhuorumo') return false;
                return player.canUse({ name: 'jydiy_zouhuorumo', cards: [card] }, target);
              });
              if (!cardx) {
                cardx = get.cardPile(function (card) {
                  return player.canUse({ name: 'jydiy_zouhuorumo', cards: [card] }, target);
                });
              }
              if (cardx) {
                if (player.canUse({ name: 'jydiy_zouhuorumo', cards: [cardx] }, target)) {
                  if (cardx.name == 'jydiy_zouhuorumo') {
                    player.useCard(cardx, target, 'noai');
                  } else {
                    player.useCard({ name: 'jydiy_zouhuorumo', cards: [cardx] }, [cardx], target, 'noai');
                  }
                }
              }
            }
            event.goto(1);
          }
        },
        xajh_xixing_xierenwoxing: {
          trigger: {
            player: ['phaseDrawBefore', 'phaseZhunbeiBegin']
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          content() {
            'step 0';
            if (trigger.name == 'phaseDraw') {
              trigger.cancel();
              event.finish();
            }
            if (player.countCards('h') < player.maxHp) event.goto(3);
            game.playJY(['xajh_xixing_xierenwoxing1', 'xajh_xixing_xierenwoxing2'].randomGet());
            'step 1';
            event.card = { name: 'jydiy_zouhuorumo', cards: [] };
            var next = player.judge(event.card);
            next.card = event.card;
            next.judge = get.judge(event.card);
            next.judge2 = get.judge2(event.card);
            next.cardname = event.card.name;
            next.judgestr = get.translation(event.card.name);
            'step 2';
            var next = game.createEvent('jydiy_zouhuorumo');
            next.setContent(lib.card.jydiy_zouhuorumo.effect);
            next._result = result;
            next.card = event.card;
            next.cards = [];
            next.player = player;
            event.finish();
            'step 3';
            var gains = [];
            game.countPlayer(function (current) {
              if (current == player) return false;
              var list = current.getGainableCards(player, 'hej');
              gains.addArray(list);
            });
            if (gains.length && player.countCards('h') < player.maxHp) {
              var card = gains.randomGet();
              player.gain(card, 'giveAuto', 'bySelf');
              event.redo();
            }
            'step 4';
            var count = game.countPlayer(function (current) {
              return current != player;
            });
            var gains = [];
            player.getHistory('gain', function (evt) {
              if (evt.parent == event && evt.cards && evt.cards.length) {
                gains.addArray(evt.cards);
              }
            });
            if (gains.length > count) {
              player.loseMaxHp();
            }
          }
        },
        xajh_mowei: {
          group: ['xajh_mowei_remove'],
          subSkill: {
            remove: {
              trigger: {
                global: 'gameStart',
                player: 'enterGame'
              },
              popup: false,
              forced: true,
              filter(event, player) {
                return player.identity != 'zhu';
              },
              content() {
                player.removeSkill('xajh_mowei');
              }
            }
          },
          _priority: -8,
          zhuSkill: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          filter(event, player) {
            if (!player.hasZhuSkill('xajh_mowei')) return false;
            if (event.player == player) return false;
            if (event.player.group != player.group) return false;
            return event.player.countCards('h') > 0;
          },
          trigger: {
            global: 'judge'
          },
          content() {
            'step 0';
            var str = 'xajh_mowei:你的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + '是否交给' + get.translation(player) + '一张手牌并将结果改为♠️️️';
            var judging = trigger.player.judging[0];
            var cardx = {
              name: judging.name,
              nature: get.nature(judging),
              suit: 'spade',
              number: judging.number
            };
            var cardj = {
              name: judging.name,
              nature: get.nature(judging),
              suit: function () {
                if (trigger.fixedResult && trigger.fixedResult.suit) return trigger.fixedResult.suit;
                return judging.suit;
              }(),
              number: judging.number
            };
            var aiResult = trigger.judge(cardx) - trigger.judge(cardj);
            trigger.player.
            chooseCard(str).
            set('ai', function (card) {
              if (!_status.event.aicheck) return 0;
              var player = _status.event.parent.player,
                source = _status.event.player;
              if (get.attitude(player, source) > 0) return 11 - get.value(card);
              return -get.value(card);
            }).
            set('aicheck', aiResult > 0);
            'step 1';
            if (result.bool) {
              trigger.player.give(result.cards, player);
              trigger.player.popup('♠️️️');
              game.log(trigger.player, '将判定结果改为了', '#y♠️️');
              if (!trigger.fixedResult) trigger.fixedResult = {};
              trigger.fixedResult.suit = 'spade';
              trigger.fixedResult.color = 'black';
            }
          }
        },
        //邪东方不败 霸天 202306
        xajh_zhenfeng_new: {
          mod: {
            targetInRange(card) {
              if (card.suit == 'diamond' && card.name == 'sha') return true;
            },
            attackRange(player, distance) {
              if (player.hasEmptySlot(1)) return distance + 1;
            }
            //selectTarget:function (card,player,range){
            //   if(card.name!='sha') return;
            //    if(Array.isArray(range) && range[1]==-1) return;
            //    if(card.suit!='diamond') return;
            //    range[1]+=2;
            //},
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCard2' },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            if (event.card.suit != 'diamond') return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && player.canUse(event.card, current);
            });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget([1, 2], '飞针', '是否为' + get.translation(trigger.card) + '增加至多2个目标?', function (card, player, target) {
              return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
            }).
            set('sourcex', trigger.targets).
            set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(target, _status.event.card, player, player);
            }).
            set('card', trigger.card);
            'step 1';
            if (result.bool) {
              event.targets = result.targets;
            } else {
              event.finish();
            }
            'step 2';
            player.line(event.targets);
            trigger.targets.addArray(event.targets);
          },
          group: ['xajh_zhenfeng_new_zheng', 'xajh_zhenfeng_new_sha'],
          subSkill: {
            zheng: {
              name: '绣花针',
              audio: 'xajh_zhenfeng_new',
              equipSkill: true,
              noHidden: true,
              inherit: 'jydiy_xiuhuazhen_skill',
              filter(event, player) {
                if (!lib.skill.jydiy_xiuhuazhen_skill.filter(event, player)) return false;
                if (!player.hasEmptySlot(1)) return false;
                return true;
              }
            },
            sha: {
              enable: ['chooseToRespond', 'chooseToUse'],
              filterCard(card, player) {
                if (get.subtype(card) == 'equip1') return true;
                if (card.suit == 'diamond' && get.type(card) == 'basic') return true;
                return false;
              },
              position: 'hes',
              viewAs: { name: 'sha' },
              viewAsFilter(player) {
                if (!player.countCards('hes', lib.skill.xajh_zhenfeng_new_sha.filterCard)) return false;
              },
              prompt: '将一张武器牌或♦️️基本牌当杀使用或打出',
              check(card) {
                var val = get.value(card);
                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                return 5 - val;
              },
              ai: {
                skillTagFilter(player) {
                  if (!player.countCards('hes', lib.skill.xajh_zhenfeng_new_sha.filterCard)) return false;
                },
                respondSha: true
              }
            }
          }
        },
        xajh_bigong_new: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          filterTarget(card, player, target) {
            return player != target;
          },
          filterCard: true,
          check(card) {
            return 8 - get.value(card);
          },
          discard: false,
          lose: false,
          delay: false,
          content() {
            'step 0';
            player.give(cards, target);
            'step 1';
            if (!target.countCards('he', { suit: 'diamond' })) event._result = { control: '流失体力' };else

            target.chooseControl('给牌', '流失体力').ai = function (event, player) {
              if (get.effect(player, { name: 'losehp' }, player, player) > 0) return 1;
              var cards = player.getCards('he', { suit: 'diamond' });
              if (cards.length == 1) return 0;
              if (cards.length >= 2) {
                if (Array.isArray(cards)) for (var i of cards) {
                  if (get.tag(i, 'save')) return 1;
                }
              }
              if (player.hp == 1) return 0;
              if (Array.isArray(cards)) for (var i of cards) {
                if (get.value(i) >= 8) return 1;
              }
              if (cards.length > 2 && player.hp > 2) return 1;
              if (cards.length > 3) return 1;
              return 0;
            };
            'step 2';
            target.chat('我选择' + result.control);
            target.popup(result.control);
            var cardsx = target.getCards('he', { suit: 'diamond' });
            if (result.control == '给牌') {
              target.give(cardsx, player);
            } else {
              //var num=Math.max(1,Math.ceil(cardsx.length/2));
              var num = Math.max(1, cardsx.length);
              target.loseHp(num);
              event.finish();
            }
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                var effect = get.effect(target, { name: 'losehp' }, target, target);
                if (effect > 0) return 0;
                return -target.countCards('he', { suit: 'diamond' });
              }
            },
            threaten: 2
          }
        },
        xajh_duanxiu_new: {
          subSkill: {
            add: {
              trigger: { global: ['phaseZhunbeiBefore', 'die'] },
              forced: true,
              forceDie: true,
              charlotte: true,
              forced: true,
              content() {
                if (trigger.player == player.storage.xajh_duanxiu_new_add) {
                  player.removeSkill('xajh_duanxiu_new_add');
                }
              }
            }
          },
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:4',
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return lib.skill.xajh_duanxiu_new.filterTarget(null, player, current);
            });
          },
          selectCard: -1,
          filterCard() {
            return false;
          },
          filterTarget(card, player, target) {
            if (player == target) return false;
            if (!target.hasSex('male')) return false;
            if (get.jy_hasbangpai(target)) return false;
            return true;
          },
          content() {
            target.
            choose_bangpai_skill({
              source: player
            }).
            set('callback', function (event, skill) {
              const source = event.source;
              event.gainSkillPlayer.addSkill('xajh_duanxiu_new_add');
              event.gainSkillPlayer.storage.xajh_duanxiu_new_add = source;
              event.gainSkillPlayer.addAdditionalSkills('xajh_duanxiu_new_add', skill, true);
            });
          },
          ai: {
            order: 8,
            result: {
              target(player, target) {
                return 1;
              }
            },
            expose: 0.4,
            threaten: 3
          }
        },
        //向问天
        xajh_gujun: {
          forced: true,
          firstDo: true,
          _priority: 100,
          mark: true,
          marktext: '勇',
          intro: {
            content(storage, player) {
              var list = lib.skill.xajh_gujun.getInfo(player);
              return '等级:' + get.translation(player.storage.xajh_gujun.level) + "<br>点数:<span class='bluetext'>" + get.translation(list[0]) + '</span>';
            }
          },
          init(player, skill) {
            if (!player.storage.xajh_gujun)
            player.storage.xajh_gujun = {
              level: 1,
              number: [7]
            };
          },
          getInfo(player) {
            if (!player.storage.xajh_gujun)
            player.storage.xajh_gujun = {
              level: 1,
              number: [7]
            };
            if (!player.storage.xajh_gujun.number) player.storage.xajh_gujun.number = [7];
            return player.storage.xajh_gujun.number;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCard2' },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            var list = lib.skill.xajh_gujun.getInfo(player);
            var number = event.card.number;
            if (typeof number != 'number') return false;
            if (number >= list[0]) return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && player.inRange(current) && player.canUse(event.card, current, false);
            });
          },
          forced: true,
          content() {
            'step 0';
            var players = game.filterPlayer(function (current) {
              return !trigger.targets.includes(current) && player.inRange(current) && player.canUse(trigger.card, current, false);
            });
            if (player.storage.xajh_gujun.level > 1) {
              player.
              chooseTarget([1, players.length], get.prompt(event.name), '为' + get.translation(trigger.card) + '增加任意个目标', function (card, player, target) {
                return _status.event.sourcex.includes(target);
              }).
              set('sourcex', players).
              set('ai', function (target) {
                var player = _status.event.player;
                return get.effect(target, _status.event.card, player, player);
              }).
              set('card', trigger.card);
            } else {
              event._result = { bool: true, targets: players };
            }
            'step 1';
            if (result.bool) {
              event.targets = result.targets;
            } else {
              event.finish();
            }
            'step 2';
            trigger.targets.addArray(event.targets);
          }
        },
        xajh_lianmei: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCardAfter'
          },
          forced: true,
          filter(event, player) {
            if (!event.cards || !event.cards.length) return false;
            if (!event.cards.filterInD('od').length) return false;
            if (event.card.name != 'sha') return false;
            if (event.card.suit != 'club') return false;
            return true;
          },
          content() {
            'step 0';
            event.togain = trigger.cards.filterInD('od');
            if (trigger.player == player) {
              player.
              chooseTarget('【联袂】:选择一名角色将' + get.translation(event.togain) + '交给其', function (card, player, target) {
                return target != player;
              }).
              set('ai', function (target) {
                var att = get.attitude(target, player);
                return att > 0;
              });
            } else {
              trigger.player.chooseBool('【联袂】:是否将' + get.translation(event.togain) + '交给' + get.translation(player)).set('ai', function (event, player) {
                var att = get.attitude(player, event.player);
                return att > 0;
              });
            }
            'step 1';
            if (result.bool) {
              if (result.targets?.length) {
                player.give(event.togain, result.targets[0]);
              } else {
                trigger.player.give(event.togain, player);
              }
              var list = lib.skill.xajh_gujun.getInfo(player);
              var damages = trigger.player.getHistory('sourceDamage', function (evt) {
                if (evt.card == trigger.card) return true;
                return false;
              });
              if (damages.length) {
                list[0] += 2;
              } else {
                list[0] += 1;
              }
              if (list[0] > 13) list[0] = 13;
            }
          }
        },
        xajh_yingjiu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          filter(event, player) {
            return player.phaseNumber && player.phaseNumber == 1;
          },
          forced: true,
          dustSkill: true,
          _priority: 100,
          group: ['xajh_yingjiu_phase', 'xajh_yingjiu_levelUp', 'xajh_yingjiu_dying'],
          content() {
            'step 0';
            var next = player.chooseTarget(2, get.prompt2(event.name), function (card, player, target) {
              var selected = ui.selected.targets;
              if (selected.length == 0) return target != player;
              if (selected.length == 1) return true;
              return false;
            });
            next.set('ai', function (target) {
              var num = player.maxHp;
              var num2 = target.maxHp;
              var selected = ui.selected.targets;
              if (selected.length == 0) return num > num2;
              if (selected.length == 1) return get.attitude(player, target) >= 0;
              return 0.5;
            });
            next.set('targetprompt', ['"营救A', '营救B']);
            next.set('complexSelect', true);
            'step 1';
            if (result && result.targets && result.targets[1]) {///QQQ
              result.targets[0].addSkill('xajh_yingjiu_targets1');
              result.targets[1].addSkill('xajh_yingjiu_targets2');
              player.storage.xajh_yingjiu_targets = result.targets.slice(0);
            }
          },
          subSkill: {
            targets1: {
              mark: true,
              marktext: '营',
              charlotte: true,
              intro: {
                content: '营救A'
              }
            },
            targets2: {
              mark: true,
              marktext: '营',
              charlotte: true,
              intro: {
                content: '营救B'
              }
            },
            phase: {
              trigger: {
                global: 'phaseJieshuBegin'
              },
              filter(event, player) {
                var targets = player.storage.xajh_yingjiu_targets;
                if (!targets) return false;
                if (!targets[0].isIn() || !targets[1].isIn()) return false;
                if (event.player == targets[0]) {
                  if (!targets[1].isDamaged() && !get.jy_deEffect(targets[1])) return true;
                  if (targets[0].maxHp > player.maxHp || targets[0].countCards('e') > player.countCards('e')) return true;
                }
                return false;
              },
              forced: true,
              _priority: 1,
              content() {
                'step 0';
                var targets = player.storage.xajh_yingjiu_targets;
                event.target = targets[1];
                var bool1 = targets[1].isDamaged();
                var bool2 = get.jy_deEffect(targets[1]);
                if (bool1 && bool2) {
                  player.
                  chooseControl().
                  set('choiceList', ['令' + get.translation(targets[1]) + '回复一点体力', '令' + get.translation(targets[1]) + '解除负面状态']).
                  set('ai', function () {
                    if (bool1) return 0;
                    return 1;
                  });
                } else if (bool1) {
                  event._result = { bool: true, index: 0 };
                } else if (bool2) {
                  event._result = { bool: true, index: 1 };
                } else {
                  event.finish();
                }
                'step 1';
                if (result.index == 0) {
                  event.target.recover();
                } else {
                  if (event.target.isLinked()) event.target.link(false);
                  if (event.target.isTurnedOver()) event.target.turnOver(false);
                  if (event.target.countDisabledSlot() >= 1) {
                    for (var i = 1; i < 6; i++) {
                      if (event.target.hasDisabledSlot(i)) event.target.enableEquip(i);
                    }
                  }
                  var cards = event.target.getCards('j', function (card) {
                    return card.name != 'jydiy_yungongliaoshang';
                  });
                  if (cards.length) {
                    event.target.discard(cards);
                  }
                }
              }
            },
            dying: {
              trigger: {
                global: 'dying'
              },
              filter(event, player) {
                var list = lib.skill.xajh_gujun.getInfo(player);
                if (list[0] >= 13) return false;
                var targets = player.storage.xajh_yingjiu_targets;
                if (!targets) return false;
                return event.player == targets[1];
              },
              forced: true,
              _priority: 100,
              content() {
                var targets = player.storage.xajh_yingjiu_targets;
                if (targets[0].isIn()) {
                  targets[0].loseHp(2);
                }
                var target = targets[1];
                var list = [];
                var list2 = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5', 'equip6'];
                for (var i of list2) {
                  if (!target.hasDisabledSlot(i)) list.push(['disableEquip', [i]]);
                }
                if (!target.isLinked()) {
                  list.push(['link']);
                }
                if (!target.isTurnedOver()) {
                  list.push(['turnOver']);
                }
                if (!target.isDisabledJudge()) {
                  list.push(['disableJudge']);
                }
                get.randomCards(100, function (cardx) {
                  if (get.type(cardx, null, false) != 'delay') return false;
                  var name = cardx.name;
                  if (name == 'jydiy_yungongliaoshang') return false;
                  if (!target.canAddJudge({ name: name })) return false;
                  list.push(['addJudge', [name, cardx]]);
                  return false;
                });
                if (list.length) {
                  var item = list.randomGet();
                  if (item.length == 1) {
                    target[item[0]]();
                  } else {
                    target[item[0]].apply(target, item[1]);
                  }
                }
                delete player.storage.xajh_yingjiu_targets;
                targets[0].removeSkill('xajh_yingjiu_targets1');
                targets[1].removeSkill('xajh_yingjiu_targets2');
                player.awakenSkill('xajh_yingjiu');
                game.log('使命失败');
                player.addSkills('xajh_yingjiu_jiuchi');
              }
            },
            jiuchi: {
              mark: true,
              marktext: '酒',
              intro: {
                name: '酒',
                name2: '酒',
                content: '出牌阶段你可以将一张♣️️手牌当【酒】使用'
              },
              name: '营救•酒',
              popup: false,
              nopop: true,
              charlotte: true,
              enable: 'phaseUse',
              filterCard(card, player) {
                return card.suit == 'club';
              },
              viewAs: { name: 'jiu' },
              position: 'hs',
              viewAsFilter(player) {
                if (!player.countCards('hs', { suit: 'club' })) return false;
                return true;
              },
              prompt: '出牌阶段你可以将一张♣️️手牌当【酒】使用',
              check(card) {
                if (_status.event.type == 'dying') return 1 / Math.max(0.1, get.value(card));
                return 4 - get.value(card);
              }
            },
            levelUp: {
              trigger: {
                player: 'xajh_lianmeiAfter'
              },
              filter(event, player) {
                var list = lib.skill.xajh_gujun.getInfo(player);
                var targets = player.storage.xajh_yingjiu_targets;
                if (!targets) return false;
                return list[0] >= 13;
              },
              forced: true,
              _priority: 66,
              content() {
                'step 0';
                player.awakenSkill('xajh_yingjiu');
                player.storage.xajh_gujun.level = 2;
                game.log('使命成功');
                var targets = player.storage.xajh_yingjiu_targets;
                targets[0].removeSkill('xajh_yingjiu_targets1');
                targets[1].removeSkill('xajh_yingjiu_targets2');
                if (targets[0].isIn() && targets[0].isDamaged()) {
                  targets[0].recover(targets[0].maxHp - targets[0].hp);
                }
                delete player.storage.xajh_yingjiu_targets;
                var cardx = get.randomCard(function (cardx) {
                  if (get.type(cardx) != 'equip') return false;
                  if (!player.hasEmptySlot(get.subtype(cardx))) return false;
                  return player.canUse(cardx, player);
                });
                if (cardx) player.useCard(cardx, player, false);
                'step 1';
                var cardx = get.randomCard(function (cardx) {
                  if (get.type(cardx) != 'equip') return false;
                  if (!player.hasEmptySlot(get.subtype(cardx))) return false;
                  return player.canUse(cardx, player);
                });
                if (cardx) player.useCard(cardx, player, false);
              }
            }
          }
        },
        //乐厚
        //阴阳---棉花糖
        xajh_yinyang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['useCardToAfter', 'phaseJieshuBegin']
          },
          forced: true,
          _priority: 66,
          marktext: '阴阳',
          intro: {
            mark(dialog, storage, player) {
              var storage = player.getStorage('xajh_yinyang');
              if (!storage || !storage.length) return '无';
              var list = [];
              for (var i of storage) {
                var name = i.split('::');
                list.push([get.translation(name[1]), '', name[0], name[1]]);
              }
              dialog.addAuto([list, 'vcard']);
            },
            markcount(storage, player) {
              var storage = player.getStorage('xajh_yinyang');
              return storage.length;
            }
          },
          filter(event, player) {
            if (event.name == 'phaseJieshu') return true;
            var colors = get.color(event.card);
            var names = event.card.name;
            var name2 = names + '::' + colors;
            return !player.getStorage('xajh_yinyang').includes(name2);
          },
          content() {
            'step 0';
            if (trigger.name == 'phaseJieshu') {
              event.goto(2);
            }
            'step 1';
            var cards = player.getStorage('xajh_yinyang');
            var colors = get.color(trigger.card);
            var names = trigger.card.name;
            var card = get.cardPile(function (card) {
              return card.name == names && get.color(card) != colors;
            });
            if (card) player.gain(card, 'log', 'draw');else
            player.say('没牌了,没牌了,牌堆已经被你摸光了!');
            var name2 = names + '::' + colors;
            player.markAuto('xajh_yinyang', [name2]);
            event.finish();
            'step 2';
            var storage = player.getStorage('xajh_yinyang');
            player.unmarkAuto('xajh_yinyang', storage);
            //if(storage.length) event.redo();
          }
        },
        //双掌
        xajh_shuangzhang: {
          mod: {
            aiOrder(player, card, num) {
              if (get.itemtype(card) == 'card' && card.name == 'sha') return num - 0.1;
            },
            cardUsable(card, player, num) {
              if (card.name == 'sha') {
                if (player.hasSkill('xajh_shuangzhang_black') && get.color(card) == 'black') return num;
                if (player.hasSkill('xajh_shuangzhang_red') && get.color(card) == 'red') return num;
                return Infinity;
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCard1'
          },
          filter(event, player) {
            if (event.card.name == 'sha' && player.isPhaseUsing()) {
              if (!player.hasSkill('xajh_shuangzhang_black') || !player.hasSkill('xajh_shuangzhang_red')) return true;
            }
            return false;
          },
          forced: true,
          _priority: -60,
          subSkill: { black: { sub: true }, red: { sub: true } },
          content() {
            var color = get.color(trigger.card);
            if (color == 'black') {
              player.addTempSkill('xajh_shuangzhang_black');
            } else {
              player.addTempSkill('xajh_shuangzhang_red');
            }
          }
        },
        //双掌--假象版本
        //林震南--霸天20220422
        //起镖
        xajh_qibiao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            return target == player.next;
          },
          content() {
            'step 0';
            var next = target.draw(3, 'visible');
            next.log = false;
            event.cards = [];
            event.gainList = [];
            'step 1';
            if (Array.isArray(result) && result.length > 1 && target.countCards('h')) {
              event.cards = result;
              event.gainList.add(target);
            } else event.finish();
            'step 2';
            if (event.current == undefined) {
              event.current = target;
            } else if (event.current2) {
              event.current = event.current2;
            }
            event.current2 = event.current.next;
            var cards = event.current.getCards('h');
            if (cards.length < 3) {
              event.goto(4);
            } else {
              var gain = cards.randomGets(3);
              event.current2.line(event.current, 'green');
              event.current2.gain(gain, event.current, 'give', 'bySelf');
              // event.current.$give(gain,event.current2);
            }
            'step 3';
            if (event.current2 == player) {
              event.goto(4);
            } else {
              event.goto(2);
              event.gainList.add(event.current2);
            }
            'step 4';
            for (var i of event.gainList) {
              if (
              i.countCards('h', function (card) {
                return event.cards && event.cards.includes(card);
              }))

              i.damage(player);
            }
          },
          ai: {
            order: 12,
            result: {
              player: 1
            },
            threaten: 1.55
          }
        },
        //怀璧
        xajh_huaibi3: {
          audio: 'xajh_huaibi',
          trigger: { player: 'die' },
          forced: true,
          filter(event, player) {
            return player.countCards('he', function (card) {
              return get.type(card) == 'equip';
            });
          },
          forceDie: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('xajh_huaibi'), function (card, player, target) {
              return player != target;
            }).
            set('forceDie', true).
            set('ai', function (target) {
              var num = get.attitude(_status.event.player, target);
              return num;
            }).
            set('sourcex', trigger.source);
            'step 1';
            if (result.targets?.length) {
              var target = result.targets[0];
              player.line(target, 'green');
              var cards = player.getCards('he', function (card) {
                return get.type(card) == 'equip';
              });
              target.gain(cards, player, 'giveAuto');
            }
          },
          ai: {
            expose: 0.5
          }
        },
        xajh_huaibi2: {
          audio: 'xajh_huaibi',
          trigger: { player: 'damageSource' },
          forced: true,
          filter(event, player) {
            return (
              event.source &&
              event.source.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, event.source);
              }) &&
              player != event.source &&
              player.countDiscardableCards(event.source, 'he', (card) => get.type(card) == 'equip' && get.subtype(card) == 'equip5'));

          },
          content() {
            'step 0';
            trigger.source.chooseToDiscard(get.prompt('xajh_huaibi', player), 'he', lib.filter.cardDiscardable).set('ai', function (card) {
              if (get.attitude(trigger.source, player) > 0) return -1;
              return get.unuseful(card);
            });
            'step 1';
            if (!player.countDiscardableCards(trigger.source, 'he', (card) => get.type(card) == 'equip' && get.subtype(card) == 'equip5')) return;
            var next = trigger.source.discardPlayerCard(player, 'he', true);
            next.set('filterButton', function (button) {
              return get.type(button.link) == 'equip' && get.subtype(button.link) == 'equip5';
            });
          }
        },
        xajh_huaibi: {
          group: ['xajh_huaibi2', 'xajh_huaibi3'],
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: ['loseEnd', 'gainEnd'],
            global: 'gameDrawAfter'
          },
          mod: {
            ignoredHandcard(card, player) {
              if (get.type(card) == 'equip' && get.subtype(card) == 'equip5') {
                return true;
              }
            },
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && get.type(card) == 'equip' && get.subtype(card) == 'equip5') return false;
            }
          },
          forced: true,
          popup: false,
          init(player) {
            if (game.online) return;
            var list = [];
            player.countCards('h', function (card) {
              var info = get.info(card);
              if (info && info.type && info.type == 'equip' && info.subtype && info.subtype == 'equip5' && info.skills) list.addArray(info.skills);
            });
            if (list.length) {
              player.addAdditionalSkills('xajh_huaibi', list, true);
            }
          },
          content() {
            var list = [];
            player.countCards('h', function (card) {
              var info = get.info(card);
              if (info && info.type && info.type == 'equip' && info.subtype && info.subtype == 'equip5' && info.skills) list.addArray(info.skills);
            });
            if (list.length) {
              player.addAdditionalSkills('xajh_huaibi', list);
            }
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (player == target && get.type(card) == 'equip' && get.subtype(card) == 'equip5') {
                  return 'zerotarget';
                }
              }
            }
          }
        },
        //界余沧海(20220219突破)
        xajh_cuixin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filterCard(card, player) {
            return card.suit == 'heart';
          },
          usable: 1,
          check(card) {
            return 9 - get.value(card);
          },
          filter(event, player) {
            if (!player.countCards('he', { suit: 'heart' })) return false;
            return game.hasPlayer(function (current) {
              return lib.skill.xajh_cuixin.filterTarget(null, player, current);
            });
          },
          position: 'he',
          filterTarget(card, player, target) {
            if (player == target) return false;
            return target.countDiscardableCards(player, 'h');
          },
          content() {
            'step 0';
            if (target.countDiscardableCards(player, 'h')) {
              player.discardPlayerCard('h', target, true);
            } else event.finish();
            'step 1';
            if (result.cards?.length) {
              if (result.cards[0].suit != 'heart') {
                event.goto(0);
              }
            }
          },
          ai: {
            order: 9,
            result: {
              target: -1
            },
            threaten: 2
          }
        },
        xajh_bianlian: {
          trigger: {
            player: 'phaseZhunbeiBefore'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            if (player.hasSkill('xajh_cuixin') && player.hasSkill('xajh_suoxiu')) return false;
            return true;
          },
          forced: true,
          derivation: ['xajh_cuixin', 'xajh_suoxiu'],
          content() {
            'step 0';
            var skills = lib.skill.xajh_bianlian.derivation;
            var list = [];
            for (var i = 0; i < skills.length; i++) {
              if (!player.hasSkill(skills[i])) {
                list.push(skills[i]);
              }
            }
            if (list.length) {
              if (list.length == 1) {
                player.addTempSkills(list[0]);
                event.finish();
              } else
              player.jy_chooseSkill(list).set('callback', function (result, player, target) {
                for (var i of result.links) {
                  player.addTempSkills(i);
                }
              });
            }
          }
        },
        xajh_suoxiu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseUseEnd'
          },
          forced: true,
          filter(event, player) {
            return (
              !player.getStat('damage') &&
              game.countPlayer(function (current) {
                return !current.isLinked();
              }) >= 2);

          },
          content() {
            'step 0';
            player.
            chooseTarget(2, get.prompt('xajh_suoxiu'), function (card, player, target) {
              return !target.isLinked();
            }).
            set('ai', function (target) {
              var player = _status.event.player;
              var eff = get.effect(target, { name: 'guohe_copy2' }, player, player);
              return eff;
            });
            'step 1';
            if (result.bool) {
              for (var i = 0; i < result.targets.length; i++) {
                result.targets[i].link();
                player.discardPlayerCard('he', result.targets[i], true);
              }
            }
          }
        },
        xajh_miemen: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          forced: true,
          filter(event, player) {
            return game.hasPlayer(function (player) {
              return player.countCards('h') == 0;
            });
          },
          content() {
            'step 0';
            player.
            chooseTarget([1, Infinity], get.prompt('xajh_miemen'), function (card, player, target) {
              return target.countCards('h') == 0;
            }).
            set('ai', function (target) {
              var player = _status.event.player;
              return get.damageEffect(target, player, player, 'fire');
            });
            'step 1';
            if (result.bool) {
              for (var i = 0; i < result.targets.length; i++) {
                result.targets[i].damage(player, 1, 'fire');
              }
            }
          }
        },
        //定闲师太
        //烈胆
        xajh_liedan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          viewAs: { name: 'juedou' },
          filterCard() {
            return false;
          },
          selectCard: -1,
          ignoreMod: true,
          precontent() {
            event.result.card = { name: 'juedou' };
          },
          filterTarget(card, player, target) {
            if (target.countCards('h') <= player.countCards('h')) return false;
            return lib.filter.filterTarget.apply(this, arguments);
          },
          viewAsFilter(player) {
            return game.hasPlayer(function (current) {
              return current.countCards('h') > player.countCards('h') && player.canUse('juedou', current);
            });
          }
        },
        //盟守
        xajh_mengshou: {
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (!arg.card) return false;
              if (get.attitude(player, arg.target) > 0) return false;
              if (arg && arg.card.name != 'juedou') return false;
              var count = arg.target.countCards('h', 'sha');
              var count2 = game.countPlayer(function (current) {
                if (get.attitude(player, current) < 0) return false;
                return current.countCards('h', 'sha');
              });
              if (count2 >= count) return true;
              return false;
            },
            effect: {
              target(card, player, target) {
                if (card.name != 'juedou') return;
                if (
                target.hasSkillTag(
                  'directHit_ai',
                  true,
                  {
                    target: player,
                    card: card
                  },
                  true
                ))

                return 0.2;
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          group: 'xajh_mengshou_draw',
          forced: true,
          //trigger:{player:["chooseToRespondBefore","chooseToUseBefore"]},
          trigger: { player: 'chooseToRespondBefore' },
          filter(event, player) {
            if (event.responded) return false;
            //if(!event.respondTo) return false;
            if (!event.filterCard || !event.filterCard({ name: 'sha' }, player, event)) return false;
            if (event.name == 'chooseToRespond' && lib.filter.cardRespondable({ name: 'sha' }, player, event)) return true;
            return false;
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('xajh_mengshou'), function (card, player, target) {
              return target != player && target.countCards('he');
            }).
            set('ai', function (target) {
              var att = get.attitude(_status.event.player, target);
              var count = target.countCards('h', 'sha');
              if (att > 0 && count) return 10;
              return 0;
            });
            'step 1';
            if (result.targets?.length) {
              var target = result.targets[0];
              event.target = target;
              var att = get.attitude(event.target, player);
              target.chooseCard('he', { name: 'sha' }, '盟守:是否将一张[杀]交给' + get.translation(player) + '?').set('ai', function (card) {
                return att;
              });
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              event.target.give(result.cards, player, true);
              event.target.addMark('xajh_mengshou_mark', 1);
            }
          },
          subSkill: {
            draw: {
              audio: 'ext:金庸群侠传/peiyin:2',
              trigger: { global: 'phaseDrawBegin2' },
              logTarget: 'player',
              forced: true,
              charlotte: true,
              filter(event, player) {
                return event.player.hasMark('xajh_mengshou_mark') && !event.numFixed;
              },
              content() {
                var num = trigger.player.countMark('xajh_mengshou_mark');
                trigger.num += num;
              }
            },
            mark: {
              marktext: '盟',
              intro: {
                name: '盟守',
                content: 'mark'
              }
            }
          }
        },
        //授位
        xajh_shouwei: {
          audio: 'ext:金庸群侠传/peiyin:2',
          mark: true,
          marktext2: '位',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_shouwei.png',
          limited: true,
          init(player) {
            player.storage.xajh_shouwei = false;
          },
          intro: { content: 'limited' },
          trigger: { player: 'dying' },
          filter(event, player) {
            if (player.storage.xajh_shouwei) return false;
            return game.hasPlayer(function (current) {
              return current != player && current.hasMark('xajh_mengshou_mark');
            });
          },
          forced: true,
          content() {
            'step 0';
            var num = 0;
            for (var i of game.players) {
              var current = i;
              if (current != player && current.countMark('xajh_mengshou_mark') > num) {
                num = current.countMark('xajh_mengshou_mark');
              }
            }
            player.
            chooseTarget('请选择【授位】的目标', function (card, player, target) {
              return target != player && target.countMark('xajh_mengshou_mark') == _status.event.num;
            }).
            set('ai', function (target) {
              return get.attitude(_status.event.player, target) > 0;
            }).
            set('forceDie', true).
            set('num', num);
            'step 1';
            if (result.targets?.length) {
              var target = result.targets[0];
              player.line(target, { color: [255, 255, 0] });
              var card = get.cardPile(function (cardx) {
                if (get.type(cardx) == 'equip' && get.subtype(cardx) == 'equip1') {
                  var str = get.translation(cardx.name);
                  return str.includes('剑') && target.hasUseTarget(cardx);
                }
                return false;
              });
              if (card) {
                target.chooseUseTarget(card, 'nothrow', 'nopopup', true);
              } else player.popup('悲剧!');
              target.addSkills('jy_beiyuehengshan');
              player.awakenSkill('xajh_shouwei');
              player.storage.xajh_shouwei = true;
            }
          }
        },
        //曲非烟
        //【妁言】
        xajh_shuoyan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          selectTarget: 1,
          filterTarget(card, player, target) {
            return target.countCards('e') > 0;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            event.targetx = targets[0];
            var equCards = targets[0].getCards('e');
            var suit = [];
            var suitCards = [];
            for (var i of equCards) {
              if (!suit.includes(i.suit)) {
                suit.push(i.suit);
              }
            } //QQQ
            for (var i = 0; i < suit.length; i++) {
              suitCards.push(
                get.randomCard(function (cardx) {
                  return cardx.suit == suit[i];
                })
              );
            }
            targets[0].gain(suitCards, 'log', 'gain2');
            event.suit = suit;
            if (
            game.hasPlayer(function (target) {
              return target.hasSex('female') && target != event.targetx && (suit.includes('club') || suit.includes('heart') && target.isDamaged());
            }))
            {
              player.
              chooseTarget(get.prompt2('xajh_shuoyan'), function (card, player, target) {
                return target.hasSex('female') && target != event.targetx && (suit.includes('club') || suit.includes('heart') && target.isDamaged());
              }).
              set('ai', function (target) {
                var bool = get.attitude(player, target) > 0;
                var num = 0;
                if (suit.includes('heart') && target.isDamaged()) num += 2;
                if (suit.includes('club')) num += 1;
                return bool ? num : -1;
              });
            } else event.finish();
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
              player.line(event.target, 'fire');
              if (event.suit.includes('club')) {
                var heart = get.randomCard(function (cardx) {
                  return cardx.suit == 'heart';
                });
                if (heart) {
                  event.target.gain(heart, 'log', 'gain2');
                }
              }
              if (event.suit.includes('heart') && event.target.isDamaged()) event.target.recover();
            }
          },
          ai: {
            basic: { order: 11 },
            result: {
              target(player, target1) {
                var suits = [];
                target1.countCards('e', function (card) {
                  suits.add(card.suit);
                });
                if (
                game.hasPlayer(function (target) {
                  if (get.attitude(player, target) < 0) return false;
                  return target.hasSex('female') && target != target1 && suits.includes('club') && suits.includes('heart') && target.isDamaged();
                }))
                {
                  return suits.length + 4;
                }
                if (
                game.hasPlayer(function (target) {
                  if (get.attitude(player, target) < 0) return false;
                  return target.hasSex('female') && target != target1 && suits.includes('club');
                }))
                {
                  return suits.length + 1;
                }
                if (
                game.hasPlayer(function (target) {
                  if (get.attitude(player, target) < 0) return false;
                  return target.hasSex('female') && target != target1 && suits.includes('heart') && target.isDamaged();
                }))
                {
                  return suits.length + 2;
                }
                return suits.length;
              }
            }
          }
        },
        //【烟灭】
        xajh_yanmie: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'damageEnd' },
          forced: true,
          filter(event, player) {
            return player.countCards('he', { type: 'equip' }) > 0;
          },
          content() {
            'step 0';
            player.chooseCardTarget({
              filterCard(card, player) {
                return get.type(card) == 'equip';
              },
              position: 'he',
              filterTarget(card, player, target) {
                return player != target;
              },
              ai1(card) {
                return 7 - get.value(card);
              },
              ai2(target) {
                return get.attitude(_status.event.player, target);
              },
              prompt: get.prompt2('xajh_yanmie')
            });
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
              //player.line(event.target);
              event.target.gain(result.cards[0], player, 'give');
            }
          }
        },
        //江南四友
        xajh_zhenniang: {
          mark: true,
          marktext2: '酿',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_zhenniang.png',
          limited: true,
          init(player) {
            player.storage.xajh_zhenniang = false;
          },
          intro: { content: 'limited' },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseZhunbeiBegin' },
          filter(event, player) {
            if (player.storage.xajh_zhenniang) return false;
            return true;
          },
          content() {
            player.awakenSkill('xajh_zhenniang');
            player.storage.xajh_zhenniang = true;
            var num = get.randomCardsNum(function (cardx) {
              return cardx.name == 'jiu';
            });
            var cards;
            if (num >= 2) {
              cards = get.randomCards(2, function (cardx) {
                return cardx.name == 'jiu';
              });
            } else {
              cards = [game.createCard('jiu'), game.createCard('jiu')];
            }
            player.addToExpansion(cards, 'gain2').gaintag.add('xajh_zhenniang2');
            player.addSkill('xajh_zhenniang2');
          }
        },
        xajh_zhenniang_jiu: {
          audio: 'xajh_zhenniang',
          trigger: { player: 'useCard1' },
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          mark: true,
          marktext2: '珍',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_zhenniang.png',
          forced: true,
          charlotte: true,
          firstDo: true,
          content() {
            if (!trigger.baseDamage) trigger.baseDamage = 1;
            trigger.baseDamage += game.roundNumber;
            game.broadcastAll(function (player) {
              player.removeSkill('xajh_zhenniang_jiu');
            }, player);
          },
          temp: true,
          silent: true,
          popup: false,
          nopop: true
        },
        xajh_zhenniang2: {
          enable: 'chooseToUse',
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_zhenniang.png',
          marktext2: '酿',
          intro: {
            content: 'expansion',
            markcount: 'expansion'
          },
          hiddenCard(player, name) {
            var cards = player.getExpansions('xajh_zhenniang2');
            if (!cards.length) return false;
            return name == 'jiu';
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          },
          filter(event, player) {
            var cards = player.getExpansions('xajh_zhenniang2');
            if (!cards.length) return false;
            if (!event.filterCard) return false;
            if (event.type == 'dying') {
              if (player != event.dying) return false;
              return true;
            }
            var bool = cards.some((card) => event.filterCard(card, player, event));
            return bool;
          },
          content() {
            'step 0';
            var evt = event.getParent('chooseToUse');
            var cards = player.getExpansions('xajh_zhenniang2');
            cards = cards.filter((card) => evt.filterCard(card, player, evt));
            if (!cards.length) {
              event.finish();
              return;
            }
            if (cards.length == 1) {
              event._result = { bool: true, links: cards };
            } else {
              player.chooseButton(['选择要使用的牌', cards], true).set('ai', function (button) {
                return 1;
              });
            }
            'step 1';
            if (result.links?.length) {
              if (event.getParent('chooseToUse').type == 'dying') {
                event.dying = player;
                event.type = 'dying';
              }
              player.useCard(result.links[0], player).set('oncard', function (card, player) {
                var that = this;
                if (!that.baseDamage) that.baseDamage = 1;
                that.baseDamage += game.roundNumber;
              });
            }
            'step 1';
            var cards = player.getExpansions('xajh_zhenniang2');
            if (!cards.length) player.removeSkill('xajh_zhenniang2');
          },
          ai: {
            order(name, player) {
              var event = _status.event;
              if (event.type == 'dying') {
                return get.order({ name: 'jiu' }) + 1;
              }
              return get.order({ name: 'jiu' });
            },
            skillTagFilter(player, tag, target) {
              if (player != target) return false;
            },
            save: true,
            result: {
              player(player, target) {
                var event = _status.event;
                if (event.type == 'dying') {

                  //return 1;
                }return lib.card.jiu.ai.result.target(player, player);
              }
            }
          }
        },
        xajh_huihao: {
          enable: 'phaseUse',
          audio: 'ext:金庸群侠传/peiyin:2',
          limited: true,
          mark: true,
          intro: { content: 'limited' },
          line: 'fire',
          filterTarget(card, player, target) {
            return true;
          },
          selectTarget: -1,
          filterCard() {
            return false;
          },
          selectCard: -1,
          init(player, skill) {
            player.storage[skill] = false;
          },
          filter(event, player) {
            if (player.storage.xajh_huihao) return false;
            return true;
          },
          contentAfter() {
            player.awakenSkill('xajh_huihao');
            player.storage.xajh_huihao = true;
          },
          content() {
            'step 0';
            var cards = target.getCards('hej', function (card) {
              return lib.filter.cardDiscardable(card, target, event.name) && get.color(card) == 'red';
            });
            event.cards = cards;
            if (cards.length) {
              target.discard(cards);
            }
            'step 1';
            if (cards.length) {
              var gains = get.randomCards(cards.length, function (cardx) {
                return get.color(cardx) == 'black';
              });
              if (gains && gains.length) {
                target.gain(gains, 'gain2', 'log');
              }
            }
          },
          ai: {
            order: 1,
            result: {
              player(player) {
                return 1;
              }
            }
          }
        },
        //////////////////////////////////////////////////////////////
        xajh_dianjing: {
          mark: true,
          marktext2: '睛',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_dianjing.png',
          limited: true,
          init(player) {
            player.storage.xajh_dianjing = false;
          },
          intro: { content: 'limited' },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'phaseUseBegin' },
          check(event, player) {
            if (event.player != player) return false;
            if (get.attitude(player, event.player) <= 0) return false;
            //return true;
            if (
            event.player.countCards('h', function (card) {
              return card.suit == 'heart' && event.player.getUseValue(card) > 0;
            }) > 2)

            return true;
            if (
            event.player.countCards('h', function (card) {
              return card.suit == 'diamond' && event.player.getUseValue(card) > 0;
            }) > 2)

            return true;
            if (
            event.player.countCards('h', function (card) {
              return card.suit == 'club' && event.player.getUseValue(card) > 0;
            }) > 2)

            return true;
            if (
            event.player.countCards('h', function (card) {
              return card.suit == 'heart' && event.player.getUseValue(card) > 0;
            }) > 2)

            return true;
            return false;
          },
          logTarget: 'player',
          filter(event, player) {
            if (player.storage.xajh_dianjing) return false;
            return true;
          },
          content() {
            'step 0';
            player.awakenSkill('xajh_dianjing');
            player.storage.xajh_dianjing = true;
            'step 1';
            player.choosePlayerCard(trigger.player, 'h', get.translation(trigger.player) + '的手牌', true, 'visible').set('ai', function (button) {
              var target = _status.event.target;
              var suit = button.link.suit;
              return target.countCards('h', function (card) {
                return card.suit == suit && target.getUseValue(card) > 0;
              });
            });
            'step 2';
            if (result.links?.length) {
              var suit = result.links[0].suit;
              trigger.player.addSkill('xajh_dianjing_' + suit, 'phaseUseEnd');
            }
          },
          subSkill: {
            heart: {
              trigger: { player: 'useCard' },
              filter(event, player) {
                return event.card.suit == 'heart';
              },
              nopop: true,
              mark: true,
              intro: { content: '使用♥️️︎牌无距离次数限制并且摸一张牌' },
              marktext2: '♥️️︎',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_hongtao.jpg',
              forced: true,
              charlotte: true,
              content() {
                if (trigger.addCount !== false) {
                  trigger.addCount = false;
                  var stat = player.getStat();
                  if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
                }
                player.draw();
              },
              mod: {
                targetInRange(card) {
                  if (card.suit == 'heart') return true;
                },
                cardUsable(card, player, target) {
                  if (card.suit == 'heart') return Infinity;
                },
                aiOrder(player, card, num) {
                  if (card.suit == 'heart') return num - 0.1;
                }
              },
              ai: {
                effect: {
                  player(card, player, target) {
                    if (card.suit == 'heart') return [1, 1];
                  }
                }
              }
            },
            diamond: {
              trigger: { player: 'useCard' },
              filter(event, player) {
                return event.card.suit == 'diamond';
              },
              nopop: true,
              mark: true,
              intro: { content: '使用♦️️︎牌无距离次数限制并且摸一张牌' },
              marktext2: '♦️️︎',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_fangpian.jpg',
              forced: true,
              charlotte: true,
              content() {
                if (trigger.addCount !== false) {
                  trigger.addCount = false;
                  var stat = player.getStat();
                  if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
                }
                player.draw();
              },
              mod: {
                targetInRange(card) {
                  if (card.suit == 'diamond') return true;
                },
                cardUsable(card, player, target) {
                  if (card.suit == 'diamond') return Infinity;
                },
                aiOrder(player, card, num) {
                  if (card.suit == 'diamond') return num - 0.1;
                }
              },
              ai: {
                effect: {
                  player(card, player, target) {
                    if (card.suit == 'diamond') return [1, 1];
                  }
                }
              }
            },
            club: {
              trigger: { player: 'useCard' },
              filter(event, player) {
                return event.card.suit == 'club';
              },
              nopop: true,
              mark: true,
              intro: { content: '使用♣️️︎牌无距离次数限制并且摸一张牌' },
              marktext2: '♣️️︎',
              markimage: 'extension/金庸群侠传/image/icon/jymilingmeihua.jpg',
              forced: true,
              charlotte: true,
              content() {
                if (trigger.addCount !== false) {
                  trigger.addCount = false;
                  var stat = player.getStat();
                  if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
                }
                player.draw();
              },
              mod: {
                targetInRange(card) {
                  if (card.suit == 'club') return true;
                },
                cardUsable(card, player, target) {
                  if (card.suit == 'club') return Infinity;
                },
                aiOrder(player, card, num) {
                  if (card.suit == 'club') return num - 0.1;
                }
              },
              ai: {
                effect: {
                  player(card, player, target) {
                    if (card.suit == 'club') return [1, 1];
                  }
                }
              }
            },
            spade: {
              trigger: { player: 'useCard' },
              filter(event, player) {
                return event.card.suit == 'spade';
              },
              nopop: true,
              mark: true,
              intro: { content: '使用♠️️︎牌无距离次数限制并且摸一张牌' },
              marktext2: '♠️️︎',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_heitao.jpg',
              forced: true,
              charlotte: true,
              content() {
                if (trigger.addCount !== false) {
                  trigger.addCount = false;
                  var stat = player.getStat();
                  if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
                }
                player.draw();
              },
              mod: {
                targetInRange(card) {
                  if (card.suit == 'spade') return true;
                },
                cardUsable(card, player, target) {
                  if (card.suit == 'spade') return Infinity;
                },
                aiOrder(player, card, num) {
                  if (card.suit == 'spade') return num - 0.1;
                }
              },
              ai: {
                effect: {
                  player(card, player, target) {
                    if (card.suit == 'spade') return [1, 1];
                  }
                }
              }
            }
          }
        },
        xajh_duiyi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'judge' },
          mark: true,
          marktext2: '弈',
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_duiyi.png',
          limited: true,
          init(player) {
            player.storage.xajh_duiyi = false;
          },
          forced: true,
          intro: { content: 'limited' },
          filter(event, player) {
            if (player.storage.xajh_duiyi) return false;
            if (!event.card) return false;
            var name = event.card.name;
            //过滤没手牌的角色20220221
            if (
            game.countPlayer(function (current) {
              return current != player && current.countCards('h');
            }) <= 0)

            return false; //
            if (name != 'lebu' && name != 'bingliang' && name != 'shandian' && name != 'jydiy_zouhuorumo' && name != 'jydiyshengsifu') return false;
            return player.countCards('h', function (card) {
              var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
              if (mod2 != 'unchanged') return mod2;
              var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
              if (mod != 'unchanged') return mod;
              return true;
            });
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('xajh_duiyi'), function (card, player, target) {
              return target != player && target.countCards('h');
            }).
            set('ai', function (target) {
              if (player.countCards('h') <= target.countCards('h')) return -1;
              return -get.attitude(player, target);
            });
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
            } else {
              event.finish();
              return;
            }
            'step 2';
            player.awakenSkill('xajh_duiyi');
            player.storage.xajh_duiyi = true;
            event.listSuit = [];
            'step 3';
            if (event.turn == undefined) event.turn = player;
            if (
            event.turn.countCards('h', function (card) {
              var mod2 = game.checkMod(card, event.turn, 'unchanged', 'cardEnabled2', event.turn);
              if (mod2 != 'unchanged') return mod2;
              var mod = game.checkMod(card, event.turn, 'unchanged', 'cardRespondable', event.turn);
              if (mod != 'unchanged') return mod;
              return !event.listSuit.includes(card.suit);
            }))
            {
              event.turn.
              chooseCard(true, get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',', 'h', function (card) {
                var player = _status.event.player;
                var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                if (mod2 != 'unchanged') return mod2;
                var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                if (mod != 'unchanged') return mod;
                return !_status.event.listSuit.includes(card.suit);
              }).
              set('ai', function (card) {
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
              }).
              set('judging', trigger.player.judging[0]).
              set('listSuit', event.listSuit);
            } else {
              event._result = { bool: false };
            }
            'step 4';
            if (result.bool) {
              event.turn.respond(result.cards, 'highlight', 'noOrdering');
            } else {
              var next = game.createEvent('xajh_duiyi_after');
              event.next.remove(next);
              trigger.after.push(next);
              next._trigger = trigger;
              next.forceDie = true;
              if (event.turn == target) {
                next.player = player;
                next.target = target;
              } else {
                next.player = target;
                next.target = player;
              }
              next.setContent(function () {
                if (trigger.result.bool == false) {
                  player.draw(2);
                } else {
                  target.draw(2);
                }
              });
              event.finish();
              return;
            }
            'step 5';
            if (result.bool) {
              if (trigger.player.judging[0].clone) {
                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                game.broadcast(function (card) {
                  if (card.clone) {
                    card.clone.classList.remove('thrownhighlight');
                  }
                }, trigger.player.judging[0]);
                game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
              }
              game.cardsDiscard(trigger.player.judging[0]);
              trigger.player.judging[0] = result.cards[0];
              event.listSuit.add(result.cards[0].suit);
              trigger.orderingCards.addArray(result.cards);
              game.log(trigger.player, '的判定牌改为', result.cards[0]);
              if (event.turn == target) {
                event.turn = player;
              } else {
                event.turn = target;
              }
              event.goto(3);
            }
          }
        },
        //SP田伯光
        xajh_kuaidao: {
          shaRelated: true,
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: { player: 'useCardToPlayered' },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && event.target.countDiscardableCards(player, 'hej') > 0;
          },
          forced: true,
          content() {
            'step 0';
            player.
            discardPlayerCard(trigger.target, get.prompt('xajh_kuaidao', trigger.target), 'hej').
            set('ai', function (button) {
              var player = _status.event.player;
              var target = _status.event.target;
              if (get.attitude(player, target) > 0) return -10;
              var trigger = _status.event.getTrigger();
              var bool = target.hasShan();
              if (trigger.parent.directHit && trigger.parent.directHit.includes(target)) bool = false;
              var num = get.jyValue(button.link, target);
              if (get.attitude(player, target) > 0) num = -num;
              if (
              player == _status.currentPhase &&
              game.hasPlayer(function (current) {
                var att = get.attitude(player, current);
                return att > 0;
              }) &&
              button.link.suit == 'heart' &&
              player.hasSkill('xajh_luanhong'))

              num *= 1.2;
              if (get.position(button.link) == 'e' || get.position(button.link) == 'j' || _status.event.visible || target.isUnderControl(true, player) || player.hasSkillTag('viewHandcard', null, target, true)) {
                if (get.position(button.link) == 'e' && get.subtype(button.link) == 'equip2') return 10 * num;
                if (bool) {
                  if (get.type(button.link) == 'equip') return 3 * num;
                }
                if (!bool && get.type(button.link, 'trick') == 'trick') return 2 * num;
                return num;
              }
              return num;
            }).
            set('att', get.attitude(player, trigger.target) <= 0);
            'step 1';
            if (result.links?.length) {
              if (get.type(result.links[0], null, result.links[0].original == 'h' ? trigger.target : false) == 'equip') {
                trigger.parent.directHit.add(trigger.target);
                game.log(trigger.card, '对', trigger.target, '不可闪避!');
              } else if (result.links[0].original == 'j' || get.type(result.links[0], 'trick', result.links[0].original == 'h' ? trigger.target : false) == 'trick') {
                var id = trigger.target.playerid;
                var map = trigger.parent.customArgs;
                if (!map[id]) map[id] = {};
                if (typeof map[id].extraDamage != 'number') {
                  map[id].extraDamage = 0;
                }
                map[id].extraDamage++;
                game.log(trigger.card, '对', trigger.target, '伤害加一!');
              }
            }
          },
          ai: {
            unequip: true,
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (tag == 'directHit_ai')
              return (
                arg.card.name == 'sha' &&
                arg.target.countCards('e', function (card) {
                  return get.jyValue(card, arg.target) > 0;
                }) > 0);

              if (arg && arg.name == 'sha' && arg.target.getEquip(2) && get.equipValue(arg.target.getEquip(2), arg.target) > 0) return true;
              return false;
            }
          }
        },
        xajh_luanhong: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: { global: 'loseAfter' },
          filter(event, player) {
            if (player != _status.currentPhase) return false;
            if (event.type != 'discard') return false;
            for (var i = 0; i < event.cards2.length; i++) {
              if (event.cards2[i].suit == 'heart' && get.position(event.cards2[i], true) == 'd') {
                return true;
              }
            }
            return false;
          },
          forced: true,
          content() {
            'step 0';
            'step 1';
            var cards = [];
            for (var i = 0; i < trigger.cards2.length; i++) {
              if (trigger.cards2[i].suit == 'heart' && get.position(trigger.cards2[i], true) == 'd') {
                cards.push(trigger.cards2[i]);
              }
            }
            event.togive = cards.slice(0);
            player.
            chooseTarget(get.prompt('xajh_luanhong'), '将' + get.translation(event.togive) + '交给一名其他角色,若该角色为女性角色,你模一张牌', function (card, player, target) {
              return target != player;
            }).
            set('ai', function (target) {
              var att = get.attitude(_status.event.player, target);
              if (target.hasSex('female')) att * 2;
              if (_status.event.enemy) {
                return -att;
              } else if (att > 0) {
                return att / (1 + target.countCards('h'));
              } else {
                return att / 100;
              }
            }).
            set('enemy', event.togive.length == 1 && get.value(event.togive[0], player, 'raw') < 0);
            'step 2';
            if (result.targets?.length) {
              result.targets[0].gain(event.togive, 'gain2', 'log');
              event.draw = result.targets[0].hasSex('female');
            } else {
              event.finish();
            }
            'step 3';
            if (event.draw) {
              player.draw();
            }
          }
        },
        //梁发
        //旧英杰
        xajh_yingjie: {
          audio: 'xajh_yingjie2',
          trigger: { source: 'damageSource' },
          filter(event, player) {
            var evt2 = event.getParent('phaseUse');
            if (evt2.player != player) return false;
            if (!player.canUse({ name: 'jiu' }, player)) return false;
            return (
              player.getHistory('useCard', function (evt) {
                return evt.card.name == 'jiu' && evt.getParent('phaseUse') == evt2;
              }).length == 0);

          },
          forced: true,
          content() {
            player.useCard({ name: 'jiu' }, player);
          }
        },
        //突破版英杰
        xajh_yingjie2: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'phaseUseBegin' },
          check(event, player) {
            //if(!player.hasSha()) return false;
            if (player.countCards('hs', 'jiu')) return false;
            if (
            !player.countCards('hs', function (card) {
              return card.suit != 'spade' && card.name == 'sha';
            }))

            return false;
            var bool = game.hasPlayer(function (current) {
              return player.canUse({ name: 'sha' }, current) && get.effect(current, { name: 'sha' }, player, player) > 0 && get.attitude(player, current) < 0;
            });
            if (!bool) return false;
            if (
            player.countCards('h', function (card) {
              return card.suit == 'spade' && player.getUseValue(card) > 0;
            }) > 2)

            return false;
            return true;
          },
          content() {
            player.addTempSkill('xajh_yingjie2_jiu');
          },
          subSkill: {
            jiu: {
              charlotte: true,
              mod: {
                cardname(card, player, name) {
                  if (card.suit == 'spade') return 'jiu';
                }
              }
            }
          }
        },
        xajh_sijie: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCardToPlayered',
            target: 'useCardToPlayered'
          },
          usable: 1,
          forced: true,
          filter(event, player, name) {
            if (event.player == event.target) return false;
            var target = event.player == player ? event.target : event.player;
            return target.countGainableCards(player, 'hej') > 0;
          },
          content() {
            'step 0';
            var target = trigger.player == player ? trigger.target : trigger.player;
            event.target = target;
            player.
            gainPlayerCard(get.prompt('xajh_sijie', target), 'hej', target, 'visibleMove').
            set('ai', function (button) {
              var player = _status.event.player;
              var target = _status.event.target;
              var num = get.jyValue(button.link, target);
              if (get.attitude(player, target) > 0) num = -num;
              var pos = get.position(button.link);
              if (pos == 'e' || pos == 'j' || _status.event.visible || target.isUnderControl(true, player) || player.hasSkillTag('viewHandcard', null, target, true)) {
                if (button.link.suit == 'club') {
                  return num;
                }
                return -2;
              }
              return num;
            });
            'step 1';
            if (result.links?.length) {
              if (result.links[0].suit != 'club') {
                player.loseHp();
              }
            } else {
              player.getStat('triggerSkill').xajh_sijie--;
            }
          }
        },
        //无名太监
        xajh_huanhai: {
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:3',
          filterTarget(card, player, target) {
            return target.countCards('h');
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            'step 0';
            player.viewHandcards(target);
            'step 1';
            var num = target.countCards('h', { color: 'red' }) - target.countCards('h', { color: 'black' });
            if (num == 0) {
              event.finish();
              return;
            }
            var color, color2;
            if (num > 0) {
              color = 'black';
              color2 = 'red';
            } else {
              num = -num;
              color = 'red';
              color2 = 'black';
            }
            var gains = get.randomCards(num, function (cardx) {
              return get.color(cardx) == color;
            });
            if (gains) {
              target.gain(gains);
              target.$draw(gains);
            } else {
              game.log('没有符合要求的牌了');
            }
            event.color2 = color2;
            event.num = num;
            'step 2';
            target.chooseToDiscard(num, true, 'h', '弃置' + get.cnNumber(num) + '张' + (event.color2 == 'red' ? '红' : '黑') + '色手牌', function (card) {
              return get.color(card) == event.color2; //////&&lib.filter.cardDiscardable(card,target,'xajh_huanhai');
            });
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                return 2;
              }
            },
            threaten: 2
          }
        },
        xajh_xiedian: {
          group: ['xajh_xiedian2'],
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: { player: 'phaseDiscardBegin' },
          forced: true,
          filter(event, player) {
            return player.countCards('h') > player.getHandcardLimit();
          },
          content() {},
          mod: {
            aiValue(player, card, num) {
              if (get.color(card) == 'black') return 0;
            },
            cardEnabled(card) {
              if (get.color(card) == 'black') return false;
            },
            cardSavable(card) {
              if (get.color(card) == 'black') return false;
            },
            ignoredHandcard(card, player) {
              if (get.color(card) == 'black') {
                return true;
              }
            },
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && get.color(card) == 'black') return false;
            }
          }
        },
        xajh_xiedian2: {
          audio: 'xajh_xiedian',
          trigger: {
            global: [
            //'loseEnd',
            'damageBegin1',
            'drawBegin']

          },
          forced: true,
          filter(event, player) {
            if (event.name == 'lose') {
              if (event.type != 'discard') return false;
              if (event.getParent(3).name == 'xajh_xiedian2') return false;
              if (!event.player.countCards('h')) return false;
            }
            return player.countCards('h', { color: 'black' });
          },
          content() {
            'step 0';
            var check = function () {
              var att = get.attitude(player, trigger.player);
              if (trigger.name == 'damage') return att < 0;
              if (trigger.name == 'lose') return att < 0;
              if (trigger.name == 'draw') return att > 0 && !trigger.player.hasSkillTag('nogain');
            }();
            var str = function () {
              if (trigger.name == 'damage') return '请选择弃置一张黑色手牌,令' + get.translation(trigger.player) + '受到的伤害数加倍.';
              //if(trigger.name=="lose") return "请选择弃置一张黑色牌,令"+get.translation(trigger.player)+"此次需弃置的牌数加倍.";
              if (trigger.name == 'draw') return '请选择弃置一张黑色手牌,令' + get.translation(trigger.player) + '此次摸牌数加倍.';
            }();
            ///////////////////////////////////////////////////////////////////////////////
            player.
            chooseToDiscard('h', get.prompt('xajh_xiedian'), str, function (card) {
              return get.color(card) == 'black' && lib.filter.cardDiscardable(card, player);
            }).
            set('ai', function (card) {
              if (!_status.event.check) return 0;
              return 7 - get.value(card);
            }).
            set('check', check)(
              'step 1');
            if (result.bool) {
              if (trigger.name == 'lose') {
                trigger.player.chooseToDiscard('h', trigger.cards.length, true);
              } else {
                trigger.num = trigger.num * 2;
              }
            }
          }
        },
        //费彬
        xajh_taozui: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: { global: 'phaseEnd' },
          filter(event, player) {
            if (event.player == player || !event.player.isIn()) return false;
            var history = event.player.getHistory('useCard');
            for (var i = 0; i < history.length; i++) {
              if (!history[i].targets) continue;
              for (var j = 0; j < history[i].targets.length; j++) {
                if (history[i].targets[j] != event.player) return false;
              }
            }
            return event.player.countGainableCards(player, 'he') > 0;
          },
          forced: true,
          content() {
            var num = 0;
            if (trigger.player.countGainableCards(player, 'e')) num++;
            if (trigger.player.countGainableCards(player, 'h')) num++;
            player.
            gainPlayerCard(get.prompt('xajh_taozui', trigger.player), 'he', [num, num], trigger.player).
            set('filterButton', function (button) {
              for (var i = 0; i < ui.selected.buttons.length; i++) {
                if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
              }
              return true;
            });
          }
        },
        xajh_shajue: {
          shaRelated: true,
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: { player: 'useCard2' },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && player.canUse(event.card, current) && (!current.countCards('h') || !current.countCards('e'));
            });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2(event.name), [1, Infinity], function (card, player, target) {
              return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target) && (!target.countCards('h') || !target.countCards('e'));
            }).
            set('sourcex', trigger.targets).
            set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(target, _status.event.card, player, player);
            }).
            set('card', trigger.card);
            'step 1';
            if (result.bool) {
              event.target = result.targets;
            } else {
              event.finish();
            }
            'step 2';
            trigger.targets.addArray(event.target);
          }
        },
        //宁中则
        xajh_qizong: {
          mod: {
            aiOrder(player, card, num) {
              if (card.name == 'sha' && player.countCards('h') - 1 > player.getAttackRange()) return num + 11;
            }
          },
          shaRelated: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCard' },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && player.countCards('h') > player.getAttackRange();
          },
          forced: true,
          logTarget: 'targets',
          content() {
            trigger.directHit.addArray(game.filterPlayer());
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (arg && arg.card.name != 'sha') return false;
              if (
              player.countCards('h', function (card) {
                return !ui.selected.cards || !ui.selected.cards.includes(card);
              }) <= player.getAttackRange())

              return false;
            }
          }
        },
        xajh_lanxin: {
          enable: 'phaseUse',
          filterCard: { suit: 'club' },
          selectCard: [1, 1],
          discard: false,
          lose: false,
          delay: 0,
          filterTarget(card, player, target) {
            return player != target;
          },
          filter(event, player) {
            return player.countCards('h', { suit: 'club' }) > 0;
          },
          check(card) {
            if (card.name == 'du') return 20;
            return 10 - get.value(card);
          },
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:3',
          content() {
            'step 0';
            //target.gain(cards,player,'giveAuto');
            player.give(cards, target, true);
            'step 1';
            player.draw(2);
          },
          ai: {
            order(skill, player) {
              return 10;
            },
            result: {
              target(player, target) {
                if (target.hasSkillTag('nogain')) return 0;
                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                  if (target.hasSkillTag('nodu')) return 0;
                  return -10;
                }
                return 1;
              }
            }
          }
        },
        //风清扬
        xajh_shoujian: {
          shaRelated: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'useCard1' },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            var card = event.player.getEquip(1);
            if (!card) {
              return false;
            }
            if (!lib.inpile.includes(card.name)) {
              return false;
            }
            if (card.origin_name) {
              return false;
            }
            return true;
          },
          forced: true,
          content() {
            'step 0';
            var list1 = get.inpile('equip1');
            list1.remove(trigger.player.getEquip(1).name);
            for (var i = 0; i < list1.length; i++) {
              list1[i] = ['武器', '', list1[i]];
            }
            if (list1.length) {
              var dialog = ui.create.dialog(get.prompt2('xajh_shoujian', trigger.player), [list1, 'vcard'], 'hidden');
              player.chooseButton(dialog).set('ai', function (button) {
                var trigger = _status.event.getTrigger();
                var player = _status.event.player;
                var att = get.attitude(player, trigger.player);
                var name = button.link[2];
                if (att == 0) return 0;
                if (att > 0) {
                  var name2 = trigger.player.getEquip(1).name;
                  if (name2 == 'jydiy_dagoubang_re' || name2 == 'jydiy_dagoubang') {
                    if (
                    game.hasPlayer(function (current) {
                      return !trigger.targets.includes(current) && trigger.player.canUse(trigger.card, current) && get.effect(current, trigger.card, trigger.player, trigger.player) > 0;
                    }))

                    return 0;
                  }
                  if (name == 'jydiy_dagoubang_re' || name == 'jydiy_dagoubang') {
                    if (
                    game.hasPlayer(function (current) {
                      return !trigger.targets.includes(current) && trigger.player.canUse(trigger.card, current) && get.effect(current, trigger.card, trigger.player, trigger.player) > 0;
                    }))

                    return 3;
                    return 0;
                  }
                  if (name == 'jydiy_xuantiezhongjian') return 2;
                  if (name == 'jydiy_xiuhuazhen') return 1.5;
                  if (name == 'jydiy_tulongdao' || name == 'jydiy_tulongdao_re') return 1.4;
                  if (name == 'jydiy_shezhang' || name == 'qinggang') return 1.3;
                  if (name == 'jydiy_xuantiezhongjian') return 2;
                  if (name == 'qinglong') return 1.1;
                  if (name == 'guanshi') return 1.1;
                  if (name == 'qilin') return 1;
                  return 0;
                } else {
                  if (name == 'jydiy_shenghuoling') return 0.5;
                  if (name == 'zhangba') return 1;
                  if (name == 'zhuge') return 1;
                  if (name == 'wufengjian') return 5;
                  if (name == 'fangtian') return 0.5;
                  return 0;
                }
              });
            } else {
              event.finish();
            }
            'step 1';
            if (result.bool) {
              var equip1 = trigger.player.getEquip(1);
              trigger.player.removeEquipTrigger(equip1);
              var origin_name = equip1.name;
              equip1.name = result.links[0][2];
              equip1.origin_name = origin_name;
              trigger.player.addEquipTrigger(equip1);
              var card = { name: result.links[0][2] };
              game.log(player, '声明了', card);
              var next = game.createEvent('shoujian_clear');
              next.card = equip1;
              next.player = trigger.player;
              next.forceDie = true;
              //next._source_name=_source_name;
              event.next.remove(next);
              trigger.after.push(next);
              next.setContent(function () {
                if (!card.origin_name) return;
                var bool = false;
                if (player.isAlive() && player.getCards('e').includes(card)) bool = true;
                if (bool) player.removeEquipTrigger(card);
                var origin_name = card.origin_name;
                delete card.origin_name;
                card.name = origin_name;
                if (bool) player.addEquipTrigger(card);
              });
            }
          }
        },
        xajh_jianzong: {
          mod: {
            aiOrder(player, card, num) {
              if (card.name == 'sha' && player.countCards('h') >= player.getAttackRange()) return num - 2;
            }
          },
          shaRelated: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'useCard' },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && player.countCards('h') < player.getAttackRange();
          },
          forced: true,
          logTarget: 'targets',
          content() {
            trigger.directHit.addArray(game.filterPlayer());
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (arg && arg.card.name != 'sha') return false;
              if (
              player.countCards('h', function (card) {
                return !ui.selected.cards || !ui.selected.cards.includes(card);
              }) >= player.getAttackRange())

              return false;
            }
          }
        },
        xajh_xueyong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          usable: 1,
          lose: false,
          enable: 'phaseUse',
          selectTarget: 1,
          selectCard: 1,
          prompt: '选择一名角色,将一张手牌当作【比武】对所有与其势力相同的合法角色使用',
          filterTarget(card, player, target) {
            return target != player && player.canUse({ name: 'juedou', cards: [card] }, target);
          },
          check(card) {
            if (card.name == 'sha') return -1;
            return 7 - get.value(card);
          },
          filter(event, player) {
            if (!player.countCards('h')) return false;
            return game.hasPlayer(function (current) {
              return player.canUse({ name: 'juedou' }, current);
            });
          },
          filterCard: true,
          content() {
            'step 0';
            var juedouCard = { name: 'juedou', cards: cards };
            var t = target;
            var ts = game.filterPlayer(function (current) {
              return current.group == t.group && current != player && player.canUse(juedouCard, current);
            });
            if (ts.length >= 0) {
              player.useCard({ name: 'juedou' }, ts, cards).animate = false;
            }
          },
          ai: {
            expose: 0.8,
            order: 5,
            result: {
              player(player, target) {
                var ts = game.filterPlayer(function (current) {
                  return current.group == target.group && current != player && player.canUse({ name: 'juedou' }, current);
                });
                var value = 0;
                var shaCount = player.countCards('h', 'sha');
                var shaCount2 = 0;
                var effect = 0;
                for (var i = 0; i < ts.length; i++) {
                  var t = ts[i];
                  var eff = get.effect(t, { name: 'juedou' }, player, player);
                  effect += eff;
                  if (eff > 0) {
                    if (t.countCards('h', 'sha') > 0) shaCount2 += t.countCards('h', 'sha');
                  }
                }
                if (shaCount >= shaCount2) return effect;
                return 0;
              },
              target: -1
            }
          }
        },
        xajh_gangjue: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageBegin1'
          },
          check(event, player) {
            if (!event.source) {
              return true;
            }
            var att = get.attitude(player, event.source);
            if (player.identity == 'zhong' && event.source.identity == 'zhu' && event.num >= player.hp) {
              return true;
            }
            var target = player.storage.sdxl_yingguan_target;
            if (player.hasSkill('sdxl_yuxue') && target) {
              if (get.attitude(player, target) && target.hp > event.num) {
                return false;
              }
            }
            //if(event.source.hasSkill('tlbb_kanghui')&&att>0) return false;
            if (player.identity == 'fan' && att > 0 && event.num == 1 && player.hp == 1) return false;
            if (att < 0) {
              return true;
            }
            return event.num > 1;
          },
          filter(event, player) {
            return true;
          },
          content() {
            'step 0';
            player.loseHp(1);
            player.say(['泰山派基业岂能毁于我手？', '并派之事,老夫绝不同意!', '匹夫,你不要欺人太甚!'].randomGet());
            trigger.cancel();
          }
        },
        //笑傲江湖标记
        xajh_qinxin: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseUseBegin'
          },
          filter(event, player) {
            var hs = player.getCards('h');
            var names = ['sha', 'shan', 'tao', 'jiu'];
            for (var i = 0; i < hs.length; i++) {
              names.remove(hs[i].name);
            }
            if (!names.length) return false;
            return true;
          },
          content() {
            'step 0';
            if (player.getCards('h').length) player.showHandcards();
            'step 1';
            var hs = player.getCards('h');
            var list = [];
            var names = ['sha', 'shan', 'tao', 'jiu'];
            for (var i = 0; i < hs.length; i++) {
              names.remove(hs[i].name);
            }
            var gains = [];
            while (names.length) {
              var name = names.shift();
              var card = get.cardPile(function (cardx) {
                return cardx.name == name && !gains.includes(cardx);
              });
              if (card) gains.push(card);
            }
            if (gains.length) {
              player.gain(gains, 'draw', 'log');
            } else {
              player.popup('悲剧', 'fire');
              game.log('没有符合要求的牌了!');
            }
          }
        },
        xajh_jiufu: {
          audio: 'ext:金庸群侠传/peiyin:4',
          trigger: {
            player: 'useCardAfter'
          },
          forced: true,
          filter(event, player) {
            if (!player.countCards('h')) return false;
            return (
              event.card &&
              event.card.name == 'jiu' &&
              game.hasPlayer(function (current) {
                return !current.hasSkill('jiu');
              }));

          },
          content() {
            'step 0';
            player.chooseCardTarget({
              position: 'h',
              filterCard: lib.filter.cardDiscardable,
              filterTarget(card, player, target) {
                return !target.hasSkill('jiu');
              },
              selectCard: [1, 2],
              selectTarget() {
                if (ui.selected.cards.length == 1) return [1, 1];
                if (ui.selected.cards.length == 2) return [2, 2];
                return [3, 3];
              },
              complexSelect: true,
              ai1(card) {
                return 6 - get.value(card);
              },
              ai2(target) {
                if (!target.hasSha()) return 0;
                //if(game.hasPlayer(function(current){
                //return get.attitude(target,current)<0&&target.canUse('sha',current);
                //})) return get.attitude(_status.event.player,target);
                return get.attitude(_status.event.player, target);
              },
              prompt: get.prompt2('xajh_jiufu')
            });
            'step 1';
            if (result.bool) {
              event.targets = result.targets;
              player.discard(result.cards);
              event.num = 0;
            } else {
              event.finish();
            }
            'step 2';
            if (num < targets.length) {
              targets[num].addTempSkill('ywhy_zuiquan3', { player: 'phaseJieshuBegin' });
              var next = game.createEvent('xajh_jiufu_after', false);
              next.player = player;
              next.card = { name: 'jiu' };
              next.cards = [];
              next.target = targets[num];
              next.targets = targets;
              next.setContent(lib.card.jiu.content);
              event.num++;
              event.redo();
            }
          }
        },
        xajh_juepu: {
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            return player.countCards('h', { suit: 'club' }) >= 2;
          },
          check(card) {
            return 10 - get.value(card);
          },
          filterCard(card, player) {
            return card.suit == 'club';
          },
          filterTarget(card, player, target) {
            if (player == target) return false;
            return true;
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          selectCard: 2,
          multiline: true,
          selectTarget: [1, 3],
          multitarget: true,
          content() {
            'step 0';
            event.num1 = 0;
            event.numm = false;
            'step 1';
            var next = targets[event.num1].chooseToDiscard('是否弃置一张' + (event.numm ? '点数大于' + event.numm + '的手牌' : '手牌') + '?否则你流失一体力!', function (card, player) {
              return event.numm ? card.number > event.numm : true;
            });
            next.set('ai', function (card) {
              if (_status.event.effect > 0) return -1;
              return 6 - get.value(card);
            });
            next.set('effect', get.effect(targets[event.num1], { name: 'losehp' }, targets[event.num1], targets[event.num1]));
            'step 2';
            if (result.cards?.length) {
              event.numm = result.cards[0].number;
            } else {
              targets[event.num1].loseHp(1);
            }
            event.num1++;
            if (event.num1 < targets.length) event.goto(1);
          },
          ai: {
            order: 8,
            result: {
              target: -1
            },
            expose: 0.4,
            threaten: 1
          }
        },
        xajh_juechang: {
          derivation: ['xajh_juepu'],
          enable: 'chooseToUse',
          mark: true,
          marktext2: '绝',
          markimage: 'extension/金庸群侠传/image/icon/jyjuechang.jpg',
          limited: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player) {
            player.storage.xajh_juechang = false;
          },
          filterTarget(card, player, target) {
            if (player == target) return false;
            if (target.hasSkill('xajh_juepu')) return false;
            return true;
          },
          filter(event, player) {
            if (player.storage.xajh_juechang) return false;
            if (event.type == 'dying') {
              if (player != event.dying) return false;
              return true;
            }
            return false;
          },
          content() {
            player.awakenSkill('xajh_juechang');
            player.storage.xajh_juechang = true;
            target.addSkills('xajh_juepu');
          },
          ai: {
            order: 10,
            skillTagFilter(player) {
              if (player.storage.xajh_juechang) return false;
            },
            save: true,
            result: {
              target: 3
            }
          },
          intro: {
            content: 'limited'
          }
        },
        xajh_diezou: {
          mod: {
            aiOrder(player, card, num) {
              var number = card.number;
              if (typeof number != 'number') return;
              var history = player.getHistory('useCard', function (evt) {
                return evt.isPhaseUsing();
              });
              if (history.length == 0) return num + 10 * (14 - number);
              var num = history[0].card.number;
              if (!num) return;
              for (var i = 1; i < history.length; i++) {
                var num2 = history[i].card.number;
                if (!num2 || num2 <= num) return;
                num = num2;
              }
              if (number > num) return num + 10 * (14 - number);
            }
          },
          filterx(event, player) {
            var history = player.getHistory('useCard', function (evt) {
              return evt.isPhaseUsing();
            });
            if (history.length < 2) return false;
            var num = history[0].card.number;
            if (!num) return false;
            for (var i = 1; i < history.length; i++) {
              var num2 = history[i].card.number;
              if (!num2 || num2 <= num) return false;
              num = num2;
            }
            return true;
          },
          filtery(event, player) {
            var history = player.getHistory('useCard', function (evt) {
              return evt.isPhaseUsing();
            });
            if (history.length < 2) return false;
            var num = history[0].card.number;
            if (!num) return false;
            for (var i = 1; i < history.length; i++) {
              var num2 = history[i].card.number;
              if (!num2 || num2 >= num) return false;
              num = num2;
            }
            return true;
          },
          trigger: {
            player: ['phaseJieshuBegin']
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return true;
            if (lib.skill.xajh_diezou.filterx(event, player)) return true;
            if (lib.skill.xajh_diezou.filtery(event, player)) return true;
            return false;
          },
          content() {
            'step 0';
            var bool1 = lib.skill.xajh_diezou.filterx(null, player);
            var bool2 = lib.skill.xajh_diezou.filtery(null, player);
            if (!bool1 && !bool2) event.goto(3);
            'step 1';
            event.star = lib.skill.xajh_diezou.filterx(null, player);
            player.
            chooseTarget([1, 3], get.prompt('xajh_diezou'), '令一到三名角色' + (event.star ? '摸' : '弃') + '一张牌', function (card, player, target) {
              return event.star ?
              true :
              target.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, target, 'xajh_diezou');
              }) > 0;
            }).
            set('ai', function (target) {
              return event.star ? get.attitude(player, target) : -get.attitude(player, target);
            });
            'step 2';
            if (result.bool) {
              if (event.star) {
                game.asyncDraw(result.targets);
              } else {
                for (var i = 0; i < result.targets.length; i++) {
                  result.targets[i].chooseToDiscard('he', true);
                }
              }
            }
            event.finish();
            'step 3';
            player.chooseBool('是否发动【迭奏】？获得点数为1,2,3,5,6,的两张牌');
            'step 4';
            if (result.bool) {
              var list = get.randomCards(2, function (cardx) {
                var number = cardx.number;
                return [1, 2, 3, 5, 6].includes(number);
              });
              if (list.length) {
                player.gain(list, 'log', 'gain2');
              }
            }
          }
        },
        xajh_zibian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            return player.countCards('h');
          },
          discard: false,
          lose: false,
          delay: false,
          filterCard: true,
          filterTarget(card, player, target) {
            if (!game.checkMod(ui.selected.cards[0], player, 'unchanged', 'cardEnabled2', player)) return false;
            if (
            player == target &&
            player.canAddJudge({
              name: 'jydiy_yungongliaoshang',
              cards: [ui.selected.cards[0]]
            }))

            return true;
            return player.canUse({ name: 'jydiy_yungongliaoshang', cards: ui.selected.cards }, target);
          },
          position: 'hes',
          check(card) {
            var player = _status.event.player;
            var bool = game.hasPlayer(function (current) {
              return current != player && current.hp == 1 && get.damageEffect(current, player, player) > 0;
            });
            if (bool && get.color(card) == 'black') return 20 - get.value(card);
            return 5 - get.value(card);
          },
          content() {
            var next = player.useCard({ name: 'jydiy_yungongliaoshang' }, target, cards);
            next.audio = false;
            if (get.color(cards[0]) == 'black') target.damage(1);
          },
          ai: {
            result: {
              target(player, target) {
                if (ui.selected.cards.length) {
                  if (get.color(ui.selected.cards[0]) == 'black') {
                    return get.damageEffect(target, player);
                  } else {
                    return get.effect(target, { name: 'jydiy_yungongliaoshang' }, player, target);
                  }
                }
              }
            },
            order: 2
          }
        },
        xajh_guici: {
          subSkill: {
            temp: {
              mod: {
                mark: true,
                intro: {
                  content: '判定结果反转'
                },
                judge(player, result) {
                  if (result.bool !== true) {
                    result.bool = true;
                  } else {
                    result.bool = false;
                  }
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'judge'
          },
          filter(event, player) {
            if (event.player.hasSkill('xajh_guici_temp')) return false;
            return true;
          },
          logTarget: 'player',
          check(event, player) {
            if (!event.card) return false;
            var name = event.card.viewAs || event.card.name;
            if (name != 'bingliang' && name != 'lebu' && name != 'shandian' && name != 'fulei' && name != 'jydiyshengsifu') return false;
            var att = get.attitude(player, event.player);
            if (event.judge(event.player.judging[0]) < 0) {
              return att > 0 ? true : false;
            } else {
              return false;
            }
          },
          content() {
            'step 0';
            trigger.player.addTempSkill('xajh_guici_temp', 'judgeEnd');
            player.
            chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
              if (get.effect(player, { name: 'losehp' }, player, player) > 0) return 'baonue_hp';
              if (player.hp == player.maxHp) return 'baonue_hp';
              if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_maxHp';
              return 'baonue_hp';
            }).
            set('prompt', '失去1点体力或减1点体力上限');
            'step 1';
            if (result.control == 'baonue_hp') {
              player.loseHp();
            } else {
              player.loseMaxHp();
            }
          }
        },
        xajh_shenlv: {
          trigger: {
            player: ['judgeEnd', 'chooseToCompareAfter', 'compareMultipleAfter'],
            target: ['chooseToCompareAfter', 'compareMultipleAfter']
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          filter(event, player) {
            if (event.name == 'judge') {
              return event.result && event.result.bool == false;
            } else {
              if (event.targets && event.targets.length) return false;
              if (player == event.player) {
                return event.num1 > event.num2;
              } else {
                return event.num1 < event.num2;
              }
            }
          },
          content() {
            var next = player.chooseUseTarget({ name: 'juedou' });
            next.set('prompt', get.prompt2('xajh_shenlv'));
          }
        },
        xajh_shejian: {
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseJieshuBegin'
          },
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          content() {
            'step 0';
            var check = game.hasPlayer(function (current) {
              return player.canUse({ name: 'juedou' }, current) && get.effect(current, { name: 'juedou' }, player, player) > 0;
            });
            player.chooseCard('h').set('check', check).set('prompt', get.prompt2('xajh_shejian')).ai = function (card) {
              if (!_status.event.check) return -1;
              var topcard = ui.cardPile.childNodes[0];
              if (card.number <= topcard.number) return -1;
              return 6 - get.value(card);
            };
            'step 1';
            if (result && result.bool) {
              game.log(player, '对', '#g牌堆', '发起比点');
              player.lose(result.cards);
              event.card1 = result.cards[0];
              event.card2 = get.cards(1)[0];
              event.card2.discard();
              player.$compare(event.card1, player, event.card2);
              game.log(player, '的比点牌为', event.card1);
              game.log('#g牌堆', '的比点牌为', event.card2);
              if (event.num1 > event.num2) {
                player.popup('胜');
                game.log(player, '与', '#g牌堆', '比点', '#g胜利');
                event.insert(lib.skill.xajh_shenlv.content, {
                  player: player
                });
              } else if (event.num1 < event.num2) {
                player.popup('负');
                game.log(player, '与', '#g牌堆', '比点', '#g失败');
              } else {
                player.popup('平');
                game.log(player, '与', '#g牌堆', '比点', '#g平局');
              }
            }
          }
        },
        xajh_liangu: {
          trigger: {
            global: ['gameStart'],
            player: ['enterGame', 'phaseZhunbeiBegin']
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          filter(event, player) {
            return game.hasPlayer(function (current) {
              if (current.hasSkill('xajh_liangu_unmark')) return false;
              return !current.hasSkill('xajh_liangu_mark');
            });
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('xajh_liangu'), function (card, player, target) {
              return !target.hasSkill('xajh_liangu_mark') && !target.hasSkill('xajh_liangu_unmark');
            }).
            set('ai', function (target) {
              return -get.attitude(_status.event.player, target);
            });
            'step 1';
            if (result.targets?.length) {
              var target = result.targets[0];
              target.addSkill('xajh_liangu_mark');
            }
          },
          subSkill: {
            unmark: {
              mark: true,
              marktext2: '炼',
              markimage: 'extension/金庸群侠传/image/icon/jy_icon_jiechugu.jpg',
              intro: {
                content: '不能再成为【炼蛊】的目标.'
              }
            },
            mark: {
              onremove(player, skill) {
                delete player.storage[skill];
              },
              trigger: {
                player: 'useCardEnd'
              },
              mark: true,
              popup: false,
              forced: true,
              content() {
                var damage = 0;
                player.addMark('xajh_liangu_mark', 1);
                var num = trigger.card.number;
                if (num && num % 5 == 0) damage++;
                if (player.countMark('xajh_liangu_mark') % 5 == 0) damage++;
                if (damage > 0) {
                  player.damage(damage, 'jy_du', 'nosource');
                  game.playJY(['xajh_liangu1', 'xajh_liangu2'].randomGet()); //炼蛊子技能配音
                }
              },
              marktext2: '蛊',
              markimage: 'extension/金庸群侠传/image/icon/jylianguavatar.jpg',
              mark: true,
              intro: {
                content: '你已中苗家蛊术<br><img style=width:165px src=extension/金庸群侠传/image/avatar/jy_avatar_liangu.jpg>'
              }
            }
          }
        },
        xajh_zhuanxue: {
          init(player, skill) {
            player.storage[skill] = false;
          },
          mark: true,
          marktext2: '血',
          markimage: 'extension/金庸群侠传/image/icon/jyzhuanxue.jpg',
          intro: {
            content: 'limited'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['dying']
          },
          _priority: 1,
          filter(event, player) {
            if (player.storage.xajh_zhuanxue) return false;
            return game.hasPlayer(function (current) {
              return !current.hasSkill('xajh_liangu_mark');
            });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget([1, 2], get.prompt2('xajh_zhuanxue'), function (card, player, target) {
              return target.hasSkill('xajh_liangu_mark');
            }).
            set('ai', function (target) {
              return get.attitude(player, trigger.player);
            });
            'step 1';
            if (result.bool) {
              event.target = result.targets.slice(0);
              event.target.push(trigger.player);
              for (var i = 0; i < result.targets.length; i++) {
                result.targets[i].removeSkill('xajh_liangu_mark');
                result.targets[i].addSkill('xajh_liangu_unmark');
              }
              trigger.player.recover(result.targets.length);
              player.storage.xajh_zhuanxue = true;
              player.awakenSkill('xajh_zhuanxue');
            }
          }
        },
        xajh_suoyu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = [];
          },
          marktext2: '索',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_suoyu.jpg',
          intro: {
            mark(dialog, storage, player) {
              if (!storage.length) return '无';
              var list = [];
              for (var i = 0; i < storage.length; i++) {
                list.push([get.type(storage[i], 'trick'), '', storage[i]]);
              }
              dialog.addAuto([list, 'vcard']);
            },
            markcount(storage, player) {
              return storage.length;
            }
          },
          trigger: {
            global: 'useCardEnd'
          },
          forced: true,
          filter(event, player) {
            if (get.type(event.card) != 'trick') return false;
            if (!player.countCards('h')) return false;
            if (player.getStorage('xajh_suoyu').includes(event.card.name)) return false;
            if (event.player == player) return false;
            if (event.cards) return event.cards && event.cards.filterInD('od').length;
            return false;
          },
          content() {
            'step 0';
            event.togive = trigger.cards.filterInD('od');
            player.chooseCard('h', '索欲<br>是否选择一张手牌交给' + get.translation(trigger.player) + '？', '你获得' + get.translation(event.togive)).set('ai', function (card) {
              var att1 = get.attitude(player, trigger.player);
              if (att1 > 0) {
                return 1;
              }
              return -1;
            });
            'step 1';
            if (result.cards?.length) {
              player.give(result.cards[0], trigger.player, true);
              //trigger.player.gain(result.cards[0],player,'give');
              player.gain(event.togive, 'gain2', 'log');
              player.markAuto('xajh_suoyu', [trigger.card.name]);
            }
          }
        },
        xajh_zongqing: {
          subSkill: {
            end: {
              trigger: {
                global: ['phaseJieshuBegin', 'dieEnd']
              },
              forced: true,
              popup: false,
              silent: true,
              filter(event, player) {
                return event.player == player.storage.xajh_zongqing_add;
              },
              content() {
                player.removeSkill('xajh_zongqing_add');
              }
            },
            add: {
              forced: true,
              popup: false,
              silent: true,
              group: 'xajh_zongqing_end',
              onremove(player) {
                delete player.storage.xajh_zongqing_add;
                delete player.storage.xajh_zongqing_type;
              },
              intro: {
                content: ''
              },
              trigger: {
                global: 'useCard'
              },
              filter(event, player) {
                if (event.player != player.storage.xajh_zongqing_add) return false;
                if (get.type(event.card) != player.storage.xajh_zongqing_type) return false;
                if (_status.currentPhase != event.player) return false;
                var info = get.info(event.card);
                if (info.allowMultiple == false) return false;
                if (event.targets && !info.multitarget) {
                  if (event.targets.includes(player)) return false;
                  if (!lib.filter.targetEnabled2(event.card, event.player, player)) return false;
                  return _status.event.name == 'phaseUse' || _status.event.getParent('phaseUse').name == 'phaseUse';
                }
                return false;
              },
              content() {
                'step 0';
                trigger.player.
                chooseBool('纵情<br>是否令' + get.translation(player) + '成为' + get.translation(trigger.card) + '的目标？').
                set('ai', function () {
                  var player = _status.event.player;
                  var targets0 = _status.event.targets0;
                  if (get.effect(targets0, trigger.card, player, player) > 0) return true;
                  return false;
                }).
                set('targets0', player);
                'step 1';
                if (result.bool) {
                  trigger.player.line(player, 'green');
                  game.log(player, '额外成为了', '#y' + get.translation(trigger.card), '的目标');
                  trigger.targets.addArray([player]);
                } else {
                  event.finish();
                }
              }
            }
          },
          trigger: {
            player: 'useCard'
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          forced: true,
          filter(event, player) {
            if (_status.currentPhase != player) return false;
            if (player.hasSkill('xajh_zongqing_add')) return false;
            var info = get.info(event.card);
            if (info.allowMultiple == false) return false;
            if (event.targets && !info.multitarget) {
              if (
              game.hasPlayer(function (current) {
                return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
              }))
              {
                return _status.event.name == 'phaseUse' || _status.event.getParent('phaseUse').name == 'phaseUse';
              }
            }
            return false;
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('xajh_zongqing'), function (card, player, target) {
              var trigger = _status.event.getTrigger();
              var player = _status.event.player;
              if (trigger.targets.includes(target)) return false;
              return lib.filter.targetEnabled2(trigger.card, player, target);
            }).
            set('ai', function (target) {
              var trigger = _status.event.getTrigger();
              var player = _status.event.player;
              if (get.attitude(player, target) < 0) return -1;
              return get.effect(target, trigger.card, player, player);
            });
            'step 1';
            if (result.bool) {
              event.targets = result.targets;
              var target = result.targets[0];
              player.storage.xajh_zongqing_add = event.targets[0];
              player.storage.xajh_zongqing_type = get.type(trigger.card);
              player.addSkill('xajh_zongqing_add');
            } else {
              event.finish();
            }
            'step 2';
            if (event.targets) {
              trigger.targets.addArray(event.targets);
            }
          }
        },
        //SP东方不败突破技能:
        xajh_feizhen: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'damageBegin1'
          },
          forced: true,
          filter(event, player) {
            var cards = player.getExpansions('xajh_feizhen');
            if (!cards.length) return false;
            return true;
          },
          content() {
            'step 0';
            const cards2 = player.getExpansions('xajh_feizhen');
            const count = Math.min(2, cards2.length);
            const att = get.attitude(player, trigger.player);
            const filterDamage = function () {
              if (att > 0) return false;
              if (
              trigger.player.hasSkillTag('filterDamage', null, {
                player: player,
                card: trigger.card
              }))

              return false;
              const eff2 = get.damageEffect(trigger.player, player, player, trigger.nature);
              if (eff2 <= 0) return false;
              return true;
            }();
            const filterLoseHp = function () {
              const eff2 = get.damageEffect(trigger.player, player, player, trigger.nature);
              const eff3 = get.effect(trigger.player, { name: 'losehp' }, player, player);
              return eff3 > eff2;
            }();
            const prompt = '是否发动【飞针】?<br><span style="color: #FF7F00">你可以移除一枚"针",令此伤害改为失去等量体力.<br>或移除两枚"针"令此伤害加倍.</span>';
            player.
            chooseCardButton(cards2, [1, count], prompt).
            set('ai', function (button) {
              const player = _status.event.player;
              const evt = _status.event;
              const filterDamage = evt.filterDamage;
              const filterLoseHp = evt.filterLoseHp;
              if (!filterDamage && !filterLoseHp) return -1;
              if (!ui.selected.buttons.length) return 1;
              if (!filterDamage && filterLoseHp && ui.selected.buttons.length == 1) return -1;
              return 1;
            }).
            set('filterDamage', filterDamage).
            set('filterLoseHp', filterLoseHp);
            'step 1';
            if (result.bool) {
              const links = result.links;
              if (links.length == 2) {
                trigger.num += trigger.num;
              } else {
                trigger.player.loseHp(trigger.num);
                trigger.cancel();
              }
              player.loseToDiscardpile(links);
            }
          },
          intro: {
            content: 'expansion',
            markcount: 'expansion'
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          },
          marktext: '针',
          group: ['xajh_feizhen_discard'],
          subSkill: {
            discard: {
              trigger: {
                global: 'discardAfter'
              },
              forced: true,
              filter(event, player) {
                if (!event.cards) return false;
                if (event.player != player) {
                  if (!player.inRange(event.player)) return false;
                }
                var togain = event.cards.filter((card) => card.suit == 'diamond' && get.position(card) == 'd');
                return togain.length;
              },
              content() {
                'step 0';
                'step 1';
                var togain = trigger.cards.filter((card) => card.suit == 'diamond' && get.position(card) == 'd');
                if (togain.length) {
                  player.addToExpansion(togain, 'gain2').gaintag.add('xajh_feizhen');
                }
              }
            }
          }
        },
        xajh_shanbian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          derivation: ['xajh_nvgong', 'xajh_zongquan'],
          init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = true;
          },
          trigger: {
            player: ['phaseZhunbeiBefore']
          },
          mark: true,
          zhuanhuanji: true,
          marktext: '☯',
          intro: {
            content(storage, player, skill) {
              if (player.storage.xajh_shanbian == true) return '<b>转换技.锁定技.</b>回合开始时,<span class="bluetext">阴:性别改为女,获得〖女红〗.</span>阳:性别改为男,获得〖纵权〗.';
              return '<b>转换技.锁定技.</b>回合开始时,阴:性别改为女,获得〖女红〗.<span class="bluetext">阳:性别改为男,获得〖纵权〗.</span>';
            }
          },
          forced: true,
          content() {
            if (player.storage.xajh_shanbian == true) {
              if (!player.hasSex('female')) {
                player.sex = 'female';
                game.log(player, '将性别变更为', '#y女');
              }
              if (!player.hasSkill('xajh_nvgong')) player.addAdditionalSkills('xajh_shanbian', ['xajh_nvgong']);
            } else {
              if (!player.hasSex('male')) {
                player.sex = 'male';
                game.log(player, '将性别变更为', '#y男');
              }
              if (!player.hasSkill('xajh_zongquan')) player.addAdditionalSkills('xajh_shanbian', ['xajh_zongquan']);
            }
            player.changeZhuanhuanji('xajh_shanbian');
          }
        },
        xajh_nvgong: {
          subSkill: {
            heart: {
              charlotte: true
            },
            diamond: {
              charlotte: true
            },
            club: {
              charlotte: true
            },
            spade: {
              charlotte: true
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          position: 'h',
          filter(event, player) {
            var filter = ['heart', 'diamond', 'club', 'spade'];
            var bool = filter.some((suit) => player.countCards('h', { suit: suit }) > 0 && !player.hasSkill('xajh_nvgong_' + suit));
            return bool;
          },
          filterCard(card, player) {
            var suit = card.suit;
            return !player.hasSkill('xajh_nvgong_' + suit);
          },
          selectCard: 1,
          check(card) {
            var player = _status.event.player;
            if (card.suit == 'heart') {
              var eff = game.hasPlayer(function (current) {
                return get.attitude(player, current) > 0 && current.hasSex('male');
              });
              if (eff) return 9 - get.value(card);
            }
            return 6 - get.value(card);
          },
          content() {
            'step 0';
            var suit = cards[0].suit;
            player.addTempSkill('xajh_nvgong_' + suit);
            if (suit == 'club') {
              event.suit = 'diamond';
            } else if (suit == 'spade') {
              event.suit = 'heart';
            } else if (suit == 'heart') {
              event.suit = 'club';
            } else if (suit == 'diamond') {
              event.suit = 'spade';
            } else {
              event.suit = 'heart';
            }
            event.suit2 = suit;
            'step 1';
            var card = get.randomCard(function (card) {
              return card.suit == event.suit;
            });
            if (card) {
              player.gain(card, 'gain2', 'log');
            } else {
              card = game.createCard(lib.inpile.slice(0).randomGet(), event.suit);
              player.gain(card, 'gain2', 'log');
            }
            'step 2';
            if (event.suit2 == 'heart') {
              var targets = game.filterPlayer(function (current) {
                return current.hasSex('male');
              });
              if (!targets.length) {
                event.finish();
              }
            } else {
              event.finish();
            }
            'step 3';
            player.
            chooseTarget('xajh_nvgong:是否令一名男性角色摸一张牌?', function (card, player, target) {
              return target.hasSex('male');
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            });
            'step 4';
            if (result.targets?.length) {
              result.targets[0].draw();
            }
          },
          ai: {
            order: 1,
            result: {
              player: 1
            }
          }
        },
        xajh_zongquan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filterCard() {
            return lib.filter.cardDiscardable.apply(this, arguments);
          },
          usable: 1,
          check(card) {
            return 5 - get.value(card);
          },
          filterTarget(card, player, target) {
            return true;
          },
          content() {
            var suit = cards[0].suit;
            var equip1 = get.cardPile(function (card) {
              return get.subtype(card) == 'equip1' && card.suit == suit;
            }, 'field');
            if (equip1) {
              var owner = get.owner(equip1);
              if (owner) {
                var cardss = game.createCard(equip1);
                target.equip(cardss, true).set('delay', true);
              } else {
                target.equip(equip1, true).set('delay', true);
              }
            } else {
              var list = get.inpile('equip1');
              var cardss = game.createCard(list.randomGet(), cards[0].suit);
              target.equip(cardss, true).set('delay', true);
            }
            var jiu = get.cardPile(function (card) {
              return card.name == 'jiu';
            });
            if (!jiu) {
              jiu = game.createCard('jiu');
            }
            target.gain(jiu, 'log', 'gain2');
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                if (!target.getEquip(1)) return 2;
                return 1;
              }
            }
          }
        },
        //新SP东方不败结束
        //旧纵权:
        xajh_zongquan_old: {
          audio: 'xajh_zongquan',
          enable: 'phaseUse',
          filterCard: true,
          usable: 1,
          check(card) {
            return 5 - get.value(card);
          },
          filterTarget(card, player, target) {
            return true;
          },
          content() {
            var equip1 = get.cardPile(function (card) {
              return get.subtype(card) == 'equip1' && card.suit == cards[0].suit;
            }, 'field');
            if (equip1) {
              var owner = get.owner(equip1);
              if (owner) {
                var cardss = game.createCard(equip1);
                target.equip(cardss, true).set('delay', true);
              } else {
                target.equip(equip1, true).set('delay', true);
              }
            } else {
              var list = get.inpile('equip1');
              var cardss = game.createCard(list.randomGet(), cards[0].suit);
              target.equip(cardss, true).set('delay', true);
            }
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                if (!target.getEquip(1)) return 1;
                return 0;
              }
            }
          }
        },
        //旧女红
        xajh_nvgong_old: {
          content_draw() {
            'step 0';
            player.
            chooseTarget('女红:是否令一名男性角色摸一张牌?', function (card, player, target) {
              return target.hasSex('male');
            }).
            set('ai', function (target) {
              return get.attitude(player, target);
            });
            'step 1';
            if (result.targets?.length) {
              result.targets[0].draw();
            }
          },
          subSkill: {
            heart: {
            },
            diamond: {
            },
            club: {
            },
            spade: {
            }
          },
          audio: 'xajh_nvgong',
          enable: 'phaseUse',
          position: 'h',
          filter(event, player) {
            var filter = ['heart', 'diamond', 'club', 'spade'];
            for (var i = 0; i < filter.length; i++) {
              if (player.countCards('h', { suit: filter[i] }) > 0 && !player.hasSkill('xajh_nvgong_old_' + filter[i])) return true;
            }
            return false;
          },
          filterCard(card, player) {
            return player.hasSkill('xajh_nvgong_old_' + card.suit) ? false : true;
          },
          selectCard: 1,
          check(card) {
            var player = _status.event.player;
            if (card.suit == 'heart') {
              var eff = game.hasPlayer(function (current) {
                return get.attitude(player, current) > 0 && current.hasSex('male');
              });
              if (eff) return 9 - get.value(card);
            }
            return 6 - get.value(card);
          },
          content() {
            'step 0';
            var suit = cards[0].suit;
            player.addTempSkill('xajh_nvgong_old_' + suit);
            if (suit == 'club') {
              event.suit = 'diamond';
            } else if (suit == 'spade') {
              event.suit = 'heart';
            } else if (suit == 'heart') {
              event.suit = 'club';
            } else if (suit == 'diamond') {
              event.suit = 'spade';
            } else {
              event.suit = 'heart';
            }
            'step 1';
            var card = get.randomCard(function (card) {
              return card.suit == event.suit;
            });
            if (card) {
              player.gain(card, 'gain2', 'log');
            } else {
              card = game.createCard(lib.inpile.slice(0).randomGet(), event.suit);
              player.gain(card, 'gain2', 'log');
            }
            'step 2';
            if (cards[0].suit == 'heart') {
              var targets = game.filterPlayer(function (current) {
                return current.hasSex('male');
              });
              if (targets.length) {
                event.insert(lib.skill.xajh_nvgong_old.content_draw, {
                  player: player
                });
              }
            }
          },
          ai: {
            order: 1,
            result: {
              player: 1
            }
          }
        },
        //旧嬗变
        xajh_shanbian_old: {
          audio: 'xajh_shanbian',
          derivation: ['xajh_nvgong_old', 'xajh_zongquan_old'],
          init(player) {
            player.storage.xajh_shanbian_old = true;
          },
          trigger: {
            player: ['phaseZhunbeiBefore']
          },
          forced: true,
          async content(event, trigger, player) {
            if (player.storage.xajh_shanbian_old == true) {
              player.storage.xajh_shanbian_old = false;
              if (!player.hasSex('female')) {
                player.sex = 'female';
                game.log(player, '将性别变更为', '#y女');
              }
              if (!player.hasSkill('xajh_nvgong_old')) player.addAdditionalSkills('xajh_shanbian_old', ['xajh_nvgong_old']);
            } else {
              player.storage.xajh_shanbian_old = true;
              if (!player.hasSex('male')) {
                player.sex = 'male';
                game.log(player, '将性别变更为', '#y男');
              }
              if (!player.hasSkill('xajh_zongquan_old')) player.addAdditionalSkills('xajh_shanbian_old', ['xajh_zongquan_old']);
            }
          }
        },
        //旧飞针
        xajh_feizhen_old: {
          audio: 'xajh_feizhen',
          trigger: {
            global: 'damageBegin1'
          },
          forced: true,
          filter(event, player) {
            return player.storage.xajh_feizhen_old && player.storage.xajh_feizhen_old.length;
          },
          content() {//QQQ
            'step 0';
            var num = Math.min(2, player.storage.xajh_feizhen_old.length);
            var str = '是否发动【飞针】?<br><span style="color: #FF7F00">你可以移除一枚"针",令此伤害改为失去等量体力.<br>或移除两枚"针"令此伤害加倍.</span>';
            player.chooseCardButton(player.storage.xajh_feizhen_old, [1, num], str).set('ai', function (button) {
              var att = get.attitude(player, trigger.player);
              if (att > 0) return -1;
              var bool33 = trigger.player.hasSkillTag('filterDamage', null, {
                player: player,
                card: trigger.card
              });
              var bool = trigger.player.hasSkillTag('maixie_hp') || trigger.player.hasSkillTag('maixie') || trigger.player.hasSkillTag('maixie_defend');
              var bool2 = trigger.player.hasSkillTag('maihp');
              if (bool2 && (bool || bool33)) return -1;
              if (bool2 && player.storage.xajh_feizhen_old < 2) return -1;
              if (ui.selected.buttons.length == 0 && (bool || bool33)) return 1;
              if (ui.selected.buttons.length == 1 && (bool || bool33)) return -1;
              if (ui.selected.buttons.length == 1 && !(bool || bool33) && !bool2) return 1;
              return -1;
            });
            'step 1';
            if (result.bool) {
              if (result.links.length == 2) {
                trigger.num += trigger.num;
              } else {
                trigger.player.loseHp(trigger.num);
                trigger.cancel();
              }
              var links = result.links;
              for (var i = 0; i < links.length; i++) {
                player.storage.xajh_feizhen_old.remove(links[i]);
              }
              if (!player.storage.xajh_feizhen_old.length) {
                player.unmarkSkill('xajh_feizhen_old');
              } else {
                player.markSkill('xajh_feizhen_old');
              }
              player.$throw(links);
              game.log(player, '移去了', links);
              game.cardsDiscard(links);
            }
          },
          ai: {
            damageBonus: true
          },
          init(player) {
            player.storage.xajh_feizhen_old = [];
          },
          marktext2: '针',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_feizhen.jpg',
          intro: {
            content: 'cards',
            onunmark(storage, player) {
              if (storage && storage.length) {
                player.$throw(storage, 1000);
                game.cardsDiscard(storage);
                game.log(storage, '被置入了弃牌堆');
                storage.length = 0;
              }
            }
          },
          gainable: true,
          forced: true,
          group: ['xajh_feizhen_old_discard'],
          subSkill: {
            discard: {
              audio: 2,
              trigger: {
                player: 'discardAfter'
              },
              forced: true,
              filter(event, player) {
                if (Array.isArray(event.cards)) for (var i of event.cards) {
                  if (i.suit == 'diamond' && get.position(i) == 'd') {
                    return true;
                  }
                }
                return false;
              },
              content() {
                'step 0';
                'step 1';
                var cards = [];
                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                  if (i.suit == 'diamond' && get.position(i) == 'd') {
                    cards.push(i);
                  }
                }
                if (cards.length) {
                  player.storage.xajh_feizhen_old = player.storage.xajh_feizhen_old.concat(cards);
                  player.markSkill('xajh_feizhen_old');
                  game.cardsGotoSpecial(cards);
                  game.log(player, '将', cards, '置于侠客牌上作为<针>');
                }
              }
            }
          }
        },
        //平一指
        //新岐黄
        xajh_qihuang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'chooseToUse',
          filter(event, player) {
            return event.type == 'dying' && event.dying && event.dying.hp <= 0 && player.getCards('h').length;
          },
          filterTarget(card, player, target) {
            return target == _status.event.dying;
          },
          filterCard: true,
          complexCard: true,
          selectCard: -1,
          selectTarget: -1,
          content() {
            target.useCard({ name: 'jiu' }, target);
          },
          ai: {
            order: 0.5,
            skillTagFilter(player) {
              return player.getCards('h').length;
            },
            save: true,
            result: {
              player(player) {
                if (get.attitude(player, _status.event.dying) <= 0) return -1;
                if (player.getCards('h').length > 2) return -1;
                return 1;
              }
            }
          }
        },
        //旧岐黄
        xajh_qihuang_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'dying'
          },
          _priority: 7,
          check(event, player) {
            var cards = player.getCards('h');
            if (cards.length < player.hp) return false;
            if (cards.length > 3) return false;
            if (Array.isArray(cards)) for (var i of cards) {
              if (get.value(i) > 7 || get.tag(i, 'recover') >= 1) return false;
            }
            return get.attitude(player, event.player) > 0;
          },
          logTarget: 'player',
          filter(event, player) {
            if (!event.player.isDying()) return false;
            if (!event.player.canUse({ name: 'jiu' }, event.player)) return false;
            return player.countCards('h') > 0;
          },
          content() {
            'step 0';
            var cards = player.getCards('h');
            player.discard(cards);
            'step 1';
            trigger.player.useCard({ name: 'jiu' }, trigger.player);
          }
        },
        //新天道//霸天20220605
        xajh_tiandao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['dieAfter', 'dyingAfter']
          },
          filter(event, player) {
            if (event.name == 'die') {
              var bool = game.hasPlayer(function (current) {
                return current.isDamaged();
              });
              if (!bool) return false;
            }
            return event.player[event.name == 'die' ? 'isDead' : 'isAlive']();
          },
          forced: true,
          content() {
            'step 0';
            var filterTarget, filterAi, str;
            if (trigger.name == 'die') {
              filterTarget = function (card, player, target) {
                return target.isDamaged();
              };
              filterAi = function (target) {
                var player = _status.event.player;
                var effect = get.recoverEffect(target, player, player);
                var num = target.getDamagedHp();
                if (num > 1) effect = 2 * effect;
                return effect;
              };
              str = '令一名已受伤的角色回复2点体力';
            } else {
              filterTarget = function (card, player, target) {
                var trigger = _status.event.getTrigger();
                if (target == trigger.player) return false;
                return true;
              };
              filterAi = function (target) {
                var player = _status.event.player;
                var effect = get.attitude(player, target);
                if (target.hp == 1) effect = 2 * effect;
                return -effect;
              };
              str = '令另一名角色失去一点体力.';
            }
            player.chooseTarget(get.prompt('xajh_tiandao'), str, filterTarget).set('ai', filterAi);
            'step 1';
            if (result.bool) {
              if (trigger.name == 'die') {
                var num2 = 2;
                var num = result.targets[0].getDamagedHp();
                if (num < 2) num2 = 1;
                result.targets[0].recover(num2);
              } else {
                result.targets[0].loseHp();
              }
            }
          }
        },
        //旧天道
        xajh_tiandao_old: {
          audio: 'xajh_tiandao',
          trigger: {
            global: ['dying', 'useCardToBefore']
          },
          _priority: 10,
          filter(event, player) {
            if (player.countCards('h') == 0) return false;
            if (event.name == 'dying') {
              if (!event.player.isDying()) return false;
              return game.hasPlayer(function (current) {
                return current != event.player && current.isDamaged();
              });
            } else {
              if (!event.targets) return false;
              if (event.card.name != 'tao' && event.card.name != 'jiu') return false;
              return event.target.isDying();
            }
            return false;
          },
          forced: true,
          content() {
            'step 0';
            player.chooseCardTarget({
              position: 'h',
              filterCard: lib.filter.cardDiscardable,
              filterTarget(card, player, target) {
                if (trigger.name == 'dying') {
                  if (target == trigger.player) return false;
                  return target.isDamaged();
                } else {
                  return target != trigger.target;
                }
                return false;
              },
              ai1(card) {
                return 6 - get.value(card);
              },
              ai2(target) {
                var trigger = _status.event.getTrigger();
                if (trigger.name == 'dying') return get.recoverEffect(target, _status.event.player, _status.event.player);
                return -get.recoverEffect(target, _status.event.player, _status.event.player);
              },
              prompt: get.prompt('xajh_tiandao_old'),
              prompt2: lib.translate.xajh_tiandao_old_info
            });
            'step 1';
            if (result.targets?.length) {
              trigger.name == 'dying' ? result.targets[0].recover() : result.targets[0].loseHp();
              player.discard(result.cards);
            }
          }
        },
        xajh_qugang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          filterTarget(card, player, target) {
            return target.countCards('h') > 0 && target != player;
          },
          filterCard(card, player, target) {
            return true;
          },
          selectCard: 1,
          selectTarget: [1, 1],
          discard: false,
          lose: false,
          content() {
            'step 0';
            targets[0].
            chooseCard('h', 1, '曲高:选择一张手牌展示', true).
            set('ai', function (card) {
              if (card.suit == _status.event.cardxsuit) return 2;
              return 1;
            }).
            set('cardxsuit', cards[0].suit);
            'step 1';
            if (result.cards?.length) {
              player.$compare(cards[0], targets[0], result.cards[0]);
              game.log(player, '展示了', cards[0]);
              game.log(targets[0], '展示了', result.cards[0]);
              if (cards[0].suit == result.cards[0].suit) {
                targets[0].draw(2);
              } else {
                targets[0].chooseToDiscard(2, 'he', '弃置两张牌,或令' + get.translation(player) + '摸两张牌').set('ai', function (card) {
                  return -1;
                });
              }
            }
            'step 2';
            if (result.bool == false) player.draw(2);
          },
          ai: {
            order: 9,
            result: {
              target: 0.5
            }
          }
        },
        xajh_heming: {
          audio: 'ext:金庸群侠传/peiyin:2',
          content_use(player) {
            'step 0';
            var list = [];
            if (
            game.hasPlayer(function (current) {
              return player.canUse('sha', current);
            }))
            {
              list.push(['基本', '', 'sha']);
            }
            for (var i of lib.inpile_nature) {
              if (
              game.hasPlayer(function (current) {
                return player.canUse({ name: 'sha', nature: i }, current);
              }))
              {
                list.push(['基本', '', 'sha', i]);
              }
            }
            if (
            game.hasPlayer(function (current) {
              return player.canUse('tao', current);
            }))
            {
              list.push(['基本', '', 'tao']);
            }
            if (
            game.hasPlayer(function (current) {
              return player.canUse('jiu', current);
            }))
            {
              list.push(['基本', '', 'jiu']);
            }
            if (list.length) {
              player.chooseButton(['是否视为使用一张基本牌？', [list, 'vcard']]).set('ai', function (button) {
                var player = _status.event.player;
                var card = { name: button.link[2], nature: button.link[3] };
                if (card.name == 'tao') {
                  if (player.hp == 1 || player.hp == 2 && !player.hasShan() || player.needsToDiscard()) {
                    return 5;
                  }
                  return 1;
                }
                if (card.name == 'sha') {
                  if (
                  game.hasPlayer(function (current) {
                    return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                  }))
                  {
                    if (card.nature == 'fire') return 2.95;
                    if (card.nature == 'thunder' || card.nature == 'ice') return 2.92;
                    return 2.9;
                  }
                  return 0;
                }
                if (card.name == 'jiu') {
                  return 0.5;
                }
                return 0;
              });
            } else {
              event.finish();
            }
            'step 1';
            if (result && result.bool && result.links[0]) {
              var card = { name: result.links[0][2], nature: result.links[0][3] };
              player.chooseUseTarget(card, true, false);
            }
          },
          trigger: { global: 'phaseDrawEnd' },
          filter(event, player) {
            if (event.player == player) return false;
            return event.player.countCards('h') >= 2;
          },
          logTarget: 'player',
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          content() {
            'step 0';
            event.suitss = [];
            event.num = 0;
            var list = [];
            trigger.player.countCards('h', function (cardx) {
              list.push(cardx.suit);
            });
            event.list = list;
            'step 1';
            var choose = Math.floor(Math.random() * event.list.length);
            var controls = ['heart', 'diamond', 'club', 'spade'];
            var str = '请声明一种花色';
            player.
            chooseControl(controls, ui.create.dialog(str, 'hidden')).
            set('ai', function () {
              return _status.event.choose;
            }).
            set('choose', choose);
            'step 2';
            if (result.control) {
              player.popup(result.control);
              player.line(trigger.player, 'green');
              game.log(player, '声明了', result.control);
              event.suitss.add(result.control);
              event.list.remove(result.control);
              event.num++;
              if (event.num < 2) event.goto(1);
            }
            'step 3';
            var fun;
            if (event.suitss.length == 1) {
              fun = function (card) {
                var suit = card.suit;
                return suit == event.suitss[0];
              };
            } else {
              fun = function (card) {
                var suit = card.suit;
                if (!event.suitss.includes(suit)) return false;
                if (ui.selected.cards) {
                  if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                    if (i.suit == suit) return false;
                  }
                }
                return true;
              };
            }
            trigger.player.chooseCard(2, 'h', '是否展示两张手牌组成花色相同的牌?视为使用一张基本牌.', fun).set('ai', function (card) {
              return 1;
            });
            'step 4';
            if (result.bool) {
              trigger.player.showCards(result.cards);
              event.insert(lib.skill.xajh_heming.content_use, {
                player: trigger.player
              });
            }
          }
        },
        xajh_xunfang: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          discard: false,
          lose: false,
          delay: false,
          filter(event, player) {
            if (!player.countCards('he', { suit: 'heart' })) return false;
            return game.hasPlayer(function (current) {
              return current != player && current.hasSex('female');
            });
          },
          filterCard(card, player) {
            return card.suit == 'heart';
          },
          filterTarget(card, player, target) {
            if (!target.hasSex('female')) return false;
            if (target.countCards('h') == 0) return false;
            return player != target;
          },
          check(card) {
            return 5 - get.value(card);
          },
          content() {
            'step 0';
            player.give(cards, target);
            //target.gain(cards,player,'giveAuto');
            'step 1';
            if (target.countGainableCards(player, 'h')) {
              player.gainPlayerCard(target, 'h', true, 'visibleMove');
            } else event.finish();
            'step 2';
            if (result.links?.length) {
              if (result.links[0].suit != 'heart') player.draw();
            }
          },
          ai: {
            result: {
              target: 0.5
            },
            basic: {
              order: 9
            }
          }
        },
        xajh_aotu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          subSkill: {
            draw: {
              mark: true,
              marktext2: '傲',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_aotu.jpg',
              intro: {
                content: '结束阶段,你选一名体力值不大于你的其他角色,直到你下个回合开始,每当其失去或获得牌后,若其手牌数与你相等,你摸一张牌.'
              },
              forced: true,
              onremove(player) {
                delete player.storage.xajh_aotu;
              },
              audio: 'xajh_aotu',
              trigger: {
                global: ['gainEnd', 'loseEnd']
              },
              filter(event, player) {
                if (event.player == player) return false;
                if (event.player != player.storage.xajh_aotu) return false;
                var num1 = event.player.countCards('h');
                var num2 = player.countCards('h');
                if (num1 != num2) return false;
                if (event.name == 'gain') return true;
                if (event.name == 'lose') {
                  return event.hs && event.hs.length;
                }
                return false;
              },
              content() {
                player.draw();
              }
            }
          },
          trigger: {
            player: 'phaseJieshuBegin'
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('xajh_aotu'), function (card, player, target) {
              return target != player && player.hp >= target.hp;
            }).
            set('ai', function (target) {
              return 1;
            });
            'step 1';
            if (result.targets?.length) {
              player.storage.xajh_aotu = result.targets[0];
              player.addTempSkill('xajh_aotu_draw', { player: 'phaseZhunbeiBefore' });
            }
          }
        },
        //新论杯 霸天 20220627
        xajh_lunbei: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['xajh_lunbei1', 'xajh_lunbei2'],
          subSkill: {
            disable1: {
              mark: true,
              charlotte: true,
              intro: {
                content: '本轮已发动xajh_lunbei①'
              }
            },
            disable2: {
              mark: true,
              charlotte: true,
              intro: {
                content: '本轮已发动xajh_lunbei②'
              }
            }
          }
        },
        xajh_lunbei1: {
          audio: 'xajh_lunbei',
          trigger: {
            global: 'dying'
          },
          _priority: 1,
          filter(event, player) {
            if (player.hasSkill('xajh_lunbei_disable1')) return false;
            if (!event.player.canUse({ name: 'jiu' }, event.player, false)) return false;
            if (!event.player.isDying()) return false;
            return game.hasPlayer(function (current) {
              var es = current.getDiscardableCards(player, 'e', function (i) {
                return get.subtype(i) == 'equip2';
              });
              return es.length;
            });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('xajh_lunbei1', trigger.player), function (card, player, target) {
              var es = target.getDiscardableCards(player, 'e', function (i) {
                return get.subtype(i) == 'equip2';
              });
              return es.length;
            }).
            set('ai', function (target) {
              if (!_status.event.aibool) return 0;
              var player = _status.event.player;
              var es = target.getDiscardableCards(player, 'e', function (i) {
                return get.subtype(i) == 'equip2';
              });
              var sgn = get.sgnAttitude(player, target);
              var bool = es.some(function (i) {
                return get.equipValue(i, target) * sgn <= 0;
              });
              if (bool) return 1;
              return -1;
            }).
            set('aibool', get.attitude(player, trigger.player) > 0);
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
              player.
              discardPlayerCard(event.target, 1, 'e', true).
              set('filterButton', function (button) {
                if (get.subtype(button.link) != 'equip2') return false;
                return true;
              }).
              set('boolline', true);
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              player.addTempSkill('xajh_lunbei_disable1', 'roundStart');
              event.type = 'dying';
              trigger.player.useCard({ name: 'jiu' }, trigger.player);
            }
          }
        },
        xajh_lunbei2: {
          audio: 'xajh_lunbei',
          trigger: {
            global: 'phaseUseBegin'
          },
          _priority: 1,
          filter(event, player) {
            if (player.hasSkill('xajh_lunbei_disable2')) return false;
            if (!event.player.canUse({ name: 'jiu' }, event.player, false)) return false;
            return game.hasPlayer(function (current) {
              var es = current.getDiscardableCards(player, 'e', function (i) {
                return get.subtype(i) == 'equip1';
              });
              return es.length;
            });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('xajh_lunbei2', trigger.player), function (card, player, target) {
              var es = target.getDiscardableCards(player, 'e', function (i) {
                return get.subtype(i) == 'equip1';
              });
              return es.length;
            }).
            set('ai', function (target) {
              if (!_status.event.aibool) return 0;
              var player = _status.event.player;
              var es = target.getDiscardableCards(player, 'e', function (i) {
                return get.subtype(i) == 'equip1';
              });
              var sgn = get.sgnAttitude(player, target);
              var bool = es.some(function (i) {
                return get.equipValue(i, target) * sgn <= 0;
              });
              if (bool) return 1;
              return -1;
            }).
            set('aibool', get.attitude(player, trigger.player) > 0);
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
              player.
              discardPlayerCard(event.target, 1, 'e', true).
              set('filterButton', function (button) {
                if (get.subtype(button.link) != 'equip1') return false;
                return true;
              }).
              set('boolline', true);
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              player.addTempSkill('xajh_lunbei_disable2', 'roundStart');
              trigger.player.useCard({ name: 'jiu' }, trigger.player);
              var suit = result.links[0].suit;
              trigger.player.addTempSkill('xajh_lunbei_type');
              if (!trigger.player.storage.xajh_lunbei_type) trigger.player.storage.xajh_lunbei_type = [];
              trigger.player.storage.xajh_lunbei_type.push([player, suit]);
            }
          }
        },
        xajh_lunbei_type: {
          trigger: {
            source: 'damageSource',
            player: 'useCardAfter'
          },
          marktext: '杯',
          intro: {
            content: 'xajh_lunbei对象'
          },
          forced: true,
          popup: false,
          nopop: true,
          charlotte: true,
          objFunc: {
            heart(player, source, target) {
              if (player.isDamaged()) player.recover();
            },
            diamond(player, source, target) {
              if (source.isIn()) {
                source.draw(2);
                player.line(source);
              }
            },
            spade(player, source, target) {
              if (target.isIn()) {
                var cardx = get.randomCard(function (card) {
                  if (get.type(card, null, false) != 'delay') return false;
                  if (get.color(card, false) != 'black') return false;
                  return player.canUse(card, target, false);
                });
                if (cardx) player.useCard(cardx, target, 'noai');
              }
            },
            club(player, source, target) {
              var gains = [];
              var card1 = get.randomCard(function (card) {
                if (card.suit != 'club') return false;
                if (get.type(card, null, false) != 'trick') return false;
                return true;
              });
              var card2 = get.randomCard(function (card) {
                if (card.suit != 'club') return false;
                if (lib.jy_anqiList.indexOf(card.name) == -1) return false;
                return true;
              });
              if (card1) gains.push(card1);
              if (card2) gains.push(card2);
              if (gains.length) player.gain(gains, 'log', 'gain2');
            }
          },
          onremove(player, skill) {
            delete player.storage[skill];
          },
          content() {
            'step 0';
            if (trigger.card && trigger.card.name == 'sha') {
              if (trigger.name == 'useCard') {
                player.removeSkill('xajh_lunbei_type');
                event.finish();
                return;
              } else {
                if (trigger.num < 1) {
                  event.finish();
                  return;
                }
                var history = player.getHistory('useCard', function (evt) {
                  return evt.card.name == 'sha';
                });
                if (!history.length) {
                  event.finish();
                  return;
                }
                if (history[0].card != trigger.card) {
                  event.finish();
                  return;
                }
              }
            } else {
              event.finish();
              return;
            }
            event.targetLists = player.storage.xajh_lunbei_type.slice(0);
            'step 1';
            if (event.targetLists.length) {
              var targetList = event.targetLists.shift();
              if (lib.skill.xajh_lunbei_type.objFunc[targetList[1]]) {
                lib.skill.xajh_lunbei_type.objFunc[targetList[1]](player, targetList[0], trigger.player);
              }
              event.redo();
            }
          }
        },
        //旧论杯
        xajh_lunjiu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['dying', 'phaseUseBegin']
          },
          _priority: 1,
          filter(event, player) {
            if (!event.player.canUse({ name: 'jiu' }, event.player)) return false;
            if (event.name == 'dying') {
              if (!event.player.isDying()) return false;
            }
            return game.hasPlayer(function (current) {
              if (event.name == 'dying') {
                return current.getEquip(2);
              } else return current.getEquip(1);
            });
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('xajh_lunjiu'), function (card, player, target) {
              var es = target.getDiscardableCards(player, 'e');
              var trigger = _status.event.getTrigger();
              for (var i = 0; i < es.length; i++) {
                if (trigger.name == 'phaseUse') {
                  if (get.subtype(es[i]) == 'equip1') {
                    return true;
                  }
                } else if (get.subtype(es[i]) == 'equip2') {
                  return true;
                }
              }
              return false;
            }).
            set('ai', function (target) {
              var trigger = _status.event.getTrigger();
              var player = _status.event.player;
              var att1 = get.attitude(player, target);
              var att2 = get.attitude(player, trigger.player);
              if (trigger.name == 'dying' && att2 > 0) {
                if (att1 <= 0) return 1;
                if (att1 > 0) return 0.5;
              } else if (att1 < 0 && att2 > 0) return 0.2;
              return -1;
            });
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
              var str = '选择一张';
              str += trigger.name == 'phaseUse' ? '武器' : '防具';
              str += '牌弃置之';
              var type = trigger.name == 'phaseUse' ? 'equip1' : 'equip2';
              player.
              discardPlayerCard(str, event.target, 1, 'e', true).
              set('filterButton', function (button) {
                if (get.subtype(button.link) != type) return false;
                return true;
              }).
              set('ai', function (button) {
                return 1;
              });
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              trigger.player.useCard({ name: 'jiu' }, trigger.player);
            }
          }
        },
        xajh_yaojiu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'useCardAfter' },
          filter(event, player) {
            if (event.card.name != 'jiu') return false;
            if (event.player.hp >= event.player.maxHp) {
              return player.countCards('h', { color: 'black' }) > 0;
            } else return player.countCards('h') > 0;
            return false;
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseToDiscard(get.prompt('xajh_yaojiu'), 1, 'h', '是否弃置一张牌?<br><br><li><span style="color: #FF0000">若为红色' + get.translation(trigger.player) + '回复一点体力.</span><br><br><li><span style="color: #FF00FF">若为黑色' + get.translation(trigger.player) + '失去一点体力.</span>', function (card, player) {
              if (trigger.player.hp >= trigger.player.maxHp && get.color(card) == 'red') return false;
              return lib.filter.cardDiscardable.apply(this, arguments);
            }).
            set('ai', function (card) {
              var att = get.attitude(player, trigger.player);
              if (att > 0) {
                if (get.color(card) == 'red') {
                  return 6 - get.value(card);
                }
                return -1;
              }
              if (att < 0) {
                if (get.color(card) == 'black') {
                  if (trigger.player.hp == 1) return 9 - get.value(card);
                  return 7 - get.value(card);
                }
                return -1;
              }
              return -1;
            });
            'step 1';
            if (result.cards?.length) {
              if (get.color(result.cards[0], player) == 'red') {
                trigger.player.recover();
              } else if (get.color(result.cards[0], player) == 'black') {
                trigger.player.loseHp();
              }
            }
          }
        },
        xajh_renru: {
          mod: {
            globalTo(from, to, current) {
              var cards = to.getExpansions('xajh_renru');
              if (!to.hasSkill('xajh_xuechi') && cards.length) return current + 1;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: ['damageEnd', 'loseEnd'] },
          forced: true,
          filter(event, player) {
            if (event.name == 'damage' && event.num > 0) return true;
            if (event.name == 'lose') {
              if (_status.currentPhase != player) {
                return event.es && event.es.length;
              }
            }
            return false;
          },
          content() {
            'step 0';
            var num = 0;
            if (trigger.name == 'damage' && trigger.num > 0) num += trigger.num;
            if (trigger.name == 'lose') {
              if (_status.currentPhase != player) {
                num += trigger.es.length;
              }
            }
            var cards = get.cards(num);
            player.addToExpansion(cards, player, 'gain2', 'log').gaintag.add('xajh_renru');
          },
          marktext2: '忍',
          markimage: 'extension/金庸群侠传/image/icon/jy_avatar_renru.jpg',
          intro: {
            content: 'expansion',
            markcount: 'expansion'
          },
          onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
          }
        },
        xajh_qushi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          derivation: ['xajh_xuechi'],
          trigger: { player: 'addToExpansionAfter' },
          forced: true,
          filter(event, player) {
            return !player.storage.xajh_qushi && player.getExpansions('xajh_renru').length >= 5;
          },
          init(player, skill) {
            player.storage[skill] = false;
          },
          content() {
            'step 0';
            player.$fullscreenpop('去势', 'fire');
            game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/金庸群侠传/character/illustration/xajh_newlinpingzhi.jpg');
            player.loseMaxHp();
            'step 1';
            if (player.hasEnabledSlot('equip2')) player.disableEquip('equip2');
            if (player.hasEnabledSlot('equip3')) player.disableEquip('equip3');
            if (player.hasEnabledSlot('equip4')) player.disableEquip('equip4');
            player.storage.xajh_qushi = true;
            player.update();
            player.addSkills('xajh_xuechi');
            player.awakenSkill('xajh_qushi');
          }
        },
        xajh_xuechi: {
          group: ['xajh_xuechi_chai', 'xajh_xuechi_jiu'],
          audio: 'ext:金庸群侠传/peiyin:2'
        },
        xajh_xuechi_chai: {
          enable: 'chooseToUse',
          subSkill: { backup: {} },
          filter(event, player) {
            var cardx = player.getCards('hesx', function (card) {
              if (card.hasGaintag('xajh_renru')) {
                return get.color(card) == 'red';
              } else {
                var type = get.subtype(card);
                return type == 'equip3' || type == 'equip4';
              }
            });
            var bool = cardx.some(function (i) {
              var vcard = {
                name: 'guohe',
                cards: [i],
                suit: i.suit,
                number: i.number
              };
              return event.filterCard(vcard, player, event);
            });
            return bool;
          },
          hiddenCard(player, name) {
            if (name != 'guohe') return false;
            var cardx = player.getCards('hesx', function (card) {
              if (card.hasGaintag('xajh_renru')) {
                return get.color(card) == 'red';
              } else {
                var type = get.subtype(card);
                return type == 'equip3' || type == 'equip4';
              }
            });
            if (!cardx.length) return false;
            return true;
          },
          chooseButton: {
            dialog(event, player) {
              var card1 = player.getCards('x', function (card) {
                if (card.hasGaintag('xajh_renru')) {
                  return get.color(card) == 'red';
                }
                return false;
              });
              var card2 = player.getCards('hes', function (card) {
                var type = get.subtype(card);
                return type == 'equip3' || type == 'equip4';
              });
              var str = '雪耻:你可以将一张红色<辱>或坐骑牌当【见招拆招】使用.';
              var dialog = ui.create.dialog(game.jy_translateNamex(str), 'hidden');
              if (card1.length) {
                dialog.add('辱');
                dialog.add(card1);
              }
              if (card2.length) {
                dialog.add('坐骑牌');
                dialog.add(card2);
              }
              return dialog;
            },
            filter(button, player) {
              var card = button.link;
              if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return false;
              var evt = _status.event.parent;
              var vcard = {
                name: 'guohe',
                cards: [card],
                suit: card.suit,
                number: card.number
              };
              return evt.filterCard(vcard, player, evt);
            },
            check(button) {
              var player = _status.event.player;
              return 1;
            },
            backup(links, player) {
              var skill = _status.event.buttoned;
              var vcard = {
                name: 'guohe',
                cards: [links[0]],
                suit: links[0].suit,
                number: links[0].number
              };
              return {
                audio: 'xajh_xuechi',
                selectCard: -1,
                position: 'hesx',
                filterCard(card, player) {
                  return card == lib.skill.xajh_xuechi_chai_backup.card;
                },
                viewAs: vcard,
                card: links[0]
              };
            },
            prompt(links, player) {
              var str = '选择【见招拆招】(' + get.translation(links[0]) + ')的目标';
              return game.jy_translateNamex(str);
            }
          },
          ai: {
            order: 10,
            result: {
              player(player) {
                return 1;
              }
            }
          }
        },
        xajh_xuechi_jiu: {
          enable: 'chooseToUse',
          subSkill: { backup: {} },
          filter(event, player) {
            var cardx = player.getCards('hesx', function (card) {
              if (card.hasGaintag('xajh_renru')) {
                return get.color(card) == 'black';
              } else {
                var type = get.subtype(card);
                return type == 'equip2';
              }
            });
            var bool = cardx.some(function (i) {
              var vcard = {
                name: 'jiu',
                cards: [i],
                suit: i.suit,
                number: i.number
              };
              return event.filterCard(vcard, player, event);
            });
            return bool;
          },
          chooseButton: {
            dialog(event, player) {
              var card1 = player.getCards('x', function (card) {
                if (card.hasGaintag('xajh_renru')) {
                  return get.color(card) == 'black';
                }
                return false;
              });
              var card2 = player.getCards('hes', function (card) {
                var type = get.subtype(card);
                return type == 'equip2';
              });
              var dialog = ui.create.dialog('雪耻:你可以将防具牌或黑色<辱>当【酒】使用.', 'hidden');
              if (card1.length) {
                dialog.add('辱');
                dialog.add(card1);
              }
              if (card2.length) {
                dialog.add('防具牌');
                dialog.add(card2);
              }
              return dialog;
            },
            check(button) {
              var player = _status.event.player;
              return 1;
            },
            filter(button, player) {
              var card = button.link;
              if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return false;
              var evt = _status.event.parent;
              var vcard = {
                name: 'jiu',
                cards: [card],
                suit: card.suit,
                number: card.number
              };
              return evt.filterCard(vcard, player, evt);
            },
            backup(links, player) {
              var skill = _status.event.buttoned;
              var vcard = {
                name: 'jiu',
                cards: [links[0]],
                suit: links[0].suit,
                number: links[0].number
              };
              return {
                audio: 'xajh_xuechi',
                selectCard: -1,
                position: 'hesx',
                filterCard(card, player) {
                  return card == lib.skill.xajh_xuechi_jiu_backup.card;
                },
                viewAs: vcard,
                card: links[0]
              };
            },
            prompt(links, player) {
              return '选择 酒(' + get.translation(links[0]) + ')的目标';
            }
          },
          hiddenCard(player, name) {
            if (name != 'jiu') return false;
            var cardx = player.getCards('hesx', function (card) {
              if (card.hasGaintag('xajh_renru')) {
                return get.color(card) == 'black';
              } else {
                var type = get.subtype(card);
                return type == 'equip2';
              }
            });
            if (!cardx.length) return false;
            return true;
          },
          ai: {
            order(name, player) {
              var event = _status.event;
              if (event.type == 'dying') {
                return get.order({ name: 'jiu' }) + 1;
              }
              return get.order({ name: 'jiu' });
            },
            skillTagFilter(player, tag, target) {
              var cardx = player.getCards('hesx', function (card) {
                if (card.hasGaintag('xajh_renru')) {
                  return get.color(card) == 'black';
                } else {
                  var type = get.subtype(card);
                  return type == 'equip2';
                }
              });
              if (!cardx.length) return false;
              if (player != target) return false;
            },
            save: true,
            result: {
              player(player, target) {
                var event = _status.event;
                if (_status.event.dying) {
                  if (get.attitude(player, _status.event.dying) <= 0) return -1;
                }
                return lib.card.jiu.ai.result.target(player, player);
              }
            }
          }
        },
        //新暗袭 霸天20230636
        xajh_anxi3: {
          audio: 'xajh_anxi',
          trigger: {
            global: 'roundStart'
          },
          forced: true,
          charlotte: true,
          popup: false,
          content() {
            player.storage.xajh_anxi = [];
            player.unmarkAuto('xajh_anxi', []);
          }
        },
        xajh_anxi2: {
          audio: 'xajh_anxi',
          trigger: {
            global: ['addJudgeBefore', 'linkBefore', 'turnOverBefore', 'disableEquipBefore']
          },
          charlotte: true,
          forced: true,
          popup: false,
          filter(event, player) {
            var name = event.name;
            if (name == 'turnOver') {
              return !event.player.isTurnedOver();
            } else if (name == 'link') {
              return !event.player.isLinked();
            } else if (name == 'addJudge') {
              var card = event.card;
              if (typeof card == 'string') card = { name: card };
              if (card.name == 'jydiy_yungongliaoshang') return false;
              return !event.player.hasJudge(card.name);
            } else if (name == 'disableEquip') {
              return !event.player.hasDisabledSlot(event.pos);
            } else {
              return false;
            }
          },
          content() {
            trigger.set('xajh_anxi', true);
          }
        },
        xajh_anxi: {
          group: ['xajh_anxi2', 'xajh_anxi3'],
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: ['addJudgeAfter', 'linkAfter', 'turnOverAfter', 'disableEquipAfter']
          },
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          intro: {
            content: '本轮已在$时机发动过技能'
          },
          logTarget: 'player',
          filter(event, player) {
            if (!event.xajh_anxi) return false;
            if (event.player == player) return false;
            var name = event.name;
            var storage = player.getStorage('xajh_anxi');
            if (storage.includes(name)) return false;
            if (name == 'turnOver') {
              return event.player.isTurnedOver();
            } else if (name == 'link') {
              return event.player.isLinked();
            } else if (name == 'addJudge') {
              var card = event.card;
              if (typeof card == 'string') card = { name: card };
              if (card.name == 'jydiy_yungongliaoshang') return false;
              return event.player.hasJudge(card.name);
            } else if (name == 'disableEquip') {
              return event.player.hasDisabledSlot(event.pos);
            } else {
              return false;
            }
          },
          content() {
            'step 0';
            player.markAuto('xajh_anxi', [trigger.name]);
            trigger.player.damage(player);
            'step 1';
            if (trigger.player.countGainableCards(player, 'e')) {
              player.gainPlayerCard('e', trigger.player);
            }
            'step 2';
            if (trigger.player.hasJudge('lebu')) {
              var miji = get.cardPile(function (cardx) {
                if (!lib.jy_mijiList.includes(cardx.name)) return false;
                return true;
              });
              if (miji) player.gain(miji, 'log', 'gain2');
            }
          }
        },
        xajh_qianxing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: ['chooseToRespondBegin', 'chooseToUseBegin'] },
          filter(event, player) {
            if (event.responded) return false;
            if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
            if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
            if (event.parent.name != 'sha') return false;
            if (!player.countCards('hs')) return false;
            return true;
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
            var bool = lib.skill.xajh_qianxing.checkx(trigger, player);
            event.target = trigger.parent.player;
            player.
            chooseCard('hs', get.prompt2('xajh_qianxing', event.target)).
            set('ai', function (card) {
              if (!_status.event.boolai) return -1;
              var player = _status.event.player;
              var target = _status.event.sourcex;
              var att = get.attitude(player, target);
              var type = get.type(card, 'trick');
              var count = target.countGainableCards(player, 'h', function (cardx) {
                return get.type(cardx, 'trick') != type;
              });
              if (att > 0) {
                return count;
              }
              return 7 - get.value(card) + count;
            }).
            set('boolai', bool).
            set('sourcex', event.target);
            'step 1';
            if (result.cards?.length) {
              event.typePlayer = get.type(result.cards[0], 'trick');
              //target.gain(result.cards[0],player,'give','log');
              player.give(result.cards[0], target, true);
            } else {
              event.finish();
            }
            'step 2';
            if (target.countGainableCards(player, 'h')) {
              player.
              gainPlayerCard(target, 'h', true, 'visibleMove').
              set('ai', function (button) {
                var typePlayer = _status.event.typePlayer;
                var player = _status.event.player;
                var val = get.buttonValue(button);
                if (get.attitude(player, get.owner(button.link)) > 0) val = -val;
                if (get.type(button.link, 'trick') != typePlayer) val += 15;
                return val;
              }).
              set('boolline', true).
              set('typePlayer', event.typePlayer);
            } else {
              player.popup('悲剧!');
              event.finish();
            }
            'step 3';
            if (result.links?.length) {
              var type = get.type(result.links[0], target);
              if (type != event.typePlayer) {
                player.popup('潜行', 'fire');
                player.say(['如影随行,神鬼莫测!', '哈哈!你找不到我!', '猎杀的时候到了!'].randomGet());
                trigger.untrigger();
                trigger.set('responded', true);
                trigger.result = { bool: true, card: { name: 'shan' } };
              } else {
                player.say(['你!!怎么知道我在这!', '被看穿了吗...'].randomGet());
                player.popup('潜行失败!');
              }
            }
          },
          ai: {
            effect: {
              target(card, player, target, current) {
                if (get.tag(card, 'respondShan')) {
                  var nh = target.countCards('h');
                  var mh = player.countCards('h');
                  if (!nh || !mh) return;
                  if (nh && mh) return 0.8;
                }
              }
            }
          }
        },
        xajh_anxi_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'useCardToBefore' },
          check(event, player) {
            return get.effect(event.target, { name: 'sha' }, player, player) > 0;
          },
          filter(event, player) {
            if (event.target == player) return false;
            if (get.type(event.card) != 'delay') return false;
            return player.canUse({ name: 'sha' }, event.target, false);
          },
          logTarget: 'target',
          content() {
            'step 0';
            var next = player.useCard({ name: 'sha' }, trigger.target);
            next.animate = false;
            next.card.xajh_anxi_old = true;
            'step 1';
            var list = player.getHistory('sourceDamage', function (evt) {
              return evt.card && evt.card.xajh_anxi_old && evt.getParent('xajh_anxi_old') == event && evt.player == trigger.target;
            });
            if (list.length && trigger.target.isIn() && trigger.target.countGainableCards(player, 'e')) {
              player.gainPlayerCard('暗袭:是否获得其中一张装备牌？', 'e', trigger.target).set('boolline', true);
            }
          }
        },
        xajh_weijian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player) {
            player.storage.xajh_weijian = false;
          },
          filter(event, player) {
            if (event.player == player) return false;
            return !player.storage.xajh_weijian;
          },
          check(event, player) {
            var att = get.attitude(player, event.player);
            if (att < 0) {
              return (
                game.filterPlayer(function (current) {
                  return current != event.player && current.inRange(event.player);
                }).length > 2);

            }
            return false;
          },
          trigger: {
            global: 'phaseZhunbeiBegin'
          },
          logTarget: 'player',
          content() {
            'step 0';
            player.storage.xajh_weijian = true;
            player.awakenSkill('xajh_weijian');
            event.source = trigger.player;
            ///////////////////////
            event.targets = game.
            filterPlayer(function (current) {
              return current != trigger.player && current.inRange(trigger.player);
            }).
            sortBySeat();
            player.line(event.targets, 'fire');
            'step 1';
            if (source.isAlive() && lib.config.extension_金庸群侠传_jiexiantupo) {

              //player.restoreSkill('xajh_weijian');
            }if (!source.isIn()) {
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
              target.addTempClass('target');
              var bool = target.canUse({ name: 'juedou' }, source);
              if (bool) {
                target.
                chooseControl().
                set('choiceList', ['视为对' + get.translation(source) + '使用一张【比武】', '受到' + get.translation(player) + '一点伤害']).
                set('ai', function () {
                  if (
                  get.effect(
                    _status.event.source0,
                    {
                      name: 'juedou'
                    },
                    _status.event.player,
                    _status.event.player
                  ) > 0)

                  return 0;
                  if (_status.event.player.hp == 1) return 0;
                  return 1;
                }).
                set('player0', player).
                set('source0', source);
              } else {
                event._result = { index: 1 };
              }
            } else {
              if (source.isAlive() && lib.config.extension_金庸群侠传_jiexiantupo) {
                player.restoreSkill('xajh_weijian');
              }
              event.finish();
            }
            'step 2';
            if (result.index == 0) {
              target.say(['勾结魔教,死有余辜!', '正邪不两立!', '五岳剑派的叛徒,受死吧!', '你正邪不分,其罪当诛!'].randomGet());
              target.useCard({ name: 'juedou' }, source, 'noai');
            } else {
              target.say(['左盟主,怎可如此？', '滥杀无辜,和魔教又有何区别？', '他只是一时糊涂,何必赶尽杀绝？'].randomGet());
              target.damage(player);
            }
            event.goto(1);
          }
        },
        xajh_linhan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'dieBefore'
          },
          _priority: 100,
          forced: true,
          filter(event, player) {
            if (event.nouseskill == true) return false;
            if (player.countCards('h') == 0) return false;
            if (event.player.identity == 'zhu') return false;
            return event.source && event.source.isIn();
          },
          content() {
            'step 0';
            player.chooseCardTarget({
              position: 'h',
              filterCard: lib.filter.cardDiscardable,
              filterTarget(card, player, target) {
                return target != trigger.source && target != trigger.player;
              },
              ai1(card) {
                return 10 - get.value(card);
              },
              ai2(target, player) {
                var fan = false;
                if (trigger.player.identity == 'fan') fan = true;
                var att = get.attitude(_status.event.player, target);
                var att1 = get.attitude(_status.event.player, trigger.source);
                if (fan == true && att > 0 && att1 < 0) return att;
                return 0;
              },
              prompt: get.prompt('xajh_linhan')
            });
            'step 1';
            if (result.bool) {
              player.discard(result.cards);
              player.line(result.targets, 'green');
              if (trigger.source) {
                trigger.source.say('为何如此寒气逼人？');
              }
              trigger.source = result.targets[0];
            } else {
              event.finish();
            }
          }
        },
        xajh_bingpai: {
          group: ['xajh_bingpai_remove'],
          subSkill: {
            off: {
            },
            remove: {
              trigger: {
                global: 'gameStart',
                player: 'enterGame'
              },
              popup: false,
              forced: true,
              filter(event, player) {
                return player.identity != 'zhu';
              },
              content() {
                player.removeSkill('xajh_bingpai');
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          zhuSkill: true,
          forced: true,
          trigger: {
            player: 'useCardAfter'
          },
          filter(event, player) {
            if (player.hasSkill('xajh_bingpai_off')) return false;
            if (!player.hasZhuSkill('xajh_bingpai')) return false;
            var group = 'wei';
            if (lib.jy_changeSkill) group = 'jy_ming';
            return game.hasPlayer(function (current) {
              if (group != current.group) return false;
              return current != player;
            });
          },
          content() {
            'step 0';
            var type = get.type(trigger.card, 'trick');
            event.cardType = type;
            var group = 'wei';
            if (lib.jy_changeSkill) group = 'jy_ming';
            event.targets = game.
            filterPlayer(function (current) {
              if (group != current.group) return false;
              return current != player;
            }).
            sortBySeat();
            //测试中
            //game.log(event.targets);
            'step 1';
            if (targets.length) {
              var target = targets.shift();
              event.target = target;
              if (!target.isIn()) {
                event.redo();
                return;
              }
              target.addTempClass('target');
              target.chooseToUse({
                sourcex: player,
                cardType: event.cardType,
                filterCard(card, player, event) {
                  if (get.type(card, 'trick') != _status.event.cardType) return false;
                  return lib.filter.filterCard(card, player, event);
                },
                prompt: '并派:是否使用一张' + get.translation(event.cardType) + '牌',
                ai1(card) {
                  return get.attitude(_status.event.player, _status.event.sourcex);
                }
              });
            } else {
              event.finish();
            }
            'step 2';
            if (result.bool) {
              target.line(player);
              player.draw();
              player.addTempSkill('xajh_bingpai_off');
            }
            event.goto(1);
          }
        },
        xajh_zhongsu: {
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player) {
            player.storage.xajh_zhongsu = [];
          },
          mark: true,
          marktext2: '数',
          markimage: 'extension/金庸群侠传/image/icon/jyzhongshu.jpg',
          intro: {
            content(storage) {
              if (!storage.length) {
                return '未记录牌的点数.';
              } else {
                var str = '已记录点数为' + get.cnNumber(storage[0]);
                for (var i = 1; i < storage.length; i++) {
                  str += '、' + get.cnNumber(storage[i]);
                }
                str += '的牌';
                return str;
              }
            }
          },
          group: 'xajh_zhongsu_cancel',
          subSkill: {
            cancel: {
              trigger: {
                target: 'useCardToBefore'
              },
              audio: 'xajh_zhongsu',
              forced: true,
              _priority: 15,
              check(event, player) {
                return get.effect(event.target, event.card, event.player, player) < 0;
              },
              filter(event, player) {
                if (event.player == player) return false;
                var number = event.card.number;
                if (typeof number != 'number') return false;
                if (!player.storage.xajh_zhongsu.includes(number)) return false;
                return get.type(event.card, 'trick') == 'trick';
              },
              content() {
                trigger.cancel();
                var number = trigger.card.number;
                game.log(player, '因记录了点数' + get.cnNumber(number) + '取消成为', trigger.card, '的目标');
              }
            }
          },
          trigger: {
            player: 'useCard',
            target: 'useCardToBefore'
          },
          forced: true,
          filter(event, player) {
            var number = event.card.number;
            if (typeof number != 'number') return false;
            if (player.storage.xajh_zhongsu.includes(number)) return false;
            return get.type(event.card) == 'basic';
          },
          content() {
            var number = trigger.card.number;
            player.markAuto('xajh_zhongsu', [number]);
            game.log(player, '记录了点数' + get.cnNumber(number) + '');
          },
          ai: {
            effect: {
              target(card, player, target) {
                var number = card.number;
                if (typeof number != 'number') return;
                if (get.type(card) == 'basic' && !target.storage.xajh_zhongsu.includes(number)) return [1, 0.2];
                if (target.storage.xajh_zhongsu.includes(number) && target != player && get.type(card, 'trick') == 'trick') return 'zeroplayertarget';
              },
              player(card, player, target) {
                var number = card.number;
                if (typeof number != 'number') return;
                if (get.type(card) == 'basic' && !player.storage.xajh_zhongsu.includes(number)) return [1, 0.2];
              }
            }
          }
        },
        xajh_qinjian: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          usable: 1,
          position: 'h',
          complexCard: true,
          filter(event, player) {
            return player.countCards('h') >= 3;
          },
          filterCard(card, player, target) {
            var num = card.number;
            var cards = ui.selected.cards.slice(0);
            if (cards.length) {
              cards.sort(function (a, b) {
                return a.number - b.number;
              });
              if (Array.isArray(cards)) for (var i of cards) {
                if (num == i.number) {
                  return false;
                }
              }
              if (cards.length == 2) {
                var num0 = cards[0].number,
                  num1 = cards[1].number;
                if (num0 + num1 == num + num) return true;
                if (num1 - num0 == num0 - num) return true;
                if (num - num1 == num1 - num0) return true;
                return false;
              }
            }
            return true;
          },
          selectCard: 3,
          check(card) {
            return 20 - get.value(card);
          },
          filterTarget(card, player, target) {
            var car = ui.selected.cards;
            var ji = false;
            var ou = false;
            for (var i = 0; i < car.length; i++) {
              var numm = car[i].number;
              if (numm % 2 == 1 && ji == false) {
                ji = true;
              }
              if (numm % 2 == 0 && ou == false) {
                ou = true;
              }
            }
            if (ji == true && ou == true) {
              return true;
            } else if (ji == true && ou == false) {
              return true;
            } else if (ji == false && ou == true) {
              if (target.hp >= target.maxHp) return false;
              return true;
            }
          },
          selectTarget(target, card, player) {
            var car = ui.selected.cards;
            var ji = false;
            var ou = false;
            for (var i = 0; i < car.length; i++) {
              var numm = car[i].number;
              if (numm % 2 == 1 && ji == false) {
                ji = true;
              }
              if (numm % 2 == 0 && ou == false) {
                ou = true;
              }
            }
            if (ji == true && ou == true) {
              return -1;
            } else if (ji == true && ou == false) {
              return [1, 3];
            } else if (ji == false && ou == true) {
              return [1, 3];
            }
          },
          multitarget: true,
          multiline: true,
          content() {
            'step 0';
            var car = cards;
            var ji = false;
            var ou = false;
            for (var i = 0; i < car.length; i++) {
              var numm = car[i].number;
              if (numm % 2 == 1 && ji == false) {
                ji = true;
              }
              if (numm % 2 == 0 && ou == false) {
                ou = true;
              }
            }
            event.ji = ji;
            event.ou = ou;
            if (ji == true && ou == true) {
              for (var i of targets) {
                i.loseHp();
              }
            } else if (ji == true && ou == false) {
              for (var i of targets) {
                i.damage(1, player);
              }
            } else if (ji == false && ou == true) {
              for (var i of targets) {
                i.recover();
              }
            }
            'step 1';
            var count = 0;
            var ji = event.ji;
            var ou = event.ou;
            if (ji == true && ou == true) {
              for (var i of targets) {
                count = 3;
              }
            } else if (ji == true && ou == false) {
              for (var i of targets) {
                if (i.hp == 1) count++;
              }
            } else if (ji == false && ou == true) {
              for (var i of targets) {
                if (!i.isDamaged()) count++;
              }
            }
            if (count) player.draw(count);
          },
          ai: {
            order: 11,
            result: {
              target(player, target) {
                var car = ui.selected.cards;
                var ji = false;
                var ou = false;
                for (var i = 0; i < car.length; i++) {
                  var numm = car[i].number;
                  if (numm % 2 == 1 && ji == false) {
                    ji = true;
                  }
                  if (numm % 2 == 0 && ou == false) {
                    ou = true;
                  }
                }
                if (ji == true && ou == true) {
                  return -get.recoverEffect(target, player, player);
                } else if (ji == true && ou == false) {
                  return get.damageEffect(target, player);
                } else if (ji == false && ou == true) {
                  return get.recoverEffect(target, player, player);
                }
              }
            },
            threaten: 1
          }
        },
        xajh_jianhao: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'useCard1'
          },
          firstDo: true,
          _priority: 100,
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            const bool = lib.inpile.some(function (i) {
              const info = get.info({ name: i });
              if (info.subtype != 'equip1') return false;
              if (!info.skills) return false;
              return info.skills.some(function (i) {
                const skill = lib.skill[i];
                if (!skill) return false;
                return skill.trigger;
              });
            });
            return bool;
          },
          forced: true,
          content() {
            'step 0';
            const list = lib.inpile.
            filter(function (i) {
              const info = get.info({ name: i });
              if (info.subtype != 'equip1') return false;
              if (!info.skills) return false;
              return info.skills.some(function (i) {
                const skill = lib.skill[i];
                if (!skill) return false;
                return skill.trigger;
              });
            }).
            map((i) => ['武器', '', i]);
            const prompt = '<img style=width:150px heigh=38px src=extension/金庸群侠传/image/button/jy_button_dugujiujian.jpg><br>是否选择一张武器牌获得此武器的技能？直到此杀结算完毕:';
            player.chooseButton([prompt, [list, 'vcard']], true).set('ai', function (button) {
              return Math.random();
            });
            'step 1';
            if (result.links?.length) {
              const cardName = result.links[0][2];
              const cardx = { name: cardName };
              game.log(player, '声明了', cardx);
              const info = get.info(cardx);
              if (info.skills) {
                player.addAdditionalSkills('xajh_jianhao', info.skills);
                const next = game.createEvent('xajh_jianhao_clear');
                next.player = player;
                event.next.remove(next);
                trigger.after.push(next);
                next.setContent(function () {
                  player.removeAdditionalSkills('xajh_jianhao');
                  game.log(player, '失去了武器特效');
                });
              } else {
                player.removeAdditionalSkills('xajh_jianhao');
              }
            }
          }
        },
        xajh_jianhao_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          init(player) {
            player.storage.xajh_jianhao = [];
          },
          marktext2: '豪',
          markimage: 'extension/金庸群侠传/image/icon/jyjianhao.jpg',
          mark: true,
          intro: {
            content(storage) {
              if (!storage.length) {
                return '未声明过武器牌';
              } else {
                var str = '已声明过' + get.translation(storage[0]);
                for (var i = 1; i < storage.length; i++) {
                  str += '、' + get.translation(storage[i]);
                }
                str += '.';
                return str;
              }
            }
          },
          trigger: {
            player: 'useCard1'
          },
          filter(event, player) {
            if (player.getEquip(1)) return false;
            if (event.card.name != 'sha') return false;
            var list = get.inpile('equip1');
            for (var i = 0; i < list.length; i++) {
              var card = { name: list[i] };
              var info = get.info(card);
              if (info.skills && !player.storage.xajh_jianhao.includes(list[i])) {
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            var list1 = [];
            var list = get.inpile('equip1');
            for (var i = 0; i < list.length; i++) {
              var card = { name: list[i] };
              var info = get.info(card);
              if (info.skills && !player.storage.xajh_jianhao.includes(list[i])) {
                list1.push(list[i]);
              }
            }
            for (var i = 0; i < list1.length; i++) {
              list1[i] = ['武器', '', list1[i]];
            }
            if (list1.length) {
              player.chooseButton(['<img style=width:150px heigh=38px src=extension/金庸群侠传/image/button/jy_button_dugujiujian.jpg><br>选择一张武器牌获得此武器的技能,直到此杀结算完毕:', [list1, 'vcard']], true).set('ai', function (button) {
                return Math.random();
              });
            } else {
              event.finish();
            }
            'step 1';
            if (result.links?.length) {
              var card = { name: result.links[0][2] };
              var name = result.links[0][2];
              player.storage.xajh_jianhao.push(name);
              game.log(player, '声明了', card);
              player.markSkill('xajh_jianhao');
              //player.showCards(get.translation(player)+'声明了'+get.translation(name),card);
              var info = get.info(card);
              if (info.skills) {
                player.addAdditionalSkills('xajh_jianhao', info.skills, true);
                var next = game.createEvent('xajh_jianhao_clear');
                next.player = player;
                next.skills = info.skills;
                event.next.remove(next);
                trigger.after.push(next);
                next.setContent(function () {
                  event.skills.forEach((element) => {
                    player.removeAdditionalSkills('xajh_jianhao', element);
                  });
                  game.log(player, '失去了武器特效');
                });
              }
            }
          }
        },
        xajh_zuixia: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['xajh_zuixia_use'],
          subSkill: {
            use: {
              trigger: { player: 'useCard' },
              forced: true,
              popup: false,
              filter(event, player) {
                return event.card && event.card.name == 'jiu' && _status.currentPhase == player;
              },
              content() {
                player.addTempSkill('xajh_zuixia_buff', 'phaseJieshuBegin');
              }
            },
            buff: {
              mark: true,
              marktext2: '醉',
              markimage: 'extension/金庸群侠传/image/icon/jyzuixia.jpg',
              intro: {
                content: '你于出牌阶段使用酒后,你于此阶段造成的伤害均+1.'
              },
              trigger: { source: 'damageBegin1' },
              filter(event, player) {
                return event.notLink();
              },
              popup: false,
              forced: true,
              content() {
                trigger.num++;
              },
              ai: {
                effect: {
                  player(card, player, target, current, isLink) {
                    if (!target) return;
                    if (isLink) return;
                    if (!get.tag(card, 'damage')) return;
                    if (
                    target.hasSkillTag('filterDamage', null, {
                      player: player,
                      card: card
                    }))

                    return;
                    return [1, 0, 1, -1.5];
                  }
                }
              }
            }
          },
          enable: 'chooseToUse',
          filterCard(card, player) {
            return card.suit == 'club';
          },
          position: 'hs',
          viewAs: { name: 'jiu' },
          viewAsFilter(player) {
            if (!player.countCards('hs', { suit: 'club' })) return false;
            return true;
          },
          prompt: '将一张♣️️手牌当酒使用',
          check(card) {
            if (_status.event.type == 'dying') return 1 / Math.max(0.1, get.value(card));
            return 4 - get.value(card);
          },
          ai: {
            threaten: 1.5
          }
        },
        xajh_wangyou: {
          audio: 'ext:金庸群侠传/peiyin:2',
          group: ['xajh_wangyou_remove'],
          subSkill: {
            remove: {
              trigger: {
                global: 'gameStart',
                player: 'enterGame'
              },
              popup: false,
              forced: true,
              filter(event, player) {
                return player.identity != 'zhu';
              },
              content() {
                player.removeSkill('xajh_wangyou');
              }
            }
          },
          trigger: {
            global: 'phaseDrawBegin1'
          },
          filter(event, player) {
            if (event.numFixed) return false;
            if (event.player == player) return false;
            if (!player.hasZhuSkill('xajh_wangyou')) return false;
            var group = 'shu';
            if (lib.jy_changeSkill) group = 'jy_ming';
            if (group != event.player.group) return false;
            return true;
          },
          forced: true,
          zhuSkill: true,
          content() {
            'step 0';
            trigger.player.chooseBool('是否展示牌堆的三张牌令' + get.translation(player) + '获得其中的♣️️牌,你获得其余的牌？').set('ai', function () {
              var att = get.attitude(trigger.player, player);
              if (att > 0) return true;
              if (att < 0 && trigger.num < 2) return true;
              return false;
            });
            'step 1';
            if (result.bool) {
              trigger.player.line(player);
              trigger.changeToZero();
              event.cards = get.cards(3);
              trigger.player.showCards(event.cards, '忘忧');
              trigger.player.say(['在下敬令狐少侠一杯!', '令狐少侠果然豪气干云!', '酒逢知己千杯少!'].randomGet());
            } else {
              event.finish();
            }
            'step 2';
            var plgain = [];
            cards = cards.filter((i) => {
              if (i.suit == 'club') {
                plgain.push(i);
                return false;
              }
              return true;
            });
            if (cards.length) {
              trigger.player.gain(cards, 'gain2', 'log');
            }
            if (plgain.length) {
              player.gain(plgain, 'gain2', 'log');
              player.say(['好!在下这便干了!', '令狐冲今日便交了你这个兄弟!'].randomGet());
            }
          }
        },
        xajh_qiaowei: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'damageEnd'
          },
          filter(event, player) {
            if (!event.source) return false;
            if (!event.card || event.card.name != 'sha') return false;
            if (!event.player.isAlive() || !event.source.isAlive()) return false;
            if (!event.player.countDiscardableCards(player, 'hej')) return false;
            if (event.player.canUse({ name: 'juedou' }, event.source)) {
              return true;
            }
            return false;
          },
          check(event, player) {
            var eff = get.effect(event.source, { name: 'juedou' }, event.player, player);
            var num = get.effect(event.player, { name: 'guohe_copy' }, player, player);
            if (eff >= 0 && num >= 0) return true;
            return false;
          },
          content() {
            'step 0';
            player.discardPlayerCard('hej', trigger.player, true);
            if (player != trigger.player) {
              player.say(['你乃江湖好汉,岂能如此受他欺凌？', '若你咽不下这口气,岳某可助你一臂之力!'].randomGet());
            } else {
              player.say(['如此,休怪岳某无情!', '我华山派虽然势微,也并非可欺!'].randomGet());
            }
            'step 1';
            trigger.player.useCard({ name: 'juedou' }, trigger.source, false, 'noai');
            if (player != trigger.player) {
              trigger.player.say(['既然你不仁,休怪我不义!', '自有岳盟主主持公道!'].randomGet());
            }
          }
        },
        xajh_yuli: {
          group: ['xajh_yuli_remove'],
          subSkill: {
            remove: {
              trigger: {
                global: 'gameStart',
                player: 'enterGame'
              },
              popup: false,
              forced: true,
              filter(event, player) {
                return player.identity != 'zhu';
              },
              content() {
                player.removeSkill('xajh_yuli');
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            global: ['respond', 'damageEnd']
          },
          filter(event, player) {
            var group = 'shu';
            if (lib.jy_changeSkill) group = 'jy_ming';
            if (!player.hasZhuSkill('xajh_yuli')) return false;
            if (event.name == 'respond') {
              var respondTo = event.respondTo;
              if (!respondTo) return false;
              if (respondTo[1].name != 'juedou') return false;
              if (event.card.name != 'sha') return false;
              if (event.player == player) return false;
              if (group != event.player.group) return false;
              return true;
            }
            if (event.name == 'damage') {
              if (!event.card || event.card.name != 'juedou') return false;
              if (event.player != player && group != event.player.group) return true;
              if (event.source && event.source != player && group != event.source.group) return true;
              return false;
            }
            return false;
          },
          forced: true,
          zhuSkill: true,
          content() {
            player.draw();
          }
        },
        xajh_jianxie: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: 'phaseUseBegin'
          },
          directHit_ai: true,
          skillTagFilter(player, tag, arg) {
            if (!arg.target.hasSkillTag('xajh_jianxie_nouse')) return false;
          },
          forced: true,
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt('xajh_jianxie'), function (card, player, target) {
              return target != player;
            }).
            set('ai', function (target) {
              var pl = _status.event.player;
              var tahs = target.countCards('h');
              var att = get.attitude(pl, target);
              if (att < 0) {
                var usesha = 0;
                var num = 0;
                var ca = pl.getCards('h');
                for (var i = 0; i < ca.length; i++) {
                  if (ca[i].name != 'sha' && get.tag(ca[i], 'damage') && pl.canUse(ca[i], target)) {
                    var eff1 = get.effect(target, ca[i], pl, pl);
                    if (eff1 > 0) num++;
                  }
                }
                for (var i = 0; i < ca.length; i++) {
                  if (ca[i].name == 'sha' && pl.canUse(ca[i], target)) {
                    var eff1 = get.effect(target, ca[i], pl, pl);
                    if (eff1 > 0) usesha++;
                  }
                }
                if (usesha > 0) num++;
                if (target.hp <= 0) return -1;
                if (tahs < 2) return -1;
                if (num > 1) return num / target.hp + 1;
              }
              if (att > 0) {
                if (tahs == 0) return 0.5;
                if (tahs > 0) return 1 / (tahs + 1);
              }
              return -1;
            });
            'step 1';
            if (result.targets?.length) {
              result.targets[0].draw();
              result.targets[0].addTempSkill('xajh_jianxie_nouse');
              player.say(['诸位看得起岳某,岳某便却之不恭了.', '君子坦荡荡,小人长戚戚!'].randomGet());
              result.targets[0].say(['多谢君子剑岳掌门相助!', '岳先生,这是何意？', '岳掌门人称君子剑,自不会加害吾等.'].randomGet());
            }
          },
          subSkill: {
            nouse: {
              mark: true,
              marktext2: '禁',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_jianxie.jpg',
              intro: {
                content: '当前回合内,你不能使用或打出牌.'
              },
              mod: {
                cardEnabled2(card) {
                  return false;
                },
                cardEnabled(card, player) {
                  return false;
                },
                cardUsable(card, player) {
                  return false;
                },
                cardRespondable(card, player) {
                  return false;
                },
                cardSavable(card, player) {
                  return false;
                },
                targetInRange(card) {
                  return false;
                }
              },
              ai: {
                threaten: 3,
                effect: {
                  target(card, player, target) {
                    if (get.tag(card, 'damage')) return [1, -1];
                  }
                }
              }
            }
          }
        },
        xajh_jianwu: {
          subSkill: {
            die: {
              trigger: { player: 'die' },
              forceDie: true,
              forced: true,
              popup: false,
              silent: true,
              charlotte: true,
              content() {
                var target = player.storage.xajh_jianwu_target;
                target.removeSkill('xajh_jianwu_target');
                player.removeSkill('xajh_jianwu_target');
                target.removeSkill('xajh_jianwu_card');
                player.removeSkill('xajh_jianwu_card');
              }
            },
            card: {
              onremove(player) {
                delete player.storage.xajh_jianwu_card;
                player.removeAdditionalSkills('xajh_jianwu_card');
              },
              charlotte: true,
              mark: true,
              fanwei(name) {
                if (lib.card[name] && lib.card[name].distance) {
                  var dist = lib.card[name].distance;
                  if (dist.attackFrom) {
                    return 1 - dist.attackFrom;
                  } else {
                    return 1;
                  }
                }
                return 1;
              },
              mod: {
                globalFrom(from, to, distance) {
                  if (from.storage.xajh_jianwu_card) {
                    var info = lib.card[from.storage.xajh_jianwu_card];
                    if (info && info.distance && info.distance.globalFrom) return distance + info.distance.globalFrom;
                  }
                },
                globalTo(from, to, distance) {
                  if (to.storage.xajh_jianwu_card) {
                    var info = lib.card[to.storage.xajh_jianwu_card];
                    if (info && info.distance && info.distance.globalTo) return distance + info.distance.globalTo;
                  }
                },
                //attackRange:function(from,distance){
                //    var info=lib.card[from.storage.xajh_jianwu_card];
                //    if(info&&info.distance&&info.distance.attackFrom) return distance-info.distance.attackFrom;
                //},
                attackRangeBase(player) {
                  var map = player.storage.xajh_jianwu_card;
                  if (!map) return;
                  var range = 1;
                  var equips = player.getCards('e', function (card) {
                    return !ui.selected.cards || !ui.selected.cards.includes(card);
                  });
                  for (var i = 0; i < equips.length; i++) {
                    var info = get.info(equips[i], false).distance;
                    if (!info) continue;
                    if (info.attackFrom) {
                      range -= info.attackFrom;
                    }
                  }
                  return Math.max(range, lib.skill.xajh_jianwu_card.fanwei(map));
                },
                attackTo(from, to, distance) {
                  if (to.storage.xajh_jianwu_card) {
                    var info = lib.card[to.storage.xajh_jianwu_card];
                    if (info && info.distance && info.distance.attackTo) return distance + info.distance.attackTo;
                  }
                }
              },
              intro: {
                mark(dialog, storage, player) {
                  var card = player.storage.xajh_jianwu_card;
                  if (card) {
                    dialog.addText('当前装备:' + get.translation(card));
                    dialog.add([[['装备', '', card]], 'vcard']);
                  }
                }
              }
            },
            target: {
              group: 'xajh_jianwu_die',
              onremove(player) {
                delete player.storage.xajh_jianwu_target;
              },
              intro: { content: '' },
              trigger: { player: ['equipEnd', 'loseEnd'] },
              forced: true,
              popup: false,
              content() {
                var target = player.storage.xajh_jianwu_target;
                if (trigger.name == 'equip') {
                  if (get.subtype(trigger.card) == 'equip1') {
                    target.removeAdditionalSkills('xajh_jianwu_card');
                    target.storage.xajh_jianwu_card = trigger.card.name;
                    var info = get.info(trigger.card);
                    if (info.skills) target.addAdditionalSkills('xajh_jianwu_card', info.skills);
                  } else {
                    return;
                  }
                } else {
                  var equip = player.getEquip(1);
                  if (!equip) {
                    target.removeAdditionalSkills('xajh_jianwu_card');
                    delete target.storage.xajh_jianwu_card;
                  }
                }
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          filter(event, player) {
            if (player.hasSkill('xajh_jianwu_target')) return false;
            return !player.storage.xajh_jianwu;
          },
          filterTarget(card, player, target) {
            if (target == player) return false;
            if (target.hasSkill('xajh_jianwu_target')) return false;
            return target.hasSex('male');
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          content() {
            player.storage.xajh_jianwu = true;
            player.awakenSkill('xajh_jianwu');
            player.storage.xajh_jianwu_target = target;
            target.storage.xajh_jianwu_target = player;
            player.addSkill('xajh_jianwu_target');
            target.addSkill('xajh_jianwu_target');
            player.addSkill('xajh_jianwu_card');
            target.addSkill('xajh_jianwu_card');
            var e1 = player.getEquip(1),
              e2 = target.getEquip(1);
            if (e1) {
              target.storage.xajh_jianwu_card = e1.name;
              var info = get.info(e1);
              if (info.skills) target.addAdditionalSkills('xajh_jianwu_card', info.skills);
            }
            if (e2) {
              player.storage.xajh_jianwu_card = e2.name;
              var info = get.info(e2);
              if (info.skills) player.addAdditionalSkills('xajh_jianwu_card', info.skills);
            }
          },
          intro: { content: 'limited' },
          mark: true,
          limited: true,
          ai: { order: 11, result: { target: 1 } }
        },
        xajh_huizhi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'useCard' },
          logTarget: 'player',
          filter(event, player) {
            return event.card && event.card.name == 'jiu';
          },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          prompt(event, player) {
            if (lib.config.extension_金庸群侠传_jiexiantupo) {
              if (event.player != player) {
                return '是否发动【蕙质】令' + get.translation(event.player) + '摸两张牌,' + get.translation(player) + '摸一张牌？';
              } else {
                return '是否发动【蕙质】令' + get.translation(player) + '摸三张牌？';
              }
            }
            return '是否发动【蕙质】令' + get.translation(player) + '摸两张牌？';
          },
          content() {
            if (lib.config.extension_金庸群侠传_jiexiantupo) {
              if (trigger.player != player) {
                trigger.player.draw(2);
                player.draw();
              } else {
                player.draw(3);
              }
            } else {
              trigger.player.draw(2);
            }
          }
        },
        xajh_fanghun: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { player: 'damageEnd' },
          filter(event, player) {
            if (!event.source) return false;
            if (!event.source.isIn()) return false;
            if (!event.source.countDiscardableCards(player, 'he')) return false;
            if (_status.currentPhase != event.source) return false;
            var history = event.source.getHistory('useCard');
            for (var i = 0; i < history.length; i++) {
              if (history[i].card.name == 'jiu' && history[i].isPhaseUsing()) return false;
            }
            return true;
          },
          forced: true,
          content() {
            'step 0';
            player.
            discardPlayerCard(get.prompt2('xajh_fanghun', trigger.source), 'he', '弃置其一张牌', trigger.source).
            set('ai', function (button) {
              var target = _status.event.target;
              var player = _status.event.player;
              var att = get.attitude(player, target) > 0;
              var val = get.jyValue(button.link, target);
              if (!att && target.countDiscardableCards(player, 'he') == 1) return val;
              var result = lib.card.jiu.ai.result.target(target, target);
              if (result <= 0 && !att) return val;
              if (result > 0 && att && target.countCards('he') > 3) return 5 - val;
              return 0;
            })(
              'step 1');
            if (result.bool) {
              trigger.source.useCard({ name: 'jiu' }, trigger.source, false);
            }
          },
          ai: {
            maixie: true
          }
        },
        xajh_shichong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          filter(event, player) {
            return (
              event.source &&
              event.source != player & event.source.isIn() &&
              game.hasPlayer(function (current) {
                return current != player && event.source != current && (current.canUse({ name: 'juedou' }, event.source) || current.countCards('he'));
              }));

          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('xajh_shichong'), function (card, player, target) {
              if (_status.event.sourcex != target && player != target) {
                if (target.canUse({ name: 'juedou' }, _status.event.sourcex)) return true;
                if (target.countCards('he')) return true;
                return false;
              }
              return false;
            }).
            set('ai', function (target) {
              var player = _status.event.player;
              var source = _status.event.sourcex;
              var att1 = get.attitude(player, target);
              var att2 = get.attitude(player, source);
              var eff = get.effect(source, { name: 'juedou' }, target, player);
              if (!target.countCards('he') && target.canUse({ name: 'juedou' }, source)) {
                return eff;
              }
            }).
            set('sourcex', trigger.source);
            'step 1';
            if (result.targets?.length) {
              event.target = result.targets[0];
              if (event.target.countCards('he')) {
                event.target.
                chooseCard('请选择交给' + get.translation(player) + '的牌或视为对' + get.translation(trigger.source) + '使用【比武】.', 'he').
                set('ai', function (card) {
                  var player = _status.event.player;
                  var source = _status.event.sourcex;
                  var target = _status.event.targetx;
                  if (get.attitude(player, source) < 0 && card.name == 'du') return 10;
                  if (get.effect(target, { name: 'juedou' }, player, player) > 0) return 0;
                  return 7 - get.value(card);
                }).
                set('sourcex', player).
                set('targetx', trigger.source);
              } else {
                event._result = { bool: false };
              }
            } else {
              event.finish();
            }
            'step 2';
            if (result.cards?.length) {
              //player.gain(result.cards[0],target,'give');
              target.give(result.cards[0], player, true);
            } else {
              if (target.canUse({ name: 'juedou' }, trigger.source))
              target.useCard(
                {
                  name: 'juedou'
                },
                trigger.source,
                false,
                'noai'
              ).animate = false;
            }
          }
        },
        xajh_shanquan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'gainAfter',
            global: 'loseAsyncAfter'
          },
          forced: true,
          filter(event, player) {
            var hs = player.getCards('h');
            var gain = event.getg(player);
            //if(event.name=='gain'&&event.getlx===false) return false;
            return game.hasPlayer(function (current) {
              if (current == player) return false;
              var lose = event.getl(current).cards2;
              for (var i of lose) {
                if (hs.includes(i) && gain.includes(i)) return true;
              }
              return false;
            });
            return false;
          },
          content() {
            player.draw();
          }
        },
        xajh_biguan: {
          subSkill: {
            bi: {
              mark: true,
              marktext2: '闭',
              markimage: 'extension/金庸群侠传/image/icon/jy_avatar_biguan.jpg',
              intro: {
                name: '闭关',
                content: '直到你下回合开始,其他角色计算与你的距离+1.'
              },
              mod: {
                globalTo(from, to, distance) {
                  return distance + 1;
                }
              }
            }
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            player: 'phaseUseEnd'
          },
          filter(event, player) {
            return player.hp < player.maxHp && player.countCards('he') > 0;
          },
          content() {
            'step 0';
            player.
            chooseToDiscard('he').
            set('prompt', get.prompt2('xajh_biguan')).
            set('ai', function (card) {
              if (get.position(card) == 'h' && player.needsToDiscard()) return 9 - get.value(card);
              return 6 - get.value(card);
            });
            'step 1';
            if (result && result.bool) {
              player.addTempSkill('xajh_biguan_bi', { player: 'phaseZhunbeiBegin' });
            }
          }
        },
        xajh_xixing: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            source: 'dieAfter'
          },
          forced: true,
          content() {
            'step 0';
            player.gainMaxHp();
            player.recover();
            player.$fullscreenpop('吸星大法', 'thunder');
            //player.loseMaxHp();
            'step 1';
            if (lib.config.extension_金庸群侠传_jiexiantupo) {
              var list = [];
              var skills = trigger.player.getStockSkills();
              for (var i of skills) {
                var info = lib.skill[i];
                if (info && (info.gainable || !info.unique) && !info.zhuSkill && !info.juexingji && !info.limited && !info.dutySkill) {
                  list.add(i);
                }
              }
            } else {
              event.finish();
            }
            if (list.length) {
              if (list.length == 1) {
                player.addSkills(list[0]);
              } else {
                player.jy_chooseSkill(list);
              }
            }
          }
        },
        xajh_chushan_old: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          mark: true,
          limited: true,
          init(player) {
            player.storage.xajh_chushan = false;
          },
          filter(event, player) {
            if (player.storage.xajh_chushan) return false;
            if (!game.dead.length) return false;
            for (var i = 0; i < game.dead.slice(0).length; i++) {
              var skills = game.dead[i].skills.slice(0);
              for (var j = 0; j < skills.length; j++) {
                var info = lib.skill[skills[j]];
                if (!player.skills.includes(skills[j]) && !info.limited && !info.juexingji && !info.charlotte && !info.zhuSkill) {
                  return true;
                }
              }
            }
            return false;
          },
          content() {
            'step 0';
            player.storage.xajh_chushan = true;
            player.say('有人的地方就有江湖,你如何退出？');
            var next = player.chooseTarget('选择获得一名已死亡角色获得其的一个合法技能', true);
            next.set('filterTarget', function (card, player, target) {
              if (target.isAlive()) return false;
              var skills = target.skills.slice(0);
              for (var j = 0; j < skills.length; j++) {
                var info = lib.skill[skills[j]];
                if (!player.skills.includes(skills[j]) && !info.limited && !info.juexingji && !info.charlotte && !info.zhuSkill && !info.sub) {
                  return true;
                }
              }
              return false;
            });
            next.set('deadTarget', true);
            next.set('ai', function () {
              return Math.random();
            });
            'step 1';
            if (result.targets?.length) {
              var skills = result.targets[0].skills.slice(0);
              var list = [];
              for (var j = 0; j < skills.length; j++) {
                var info = lib.skill[skills[j]];
                if (!player.skills.includes(skills[j]) && !info.limited && !info.juexingji && !info.charlotte && !info.zhuSkill) {
                  list.push(skills[j]);
                }
              }
              if (list.length) {
                if (list.length == 1) {
                  player.addSkills(list[0]);
                  player.popup(list[0]);
                  game.log(player, '获得技能', '【' + get.translation(list[0]) + '】');
                  player.loseMaxHp();
                  player.awakenSkill('xajh_chushan');
                  //event.finish();
                } else player.chooseControl(list).set('prompt', '选择获得一项技能');
              } else event.finish();
            }
            'step 2';
            if (result && result.control) {
              player.addSkills(result.control);
              player.popup(result.control);
              game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
              player.loseMaxHp();
              player.awakenSkill('xajh_chushan');
            }
            if (player.hasSkill('xajh_biguan')) {
              player.removeSkills('xajh_biguan');
            }
            if (player.hasSkill('xajh_biguan_bi')) {
              player.removeSkill('xajh_biguan_bi');
            }
          },
          intro: {
            content: 'limited'
          },
          ai: {
            order: 2,
            result: {
              player: 1
            },
            expose: 0.8
          }
        },
        xajh_chushan_old2: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          mark: true,
          limited: true,
          init(player) {
            player.storage.xajh_chushan = false;
          },
          filter(event, player) {
            if (player.storage.xajh_chushan) return false;
            if (!game.dead.length) return false;
            for (var i = 0; i < game.dead.slice(0).length; i++) {
              var skills = game.dead[i].skills.slice(0);
              for (var j = 0; j < skills.length; j++) {
                var info = lib.skill[skills[j]];
                if (!player.skills.includes(skills[j]) && !info.limited && !info.juexingji && !info.charlotte && !info.zhuSkill) {
                  return true;
                }
              }
            }
            return false;
          },
          content() {
            'step 0';
            player.storage.xajh_chushan = true;
            player.say('有人的地方就有江湖,你如何退出？');
            var list = [];
            for (var i = 0; i < game.dead.length; i++) {
              list.push(game.dead[i].name);
            }
            player.
            chooseButton(true, ui.create.dialog('选择1名已阵亡的角色', [list, 'character'])).
            set('filterButton', function (button) {
              for (var i = 0; i < game.dead.length; i++) {
                if (game.dead[i].name == button.link) {
                  var skills = game.dead[i].skills.slice(0);
                  for (var j = 0; j < skills.length; j++) {
                    var info = lib.skill[skills[j]];
                    if (!player.skills.includes(skills[j]) && !info.limited && !info.juexingji && !info.charlotte && !info.zhuSkill) {
                      return true;
                    }
                  }
                }
              }
              return false;
            }).
            set('ai', function (button) {
              return 1;
            });
            'step 1';
            if (result.bool) {
              for (var i = 0; i < game.dead.length; i++) {
                if (game.dead[i].name == result.links[0]) {
                  var skills = game.dead[i].skills.slice(0);
                  break;
                }
              }
              // game.log(result.links[0]);
              var list = [];
              for (var j = 0; j < skills.length; j++) {
                var info = lib.skill[skills[j]];
                if (!player.skills.includes(skills[j]) && !info.limited && !info.juexingji && !info.charlotte && !info.zhuSkill) {
                  list.push(skills[j]);
                }
              }
              if (list.length) {
                if (list.length == 1) {
                  player.addSkills(list[0]);
                  player.popup(list[0]);
                  game.log(player, '获得技能', '【' + get.translation(list[0]) + '】');
                  player.loseMaxHp();
                  player.awakenSkill('xajh_chushan');
                  //event.finish();
                } else player.chooseControl(list).set('prompt', '选择获得一项技能');
              } else event.finish();
            }
            'step 2';
            if (result && result.control) {
              player.addSkills(result.control);
              player.popup(result.control);
              game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
              player.loseMaxHp();
              player.awakenSkill('xajh_chushan');
            }
            if (player.hasSkill('xajh_biguan')) {
              player.removeSkills('xajh_biguan');
            }
            if (player.hasSkill('xajh_biguan_bi')) {
              player.removeSkill('xajh_biguan_bi');
            }
          },
          intro: {
            content: 'limited'
          },
          ai: {
            order: 2,
            result: {
              player: 1
            },
            expose: 0.8
          }
        },
        xajh_chushan: {
          audio: 'ext:金庸群侠传/peiyin:2',
          enable: 'phaseUse',
          marktext2: '出',
          markimage: 'extension/金庸群侠传/image/icon/jychushan.jpg',
          mark: true,
          limited: true,
          init(player) {
            player.storage.xajh_chushan = false;
          },
          filter(event, player) {
            if (player.storage.xajh_chushan) return false;
            if (!game.dead.length) return false;
            for (var i = 0; i < game.dead.slice(0).length; i++) {
              var skills = game.dead[i].skills.slice(0);
              for (var j = 0; j < skills.length; j++) {
                var info = lib.skill[skills[j]];
                if (!player.skills.includes(skills[j]) && !info.limited && !info.juexingji && !info.charlotte && !info.zhuSkill) {
                  return true;
                }
              }
            }
            return false;
          },
          content() {
            'step 0';
            player.storage.xajh_chushan = true;
            player.say('有人的地方就有江湖,你如何退出？');
            player.
            chooseButton(true, ui.create.dialog('选择1名已阵亡的角色', game.dead.slice(0))).
            set('filterButton', function (button) {
              var skills = button.link.skills.slice(0);
              for (var j = 0; j < skills.length; j++) {
                var info = lib.skill[skills[j]];
                if (!player.skills.includes(skills[j]) && !info.limited && !info.juexingji && !info.charlotte && !info.zhuSkill) {
                  return true;
                }
              }
              return false;
            }).
            set('ai', function (button) {
              return Math.random();
            });
            'step 1';
            if (result.links?.length) {
              var skills = result.links[0].skills.slice(0);
              var list = [];
              for (var j = 0; j < skills.length; j++) {
                var info = lib.skill[skills[j]];
                if (!player.skills.includes(skills[j]) && !info.limited && !info.juexingji && !info.charlotte && !info.zhuSkill) {
                  list.push(skills[j]);
                }
              }
              if (list.length) {
                player.loseMaxHp();
                player.awakenSkill('xajh_chushan');
                if (list.length == 1) {
                  player.addSkills(list[0]);
                } else {
                  player.jy_chooseSkill(list);
                }
              }
            }
            'step 2';
            if (player.hasSkill('xajh_biguan')) {
              player.removeSkills('xajh_biguan');
            }
            if (player.hasSkill('xajh_biguan_bi')) {
              player.removeSkill('xajh_biguan_bi');
            }
          },
          intro: {
            content: 'limited'
          },
          ai: {
            order: 2,
            result: {
              player: 1
            },
            expose: 0.8
          }
        },
        xajh_chushan2: {
          audio: 'ext:金庸群侠传/peiyin:2',
          juexingji: true,
          limited: true,
          enable: 'phaseUse',
          marktext2: '出',
          markimage: 'extension/金庸群侠传/image/icon/jychushan.jpg',
          mark: true,
          limited: true,
          init(player) {
            player.storage.xajh_chushan2 = false;
          },
          filter(event, player) {
            return !player.storage.xajh_chushan2;
          },
          content() {
            'step 0';
            player.awakenSkill('xajh_chushan2');
            player.storage.xajh_chushan2 = true;
            'step 1';
            player.say('有人的地方就有江湖,你如何退出？');
            player.loseMaxHp();
            if (player.hasSkill('xajh_biguan')) {
              player.removeSkills('xajh_biguan');
            }
            if (player.hasSkill('xajh_biguan_bi')) {
              player.removeSkill('xajh_biguan_bi');
            }
            player.addSkill('xajh_chushan2_unmiss');
          },
          intro: {
            content: 'limited'
          },
          ai: {
            order: 2,
            result: {
              player: 1
            },
            expose: 0.8
          }
        },
        xajh_chushan2_unmiss: {
          trigger: {
            player: 'useCardToTargeted'
          },
          logTarget: 'target',
          forced: true,
          check(event, player) {
            return get.attitude(player, event.target) <= 0;
          },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            if (lib.config.extension_金庸群侠传_jybangpai != 'off') {
              var bp = get.jy_bangpai(event.target);
              if (!bp.includes('jy_riyue')) return true;
            }
            return false;
          },
          content() {
            trigger.parent.directHit.push(trigger.target);
          },
          ai: {
            threaten: 0.5
          }
        },
        xajh_quanbing: {
          group: ['xajh_quanbing_remove'],
          subSkill: {
            remove: {
              trigger: {
                global: 'gameStart',
                player: 'enterGame'
              },
              popup: false,
              forced: true,
              filter(event, player) {
                return player.identity != 'zhu';
              },
              content() {
                player.removeSkill('xajh_quanbing');
              }
            }
          },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: { global: 'dieBefore' },
          zhuSkill: true,
          filter(event, player) {
            if (!player.hasZhuSkill('xajh_quanbing')) return false;
            var group = 'shu';
            if (lib.jy_changeSkill) group = 'jy_ming';
            if (!event.source) return false;
            if (event.player == player) return false;
            if (group != event.source.group) return false;
            return event.source && event.source.countCards('h') > 0 && event.source && event.source.isIn() && event.source != player;
          },
          content() {
            'step 0';
            trigger.source.chooseBool('是否发动' + get.translation(player) + '的【权柄】</b><br>将伤害来源改为' + get.translation(player) + '？<br>若如此做你弃置所有手牌.').set('ai', function () {
              var att = get.attitude(trigger.source, player);
              var num = -trigger.source.countCards('h');
              if (player.identity == 'zhu' && trigger.player.identity == 'zhong') {
                num += att >= 0 ? -player.countCards('he') : player.countCards('he');
              }
              if (trigger.player.identity == 'fan') {
                num += att >= 0 ? 3 : -3;
              }
              if (player.hasSkill('xajh_xixing')) {
                num += att >= 0 ? 2 : -2;
              }
              return num > 0;
            });
            'step 1';
            if (result.bool) {
              trigger.source.line(player, 'green');
              trigger.source.discard(trigger.source.getCards('h'));
            } else {
              event.finish();
            }
            'step 2';
            trigger.source = player;
          },
          ai: {
            threaten: 1.5,
            expose: 0.1
          }
        },
        xajh_digong: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseUseBegin'
          },
          filter(event, player) {
            return event.player != player && event.player.maxHp > player.maxHp;
          },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          content() {
            trigger.player.storage.xajh_digong2 = player;
            player.storage.xajh_digong3 = trigger.player;
            player.addTempSkill('xajh_digong3');
            trigger.player.addTempSkill('xajh_digong2');
          },
          ai: {
            expose: 0.3,
            threaten: 1.3
          }
        },
        xajh_digong2: {
          charlotte: true,
          mod: {
            cardUsable(card, player, num) {
              const storage = player.storage.xajh_digong2;
              if (storage && player.maxHp > storage.maxHp) {
                if (card.name == 'sha') return num + player.maxHp - storage.maxHp;
              }
            }
          }
        },
        xajh_digong3: {
          charlotte: true,
          audio: 'xajh_digong',
          trigger: { global: 'damage' },
          filter(event, player) {
            if (!event.source) return false;
            if (!event.card) return false;
            if (event.card.name != 'sha') return false;
            if (!player.storage.xajh_digong3) return false;
            if (player.storage.xajh_digong3 != event.source) return false;
            var num = 0;
            var history = event.source.getHistory('useCard');
            for (var i = 0; i < history.length; i++) {
              num++;
              if (history[i].card && history[i].card == event.card) return true;
            }
            return false;
          },
          prompt(event, player) {
            var num = 0;
            var history = event.source.getHistory('useCard', function (evtt) {
              return evtt.card.name == 'sha';
            });
            for (var i = 0; i < history.length; i++) {
              num++;
              if (history[i].card && history[i].card == event.card) return true;
            }
            return '弟恭:是否摸' + get.cnNumber(num) + '张牌？';
          },
          content() {
            var history = trigger.source.getHistory('useCard', function (evtt) {
              return evtt.card.name == 'sha';
            });
            var num = 0;
            for (var i = 0; i < history.length; i++) {
              num++;
              if (history[i].card && history[i].card == trigger.card) {
                player.draw(num);
                player.removeSkill('xajh_digong3');
                return;
              }
            }
          }
        },
        xajh_nianjue: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'phaseZhunbeiBegin'
          },
          filter(event, player) {
            return event.player.isDamaged();
          },
          check(event, player) {
            return get.attitude(player, event.player) > 0;
          },
          logTarget: 'player',
          content() {
            var next = trigger.player.judge(function (card) {
              var suit = card.suit;
              if (suit == 'heart' && trigger.player.isDamaged()) return 2;
              if (suit == 'club') return 1;
              return 0;
            });
            next.callback = lib.skill.xajh_nianjue.callback;
            next.judge2 = function (result) {
              return result.bool;
            };
          },
          callback() {
            var evt = event.getParent(2);
            if (event.judgeResult.suit == 'heart') {
              //game.cardsDiscard(card);
              evt._trigger.player.recover();
            } else if (event.judgeResult.suit == 'club') {
              evt._trigger.player.gain(card, 'gain2', 'log');
            }
          }
        },
        //界东方不败-霸天20220617
        xajh_weizhong: {
          trigger: {
            global: 'gainAfter',
            player: 'loseAsyncAfter'
          },
          forced: true,
          //popup:false,
          filter(event, player) {
            if (event.name == 'loseAsync') {
              if (event.type != 'gain') return false;
              var cards = event.getl(player).cards2;
              return game.hasPlayer(function (current) {
                if (current == player) return false;
                var hs = current.getCards('h');
                var cardsx = event.getg(current);
                for (var i of cardsx) {
                  if (cards.includes(i) && hs.includes(i)) return true; //QQQ
                }
                return false;
              });
            }
            if (event.player != player) {
              var hs = event.player.getCards('h');
              var evt = event.getl(player);
              return (
                evt &&
                evt.cards2 &&
                evt.cards2.filter(function (card) {
                  return hs.includes(card) && event.cards.includes(card);
                }).length);

            }
            return false;
          },
          content() {
            'step 0';
            var cards = trigger.getl(player).cards2;
            event.targets = game.
            filterPlayer(function (current) {
              if (current == player) return false;
              var hs = current.getCards('h'),
                cardsx = trigger.getg(current).filter(function (card) {
                  return hs.includes(card) && cards.includes(card);
                });
              return cardsx.length;
            }).
            sortBySeat();
            'step 1';
            var target = targets.shift();
            event.target = target;
            if (target.isIn())
            player.chooseBool(get.prompt2(event.name, target)).set('ai', function () {
              var evt = _status.event.parent;
              return get.effect(evt.target, { name: 'losehp' }, evt.player, evt.player) > 0;
            });else
            {
              if (targets.length) event.goto(1);else
              event.finish();
            }
            'step 2';
            if (result.bool) {
              target.loseHp();
              var num = target.needsToDiscard();
              if (num > 0) {
                target.chooseToDiscard(1, true, 'h');
                //target.chooseToDiscard(num,true,'h');
              }
            } else {
              if (targets.length) event.goto(1);else
              event.finish();
            }
            'step 3';
            if (targets.length) event.goto(1);
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          //trigger:{
          //    global:"gainEnd",
          //},
          //check:function (event,player){
          //    return get.effect(event.player,{name:'losehp'},event.player,player)>0;
          //},
          //logTarget:"player",
          //filter:function (event,player){
          //    return event.player!=player&&event.relatedLose&&event.relatedLose.player==player;
          //},
          //content:function (){
          //    "step 0"
          //    trigger.player.loseHp();
          //    "step 1"
          //    var num=trigger.player.needsToDiscard();
          //    if(num>0){
          //        trigger.player.chooseToDiscard(num,true,'h');
          //    };
          //},
          ai: {
            effect: {
              target(card, player, target) {
                if (get.attitude(target, player) < 0 && (card.name == 'shunshou' || card.name == 'shunshou_copy2' || card.name == 'shunshou_copy') && get.effect(player, { name: 'losehp' }, player, target) > 0) return [1, 0, 1, -2];
              }
            }
          }
        },
        xajh_daoxi: {
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'useCard'
          },
          forced: true,
          usable: 1,
          filter(event, player) {
            if (!player.countCards('hs')) return false;
            if (event.player == player) return false;
            var type = get.type(event.card, 'trick');
            if (type != 'trick' && type != 'basic') return false;
            var info = get.info(event.card);
            if (!info.enable) return false;
            if (!event.targets || !event.targets.length) return false;
            if (
            game.hasPlayer(function (current) {
              return player.canUse(event.card, current);
            }))
            {
              return true;
            }
            return false;
          },
          content() {
            'step 0';
            player.chooseCard(1, 'hs', get.prompt('xajh_daoxi', trigger.player), '交给其一张手牌视为你使用' + get.translation(trigger.card)).set('ai', function (card) {
              var player = _status.event.player;
              var att = get.attitude(player, trigger.player);
              var eff2 = get.effect(trigger.targets[0], trigger.card, trigger.player, player);
              var len = trigger.targets.length;
              if (att > 0 && len == 1 && eff2 <= 0) {
                if (_status.event.player.getUseValue(trigger.card) > 0) return 8 - get.value(card);
              }
              if (att <= 0 && len == 1 && eff2 <= 0) {
                if (_status.event.player.getUseValue(trigger.card) > 0) ;
                return 6 - get.value(card);
              }
              return -1;
            });
            'step 1';
            if (result.cards?.length) {
              //trigger.player.gain(result.cards[0],player,'give','log');
              player.give(result.cards[0], trigger.player, true);
              var _args = [true, false],
                vcard,
                isCard = true;
              if (trigger.cards.length && !trigger.card.isCard) {
                var bool = trigger.cards.some((card) => get.position(card, true) != 'o');
                isCard = false;
                if (!bool) _args.push(trigger.cards);
                vcard = trigger.card;
                _args.push(vcard);
              } else {
                if (trigger.trigger.cards.length == 1 && trigger.card.name == trigger.card.name) {
                  if (get.position(trigger.cards[0], true) == 'o') {
                    _args.push(trigger.cards[0]);
                  } else {
                    vcard = trigger.card;
                    _args.push(vcard);
                  }
                } else {
                  var bool = trigger.cards.some((card) => get.position(card, true) != 'o');
                  if (!bool) _args.push(trigger.cards);
                  vcard = trigger.card;
                  _args.push(vcard);
                  isCard = false;
                }
              }
              var next = player.chooseUseTarget.apply(player, _args);
              if (!isCard) next.set('viewAs', true);
            } else {
              player.getStat('triggerSkill')[event.name]--;
              event.finish();
              return;
            }
            'step 2';
            trigger.excluded.addArray(
              game.filterPlayer(function (current) {
                return true;
              })
            );
            trigger.targets.length = 0;
            trigger.all_excluded = true;
          },
          ai: {
            threaten: 2
          }
        },
        //旧东方不败
        xajh_weizhong_old: {
          audio: 'xajh_weizhong',
          trigger: { global: 'gainEnd' },
          check(event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          logTarget: 'player',
          filter(event, player) {
            if (event.player.countCards('h') - event.player.hp < 0) return false;
            return event.player != player && event.relatedLose && event.relatedLose.player == player;
          },
          content() {
            trigger.player.loseHp();
          },
          ai: {
            effect: {
              target(card, player, target) {
                var att = get.attitude(player, target);
                if (att > 0) return;
                if (card.name == 'shunshou' && player.countCards('h') - player.hp > 0) return [-2, 0.6];
              }
            }
          }
        },
        xajh_daoxi_old: {
          audio: 'xajh_daoxi',
          trigger: { global: 'useCard' },
          forced: true,
          usable: 1,
          filter(event, player) {
            if (!player.countCards('hs')) return false;
            if (player.countCards('h') - event.player.countCards('h') >= 0) return false;
            if (event.player == player) return false;
            if (get.type(event.card) != 'trick' && get.type(event.card) != 'basic') return false;
            var info = get.info(event.card);
            //   if(info.allowMultiple==false) return false;
            if (event.targets && !info.multitarget) {
              if (
              game.hasPlayer(function (current) {
                return player.canUse(event.card, current);
              }))
              {
                return true;
              }
            }
            return false;
          },
          content() {
            'step 0';
            player.chooseCard(1, 'hs', get.prompt('xajh_daoxi_old', trigger.player), '交给其一张手牌视为你使用' + get.translation(trigger.card)).set('ai', function (card) {
              var player = _status.event.player;
              var att = get.attitude(player, trigger.player);
              var eff2 = get.effect(trigger.targets[0], trigger.card, player, player);
              var len = trigger.targets.length;
              if (att > 0 && len == 1 && eff2 <= 0) {
                if (_status.event.player.getUseValue(trigger.card) > 0) return 8 - get.value(card);
              }
              if (att <= 0 && len == 1 && eff2 <= 0) {
                if (_status.event.player.getUseValue(trigger.card) > 0) return 6 - get.value(card);
              }
              return -1;
            });
            'step 1';
            if (result.cards?.length) {
              //trigger.player.gain(result.cards[0],player,'give','log');
              player.give(result.cards[0], trigger.player, true);
              player.chooseUseTarget(trigger.card, true);
            } else {
              player.getStat('triggerSkill').xajh_daoxi_old--;
              event.finish();
              return;
            }
            'step 2';
            trigger.excluded.addArray(
              game.filterPlayer(function (current) {
                return true;
              })
            );
            trigger.targets.length = 0;
            trigger.all_excluded = true;
          },
          ai: {
            threaten: 2
          }
        },
        xajh_shunshi: {
          audio: 'ext:金庸群侠传/peiyin:3',
          trigger: {
            player: 'phaseUseBegin'
          },
          forced: true,
          group: ['xajh_shunshi_2'],
          filter(event, player) {
            return game.hasPlayer(function (target) {
              return target !== player && target.countCards('h') > player.countCards('h') && target.isMaxHp();
            });
          },
          content() {
            'step 0';
            player.
            chooseTarget(get.prompt2('xajh_shunshi'), function (card, player, target) {
              return target != player && target.countCards('h') > player.countCards('h') && target.isMaxHp();
            }).
            set('ai', function (target) {
              return 2 * target.countCards('h') + get.attitude(player, target);
            });
            'step 1';
            if (result.targets?.length) {
              var target = result.targets[0];
              var num1 = player.countCards('h');
              var num2 = target.countCards('h');
              player.draw(num2 - num1);
              target.addTempSkill('xajh_shunshi2', { player: 'phaseJieshuEnd' });
            }
          },
          subSkill: {
            2: {
              audio: 'xajh_shunshi',
              trigger: {
                source: 'damageBegin2'
              },
              forced: true,
              filter(event, player) {
                if (!event.player.hasSkill('xajh_shunshi2')) return false;
                return true;
              },
              content() {
                trigger.cancel();
              },
              ai: {
                effect: {
                  player(card, player, target, current, isLink) {
                    if (!target) return;
                    if (isLink) return;
                    if (!get.tag(card, 'damage')) return;
                    if (!target.hasSkill('xajh_shunshi2')) return;
                    if (player.hasSkillTag('jueqing', false, target)) return;
                    return 'zerotarget';
                  }
                }
              }
            }
          }
        },
        xajh_shunshi2: {
          charlotte: true
        },
        xajh_fengying: {
          subSkill: {
            disable: {
              mark: true,
              charlotte: true,
              intro: {
                content: '本轮已发动'
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:2',
          trigger: {
            global: 'recoverAfter'
          },
          filter(event, player) {
            if (player.hasSkill('xajh_fengying_disable')) return false;
            return event.player != player && player.countCards('he');
          },
          forced: true,
          content() {
            'step 0';
            var translation1 = get.translation(trigger.player);
            var cards = player.getCards('he');
            player.chooseCardButton('交给' + translation1 + '任意张牌', false, cards, [1, cards.length]).set('ai', function (button) {
              var card1 = button.link;
              var trigger = _status.event.getTrigger();
              var player = _status.event.player;
              var att = get.attitude(player, trigger.player);
              if (att <= 0) {
                if (card1.name == 'du') return 10;
                return -1;
              } else {
                if (player.isDamaged() && ui.selected.buttons.length == 2) {
                  return 6;
                }
                if (ui.selected.buttons.length == 1) {
                  return 6 - get.value(card1);
                }
                if (ui.selected.buttons.length >= 2) {
                  return 2 * ui.selected.buttons.length - get.value(card1);
                }
              }
            });
            'step 1';
            if (result.bool) {
              player.addTempSkill('xajh_fengying_disable', 'roundStart');
              var togive = result.links.slice(0);
              trigger.player.gain(togive, 'gain2');
              if (togive.length >= 2 && player.isDamaged()) {
                trigger.player.
                chooseControl('令上官云回复1点体力', '取消').
                set('prompt', '是否令上官云回复一点体力').
                set('ai', function () {
                  if (get.attitude(trigger.player, player) > 0) return '令上官云回复1点体力';
                  return '取消';
                });
              } else event.finish();
            } else event.finish();
            'step 2';
            if (result.control == '令上官云回复1点体力') {
              player.recover();
            } else event.finish();
          },
          ai: {
            expose: 0.9
          }
        }
      },
      translate: {
        //笑傲江湖标记
        xajh_xie_taoguliuxian: '邪桃谷六仙',
        xajh_taoxian: '桃仙',
        xajh_taoxian_info: '<b>锁定技.</b>你的体力上限始终为6,不因任何原因改变;当你体力值为1/2/3/4/5/6时,你拥有技能〖移题〗/〖饰言〗/〖强辩〗/〖妄语〗/〖夺理〗/〖信口〗.',
        xajh_jingguai: '精怪',
        xajh_jingguai_info: '<b>锁定技,</b>当你的体力值不因〖精怪〗、〖强辩〗而改变 时,你改为投骰子,将体力值改为结果点数.若你因此减少/增加了X点体力值,你摸X张牌/获得X枚<驳> .',
        xajh_huabing: '话柄',
        xajh_huabing_info: '其他角色出牌阶段限一次,其可以移除2枚 <驳>.若如此做,其可以选择一项:在你下回合开始前【精怪】失效;失去因【桃仙】获得的技能(不影响你再次获得该技能).',
        xajh_yiti: '移题',
        xajh_yiti_info: '一名角色的回合结束时,你可以将其装备区里的所有装备移至其下家装备区里(替换原装备).',
        xajh_shiyan: '饰言',
        xajh_shiyan_info: '出牌阶段限三次,你可以给场上的一张装备牌改名.',
        xajh_qiangbian: '强辩',
        xajh_qiangbian_info: '出牌阶段限一次,你可以与一名其他角色拼点,若你赢,其将体力值改为与你相等(不超过其体力上限);你的拼点牌生效前,你可以失去1点体力与拼点角色交换拼点牌.',
        xajh_wangyu: '妄语',
        xajh_wangyu_info: '当一张判定牌生效前,你可以选择:将此牌改为一个黑色的花色,你失去1点体力:将此牌改为F一个红色的花色,你回复1点体力.]当一张判定牌生效前,你可以选择:将此牌改为一个黑色的花色,你失去1点体力:将此牌改为F一个红色的花色,你回复1点体力.',
        xajh_duoli: '夺理',
        xajh_duoli_info: '每回合限一次,其他角色成为红色非装备牌的唯一目标时,你令此牌目标改为你.',
        xajh_xinkou: '信口',
        xajh_xinkou_info: '一名角色使用延时锦囊牌指定目标时,你可以将此牌改为任意普通锦囊.',
        xajh_huabing2: '话柄',
        xajh_huabing2_info: '其他角色出牌阶段限一次,其可以移除2枚 <驳>.若如此做,其可以选择一项:在你下回合开始前【精怪】失效;失去因【桃仙】获得的技能(不影响你再次获得该技能).',
        xajh_xie_zuolengchan: '邪左冷禅',
        xajh_yingong: '隐功',
        xajh_yingong_info: '<b>锁定技.</b>你受到和造成的普通伤害改为寒冰伤害,你是所有寒冰伤害的来源;你使用的和以你为目标的普通【杀】结算完后永久改为【冰杀】.',
        xajh_hanmou: '寒谋',
        xajh_hanmou_info: '回合对每名角色限一次,一名角色的牌因寒冰伤害效果弃置进入弃牌堆前,你可以蓄谋之.',
        xajh_bingyue: '并岳',
        xajh_bingyue_info: '<b>盟主技.</b>其他角色的回合结束时,其可以令你选择一项:1.移除一张蓄谋牌;2.令你用牌堆顶的牌蓄谋.',
        xajh_jianbing: '兼并',
        xajh_jianbing_info: '<b>盟主技.</b>其他角色使用普通【杀】结算完后,若目标不包含你,其可将之永久改为【冰杀】.',
        xajh_xie_renwoxing: '邪任我行',
        xajh_shaqi_old: '煞气',
        xajh_shaqi_old_info: '结束阶段,你可以令所有其他角色选择一项:其交给你一张♠️️牌;你对其使用一张【走火入魔】.',
        xajh_shaqi: '煞气',
        xajh_shaqi_info: '<b>转换技.</b>结束阶段,你可以令所有角色手牌上限调整为:阳:已失去体力值.阴:体力值.',
        xajh_xixing_xierenwoxing: '汲星',
        xajh_xixing_xierenwoxing_info: '<b>锁定技,</b>跳过你的摸牌阶段.准备阶段,若你的手牌数:不小于体力上限,你进行一次【走火入魔】判定;小于体力上限,你随机获得其他角色区域里的牌直至等于你的体力上限数,若你以此法获得的牌数超过其他角色总人数,你减一点体力上限.',
        xajh_mowei: '魔威',
        xajh_mowei_info: '<b>盟主技,</b>与你同势力的其他角色的判定牌效时,其可以交给你一张手牌并将判定结果改为♠️️.',
        xajh_xie_dongfangbubai: '邪东方不败',
        xajh_zhenfeng_new: '针锋',
        xajh_zhenfeng_new_info: '<b>锁定技,</b>若你装备区里没有武器牌,你视为装备了【绣花针】;你可以将武器牌或♦️️基本牌当【杀】使用,你使用的♦️️【杀】无距离限制且额定目标数+2.',
        xajh_bigong_new: '逼宫',
        xajh_bigong_new_info: '出牌阶段限一次,你可以交给一名其他角色一张手牌,其选择:将区域内所有♦️️牌交给你;或失去X点体力(X为其区域内♦️️牌数量且至少为1).',
        xajh_duanxiu_new: '断袖',
        xajh_duanxiu_new_info: '出牌阶段限一次,你可以选择一名未获得帮派技的其他男性角色,你令其选择获得其一项帮派技,直到你下回合开始.',
        xajh_linzhennan: '林震南',
        xajh_huaibi: '怀璧',
        xajh_huaibi2: '怀璧',
        xajh_huaibi3: '怀璧',
        xajh_huaibi_info: '<b>锁定技,</b>宝物不占你的手牌上限,且若你手牌中有宝物,视为你拥有这些牌的技能.<p>你受到【杀】的伤害后,若你区域内有宝物,来源可以弃置一张牌并弃置你区域内一张宝物牌.<p>你死亡时,你可以将区域内的装备牌交给一名其他角色.',
        xajh_qibiao_info: '出牌阶段限一次,你可以令下家摸三张牌,称为<行镖>,从其下家开始到你为止,所有角色依次从上家的手牌中随机获取三张.凡是手牌中截留有<行镖>牌的其他角色受到你一点伤害.',
        xajh_qibiao: '起镖',
        none: '判定消失',
        xajh_jiangnansiyou: '江南四友',
        xajh_zhenniang: '珍酿',
        xajh_zhenniang_jiu: '珍酿',
        xajh_zhenniang2: '珍酿',
        xajh_zhenniang_info: '<b>限定技.</b>准备阶段,你获得两张【酒】并置于侠客牌上.出牌阶段,你可以使用此酒,你本回合使用的下一张【杀】造成的伤害基数值+X;你于濒死状态时使用此酒,回复X点体力(X为当前轮次数).',
        xajh_dianjing: '点睛',
        xajh_dianjing_info: '<b>限定技.</b>一名角色出牌阶段开始时,你观看其手牌并选择其中一种花色,其于本局游戏中使用此花色的牌时摸一张牌,且使用此花色的牌无距离和次数限制.',
        xajh_huihao: '泼墨',
        xajh_huihao_info: '<b>限定技.</b>出牌阶段,你令所有角色弃置区域内的红色牌,再获得等同于此次失去区域内牌的数量的黑色牌.',
        xajh_duiyi: '对弈',
        xajh_duiyi_info: '<b>限定技.</b>当有角色进行负面延时锦囊牌判定时,你选一名有手牌的其他角色,你与其轮流打出一张手牌来作为此次判定的判定牌(不能打出你们已经打出过的花色),直到有一方无法打出牌为止.若判定成功,最后以此法打出牌的角色摸两张牌,否则另一名角色摸两张牌.',
        xajh_tianmendaozhang: '天门道长',
        xajh_xueyong: '血勇',
        xajh_xueyong_info: '出牌阶段限一次,你可以将一张手牌当【比武】同时对场上一个势力的所有其他角色使用.',
        xajh_gangjue: '刚决',
        xajh_gangjue_info: '每当你受到伤害时,你可以失去一点体力,你防止此次伤害.',
        xajh_linghuchongrenyinyin: '令狐冲任盈盈',
        xajh_jiufu: '酒赋',
        xajh_jiufu_info: '你使用【酒】后,你可以弃置至多两张牌,令等量末处于<酒>状态的其他角色处于<酒>状态,直到其下个回合结束.',
        xajh_qinxin: '琴心',
        xajh_qinxin_info: '出牌阶段开始时,你可以展示所有手牌,你将手牌中【杀】【闪】【酒】【九花玉露丸】没有的牌补齐.',
        xajh_taoguliuxian: '桃谷六仙',
        xajh_zibian: '自辩',
        xajh_zibian_info: '出牌阶段限一次,你可以将一张手牌当【运功疗伤】使用(可对自己使用),若你以此法使用的牌为黑色,你对目标造成一点伤害.',
        xajh_guici: '诡辞',
        xajh_guici_info: '一名角色的判定结果生效前,你可以令此判定结果反转,你选择失去一点体力或减一点体力上限.',
        xajh_shenlv: '神膂',
        xajh_shenlv_info: '当你拼点赢后或判定失败后,你可以视为使用一张<比武>.',
        xajh_shejian: '舌剑',
        xajh_shejian_info: '结束阶段开始时,你可以用一张手牌与牌堆顶的一张牌比点,若你赢,则你可以发动一次<神膂>.',
        xajh_lanfenghuang: '蓝凤凰',
        xajh_liangu: '炼蛊',
        xajh_liangu_info: '游戏开始/回合开始时,你可以令一名没有<蝥毒>标记的角色获得一枚此标记,拥有此标记的角色使用第X张或点数为X的牌后(X为5的倍数),受到一点无来源的蛊毒伤害.',
        xajh_zhuanxue: '转血',
        xajh_zhuanxue_info: '<b>限定技.</b>一名角色进入濒死状态时,你可以移除至多两名角色的<蝥毒>标记且其不能再获得<蝥毒>,该濒死角色回复X点体力(X为此次移除的标记数).',
        xajh_dongfangbubaiyanglianting: '东方不败杨莲亭',
        xajh_suoyu: '索欲',
        xajh_suoyu_info: '其他角色使用的普通锦囊牌置入弃牌堆后,你可以交给其一张手牌,你获得此牌(同名的牌每局限一次).',
        xajh_zongqing: '纵情',
        xajh_zongqing_info: '出牌阶段限一次,你使用基本牌或普通锦囊牌指定目标时,你可以额外指定一名其他角色.若如此做,该角色下回合使用相同类别的牌时,若你不是目标且你能成为目标,其可以令你也成为目标.',
        xajh_spdongfangbubai: 'sp东方不败',
        xajh_zongquan_old: '纵权',
        xajh_zongquan_old_info: '出牌阶段,你可以弃置一张牌,令一名角色使用一张与此牌花色相同的武器牌.',
        xajh_nvgong_old: '女红',
        xajh_nvgong_old_info: '出牌阶段每种花色限一次,你可以弃置一张♣️️/♠️️/♥️️/♦️️牌,获得牌堆一张♦️️/♥️️/♣️️/♠️️牌.你以此法弃置♥️️牌后,可以令一名男性角色摸一张牌.',
        xajh_zongquan: '纵权',
        xajh_zongquan_info: '出牌阶段,你可以弃置一张牌,令一名角色使用一张与此牌花色相同的武器牌并获得一张【酒】.',
        xajh_nvgong: '女红',
        xajh_nvgong_info: '出牌阶段每种花色限一次,你可以弃置一张♣️️/♠️️/♥️️/♦️️牌,获得牌堆一张♦️️/♥️️/♣️️/♠️️牌.你以此法弃置♥️️牌后,可以令一名男性角色摸两张牌.',
        xajh_shanbian: '嬗变',
        xajh_shanbian_info: '<b>转换技.锁定技.</b>回合开始时,阴:性别改为女,获得〖女红〗.阳:性别改为男,获得〖纵权〗.',
        xajh_feizhen_old: '飞针',
        xajh_feizhen_old_info: '你可以将因弃置而失去的♦️️牌置于侠客牌上,称为<针>.其他角色受到伤害时,你可以选择:移除一枚<针>,令此伤害改为失去等量体力;或移除两枚<针>令此伤害加倍.',
        xajh_feizhen: '飞针',
        xajh_feizhen_info: '你可以将你或你攻击范围内的其他角色因弃置而失去的♦️️牌置于侠客牌上,称为<针>.其他角色受到伤害时,你可以选择:移除一枚<针>,令此伤害改为失去等量体力;或移除两枚<针>令此伤害加倍.',
        xajh_pingyizhi: '平一指',
        xajh_qihuang: '岐黄',
        xajh_qihuang_info: '一名角色进入濒死状态时,你可以弃置所有手牌(至少一张),视为其使用了一张【酒】.',
        xajh_tiandao_old: '天道',
        xajh_tiandao_old_info: '一名角色进入濒死状态时,你可以弃置一张手牌并令另一名已受伤的角色回复一点体力.一名角色处于濒死状态的角色成为<酒>或<桃>的目标时,你可以弃置一张手牌并令另一名角色失去一点体力.',
        xajh_tiandao: '天道',
        xajh_tiandao_info: '当有角色死亡后,你可以令一名已受伤的角色回复两点体力;当有角色脱离濒死状态后,你可以令一名其他角色失去一点体力.',
        xajh_zhuqianqiu: '祖千秋',
        xajh_lunjiu: '论杯',
        xajh_lunjiu_info: '一名角色出牌阶段开始时/进入濒死状态时,你可以弃置场上一张防具牌.若如此做,则视为其使用了一张【酒】.',
        xajh_lvzhuwong: '绿竹翁',
        xajh_jianpu: '鉴谱',
        xajh_jianpu_info: '一名角色使用秘籍牌时,你可以将此牌改为另一张秘籍牌.若修改后的秘籍技能描述中含有:<伤害>,你可以对其造成1点伤害;<回复>,你可以令其回复1点体力;<弃置>,你可以令其弃置2张牌;<摸牌>,你可以令你或令其摸2张牌;  <获得>,你可以获得其1张牌(不能获得此秘籍牌);<使用>,你可以视为使用1张任意基本牌或普通锦囊牌.',
        xajh_yuye: '玉液',
        xajh_yuye_info: '一名角色使用普通【酒】时,你可以将此牌改为衍生牌堆里一张衍生酒.若其使用的酒非实体卡牌或为转化牌,你随机获得衍生牌堆里一张衍生酒.',
        xajh_zhuyun: '竹韵',
        xajh_zhuyun_info: '名角色作用【走火入魔】时,你可以将之改为【运功疗伤】;<b>锁定技,</b>当运功疗伤的判定牌生效后,若此牌为:红色,你摸2张牌;黑色,你手牌上限永久+1.',
        xajh_zhuyun2: '竹韵2',
        xajh_zhuyun2_info: 'undefined',
        xajh_lunbei: '论杯',
        xajh_lunbei_info: '每轮限一次,一名角色的出牌阶段开始时,你可以弃置场上一张武器牌,视为使用一张【酒】.根据此武器牌的花色,该角色于本阶段使用的下一张【杀】拥有如下效果:<p>♥️️:造成伤害后其回复一点体力.<p>♦️️:造成伤害后祖千秋摸两张牌.<p>♠️️:造成伤害后对目标随机使用一张黑色延时锦囊牌.<p>♣️️:造成伤害后其获得♣️️普通锦囊牌和♣️️暗器牌各一张.<p>每轮限一次,一名角色进入濒死状态时,你可以弃置场上一张防具牌.若如此做,则视为其使用了一张【酒】.',
        xajh_yaojiu: '酒药',
        xajh_yaojiu_info: '一名角色使用【酒】后,你可以弃置一张手牌.若此牌为红色,其回复1点体力;若此牌为黑色,其失去一点体力.',
        xajh_renyingying: '任盈盈',
        xajh_qugang: '曲高',
        xajh_qugang_info: '出牌阶段限一次,你可以与一名其他角色同时展示一张手牌,若花色相同,其摸2张牌;若花色不同,你令其弃置2张牌或你摸2张牌.',
        xajh_heming: '和鸣',
        xajh_heming_info: '其他角色摸牌阶段结束时,你可以依次声明两个花色,若其展示与你声明的花色组成相同的两张手牌,其可以视为使用一张基本牌.',
        xajh_tianboguang: '田伯光',
        xajh_xunfang: '寻芳',
        xajh_xunfang_info: '出牌阶段限一次,你可以将一张♥️️手牌交给一名女性角色并获得其一张手牌,你展示获得的牌,若不为♥️️,你摸1张牌.',
        xajh_aotu: '傲徒',
        xajh_aotu_info: '结束阶段开始时,你可以选择一名体力值不大于你的其他角色,直到你的下个回合开始,每当其获得或失去手牌后,若其手牌数量与你相等,你摸1张牌.',
        xajh_linpingzhi: '林平之',
        xajh_renru: '忍辱',
        xajh_renru_info: '每当你受到一点伤害后或你于回合外失去装备区里的牌后,你可将牌堆顶一张牌当<辱>置于侠客牌上.<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>锁定技.</b>若你有<辱>,其他角色计算你距离+1.',
        xajh_qushi: '去势',
        xajh_qushi_info: '<b>觉醒技.</b>当你获得第5张<辱>后,你减1点体力上限,废除防具栏和坐骑栏,删除〖忍辱〗锁定技部分并获得〖雪耻〗.',
        xajh_xuechiqichai: '雪耻-骑拆',
        xajh_xuechi_chai_backup: '雪耻·拆',
        xajh_xuechi_jiu_backup: '雪耻·酒',
        xajh_xuechi_chai: '雪耻·拆',
        xajh_xuechi_jiu: '雪耻·酒',
        xajh_xuechiqichai_info: '你可以将一张坐骑牌当【见招拆招】使用.',
        xajh_xuechiruchai: '雪耻-辱拆',
        xajh_xuechiruchai_info: '出牌阶段,你可以将一张红色<辱>当【见招拆招】使用.',
        xajh_xuechirujiu: '雪耻·辱酒',
        xajh_xuechirujiu_info: '你可以把任意一张黑色<辱>当【酒】使用.',
        xajh_xuechifangjiu: '雪耻·防具酒',
        xajh_xuechifangjiu_info: '你可以将一张防具牌当【酒】使用.',
        xajh_xuechi: '雪耻',
        xajh_xuechi_info: '你可以将坐骑牌或红色的<辱>当【见招拆招】使用.你可以将防具牌或黑色<辱>当【酒】使用.',
        xajh_yinyang: '阴阳',
        xajh_yinyang_info: '你使用有颜色的牌后,若牌堆和弃牌堆中存在与此牌异色的同名牌,你获得一张异色同名牌(每种牌名每回合限获得一次).',
        xajh_shuangzhang: '双掌',
        xajh_shuangzhang_info: '出牌阶段,你未使用过的颜色的【杀】,不占用回合内使用的额定次数.',
        xajh_yuehou: '乐厚',
        xajh_laodenuo: '劳德诺',
        xajh_qianxing: '潜行',
        xajh_qianxing_info: '其他角色使用【杀】指定你为目标后,你可以交给其一张手牌,你获得其一张手牌,若此牌与你交给其的牌类别不同,视为你使用了【闪】.',
        xajh_anxi: '暗袭',
        xajh_anxi_info: '每轮每种负面状态限一次,当有角色进入负面状态后,你可以对其造成一点伤害.若其装备区里有牌,你可以获得其中一张装备牌.若其此时判定区里有【隔空点穴】,你再获得一张秘籍牌.',
        xajh_anxi_old: '暗袭',
        xajh_anxi_old_info: '当其他角色成为延时锦囊的目标时,你可以视为对其使用一张【杀】,若此杀造成了伤害且其装备区有牌,你可以获得其中一张装备牌.',
        xajh_zuolengchan: lib.config.extension_金庸群侠传_jiexiantupo ? '界左冷禅' : '左冷禅',
        xajh_weijian: '围歼',
        xajh_weijian_info: function () {
          var str = '<b>限定技.</b>其他角色的回合开始时,你令攻击范围含有该角色的所有角色选择:视为对其使用一张【比武】;或受到你1点伤害';
          if (lib.config.extension_金庸群侠传_jiexiantupo) str += '(若围歼目标未死亡,重置此技能)';
          return str + '.';
        }(),
        xajh_linhan: '凛寒',
        xajh_linhan_info: '每当一名角色击杀角色时,你可以弃置一张手牌并选择一名其他角色,视为由其击杀该角色.',
        xajh_bingpai: '并派',
        xajh_bingpai_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>每回合限一次,每当你使用牌后,其他明势力角色可以使用一张与此牌类型相同的的牌,你摸1张牌.';
          return '<b>盟主技.</b>每回合限一次,每当你使用牌后,其他魏势力角色可以使用一张与此牌类型相同的的牌,你摸1张牌.';
        }(),
        //"xajh_bingpai_info":"<b>盟主技.</b>每回合限一次,每当你使用牌后,其他XXX势力角色可以使用一张与此牌类型相同的的牌,你摸1张牌.",
        xajh_moda: '界莫大',
        xajh_zhongsu: '衷诉',
        xajh_zhongsu_info: '当你使用基本牌指定目标后,或你成为基本牌的目标后,若你未记录此牌的点数,你可以记录此牌的点数.<b>锁定技,</b>当你成为其他角色使用的普通锦囊牌的目标后,若你有此牌点数的标记,取消之.',
        xajh_qinjian: '琴剑',
        xajh_qinjian_info: '出牌阶段限一次,你可以弃置三张点数呈等差数列的手牌.若这些牌:同为奇数,你对至多三名角色各造1点伤害(你摸X张牌,X为依此法受到伤害后体力值为1的角色数);同为偶数,你令至多三名角色回复1点体力(你摸Y张牌,Y为依此法回复体力后未受伤的角色数);包含奇数和偶数,你令所有角色失去1点体力(你摸3张牌).',
        xajh_linghuchong: '令狐冲',
        xajh_jianhao: '剑豪',
        xajh_jianhao_info: '你使用【杀】时,你可以声明一张武器牌,直到此牌杀结算完毕,你视为拥有该武器牌的技能.',
        xajh_zuixia: '醉侠',
        xajh_zuixia_info: '你可以将♣️️手牌当【酒】使用.<b>锁定技,</b>你于回合内使用酒后,你本回合造成的伤害+1.',
        xajh_wangyou: '忘忧',
        xajh_wangyou_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>其他明势力角色摸牌阶段开始时,其可以放弃摸牌,展示牌堆3张牌,令你获得其中的♣️️牌,其获得其余牌.';
          return '<b>盟主技.</b>其他蜀势力角色摸牌阶段开始时,其可以放弃摸牌,展示牌堆3张牌,令你获得其中的♣️️牌,其获得其余牌.';
        }(),
        //"xajh_wangyou_info":"<b>盟主技.</b>其他XXX势力角色摸牌阶段开始时,其可以放弃摸牌,展示牌堆3张牌,令你获得其中的♣️️牌,其获得其余牌.",
        xajh_yuebuqun: '岳不群',
        xajh_qiaowei: '巧伪',
        xajh_qiaowei_info: '一名角色受到【杀】造成的伤害后,若其区域内有牌,你可以弃置其区域内一张牌,若如此做,其视为对来源使用一张【比武】.',
        xajh_yuli: '渔利',
        xajh_yuli_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>每当其他明势力角色因比武打出杀或因比武造成或受到伤害后,你可以摸1张牌.';
          return '<b>盟主技.</b>每当其他蜀势力角色因比武打出杀或因比武造成或受到伤害后,你可以摸1张牌.';
        }(),
        //"xajh_yuli_info":"<b>盟主技.</b>每当其他XXX势力角色因比武打出杀或因比武造成或受到伤害后,你可以摸1张牌.",
        xajh_jianxie: '剑邪',
        xajh_jianxie_info: '出牌阶段开始时,你可以令一名其他角色摸一张牌,若如此做,其本回合不能使用或打出牌.',
        xajh_yuelingsan: lib.config.extension_金庸群侠传_jiexiantupo ? '界岳灵珊' : '岳灵珊',
        xajh_chongling: '冲灵',
        xajh_chongling_info: '',
        xajh_chonglingzhuanbei: '冲灵装备',
        xajh_chonglingzhuanbei_info: '',
        xajh_jianwu: '剑舞',
        xajh_jianwu_info: '<b>限定技.</b>出牌阶段,你可以与一名男性角色处于<冲灵>状态,你与该角色视为拥有对方的武器技能(不含距离).',
        xajh_huizhi: '蕙质',
        xajh_huizhi_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '每当一名角色使用【酒】后,你可以令其摸2张牌,你摸1张牌.';
          return '每当一名角色使用【酒】后,你可以令其摸2张牌.';
        }(),
        xajh_fanghun: '芳魂',
        xajh_fanghun_info: '每当你受到伤害后,若其此回合未使用过【酒】,你可以弃置其一张牌,其视为使用了一张酒.',
        xajh_yanglianting: '杨莲亭',
        xajh_shichong: '恃宠',
        xajh_shichong_info: '当你受到伤害后,你可以令除来源外的一名其他角色选择:视为对来源使用一张【比武】;或交给你一张牌.',
        xajh_shanquan: '擅权',
        xajh_shanquan_info: '当你获得其他角色的牌时,你可以摸1张牌.',
        xajh_renwoxing: lib.config.extension_金庸群侠传_jiexiantupo ? '界任我行' : '任我行',
        xajh_biguan: '闭关',
        xajh_biguan_info: '结束阶段开始时,若你已受伤,你可以弃置一张牌,直到你的下个回合开始,其他角色计算与你的距离+1.',
        xajh_xixing: '吸星',
        xajh_xixing_info: function () {
          if (lib.config.extension_金庸群侠传_jiexiantupo) return '<b>锁定技.</b>你每击杀一名角色,你加一点体力上限并回复一点体力,你获得其一项不为盟主技、限定技、觉醒技的技能';
          return '<b>锁定技.</b>你每击杀一名角色,你加一点体力上限并回复一点体力.';
        }(),
        xajh_chushan: '出山',
        xajh_chushan_info: '<b>限定技.</b>出牌阶段,你减一点体力上限,失去<闭关>,获得一名已死亡的角色一项除盟主技、限定技、觉醒技外的技能.',
        xajh_chushan2: '出山',
        xajh_chushan2_info: '<b>限定技.</b>出牌阶段,你减一点体力上限,失去<闭关>,你于本局游戏中,对帮派属性不含有日月神教的角色使用的杀不能被抵消.',
        xajh_chushan2_unmiss: '出山',
        xajh_quanbing: '权柄',
        xajh_quanbing_info: function () {
          if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>其他明势力角色击杀一名角色时,其可以弃置所有手牌,视为由你击杀该角色.';
          return '<b>盟主技.</b>其他蜀势力角色击杀一名角色时,其可以弃置所有手牌,视为由你击杀该角色.';
        }(),
        //"xajh_quanbing_info":"<b>盟主技.</b>其他XXX势力角色击杀一名角色时,其可以弃置所有手牌,视为由你击杀该角色.",
        xajh_ludayou: lib.config.extension_金庸群侠传_jiexiantupo ? '界陆大友' : '陆大友',
        xajh_xieyuebuqun: '邪岳不群',
        xajh_weishan: '伪善',
        xajh_weishan_info: '你出场时,你获得3点初始护甲,第1、2、3点初始护甲分别对应仁、义、礼标记.其他角色回合开始时,你可选择令仁、义、礼中的一项于本回合生效.<p>仁:当前回合内,所有角色共计只能造成1点伤害.<p>义:其本回合无法使用黑色装备.<p>礼:其本回合无法使用负面延时锦囊.',
        xajh_koumi: '口蜜',
        xajh_koumi_info: '你的护甲值减少后,移除对应的标记,根据此标记执行:<p>仁:令伤害来源失去体力至与你相等.<p>义:令来源将一张牌当【比武】对你指定的另一名其他角色使用,若其胜出,你摸3张牌;失败,其弃置所有牌.<p>礼:你将一张负面延时锦囊牌置入伤害来源判定区里,依此法置入的延时锦囊牌不能被其他角色获得、弃置、移动,且判定成功后,再次置入其判定区里.',
        xajh_fujian: '腹剑',
        xajh_fujian_info: '若你没有护甲值以及对应的标记:1.回合开始时,你增加一点体力上限,若你区域里没有【辟邪剑谱】,获得之.2.出牌阶段限一次,你可以将一张牌当【比武】使用.',
        xajh_weishan2: '伪善2',
        xajh_weishan2_info: 'undefined',
        xajh_fujian2: '腹剑2',
        xajh_fujian2_info: 'undefined',
        xajh_yurenyan: '余人彦',
        xajh_feili: '非礼',
        xajh_feili_info: '出牌阶段限一次,你可以摸一张牌并展示之.若为红色,你于本回合内获得一项描述含有<女性角色>的技能.',
        xajh_aoshi: '傲世',
        xajh_aoshi_info: '你使用【杀】的额定目标数为X(X为你的技能数,且至少为1),且指定目标时,可以用一张手牌与所有目标拼点.若你:赢,每名目标分别随机执行如下效果之一.①此杀造成伤害后你获得目标一张牌,②其本回合不能使用牌且需弃置获得的牌,③其需横置并弃置一张牌;未赢,你失去一点体力.',
        xajh_huashan: '华山派',
        xajh_jueshi: '绝世高手',
        xajh_riyue: '日月神教',
        xajh_songshan: '嵩山派',
        xajh_beiyuehengshan: '恒山派',
        xajh_hengshan: '衡山派',
        xajh_taishan: '泰山派',
        xajh_qingcheng: '青城派',
        xajh_fuweibiaoju: '福威镖局',
        xajh_wudujiao: '五毒教',
        xajh_xiake: '江湖侠客',
        xajh_digong: '弟恭',
        xajh_digong3: '弟恭',
        xajh_digong2: '弟恭',
        xajh_digong_info: '其他角色的出牌阶段开始时,若其体力上限大于你,你可以令其此阶段内使用【杀】的额定次数+X(X为其与你的体力上限之差).若如此做,其此阶段使用第Y张杀造成伤害后,你可以摸Y张牌(每回合限一次).',
        xajh_nianjue: '念诀',
        xajh_nianjue_info: '一名已受伤的角色准备阶段开始,你可以令其进行判定,判定结果为:♥️️,其回复1点体力;♣️️,其获得此牌.',
        xajh_dongfangbubai: '界东方不败',
        xajh_weizhong_old: '伪忠',
        xajh_weizhong_old_info: '其他角色获得你的牌后,若其手牌数大于其体力值,你可以令其失去一点体力.',
        xajh_daoxi_old: '蹈隙',
        xajh_daoxi_old_info: '每回合限一次,其他角色使用基本牌或普通锦囊牌时,若其手牌数比你多,你可以交给其一张手牌,你代替其使用此牌.',
        xajh_weizhong: '伪忠',
        xajh_weizhong_info: '其他角色获得你的牌后,你可以令其失去一点体力,若其手牌数量大于其手牌上限,你可以令其再弃置一张牌.',
        xajh_daoxi: '蹈隙',
        xajh_daoxi_info: '每回合限一次,其他角色使用基本牌或锦囊牌时,你可以交给其一张手牌,你代替其使用此牌.',
        xajh_liuzhengfengquyang: '刘正风曲洋',
        xajh_diezou: '迭奏',
        xajh_diezou_info: '回合结束时,若你于此回合内使用的所有牌为:严格递增,你可以令至多三名角色各摸一张牌;严格递减,你可以令至多三名角色各弃置一张牌;前两项均不符合,你获得点数为1、2、3、5、6的两张牌.',
        xajh_juechang: '绝唱',
        xajh_juechang_info: '<b>限定技.</b>当你进入濒死状态时,你令一名其他角色获得〖绝谱〗.',
        xajh_juepu: '绝谱',
        xajh_juepu_info: '出牌阶段限一次,你可弃置两张♣️️牌,令至多三名其他角色依次选择:弃置一张比上一名以此法弃置牌的角色弃置的牌点数大的牌;或失去一点体力.',
        xajh_shangguanyun: '上官云',
        xajh_shunshi: '顺势',
        xajh_shunshi_2: '顺势',
        xajh_shunshi2: '顺势',
        xajh_shunshi_info: '出牌阶段开始时,你可以将手牌摸牌至与场上体力值最大的一名角色手牌数相同.若如此做,在本回合内防止你对该角色造成的伤害.',
        xajh_fengying: '逢迎',
        xajh_fengying_info: '每轮限一次,其他角色回复体力后,你可以交给其任意张牌,若牌数达到两张,该角色可以令你回复一点体力.',
        xajh_ningzhongze: '宁中则',
        xajh_feibin: '费彬',
        xajh_taozui: '讨罪',
        xajh_taozui_info: '其他角色的回合结束时,若其未于此回合内对其他角色使用过牌,则你可以获得其装备区和手牌区各一张牌.',
        xajh_shajue: '杀绝',
        xajh_shajue_info: '你使用【杀】指定目标时,你可以令任意名装备区里没有装备牌或没有手牌的其他角色也成为目标.',
        xajh_qizong: '气宗',
        xajh_qizong_info: '<b>锁定技.</b>你使用【杀】指定目标后,若你的手牌数大于你的攻击范围,此杀不可抵消.',
        xajh_lanxin: '兰心',
        xajh_lanxin_info: '出牌阶段限一次,你可以将一张♣️️手牌交给一名其他角色,你摸两张牌.',
        xajh_fengqingyang: '风清扬',
        xajh_jianzong: '剑宗',
        xajh_jianzong_info: '<b>锁定技.</b>你使用【杀】指定目标后,若你的手牌数小于你的攻击范围,此杀不可抵消.',
        xajh_shoujian: '授剑',
        xajh_shoujian_info: '一名装备区里装备了武器牌的角色使用【杀】指定目标时,你可以将此武器的技能改为另一张武器牌的技能,直到此杀结算完毕.',
        xajh_wumingtaijian: '绝无名太监',
        xajh_xiedian: '邪典',
        xajh_xiedian2: '邪典',
        xajh_xiedian_info: '<b>锁定技,</b>你不能使用黑色牌且你的黑色牌不占用手牌上限.一名角色受到伤害时/摸牌时,你可以弃置一张黑色牌,令其此次受到的伤害数/摸牌数加倍.',
        xajh_huanhai: '宦海',
        xajh_huanhai_info: '出牌阶段限一次,你观看一名角色的手牌,若两种颜色的手牌数量不同,你交换其两种颜色牌的数量(其将数量更少的颜色的牌随机获得Ｘ张,弃置Ｘ张另一种颜色的手牌,Ｘ为其原手牌两种颜色的牌数差).',
        xajh_kuaidao: '快刀',
        xajh_kuaidao_info: '你使用【杀】指定目标时,你可以弃置目标区域内一张牌.若此牌为:装备牌,此杀不能被抵消;锦囊牌,此杀造成的伤害+1.',
        xajh_luanhong: '乱红',
        xajh_luanhong_info: '你的回合内,一名角色的♥️️牌因弃置进入弃牌堆后,你可以将这些牌交给一名其他角色,若该角色为女性,你摸一张牌.',
        xajh_sp_tianboguang: 'sp田伯光',
        xajh_liangfa: lib.config.extension_金庸群侠传_jiexiantupo ? '界梁发' : '梁发',
        xajh_yingjie: '英杰',
        xajh_yingjie2: '英杰',
        xajh_yingjie2_info: '出牌阶段开始时,你可以于本回合内令你的♠️️牌视为【酒】.',
        xajh_yingjie_info: '当你于出牌阶段造成伤害后,若你未于本回合使用过【酒】,则你可以视为使用一张酒.',
        xajh_sijie: '死节',
        xajh_sijie_info: '每回合限一次,每当你成为其他角色使用牌的目标时,或你使用牌指定其他角色为目标时,你可以获得其／一名目标区域里的一张牌,若此牌不为♣️️,你失去一点体力 .',
        xajh_zhuceshi: '主公技测试',
        xajh_zhuceshi_info: '主公技测试',
        xajh_qufeiyan: '曲非烟',
        xajh_yanmie: '烟灭',
        xajh_yanmie_info: '当你受到伤害后,你可以交一张装备牌交给一名其他角色.',
        xajh_shuoyan: '妁言',
        xajh_shuoyan_info: '出牌阶段限一次,你可以选择一名装备区里有装备牌的角色,令其获得其装备牌中包含的花色的牌各一张,若其依此法获得了:♣️️牌,你令一名女性角色获得一张♥️️牌;♥️️牌,你令一名女性角色回复一点体力.',
        xajh_dingxianshitai: '定闲师太',
        xajh_liedan: '烈胆',
        xajh_liedan_info: '岀牌阶段限一次,你可以视为对一名手牌比你多的其他角色使用一张<比武>.',
        xajh_mengshou: '盟守',
        xajh_mengshou_info: '当你需要打岀【杀】时,你可以令一名其他角色选择是否交给你一张杀.若其选择是,其获得一个<盟>.<b>锁定技,</b>有<盟>的角色摸牌阶段多摸等同于其<盟>数的牌.',
        xajh_shouwei: '授位',
        xajh_shouwei_info: '<b>限定技.</b>你濒死时,可以令一名有<盟>最多的角色使用一把剑,获得〖剑阵〗.',
        xajh_xiangwentian: '向问天',
        xajh_gujun: '孤军',
        xajh_gujun_info: '你使用点数小于7的【杀】时,一级:你攻击范围内所有其他角色均需成为目标;二级:你可以额外指定任意名合法目标.',
        xajh_lianmei: '联袂',
        xajh_lianmei_info: '你/其他角色使用♣️️【杀】后,你/其可将此牌交给一名其他角色/你,〖孤军〗中的蓝色数字+1(若你/其交出的杀造成了伤害,改为+2,且最大为13).',
        xajh_yingjiu: '营救',
        xajh_yingjiu_info: '<b>使命技.</b>首个回合开始时,你选两名角色A与B.A的回合结束时,若其体力上限比你大或装备牌比你多,你选择令B回复一点体力或解除其负面状态.当〖孤勇〗中的阿拉伯数字变成13时,B未进入过濒死状态,视为使命成功;否则使命失败.<p><b>成功:</b>A将体力回满,你升级〖孤勇〗并使用两张装备牌;<p><b>失败:</b>A失去两点体力,B进入一项负面状态,你可以在你的出牌阶段将♣️️牌当【酒】使用.',
        jydiy_bixiejianpu: '辟邪剑谱',
        jydiy_bixiejianpu_info: '<b>锁定技.</b>你造成伤害时,若你的体力上限大于1,你减1点体力上限,此伤害+1.',
        xajh_tongbaixiong: '童百熊',
        xajh_duyi: '笃义',
        xajh_duyi_info: '其他角色使用伤害牌指定另一名其他角色为唯一目标时,你可以用一张手牌与来源连续拼点三次(其手牌不足则终止).若你至少赢2次,取消此伤害牌的效果;若你赢3次,目标回复1点体力,你从来源的拼点牌中选择1张获得;若你至少输2次,你失去1点体力;若你输3次,你也成为此伤害牌的目标.',
        xajh_chujian: '锄奸',
        xajh_chujian_info: '出牌阶段限一次,你可以对一名有帮派技的角色造成1点伤害,若其曾是你〖笃义〗保护过的角色,改为对其造成2点伤害.',
        xajh_duanen: '断恩',
        xajh_duanen_info: '<b>觉醒技.</b>当你因〖笃义〗保护过的目标获得帮派技后或对你造成伤害后,你失去〖笃义〗,将体力回满,获得〖锄奸〗.'
      },
      dynamicTranslate: {
        xajh_gujun(player) {
          var list = lib.skill.xajh_gujun.getInfo(player);
          var str0 = '你使用点数小于<span class="bluetext">' + get.translation(list[0]) + '</span>的【杀】时,';
          var str1 = '一级:你攻击范围内所有其他角色均需成为目标;';
          var str2 = '二级:你可以额外指定任意名合法目标.';
          if (player.storage.xajh_gujun.level = 1) {
            str2 = '<span style="color: #808080">' + str2 + '</span>';
          } else {
            str1 = '<span style="color: #808080">' + str1 + '</span>';
          }
          return str0 + '<li>' + str1 + '<li>' + str2;
        },
        xajh_shanbian(player) {
          if (player.storage.xajh_shanbian == true) return '<b>转换技.锁定技.</b>回合开始时,<span class="bluetext">阴:性别改为女,获得〖女红〗.</span>阳:性别改为男,获得〖纵权〗.';
          return '<b>转换技.锁定技.</b>回合开始时,阴:性别改为女,获得〖女红〗.<span class="bluetext">阳:性别改为男,获得〖纵权〗.</span>';
        },
        xajh_renru(player) {
          var str = lib.translate.xajh_renru_info;
          if (player.storage.xajh_qushi) {
            str = '每当你受到一点伤害或于回合外失去装备区里的牌后,你可以将牌堆顶的一张牌置于侠客牌上,称为<辱>.';
          }
          return str;
        }
      }
    };
    for (var i in xajh.character) {
      xajh.character[i][4].push('jy_die_audio');
      //xajh.character[i][4].push(`die:ext:金庸群侠传/peiyin/${i}.mp3`);
      xajh.character[i][4].push(`die:ext:金庸群侠传/peiyin:true`);
      xajh.character[i][4].push('ext:金庸群侠传/character/yuanban/' + i + '.jpg');
    }
    return xajh;
  });
});