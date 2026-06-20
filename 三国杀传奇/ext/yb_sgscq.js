game.import('card', function (lib, game, ui, get, ai, _status) {
	var skillcard = {
		name: 'skillcard', //武将包命名(必填)
		connect: true, //该武将包是否可以联机(必填)
		// connectBanned:['gz_ybsl_018zhangqing_feian','gz_ybslshen_002chenailin_feian','db_ybsp_038tengwu'],
		skill: {
			//-------------------------
			yb_sgscq_mouhai: {
				// equipSkill:true,
			},
			yb_sgscq_jikui: {
				// equipSkill:true,
			},
			yb_sgscq_pojia: {
				// equipSkill:true,
			},
			yb_sgscq_zhuiji: {
				// equipSkill:true,
			},
			yb_sgscq_chuanci: {
				// equipSkill:true,
			},
			yb_sgscq_anxi: {
				// equipSkill:true,
			},
			yb_sgscq_huiqiang: {
				// equipSkill:true,
			},
			yb_sgscq_zhongzhuang: {
				// equipSkill:true,
			},
			yb_sgscq_xuezhan: {
				// equipSkill:true,
			},
			yb_sgscq_jianyu: {
				// equipSkill:true,
			},
			yb_sgscq_shengzhen: {
				// equipSkill:true,
			},
			yb_sgscq_mouzhen: {
				// equipSkill:true,
			},
			yb_sgscq_zhanzhen: {
				// equipSkill:true,
			},
			yb_sgscq_yuzhen: {
				// equipSkill:true,
			},
			yb_sgscq_xueshang: {
				// equipSkill:true,
			},
			yb_sgscq_humei: {
				// equipSkill:true,
			},
			yb_sgscq_zhangshi: {
				// equipSkill:true,
			},
			yb_sgscq_hujiao: {
				// equipSkill:true,
			},
			yb_sgscq_zhangshi: {
				// equipSkill:true,
			},
			yb_sgscq_yulin: {
				// equipSkill:true,
			},
			yb_sgscq_heyi: {
				// equipSkill:true,
			},
			yb_sgscq_fulu: {
				// equipSkill:true,
			},
			yb_sgscq_shouye: {
				// equipSkill:true,
			},
			yb_sgscq_yinbing: {
				// equipSkill:true,
			},
			yb_sgscq_jianwu: {
				// equipSkill:true,
			},
			yb_sgscq_chengzhi: {
				// equipSkill:true,
			},
			yb_sgscq_kangkai: {
				// equipSkill:true,
			},
			yb_sgscq_rende: {
				// equipSkill:true,
			},
			yb_sgscq_paoxiao: {
				// equipSkill:true,
			},
			yb_sgscq_benghuai: {
				// equipSkill:true,
			},
			yb_sgscq_biyue: {
				// equipSkill:true,
			},
			yb_sgscq_luanji: {
				// equipSkill:true,
			},
			yb_sgscq_kuangfu: {
				// equipSkill:true,
			},
			yb_sgscq_luoyi: {
				// equipSkill:true,
			},
			yb_sgscq_duanchang: {
				// equipSkill:true,
			},
			yb_sgscq_fencheng: {
				// equipSkill:true,
			},
			yb_sgscq_hongyan: {
				// equipSkill:true,
			},
			yb_sgscq_guhuo: {
				// equipSkill:true,
			},
			yb_sgscq_xuanfeng: {
				// equipSkill:true,
			},
			yb_sgscq_dujin: {
				// equipSkill:true,
			},
			yb_sgscq_wusheng: {
				// equipSkill:true,
			},
			yb_sgscq_leiji: {
				// equipSkill:true,
			},
			yb_sgscq_guidao: {
				// equipSkill:true,
			},
			yb_sgscq_huangtian: {
				// equipSkill:true,
			},
			yb_sgscq_lijian: {
				// equipSkill:true,
			},
			yb_sgscq_tianming: {
				// equipSkill:true,
			},
			yb_sgscq_yinghun: {
				// equipSkill:true,
			},
			yb_sgscq_yaowu: {
				// equipSkill:true,
			},
			yb_sgscq_wushuang: {
				// equipSkill:true,
			},
			yb_sgscq_longdan: {
				// equipSkill:true,
			},
			yb_sgscq_tianyi: {
				// equipSkill:true,
			},
			yb_sgscq_fanjian: {
				// equipSkill:true,
			},
			yb_sgscq_yingzi: {
				// equipSkill:true,
			},
			yb_sgscq_weimu: {
				// equipSkill:true,
			},
			yb_sgscq_liuli: {
				// equipSkill:true,
			},
			yb_sgscq_guose: {
				// equipSkill:true,
			},
			yb_sgscq_tianxiang: {
				// equipSkill:true,
			},
			yb_sgscq_xiaoji: {
				// equipSkill:true,
			},
			yb_sgscq_anxu: {
				// equipSkill:true,
			},
			yb_sgscq_lianying: {
				// equipSkill:true,
			},
			yb_sgscq_qianxun: {
				// equipSkill:true,
			},
			yb_sgscq_wanbao: {
				// equipSkill:true,
			},
			yb_sgscq_yingbing: {
				// equipSkill:true,
			},
			yb_sgscq_spleiji: {
				// equipSkill:true,
			},
			yb_sgscq_spguidao: {
				// equipSkill:true,
			},
			yb_sgscq_tongji: {
				// equipSkill:true,
			},
			yb_sgscq_yicong: {
				// equipSkill:true,
			},
			yb_sgscq_jiang: {
				// equipSkill:true,
			},
			yb_sgscq_xingwu: {
				// equipSkill:true,
			},
			yb_sgscq_zhidao: {
				// equipSkill:true,
			},
			yb_sgscq_jili: {
				// equipSkill:true,
			},
			yb_sgscq_ganlu: {
				// equipSkill:true,
			},
			yb_sgscq_zhuiyi: {
				// equipSkill:true,
			},
			yb_sgscq_yinghun: {
				// equipSkill:true,
			},
			yb_sgscq_luanwu: {
				// equipSkill:true,
			},
			yb_sgscq_guixin: {
				// equipSkill:true,
			},
			yb_sgscq_shenfen: {
				// equipSkill:true,
			},
			yb_sgscq_feiying: {
				// equipSkill:true,
			},
			yb_sgscq_shenji: {
				// equipSkill:true,
			},
			yb_sgscq_wushengx: {
				// equipSkill:true,
			},
			yb_sgscq_moleiji: {
				// equipSkill:true,
			},
			yb_sgscq_mobenghuai: {
				// equipSkill:true,
			},
			yb_sgscq_moluanwu: {
				// equipSkill:true,
			},
			yb_sgscq_molijian: {
				// equipSkill:true,
			},
			yb_sgscq_moganglie: {
				// equipSkill:true,
			},
			yb_sgscq_mopaoxiao: {
				// equipSkill:true,
			},
			yb_sgscq_mokurou: {
				// equipSkill:true,
			},
			yb_sgscq_moxuanfeng: {
				// equipSkill:true,
			},
			yb_sgscq_motieji: {
				// equipSkill:true,
			},
			yb_sgscq_qiangxi: {
				// equipSkill:true,
			},
			yb_sgscq_xianzhen: {
				// equipSkill:true,
			},
			yb_sgscq_mingce: {
				// equipSkill:true,
			},
			yb_sgscq_yuanhu: {
				// equipSkill:true,
			},
			yb_sgscq_shiduan: {
				// equipSkill:true,
			},
			yb_sgscq_tuxi: {
				// equipSkill:true,
			},
			yb_sgscq_wuqian: {
				// equipSkill:true,
			},
			yb_sgscq_spluanji: {
				// equipSkill:true,
			},
			yb_sgscq_xueyi: {
				// equipSkill:true,
			},
			yb_sgscq_jianxiong: {
				// equipSkill:true,
			},
			yb_sgscq_chonge: {
				// equipSkill:true,
			},
			yb_sgscq_sijian: {
				// equipSkill:true,
			},
			yb_sgscq_jianying: {
				// equipSkill:true,
			},
			yb_sgscq_yijix: {
				// equipSkill:true,
			},
			yb_sgscq_tiandu: {
				// equipSkill:true,
			},
			yb_sgscq_shuangxiong: {
				// equipSkill:true,
			},
			yb_sgscq_pojun: {
				// equipSkill:true,
			},
			yb_sgscq_jijiaozhishi: {
				// equipSkill:true,
			},
			yb_sgscq_qiaobian: {
				// equipSkill:true,
			},
			yb_sgscq_zhongyong: {
				// equipSkill:true,
			},
			yb_sgscq_longyin: {
				// equipSkill:true,
			},
			yb_sgscq_zhengsu: {
				// equipSkill:true,
			},
			yb_sgscq_poxi: {
				// equipSkill:true,
			},
			yb_sgscq_huoji: {
				// equipSkill:true,
			},
			yb_sgscq_bazhen: {
				// equipSkill:true,
			},
			yb_sgscq_kanpo: {
				// equipSkill:true,
			},
			yb_sgscq_qicai: {
				// equipSkill:true,
			},
			yb_sgscq_longhun: {
				// equipSkill:true,
			},
			yb_sgscq_juejing: {
				// equipSkill:true,
			},
			yb_sgscq_shushen: {
				// equipSkill:true,
			},
			yb_sgscq_yongjue: {
				// equipSkill:true,
			},
			yb_sgscq_wuyan: {
				// equipSkill:true,
			},
			yb_sgscq_taiyi: {
				// equipSkill:true,
			},
			yb_sgscq_luoshen: {
				// equipSkill:true,
			},
			yb_sgscq_qingguo: {
				// equipSkill:true,
			},
			yb_sgscq_fangzhu: {
				// equipSkill:true,
			},
			yb_sgscq_songwei: {
				// equipSkill:true,
			},
			yb_sgscq_jiushi: {
				// equipSkill:true,
			},
			yb_sgscq_xunxun: {
				// equipSkill:true,
			},
			yb_sgscq_qice: {
				// equipSkill:true,
			},
			yb_sgscq_shefu: {
				// equipSkill:true,
			},
			yb_sgscq_chouce: {
				// equipSkill:true,
			},
			yb_sgscq_hunyuan: {
				// equipSkill:true,
			},
			yb_sgscq_zhongjian: {
				// equipSkill:true,
			},
			yb_sgscq_yanyu: {
				// equipSkill:true,
			},
			yb_sgscq_ganglie: {
				// equipSkill:true,
			},
			yb_sgscq_yizhong: {
				// equipSkill:true,
			},
			yb_sgscq_duanliang: {
				// equipSkill:true,
			},
			yb_sgscq_huashen: {
				// equipSkill:true,
			},
			yb_sgscq_xinsheng: {
				// equipSkill:true,
			},
			yb_sgscq_tianzhao: {
				// equipSkill:true,
			},
			yb_sgscq_guipu: {
				// equipSkill:true,
			},
			yb_sgscq_shengjie: {
				// equipSkill:true,
			},
			yb_sgscq_zhuikong: {
				// equipSkill:true,
			},
			yb_sgscq_zhiyan: {
				// equipSkill:true,
			},
			yb_sgscq_mozhi: {
				// equipSkill:true,
			},
			yb_sgscq_zhiheng: {
				// equipSkill:true,
			},
			yb_sgscq_qinyin: {
				// equipSkill:true,
			},
			yb_sgscq_yanshen: {
				// equipSkill:true,
			},
			yb_sgscq_kurou: {
				// equipSkill:true,
			},
			yb_sgscq_hujia: {
				// equipSkill:true,
			},
			yb_sgscq_yijue: {
				// equipSkill:true,
			},
			yb_sgscq_qixi: {
				// equipSkill:true,
			},
			yb_sgscq_qiangxuanfeng: {
				// equipSkill:true,
			},
			yb_sgscq_zhijian: {
				// equipSkill:true,
			},
			yb_sgscq_guzheng: {
				// equipSkill:true,
			},
			yb_sgscq_dimeng: {
				// equipSkill:true,
			},
			yb_sgscq_haoshi: {
				// equipSkill:true,
			},
			yb_sgscq_niepan: {
				// equipSkill:true,
			},
			yb_sgscq_keji: {
				// equipSkill:true,
			},
			yb_sgscq_quhu: {
				// equipSkill:true,
			},
			yb_sgscq_jieming: {
				// equipSkill:true,
			},
			yb_sgscq_hongyuan: {
				// equipSkill:true,
			},
			yb_sgscq_buqu: {
				// equipSkill:true,
			},
			yb_sgscq_xiansi: {
				// equipSkill:true,
			},
			yb_sgscq_liegong: {
				// equipSkill:true,
			},
			yb_sgscq_kuanggu: {
				// equipSkill:true,
			},
			yb_sgscq_enyuan: {
				// equipSkill:true,
			},
			yb_sgscq_jushoux: {
				// equipSkill:true,
			},
			yb_sgscq_zhongyan: {
				// equipSkill:true,
			},
			yb_sgscq_jieyin: {
				// equipSkill:true,
			},
			yb_sgscq_tieji: {
				// equipSkill:true,
			},
			yb_sgscq_zhenlie: {
				// equipSkill:true,
			},
			yb_sgscq_miji: {
				// equipSkill:true,
			},
			yb_sgscq_beidou: {
				// equipSkill:true,
			},
			yb_sgscq_jijiang: {
				// equipSkill:true,
			},
			yb_sgscq_wuhun: {
				// equipSkill:true,
			},
			yb_sgscq_wushen: {
				// equipSkill:true,
			},
			yb_sgscq_xianyong: {
				// equipSkill:true,
			},
			yb_sgscq_xueji: {
				// equipSkill:true,
			},
			yb_sgscq_qingnang: {
				// equipSkill:true,
			},
			yb_sgscq_jijiu: {
				// equipSkill:true,
			},
			yb_sgscq_gongxin: {
				// equipSkill:true,
			},
			yb_sgscq_shelie: {
				// equipSkill:true,
			},
			yb_sgscq_jiuyuan: {
				// equipSkill:true,
			},
			yb_sgscq_xuanlie: {
				// equipSkill:true,
			},
			yb_sgscq_qiangwu: {
				// equipSkill:true,
			},
			yb_sgscq_spliegong: {
				// equipSkill:true,
			},
			yb_sgscq_dangxian: {
				// equipSkill:true,
			},
			yb_sgscq_mumu: {
				// equipSkill:true,
			},
			yb_sgscq_duodao: {
				// equipSkill:true,
			},
			yb_sgscq_duanbing: {
				// equipSkill:true,
			},
			yb_sgscq_huoshou: {
				// equipSkill:true,
			},
			yb_sgscq_lieren: {
				// equipSkill:true,
			},
			yb_sgscq_zhengnan: {
				// equipSkill:true,
			},
			yb_sgscq_xiangzhan: {
				// equipSkill:true,
			},
			yb_sgscq_fengshi: {
				// equipSkill:true,
			},
			yb_sgscq_fengliang: {
				// equipSkill:true,
			},
			yb_sgscq_kunfen: {
				// equipSkill:true,
			},
			yb_sgscq_fangquan: {
				// equipSkill:true,
			},
			yb_sgscq_ruoyu: {
				// equipSkill:true,
			},
			yb_sgscq_guicai: {
				// equipSkill:true,
			},
			yb_sgscq_jueqing: {
				// equipSkill:true,
			},
			yb_sgscq_junxing: {
				// equipSkill:true,
			},
			yb_sgscq_shenggong: {
				// equipSkill:true,
			},
			yb_sgscq_shensu: {
				// equipSkill:true,
			},
			yb_sgscq_raoshe: {
				// equipSkill:true,
			},
			yb_sgscq_huxiao: {
				// equipSkill:true,
			},
			yb_sgscq_fuhun: {
				// equipSkill:true,
			},
			yb_sgscq_fengwu: {
				// equipSkill:true,
			},
			yb_sgscq_qixing: {
				// equipSkill:true,
			},
			yb_sgscq_shixue: {
				// equipSkill:true,
			},
			yb_sgscq_sptieji: {
				// equipSkill:true,
			},
			yb_sgscq_mashu: {
				// equipSkill:true,
			},
			yb_sgscq_baiyin: {
				// equipSkill:true,
			},
			yb_sgscq_lianpo: {
				// equipSkill:true,
			},
			yb_sgscq_tiaoxin: {
				// equipSkill:true,
			},
			yb_sgscq_tuntian: {
				// equipSkill:true,
			},
			yb_sgscq_quanji: {
				// equipSkill:true,
			},
			yb_sgscq_zhaoxin: {
				// equipSkill:true,
			},
			yb_sgscq_ranshang: {
				// equipSkill:true,
			},
			yb_sgscq_fuluan: {
				// equipSkill:true,
			},
			yb_sgscq_weiwuhun: {
				// equipSkill:true,
			},
		}, //技能(必填) ……………………!…!!!【…？.!!？？？？…………
		card: {
			yb_sgscq_mouhai: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
				// enable:true,
				// selectTarget:-1,
				// filterTarget:function (card,player,target){
				// return target==player;
				// },
				// modTarget:true,
				// allowMultiple:false,
				// content:function (){
				// if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
				// },
				// toself:true,
			},
			yb_sgscq_jikui: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_pojia: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhuiji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_chuanci: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_anxi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_huiqiang: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhongzhuang: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xuezhan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jianyu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shengzhen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill2',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_mouzhen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill2',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhanzhen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill2',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yuzhen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill2',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xueshang: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_humei: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhangshi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_hujiao: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhangshi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yulin: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill2',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_heyi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill2',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_fulu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill3',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shouye: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill3',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yinbing: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill3',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jianwu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill4',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_chengzhi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill4',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_kangkai: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill4',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_rende: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill3',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_paoxiao: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_benghuai: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_biyue: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill2',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_luanji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_kuangfu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill3',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_luoyi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_duanchang: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill4',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_fencheng: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_hongyan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_guhuo: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xuanfeng: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_dujin: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_wusheng: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_leiji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_guidao: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_huangtian: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_lijian: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_tianming: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yinghun: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yaowu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_wushuang: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_longdan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_tianyi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_fanjian: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yingzi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_weimu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_liuli: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_guose: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_tianxiang: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xiaoji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_anxu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_lianying: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_qianxun: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_wanbao: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yingbing: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_spleiji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_spguidao: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_tongji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yicong: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jiang: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill1',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xingwu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhidao: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jili: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_ganlu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhuiyi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yinghun: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_luanwu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_guixin: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shenfen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_feiying: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shenji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_wushengx: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_moleiji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_mobenghuai: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_moluanwu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_molijian: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_moganglie: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_mopaoxiao: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_mokurou: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_moxuanfeng: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_motieji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_qiangxi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xianzhen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_mingce: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yuanhu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shiduan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_tuxi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_wuqian: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_spluanji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xueyi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jianxiong: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_chonge: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_sijian: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jianying: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yijix: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_tiandu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shuangxiong: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_pojun: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jijiaozhishi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_qiaobian: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhongyong: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_longyin: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhengsu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_poxi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_huoji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_bazhen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_kanpo: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_qicai: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_longhun: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_juejing: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shushen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yongjue: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_wuyan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_taiyi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_luoshen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_qingguo: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_fangzhu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_songwei: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jiushi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xunxun: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_qice: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shefu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_chouce: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_hunyuan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhongjian: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yanyu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_ganglie: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yizhong: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_duanliang: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_huashen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xinsheng: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_tianzhao: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_guipu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shengjie: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhuikong: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhiyan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_mozhi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhiheng: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_qinyin: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yanshen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_kurou: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_hujia: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_yijue: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_qixi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_qiangxuanfeng: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhijian: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_guzheng: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_dimeng: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_haoshi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_niepan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_keji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_quhu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jieming: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_hongyuan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_buqu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xiansi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_liegong: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_kuanggu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_enyuan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jushoux: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhongyan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jieyin: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_tieji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhenlie: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_miji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_beidou: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jijiang: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_wuhun: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_wushen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xianyong: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xueji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_qingnang: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jijiu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_gongxin: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shelie: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jiuyuan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xuanlie: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_qiangwu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_spliegong: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_dangxian: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_mumu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_duodao: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_duanbing: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_huoshou: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_lieren: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhengnan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_xiangzhan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_fengshi: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_fengliang: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_kunfen: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_fangquan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_ruoyu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_guicai: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_jueqing: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_junxing: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shenggong: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shensu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_raoshe: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_huxiao: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_fuhun: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_fengwu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_qixing: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_shixue: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_sptieji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_mashu: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_baiyin: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_lianpo: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_tiaoxin: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_tuntian: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_quanji: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_zhaoxin: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_ranshang: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_fuluan: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			yb_sgscq_weiwuhun: {
				fullskin: true,
				type: 'sgscq_skill',
				subtype: 'sgscq_skill5',
				skills: ['yb_sgscq_mouhai'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
		},
		translate: {
			sgscq_skill: '技能',
			sgscq_skill1: '主动技能',
			sgscq_skill2: '被动技能',
			sgscq_skill3: '控场技能',
			sgscq_skill4: '卖血技能',
			//----------------------银技
			//----------------------银技主动
			yb_sgscq_mouhai: '谋害',
			yb_sgscq_mouhai_info: '谋害描述.',
			yb_sgscq_jikui: '击溃',
			yb_sgscq_jikui_info: '击溃描述.',
			yb_sgscq_pojia: '破甲',
			yb_sgscq_pojia_info: '破甲描述.',
			yb_sgscq_zhuiji: '追击',
			yb_sgscq_zhuiji_info: '追击描述.',
			yb_sgscq_chuanci: '穿刺',
			yb_sgscq_chuanci_info: '穿刺描述.',
			yb_sgscq_anxi: '暗袭',
			yb_sgscq_anxi_info: '暗袭描述.',
			yb_sgscq_huiqiang: '回枪',
			yb_sgscq_huiqiang_info: '回枪描述.',
			yb_sgscq_zhongzhuang: '重装',
			yb_sgscq_zhongzhuang_info: '重装描述.',
			yb_sgscq_xuezhan: '血斩',
			yb_sgscq_xuezhan_info: '血斩描述.',
			yb_sgscq_jianyu: '箭雨',
			yb_sgscq_jianyu_info: '箭雨描述.',
			//----------------------银技被动
			yb_sgscq_shengzhen: '生阵',
			yb_sgscq_shengzhen_info: '生阵描述.',
			yb_sgscq_mouzhen: '谋阵',
			yb_sgscq_mouzhen_info: '谋阵描述.',
			yb_sgscq_zhanzhen: '斩阵',
			yb_sgscq_zhanzhen_info: '斩阵描述.',
			yb_sgscq_yuzhen: '御阵',
			yb_sgscq_yuzhen_info: '御阵描述.',
			//----------------------金技
			//----------------------金技主动
			//----------------------金技指向型主动
			yb_sgscq_xueshang: '血殇',
			yb_sgscq_xueshang_info: '血殇描述.',
			yb_sgscq_humei: '虎媚', //小虎
			yb_sgscq_humei_info: '虎媚描述.',
			//----------------------金技范围型主动
			yb_sgscq_zhangshi: '仗势',
			yb_sgscq_zhangshi_info: '仗势描述.',
			yb_sgscq_hujiao: '虎娇', //大虎
			yb_sgscq_hujiao_info: '虎娇描述.',
			yb_sgscq_zhangshi: '仗势',
			yb_sgscq_zhangshi_info: '仗势描述.',
			//----------------------金技被动
			//----------------------金技增益型被动
			yb_sgscq_yulin: '鱼鳞',
			yb_sgscq_yulin_info: '鱼鳞描述.',
			yb_sgscq_heyi: '鹤翼',
			yb_sgscq_heyi_info: '鹤翼描述.',
			//----------------------金技特效型被动
			//----------------------金技控场
			//----------------------金技前控场阶段
			yb_sgscq_fulu: '符箓',
			yb_sgscq_fulu_info: '符箓描述.',
			yb_sgscq_shouye: '授业',
			yb_sgscq_shouye_info: '授业描述.',
			yb_sgscq_yinbing: '引兵',
			yb_sgscq_yinbing_info: '引兵描述.',
			//----------------------金技后控场阶段
			//----------------------金技卖血
			//----------------------金技常规型卖血
			//----------------------金技亡语型卖血
			yb_sgscq_jianwu: '剑舞', //侍女队长
			yb_sgscq_jianwu_info: '剑舞描述.',
			yb_sgscq_chengzhi: '承志', //陆延
			yb_sgscq_chengzhi_info: '承志描述.',
			yb_sgscq_kangkai: '慷慨', //曹昂
			yb_sgscq_kangkai_info: '慷慨描述.',
			//----------------------神下
			yb_sgscq_rende: '仁德',
			yb_sgscq_rende_info: '仁德描述.',
			yb_sgscq_paoxiao: '咆哮',
			yb_sgscq_paoxiao_info: '咆哮描述.',
			yb_sgscq_benghuai: '崩坏',
			yb_sgscq_benghuai_info: '崩坏描述.',
			yb_sgscq_biyue: '闭月',
			yb_sgscq_biyue_info: '闭月描述.',
			yb_sgscq_luanji: '乱击',
			yb_sgscq_luanji_info: '乱击描述.',
			yb_sgscq_kuangfu: '狂斧',
			yb_sgscq_kuangfu_info: '狂斧描述.',
			yb_sgscq_luoyi: '裸衣',
			yb_sgscq_luoyi_info: '裸衣描述.',
			yb_sgscq_duanchang: '断肠',
			yb_sgscq_duanchang_info: '断肠描述.',
			yb_sgscq_fencheng: '焚城',
			yb_sgscq_fencheng_info: '焚城描述.',
			yb_sgscq_hongyan: '红颜',
			yb_sgscq_hongyan_info: '红颜描述.',
			yb_sgscq_guhuo: '蛊惑',
			yb_sgscq_guhuo_info: '蛊惑描述.',
			yb_sgscq_xuanfeng: '旋风',
			yb_sgscq_xuanfeng_info: '旋风描述.',
			yb_sgscq_dujin: '独进',
			yb_sgscq_dujin_info: '独进描述.',
			//----------------------神上
			yb_sgscq_wusheng: '武圣',
			yb_sgscq_wusheng_info: '武圣描述.',
			yb_sgscq_leiji: '雷击',
			yb_sgscq_leiji_info: '雷击描述.',
			yb_sgscq_guidao: '鬼道',
			yb_sgscq_guidao_info: '鬼道描述.',
			yb_sgscq_huangtian: '黄天',
			yb_sgscq_huangtian_info: '黄天描述.',
			yb_sgscq_lijian: '离间',
			yb_sgscq_lijian_info: '离间描述.',
			yb_sgscq_tianming: '天命',
			yb_sgscq_tianming_info: '天命描述.',
			yb_sgscq_yinghun: '英魂',
			yb_sgscq_yinghun_info: '英魂描述.',
			yb_sgscq_yaowu: '耀武',
			yb_sgscq_yaowu_info: '耀武描述.',
			yb_sgscq_wushuang: '无双',
			yb_sgscq_wushuang_info: '无双描述.',
			yb_sgscq_longdan: '龙胆',
			yb_sgscq_longdan_info: '龙胆描述.',
			yb_sgscq_tianyi: '天义',
			yb_sgscq_tianyi_info: '天义描述.',
			yb_sgscq_fanjian: '反间',
			yb_sgscq_fanjian_info: '反间描述.',
			yb_sgscq_yingzi: '英姿',
			yb_sgscq_yingzi_info: '英姿描述.', //控场技,前控场阶段
			yb_sgscq_weimu: '帷幕',
			yb_sgscq_weimu_info: '帷幕描述.', //被动技,加成类被动
			yb_sgscq_liuli: '流离',
			yb_sgscq_liuli_info: '流离描述.',
			yb_sgscq_guose: '国色',
			yb_sgscq_guose_info: '国色描述.', //控场技,前控场阶段
			yb_sgscq_tianxiang: '天香',
			yb_sgscq_tianxiang_info: '天香描述.',
			yb_sgscq_xiaoji: '枭姬',
			yb_sgscq_xiaoji_info: '枭姬描述.',
			yb_sgscq_anxu: '安恤',
			yb_sgscq_anxu_info: '安恤描述.',
			yb_sgscq_lianying: '连营',
			yb_sgscq_lianying_info: '连营描述.',
			yb_sgscq_qianxun: '谦逊',
			yb_sgscq_qianxun_info: '谦逊描述.',
			yb_sgscq_wanbao: '完暴', //离谱吧,贾诩的缘分技能,所以应该叫完杀才对
			yb_sgscq_wanbao_info: '完暴描述.',
			//----------------------神绝
			yb_sgscq_yingbing: '影兵',
			yb_sgscq_yingbing_info: '影兵描述.',
			yb_sgscq_spleiji: '雷击',
			yb_sgscq_spleiji_info: 'SP雷击描述.',
			yb_sgscq_spguidao: '鬼道',
			yb_sgscq_spguidao_info: 'SP鬼道描述.',
			yb_sgscq_tongji: '同疾',
			yb_sgscq_tongji_info: '同疾描述.',
			yb_sgscq_yicong: '义从',
			yb_sgscq_yicong_info: '义从描述.',
			yb_sgscq_jiang: '激昂',
			yb_sgscq_jiang_info: '激昂描述.',
			yb_sgscq_xingwu: '星舞',
			yb_sgscq_xingwu_info: '星舞描述.',
			yb_sgscq_zhidao: '雉盗',
			yb_sgscq_zhidao_info: '雉盗描述.',
			yb_sgscq_jili: '寄篱',
			yb_sgscq_jili_info: '寄篱描述.',
			yb_sgscq_ganlu: '甘露',
			yb_sgscq_ganlu_info: '甘露描述.',
			yb_sgscq_zhuiyi: '追忆',
			yb_sgscq_zhuiyi_info: '追忆描述.',
			yb_sgscq_yinghun: '英魂',
			yb_sgscq_yinghun_info: '英魂描述.',
			yb_sgscq_luanwu: '乱武',
			yb_sgscq_luanwu_info: '乱武描述.',
			yb_sgscq_guixin: '归心',
			yb_sgscq_guixin_info: '归心描述.',
			yb_sgscq_shenfen: '神愤',
			yb_sgscq_shenfen_info: '神愤描述.',
			yb_sgscq_feiying: '飞影',
			yb_sgscq_feiying_info: '飞影描述.',
			yb_sgscq_shenji: '神戟',
			yb_sgscq_shenji_info: '神戟描述.',
			yb_sgscq_wushengx: '武圣',
			yb_sgscq_wushengx_info: '隐藏武圣描述.',
			//----------------------魔技
			yb_sgscq_moleiji: '雷击',
			yb_sgscq_moleiji_info: '魔雷击描述.',
			yb_sgscq_mobenghuai: '崩坏',
			yb_sgscq_mobenghuai_info: '魔崩坏描述.',
			yb_sgscq_moluanwu: '乱武',
			yb_sgscq_moluanwu_info: '魔乱武描述.',
			yb_sgscq_molijian: '离间',
			yb_sgscq_molijian_info: '魔离间描述.',
			yb_sgscq_moganglie: '刚烈',
			yb_sgscq_moganglie_info: '魔刚烈描述.',
			yb_sgscq_mopaoxiao: '咆哮',
			yb_sgscq_mopaoxiao_info: '魔咆哮描述 .',
			yb_sgscq_mokurou: '苦肉',
			yb_sgscq_mokurou_info: '魔苦肉描述.',
			yb_sgscq_moxuanfeng: '旋风',
			yb_sgscq_moxuanfeng_info: '魔旋风描述.',
			yb_sgscq_motieji: '铁骑',
			yb_sgscq_motieji_info: '魔铁骑描述.',
			//
			yb_sgscq_qiangxi: '强袭',
			yb_sgscq_qiangxi_info: '强袭描述.',
			yb_sgscq_xianzhen: '陷阵',
			yb_sgscq_xianzhen_info: '陷阵描述.', //QQQ
			yb_sgscq_mingce: '明策',
			yb_sgscq_mingce_info: '明策描述.',
			yb_sgscq_yuanhu: '援护',
			yb_sgscq_yuanhu_info: '援护描述.',
			yb_sgscq_shiduan: '识断',
			yb_sgscq_shiduan_info: '识断描述.',
			yb_sgscq_tuxi: '突袭',
			yb_sgscq_tuxi_info: '突袭描述.',
			yb_sgscq_wuqian: '无前',
			yb_sgscq_wuqian_info: '无前描述.',
			yb_sgscq_spluanji: '乱击',
			yb_sgscq_spluanji_info: 'SP乱击描述.',
			yb_sgscq_xueyi: '血裔',
			yb_sgscq_xueyi_info: '血裔描述.',
			yb_sgscq_jianxiong: '奸雄',
			yb_sgscq_jianxiong_info: '奸雄描述.',
			yb_sgscq_chonge: '冲轭',
			yb_sgscq_chonge_info: '冲轭描述.',
			yb_sgscq_sijian: '死谏',
			yb_sgscq_sijian_info: '死谏描述.',
			yb_sgscq_jianying: '渐营',
			yb_sgscq_jianying_info: '渐营描述.',
			yb_sgscq_yijix: '遗计',
			yb_sgscq_yijix_info: '遗计描述.',
			yb_sgscq_tiandu: '天妒',
			yb_sgscq_tiandu_info: '天妒描述.',
			yb_sgscq_shuangxiong: '双雄',
			yb_sgscq_shuangxiong_info: '双雄描述.',
			yb_sgscq_pojun: '破军',
			yb_sgscq_pojun_info: '破军描述.',
			yb_sgscq_jijiaozhishi: '犄角之势',
			yb_sgscq_jijiaozhishi_info: '犄角之势描述.',
			yb_sgscq_qiaobian: '巧变',
			yb_sgscq_qiaobian_info: '巧变描述.',
			yb_sgscq_zhongyong: '忠勇',
			yb_sgscq_zhongyong_info: '忠勇描述.',
			yb_sgscq_longyin: '龙吟',
			yb_sgscq_longyin_info: '龙吟描述.',
			yb_sgscq_zhengsu: '整肃',
			yb_sgscq_zhengsu_info: '整肃描述.',
			yb_sgscq_poxi: '破袭',
			yb_sgscq_poxi_info: '破袭描述.',
			yb_sgscq_huoji: '火计',
			yb_sgscq_huoji_info: '火计描述.',
			yb_sgscq_bazhen: '八阵',
			yb_sgscq_bazhen_info: '八阵描述.',
			yb_sgscq_kanpo: '看破',
			yb_sgscq_kanpo_info: '看破描述.',
			yb_sgscq_qicai: '奇才',
			yb_sgscq_qicai_info: '奇才描述.',
			yb_sgscq_longhun: '龙魂',
			yb_sgscq_longhun_info: '龙魂描述.',
			yb_sgscq_juejing: '绝境',
			yb_sgscq_juejing_info: '绝境描述.', //QQQ
			yb_sgscq_shushen: '淑慎',
			yb_sgscq_shushen_info: '淑慎描述.',
			yb_sgscq_yongjue: '勇决',
			yb_sgscq_yongjue_info: '勇决描述.',
			yb_sgscq_wuyan: '无言',
			yb_sgscq_wuyan_info: '无言描述.',
			yb_sgscq_taiyi: '太乙',
			yb_sgscq_taiyi_info: '太乙描述.',
			yb_sgscq_luoshen: '洛神',
			yb_sgscq_luoshen_info: '洛神描述.',
			yb_sgscq_qingguo: '倾国',
			yb_sgscq_qingguo_info: '倾国描述.',
			yb_sgscq_fangzhu: '放逐',
			yb_sgscq_fangzhu_info: '放逐描述.',
			yb_sgscq_songwei: '颂威',
			yb_sgscq_songwei_info: '颂威描述.',
			yb_sgscq_jiushi: '酒诗',
			yb_sgscq_jiushi_info: '酒诗描述.',
			yb_sgscq_xunxun: '恂恂',
			yb_sgscq_xunxun_info: '恂恂描述.',
			yb_sgscq_qice: '奇策',
			yb_sgscq_qice_info: '奇策描述.',
			yb_sgscq_shefu: '设伏',
			yb_sgscq_shefu_info: '设伏描述.',
			yb_sgscq_chouce: '筹才', //逆天吧,戏志才的先天技能,应该叫筹策的
			yb_sgscq_chouce_info: '筹才描述.',
			yb_sgscq_hunyuan: '混元', //形意太极门掌门人……
			yb_sgscq_hunyuan_info: '混元描述.',
			yb_sgscq_zhongjian: '忠鉴',
			yb_sgscq_zhongjian_info: '忠鉴描述.',
			yb_sgscq_yanyu: '燕语',
			yb_sgscq_yanyu_info: '燕语描述.',
			yb_sgscq_ganglie: '刚烈',
			yb_sgscq_ganglie_info: '刚烈描述.',
			yb_sgscq_yizhong: '毅重',
			yb_sgscq_yizhong_info: '毅重描述.',
			yb_sgscq_duanliang: '断粮',
			yb_sgscq_duanliang_info: '断粮描述.',
			yb_sgscq_huashen: '化身',
			yb_sgscq_huashen_info: '化身描述.',
			yb_sgscq_xinsheng: '新生',
			yb_sgscq_xinsheng_info: '新生描述.',
			yb_sgscq_tianzhao: '天照',
			yb_sgscq_tianzhao_info: '天照描述.',
			yb_sgscq_guipu: '鬼仆',
			yb_sgscq_guipu_info: '鬼仆描述.',
			yb_sgscq_shengjie: '圣洁',
			yb_sgscq_shengjie_info: '圣洁描述.',
			yb_sgscq_zhuikong: '惴恐',
			yb_sgscq_zhuikong_info: '惴恐描述.',
			yb_sgscq_zhiyan: '直言',
			yb_sgscq_zhiyan_info: '直言描述.',
			yb_sgscq_mozhi: '默识',
			yb_sgscq_mozhi_info: '默识描述.',
			yb_sgscq_zhiheng: '制衡',
			yb_sgscq_zhiheng_info: '制衡描述.',
			yb_sgscq_qinyin: '琴音',
			yb_sgscq_qinyin_info: '琴音描述.',
			yb_sgscq_yanshen: '炎神', //神周瑜缘分技能.这玩意不是应该叫业炎吗
			yb_sgscq_yanshen_info: '炎神描述.',
			yb_sgscq_kurou: '苦肉',
			yb_sgscq_kurou_info: '苦肉描述.',
			yb_sgscq_hujia: '护驾',
			yb_sgscq_hujia_info: '护驾描述.',
			yb_sgscq_yijue: '义绝',
			yb_sgscq_yijue_info: '义绝描述.',
			yb_sgscq_qixi: '奇袭',
			yb_sgscq_qixi_info: '奇袭描述.',
			yb_sgscq_qiangxuanfeng: '旋风',
			yb_sgscq_qiangxuanfeng_info: '枪旋风描述.',
			yb_sgscq_zhijian: '直谏',
			yb_sgscq_zhijian_info: '直谏描述.',
			yb_sgscq_guzheng: '固政',
			yb_sgscq_guzheng_info: '固政描述.',
			yb_sgscq_dimeng: '缔盟',
			yb_sgscq_dimeng_info: '缔盟描述.',
			yb_sgscq_haoshi: '好施',
			yb_sgscq_haoshi_info: '好施描述.',
			yb_sgscq_niepan: '涅槃',
			yb_sgscq_niepan_info: '涅槃描述.',
			yb_sgscq_keji: '克己',
			yb_sgscq_keji_info: '克己描述.',
			yb_sgscq_quhu: '驱虎',
			yb_sgscq_quhu_info: '驱虎描述.',
			yb_sgscq_jieming: '节命',
			yb_sgscq_jieming_info: '节命描述.',
			yb_sgscq_hongyuan: '弘援',
			yb_sgscq_hongyuan_info: '弘援描述.',
			yb_sgscq_buqu: '不屈',
			yb_sgscq_buqu_info: '不屈描述.',
			yb_sgscq_xiansi: '陷嗣',
			yb_sgscq_xiansi_info: '陷嗣描述.',
			yb_sgscq_liegong: '烈弓',
			yb_sgscq_liegong_info: '烈弓描述.',
			yb_sgscq_kuanggu: '狂骨',
			yb_sgscq_kuanggu_info: '狂骨描述.',
			yb_sgscq_enyuan: '恩怨',
			yb_sgscq_enyuan_info: '恩怨描述..',
			yb_sgscq_jushoux: '据守',
			yb_sgscq_jushoux_info: '据守描述.',
			yb_sgscq_zhongyan: '忠言',
			yb_sgscq_zhongyan_info: '忠言描述.',
			yb_sgscq_jieyin: '结姻',
			yb_sgscq_jieyin_info: '结姻描述.',
			yb_sgscq_tieji: '铁骑',
			yb_sgscq_tieji_info: '铁骑描述.',
			yb_sgscq_zhenlie: '贞烈',
			yb_sgscq_zhenlie_info: '贞烈描述.',
			yb_sgscq_miji: '秘计',
			yb_sgscq_miji_info: '秘计描述.',
			yb_sgscq_beidou: '北斗',
			yb_sgscq_beidou_info: '北斗描述.',
			yb_sgscq_jijiang: '激将',
			yb_sgscq_jijiang_info: '激将描述.',
			yb_sgscq_wuhun: '武魂',
			yb_sgscq_wuhun_info: '武魂描述.',
			yb_sgscq_wushen: '武神',
			yb_sgscq_wushen_info: '武神描述,',
			yb_sgscq_xianyong: '贤勇',
			yb_sgscq_xianyong_info: '贤勇描述.',
			yb_sgscq_xueji: '血祭',
			yb_sgscq_xueji_info: '血祭描述.',
			yb_sgscq_qingnang: '青囊',
			yb_sgscq_qingnang_info: '青囊描述.',
			yb_sgscq_jijiu: '急救',
			yb_sgscq_jijiu_info: '急救描述.',
			yb_sgscq_gongxin: '攻心',
			yb_sgscq_gongxin_info: '攻心描述.',
			yb_sgscq_shelie: '涉猎',
			yb_sgscq_shelie_info: '涉猎描述.',
			yb_sgscq_jiuyuan: '救援',
			yb_sgscq_jiuyuan_info: '救援描述.',
			yb_sgscq_xuanlie: '宣烈',
			yb_sgscq_xuanlie_info: '宣烈描述.',
			yb_sgscq_qiangwu: '枪舞',
			yb_sgscq_qiangwu_info: '枪舞描述.',
			yb_sgscq_spliegong: '烈弓',
			yb_sgscq_spliegong_info: 'SP烈弓描述.',
			yb_sgscq_dangxian: '当先',
			yb_sgscq_dangxian_info: '当先描述.',
			yb_sgscq_mumu: '穆穆',
			yb_sgscq_mumu_info: '穆穆描述.',
			yb_sgscq_duodao: '夺刀',
			yb_sgscq_duodao_info: '夺刀描述.',
			yb_sgscq_duanbing: '短兵',
			yb_sgscq_duanbing_info: '短兵描述.',
			yb_sgscq_huoshou: '祸首',
			yb_sgscq_huoshou_info: '祸首描述.',
			yb_sgscq_lieren: '烈刃',
			yb_sgscq_lieren_info: '烈刃描述.',
			yb_sgscq_zhengnan: '征南',
			yb_sgscq_zhengnan_info: '征南描述.',
			yb_sgscq_xiangzhan: '象战',
			yb_sgscq_xiangzhan_info: '象战描述.',
			yb_sgscq_fengshi: '锋矢',
			yb_sgscq_fengshi_info: '锋矢描述.',
			yb_sgscq_fengliang: '逢亮',
			yb_sgscq_fengliang_info: '逢亮描述.',
			yb_sgscq_kunfen: '困奋',
			yb_sgscq_kunfen_info: '困奋描述.',
			yb_sgscq_fangquan: '放权',
			yb_sgscq_fangquan_info: '放权描述.',
			yb_sgscq_ruoyu: '若愚',
			yb_sgscq_ruoyu_info: '若愚描述.',
			yb_sgscq_guicai: '鬼才',
			yb_sgscq_guicai_info: '鬼才描述.',
			yb_sgscq_jueqing: '绝情',
			yb_sgscq_jueqing_info: '绝情描述.',
			yb_sgscq_junxing: '峻刑',
			yb_sgscq_junxing_info: '峻刑描述.',
			yb_sgscq_shenggong: '圣弓',
			yb_sgscq_shenggong_info: '圣弓描述.',
			yb_sgscq_shensu: '神速',
			yb_sgscq_shensu_info: '神速描述.',
			yb_sgscq_raoshe: '饶舌',
			yb_sgscq_raoshe_info: '饶舌描述.',
			yb_sgscq_huxiao: '虎啸',
			yb_sgscq_huxiao_info: '虎啸描述.',
			yb_sgscq_fuhun: '父魂',
			yb_sgscq_fuhun_info: '父魂描述.',
			yb_sgscq_fengwu: '风雾',
			yb_sgscq_fengwu_info: '风雾描述.',
			yb_sgscq_qixing: '七星',
			yb_sgscq_qixing_info: '七星描述.',
			yb_sgscq_shixue: '嗜血',
			yb_sgscq_shixue_info: '嗜血描述.',
			yb_sgscq_sptieji: '铁骑',
			yb_sgscq_sptieji_info: 'SP铁骑描述.',
			yb_sgscq_mashu: '马术',
			yb_sgscq_mashu_info: '马术描述.',
			yb_sgscq_baiyin: '拜印',
			yb_sgscq_baiyin_info: '拜印描述.',
			yb_sgscq_lianpo: '连破',
			yb_sgscq_lianpo_info: '连破描述.',
			yb_sgscq_tiaoxin: '挑衅',
			yb_sgscq_tiaoxin_info: '挑衅描述.',
			yb_sgscq_tuntian: '屯田',
			yb_sgscq_tuntian_info: '屯田描述.',
			yb_sgscq_quanji: '权计',
			yb_sgscq_quanji_info: '权计描述.',
			yb_sgscq_zhaoxin: '昭心',
			yb_sgscq_zhaoxin_info: '昭心描述.',
			yb_sgscq_ranshang: '燃殇',
			yb_sgscq_ranshang_info: '燃殇描述.',
			yb_sgscq_fuluan: '扶乱',
			yb_sgscq_fuluan_info: '扶乱描述.',
			yb_sgscq_weiwuhun: '武魂',
			yb_sgscq_weiwuhun_info: '伪武魂描述.',
		}, //翻译(必填)
		/*快捷复制:
		<span class=yellowtext>文字</span>暗亮双色
		<span class=thundertext>文字</span>
		<span class=thundertext></span>
		<font color=cyan>文字</font>自带单色
		<span style=\'color: #00c4ff\'>文字</span>自写颜色
		<br/>换行
		<li>点
		<span style="opacity:0.5;"></span>字体变淡
		<span style="font-family: yuanli">东吴命运线</span>
		<span style="text-decoration: line-through;">杀</span>字体划掉
		*/
		characterIntro: {
			//--------------------------//---三国杀传奇
			//每设计完一个武将,就将它缩进,等全部设计完后再缩回来
			////------------------------☆桃园结义
			sgscq_liubei: '☆桃园结义-001<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>碎嘴的老好人.大智若愚,说他不懂天下事吧,只有他,相信深山有宝,斥重开采出埋藏在火焰山底的<天火锻>.说他胸怀天下吧,他又自称开采神器,只为了锻造他的草鞋铺,将来好开全国连锁店.表面看他只是一个草鞋铺老板,天下人却称他为刘皇叔;他似乎天生贫弱,谁都打不过,但他同时又是关羽、张飞两元猛将的大哥.三国最矛盾也最具个性的主公,比起反贼,他自己本身也充满了谜团.',
			sgscq_guanyu: '☆桃园结义-002<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>爱美的红脸大汉,每天梳头发300遍,梳胡子800遍,梳腿毛1000遍.认为武艺是后天练成的,辛勤练习就能得到回报,所以武功再高也没什么可骄傲的.相反美貌是上天注定,具有神圣不可侵犯的肯定性.具有特殊的审美观,认定自己是三国第一帅哥,宁可牺牲性命也要保护自己的美貌.对不美的事物或人充满了敌意和鄙视,但对刘兄张弟十分宽容,觉得有必要让绿叶来衬托一下自己.',
			sgscq_zhangfei: '☆桃园结义-003<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>一根筋的猛汉,红绿色盲,干掉了几千头猪后,坚定了血是绿色的决心.看关羽永远觉得他身穿红袍脸色如菜,心中暗暗下定决心,要好好保护心理弱小的大哥,和身体弱小的二哥.脾气暴躁,临敌预战会大声咆哮,除了有威慑敌人的作用外,此咆哮还能撕烂衣服,让敌军羞愧而逃.使一杆丈八蛇矛,遇到敌军为智将时,一概轮圆胳膊砸对方个片甲不留.',
			sgscq_duyou: '☆桃园结义-004<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>贪婪爱财,在刘备管辖的安喜县巡察时,因刘备没向他行贿,想要陷害刘备,被张飞发现,于是被张飞狠狠抽了一顿.',
			sgscq_dongzhuo: '☆桃园结义-005<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>他土豪出身,为人放纵任性、粗野凶狠,满怀私欲和野心.他为达目的,不择手段.玩弄权术,践踏法律,破坏经济,残害人民.他逆行倒施,致使东汉末年政权混乱,社会动荡.他罪孽深重,最终在司徒王允的离间之下,被义子吕布所斩.',
			sgscq_zhangjiao: '☆桃园结义-006<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>左手有剑,右手有光,觉得自己是超级厉害的勇士,面对敌军万马奔腾,只说何人堪与我战,我是黄巾军的首领,太平道等着我创立.一直以为世界上有一股神秘力量在祝福他,后来发现,神秘力量并不存在,有的只是隐藏在层层迷雾中的反贼,为了不受其利用,甘愿自我了断.',
			sgscq_zhangbao: '☆桃园结义-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>兵败如山倒,过去的地公将军,瞬间逊为凡人.这个世界对于他,不再会有荣华富贵、金银财宝、荣耀和尊严,过去的目标已被践踏的粉碎,没有翻身的可能,于是只能迁怒于天下人,也许重新从天下人手中重新收集资源,还有翻版的可能.却不知失去民心,比失去生命还可怕,从他手刃平民的那一刻起,就已经输了.',
			sgscq_mayuanyi: '☆桃园结义-008<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>黄巾起义前,黄巾军于荆州、扬州的大帅,奉黄巾军首领张角之命筹划黄巾起义准备工作,遭张角弟子唐周的告密,在公元184年1月被捕,车裂于洛阳,迫使张角提前于2月起兵发动叛乱.',
			sgscq_gaosheng: '☆桃园结义-009<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>黄巾军将领,张宝部将,阳城激战中,在朱隽等官军的攻势下,被张飞于阵前所斩.',
			sgscq_peiyuanshao: '☆桃园结义-010<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>黄巾贼将领,黄巾之乱后,聚众占山为王.本欲夺取关羽的赤兔马,在得知对方是关羽后有意归顺,将朋友周仓介绍给关羽.不久后,在赵云路过山前时欲夺其马匹,被赵云所斩.',
			sgscq_bocai: '☆桃园结义-011<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>黄巾军中级将领.黄巾起义爆发时,汉灵帝使用由卢植,皇甫嵩,朱儁带领全国精兵迎战黄巾军,起初波才打败朱儁,皇甫嵩退守长社,波才率大军包围,皇甫嵩用计火攻突围,并与曹操、朱儁合兵大破波才所统黄巾军.',
			scmo_zhangjiao: '☆桃园结义-012<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br><span class=YB_darktext>曾有<苍天已死,黄天当立>的信条驱动着他在乱世中逆天而行、独当一面,如今惟剩对反贼的怨恨与执念使他的魂魄游离世间、不得散去.这个不甘受反贼头子的役使而自殁的大贤良师并没能释怀反贼留给他的心结,反而在死后由于自我意识的缺失,给了反贼利用自己可乘之机.如今的他是持天赋之力、行逆天之事的傀儡,是充满了魔性的天公将军,但他的深处意志似乎还在渴求着一个机缘,来将自己永远地解放.</span>',
			scsp_zhangjiao: '☆桃园结义-013<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>左手有剑,右手有光,觉得自己是超级厉害的勇士,面对敌军万马奔腾,只说何人堪与我战,我是黄巾军的首领,太平道等着我创立.一直以为世界上有一股神秘力量在祝福他,后来发现,神秘力量并不存在,有的只是隐藏在层层迷雾中的反贼,为了不受其利用,甘愿自我了断.',
			schao_diaochan: '☆桃园结义-014<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>浮萍飘海,绣茵锦簇,只可惜再漂亮也是无根浮花,随波逐流,沉沦汩没于其间.身为歌女,为国献身作为间谍长期潜伏在董卓身边,后又爱上吕布,为了能保留情郎性命,甘愿受反贼利用,欺骗玩家.最后吕布死,心也碎,为救真爱自己的玩家性命而牺牲,终于摆脱反贼的控制,临终前吟出:星芒日曦,六世徘徊;这似乎解释了她长时间的痛苦,也似乎有着别的含义.</span>',
			sgscq_huangjinleishi: '☆桃园结义-015<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>他们是天公将军张角座下的黄巾左使与黄巾右使,合称为黄巾雷使.当年道人于吉传授张角<太平清领书>时,给了他两张符咒帮他抵挡灾祸,后来这两张符咒化身为黄巾雷使,一直伴随在张角左右.',
			sgscq_nanhualaoxian: '☆桃园结义-016<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>张角的师父,属于仙人级.他将三卷天书太平要术传给张角,让他普救世人.据传南华老仙就是与老子并肩、主张无为的庄子.而他写的<庄子>通称<南华经>.所以<太平要术>就是庄子的<南华经>.后世道教追尊庄周为南华真人,南华老仙是指南华真人得道升天后入世的一种化名.',
			////-------------------------☆酒池肉林
			sgscq_liuxie: '☆酒池肉林-001<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>出生以来,历经十常侍、董卓、李傕、郭汜诸般祸乱,后又被曹操挟持以令天下,最终逊位于曹丕,全身而退.作为山阳公,被山阳的百姓所铭记,他究竟是一个生不逢时的明主,还是一个暗弱无能的昏君？',
			scmo_dongzhuo: '☆酒池肉林-002<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br><span class=YB_darktext>董卓贪图享乐、倒行逆施,当反贼出现时,他甚至主动迎合、出卖灵魂,自甘堕落为其走狗,以求获得更强的力量去征服、去肆虐这世间的一切.魔化与否在他身上显得不是那么重要,因为这个人,始终就是一个魔王.</span>',
			sgscq_sunjian: '☆酒池肉林-003<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>0',
			sgscq_yuanshao: '☆酒池肉林-004<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>怀冠绝世武功,妄想称霸三国群雄,对意见相左者残忍弑去.对权利与力量的追寻永无止境,主动找到反贼,成为第一个被控制的反将.被玩家解救后,设计玩家替他复仇,假装报恩告诉玩家反贼的所作所为:诏令世界,声闻于天……天下反将之多,已不可预计.',
			sgscq_lvbu: '☆酒池肉林-005<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>民间传说他因出生在布上故名.他是三国第一猛将.丁原、董卓都曾是他的干爹,但他轻狡反复、唯利是图,两任干爹都最终惨亡于他的戟下.他虽骁勇善战,但有勇无谋,刚愎自用,且心胸狭隘多猜忌.在下邳之战中,因为听信妻子谗言,而未用陈宫建议,最终被曹操击败,惨遭缢亡.',
			sgscq_zumao: '☆酒池肉林-006<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>孙坚的心腹,与程普、黄盖、韩当并称为孙坚四武将.联军讨董时,华雄为先锋.孙坚与四武将一同进攻华雄,斩其副将,而华雄未敢正面迎战,选择夜晚偷袭.偷袭成功后,孙坚身边只剩下祖茂,眼看就追上了,祖茂便将孙坚的头巾系在自己头上,成功引开了敌人.后来他将头巾缚在柱上后躲藏在林中,准备以此引诱华雄,趁机偷袭,不料却反被华雄所斩.',
			sgscq_huaxiong: '☆酒池肉林-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>他是身长九尺、虎背狼腰、豹头猿臂的关西猛将;汉末在董卓帐下任都督,他自告奋勇在汜水关抵挡十八路诸侯联军的进攻,他偷袭孙坚、斩祖茂,还斩了<上将>潘凤.可是他春风得意过了头,最终被关羽迅速了结了性命.',
			sgscq_yuanshu: '☆酒池肉林-008<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>袁绍之弟,初为虎贲中郎将.董卓进京后以袁术为后将军,袁术因畏祸而出奔南阳.初平元年与袁绍、曹操等同时起兵,共讨董卓.后与袁绍对立,被袁绍、曹操击败,率馀众奔九江,割据扬州.建安二年称帝,建号仲氏 ,但未受人承认.此后袁术奢侈荒淫,横征暴敛,使江淮地区残破不堪,民多饥死,部众离心,先后为吕布、曹操所破,元气大伤,后于建安四年呕血而死.',
			sgscq_gongsunzan: '☆酒池肉林-009<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>出身贵族,貌美声亮、机智善辩,早期作战勇猛,在对北方游牧民族与黄巾战事中战功卓著、威震四方.与身边数十个善于骑射的人都骑白马,相互间为左右翼,自号<白马义从>.而他后来变得性格残忍,没有政治信念是他在战争劫掠中日益贪婪、残害百姓,最终人心尽失,最后也彻底败于袁绍,自焚于高楼而终.',
			sgscq_zhaoyun: '☆酒池肉林-010<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>字子龙,蜀国五虎上将之一,军中人称<虎威将军>.他身长八尺,姿颜雄伟,文武双全,完美无缺.追随刘备后,他两扶幼主,尤其在长坂坡之战七进七出,救出刘禅;他还帮助刘备克定祸乱,刘备曾赞:子龙一身是胆也!',
			sgscq_panfeng: '☆酒池肉林-011<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>字无双,冀州牧韩馥麾下的头号猛将,堪称<上将>,擅使大斧,与吕布齐名,时有<关东潘凤,关西吕布>之说.诸侯联军讨伐董卓时,韩馥搞笑的说了一句:<吾有上将潘凤可斩华雄>.上将的盘古开天斧重达185斤,连关羽82斤的青龙偃月刀都远不能及.所以连关羽都不配称作上将,而潘凤竟被称为上将.结果华雄用了不到四分之一柱香的时间就将其斩毙,他最终<光荣>殉国了.',
			sgscq_wangyun: '☆酒池肉林-012<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>东汉末年大臣,貂蝉的义父,在和中常侍张让的斗争中失败,在何进时期重新执政,在董卓掌权时,官至司徒兼尚书令.由于朝廷腐败,从而密谋行刺董卓.董卓亡后,王允与吕布共执朝政,后来董卓余党攻破长安,吕布出逃,王允被处斩.',
			sgscq_diaochan: '☆酒池肉林-013<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>浮萍飘海,绣茵锦簇,只可惜再漂亮也是无根浮花,随波逐流,沉沦汩没于其间.身为歌女,为国献身作为间谍长期潜伏在董卓身边,后又爱上吕布,为了能保留情郎性命,甘愿受反贼利用,欺骗玩家.最后吕布死,心也碎,为救真爱自己的玩家性命而牺牲,终于摆脱反贼的控制,临终前吟出:星芒日曦,六世徘徊;这似乎解释了她长时间的痛苦,也似乎有着别的含义.',
			sgscq_xuchu: '☆酒池肉林-014<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>曹操护卫,白目猛将,阳气充足而溢,经常放气促进身心健康.多次与<玩家>作战失利,他从来不考虑智商或者情商的问题,而是每次都更努力的锻炼身体,希望以武力成为战场上的常胜将军,导致身体肌肉虬结,如同铜墙铁壁,刀枪不入,军中将领都称呼他<肉盾>.',
			sgscq_caiwenji: '☆酒池肉林-015<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>史上少有的才名盖过美貌的女子,有过三段婚姻,其父曾是曹操的老师.父亲受政治牵连而死后,幸福的童年被打破,在动荡中被掳至南匈奴,嫁给了左贤王,这便是她的第二段婚姻.一去十二年,她与左贤王恩爱有加,育有两子,却仍无时无刻不怀念故土.曹操雄起后,听闻老师的女儿被掳至南匈奴,立即派出使者将其重金赎回.然而她的内心却是矛盾的,虽然非常希望回到故土,但一想到要离开深爱十二年的左贤王和两个儿子,心中却满是踌躇,肝肠寸断、泪如雨下.恍惚中回到故土的她,思念成疾,创作了动人心魄的<胡笳十八拍>.蔡文姬一生悲苦,<回归故土>与<亲人团聚>终不能两全.',
			schao_guanyu: '☆酒池肉林-016<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>爱美的红脸大汉,每天梳头发300遍,梳胡子800遍,梳腿毛1000遍.认为武艺是后天练成的,辛勤练习就能得到回报,所以武功再高也没什么可骄傲的.相反美貌是上天注定,具有神圣不可侵犯的肯定性.具有特殊的审美观,认定自己是三国第一帅哥,宁可牺牲性命也要保护自己的美貌.对不美的事物或人充满了敌意和鄙视,但对刘兄张弟十分宽容,觉得有必要让绿叶来衬托一下自己.</span>',
			sgscq_dongbai: '☆酒池肉林-017<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>东汉太师董卓的孙女.董卓当权时,她还不满15岁.董卓被诛,灭三族时被处死.',
			sgscq_lijue: '☆酒池肉林-018<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>东汉末年权臣、凉州军阀.本为董卓手下的排名第一的凉州系心腹大将,统领<飞熊军>.曾为董卓游说孙坚和亲结盟,但被拒绝.董卓败亡后,他挟天子辅政四年、设立雍州.曾破朱儁,败马腾,走孙坚,击西羌.后被曹操讨伐诛灭,灭其三族.而后,汉献帝命令将他的首级高挂许都示众,以表达对其强烈痛恨.',
			sgscq_guosi: '☆酒池肉林-019<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>原为董卓部下,善于用兵.董卓死后,曾与李傕等人一起反攻长安,后又与李傕、樊稠共掌朝政.但李傕、郭汜二人后来被离间,引发内斗.随后二人和解罢兵,送汉献帝东归,但不久便反悔追击,几番交战,终被赶来的曹操军队击退,汉献帝遂被曹操迎往许都.几年后,他被部将伍习所杀,首级被献予曹操.',
			sgscq_niufu: '☆酒池肉林-020<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>牛辅,董卓的女婿,任中郎将,于董卓进京之际留守陕西.董卓被斩后,牛辅伙同李傕、郭汜、张济、樊稠等前往往长安,欲为董卓报仇,最后被吕布大败,在趁夜弃军而逃中,被随从胡赤儿死,将头献予吕布.',
			sgscq_yuanji: '☆酒池肉林-021<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>袁术之女,孙权爱妾之一,被称为袁夫人.与其父不同,她为人颇有节行操守.袁术败亡后,沦为孙权之妾.虽得宠爱,却终未生育.孙权多次将其他姬妾之子交她抚养,均未养活.孙权称帝后,本欲立最爱的步夫人为后,却遭群臣反对而搁置.步夫人过世后,有意立袁夫人为后,却被其以无生育为由拒绝.最终,生有一子的潘夫人成了皇后,但直到她死,都还一直设法陷害袁夫人.',
			sgscq_liru: '☆酒池肉林-022<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>董卓的首席谋士,心腹,事无巨细,堪称智囊.从董卓趁乱进京、到说降吕布、再到废立皇帝、迁都长安,这些都离不开他的谋划.董卓专政时,他奉董卓之命,入宫毒死刘辩.他曾劝董卓放弃貂蝉而换取吕布的效忠,董卓未听从,最终死于吕布之手.董卓死后,李傕曾向汉献帝举荐他遭拒,后来李傕被曹操击败后,他便不知所踪.',
			scmo_jiaxu: '☆酒池肉林-023<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br><span class=YB_darktext>三国乱世之中,唯有文和可进退自如,不仅位列三公,七十从心所欲,而且保全了整个家族.魔障初现端倪之时,他便敏锐地洞察了反贼出现的现实,并且顺应着自己的处世之道,成为反贼的棋子.他理所当然获得了魔的力量,却未被侵蚀神智,成了既是反贼的辅翼、又是事态观测者的亦人亦魔存在.</span>',
			////-------------------------☆江东人杰
			sgscq_sunce: '☆江东人杰-001<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>孙坚长子,孙权长兄.他容貌俊美,性格开朗、直率大度,善于用人,有幽默感,深受各界人士拥戴.父亲去世后,他率其旧部效力袁术,后又向袁借兵创业,横扫吴会,但因袁术僭越称帝,与其绝交.他曾斩的黄祖几乎全军覆没,终报其父之仇.但他在平定江东时,结怨甚广,又轻于防备,最终在26岁那年,外出狩猎时,遇刺身亡.',
			sgscq_taishici: '☆江东人杰-002<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>东吴神射手,神敏过人.为人孝顺,当受命母亲帮助孔融时,放下自己屠龙的梦想,完成母命.曾与孙策单挑决斗,战成平手,因此受到东吴赏识,后成为孙权的左膀右臂.遭遇玩家后认为玩家并非凡人,只可惜双方各位其主,立场不同,只能对战.后在对反贼的斗争中,成为玩家的资深战友.',
			sgscq_zhouyu: '☆江东人杰-003<br>☆技能设计:朝拾<br>☆代码撰写者:jacken、夜白<br>☆插图:三国杀传奇<br>☆配音:三国杀语音(三传语音过于抽象……)<br>公瑾身材高大、相貌俊美,志向远大,与孙策自幼交好.他21岁起,随孙策平定江东,孙策遇刺身亡后,孙权继任,他又继续辅佐孙权.他曾率江东集团大军与刘备联合,赤壁之战大败曹军.他性度恢廓,堪称奇才,只怜天妒豪杰,英雄命短,他只活了36岁,便一病而去!',
			sgscq_daqiao: '☆江东人杰-004<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>上山打猎时偶遇孙策,虽然对方是雄略过人、威震江东的孙郎,但她仍然毫无惧色,提出对方需打猎胜过自己,才能相谈.孙策轻描淡写地用自己的力量折服了大乔,从此美女配英雄,成为孙策众多夫人中的一位,夫妻举案齐眉、琴瑟相和,直至孙策被刺,周瑜病逝,自己无法劝服妹妹离开反贼的蛊惑,最后只一人常伴青灯古佛,为家人祈福.',
			sgscq_xiaoqiao: '☆江东人杰-005<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>从小是大乔的跟班,两姐妹常打扮成寻常女子上山狩猎,某次打猎时,误打误撞遇见孙策携周瑜一起打猎,四人相对,各自有了中意的人.小乔爱慕周瑜英俊风流、文武双全,成为周瑜的妻子,两人才子佳人,珠联璧合一起幸福的生活,直至周瑜去世.小乔为让夫君起死回生受反贼的蛊惑,犯下大错.',
			sgscq_daxiaoqiao: '☆江东人杰-006<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>姐妹同心,其利断金.东风不与周郎便,铜雀春深锁二乔.',
			scsp_yanbaihu: '☆江东人杰-007<br>☆技能设计:朝拾<br>☆代码撰写者:缘伴随行<br>☆插图:三国杀传奇<br>☆配音:三国杀同名技能语音<br>东汉末年盘据吴郡一带的地方豪帅,原名<严虎>,别号<白虎>,吴郡乌程县人,山贼出身的豪帅,严舆之兄,自号东吴德王,据守吴郡.',
			sgscq_wufuren: '☆江东人杰-008<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>孙坚的老婆,孙策,孙权,孙尚香的亲妈,才貌双全.<搜神记>记载了吴夫人怀孕孙策和孙权的传说:吴夫人第一次怀孕时梦见月亮进入自己的肚子,就生下了孙策.第二次怀孕时梦见太阳进入自己的肚子,又生下了孙权.',
			sgscq_wuguotai: '☆江东人杰-009<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>孙坚的次妻,孙坚正妻武烈皇后的妹妹,孙朗、孙尚香的母亲.在甘露寺相亲时认可了刘备,将孙刘婚事促成.',
			sgscq_sunshangxiang: '☆江东人杰-010<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>东吴郡主,孙权的胞妹.美丽而贤淑,虽为女流,但志向却远胜男儿.幼年时便像哥哥们一样,喜欢舞刀弄枪,才智敏捷,性格刚强,连诸位将士们都怕她.赤壁之战后被嫁与刘备.',
			sgscq_shinvduizhang: '☆江东人杰-011<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>侍女队长原名淘淘,想当年孙坚能文能武,俘获无数青春少女的芳心,淘淘也是仰慕者之一,但是她自知身份悬殊与孙坚不可能有结果,于是苦练武艺,终于被选为吴夫人的侍卫队长,虽不能与心爱之人有结果,但是能日日见到他,她已经满足了.',
			sgscq_yuji: '☆江东人杰-012<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>在任何时代的江湖上都有三种人不好惹,道士,是其中最难惹的一种.于吉崇尚法道自然,擅用音律、檀香、美味触动世人心神,焚烧道书制作符水提携凡人悟道.号称通阴阳,能与神鬼沟通,是反贼的反对者,寻找有异心的反将,帮助他们暂时脱离反贼的控制,并寻找他的弱点.',
			sgscq_lingtong: '☆江东人杰-013<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>凌操的儿子,因才能出众,小时候就有一定的名气.他爹征战时被甘宁射死,那一年他15岁,在奋力抢回父亲的尸体后,便开始了军旅生涯.他勇烈过人,舍身忘命,接连被派作先锋队员.合肥之战那一年,他受了重伤,两年后发病而死.一个亲贤接士,轻财重义的未来之星,就这样不幸陨落,享年29岁.',
			sgscq_lingcao: '☆江东人杰-014<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>凌统的父亲,为人侠义有胆气,水性好,是不可多得的水军将领.早年便随孙策转战江东,是军中的先锋.孙权统军后,又随其征伐黄祖,最后不幸被甘宁射亡.',
			sgscq_bulianshi: '☆江东人杰-015<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>孙权之妃,温柔可人,从不妒忌他人.当年与母亲流落江边,多亏孙权相救,才保留一命,心甘情愿委身孙权,并以此为荣.善解人意,处处以孙权为重,与孙权同心同德,孙权快乐,便是她最大的快乐,孙权有难,步练师必与他一同承担,后成为孙权最亲厚、最不能割舍的夫人.',
			sgscq_dahu: '☆江东人杰-016<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>孙权长女,生母步练师,胞妹孙鲁育.曾嫁给周瑜的儿子周循,周循去后又改嫁全琮,号称<蛇蝎妖女全公主>.她谗害太子、胞妹,私通堂侄.且无才能,无远见,无德行,趋炎附势,睚眦必报,坏事做尽,如市井悍妇一般,堪称史上最卑鄙狠毒的女人.最终,机关算尽太聪明,反误了卿卿性命.',
			sgscq_xiaohu: '☆江东人杰-017<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>孙权之女,生母步练师,胞姐孙鲁班,生有两子一女.她曾先后嫁与两任丈夫.为人很像其母,全然无姐姐那般狡诈阴毒,凡事都循规蹈矩.因在废除太子的意见上没有赞同姐姐,而被记恨,最终遭到谗害.后来孙鲁班为了自保,捏造事实,嫁祸于妹妹的两个儿子,终致妹妹血脉全无.然苍天有眼,她仅存的女儿辗转之后却最终成为了东吴皇后.',
			sgscq_luxun: '☆江东人杰-018<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>聪明绝顶的智将,可以防范大部分计谋,身体瘦弱,玉面朱唇,风流可人,扮女子亦勾魂荡魄,然诱人处在其正邪、真假的难辨;暗恋玩家,认为玩家是男人中的男人,不由自主的被吸引.暗自帮玩家追查反贼的下落,却因为身体羸弱,反被反贼控制,心神俱封,成为反贼手下的反将.',
			sgscq_luji: '☆江东人杰-019<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>博学多识,通晓天文地理,官至太守加偏将军,曾撰写<浑天图>,<太玄经注>,注解<易经>.<陆绩怀橘>的故事被郭居敬编入<二十四孝>.',
			sgscq_zhuzhi: '☆江东人杰-020<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>三国时期吴国武将,早年随从孙坚、孙策征伐,又辅助孙权,稳定江东,功勋卓著.',
			schao_yuanji: '☆江东人杰-021<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>袁术之女,孙权爱妾之一,被称为袁夫人.与其父不同,她为人颇有节行操守.袁术败亡后,沦为孙权之妾.虽得宠爱,却终未生育.孙权多次将其他姬妾之子交她抚养,均未养活.孙权称帝后,本欲立最爱的步夫人为后,却遭群臣反对而搁置.步夫人过世后,有意立袁夫人为后,却被其以无生育为由拒绝.最终,生有一子的潘夫人成了皇后,但直到她死,都还一直设法陷害袁夫人.</span>',
			schao_sunjian: '☆江东人杰-022<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>大圣孙坚,一代豪雄,战场上所向披靡,勇武威猛,当大圣身着圣衣拿出武器,战场的人无不闻风而逃.听闻到有玩家和反贼的存在异常兴奋,于是再次出山,欲让世上的人再次听到他的威名!</span>',
			sgscq_luyan: '☆江东人杰-023<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>陆逊长子,陆抗长兄,母亲是孙策的女儿.但他不到20岁就夭折了,因此弟弟陆抗承袭了爵位.',
			////-------------------------☆白门楼
			scmo_diaochan: '☆白门楼-001<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br><span class=YB_darktext>一生游走于男人之间,却无法摆脱<棋子>的命运.容颜再美,生命却也不过是昙花一现.吕布白门楼命陨,她随之凋零,尽管摆脱了<棋子>的身份,却始终带着一丝不甘,带着一丝遗憾,带着一丝留恋;那些她日夜思念、深深爱过的人,开始在心底一一浮现……如果能够重来,即使痛苦,她也愿意承担.</span>',
			sgscq_jiaxu: '☆白门楼-002<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>他奇谋百出,被世人称为<毒士>,使用计谋往往直指人心,并且不太讲究道义虚名.曾献计李傕攻长安,诛王允,造成乱世局面,可谓<一言开三国>.',
			sgscqshen_caocao: '☆白门楼-003<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>天下人共知的<军事天才>、<大政治家>,人人都以为他内心阴暗,却没想到他仅仅只是不自信.他的<多疑>是自我保护的方式.他很希望能把自己全身心的交给某个人,前提是对方通过他考验.但有的人退缩了,有的人死了,让他十分失望.直到玩家穿越现代出现在他的面前,他发现玩家虽然对他屡屡作对,但每一次交锋,都证明玩家是一个可以依托的人.也许,再耐心一点,玩家就知道,为什么曹操要放弃称王天下的理由了.</span>',
			sgscqshen_lvbu: '☆白门楼-004<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>颤抖着滚开吧杂鱼们,这世上还有谁能满足我？!</span>',
			sgscq_caoang: '☆白门楼-005<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>曹操的大儿子,字子修,刘氏所生,由原配丁夫人抚养长大.曹操征战一直带着他,想培养为未来接班人,然而他却在宛城之战中舍马救父,与典韦、堂兄弟曹安民一同战死.他的死对丁夫人是个极大的打击,最终与曹操断绝了夫妻关系,而曹操也为此悔恨终身,病危时说到:<我这辈子从未亏欠过谁,唯独到了地下,若是子修问我要妈妈,我该怎么回答啊!>',
			sgscq_dianwei: '☆白门楼-006<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>护驾大使,不管主公有难没难都要在最前面.他抗敌一千自损八百却毫无惧色!更厉害的是,他可以舍弃自己的随身武器,赤手空拳的闯入敌阵!光他的气势就足以抵挡敌人的进攻.他刚正不阿,正气十足,反贼无法操控这样的猛将.却谋虑不足,与玩家几次发生正面冲突,却不知道,玩家才是他的主公——曹操真正需要的人.',
			sgscq_hucheer: '☆白门楼-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>他是张绣的心腹猛将,可力负五百斤,日行八百里.后随张绣投降了曹操,而曹操十分喜爱胡车儿的勇猛,赐给他很多黄金,但却让张绣误以为曹操收买他为了行刺自己;加之曹操还纳了张绣的婶婶邹夫人,使张绣怀恨在心,因此听从了贾诩的计谋而反叛,也就是后来著名的宛城之战.战前,胡车儿把典韦灌醉并盗取了典韦的双戟,致使典韦死于宛城,而胡车儿因曾与典韦有过交情,遂亦自尽.',
			sgscq_gaoshun: '☆白门楼-008<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>他是东汉末年将领、吕布帐下中郎将.为人清白有威严,不好饮酒,率领之部队有<陷阵营>之美誉.他每次都直言进谏吕布,毫不避讳,但像吕布这样桀骜不驯,刚愎自用的人,怎能容忍别人说他不对呢.所以吕布虽然知道他很忠诚,但后来还是没有重用他,甚至夺了他的<陷阵营>.曹操击败吕布后,他拒绝投降,最终与吕布、陈宫先后被害.',
			sgscq_chengong: '☆白门楼-009<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>吕布帐下谋士、大将,性情刚直,足智多谋,少年时便结交海内名士.早年曾辅佐曹操,后因不满朋友被曹操处决而背叛曹操,还曾数度击败曹操.郝萌之变被揭发为叛军同谋,但吕布考虑他是大将,并未追究.下邳之战失败后,曹操不忍斩他,一度欲劝他再度出仕,他不为所动,将性命置之度外.而他被斩后,他的家人仍一直由曹操供养.',
			sgscq_caohong: '☆白门楼-010<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>又名曹子廉,是曹操堂弟.曾在曹操讨伐董卓失败且失掉坐骑时,将自己的坐骑让给了他,从而使其免于厄难.官渡守本营、下辩破吴兰,他随曹操多方征战.他家境富裕,但非常抠门,曹丕年轻时向他借钱未遂,怀恨在心,即位后,找个理由就把他打入大牢并要处死.后经多方周折,才免于一死,但仍贬为庶人.直至曹丕死后,他才最终官复原职.',
			sgscq_bianhuanghou: '☆白门楼-011<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>本为一名歌舞伎,卖艺为生,四处飘零.20岁的她以过人的才色而被25岁的曹操看中,成了他的妾室.她怒不变容,喜不失节,推崇节俭,贤能豁达,大为曹操所赞赏.终在曹操与丁夫人离异后,成为其正室妻子,并生下了曹丕、曹植、曹彰、曹熊四个儿子.她历经曹操、曹丕、曹叡祖孙三代,去世时七十有余,可谓长寿之人.',
			sgscq_mizhu: '☆白门楼-012<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>徐州顶尖富豪,集团公司员工过万,其亲妹妹糜夫人是刘备的老婆,最初拒绝曹操的任命跟随刘备,在刘备被吕布击败,穷困潦倒之时给予刘备很大的帮助,蜀汉建立后被任命为安汉将军.',
			sgscq_sunqian: '☆白门楼-013<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>刘备的幕僚,最初被大儒郑玄推荐,自徐州跟随刘备,多次作为刘备的使臣,刘备定益州后,拜孙乾为秉忠将军,其待遇仅次于麋竺,不久便病逝.',
			sgscq_zhangliao: '☆白门楼-014<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>大叔型帅哥,比起光凭蛮劲获胜的武将,还擅长在招式和服装上下工夫,很会包装自己,和诸位大将的关系也不错.但能力评价就只有<耍花枪>而已,经常在酱油的角色中徘徊.本想靠打败玩家挽尊,不料几次遭遇战都大败而归,于是暗暗下定决心,一定要重树威信,成为最帅的古今天下第一人!',
			sgscq_lvlingqi: '☆白门楼-015<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>吕布之女,为武而生,聪明直率,风情万种,她喜欢骑最桀骜的马,用最快的刀,斩最有名的人,做最狠的女人.吕布走后,她独自一人流浪三国,因厌恶男权为天下苍生带来的痛苦,又痛恨自己无力改变现状,召集流离失所的各国妇女,自建女儿国隐居桃花林,是最早的女权主义者.',
			//-------------------------☆官渡之战
			scsp_yuanshao: '☆官渡之战-001<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>怀冠绝世武功,妄想称霸三国群雄,对意见相左者残忍弑杀.对权利与力量的追寻永无止境,主动找到反贼,成为第一个被控制的反将.被玩家解救后,设计玩家替他复仇,假装报恩告诉玩家反贼的所作所为:诏令世界,声闻于天……天下反将之多,已不可预计.',
			sgscq_caocao: '☆官渡之战-002<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>天下人共知的<军事天才>、<大政治家>,人人都以为他内心阴暗,却没想到他仅仅只是不自信.他的<多疑>是自我保护的方式.他很希望能把自己全身心的交给某个人,前提是对方通过他考验.但有的人退缩了,有的人死了,让他十分失望.直到玩家穿越现代出现在他的面前,他发现玩家虽然对他屡屡作对,但每一次交锋,都证明玩家是一个可以依托的人.也许,再耐心一点,玩家就知道,为什么曹操要放弃称王天下的理由了.',
			sgscq_guotu: '☆官渡之战-003<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>东汉末年袁绍帐下谋士.曾劝袁绍迎奉汉献帝,袁绍不从.官渡之战时,他力主趁机偷袭曹营,失败后,将罪责嫁祸于张郃、高览,致使二人投降曹操,袁军崩溃.袁绍去世后,为袁谭献计谋害袁尚,被识破后导致兄弟交兵;又劝袁谭联合曹操攻袁尚而取得胜利,但后来袁谭反叛曹操,终被击败,而郭图最终也被乐进射毙.',
			sgscq_tianfeng: '☆官渡之战-004<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>袁绍部下谋臣,为人刚直,多次直谏袁绍而未被采纳,荀彧评价他<刚而犯上>.曾助袁绍灭公孙瓒.后劝袁绍趁曹操亲征刘备之时袭击曹操后方,袁绍未从,且因其说话耿直,惹怒袁绍,就此被疏远.后因谏阻袁绍征伐曹操而被关入大牢.官渡之战后,被袁绍所害.',
			sgscq_jushou: '☆官渡之战-005<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>袁绍帐下谋士.少有大志,擅于谋略,经常对袁绍提出良策,但很多时候袁绍并不听从.官渡之战时袁绍大败,沮授未及逃走,被曹操所获,因拒降被曹操处死.',
			sgscq_guojia: '☆官渡之战-006<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>风流小生,爱花爱草爱自然,但体弱多病,经常稍有风吹草动就会昏死过去.因为自己阴气太重,少阳不足,所以不爱美女只爱阳光正气的大男生,经常混迹营地,调戏军卒,好在并无龙阳之癖,大家对他的动手动脚也只是睁一眼闭一眼.足智多谋的智将,只可惜天妒英才,少年早逝,为此曹操痛心不已.',
			sgscq_yanliang: '☆官渡之战-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>和文丑共称河北双雄,性情急躁,备战时间以游猎为幌子偷偷出城,为争功劳,不听军中老将阻拦,与袁绍军团对峙时,欲决斗定雌雄,不料反中曹操计策,前不能攻,后不能守,被关羽斩首于万众中.',
			sgscq_wenchou: '☆官渡之战-008<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>和颜良共称河北双雄,颜良战亡沙场后,故意纵容部下军营作乱,以泄心中不满,终于导致逢纪及其他大将的不悦.数日后,双方冲突升级,为稳定军心,逢纪派刺客袭击文丑,但被文丑识破.逢纪恶人先告状,促使袁绍次日派文丑先行对敌,灭于曹操手下.',
			sgscq_yanwen: '☆官渡之战-009<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>东汉末期袁绍部下的武将.有威名.颜良与文丑一起作为袁绍军队的勇将而闻名,',
			sgscq_zhanghe: '☆官渡之战-010<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>三国曹魏五子良将之一,张郃以巧于应变为人称道.官渡投曹后,征战四方,帮助曹操击溃马超、韩遂.在街亭阻挡诸葛亮的部将马谡,断绝了他取水的道路,然後发起进攻,大败马谡.然而在诸葛亮第四次北伐中,飞来的箭矢射中了张郃右膝,战死沙场.',
			sgscq_zhoucang: '☆官渡之战-011<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>他是身材高大、黑面虬髯的关西大汉.黄巾军出身的他,本是张宝部下,张宝被斩后,他便率众部做了山大王.关羽千里走单骑时,他因久慕关羽盛名,而投归于帐下,做了关羽的贴身侍卫,自此忠心不二.他常以关羽护卫形象出现在各地的关帝庙中,与关平一起被供奉在关羽神像的两侧.关羽父子被斩后,他大哭失声,自刎而去,被世人称为<天下第一忠心之人>.',
			sgscq_guanping: '☆官渡之战-012<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>草莽小伙,原为冀州关家庄庄主关定之子,因喜爱关羽之女关银屏,主动要求加入蜀军阵营,在战场上屡立奇功,成为关羽副将,眼看着离关银萍越来越近,即将表白的时候,又一次战役大捷,关羽表彰关平勇猛善战,特收他作为义子.原本爱慕追逐的女神瞬间变成自己的妹妹,关平觉得自己比段正淳还不幸,但因忠于义父,从此将相思埋藏心底,苦练武功,成为蜀国名将.',
			sgscq_zhuling: '☆官渡之战-013<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>魏开国功臣,是仅次于五子良将的存在,智勇皆有,又具奸雄气质.初为袁绍部将,为其毁家纾难在所不辞.这样一个人,却眼光独到,狠辣无情,在袁绍极为强盛、曹操尚且龙潜之时,便果断带兵投奔曹操.但之后,他依然亲率旧部,曹操担心其拥兵自重,一直有所忌惮,所以后来派于禁夺其兵营.而这并未影响他后来的拜将封侯之路,其死后还祀于曹操庙庭.',
			sgscq_litong: '☆官渡之战-014<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>曹操麾下重要将领,起初以游侠闻名于世,对曹操十分忠诚,在官渡之战中成功抵制住糖衣炮弹的诱惑,最后在曹操和马超的对战中,死于马超枪下.',
			//-------------------------☆荆襄之地
			sgscq_liubiao: '☆荆襄之地-001<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>0',
			sgscq_yiji: '☆荆襄之地-002<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>三国时期蜀汉官吏,参与编制蜀汉的宪法<蜀科>,年少时便依附于同乡刘表,刘表病死后,便转投刘备,官至昭文将军.',
			sgscq_zhugeliang: '☆荆襄之地-003<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>堪破天机的真人,通奇门遁甲,对天下苍生怀有怜悯之心.认识玩家后,学习了很多来自未来的新奇知识,希望说服玩家为蜀国所用,帮助蜀国一统大业.早就感觉到反贼的存在,甚至夜观星象探查出反贼的来历,但认为天下万物皆有所用,不能刻意影响自然规律,间接促使反贼发展庞大,但诸葛亮对此毫无畏惧,他似乎对一切运筹帷幄,早有打算.',
			sgscq_huangyueying: '☆荆襄之地-004<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>她是黄承彦之女,有名的才女.熟读兵书、上知天文、下知地理、文韬武略、足智多谋的她,将自己传成黄发黑肤以鉴夫情,终和不以貌取人的仰慕者诸葛亮结为连理,成为一位秀外慧中的贤内助.据说诸葛亮有不少创造是由她传授启发而来,其中就有后来在北伐时立下功劳的木牛流马.诸葛亮逝去,她也很快随之香消玉殒.',
			sgscqshen_zhaoyun: '☆荆襄之地-005<br>☆技能设计:朝拾<br>☆代码撰写者:jacken<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br><span class=YB_moneytext>字子龙,蜀国五虎上将之一,军中人称<虎威将军>.他身长八尺,姿颜雄伟,文武双全,完美无缺.追随刘备后,他两扶幼主,尤其在长坂坡之战七进七出,救出刘禅;他还帮助刘备克定祸乱,刘备曾赞:子龙一身是胆也!</span>',
			sgscq_xiahouen: '☆荆襄之地-006<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>曹魏将领,曹操官方唯一指定<青釭剑>代言人,但因整日背其装B,最后被赵云一枪刺死,青釭剑自此归赵云所有.',
			sgscq_ganfuren: '☆荆襄之地-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>刘备的妾室,刘禅的生母,肤白貌美,三国时期著名的美女之一,在刘备众夫人中最美.因刘备早年数次丧偶,自觉命中克妻,所以不敢将其直接纳为正室,但其地位等同于正室,又常常主持家政.曹操突袭荆州,刘备抛妻弃子而逃,后赵云舍命保护,母子二人才幸免于难.赤壁之战后,甘夫人病死,后被追谥为<皇思夫人>和<昭烈皇后>.',
			sgscq_mifuren: '☆荆襄之地-008<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>哥哥糜竺,原为徐州大商,曾在刘备遭吕布偷袭而粮草不济时,大力资助使其重振,并将其妹嫁与刘备,即糜夫人.长坂兵败后,她为了不拖累赵云而投井自尽,赵云害怕曹军盗尸,推土墙将麋夫人掩埋.罗贯中曾作诗赞其<女丈夫>.',
			sgscq_xushu: '☆荆襄之地-009<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>和刘备一起闯荡菜市,穿皮裤、打鼻环,羞辱一众菜场恶霸.有勇有谋的一把好手.眼光狠毒,一眼就能看出谁家短斤缺两,谁家品质上乘,谁家用了地沟油,谁家是京城特供.知道顺应时节顺应节气,知道该用什么人做什么事,被众人称为<伯乐>.提供<天火锻>的下落,劝刘备请诸葛亮出山,是刘备重要的臣子和朋友.',
			sgscq_jianyong: '☆荆襄之地-010<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>刘备帐下谋士,擅于辩论,性情倨傲,刘备攻打成都时,简雍劝说刘璋投降.不久,官拜昭德将军,地位次于麋竺.',
			scmo_xiahoudun: '☆荆襄之地-011<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:与三国杀传奇画风相近的其它来源<br>☆配音:暂无<br><span class=YB_darktext>0</span>',
			schao_huangyueying: '☆荆襄之地-012<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>她是黄承彦之女,有名的才女.多智而貌美,却故意将自己传成黄发黑肤以鉴夫情,终和不以貌取人的仰慕者诸葛亮结为连理,成为一位秀外慧中的贤内助.据说诸葛亮有不少创造是由她传授启发而来,其中就有后来在北伐时立下功劳的木牛流马.诸葛亮于五丈原逝去之后,听闻噩耗的她也很快迎来了生命的终结.香消玉殒之时,隆中茅庐的庭院中不知为何却飘来了淡蓝色的小花,花语是——勿忘我.</span>',
			//-------------------------☆曹魏锦绣
			sgscq_zhenji: '☆曹魏锦绣-001<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>外表风骚,内心专一的成熟女子,但天负红颜,她的美丽只是作为一份华贵的礼物,在男人之间转呈相送.虽深爱曹植,愿意付出一切和真爱在一起,但曹植在保护她不受世俗斗争的同时,也一手葬送了她的幸福.面对男人的薄情,甄姬陷入了绝望,发誓与天下男子为敌,最后被玩家对貂蝉的痴情感动,决定再次出发寻找自己的真爱.',
			sgscq_caopi: '☆曹魏锦绣-002<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>曹操与卞夫人的长子,文武双全,野心远超父亲的阴谋家.表面看上去爱好美色,纵情享乐,连玩家也忽略了他的重要性,实际却暗自积攒实力,不容许任何人觊觎他太子的宝座,但凡有人入侵,即使是他的血脉至亲也不轻易放过.甄姬最怕的人就是他,或许,这里面有什么难言之隐？',
			sgscq_caozhi: '☆曹魏锦绣-003<br>☆技能设计:朝拾<br>☆代码撰写者:jacken<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>曹操与卞皇后所生第三子,著名的文学家,七步成诗广为流传,代表作有<洛神赋>、<白马篇><七哀诗>等.曹操本想立曹植为太子,奈何曹植行为放任,不拘礼法,屡犯法禁,终引起曹操的震怒,转立曹丕为太子.曹操逝世后,曹植的生活每况愈下,从一个过着优游宴乐生活的贵族王子,变成处处受限制和打击的对象.',
			sgscq_lidian: '☆曹魏锦绣-004<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>他少时好学,不喜兵法,却熟读各种书籍.他是曹操麾下将领,深明大义,不喜争功,常在战时负责防守或运输军需等重要工作,立下了汗马功劳.他尊重博学之士,有长者之风,且善于管理百姓,然而他在36岁便英年早逝.曹丕称帝后,他被追封为侯.',
			sgscq_xunyou: '☆曹魏锦绣-005<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>从小没爹没娘,受过叔叔荀彧举荐.曹操迎天子入许都后,他便成为曹操的军师.他行事周密低调,计谋百出,一直跟随曹操四处征战.直到生命的尽头,他仍走在伐吴的路上.他外愚内智,外怯内勇,外弱内强,曾设奇策十二计,辅佐曹操统一北方.他受人尊敬,生病时,曹丕曾下拜.他就是这样一个人,曹操每每提起,便会流泪',
			sgscq_chengyu: '☆曹魏锦绣-006<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>曹操手下的重要名臣,是曹操对人炫耀手下文臣的资本,深得其厚遇.个人也十分崇拜曹操,认为曹操是能够成就霸业的天赐之人.能透析人的性格,准确出划军策,看破即将遭遇的危机.精彩的<十面埋伏>一计更是使袁绍战败并从此一蹶不振.遗憾的是生未其位,在位至三公之前便逝世.后得以从祀于曹操庙庭,地位可见一斑.',
			sgscq_xizhicai: '☆曹魏锦绣-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>受荀彧推荐而成为曹操的谋士,十分被器重,但一生苦短,英年早逝.他死后,曹操希望找人代替他的职务,荀彧就向曹操推荐了郭嘉.',
			sgscq_yuejin: '☆曹魏锦绣-008<br>☆技能设计:朝拾<br>☆代码撰写者:jacken<br>☆插图:三国杀传奇<br>☆配音:暂无<br>忠于职守的猛将,相比其他将领又多了些智慧,几乎识破玩家铁索连环的计谋,认识到万一东风一起,火烧联营,魏军必败!可惜败于玩家无法向曹操说出心中感言,让历史重新演练了一遍.没听说过反贼的企图,那些只是不可靠的流言,在乐进眼里,最大的敌人,只有玩家.',
			sgscq_xinxianying: '☆曹魏锦绣-009<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>她的一生见证了整个动荡的三国时代.她出生那年,董大胖儿挟傀儡天子迁都长安,直到钟会西征灭蜀、司马氏颠覆魏政.吴国也在她死后11年,最终玩完了.她为人聪明有才,善于鉴人知事.她是历史的旁观者,但却不是局外人,她一生勤俭节约,最终用自己的才智保全了家人.',
			schao_xiahoushi: '☆曹魏锦绣-010<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>虽为夏侯魏女子,采缘撷睦结蜀姻.城外采樵的一次偶遇,却带来了和张飞的一场暴风骤雨般的恋情.闪婚之后,生有二女,皆成为刘禅的皇后.夏侯家族与蜀国的微妙纠葛,因她而起,不失为乱世中的一段姻缘佳话.</span>',
			sgscq_xiahoudun: '☆曹魏锦绣-011<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>不甘平淡,夏侯惇俯首成为反贼手下的反将,妄想通过他的力量,强化自己.但这一切都是个阴谋,夏侯惇发现自己的力量都被反贼反嗜,自己无法做一丝一毫的反抗,他明白只有离开这个世界才能解脱自己.他走后,吟出了东宫之子,其力无穷……这句诗,意在提醒玩家,也许反贼,是一个非常厉害的角色.',
			sgscq_yujin: '☆曹魏锦绣-012<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>智谋型武将,懂得明哲保身.原属青州兵,后受曹操赏识,官运亨通.一直怀疑玩家的内奸身份,但苦于曹操多疑,不能贸然指出.直到玩家设计陷害张允、蔡瑁两人,使曹操的赤壁之战大败而归,才后悔不已.怀疑来路不明的玩家才是真正的反贼,他发誓,一定要揭露玩家的真面目!',
			sgscq_xuhuang: '☆曹魏锦绣-013<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>三国曹魏五子良将之一,官渡大战期间,曾被荀攸推荐截烧袁绍辎重,助曹操大胜.在对抗马超、韩遂时,曾主动要求率领精兵截断敌人后路,在曹操离间马韩二人后大破敌军.之后在解围樊城、襄阳之战中,击败关羽,在一定程度上帮助吕蒙渡江,从而间接破坏了孙、刘联盟,改变了当时的战略格局,使曹操重新掌握了战略主动权.',
			ybal_zuoci: '☆曹魏锦绣-014<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>左慈少明五经,兼通星纬,是三国时代一个永远的谜团.相传他自修行六七十载,通晓万端变化、戏弄各方诸侯,皆能应对自如、明哲保身.进山炼丹成仙前夕,便已洞察到玩家与反贼是何种异常的存在,而左慈也只是叹了口气,隐入云中,不再现世.',
			sgscq_beimihu: '☆曹魏锦绣-015<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>日本弥生时代邪马台国的女王,是个极具神秘色彩的古代女性统治者,在三国时期曾向魏国派过使节.',
			sgscq_fuhuanghou: '☆曹魏锦绣-016<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>本名伏寿,汉献帝皇后,徐州琅邪郡东武县人,西汉大司徒伏湛八世孙,父亲是学者伏完,母为阳安长公主刘华.作为皇后二十年,于建安十九年被曹操幽闭而死.',
			sgscq_fuwan: '☆曹魏锦绣-017<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>0',
			scsp_caiwenji: '☆曹魏锦绣-018<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>',
			//-------------------------☆赤壁之战
			sgscq_sunquan: '☆赤壁之战-001<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>正统的富二代加官二代,理当是众人敬仰的对象.但因为庶出,始终对自己的身份自卑不已.对兄长孙策又妒又爱,希望有一天能超越兄长,证明自己的实力.幸得孙策对他关爱有加,两人守望相助,为东吴基业共同奋斗!孙策遇刺身亡后,他难过不已,同时也激发了他的斗志,一定要统一三国,完成兄长的遗愿!',
			sgscqshen_zhouyu: '☆赤壁之战-002<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>公瑾身材高大、相貌俊美,志向远大,与孙策自幼交好.他21岁起,随孙策平定江东,孙策遇刺身亡后,孙权继任,他又继续辅佐孙权.他曾率江东集团大军与刘备联合,赤壁之战大败曹军.他性度恢廓,堪称奇才,只怜天妒豪杰,英雄命短,他只活了36岁,便一病而去!</span>',
			schao_xiaoqiao: '☆赤壁之战-003<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>从小是大乔的跟班,两姐妹常打扮成寻常女子上山狩猎,某次打猎时,误打误撞遇见孙策携周瑜一起打猎,四人相对,各自有了中意的人.小乔爱慕周瑜英俊风流、文武双全,成为周瑜的妻子,两人才子佳人,珠联璧合一起幸福的生活,直至周瑜去世.小乔为让夫君起死回生受反贼的蛊惑,犯下大错.</span>',
			sgscq_huanggai: '☆赤壁之战-004<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>经常自我鞭笞的老将,对自己要求严格,监管苛刻,每日三省吾身,若有不足之处,必自我惩罚把自己打得血肉模糊,才解心中内疚之情.长期的自我戒律使他的身体变得非常强健,寻常刑具打在身上如同瘙痒,这使得赤壁使用火攻计,需要他诈降时,很吃了一番苦头,使曹操信服,终取得了赤壁之战的胜利.',
			scdi_caocao: '☆赤壁之战-005<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>世人称他为<不世之枭雄>,既是大韬大略的军事奇才,野心勃勃的弄政高手,却也是疑心重重的孤独症患者.戎马一生,有帝之实,无帝之名,他至死也没有自立为帝,大概他一生所追逐的,是一统的盛世,而不是动荡的帝国.',
			ybnb_guanyu: '☆赤壁之战-006<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>他此生最恨鼠辈小人,讨厌被暗算,因为这样就无法时刻保护自己的美貌了.可惜人算不如天算,关羽还是遭吕蒙暗算,最终败走麦城,含恨被杀.然而他前世本为南海龙王,死后本应归为天神,却因无法了结对吕蒙的怨恨,魂不能聚,落得半神半鬼.游历王之宝库归来后,性情更加暴烈,手持乖离剑,身驭金狮,浑身毛发喷张,金光闪耀,整日游走于神鬼两界,对吕蒙追魂索命,终使其七孔流血而死.',
			sgscq_ganning: '☆赤壁之战-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>脾气暴躁,三国时期的黑社会头领,经常违法乱纪,惹怒孙权及其手下将领.但武艺高强,拥兵自重,使孙权重视他的长处,不得不厚待他.这使他骄横跋扈,以吴王自居.他极重义气,当反贼许以重利,利用他灭绝东吴时,被他一口回绝,甚至兴起要与反贼大战,只可惜不是反贼的对手,死于荒野.',
			schao_lingtong: '☆赤壁之战-008<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>吾遵从你的召唤,愿为你而战!凌统在小宇宙突破后,得到了圣杯之力,一把刺穿死棘之枪使的出神入化.枪骑凌统受吴大帝孙权之命,誓为吴国扫平障碍.</span>',
			sgscq_zhangzhao: '☆赤壁之战-009<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>0',
			sgscq_zhanghong: '☆赤壁之战-010<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>0',
			sgscq_lusu: '☆赤壁之战-011<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>土豪世家,曾在东吴发生粮荒时,赠送周瑜一仓粮食,与周瑜成为好友,并被引荐给孙策,孙策被刺身亡后,正式成为孙权的战略家与外交家.从商人到政治家,鲁肃广投财力毫不吝啬,为的就是有朝一日能成为国之栋梁,如愿后,又尽力辅佐孙权,出谋划策,帮助其成就一番霸业.',
			sgscq_caimao: '☆赤壁之战-012<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>出身于荆州豪门蔡氏,其姐姐是荆州刘表的老婆,起初辅佐刘表和刘表次子刘琮,在帮刘琮争夺荆州政权的时,设计谋害刘备,但未成功.迫刘琮降伏曹操,最终投入曹操旗下.',
			sgscq_zhangyun: '☆赤壁之战-013<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>刘表外甥、部将.在投降曹操后位列将军,与蔡瑁一起统领水军,虽于赤壁之战初期战败于吴国水军.周瑜用反间计,通过曹操的说客蒋干<偷走>蔡瑁、张允二人的投降书,致使二人被曹操斩首.',
			sgscq_jianggan: '☆赤壁之战-014<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>曹操的说客,在赤壁大战中企图劝说周瑜投降,反被周瑜摆下<群英会>,诱导他盗走假的张允、蔡瑁二人的<投降书>,以反间计除去了这二人.后却自以为立功,成为笑柄.',
			sgscq_pangtong: '☆赤壁之战-015<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>与诸葛亮同拜军师中郎将,30多岁英年早逝,有人说是一山不容二虎,因智谋不如诸葛亮,索性诈死离开.也有秘闻说他被反贼收买,潜伏蜀国,帮助反贼未来控制三国.还有八卦称他实际内心一直暗恋诸葛亮,因无法打破禁忌的爱恋,克制不住内心的痛苦,才设计离开.各种传言,事实如何,大概只有问他本人了.',
			sgscq_lvmeng: '☆赤壁之战-016<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>他自幼追随孙策,以胆气著称.折节读书后,识见精博,克己让人,有国士之风,<士别三日,当刮目相待.>这句话便源指吕蒙.但孙权继位后,才逐渐受到重用.他曾勇斩陈就,破黄祖、朱光;智擒郝普、关羽.他一生忠于孙吴,尽心力筹谋.然英雄命短,他在42岁时便不治而亡.',
			sgscq_xunyu: '☆赤壁之战-017<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>被称为<王佐之才>之人,魅力不凡,曹魏首屈一指的战略家,被曹操视为汉初的张良.而人以群分,荀彧的朋友圈也尽是戏志才、郭嘉等能人志士,是曹操赖以谋取天下的智囊团.荀彧居中持重,清高正直且情商极高,是当时魏国年轻女子心中的不二之选,更甚至需要经常对郭嘉有意无意的调戏睁一只眼闭一只眼.军中有传言他经常帅得睡不着,真假亦不可考.',
			sgscq_zhugejin: '☆赤壁之战-018<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>诸葛一族有三君,各在一国:蜀得其龙、吴得其虎、魏得其狗.虎,诸葛瑾之谓也.诸葛亮的兄长,才华不俗,更以胸怀宽广、温厚诚信的品格闻名,与诸葛亮一样在公事上不带亲属感情,深得其效力的历代吴国之主的信任.为臣,直方敢谏、能主大事;为友,弘缓雍雅、大度善思,是可靠的当世之杰.',
			sgscq_zhoutai: '☆赤壁之战-019<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>海盗船船长,后归顺东吴,曾在攻城时为保护孙权身受21枪重伤,幸得名医华佗治疗才保全一命.战死沙场后,将魂不服东吴未成霸业,怨气冲天,受反贼控制,想自我毁灭而不能,幸得玩家后来的救助,才解脱控制.后为报恩,拼尽全力,告诉玩家,他所勘察出的其他反将的下落……',
			//-------------------------☆攻取西蜀
			sgscq_liufeng: '☆攻取西蜀-001<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>他自幼便是孤儿,后被刘备收为义子.他个性刚猛,武力过人,曾随张飞、赵云扫荡西川,攻无不克.后又统领孟达攻取上庸,深为刘备信任.但后来关羽被困麦城,他误听孟达离间之言,不发兵救援,终致关羽被害.随后孟达畏罪降魏,与徐晃共袭刘封,刘封拒降,却遭部下叛变,终败归成都.诸葛亮担心刘备去世后难以制服驾驭刘封,便建议刘备让其最终自裁.',
			sgscq_huangzhong: '☆攻取西蜀-002<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>箭术超群、老当益壮、脾气暴躁的老头,一言不合就喜欢放几箭擦过别人的要害部位,总搞不好人际关系,但身为五虎将之一的他毫不在乎.最怕的人就是诸葛亮,经常受诸葛亮的激将,做些不愿做的事,比如调查反贼,比如弄清楚玩家的来历,但这一切都在秘密中进行,没有任何人知道.',
			sgscq_weiyan: '☆攻取西蜀-003<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>忠肝义胆之士,刘备的神秘后盾.拥有超强回复力的不死之身.诸葛亮一度怀疑其神秘力量的来源,民间疯传他是吸血鬼投胎,他自己解释曾经死过一次,越过地狱之火重回阳间时,就多了自动补血的能力.也正因为这种特殊功能,使他看上去始终带着一种异世界恐怖感,使诸将很难和他和谐搭配.',
			sgscq_fazheng: '☆攻取西蜀-004<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>翼侯法正,善出奇谋,年长于诸葛亮四岁,两人紧密合作于蜀国军政,均被刘备视作股肱.这个恩怨分明、睚眦必报,带有一些奸邪气质的聪明男子,在正气传统的蜀军中十分独特,因此很受刘备与众臣青睐喜爱,甚至于曹操都感慨自己为何<收奸雄略尽,独不得法正邪？>他的独特气质使反贼认为能够轻易将其魔化,却惨遭打脸——法正抵抗住了魔化侵袭,即使因此气血耗尽、匆匆逝去.刘备因此连着哭泣了数日.',
			sgscq_yanyan: '☆攻取西蜀-005<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>三国时期武将,初为刘璋部下,担任巴郡太守.刘备进攻江州时,严颜被张飞战败,后被俘,临死不降,大叫<只有断头将军,没有投降将军>,张飞被其勇气所征服,立即释放并尊其为宾客.',
			sgscq_mengda: '☆攻取西蜀-006<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>多重国籍,在蜀汉时,对关羽见死不救,与刘封不合,背蜀投魏,后来在诸葛亮的诱惑下,企图又跳槽回蜀汉,但被同事出卖,最后被司马懿所斩.',
			sgscq_wulan: '☆攻取西蜀-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>原为东汉末年益州牧刘璋的部将,后降刘备.在汉中对曹操的战役中,与马超、张飞各领一军,驻扎在下辩,被魏将曹洪所击败,败退时为阴平的氐族首领强端所斩.',
			sgscq_xiahouyuan: '☆攻取西蜀-008<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>少年才俊,威风凛凛,人称快刀破风的炫酷少年,有逢凶化吉的本领.崇拜族兄夏侯惇,却意外亲见他被反贼控制,成为身不由己的反将.夏侯渊无法帮他解开反贼的控制,只能向外界隐瞒掩饰,使夏侯惇在反将的道路上越走越远,直至被玩家消灭才解除控制.夏侯渊把这一切都看在眼里,他赌咒不管付出多少代价,一定要解开反贼的秘密!',
			sgscq_caoren: '☆攻取西蜀-009<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>曹操的堂弟,自幼喜欢骑马射箭,后来曹操起兵时,与曹洪一同入军.他随曹操前后征讨过董卓、袁术、吕布、张绣,官渡之战又战胜了刘备和袁绍.赤壁兵败后,是他拖住周瑜,为曹操重整旗鼓赢得了宝贵时间.他渭南破马超、襄樊挡关羽;他严整奉法,一生忠于曹魏,为魏朝立下了汗马功劳.',
			sgscq_maliang: '☆攻取西蜀-010<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三国杀语音<br>马谡的四哥,在兄弟五人中最为出色,因眉中带白毛,有<马氏五常,白眉最良>之称.他曾奉命出使东吴,受到孙权恭敬的接待.后夷陵之战中,刘备因报仇心切,起兵伐吴,马良再三劝阻无效,刘备最终兵败,马良遇害身亡.',
			scsp_sunshangxiang: '☆攻取西蜀-011<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>又称孙夫人,铁娘子,美丽贤淑,智胜男儿,是孙权的胞妹,赤壁之战后嫁给刘备.孙权本欲借假婚之机,将刘备扣作人质,索回荆州,不料却反遭诸葛亮锦囊妙计,假婚成真,后又追逃未遂、损兵折将.<赔了夫人又折兵>典故即源于此.后来夫人被骗回东吴,便再也未能与夫君相见.刘备猇亭兵败后,被讹传死于军中,她便驱车江边,望西遥哭,投江而死.后人立庙江滨,号曰枭姬祠.',
			schao_shinvduizhang: '☆攻取西蜀-012<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>电玩我最强!</span>',
			sgscq_yufan: '☆攻取西蜀-013<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>三国时期吴国学者,对于经学颇有造诣,尤其精通<易>学,孙权曾夸他可与东方朔媲美.他本是王朗部下,后投奔孙策.他脾气倔,人缘差,说话直,总是犯颜谏争,把孙权气的要命,甚至有一次酒后差点斩了他,最终被孙权流放.流放后他做起了学问,还开设讲堂,但依然关心国家大事.后来孙权遭遇挫折,又想起了这个可恶的老头,大感后悔,于是派人寻找,但他已经去世,享年70岁.',
			sgscq_xiahoushi: '☆攻取西蜀-014<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>张飞的妻子,刘禅的丈母娘,魏夏侯渊的侄女,夏侯霸的堂妹,于采桑时为张飞所得,为其生了两个儿子和两个女儿.后来这两个女儿都成了蜀汉后主刘禅的皇后.',
			sgscq_machao: '☆攻取西蜀-015<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>他出生在一个落魄的靠砍柴为生的家庭里,年纪轻轻便英勇善战.他本为凉州军阀,因曹操的假道灭虢之计,起兵反曹,几乎让曹操丧命,曹操因而怒斩马超三族近三百口人.曹操曾表示:<马儿不死,吾无葬地也>.后来马超归降刘备,威名赫赫,屡立战功,临终前将唯一的亲人马岱托付于刘备.诸葛亮曾赞誉马超<兼资文武、雄烈过人、一世之杰>.',
			sgscq_wangyi: '☆攻取西蜀-016<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>节义多谋.丈夫在魏国边境当小官时,夫妻分隔两地,遇难后因顾念幼女,未能死节,待女儿送至父亲身边后,曾欲服毒自尽,未遂.马超作乱时,协夫守城,舍子为国,丈夫提出的九条奇计中,条条皆有其谋.',
			sgscq_madai: '☆攻取西蜀-017<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>马超的堂弟,蜀汉中后期的重要将领.早年曾经从曹操手中逃生,后跟随马超大战曹操.马超全家老少都让张鲁、曹操等人斩尽,极惨无比.而马岱是马超仅存的血亲,马超临终前将其托付于刘备,继承了马超的爵位,延续了马家的香火.后在诸葛亮死后,奉杨仪之命斩了魏延.',
			//-------------------------☆夷陵之战
			scdi_liubei: '☆夷陵之战-001<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>三国最矛盾也最具个性的主公,比起反贼,他自己本身也充满了谜团.以德服人,宽仁得众,既有张飞、关羽万人之敌,又得诸葛孔明管、乐之俦.左提右挈、志在天下的他一朝为帝,本已是宏图大展之时,却因情感的失控使蜀帝国走向了复仇与湮灭.托孤之时他选择的竟是玩家而不是诸葛亮,也许,历史已经开始错了.',
			schao_luxun: '☆夷陵之战-002<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>聪明绝顶的智将,可以防范大部分计谋,身体瘦弱,玉面朱唇,风流可人,扮女子亦勾魂荡魄,然诱人处在其正邪、真假的难辨;暗恋玩家,认为玩家是男人中的男人,不由自主的被吸引.暗自帮玩家追查反贼的下落,却因为身体羸弱,反被反贼控制,心神俱封,成为反贼手下的反将.</span>',
			sgscqshen_guanyu: '☆夷陵之战-003<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>他此生最恨鼠辈小人,讨厌被暗算,因为这样就无法时刻保护自己的美貌了.可惜人算不如天算,关羽还是遭吕蒙暗算,最终败走麦城,含恨而亡.然而他前世本为南海龙王,升天后本应归为天神,却因无法了结对吕蒙的怨恨,魂不能聚,落得半神半鬼.他性情暴烈,手持鬼龙斩月刀,身乘梦魇赤兔马,浑身毛发喷张,似火如焰,整日游走于神鬼两界,对吕蒙追魂索命,终使其七孔流血而亡.</span>',
			scmo_zhangfei: '☆夷陵之战-004<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br><span class=YB_darktext>二哥走后,他一直怪自己没能照顾好他,于是脾气更加暴躁,经常鞭打手下,最终遭来了灭身之祸.还没来得及为二哥报仇的他,怨念极深,死未瞑目,而他的冤魂也始终不肯散去.任日月轮回,斗转星移,他的魂魄重新聚集并魔化,终于重新修炼成人形,然而却已不再具备本体的意识和人性,除了仇恨……</span>',
			sgscq_guansuo: '☆夷陵之战-005<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>关羽的第三子,刘关张桃园结义,关羽妻胡氏怀着关索回到娘家,生下关索.他7岁走失,为索员外拾得,9岁被花岳老先生收为弟子,遂取名为<花关索>.年纪轻轻的他,十八般武艺双全.后来他与母亲同去荆州认父,途中娶了鲍三娘和王桃、王悦姐妹为妻.投蜀后,在曹魏十万大军伐蜀时战死,其妻鲍三娘也壮烈殉国.',
			sgscq_guanyinping: '☆夷陵之战-006<br>☆技能设计:夜白<br>☆代码撰写者:夜白(感谢代码群里的各种援助,特别感谢狂神)<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>关羽之女,18岁就学得一身武艺,自幼跟随父亲南征北战,巾帼不让须眉,也时常忘记自己的女儿身,耽搁了婚姻大事.先暗恋孙权,但父亲不许他嫁敌国男子.后与关平相恋,不料父亲收关平做了义子,原本的儿女情怀,如今只能以兄妹相称.后来迷上与三国世界格格不入的玩家,但深知父亲与其不和,只能将这份感情埋藏在心底.',
			sgscq_huatuo: '☆夷陵之战-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>古往今来第一神医,能妙手回春,可为人续命,望闻问切,判人性命.对凡人觉得看谁谁有病,有的是生理疾病,还有药可治.有的是心理疾病,便无药可医.医中圣手,专精自负.最讨厌相思病,认为此病即使是他也无法根除,只有将患者相思之人除去,才能一劳永逸.所谓除一人,救一人,保持阴阳平衡,也是医者良心.',
			sgscqshen_lvmeng: '☆夷陵之战-008<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>他自幼追随孙策,以胆气著称.折节读书后,识见精博,克己让人,有国士之风,<士别三日,当刮目相待.>这句话便源指吕蒙.但孙权继位后,才逐渐受到重用.他曾勇斩陈就,破黄祖、朱光;智擒郝普、关羽.他一生忠于孙吴,尽心力筹谋.然英雄命短,他在42岁时便不治而亡.</span>',
			schao_caopi: '☆夷陵之战-009<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>曹操与卞夫人的长子,文武双全,野心远超父亲的阴谋家.表面看上去爱好美色,纵情享乐,连玩家也忽略了他的重要性,实际却暗自积攒实力,不容许任何人觊觎他太子的宝座,但凡有人入侵,即使是他的血脉至亲也不轻易放过.甄姬最怕的人就是他,或许,这里面有什么难言之隐？</span>',
			schao_zhenji: '☆夷陵之战-010<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>谁最美啊,我最美!</span>',
			scdi_sunquan: '☆夷陵之战-011<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>吴王孙权,登基为帝,东吴帝国最初的二十四载,他功勋卓著,政绩不凡.见策知变,能识虚实,可厚可黑,不失为一代雄略之主.',
			sgscq_baoxun: '☆夷陵之战-012<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>其父鲍信为曹操好友,与曹操共同抵御黄巾军时,为掩护其突围而战死疆场.后曹操追录其功,鲍勋始入职场,而后素以清白高洁知名于世.曹丕继位前,他曾因秉公执法得罪曹丕;继位后,又因屡次谏诤触怒曹丕,最终被借故处死.',
			sgscq_zhangxingcai: '☆夷陵之战-013<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>张飞之女,和刘禅两小无猜,青梅竹马的长大.因长在军中,父亲又是一个粗人,十分厌恶军人生硬、粗暴的性格特征,相反觉得刘禅温柔可爱,起了喜爱之心.在别人都看不起刘禅的时候,只有她站在刘禅的身边,认同刘禅的理念,相信他的为人,并对他不离不弃的照顾,防止别人欺负他,最后有情人终成眷属,做了刘禅的王妃.',
			scsp_huangzhong: '☆夷陵之战-014<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>起初荆州牧刘表以其为中郎将,后随刘备入蜀,<勇毅冠三军>.建安二十四年自定军山大败夏侯渊,被封为征西将军,后又封为关内侯.',
			sgscq_liaohua: '☆夷陵之战-015<br>☆技能设计:朝拾<br>☆代码撰写者:jacken(夜白优化)<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>最初为关羽的跟班儿,关羽败亡后归入孙吴,后用诈亡之计回归蜀汉.他果敢刚直,曾多次参与蜀汉北伐,攻破游奕,击毙王赟,是蜀汉后期的重要将领.蜀汉灭亡后,在徙往洛阳中途病逝.',
			sgscq_mifang: '☆夷陵之战-016<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>富N代,家族资产过10亿,福布斯中国富豪排行榜前100名,最初给徐州牧陶谦打工,陶谦死后,投奔了刘皇叔,位居南郡太守,但和关羽不和,最后受到蛊惑而投降吴国,担任吴国将军,并为吴国征战天下.',
			sgscq_sunluban: '☆夷陵之战-017<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>三传里没有,我私自加的.',
			sgscq_sunluyu: '☆夷陵之战-018<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>孙权之女,生母步练师,胞姐孙鲁班,生有两子一女.她曾先后嫁与两任丈夫.为人很像其母,全然无姐姐那般狡诈阴毒,凡事都循规蹈矩.因在废除太子的意见上没有赞同姐姐,而被记恨,最终遭到谗害而枉死.后来孙鲁班为了自保,捏造事实,嫁祸于妹妹的两个儿子,这招借刀杀人终致妹妹血脉全无.然苍天有眼,她仅存的女儿辗转之后却最终成为了东吴皇后.',
			sgscq_panzhang: '☆夷陵之战-019<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>他天性放荡,喜欢喝酒,家中贫穷,喜欢赊账酤酒.后投奔孙权,一生为其东征西讨.赤壁之战,他接应董袭,从江中攻击曹操;刘备与孙尚香完婚逃离东吴,他奉命追赶;孙权偷袭荆州,他随吕蒙奇袭烽火台;后又率部擒关羽、关平,夺青龙偃月刀;刘备伐吴时,诱斩老将黄忠.他奢侈贪财,常设军市,又劫掠将士财物,只是孙权念其有功,未予深究.最终,他在夷陵之战被为父报仇的关兴所斩.',
			sgscq_handang: '☆夷陵之战-020<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>孙吴开国功臣,历仕孙坚、孙策、孙权三代.长于弓箭、骑术,膂力过人,深受孙坚赏识.曾于孙坚攻襄阳之时劝其班师,孙坚不听,导致大败并且丢掉性命.后从孙策平定江东,再佐孙权.赤壁之战,大破蔡瑁,后斩焦触,与周泰合力败文聘,救黄盖.濡须口之战,还曾与周泰合力三十回合战平许褚.他一生戎马,功勋卓著,一定想不到他死后,儿子却淫乱不轨,最终叛逃降魏,还反过来残害吴国百姓.',
			sgscq_dingfeng: '☆夷陵之战-021<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>少年时便骁勇善战,斩将夺旗,屡立功勋.东兴之战,雪奋短兵,大破魏军.后又辅助孙休诛灭权臣孙綝,被拜为大将.他是吴国的重要将领,计略过人,能断大事,与北方政权从曹操时代打到司马炎时代,历任孙权到孙皓四位吴国君主,见证了三国的盛衰兴亡.但他去世后,孙皓为追究他当年出兵无功而返的责任,害了他的儿子丁温,流放了他的家属.',
			sgscq_heqi: '☆夷陵之战-022<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>孙吴开国功臣,有勇有谋,不畏强敌.他讨伐山越,合肥救主,身经百战,所向披靡,一生平叛无数,深受孙权器重.他生性奢侈华丽,尤其喜好军事,所用器械都极为精致漂亮,连船只的细节都要精雕细琢.在平定黟歙地区时,他出奇制胜,为中国古代山地攻坚战提供了出色的典范.',
			sgscq_quancong: '☆夷陵之战-023<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>三国时期吴国名将,老婆是孙权的女儿孙鲁班,官至右大司马、左军师,曾建议孙权讨伐关羽,在孙权成功擒拿关羽之后,被加官进爵.',
			scmo_huanggai: '☆夷陵之战-024<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br><span class=YB_darktext>吴国三朝元老,一生立下无数战功,老当益壮却也因此成为了反贼的主要目标,成为反贼实现野望的罪恶工具.当神智被魔性一点一点侵蚀的时候,他意志深处的勇猛与果敢虽然保留了下来,而昔日征战中留下的伤痛却被无限地放大了.现在的他,只想让阻挡他的所有人感受一切他所承受过的苦痛,甚至更多……</span>',
			scmo_lingtong: '☆夷陵之战-025<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传旋风语音<br><span class=YB_darktext>每天日落时分,都会有个头发散乱的男子,布衣裹身,赤脚沾地,手握长枪,独坐在窗边醉饮.他身材高大,英俊的脸上有着淡淡的小胡茬,空洞而呆滞的目光中透露着一丝不舍与无奈.他看起来年近三十,却满是沧桑,彷佛即将走到人生的尽头……他就是凌统,这一年,他29岁,旧伤复发的他,自知命不久矣,诸多无奈与彷徨纷纷涌上心头,唯有一醉解千愁.然而没有人注意到,在窗边还散落着一封奇怪的信,是一个自称<反贼头子>的人写给他的,据说可以让他以另一种身份活下去,并且变得更强大,只是会让人忘记过去的一切……想到这里,他拿起酒壶,想再狂饮一番,却发现酒壶早已空空.他默默地垂下了头,心中不禁问道:<这样真的好吗？>......</span>',
			//-------------------------☆六出祁山
			sgscq_menghuo: '☆六出祁山-001<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>南中王孟获,为南方彝族首领.作战勇敢,意志坚强,且待人忠厚,使他彝族中极得人心.诸葛亮南下平其叛乱,百战百捷,更为了争取孟获本人的心意,将其七擒七纵,使之心悦诚服.孟获受封后,蜀国南方的民心安定,直到诸葛亮死前,蜀国南方都没有在发生过叛乱.',
			sgscq_zhurong: '☆六出祁山-002<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>南蛮大王孟获之妻,传说为火神祝融氏之后裔,恩怨分明,武艺超群,一把飞刀出神入化,百发百中,再者拥有绝色的容貌,人称刺美人;在诸葛亮七擒七纵孟获之后,随孟获投降蜀汉.',
			scsp_guansuo: '☆六出祁山-003<br>☆技能设计:朝拾<br>☆代码撰写者:缘伴随行(夜白优化)<br>☆插图:三国杀传奇<br>☆配音:三国杀语音<br>关羽的第三子,刘关张桃园结义,关羽妻胡氏怀着关索回到娘家,生下关索.他7岁走失,为索员外拾得,9岁被花岳老先生收为弟子,遂取名为<花关索>.年纪轻轻的他,十八般武艺双全.后来他与母亲同去荆州认父,途中娶了鲍三娘和王桃、王悦姐妹为妻.投蜀后,在曹魏十万大军伐蜀时战死,其妻鲍三娘也壮烈殉国.',
			sgscq_huaman: '☆六出祁山-004<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>天真烂漫的犬系女子,于诸葛南征、玩家同行追踪反贼之时与玩家偶遇.品质纯粹的她似乎能感知到反贼的气息,作为交换信息的筹码,要求玩家帮忙拯救屡次于战后被擒的其父孟获.经过交锋后与关索互生情愫,不顾孟获反对跟随关索甚至共同披挂上阵,南中平定后得以相伴关索左右,也如约给了玩家反贼的线索.',
			sgscq_baosanniang: '☆六出祁山-005<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>她是鲍家庄鲍员外的小女儿,关羽的三子、关索的妻子.关索曾英雄救美,斩了看上鲍三娘的山匪头目,鲍三娘自此便以身相许.她自小聪明伶俐,关羽也非常疼爱她,曾亲授其武艺,故其文武双全.后曹魏三路大军十万之众伐蜀,关索喋血战场,鲍三娘也在血战后,壮烈殉国.',
			sgscq_masu: '☆六出祁山-006<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>0',
			sgscq_wangping: '☆六出祁山-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>三国时期蜀汉将领,原属曹操,曹操与刘备斗争中,投降于刘备,深受诸葛亮的器重,多次随诸葛亮北伐.诸葛亮死后镇守汉中,曹爽率领十万大军攻汉中时,被王平所击退.',
			scsp_jiangwei: '☆六出祁山-008<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>三传里没有,我私自加的.',
			sgscq_liushan: '☆六出祁山-009<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>刘备长子,生母甘夫人,蜀汉后主,小名阿斗.因童年坎坷,屡遭劫难,强臣林立,而懂得了韬光养晦.正因如此,在做了亡国奴后,一次被司马昭试探其是否思念蜀国时,他答道:<此间乐,不思蜀也.>.<乐不思蜀>的典故即源于此.正因他始终装作一副无能且安乐的样子,才最终骗过了魏国,保全了刘氏血脉.',
			sgscq_simayi: '☆六出祁山-010<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>生于乱世,做事果断,英姿不凡,有雄豪之志.他懂政治、通军事,是西晋王朝的奠基人.他是魏国四代托孤辅政之权臣.善谋奇策的他,曾两次率大军成功对抗诸葛亮北伐,又远征平定辽东,战功赫赫.他兴修水利, 在两淮屯田,对农耕经济发展作出了重要贡献.他一直活到73岁,司马炎称帝后追尊其为宣皇帝.',
			sgscq_zhangchunhua: '☆六出祁山-011<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><宝运归其后胤,盖有母仪之助焉>.张春华的孙子晋武帝司马炎受禅登基后,追谥其为宣穆皇后.',
			sgscq_manchong: '☆六出祁山-012<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>曹氏四代元老,清廉严法,有勇有谋,功勋卓著.曾参与赤壁之战,后镇守魏国南线,大破孙权,射毙孙泰.他一生清忠俭约,年迈退休后,甚至家无积蓄,最终官至太尉,子孙封侯.',
			sgscq_lvqian: '☆六出祁山-013<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>曹魏的全能神,将军和刺史合二为一,德智体美劳全面发展,彼时与夏侯渊是部门同事,共同镇压黄巾军.',
			schao_huangzhong: '☆六出祁山-014<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>陈寿言<忠常先登陷阵,勇毅冠三军>.黄忠射箭,追求的境界已不再是一个<准>字,而是一个<气>字!</span>',
			sgscq_haozhao: '☆六出祁山-015<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>曹魏著名将领,在陈仓之战中作为防守方,与诸葛亮昼夜攻守相持了二十多天,最后以诸葛亮退兵收场.',
			sgscq_niujin: '☆六出祁山-016<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>曹魏中后期将领,在与周瑜对战中,以一句<不出城一战乃懦夫行为>一鸣惊人,传说是英国<牛津>大学的创始人.',
			schao_xiahouyuan: '☆六出祁山-017<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>少年才俊,威风凛凛,人称快刀破风的炫酷少年,有逢凶化吉的本领.崇拜族兄夏侯惇,却意外亲见他被反贼控制,成为身不由己的反将.夏侯渊无法帮他解开反贼的控制,只能向外界隐瞒掩饰,使夏侯惇在反将的道路上越走越远,直至被玩家消灭才解除控制.夏侯渊把这一切都看在眼里,他赌咒不管付出多少代价,一定要解开反贼的秘密!</span>',
			schao_zhangxingcai: '☆六出祁山-018<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>张飞之女,和刘禅两小无猜,青梅竹马的长大.因长在军中,父亲又是一个粗人,十分厌恶军人生硬、粗暴的性格特征,相反觉得刘禅温柔可爱,起了喜爱之心.在别人都看不起刘禅的时候,只有她站在刘禅的身边,认同刘禅的理念,相信他的为人,并对他不离不弃的照顾,防止别人欺负他,最后有情人终成眷属,做了刘禅的王妃.</span>',
			schao_wanglang: '☆六出祁山-019<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>王司徒化身圣诞老人前来复仇.孔明小儿,休得猖狂,且看我饶舌三声,叫汝吐血三升!</span>',
			sgscq_guanxing: '☆六出祁山-020<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>关羽的次子,关平的弟弟,关银屏的二哥.从小为人和善,声望极好,极受诸葛亮器重.他爹和大哥被斩后,他与张飞的儿子张苞结义.随刘备伐吴时,遇仇人潘璋,并将其斩毙,夺回了青龙偃月刀.后随诸葛亮北伐,屡立战功,最终于诸葛亮第六次北伐前病逝.',
			sgscq_guanzhang: '☆六出祁山-021<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>乃五虎上将关羽之子和张飞之子,两人均是三国时期蜀汉重要将领,两人是关系很好的结拜兄弟,并称<小关张>.',
			//-------------------------☆星陨五丈原
			sgscqshen_zhugeliang: '☆星陨五丈原-001<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>勘破天机的真人,通奇门遁甲,对天下苍生怀有怜悯之心.认识玩家后,学习了很多来自未来的新奇知识,希望说服玩家为蜀国所用,帮助蜀国一统大业.早就感觉到反贼的存在,甚至夜观星象探查出反贼的来历,但认为天下万物皆有所用,不能刻意影响自然规律,间接促使反贼发展庞大,但诸葛亮对此毫无畏惧,他似乎对一切运筹帷幄,早有打算.</span>',
			schao_weiyan: '☆星陨五丈原-002<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>忠肝义胆之士,刘备的神秘后盾.拥有超强回复力的不死之身.诸葛亮一度怀疑其神秘力量的来源,民间疯传他是吸血鬼投胎,他自己解释曾经死过一次,越过地狱之火重回阳间时,就多了自动补血的能力.也正因为这种特殊功能,使他看上去始终带着一种异世界恐怖感,使诸将很难和他和谐搭配.</span>',
			scsp_machao: '☆星陨五丈原-003<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>誓仇,灭族之恨,不共戴天!因为马腾被曹操所杀,马超于情于理当然要为父报仇,所以率军杀向长安;而曹操采纳了贾诩的计策,挑拨马超与韩遂的关系,导致两人相互仇杀,最终曹操轻松获胜.',
			sgscqshen_simayi: '☆星陨五丈原-004<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>生于乱世,做事果断,英姿不凡,有雄豪之志.他懂政治、通军事,是西晋王朝的奠基人.他是魏国四代托孤辅政之权臣.善谋奇策的他,曾两次率大军成功对抗诸葛亮北伐,又远征平定辽东,战功赫赫.他兴修水利, 在两淮屯田,对农耕经济发展作出了重要贡献.他一直活到73岁,司马炎称帝后追尊其为宣皇帝.</span>',
			schao_zhangchunhua: '☆星陨五丈原-005<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>固有王者相,奈何胭脂殇.漫卷天山雪,孤影莫自怜.</span>',
			sgscq_dianman: '☆星陨五丈原-006<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>三国时期曹魏武将,官二代,老爸是为曹操献身的典韦.',
			schao_zhurong: '☆星陨五丈原-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>南蛮大王孟获之妻,传说为火神祝融氏之后裔,恩怨分明,武艺超群,一把飞刀出神入化,百发百中,再者拥有绝色的容貌,人称刺美人;在诸葛亮七擒七纵孟获之后,随孟获投降蜀汉.</span>',
			//-------------------------☆剑阁死战
			sgscq_jiangwei: '☆剑阁死战-001<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br>天水的<麒麟儿>姜维伯约,敏于军事,既有胆义,深解兵意,以至于深得敌对阵营的诸葛亮的青睐.虽能文能武,却未受到应有的信赖,更是在天水交战之际受到来自魏军团的自身和家人安危的双重胁迫.感于玩家和诸葛亮的协助,姜维不得已降蜀.之后的他也不负诸葛的期待,精彩地活跃在蜀国的历史中.',
			sgscq_dengai: '☆剑阁死战-002<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>邓艾是三国时期魏国杰出的军事家、将领.其人文武全才,深谙兵法,对内政也颇有建树.本名邓范,后因与同乡人同名而改名.邓艾多年在曹魏西边战线防备蜀汉姜维.公元263年他与钟会分别率军攻打蜀汉,最后他率先进入成都,使得蜀汉灭亡.后因遭到钟会的污蔑和陷害,被司马昭猜忌而被收押,最后与其子邓忠一起被卫瓘派遣的武将田续所杀害.',
			sgscq_zhonghui: '☆剑阁死战-003<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>钟会是魏国名将、谋士、书法家,太傅钟繇之幼子、青州刺史钟毓之弟.自幼才华横溢,上至皇帝、下至群臣都对他非常赏识.景元四年(263年),他与邓艾发动魏灭蜀之战,分兵攻打蜀汉,导致蜀汉灭亡.此后钟会与蜀汉降将姜维共谋,欲据蜀自立,遂打压原同僚邓艾,并且图谋反叛.却因部下的兵变而失败,自己也死于乱军,时年40岁.',
			sgscq_simazhao: '☆剑阁死战-004<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>西晋王朝的奠基人之一,甘露五年,魏帝曹髦被弑杀,司马昭立曹奂为帝.景元四年,分兵遣钟会、邓艾、诸葛绪三路灭亡蜀汉,受封晋公,次年,进爵晋王.',
			sgscq_simayan: '☆剑阁死战-005<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>西晋开国皇帝,咸熙二年袭父爵晋王,数月后逼迫魏元帝曹奂禅让给自己.咸宁五年(279年),司马炎命杜预、王濬等人分兵伐吴,于次年灭吴,统一全国.',
			sgscq_wangyuanji: '☆剑阁死战-006<br>☆技能设计:朝拾<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>王司徒的孙女,晋文帝司马昭之妻.晋武帝司马炎与齐王司马攸的生母.幼时便通<诗经>、<论语>,嫁司马昭后竭尽妇道、谦虚谨慎.其人颇有远见,曾预言钟会谋反之事.',
			scmo_machao: '☆剑阁死战-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br><span class=YB_darktext>自从背负起全族三百条人命,他心中便只剩<复仇>二字.他喜欢一个人在黑夜里反复擦拭父亲送他的那把银枪,那飘向远方的泪光中,闪烁着毁灭之痛,极阴极烈.冥冥中这种执念推引着他向前,因为每向前一步,就能得到更强的力量,他被吸引着,越陷越深,直到无法控制自己,迷失在反贼头子的手中……</span>',
			////-------------------------☆璀璨星河
			schaoshen_guanyu: '☆璀璨星河-001<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>他此生最恨鼠辈小人,讨厌被暗算,因为这样就无法时刻保护自己的美貌了.可惜人算不如天算,关羽还是遭吕蒙暗算,最终败走麦城,含恨而亡.然而他前世本为南海龙王,升天后本应归为天神,却因无法了结对吕蒙的怨恨,魂不能聚,落得半神半鬼.他性情暴烈,手持鬼龙斩月刀,身乘梦魇赤兔马,浑身毛发喷张,似火如焰,整日游走于神鬼两界,对吕蒙追魂索命,终使其七孔流血而亡.</span>',
			schaoshen_zhiwen: '☆璀璨星河-002<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>他是传奇中的传奇.在这个世界中,他的能量不可估量.而关于他是如何来到这段历史中的,只有零碎的传说.</span>',
			schaoshen_sailei: '☆璀璨星河-003<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>神·赛雷是个个性古怪的家伙,倔强的时候人神共愤,可爱的时候又格外讨喜.别扭而又呆萌,大家都不知道它脑子里到底装了什么奇奇怪怪的东西.</span>',
			schaoshen_dadaobing: '☆璀璨星河-004<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>空口无凭,吃肉为据!</span>',
			schaoshen_zhongqibing: '☆璀璨星河-005<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>如果帅也是一种错的话,那让我一直错下去吧!</span>',
			schao_xinxianying: '☆璀璨星河-006<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:三传原装语音<br><span class=YB_moneytext>她的一生见证了整个动荡的三国时代.她出生那年,董大胖儿挟傀儡天子迁都长安,直到钟会西征灭蜀、司马氏颠覆魏政.吴国也在她死后11年,最终玩完了.她为人聪明有才,善于鉴人知事.她是历史的旁观者,但却不是局外人,她一生勤俭节约,最终用自己的才智保全了家人</span>',
			schao_sunshangxiang: '☆璀璨星河-007<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br><span class=YB_moneytext>内可温柔体贴,外可严毅刚正.正值妙龄时,孙权听从周瑜的计谋,谎称将妹妹许配给刘备以达到骗取刘备的目的,而然终落得<赔了夫人又折兵>的下场.彝陵之战,刘备战败,香香伤心不已,望蜀痛哭,投江而亡.</span>',
			sgscq_vipbaby: '☆璀璨星河-008<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>曾经有一份真挚的爱情摆在小宝的面前,他没有珍惜,等失去的时候,他才追悔莫及,动物世界里最痛苦的事莫过于此!如果上天能再给小宝一次机会,他一定会对那只母猴儿说那三个字:哪村滴？(宠物们主要作为战技升级材料,可在战技升级时吃掉,好吃你就多吃点.)',
			sgscq_kongfuaqi: '☆璀璨星河-009<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>阿奇这辈子最大的愿望,就是把黑眼圈治好,照张彩色照片.(宠物们主要作为战技升级材料,可在战技升级时吃掉,好吃你就多吃点.)',
			sgscq_playertao: '☆璀璨星河-010<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>喜欢大刀,善于奔跑,身穿豹纹,独爱粉红,粉红豹是她的梦中情人.最害怕凶狠的看门狗,喜欢作弄隔壁老王,看他倒霉的样子,还时常将坏事嫁祸给老王那条忠诚的呆狗.(宠物们主要作为战技升级材料,可在战技升级时吃掉,好吃你就多吃点.)',
			sgscq_jjbb: '☆璀璨星河-011<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>这辈子最讨厌的,就是听到小猪猪和小兔兔用昵称喊自己,于是再也不和它们愉快的玩耍了.(宠物们主要作为战技升级材料,可在战技升级时吃掉,好吃你就多吃点.)',
			sgscq_bobo: '☆璀璨星河-012<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>爱吃肉、爱睡觉、不爱运动,听说他姓肥……我只能告诉你这么多……(宠物们主要作为战技升级材料,可在战技升级时吃掉,好吃你就多吃点.)',
			sgscq_wtdd: '☆璀璨星河-013<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>生命诚可贵,爱情价更高,若为松果故,两者皆可抛.(宠物们主要作为战技升级材料,可在战技升级时吃掉,好吃你就多吃点.)',
			sgscq_mystery: '☆璀璨星河-014<br>☆技能设计:夜白<br>☆代码撰写者:夜白<br>☆插图:三国杀传奇<br>☆配音:暂无<br>神秘武将的简介',
		}, //武将介绍(选填)
	};
	/*
	// if(!lib.characterPack.mode_guozhan)lib.characterPack.mode_guozhan;
	// 这是一个大饼,也是一个尝试
	*/
	for (var i in skillcard.character) {
		skillcard.character[i][4].push('ext:三国杀传奇/image/sgscq/' + i + '.jpg');
	}
	for (var i in skillcard.card) {
		if (!skillcard.card[i].image) skillcard.card[i].image = 'ext:三国杀传奇/image/card/' + i + '.png';
	} //以此法批量添加卡牌贴图
	lib.config.all.cards.add('skillcard');
	lib.config.cards.add('skillcard');
	lib.translate['skillcard_card_config'] = "<span style='color: #28e3ce'>三传限定卡</span>";
	return skillcard;
});
