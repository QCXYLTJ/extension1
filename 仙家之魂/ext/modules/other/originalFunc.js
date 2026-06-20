import hash from './hash.js';
import checkChange from './checkChangeFunc.js';
const original = {
  xjzh_originalFunction(ret) {
    if (ret) {
      //判断是否打开了控制台
      if (!_status.event.AchiCover) {
        if (!game.xjzh_filterEligible()) return;
      }
      //统计本剧得分
      let player = game.me,qishumingyushi = window.qishumingyushi;
      //限制仅为身份模式、斗地主模式、挑战模式，否则终止运行
      if (!['identity', 'doudizhu', 'boss'].includes(get.mode())) return;
      if (get.mode() == "boss") {
        //如果为挑战模式且玩家为boss则终止运行
        if (game.boss == player) return;
        if (!get.isXHwujiang(game.boss)) return;
      }
      //判断是否为身份模式或斗地主模式
      else if (['identity', 'doudizhu'].includes(get.mode())) {
        //如果玩家操作的武将不为仙家之魂武将则终止运行
        if (!get.isXHwujiang(player)) return;
      }
      let draw = player.getAllHistory('draw').length,use = player.getAllHistory('useCard').length,damage = player.getAllHistory('damage').length,source = player.getAllHistory('sourceDamage').length,kill = player.getAllHistory('kill').length,recover = player.getAllHistory('recover').length;
      //var num=get.rand(1,2);
      let num = 1 + lib.config.xjzh_qishuyaojians.level / 20;
      //var num2=Math.floor(((draw>use?use+draw/2:use)+(source-damage)+(source==kill?kill:source)+recover)*num);
      //对局得分不再计算摸牌数
      let num3 = Math.floor(use + (source - damage) + (source == kill ? kill : source) + recover),num2 = (use + (source - damage) + (source == kill ? kill : source) + recover) * num;
      let qishuReward = {
        "jingpo": 0,
        "suipian": 0,
        "qishuyaojian": {},
        "cailiao": {
          "xjzh_cailiao_enianzhixin": 0,
          "xjzh_cailiao_gangtie": 0,
          "xjzh_cailiao_kongju": 0,
          "xjzh_cailiao_xianxue": 0
        }
      };
      //碎片获得
      let suipian = Math.floor(num2);
      qishuReward.suipian += window.qishumingyushi === true ? suipian * 2 : suipian;
      //材料获得
      let { ...cailiaoList } = lib.config.xjzh_qishuyaojians.cailiao,cailiaoList2 = Object.keys(cailiaoList).filter(function (item) {
          return ["xjzh_cailiao_enianzhixin", "xjzh_cailiao_gangtie", "xjzh_cailiao_kongju", "xjzh_cailiao_xianxue"].includes(item);
        });
      for (let num = 1; num <= 3; num++) {
        let randomNum = suipian < 50 ? 0.25 : num2 / 200,index = cailiaoList2.randomGet();
        if (Math.random() <= randomNum) qishuReward.cailiao[index] += 1;
      }
      if (Math.random() <= 0.25 * (qishumingyushi ? 2 : 1)) qishuReward.cailiao.xjzh_cailiao_mingyushi += 1;
      let qishuList = [],qishuLevelArr,number,qishuLevel4;
      for (let i in lib.xjzh_qishuyaojians) {
        let level = get.xjzh_equipInfo(i).level || 1;
        if (level && level < 5) qishuList.push(i);
      }
      //精魄及奇术要件获得，若boss为莉莉丝则必定获得一个精魄，额外获得至少0个，至多为3个;
      if (get.mode() == "boss") {
        //消耗材料
        switch (get.nameList(game.boss)[0]) {
          //如果boss为莉莉丝
          //必定获得精魄1个，额外获得0-3个精魄
          //额外获得60个碎片
          //最终获得碎片数量乘2
          //随机获得1-4级奇术要件1个
          //必定掉落一个冥狱石
          case "xjzh_boss_lilisi":
            qishuReward.jingpo += qishumingyushi ? 1 : 2 + get.rand(0, 3);
            qishuLevelArr = qishuList.randomGet();
            if (qishumingyushi == true) {
              number = 2;
              while (number > 0) {
                if (!qishuReward.qishuyaojian[qishuLevelArr]) qishuReward.qishuyaojian[qishuLevelArr] = 0;
                qishuReward.qishuyaojian[qishuLevelArr]++;
                number--;
              }
            } else {
              if (!qishuReward.qishuyaojian[qishuLevelArr]) qishuReward.qishuyaojian[qishuLevelArr] = 0;
              qishuReward.qishuyaojian[qishuLevelArr]++;
            }
            if (!qishuReward.cailiao.xjzh_cailiao_shijieshi) qishuReward.cailiao.xjzh_cailiao_shijieshi = 0;
            qishuReward.cailiao.xjzh_cailiao_shijieshi += qishumingyushi ? 2 : 1;
            if (!qishuReward.cailiao.xjzh_cailiao_mingyushi) qishuReward.cailiao.xjzh_cailiao_mingyushi = 0;
            qishuReward.cailiao.xjzh_cailiao_mingyushi += qishumingyushi ? 2 : 1;
            qishuReward.suipian += qishumingyushi ? 60 * 2 : 60;
            qishuReward.suipian *= 2;
            break;
          //如果boss为瓦尔申
          //获得粘液覆盖的蛋1个
          //额外获得10个碎片
          //必定掉落疯狼的狂喜、瓦西里的祷告之一
          case "xjzh_boss_waershen":
            number = 1;
            if (!qishuReward.cailiao.xjzh_cailiao_nianyedan) qishuReward.cailiao.xjzh_cailiao_nianyedan = 0;
            if (game.xjzhAchi.hasAchi('净化恶念', 'game')) number = 2;
            qishuReward.cailiao.xjzh_cailiao_nianyedan += qishumingyushi ? number * 2 : number;
            qishuReward.suipian += qishumingyushi ? 10 * 2 : 10;
            break;
          //如果boss为格里高利
          //获得苦痛碎片1个
          //额外获得10个碎片
          case "xjzh_boss_geligaoli":
            if (!qishuReward.cailiao.xjzh_cailiao_kutong) qishuReward.cailiao.xjzh_cailiao_kutong = 0;
            qishuReward.cailiao.xjzh_cailiao_kutong += qishumingyushi ? 2 : 1;
            qishuReward.suipian += qishumingyushi ? 10 * 2 : 10;
            break;
          //如果boss为都瑞尔
          //额外获得45个碎片
          //必定掉落风暴咆哮、瓦西里的祷告、痛苦吞食者之一
          //有几率掉落一个冥狱石
          case "xjzh_boss_duruier":
            randomNum = Object.keys(cailiaoList).length / 0.5 / 100;
            if (Math.random() < randomNum) {
              if (!qishuReward.cailiao.xjzh_cailiao_mingyushi) qishuReward.cailiao.xjzh_cailiao_mingyushi = 0;
              qishuReward.cailiao.xjzh_cailiao_mingyushi += qishumingyushi ? 2 : 1;;
            }
            qishuReward.suipian += qishumingyushi ? 45 * 2 : 45;
            qishuLevel4 = ["xjzh_qishu_fengbaopaoxiao", "xjzh_qishu_xjzh_qishu_waxilidedaogao", "xjzh_qishu_tongkuhushou"];
            if (qishumingyushi == true) {
              number = 2;
              while (number > 0) {
                let qishuLevel4Arr = qishuLevel4.randomGet();
                if (!qishuReward.qishuyaojian[qishuLevel4Arr]) qishuReward.qishuyaojian[qishuLevel4Arr] = 0;
                qishuReward.qishuyaojian[qishuLevel4Arr]++;
                number--;
              }
            } else {
              let qishuLevel4Arr = qishuLevel4.randomGet();
              if (!qishuReward.qishuyaojian[qishuLevel4Arr]) qishuReward.qishuyaojian[qishuLevel4Arr] = 0;
              qishuReward.qishuyaojian[qishuLevel4Arr]++;
            }
            break;
          //如果boss为齐尔领主
          //获得焦沙枷锁1个
          //额外获得10个碎片
          //必定掉落疯狼的狂喜、瓦西里的祷告之一
          case "xjzh_boss_qier":
            if (!qishuReward.cailiao.xjzh_cailiao_jiasuo) qishuReward.cailiao.xjzh_cailiao_jiasuo = 0;
            qishuReward.cailiao.xjzh_cailiao_jiasuo += qishumingyushi ? 2 : 1;
            qishuReward.suipian += qishumingyushi ? 10 * 2 : 10;
            qishuLevel4 = ["xjzh_qishu_fenglangkx", "xjzh_qishu_waxilidedaogao"];
            if (qishumingyushi == true) {
              number = 2;
              while (number > 0) {
                let qishuLevel4Arr = qishuLevel4.randomGet();
                if (!qishuReward.qishuyaojian[qishuLevel4Arr]) qishuReward.qishuyaojian[qishuLevel4Arr] = 0;
                qishuReward.qishuyaojian[qishuLevel4Arr]++;
                number--;
              }
            } else {
              let qishuLevel4Arr = qishuLevel4.randomGet();
              if (!qishuReward.qishuyaojian[qishuLevel4Arr]) qishuReward.qishuyaojian[qishuLevel4Arr] = 0;
              qishuReward.qishuyaojian[qishuLevel4Arr]++;
            }
            break;
          //如果boss为冰川巨兽
          //获得针扎娃娃1个
          //额外获得10个碎片
          case "xjzh_boss_bingchuanjushou":
            if (!qishuReward.cailiao.xjzh_cailiao_wawa) qishuReward.cailiao.xjzh_cailiao_wawa = 0;
            qishuReward.cailiao.xjzh_cailiao_wawa += qishumingyushi ? 2 : 1;
            qishuReward.suipian += qishumingyushi ? 10 * 2 : 10;
            break;
          //如果boss为安达利尔
          //额外获得45个碎片
          //必定掉落无餍之怒、疯狼的狂喜、无名者兜帽之一
          //有几率掉落一个冥狱石
          case "xjzh_boss_andalier":
            randomNum = Object.keys(cailiaoList).length / 0.5 / 100;
            if (Math.random() < randomNum) {
              if (!qishuReward.cailiao.xjzh_cailiao_mingyushi) qishuReward.cailiao.xjzh_cailiao_mingyushi = 0;
              qishuReward.cailiao.xjzh_cailiao_mingyushi += qishumingyushi ? 2 : 1;
            }
            qishuReward.suipian += qishumingyushi ? 45 * 2 : 45;
            qishuLevel4 = ["xjzh_qishu_wuyan", "xjzh_qishu_fenglangkx", "xjzh_qishu_wumingzhe"];
            if (qishumingyushi == true) {
              number = 2;
              while (number > 0) {
                let qishuLevel4Arr = qishuLevel4.randomGet();
                if (!qishuReward.qishuyaojian[qishuLevel4Arr]) qishuReward.qishuyaojian[qishuLevel4Arr] = 0;
                qishuReward.qishuyaojian[qishuLevel4Arr]++;
                number--;
              }
            } else {
              let qishuLevel4Arr = qishuLevel4.randomGet();
              if (!qishuReward.qishuyaojian[qishuLevel4Arr]) qishuReward.qishuyaojian[qishuLevel4Arr] = 0;
              qishuReward.qishuyaojian[qishuLevel4Arr]++;
            }
            break;
        };
      }
      //展示奖励结算面板数据
      let str = '当前模式：' + get.translation(get.mode()) + '<br><br>当前玩家：' + lib.config.xjzh_qishuyaojians.name + '（' + get.translation(get.nameList(game.me)[0]) + '）<br><br>总计得分：' + suipian + '<br><br>对局奖励：';
      str += '<br>&emsp;&emsp;经验（' + num3 + '）';
      for (let i in qishuReward) {
        switch (i) {
          case "suipian":{
              if (qishuReward[i] > 0) {
                this.xjzh_changeSuipian(qishuReward[i]);
                str += '<br>&emsp;&emsp;碎片（' + qishuReward[i] + '个）';
              }
            };
            break;
          case "jingpo":{
              if (qishuReward[i] > 0) {
                this.xjzh_changeTokens(qishuReward[i]);
                str += '<br>&emsp;&emsp;精魄（' + qishuReward[i] + '个）';
              }
            };
            break;
          case "qishuyaojian":{
              let qishuListt = qishuReward[i];
              if (Object.keys(qishuListt).length > 0) {
                for (let j in qishuListt) {
                  if (qishuListt[j] > 0) {
                    this.xjzh_gainEquip(j, qishuListt[j]);
                    str += '<br>&emsp;&emsp;' + get.xjzh_qishuTranslate(j) + '（' + qishuListt[j] + '个）';
                  }
                }
              }
            };
            break;
          case "cailiao":{
              let cailiaoListt = qishuReward[i];
              for (let j in cailiaoListt) {
                if (cailiaoListt[j] > 0) {
                  this.xjzh_changeCailiao(j, cailiaoListt[j]);
                  str += '<br>&emsp;&emsp;' + get.xjzh_cailiaoTranslate(j) + '（' + cailiaoListt[j] + '个）';
                }
              }
            };
            break;
        };
      }
      let doneAchievemen = lib.xjzh_hasDoneAchievement;
      if (doneAchievemen && doneAchievemen.length > 0) {
        str += "<br>成就奖励：";
        for (let i of doneAchievemen) {
          let name = i.split(",");
          let info = game.xjzhAchi.info(name[1], name[0]);
          str += `<br>&emsp;&emsp;${name[1]}：<br>&emsp;&emsp;&emsp;&emsp;碎片：${info.level * 50}<br>&emsp;&emsp;&emsp;&emsp;精魄：${info.level}`;
        }
      }
      this.xjzh_levelUp(qishumingyushi ? num3 * 2 : num3);
      this.xjzh_qishuWinner("奖励结算", str);
    }
  },
  xjzh_withPreCheck(originalFunction) {
    let that = this;
    return function (ret) {
      const player = game.me;
      if (!['identity', 'doudizhu', 'boss'].includes(get.mode())) return;
      if (get.mode() == "boss") {
        if (game.boss == player) return;
        if (!get.isXHwujiang(game.boss)) return;
      } else
      if (['identity', 'doudizhu'].includes(get.mode())) {
        if (!get.isXHwujiang(player)) return;
      }
      originalFunction.bind(that)(ret);
    };
  }
};
Reflect.defineProperty(window, 'originalFunction', {
  value: original.originalFunction
});
Reflect.defineProperty(window, 'withPreCheck', {
  value: original.withPreCheck
});
const hashs = hash;
for (let value in hashs) {
  if (!checkChange.checkChangeFunc(game[value], hashs[value])) game[value] = original[value];
}