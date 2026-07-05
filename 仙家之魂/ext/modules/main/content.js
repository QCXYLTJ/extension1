import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
import { introduces } from '../index.js';
export async function content(config, pack) {
  //重置材料
  if (!game.getExtensionConfig('仙家之魂', 'xjzh_qishuReset')) {
    game.xjzh_resetCailiao();
    game.saveExtensionConfig('仙家之魂', 'xjzh_qishuReset', true);
  }
  //监听《金庸群侠传》的换UI，以同步替换字体颜色
  const method = lib.announce.subscribe('jy_changeJuesePageColor', (e) => {
    let obj = Object.keys(Object.assign({ ...lib.skill }, { ...lib.card })).filter((name) => {
      if (name.startsWith('xjzh_')) return true;
      return false;
    });
    for (let name of obj) {
      if (lib.translate[name + '_info'] && lib.translate[name + '_info'].length > 0) {
        let str = lib.translate[name + '_info'];
        let colorx = '#c06d3b';
        let color = e.color;
        let reg = new RegExp(colorx, 'g');
        if (str.includes("style='color:")) {
          str = str.replace(colorx ? reg : /"#c06d3b"/g, color);
        }
        lib.translate[name + '_info'] = str;
      }
    }
  });
  //第一次导入本扩展自动开启本扩展所有武将包
  lib.arenaReady.push(async () => {
    let obj = Object.keys(Object.assign({ ...lib.skill }, { ...lib.card }, { ...introduces })).filter((name) => {
      if (name.startsWith('xjzh_')) return true;
      return false;
    });
    for await (let name of obj) {
      if (get.skillInfoTranslation(name, null).length > 0 || introduces[name]) {
        let str = get.skillInfoTranslation(name, null) || introduces[name].info;
        if (str.includes('召唤')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_zhaohuan');\">召唤</a>`;
          str = str.replace(/召唤/g, str2);
        }
        if (str.includes('骷髅牧师')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_kuloumushi');\">骷髅牧师</a>`;
          str = str.replace(/骷髅牧师/g, str2);
        }
        if (str.includes('骷髅风暴法师')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_kuloufengbaofashi');\">骷髅风暴法师</a>`;
          str = str.replace(/骷髅风暴法师/g, str2);
        }
        if (str.includes('骷髅纵火者')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_kulouzonghuozhe');\">骷髅纵火者</a>`;
          str = str.replace(/骷髅纵火者/g, str2);
        }
        if (str.includes('地狱猎犬')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_diyuliequan');\">地狱猎犬</a>`;
          str = str.replace(/地狱猎犬/g, str2);
        }
        if (str.includes('点燃')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_dianran');\">点燃</a>`;
          str = str.replace(/点燃/g, str2);
        }
        if (str.includes('控制')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_kongzhi');\">控制</a>`;
          str = str.replace(/控制/g, str2);
        }
        if (str.includes('目盲')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_mumang');\">目盲</a>`;
          str = str.replace(/目盲/g, str2);
        }
        if (str.includes('中毒')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_zhongdu');\">中毒</a>`;
          str = str.replace(/中毒/g, str2);
        }
        if (str.includes('眩晕')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_xuanyun');\">眩晕</a>`;
          str = str.replace(/眩晕/g, str2);
        }
        if (str.includes('灵柩')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_lingjiu');\">灵柩</a>`;
          str = str.replace(/灵柩/g, str2);
        }
        if (str.includes('唤醒')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_huanxing');\">唤醒</a>`;
          str = str.replace(/唤醒/g, str2);
        }
        if (str.includes('解放')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_jiefang');\">解放</a>`;
          str = str.replace(/解放/g, str2);
        }
        if (str.includes('冰冻')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_bingdong');\">冰冻</a>`;
          str = str.replace(/冰冻/g, str2);
        }
        if (str.includes('灌注')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_guanzhu');\">灌注</a>`;
          str = str.replace(/灌注/g, str2);
        }
        if (str.includes('强固')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_qianggu');\">强固</a>`;
          str = str.replace(/强固/g, str2);
        }
        if (str.includes('燃烧')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_ranshao');\">燃烧</a>`;
          str = str.replace(/燃烧/g, str2);
        }
        if (str.includes('冰缓')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_binghuan');\">冰缓</a>`;
          str = str.replace(/冰缓/g, str2);
        }
        if (str.includes('感电')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_gandian');\">感电</a>`;
          str = str.replace(/感电/g, str2);
        }
        if (str.includes('周围')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_zhouwei');\">周围</a>`;
          str = str.replace(/周围/g, str2);
        }
        if (str.includes('暴击')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_baoji');\">暴击</a>`;
          str = str.replace(/暴击/g, str2);
        }
        if (str.includes('暴率')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_baojiRan');\">暴击几率</a>`;
          str = str.replace(/暴率/g, str2);
        }
        if (str.includes('易伤')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_yishang');\">易伤</a>`;
          str = str.replace(/易伤/g, str2);
        }
        if (str.includes('暴伤')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_baojiDamage');\">暴击伤害</a>`;
          str = str.replace(/暴伤/g, str2);
        }
        if (str.includes('暴球')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_criticalstrike');\">暴击球</a>`;
          str = str.replace(/暴球/g, str2);
        }
        if (str.includes('反击')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_fanji');\">反击</a>`;
          str = str.replace(/反击/g, str2);
        }
        if (str.includes('格挡')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_gedang');\">格挡</a>`;
          str = str.replace(/格挡/g, str2);
        }
        if (str.includes('格上限')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_maxGedang');\">格挡上限</a>`;
          str = str.replace(/格上限/g, str2);
        }
        if (str.includes('物理攻击')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_gongji');\">物理攻击</a>`;
          str = str.replace(/物理攻击/g, str2);
        }
        if (str.includes('法术攻击')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_fashu');\">法术攻击</a>`;
          str = str.replace(/法术攻击/g, str2);
        }
        if (str.includes('附近')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_fujin');\">附近</a>`;
          str = str.replace(/附近/g, str2);
        }
        if (str.includes('友军')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_youjun');\">友军</a>`;
          str = str.replace(/友军/g, str2);
        }
        if (str.includes('飓风')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_jufeng');\">飓风</a>`;
          str = str.replace(/飓风/g, str2);
        }
        if (str.includes('会心')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_huixin');\">会心</a>`;
          str = str.replace(/会心/g, str2);
        }
        if (str.includes('减速')) {
          let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_jiansu');\">减速</a>`;
          str = str.replace(/减速/g, str2);
        }
        if (str.includes('定身')) {
          let num = str.indexOf('定身');
          if (str[num + 2] != '咒') {
            let str2 = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_dingshen');\">定身</a>`;
            str = str.replace(/定身/g, str2);
          }
        }
        get.skillInfoTranslation(name, null) ? lib.translate[name + '_info'] = str : introduces[name].info = str;
      }
    }
  });
  game.xjzh_openDialog = function (str) {
    var pbg = ui.create.div('.xjzh-dialog-div', ui.window);
    pbg.style.zIndex = 51;
    var obj = ui.create.div('.xjzh-dialog', pbg);
    obj.style.transformOrigin = 'center';
    var num = get.rand(0, 5);
    var url = 'extension/仙家之魂/css/images/ui/';
    var url2 = 'xjzh_info';
    obj.style.backgroundImage = 'url(' + url + '' + url2 + '' + num + '.png)';
    var str, list, click;
    for (var i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        list = arguments[i];
      } else if (typeof arguments[i] == 'function') {
        click = arguments[i];
      }
      /*else if(typeof arguments[i]=='string'){
        str=arguments[i];
      }*/
    }
    window.addEventListener(
      'resize',
      function () {
        var width = document.body.clientWidth;
        var height = document.body.clientHeight;
        if (obj) {
          obj.style.transform = 'translate(-50%,-50%) scale(' + Math.min(height / 1440, width / 2560) * 4 + ')';
        }
      },
      false
    );
    var dialog = ui.create.div('.xjzh-dialog-name', obj);
    var text = ui.create.div('.xjzh-dialog-text', obj);
    if (typeof introduces[str] != 'undefined') {
      dialog.innerHTML = introduces[str].name;
      text.innerHTML = introduces[str].info;
    } else {
      if (typeof lib.translate[str] != 'undefined' || typeof lib.translate[str + '_info'] != 'undefined') {
        if (lib.translate[str]) dialog.innerHTML = lib.translate[str];
        if (lib.translate[str + '_info']) {
          text.innerHTML = lib.translate[str + '_info'];
        } else {
          text.innerHTML = get.info(str).intro.content;
        }
      } else {
        pbg.remove();
        throw new Error(str + '参数不存在，请检查！');
      }
    }
    var node = ui.create.div('.xjzh-dialog-remove', obj);
    node.onclick = function () {
      pbg.remove();
    };
    pbg.onclick = function () {
      pbg.remove();
    };
    node.link = list;
    ui.window.appendChild(pbg);
  };
  //成就系统
  //部分代码借鉴自《玄武江湖》
  window.openxjzhAchievement = function () {
    if (game.xjzhAchi) {
      game.xjzhAchi.openAchievementMainPage();
      return;
    } else {
      alert('发生了点小问题，您可以重新载入本扩展试试。');
    }
  };
  // ---------------------------------------武将评级------------------------------------------//
  if (lib.rank) {
    let obj = Object.keys(lib.character).filter((name) => {
      if (name.startsWith('xjzh_')) return true;
      return false;
    });
    for (let name of obj) {
      let rank;
      /*
      junk
      rare
      epic
      legend
      */
      if (lib.character[name] && lib.character[name].rank) {
        rank = lib.character[name].rank;
        lib.rank.rarity[rank].addArray([name]);
      }
    }
  }
  // ---------------------------------------定义势力------------------------------------------//
  if (game.getExtensionConfig('仙家之魂', 'xjzh_changeGroup')) {
    let group = ['XING', '星', '星', { color: [255, 255, 0], image: 'ext:仙家之魂/image/shili/name_XING.png' }];
    game.addGroup(...group);
    let obj = Object.keys(lib.character).filter((name) => {
      if (name.startsWith('xjzh_')) return true;
      return false;
    });
    for (let name of obj) {
      if (lib.character[name] && lib.character[name].changeGroup) lib.character[name].group = lib.character[name].changeGroup;
    }
  }
  // ---------------------------------------Fps显示------------------------------------------//
  //代码借鉴自《扩展ol》
  game.xjzh_showFps = function (id) {
    var requestAnimationFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    var div;
    if (document.getElementById(id) == undefined) {
      div = document.createElement('div');
      div.setAttribute('id', 'xjzh_showFPS');
      div.style.zIndex = 999;
      div.style['pointer-events'] = 'none';
      var config = lib.config.extension_仙家之魂_tx_skillAnimation_showFpsP;
      if (config == 'cd') {
        div.style.left = 'calc(50% - ' + div.offsetWidth / 2 + 'px)';
        div.style.bottom = '0px';
      } else if (config == 'ld') {
        div.style.left = '0px';
        div.style.bottom = '0px';
      } else if (config == 'ru') {
        div.style.right = '0px';
        div.style.top = '0px';
      } else if (config == 'cu') {
        div.style.left = 'calc(50% - ' + div.offsetWidth / 2 + 'px)';
        div.style.top = '0px';
      } else if (config == 'lu') {
        div.style.left = '0px';
        div.style.top = '0px';
      } else {
        div.style.right = '0px';
        div.style.bottom = '0px';
      }
      ui.window.appendChild(div);
    } else {
      div = document.getElementById(id);
    }
    var fps = 0;
    var last = Date.now();
    var offset;
    var step = function () {
      offset = Date.now() - last;
      fps += 1;
      if (offset >= 1000) {
        last += offset;
        if (fps > 60) fps = 60;
        div.innerHTML = 'FPS:' + fps;
        fps = 0;
      }
      requestAnimationFrame(step);
    };
    step();
  };
  lib.arenaReady.push(function () {
    if (lib.config.extension_仙家之魂_tx_skillAnimation_showFps == true) {
      game.xjzh_showFps('document.getElementById(id)');
    }
  });
  // ---------------------------------------文件导入------------------------------------------//
  //代码借鉴自《玄武江湖》
  window.xjzhOpenLoading = function (str) {
    var dialogBK = ui.create.div(ui.window, {
      zIndex: 10000,
      width: '100%',
      height: '100%'
    });
    dialogBK.listen(function () {
      dialogBK.delete();
    });
    var dialog = ui.create.div('.xjzh-loading', dialogBK);
    var text = ui.create.div('.xjzh-loading-text', dialog);
    dialog.subViews = { text };
    if (str && typeof str == 'string') text.innerHTML = str;
    return dialog;
  };
  // ---------------------------------------显示手牌上限------------------------------------------//
  if (game.getExtensionConfig('仙家之魂', 'xjzh_ShowmaxHandcard')) {
    lib.skill._xjzh_ShowmaxHandcard = {
      trigger: {
        global: ['gameStart', 'roundStart']
      },
      forced: true,
      popup: false,
      silent: true,
      content() {
        var interval = setInterval(() => {
          if (!ui.window.contains(player)) return clearInterval(interval);
          var numh = player.countCards('h');
          var nummh = player.getHandcardLimit();
          if (nummh == Infinity) nummh = '∞';
          player.node.count.innerHTML = numh + '/' + nummh;
        }, 100);
      }
    };
  }
  // ---------------------------------------播放音乐------------------------------------------//
  //代码借鉴自《金庸群侠传》
  game.playXH = function (fn, dir, sex) {
    if (lib.config.background_speak) {
      if (dir && sex) game.playAudio(dir, sex, fn); else
        if (dir) game.playAudio(dir, fn); else
          game.playAudio('../extension/仙家之魂/audio/skill', fn);
    }
  };
  // ---------------------------------------背景音乐------------------------------------------//
  //代码借鉴自《金庸群侠传》
  game.xjzhplayBackgroundMusic = function () {
    var temp = game.getExtensionConfig('仙家之魂', 'xjzh_Background_Music');
    if (temp == '0') {
      /*//Math.random()*30 生成一个0到29但不等于29的数值
      temp = Math.floor(2 + Math.random() * 38);
      //2加0到29
      //生成一个范围2到31的整数
      temp = temp.toString();
      //转为字符串*/
      temp = get.rand(2, 5).toString();
    }
    ui.backgroundMusic.pause();
    var item = {
      2: 'xjzh_Backgroundmusic2.mp3',
      3: 'xjzh_Backgroundmusic3.mp3',
      4: 'xjzh_Backgroundmusic4.mp3',
      5: 'xjzh_Backgroundmusic5.mp3'
    };
    if (item[temp]) {
      ui.backgroundMusic.src = 'extension/仙家之魂/music/' + item[temp];
    } else {
      game.playBackgroundMusic();
      ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic);
    }
  };
  if (game.getExtensionConfig('仙家之魂', 'xjzh_Background_Music') != '1') {
    lib.arenaReady.push(function () {
      //ui.backgroundMusic.autoplay=true;
      //ui.backgroundMusic.pause();
      game.xjzhplayBackgroundMusic();
      ui.backgroundMusic.addEventListener('ended', game.xjzhplayBackgroundMusic);
    });
  }
  // ---------------------------------------背景图片------------------------------------------//
  //代码借鉴自《金庸群侠传》
  game.xjzhBackground_Picture = function () {
    var temp = game.getExtensionConfig('仙家之魂', 'xjzh_Background_Picture');
    if (temp == 'auto') {
      var list = ['xjzh_Background1', 'xjzh_Background2', 'xjzh_Background3', 'xjzh_Background4', 'xjzh_Background5', 'xjzh_Background6'];
      if (_status.xjzhBackground_Picture) list.remove(_status.xjzhBackground_Picture);
      temp = list.randomGet();
    }
    _status.xjzhBackground_Picture = temp;
    if (temp !== '1') {
      game.broadcastAll() + ui.background.setBackgroundImage('extension/仙家之魂/picture/' + temp + '.jpg');
    } else {
      game.broadcastAll() + ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
    }
    var item = game.getExtensionConfig('仙家之魂', 'xjzh_Background_Picture');
    if (item != 'auto') {
      if (_status.xjzh_Background_Picture_timeout) {
        clearTimeout(_status.xjzh_Background_Picture_timeout);
      }
    } else if (item == 'auto') {
      var autotime = game.getExtensionConfig('仙家之魂', 'xjzh_Background_Picture_auto');
      var Timeout = autotime ? parseInt(autotime) : 30000;
      ///////////////////////////////////////////////////////
      var Timeout2 = _status.xjzh_Background_Picture_Timeout2;
      if (_status.xjzh_Background_Picture_timeout && Timeout2 && Timeout2 != Timeout) {
        clearTimeout(_status.xjzh_Background_Picture_timeout);
      }
      /////////////////////////////////////////////////
      _status.xjzh_Background_Picture_timeout = setTimeout(function () {
        game.xjzhBackground_Picture();
      }, Timeout);
      /*Timeout*/
      _status.xjzh_Background_Picture_Timeout2 = Timeout;
    }
  };
  if (game.getExtensionConfig('仙家之魂', 'xjzh_Background_Picture') != '1') {
    lib.arenaReady.push(function () {
      game.xjzhBackground_Picture();
    });
  }
  // ---------------------------------------定义函数------------------------------------------//
  //重置所有技能
  lib.element.player.xjzh_resetSkill = function () {
    var skills = this.skills.slice(0),
      list = [];
    game.expandSkills(skills);
    while (skills.length) {
      var skill = skills.shift();
      var info = get.info(skill);
      if (typeof info.usable == 'number') {
        if (this.getStat('triggerSkill')[skill] && this.getStat('triggerSkill')[skill] >= 1) {
          delete this.getStat('triggerSkill')[skill];
          list.add(skill);
        }
        if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
          delete this.getStat('skill')[skill];
          list.add(skill);
        }
      }
      if (info.round && this.storage[skill + '_roundcount']) {
        delete this.storage[skill + '_roundcount'];
        list.add(skill);
      }
      if (this.storage[`temp_ban_${skill}`]) {
        delete this.storage[`temp_ban_${skill}`];
      }
      if (this.awakenedSkills.includes(skill)) {
        this.restoreSkill(skill);
        list.add(skill);
      }
    }
    if (list.length) {
      var str = '';
      for (var i of list) {
        str += '【' + get.translation(i) + '】、';
      }
      game.log(this, '重置了技能', '#g' + str.slice(0, -1));
    }
    return this;
  };
  //重置限定技支持传入object参数
  lib.element.player.restoreSkill = function (skill, nomark) {
    if (Array.isArray(skill)) {
      for (var i of skill) this.restoreSkill(i);
    } else {
      if (this.storage[skill] === true) this.storage[skill] = false;
      this.awakenedSkills.remove(skill);
      this.enableSkill(skill + '_awake', skill);
      if (!nomark) this.markSkill(skill);
      _status.event.clearStepCache();
    }
    return this;
  };
  lib.element.player.xjzh_chooseSkill = function (list) {
    var next = game.createEvent('xjzh_chooseSkill');
    next.player = this;
    next.list = list.slice(0);
    next.setContent('xjzh_chooseSkill');
    for (var i = 1; i < arguments.length; i++) {
      if (typeof arguments[i] == 'string') {
        next.prompt = arguments[i];
      } else if (typeof arguments[i] == 'function') {
        if (!next.func) next.func = arguments[i]; else
          next.ai = arguments[i];
      } else if (typeof arguments[i] == 'number') {
        next.selectButton = [arguments[i], arguments[i]];
      } else if (get.itemtype(arguments[i]) == 'select') {
        next.selectButton = arguments[i];
      } else if (typeof arguments[i] == 'boolean') {
        next.forced = arguments[i];
      } else if (get.itemtype(arguments[i]) == 'player') {
        next.target = arguments[i];
      }
    }
    if (!next.selectButton) {
      next.selectButton = [1, 1];
    }
    if (!next.func) {
      next.func = function () {
        return true;
      };
    }
    if (!next.target) {
      next.target = next.player;
    }
    if (typeof next.forced != 'boolean') {
      next.forced = true;
    }
    return next;
  };
  lib.element.content.xjzh_chooseSkill = function () {
    'step 0';
    event.list = event.list.filter(function (i) {
      return get.xjzh_filterGainSkill(i, event.func, player, target);
    });
    if (!event.list.length) {
      event.finish();
      event.result = { bool: false };
      game.log('没有可以正常挑选的技能！');
      return;
    }
    //-------------------------------------------------------------///
    var range = get.select(event.selectButton);
    event.selectButton = range;
    if (event.list.length < event.selectButton[0]) {
      event.selectButton[0] = event.list.length;
    }
    if (!event.prompt) {
      var str = '请选择获得';
      if (range[0] == range[1]) str += get.cnNumber(range[0]); else
        if (range[1] == Infinity) str += '至少' + get.cnNumber(range[0]); else
          str += get.cnNumber(range[0]) + '至' + get.cnNumber(range[1]);
      str += '项技能';
      event.prompt = str;
    }
    var list = [];
    for (var skill of event.list) {
      list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
    }
    var next = player.chooseButton([event.prompt, [list, 'textbutton']]);
    next.set('forced', event.forced);
    next.set('target', target);
    next.set('selectButton', event.selectButton);
    next.set('filterButton', function (button) {
      return true;
    });
    next.set(
      'ai',
      event.ai ||
      function (button) {
        var player = _status.event.player;
        var target = _status.event.target;
        if (target.hasSkill(button.link, false, false, false)) return 0;
        if (player != target) {
          var att = get.attitude(player, target) > 0 ? 1 : -1;
          _status.event.skillRankPlayer = target;
          return get.skillRank(button.link) * att - 0.1;
        }
        return get.skillRank(button.link) + 0.1;
      }
    );
    'step 1';
    if (result.bool && result.links && result.links.length) {
      event.result = { bool: true, skills: result.links };
      if (event.callback) {
        event.callback(result, player, target); //这里可以自定义获得的是否临时技能//
      } else {
        for (var i = 0; i < result.links.length; i++) {
          target.addSkillLog(result.links[i]);
        }
      }
    } else {
      event.result = { bool: false };
    }
  };
  //获得临时技能显示记录
  lib.element.player.addTempSkillLog = function (skill, arg) {
    if (!this.skills.includes(skill)) {
      this.popup(skill);
      game.log(this, '获得了技能', '#g【' + get.translation(skill) + '】');
    }
    if (arg) {
      this.addTempSkill(skill, arg);
    } else {
      this.addTempSkill(skill);
    }
  };
  //增益buff
  lib.xjzh_Buff = ['criticalstrikes'];
  //减益buff
  lib.xjzh_Debuff = ['binghuan', 'gandian', 'raoshao', 'bingdong', 'mumang', 'yishang', 'jiansu', 'dingshen'];
  //获取指定参数的武将牌
  game.xjzh_wujiangpai = function (...args) {
    let list = [],
      name,
      num,
      nodead;
    for (const argument of args) {
      if (typeof argument == 'string' || Array.isArray(argument)) name = argument; else
        if (typeof argument == 'number') num = argument; else
          if (typeof argument == 'boolean') nodead = argument;
    }
    if (Array.isArray(name)) {
      for (let target of name) {
        list.addArray(game.xjzh_wujiangpai(target, num));
      }
    }
    for (let i in lib.character) {
      if (!lib.character[i][3]) continue;
      if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
      if (!name) {
        list.push(i);
        continue;
      }
      if (get.xjzh_checkChinese(name)) {
        if (get.translation(i).includes(get.translation(name))) list.push(i);
      } else {
        if (i.includes(name)) list.push(i);
      }
    }
    if (nodead) {
      let players = game.players.concat(game.dead);
      for (let i = 0; i < players.length; i++) {
        list.remove(players[i].name);
        list.remove(players[i].name1);
        list.remove(players[i].name2);
      }
    }
    return typeof num == 'number' ? list.randomGets(num) : list;
  };
  lib.element.player.xjzh_zhaohuan = function (...args) {
    let name, draw, hpList;
    for (const arg of args) {
      if (typeof arg == 'string') name = arg; else
        if (typeof arg == 'number') draw = argument; else
          if (Array.isArray(arg)) hpList = argument;
    }
    let next = game.createEvent('xjzh_zhaohuan', false),
      event = _status.event;
    next.name = name || get.nameList(this)[0];
    next.num = draw || 0;
    next.hpList = hpList || [];
    next.player = this;
    next.setContent('xjzh_zhaohuan');
    return next;
  };
  //—————————————————————————————————————————————————————————————————————————————boss模式相关函数,目前改用代理来排序
  const boss = function () {
    lib.skill._sort = {
      trigger: {
        player: ['phaseEnd']
      },
      silent: true,
      forceDie: true,
      forceOut: true,
      filter() {
        game.sort();
      },
      content() { }
    }; //排座位
    let _me;
    Reflect.defineProperty(game, 'me', {
      get() {
        return _me;
      },
      set(v) {
        _me = v;
        if (game.players.includes(v) && game.players[0] != v) {
          game.sort(); //因为李白最先进入players,挑战模式不管选什么挑战李白,都会变成game.me是李白
        } //如果数组target[meIndex]是李白,那么替换掉的一瞬间,接下来调用就会再添加一个李白,导致数组两个李白
      } //更换game.me之后第一时间排序
    });
    game.sort = function () {
      const players = game.players.filter(Boolean);
      const deads = game.dead.filter(Boolean);
      const allPlayers = deads.concat(players); //先移除players后面玩家会前移,再添加入dead需要同排序取前
      const bool = lib.config.dieremove;
      const playerx = bool ? players : allPlayers;
      ui.arena.setNumber(playerx.length);
      if (bool) {
        deads.forEach((player) => {
          player.classList.add('removing', 'hidden');
          if (!player.deadposition) {
            const num = Number(player.dataset.position);
            player.deadposition = num;
            player.dataset.position = num - 1;
          }
        });
      } //隐藏死亡角色
      playerx.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
      if (playerx.includes(game.me) && playerx[0] != game.me) {
        while (playerx[0] != game.me) {
          const start = playerx.shift();
          playerx.push(start);
        }
      } //将玩家排至数组首位
      playerx.forEach((player, index, array) => {
        player.dataset.position = index;
        const zhu = _status.roundStart || game.zhu || game.boss || array.find((p) => p.seatNum == 1) || array[0];
        const zhuPos = Number(zhu.dataset.position);
        const num = index - zhuPos + 1;
        if (index < zhuPos) {
          player.seatNum = players.length - num;
        } else {
          player.seatNum = num;
        }
      }); //修改dataset.position与seatNum
      players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
      players.forEach((player, index, array) => {
        if (bool) {
          player.classList.remove('removing', 'hidden');
        }
        if (index == 0) {
          if (ui.handcards1Container && ui.handcards1Container.firstChild != player.node.handcards1) {
            while (ui.handcards1Container.firstChild) {
              ui.handcards1Container.firstChild.remove();
            }
            ui.handcards1Container.appendChild(player.node.handcards1.addTempClass('start').fix());
          }
          if (game.me != player) {
            ui.updatehl();
          }
        }
        player.previous = array[index === 0 ? array.length - 1 : index - 1];
        player.next = array[index === array.length - 1 ? 0 : index + 1];
      }); //展示零号位手牌/修改previous/显示元素
      allPlayers.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
      allPlayers.forEach((player, index, array) => {
        player.previousSeat = array[index === 0 ? array.length - 1 : index - 1];
        player.nextSeat = array[index === array.length - 1 ? 0 : index + 1];
      }); //修改previousSeat
      game.players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
      return true;
    };
    game.players = new Proxy([], {
      set(target, property, value) {
        const result = Reflect.set(target, property, value);
        if (property === 'length') {
          game.sort();
        }
        return result;
      }
    });
    game.dead = new Proxy([], {
      set(target, property, value) {
        const result = Reflect.set(target, property, value);
        if (property === 'length') {
          game.sort();
        }
        return result;
      }
    });
    game.kongfunc = function () {
      return game.kong;
    };
    game.kong = {
      set() {
        return this;
      },
      get player() {
        return game.me;
      }, //先声明后赋值的,后面调用会是underfined,所以用getter实时获取
      cards: [],
      result: {
        cards: []
      },
      gaintag: [],
      forResult() { }
    };
    game.changeBossQ = function (name) {
      _status.event.forceDie = true;
      const boss = game.addPlayerQ(name);
      boss.side = true;
      if (game.additionaldead) {
        game.additionaldead.push(game.boss);
      } else {
        game.additionaldead = [game.boss];
      }
      boss.setIdentity('zhu');
      boss.identity = 'zhu';
      const player = game.boss;
      game.boss = boss;
      game.addVideo('bossSwap', player, '_' + boss.name);
      if (game.me == player) {
        game.swapControl(boss);
      }
      return boss;
    };
    game.addPlayerQ = function (name) {
      const player = ui.create.player(ui.arena).addTempClass('start');
      player.getId();
      if (name) player.init(name);
      game.players.push(player);
      player.draw(Math.min(player.maxHp, 20));
      return player;
    };
    lib.element.player.addFellow = function (name) {
      const player = this;
      const npc = game.addPlayerQ(name);
      player.guhuo(npc);
      return npc;
    }; //添加随从
    lib.element.player.guhuo = function (target) {
      const player = this;
      target.side = player.side;
      let identity = player.identity;
      if (player.identity == 'zhu') {
        identity = 'zhong';
      } // 挑战模式多个主身份,会导致boss多个回合
      target.identity = identity;
      target.setIdentity(identity, 'blue');
      target.boss = player;
      target.ai.modAttitudeFrom = function (from, to, att) {
        if (to == from.boss) return 99;
        return att;
      }; //这里from是本人
      target.ai.modAttitudeTo = function (from, to, att) {
        if (to.boss == from) return 99;
        return att;
      }; //这里to是本人
      return player;
    }; //令一名角色服从你
  };
  boss();
  //暴击相关函数，参数分别为造成暴击的角色、暴击几率、暴击伤害加成、是否不受暴击几率影响
  game.xjzh_Criticalstrike = async function (...args) {
    let player, num, num2, bool;
    for (let arg of args) {
      if (get.itemtype(arg) == 'player') player = arg; else
        if (typeof arg == 'number') {
          if (typeof num == 'number') num2 = arg; else
            num = arg;
        } else if (typeof arg == 'boolean') bool = arg;
    }
    if (bool) num = 1;
    let trigger = _status.event.getTrigger();
    if (Math.random() <= num) {
      player.addTempSkill('unequip', 'damageAfter');
      trigger.num *= num2;
      trigger.set('xjzhCriticalstrike', true);
      game.log(player, '的伤害触发了', '#y' + '暴击');
      const next = game.createEvent('xjzhCriticalstrike');
      next.player = player;
      next.num = trigger.num;
      next.setContent(async function (event, trigger, player) {
        event.trigger('xjzhCriticalstrike');
      });
    }
  };
  //判断标记是否为唯一最多
  lib.element.player.isMaxMark = function (name, equal) {
    var marks = this.countMark(name);
    for (var i = 0; i < game.players.length; i++) {
      if (game.players[i].isOut() || game.players[i] == this) continue;
      if (equal) {
        if (game.players[i].countMark(name) >= marks) return false;
      } else {
        if (game.players[i].countMark(name) > marks) return false;
      }
    }
    return true;
  };
  //判断标记是否为唯一最少
  lib.element.player.isMinMark = function (name, equal) {
    var marks = this.countMark(name);
    for (var i = 0; i < game.players.length; i++) {
      if (game.players[i].isOut() || game.players[i] == this) continue;
      if (equal) {
        if (game.players[i].countMark(name) <= marks) return false;
      } else {
        if (game.players[i].countMark(name) < marks) return false;
      }
    }
    return true;
  };
  //判断是否被控制
  get.xjzh_deEffect = function (player) {
    if (player.countCards('j', (card) => card.name != 'jydiy_yungongliaoshang') > 0) return true;
    if (player.isTurnedOver()) return true;
    if (player.isLinked()) return true;
    if (player.countDisabled() >= 1) return true;
    if (get.xjzhBUFFList(player, (player, item) => lib.xjzh_Debuff.includes(item)).length > 0) return true;
    return false;
  };
  //获取其有几种控制效果
  get.xjzh_deEffect2 = function (player) {
    var num = 0;
    num += player.countCards('j', (card) => card.name != 'jydiy_yungongliaoshang');
    if (player.isTurnedOver()) num++;
    if (player.isLinked()) num++;
    num += player.countDisabled();
    num += get.xjzhBUFFList(player, (player, item) => lib.xjzh_Debuff.includes(item)).length;
    return num;
  };
  //获取装备子类型
  get.subtype2 = function (obj, player) {
    if (typeof obj == 'string') obj = { name: obj };
    if (typeof obj != 'object') return;
    const name = obj.name;
    if (!lib.card[name]) return;
    let subtype2 = lib.card[name].subtype2;
    return subtype2;
  };
  //简单的灵柩唤醒特效
  lib.element.player.$zhaohuan = function () {
    let name = this.name;
    this.classList.add('zhaohuan');
    this.node.name.innerHTML = '唤醒⊙' + get.translation(name);
  };
  //清除技能
  lib.element.player.clearSkills2 = function (all) {
    var list = [];
    var exclude = [];
    for (var i = 0; i < arguments.length; i++) {
      exclude.push(arguments[i]);
    }
    for (i = 0; i < this.skills.length; i++) {
      if (!exclude.includes(this.skills[i])) {
        list.push(this.skills[i]);
      }
    }
    if (all) {
      for (var i in this.additionalSkills) {
        this.removeAdditionalSkill(i);
      }
    }
    for (var i of list) {
      var info = lib.skill[i];
      this.unmarkSkill(i);
      game.broadcastAll(
        function (player, i) {
          player.skills.remove(i);
          player.hiddenSkills.remove(i);
        },
        this,
        i
      );
      this.checkConflict(i);
      delete this.tempSkills[i];
      if (info) {
        if (info.onremove) {
          if (typeof info.onremove == 'function') {
            info.onremove(this, i);
          } else if (typeof info.onremove == 'string') {
            if (info.onremove == 'storage') {
              delete this.storage[i];
            } else {
              var cards = this.storage[i];
              if (get.itemtype(cards) == 'card') {
                cards = [cards];
              }
              if (get.itemtype(cards) == 'cards') {
                if (this.onremove == 'discard') {
                  this.$throw(cards);
                }
                if (this.onremove == 'discard' || this.onremove == 'lose') {
                  game.cardsDiscard(cards);
                  delete this.storage[i];
                }
              }
            }
          } else if (Array.isArray(info.onremove)) {
            for (var i = 0; i < info.onremove.length; i++) {
              delete this.storage[info.onremove[i]];
            }
          } else if (info.onremove === true) {
            delete this.storage[skill];
          }
        }
        this.removeSkillTrigger(i);
        if (!info.keepSkill) {
          this.removeAdditionalSkill(i);
        }
      }
      this.enableSkill(i + '_awake');
    }
    if (this.hujia > 0) this.changeHujia(-this.hujia)._triggered = null;
    if (get.xjzh_deEffect(this)) {
      if (this.isLinked()) this.link(false)._triggered = null;
      if (this.isTurnedOver()) this.turnOver(false)._triggered = null;
      if (this.countCards('j')) this.discard(this.getCards('j'))._triggered = null;
      if (this.countDisabled() > 0) {
        for (var i = 1; i < 6; i++) {
          if (this.isDisabled(i)) this.enableEquip(i)._triggered = null;
        }
      }
    }
    this.checkConflict();
    this.checkMarks();
    return list;
  };
  //选项效果
  game.xjzh_createDailog = function () {
    var obj = ui.create.div('.save.xjzh_save', ui.window);
    var str, list, click, bool;
    for (var i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        list = arguments[i];
      } else if (typeof arguments[i] == 'function') {
        click = arguments[i];
      } else if (typeof arguments[i] == 'boolean') {
        bool = arguments[i];
      } else if (typeof arguments[i] == 'string') {
        str = arguments[i];
      }
    }
    if (bool !== false) {
      var img = document.createElement('img');
      img.setAttribute('src', 'extension/仙家之魂/css/images/lamasi/xjzh_diablo_lamasi.png');
      img.className = 'xjzh_save2';
      obj.appendChild(img);
    }
    var dialog = ui.create.div('.xjzh_dialog', obj);
    dialog.innerHTML = str;
    var select = ui.create.div('.xjzh_select', obj);
    if (!list) list = ['确定'];
    for (var i = 0; i < list.length; i++) {
      var node = ui.create.div('.xjzh_select', select);
      node.onclick = function () {
        ui.window.removeChild(obj);
        if (typeof click == 'function') click(this.link);
      };
      node.link = list[i];
      node.innerHTML = get.translation(list[i]);
    }
    ui.window.appendChild(obj);
  };
  get.xjzh_isMaxMp = function (player) {
    if (!player || get.itemtype(player) != 'player') {
      console.warn('Player不存在');
      return false;
    }
    return typeof player.xjzhmaxMp === 'number' && typeof player.xjzhMp === 'number' && player.xjzhmaxMp === player.xjzhMp;
  };
  get.xjzh_consumeMp = function (player) {
    if (!player || get.itemtype(player) != 'player') {
      console.warn('Player不存在');
      return NaN;
    }
    if (typeof player.xjzhmaxMp !== 'number' || typeof player.xjzhMp !== 'number') {
      return NaN;
    }
    return player.xjzhmaxMp - player.xjzhMp;
  };
  //修改魔力
  lib.element.player.changexjzhMp = function (num) {
    let next = game.createEvent('changexjzhMp', false);
    next.num = num;
    next.player = this;
    next.setContent('changexjzhMp');
    return next;
  };
  lib.element.content.changexjzhMp = function () {
    'step 0';
    event.trigger('changexjzhMp');
    'step 1';
    if (num == 0 || !player.xjzhmaxMp) return;
    let str = `${get.translation(player)}${num > 0 ? '回复' : '消耗'}了${num > get.xjzh_consumeMp(player) ? get.xjzh_consumeMp(player) : Math.abs(num)}点能量`;
    if (game.roundNumber != 0) game.log(player, str);
    player.xjzhMp += num;
    if (num > 0 && get.xjzh_consumeMp(player) > 0) {
      player.$recover();
      game.playAudio('effect/recover');
    }
    if (isNaN(player.xjzhMp) || player.xjzhMp < 0) player.xjzhMp = 0;
    if (player.xjzhMp > player.xjzhmaxMp) player.xjzhMp = player.xjzhmaxMp;
    player.xjzhshowMp(player.xjzhMp, player.xjzhmaxMp);
  };
  //修改魔力上限
  lib.element.player.changexjzhmaxMp = function (num) {
    let next = game.createEvent('changexjzhmaxMp', false);
    next.num = num;
    next.player = this;
    next.setContent('changexjzhmaxMp');
    return next;
  };
  lib.element.content.changexjzhmaxMp = function () {
    'step 0';
    event.trigger('changexjzhmaxMp');
    'step 1';
    if (num == 0) return;
    let str = `${get.translation(player)}${num > 0 ? '增加' : '减少'}了${num > 0 ? num : Math.abs(num)}点能量上限`;
    if (game.roundNumber != 0) game.log(player, str);
    if (!player.xjzhmaxMp) player.xjzhmaxMp = 0;
    if (!player.xjzhMp) player.xjzhMp = 0;
    player.xjzhmaxMp += num;
    if (num > 0) {
      player.$recover();
      game.playAudio('effect/recover');
    }
    if (isNaN(player.xjzhmaxMp) || player.xjzhmaxMp < 0) player.xjzhmaxMp = 1;
    if (player.xjzhMp > player.xjzhmaxMp) player.xjzhMp = player.xjzhmaxMp;
    player.xjzhshowMp(player.xjzhMp, player.xjzhmaxMp);
  };
  lib.element.player.xjzhshowMp = function (arg, arg2) {
    // 参数验证
    if (typeof arg !== 'number' || typeof arg2 !== 'number' || arg < 0 || arg2 <= 0) {
      console.warn('参数必须是数字且必须是正数');
      return;
    }
    // 确保 mp 容器存在
    if (!this.node.xjzhmp) {
      this.node.xjzhmp = ui.create.div('.mp', this);
    }
    // 获取或创建 .mpdiv 元素，并始终设置圆角样式
    let mpdiv = this.node.xjzhmp.querySelector('.mpdiv') || ui.create.div('.mpdiv', this.node.xjzhmp);
    mpdiv.style.borderRadius = '50px';
    // 更新文本内容
    let mptext = mpdiv.querySelector('.mptext') || document.createElement('span');
    mptext.className = 'mptext';
    mptext.textContent = arg + '/' + arg2;
    if (!mpdiv.querySelector('.mptext')) {
      mpdiv.appendChild(mptext);
    }
    function animateWidthChange(element, targetWidth, duration) {
      let startWidth = parseFloat(element.style.width);
      let startTime = performance.now();
      let currentWidth = startWidth;
      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }
      function step(timestamp) {
        let timeElapsed = timestamp - startTime;
        let progress = timeElapsed / duration;
        // 使用easeInOutCubic函数实现缓入缓出效果
        let easingProgress = easeInOutCubic(progress);
        // 计算当前宽度，确保缓入缓出变化
        let currentWidth = startWidth + easingProgress * (targetWidth - startWidth);
        element.style.width = currentWidth + '%';
        // 如果动画还在进行中，则继续请求下一帧
        if (timeElapsed < duration) {
          requestAnimationFrame(step);
        } else {
          // 确保动画结束时宽度精确为目标值
          element.style.width = targetWidth + '%';
        }
      }
      requestAnimationFrame(step);
    }
    // 计算剩余能量百分比
    let remainingPercentage = arg / arg2;
    animateWidthChange(mpdiv, remainingPercentage * 100, 1500);
    // 设置剩余能量的宽度，同时确保mpdiv有正确的宽度
    mpdiv.style.width = remainingPercentage * 100 + '%';
    // 添加边框样式处理
    if (remainingPercentage === 1) {
      // 能量条满时，应用黄色闪光边框样式
      mpdiv.classList.add('xjzh_full-flash');
    } else {
      // 能量条未满时，移除任何可能存在的特殊边框样式，假设默认边框样式已经定义好
      mpdiv.classList.remove('xjzh_full-flash');
    }
    // 处理失去能量部分为白色底色
    let lostEnergyDiv = mpdiv.querySelector('.lost-energy');
    let lostEnergyWidth = (1 - remainingPercentage) * 100;
    if (lostEnergyWidth > 0) {
      if (!lostEnergyDiv) {
        // 创建并设置样式，注意调整lostEnergyDiv的样式以露出mpdiv的左圆角
        lostEnergyDiv = document.createElement('div');
        lostEnergyDiv.className = 'lost-energy';
        lostEnergyDiv.style.width = lostEnergyWidth + '%';
        lostEnergyDiv.style.backgroundColor = '#fff';
        // 通过负margin-left让lostEnergyDiv不遮挡mpdiv的左圆角
        lostEnergyDiv.style.marginLeft = '-1px'; // 假设1px是边框宽度或需要调整的值
        mpdiv.insertBefore(lostEnergyDiv, mpdiv.firstChild);
      } else {
        // 更新宽度
        lostEnergyDiv.style.width = lostEnergyWidth + '%';
      }
    } else if (lostEnergyDiv) {
      mpdiv.removeChild(lostEnergyDiv);
    }
  };
  /**
   * 移除播放器中的MP容器。
   *
   * 该函数用于彻底移除播放器界面中的MP模块容器，包括容器内的所有元素。
   * 这是对播放器界面进行动态调整的重要功能，可以用于在不需要MP模块时清理界面。
   *
   * @function
   * @memberOf lib.element.player
   * @name xjzhremoveMp
   * @returns {undefined}
   */
  lib.element.player.xjzhremoveMp = function () {
    // 获取MP容器节点
    let mpNode = this.node.xjzhmp;
    // 如果MP容器存在
    if (mpNode) {
      // 从父节点中移除MP容器
      // 移除mp容器以及其内部的所有子元素（包括进度条、文本等）
      mpNode.parentNode.removeChild(mpNode);
      // 删除播放器实例中与MP容器相关的属性
      delete this.xjzhMp;
      delete this.xjzhmaxMp;
      // 清除节点对象中的MP容器引用
      // 清空对mp容器的引用
      delete this.node.xjzhmp;
    }
  };
  //检索卡牌
  //代码借鉴自《金庸群侠传》
  get.randomCard = function (name, create) {
    var cards = get.randomCards(1, name, create);
    if (cards.length) return cards[0];
    return null;
  };
  get.randomCardsNum = function (name, create) {
    var cards = get.randomCards(999, name, create);
    return cards.length;
  };
  get.randomCards = function (num, name, create) {
    ///name 要求为函数///
    var num = typeof num == 'number' ? num : 1;
    if (typeof name != 'function') {
      alert('get.randomCards:请检查name参数');
      return [];
    }
    if (num <= 0) {
      alert('巧妇难为无米之炊!');
    }
    var cards,
      list = [];
    if (create != 'discardPile') {
      var cardPile = Array.from(ui.cardPile.childNodes);
      list = list.concat(cardPile);
    }
    if (create != 'cardPile') {
      var discardPile = Array.from(ui.discardPile.childNodes);
      list = list.concat(discardPile);
    }
    cards = list.filter(name);
    if (!cards.length) return [];
    if (num >= cards.length) return cards;
    return cards.randomGets(num);
  };
  //区间内取随机整数，返回数组类型数字
  get.xjzh_rands = function (x, y, z) {
    if (typeof z != 'number') z = 1;
    if (typeof x != 'number') x = 1;
    if (typeof y != 'number') y = x;
    if (y == 1) return Array.of(1);
    if (z > y) z = y;
    var list = [],
      list2 = [];
    for (var i = x; i <= y; i++) list.push(i);
    for (var i = 0; i < z; i++) {
      var num = list.randomGet();
      list2.push(num);
      list.remove(num);
    }
    return list2;
  };
  //判断角色势力是否为最多之一
  get.maxGroupx = function (player, num) {
    var id = player.group;
    var num = game.countPlayer(function (current) {
      return current.group == id;
    });
    var targets = game.filterPlayer(function (current) {
      return current.group != id;
    });
    var list = [];
    for (var i = 0; i < targets.length; i++) {
      if (lib.group.includes(targets[i].group)) list.add(targets[i].group);
    }
    if (!list.length) return null;
    for (var i = 0; i < list.length; i++) {
      var num2 = game.countPlayer(function (current) {
        return current.group == list[i];
      });
      if (num <= num2) return false;
    }
    return true;
  };
  //增加/更换/移除副将
  //代码借鉴自《金庸群侠传》
  lib.element.player.xjzh_replaceFujiang = function (name2) {
    var player = this;
    player.reinit(player.name2, name2, [player.hp, player.maxHp]);
  };
  lib.element.player.xjzh_addFujiang = function (name2) {
    var player = this;
    player.name2 = name2;
    player.classList.add('fullskin2');
    player.reinit(player.name2, name2, [player.hp, player.maxHp]);
    player.node.avatar2.show();
    player.node.count.classList.add('p2');
    player.node.name2.show();
  };
  lib.element.player.xjzh_removeFujiang = function (name2) {
    var player = this;
    player.reinit(player.name2, player.name2, [player.hp, player.maxHp]);
    delete player.name2;
    player.classList.remove('fullskin2');
    player.node.avatar2.hide();
    player.node.count.classList.remove('p2');
    player.node.name2.hide();
  };
  //交换判定区
  lib.element.player.swapJudgeCards = function (target) {
    var next = game.createEvent('swapJudgeCards');
    next.player = this;
    next.target = target;
    next.setContent('swapJudgeCards');
    return next;
  };
  lib.element.content.swapJudgeCards = function () {
    'step 0';
    game.log(player, '和', target, '交换了判定区中的牌');
    'step 1';
    var j0 = player.getCards('j');
    var todis0 = [];
    for (var i = 0; i < j0.length; i++) {
      if (player.storage._disableJudge) todis0.push(j0[i]);
    }
    player.discard(todis0);
    var j1 = target.getCards('j');
    var todis1 = [];
    for (var i = 0; i < j1.length; i++) {
      if (target.storage._disableJudge) todis1.push(j1[i]);
    }
    target.discard(todis1);
    'step 2';
    event.cards = [player.getCards('j'), target.getCards('j')];
    player.lose(event.cards[0], ui.ordering, 'visible');
    target.lose(event.cards[1], ui.ordering, 'visible');
    if (event.cards[0].length) player.$give(event.cards[0], target, false);
    if (event.cards[1].length) target.$give(event.cards[1], player, false);
    'step 3';
    for (var i = 0; i < event.cards[1].length; i++) {
      player.addJudge(event.cards[1][i]);
    }
    for (var i = 0; i < event.cards[0].length; i++) {
      target.addJudge(event.cards[0][i]);
    }
  };
  //交换体力值和体力上限
  lib.element.player.swapMaxHp = function (target, arg, arg2) {
    var next = game.createEvent('swapMaxHp');
    if (arg && arg === true) next.all = true;
    if (arg2 && arg2 === true) next.forced = true;
    next.player = this;
    next.target = target;
    next.setContent('swapMaxHp');
    return next;
  };
  lib.element.content.swapMaxHp = function () {
    'step 0';
    event.func = function (player, target) {
      var p1 = player.maxHp;
      var t1 = target.maxHp;
      [p1, t1] = [t1, p1];
      player.maxHp = p1;
      target.maxHp = t1;
    };
    event.func2 = function (player, target) {
      var p2 = player.hp;
      var t2 = target.hp;
      [p2, t2] = [t2, p2];
      player.hp = p2;
      target.hp = t2;
    };
    if (event.all) {
      event.func(player, target);
      event.func2(player, target);
      game.log(player, '与', target, '交换了体力值和体力上限');
      return;
    } else {
      var controls = [];
      if (player.hp != target.hp) controls.push('交换体力值');
      if (player.maxHp != target.maxHp) controls.push('交换体力上限');
      if (controls.length == 0) {
        game.log(`${get.translation(player)}与${get.translation(target)}无需交换体力值或体力上限`);
        return;
      }
      if (!event.forced) {
        controls.push('cancel2');
      }
      var prompt = `令${get.translation(player)}与${get.translation(target)}交换体力值或体力上限`;
      var choice;
      var p1 = player.maxHp;
      var t1 = target.maxHp;
      var p2 = player.hp;
      var t2 = target.hp;
      if (t1 - p1 < t2 - p2 || p2 < 2 && t2 > p2) {
        choice = '交换体力值';
      } else {
        choice = '交换体力上限';
      }
      var next = player.chooseControl(controls);
      next.set('prompt', prompt);
      next.set('ai', function () {
        return _status.event.choice;
      });
      next.set('choice', choice);
    }
    'step 1';
    if (result.control && result.control != 'cancel2') {
      if (result.control == '交换体力值') {
        event.func2(player, target);
      } else {
        event.func(player, target);
      }
      game.log(player, '与', target, '交换了', result.control == '交换体力值' ? '体力值' : '体力上限');
    }
    /*player.maxHp^=target.maxHp;
    target.maxHp^=player.maxHp
    player.maxHp^=target.maxHp;
    player.hp^=target.hp;
    target.hp^=player.hp;
    player.hp^=target.hp;*/
    'step 2';
    player.update();
    target.update();
  };
}