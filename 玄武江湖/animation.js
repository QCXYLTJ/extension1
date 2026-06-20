'use strict';
window.xwImport(function (lib, game, ui, get, ai, _status) {
	lib.xwjh_animations = {
		card_gang: {
			row: 2,
			column: 8,
			frame_count: 16,
			src: 'extension/玄武江湖/effect/card_gang.png',
			width: 180,
			height: 180,
			duration: 2000,
			reverse: false,
		},
		card_dongruoguanhuo: {
			row: 3,
			column: 5,
			frame_count: 11,
			src: 'extension/玄武江湖/effect/card_dongruoguanhuo.png',
			width: 180,
			height: 180,
			duration: 800,
			reverse: false,
		},
		buff_cuimai: {
			row: 4,
			column: 5,
			frame_count: 20,
			src: 'extension/玄武江湖/effect/buff_cuimai.png',
			width: 200,
			height: 200,
			duration: 1300,
			reverse: false,
		},
		buff_huanghu: {
			row: 1,
			column: 8,
			frame_count: 8,
			src: 'extension/玄武江湖/effect/buff_huanghu.png',
			width: 170,
			height: 170,
			duration: 800,
			reverse: false,
		},
		card_hanzhan: {
			row: 4,
			column: 5,
			frame_count: 16,
			src: 'extension/玄武江湖/effect/card_hanzhan.png',
			width: 180,
			height: 180,
			duration: 2000,
			reverse: false,
		},
		skill_xiangongwangyue: {
			row: 1,
			column: 16,
			frame_count: 16,
			src: 'extension/玄武江湖/effect/skill_xiangongwangyue.png',
			width: 150,
			height: 450,
			duration: 1200,
			reverse: false,
		},
		skill_qixing: {
			row: 1,
			column: 15,
			frame_count: 15,
			src: 'extension/玄武江湖/effect/skill_qixing.png',
			width: 130,
			height: 130,
			duration: 1200,
			reverse: false,
		},
		buff_neishang: {
			row: 10,
			column: 5,
			frame_count: 49,
			src: 'extension/玄武江湖/effect/buff_neishang.png',
			width: 180,
			height: 180,
			duration: 2000,
			reverse: false,
		},
		buff_zhongdu: {
			row: 3,
			column: 5,
			frame_count: 19,
			src: 'extension/玄武江湖/effect/buff_zhongdu.png',
			width: 180,
			height: 180,
			duration: 1200,
			reverse: false,
		},
		buff_dianxue: {
			row: 3,
			column: 5,
			frame_count: 13,
			src: 'extension/玄武江湖/effect/buff_dianxue.png',
			width: 180,
			height: 180,
			duration: 1200,
			reverse: false,
		},
		card_lihuazhen: {
			row: 17,
			column: 1,
			frame_count: 17,
			src: 'extension/玄武江湖/effect/card_lihuazhen.png',
			width: 800,
			height: 600,
			duration: 1200,
			reverse: false,
		},
		skill_gudu_ziyin: {
			row: 8,
			column: 1,
			frame_count: 8,
			src: 'extension/玄武江湖/effect/skill_gudu_ziyin.png',
			width: 360,
			height: 360,
			duration: 1000,
			reverse: false,
		},
		buff_yulu: {
			row: 1,
			column: 14,
			frame_count: 14,
			src: 'extension/玄武江湖/effect/buff_yulu.png',
			width: 400,
			height: 400,
			duration: 1500,
			reverse: false,
		},
		skill_youhuang: {
			row: 7,
			column: 5,
			frame_count: 35,
			src: 'extension/玄武江湖/effect/skill_youhuang.png',
			width: 180,
			height: 180,
			duration: 3000,
			reverse: false,
		},
		skill_xiangshihangongzhua: {
			row: 2,
			column: 2,
			frame_count: 4,
			src: 'extension/玄武江湖/effect/skill_xiangshihangongzhua.png',
			width: 180,
			height: 180,
			duration: 500,
			reverse: false,
		},
		skill_wuchi_chenwu3: {
			row: 3,
			column: 5,
			frame_count: 11,
			src: 'extension/玄武江湖/effect/skill_wuchi_chenwu3.png',
			width: 180,
			height: 180,
			duration: 1000,
			reverse: false,
		},
		skill_situyuntian_skin3: {
			row: 3,
			column: 5,
			frame_count: 11,
			src: 'extension/玄武江湖/effect/skill_situyuntian_skin3.png',
			width: 180,
			height: 180,
			duration: 1000,
			reverse: false,
		},
		skill_qianmian: {
			row: 3,
			column: 2,
			frame_count: 6,
			src: 'extension/玄武江湖/effect/skill_qianmian.png',
			width: 180,
			height: 180,
			duration: 600,
			reverse: true,
		},
		buff_miluan: {
			row: 5,
			column: 5,
			frame_count: 23,
			src: 'extension/玄武江湖/effect/buff_miluan.png',
			width: 180,
			height: 180,
			duration: 1500,
			reverse: false,
		},
		skill_lianshi: {
			row: 3,
			column: 5,
			frame_count: 19,
			src: 'extension/玄武江湖/effect/skill_lianshi.png',
			width: 180,
			height: 180,
			duration: 2000,
			reverse: false,
			black: true,
		},
		equip_sanqingpao: {
			row: 3,
			column: 5,
			frame_count: 14,
			src: 'extension/玄武江湖/effect/equip_sanqingpao.png',
			width: 180,
			height: 180,
			duration: 1200,
			reverse: false,
		},
		card_qilinjing: {
			row: 4,
			column: 5,
			frame_count: 21,
			src: 'extension/玄武江湖/effect/card_qilinjing.png',
			width: 180,
			height: 180,
			duration: 2000,
			reverse: false,
			black: true,
		},
		buff_zhuoshao: {
			row: 5,
			column: 5,
			frame_count: 21,
			src: 'extension/玄武江湖/effect/buff_zhuoshao.png',
			width: 180,
			height: 180,
			duration: 1300,
			reverse: false,
		},
		buff_xuekui: {
			row: 2,
			column: 5,
			frame_count: 10,
			src: 'extension/玄武江湖/effect/buff_xuekui.png',
			width: 180,
			height: 180,
			duration: 1000,
			reverse: false,
		},
		buff_silie: {
			row: 2,
			column: 5,
			frame_count: 7,
			src: 'extension/玄武江湖/effect/buff_silie.png',
			width: 180,
			height: 180,
			duration: 800,
			reverse: false,
		},
		buff_liuxie: {
			row: 3,
			column: 5,
			frame_count: 11,
			src: 'extension/玄武江湖/effect/buff_liuxie.png',
			width: 180,
			height: 180,
			duration: 1000,
			reverse: false,
		},
		buff_qingshen: {
			row: 1,
			column: 9,
			frame_count: 9,
			src: 'extension/玄武江湖/effect/buff_qingshen.png',
			width: 168.33,
			height: 122,
			duration: 500,
			reverse: false,
		},
		mp_consume: {
			row: 3,
			column: 5,
			frame_count: 11,
			src: 'extension/玄武江湖/effect/mp_consume.png',
			width: 180,
			height: 180,
			duration: 1200,
			reverse: true,
		},
		skill_baoyin: {
			row: 3,
			column: 5,
			frame_count: 15,
			src: 'extension/玄武江湖/effect/skill_baoyin.png',
			width: 180,
			height: 180,
			duration: 1200,
			reverse: false,
		},
		skill_luohanquan: {
			row: 2,
			column: 5,
			frame_count: 10,
			src: 'extension/玄武江湖/effect/skill_luohanquan.png',
			width: 180,
			height: 180,
			duration: 1200,
			reverse: false,
		},
	};
	game.xwAnim = {
		createAnim(obj) {
			if (typeof obj == 'string') {
				obj = lib.xwjh_animations[obj];
			}
			if (!obj) return ui.create.div();
			var ret = ui.create.div('.xwjh_animation');
			ret.style.backgroundImage = "url(\'" + obj.src + "\')";
			ret.style.backgroundSize = obj.column * 100 + '% ' + obj.row * 100 + '%';
			ret.style.backgroundPosition = '0% 0%';
			ret.style.width = obj.width + 'px';
			ret.style.height = obj.height + 'px';
			ret.xwjh_animation = obj;
			ret.xwjh_animation_frame = 0;
			ret.xwjh_animation_setFrame = function (m) {
				if (m == this.xwjh_animation_frame) return;
				var obj = this.xwjh_animation;
				if (obj.reverse) {
					if (m >= obj.frame_count) {
						m = obj.frame_count * 2 - m - 1;
					}
				} else {
					if (m >= obj.frame_count) {
						m = obj.frame_count - 1;
					} else if (m < 0) {
						m = 0;
					}
				}
				var row = Math.floor(m / obj.column);
				var column = m % obj.column;
				this.style.backgroundPosition = (obj.column == 1 ? 0 : ((column * 100) / (obj.column - 1)).toFixed(2)) + '% ' + (obj.row == 1 ? 0 : (row * 100) / (obj.row - 1)).toFixed(2) + '%';
				this.xwjh_animation_frame = m;
			};
			ret.xwjh_animation_stop = function () {
				if (this.animState) {
					this.animState.endAnim();
				}
				this.norepeat = true;
			};
			ret.xwjh_animation_play_repeat = function () {
				var that = this;
				this.norepeat = false;
				this.animState = lib.xwjh_animation_helper(
					0,
					this.xwjh_animation.frame_count * (this.xwjh_animation.reverse ? 2 : 1),
					this.xwjh_animation.duration,
					Math.round(this.xwjh_animation.duration / this.xwjh_animation.frame_count),
					function (value) {
						var frame = Math.floor(value);
						that.xwjh_animation_setFrame(frame);
					},
					function () {
						if (!that.norepeat) that.xwjh_animation_play_repeat();
					}
				);
			};
			ret.xwjh_animation_play = function (playerEndCallback) {
				var that = this;
				this.norepeat = true;
				this.animState = lib.xwjh_animation_helper(
					0,
					this.xwjh_animation.frame_count * (this.xwjh_animation.reverse ? 2 : 1),
					this.xwjh_animation.duration,
					Math.round(this.xwjh_animation.duration / this.xwjh_animation.frame_count),
					function (value) {
						var frame = Math.floor(value);
						that.xwjh_animation_setFrame(frame);
					},
					function () {
						if (playerEndCallback) {
							playerEndCallback();
						}
					}
				);
			};
			return ret;
		},
	};
});
