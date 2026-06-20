import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
// 级别
lib.dqzw_buff_level = [
    {
        id: 'ordinary',
        name: '普通',
        probability: 50,
        color: 'hsl(120, 74%, 76%)'
    },
    {
        id: 'rare',
        name: '稀有',
        probability: 31.25,
        color: 'hsl(248, 81%, 67%)'
    },
    {
        id: 'epic',
        name: '史诗',
        probability: 12.5,
        color: 'hsl(60, 100%, 47%)'
    },
    {
        id: 'legend',
        name: '传说',
        probability: 6.25,
        color: 'red'
    }
];
// Buff列表
lib.dqzw_buff_list = [
    /**
     * global(全局技)属性默认值为true
     * skill属性默认值为inherit(继承id)
     * level属性默认值为0(普通)
     * nobuff - 不为自身添加buff
     */
    {
        id: 'dqzw_hongyanhuoshui',
        name: '红颜祸水',
        skill: 'hongyan',
        nobuff: true,
        isGlobal: true,
        intro: '所有角色获得技能「红颜」.',
        buffValue: .3
    },
    {
        id: 'dqzw_jiuzhuangrendan',
        name: '酒壮人胆',
        skill: 'zuijiu',
        nobuff: true,
        isGlobal: true,
        intro: '所有角色获得技能「醉酒」.',
        buffValue: 1.1
    },
    {
        id: 'dqzw_xincunbuliang',
        name: '心存不良',
        skill: 'fulin',
        nobuff: true,
        isGlobal: true,
        intro: '所有角色获得技能「腹麟」.',
        buffValue: .5
    },
    {
        id: 'dqzw_kundunnanxing',
        name: '困顿难行',
        skill: 'kunfen',
        nobuff: true,
        isGlobal: true,
        intro: '所有角色获得技能「困奋」.',
        buffValue: .3
    },
    {
        id: 'dqzw_daodaobaoji',
        name: '刀刀暴击',
        nobuff: true,
        isGlobal: true,
        intro: '所有角色造成的伤害+1.',
        buffValue: 1.4
    },
    {
        id: 'dqzw_pijiazaibing',
        name: '被甲载兵',
        intro: '游戏开始时,你随机使用一张装备牌.',
        buffValue: 1.6
    },
    {
        id: 'dqzw_dongfengbubian',
        name: '东风不便',
        nobuff: true,
        isGlobal: true,
        intro: '所有角色横置时,防止之.',
        buffValue: 1.3
    },
    {
        id: 'dqzw_shuxingwuju',
        name: '属性无惧',
        nobuff: true,
        isGlobal: true,
        intro: '防止所有角色受到的属性伤害.',
        buffValue: 1
    },
    {
        id: 'dqzw_beishuiyizhan',
        name: '背水一战',
        intro: '减少2点体力上限,每轮开始时回复一点体力.',
        init() {
            player.loseMaxHp(2);
        },
        buffValue: player => player.maxHp > 5 ? .5 : 0
    },
    {
        id: 'dqzw_cangtaohu',
        name: '藏桃户',
        intro: '你的【桃】不计入手牌上限.',
        buffValue: .4
    },
    {
        id: 'dqzw_cuixue',
        name: '萃血',
        intro: '你使用的【杀】造成伤害后,摸两张牌.每轮限一次.',
        buffValue: .6
    },
    {
        id: 'dqzw_dangtouyibang',
        name: '当头一棒',
        intro: '每轮你使用的首张【杀】伤害基数+1.',
        buffValue: .8
    },
    {
        id: 'dqzw_duoduoyishan',
        name: '多多益善',
        probability: num => num - 10,
        intro: '你的回合内第五次摸牌时,令摸牌数翻倍.',
        buffValue: .8
    },
    {
        id: 'dqzw_hexinhuiyuan_1',
        name: '核心会员',
        intro: '你可消耗100金币刷新商店,商店刷新次数上限+1.',
        buffValue: .9
    },
    {
        id: 'dqzw_houfazhiren',
        name: '后发制人',
        intro: '摸牌阶段你的摸牌数-1,因此减少过摸牌数的回合结束时你摸两张牌.',
        buffValue: .8
    },
    {
        id: 'dqzw_huishouliyong',
        name: '回收利用',
        intro: '当你的装备牌被顶替后,获得50金币.',
        buffValue: 1.2
    },
    {
        id: 'dqzw_laoguzhuangbei',
        name: '牢固装备',
        intro: '你的装备不能被弃置.',
        buffValue: 1.1
    },
    {
        id: 'dqzw_yanhuo',
        name: '焱火',
        intro: '你造成的火焰伤害+1.',
        buffValue: .5
    },
    {
        id: 'dqzw_jinglei',
        name: '惊雷',
        intro: '你造成的雷电伤害+1.',
        buffValue: .5
    },
    {
        id: 'dqzw_xihuo',
        name: '熄火',
        intro: '你受到的的火焰伤害-1.',
        buffValue: .5
    },
    {
        id: 'dqzw_dinglei',
        name: '定雷',
        intro: '你受到的雷电伤害-1.',
        buffValue: .5
    },
    {
        id: 'dqzw_zongqing',
        name: '纵情',
        intro: '每轮限一次,当你回复体力后,可令一名其他角色回复1点体力.',
        buffValue: .8
    },
    {
        id: 'dqzw_jieyingtongxing',
        name: '结营同行',
        nobuff: true,
        isGlobal: true,
        skill: 'nzry_jieying',
        level: 1,
        intro: '所有角色获得技能「结营」.',
        buffValue: 0
    },
    {
        id: 'dqzw_leidianjiaojia',
        name: '雷电交加',
        level: 1,
        intro: '你的结束阶段开始时,对所有判定区有牌的敌方角色造成2点雷属性伤害.',
        buffValue: .8
    },
    {
        id: 'dqzw_shaqitengteng',
        name: '杀气腾腾',
        nobuff: true,
        isGlobal: true,
        level: 1,
        intro: '友方角色可将【闪】当【杀】使用或打出.',
        buffValue: .7
    },
    {
        id: 'dqzw_yitaozhijiu',
        name: '以桃置酒',
        nobuff: true,
        isGlobal: true,
        level: 1,
        intro: '友方角色可将【桃】当【酒】使用或打出.',
        buffValue: 0
    },
    {
        id: 'dqzw_cedingtianxia',
        name: '策定天下',
        level: 1,
        intro: '当锦囊牌造成伤害后,你摸一张牌.',
        buffValue: 1.2
    },
    {
        id: 'dqzw_daoshengyi',
        name: '道生一',
        level: 1,
        intro: '你使用的【无中生有】摸牌数+1且均结算完成后回复1点体力.',
        buffValue: 1
    },
    {
        id: 'dqzw_shangdianbawang',
        name: '商店霸王',
        level: 1,
        intro: '购买商品时价格将不再增加.',
        buffValue: 1.5
    },
    {
        id: 'dqzw_huiyuanshangdian_1',
        name: '会员商店',
        level: 1,
        intro: '每类商品展示数+1.',
        buffValue: 1.4
    },
    {
        id: 'dqzw_jinnangmiaoji',
        name: '锦囊妙计',
        level: 1,
        intro: '你的摸牌阶段结束后,你本回合手牌上限+摸牌数的一半(向上取整).',
        buffValue: .8
    },
    {
        id: 'dqzw_leitingwanjun',
        name: '雷霆万钧',
        nobuff: true,
        isGlobal: true,
        level: 1,
        intro: '所有角色的判定阶段开始时,其进行一次闪电判定.',
        buffValue: .5
    },
    {
        id: 'dqzw_jiangliurixia',
        name: '江流日下',
        nobuff: true,
        isGlobal: true,
        level: 2,
        intro: '所有角色的手牌上限-3.',
        buffValue: 0
    },
    {
        id: 'dqzw_yishijiaozi',
        name: '倚势骄恣',
        nobuff: true,
        isGlobal: true,
        level: 2,
        intro: '所有友方角色获得技能「骄恣」.',
        buffValue: 1.6
    },
    {
        id: 'dqzw_aozhandaodi',
        name: '鏖战到底',
        level: 2,
        intro: '你可将【桃】当【杀】或【闪】使用或打出.',
        buffValue: .6
    },
    {
        id: 'dqzw_hexinhuiyuan_2',
        name: '核心会员贰',
        level: 2,
        filter: player => player.dqzw_hasBuff('dqzw_hexinhuiyuan_1'),
        intro: '商店刷新次数上限+5.',
        buffValue: 1.8
    },
    {
        id: 'dqzw_haoshenfa',
        name: '好身法',
        level: 2,
        intro: '你的【闪】不计入手牌上限,可于弃牌阶段弃置.',
        buffValue: .8
    },
    {
        id: 'dqzw_huiyuanshangdian_2',
        name: '会员商店贰',
        level: 2,
        filter: player => player.dqzw_hasBuff('dqzw_huiyuanshangdian_1'),
        intro: '每类商品展示数+2.',
        buffValue: .8
    },
    {
        id: 'dqzw_nengshouhuidao',
        name: '能说会道',
        level: 2,
        intro: '购买商品最终所需金币-20%(向下取整).',
        buffValue: 2
    },
    {
        id: 'dqzw_wenhejilue',
        name: '文和计略',
        level: 2,
        intro: '你无法成为延时锦囊牌的目标.',
        buffValue: 1
    },
    {
        id: 'dqzw_nanmizhenxiong',
        name: '难觅真凶',
        nobuff: true,
        isGlobal: true,
        level: 3,
        intro: '所有敌人视为拥有技能【绝情】.',
        buffValue: 1.2
    },
    {
        id: 'dqzw_daodaozhiming',
        nobuff: true,
        isGlobal: true,
        name: '刀刀致命',
        level: 3,
        intro: '所有友方角色视为拥有技能【裸衣】.',
        buffValue: .8
    },
    {
        id: 'dqzw_anzhongtouxi',
        name: '暗中偷袭',
        level: 3,
        intro: '你使用黑色【杀】无次数限制.',
        buffValue: 1.4
    },
    {
        id: 'dqzw_jingjizhijia',
        name: '荆棘之甲',
        level: 3,
        intro: '你受到伤害后,若有则对伤害来源造成等量伤害.',
        buffValue: 1.6
    },
    {
        id: 'dqzw_paiwang',
        name: '牌王',
        level: 3,
        intro: '你使用红色牌后摸一张牌.',
        buffValue: 3
    },
    {
        id: 'dqzw_kuangleibaoyan',
        name: '狂雷爆炎',
        level: 3,
        intro: '你造成的非卡牌伤害+3.',
        buffValue: 2.8
    },
    {
        id: 'dqzw_ligunli',
        name: '利滚利',
        level: 3,
        intro: '一关开始时,获得当前金币数5%的金币(向上取整).',
        buffValue: 3.5
    },
    {
        id: 'dqzw_pianzhuanzhijia',
        name: '偏转之甲',
        level: 3,
        intro: '当你受到伤害后,你对随机一名其他角色造成等量伤害.',
        buffValue: 1
    }
];