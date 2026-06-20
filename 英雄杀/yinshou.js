"use strict";
window.reTHK_import(function (lib, game, ui, get, ai, _status) {
	lib.allYins = [{
		"z1": "GXS_sheshen",
		"z2": "GXS_fuchou",
		"f1": "shangzhitanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_tianlang",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_qiyi",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "xixuef",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "yxsjn_sanbanfu",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_xiuhua",
		"f1": "shihuaf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "shihuaf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_kongju",
		"f1": "shengyouf",
		"f2": "taotief"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_miaoji",
		"f1": "shazhitanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_fajia",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_baotou",
		"z2": "GXS_tianlang",
		"f1": "qianghuaf",
		"f2": "pozhouf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_tianlang",
		"f1": "shazhitanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_aojian",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_fanji",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_wumu",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "yshenqiang",
		"f1": "taotief",
		"f2": "shangzhichouf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "GXS_kongju",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_fujing",
		"f1": "shazhitanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "yshenqiang",
		"z2": "GXS_yuren",
		"f1": "shihuaf",
		"f2": "taotief"
	},
	{
		"z1": "yguose",
		"z2": "yliaoshang",
		"f1": "xixuef",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_yuren",
		"f1": "shazhitanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "GXS_fajia",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_fajia",
		"f1": "shengyouf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_huichun",
		"f1": "tanzhishouf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "yhongzhuang",
		"f1": "taotief",
		"f2": "qinglingf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_huichun",
		"f1": "shangzhixiaof",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_miaoji",
		"f1": "jingzhunf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_fajia",
		"f1": "heishadunf",
		"f2": "hongshadunf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "yzhongjia",
		"f1": "tannangf",
		"f2": "taotief"
	},
	{
		"z1": "GXS_fanji",
		"z2": "GXS_aojian",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fanji",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_qinzheng",
		"f1": "wanjianf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_yuren",
		"f1": "shazhitanf",
		"f2": "tannangf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_aojian",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "ybawang",
		"z2": "GXS_sheshen",
		"f1": "heishadunf",
		"f2": "hongshadunf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_aojian",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_fajia",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_huichun",
		"z2": "GXS_lumang",
		"f1": "yixinf",
		"f2": "taotief"
	},
	{
		"z1": "GXS_fujing",
		"z2": "yshenqiang",
		"f1": "xixuef",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "yzuijiu",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "yzhiyu",
		"z2": "yhongyan",
		"f1": "shihuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "yzuijiu",
		"z2": "GXS_aojian",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "yshenqiang",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fujing",
		"z2": "GXS_tianlang",
		"f1": "xixuef",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "yshenqiang",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_baotou",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "yguose",
		"z2": "ytuqiang",
		"f1": "qianghuaf",
		"f2": "qinglingf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "jingzhunf",
		"f2": "pozhouf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_baotou",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_huichun",
		"z2": "GXS_sheshen",
		"f1": "yixinf",
		"f2": "taotief"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "yshixin",
		"f1": "shangzhichouf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fanji",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_miaoji",
		"f1": "shengyouf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "yshixin",
		"f1": "shihuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_yuren",
		"f1": "shihuaf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_xiuhua",
		"z2": "GXS_wumu",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_yuren",
		"f1": "yixinf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_fenghuo",
		"z2": "GXS_shentou",
		"f1": "langyanf",
		"f2": "tannangf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "shihuaf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fanji",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_diehun",
		"f1": "heishadunf",
		"f2": "hongshadunf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_fanji",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_fenghuo",
		"f1": "wanjianf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "yshenqiang",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_fuchou",
		"f1": "chouxinf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_manwu",
		"f1": "heiyushouf",
		"f2": "hongyushouf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_qinzheng",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_xiuhua",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "yixinf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_shentou",
		"f1": "tanzhishouf",
		"f2": "tannangf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_shentan",
		"f1": "hongshadunf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_xiadan",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_huichun",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fanji",
		"f1": "shangzhichouf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "yzuijiu",
		"f1": "qianghuaf",
		"f2": "pozhouf"
	},
	{
		"z1": "yzhongjia",
		"z2": "GXS_shentan",
		"f1": "hongyushouf",
		"f2": "heiyushouf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_lumang",
		"f1": "hongyushouf",
		"f2": "heiyushouf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_qinzheng",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "yguose",
		"z2": "GXS_yubu",
		"f1": "shihuaf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "yguose",
		"z2": "GXS_fajia",
		"f1": "qinglingf",
		"f2": "xiejiaf"
	},
	{
		"z1": "GXS_xiuhua",
		"z2": "GXS_sheshen",
		"f1": "shihuaf",
		"f2": "tannangf"
	},
	{
		"z1": "yguose",
		"z2": "GXS_diehun",
		"f1": "qinglingf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "yzuijiu",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_lumang",
		"f1": "tanzhishouf",
		"f2": "taotief"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_shentou",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_fajia",
		"f1": "shazhitanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_yubu",
		"z2": "GXS_shentan",
		"f1": "hongwuxief",
		"f2": "taotief"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_diehun",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "ytuqiang",
		"z2": "yqingying",
		"f1": "qinglingf",
		"f2": "hongyushouf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_huichun",
		"z2": "GXS_sheshen",
		"f1": "yixinf",
		"f2": "taotief"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "GXS_qiangyun",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "yzuijiu",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_shentan",
		"f1": "tanzhishouf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_mili",
		"z2": "GXS_yuren",
		"f1": "shengyouf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "yshenqiang",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_qiyi",
		"z2": "GXS_diehun",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_qinzheng",
		"f1": "wanjianf",
		"f2": "shihuaf"
	},
	{
		"z1": "ycizhen",
		"z2": "GXS_fujing",
		"f1": "jingzhunf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "yshenqiang",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_shentan",
		"z2": "ymeihuo",
		"f1": "jingzhunf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_fenghuo",
		"f1": "tannangf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "yxsjn_jianxiong",
		"f1": "langyanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_fajia",
		"f1": "taotief",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_shentan",
		"z2": "GXS_juesha",
		"f1": "jingzhunf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_touji",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "yhongzhuang",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_fajia",
		"f1": "yixinf",
		"f2": "shangzhixief"
	},
	{
		"z1": "GXS_lumang",
		"z2": "GXS_sheshen",
		"f1": "yixinf",
		"f2": "taotief"
	},
	{
		"z1": "GXS_qiyi",
		"z2": "GXS_fuchou",
		"f1": "hongshadunf",
		"f2": "shangzhichouf"
	},
	{
		"z1": "GXS_mili",
		"z2": "GXS_jiquan",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_aojian",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_qiangyun",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fujing",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_diehun",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_qiyi",
		"z2": "yhongyan",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_diehun",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_diehun",
		"z2": "GXS_fajia",
		"f1": "hongyushouf",
		"f2": "heiyushouf"
	},
	{
		"z1": "yzhiyu",
		"z2": "yhongyan",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_diehun",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_fajia",
		"f1": "hongwuxief",
		"f2": "taotief"
	},
	{
		"z1": "yguose",
		"z2": "yqingying",
		"f1": "qinglingf",
		"f2": "hongyushouf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "ychuanyang",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "GXS_juesha",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_fenghuo",
		"z2": "yxsjn_jianxiong",
		"f1": "langyanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "yguose",
		"z2": "yhongzhuang",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_diehun",
		"z2": "ygongxin",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "GXS_fajia",
		"f1": "hongshadunf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_huichun",
		"f1": "yixinf",
		"f2": "gushouf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_qiyi",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_manwu",
		"f1": "hongyushouf",
		"f2": "heiyushouf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_yuren",
		"f1": "shengyouf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fujing",
		"z2": "yshixin",
		"f1": "shangzhichouf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "shazhitanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_xiadan",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_aojian",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_huichun",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fanji",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fanji",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_fanji",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_huichun",
		"z2": "GXS_lumang",
		"f1": "yixinf",
		"f2": "taotief"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fanji",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_shucai",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "ybawang",
		"f1": "anjianf",
		"f2": "juedouf"
	},
	{
		"z1": "ytuqiang",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "qinglingf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_touji",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "ychuanyang",
		"z2": "GXS_bingxian",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_shentou",
		"f1": "qianghuaf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_fenghuo",
		"z2": "GXS_mili",
		"f1": "langyanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "yguose",
		"z2": "yhongzhuang",
		"f1": "qinglingf",
		"f2": "xiejiaf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_mili",
		"f1": "tannangf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_mili",
		"f1": "tannangf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_mili",
		"f1": "tannangf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_fenghuo",
		"f1": "langyanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fajia",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_aojian",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_aojian",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_diehun",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_xiadan",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_shucai",
		"z2": "yshiquan",
		"f1": "shihuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "yqingying",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_fujing",
		"f1": "juedouf",
		"f2": "shihuaf"
	},
	{
		"z1": "ymeihuo",
		"z2": "GXS_shentan",
		"f1": "jingzhunf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_qinzheng",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_miaoji",
		"f1": "wanjianf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_huichun",
		"f1": "yixinf",
		"f2": "taotief"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_huichun",
		"f1": "taotief",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_manwu",
		"z2": "GXS_yuren",
		"f1": "shangzhitanf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_fanji",
		"z2": "GXS_aojian",
		"f1": "shangzhichouf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fajia",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fajia",
		"z2": "yhongzhuang",
		"f1": "yixinf",
		"f2": "hongshadunf"
	},
	{
		"z1": "yguose",
		"z2": "yhongzhuang",
		"f1": "tanzhishouf",
		"f2": "qinglingf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "yhongzhuang",
		"f1": "tanzhishouf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_kongju",
		"f1": "yixinf",
		"f2": "shangzhixief"
	},
	{
		"z1": "ybawang",
		"z2": "yzuijiu",
		"f1": "qianghuaf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_bingxian",
		"z2": "ybawang",
		"f1": "qianghuaf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_fenghuo",
		"z2": "GXS_bingxian",
		"f1": "hongshadunf",
		"f2": "langyanf"
	},
	{
		"z1": "yliaoshang",
		"z2": "GXS_qiyi",
		"f1": "xixuef",
		"f2": "shangzhichouf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "GXS_fajia",
		"f1": "shangzhixief",
		"f2": "shihuaf"
	},
	{
		"z1": "ybawang",
		"z2": "GXS_aojian",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "yzuijiu",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fanji",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_yubu",
		"z2": "GXS_diehun",
		"f1": "wanjianf",
		"f2": "hongshadunf"
	},
	{
		"z1": "GXS_huoshen",
		"z2": "yxsjn_jianxiong",
		"f1": "wanjianf",
		"f2": "xixuef"
	},
	{
		"z1": "yshenqiang",
		"z2": "GXS_jiquan",
		"f1": "tanzhishouf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "yshenqiang",
		"f1": "tanzhishouf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_jiquan",
		"f1": "shangzhitanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "yzhiyu",
		"z2": "GXS_sheshen",
		"f1": "shangzhichouf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_yuren",
		"f1": "shangzhichouf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "ybawang",
		"z2": "yguose",
		"f1": "qinglingf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_jiquan",
		"z2": "GXS_fajia",
		"f1": "qinglingf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_shentou",
		"z2": "GXS_fenghuo",
		"f1": "tanzhishouf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_fenghuo",
		"f1": "langyanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "yshenqiang",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "yzhiyu",
		"f1": "xixuef",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_shentou",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "yliaoshang",
		"z2": "GXS_fajia",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_huichun",
		"z2": "GXS_kongju",
		"f1": "shihuaf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "GXS_qiyi",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_jiquan",
		"z2": "GXS_fanji",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "ytuqiang",
		"z2": "yqingying",
		"f1": "qinglingf",
		"f2": "hongshadunf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_aojian",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "yzuijiu",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fenghuo",
		"z2": "yzhiyu",
		"f1": "shangzhixief",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_fajia",
		"f1": "shazhitanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_qiyi",
		"z2": "yzhiyu",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "yxsjn_jianxiong",
		"z2": "GXS_diehun",
		"f1": "tanzhishouf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_yuren",
		"f1": "shengyouf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "hongyushouf",
		"f2": "heiyushouf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_tianlang",
		"f1": "pozhouf",
		"f2": "shihuaf"
	},
	{
		"z1": "yshenqiang",
		"z2": "GXS_fujing",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_fujing",
		"z2": "ycizhen",
		"f1": "jingzhunf",
		"f2": "pozhouf"
	},
	{
		"z1": "GXS_mili",
		"z2": "GXS_fenghuo",
		"f1": "langyanf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_qinzheng",
		"f1": "xixuef",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_qinzheng",
		"f1": "xixuef",
		"f2": "juedouf"
	},
	{
		"z1": "GXS_huichun",
		"z2": "GXS_fujing",
		"f1": "yixinf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_xiadan",
		"f1": "xixuef",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_xiadan",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "yshenqiang",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_diehun",
		"z2": "yhongzhuang",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_shentan",
		"z2": "GXS_fajia",
		"f1": "shihuaf",
		"f2": "hongshadunf"
	},
	{
		"z1": "GXS_fujing",
		"z2": "GXS_tianlang",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "pozhouf"
	},
	{
		"z1": "GXS_shucai",
		"z2": "ymeihuo",
		"f1": "shihuaf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_huichun",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fanji",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_kongju",
		"f1": "xixuef",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_manwu",
		"z2": "GXS_lumang",
		"f1": "hongyushouf",
		"f2": "heiyushouf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_fenghuo",
		"f1": "langyanf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_kongju",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_miaoji",
		"f1": "hongwuxief",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_fajia",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_tianlang",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "ychuanyang",
		"z2": "GXS_huichun",
		"f1": "shihuaf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "yshenqiang",
		"f1": "shihuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_fajia",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "ychuanyang",
		"z2": "GXS_fajia",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_huichun",
		"f1": "shangzhichouf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_tianlang",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_huichun",
		"z2": "GXS_miaoji",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_yubu",
		"z2": "GXS_sheshen",
		"f1": "hongyushouf",
		"f2": "heiyushouf"
	},
	{
		"z1": "GXS_manwu",
		"z2": "GXS_dili",
		"f1": "xixuef",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_qinzheng",
		"f1": "shazhitanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_kongju",
		"f1": "shihuaf",
		"f2": "hudunf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_tianlang",
		"f1": "qianghuaf",
		"f2": "gushouf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_fujing",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_miaoji",
		"f1": "tannangf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_fujing",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_hanbei",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_xiadan",
		"f1": "wanjianf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_yuren",
		"f1": "shazhitanf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_yuren",
		"f1": "wanjianf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_sheshen",
		"f1": "yixinf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_fajia",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_yaoyue",
		"f1": "pozhouf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_qinzheng",
		"f1": "wanjianf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "yzuijiu",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_miaoji",
		"f1": "shazhitanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_mili",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_sheshen",
		"f1": "shangzhitanf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_baotou",
		"f1": "pozhouf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_manwu",
		"z2": "GXS_yuren",
		"f1": "shazhitanf",
		"f2": "tannangf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_touji",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_touji",
		"z2": "yzuijiu",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_jiquan",
		"z2": "GXS_fuchou",
		"f1": "shangzhichouf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fenghuo",
		"z2": "GXS_yuren",
		"f1": "langyanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_yaoyue",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_fajia",
		"f1": "shihuaf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_yaoyue",
		"z2": "GXS_tianlang",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_fanji",
		"z2": "GXS_xiadan",
		"f1": "shazhitanf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "shazhitanf",
		"f2": "shangzhixief"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_touji",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "shazhitanf",
		"f2": "qinglingf"
	},
	{
		"z1": "GXS_fuchou",
		"z2": "GXS_jiquan",
		"f1": "shangzhichouf",
		"f2": "shangzhixiaof"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_manwu",
		"f1": "shihuaf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_xiadan",
		"f1": "shazhitanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_fenghuo",
		"z2": "GXS_yuren",
		"f1": "langyanf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_xiadan",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_zhongpan",
		"f1": "shengyouf",
		"f2": "wanjianf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_xiadan",
		"f1": "pozhouf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "shazhitanf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_kongju",
		"f1": "shazhitanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_manwu",
		"f1": "shazhitanf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "ytuqiang",
		"f1": "qinglingf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "jingzhunf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_touji",
		"z2": "GXS_xiadan",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_jiquan",
		"z2": "GXS_fanji",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_qiyi",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_fenghuo",
		"f1": "langyanf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "ybawang",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_fenghuo",
		"z2": "GXS_yuren",
		"f1": "hongshadunf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_yuren",
		"f1": "yixinf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_diehun",
		"f1": "xixuef",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_diehun",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "yzhiyu",
		"z2": "GXS_huoshen",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_yuren",
		"f1": "xixuef",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_yuren",
		"f1": "shazhitanf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_touji",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_aojian",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_yuren",
		"f1": "shazhitanf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "pozhouf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_sheshen",
		"f1": "yixinf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "shazhitanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_yuren",
		"f1": "shangzhitanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "yshiquan",
		"z2": "GXS_shentou",
		"f1": "chouxinf",
		"f2": "tannangf"
	},
	{
		"z1": "GXS_qiyi",
		"z2": "GXS_xiadan",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_qiyi",
		"z2": "yhongyan",
		"f1": "shangzhichouf",
		"f2": "shangzhixiaof"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_xiadan",
		"f1": "shazhitanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_kongju",
		"f1": "shihuaf",
		"f2": "hongwuxief"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_aojian",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_huichun",
		"z2": "GXS_fanji",
		"f1": "yixinf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "shihuaf"
	},
	{
		"z1": "yxsjn_jianxiong",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_yuren",
		"f1": "shihuaf",
		"f2": "wanjianf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_manwu",
		"f1": "shangzhitanf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_qiyi",
		"z2": "GXS_huoshen",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_yuren",
		"f1": "tannangf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "shihuaf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_yuren",
		"f1": "shihuaf",
		"f2": "hongwuxief"
	},
	{
		"z1": "yqingying",
		"z2": "GXS_yuren",
		"f1": "qinglingf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_yubu",
		"z2": "GXS_yuren",
		"f1": "shihuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_miaoji",
		"f1": "tanzhishouf",
		"f2": "shihuaf"
	},
	{
		"z1": "ymeihuo",
		"z2": "yxsjn_jianxiong",
		"f1": "shengyouf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "yxsjn_jianxiong",
		"z2": "GXS_shentou",
		"f1": "shengyouf",
		"f2": "tannangf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_shucai",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_shucai",
		"f1": "shihuaf",
		"f2": "chouxinf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_lumang",
		"f1": "shangzhitanf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_yuren",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_shentan",
		"z2": "GXS_qiangyun",
		"f1": "xixuef",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_shentan",
		"z2": "GXS_shucai",
		"f1": "xixuef",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_sheshen",
		"f1": "xixuef",
		"f2": "jingzhunf"
	},
	{
		"z1": "yhongzhuang",
		"z2": "GXS_aojian",
		"f1": "shazhitanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_lumang",
		"f1": "yixinf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "shazhitanf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_yuren",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_yaoyue",
		"f1": "shangzhichouf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_fujing",
		"f1": "hudunf",
		"f2": "xiejiaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "yzuijiu",
		"f1": "tanzhishouf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "GXS_shentan",
		"f1": "hudunf",
		"f2": "hongyushouf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_kongju",
		"f1": "shihuaf",
		"f2": "wanjianf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_mili",
		"f1": "tanzhishouf",
		"f2": "taotief"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_shentan",
		"f1": "shangzhitanf",
		"f2": "hongyushouf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_miaoji",
		"f1": "wanjianf",
		"f2": "taotief"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "wanjianf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_yuren",
		"f1": "langyanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_fujing",
		"f1": "xixuef",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "hongwuxief"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_lumang",
		"f1": "shangzhixief",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_xiadan",
		"f1": "shihuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_wumu",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_touji",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "yxsjn_jianxiong",
		"z2": "GXS_kongju",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_lumang",
		"z2": "GXS_yuren",
		"f1": "shangzhitanf",
		"f2": "shangzhixiaof"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_fenghuo",
		"f1": "shengyouf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_yuren",
		"f1": "shazhitanf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_huoshen",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_yuren",
		"f1": "shazhitanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_fenghuo",
		"f1": "langyanf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_manwu",
		"z2": "GXS_yuren",
		"f1": "shangzhitanf",
		"f2": "hongyushouf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_kongju",
		"f1": "shangzhitanf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_yuren",
		"f1": "shangzhitanf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_shucai",
		"z2": "GXS_shentan",
		"f1": "xiejiaf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_huichun",
		"z2": "GXS_sheshen",
		"f1": "yixinf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_tianlang",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_huichun",
		"z2": "yzhongjia",
		"f1": "yixinf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_fenghuo",
		"z2": "GXS_miaoji",
		"f1": "shihuaf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_fajia",
		"f1": "tanzhishouf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_shentan",
		"z2": "GXS_qiangyun",
		"f1": "heishadunf",
		"f2": "hongshadunf"
	},
	{
		"z1": "yhongzhuang",
		"z2": "GXS_sheshen",
		"f1": "shangzhitanf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_yubu",
		"z2": "ymeihuo",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "hongyushouf"
	},
	{
		"z1": "yqingying",
		"z2": "yguose",
		"f1": "tanzhishouf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_kongju",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_aojian",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "yzhongjia",
		"z2": "GXS_shentan",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_tianlang",
		"f1": "shazhitanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_fajia",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_xiadan",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "yhongzhuang",
		"f1": "heishadunf",
		"f2": "hongshadunf"
	},
	{
		"z1": "yhongzhuang",
		"z2": "GXS_kongju",
		"f1": "heishadunf",
		"f2": "hongshadunf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_yaoyue",
		"f1": "shihuaf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_qiangyun",
		"f1": "wanjianf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "yzuijiu",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_tianlang",
		"f1": "pozhouf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_kongju",
		"f1": "xixuef",
		"f2": "hongshadunf"
	},
	{
		"z1": "ytuqiang",
		"z2": "GXS_fajia",
		"f1": "qinglingf",
		"f2": "hudunf"
	},
	{
		"z1": "GXS_huichun",
		"z2": "GXS_lumang",
		"f1": "shangzhitanf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "yhongzhuang",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_shentan",
		"z2": "GXS_kongju",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_fajia",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_shentou",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "shihuaf"
	},
	{
		"z1": "yshenqiang",
		"z2": "GXS_diehun",
		"f1": "qinglingf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "ychuanyang",
		"z2": "GXS_fanji",
		"f1": "tanzhishouf",
		"f2": "hongshadunf"
	},
	{
		"z1": "GXS_bianfa",
		"z2": "GXS_shentan",
		"f1": "taotief",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_bianfa",
		"z2": "ymeihuo",
		"f1": "shihuaf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_fenghuo",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_bianfa",
		"z2": "ymeihuo",
		"f1": "shihuaf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "yyunchou",
		"f1": "shangzhixief",
		"f2": "shangzhixiaof"
	},
	{
		"z1": "GXS_dili",
		"z2": "yshenqiang",
		"f1": "xixuef",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_zhongpan",
		"f1": "shihuaf",
		"f2": "wanjianf"
	},
	{
		"z1": "GXS_bianfa",
		"z2": "GXS_qiangyun",
		"f1": "shangzhichouf",
		"f2": "shangzhixief"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_xiadan",
		"f1": "shihuaf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_qiyi",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_zhongpan",
		"f1": "shihuaf",
		"f2": "wanjianf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_kongju",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_xiadan",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_fenghuo",
		"f1": "shangzhixief",
		"f2": "langyanf"
	},
	{
		"z1": "yshixin",
		"z2": "GXS_lumang",
		"f1": "shangzhitanf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_chenyu",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_chenyu",
		"z2": "GXS_fajia",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_chaotuo",
		"z2": "yhouzhu",
		"f1": "tanzhishouf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_jiquan",
		"z2": "GXS_juesha",
		"f1": "xixuef",
		"f2": "jingzhunf"
	},
	{
		"z1": "ytuqiang",
		"z2": "yguose",
		"f1": "tanzhishouf",
		"f2": "qinglingf"
	},
	{
		"z1": "GXS_jiquan",
		"z2": "GXS_fanji",
		"f1": "xixuef",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_wumu",
		"z2": "yguose",
		"f1": "tanzhishouf",
		"f2": "qinglingf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_chenyu",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_chenyu",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_fenghuo",
		"f1": "shihuaf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_bingxian",
		"z2": "yxsjn_sanbanfu",
		"f1": "chouxinf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_zongheng",
		"z2": "GXS_fujing",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "yxsjn_jianxiong",
		"z2": "GXS_yuren",
		"f1": "chouxinf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_yuren",
		"f1": "wanjianf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_fenghuo",
		"f1": "wanjianf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_bianfa",
		"z2": "GXS_qiangyun",
		"f1": "shihuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_huoshen",
		"f1": "qianghuaf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_diehun",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_zongheng",
		"z2": "GXS_qiangyun",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_chenyu",
		"z2": "ychuanyang",
		"f1": "hongyushouf",
		"f2": "shangzhichouf"
	},
	{
		"z1": "yliaoshang",
		"z2": "yzhiyu",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_bianfa",
		"z2": "yzhongjia",
		"f1": "xixuef",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_shentan",
		"f1": "hongshadunf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_baotou",
		"z2": "GXS_xiadan",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "yguose",
		"z2": "yqingying",
		"f1": "shangzhixief",
		"f2": "qinglingf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_huichun",
		"f1": "taotief",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_chenyu",
		"z2": "GXS_kongju",
		"f1": "heishadunf",
		"f2": "hongshadunf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "biaoqi",
		"f1": "shazhitanf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_baotou",
		"f1": "shazhitanf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_huichun",
		"f1": "shihuaf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_touji",
		"z2": "yzuijiu",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_shenli",
		"z2": "GXS_tianlang",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "yzhongjia",
		"z2": "yshenqiang",
		"f1": "hongshadunf",
		"f2": "hudunf"
	},
	{
		"z1": "yshenqiang",
		"z2": "yzhongjia",
		"f1": "shihuaf",
		"f2": "hudunf"
	},
	{
		"z1": "GXS_touji",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_huichun",
		"z2": "GXS_lumang",
		"f1": "taotief",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_baotou",
		"z2": "GXS_touji",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_qiyi",
		"z2": "yshiquan",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_kongju",
		"f1": "shangzhitanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_huoshen",
		"z2": "GXS_aojian",
		"f1": "shangzhitanf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_mili",
		"z2": "GXS_fenghuo",
		"f1": "shihuaf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_shentan",
		"f1": "shihuaf",
		"f2": "shangzhixief"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_xiadan",
		"f1": "shazhitanf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "yshenqiang",
		"f1": "xixuef",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "yshenqiang",
		"f1": "tanzhishouf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_xiadan",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_zongheng",
		"f1": "shihuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_miaoji",
		"f1": "pozhouf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_zhongpan",
		"f1": "shihuaf",
		"f2": "wanjianf"
	},
	{
		"z1": "yliaoshang",
		"z2": "yhongyan",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_yuren",
		"f1": "shazhitanf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_yuren",
		"f1": "shangzhitanf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_bianfa",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "ychuanyang",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "ychuanyang",
		"f1": "tanzhishouf",
		"f2": "shangzhitanf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_huoshen",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_shenli",
		"z2": "GXS_xiadan",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "yzuijiu",
		"z2": "GXS_xiadan",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_wumu",
		"z2": "GXS_tianlang",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "yshiquan",
		"f1": "shihuaf",
		"f2": "chouxinf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_shentou",
		"f1": "shengyouf",
		"f2": "tannangf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_kongju",
		"f1": "shangzhitanf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_yuren",
		"f1": "tannangf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_yuren",
		"f1": "wanjianf",
		"f2": "tannangf"
	},
	{
		"z1": "GXS_chaotuo",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_huichun",
		"z2": "GXS_sheshen",
		"f1": "yixinf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_yuren",
		"f1": "shihuaf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_chaotuo",
		"z2": "ymeihuo",
		"f1": "shihuaf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_yubu",
		"z2": "GXS_chaotuo",
		"f1": "shihuaf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_chaotuo",
		"f1": "shihuaf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_lumang",
		"z2": "GXS_yuren",
		"f1": "yixinf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_shentou",
		"z2": "GXS_yuren",
		"f1": "tannangf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_fenghuo",
		"f1": "langyanf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_zhongpan",
		"f1": "tanzhishouf",
		"f2": "wanjianf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_fenghuo",
		"f1": "tanzhishouf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_miaoji",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_yubu",
		"z2": "GXS_kongju",
		"f1": "shengyouf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_baotou",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_lumang",
		"z2": "GXS_sheshen",
		"f1": "shangzhitanf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_yubu",
		"z2": "GXS_chaotuo",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_lumang",
		"f1": "yixinf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_fenghuo",
		"f1": "shihuaf",
		"f2": "langyanf"
	},
	{
		"z1": "GXS_shentan",
		"z2": "GXS_qiangyun",
		"f1": "shihuaf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_yuren",
		"f1": "hongshadunf",
		"f2": "wanjianf"
	},
	{
		"z1": "GXS_shentan",
		"z2": "GXS_qiangyun",
		"f1": "shihuaf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_kongju",
		"f1": "tanzhishouf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "yzuijiu",
		"f1": "shazhitanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_shenli",
		"z2": "GXS_tianlang",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_qinzheng",
		"f1": "wanjianf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "yzuijiu",
		"z2": "yguose",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_fujing",
		"z2": "GXS_tianlang",
		"f1": "xixuef",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_huoshen",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_huoshen",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "yshenqiang",
		"f1": "langyanf",
		"f2": "xiejiaf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_huoshen",
		"f1": "heishadunf",
		"f2": "hongshadunf"
	},
	{
		"z1": "GXS_lumang",
		"z2": "GXS_sheshen",
		"f1": "shangzhichouf",
		"f2": "yixinf"
	},
	{
		"z1": "GXS_bingxian",
		"z2": "GXS_hanbei",
		"f1": "tanzhishouf",
		"f2": "qinglingf"
	},
	{
		"z1": "yxsjn_jianxiong",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_fanji",
		"z2": "GXS_jiquan",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_tianlang",
		"f1": "shazhitanf",
		"f2": "jingzhunf"
	},
	{
		"z1": "yzuijiu",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_shentan",
		"f1": "shihuaf",
		"f2": "gushouf"
	},
	{
		"z1": "GXS_qiyi",
		"z2": "GXS_shentan",
		"f1": "hudunf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_xiadan",
		"f1": "pozhouf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_wumu",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_chenyu",
		"z2": "GXS_hanbei",
		"f1": "qianghuaf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_chenyu",
		"z2": "GXS_xiadan",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "yzuijiu",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "biaoqi",
		"f1": "pozhouf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_fajia",
		"f1": "tanzhishouf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "GXS_juesha",
		"f1": "tannangf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_zongheng",
		"z2": "GXS_bianfa",
		"f1": "qianghuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_yuren",
		"z2": "GXS_shentou",
		"f1": "tannangf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "GXS_kongju",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_cike",
		"z2": "GXS_xiadan",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_xiadan",
		"f1": "xixuef",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_zhongpan",
		"f1": "shihuaf",
		"f2": "wanjianf"
	},
	{
		"z1": "GXS_fajia",
		"z2": "GXS_kongju",
		"f1": "shihuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_fujing",
		"z2": "GXS_tianlang",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_yuren",
		"f1": "shihuaf",
		"f2": "wanjianf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_kongju",
		"f1": "yixinf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_miaoji",
		"f1": "hudunf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_yaoyue",
		"f1": "qianghuaf",
		"f2": "pozhouf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_mili",
		"f1": "shihuaf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "pozhouf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_shentan",
		"z2": "GXS_yuren",
		"f1": "taotief",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_chenyu",
		"z2": "GXS_diehun",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_shucai",
		"z2": "GXS_huoshen",
		"f1": "jingzhunf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_fujing",
		"f1": "yixinf",
		"f2": "wanjianf"
	},
	{
		"z1": "GXS_juesha",
		"z2": "GXS_xiuhua",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "GXS_aojian",
		"z2": "GXS_xiadan",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_fujing",
		"z2": "GXS_yaoyue",
		"f1": "jingzhunf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_yaoyue",
		"z2": "yzuijiu",
		"f1": "xixuef",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_miaoji",
		"z2": "GXS_yuren",
		"f1": "tanzhishouf",
		"f2": "shengyouf"
	},
	{
		"z1": "GXS_kongju",
		"z2": "GXS_yuren",
		"f1": "shihuaf",
		"f2": "tanzhishouf"
	},
	{
		"z1": "GXS_xiadan",
		"z2": "GXS_aojian",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_qiangyun",
		"f1": "qianghuaf",
		"f2": "jingzhunf"
	},
	{
		"z1": "GXS_tianlang",
		"z2": "GXS_aojian",
		"f1": "shazhitanf",
		"f2": "qianghuaf"
	},
	{
		"z1": "GXS_diehun",
		"z2": "GXS_kongju",
		"f1": "hongshadunf",
		"f2": "heishadunf"
	},
	{
		"z1": "yzhongjia",
		"z2": "GXS_mili",
		"f1": "xixuef",
		"f2": "podunf"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_miaoji",
		"f1": "langyanf",
		"f2": "shihuaf"
	},
	{
		"z1": "GXS_qiangyun",
		"z2": "GXS_yubu",
		"f1": "shihuaf",
		"f2": "xixuef"
	},
	{
		"z1": "GXS_qinzheng",
		"z2": "GXS_tianlang",
		"f1": "jingzhunf",
		"f2": "shazhitanf"
	},
	{
		"z1": "GXS_sheshen",
		"z2": "GXS_huichun",
		"f1": "yixinf",
		"f2": "taotief"
	},
	{
		"z1": "GXS_zhongpan",
		"z2": "GXS_yuren",
		"f1": "shengyouf",
		"f2": "shihuaf"
	}
	];
	//选择局内配件按钮位置
	lib.extensionMenu['extension_英雄杀'].rethk_equipBtmPosition = {
		name: "配印位置",
		intro: '选择配印按钮显示位置',
		init: lib.config.rethk_equipBtmPosition === undefined ? "0" : lib.config.rethk_equipBtmPosition,
		item: {
			'0': '左下角',
			'1': '右下角'
		},
		onclick(item) {
			game.saveConfig('rethk_equipBtmPosition', item);
		}
	};
	lib.extensionMenu['extension_英雄杀'].rethk_equipBtmCl = {
		name: "配印按钮点击",
		intro: '选择配印按钮是否能按',
		init: false,
		item: {
			true: '可点击',
			false: '不可点击'
		},
		onclick(item) {
			lib.config.rethk_equipBtmCl = item;
		}
	};
	lib.extensionMenu['extension_英雄杀'].rethkaibj = {
		name: "随机配印",
		intro: '为没有配印的角色随机配印',
		init: false,
	};
	//初始化
	if (!lib.config.rethk_yinshou) lib.config.rethk_yinshou = {
	};
	game.saveConfig('rethk_yinshou', lib.config.rethk_yinshou);
	lib.config.baojulist_f = [{
		id: 'shazhitanf',
		name: '杀贪',
		star: 5,
	},
	{
		id: 'qianghuaf',
		name: '强化',
		star: 5,
	},
	{
		id: 'jingzhunf',
		name: '精准',
		star: 5,
	},
	{
		id: 'xixuef',
		name: '吸血',
		star: 5,
	},
	{
		id: 'shangzhitanf',
		name: '伤贪',
		star: 5,
	},
	{
		id: 'qinglingf',
		name: '轻灵',
		star: 5,
	},
	{
		id: 'shangzhichouf',
		name: '伤仇',
		star: 5,
	},
	{
		id: 'langyanf',
		name: '狼烟',
		star: 5,
	},
	{
		id: 'wanjianf',
		name: '万箭',
		star: 5,
	},
	{
		id: 'tannangf',
		name: '探囊',
		star: 5,
	},
	{
		id: 'hongshadunf',
		name: '红盾',
		star: 5,
	},
	{
		id: 'heishadunf',
		name: '黑盾',
		star: 5,
	},
	{
		id: 'tanzhishouf',
		name: '贪手',
		star: 5,
	},
	{
		id: 'yixinf',
		name: '医心',
		star: 5,
	},
	{
		id: 'shengyouf',
		name: '生有',
		star: 5,
	},
	{
		id: 'shihuaf',
		name: '石化',
		star: 5,
	},
	{
		id: 'hongyushouf',
		name: '红御',
		star: 5,
	},
	{
		id: 'heiyushouf',
		name: '黑御',
		star: 5,
	},
	{
		id: 'shangzhixiaof',
		name: '伤削',
		star: 5,
	},
	{
		id: 'shangzhixief',
		name: '伤卸',
		star: 5,
	},
	{
		id: 'shazhixief',
		name: '杀卸',
		star: 5,
	},
	{
		id: 'taotief',
		name: '饕餮',
		star: 5,
	},
	{
		id: 'xiejiaf',
		name: '卸甲',
		star: 5,
	},
	{
		id: 'gushouf',
		name: '固守',
		star: 5,
	},
	{
		id: 'pozhouf',
		name: '破咒',
		star: 5,
	},
	{
		id: 'baonengf',
		name: '爆能',
		star: 5,
	},
	{
		id: 'yixianf',
		name: '医仙',
		star: 5,
	},
	{
		id: 'mopaif',
		name: '天赐',
		star: 5,
	},
	{
		id: 'hudunf',
		name: '护盾',
		star: 5,
	},
	{
		id: 'hongwuxief',
		name: '无懈',
		star: 5,
	},
	{
		id: 'juedouf',
		name: '斗罗',
		star: 5,
	},
	{
		id: 'anjianf',
		name: '暗箭',
		star: 5,
	},
	{
		id: 'chouxinf',
		name: '抽薪',
		star: 5,
	},
	{
		id: 'podunf',
		name: '破盾',
		star: 5,
	},
	{
		id: 'xushif',
		name: '虚实',
		star: 5,
	},
	];
	lib.config.baojulist_z = [{
		id: 'GXS_fajia',
		name: '法家',
		star: 5,
		character: 'yxs_shangyang',
		sex: 'male',
	},
	{
		id: 'GXS_xuezhan',
		name: '死战',
		star: 5,
	},
	{
		id: 'GXS_myyoumie',
		name: '诱灭',
		star: 5,
		character: 'yxs_miyue',
		sex: 'female',
	},
	{
		id: 'GXS_myzhangquan',
		name: '掌权',
		star: 5,
		character: 'yxs_miyue',
		sex: 'female',
	},
	{
		id: 'fenyin',
		name: '奋音',
		star: 5,
	},
	{
		id: 'yqingdian',
		name: '庆典',
		star: 5,
	},
	{
		id: 'yshinian',
		name: '十年',
		star: 5,
	},
	{
		id: 'GXS_mingcha',
		name: '明察',
		star: 5,
		character: 'yxs_kangxi',
		sex: 'male',
	},
	{
		id: 'GXS_xuefan',
		name: '削藩',
		star: 5,
		character: 'yxs_kangxi',
		sex: 'male',
	},
	{
		id: 'GXS_shangli',
		name: '伤离',
		star: 5,
		character: 'yxs_liqingzhao',
		sex: 'female',
	},
	{
		id: 'GXS_sheshi',
		name: '蛇噬',
		star: 5,
		character: 'yxs_aijiyanhou',
		sex: 'female',
	},
	{
		id: 'paoxiao',
		name: '天狼',
		star: 5,
		character: 'yxs_yangyanzhao',
		sex: 'male',
	},
	{
		id: 'zgldd',
		name: '虎影',
		star: 5,
	},
	{
		id: 'nmbi',
		name: '龙怒',
		star: 5,
	},
	{
		id: 'ychuanqi_xuanming',
		name: '玄冥',
		star: 5,
	},
	{
		id: 'ychuanqi_fengyan',
		name: '凤炎',
		star: 5,
	},
	{
		id: 'yxsjn_shiren',
		name: '噬人',
		star: 5,
		character: 'chuanqi_nianshou',
		sex: 'male',
	},
	{
		id: 'zishu',
		name: '自书',
		star: 5,
	},
	{
		id: 'longhun',
		name: '龙魂',
		star: 5,
	},
	{
		id: 'nshunyou',
		name: '魂佑',
		star: 5,
	},
	{
		id: 'qinzheng',
		name: '勤政',
		star: 5,
	},
	{
		id: 'yshenshe',
		name: '神射',
		star: 5,
		character: 'yxs_jiaotou',
		sex: 'male',
	},
	{
		id: 'ychongfeng',
		name: '冲锋',
		star: 5,
		character: 'yxs_jiaotou',
		sex: 'male',
	},
	{
		id: 'cqjuexing',
		name: '觉醒',
		star: 5,
	},
	{
		id: 'GXS_guimian',
		name: '鬼面',
		star: 5,
		character: 'yxs_lanlinwang',
		sex: 'male',
	},
	{
		id: 'GXS_dyyuxue',
		name: '浴血',
		star: 5,
		character: 'yxs_lanlinwang',
		sex: 'male',
	},
	{
		id: 'GXS_dyrende',
		name: '仁德',
		star: 5,
		character: 'yxs_liube',
		sex: 'male',
	},
	{
		id: 'yxsjn_zhexian',
		name: '谪仙',
		star: 5,
		character: 'yxs_libai',
		sex: 'male',
	},
	{
		id: 'chenqing',
		name: '陈情',
		star: 5,
	},
	{
		id: 'yxsjn_doushen',
		name: '斗神',
		star: 5,
		character: 'yxs_zhangfei',
		sex: 'male',
	},
	{
		id: 'GXS_dycuanquan',
		name: '篡权',
		star: 5,
		character: 'yxs_yuwenhuaji',
		sex: 'male',
	},
	{
		id: 'GXS_dylongluo',
		name: '笼络',
		star: 5,
		character: 'yxs_yuwenhuaji',
		sex: 'male',
	},
	{
		id: 'xinkuanggu',
		name: '狂骨',
		star: 5,
	},
	{
		id: 'GXS_miaoji',
		name: '妙计',
		star: 5,
		character: 'yxs_zhugeliang',
		sex: 'male',
	},
	{
		id: 'GXS_budao',
		name: '补刀',
		star: 5,
		character: 'yxs_guanyu',
		sex: 'male',
	},
	{
		id: 'GXS_qingmu',
		name: '倾慕',
		star: 5,
		character: 'yxs_panan',
		sex: 'male',
	},
	{
		id: 'GXS_sheshen',
		name: '舍身',
		star: 5,
		character: 'yxs_yuji',
		sex: 'female',
	},
	{
		id: 'yzhanshen',
		name: '战神',
		star: 5,
	},
	{
		id: 'GXS_zhiba',
		name: '制霸',
		star: 5,
		character: 'yxs_qihenggong',
		sex: 'male',
	},
	{
		id: 'GXS_xiangma',
		name: '相马',
		star: 5,
		character: 'yxs_bole',
		sex: 'male',
	},
	{
		id: 'GXS_huiyan',
		name: '慧眼',
		star: 5,
		character: 'yxs_bole',
		sex: 'male',
	},
	{
		id: 'GXS_guifu',
		name: '鬼斧',
		star: 5,
		character: 'yxs_luban',
		sex: 'male',
	},
	{
		id: 'GXS_shengong',
		name: '神工',
		star: 5,
		character: 'yxs_luban',
		sex: 'male',
	},
	{
		id: 'GXS_lianhuan',
		name: '连环',
		star: 5,
		character: 'yxs_weizhonxian',
		sex: 'male',
	},
	{
		id: 'GXS_zhuxin',
		name: '诛心',
		star: 5,
		character: 'yxs_weizhonxian',
		sex: 'male',
	},
	{
		id: 'GXS_rentu',
		name: '人屠',
		star: 5,
		character: 'yxs_baiqi',
		sex: 'male',
	},
	{
		id: 'duanyou_nanman',
		name: '南蛮',
		star: 5,
		character: 'yxs_menghuo',
		sex: 'male',
	},
	{
		id: 'GXS_liangjiang',
		name: '良将',
		star: 5,
	},
	{
		id: 'GXS_biyue',
		name: '闭月',
		star: 5,
		character: 'yxs_diaochan',
		sex: 'female',
	},
	{
		id: 'GXS_lijian',
		name: '离间',
		star: 5,
		character: 'yxs_diaochan',
		sex: 'female',
	},
	{
		id: 'GXS_dihui',
		name: '诋毁',
		star: 5,
		character: 'yxs_liji',
		sex: 'female',
	},
	{
		id: 'GXS_mimou',
		name: '密谋',
		star: 5,
		character: 'yxs_liji',
		sex: 'female',
	},
	{
		id: 'GXS_chongru',
		name: '崇儒',
		star: 5,
		character: 'yxs_kongzi',
		sex: 'male',
	},
	{
		id: 'GXS_shouli',
		name: '授礼',
		star: 5,
		character: 'yxs_kongzi',
		sex: 'male',
	},
	{
		id: 'GXS_luobi',
		name: '落笔',
		star: 5,
		character: 'yxs_tangbohu',
		sex: 'male',
	},
	{
		id: 'GXS_fengliu',
		name: '风流',
		star: 5,
		character: 'yxs_tangbohu',
		sex: 'male',
	},
	{
		id: 'GXS_pingyuan',
		name: '平冤',
		star: 5,
		character: 'yxs_baozheng',
		sex: 'male',
	},
	{
		id: 'GXS_shenduan',
		name: '神断',
		star: 5,
		character: 'yxs_baozheng',
		sex: 'male',
	},
	{
		id: 'GXS_tianming',
		name: '天命',
		star: 5,
		character: 'yxs_xiaozhuang',
		sex: 'female',
	},
	{
		id: 'GXS_youshui',
		name: '游说',
		star: 5,
		character: 'yxs_xiaozhuang',
		sex: 'female',
	},
	{
		id: 'GXS_qinzheng',
		name: '亲征',
		star: 5,
		character: 'yxs_xiaotaihou',
		sex: 'female',
	},
	{
		id: 'GXS_dyliebo',
		name: '裂帛',
		star: 5,
		character: 'yxs_meixi',
		sex: 'female',
	},
	{
		id: 'GXS_dyyaoji',
		name: '妖姬',
		star: 5,
		character: 'yxs_meixi',
		sex: 'female',
	},
	{
		id: 'GXS_jiasha',
		name: '袈裟',
		star: 5,
		character: 'yxs_xuanxang',
		sex: 'male',
	},
	{
		id: 'GXS_kanpo',
		name: '看破',
		star: 5,
		character: 'yxs_sunwu',
		sex: 'male',
	},
	{
		id: 'GXS_zhenglve',
		name: '政略',
		star: 5,
		character: 'yxs_wenjiang',
		sex: 'female',
	},
	{
		id: 'GXS_beide',
		name: '背德',
		star: 5,
		character: 'yxs_wenjiang',
		sex: 'female',
	},
	{
		id: 'GXS_xiuhua',
		name: '羞花',
		star: 5,
		character: 'yxs_yangyuhuan',
		sex: 'female',
	},
	{
		id: 'yzhongjia',
		name: '重甲',
		star: 5,
		character: 'yxs_zhongjiabing',
		sex: 'male',
	},
	{
		id: 'GXS_yubu',
		name: '玉步',
		star: 5,
		character: 'yxs_zhaofeiyan',
		sex: 'female',
	},
	{
		id: 'GXS_qiangyun',
		name: '强运',
		star: 5,
		character: 'yxs_zhuyuanzhang',
		sex: 'male',
	},
	{
		id: 'GXS_shucai',
		name: '疏财',
		star: 5,
		character: 'yxs_songjiang',
		sex: 'male',
	},
	{
		id: 'GXS_taiji',
		name: '太极',
		star: 5,
		character: 'yxs_zhangsanfeng',
		sex: 'male',
	},
	{
		id: 'GXS_ybudao',
		name: '布道',
		star: 5,
		character: 'yxs_zhangsanfeng',
		sex: 'male',
	},
	{
		id: 'GXS_mili',
		name: '迷离',
		star: 5,
		character: 'yxs_huamulan',
		sex: 'female',
	},
	{
		id: 'GXS_shixin',
		name: '噬心',
		star: 5,
		character: 'yxs_daji',
		sex: 'female',
	},
	{
		id: 'GXS_meiguo',
		name: '媚国',
		star: 5,
		character: 'yxs_daji',
		sex: 'female',
	},
	{
		id: 'GXS_manwu',
		name: '曼舞',
		star: 5,
		character: 'yxs_lishishi',
		sex: 'female',
	},
	{
		id: 'yxsduji',
		name: '毒计',
		star: 5,
		character: 'yxs_gaoqiu',
		sex: 'male',
	},
	{
		id: 'GXS_liaoshang',
		name: '疗伤',
		star: 5,
		character: 'yxs_bianque',
		sex: 'male',
	},
	{
		id: 'GXS_huichun',
		name: '回春',
		star: 5,
		character: 'yxs_bianque',
		sex: 'male',
	},
	{
		id: 'GXS_shentan',
		name: '神探',
		star: 5,
		character: 'yxs_direnjie',
		sex: 'male',
	},
	{
		id: 'GXS_jujian',
		name: '举荐',
		star: 5,
		character: 'yxs_direnjie',
		sex: 'male',
	},
	{
		id: 'GXS_fujing',
		name: '负荆',
		star: 5,
		character: 'yxs_lianpo',
		sex: 'male',
	},
	{
		id: 'GXS_dili',
		name: '底力',
		star: 5,
		character: 'yxs_luzhishen',
		sex: 'male',
	},
	{
		id: 'GXS_yuren',
		name: '驭人',
		star: 5,
		character: 'yxs_liubang',
		sex: 'male',
	},
	{
		id: 'GXS_xiadan',
		name: '侠胆',
		star: 5,
		character: 'yxs_renhuanzhi',
		sex: 'male',
	},
	{
		id: 'GXS_aojian',
		name: '傲剑',
		star: 5,
		character: 'yxs_tantaiming',
		sex: 'male',
	},
	{
		id: 'GXS_kongju',
		name: '控局',
		star: 5,
		character: 'yxs_lishimin',
		sex: 'male',
	},
	{
		id: 'GXS_diehun',
		name: '蝶魂',
		star: 5,
		character: 'yxs_murong',
		sex: 'female',
	},
	{
		id: 'GXS_huoshen',
		name: '火神',
		star: 5,
		character: 'yxs_zhurong',
		sex: 'female',
	},
	{
		id: 'GXS_baotou',
		name: '豹头',
		star: 5,
		character: 'yxs_linchong',
		sex: 'male',
	},
	{
		id: 'GXS_zhongpan',
		name: '众叛',
		star: 5,
		character: 'yxs_shangzhou',
		sex: 'male',
	},
	{
		id: 'yyunchou',
		name: '运筹',
		star: 5,
	},
	{
		id: 'GXS_zhisheng',
		name: '智圣',
		star: 5,
		character: 'yxs_dongfangshuo',
		sex: 'male',
	},
	{
		id: 'yjiushen',
		name: '酒神',
		star: 5,
	},
	{
		id: 'GXS_yaoyue',
		name: '邀月',
		star: 5,
	},
	{
		id: 'GXS_shenli',
		name: '神力',
		star: 5,
	},
	{
		id: 'GXS_biaoqi',
		name: '骠骑',
		star: 5,
		character: 'yxs_luocheng',
		sex: 'male',
	},
	{
		id: 'GXS_hanbei',
		name: '捍北',
		star: 5,
		character: 'yxs_zhaoyong',
		sex: 'male',
	},
	{
		id: 'GXS_hufu',
		name: '胡服',
		star: 5,
		character: 'yxs_zhaoyong',
		sex: 'male',
	},
	{
		id: 'GXS_pudu',
		name: '普渡',
		star: 5,
		character: 'yxs_xuanxang',
		sex: 'male',
	},
	{
		id: 'yshenqiang',
		name: '身强',
		star: 5,
	},
	{
		id: 'ychuanyang',
		name: '穿杨',
		star: 5,
	},
	{
		id: 'GXS_yizhuang',
		name: '易装',
		star: 4,
		character: 'yxs_huamulan',
		sex: 'female',
	},
	{
		id: 'GXS_daowang',
		name: '悼亡',
		star: 4,
		character: 'yxs_panan',
		sex: 'male',
	},
	{
		id: 'GXS_feigong',
		name: '非攻',
		star: 4,
		character: 'yxs_mozi',
		sex: 'male',
	},
	{
		id: 'yxszhuanquan',
		name: '专权',
		star: 4,
		character: 'yxs_gaoqiu',
		sex: 'male',
	},
	{
		id: 'GXS_qiandu',
		name: '迁都',
		star: 4,
		character: 'yxs_wuzetian',
		sex: 'female',
	},
	{
		id: 'GXS_hongzhuang',
		name: '红妆',
		star: 4,
		character: 'yxs_lishishi',
		sex: 'female',
	},
	{
		id: 'GXS_meihuo',
		name: '魅惑',
		star: 4,
		character: 'yxs_xishi',
		sex: 'female',
	},
	{
		id: 'GXS_shentou',
		name: '神偷',
		star: 4,
		character: 'yxs_shiqian',
		sex: 'male',
	},
	{
		id: 'GXS_touji',
		name: '投机',
		star: 4,
		character: 'yxs_wusangui',
		sex: 'male',
	},
	{
		id: 'GXS_jiquan',
		name: '集权',
		star: 4,
		character: 'yxs_yingzheng',
		sex: 'male',
	},
	{
		id: 'GXS_zuijiu',
		name: '醉酒',
		star: 4,
		character: 'yxs_wusong',
		sex: 'male',
	},
	{
		id: 'GXS_qiyi',
		name: '起义',
		star: 4,
		character: 'yxs_chensheng',
		sex: 'male',
	},
	{
		id: 'yxsjn_jianxiong',
		name: '奸雄',
		star: 4,
		character: 'yxs_caocao',
		sex: 'male',
	},
	{
		id: 'GXS_fenghuo',
		name: '烽火',
		star: 4,
		character: 'yxs_baosi',
		sex: 'female',
	},
	{
		id: 'GXS_juesha',
		name: '绝杀',
		star: 4,
		character: 'yxs_jingke',
		sex: 'male',
	},
	{
		id: 'GXS_fanji',
		name: '反击',
		star: 4,
		character: 'yxs_qinqiong',
		sex: 'male',
	},
	{
		id: 'GXS_chaotuo',
		name: '超脱',
		star: 4,
		character: 'yxs_liyu',
		sex: 'male',
	},
	{
		id: 'GXS_bianfa',
		name: '变法',
		star: 4,
		character: 'yxs_shangyang',
		sex: 'male',
	},
	{
		id: 'GXS_tianxiang',
		name: '天香',
		star: 4,
		character: 'yxs_xiaoqiao',
		sex: 'female',
	},
	{
		id: 'GXS_duzun',
		name: '独尊',
		star: 4,
		character: 'yxs_aobai',
		sex: 'male',
	},
	{
		id: 'GXS_zongheng',
		name: '纵横',
		star: 4,
		character: 'yxs_menghuo',
		sex: 'male',
	},
	{
		id: 'GXS_guose',
		name: '国色',
		star: 4,
		character: 'yxs_xiaoqiao',
		sex: 'female',
	},
	{
		id: 'GXS_fengyan',
		name: '丰艳',
		star: 3,
		character: 'yxs_yangyuhuan',
		sex: 'female',
	},
	{
		id: 'yxsjn_nvquan',
		name: '女权',
		star: 3,
		character: 'yxs_wuzetian',
		sex: 'female',
	},
	{
		id: 'GXS_juma',
		name: '拒马',
		star: 3,
		character: 'yxs_xiaotaihou',
		sex: 'female',
	},
	{
		id: 'GXS_guiyin',
		name: '归隐',
		star: 3,
		character: 'yxs_liubowen',
		sex: 'male',
	},
	{
		id: 'GXS_fuchou',
		name: '复仇',
		star: 3,
		character: 'yxs_likui',
		sex: 'male',
	},
	{
		id: 'GXS_cike',
		name: '刺客',
		star: 3,
		character: 'yxs_jingke',
		sex: 'male',
	},
	{
		id: 'GXS_bingxian',
		name: '兵仙',
		star: 3,
		character: 'yxs_hanxin',
		sex: 'male',
	},
	{
		id: 'yxsjn_sanbanfu',
		name: '三斧',
		star: 3,
		character: 'yxs_chengyaojin',
		sex: 'male',
	},
	{
		id: 'GXS_zhiyu',
		name: '治愈',
		star: 3,
		character: 'yxs_baosi',
		sex: 'female',
	},
	{
		id: 'GXS_hongyan',
		name: '红颜',
		star: 3,
		character: 'yxs_chenyuanyuan',
		sex: 'female',
	},
	{
		id: 'GXS_bawang',
		name: '霸王',
		star: 3,
		character: 'yxs_xiangyu',
		sex: 'female',
	},
	{
		id: 'GXS_tuqiang',
		name: '图强',
		star: 3,
		character: 'yxs_goujian',
		sex: 'male',
	},
	{
		id: 'GXS_lumang',
		name: '鲁莽',
		star: 3,
		character: 'yxs_lizicheng',
		sex: 'male',
	},
	{
		id: 'GXS_wumu',
		name: '武穆',
		star: 3,
		character: 'yxs_yuefei',
		sex: 'male',
	},
	{
		id: 'GXS_shiquan',
		name: '释权',
		star: 3,
		character: 'yxs_zhaokuangyin',
		sex: 'male',
	},
	{
		id: 'GXS_yinren',
		name: '隐忍',
		star: 3,
		character: 'yxs_goujian',
		sex: 'male',
	},
	{
		id: 'GXS_cizhen',
		name: '赐鸩',
		star: 3,
		character: 'yxs_lvzhi',
		sex: 'female',
	},
	{
		id: 'GXS_qingying',
		name: '轻影',
		star: 3,
		character: 'yxs_zhaofeiyan',
		sex: 'female',
	},
	{
		id: 'GXS_gongxin',
		name: '攻心',
		star: 3,
		character: 'yxs_hanxin',
		sex: 'male',
	},
	{
		id: 'GXS_chenyu',
		name: '沉鱼',
		star: 3,
		character: 'yxs_xishi',
		sex: 'female',
	},
	{
		id: 'GXS_weiwo',
		name: '唯我',
		star: 3,
		character: 'yxs_aobai',
		sex: 'male',
	},
	{
		id: 'yxsjn_miaobi',
		name: '妙笔',
		star: 3,
		character: 'yxs_libai',
		sex: 'male',
	},
	{
		id: 'GXS_dongcha',
		name: '洞察',
		star: 3,
		character: 'yxs_zhugeliang',
		sex: 'male',
	},
	{
		id: 'GXS_houzhu',
		name: '后主',
		star: 3,
		character: 'yxs_liyu',
		sex: 'male',
	},
	{
		id: 'GXS_menshen',
		name: '门神',
		star: 3,
		character: 'yxs_qinqiong',
		sex: 'male',
	},
	{
		id: 'GXS_chuchu',
		name: '楚楚',
		star: 3,
		character: 'yxs_chenyuanyuan',
		sex: 'male',
	},
	{
		id: 'GXS_wudao',
		name: '无道',
		star: 3,
		character: 'yxs_shangzhou',
		sex: 'male',
	},
	{
		id: 'GXS_juebie',
		name: '诀别',
		star: 2,
		character: 'yxs_yuji',
		sex: 'female',
	},
	{
		id: 'GXS_qianglve',
		name: '强掠',
		star: 2,
	},
	{
		id: 'GXS_jianai',
		name: '兼爱',
		star: 2,
		character: 'yxs_mozi',
		sex: 'male',
	},
	{
		id: 'GXS_xumou',
		name: '蓄谋',
		star: 2,
		character: 'yxs_lvzhi',
		sex: 'female',
	},
	{
		id: 'GXS_yongchuang',
		name: '勇闯',
		star: 2,
		character: 'yxs_lizicheng',
		sex: 'male',
	},
	{
		id: 'GXS_qingmin',
		name: '轻敏',
		star: 1,
		character: 'yxs_shiqian',
		sex: 'male',
	},
	{
		id: 'ydanji',
		name: '单骑',
		star: 1,
		character: 'yxs_guanyu',
		sex: 'male',
	},
	];
	//配件功能(使用了时空枢纽的配饰窗口代码)
	//检测是否装备了配件
	game.rethk_hasEquiped = function (name, playerName, num) {
		if (!lib.config.rethk_yinshou[playerName]) return false;
		if (lib.config.rethk_yinshou[playerName][num] == false) return false;
		if (lib.config.rethk_yinshou[playerName][num] == name) return true;
		return false;
	};
	//装备配件
	game.rethk_shangBaoju = function (name, playerName, num) {
		if (!lib.config.rethk_yinshou[playerName]) lib.config.rethk_yinshou[playerName] = {
			z1: false,
			z2: false,
			f1: false,
			f2: false
		}
		lib.config.rethk_yinshou[playerName][num] = name;
		game.saveConfig('rethk_yinshou', lib.config.rethk_yinshou);
	};
	//卸下配件
	game.rethk_xieBaoju = function (name, playerName, num) {
		lib.config.rethk_yinshou[playerName][num] = false;
		if (lib.config.rethk_yinshou[playerName]['z1'] == false && lib.config.rethk_yinshou[playerName]['z2'] == false && lib.config.rethk_yinshou[playerName]['f1'] == false && lib.config.rethk_yinshou[playerName]['f2'] == false) delete lib.config.rethk_yinshou[playerName];
		game.saveConfig('rethk_yinshou', lib.config.rethk_yinshou);
	};
	//允许配件生效的模式
	lib.rethk_equipMode = ['identity', 'doudizhu', 'versus', 'boss'];
	lib.config.rethkfuyin = [90, 19, 29, 49, 69, 79];
	//配印生效
	lib.translate["_rethk_yinshouEffect"] = "配印生效";
	lib.skill["_rethk_yinshouEffect"] = {
		trigger: {
			global: 'gameStart',
		},
		filter(event, player) {
			if (!player.name) return false;
			if (!lib.rethk_equipMode || !lib.rethk_equipMode.includes(get.mode())) return false;
			// if(lib.config.rethk_yinshou_ban){
			// 	if(lib.config.rethk_yinshou_ban=='all') return false;
			// 	if(lib.config.rethk_yinshou_ban=='onlyAi') return player.isUnderControl(true);
			// 	return true;
			// }
			return true;
		},
		forced: true,
		popup: false,
		priority: Infinity,
		content() {
			if (lib.config.rethk_yinshou[player.name] == undefined) {
				if (lib.config['extension_英雄杀_rethkaibj']) {
					var yin = lib.allYins.randomGet();
					lib.config.rethk_yinshou[player.name] = yin;
				} else return;
			}
			var str = '警告!';
			for (var i in lib.config.rethk_yinshou[player.name]) {
				var yskill = lib.config.rethk_yinshou[player.name][i];
				if (yskill != false && lib.skill[yskill] == undefined) {
					game.log('已替换' + yskill);
					yskill = yskill.replace('y', 'GXS_');
				}
				if (yskill != false && lib.skill[yskill] == undefined) {
					str += (yskill + ' ');
					continue;
				}
				if (yskill != false) player.addSkillLog(yskill);
			}
			//测试
			//for (var i of lib.allYins){
			//    for (var j in i) {
			//        if (lib.skill[i[j]]==undefined) {
			//        var cg=i[j].replace('y','GXS_');
			//        if (lib.skill[cg]==undefined) str+=(i[j]+' ');
			//        }
			//    }
			//}
			//测试
			if (str != '警告!') alert(str + '不存在');
		}
	};
	lib.element.player.showSksnXianjing = function (name, keep) {
		var next = game.createEvent('showSksnXianjing');
		next.keep = keep;
		next.player = this;
		if (name.slice(name.length - 6) == '_skill') name = name.slice(0, name.length - 6);
		next.xianjing = name;
		next.setContent(function () {
			player[event.xianjing + '_showed'] = true;
			if (!event.keep) player.awakenSkill(event.xianjing + '_skill');
		});
		return next;
	}
	//局内配件展示按钮
	if (!lib.element.player.inits) lib.element.player.inits = [];
	lib.element.player.inits.add(function (player) {
		if (!lib.rethk_equipMode || !lib.rethk_equipMode.includes(get.mode())) return;
		if (!player.node.rethk_yinshou) {
			var style = {
				'0': {
					right: '67%',
					width: '26%',
					bottom: '8%',
					height: '18%',
					zIndex: '100',
					overflowX: 'visible',
					backgroundImage: `url(extension/英雄杀/baoju/icon.png)`,
					backgroundSize: '100%',
				},
				'1': {
					left: '60%',
					width: '26%',
					bottom: '-1%',
					height: '18%',
					zIndex: '100',
					overflowX: 'visible',
					backgroundImage: `url(extension/英雄杀/baoju/icon.png)`,
					backgroundSize: '100%',
				}
			};
			style = style[lib.config.rethk_equipBtmPosition || '0'];
			var equips = ui.create.div(player, style);
			equips.owner = player;
			player.node.rethk_yinshou = equips;
			equips.listen(function () {
				var player = this.owner;
				//var playerEquips=player.rethk_yinshou;
				//if(!playerEquips) return;
				if (!lib.config.rethk_equipBtmCl || lib.config.rethk_equipBtmCl == 'false') return;
				var blank = ui.create.div(ui.window, {
					zIndex: '200',
					top: '0', left: '0',
					width: '100%', height: '100%',
				});
				var setSize = function () {
					window.style.height = blank.clientWidth * 0.28 + 'px';
					window.style.fontSize = blank.clientWidth * 0.6 + 'px';
				};
				var resize = function () {
					setTimeout(setSize, 500);
				};
				lib.onresize.push(resize);
				var removeBlank = function () { blank.remove(); lib.onresize.remove(resize); };
				//blank.listen(removeBlank);
				var window = ui.create.div(blank, {
					left: '20%', width: '60%',
					top: '20%', height: blank.clientWidth * 0.34 + 'px',
					fontSize: blank.clientWidth * 0.6 + 'px',
					backgroundImage: `url(extension/英雄杀/baoju/dialog.png)`,
					backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
				});
				//window.listen(removeBlank);
				//角色图片
				var playerImage = ui.create.div(window, {
					bottom: '20%', left: '12%',
					height: '60%', width: '23%',
					backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat',
					borderRadius: '20px'
				});
				playerImage.setBackground(player.name, 'character');
				//文字窗口
				var text = ui.create.div(window, {
					top: '15%', left: '40%',
					height: '10%', width: '45%',
					color: 'black',
					textAlign: 'center',
					fontSize: '4%', fontFamily: 'xinwei'
				})
				text.innerHTML = get.translation(player) + '的宝具';
				var tuichu = ui.create.div(window, {
					top: '10%', left: '88%',
					height: '35%', width: '4%',
					backgroundImage: `url(extension/英雄杀/baoju/exit.png)`,
					backgroundSize: '100%', backgroundRepeat: 'no-repeat',
					borderRadius: '2px'
				});
				tuichu.listen(removeBlank);
				//获得配件
				var fuyinlist = lib.config.baojulist_f
				var zhuyinlist = lib.config.baojulist_z
				var tmpWindow = document.getElementById('window')
				var boxline = ui.create.div('#boxline', window)
				var boxline2s = ui.create.div('#boxline2s', window)
				var baojuSelector = ui.create.div('#baojuSelector.dialog', blank)
				var yinSelector = ui.create.div('#yinSelector.dialog', blank)
				yinSelector.style.display = 'none'
				var yincard = ui.create.div('#yincard', yinSelector)
				var yinSelector1 = ui.create.div('#yinSelector1', yincard)
				var yinSelector2 = ui.create.div('#yinSelector2', yincard)
				var yinSelector3 = ui.create.div('#yinSelector3', yincard)
				var yincloseBtn = ui.create.div('#yincloseBtn', yinSelector1)
				yincloseBtn.addEventListener('click', function () {
					yinSelector.style.display = 'none'
				})
				var yincontent = ui.create.div('#yincontent', yinSelector2)
				var yincontentImg = ui.create.div('#yincontentImg', yincontent)
				var yincontentText = ui.create.div('#yincontentText', yincontent)
				var yintext1 = ui.create.div('#yintext1', yincontentText)
				var yintext2 = ui.create.div('#yintext2', yincontentText)
				var yintext3 = ui.create.div('#yintext3', yincontentText)
				var yinbottomText = ui.create.div('#yinbottomText', yinSelector3)
				yinbottomText.innerHTML = ""
				var baojuSelectorToolBar = ui.create.div('.toolbar', baojuSelector, function () {
					baojuSelector.style.display = 'none'
				})
				baojuSelectorToolBar.innerHTML = '关闭'
				var showBaojuSelector = function (type) {
					var baojulist = zhuyinlist
					if (type > 2) {
						//辅
						baojulist = fuyinlist
					}
					var tmpSkillBox = document.getElementById('skillSelectorBoxxx')
					//清空所有内容
					if (tmpSkillBox) {
						baojuSelector.removeChild(tmpSkillBox)
					}
					var tmpshowBaojuWindow = document.getElementById('baojuSelector')
					tmpshowBaojuWindow.style.display = 'block'
					tmpshowBaojuWindow.currentType = type
					var skillSelectorBox = ui.create.div('#skillSelectorBoxxx', baojuSelector)
					var jncheck = [];
					for (var i = 0; i < baojulist.length; i++) {
						var baojuitembox = ui.create.div('.zskillitems')
						var bjimg = ui.create.div('.baojuimg', baojuitembox, function (e) {
							var bg = 'extension/英雄杀/baoju/' + this.id + '.jpg';
							var leixing;
							switch (baojuSelector.currentType) {
								case 1: leixing = 'z1'; break;
								case 2: leixing = 'z2'; break;
								case 3: leixing = 'f1'; break;
								case 4: leixing = 'f2'; break;
							}
							if (game.rethk_hasEquiped(this.id, player.name, leixing) == true) {
								game.rethk_xieBaoju(this.id, player.name, leixing);
								switch (baojuSelector.currentType) {
									case 1: box_zhuyin1.setBackgroundImage(null); break;
									case 2: box_zhuyin2.setBackgroundImage(null); break;
									case 3: box_fuyin1.setBackgroundImage(null); break;
									case 4: box_fuyin2.setBackgroundImage(null); break;
								}
							} else {
								game.rethk_shangBaoju(this.id, player.name, leixing);
								switch (baojuSelector.currentType) {
									case 1: box_zhuyin1.setBackgroundImage(bg); break;
									case 2: box_zhuyin2.setBackgroundImage(bg); break;
									case 3: box_fuyin1.setBackgroundImage(bg); break;
									case 4: box_fuyin2.setBackgroundImage(bg); break;
								}
							}
						})
						var imgurl = 'extension/英雄杀/baoju/' + baojulist[i].id
						bjimg.id = baojulist[i].id
						bjimg.style.backgroundImage = 'url("' + imgurl + '.jpg' + '")';
						bjimg.style.backgroundSize = '100% 100%'
						var t = ui.create.div('.baojutext', baojuitembox, function () {
							//打开新的窗口
							yincontentImg.style.backgroundImage
							var yintype = '辅印'
							if (baojuSelector.currentType == 1) {
								yintype = '主印'
							}
							var start = this.star
							var yinimgurl = 'extension/英雄杀/baoju/' + this.id
							yincontentImg.style.backgroundImage = 'url("' + yinimgurl + '.jpg' + '")';
							yintext1.innerHTML = this.name + '【' + yintype + '】'
							yintext2.innerHTML = `星级:${start}星`
							yintext3.innerHTML = lib.translate[this.id + '_info']
							yinSelector.style.display = 'inline-block'
						})
						t.style.color = '#fff'
						t.innerHTML = baojulist[i].name
						t.name = baojulist[i].name
						t.id = baojulist[i].id
						t.star = baojulist[i].star
						//yindialog
						//t.addEventListener('click')
						/*bjimg.addEventListener('click', function(){
							var bg = 'extension/英雄杀/baoju/' + t.id +'.jpg';
							switch (baojuSelector.currentType){
							case 1:box_zhuyin1.setBackgroundImage(bg);break;
							case 2:box_zhuyin2.setBackgroundImage(bg);break;
							case 3:box_fuyin1.setBackgroundImage(bg);break;
							case 4:box_fuyin2.setBackgroundImage(bg);break;
							}
							/*
							if(game.rethk_hasEquiped(t.id)){
								game.rethk_xieBaoju(t.id,player.name);
								this.innerHTML='装备';
							}else{
								game.rethk_shangBaoju(t.id,player.name);
								this.innerHTML='卸下';
							}*/
						//});
						skillSelectorBox.appendChild(baojuitembox)
					}
				}
				var box_fuyin1 = ui.create.div('#box_fuyin1.baojubox', boxline, function () {
					setTimeout(function () {
						showBaojuSelector(3)
					}, 10);
				})
				var box_zhuyin1 = ui.create.div('#box_zhuyin1.baojubox', boxline, function () {
					setTimeout(function () {
						showBaojuSelector(1)
					}, 10);
				})
				var box_fuyin2 = ui.create.div('#box_fuyin2.baojubox', boxline, function () {
					setTimeout(function () {
						showBaojuSelector(4)
					}, 10);
				})
				var box_zhuyin2 = ui.create.div('#box_zhuyin2.baojubox', boxline, function () {
					setTimeout(function () {
						showBaojuSelector(2)
					}, 10);
				})
				//显示英雄的配印名称
				box_zhuyin1.style.fontSize = '16px'
				box_zhuyin2.style.fontSize = '16px'
				box_fuyin1.style.fontSize = '16px'
				box_fuyin2.style.fontSize = '16px'
				//读取默认值
				if (!lib.config.rethk_yinshou[player.name]) return;
				if (lib.config.rethk_yinshou[player.name].z1 != false) {
					//box_zhuyin1.innerHTML = heroDao[name].z1.name
					var bg = 'extension/英雄杀/baoju/' + lib.config.rethk_yinshou[player.name].z1
					box_zhuyin1.style.backgroundImage = 'url("' + bg + '.jpg' + '")';
					box_zhuyin1.style.backgroundSize = '100% 100%'
				}
				if (lib.config.rethk_yinshou[player.name].z2) {
					//box_zhuyin2.innerHTML = heroDao[name].z2.name
					var bg = 'extension/英雄杀/baoju/' + lib.config.rethk_yinshou[player.name].z2
					box_zhuyin2.style.backgroundImage = 'url("' + bg + '.jpg' + '")';
					box_zhuyin2.style.backgroundSize = '100% 100%'
				}
				if (lib.config.rethk_yinshou[player.name].f1) {
					//box_fuyin1.innerHTML = heroDao[name].f1.name
					var bg = 'extension/英雄杀/baoju/' + lib.config.rethk_yinshou[player.name].f1
					box_fuyin1.style.backgroundImage = 'url("' + bg + '.jpg' + '")';
					box_fuyin1.style.backgroundSize = '100% 100%'
				}
				if (lib.config.rethk_yinshou[player.name].f2) {
					//box_fuyin2.innerHTML = heroDao[name].f2.name
					var bg = 'extension/英雄杀/baoju/' + lib.config.rethk_yinshou[player.name].f2
					box_fuyin2.style.backgroundImage = 'url("' + bg + '.jpg' + '")';
					box_fuyin2.style.backgroundSize = '100% 100%'
				}
				var jieshaotext = ui.create.div(window, {
					top: '39%', left: '42%',
					height: '10%', width: '45%',
					color: 'black',
					textAlign: 'left',
					fontSize: '15px', fontFamily: 'xinwei'
				})
				var str = '';
				if (lib.config.rethk_yinshou[player.name]) {
					if (lib.config.rethk_yinshou[player.name].z1) str += '【' + lib.translate[lib.config.rethk_yinshou[player.name].z1] + '】' + lib.translate[lib.config.rethk_yinshou[player.name].z1 + '_info'] + '<br>';
					if (lib.config.rethk_yinshou[player.name].z2) str += '【' + lib.translate[lib.config.rethk_yinshou[player.name].z2] + '】' + lib.translate[lib.config.rethk_yinshou[player.name].z2 + '_info'] + '<br>';
					if (lib.config.rethk_yinshou[player.name].f1) str += '【' + lib.translate[lib.config.rethk_yinshou[player.name].f1] + '】' + lib.translate[lib.config.rethk_yinshou[player.name].f1 + '_info'] + '<br>';
					if (lib.config.rethk_yinshou[player.name].f2) str += '【' + lib.translate[lib.config.rethk_yinshou[player.name].f2] + '】' + lib.translate[lib.config.rethk_yinshou[player.name].f2 + '_info'] + '<br>';
				}
				jieshaotext.innerHTML = str;
			});
		}
	});
	// game.addGlobalSkill('_rethk_yinshouEffect')
})