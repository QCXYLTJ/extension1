'use strict';
window.xwImport(function (lib, game, ui, get, ai, _status) {
	const encodeString = 'JTdCJTIya2lsbCUyMiUzQSU3QiUyMnh3amhfeHVlZGFvc2hhb3podV9raWxsX3h3amhfeWVndWFubGFuJTIyJTNBJTdCJTIya2lsbGVyJTIyJTNBJTVCJTIyJXU4NUNGJXU1MjUxJXU1QzcxJXU1RTg0JXVGRjBDJXU0RUNBJXU2NUU1JXU4RDc3JXU0RUNFJXU2QzVGJXU2RTU2JXU5NjY0JXU1NDBEJXVGRjAxJTIyJTJDJTIyJXU2NzJDJXU0RThCJXU0RTBEJXU1OTI3JXVGRjBDJXU5QUE4JXU1OTM0JXU1MDEyJXU2NjJGJXU1Rjg4JXU3ODZDJXVGRjAxJTIyJTVEJTJDJTIyZGVhZCUyMiUzQSU1QiUyMiV1ODg0MCV1NTIwMCV1OTVFOCV1NjA3NiV1OEQzQyV1MjAyNiV1MjAyNiV1NEYxMSV1NjBGMyV1MjAyNiV1MjAyNiV1NTE4RCV1NTQxMSV1NTI0RCV1OEUwRiV1NTM0QSV1NkI2NSV1RkYwMSUyMiU1RCU3RCUyQyUyMnh3amhfeHVlZGFvc2hhb3podV9raWxsX3h3amhfeGlhb2FuJTIyJTNBJTdCJTIya2lsbGVyJTIyJTNBJTVCJTIyJXU4NUNGJXU1MjUxJXU1QzcxJXU1RTg0JXVGRjBDJXU0RUNBJXU2NUU1JXU4RDc3JXU0RUNFJXU2QzVGJXU2RTU2JXU5NjY0JXU1NDBEJXVGRjAxJTIyJTJDJTIyJXU2NzJDJXU0RThCJXU0RTBEJXU1OTI3JXVGRjBDJXU5QUE4JXU1OTM0JXU1MDEyJXU2NjJGJXU1Rjg4JXU3ODZDJXVGRjAxJTIyJTVEJTJDJTIyZGVhZCUyMiUzQSU1QiUyMiV1ODg0MCV1NTIwMCV1OTVFOCV1NjA3NiV1OEQzQyV1MjAyNiV1MjAyNiV1NEYxMSV1NjBGMyV1MjAyNiV1MjAyNiV1NTE4RCV1NTQxMSV1NTI0RCV1OEUwRiV1NTM0QSV1NkI2NSV1RkYwMSUyMiU1RCU3RCUyQyUyMnh3amhfeGlhb3hpYW9fa2lsbF94d2poX3h1ZWRhb3NoYW96aHUlMjIlM0ElN0IlMjJraWxsZXIlMjIlM0ElNUIlMjIldTU5RDAldTU5RDAldUZGMEMldTYyMTEldTY2RkYldTRGNjAldTYyQTUldTRFQzcldTRFODYldUZGMDElMjIlNUQlN0QlMkMlMjJ4d2poX3l1d2VueGluZ2NoZW5nX2tpbGxfeHdqaF94aW1lbmd1eWluZyUyMiUzQSU3QiUyMmtpbGxlciUyMiUzQSU1QiUyMiV1ODk3RiV1OTVFOCV1NUI2NCV1NUY3MSV1RkYwQyV1NEUwMCV1NTIwNyV1OTBGRCV1N0VEMyV1Njc1RiV1NEU4NiV1RkYwMSUyMiUyQyUyMiV1NjYyRiV1NjVGNiV1NTAxOSV1N0VEOSV1OEZEOSV1NkM1RiV1NkU1NiV1OEZEOCV1NEUwMCV1NEUyQSV1NTE2QyV1OTA1MyV1NEU4NiV1RkYwMSUyMiU1RCUyQyUyMmRlYWQlMjIlM0ElNUIlMjIldTU0NzUldTU0NzUldUZGMEMldThGRDkldTRFMDAldTVDNDAldUZGMEMldTY2MkYldTRGNjAldThENjIldTRFODYldUZGMDElMjIlMkMlMjIldTRGNjAldTgwRkQldTdFQzgldTdFRDMldTYyMTEldUZGMEMldTUzNzQldTdFQzgldTdFRDMldTRFMEQldTRFODYldThGRDkldTRFMTYldTk1RjQldTc2ODQldTlCNTQldTVGQzMldTMwMDIlMjIlNUQlN0QlMkMlMjJ4d2poX3hpbWVuZ3V5aW5nX2tpbGxfeHdqaF95dXdlbnhpbmdjaGVuZyUyMiUzQSU3QiUyMmtpbGxlciUyMiUzQSU1QiUyMiV1NzNCMCV1NTcyOCV1RkYwQyV1NkNBMSV1NjcwOSV1NEVCQSV1ODBGRCV1NTkxRiV1OTYzQiV1NkI2MiV1NjIxMSV1NEU4NiV1MzAwMiUyMiUyQyUyMiV1NjcwMCV1NTQwRSV1NzY4NCV1OTY5QyV1Nzg4RCV1MjAyNiV1MjAyNiV1NURGMiV1N0VDRiV1NTNCQiV1OTY2NCV1NEU4NiV1MzAwMiUyMiU1RCUyQyUyMmRlYWQlMjIlM0ElNUIlMjIldTg5N0YldTk1RTgldTVCNjQldTVGNzEldTIwMjYldTIwMjYldTVDMzEldTdCOTcldTZDQTEldTY3MDkldTYyMTEldTIwMjYldTIwMjYldTRGNjAldTRFNUYldTRFMEQldTRGMUEldTYyMTAldTUyOUYldTc2ODQldUZGMDElMjIlNUQlN0QlMkMlMjJ4d2poX3l1d2VueGluZ2NoZW5nX2tpbGxfeHdqaF94dWVkYW9zaGFvemh1JTIyJTNBJTdCJTIya2lsbGVyJTIyJTNBJTVCJTIyJXU3M0IwJXU1NzI4JXUyMDI2JXUyMDI2JXU2NjJGJXU2NzBCJXU1M0NCJXU0RTg2JXUyMDI2JXUyMDI2JTIyJTVEJTJDJTIyZGVhZCUyMiUzQSU1QiUyMiV1NEY2MCV1NEVFNSV1NEUzQSV1MjAyNiV1MjAyNiV1Njc0MCV1NEU4NiV1ODAwMSV1NUI1MCV1MjAyNiV1MjAyNiV1OEZEOSV1NTkyOSV1NEUwQiV1MjAyNiV1MjAyNiV1NUMzMSV1NEYxQSV1NTkyQSV1NUU3MyV1NTQxNyV1RkYxRiV1NTRDOCV1NTRDOCV1NTRDOCV1NTRDOCV1NTRDOCV1NTRDOCV1NTRDOCV1NTRDOCV1NTRDOCV1RkYwMSUyMiU1RCU3RCUyQyUyMnh3amhfeHVlZGFvc2hhb3podV9raWxsX3h3amhfamlheWklMjIlM0ElN0IlMjJraWxsZXIlMjIlM0ElNUIlMjIldTRFM0EldTRGNTUldTVGQzMldTkxQ0MldTIwMjYldTIwMjYldTRFMDAldTk2MzUldTgzQUIldTU0MEQldTc2ODQldTdFREUldTc1REIldTIwMjYldTIwMjYlMjIlMkMlMjIldTRFMEQldUZGMDEldTYyMTEldTUyMzAldTVFOTUldUZGMDEldTVGRDgldTRFODYldTRFQzAldTRFNDgldUZGMDElMjIlNUQlN0QlMkMlMjJ4d2poX2ppYXlpX2tpbGxfeHdqaF94dWVkYW9zaGFvemh1JTIyJTNBJTdCJTIya2lsbGVyJTIyJTNBJTVCJTIyJXU1NEU1JXU1NEU1JXVGRjBDJXU0RjYwJXUyMDI2JXUyMDI2JXU4RkQ4JXU4QkIwJXU1Rjk3JXU2MjExJXU1NDE3JXVGRjFGJTIyJTJDJTIyJXU1NEU1JXU1NEU1JXVGRjBDJXU2MjExJXU0RUVDJXUyMDI2JXUyMDI2JXU1M0M4JXU3NkY4JXU4OUMxJXU0RTg2JXUyMDI2JXUyMDI2JTIyJTVEJTdEJTJDJTIyeHdqaF9xaWFueXVhbmxvbmdfa2lsbF94d2poX3FpYW5xaWFubG9uZyUyMiUzQSU3QiUyMmtpbGxlciUyMiUzQSU1QiUyMiV1NEUzQSV1NEY1NSV1OEZEOSV1ODJDRCV1NTkyOSV1MjAyNiV1MjAyNiV1NjAzQiV1NjYyRiV1OEJBOSV1NjcxNSV1NTA1QSV1OEZEOSV1N0I0OSV1NjA5NiV1OTAwNiV1NEVCQSV1NEYyNiV1NEU0QiV1NEU4QiV1MjAyNiV1MjAyNiUyMiUyQyUyMiV1NTNENCV1NTNENCV1RkYwQyV1NEY2MCV1NEZCRiV1NkI3QiV1NEU4NiV1OEZEOSV1Njc2MSV1NUZDMyV1N0Y2MiV1MzAwMiUyMiU1RCUyQyUyMmRlYWQlMjIlM0ElNUIlMjIldThEMjUldTU3MjgldTRFODYldTIwMjYldTIwMjYldThGRDkldTVCN0EldTVCNTAldTc2ODQldTYyNEIldTRFMEEldTIwMjYldTIwMjYlMjIlMkMlMjIldTU5MjkldTg5ODEldTRFQTEldTYyMTEldUZGMEMldTk3NUUldTYyMTgldTRFNEIldTdGNkEldTRFNUYldUZGMDElMjIlNUQlN0QlMkMlMjJ4d2poX3FpYW5xaWFubG9uZ19raWxsX3h3amhfcWlhbnl1YW5sb25nJTIyJTNBJTdCJTIya2lsbGVyJTIyJTNBJTVCJTIyJXU2NzE1JXUyMDI2JXUyMDI2JXU1RjUzJXU1NDFCJXU0RTM0JXU1NkRCJXU2RDc3JXVGRjAxJTIyJTJDJTIyJXU4RkQ5JXU1OTI5JXU0RTBCJXVGRjBDJXU3RUM4JXU1RjUyJXU1MjMwJXU0RTg2JXU2NzE1JXU3Njg0JXU2MjRCJXU0RTJEJXVGRjAxJTIyJTVEJTdEJTJDJTIyeHdqaF9zaGlsdW9zaGFuX2tpbGxfeHdqaF9zdW5xaSUyMiUzQSU3QiUyMmtpbGxlciUyMiUzQSU1QiUyMiV1OEZEOSV1NEUwQiV1MjAyNiV1MjAyNiV1NEU1RiV1OEJFNSV1NTkyNyV1NTcyMyV1NzIzNyV1NzIzNyV1N0VEOSV1NUM1RSV1NEUwQiV1MjAyNiV1MjAyNiV1OERFQSV1NEUwMCV1NkIyMSV1NEU4NiV1NTQyNyV1RkYxRiV1NTQ3NSV1NTQ3NSV1RkYxRiV1NTRDOCV1NTRDOCV1NTRDOCV1NTRDOCV1RkYwMSUyMiUyQyUyMiV1NEUzQSV1NEVDMCV1NEU0OCV1NEY2MCV1NUMzMSV1NjYyRiV1NEUwRCV1OERFQSV1RkYxRiV1NEY2MCV1N0VEOSV1NjIxMSV1OERFQSV1NEUwQiV1RkYwMSV1NjIxMSV1NjI0RCV1NjYyRiV1NTgwMiV1NEUzQiV1RkYwMSV1NEUzQSV1NEVDMCV1NEU0OCV1NEUwRCV1OERFQSV1RkYwMSUyMiU1RCUyQyUyMmRlYWQlMjIlM0ElNUIlMjIldTYxRTYldTU5MkIldTIwMjYldTIwMjYldTVDMzEldTY2MkYldTYxRTYldTU5MkIldTIwMjYldTIwMjYldTRFMDAldThGODgldTVCNTAldTkwRkQldTYyMTAldTIwMjYldTIwMjYldTRFMEQldTRFODYldTU5MjcldTRFOEIlMjIlMkMlMjIldTIwMjYldTIwMjYldTYwRjMldThCQTkldTVCNTkldTcyMzcldTcyMzcldTdFRDkldTRGNjAldThERUEldTIwMjYldTIwMjYldTUwNUEldTY4QTYldTUzQkIldTU0MjcldUZGMDElMjIlNUQlN0QlN0QlMkMlMjJsaW5rJTIyJTNBJTdCJTIyeHdqaF9mYW5ncWlqdW4lMjIlM0ElN0IlMjJzYXklMjIlM0ElNUIlMjIldTdCNDkldTgwMDEldTVCNTAldTUxRkEldTY3NjUldTUxOEQldTU0OEMldTRGNjAldTRFRUMldTdCOTcldThEMjYldUZGMDElMjIlMkMlMjIldTRGNjAldTRFRUMldTdCNDkldTc3NDAldUZGMDEldThGRDkldTRFOEIldTcyMzcldTcyMzcldTU0OEMldTRGNjAldTRFRUMldTZDQTEldTVCOEMldUZGMDElMjIlNUQlN0QlMkMlMjJ4d2poX2d1aWppdSUyMiUzQSU3QiUyMnNheSUyMiUzQSU1QiUyMiV1NkNBMSV1NjBGMyV1NTIzMCV1NjcwOSV1NEUwMCV1NjVFNSV1MjAyNiV1MjAyNiV1NjIxMSV1NEU1RiV1NEYxQSV1MjAyNiV1MjAyNiV1OEVBQiV1OTY3NyV1NTZGOSV1NTcwNCV1MjAyNiV1MjAyNiUyMiU1RCU3RCU3RCUyQyUyMmRhbWFnZSUyMiUzQSU3QiU3RCU3RA==';
	lib.xwColorEgg = JSON.parse(unescape(atob(encodeString)));
	//以上代码仅程序员可见.麻瓜不要偷窥.
	//偷窥了的同行请不要告诉别人内容哦.
	lib.xwColorEgg = {
		kill: {
			xwjh_xuedaoshaozhu_kill_xwjh_yeguanlan: {
				killer: ['藏剑山庄,今日起从江湖除名!', '本事不大,骨头倒是很硬!'],
				dead: ['血刀门恶贼……休想……再向前踏半步!'],
			},
			xwjh_xuedaoshaozhu_kill_xwjh_xiaoan: {
				killer: ['藏剑山庄,今日起从江湖除名!', '本事不大,骨头倒是很硬!'],
				dead: ['血刀门恶贼……休想……再向前踏半步!'],
			},
			xwjh_xiaoxiao_kill_xwjh_xuedaoshaozhu: {
				killer: ['姐姐,我替你报仇了!'],
			},
			xwjh_yuwenxingcheng_kill_xwjh_ximenguying: {
				killer: ['西门孤影,一切都结束了!', '是时候给这江湖还一个公道了!'],
				dead: ['呵呵,这一局,是你赢了!', '你能终结我,却终结不了这世间的魔心.'],
			},
			xwjh_ximenguying_kill_xwjh_yuwenxingcheng: {
				killer: ['现在,没有人能够阻止我了.', '最后的障碍……已经去除了.'],
				dead: ['西门孤影……就算没有我……你也不会成功的!'],
			},
			xwjh_yuwenxingcheng_kill_xwjh_xuedaoshaozhu: {
				killer: ['现在……是朋友了……'],
				dead: ['你以为……杀了老子……这天下……就会太平吗？哈哈哈哈哈哈哈哈哈!'],
			},
			xwjh_xuedaoshaozhu_kill_xwjh_jiayi: {
				killer: ['为何心里……一阵莫名的绞痛……', '不!我到底!忘了什么!'],
			},
			xwjh_jiayi_kill_xwjh_xuedaoshaozhu: {
				killer: ['哥哥,你……还记得我吗？', '哥哥,我们……又相见了……'],
			},
			xwjh_qianyuanlong_kill_xwjh_qianqianlong: {
				killer: ['为何这苍天……总是让朕做这等悖逆人伦之事……', '叔叔,你便死了这条心罢.'],
				dead: ['败在了……这孺子的手上……', '天要亡我,非战之罪也!'],
			},
			xwjh_qianqianlong_kill_xwjh_qianyuanlong: {
				killer: ['朕……当君临四海!', '这天下,终归到了朕的手中!'],
			},
			xwjh_shiluoshan_kill_xwjh_sunqi: {
				killer: ['这下……也该大圣爷爷给属下……跪一次了吧？呵呵？哈哈哈哈!', '为什么你就是不跪？你给我跪下!我才是堂主!为什么不跪!'],
				dead: ['懦夫……就是懦夫……一辈子都成……不了大事', '……想让孙爷爷给你跪……做梦去吧!'],
			},
		},
		link: {
			xwjh_fangqijun: {
				say: ['等老子出来再和你们算账!', '你们等着!这事爷爷和你们没完!'],
			},
			xwjh_guijiu: {
				say: ['没想到有一日……我也会……身陷囹圄……'],
			},
		},
		damage: {},
	};
	//hahaha,今日我潜水的火到此一游
	//且作画一幅:
	/*
			QQQQQQQQQQQQQQQQ                                    QQQQQQQQQQQQQQQQ                                    QQQQQQQQQQQQQQQQ                        
		  QQ::::::::::::::::QQ                                QQ::::::::::::::::QQ                                QQ::::::::::::::::QQ                      
		QQ:::::::::::::::::::::QQ                           QQ:::::::::::::::::::::QQ                           QQ:::::::::::::::::::::QQ                   
	  QQ:::::::QQQQQQQQQQQ::::::::Q                       QQ:::::::QQQQQQQQQQQ::::::::Q                       QQ:::::::QQQQQQQQQQQ::::::::Q                 
	QQ::::::QQQ           QQ::::::::Q                   QQ::::::QQQ           QQ::::::::Q                   QQ::::::QQQ           QQ::::::::Q               
   Q:::::::QQ               QQ:::::::Q                 Q:::::::QQ               QQ:::::::Q                 Q:::::::QQ               QQ:::::::Q              
  Q::::::QQ                  QQ:::::::Q               Q::::::QQ                  QQ:::::::Q               Q::::::QQ                  QQ:::::::Q             
 Q::::::QQ                    QQ:::::::Q             Q::::::QQ                    QQ:::::::Q             Q::::::QQ                    QQ:::::::Q            
 Q::::::QQ                    QQ:::::::Q             Q::::::QQ                    QQ:::::::Q             Q::::::QQ                    QQ:::::::Q            
 Q::::::QQ                    QQ:::::::Q             Q::::::QQ                    QQ:::::::Q             Q::::::QQ                    QQ:::::::Q            
 Q:::::::QQ                   QQ:::::::Q             Q:::::::QQ                   QQ:::::::Q             Q:::::::QQ                   QQ:::::::Q            
  Q:::::::QQ  QQQQQQQQQQQ    QQ:::::::Q               Q:::::::QQ  QQQQQQQQQQQ    QQ:::::::Q               Q:::::::QQ  QQQQQQQQQQ     QQ:::::::Q             
   Q::::::::QQQQQ:::::::QQQQQ::::::::Q                 Q::::::::QQQQQ:::::::QQQQQ::::::::Q                 Q::::::::QQQQQ:::::::QQQQQ::::::::Q              
	QQ:::::::::::::::::::::::::::::Q                    QQ:::::::::::::::::::::::::::::Q                    QQ:::::::::::::::::::::::::::::Q                
	  QQ::::::::::::::::::::QQQQQQ                        QQ::::::::::::::::::::QQQQQQ                        QQ::::::::::::::::::::QQQQQQ                  
		QQQQQQQQ:::::::::QQ                                 QQQQQQQQ:::::::::QQ                                 QQQQQQQQ:::::::::QQ                         
				  Q:::::::Q                                           Q:::::::Q                                           Q:::::::Q                         
				   QQQQQQQQQ                                           QQQQQQQQQ                                           QQQQQQQQQ                        
*/
});
