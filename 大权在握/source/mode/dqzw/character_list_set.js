import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
export function func() {
  _status.dragged = false;
  if (ui.dqzw_boss_editor_menu) {
    let menu = ui.dqzw_boss_editor_menu;
    menu.show();
    if (menu.characterList) menu.characterList.forEach(node => node.update());
    for (let node of menu.children) if (node.isClone) node.remove();
    menu.listenTransition(e => {
      menu.style.transition = '.4s';
      menu.style.transform = 'scale(1)';
    });
    return;
  }
  let container = ui.create.div('.popup-container.menubg', ui.window, {
    transition: 'none',
    transformOrigin: 'left top',
    transform: 'scale(0)',
  }),
    clickend = {},
    popupContainer = ui.create.div('.popup-container.hidden', container, function (e) {
      if (this.noclose) {
        this.noclose = false;
        return;
      }
      if (this.onclose && this.onclose(this, e) !== false) this.hide();
    }),
    system = ui.create.div('.system', container, {
      display: 'flex',
      flexFlow: 'row-reverse wrap',
      top: '3%',
      right: '1%',
      zIndex: 5,
      width: '44%',
    }),
    close = createSystem('关闭', closeMenu),
    save = createSystem('保存', () => {
      popup((_status.connectMode ? '联机设置' : '') + '已保存(重启生效)');
    }),
    schemeSave = createSystem('保存设置', () => {
      saveArchive();
    }),
    schemeExport = createSystem('导出设置', exportArchive),
    schemeImport = createSystem('导入设置', () => {
      let popupcontainer = popup('', 0, void 0, popupContainer),
        content = ui.create.div('.content', popupcontainer, {
          position: 'relative',
        }),
        caption = ui.create.div(
          '.caption',
          content,
          `<div class = "text center">
                    导入存档(点击读档,长按删除)
                </div>`
        ),
        input = ui.create.node('input', content),
        archive = ui.create.div('.content', content, {
          height: (container.clientHeight / 100) * 30 + 'px',
          overflow: 'auto',
        }),
        frag = document.createDocumentFragment(),
        mode = lib.config.dqzw_boss_bossList_mode,
        list = lib.config[`dqzw_boss_${mode}_character_list_scheme`];
      for (let id in list) {
        let node = setPress(
          frag.appendChild(
            button(String(list[id].name), {
              width: '94%',
            })
          ),
          function () {
            if (list[this.link] && !this._removed) {
              let chars = container.leftList.characters;
              chars.length = 0;
              chars.push(...list[this.link].list);
              container.leftList.update();
            }
          }
        );
        lib.setIntro(node, function (dialog) {
          dialog.close();
          let list = lib.config[`dqzw_boss_${lib.config.dqzw_boss_bossList_mode}_character_list_scheme`];
          if (list[this.link] && this.link != 'default') {
            if (confirm('是否删除' + list[this.link].name + '？')) {
              delete list[this.link];
              game.saveConfig(`dqzw_boss_${mode}_character_list_scheme`, list);
              popupcontainer.withdraw(() => popupContainer.hide());
            }
            this._removed = true;
          }
        });
        node.link = id;
      }
      popupContainer.show();
      popupContainer.onclose = (node, e) => {
        if (e.target == popupContainer) {
          popupcontainer.withdraw(() => node.hide());
        }
        return false;
      };
      input.type = 'file';
      input.addEventListener('change', function (e) {
        let file = this.files[0],
          value = this.value,
          types = ['js', 'json', 'txt'],
          map = {
            js: result => {
              eval(result);
              return result;
            },
            json: result => {
              return JSON.parse(result);
            },
          },
          suffix = (value.match(/(?=.)[^.]*$/) || [])[0];
        if (!types.includes(suffix)) {
          this.value = '';
          alert('不支持该类型文件');
          return;
        }
        if (file) {
          const reader = new FileReader();
          reader.onload = e => {
            let result = e.target.result;
            if (result) {
              let characters;
              result = map[suffix] ? map[suffix](result) : result;
              if (typeof result == 'object') {
                characters = result;
              }
              else {
                eval(`
			                        characters = "${result.replace(/\s/g, '')}".split(',');
			                    `);
              }
              if (characters) {
                if (typeof characters != 'object') alert('导入失败');
                else saveArchive(characters);
                popupcontainer.withdraw(() => popupContainer.hide());
              }
            }
          };
          reader.readAsText(file, 'UTF-8');
        }
      });
      popupcontainer.style.overflow = 'hidden';
      archive.appendChild(frag);
      setScroll(archive);
    }),
    updatePage = createSystem('刷新', () => {
      closeMenu();
      delete ui.dqzw_boss_editor_menu;
      func();
    }),
    content = ui.create.div('.content', container, {
      width: '100%',
    }),
    caption = ui.create.div(
      '.caption',
      `<div class = "text center">
            将池设置(长按拖动武将添加或删除,移动/PC端点击/右键显示武将资料)
        </div>`,
      content
    ),
    configList = ui.create.div('.config-list', content, {
      display: 'flex',
      width: '100%',
      height: (container.clientHeight / 100) * 12 + 'px',
      overflow: 'auto',
    }),
    characterList = ui.create.div('.character-list', content, {
      position: 'relative',
      width: '100%',
      height: (container.clientHeight / 100) * 76 + 'px',
    }),
    leftList = ui.create.div('.character-left-list.menubg', characterList, {
      position: 'relative',
      width: '48%',
      height: '100%',
      margin: '0 .5%',
    }),
    rightList = leftList.cloneNode(true);
  rightList.className = 'character-right-list menubg';
  characterList.appendChild(rightList);
  ui.scrollTo = scrollTo;
  configList.buttons = [];
  container.characterList = [leftList, rightList];
  container.leftList = leftList;
  container.rightList = rightList;
  for (let node of [leftList, rightList]) {
    let left = leftList == node,
      content = ui.create.div('.content', node, {
        width: '100%',
        height: '100%',
      }),
      caption = ui.create.caption(
        `<div class = "text center">
                ${left ? 'BOSS将池' : '全部武将'}
            </div>`,
        content
      ),
      tip = button('？', content, {
        width: '6.6%',
      }),
      input = ui.create.node('input.menubg', content, {
        width: '80%',
        outline: 'none',
        padding: '2px',
        backgroundBlendMode: 'lighten',
        border: 'none',
      }),
      reg = setPress(
        button('正则', content, {
          width: '6.6%',
        }),
        function () {
          if (this.classList.contains('active')) this.classList.remove('active');
          else {
            input.regexp = true;
            this.classList.add('active');
          }
        }
      ),
      groupList = ui.create.div('.group-list', content, {
        display: 'flex',
        width: '98%',
        overflow: 'auto',
        margin: '1%',
      }),
      packList = ui.create.div('.pack-list', content, {
        display: 'flex',
        width: '98%',
        overflow: 'auto',
        margin: '1%',
      }),
      characterList = ui.create.div('.character-list.content', content, {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        height: '48%',
      }),
      pageList = ui.create.div('.page-list.content', content, {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        overflow: 'auto',
      }),
      filter = {};
    setScroll(groupList);
    setScroll(packList);
    lib.setScroll(characterList);
    setPress(tip, function () {
      let menu = ui.create.div(
        '.menubg',
        /*`
	                    使用空格分隔多个筛选符,#h{4}[空格]#s{X}4血且拥有技能X<br>	
	                    开启正则表达式模式时所有筛选符失效<br>					                   
	                    #i 武将id,默认筛选符,使用{}选择包含指定字符的,#i{f}<br>
	                    #t {筛选符} 该筛选符按翻译进行选择,#t{武将中文名}<br>
	                    #! 选择与该筛选符后首个筛选符不符的,#!#h{4}体力不为4<br>
	                    #h {X} 体力值为X的武将,体力/上限/护甲,#h{4/4/1}4血1甲<br>
	                    #s {技能id} 拥有指定技能<br>
	                    #g {标签} 拥有指定标签<br>
	                    #x {性别,female女,male男} 指定性别的武将<br>	
	                    #f {函数,参数有:name,info,group,hp,maxHp,hujia,tags,sex,skills} #f{name == 'x' && hp < 4}名称为x且体力小于4的武将<br>
	                `*/ '',
        {
          width: '50%',
          height: '50%',
          textAlign: 'left',
          padding: '1%',
        }
      );
      this.classList.add('active');
      openMenu(
        menu,
        {
          clientX: (document.body.clientWidth / 100) * 25 * game.documentZoom,
          clientY: (document.body.clientHeight / 100) * 25 * game.documentZoom,
        },
        () => {
          menu.delete();
          this.classList.remove('active');
        }
      );
    });
    input.addEventListener('keyup', e => {
      let val = input.value,
        list = val.split(' ');
      e.stopPropagation();
      if (!list.length) {
        delete filter.search;
        node.update();
      }
      if (e.key == 'Enter') {
        if (list.length) {
          let filters = [];
          for (let item of list) {
            let group = { brace: [], parentheses: [] },
              result = [],
              current;
            result.last = () => result.slice(-1)[0];
            result.get = id => result.find(item => item.id == id);
            if (input.regexp) {
              eval(`
                                filters.push(
                                    name => ${item}.test(name)
                                );
                            `);
            } else if (item[0] == '#')
              for (let i = 0; i < item.length; i++) {
                switch (item[i]) {
                  case '#':
                    result.push({
                      tag: item[i + 1],
                      string: '',
                      id: i,
                    });
                    i++;
                    current = false;
                    break;
                  case '{':
                    group.brace.push([i, result.last().id]);
                    break;
                  case '}':
                    let last = group.brace.pop();
                    if (last !== undefined) result.get(last[1]).string = item.slice(last[0] + 1, i);
                    break;
                }
              }
            else filters.push(name => (item[0] == '$' ? name : get.translation(name)).includes(item[0] == '$' ? item.slice(1) : item));
          }
          filter.search = function (name, info) {
            return filters.every(filter => filter(name, info));
          };
        }
        node.update();
      }
    });
    let characters = [],
      pages = [],
      groups = [];
    for (let pack of Object.keys(lib.characterPack).reverse()) {
      let chars = Object.keys(lib.characterPack[pack]);
      characters = characters.concat(chars);
      for (let name of chars) groups.add(...(get.is.double(name, true) || [get.bordergroup(get.character(name))]));
    }
    if (left)
      characters = Object.keys(lib.character);
    node.characters = characters;
    for (let group of groups.sort(lib.sort.group)) {
      let node = setPress(
        button(get.translation(group), groupList, {
          display: 'flex',
          position: 'relative',
          whiteSpace: 'nowrap',
          color: 'white',
          margin: '.5%',
        }),
        groupClick
      );
      node.dataset.nature = get.groupnature(group);
      node.link = group;
    }
    {
      if (
        [...groupList.children].reduce((pre, cur) => {
          return pre + getRect(cur).clientW;
        }, 0) < groupList.clientWidth
      )
        groupList.style.justifyContent = 'center';
    }
    if (left)
      setPress(
        button('清空', packList, {
          position: 'relative',
          whiteSpace: 'nowrap',
          margin: '.5%',
        }),
        function () {
          leftList.characters.length = 0;
          leftList.update();
        }
      );
    setPress(
      button('收藏', packList, {
        position: 'relative',
        whiteSpace: 'nowrap',
        margin: '.5%',
      }),
      function () {
        if (this.classList.contains('active')) {
          delete filter.favourite;
          this.classList.remove('active');
        } else {
          filter.favourite = name => (lib.config.favouriteCharacter || []).includes(name);
          this.classList.add('active');
        }
        charUpdate(Filter());
      }
    );
    for (let pack of Object.keys(lib.characterPack).reverse()) {
      setPress(
        button(get.translation(pack + '_character_config'), packList, {
          position: 'relative',
          whiteSpace: 'nowrap',
          margin: '.5%',
        }),
        packClick
      ).link = pack;
    }
    {
      if (
        [...packList.children].reduce((pre, cur) => {
          return pre + getRect(cur).clientW;
        }, 0) < packList.clientWidth
      )
        packList.style.justifyContent = 'center';
    }
    let max = 0;
    if (characters.length) {
      let list = [...characters],
        char;
      do {
        char = createChar(list.shift(), void 0, characterList.children.length);
        if (char) {
          max = Math.floor(characterList.clientWidth / getRect(char).clientW) * 4;
          char.remove();
        }
      } while (!char && list.length);
    }
    charUpdate(characters);
    node.update = () => {
      charUpdate(Filter());
    };
    function createChar(name, position, index, ...args) {
      if (!get.character(name)) return;
      let node = ui.create.button(name, 'character', true, ...args);
      node.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function (e) {
        if (_status.dragged) return;
        if (this.parentNode.parentNode.parentNode == leftList ? lib.config.dqzw_boss_quick_remove : lib.config.dqzw_boss_quick_add && lib.config.touchscreen) {
          this._clickstart = true;
          setTimeout(
            that => {
              if (that._clickstart) {
                ui.click.charactercard(this.link, null, null, true, this);
                that._clickstart = false;
              }
            },
            500,
            this
          );
        } else moveStart.apply(this, arguments);
      });
      node.addEventListener(lib.config.touchscreen ? 'touchend' : 'contextmenu', function () {
        if (_status.dragged) return;
        if (this.parentNode.parentNode.parentNode == leftList ? lib.config.dqzw_boss_quick_remove : lib.config.dqzw_boss_quick_add && lib.config.touchscreen) return;
        ui.click.charactercard(this.link, null, null, true, this);
      });
      node.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function (e) {
        if ((typeof e.button == 'number' && e.button != 1) || _status.dragged) {
          this._clickstart = false;
          return;
        }
        if (this.parentNode.parentNode.parentNode == leftList ? lib.config.dqzw_boss_quick_remove : lib.config.dqzw_boss_quick_add) {
          if (this._clickstart) {
            if (lib.config.dqzw_boss_quick_remove && this.parentNode.parentNode.parentNode == leftList) {
              popup(`已移出武将(${get.translation(this.link)})`);
              leftList.characters.remove(this.link);
              leftList.update();
            } else if (lib.config.dqzw_boss_quick_add) {
              if (!leftList.characters.includes(this.link)) {
                popup(`已添加武将(${get.translation(this.link)})`);
                leftList.characters.push(this.link);
                leftList.update();
              } else popup('该武将已存在!');
            }
          }
        }
        this._clickstart = false;
        moveOver.apply(this, arguments);
      });
      node.classList.add('pointerdiv');
      node.style.transition = 'none';
      node.moveOver = [
        function (clone) {
          let pos1 = getRect(clone),
            pos2 = getRect(left ? rightList : leftList),
            bool = pos1.x < pos2.x || pos1.y < pos2.y || pos1.x > pos2.x + pos2.clientW || pos1.y > pos2.y + pos2.clientH;
          if (bool) return;
          if (left) {
            this.reset = false;
            popup(`已移出武将(${get.translation(this.link)})`);
            leftList.characters.remove(this.link);
            leftList.update();
          } else if (!leftList.characters.includes(this.link)) {
            popup(`已添加武将(${get.translation(this.link)})`);
            leftList.characters.push(this.link);
            leftList.update();
          } else popup('该武将已存在!');
        },
      ];
      let push = to => to.appendChild(node);
      if (index) setTimeout(push, 30 * index, position || characterList);
      else push(position || characterList);
      return node;
    }
    function charUpdate(characters) {
      characterList.innerHTML = '';
      pageList.innerHTML = '';
      pages = [];
      let frag = document.createDocumentFragment();
      for (let character of characters) if (characterList.children.length < max) createChar(character, frag, frag.children.length);
      characterList.appendChild(frag);
      let num = Math.ceil(characters.length / max),
        index = 0;
      while (num-- > 0) {
        let node = button(index + 1 + '', pages.length < 10 && pageList),
          page = characters.slice(index * max, (index + 1) * max);
        node.page = page;
        node.index = index;
        pages.push(page);
        index++;
        setPress(node, pageChange);
      }
      if (pageList.children.length) pageChange.call(pageList.children[0]);
      else characterList.innerHTML = '未找到武将';
      if (pages.length > 10) {
        setPress(button('<', 0, pageList), () => {
          let current = pageList.current;
          if (current) {
            let previous = current.previousElementSibling;
            if (previous && typeof previous.index == 'number') pageChange.call(previous);
            else pageChange(0, current.index - 1);
          }
        });
        setPress(button('<<', 0, pageList), () => {
          if (pageList.current) pageChange(0, 0);
        });
        setPress(button('…', pageList), () => {
          let current = pageList.current;
          if (current)
            game.prompt('###要跳转到第几页？###' + (current.index + 1), true, str => {
              if (/^[0-9]*?$/.test(str) && str * 1 <= pages.length && str * 1 > 0) pageChange(0, str * 1 - 1);
            });
        });
        setPress(button('>', pageList), () => {
          let current = pageList.current;
          if (current) {
            let next = current.nextElementSibling;
            if (next && typeof next.index == 'number') pageChange.call(next);
            else pageChange(0, current.index + 1);
          }
        });
        setPress(button('>>', pageList), () => {
          if (pageList.current) pageChange(0, pages.length - 1);
        });
      }
    }
    function pageChange(_e, index) {
      index = typeof index == 'number' ? index : this.index;
      if (index > pages.length - 1) index = 0;
      if (index < 0) index = pages.length - 1;
      let page = pages[index],
        list = [...characterList.children];
      if (page) {
        let current = pageUpdate(index + 1) || this,
          skip;
        if (pageList.current == this) return;
        pageList.current = current;
        for (let node of [...pageList.children]) node.classList.remove('active');
        if (current) current.classList.add('active');
        for (let i = 0; i < max; i++) {
          if (page[i]) {
            let node = createChar(page[i], null, i);
            if (list[i] && node) characterList.replaceChild(node, list[i]);
          } else if (list[i]) list[i].remove();
        }
        scrollTo(characterList, 0, 500, void 0, true);
      }
    }
    function pageUpdate(to) {
      let list = [...pageList.children].filter(node => typeof node.index == 'number'),
        current = pageList.current || {},
        center = Math.max(Math.floor(list.length / 2) - 1, 0),
        big = to > center + 1,
        node,
        dnum = big ? pages.length - to : to;
      if (center > dnum - 1) center = big ? list.length - dnum - 1 : to - 1;
      if ((dnum > 0 || Math.abs(to - current.index + 1) > list.length) && pages.length > list.length) {
        list.forEach((page, index) => {
          if (!node && index == center) node = page;
          page.innerHTML = to + index - center;
          page.index = to - 1 + index - center;
        });
      }
      return node;
    }
    function Filter() {
      return characters.filter(name => (Object.values(filter).length ? Object.values(filter).every(filter => filter(name, get.character(name))) : true));
    }
    function packClick() {
      if (this.classList.contains('active')) {
        delete filter.pack;
        this.classList.remove('active');
      } else {
        for (let node of packList.children) node.classList.remove('active');
        filter.pack = (name, info) => {
          return lib.characterPack[this.link][name];
        };
        this.classList.add('active');
      }
      charUpdate(Filter());
    }
    function groupClick() {
      if (this.classList.contains('active')) {
        delete filter['group_' + this.link];
        this.classList.remove('active');
      } else {
        filter['group_' + this.link] = (name, info) => {
          return (get.is.double(name, true) || get.bordergroup(info)).includes(this.link);
        };
        this.classList.add('active');
      }
      charUpdate(Filter());
    }
  }
  let config = {
    dqzw_boss_quick_add: {
      name: '快捷添加',
      init: lib.config.dqzw_boss_quick_add,
      intro: '开启后点击右侧武将头像即可添加至将池',
    },
    dqzw_boss_quick_remove: {
      name: '快捷删除',
      init: lib.config.dqzw_boss_quick_remove,
      intro: '开启后点击左侧将池内武将头像即可将之移出将池',
    },
    dqzw_boss_auto_save: {
      name: '自动保存',
      init: lib.config.dqzw_boss_auto_save,
      intro: '开启后进行添加删除操作时自动保存设置',
    },
    dqzw_boss_bossList_mode: {
      name: '模式选择',
      init: _status.dqzw_boss_mode || lib.config.dqzw_boss_bossList_mode || 'guihua',
      item: {
        guihua: '桂华洗霜',
        dengshen: '登神长阶',
      },
    },
    dqzw_boss_copy_banned: {
      name: '沿用模式禁将',
      init: lib.config.dqzw_boss_copy_banned || 'index:0',
      intro: '沿用任意模式的禁将设置',
      item() {
        let item = {
          none: '否',
        };
        let modeorder = (lib.config.modeorder || []).concat(Object.keys(lib.mode));
        for (let mode of modeorder) {
          if (_status.connectMode && !lib.mode[mode].connect) continue;
          else if (/brawl|connect/.test(mode)) continue;
          if (lib.config.all.mode.includes(mode)) item[mode] = lib.translate[mode];
        }
        return item;
      },
      onclick: item => {
        if (item == 'none') {
          game.saveConfig((_status.connectMode ? 'connect_' : '') + 'dqzw_boss_banned', []);
          return;
        }
        let name = (_status.connectMode ? 'connect_' : '') + item + '_banned',
          banned = lib.config[name] || [];
        if (banned.length) game.saveConfig((_status.connectMode ? 'connect_' : '') + 'dqzw_boss_banned', banned);
        else {
          popup('该模式没有禁将');
          return false;
        }
      },
    },
  };
  for (let name in config)
    createConfig(
      Object.assign(config[name], {
        save: config[name].save || name,
      })
    );
  function button(...args) {
    return ui.create.div('.menubutton.pointerdiv', ...args);
  }
  function createConfig(config, position) {
    let node = ui.create.div('.config.pointerdiv', config.name);
    if (!position) {
      let list = configList.buttons.slice(-1)[0];
      if (!list || list.children.length > 1) {
        list = ui.create.div('.buttons-container', configList, {
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        });
        configList.buttons.push(list);
      }
      list.style.minWidth = (configList.clientWidth / 100) * 14 + node.textContent.length * (7 / game.documentZoom) + 'px';
      ui.create
        .div('.menu-buttons.configpopped', list, {
          position: 'relative',
          whiteSpace: 'nowrap',
          height: (configList.clientHeight / 100) * 50 + 'px',
          marginTop: 0,
        })
        .appendChild(node);
    } else position.appendChild(node);
    node._link = {
      config: config,
    };
    if (config.item) {
      let items = config.item,
        init = config.init;
      if (typeof items == 'function') items = items.call(node, config);
      if (init.indexOf('index:') == 0) init = Object.keys(items)[init.slice(6) * 1];
      node.classList.add('switcher');
      node.listen(clickSwitcher);
      node._link.choosing = ui.create.div('', String(items[init]), node);
      node._link.menu = ui.create.div('.menu');
      node._link.items = items;
      for (let item in items) {
        let textMenu = ui.create.div('.pointerdiv', String(items[item]), node._link.menu, clickMenuItem);
        textMenu._link = item;
        if (config.textMenu) config.textMenu(textMenu, item, String(items[item]), config);
        lib.setScroll(node._link.menu);
      }
      node._link.menu._link = node;
      node._link.current = init;
      node.style.left = '1%';
    } else {
      node.classList.add('toggle');
      node.listen(clickToggle);
      ui.create.div(ui.create.div(node));
      if (config.init === true) node.classList.add('on');
    }
    let intro = config.intro;
    switch (typeof intro) {
      case 'string':
        intro = function (dialog) {
          dialog.add(config.intro);
        };
        break;
    }
    if (intro) {
      node._customintro = intro;
      lib.setIntro(node);
    }
    return node;
  }
  function openMenu(node, e, onclose) {
    if (node && e) {
      let left = Math.round(e.clientX / game.documentZoom),
        zoom = get.is.phoneLayout ? 1.3 : 1;
      popupContainer.appendChild(node);
      if (node.classList.contains('visual')) for (let childNode of node.children) if (childNode.update) childNode.update();
      let height = node.offsetHeight,
        idealtop = e.clientY / game.documentZoom;
      if (idealtop < 10) idealtop = 10;
      else if ((idealtop + height) * zoom + 10 > ui.window.offsetHeight) idealtop = (ui.window.offsetHeight - 10) / zoom - height;
      node.style.top = idealtop + 'px';
      node.style.left = left + 'px';
    }
    popupContainer.show();
    popupContainer.onclose = onclose;
  }
  function clickToggle() {
    if (this.classList.contains('disabled')) return;
    this.classList.toggle('on');
    let config = this._link.config;
    if (config.onclick) {
      if (config.onclick.call(this, this.classList.contains('on')) === false) this.classList.toggle('on');
    }
    if (config.save) game.saveConfig(config.save, this.classList.contains('on'));
  }
  function clickSwitcher() {
    if (this.classList.contains('disabled')) return;
    let node = this,
      link = this._link;
    this.classList.add('on');
    if (link.menu) {
      let config = link.config,
        items = config.item;
      if (typeof items == 'function') {
        items = items.call(node, config);
        let oitems = link.items,
          keys = Object.keys(oitems),
          values = Object.values(oitems);
        if (
          Object.keys(items).some((item, index) => {
            return keys[index] != item;
          }) ||
          Object.values(items).some((item, index) => {
            return values[index] != item;
          })
        ) {
          link.menu.innerHTML = '';
          for (let item in items) {
            let textMenu = ui.create.div('', String(items[item]), link.menu, clickMenuItem);
            textMenu._link = item;
            if (config.textMenu) config.textMenu(textMenu, item, String(items[item]), config);
            lib.setScroll(link.menu);
          }
          link.items = items;
        }
      }
      let pos1 = getRect(this.lastChild),
        pos2 = getRect(ui.window);
      if (link.menu.childElementCount > 10) {
        openMenu(
          link.menu,
          {
            clientX: pos1.x / 2 + pos1.width + 5 - pos2.left,
            clientY: Math.min((ui.window.offsetHeight - 400) / 2, pos1.top - pos2.top),
          },
          () => {
            link.menu.delete();
            node.classList.remove('on');
          }
        );
        lib.setScroll(link.menu);
      } else {
        openMenu(
          link.menu,
          {
            clientX: pos1.x / 2 + pos1.width + 5 - pos2.left,
            clientY: pos1.top - pos2.top,
          },
          () => {
            link.menu.delete();
            node.classList.remove('on');
          }
        );
      }
    }
  }
  function clickMenuItem() {
    let node = this.parentNode._link,
      link = node._link,
      config = link.config;
    node._link.current = this.link;
    let tmpName = node.lastChild.innerHTML,
      items = link.items || config.item;
    if (typeof items == 'function') items = items.call(node, config);
    node.lastChild.innerHTML = items[this._link];
    if (config.onclick) {
      let result = config.onclick.call(node, this._link, this);
      if (result === false || typeof result == 'string') node.lastChild.innerHTML = result === false ? tmpName : result;
    }
    if (config.save) game.saveConfig(config.save, this._link);
    if (config.update) config.update();
  }
  function createSystem(str, callback, style = {}) {
    let node = button(
      str,
      system,
      Object.assign(
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          height: '3vmax',
          margin: '0 .5%',
          padding: '0 .5%',
        },
        style
      )
    );
    if (callback) node.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', callback);
    setPress(node);
    return node;
  }
  function closeMenu() {
    container.style.transform = 'scale(0)';
    container.listenTransition(e => {
      container.hide();
    });
  }
  function setPress(node, end, start) {
    node.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
      if (_status.dragged) return;
      if (lib.config.button_press && !this.classList.contains('hidden')) {
        this.classList.add('pressdown');
        this.style.transform = 'scale(.95)';
      }
      if (start) start.apply(this, arguments);
    });
    node.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
      if (lib.config.button_press) {
        this.classList.remove('pressdown');
        this.style.transform = '';
      }
      // 手指滑动时直接结束
      if (_status.dragged) return;
      if (end) end.call(this, arguments);
    });
    return node;
  }
  function setScroll(node) {
    let delta, timeout;
    node.addEventListener('wheel', e => {
      if (e.target != node) return;
      e.preventDefault();
      delta = e.deltaY;
      scrollTo(node, node.scrollLeft - -delta);
    });
    lib.setScroll(node);
  }
  function scrollTo(node, tx, duration = 300, callback = game.kongfunc, top) {
    let x = node['scroll' + (top ? 'Top' : 'Left')],
      sx = (tx - x) / duration,
      st = Date.now();
    if (x == tx) return;
    (function _move() {
      let time = Math.min(Date.now() - st, duration);
      node['scroll' + (top ? 'Top' : 'Left')] += sx * time;
      if (time >= duration || _status.dragged) {
        node['scroll' + (top ? 'Top' : 'Left')] = tx;
        callback.call(node, tx, duration, top);
        return;
      }
      requestAnimationFrame(_move);
    })();
  }
  function moveStart() {
    if (content._move || _status.dragged) return;
    this._down = true;
    this._style = this._style || this.style.transform;
    setTimeout(
      function (that) {
        if (that._down && !_status.dragged) {
          let node = that.cloneNode(true),
            pos = getRect(that);
          node.style.position = 'absolute';
          node.classList.add('selected');
          node.style.left = pos.x + 'px';
          node.style.top = pos.y + 'px';
          container.appendChild(node);
          node.isClone = true;
          that.clone = node;
          that._moveStart = true;
          that.hide();
          content._move = node;
          (lib.config.touchscreen ? that.parentNode : container).addEventListener(lib.config.touchscreen ? 'touchmove' : 'mousemove', move);
          document.body.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function over(e) {
            if (that._moveStart) moveOver.call(that, e);
            this.removeEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', over);
          });
          _status.dragged = true;
        }
      },
      300,
      this
    );
  }
  function move(e) {
    if (!content._move) return;
    let that = content._move,
      [curX, curY] = [(lib.config.touchscreen ? e.touches[0] : e).clientX, (lib.config.touchscreen ? e.touches[0] : e).clientY],
      [preX, preY] = [that._preX || curX, that._preY || curY],
      cur = get(curX, curY),
      pre = get(preX, preY),
      dx = cur[0] - pre[0],
      dy = cur[1] - pre[1];
    if (!that._translate || !that._translate.length) that._translate = [dx, dy];
    else that._translate = [that._translate[0] + dx, that._translate[1] + dy];
    that.style.transform = (that._style || '') + ` translate(${that._translate[0]}px, ${that._translate[1]}px)`;
    that._preX = curX;
    that._preY = curY;
    function get(x, y) {
      (x = x / game.documentZoom - that.offsetWidth / 2), (y = y / game.documentZoom - that.offsetHeight / 2);
      if (x < content.offsetWidth / 2) x += 10;
      else x -= 10;
      if (typeof y != 'number' || isNaN(y) || y <= 5) y = 5;
      else if (y + that.offsetHeight + 10 > content.offsetHeight) y = content.offsetHeight - 10 - that.offsetHeight;
      return [x, y];
    }
    that._moved = true;
    return false;
  }
  function moveOver(e) {
    let that = this.clone || this;
    if (that._moved) {
      if (this.moveOver && this.moveOver.length) for (let func of this.moveOver) func.call(this, that, e);
    }
    if (this.reset !== false) {
      that.style.transition = '.3s';
      if (that._style) that.style.transform = that._style;
      else that.style.transform = '';
      that.listenTransition(e => {
        this.show();
        if (this.clone) this.clone.parentNode.removeChild(this.clone);
        delete this.clone;
      });
    } else {
      if (this.clone) this.clone.parentNode.removeChild(this.clone);
      delete this.clone;
    }
    [that._preX, that._preY] = [0, 0];
    this._down = false;
    that.classList.remove('selected');
    delete this._moveStart;
    delete that._style;
    delete that._moved;
    delete that._translate;
    delete content._move;
    delete _status.dragged;
    if (lib.config.touchscreen ? this.parentNode : container) (lib.config.touchscreen ? this.parentNode : container).removeEventListener(lib.config.touchscreen ? 'touchmove' : 'mousemove', move);
  }
  function getRect(node) {
    if (!node) return {};
    let rect = node.getBoundingClientRect(),
      w = margin('Left') + margin('Right'),
      h = margin('Top') + margin('Bottom'),
      x = rect.x / game.documentZoom + margin('Left') - margin('Right'),
      y = rect.y / game.documentZoom + margin('Top') - margin('Bottom'),
      width = rect.width / game.documentZoom + w,
      height = rect.height / game.documentZoom + h,
      clientW = node.clientWidth + w,
      clientH = node.clientHeight + h;
    function margin(type) {
      return getComputedStyle(node)['margin' + type].slice(0, -2) * 1;
    }
    return {
      x,
      y,
      width,
      height,
      left: x,
      top: y,
      clientW,
      clientH,
    };
  }
  function saveArchive(characters, callback) {
    let mode = lib.config.dqzw_boss_bossList_mode,
      name1 = `dqzw_boss_${mode}_character_list_scheme`,
      name2 = `dqzw_boss_${mode}_list_num_archive`,
      archive = lib.config[name2],
      list = lib.config[name1];
    if (!list)
      game.saveConfig(name1, {
        default: {
          name: '默认设置',
          list: Object.keys(lib.character),
        },
      });
    // electron不支持prompt有点难受(
    game.prompt('###请输入存档名###' + '存档' + get.cnNumber(archive || Object.keys(list).length, true), name => {
      if (name) {
        if (name == '默认设置') return;
        let sameName;
        for (let id in list) if (list[id].name == name) sameName = id;
        if (sameName) if (!confirm('有同名存档,是否覆盖？')) return;
        game.saveConfig(
          name1,
          Object.assign(list, {
            [sameName || name + '_' + Date.now()]: {
              name,
              list: (Array.isArray(characters) && characters) || container.leftList.characters,
            },
          })
        );
        if (!sameName) game.saveConfig(name2, (archive || Object.keys(list).length) + 1);
        if (callback) callback(name, sameNmae);
      }
    });
  }
  function exportArchive(list, callback) {
    game.prompt('###要保存到哪里？###' + 'extension/大权在握', path => {
      if (path) {
        game.readFile(
          path + `/dqzw_guihuaxishuang_${lib.config.dqzw_boss_bossList_mode}_archive.txt`,
          () => {
            if (confirm('存在同名文件,是否覆盖？')) create(path);
          },
          () => create(path)
        );
      }
    });
    function create(path) {
      let content = '',
        count = 0;
      list = (Array.isArray(list) && list) || container.leftList.characters;
      for (let name of list) {
        content += name + (name == list.slice(-1)[0] ? '' : ', ');
        count++;
        if (count > 2) {
          count = 0;
          content += '\n';
        }
      }
      game.writeFile(
        content,
        path,
        `dqzw_guihuaxishuang_${lib.config.dqzw_boss_bossList_mode}_archive.txt`,
        () => alert('导出成功'),
      );
    }
  }
  function popup(text, time = 1000, callback, position) {
    if (container.popup) {
      if (container.forced) return;
      clearTimeout(container.popup.timeout);
      container.popup.withdraw();
    }
    let width = (container.clientWidth / 100) * 22,
      node = ui.create.div('.menubg', text, position || container, {
        top: '40%',
        right: -width + 'px',
        transition: '.8s all',
        maxWidth: width + 'px',
        maxHeight: (container.clientHeight / 100) * 50 + 'px',
        overflow: 'auto',
        padding: '5px',
      });
    // 强制回流
    node.offsetHeight;
    node.style.right = '1%';
    node.withdraw = function (callback) {
      node.style.right = -width + 'px';
      node.listenTransition(() => {
        if (node) node.remove();
        if (container.popup == node) delete container.popup;
        if (callback) callback.call(this);
      });
    };
    container.popup = node;
    node.listenTransition(() => {
      if (time && !callback) node.timeout = setTimeout(node.withdraw, time);
      else if (callback) callback.call(node, time, text);
    });
    return node;
  }
  container.style.transition = '.4s';
  container.style.transform = 'scale(1)';
  ui.dqzw_boss_editor_menu = container;
}
