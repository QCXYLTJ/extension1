	medal:{
        	id:{
        		name:"中文名",
        		intro:"获得方式",
        		intro2:"获得后显示的文本",
        		hidden:false,//可不填,填false则不可获得
        		category:"分栏",//没有对应分栏会自动创建,中文名与id均可填
        		reward:"",//随章奖励
        		owned:true,
        		image:"",//刻章图片路径,ext:扩展名/xxx即他扩,不为ext开头默认咱扩
        		filter:`function (event,player,current){
        		}`,//获得条件,event为当前事件,player为game.me,即当前视角的角色,current为当前回合角色
        	},
        },