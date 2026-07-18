'use strict';
window.zyile_import = function (lib, game, ui, get, ai, _status, config) {
  window.zyile_extension_Menu.zyile_skin = {
    info: '皮肤',
    zyile_Skin_enable: {
      name: '开启',
      init: true,
    },
    zyile_skin_fluent: {
      name: '流畅模式',
      intro: '流畅模式:无论这个武将有没有皮肤都将会显示皮肤按钮,优化加载速度.\n非流畅模式:只有单个皮肤的武将不会显示皮肤按钮同时加载会卡.',
      init: true,
    },
    zyile_Skin_Audio: {
      name: '换肤换音',
      intro: '注:必须是打开此选项后用本扩展的换肤插件换肤.<br>配音地址为audio/skill<br>换皮肤后更改配音,素材及其命名需自己弄.<br>配音格式:audio/skill/武将id/皮肤id/技能语音<br>例如:audio/skill/baosanniang/翩若游凤/xinfu_wuniang1.mp3<h3 style="color:yellow">缝合怪一律不管!!!</h3>',
      init: true,
      onclick(item) {
        if (lib.zyile_common.equalsIgnoreCase(item, true)) {
          lib.zyile_layer.msg('素材及其命名需自己弄,且不管扩展的语音,若有bug请联系作者修复');
        }
      },
    },
    zyile_Skin_Audio_Re_prompt: {
      name: '换音提示',
      intro: '每次使用换肤按钮对其进行换肤后,显示该武将换肤所对应更改的语音',
      init: true,
    },
    zyile_Skin_Audio_Re_prompt_timeout: {
      name: '换音提示时长',
      init: '2e3',
      clear: true,
      nosave: true,
      onclick(item) {
        lib.zyile_layer.prompt(
          {
            fromType: 1,
            title: '提示时常(毫秒)',
            value: game.getExtensionConfig('概念武将', 'zyile_Skin_Audio_Re_prompt_timeout'),
            success(layer, i) {
              i.setAttribute('type', 'number');
              i.setAttribute('min', -1);
            },
          },
          (value) => {
            game.saveExtensionConfig('概念武将', 'zyile_Skin_Audio_Re_prompt_timeout', value);
          },
        );
      },
    },
    zyile_Skin_Phonetic_course: {
      name: '换肤换音教程',
      onclick() {
        lib.zyile_layer.iframe({
          url: 'https://tieba.baidu.com/p/7075496553',
          title: '换肤换语音教程',
          btn: ['放弃治疗', '沉了吧'],
          parentLayer: !1,
          success(layer) {
            layer.x.removeChild(layer.xa);
          },
          cancel(layer) {
            layer.close();
            lib.zyile_layer.msg('嘤嘤嘤', {
              protype: 4,
              icon: 2,
              time: 1e3,
            });
          },
        });
      },
      intro: '查看教程',
      clear: true,
    },
    zyile_Skin_notAudioPlay: {
      name: '未找到的语音',
      intro: '当换肤换音没有播放指定位置的语音时会被记录到这里,成功播放后会从里面移除.',
      onclick() {
        let innerHTML = [''];
        for (var i of _status.onAudioPlay) innerHTML.push('<br/>语音名称:' + i.name + '<br/>语音路径:' + i.src + '<br/>时间:' + i.time);
        lib.zyile_layer.openFull(innerHTML.join('<br>---------------------------'), {
          title: '未找到的语音',
          icon: 2,
        });
      },
      clear: true,
      clearAll: true,
    },
    zyile_skin_position_CZ: {
      name: '重置皮肤按钮位置',
      onclick() {
        game.saveExtensionConfig('概念武将', 'zyile_skin_position', [0, 0]);
        lib.zyile_layer.msg('重启即可');
      },
      clear: true,
    },
    zyile_Skin_src: {
      name: '加载路径',
      item: {
        addURL: `添加路径:.nodeinput/@click=function(e){e.stopPropagation();}@keydown=function(e){
					e.stopPropagation();
					if(e.keyCode===13){
						this.blur();
					};
				}@blur=function(e){
					e.stopPropagation();
					if(!this.value) return null;
					if(lib.config.zyile_Skin_src[this.value]||this.value=='skin'){
						this.value="";
						lib.zyile_layer.msg('<span style=color:red>该路径已存在</span>',{icon:2,item:1e3});
						this.focus();
						return undefined;
					}
					var node=this.parentNode.parentNode.parentNode;
					var ItemNode=node._link.menu;
					ui.create.zyile_node("li.zyile_Menu_option",this.value,ItemNode,function(e){
						e.stopPropagation();
						var node=this.parentNode._link;var config=node._link.config;
						node._link.current=this.link;
						var tmpName=node.lastChild.innerHTML;
						node.firstElementChild.querySelector('div').innerHTML=config.item[this._link];
						this.parentNode.parentNode.classList.toggle("zyile_Menu_ul_li");
						if(config.configName){
							game.saveConfig(config.configName,this._link);lib.config[config.configName]=this._link;
						}
						if(config.onclick){
							if(config.onclick.call(node,this._link,this)===false){
								node.firstElementChild.querySelector('div').innerHTML=tmpName;lib.config[config.configName]=this._link;game.saveConfig(config.configName,lib.config[config.configName]);
							}
						}
						if(config.update){
							config.update();
						}
					})._link=this.value;
					game.saveConfig('extension_概念武将_zyile_Skin_src',this.value||'skin');
					var cfg=lib.config.extension_概念武将_zyile_Skin_src;
					lib.config.zyile_Skin_src[this.value]=this.value;
					game.saveConfig('zyile_Skin_src',lib.config.zyile_Skin_src);
					node.firstElementChild.querySelector('div').innerHTML=this.value;
					window.zyile_extension_Menu.zyile_skin.zyile_Skin_src.item[this.value]=this.value;
					!lib.config[(cfg||'skin')]&&(game.saveConfig((cfg||'skin'),lib.config[(cfg||'skin')]={}));
					lib.zyile_layer.msg('<span style=color:red>添加成功</span>',{icon:1,item:1e3});
					this.value="";
				}`,
        delete_url: '删除路径.nodediv.zyile_Menu_ul_li_div',
        skin: 'skin',
        FC: 'FC',
      },
      addURLclick(e) {
        e.stopPropagation();
        this.firstElementChild.focus();
      },
      delete_urlclick(e) {
        e.stopPropagation();
        var node = this.parentNode._link;
        var config = node._link.config;
        node._link.current = this.link;
        if (!this.selectMenu) {
          this.classList.add('zyile_Menu_ul_li', 'zyile_Menu_config', 'zyile_Menu_config_ul');
          this.selectMenu = ui.create.zyile_node('ul.zyile_Menu_select', this);
          var delete_MenuItem = function () {
            if (this._link == lib.config.extension_概念武将_zyile_Skin_src) {
              node.firstElementChild.querySelector('div').innerHTML = 'skin';
              game.saveConfig('extension_概念武将_zyile_Skin_src', 'skin');
              lib.config.extension_概念武将_zyile_Skin_src = 'skin';
            }
            for (var i of Array.from(node._link.menu.querySelectorAll('li'))) {
              var text = i.innerText;
              if (text === this._link) {
                delete window.zyile_extension_Menu.zyile_skin.zyile_Skin_src.item[this._link];
                delete lib.config.zyile_Skin_src[this._link];
                game.saveConfig('zyile_Skin_src', lib.config.zyile_Skin_src);
                game.saveConfig('extension_概念武将_zyile_Skin_src', 'skin');
                i.remove();
                game.saveConfig(text);
              }
            }
          };
          for (var i in lib.config.zyile_Skin_src) {
            var textMenu = ui.create.zyile_node('li.zyile_Menu_option', config.item[i], this.selectMenu, delete_MenuItem);
            textMenu._link = i;
          }
        } else {
          this.classList.toggle('zyile_Menu_config');
          this.classList.toggle('zyile_Menu_config_ul');
          this.selectMenu.remove();
          delete this.selectMenu;
        }
        var tmpName = node.lastChild.innerHTML;
        if (config.configName) {
          game.saveConfig(config.configName, this._link);
          lib.config[config.configName] = this._link;
        }
        if (config.onclick) {
          if (config.onclick.call(node, this._link, this) === false) {
            node.firstElementChild.querySelector('div').innerHTML = tmpName;
            lib.config[config.configName] = this._link;
            game.saveConfig(config.configName, lib.config[config.configName]);
          }
        }
        if (config.update) {
          config.update();
        }
      },
      init: 'FC',
      intro: '由于适配框架,默认为FC,将加载skin文件夹更改,目的是为了不污染skin文件夹使用其他皮肤的效果',
    },
    zyile_Skin_Loading_time: {
      name: '加载时机',
      init: 'start',
      item: {
        all: '始终显示',
        start: '出现玩家',
      },
      intro: '<li>始终显示:所有武将都将会去加载皮肤按钮(游戏初始化时会卡)<li>出现玩家:当玩家初始时后会去加载皮肤按钮,最大节省资源<b><p>注:当为【<span style="color:mediumspringgreen">出现玩家</span>】时,<<span style="color:yellow">显示区域</span>>则强制为<<span style="color:yellow">玩家</span>>,按钮将会失效</b></p>',
    },
    zyile_Skin_area: {
      name: '显示区域',
      init: 'all',
      intro: '<li>换肤按钮显示的区域<li>玩家:例如 进入游戏后的武将</li><li>按钮:例如 标记、选将框里面的武将',
      item: {
        player: '玩家',
        button: '按钮',
        all: '全部',
      },
    },
    zyile_Skin_load: {
      name: '加载方式',
      item: {
        order: '顺序',
        retrieval: '检索',
      },
      intro: '<li>顺序:进行跟原有的加载一样是以1、2、3、4....' + '<li>检索:皮肤名可以不按照原有的规则,但是不会加载只有 英文、数字 的皮肤',
      init: 'retrieval',
    },
    zyile_Skin_Name_color: {
      name: '名称颜色',
      item: {
        red: '<span style="color:red">红色</span>',
        green: '<span style="color:green">绿色</span>',
        blue: '<span style="color:blue">蓝色</span>',
        purple: '<span style="color:purple">紫色</span>',
        black: '<span style="color:black">黑色</span>',
        yellow: '<span style="color:yellow">黄色</span>',
        violet: '<span style="color:violet">蓝紫色</span>',
        '#FAFAC8': '<span style="color: #FAFAC8">原颜色</span>',
        custom:
          '自定义:.nodeinput/~type=color~value=' +
          lib.config.extension_概念武将_zyile_Skin_Name_color +
          '@input=' +
          `
				function(){
					var node=this.parentNode.parentNode.parentNode;
					node.firstElementChild.querySelector('div').innerHTML="<span style='color:"+this.value+"'>"+this.value+"</span>";
					document.body.dataset.skin_color=this.value;
					if(!document.querySelector('#zyile_data-skin-color')){
						ui.create.zyile_node('style.#zyile_data-skin-color','body[data-skin_color="'+this.value+'"] .zyile_Skin_info{color:'+this.value+';text-shadow: '+this.value+' 0 0 2px,'+this.value+' 0 0 5px,'+this.value+' 0 0 10px,'+this.value+' 0 0 10px,'+this.value+' 0 0 20px,'+this.value+' 0 0 20px,black 0 0 1px;}',document.head);
					}else{
						document.querySelector('#zyile_data-skin-color').innerHTML='body[data-skin_color="'+this.value+'"] .zyile_Skin_info{color:'+this.value+';text-shadow: '+this.value+' 0 0 2px,'+this.value+' 0 0 5px,'+this.value+' 0 0 10px,'+this.value+' 0 0 10px,'+this.value+' 0 0 20px,'+this.value+' 0 0 20px,black 0 0 1px;}'
					};
					game.saveConfig('extension_概念武将_zyile_Skin_Name_color',this.value);
					window.zyile_extension_Menu.zyile_skin.zyile_Skin_Name_color.item[this.value]=this.value;
				}`,
      },
      customclick(e) {
        e.stopPropagation();
      },
      onclick(item) {
        document.body.dataset.skin_color = item;
      },
      init: '#FAFAC8',
      intro: '皮肤的称号和等级的颜色',
    },
    zyile_Skin_XS: {
      name: '显示名称等级',
      item: {
        zyile_Skin_name: '名称',
        zyile_Skin_GradeOf: '等级',
        zyile_Skin_all: '全部',
        zyile_Skin_none: '不显示',
      },
      onclick(item) {
        document.body.dataset.skin = item;
      },
      init: 'zyile_Skin_name',
    },
    zyile_Skin_XS_button: {
      name: '修改显示',
      intro: '修改按钮显示隐藏',
      item: {
        zyile_Skin_name_button: '名称',
        zyile_Skin_GradeOf_button: '等级',
        zyile_Skin_all_button: '全部',
        zyile_Skin_none_button: '不显示',
      },
      onclick(item) {
        document.body.dataset.skin_button = item;
      },
      init: 'zyile_Skin_all_button',
    },
    zyile_Skin_XG: {
      name: '修改方式',
      intro: '皮肤名称或等级的修改方式:<li>点击:点击即可更改武将皮肤称号<li>按钮:左下角将会出现[修改]的按钮,点击弹出修改框',
      item: {
        zyile_Skin_button: '按钮',
        zyile_Skin_click: '点击',
        zyile_Skin_readonly: '不可修改',
      },
      onclick(item) {
        document.body.dataset.skin_modify = item;
      },
      init: 'zyile_Skin_button',
    },
    zyile_skin_mode: {
      name: '皮肤模式',
      item: {
        fluent: '单按钮',
        onfluent: '多按钮',
      },
      intro: '单按钮,只显示一个皮肤按钮,但会加载所有的皮肤,每个武将的皮肤为一行,左右滑动.多按钮,每个按钮只会加载自己的皮肤,包有原来的排放,自上而下.',
      init: 'fluent',
    },
    zyile_Skin_placePopped: {
      item: {
        center: '居中',
        Location: '定位',
      },
      name: '换肤框位置',
      init: 'center',
      intro: '<li>居中:每次弹出的换肤框位置在屏幕中间.<li>定位:根据当前武将的位置在它的上面或者下面出现.',
    },
    bounce: {
      item: {
        updown: '上下',
        about: '左右',
        false: '关闭',
      },
      init: 'about',
      name: '移动动画',
      intro: '换肤框出来动画,【居中】时则会失效.',
    },
    zyile_Skin_suspend: {
      name: '换肤暂停',
      intro: '当出现换肤框时暂停游戏给其足够多的内存来加载资源',
      init: true,
    },
    zyile_File_ReName: {
      name: '本地更改',
      intro: '当你修改皮肤名称时本地对应的文件名称也会进行对应的修改',
      init: false,
    },
    zyile_Skin_Node_guanbi: {
      name: '辅助关闭',
      init: true,
      intro: '当换肤框出现后不用点击关闭按钮点击换肤框外面即可关闭.',
    },
    zyile_skin_Gradient: {
      name: '渐变效果',
      intro: '每次换肤时改变为从上到下渐渐变化效果.(推荐使用1.9版本的安装包)',
      init: true,
    },
    zyile_skin_Gradient_Preloading_images: {
      name: '预加载渐变图片',
      intro: '预先加载渐变所使用的图片.',
      init: true,
    },
    /*zyile_connect_skin:{
      name:"联机换肤",
      intro:"联机模式下也可以使用皮肤效果(若你是房主无论别人有没有此功能也可以看见,若不是除非房主也安装.).",
      init:false
    },*/
    zyile_Skin_name: {
      name: '添加名称(不建议)',
      intro: '给武将添加部分的皮肤名称和皮肤等级,只配对原有的skin文件,且只有标准武将的皮肤有',
      onclick() {
        var node = this;
        if (node.updates) return lib.zyile_layer.alert('请等待同步', { icon: 4 });
        if (node.updates === false) return undefined;
        node.updates = false;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
          if (xmlHttp && xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
              var text = xmlHttp.responseText;
              eval(text);
              for (let i in window.SKIN_INFO_GradeOf) {
                lib.config.SKIN_INFO_GradeOf[i] = window.SKIN_INFO_GradeOf[i];
              }
              for (let i in window.SKIN_INFO) {
                lib.config.SKIN_INFO[i] = window.SKIN_INFO[i];
              }
              delete window.SKIN_INFO_GradeOf;
              delete window.SKIN_INFO;
              game.saveConfig('SKIN_INFO', lib.config.SKIN_INFO);
              game.saveConfig('SKIN_INFO_GradeOf', lib.config.SKIN_INFO_GradeOf);
              lib.zyile_layer.alert('添加完毕', { icon: 1 });
              delete node.updates;
            } else {
              window.alert('连接失败');
              delete node.updates;
            }
          }
        };
        xmlHttp.open('GET', 'https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/update.js', true);
        xmlHttp.send(null);
      },
      clear: true,
    },
  };
  window.zyile_extension_Menu.zyile_skin_js = {
    info: '皮肤解锁模式',
    zyile_skin_js_enable: {
      name: '开启',
      init: false,
    },
    skin_update_error: {
      name: '错误信息',
      intro: '当使用货币购买皮肤后运行的刷新函数有问题时进行提示(game.log,game.pring,<br/>lib.zyile_layer.alert,console.log进行打印错误)',
      init: false,
    },
    zyile_skin_prefix: {
      name: '武将前缀',
      intro: '包括武将<span style="color:red">id</span>前缀的所有皮肤则会显示解锁.<li>例如:概念武将的武将id前缀为zyile_<li>若想所有武将皮肤都可以进行解锁则添加‘<span style="color:yellow">all</span>’即可.',
      init: ['zyile_', 'dongman_'],
      nosave: true,
      item: {
        select_prefix: '查看前缀',
        add_prefix: '添加前缀',
        delete_prefix: '删除前缀',
      },
      add_prefixclick(event) {
        event.stopPropagation();
        let div = ui.create.div();
        div.innerHTML = "武将前缀:<input type='text' class='layui-layer-input'>货币:<input type='text' class='layui-layer-input'>所需数量:<input type='number' class='layui-layer-input'>";
        lib.zyile_layer.alert(div, {
          title: '添加前缀',
          resize: true,
          yes(layer) {
            let content = layer.content;
            let inputs = [].slice.call(content.querySelectorAll('input'));
            let prefix = inputs[0].value,
              currency = inputs[1].value,
              quantity = inputs[2].value,
              flag = true;
            if (lib.zyile_common.isEmpty(prefix)) (lib.zyile_layer.tips('武将前缀名不能为空!', inputs[0]), (flag = false));
            if (lib.zyile_common.isEmpty(currency)) (lib.zyile_layer.tips('所需货币不能为空!', inputs[1]), (flag = false));
            if (!lib.zyile_common.numValid(quantity)) (lib.zyile_layer.tips('所需数量只能为数字!', inputs[2]), (flag = false));
            if (!flag) return;
            layer.close();
            lib.config.extension_概念武将_zyile_skin_prefix[prefix] = {
              currency: currency,
              quantity: quantity,
            };
            game.saveConfigValue('extension_概念武将_zyile_skin_prefix');
            lib.zyile_layer.msg('添加成功', { icon: 1, protype: 2 });
            /*lib.config.extension_概念武将_zyile_skin_prefix.add(val.toString());
            game.saveExtensionConfig('概念武将','zyile_skin_prefix',game.getExtensionConfig("概念武将","zyile_skin_prefix"));
            lib.zyile_layer.msg("添加成功",{icon:1});*/
          },
        });
      },
      select_prefixclick(event) {
        event.stopPropagation();
        let options = Object.keys(game.getExtensionConfig('概念武将', 'zyile_skin_prefix'));
        if (!options.length) return lib.zyile_layer.alert('暂无前缀', { icon: 2 });
        let div = ui.create.div('', '前缀:');
        let config = lib.config.extension_概念武将_zyile_skin_prefix[options[0]];
        ui.create.selectlist(options, options[0], div, function () {
          config = lib.config.extension_概念武将_zyile_skin_prefix[this.value];
          currency.value = config.currency;
          quantity.value = config.quantity;
        }).className = 'layui-layer-select layui-layer-input';
        div.appendChild(document.createTextNode('货币:'));
        let currency = ui.create.zyile_node('input.layui-layer-input', div);
        currency.readOnly = true;
        currency.value = config.currency;
        div.appendChild(document.createTextNode('数量:'));
        let quantity = ui.create.zyile_node('input.layui-layer-input', div);
        quantity.readOnly = true;
        quantity.value = config.quantity;
        lib.zyile_layer.alert(div, {
          title: '解锁前缀',
        });
      },
      delete_prefixclick(event) {
        event.stopPropagation();
        let options = Object.keys(game.getExtensionConfig('概念武将', 'zyile_skin_prefix'));
        if (!options.length) return lib.zyile_layer.alert('暂无前缀', { icon: 2 });
        var select = ui.create.selectlist(options);
        select.className = 'layui-layer-select layui-layer-input';
        lib.zyile_layer.alert(select, {
          title: '删除前缀',
          yes(layer, index) {
            let value = layer.querySelector('select').value;
            delete lib.config.extension_概念武将_zyile_skin_prefix[value];
            game.saveExtensionConfig('概念武将', 'zyile_skin_prefix', lib.config.extension_概念武将_zyile_skin_prefix);
            lib.zyile_layer.msg("删除前缀:<span style='color:red'>" + value + '</span>', {
              time: 1e3,
              icon: 1,
            });
            layer.close();
          },
        });
      },
      clear: true,
    },
    zyile_skin_js_info: {
      name: '介绍',
      onclick() {
        lib.zyile_layer.openFull([''].concat(['命名规则:必须以原武将id后面加_pifu1.jpg后缀必须是.jpg', '例:dongman_Kaguya(武将id|武将图id),第一个皮肤则为dongman_Kaguya_pifu1 以此类推放到自己的扩展目录里面\n参考【概念武将】扩展下武将的皮肤命名', '若想全部皮肤均有解锁条件则<span style="color:red">添加前缀<span style="color:blue">all</span></span>', '货币数量:购买时所需要的货币数量', '更新函数:购买完皮肤后所执行的函数,用于更新游戏内显示的货币;配置时会先运行一次,来检查是否右问题.', '所需货币:所需要的货币代码,比如富甲天下的货币代码是coin']).join('<li>'), {
          title: '皮肤解锁模式介绍',
        });
      },
      clear: true,
    },
  };
  _status.onAudioPlay = [];
  //---------------------------------皮肤字体颜色---------------------------------//
  let value_Name_color = lib.config.extension_概念武将_zyile_Skin_Name_color;
  if (!window.zyile_extension_Menu.zyile_skin.zyile_Skin_Name_color.item[value_Name_color]) {
    window.zyile_extension_Menu.zyile_skin.zyile_Skin_Name_color.item[value_Name_color] = "<span style='color:" + value_Name_color + "'>" + value_Name_color + '</span>';
  }
  if (!document.querySelector('#zyile_data-skin-color')) {
    ui.create.zyile_node('style.#zyile_data-skin-color', 'body[data-skin_color="' + value_Name_color + '"]>#window .zyile_Skin_info{color:' + value_Name_color + ';text-shadow: ' + value_Name_color + ' 0 0 2px,' + value_Name_color + ' 0 0 5px,' + value_Name_color + ' 0 0 10px,' + value_Name_color + ' 0 0 10px,' + value_Name_color + ' 0 0 20px,' + value_Name_color + ' 0 0 20px,black 0 0 1px;}', document.head);
  } else {
    document.querySelector('#zyile_data-skin-color').innerHTML = 'body[data-skin_color="' + value_Name_color + '"]>#window .zyile_Skin_info{color:' + value_Name_color + ';text-shadow: ' + value_Name_color + ' 0 0 2px,' + value_Name_color + ' 0 0 5px,' + value_Name_color + ' 0 0 10px,' + value_Name_color + ' 0 0 10px,' + value_Name_color + ' 0 0 20px,' + value_Name_color + ' 0 0 20px,black 0 0 1px;}';
  }
  if (!window.zyile_extension_Menu.zyile_skin.zyile_Skin_Name_color.item[value_Name_color]) {
    window.zyile_extension_Menu.zyile_skin.zyile_Skin_Name_color.item[value_Name_color] = "<span style='color:" + value_Name_color + "'>" + value_Name_color + '</span>';
  }
  //---------------------------------   隔离   ---------------------------------//
  for (let i in window.zyile_extension_Menu) {
    for (let j in window.zyile_extension_Menu[i]) {
      let info = window.zyile_extension_Menu[i];
      if (lib.config['extension_概念武将_' + j] === undefined && info[j] && Object.hasOwn(info[j], 'init')) {
        lib.config['extension_概念武将_' + j] = info[j].init;
        game.saveConfig('extension_概念武将_' + j, lib.config['extension_概念武将_' + j]);
      }
    }
  }
  document.body.dataset.skin = lib.config.extension_概念武将_zyile_Skin_XS;
  document.body.dataset.skin_button = lib.config.extension_概念武将_zyile_Skin_XS_button;
  document.body.dataset.skin_modify = lib.config.extension_概念武将_zyile_Skin_XG;
  document.body.dataset.skin_color = value_Name_color;
  !lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'] && game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', (lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'] = {}));
  game.hasDirectory = function (url, callback, onerror) {
    callback = callback || function () { };
    onerror = onerror || function () { };
    if (lib.node && lib.node.fs) {
      if (lib.node.fs.existsSync(__dirname + '/' + url)) {
        callback();
      } else {
        onerror();
      }
      return;
    }
    let name, success;
    if (url.indexOf('.') !== -1) {
      let last = url.lastIndexOf('/');
      let index = url.indexOf('/');
      name = url.slice(last + 1);
      url = url.slice(0, last);
      success = callback;
      callback = function (dirEntry) {
        dirEntry.getFile(name, {}, success, onerror);
      };
    }
    window.resolveLocalFileSystemURL(
      lib.assetURL,
      function (entry) {
        entry.getDirectory(url, {}, callback, onerror);
      },
      onerror,
    );
  };
  /**
  var url='F:/资源/皮肤(包含语音和动态)/caocao/6',numss=6;
  game.list(url,function(fol,files){
    for(var i of files.slice(0)){
      if(!(/\.mp3$|\.mp3$/i.test(i))) files.remove(i);
    };
    for(var i of files){
      var newName=i.slice(0,i.lastIndexOf('.')),
      num=newName.slice(newName.length-1);
      if(isNaN(num)) num='';
      else newName=newName.slice(0,newName.length-1);
      lib.node.fs.rename(url+'/'+i,url+'/'+newName+'_'+2+num+'.mp3',function(entry){lib.zyile_layer.msg(ui.create.zyile_node('span',"修改成功:<span style='color:red'>"+newName+"</span>"),{icon:1});return true;});
    };
  });
  */
  game.fileReName = function (Path, name, newName, successCallback, onerrorCallback) {
    if (!name) return undefined;
    newName = newName || name;
    successCallback =
      successCallback ||
      function (entry) {
        lib.zyile_layer.msg(ui.create.zyile_node('span', "修改成功:<span style='color:red'>" + newName + '</span>'), { icon: 1 });
        return true;
      };
    onerrorCallback =
      onerrorCallback ||
      function (err) {
        var msg = 'An error occured: ';
        try {
          switch (err.code * 1) {
            case FileError.NOT_FOUND_ERR:
              msg += 'File or directory not found\n翻译:文件或目录未找到';
              break;
            case FileError.NOT_READABLE_ERR:
              msg += 'File or directory not readable\n翻译:文件或目录不可读';
              break;
            case FileError.PATH_EXISTS_ERR:
              msg += 'File or directory already exists\n翻译:文件或目录已存在';
              break;
            case FileError.TYPE_MISMATCH_ERR:
              msg += 'Invalid filetype\n翻译:无效的文件类型';
              break;
            default:
              msg += 'Unknown Error\n翻译:未知错误';
              break;
          }
        } catch (e) { }
        if (msg.length === 18) return undefined;
        lib.zyile_layer.alert('重命名失败:' + err.code + ':' + msg);
        lib.zyile_layer.msg(ui.create.zyile_node('span', '重命名失败,原因:' + msg + '错误码:' + err.code), { icon: 2, title: '重命名', time: 3e3 });
      };
    game.hasDirectory(
      Path + '/' + name,
      function () {
        if (lib.node && lib.node.fs) {
          lib.node.fs.rename(__dirname + '/' + Path + '/' + name, __dirname + '/' + Path + '/' + newName, successCallback);
          return;
        }
        window.resolveLocalFileSystemURL(Path, function (entry) {
          if (name.indexOf('.') === -1) {
            entry.getDirectory(name, {}, function (entry2) {
              entry2.moveTo(entry, newName, successCallback, onerrorCallback);
            });
          } else {
            entry.getFile(name, {}, function (entry2) {
              entry2.moveTo(entry, newName, successCallback, onerrorCallback);
            });
          }
        });
      },
      function () {
        game.print('目录不存在:' + Path + '/' + name);
        lib.zyile_layer.msg('目录不存在'.fontcolor('red'), { title: '更改文件名称' });
      },
    );
  };
  _status.skillaudiox = [];
  let playAudio = game.playAudio;
  game.playAudio = function () {
    let Audio = playAudio.apply(this, arguments);
    if (!Audio) return false;
    if (lib.config.extension_概念武将_zyile_Skin_Audio) {
      let src = Audio.src,
        num = '',
        name = src.slice(0),
        by_name = src.slice(0),
        AudioName = '';
      if (src.lastIndexOf('.') !== -1) {
        name = src.slice(src.lastIndexOf('/') + 1, src.lastIndexOf('.')); //获取技能名称
        num = name.slice(name.length - 1);
        if (!isNaN(num)) {
          name = name.slice(0, name.length - 1);
        } else num = '';
      }
      for (let i in lib.config.zyile_Skin_Audio) {
        //i就是武将名称
        const Audio_Skin = lib.config.zyile_Skin_Audio[i];
        for (let j in Audio_Skin) {
          //j是语音id
          if (j === name) {
            //如果保存的技能名称和上面的一样,证明是换肤换音保存的.
            AudioName = Audio_Skin[j];
            Audio.src = 'audio/skill/' + i + '/' + AudioName + '/' + name + num + '.mp3';
            break;
          }
        }
      }
      if (!lib.config.repeat_audio && _status.skillaudiox.includes(Audio.src)) {
        Audio.remove();
        return false;
      }
      let str = Audio.src;
      _status.skillaudiox.add(str);
      setTimeout(() => _status.skillaudiox.remove(str), 1e3);
      if (lib.zyile_common.isNotEmpty(AudioName)) {
        let onerror = Audio.onerror,
          onerrorNum = 0;
        ('use strict');
        Audio.onerror = function () {
          if (onerrorNum > 5) return this.remove();
          onerrorNum++;
          let URL = window.decodeURI(this.src);
          for (let i of _status.onAudioPlay.slice(0)) {
            if (i.src === URL && i.name === name) {
              _status.onAudioPlay.remove(i);
            }
          }
          _status.onAudioPlay.unshift({
            name: name,
            src: URL,
            time: new Date().toLocaleTimeString(),
          });
          if (this.change_url) {
            this.src = by_name;
            delete this.change_url;
            return undefined;
          }
          if (this._changed) {
            if (this.src === src.replace('.mp3', '.mp3')) return onerror.apply(this, arguments);
            this.src = src;
            delete this._changed;
            this.change_url = true;
          } else {
            this.src = this.src.replace('.mp3', '.mp3');
            this._changed = true;
          }
        };
        Audio.addEventListener(
          'canplay',
          function (e) {
            e.stopPropagation();
            if (this.src.indexOf('extension/') !== -1) return undefined;
            let URL = window.decodeURI(this.src);
            for (var i of _status.onAudioPlay.slice(0)) {
              if ([i.src.replace('.mp3', '.mp3'), i.src.replace('.mp3', '.mp3'), i.src].includes(URL)) {
                _status.onAudioPlay.remove(i);
                break;
              }
            }
          },
          true,
        );
      }
    }
    return Audio;
  };
  game.playSkillAudio = function (name, index) {
    if (_status.video && arguments[1] !== 'video') return;
    if (!lib.config.repeat_audio && _status.skillaudio.includes(name)) return;
    game.addVideo('playSkillAudio', null, name);
    if (name.indexOf('|') < name.lastIndexOf('|')) {
      name = name.slice(name.lastIndexOf('|') + 1);
    }
    var namex = name.slice(0);
    if (lib.config.extension_概念武将_zyile_Skin_Audio) {
      var src = name,
        num = '';
      if (src.lastIndexOf('/') !== -1) {
        src = src.slice(src.lastIndexOf('/') + 1); //判断是否有路径	app/resources/extension/概念武将/zyile_xuwu1.mp3
      }
      num = src.slice(src.length - 1); //获取最后一个字母是否为数字好做语音播放指定路径的修改
      //console.log("修改前:",src,num);
      if (!isNaN(num)) {
        src = src.slice(0, src.length - 1); //获取数字播放的该技能的第几个语音.
      } else num = '';
      for (var i in lib.config.zyile_Skin_Audio) {
        //i就是武将名称
        var Audio_Skin = lib.config.zyile_Skin_Audio[i];
        for (var j in Audio_Skin) {
          //循环已保存的语音
          if (j === src) {
            //如果技能是这个路径的话
            name = i + '/' + Audio_Skin[j] + '/' + src + num;
            break;
          }
        }
      }
    }
    _status.skillaudio.add(name);
    setTimeout(function () {
      _status.skillaudio.remove(name);
    }, 1000);
    var str = 'audio/skill/',
      by_name,
      onerrorNum = 0;
    var audio = document.createElement('audio');
    audio.autoplay = true;
    audio.volume = lib.config.volumn_audio / 8;
    audio.src = str + name + '.mp3';
    by_name = audio.src.slice(0);
    audio.addEventListener('ended', function () {
      this.remove();
    });
    if (typeof index != 'number') {
      index = Math.ceil(Math.random() * 2);
    }
    audio._changed = 1;
    audio.addEventListener(
      'canplay',
      function (e) {
        e.stopPropagation();
        if (this.src.indexOf('extension/') !== -1) return undefined;
        let URL = window.decodeURI(this.src);
        for (var i of _status.onAudioPlay.slice(0)) {
          if (i.src.replace('.mp3', '').indexOf(URL) !== -1) {
            _status.onAudioPlay.remove(i);
          }
          if (i.src.replace('.mp3', '').indexOf(URL) !== -1) {
            _status.onAudioPlay.remove(i);
          }
        }
      },
      true,
    );
    audio.onerror = function () {
      onerrorNum++;
      if (onerrorNum > 9) return this.remove();
      if (this.src.indexOf('extension/') === -1) {
        let URL = window.decodeURI(this.src);
        for (let i of _status.onAudioPlay.slice(0)) {
          if (i.src === URL && i.name === name) {
            _status.onAudioPlay.remove(i);
          }
        }
        _status.onAudioPlay.unshift({
          name: name,
          src: URL,
          time: new Date().toLocaleTimeString(),
        });
      }
      switch (this._changed) {
        case 1: {
          audio.src = str + name + '.mp3';
          this._changed = 2;
          break;
        }
        case 2: {
          audio.src = str + name + index + '.mp3';
          this._changed = 3;
          break;
        }
        case 3: {
          audio.src = str + name + index + '.mp3';
          this._changed = 4;
          break;
        }
        case 4: {
          if (audio.src.indexOf(str + namex + index + '.mp3') !== -1) return this.remove();
          name = namex;
          audio.src = str + name + '.mp3';
          this._changed = 1;
          break;
        }
        default: {
          this.remove();
        }
      }
    };
    ui.window.appendChild(audio);
  };
  // 皮肤解锁初始化配置
  if (!get.is.object(game.getExtensionConfig('概念武将', 'zyile_skin_prefix'))) game.saveExtensionConfig('概念武将', 'zyile_skin_prefix', {});
  //换肤换语音
  if (!lib.config.zyile_Skin_Audio) game.saveConfig('zyile_Skin_Audio', (lib.config.zyile_Skin_Audio = {}));
  //保存皮肤等级
  if (!lib.config.SKIN_INFO_GradeOf) game.saveConfig('SKIN_INFO_GradeOf', (lib.config.SKIN_INFO_GradeOf = {}));
  //保存皮肤介绍
  if (!lib.config.SKIN_INFO) {
    game.saveConfig('SKIN_INFO', {});
  }
  //保存扩展上换肤的路径
  if (!lib.config.zyile_Skin) lib.config.zyile_Skin = {};
  //自定义加载路径
  !lib.config.zyile_Skin_src && game.saveConfig('zyile_Skin_src', (lib.config.zyile_Skin_src = {}));
  for (let i in lib.config.zyile_Skin_src) {
    window.zyile_extension_Menu.zyile_skin.zyile_Skin_src.item[i] = lib.config.zyile_Skin_src[i];
  }
  if (!game.getExtensionConfig('概念武将', 'zyile_Skin_enable')) return undefined;
  var ImageRe = /\.jpg$|\.webp$|\.png$|\.jpeg$|\.gif$/i; //是否图片的正则表达式;
  HTMLDivElement.prototype.setBackground = function (name, type, ext, subfolder) {
    if (!name) return;
    var src;
    if (ext === 'noskin') {
      ext = '.jpg';
    }
    ext = ext || '.jpg';
    subfolder = subfolder || 'default';
    if (lib.config.zyile_Skin[name]) {
      for (var i in lib.config.zyile_Skin) {
        var character = lib.character[i];
        if (!character || !character[4]) continue;
        for (var j = 0; j < character[4].length; j++) {
          if (character[4][j].indexOf('ext') === -1) continue;
          try {
            character[4][j] = lib.config.zyile_Skin[i].toString().replace(/extension/g, 'ext:');
          } catch (e) { }
        }
      }
    }
    if (type) {
      var dbimage = null,
        extimage = null,
        modeimage = null;
      var nameinfo;
      var gzbool = false;
      var mode = get.mode();
      if (type === 'character') {
        if (lib.characterPack['mode_' + mode] && lib.characterPack['mode_' + mode][name]) {
          if (mode === 'guozhan') {
            if (name.indexOf('gz_shibing') === 0) {
              name = name.slice(3, 11);
            } else {
              if (lib.config.mode_config.guozhan.guozhanSkin && lib.character[name] && lib.character[name][4].includes('gzskin')) gzbool = true;
              name = name.slice(3);
            }
          } else {
            modeimage = mode;
          }
        } else if (lib.character[name]) {
          nameinfo = lib.character[name];
        } else if (name.indexOf('::') !== -1) {
          name = name.split('::');
          modeimage = name[0];
          name = name[1];
        }
      }
      if (!modeimage && nameinfo && nameinfo[4]) {
        for (var i = 0; i < nameinfo[4].length; i++) {
          if (nameinfo[4][i].indexOf('ext:') === 0) {
            extimage = nameinfo[4][i];
            break;
          } else if (nameinfo[4][i].indexOf('db:') === 0) {
            dbimage = nameinfo[4][i];
            break;
          } else if (nameinfo[4][i].indexOf('mode:') === 0) {
            modeimage = nameinfo[4][i].slice(5);
            break;
          } else if (nameinfo[4][i].indexOf('character:') === 0) {
            name = nameinfo[4][i].slice(10);
            break;
          }
        }
      }
      if (extimage) {
        src = extimage.replace(/ext:/g, 'extension/');
      } else if (dbimage) {
        this.setBackgroundDB(dbimage.slice(3));
        return this;
      } else if (modeimage) {
        src = 'image/mode/' + modeimage + '/character/' + name + ext;
      } else if (type === 'character' && lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'] && lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][name] && arguments[2] !== 'noskin') {
        var cfg = lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'];
        if (cfg[name] && cfg[name].toString().lastIndexOf('.') !== -1) ext = '';
        src = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name + '/' + cfg[name] + ext;
      } else {
        if (type === 'character') {
          src = 'image/character/' + (gzbool ? 'gz_' : '') + name + ext;
        } else {
          src = 'image/' + type + '/' + subfolder + '/' + name + ext;
        }
      }
    } else {
      src = 'image/' + name + ext;
    }
    this.setBackgroundImage(src);
    this.style.backgroundSize = 'cover';
    return this;
  };
  var uninit = lib.element.player.uninit;
  lib.element.player.uninit = function () {
    this.name = undefined; //delete 不会触发setter
    this.name1 = undefined; //delete 不会触发setter
    if (this.name2) this.name2 = Math.random().toString(16).slice(2);
    if (this._uninits) {
      for (var i = 0; i < this._uninits.length; i++) {
        this._uninits[i](this);
      }
    }
    uninit.apply(this, arguments);
  };
  if (game.getExtensionConfig('概念武将', 'zyile_skin_mode') === 'fluent') {
    var Skin = function (player) {
      var List = [player.name, player.name1, player.name2, player.link],
        xF218O = false;
      for (var _0xAhOW of List) {
        if (typeof _0xAhOW === 'string' && lib.character[_0xAhOW]) {
          xF218O = true;
          break;
        }
      }
      if (!xF218O) {
        if (player.zyile_Skin_Node) player.zyile_Skin_Node.remove();
        return undefined;
      }
      var num = 1,
        skin_num = 0,
        change_extimage = false,
        stop = false,
        gz = false,
        re = false;
      var loadImage = function (_0xOqU8) {
        if (stop) return undefined;
        var img = new Image(),
          Fragment = document.createDocumentFragment();
        Fragment.appendChild(img);
        img.onload = function () {
          num++;
          skin_num++;
          if (skin_num > 0) {
            if (player.zyile_Skin_Node) player.zyile_Skin_Node.remove();
            stop = true;
            player.zyile_Skin_Node = ui.create.div(player, '.zyile_Skin_Node', (event) => {
              event.stopPropagation();
              event.preventDefault();
            });
            var div = ui.create.div('.zyile_skin', player.zyile_Skin_Node);
            get.is.mobileMe(player) &&
              div.css({
                left: '90px',
              });
            player.zyile_Skin_Node.setAttribute('style', 'transition-property:opacity,background,box-shadow;display:block !important;z-index:99999;width: 100%;    max-width: 120px;height: 100%;pointer-events: none;');
            div.addEventListener(
              'endDang',
              function (e) {
                e.stopPropagation();
                window.zyile_charactercard(player, false);
              },
              false,
            );
            var position = game.getExtensionConfig('概念武将', 'zyile_skin_position');
            if (position) {
              div.css({
                transform: `translate(${position[0]}px,${position[1]}px)`,
              });
              div._translate = position;
            }
            div.addEventListener('moveStop', function () {
              game.saveExtensionConfig('概念武将', 'zyile_skin_position', this._translate);
            });
            window.zyile_dragZoom && window.zyile_dragZoom(div, player);
          } else {
            if (player.zyile_Skin_Node) player.zyile_Skin_Node.remove();
            List.length > 0 && loadImage(List.shift());
          }
        };
        img.onerror = function () {
          loadImage(_0xOqU8);
        };
        if (typeof _0xOqU8 == 'string' && lib.character[_0xOqU8]) {
          var ext = '.jpg',
            dbimage = null,
            extimage = null,
            modeimage = null,
            nameskin = _0xOqU8,
            name = _0xOqU8;
          var nameinfo;
          var gzbool = false;
          var mode = get.mode();
          if (lib.characterPack['mode_' + mode] && lib.characterPack['mode_' + mode][name]) {
            if (mode === 'guozhan') {
              if (name.indexOf('gz_shibing') === 0) {
                name = name.slice(3, 11);
              } else {
                if (lib.config.mode_config.guozhan.guozhanSkin && lib.character[name] && lib.character[name][4].includes('gzskin')) gzbool = true;
                name = name.slice(3);
              }
            } else {
              modeimage = mode;
            }
          } else if (lib.character[name]) {
            nameinfo = lib.character[name];
          } else if (name.indexOf('::') !== -1) {
            name = name.split('::');
            modeimage = name[0];
            name = name[1];
          }
          if (!modeimage && nameinfo && nameinfo[4]) {
            for (var i = 0; i < nameinfo[4].length; i++) {
              if (nameinfo[4][i].indexOf('ext:') === 0) {
                extimage = nameinfo[4][i];
                break;
              } else if (nameinfo[4][i].indexOf('mode:') === 0) {
                modeimage = nameinfo[4][i].slice(5);
                break;
              } else if (nameinfo[4][i].indexOf('character:') === 0) {
                name = nameinfo[4][i].slice(10);
                break;
              }
            }
          }
          if (extimage && !change_extimage) {
            if (extimage.indexOf('../') !== -1) extimage = extimage.slice(0, extimage.indexOf('../'));
            var src = extimage.replace(/ext:/g, 'extension/');
            var str = src.substring(0, src.lastIndexOf('/'));
            img.onerror = function () {
              num = 1;
              change_extimage = true;
              loadImage(_0xOqU8);
            };
            if (lib.config.extension_概念武将_zyile_Skin_load === 'order') {
              img.src = str + '/' + name + '_pifu' + num + ext;
            } else {
              game.hasDirectory(
                str,
                function () {
                  game.getFileList(str, function (folders, files) {
                    let loadNum = 0;
                    for (let i of files) {
                      if (i.indexOf(name) !== 0) continue;
                      if (name.length + 4 >= i.length) continue;
                      const names = i.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g'));
                      if (names != null && ImageRe.test(names.join(''))) {
                        img.onload();
                        loadNum++;
                        if (loadNum > 1) break;
                      }
                    }
                  });
                },
                function () {
                  delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][name];
                  game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                },
              );
              img.onerror();
            }
          } else {
            img.onerror = function () {
              if (skin_num <= 0 && player.zyile_Skin_Node && player.zyile_Skin_Node.remove) player.zyile_Skin_Node.remove();
              List.length > 0 && loadImage(List.shift());
            };
            if (lib.config.extension_概念武将_zyile_Skin_load === 'order') {
              img.src = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name + '/' + num + ext;
            } else {
              var url = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name;
              game.hasDirectory(
                url,
                function () {
                  game.getFileList('image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name, function (folders, files) {
                    var loadNum = 0;
                    for (var i of files) {
                      var names = i.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g'));
                      if (names != null && ImageRe.test(names.join('')) && names.length > 1) {
                        img.onload();
                        loadNum++;
                        if (loadNum > 1) break;
                      }
                    }
                  });
                },
                function () {
                  delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][name];
                  game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                },
              );
              img.onerror();
            }
          }
        } else {
          List.length > 0 && loadImage(List.shift());
        }
      };
      if (lib.config.extension_概念武将_zyile_skin_fluent) {
        if (player.classList && (player.classList.contains('player') || player.classList.contains('button'))) {
          if (player.zyile_Skin_Node) player.zyile_Skin_Node.remove();
          player.zyile_Skin_Node = ui.create.div(player, (event) => {
            event.stopPropagation();
            event.preventDefault();
          });
          var div = ui.create.div('.zyile_skin', player.zyile_Skin_Node);
          get.is.mobileMe(player) &&
            div.css({
              left: '90px',
            });
          player.zyile_Skin_Node.setAttribute('style', 'transition-property:opacity,background,box-shadow;display:block !important;z-index:999999999;width: 100%;height: 100%;pointer-events: none;');
          div.addEventListener('endDang', function (e) {
            e.stopPropagation();
            window.zyile_charactercard(player, false);
          });
          var position = game.getExtensionConfig('概念武将', 'zyile_skin_position');
          if (position) {
            div.css({
              transform: `translate(${position[0]}px,${position[1]}px)`,
            });
            div._translate = position;
          }
          div.addEventListener('moveStop', function () {
            game.saveExtensionConfig('概念武将', 'zyile_skin_position', this._translate);
          });
          window.zyile_dragZoom && window.zyile_dragZoom(div, player);
        }
      } else {
        List.length > 0 && loadImage(List.shift());
      }
    };
    if (config.zyile_Skin_Loading_time == 'start') {
      /**
       * 使用原本事件来进行操作
       */
      lib.element.player.inits.push((player) => Skin(player));
      if (!Array.isArray(lib.element.player._uninits)) {
        lib.element.player._uninits = [(player) => Skin(player)];
      } else {
        lib.element.player._uninits.push((player) => Skin(player));
      }
    } else {
      /**
       * 使用数据劫持来进行操作
       */
      Reflect.defineProperty(HTMLDivElement.prototype, 'name1', {
        get() {
          return this._zyile_NAME1;
        },
        set(value) {
          this._zyile_NAME1 = value;
          if (!this.classList || this.classList.contains('card')) return void 0;
          if (lib.config.extension_概念武将_zyile_Skin_area == 'all') {
            if (this.classList.contains('player') || this.classList.contains('button')) {
              Skin(this);
            }
          } else if (this.classList.contains(lib.config.extension_概念武将_zyile_Skin_area)) {
            Skin(this);
          }
        },
      });
      Reflect.defineProperty(HTMLDivElement.prototype, 'name2', {
        get() {
          return this._zyile_NAME2;
        },
        set(value) {
          this._zyile_NAME2 = value;
          if (!this.classList || this.classList.contains('card')) return void 0;
          if (lib.config.extension_概念武将_zyile_Skin_area == 'all') {
            if (this.classList.contains('player') || this.classList.contains('button')) {
              Skin(this);
            }
          } else if (this.classList.contains(lib.config.extension_概念武将_zyile_Skin_area)) {
            Skin(this);
          }
        },
      });
      Reflect.defineProperty(HTMLDivElement.prototype, 'link', {
        get() {
          return this._zyile_LINK;
        },
        set(value) {
          this._zyile_LINK = value;
          if (lib.config.extension_概念武将_zyile_Skin_area == 'all') {
            if (this.classList.contains('player') || this.classList.contains('button')) {
              Skin(this);
            }
          } else if (this.classList.contains(lib.config.extension_概念武将_zyile_Skin_area)) {
            Skin(this);
          }
        },
      });
    }
    window.zyile_charactercard = function (player, resume) {
      if (player.zyile_charactercard) {
        if (window.getComputedStyle(player.zyile_charactercard, null).display == 'none') {
          player.zyile_charactercard.style.display = 'block';
          player.zyile_charactercard.style.animation = 'dialog_start2 .3s';
          if (lib.config.extension_概念武将_zyile_Skin_suspend) game.pause2();
        }
        window.getComputedStyle(player.zyile_charactercard.cloNode, null).display == 'none' ? (player.zyile_charactercard.cloNode.style.display = '') : void 0;
        if (!lib.config.extension_概念武将_zyile_Skin_Node_guanbi) player.zyile_charactercard.cloNode.style.display = 'none';
        return undefined;
      }
      var playerName1 = false,
        playerName2 = false,
        playerLink = false;
      if (player.classList.contains('unseen') && game.me !== player) playerName1 = true;
      if (player.classList.contains('unseen2') && game.me !== player) playerName2 = true;
      var changeskin = function (player, name, avatar) {
        if (lib.character[name] && lib.character[name][4] && lib.character[name][4].includes('minskins')) return undefined;
        if (lib.config.zyile_Skin[name] && lib.config.zyile_Skin[name].toString().indexOf('ext:') !== -1) {
          avatar.style.backgroundImage = "url('" + lib.config.zyile_Skin[name].toString().replace(/ext:/g, 'extension/') + "')";
          game.broadcastAll(function (avatar) {
            avatar.style.backgroundImage = "url('" + lib.config.zyile_Skin[name].toString().replace(/ext:/g, 'extension/') + "')";
          }, avatar);
        }
        let yxy = ui.create.div('.zyile_character_skin_yxy_div');
        ui.create.div('.zyile_character_skin_yxy', yxy);
        let nameskin = name;
        let nameskin2 = name;
        let createButtons = function (num, src, _src, modular) {
          let name = num;
          if (typeof num == 'string') {
            name = num;
            if (num.lastIndexOf('(') !== -1) {
              name = num.slice(0, num.lastIndexOf('('));
            } else if (num.lastIndexOf('.') !== -1) {
              name = num.slice(0, num.lastIndexOf('.'));
            }
            name = name.replace(nameskin2, '').replace(/^_pifu[0-9]/g, '');
            if (name.match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]', 'g')) === null) {
              name = get.translation(nameskin2);
            }
          }
          if (typeof name === 'number') name = get.translation(nameskin2);
          if (!node.content[modular])
            (node.content[modular] = ui.create.div(node.content, '.zyile_skin_Button_modular')) &&
              (node.content[modular].onmousewheel = function (evt) {
                let node = this;
                let num = 6;
                let speed = 16;
                clearInterval(node.interval);
                evt.preventDefault();
                if (evt.detail > 0 || evt.wheelDelta < 0) {
                  node.interval = setInterval(function () {
                    if (num-- && Math.abs(node.scrollLeft + node.clientWidth - node.scrollWidth) > 0) {
                      node.scrollLeft += speed;
                    } else {
                      clearInterval(node.interval);
                    }
                  }, 16);
                } else {
                  node.interval = setInterval(function () {
                    if (num-- && node.scrollLeft > 0) {
                      node.scrollLeft -= speed;
                    } else {
                      clearInterval(node.interval);
                    }
                  }, 16);
                }
              });
          var FragmentSysImg = document.createDocumentFragment(),
            SyscImage = ui.create.zyile_node('img');
          SyscImage.src = src;
          FragmentSysImg.appendChild(SyscImage);
          let button = ui.create.div('.zyile_character_skin_Button', node.content[modular], function (e) {
            !lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'] && game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', (lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'] = {}));
            if (button._link) {
              //不是扩展皮肤
              if (window.decodeURI(_src).toString().indexOf('extension') === -1) {
                lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][nameskin] = this._link;
                game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
              }
              //这是是否开启了解锁	_Unlock
              if (Object.hasOwn(this, '_Unlock') && lib.config[[nameskin] + '_pifu_' + [this._link] + '_' + isExtensionSkin + '_goumai'] !== true) {
                if (lib.config[this._Unlock.currency] - this._Unlock.quantity < 0) {
                  lib.zyile_layer.msg('货币不足!', {
                    icon: 2,
                    protype: 4,
                    time: 5e2,
                  });
                  return;
                } else {
                  lib.config[lib.config[this._Unlock.currency]] = lib.config[lib.config[this._Unlock.currency]] - this._Unlock.quantity;
                  game.saveConfigValue(this._Unlock.currency);
                  try {
                    lib.config.extension_概念武将_zyile_coin_update && eval('"use strict";{' + lib.config.extension_概念武将_zyile_coin_update.toString() + '}');
                  } catch (e) {
                    if (config.skin_update_error) {
                      game.log('extension_概念武将_zyile_coin_update:' + e);
                      game.print('extension_概念武将_zyile_coin_update:' + e);
                      lib.zyile_layer.alert(e.toString(), { title: '更新货币时出错!', icon: 2 });
                      console.warn(e);
                    }
                  }
                  this._page.remove();
                  lib.config[[nameskin] + '_pifu_' + [this._link] + '_' + this.isExtensionSkin + '_goumai'] = true;
                  game.saveConfig([nameskin] + '_pifu_' + [this._link] + '_' + this.isExtensionSkin + '_goumai', true);
                  lib.zyile_layer.msg('解锁成功', { icon: 1, item: 5e2 });
                }
              }
            }
            //开始武将换肤
            if (avatar) {
              game.broadcastAll(
                function (avatar, that) {
                  //渐变换肤(好像还是会卡...？？？还是尽量别用了
                  if (lib.config.extension_概念武将_zyile_skin_Gradient) {
                    var JianBian = ui.create.div('.jbtp', avatar),
                      JianBian_bg = ui.create.div('.jbtp', avatar),
                      huanfu = [
                        function () {
                          if (fu_num === 10) {
                            clearInterval(IntervalId);
                            JianBian.delete();
                            JianBian_bg.delete();
                            avatar.style.backgroundImage = that.style.backgroundImage;
                            return;
                          }
                          JianBian.setBackgroundImage('extension/概念武将/redskin/' + fu_num + '-1.png');
                          fu_num < 8 && JianBian_bg.setBackgroundImage('extension/概念武将/redskin/' + fu_num + '.png');
                          fu_num++;
                        },
                        function () {
                          if (fu_num === 10) {
                            clearInterval(IntervalId);
                            JianBian.delete();
                            JianBian_bg.delete();
                            avatar.style.backgroundImage = that.style.backgroundImage;
                            return;
                          }
                          JianBian.setBackgroundImage('extension/概念武将/redskin/' + fu_num + '-1.png');
                          fu_num < 8 && JianBian_bg.setBackgroundImage('extension/概念武将/purpleskin/' + fu_num + '.png');
                          fu_num++;
                        },
                        function () {
                          if (fu_num === 10) {
                            clearInterval(IntervalId);
                            JianBian.delete();
                            JianBian_bg.delete();
                            avatar.style.backgroundImage = that.style.backgroundImage;
                            return;
                          }
                          JianBian.setBackgroundImage('extension/概念武将/yellowskin/' + fu_num + '-1.png');
                          JianBian_bg.setBackgroundImage('extension/概念武将/yellowskin/' + fu_num + '.png');
                          fu_num++;
                        },
                      ],
                      fu_num = 0,
                      IntervalId = setInterval(huanfu.randomGet(), 35);
                  } else {
                    avatar.style.backgroundImage = that.style.backgroundImage;
                  }
                },
                avatar,
                this,
              );
            }
            //保存扩展上换肤的路径
            if (Array.isArray(lib.character[nameskin][4]) && lib.character[nameskin][4].length > 0) {
              for (let i = 0; i < lib.character[nameskin][4].length; i++) {
                if (lib.character[nameskin][4][i].indexOf('ext') !== -1) {
                  if (window.decodeURI(this._src).indexOf('extension') !== -1) {
                    let Ufem8 = 'ext:' + this._src.slice(this._src.lastIndexOf('extension/') + 10);
                    if (!lib.config.zyile_Skin) lib.config.zyile_Skin = {};
                    lib.config.zyile_Skin[nameskin] = window.decodeURI(Ufem8);
                    game.saveConfig('zyile_Skin', lib.config.zyile_Skin);
                    lib.character[nameskin][4][i] = window.decodeURI(Ufem8);
                    break;
                  } else {
                    lib.character[nameskin][4][i] = lib.character[nameskin][4][i] + '../../../../' + _src;
                    lib.config.zyile_Skin[nameskin] = lib.character[nameskin][4][i];
                    game.saveConfig('zyile_Skin', lib.config.zyile_Skin);
                  }
                } else {
                  lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][nameskin] = this._link;
                  lib.character[nameskin][4][i] = window.decodeURI(lib.character[nameskin][4][i].replace(/ext:/g, 'extension/'));
                  game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                }
              }
            } else {
              lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][nameskin] = this._link;
              this._link && this._link.toString && (lib.character[nameskin][4] = [this._link.toString()]);
              game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
            }
            //如果是原画的话直接清空不保存.
            if (!this._link) {
              delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][nameskin];
              game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
            }
            this.appendChild(yxy);
            yxy.finished = true;
            //这里是换肤换语音代码    很完善了(bushi
            if (lib.config.extension_概念武将_zyile_Skin_Audio) {
              let skills = lib.character[nameskin][3].slice(0),
                str = this._link ? `武将:${get.translation(nameskin)}<br>` : `删除【${get.translation(nameskin).fontcolor('red')}】换肤换音配置<br>`;
              let getSkillAudio = (info, audioname) => {
                if (info.audioname2 && info.audioname2[player.name]) {
                  audioname = info.audioname2[player.name];
                  info = lib.skill[audioname];
                }
                let audioinfo = info.audio;
                if (audioinfo === false || !audioinfo) return false;
                if (typeof audioinfo == 'string' && lib.skill[audioinfo]) {
                  audioname = audioinfo;
                  audioinfo = lib.skill[audioname].audio;
                }
                if (typeof audioinfo === 'string') {
                  if (audioinfo.indexOf('ext:') === 0) {
                    audioinfo = audioinfo.split(':');
                    return [audioname, `../../../extension/${audioinfo[1]}/${this._link}`];
                  }
                } else if (Array.isArray(audioinfo)) {
                  audioname = audioinfo[0];
                  audioinfo = null;
                }
                //检查同一技能不同武将触发不同语音
                if (Array.isArray(info.audioname) && player) {
                  if (info.audioname.includes(player.name)) {
                    audioname += '_' + player.name;
                  } else if (info.audioname.includes(player.name1)) {
                    audioname += '_' + player.name1;
                  } else if (info.audioname.includes(player.name2)) {
                    audioname += '_' + player.name2;
                  } else if (info.audioname.includes(player.link)) {
                    audioname += '_' + player.link;
                  }
                }
                return audioname;
              };
              let addGroup = (info) => {
                let _skills = [].concat(info.group);
                skills.addArray(_skills);
                _skills.map((value) => {
                  let info2 = lib.skill[value];
                  if (!info2 || !info2.group) return false;
                  addGroup(info2);
                });
              };
              skills.slice(0).filter((value) => {
                let info = lib.skill[value];
                if (!info) return skills.remove(value);
                if (!info.derivation) info.derivation = [];
                if (info.group) addGroup(info);
                skills.addArray([].concat(info.derivation));
              });
              for (const i of skills) {
                let info = get.info(i);
                if (!info || info.audio === false) continue;
                let audioname = getSkillAudio(info, i);
                if (audioname === false) continue;
                let flag = false;
                if (Array.isArray(audioname)) flag = true;
                //原画就删除保存的换肤换语音配置
                if (!this._link) {
                  delete lib.config.zyile_Skin_Audio[nameskin];
                  game.saveConfig('zyile_Skin_Audio', lib.config.zyile_Skin_Audio);
                  if (game.getExtensionConfig('概念武将', 'zyile_Skin_Audio_Re_prompt')) {
                    str += `${get.translation(i).fontcolor('red')}<br>`;
                  }
                  continue;
                }
                if (!get.is.object(lib.config.zyile_Skin_Audio[nameskin])) {
                  lib.config.zyile_Skin_Audio[nameskin] = {};
                }
                if (flag) {
                  lib.config.zyile_Skin_Audio[nameskin][audioname[0]] = audioname[1];
                  lib.config.zyile_Skin_Audio[nameskin][nameskin] = audioname[1];
                } else {
                  lib.config.zyile_Skin_Audio[nameskin][audioname] = this._link;
                  lib.config.zyile_Skin_Audio[nameskin][nameskin] = this._link; //保存死亡时配对的名称
                }
                game.saveConfig('zyile_Skin_Audio', lib.config.zyile_Skin_Audio);
                str += `${get.translation(i).fontcolor('red')}:`;
                if (flag) {
                  str += `${audioname[1].slice(9)}/${audioname[0]}<br>`;
                } else {
                  str += `audio/skill/${nameskin}/${this._link}/${audioname}<br>`;
                }
              }
              if (game.getExtensionConfig('概念武将', 'zyile_Skin_Audio_Re_prompt')) {
                lib.zyile_layer.msg(str, {
                  title: '语音地址',
                  time: game.getExtensionConfig('概念武将', 'zyile_Skin_Audio_Re_prompt_timeout'),
                  cancelclick: true,
                  icon: this._link ? 1 : -1,
                });
              }
            }
          });
          button._src = src;
          button._URL = _src;
          button._LinkName = name;
          button.style.backgroundImage = 'url("' + src + '")';
          let isExtensionSkin = '';
          if (window.decodeURI(_src).toString().indexOf('extension') !== -1) isExtensionSkin = '_extension';
          if (num === -1) {
            lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] = lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] || '经典';
            lib.config.SKIN_INFO_GradeOf[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] = lib.config.SKIN_INFO_GradeOf[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] || '原画';
          }
          let skin_info = lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] || name;
          let SKIN_INFO_GradeOf = lib.config.SKIN_INFO_GradeOf[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'];
          let Skin_info_div = ui.create.div('.zyile_Skin_div', button, (event) => {
            event.stopPropagation();
          });
          button._info = Skin_info_div;
          let GradeOf_Input_click = function (event) {
            event.stopPropagation();
            if (GradeOf_Input._input) return undefined;
            GradeOf_Input.innerHTML = '';
            var str = lib.config.SKIN_INFO_GradeOf[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'];
            var input = document.createElement('input');
            input.classList.add('zyile_input');
            input.setAttribute('type', 'text');
            input.setAttribute('value', str || '');
            input.setAttribute('style', 'z-index:6');
            var moveEnd = function (obj) {
              var len = obj.value.length;
              if (document.selection) {
                var sel = obj.createTextRange();
                sel.moveStart('character', len);
                sel.collapse();
                sel.select();
              } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
                obj.selectionStart = obj.selectionEnd = len;
              }
            };
            var ture = function () {
              if (input.removed) return false;
              var value = input.value;
              var LCinfo = lib.config.SKIN_INFO_GradeOf[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'];
              if (value == '' || ['undefined', 'null'].includes(value)) {
                if (LCinfo) value = LCinfo;
                else value = undefined;
              }
              var info = [nameskin] + '_pifu' + [num] + isExtensionSkin + '_info';
              lib.config.SKIN_INFO_GradeOf[info] = value;
              game.saveConfig('SKIN_INFO', lib.config.SKIN_INFO);
              game.saveConfig('SKIN_INFO_GradeOf', lib.config.SKIN_INFO_GradeOf);
              LCinfo = lib.config.SKIN_INFO_GradeOf[info];
              input.removed = true;
              GradeOf_Input._input = undefined;
              GradeOf_Input.innerHTML = LCinfo || '添加等级';
              GradeOf_Input_button.classList.toggle('zyile_hidden');
            };
            input.addEventListener('blur', ture);
            input.addEventListener('keydown', (event) => {
              if (event.keyCode == 13) ture();
              event.stopPropagation();
            });
            GradeOf_Input.appendChild(input);
            input.focus();
            moveEnd(input);
            GradeOf_Input._input = input;
          };
          let GradeOf_Input = ui.create.div('.zyile_Skin_GradeOf', SKIN_INFO_GradeOf || '添加等级', button._info, GradeOf_Input_click);
          let GradeOf_Input_button = ui.create.div(button._info, '.zyile_Skin_GradeOf_input_button', '修改', function (event) {
            !this.classList.contains('zyile_hidden') && GradeOf_Input_click(event);
            this.classList.add('zyile_hidden');
          });
          let info_Input_click = function (event) {
            event.stopPropagation();
            if (info_Input._input) return undefined;
            info_Input.innerHTML = '';
            var str = lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] || button._LinkName;
            var input = document.createElement('input');
            input.classList.add('zyile_input');
            input.setAttribute('type', 'text');
            input.setAttribute('value', str || '');
            input.setAttribute('style', 'z-index:6');
            var moveEnd = function (obj) {
              var len = obj.value.length;
              if (document.selection) {
                var sel = obj.createTextRange();
                sel.moveStart('character', len);
                sel.collapse();
                sel.select();
              } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
                obj.selectionStart = obj.selectionEnd = len;
              }
            };
            let ture = function () {
              if (input.removed) return false;
              let src = button._URL.slice(0, button._URL.lastIndexOf('/'));
              let name = button._URL.slice(button._URL.lastIndexOf('/') + 1);
              let ext = button._URL.slice(button._URL.lastIndexOf('.'));
              let value = input.value;
              let LCinfo = lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'];
              if (lib.zyile_common.isNotEmpty(value)) {
                if (LCinfo) value = LCinfo;
                else value = undefined || button._LinkName;
              }
              let names = value && value.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g')).join('');
              if (lib.config.extension_概念武将_zyile_File_ReName && names != null) {
                button._URL = button._URL.replace(name, value + ext);
                game.fileReName(src, name, value + ext);
              }
              let info = [nameskin] + '_pifu' + [num] + isExtensionSkin + '_info';
              lib.config.SKIN_INFO[info] = value;
              game.saveConfig('SKIN_INFO', lib.config.SKIN_INFO);
              game.saveConfig('SKIN_INFO_GradeOf', lib.config.SKIN_INFO_GradeOf);
              LCinfo = lib.config.SKIN_INFO[info];
              input.removed = true;
              info_Input._input = undefined;
              info_Input.innerHTML = LCinfo || '添加皮肤名称';
              button._LinkName = LCinfo || button._LinkName;
              info_Input_button.classList.remove('zyile_hidden');
            };
            input.addEventListener('blur', ture);
            input.addEventListener('keydown', (event) => {
              if (event.keyCode == 13) ture();
              event.stopPropagation();
            });
            info_Input.appendChild(input);
            input.focus();
            moveEnd(input);
            info_Input._input = input;
            info_Input_button.classList.add('zyile_hidden');
          };
          let info_Input_button = ui.create.div(button._info, '.zyile_Skin_info_input_button', '修改', function (event) {
            lib.zyile_layer.prompt(
              {
                title: '更改皮肤名称',
                value: lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] || button._LinkName,
                maxlength: 10,
                success(layer) {
                  var i = layer.querySelector('.layui-layer-input'),
                    textShadow = lib.config.extension_概念武将_zyile_Skin_Name_color;
                  i.style.textShadow = textShadow + ' 0 0 2px, ' + textShadow + ' 0 0 2px, ' + textShadow + ' 0 0 2px, ' + textShadow + ' 0 0 2px, ' + textShadow + ' 0 0 2px, ' + textShadow + ' 0 0 2px, #fff 0 0 1px';
                  i.style.color = '#fff';
                },
              },
              function (val, index, input) {
                lib.zyile_layer.confirm("<li>确认修改为【<span style='color:red'>" + val + '</span>】?</li>', function (layer, index) {
                  let names = val.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g')).join('');
                  if (lib.config.extension_概念武将_zyile_File_ReName && names != null) {
                    let src = button._URL.slice(0, button._URL.lastIndexOf('/'));
                    let name = button._URL.slice(button._URL.lastIndexOf('/') + 1);
                    let ext = button._URL.slice(button._URL.lastIndexOf('.'));
                    button._URL = button._URL.replace(name, val + ext);
                    game.fileReName(src, name, val + (button._URL.indexOf('extension') !== -1 ? nameskin2 : '' + ext));
                  }
                  let info = [nameskin] + '_pifu' + [num] + isExtensionSkin + '_info';
                  lib.config.SKIN_INFO[info] = val;
                  game.saveConfig('SKIN_INFO', lib.config.SKIN_INFO);
                  game.saveConfig('SKIN_INFO_GradeOf', lib.config.SKIN_INFO_GradeOf);
                  let LCinfo = lib.config.SKIN_INFO[info];
                  info_Input.innerHTML = LCinfo || '添加皮肤名称';
                  button._LinkName = LCinfo || button._LinkName;
                  lib.zyile_layer.msg('修改完毕', {
                    icon: 1,
                    time: 1e3,
                  });
                });
              },
            );
          });
          let info_Input = ui.create.div('.zyile_Skin_info', button._info, skin_info || '添加皮肤名称', info_Input_click),
            js_name = _src.slice(_src.lastIndexOf('/') + 1, _src.lastIndexOf('.'));
          if (js_name !== nameskin2) {
            //判断是不是原图
            button._link = js_name;
            if (game.getExtensionConfig('概念武将', 'zyile_skin_js_enable')) {
              let currency,
                zyile_skin_prefix = game.getExtensionConfig('概念武将', 'zyile_skin_prefix');
              if (Object.hasOwn(zyile_skin_prefix, 'all')) {
                currency = 'all';
              } else {
                for (let j in zyile_skin_prefix) {
                  //循环获取武将名称判断添加了解锁模式没有
                  if (nameskin.indexOf(j) === 0) {
                    currency = j;
                    break;
                  }
                }
              }
              if (currency && lib.config[[nameskin] + '_pifu_' + [js_name] + '_' + isExtensionSkin + '_goumai'] !== true) {
                let wjsdiv = ui.create.div(button, '.zyile_character_skin_WJSX');
                let div = ui.create.div(wjsdiv, '.zyile_character_skin_WJS');
                ui.create.div(div, '.zyile_charater_skin_wjs_font', '尚未拥有');
                ui.create.div(div, '.zyile_charater_skin_wjs');
                button._page = wjsdiv;
                button._Unlock = {
                  currency: zyile_skin_prefix[currency].currency,
                  quantity: zyile_skin_prefix[currency].quantity,
                };
                button.isExtensionSkin = isExtensionSkin;
              }
            }
          }
          if (lib.character[nameskin][4]) {
            for (let _LFc28 of lib.character[nameskin][4]) {
              if (yxy.finished) break;
              if (_LFc28.replace(/ext:/g, 'extension/').indexOf(_src) !== -1) {
                button.appendChild(yxy);
              }
            }
          }
          var vyS5Z = 'url("' + window.decodeURI(_src).toString() + '")';
          var $vyS5Z = vyS5Z.substring(5, vyS5Z.length - 2);
          var gPHT1 = window.decodeURI(avatar.style.backgroundImage).toString();
          if (gPHT1 === vyS5Z || gPHT1.indexOf($vyS5Z) !== -1) button.appendChild(yxy);
          button.style.cursor = 'pointer';
          return button;
        };
        var num = 1,
          change_extimage = false,
          change_character = false,
          change_modeimage = false,
          gz_skin = false,
          re_skin = false;
        var loadImage = function () {
          var img = new Image(),
            Fragment = document.createDocumentFragment();
          Fragment.appendChild(img);
          img.onload = function () {
            createButtons(num, img.src, img._src, nameskin2);
            num++;
            loadImage();
          };
          img.onerror = function () {
            if (typeof player.name == 'string' && lib.character[player.name] && !playerName1) {
              playerName1 = true;
              changeskin(player, player.name, player.node.avatar, true);
            } else if (typeof player.name1 == 'string' && lib.character[player.name1] && !playerName1) {
              playerName1 = true;
              changeskin(player, player.name1, player.node.avatar, true);
            } else if (typeof player.name2 == 'string' && lib.character[player.name2] && !playerName2) {
              playerName2 = true;
              changeskin(player, player.name2, player.node.avatar2);
            } else if (typeof player.link == 'string' && lib.character[player.link] && !playerLink) {
              playerLink = true;
              changeskin(player, player.link, player.node.character);
            }
          };
          var ext = '.jpg',
            dbimage = null,
            extimage = null,
            modeimage = null;
          var nameinfo;
          var gzbool = false;
          var mode = get.mode();
          if (lib.characterPack['mode_' + mode] && lib.characterPack['mode_' + mode][name]) {
            if (mode === 'guozhan') {
              if (name.indexOf('gz_shibing') === 0) {
                name = name.slice(3, 11);
              } else {
                if (lib.config.mode_config.guozhan.guozhanSkin && lib.character[name] && lib.character[name][4].includes('gzskin')) gzbool = true;
                name = name.slice(3);
              }
            } else {
              modeimage = mode;
            }
          } else if (lib.character[name]) {
            nameinfo = lib.character[name];
          } else if (name.indexOf('::') !== -1) {
            name = name.split('::');
            modeimage = name[0];
            name = name[1];
          }
          if (!modeimage && nameinfo && nameinfo[4]) {
            for (var i = 0; i < nameinfo[4].length; i++) {
              if (nameinfo[4][i].indexOf('ext') === 0) {
                extimage = nameinfo[4][i];
                break;
              } else if (nameinfo[4][i].indexOf('mode:') === 0) {
                modeimage = nameinfo[4][i].slice(5);
                break;
              } else if (nameinfo[4][i].indexOf('character:') === 0) {
                name = nameinfo[4][i].slice(10);
                break;
              } else if (nameinfo[4][i].indexOf('extension') === 0) {
                extimage = nameinfo[4][i];
                break;
              }
            }
          }
          /******************************************************************************/
          if (!change_character) {
            img.src = 'image/character/' + (gzbool ? 'gz_' : '') + name + ext;
            img._src = 'image/character/' + (gzbool ? 'gz_' : '') + name + ext;
            change_character = true;
            img.onload = function () {
              createButtons(-1, img.src, img._src, nameskin2);
              loadImage();
            };
            img.onerror = function () {
              loadImage();
            };
          } else if (modeimage && !change_modeimage) {
            img.src = 'image/mode/' + modeimage + '/character/' + name + ext;
            img._src = 'image/mode/' + modeimage + '/character/' + name + ext;
            change_modeimage = true;
            img.onload = function () {
              createButtons(-1, img.src, img._src, nameskin2);
              loadImage();
            };
            img.onerror = function () {
              loadImage();
            };
          } else if (extimage && !change_extimage) {
            if (extimage.includes('../')) extimage = extimage.slice(0, extimage.indexOf('../'));
            var src = extimage.replace(/ext:/g, 'extension/');
            var str = src.substring(0, src.lastIndexOf('/'));
            img.onerror = function () {
              num = 1;
              change_extimage = true;
              loadImage();
            };
            img.onload = function () {
              createButtons(num - 1, img.src, img._src, nameskin2);
              num++;
              loadImage();
            };
            if (lib.config.extension_概念武将_zyile_Skin_load == 'order') {
              if (num == 1) {
                img.src = str + '/' + name + ext;
                img._src = str + '/' + name + ext;
              } else {
                img.src = str + '/' + name + '_pifu' + (num - 1) + ext;
                img._src = str + '/' + name + '_pifu' + (num - 1) + ext;
              }
            } else {
              game.hasDirectory(
                str,
                function () {
                  game.getFileList(str, function (folders, files) {
                    for (var i of files) {
                      if (i.indexOf(name) !== 0) continue;
                      var names = i.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g'));
                      if (names != null && ImageRe.test(names.join('')) && names.length > 1) {
                        createButtons(i.toString(), str + '/' + i, str + '/' + i, nameskin2);
                      }
                    }
                  });
                },
                function () {
                  delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][name];
                  game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                },
              );
              img.onerror();
            }
          } else {
            img.onload = function () {
              createButtons(num, img.src, img._src, nameskin2);
              num++;
              loadImage();
            };
            img._src = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name + '/' + num + ext;
            if (lib.config.extension_概念武将_zyile_Skin_load === 'order') {
              img.src = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name + '/' + num + ext;
            } else {
              var url = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name;
              game.hasDirectory(
                url,
                function () {
                  game.getFileList('image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name, function (folders, files) {
                    for (var i of files) {
                      var names = i.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g'));
                      if (names != null && ImageRe.test(names.join('')) && names.length > 1) {
                        createButtons(i.toString(), url + '/' + i, url + '/' + i, nameskin2);
                      }
                    }
                  });
                },
                function () {
                  delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][name];
                  game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                },
              );
              img.onerror();
            }
          }
        };
        loadImage();
      };
      if (typeof player.name == 'string' && lib.character[player.name] && !playerName1) {
        playerName1 = true;
        changeskin(player, player.name, player.node.avatar, true);
      } else if (typeof player.name1 == 'string' && lib.character[player.name1] && !playerName1) {
        playerName1 = true;
        changeskin(player, player.name1, player.node.avatar, true);
      } else if (typeof player.name2 == 'string' && lib.character[player.name2] && !playerName2) {
        playerName2 = true;
        changeskin(player, player.name2, player.node.avatar2);
      } else if (typeof player.link == 'string' && lib.character[player.link] && !playerLink) {
        playerLink = true;
        changeskin(player, player.link, player);
      }
      var node = ui.create.div('.zyile_character_skin_Node');
      /*node.listen(function(event){
        event.stopPropagation();
      });*/
      lib.setScroll(node);
      node.cloNode = ui.create.div(ui.window, '.zyile_Skin_Node_guanbi', function (event) {
        this.delete();
        NodeClose(event);
      });
      if (!lib.config.extension_概念武将_zyile_Skin_Node_guanbi) node.cloNode.style.display = 'none';
      var clo = ui.create.div(node);
      ui.create.zyile_node(clo, 'span', 'X').finished = true;
      node.clo = clo;
      clo.finished = true;
      clo.classList.add('zyile_character_skin_Close');
      var NodeClose = function (event) {
        node.delete();
        node.cloNode.delete();
        delete player.zyile_charactercard;
        event.stopPropagation();
        event.preventDefault();
        if (lib.config.extension_概念武将_zyile_Skin_suspend) game.resume2();
        return false;
      };
      clo.addEventListener('click', NodeClose);
      var minimize = ui.create.div(node, '.zyile_Skin_minimize');
      minimize.finished = true;
      minimize.addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();
        node.cloNode.style.display = 'none';
        node.style.animation = 'moveBottom 1s';
        if (lib.config.extension_概念武将_zyile_Skin_suspend) game.resume2();
        window.setTimeout(() => {
          node.style.display = 'none';
        }, 300);
        return false;
      });
      ui.create.div('.zyile_character_skin_tswz', "<span style='color: #EDDCA9;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);'>选择更换武将皮肤</span>", node);
      node.content = ui.create.div(node, '.zyile_character_skin_content');
      node.content.finished = true;
      if (lib.config.touchscreen) {
        lib.setScroll(node.content);
      }
      player.zyile_charactercard = node;
      if (lib.config.extension_概念武将_zyile_Skin_suspend) game.pause2();
      ui.window.appendChild(node);
      window.placePoppedCharacter(node, player);
      window.zyile_dragZoom && window.zyile_dragZoom(node);
      return node;
    };
  } else {
    var Skin = function (player, value, avatar) {
      var playerSkin = avatar || player;
      if (!lib.character[value] || typeof value !== 'string') {
        if (playerSkin && playerSkin.zyile_Skin_Node) return playerSkin.zyile_Skin_Node.remove();
        return;
      }
      var num = 1,
        skin_num = 0,
        change_extimage = false;
      var loadImage = function () {
        var img = new Image(),
          Fragment = document.createDocumentFragment();
        Fragment.appendChild(img);
        img.onload = function () {
          num++;
          skin_num++;
          if (skin_num > 0) {
            if (player.classList && (player.classList.contains('player') || player.classList.contains('button'))) {
              if (playerSkin.zyile_Skin_Node) playerSkin.zyile_Skin_Node.remove();
              playerSkin.zyile_Skin_Node = ui.create.div(playerSkin, (event) => {
                event.stopPropagation();
                event.preventDefault();
              });
              var div = ui.create.div(playerSkin.zyile_Skin_Node);
              div.classList.add('zyile_skin');
              playerSkin.zyile_Skin_Node.setAttribute('style', 'transition-property:opacity,background,box-shadow;display:block !important;z-index:99999;width: 100%;height: 100%;pointer-events: none;');
              div.addEventListener(
                'endDang',
                function (e) {
                  e.stopPropagation();
                  window.zyile_charactercard(value, false, playerSkin, player);
                },
                false,
              );
              var position = game.getExtensionConfig('概念武将', 'zyile_skin_position');
              if (position) {
                div.css({
                  transform: `translate(${position[0]}px,${position[1]}px)`,
                });
                div._translate = position;
              }
              div.addEventListener('moveStop', function () {
                game.saveExtensionConfig('概念武将', 'zyile_skin_position', this._translate);
              });
              window.zyile_dragZoom && window.zyile_dragZoom(div, player);
            }
          } else {
            if (playerSkin.zyile_Skin_Node) playerSkin.zyile_Skin_Node.remove();
            loadImage();
          }
        };
        img.onerror = function () {
          loadImage();
        };
        var ext = '.jpg',
          dbimage = null,
          extimage = null,
          modeimage = null,
          nameskin = value,
          name = value;
        var nameinfo;
        var gzbool = false;
        var mode = get.mode();
        if (lib.characterPack['mode_' + mode] && lib.characterPack['mode_' + mode][name]) {
          if (mode == 'guozhan') {
            if (name.indexOf('gz_shibing') == 0) {
              name = name.slice(3, 11);
            } else {
              if (lib.config.mode_config.guozhan.guozhanSkin && lib.character[name] && lib.character[name][4].includes('gzskin')) gzbool = true;
              name = name.slice(3);
            }
          } else {
            modeimage = mode;
          }
        } else if (lib.character[name]) {
          nameinfo = lib.character[name];
        } else if (name.includes('::')) {
          name = name.split('::');
          modeimage = name[0];
          name = name[1];
        }
        if (!modeimage && nameinfo && nameinfo[4]) {
          for (var i = 0; i < nameinfo[4].length; i++) {
            if (nameinfo[4][i].indexOf('ext:') == 0) {
              extimage = nameinfo[4][i];
              break;
            } else if (nameinfo[4][i].indexOf('mode:') == 0) {
              modeimage = nameinfo[4][i].slice(5);
              break;
            } else if (nameinfo[4][i].indexOf('character:') == 0) {
              name = nameinfo[4][i].slice(10);
              break;
            }
          }
        }
        if (extimage && !change_extimage) {
          if (extimage.includes('../')) extimage = extimage.slice(0, extimage.indexOf('../'));
          var src = extimage.replace(/ext:/g, 'extension/');
          var str = src.substring(0, src.lastIndexOf('/'));
          change_extimage = true;
          img.onerror = function () {
            num = 1;
            loadImage();
          };
          if (lib.config.extension_概念武将_zyile_Skin_load == 'order') {
            img.src = str + '/' + name + '_pifu' + num + ext;
          } else {
            game.hasDirectory(
              str,
              function () {
                game.getFileList(str, function (folders, files) {
                  for (var i of files) {
                    if (i.indexOf(name) !== 0) continue;
                    if (name.length + 4 >= i.length) continue;
                    var names = i.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g'));
                    if (names != null && ImageRe.test(names.join('')) && names.length > 1) {
                      img.onload();
                      if (skin_num > 1) return;
                    }
                  }
                });
              },
              function () {
                delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][name];
                game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
              },
            );
            img.onerror();
          }
        } else {
          if (lib.config.extension_概念武将_zyile_Skin_load == 'order') {
            img.src = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name + '/' + num + ext;
            img.onerror = null;
          } else {
            var url = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name;
            game.hasDirectory(
              url,
              function () {
                game.getFileList('image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name, function (folders, files) {
                  for (var i of files) {
                    var names = i.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g'));
                    if (names != null && ImageRe.test(names.join('')) && names.length > 1) {
                      img.onload();
                      if (skin_num > 1) return void 0;
                    }
                  }
                });
              },
              function () {
                delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][name];
                game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
              },
            );
          }
        }
      };
      if (lib.config.extension_概念武将_zyile_skin_fluent) {
        if (player.classList && (player.classList.contains('player') || player.classList.contains('button'))) {
          playerSkin.zyile_Skin_Node = ui.create.div(playerSkin, (event) => {
            event.stopPropagation();
            event.preventDefault();
          });
          var div = ui.create.div(playerSkin.zyile_Skin_Node);
          div.classList.add('zyile_skin');
          playerSkin.zyile_Skin_Node.setAttribute('style', 'display:block !important;z-index:99999;width: 100%;height: 100%;pointer-events: none;');
          div.addEventListener(
            'endDang',
            function (e) {
              e.stopPropagation();
              window.zyile_charactercard(value, false, playerSkin, player);
            },
            true,
          );
          var position = game.getExtensionConfig('概念武将', 'zyile_skin_position');
          if (position) {
            div.css({
              transform: `translate(${position[0]}px,${position[1]}px)`,
            });
            div._translate = position;
          }
          div.addEventListener('moveStop', function () {
            game.saveExtensionConfig('概念武将', 'zyile_skin_position', this._translate);
          });
          window.zyile_dragZoom && window.zyile_dragZoom(div, player);
        }
      } else loadImage();
    };
    if (config.zyile_Skin_Loading_time == 'start') {
      lib.element.player.inits.push(function (player) {
        Skin(player, player.name, player.node && player.node.avatar);
        Skin(player, player.name2, player.node && player.node.avatar2);
      });
      if (!Array.isArray(lib.element.player._uninits)) {
        lib.element.player._uninits = [
          function (player) {
            Skin(player, player.name, player.node && player.node.avatar);
            Skin(player, player.name2, player.node && player.node.avatar2);
          },
        ];
      } else {
        lib.element.player._uninits.push(function (player) {
          Skin(player, player.name, player.node && player.node.avatar);
          Skin(player, player.name2, player.node && player.node.avatar2);
        });
      }
    } else {
      Reflect.defineProperty(HTMLDivElement.prototype, 'name1', {
        get() {
          return this._zyile_NAME1;
        },
        set(value) {
          this._zyile_NAME1 = value;
          if (!this.classList || this.classList.contains('card')) return void 0;
          if (lib.config.extension_概念武将_zyile_Skin_area == 'all') {
            if (this.classList.contains('player') || this.classList.contains('button')) {
              Skin(this, value, this.node && this.node.avatar);
            }
          } else if (this.classList.contains(lib.config.extension_概念武将_zyile_Skin_area)) {
            Skin(this, value, this.node && this.node.avatar);
          }
        },
      });
      Reflect.defineProperty(HTMLDivElement.prototype, 'name2', {
        get() {
          return this._zyile_NAME2;
        },
        set(value) {
          this._zyile_NAME2 = value;
          if (!this.classList || this.classList.contains('card')) return void 0;
          if (lib.config.extension_概念武将_zyile_Skin_area == 'all') {
            if (this.classList.contains('player') || this.classList.contains('button')) {
              Skin(this, value, this.node && this.node.avatar2);
            }
          } else if (this.classList.contains(lib.config.extension_概念武将_zyile_Skin_area)) {
            Skin(this, value, this.node && this.node.avatar2);
          }
        },
      });
      Reflect.defineProperty(HTMLDivElement.prototype, 'link', {
        get() {
          return this._zyile_LINK;
        },
        set(value) {
          this._zyile_LINK = value;
          if (!this.classList || this.classList.contains('card')) return void 0;
          if (lib.config.extension_概念武将_zyile_Skin_area == 'all') {
            if (this.classList.contains('player') || this.classList.contains('button')) {
              Skin(this, value, undefined);
            }
          } else if (this.classList.contains(lib.config.extension_概念武将_zyile_Skin_area)) {
            Skin(this, value, undefined);
          }
        },
      });
    }
    window.zyile_charactercard = function (name, resume, avatar, that) {
      if (!name) return undefined;
      if (lib.character[name] && lib.character[name][4] && lib.character[name][4].includes('minskins')) return undefined;
      if (avatar.zyile_charactercard) {
        if (window.getComputedStyle(avatar.zyile_charactercard, null).display == 'none') {
          avatar.zyile_charactercard.style.display = 'block';
          avatar.zyile_charactercard.style.animation = 'dialog_start2 .3s';
          if (lib.config.extension_概念武将_zyile_Skin_suspend) game.pause2();
        }
        window.getComputedStyle(avatar.zyile_charactercard.cloNode, null).display == 'none' ? (avatar.zyile_charactercard.cloNode.style.display = '') : void 0;
        if (!lib.config.extension_概念武将_zyile_Skin_Node_guanbi) avatar.zyile_charactercard.cloNode.style.display = 'none';
        return undefined;
      }
      if (lib.config.zyile_Skin[name] && lib.config.zyile_Skin[name].toString().indexOf('ext:') !== -1) {
        avatar.style.backgroundImage = "url('" + lib.config.zyile_Skin[name].toString().replace(/ext:/g, 'extension/') + "')";
        game.broadcastAll(function (avatar) {
          avatar.style.backgroundImage = "url('" + lib.config.zyile_Skin[name].toString().replace(/ext:/g, 'extension/') + "')";
        }, avatar);
      }
      var node = ui.create.div('.zyile_character_skin_Node');
      avatar.zyile_charactercard = node;
      var zindex = window.getComputedStyle(that, null).zIndex || 6;
      /*node.listen(function(event){
        event.stopPropagation();
      });*/
      lib.setScroll(node);
      node.cloNode = ui.create.div(ui.window, '.zyile_Skin_Node_guanbi', function (event) {
        this.delete();
        NodeClose(event);
      });
      if (!lib.config.extension_概念武将_zyile_Skin_Node_guanbi) node.cloNode.style.display = 'none';
      var clo = ui.create.div(node, '.zyile_character_skin_Close');
      clo.finished = true;
      node.clo = clo;
      ui.create.zyile_node(clo, 'span', 'X').finished = true;
      var NodeClose = function (event) {
        node.delete();
        node.cloNode.delete();
        delete avatar.zyile_charactercard;
        event.stopPropagation();
        event.preventDefault();
        if (lib.config.extension_概念武将_zyile_Skin_suspend) game.resume2();
        return false;
      };
      clo.addEventListener('click', NodeClose);
      var minimize = ui.create.div(node, '.zyile_Skin_minimize');
      minimize.finished = true;
      minimize.addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();
        node.cloNode.style.display = 'none';
        node.style.animation = 'moveBottom 1s';
        if (lib.config.extension_概念武将_zyile_Skin_suspend) game.resume2();
        window.setTimeout(() => {
          node.style.display = 'none';
        }, 300);
        return false;
      });
      var tswz = ui.create.div(node);
      tswz.classList.add('zyile_character_skin_tswz');
      tswz.innerHTML = "<span style='color: #EDDCA9;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);'>选择更换武将皮肤</span>";
      var d = ui.create.div(node, '.zyile_character_skin_content');
      node.content = d;
      node.content.finished = true;
      var yxy = ui.create.div('.zyile_character_skin_yxy_div');
      ui.create.div('.zyile_character_skin_yxy', yxy);
      var nameskin = name;
      var nameskin2 = name;
      var changeskin = function () {
        var createButtons = function (num, src, _src) {
          if (lib.config.touchscreen) {
            lib.setScroll(d);
          }
          let name = num;
          if (typeof num == 'string') {
            if (num.lastIndexOf('(') !== -1) {
              name = num.slice(0, num.lastIndexOf('('));
            } else if (num.lastIndexOf('.') !== -1) {
              name = num.slice(0, num.lastIndexOf('.'));
            }
            name = name.replace(nameskin2, '').replace(/^_pifu[0-9]/g, '');
            if (name.match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]', 'g')) === null) {
              name = get.translation(nameskin2);
            }
          }
          if (typeof name === 'number') name = get.translation(nameskin2);
          var FragmentSysImg = document.createDocumentFragment(),
            SyscImage = ui.create.zyile_node('img');
          SyscImage.src = src;
          FragmentSysImg.appendChild(SyscImage);
          var button = ui.create.div('.zyile_character_skin_Button', node.content, function (e) {
            !lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'] && game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', (lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'] = {}));
            if (button._link) {
              //不是扩展皮肤
              if (window.decodeURI(_src).toString().indexOf('extension') === -1) {
                lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][nameskin] = this._link;
                game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
              }
              //这是是否开启了解锁	_Unlock
              if (Object.hasOwn(this, '_Unlock') && lib.config[[nameskin] + '_pifu_' + [this._link] + '_' + isExtensionSkin + '_goumai'] !== true) {
                if (lib.config[this._Unlock.currency] - this._Unlock.quantity < 0) {
                  lib.zyile_layer.msg('货币不足!', {
                    icon: 2,
                    protype: 4,
                    time: 5e2,
                  });
                  return;
                } else {
                  lib.config[lib.config[this._Unlock.currency]] = lib.config[lib.config[this._Unlock.currency]] - this._Unlock.quantity;
                  game.saveConfigValue(this._Unlock.currency);
                  try {
                    lib.config.extension_概念武将_zyile_coin_update && eval('"use strict";{' + lib.config.extension_概念武将_zyile_coin_update.toString() + '}');
                  } catch (e) {
                    if (config.skin_update_error) {
                      game.log('extension_概念武将_zyile_coin_update:' + e);
                      game.print('extension_概念武将_zyile_coin_update:' + e);
                      lib.zyile_layer.alert(e.toString(), { title: '更新货币时出错!', icon: 2 });
                      console.warn(e);
                    }
                  }
                  this._page.remove();
                  lib.config[[nameskin] + '_pifu_' + [this._link] + '_' + this.isExtensionSkin + '_goumai'] = true;
                  game.saveConfig([nameskin] + '_pifu_' + [this._link] + '_' + this.isExtensionSkin + '_goumai', true);
                  lib.zyile_layer.msg('解锁成功', { icon: 1, item: 5e2 });
                }
              }
            }
            //开始武将换肤
            if (avatar) {
              game.broadcastAll(
                function (avatar, that) {
                  //渐变换肤(好像还是会卡...？？？还是尽量别用了
                  if (lib.config.extension_概念武将_zyile_skin_Gradient) {
                    var JianBian = ui.create.div('.jbtp', avatar),
                      JianBian_bg = ui.create.div('.jbtp', avatar),
                      huanfu = [
                        function () {
                          if (fu_num === 10) {
                            clearInterval(IntervalId);
                            JianBian.delete();
                            JianBian_bg.delete();
                            avatar.style.backgroundImage = that.style.backgroundImage;
                            return;
                          }
                          JianBian.setBackgroundImage('extension/概念武将/redskin/' + fu_num + '-1.png');
                          fu_num < 8 && JianBian_bg.setBackgroundImage('extension/概念武将/redskin/' + fu_num + '.png');
                          fu_num++;
                        },
                        function () {
                          if (fu_num === 10) {
                            clearInterval(IntervalId);
                            JianBian.delete();
                            JianBian_bg.delete();
                            avatar.style.backgroundImage = that.style.backgroundImage;
                            return;
                          }
                          JianBian.setBackgroundImage('extension/概念武将/redskin/' + fu_num + '-1.png');
                          fu_num < 8 && JianBian_bg.setBackgroundImage('extension/概念武将/purpleskin/' + fu_num + '.png');
                          fu_num++;
                        },
                        function () {
                          if (fu_num === 10) {
                            clearInterval(IntervalId);
                            JianBian.delete();
                            JianBian_bg.delete();
                            avatar.style.backgroundImage = that.style.backgroundImage;
                            return;
                          }
                          JianBian.setBackgroundImage('extension/概念武将/yellowskin/' + fu_num + '-1.png');
                          JianBian_bg.setBackgroundImage('extension/概念武将/yellowskin/' + fu_num + '.png');
                          fu_num++;
                        },
                      ],
                      fu_num = 0,
                      IntervalId = setInterval(huanfu.randomGet(), 35);
                  } else {
                    avatar.style.backgroundImage = that.style.backgroundImage;
                  }
                },
                avatar,
                this,
              );
            }
            //保存扩展上换肤的路径
            if (Array.isArray(lib.character[nameskin][4]) && lib.character[nameskin][4].length > 0) {
              for (var i = 0; i < lib.character[nameskin][4].length; i++) {
                if (lib.character[nameskin][4][i].indexOf('ext') !== -1) {
                  if (window.decodeURI(this._src).indexOf('extension') !== -1) {
                    var Ufem8 = 'ext:' + this._src.slice(this._src.lastIndexOf('extension/') + 10);
                    if (!lib.config.zyile_Skin) lib.config.zyile_Skin = {};
                    lib.config.zyile_Skin[nameskin] = window.decodeURI(Ufem8);
                    game.saveConfig('zyile_Skin', lib.config.zyile_Skin);
                    lib.character[nameskin][4][i] = window.decodeURI(Ufem8);
                    break;
                  } else {
                    lib.character[nameskin][4][i] = lib.character[nameskin][4][i] + '../../../../' + _src;
                    lib.config.zyile_Skin[nameskin] = lib.character[nameskin][4][i];
                    game.saveConfig('zyile_Skin', lib.config.zyile_Skin);
                  }
                } else {
                  lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][nameskin] = this._link;
                  lib.character[nameskin][4][i] = window.decodeURI(lib.character[nameskin][4][i].replace(/ext:/g, 'extension/'));
                  game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                }
              }
            } else {
              lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][nameskin] = this._link;
              this._link && this._link.toString && (lib.character[nameskin][4] = [this._link.toString()]);
              game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
            }
            //如果是原画的话直接清空不保存.
            if (!this._link) {
              delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][nameskin];
              game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
            }
            this.appendChild(yxy);
            yxy.finished = true;
            //这里是换肤换语音代码    很完善了(bushi
            if (lib.config.extension_概念武将_zyile_Skin_Audio) {
              let skills = lib.character[nameskin][3].slice(0),
                str = this._link ? `武将:${get.translation(nameskin)}<br>` : `删除【${get.translation(nameskin).fontcolor('red')}】换肤换音配置<br>`;
              let getSkillAudio = (info, audioname) => {
                if (info.audioname2 && info.audioname2[player.name]) {
                  audioname = info.audioname2[player.name];
                  info = lib.skill[audioname];
                }
                let audioinfo = info.audio;
                if (audioinfo === false || !audioinfo) return false;
                if (typeof audioinfo == 'string' && lib.skill[audioinfo]) {
                  audioname = audioinfo;
                  audioinfo = lib.skill[audioname].audio;
                }
                if (typeof audioinfo === 'string') {
                  if (audioinfo.indexOf('ext:') === 0) {
                    audioinfo = audioinfo.split(':');
                    return [audioname, `../../../extension/${audioinfo[1]}/${this._link}`];
                  }
                } else if (Array.isArray(audioinfo)) {
                  audioname = audioinfo[0];
                  audioinfo = null;
                }
                //检查同一技能不同武将触发不同语音
                if (Array.isArray(info.audioname) && that) {
                  if (info.audioname.includes(that.name)) {
                    audioname += '_' + that.name;
                  } else if (info.audioname.includes(that.name1)) {
                    audioname += '_' + that.name1;
                  } else if (info.audioname.includes(that.name2)) {
                    audioname += '_' + that.name2;
                  } else if (info.audioname.includes(that.link)) {
                    audioname += '_' + that.link;
                  }
                }
                return audioname;
              };
              let addGroup = (info) => {
                let _skills = [].concat(info.group);
                skills.addArray(_skills);
                _skills.map((value) => {
                  let infox = lib.skill[value];
                  if (!infox || !infox.group) return false;
                  addGroup(info);
                });
              };
              skills.slice(0).filter((value) => {
                let info = lib.skill[value];
                if (!info) return skills.remove(value);
                if (!info.derivation) info.derivation = [];
                if (info.group) addGroup(info);
                skills.addArray([].concat(info.derivation));
              });
              for (const i of skills) {
                let info = get.info(i);
                if (!info) continue;
                let audioname = getSkillAudio(info, i);
                if (audioname === false) continue;
                let flag = false;
                if (Array.isArray(audioname)) flag = true;
                //原画就删除保存的换肤换语音配置
                if (!this._link) {
                  delete lib.config.zyile_Skin_Audio[nameskin];
                  game.saveConfig('zyile_Skin_Audio', lib.config.zyile_Skin_Audio);
                  if (game.getExtensionConfig('概念武将', 'zyile_Skin_Audio_Re_prompt')) {
                    str += `${get.translation(i).fontcolor('red')}<br>`;
                  }
                  continue;
                }
                if (!get.is.object(lib.config.zyile_Skin_Audio[nameskin])) {
                  lib.config.zyile_Skin_Audio[nameskin] = {};
                }
                if (flag) {
                  lib.config.zyile_Skin_Audio[nameskin][audioname[0]] = audioname[1];
                  lib.config.zyile_Skin_Audio[nameskin][nameskin] = audioname[1];
                } else {
                  lib.config.zyile_Skin_Audio[nameskin][audioname] = this._link;
                  lib.config.zyile_Skin_Audio[nameskin][nameskin] = this._link; //保存死亡时配对的名称
                }
                game.saveConfig('zyile_Skin_Audio', lib.config.zyile_Skin_Audio);
                str += `${get.translation(i).fontcolor('red')}:`;
                if (flag) {
                  str += `${audioname[1].slice(6)}/${audioname[0]}<br>`;
                } else {
                  str += `audio/skill/${nameskin}/${this._link}/${audioname}<br>`;
                }
              }
              if (game.getExtensionConfig('概念武将', 'zyile_Skin_Audio_Re_prompt')) {
                lib.zyile_layer.msg(str, {
                  title: '语音地址',
                  time: game.getExtensionConfig('概念武将', 'zyile_Skin_Audio_Re_prompt_timeout'),
                  cancelclick: true,
                  icon: this._link ? 1 : -1,
                });
              }
            }
          });
          button._src = src;
          button._URL = _src;
          button._LinkName = name;
          button.style.backgroundImage = 'url("' + src + '")';
          var isExtensionSkin = '';
          if (window.decodeURI(_src).toString().indexOf('extension') !== -1) isExtensionSkin = '_extension';
          if (num === -1) {
            lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] = lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] || '经典';
            lib.config.SKIN_INFO_GradeOf[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] = lib.config.SKIN_INFO_GradeOf[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] || '原画';
          }
          var skin_info = lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] || name;
          var SKIN_INFO_GradeOf = lib.config.SKIN_INFO_GradeOf[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'];
          var Skin_info_div = ui.create.div('.zyile_Skin_div', button, (event) => {
            event.stopPropagation();
          });
          button._info = Skin_info_div;
          var GradeOf_Input_click = function (event) {
            event.stopPropagation();
            if (GradeOf_Input._input) return undefined;
            GradeOf_Input.innerHTML = '';
            var str = lib.config.SKIN_INFO_GradeOf[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'];
            var input = document.createElement('input');
            input.classList.add('zyile_input');
            input.setAttribute('type', 'text');
            input.setAttribute('value', str || '');
            input.setAttribute('style', 'z-index:6');
            var moveEnd = function (obj) {
              var len = obj.value.length;
              if (document.selection) {
                var sel = obj.createTextRange();
                sel.moveStart('character', len);
                sel.collapse();
                sel.select();
              } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
                obj.selectionStart = obj.selectionEnd = len;
              }
            };
            var ture = function () {
              if (input.removed) return false;
              var src = button._URL.slice(0, button._URL.lastIndexOf('/'));
              var name = button._URL.slice(button._URL.lastIndexOf('/') + 1);
              var ext = button._URL.slice(button._URL.lastIndexOf('.'));
              var value = input.value;
              var LCinfo = lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'];
              if (lib.zyile_common.isEmpty(value)) {
                if (LCinfo) value = LCinfo;
                else value = undefined || button._LinkName;
              }
              var names = value && value.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g')).join('');
              if (lib.config.extension_概念武将_zyile_File_ReName && names != null) {
                button._URL = button._URL.replace(name, value + ext);
                game.fileReName(src, name, value + ext);
              }
              var info = [nameskin] + '_pifu' + [num] + isExtensionSkin + '_info';
              lib.config.SKIN_INFO[info] = value;
              game.saveConfig('SKIN_INFO', lib.config.SKIN_INFO);
              game.saveConfig('SKIN_INFO_GradeOf', lib.config.SKIN_INFO_GradeOf);
              LCinfo = lib.config.SKIN_INFO[info];
              input.removed = true;
              info_Input._input = undefined;
              info_Input.innerHTML = LCinfo || '添加皮肤名称';
              button._LinkName = LCinfo || button._LinkName;
              info_Input_button.classList.remove('zyile_hidden');
            };
            input.addEventListener('blur', ture);
            input.addEventListener('keydown', (event) => {
              if (event.keyCode === 13) ture();
              event.stopPropagation();
            });
            GradeOf_Input.appendChild(input);
            input.focus();
            moveEnd(input);
            GradeOf_Input._input = input;
          };
          var GradeOf_Input = ui.create.div('.zyile_Skin_GradeOf', SKIN_INFO_GradeOf || '添加等级', button._info, GradeOf_Input_click);
          var GradeOf_Input_button = ui.create.div(button._info, '.zyile_Skin_GradeOf_input_button', '修改', function (event) {
            !this.classList.contains('zyile_hidden') && GradeOf_Input_click(event);
            this.classList.add('zyile_hidden');
          });
          var info_Input_click = function (event) {
            event.stopPropagation();
            if (info_Input._input) return undefined;
            info_Input.innerHTML = '';
            var str = lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] || button._LinkName;
            var input = document.createElement('input');
            input.classList.add('zyile_input');
            input.setAttribute('type', 'text');
            input.setAttribute('value', str || '');
            input.setAttribute('style', 'z-index:6');
            var moveEnd = function (obj) {
              var len = obj.value.length;
              if (document.selection) {
                var sel = obj.createTextRange();
                sel.moveStart('character', len);
                sel.collapse();
                sel.select();
              } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
                obj.selectionStart = obj.selectionEnd = len;
              }
            };
            var ture = function () {
              if (input.removed) return false;
              var value = input.value;
              var LCinfo = lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'];
              if (lib.zyile_common.isEmpty(value)) {
                if (LCinfo) value = LCinfo;
                else value = undefined;
              }
              var info = [nameskin] + '_pifu' + [num] + isExtensionSkin + '_info';
              lib.config.SKIN_INFO[info] = value;
              game.saveConfig('SKIN_INFO', lib.config.SKIN_INFO);
              game.saveConfig('SKIN_INFO_GradeOf', lib.config.SKIN_INFO_GradeOf);
              LCinfo = lib.config.SKIN_INFO[info];
              input.removed = true;
              info_Input._input = undefined;
              info_Input.innerHTML = LCinfo || '添加皮肤名称';
              button._LinkName = LCinfo || button._LinkName;
              info_Input_button.classList.remove('zyile_hidden');
            };
            input.addEventListener('blur', ture);
            input.addEventListener('keydown', (event) => {
              if (event.keyCode == 13) ture();
              event.stopPropagation();
            });
            info_Input.appendChild(input);
            input.focus();
            moveEnd(input);
            info_Input._input = input;
            info_Input_button.classList.add('zyile_hidden');
          };
          var info_Input_button = ui.create.div(button._info, '.zyile_Skin_info_input_button', '修改', function (event) {
            lib.zyile_layer.prompt(
              {
                title: '更改皮肤名称',
                value: lib.config.SKIN_INFO[[nameskin] + '_pifu' + [num] + isExtensionSkin + '_info'] || button._LinkName,
                maxlength: 10,
                success(layer) {
                  var i = layer.querySelector('.layui-layer-input'),
                    textShadow = lib.config.extension_概念武将_zyile_Skin_Name_color;
                  i.style.textShadow = textShadow + ' 0 0 2px, ' + textShadow + ' 0 0 2px, ' + textShadow + ' 0 0 2px, ' + textShadow + ' 0 0 2px, ' + textShadow + ' 0 0 2px, ' + textShadow + ' 0 0 2px, #fff 0 0 1px';
                  i.style.color = '#fff';
                },
              },
              function (val, index, input) {
                lib.zyile_layer.confirm("<li>确认修改为【<span style='color:red'>" + val + '</span>】</li>?', function (layer, index) {
                  let names = val.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g')).join('');
                  if (lib.config.extension_概念武将_zyile_File_ReName && names != null) {
                    let src = button._URL.slice(0, button._URL.lastIndexOf('/'));
                    let name = button._URL.slice(button._URL.lastIndexOf('/') + 1);
                    let ext = button._URL.slice(button._URL.lastIndexOf('.'));
                    button._URL = button._URL.replace(name, val + ext);
                    game.fileReName(src, name, val + (button._URL.indexOf('extension') !== -1 ? nameskin2 : '' + ext));
                  }
                  let info = [nameskin] + '_pifu' + [num] + isExtensionSkin + '_info';
                  lib.config.SKIN_INFO[info] = val;
                  game.saveConfig('SKIN_INFO', lib.config.SKIN_INFO);
                  game.saveConfig('SKIN_INFO_GradeOf', lib.config.SKIN_INFO_GradeOf);
                  let LCinfo = lib.config.SKIN_INFO[info];
                  info_Input.innerHTML = LCinfo || '添加皮肤名称';
                  button._LinkName = LCinfo || button._LinkName;
                  lib.zyile_layer.msg('修改完毕', {
                    icon: 1,
                    time: 1e3,
                  });
                });
              },
            );
          });
          var info_Input = ui.create.div('.zyile_Skin_info', button._info, skin_info || '添加皮肤名称', info_Input_click),
            js_name = _src.slice(_src.lastIndexOf('/') + 1, _src.lastIndexOf('.'));
          if (js_name !== nameskin2) {
            //判断是不是原图
            button._link = js_name;
            if (game.getExtensionConfig('概念武将', 'zyile_skin_js_enable')) {
              let currency,
                zyile_skin_prefix = game.getExtensionConfig('概念武将', 'zyile_skin_prefix');
              if (Object.hasOwn(zyile_skin_prefix, 'all')) {
                currency = 'all';
              } else {
                for (let j in zyile_skin_prefix) {
                  //循环获取武将名称判断添加了解锁模式没有
                  if (nameskin.indexOf(j) === 0) {
                    currency = j;
                    break;
                  }
                }
              }
              if (currency && lib.config[[nameskin] + '_pifu_' + [js_name] + '_' + isExtensionSkin + '_goumai'] !== true) {
                let wjsdiv = ui.create.div(button, '.zyile_character_skin_WJSX');
                let div = ui.create.div(wjsdiv, '.zyile_character_skin_WJS');
                ui.create.div(div, '.zyile_charater_skin_wjs_font', '尚未拥有');
                ui.create.div(div, '.zyile_charater_skin_wjs');
                button._page = wjsdiv;
                button._Unlock = {
                  currency: zyile_skin_prefix[currency].currency,
                  quantity: zyile_skin_prefix[currency].quantity,
                };
                button.isExtensionSkin = isExtensionSkin;
              }
            }
          }
          if (lib.character[nameskin][4]) {
            for (var _LFc28 of lib.character[nameskin][4]) {
              if (yxy.finished) break;
              if (_LFc28.replace(/ext:/g, 'extension/').indexOf(_src) !== -1) {
                button.appendChild(yxy);
              }
            }
          }
          var vyS5Z = 'url("' + window.decodeURI(_src).toString() + '")';
          var $vyS5Z = vyS5Z.substring(5, vyS5Z.length - 2);
          var gPHT1 = window.decodeURI(avatar.style.backgroundImage).toString();
          if (gPHT1 === vyS5Z || gPHT1.indexOf($vyS5Z) !== -1) button.appendChild(yxy);
          button.style.cursor = 'pointer';
        };
        /**************************************************************************************************/
        var num = 1,
          change_extimage = false,
          change_character = false,
          change_modeimage = false;
        var loadImage = function () {
          var img = new Image(),
            Fragment = document.createDocumentFragment();
          Fragment.appendChild(img);
          img.onload = null;
          img.onerror = null;
          var ext = '.jpg',
            dbimage = null,
            extimage = null,
            modeimage = null;
          var nameinfo;
          var gzbool = false;
          var mode = get.mode();
          if (lib.characterPack['mode_' + mode] && lib.characterPack['mode_' + mode][name]) {
            if (mode === 'guozhan') {
              if (name.indexOf('gz_shibing') === 0) {
                name = name.slice(3, 11);
              } else {
                if (lib.config.mode_config.guozhan.guozhanSkin && lib.character[name] && lib.character[name][4].includes('gzskin')) gzbool = true;
                name = name.slice(3);
              }
            } else {
              modeimage = mode;
            }
          } else if (lib.character[name]) {
            nameinfo = lib.character[name];
          } else if (name.indexOf('::') !== -1) {
            name = name.split('::');
            modeimage = name[0];
            name = name[1];
          }
          if (!modeimage && nameinfo && nameinfo[4]) {
            for (var i = 0; i < nameinfo[4].length; i++) {
              if (nameinfo[4][i].indexOf('ext') === 0) {
                extimage = nameinfo[4][i];
                break;
              } else if (nameinfo[4][i].indexOf('mode:') === 0) {
                modeimage = nameinfo[4][i].slice(5);
                break;
              } else if (nameinfo[4][i].indexOf('character:') === 0) {
                name = nameinfo[4][i].slice(10);
                break;
              }
            }
          }
          /*******************************************************************************/
          if (!change_character) {
            img.src = 'image/character/' + (gzbool ? 'gz_' : '') + name + ext;
            img._src = 'image/character/' + (gzbool ? 'gz_' : '') + name + ext;
            change_character = true;
            img.onload = function () {
              createButtons(-1, img.src, img._src);
              loadImage();
            };
            img.onerror = function () {
              loadImage();
            };
          } else if (modeimage && !change_modeimage) {
            img.src = 'image/mode/' + modeimage + '/character/' + name + ext;
            img._src = 'image/mode/' + modeimage + '/character/' + name + ext;
            change_modeimage = true;
            img.onload = function () {
              createButtons(-1, img.src, img._src);
              loadImage();
            };
            img.onerror = function () {
              loadImage();
            };
          } else if (extimage && !change_extimage) {
            if (extimage.includes('../')) extimage = extimage.slice(0, extimage.indexOf('../'));
            var src = extimage.replace(/ext:/g, 'extension/');
            var str = src.substring(0, src.lastIndexOf('/'));
            img.onerror = function () {
              num = 1;
              change_extimage = true;
              loadImage();
            };
            img.onload = function () {
              createButtons(num - 1, img.src, img._src);
              num++;
              loadImage();
            };
            if (lib.config.extension_概念武将_zyile_Skin_load == 'order') {
              if (num == 1) {
                img.src = str + '/' + name + ext;
                img._src = str + '/' + name + ext;
              } else {
                img.src = str + '/' + name + '_pifu' + (num - 1) + ext;
                img._src = str + '/' + name + '_pifu' + (num - 1) + ext;
              }
            } else {
              game.hasDirectory(
                str,
                function () {
                  game.getFileList(str, function (folders, files) {
                    for (var i of files) {
                      if (i.indexOf(name) != 0) continue;
                      var names = i.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g'));
                      if (names != null && ImageRe.test(names.join('')) && names.length > 1) {
                        createButtons(i.toString(), str + '/' + i, str + '/' + i);
                      }
                    }
                  });
                },
                function () {
                  delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][name];
                  game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                },
              );
              img.onerror();
            }
          } else {
            img.onload = function () {
              createButtons(num, img.src, img._src);
              num++;
              loadImage();
            };
            if (lib.config.extension_概念武将_zyile_Skin_load == 'order') {
              img.src = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name + '/' + num + ext;
            } else {
              var url = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name;
              game.hasDirectory(
                url,
                function () {
                  game.getFileList('image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name, function (folders, files) {
                    for (var i of files) {
                      var names = i.toString().match(new RegExp('[\\u4e00-\\u9fa5]|[A-Z]|[a-z]|.', 'g'));
                      if (names != null && ImageRe.test(names.join('')) && names.length > 1) {
                        createButtons(i.toString(), url + '/' + i, url + '/' + i);
                      }
                    }
                  });
                },
                function () {
                  delete lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin'][name];
                  game.saveConfig(lib.config.extension_概念武将_zyile_Skin_src || 'skin', lib.config[lib.config.extension_概念武将_zyile_Skin_src || 'skin']);
                },
              );
            }
            img._src = 'image/' + (lib.config.extension_概念武将_zyile_Skin_src || 'skin') + '/' + name + '/' + num + ext;
          }
        };
        loadImage();
      };
      changeskin();
      if (lib.config.extension_概念武将_zyile_Skin_suspend) game.pause2();
      ui.window.appendChild(node);
      window.placePoppedCharacter(node, that);
      window.zyile_dragZoom && window.zyile_dragZoom(node, ui.window);
      return node;
    };
  }
  window.placePoppedCharacter = function (div, player) {
    if (lib.config.extension_概念武将_zyile_Skin_placePopped === 'center') {
      var style = {
        top: 'calc(50% - 120px)',
        left: 'calc(50% - 236px)',
      };
      for (var i in style) {
        div.style[i] = style[i];
      }
      div.style.animation = 'dialog_start2 0.3s';
      div.style.WebkitAnimation = 'dialog_start2 0.3s';
    } else if (lib.config.extension_概念武将_zyile_Skin_placePopped === 'Location') {
      var pc = player.getBoundingClientRect();
      var dc = div.getBoundingClientRect();
      if (lib.extensionPack['十周年UI']) {
        var zoom = window.getComputedStyle(player, null).zoom || 1;
        'ontouchstart' in document ? (zoom = 1) : void 0;
        if (!(ui.window.offsetHeight - pc.top > dc.height)) {
          div.style.top = (pc.top - dc.height) * zoom + 'px';
          lib.config.extension_概念武将_bounce === 'updown' && div.classList.add('zyile_bounceInTop');
        } else {
          div.style.top = pc.bottom * zoom + 'px';
          lib.config.extension_概念武将_bounce === 'updown' && div.classList.add('zyile_bounceInBottom');
        }
        if (!(ui.window.offsetWidth - pc.left > div.offsetWidth)) {
          div.style.right = (ui.window.offsetWidth - pc.right) * zoom + 'px';
          lib.config.extension_概念武将_bounce === 'about' && div.classList.add('zyile_bounceInRight');
        } else {
          div.style.left = (pc.left - 10) * zoom + 'px';
          lib.config.extension_概念武将_bounce === 'about' && div.classList.add('zyile_bounceInLeft');
        }
        return '十周年UI布局';
      }
      if ('ontouchstart' in document) {
        if (ui.window.offsetHeight - pc.top / game.documentZoom > dc.height / game.documentZoom) {
          div.style.top = pc.bottom / game.documentZoom + 'px';
          lib.config.extension_概念武将_bounce === 'updown' && div.classList.add('zyile_bounceInTop');
        } else {
          div.style.bottom = ui.window.offsetHeight - pc.top / game.documentZoom + 'px';
          lib.config.extension_概念武将_bounce === 'updown' && div.classList.add('zyile_bounceInBottom');
        }
        if (!(ui.window.offsetWidth - pc.left / game.documentZoom > dc.width / game.documentZoom)) {
          div.style.right = (ui.window.offsetWidth - (pc.left + pc.width) / game.documentZoom) * (window.getComputedStyle(player, null).zoom || 1) + 'px';
          lib.config.extension_概念武将_bounce === 'about' && div.classList.add('zyile_bounceInRight');
        } else {
          div.style.left = pc.left / game.documentZoom - 10 + 'px';
          lib.config.extension_概念武将_bounce === 'about' && div.classList.add('zyile_bounceInLeft');
        }
      } else {
        var zoom = window.getComputedStyle(player, null).zoom || 1;
        if (ui.window.offsetHeight - pc.top / game.documentZoom + player.offsetHeight > div.offsetHeight) {
          if (pc.top / game.documentZoom - div.offsetHeight - dc.top < 0) {
            div.style.top = (pc.bottom / game.documentZoom) * zoom + 'px';
            lib.config.extension_概念武将_bounce === 'updown' && div.classList.add('zyile_bounceInBottom');
          } else {
            div.style.top = ((pc.top - dc.height) / game.documentZoom) * zoom + 'px';
            lib.config.extension_概念武将_bounce === 'updown' && div.classList.add('zyile_bounceInTop');
          }
        } else {
          div.style.bottom = player.offsetHeight + 'px';
        }
        if (!(ui.window.offsetWidth - pc.left / game.documentZoom > div.offsetWidth)) {
          div.style.left = ((pc.left - dc.width + pc.width) / game.documentZoom) * zoom + 4 + 'px';
          lib.config.extension_概念武将_bounce === 'about' && div.classList.add('zyile_bounceInRight');
        } else {
          div.style.left = (pc.left / game.documentZoom) * zoom - 7 + 'px';
          lib.config.extension_概念武将_bounce === 'about' && div.classList.add('zyile_bounceInLeft');
        }
      }
    }
  };
  window.zyile_content.push(function (lib, game, ui, get, ai, _status, config) {
    if (game.getExtensionConfig('概念武将', 'zyile_skin_Gradient_Preloading_images')) {
      let onload = function () {
        let imgs = ui.create.div(document.body, {
          visibility: 'hidden',
          width: '0',
          height: '0',
          opacity: '0',
        });
        let ReadFileList = function (fob) {
          game.getFileList('extension/概念武将/' + fob, function (folders, files) {
            if (!files.length) return undefined;
            for (var j of files) {
              let img = ui.create.zyile_node(imgs, 'img');
              img.src = 'extension/概念武将/' + fob + '/' + j;
              img.addEventListener('load', function () {
                this.style.display = 'none';
              });
              img.addEventListener('error', function () {
                this.style.display = 'none';
              });
            }
          });
        };
        game.ensureDirectory('extension/概念武将/redskin', function () {
          ReadFileList('redskin');
        });
        game.ensureDirectory('extension/概念武将/purpleskin', function () {
          ReadFileList('purpleskin');
        });
        game.ensureDirectory('extension/概念武将/yellowskin', function () {
          ReadFileList('yellowskin');
        });
      };
      onload();
    }
    if (!lib.config.zyile_Skin) game.saveConfig('zyile_Skin', {});
    if (!config.zyile_Skin_enable) return undefined;
    for (var i in lib.config.zyile_Skin) {
      var character = lib.character[i];
      if (!character || !character[4]) continue;
      for (var j = 0; j < character[4].length; j++) {
        if (character[4][j].indexOf('ext') === -1) continue;
        try {
          character[4][j] = lib.config.zyile_Skin[i].toString().replace(/extension/g, 'ext:');
        } catch (e) { }
      }
    }
  });
};
