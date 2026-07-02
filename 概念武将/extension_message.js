'use strict';
window.zyile_import = function (lib, game, ui, get, ai, _status, config) {
	/**
	 * 仿照layui弹窗 暂无table类型
	 */
	window.zyile_extension_Menu.zyile_layer = {
		layer_msg: {
			name: '历史消息(msg)',
			onclick() {
				if (!lib.zyile_layer_msg_str) lib.zyile_layer_msg_str = '';
				lib.zyile_layer.openFull(lib.zyile_layer_msg_str.split('!~v~!').join('<li>'), {
					title: '历史消息提示(msg)',
					btn: ['已阅', '关闭'],
				});
			},
			intro: '记录msg的历史信息.',
			clear: true,
			init: true,
		},
		zyile_window_alert: {
			name: '更改弹窗',
			intro: '<li>更改window.alert弹窗(出现该框将不会暂停游戏</li>',
			item: {
				alert: '弹窗',
				msg: '消息',
				false: '关闭',
			},
			init: 'alert',
		},
		layer_progress: {
			name: '进度条请求帧加载',
			intro: '1.8版本安装包不建议开启.',
			init: false,
		},
		layer_iframe: {
			name: '打开子窗口',
			clear: true,
			clearAll: true,
			onclick() {
				lib.zyile_layer.prompt(
					{
						fromType: 1,
						title: '请输入路径,(默认为无名杀子窗口)',
						value: window.location.href,
					},
					function (val, index, input) {
						lib.zyile_layer.iframe({
							url: val,
							title: '无名杀(子窗口)',
							parentLayer: false,
						});
					}
				);
			},
		},
		info: '消息提示',
	};
	/**-------------------------------------------及时保存--------------------------------------------------**/
	for (var i in window.zyile_extension_Menu) {
		for (var j in window.zyile_extension_Menu[i]) {
			var info = window.zyile_extension_Menu[i];
			if (lib.config['extension_概念武将_' + j] === undefined && info[j] && info[j].hasOwn('init')) {
				lib.config['extension_概念武将_' + j] = info[j].init;
				game.saveConfig('extension_概念武将_' + j, lib.config['extension_概念武将_' + j]);
			}
		}
	}
	/**--------------------------------------------------------------------------------------------------**/
	var documentkeydown = function (event) {
		let layerAll = Array.from(document.querySelectorAll('.layui-layer')).filter(function (layer) {
			return layer.dataset.type === 'dialog';
		});
		layerAll.sort(function (a, b) {
			return b.style.zIndex - a.style.zIndex;
		});
		if (!layerAll.length) return;
		let layer = layerAll[0],
			obj = layer.options,
			notMin = layerAll.filter(function (Iay) {
				return !Iay.isMin;
			});
		if (!notMin.length) return undefined;
		(layer = notMin[0]), (obj = layer.options);
		if (!obj || !obj.keydown) return;
		event.stopPropagation();
		if (event.keyCode === 27) {
			layer.close();
		}
		if (event.keyCode === 13) obj.yes && obj.yes(layer, 0);
	};
	document.addEventListener('keydown', documentkeydown, true);
	var msgUI = ui.create.div(document.body, {
		pointerEvents: 'none',
		zIndex: 20201026e3,
		top: 0,
		right: 0,
		position: 'fixed',
	}),
		ClickZIndex = 202011060,
		parentClickZIndex = 20201009,
		updatexTimeout;
	lib.zyile_layer = {
		// 提示框
		alert(content, type) {
			var obj = {
				type: 3,
				icon: 3,
				title: '系统信息',
				btn: ['&#x786E;&#x5B9A;'],
				yes(layer) {
					layer.close();
				},
				closeBtn: true,
			};
			type = type || {};
			delete type.type;
			for (var i in type) {
				obj[i] = type[i];
			}
			return lib.zyile_layer.open(content, obj);
		},
		// 确认窗体
		confirm(content, callBack, t) {
			var obj = {
				icon: 3,
				type: 3,
				title: '系统提示(弹窗)',
				clickfocus: !1,
				btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;'],
				yes(layer, index) {
					layer.close(true);
					callBack && callBack(layer, index);
				},
				success(layer) {
					layer.style.zIndex = 202101160;
					'function' === typeof fn && fn.call(this, layer);
					fn = null;
				},
			},
				fn;
			t = t || {};
			fn = t.success;
			delete t.type, delete t.yes, delete t.success, delete t.clickfocus;
			for (let i in t) obj[i] = t[i];
			return lib.zyile_layer.open(content, obj);
		},
		// 对话框
		prompt(e, t) {
			e = e || {};
			let s,
				l = (function () {
					let type = 'input',
						node,
						keyFn = function (event) {
							e.filter && e.filter.call(node, event);
						};
					if (2 === e.formType) {
						type = 'textarea';
					}
					node = ui.create.zyile_node(type + '.layui-layer-input');
					node.addEventListener(
						'input',
						function (event) {
							e.input && e.input.call(node, event);
						},
						true
					);
					node.addEventListener(
						'focus',
						function () {
							window.addEventListener('keydown', keyFn, true);
						},
						true
					);
					node.addEventListener(
						'blur',
						function () {
							window.removeEventListener('keydown', keyFn, true);
						},
						true
					);
					node.setAttribute('value', e.value || '');
					node.setAttribute('type', 'text');
					node.value = e.value || '';
					return node;
				})(),
				f = e.success,
				r = e.resizing,
				obj = {
					type: 1,
					icon: -1,
					btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;'],
					resizing(layer) {
						layer.content.style.height = Math.max(60, layer.offsetHeight - layer.btn.offsetHeight - layer._title.offsetHeight) + 'px';
						var input = layer.querySelector('.layui-layer-input');
						(input.style.width = '100%'), (input.style.height = '100%');
						typeof r == 'function' && f(layer);
					},
					success(e) {
						lib.zyile_common.isMobile()
							? setTimeout(() => {
								e.style.top = 0;
								s.focus();
							}, 300)
							: null;
						s = e.querySelector('.layui-layer-input');
						s.focus();
						s.style.width = '100%';
						s.style.height = '100%';
						s.selectionStart = s.selectionEnd = s.value.length;
						'function' == typeof f && f(e, s);
					},
					resize: e.formType == 2 ? !0 : !1,
					yes(z, index) {
						var val = s.value;
						lib.zyile_common.isEmpty(val)
							? (s.focus(),
								lib.zyile_layer.tips('内容不能为空!', s, {
									tips: 1,
									time: 15e2,
								}))
							: val.length > (e.maxlength || 5e2)
								? (lib.zyile_layer.tips('最多输入' + (e.maxlength || 5e2) + '个字数', s, {
									tips: 1,
									time: 3e3,
								}),
									s.focus())
								: (z.close(), t && t(val, index, s));
					},
				};
			delete e.success, delete e.icon, delete e.type, delete e.resizing;
			for (let i in e) {
				obj[i] = e[i];
			}
			return lib.zyile_layer.open(l, obj);
		},
		// 消息框
		tips(content, el, options) {
			var obj = {
				tips: 1,
				type: 4,
				time: 3e3,
				color: null,
				title: false,
				parentLayer: false,
				maxWidth: 210,
				box: el.getBoundingClientRect(),
				boxZoom: 1,
				resize: false,
				fixed: true,
				closeBtn: false,
				clickfocus: !1,
			};
			options = options || {};
			delete options.clickfocus, delete options.type, delete options.icon, delete options.btn, delete options.title, delete options.fixed, delete options.resize, delete options.closeBtn;
			for (let i in options) obj[i] = options[i];
			return lib.zyile_layer.open(content, obj);
		},
		// 消息提示
		msg(content, options, fn) {
			if (!lib.zyile_layer_msg_str) lib.zyile_layer_msg_str = '';
			var obj = {
				type: 2,
				time: 2e3,
				icon: 0,
				maxWidth: 210,
				maxHeight: 200,
				title: false,
				end: typeof fn == 'function' ? fn : null,
				resize: false,
				fixed: true,
				keydown: false,
				closeBtn: true,
				parentLayer: false,
				clickfocus: !1,
				protype: 1,
			};
			options = options || {};
			delete options.parentLayer, delete options.clickfocus, delete options.type, delete options.btn, delete options.fixed, delete options.resize, delete options.keydown;
			for (var i in options) obj[i] = options[i];
			obj.time = obj.time * 1;
			var msg = lib.zyile_layer.open(content, obj);
			msg.css({
				top: 0,
				left: 0,
				display: 'block',
				position: 'relative',
				opacity: lib.zyile_common.isMobile() ? 1 : 0.9,
			});
			msg.parent.remove();
			!options.cancelclick && (msg.onclick = msg.close);
			var progress = lib.zyile_layer.progress(obj.protype, obj.time);
			progress.css({ height: '8px' });
			progress.classList.add('zyile_hidden');
			msg.appendChild(progress);
			if (!isNaN(obj.time) && obj.time > 0) {
				progress.classList.remove('zyile_hidden');
			}
			msg.addEventListener(lib.zyile_common.isMobile() ? 'touchmove' : 'mouseenter', function () {
				this.style.opacity = 1;
				progress.classList.add('zyile_hidden');
				progress.interId && clearInterval(progress.interId);
				clearTimeout(msg.timeoutId);
			});
			msg.addEventListener(lib.zyile_common.isMobile() ? 'touchend' : 'mouseleave', function () {
				this.style.opacity = 0.9;
				if (obj.time > 0) progress.classList.remove('zyile_hidden'), progress.onclose(1000), (msg.timeoutId = setTimeout(() => this.close(), 1000));
			});
			msgUI.insertBefore(msg, msgUI.firstChild);
			//+'\t'+date.getHours()+"时"+date.getMinutes()+"分"+date.getSeconds()+"秒:\t"
			lib.zyile_layer_msg_str = '!~v~!<span style="color:red;text-shadow: red 0px 0px 1px, red 0px 0px 1px, red 0px 0px 1px, red 0px 0px 1px, red 0px 0px 1px, red 0px 0px 1px, rgb(255, 255, 255) 0px 0px 1px;">' + new Date().toLocaleTimeString() + '</span>\t:' + content + lib.zyile_layer_msg_str;
			return msg;
		},
		msgBtn(content, options, fn) {
			options = options || {};
			var obj = {
				type: 5,
				icon: 0,
				btn: ['确认', '取消'],
				minWidth: 210,
				minHeight: 130,
				title: !1,
				resize: !1,
				fixed: !0,
				closeBtn: !1,
				parentLayer: !1,
				clickfocus: !1,
				end: typeof fn == 'function' ? fn : null,
			};
			delete options.fixed, delete options.closeBtn, delete options.resize, delete options.type, delete options.title;
			for (var i in options) obj[i] = options[i];
			return lib.zyile_layer.open(content, obj);
		},
		iframe(options) {
			var obj = {
				url: '',
				title: '无名杀',
				style: {
					width: '100%',
					height: '98%',
					top: 0,
					left: 0,
					maxHeight: '98%',
					maxWidth: '100%',
				},
				load(event) {
					layer.close();
					typeof t == 'function' && t.apply(this, arguments);
				},
				icon: -1,
			},
				t = options.load,
				layer = lib.zyile_layer.load(),
				iframe = document.createElement('iframe');
			options = options || {};
			delete options.icon, delete options.load;
			for (var i in options) obj[i] = options[i];
			if (obj.url.indexOf('www') !== -1 && obj.url.indexOf('file') === -1 && obj.url.indexOf('http') === -1) obj.url = 'http://' + obj.url;
			if (lib.zyile_common.isEmpty(obj.url)) iframe.src = document.location.href;
			(iframe.src = obj.url), HTMLDivElement.prototype.css.call(iframe, obj.style);
			iframe.addEventListener('load', obj.load, true);
			var openFull = lib.zyile_layer.openFull(iframe, obj, '80%', '80%');
			layer.parent.style.position = 'absolute';
			layer.style.position = 'absolute';
			openFull.content.appendChild(layer), openFull.content.appendChild(layer.parent);
			return openFull;
		},
		//全屏弹出
		openFull(content, options, width, height) {
			options = options || {};
			//如果是移动端,就使用自适应大小弹窗
			if (lib.zyile_common.isMobile()) {
				width = 'auto';
				height = 'auto';
			}
			if (lib.zyile_common.isEmpty(options.title)) {
				options.title = false;
			}
			if (lib.zyile_common.isEmpty(content)) {
				content = '无内容';
			}
			if (lib.zyile_common.isEmpty(width)) {
				width = 800;
			}
			if (lib.zyile_common.isEmpty(height)) {
				height = window.offsetHeight - 50;
			}
			if (lib.zyile_common.numValid(width)) width += 'px';
			if (lib.zyile_common.numValid(height)) height += 'px';
			var f = options.success,
				obj = {
					type: 3,
					area: [width, height],
					//不固定
					fixed: false,
					//辅助大小按钮
					maxmin: true,
					maxHeight: '100%',
					maxWidth: '100%',
					closeBtn: true,
					btn: ['确认', '关闭'],
					success(layer) {
						layer.max.click();
						typeof f == 'function' && f(layer);
					},
				};
			delete options.success, delete options.type, delete options.closeBtn, delete options.maxmin;
			for (var i in options) obj[i] = options[i];
			return lib.zyile_layer.open(content, obj);
		},
		//弹出窗口
		open(content, options, callback) {
			var obj = {
				area: null, //自定义高度和宽度
				maxWidth: '100%', //最大宽度
				maxHeight: '100%', //最大高度
				minWidth: null, //最小宽度
				minHeight: null, //最小高度
				icon: 3, //显示的图标
				tips: null, //是否是显示某个区域的提示框
				color: null, //i的颜色以及内容(content)的背景色
				box: null, //要在指定位置生成
				boxZoom: 1, //该元素是否有缩放
				anim: null, //动画
				title: '信息', //头部信息
				time: null, //自动消失(毫秒)
				btn: null, //生成按钮(array)一共四个按钮颜色
				closed: true, //点击框外即可关闭
				parentLayer: true, //生成外框
				keydown: true, //启用快捷键来确认关闭弹窗
				clickfocus: true, //点击获得聚焦
				resize: true, //是否可以改变大小
				resizing: null, //改变大小时发动的函数
				fixed: false, //是否固定
				closeBtn: true, //是否显示右上角x关闭
				maxmin: false, //是否显示辅助按钮
				yes: null, //确认按钮回调函数 必须是第一个按钮 [确认]
				cancel: null, //取消按钮回调函数 必须是第二个按钮 [取消]
				success: null, //加载完毕后执行的回调函数
				end: null, //关闭时执行的回调函数
			};
			if (Array.isArray(options) || (typeof options != 'number' && get.objtype(options) !== 'object')) throw new Error('Must be numeric property or object type');
			if (!options) options = {};
			if (typeof options === 'number') {
				obj.icon = options;
			} else if (get.objtype(options) === 'object' && options !== null) {
				for (var i in options) {
					obj[i] = options[i];
				}
			} else {
				throw new Error("'options' of null of illegal parameter");
			}
			var layer = ui.create.div('.layui-layer', { zIndex: ++ClickZIndex || 20201009, width: 'auto' }, document.body);
			layer.dataset.type = 'dialog';
			if (obj.maxWidth) {
				if (lib.zyile_common.numValid(obj.maxWidth)) obj.maxWidth += 'px';
				layer.style.maxWidth = obj.maxWidth;
			}
			if (obj.maxHeight) {
				if (lib.zyile_common.numValid(obj.maxHeight)) obj.maxHeight += 'px';
				layer.style.maxHeight = obj.maxHeight;
			}
			if (obj.minWidth) {
				if (lib.zyile_common.numValid(obj.minWidth)) obj.minWidth += 'px';
				layer.style.minWidth = obj.minWidth;
			}
			if (obj.minHeight) {
				if (lib.zyile_common.numValid(obj.minHeight)) obj.minHeight += 'px';
				layer.style.minHeight = obj.minHeight;
			}
			if (obj.anim) (layer.style.animation = obj.anim), (layer.style.WebkitAnimation = obj.anim);
			layer.parent = ui.create.div(
				{
					'background-color': 'rgb(0,0,0)',
					opacity: 0.3,
					width: '100%',
					height: '100%',
					left: 0,
					top: 0,
					zIndex: (parentClickZIndex += 1),
				},
				'.zyile_hidden',
				document.body
			);
			obj.time = obj.time * 1;
			layer.close = function (Yes) {
				layer.style.animation = 'layer-bounceOut .2s';
				layer.style.WebkitAnimation = 'layer-bounceOut .2s';
				setTimeout(function () {
					layer.remove();
					layer.parent.remove();
					obj.end && obj.end.call(layer, Yes);
				}, 200);
				window.removeEventListener('resize', layer.AutoPosition, true);
				!layer.classList.contains('layui-layer-tips') && window.setTimeout(lib.zyile_layer.updatex, 210);
			};
			setTimeout(() => {
				obj.closed && (layer.parent.onclick = layer.close);
			}, 100);
			layer._title = ui.create.div('.layui-layer-title.zyile_hidden', obj.title, layer);
			obj.parentLayer && layer.parent.classList.remove('zyile_hidden');
			if (obj.title !== false) layer._title.classList.remove('zyile_hidden');
			layer.content = ui.create.div('.layui-layer-content', layer);
			if (get.is.node(content)) layer.content.appendChild(content);
			else if (lib.zyile_common.htValid(content)) layer.content.innerHTML = content;
			else layer.content.appendChild(document.createTextNode(content));
			layer.content.finished = true;
			//设置内容部分的图标
			if (isNaN(obj.icon)) obj.icon = 3;
			if (obj.icon > -1) {
				layer.content.classList.add('layui-layer-padding');
				layer.content.i = ui.create.zyile_node(layer.content, 'i.layui-layer-ico.layui-layer-ico' + obj.icon, 0);
				if (lib.zyile_common.isMobile() && window.Proxy) {
					//粗略判断手机1.9版本
					layer.content.i.style.backgroundImage = window.zyile_layui_layer_ico + obj.icon;
				}
				layer.content.i.finished = true;
			}
			switch (obj.type) {
				case 1:
					layer.classList.add('layui-layer-prompt');
					break;
				case 2:
					layer.classList.add('layui-layer-dialog', 'layui-layer-border', 'layer-ext-moon', 'layer-ext-moon-msg');
					layer.dataset.type = '';
					setTimeout(() => {
						(layer.style.zIndex = 202010080), (layer.parent.style.zIndex = 202010070);
					}, 60);
					layer.style.setProperty('min-width', '200px', 'important'), layer.style.setProperty('min-height', 'auto', 'important');
					layer.close = function (Yes) {
						layer.css({
							overflow: 'hidden',
							height: layer.offsetHeight + 'px',
							animation: 'layer-HeightToZero 1s',
							WebkitAnimation: 'layer-HeightToZero 1s',
							minHeight: '',
						});
						setTimeout(function () {
							layer.remove();
							layer.parent.remove();
							obj.end && obj.end.call(layer, Yes);
						}, 1000);
						window.requestAnimationFrame(lib.zyile_layer.updatex);
					};
					setTimeout(() => {
						obj.closed && (layer.parent.onclick = layer.close);
					}, 100);
					break;
				case 3:
					layer.classList.add('layui-layer-dialog', 'layer-ext-moon');
					obj.clickfocus &&
						layer.addEventListener(lib.zyile_common.isMobile() ? 'touchstart' : 'mousedown', function (event) {
							++ClickZIndex;
							++parentClickZIndex;
							layer.css({
								zIndex: ClickZIndex,
							});
							layer.parent.css({
								zIndex: parentClickZIndex,
							});
						});
					break;
				case 4:
					layer.classList.add('layui-layer-tips', 'layer-ext-moon');
					layer.content.i.className = 'layui-layer-TipsG';
					layer.content.classList.remove('layui-layer-padding');
					layer.dataset.type = '';
					setTimeout(() => {
						(layer.style.zIndex = 202101161), (layer.parent.style.zIndex = 202101160);
					}, 60);
					var box = {
						left: obj.box.left * obj.boxZoom,
						right: obj.box.right * obj.boxZoom,
						top: obj.box.top * obj.boxZoom,
						bottom: obj.box.bottom * obj.boxZoom,
					},
						f = layer.content.i,
						where = [
							function () {
								f.classList.remove('layui-layer-TipsB'),
									f.classList.add('layui-layer-TipsT'),
									f.css({ 'border-right-color': obj.color }),
									layer.css({
										left: box.left + 'px',
										top: box.top - layer.offsetHeight - 10 + 'px',
									});
							},
							function () {
								f.classList.remove('layui-layer-TipsL'),
									f.classList.add('layui-layer-TipsR'),
									f.css({ 'border-bottom-color': obj.color }),
									layer.css({
										left: box.right + 10 + 'px',
										top: box.top + 'px',
									});
							},
							function () {
								f.classList.remove('layui-layer-TipsT'),
									f.classList.add('layui-layer-TipsB'),
									f.css({ 'border-right-color': obj.color }),
									layer.css({
										left: box.left + 'px',
										top: box.bottom + 10 + 'px',
									});
							},
							function () {
								f.classList.remove('layui-layer-TipsR'),
									f.classList.add('layui-layer-TipsL'),
									f.css({ 'border-bottom-color': obj.color }),
									layer.css({
										left: box.left - layer.offsetWidth - 10 + 'px',
										top: box.top + 10 + 'px',
									});
							},
						];
					function auto() {
						var ibox = f.getBoundingClientRect();
						if (box.top + layer.offsetHeight > ui.window.offsetHeight) {
							var top = ui.window.offsetHeight - layer.offsetHeight;
							layer.style.top = top - 10 + 'px';
							f.style.top = ibox.top - f.getBoundingClientRect().top + 'px';
						}
					}
					f.css = layer.css;
					layer.css({
						width: 'auto',
						height: 'auto',
					});
					where[obj.tips - 1](),
						requestAnimationFrame(auto),
						layer.content.css({
							'background-color': obj.tips[1] || '',
							'padding-right': obj.closeBtn ? '30px' : '',
						});
					break;
				case 5:
					layer.classList.add('layui-layer-hui');
					setTimeout(() => {
						(layer.style.zIndex = 202010090), (layer.parent.style.zIndex = 202010080);
					}, 60);
					break;
			}
			layer.x = ui.create.zyile_node('span.layui-layer-setwin', layer);
			layer.x.finished = true;
			//显示左上角辅助按钮
			if (obj.maxmin) {
				layer.min = ui.create.zyile_node('a.layui-layer-min', { display: 'inline-block', marginLeft: '5px' }, layer.x);
				layer.min.cite = ui.create.zyile_node(layer.min, 'cite');
				layer.max = ui.create.zyile_node('a.layui-layer-ico.layui-layer-max', { display: 'inline-block', marginLeft: '5px', marginRight: '5px' }, layer.x);
				layer.min.finished = true;
				layer.min.cite.finished = true;
				layer.max.finished = true;
				(layer.area = [layer.offsetWidth, layer.offsetHeight, layer.offsetLeft, layer.offsetTop, layer.content.offsetHeight]), (layer.content.area = [layer.content.offsetHeight]);
				layer.min.onclick = function (event) {
					layer.area = [layer.offsetWidth, layer.offsetHeight, layer.offsetLeft, layer.offsetTop, layer.content.offsetHeight];
					layer.content.area = [layer.content.offsetHeight];
					this.style.display = 'none';
					layer.isMin = true;
					layer.isMax = false;
					var height = Math.max(42, (layer._title && layer._title.offsetHeight) || 42);
					layer.css({
						height: height + 'px',
						overflow: 'hidden',
						left: 0,
						top: document.body.clientHeight - height + 'px',
						minWidth: '180px',
						minHeight: '42px',
						width: '180px',
					});
					layer.max.classList.add('layui-layer-maxmin');
					layer.parent.classList.add('zyile_hidden');
					lib.zyile_layer.updatex();
				};
				layer.max.onclick = function (event) {
					if (this.classList.contains('layui-layer-maxmin')) {
						layer.min.style.display = 'inline-block';
						layer.isMin = false;
						layer.isMax = true;
						obj.parentLayer && layer.parent.classList.remove('zyile_hidden');
						layer.css({
							width: layer.area[0] + 'px',
							height: layer.area[1] + 'px',
							left: layer.area[2] + 'px',
							top: layer.area[3] + 'px',
							minWidth: '',
							minHeight: '',
						});
						layer.content.css({
							height: layer.content.area[0] + 'px',
						});
						lib.zyile_layer.updatex();
					} else {
						layer.min.style.display = 'none';
						layer.isMin = false;
						layer.isMax = true;
						layer.area = [layer.offsetWidth, layer.offsetHeight, layer.offsetLeft, layer.offsetTop, layer.content.offsetHeight];
						layer.css({
							width: '100%', //document.body.clientWidth+'px',
							height: '100%', //document.body.clientHeight+'px',
							top: 0,
							left: 0,
						});
						var a = 0;
						if (layer._title && !isNaN(layer._title.offsetHeight)) a += layer._title.offsetHeight;
						if (layer.btn && !isNaN(layer.btn.offsetHeight)) a += layer.btn.offsetHeight;
						layer.content.area = [layer.content.offsetHeight];
						layer.content.css({
							height: layer.offsetHeight - a + 'px',
						});
						lib.zyile_layer.updatex();
						layer.parent.classList.add('zyile_hidden');
					}
					this.classList.toggle('layui-layer-maxmin');
				};
			}
			//显示左上角功能的图标
			if (obj.closeBtn) {
				layer.xa = ui.create.zyile_node('div.layui-layer-ico.layui-layer-close.layui-layer-close1', layer.x, layer.close);
				layer.xa.finished = true;
			}
			//显示按钮
			layer.btn = ui.create.div('.layui-layer-btn.layui-layer-btn-.zyile_hidden', layer);
			layer.btn.finished = true;
			if (obj.btn && obj.btn.length > 0) {
				layer.btn.classList.remove('zyile_hidden');
				for (let i = 0; i < obj.btn.length; i++) {
					let btn = ui.create.zyile_node('a.layui-layer-btn' + i, obj.btn[i], layer.btn, function (event) {
						event.stopPropagation();
						if (this.dataset.index === '0') {
							if (obj.yes) {
								obj.yes(layer, this.dataset.index);
							} else {
								(function () {
									layer.close();
								})();
							}
						}
						if (this.dataset.index === '1') {
							if (obj.cancel) {
								obj.cancel(layer, this.dataset.index);
							} else {
								(function () {
									layer.close();
								})();
							}
						}
						if (typeof obj['btn' + this.dataset.index] === 'function') obj['btn' + this.dataset.index](layer, this.dataset.index);
						//callback&&callback(this.dataset.index);
					});
					btn.dataset.index = i;
					btn.dataset.btn = obj.btn[i];
					btn.finished = true;
				}
			}
			/*
				设置居中
			*/
			if (layer.offsetHeight > document.body.clientHeight) layer.style.height = document.body.clientHeight + 'px';
			if (!obj.tips) {
				if (obj.area) {
					if (obj.area[0]) layer.style.width = obj.area[0];
					if (obj.area[1]) layer.style.height = obj.area[1];
				}
				//调整大小定位居中
				layer.AutoPosition = function () {
					if (layer.isMin) return undefined;
					//if(layer.isMax) layer.style.height='100%';
					layer.content.style.height = Math.max(60, layer.offsetHeight - layer.btn.offsetHeight - layer._title.offsetHeight) + 'px';
					//if(!obj.area) layer.style.height=layer._title.offsetHeight+layer.btn.offsetHeight+layer.content.offsetHeight+'px';
					lib.setScroll(layer.content);
					if (layer.dataset.type === 'dialog') (layer.style.top = (document.body.offsetHeight - layer.offsetHeight) / 2 + 'px'), (layer.style.left = (document.body.offsetWidth - layer.offsetWidth) / 2 + 'px');
				};
				layer.AutoPosition();
				window.requestAnimationFrame(layer.AutoPosition);
			}
			//设置拖拽
			if (!obj.fixed) {
				layer._title.style.cursor = 'move';
				window.zyile_dragZoom(layer, document.body, true);
			}
			//设置可是否可以拖动改变大小
			if (obj.resize) {
				var resize = ui.create.zyile_node('span.layui-layer-resize', layer);
				resize.finished = true;
				var disX,
					disY,
					resizeStart,
					t = obj,
					area,
					types = ['mousedown', 'mousemove', 'mouseup'];
				if (lib.zyile_common.isMobile()) types = ['touchstart', 'touchmove', 'touchend'];
				resize.addEventListener(types[0], function (e) {
					area = [layer.offsetWidth, layer.offsetHeight, layer.content.offsetHeight];
					e.preventDefault();
					if (e.touches && e.touches[0]) e = e.touches[0];
					(resizeStart = true), (disX = e.clientX / game.documentZoom), (disY = e.clientY / game.documentZoom);
					document.addEventListener(types[1], mousemove);
					document.addEventListener(types[2], mouseup);
				});
				var mousemove = function (event) {
					if (t.resize && resizeStart) {
						event.stopPropagation(), event.preventDefault();
						if (event.touches && event.touches[0]) event = event.touches[0];
						var a = event.clientX / game.documentZoom - disX,
							o = event.clientY / game.documentZoom - disY;
						layer.css({
							width: area[0] + a + 'px',
							height: area[1] + o + 'px',
						});
						layer.content.style.height = layer.offsetHeight - layer.btn.offsetHeight - layer._title.offsetHeight + 'px';
						t.resizing && t.resizing(layer);
					}
				};
				var mouseup = function (e) {
					if (resizeStart) {
						document.removeEventListener('mousemove', mousemove);
						document.removeEventListener('mouseup', mouseup);
						resizeStart = false;
					}
				};
			}
			typeof obj.time === 'number' &&
				obj.time > 0 &&
				(layer.timeoutId = setTimeout(function () {
					layer.close();
				}, obj.time));
			//加载完毕后执行的回调函数
			if (obj.success) obj.success(layer);
			layer.options = obj;
			return layer;
		},
		load() {
			var layer = ui.create.zyile_node('div.zyile_layer_Page', { zIndex: 20201016e2 }, document.body);
			layer.parent = ui.create.zyile_node('div.zyile_layer_blockUI', { zIndex: 20201015e2 }, document.body);
			var box = ui.create.zyile_node('div.loaderbox', layer);
			ui.create.zyile_node('span.loading-activity', box);
			box.appendChild(document.createTextNode('数据加载中...'));
			layer.remove = function () {
				layer.parent.remove.call(layer), layer.parent.remove();
			};
			layer.close = layer.remove;
			return layer;
		},
		updatex() {
			let layerAll = Array.from(document.querySelectorAll('.layui-layer')).filter(function (layer) {
				return layer.dataset.type === 'dialog';
			}),
				layerWidth = 0;
			layerAll.sort(function (a, b) {
				return b.style.zIndex - a.style.zIndex;
			});
			for (let i of layerAll) {
				if (i.isMin) {
					i.css({
						top: document.body.clientHeight - i.offsetHeight + 'px',
						left: layerWidth + 'px',
					});
					layerWidth += i.offsetWidth;
				}
				i.AutoPosition();
			}
		},
		progress(type, time) {
			type = type || 1;
			if (isNaN(type)) throw '参数必须是数字';
			let layer = ui.create.zyile_node('div.zyile-progress', document.body);
			let typeclass = 'info';
			if (type == 2) typeclass = 'success';
			if (type == 3) typeclass = 'warning';
			if (type == 4) typeclass = 'danger';
			layer.pro = ui.create.div('.zyile-progress-bar.zyile-progress-bar-' + typeclass, layer);
			layer.parent = ui.create.zyile_node('div');
			layer.close = layer.remove;
			layer.onclose = function (num) {
				if (num < 0) return void 0;
				if (game.getExtensionConfig('概念武将', 'layer_progress')) {
					var width = 0;
					layer.pro.style.transitionProperty = 'none';
					layer.interId = setInterval(function () {
						width++;
						layer.pro.style.width = width + '%';
						if (width == 100) clearInterval(layer.interId);
					}, num / 100);
				} else {
					layer.pro.style.width = 0;
					layer.pro.style.transition = 'width ' + num + 'ms';
					layer.pro.style.transitionProperty = 'width';
					window.requestAnimationFrame(function () {
						layer.pro.style.width = layer.offsetWidth + 'px';
					});
				}
			};
			isNaN(time) ? (time = 15e2) : time;
			layer.onclose(time);
			return layer;
		},
	};
	window.addEventListener(
		'resize',
		() => {
			if (updatexTimeout) clearInterval(updatexTimeout);
			updatexTimeout = window.setTimeout(() => {
				lib.zyile_layer.updatex();
				updatexTimeout = null;
			}, 3e2);
		},
		true
	);
	('use strict');
	window.zyile_content.push(function (lib, game, ui, get, ai, _status, config) {
		if (lib.zyile_common.isMobile() && window.StatusBar && window.StatusBar.hide) window.StatusBar.hide();
		let alertx = window.alert,
			prompt = game.prompt;
		window.alert = function (message, icon) {
			let alertstr = game.getExtensionConfig('概念武将', 'zyile_window_alert');
			if (lib.zyile_common.equals(alertstr, 'false')) return alertx.apply(window, arguments);
			message = message || 'undefined';
			message = message
				.toString()
				.replace(/<\/?.+?>|[\r\n]/g, '<br/>')
				.replace(/\\u/g, '');
			try {
				message = window.decodeURI(message);
			} catch (e) { }
			if (alertstr == 'alert')
				lib.zyile_layer.alert(message, {
					title: '无名杀',
					icon: icon || 0,
					fixed: !1,
					resize: !0,
					maxmin: !0,
					area: ['auto', 'auto'],
				});
			else if (alertstr == 'msg')
				lib.zyile_layer.msg(message, {
					title: '无名杀',
					icon: icon || 0,
					time: -1,
				});
			else
				lib.zyile_layer.alert(message, {
					title: '无名杀',
					icon: icon || 0,
					fixed: !1,
					resize: !0,
					maxmin: !0,
					area: ['auto', 'auto'],
				});
		};
		game.alert = function (str) {
			let alertstr = game.getExtensionConfig('概念武将', 'zyile_window_alert');
			if (lib.zyile_common.equals(alertstr, 'false')) return game.prompt(str, 'alert');
			if (alertstr == 'alert')
				lib.zyile_layer.alert(str, {
					title: '无名杀',
					icon: 0,
					fixed: !1,
					resize: !0,
					maxmin: !0,
					closed: !1,
					area: ['auto', 'auto'],
				});
			else if (alertstr == 'msg')
				lib.zyile_layer.msg(str, {
					title: '无名杀',
					icon: 0,
					time: -1,
					closed: !1,
				});
			else
				lib.zyile_layer.alert(str, {
					title: '无名杀',
					icon: 0,
					fixed: !1,
					resize: !0,
					maxmin: !0,
					closed: !1,
					area: ['auto', 'auto'],
				});
		};
		game.prompt = function () {
			let alertstr = game.getExtensionConfig('概念武将', 'zyile_window_alert');
			if (lib.zyile_common.equals(alertstr, 'false')) return prompt.apply(this, arguments);
			var str,
				input,
				forced,
				callback,
				noinput = false,
				str2 = '',
				btn = ['确认'],
				layerx,
				yes = function () {
					layerx.close();
					callback(input && input.value);
				},
				clickCancel = function (layer) {
					if (!forced) {
						layer.closed = true;
						callback(false);
						layer.close();
					}
				};
			for (let i = 0; i < arguments.length; i++) {
				if (arguments[i] == 'alert') {
					forced = true;
					callback = function () { };
					noinput = true;
				} else if (typeof arguments[i] == 'string') {
					if (arguments[i].indexOf('###') == 0) {
						var list = arguments[i].slice(3).split('###');
						str = list[0];
						str2 = list[1];
					} else str = arguments[i];
				} else if (typeof arguments[i] == 'boolean') {
					forced = arguments[i];
				} else if (typeof arguments[i] == 'function') {
					callback = arguments[i];
				}
			}
			if (!callback) {
				return;
			}
			let options = {
				btn: btn,
				closeBtn: !1,
				closed: !forced,
				cancel: clickCancel,
				title: str || '请输入',
				success(layer, i) {
					input = i;
					i.value = str2;
				},
				yes: yes,
				end(isYes) {
					if (typeof isYes === 'boolean' && isYes) return false;
					callback(false);
				},
			};
			if (!forced) btn.add('取消');
			else delete options.yes;
			if (noinput)
				return (layerx = lib.zyile_layer.alert(str, {
					title: '无名杀',
					cancel: clickCancel,
					closed: !forced,
					yes: yes,
					end: options.end,
				}));
			layerx = lib.zyile_layer.prompt(options, yes);
		};
	});
	////////////////////////////////////////////////////////////隔离区别看////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	window.zyile_layui_layer_ico0 = 'url(data:image/png;base64,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) !important';
	window.zyile_layui_layer_ico1 = 'url(data:image/png;base64,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) !important';
	window.zyile_layui_layer_ico2 = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAPZSURBVHjaxJe/byNVEMcHRyFKhSLEJSL8AS6ucWXrZt6mwr9mrNOSSIgqKHJxIv9AkOhs0RwSVSLxJ1BeTYoIBClIGUXkmqA1O7MJokgUELJOMoV3fWtnfeskEIqvZO97M/PRe2/ezIMz5yDReWMNooYH5401OHMOjBEuag6MCY43ivPapJoJ7prggQqeKuOVMl6p4KkJHpjgrjapdrxRnDem2BYzfSeCGQBWjGlPmS5VsK+M+yrYNcZtZVpXpnVj3FbBbjzWV6ZLY9ob2t4dYMEYO8Z0bUwn1nKbQbW8pIyggmCMoEygTMPfgqCMEFTLS9Zym8Z0MrTFzplzC7cFWFbBQ2WKQqb2wPcL1nIQVMswAwBYy8HA9wshU1uZIhU8PG+sLc8K8NgEA2M86tW91ZAJBr4PdwCAkAl6dW/VGI9MMIga3uM8gGUTDJTpRSilxV7dg38BAEIpLSrTCxMMzhtry9MAFlTw0BiPQikthlKCBMAYwVqvA04HiP+3huMpAAiltGiMRyp4eObcwgjgouaSdOkoU9Sre6uxAfTq3jD4JECOEgBjTANAr+6tKlNkjJ0kbgKwYkzXIVM7bTAKfg8AY0wDQMjUNqbri5pbuag5gOONIhjTnjGdDHy/MPD94Z7zmJMda+HWLQC2jHEnsU98xirEKbp3vFGE4Q3HdGktt5meaC1Ma0uZXinTsxkAninTK2vhVtrHuG+3qUyXxxvFedAm1VSwH1TLS0G1DIkmAEaOcyBGcybt076DanlJBfvapBqY4K4y7k9MyALIgxgbywEAZdw3wV2IC0tXJU6llDIApkHc+DZmK5nqmuABqOCpMW5PHLrRyc8AmAyYuSpjK8CZ2lbBUxiWVFp/Y0plp2ASOHNL3mCXaF0Zr/5zAGOapo9N8I//cwt2TOjnBzmEJpn6xoS+fbA0DMUbkzJ+p0xfPthFNAHwrgn+ZYLycFexcyNFTJ8b068D3y9ML0ZCaT2P26uZilHI1Dah54l9OvjAuTkT6hnjzsD3c8pxCiKcMXgMMGY7cA4ieZKoYkx/m195z/zKDA3JFIBRRyQOTHAqwG9P42WX8uvOq+kVza+A+ZXZWrKkv8vsCWMA42F6nT2Nbb4AiATHABIIbXqQBXC3pjQDwOQGwFwk5UezANy+Lc8H+ECZflSmn0bblANwu4fJdIC3IsFPjOl3Y/whaFbeD5oVmNT9n2Y3Ad4xoU9N8Bdj+lMFuwPn5rKC5wHM9jgV95EJfmaMnbiu9JXxyhi/iqT8SGV4Cd0HIP95zvTSmL5Xoa9DefLhy1rtbWOESMqQB/DPALRJU++PEICPAAAAAElFTkSuQmCC)!important';
	window.zyile_layui_layer_ico3 = 'url(data:image/png;base64,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)!important';
	window.zyile_layui_layer_ico4 = 'url(data:image/png;base64,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)!important';
	window.zyile_layui_layer_ico5 = 'url(data:image/png;base64,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)!important';
	window.zyile_layui_layer_ico6 = 'url(data:image/png;base64,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) !important';
	window.zyile_layui_layer_ico7 = 'url(data:image/png;base64,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) !important';
};
