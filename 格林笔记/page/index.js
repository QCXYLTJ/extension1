window.gl_createPage = function (lib, game, ui, get, ai, _status) {
  var data = lib.config.gelin;
  var that = {
    init: function (baseplate) {
      that.coverImage = new Image();
      that.coverImage.src = 'extension/格林笔记/page/lucky.jpg';
      that.book = ui.create.div('.gl_shu', baseplate);
      that.yindao = ui.create.div('.gl_yindao', that.book);
      that.exit = ui.create.div('.gl_exit', that.book, function () {
        that.over();
      });
      that.count = ui.create.div('.gl_count', that.book);
      that.changeCount();
      ui.create.div('#gl_character', that.yindao, that.initLucky);
      that.level = ui.create.div('#gl_level', that.yindao, that.changeLevel);
      that.level.innerHTML = data.level || 0;
      that.keen = ui.create.div('#gl_love', that.yindao, function () {
        that.changeKeen(true);
      });
      var nodes = ui.create.div('.gl_shuijing', that.book);
      if (!data.amend) {
        data.amend = {};
      }
      var list = ['性别:sex', '体力:hp', '登场:enter', '撤离:retreat', '隐匿:hidden', '双面:dualside', '国籍:group'];
      for (var i of list) {
        var link = i.split(':');
        var node = ui.create.div(nodes);
        node.innerHTML = link[0];
        node.link = link[1];
        if (!data.amend[node.link]) node.classList.add('darksome');
        node.onclick = function () {
          if (data.amend[this.link]) {
            this.classList.add('darksome');
            delete data.amend[this.link];
          } else {
            this.classList.remove('darksome');
            data.amend[this.link] = true;
          }
          that.upData();
        };
      }
      that.setSize();
      var resize = function () {
        setTimeout(that.setSize, 500);
      };
      lib.onresize.push(resize);
      that.index = 0;
      that.initPage();
      var list = [];
      for (var i in lib.characterPack) {
        if (i == 'mode_extension_童话想区') continue;
        for (var j in lib.characterPack[i]) {
          if (lib.character[j]) list.push(j);
        }
      }
      var dialog = ui.create.gl_lianjie(list);
      dialog.classList.add('gl_dialog');
      that.avatar.appendChild(dialog);
      var button;
      for (var i = 0; i < dialog.buttons.length; i++) {
        button = dialog.buttons[i];
        button.onclick = function () {
          if (this.classList.contains('gl_ban')) return;
          that.$changeLink(this.link);
        };
      }
      for (var i = 0; i < that.pages.length; i++) {
        var num = that.pages.length - i;
        that.pages[i].index = i;
        that.pages[i].style.zIndex = String(num);
      }
      baseplate.classList.remove('hidden');
    },
    changeCount: function (num) {
      if (!num) num = 0;
      data.count += num;
      that.upData();
      that.count.innerHTML = '联结点数：' + get.gl_count();
    },
    changeLevel: function () {
      var list = ['联结LV0:游戏开始时，你随机变身为一名愿意回应你的童话英雄。', '联结LV1:出牌阶段限一次，你可以变身为一名你曾击败过的角色。', '联结LV2:游戏开始时或出牌阶段限一次，你可以变身为一名你曾击败过的角色。', '联结MAX:游戏开始时或出牌阶段限一次，你可以结合两名你曾击败过的角色力量。'];
      if (!data.level && data.level !== 0) data.level = 1;
      if (!data.Maxlevel) data.Maxlevel = 1;
      var page = ui.create.div('.scedi.gl_scedi.gl_change-level', ui.window);
      for (var i = 0; i < list.length; i++) {
        var node = ui.create.div(page);
        var link = list[i].split(':');
        ui.create.div(node).innerHTML = link[0];
        ui.create.div(node).innerHTML = link[1];
        node.link = i;
        node.onclick = function () {
          ui.window.removeChild(page);
          if (this.link > data.Maxlevel) {
            var num = 10;
            if (data.Maxlevel == 2) {
              num = 100;
            }
            game.gl_createDailog('要消耗' + num + '点联结点数提升联结等级吗？', ['确定', '取消'], function (bool) {
              if (bool == '确定') {
                if (get.gl_count() < num) {
                  game.gl_createDailog('你还不够成熟呢，去更多的历练自己吧！');
                } else {
                  data.Maxlevel++;
                  that.changeCount(num);
                  game.gl_createDailog('已经为你提升联结等级了，期待你以后的表现！');
                }
              }
            });
            return;
          }
          data.level = this.link;
          that.level.innerHTML = this.link;
          that.upData();
        };
      }
    },
    setSize: function () {
      var screenWidth = ui.window.offsetWidth;
      var screenHeight = ui.window.offsetHeight;
      var whr = 1.6;
      var width;
      var height;
      if (screenWidth / whr > screenHeight) {
        height = screenHeight;
        width = height * whr;
      } else {
        width = screenWidth;
        height = screenWidth / whr;
      }
      that.book.style.height = Math.round(height) + 'px';
      that.book.style.width = Math.round(width) + 'px';
    },
    upData: function () {
      game.saveConfig('gelin', lib.config.gelin);
    },
    initPage: function () {
      that.cover = ui.create.div('.gl_cover', that.book);
      ui.create.div('.gl_fazhen', that.cover);
      that.lucky = ui.create.div('.gl_lucky', that.cover);
      that.luckying = ui.create.div('.gl_luckying.hidden', that.cover);
      that.luckying.text = ui.create.div('.gl_title', that.luckying);
      that.pageList = ui.create.div('.gl_pageList', that.book);
      ui.create.div('.gl_luckyText', that.cover, function () {
        if (that.luckying.classList.contains('hidden')) {
          for (var i of that.lucky.childNodes) {
            if (!i.open) {
              i.open = true;
              i.style.backgroundSize = 'cover';
              ui.create.div('.gl_title', i).innerHTML = i.bool.name;
              i.setBackgroundImage('extension/格林笔记/' + i.bool.img);
              i.bool.result();
              setTimeout(function () {
                that.cover.style.display = '';
                that.lucky.innerHTML = '';
              }, 2000);
            }
          }
        }
      }).innerHTML = '感受那来自无数命运中传来的回响';
      for (var obj of that.pageArray) {
        that.pages.push(that.createPage(obj));
      }
    },
    pageArray: [
    {
      name: '目录',
      color: '#ff0000',
      big: true,
      content: function (page) {
        that.avatar = page;
      }
    },
    {
      name: '简介',
      color: '#5500ff',
      content: function (page) {
        that.intro = page;
        page.innerHTML = '暂无武将介绍';
      }
    },
    {
      name: '技能',
      color: '#00ffff',
      content: function (page) {
        that.skills = page;
        page.innerHTML = '江东子弟何惧于天下！';
      }
    },
    {
      name: '皮肤',
      color: '#ffff00',
      content: function (page) {
        that.skin = page;
        page.classList.add('gl_skin');
        page.innerHTML = '天冷了，去买几身新衣服穿吧！';
      }
    },
    {
      name: '增援',
      color: '#ff007f',
      content: function (page) {
        that.backup = page;
        that.backup.classList.add('gl_backup');
      }
    },
    {
      name: '属性',
      color: '#aa55ff',
      content: function (page) {
        page.classList.add('gl_nature');
        list = ['武力:power', '坚韧:defense', '祝福:recover', '魔性:magic'];
        for (var i of list) {
          var link = i.split(':');
          var node = ui.create.div(page);
          node.innerHTML = link[0] + '<br/>';
          var minus = ui.create.div('.gl_minus', node);
          var shell = ui.create.div('.gl_shell', node);
          that[link[1]] = ui.create.div('#gl_' + link[1], shell);
          shell.appendChild(document.createElement('span'));
          var add = ui.create.div('.gl_add', node);
          add.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', that.longpressAdd);
          add.link = link[1];
          add.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', that.touchendAdd);
          minus.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', that.longpressMinus);
          minus.link = link[1];
          minus.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', that.touchendMinus);
        }
      }
    },
    {
      name: '追忆',
      color: '#ffaaff',
      content: function (page) {
        that.recall = page;
        that.recall.classList.add('gl_recall');
        page.innerHTML = '写日记是个好习惯。';
      }
    }],

    pages: [],
    createPage: function (obj) {
      var page = ui.create.div('.gl_page', that.book);
      var content = ui.create.div('.gl_content-container', page);
      if (obj.big !== true) content = ui.create.div('.gl_content', content);
      ui.create.div('.gl_backface', page);
      var button = ui.create.div(that.pageList);
      button.style.backgroundColor = obj.color;
      button.link = content;
      button.index = that.pages.length;
      button.onclick = that.changePage;
      var icon = ui.create.div(button);
      icon.setBackgroundImage('extension/格林笔记/page/index' + button.index + '.png');
      icon.innerHTML = obj.name;
      obj.content(content);
      if (button.index == 0) button.onclick();
      return page;
    },
    recallClick: function () {
      if (!galgame.text[this.link]) {
        game.gl_createDailog('不必强迫自己去回忆那些痛苦的事。');
        return;
      }
      galgame.sces({
        shijian: this.link,
        pause: false
      });
    },
    changeRecall: function (name) {
      that.recall.innerHTML = '';
      if (!that.recallList[name]) return;
      for (var i of that.recallList[name]) {
        var arr = i.split(':');
        var node = ui.create.div(that.recall);
        node.innerHTML = arr[0];
        node.link = arr[1];
        node.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', that.recallClick);
      }
    },
    longpressAdd: function () {
      if (!that.link) return;
      var node = this;
      this.longpress = setTimeout(function () {
        node.interval = true;
        var interval = function () {
          if (get.gl_count() <= 0) return;
          var nature = get.gl_nature(that.link);
          if (nature[node.link] == 100) {
            return;
          }
          var num = 200;
          for (var i in nature) {
            num -= nature[i];
          }
          if (num == 0) {
            return;
          }
          that.addCount(node.link);
          that.changeCount(+1);
          if (node.interval) {
            setTimeout(interval, 100);
          }
        };
        interval();
      }, 1000);
    },
    touchendAdd: function () {
      if (!that.link) return;
      clearTimeout(this.longpress);
      var node = this;
      if (this.interval) {
        delete this.interval;
      } else {
        if (get.gl_count() <= 0) {
          game.gl_createDailog('联结点数不足！');
          return;
        }
        var nature = get.gl_nature(that.link);
        if (nature[node.link] == 100) {
          game.gl_createDailog('单项属性不能大于100！');
          return;
        }
        var num = 200;
        for (var i in nature) {
          num -= nature[i];
        }
        if (num == 0) {
          game.gl_createDailog('属性总和不能超过200！');
          return;
        }
        var str = '确定要消耗1点联结点数增加1点';
        switch (node.link) {
          case 'power':
            str += '武力';
            break;
          case 'defense':
            str += '韧性';
            break;
          case 'recover':
            str += '祝福';
            break;
          case 'magic':
            str += '魔性';
            break;
        }
        str += '吗？';
        game.gl_createDailog(str, ['确定', '取消'], function (bool) {
          if (bool == '确定') {
            that.addCount(node.link);
            that.changeCount(1);
          }
        });
      }
    },
    longpressMinus: function () {
      if (!that.link) return;
      var node = this;
      this.longpress = setTimeout(function () {
        node.interval = true;
        var interval = function () {
          that.minusCount(node.link);
          if (node.interval) {
            setTimeout(interval, 100);
          }
        };
        interval();
      }, 1000);
    },
    touchendMinus: function () {
      if (!that.link) return;
      clearTimeout(this.longpress);
      var node = this;
      if (this.interval) {
        delete this.interval;
      } else {
        var nature = get.gl_nature(that.link);
        if (nature[node.link] == 0) {
          game.gl_createDailog('单项属性不能低于0！');
          return;
        }
        var str = '确定要降低1点';
        switch (node.link) {
          case 'power':
            str += '武力';
            break;
          case 'defense':
            str += '韧性';
            break;
          case 'recover':
            str += '祝福';
            break;
          case 'magic':
            str += '魔性';
            break;
        }
        str += '属性吗？';
        game.gl_createDailog(str, ['确定', '取消'], function (bool) {
          if (bool == '确定') {
            that.minusCount(node.link);
          }
        });
      }
    },

    minusCount: function (type) {
      game.gl_gainNature(that.link, type, -1);
      that.changeNature(that.link);
    },

    addCount: function (type) {
      game.gl_gainNature(that.link, type, 1);
      that.changeNature(that.link);
    },

    changeKeen: function (bool) {
      if (!data.keen) data.keen = [];
      that.keen.classList.remove('darksome');
      if (bool) {
        if (data.keen.includes(that.link)) {
          data.keen.remove(that.link);
        } else {
          data.keen.push(that.link);
        }
        that.upData();
      }
      if (!data.keen.includes(that.link)) {
        that.keen.classList.add('darksome');
      }
    },

    changeSkill: function () {
      that.skills.innerHTML = '';
      var list = lib.character[that.link][3];
      for (var i = 0; i < list.length; i++) {
        if (!lib.translate[list[i]] || !lib.translate[list[i] + '_info']) continue;
        var node = ui.create.div('.gl_skill', that.skills);
        ui.create.div(node).innerHTML = lib.translate[list[i] + '_info'];
        ui.create.div(node).innerHTML = '——【' + get.translation(list[i]) + '】';
        var info = get.info(list[i]);
        if (info.derivation) {
          var derivation = info.derivation;
          if (typeof derivation == 'string') {
            derivation = [derivation];
          }
          for (var j = 0; j < derivation.length; j++) {
            var deri = ui.create.div(that.skills, '.gl_skill.yuanli');
            ui.create.div(deri).innerHTML = lib.translate[derivation[j] + '_info'];
            ui.create.div(deri).innerHTML = '——【' + get.translation(derivation[j]) + '】';
            deri.link = derivation[j];
          }
        }
      }
    },

    changeBackup: function (name) {
      that.backup.innerHTML = '';
      if (lib.gl_skillList[name]) {
        var list = lib.gl_skillList[name];
        for (var i of list) {
          var node = ui.create.div(that.backup);
          node.link = i;
          if (data.specialSkill[name] && data.specialSkill[name].includes(i)) {
            node.classList.add('gl_stamp');
          }
          node.onclick = function () {
            var list = get.gl_specialSkill(name);
            if (list.includes(this.link)) {
              list.remove(this.link);
              this.classList.remove('gl_stamp');
              that.upData();
              return;
            }
            if (list.length >= 2) {
              game.gl_createDailog('贪心是没有好结果的啦！（已达使用上限）');
              return;
            }
            list.add(this.link);
            this.classList.add('gl_stamp');
            that.upData();
          };
          ui.create.div(node).innerHTML = '【' + get.translation(i) + '】<br/>' + lib.translate[i + '_info'];
        }
      } else if (lib.characterPack.gl_create[name]) {
        that.skills.innerHTML = '此为造物主，暂无增援能力可用';
      } else {
        if (!data.qieti) {
          data.qieti = {};
        }
        for (var i in lib.gl_skill) {
          var node = ui.create.div(that.backup);
          var str = '【' + lib.gl_skill[i].name + '】</br>类型：';
          switch (lib.gl_skill[i].type) {
            case 'replace':
              str += '<span style="color:#0000ff">切替</span>';
              break;
            case 'retreat':
              str += '<span style="color:#55ff00">撤离</span>';
              break;
          }
          str += '</br>' + lib.gl_skill[i].info;
          ui.create.div(node).innerHTML = str;
          node.link = i;
          if (data.qieti[name] && data.qieti[name][lib.gl_skill[i].type] == i) {
            node.classList.add('gl_stamp');
          }
          node.onclick = that.changeQieti;
        }
      }
    },

    changeQieti: function () {
      var name = that.link;
      var type = lib.gl_skill[this.link].type;
      var list = game.gl_getQieti(name);
      if (list[type] == this.link) {
        delete list[type];
        this.classList.remove('gl_stamp');
        that.upData();
        return;
      }
      if (!data.data.includes(this.link)) {
        var str = '要花费' + lib.gl_skill[this.link].count;
        str += '点联结点数解锁增援技能【' + lib.gl_skill[this.link].name + '】吗？';
        var result = this.link;
        game.gl_createDailog(str, ['确定', '取消'], function (bool) {
          if (bool == '确定') {
            if (get.gl_count() < lib.gl_skill[result].count) {
              game.gl_createDailog('你还不够成熟呢，去更多的历练自己吧！');
            } else {
              data.skills.push(result);
              that.changeCount(lib.gl_skill[result].count);
              game.gl_createDailog('已经为你解锁了，期待你以后的表现！');
            }
          }
        });
        return;
      }
      list[type] = this.link;
      this.classList.add('gl_stamp');
      that.upData();
    },

    changeNature: function (name) {
      var nature = get.gl_nature(name);
      that.power.style.width = nature.power + '%';
      that.power.parentNode.childNodes[1].innerHTML = nature.power + '/100';
      that.defense.style.width = nature.defense + '%';
      that.defense.parentNode.childNodes[1].innerHTML = nature.defense + '/100';
      that.recover.style.width = nature.recover + '%';
      that.recover.parentNode.childNodes[1].innerHTML = nature.recover + '/100';
      that.magic.style.width = nature.magic + '%';
      that.magic.parentNode.childNodes[1].innerHTML = nature.magic + '/100';
    },

    $changeLink: function (name, bool) {
      var node = that.yindao.childNodes[0];
      if (!node.rotating) {
        node.rotating = true;
        node.classList.add('gl_xvanzhuan');
        if (bool !== false) {
          node.setBackground(name, 'character');
          that.intro.innerHTML = get.characterIntro(name);
          that.changeNature(name);
          that.link = name;
          that.changeKeen();
          that.changeBackup(name);
          that.changeSkill(name);
          that.changeSkin(name);
          that.changeRecall(name);
        }
        setTimeout(function () {
          node.rotating = false;
          node.classList.remove('gl_xvanzhuan');
        }, 500);
      }
    },
    changePage: function () {
      game.playAudio('../extension/格林笔记/page/books');
      if (that.eject) that.eject.classList.remove('gl_eject');
      that.eject = this;
      this.classList.add('gl_eject');
      while (that.index != this.index) {
        if (that.index < this.index) {
          that.pages[that.index].style.transform = 'rotateY(-180deg)';
          that.pages[that.index].style.zIndex = String(that.pages[that.index].index);
          that.index++;
        } else {
          that.index--;
          that.pages[that.index].style.transform = 'rotateY(0deg)';
          var num = that.pages.length - that.pages[that.index].index;
          that.pages[that.index].style.zIndex = String(num);
        }
      }
    },

    setBackground: function (node, name, type, ext, subfolder) {
      if (type == 'character' && ext == 'noskin') {
        for (var i = lib.character[name][4].length - 1; i > 0; i--) {
          if (lib.character[name][4][i].indexOf('ext:') == 0) {
            var src = lib.character[name][4][i];
            node.setBackgroundImage(src.replace(/^ext:/, 'extension/'));
            node.style.backgroundSize = 'cover';
            return node;
          }
        }
      }
      node.setBackground(name, type, ext, subfolder);
      return node;
    },

    changeSkin: function (name) {
      that.skin.innerHTML = '';
      var name2 = name;
      var src = 'image/skin/';
      for (var value of lib.character[name][4]) {
        if (value.indexOf('ext:') == 0) {
          src = value.split('/')[0].replace(/^ext:/, 'extension/') + '/skin/';
          break;
        }
      }
      var introadded = false;
      var gzbool = false;
      if (name.indexOf('gz_shibing') == 0) {
        name = name.slice(3, 11);
      } else if (name.indexOf('gz_') == 0) {
        name = name.slice(3);
        gzbool = true;
      }
      var node = that.yindao.childNodes[0];
      var button = ui.create.div('.gl_skin_node', that.skin, function () {
        that.$changeLink(null, false);
        game.gl_changeSkin(name, this.link);
        that.yindao.childNodes[0].setBackground(name, 'character');
      });
      if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) {
        that.setBackground(button, name2, 'character', 'noskin');
      } else {
        that.setBackground(button, name, 'character', 'noskin');
      }
      var createButtons = function (list) {
        for (var i = 0; i < list.length; i++) {
          var node;
          if (i == 0) {
            node = that.skin;
          } else {
            node = ui.create.div('.gl_skin_pege', that.skin);
          }
          for (var j = 1; j < list[i][1]; j++) {
            var button = ui.create.div('.gl_skin_node', node, function () {
              that.$changeLink(null, false);
              game.gl_changeSkin(name, this.link);
              that.yindao.childNodes[0].setBackground(name, 'character');
            });
            button.link = list[i][0] + j;
            button.setBackgroundImage(src + name + '/' + list[i][0] + j + '.jpg');
          }
          if (i > 0) {
            ui.create.div(node).innerHTML = '【' + lib.gl_spSkin[name][list[i][0]].name + '】';
            ui.create.div(node).innerHTML = lib.gl_spSkin[name][list[i][0]].info;
          }
        }
      };
      var skinMap = [['', 1]];
      for (var i in lib.gl_spSkin[name]) {
        skinMap.push([i, 1]);
      }
      var num = 0;
      var loadImage = function () {
        var img = new Image();
        img.onload = function () {
          skinMap[num][1]++;
          loadImage();
        };
        img.onerror = function () {
          num++;
          if (num < skinMap.length) {
            loadImage();
          } else {
            createButtons(skinMap);
          }
        };
        img.src = src + name + '/' + skinMap[num][0] + skinMap[num][1] + '.jpg';
      };
      loadImage();
    },
    initLucky: function () {
      if (get.gl_count() < 5) {
        return;
      }
      game.gl_createDailog('要进行感应吗？（每次消耗5点联结点数）', ['来1次', '来5次', '来10次', '取消'], function (bool) {
        var num;
        switch (bool) {
          case '来1次':
            num = 1;
            break;
          case '来5次':
            num = 5;
            break;
          case '来10次':
            num = 10;
            break;
        }
        if (num && get.gl_count() >= num * 5) {
          that.cover.style.display = 'inline-block';
          that.changeCount(num * 5);
          for (var i = 0; i < num; i++) {
            that.createLucky();
          }
          if (that.lucky.childNodes.length == 1) {
            that.lucky.childNodes[0].onclick();
          }
        }
      });
    },
    createLucky: function () {
      var node = ui.create.div(that.lucky);
      var num = Math.random();
      if (num < 0.5) {
        node.bool = that.luckyList.none;
      } else if (num < 0.8) {
        node.bool = that.luckyList.common.randomGet();
      } else if (num < 0.95) {
        node.bool = that.luckyList.rare.randomGet();
      } else {
        node.bool = that.luckyList.peerless.randomGet();
      }
      node.setBackgroundImage('extension/格林笔记/page/lucky.jpg');
      node.onclick = function () {
        if (!this.open && that.luckying.classList.contains('hidden')) {
          this.open = true;
          that.luckying.link = this;
          that.luckying.classList.remove('hidden');
          that.luckying.setBackgroundImage('extension/格林笔记/' + this.bool.img);
          that.fillCanvas(that.luckying);
        }
      };
    },
    fillCanvas: function (node) {
      var canvas = document.createElement('canvas');
      canvas.width = 210;
      canvas.height = 310;
      node.appendChild(canvas);
      canvas.ctx = canvas.getContext('2d');
      canvas.ctx.drawImage(that.coverImage, 0, 0, 210, 310);
      var tapstart = lib.config.touchscreen ? 'touchstart' : 'mousedown',
        tapmove = lib.config.touchscreen ? 'touchmove' : 'mousemove',
        tapend = lib.config.touchscreen ? 'touchend' : 'mouseup';
      canvas.ctx.globalCompositeOperation = 'destination-out';
      canvas.addEventListener(tapstart, that.eventDown);
      canvas.addEventListener(tapend, that.eventUp);
      canvas.addEventListener(tapmove, that.eventMove);
    },
    // 点击开始事件
    eventDown: function (e) {
      e.preventDefault();
      this.mousedown = true;
    },
    // 点击结束事件
    eventUp: function (e) {
      e.preventDefault();
      this.mousedown = false;
    },
    // 刮奖事件
    eventMove: function (e) {
      if (this.hasDone) return;
      let ctx = this.ctx;
      e.preventDefault();
      if (this.mousedown) {
        if (e.changedTouches) {
          e = e.changedTouches[0];
        }
        var x = (e.clientX + document.body.scrollLeft || e.pageX) - this.getBoundingClientRect().left || 0,
          y = (e.clientY + document.body.scrollTop || e.pageY) - this.getBoundingClientRect().top || 0;

        this.ctx.beginPath();
        this.ctx.arc(x, y, 20, 0, Math.PI * 2);
        this.ctx.fill();
      }
      that.handleFilledPercentage(this, that.getFilledPercentage(this));
    },
    getFilledPercentage: function (node) {
      let imgData = node.ctx.getImageData(0, 0, 100, 200);
      let pixels = imgData.data;
      let transPixels = [];
      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] < 128) {
          transPixels.push(pixels[i + 3]);
        }
      }
      return (transPixels.length / (pixels.length / 4) * 100).toFixed(2) + '%';
    },
    handleFilledPercentage: function (node, percentage) {
      percentage = percentage || 0;
      var parent = node.parentNode;
      if (parseInt(percentage) > 50) {
        node.remove();
        node.hasDone = true;
        parent.link.style.backgroundSize = 'cover';
        that.luckying.text.innerHTML = parent.link.bool.name;
        ui.create.div('.gl_title', parent.link).innerHTML = parent.link.bool.name;
        parent.link.setBackgroundImage('extension/格林笔记/' + parent.link.bool.img);
        parent.link.bool.result();
        setTimeout(function () {
          parent.classList.add('hidden');
        }, 1000);
        for (var i of that.lucky.childNodes) {
          if (!i.open) return;
        }
        setTimeout(function () {
          that.cover.style.display = '';
          that.lucky.innerHTML = '';
        }, 2000);
      }
    },
    recallList: {
      gl_aikesi: ['空白的命运之书:kongbaidemingyunzhishu', '永远的约定:yongyuandeyueding', '真公主与假王子:zhengongzhuyujiawangzi'],
      gl_leina: ['格林之家:gelinzhijia'],
      gl_famu: ['伟大的人:weidaderen', '两位魔女:liangweimonv'],
      gl_huiguniang: ['噩梦舞会:emengwuhui'],
      gl_xiaohongmao: ['战栗的火焰:zhanlidehuoyan']
    },
    luckyList: {
      none: {
        name: '联结点数*1',
        img: 'xiangqv.jpg',
        result: function () {
          that.changeCount(-1);
        }
      },
      common: [
      {
        name: '联结点数*5',
        img: 'xiangqv.jpg',
        result: function () {
          that.changeCount(-5);
        }
      }],

      rare: [
      {
        name: '束缚爱丽丝',
        img: 'character/gl_ailisi.jpg',
        result: function () {
          game.gl_gainSkin('ailisi_shufu');
        }
      },
      {
        name: '黑混沌格尔达',
        img: 'character/gl_geerda.jpg',
        result: function () {
          game.gl_gainSkin('gl_geerda');
        }
      },
      {
        name: '黑混沌爱丽丝',
        img: 'character/gl_ailisi.jpg',
        result: function () {
          game.gl_gainSkin('ailisi_hei');
        }
      },
      {
        name: '黑混沌小红帽',
        img: 'character/gl_xiaohongmao.jpg',
        result: function () {
          game.gl_gainSkin('xiaohongmao_hei');
        }
      },
      {
        name: '暴力小红帽',
        img: 'character/gl_xiaohongmao.jpg',
        result: function () {
          game.gl_gainSkin('xiaohongmao_baoli');
        }
      },
      {
        name: '黑混沌阿拉丁',
        img: 'character/gl_alading.jpg',
        result: function () {
          game.gl_gainSkin('gl_alading');
        }
      }],

      peerless: [
      {
        name: '伊特',
        img: 'character/gl_yite.jpg',
        result: function () {
          game.gl_gain('gl_yite');
        }
      },
      {
        name: '小矮人',
        img: 'character/gl_xiaoairen.jpg',
        result: function () {
          game.gl_gain('gl_xiaoairen');
        }
      },
      {
        name: '猎人',
        img: 'character/gl_lieren.jpg',
        result: function () {
          game.gl_gain('gl_lieren');
        }
      },
      {
        name: '米莉卡',
        img: 'character/gl_milika.jpg',
        result: function () {
          game.gl_gain('gl_milika');
        }
      },
      {
        name: '塔琪安那',
        img: 'character/gl_taqianna.jpg',
        result: function () {
          game.gl_gain('gl_taqianna');
        }
      },
      {
        name: '御坂美琴',
        img: 'character/gl_yubanmeiqin.jpg',
        result: function () {
          game.gl_gain('gl_yubanmeiqin');
        }
      },
      {
        name: '有川姬',
        img: 'character/gl_youchuanji.jpg',
        result: function () {
          game.gl_gain('gl_youchuanji');
        }
      },
      {
        name: '王陆',
        img: 'character/gl_wanglu.jpg',
        result: function () {
          game.gl_gain('gl_wanglu');
        }
      },
      {
        name: '后藤独',
        img: 'character/gl_houtengdu.jpg',
        result: function () {
          game.gl_gain('gl_houtengdu');
        }
      },
      {
        name: '桑丘',
        img: 'character/gl_sangqiu.jpg',
        result: function () {
          game.gl_gain('gl_sangqiu');
        }
      },
      {
        name: '木之本樱',
        img: 'character/gl_muzhibenying.jpg',
        result: function () {
          game.gl_gain('gl_muzhibenying');
        }
      }]

    }
  };
  return that;
};