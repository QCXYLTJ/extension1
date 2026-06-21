'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
  var config = lib.config.extension_金庸群侠传_JYreplacedCard;
  if (config && config == '1') {
    //不可混包
    lib.arenaReady.push(function () {
      lib.card.list = []; //清空卡牌列表
      lib.card.list.addArray([
      ////此为金庸包自建牌堆（因金庸包设计了一些三国杀官方没有的卡牌，如暗器、毒药、秘籍等，为了让基本牌、普通锦囊牌、装备牌等的比例和官方牌堆一致，经精确计算后建立清单）
      //李白专属酒（测试）
      //标准包牌堆的杀\闪\桃：
      ['spade', 7, 'sha'],
      ['spade', 8, 'sha'],
      ['spade', 8, 'sha'],
      ['spade', 9, 'sha'],
      ['spade', 9, 'sha'],
      ['spade', 10, 'sha'],
      ['spade', 10, 'sha'],
      ['club', 2, 'sha'],
      ['club', 3, 'sha'],
      ['club', 4, 'sha'],
      ['club', 5, 'sha'],
      ['club', 6, 'sha'],
      ['club', 7, 'sha'],
      ['club', 8, 'sha'],
      ['club', 8, 'sha'],
      ['club', 9, 'sha'],
      ['club', 9, 'sha'],
      ['club', 10, 'sha'],
      ['club', 10, 'sha'],
      ['club', 11, 'sha'],
      ['club', 11, 'sha'],
      ['heart', 10, 'sha'],
      ['heart', 10, 'sha'],
      ['heart', 11, 'sha'],
      ['diamond', 6, 'sha'],
      ['diamond', 7, 'sha'],
      ['diamond', 8, 'sha'],
      ['diamond', 9, 'sha'],
      ['diamond', 10, 'sha'],
      ['diamond', 13, 'sha'],
      ['diamond', 8, 'shan'],
      ['diamond', 9, 'shan'],
      ['diamond', 10, 'shan'],
      ['diamond', 11, 'shan'],
      ['diamond', 11, 'shan'],
      ['heart', 2, 'shan'],
      ['heart', 2, 'shan'],
      ['heart', 13, 'shan'],
      ['diamond', 2, 'shan'],
      ['diamond', 2, 'shan'],
      ['diamond', 3, 'shan'],
      ['diamond', 4, 'shan'],
      ['diamond', 5, 'shan'],
      ['diamond', 6, 'shan'],
      ['diamond', 7, 'shan'],
      ['diamond', 8, 'shan'],
      ['diamond', 9, 'shan'],
      ['diamond', 10, 'shan'],
      ['diamond', 11, 'shan'],
      ['diamond', 11, 'shan'],
      ['heart', 3, 'tao'],
      ['heart', 4, 'tao'],
      ['heart', 6, 'tao'],
      ['heart', 7, 'tao'],
      ['heart', 8, 'tao'],
      ['heart', 9, 'tao'],
      ['heart', 12, 'tao'],
      ['diamond', 12, 'tao'],
      //["spade",2,"bagua"],
      //["club",2,"bagua"],
      //["spade",5,"jueying"],
      //["club",5,"dilu"],
      //["heart",13,"zhuahuang"],
      //["heart",5,"chitu"],
      //["spade",13,"dawan"],
      //["diamond",13,"zixin"],
      //["club",1,"zhuge"],
      //["diamond",1,"zhuge"],
      //["spade",2,"cixiong"],
      //["spade",6,"qinggang"],
      //["spade",5,"qinglong"],
      //["spade",12,"zhangba"],
      //["diamond",5,"guanshi"],
      //["diamond",12,"fangtian"],
      //["heart",5,"qilin"],
      ['heart', 3, 'wugu'],
      ['heart', 4, 'wugu'],
      ['heart', 1, 'taoyuan'],
      ['spade', 7, 'nanman'],
      ['spade', 13, 'nanman'],
      ['club', 7, 'nanman'],
      ['heart', 1, 'wanjian'],
      ['spade', 1, 'juedou'],
      ['club', 1, 'juedou'],
      ['diamond', 1, 'juedou'],
      ['heart', 7, 'wuzhong'],
      ['heart', 8, 'wuzhong'],
      ['heart', 9, 'wuzhong'],
      ['heart', 11, 'wuzhong'],
      ['spade', 3, 'shunshou'],
      ['spade', 4, 'shunshou'],
      ['spade', 11, 'shunshou'],
      ['diamond', 3, 'shunshou'],
      ['diamond', 4, 'shunshou'],
      ['spade', 3, 'guohe'],
      ['spade', 4, 'guohe'],
      ['spade', 12, 'guohe'],
      ['club', 3, 'guohe'],
      ['club', 4, 'guohe'],
      ['heart', 12, 'guohe'],
      ['club', 12, 'jiedao'],
      ['club', 13, 'jiedao'],
      ['spade', 11, 'wuxie'],
      ['club', 12, 'wuxie'],
      ['club', 13, 'wuxie'],
      ['diamond', 12, 'wuxie'],
      ['spade', 6, 'lebu'],
      ['club', 6, 'lebu'],
      ['heart', 6, 'lebu'],
      //["spade",1,'shandian'],//官方牌堆的闪电由生死符代替
      //["spade",2,'hanbing'],
      //["club",2,'renwang'],
      //["heart",12,'shandian'],
      //标准包牌堆结束
      //////以下为军争牌堆
      //火杀
      ['heart', 4, 'sha', 'fire'],
      ['heart', 7, 'sha', 'fire'],
      ['heart', 10, 'sha', 'fire'],
      ['diamond', 4, 'sha', 'fire'],
      ['diamond', 5, 'sha', 'fire'],
      //雷杀
      ['spade', 5, 'sha', 'thunder'],
      ['spade', 6, 'sha', 'thunder'],
      ['spade', 7, 'sha', 'thunder'],
      ['club', 7, 'sha', 'thunder'],
      ['club', 8, 'sha', 'thunder'],
      //["spade",8,"sha","thunder"],
      //["club",5,"sha","thunder"],
      //["club",6,"sha","thunder"],
      //["spade",4,"sha","thunder"],//因金庸包加入毒杀邪杀，减少雷杀的量
      //闪、桃、酒
      ['heart', 8, 'shan'],
      ['heart', 9, 'shan'],
      ['heart', 11, 'shan'],
      ['heart', 12, 'shan'],
      ['diamond', 6, 'shan'],
      ['diamond', 7, 'shan'],
      ['diamond', 8, 'shan'],
      ['diamond', 10, 'shan'],
      ['diamond', 11, 'shan'],
      ['heart', 5, 'tao'],
      ['heart', 6, 'tao'],
      ['diamond', 2, 'tao'],
      ['diamond', 3, 'tao'],
      ['diamond', 9, 'jiu'],
      ['spade', 3, 'jiu'],
      ['spade', 9, 'jiu'],
      ['club', 3, 'jiu'],
      ['club', 9, 'jiu'],
      //坐骑 由金庸包坐骑代替
      //["diamond",13,"hualiu"],
      //["club",1,"baiyin"],
      //["spade",2,"tengjia"],
      //["club",2,"tengjia"],
      //["spade",1,"guding"],
      //["diamond",1,"zhuque"],
      //锦囊牌
      ['heart', 2, 'huogong'],
      ['heart', 3, 'huogong'],
      ['diamond', 12, 'huogong'],
      ['spade', 11, 'tiesuo'],
      ['spade', 12, 'tiesuo'],
      ['club', 10, 'tiesuo'],
      ['club', 11, 'tiesuo'],
      ['club', 12, 'tiesuo'],
      ['club', 13, 'tiesuo'],
      ['heart', 13, 'wuxie'],
      ['heart', 13, 'wuxie'],
      ['spade', 13, 'wuxie'],
      ['spade', 10, 'bingliang'],
      ['club', 4, 'bingliang'],
      //['diamond',5,'muniu'],//木牛流马由镖车代替
      /////军争牌包结束/////
      //以下为：为平衡牌堆比例，经计算后自行补充的牌列表
      ['spade', 2, 'sha'],
      ['spade', 7, 'sha'],
      ['spade', 12, 'sha'],
      ['club', 3, 'sha'],
      ['club', 4, 'sha'],
      ['club', 9, 'sha'],
      ['club', 11, 'sha'],
      ['club', 13, 'sha'],
      ['heart', 8, 'sha'],
      ['diamond', 10, 'sha'],
      ['diamond', 6, 'sha'],
      //["spade",5,"sha","thunder"],
      //["club",12,"sha","thunder"],
      ['spade', 7, 'sha', 'ice'],
      ['spade', 8, 'sha', 'ice'],
      ['spade', 7, 'sha', 'ice'],
      ['spade', 8, 'sha', 'ice'],
      ['diamond', 11, 'sha', 'fire'],
      ['diamond', 4, 'sha', 'fire'],
      //轻功闪，相较普通闪，拥有附加技能
      ['heart', 2, 'shan', 'jy_shuangfei'],
      ['heart', 2, 'shan', 'jy_lingbo'],
      ['heart', 13, 'shan', 'jy_shenxing'],
      ['diamond', 2, 'shan', 'jy_dengping'],
      ['diamond', 2, 'shan', 'jy_taxue'],
      ['diamond', 3, 'shan', 'jy_shuangfei'],
      ['diamond', 4, 'shan', 'jy_lingbo'],
      ['diamond', 5, 'shan', 'jy_shenxing'],
      ['diamond', 6, 'shan', 'jy_dengping'],
      ['diamond', 7, 'shan', 'jy_taxue'],
      ['heart', 9, 'tao'],
      ['heart', 6, 'tao'],
      ['heart', 12, 'tao'],
      ['heart', 11, 'tao'],
      ['diamond', 3, 'tao'],
      ['heart', 9, 'jiu'],
      ['spade', 9, 'jiu'],
      ['diamond', 7, 'guohe'],
      ['club', 2, 'guohe'],
      ['spade', 10, 'shunshou'],
      ['club', 5, 'shunshou'],
      ['heart', 1, 'juedou'],
      ['club', 1, 'jiedao'],
      ['heart', 9, 'wuzhong'],
      ['heart', 6, 'wuzhong'],
      ['spade', 4, 'wuxie'],
      ['club', 12, 'wuxie'],
      ['heart', 7, 'wuxie'],
      ['spade', 3, 'tiesuo'],
      ['club', 11, 'tiesuo'],
      ['diamond', 1, 'huogong'],
      //以上为补充列表(因为本扩展有部分DIY卡牌，为保持牌堆各种牌的比例与官方保持基本一致，经计算后，对部分卡牌进行补充)；
      //按官方军争牌堆中的雷杀结构建立的毒杀清单
      ['spade', 4, 'sha', 'jy_du'],
      ['spade', 5, 'sha', 'jy_du'],
      ['spade', 6, 'sha', 'jy_du'],
      ['spade', 7, 'sha', 'jy_du'],
      ['spade', 8, 'sha', 'jy_du'],
      ['club', 5, 'sha', 'jy_du'],
      ['club', 6, 'sha', 'jy_du'],
      ['club', 7, 'sha', 'jy_du'],
      ['club', 8, 'sha', 'jy_du'],
      //邪杀清单
      ['heart', 5, 'sha', 'jy_xie'],
      ['heart', 6, 'sha', 'jy_xie'],
      ['heart', 8, 'sha', 'jy_xie'],
      ['diamond', 7, 'sha', 'jy_xie'],
      ['diamond', 8, 'sha', 'jy_xie']]
      );
      if (lib.config.cards.includes('diy_card_jy')) {
        //金包卡牌///
        lib.card.list.addArray([
        //毒药牌
        ['heart', 4, 'jydiy_qinghua'],
        ['club', 5, 'jydiy_shixiangruanjinsan'],
        ['spade', 2, 'jydiy_beisuqinfeng'],
        //["heart",10,"jydiy_qinghua"],
        //["club",9,"jydiy_shixiangruanjinsan"],
        //["spade",12,"jydiy_beisuqinfeng"],
        //装备测试
        //装备：武器牌
        ['spade', 12, 'jydiy_jinsidahuandao'], //金丝大环刀
        ['diamond', 1, 'jydiy_shenghuoling'], //圣火令（类似连弩）
        ['club', 1, 'jydiy_shenghuoling'],
        ['spade', 2, 'jydiy_xuantiezhongjian'], //玄铁重剑
        ['spade', 2, 'jydiy_junzishunvjian'], //君子淑女剑（类似雌雄剑）
        ['spade', 12, 'jydiy_dagoubang'], //打狗棒
        ['heart', 5, 'jydiy_shediaowangong'], //射雕弯弓
        ['diamond', 1, 'jydiy_xiuhuazhen'], //绣花针
        ['spade', 1, 'jydiy_tulongdao'], //屠龙刀
        ['diamond', 12, 'jydiy_yitianjian'], //倚天剑
        ['spade', 12, 'jydiy_shezhang', 'jy_du'], //蛇杖
        ['spade', 6, 'jydiy_dulongyinbian'], //毒龙银鞭，效果类似青釭剑
        ['diamond', 12, 'jydiy_zhenwujian'], //真武剑
        ['diamond', 1, 'jydiyhuojianqiang'], //火尖枪（类似朱雀扇）
        ['spade', 5, 'jydiy_jingshejian'], //金蛇剑
        ['heart', 1, 'jydiy_xuedao'], //血刀
        ['spade', 13, 'jydiy_xiuchundao'], //绣春刀
        ['spade', 12, 'jydiy_lengyuebaodao'], //冷月宝刀
        //装备：防具牌
        ['club', 2, 'jydiybeidouzhen'], //天罡北斗阵（同仁王盾）
        ['spade', 2, 'jydiytaohuazhen'], //桃花阵（同八卦阵）
        ['club', 2, 'jydiytaohuazhen'], //桃花阵（同八卦阵）
        ['club', 1, 'jydiy_ruanweijia'], //软猬甲（白银狮子改进版）
        ['spade', 2, 'jydiywuchanyi'], //乌蚕衣（类似藤甲）
        //["club",2,"jydiywuchanyi"],
        ['club', 2, 'jydiyhuyitengpai'], //虎衣藤牌（同藤甲）
        //["spade",2,"jydiyhuyitengpai"],
        ['spade', 2, 'jydiy_jingsibeixin'], //金丝背心
        //["club",2,"jydiy_jingsibeixin"],
        //装备：坐骑牌
        ['spade', 13, 'jydiyzhuifenghuang'], //追风黄
        ['heart', 5, 'jydiyfeiyunzhui'], //飞云骓
        ['diamond', 13, 'jydiyhanxuebaoma'], //汗血宝马
        ['diamond', 13, 'jydiyyinshuangzhudianju'], //银霜逐电驹
        ['heart', 13, 'jydiyyuhuacong'], //玉花骢
        ['spade', 5, 'jydiyheimeigui'], //黑玫瑰
        ['club', 5, 'jydiywuyungaixue'], //乌云盖雪
        ['club', 5, 'jydiyyanyunfeiqi'], //燕云飞骑
        //装备：宝物牌（秘籍牌）
        ['spade', 13, 'jydiy_shenmuwangding'], //神木王鼎
        ['club', 1, 'jydiy_kuihuabaodian'], //葵花宝典
        ['heart', 9, 'jydiy_jiuyinzhengjing'], //九阴真经
        ['spade', 9, 'jydiy_jiuyangzhengjing'], //九阳真经
        ['spade', 11, 'jydiy_wumuyishu'], //武穆遗书
        ['spade', 12, 'jydiy_yaowangshenpian'], //药王神篇
        ['diamond', 5, 'jydiybiaoche'], //镖车
        //["spade",7,"jydiy_mangguzhuha"],//莽牯朱蛤
        //["spade",7,"jydiy_shendiao"],//神雕
        //延时锦囊牌
        ['spade', 1, 'jydiyshengsifu'], //生死符（替换闪电，造成冰属性伤害）
        ['heart', 12, 'jydiyshengsifu'],
        ['club', 5, 'jydiy_zouhuorumo'], //走火入魔
        ['spade', 5, 'jydiy_zouhuorumo'],
        ['heart', 6, 'jydiy_yungongliaoshang'], //运功疗伤
        ['diamond', 6, 'jydiy_yungongliaoshang'],
        //普通锦囊牌：暗器牌
        //["diamond",7,"jydiy_qixingding"],//七星钉
        ['club', 7, 'jydiy_qixingding'],
        ['diamond', 1, 'jydiy_fuguzheng'], //附骨针
        //["club",12,"jydiy_fuguzheng"],
        ['club', 13, 'jydiy_feiyanyinsuo'], //飞燕银梭
        //["club",13,"jydiy_feiyanyinsuo"],
        ['heart', 6, 'jydiy_hanshasheying'], //含沙射影
        //["spade",8,"jydiy_hanshasheying"],
        ['spade', 11, 'jydiy_bingpoyinzhen'] //冰魄银针
        //["spade",7,"jydiy_bingpoyinzhen"],
        ]);
      }
      lib.card.list.randomSort();
    });
  } else if (config && config == '2') {
    //可混包
    lib.arenaReady.push(function () {
      //牌堆补充列表(因为本扩展有部分DIY卡牌，为保持牌堆各种牌的比例与官方保持基本一致，经计算后，对部分卡牌进行补充)
      var list = [
      ['spade', 2, 'sha'],
      ['spade', 7, 'sha'],
      ['spade', 12, 'sha'],
      ['club', 3, 'sha'],
      ['club', 4, 'sha'],
      ['club', 9, 'sha'],
      ['club', 11, 'sha'],
      ['club', 13, 'sha'],
      ['heart', 8, 'sha'],
      ['diamond', 10, 'sha'],
      ['diamond', 6, 'sha'],
      ['spade', 7, 'sha', 'ice'],
      ['spade', 8, 'sha', 'ice'],
      ['diamond', 11, 'sha', 'fire'],
      ['diamond', 4, 'sha', 'fire'],
      ['heart', 13, 'shan'],
      ['heart', 4, 'shan'],
      ['heart', 9, 'shan'],
      ['diamond', 3, 'shan'],
      ['diamond', 12, 'shan'],
      ['diamond', 11, 'shan'],
      ['diamond', 10, 'shan'],
      ['diamond', 8, 'shan'],
      ['heart', 9, 'tao'],
      ['heart', 6, 'tao'],
      ['heart', 12, 'tao'],
      ['diamond', 3, 'tao'],
      ['heart', 9, 'jiu'],
      ['spade', 9, 'jiu'],
      ['diamond', 7, 'guohe'],
      ['club', 2, 'guohe'],
      ['spade', 10, 'shunshou'],
      ['club', 5, 'shunshou'],
      ['heart', 1, 'juedou'],
      ['club', 1, 'jiedao'],
      ['heart', 9, 'wuzhong'],
      ['heart', 6, 'wuzhong'],
      ['spade', 4, 'wuxie'],
      ['club', 12, 'wuxie'],
      ['heart', 7, 'wuxie'],
      ['spade', 3, 'tiesuo'],
      ['club', 11, 'tiesuo'],
      ['diamond', 1, 'huogong'],
      //按官方军争牌堆中的雷杀结构建立的毒杀清单
      ['spade', 4, 'sha', 'jy_du'],
      ['spade', 5, 'sha', 'jy_du'],
      ['spade', 6, 'sha', 'jy_du'],
      ['spade', 7, 'sha', 'jy_du'],
      ['spade', 8, 'sha', 'jy_du'],
      ['club', 5, 'sha', 'jy_du'],
      ['club', 6, 'sha', 'jy_du'],
      ['club', 7, 'sha', 'jy_du'],
      ['club', 8, 'sha', 'jy_du'],
      //邪杀清单
      ['heart', 5, 'sha', 'jy_xie'],
      ['heart', 6, 'sha', 'jy_xie'],
      ['heart', 8, 'sha', 'jy_xie'],
      ['diamond', 7, 'sha', 'jy_xie'],
      ['diamond', 8, 'sha', 'jy_xie']];

      //删除列表,如出现不想某些牌出现在金庸牌堆列表中的,请填写它的名字//
      //建议使用删除比较省事，这样就不用在自定义列表删除相应的牌//
      var names = [
      //标准&军争牌堆删除列表
      //'leisha',//雷杀
      'shandian', //闪电
      'bagua', //八卦阵
      'renwang', //仁王盾
      'baiyin', //白银狮子
      'hualiu', //骅骝
      'jueying', //绝影
      'dilu', //的卢
      'zhuahuang', //爪黄飞电
      'chitu', //赤兔
      'dawan', //大宛
      'zixin', //紫骍
      'zhuge', //诸葛连弩
      'cixiong', //雌雄双股剑
      'qinggang', //青釭剑
      'qinglong', //青龙偃月刀
      'zhangba', //丈八蛇矛
      'guanshi', //贯石斧
      'fangtian', //方天画戟
      'qilin', //麒麟弓
      'hanbing', //寒冰剑
      'guding', //古锭刀
      'zhuque', //朱雀羽扇
      'tengjia', //藤甲
      'muniu' //木牛流马
      ];
      var replaced = {




        //替换前牌名:替换后牌名
        //八卦阵替换为桃花阵，请在自定义卡牌列表列表删掉桃花阵
        //其他卡牌皆以此法替换
        //"bagua":'jydiytaohuazhen',
      };for (var i = 0; i < lib.card.list.length; i++) {var name = lib.card.list[i][2];if (replaced[name]) {var map = replaced[name];
          if (lib.card[map]) {
            lib.card.list[i][2] = map;
          } else {
            alert('卡牌' + map + '未定义请仔细检查!');
          }
        } else if (names.includes(name)) {
          lib.card.list.splice(i--, 1);
        } else if (name == 'sha' && lib.card.list[i][3] && lib.card.list[i][3] == 'thunder') {
          lib.card.list.splice(i--, 1);
        }
      }
      if (list.length) lib.card.list.addArray(list);
    });
  } else if (config && config == '3') {
    ///添加邪杀毒杀///
    //设置牌的点数 例如1,13
    //最小为1最大为13
    var setnum = function (num, num2) {
      return num + Math.floor(Math.random() * (num2 - num + 1));
    };
    var setsuit = function (suit) {
      if (suit && suit == 'red') {
        return ['diamond', 'heart'].randomGet();
      } else if (suit && suit == 'black') {
        return ['spade', 'club'].randomGet();
      } else return ['club', 'spade', 'diamond', 'heart'].randomGet();
    };
    ////添加一副标准和军争卡牌 其中军争的属性杀改为邪杀毒杀////
    lib.card.list.addArray([
    ['spade', 7, 'sha'],
    ['spade', 8, 'sha'],
    ['spade', 8, 'sha'],
    ['spade', 9, 'sha'],
    ['spade', 9, 'sha'],
    ['spade', 10, 'sha'],
    ['spade', 10, 'sha'],
    ['club', 2, 'sha'],
    ['club', 3, 'sha'],
    ['club', 4, 'sha'],
    ['club', 5, 'sha'],
    ['club', 6, 'sha'],
    ['club', 7, 'sha'],
    ['club', 8, 'sha'],
    ['club', 8, 'sha'],
    ['club', 9, 'sha'],
    ['club', 9, 'sha'],
    ['club', 10, 'sha'],
    ['club', 10, 'sha'],
    ['club', 11, 'sha'],
    ['club', 11, 'sha'],
    ['heart', 10, 'sha'],
    ['heart', 10, 'sha'],
    ['heart', 11, 'sha'],
    ['diamond', 6, 'sha'],
    ['diamond', 7, 'sha'],
    ['diamond', 8, 'sha'],
    ['diamond', 9, 'sha'],
    ['diamond', 10, 'sha'],
    ['diamond', 13, 'sha'],
    ['heart', 2, 'shan'],
    ['heart', 2, 'shan'],
    ['heart', 13, 'shan'],
    ['diamond', 2, 'shan'],
    ['diamond', 2, 'shan'],
    ['diamond', 3, 'shan'],
    ['diamond', 4, 'shan'],
    ['diamond', 5, 'shan'],
    ['diamond', 6, 'shan'],
    ['diamond', 7, 'shan'],
    ['diamond', 8, 'shan'],
    ['diamond', 9, 'shan'],
    ['diamond', 10, 'shan'],
    ['diamond', 11, 'shan'],
    ['diamond', 11, 'shan'],
    ['heart', 3, 'tao'],
    ['heart', 4, 'tao'],
    ['heart', 6, 'tao'],
    ['heart', 7, 'tao'],
    ['heart', 8, 'tao'],
    ['heart', 9, 'tao'],
    ['heart', 12, 'tao'],
    ['diamond', 12, 'tao'],
    ['spade', 2, 'bagua'],
    ['club', 2, 'bagua'],
    ['spade', 5, 'jueying'],
    ['club', 5, 'dilu'],
    ['heart', 13, 'zhuahuang'],
    ['heart', 5, 'chitu'],
    ['spade', 13, 'dawan'],
    ['diamond', 13, 'zixin'],
    ['club', 1, 'zhuge'],
    ['diamond', 1, 'zhuge'],
    ['spade', 2, 'cixiong'],
    ['spade', 6, 'qinggang'],
    ['spade', 5, 'qinglong'],
    ['spade', 12, 'zhangba'],
    ['diamond', 5, 'guanshi'],
    ['diamond', 12, 'fangtian'],
    ['heart', 5, 'qilin'],
    ['heart', 3, 'wugu'],
    ['heart', 4, 'wugu'],
    ['heart', 1, 'taoyuan'],
    ['spade', 7, 'nanman'],
    ['spade', 13, 'nanman'],
    ['club', 7, 'nanman'],
    ['heart', 1, 'wanjian'],
    ['spade', 1, 'juedou'],
    ['club', 1, 'juedou'],
    ['diamond', 1, 'juedou'],
    ['heart', 7, 'wuzhong'],
    ['heart', 8, 'wuzhong'],
    ['heart', 9, 'wuzhong'],
    ['heart', 11, 'wuzhong'],
    ['spade', 3, 'shunshou'],
    ['spade', 4, 'shunshou'],
    ['spade', 11, 'shunshou'],
    ['diamond', 3, 'shunshou'],
    ['diamond', 4, 'shunshou'],
    ['spade', 3, 'guohe'],
    ['spade', 4, 'guohe'],
    ['spade', 12, 'guohe'],
    ['club', 3, 'guohe'],
    ['club', 4, 'guohe'],
    ['heart', 12, 'guohe'],
    ['club', 12, 'jiedao'],
    ['club', 13, 'jiedao'],
    ['spade', 11, 'wuxie'],
    ['club', 12, 'wuxie'],
    ['club', 13, 'wuxie'],
    ['spade', 6, 'lebu'],
    ['club', 6, 'lebu'],
    ['heart', 6, 'lebu'],
    ['spade', 1, 'shandian'],
    ['spade', 2, 'hanbing'],
    ['club', 2, 'renwang'],
    ['heart', 12, 'shandian'],
    ['diamond', 12, 'wuxie'],
    /////////////////////////////
    ['heart', 4, 'sha', 'jy_xie'],
    ['heart', 7, 'sha', 'jy_xie'],
    ['heart', 10, 'sha', 'jy_xie'],
    ['diamond', 4, 'sha', 'jy_xie'],
    ['diamond', 5, 'sha', 'jy_xie'],
    ['spade', 4, 'sha', 'jy_du'],
    ['spade', 5, 'sha', 'jy_du'],
    ['spade', 6, 'sha', 'jy_du'],
    ['spade', 7, 'sha', 'jy_du'],
    ['spade', 8, 'sha', 'jy_du'],
    ['club', 5, 'sha', 'jy_du'],
    ['club', 6, 'sha', 'jy_du'],
    ['club', 7, 'sha', 'jy_du'],
    ['club', 8, 'sha', 'jy_du'],
    ['heart', 8, 'shan'],
    ['heart', 9, 'shan'],
    ['heart', 11, 'shan'],
    ['heart', 12, 'shan'],
    ['diamond', 6, 'shan'],
    ['diamond', 7, 'shan'],
    ['diamond', 8, 'shan'],
    ['diamond', 10, 'shan'],
    ['diamond', 11, 'shan'],
    ['heart', 5, 'tao'],
    ['heart', 6, 'tao'],
    ['diamond', 2, 'tao'],
    ['diamond', 3, 'tao'],
    ['diamond', 9, 'jiu'],
    ['spade', 3, 'jiu'],
    ['spade', 9, 'jiu'],
    ['club', 3, 'jiu'],
    ['club', 9, 'jiu'],
    ['diamond', 13, 'hualiu'],
    ['club', 1, 'baiyin'],
    ['spade', 2, 'tengjia'],
    ['club', 2, 'tengjia'],
    ['spade', 1, 'guding'],
    ['diamond', 1, 'zhuque'],
    ['heart', 2, 'huogong'],
    ['heart', 3, 'huogong'],
    ['diamond', 12, 'huogong'],
    ['spade', 11, 'tiesuo'],
    ['spade', 12, 'tiesuo'],
    ['club', 10, 'tiesuo'],
    ['club', 11, 'tiesuo'],
    ['club', 12, 'tiesuo'],
    ['club', 13, 'tiesuo'],
    ['heart', 13, 'wuxie'],
    ['heart', 13, 'wuxie'],
    ['spade', 13, 'wuxie'],
    ['spade', 10, 'bingliang'],
    ['club', 4, 'bingliang'],
    ['diamond', 5, 'muniu']]
    );
  }
});