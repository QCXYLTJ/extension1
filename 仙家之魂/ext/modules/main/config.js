import { lib, get, _status, ui, game, ai } from '../../../../../noname.js';
export const config = {
  死亡移除: {
    name: '<span class="Qmenu">死亡移除</span>',
    intro: '死亡后移出游戏',
    init: true,
    onclick(result) {
      game.saveConfig('dieremove', result);
    }
  },
  xjzh_help: {
    name: '扩展介绍',
    init: '1',
    item: {
      1: '<span style="color: #f9ed89">查看信息</span>',
      2: '<li><span style="color: #f9ed89">技能设计：</span></br>吃朵棉花糖、光明牛奶',
      3: '<li><span style="color: #f9ed89">代码编绎：</span></br>吃朵棉花糖'
    }
  },
  xjzh_intro1: {
    name: '代码参照',
    init: '1',
    item: {
      1: '<span style="color: #f9ed89">查看信息</span>',
      2: '<span style="color: #f9ed89">《仙家之魂》部分代码借鉴了其他扩展部分代码，感谢以下大佬的支持和技能/扩展作者</span>',
      3: '<li>在线更新部分代码——诗笺<li>郭嘉·鬼谋——《金庸群侠传·绝独孤求败·无招》<li>沐风·风阵——《金庸群侠传·绝郭靖·镇卫》<li>沐风·纵火——《金庸群侠传·朱长龄·焚庄》<li>林子言·雷域——《血色衣冠·朱棣·盛威》<li>东方曜·归尘——《金庸群侠传·项少龙·穿越》<li>漩涡鸣人·六道分身——《金庸群侠传·项少龙·穿越》'
    }
  },
  xjzh_intro2: {
    name: '特别鸣谢',
    init: '1',
    item: {
      1: '<span style="color: #f9ed89">查看信息</span>',
      2: '<span style="color: #f9ed89">本扩展借鉴了部分扩展，或一些大佬对本扩展代码、素材或其他方面进行了支持，感谢这部分大佬，以下名单不分先后：',
      3: '落影逝尘、霸天、寰宇星城、苏婆马里奥、Sukincen、西野七濑、xiaos、鸽尔赞、诗笺、大熊小猫、Maybe、光明牛奶、缘伴随行'
    }
  },
  //美化类选项
  xjzh_decoration: {
    name: '<img style=width:260px src=extension/仙家之魂/image/title/xjzh_decoration.png>',
    intro: '',
    init: true,
    clear: true
  },
  xjzh_Background_Music: {
    name: '背景音乐',
    intro: '背景音乐：可随意点播、切换优质动听的背景音乐',
    init: game.getExtensionConfig('仙家之魂', 'xjzh_Background_Music') === undefined ? '1' : game.getExtensionConfig('仙家之魂', 'xjzh_Background_Music'),
    item: {
      0: '随机播放',
      1: '默认音乐',
      2: '国战鏖战',
      3: '犬夜叉',
      4: '风一样的勇士',
      5: '痛苦之村'
    },
    onclick(item) {
      game.saveExtensionConfig('仙家之魂', 'xjzh_Background_Music', item);
      game.xjzhplayBackgroundMusic();
      ui.backgroundMusic.addEventListener('ended', game.xjzhplayBackgroundMusic);
    },
    visualMenu(node, link) {
      node.style.height = node.offsetWidth * 1.33 + 'px';
      node.style.backgroundSize = '100% 100%';
      node.className = ' xjzhmusicname';
      node.setBackgroundImage('extension/仙家之魂/image/music/' + link + '.png');
    }
  },
  xjzh_Background_Picture: {
    name: '背景图片',
    intro: '背景图片：可随意切换精美高清的背景图片。',
    init: game.getExtensionConfig('仙家之魂', 'xjzh_Background_Picture') === undefined ? '1' : game.getExtensionConfig('仙家之魂', 'xjzh_Background_Picture'),
    item: {
      1: '默认背景',
      xjzh_Background1: '火影博人',
      xjzh_Background2: '牛仔风华',
      xjzh_Background3: '冰肌玉骨',
      xjzh_Background4: '吊带连心',
      xjzh_Background5: '池水深深',
      xjzh_Background6: '碧波荡漾',
      auto: '自动换背景'
    },
    onclick(item) {
      game.saveExtensionConfig('仙家之魂', 'xjzh_Background_Picture', item);
      game.xjzhBackground_Picture();
    },
    visualMenu(node, link) {
      //link是冒号前面的，比如default:经典卡背，link就是default
      node.style.height = node.offsetWidth * 0.67 + 'px';
      //高度设置成宽度的0.67倍
      node.style.backgroundSize = '100% 100%';
      //图片拉伸
      node.className = 'button character xjzhbackgroundname';
      node.setBackgroundImage('extension/仙家之魂/picture/' + link + '.jpg');
      //设置图片
    }
  },
  xjzh_Background_Picture_auto: {
    name: '自动换背景时间',
    intro: '设置自动换背景的时间',
    init: game.getExtensionConfig('仙家之魂', 'xjzh_Background_Picture_auto') === undefined ? '30000' : game.getExtensionConfig('仙家之魂', 'xjzh_Background_Picture_auto'),
    item: {
      5000: '五秒',
      10000: '十秒',
      20000: '二十秒',
      30000: '半分钟',
      60000: '一分钟',
      120000: '两分钟',
      300000: '五分钟'
    },
    onclick(item) {
      game.saveExtensionConfig('仙家之魂', 'xjzh_Background_Picture_auto', item);
      if (game.getExtensionConfig('仙家之魂', 'xjzh_Background_Picture_auto') == 'auto') {
        game.xjzhBackground_Picture();
      }
    }
  },
  //功能类选项
  xjzh_function: {
    name: '<img style=width:260px src=extension/仙家之魂/image/title/xjzh_function.png>',
    intro: '',
    init: true,
    clear: true
  },
  xjzh_qishuyaojianOptions: {
    name: '奇术要件',
    intro: '开启奇术要件功能，关闭将关闭所有奇术要件相关功能、UI等，默认关闭',
    init: game.getExtensionConfig('仙家之魂', 'xjzh_qishuyaojianOptions') ? game.getExtensionConfig('仙家之魂', 'xjzh_qishuyaojianOptions') : 'close',
    item: {
      all: '所有武将开启',
      own: '仅仙魂武将开启',
      close: '关闭'
    },
    onclick(item) {
      game.saveExtensionConfig('仙家之魂', 'xjzh_qishuyaojianOptions', item);
      if (item === 'close') game.saveExtensionConfig('仙家之魂', 'xjzh_qishuBossPower', true);else
      game.saveExtensionConfig('仙家之魂', 'xjzh_qishuBossPower', false);
    }
  },
  xjzh_qishuBossPower: {
    name: '强化奇术Boss',
    intro: '本功能需要开启“奇术要件”按钮，开启后对局将有几率掉落材料冥狱石，挑战奇术Boss时，如果背包中有该材料，将默认消耗2个冥狱石开启强化boss挑战，在该模式下胜利将会获得巨额奖励。',
    init: false,
    onclick(item) {
      let config = game.getExtensionConfig('仙家之魂', 'xjzh_qishuyaojianOptions');
      if (!config || config === 'close') {
        alert('奇术要件功能未开启，请开启后使用');
        return;
      }
      game.saveExtensionConfig('仙家之魂', 'xjzh_qishuBossPower', item);
    }
  },
  xjzh_poelose: {
    name: 'poelose',
    intro: '是否要求POE武将移除技能',
    init: true,
    onclick(item) {
      game.saveExtensionConfig('仙家之魂', 'xjzh_poelose', item);
    }
  },
  xjzh_zengyiSetting: {
    name: '增益技能',
    intro: '开启此选项武将在开局时随机获得一个增益技能，该增益技能AI无法获得',
    init: game.getExtensionConfig('仙家之魂', 'xjzh_zengyiSetting') !== undefined ? game.getExtensionConfig('仙家之魂', 'xjzh_zengyiSetting') : 'player',
    item: {
      player: '仅玩家可获得',
      own: '仅仙魂武将获得',
      close: '关闭增益'
    },
    onclick(item) {
      game.saveExtensionConfig('仙家之魂', 'xjzh_zengyiSetting', item);
    }
  },
  xjzh_changeGroup: {
    name: '替换势力',
    intro: '开启后重启游戏生效，将武将势力由“魏蜀吴群”替换为本扩展的“星”势力',
    init: true,
    onclick(item) {
      game.saveExtensionConfig('仙家之魂', 'xjzh_changeGroup', item);
    }
  },
  xjzh_ShowmaxHandcard: {
    name: '手牌上限',
    init: false,
    intro: '将游戏内显示的手牌数改为显示手牌数与手牌上限。(例：2/3，代表拥有2张牌，手牌上限为3)',
    onclick(item) {
      game.saveExtensionConfig('仙家之魂', 'xjzh_ShowmaxHandcard', item);
    }
  },
  xjzh_jiexiantupo: {
    name: '界限突破',
    init: false,
    intro: '加强本扩展部分武将技能',
    onclick(item) {
      game.saveExtensionConfig('仙家之魂', 'xjzh_jiexiantupo', item);
    }
  },
  // ---------------------------------------存档相关选项------------------------------------------//
  xjzh_saveIntro: {
    name: '<b><li>【存档相关选项】',
    clear: true
  },
  xjzh_exportSave: {
    name: '<b><li>导出存档',
    clear: true,
    onclick() {
      let list, data;
      if (game.getExtensionConfig('仙家之魂', 'xjzhAchiStorage')) {
        list = JSON.stringify(game.getExtensionConfig('仙家之魂', 'xjzhAchiStorage'));
        data = '成就存档备份：' + list.slice(0);
        game.writeFile(lib.init.encode(data), 'extension/仙家之魂/save', '成就存档备份.json', function (err) {});
      }
      if (lib.config.xjzh_qishuyaojians) {
        list = JSON.stringify(lib.config.xjzh_qishuyaojians);
        data = '奇术要件存档备份：' + list.slice(0);
        game.writeFile(lib.init.encode(data), 'extension/仙家之魂/save', '奇术要件存档备份.json', function (err) {});
      }
      game.xjzh_createDailog('是否帮助拉斯玛复制死灵之书？', ['确定', '取消'], function (bool) {
        if (bool == '确定') {
          list = window.localStorage.getItem('xjzh_diablo_hunhuo');
          if (list == null) {
            game.xjzh_createDailog('死灵之书不存在！');
            return;
          }
          data = lib.init.encode('死灵之书副本：' + list.slice(0));
          game.writeFile(data, 'extension/仙家之魂/save', '死灵之书副本.json', function (err) {
            if (err) {
              game.xjzh_createDailog('死灵之书复制成功！');
              game.xjzh_createDailog('导出存档');
            } else {
              game.xjzh_createDailog('死灵之书复制失败了！');
              game.xjzh_createDailog('导出存档');
            }
          });
        } else {
          game.xjzh_createDailog('你拒绝了拉斯玛复制死灵之书！');
        }
      });
    }
  },
  xjzh_importSave: {
    name: '<b><li>导入存档',
    clear: true,
    onclick() {
      if (this.kzol_openedjm == undefined) {
        var div = ui.create.div();
        div.link_XX = true;
        // 使用DOM API创建元素，避免innerHTML的安全风险
        var input = document.createElement('input');
        input.type = 'file';
        input.style.width = 'calc(100% - 40px)';
        div.appendChild(input);
        var button = document.createElement('button');
        button.textContent = '导入';
        button.style.width = '40px';
        button.onclick = async function () {
          var file = this.previousSibling.files[0];
          if (!file) {
            alert('未选择文件，请重试！');
            return;
          }
          if (!file.name.toLowerCase().endsWith('.json')) {
            alert('文件必须是.json格式，请重试！');
            return;
          }
          try {
            var fileContent = await new Promise((resolve, reject) => {
                var reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.onerror = reject;
                reader.readAsText(file, 'UTF-8');
              }),
              data;
            if (!fileContent) {
              alert('文件内容为空，请重试！');
              return;
            } else {
              fileContent = lib.init.decode(fileContent);
              data = fileContent.slice(0);
              _status.event.dataCover = fileContent;
            }
            // 根据文件内容的前缀进行不同的处理
            if (data.startsWith('死灵之书副本')) {
              // 处理死灵之书逻辑...
              game.xjzh_createDailog('是否帮助拉斯玛重写死灵之书？', ['确定', '取消'], function (bool) {
                if (bool == '确定') {
                  this.innerHTML = '正在重写死灵之书......';
                  var data = _status.event.dataCover.slice(7);
                  window.localStorage.setItem('xjzh_diablo_hunhuo', data);
                  var list = window.localStorage.getItem('xjzh_diablo_hunhuo');
                  if (list == null) {
                    game.xjzh_createDailog('重写死灵之书失败了！');
                  } else {
                    game.xjzh_createDailog('重写死灵之书成功了！');
                  }
                } else {
                  game.xjzh_createDailog('你拒绝了重写死灵之书!！');
                }
              });
            } else if (fileContent.startsWith('成就存档备份')) {
              var data = JSON.parse(data.slice(7), '成就存档格式不正确，请重试！');
              // 处理成就存档逻辑...
              game.saveExtensionConfig('仙家之魂', 'xjzhAchiStorage', data);
            } else if (fileContent.startsWith('奇术要件存档备份')) {
              var data = JSON.parse(data.slice(9), '奇术要件存档格式不正确，请重试！');
              // 处理奇术要件存档逻辑...
              var Name = ui.create.div(ui.window, {
                zIndex: '1000',
                left: '0',
                width: '100%',
                top: '0',
                height: '100%'
              });
              var inputDiv = ui.create.div(Name, {
                left: '50%',
                top: '30%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '270px',
                textAlign: 'center',
                backgroundSize: '100%',
                backgroundImage: "url(extension/仙家之魂/css/images/qishuyaojian/loadFiles.png)"
              });
              var input = ui.create.node('input', inputDiv, {
                top: '110px',
                left: '80px',
                position: 'absolute',
                width: '230px',
                height: '20px',
                background: 'none',
                borderStyle: 'none'
              });
              input.id = 'xjzh_qishu_filesName';
              var okBtm = ui.create.div(
                inputDiv,
                {
                  left: '153px',
                  width: '100px',
                  bottom: '55px',
                  height: '35px'
                },
                function () {
                  var value = document.getElementById('xjzh_qishu_filesName').value;
                  if (value != data.name) {
                    window.xjzhOpenLoading('你输入的用户名与存档不一致，已为你取消导入');
                  } else {
                    let currentData = { ...data };
                    let arrList = Object.keys(data.cailiao);
                    if (
                    arrList.filter((item) => {
                      return ['xjzh_cailiao_zhanshou', 'xjzh_cailiao_gugu', 'xjzh_cailiao_toulu'].includes(item);
                    }).length)
                    {
                      for (let i in currentData.cailiao) {
                        if (['xjzh_cailiao_zhanshou', 'xjzh_cailiao_gugu', 'xjzh_cailiao_toulu'].includes(i)) {
                          delete currentData.cailiao[i];
                        }
                      }
                    }
                    game.saveConfig('xjzh_qishuyaojians', currentData);
                  }
                  Name.delete();
                }
              );
              var cancelBtm = ui.create.div(
                inputDiv,
                {
                  right: '35px',
                  width: '25px',
                  top: '42px',
                  height: '25px'
                },
                function () {
                  window.xjzhOpenLoading('你点击了取消，已为你取消导入');
                  Name.delete();
                }
              );
            } else {
              alert('未知的文件类型，请重试！');
            }
          } catch (e) {
            alert('读取文件时发生错误，请重试！');
          }
        };
        div.appendChild(button);
        this.parentNode.insertBefore(div, this.nextSibling);
        this.kzol_openedjm = div;
      } else {
        this.parentNode.removeChild(this.kzol_openedjm);
        delete this.kzol_openedjm;
      }
    }
  },
  xjzh_cleanSave: {
    name: '<b><li>清除存档',
    clear: true,
    onclick: async function () {
      //重启选项
      game.xjzh_createDailog('已为你重置所选存档，是否重启游戏？', ['确定', '取消'], function (bool) {
        if (bool == '确定') {
          setTimeout(function () {
            game.reload();
          }, 500);
        }
      });
      //重置死灵之书存档
      let list = window.localStorage.getItem('xjzh_diablo_hunhuo');
      if (list != null) {
        game.xjzh_createDailog('是否重置死灵之书存档？', ['确定', '取消'], function (bool) {
          if (bool == '确定') {
            window.localStorage.removeItem('xjzh_diablo_hunhuo');
          }
        });
      }
      //重置奇术要件存档
      game.xjzh_createDailog('是否重置奇术要件存档？', ['确定', '取消'], function (bool) {
        if (bool == '确定') {
          game.xjzh_resetQishu();
        }
      });
      //重置成就存档
      game.xjzh_createDailog('是否重置成就存档？', ['确定', '取消'], function (bool) {
        if (bool == '确定') {
          //重置成就存档
          game.xjzhAchi.reset();
        }
      });
    }
  }
};