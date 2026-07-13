game.import('character', function (lib, game, ui, get, ai, _status) {
    var foreigner = {
        name: 'foreigner',
        connect: true,
        character: {
            haitu_Gabriel: ['male', 'western', 4, ['haitu_guangyi', 'haitu_shouwu'], []],
            haitu_Michael: ['male', 'western', 4, ['haitu_poe', 'haitu_shengyan'], []],
            haitu_Lara: ['female', 'western', 4, ['haitu_duobao', 'haitu_qianying'], []],
            haitu_Lucife: ['male', 'western', 3, ['haitu_aogu', 'haitu_chenxing', 'haitu_duotian'], []],
            haitu_re_caesar: [
                'male',
                'western',
                4,
                ['haitu_ducai', 'haitu_zhengfu'],
                [],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_newton: ['male', 'western', 3, ['haitu_dinglv', 'haitu_qiuzheng'], []],
            haitu_daVinci: ['male', 'western', 3, ['haitu_xuanji', 'haitu_tiangong'], []],
            haitu_Arthur: ['male', 'western', 4, ['haitu_shengjian'], []],
            haitu_Athena: ['female', 'western', 3, ['haitu_shengdun', 'haitu_shenquan'], []],
            haitu_Darwin: ['male', 'western', 3, ['haitu_yanhua', 'haitu_tubian'], []],
            haitu_Lancelot: ['male', 'western', 4, ['haitu_conglong'], []],
            haitu_Copernicus: ['male', 'western', 3, ['haitu_tianxin', 'haitu_yixu'], []],
            haitu_Stalin: ['male', 'haitu_lie', 4, ['haitu_jigong'], []],
            haitu_bobo: ['male', 'haitu_lie', 4, ['haitu_tucheng', 'haitu_jinqu'], []],
            haitu_Hitler: ['male', 'western', 4, ['haitu_Askill', 'haitu_jianli'], []],
            haitu_Kawasaki_Ringtone: ['female', 'key', 3, ['haitu_revolute'], []], //QQQ
            haitu_Kennidy: ['male', 'western', '3/4', ['haitu_zongtong'], []],
            haitu_mummy: ['male', 'haitu_lie', 6, ['haitu_ehou'], []],
            haitu_fmummy: ['female', 'haitu_lie', 6, ['haitu_ehou'], []],
            haitu_Cleopatra: ['female', 'haitu_lie', 3, ['haitu_weishe', 'haitu_naji', 'haitu_Bskill'], []],
            haitu_Dante: ['male', 'western', 3, ['haitu_shenyou'], []],
            haitu_P: ['male', 'key', 3, ['haitu_touwei', 'haitu_hualiao'], []],
            haitu_jerry: ['male', 'western', 4, ['haitu_cefeng', 'haitu_doumao'], []],
            haitu_colorfuldream: ['female', 'western', 3, ['haitu_huazhao'], []], //QQQ
            haitu_Chauvin: ['male', 'western', 4, ['haitu_saohei', 'haitu_chue'], []],
            haitu_afu: ['male', 'western', 4, ['xin_baizhao'], []],
            haitu_Cobb: [
                'male',
                'western',
                3,
                ['haitu_qianmeng', 'haitu_zhimeng', 'haitu_yuting'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_William_Shakespeare: [
                'male',
                'western',
                3,
                ['haitu_juzhu', 'haitu_ruxi'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_Louis_XVI: ['male', 'western', 4, ['haitu_fuquan', 'haitu_neiluan', 'haitu_yinjun'], []],
            haitu_neo: [
                'male',
                'western',
                4,
                ['haitu_yuanjie', 'haitu_rejuzhen'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_Tenpenny: ['male', 'western', 4, ['haitu_xieli'], []],
            haitu_re_angel: ['female', 'western', 3, ['haitu_shouhu', 'haitu_yuhe', 'haitu_guangying'], []],
            haitu_Wade: ['male', 'western', 4, ['haitu_tiaodou', 'haitu_yiwei'], []],
            haitu_legacy: [
                'female',
                'western',
                3,
                ['haitu_suigeng'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_fnaf_cassidy: [
                'female',
                'western',
                3,
                ['haitu_fnaf_changyuan', 'haitu_fnaf_yejing'],
                [],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_fnaf_hell: [
                'none',
                'western',
                3,
                ['haitu_fnaf_yejing', 'haitu_fnaf_qihun', 'haitu_fnaf_jinwu'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_re_hs_malfurion: ['male', 'western', 4, ['haitu_jihuo', 'haitu_chongsheng'], []],
            haitu_White: [
                'female',
                'western',
                3,
                ['haitu_xinghan', 'haitu_shuyou'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_fuemosi: ['male', 'western', 4, ['kongwu', 'fems_yanyi'], []],
            haitu_Kevin: [
                'male',
                'western',
                3,
                ['haitu_liushou', 'haitu_lingqiao'],
                [],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_YS_infochan: ['female', 'key', 3, ['YS_mimou', 'YS_nance', 'YS_qiexi'], []],
            haitu_Kawasaki_Linglong: [
                'female',
                'key',
                3,
                ['haitu_bingxi', 'haitu_yeguang', 'haitu_jieyan'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_Marvel_gwen_stacy: [
                'female',
                'western',
                3,
                ['Marvel_zhugan', 'Marvel_menpiao'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_Marvel_Quicksilver: [
                'male',
                'western',
                4,
                ['Marvel_jisu'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_gta_BigSmoke: ['male', 'western', 5, ['haitu_zhongbao', 'haitu_duxiao'], []],
            haitu_Tony_Stark: ['male', 'western', 4, ['marvel_zhujia', 'haitu_hexin'], []],
            haitu_hesheng: ['male', 'western', 4, ['haitu_shangzhan', 'haitu_lietou'], []],
            haitu_professor: ['male', 'western', 4, ['haitu_lingdao', 'haitu_shencan'], []],
            haitu_re_hs_finley: [
                'male',
                'western',
                3,
                ['re_hs_maoxian', 'mashu', 'feiying'],
                [],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_Michael_Afton: [
                'male',
                'western',
                3,
                ['haitu_fnaf_jiexin', 'haitu_ranxin', 'fnaf_canchuan'],
                ['clan:阿夫顿'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_re_hs_sthrall: ['male', 'western', 4, ['haitu_tuteng', 'haitu_guozai', 'haitu_zuling'], []],
            haitu_re_hs_yashaji: ['male', 'haitu_hua', 4, ['re_qisha', 'haitu_jian'], []],
            haitu_re_hs_jaina: [
                'female',
                'western',
                3,
                ['re_aoshu', 're_bingjia'],
                [],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            'haitu_Stephen Strange': ['male', 'western', 3, ['haitu_yuekong', 'haitu_aoyi'], []],
            haitu_rainCandy: [
                'female',
                'key',
                3,
                ['haitu_olyuji', 'haitu_olfanpu', 'haitu_liaoyu'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_chaotianjiang: ['female', 'key', 3, ['haitu_olyuji', 'haitu_olfanpu', 'haitu_liaoyu'], []],
            haitu_fnaf_Wiliam_Afton: ['male', 'western', 3, ['haitu_fnaf_duohai', 'haitu_fnaf_juantu', 'fnaf_canchuan'], ['clan:阿夫顿']],
            haitu_regulus: [
                'female',
                'western',
                3,
                ['haitu_erru', 'haitu_muran', 'haitu_zaodong'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_verting: [
                'female',
                'western',
                3,
                ['haitu_re_xiangting', 'haitu_re_tiaolv'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_Nyarlathotep: ['none', 'shen', 3, ['haitu_hundun', 'haitu_zhuluan'], ['western'], []],
            haitu_Military: ['female', 'western', 4, ['haitu_diaobing', 'haitu_camo'], []],
            haitu_Sulindchia: ['female', 'western', 3, ['haitu_jieduan', 'xin_lianxin'], []],
            haitu_Zlvini: [
                'female',
                'western',
                3,
                ['haitu_yangliu', 'haitu_dongchao'],
                ['western'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_saity: ['female', 'western', 3, ['haitu_shiyan', 'haitu_guance'], []],
            haitu_fnaf_Evan_afton: ['male', 'western', '3/5', ['haitu_fnaf_huayan', 'haitu_fnaf_yingsu', 'fnaf_canchuan'], ['clan:阿夫顿']],
            haitu_kingpin: ['male', 'western', 5, ['haitu_weishan', 'haitu_tiewan'], []],
            haitu_MaxWell: ['male', 'western', 4, ['haitu_yishi', 'haitu_diangong'], ['clan:天工田氏']],
            haitu_tom: ['male', 'western', 4, ['tom_jueci', 'tom_yemao', 'tom_buzhe'], []],
            haitu_Elizabeth_afton: [
                'female',
                'western',
                3,
                ['fnaf_yichong', 'fnaf_wanghuo', 'fnaf_canchuan'],
                ['clan:阿夫顿'],
                {
                    skinDirs: ['extension/海国图志/skin/standard/'],
                    drawer: '无名氏',
                    skinLevel: 2,
                    videos: [],
                },
            ],
            haitu_fnaf_vannessa: ['female', 'western', 4, ['haitu_rebenghai'], []],
            haitu_GwenDolyn: ['female', 'western', 3, ['haitu_shanchou', 'haitu_shuxiu', 'haitu_diangong'], ['clan:天工田氏']],
            haitu_PeterParker: ['male', 'western', 4, ['haitu_Marvel_caosi', 'haitu_Marvel_ganying'], []],
            haitu_daylightdream: ['female', 'western', 3, ['haitu_huimeng', 'haitu_rongrong', 'haitu_wantong'], []],
        },
        characterSort: {
            foreigner: {
                haitu_history: ['haitu_Stalin', 'haitu_bobo', 'haitu_Hitler', 'haitu_Kennidy', 'haitu_Dante', 'haitu_William_Shakespeare', 'haitu_Louis_XVI'],
                fnaf: ['haitu_fnaf_cassidy', 'haitu_fnaf_hell', 'haitu_Michael_Afton', 'haitu_Elizabeth_afton', 'haitu_fnaf_vannessa', 'haitu_fnaf_Evan_afton', 'haitu_fnaf_Gregory'],
                ben10: ['haitu_MaxWell', 'haitu_GwenDolyn'],
                comedy: ['haitu_Cleopatra', 'haitu_Chauvin', 'haitu_happinessking', 'haitu_fuemosi', 'haitu_afu'],
                Marvel: ['haitu_Wade', 'haitu_Marvel_gwen_stacy', 'haitu_Marvel_Quicksilver', 'haitu_kingpin', 'haitu_Rogan', 'haitu_PeterParker', 'haitu_Stephen Strange', 'haitu_professor', 'haitu_Tony_Stark'],
                movie: ['haitu_Lara', 'haitu_tom', 'haitu_jerry', 'haitu_neo', 'haitu_Kevin', 'haitu_Cobb', 'haitu_tom'],
                game: ['haitu_Lylia', 'haitu_P', 'haitu_chaotianjiang', 'haitu_verting', 'haitu_regulus', 'haitu_gta_BigSmoke', 'haitu_rainCandy', 'haitu_YS_infochan', 'haitu_Tenpenny'],
                origin: ['haitu_colorfuldream', 'haitu_legacy', 'haitu_White', 'haitu_Kawasaki_Linglong', 'haitu_hesheng', 'haitu_daylightdream', 'haitu_Sulindchia', 'haitu_Zlvini', 'haitu_Military', 'haitu_saity'],
                ex: ['haitu_Gabriel', 'haitu_Michael', 'haitu_Lucife', 'haitu_newton', 'haitu_Athena', 'haitu_daVinci', 'haitu_Copernicus', 'haitu_Lancelot', 'haitu_Arthur', 'haitu_Darwin', 'haitu_re_angel', 'haitu_re_caesar', 'haitu_re_hs_malfurion', 'haitu_re_hs_jaina', 'haitu_re_hs_yashaji', 'haitu_re_hs_sthrall', 'haitu_re_hs_finley', 'haitu_re_hs_finley'],
            },
        },
        characterReplace: {
            haitu_re_hs_yashaji: ['he_yashaji', 'haitu_re_hs_yashaji'],
            haitu_Sulindchia: ['bjsulinqiya', 'haitu_Sulindchia'],
            haitu_re_hs_sthrall: ['hs_sthrall', 'haitu_re_hs_sthrall'],
            haitu_re_hs_jaina: ['hs_jaina', 'haitu_re_hs_jaina'],
            haitu_re_hs_finley: ['hs_finley', 'haitu_re_hs_finley'],
        },//QQQ
        characterTitle: {
            haitu_Gabriel: '素翼灼戈',
            haitu_Lara: '古墓猎人',
            haitu_Tony_Stark: '钢铁侠',
            haitu_Arthur: '真红之龙',
            haitu_professor: 'X教授',
            haitu_daVinci: '天智行空',
            haitu_rainCandy: '主播女孩',
            haitu_Darwin: '物竞天择',
            haitu_fnaf_Gregory: '蓝衣恶魔',
            haitu_afu: '黑虎',
            haitu_verting: '离群者',
            haitu_Nyarlathotep: '伏行之混沌',
            haitu_PeterParker: '蜘蛛侠',
            haitu_neo: '救世主',
            haitu_Lancelot: '湖畔骑士',
            haitu_Copernicus: '圣熠何周 ',
            haitu_Athena: '怀智坚盾',
            haitu_Lucife: '玄曜相染',
            haitu_Michael: '赤柄决逆',
        },
        characterIntro: {
            haitu_Lara: '劳拉·克劳馥(Lara Croft)是一位虚构的探险家和考古学家,最初出现在英国公司Core Design开发的动作冒险视频游戏<古墓丽影>(Tomb Raider)系列中.自从1996年首次出现在游戏中以来,劳拉已成为<古墓丽影>系列的代表角色,并在游戏、电影、漫画和小说等多媒体领域中拥有广泛的知名度.在<古墓丽影>游戏系列中,劳拉·克劳馥以其机智、勇敢和适应性强的特点著称,她经常探索世界各地的古老遗迹和秘密地点,解开历史之谜,并与各种危险的环境和敌人作斗争.劳拉·克劳馥的形象通常与她的标志性装备——两条马尾辫、一身紧身战斗服和双枪——相联系. 除了在游戏领域的成就外,劳拉·克劳馥的角色也被改编成电影,由安吉丽娜·朱莉(Angelina Jolie)饰演,该电影在全球范围内获得了巨大的商业成功,并进一步扩大了这个角色的影响力.随着<古墓丽影>系列的不断更新,劳拉·克劳馥的形象也在不断进化,但她的核心特质和冒险精神始终贯穿于整个系列之中',
            haitu_Chauvin: '涉嫌跪杀非洲裔男子乔治·弗洛伊德的前警察,地狱笑话吧常客',
            haitu_Lucife: '路西法(英文:Lucifer, 拉丁文:Lucifer,意大利文:Lucifero)是一个宗教传说的人物.路西法是堕落前的撒旦(Satan). 堕落为撒旦的路西法将会被永远毁灭.<br>感谢B站up主Saint_Ey的设计',
            haitu_daVinci: '列奥纳多·达·芬奇(意大利语:Leonardo da Vinci,儒略历1452年4月15日[公历4月23日]－1519年5月2日),意大利文艺复兴时期画家、自然科学家、工程师,与米开朗基罗、拉斐尔并称<文艺复兴后三杰>(又称<美术三杰>).达·芬奇生于托斯卡纳的芬奇镇,在少年时已显露艺术天赋.约1470年进入韦罗基奥工作室学习,逐步成长为具有科学素养的画家、雕刻家.同时是军事工程师和建筑师.后受到美第奇家族的资助,在1472年成为画师,并加入行会.1482年应聘到米兰公国后,在贵族宫廷中进行创作和研究活动.1513年起漂泊于罗马和佛罗伦萨等地.1516年侨居法国,受法王弗朗索瓦一世礼遇.1519年在法国昂布瓦斯病逝.达·芬奇思想深邃,学识渊博,是人类历史上少见的全才,被现代学者称为<文艺复兴时期最完美的代表>.他最大的成就在绘画领域,其绘画把科学知识和艺术想象有机地结合起来,使当时绘画的表现水平发展到一个新阶段.绘画理论方面,他把解剖、透视、明暗和构图等零碎的知识,整理成为系统的理论,对欧洲绘画的发展影响很大;在地质学、物理学、生物学和生理学等方面,他提出了不少创造性见解;在军事、水利、土木、机械工程等方面,都有重要的设想和发现.其代表作有<岩间圣母><最后的晚餐><蒙娜丽莎><圣母子与圣安娜><自画像>等.另著有<绘画论>及有大量的草图速写及有关自然科学工程等的手稿存世.<br>感谢B站up主Saint_Ey的设计',
            haitu_Arthur: '亚瑟·潘德拉贡(Arthur Pendragon),又译阿瑟·潘德拉贡,通称亚瑟王(King Arthur),是传说中的古不列颠最富有传奇色彩的伟大国王.人们对他的认识更多来自凯尔特神话传说和中世纪的野史文献.传说他是圆桌骑士的首领,一位近乎神话般的传奇人物,被称为<永恒之王>(the Once and Future King).流传的亚瑟王传说,石中剑、圣杯传奇、梅林、桂妮维亚、摩根勒菲等等,大多是出自<不列颠诸王史>以及托马斯·马洛礼的奇幻小说<亚瑟王之死>.<br>感谢B站up主Saint_Ey的设计                        ',
            haitu_Copernicus: '文艺复兴时期波兰天文学家、数学家、教会法博士、神父.在哥白尼40岁时,他提出了日心说,改变了人类对自然对自身的看法.当时罗马天主教廷认为他的日心说违反<圣经>,哥白尼仍坚信日心说,并认为日心说与其并无矛盾,并经过长年的观察和计算完成他的伟大著作<天球运行论>.1533年,60岁的哥白尼在罗马做了一系列的讲演,临近古稀之年才终于决定将它出版,但直到临终前才收到出版商寄来的一部他写的书.1543年5月24日,哥白尼去世,享年70岁.哥白尼的<日心说>更正了人们的宇宙观.哥白尼是欧洲文艺复兴时期的一位巨人.哥白尼成年的大部分时间是在费劳恩译格大教堂任职当一名教士.哥白尼并不是一位职业的天文学家.哥白尼遗骨于2010年5月22日在波兰弗龙堡大教堂重新下葬.<br>感谢B站up主Saint_Ey的设计',
            haitu_William_Shakespeare: '威廉·莎士比亚(英语:William Shakespeare,1564年4月23日—1616年4月23日),英国文艺复兴时期剧作家、诗人.被誉为<人类文学奥林匹斯山上的宙斯>.1564年4月23日,出生于英国沃里克郡斯特拉福镇.1571年—1579年,进入斯特拉福文法学校读书.1587年,开始演员生涯,并开始尝试写剧本.1591年,创作的戏剧<亨利六世中篇><亨利六世下篇>首演.1592年,创作的戏剧<理查三世>首演.1595年,创作的戏剧<罗密欧与朱丽叶><仲夏夜之梦>首演.1596年,创作的戏剧<威尼斯商人>首演. 1601年,创作的戏剧<哈姆雷特>首演,引起文坛关注.1603年,创作的戏剧<奥赛罗>首演.1605年,创作的戏剧<李尔王>首演.1606年,创作的戏剧<麦克白>首演.1614年,离开伦敦,返回故乡.1616年4月23日,在故乡去世 ',
            haitu_Louis_XVI: '路易十六(法语:Louis XVI;1754年8月23日-1793年1月21日),原名路易·奥古斯特,法兰西波旁王朝第五位国王,路易十五之孙,王太子路易·斐迪南第三子,路易十八和查理十世的同母兄,法兰西波旁王朝复辟前最后一任国王,他既是法国历史上唯一被执行死刑的国王,也是欧洲历史中第二位被执行死刑的国王.(感谢<大爱仙尊>的设计与授权)',
            haitu_neo: '尼奥(Neo),是<黑客帝国>系列电影中的主角,初次登场于<黑客帝国1>,真名为托马斯·安德森(Thomas A. Anderson),身为矩阵(母体)中的<救世主>促成了机器与人类之间的和平',
            haitu_Tenpenny: '弗兰克.汤普尼,男,一位出现在Rockstar公司制作的动作射击游戏<侠盗猎车手:圣安地列斯>中的头号反派,身份是洛圣都(影射现实中的洛杉矶)警察局反街头暴力部门(C.R.A.S.H.)的头目,是一位重度瘾君子.游戏中与波兰裔腐败警官爱德华·<埃迪>普拉斯基和被迫入伙的墨西哥裔警官詹姆斯·<吉米>赫尔南德斯把持C.R.A.S.H.,他们对街头非法帮派分子(巴拉斯帮和维戈斯墨西哥帮)进行敲诈、利用,试图以此改善治安,同时谋取大量非法利益,最终却导致城市一片混乱,自己遭到格罗夫家族的卡尔·<CJ>约翰逊和肖恩·斯威特约翰逊的追杀,驾驶消防车坠桥,重伤而死.不过,汤普尼在剧情中也有人因为个性鲜明而得到很多玩家喜爱.汤普尼为人阴险狡诈,手段十分狠毒,经常通过杀人灭口的方式逃避制裁.最后死有余辜. 汤普尼在死前对主角卡尔说,<我才是正确的>.其实很耐人寻味,汤普尼身为警察却用罪犯对付罪犯的方式来管辖治安,(也就是以暴制暴)治安的确得到了一定的改善,但是因此而积累了很深的帮派矛盾和民怨,牺牲了许多本不该牺牲的无辜人士,导致最终矛盾爆发,洛圣都陷入一片混乱之中',
            haitu_re_angel: '作为所有伤者的守护天使,安吉拉·齐格勒博士是一名顶尖的治疗者、出色的科学家和坚定的和平主义者. 齐格勒在踏入可以极大改善致命疾病和损伤治疗效果的突破性应用纳米生物学领域之前,是瑞士一家顶尖医院的手术部门负责人.正是她在医学领域的成就,引起了守望先锋的注意.由于齐格勒的双亲都被战争夺走了生命,因此她从一开始就极其反对该组织通过军事手段进行维和.但最终,她意识到守望先锋给她提供了一个可以拯救更多人生命的机会.作为守望先锋医学研究部门的负责人,安吉拉致力于更好地在前线治疗受到致命伤的病员.<女武神>快速反应作战服因此诞生,齐格勒也穿着这套作战服参加了许多守望先锋的任务.尽管她对守望先锋做出了巨大的贡献,但齐格勒博士经常质疑她的上司以及守望先锋的长远目标.而当守望先锋解散之后,齐格勒博士便致力于帮助那些受战争波及的受难者. 尽管她大部分时间都在全球各地帮助那些流离失所、无依无靠的难民,但当无辜人民遇到危险时,齐格勒博士依然会穿着她的<女武神>作战服挺身而出',
            haitu_Wade: '死侍(Deadpool)是美国漫威漫画旗下反英雄,初次登场于<新变种人>(New Mutants)第98期 (1991年2月).本名韦德·温斯顿·威尔逊(Wade Winston Wilson),原本是一名加拿大的特种兵,为了治愈身患绝症的自己而参加X武器(Weapon X)计划,虽然在被注入了金刚狼的基因后癌症得以痊愈,但也因此造成脑细胞过度增长,人开始变得癫狂.加上再生能力与癌细胞互相排斥,导致面部毁容,身体布满疤痕. 因被宇宙五大创世神明中的死亡爱慕而被灭霸诅咒成不死之身,后与灭霸联手救出死亡女神收回了诅咒.他使得一手双刀,双枪,拥有远超于金刚狼的自愈能力,还有一个可以令自身瞬间移动的腰带',
            haitu_legacy: '咕咕咕咕咕.....',
            haitu_Lancelot: '兰斯洛特即郎世乐,亚瑟传奇里亚瑟王领导的圆桌骑士中的传奇人物.勇敢强大且乐于助人,是亚瑟王最伟大的圆桌骑士之一,也是亚瑟王的养父爱克托骑士的哥哥.相传他是由湖之仙女抚养长大,因此也被称为<湖上骑士>.他是亚瑟王忠心而得力的骑士,但他和亚瑟王的王后桂妮维亚之间的恋情最终还是导致了圆桌的崩溃.<br>感谢B站up主Saint_Ey的设计                        ',
            haitu_Darwin: '查尔斯·罗伯特·达尔文(Charles Robert Darwin,1809年2月12日—1882年4月19日),英国生物学家,进化论的奠基人.曾经乘坐贝格尔号舰作了历时5年的环球航行,对动植物和地质结构等进行了大量的观察和采集.出版<物种起源>,提出了生物进化论学说,从而摧毁了各种唯心的神造论以及物种不变论.除了生物学外,他的理论对人类学、心理学、哲学的发展都有不容忽视的影响.恩格斯将<进化论>列为19世纪自然科学的三大发现之一(其他两个是细胞学说、能量守恒转化定律),对人类有杰出的贡献.1882年4月19日,达尔文在达温宅逝世,享年73岁,葬于威斯敏斯特大教堂.<br>感谢B站up主Saint_Ey的设计',
            haitu_Athena: '也称帕拉斯·雅典娜,是希腊神话中的智慧女神和战争女神以及艺术女神,奥林匹斯十二主神之一.古希腊文献所述雅典娜是一位端庄貌美的年轻女神,她从人类诞生起就常驻凡间,教会人类各种生存知识,为人类创造了初始的生存工具.雅典娜是艺术女神、手工艺的保护神,她传授人类纺织、烹饪、园艺、陶艺等工艺;绘画、音乐、诗歌、舞蹈等艺术.密教祷歌称她为<创始艺术的>.同时她还是军事、农业、医疗、航海、畜牧的保护神;法庭与秩序的女神.她创立了雅典的第一法庭.雅典娜渴望独立、坚持不婚,与阿尔忒弥斯、赫斯提亚被视为奥林匹斯山上的三处女神.她是少女未婚时期的保护神,亦是妇女劳动和生育的保护神,希腊妇女亲切地称她为<厄耳伽妮(Ἐργάνη,意为女工)>.雅典娜是宙斯和智慧女神墨提斯的女儿.盖亚和乌拉诺斯预言,墨提斯未来的孩子都聪明且强大,她生下明眸女儿后,会再生一个推翻宙斯的儿子.宙斯惧怕子女所带来麻烦,于是趁墨提斯还怀着雅典娜时,便将母女俩吞入腹中.此后宙斯头痛欲裂,只好要求火神赫菲斯托斯(或普罗米修斯或赫尔墨斯)劈开他的头颅,刚举起斧头,令诸神惊讶的是,一位体态婀娜、披坚执锐的美丽女神,竟冲破宙斯的头颅一跃而出.雅典娜的形象特征是:作战时戴盔冠,上身裙覆蛇甲,右手持矛或胜利女神,左手拿金流苏的埃吉斯. <br> 感谢B站up主Saint_Ey的设计',
            haitu_White: '白某是一个身材娇小但充满活力的少女,她的家庭位于阿拉斯加的一片宁静森林中,那里被大自然的美丽所包围.白某从小就对自然界和神秘的事物充满了浓厚兴趣,这也促使她成为了一位热衷于冒险小说和幻想故事的书虫.她的外表与她的神秘白发相得益彰,白发像银色的月光一样,每当她走进图书馆或森林时,白发随着风轻轻飘动,仿佛拥有自己的生命一样.她的眼睛深邃明亮,总是透露出对未知世界的好奇与探索欲望.白某的冒险小说<北极>成为了畅销书,故事讲述了三国时期一群美少女以北极为中心建立基地,在全球展开探险的经历,充满神秘和魔法元素.这本小说也反映了她对大自然和神秘事物的深刻理解,以及她的创造力.在她的闲暇时间,白某热衷于在当地的图书馆打工,与书籍为伴.她帮助整理书架,回答读者的问题,同时也可以在安静的环境中专注地阅读和写作.艺术来源于生活,<北极>的精彩离不开白某的神奇经历:在一次偶然的遭遇中,白某了解了星星的奥秘.白某可以通过占星术来联系北斗七星,利用它们的能量将她书中的非生命体和法术变为现实.然而,这个能力充满随机性,因此每次施展都会带来不可预测的结果,有时会让她身处奇幻冒险,有时则可能会引发令人意想不到的事件,使她不得不面对各种挑战和奇遇.这个能力也成为了她创作冒险小说的灵感之源,不断丰富着她的故事世界',
            haitu_fnaf_hell: "黄金弗莱迪是经典恐怖游戏<玩具熊的五夜后宫>(Five Nights at Freddy's)里的机器人之一,　他是弗莱迪的金色版本,是被游戏中反派威廉 阿夫顿击杀的孩童,即复仇之灵.在威廉被迈克烧死后,创造了一个电子地狱将其灵魂困住,和其他孩童鬼魂永世折磨威廉",
            haitu_Kawasaki_Linglong: '川崎玲珑出生于一个普通的日本家庭,自小就表现出对射击的浓厚兴趣.然而,她的家庭并不富裕,无法提供她接受专业训练的机会.于是,玲珑靠着自己的毅力和决心,通过自学不断练习和提高自己的射击技巧. 在成长过程中,玲珑的性格逐渐变得坚韧而独立.她不再满足于仅仅成为一个优秀的狙击手,而是开始接触更广阔的世界,试图找到自己的目标和价值.在经过许多次的尝试和失败后,她终于被一家佣兵公司发掘,成为了其旗下的狙击手. 在这个新的舞台上,川崎玲珑开始了她的传奇生涯.她以其精湛的狙击技巧和敏锐的观察力,一次次完成艰难的任务,逐渐成为了公司最顶尖的狙击手之一.然而,在她的心中,还有着更大的追求.她希望用自己的力量,保护那些弱小而无辜的人们,让世界变得更加美好.在一次执行任务的过程中,玲珑发现自己卷入了一场复杂的政治斗争.她不再只是一个简单的狙击手,而是成为了一个决定众多人生死的关键人物.在这种情况下,玲珑不得不考虑更多的东西,包括自己的信仰和道义. 在潜伏与狙击过程中,玲珑的心理发生了巨大的变化.她开始感受到孤独和无助,因为她必须隐藏自己的身份和真实意图,在图书馆打工,同时也要时刻保持警惕,防止被人发现.然而,正是这种孤独和无助,使她的内心变得更加坚定和敏锐.她用自己的智慧和勇气,一次次为图书馆化解了危机.  ',
            haitu_re_hs_malfurion: '森林之王塞纳留斯的祝福令玛法里奥·怒风成为了德鲁伊的象征. 在德鲁伊的守护神、半神塞纳留斯的指引下,可敬的玛法里奥·怒风千年以来一直保护着暗夜精灵不受恶魔侵扰.在上古之战中,玛法里奥与其他英雄一起,为了保护艾泽拉斯的所有生命,抵抗过可怕的燃烧军团,这其中就有他未来的恋人泰兰德·语风和他的弟弟伊利丹.在战胜恶魔之后,他又努力带领暗夜精灵离开被燃烧军团摧毁的故土,在海加尔山附近重建家园,并监督着世界之树,诺达希尔的生长.守护巨龙伊瑟拉将诺达希尔与翡翠梦境连接起来——那是一个没有战争,也不受凡俗众生影响的、艾泽拉斯的倒影——并允许所有的德鲁伊,包括玛法里奥进入这个国度.玛法里奥和其他德鲁伊就在这片梦境中探索了数百年之久.在第三次大战中,泰兰德唤醒了玛法里奥,请他再次协助抵抗燃烧军团.在苏醒之后,他与自己的宿敌,试图从内部腐蚀翡翠梦境的萨特萨维斯进行了激战.在大灾变中,死亡之翼大肆破坏世界并激起了元素的愤怒.玛法里奥毅然离开暗夜精灵主城达纳苏斯,并召集他的德鲁伊同伴再次拯救艾泽拉斯,并组成了特别部队,阻止了邪恶的炎魔拉格纳罗斯的入侵.随着灭世者的死亡,彻底觉醒的玛法里奥与泰兰德终于团聚并一同支持联盟的行动.  ',
            haitu_chaotianjiang: '超绝最可爱天使酱(超天酱),是<主播女孩重度依赖>中的角色. 是<雨>于网络的虚拟身份.无论是在网络上还是在现实中,超天酱都是公认的高颜值女孩,引起众多人的羡慕与嫉妒.白净的皮肤,柔顺的黑发,澄澈的眼睛,再加上那有料的身材,正是众多人所求的理想外表.直播状态时,自称<超绝最可爱天使酱>,简称<超天酱>.是网络天使,雨开直播时的变装.装作性格乖巧的样子.动不动就会做出讨好阿宅们的行为因此经常被喷媚宅.直播时的开始语是<小天使请安(ジェルばんは)>,结束语是<†升天†>.游戏中由于像素画风缘故,也像是「↑升天↑」.        ',
            haitu_fuemosi: '夏洛克·福尔摩斯,或译为歇洛克·福尔摩斯,男,英国小说<血字的研究>及其衍生作品中的男主角.19世纪末20世纪初,也就是英国维多利亚时期著名顾问侦探.私家咨询侦探(很多侦探和警长常常会去请教他,自称为侦探的最高裁决机关)',
            haitu_Kevin: '电影<小鬼当家>主角,一年一度的圣诞节时,全家忙着外出欢度圣诞假期,不料忙中出错,凯文被独自留在家里,难得一个人在家,凯文将家里布置成了<游乐场>. 两个刚出狱的窃贼将目光瞄向了凯文家.当他们鬼鬼祟祟的踏入凯文家时,凯文凭借自己的醒目和家里的<游乐场机关>,和两个笨贼玩起了<游戏>,最终将窃贼绳之以法',
            haitu_fnaf_cassidy: 'fnaf中的一个角色,威廉阿夫顿第一次大开杀戒时击杀的五个孩子之一 ,对威廉怨念深重,死后灵魂附身在黄金弗莱迪身上,永世追杀威廉,她甚至为威廉打造了一个电子监狱,令威廉在其中永受煎熬',
            haitu_Marvel_gwen_stacy: '蜘蛛格温(Spider Gwen),美国漫威漫画旗下的超级英雄,由杰森·拉图尔(Jason Latour)和罗比·罗德里格斯(Robbi Rodriguez)联合创作. 格温·史黛西被受过放射性感染的蜘蛛咬伤后,成为名叫<蜘蛛女侠>的超级英雄.平行宇宙Earth-65中,格温·斯黛西被受过放射性感染的蜘蛛咬伤后,成为一个名叫<女蜘蛛侠>的超级英雄.(感谢天任大佬贡献的设计)  ',
            haitu_Marvel_Quicksilver: '快银(Quicksilver)是美国漫威漫画旗下超级英雄,初次登场于<X战警>(Uncanny X-men)第4期(1964年3月),由编剧斯坦·李和画家杰克·科比联合创造.本名皮特罗·姜戈·马克西莫夫(Pietro Django Maximoff),具有高速移动的能力,身体能适应高速移动的严酷环境.他的心血管和呼吸系统比正常人的效率高很多倍.他的起源故事版本众多,漫画中最新剧情是由吉普赛人姜戈和玛丽所生,小时候和双胞胎姐姐绯红女巫(比快银早出生30秒,此为漫画原作设定)一起被高进化者(High Evolutionary)绑架,当做实验对象,从而获得了高速思考与高速移动的能力,后来二人被骗,听信了自己是万磁王的孩子,母亲抛弃了他们,接生的牛头女士把他们交给了吉普赛人夫妇的这个说法.还和姐姐共同加入万磁王领导的变种人兄弟会.后得知真相改邪归正,加入复仇者联盟. 在漫威电影宇宙中改编为是绯红女巫的双胞胎哥哥,比绯红女巫早出生12分钟,因与妹妹参与九头蛇组织的秘密试验而被洛基权杖上的心灵宝石强化了自身的超能力,后来加入复仇者联盟的队伍共同对抗奥创',
            haitu_gta_BigSmoke: '梅尔文·哈瑞斯(Melvin Harris),其绰号为大斯莫克(Big Smoke)GTA三部曲最终版译为大烟哥 ,是游戏<Grand Theft Auto:San Andreas>的角色,出生于洛圣都,他与斯威特、卡尔的关系很好,后来他加入了格洛夫帮派,在之后成为了帮派里的高级干部.随着格洛夫帮在CJ出走之后日益衰落,加上毒品对社区的侵蚀,斯莫克也开始动摇了,劝说CJ的兄长斯威特学习敌对的巴勒斯帮,从事贩毒以维持帮派活动,被厌恶毒品的斯威特拒绝,于是斯莫克与斯威特的关系恶化(<汽车餐厅>任务开场动画中,斯莫克就与斯威特对帮派发展方向起了争执).斯莫克伙同另一位帮派成员——<瘾君子>莱德尔,与巴拉斯帮、洛圣都腐败警察汤普尼等人勾结,在帮战中试图害死斯威特和主人公CJ.斯威特中弹被捕,CJ被腐败警察汤普尼驱逐出洛圣都.此后,斯莫克与巴勒斯帮合作,建立制毒工厂,垄断毒品交易,取得了大量不义之财,还成为了格洛夫街上当红说唱歌星OG LOC的经纪人. 最后,斯莫克被CJ在制毒工厂消灭.弥留之际,斯莫克向CJ承认他被金钱迷惑,已无法挽回,死时手里还攥着一沓钱',
            haitu_Tony_Stark: '托尼·斯塔克(Tony Stark,1970.5.29—2023.10)即钢铁侠(Iron Man),全名安东尼·爱德华·托尼·斯塔克(Anthony Edward ‘Tony’ Stark),是漫威电影宇宙的超级英雄兼主要角色之一,由美国演员小罗伯特·唐尼饰演.1970年,托尼·斯塔克出生在美国纽约长岛.14岁时,托尼·斯塔克进入MIT学院,遇到了最好的朋友詹姆斯·罗德斯,后继承遇害的父亲霍华德·斯塔克的公司成为史塔克工业的董事长.不久被父亲的同僚奥巴代亚·斯坦尼暗算,在中东展示武器时被恐怖分子<十戒帮>绑架.在那里与科学家侯·伊森一起,制造了方舟反应堆和一套攻守兼备的钢铁装甲杀出重围.回国后,托尼成为<钢铁侠>,对抗反派的同时也参与创立了复仇者联盟.托尼·斯塔克随复仇者联盟征战多年,多次对抗超级反派.于2012年对抗洛基、2015年对抗奥创、2018年及2023年对抗灭霸.2023年,托尼·斯塔克在与灭霸及其齐塔瑞军团对抗中牺牲,其财产由妻子小辣椒·波兹和蜘蛛侠彼得·帕克继承. ',
            haitu_hesheng: '出生在繁华的商业大国,利益之城.出生在商业世家,自小便被教育要用冷酷无情的手段来获取权力和利益.使他在成长过程中积累了丰富的商业经验和独特的世故眼光.他建立并运营着A城市中最大的企业集团,经济和政治影响力极大,在社会地位上高人一等.阴险狡诈,冷酷无情,重视功利,极尽可能地利用他人以获取权力和利益.滑腻而善于伪装,善于使用甜言蜜语引人上钩.在别人看不见的地方会展露出真实的恶劣性格.他不相信善良,只相信力量和金钱,认为所有的人和事都可以用金钱衡量和控制.他热衷于权力游戏,喜欢制造纷争并由此获取利益.对于他人的痛苦,他表现出一种病态的享受.  野心勃勃的他有着超凡的政治智谋和商业眼光,以及操控他人的能力',
            haitu_Emily_Sanchez: '出身于考古学家家庭,父母都是知名的考古学家.在国际考古学界享有盛誉,被认为是年轻一代的领军人物',
            haitu_professor: 'X教授(professor X)是美国漫威漫画旗下的超级英雄,初次登场于<X战警>(X-Men)第1期(1963年9月).本名查尔斯·弗朗西斯·泽维尔(Charles Francis Xavier),出生在美国纽约的一个富豪家庭里,拥有心灵感应和精神控制的能力,16岁就从哈佛大学毕业,也上过牛津大学和哥伦比亚大学,在生物学、心理学等方面拿到多个博士学位.X教授多年来一直致力于人类与变种人的和平与平衡,因此利用自己强大的财力,创办了引导变种人合理利用自身超能力为社会做贡献的学校<X学院>,并组建了变种人超级英雄团队X战警,其成员大部分都是他的学生,后来X教授又参与创立了光照会',
            haitu_re_hs_finley: '鱼人种族庞大遍布艾泽拉斯,与巨魔种族一样古老大部分魔兽玩家忘记不了 被鱼人支配的恐惧,刷新快.跑得快.视野远.很容易引到,数量多而且还有减速加血驱散远程等技能,生性凶残喜欢群殴!大部分鱼人对其他种族是非常敌视的!这源自于狩猎鱼人通常是有利可图的,鱼人的鳍做成汤是非常美味的佳肴,粘乎乎的鱼人鳞片可以被技术纯熟的工匠做成精美的皮甲.鱼人们就像许多水生生物一样,会携带着各种各样的蚌壳和珍珠.另外,部落联盟经常重金悬赏鱼人,这要归结于他们对于海岸贸易和鱼点的严重威胁.但有这么一只鱼人除外,它绅士博学而且还是一名爵士!它就是芬利·莫格顿爵士.芬利是炉石的一名原创角色,随后反哺加入的魔兽世界,在芬利还是一个鱼蛋的时候便被恶魔猎手职业英雄阿兰娜的姐姐数不多的戴着一副眼镜的暗夜精灵伊莉斯·逐星捡到,当时伊莉斯在成为探险者协会的一员之前曾从事德鲁伊幼教工作(妥妥的铁饭碗),芬利便是她教导处来的高质量鱼人,芬利爵士可以说在鱼人历史中属于以为绝无仅有的存在,身为一个鱼人竟然可以和玩家交流!你要明白联盟和部落的通用语不一样,对立阵营的玩家甚至不能直接聊天,但是这个鱼人的任务两个阵营应该都能做, 也就意味着它会说两个阵营的语言!还穿着短裤戴着探险帽背着登山包,还会进行华丽的冒险!在鱼人的族群里面,某智者,某先知,某领军都只会哇啦哇啦发出喷痰的声音,光着屁股满地跑!芬利出生之后直接就加入了探险者协会,学到了很多知识并且学会了14门 语言.',
            haitu_Michael_Afton: 'fnaf系列的主角之一,威廉 阿夫顿之子,被派去释放妹妹伊丽莎白·阿夫顿的灵魂,却反被手足残害,通过残骸幸存下来 ,变得不人不鬼,在得知了父亲的邪恶勾当后穷尽一生寻找阿夫顿并阻止其罪恶行径,在两次火烧披萨店后与威廉和其他被灵魂附体的玩偶同归于尽.',
            haitu_re_hs_jaina: '戴林·普罗德摩尔之女. 在吉安娜成年早期,她致力于阻止将引发第三次战争的天灾瘟疫传播,当战况加剧后,吉安娜获得了新部落大酋长萨尔的信任,成为团结艾泽拉斯各族携手对抗燃烧军团的关键人物.当战争结束后,吉安娜管理着塞拉摩岛,致力于促进部落与联盟间的关系.吉安娜的和平立场与性格在接任萨尔成为部落大酋长的加尔鲁什·地狱咆哮以一颗魔法炸弹夷平塞拉摩后改变了.身为肯瑞托的新领袖,她拥有让加尔鲁什为他酿成的惨剧付出血的代价的权力与决心.',
            haitu_re_hs_sthrall: '<萨尔>是兽人古伊尔年轻时候的绰号,他的父母因反对古尔丹被杀,人类中士埃德拉斯·布莱克摩尔发现了襁褓中的他,并计划将他培育成自己野心计划的重要棋子;而萨尔,正是奴隶之意.古伊尔摆脱控制后踏上寻根之旅,最后从先祖的萨满信仰中寻得了智慧.他重整了部落,成为大酋长并领导他的人民在贫瘠之地上定居.萨尔领导部落通过了一连串的试炼,当死亡之翼重返人间并撕裂世界,萨尔从部落大酋长的位置退下,加入了大地之环这个强大的萨满组织,企图平息元素并阻止灭世者.萨尔选择加尔鲁什·地狱咆哮做为继任者,然而这个决定一直困扰着他,因为新任大酋长却把部落带上了内乱的歧途.',
            haitu_rainCandy: '日常状态时,叫做糖糖,看上去老实文静,实际却很任性,容易得意忘形,是一个迫切想要得到他人认可的女孩.性格恶劣,很容易发飙. 直播状态时,自称<超绝最可爱天使酱>,简称<超天酱>.是网络天使,糖糖开直播时的变装.装作性格乖巧的样子.动不动就会做出讨好阿宅们的行为因此经常被喷媚宅.直播时的开始语是<小天使请安(ジェルばんは)>,结束语是<†升天†>.游戏中由于像素画风缘故,也像是「↑升天↑」',
            haitu_Nyarlathotep: '奈亚拉托提普(Nyarlathotep)是美国小说家霍华德·菲利普·洛夫克拉夫特所创造的克苏鲁神话中的一位外神,被称作<伏行之混沌>.奈亚拉托提普是以阿撒托斯为首的外神们的使者兼代行者,他常常化作人形在地球上行走,通常表现为一个有着深色皮肤、身材瘦削,模样看起来像是古埃及法老的人.奈亚拉托提普总是热衷于欺骗、诱惑人类,并以使人类陷入恐怖与绝望到最终精神失常为其最高的喜悦.在克苏鲁神话中,他的形象最接近于传统<恶魔>的概念.在罗伯特·A·布洛克(Robert Albert Bloch)的短篇小说<来自尖塔的阴影>(The Shadow from the Steeple)中,甚至暗示是奈亚拉托提普唆使人类造出了核武器',
            haitu_Rogan: '即金刚狼,于十九世纪时期的1832年出生在加拿大的阿尔伯塔省,罗根(Logan)是其生父的姓.自从儿时发现自己的生父击杀自己的养父后,罗根的变种人能力便开始显现出来,他拥有延缓衰老和再生能力,双手还可以伸出利爪.后来被威廉·史崔克抓走,并对其实施X武器计划、骨骼被注入艾德曼合金,手上的骨爪被无坚不摧的钢爪所取代.这使得罗根正式成为金刚狼(Wolverine),之后他加入了X战警和复仇者联盟等超级英雄团队',
            haitu_Maxwell: '田马克,动画<少年骇客>系列及衍生作品中的主要角色.田小班和田小玟的爷爷.虽然年事已高却身手了得,头脑聪明,每做一件事都经深思熟虑.经常发明武器,帮助小班,喜欢带着他们冒险和吃奇异食物(小班更希望可以带他走传统公路旅行).初次登场为第1集.以前受过军方训练,经常分享他的艰难生活兼指导田小班成为出色英雄,但都是经过多次意外后,才被小班和小玟注意,追问之下马克爷爷才稍微透漏自己曾经是执行各式各样特殊任务的<水电工>',
            haitu_GwenDolyn: '动画<少年骇客>系列及衍生作品中的主要角色.与田小班同龄的堂姐妹,连生日都在同一天.初次登场为第1集.优点是对做每件事情都有完善计划,特别是田小班对付敌人的方式.拥有轻便电脑,可以测看人事物及介绍Omnitrix的用途.另外对外太空和地球的各种科技都了如指掌,而且拿手于空手道,身手非凡,后期会使用魔法,曾经和邪咒魔女互换身体,还得到了邪咒魔女身上的一本魔法书,还曾拥有过魔法吊坠.现有魔咒秘籍和一些魔法物品,在未来的时空中已经成为魔女并且掌握了许多种魔法邪术咒语,会修炼超自然的强大力量,整体变化多端甚至还可以操纵任何异次元中的元素,具有改变一切事物的魔力,不亚于田小班的外星超能力',
            haitu_Elizabeth_afton: "伊丽莎白·阿夫顿(Elizabeth Afton)是由Scott Cawthon所创作的游戏<Five Nights at Freddy's>及其衍生作品的登场角色,是游戏中反派威廉·阿夫顿的女儿,被暗示是威廉唯一关心的人,备受宠爱,后因不听从威廉警告接触其制造的杀人玩偶Circus Baby死亡,灵魂附身在Baby体内.然而,威廉知道她附身在Circus Baby上,却付了钱让技术人员无限期地电击她.在这种情况下,他与伊丽莎白的关系可能不像看上去那么真实.可能他认为电击Baby可以让伊丽莎白的灵魂离开Baby(划掉).  ",
            haitu_fnaf_vannessa: "Scott Cawthon所创作的游戏<Five Nights at Freddy's>及其衍生作品的登场角色,登场于fnaf9,是披萨娱乐城的夜班保安总管,然而却受到威廉精神控制,植入病毒使商场内机械玩偶变成杀人狂,制造了多起失踪案,后被主角击杀/拯救",
            haitu_tom: '米高梅电影公司制作的经典动画片<猫和老鼠>中的主角之一,70年代老动画中的著名卡通明星角色.他与小老鼠杰瑞(Jerry)之间可称得上是一对欢喜冤家,二者亦敌亦友,有时互相捣乱,有时互相帮助,有时争论不休,有时团结和谐.他每天忙碌于捉住同住在一起的杰瑞,但总是不如意,总在被耍,憨傻得可爱.生活中充满幽默搞笑,同时也具有抒情与伤情的一幕;主人通常都为两只鞋太太.另外,他也爱慕漂亮的千金母猫图多盖洛.有时还被其他成员欺负,如斯派克(Spike)、布奇、莱特宁、托普斯等.是个喜剧而又活在悲剧的角色',
            haitu_daylightdream: '只是个经常罢工的人形印牌机而已,无需知晓特别多.....',
            haitu_Zlvini: '代表北极附近海洋意志的海神,虽贵为神明却受到海洋封冻的限制,但是一旦汛期来到,她便会赐淳朴的因纽特居民以祝福,亦或操纵巨浪吞食走私盗猎者.(原创角色,灵感源于<北极>扩展包同名角色)',
            haitu_Military: 'M国一位名不见经传的指挥官,治军有方,但是在情急之下也会采用火力全开或者人海之类的战术',
            haitu_fnaf_Gregory: "Scott Cawthon所创作的游戏<Five Nights at Freddy's>及其衍生作品的登场角色,是一个来路不明的男孩子,在午夜迷失在披萨大都会中并遭遇了杀手兔凡妮和黑化玩偶的袭击,在华丽摇滚弗莱迪的帮助下以及利用商场地形的不断周旋,格雷高里成功拆毁了黑化的玩偶",
            haitu_Sulindchia: '苏琳奇亚是教会最忠诚的骑士,她恪守戒律,将自己的前半生都奉献在了这里.一直以来,她都认为教会和神是是圣洁的,可某一天突然撞见自己的导师们用教会的领徽进行邪恶的仪式,妄图召唤出恐怖的魔神来满足自己征服的欲望.这一刻,苏琳奇亚心中的信仰崩塌了.面对导师召唤出来的魔神,这一次神没有出现.绝望的人和恶徒们的战斗使得教会最终崩溃瓦解,哪怕她是培养多年的骑士,也付出了失去所有教友和弑师的代价,才阻止了这一切.身伤易愈,心伤难愈.从此教会里少了一个圣骑士,而墓园附近的枫林里却出现了一位终日思索的神秘游侠.(原创角色,灵感源于<北极>扩展包同名角色)',
            haitu_verting: '<重返未来:1999>的主角,人类与神秘学家共存的世界中,唯一不受雨水侵袭之人. 作为外界时间的记录者——<司辰>,她在时代轮转中梭巡,结识失落的神秘学家.而后,带领他们……逃离<暴雨>',
            haitu_PeterParker: '美国的一名普通学生,毕业后成为<号角日报>的摄影师兼记者.生性内向腼腆却善良且正义勇为,由于意外被一只受过放射性感染的蜘蛛咬到,因此获得了和蜘蛛一样的超能力,具有强大的耐力、敏捷的反应和速度,并发明了蛛网发射器,从此化身蜘蛛侠守卫纽约.   (感谢<天将降大任于我>的设计和<吃朵棉花糖>大佬的代码支持)',
            haitu_fnaf_Evan_afton: "Scott Cawthon所创作的游戏<Five Nights at Freddy's>及其衍生作品的登场角色,是游戏中反派威廉·阿夫顿的第三子,在自己的生日派对上因兄弟及其损友的恶作剧被弹簧玩偶咬掉脑前叶,在医院昏迷将近一周后不治而亡,死后灵魂依附在系列中的金熊身上",
            haitu_afu: '阿福,美国动画<成龙历险记>及其衍生作品中的角色.原黑手帮的成员之一,是黑手组织头目瓦龙继特鲁之后雇用的新手下.一个高大威猛的壮汉,其不仅身强体壮,而且武艺精湛、战力强大,外号<黑虎>.生性好勇斗狠、彪悍粗野,有很多中二且奇怪的招数名称.曾经被黑气巫师刀龙变成黑暗杀手之一的<山>;也带上过黑影兵团的面具.最终洗心革面,与正派合作共同打败恶魔小龙',
            haitu_Stephen_Strange: '奇异博士(Doctor Strange)是美国漫威漫画旗下的超级英雄,初次登场于<奇异故事>(Strange Tales)第110期 (1963年7月),由斯坦·李和史蒂夫·迪特科联合创造.本名史蒂芬·斯特兰奇(Stephen Strange),原本是一名优秀的神经外科医生,因一次车祸导致其双手再也无法使用手术刀正常工作,为了治好自己的双手史蒂芬寻遍世界各国名医都徒劳无果,绝望的他只能来到喜马拉雅山上拜访传说中的魔法师古一(Ancient One),却被古一看中,收其为徒,传授他如何运用精神和咒语施展魔法,在学习魔法的过程中,史蒂芬的双手也逐渐回复,出师后的他化身奇异博士守卫世界,在师父古一阵亡后接替其位置,成为至尊魔法师,还加入了复仇者联盟',
            haitu_kingpin: '美国漫威漫画旗下超级反派,初次登场于<神奇蜘蛛侠>(Amazing Spider-Man)第50期(1967年7月),本名威尔逊·格兰特·菲斯克(Wilson Grant Fisk),是夜魔侠(Daredevil)的头号死敌,以及蜘蛛侠(Spider-Man)与惩罚者(The Punisher)等英雄的死敌,也是纽约乃至全美国最大的黑社会头目.他心思缜密,智慧远超于常人,全身百分之九十以上都是肌肉,力量惊人,能徒手打穿一面墙,而且自身也是一个世界顶级的格斗高手,和惩罚者同样拥有人类战斗力的最高水平.此外,他的手杖还可以发射激光和烟雾,令对手防不胜防,在黑道中人称金并(Kingpin),就是<主脑人物>的意思,其黑道网络遍布全球,经常与破坏他>生意<的夜魔侠、惩罚者、蜘蛛侠等超级英雄交手,甚至连神奇四侠和X战警也不放过',
            haitu_newton: '艾萨克·牛顿(1643年1月4日—1727年3月31日),爵士,英国皇家学会会长,英国著名的物理学家、数学家,百科全书式的<全才>,著有<自然哲学的数学原理><光学>.他在1687年发表的论文<自然定律>里,对万有引力和三大运动定律进行了描述.这些描述奠定了此后三个世纪里物理世界的科学观点,并成为了现代工程学的基础.他通过论证开普勒行星运动定律与他的引力理论间的一致性,展示了地面物体与天体的运动都遵循着相同的自然定律;为太阳中心说提供了强有力的理论支持,并推动了科学革命.在力学上,牛顿阐明了动量和角动量守恒的原理,提出牛顿运动定律 .在光学上,他发明了反射望远镜,并基于对三棱镜将白光发散成可见光谱的观察,发展出了颜色理论.他还系统地表述了冷却定律,并研究了音速.在数学上,牛顿与戈特弗里德·威廉·莱布尼茨分享了发展出微积分学的荣誉.他也证明了广义二项式定理,提出了<牛顿法>以趋近函数的零点,并为幂级数的研究作出了贡献. 在经济学上,牛顿提出金本位制度.<br>感谢B站up主Saint_Ey的设计',
            haitu_Cobb: '电影<盗梦空间>的主角.多姆·柯布(莱昂纳多·迪卡普里奥饰)是个一个经验老到的窃贼.在人们精神最为脆弱的时候,他潜入别人梦中,窃取潜意识中有价值的信息和秘密.在一次任务中,柯布和他的同伴亚瑟(约瑟夫·高登·莱维特饰),因柯布的潜意识——柯布的亡妻梅尔(玛丽昂·歌迪亚饰)的阻挠,未能成功窃取雇主所需要的资料,从而面临着两天之内被杀的危险.为了保命,他们的另外一个同伴把他们出卖给了之前他们窃取梦境的对象——斋藤(渡边谦饰),斋藤找到柯布和亚瑟,希望他们能够为自己服务,也就是找到全球垄断巨头的儿子费舍尔(希里安•墨菲饰),在费舍尔的头脑中植入遣散公司的意念,从而消灭自己的竞争对手,如果成功,将带他回国.由于柯布迫切地想回家见自己的孩子,他答应了斋藤的请求,找到了<伪装者>埃姆斯、<药剂师>尤素福、<造梦师>阿里阿德涅.买下了整个航空公司,让费舍尔的私人飞机故障检修,在费舍尔飞往洛杉矶的途中实施了这个计划. 柯布等一行六人将费舍尔带入了事先造好的梦境,对费舍尔进行意念的培养,然而费舍尔先前曾受过防止在梦中被袭击的专业训练,于是在第一层梦境中,他们收到费舍尔潜意识保卫队的猛烈攻击,斋藤受伤.但最后,成功地将遣散公司的意念植入费舍尔脑中,化解了费舍尔与其父亲的矛盾.在这中间,柯布又受到了爱妻梅尔的阻挠,但柯布最终战胜了自己,摆脱了自己头脑中亡妻幻影的迷惑,并找到了迷失的斋藤',
            haitu_Michael: "米迦勒,又名弥额尔(希伯来语:מִיכָאֵל Micha'el或Mîkhā’ēl‎;拉丁语:Michael或Míchaël)<圣经>提到的天使名字,神所指定的伊甸园守护者,也是唯一提到的具有天使长头衔的灵体.米迦勒这个名字的意思是<与神相似>.据<圣经>记载,与撒旦的七日战争中,米迦勒奋力维护神的统治权,对抗神的对手,最终将其击败.在基督教的绘画与雕塑中,米迦勒经常以金色长发、手持红色十字架(或红色十字形剑)与巨龙搏斗,立于龙身上或与龙成为朋友的少年形象出现,这里的巨龙就是撒旦.<br>感谢B站up主Saint_Ey的设计",
            haitu_Gabriel: '加百列(嘉百列)本为炽天使,作为天使长,在天堂位于重要的守护职位,担任整个天界的警戒工作,传信为其职能之一.传说末日审判的号角就是由他吹响的.他被认为象征<智慧>.<br>感谢B站up主Saint_Ey的设计',
        },
        skill: {
            haituname: { supercharlotte: true },
            haitu_drive: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                name: '出行',
                filter(event, player) {
                    return player.getEquip(3) || player.getEquip(4) || player.getEquip(6);
                },
                content() {
                    'step 0';
                    player.removeSkill('');
                    var list = [];
                    list.push('披萨大都会');
                },
            },
            haitu_haitu_PizzaPlex: {
                getState(player, skill) {
                    var skills = player.getSkills(null, false, false).filter(function (i) {
                        var info = get.info(i);
                        return info.PizzaPlex;
                    });
                    if (skills.length) {
                        return 'fun';
                    } else {
                        return 'boring';
                    }
                },
                mod: {
                    targetEnabled(card, player, target) {
                        var state1 = lib.skill.haitu_haitu_PizzaPlex.getState(player, true);
                        if (lib.skill.haitu_haitu_PizzaPlex.getState(target, true) != state1) return false;
                    },
                    cardSavable(card, player, target) {
                        var state1 = lib.skill.haitu_haitu_PizzaPlex.getState(player, true);
                        if (lib.skill.haitu_haitu_PizzaPlex.getState(target, true) != state1) return false;
                    },
                },
            },
            haitushiqu: {
                trigger: {
                    player: 'loseAfter',
                    global: 'loseAsyncAfter',
                },
                filter(event, player) {
                    var evt = event.parent,
                        evt2 = event.getl(player);
                    return evt && evt2 && evt.player == player && evt2.cards2 && evt2.cards2.length;
                },
                fixed: true,
                charlotte: true,
                group: 'haitushiqu_clear',
                subSkill: {
                    clear: {
                        charlotte: true,
                        forced: true,
                        silent: true,
                        trigger: {
                            global: ['phaseZhunbeiEnd', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd', 'phaseJieshuEnd'],
                        },
                        content() {
                            player.getStat('skill').haitushiqu = 0;
                        },
                        popup: false,
                    },
                },
                silent: true,
                forced: true,
                content() {
                    player.getStat('skill').haitushiqu += trigger.getl(player).cards2.length;
                },
                popup: false,
            },
            haitu_liaodamage: {
                silent: true,
                popup: false,
                forced: true,
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return event.nature == 'haitu_liao' && event.num > 0;
                },
                content() {
                    event.num1 = 2 * trigger.num;
                    player.recover(event.num1);
                },
            },
            haitu_moshudamage: {
                silent: true,
                popup: false,
                forced: true,
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    if (event.name === 'damage') {
                        if (!event.player) return false;
                        if (!event.source) return false;
                        var friends = player.getFriends().concat(player);
                        return friends.includes(event.source) && event.nature == 'haitu_moshu' && event.num > 0;
                    }
                },
                content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    ('step 1');
                    event.num--;
                    player.getBuff();
                    ('step 2');
                    if (event.num > 0) {
                        event.goto(1);
                    }
                },
            },
            haitu_moshudamage1: {
                silent: true,
                popup: false,
                forced: true,
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    if (event.name === 'damage') {
                        if (!event.player) return false;
                        if (!event.source) return false;
                        var friends = player.getFriends().concat(player);
                        return player.getEnemies().includes(event.source) && event.nature == 'haitu_moshu' && event.num > 0;
                    }
                },
                content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    ('step 1');
                    event.num--;
                    player.getDebuff(trigger.num);
                    ('step 2');
                    if (event.num > 0) {
                        event.goto(1);
                    }
                },
            },
            haitu_jibiandamage: {
                silent: true,
                popup: false,
                forced: true,
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return event.nature == 'haitu_jibian' && event.num > 0;
                },
                content() {
                    'step 0';
                    player.addSkill('haitu_jibiandamage_mark');
                    player.addMark('haitu_jibiandamage_mark');
                },
                subSkill: {
                    mark: {
                        mark: true,
                        intro: {
                            name2: '畸',
                            content: 'mark',
                        },
                        trigger: {
                            player: 'damageBegin3',
                        },
                        silent: true,
                        forced: true,
                        popup: false,
                        filter(event, player) {
                            return event.nature && event.num > 0;
                        },
                        content() {
                            'step 0';
                            trigger.num += player.countMark('haitu_jibiandamage_mark');
                        },
                        marktext: '畸',
                        charlotte: true,
                    },
                },
                haitu_mabidamage: {
                    silent: true,
                    popup: false,
                    forced: true,
                    trigger: {
                        player: 'damageEnd',
                    },
                    filter(event, player) {
                        return event.nature == 'haitu_mabi' && event.num > 0;
                    },
                    content() {
                        player.addTempSkill('haitu_mabidamage_snap');
                    },
                    subSkill: {
                        snap: {
                            mark: true,
                            charlotte: true,
                            mod: {
                                cardEnabled2(card) {
                                    return false;
                                },
                                cardEnabled(card, player) {
                                    return false;
                                },
                                cardUsable(card, player) {
                                    return false;
                                },
                                cardrespondable(card, player) {
                                    return false;
                                },
                                cardSavable(card, player) {
                                    return false;
                                },
                                targetInRange(card) {
                                    return false;
                                },
                            },
                            intro: {
                                name2: '麻',
                                content: '已经被麻痹.当前回合内,你不能使用或打出牌',
                            },
                        },
                    },
                },
            },
            xin_guaiwuzhizao: {
                subSkill: {
                    use: {
                        content() {
                            'step 0';
                            if (event.created) return;
                            event.created = true;
                            if (event.isMine()) {
                                var node = ui.create.div('.add_skill');
                                event.node = node;
                                event.node.style.width = '400px';
                                event.node.style.height = '30px';
                                event.node.style.lineHeight = '30px';
                                event.node.style.fontFamily = 'xinwei';
                                event.node.style.fontSize = '30px';
                                event.node.style.padding = '10px';
                                event.node.style.left = 'calc(50% - 200px)';
                                event.node.style.top = 'calc(50% - 20px)';
                                event.node.style.whiteSpace = 'nowrap';
                                event.node.innerHTML = '请在此输入技能名称';
                                event.node.contentEditable = true;
                                event.node.style.webkitUserSelect = 'text';
                                event.node.style.textAlign = 'center';
                                var skillName = function (e) {
                                    'step 0';
                                    var skills = [];
                                    var skills1 = [];
                                    var list = [];
                                    var name = event.node.innerText;
                                    event.num = 0;
                                    for (var i in lib.skill) {
                                        var info = get.translation(i, 'info');
                                        {
                                            var name = event.node.innerText;
                                            if (get.translation(i) != name) continue;
                                        }
                                        if (event.target.hasSkill(i)) continue;
                                        if (!get.translation(i, 'info') || get.translation(i + '_info').length === 0) continue;
                                        if (get.translation(i + '_info').length === 0) continue;
                                        if (get.translation(i, 'info') && get.translation(i + '_info').length != 0) {
                                            skills.add(i);
                                            skills1.add(i);
                                            list.add(i);
                                            event.num += 1;
                                        }
                                    }
                                    list.add('haitu_cancel');
                                    if (event.num <= 0) {
                                        var name = event.node.innerText;
                                        alert(name.length == 0 || name == '请在此输入技能名称' ? '请先输入技能名称' : name + '不是一个有效的技能,请重新输入');
                                        //ui.clear();
                                        event.node.innerHTML = '';
                                        return;
                                    }
                                    if (event.num != 0) {
                                        event.num = 0;
                                        ui.window.removeChild(event.node);
                                        ui.window.removeChild(text);
                                        ui.window.removeChild(button);
                                        if (event.isMine() && list != []) {
                                            var dialog = ui.create.dialog('forcebutton');
                                            dialog.add('选择令' + get.translation(event.target) + '获得一项技能', false);
                                            var clickItem = function () {
                                                _status.event._result = this.link;
                                                dialog.close();
                                                game.resume();
                                            };
                                            for (var i = 0; i < list.length; i++) {
                                                if (lib.translate[list[i] + '_info']) {
                                                    var translation = get.translation(list[i]);
                                                    if (translation[0] == '新' && translation.length == 3) {
                                                        translation = translation.slice(1, 3);
                                                    } else {
                                                        translation = translation.slice(0, 2);
                                                    }
                                                    var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                                                    item.firstChild.addEventListener('click', clickItem);
                                                    item.firstChild.link = list[i];
                                                }
                                            }
                                            dialog.add(ui.create.div('.placeholder'));
                                            event.switchToAuto = function () {
                                                event._result = event.skillai();
                                                dialog.close();
                                                game.resume();
                                            };
                                            _status.imchoosing = true;
                                            game.pause();
                                        } else {
                                            event._result = event.skillai();
                                        }
                                        //ui.clear();
                                        return;
                                    } else {
                                        var name = event.node.innerText;
                                        alert(name.length == 0 || name == '请在此输入技能名称' ? '请先输入技能名称' : name + '不是一个有效的技能,请重新输入');
                                        //ui.clear();
                                        event.node.innerHTML = '';
                                        return;
                                    }
                                };
                                ui.window.appendChild(event.node);
                                event.node.onfocus = function () {
                                    event.node.innerHTML = '';
                                };
                                event.node.onkeydown = function (e) {
                                    e.stopPropagation();
                                    if (e.keyCode == 13) {
                                        skillName();
                                        setTimeout(function () {
                                            event.node.innerHTML = '';
                                        }, 10);
                                    }
                                };
                                var text = ui.create.div();
                                text.style.width = '400px';
                                text.style.height = '30px';
                                text.style.lineHeight = '30px';
                                text.style.fontFamily = 'xinwei';
                                text.style.fontSize = '30px';
                                text.style.padding = '10px';
                                text.style.left = 'calc(50% - 200px)';
                                text.style.top = 'calc(50% - 80px)';
                                text.innerText = '请宣言一个技能名称';
                                text.style.textAlign = 'center';
                                ui.window.appendChild(text);
                                var button = ui.create.div('.menubutton.highlight.large', '确定', skillName);
                                button.style.width = '70px';
                                button.style.left = 'calc(50% - 35px)';
                                button.style.top = 'calc(50% + 60px)';
                                ui.window.appendChild(button);
                                for (var i in lib.element.event) {
                                    event.parent[i] = lib.element.event[i];
                                }
                                event.parent.custom = {
                                    add: {},
                                    replace: {},
                                };
                                game.pause();
                            } else {
                                event.finish();
                            }
                            ('step 1');
                            {
                                _status.imchoosing = false;
                                var link = result;
                                {
                                    target.addTempSkill(link, 'roundStart');
                                    player.popup(link);
                                    game.log(player, '声明了【' + get.translation(link) + '】');
                                }
                            }
                            game.log(event.target, '获得了【' + get.translation(link) + '】');
                        },
                    },
                },
                enable: 'phaseUse',
                usable: 1,
                content() {
                    'step 0';
                    player
                        .chooseTarget('请选择增加技能的角色', true, function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return 10 + get.attitude(player, target);
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets[0];
                        if (lib.config.mode == 'guozhan' && event.target.isUnseen()) {
                            player
                                .chooseControl('主将', '副将', function () {
                                    return Math.floor(Math.random() * 2);
                                })
                                .set('prompt', '选择要明置的武将牌');
                        } else {
                            event.goto(3);
                        }
                    }
                    ('step 2');
                    if (result.index == 0) {
                        event.target.showCharacter(0);
                    } else {
                        event.target.showCharacter(1);
                    }
                    ('step 3');
                    var next = game.createEvent('guaiwuzhizao');
                    next.player = game.me;
                    next.target = event.target;
                    next.setContent(lib.skill.xin_guaiwuzhizao_use.content);
                },
            },
            haitu_yinengdamage: {
                silent: true,
                popup: false,
                forced: true,
                trigger: {
                    player: 'damageBegin3',
                },
                filter(event, player) {
                    return event.nature == 'haitu_yineng' && event.num > 0;
                },
                content() {
                    var list = [];
                    if (!_status.characterskill) {
                        _status.characterskill = [];
                        for (var i in lib.character) {
                            if (Array.isArray(lib.character[i][3])) _status.characterskill.addArray(lib.character[i][3]);
                        }
                    }
                    for (var i in lib.skill) {
                        if (!get.translation(i, 'info') || get.translation(i + '_info').length === 0) continue;
                        if (_status.characterskill.includes(i)) list.add(i);
                    }
                    var num = player.getSkills(true, false).length;
                    for (var i = 0; i < player.getSkills(true, false).length; i++) {
                        if (!list.includes(player.getSkills(true, false)[i])) num--;
                    }
                    var skills = list.randomGets(trigger.num);
                    if (skills.length) {
                        for (var i of skills) player.addSkill(i);
                    } else player.chat('没有合适的技能可以获得!');
                },
            },
            haitu_guangdamage: {
                silent: true,
                popup: false,
                forced: true,
                trigger: {
                    player: 'damageBegin3',
                },
                filter(event, player) {
                    return event.nature == 'haitu_guang' && event.num > 0;
                },
                content() {
                    var num1 = player.hujia;
                    trigger.num += num1;
                },
                subSkill: {
                    blocker: {
                        init(player, skill) {
                            player.addSkillBlocker(skill);
                        },
                        onremove(player, skill) {
                            player.removeSkillBlocker(skill);
                        },
                        charlotte: true,
                        ai: {
                            unequip1: true,
                            unequip2: true,
                            unequip3: true,
                            unequip4: true,
                            unequip5: true,
                            unequip: true,
                        },
                        skillBlocker(skill, player) {
                            return lib.skill[skill].equipSkill && !lib.skill[skill].charlotte;
                        },
                        mark: true,
                        intro: {
                            content(storage, player, skill) {
                                return '所有装备技能失效';
                            },
                        },
                    },
                },
            },
            haitu_cancel: {
                init(player) {
                    player.removeSkill('haitu_cancel');
                    var a = window.setInterval(function () {
                        if (player.hasSkill('haitu_cancel')) {
                            player.removeSkill('haitu_cancel');
                            window.clearInterval(a);
                        }
                    }, 1000);
                },
            },
            haitu_tianjia: {
                mark: true,
                fixed: true,
                marktext: '添',
                charlotte: true,
                intro: {
                    mark(dialog, content, player) {
                        if (player.isUnderControl(true)) {
                            if (_status.gameStarted) {
                                dialog.add(
                                    ui.create.div('.menubutton.pointerdiv', '点击发动', function () {
                                        if (!this.disabled) {
                                            this.disabled = true;
                                            this.classList.add('disabled');
                                            this.style.opacity = 0.5;
                                            lib.skill.haitu_tianjia.clickable(player);
                                        }
                                    })
                                );
                            }
                        }
                    },
                },
                clickable(dialog, content, player) {
                    {
                        game.createEvent('taofa', false).setContent(function () {
                            var next = game.createEvent('taofa');
                            next.player = game.me;
                            next.target = target;
                            next.setContent(lib.skill.xin_guaiwuzhizao.content);
                        }).player = game.me;
                    }
                    if (_status.imchoosing) {
                        delete _status.event._cardChoice;
                        delete _status.event._targetChoice;
                        game.check();
                    }
                },
            },
            haitu_qiuzheng: {
                round: 1,
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                subSkill: {
                    move: {
                        forced: true,
                        charlotte: true,
                        silent: true,
                        trigger: {
                            player: 'phaseAfter',
                        },
                        mark: true,
                        marktext: '证',
                        intro: {
                            content(num, player, storage) {
                                var str = '求证成功,可进行额外回合.';
                                return str;
                            },
                        },
                        content() {
                            player.phase('nodelay');
                            player.removeSkill('haitu_qiuzheng_move');
                        },
                    },
                    end: {
                        forced: true,
                        charlotte: true,
                        silent: true,
                        trigger: {
                            player: 'phaseDrawEnd',
                        },
                        content() {
                            'step 0';
                            var hs = player.getCards('h');
                            player.showCards(hs, get.translation(player) + '开始求证');
                            ('step 1');
                            var list = lib.suit;
                            event.num = 0;
                            for (var i of lib.suit) {
                                if (
                                    player.countCards('h', function (card) {
                                        return card.suit == i;
                                    })
                                ) {
                                    event.num += 1;
                                }
                            }
                            if (event.num > 0) {
                                player.update();
                                {
                                    player.chooseToDiscard('请弃置花色不同的牌', 'h', true, event.num, function (card) {
                                        return !ui.selected.cards.some((cardx) => cardx.suit == card.suit);
                                    });
                                    player.update();
                                }
                            }
                            ('step 2');
                            if (event.num >= 4) {
                                player.addSkill('haitu_qiuzheng_move');
                            }
                            player.removeSkill('haitu_qiuzheng_end');
                        },
                    },
                },
                forced: true,
                content() {
                    trigger.num += 4;
                    player.addTempSkill('haitu_qiuzheng_end');
                },
            },
            haitu_duobao: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(player, card, target) {
                    if (target == player) return false;
                    return target.countCards('he') > 0;
                },
                content() {
                    'step 0';
                    var num = player.countCards('h');
                    player.gain(lib.card.ying.getYing(num), 'gain2');
                    player.update();
                    ('step 1');
                    var num = target.countGainableCards(player, 'he');
                    player.gainPlayerCard(target, [1, num], 'he', true);
                    ('step 2');
                    if (result.links?.length) {
                        event.num = result.links.length;
                        player.update();
                        target.gainPlayerCard(player, event.num, 'he', true);
                    }
                },
                ai: {
                    order(skill, player) {
                        return 10;
                    },
                    result: {
                        target(player, target) {
                            var num = target.countGainableCards(player, 'h');
                            return -num;
                        },
                    },
                },
            },
            haitu_tiangong: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget('请选择弃置一名角色场上一张牌', function (card, player, target) {
                            return target.countCards('ej') > 0;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            var att = get.attitude(player, target);
                            if (att > 0) {
                                var js = target.getCards('j');
                                if (js.length) {
                                    var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                    if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                        return 2 * att;
                                    }
                                }
                                if (target.getEquip('baiyin') && target.isDamaged() && get.recoverEffect(target, player, player) > 0) {
                                    if (target.hp == 1 && !target.hujia) return 1.6 * att;
                                    if (target.hp == 2) return 0.01 * att;
                                    return 0;
                                }
                            }
                            var es = target.getCards('e');
                            var noe = target.hasSkillTag('noe');
                            var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                            if (noe || noe2) return 0;
                            if (att <= 0 && !es.length) return 1.5 * att;
                            return -1.5 * att;
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets[0];
                        event.target.addExpose(0.1);
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (event.target) {
                        {
                            player.choosePlayerCard('ej', true, event.target);
                        }
                    }
                    ('step 3');
                    if (result.cards?.length) {
                        var card = result.cards[0];
                        player.discard(card);
                        player.draw();
                        event.target.draw();
                    } else event.finish();
                },
            },
            haitu_aogu: {
                trigger: {
                    player: 'damageEnd',
                    source: 'damageSource',
                },
                filter(event, player) {
                    if (player.countCards('he') <= 0) return false;
                    return game.hasPlayer(function (current) {
                        return current.countCards('e');
                    });
                },
                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget('请选择一名有装备的角色', function (card, player, target) {
                            return target.countCards('e') > 0;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            var att = get.attitude(player, target);
                            if (att > 0) {
                                var js = target.getCards('j');
                                if (js.length) {
                                    var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                    if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                        return 2 * att;
                                    }
                                }
                                if (target.getEquip('baiyin') && target.isDamaged() && get.recoverEffect(target, player, player) > 0) {
                                    if (target.hp == 1 && !target.hujia) return 1.6 * att;
                                    if (target.hp == 2) return 0.01 * att;
                                    return 0;
                                }
                            }
                            var es = target.getCards('e');
                            var noe = target.hasSkillTag('noe');
                            var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                            if (noe || noe2) return 0;
                            if (att <= 0 && !es.length) return 1.5 * att;
                            return -1.5 * att;
                        });
                    ('step 1');
                    if (result.bool) {
                        player.chooseToDiscard(1, 'he', true);
                        event.target = result.targets[0];
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (event.target) {
                        {
                            player.choosePlayerCard('e', true, event.target);
                        }
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (result.cards?.length) {
                        var card = result.cards[0];
                        player.equip(card);
                    }
                },
            },
            haitu_dinglv: {
                trigger: {
                    player: 'phaseBegin',
                },
                subSkill: {
                    lost: {
                        init(player, skill) {
                            player.addSkillBlocker(skill);
                        },
                        onremove(player, skill) {
                            player.removeSkillBlocker(skill);
                        },
                        charlotte: true,
                        skillBlocker(skill, player) {
                            if (lib.skill[skill].charlotte) return false;
                            if (!lib.translate[skill]) return false;
                            if (lib.translate[skill] == '') return false;
                            if (!lib.translate[skill + '_info']) return false;
                            if (lib.translate[skill + '_info'] == '') return false;
                            return true;
                        },
                        mark: true,
                        marktext: '失效',
                        intro: {
                            name: '科学世界',
                            content(storage, player, skill) {
                                var list = player.getSkills(null, false, false).filter(function (i) {
                                    return lib.skill.haitu_dinglv_lost.skillBlocker(i, player);
                                });
                                if (list.length) return '无名杀世界的技能在此处失效<li>失效技能:' + get.translation(list);
                                return '无名杀世界的技能在此处失效<li>无失效技能';
                            },
                        },
                    },
                },
                firstDo: true,
                forced: true,
                content() {
                    game.countPlayer(function (current) {
                        if (current != player) {
                            {
                                current.addTempSkill('haitu_dinglv_lost');
                            }
                        }
                    });
                },
            },
            haitu_conglong: {
                trigger: {
                    global: 'useCardToTargeted',
                },
                filter(event, player) {
                    if (event.target == player) return false;
                    if (!player.inRange(event.target)) return false;
                    return event.card.name == 'sha';
                },
                check(event, player) {
                    return get.attitude(player, event.target) < 0;
                },
                content() {
                    'step 0';
                    player.discardPlayerCard(trigger.target, get.prompt('haitu_conglong', trigger.target)).set('ai', function (button) {
                        if (!_status.event.att) return 0;
                        if (get.position(button.link) == 'e') {
                            if (get.subtype(button.link) == 'equip2') return 2 * get.value(button.link);
                            return get.value(button.link);
                        }
                        return 1;
                    });
                    ('step 1');
                    if (result.links?.length) {
                        if (get.type(result.links[0]) == 'equip') {
                            event.suit = result.links[0].suit;
                        } else {
                            event.finish();
                        }
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    player
                        .chooseToDiscard('弃置一张为' + get.translation(event.suit) + '的牌或失去1点体力', function (card) {
                            return card.suit == event.suit;
                        })
                        .set('ai', function (card) {
                            {
                                return 7 - get.value(card);
                            }
                        });
                    ('step 3');
                    if (result.bool) {
                    } else {
                        player.loseHp();
                    }
                },
            },
            haitu_ranxin: {
                usable: 1,
                enable: 'phaseUse',
                filterCard(card) {
                    if (ui.selected.cards.length) {
                        return card.suit == ui.selected.cards[0].suit;
                    }
                    return true;
                },
                viewAs: {
                    name: 'huogong',
                },
                group: 'haitu_ranxin_fire',
                subSkill: {
                    fire: {
                        filter(event, player) {
                            return event.nature == 'fire';
                        },
                        trigger: {
                            source: 'damageSource',
                        },
                        content() {
                            delete player.getStat().skill.haitu_ranxin;
                            game.log(player, '重置了', '#g【燃衅】');
                        },
                        forced: true,
                        silent: true,
                        charlotte: true,
                        popup: false,
                        _priority: 1,
                    },
                },
                complexCard: true,
                position: 'h',
                selectCard(card) {
                    if (ui.selected.cards.length) return -1;
                    return 1;
                },
                check(card) {
                    return 6 - get.value(card);
                },
                ai: {
                    fireAttack: true,
                    basic: {
                        order: 4,
                        value: [3, 1],
                        useful: 1,
                    },
                    wuxie(target, card, player, viewer, status) {
                        if (get.attitude(viewer, player._trueMe || player) > 0) return 0;
                        if (status * get.attitude(viewer, target) * get.effect(target, card, player, target) >= 0) return 0;
                        if (_status.event.getRand('huogong_wuxie') * 4 > player.countCards('h')) return 0;
                    },
                    result: {
                        player(player) {
                            var nh = player.countCards('h');
                            if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                    return -10;
                                }
                                if (_status.event.skill) {
                                    var viewAs = get.info(_status.event.skill).viewAs;
                                    if (viewAs == 'huogong') return -10;
                                    if (viewAs && viewAs.name == 'huogong') return -10;
                                }
                            }
                            return 0;
                        },
                        target(player, target) {
                            if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                            if (player.countCards('h') <= 1) return 0;
                            if (target.isAllCardsKnown(player)) {
                                if (
                                    !target.countCards('h', (card) => {
                                        return player.countCards('h', (card2) => {
                                            return card2.suit == card.suit;
                                        });
                                    })
                                ) {
                                    return 0;
                                }
                            }
                            if (target == player) {
                                if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                    return -1.15;
                                }
                                if (_status.event.skill) {
                                    var viewAs = get.info(_status.event.skill).viewAs;
                                    if (viewAs == 'huogong') return -1.15;
                                    if (viewAs && viewAs.name == 'huogong') return -1.15;
                                }
                                return 0;
                            }
                            return -1.15;
                        },
                    },
                    tag: {
                        damage: 1,
                        fireDamage: 1,
                        natureDamage: 1,
                        norepeat: 1,
                    },
                },
            },
            haitu_weishe: {
                trigger: {
                    player: 'damageBegin3',
                    source: 'damageBegin3',
                },
                prompt(event, player) {
                    return '委蛇:是否令' + get.translation(event.player) + '陷入混乱以防止伤害？';
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                filter(event, player) {
                    return !event.player.hasSkill('mad', null, null, false);
                },
                content() {
                    trigger.cancel();
                    trigger.player.addTempSkill('mad', { player: 'phaseEnd' });
                },
            },
            haitu_chaoti: {
                init(player) {
                    var num1 = player.hp;
                    var num = Infinity;
                    player.maxHp = num;
                    player.update();
                },
            },
            haitu_touwei: {
                enable: 'chooseToUse',
                global: 'haitu_touwei_clear',
                group: 'haitu_touwei_clear',
                subSkill: {
                    card: {
                        forced: true,
                        silent: true,
                        charlotte: true,
                        trigger: {
                            player: 'useCard2',
                        },
                        popup: false,
                        filter(event, player) {
                            return event.skill == 'haitu_touwei';
                        },
                        content() {
                            if (!player.storage.haitu_touwei) {
                                player.storage.haitu_touwei = [];
                            }
                            player.markAuto('haitu_touwei', [get.type2(trigger.cards[0])]);
                        },
                        _priority: 1,
                    },
                    clear: {
                        charlotte: true,
                        forced: true,
                        silent: true,
                        trigger: {
                            global: 'phaseEnd',
                        },
                        popup: false,
                        content() {
                            player.storage.haitu_touwei = [];
                            player.update();
                        },
                    },
                },
                viewAs: {
                    name: 'haitu_post',
                },
                group: 'haitu_touwei_card',
                filterCard(card, player) {
                    var suit = get.type2(card);
                    if (player.storage.haitu_touwei && player.storage.haitu_touwei.includes(suit)) return false;
                    {
                        return true;
                    }
                },
                check(card) {
                    return 4 - get.value(card);
                },
                position: 'he',
                mark: true,
                marktext: '喂',
                intro: {
                    content: '已使用类型:$',
                },
                ai: {
                    order(item, player) {
                        if (_status.event.type == 'phase') return 11;
                    },
                    result: {
                        target(player, target) {
                            var num = 1;
                            if (get.attitude(player, target) > 0) {
                                if (target.storage.haitu_post_buff1) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff3) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff5) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff2) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff4) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff6) {
                                    num -= 1;
                                }
                            }
                            if (get.attitude(player, target) < 0) {
                                if (target.storage.haitu_post_buff1) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff3) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff5) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff2) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff4) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff6) {
                                    num += 1;
                                }
                            }
                            return num;
                        },
                    },
                },
            },
            haitu_tubian: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    var cards = get.cards(1);
                    if (cards.length) {
                        game.cardsGotoOrdering(cards);
                        var next = player.chooseToMove('善筹:你可以分别将此次观看的牌置于牌堆顶、牌堆底、一名角色的手牌区', true);
                        next.set('list', [
                            ['牌堆顶', cards],
                            ['你的手牌', player.getCards('h')],
                        ]);
                        next.set('filterMove', function (from, to, moved) {
                            return true;
                        });
                        next.set('filterOk', function (moved) {
                            return moved[0].length == 1;
                        });
                        next.set('processAI', function (list) {
                            var player = _status.event.player,
                                cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                    return get.useful(a) - get.useful(b);
                                }),
                                cards2 = cards.splice(0, 1);
                            return [cards2, cards];
                        });
                    }
                    ('step 1');
                    {
                        var pushs = result.moved[0],
                            gains = result.moved[1];
                        pushs.removeArray(player.getExpansions('qixing'));
                        gains.removeArray(player.getCards('h'));
                        if (!pushs.length || pushs.length != gains.length) return;
                        for (var i of pushs) {
                            player.lose(i, ui.special);
                            player.$throw(i, 1000, 'nobroadcast');
                            i.fix();
                            ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                        }
                        player.gain(gains, 'draw');
                    }
                },
            },
            haitu_guangyi: {
                trigger: {
                    global: 'judge',
                },
                check(event, player) {
                    if (event.judge(event.player.judging[0]) > 0 && get.attitude(player, event.player) > 0) {
                        return false;
                    }
                    if (event.judge(event.player.judging[0]) < 0 && get.attitude(player, event.player) < 0) {
                        return false;
                    }
                    return true;
                },
                prompt(event, player) {
                    return '光翼:是否获得' + get.translation(event.player) + '的判定牌' + get.translation(event.player.judging[0]) + '？';
                },
                content() {
                    'step 0';
                    var card = get.cards()[0];
                    event.card = card;
                    game.cardsGotoOrdering(card).relatedEvent = trigger;
                    ('step 1');
                    player.$throw(card);
                    if (trigger.player.judging[0].clone) {
                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                        game.broadcast(function (card) {
                            if (card.clone) {
                                card.clone.classList.remove('thrownhighlight');
                            }
                        }, trigger.player.judging[0]);
                        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                    }
                    player.gain(trigger.player.judging[0], 'gain2');
                    player.update();
                    trigger.player.judging[0] = card;
                    game.log(trigger.player, '的判定牌改为', card);
                },
            },
            haitushiqu: {
                trigger: {
                    player: 'loseAfter',
                    global: 'loseAsyncAfter',
                },
                filter(event, player) {
                    var evt = event.parent,
                        evt2 = event.getl(player);
                    return evt && evt2 && evt.player == player && evt2.cards2 && evt2.cards2.length;
                },
                fixed: true,
                charlotte: true,
                group: 'haitushiqu_clear',
                subSkill: {
                    clear: {
                        charlotte: true,
                        forced: true,
                        silent: true,
                        trigger: {
                            global: ['phaseZhunbeiEnd', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd', 'phaseJieshuEnd'],
                        },
                        content() {
                            player.getStat('skill').haitushiqu = 0;
                        },
                        popup: false,
                    },
                },
                silent: true,
                forced: true,
                content() {
                    player.getStat('skill').haitushiqu += trigger.getl(player).cards2.length;
                },
                popup: false,
            },
            _haitu_shown: {
                trigger: {
                    global: 'showCardsEnd',
                },
                mark: true,
                marktext: '展',
                intro: {
                    markcount(storage, player) {
                        return player.countCards('he', (card) => card.hasGaintag('_haitu_shown'));
                    },
                    mark(dialog, content, player) {
                        var cards = player.getCards('he', (card) => card.hasGaintag('_haitu_shown'));
                        if (cards.length) {
                            dialog.addAuto(cards);
                        } else return '无展示牌';
                    },
                },
                forced: true,
                charlotte: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    return event.cards.some((i) => get.owner(i) == player);
                },
                content() {
                    game.broadcastAll(
                        function (cards) {
                            cards.forEach((card) => card.addGaintag('_haitu_shown'));
                        },
                        trigger.cards.filter((i) => get.owner(i) == player)
                    );
                    player.markSkill('_haitu_shown');
                },
            },
            haitu_chenxing: {
                mode: ['identity'],
                trigger: {
                    global: ['phaseZhunbeiBegin'],
                },
                forced: true,
                filter(event, player) {
                    return event.player.identity && event.player.identity == 'zhu';
                },
                content() {
                    'step 0';
                    trigger.player.chooseBool('是否令' + get.translation(player) + '判定并获得正面效果？').set('ai', function () {
                        return get.attitude(trigger.player, player) > 0;
                    });
                    ('step 1');
                    if (result.bool) {
                        player.judge().set('callback', function () {
                            if (event.judgeResult.suit == 'heart') {
                                player.recover();
                            }
                            if (event.judgeResult.suit != 'spade') {
                                if (get.position(card, true) == 'o') player.gain(card, 'gain2');
                            }
                        });
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.judge == 2) {
                        player.recover();
                    }
                    if (result.judge != -1) {
                    }
                },
            },
            haitu_mingyu: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget(get.prompt2('haitu_mingyu'), function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (target) {
                            return get.damageEffect(target, _status.event.player, _status.event.player);
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets[0];
                        event.target.judge();
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.suit != 'heart') {
                        event.target.chooseToDiscard('he', true);
                    }
                    if (result.suit == 'spade') {
                        event.target.damage('nocard');
                    }
                },
            },
            haitu_duotian: {
                juexingji: true,
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                derivation: 'haitu_mingyu',
                filter(event, player) {
                    return player.countCards('e') > 2;
                },
                content() {
                    player.awakenSkill('haitu_duotian');
                    player.gainMaxHp();
                    player.recover();
                    player.removeSkill('haitu_chenxing');
                    player.addSkill('haitu_mingyu');
                },
            },
            haitu_zongtong: {
                trigger: { player: ['phaseZhunbeiBegin'] },
                logTarget(event, player) {
                    return game.filterPlayer((i) => i != player);
                },
                check(event, player) {
                    return true;
                },
                content() {
                    player.chooseToDebate(game.filterPlayer((i) => i != player)).set('callback', lib.skill.haitu_zongtong.callback);
                },
                callback() {
                    'step 0';
                    var result = event.debateResult;
                    var list = [];
                    event.red = [];
                    event.black = [];
                    event.result = result.opinion;
                    {
                        event.red = result.red.map((i) => i[0]);
                        event.black = result.black.map((i) => i[0]);
                        {
                            list.push('黑色');
                        }
                        {
                            list.push('红色');
                        }
                        if (result.red.length == 0 && result.black.length == 0) {
                            event.finish();
                        }
                    }
                    player
                        .chooseControl(list)
                        .set('prompt', '选择支持多数党休养生息或选择其他党派获得【制衡】')
                        .set('ai', function () {
                            var player = _status.event.player;
                            if (player.hp <= 1) {
                                if (event.result == 'red') {
                                    return '红色';
                                } else {
                                    return '黑色';
                                }
                            }
                            if (player.hp > 1) {
                                if (event.result == 'red') {
                                    return '黑色';
                                } else {
                                    return '红色';
                                }
                            }
                        });
                    ('step 1');
                    player.storage.haitu_zongtong_red = [];
                    player.storage.haitu_zongtong_black = [];
                    if (result.control == '红色') {
                        player.storage.haitu_zongtong_red = true;
                        if (event.result == 'red') {
                            player.draw();
                            player.recover();
                        } else {
                            player.addTempSkill('rezhiheng');
                        }
                    }
                    if (result.control == '黑色') {
                        player.storage.haitu_zongtong_black = true;
                        if (event.result == 'black') {
                            player.draw();
                            player.recover();
                        } else {
                            player.addTempSkill('rezhiheng');
                        }
                    }
                    if (player.storage.haitu_zongtong_red == true) {
                        for (var j of event.red) {
                            var next = game.createEvent('red');
                            next.player = player;
                            next.target = j;
                            next.setContent(lib.skill.haitu_zongtong.give);
                        }
                        for (var j of event.black) {
                            var next = game.createEvent('black');
                            next.player = player;
                            next.target = j;
                            next.setContent(lib.skill.haitu_zongtong.kill);
                        }
                    }
                    if (player.storage.haitu_zongtong_black == true) {
                        for (var j of event.black) {
                            var next = game.createEvent('black');
                            next.player = player;
                            next.target = j;
                            next.setContent(lib.skill.haitu_zongtong.give);
                        }
                        for (var j of event.red) {
                            var next = game.createEvent('red');
                            next.player = player;
                            next.target = j;
                            next.setContent(lib.skill.haitu_zongtong.kill);
                        }
                    }
                },
                give(player, target) {
                    'step 0';
                    target.chooseCard(1, 'he', false).set('ai', function (card) {
                        if (get.attitude(target, player) > 0) {
                            return 6 - get.value(card);
                        } else {
                            return false;
                        }
                    });
                    ('step 1');
                    if (result.cards?.length) {
                        target.line(player);
                        target.give(result.cards, player);
                    }
                },
                derivation: ['rezhiheng'],
                kill(player, target, card) {
                    'step 0';
                    if (target.countCards('h') > 0) {
                        if (lib.filter.targetEnabled2({ name: 'sha', nature: 'stab' }, target, player)) {
                            target.chooseBool('是否对' + get.translation(player) + '使用刺杀？').set('ai', function () {
                                return get.attitude(player, target) < 0 && player.countCards('h') < 2;
                            });
                        }
                    }
                    ('step 1');
                    if (result.bool) {
                        target.discard(target.getCards('h'));
                        var sha = { name: 'sha', nature: 'stab' };
                        if (target.canUse(sha, player, false, false)) target.useCard(sha, player, false);
                    }
                },
            },
            haitu_doumao: {
                trigger: {
                    player: 'useCardToPlayer',
                },
                forced: true,
                mark: true,
                marktext: '逗',
                intro: {
                    content: '已转化牌名:$',
                },
                group: 'haitu_doumao_view',
                subSkill: {
                    view: {
                        charlotte: true,
                        forced: true,
                        trigger: {
                            global: 'phaseEnd',
                        },
                        mark: true,
                        marktext: '猫',
                        intro: {
                            content: '已转化花色:$',
                        },
                        content() {
                            player.storage.haitu_doumao = [];
                            player.storage.haitu_doumao_view = [];
                            player.update();
                        },
                    },
                },
                filter(event, player) {
                    if (event.targets.length != 1) return false;
                    var suit = event.card.suit;
                    if (!event.targets.length) return false;
                    if (player.storage.haitu_doumao_view && player.storage.haitu_doumao_view.includes(suit)) return false;
                    {
                        return true;
                    }
                },
                content() {
                    'step 0';
                    const func = function (player, cardx, targetsx) {
                        player._shaitu_doumaouse = true;
                        player._shaitu_doumaouse3 = true;
                        let numx = 0;
                        for (var i of targetsx) {
                            numx += get.effect(i, cardx, player, player);
                        }
                        delete player._shaitu_doumaouse;
                        delete player._shaitu_doumaouse3;
                        return numx;
                    };
                    const result1 = func(trigger.player, trigger.card, trigger.targets);
                    const inpile = lib.inpile.filter(function (name) {
                        if (get.type(name) != 'trick' && get.type(name) != 'basic') return false;
                        if (player.storage.haitu_doumao && player.storage.haitu_doumao.includes(name)) return false;
                        const vcard = {
                            name: name,
                            suit: trigger.card.suit,
                            number: trigger.card.number,
                        };
                        let num = get.cardNameLength(trigger.card);
                        const info = get.info(vcard);
                        if (get.cardNameLength(vcard) != num) return false;
                        if (info.notarget) return false;
                        if (vcard.name == trigger.card.name) return false;
                        return true;
                    });
                    let text = get.prompt2('haitu_doumao');
                    player
                        .chooseVCardButton(inpile, text)
                        .set('ai', function (button) {
                            const name = button.link[2];
                            const player = _status.event.player;
                            const evt = _status.event._trigger;
                            const vcard = {
                                name: name,
                                suit: evt.card.suit,
                                number: evt.card.number,
                            };
                            const effect = _status.event.funcx(evt.player, vcard, evt.targets) - _status.event.aicheck;
                            //game.log("effectx",name,effect)//测试用//------------------//
                            return effect;
                        })
                        .set('aicheck', result1)
                        .set('_trigger', trigger)
                        .set('funcx', func);
                    ('step 1');
                    if (result.bool) {
                        if (trigger.card.name == 'sha') {
                            player.getStat().card.sha--;
                        }
                        const evt = trigger.parent;
                        const card = trigger.card;
                        event.card = card;
                        trigger.untrigger();
                        game.log(card, '改为了', result.links[0][2]);
                        card.name = result.links[0][2];
                        trigger.targets = trigger.targets.filter(function (i) {
                            var info = get.info(trigger.card);
                            if (info.notarget) return false;
                            return true;
                        });
                        if (!trigger.targets.length) {
                            trigger.all_excluded = true;
                            game.log(trigger.card, '不能合法结算!');
                        } else {
                        }
                        player.markAuto('haitu_doumao', [trigger.card.name]);
                        player.markAuto('haitu_doumao_view', [trigger.card.suit]);
                    }
                },
            },
            xin_guaiwuzhizao: {
                subSkill: {
                    use: {
                        content() {
                            'step 0';
                            if (event.created) return;
                            event.created = true;
                            if (event.isMine()) {
                                var node = ui.create.div('.add_skill');
                                event.node = node;
                                event.node.style.width = '400px';
                                event.node.style.height = '30px';
                                event.node.style.lineHeight = '30px';
                                event.node.style.fontFamily = 'xinwei';
                                event.node.style.fontSize = '30px';
                                event.node.style.padding = '10px';
                                event.node.style.left = 'calc(50% - 200px)';
                                event.node.style.top = 'calc(50% - 20px)';
                                event.node.style.whiteSpace = 'nowrap';
                                event.node.innerHTML = '请在此输入技能名称';
                                event.node.contentEditable = true;
                                event.node.style.webkitUserSelect = 'text';
                                event.node.style.textAlign = 'center';
                                var skillName = function (e) {
                                    'step 0';
                                    var skills = [];
                                    var skills1 = [];
                                    var list = [];
                                    var name = event.node.innerText;
                                    event.num = 0;
                                    for (var i in lib.skill) {
                                        var info = get.translation(i, 'info');
                                        {
                                            var name = event.node.innerText;
                                            if (get.translation(i) != name) continue;
                                        }
                                        if (event.target.hasSkill(i)) continue;
                                        if (!get.translation(i, 'info') || get.translation(i + '_info').length === 0) continue;
                                        if (get.translation(i + '_info').length === 0) continue;
                                        if (get.translation(i, 'info') && get.translation(i + '_info').length != 0) {
                                            skills.add(i);
                                            skills1.add(i);
                                            list.add(i);
                                            event.num += 1;
                                        }
                                    }
                                    list.add('haitu_cancel');
                                    if (event.num <= 0) {
                                        var name = event.node.innerText;
                                        alert(name.length == 0 || name == '请在此输入技能名称' ? '请先输入技能名称' : name + '不是一个有效的技能,请重新输入');
                                        //ui.clear();
                                        event.node.innerHTML = '';
                                        return;
                                    }
                                    if (event.num != 0) {
                                        event.num = 0;
                                        ui.window.removeChild(event.node);
                                        ui.window.removeChild(text);
                                        ui.window.removeChild(button);
                                        if (event.isMine() && list != []) {
                                            var dialog = ui.create.dialog('forcebutton');
                                            dialog.add('选择令' + get.translation(event.target) + '获得一项技能', false);
                                            var clickItem = function () {
                                                _status.event._result = this.link;
                                                dialog.close();
                                                game.resume();
                                            };
                                            for (var i = 0; i < list.length; i++) {
                                                if (lib.translate[list[i] + '_info']) {
                                                    var translation = get.translation(list[i]);
                                                    if (translation[0] == '新' && translation.length == 3) {
                                                        translation = translation.slice(1, 3);
                                                    } else {
                                                        translation = translation.slice(0, 2);
                                                    }
                                                    var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                                                    item.firstChild.addEventListener('click', clickItem);
                                                    item.firstChild.link = list[i];
                                                }
                                            }
                                            dialog.add(ui.create.div('.placeholder'));
                                            event.switchToAuto = function () {
                                                event._result = event.skillai();
                                                dialog.close();
                                                game.resume();
                                            };
                                            _status.imchoosing = true;
                                            game.pause();
                                        } else {
                                            event._result = event.skillai();
                                        }
                                        //ui.clear();
                                        return;
                                    } else {
                                        var name = event.node.innerText;
                                        alert(name.length == 0 || name == '请在此输入技能名称' ? '请先输入技能名称' : name + '不是一个有效的技能,请重新输入');
                                        //ui.clear();
                                        event.node.innerHTML = '';
                                        return;
                                    }
                                };
                                ui.window.appendChild(event.node);
                                event.node.onfocus = function () {
                                    event.node.innerHTML = '';
                                };
                                event.node.onkeydown = function (e) {
                                    e.stopPropagation();
                                    if (e.keyCode == 13) {
                                        skillName();
                                        setTimeout(function () {
                                            event.node.innerHTML = '';
                                        }, 10);
                                    }
                                };
                                var text = ui.create.div();
                                text.style.width = '400px';
                                text.style.height = '30px';
                                text.style.lineHeight = '30px';
                                text.style.fontFamily = 'xinwei';
                                text.style.fontSize = '30px';
                                text.style.padding = '10px';
                                text.style.left = 'calc(50% - 200px)';
                                text.style.top = 'calc(50% - 80px)';
                                text.innerText = '请宣言一个技能名称';
                                text.style.textAlign = 'center';
                                ui.window.appendChild(text);
                                var button = ui.create.div('.menubutton.highlight.large', '确定', skillName);
                                button.style.width = '70px';
                                button.style.left = 'calc(50% - 35px)';
                                button.style.top = 'calc(50% + 60px)';
                                ui.window.appendChild(button);
                                for (var i in lib.element.event) {
                                    event.parent[i] = lib.element.event[i];
                                }
                                event.parent.custom = {
                                    add: {},
                                    replace: {},
                                };
                                game.pause();
                            } else {
                                event.finish();
                            }
                            ('step 1');
                            {
                                _status.imchoosing = false;
                                var link = result;
                                {
                                    target.addTempSkill(link, 'roundStart');
                                    player.popup(link);
                                    game.log(player, '声明了【' + get.translation(link) + '】');
                                }
                            }
                            game.log(event.target, '获得了【' + get.translation(link) + '】');
                        },
                    },
                },
                enable: 'phaseUse',
                usable: 1,
                content() {
                    'step 0';
                    player
                        .chooseTarget('请选择增加技能的角色', true, function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return 10 + get.attitude(player, target);
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets[0];
                        if (lib.config.mode == 'guozhan' && event.target.isUnseen()) {
                            player
                                .chooseControl('主将', '副将', function () {
                                    return Math.floor(Math.random() * 2);
                                })
                                .set('prompt', '选择要明置的武将牌');
                        } else {
                            event.goto(3);
                        }
                    }
                    ('step 2');
                    if (result.index == 0) {
                        event.target.showCharacter(0);
                    } else {
                        event.target.showCharacter(1);
                    }
                    ('step 3');
                    var next = game.createEvent('guaiwuzhizao');
                    next.player = game.me;
                    next.target = event.target;
                    next.setContent(lib.skill.xin_guaiwuzhizao_use.content);
                },
            },
            haitu_chue: {
                trigger: {
                    player: 'damageBegin3',
                    source: 'damageBegin1',
                },
                forced: true,
                content() {
                    'step 0';
                    var list = [];
                    if (trigger.player.countCards('he') > 0) {
                        list.add('重铸');
                    }
                    list.add('摸牌');
                    list.add('取消');
                    trigger.player
                        .chooseControl(list)
                        .set('prompt', '选择一项执行')
                        .set('ai', function () {
                            if (trigger.player.countCards('he') > 0) {
                                var num = [0, 1, 2].randomGet(1);
                            } else {
                                var num = [1, 2].randomGet(1);
                            }
                            return _status.event.controls[num];
                        });
                    ('step 1');
                    if (result.control == '取消') {
                        event.finish();
                    }
                    if (result.control == '摸牌') {
                        trigger.player.draw();
                        event.goto(3);
                    }
                    if (result.control == '重铸') {
                        trigger.player.chooseCard('he', true, '请重铸一张牌', lib.filter.cardRecastable).set('ai', function (card) {
                            if (get.color(card) == 'black' && !card.hasGaintag('_haitu_shown')) {
                                return 10;
                            } else {
                                return 8 - get.value(card);
                            }
                        });
                    }
                    ('step 2');
                    trigger.player.recast(result.cards);
                    trigger.source.draw();
                    event.finish();
                    ('step 3');
                    if (trigger.source.countCards('he') > 0) {
                        trigger.source.chooseCard('he', true, '请重铸一张牌', lib.filter.cardRecastable);
                    } else {
                        event.finish();
                    }
                    ('step 4');
                    trigger.source.recast(result.cards);
                },
            },
            haitu_jinqu: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                filter(event, player) {
                    var cards = event.player.getCards('h', function (card) {
                        return card.name != 'sha' && card.name != 'shan';
                    });
                    if (cards.length) {
                        return true;
                    }
                    var cards1 = event.player.getCards('h', function (card) {
                        return get.type2(card) == 'equip';
                    });
                    if (cards1.length) {
                        return true;
                    }
                    return false;
                },
                content() {
                    'step 0';
                    var list = [],
                        choiceList = ['弃置手牌中不为【杀】和【闪】的牌', '对伤害来源使用一张装备牌'];
                    var cards = trigger.player.getCards('h', function (card) {
                        return card.name != 'sha' && card.name != 'shan';
                    });
                    if (cards.length) {
                        list.push('选项一');
                    } else {
                        choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                    }
                    var cards1 = trigger.player.getCards('h', function (card) {
                        return get.type2(card) == 'equip';
                    });
                    if (cards1.length) {
                        list.push('选项二');
                    } else {
                        choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                    }
                    trigger.player
                        .chooseControl(list)
                        .set('choiceList', choiceList, true)
                        .set('ai', function () {
                            var list = _status.event.controls;
                            if (get.attitude(_status.event.player, trigger.source) > 0 && list.includes('选项二')) {
                                return '选项二';
                            } else {
                                return '选项一';
                            }
                        })
                        .set('prompt', '请选择一项');
                    ('step 1');
                    if (result.control == '选项一') {
                        var cards = trigger.player.getCards('h', function (card) {
                            return card.name != 'sha' && card.name != 'shan';
                        });
                        trigger.player.discard(cards);
                        event.finish();
                    } else {
                        trigger.player.chooseCard(
                            '对' + get.translation(trigger.source) + '使用一张装备牌',
                            function (card) {
                                return get.type2(card) == 'equip';
                            },
                            'h',
                            true
                        );
                    }
                    ('step 2');
                    if (result.bool) {
                        trigger.player.useCard(result.cards, trigger.source, false);
                    }
                },
            },
            haitu_saohei: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    player.chooseTarget('扫黑:选择一名角色摸牌', false).set('ai', (target) => {
                        var player = _status.event.player;
                        if (
                            target != player &&
                            target.countCards('hej', function (card) {
                                return get.color(card) == 'black';
                            }) > 0
                        ) {
                            return get.damageEffect(target, player, player);
                        } else {
                            return get.attitude(get.player(), target);
                        }
                    });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets[0];
                        player.line(event.target, 'fire');
                        event.target.draw();
                        if (event.target == player) {
                            event.finish();
                        }
                    } else event.finish();
                    ('step 2');
                    {
                        event.target.update();
                        var cards = event.target.getCards('he', (card) => {
                            return !card.hasGaintag('_haitu_shown');
                        });
                        cards = cards.filter((i) => {
                            if (!i.hasGaintag('_haitu_shown')) {
                                event.target.showCards(i);
                                if (get.color(i) == 'black') {
                                    var sha = { name: 'sha', nature: 'thunder' };
                                    if (player.canUse(sha, event.target, false, false)) {
                                        player.useCard(sha, event.target, false);
                                    }
                                }
                                return false;
                            }
                            return event.target.countCards('hes', (card) => card == i) && !i.hasGaintag('_haitu_shown');
                        });
                    }
                    ('step 3');
                    if (
                        event.target.countCards('he', (card) => {
                            return card.hasGaintag('_haitu_shown');
                        }) < event.target.countCards('he')
                    ) {
                        event.goto(2);
                    }
                },
                ai: {
                    result: {
                        player: 1,
                    },//QQQ
                },
            },
            haitu_diaobing: {
                trigger: {
                    player: ['phaseBegin', 'phaseEnd'],
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('he') > 0;
                },
                content() {
                    'step 0';
                    player.chooseCard('he', false, 1, '是否重铸一张牌?', lib.filter.cardrecastable);
                    ('step 1');
                    if (result.bool) {
                        player.recast(result.cards);
                        player.chooseTarget('调兵:选择一名角色执行主要阶段', true).set('ai', (target) => {
                            return get.attitude(get.player(), target);
                        });
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        player.line(target, 'fire');
                        event.target = target;
                        var list = ['判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段'];
                        player
                            .chooseControl(list)
                            .set('prompt', '选择令' + get.translation(event.target) + '执行一个阶段')
                            .set('ai', function () {
                                if (get.attitude(player, event.target) < 0) return '弃牌阶段';
                                if (get.attitude(player, event.target) > 0) return '摸牌阶段';
                            });
                    }
                    ('step 3');
                    if (result.control) {
                        if (result.control == '判定阶段') {
                            var next = event.target.phaseJudge();
                            game.log(event.target, '执行一个', '#g判定阶段');
                        }
                        if (result.control == '摸牌阶段') {
                            var next = event.target.phaseDraw();
                            game.log(event.target, '执行一个', '#g摸牌阶段');
                        }
                        if (result.control == '出牌阶段') {
                            var next = event.target.phaseUse();
                            game.log(event.target, '执行一个', '#g出牌阶段');
                        }
                        if (result.control == '弃牌阶段') {
                            var next = event.target.phaseDiscard();
                            game.log(event.target, '执行一个', '#g弃牌阶段');
                        }
                    }
                },
            },
            haitu_camo: {
                forced: true,
                group: 'linglongshimandai_skill',
            },
            haitu_chuangshi: {
                forced: true,
                trigger: {
                    player: ['useCard', 'respond'],
                },
                forced: true,
                filter(event, player) {
                    if (!event.cards.length) return false;
                    return true;
                },
                content() {
                    'step 0';
                    var list = [];
                    for (var i in lib.card) {
                        var info = get.info(i);
                        if (info.target) {
                            if (lib.card[i].type == 'trick' || lib.card[i].type == 'food' || lib.card[i].type == 'basic' || lib.card[i].type == 'land' || lib.card[i].type == 'hsshenqi' || lib.card[i].type == 'jiguan' || lib.card[i].type == 'spell') {
                                list.add(i);
                            }
                        }
                    }
                    if (list.length) {
                        player.chooseVCardButton(list.randomGets(3), prompt).set('ai', function (button) {
                            var card = {
                                name: button.link[2],
                            },
                                player = _status.event.player;
                            return _status.event.player.getUseValue(card);
                        });
                    } else {
                        event.finish();
                    }
                    ('step 1');
                    if (result.links?.length) {
                        player.chooseUseTarget(false, result.links[0][2], false);
                    }
                },
            },
            haitu_Bskill: {
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target != player;
                },
                filterCard(card, player) {
                    {
                        return true;
                    }
                },
                position: 'he',
                discard: false,
                lose: false,
                delay: 0,
                ai: {
                    order(skill, player) {
                        if (player.hp < player.maxHp && player.storage.rende < 2 && player.countCards('h') > 1) {
                            return 10;
                        }
                        return 1;
                    },
                    result: {
                        target(player, target) {
                            if (target.hasSkillTag('nogain')) return 0;
                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                if (target.hasSkillTag('nodu')) return 0;
                                return -10;
                            }
                            if (target.hasJudge('lebu')) return 0;
                            var nh = target.countCards('h');
                            var np = player.countCards('h');
                            if (player.hp == player.maxHp || player.storage.rende < 0 || player.countCards('h') <= 1) {
                                if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                            }
                            return Math.max(1, 5 - nh);
                        },
                    },
                    effect: {
                        target(card, player, target) {
                            if (player == target && get.type(card) == 'equip') {
                                if (player.countCards('e', { subtype: get.subtype(card) })) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i] != player && get.attitude(player, players[i]) > 0) {
                                            return 0;
                                        }
                                    }
                                }
                            }
                        },
                    },
                    threaten: 0.8,
                },
                usable: 1,
                check(card) {
                    if (ui.selected.cards.length > 1) return 0;
                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'haitu_mummycloth1') return 0;
                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'haitu_mummycloth2') return 0;
                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'haitu_mummycloth3') return 0;
                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'haitu_mummycloth4') return 0;
                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'haitu_mummycloth5') return 0;
                    if (!ui.selected.cards.length && card.name == 'du') return 20;
                    var player = get.owner(card);
                    var num = 0;
                    var evt2 = _status.event.parent;
                    var num = 0;
                    player.getHistory('lose', function (evt) {
                        if (evt.parent.skill == 'rende' && evt.getParent(3) == evt2) num += evt.cards.length;
                    });
                    if (player.hp == player.maxHp || num > 1 || player.countCards('h') <= 1) {
                        if (ui.selected.cards.length) {
                            return -1;
                        }
                        var players = game.filterPlayer();
                        for (var i = 0; i < players.length; i++) {
                            if (players[i].hasSkill('haoshi') && !players[i].isTurnedOver() && !players[i].hasJudge('lebu') && get.attitude(player, players[i]) >= 3 && get.attitude(players[i], player) >= 3) {
                                return 11 - get.value(card);
                            }
                        }
                        if (player.countCards('h') > player.hp) return 10 - get.value(card);
                        if (player.countCards('h') > 2) return 6 - get.value(card);
                        return -1;
                    }
                    return 10 - get.value(card);
                },
                content() {
                    player.give(cards, target);
                    var num0 = 0;
                    for (var i of cards) {
                        var num = get.cardNameLength(i);
                        num0 += num;
                    }
                    var cards0 = [];
                    var card = get.cardPile2(function (card) {
                        return get.cardNameLength(card) == num0;
                    });
                    if (card) {
                        cards0.push(card);
                    }
                    if (cards0.length) player.gain(cards0, 'gain2');
                },
                selectCard: [1, Infinity],
                position: 'he',
                complexCard: true,
            },
            haitu_zhongbai: {
                forced: true,
                trigger: {
                    player: 'useCard2',
                },
                charlotte: true,
                filter(event, player, name) {
                    var suit = event.card.suit;
                    if (!lib.suit.includes(suit)) return false;
                    if (player.storage.haitu_zhongbai && player.storage.haitu_zhongbai.includes(suit)) return false;
                    return true;
                },
                intro: {
                    content: '已使用花色:$',
                },
                silent: true,
                content() {
                    'step 0';
                    player.markAuto('haitu_zhongbai', [trigger.card.suit]);
                    ('step 1');
                    var storage = player.getStorage('haitu_zhongbai');
                    if (storage.length >= 4) {
                        event.goto(2);
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    player.unmarkSkill('haitu_zhongbai');
                    var skills = player.getSkills(null, false, false).filter((skill) => {
                        var info = get.info(skill);
                        if (!info || get.is.empty(info) || info.charlotte) return false;
                        return true;
                    });
                    game.expandSkills(skills);
                    var resetSkills = [];
                    var suffixs = ['used', 'round', 'block', 'blocker'];
                    for (var skill of skills) {
                        var info = get.info(skill);
                        if (typeof info.usable == 'number') {
                            if (player.getStat('triggerSkill')[skill] && player.getStat('triggerSkill')[skill] >= 1) {
                                delete player.getStat('triggerSkill')[skill];
                                resetSkills.add(skill);
                            }
                            if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
                                delete player.getStat('skill')[skill];
                                resetSkills.add(skill);
                            }
                        }
                        if (info.round && player.storage[skill + '_roundcount']) {
                            delete player.storage[skill + '_roundcount'];
                            resetSkills.add(skill);
                        }
                        if (player.awakenedSkills.includes(skill)) {
                            player.restoreSkill(skill);
                            resetSkills.add(skill);
                        }
                        for (var suffix of suffixs) {
                            if (player.hasSkill(skill + '_' + suffix)) {
                                player.removeSkill(skill + '_' + suffix);
                                resetSkills.add(skill);
                            }
                        }
                    }
                    if (resetSkills.length) {
                        var str = '';
                        for (var i of resetSkills) {
                            str += '【' + get.translation(i) + '】、';
                        }
                        game.log(player, '重置了技能', '#g' + str.slice(0, -1));
                    }
                },
                popup: false,
                _priority: 1,
            },
            haitu_pochuang: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    'step 0';
                    event.target = target;
                    event.list = ['使用杀', '使用一张锦囊牌'];
                    player.chooseControl(event.list).set('prompt', '<center><table>『破窗』</table><br><font color=cyan>※</font>选择你对〖' + get.translation(target) + '〗执行的一项,<span class=thundertext>而后</span>其对你执行另一项<font color=cyan>※</font>').ai = function () {
                        return '使用一张锦囊牌';
                    };
                    ('step 1');
                    if (result.control == '使用杀') {
                        player.line(target);
                        var sha = { name: 'sha' };
                        if (player.canUse(sha, target, false, false)) player.useCard(sha, target, false);
                        event.goto(5);
                    } else {
                        var list = [];
                        for (var name of lib.inpile) {
                            var info = lib.card[name];
                            if (!info || info.type != 'trick' || info.notarget) continue;
                            list.push(name);
                        }
                        if (!list.length) event.finish();
                        else {
                            event.list = list;
                        }
                    }
                    ('step 2');
                    var list = event.list.filter(function (name) {
                        return player.canUse(name, target, false);
                    });
                    if (list.length) {
                        var next = player.chooseButton(['视为对' + get.translation(target) + '使用一张牌', [list, 'vcard']], true).set('ai', function (button) {
                            var evt = _status.event.parent;
                            return get.effect(evt.target, { name: button.link[2] }, evt.player, evt.player);
                        });
                    } else event.finish();
                    ('step 3');
                    if (result.links?.length) {
                        var name = result.links[0][2];
                        player.useCard({ name: name }, target, false);
                    }
                    ('step 4');
                    var sha = { name: 'sha' };
                    if (target.canUse(sha, player, false, false)) target.useCard(sha, player, false);
                    event.finish();
                    ('step 5');
                    var list = [];
                    for (var name of lib.inpile) {
                        var info = lib.card[name];
                        if (!info || info.type != 'trick' || info.notarget) continue;
                        list.push(name);
                    }
                    if (!list.length) event.finish();
                    else {
                        event.list = list;
                    }
                    ('step 6');
                    var list = event.list.filter(function (name) {
                        return target.canUse(name, player, false);
                    });
                    if (list.length) {
                        var next = target.chooseButton(['视为对' + get.translation(player) + '使用一张牌', true, [list, 'vcard']]).set('ai', function (button) {
                            var evt = _status.event.parent;
                            return get.effect(evt.target, { name: button.link[2] }, evt.player, evt.player);
                        });
                    } else {
                        event.finish();
                    }
                    ('step 7');
                    if (result.links?.length) {
                        var name = result.links[0][2];
                        target.useCard({ name: name }, player, false);
                    }
                },
                ai: {
                    order: 11,
                    result: {
                        player(player, target) {
                            {
                                return get.effect(target, { name: 'guohe_copy' }, player, player) + get.effect(player, { name: 'sha' }, target, player);
                            }
                        },
                    },
                },
            },
            haitu_huazhao: {
                subSkill: { club: { charlotte: true }, spade: { charlotte: true }, heart: { charlotte: true }, diamond: { charlotte: true } },
                hiddenCard(player, name) {
                    if (player.storage.diamond == name) {
                        return player.storage.haitu_huazhao_diamond != true;
                    }
                    if (player.storage.club == name) {
                        return player.storage.haitu_huazhao_club != true;
                    }
                    if (player.storage.heart == name) {
                        return player.storage.haitu_huazhao_heart != true;
                    }
                    if (player.storage.spade == name) {
                        return player.storage.haitu_huazhao_spade != true;
                    }
                },
                round: 1,
                init(player) {
                    player.storage.spade = 'sha';
                    player.storage.club = 'shan';
                    player.storage.diamond = 'jiu';
                    player.storage.heart = 'tao';
                    player.storage.haitu_huazhao_heart = false;
                    player.storage.haitu_huazhao_club = false;
                    player.storage.haitu_huazhao_diamond = false;
                    player.storage.haitu_huazhao_spade = false;
                    player.update();
                    var a = window.setInterval(function () {
                        if (player.storage.haitu_huazhao_heart == true && player.storage.haitu_huazhao_spade == true && player.storage.haitu_huazhao_club == true && player.storage.haitu_huazhao_diamond == true) {
                            player.storage.haitu_huazhao_spade = false;
                            player.storage.haitu_huazhao_club = false;
                            player.storage.haitu_huazhao_heart = false;
                            player.storage.haitu_huazhao_diamond = false;
                            player.update();
                        }
                    }, 1000);
                },
                forced: true,
                enable: ['chooseToUse'],
                filterCard() {
                    return false;
                },
                selectCard: -1,
                chooseButton: {
                    dialog(event, player) {
                        'step 0';
                        var list = [];
                        {
                            var name1 = player.storage.spade;
                            var name2 = player.storage.club;
                            var name3 = player.storage.heart;
                            var name4 = player.storage.diamond;
                            if (player.storage.haitu_huazhao_spade != true && player.countCards('h', { suit: 'spade' })) {
                                list.add(name1);
                            }
                            if (player.storage.haitu_huazhao_club != true && player.countCards('h', { suit: 'club' })) {
                                list.add(name2);
                            }
                            if (player.storage.haitu_huazhao_heart != true && player.countCards('h', { suit: 'heart' })) {
                                list.add(name3);
                            }
                            if (player.storage.haitu_huazhao_diamond != true && player.countCards('h', { suit: 'diamond' })) {
                                list.add(name4);
                            }
                        }
                        ('step 1');
                        return ui.create.dialog('花招', [list, 'vcard'], 'hidden');
                    },
                    filter(button, player) {
                        return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                    },
                    check(button) {
                        if (button.link[2] == 'shan') return 3;
                        var player = _status.event.player;
                        if (button.link[2] == 'jiu') {
                            if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                            if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                        }
                        return player.getUseValue({ name: button.link[2] });
                    },
                    backup(links, player) {
                        return {
                            check(card) {
                                return 8 - get.value(card);
                            },
                            hiddenCard(player, name) {
                                if (player.storage.diamond == name) {
                                    return player.storage.haitu_huazhao_diamond != true;
                                }
                                if (player.storage.club == name) {
                                    return player.storage.haitu_huazhao_club != true;
                                }
                                if (player.storage.heart == name) {
                                    return player.storage.haitu_huazhao_heart != true;
                                }
                                if (player.storage.spade == name) {
                                    return player.storage.haitu_huazhao_spade != true;
                                }
                            },
                            popname: true,
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            viewAs: { name: links[0][2] },
                            precontent() {
                                'step 0';
                                var skill = 'haitu_huazhao';
                                var card = event.result.card;
                                if (player.storage.spade == card.name) {
                                    var cards = player.getCards('h', { suit: 'spade' });
                                    if (cards.length) {
                                        player.recast(cards);
                                    }
                                    player.storage.haitu_huazhao_spade = true;
                                }
                                if (player.storage.club == card.name) {
                                    var cards = player.getCards('h', { suit: 'club' });
                                    if (cards.length) {
                                        player.recast(cards);
                                    }
                                    player.storage.haitu_huazhao_club = true;
                                }
                                if (player.storage.heart == card.name) {
                                    var cards = player.getCards('h', { suit: 'heart' });
                                    if (cards.length) {
                                        player.recast(cards);
                                    }
                                    player.storage.haitu_huazhao_heart = true;
                                }
                                if (player.storage.diamond == card.name) {
                                    var cards = player.getCards('h', { suit: 'diamond' });
                                    if (cards.length) {
                                        player.recast(cards);
                                    }
                                    player.storage.haitu_huazhao_diamond = true;
                                }
                                ('step 1');
                                if (player.storage.haitu_huazhao_spade == true && player.storage.haitu_huazhao_club == true && player.storage.haitu_huazhao_heart == true && player.storage.haitu_huazhao_diamond == true) {
                                    player.storage.haitu_huazhao_spade = false;
                                    player.storage.haitu_huazhao_club = false;
                                    player.storage.haitu_huazhao_heart = false;
                                    player.storage.haitu_huazhao_diamond = false;
                                    player.update();
                                }
                            },
                        };
                    },
                    prompt(links, player) {
                        {
                            return '视为使用' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '';
                        }
                    },
                },
                ai: {
                    order(item, player) {
                        return 2;
                    },
                    result: {
                        player(player) {
                            return 2;
                        },
                    },
                },
            },
            haitu_daomeng: {
                enable: ['chooseToUse', 'chooseTorespond'],
                mark: true,
                zhuanhuanji: true,
                usable: 1,
                marktext: '☯',
                init(player) {
                    player.storage.haitu_daomeng = false;
                },
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.haitu_daomeng == false) {
                            return '你可以将一张红色手牌当【洞烛先机】使用.';
                        } else return '你可以一张黑色手牌当【逐近弃远】使用.';
                    },
                },
                viewAs(cards, player) {
                    var name = false;
                    var nature = null;
                    //根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
                    switch (cards[0]?.suit) {
                        case 'club':
                            name = 'zhujinqiyuan';
                            break;
                        case 'diamond':
                            name = 'dongzhuxianji';
                            break;
                        case 'spade':
                            name = 'zhujinqiyuan';
                            break;
                        case 'heart':
                            name = 'dongzhuxianji';
                            break;
                    }
                    //返回判断结果
                    if (name) return { name: name, nature: nature };
                    return null;
                },
                check(card) {
                    return 7 - get.value(card);
                },
                filterCard(card, player) {
                    if (player.storage.haitu_daomeng == true) {
                        return get.color(card) == 'black';
                    } else {
                        return get.color(card) == 'red';
                    }
                },
                precontent() {
                    player.changeZhuanhuanji('haitu_daomeng');
                },
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    return true;
                },
                position: 'h',
                ai: {
                    order(item, player) {
                        if (_status.event.type == 'phase') return 2;
                    },
                    result: {
                        player(player) {
                            return 2;
                        },
                    },
                },
            },
            haitu_Lskill: {
                enable: 'chooseToUse',
                filterCard(player, storage, card) {
                    {
                        var suit = card.suit;
                        return !player.storage.haitu_re_zhongbai_mark.includes(suit);
                    }
                },
                viewAs: {
                    name: 'jiu',
                },
                position: 'he',
                global: 'haitu_Lskill_delete',
                prompt: '将一张牌当酒使用',
                check(card) {
                    if (_status.event.type == 'dying') return 1 / Math.max(0.1, get.value(card));
                    return 4 - get.value(card);
                },
                precontent() {
                    if (!player.storage.haitu_Lskill) {
                        player.storage.haitu_Lskill = 0;
                    }
                    player.storage.haitu_Lskill += 1;
                    player.addTempSkill('haitu_Lskill_change');
                },
                group: 'haitu_Lskill_card',
                subSkill: {
                    card: {
                        forced: true,
                        silent: true,
                        charlotte: true,
                        trigger: {
                            player: 'useCard2',
                        },
                        forced: true,
                        popup: false,
                        filter(event, player) {
                            return event.skill == 'haitu_Lskill';
                        },
                        content() {
                            var next = game.createEvent('haitu_Lskill');
                            next.player = player;
                            next.setContent(lib.skill.haitu_Lskill_change.content);
                        },
                    },
                    change: {
                        forced: true,
                        silent: true,
                        charlotte: true,
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        silent: true,
                        forced: true,
                        filter(event, player) {
                            if (event.name == 'gain' && event.player == player) return player.countCards('h') > player.storage.haitu_Lskill;
                            var evt = event.getl(player);
                            if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= player.storage.haitu_Lskill) return false;
                            var evt = event;
                            for (var i = 0; i < player.storage.haitu_Lskill; i++) {
                                evt = evt.getParent('haitu_Lskill_change');
                                if (evt.name != 'haitu_Lskill_change') return true;
                            }
                            return false;
                        },
                        content() {
                            var num = player.storage.haitu_Lskill - player.countCards('h');
                            if (num == 0) {
                                event.finish();
                            }
                            if (num > 0) player.draw(num);
                            else player.chooseToDiscard('h', true, -num);
                        },
                    },
                    delete: {
                        trigger: {
                            global: 'phaseEnd',
                        },
                        forced: true,
                        silent: true,
                        charlotte: true,
                        popup: false,
                        content() {
                            player.storage.haitu_Lskill = 0;
                        },
                    },
                },
                ai: {
                    threaten: 1.5,
                    basic: {
                        useful(card, i) {
                            if (_status.event.player.hp > 1) {
                                if (i === 0) return 4;
                                return 1;
                            }
                            if (i === 0) return 7.3;
                            return 3;
                        },
                        value(card, player, i) {
                            if (player.hp > 1) {
                                if (i === 0) return 5;
                                return 1;
                            }
                            if (i === 0) return 7.3;
                            return 3;
                        },
                    },
                    order() {
                        if (_status.event.dying) return 0.1;
                        return 9;
                    },
                    result: {
                        target(player, target, card) {
                            if (target && target.isDying()) return 2;
                            if (!target || target._jiu_temp || !target.isPhaseUsing()) return 0;
                            let usable = target.getCardUsable('sha');
                            if (!usable || (lib.config.mode === 'stone' && !player.isMin() && player.getActCount() + 1 >= player.actcount) || !target.mayHaveSha(player, 'use', card)) return 0;
                            let effs = { order: 0 },
                                temp;
                            target.getCards('hs', (i) => {
                                if (i.name !== 'sha' || ui.selected.cards.includes(i)) return false;
                                temp = get.order(i, target);
                                if (temp < effs.order) return false;
                                if (temp > effs.order) effs = { order: temp };
                                effs[i.cardid] = {
                                    card: i,
                                    target: null,
                                    eff: 0,
                                };
                            });
                            delete effs.order;
                            for (var i in effs) {
                                if (!lib.filter.filterCard(effs[i].card, target)) continue;
                                game.filterPlayer((current) => {
                                    if (
                                        get.attitude(target, current) >= 0 ||
                                        !target.canUse(effs[i].card, current, null, true) ||
                                        current.hasSkillTag('filterDamage', null, {
                                            player: target,
                                            card: effs[i].card,
                                            jiu: true,
                                        })
                                    )
                                        return false;
                                    temp = get.effect(current, effs[i].card, target, player);
                                    if (temp <= effs[i].eff) return false;
                                    effs[i].target = current;
                                    effs[i].eff = temp;
                                    return false;
                                });
                                if (!effs[i].target) continue;
                                if (
                                    target.hasSkillTag(
                                        'directHit_ai',
                                        true,
                                        {
                                            target: effs[i].target,
                                            card: i,
                                        },
                                        true
                                    ) ||
                                    (usable === 1 &&
                                        (target.needsToDiscard() > Math.max(0, 3 - target.hp) ||
                                            !effs[i].target.mayHaveShan(
                                                player,
                                                'use',
                                                effs[i].target.getCards((i) => {
                                                    return i.hasGaintag('sha_notshan');
                                                })
                                            )))
                                ) {
                                    delete target._jiu_temp;
                                    return 1;
                                }
                            }
                            delete target._jiu_temp;
                            return 0;
                        },
                    },
                    tag: {
                        save: 1,
                        recover: 0.1,
                    },
                },
            },
            haitu_shencan: {
                init(player) {
                    player.disableEquip(3);
                    player.disableEquip(4);
                },
                ai: {
                    threaten: 0.5,
                    neg: true,
                },
            },
            haitu_re_zhongbai: {
                global: ['haitu_re_zhongbai_mark', 'haitu_re_zhongbai_clear'],
                subSkill: {
                    clear: {
                        charlotte: true,
                        forced: true,
                        silent: true,
                        trigger: {
                            global: 'phaseEnd',
                        },
                        forced: true,
                        silent: true,
                        charlotte: true,
                        popup: false,
                        content() {
                            player.storage.haitu_re_zhongbai_mark = [];
                        },
                        _priority: 1,
                    },
                    mark: {
                        charlotte: true,
                        forced: true,
                        silent: true,
                        trigger: {
                            player: 'useCard2',
                        },
                        content() {
                            if (!player.storage.haitu_re_zhongbai_mark) {
                                player.storage.haitu_re_zhongbai_mark = [];
                            }
                            player.storage.haitu_re_zhongbai_mark.add(trigger.card.suit);
                        },
                    },
                },
                mod: {
                    cardUsable(card, player) {
                        if (player.storage.haitu_re_zhongbai_mark) {
                            if (!player.getStorage('haitu_re_zhongbai_mark').includes('heart') && card.suit == 'heart') return Infinity;
                            if (!player.getStorage('haitu_re_zhongbai_mark').includes('spade') && card.suit == 'spade') return Infinity;
                            if (!player.getStorage('haitu_re_zhongbai_mark').includes('diamond') && card.suit == 'diamond') return Infinity;
                            if (!player.getStorage('haitu_re_zhongbai_mark').includes('club') && card.suit == 'club') return Infinity;
                        } else {
                            return Infinity;
                        }
                    },
                    targetInRange(card, player) {
                        if (player.storage.haitu_re_zhongbai_mark) {
                            if (!player.getStorage('haitu_re_zhongbai_mark').includes('heart') && card.suit == 'heart') return true;
                            if (!player.getStorage('haitu_re_zhongbai_mark').includes('spade') && card.suit == 'spade') return true;
                            if (!player.getStorage('haitu_re_zhongbai_mark').includes('diamond') && card.suit == 'diamond') return true;
                            if (!player.getStorage('haitu_re_zhongbai_mark').includes('club') && card.suit == 'club') return true;
                        } else {
                            return true;
                        }
                    },
                },
            },
            haitu_shengyan: {
                trigger: {
                    source: 'damageSource',
                },
                filter(event, player) {
                    if (event.player == player) return false;
                    return event.nature == 'fire';
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                prompt(event, player) {
                    return '是否对' + get.translation(event.player) + '发动圣炎？';
                },
                content() {
                    'step 0';
                    player.judge();
                    ('step 1');
                    event.color = result.color;
                    if (event.color == 'black') {
                    }
                    if (event.color == 'red') {
                        event.goto(4);
                    }
                    ('step 2');
                    event.choices = [];
                    for (var i = 1; i <= 5; i++) {
                        if (!trigger.player.isDisabled(i)) {
                            event.choices.push('equip' + i);
                        }
                    }
                    if (event.choices && event.choices != []) {
                        player
                            .chooseControl(event.choices)
                            .set('prompt', '请选择你要废除' + get.translation(trigger.player) + '的装备栏')
                            .set('ai', function () {
                                for (var c of event.choices) {
                                    if (c == 'equip1') return c;
                                    if (
                                        trigger.player.hasCard(function (card) {
                                            return get.subtype(card) == c;
                                        }, 'e')
                                    ) {
                                        return c;
                                    }
                                }
                                return event.choices.randomGet();
                            });
                    }
                    ('step 3');
                    if (result && result.control) {
                        trigger.player.disableEquip(result.control);
                        event.finish();
                    }
                    event.finish();
                    ('step 4');
                    player
                        .chooseTarget('令一名角色回复一点体力', false, function (card, player, target) {
                            return !target.isHealthy();
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return get.effect(target, { name: 'tao' }, player, player);
                        });
                    ('step 5');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        target.recover();
                    }
                },
            },
            haitu_yixu: {
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return true;
                },
                selectTarget: 2,
                limited: true,
                filter(event, player) {
                    return game.players.length > 2;
                },
                multitarget: true,
                multiline: true,
                changeSeat: true,
                contentBefore() {
                    player.$fullscreenpop('易序', 'fire');
                },
                content() {
                    player.awakenSkill('haitu_yixu');
                    game.broadcastAll(
                        function (target1, target2) {
                            game.swapSeat(target1, target2);
                        },
                        targets[0],
                        targets[1]
                    );
                },
                ai: {
                    order() {
                        return get.order({ name: 'tao' }) + 1;
                    },
                    result: {
                        target(player, target) {
                            if (player.hasUnknown() && target != player.next && target != player.previous) return 0;
                            var distance = Math.pow(get.distance(player, target, 'absolute'), 2);
                            if (!ui.selected.targets.length) return distance;
                            var distance2 = Math.pow(get.distance(player, ui.selected.targets[0], 'absolute'), 2);
                            return Math.min(0, distance - distance2);
                        },
                    },
                },
                markimage: 'extension/OLUI/image/player/marks/xiandingji.png',
                mark: true,
                intro: {
                    content: 'limited',
                },
                init: (player, skill) => (player.storage[skill] = false),
            },
            bingpotong: {},
            haitu_xiaoqiao: {
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (player == target) {
                            return true;
                        } else {
                            return true;
                        }
                    },
                    selectTarget(card, player, range) {
                        //if(range[1]==-1) return;
                        var type = get.type(card);
                        var info = get.info(card);
                        {
                            if (info.notarget) return;
                            if (info.multitarget) return;
                            range[0] = 1;
                            if (range[1] != 1) {
                                range[1] = 1;
                            } else range[1] += 0;
                        }
                        if (type == 'equip' || type == 'delay') {
                            if (info.notarget) return;
                            if (info.multitarget) return;
                            range[0] = 1;
                            range[1] = 1;
                        }
                    },
                    trigger: {
                        player: ['chooseToUseBefore', 'chooseUseTargetBefore'],
                    },
                    ai: {
                        jiuOther: true,
                    },
                    init(player, skill) {
                        lib.card.tao.enable = function (card, player, event) {
                            if (player.hp < player.maxHp) return true;
                            var range = [-1, -1];
                            game.checkMod(card, player, range, 'selectTarget', player);
                            if (range[0] == 1) return true;
                            return false;
                        };
                    },
                    filter(event, player) {
                        if (event.name == 'chooseUseTarget') {
                            if (event.targets.length == game.players.length && !event.filterTarget) return true;
                            return false;
                        }
                        return event.filterTarget && event.filterTarget == lib.filter.filterTarget;
                    },
                    charlotte: true,
                    firstDo: true,
                    popup: false,
                    targetInRange(card, player) {
                        return true;
                    },
                },
                forced: true,
                group: 'haitu_xiaoqiao_legal',
                subSkill: {
                    legal: {
                        forced: true,
                        trigger: {
                            player: ['chooseToUseBefore', 'chooseUseTargetBefore'],
                        },
                        ai: {
                            jiuOther: true,
                        },
                        init(player, skill) {
                            lib.card.tao.enable = function (card, player, event) {
                                if (player.hp < player.maxHp) return true;
                                var range = [-1, -1];
                                game.checkMod(card, player, range, 'selectTarget', player);
                                if (range[0] == 1) return true;
                                return false;
                            };
                        },
                        filter(event, player) {
                            if (event.name == 'chooseUseTarget') {
                                if (event.targets.length == game.players.length && !event.filterTarget) return true;
                                return false;
                            }
                            return event.filterTarget && event.filterTarget == lib.filter.filterTarget;
                        },
                        charlotte: true,
                        firstDo: true,
                        popup: false,
                        forced: true,
                        content() {
                            if (event.name == 'chooseUseTarget') {
                                trigger.set('filterTarget', function (card, player, target) {
                                    if (!_status.event.targets.includes(target)) return false;
                                    if (!card) return false;
                                    if (_status.event.nodistance && lib.filter.targetEnabledx(card, player, target)) return true;
                                    if (lib.filter.filterTarget(card, player, target)) return true;
                                    if (game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player) == false) return false;
                                    var mod = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
                                    if (mod === false) return false;
                                    if (mod === true) return true;
                                    var filter = get.info(card).modTarget;
                                    if (typeof filter == 'boolean') return filter;
                                    if (typeof filter == 'function') return filter(card, player, target);
                                    return false;
                                });
                            } else {
                                trigger.set('filterTarget', function (card, player, target) {
                                    if (!card) return false;
                                    if (lib.filter.filterTarget(card, player, target)) return true;
                                    if (game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player) == false) return false;
                                    var mod = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
                                    if (mod === false) return false;
                                    if (mod === true) return true;
                                    var filter = get.info(card).modTarget;
                                    if (typeof filter == 'boolean') return filter;
                                    if (typeof filter == 'function') return filter(card, player, target);
                                    return false;
                                });
                            }
                        },
                    },
                },
                filter(event, player) {
                    return player == event.player && get.type(event.card, 'equip') == 'equip';
                },
                content() {
                    'step 0';
                    player.storage.haitu_xiaoqiao_skill = [];
                    player.removeAdditionalSkill('haitu_xiaoqiao');
                    trigger.cancel();
                    ('step 1');
                    var list = [];
                    if (!player.hasSkill('yuruyi')) {
                        list.add('yuruyi');
                    }
                    if (!player.hasSkill('bagua_skill')) {
                        list.add('bagua_skill');
                    }
                    if (!player.hasSkill('renwang_skill')) {
                        list.add('renwang_skill');
                    }
                    if (!player.hasSkill('zhangba_skill')) {
                        list.add('zhangba_skill');
                    }
                    if (!player.hasSkill('zhuge_skill')) {
                        list.add('zhuge_skill');
                    }
                    if (!player.hasSkill('dinglanyemingzhu_skill')) {
                        list.add('dinglanyemingzhu_skill');
                    }
                    if (!player.hasSkill('longfan')) {
                        list.add('longfan');
                    }
                    if (!player.hasSkill('cixiong_skill')) {
                        list.add('cixiong_skill');
                    }
                    if (!player.hasSkill('chixueqingfeng')) {
                        list.add('chixueqingfeng');
                    }
                    if (!player.hasSkill('qilin_skill')) {
                        list.add('qilin_skill');
                    }
                    if (!player.hasSkill('kamome_suitcase')) {
                        list.add('kamome_suitcase');
                    }
                    if (!player.hasSkill('jiuwei')) {
                        list.add('jiuwei');
                    }
                    if (!player.hasSkill('pyzhuren_club')) {
                        list.add('pyzhuren_club');
                    }
                    var skills = list.randomGets(3);
                    if (!skills.length) {
                        event.finish();
                        return;
                    }
                    player
                        .chooseControl(skills)
                        .set(
                            'choiceList',
                            skills.map(function (i) {
                                return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                            })
                        )
                        .set('displayIndex', false)
                        .set('prompt', '请选择获得的技能');
                    ('step 2');
                    player.addAdditionalSkill('haitu_xiaoqiao', result.control);
                    player.popup(result.control);
                    player.storage.haitu_xiaoqiao_skill = result.control;
                },
            },
            haitu_hualiao: {
                trigger: {
                    player: ['damageEnd', 'phaseJieshuBegin'],
                    source: 'damageSource',
                },
                global: 'haitu_hualiao_view',
                subSkill: {
                    view: {
                        charlotte: true,
                        mark: true,
                        init(player) {
                            player.markSkill('haitu_hualiao_view');
                        },
                        marktext: '邮',
                        intro: {
                            content(num, player, storage) {
                                var str = '不会通过【魔法邮票】获得的效果:';
                                if (player.storage.haitu_post_buff1) {
                                    str += '<br><li>执行"升天"奇数效果.';
                                }
                                if (player.storage.haitu_post_buff2) {
                                    str += '<br><span class=\"firetext\"><li>执行"升天"偶数效果.</span>';
                                }
                                if (player.storage.haitu_post_buff3) {
                                    str += '<br><li>视为使用一张普通锦囊牌.';
                                }
                                if (player.storage.haitu_post_buff4) {
                                    str += '<br><span class=\"firetext\"><li>非锁定技失效至其回合结束.</span>';
                                }
                                if (player.storage.haitu_post_buff5) {
                                    str += '<br><li>摸X张牌并将手牌弃至X张(X为其体力上限且至多为5).';
                                }
                                if (player.storage.haitu_post_buff6) {
                                    str += '<br><span class=\"firetext\"><li>进入混乱状态至其回合结束.</span>';
                                }
                                return str;
                            },
                        },
                    },
                },
                forced: true,
                filterTarget(card, player, target) {
                    return target.storage.haitu_post_buff1 != true || target.storage.haitu_post_buff2 != true || target.storage.haitu_post_buff3 != true || target.storage.haitu_post_buff4 != true || target.storage.haitu_post_buff5 != true || target.storage.haitu_post_buff6 != true;
                },
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current.storage.haitu_post_buff1 != true || current.storage.haitu_post_buff2 != true || current.storage.haitu_post_buff3 != true || current.storage.haitu_post_buff4 != true || current.storage.haitu_post_buff5 != true || current.storage.haitu_post_buff6 != true;
                    });
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget(lib.skill.haitu_hualiao.filterTarget, get.prompt('haitu_hualiao'), '控制一名角色【魔法邮票】的效果.', function (card, player, target) {
                            return target.storage.haitu_post_buff1 != true || target.storage.haitu_post_buff2 != true || target.storage.haitu_post_buff3 != true || target.storage.haitu_post_buff4 != true || target.storage.haitu_post_buff5 != true || target.storage.haitu_post_buff6 != true;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            var num = 1;
                            if (get.attitude(player, target) > 0) {
                                if (target.storage.haitu_post_buff1) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff3) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff5) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff2) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff4) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff6) {
                                    num -= 1;
                                }
                            }
                            if (get.attitude(player, target) < 0) {
                                if (target.storage.haitu_post_buff1) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff3) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff5) {
                                    num -= 1;
                                }
                                if (target.storage.haitu_post_buff2) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff4) {
                                    num += 1;
                                }
                                if (target.storage.haitu_post_buff6) {
                                    num += 1;
                                }
                            }
                            return num;
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets[0];
                        event.target.addSkill('haitu_hualiao_view');
                        var list = [],
                            choices = [];
                        if (!event.target.storage.haitu_post_buff1) {
                            list.add('效果1');
                            choices.push('效果1:执行一次"升天"奇数效果.');
                        }
                        if (!event.target.storage.haitu_post_buff2) {
                            list.add('效果2');
                            choices.push('<span class=\"firetext\">效果2:执行一次"升天"偶数效果.</span>');
                        }
                        if (!event.target.storage.haitu_post_buff3) {
                            list.add('效果3');
                            choices.push('效果3:视为使用一张普通锦囊牌.');
                        }
                        if (!event.target.storage.haitu_post_buff4) {
                            list.add('效果4');
                            choices.push('<span class=\"firetext\">效果4:非锁定技失效直至其回合结束.</span>');
                        }
                        if (!event.target.storage.haitu_post_buff5) {
                            list.add('效果5');
                            choices.push('效果5:摸X张牌并将手牌弃至X张.(X为其体力上限且至多为5)');
                        }
                        if (!event.target.storage.haitu_post_buff6) {
                            list.add('效果6');
                            choices.push('<span class=\"firetext\">效果6:进入混乱状态直至其回合结束.</span>');
                        }
                        player
                            .chooseControl(list)
                            .set('choiceList', choices)
                            .set('prompt', '选择一项令' + get.translation(event.target) + '暂时无法获得.')
                            .set('ai', function () {
                                var list = _status.event.controls;
                                var player = _status.event.player;
                                var target = event.target; //QQQ
                                if (list.includes('效果1') && get.attitude(player, target) < 0) return '效果1';
                                if (list.includes('效果2') && get.attitude(player, target) > 0) return '效果2';
                                if (list.includes('效果3') && get.attitude(player, target) < 0) return '效果3';
                                if (list.includes('效果4') && get.attitude(player, target) > 0) return '效果4';
                                if (list.includes('效果5') && get.attitude(player, target) < 0) return '效果5';
                                if (list.includes('效果6') && get.attitude(player, target) > 0) return '效果6';
                            });
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.control == '效果1') {
                        event.target.storage.haitu_post_buff1 = true;
                    }
                    if (result.control == '效果2') {
                        event.target.storage.haitu_post_buff2 = true;
                    }
                    if (result.control == '效果3') {
                        event.target.storage.haitu_post_buff3 = true;
                    }
                    if (result.control == '效果4') {
                        event.target.storage.haitu_post_buff4 = true;
                    }
                    if (result.control == '效果5') {
                        event.target.storage.haitu_post_buff5 = true;
                    }
                    if (result.control == '效果6') {
                        event.target.storage.haitu_post_buff6 = true;
                    }
                    event.target.update();
                    ('step 3');
                    event.num1 = 0;
                    event.num2 = 0;
                    if (event.target.storage.haitu_post_buff1) {
                        event.num1 += 1;
                    }
                    if (event.target.storage.haitu_post_buff3) {
                        event.num1 += 1;
                    }
                    if (event.target.storage.haitu_post_buff5) {
                        event.num1 += 1;
                    }
                    if (event.target.storage.haitu_post_buff2) {
                        event.num2 += 1;
                    }
                    if (event.target.storage.haitu_post_buff4) {
                        event.num2 += 1;
                    }
                    if (event.target.storage.haitu_post_buff6) {
                        event.num2 += 1;
                    }
                    ('step 4');
                    if (event.num1 > event.num2) {
                        var cards = [];
                        var card = get.cardPile2(function (card) {
                            return get.color(card) == 'black';
                        });
                        if (card) cards.push(card);
                        if (cards.length) player.gain(cards, 'gain2');
                    }
                    ('step 5');
                    if (event.num1 < event.num2) {
                        var cards = [];
                        var card = get.cardPile2(function (card) {
                            return get.color(card) == 'red';
                        });
                        if (card) cards.push(card);
                        if (cards.length) player.gain(cards, 'gain2');
                    }
                    ('step 6');
                    if (event.num1 == event.num2) {
                        var cards = [];
                        var card = get.cardPile2(function (card) {
                            return get.color(card) == 'black';
                        });
                        if (card) cards.push(card);
                        if (cards.length) player.gain(cards, 'gain2');
                        var cards1 = [];
                        var card2 = get.cardPile2(function (card) {
                            return get.color(card) == 'red';
                        });
                        if (card2) cards1.push(card2);
                        if (cards1.length) {
                            player.gain(cards1, 'gain2');
                        }
                    }
                },
            },
            haitu_tianjia: {
                mark: true,
                fixed: true,
                silent: true,
                enable: 'phaseUse',
                name: '添加技能',
                content() {
                    {
                        game.createEvent('taofa', true).setContent(function () {
                            var next = game.createEvent('taofa');
                            next.player = game.me;
                            next.target = target;
                            next.setContent(lib.skill.xin_guaiwuzhizao.content);
                        }).player = game.me;
                    }
                    if (_status.imchoosing) {
                        delete _status.event._cardChoice;
                        delete _status.event._targetChoice;
                        game.check();
                    }
                },
                marktext: '添',
                charlotte: true,
                intro: {
                    mark(dialog, content, player) {
                        if (player.isUnderControl(true)) {
                            if (_status.gameStarted) {
                                dialog.add(
                                    ui.create.div('.menubutton.pointerdiv', '点击发动', function () {
                                        if (!this.disabled) {
                                            this.disabled = true;
                                            this.classList.add('disabled');
                                            this.style.opacity = 0.5;
                                            lib.skill.haitu_tianjia.clickable(player);
                                        }
                                    })
                                );
                            }
                        }
                    },
                },
                clickable(dialog, content, player) {
                    {
                        game.createEvent('taofa', false).setContent(function () {
                            var next = game.createEvent('taofa');
                            next.player = game.me;
                            next.target = target;
                            next.setContent(lib.skill.xin_guaiwuzhizao.content);
                        }).player = game.me;
                    }
                    if (_status.imchoosing) {
                        delete _status.event._cardChoice;
                        delete _status.event._targetChoice;
                        game.check();
                    }
                },
            },
            haitu_cancel: {
                init(player) {
                    player.removeSkill('haitu_cancel');
                    var a = window.setInterval(function () {
                        if (player.hasSkill('haitu_cancel')) {
                            player.removeSkill('haitu_cancel');
                            window.clearInterval(a);
                        }
                    }, 1000);
                },
            },
            haitu_revolute: {
                trigger: {
                    player: ['useCard'],
                },
                forced: true,
                zhuanhuanji: true,
                mark: true,
                marktext: '☯',
                intro: {
                    content(storage, player, skill) {
                        if (player.getStat('triggerSkill').haitu_revolute && player.getStat('triggerSkill').haitu_revolute >= 1) {
                            event.num = player.getStat('triggerSkill').haitu_revolute + 1;
                        } else {
                            event.num = 1;
                        }
                        var str = player.storage.haitu_revolute ? '当你使用牌时,你可以弃置' + get.translation(event.num) + '张牌,令此牌额外结算一次.' : '当你使用牌时,你可以摸' + get.translation(event.num) + '张牌,取消此牌所有目标.';
                        return str;
                    },
                },
                filter(event, player) {
                    if (!event.targets.length) return false;
                    event.num = 1;
                    if (player.getStat('triggerSkill').haitu_revolute && player.getStat('triggerSkill').haitu_revolute >= 0) {
                        event.num = player.getStat('triggerSkill').haitu_revolute;
                    }
                    return player.countCards('he') >= event.num;
                },
                usable: Infinity,
                init(player) {
                    if (!player.storage.haitu_revolute) {
                        player.storage.haitu_revolute = true;
                    }
                },
                content() {
                    'step 0';
                    if (player.getStat('triggerSkill').haitu_revolute && player.getStat('triggerSkill').haitu_revolute >= 1) {
                        event.num = player.getStat('triggerSkill').haitu_revolute;
                    } else {
                        event.num = 1;
                    }
                    if (player.storage.haitu_revolute == true) {
                        player.chooseCard('he', false, event.num, '你可以弃置' + get.translation(event.num) + '张牌以令' + get.translation(trigger.card) + '多结算一次', lib.filter.cardrecastable);
                    } else {
                        event.goto(2);
                    }
                    ('step 1');
                    if (result.bool == false) {
                        player.getStat('triggerSkill').haitu_revolute--;
                        event.finish();
                    } else {
                        player.changeZhuanhuanji('haitu_revolute');
                        player.update();
                        player.discard(result.cards);
                        trigger.effectCount++;
                        event.finish();
                    }
                    ('step 2');
                    player.chooseBool('是否摸' + get.translation(event.num) + '张牌以令' + get.translation(trigger.card) + '无效');
                    ('step 3');
                    if (result.bool) {
                        player.changeZhuanhuanji('haitu_revolute');
                        player.update();
                        player.draw(event.num);
                        trigger.targets.length = 0;
                        trigger.all_excluded = true;
                    } else {
                        player.getStat('triggerSkill').haitu_revolute--;
                    }
                },
            },
            haitu_jifu: {
                zhuanhuanji: true,
                mark: true,
                marktext: '☯',
                intro: {
                    content(storage, player, skill) {
                        event.num = Math.min(5, player.getStat('skill').haitushiqu);
                        var str = player.storage.haitu_jifu ? '出牌阶段限一次,你可以将手牌摸至' + get.translation(event.num) + '张.' : '出牌阶段限一次,你可以将手牌弃至' + get.translation(event.num) + '张.';
                        return str;
                    },
                },
                enable: 'phaseUse',
                usable: 1,
                global: 'haitushiqu',
                filter(event, player) {
                    if (player.storage.haitu_jifu == true) {
                        return player.countCards('h') < player.getStat('skill').haitushiqu;
                    } else {
                        return player.countCards('h') > player.getStat('skill').haitushiqu;
                    }
                },
                content() {
                    'step 0';
                    if (player.storage.haitu_jifu == true) {
                        player.drawTo(Math.min(5, player.getStat('skill').haitushiqu));
                    } else {
                        player.chooseToDiscard('h', true, player.countCards('h') - Math.min(5, player.getStat('skill').haitushiqu));
                    }
                    player.changeZhuanhuanji('haitu_jifu');
                },
            },
            haitu_rebenghai: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                subSkill: {
                    spade: {
                        charlotte: true,
                        mod: {
                            cardname(card, player, name) {
                                if (card.suit == 'spade') return 'sha';
                            },
                            cardnature(card, player) {
                                if (card.suit == 'spade') return 'ice';
                            },
                        },
                    },
                    diamond: {
                        charlotte: true,
                        mod: {
                            cardname(card, player, name) {
                                if (card.suit == 'diamond') return 'huogong';
                            },
                        },
                    },
                    club: {
                        charlotte: true,
                        mod: {
                            cardname(card, player, name) {
                                if (card.suit == 'club') return 'shuiyanqijunx';
                            },
                        },
                    },
                },
                content() {
                    'step 0';
                    if (trigger.cards[0].suit == 'spade' && !player.hasSkill('haitu_rebenghai_spade')) {
                        player.addTempSkill('haitu_rebenghai_spade');
                        event.goto(2);
                    }
                    if (trigger.cards[0].suit == 'diamond' && !player.hasSkill('haitu_rebenghai_diamond')) {
                        player.addTempSkill('haitu_rebenghai_diamond');
                        event.goto(2);
                    }
                    if (trigger.cards[0].suit == 'club' && !player.hasSkill('haitu_rebenghai_club')) {
                        player.addTempSkill('haitu_rebenghai_club');
                        event.goto(2);
                    }
                    ('step 1');
                    event.finish();
                    ('step 2');
                },
            },
            haitu_dushi: {},
            haitu_hanchang: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'jiu') return Infinity;
                    },
                },
                global: 'haitu_hanchang_cancel',
                subSkill: {
                    cancel: {
                        forced: true,
                        trigger: {
                            player: 'jiu2Before',
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.triggername == 'phaseAfter' && event.player == player) return true;
                            return false;
                        },
                        content() {
                            trigger.cancel();
                        },
                    },
                },
            },
            haitu_cewai: {
                forced: true,
                mark: true,
                marktext: '册',
                trigger: {
                    player: 'useCardToPlayer',
                },
                filter(event, player) {
                    var suit = event.card.suit;
                    if (player.storage.haitu_cewai_view && player.storage.haitu_cewai_view.includes(suit)) return false;
                    if (event.targets.length != 1) return false;
                    if (!event.targets.length) return false;
                    return true;
                },
                intro: {
                    content: '手册本回合令行禁止的牌名:$',
                },
                subSkill: {
                    view: {
                        charlotte: true,
                        mark: true,
                        marktext: '外',
                        intro: {
                            content: '已使用花色:$',
                        },
                    },
                    delete: {
                        charlotte: true,
                        silent: true,
                        forced: true,
                        priority: 10000000,
                        trigger: {
                            global: ['phaseZhunbeiEnd', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd', 'phaseJieshuEnd'],
                        },
                        content() {
                            delete player.storage.haitu_cewai;
                            delete player.storage.haitu_cewai_view;
                        },
                    },
                },
                global: 'haitu_cewai_delete',
                content() {
                    'step 0';
                    const func = function (player, cardx, targetsx) {
                        player._shaitu_doumaouse = true;
                        player._shaitu_doumaouse3 = true;
                        let numx = 0;
                        for (var i of targetsx) {
                            numx += get.effect(i, cardx, player, player);
                        }
                        delete player._shaitu_doumaouse;
                        delete player._shaitu_doumaouse3;
                        return numx;
                    };
                    const result1 = func(trigger.player, trigger.card, trigger.targets);
                    const inpile = lib.inpile.filter(function (name) {
                        if (get.type(name) != 'trick' && get.type(name) != 'basic') return false;
                        if (player.storage.haitu_doumao && player.storage.haitu_doumao.includes(name)) return false;
                        const vcard = {
                            name: name,
                            suit: trigger.card.suit,
                            number: trigger.card.number,
                        };
                        let num = get.cardNameLength(trigger.card);
                        const info = get.info(vcard);
                        if (get.cardNameLength(vcard) != num) return false;
                        if (info.notarget) return false;
                        if (vcard.name == trigger.card.name) return false;
                        return true;
                    });
                    let text = get.prompt2('haitu_cewai');
                    player
                        .chooseVCardButton(inpile, text)
                        .set('ai', function (button) {
                            const name = button.link[2];
                            const player = _status.event.player;
                            const evt = _status.event._trigger;
                            const vcard = {
                                name: name,
                                suit: evt.card.suit,
                                number: evt.card.number,
                            };
                            const effect = _status.event.funcx(evt.player, vcard, evt.targets) - _status.event.aicheck;
                            //game.log("effectx",name,effect)//测试用//------------------//
                            return effect;
                        })
                        .set('aicheck', result1)
                        .set('_trigger', trigger)
                        .set('funcx', func);
                    ('step 1');
                    if (result.bool) {
                        if (trigger.card.name == 'sha') {
                            player.getStat().card.sha--;
                        }
                        const evt = trigger.parent;
                        const card = trigger.card;
                        event.card = card;
                        trigger.untrigger();
                        game.log(card, '改为了', result.links[0][2]);
                        card.name = result.links[0][2];
                        trigger.targets = trigger.targets.filter(function (i) {
                            var info = get.info(trigger.card);
                            if (info.notarget) return false;
                            return true;
                        });
                        if (!trigger.targets.length) {
                            trigger.all_excluded = true;
                            game.log(trigger.card, '不能合法结算!');
                        } else {
                        }
                        player.markAuto('haitu_cewai', [trigger.card.name]);
                        player.markAuto('haitu_cewai_view', [trigger.card.suit]);
                    }
                },
            },
            haitu_ruxi: {
                trigger: {
                    target: 'useCardToTarget',
                },
                forced: true,
                filter(event, player) {
                    if (!event.targets || !event.targets.includes(player)) return false;
                    var info = get.info(event.card);
                    if (info.type != 'character') return false;
                    if (info.multitarget) return false;
                    if (event.targets.length > 1) return true;
                    return true;
                },
                content() {
                    'step 0';
                    var num = trigger.card.number;
                    if (player.countCards('h') <= num) player.drawTo(Math.min(5, num));
                    else player.chooseToDiscard('h', true, player.countCards('h') - num);
                    ('step 1');
                    player.update();
                },
            },
            haitu_fuquan: {
                forced: true,
                mod: {
                    attackRangeBase(player, num) {
                        if (!player.getEquip(1)) {
                            return 0;
                        }
                    },
                },
                trigger: {
                    player: 'phaseDiscardBefore',
                },
                forced: true,
                filter(event, player) {
                    return !player.getEquip(1);
                },
                content() {
                    trigger.cancel();
                },
            },
            haitu_juzhu: {
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                filter(event, player) {
                    var card = get.cardPile2(function (card) {
                        return get.type(card) == 'character';
                    });
                    if (card) {
                        return false;
                    } else {
                        return true;
                    }
                },
                content() {
                    'step 0';
                    'step 1';
                    event.count = 2 * game.countPlayer();
                    ('step 2');
                    event.count--;
                    var current = game.expandSkills(player.getSkills());
                    var list = get.gainableSkills(function (info, skill, name) {
                        if (current.includes(skill)) return false;
                        return lib.character && lib.character[name];
                    });
                    if (!list.length) {
                        return;
                    }
                    var skill = list.randomGet();
                    var source = [];
                    for (var i in lib.character) {
                        if (lib.character[i][3].includes(skill)) {
                            source.push(i);
                        }
                    }
                    if (!source.length) {
                        return;
                    }
                    var name = source.randomGet();
                    var skills = [skill];
                    var nameskills = lib.character[name][3];
                    for (var i = 0; i < nameskills.length; i++) {
                        if (list.includes(nameskills[i])) {
                            skills.add(nameskills[i]);
                        }
                    }
                    game.addVideo('skill', player, ['haitu_juzhu', [skills, name]]);
                    lib.skill.haitu_juzhu.process(skills, name);
                    var num = [1, 2, 3, 4].randomGet(1),
                        suit = ['heart', 'club', 'diamond', 'spade'].randomGet(1);
                    var card = game.createCard(game.createCard('haitu_juzhu_' + name, suit, num));
                    ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    game.log(card, '洗入了牌堆!');
                    ('step 3');
                    if (event.count) event.goto(2);
                },
                process(skills, name) {
                    var cardname = 'haitu_juzhu_' + name;
                    lib.translate[cardname] = lib.translate[name];
                    lib.translate[cardname + '_info'] = '出牌阶段对一名角色使用,获得' + get.translation(name) + '的一个技能(替换前一个以此法获得的技能)';
                    lib.translate[cardname + '_append'] = '';
                    for (var i = 0; i < skills.length; i++) {
                        lib.translate[cardname + '_append'] += '<div class="skill">【' + lib.translate[skills[i]] + '】</div><div>' + get.skillInfoTranslation(skills[i]) + '</div>';
                        if (i < skills.length) {
                            lib.translate[cardname + '_append'] += '<br>';
                        }
                    }
                    lib.card[cardname] = lib.card[cardname] || {
                        enable(card, player) {
                            return true;
                        },
                        type: 'character',
                        image: 'character:' + name,
                        fullimage: true,
                        skills: skills,
                        filterTarget(card, player, target) {
                            return true;
                        },
                        selectTarget: 1,
                        content() {
                            'step 0';
                            var skill0 = target.storage.haitu_juzhu_card_skill;
                            target.removeSkill(skill0);
                            target.removeSkill('haitu_juzhu_card');
                            var list = lib.card[card.name].skills;
                            for (var i = 0; i < list.length; i++) {
                                if (target.hasSkill(list[i])) {
                                    list.splice(i--, 1);
                                }
                            }
                            if (!list.length) {
                                event.finish();
                                return;
                            }
                            {
                                player
                                    .chooseControl(list)
                                    .set(
                                        'choiceList',
                                        list.map(function (i) {
                                            return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                                        })
                                    )
                                    .set('displayIndex', false)
                                    .set('prompt', '请选择你要令' + get.translation(target) + '获得的技能')
                                    .set('ai', () => {
                                        var list = _status.event.controls.slice();
                                        return list.sort((a, b) => {
                                            return get.skillRank(b, 'in') - get.skillRank(a, 'in');
                                        })[0];
                                    });
                            }
                            ('step 1');
                            var skill = result.control;
                            if (!target.hasSkill(skill)) {
                                player.popup(skill);
                                target.$gain2(card);
                                target.removeSkill('haitu_juzhu_card');
                                target.storage.haitu_juzhu_card = card;
                                target.storage.haitu_juzhu_card_count = 1;
                                target.storage.haitu_juzhu_card_skill = skill;
                                target.addAdditionalSkill('haitu_juzhu_card', skill);
                                target.addSkill(skill);
                                target.addSkill('haitu_juzhu_card');
                                game.log(target, '获得技能', '【' + get.translation(skill) + '】');
                            }
                        },
                        ai: {
                            order() {
                                if (_status.event.player.hasSkill('haitu_juzhu_card')) return 1;
                                return 9;
                            },
                            result: {
                                target(player, target, card) {
                                    var num = card.number;
                                    if (target.hasSkill('haitu_ruxi')) return num - target.countCards('h');
                                    else {
                                        if (!target.hasSkill('haitu_juzhu_card') || target.needsToDiscard()) return 5;
                                    }
                                    return 0.1;
                                },
                            },
                        },
                    };
                },
                group: ['haitu_juzhu_onuse'],
                global: ['haitu_juzhu_die'],
                derivation: 'haitu_shuomingjuzhu',
                subSkill: {
                    die: {
                        silent: true,
                        forced: true,
                        charlotte: true,
                        trigger: {
                            player: 'dieBefore',
                        },
                        filter(event, player) {
                            return player.hasSkill('haitu_juzhu_card');
                        },
                        content() {
                            player.removeSkill('haitu_juzhu_card');
                        },
                    },
                    onuse: {
                        enable: ['chooseToUse'],
                        usable: 1,
                        filter(event, player) {
                            if (!player.isPhaseUsing()) return false;
                            return player.countCards('he', function (card) {
                                return true;
                            });
                        },
                        chooseButton: {
                            hiddenCard(player, name) {
                                if (get.type(name) == 'character') {
                                    return true;
                                }
                            },
                            dialog(event, player) {
                                'step 0';
                                var list = [];
                                for (var i in lib.card) {
                                    if (lib.card[i].type == 'character' && event.filterCard({ name: i }, player, event)) {
                                        list.add(i);
                                    }
                                }
                                ('step 1');
                                return ui.create.dialog('剧著', [list, 'vcard'], 'hidden');
                            },
                            filter(button, player) {
                                return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                            },
                            check(button) {
                                if (button.link[2] == 'shan') return 3;
                                var player = _status.event.player;
                                if (button.link[2] == 'jiu') {
                                    if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                                    if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                                }
                                return player.getUseValue({ name: button.link[2] });
                            },
                            backup(links, player) {
                                return {
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    filterCard(card, player) {
                                        return true;
                                    },
                                    popname: true,
                                    position: 'hes',
                                    viewAs: { name: links[0][2] },
                                    onuse(links, player) { },
                                };
                            },
                            prompt(links, player) {
                                return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                            },
                        },
                        ai: {
                            order(item, player) {
                                if (_status.event.type == 'phase') return 2;
                            },
                            result: {
                                player(player) {
                                    return 2;
                                },
                            },
                        },
                    },
                    card: {
                        mark: 'card',
                        charlotte: true,
                        onremove: ['haitu_juzhu_card', 'haitu_juzhu_card_skill'],
                        intro: {
                            content(storage, player) {
                                var skill = player.storage.haitu_juzhu_card_skill;
                                // var skill=storage.name.slice(8);
                                return '<div class="skill">【' + lib.translate[skill] + '】</div><div>' + get.skillInfoTranslation(skill) + '</div>';
                            },
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            haitu_yinjun: {
                filter(event, player) {
                    if (event.player == player) return false;
                    if (event.player.countCards('h') >= player.countCards('h')) return false;
                    return true;
                },
                trigger: {
                    global: 'phaseZhunbeiBegin',
                },
                check(event, player) {
                    if (event.player.countCards('h') <= 1 && get.attitude(player, event.player) > 0) {
                        return true;
                    }
                    if (event.player.countCards('h') <= 3 && get.attitude(player, event.player) < 0) {
                        return true;
                    }
                },
                subSkill: {
                    off: {
                        charlotte: true,
                        mod: {
                            attackRangeBase(player, num) {
                                {
                                    return 0;
                                }
                            },
                        },
                    },
                },
                logTarget: 'player',
                content() {
                    'step 0';
                    trigger.player.draw();
                    trigger.player.chooseToUse({
                        prompt: '引军',
                        prompt2: '是否对' + get.translation(player) + '使用一张杀？',
                        addCount: false,
                        complexSelect: true,
                        sourcex: player,
                        targetRequired: true,
                        filterCard(card, player, event) {
                            if (card.name != 'sha') return false;
                            return lib.filter.filterCard.apply(this, arguments);
                        },
                        filterTarget(card, player, target) {
                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                            return lib.filter.targetEnabled.apply(this, arguments);
                        },
                    });
                    ('step 1');
                    if (!result.bool) {
                        trigger.player.addTempSkill('haitu_yinjun_off');
                    }
                },
            },
            haitu_neiluan: {
                trigger: {
                    player: 'damageBegin1',
                    source: 'damageBegin1',
                },
                check(event, player) {
                    return true;
                },
                forced: true,
                content() {
                    'step 0';
                    var list = [];
                    event.count = 0;
                    game.countPlayer(function (current) {
                        if (current.inRange(player)) {
                            event.count += 1;
                        }
                    });
                    if (event.count >= 1) {
                        list.push('选项一');
                    }
                    list.push('选项二');
                    player
                        .chooseControl(list)
                        .set('prompt', '内乱:请选择一项')
                        .set('choiceList', ['摸' + get.translation(event.count) + '张牌', '随机获得牌堆或弃牌堆中一张装备牌'])
                        .set('ai', function () {
                            var list = _status.event.controls;
                            if (list.includes('选项二') && player.hasSkill('haitu_fuquan') && !player.getEquip(1)) return '选项二';
                            if (list.includes('选项一')) return '选项一';
                            return '选项二';
                        })
                        .set('prompt', '请选择一项');
                    ('step 1');
                    if (result.control == '选项一') {
                        player.draw(event.count);
                    } else {
                        var card = get.cardPile(function (card) {
                            return get.type(card) == 'equip';
                        });
                        if (card) player.gain(card, 'gain2');
                    }
                },
            },
            haitu_jigong: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                position: 'he',
                check(card) {
                    if (card.number >= 7) return 7 - get.value(card); //QQQ
                },
                content() {
                    'step 0';
                    event.card = cards[0];
                    event.num = cards[0].number;
                    event.suit = cards[0].suit;
                    event.type = get.type(cards[0]);
                    player.draw(event.num);
                    player.update();
                    ('step 1');
                    {
                        var cards = player.getCards('h', function (card) {
                            return get.type(card) != event.type;
                        });
                        if (cards) {
                            player.loseToDiscardpile(cards);
                        }
                    }
                },
                ai: {
                    order: 0.01,
                    result: {
                        player: 2,
                    },
                },
            },
            haitu_juzhen: {
                audio: 'ext:海国图志/audio:2',
                forced: true,
                group: ['haitu_juzhen_remove', 'haitu_juzhen_view'],
                subSkill: {
                    off: { charlotte: true, supercharlotte: true },
                    view: {
                        charlotte: true,
                        intro: {
                            content: '$',
                        },
                    },
                    remove: {
                        charlotte: true,
                        forced: true,
                        trigger: {
                            player: 'useCardAfter',
                        },
                        filter(event, player) {
                            if (!event.cards.length) return false;
                            event.num = event.card.number;
                            if (player.getStorage('haitu_juzhen_view').includes(event.num)) return false;
                            return !game.hasPlayer2((current) => {
                                return current.hasHistory('lose', (evt) => {
                                    return evt.parent == event && evt.hs.length;
                                });
                            });
                        },
                        content() {
                            event.num = trigger.card.number;
                            player.markAuto('haitu_juzhen_view', [event.num]);
                            game.log(player, '记录了', '#y' + get.translation(event.num));
                        },
                    },
                    clear: {
                        charlotte: true,
                        trigger: { global: 'roundStart' },
                        silent: true,
                        forced: true,
                        content() {
                            player.storage.haitu_juzhen = [];
                            player.update();
                        },
                    },
                },
                silent: true,
                trigger: {
                    target: 'useCardToTarget',
                },
                init(player) {
                    player.storage.haitu_juzhen = [];
                },
                filter(event, player) {
                    if (event.cards.length >= 2) return false;
                    if (!event.cards.length) return false;
                    return event.player != player;
                },
                content() {
                    'step 0';
                    event.num = trigger.card.number;
                    if (!trigger.cards.length || trigger.cards.length >= 2) {
                        event.num = 0;
                    }
                    ('step 1');
                    if (player.getStorage('haitu_juzhen_view').includes(event.num)) {
                        player.draw();
                        // var card=get.cardPile2(function(card){ return card.number==trigger.card.number;});
                        //  if(card){ player.gain(card,'gain2','log'); }else {player.say('没有合适的卡牌');}
                        player.unmarkAuto('haitu_juzhen_view', [event.num]);
                        game.log(player, '移除了', '#y' + get.translation(event.num));
                    }
                    //"step 2"
                    //if(player.getStorage('haitu_juzhen')!=[]&&
                    //    player.getStorage('haitu_juzhen').length>=event.num
                    // &&!player.hasSkill('haitu_juzhen_off')){event.goto(3);}else{event.finish();}
                    //                     "step 3"
                    //
                    //              player.storage.haitu_juzhen=[];
                    //              player.removeSkill('haitu_yuanjie_cancel');
                    //               player.removeSkill('haitu_yuanjie_cambo');
                    //             player.update();
                    //
                    //  {
                    //                 player.addTempSkill('haitu_juzhen_off');
                    //var next=player.phaseUse();
                    //event.next.remove(next);
                    //trigger.next.push(next);
                    //  }
                },
            },
            haitu_yuanjie: {
                audio: 'ext:海国图志/audio:2',
                trigger: {
                    player: 'useCardToPlayered',
                    target: 'useCardToTargeted',
                },
                subSkill: {
                    cambo: {
                        mark: true,
                        marktext: '源',
                        intro: {
                            name2: '源',
                            content(num, player, storage) {
                                str = '本回合已经发动过<源界>选项一';
                                return str;
                            },
                        },
                        usable: 1,
                        charlotte: true,
                    },
                    cancel: {
                        mark: true,
                        marktext: '界',
                        intro: {
                            name2: '界',
                            content(num, player, storage) {
                                str = '本回合已经发动过<源界>选项二';
                                return str;
                            },
                        },
                        usable: 1,
                        charlotte: true,
                    },
                },
                check(event, player) {
                    var card = event.card;
                    var num = card.number;
                    if (event.card.name == 'tao') {
                        return false;
                    }
                    if (event.target) {
                        if (event.player == player && event.card != 'tao' && !player.hasSkill('haitu_yuanjie_cambo', null, null, false)) {
                            return true;
                        }
                        if (event.player != player) {
                            if (event.card != 'tao' && !player.hasSkill('haitu_yuanjie_cancel', null, null, false)) {
                                return true;
                            }
                            if (get.attitude(player, event.target) < 0 && !player.hasSkill('haitu_yuanjie_cancel', null, null, false) && event.card.name == 'taoyuan') {
                                return true;
                            }
                            if (get.attitude(player, event.target) < 0 && !player.hasSkill('haitu_yuanjie_cancel', null, null, false) && event.card.name == 'wugu') {
                                return true;
                            }
                            return false;
                        }
                    }
                },
                filter(event, player) {
                    if (event.getParent(3).name == 'xumou_jsrg') return false;
                    if (player.hasSkill('haitu_yuanjie_cancel') && player.hasSkill('haitu_yuanjie_cambo')) return false;
                    if (event.target == event.player && event.name != 'useCardToTargeted') return false;
                    return event.targets.length == 1;
                },
                forced: true,
                content() {
                    'step 0';
                    var list = [];
                    if (!player.hasSkill('haitu_yuanjie_cambo', null, null, false)) {
                        list.push('连击');
                    }
                    if (!player.hasSkill('haitu_yuanjie_cancel', null, null, false)) {
                        list.push('蓄谋');
                    }
                    list.push('算了');
                    event.target = trigger.targets[0];
                    event.num = trigger.card.number;
                    player
                        .chooseControl(list)
                        .set('prompt', '是否取消针对' + get.translation(event.target) + '的' + get.translation(trigger.card) + ',并选择一项令' + get.translation(trigger.player) + '执行')
                        .set('ai', function () {
                            var list = _status.event.controls;
                            if (get.attitude(player, event.target) < 0 && list.includes('蓄谋') && trigger.card.name == 'taoyuan') {
                                return '蓄谋';
                            }
                            if (get.attitude(player, event.target) < 0 && list.includes('蓄谋') && trigger.card.name == 'wugu') {
                                return '蓄谋';
                            }
                            if (list.includes('蓄谋') && trigger.player != player && trigger.target == player && trigger.card != 'tao' && !player.hasSkill('haitu_yuanjie_cancel', null, null, false)) return '蓄谋';
                            if (list.includes('连击') && trigger.player == player && trigger.card != 'tao' && !player.hasSkill('haitu_yuanjie_cambo', null, null, false) && list.includes('连击') && trigger.target != player) return '连击';
                            return '算了';
                        });
                    ('step 1');
                    if (result.control == '算了') {
                        event.finish();
                    }
                    if (result.control == '蓄谋') {
                        trigger.targets.length = 0;
                        trigger.parent.triggeredTargets2.length = 0;
                        trigger.cancel();
                        trigger.player.addTempSkill('jsrgdaimou_other');
                        player.addTempSkill('haitu_yuanjie_cancel');
                        if (trigger.cards.length) {
                            for (var i of trigger.cards) {
                                trigger.player.addJudge({ name: 'xumou_jsrg' }, i);
                            }
                        }
                        event.finish();
                    }
                    if (result.control == '连击') {
                        trigger.targets.length = 0;
                        trigger.parent.triggeredTargets2.length = 0;
                        trigger.cancel();
                        player.update();
                        player.addTempSkill('haitu_yuanjie_cambo');
                    }
                    ('step 2');
                    var card = get.cardPile(function (x) {
                        {
                            return x.number <= event.num && trigger.player.canUse(x, event.target);
                        }
                    });
                    if (card) {
                        trigger.player.useCard(card, event.target, false);
                        var num = card.number;
                        event.num -= num;
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (event.num > 0) {
                        event.goto(2);
                    }
                },
            },
            haitu_re_tiaolv: {
                check(card) {
                    return 7 - get.value(card);
                },
                audio: 'haitu_tiaolv',
                enable: 'phaseUse',
                usable: 2,
                position: 'he',
                filter(event, player) {
                    return player.hasUseTarget('dongzhuxianji', true);
                },
                delay: false,
                discard: false,
                position: 'h',
                lose: false,
                filterCard(card, player) {
                    if (card.hasGaintag('haitu_re_tiaolv')) {
                        return false;
                    }
                    if (!ui.selected.cards.length) {
                        var name = card.name;
                        return (
                            player.countCards('he', function (card2) {
                                return card != card2 && card2.name == name;
                            }) > 0
                        );
                    }
                    if (ui.selected.cards.length == 1) {
                        if (card.name == ui.selected.cards[0].name) {
                            var c = 0;
                            for (var b of player.getCards('h')) {
                                if (b == ui.selected.cards[0]) c = 1;
                            }
                            for (var a = 0; a < player.getCards('h').length; a++) {
                                if (player.getCards('h')[a] == ui.selected.cards[0] && c == 1) {
                                    if (a == player.getCards('h').length - 1 && player.getCards('h')[a - 1]) {
                                        return card == player.getCards('h')[a - 1];
                                    }
                                    if (a == 0) {
                                        return card == player.getCards('h')[1];
                                    }
                                    if (player.getCards('h')[a - 1] && player.getCards('h')[a + 1]) {
                                        return card == player.getCards('h')[a - 1] || card == player.getCards('h')[a + 1];
                                    }
                                }
                            }
                        }
                    }
                },
                content() {
                    'step 0';
                    event.cards = cards;
                    player.showCards(cards);
                    game.broadcastAll(
                        function (cards) {
                            cards.forEach((card) => card.addGaintag('haitu_re_tiaolv'));
                        },
                        event.cards.filter((i) => get.owner(i) == player)
                    );
                    ('step 1');
                    game.broadcastAll(
                        function (player, cards) {
                            player
                                .chooseCard(
                                    '将一张展示牌当【洞烛先机】使用',
                                    'he',
                                    function (card) {
                                        return cards.includes(card);
                                    },
                                    true
                                )
                                .set('ai', function (card) {
                                    var dongzhuxianji = { name: 'dongzhuxianji' };
                                    return _status.event.player.getUseValue(dongzhuxianji);
                                });
                        },
                        player,
                        event.cards
                    );
                    ('step 2');
                    if (result.bool) {
                        if (player.hasUseTarget({ name: 'dongzhuxianji', cards: result.cards })) {
                            player.chooseUseTarget({ name: 'dongzhuxianji' }, result.cards, true, false).viewAs = true;
                        } else {
                            event.finish();
                        }
                    }
                },
                selectCard: 2,
                complexCard: true,
                ai: {
                    basic: {
                        order: 7.2,
                        useful: 4.5,
                        value: 9.2,
                    },
                    result: {
                        target: 2.5,
                    },
                    tag: {
                        draw: 2,
                    },
                },
            },
            haitu_shouhu: {
                subSkill: {
                    recover: {
                        charlotte: true,
                        mod: {
                            cardname(card, player) {
                                if (card.name == 'sha') return 'caoyao';
                            },
                        },
                    },
                    snap: {
                        charlotte: true,
                        mod: {
                            cardname(card, player) {
                                if (card.name == 'sha') return 'shujinsan';
                            },
                        },
                    },
                },
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                audio: 'ext:海国图志/audio:2',
                content() {
                    'step 0';
                    player
                        .chooseControl()
                        .set('prompt', '请选择一项')
                        .set('choiceList', ['令所有【杀】本阶段视为【草药】', '令所有【杀】本阶段视为【舒筋散】'])
                        .set('ai', function () {
                            var player = _status.event.player;
                            var list = _status.event.controls.slice(0);
                            var gett = function (choice) {
                                if (choice == 'cancel2') return 0.1;
                                var max = 0,
                                    func = {
                                        选项一(current) {
                                            if (current.isDamaged()) max = Math.max(max, get.recoverEffect(current, player, player));
                                        },
                                        选项二(target) {
                                            max = Math.max(max, get.effect(target, { name: 'shujinsan' }, player, player));
                                        },
                                    }[choice];
                                game.countPlayer(function (current) {
                                    func(current);
                                });
                                return max;
                            };
                            return list.sort(function (a, b) {
                                return gett(b) - gett(a);
                            })[0];
                        });
                    ('step 1');
                    if (result.index == 0) {
                        player.addTempSkill('haitu_shouhu_recover', ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore', 'phaseJieshuBefore', 'phaseBefore']);
                    }
                    if (result.index == 1) {
                        player.addTempSkill('haitu_shouhu_snap', ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore', 'phaseJieshuBefore', 'phaseBefore']);
                    }
                },
            },
            haitu_yuhe: {
                trigger: {
                    global: 'phaseAfter',
                },
                audio: 'ext:海国图志/audio:1',
                global: 'haitu_yuhe_count',
                init(player) {
                    game.addGlobalSkill('haitu_yuhe_count');
                },
                subSkill: {
                    count: {
                        charlotte: true,
                        trigger: {
                            global: 'phaseEnd',
                        },
                        silent: true,
                        forced: true,
                        content() {
                            if (player.storage.haitu_yuhe > 0) {
                                player.storage.haitu_yuhe -= 1;
                            }
                        },
                    },
                },
                forced: true,
                filterx: [null, null, null, null],
                filter(event, player) {
                    if (player.storage.haitu_yuhe > 0) {
                        return false;
                    } else {
                        return true;
                    }
                },
                content() {
                    'step 0';
                    var num = game.countPlayer(function (current) {
                        return current.isDamaged();
                    });
                    var list0 = [];
                    var choiceList = ['令一名角色回复1点体力.', '令一名角色摸一张牌.'];
                    {
                        if (num && num >= 1) {
                            list0.push('回复');
                        }
                        list0.push('摸牌');
                    }
                    list0.push('cancel2');
                    player
                        .chooseControl(list0)
                        .set('prompt', get.prompt('haitu_yuhe'))
                        .set('choiceList', choiceList)
                        .set('ai', function () {
                            var player = _status.event.player;
                            var list = _status.event.controls.slice(0);
                            var gett = function (choice) {
                                if (choice == 'cancel2') return 0.1;
                                var max = 0,
                                    func = {
                                        回复(current) {
                                            if (current.isDamaged()) max = Math.max(max, get.recoverEffect(current, player, player));
                                        },
                                        摸牌(target) {
                                            max = Math.max(max, get.effect(target, { name: 'jihuocard' }, player, player));
                                        },
                                    }[choice];
                                game.countPlayer(function (current) {
                                    func(current);
                                });
                                return max;
                            };
                            return list.sort(function (a, b) {
                                return gett(b) - gett(a);
                            })[0];
                        });
                    ('step 1');
                    if (result.control != 'cancel2') {
                        if (result.control == '回复') {
                            event.index = 0;
                            player
                                .chooseTarget('令一名角色回复一点体力', false, function (card, player, target) {
                                    return !target.isHealthy();
                                })
                                .set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.effect(target, { name: 'tao' }, player, player);
                                });
                        }
                        if (result.control == '摸牌') {
                            event.index = 1;
                            player
                                .chooseTarget('令一名角色摸牌', false, function (card, player, target) {
                                    return true;
                                })
                                .set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.effect(target, { name: 'jihuocard' }, player, player);
                                });
                        }
                    } else event.finish();
                    ('step 2');
                    if (result.bool) {
                        player.storage.haitu_yuhe = 3;
                        var target = result.targets[0];
                        if (event.index == 0) {
                            target.recover();
                        }
                        if (event.index == 1) {
                            target.draw(1);
                        }
                    }
                },
            },
            haitu_guangying: {
                mod: {
                    globalTo(from, to, distance) {
                        return distance + 1;
                    },
                    targetInRange(card, player) {
                        return true;
                    },
                },
            },
            haitu_yiwei: {
                enable: 'phaseUse',
                usable: 1,
                check(event, player) {
                    var cards = [];
                    player.getHistory('lose', function (evt) {
                        if (evt.type != 'discard') return false;
                        for (var i of evt.cards2) {
                            if (get.position(i, true) == 'd') {
                                cards.add(i);
                            }
                        }
                    });
                    if (!cards.length) return false;
                    return cards.length == player.getCards('h').length;
                },
                filter(event, player) {
                    var cards = [];
                    player.getHistory('lose', function (evt) {
                        if (evt.type != 'discard') return false;
                        for (var i of evt.cards2) {
                            if (get.position(i, true) == 'd') {
                                cards.add(i);
                            }
                        }
                    });
                    if (!cards.length) return false;
                    return true;
                },
                prompt2(event, player) {
                    var cards = [];
                    player.getHistory('lose', function (evt) {
                        if (evt.type != 'discard') return false;
                        for (var i of evt.cards2) {
                            if (get.position(i, true) == 'd') {
                                cards.add(i);
                            }
                        }
                    });
                    return '将' + get.translation(cards) + '(共计' + get.cnNumber(cards.length) + '张牌)与手牌交换';
                },
                content() {
                    'step 0';
                    player.storage.haitu_yiwei1 = 0;
                    player.storage.haitu_yiwei2 = 0;
                    var cards = [];
                    var hs = player.getCards('h');
                    event.num = hs.length;
                    player.storage.haitu_yiwei1 = event.num;
                    player.getHistory('lose', function (evt) {
                        if (evt.type != 'discard') return false;
                        for (var i of evt.cards2) {
                            if (get.position(i, true) == 'd') {
                                cards.add(i);
                                player.storage.haitu_yiwei2 += 1;
                            }
                        }
                    });
                    player.lose(hs, ui.discardPile);
                    game.log(hs, '进入了弃牌堆');
                    player.gain(cards, 'gain1', 'nolog');
                    if (player.storage.haitu_yiwei1 < player.storage.haitu_yiwei2) {
                        player.loseHp();
                    } else {
                        player.recover();
                    }
                    ('step 1');
                    player.drawTo(player.maxHp);
                },
                ai: {
                    order(item, player) {
                        if (player.hasCard((i) => get.value(i) > Math.max(6, 9 - player.hp), 'he')) return 1;
                        return 10;
                    },
                    result: {
                        player: 1,
                    },
                    nokeep: true,
                    skillTagFilter(player, tag, arg) {
                        if (tag === 'nokeep') return (!arg || (arg && arg.card && arg.card.name === 'tao')) && player.isPhaseUsing() && !player.getStat().skill.rezhiheng && player.hasCard((card) => card.name !== 'tao', 'h');
                    },
                },
            },
            haitu_tiaodou: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                filter(event, player) {
                    if (event.parent.triggeredTargets3.length > 1) return false;
                    if (event.target == player && event.targets.length < 1) return false;
                    return true;
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget(get.prompt('haitu_tiaodou'), '选择一名目标角色', function (card, player, target) {
                            return _status.event.targets.includes(target) && target.countCards('he') > 0 && target != player;
                        })
                        .set('ai', function (target) {
                            return 2 - get.attitude(_status.event.player, target);
                        })
                        .set('targets', trigger.targets);
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        var hs = target.getCards('he');
                        if (hs.length) {
                            var card = hs.randomGet();
                            var cardx = { name: 'guohe' };
                            if ((get.position(card) != 'j' && !game.checkMod(card, target, 'unchanged', 'cardEnabled2', target)) || !target.canUse(cardx, player, false)) event.finish();
                            else {
                                var next = target.useCard(cardx, [card], player, false);
                                event.card = next.card;
                            }
                        }
                    } else {
                        event.finish();
                    }
                    ('step 2');
                },
                forced: true,
            },
            haitu_suigeng: {
                group: 'haitu_suigeng_view',
                subSkill: {
                    view: {
                        markimage: 'extension/海国图志/image/other/haitu_suigeng.jpg',
                        notemp: true,
                        intro: {
                            content(num, player, storage, skill) {
                                var stat = player.getHistory('useCard').length;
                                if (player.getStat('skill').haituname) {
                                    var stat1 = player.getStat('skill').haituname;
                                }
                                var str = '<br><li>本回合已使用';
                                str += stat;
                                str += '张牌';
                                str += '<br><li>牌名字数总和为';
                                if (player.getStat('skill').haituname) {
                                    str += stat1;
                                } else {
                                    str += 0;
                                }
                                return str;
                            },
                        },
                    },
                    mark: { charlotte: true },
                    clear: {
                        charlotte: true,
                        trigger: {
                            global: 'phaseAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.getStat('skill').haituname = 0;
                        },
                    },
                    name: {
                        trigger: {
                            player: 'useCard2',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            if (!player.getStat('skill').haituname) {
                                player.getStat('skill').haituname = 0;
                            }
                            var num1 = get.cardNameLength(trigger.card);
                            player.getStat('skill').haituname += num1;
                        },
                        charlotte: true,
                        group: 'haitu_suigeng_clear',
                    },
                },
                mark: true,
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                zhuanhuanji: true,
                silent: true,
                forced: true,
                marktext: '☯',
                init(player) {
                    player.storage.haitu_suigeng = false;
                    game.addGlobalSkill('haitu_suigeng_name');
                    player.markSkill('haitu_suigeng_view');
                },
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.haitu_suigeng == false) {
                            return '结束阶段,你可以视为使用一张牌名字数为你本回合使用牌数的即时牌.';
                        } else return '结束阶段,你可以视为使用一张牌名字数为你本回合使用牌的牌名字数总和的即时牌.';
                    },
                },
                mod: {
                    maxHandcardBase(player, num) {
                        return num + player.countMark('haitu_suigeng_mark');
                    },
                },
                content() {
                    'step 0';
                    event.num = 0;
                    if (player.storage.haitu_suigeng != true) {
                        event.num += player.getHistory('useCard').length;
                    } else {
                        event.num += player.getStat('skill').haituname;
                    }
                    var list = [];
                    for (var i in lib.card) {
                        if (!lib.card[i].content) continue;
                        if (lib.card[i].mode && !lib.card[i].mode.includes(get.mode())) continue;
                        if (lib.card[i].type != 'equip' && lib.card[i].type != 'delay' && lib.translate[i] && lib.translate[i].length == event.num) {
                            list.add(i);
                        }
                    } //QQQ
                    if (list.length) {
                        player.chooseVCardButton('是否使用其中的一张牌？', list, prompt).set('ai', function (button) {
                            return _status.event.player.getUseValue({
                                name: button.link[2],
                            });
                        });
                    } else {
                        event.finish();
                    }
                    ('step 1');
                    if (result.bool) {
                        player.changeZhuanhuanji('haitu_suigeng');
                        player.addMark('haitu_suigeng_mark', 1);
                        player.chooseUseTarget(true, result.links[0][2], false);
                    }
                },
            },
            haitu_fnaf_changyuan: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                derivation: ['haitu_fnaf_ruyu', 'haitu_fnaf_yujie', 'haitu_fnaf_lingti', 'haitu_fnaf_qiongzhui'],
                init(player) {
                    var a = window.setInterval(function () {
                        if (player.countMark('haitu_fnaf_yejing_jeremy') >= 1 || player.countMark('haitu_fnaf_yejing_susie') >= 1 || player.countMark('haitu_fnaf_yejing_fritz') >= 1 || player.countMark('haitu_fnaf_yejing_gabriel') >= 1 || player.countMark('haitu_fnaf_yejing_bonnie') >= 1 || player.countMark('haitu_fnaf_yejing_chika') >= 1 || player.countMark('haitu_fnaf_yejing_foxy') >= 1 || player.countMark('haitu_fnaf_yejing_freddy') >= 1) {
                            if (player.name1 == 'haitu_fnaf_cassidy' || player.name2 == 'haitu_fnaf_cassidy') {
                                game.broadcastAll(function (player) {
                                    player.reinit('haitu_fnaf_cassidy', 'haitu_fnaf_hell', false);
                                }, player);
                                if (player.countMark('haitu_fnaf_yejing_hell') >= 1) {
                                    player.removeMark('haitu_fnaf_changyuan_cassidy', player.countMark('haitu_fnaf_changyuan_cassidy'));
                                }
                                player.addMark('haitu_fnaf_yejing_hell', 1);
                                player.unmarkSkill('haitu_fnaf_changyuan_cassidy');
                                window.clearInterval(a);
                            }
                        } else {
                        }
                    }, 1000);
                },
                forced: true,
                subSkill: {
                    cassidy: {
                        notemp: true,
                        charlotte: true,
                        name: '卡西迪',
                        markimage: 'extension/海国图志/image/other/cassidy.png',
                        intro: {
                            content(storage, player) {
                                var str = '<br><li>金熊(<span class=\"yellowtext\">未激活</span>)';
                                str += '<br><li>还不放下吗？你已经是三血无防了.';
                                str += '<br><li>特殊效果:当你失去最后的其他/获得复仇之灵时,你将此复仇之灵调整为未激活/激活并切换对应武将牌.';
                                str += '<br><li>对应技能:"逾界","灵体","穷追","濡狱"';
                                return str;
                            },
                        },
                    },
                },
                content() {
                    var list = [];
                    if (!player.hasSkill('haitu_fnaf_qiongzhui')) list.push('haitu_fnaf_qiongzhui');
                    if (!player.hasSkill('haitu_fnaf_lingti')) list.push('haitu_fnaf_lingti');
                    if (!player.hasSkill('haitu_fnaf_yujie')) list.push('haitu_fnaf_yujie');
                    if (!player.hasSkill('haitu_fnaf_ruyu')) list.push('haitu_fnaf_ruyu');
                    if (list.length) {
                        var skills = list.randomGets(2);
                        for (var i of skills) {
                            player.addTempSkill(i);
                        }
                    }
                },
            },
            haitu_fnaf_qihun: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                derivation: ['haitu_fnaf_xiezou', 'haitu_fnaf_xunshi', 'haitu_fnaf_hailie', 'haitu_fnaf_yidong', 'haitu_fnaf_ruyu', 'haitu_fnaf_yujie', 'haitu_fnaf_lingti', 'haitu_fnaf_qiongzhui'],
                filter(event, player) {
                    var num = 0;
                    if (player.countMark('haitu_fnaf_yejing_bonnie') >= 1) {
                        num += 1;
                    }
                    if (player.countMark('haitu_fnaf_yejing_chika') >= 1) {
                        num += 1;
                    }
                    if (player.countMark('haitu_fnaf_yejing_foxy') >= 1) {
                        num += 1;
                    }
                    if (player.countMark('haitu_fnaf_yejing_freddy') >= 1) {
                        num += 1;
                    }
                    if (player.countMark('haitu_fnaf_yejing_hell') >= 1) {
                        num += 1;
                    }
                    if (player.countMark('haitu_fnaf_yejing_jeremy') >= 1) {
                        num += 1;
                    }
                    if (player.countMark('haitu_fnaf_yejing_susie') >= 1) {
                        num += 1;
                    }
                    if (player.countMark('haitu_fnaf_yejing_fritz') >= 1) {
                        num += 1;
                    }
                    if (player.countMark('haitu_fnaf_yejing_gabriel') >= 1) {
                        num += 1;
                    }
                    if (player.countMark('haitu_fnaf_yejing_hell') >= 1) {
                        num += 1;
                    }
                    return num >= 2;
                },
                global: 'haitu_fnaf_qihun_use',
                bonnie(player, current) {
                    event.list1 = [];
                    game.hasPlayer(function (current) {
                        if (current.hasMark('haitu_fnaf_yejing_bonnie')) {
                            event.list1.push(current);
                        }
                    });
                    for (var i of event.list1) {
                        var num = i.countMark('haitu_fnaf_yejing_bonnie');
                        i.removeMark('haitu_fnaf_yejing_bonnie', num);
                        i.unmarkSkill('haitu_fnaf_yejing_bonnie');
                        var next = i.next;
                        next.addMark('haitu_fnaf_yejing_bonnie', num);
                    }
                },
                chika(player, current) {
                    event.list1 = [];
                    game.hasPlayer(function (current) {
                        if (current.hasMark('haitu_fnaf_yejing_chika')) {
                            event.list1.push(current);
                        }
                    });
                    for (var i of event.list1) {
                        var num = i.countMark('haitu_fnaf_yejing_chika');
                        i.removeMark('haitu_fnaf_yejing_chika', num);
                        i.unmarkSkill('haitu_fnaf_yejing_chika');
                        var previous = i.previous;
                        previous.addMark('haitu_fnaf_yejing_chika', num);
                    }
                },
                foxy(player, current) {
                    'step 0';
                    event.num = 0;
                    game.hasPlayer(function (current) {
                        if (current.hasMark('haitu_fnaf_yejing_foxy')) {
                            var num = current.countMark('haitu_fnaf_yejing_foxy');
                            event.num += num;
                            current.removeMark('haitu_fnaf_yejing_foxy', num);
                            i.unmarkSkill('haitu_fnaf_yejing_foxy');
                        }
                    });
                    event.list = [];
                    game.hasPlayer(function (current) {
                        event.list.push('current');
                    });
                    ('step 1');
                    event.num -= 1;
                    ('step 2');
                    var a = event.list.randomGet(1);
                    a.addMark('haitu_fnaf_yejing_foxy', 1);
                    if (event.num > 0) {
                        event.goto(1);
                    }
                },
                freddy(player, current) {
                    'step 0';
                    event.num = 0;
                    game.hasPlayer(function (current) {
                        if (current.hasMark('haitu_fnaf_yejing_freddy')) {
                            var num = current.countMark('haitu_fnaf_yejing_freddy');
                            event.num += num;
                            current.removeMark('haitu_fnaf_yejing_freddy', num);
                            current.unmarkSkill('haitu_fnaf_yejing_freddy');
                        }
                    });
                    event.list = [];
                    game.hasPlayer(function (current) {
                        event.list.push('current');
                    });
                    ('step 1');
                    event.num -= 1;
                    ('step 2');
                    var a = event.list.randomGet(1);
                    a.addMark('haitu_fnaf_yejing_freddy', 1);
                    if (event.num > 0) {
                        event.goto(1);
                    }
                },
                subSkill: {
                    use: {
                        forced: true,
                        silent: true,
                        trigger: {
                            player: ['useCardAfter'],
                        },
                        forced: true,
                        content() {
                            'step 0';
                            if (
                                trigger.card.suit == 'heart' &&
                                game.hasPlayer(function (current) {
                                    if (current.hasMark('haitu_fnaf_yejing_bonnie')) {
                                        return true;
                                    }
                                })
                            ) {
                                event.list1 = [];
                                game.hasPlayer(function (current) {
                                    if (current.hasMark('haitu_fnaf_yejing_bonnie')) {
                                        event.list1.push(current);
                                    }
                                });
                                for (var i of event.list1) {
                                    var num = i.countMark('haitu_fnaf_yejing_bonnie');
                                    i.removeMark('haitu_fnaf_yejing_bonnie', num);
                                    i.unmarkSkill('haitu_fnaf_yejing_bonnie');
                                    var next = i.next;
                                    next.addMark('haitu_fnaf_yejing_bonnie', num);
                                }
                            }
                            if (
                                trigger.card.suit == 'diamond' &&
                                game.hasPlayer(function (current) {
                                    if (current.hasMark('haitu_fnaf_yejing_chika')) {
                                        return true;
                                    }
                                })
                            ) {
                                event.list1 = [];
                                game.hasPlayer(function (current) {
                                    if (current.hasMark('haitu_fnaf_yejing_chika')) {
                                        event.list1.push(current);
                                    }
                                });
                                for (var i of event.list1) {
                                    var num = i.countMark('haitu_fnaf_yejing_chika');
                                    i.removeMark('haitu_fnaf_yejing_chika', num);
                                    i.unmarkSkill('haitu_fnaf_yejing_chika');
                                    var previous = i.previous;
                                    previous.addMark('haitu_fnaf_yejing_chika', num);
                                }
                            }
                            if (
                                trigger.card.suit == 'spade' &&
                                game.hasPlayer(function (current) {
                                    if (current.hasMark('haitu_fnaf_yejing_foxy')) {
                                        return true;
                                    }
                                })
                            ) {
                                event.goto(2);
                            }
                            if (
                                trigger.card.suit == 'club' &&
                                game.hasPlayer(function (current) {
                                    if (current.hasMark('haitu_fnaf_yejing_freddy')) {
                                        return true;
                                    }
                                })
                            ) {
                                event.goto(5);
                            }
                            ('step 1');
                            event.finish();
                            ('step 2');
                            event.num = 0;
                            game.hasPlayer(function (current) {
                                if (current.hasMark('haitu_fnaf_yejing_foxy')) {
                                    var num = current.countMark('haitu_fnaf_yejing_foxy');
                                    event.num += num;
                                    current.removeMark('haitu_fnaf_yejing_foxy', num);
                                }
                            });
                            event.list = game.hasPlayer(function (current) {
                                return true;
                            });
                            ('step 3');
                            event.num -= 1;
                            ('step 4');
                            var targets = game.filterPlayer(function (current) {
                                return true;
                            });
                            if (targets.length) {
                                var target = targets.randomGet();
                                target.addMark('haitu_fnaf_yejing_foxy', 1);
                            }
                            if (event.num > 0) {
                                event.goto(3);
                            } else {
                                event.finish();
                            }
                            ('step 5');
                            event.num = 0;
                            game.hasPlayer(function (current) {
                                if (current.hasMark('haitu_fnaf_yejing_freddy')) {
                                    var num = current.countMark('haitu_fnaf_yejing_freddy');
                                    event.num += num;
                                    current.removeMark('haitu_fnaf_yejing_freddy', num);
                                    current.unmarkSkill('haitu_fnaf_yejing_freddy');
                                }
                            });
                            event.list = game.hasPlayer(function (current) {
                                return true;
                            });
                            ('step 6');
                            event.num -= 1;
                            ('step 7');
                            var targets = game.filterPlayer(function (current) {
                                return true;
                            });
                            if (targets.length) {
                                var target = targets.randomGet();
                                target.addMark('haitu_fnaf_yejing_freddy', 1);
                            }
                            if (event.num > 0) {
                                event.goto(6);
                            }
                        },
                    },
                },
                content() {
                    var list = [];
                    if (player.countMark('haitu_fnaf_yejing_bonnie') >= 1 || player.countMark('haitu_fnaf_yejing_jeremy') >= 1) {
                        list.push('haitu_fnaf_xiezou');
                    }
                    if (player.countMark('haitu_fnaf_yejing_chika') >= 1 || player.countMark('haitu_fnaf_yejing_susie') >= 1) {
                        list.push('haitu_fnaf_xunshi');
                    }
                    if (player.countMark('haitu_fnaf_yejing_foxy') >= 1 || player.countMark('haitu_fnaf_yejing_fritz') >= 1) {
                        list.push('haitu_fnaf_hailie');
                    }
                    if (player.countMark('haitu_fnaf_yejing_freddy') >= 1 || player.countMark('haitu_fnaf_yejing_gabriel') >= 1) {
                        list.push('haitu_fnaf_yidong');
                    }
                    if (player.countMark('haitu_fnaf_yejing_hell') >= 1) {
                        var num = [1, 2, 3, 4].randomGet();
                        if (num == 1) list.push('haitu_fnaf_qiongzhui');
                        if (num == 2) list.push('haitu_fnaf_lingti');
                        if (num == 3) list.push('haitu_fnaf_yujie');
                        if (num == 4) list.push('haitu_fnaf_ruyu');
                    }
                    var skills = list.randomGets(2);
                    for (var i of skills) {
                        player.addTempSkill(i);
                    }
                },
            },
            haitu_fnaf_yejing: {
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (card.name == 'sha') {
                                if (card.nature == 'fire' || player.hasSkill('zhuque_skill')) return 2;
                            }
                            if (get.tag(card, 'fireDamage') && current < 0) return 2;
                        },
                    },
                },
                trigger: {
                    global: 'roundStart',
                },
                derivation: 'haitu_fnaf_yejing_instruction',
                global: ['haitu_fnaf_yejing_fire', 'haitu_fnaf_yejing_bonnie', 'haitu_fnaf_yejing_chika', 'haitu_fnaf_yejing_foxy', 'haitu_fnaf_yejing_freddy'],
                forced: true,
                filter(event, player) {
                    return player.countMark('haitu_fnaf_yejing_jeremy') >= 1 || player.countMark('haitu_fnaf_yejing_susie') >= 1 || player.countMark('haitu_fnaf_yejing_fritz') >= 1 || player.countMark('haitu_fnaf_yejing_gabriel') >= 1 || player.countMark('haitu_fnaf_yejing_hell') >= 1 || player.countMark('haitu_fnaf_changyuan_cassidy') >= 1;
                },
                subSkill: {
                    fire: {
                        forced: true,
                        charlotte: true,
                        silent: true,
                        trigger: {
                            player: 'damageBefore',
                        },
                        filter(event, player) {
                            return event.nature == 'fire';
                        },
                        content() {
                            if (player.countMark('haitu_fnaf_yejing_bonnie') >= 1) {
                                player.removeMark('haitu_fnaf_yejing_bonnie', player.countMark('haitu_fnaf_yejing_bonnie'));
                                player.unmarkSkill('haitu_fnaf_yejing_bonnie');
                            }
                            if (player.countMark('haitu_fnaf_yejing_chika') >= 1) {
                                player.removeMark('haitu_fnaf_yejing_chika', player.countMark('haitu_fnaf_yejing_chika'));
                                player.unmarkSkill('haitu_fnaf_yejing_chika');
                            }
                            if (player.countMark('haitu_fnaf_yejing_foxy') >= 1) {
                                player.removeMark('haitu_fnaf_yejing_foxy', player.countMark('haitu_fnaf_yejing_foxy'));
                                player.unmarkSkill('haitu_fnaf_yejing_foxy');
                            }
                            if (player.countMark('haitu_fnaf_yejing_freddy') >= 1) {
                                player.removeMark('haitu_fnaf_yejing_freddy', player.countMark('haitu_fnaf_yejing_freddy'));
                                player.unmarkSkill('haitu_fnaf_yejing_freddy');
                            }
                        },
                    },
                    jeremy: {
                        charlotte: true,
                        name: '杰里米',
                        notemp: true,
                        marktext: '💀',
                        intro: {
                            content(storage, player) {
                                var str = '<br><li>邦尼(未激活)';
                                str += '<br><li>移动方式:移动至下家';
                                str += '<br><li特殊效果:激活后拥有者视为拥有<止息>';
                                str += '<br><li>对应技能:偕奏';
                                return str;
                            },
                        },
                    },
                    susie: {
                        charlotte: true,
                        notemp: true,
                        name: '苏西',
                        marktext: '💀',
                        notemp: true,
                        intro: {
                            content(storage, player) {
                                var str = '<br><li>奇卡(未激活)';
                                str += '<br><li>移动方式:移动至上家';
                                str += '<br><li>特殊效果:激活后拥有者视为拥有<崩坏>';
                                str += '<br><li>对应技能:寻食';
                                return str;
                            },
                        },
                    },
                    fritz: {
                        charlotte: true,
                        name: '弗里兹',
                        marktext: '💀',
                        notemp: true,
                        intro: {
                            content(storage, player) {
                                var str = '<br><li>霍斯(未激活)';
                                str += '<br><li>移动方式:移动至一名随机角色';
                                str += '<br><li特殊效果:激活后拥有者受到伤害后失去一点体力';
                                str += '<br><li>对应技能:海猎';
                                return str;
                            },
                        },
                    },
                    gabriel: {
                        charlotte: true,
                        name: '加布里埃尔',
                        marktext: '💀',
                        notemp: true,
                        intro: {
                            content(storage, player) {
                                var str = '<br><li>弗莱迪(未激活)';
                                str += '<br><li>移动方式:移动至一名随机角色';
                                str += '<br><li>特殊效果:激活后拥有者受到伤害后随机弃置一张牌';
                                str += '<br><li>对应技能:异动';
                                return str;
                            },
                        },
                    },
                    hell: {
                        charlotte: true,
                        name: '???',
                        markimage: 'extension/海国图志/image/other/goldenfreddy.png',
                        notemp: true,
                        intro: {
                            content(storage, player) {
                                var str = '<br><li>金熊(<span class=\"yellowtext\">已激活</span>)';
                                str += '<br><li>你有金身,随便浪.';
                                str += '<br><li>特殊效果:当你失去最后的其他/获得复仇之灵时,你切换对应武将牌.';
                                str += '<br><li>对应技能:"逾界","灵体","穷追","濡狱"';
                                return str;
                            },
                        },
                    },
                    bonnie: {
                        charlotte: true,
                        name: '邦尼',
                        notemp: true,
                        group: 'haitu_fnaf_yejing_bonniebuff',
                        markimage: 'extension/海国图志/image/other/bonnie.png',
                        intro: {
                            content(storage, player) {
                                var str = '';
                                str += '<br><li>移动方式:移动至下家';
                                str += '<br><li特殊效果:激活后拥有者视为拥有<止息>';
                                str += '<br><li>对应技能:偕奏';
                                return str;
                            },
                        },
                    },
                    chika: {
                        charlotte: true,
                        name: '奇卡',
                        notemp: true,
                        group: 'haitu_fnaf_yejing_chikabuff',
                        markimage: 'extension/海国图志/image/other/chika.png',
                        intro: {
                            content(storage, player) {
                                var str = '';
                                str += '<br><li>移动方式:移动至上家';
                                str += '<br><li>特殊效果:激活后拥有者视为拥有<崩坏>';
                                str += '<br><li>对应技能:寻食';
                                return str;
                            },
                        },
                    },
                    foxy: {
                        charlotte: true,
                        group: 'haitu_fnaf_yejing_foxybuff',
                        name: '霍斯',
                        notemp: true,
                        markimage: 'extension/海国图志/image/other/foxy.png',
                        intro: {
                            content(storage, player) {
                                var str = '';
                                str += '<br><li>移动方式:移动至一名随机角色';
                                str += '<br><li特殊效果:激活后拥有者受到伤害后失去一点体力';
                                str += '<br><li>对应技能:海猎';
                                return str;
                            },
                        },
                    },
                    freddy: {
                        charlotte: true,
                        group: 'haitu_fnaf_yejing_freddybuff',
                        name: '弗莱迪',
                        notemp: true,
                        markimage: 'extension/海国图志/image/other/freddy.png',
                        intro: {
                            content(storage, player) {
                                var str = '';
                                str += '<br><li>移动方式:移动至一名随机角色';
                                str += '<br><li特殊效果:激活后拥有者受到伤害后随机弃置一张牌';
                                str += '<br><li>对应技能:异动';
                                return str;
                            },
                        },
                    },
                    bonniebuff: {
                        charlotte: true,
                        forced: true,
                        trigger: {
                            player: 'useCard',
                        },
                        silent: true,
                        filter(event, player) {
                            if (player.countMark('haitu_fnaf_yejing_bonnie') <= 0) return false;
                            if (player.hasSkill('haitu_fnaf_qihun')) return false;
                            return (event.card.name == 'sha' || get.type(event.card) == 'trick') && player.countCards('h') > 0;
                        },
                        content() {
                            player.chooseToDiscard('h', true);
                        },
                    },
                    chikabuff: {
                        charlotte: true,
                        forced: true,
                        silent: true,
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        forced: true,
                        check() {
                            return false;
                        },
                        filter(event, player) {
                            if (player.countMark('haitu_fnaf_yejing_chika') <= 0) return false;
                            return !player.isMinHp() && !player.hasSkill('rejiuchi_air') && !player.hasSkill('oljiuchi_air') && !player.hasSkill('haitu_fnaf_qihun');
                        },
                        content() {
                            'step 0';
                            player
                                .chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
                                    if (player.hp == player.maxHp) return 'baonue_hp';
                                    if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_maxHp';
                                    return 'baonue_hp';
                                })
                                .set('prompt', '崩坏:失去1点体力或减1点体力上限');
                            ('step 1');
                            if (result.control == 'baonue_hp') {
                                player.loseHp();
                            } else {
                                player.loseMaxHp(true);
                            }
                        },
                    },
                    foxybuff: {
                        charlotte: true,
                        forced: true,
                        silent: true,
                        trigger: {
                            player: 'damageEnd',
                        },
                        filter(event, player) {
                            if (player.countMark('haitu_fnaf_yejing_foxy') <= 0) return false;
                            return !player.hasSkill('haitu_fnaf_qihun');
                        },
                        content() {
                            player.loseHp();
                        },
                    },
                    freddybuff: {
                        charlotte: true,
                        forced: true,
                        silent: true,
                        trigger: {
                            player: 'damageEnd',
                        },
                        filter(event, player) {
                            if (player.countMark('haitu_fnaf_yejing_freddy') <= 0) return false;
                            return !player.hasSkill('haitu_fnaf_qihun');
                        },
                        content() {
                            var cards = player.getCards('he', (card) => {
                                return lib.filter.cardDiscardable(card, player, 'mbshihe');
                            });
                            if (cards.length) player.discard(cards.randomGet());
                        },
                    },
                },
                init(player) {
                    if (player.storage.haitu_fnaf_yejing != true) {
                        player.storage.haitu_fnaf_yejing = true;
                        player.addMark('haitu_fnaf_yejing_jeremy', 1);
                        player.addMark('haitu_fnaf_yejing_susie', 1);
                        player.addMark('haitu_fnaf_yejing_fritz', 1);
                        player.addMark('haitu_fnaf_yejing_gabriel', 1);
                        if (player.name1 == 'haitu_fnaf_hell' || player.name2 == 'haitu_fnaf_hell') {
                            player.addMark('haitu_fnaf_yejing_hell', 1);
                        }
                    }
                    var a = window.setInterval(function () {
                        if (player.countMark('haitu_fnaf_yejing_jeremy') >= 1 || player.countMark('haitu_fnaf_yejing_susie') >= 1 || player.countMark('haitu_fnaf_yejing_fritz') >= 1 || player.countMark('haitu_fnaf_yejing_gabriel') >= 1 || player.countMark('haitu_fnaf_yejing_bonnie') >= 1 || player.countMark('haitu_fnaf_yejing_chika') >= 1 || player.countMark('haitu_fnaf_yejing_foxy') >= 1 || player.countMark('haitu_fnaf_yejing_freddy') >= 1) {
                        } else {
                            if (player.name1 == 'haitu_fnaf_hell' || player.name2 == 'haitu_fnaf_hell') {
                                game.broadcastAll(function (player) {
                                    player.reinit('haitu_fnaf_hell', 'haitu_fnaf_cassidy', false);
                                }, player);
                                if (player.countMark('haitu_fnaf_yejing_hell') >= 1) {
                                    player.removeMark('haitu_fnaf_yejing_hell', player.countMark('haitu_fnaf_yejing_hell'));
                                    player.unmarkSkill('haitu_fnaf_yejing_hell');
                                }
                                player.addMark('haitu_fnaf_changyuan_cassidy', 1);
                                window.clearInterval(a);
                            }
                        }
                    }, 1000);
                },
                content() {
                    'step 0';
                    var list = [];
                    if (player.countMark('haitu_fnaf_yejing_jeremy') >= 1) {
                        list.push('邦尼');
                    }
                    if (player.countMark('haitu_fnaf_yejing_susie') >= 1) {
                        list.push('奇卡');
                    }
                    if (player.countMark('haitu_fnaf_yejing_fritz') >= 1) {
                        list.push('霍斯');
                    }
                    if (player.countMark('haitu_fnaf_yejing_gabriel') >= 1) {
                        list.push('弗莱迪');
                    }
                    if (list.length) {
                        player.chooseControl(list).set('prompt', '选择激活一个亡灵');
                    } else {
                        event.goto(2);
                    }
                    ('step 1');
                    if (result.control == '邦尼') {
                        player.removeMark('haitu_fnaf_yejing_jeremy', player.countMark('haitu_fnaf_yejing_jeremy'));
                        player.update();
                        player.addMark('haitu_fnaf_yejing_bonnie', 1);
                    }
                    if (result.control == '奇卡') {
                        player.removeMark('haitu_fnaf_yejing_susie', player.countMark('haitu_fnaf_yejing_susie'));
                        player.update();
                        player.addMark('haitu_fnaf_yejing_chika', 1);
                    }
                    if (result.control == '霍斯') {
                        player.removeMark('haitu_fnaf_yejing_fritz', player.countMark('haitu_fnaf_yejing_fritz'));
                        player.update();
                        player.addMark('haitu_fnaf_yejing_foxy', 1);
                    }
                    if (result.control == '弗莱迪') {
                        player.removeMark('haitu_fnaf_yejing_gabriel', player.countMark('haitu_fnaf_yejing_gabriel'));
                        player.update();
                        player.addMark('haitu_fnaf_yejing_freddy', 1);
                    }
                    ('step 2');
                    event.num = 0;
                    event.list1 = [];
                    event.list2 = [];
                    event.list3 = [];
                    event.list4 = [];
                    game.hasPlayer(function (current) {
                        if (current.hasMark('haitu_fnaf_yejing_bonnie')) {
                            event.num += current.countMark('haitu_fnaf_yejing_bonnie');
                            if (current != player) {
                                event.list1.push(current);
                            }
                        }
                    });
                    game.hasPlayer(function (current) {
                        if (current.hasMark('haitu_fnaf_yejing_chika')) {
                            event.num += current.countMark('haitu_fnaf_yejing_chika');
                            if (current != player) {
                                event.list2.push(current);
                            }
                        }
                    });
                    game.hasPlayer(function (current) {
                        if (current.hasMark('haitu_fnaf_yejing_foxy')) {
                            event.num += current.countMark('haitu_fnaf_yejing_foxy');
                            if (current != player) {
                                event.list3.push(current);
                            }
                        }
                    });
                    game.hasPlayer(function (current) {
                        if (current.hasMark('haitu_fnaf_yejing_freddy')) {
                            event.num += current.countMark('haitu_fnaf_yejing_freddy');
                            if (current != player) {
                                event.list4.push(current);
                            }
                        }
                    });
                    game.hasPlayer(function (current) {
                        if (current.hasMark('haitu_fnaf_yejing_hell')) {
                            event.num += current.countMark('haitu_fnaf_yejing_hell');
                        }
                    });
                    if (event.num > 0) player.draw(event.num); //QQQ
                    ('step 3');
                    if (event.list1 != []) {
                        for (var i of event.list1) {
                            {
                                player.useCard({ name: 'mianlijinzhen' }, i, 'noai');
                            }
                        }
                    }
                    if (event.list2 != []) {
                        for (var i of event.list2) {
                            if (player.canUse({ name: 'chenghuodajie' }, i)) {
                                player.useCard({ name: 'chenghuodajie' }, i, 'noai');
                            }
                        }
                    }
                    if (event.list3 != []) {
                        for (var i of event.list3) {
                            player.useCard({ name: 'juedou' }, i, 'noai');
                        }
                    }
                    if (event.list4 != []) {
                        for (var i of event.list4) {
                            player.useCard({ name: 'jiguanfeng' }, i, 'noai');
                        }
                    }
                },
            },
            haitu_fnaf_jinwu: {
                trigger: {
                    player: ['gainMaxHpBefore', 'loseMaxHpBefore'],
                },
                group: 'haitu_fnaf_jinwu_damage',
                subSkill: {
                    damage: {
                        charlotte: true,
                        trigger: {
                            player: ['damageBegin1', 'loseHpBegin'],
                        },
                        forced: true,
                        content() {
                            'step 0';
                            event.num = Math.min(trigger.num, 9);
                            trigger.cancel();
                            player.chooseToDiscard('he', true, event.num);
                            ('step 1');
                            var list = [];
                            if (player.countMark('haitu_fnaf_yejing_jeremy') >= 1) {
                                list.push('邦尼');
                            }
                            if (player.countMark('haitu_fnaf_yejing_susie') >= 1) {
                                list.push('奇卡');
                            }
                            if (player.countMark('haitu_fnaf_yejing_fritz') >= 1) {
                                list.push('霍斯');
                            }
                            if (player.countMark('haitu_fnaf_yejing_gabriel') >= 1) {
                                list.push('弗莱迪');
                            }
                            if (list.length) {
                                player.chooseControl(list).set('prompt', '选择激活一个亡灵');
                            } else {
                                event.finish();
                            }
                            ('step 2');
                            if (result.control == '邦尼') {
                                player.removeMark('haitu_fnaf_yejing_jeremy', player.countMark('haitu_fnaf_yejing_jeremy'));
                                player.unmarkSkill('haitu_fnaf_yejing_jeremy');
                                player.addMark('haitu_fnaf_yejing_bonnie', 1);
                            }
                            if (result.control == '奇卡') {
                                player.removeMark('haitu_fnaf_yejing_susie', player.countMark('haitu_fnaf_yejing_susie'));
                                player.unmarkSkill('haitu_fnaf_yejing_susie');
                                player.addMark('haitu_fnaf_yejing_chika', 1);
                            }
                            if (result.control == '霍斯') {
                                player.removeMark('haitu_fnaf_yejing_fritz', player.countMark('haitu_fnaf_yejing_fritz'));
                                player.unmarkSkill('haitu_fnaf_yejing_fritz');
                                player.addMark('haitu_fnaf_yejing_foxy', 1);
                            }
                            if (result.control == '弗莱迪') {
                                player.removeMark('haitu_fnaf_yejing_gabriel', player.countMark('haitu_fnaf_yejing_gabriel'));
                                player.unmarkSkill('haitu_fnaf_yejing_gabriel');
                                player.addMark('haitu_fnaf_yejing_freddy', 1);
                            }
                        },
                    },
                },
                charlotte: true,
                forced: true,
                content() {
                    trigger.cancel();
                },
            },
            haitu_xieli: {
                enable: 'phaseUse',
                group: 'haitu_xieli_count',
                subSkill: {
                    used: { charlotte: true },
                    count: {
                        forced: true,
                        popup: false,
                        silent: true,
                        charlotte: true,
                        trigger: {
                            global: 'damageEnd',
                        },
                        content() {
                            'step 0';
                            event.target = trigger.source;
                            player.draw();
                            {
                                var cards = player.getCards('he');
                                if (cards.length && event.target.isIn() && event.target != player) {
                                    player.chooseCard('he', '交给' + get.translation(event.target) + '一张牌', true);
                                } else {
                                    event.finish();
                                }
                            }
                            ('step 1');
                            if (result.bool) {
                                player.give(result.cards, event.target);
                            }
                        },
                        filter(event, player) {
                            var evt = event.getParent(3);
                            return evt && evt.name == 'haitu_xieli' && evt.player == player;
                        },
                    },
                },
                targetprompt: ['被胁迫', '攻击目标'],
                complexSelect: true,
                complexTarget: true,
                selectTarget: 2,
                multitarget: true,
                filterTarget(card, player, target) {
                    var cardx = ui.selected.cards[0];
                    if (ui.selected.targets.length == 0) {
                        if (target.hasSkill('haitu_xieli_used')) {
                            return false;
                        }
                        return target.isDamaged();
                    }
                    if (ui.selected.targets.length == 1) {
                        return lib.filter.targetEnabled(cardx, ui.selected.targets[0], target);
                    }
                },
                filterCard(card) {
                    if (get.tag(card, 'damage')) return true;
                    return false;
                },
                position: 'he',
                discard: false,
                lose: false,
                delay: false,
                content() {
                    'step 0';
                    player.give(cards, targets[0]);
                    event.card = cards;
                    targets[0].addTempSkill('haitu_xieli_used', ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore', 'phaseJieshuBefore', 'phaseBefore']);
                    ('step 1');
                    {
                        targets[0].useCard(cards, targets[1], false, 'noai');
                        if (
                            targets[0].hasHistory('useCard', (evt) => {
                                return targets[0].hasHistory('sourceDamage', (evtx) => evt.card == cards);
                            })
                        ) {
                            event.goto(3);
                        }
                    }
                    ('step 2');
                    event.finish();
                    ('step 3');
                    player.draw();
                    {
                        var cards = player.getCards('he');
                        if (cards.length && targets[0].isIn() && targets[0] != player) {
                            player.chooseCard('he', '交给' + get.translation(targets[0]) + '一张牌', true);
                        } else {
                            event.finish();
                        }
                    }
                    ('step 4');
                    if (result.bool) {
                        player.give(result.cards, targets[0]);
                    }
                },
                ai: {
                    order: 8,
                    result: {
                        target(player, target) {
                            if (ui.selected.targets.length == 0) {
                                return 3;
                            } else {
                                return get.effect(target, { name: 'juedou' }, ui.selected.targets[1], target);
                            }
                        },
                    },
                    expose: 0.4,
                    threaten: 3,
                },
            },
            haitu_fnaf_hailie: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                forced: true,
                filter(event, player) {
                    if (event.parent.triggeredTargets3.length > 1) return false;
                    if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                    if (get.tag(event.card, 'damage')) return true;
                    return false;
                },
                content() {
                    'step 0';
                    game.broadcastAll(function (player) {
                        player
                            .chooseTarget(get.prompt('haitu_fnaf_hailie'), '选择一名目标角色', function (card, player, target) {
                                return _status.event.targets.includes(target);
                            })
                            .set('ai', function (target) {
                                return 2 - get.attitude(_status.event.player, target);
                            })
                            .set('targets', trigger.targets);
                    }, player);
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        event.target = target;
                        player.line(event.target, { color: [220, 90, 139] });
                        var suit = trigger.card.suit;
                        event.target
                            .chooseCard('he', '交给' + get.translation(player) + '一张' + get.translation(suit) + '牌,否则受到一点伤害.', function (card) {
                                return card.suit == suit;
                            })
                            .set('ai', function (card) {
                                var num = _status.event.num;
                                if (num == 0) return 0;
                                if (card.name == 'shan') return num > 1 ? 2 : 0;
                                return 8 - get.value(card);
                            })
                            .set('num', event.target.countCards('h', 'shan'));
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.bool) {
                        var cards = result.cards;
                        event.target.give(cards, player);
                    } else {
                        event.target.damage();
                    }
                },
            },
            haitu_fnaf_xiezou: {
                enable: 'phaseUse',
                usable: 1,
                delay: 0,
                filter(event, player) {
                    return player.countCards('h') > 0;
                },
                content() {
                    'step 0';
                    var max = 0;
                    var choice = 'club';
                    var map = {
                        club: 0,
                        heart: 0,
                        diamond: 0,
                        spade: 0,
                    };
                    for (var i in map) {
                        var hs = player.getCards('he', { suit: i });
                        for (var j = 0; j < hs.length; j++) {
                            var val = get.value(hs[j], player, 'raw');
                            if (val > 7) {
                                map[i] = 0;
                                break;
                            } else if (val <= 5) {
                                map[i]++;
                                if (val <= 4) {
                                    map[i] += 0.5;
                                }
                                if (val < 0) {
                                    map[i] += 2;
                                }
                            }
                        }
                        if (map[i] > max) {
                            choice = i;
                            max = map[i];
                        }
                    }
                    var map0 = {},
                        hs = player.getCards('h');
                    for (var i of hs) map0[i.suit] = true;
                    var controls = lib.suit.filter((i) => map0[i]);
                    if (!controls.includes(choice)) {
                        choice = controls.randomGet();
                    }
                    player
                        .chooseControl(controls, function () {
                            return choice;
                        })
                        .set('prompt', '重铸一种花色的手牌');
                    ('step 1');
                    {
                        var suit = result.control;
                        var hs = player.getCards('h').filter(function (i) {
                            return i.suit == suit;
                        });
                        if (hs.length) {
                            player.recast(hs);
                        }
                    }
                    ('step 2');
                    player
                        .chooseTarget('请令一名其他角色失去一点体力', true, function (card, player, target) {
                            return target != player;
                        })
                        .set('ai', function (target) {
                            let player = _status.event.player;
                            return get.effect(target, { name: 'losehp' }, player, player);
                        });
                    ('step 3');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        target.loseHp();
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        player(player) {
                            var list = ['club', 'heart', 'diamond', 'spade'];
                            for (var i = 0; i < list.length; i++) {
                                var hs = player.getCards('h', { suit: list[i] });
                                var bool = false;
                                for (var j = 0; j < hs.length; j++) {
                                    var val = get.value(hs[j], player);
                                    if (val > 7) {
                                        bool = false;
                                        break;
                                    } else if (val <= 4) {
                                        bool = true;
                                    }
                                }
                                if (bool) {
                                    return 1;
                                }
                            }
                            return 0;
                        },
                    },
                },
            },
            haitu_fnaf_yidong: {
                trigger: {
                    player: 'useCard',
                },
                content() {
                    'step 0';
                    player.chooseCard('he', false, 1, '你可以重铸牌', lib.filter.cardrecastable).ai = function (card) {
                        return 6 - get.value(card);
                    };
                    ('step 1');
                    if (result.bool) {
                        player.recast(result.cards);
                    }
                },
                silent: true,
                forced: true,
            },
            haitu_fnaf_xunshi: {
                enable: ['chooseToUse'],
                usable: 1,
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    return player.countCards('he', function (card) {
                        return true;
                    });
                },
                chooseButton: {
                    hiddenCard(player, name) {
                        if (get.type(name) == 'food') {
                            return true;
                        }
                    },
                    dialog(event, player) {
                        'step 0';
                        var list = [];
                        for (var i in lib.card) {
                            if (lib.card[i].type == 'food' && event.filterCard({ name: i }, player, event)) {
                                list.add(i);
                            }
                        }
                        ('step 1');
                        return ui.create.dialog('寻食', [list, 'vcard'], 'hidden');
                    },
                    filter(button, player) {
                        return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                    },
                    check(button) {
                        if (button.link[2] == 'shan') return 3;
                        var player = _status.event.player;
                        if (button.link[2] == 'jiu') {
                            if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                            if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                        }
                        return player.getUseValue({ name: button.link[2] });
                    },
                    backup(links, player) {
                        return {
                            check(card) {
                                return 8 - get.value(card);
                            },
                            filterCard(card, player) {
                                return true;
                            },
                            popname: true,
                            position: 'hes',
                            viewAs: { name: links[0][2] },
                            onuse(links, player) { },
                        };
                    },
                    prompt(links, player) {
                        return '将一牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                ai: {
                    order(item, player) {
                        if (_status.event.type == 'phase') return 2;
                    },
                    result: {
                        player(player) {
                            return 2;
                        },
                    },
                },
            },
            haitu_fnaf_qiongzhui: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    var next = player.chooseCardTarget({
                        position: 'he',
                        filterTarget(card, player, target) {
                            return player.canUse({ name: 'sha' }, target, false);
                        },
                        ai1(card) {
                            return get.unuseful(card) + 5;
                        },
                        ai2(target) {
                            return get.effect(target, { name: 'sha' }, player, player);
                        },
                        selectCard: [1, Infinity],
                        prompt: get.prompt(event.name),
                        prompt2: '你可以将任意张牌当无距离限制的【刺杀】使用.',
                    });
                    ('step 1');
                    if (result.bool) {
                        {
                            var cards = result.cards;
                            event.num = cards.length;
                            var cardx = { name: 'sha', nature: 'stab' };
                            var next = player.useCard(cardx, result.cards, target, false);
                            player.draw(event.num);
                        }
                    } else {
                        event.finish();
                    }
                },
                popup: false,
                _priority: 1,
            },
            haitu_fnaf_yujie: {
                enable: 'phaseUse',
                usable: 2,
                selectCard: [1, Infinity],
                position: 'he',
                filterCard(card, player) {
                    if (ui.selected.cards.length == 0) return true;
                    if (ui.selected.cards.length) {
                        var cardx = ui.selected.cards[0];
                        return card.name == cardx.name;
                    }
                    var cards = player.getCards('he');
                    for (var cardx of cards) {
                        if (card != cardx) {
                            if (card.name == cardx.name) return true;
                        }
                    }
                    return false;
                },
                check(card) {
                    var player = _status.event.player;
                    {
                        if (!player.hasValueTarget(card)) return 20 - get.value(card);
                        return 7 - get.value(card);
                    }
                },
                content() {
                    var gain = [];
                    if (
                        cards.every(function (i) {
                            return i.name == cards[0].name;
                        })
                    ) {
                        for (var i = 0; i < cards.length; i++) {
                            var card = get.cardPile(function (card) {
                                return (
                                    gain.every(function (cardx) {
                                        return cardx.name != card.name;
                                    }) && !gain.includes(card)
                                );
                            });
                            if (card) gain.push(card);
                            else break;
                        }
                    } else {
                        var map = {},
                            list = [];
                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                            var name = ui.cardPile.childNodes[i].name;
                            if (list.includes(name)) continue;
                            if (!map[name]) map[name] = 0;
                            map[name]++;
                            if (map[name] >= cards.length) list.add(name);
                        }
                        if (list.length >= 1) {
                            var namex = list.randomGet();
                            for (var i = 0; i < cards.length; i++) {
                                var card = get.cardPile((cardx) => cardx.name == namex && !gain.includes(cardx));
                                if (card) gain.push(card);
                                else break;
                            }
                        }
                    }
                    if (gain.length) player.gain(gain, 'gain2');
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                    threaten: 1.55,
                },
            },
            haitu_fnaf_lingti: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    if (player.countCards >= player.hp && player.getDamagedHp() <= 0) return false;
                    return player.countCards('h') != player.hp;
                },
                content() {
                    if (player.countCards('h') < player.hp) {
                        player.drawTo(player.hp);
                    } else {
                        var count1 = player.countCards('h');
                        player.hp = count1;
                        player.update();
                    }
                },
                ai: {
                    order: 0.01,
                    result: {
                        player: 2,
                    },
                },
            },
            haitu_qianying: {
                trigger: {
                    player: 'yingbian',
                },
                forced: true,
                filter(event, player) {
                    var defaultYingbianEffect = get.defaultYingbianEffect(event.card);
                    if (defaultYingbianEffect) {
                        return player.countCards('hs', 'ying') && !event.card.yingbian;
                    } else {
                        return false;
                    }
                },
                content() {
                    'step 0';
                    if (player.countCards('he') > 0) {
                        player.chooseCard('he', '是否重铸一张影触发' + get.translation(trigger.card) + '的应变效果?', 'he', (card, player) => {
                            return card.name == 'ying';
                        });
                    }
                    ('step 1');
                    if (result.bool) {
                        player.recast(result.cards);
                        trigger.card.yingbian = true;
                        trigger.card.yingbian = true;
                        var yingbianEffectExecuted = false;
                        if (!yingbianEffectExecuted) {
                            var defaultYingbianEffect = get.defaultYingbianEffect(trigger.card);
                            if (lib.yingbian.effect.has(defaultYingbianEffect)) {
                                game.yingbianEffect(trigger, lib.yingbian.effect.get(defaultYingbianEffect));
                                if (!yingbianEffectExecuted) yingbianEffectExecuted = true;
                            }
                        }
                        if (yingbianEffectExecuted) player.addTempSkill('yingbian_changeTarget');
                    } else {
                        event.finish();
                    }
                },
            },
            haitu_fnaf_ruyu: {
                trigger: {
                    player: ['phaseJieshuBegin'],
                },
                ai: {
                    order: 0.01,
                    result: {
                        player: 0.00000001,
                    },
                },
                forced: true,
                content() {
                    'step 0';
                    event.list0 = [];
                    event.list1 = [];
                    event.list2 = [];
                    event.addIndex = 0;
                    game.countPlayer(function (current) {
                        if (Math.random() < 0.44 && current != player) {
                            event.list1.push(current);
                            event.list2.push(current);
                        }
                    });
                    event.list1.push(player);
                    event.list2.push(player);
                    event.list1.sortBySeat();
                    var choices = [];
                    event.list1.sortBySeat();
                    choices.push('令' + get.translation(event.list1) + '失去一点体力');
                    event.list1.sortBySeat();
                    choices.push('令' + get.translation(event.list1) + '横置');
                    choices.push('令' + get.translation(event.list1) + '被你弃置区域内一张牌');
                    choices.push('令' + get.translation(event.list2) + '摸一张牌');
                    event.list0.sortBySeat();
                    choices.push('令' + get.translation(event.list2) + '回复一点体力');
                    event.list2.sortBySeat();
                    choices.push('令' + get.translation(event.list2) + '重置');
                    player
                        .chooseControl('弃牌', '掉血', '横置', '摸牌', '回血', '重置', '取消')
                        .set('choiceList', choices)
                        .set('prompt', get.prompt('haitu_fnaf_ruyu'))
                        .set('ai', function () {
                            var map = {
                                弃牌: 0,
                                回血: 0,
                                掉血: 0,
                                摸牌: 0,
                                横置: 0,
                                重置: 0,
                                取消: 0.01,
                            },
                                player = _status.event.player,
                                targets1 = _status.event.targetsx1,
                                targets2 = _status.event.targetsx2,
                                result;
                            for (var i of targets1) {
                                var att = get.attitude(player, i);
                                if (att >= 4) map.摸牌++;
                                else map.摸牌--;
                                map.回血 += get.recoverEffect(i, player, player);
                                if (att >= 4) map.重置 += 0.5;
                                else map.重置 -= 0.5;
                            }
                            for (var i of targets2) {
                                var att = get.attitude(player, i);
                                map.弃牌 += get.effect(i, { name: 'guohe_copy' }, player, player);
                                map.掉血 += get.damageEffect(i, player, player, 'loseHp');
                                if (!i.isLinked()) {
                                    if (att != 0) {
                                        if (att < 0) map.横置 += 0.5;
                                        else map.横置 -= 0.5;
                                    }
                                }
                            }
                            for (var i in map) {
                                if (typeof result != 'string') result = i;
                                if (map[i] > map[result]) result = i;
                            }
                            return result;
                        })
                        .set('targetsx1', event.list1)
                        .set('targetsx2', event.list2);
                    ('step 1');
                    if (result.control != '取消') {
                    }
                    if (result.control == '弃牌') {
                        for (var i of event.list1) player.discardPlayerCard('hej', i, true);
                    }
                    if (result.control == '掉血') {
                        for (var i of event.list1) i.loseHp(1);
                    }
                    if (result.control == '横置') {
                        for (var i of event.list1) i.link(true);
                    }
                    if (result.control == '摸牌') {
                        game.asyncDraw(event.list2);
                    }
                    if (result.control == '回血') {
                        for (var i of event.list2) i.recover();
                    }
                    if (result.control == '重置') {
                        for (var i of event.list2) i.link(false);
                    }
                    if (result.control == '取消') {
                        event.finish();
                    }
                    ('step 2');
                },
            },
            haitu_fnaf_zuosui: {
                init(player) {
                    player.storage.haitu_fnaf_zuosui = 0;
                    game.addGlobalSkill('haitu_fnaf_zuosui_record');
                },
                clickable(player) {
                    'step 0';
                    player.chooseToUse({
                        prompt: '是否使用一张牌？',
                        filterCard(card, player) {
                            return lib.filter.filterCard.apply(this, arguments);
                        },
                    });
                    ('step 1');
                    if (result.bool) {
                        player.storage.haitu_fnaf_zuosui -= 1;
                        player.removeSkill('haitu_fnaf_zuosui_on');
                    }
                    if (player.storage.haitu_fnaf_zuosui >= 1) {
                        player.storage.haitu_fnaf_zuosui -= 1;
                    }
                    player.removeSkill('haitu_fnaf_zuosui_on');
                    player.removeSkill('haitu_fnaf_zuosui_on');
                    if (_status.imchoosing) {
                        delete _status.event._cardChoice;
                        delete _status.event._targetChoice;
                        player.removeSkill('haitu_fnaf_zuosui_on');
                        game.check();
                    }
                },
                clickableFilter(player) {
                    return player.storage.haitu_fnaf_zuosui > 0 && !player.hasSkill('haitu_fnaf_zuosui_on');
                },
                mark: true,
                intro: {
                    mark(dialog, content, player) {
                        if (player.isUnderControl(true)) {
                            if (_status.gameStarted && player.storage.haitu_fnaf_zuosui > 0 && !player.hasSkill('haitu_fnaf_zuosui_on')) {
                                dialog.add(
                                    ui.create.div('.menubutton.pointerdiv', '点击发动', function () {
                                        if (!this.disabled) {
                                            this.disabled = true;
                                            this.classList.add('disabled');
                                            this.style.opacity = 0.5;
                                            player.addSkill('haitu_fnaf_zuosui_on');
                                            lib.skill.haitu_fnaf_zuosui.clickable(player);
                                        }
                                    })
                                );
                            }
                        } else {
                            dialog.addText('剩余' + content + '次');
                        }
                    },
                    content(content, player) {
                        {
                            {
                                return '剩余' + content + '次';
                            }
                        }
                    },
                },
                group: 'haitu_fnaf_zuosui_ai',
                subSkill: {
                    on: {
                        charlotte: true,
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        content() { },
                    },
                    record: {
                        trigger: {
                            global: 'useCard',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.player != player;
                        },
                        content() {
                            if (trigger.player != player) {
                                player.storage.haitu_fnaf_zuosui += 1;
                            }
                        },
                        charlotte: true,
                    },
                    ai: {
                        trigger: {
                            global: 'useCardAfter',
                        },
                        forced: true,
                        charlotte: true,
                        filter(event, player) {
                            return (_status.auto || !player.isUnderControl(true)) && player.storage.haitu_fnaf_zuosui > 0 && !player.hasSkill('haitu_fnaf_zuosui_on');
                        },
                        content() {
                            'step 0';
                            player.chooseToUse({
                                prompt: '是否使用一张牌？',
                                filterCard(card, player) {
                                    return lib.filter.filterCard.apply(this, arguments);
                                },
                            });
                            ('step 1');
                            if (result.bool) {
                                if (player.storage.haitu_fnaf_zuosui > 0) {
                                    player.storage.haitu_fnaf_zuosui -= 1;
                                }
                            }
                            player.removeSkill('haitu_fnaf_zuosui_on');
                            if (_status.imchoosing) {
                                delete _status.event._cardChoice;
                                delete _status.event._targetChoice;
                                game.check();
                            }
                        },
                    },
                },
            },
            haitu_ducai: {
                enable: 'phaseUse',
                usable: 1,
                check(card) {
                    return 9;
                },
                position: 'h',
                filterCard: true,
                discard: false,
                lose: false,
                global: 'ducai3',
                content() {
                    player.showCards(cards[0]);
                    game.broadcastAll(function (player, card) {
                        player.storage.ducai2 = cards[0];
                    }, player);
                    player.addTempSkill('ducai2', { global: 'roundStart' });
                    var suits = cards[0].suit;
                    var cards = player.getCards('h', (card) => card.suit == suits);
                    if (cards.length) {
                        var gain = get.randomCards(cards.length, function (card) {
                            var suit = card.suit;
                            return suit && suit == suits;
                        });
                        if (gain.length) {
                            player.gain(gain, 'log', 'gain2');
                        }
                    }
                },
                ai: {
                    order: 8,
                    result: {
                        player: 1,
                    },
                },
            },
            haitu_zhengfu: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                forced: true,
                filter(event, player) {
                    if (event.parent.triggeredTargets3.length > 1) return false;
                    if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                    if (get.tag(event.card, 'damage')) return true;
                    return false;
                },
                content() {
                    'step 0';
                    game.broadcastAll(function (player) {
                        player
                            .chooseTarget(get.prompt('haitu_zhengfu'), '选择一名目标角色', function (card, player, target) {
                                return _status.event.targets.includes(target);
                            })
                            .set('ai', function (target) {
                                return 2 - get.attitude(_status.event.player, target);
                            })
                            .set('targets', trigger.targets);
                    }, player);
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        event.target = target;
                        player.line(event.target, { color: [220, 90, 139] });
                        player
                            .chooseControl(['basic', 'trick', 'equip'])
                            .set('ai', function () {
                                return 'trick';
                            })
                            .set('prompt', '请选择一种牌的类别');
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    event.target.chooseCard('he', '交给' + get.translation(player) + '一张' + get.translation(result.control) + '牌,否则受到一点神圣伤害.', function (card) {
                        return get.type2(card) == result.control;
                    });
                    ('step 3');
                    if (result.bool) {
                        var cards = result.cards;
                        event.target.give(cards, player);
                    } else {
                        event.target.damage()._triggered = null;
                    }
                },
            },
            haitu_shuyou: {
                forced: true,
                trigger: {
                    global: 'useCard2',
                },
                charlotte: true,
                filter(event, player, name) {
                    var suit = event.card.suit;
                    if (!lib.suit.includes(suit)) return false;
                    if (player.storage.haitu_shuyou && player.storage.haitu_shuyou.includes(suit)) return false;
                    return true;
                },
                intro: {
                    content: '已使用花色:$',
                },
                silent: true,
                content() {
                    'step 0';
                    player.markAuto('haitu_shuyou', [trigger.card.suit]);
                    ('step 1');
                    var storage = player.getStorage('haitu_shuyou');
                    if (storage.length >= 4) {
                        event.goto(2);
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    player.draw(1);
                    player.unmarkSkill('haitu_shuyou');
                    ('step 3');
                    {
                        var cards = player.getCards('he');
                        if (cards.length && trigger.player.isIn() && trigger.player != player) {
                            player.chooseCard('he', '书友:交给' + get.translation(trigger.player) + '一张牌', true);
                        } else {
                            event.finish();
                        }
                    }
                    ('step 4');
                    if (result.bool) {
                        player.give(result.cards, trigger.player);
                    }
                },
            },
            haitu_xinghan: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                marktext: '星',
                mark: true,
                intro: {
                    name: '星',
                    markcount: 'expansion',
                    content: 'expansion',
                    mark(dialog, storage, player) {
                        var list1 = [];
                        dialog.addText('第一张牌');
                        var card1 = player.getExpansions('haitu_xinghan_one');
                        if (card1) {
                            for (var a of card1) {
                                list1.push(a);
                                dialog.addAuto([list1, 'vcard']);
                            }
                        }
                        dialog.addText('第二张牌');
                        var list2 = [];
                        var card2 = player.getExpansions('haitu_xinghan_two');
                        if (card2) {
                            for (var b of card2) {
                                list2.push(b);
                                dialog.addAuto([list2, 'vcard']);
                            }
                        }
                        dialog.addText('第三张牌');
                        var list3 = [];
                        var card3 = player.getExpansions('haitu_xinghan_three');
                        if (card3) {
                            for (var c of card3) {
                                list3.push(c);
                                dialog.addAuto([list3, 'vcard']);
                            }
                        }
                        dialog.addText('第四张牌');
                        var list4 = [];
                        var card4 = player.getExpansions('haitu_xinghan_four');
                        if (card4) {
                            for (var d of card4) {
                                list4.push(d);
                                dialog.addAuto([list4, 'vcard']);
                            }
                        }
                        dialog.addText('第五张牌');
                        var list5 = [];
                        var card5 = player.getExpansions('haitu_xinghan_five');
                        if (card5) {
                            for (var e of card5) {
                                list5.push(e);
                                dialog.addAuto([list5, 'vcard']);
                            }
                        }
                        dialog.addText('第六张牌');
                        var list6 = [];
                        var card6 = player.getExpansions('haitu_xinghan_six');
                        if (card6) {
                            for (var f of card6) {
                                list6.push(f);
                                dialog.addAuto([list6, 'vcard']);
                            }
                        }
                        dialog.addText('第七张牌');
                        var card7 = player.getExpansions('haitu_xinghan_seven');
                        var list7 = [];
                        if (card7) {
                            for (var g of card7) {
                                list7.push(g);
                                dialog.addAuto([list7, 'vcard']);
                            }
                        }
                    },
                },
                init(player) {
                    game.addGlobalSkill('haitu_xinghan_remove');
                },
                group: ['haitu_xinghan_use', 'haitu_xinghan_remove'],
                subSkill: {
                    use: {
                        enable: ['chooseToUse'],
                        chooseButton: {
                            hiddenCard(player, name) {
                                {
                                    return true;
                                }
                            },
                            dialog(event, player) {
                                'step 0';
                                var list = [];
                                for (var i in lib.card) {
                                    if (!lib.card[i].content) continue;
                                    if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                                    if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                                    var name = lib.card[i];
                                    if (player.getHistory('useCard').length == 0 && player.storage.haitu_xinghan_one == i && event.filterCard({ name: i }, player, event)) {
                                        list.add(i);
                                    }
                                    if (player.getHistory('useCard').length == 1 && player.storage.haitu_xinghan_two == i && event.filterCard({ name: i }, player, event)) {
                                        list.add(i);
                                    }
                                    if (player.getHistory('useCard').length == 2 && player.storage.haitu_xinghan_three == i && event.filterCard({ name: i }, player, event)) {
                                        list.add(i);
                                    }
                                    if (player.getHistory('useCard').length == 3 && player.storage.haitu_xinghan_four == i && event.filterCard({ name: i }, player, event)) {
                                        list.add(i);
                                    }
                                    if (player.getHistory('useCard').length == 4 && player.storage.haitu_xinghan_five == i && event.filterCard({ name: i }, player, event)) {
                                        list.add(i);
                                    }
                                    if (player.getHistory('useCard').length == 5 && player.storage.haitu_xinghan_six == i && event.filterCard({ name: i }, player, event)) {
                                        list.add(i);
                                    }
                                    if (player.getHistory('useCard').length == 6 && player.storage.haitu_xinghan_seven == i && event.filterCard({ name: i }, player, event)) {
                                        list.add(i);
                                    }
                                }
                                ('step 1');
                                return ui.create.dialog('星瀚', [list, 'vcard'], 'hidden');
                            },
                            filter(button, player) {
                                return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                            },
                            check(button) {
                                if (button.link[2] == 'shan') return 3;
                                var player = _status.event.player;
                                if (button.link[2] == 'jiu') {
                                    if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                                    if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                                }
                                return player.getUseValue({ name: button.link[2] });
                            },
                            backup(links, player) {
                                return {
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    filterCard(card, player) {
                                        return true;
                                    },
                                    popname: true,
                                    position: 'hes',
                                    viewAs: { name: links[0][2] },
                                    onuse(links, player) { },
                                };
                            },
                            prompt(links, player) {
                                return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                            },
                        },
                        ai: {
                            order(item, player) {
                                if (_status.event.type == 'phase') return 2;
                            },
                            result: {
                                player(player) {
                                    return 2;
                                },
                            },
                        },
                    },
                    remove: {
                        charlotte: true,
                        trigger: {
                            global: 'phaseAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            delete player.storage.haitu_xinghan_one;
                            delete player.storage.haitu_xinghan_two;
                            delete player.storage.haitu_xinghan_three;
                            delete player.storage.haitu_xinghan_four;
                            delete player.storage.haitu_xinghan_five;
                            delete player.storage.haitu_xinghan_six;
                            delete player.storage.haitu_xinghan_seven;
                            var cards1 = player.getExpansions('haitu_xinghan_one');
                            var cards2 = player.getExpansions('haitu_xinghan_two');
                            var cards3 = player.getExpansions('haitu_xinghan_three');
                            var cards4 = player.getExpansions('haitu_xinghan_four');
                            var cards5 = player.getExpansions('haitu_xinghan_five');
                            var cards6 = player.getExpansions('haitu_xinghan_six');
                            var cards7 = player.getExpansions('haitu_xinghan_seven');
                            if (cards1.length) {
                                player.lose(cards1)._triggered = null;
                            }
                            if (cards2.length) {
                                player.lose(cards2)._triggered = null;
                            }
                            if (cards3.length) {
                                player.lose(cards3)._triggered = null;
                            }
                            if (cards4.length) {
                                player.lose(cards4)._triggered = null;
                            }
                            if (cards5.length) {
                                player.lose(cards5)._triggered = null;
                            }
                            if (cards6.length) {
                                player.lose(cards6)._triggered = null;
                            }
                            if (cards7.length) {
                                player.lose(cards7)._triggered = null;
                            }
                        },
                    },
                    one: {
                        charlotte: true,
                    },
                    two: {
                        charlotte: true,
                    },
                    three: {
                        charlotte: true,
                    },
                    four: {
                        charlotte: true,
                    },
                    five: {
                        charlotte: true,
                    },
                    six: {
                        charlotte: true,
                    },
                    seven: {
                        charlotte: true,
                    },
                },
                forced: true,
                content() {
                    'step 0';
                    delete player.storage.haitu_xinghan_one;
                    delete player.storage.haitu_xinghan_two;
                    delete player.storage.haitu_xinghan_three;
                    delete player.storage.haitu_xinghan_four;
                    delete player.storage.haitu_xinghan_five;
                    delete player.storage.haitu_xinghan_six;
                    delete player.storage.haitu_xinghan_seven;
                    ('step 1');
                    var list = [];
                    for (var i in lib.card) {
                        if (!lib.card[i].content) continue;
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                        var name = lib.card[i];
                        if (lib.card[i].type == 'trick' || lib.card[i].type == 'food' || lib.card[i].type == 'basic' || lib.card[i].type == 'hsshenqi' || lib.card[i].type == 'jiguan' || lib.card[i].type == 'spell') {
                            list.add(i);
                        }
                    }
                    var card = list.randomGet(1);
                    var vcard1 = game.createCard(card);
                    player.addToExpansion('haitu_xinghan_one', vcard1).gaintag.add('haitu_xinghan_one');
                    player.storage.haitu_xinghan_one = card;
                    ('step 2');
                    var list = [];
                    for (var i in lib.card) {
                        if (!lib.card[i].content) continue;
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                        var name = lib.card[i];
                        if (lib.card[i].type == 'trick' || lib.card[i].type == 'food' || lib.card[i].type == 'basic' || lib.card[i].type == 'hsshenqi' || lib.card[i].type == 'jiguan' || lib.card[i].type == 'spell') {
                            list.add(i);
                        }
                    }
                    var card = list.randomGet(1);
                    var vcard1 = game.createCard(card);
                    player.addToExpansion('haitu_xinghan_two', vcard1).gaintag.add('haitu_xinghan_two');
                    player.storage.haitu_xinghan_two = card;
                    ('step 3');
                    var list = [];
                    for (var i in lib.card) {
                        if (!lib.card[i].content) continue;
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                        var name = lib.card[i];
                        if (lib.card[i].type == 'trick' || lib.card[i].type == 'food' || lib.card[i].type == 'basic' || lib.card[i].type == 'hsshenqi' || lib.card[i].type == 'jiguan' || lib.card[i].type == 'spell') {
                            list.add(i);
                        }
                    }
                    var card = list.randomGet(1);
                    var vcard1 = game.createCard(card);
                    player.addToExpansion('haitu_xinghan_three', vcard1).gaintag.add('haitu_xinghan_three');
                    player.storage.haitu_xinghan_three = card;
                    ('step 4');
                    var list = [];
                    for (var i in lib.card) {
                        if (!lib.card[i].content) continue;
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                        var name = lib.card[i];
                        if (lib.card[i].type == 'trick' || lib.card[i].type == 'food' || lib.card[i].type == 'basic' || lib.card[i].type == 'hsshenqi' || lib.card[i].type == 'jiguan' || lib.card[i].type == 'spell') {
                            list.add(i);
                        }
                    }
                    var card = list.randomGet(1);
                    var vcard1 = game.createCard(card);
                    player.addToExpansion('haitu_xinghan_four', vcard1).gaintag.add('haitu_xinghan_four');
                    player.storage.haitu_xinghan_four = card;
                    ('step 5');
                    var list = [];
                    for (var i in lib.card) {
                        if (!lib.card[i].content) continue;
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                        var name = lib.card[i];
                        if (lib.card[i].type == 'trick' || lib.card[i].type == 'food' || lib.card[i].type == 'basic' || lib.card[i].type == 'hsshenqi' || lib.card[i].type == 'jiguan' || lib.card[i].type == 'spell') {
                            list.add(i);
                        }
                    }
                    var card = list.randomGet(1);
                    var vcard1 = game.createCard(card);
                    player.addToExpansion('haitu_xinghan_five', vcard1).gaintag.add('haitu_xinghan_five');
                    player.storage.haitu_xinghan_five = card;
                    ('step 6');
                    var list = [];
                    for (var i in lib.card) {
                        if (!lib.card[i].content) continue;
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                        var name = lib.card[i];
                        if (lib.card[i].type == 'trick' || lib.card[i].type == 'food' || lib.card[i].type == 'basic' || lib.card[i].type == 'hsshenqi' || lib.card[i].type == 'jiguan' || lib.card[i].type == 'spell') {
                            list.add(i);
                        }
                    }
                    var card = list.randomGet(1);
                    var vcard1 = game.createCard(card);
                    player.addToExpansion('haitu_xinghan_one', vcard1).gaintag.add('haitu_xinghan_six');
                    player.storage.haitu_xinghan_six = card;
                    ('step 7');
                    var list = [];
                    for (var i in lib.card) {
                        if (!lib.card[i].content) continue;
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                        var name = lib.card[i];
                        if (lib.card[i].type == 'trick' || lib.card[i].type == 'food' || lib.card[i].type == 'basic' || lib.card[i].type == 'hsshenqi' || lib.card[i].type == 'jiguan' || lib.card[i].type == 'spell') {
                            list.add(i);
                        }
                    }
                    var card = list.randomGet(1);
                    var vcard1 = game.createCard(card);
                    player.addToExpansion('haitu_xinghan_seven', vcard1).gaintag.add('haitu_xinghan_seven');
                    player.storage.haitu_xinghan_seven = card;
                },
            },
            haitu_shenquan: {
                group: 'haitu_shenquan_remove',
                subSkill: {
                    white: { charlotte: true },
                    remove: {
                        charlotte: true,
                        forced: true,
                        trigger: {
                            global: ['die'],
                            player: 'phaseBegin',
                        },
                        forceDie: true,
                        silent: true,
                        filter(event, player) {
                            if (event.name == 'die') {
                                return player == event.player || player.getStorage('haitu_shenquan').includes(event.player);
                            }
                            return player.getStorage('haitu_shenquan').length;
                        },
                        logTarget(event, player) {
                            if (event.name != 'phase') return event.player;
                            return player.getStorage('haitu_shenquan');
                        },
                        content() {
                            'step 0';
                            var targets = player.getStorage('haitu_shenquan');
                            if (trigger.name == 'die' && player == trigger.player) {
                                for (var target of targets) {
                                    target.addAdditionalSkill('haitu_shenquan', 'haitu_shenquan_white');
                                }
                                event.finish();
                                return;
                            }
                            if (trigger.name == 'phase') event.targets = targets.slice(0).sortBySeat();
                            else event.targets = [trigger.player];
                            ('step 1');
                            var target = targets.shift();
                            var storage = player.getStorage('haitu_shenquan');
                            if (storage.includes(target)) {
                                storage.remove(target);
                                target.addAdditionalSkill('haitu_shenquan', 'haitu_shenquan_white');
                            }
                            if (targets.length) {
                                event.redo();
                            } else {
                            }
                        },
                    },
                },
                trigger: {
                    player: 'phaseDiscardBefore',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h');
                },
                content() {
                    'step 0';
                    event.given_map = {};
                    player.chooseCardTarget({
                        filterCard(card) {
                            return get.itemtype(card) == 'card' && !card.hasGaintag('haitu_shenquan');
                        },
                        filterTarget: lib.filter.notMe,
                        selectCard: [1, Infinity],
                        prompt: '请选择要分配的卡牌和目标',
                        ai1(card) {
                            if (!ui.selected.cards.length) return 1;
                            return 0;
                        },
                        ai2(target) {
                            var player = _status.event.player,
                                card = ui.selected.cards[0];
                            var val = target.getUseValue(card);
                            if (val > 0) return val * get.attitude(player, target) * 2;
                            return get.value(card, target) * get.attitude(player, target);
                        },
                    });
                    ('step 1');
                    if (result.bool) {
                        var res = result.cards,
                            target = result.targets[0];
                        player.give(res, target);
                        player.markAuto('haitu_shenquan', [target]);
                        target.addAdditionalSkill('haitu_shenquan', 'haitu_shengdun');
                        player.storage.haitu_shenquan_on = true;
                        event.goto(0);
                    }
                    ('step 2');
                    var num1 = player.countCards('h'),
                        num2 = player.hp;
                    if (num1 < num2 && player.storage.haitu_shenquan_on == true) {
                        player
                            .chooseTarget('令一名角色回复一点体力', false, function (card, player, target) {
                                return !target.isHealthy();
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                return get.effect(target, { name: 'tao' }, player, player);
                            });
                    }
                    ('step 3');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        target.recover();
                        player.storage.haitu_shenquan_on = false;
                    }
                },
            },
            kongwu2: {
                mark: true,
                trigger: {
                    global: 'phaseEnd',
                },
                filter(event, player) {
                    return event.player != player;
                },
                check(event, player) {
                    var target = event.player;
                    if (!target.next.isTurnedOver()) {
                        if (target.next == _status.roundStart) return true;
                        return false;
                    } else {
                        if (target.next.isTurnedOver()) {
                            var target2 = target.next;
                            if (target2.next == _status.roundStart) return true;
                            if (target2.next.isTurnedOver()) {
                                var target3 = target2.next;
                                if ((target3.next = _status.roundStart)) return true;
                                if (target3.next.isTurnedOver()) return true;
                            }
                            return false;
                        }
                    }
                    return false;
                },
                prompt: '是否开始执行你被跳过的阶段？',
                content() {
                    'step 0';
                    var list = [],
                        choiceList = ['执行一个额外的准备阶段', '执行一个额外的摸牌阶段', '执行一个额外的出牌阶段', '执行一个额外的弃牌阶段'];
                    if (player.hasSkill('kongwu_zhunbei_clear')) list.push('准备');
                    else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                    if (player.hasSkill('kongwu_draw_clear')) list.push('摸牌');
                    else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                    if (player.hasSkill('kongwu_use_clear')) list.push('出牌');
                    else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
                    if (player.hasSkill('kongwu_discard_clear')) list.push('弃牌');
                    else choiceList[3] = '<span style="opacity:0.5">' + choiceList[3] + '</span>';
                    player
                        .chooseControl(list)
                        .set('prompt', get.prompt('选择执行的顺序', target))
                        .set('choiceList', choiceList)
                        .set('ai', function () {
                            if (player.countCards('h') <= player.getHandcardLimit() && player.hasSkill('kongwu_discard_clear')) {
                                return '弃牌'; //QQQ
                            } else {
                                if (player.hasSkill('kongwu_zhunbei_clear')) {
                                    return '准备';
                                } else {
                                    if (player.hasSkill('kongwu_draw_clear')) {
                                        return '摸牌';
                                    } else {
                                        if (player.hasSkill('kongwu_use_clear')) {
                                            return '出牌';
                                        }
                                    }
                                }
                            }
                        });
                    ('step 1');
                    if (result.control == '准备') {
                        var next = player.phaseZhunbei();
                        event.next.remove(next);
                        trigger.next.push(next);
                        game.log(player, '开始执行准备阶段');
                        player.removeSkill('kongwu_zhunbei_clear');
                    }
                    if (result.control == '摸牌') {
                        var next = player.phaseDraw();
                        event.next.remove(next);
                        trigger.next.push(next);
                        game.log(player, '开始执行摸牌阶段');
                        player.removeSkill('kongwu_draw_clear');
                    }
                    if (result.control == '出牌') {
                        var next = player.phaseUse();
                        event.next.remove(next);
                        trigger.next.push(next);
                        game.log(player, '开始执行出牌阶段');
                        player.removeSkill('kongwu_use_clear');
                    }
                    if (result.control == '弃牌') {
                        var next = player.phaseDiscard();
                        event.next.remove(next);
                        trigger.next.push(next);
                        game.log(player, '开始执行弃牌阶段');
                        player.removeSkill('kongwu_discard_clear');
                    }
                    ('step 2');
                    if (player.hasSkill('kongwu_discard_clear') || player.hasSkill('kongwu_zhunbei_clear') || player.hasSkill('kongwu_draw_clear') || player.hasSkill('kongwu_use_clear') || player.hasSkill('kongwu_discard_clear')) {
                        event.goto(0);
                    } else {
                        player.removeSkill('kongwu2');
                        event.finish();
                    }
                },
                intro: {
                    content: '你已开启此技能二段效果',
                },
            },
            kongwu: {
                group: ['kongwu_zhunbei', 'kongwu_clear', 'kongwu_draw', 'kongwu_use', 'kongwu_discard'],
                subSkill: {
                    zhunbei_phase: {
                        popup: false,
                    },
                    draw_phase: {
                        popup: false,
                    },
                    use_phase: {
                        popup: false,
                    },
                    discard_phase: {
                        popup: false,
                    },
                    clear: {
                        trigger: {
                            global: 'roundStart',
                        },
                        forced: true,
                        firstDo: true,
                        popup: false,
                        content() {
                            player.removeMark('kongwu_mark', player.countMark('kongwu_mark'));
                            player.removeSkill('kongwu_zhunbei_clear');
                            player.removeSkill('kongwu_zhunbei_phase');
                            player.removeSkill('kongwu_draw_clear');
                            player.removeSkill('kongwu_draw_phase');
                            player.removeSkill('kongwu_use_clear');
                            player.removeSkill('kongwu_use_phase');
                            player.removeSkill('kongwu_discard_phase');
                            player.removeSkill('kongwu_discard_clear');
                            player.removeSkill('kongwu2');
                        },
                    },
                    mark: {
                        intro: {
                            content: '本轮你发动此技能次数:$',
                        },
                        marktext: '次数',
                    },
                    zhunbei: {
                        trigger: {
                            player: 'phaseZhunbeiBefore',
                        },
                        filter(event, player) {
                            if (player !== _status.currentPhase) return false;
                            return !player.hasSkill('kongwu_zhunbei_phase');
                        },
                        check(event, player) {
                            return false;
                        },
                        prompt: '是否跳过准备阶段？',
                        content() {
                            'step 0';
                            if (player.hasMark('kongwu_mark')) {
                                player.chooseToDiscard(player.countMark('kongwu_mark'), true, 'h');
                            } else {
                                event.goto(2);
                            }
                            ('step 1');
                            if (result.bool) {
                                player.draw(result.cards.length);
                            }
                            ('step 2');
                            player.addMark('kongwu_mark');
                            trigger.cancel();
                            player.addTempSkill('kongwu_zhunbei_clear', { global: 'roundStart' });
                            player.addTempSkill('kongwu_zhunbei_phase', { global: 'roundStart' });
                            if (!player.hasSkill('kongwu2')) player.addTempSkill('kongwu2', { global: 'roundStart' });
                        },
                    },
                    zhunbei_clear: {
                        mark: true,
                        popup: false,
                        intro: {
                            content: '你跳过了准备阶段',
                        },
                        marktext: '准备',
                    },
                    draw: {
                        trigger: {
                            player: 'phaseDrawBefore',
                        },
                        filter(event, player) {
                            if (player !== _status.currentPhase) return false;
                            return !player.hasSkill('kongwu_draw_phase');
                        },
                        check(event, player) {
                            if (!player.next.isTurnedOver()) {
                                if (player.next == _status.roundStart) return false;
                                return true;
                            } else {
                                if (player.next.isTurnedOver()) {
                                    var target2 = player.next;
                                    if (target2.next == _status.roundStart) return false;
                                    if (target2.next.isTurnedOver()) {
                                        var target3 = target2.next;
                                        if ((target3.next = _status.roundStart)) return false;
                                        if (target3.next.isTurnedOver()) return false;
                                    }
                                    return true;
                                }
                            }
                            return true;
                        },
                        prompt: '是否跳过摸牌阶段？',
                        content() {
                            'step 0';
                            if (player.hasMark('kongwu_mark')) {
                                player.chooseToDiscard(player.countMark('kongwu_mark'), true, 'h');
                            } else {
                                event.goto(2);
                            }
                            ('step 1');
                            if (result.bool) {
                                player.draw(result.cards.length);
                            }
                            ('step 2');
                            player.addMark('kongwu_mark');
                            trigger.cancel();
                            player.addTempSkill('kongwu_draw_clear', { global: 'roundStart' });
                            player.addTempSkill('kongwu_draw_phase', { global: 'roundStart' });
                            if (!player.hasSkill('kongwu2')) player.addTempSkill('kongwu2', { global: 'roundStart' });
                        },
                    },
                    draw_clear: {
                        mark: true,
                        popup: false,
                        intro: {
                            content: '你跳过了摸牌阶段',
                        },
                        marktext: '摸牌',
                    },
                    use: {
                        trigger: {
                            player: 'phaseUseBefore',
                        },
                        filter(event, player) {
                            if (player !== _status.currentPhase) return false;
                            return !player.hasSkill('kongwu_use_phase');
                        },
                        check(event, player) {
                            if (!player.next.isTurnedOver()) {
                                if (player.next == _status.roundStart) return false;
                                return true;
                            } else {
                                if (player.next.isTurnedOver()) {
                                    var target2 = player.next;
                                    if (target2.next == _status.roundStart) return false;
                                    if (target2.next.isTurnedOver()) {
                                        var target3 = target2.next;
                                        if ((target3.next = _status.roundStart)) return false;
                                        if (target3.next.isTurnedOver()) return false;
                                    }
                                    return true;
                                }
                            }
                            return true;
                        },
                        prompt: '是否跳过出牌阶段？',
                        content() {
                            'step 0';
                            if (player.hasMark('kongwu_mark')) {
                                player.chooseToDiscard(player.countMark('kongwu_mark'), true, 'h');
                            } else {
                                event.goto(2);
                            }
                            ('step 1');
                            if (result.bool) {
                                player.draw(result.cards.length);
                            }
                            ('step 2');
                            player.addMark('kongwu_mark');
                            trigger.cancel();
                            player.addTempSkill('kongwu_use_clear', { global: 'roundStart' });
                            player.addTempSkill('kongwu_use_phase', { global: 'roundStart' });
                            if (!player.hasSkill('kongwu2')) player.addTempSkill('kongwu2', { global: 'roundStart' });
                        },
                    },
                    use_clear: {
                        mark: true,
                        popup: false,
                        intro: {
                            content: '你跳过了出牌阶段',
                        },
                        marktext: '出牌',
                    },
                    discard: {
                        trigger: {
                            player: 'phaseDiscardBefore',
                        },
                        filter(event, player) {
                            if (player !== _status.currentPhase) return false;
                            return !player.hasSkill('kongwu_discard_phase');
                        },
                        check(event, player) {
                            return true;
                        },
                        prompt: '是否跳过弃牌阶段？',
                        content() {
                            'step 0';
                            if (player.hasMark('kongwu_mark')) {
                                player.chooseToDiscard(player.countMark('kongwu_mark'), true, 'h');
                            } else {
                                event.goto(2);
                            }
                            ('step 1');
                            if (result.bool) {
                                player.draw(result.cards.length);
                            }
                            ('step 2');
                            player.addMark('kongwu_mark');
                            trigger.cancel();
                            player.addTempSkill('kongwu_discard_clear', { global: 'roundStart' });
                            player.addTempSkill('kongwu_discard_phase', { global: 'roundStart' });
                            if (!player.hasSkill('kongwu2')) player.addTempSkill('kongwu2', { global: 'roundStart' });
                        },
                    },
                    discard_clear: {
                        mark: true,
                        popup: false,
                        intro: {
                            content: '你跳过了弃牌阶段',
                        },
                        marktext: '弃牌',
                    },
                },
            },
            fems_yanyi: {
                group: ['fems_yanyi_use', 'fems_yanyi_target'],
                trigger: {
                    global: 'phaseUseEnd',
                },
                prompt: '是否记录其出牌阶段使用过的牌和牌序？',
                charlotte: true,
                filter(event, player) {
                    return (
                        event.player != player &&
                        event.player.hasHistory('useCard', function (evt) {
                            var type = get.type(evt.card);
                            if (type != 'basic' && type != 'trick') return false;
                            return evt.getParent('phaseUse') == event;
                        })
                    );
                },
                forced: true,
                content() {
                    var history = trigger.player.getHistory('useCard', function (evt) {
                        var type = get.type(evt.card);
                        if (type != 'basic' && type != 'trick') return false;
                        return evt.getParent('phaseUse') == trigger;
                    });
                    var list = [];
                    event.list = list;
                    for (var i = 0; i < history.length; i++) {
                        var card = history[i].card;
                        list.push({ name: card.name });
                        if (card.nature) list[i].nature = card.nature;
                    }
                    trigger.player.storage.fems_yanyi_catatan = event.list;
                    trigger.player.addTempSkill('fems_yanyi_catatan', 'roundStart');
                },
                subSkill: {
                    catatan: {
                        mark: true,
                        intro: {
                            content: '已记录:$',
                        },
                        onremove(player) {
                            delete player.storage.fems_yanyi_catatan;
                        },
                    },
                    use: {
                        trigger: {
                            player: 'phaseUseEnd',
                        },
                        forced: true,
                        charlotte: true,
                        filter(event, player) {
                            return player.hasHistory('useCard', function (evt) {
                                var type = get.type(evt.card);
                                if (type != 'basic' && type != 'trick') return false;
                                return evt.getParent('phaseUse') == event;
                            });
                        },
                        content() {
                            var history = player.getHistory('useCard', function (evt) {
                                var type = get.type(evt.card);
                                if (type != 'basic' && type != 'trick') return false;
                                return evt.getParent('phaseUse') == trigger;
                            });
                            var list = [];
                            event.list = list;
                            for (var i = 0; i < history.length; i++) {
                                var card = history[i].card;
                                list.push({ name: card.name });
                                if (card.nature) list[i].nature = card.nature;
                            }
                            player.storage.fems_yanyi_catatan2 = event.list;
                            player.addTempSkill('fems_yanyi_catatan2');
                        },
                    },
                    catatan2: {
                        mark: true,
                        intro: {
                            content: '已记录:$',
                        },
                        onremove(player) {
                            delete player.storage.fems_yanyi_catatan2;
                        },
                    },
                    target: {
                        trigger: {
                            player: 'phaseUseAfter',
                        },
                        lastDo: true,
                        forced: true,
                        filter(event, player) {
                            return (
                                player.countCards('h') > 0 &&
                                player.hasHistory('useCard', function (evt) {
                                    var type = get.type(evt.card);
                                    if (type != 'basic' && type != 'trick') return false;
                                    return evt.getParent('phaseUse') == event;
                                })
                            );
                        },
                        content() {
                            'step 0';
                            player
                                .chooseTarget('选择你可以你以此法记录过的出牌阶段出牌数不小于你的其他角色,若如此做,你可以将一张手牌当作其出牌阶段使用过的第X张牌使用(X为你出牌阶段的出牌数,装备牌,延时锦囊牌不能记录,不计入记录的牌序).', function (event, player, target) {
                                    var list1 = target.storage.fems_yanyi_catatan;
                                    var list2 = player.storage.fems_yanyi_catatan2;
                                    if (target == player) return false;
                                    if (list1 >= list2) return true;
                                    return false;
                                })
                                .set('ai', function (target) {
                                    return Math.random();
                                });
                            ('step 1');
                            if (result.targets?.length) {
                                var list = result.targets[0].storage.fems_yanyi_catatan;
                                var num = player.storage.fems_yanyi_catatan2.length - 1;
                                var card = list[num];
                                game.log(player, '选择了『' + get.translation(result.targets[0]) + '』,可将一张牌当作【' + get.translation(card) + '】使用');
                                if (lib.filter.cardEnabled(card)) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current);
                                        })
                                    ) {
                                        lib.skill.fems_yanyi_target.viewAs = card;
                                        var next = player.chooseToUse();
                                        if (next.isOnline()) {
                                            player.send(function (card) {
                                                lib.skill.fems_yanyi_target.viewAs = card;
                                            }, card);
                                        }
                                        next.set('openskilldialog', '演绎:将一张手牌当' + get.translation(card) + '使用');
                                        next.set('norestore', true);
                                        next.set('_backupevent', 'fems_yanyi_target');
                                        next.set('custom', {
                                            add: {},
                                            replace: { window() { } },
                                        });
                                        next.backup('fems_yanyi_target');
                                    }
                                }
                            } else {
                                event.finish();
                            }
                        },
                    },
                },
            },
            haitu_lingqiao: {
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    if (player.storage.haitu_lingqiao_record <= 0) return false;
                    var num1 = get.cardNameLength(event.card);
                    var num0 = player.storage.haitu_lingqiao_record;
                    if (get.cardNameLength(event.card) == player.storage.haitu_lingqiao_record) return false;
                    if (player.storage.haitu_lingqiao_record > get.cardNameLength(event.card)) {
                        return player.countCards('he') >= player.storage.haitu_lingqiao_record - get.cardNameLength(event.card);
                    } else {
                        return player.countCards('he') >= get.cardNameLength(event.card) - player.storage.haitu_lingqiao_record;
                    }
                },
                group: 'haitu_lingqiao_record',
                usable: 1,
                subSkill: {
                    blocker: { charlotte: true },
                    use: { charlotte: true, usable: 1 },
                    record: {
                        charlotte: true,
                        forced: true,
                        silent: true,
                        trigger: {
                            player: 'useCardAfter',
                        },
                        content() {
                            player.getStat('skill').haitu_lingqiao_record = get.cardNameLength(trigger.card);
                            player.storage.haitu_lingqiao_record = get.cardNameLength(trigger.card);
                        },
                    },
                },
                check(event, player) {
                    return true;
                },
                getLastUsed(player, event) {
                    var history = player.getAllHistory('useCard');
                    var index;
                    if (event) index = history.indexOf(event) - 1;
                    else index = history.length - 1;
                    if (index >= 0) return history[index];
                    return false;
                },
                forced: true,
                content() {
                    'step 0';
                    var num1 = get.cardNameLength(trigger.card);
                    var num0 = player.storage.haitu_lingqiao_record;
                    if (num0 > num1) {
                        event.num = num0 - num1;
                    } else {
                        event.num = num1 - num0;
                    }
                    if (event.num != 0) {
                        player.chooseCard('he', false, event.num, '请重铸牌', lib.filter.cardrecastable).ai = function (card) {
                            return 6 - get.value(card);
                        };
                    } else {
                        event.finish();
                    }
                    ('step 1');
                    if (result.bool) {
                        player.recast(result.cards);
                    } else {
                        player.getStat('triggerSkill').haitu_lingqiao -= 1;
                    }
                },
            },
            haitu_liushou: {
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    var num = event.player.getHistory('useCard', function (evt) {
                        return evt.targets.includes(player) && event.player != player;
                    }).length;
                    return num == 0;
                },
                forced: true,
                content() {
                    'step 0';
                    event.list = [];
                    for (var i in lib.card) {
                        if (lib.card[i].type == 'equip') {
                            event.list.add(i);
                        }
                    }
                    game.broadcastAll(
                        function (player, list) {
                            if (list.length) {
                                player.chooseVCardButton('是否使用其中的一张牌？', list.randomGets(3), prompt).set('ai', function (button) {
                                    var card = {
                                        name: button.link[2],
                                    },
                                        player = _status.event.player;
                                    return _status.event.player.getUseValue(card);
                                });
                            } else {
                                event.finish();
                            }
                        },
                        player,
                        event.list
                    );
                    ('step 1');
                    if (result.links?.length) {
                        var card1 = game.createCard(result.links[0][2]);
                        player.chooseUseTarget(false, card1, false);
                    }
                },
            },
            YS_nance: {
                forced: true,
                trigger: {
                    player: ['useCardAfter'],
                },
                group: ['YS_nance_respond', 'YS_nance_discard'],
                subSkill: {
                    respond: {
                        trigger: {
                            player: ['respondAfter'],
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.cards.length != 1) return false;
                            return true;
                        },
                        content() {
                            'step 0';
                            'step 1';
                            'step 2';
                            if (trigger.cards[0].suit == 'spade') {
                                event.num = 3;
                            }
                            if (trigger.cards[0].suit == 'club') {
                                event.num = 2;
                            }
                            if (trigger.cards[0].suit == 'diamond') {
                                event.num = 1;
                            }
                            ('step 3');
                            if (player.countMark('YS_mimou_use') == 1) {
                                event.YS_nance_position1 = 1;
                            }
                            if (player.countMark('YS_mimou_use') == 2) {
                                event.YS_nance_position1 = 2;
                            }
                            if (player.countMark('YS_mimou_use') == 3) {
                                event.YS_nance_position1 = 3;
                            }
                            if (player.countMark('YS_mimou_draw') == 1) {
                                event.YS_nance_position2 = 1;
                            }
                            if (player.countMark('YS_mimou_draw') == 2) {
                                event.YS_nance_position2 = 2;
                            }
                            if (player.countMark('YS_mimou_draw') == 3) {
                                event.YS_nance_position2 = 3;
                            }
                            if (player.countMark('YS_mimou_discard') == 1) {
                                event.YS_nance_position3 = 1;
                            }
                            if (player.countMark('YS_mimou_discard') == 2) {
                                event.YS_nance_position3 = 2;
                            }
                            if (player.countMark('YS_mimou_discard') == 3) {
                                event.YS_nance_position3 = 3;
                            }
                            {
                                if (event.YS_nance_position2 == event.num) {
                                    event.finish();
                                }
                                player.removeMark('YS_mimou_draw', player.countMark('YS_mimou_draw'));
                                player.addMark('YS_mimou_draw', event.num);
                                if (player.countMark('YS_mimou_use') == event.num) {
                                    player.removeMark('YS_mimou_use', player.countMark('YS_mimou_use'));
                                    player.addMark('YS_mimou_use', event.YS_nance_position2);
                                }
                                if (player.countMark('YS_mimou_discard') == event.num) {
                                    player.removeMark('YS_mimou_discard', player.countMark('YS_mimou_discard'));
                                    player.addMark('YS_mimou_discard', event.YS_nance_position2);
                                }
                            }
                            event.finish();
                            ('step 4');
                            var list = [];
                            list.push(1);
                            list.push(2);
                            list.push(3);
                            if (list.length) {
                                player.chooseControl(list).set('prompt', '选择要移动的数字(可能无法移动)');
                            }
                            ('step 5');
                            if (result.control) {
                                event.num = result.control;
                                event.goto(3);
                            }
                            ('step 6');
                            for (var i of trigger.cards) {
                                if (i.suit == 'spade') {
                                    event.num = 3;
                                }
                                if (i.suit == 'club') {
                                    event.num = 2;
                                }
                                if (i.suit == 'diamond') {
                                    event.num = 1;
                                }
                                if (i.suit == 'heart') {
                                    event.goto(4);
                                }
                            }
                            event.goto(3);
                        },
                    },
                    discard: {
                        trigger: {
                            player: 'loseAfter',
                            global: 'loseAsyncAfter',
                        }, //弃牌
                        forced: true,
                        filter(event, player) {
                            if (event.cards.length != 1) return false;
                            if (event.type != 'discard' || event.getlx === false) return false;
                            var evt = event.getl(player);
                            if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                            return true;
                        },
                        content() {
                            'step 0';
                            'step 1';
                            'step 2';
                            if (trigger.cards[0].suit == 'spade') {
                                event.num = 3;
                            }
                            if (trigger.cards[0].suit == 'club') {
                                event.num = 2;
                            }
                            if (trigger.cards[0].suit == 'diamond') {
                                event.num = 1;
                            }
                            //第几个位置发生变化
                            ('step 3');
                            if (player.countMark('YS_mimou_use') == 1) {
                                event.YS_nance_position1 = 1;
                            }
                            if (player.countMark('YS_mimou_use') == 2) {
                                event.YS_nance_position1 = 2;
                            }
                            if (player.countMark('YS_mimou_use') == 3) {
                                event.YS_nance_position1 = 3;
                            }
                            if (player.countMark('YS_mimou_draw') == 1) {
                                event.YS_nance_position2 = 1;
                            }
                            if (player.countMark('YS_mimou_draw') == 2) {
                                event.YS_nance_position2 = 2;
                            }
                            if (player.countMark('YS_mimou_draw') == 3) {
                                event.YS_nance_position2 = 3;
                            }
                            if (player.countMark('YS_mimou_discard') == 1) {
                                event.YS_nance_position3 = 1;
                            }
                            if (player.countMark('YS_mimou_discard') == 2) {
                                event.YS_nance_position3 = 2;
                            }
                            if (player.countMark('YS_mimou_discard') == 3) {
                                event.YS_nance_position3 = 3;
                            }
                            {
                                if (event.YS_nance_position3 == event.num) {
                                    event.finish();
                                }
                                player.removeMark('YS_mimou_discard', player.countMark('YS_mimou_discard'));
                                player.addMark('YS_mimou_discard', event.num);
                                if (player.countMark('YS_mimou_draw') == event.num) {
                                    player.removeMark('YS_mimou_draw', player.countMark('YS_mimou_draw'));
                                    player.addMark('YS_mimou_draw', event.YS_nance_position3);
                                }
                                if (player.countMark('YS_mimou_use') == event.num) {
                                    player.removeMark('YS_mimou_use', player.countMark('YS_mimou_use'));
                                    player.addMark('YS_mimou_use', event.YS_nance_position3);
                                }
                            }
                            event.finish();
                        },
                    },
                },
                filter(event, player) {
                    if (event.cards.length != 1) return false;
                    return true;
                },
                content() {
                    'step 0';
                    'step 1';
                    'step 2';
                    {
                        if (trigger.cards[0].suit == 'spade') {
                            event.num = 3;
                        }
                        if (trigger.cards[0].suit == 'club') {
                            event.num = 2;
                        }
                        if (trigger.cards[0].suit == 'diamond') {
                            event.num = 1;
                        }
                    }
                    ('step 3');
                    if (player.countMark('YS_mimou_use') == 1) {
                        event.YS_nance_position1 = 1;
                    }
                    if (player.countMark('YS_mimou_use') == 2) {
                        event.YS_nance_position1 = 2;
                    }
                    if (player.countMark('YS_mimou_use') == 3) {
                        event.YS_nance_position1 = 3;
                    }
                    if (player.countMark('YS_mimou_draw') == 1) {
                        event.YS_nance_position2 = 1;
                    }
                    if (player.countMark('YS_mimou_draw') == 2) {
                        event.YS_nance_position2 = 2;
                    }
                    if (player.countMark('YS_mimou_draw') == 3) {
                        event.YS_nance_position2 = 3;
                    }
                    if (player.countMark('YS_mimou_discard') == 1) {
                        event.YS_nance_position3 = 1;
                    }
                    if (player.countMark('YS_mimou_discard') == 2) {
                        event.YS_nance_position3 = 2;
                    }
                    if (player.countMark('YS_mimou_discard') == 3) {
                        event.YS_nance_position3 = 3;
                    }
                    {
                        if (event.YS_nance_position1 == event.num) {
                            event.finish();
                        }
                        player.removeMark('YS_mimou_use', player.countMark('YS_mimou_use'));
                        player.addMark('YS_mimou_use', event.num);
                        if (player.countMark('YS_mimou_draw') == event.num) {
                            player.removeMark('YS_mimou_draw', player.countMark('YS_mimou_draw'));
                            player.addMark('YS_mimou_draw', event.YS_nance_position1);
                        }
                        if (player.countMark('YS_mimou_discard') == event.num) {
                            player.removeMark('YS_mimou_discard', player.countMark('YS_mimou_discard'));
                            player.addMark('YS_mimou_discard', event.YS_nance_position1);
                        }
                    }
                    event.finish();
                    ('step 4');
                    var list = [];
                    list.push(1);
                    list.push(2);
                    list.push(3);
                    if (list.length) {
                        player.chooseControl(list).set('prompt', '选择要移动的数字(可能无法移动)');
                    }
                    ('step 5');
                    if (result.control) {
                        event.num = result.control;
                        event.goto(3);
                    }
                    ('step 6');
                    if (trigger.cards[0].suit == 'spade') {
                        event.num = 3;
                    }
                    if (trigger.cards[0].suit == 'club') {
                        event.num = 2;
                    }
                    if (trigger.cards[0].suit == 'diamond') {
                        event.num = 1;
                    }
                    if (trigger.cards[0].suit == 'heart') {
                        event.goto(4);
                    }
                    event.goto(3);
                },
            },
            YS_mimou: {
                group: 'YS_mimou_hurt',
                init(player) {
                    player.removeMark('YS_mimou_use', player.countMark('YS_mimou_use'));
                    player.removeMark('YS_mimou_draw', player.countMark('YS_mimou_draw'));
                    player.removeMark('YS_mimou_discard', player.countMark('YS_mimou_discard'));
                    player.addMark('YS_mimou_use', 1);
                    player.addMark('YS_mimou_draw', 2);
                    player.addMark('YS_mimou_discard', 3);
                },
                subSkill: {
                    hurt: {
                        trigger: { player: 'damageEnd' },
                        check(event, player) {
                            if (player.countMark('YS_mimou_draw') < player.countMark('YS_mimou_discard')) {
                                return false;
                            } //QQQ
                            return true;
                        },
                        content() {
                            'step 0';
                            player.draw(player.storage.YS_mimou_draw);
                            player.chooseToDiscard(player.storage.YS_mimou_discard, 'he', true);
                        },
                    },
                    draw: {},
                    use: {},
                    discard: {},
                },
                enable: 'phaseUse',
                filter(event, player) {
                    if (player.getStat().skill.YS_mimou >= player.countMark('YS_mimou_use')) {
                        return false;
                    }
                    return true;
                },
                content() {
                    'step 0';
                    player.draw(player.storage.YS_mimou_draw);
                    player.chooseToDiscard(player.storage.YS_mimou_discard, 'he', true);
                },
            },
            YS_qiexi: {
                trigger: {
                    player: 'drawBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    player.chooseToGuanxing(event.num);
                    var list = [];
                    list.push('牌堆顶');
                    list.push('牌堆底');
                    if (list.length) {
                        player.chooseControl(list).set('prompt', '请选择摸牌的位置');
                    }
                    ('step 1');
                    if (result.control == '牌堆顶') {
                    } else {
                        trigger.bottom = true;
                    }
                },
            },
            haitu_yeguang: {
                group: ['haitu_yeguang_buff', 'haitu_yeguang_remove'],
                subSkill: {
                    remove: {
                        trigger: { global: 'phaseAfter' },
                        charlotte: true,
                        filter(event, player) {
                            return player.countMark('haitu_yeguang') > 0;
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.removeMark('haitu_yeguang', player.countMark('haitu_yeguang'));
                        },
                    },
                    buff: {
                        trigger: {
                            player: ['useCard'],
                        },
                        filter(event, player) {
                            return player.countMark('haitu_yeguang') > 0;
                        },
                        forced: true,
                        charlotte: true,
                        silent: true,
                        content() {
                            'step 0';
                            player.removeMark('haitu_yeguang', 1);
                            ('step 1');
                            player
                                .chooseTarget(('prompt', '弃置场上一张牌,或摸一张牌'), function (card, player, target) {
                                    return target.countCards('ej') > 0;
                                })
                                .set('ai', function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    if (att > 0) {
                                        var js = target.getCards('j');
                                        if (js.length) {
                                            var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                            if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                                return 2 * att;
                                            }
                                        }
                                        if (target.getEquip('baiyin') && target.isDamaged() && get.recovereffect(target, player, player) > 0) {
                                            if (target.hp == 1 && !target.hujia) return 1.6 * att;
                                            if (target.hp == 2) return 0.01 * att;
                                            return 0;
                                        }
                                    }
                                    var es = target.getCards('e');
                                    var noe = target.hasSkillTag('noe');
                                    var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                                    if (noe || noe2) return 0;
                                    if (att <= 0 && !es.length) return 1.5 * att;
                                    return -1.5 * att;
                                });
                            ('step 2');
                            if (result.targets?.length) {
                                event.target = result.targets[0];
                            } else {
                                player.draw();
                                event.finish();
                            }
                            ('step 3');
                            if (event.target) {
                                player.discardPlayerCard('ej', true, event.target);
                            }
                        },
                        charlotte: true,
                    },
                },
                trigger: { player: 'phaseUseBegin' },
                forced: true,
                silent: true,
                forced: true,
                mark: true,
                markimage: 'image/card/charge.png',
                intro: {
                    content(num, player, storage) {
                        var stat = player.countMark('haitu_yeguang');
                        var str = '<br><li>接下来使用';
                        str += stat;
                        str += '张牌会触发<曳光"效果.';
                        return str;
                    },
                },
                content() {
                    'step 0';
                    var next = player.chooseCardTarget({
                        position: 'he',
                        filterTarget(card, player, target) {
                            return player.canUse({ name: 'sha' }, target, false);
                        },
                        ai1(card) {
                            return get.unuseful(card) + 4;
                        },
                        ai2(target) {
                            return get.effect(target, { name: 'sha' }, player, player);
                        },
                        selectCard: [1, Infinity],
                        prompt: get.prompt(event.name),
                        prompt2: '你可以将任意张牌当无距离限制的【杀】使用.',
                    });
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        {
                            var cards = result.cards;
                            var cardx = { name: 'sha' };
                            event.num = cards.length;
                            var next = player.useCard(cardx, result.cards, target, false);
                            event.goto(2);
                        }
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    player.addMark('haitu_yeguang', event.num);
                },
            },
            haitu_jieyan: {
                trigger: {
                    player: 'damageEnd',
                    source: 'damageSource',
                },
                forced: true,
                subSkill: {
                    cambo: {
                        charlotte: true,
                        mod: {
                            cardUsable(card, player, num) {
                                return Infinity;
                            },
                            targetInRange(card, player) {
                                return true;
                            },
                        },
                    },
                    blocker: {
                        charlotte: true,
                        trigger: { source: 'damageBegin1' },
                        forced: true,
                        ai: {
                            effect: {
                                player(card, player, target) {
                                    if (!player.hasSkill('haitu_bingxi') || player.countCards('he') <= 2 * player.countMark('haitu_bingxi') + 1) {
                                        if (get.tag(card, 'damage')) return 'zeroplayertarget';
                                    }
                                },
                            },
                        },
                        content() {
                            trigger.cancel();
                        },
                    },
                },
                check(event, player) {
                    return true;
                },
                content() {
                    player.draw(trigger.num);
                    game.countPlayer(function (current) {
                        current.addTempSkill('haitu_jieyan_blocker');
                    });
                    player.addTempSkill('haitu_jieyan_cambo');
                },
            },
            haitu_bingxi: {
                trigger: {
                    source: 'damageBegin1',
                },
                mark: true,
                marktext: '息',
                intro: {
                    name2: '息',
                    content(num, player, storage) {
                        var stat = player.countMark('haitu_bingxi');
                        var str = '<br><li>下次造成的伤害增加';
                        str += stat;
                        return str;
                    },
                },
                subSkill: {
                    hit: {
                        trigger: { source: 'damageBefore' },
                        forced: true,
                        silent: true,
                        charlotte: true,
                        filter(event, player) {
                            return player.countMark('haitu_bingxi') > 0;
                        },
                        content() {
                            trigger.num += player.countMark('haitu_bingxi');
                            player.removeMark('haitu_bingxi', player.countMark('haitu_bingxi'));
                        },
                    },
                },
                group: 'haitu_bingxi_hit',
                filter(event, player) {
                    return player.countCards('he') >= 2 * event.num;
                },
                forced: true,
                silent: true,
                ai: {
                    effect: {
                        player(card, player, target) {
                            if (player.countCards('he') >= 2 && get.tag(card, 'damage') && get.attitude(player, target) > 0 && player != target && (!player.getStat('triggerSkill').olxiuhao)) {
                                return [0, 0.5, 0, 0.5];
                            }
                        },
                    },
                },
                content() {
                    'step 0';
                    event.num = 2 * trigger.num;
                    player.chooseCard('he', false, event.num, '你可以重铸牌以防止伤害', lib.filter.cardrecastable).ai = function (card) {
                        if (player.hasSkill('haitu_jieyan_blocker')) {
                            return 6 - get.value(card);
                        }
                        if (get.attitude(player, event.player) > 0) {
                            return true;
                        }
                        {
                            return false;
                        }
                    };
                    ('step 1');
                    if (result.bool) {
                        player.recast(result.cards);
                        player.addMark('haitu_bingxi', trigger.num);
                        trigger.cancel();
                    } else {
                        event.finish();
                    }
                },
            },
            haitu_shouwu: {
                global: 'haitu_shouwu_clear',
                derivation: 'haitu_shouwu_up',
                subSkill: {
                    up: {
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                        },
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            return ['sha'].includes(event.card.name);
                        },
                        content() {
                            trigger.effectCount++;
                        },
                        charlotte: true,
                        forced: true,
                    },
                    white: { charlotte: true, silent: true },
                    clear: {
                        charlotte: true,
                        forced: true,
                        silent: true,
                        trigger: {
                            global: ['die'],
                            player: 'phaseBegin',
                        },
                        forceDie: true,
                        silent: true,
                        filter(event, player) {
                            if (event.name == 'die') {
                                return player == event.player || player.getStorage('haitu_shouwu').includes(event.player);
                            }
                            return player.getStorage('haitu_shouwu').length;
                        },
                        logTarget(event, player) {
                            if (event.name != 'phase') return event.player;
                            return player.getStorage('haitu_shouwu');
                        },
                        content() {
                            'step 0';
                            var targets = player.getStorage('haitu_shouwu');
                            if (trigger.name == 'die' && player == trigger.player) {
                                for (var target of targets) {
                                    target.addAdditionalSkill('haitu_shouwu', 'haitu_shouwu_white');
                                }
                                event.finish();
                                return;
                            }
                            if (trigger.name == 'phase') event.targets = targets.slice(0).sortBySeat();
                            else event.targets = [trigger.player];
                            ('step 1');
                            var target = targets.shift();
                            var storage = player.getStorage('haitu_shouwu');
                            if (storage.includes(target)) {
                                storage.remove(target);
                                target.addAdditionalSkill('haitu_shouwu', 'haitu_shouwu_white');
                            }
                            if (targets.length) {
                                event.redo();
                            } else {
                            }
                        },
                        popup: false,
                        _priority: 1,
                    },
                },
                enable: 'phaseUse',
                usable: 1,
                discard: false,
                position: 'he',
                filterCard(card) {
                    return card.name == 'sha' || get.subtype(card) == 'equip1';
                },
                filterTarget(card, player, target) {
                    if (ui.selected.targets.length == 0) {
                        return player != target;
                    }
                    return true;
                },
                lose: false,
                delay: false,
                check(card) {
                    return 8 - get.value(card);
                },
                content() {
                    'step 0';
                    player.give(cards, targets[0], 'visible');
                    player.markAuto('haitu_shouwu', [targets[0]]);
                    targets[0].addAdditionalSkill('haitu_shouwu', 'haitu_shouwu_up');
                },
                ai: {
                    result: {
                        player(player) {
                            var players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                if (players[i] != player && get.attitude(player, players[i]) > 1 && get.attitude(players[i], player) > 1) {
                                    return 1;
                                }
                            }
                            return 0;
                        },
                        target(player, target) {
                            return 1;
                        },
                    },
                    order: 8.5,
                    expose: 0.2,
                },
            },
            haitu_shenyou: {
                mark: true,
                group: ['haitu_shenyou_poem', 'haitu_shenyou_ai'],
                marktext: '游',
                derivation: 'haitu_shuomingshenyou',
                init(player) {
                    player.addSkill('haitu_shenyou_end');
                },
                charlotte: true,
                intro: {
                    mark(dialog, content, player) {
                        if (player.isUnderControl(true)) {
                            if (_status.gameStarted) {
                                dialog.add(
                                    ui.create.div('.menubutton.pointerdiv', '点击发动', function () {
                                        if (!this.disabled && player.hasSkill('haitu_shenyou')) {
                                            this.disabled = true;
                                            this.classList.add('disabled');
                                            player.update();
                                            this.style.opacity = 0.5;
                                            lib.skill.haitu_shenyou.clickable(player);
                                        }
                                    })
                                );
                            }
                        }
                    },
                },
                clickable(dialog, content, player) {
                    {
                        {
                            if (_status.paused && _status.imchoosing && !_status.auto) {
                                ui.click.auto();
                            }
                            game.createEvent('haitu_shenyou', true).setContent(function () {
                                if (player.countCards('he') >= 1) {
                                } else {
                                    event.finish();
                                }
                                var next = game.createEvent('haitu_shenyou');
                                next.player = game.me;
                                next.target = target;
                                next.setContent(lib.skill.haitu_shenyou.content);
                            }).player = game.me;
                        }
                        if (_status.imchoosing) {
                            delete _status.event._cardChoice;
                            delete _status.event._targetChoice;
                            game.check();
                        }
                    }
                    if (_status.paused && _status.imchoosing && !_status.auto) {
                        ui.click.auto();
                    }
                },
                subSkill: {
                    ai: {
                        charlotte: true,
                        supercharlotte: true,
                        silent: true,
                        filter(event, player) {
                            return _status.auto || !player.isUnderControl(true);
                        },
                        trigger: {
                            global: ['useCard1', 'phaseZhunbeiEnd', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd', 'phaseJieshuEnd', 'loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        silent: true,
                        check(event, player) {
                            var suits = [];
                            for (var i of player.countCards('he')) {
                                var suit = i.suit;
                                if (!lib.suit.includes(suit)) {
                                }
                                suits.add(suit);
                            }
                            if (player.countCards('h') <= suits.length) {
                                return true;
                            } else {
                                return false;
                            }
                        },
                        content() {
                            'step 0';
                            if (!player.hasSkill('haitu_shenyou', null, false, false)) {
                                event.finish();
                            }
                            if (player.countCards('he') >= 1) {
                                player.removeSkill('haitu_shenyou');
                                player.storage.haitu_shenyou = true;
                            } else {
                                event.finish();
                            }
                            ('step 1');
                            player.chooseCard('he', true, [1, Infinity], '神游:弃置任意张牌');
                            ('step 2');
                            player.storage.haitu_shenyou_suit = [];
                            player.storage.haitu_shenyou_record = 0;
                            for (var i of result.cards) {
                                var suit = i.suit;
                                if (!lib.suit.includes(suit)) return;
                                if (!player.storage.haitu_shenyou_suit.includes(suit)) {
                                    player.storage.haitu_shenyou_suit.add(suit);
                                    player.storage.haitu_shenyou_record += 1;
                                }
                            }
                            player.addTempSkill('haitu_shenyou_card');
                            player.discard(result.cards);
                        },
                    },
                    end: {
                        charlotte: true,
                        forced: true,
                        supercharlotte: true,
                        silent: true,
                        trigger: {
                            global: 'phaseAfter',
                        },
                        init(player) {
                            player.storage.haitu_shenyou = false;
                        },
                        content() {
                            player.storage.haitu_shenyou_suit = [];
                            if (player.storage.haitu_shenyou == true) {
                                player.addSkill('haitu_shenyou');
                                player.storage.haitu_shenyou = false;
                            }
                        },
                    },
                    poem: {
                        charlotte: true,
                        supercharlotte: true,
                        silent: true,
                        enable: 'phaseUse',
                        silent: true,
                        silent: true,
                        filter(event, player) {
                            return player.countCards('he') > 0;
                        },
                        content() {
                            'step 0';
                            if (!player.hasSkill('haitu_shenyou', null, false, false)) {
                                event.finish();
                            }
                            ('step 1');
                            var word = ['宽宏而仁慈的活人啊 你走过黑暗的空气 来访问用血玷污土地的我们', '在不幸中回忆幸福的时光,没有比这更大的痛苦了', '能够使我漂浮于人生的泥沼中而不致陷污的,是我的信心', '从我,是进入悲惨之城的道路;从我,是进入永恒的痛苦的道路;从我,是走进永劫的人群的道路', '能够使我漂浮于人生的泥沼中而不致陷污的,是我的信心'];
                            player.say(['宽宏而仁慈的活人啊 你走过黑暗的空气 来访问用血玷污土地的我们', '在不幸中回忆幸福的时光,没有比这更大的痛苦了', '能够使我漂浮于人生的泥沼中而不致陷污的,是我的信心', '从我,是进入悲惨之城的道路;从我,是进入永恒的痛苦的道路;从我,是走进永劫的人群的道路', '能够使我漂浮于人生的泥沼中而不致陷污的,是我的信心'].randomGet());
                            if (player.countCards('he') >= 1) {
                                player.removeSkill('haitu_shenyou');
                                player.storage.haitu_shenyou = true;
                            } else {
                                event.finish();
                            }
                            ('step 2');
                            player.chooseCard('he', true, [1, Infinity], '神游:弃置任意张牌');
                            ('step 3');
                            player.storage.haitu_shenyou_suit = [];
                            player.storage.haitu_shenyou_record = 0;
                            for (var i of result.cards) {
                                var suit = i.suit;
                                if (!lib.suit.includes(suit)) return;
                                if (!player.storage.haitu_shenyou_suit.includes(suit)) {
                                    player.storage.haitu_shenyou_suit.add(suit);
                                    player.storage.haitu_shenyou_record += 1;
                                }
                            }
                            player.addTempSkill('haitu_shenyou_card');
                            player.discard(result.cards);
                            ('step 4');
                        },
                    },
                    card: {
                        charlotte: true,
                        forced: true,
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        filter(event, player) {
                            if (event.name == 'gain' && event.player == player) return player.countCards('h') > player.storage.haitu_shenyou_record;
                            var evt = event.getl(player);
                            if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= player.storage.haitu_shenyou_record) return false;
                            var evt = event;
                            for (var i = 0; i < player.storage.haitu_shenyou_record; i++) {
                                evt = evt.getParent('haitu_shenyou_card');
                                if (evt.name != 'haitu_shenyou_card') return true;
                            }
                            return false;
                        },
                        content() {
                            var num = player.storage.haitu_shenyou_record - player.countCards('h');
                            if (num == 0) {
                                event.finish();
                            }
                            if (num > 0) player.draw(num);
                            else player.chooseToDiscard('h', true, -num);
                        },
                    },
                },
                global: 'haitu_shenyou_end',
                silent: true,
                content() {
                    'step 0';
                    if (!player.hasSkill('haitu_shenyou', null, false, false)) {
                        event.finish();
                    }
                    if (player.countCards('he') >= 1) {
                        player.removeSkill('haitu_shenyou');
                        player.storage.haitu_shenyou = true;
                    } else {
                        event.finish();
                    }
                    ('step 1');
                    player.chooseCard('he', true, [1, Infinity], '神游:弃置任意张牌');
                    ('step 2');
                    player.storage.haitu_shenyou_suit = [];
                    player.storage.haitu_shenyou_record = 0;
                    for (var i of result.cards) {
                        var suit = i.suit;
                        if (!lib.suit.includes(suit)) return;
                        if (!player.storage.haitu_shenyou_suit.includes(suit)) {
                            player.storage.haitu_shenyou_suit.add(suit);
                            player.storage.haitu_shenyou_record += 1;
                        }
                    }
                    player.addTempSkill('haitu_shenyou_card');
                    player.discard(result.cards);
                },
            },
            Marvel_menpiao: {
                mark: true,
                marktext2: '门',
                marktext: '门',
                marktext: '门',
                intro: {
                    content(num, player, storage) {
                        var str = '可以将【闪】或【无懈可击】当作';
                        if (!player.storage.Marvel_menpiao_mark) {
                            str += '空气';
                        } else {
                            str += get.translation(player.storage.Marvel_menpiao_mark);
                        }
                        str += '使用';
                        return str;
                    },
                },
                forced: true,
                content() {
                    for (var i = 0; i < evt.cards2.length; i++) {
                        if (evt.cards2[i].suit == 'club' && get.type(evt.cards2[i], player) != 'equip') {
                            player.storage.Marvel_menpiao_mark = evt.cards2[i].name;
                        }
                    }
                },
                filter(event, player) {
                    var evt = event.getl(player);
                    if (evt && evt.cards2) {
                        for (var i = 0; i < evt.cards2.length; i++) {
                            if (evt.cards2[i].suit == 'club') return true;
                        }
                    }
                    return false;
                },
                group: ['Marvel_menpiao_wuxie', 'Marvel_menpiao_shan', 'Marvel_menpiao_mark', 'Marvel_menpiao_record'],
                mark: true,
                subSkill: {
                    shan: {
                        mod: {
                            aiValue(player, card, num) {
                                if (card.name != 'shan' && card.suit != 'club') return;
                                var cards = player.getCards('he', function (card) {
                                    return card.name == 'shan' || card.suit == 'club';
                                });
                                cards.sort(function (a, b) {
                                    return (b.name == 'shan' ? 1 : 2) - (a.name == 'shan' ? 1 : 2);
                                });
                                var geti = function () {
                                    if (cards.includes(card)) {
                                        return cards.indexOf(card);
                                    }
                                    return cards.length;
                                };
                                if (card.name == 'shan') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
                            },
                            aiUseful() {
                                return lib.skill.Marvel_menpiao_shan.mod.aiValue.apply(this, arguments);
                            },
                        },
                        audio: 2,
                        enable: ['chooseTorespond', 'chooseToUse'],
                        filterCard(card) {
                            return card.suit == 'club';
                        },
                        position: 'he',
                        viewAs: {
                            name: 'shan',
                        },
                        viewAsFilter(player) {
                            if (!player.countCards('he', { suit: 'club' })) return false;
                        },
                        position: 'he',
                        prompt: '将一张♣️️牌当闪使用或打出',
                        check() {
                            return 1;
                        },
                        ai: {
                            order: 3,
                            respondShan: true,
                            skillTagFilter(player) {
                                if (!player.countCards('he', { suit: 'club' })) return false;
                            },
                            effect: {
                                target(card, player, target, current) {
                                    if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                },
                            },
                            basic: {
                                useful: [7, 5.1, 2],
                                value: [7, 5.1, 2],
                            },
                            result: {
                                player: 1,
                            },
                        },
                    },
                    mark: {
                        enable: ['chooseToUse', 'chooseTorespond'],
                        hiddenCard(player, name) {
                            return player.storage.Marvel_menpiao_mark == name;
                        },
                        chooseButton: {
                            dialog(event, player) {
                                var list = [];
                                var storage = player.storage.Marvel_menpiao_mark;
                                list.push(storage);
                                return ui.create.dialog('门票', [list, 'vcard'], 'hidden');
                            },
                            filter(button, player) {
                                return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                            },
                            check(button) {
                                var player = _status.event.player;
                                return player.getUseValue({ name: button.link[2] });
                            },
                            backup(links, player) {
                                return {
                                    filterCard(card, player) {
                                        if (card.name == 'shan') return true;
                                        if (card.name == 'wuxie') return true;
                                        return false;
                                    },
                                    check(card) {
                                        var value = get.value(card);
                                        return 8 - value;
                                    },
                                    position: 'he',
                                    selectCard: 1,
                                    popname: true,
                                    viewAs: { name: links[0][2] },
                                };
                            },
                            prompt(links, player) {
                                return '将【闪】或【无懈可击】当作' + get.translation(links[0][2]) + '使用';
                            },
                        },
                        ai: {
                            order: 2,
                            result: {
                                player(player) {
                                    return 1;
                                },
                            },
                            threaten: 1.1,
                        },
                        filter(event, player) {
                            return player.countCards('h', { name: 'shan' }) > 0 || player.countCards('h', { name: 'wuxie' }) > 0;
                        },
                    },
                    record: {
                        trigger: { player: 'useCard' },
                        silent: true,
                        forced: true,
                        charlotte: true,
                        filter(event, player) {
                            for (var i of event.cards) {
                                if (get.type(i) == 'equip') {
                                    return false;
                                }
                            }
                            return event.skill == 'Marvel_menpiao_shan' || event.skill == 'Marvel_menpiao_wuxie';
                        },
                        content() {
                            for (var i of trigger.cards) {
                                player.storage.Marvel_menpiao_mark = i.name;
                                game.log(player, '记录了', i.name);
                            }
                        },
                    },
                    wuxie: {
                        mod: {
                            aiValue(player, card, num) {
                                if (card.name != 'wuxie' && card.suit != 'club') return;
                                var cards = player.getCards('hs', function (card) {
                                    return card.name == 'wuxie' || card.suit == 'club';
                                });
                                cards.sort(function (a, b) {
                                    return (b.name == 'wuxie' ? 1 : 2) - (a.name == 'wuxie' ? 1 : 2);
                                });
                                var geti = function () {
                                    if (cards.includes(card)) {
                                        return cards.indexOf(card);
                                    }
                                    return cards.length;
                                };
                                if (card.name == 'wuxie') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
                            },
                            aiUseful() {
                                return lib.skill.Marvel_menpiao_wuxie.mod.aiValue.apply(this, arguments);
                            },
                        },
                        enable: 'chooseToUse',
                        filterCard(card) {
                            return card.suit == 'club';
                        },
                        position: 'he',
                        viewAsFilter(player) {
                            return player.countCards('he', { suit: 'club' }) > 0;
                        },
                        viewAs: {
                            name: 'wuxie',
                        },
                        position: 'he',
                        prompt: '将一张♣️️牌当无懈可击使用',
                        check(card) {
                            var tri = _status.event.getTrigger();
                            if (tri && tri.card && tri.card.name == 'chiling') return -1;
                            return 8 - get.value(card);
                        },
                        threaten: 1.2,
                        ai: {
                            basic: {
                                useful: [6, 4, 3],
                                value: [6, 4, 3],
                            },
                            result: {
                                player: 1,
                            },
                            expose: 0.2,
                        },
                    },
                },
            },
            Marvel_zhugan: {
                trigger: {
                    target: 'useCardToTargeted',
                },
                group: ['Marvel_zhugan_gain'],
                subSkill: {
                    gain: {
                        trigger: {
                            global: 'useCardAfter',
                        },
                        content() {
                            var card = player.getCards('h');
                            player.discard(card)._triggered = null;
                            player.gain(trigger.cards.filterInD('od'), 'gain2');
                        },
                        filter(event, player) {
                            return event.player != player && event.targets && get.tag(event.card, 'damage') && event.targets.includes(player) && !player.hasHistory('damage', (evt) => evt.card == event.card) && event.cards.filterInD('od').length && event.cards.length >= 1;
                        },
                    },
                },
                check(event, player) {
                    return true;
                },
                filter(event, player) {
                    return event.player != player && get.tag(event.card, 'damage') && player.countCards('h') < player.getHandcardLimit();
                },
                content() {
                    var num1 = player.countCards('h'),
                        num2 = player.getHandcardLimit();
                    if (num1 < num2) {
                        player.drawTo(num2);
                    }
                },
            },
            Marvel_jisu: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                group: ['Marvel_jisu_log', 'Marvel_jisu_clear'],
                marktext: '速',
                intro: {
                    content(storage, player, skill) {
                        var str = '';
                        if (player.storage.Marvel_jisu1) {
                            str += '<br><li>本回合已使用花色:';
                            str += get.translation(player.storage.Marvel_jisu1);
                        }
                        return str;
                    },
                },
                subSkill: {
                    same: {
                        marktext: '同',
                        intro: {
                            content: '本回合只能使用相同花色牌',
                        },
                        mod: {
                            cardEnabled(card, player) {
                                if (player.storage.Marvel_jisu1.length < 1) return;
                                var suit = card.suit;
                                if (suit == 'none') return;
                                var evt = _status.event;
                                if (evt.name != 'chooseToUse') evt = evt.getParent('chooseToUse');
                                if (!player.storage.Marvel_jisu1.includes(suit)) return false;
                            },
                        },
                        forced: true,
                        silent: true,
                        charlotte: true,
                    },
                    different: {
                        marktext: '异',
                        intro: {
                            content: '本回合只能使用不同花色牌',
                        },
                        mod: {
                            cardEnabled(card, player) {
                                var suit = card.suit;
                                if (suit == 'none') return;
                                var evt = _status.event;
                                if (evt.name != 'chooseToUse') evt = evt.getParent('chooseToUse');
                                if (player.storage.Marvel_jisu1.includes(suit)) return false;
                                return;
                            },
                        },
                        forced: true,
                        silent: true,
                        charlotte: true,
                    },
                    buff: {
                        trigger: {
                            player: 'useCard',
                        },
                        content() {
                            player.draw();
                        },
                        forced: true,
                        silent: true,
                        charlotte: true,
                        mod: {
                            cardUsable(card, player) {
                                return Infinity;
                            },
                            targetInRange(card, player) {
                                return true;
                            },
                        },
                    },
                    clear: {
                        trigger: {
                            global: 'phaseEnd',
                        },
                        forced: true,
                        silent: true,
                        charlotte: true,
                        popup: false,
                        content() {
                            player.storage.Marvel_jisu1 = [];
                        },
                    },
                    log: {
                        charlotte: true,
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        silent: true,
                        init(player) {
                            player.storage.Marvel_jisu1 = [];
                        },
                        content() {
                            player.storage.Marvel_jisu1.add(trigger.card.suit);
                            player.markSkill('Marvel_jisu');
                        },
                    },
                },
                content() {
                    'step 0';
                    player
                        .chooseControl('cancel2')
                        .set('prompt', '极速:请选择一项')
                        .set('choiceList', ['本回合只能使用花色相同的牌', '本回合只能使用花色不同的牌'])
                        .set('ai', function () {
                            return 1;
                        });
                    ('step 1');
                    if (result.index == 0) {
                        player.addTempSkill('Marvel_jisu_same');
                        player.addTempSkill('Marvel_jisu_buff');
                    }
                    if (result.index == 1) {
                        player.addTempSkill('Marvel_jisu_different');
                        player.addTempSkill('Marvel_jisu_buff');
                    }
                },
            },
            haitu_ol_linghan: {
                trigger: {
                    global: 'useCard1',
                },
                forced: true,
                filter(event, player) {
                    if (event.card.suit != 'club') return false;
                    return true;
                },
                content() {
                    'step 0';
                    player
                        .chooseControl('是', '否')
                        .set('prompt', '凌寒:是否令' + get.translation(trigger.player) + '对你造成冰属性伤害')
                        .set('choice')
                        .set('ai', function () {
                            if (trigger.player != player) {
                                return 1;
                            } else {
                                return 0;
                            }
                        });
                    ('step 1');
                    if (result.control != '是') {
                        event.finish();
                    }
                    ('step 2');
                    player.damage(trigger.player, 'ice');
                    if (player != _status.currentPhase) {
                        event.togive = trigger.cards;
                        player.gain(event.togive, 'gain2', 'log');
                        player.draw();
                    } else {
                        player.addMark('haitu_olshuyue', 1);
                    }
                },
            },
            haitu_ol_zhefu: {
                trigger: {
                    source: 'damageBefore',
                },
                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseControl('判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段', '取消')
                        .set('prompt', '蛰伏:请选择一个阶段令' + get.translation(trigger.player) + '执行')
                        .set('choice')
                        .set('ai', function () {
                            var att = get.attitude(_status.event.player, _status.event.sourcex);
                            if (att > 0) return 2;
                            return 4;
                        })
                        .set('sourcex', trigger.player);
                    ('step 1');
                    if (result.control != '取消') {
                        trigger.cancel();
                    }
                    if (result.control == '判定阶段') {
                        var next = trigger.player.phaseJudge();
                        event.next.remove(next);
                        trigger.next.push(next);
                    }
                    if (result.control == '摸牌阶段') {
                        var next = trigger.player.phaseDraw();
                        event.next.remove(next);
                        trigger.next.push(next);
                    }
                    if (result.control == '出牌阶段') {
                        var next = trigger.player.phaseUse();
                        event.next.remove(next);
                        trigger.next.push(next);
                    }
                    if (result.control == '弃牌阶段') {
                        var next = trigger.player.phaseDiscard();
                        event.next.remove(next);
                        trigger.next.push(next);
                    }
                },
            },
            haitu_lietou: {
                trigger: {
                    player: ['phaseZhunbeiBegin', 'damageEnd'],
                },
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current.getExpansions('haitu_shangzhan').length;
                    });
                },
                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget(get.prompt('haitu_lietou'), '获得一名角色的<货>', function (card, player, target) {
                            return target.getExpansions('haitu_shangzhan').length;
                        })
                        .set('ai', function (target) {
                            return Math.max(0.1, get.attitude(_status.event.player, target));
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        event.target = target;
                        player.gain(target.getExpansions('haitu_shangzhan'), 'give', target);
                    } else event.finish();
                    ('step 2');
                    player
                        .chooseTarget('你可以将一名角色区域内的一张牌作为<货>置于' + get.translation(target) + '的武将牌上', function (card, player, target) {
                            return target.countCards('hej');
                        })
                        .set('ai', function (target) {
                            return -get.attitude(_status.event.player, target);
                        });
                    ('step 3');
                    if (result.targets?.length) {
                        event.target2 = result.targets[0];
                        player.line(result.targets[0]);
                        player.choosePlayerCard(result.targets[0], 'hej', true);
                    } else event.finish();
                    ('step 4');
                    if (result.links) target.addToExpansion(result.links, 'give', event.target2).gaintag.add('haitu_shangzhan');
                },
            },
            haitu_shangzhan: {
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                add(player) {
                    'step 0';
                    var targets = game.filterPlayer().sortBySeat();
                    event.targets = targets;
                    player.storage.haitu_shangzhan = result.control;
                    ('step 1');
                    var target = event.targets.shift();
                    var storage = target.getExpansions('haitu_shangzhan');
                    event.target = target;
                    if (!storage.length) {
                        target.addToExpansion(get.cards(), 'gain2').gaintag.add('haitu_shangzhan');
                    }
                    if (event.targets.length) event.redo();
                },
                content() {
                    'step 0';
                    var next = game.createEvent('haitu_shangzhan');
                    next.player = player;
                    next.setContent(lib.skill.haitu_shangzhan.add);
                    ('step 1');
                    player.chooseControl('basic', 'trick', 'equip', 'cancel2').set('prompt', '请声明一种类别');
                    ('step 2');
                    if (result.control != 'cancel2') {
                        game.log(player, '声明了', '#g' + get.translation(result.control) + '牌');
                        player.storage.haitu_shangzhan = result.control;
                    } else event.finish();
                },
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                marktext: '货',
                global: 'haitu_shangzhan_g',
                subSkill: {
                    g: {
                        enable: 'phaseUse',
                        usable: 1,
                        filter(event, player) {
                            return player.getExpansions('haitu_shangzhan').length;
                        },
                        ai: {
                            order: 11,
                            result: {
                                player: 1,
                            },
                        },
                        content() {
                            'step 0';
                            var cards = player.getExpansions('haitu_shangzhan');
                            event.typesx = [];
                            for (var i of cards) event.typesx.add(get.type2(i));
                            player.loseToDiscardpile(cards);
                            ('step 1');
                            var types = [];
                            var vcards = [];
                            game.hasPlayer(function (current) {
                                if (current.storage.haitu_shangzhan && event.typesx.includes(current.storage.haitu_shangzhan)) types.add(current.storage.haitu_shangzhan);
                            });
                            for (var i of lib.inpile) {
                                var type = get.type(i);
                                if (types.includes(type) && (type == 'basic' || type == 'trick') && player.hasUseTarget(i)) {
                                    vcards.add(i);
                                    if (i == 'sha') {
                                        for (var x of lib.inpile_nature) {
                                            if (player.hasUseTarget({ name: i, nature: x })) vcards.push(['', '', i, x]);
                                        }
                                    }
                                }
                            }
                            if (vcards.length) {
                                player.chooseButton(['选择要使用的牌', [vcards, 'vcard']]).set('ai', function (button) {
                                    var card = { name: button.link[2] };
                                    return player.getUseValue(card);
                                });
                            } else event.finish();
                            ('step 2');
                            if (result.bool) player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] });
                        },
                    },
                },
            },
            haitu_fnaf_jiexin: {
                trigger: {
                    player: ['useCard'],
                },
                mark: true,
                marktext: '全',
                intro: {
                    name2: '全',
                    content(num, player, storage) {
                        var stat = player.getHistory('useCard').length + 1;
                        var str = '<br><li>下一张使用的牌为本回合第';
                        str += stat;
                        str += '张';
                        return str;
                    },
                },
                forced: true,
                preHidden: true,
                filter(event, player) {
                    return player.getHistory('useCard').length == event.cards.length;
                },
                content() {
                    player.draw(player.getHistory('useCard').length);
                },
            },
            haitu_tuteng: {
                enable: 'phaseUse',
                prompt: '请选择一个角色获得图腾',
                delay: 0,
                global: 'tuteng_lose',
                init() {
                    for (var i = 1; i <= 8; i++) {
                        lib.translate['tuteng' + i + '_info'] = lib.skill['tuteng' + i].intro.content;
                    }
                },
                subSkill: {
                    aioff: {
                        mark: true,
                        marktext: '图',
                        forced: true,
                        silent: true,
                        trigger: {
                            player: 'phaseEnd',
                        },
                        content() {
                            player.removeMark('haitu_tuteng_aioff', player.countMark('haitu_tuteng_aioff'));
                        },
                        intro: {
                            content: '本回合已发动过#次技能',
                        },
                        charlotte: true,
                        init(player) {
                            player.removeMark('haitu_tuteng_aioff', player.countMark('haitu_tuteng_aioff'));
                        },
                    },
                },
                filter(event, player) {
                    var stat =
                        player.getHistory('useSkill', function (evt) {
                            return evt.skill == 'haitu_tuteng';
                        }).length + 1;
                    if (stat > player.countCards('he')) return false;
                    return true;
                },
                filterTarget(card, player, target) {
                    if (player.storage.haitu_tuteng_awake) return true;
                    var rand = ['tuteng1', 'tuteng2', 'tuteng3', 'tuteng4'];
                    for (var i = 0; i < rand.length; i++) {
                        if (!target.hasSkill(rand[i])) return true;
                    }
                },
                mark: true,
                marktext: '萨',
                position: 'he',
                content() {
                    'step 0';
                    player.addTempSkill('haitu_tuteng_aioff');
                    player.addMark('haitu_tuteng_aioff', 1);
                    var stat = player.getHistory('useSkill', function (evt) {
                        return evt.skill == 'haitu_tuteng';
                    }).length;
                    if (stat > 0) {
                        player.chooseToDiscard(true, 'he', stat);
                    }
                    ('step 1');
                    var rand = ['tuteng1', 'tuteng2', 'tuteng3', 'tuteng4'];
                    var rand2 = [];
                    var randx = [];
                    var rand2x = [];
                    if (player.storage.haitu_tuteng_awake) {
                        rand = rand.concat(['tuteng5', 'tuteng6', 'tuteng7', 'tuteng8']);
                    }
                    for (var i = 0; i < target.skills.length; i++) {
                        if (rand.includes(target.skills[i])) {
                            rand.remove(target.skills[i]);
                            rand2.push(target.skills[i]);
                        }
                    }
                    if (!player.storage.haitu_tuteng_awake) {
                        target.addSkill(rand.randomGet());
                        player.addMark('haitu_tuteng', 1);
                        event.finish();
                        return;
                    }
                    if (rand.length) {
                        if (event.isMine() && (rand.length > 1 || rand2.length >= 4)) {
                            var dialog = ui.create.dialog();
                            for (var i = 0; i < rand.length; i++) {
                                randx[i] = ['', '', rand[i]];
                            }
                            for (var i = 0; i < rand2.length; i++) {
                                rand2x[i] = ['', '', rand2[i]];
                            }
                            dialog.add('选择一个图腾');
                            dialog.add([randx, 'vcard']);
                            if (rand2.length >= 4) {
                                dialog.add('替换一个已有图腾');
                                dialog.add([rand2x, 'vcard']);
                                player.chooseButton(dialog, 2, true).filterButton = function (button) {
                                    if (ui.selected.buttons.length) {
                                        var current = ui.selected.buttons[0].name;
                                        if (rand.includes(current)) {
                                            return rand2.includes(button.name);
                                        } else {
                                            return rand.includes(button.name);
                                        }
                                    }
                                    return true;
                                };
                            } else {
                                player.chooseButton(dialog, true);
                            }
                            for (var i = 0; i < dialog.buttons.length; i++) {
                                var item = dialog.buttons[i];
                                if (i == 4) {
                                    item.parentNode.insertBefore(document.createElement('br'), item);
                                }
                                item.style.zoom = 0.7;
                            }
                        } else {
                            if (target.hp < target.maxHp && rand.includes('tuteng1')) {
                                target.addSkill('tuteng1');
                            } else {
                                if (rand.length > 1) {
                                    rand.remove('tuteng1');
                                }
                                target.addSkill(rand.randomGet());
                            }
                            // if(rand2.length>=3){
                            //    target.removeSkill(rand2.randomGet());
                            // }
                            event.finish();
                        }
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.buttons.length == 1) {
                        target.addSkill(result.buttons[0].name);
                    } else if (result.buttons.length == 2) {
                        var skill1 = result.buttons[0].name;
                        var skill2 = result.buttons[1].name;
                        if (target.hasSkill(skill1)) {
                            target.removeSkill(skill1);
                            target.addSkill(skill2);
                        } else {
                            target.removeSkill(skill2);
                            target.addSkill(skill1);
                        }
                    }
                },
                ai: {
                    order: 11,
                    result: {
                        player(player) {
                            var nh = player.countCards('h');
                            if (nh <= player.hp && nh <= 3 && player.hasSkill('haitu_tuteng_aioff')) {
                                return -10;
                            } else {
                                return 10;
                            }
                        },
                        target: 1,
                    },
                    effect(card, player, target) {
                        if (get.tag(card, 'damage')) {
                            if (player.hasSkillTag('jueqing', false, target)) return;
                            return 1.2;
                        }
                    },
                    threaten: 2,
                },
            },
            haitu_guozai: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.countCards('h') < (get.is.altered('guozai') ? 3 : 4);
                },
                group: 'haitu_guozai_damage',
                subSkill: {
                    damage: {
                        charlotte: true,
                        trigger: {
                            source: 'damageSource',
                        },
                        silent: true,
                        forced: true,
                        content() {
                            player.storage.haitu_guozai_count = 0;
                            player.removeSkill('haitu_guozai_count');
                        },
                    },
                    count: {
                        charlotte: true,
                        mark: true,
                        intro: {
                            content: '需弃置&张牌',
                        },
                        silent: true,
                        trigger: {
                            player: 'phaseUseEnd',
                        },
                        forced: true,
                        content() {
                            player.chooseToDiscard('he', true, player.storage.haitu_guozai_count);
                            player.storage.haitu_guozai_count = 0;
                            player.removeSkill('haitu_guozai_count');
                        },
                    },
                },
                init(player) {
                    player.storage.haitu_guozai_count = 0;
                },
                content() {
                    var num = (get.is.altered('guozai') ? 3 : 4) - player.countCards('h');
                    player.draw(num);
                    player.addSkill('haitu_guozai_count');
                    player.storage.haitu_guozai_count += num;
                    game.addVideo('storage', player, ['haitu_guozai_count', player.storage.haitu_guozai_count]);
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                },
            },
            haitu_zuling: {
                juehaitugji: true,
                forced: true,
                trigger: { player: 'phaseZhunbeiBegin' },
                filter(event, player) {
                    return player.countMark('haitu_tuteng') >= 3;
                },
                content() {
                    player.loseMaxHp();
                    player.awakenSkill('haitu_zuling');
                    player.storage.haitu_tuteng_awake = true;
                    player.storage[event.name] = true;
                },
            },
            haitu_jian: {
                trigger: {
                    global: 'damageBegin',
                },
                usable: 1,
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
                filter(event, player) {
                    return event.player != player && player.countCards('h') && event.source != undefined && event.source != player;
                },
                content() {
                    trigger.source.draw();
                    trigger.source = player;
                },
            },
            re_qisha: {
                trigger: {
                    source: 'damageEnd',
                    player: 'damageEnd',
                },
                global: 're_qisha_lose',
                forced: true,
                filter(event, player) {
                    return (event.source != player && event.source && event.source.isIn()) || (event.player != player && event.player.isIn()); //QQQ
                },
                content() {
                    'step 0';
                    var list = [];
                    event.target = trigger.source;
                    if (event.target == player) {
                        event.target = trigger.player;
                    }
                    for (var i in lib.skill) {
                        if (!get.translation(i, 'info') || get.translation(i + '_info').length === 0) continue;
                        if (lib.skill[i].ai && lib.skill[i].ai.neg && !event.target.hasSkill(i) && get.translation(i, 'info') && get.translation(i + '_info').length != 0) list.add(i);
                    }
                    var skills = list.randomGets(3);
                    if (!skills.length) {
                        event.finish();
                        return;
                    }
                    player
                        .chooseControl(skills)
                        .set(
                            'choiceList',
                            skills.map(function (i) {
                                return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                            })
                        )
                        .set('displayIndex', false)
                        .set('prompt', '七煞:请选择令' + get.translation(event.target) + '获得的技能')
                        .set('ai', (target) => {
                            var list = _status.event.controls.slice();
                            return list.sort((a, b) => {
                                return (get.skillRank(b, 'in') - get.skillRank(a, 'in')) * get.attitude(_status.event.player, trigger.source); //QQQ
                            })[0];
                        });
                    ('step 1');
                    var skill1 = result.control;
                    event.target.addSkill(result.control);
                    event.target.popup(result.control);
                    if (!event.target.storage.re_qisha_lose) {
                        event.target.storage.re_qisha_lose = [];
                    }
                    event.target.markAuto('re_qisha_lose', [skill1]);
                },
                subSkill: {
                    lose: {
                        trigger: {
                            player: 'phaseAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            return player.storage.re_qisha_lose && player.storage.re_qisha_lose.length;
                        },
                        content() {
                            'step 0';
                            if (player.storage.re_qisha_lose.length > 1) {
                                player.chooseControl(player.storage.re_qisha_lose).set('prompt', '七煞:选择一个技能失去');
                            } else event._result = { control: player.storage.re_qisha_lose[0] };
                            ('step 1');
                            player.unmarkAuto('re_qisha_lose', [result.control]);
                            player.$damage(player);
                            game.broadcastAll(
                                function (nature, player) {
                                    if (lib.config.animation && !lib.config.low_performance) {
                                        player.$fire();
                                    }
                                },
                                'fire',
                                player
                            );
                            player.$damagepop(-Infinity);
                            player.removeSkill(result.control);
                            game.log(player, '失去了技能', '#g【' + get.translation(result.control) + '】');
                            event.list2 = [];
                            game.countPlayer(function (current) {
                                if (current.hasSkill('re_qisha')) event.list2.push(current);
                            });
                            ('step 2');
                            game.asyncDraw(event.list2);
                        },
                    },
                    ju: {
                        ai: {
                            threaten: 0.5,
                            neg: true,
                        },
                        name: '惧',
                        mark: true,
                        intro: {
                            content: '锁定技,每当你使用一张牌,需弃置一张牌',
                        },
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        filter(event, player) {
                            return player.countCards('he') > 0;
                        },
                        content() {
                            player.chooseToDiscard(true, 'he');
                        },
                    },
                    kuang: {
                        name: '狂',
                        mark: true,
                        intro: {
                            content: '锁定技,每当你使用一张牌指定惟一目标,有50%的机率指定错误的目标',
                        },
                        trigger: {
                            player: 'useCard',
                        },
                        ai: {
                            threaten: 0.5,
                            neg: true,
                        },
                        forced: true,
                        filter(event, player) {
                            return (
                                event.getRand() < 0.5 &&
                                event.targets &&
                                event.targets.length == 1 &&
                                game.hasPlayer(function (current) {
                                    return current != event.targets[0] && lib.filter.targetEnabled2(event.card, player, current);
                                })
                            );
                        },
                        content() {
                            'step 0';
                            ('step 1');
                            var list = game.filterPlayer(function (current) {
                                return current != trigger.targets[0] && lib.filter.targetEnabled2(trigger.card, player, current);
                            });
                            if (list.length) {
                                var target = list.randomGet();
                                trigger.targets[0] = target;
                                player.line(target, 'green');
                            }
                        },
                    },
                    nu: {
                        name: '怒',
                        mark: true,
                        intro: {
                            content: '锁定技,你使用的卡牌造成的伤害+1;每当你使用一张牌,有65%的机率失效',
                        },
                        ai: {
                            threaten: 0.5,
                            neg: true,
                        },
                        forced: true,
                        trigger: {
                            source: 'damageBegin',
                            player: 'useCardToBefore',
                        },
                        filter(event, player) {
                            if (event.name == 'damage') return event.notLink() && (event.card ? true : false);
                            var info = get.info(event.card);
                            if (info.multitarget && event.targets && event.targets.includes(player)) return false;
                            return event.getRand() < 0.65;
                        },
                        content() {
                            if (trigger.name == 'damage') {
                                trigger.num++;
                            } else {
                                trigger.cancel();
                            }
                        },
                    },
                    yi: {
                        name: '疑',
                        mark: true,
                        intro: {
                            content: '锁定技,你不能成为非敌方角色的卡牌目标',
                        },
                        mod: {
                            targetEnabled(card, player, target) {
                                if (player.getFriends(true).includes(target)) return false;
                            },
                        },
                        ai: {
                            threaten: 0.5,
                            neg: true,
                        },
                    },
                    wang: {
                        name: '惘',
                        mark: true,
                        intro: {
                            content: '锁定技,你的摸牌数始终-1',
                        },
                        _priority: 5,
                        trigger: {
                            player: 'drawBegin',
                        },
                        forced: true,
                        content() {
                            trigger.num--;
                        },
                        ai: {
                            threaten: 0.5,
                            neg: true,
                        },
                    },
                    hen: {
                        name: '恨',
                        mark: true,
                        intro: {
                            content: '锁定技,每当一名敌方角色回复一点体力,你失去一点体力',
                        },
                        trigger: {
                            global: 'recoverAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            return player.getEnemies().includes(event.player);
                        },
                        content() {
                            player.loseHp();
                        },
                        ai: {
                            threaten: 0.5,
                            neg: true,
                        },
                    },
                    ao: {
                        name: '傲',
                        mark: true,
                        intro: {
                            content: '锁定技,你的手牌上限-2',
                        },
                        ai: {
                            threaten: 0.5,
                            neg: true,
                        },
                        mod: {
                            maxHandcard(player, num) {
                                return num - 2;
                            },
                        },
                    },
                },
            },
            re_bingjia: {
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return !target.hasSkill('bingjia2');
                },
                filterCard: true,
                check(card) {
                    return 6 - get.value(card);
                },
                discard: false,
                prepare(cards, player) {
                    player.$give(1, player, false);
                },
                content() {
                    target.storage.bingjia = cards[0];
                    target.addSkill('bingjia2');
                    game.addVideo('storage', target, ['bingjia', get.cardInfo(cards[0]), 'card']);
                },
                ai: {
                    order: 1,
                    result: {
                        player(player) {
                            var nh = player.countCards('h');
                            if (nh <= player.hp && nh <= 2) {
                                return -10;
                            } else {
                                return 10;
                            }
                        },
                        target: 1,
                    },
                },
            },
            re_aoshu: {
                enable: ['chooseToUse'],
                usable: 2,
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    return true;
                },
                prompt: '将♥️️牌当做流星火雨,♠️️牌当做洞烛先机使用或打出',
                viewAs(cards, player) {
                    var name = false;
                    var nature = null;
                    switch (cards[0]?.suit) {
                        case 'spade':
                            name = 'dongzhuxianji';
                            break;
                        case 'heart':
                            name = 'liuxinghuoyu';
                            break;
                    }
                    if (name) return { name: name, nature: nature };
                    return null;
                },
                check(card) {
                    var player = _status.event.player;
                    if (_status.event.type == 'phase') {
                        var max = 0;
                        var name2;
                        var list = ['liuxinghuoyu', 'dongzhuxianji'];
                        var map = { dongzhuxianji: 'spade', liuxinghuoyu: 'heart' };
                        for (var i = 0; i < list.length; i++) {
                            var name = list[i];
                            if (
                                player.countCards('he', function (card) {
                                    return get.value(card) < 5 && card.suit == map[name];
                                }) > 0
                            ) {
                                if (temp > max) {
                                    max = temp;
                                    name2 = map[name];
                                }
                            }
                        }
                        if (name2 == card.suit) return name2 == 'spade' ? 5 - get.value(card) : 20 - get.value(card);
                        return 0;
                    }
                    return 1;
                },
                position: 'he',
                filterCard(card, player, event) {
                    event = event || _status.event;
                    var filter = event._backup.filterCard;
                    var name = card.suit;
                    if (name == 'spade' && filter({ name: 'dongzhuxianji', cards: [card] }, player, event)) return true;
                    if (name == 'heart' && filter({ name: 'liuxinghuoyu', cards: [card] }, player, event)) return true;
                    return false;
                },
                check(card) {
                    return 5 - get.value(card);
                },
                ai: {
                    order(item, player) {
                        if (_status.event.type == 'phase') return 2;
                    },
                    result: {
                        player(player) {
                            return 2;
                        },
                    },
                },
                hiddenCard(player, name) {
                    if (name == 'dongzhuxianji') return player.countCards('he', { suit: 'spade' }) > 0;
                    if (name == 'liuxinghuoyu') return player.countCards('he', { suit: 'heart' }) > 0;
                },
            },
            haitu_aoyi: {
                ai: {
                    order(item, player) {
                        if (_status.event.type == 'phase') {
                            var num = player.getHistory('useCard').length;
                            if (num <= 2) {
                                return true;
                            }
                        }
                    },
                    result: {
                        player(player) {
                            return 11;
                        },
                    },
                },
                enable: ['chooseToUse'],
                round: 2,
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    return player.countCards('he', function (card) {
                        return true;
                    });
                },
                chooseButton: {
                    hiddenCard(player, name) {
                        if (get.type(name) == 'food') {
                            return true;
                        }
                    },
                    dialog(event, player) {
                        'step 0';
                        var list = [];
                        for (var i in lib.card) {
                            if (!lib.card[i].content) continue;
                            if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                            if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                            var name = lib.card[i];
                            if (player.getHistory('useCard').length == 0 && lib.card[i].subtype == 'spell_bronze' && event.filterCard({ name: i }, player, event)) {
                                list.add(i);
                            }
                            if (player.getHistory('useCard').length == 1 && lib.card[i].subtype == 'spell_silver' && event.filterCard({ name: i }, player, event)) {
                                list.add(i);
                            }
                            if (player.getHistory('useCard').length == 2 && lib.card[i].subtype == 'spell_gold' && event.filterCard({ name: i }, player, event)) {
                                list.add(i);
                            }
                        }
                        ('step 1');
                        return ui.create.dialog('奥秘', [list, 'vcard'], 'hidden');
                    },
                    filter(button, player) {
                        return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                    },
                    check(button) {
                        if (button.link[2] == 'shan') return 3;
                        var player = _status.event.player;
                        if (button.link[2] == 'jiu') {
                            if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                            if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                        }
                        return player.getUseValue({ name: button.link[2] });
                    },
                    backup(links, player) {
                        return {
                            check(card) {
                                return 8 - get.value(card);
                            },
                            filterCard(card, player) {
                                return true;
                            },
                            popname: true,
                            position: 'hes',
                            viewAs: { name: links[0][2] },
                            onuse(links, player) { },
                        };
                    },
                    prompt(links, player) {
                        return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
            },
            haitu_rainCandy_music: { init(player) { } },
            haitu_olfanpu: {
                init(player) {
                    if (player.storage.haitu_olfanpu_music != true) {
                        player.storage.haitu_olfanpu_music = true;
                        var a = window.setInterval(function () {
                            if (player.storage.haitu_olfanpu_use == true) {
                                var num = 0;
                                player.update();
                                game.countPlayer(function (current) {
                                    {
                                        if (current.hasSkill('haitu_olyuji_debuff', null, null, false)) {
                                            num += 1;
                                        }
                                        if (current.hasSkill('haitu_olyuji_buff', null, null, false)) {
                                            num += 1;
                                        }
                                    }
                                });
                                var num1 = Math.ceil(game.players.length / 2);
                                if (num >= num1) {
                                    if (player.storage.haitu_olfanpu != true && lib.config.extension_海国图志_bgm1 == 2) {
                                        player.storage.haitu_olfanpu_music = true;
                                        player.storage.haitu_olfanpu = true;
                                        player.update();
                                        lib.config.background_music = 'music_custom';
                                        lib.config.background_music_src = 'extension/海国图志/BGM/NEEDY GIRL OVERDOSE、Aiobahn - INTERNET OVERDOSE (feat. Aiobahn)(8bit).flac';
                                        game.playBackgroundMusic();
                                        var haitu_fanpu_music = setTimeout(function () {
                                            lib.config.background_music = 'music_custom';
                                            lib.config.background_music_src = 'extension/海国图志/BGM/天使は感動する.mp3';
                                            game.playBackgroundMusic();
                                        }, 122020);
                                    }
                                    window.clearInterval(a);
                                }
                            }
                        }, 1000);
                    }
                },
                subSkill: {
                    music: {
                        forced: true,
                        charlotte: true,
                        silent: true,
                        trigger: {
                            source: 'damageBegin3',
                        },
                        audio: 2,
                        juexingji: true,
                        content() {
                            {
                                player.awakenSkill('haitu_olfanpu_music');
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/海国图志/BGM/INTERNET OVERDOSE(8bit).mp3';
                                game.playBackgroundMusic();
                                var haitu_fanpu_music = setTimeout(function () {
                                    lib.config.background_music = 'music_custom';
                                    lib.config.background_music_src = 'extension/海国图志/BGM/天使は感動する.mp3';
                                    game.playBackgroundMusic();
                                }, 122020);
                            }
                        },
                        popup: false,
                        _priority: 1,
                    },
                },
                logTarget(event, player) {
                    return event.player;
                },
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                filter(event, player) {
                    if (event.player == player) return false;
                    return !event.player.hasSkill('haitu_olyuji_buff', null, null, false) && !event.player.hasSkill('haitu_olyuji_debuff', null, null, false);
                },
                content() {
                    'step 0';
                    player
                        .chooseControl()
                        .set('prompt', '返璞:请选择一项')
                        .set('choiceList', ['令' + get.translation(trigger.player) + '即将受到的伤害+1', '令' + get.translation(trigger.player) + '即将受到的伤害-1', '取消'])
                        .set('ai', function () {
                            var att = get.attitude(_status.event.player, _status.event.sourcex);
                            if (att > 0) return 1;
                            return 0;
                        })
                        .set('sourcex', trigger.player);
                    ('step 1');
                    if (result.index == 0) {
                        trigger.num++;
                        trigger.player.addSkill('haitu_olyuji_debuff');
                        player.storage.haitu_olfanpu_use = true;
                    }
                    if (result.index == 1) {
                        trigger.num--;
                        trigger.player.addSkill('haitu_olyuji_buff');
                        player.storage.haitu_olfanpu_use = true;
                    } else event.finish();
                },
            },
            haitu_qianmeng: {
                charlotte: true,
                audio: 'ext:海国图志/audio/2',
                _priority: 11111111111111111111111,
                derivation: ['dmkj_caoyao_inf', 'dmkj_zhouyu_inf'],
                init(player) {
                    lib.translate.dmkj_haitu_card_diamond = '骤雨';
                    lib.translate.dmkj_haitu_card_diamond_info = '随机弃置一名其他角色和其相邻角色一张牌';
                    lib.card.dmkj_haitu_card_diamond = {
                        image: 'ext:海国图志/image/card/dmkj_haitu_card_diamond.png',
                        fullborder: 'bronze',
                        type: 'special',
                        enable: true,
                        filterTarget(card, player, target) {
                            return true;
                        },
                        changeTarget(player, targets) {
                            game.filterPlayer(function (current) {
                                return get.distance(targets[0], current, 'pure') == 1;
                            }, targets);
                        },
                        usable: 1,
                        content() {
                            var he = target.getCards('he');
                            if (he.length) {
                                target.discard(he.randomGet()).delay = false;
                            }
                        },
                        contentAfter() {
                        },
                        ai: {
                            order: 7,
                            tag: {
                                loseCard: 1,
                                discard: 1,
                            },
                            wuxie() {
                                return 0;
                            },
                            result: {
                                target: -1,
                            },
                        },
                        selectTarget: 1,
                    };
                    lib.translate.dmkj_haitu_card_heart = '草药';
                    lib.translate.dmkj_haitu_card_heart_info = '出牌阶段,对距离为1以内的角色使用,回复1点体力';
                    lib.card.dmkj_haitu_card_heart = {
                        image: 'ext:海国图志/image/card/dmkj_haitu_card_heart.png',
                        fullskin: true,
                        type: 'basic',
                        range: {
                            global: 1,
                        },
                        enable: true,
                        filterTarget(card, player, target) {
                            return target.hp < target.maxHp;
                        },
                        content() {
                            target.recover();
                        },
                        ai: {
                            basic: {
                                useful: [7, 2],
                                value: [7, 2],
                            },
                            order: 2.2,
                            result: {
                                target: 2,
                            },
                            tag: {
                                recover: 1,
                            },
                        },
                        selectTarget: 1,
                    };
                },
                trigger: {
                    global: 'roundStart',
                },
                audio: 'ext:海国图志/2',
                forced: true,
                charlotte: true,
                content() {
                    'step 0';
                    var list = [],
                        choiceList = ['♦️️手牌视为【骤雨】', '♣️️手牌视为【酒】', '♠️️手牌视为【冰杀】', '♥️️手牌视为【草药】', '取消选择并解除下轮的限制'];
                    if (!player.storage.haitu_qianmeng) {
                        list.push('选项一');
                        list.push('选项二');
                        list.push('选项三');
                        list.push('选项四');
                    } else {
                        if (player.storage.haitu_qianmeng == 2) {
                            list.push('选项一');
                        } else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                        if (player.storage.haitu_qianmeng == 1 || player.storage.haitu_qianmeng == 3) {
                            list.push('选项二');
                        } else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                        if (player.storage.haitu_qianmeng == 2 || player.storage.haitu_qianmeng == 4) list.push('选项三');
                        else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
                        if (player.storage.haitu_qianmeng == 3) list.push('选项四');
                        else choiceList[3] = '<span style="opacity:0.5">' + choiceList[3] + '</span>';
                    }
                    list.add('取消');
                    player
                        .chooseControl(list)
                        .set('choiceList', choiceList, true)
                        .set('ai', function () {
                            var list = _status.event.controls;
                            if (list.includes('选项四')) return '选项四';
                            if (list.includes('选项三')) return '选项三';
                            if (list.includes('选项二')) return '选项二';
                            if (list.includes('选项一')) return '选项一';
                        })
                        .set('prompt', '请选择一项效果令所有角色本轮获得', true);
                    ('step 1');
                    if (result.control == '取消') {
                        player.storage.haitu_qianmeng = false;
                        event.finish();
                    } else {
                        game.log(player, '选择了', '#y' + result.control);
                        game.broadcastAll(function (player, current) {
                            if (result.control == '选项一') {
                                game.countPlayer(function (current) {
                                    current.addTempSkill('haitu_qianmeng_diamond', 'roundStart');
                                });
                                player.storage.haitu_qianmeng = 1;
                            }
                            if (result.control == '选项二') {
                                game.countPlayer(function (current) {
                                    current.addTempSkill('haitu_qianmeng_club', 'roundStart');
                                });
                                player.storage.haitu_qianmeng = 2;
                            }
                            if (result.control == '选项三') {
                                game.countPlayer(function (current) {
                                    current.addTempSkill('haitu_qianmeng_spade', 'roundStart');
                                });
                                player.storage.haitu_qianmeng = 3;
                            }
                            if (result.control == '选项四') {
                                game.countPlayer(function (current) {
                                    current.addTempSkill('haitu_qianmeng_heart', 'roundStart');
                                });
                                player.storage.haitu_qianmeng = 4;
                            }
                        }, player);
                    }
                },
                forced: true,
                subSkill: {
                    spadeoff: {
                        charlotte: true,
                    },
                    cluboff: {
                        charlotte: true,
                    },
                    diamondoff: {
                        charlotte: true,
                    },
                    heartoff: {
                        charlotte: true,
                    },
                    heart: {
                        mark: true,
                        marktext: '梦',
                        intro: {
                            content: '你的♥️️手牌视为【草药】',
                        },
                        mod: {
                            cardname(card, player, name) {
                                if (card.suit == 'heart') return 'dmkj_haitu_card_heart';
                            },
                        },
                        charlotte: true,
                    },
                    diamond: {
                        mark: true,
                        marktext: '梦',
                        intro: {
                            content: '你的♦️️手牌视为【骤雨】',
                        },
                        mod: {
                            cardname(card, player, name) {
                                if (card.suit == 'diamond') return 'dmkj_haitu_card_diamond';
                            },
                        },
                        charlotte: true,
                    },
                    club: {
                        mark: true,
                        marktext: '梦',
                        intro: {
                            content: '你的♣️️手牌视为【酒】',
                        },
                        mod: {
                            cardname(card, player, name) {
                                if (card.suit == 'club') return 'jiu';
                            },
                        },
                        charlotte: true,
                    },
                    spade: {
                        mark: true,
                        marktext: '梦',
                        intro: {
                            content: '你的♠️️手牌视为【冰杀】',
                        },
                        mod: {
                            cardname(card, player, name) {
                                if (card.suit == 'spade') return 'sha';
                            },
                            cardnature(card, player) {
                                if (card.suit == 'spade') return 'ice';
                            },
                        },
                        charlotte: true,
                    },
                },
            },
            haitu_rejuzhen: {
                subSkill: {
                    view: {
                        trigger: {
                            player: 'useCardAfter',
                        },
                        silent: true,
                        forced: true,
                        intro: {
                            content: '$',
                        },
                        filter(event, player) {
                            if (!event.cards.length) return false;
                            if (
                                !player.hasHistory('lose', function (evt) {
                                    return evt.hs.length && evt.parent == event;
                                })
                            )
                                return false;
                            event.num = event.card.number;
                            if (!event.num) return false;
                            if (player.getStorage('haitu_rejuzhen_view').includes(event.num)) return false;
                            return true;
                        },
                        content() {
                            event.num = trigger.card.number;
                            player.markAuto('haitu_rejuzhen_view', [event.num]);
                            game.log(player, '记录了', '#y' + get.translation(event.num));
                        },
                    },
                    record: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        audio: 'haitu_juzhen',
                        forced: true,
                        content() {
                            event.num = player.maxHp;
                            var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                            if (event.num <= 13) {
                                var list = num.randomGets(event.num);
                            } else {
                                var list = num.randomGets(13);
                            }
                            for (var i of list) {
                                player.markAuto('haitu_rejuzhen_view', i);
                                game.log(player, '记录了', '#y' + get.translation(i));
                            }
                        },
                    },
                },
                enable: 'phaseUse',
                group: ['haitu_rejuzhen_view'],
                audio: 'haitu_juzhen',
                usable: 1,
                multitarget: true,
                targetprompt: ['被移走', '移动目标'],
                selectTarget: 2,
                filterTarget(card, player, target) {
                    var storage = player.getStorage('haitu_rejuzhen_view');
                    if (!storage) {
                        return false;
                    }
                    if (ui.selected.targets.length == 0) {
                        return target.countCards('ej', function (card) {
                            var suit0 = card.number;
                            if (storage.includes(suit0)) {
                                return true;
                            }
                        });
                    }
                    if (ui.selected.targets.length == 1) {
                        if (target.isMin()) return false;
                        var from = ui.selected.targets[0];
                        var js = from.getCards('ej', function (card) {
                            var suit0 = card.number;
                            return storage.includes(suit0);
                        });
                        for (var i = 0; i < js.length; i++) {
                            if (_status.event.nojudge) break;
                            if (target.canAddJudge(js[i])) return true;
                        }
                    }
                    return true;
                },
                content() {
                    'step 0';
                    var storage = player.getStorage('haitu_rejuzhen_view');
                    if (targets.length == 2) {
                        player
                            .choosePlayerCard(
                                'ej',
                                true,
                                function (button) {
                                    if (get.attitude(player, targets[0]) > get.attitude(player, targets[1])) {
                                        return get.position(button.link) == 'j' ? 10 : 0;
                                    } else {
                                        if (get.position(button.link) == 'j' && get.type(button.link) == 'delay') {
                                            return -10;
                                        } else {
                                            return 10;
                                        }
                                        return get.equipValue(button.link);
                                    }
                                },
                                targets[0]
                            )
                            .set('filterButton', function (button) {
                                var storage = player.getStorage('haitu_rejuzhen_view');
                                var num0 = button.link.number;
                                return storage.includes(num0);
                            });
                    } else {
                        event.finish();
                    }
                    ('step 1');
                    if (result.bool) {
                        var num0 = result.buttons[0].link.number;
                        player.unmarkAuto('haitu_rejuzhen_view', [num0]);
                        game.log(player, '从矩阵代码中移除了', '#y' + get.translation(num0));
                        if (get.position(result.buttons[0].link) == 'e') {
                            event.targets[1].equip(result.buttons[0].link);
                        } else if (result.buttons[0].link.viewAs) {
                            event.targets[1].addJudge({ name: result.buttons[0].link.viewAs }, [result.buttons[0].link]);
                        } else {
                            event.targets[1].addJudge(result.buttons[0].link);
                        }
                        event.targets[0].$give(result.buttons[0].link, event.targets[1]);
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            var storage = player.getStorage('haitu_juzhen_view');
                            if (ui.selected.targets.length == 0) {
                                if (
                                    target.countCards('j') &&
                                    get.attitude(player, target) > 0 &&
                                    target.hasCard((card) => {
                                        return (card.viewAs || card.name) != 'xumou_jsrg' && storage.includes(card.number);
                                    }, 'j')
                                ) {
                                    return 1;
                                }
                                if (get.attitude(player, target) < 0) {
                                    if (
                                        target.hasCard((card) => {
                                            return (card.viewAs || card.name) == 'xumou_jsrg' && storage.includes(card.number);
                                        }, 'j')
                                    ) {
                                        return -1;
                                    }
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (get.attitude(player, players[i]) > 0) {
                                            if ((target.getEquip(1) && !players[i].getEquip(1) && storage.includes(get.number(target.getEquip(1)))) || (target.getEquip(2) && !players[i].getEquip(2) && storage.includes(get.number(target.getEquip(2)))) || (target.getEquip(3) && !players[i].getEquip(3) && storage.includes(get.number(target.getEquip(3)))) || (target.getEquip(4) && !players[i].getEquip(4) && storage.includes(get.number(target.getEquip(4)))) || (target.getEquip(5) && !players[i].getEquip(5) && storage.includes(get.number(target.getEquip(5))))) return -1;
                                        }
                                    }
                                }
                                return 0;
                            } else {
                                return get.attitude(player, ui.selected.targets[0]) > 0 ? -1 : 1;
                            }
                        },
                    },
                    expose: 0.2,
                },
            },
            haitu_zhimeng: {
                enable: 'phaseUse',
                usable: 1,
                audio: 'ext:海国图志/audio:2',
                derivation: ['dmkj_touliang_inf'],
                position: 'h',
                filterCard: true,
                prompt: '将一张牌当作偷梁换柱使用',
                check(card) {
                    return 7 - get.value(card);
                },
                viewAs: {
                    name: 'toulianghuanzhu',
                },
                ai: {
                    order: 8,
                    tag: {
                        loseCard: 1,
                        norepeat: 1,
                    },
                    result: {
                        target(player, target) {
                            if (player.countCards('h') <= 1) return 0;
                            if (target.hasSkill('toulianghuanzhu_ai2')) return 0;
                            if (target.hasSkill('toulianghuanzhu_ai1')) return 0.5;
                            return -1;
                        },
                    },
                    useful: [4, 1],
                    value: [6, 1],
                },
            },
            haitu_olyuji: {
                trigger: {
                    global: ['phaseJieshuBegin'],
                },
                init(player) {
                    if (player.storage.haitu_olyuji != true && lib.config.extension_海国图志_bgm1 == 2) {
                        player.storage.haitu_olyuji = true;
                        lib.config.background_music = 'music_custom';
                        lib.config.background_music_src = 'extension/海国图志/BGM/internetangel.mp3';
                        game.playBackgroundMusic();
                    }
                },
                group: ['haitu_olyuji_change'],
                subSkill: {
                    music: {
                        forced: true,
                        charlotte: true,
                        silent: true,
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        content() {
                            {
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/海国图志/BGM/internetangel.mp3';
                                game.playBackgroundMusic();
                            }
                        },
                    },
                    change: {
                        forced: true,
                        charlotte: true,
                        trigger: {
                            player: 'turnOverAfter',
                        },
                        silent: true,
                        content() {
                            if (!player.isTurnedOver()) {
                                game.broadcastAll(function (player) {
                                    player.reinit('haitu_chaotianjiang', 'haitu_rainCandy', false);
                                }, player);
                            } else {
                                game.broadcastAll(function (player) {
                                    player.reinit('haitu_rainCandy', 'haitu_chaotianjiang', false);
                                }, player);
                            }
                        },
                    },
                    buff: {
                        fixed: true,
                        charlotte: true,
                        mark: true,
                        marktext: '糖',
                        intro: {
                            content: '不能获得<升天>的负面效果',
                        },
                    },
                    debuff: {
                        mark: true,
                        marktext: '毒',
                        intro: {
                            content: '不能获得<升天>的正面效果',
                        },
                        fixed: true,
                        charlotte: true,
                    },
                },
                prioty: 600,
                filter(event, player) {
                    if (event.player == player) {
                        return !player.isTurnedOver();
                    }
                    if (event.player != player) {
                        return player.isTurnedOver();
                    }
                },
                forced: true,
                popup: true,
                content() {
                    'step 0';
                    event.list0 = [];
                    event.list1 = [];
                    event.list2 = [];
                    event.addIndex = 0;
                    var words = ['也就脸能看', '主播好像我前妻'];
                    game.countPlayer(function (current) {
                        if (Math.random() < 0.44 && current != player) {
                            event.list0.push(current);
                            current.say(['也就脸能看', '主播好像我前妻'].randomGet());
                            if (!current.hasSkill('haitu_olyuji_debuff', null, null, false)) {
                                event.list1.push(current);
                            }
                            if (!current.hasSkill('haitu_olyuji_buff', null, null, false)) {
                                event.list2.push(current);
                            }
                        }
                    });
                    event.list0.push(player);
                    if (!player.hasSkill('haitu_olyuji_debuff', null, null, false)) {
                        event.list1.push(player);
                    }
                    if (!player.hasSkill('haitu_olyuji_buff', null, null, false)) {
                        event.list2.push(player);
                    }
                    event.list0.sortBySeat();
                    var choices = [],
                        choose = ['弃牌', '掉血', '横置', '摸牌', '回血', '重置'],
                        gain = [];
                    var gain1 = choose.randomGet(1);
                    gain.add(gain1);
                    choose.remove(gain1);
                    var gain2 = choose.randomGet(1);
                    gain.add(gain2);
                    choose.remove(gain2);
                    var gain3 = choose.randomGet(1);
                    gain.add(gain3);
                    choose.remove(gain3);
                    event.list1.sortBySeat();
                    if (gain.includes('掉血')) {
                        choices.push('令' + get.translation(event.list2) + '失去一点体力');
                    }
                    event.list1.sortBySeat();
                    if (gain.includes('横置')) {
                        choices.push('令' + get.translation(event.list2) + '横置');
                    }
                    if (gain.includes('弃牌')) {
                        choices.push('令' + get.translation(event.list2) + '被你弃置区域内一张牌');
                    }
                    if (gain.includes('摸牌')) {
                        choices.push('令' + get.translation(event.list1) + '摸一张牌');
                    }
                    event.list1.sortBySeat();
                    if (gain.includes('回血')) {
                        choices.push('令' + get.translation(event.list1) + '回复一点体力');
                    }
                    event.list1.sortBySeat();
                    if (gain.includes('重置')) {
                        choices.push('令' + get.translation(event.list1) + '重置');
                    }
                    gain.add('取消');
                    player
                        .chooseControl(gain)
                        .set('choiceList', choices)
                        .set('prompt', get.prompt('haitu_olyuji'))
                        .set('ai', function () {
                            var map = {
                                弃牌: 0,
                                回血: 0,
                                掉血: 0,
                                摸牌: 1,
                                横置: 0,
                                重置: 0,
                                取消: 0.01,
                            },
                                player = _status.event.player,
                                targets1 = _status.event.targetsx1,
                                targets2 = _status.event.targetsx2,
                                result;
                            for (var i of targets1) {
                                var att = get.attitude(player, i);
                                if (att >= 4) map.摸牌++;
                                else map.摸牌--;
                                map.回血 += get.recoverEffect(i, player, player);
                                if (att >= 4) map.重置 += 0.5;
                                else map.重置 -= 0.5;
                            }
                            for (var i of targets2) {
                                var att = get.attitude(player, i);
                                map.弃牌 += get.effect(i, { name: 'guohe_copy' }, player, player);
                                map.掉血 += get.damageEffect(i, player, player, 'loseHp');
                                if (!i.isLinked()) {
                                    if (att != 0) {
                                        if (att < 0) map.横置 += 0.5;
                                        else map.横置 -= 0.5;
                                    }
                                }
                            }
                            for (var i in map) {
                                if (typeof result != 'string') result = i;
                                if (map[i] > map[result]) result = i;
                            }
                            return result;
                        })
                        .set('targetsx1', event.list1)
                        .set('targetsx2', event.list2);
                    ('step 1');
                    if (result.control != '取消') {
                    }
                    if (result.control == '弃牌') {
                        game.playAudio('../extension/海国图志/audio/haitu_olyuji_debuff.mp3');
                        for (var i of event.list2) {
                            player.discardPlayerCard('hej', true, i);
                        }
                    }
                    if (result.control == '掉血') {
                        game.playAudio('../extension/海国图志/audio/haitu_olyuji_debuff.mp3');
                        for (var i of event.list2) i.loseHp(1);
                    }
                    if (result.control == '横置') {
                        game.playAudio('../extension/海国图志/audio/haitu_olyuji_debuff.mp3');
                        for (var i of event.list2) i.link(true);
                    }
                    if (result.control == '摸牌') {
                        game.playAudio('../extension/海国图志/audio/haitu_olyuji_buff.mp3');
                        game.asyncDraw(event.list1);
                    }
                    if (result.control == '回血') {
                        game.playAudio('../extension/海国图志/audio/haitu_olyuji_buff.mp3');
                        for (var i of event.list1) i.recover();
                    }
                    if (result.control == '重置') {
                        game.playAudio('../extension/海国图志/audio/haitu_olyuji_buff.mp3');
                        for (var i of event.list1) i.link(false);
                    }
                    if (result.control == '取消') {
                        event.finish();
                    }
                    ('step 2');
                    if (player.isTurnedOver()) {
                        event.finish();
                    }
                    if (player != _status.currentPhase) {
                        event.finish();
                    }
                    if (!player.isTurnedOver() && player == _status.currentPhase) {
                        player.chooseBool('是否翻面？');
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (result.bool) {
                        player.turnOver();
                        var next = game.createEvent('haitu_olyuji');
                        next.player = player;
                        next.setContent(lib.skill.haitu_olyuji.content);
                    } else {
                        event.finish();
                    }
                },
                ai: {
                    order: 0.01,
                    result: {
                        player: 0.00000001,
                    },
                },
                forced: true,
            },
            qy_wanwu: {
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                createDialog(player, target, onlylist) {
                    var names = [];
                    var list = [];
                    if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
                    if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
                    var skills = target.getSkills(true, false);
                    for (var i = 0; i < skills.length; i++) {
                        var info = lib.character[names[i]];
                        if (info) {
                            for (var j = 0; j < skills.length; j++) {
                                if (get.translation(skills[i], 'info') && get.translation(skills[i] + '_info').length != 0) {
                                    list.add(skills[j]);
                                }
                            }
                        }
                    }
                    if (onlylist) return list;
                    var dialog = ui.create.dialog('forcebutton');
                    dialog.add('选择移除其一项技能');
                    _status.event.list = list;
                    var clickItem = function () {
                        _status.event._result = this.link;
                        game.resume();
                    };
                    for (var i = 0; i < list.length; i++) {
                        if (lib.translate[list[i] + '_info']) {
                            var translation = get.translation(list[i]);
                            if (translation[0] == '新' && translation.length == 3) {
                                translation = translation.slice(1, 3);
                            } else {
                                translation = translation.slice(0, 2);
                            }
                            var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                            item.firstChild.addEventListener('click', clickItem);
                            item.firstChild.link = list[i];
                        }
                    }
                    dialog.add(ui.create.div('.placeholder'));
                    return dialog;
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget(get.prompt2('qy_wanwu'), true, function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (target) {
                            if (get.attitude(_status.event.player, target) > 0) return Math.random();
                            return 0;
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets[0];
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    event.skillai = function (list) {
                        return get.max(list, get.skillRank, 'item');
                    };
                    if (event.isMine()) {
                        event.dialog = lib.skill.qy_wanwu.createDialog(player, target);
                        event.switchToAuto = function () {
                            event._result = event.skillai(event.list);
                            game.resume();
                        };
                        _status.imchoosing = true;
                        game.pause();
                    } else {
                        event._result = event.skillai(lib.skill.qy_wanwu.createDialog(player, target, true));
                    }
                    ('step 3');
                    _status.imchoosing = false;
                    if (event.dialog) {
                        event.dialog.close();
                    }
                    target.removeSkill(result);
                    target.popup(result);
                    game.log(target, '移除了', '【' + get.translation(result) + '】');
                    var names = [];
                    var list = get.gainableSkills(function (info, skill, name) {
                        if (names.includes(name)) return false;
                        return true;
                    });
                    var skill = list.randomGet();
                    target.popup(skill);
                    target.addSkill(skill);
                    game.log(target, '获得了', '【' + get.translation(skill) + '】');
                },
            },
            haitu_erru: {
                enable: 'phaseUse',
                global: 'haitu_erru_match',
                usable: 1,
                delay: 0,
                subSkill: {
                    match: {
                        supercharlotte: true,
                        forced: true,
                        mark: true,
                        silent: true,
                        trigger: { player: 'gainEnd' },
                        filter(event, player) {
                            return (event.name = 'haitu_erru');
                        },
                        content() {
                            player.addMark('haitu_erru_match', trigger.cards.length, 'nolog');
                        },
                    },
                },
                content() {
                    'step 0';
                    game.countPlayer(function (current) {
                        current.addSkill('haitu_erru_match');
                        var num = current.countMark('haitu_erru_match');
                        current.removeMark('haitu_erru_match', num);
                    });
                    var max = 0;
                    var choice = 'club';
                    var map = {
                        club: 0,
                        heart: 0,
                        diamond: 0,
                        spade: 0,
                    };
                    for (var i in map) {
                        var hs = player.getCards('he', { suit: i });
                        for (var j = 0; j < hs.length; j++) {
                            var val = get.value(hs[j], player, 'raw');
                            if (val > 7) {
                                map[i] = 0;
                                break;
                            } else if (val <= 5) {
                                map[i]++;
                                if (val <= 4) {
                                    map[i] += 0.5;
                                }
                                if (val < 0) {
                                    map[i] += 2;
                                }
                            }
                        }
                        if (map[i] > max) {
                            choice = i;
                            max = map[i];
                        }
                    }
                    var map0 = {},
                        hs = player.getCards('he');
                    for (var i of hs) map0[i.suit] = true;
                    var controls = lib.suit.filter((i) => map0[i]);
                    if (!controls.includes(choice)) {
                        choice = controls.randomGet();
                    }
                    player
                        .chooseControl(controls, function () {
                            return choice;
                        })
                        .set('prompt', '重铸一种花色的牌');
                    ('step 1');
                    var suit = result.control;
                    event.list = [];
                    var players = game.filterPlayer(function (current) {
                        return current != player && player.inRange(current);
                    });
                    for (var i of players) {
                        event.list.push(i);
                        var hs1 = i.getCards('he').filter(function (i) {
                            return i.suit == suit;
                        });
                        i.recast(hs1);
                    }
                    var hs = player.getCards('he').filter(function (i) {
                        return i.suit == suit;
                    });
                    if (hs.length) {
                        player.recast(hs);
                    }
                    ('step 2');
                    event.list.push(player);
                    var num0 = 1;
                    for (var i of event.list) {
                        if (i.countMark('haitu_erru_match') <= num0) {
                            num0 = i.countMark('haitu_erru_match');
                        }
                    }
                    for (var i of event.list) {
                        if (i.countMark('haitu_erru_match') <= num0) {
                            i.loseHp();
                        }
                    }
                    var num = 0;
                    for (var i of event.list) {
                        if (i.countMark('haitu_erru_match') > num) {
                            num = i.countMark('haitu_erru_match');
                        }
                    }
                    for (var i of event.list) {
                        if (i.countMark('haitu_erru_match') >= num) {
                            i.recover();
                        }
                    }
                    ('step 3');
                    game.countPlayer(function (current) {
                        var num = current.countMark('haitu_erru_match');
                        current.removeMark('haitu_erru_match', num);
                        current.removeSkill('haitu_erru_match');
                    });
                },
                filter(event, player) {
                    return player.countCards('he') > 0;
                },
                ai: {
                    order: 7,
                    result: {
                        player(player) {
                            var list = ['club', 'heart', 'diamond', 'spade'];
                            for (var i = 0; i < list.length; i++) {
                                var hs = player.getCards('h', { suit: list[i] });
                                var bool = false;
                                for (var j = 0; j < hs.length; j++) {
                                    var val = get.value(hs[j], player);
                                    if (val > 7) {
                                        bool = false;
                                        break;
                                    } else if (val <= 4) {
                                        bool = true;
                                    }
                                }
                                if (bool) {
                                    return 1;
                                }
                            }
                            return 0;
                        },
                    },
                },
            },
            haitu_suoji: {
                enable: 'phaseUse',
                ai: {
                    order: 11,
                    result: {
                        player(player) {
                            var nh = player.countCards('h');
                            if (nh <= player.hp && nh <= 2) {
                                return -10;
                            } else {
                                return 10;
                            }
                        },
                    },
                },
                group: ['haitu_suoji_remove', 'haitu_suoji_damage'],
                diamond(player) {
                    'step 0';
                    if (player.countCards('he') > 0) {
                        player.chooseCard('he', true, '请重铸一张牌');
                    } else event.finish();
                    ('step 1');
                    if (result.bool) {
                        player.loseToDiscardpile(result.cards);
                        player.draw();
                    }
                },
                club(player) {
                    player.chooseToUse({
                        prompt: '是否使用一张牌？',
                        filterCard(card, player) {
                            return lib.filter.filterCard.apply(this, arguments);
                        },
                    });
                },
                intro: {
                    content: '判定牌花色:$',
                },
                mark: true,
                filter(event, player) {
                    return player.hasSkill('haitu_suoji_blocker') == false;
                },
                content() {
                    'step 0';
                    player.judge();
                    ('step  1');
                    switch (result.suit) {
                        case 'diamond':
                            var next = game.createEvent('suoji1');
                            next.player = player;
                            next.setContent(lib.skill.haitu_suoji.diamond);
                            break;
                        case 'heart':
                            player.draw();
                            break;
                        case 'spade':
                            if (player.countCards('he') > 0) {
                                player.chooseToDiscard('索骥:请弃置一张牌', 'he', true);
                            }
                            break;
                        case 'club':
                            var next = game.createEvent('suoji2');
                            next.player = player;
                            next.setContent(lib.skill.haitu_suoji.club);
                            break;
                    }
                    player.storage.haitu_suoji = [];
                    player.unmarkSkill('haitu_suoji');
                    player.markAuto('haitu_suoji', [result.suit]);
                    player.addTempSkill('haitu_suoji_blocker');
                    player.storage.haitu_suoji = result.suit;
                },
                subSkill: {
                    damage: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        filter(event, player) {
                            return player.hasSkill('haitu_suoji_blocker') == false;
                        },
                        content() {
                            var next = game.createEvent('suoji');
                            next.player = player;
                            next.setContent(lib.skill.haitu_suoji.content);
                        },
                        check(event, player) {
                            return true;
                        },
                    },
                    remove: {
                        trigger: {
                            global: 'loseAfter',
                        },
                        silent: true,
                        forced: true,
                        content() {
                            player.storage.haitu_suoji = [];
                            player.removeSkill('haitu_suoji_blocker');
                        },
                        filter(event, player) {
                            for (var i = 0; i < event.cards2.length; i++) {
                                if (get.position(event.cards2[i], true) == 'd') {
                                    return player.storage.haitu_doumao.includes(event.cards2[i].suit);
                                }
                            }
                            return false;
                        },
                    },
                    blocker: {
                        mark: true,
                        marktext2: '骥',
                        marktext: '骥',
                        intro: {
                            content: '【索骥】已失效',
                        },
                    },
                },
            },
            haitu_zaodong: {
                subSkill: {
                    remove: {
                        aub: true,
                        charlotte: true,
                        trigger: { player: 'phaseEnd' },
                        forced: true,
                        content() {
                            var num0 = player.countMark('haitu_zaodong_draw');
                            var num1 = player.countMark('haitu_zaodong_recover');
                            var num2 = player.countMark('haitu_zaodong_damage');
                            player.removeMark('haitu_zaodong_draw', num0);
                            player.removeMark('haitu_zaodong_recover', num1);
                            player.removeMark('haitu_zaodong_damage', num2);
                        },
                    },
                    draw: {
                        charlotte: true,
                        trigger: {
                            player: 'drawBegin',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            var num = player.countMark('haitu_zaodong_draw');
                            trigger.num += num;
                            player.removeMark('haitu_zaodong_draw', num);
                        },
                    },
                    view: {
                        charlotte: true,
                        mark: true,
                        marktext: '噪',
                        intro: {
                            name2: '噪',
                            content(num, player, storage) {
                                var str = '<br><li>伤害加成:';
                                str += player.countMark('haitu_zaodong_damage');
                                str += '<br><li>回复加成:';
                                str += player.countMark('haitu_zaodong_recover');
                                str += '<br><li>摸牌加成:';
                                str += player.countMark('haitu_zaodong_draw');
                                return str;
                            },
                        },
                    },
                    damage: {
                        charlotte: true,
                        trigger: {
                            source: 'damageBegin1',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            var num = player.countMark('haitu_zaodong_damage');
                            trigger.num += num;
                            player.removeMark('haitu_zaodong_damage', num);
                        },
                    },
                    recover: {
                        charlotte: true,
                        trigger: {
                            player: 'recoverBegin',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            var num = player.countMark('haitu_zaodong_recover');
                            trigger.num += num;
                            player.removeMark('haitu_zaodong_recover', num);
                        },
                    },
                },
                trigger: {
                    player: 'useCardToPlayered',
                },
                group: ['haitu_zaodong_damage', 'haitu_zaodong_recover', 'haitu_zaodong_draw'],
                filter(event, player) {
                    if (player.countMark('haitu_zaodong_recover') > 0 && player.countMark('haitu_zaodong_damage') > 0 && player.countMark('haitu_zaodong_draw') > 0) {
                        return false;
                    }
                    if (player.storage.haitu_zaodong != true) return player == event.target;
                    else {
                        return player != event.target;
                    }
                },
                zhuanhuanji: true,
                forced: true,
                marktext: '☯',
                mark: true,
                init(player) {
                    player.storage.haitu_zaodong == false;
                },
                content() {
                    'step 0';
                    player.addSkill('haitu_zaodong_view');
                    var list = [];
                    if (player.countMark('haitu_zaodong_recover') < 1) {
                        list.push('回复');
                    }
                    if (player.countMark('haitu_zaodong_damage') < 1) {
                        list.push('伤害');
                    }
                    if (player.countMark('haitu_zaodong_draw') < 1) {
                        list.push('摸牌');
                    }
                    player.chooseControl(list).set('prompt', '选择增加一项数值');
                    ('step 1');
                    if (result.control == '回复') {
                        player.addMark('haitu_zaodong_recover', 1);
                    }
                    if (result.control == '伤害') {
                        player.addMark('haitu_zaodong_damage', 1);
                    }
                    if (result.control == '摸牌') {
                        player.addMark('haitu_zaodong_draw', 1);
                    }
                    player.changeZhuanhuanji('haitu_zaodong');
                },
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.haitu_zaodong != true) {
                            return '你使用牌指定你为目标后,令你下次的伤害值,回复值或摸牌数中的一项加1.';
                        } else return '你使用牌指定其他角色为目标后,令你下次的伤害值,回复值或摸牌数中的一项加1.';
                    },
                },
            },
            haitu_muran: {
                usable: 1,
                enable: 'chooseToUse',
                viewAs: {
                    name: 'shatang',
                },
                filterCard: {
                    suit: 'club',
                },
                position: 'h',
                filter(event, player) {
                    return player.countCards('he', { suit: 'club' });
                },
                check(card) {
                    return 7 - get.value(card);
                },
                ai: {
                    value: [4, 1],
                    useful: 2,
                    order: 2,
                    result: {
                        target(player, target) {
                            if (target.hasSkillTag('nofire')) return 1.5;
                            if (target.hasSkillTag('maixie_hp')) return 0;
                            if (target.hp == 1) return -1;
                            return -1 / Math.sqrt(target.hp + 1);
                        },
                    },
                    tag: {
                        damage: 1,
                        fireDamage: 1,
                        natureDamage: 1,
                    },
                },
            },
            haitu_shengdun: {
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                content() {
                    if (player.isTurnedOver()) {
                        player.turnOver();
                    }
                    player.link(false);
                    var card = player.countCards('j');
                    player.discardPlayerCard(player, true, 'j');
                },
            },
            haitu_lingdao: {
                popup: true,
                filterTarget(card, player, target) {
                    return target.countCards('h') != target.hp;
                },
                enable: 'phaseUse',
                usable: 1,
                content() {
                    'step 0';
                    player
                        .chooseControl(function (event, player) {
                            if (get.attitude(player, target) < 0 && target.countCards('h') > target.hp) return 0;
                            if (get.attitude(player, target) < 0 && target.countCards('h') < target.hp) return 1;
                            if (get.attitude(player, target) > 0 && target.countCards('h') < target.hp) return 0;
                            if (get.attitude(player, target) > 0 && target.countCards('h') > target.hp) return 1;
                        })
                        .set('prompt', '灵导:请选择一项', true)
                        .set('choiceList', ['令其手牌数调整为体力值', '令其体力值调整为手牌数']);
                    ('step 1');
                    if (result.index == 0) {
                        if (target.countCards('h') < target.hp) target.drawTo(target.hp);
                        else target.chooseToDiscard('h', true, target.countCards('h') - target.hp);
                    }
                    if (result.index == 1) {
                        var count1 = target.countCards('h');
                        target.hp = count1;
                        target.update();
                    } else event.finish();
                },
                ai: {
                    order: 0.01,
                    result: {
                        target(player, target) {
                            {
                                if (get.attitude(target, player) > 0) {
                                    if (target.countCards('h') > target.hp && target.hp == target.maxHp) {
                                        return 0;
                                    }
                                    return Math.abs(target.hp - target.countCards('h'));
                                }
                                if (get.attitude(target, player) < 0) {
                                    return Math.abs(target.hp - target.countCards('h'));
                                }
                            }
                        },
                        player: 2,
                    },
                },
            },
            haitu_tiaolv: {
                enable: 'phaseUse', //感谢<鬼神易>大佬的代码支持.
                usable: 2,
                audio: 'ext:海国图志/audio:2',
                filter(event, player) {
                    return (
                        player.countCards('he', function (card) {
                            return !player.hasHistory('lose', function (evt) {
                                if (evt.getParent(2).name == 'useSkill' && evt.getParent(2).skill == 'haitu_tiaolv') {
                                    for (var i of evt.cards) {
                                        if (i.name == card.name) return true;
                                    }
                                }
                                return false;
                            });
                        }) >= 2
                    );
                },
                position: 'he',
                filterCard(card, player) {
                    if (ui.selected.cards.length == 0) return true;
                    if (ui.selected.cards.length) {
                        var cardx = ui.selected.cards[0];
                        return card.name == cardx.name;
                    }
                    var cards = player.getCards('he');
                    for (var cardx of cards) {
                        if (card != cardx) {
                            if (card.name == cardx.name) return true;
                        }
                    }
                    return false;
                },
                selectCard() {
                    var player = _status.event.player;
                    return [
                        2,
                        player.countCards('he', function (card) {
                            return !player.hasHistory('lose', function (evt) {
                                if (evt.getParent(2).name == 'useSkill' && evt.getParent(2).skill == 'haitu_tiaolv') {
                                    for (var i of evt.cards) {
                                        if (i.name == card.name) return true;
                                    }
                                }
                                return false;
                            });
                        }),
                    ];
                },
                content() {
                    var gain = [];
                    if (
                        cards.every(function (i) {
                            return i.name == cards[0].name;
                        })
                    ) {
                        for (var i = 0; i < cards.length; i++) {
                            var card = get.cardPile(function (card) {
                                return (
                                    gain.every(function (cardx) {
                                        return cardx.name != card.name;
                                    }) && !gain.includes(card)
                                );
                            });
                            if (card) gain.push(card);
                            else break;
                        }
                    } else {
                        var map = {},
                            list = [];
                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                            var name = ui.cardPile.childNodes[i].name;
                            if (list.includes(name)) continue;
                            if (!map[name]) map[name] = 0;
                            map[name]++;
                            if (map[name] >= cards.length) list.add(name);
                        }
                        if (list.length >= 1) {
                            var namex = list.randomGet();
                            for (var i = 0; i < cards.length; i++) {
                                var card = get.cardPile((cardx) => cardx.name == namex && !gain.includes(cardx));
                                if (card) gain.push(card);
                                else break;
                            }
                        }
                    }
                    if (gain.length) player.gain(gain, 'gain2');
                },
                check(card) {
                    var player = _status.event.player;
                    if (
                        get.is.altered('haitu_tiaolv') &&
                        get.position(card) == 'h' &&
                        !player.countCards('h', function (card) {
                            return get.value(card) >= 8;
                        })
                    ) {
                        return 8 - get.value(card);
                    }
                    return 6 - get.value(card);
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                    threaten: 1.55,
                },
            },
            haitu_zhuluan: {
                trigger: { global: 'damageSource' },
                usable: 1,
                check(event, player) {
                    return get.attitude(player, event.source) > 0;
                },
                filter(event, player) {
                    if (!event.source) {
                        return false;
                    }
                    if (event.source && event.source == player) {
                        return false;
                    }
                    var list = [];
                    var info1 = lib.character[player.name1];
                    if (info1 && info1[3]) list.addArray(info1[3]);
                    if (player.name2) {
                        var info2 = lib.character[player.name2];
                        if (info2 && info2[3]) list.addArray(info2[3]);
                    }
                    var skills = player.getSkills(null, false, false).filter(function (i) {
                        var info = get.info(i);
                        return info && !info.charlotte && !list.includes(i);
                    });
                    return skills.length;
                },
                content() {
                    'step 0';
                    var list = [];
                    var info1 = lib.character[player.name1];
                    if (info1 && info1[3]) list.addArray(info1[3]);
                    if (player.name2) {
                        var info2 = lib.character[player.name2];
                        if (info2 && info2[3]) list.addArray(info2[3]);
                    }
                    var skills = player.getSkills(null, false, false).filter(function (i) {
                        var info = get.info(i);
                        return info && !list.includes(i);
                    });
                    event.videoId = lib.status.videoId++;
                    var func = function (id, list) {
                        var choiceList = ui.create.dialog('选择一个技能失去并令伤害来源获得', 'forcebutton');
                        choiceList.videoId = id;
                        for (var i = 0; i < list.length; i++) {
                            var str = '<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(list[i]) + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>';
                            var next = choiceList.add(str);
                            next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                            next.firstChild.link = list[i];
                            Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                            choiceList.buttons.add(next.firstChild);
                        }
                        return choiceList;
                    };
                    if (player.isOnline2()) {
                        player.send(func, event.videoId, skills);
                    }
                    event.dialog = func(event.videoId, skills);
                    if (player != game.me || _status.auto) {
                        event.dialog.style.display = 'none';
                    }
                    var next = player.chooseButton();
                    next.set('dialog', event.videoId);
                    next.set('forced', false);
                    next.set('selectButton', 1);
                    next.set('filterButton', function (button) {
                        return true;
                    });
                    next.set('ai', function (button) {
                        return 0;
                    });
                    ('step 1');
                    if (player.isOnline2()) {
                        player.send('closeDialog', event.videoId);
                    }
                    event.dialog.close();
                    if (result.bool) {
                        event.reskills = result.links;
                        for (var i of event.reskills) {
                            player.removeSkill(i);
                            player.storage.haitu_hundun.remove(i);
                            game.log(player, '失去了技能', '#g【' + get.translation(i) + '】');
                            trigger.source.addSkillLog(i);
                        }
                    } else event.finish();
                    //感谢鬼神易大佬提供的代码//};
                },
            },
            haitu_qingchao: {
                trigger: { player: 'phaseUseBegin' },
                content() {
                    'step 0';
                    player.addSkill('haitu_sulan_buff');
                    event.num1 = Math.max(1, player.getHandcardLimit());
                    event.num2 = Math.max(1, player.getCardUsable('sha', true));
                    event.num3 = Math.max(1, player.getAttackRange());
                    ('step 1');
                    var list = [],
                        choiceList = ['对至多' + get.translation(event.num1) + '名角色造成一点伤害并将手牌上限调零', '令至多' + get.translation(event.num2) + '名角色回复一点体力并将出杀次数调零', '弃置一名角色' + get.translation(event.num3) + '张牌并将攻击范围调零'];
                    list.push('造成伤害');
                    list.push('回复体力');
                    list.push('弃牌');
                    player.chooseControl(list).set('choiceList', choiceList, true);
                    ('step 2');
                    if (result.control == '造成伤害') {
                    }
                    if (result.control == '回复体力') {
                        event.goto(6);
                    }
                    if (result.control == '弃牌') {
                        event.goto(9);
                    }
                    ('step 3');
                    player
                        .chooseTarget([1, event.num1], get.prompt2('haitu_qingchao'), true, '对至多' + get.cnNumber(event.num1) + '名角色各造成1点伤害.', function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return get.damageEffect(target, player, player);
                        });
                    ('step 4');
                    if (result.bool) {
                        event.targets = result.targets.slice(0).sortBySeat();
                        for (var i of event.targets) {
                            i.damage();
                        }
                    } else {
                        event.finish();
                    }
                    ('step 5');
                    if (player.getHandcardLimit() > 0 && player.getHandcardLimit() != Infinity) player.addMark('haitu_sulan_handcarddebuff', event.num1);
                    if (player.getHandcardLimit() < 0 && player.getHandcardLimit() != -Infinity) player.addMark('haitu_sulan_handcardbuff', -player.getHandcardLimit());
                    event.finish();
                    ('step 6');
                    player
                        .chooseTarget([1, event.num2], get.prompt2('haitu_qingchao'), true, '令至多' + get.cnNumber(event.num2) + '名角色各回复1点体力.', function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return get.recovereffect(target, player, player);
                        });
                    ('step 7');
                    if (result.bool) {
                        event.targets = result.targets.slice(0).sortBySeat();
                        for (var i of event.targets) {
                            i.recover();
                        }
                    } else {
                        event.finish();
                    }
                    ('step 8');
                    if (player.getCardUsable('sha', true) > 0 && player.getCardUsable('sha', true) != Infinity) {
                        player.addMark('haitu_sulan_shadebuff', event.num2);
                    }
                    if (player.getCardUsable('sha', true) < 0 && player.getCardUsable('sha', true) != -Infinity) {
                        player.addMark('haitu_sulan_shabuff', -player.getCardUsable('sha', true));
                    }
                    event.finish();
                    ('step 9');
                    player
                        .chooseTarget('请选择目标', '弃置一名角色的牌)', true, function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (target) {
                            var att = get.attitude(_status.event.player, target);
                            return att < 0;
                        });
                    ('step 10');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        player.line(target, 'green');
                        player.discardPlayerCard('he', target, event.num3, true);
                    }
                    if (player.getAttackRange() > 0 && player.getAttackRange() != Infinity) {
                        player.addMark('haitu_sulan_distancedebuff', event.num3);
                    }
                    if (player.getAttackRange() < 0 && player.getAttackRange() != -Infinity) {
                        player.addMark('haitu_sulan_distancebuff', -player.getAttackRange());
                    }
                },
                ai: {
                    order: 10,
                },
            },
            haitu_fushi: {
                forced: true,
                mod: {
                    attackRangeBase(player) {
                        var map = player.getDamagedHp();
                        if (typeof map.range != 'number') return;
                        var range = 0;
                        var equips = player.getCards('e', function (card) {
                            return !ui.selected.cards || !ui.selected.cards.includes(card);
                        });
                        for (var i = 0; i < equips.length; i++) {
                            var info = get.info(equips[i], false).distance;
                            if (!info) continue;
                            if (info.attackFrom) {
                                range -= info.attackFrom;
                            }
                        }
                        return Math.max(map.range);
                    },
                },
            },
            haitu_yangliu: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                subSkill: {
                    give: {
                        charlotte: true,
                        trigger: {
                            global: 'phaseDrawBefore',
                        },
                        marktext: '流',
                        mark: true,
                        check(event, player) {
                            return get.attitude(player, event.player) < 0;
                        },
                        content() {
                            'step 0';
                            trigger.cancel();
                            player.draw(2);
                            player
                                .chooseCard(get.prompt('haitu_yangliu', trigger.player), 2, true, '交给其两张牌', 'he')
                                .set('ai', function (card) {
                                    if (!_status.event.checkx) return 0;
                                    return 1 + Math.random();
                                })
                                .set('checkx', lib.skill.huantu.checkx(trigger, player));
                            ('step 1');
                            if (result.bool) {
                                player.give(result.cards, trigger.player);
                            }
                        },
                    },
                },
                forced: true,
                filter(event, player) {
                    var history = player.getHistory('useCard', function (evt) {
                        return evt.isPhaseUsing();
                    });
                    var num = 0;
                    for (var i = 0; i < history.length; i++) {
                        num++;
                    }
                    return num == player.countCards('h');
                },
                content() {
                    player.addTempSkill('haitu_yangliu_give', { player: 'phaseBegin' });
                },
            },
            haitu_yuekong: {
                group: 'haitu_yuekong_draw',
                forced: true,
                silent: true,
                trigger: {
                    global: 'roundStart',
                },
                content() {
                    'step 0';
                    player.chooseTarget(get.prompt('haitu_yuekong'), '令任意名角色获得地图技能', [1, Infinity], () => true).set('ai', (target) => true);
                    ('step 1');
                    if (result.bool) {
                        event.list0 = [];
                        event.list0.push(result.targets);
                        event.list1 = [];
                        game.countPlayer(function (current) {
                            {
                                event.list1.push(current);
                            }
                        });
                        trigger.player.removeSkill('haitu_yuekong_init');
                        for (var i of result.targets) {
                            var next = game.createEvent('yuekong');
                            next.player = player;
                            next.target = i;
                            next.setContent(lib.skill.haitu_yuekong.work);
                        }
                    }
                },
                work(player, target) {
                    'step 0';
                    var list = [];
                    for (var i in lib.skill) {
                        if (!get.translation(i, 'info') || get.translation(i + '_info').length === 0) continue;
                        if (lib.skill[i].ai && lib.skill[i].ai.mapValue) list.add(i);
                    }
                    var skills = list.randomGets(3);
                    if (!skills.length) event.finish();
                    player
                        .chooseControl(skills)
                        .set(
                            'choiceList',
                            skills.map(function (i) {
                                return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                            })
                        )
                        .set('displayIndex', false)
                        .set('prompt', '越空:请选择令' + get.translation(target) + '获得的技能')
                        .set('ai', () => {
                            var list = _status.event.controls.slice();
                            return list.sort((a, b) => {
                                return (get.skillRank(b, 'in') - get.skillRank(a, 'in')) * get.attitude(_status.event.player, target);
                            })[0];
                        });
                    ('step 1');
                    target.addTempSkill(result.control, 'roundStart');
                    target.popup(result.control);
                },
                subSkill: {
                    draw: {
                        trigger: {
                            player: ['logSkill', 'useSkillAfter'],
                        },
                        filter(event, player) {
                            if (event.type != 'player') return false;
                            var skill = event.sourceSkill || event.skill;
                            var info = get.info(skill);
                            return info.ai && info.ai.mapValue;
                        },
                        content() {
                            player.draw();
                        },
                    },
                    gain: {
                        trigger: {
                            global: 'phaseZhunbeiBegin',
                            player: 'damageEnd',
                        },
                        content() {
                            var list = [];
                            for (var i in lib.skill) {
                                if (!get.translation(i, 'info') || get.translation(i + '_info').length === 0) continue;
                                if (lib.skill[i].ai && lib.skill[i].ai.mapValue && get.translation(i, 'info') && get.translation(i + '_info').length != 0) list.add(i);
                            }
                            player.removeSkill('haitu_yuekong_init');
                            var skills = list.randomGets(1);
                            player.storage.haitu_yuekong_init = skills;
                            player.storage.haitu_yuekong_init_skill = skills;
                            player.addAdditionalSkill('haitu_yuekong_init', skills, 'log');
                            player.addSkill('haitu_yuekong_init');
                        },
                    },
                    init: {
                        mark: 'card',
                        onremove: ['haitu_yuekong_init', 'haitu_yuekong_init_skill'],
                        intro: {
                            content(storage, player) {
                                var skill = player.storage.haitu_yuekong_init_skill;
                                // var skill=storage.name.slice(8);
                                return '<div class="skill">【' + lib.translate[skill] + '】</div><div>' + get.skillInfoTranslation(skill) + '</div>';
                            },
                        },
                        forced: true,
                        popup: false,
                    },
                },
                popup: false,
            },
            haitu_dongchao: {
                trigger: {
                    player: 'phaseDiscardBefore',
                },
                forced: true,
                content() {
                    trigger.cancel();
                    if (player.countCards('h') <= player.maxHp) player.drawTo(player.maxHp);
                    else {
                        player.chooseToDiscard('h', true, player.countCards('h') - player.maxHp);
                    }
                },
            },
            xin_lianxin: {
                subSkill: {
                    view: {
                        intro: {
                            content(num, player) {
                                var num = player.getStat('skill').haitushiqu;
                                return '本阶段失去了' + get.cnNumber(num) + '张牌.';
                            },
                        },
                        marktext: '心',
                        mark: true,
                        charlotte: true,
                    },
                    blocker: {
                        charlotte: true,
                        init(player, skill) {
                            player.addSkillBlocker(skill);
                        },
                        onremove(player, skill) {
                            player.removeSkillBlocker(skill);
                        },
                        skillBlocker(skill, player) {
                            return !lib.skill[skill].charlotte && get.is.locked(skill, player);
                        },
                        mark: true,
                        marktext: '断',
                        intro: {
                            content(storage, player, skill) {
                                var list = player.getSkills(null, false, false).filter(function (i) {
                                    return lib.skill.xin_lianxin_blocker.skillBlocker(i, player);
                                });
                                if (list.length) return '失效技能:' + get.translation(list);
                                return '无失效技能';
                            },
                        },
                    },
                },
                enable: ['chooseToUse', 'chooseToRespond'],
                global: 'haitushiqu',
                filter(event, player) {
                    var stat = player.getStat('skill').haitushiqu;
                    return stat <= player.countCards('he') && stat >= 1;
                },
                hiddenCard(player, name) {
                    var num = player.getStat('skill').haitushiqu;
                    if (num == 0) return false;
                    if (get.type(name) == 'basic' && lib.inpile.includes(name)) {
                        return num <= player.countCards('he');
                    }
                },
                chooseButton: {
                    dialog(event, player) {
                        'step 0';
                        var list = [];
                        var list0 = get.typeCard('basic');
                        for (var i of list0) {
                            if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) {
                                list.push(['基本', '', i]);
                                if (i == 'sha') {
                                    for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                }
                            }
                        }
                        return ui.create.dialog('炼心', [list, 'vcard'], 'hidden');
                    },
                    check(button) {
                        if (button.link[2] == 'shan') return 3;
                        var player = _status.event.player;
                        if (button.link[2] == 'jiu') {
                            if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                            if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                        }
                        return player.getUseValue({ name: button.link[2], nature: button.link[3] }) / 4;
                    },
                    backup(links, player) {
                        return {
                            selectCard: -1,
                            filterCard() {
                                return false;
                            },
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                                suit: 'none',
                                number: null,
                            },
                            precontent() {
                                'step 0';
                                var num = player.getStat('skill').haitushiqu;
                                player.choosePlayerCard('请重铸' + get.cnNumber(num) + '张牌', player, num, 'he', true);
                                ('step 1');
                                {
                                    var card = result.cards;
                                    player.recast(card);
                                    var list = [];
                                    for (var i of card) list.add(i.suit);
                                    if (list.length >= 2) {
                                        player.addTempSkill('xin_lianxin_blocker', 'roundStart');
                                    }
                                }
                                ('step 2');
                                {
                                    var cards = event.result.cards;
                                    event.result.card = {
                                        name: event.result.card.name,
                                        nature: event.result.card.nature,
                                    };
                                    event.result.cards = [];
                                    if (cards.length > 1) {
                                        var color = get.color(cards[0], player);
                                        for (var i = 1; i < cards.length; i++) {
                                            if (get.color(cards[i], player) != color) {
                                                var evt = event.parent;
                                                evt.set('qy_jinzhi', true);
                                                return;
                                            }
                                        }
                                    }
                                }
                            },
                        };
                    },
                    prompt(links, player) {
                        var num = player.getStat('skill').haitushiqu;
                        var name = links[0][2];
                        var nature = links[0][3];
                        return '重铸' + get.cnNumber(num) + '张牌,使用' + (get.translation(nature) || '') + get.translation(name);
                    },
                },
                mark: true,
                ai: {
                    order(item, player) {
                        return 1;
                    },
                    respondShan: true,
                    respondSha: true,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            haitu_jieduan: {
                forced: true,
                trigger: {
                    global: 'roundStart',
                    player: 'phaseUseBegin',
                },
                group: 'haitu_jieduan_snap',
                subSkill: {
                    snap: {
                        trigger: {
                            player: 'gainEnd',
                        },
                        filter(event, player) {
                            var suit = player.storage.haitu_jieduan;
                            return get.cardPile(function (card) {
                                return card.suit == suit;
                            });
                        },
                        forced: true,
                        content() {
                            'step 0';
                            var filter = trigger.cards;
                            var suitx = player.storage.haitu_jieduan;
                            event.togain = player.getCards('h', function (cardx) {
                                return filter.includes(cardx) && cardx.suit != suitx;
                            });
                            ('step 1');
                            player.recast(event.togain);
                        },
                    },
                },
                intro: {
                    content: '当前记录花色:$',
                },
                content() {
                    'step 0';
                    var list = lib.suit.slice(0);
                    player
                        .chooseControl(list)
                        .set('prompt', '请选择一种花色')
                        .set('ai', function () {
                            return 'heart';
                        });
                    ('step 1');
                    event.suit = result.control;
                    player.unmarkSkill('haitu_jieduan');
                    player.markAuto('haitu_jieduan', [event.suit]);
                    player.storage.haitu_jieduan = [];
                    player.storage.haitu_jieduan = result.control;
                    player.draw();
                },
            },
            haitu_sulan: {
                trigger: {
                    player: 'useCardAfter',
                },
                mark: true,
                marktext: '澜',
                intro: {
                    name2: '澜',
                    content(num, player, storage) {
                        var str = '<br><li>当前手牌上限:';
                        str += player.getHandcardLimit();
                        str += '<br><li>当前攻击范围:';
                        str += player.getAttackRange();
                        str += '<br><li>当前出杀基数:';
                        str += player.getCardUsable('sha', true);
                        return str;
                    },
                },
                group: ['haitu_sulan_buff'],
                subSkill: {
                    debuff: {
                        charlotte: true,
                        attackRange(player, num) {
                            return num - player.countMark('haitu_sulan_distancedebuff');
                        },
                        maxHandcard(player, num) {
                            return num - player.countMark('haitu_sulan_handcarddebuff');
                        },
                        cardUsable(card, player, num) {
                            if (card.name == 'sha') return num - player.countMark('haitu_sulan_shadebuff');
                        },
                    },
                    buff: {
                        charlotte: true,
                        mod: {
                            attackRange(player, num) {
                                return num + player.countMark('haitu_sulan_distancebuff') - player.countMark('haitu_sulan_distancedebuff');
                            },
                            maxHandcard(player, num) {
                                return num + player.countMark('haitu_sulan_handcardbuff') - player.countMark('haitu_sulan_handcarddebuff');
                            },
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num + player.countMark('haitu_sulan_shabuff') - player.countMark('haitu_sulan_shadebuff');
                            },
                        },
                    },
                    handcardbuff: {
                        charlotte: true,
                    },
                    handcarddebuff: {
                        charlotte: true,
                    },
                    distancebuff: {
                        charlotte: true,
                    },
                    distancedebuff: {
                        charlotte: true,
                    },
                    shadebuff: {
                        charlotte: true,
                    },
                    shabuff: {
                        charlotte: true,
                    },
                },
                forced: true,
                draw(player) {
                    event.num = 0;
                    if (player.getCardUsable('sha', true) == player.getHandcardLimit()) {
                        player.draw();
                    }
                    if (player.getHandcardLimit() == player.getAttackRange()) {
                        player.draw();
                    }
                    if (player.getCardUsable('sha', true) == player.getAttackRange()) {
                        player.draw();
                    }
                    if (event.num > 0) {
                        player.draw();
                    }
                },
                content() {
                    'step 0';
                    var list = [];
                    list.push('手牌上限');
                    list.push('出杀次数');
                    list.push('攻击范围');
                    list.push('取消');
                    player.chooseControl(list).set('prompt', '请选择一项属性增加', false);
                    ('step 1');
                    if (result.control == '取消') {
                        event.finish();
                    }
                    if (result.control == '体力上限') {
                        player.gainMaxHp();
                        player.update();
                        event.goto(2);
                    }
                    if (result.control == '手牌上限') {
                        player.addMark('haitu_sulan_handcardbuff', 1);
                        event.goto(4);
                    }
                    if (result.control == '出杀次数') {
                        player.addMark('haitu_sulan_shabuff', 1);
                        event.goto(6);
                    }
                    if (result.control == '攻击范围') {
                        player.addMark('haitu_sulan_distancebuff', 1);
                        event.goto(8);
                    }
                    ('step 2');
                    //执行体力上限后续效果.
                    player.update();
                    var list = [];
                    list.push('手牌上限');
                    list.push('攻击范围');
                    list.push('出杀次数');
                    player.chooseControl(list).set('prompt', '请选择一项属性减少');
                    ('step 3');
                    if (result.control == '手牌上限') {
                        {
                            player.addMark('haitu_sulan_handcarddebuff', 1);
                        }
                    }
                    if (result.control == '出杀次数') {
                        {
                            player.addMark('haitu_sulan_shadebuff', 1);
                        }
                    }
                    if (result.control == '攻击范围') {
                        {
                            player.addMark('haitu_sulan_distancedebuff', 1);
                        }
                    }
                    var next = game.createEvent('sulan');
                    next.player = player;
                    next.setContent(lib.skill.haitu_sulan.draw);
                    event.finish();
                    ('step 4');
                    player.update();
                    //执行手牌上限后续效果.
                    var list = [];
                    list.push('攻击范围');
                    list.push('出杀次数');
                    player.chooseControl(list).set('prompt', '请选择一项属性减少');
                    ('step 5');
                    if (result.control == '攻击范围') {
                        {
                            player.addMark('haitu_sulan_distancedebuff', 1);
                        }
                    }
                    if (result.control == '出杀次数') {
                        {
                            player.addMark('haitu_sulan_shadebuff', 1);
                        }
                    }
                    if (result.control == '体力上限') {
                        player.loseMaxHp();
                        player.update();
                    }
                    var next = game.createEvent('sulan');
                    next.player = player;
                    next.setContent(lib.skill.haitu_sulan.draw);
                    event.finish();
                    ('step 6');
                    player.update();
                    //执行出杀次数后续效果.
                    var list = [];
                    list.push('手牌上限');
                    list.push('攻击范围');
                    player.chooseControl(list).set('prompt', '请选择一项属性减少');
                    ('step 7');
                    player.update();
                    if (result.control == '攻击范围') {
                        {
                            player.addMark('haitu_sulan_distancedebuff', 1);
                        }
                    }
                    if (result.control == '手牌上限') {
                        {
                            player.addMark('haitu_sulan_handcarddebuff', 1);
                        }
                    }
                    if (result.control == '体力上限') {
                        player.loseMaxHp();
                        player.update();
                    }
                    var next = game.createEvent('sulan');
                    next.player = player;
                    next.setContent(lib.skill.haitu_sulan.draw);
                    event.finish();
                    ('step 8');
                    player.update();
                    //执行攻击范围后续效果.
                    var list = [];
                    list.push('手牌上限');
                    list.push('出杀次数');
                    player.chooseControl(list).set('prompt', '请选择一项属性减少');
                    ('step 9');
                    if (result.control == '手牌上限') {
                        {
                            player.addMark('haitu_sulan_handcarddebuff', 1);
                        }
                    }
                    if (result.control == '出杀次数') {
                        {
                            player.addMark('haitu_sulan_shadebuff', 1);
                        }
                    }
                    if (result.control == '体力上限') {
                        player.loseMaxHp();
                        player.update();
                    }
                    var next = game.createEvent('sulan');
                    next.player = player;
                    next.setContent(lib.skill.haitu_sulan.draw);
                },
            },
            haitu_fengyuan: {
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return !player.getStorage('haitu_fengyuan_chosen').includes(target);
                },
                content() {
                    'step 0';
                    player.addTempSkill('haitu_fengyuan_chosen', 'phaseUseAfter');
                    player.markAuto('haitu_fengyuan_chosen', [target]);
                    var list = [],
                        choiceList = ['令' + get.translation(target) + '摸一张牌你选择其区域内一张牌置入<箱庭>', '令' + get.translation(target) + '弃置一张牌并视为对你使用一张【杀】', '令' + get.translation(target) + '获得一张<箱庭>,本回合无法使用或打出牌且不能成为牌的目标'];
                    list.push('选项一');
                    var hs = target.getCards('he');
                    if (hs.length) {
                        list.push('选项二');
                    } else choiceList[1] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                    var card2 = player.getExpansions('haitu_xiangting');
                    if (card2.length) {
                        list.push('选项三');
                    } else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
                    player
                        .chooseControl(list)
                        .set('choiceList', choiceList, true)
                        .set('ai', function () {
                            var list = _status.event.controls;
                            if (list.includes('选项一')) return '选项一';
                        })
                        .set('prompt', '请选择一项');
                    ('step 1');
                    if (result.control == '选项一') {
                        target.draw();
                        var next = game.createEvent('haitu_xiangting_add');
                        next.player = player;
                        next.target = target;
                        next.setContent(lib.skill.haitu_fengyuan.add);
                    }
                    if (result.control == '选项二') {
                        target.chooseToDiscard(true);
                        target.useCard({ name: 'sha' }, player, 'noai');
                    }
                    if (result.control == '选项三') {
                        var next = game.createEvent('haitu_xiangting_gain');
                        next.player = player;
                        next.target = target;
                        next.setContent(lib.skill.haitu_fengyuan.gain);
                    }
                },
                add(player, target) {
                    'step 0';
                    player.choosePlayerCard('hej', true, target);
                    ('step 1');
                    if (result.cards?.length) {
                        var card = result.cards[0];
                        player.addToExpansion(card, 'giveAuto', player).gaintag.add('haitu_xiangting');
                    }
                    var card2 = player.getExpansions('haitu_xiangting');
                    if (card2.length > 3) {
                        var next = game.createEvent('haitu_xiangting_disacrd');
                        next.player = player;
                        next.setContent(lib.skill.haitu_xiangting.discard);
                    }
                },
                gain(player, target) {
                    'step 0';
                    var cards = player.getExpansions('haitu_xiangting');
                    target.chooseButton(['获得一张<箱庭>', cards], true);
                    ('step 1');
                    if (result.bool) {
                        target.gain(result.links, player, 'give');
                        target.addTempSkill('haitu_fengyuan_lock');
                        var card2 = player.getExpansions('haitu_xiangting');
                        if (card2.length >= 4) {
                            var next = game.createEvent('haitu_xiangting_disacrd');
                            next.player = player;
                            next.setContent(lib.skill.haitu_xiangting.discard);
                        }
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        player(player, target) {
                            return true;
                        },
                    },
                },
                subSkill: {
                    lock: {
                        //当前代码引用自大熊小猫<<金庸群侠传>>,如有侵权,立刻删改;
                        mark: true,
                        marktext2: '逢',
                        marktext: '逢',
                        intro: {
                            content: '政府姥爷叫你装死!当前回合内,你不能使用或打出牌',
                        },
                        mod: {
                            targetEnabled(card, player, target, now) {
                                return false;
                            },
                            cardEnabled2(card) {
                                return false;
                            },
                            cardEnabled(card, player) {
                                return false;
                            },
                            cardUsable(card, player) {
                                return false;
                            },
                            cardrespondable(card, player) {
                                return false;
                            },
                            cardSavable(card, player) {
                                return false;
                            },
                            targetInRange(card) {
                                return false;
                            },
                        },
                    },
                    chosen: {
                        charlotte: true,
                        intro: {
                            content: '本阶段已与$互动过',
                        },
                    },
                },
            },
            haitu_xiangting: {
                trigger: { player: 'gainEnd' },
                intro: {
                    markcount: 'expansion',
                    mark(dialog, storage, player) {
                        var cards = player.getExpansions('haitu_xiangting');
                        if (player.isUnderControl(true)) dialog.addAuto(cards);
                        else return '共有' + get.cnNumber(cards.length) + '张牌';
                    },
                },
                forced: true,
                filter(event, player, name) {
                    return event.getParent(2).name != 'haitu_xiangting_swap';
                },
                content() {
                    'step 0';
                    var cards = [];
                    for (var i of trigger.cards) {
                        cards.push(i);
                    }
                    player.chooseButton(['是否复制其中的一张牌作为<箱庭>？', cards]).set('ai', (button) => _status.event.player.getUseValue(button.link));
                    ('step 1');
                    if (result.links?.length) {
                        var card0 = result.links[0];
                        var card1 = game.createCard(card0);
                        player.addToExpansion(card1).gaintag.add('haitu_xiangting');
                        var next = game.createEvent('haitu_xiangting_discard');
                        next.player = player;
                        next.setContent(lib.skill.haitu_xiangting.discard);
                    }
                },
                discard(player) {
                    'step 0';
                    var card2 = player.getExpansions('haitu_xiangting');
                    if (card2.length >= 5) {
                        player.chooseCardButton('将一张<箱庭>弃置', player.getExpansions('haitu_xiangting'), true);
                    } else {
                        event.finish();
                    }
                    ('step 1');
                    if (result.links?.length) {
                        player.loseToDiscardpile(result.links[0]);
                    }
                },
                group: ['haitu_xiangting_swap', 'haitu_xiangting_damage'],
                subSkill: {
                    damage: {
                        trigger: { player: 'damageEnd' },
                        silent: true,
                        filter(event, player) {
                            return player.getExpansions('haitu_xiangting').length;
                        },
                        content() {
                            var next = game.createEvent('haitu_xiangting_swap');
                            next.player = player;
                            next.setContent(lib.skill.haitu_xiangting_swap.content);
                        },
                    },
                    swap: {
                        enable: 'phaseUse',
                        usable: 1,
                        filter(event, player) {
                            return player.getExpansions('haitu_xiangting').length;
                        },
                        content() {
                            'step 0';
                            event.cards = player.getExpansions('haitu_xiangting');
                            player.drawTo(event.cards.length);
                            ('step 1');
                            var cards = player.getExpansions('haitu_xiangting');
                            var next = player.chooseToMove('是否交换<箱庭>和手牌？');
                            next.set('list', [
                                [get.translation(player) + '(你)的<箱庭>', cards],
                                ['手牌区', player.getCards('h')],
                            ]);
                            next.set('filterMove', function (from, to) {
                                return typeof to != 'number';
                            });
                            next.set('processAI', function (list) {
                                var player = _status.event.player,
                                    cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                        return get.value(a) - get.value(b);
                                    }),
                                    cards2 = cards.splice(0, player.getExpansions('haitu_xiangting').length);
                                return [cards2, cards];
                            });
                            ('step 2');
                            if (result.bool) {
                                var pushs = result.moved[0],
                                    gains = result.moved[1];
                                pushs.removeArray(player.getExpansions('haitu_xiangting'));
                                gains.removeArray(player.getCards('h'));
                                if (!pushs.length || pushs.length != gains.length) return;
                                player.addToExpansion(pushs).gaintag.add('haitu_xiangting');
                                player.directgain(gains, 'gain2');
                            }
                            ('step 3');
                        },
                    },
                },
            },
            haitu_shenxuan: {
                subSkill: {
                    offone: { charlotte: true, fixed: true },
                    offtwo: { charlotte: true, fixed: true },
                    offthree: { charlotte: true, fixed: true },
                    1: {
                        trigger: {
                            player: 'dyingBefore',
                        },
                        usable: 1,
                        filter(event, player) {
                            if (player.countMark('haitu_haitushenzi') >= 3) return false;
                            return true;
                        },
                        content() {
                            'step 0';
                            player.gainMaxHp();
                            player.recover(player.maxHp);
                            var list = [];
                            var choiceList = ['令所有角色弃置所有手牌并将手牌摸至当前体力.', '令所有角色将体力值调整为与你相同.', '令所有角色进入麻痹状态直至回合结束.'];
                            if (!player.hasSkill('haitu_shenxuan_offone')) {
                                list.push('选项一');
                            } else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                            if (!player.hasSkill('haitu_shenxuan_offone')) {
                                list.push('选项二');
                            } else choiceList[0] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                            if (!player.hasSkill('haitu_shenxuan_offone')) {
                                list.push('选项三');
                            } else choiceList[0] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
                            player.chooseControl(list).set('choiceList', choiceList, true);
                            ('step 1');
                            player.addMark('haitu_haitushenzi', 1);
                            event.list2 = [];
                            game.countPlayer(function (current) {
                                event.list2.push(current);
                            });
                            if (result.control == '选项一') {
                                player.addSkill('haitu_shenxuan_offone');
                                for (var i of event.list2) {
                                    i.discard(i.getCards('h'));
                                    i.drawTo(i.hp);
                                }
                            }
                            if (result.control == '选项二') {
                                player.addSkill('haitu_shenxuan_offtwo');
                                for (var i of event.list2) {
                                    i.hp = player.hp;
                                }
                            }
                            if (result.control == '选项三') {
                                player.addSkill('haitu_shenxuan_offthree');
                                for (var i of event.list2) {
                                    i.addTempSkill('haitu_mabidamage_snap');
                                }
                            }
                        },
                    },
                },
                trigger: {
                    source: 'dieAfter',
                },
                forced: true,
                content() {
                    player.recover(player.maxHp);
                },
                group: ['haitu_shenxuan_1'],
            },
            haitu_Marvel_ganying: {
                trigger: {
                    player: 'damageBefore',
                    source: 'damageBefore',
                },
                filter(event, player) {
                    var hs = player.getCards('h');
                    if (hs.length > 1) {
                        var color = get.color(hs[0], player);
                        for (var i = 1; i < hs.length; i++) {
                            if (get.color(hs[i], player) != color) return false;
                        }
                    }
                    return true;
                },
                forced: true,
                content() {
                    player.showHandcards();
                    if (trigger.source != player) {
                        player.gainPlayerCard(true, trigger.source);
                    } else {
                        player.gainPlayerCard(true, trigger.player, 'he');
                    }
                },
                ai: {
                    maixie_defend: true,
                    threaten: 0.85,
                },
            },
            haitu_Marvel_caosi: {
                enable: 'phaseUse',
                usable: 2,
                filterCard: true,
                selectCard: 1,
                /*selectTarget:function(){
                    var player=_status.event.player;
                    var targets=game.filterPlayer(function(current){
                        return current.countCards('ej');
                    });
                    if(targets.length) return 2;
                    return 0;
                },
                filterTarget:function(card,player,target){
                    var cards=ui.selected.cards[0]
                    if(target.countCards('ej',function(cardx){
                        return cardx.suit==cards.suit;
                    })){
                        if(ui.selected.targets.length){
                            var from=ui.selected.targets[0];
                            if(!from.countCards('ej',function(cardx){
                                return cardx.suit==cards.suit;
                            })) return false;
                            var es=from.getCards('j');
                            for(var i=0;i<es.length;i++){
                                if(_status.event.nojudge) break;
                                if(target.canAddJudge(es[i])) return true;
                            }
                            if(target.isMin()) return false;
                        }
                    }else{
                        return true;
                    }
                },
                multitarget:true,
                multiline:true,*/
                discard: false,
                lose: false,
                delay: false,
                position: 'he',
                content() {
                    'step 0';
                    player.recast(cards[0]);
                    ('step 1');
                    if (!player.canMoveCard(null, event.nojudge)) {
                        event.finish();
                        return;
                    }
                    if (
                        !game.countPlayer(function (current) {
                            return current.countCards('ej', function (cardx) {
                                return cardx.suit == cards[0].suit;
                            });
                        })
                    ) {
                        event.finish();
                        return;
                    }
                    var next = player.chooseTarget(2, function (card, player, target) {
                        if (ui.selected.targets.length == 0)
                            return target.countCards('ej', function (card) {
                                return card.suit == cards[0].suit;
                            });
                        if (ui.selected.targets.length == 1) {
                            if (target.isMin()) return false;
                            var from = ui.selected.targets[0];
                            var js = from.getCards('j', function (card) {
                                return card.suit == cards[0].suit;
                            });
                            for (var i = 0; i < js.length; i++) {
                                if (_status.event.nojudge) break;
                                if (target.canAddJudge(js[i])) return true;
                            }
                        }
                        return true;
                    });
                    next.set('nojudge', event.nojudge || false);
                    next.set('ai', function (target) {
                        var player = _status.event.player;
                        var att = get.attitude(player, target);
                        var sgnatt = get.sgn(att);
                        if (ui.selected.targets.length == 0) {
                            if (att > 0) {
                                if (
                                    !_status.event.nojudge &&
                                    target.countCards('j', function (card) {
                                        return game.hasPlayer(function (current) {
                                            return current != target && current.canAddJudge(card) && get.attitude(player, current) < 0;
                                        });
                                    })
                                )
                                    return 14;
                                if (
                                    target.countCards('e', function (card) {
                                        return (
                                            get.value(card, target) < 0 &&
                                            game.hasPlayer(function (current) {
                                                return current != target && get.attitude(player, current) < 0 && current.isEmpty(get.subtype(card)) && get.effect(target, card, player, player) < 0;
                                            })
                                        );
                                    }) > 0
                                )
                                    return 9;
                            } else if (att < 0) {
                                if (
                                    game.hasPlayer(function (current) {
                                        if (current != target && get.attitude(player, current) > 0) {
                                            var es = target.getCards('e');
                                            for (var i = 0; i < es.length; i++) {
                                                if (get.value(es[i], target) > 0 && current.isEmpty(get.subtype(es[i])) && get.effect(current, es[i], player, player) > 0) return true;
                                            }
                                        }
                                    })
                                ) {
                                    return -att;
                                }
                            }
                            return 0;
                        }
                        var es = ui.selected.targets[0].getCards('e');
                        var i;
                        var att2 = get.sgn(get.attitude(player, ui.selected.targets[0]));
                        for (var i = 0; i < es.length; i++) {
                            if (sgnatt != 0 && att2 != 0 && sgnatt != att2 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.effect(target, es[i], player, target)) == sgnatt && target.isEmpty(get.subtype(es[i]))) {
                                return Math.abs(att);
                            }
                        }
                        if (
                            i == es.length &&
                            (_status.event.nojudge ||
                                !ui.selected.targets[0].countCards('j', function (card) {
                                    return target.canAddJudge(card);
                                }) ||
                                att2 <= 0)
                        ) {
                            return 0;
                        }
                        return -att * att2;
                    });
                    next.set('multitarget', true);
                    next.set('targetprompt', _status.event.targetprompt || ['被移走', '移动目标']);
                    next.set('prompt', event.prompt || '移动场上的一张牌');
                    if (event.prompt2) next.set('prompt2', event.prompt2);
                    if (event.forced) next.set('forced', true);
                    ('step 2');
                    event.result = result;
                    if (result.bool) {
                        player.line2(result.targets, 'green');
                        event.targets = result.targets;
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    ('step 4');
                    if (event.targets.length == 2) {
                        player
                            .choosePlayerCard(
                                'ej',
                                true,
                                function (button) {
                                    var player = _status.event.player;
                                    var targets0 = _status.event.targets0;
                                    var targets1 = _status.event.targets1;
                                    if (get.attitude(player, targets0) > 0 && get.attitude(player, targets1) < 0) {
                                        if (get.position(button.link) == 'j') return 12;
                                        if (get.value(button.link, targets0) < 0 && get.effect(targets1, button.link, player, targets1) > 0) return 10;
                                        return 0;
                                    } else {
                                        if (get.position(button.link) == 'j') return -10;
                                        return get.value(button.link) * get.effect(targets1, button.link, player, targets1);
                                    }
                                },
                                event.targets[0]
                            )
                            .set('nojudge', event.nojudge || false)
                            .set('targets0', targets[0])
                            .set('targets1', targets[1])
                            .set('filterButton', function (button) {
                                var targets1 = _status.event.targets1;
                                if (get.position(button.link) == 'j') {
                                    if (_status.event.nojudge) return false;
                                    return targets1.canAddJudge(button.link);
                                } else {
                                    return targets1.isEmpty(get.subtype(button.link));
                                }
                            })
                            .set('filterButton', function (button) {
                                return button.link.suit == cards[0].suit;
                            });
                    } else {
                        event.finish();
                    }
                    ('step 5');
                    if (result.bool && result.links.length) {
                        var link = result.links[0];
                        if (get.position(link) == 'e') {
                            event.targets[1].equip(link);
                        } else if (link.viewAs) {
                            event.targets[1].addJudge({ name: link.viewAs }, [link]);
                        } else {
                            event.targets[1].addJudge(link);
                        }
                        event.targets[0].$give(link, event.targets[1], false);
                        game.log(event.targets[0], '的', link, '被移动给了', event.targets[1]);
                        event.result.card = link;
                        event.result.position = get.position(link);
                        if (event.targets[0] == player) {
                            player.useCard({ name: 'sha' }, event.targets[1], 'noai');
                        }
                    }
                },
                ai: {
                    order(item, player) {
                        if (player.hasCard((i) => get.value(i) > Math.max(6, 9 - player.hp), 'he')) return 1;
                        return 10;
                    },
                    result: {
                        player: 1,
                    },
                    nokeep: true,
                    skillTagFilter(player, tag, arg) {
                        if (tag === 'nokeep') return (!arg || (arg && arg.card && arg.card.name === 'tao')) && player.isPhaseUsing() && !player.getStat().skill.xinzhiheng && player.hasCard((card) => card.name !== 'tao', 'h');
                    },
                    threaten: 1.55,
                },
            },
            haitu_guance: {
                trigger: { global: 'damageBefore' },
                group: 'haitu_guance_add',
                forced: true,
                filter(event, player) {
                    return player.getStorage('haitu_guance').length >= 1;
                },
                content() {
                    'step 0';
                    var list1 = player.getStorage('haitu_guance');
                    var list = lib.linked.slice(0).filter(function (i) {
                        return list1.includes(i) && i != trigger.nature;
                    });
                    list.push('cancel2');
                    player
                        .chooseControl(list)
                        .set('prompt', get.prompt('haitu_guance'))
                        .set('prompt2', '本次伤害属性为' + get.translation(trigger.nature) + ',你可以将其转换为以下属性之一')
                        .set('ai', function () {
                            var list = _status.event.controls,
                                player = _status.event.player;
                            var att = get.attitude(player, trigger.player);
                            if (att > 0) {
                                if (list.includes('haitu_liao')) return 'haitu_liao';
                                if (list.includes('haitu_moshu')) return 'haitu_moshu';
                                if (list.includes('haitu_yineng')) return 'haitu_yineng';
                            }
                            if (att < 0) {
                                if (list.includes('haitu_jibian')) return 'haitu_jibian';
                                if (list.includes('haitu_moshu')) return 'haitu_moshu';
                                if (list.includes('haitu_guang')) return 'haitu_guang';
                                if (list.includes('haitu_mabi')) return 'haitu_mabi';
                            } else {
                                return list.randomGet();
                            }
                        });
                    ('step 1');
                    if (result.control != 'cancel2') {
                        let beginIndex;
                        switch (result.control) {
                            case 'fire':
                                beginIndex = 0;
                                break;
                            case 'ice':
                                beginIndex = 1;
                                break;
                            case 'thunder':
                                beginIndex = 2;
                                break;
                        }
                        trigger.nature = result.control;
                        player.unmarkAuto('haitu_guance', [result.control]);
                    }
                },
                intro: {
                    content: '已记录属性:$',
                },
                subSkill: {
                    add: {
                        trigger: {
                            player: ['phaseBegin', 'damageEnd'],
                            source: 'damageEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return !event.nature;
                        },
                        content() {
                            var list1 = player.getStorage('haitu_guance');
                            var list = lib.linked.slice(0).filter(function (i) {
                                return !list1.includes(i);
                            });
                            list.remove('shen');
                            if (list.length) {
                                var nature = list.randomGet(1);
                                player.markAuto('haitu_guance', [nature]);
                            } else {
                                event.finish();
                            }
                        },
                    },
                },
            },
            haitu_shiyan: {
                subSkill: {
                    use: {
                        enable: 'phaseUse',
                        usable: 1,
                        filterTarget(card, player, target) {
                            return true;
                        },
                        content() {
                            target.changeHujia();
                            var list = lib.linked.slice(0);
                            list.remove('shen');
                            var nature = list.randomGet();
                            target.damage('nocard', nature);
                        },
                    },
                },
                group: 'haitu_shiyan_use',
                trigger: { player: ['phaseZhunbeiEnd', 'damageEnd', 'useCardAfter'] },
                forced: true,
                filter(event, player) {
                    if (event.nature) {
                        return false;
                    } else {
                        return true;
                    }
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget('请选择做实验的小白鼠', false, function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return 10 + get.attitude(player, target);
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        target.changeHujia();
                        var list = lib.linked.slice(0);
                        list.remove('shen');
                        var nature = list.randomGet();
                        target.damage('nocard', nature);
                    }
                },
            },
            haitu_zhiwu: {
                subSkill: {
                    off: {
                        trigger: {
                            player: 'useCardAfter',
                        },
                        forced: true,
                        popup: false,
                        silent: true,
                        charlotte: true,
                        content() {
                            delete player.storage.haitu_zhiwu_stab.nature;
                        },
                    },
                    stab: {
                        charlotte: true,
                        trigger: {
                            player: 'useCardToBefore',
                        },
                        _priority: 7,
                        forced: true,
                        filter(event, player) {
                            if (event.card.name == 'sha' && !event.card.nature) return true;
                        },
                        content() {
                            trigger.card.nature = 'stab';
                            player.addSkill('haitu_zhiwu_off');
                            player.storage.haitu_zhiwu_stab = trigger.card;
                        },
                    },
                },
                limited: true,
                enable: 'phaseUse',
                filter(event, player) {
                    return !player.storage.haitu_zhiwu;
                },
                init(player) {
                    player.storage.haitu_zhiwu = false;
                },
                mark: true,
                intro: {
                    content: 'limited',
                },
                content() {
                    'step 0';
                    var shas = player.getCards('h', 'tao');
                    var num;
                    if (player.hp >= 4 && shas.length >= 3) {
                        num = 3;
                    } else if (player.hp >= 3 && shas.length >= 2) {
                        num = 2;
                    } else {
                        num = 1;
                    }
                    var map = {};
                    var list = [];
                    for (var i = 1; i <= player.hp; i++) {
                        var cn = get.cnNumber(i, true);
                        map[cn] = i;
                        list.push(cn);
                    }
                    event.map = map;
                    player.awakenSkill('haitu_zhiwu');
                    player.storage.haitu_zhiwu = true;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '失去任意点体力')
                        .set('goon', num);
                    ('step 1');
                    event.num = event.map[result.control] || 1;
                    player.storage.haitu_zhiwu2 = num;
                    player.loseHp(event.num);
                    player.draw(event.num);
                    player.addSkill('haitu_zhiwu_stab');
                    ('step 2');
                    event.list = [];
                    for (var i in lib.card) {
                        if (!lib.card[i].content) continue;
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                        var name = lib.card[i];
                        var type = get.type(name);
                        if (lib.card[i].type == 'equip' && get.subtype(i) == 'equip1') {
                            event.list.add(i);
                        }
                    }
                    event.list.remove('duanjian');
                    event.list.remove('qihaitugbaodao');
                    ('step 3');
                    event.num--;
                    var num = 3;
                    var choice;
                    if (typeof event.list == 'string' || typeof event.list == 'function') {
                        choice = event.list.randomGets(num);
                    } else if (Array.isArray(event.list)) {
                        choice = event.list.randomGets(num);
                    } else {
                        choice = Array.from(event.list).randomGets(num);
                    }
                    if (choice.length) {
                        var prompt = event.prompt;
                        if (!prompt) {
                            prompt = '选择一张武器牌并获得其技能';
                        }
                        if (typeof choice[0] === 'string') {
                            var next = player.chooseVCardButton(choice, prompt, event.forced);
                            if (event.ai) {
                                next.set('ai', event.ai);
                            }
                        } else if (get.itemtype(choice[0]) == 'card') {
                            var next = player.chooseCardButton(choice, prompt, event.forced);
                            if (event.ai) {
                                next.set('ai', event.ai);
                            }
                        } else {
                            event.finish();
                        }
                    } else {
                        event.finish();
                    }
                    ('step 4');
                    event.result = {
                        bool: result.bool,
                        card: null,
                        choice: null,
                    };
                    if (result.bool && result.links.length) {
                        var link = result.links[0];
                        event.list.remove(link);
                        var togain = null;
                        if (get.itemtype(link) == 'card') {
                            event.result.card = link;
                            togain = link;
                        } else if (Array.isArray(link)) {
                            event.result.choice = link[2];
                            togain = game.createCard(link[2]);
                        }
                        if (togain) {
                            if (event.use) {
                                player.chooseUseTarget(togain);
                            } else if (!event.nogain) {
                                var Skills = get.info(togain, false).skills;
                                if (Skills && Skills.length) player.addSkill(Skills);
                            }
                        }
                    }
                    ('step 5');
                    if (event.num > 0) {
                        event.goto(3);
                    } else {
                        event.finish();
                    }
                },
            },
            haitu_chaoyu: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    player.recover();
                    var History = player.getHistory('sourceDamage');
                    var damagenum = 0;
                    for (var damage of History) {
                        damagenum += damage.num;
                    }
                    if (damagenum > 0) {
                        player.draw(damagenum);
                    }
                },
            },
            haitu_jianyi: {
                forced: true,
                init(player) {
                    player.disableJudge();
                },
                forced: true,
                mod: {
                    maxHandcardBase(player) {
                        return player.maxHp;
                    },
                },
            },
            haitu_zhilan: {
                position: 'hes',
                enable: 'chooseToUse',
                filterCard(card) {
                    return get.color(card) == 'black';
                },
                filterTarget(card, player, target) {
                    return (target.hp < target.maxHp && player.storage.haitu_yushen1.isIn()) || (target.hp < target.maxHp && target == player);
                },
                viewAsFilter(player) {
                    return player.countCards('hes', { color: 'black' }) > 0;
                },
                viewAs: {
                    name: 'caoyao',
                },
                check(card) {
                    return 6 - get.value(card);
                },
                ai: {
                    threaten: 1.6,
                    basic: {
                        useful: [7, 2],
                        value: [7, 2],
                    },
                    order: 2.2,
                    result: {
                        target: 2,
                    },
                    tag: {
                        recover: 1,
                    },
                },
                prompt: '将一张黑色牌当草药使用',
            },
            haitu_fnaf_huayan: {
                trigger: {
                    player: ['drawBegin', 'recoverBegin'],
                    source: 'damageBegin1',
                },
                filter(event, player) {
                    return event.getParent(2).name != 'haitu_fnaf_huayan';
                },
                usable: 10,
                forced: true,
                content() {
                    //QQQ
                    'step 0';
                    var map = {};
                    var list = [];
                    var num1 = trigger.num;
                    list.push(0);
                    list.push(1);
                    if (trigger.num >= 2) {
                        list.push(2);
                    }
                    event.map = map;
                    player
                        .chooseControl(list, function () {
                            return get.cnNumber(_status.event.goon, true);
                        })
                        .set('prompt', '请减少任意点数值')
                        .set('ai', function () {
                            if (trigger.name != 'recover') return 1;
                        });
                    ('step 1');
                    if (result.control == 0) {
                        var num1 = 0;
                        event.finish();
                    }
                    if (result.control == 1) {
                        var num1 = 1;
                    }
                    if (result.control == 2) {
                        var num1 = 2;
                    }
                    trigger.num -= num1;
                    if ((trigger.num = 0)) trigger.cancel();
                    if (num1 != 1) {
                        event.goto(3);
                    } else {
                        var list1 = [];
                        if (trigger.name != 'damage') {
                            list1.push('伤害');
                        }
                        if (trigger.name != 'draw') {
                            list1.push('摸牌');
                        }
                        if (trigger.name != 'recover') {
                            list1.push('回复');
                        }
                        player
                            .chooseControl(list1, true)
                            .set('prompt', '请选择要执行的事件')
                            .set('goon', num)
                            .set('ai', function () {
                                var player = _status.event.player;
                                var list = _status.event.controls.slice(0);
                                var listx = [];
                                var gett = function (choice) {
                                    var max = 0,
                                        func = {
                                            回复(current) {
                                                if (current.isDamaged()) max = Math.max(max, get.recoverEffect(current, player, player));
                                            },
                                            伤害(current) {
                                                max = Math.max(max, get.effect(current, { name: 'damage' }, player, player));
                                            },
                                            摸牌(current) {
                                                max = Math.max(max, get.effect(current, { name: 'wuzhong' }, player, player));
                                            },
                                        }[choice];
                                    game.countPlayer(function (current) {
                                        if (!listx.includes(current)) func(current);
                                    });
                                    return max;
                                };
                                return list.sort(function (a, b) {
                                    return gett(b) - gett(a);
                                })[0];
                            });
                    }
                    ('step 2');
                    if (result.control == '伤害') {
                        var next = game.createEvent('huayan');
                        next.player = player;
                        next.setContent(lib.skill.haitu_fnaf_huayan.damage);
                    }
                    if (result.control == '回复') {
                        var next = game.createEvent('huayan');
                        next.player = player;
                        next.setContent(lib.skill.haitu_fnaf_huayan.recover);
                    }
                    if (result.control == '摸牌') {
                        var next = game.createEvent('huayan');
                        next.player = player;
                        next.setContent(lib.skill.haitu_fnaf_huayan.draw);
                    }
                    event.finish();
                    ('step 3');
                    if (trigger.name != 'damage') {
                        var next = game.createEvent('huayan');
                        next.player = player;
                        next.setContent(lib.skill.haitu_fnaf_huayan.damage);
                    }
                    if (trigger.name != 'draw') {
                        var next = game.createEvent('huayan');
                        next.player = player;
                        next.setContent(lib.skill.haitu_fnaf_huayan.draw);
                    }
                    if (trigger.name != 'recover') {
                        var next = game.createEvent('huayan');
                        next.player = player;
                        next.setContent(lib.skill.haitu_fnaf_huayan.recover);
                    }
                },
                damage(player) {
                    'step 0';
                    player
                        .chooseTarget('对一名角色造成1点伤害', false, function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return get.damageEffect(target, player, player);
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        result.targets[0].damage();
                    }
                },
                draw(player) {
                    player.draw();
                },
                recover(player) {
                    'step 0';
                    if (
                        !game.hasPlayer(function (current) {
                            return !current.isHealthy();
                        })
                    ) {
                        event.finish();
                    }
                    player
                        .chooseTarget('令一名角色回复一点体力', false, function (card, player, target) {
                            return !target.isHealthy();
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return get.effect(target, { name: 'tao' }, player, player);
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        {
                            target.recover();
                        }
                    }
                },
            },
            haitu_naji: {
                global: 'haitu_naji_use',
                subSkill: {
                    use: {
                        charlotte: true,
                        enable: 'phaseUse',
                        usable: 1,
                        filter(event, player) {
                            if (
                                !game.hasPlayer(function (current) {
                                    return current.hasSkill('haitu_naji');
                                })
                            ) {
                                return false;
                            }
                            return true;
                        },
                        filterTarget(card, player, target) {
                            return target.hasSkill('haitu_naji');
                        },
                        content() {
                            'step 0';
                            var list = [];
                            var players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                if (players[i] == player && players[i].getEquips('haitu_mummycloth1').length < 1 && player.hasUseTarget('haitu_mummycloth1')) {
                                    list.push('武器栏');
                                }
                                if (players[i] == player && players[i].getEquips('haitu_mummycloth2').length < 1 && player.hasUseTarget('haitu_mummycloth2')) {
                                    list.push('防具栏');
                                }
                                if (players[i] == player && players[i].getEquips('haitu_mummycloth3').length < 1 && player.hasUseTarget('haitu_mummycloth3')) {
                                    list.push('防御马');
                                }
                                if (players[i] == player && players[i].getEquips('haitu_mummycloth4').length < 1 && player.hasUseTarget('haitu_mummycloth4')) {
                                    list.push('进攻马');
                                }
                                if (players[i] == player && players[i].getEquips('haitu_mummycloth5').length < 1 && player.hasUseTarget('haitu_mummycloth5')) {
                                    list.push('宝物栏');
                                }
                            }
                            if (list != []) {
                                player
                                    .chooseControl(list)
                                    .set('prompt', '请选择使用【纱布】的位置.')
                                    .set('ai', function () {
                                        return _status.event.controls.randomGet(1);
                                    });
                            } else {
                                game.log('可是你已经没有多余的位置完成木乃伊献祭');
                                event.finish();
                            }
                            ('step 1');
                            if (result.control == '武器栏') {
                                var card = game.createCard('haitu_mummycloth1', 'none', 4);
                                player.equip(card);
                                var next = game.createEvent('gian');
                                next.player = target;
                                next.setContent(lib.skill.haitu_naji.weapon);
                            }
                            if (result.control == '防具栏') {
                                var card = game.createCard('haitu_mummycloth2', 'none', 4);
                                player.equip(card);
                                var next = game.createEvent('gian');
                                next.player = target;
                                next.setContent(lib.skill.haitu_naji.defend);
                            }
                            if (result.control == '防御马') {
                                var card = game.createCard('haitu_mummycloth3', 'none', 4);
                                player.equip(card);
                                var next = game.createEvent('gian');
                                next.player = target;
                                next.setContent(lib.skill.haitu_naji.horseone);
                            }
                            if (result.control == '进攻马') {
                                var card = game.createCard('haitu_mummycloth4', 'none', 4);
                                player.equip(card);
                                var next = game.createEvent('gian');
                                next.player = target;
                                next.setContent(lib.skill.haitu_naji.horsetwo);
                            }
                            if (result.control == '宝物栏') {
                                var card = game.createCard('haitu_mummycloth5', 'none', 4);
                                player.equip(card);
                                var next = game.createEvent('gian');
                                next.player = target;
                                next.setContent(lib.skill.haitu_naji.treasure);
                            }
                            ('step 3');
                            event.finish();
                        },
                        ai: {
                            order: 20,
                            expose: 1,
                            result: {
                                player(player, target) {
                                    if (player.hasSkill('mad', null, null, false)) {
                                        return -3;
                                    }
                                    var atti = get.attitude(player, target);
                                    if (atti > 0) {
                                        return 0;
                                    } else {
                                        if (player.hasSkill('mad', null, null, false)) {
                                            return 30000;
                                        }
                                        if (player.hasSkill('haitu_naji', null, null, false)) {
                                            return 30000;
                                        }
                                        {
                                            return -4;
                                        }
                                    }
                                },
                            },
                        },
                        filterCard() {
                            return false;
                        },
                        selectCard: -1,
                    },
                },
                weapon(player) {
                    'step 0';
                    player.chooseBool('是否使用一张武器牌？');
                    ('step 1');
                    if (result.bool) {
                        var card = get.cardPile(function (card) {
                            return get.subtype(card) == 'equip1' && player.hasUseTarget(card);
                        });
                        if (card) {
                            player.chooseUseTarget(card, true, 'nopopup', 'nothrow');
                        }
                    } else {
                        event.finish();
                    }
                },
                defend(player) {
                    'step 0';
                    player.chooseBool('是否使用一张防具牌？');
                    ('step 1');
                    if (result.bool) {
                        var card = get.cardPile(function (card) {
                            return get.subtype(card) == 'equip2' && player.hasUseTarget(card);
                        });
                        if (card) {
                            player.chooseUseTarget(card, true, 'nopopup', 'nothrow');
                        }
                    } else {
                        event.finish();
                    }
                },
                horseone(player) {
                    'step 0';
                    player.chooseBool('是否使用一张防御马？');
                    ('step 1');
                    if (result.bool) {
                        var card = get.cardPile(function (card) {
                            return get.subtype(card) == 'equip3' && player.hasUseTarget(card);
                        });
                        if (card) {
                            player.chooseUseTarget(card, true, 'nopopup', 'nothrow');
                        }
                    } else {
                        event.finish();
                    }
                },
                horsetwo(player) {
                    'step 0';
                    player.chooseBool('是否使用一张进攻马？');
                    ('step 1');
                    if (result.bool) {
                        var card = get.cardPile(function (card) {
                            return get.subtype(card) == 'equip4' && player.hasUseTarget(card);
                        });
                        if (card) {
                            player.chooseUseTarget(card, true, 'nopopup', 'nothrow');
                        }
                    } else {
                        event.finish();
                    }
                },
                treasure(player) {
                    'step 0';
                    player.chooseBool('是否使用一张宝物牌？');
                    ('step 1');
                    if (result.bool) {
                        var card = get.cardPile(function (card) {
                            return get.subtype(card) == 'equip5' && player.hasUseTarget(card);
                        });
                        if (card) {
                            player.chooseUseTarget(card, true, 'nopopup', 'nothrow');
                        }
                    } else {
                        event.finish();
                    }
                },
            },
            xin_baizhao: {
                subSkill: { off: { charlotte: true } },
                derivation: ['xin_baizhao_off'],
                trigger: {
                    player: ['useCard'],
                },
                forced: true,
                filter(event, player) {
                    if (!event.cards.length) return false;
                    return true;
                },
                audio: 'ext:海国图志/audio:61',
                content() {
                    'step 0';
                    var list = [];
                    if (player.hasUseTarget({ name: 'sha' })) list.add('sha');
                    if (player.hasUseTarget({ name: 'jiu' })) list.add('jiu');
                    if (player.hasUseTarget({ name: 'tao' })) list.add('tao');
                    if (player.hasUseTarget({ name: 'gw_baoxueyaoshui' })) list.add('gw_baoxueyaoshui');
                    if (player.hasUseTarget({ name: 'gw_yanziyaoshui' })) list.add('gw_yanziyaoshui');
                    if (player.hasUseTarget({ name: 'huogong' })) list.add('huogong');
                    if (player.hasUseTarget({ name: 'juedou' })) list.add('juedou');
                    if (player.hasUseTarget({ name: 'dunpaigedang' })) list.add('dunpaigedang');
                    if (player.hasUseTarget({ name: 'shuiyanqijun' })) list.add('shuiyanqijun');
                    if (player.hasUseTarget({ name: 'guohe' })) list.add('guohe');
                    if (player.hasUseTarget({ name: 'zhibi' })) list.add('zhibi');
                    if (player.hasUseTarget({ name: 'shandianjian' })) list.add('shandianjian');
                    if (player.hasUseTarget({ name: 'qingtuan' })) list.add('qingtuan');
                    if (player.hasUseTarget({ name: 'chunbing' })) list.add('chunbing');
                    if (player.hasUseTarget({ name: 'mapodoufu' })) list.add('mapodoufu');
                    if (player.hasUseTarget({ name: 'mianlijinzhen' })) list.add('mianlijinzhen');
                    if (player.hasUseTarget({ name: 'fudichouxin' })) list.add('fudichouxin');
                    if (player.hasUseTarget({ name: 'chenghuodajie' })) list.add('chenghuodajie');
                    if (player.hasUseTarget({ name: 'linghunzhihuo' })) list.add('linghunzhihuo');
                    if (player.hasUseTarget({ name: 'gw_zumoshoukao' })) list.add('gw_zumoshoukao');
                    if (player.hasUseTarget({ name: 'gw_aozuzhilei' })) list.add('gw_aozuzhilei');
                    if (player.hasUseTarget({ name: 'yunvyuanshen' })) list.add('yunvyuanshen');
                    if (player.hasUseTarget({ name: 'qizhengxiangsheng' })) list.add('qizhengxiangsheng');
                    if (player.hasUseTarget({ name: 'tiaojiyanmei' })) list.add('tiaojiyanmei');
                    if (player.hasUseTarget({ name: 'shengdong' })) list.add('shengdong');
                    if (player.hasUseTarget({ name: 'gw_wenyi' })) list.add('gw_wenyi');
                    if (player.hasUseTarget({ name: 'tiesuo' })) list.add('tiesuo');
                    if (player.hasUseTarget({ name: 'shoulijian' })) list.add('shoulijian');
                    if (player.hasUseTarget({ name: 'shatang' })) list.add('shatang');
                    if (player.hasUseTarget({ name: 'yougeng' })) list.add('yougeng');
                    if (player.hasUseTarget({ name: 'jiedao' })) list.add('jiedao');
                    if (player.hasUseTarget({ name: 'wangmeizhike' })) list.add('wangmeizhike');
                    if (player.hasUseTarget({ name: 'feibiao' })) list.add('feibiao');
                    if (player.hasUseTarget({ name: 'bingpotong' })) list.add('bingpotong');
                    if (player.hasUseTarget({ name: 'qiankunbiao' })) list.add('qiankunbiao');
                    if (player.hasUseTarget({ name: 'lebu' })) list.add('lebu');
                    if (player.hasUseTarget({ name: 'zhangba' })) list.add('zhangba');
                    if (player.hasUseTarget({ name: 'bingliang' })) list.add('bingliang');
                    if (player.hasUseTarget({ name: 'shandian' })) list.add('shandian');
                    if (player.hasUseTarget({ name: 'chitu' })) list.add('chitu');
                    if (player.hasUseTarget({ name: 'dilu' })) list.add('dilu');
                    if (player.hasUseTarget({ name: 'qinggang' })) list.add('qinggang');
                    if (player.hasUseTarget({ name: 'bagua' })) list.add('bagua');
                    if (player.hasUseTarget({ name: 'huxinjing' })) list.add('huxinjing');
                    if (player.hasUseTarget({ name: 'renwang' })) list.add('renwang');
                    if (player.hasUseTarget({ name: 'zhuge' })) list.add('zhuge');
                    if (player.hasUseTarget({ name: 'fangtian' })) list.add('fangtian');
                    if (player.hasUseTarget({ name: 'qilin' })) list.add('qilin');
                    if (player.hasUseTarget({ name: 'baiyin' })) list.add('baiyin');
                    if (player.hasUseTarget({ name: 'cixiong' })) list.add('cixiong');
                    if (player.hasUseTarget({ name: 'hanbing' })) list.add('hanbing');
                    if (player.hasUseTarget({ name: 'huoshan' })) list.add('huoshan');
                    if (player.hasUseTarget({ name: 'jueying' })) list.add('jueying');
                    if (player.hasUseTarget({ name: 'duanjian' })) list.add('duanjian');
                    if (player.hasUseTarget({ name: 'muniu' })) list.add('muniu');
                    if (player.hasUseTarget({ name: 'zixin' })) list.add('zixin');
                    if (player.hasUseTarget({ name: 'zhuahuang' })) list.add('zhuahuang');
                    if (player.hasUseTarget({ name: 'dawan' })) list.add('dawan');
                    if (player.hasUseTarget({ name: 'tianjitu' })) list.add('tianjitu');
                    if (player.hasUseTarget({ name: 'chilongya' })) list.add('chilongya');
                    if (player.hasUseTarget({ name: 'hongshui' })) list.add('hongshui');
                    if (player.hasUseTarget({ name: 'guiyoujie' })) list.add('guiyoujie');
                    if (player.hasUseTarget({ name: 'yanxiao_card' })) list.add('yanxiao_card');
                    if (player.hasUseTarget({ name: 'zhuque' })) list.add('zhuque');
                    if (player.hasUseTarget({ name: 'nvzhuang' })) list.add('nvzhuang');
                    if (player.hasUseTarget({ name: 'zhanxiang' })) list.add('zhanxiang');
                    if (player.hasUseTarget({ name: 'chilongya' })) list.add('chilongya');
                    if (player.hasUseTarget({ name: 'wutiesuolian' })) list.add('wutiesuolian');
                    if (player.hasUseTarget({ name: 'wuxinghelingshan' })) list.add('wuxinghelingshan');
                    if (player.hasUseTarget({ name: 'yufulu' })) list.add('yufulu');
                    if (player.hasUseTarget({ name: 'tongque' })) list.add('tongque');
                    if (player.hasUseTarget({ name: 'kamome_suitcase' })) list.add('kamome_suitcase');
                    if (player.hasUseTarget({ name: 'miki_binoculars' })) list.add('miki_binoculars');
                    if (player.hasUseTarget({ name: 'shentoumianju' })) list.add('shentoumianju');
                    if (player.hasUseTarget({ name: 'zhuangshu_basic' })) list.add('zhuangshu_basic');
                    if (player.hasUseTarget({ name: 'zhuangshu_trick' })) list.add('zhuangshu_trick');
                    if (player.hasUseTarget({ name: 'zhuangshu_equip' })) list.add('zhuangshu_equip');
                    if (player.hasUseTarget({ name: 'pyzhuren_shandian' })) list.add('pyzhuren_shandian');
                    if (player.hasUseTarget({ name: 'pyzhuren_club' })) list.add('pyzhuren_club');
                    if (player.hasUseTarget({ name: 'pyzhuren_diamond' })) list.add('pyzhuren_diamond');
                    if (player.hasUseTarget({ name: 'pyzhuren_heart' })) list.add('pyzhuren_heart');
                    if (player.hasUseTarget({ name: 'pyzhuren_spade' })) list.add('pyzhuren_spade');
                    if (player.hasUseTarget({ name: 'rewrite_bagua' })) list.add('rewrite_bagua');
                    if (player.hasUseTarget({ name: 'rewrite_renwang' })) list.add('rewrite_renwang');
                    if (player.hasUseTarget({ name: 'rewrite_tengjia' })) list.add('rewrite_tengjia');
                    if (player.hasUseTarget({ name: 'rewrite_lanyinjia' })) list.add('rewrite_lanyinjia');
                    if (player.hasUseTarget({ name: 'rewrite_baiyin' })) list.add('rewrite_baiyin');
                    game.broadcastAll(
                        function (player, list) {
                            if (list.length) {
                                player.chooseVCardButton('是否使用其中的一张牌？', list.randomGets(3), prompt).set('ai', function (button) {
                                    var card = {
                                        name: button.link[2],
                                    },
                                        player = _status.event.player;
                                    return _status.event.player.getUseValue(card) && get.type(card) != 'equip' && get.type(card) != 'delay';
                                });
                            } else {
                                event.finish();
                            }
                        },
                        player,
                        list
                    );
                    ('step 1');
                    if (result.links?.length) {
                        player.chooseUseTarget(true, result.links[0][2], false).logSkill == 'xin_baizhao';
                    }
                    ('step 2');
                    event.finish();
                },
            },
            old_baizhao: {
                forced: true,
                trigger: {
                    player: ['useCard', 'respond'],
                },
                forced: true,
                filter(event, player) {
                    if (!event.cards.length) return false;
                    return true;
                },
                audio: 'xin_baizhao',
                content() {
                    'step 0';
                    var list = [];
                    event.num = 0;
                    for (var i in lib.card) {
                        {
                            var nameStr = lib.translate[i];
                            if (lib.card[i].type != 'equip' && lib.card[i].type != 'delay' && nameStr && nameStr.length >= 0 && player.hasUseTarget(i)) {
                                list.add(i);
                            }
                        }
                    }
                    if (list.length) {
                        player.chooseVCardButton('是否使用其中的一张牌？', list.randomGet(3), prompt).set('ai', function (button) {
                            var card = {
                                name: button.link[2],
                            },
                                player = _status.event.player;
                            return _status.event.player.getUseValue(card);
                        });
                    } else {
                        event.finish();
                    }
                    ('step 1');
                    if (result.links?.length) {
                        player.chooseUseTarget(true, result.links[0][2], false);
                    }
                },
            },
            haitu_yushen: {
                subSkill: { help: { charlotte: true } },
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                juehaitugji: true,
                subSkill: {
                    help: {
                        trigger: {
                            target: 'useCardToTargeted',
                        },
                        forced: true,
                        charlotte: true,
                        filter(event, player) {
                            if (!player.storage.haitu_yushen || !player.storage.haitu_yushen1.length) return false;
                            if (get.color(event.card) != 'black') return false;
                            for (var i of player.storage.haitu_yushen1) {
                                if (i.countCards('he') > 0) return true;
                            }
                            return false;
                        },
                        content() {
                            'step 0';
                            if (!event.targets) event.targets = player.storage.haitu_yushen1.slice(0).sortBySeat();
                            event.target = event.targets.shift();
                            event.target
                                .chooseCard('he', '寓身:是否将一张手牌交给' + get.translation(player) + '并摸一张牌？')
                                .set('ai', function (card) {
                                    var player = _status.event.player,
                                        target = _status.event.getTrigger().player;
                                    if (!_status.event.goon) {
                                        if (get.value(card, player) < 0 || get.value(card, target) < 0) return 1;
                                        return 0;
                                    }
                                    var cardx = _status.event.getTrigger().card;
                                    if (card.name == 'shan' && get.tag(cardx, 'respondShan') && target.countCards('h', 'shan') < player.countCards('h', 'shan')) return 2;
                                    if (card.name == 'sha' && (cardx.name == 'juedou' || (get.tag(card, 'respondSha') && target.countCards('h', 'sha') < player.countCards('h', 'sha')))) return 2;
                                    if (get.value(card, target) > get.value(card, player) || target.getUseValue(card) > player.getUseValue(card)) return 1;
                                    if (player.hasSkillTag('noh')) return 0.5 / Math.max(1, get.value(card, player));
                                    return 0;
                                })
                                .set('goon', get.attitude(event.target, player) > 0);
                            ('step 1');
                            if (result.bool) {
                                target.give(result.cards, player);
                                target.draw();
                            }
                            if (targets.length) event.goto(0);
                        },
                        charlotte: true,
                    },
                },
                filter(event, player) {
                    return !player.storage.haitu_yushen;
                },
                group: ['haitu_yushen_help'],
                content() {
                    'step 0';
                    player.awakenSkill(event.name);
                    player.storage[event.name] = true;
                    player
                        .chooseTarget('请选择【寓身】的目标', lib.translate.haitu_yushen_info, true, function (card, player, target) {
                            return target != player && (!player.storage.haitu_yushen1 || !player.storage.haitu_yushen1.includes(target));
                        })
                        .set('ai', function (target) {
                            var att = get.attitude(_status.event.player, target);
                            if (att > 0) return att + 1;
                            if (att == 0) return Math.random();
                            return att;
                        }).animate = false;
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        if (!player.storage.haitu_yushen1) player.storage.haitu_yushen1 = [];
                        target.storage.haitu_yushen2 = [];
                        player.storage.haitu_yushen1.push(target);
                        target.storage.haitu_yushen2.push(player);
                        var list = target.getStockSkills(true, true).filter(function (skill) {
                            var info = get.info(skill);
                            return info && !info.juehaitugji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
                        });
                        if (list.length == 1) event._result = { control: list[0] };
                        else
                            target
                                .chooseControl(list)
                                .set('prompt', '选择令' + get.translation(player) + '获得一个技能')
                                .set('forceDie', true)
                                .set('ai', function () {
                                    return list.randomGet();
                                });
                    }
                },
            },
            haitu_rongrong: {
                enable: 'phaseUse',
                filter(event, player) {
                    var he = player.getCards('he');
                    var num = 0;
                    for (var i = 0; i < he.length; i++) {
                        var info = lib.card[he[i].name];
                        {
                            num++;
                            if (num >= 2) return true;
                        }
                    }
                },
                filterCard(card) {
                    if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return false;
                    var info = get.info(card);
                    return info.type == 'equip';
                },
                selectCard: 2,
                position: 'h',
                check(card) {
                    return get.value(card);
                },
                content() {
                    var name = cards[0].name + '_' + cards[1].name;
                    var info1 = get.info(cards[0]),
                        info2 = get.info(cards[1]);
                    if (!lib.card[name]) {
                        var info = {
                            enable: true,
                            type: 'equip',
                            subtype: get.subtype(cards[0]),
                            cardimage: info1.cardimage || cards[0].name,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            selectTarget: -1,
                            modTarget: true,
                            content: lib.element.content.equipCard,
                            legend: true,
                            source: [cards[0].name, cards[1].name],
                            onEquip: [],
                            onLose: [],
                            skills: [],
                            distance: {},
                            ai: {
                                order: 8.9,
                                equipValue: 10,
                                useful: 2.5,
                                value: 10,
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                        };
                        for (var i in info1.distance) {
                            info.distance[i] = info1.distance[i];
                        }
                        for (var i in info2.distance) {
                            if (typeof info.distance[i] == 'number') {
                                info.distance[i] += info2.distance[i];
                            } else {
                                info.distance[i] = info2.distance[i];
                            }
                        }
                        if (info1.skills) {
                            info.skills = info.skills.concat(info1.skills);
                        }
                        if (info2.skills) {
                            info.skills = info.skills.concat(info2.skills);
                        }
                        if (info1.onEquip) {
                            if (Array.isArray(info1.onEquip)) {
                                info.onEquip = info.onEquip.concat(info1.onEquip);
                            } else {
                                info.onEquip.push(info1.onEquip);
                            }
                        }
                        if (info2.onEquip) {
                            if (Array.isArray(info2.onEquip)) {
                                info.onEquip = info.onEquip.concat(info2.onEquip);
                            } else {
                                info.onEquip.push(info2.onEquip);
                            }
                        }
                        if (info1.onLose) {
                            if (Array.isArray(info1.onLose)) {
                                info.onLose = info.onLose.concat(info1.onLose);
                            } else {
                                info.onLose.push(info1.onLose);
                            }
                        }
                        if (info2.onLose) {
                            if (Array.isArray(info2.onLose)) {
                                info.onLose = info.onLose.concat(info2.onLose);
                            } else {
                                info.onLose.push(info2.onLose);
                            }
                        }
                        if (info.onEquip.length == 0) delete info.onEquip;
                        if (info.onLose.length == 0) delete info.onLose;
                        lib.card[name] = info;
                        lib.translate[name] = get.translation(cards[0].name, 'skill') + get.translation(cards[1].name, 'skill');
                        var str = lib.translate[cards[0].name + '_info'];
                        if (str[str.length - 1] == '.' || str[str.length - 1] == '.') {
                            str = str.slice(0, str.length - 1);
                        }
                        lib.translate[name + '_info'] = str + ';' + lib.translate[cards[1].name + '_info'];
                        try {
                            game.addVideo('newcard', null, {
                                name: name,
                                translate: lib.translate[name],
                                info: lib.translate[name + '_info'],
                                card: cards[0].name,
                                legend: true,
                            });
                        } catch (e) { }
                    }
                    player.gain(game.createCard({ name: name, suit: cards[0].suit, number: cards[0].number }), 'gain2');
                },
            },
            haitu_tiewan: {
                trigger: {
                    global: 'gainAfter',
                    player: 'loseAsyncAfter',
                },
                group: ['haitu_tiewan_hit', 'haitu_tiewan_damage'],
                forced: true,
                popup: false,
                filter(event, player) {
                    if (event.name == 'loseAsync') {
                        if (event.type != 'gain') return false;
                        var hs = current.getCards('h'),
                            cards = event.getl(player).cards2;
                        return game.hasPlayer(function (current) {
                            if (current == player) return false;
                            var cardsx = event.getg(current);
                            for (var i of cardsx) {
                                if (cards.includes(i) && hs.includes(card) && cards.includes(card)) return true;
                            }
                            return false;
                        });
                    }
                    if (event.player != player) {
                        var hs = event.player.getCards('h');
                        var evt = event.getl(player);
                        return (
                            evt &&
                            evt.cards2 &&
                            evt.cards2.filter(function (card) {
                                return hs.includes(card);
                            }).length
                        );
                    }
                    return false;
                },
                content() {
                    var cards = trigger.getl(player).cards2;
                    game.countPlayer(function (current) {
                        if (current == player) return;
                        var hs = current.getCards('h'),
                            cardsx = trigger.getg(current).filter(function (card) {
                                return hs.includes(card) && cards.includes(card);
                            });
                        if (cardsx.length) {
                            current.addGaintag(cards, 'haitu_tiewan');
                        }
                    });
                },
                subSkill: {
                    hit: {
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter(event, player) {
                            return (
                                event.player.hasCard(function (card) {
                                    return card.hasGaintag('haitu_tiewan');
                                }, 'h') && event.player != player
                            );
                        },
                        check(event, player) {
                            return get.attitude(player, event.player) < 0;
                        },
                        content() {
                            var cards = trigger.player.getCards('h', (card) => card.hasGaintag('haitu_tiewan'));
                            player.gain(trigger.player, cards, 'give', trigger.player);
                            trigger.num++;
                        },
                    },
                    damage: {
                        trigger: { player: 'damageBegin1' },
                        filter(event, player) {
                            return (
                                event.source &&
                                event.source.hasCard(function (card) {
                                    //QQQ
                                    return card.hasGaintag('haitu_tiewan');
                                }, 'h') &&
                                event.source != player
                            );
                        },
                        check(event, player) {
                            return true;
                        },
                        content() {
                            var cards = trigger.source.getCards('h', (card) => card.hasGaintag('haitu_tiewan'));
                            if (cards.length) trigger.source.discard(cards);
                            trigger.num--;
                        },
                    },
                },
            },
            haitu_weishan: {
                enable: 'phaseUse',
                usable: 1,
                selectTarget: [1, Infinity],
                filterTarget(card, player, target) {
                    return true;
                },
                multitarget: true,
                filterCard() {
                    return false;
                },
                selectCard: -1,
                content() {
                    'step 0';
                    event.list = [];
                    event.list.push(targets);
                    event.num = targets.length;
                    player.draw(event.num);
                    ('step 1');
                    var target = targets.shift();
                    event.target = target;
                    var next = player.chooseCard('he', true, '交给' + get.translation(target) + '一张牌');
                    ('step 2');
                    if (result.bool && player.countCards('he')) {
                        //QQQ
                        player.give(result.cards, target);
                    }
                    ('step 3');
                    if (targets.length && player.countCards('he') > 0) event.goto(1);
                },
                ai: {
                    order: 14,
                    threaten: 1.6,
                    expose: 0.5,
                    result: {
                        player(player, target) {
                            {
                                if (target) return 1;
                                return 0;
                            }
                        },
                    },
                },
            },
            haitu_cefeng: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                global: 'haitu_cefeng_remove',
                subSkill: {
                    remove: {
                        charlotte: true,
                        supercharlotte: true,
                        forced: true,
                        silent: true,
                        trigger: {
                            global: ['phaseZhunbeiEnd', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd', 'phaseJieshuEnd'],
                        },
                        content() {
                            delete player.storage.haitu_cefeng;
                            delete player.storage.haitu_cefeng_up;
                            delete player.storage.haitu_cefeng_down;
                        },
                    },
                    legal: {
                        charlotte: true,
                        filter(event, player) {
                            if (event.name == 'chooseUseTarget') {
                                if (event.targets.length == game.players.length && !event.filterTarget) return true;
                                return false;
                            }
                            return event.filterTarget && event.filterTarget == lib.filter.filterTarget;
                        },
                        charlotte: true,
                        firstDo: true,
                        popup: false,
                        forced: true,
                        trigger: {
                            player: ['chooseToUseBefore', 'chooseUseTargetBefore'],
                        },
                        ai: {
                            jiuOther: true,
                        },
                        content() {
                            if (event.name == 'chooseUseTarget') {
                                trigger.set('filterTarget', function (card, player, target) {
                                    if (!_status.event.targets.includes(target)) return false;
                                    if (!card) return false;
                                    if (_status.event.nodistance && lib.filter.targetEnabledx(card, player, target)) return true;
                                    if (lib.filter.filterTarget(card, player, target)) return true;
                                    if (game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player) == false) return false;
                                    var mod = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
                                    if (mod === false) return false;
                                    if (mod === true) return true;
                                    var filter = get.info(card).modTarget;
                                    if (typeof filter == 'boolean') return filter;
                                    if (typeof filter == 'function') return filter(card, player, target);
                                    return false;
                                });
                            } else {
                                trigger.set('filterTarget', function (card, player, target) {
                                    if (!card) return false;
                                    if (lib.filter.filterTarget(card, player, target)) return true;
                                    if (game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player) == false) return true;
                                    var mod = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
                                    if (mod === false) return true;
                                    if (mod === true) return true;
                                    var filter = get.info(card).modTarget;
                                    if (typeof filter == 'boolean') return filter;
                                    if (typeof filter == 'function') return filter(card, player, target);
                                    return true;
                                });
                            }
                        },
                    },
                    mark: {
                        charlotte: true,
                        mod: {
                            playerEnabled(card, player, target) {
                                var a;
                                for (var o of game.filterPlayer()) {
                                    if (o == player.storage.haitu_cefeng) {
                                        a = o;
                                    }
                                }
                                if (a != target) return false;
                            },
                        },
                        trigger: {
                            player: 'useCardToPlayer',
                        },
                        content() {
                            'step 0';
                            'step 1';
                            if (player.storage.haitu_cefeng_up == true || player.storage.haitu_cefeng_down == true) {
                                event.goto(4);
                            } else {
                                var list = [];
                                list.push('上家');
                                list.push('下家');
                                player.chooseControl(list).set('prompt', '请选择挖洞向' + get.translation(trigger.target) + '的');
                            }
                            ('step 2');
                            if (result.control == '上家') {
                                player.storage.haitu_cefeng_up = true;
                                player.storage.haitu_cefeng = trigger.target.previous;
                            } else {
                                player.storage.haitu_cefeng_down = true;
                                player.storage.haitu_cefeng = trigger.target.next;
                            }
                            ('step 3');
                            event.finish();
                            ('step 4');
                            if (player.storage.haitu_cefeng_up == true) {
                                player.storage.haitu_cefeng = trigger.target.previous;
                            } else {
                                player.storage.haitu_cefeng = trigger.target.next;
                            }
                        },
                        forced: true,
                        silent: true,
                        charlotte: true,
                    },
                },
                forced: true,
                silent: true,
                forced: true,
                mark: true,
                marktext: '钻',
                intro: {
                    name2: '钻',
                    content(num, player, storage) {
                        var str = '本阶段挖洞位置:';
                        if (player.storage.haitu_cefeng) {
                            str += '' + get.translation(player.storage.haitu_cefeng) + '';
                        } else {
                            str += '无';
                        }
                        return str;
                    },
                },
                content() {
                    'step 0';
                    player.chooseTarget('逃窜:选择一名角色作为挖洞的起始点', false);
                    ('step 1');
                    if (result.bool) {
                        player.draw();
                        player.storage.haitu_cefeng = result.targets[0];
                        player.addTempSkill('haitu_xiaoqiao', ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseUseEnd', 'phaseDiscardBefore', 'phaseJieshuBefore', 'phaseBefore']);
                        player.addTempSkill('haitu_cefeng_mark', ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseUseEnd', 'phaseDiscardBefore', 'phaseJieshuBefore', 'phaseBefore']);
                    } else {
                        event.finish();
                    }
                },
            },
            haitu_wantong: {
                trigger: {
                    target: 'useCardToBegin',
                },
                forced: true,
                filter(event, player) {
                    if (event.player == player) return false;
                    if (get.color(event.card) != 'black') return false;
                    return true;
                },
                forced: true,
                content() {
                    player.chooseToUse({
                        prompt: '是否使用一张牌？',
                        filterCard(card, player) {
                            return lib.filter.filterCard.apply(this, arguments);
                        },
                    });
                },
            },
            haitu_huimeng: {
                global: 'haitu_huimeng_use',
                subSkill: {
                    use: {
                        charlotte: true,
                        enable: 'phaseUse',
                        usable: 1,
                        ai: {
                            order: 20,
                            expose: 1,
                            result: {
                                player(player, target) {
                                    var atti = get.attitude(player, target);
                                    if (atti > 0) {
                                        return 7;
                                    } else {
                                        return 1;
                                    }
                                },
                                target: 2,
                            },
                        },
                        filter(event, player) {
                            if (
                                !game.hasPlayer(function (current) {
                                    return current.hasSkill('haitu_huimeng');
                                })
                            ) {
                                return false;
                            }
                            return true;
                        },
                        filterTarget(card, player, target) {
                            return target.hasSkill('haitu_huimeng');
                        },
                        filterCard() {
                            return false;
                        },
                        selectCard: -1,
                        content() {
                            'step 0';
                            var list = [],
                                num = 0;
                            for (var i in lib.card) {
                                if (lib.card[i].type == 'trick') {
                                    list.add(i);
                                    num++;
                                }
                                if (lib.card[i].type == 'delay') {
                                    list.add(i);
                                    num++;
                                }
                                if (lib.card[i].type == 'basic') {
                                    list.add(i);
                                    num++;
                                }
                                if (lib.card[i].type == 'spell') {
                                    list.add(i);
                                    num++;
                                }
                                if (lib.card[i].type == 'equip') {
                                    list.add(i);
                                    num++;
                                }
                                if (lib.card[i].type == 'food') {
                                    list.add(i);
                                    num++;
                                }
                                if (lib.card[i].type == 'hsshenqi') {
                                    list.add(i);
                                    num++;
                                }
                                if (lib.card[i].type == 'land') {
                                    list.add(i);
                                    num++;
                                }
                                if (lib.card[i].type == 'jiguan') {
                                    list.add(i);
                                    num++;
                                }
                                if (lib.card[i].type == 'hslingjian') {
                                    list.add(i);
                                    num++;
                                }
                            }
                            player.chooseButton(['请选择一张要获得的牌', [list, 'vcard']], true).set('ai', function (button) {
                                return list.randomGet();
                            });
                            ('step 1');
                            if (result.links?.length) {
                                var name = result.links[0][2];
                                event.cardname = name;
                                var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                                player.chooseControl(list).set('ai', function () {
                                    return list.randomGet();
                                });
                            } else {
                                event.finish();
                            }
                            ('step 2');
                            if (result.bool == true || result.control) {
                                event.number = result.control;
                                var list = ['diamond', 'spade', 'heart', 'club', 'none'];
                                player.chooseControl(list).set('ai', function () {
                                    return list.randomGet();
                                });
                            }
                            ('step 3');
                            if (result.bool == true || result.control) {
                                event.suit = result.control;
                                var list = lib.linked.slice(0);
                                player.chooseControl(list).set('prompt', true, get.prompt('haitu_huimeng')).set('请选择生成卡牌的属性');
                            }
                            ('step 4');
                            if (result.bool == true || result.control) {
                                event.nature = result.control;
                                var fakecard = game.createCard(event.cardname, event.suit, event.number, event.nature);
                                var fakecard1 = game.createCard(event.cardname, event.suit, event.number, event.nature);
                                player.gain(fakecard, 'gain1', 'log');
                                target.gain(fakecard1, 'gain1', 'log');
                            }
                            ('step 5');
                            if (target.countCards('he') > 0) {
                                target.chooseCard('he', false, '请重铸一张牌');
                            } else event.finish();
                            ('step 6');
                            if (result.bool) {
                                target.recast(result.cards);
                            }
                        },
                    },
                },
            },
            haitu_tianxin: {
                enable: 'phaseUse',
                usable: 1,
                discard: false,
                lose: false,
                delay: false,
                position: 'h',
                filter(event, player) {
                    if (!player.countCards('h', { suit: 'heart' })) return false;
                    return true;
                },
                filterCard(card) {
                    return card.suit == 'heart';
                },
                check(card) {
                    return 7 - get.value(card);
                },
                content() {
                    'step 0';
                    player.lose(cards[0], ui.special);
                    player.$throw(cards[0], 1000, 'nobroadcast');
                    cards[0].fix();
                    ui.cardPile.insertBefore(cards[0], ui.cardPile.firstChild);
                    game.log(player, '将1张牌置于牌堆顶');
                    ('step 1');
                    player.moveCard();
                    player.moveCard();
                },
                ai: {
                    order: 7,
                    result: {
                        player(player) {
                            if (player.canMoveCard()) {
                                return 1;
                            }
                        },
                    },
                },
            },
            haitu_chongsheng: {
                enable: 'chooseToUse',
                mark: true,
                ai: {
                    save: true,
                    result: {
                        player: 10,
                    },
                    threaten(player, target) {
                        if (target.storage.haitu_chongsheng > 0) return 0.6;
                    },
                },
                intro: {
                    content: 'time',
                },
                filter(event, player) {
                    if (event.type != 'dying') return false;
                    if (player != event.dying) return false;
                    if (player.storage.haitu_chongsheng <= 0) return false;
                    return true;
                },
                content() {
                    'step 0';
                    player.discard(player.getCards('hej'));
                    player.hp = 2;
                    player.storage.haitu_chongsheng--;
                    if (player.storage.haitu_chongsheng <= 0) {
                        player.unmarkSkill('haitu_chongsheng');
                    }
                    ('step 1');
                    player.drawTo(2);
                    if (player.isLinked()) player.link();
                    ('step 2');
                    if (player.isTurnedOver()) player.turnOver();
                    ('step 3');
                    var list = [];
                    if (!player.hasSkill('oldyulu')) {
                        list.push('oldyulu');
                    }
                    if (!player.hasSkill('enze')) {
                        list.push('enze');
                    }
                    if (!player.hasSkill('huanjue')) {
                        list.push('huanjue');
                    }
                    if (list.length) {
                        player.chooseControl(list).set('prompt', '选择获得一项技能');
                    }
                    ('step 4');
                    if (result.control) {
                        player.addSkill(result.control);
                        player.popup(result.control);
                    }
                },
                derivation: ['enze', 'oldyulu', 'huanjue'],
                init(player) {
                    player.storage.haitu_chongsheng = 2;
                },
            },
            haitu_jihuo: {
                trigger: {
                    player: 'phaseAfter',
                },
                mark: true,
                marktext: '激',
                intro: {
                    name2: '激',
                    content(num, player, storage) {
                        var stat = player.countMark('haitu_jihuo');
                        var str = '<br><li>本轮已经发动过';
                        str += stat;
                        str += '次';
                        return str;
                    },
                },
                group: ['haitu_jihuo_remove'],
                init(player) {
                    game.addGlobalSkill('haitu_jihuo_remove');
                },
                subSkill: {
                    remove: {
                        charlotte: true,
                        forced: true,
                        silent: true,
                        trigger: { global: 'roundStart' },
                        filter(event, player) {
                            return player.countMark('haitu_jihuo') > 0;
                        },
                        content() {
                            player.removeMark('haitu_jihuo', player.countMark('haitu_jihuo'));
                        },
                    },
                },
                check(event, player) {
                    return player.countMark('haitu_jihuo') <= 0;
                },
                _priority: -50,
                filter(event, player) {
                    return player.countCards('he') > 0;
                },
                content() {
                    'step 0';
                    var next = player.chooseToDiscard('he', true, '请弃置一张牌');
                    next.ai = get.unuseful2;
                    ('step 1');
                    if (result.bool) {
                        player.phase('nodelay');
                        if (player.countMark('haitu_jihuo') > 0) {
                            player.loseHp(2 * player.countMark('haitu_jihuo'));
                        }
                        player.addMark('haitu_jihuo', 1);
                    }
                },
            },
            haitu_shanchou: {
                subSkill: { off: { charlotte: true } },
                trigger: { player: 'loseAfter' },
                forced: true,
                filter(event, player) {
                    if (event.cards.length != 1) return false;
                    if (player.hasSkill('haitu_shanchou_off')) return false;
                    if (event.parent.name == 'useCard') return false;
                    return true;
                },
                content() {
                    'step 0';
                    player.addTempSkill('haitu_shanchou_off', ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore', 'phaseJieshuBefore', 'phaseBefore']);
                    var card = trigger.cards[0],
                        cards = [],
                        func = ['type2', 'suit', 'number'];
                    for (var fn of func) {
                        var cardx = get.cardPile2((cardxx) => {
                            if (get[fn](card, player) == get[fn](cardxx, player) && !cards.includes(cardxx)) {
                                return true;
                            }
                        });
                        if (cardx) cards.push(cardx);
                    }
                    if (cards.length) {
                        game.cardsGotoOrdering(cards);
                    }
                    var next = player.chooseToMove('善筹:你可以分别将此次观看的牌置于牌堆顶、牌堆底、一名角色的手牌区', true);
                    next.set('list', [['牌堆顶'], ['牌堆底'], ['交给一名角色'], ['处理区', cards]]);
                    next.set('filterMove', function (from, to, moved) {
                        return true;
                    });
                    next.set('filterOk', function (moved) {
                        return moved[0].length < 2 && moved[1].length < 2 && moved[2].length < 2;
                    });
                    next.set('processAI', function (list) {
                        var cards1 = list[3][1].slice(0).sort(function (a, b) {
                            return get.value(b);
                        });
                        return [cards1.splice(3), cards1, cards1.splice(2)];
                    });
                    ('step 1');
                    var top = result.moved[0];
                    var bottom = result.moved[1];
                    event.give = result.moved[2];
                    top.reverse();
                    for (var i = 0; i < top.length; i++) {
                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                    }
                    for (var i = 0; i < bottom.length; i++) {
                        ui.cardPile.appendChild(bottom[i]);
                    }
                    game.updateRoundNumber();
                    if (event.give.length != 0) {
                        player
                            .chooseTarget('请将选择获得牌的角色', true, function (card, player, target) {
                                return true;
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                return 10 + get.attitude(player, target);
                            });
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        target.gain(event.give, player, 'gain2');
                    }
                },
            },
            haitu_yanhua: {
                trigger: {
                    player: 'useCard',
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (typeof card == 'object' && player.isPhaseUsing()) {
                            var evt = player.getLastUsed();
                            if (evt && evt.card && evt.card.suit && evt.card.number && evt.card.number <= card.number) {
                                return num + 10;
                            }
                        }
                    },
                },
                forced: true,
                filter(event, player) {
                    var evt = player.getLastUsed(1);
                    if (!evt || !evt.card) return false;
                    if (!player.isPhaseUsing()) return false;
                    var evt2 = evt.getParent('phaseUse');
                    if (!evt2 || evt2.name != 'phaseUse' || evt2.player != player) return false;
                    return typeof evt.card.number == 'number' && evt.card.number <= event.card.number;
                },
                content() {
                    player.draw();
                },
            },
            haitu_diangong: {
                clanSkill: true,
                trigger: {
                    player: 'damageEnd',
                    source: 'damageSource',
                },
                forced: true,
                usable: 1,
                content() {
                    'step 0';
                    var list = [];
                    for (var i in lib.card) {
                        if (lib.card[i].type == 'trick' || lib.card[i].type == 'food' || lib.card[i].type == 'basic' || lib.card[i].type == 'equip' || lib.card[i].type == 'hsshenqi' || lib.card[i].type == 'jiguan' || lib.card[i].type == 'spell') {
                            list.add(i);
                        }
                    }
                    if (list.length) {
                        player.chooseVCardButton(list.randomGets(3), prompt);
                    } else {
                        event.finish();
                    }
                    ('step 1');
                    if (result.links?.length) {
                        event.cards = game.createCard(result.links[0][2], 'none');
                        var targets = game.filterPlayer((current) => current == player || current.hasClan('天工田氏'));
                        if (targets.length == 1) event._result = { bool: true, targets: targets };
                        else
                            player
                                .chooseTarget('电工:将' + get.translation(event.cards) + '交给一名天工田氏角色', true, (card, player, target) => {
                                    return target == player || target.hasClan('天工田氏');
                                })
                                .set('ai', (target) => get.attitude(_status.event.player, target));
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        player.line(target, 'green');
                        target.gain(event.cards, player, 'gain2');
                    }
                },
                ai: { maixie: true },
            },
            haitu_shuxiu: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                position: 'he',
                mark: true,
                marktext: '修',
                intro: {
                    content: '可以使用#张牌',
                },
                content() {
                    'step 0';
                    if (player.countMark('haitu_shuxiu') <= 2) {
                        player.addMark('haitu_shuxiu', 1, false);
                    }
                    player.update();
                    event.num = player.countMark('haitu_shuxiu');
                    event.num1 = player.countMark('haitu_shuxiu');
                    if (get.color(cards[0]) == 'red') {
                        event.goto(4);
                    }
                    ('step 1');
                    event.num--;
                    var card = get.bottomCards()[0];
                    game.cardsGotoOrdering(card);
                    player.showCards(card);
                    player.chooseUseTarget(card, true, false, 'nodistance').set('filterTarget', function (card, player, target) {
                        var evt = _status.event;
                        if (_status.event.name == 'chooseTarget') evt = evt.parent;
                        return lib.filter.targetEnabledx(card, player, target);
                    });
                    ('step 2');
                    if (event.num > 0) {
                        event.goto(1);
                    }
                    ('step 3');
                    if (get.color(cards[0]) == 'black') {
                        event.goto(6);
                    }
                    ('step 4');
                    event.num1--;
                    var card = get.cards()[0];
                    game.cardsGotoOrdering(card);
                    player.showCards(card);
                    player.chooseUseTarget(card, false, false, 'nodistance').set('filterTarget', function (card, player, target) {
                        var evt = _status.event;
                        if (_status.event.name == 'chooseTarget') evt = evt.parent;
                        return lib.filter.targetEnabledx(card, player, target);
                    });
                    ('step 5');
                    if (event.num1 > 0) {
                        event.goto(3);
                    }
                    ('step 6');
                },
                ai: { order: 6, result: { player: 3 } },
            },
            haitu_xuanji: {
                enable: ['chooseToUse', 'chooseToRespond'],
                hiddenCard(player, name) {
                    if (get.type(name) != 'basic') return false;
                    return player.hasCard(function (card) {
                        return get.type(card) == 'basic';
                    }, 'hs');
                },
                filter(event, player) {
                    return !player.hasSkill('haitu_xuanji_blocker', null, null, false);
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var name of lib.inpile) {
                            if (get.type(name) != 'basic') continue;
                            if (event.filterCard({ name }, player, event)) {
                                list.push(['基本', '', name]);
                            }
                            if (name == 'sha') {
                                for (var nature of lib.inpile_nature) {
                                    if (event.filterCard({ name, nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                }
                            }
                        }
                        return ui.create.dialog('璇玑', [list, 'vcard'], 'hidden');
                    },
                    check(button) {
                        var player = _status.event.player;
                        var card = { name: button.link[2], nature: button.link[3] };
                        if (
                            _status.event.parent.type != 'phase' ||
                            game.hasPlayer(function (current) {
                                return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                            })
                        ) {
                            switch (button.link[2]) {
                                case 'tao':
                                case 'shan':
                                    return 5;
                                case 'jiu': {
                                    if (player.storage.yizan && player.countCards('hs', { type: 'basic' }) > 2) return 3;
                                }
                                case 'sha':
                                    if (button.link[3] == 'fire') return 2.95;
                                    else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
                                    else return 2.9;
                            }
                        }
                        return 0;
                    },
                    backup(links, player) {
                        return {
                            filterCard(card, player, target) {
                                return get.type(card) == 'basic';
                            },
                            selectCard() {
                                return 1;
                            },
                            check(card, player, target) {
                                if (!ui.selected.cards.length && get.type(card) == 'basic') return 6;
                                else return 6 - get.value(card);
                            },
                            viewAs: { name: links[0][2], nature: links[0][3] },
                            position: 'hes',
                            popname: true,
                            precontent() {
                                player.addTempSkill('haitu_xuanji_blocker', { global: 'roundStart' });
                            },
                        };
                    },
                    prompt(links, player) {
                        return '将一张基本牌当做' + get.translation(links[0][3]) + get.translation(links[0][2]) + '使用或打出';
                    },
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                    threaten: 1.6,
                },//QQQ
                group: 'haitu_xuanji_t',
                subSkill: {
                    t: {
                        enable: ['chooseToUse', 'chooseToRespond'],
                        hiddenCard(player, name) {
                            if (get.type(name) != 'trick') return false;
                            return player.hasCard(function (card) {
                                return get.type(card) == 'trick';
                            }, 'hs');
                        },
                        filter(event, player) {
                            return !player.hasSkill('haitu_xuanji_blocker', null, null, false);
                        },
                        chooseButton: {
                            dialog(event, player) {
                                var list = [];
                                for (var name of lib.inpile) {
                                    if (get.type(name) != 'trick') continue;
                                    if (event.filterCard({ name }, player, event)) {
                                        list.push(['锦囊', '', name]);
                                    }
                                    if (name == 'sha') {
                                        for (var nature of lib.inpile_nature) {
                                            if (event.filterCard({ name, nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                        }
                                    }
                                }
                                return ui.create.dialog('璇玑', [list, 'vcard'], 'hidden');
                            },
                            check(button) {
                                var player = _status.event.player;
                                var card = { name: button.link[2], nature: button.link[3] };
                                if (
                                    _status.event.parent.type != 'phase' ||
                                    game.hasPlayer(function (current) {
                                        return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                    })
                                ) {
                                    switch (button.link[2]) {
                                        case 'tao':
                                        case 'shan':
                                            return 5;
                                        case 'jiu': {
                                            if (player.storage.yizan && player.countCards('hs', { type: 'basic' }) > 2) return 3;
                                        }
                                        case 'sha':
                                            if (button.link[3] == 'fire') return 2.95;
                                            else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
                                            else return 2.9;
                                    }
                                }
                                return 0;
                            },
                            backup(links, player) {
                                return {
                                    filterCard(card, player, target) {
                                        return get.type2(card) == 'trick';
                                    },
                                    selectCard() {
                                        return 1;
                                    },
                                    check(card, player, target) {
                                        if (!ui.selected.cards.length && get.type(card) == 'trick') return 6;
                                        else return 6 - get.value(card);
                                    },
                                    viewAs: { name: links[0][2], nature: links[0][3] },
                                    position: 'hes',
                                    popname: true,
                                    precontent() {
                                        player.addTempSkill('haitu_xuanji_blocker', { global: 'roundStart' });
                                    },
                                };
                            },
                            prompt(links, player) {
                                return '将一张锦囊牌当做' + get.translation(links[0][3]) + get.translation(links[0][2]) + '使用或打出';
                            },
                        },
                        ai: {
                            order() {
                                var player = _status.event.player;
                                var event = _status.event;
                                if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0 && player.storage.yizan && player.countCards('hs', { type: 'basic' }) > 2) {
                                    return 3.3;
                                }
                                return 3.1;
                            },
                            skillTagFilter(player, tag, arg) {
                                if (tag == 'fireAttack') return true;
                                if (!player.storage.yizan && player.countCards('hes') < 2) return false;
                                if (
                                    !player.hasCard(function (card) {
                                        return get.type(card) == 'basic';
                                    }, 'hes')
                                ) {
                                    return false;
                                }
                            },
                            result: {
                                player: 1,
                            },
                            respondSha: true,
                            respondShan: true,
                            fireAttack: true,
                        },
                    },
                    blocker: {
                        charlotte: true,
                        mark: true,
                        intro: {
                            content(num, player, storage) {
                                var str = '本回合已发动过<璇玑>.';
                                return str;
                            },
                        },
                    },
                },
            },
            haitu_xianmeng: {
                trigger: { global: 'roundStart' },
                content() {
                    'step 0';
                    var list = [],
                        choiceList = ['♠️️手牌视为【冰杀】', '♦️️手牌视为【倾盆大雨】', '♣️️手牌视为【酒】', '♥️️手牌视为【草药】'];
                    if (player.hasSkill('haitu_xianmeng_spadeoff') && player.hasSkill('haitu_xianmeng_heartoff') && player.hasSkill('haitu_xianmeng_diamondoff') && player.hasSkill('haitu_xianmeng_cluboff')) {
                        list.push('选项一');
                        list.push('选项二');
                        list.push('选项三');
                        list.push('选项四');
                    } else {
                        if (!player.hasSkill('haitu_xianmeng_spadeoff')) list.push('选项一');
                        else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                        if (!player.hasSkill('haitu_xianmeng_diamondoff')) list.push('选项二');
                        else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                        if (!player.hasSkill('haitu_xianmeng_cluboff')) list.push('选项三');
                        else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
                        if (!player.hasSkill('haitu_xianmeng_heartoff')) list.push('选项四');
                        else choiceList[3] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
                    }
                    player
                        .chooseControl(list)
                        .set('choiceList', choiceList, true)
                        .set('ai', function () {
                            var list = _status.event.controls;
                            if (list.includes('选项四')) return '选项四';
                            if (list.includes('选项一')) return '选项一';
                            if (list.includes('选项二')) return '选项二';
                            if (list.includes('选项三')) return '选项三';
                        })
                        .set('prompt', '请选择一项效果令所有角色本轮获得', true);
                    ('step 1');
                    game.log(player, '选择了', '#y' + result.control);
                    game.broadcastAll(function (player, current) {
                        if (result.control == '选项一') {
                            player.addSkill('haitu_xianmeng_spadeoff');
                            game.countPlayer(function (current) {
                                current.addTempSkill('haitu_xianmeng_spade', 'roundStart');
                            });
                        }
                        if (result.control == '选项二') {
                            game.countPlayer(function (current) {
                                current.addTempSkill('haitu_xianmeng_diamond', 'roundStart');
                            });
                            player.addSkill('haitu_xianmeng_diamondoff');
                        }
                        if (result.control == '选项三') {
                            game.countPlayer(function (current) {
                                current.addTempSkill('haitu_xianmeng_club', 'roundStart');
                            });
                            player.addSkill('haitu_xianmeng_cluboff');
                        }
                        if (result.control == '选项四') {
                            game.countPlayer(function (current) {
                                current.addTempSkill('haitu_xianmeng_heart', 'roundStart');
                            });
                            player.addSkill('haitu_xianmeng_heartoff');
                        }
                    }, player);
                },
                forced: true,
                subSkill: {
                    spadeoff: { charlotte: true },
                    cluboff: { charlotte: true },
                    diamondoff: { charlotte: true },
                    heartoff: { charlotte: true },
                    heart: {
                        mark: true,
                        intro: {
                            content: '你的♥️️手牌视为【草药】',
                        },
                        mod: {
                            cardname(card, player, name) {
                                if (card.suit == 'heart') return 'caoyao';
                            },
                        },
                        charlotte: true,
                    },
                    diamond: {
                        mark: true,
                        intro: {
                            content: '你的♦️️手牌视为【倾盆大雨】',
                        },
                        mod: {
                            cardname(card, player, name) {
                                if (card.suit == 'diamond') return 'gw_qinpendayu';
                            },
                        },
                        charlotte: true,
                    },
                    club: {
                        mark: true,
                        intro: {
                            content: '你的♣️️手牌视为【酒】',
                        },
                        mod: {
                            cardname(card, player, name) {
                                if (card.suit == 'club') return 'jiu';
                            },
                        },
                        charlotte: true,
                    },
                    spade: {
                        mark: true,
                        intro: {
                            content: '你的♠️️手牌视为【冰杀】',
                        },
                        mod: {
                            cardname(card, player, name) {
                                if (card.suit == 'spade') return 'sha';
                            },
                            cardnature(card, player) {
                                if (card.suit == 'spade') return 'ice';
                            },
                        },
                        charlotte: true,
                    },
                },
                forced: true,
            },
            haitu_fnaf_yexun: {
                subSkill: {
                    off: {
                        charlotte: true,
                    },
                    yin: {
                        enable: 'chooseToUse',
                        viewAs: {
                            name: 'zhaomingdan',
                        },
                        usable: 1,
                        filterCard: {
                            color: 'black',
                        },
                        position: 'hs',
                        viewAsFilter(player) {
                            if (player.hasSkill('haitu_fnaf_yexun_off')) return false;
                            return player.countCards('hs', { color: 'black' }) > 0 && player.storage.haitu_fnaf_yexun == true;
                        },
                        check(card) {
                            return 5 - get.value(card);
                        },
                        precontent() {
                            player.changeZhuanhuanji('haitu_fnaf_yexun');
                            player.addTempSkill('haitu_fnaf_yexun_off');
                        },
                        ai: {
                            order: 9.5,
                            value: 6,
                            useful: 3,
                            result: {
                                target(player, target) {
                                    if (get.attitude(player, target) > 0) {
                                        var js = target.getCards('j');
                                        if (js.length) {
                                            var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                            if (jj.name == 'zhaomingdan') return 3;
                                            if (js.length == 1 && get.effect(target, jj, target, player) >= 0) {
                                                return 0;
                                            }
                                            return 3;
                                        }
                                    }
                                    var es = target.getCards('e');
                                    var nh = target.countCards('h');
                                    var noe = es.length == 0 || target.hasSkillTag('noe');
                                    var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.hp < target.maxHp;
                                    var noh = nh == 0 || target.hasSkillTag('noh');
                                    if (noh && noe) return 0;
                                    if (noh && noe2) return 0.01;
                                    if (get.attitude(player, target) <= 0) return target.countCards('he') ? -1.5 : 1.5;
                                    return 0.1;
                                },
                            },
                        },
                    },
                },
                group: ['haitu_fnaf_yexun_yin'],
                mark: true,
                zhuanhuanji: true,
                usable: 1,
                marktext: '☯',
                init(player) {
                    player.storage.haitu_fnaf_yexun = false;
                },
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.haitu_fnaf_yexun == false) {
                            return '你可以将一张红色手牌当【以逸待劳】使用.';
                        } else return '你可以一张黑色手牌当【照明弹】使用.';
                    },
                },
                enable: 'chooseToUse',
                viewAs: {
                    name: 'yiyi',
                },
                filterCard: {
                    color: 'red',
                },
                position: 'hs',
                viewAsFilter(player) {
                    if (player.hasSkill('haitu_fnaf_yexun_off')) return false;
                    return player.countCards('hs', { color: 'red' }) > 0 && player.storage.haitu_fnaf_yexun == false;
                },
                check(card) {
                    return 5 - get.value(card);
                },
                precontent() {
                    player.changeZhuanhuanji('haitu_fnaf_yexun');
                    player.addTempSkill('haitu_fnaf_yexun_off');
                },
                ai: {
                    wuxie() {
                        return 0;
                    },
                    basic: {
                        useful: 3,
                        value: 3,
                        order: 5,
                    },
                    result: {
                        target(player, target) {
                            var hs = target.getCards('h');
                            if (hs.length <= 1) {
                                if (target == player && (hs.length == 0 || hs[0].name == 'yiyi')) {
                                    return 0;
                                }
                                return 0.3;
                            }
                            return Math.sqrt(target.countCards('he'));
                        },
                    },
                    tag: {
                        loseCard: 1,
                        discard: 1,
                        norepeat: 1,
                    },
                },
            },
            haitu_yuting: {
                trigger: {
                    global: ['useCardAfter'],
                },
                audio: 'ext:海国图志/audio:2',
                forced: true,
                filter(event, player) {
                    if (event.cards.length == 0) return false;
                    if (get.type(event.card) == 'delay') return false;
                    if (get.type(event.card) == 'equip') return false;
                    for (var i of event.cards) {
                        if (get.position(i) == 'd' && player.hasUseTarget(i)) return !(event.card && event.cards.length == 1 && event.card.name == event.cards[0].name);
                    }
                },
                content() {
                    'step 0';
                    var cards = [];
                    for (var i of trigger.cards) {
                        if (player.hasUseTarget(i)) cards.push(i);
                    }
                    player.chooseButton(['是否使用其中的一张牌？', cards]).set('ai', function (button) {
                        return _status.event.player.getUseValue(button.link);
                    });
                    ('step 1');
                    if (result.links?.length) {
                        player.chooseUseTarget(true, result.links[0], false);
                    }
                },
            },
            haitu_yishi: {
                subSkill: {
                    add: {
                        charlotte: true,
                        trigger: {
                            player: 'useCardAfter',
                        },
                        silent: true,
                        forced: true,
                        content() {
                            for (var i of trigger.targets) {
                                i.addTempSkill('haitu_yishi_re', 'roundStart');
                            }
                            player.removeSkill('haitu_yishi_add');
                        },
                        popup: false,
                    },
                    re: {
                        trigger: {
                            target: 'useCardToBegin',
                        },
                        forced: true,
                        charlotte: true,
                        filter(event, player) {
                            if (get.color(event.card) != 'black') return false;
                            else return true;
                        },
                        content() {
                            'step 0';
                            var cards = player.getCards('h');
                            if (cards.length) {
                                player.recast(cards);
                            } else {
                                event.finish();
                            }
                            ('step 1');
                        },
                        mark: true,
                        intro: {
                            content: '锁定技,你成为黑色牌的目标后重铸所有手牌',
                        },
                    },
                },
                enable: ['chooseToUse', 'chooseTorespond'],
                usable: 2,
                filter(event, player) {
                    return player.countCards('he', function (card) {
                        return get.color(card) != 'red';
                    });
                },
                chooseButton: {
                    hiddenCard(player, name) {
                        if (get.type(name) == 'food') {
                            return true;
                        }
                    },
                    dialog(event, player) {
                        'step 0';
                        var list = [];
                        for (var i in lib.card) {
                            if (lib.card[i].type == 'food' && event.filterCard({ name: i }, player, event)) {
                                list.add(i);
                            }
                        }
                        ('step 1');
                        return ui.create.dialog('异食', [list, 'vcard'], 'hidden');
                    },
                    filter(button, player) {
                        return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                    },
                    check(button) {
                        if (button.link[2] == 'shan') return 3;
                        var player = _status.event.player;
                        if (button.link[2] == 'jiu') {
                            if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                            if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                        }
                        return player.getUseValue({ name: button.link[2] });
                    },
                    backup(links, player) {
                        return {
                            check(card) {
                                return 8 - get.value(card);
                            },
                            filterCard(card, player) {
                                return get.color(card) != 'red';
                            },
                            popname: true,
                            position: 'hes',
                            viewAs: { name: links[0][2] },
                            onuse(links, player) {
                                player.addTempSkill('haitu_yishi_add');
                            },
                        };
                    },
                    prompt(links, player) {
                        return '将一张非红色牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                ai: {
                    order(item, player) {
                        if (_status.event.type == 'phase') return 2;
                    },
                    result: {
                        player(player) {
                            return 2;
                        },
                    },
                },
            },
            tom_jueci: {
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current.countCards('ej');
                    });
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget('请选择一名角色场上一张牌', function (card, player, target) {
                            return target.countCards('ej') > 0;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            var att = get.attitude(player, target);
                            if (att > 0) {
                                var js = target.getCards('j');
                                if (js.length) {
                                    var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                    if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                        return 2 * att;
                                    }
                                }
                                if (target.getEquip('baiyin') && target.isDamaged() && get.recoverEffect(target, player, player) > 0) {
                                    if (target.hp == 1 && !target.hujia) return 1.6 * att;
                                    if (target.hp == 2) return 0.01 * att;
                                    return 0;
                                }
                            }
                            var es = target.getCards('e');
                            var noe = target.hasSkillTag('noe');
                            var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                            if (noe || noe2) return 0;
                            if (att <= 0 && !es.length) return 1.5 * att;
                            return -1.5 * att;
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets[0];
                        event.target.addExpose(0.1);
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (event.target) {
                        {
                            player.choosePlayerCard('ej', true, event.target);
                        }
                    }
                    ('step 3');
                    if (result.cards?.length) {
                        var card = result.cards[0];
                        var cardx = { name: 'juedou' };
                        player.chooseUseTarget(cardx, [card], true, false).viewAs = true;
                    } else event.finish();
                },
            },
            tom_buzhe: {
                group: 'tom_buzhe_yin',
                subSkill: {
                    off: { charlotte: true },
                    yangoff: { charlotte: true },
                    yin: {
                        trigger: {
                            player: 'loseBefore',
                        },
                        filter(event, player) {
                            if (player.hasSkill('tom_buzhe_off')) return false;
                            return true;
                        },
                        content() {
                            trigger.setContent(() => {
                                player.draw(); //QQQ
                                player.addTempSkill('tom_buzhe_off', 'roundStart');
                            });
                        },
                    },
                },
                trigger: { player: 'damageBegin1' },
                filter(event, player) {
                    if (player.hasSkill('tom_buzhe_yangoff')) return false;
                    return true;
                },
                content() {
                    trigger.cancel();
                    player.draw();
                    player.addTempSkill('tom_buzhe_yangoff', 'roundStart');
                },
            },
            tom_yemao: {
                trigger: { player: 'damageBefore' },
                forced: true,
                filter(event, player) {
                    return event.cards && event.cards.length; //QQQ
                },
                content() {
                    for (var i = 0; i < trigger.cards.length; i++) {
                        var Skills = get.info(trigger.cards[i], false).skills;
                        if (Skills && Skills.length) player.addSkill(Skills);
                        player.removeSkill('muniu_skill');
                        player.removeSkill('muniu_skill7');
                    }
                },
            },
            marvel_zhujia: {
                trigger: { player: 'useCardAfter' },
                forced: true,
                usable: Infinity,
                filter(event, player) {
                    if (player != _status.currentPhase) return false;
                    return player.countCards('he') > 0;
                },
                ai: {
                    halfneg: true,
                },
                global: 'marvel_zhujia_clear',
                mark: true,
                marktext: '铸',
                init(player) {
                    player.storage.marvel_zhujia = 0;
                },
                intro: {
                    name2: '铸',
                    content(num, player, storage) {
                        var stat = player.storage.marvel_zhujia;
                        var str = '本回合发动<铸甲>次数:';
                        str += stat;
                        str += '.';
                        return str;
                    },
                },
                subSkill: {
                    clear: {
                        trigger: {
                            player: 'phaseAfter',
                        },
                        forced: true,
                        silent: true,
                        content() {
                            player.storage.marvel_zhujia = 0;
                        },
                    },
                },
                content() {
                    'step 0';
                    player.storage.marvel_zhujia += 1;
                    player.chooseToDiscard('he', true).set('ai', function (cardx) {
                        var player = _status.event.player;
                        if (player.countCards('e') < 2 && get.position(cardx) == 'e') {
                            return true;
                        }
                        if (player.countCards('h') < 2 && get.position(cardx) == 'h') {
                            return true;
                        }
                    });
                    ('step 1');
                    if (result.bool && result.cards) {
                        for (var i = 0; i < result.cards.length; i++) {
                            event.num1 = 0;
                            if (5 - event.num1 <= 0) {
                                event.finish();
                            }
                            if (result.cards[i].original != 'e' && player.countCards('h') < 1) {
                                player.drawTo(5 - event.num1);
                            }
                            if (result.cards[i].original == 'e' && player.countCards('e') < 1) {
                                event.goto(3);
                            }
                        }
                    }
                    ('step 2');
                    event.finish();
                    ('step 3');
                    event.num = 0;
                    event.num0 = 5 - player.storage.marvel_zhujia;
                    ('step 4');
                    while (!player.isEmpty(event.num)) {
                        event.num++;
                        if (event.num >= 5) {
                            event.finish();
                            return;
                        }
                    }
                    var card = get.cardPile(function (card) {
                        return get.subtype(card) == 'equip' + event.num && player.canUse(card, player);
                    });
                    if (card) {
                        player.equip(card);
                    }
                    event.num++;
                    if (event.num <= 5) event.goto(4);
                },
            },
            marvel_yanfa: {
                enable: 'phaseUse',
                mark: true,
                marktext: '研',
                intro: {
                    name2: '研',
                    content(num, player, storage) {
                        var stat =
                            player.getHistory('useSkill', function (evt) {
                                return evt.skill == 'marvel_yanfa';
                            }).length + 1;
                        var str = '<br><li>下次发动技能需要弃牌:';
                        str += stat;
                        return str;
                    },
                },
                filter(event, player) {
                    var stat =
                        player.getHistory('useSkill', function (evt) {
                            return evt.skill == 'marvel_yanfa';
                        }).length + 1;
                    if (stat > player.countCards('he')) return false;
                    return true;
                },
                content() {
                    'step 0';
                    var stat = player.getHistory('useSkill', function (evt) {
                        return evt.skill == 'marvel_yanfa';
                    }).length;
                    if (stat > 0) {
                        player.chooseToDiscard(true, 'he', stat);
                    }
                    ('step 1');
                    var list0 = [];
                    for (var i in lib.card) {
                        if (lib.card[i].type == 'trick') {
                            list0.add(i);
                        }
                    }
                    if (!list0.length) {
                        event.finish();
                        return;
                    }
                    var card = list0.randomGet(1),
                        list = [];
                    list.push(card);
                    var dialog = ui.create.dialog('研发获得的锦囊', [list, 'vcard'], 'hidden');
                    player.chooseButton(dialog, true);
                    ('step 2');
                    player.gain(game.createCard(result.links[0][2]), 'draw');
                },
                ai: {
                    order: 3,
                    result: {
                        player(player) {
                            var stat =
                                player.getHistory('useSkill', function (evt) {
                                    return evt.skill == 'marvel_yanfa';
                                }).length + 1;
                            var nh = player.countCards('he');
                            if (nh - stat <= 4) {
                                return -10;
                            } else {
                                return 10;
                            }
                        },
                    },
                },
            },
            fnaf_canchuan: {
                subSkill: { blocker: {} },
                mod: {
                    aiValue(player, card, num) {
                        if (card.name != 'tao' && get.color(card) != 'red') return;
                        var cards = player.getCards('hs', function (card) {
                            return card.name == 'tao' || get.color(card) == 'red';
                        });
                        cards.sort(function (a, b) {
                            return (a.name == 'tao' ? 1 : 2) - (b.name == 'tao' ? 1 : 2);
                        });
                        var geti = function () {
                            if (cards.includes(card)) {
                                return cards.indexOf(card);
                            }
                            return cards.length;
                        };
                        return Math.max(num, [6.5, 4, 3, 2][Math.min(geti(), 2)]);
                    },
                    aiUseful() {
                        return lib.skill.kanpo.mod.aiValue.apply(this, arguments);
                    },
                },
                round: 1,
                enable: 'chooseToUse',
                viewAs: {
                    name: 'tao',
                },
                filterTarget(card, player, target) {
                    return target.hasClan('阿夫顿') && lib.card.tao.filterTarget;
                    if (event.type == 'dying') {
                        return target.hasClan('阿夫顿') && lib.card.tao.filterTarget && target == _status.event.dying;
                    }
                },
                filter(event, player) {
                    if (event.type == 'dying') {
                        return player.countCards('ej') > 0 && _status.event.dying.hasClan('阿夫顿');
                    } else {
                        return player.countCards('ej') > 0;
                    }
                },
                clanSkill: true,
                filterCard(card) {
                    return false;
                },
                selectCard: -1,
                mark: false,
                check(card) {
                    return true;
                },
                precontent() {
                    var cards = player.getCards('ej');
                    event.result.cards = cards;
                },
                ai: {
                    threaten: 1.5,
                },
            },
            fnaf_RoxyRaceWay: {
                enable: ['chooseTorespond', 'chooseToUse'],
                viewAs: {
                    name: 'wuzhong',
                },
                charlotte: true,
                PizzaPlex: true,
                group: 'fnaf_RoxyRaceWay_damage',
                subSkill: {
                    damage: {
                        forced: true,
                        trigger: {
                            player: 'damageBegin1',
                        },
                        content() {
                            trigger.num++;
                            player.addMark('fnaf_RoxyRaceWay', 1);
                        },
                        filter(event, player) {
                            if (event.cards && event.cards.length) {
                                for (var i of event.cards) {
                                    return !(event.card && event.cards.length == 1 && event.card.name == event.cards[0].name);
                                } //QQQ
                            }
                        },
                    },
                },
                viewAsFilter(player) {
                    if (!player.countCards('hes', { type: 'equip' })) return false;
                },
                filterCard(card) {
                    return get.type(card) == 'equip';
                },
                selectCard: 1,
                position: 'h',
                precontent() {
                    player.addMark('fnaf_RoxyRaceWay', 1);
                },
                prompt: '将一张装备牌当【无中生有】使用',
                check(card) {
                    return 7 - get.value(card);
                },
                ai: {
                    mapValue: 5,
                    threaten: 1.4,
                    order: 9,
                    basic: {
                        order: 7.2,
                        useful: 4.5,
                        value: 9.2,
                    },
                    result: {
                        target: 2,
                    },
                    tag: {
                        draw: 2,
                    },
                },
            },
            haitu_ol_mitu: {
                forced: true,
                mark: true,
                init(player) {
                    player.storage.haitu_ol_mitu = false;
                },
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.haitu_ol_mitu == false) {
                            return '锁定技,你的回合内,你使用牌后令你的红色手牌本回合视为随机非装备牌直至你发动本技能.若你使用的牌为非转化牌,你回复一个装备栏.  ';
                        } else {
                            return '锁定技,你的回合内,你使用牌后令你的黑色手牌本回合视为随机非装备牌直至你发动本技能.若你使用的牌为非转化牌,你回复一个装备栏.  ';
                        }
                    },
                },
                zhuanhuanji: true,
                marktext: '☯',
                group: ['haitu_ol_mitu_black', 'haitu_ol_mitu_red'],
                trigger: { player: 'useCardAfter' },
                filter(event, player) {
                    if (player != _status.currentPhase) return false;
                    return true;
                },
                subSkill: {
                    black: {
                        charlotte: true,
                        marktext: '黑',
                        mark: true,
                        intro: {
                            markcount: 'expansion',
                            marktext: '黑',
                            mark(dialog, storage, player) {
                                var cards = player.getExpansions('haitu_ol_mitu_black');
                                if (player.isUnderControl(true) && player.getExpansions('haitu_ol_mitu_black').length) {
                                    dialog.addAuto(cards);
                                } else return '在此可查看衍生牌效果';
                            },
                        },
                    },
                    red: {
                        charlotte: true,
                        marktext: '红',
                        mark: true,
                        intro: {
                            markcount: 'expansion',
                            marktext: '红',
                            mark(dialog, storage, player) {
                                var cards = player.getExpansions('haitu_ol_mitu_red');
                                if (player.isUnderControl(true) && player.getExpansions('haitu_ol_mitu_red').length) {
                                    dialog.addAuto(cards);
                                } else return '在此可查看衍生牌效果';
                            },
                        },
                    },
                    change: {
                        charlotte: true,
                        mod: {
                            cardname(card, player) {
                                if (get.color(card) == 'red' && player.storage.haitu_ol_mitu_red) {
                                    return player.storage.haitu_ol_mitu_red;
                                }
                                if (get.color(card) == 'black' && player.storage.haitu_ol_mitu_black) {
                                    return player.storage.haitu_ol_mitu_black;
                                }
                            },
                        },
                    },
                },
                content() {
                    'step 0';
                    player.addTempSkill('haitu_ol_mitu_change');
                    delete player.storage.haitu_ol_mitu_red;
                    delete player.storage.haitu_ol_mitu_black;
                    var cards1 = player.getExpansions('haitu_ol_mitu_red');
                    var cards2 = player.getExpansions('haitu_ol_mitu_black');
                    if (cards1.length) {
                        player.lose(cards1)._triggered = null;
                    }
                    if (cards2.length) {
                        player.lose(cards2)._triggered = null;
                    }
                    if (player.storage.haitu_ol_mitu == false) {
                        event.goto(2);
                    } else {
                        event.goto(1);
                    }
                    ('step 1');
                    var list = [];
                    for (var i in lib.card) {
                        if (!lib.card[i].content) continue;
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                        var name = lib.card[i];
                        if (lib.card[i].type == 'trick' || lib.card[i].type == 'food' || lib.card[i].type == 'basic' || lib.card[i].type == 'hsshenqi' || lib.card[i].type == 'jiguan' || lib.card[i].type == 'spell') {
                            list.add(i);
                        }
                    }
                    var card = list.randomGet(1);
                    var vcard1 = game.createCard(card);
                    player.addToExpansion('haitu_ol_mitu_black', vcard1).gaintag.add('haitu_ol_mitu_black');
                    player.storage.haitu_ol_mitu_black = card;
                    player.changeZhuanhuanji('haitu_ol_mitu');
                    event.goto(3);
                    ('step 2');
                    var list1 = [];
                    for (var i in lib.card) {
                        if (!lib.card[i].content) continue;
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                        var name = lib.card[i];
                        var type = get.type(name);
                        if (lib.card[i].type == 'trick' || lib.card[i].type == 'food' || lib.card[i].type == 'basic' || lib.card[i].type == 'hsshenqi' || lib.card[i].type == 'jiguan' || lib.card[i].type == 'spell') {
                            list1.add(i);
                        }
                    }
                    var card1 = list1.randomGet(1);
                    player.storage.haitu_ol_mitu_red = card1;
                    var vcard2 = game.createCard(card1);
                    player.addToExpansion('haitu_ol_mitu_red', vcard2).gaintag.add('haitu_ol_mitu_red');
                    player.changeZhuanhuanji('haitu_ol_mitu');
                    ('step 3');
                    for (var i of trigger.cards) {
                        if (trigger.card && trigger.cards.length == 1 && trigger.card.name == trigger.cards[0].name) {
                        } else {
                            event.finish();
                        }
                    }
                    ('step 4');
                    var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                    for (var i = 0; i < list.length; i++) {
                        if (!player.isDisabled(list[i])) list.splice(i--, 1);
                    }
                    if (list.length) {
                        player.chooseControl(list).set('prompt', '请选择回复一个装备栏').ai = function () {
                            return list.randomGet();
                        };
                    } else {
                        event.finish();
                    }
                    ('step 5');
                    player.enableEquip(result.control);
                },
            },
            haitu_gongshe: { group: 'haitu_muniu' },
            haitu_muniu: {
                equipSkill: true,
                init(player) {
                    if (player.storage.muniu.cards) {
                        var cards = player.storage.muniu.cards;
                        player.directgains(cards, null, 'muniu');
                    }
                    player.markSkill('muniu_skill');
                },
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                check(card) {
                    if (card.name == 'du') return 20;
                    var player = _status.event.player;
                    var nh = player.countCards('h');
                    if (!player.needsToDiscard()) {
                        if (nh < 3) return 0;
                        if (nh == 3) return 5 - get.value(card);
                        return 7 - get.value(card);
                    }
                    return 10 - get.useful(card);
                },
                discard: false,
                lose: false,
                delay: false,
                sync(muniu) {
                    if (game.online) {
                        return;
                    }
                    if (!muniu.cards) {
                        muniu.cards = [];
                    }
                    for (var i = 0; i < muniu.cards.length; i++) {
                        if (get.position(muniu.cards[i]) != 's') {
                            muniu.cards.splice(i--, 1);
                        }
                    }
                    game.broadcast(
                        function (muniu, cards) {
                            muniu.cards = cards;
                        },
                        muniu,
                        muniu.cards
                    );
                },
                filter(event, player) {
                    return player.countCards('h') > 0 && !player.getEquip('muniu');
                },
                prepare(cards, player) {
                    player.$give(1, player, false);
                },
                onremove() {
                    var munius = player.storage.muniu.cards;
                    delete player.getStat('skill').muniu_skill;
                    if (event.parent.name != 'haitu_muniu') {
                        {
                            if (muniu && muniu.cards) {
                                player.storage.muniu.cards = [];
                                lib.skill.muniu_skill.sync(muniu);
                            }
                            player.lose(munius, ui.discardPile);
                            player.$throw(munius, 1000);
                            player.popup('muniu');
                            game.log(player, '掉落了', munius);
                        }
                    }
                },
                content() {
                    'step 0';
                    player.loseToSpecial(cards, 'muniu');
                    game.log(1);
                    ('step 1');
                    for (var i = 0; i < cards.length; i++) {
                        if (cards[i].destroyed || !cards[i].hasGaintag('muniu') || get.position(cards[i]) != 's') {
                            cards[i].remove();
                            cards.splice(i--, 1);
                        }
                    }
                    if (muniu.cards == undefined) muniu.cards = [];
                    muniu.cards.push(cards[0]);
                    game.broadcast(
                        function (muniu, cards) {
                            muniu.cards = cards;
                        },
                        muniu,
                        muniu.cards
                    );
                    ('step 2');
                    var players = game.filterPlayer(function (current) {
                        if (current != player && !current.isTurnedOver() && get.attitude(player, current) >= 3 && get.attitude(current, player) >= 3) {
                            return true;
                        }
                    });
                    players.sort(lib.sort.seat);
                    var choice = players[0];
                    var next = player
                        .chooseTarget('是否令其他角色获得此技能？', function (card, player, target) {
                            return !target.isMin() && player != target;
                        })
                        .set('muniu', muniu);
                    next.set('ai', function (target) {
                        return target == _status.event.choice ? 1 : -1;
                    });
                    next.set('choice', choice);
                    ('step 3');
                    if (result.targets?.length) {
                        result.targets[0].getStat('skill').muniu_skill = player.getStat('skill').muniu_skill;
                        player.removeSkill('haitu_chishou');
                        result.targets[0].addSkill('haitu_chishou');
                        player.line(result.targets, 'green');
                    } else {
                    }
                },
                ai: {
                    order: 1,
                    expose: 0.1,
                    result: {
                        player: 1,
                    },
                },
                mod: {
                    cardEnabled2(card, player) {
                        if (!ui.selected.cards.length) return;
                        var muniu = player.storage.muniu.cards;
                        if (!muniu || !muniu.length) return;
                        for (var i of ui.selected.cards) {
                            if (i == muniu && muniu.includes(card)) return false;
                            if (muniu.includes(i) && card == muniu) return false;
                        }
                    },
                },
                mark: true,
                markimage2: 'image/card/muniu_small.png',
                intro: {
                    content(storage, player) {
                        var muniu = player.storage.muniu.cards;
                        if (!muniu || !muniu.length) return '共有〇张牌';
                        if (player.isUnderControl(true)) {
                            return get.translation(muniu);
                        } else {
                            return '共有' + get.cnNumber(muniu.length) + '张牌';
                        }
                    },
                    mark(dialog, storage, player) {
                        var muniu = player.storage.muniu.cards;
                        if (!muniu || !muniu.length) return '共有〇张牌';
                        if (player.isUnderControl(true)) {
                            dialog.addAuto(muniu);
                        } else {
                            return '共有' + get.cnNumber(muniu.length) + '张牌';
                        }
                    },
                    markcount(storage, player) {
                        if (muniu.cards) return muniu.cards.length;
                        return 0;
                    },
                },
                _priority: -25,
            },
            haitu_muniu_lose: {
                trigger: {
                    player: 'removeSkill',
                },
                firstDo: true,
                forced: true,
                silent: true,
                charlotte: true,
                filter(event, player) {
                    if (!event.ss || !event.ss.length || event.parent.name == 'haitu_muniu') return false;
                    if (!muniu.cards) return false;
                    return event.ss.filter(function (card) {
                        return muniu.cards.includes(card);
                    }).length;
                },
                content() {
                    if (player.storage.muniu.cards != []) {
                        player.storage.muniu.cards.removeArray(trigger.ss);
                        lib.skill.muniu_skill.sync(muniu);
                    }
                },
            },
            fnaf_yichong: {
                ai: {
                    order: 9,
                    result: {
                        target(player, target) {
                            return -target.countCards('h');
                        },
                    },
                },
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    'step 0';
                    target.addTempSkill('fnaf_yichong_off');
                    var list = [],
                        choiceList = ['令' + get.translation(target) + '交给你一张基本牌', '令' + get.translation(target) + '交给你非基本牌', '令' + get.translation(target) + '交给你一张锦囊牌', '令' + get.translation(target) + '交给你非锦囊牌', '令' + get.translation(target) + '交给你一张装备牌', '令' + get.translation(target) + '交给你非装备牌'];
                    if (!player.storage.fnaf_yichong_basic2) list.push('选项一');
                    else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                    if (player.storage.fnaf_yichong_basic2) list.push('选项二');
                    else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                    if (!player.storage.fnaf_yichong_trick2) list.push('选项三');
                    else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
                    if (player.storage.fnaf_yichong_trick2) list.push('选项四');
                    else choiceList[3] = '<span style="opacity:0.5">' + choiceList[3] + '</span>';
                    if (!player.storage.fnaf_yichong_equip2) list.push('选项五');
                    else choiceList[4] = '<span style="opacity:0.5">' + choiceList[4] + '</span>';
                    if (player.storage.fnaf_yichong_equip2) list.push('选项六');
                    else choiceList[5] = '<span style="opacity:0.5">' + choiceList[5] + '</span>';
                    player
                        .chooseControl(list)
                        .set('choiceList', choiceList, true)
                        .set('ai', function () {
                            var list = _status.event.controls;
                            if (list.includes('选项一')) return '选项一';
                            if (list.includes('选项二')) return '选项二';
                            if (list.includes('选项三')) return '选项三';
                            if (list.includes('选项四')) return '选项四';
                            if (list.includes('选项五')) return '选项五';
                            if (list.includes('选项六')) return '选项六';
                        })
                        .set('prompt', '请选择一项');
                    ('step 1');
                    if (result.control == '选项一') {
                        player.addTempSkill('fnaf_yichong_basic');
                        if (target.countCards('he', { type: 'basic' })) {
                            player.storage.fnaf_yichong_e1 = true;
                            target.chooseCard('交给' + get.translation(player) + '一张基本牌.', true, function (card) {
                                return get.type(card) == 'basic';
                            });
                        }
                    }
                    if (result.control == '选项二') {
                        player.addTempSkill('fnaf_yichong_basic');
                        player.storage.fnaf_yichong_e1 = true;
                        if (
                            target.countCards('he', function (card) {
                                return get.type(card) != 'basic';
                            })
                        ) {
                            player.storage.fnaf_yichong_e1 = true;
                            target
                                .chooseCard([1, Infinity], 'he', true, '交给' + get.translation(player) + '非基本牌.', true, function (card) {
                                    return get.type(card) != 'basic';
                                })
                                .set('ai', function (card) {
                                    var att = get.attitude(target, player);
                                    if (att > 0) {
                                        var count = target.countCards('h');
                                        if (target.hasJudge('lebu') && count > target.hp) {
                                            if (count - ui.selected.cards.length == target.hp) return -1;
                                            return 1;
                                        }
                                        if (ui.selected.cards.length) return -1;
                                        return 1;
                                    }
                                    return -1;
                                });
                        }
                    }
                    if (result.control == '选项三') {
                        player.addTempSkill('fnaf_yichong_trick');
                        if (
                            target.countCards('he', function (card) {
                                if (get.type2(card) == 'trick') return true;
                            })
                        ) {
                            player.storage.fnaf_yichong_e2 = true;
                            target.chooseCard('交给' + get.translation(player) + '一张锦囊牌.', true, function (card) {
                                if (get.type2(card) == 'trick') return true;
                            });
                        }
                    }
                    if (result.control == '选项四') {
                        player.addTempSkill('fnaf_yichong_trick');
                        if (
                            target.countCards('he', function (card) {
                                return get.type2(card) != 'trick';
                            })
                        ) {
                            player.storage.fnaf_yichong_e2 = true;
                            target
                                .chooseCard([1, Infinity], 'he', true, '交给' + get.translation(player) + '非锦囊牌.', true, function (card) {
                                    return get.type2(card) != 'trick';
                                })
                                .set('ai', function (card) {
                                    var att = get.attitude(target, player);
                                    if (att > 0) {
                                        var count = target.countCards('h');
                                        if (target.hasJudge('lebu') && count > target.hp) {
                                            if (count - ui.selected.cards.length == target.hp) return -1;
                                            return 1;
                                        }
                                        if (ui.selected.cards.length) return -1;
                                        return 1;
                                    }
                                    return -1;
                                });
                        }
                    }
                    if (result.control == '选项五') {
                        player.addTempSkill('fnaf_yichong_equip');
                        if (target.countCards('he', { type: 'equip' })) {
                            player.storage.fnaf_yichong_e3 = true;
                            target.chooseCard('交给' + get.translation(player) + '一张装备牌.', true, 'he', function (card) {
                                return get.type(card) == 'equip';
                            });
                        }
                    }
                    if (result.control == '选项六') {
                        player.addTempSkill('fnaf_yichong_equip');
                        if (
                            target.countCards('he', function (card) {
                                return get.type2(card) != 'equip';
                            })
                        ) {
                            player.storage.fnaf_yichong_e3 = true;
                            target
                                .chooseCard([1, Infinity], 'he', '交给' + get.translation(player) + '非装备牌.', true, function (card) {
                                    return get.type2(card) != 'equip';
                                })
                                .set('ai', function (card) {
                                    var att = get.attitude(target, player);
                                    if (att > 0) {
                                        var count = target.countCards('h');
                                        if (target.hasJudge('lebu') && count > target.hp) {
                                            if (count - ui.selected.cards.length == target.hp) return -1;
                                            return 1;
                                        }
                                        if (ui.selected.cards.length) return -1;
                                        return 1;
                                    }
                                    return -1;
                                });
                        }
                    }
                    ('step 2');
                    if (result.bool) {
                        player.gain(result.cards, target, 'bySelf', 'give').gaintag.add('fnaf_yichong');
                    } else {
                        target.link(true);
                        player.link(true);
                        event.goto(4);
                    }
                    ('step 3');
                    if (player.storage.fnaf_yichong_e1) {
                        if (!player.storage.fnaf_yichong_eb) {
                            target.addTempSkill('fnaf_yichong_sha', 'roundStart');
                        }
                        player.addTempSkill('fnaf_yichong_sha', 'roundStart');
                    }
                    if (player.storage.fnaf_yichong_e2) {
                        if (!player.storage.fnaf_yichong_et) {
                            target.recover();
                        }
                        player.recover();
                    }
                    if (player.storage.fnaf_yichong_e3) {
                        if (!player.storage.fnaf_yichong_eq) {
                            target.draw();
                        }
                        player.draw();
                    }
                    ('step 4');
                    player.storage.fnaf_yichong_e1 = false;
                    player.storage.fnaf_yichong_e2 = false;
                    player.storage.fnaf_yichong_e3 = false;
                },
                basic(card, event, player) {
                    'step 0';
                    player.storage.sb == true;
                    target.chooseCard('he', true);
                    ('step 1');
                    if (result.bool) {
                        target.showCards(result.cards);
                        player.gain(result.cards, target, 'bySelf', 'give').gaintag.add('fnaf_yichong');
                    }
                    if (!player.storage.fnaf_yichong_eb) {
                        target.addTempSkill('fnaf_yichong_sha', 'roundStart');
                    }
                    player.addTempSkill('fnaf_yichong_sha', 'roundStart');
                },
                subSkill: {
                    off: {
                        charlotte: true,
                    },
                    sha: {
                        charlotte: true,
                        charlotte: true,
                        mark: true,
                        markimage: 'image/card/charge.png',
                        intro: {
                            content(storage) {
                                return '使用【杀】的次数上限' + 1;
                            },
                        },
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                        },
                    },
                    handcard: {
                        charlotte: true,
                        mod: {
                            ignoredHandcard(card, player) {
                                if (card.hasGaintag('fnaf_yichong')) return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name == 'phaseDiscard' && card.hasGaintag('fnaf_yichong')) return false;
                            },
                        },
                        onremove(player) {
                            player.removeGaintag('fnaf_yichong');
                        },
                    },
                    basic: { charlotte: true },
                    trick: { charlotte: true },
                    equip: { charlotte: true },
                },
            },
            fnaf_wanghuo: {
                subSkill: {
                    basic: { charlotte: true },
                    trick: { charlotte: true },
                    equip: { charlotte: true },
                    eb: { charlotte: true },
                    et: { charlotte: true },
                    eq: { charlotte: true },
                },
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                filter(event, player) {
                    if (player.countMark('fnaf_yichong') >= 3 && player.countMark('fnaf_wanghuo') >= 3) return false;
                    var evt = event.getl(player);
                    if (!evt || !evt.hs || !evt.hs.length) return false;
                    if (
                        player.hasCard(function (card) {
                            return card.hasGaintag('fnaf_yichong');
                        }, 'h')
                    )
                        return false;
                    if (event.name == 'lose') {
                        for (var i in event.gaintag_map) {
                            if (event.gaintag_map[i].includes('fnaf_yichong')) return true;
                        }
                        return false;
                    }
                    return player.hasHistory('lose', function (evt) {
                        if (event != evt.parent) return false;
                        for (var i in evt.gaintag_map) {
                            if (evt.gaintag_map[i].includes('fnaf_yichong')) return true;
                        }
                        return false;
                    });
                },
                forced: true,
                content() {
                    'step 0';
                    var list = [];
                    var choiceList = ['删除<宜宠>描述中一个<与其>并选择与一名其他角色各受到一点无来源雷电伤害.', '将<宜宠>描述中的一个<一张>改为<非>并失去一点体力,获得一点护甲.'];
                    if (player.countMark('fnaf_wanghuo') < 3) {
                        list.push('选项一');
                    } else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                    if (player.countMark('fnaf_yichong') < 3) {
                        list.push('选项二');
                    } else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                    player.chooseControl(list).set('choiceList', choiceList, true);
                    ('step 1');
                    if (result.control == '选项一') {
                        player.addMark('fnaf_wanghuo', 1);
                        var list = [];
                        if (!player.storage.fnaf_yichong_eb) {
                            list.push('<span class=\"firetext\">红色</span>');
                        }
                        if (!player.storage.fnaf_yichong_et) {
                            list.push('<span class=\"thundertext\">蓝色</span>');
                        }
                        if (!player.storage.fnaf_yichong_eq) {
                            list.push('<span class=\"yellowtext\">黄色</span>');
                        }
                        if (list.length) {
                            player.chooseControl(list).set('prompt', '选择修改一个颜色的字符');
                        }
                    }
                    if (result.control == '选项二') {
                        event.goto(4);
                    }
                    ('step 2');
                    if (result.control == '<span class=\"firetext\">红色</span>') {
                        player.storage.fnaf_yichong_eb = true;
                        player.addSkill('fnaf_wanghuo_eb');
                    }
                    if (result.control == '<span class=\"thundertext\">蓝色</span>') {
                        player.storage.fnaf_yichong_et = true;
                        player.addSkill('fnaf_wanghuo_et');
                    }
                    if (result.control == '<span class=\"yellowtext\">黄色</span>') {
                        player.storage.fnaf_yichong_eq = true;
                        player.addSkill('fnaf_wanghuo_eq');
                    }
                    player
                        .chooseTarget('请选择一名其他角色与你受到雷电伤害', true, function (card, player, target) {
                            return target != player;
                        })
                        .set('ai', (target) => {
                            return -get.attitude(get.player(), target);
                        });
                    ('step 3');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        player.damage('nosource', 'nocard', 'thunder');
                        target.damage('nosource', 'nocard', 'thunder');
                        event.finish();
                    }
                    ('step 4');
                    player.addMark('fnaf_yichong', 1);
                    var list = [];
                    if (!player.storage.fnaf_yichong_basic2) {
                        list.push('<span class=\"firetext\">红色</span>');
                    }
                    if (!player.storage.fnaf_yichong_trick2) {
                        list.push('<span class=\"thundertext\">蓝色</span>');
                    }
                    if (!player.storage.fnaf_yichong_equip2) {
                        list.push('<span class=\"yellowtext\">黄色</span>');
                    }
                    if (list.length) {
                        player.chooseControl(list).set('prompt', '选择修改一个颜色的字符');
                    }
                    ('step 5');
                    if (result.control == '<span class=\"firetext\">红色</span>') {
                        player.storage.fnaf_yichong_basic2 = true;
                        player.addSkill('fnaf_wanghuo_basic');
                    }
                    if (result.control == '<span class=\"thundertext\">蓝色</span>') {
                        player.storage.fnaf_yichong_trick2 = true;
                        player.addSkill('fnaf_wanghuo_trick');
                    }
                    if (result.control == '<span class=\"yellowtext\">黄色</span>') {
                        player.storage.fnaf_yichong_equip2 = true;
                        player.addSkill('fnaf_wanghuo_equip');
                    }
                    player.loseHp();
                    player.changeHujia();
                },
            },
            haitu_linglong: {
                trigger: {
                    player: 'useCardToPlayer',
                },
                forced: true,
                filter(event, player) {
                    if (!event.targets.length) return false;
                    var suit = event.card.suit;
                    if (!lib.suit.includes(suit)) return false;
                    if (player.storage.haitu_linglong && player.storage.haitu_linglong.includes(suit)) return false;
                    return true;
                },
                content() { },
            },
            haitu_ol_xuanpo: {
                enable: 'phaseUse',
                usable: 1,
                group: 'haitu_ol_xuanpo_damage',
                subSkill: {
                    damage: {
                        trigger: { player: 'damageEnd' },
                        check(event, player) {
                            if (player.countCards('h') > 5 - player.countDisabled()) return true;
                        },
                        filter(event, player) {
                            return 5 - player.countDisabled() != player.countCards('h');
                        },
                        content() {
                            var next = game.createEvent('xuanpo');
                            next.player = player;
                            next.setContent(lib.skill.haitu_ol_xuanpo.content);
                        },
                    },
                },
                filter(event, player) {
                    return 5 - player.countDisabled() != player.countCards('h');
                },
                content() {
                    'step 0';
                    event.numh = player.countCards('h');
                    event.nume = 5 - player.countDisabled();
                    if (player.countCards('h') < 5 - player.countDisabled()) {
                        event.num = 5 - player.countDisabled() - player.countCards('h');
                        event.num1 = 5 - player.countDisabled() - player.countCards('h');
                        event.num0 = 5 - player.countDisabled() - player.countCards('h');
                    } else {
                        event.num = player.countCards('h') - 5 + player.countDisabled();
                        event.num1 = player.countCards('h') - 5 + player.countDisabled();
                        event.num0 = player.countCards('h') - 5 + player.countDisabled();
                    }
                    ('step 1');
                    ('step 2');
                    ('step 3');
                    //调整装备区内牌数
                    if (player.countCards('h') < 5 - player.countDisabled()) {
                    } else {
                        event.goto(7);
                    } //废除装备栏
                    ('step 4');
                    event.num -= 1;
                    var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                    for (var i = 0; i < list.length; i++) {
                        if (player.isDisabled(list[i])) list.splice(i--, 1);
                    }
                    player.chooseControl(list).set('prompt', '请选择废除一个装备栏').ai = function () {
                        if (list.includes('equip1') && player.isEmpty('equip1')) return 'equip1';
                        if (list.includes('equip3') && player.isEmpty('equip3')) return 'equip3';
                        if (list.includes('equip4') && player.isEmpty('equip4')) return 'equip4';
                        if (list.includes('equip5') && player.isEmpty('equip5')) return 'equip5';
                        if (list.includes('equip2') && player.isEmpty('equip2')) return 'equip2';
                        return list.randomGet();
                    };
                    ('step 5');
                    player.disableEquip(result.control);
                    if (event.num > 0) {
                        event.goto(4);
                    } else {
                        event.goto(10);
                    }
                    ('step 6');
                    ('step 7');
                    event.num1 -= 1;
                    ('step 8');
                    var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                    for (var i = 0; i < list.length; i++) {
                        if (!player.isDisabled(list[i])) list.splice(i--, 1);
                    }
                    player.chooseControl(list).set('prompt', '请选择回复一个装备栏').ai = function () {
                        return list.randomGet();
                    };
                    ('step 9');
                    player.enableEquip(result.control);
                    if (event.num1 > 0) {
                        event.goto(7);
                    } else {
                    }
                    ('step 10');
                    if (event.numh < event.nume) {
                        player.drawTo(event.nume);
                    } else {
                        player.chooseToDiscard('h', true, event.numh - event.nume);
                    }
                    ('step 11');
                    var list = [];
                    for (var i in lib.skill) {
                        if (!get.translation(i, 'info') || get.translation(i + '_info').length === 0) continue;
                        if (lib.skill[i].ai && lib.skill[i].equipSkill && get.translation(i, 'info') && get.translation(i + '_info').length != 0) list.add(i);
                    }
                    var skills = list.randomGets(event.num0);
                    if (skills.length) {
                        for (var i of skills) {
                            player.addTempSkill(i, { player: 'phaseBegin' });
                            game.log(player, '拆解机器人获得了技能', '#g【' + get.translation(i) + '】');
                        }
                    } else {
                        player.chat('没有合适的技能可以获得!');
                    }
                    event.finish();
                },
                ai: {
                    order(name, player) {
                        if (player.countCards('h') > 5 - player.countDisabled()) return 0.1;
                        return 5;
                    },
                },
            },
            fnaf_factory: {
                troopSkill: true,
                charlotte: true,
                enable: 'phaseUse',
                usable: 1,
                PizzaPlex: true,
                filterTarget(card, player, target) {
                    return target == player;
                },
                filterCard() {
                    return false;
                },
                selectCard: -1,
                content() {
                    'step 0';
                    var list = [],
                        num = 0;
                    for (var i in lib.card) {
                        if (lib.card[i].type == 'trick') {
                            list.add(i);
                            num++;
                        }
                        if (lib.card[i].type == 'delay') {
                            list.add(i);
                            num++;
                        }
                        if (lib.card[i].type == 'basic') {
                            list.add(i);
                            num++;
                        }
                        if (lib.card[i].type == 'spell') {
                            list.add(i);
                            num++;
                        }
                        if (lib.card[i].type == 'equip') {
                            list.add(i);
                            num++;
                        }
                        if (lib.card[i].type == 'food') {
                            list.add(i);
                            num++;
                        }
                        if (lib.card[i].type == 'hsshenqi') {
                            list.add(i);
                            num++;
                        }
                        if (lib.card[i].type == 'land') {
                            list.add(i);
                            num++;
                        }
                        if (lib.card[i].type == 'jiguan') {
                            list.add(i);
                            num++;
                        }
                        if (lib.card[i].type == 'hslingjian') {
                            list.add(i);
                            num++;
                        }
                    }
                    player.chooseButton(['请选择一张要获得的牌', [list, 'vcard']], true).set('ai', function (button) {
                        return list.randomGet();
                    });
                    ('step 1');
                    if (result.links?.length) {
                        var name = result.links[0][2];
                        event.cardname = name;
                        var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                        player.chooseControl(list).set('ai', function () {
                            return list.randomGet();
                        });
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.bool == true || result.control) {
                        event.number = result.control;
                        var list = ['diamond', 'spade', 'heart', 'club', 'none'];
                        player.chooseControl(list).set('ai', function () {
                            return list.randomGet();
                        });
                    }
                    ('step 3');
                    if (result.bool == true || result.control) {
                        event.suit = result.control;
                        var list = lib.linked.slice(0);
                        player.chooseControl(list).set('prompt', true, get.prompt('haitu_huimeng')).set('请选择生成卡牌的属性');
                    }
                    ('step 4');
                    if (result.bool == true || result.control) {
                        event.nature = result.control;
                        var fakecard = game.createCard(event.cardname, event.suit, event.number, event.nature);
                        var fakecard1 = game.createCard(event.cardname, event.suit, event.number, event.nature);
                        player.gain(fakecard, 'gain1', 'log');
                    }
                },
                ai: {
                    order: 20,
                    expose: 1,
                    mapValue: 5,
                    result: {
                        player(player) {
                            return 5;
                        },
                    },
                },
            },
            haitu_poe: {
                trigger: {
                    global: ['phaseZhunbeiBegin'],
                },
                forced: true,
                content() {
                    'step 0';
                    player.judge().set('callback', function () {
                        if (event.judgeResult.suit == 'heart') {
                            player.chooseUseTarget('请选择【火杀】的目标,或点<取消>', { name: 'sha', nature: 'fire' }, false, [1, 2]);
                        } else {
                            if (event.judgeResult.suit != 'spade') {
                                player.chooseUseTarget('请选择【火杀】的目标,或点<取消>', { name: 'sha', nature: 'fire' }, false);
                            }
                        }
                    });
                },
            },
            haitu_hundun: {
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                content() {
                    var list = [];
                    if (!_status.characterskill) {
                        _status.characterskill = [];
                        for (var i in lib.character) {
                            if (Array.isArray(lib.character[i][3])) _status.characterskill.addArray(lib.character[i][3]);
                        }
                    }
                    for (var i in lib.skill) {
                        if (!get.translation(i, 'info') || get.translation(i + '_info').length === 0) continue;
                        if (_status.characterskill.includes(i)) list.add(i);
                    }
                    var num = player.getSkills(true, false).length;
                    for (var i = 0; i < player.getSkills(true, false).length; i++) {
                        if (!list.includes(player.getSkills(true, false)[i])) num--;
                    }
                    var skills = list.randomGets(7);
                    if (skills.length) {
                        if (!player.storage.haitu_hundun) player.storage.haitu_hundun = [];
                        player.storage.haitu_hundun.addArray(skills);
                        for (var i of skills) {
                            player.addSkillLog(i);
                        }
                    } else player.chat('没有合适的技能可以获得!');
                },
                group: 'haitu_hundun_lose',
                subSkill: {
                    lose: {
                        trigger: {
                            player: 'useCardAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            return player.storage.haitu_hundun && player.storage.haitu_hundun.length;
                        },
                        content() {
                            'step 0';
                            if (player.storage.haitu_hundun.length > 1) {
                                player.chooseControl(player.storage.haitu_hundun).set('prompt', '千相:选择一个技能失去');
                            } else event._result = { control: player.storage.haitu_hundun[0] };
                            ('step 1');
                            player.storage.haitu_hundun.remove(result.control);
                            player.removeSkill(result.control);
                            game.log(player, '失去了技能', '#g【' + get.translation(result.control) + '】');
                        },
                    },
                },
            },
            haitu_jianli: {
                forced: true,
                trigger: {
                    player: ['useCard'],
                },
                filter(event, player) {
                    var name = event.card.name;
                    var num = player.countCards('h', name);
                    return player.getHistory('useCard', (evt) => evt.card.name == name).length == num;
                },
                content() {
                    var name = trigger.card.name,
                        num = player.countCards('h', name);
                    player.draw(num);
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card) {
                            var name = card.name;
                            var num0 = player.countCards('h', name);
                            return (num = num0);
                        }
                    },
                },
            },
            haitu_Askill: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                init(player) {
                    player.storage.haitu_left = [];
                    player.storage.haitu_right = [];
                },
                subSkill: {
                    block: {
                        charlotte: true,
                        onremove(player) {
                            player.storage.haitu_left = [];
                            player.storage.haitu_right = [];
                        },
                        mod: {
                            cardname(card, player) {
                                if (card.number <= player.storage.haitu_left) return 'sha';
                                if (card.number >= player.storage.haitu_right) return 'sha';
                            },
                        },
                    },
                    use: {
                        trigger: {
                            player: 'useCard2',
                        },
                        charlotte: true,
                        forced: true,
                        filter(event, player) {
                            var number = event.card.number;
                            if (typeof number != 'number') {
                                return false;
                            }
                            return event.card.number > player.storage.haitu_left && event.card.number < player.storage.haitu_right;
                        },
                        content() {
                            'step 0';
                            event.num = trigger.card.number;
                            player
                                .chooseControl()
                                .set('prompt', '请选择一项')
                                .set('choiceList', ['令' + get.translation(trigger.card.number) + '代替左边界值', '令' + get.translation(trigger.card.number) + '代替右边界值']);
                            ('step 1');
                            if (result.index == 0) {
                                player.storage.haitu_left = event.num;
                            }
                            if (result.index == 1) {
                                player.storage.haitu_right = event.num;
                            }
                            player.update();
                        },
                    },
                },
                forced: true,
                mark: true,
                marktext: '统',
                intro: {
                    name2: '统',
                    content(num, player, storage) {
                        var stat1 = player.storage.haitu_left;
                        var stat2 = player.storage.haitu_right;
                        var str = '<br><li>左边界值为';
                        str += stat1;
                        str += '<br><li>右边界值为';
                        str += stat2;
                        return str;
                    },
                },
                content() {
                    'step 0';
                    player.chooseCard('he', false, 2, '你可以重铸牌', function (card) {
                        var suit = card.number;
                        if (suit == 'none') return false;
                        for (var card of ui.selected.cards) {
                            if (card.number == suit) return false;
                        }
                        return true;
                    });
                    ('step 1');
                    if (result.cards?.length) {
                        player.recast(result.cards);
                        var card0 = result.cards[0];
                        var card1 = result.cards[1];
                        player.storage.haitu_A1 = card0.number;
                        player.storage.haitu_A2 = card1.number;
                        if (player.storage.haitu_A1 < player.storage.haitu_A2) {
                            player.storage.haitu_left = player.storage.haitu_A1;
                            player.storage.haitu_right = player.storage.haitu_A2;
                        }
                        if (player.storage.haitu_A1 > player.storage.haitu_A2) {
                            player.storage.haitu_left = player.storage.haitu_A2;
                            player.storage.haitu_right = player.storage.haitu_A1;
                        }
                        player.update();
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    player.addTempSkill('haitu_Askill_block');
                    player.update();
                },
            },
            haitu_re_xiangting: {
                subSkill: {
                    begin: {
                        forced: true,
                        charlotte: true,
                        silent: true,
                        trigger: {
                            global: 'gameDrawBegin',
                        },
                        content() {
                            var me = player;
                            if (player == me) {
                                trigger.cancel();
                                var next = game.createEvent('haitu_re_xiangting');
                                next.player = player;
                                next.num = ui.cardPile.length + ui.discardPile.length;
                                next.setContent(lib.skill.haitu_re_xiangting.content);
                            }
                        },
                    },
                },
                trigger: {
                    player: ['drawBegin'],
                },
                forced: true,
                audio: 'ext:海国图志/audio:2',
                content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    event.num0 = 0;
                    {
                        event.num0 += 1;
                    }
                    trigger.cancel();
                    ('step 1');
                    event.num -= 1;
                    var discardPile = Array.from(ui.discardPile.childNodes);
                    var num = discardPile.length;
                    var cards = [];
                    for (var i = 0; i < ui.cardPile.childElementCount + num; i++) {
                        var cardx = get.cardPile((cardxx) => {
                            return !cards.includes(cardxx);
                        });
                        if (cardx) cards.push(cardx);
                    }
                    {
                        player.chooseButton(['选择获得其中一张', cards.randomGets(3)], true).set('ai', function (button) {
                            return get.value(button.link, _status.event.player);
                        });
                    }
                    ('step 2');
                    player.directgain(result.links, 'gain1');
                    if (event.num > 0) {
                        event.goto(1);
                    } else {
                        event.finish();
                    }
                },
            },
            haitu_fnaf_juantu: {
                enable: ['chooseToUse', 'chooseTorespond'],
                group: 'haitu_fnaf_juantu_yang',
                subSkill: {
                    yang: {
                        enable: ['chooseToUse', 'chooseTorespond'],
                        filter(event, player) {
                            event.list1 = [];
                            game.countPlayer(function (current) {
                                if (current != player) event.list1.push(current);
                            });
                            for (var i of event.list1) {
                                var getCards = i.getCards('e');
                                if (getCards.length) {
                                    for (var e of getCards) {
                                        var vcard = {
                                            name: e.name,
                                            suit: e.suit,
                                        };
                                        if (player.storage.haitu_fnaf_juantu == true && event.filterCard && event.filterCard({ name: vcard.name }, player, event)) return true;
                                    }
                                }
                            }
                            return false;
                        },
                        delay: false,
                        content() {
                            'step 0';
                            player
                                .chooseTarget('请选择一名角色场上一张牌', true, function (card, player, target) {
                                    var getCards = target.getCards('ej');
                                    if (getCards.length) {
                                        for (var e of getCards) {
                                            var vcard = {
                                                name: e.name,
                                                suit: e.suit,
                                            };
                                            if (player.storage.haitu_fnaf_juantu == true0 && target != player && event.filterCard && event.filterCard({ name: vcard.name }, player, event)) return true;
                                        }
                                    }
                                })
                                .set('ai', function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    if (att > 0) {
                                        var js = target.getCards('j');
                                        if (js.length) {
                                            var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                            if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                                return 2 * att;
                                            }
                                        }
                                        if (target.getEquip('baiyin') && target.isDamaged() && get.recovereffect(target, player, player) > 0) {
                                            if (target.hp == 1 && !target.hujia) return 1.6 * att;
                                            if (target.hp == 2) return 0.01 * att;
                                            return 0;
                                        }
                                    }
                                    var es = target.getCards('e');
                                    var noe = target.hasSkillTag('noe');
                                    var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                                    if (noe || noe2) return 0;
                                    if (att <= 0 && !es.length) return 1.5 * att;
                                    return -1.5 * att;
                                });
                            ('step 1');
                            if (result.targets?.length) {
                                var target = result.targets[0];
                                player.choosePlayerCard(
                                    target,
                                    function (card, player, target) {
                                        var getCards = target.getCards('ej');
                                        if (getCards.length) {
                                            for (var e of getCards) {
                                                var vcard = {
                                                    name: e.name,
                                                    suit: e.suit,
                                                };
                                                if (player.storage.haitu_fnaf_juantu == true0 && target != player && event.filterCard && event.filterCard({ name: vcard.name }, player, event)) return true;
                                            }
                                        }
                                    },
                                    true
                                );
                            }
                            ('step 2');
                            var evt = event.getParent(2);
                            if (result.links?.length) {
                                player.changeZhuanhuanji('haitu_fnaf_juantu');
                                var name = result.links[0].name,
                                    aozhan = player.hasSkill('aozhan') && name == 'tao';
                                if (aozhan) {
                                    name = evt.filterCard(
                                        {
                                            name: 'sha',
                                            cards: [card],
                                        },
                                        evt.player,
                                        evt
                                    )
                                        ? 'sha'
                                        : 'shan';
                                }
                                if (evt.name == 'chooseToUse') {
                                    game.broadcastAll(
                                        function (result, name) {
                                            lib.skill.haitu_fnaf_juantu_backup.viewAs = { name: name, cards: [result] };
                                            lib.skill.haitu_fnaf_juantu_backup.prompt = '选择' + get.translation(result) + '的目标';
                                        },
                                        result.links[0],
                                        name
                                    );
                                    evt.set('_backupevent', 'haitu_fnaf_juantu_backup');
                                    evt.backup('haitu_fnaf_juantu_backup');
                                } else {
                                    evt.result.card = result.links[0];
                                    if (aozhan) evt.result.card.name = name;
                                    evt.result.cards = [result.links[0]];
                                    evt.redo();
                                    return;
                                }
                            }
                            evt.goto(0);
                        },
                    },
                },
                ai: {
                    respondShan: true,
                    respondSha: true,
                    save: true,
                    skillTagFilter(player, tag, arg) {
                        var event = _status.event;
                        var cardPile = Array.from(ui.cardPile.childNodes);
                        if (!cardPile.length) return false;
                        cardPile = cardPile.slice(0, Math.min(4, cardPile.length));
                        for (var i = 0; i < cardPile.length; i++) {
                            if (tag == 'respondSha') {
                                if (cardPile[i].name == 'sha') return true;
                            } else if (tag == 'respondShan') {
                                if (cardPile[i].name == 'shan') return true;
                            } else if (tag == 'save') {
                                if (cardPile[i].name == 'jiu' || cardPile[i].name == 'tao') return true;
                            }
                        }
                        return false;
                    },
                },
                group: 'haitu_fnaf_juantu_yang',
                hiddenCard(player, name) {
                    var cardPile = Array.from(ui.cardPile.childNodes);
                    if (!cardPile.length) return false;
                    cardPile = cardPile.slice(0, Math.min(4, cardPile.length));
                    return cardPile.some((i) => i.name == name);
                },
                filter(event, player) {
                    if (event.responded || event.skill) return false;
                    var cardPile = Array.from(ui.cardPile.childNodes);
                    if (!cardPile.length) return false;
                    if (player.storage.haitu_fnaf_juantu == true) return false;
                    cardPile = get.bottomCards(1); //QQQ
                    return cardPile.some((i) => event.filterCard && event.filterCard(i, player, event));
                },
                mod: {
                    cardEnabled2(card, player) {
                        if (_status.event.skill && get.itemtype(card) == 'card' && card.hasGaintag('haitu_fnaf_juantu')) return false;
                    },
                },
                intro: {
                    mark(dialog, storage, player) {
                        var cardPile = Array.from(ui.cardPile.childNodes);
                        if (!cardPile.length) return '';
                        cardPile = cardPile.slice(0, Math.min(4, cardPile.length));
                        if (player.isUnderControl(true)) {
                            dialog.addAuto(cardPile);
                        } else {
                            return '';
                        }
                    },
                },
                trigger: {
                    player: ['chooseTorespondBegin', 'chooseToUseBegin'],
                },
                hiddenCard(player, name) {
                    var cardPile = Array.from(ui.cardPile.childNodes);
                    if (!cardPile.length) return false;
                    cardPile = get.bottomCards(1); //QQQ
                    return cardPile.some((i) => i.name == name);
                },
                forced: true,
                lastDo: true,
                copy(cards) {
                    var result = [];
                    for (var i of cards) {
                        var card = ui.create.card(ui.special);
                        card.init([i.suit, i.number, i.name, i.nature]);
                        //card.storage.vanish=true;
                        (card.cardid = i.cardid), (card.wunature = i.wunature), (card.storage = i.storage), (card.relatedCard = i);
                        result.push(card);
                    }
                    return result;
                },
                contentx() {
                    'step 0';
                    if (trigger.result.bool) {
                        if (trigger.onresult) {
                            trigger.onresult(trigger.result);
                            delete trigger.onresult;
                        }
                    }
                    ('step 1');
                    player.lose(event.cards, ui.special)._triggered = null;
                    player.changeZhuanhuanji('haitu_fnaf_juantu');
                    ('step 2');
                    for (var i of event.cards) {
                        i.fix();
                        i.remove();
                        i.destroyed = true;
                    }
                },
                content() {
                    'step 0';
                    var cardPile = Array.from(ui.cardPile.childNodes);
                    cardPile = cardPile.slice(cardPile.length);
                    event.cards = lib.skill.haitu_fnaf_juantu.copy(cardPile);
                    player.directgains(event.cards, null, 'haitu_fnaf_juantu');
                    ('step 1');
                    var evt = trigger;
                    var onresult = false;
                    if (evt.onresult && player.storage.haitu_fnaf_juantu != true) {
                        onresult = evt.onresult;
                    }
                    var next2 = game.createEvent('haitu_fnaf_juantu_clear', false);
                    next2.cards = event.cards;
                    next2.player = player;
                    next2._trigger = evt;
                    next2.setContent(lib.skill.haitu_fnaf_juantu.contentx);
                    event.next.remove(next2);
                    evt.after.push(next2);
                    evt.onresult = function (result) {
                        if (evt.after.includes(next2)) {
                            evt.after.remove(next2);
                            evt.next.push(next2);
                        }
                        if (result.cards && result.cards.length && (result.cards[0].hasGaintag('haitu_fnaf_juantu') || event.cards.includes(result.cards[0]))) {
                            var card2 = result.cards[0];
                            result.cards[0] = result.cards[0].relatedCard;
                            var cardx = result.cards[0];
                            result.card = {
                                name: card2.name,
                                suit: card2.suit,
                                number: card2.number,
                                nature: get.nature(card2),
                                cardid: cardx.cardid,
                                wunature: cardx.wunature,
                                storage: cardx.storage,
                                cards: [cardx],
                            };
                        }
                        if (onresult) onresult.apply(evt, arguments);
                        delete evt.onresult;
                    };
                },
                mark: true,
                zhuanhuanji: true,
                forced: true,
                marktext: '☯',
                init(player) {
                    player.storage.haitu_fnaf_juantu = false;
                },
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.haitu_fnaf_juantu == false) {
                            return '你可以使用牌堆底的牌.';
                        } else return '你可以使用场上一张不属于你的牌.';
                    },
                },
                delay: false,
            },
            haitu_fnaf_duohai: {
                enable: 'phaseUse',
                usable(skill, player) {
                    var history = player.getHistory('sourceDamage', function (card) {
                        return true;
                    }).length;
                    if (!history.length || history.length == 0) return 1;
                    var num = history + 1;
                    var stat = player.getStat('haitu_fnaf_duohai');
                    return stat < num;
                },//QQQ
                filter(event, player) {
                    return game.hasPlayer((current) => lib.skill.haitu_fnaf_duohai.filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    return target != player && target.countCards('he') > 0;
                },
                content() {
                    'step 0';
                    player.choosePlayerCard(target, 'he', true);
                    ('step 1');
                    if (result.bool) {
                        event.cards = [];
                        var card1 = result.cards[0];
                        event.cards.push(card1);
                        target.choosePlayerCard(player, 'he', true);
                    }
                    ('step 2');
                    if (result.cards?.length) {
                        var card2 = result.cards[0];
                        event.cards.push(card2);
                    }
                    ('step 3');
                    if (event.cards.length) {
                        game.cardsGotoOrdering(event.cards);
                        var next = player.chooseToMove('夺骸:请选择卡牌的归宿', true);
                        next.set('list', [['牌堆底'], ['你的判定区'], ['处理区', event.cards]]);
                        next.set('filterMove', function (from, to, moved) {
                            return true;
                        });
                        next.set('filterOk', function (moved) {
                            return moved[0].length == 1 && moved[1].length == 1 && moved[2].length == 0;
                        });
                        next.set('processAI', function (list) {
                            var cards1 = event.cards.sort((a, b) => get.value(b) - get.value(a));
                            return [cards1.slice(0, 1), cards1.slice(1, 2), cards1]; //QQQ
                        });
                    }
                    ('step 4');
                    var bottom = result.moved[0];
                    var judges = result.moved[1];
                    for (var i = 0; i < bottom.length; i++) {
                        ui.cardPile.appendChild(bottom[i]);
                    }
                    game.updateRoundNumber();
                    for (var i of judges) {
                        switch (i.suit) {
                            case 'heart':
                                player.addJudge({ name: 'huoshan' }, judges);
                                break;
                            case 'diamond':
                                player.addJudge({ name: 'hongshui' }, judges);
                                break;
                            case 'spade':
                                player.addJudge({ name: 'yanxiao_card' }, judges);
                                break;
                            case 'club':
                                player.addJudge({ name: 'guiyoujie' }, judges);
                                break;
                        }
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        player(player, target) {
                            return get.effect(target, { name: 'guohe_copy' }, player, player);
                        },
                    },
                },
            },
            haitu_fnaf_juantu_backup: {
                sourceSkill: 'haitu_fnaf_juantu',
                precontent() {
                    var name = event.result.card.name;
                    event.result.cards = event.result.card.cards;
                    event.result.card = event.result.cards[0];
                    event.result.card.name = name;
                },
                filterCard() {
                    return false;
                },
                selectCard: -1,
            },
            re_hs_maoxian: {
                enable: 'phaseUse',
                usable: 2,
                content() {
                    'step 0';
                    var skills = player.getSkills(null, false, false).filter((skill) => {
                        var info = get.info(skill);
                        if (!info || get.is.empty(info) || info.charlotte) return false;
                        return true;
                    });
                    player
                        .chooseControl(skills)
                        .set(
                            'choiceList',
                            skills.map((i) => {
                                return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                            })
                        )
                        .set('displayIndex', false)
                        .set('prompt', ':选择失去一个技能')
                        .set('ai', () => {
                            var choices = _status.event.controls.slice();
                            var negs = choices.filter((i) => {
                                var info = get.info(i);
                                if (!info || !info.ai) return false;
                                return info.ai.neg || info.ai.halfneg;
                            });
                            if (negs.length) return negs.randomGet();
                            if (choices.includes('mashu')) return 'mashu';
                            return choices.randomGet();
                        });
                    ('step 1');
                    player.removeSkill(result.control);
                    player.popup(result.control);
                    game.log(player, '失去了技能', '#g【' + get.translation(result.control) + '】');
                    player
                        .chooseControl()
                        .set('prompt', '请选择一项')
                        .set('choiceList', ['发现并获得一个技能', '刷新所有技能'])
                        .set('ai', function () {
                            return 0;
                        });
                    ('step 2');
                    if (result.index == 0) {
                    }
                    if (result.index == 1) {
                        event.goto(5);
                    }
                    ('step 3');
                    var list1 = get.gainableSkills();
                    var list = list1.randomGets(3);
                    player
                        .chooseControl(list)
                        .set(
                            'choiceList',
                            list.map(function (i) {
                                return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                            })
                        )
                        .set('displayIndex', false)
                        .set('prompt', '请选择你要获得的技能')
                        .set('ai', () => {
                            var list = _status.event.controls.slice();
                            return list.sort((a, b) => {
                                return get.skillRank(b, 'in') - get.skillRank(a, 'in');
                            })[0];
                        });
                    ('step 4');
                    player.addSkill(result.control);
                    game.log(player, '获得了技能', '【' + get.translation(result.control) + '】');
                    event.finish();
                    ('step 5');
                    var skills = player.getSkills(null, false, false).filter((skill) => {
                        var info = get.info(skill);
                        if (!info || get.is.empty(info) || info.charlotte) return false;
                        return true;
                    });
                    game.expandSkills(skills);
                    var resetSkills = [];
                    var suffixs = ['used', 'round', 'block', 'blocker'];
                    for (var skill of skills) {
                        var info = get.info(skill);
                        if (typeof info.usable == 'number') {
                            if (player.getStat('triggerSkill')[skill] && player.getStat('triggerSkill')[skill] >= 1) {
                                delete player.getStat('triggerSkill')[skill];
                                resetSkills.add(skill);
                            }
                            if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
                                delete player.getStat('skill')[skill];
                                resetSkills.add(skill);
                            }
                        }
                        if (info.round && player.storage[skill + '_roundcount']) {
                            delete player.storage[skill + '_roundcount'];
                            resetSkills.add(skill);
                        }
                        if (player.awakenedSkills.includes(skill)) {
                            player.restoreSkill(skill);
                            resetSkills.add(skill);
                        }
                        for (var suffix of suffixs) {
                            if (player.hasSkill(skill + '_' + suffix)) {
                                player.removeSkill(skill + '_' + suffix);
                                resetSkills.add(skill);
                            }
                        }
                    }
                    if (resetSkills.length) {
                        var str = '';
                        for (var i of resetSkills) {
                            str += '【' + get.translation(i) + '】、';
                        }
                        game.log(player, '重置了技能', '#g' + str.slice(0, -1));
                    }
                },
                ai: {
                    order: 11,
                    result: {
                        player(player) {
                            return 1;
                        },
                    },
                },
            },
            haitu_fnaf_ranhaitu: {
                enable: 'phaseUse',
                usable: 1,
                group: 'haitu_fnaf_ranhaitu_fire',
                subSkill: {
                    fire: {
                        filter(event, player) {
                            return event.nature == 'fire';
                        },
                        trigger: {
                            source: 'damageSource',
                        },
                        content() {
                            delete player.getStat().skill.haitu_fnaf_ranhaitu;
                            game.log(player, '重置了', '#g【燃衅】');
                        },
                        forced: true,
                        silent: true,
                        charlotte: true,
                    },
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h') > 0;
                },
                silent: true,
                content() {
                    'step 0';
                    var map = {},
                        hs = player.getCards('h');
                    for (var i of hs) map[i.suit] = true;
                    var list = lib.suit.filter((i) => map[i]);
                    player.chooseControl(list).set('prompt', '请选择一个花色');
                    ('step 1');
                    var hs = player.getCards('h');
                    var suit = result.control;
                    var cards = player.getCards('h').filter(function (i) {
                        return i.suit == suit;
                    });
                    var cardx1 = [];
                    if (cards.length) {
                        cardx1.addArray(cards);
                    }
                    var cardx2 = { name: 'huogong' };
                    if (player.hasUseTarget(cardx2, true, false)) {
                        player.chooseUseTarget(cardx2, cards, true, false).set('prompt', '选择' + get.translation(cardx2) + '(' + get.translation(cardx2) + ')的目标');
                    }
                },
                ai: {
                    order: 2,
                    result: {
                        player(player, target) {
                            return get.effect(player, { name: 'huogong' }, player, target);
                        },
                    },
                },
            },
            haitu_duxiao: {
                enable: 'phaseUse',
                usable: 1,
                discard: false,
                lose: false,
                delay: 0,
                position: 'he',
                filter(event, player) {
                    return player.countCards('he', { suit: 'club' });
                },
                filterCard(card) {
                    return card.suit == 'club';
                },
                filterTarget(card, player, target) {
                    return player != target;
                },
                subSkill: {
                    view: {
                        fixed: true,
                        charlotte: true,
                        mark: true,
                        marktext: '毒',
                        intro: {
                            name2: '毒',
                            content(num, player, storage) {
                                var stat = player.countMark('haitu_duxiao_view');
                                var str = '<br><li>已经吸毒:';
                                str += stat;
                                str += '次';
                                return str;
                            },
                        },
                    },
                },
                content() {
                    'step 0';
                    player.give(cards, target);
                    ('step 1');
                    target.addSkill('haitu_duxiao_view');
                    target.addMark('haitu_duxiao_view', 1);
                    var list = [];
                    list.push('给牌');
                    if (target.countCards('he') >= target.countMark('haitu_duxiao_view')) {
                        list.push('重铸');
                    }
                    target
                        .chooseControl(list)
                        .set('choiceList', ['重铸牌', '交给' + get.translation(player) + '所有牌'])
                        .set('ai', function () {
                            var list = _status.event.controls;
                            if (list.includes('重铸')) {
                                return '重铸';
                            }
                            if (list.includes('给牌')) {
                                return '给牌';
                            }
                        })
                        .set('prompt', '请选择一项');
                    ('step 2');
                    if (result.control == '重铸') {
                        if (target.countCards('he') >= target.countMark('haitu_duxiao_view')) {
                            target.chooseCard('he', true, target.countMark('haitu_duxiao_view'), '请重铸' + get.cnNumber(target.countMark('haitu_duxiao_view')) + '张牌', lib.filter.cardrecastable);
                        }
                    }
                    if (result.control != '重铸') {
                        event.goto(4);
                    }
                    ('step 3');
                    if (result.bool) {
                        target.recast(result.cards);
                    }
                    event.finish();
                    ('step 4');
                    ('step 5');
                    target.give(target.getCards('he'), player);
                },
                ai: {
                    result: {
                        target(player, target) {
                            return target.countCards('he') - target.countMark('haitu_duxiao_view');
                        },
                    },
                },
                give(player, target) {
                    player.gainPlayerCard(target, true, 'he', target.countCards('he'));
                },
            },
            haitu_zhongbao: {
                mod: {
                    cardname(card, player) {
                        if (card.suit == 'heart' && ['trick'].includes(lib.card[card.name].type)) return 'zhujinqiyuan';
                    },
                },
                enable: 'phaseUse',
                filter(event, player) {
                    return ui.cardPile.childElementCount % 10 > 0;
                },
                content() {
                    'step 0';
                    event.num = ui.cardPile.childElementCount % 10;
                    event.cards = get.cards(ui.cardPile.childElementCount % 10);
                    var next = player.chooseCardButton(event.cards, 1, '选择获得一张牌');
                    next.set('ai', function (button) {
                        var player = _status.event.player;
                        var value = get.value(button.link, player);
                        if (get.type(button.link) == 'equip' && player.isEmpty(get.subtype(button.link))) return 3 * value;
                        return value;
                    });
                    ('step 1');
                    if (result.bool && result.links) {
                        var card = result.links[0];
                        player.gain(result.links, 'nolog', 'draw');
                    }
                },
                ai: {
                    order: 9,
                    threaten: 1.7,
                    result: {
                        player: 1,
                    },
                },
            },
            haitu_ol_shuyue: {
                trigger: {
                    player: 'useCard',
                    target: 'useCardToTargeted',
                },
                forced: true,
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    var target = get.max(
                        game
                            .filterPlayer(function (current) {
                                return !current.isUnseen();
                            }, 'list')
                            .randomSort(),
                        function (current) {
                            var att = get.attitude(player, current);
                            if (att < 0 && current.isDamaged() && current.hp <= 3) {
                                return -10;
                            }
                            var rank = get.rank(current, true);
                            if (current.maxHp >= 3) {
                                if (current.hp <= 1) {
                                    if (att > 0) return att * 3 + 2;
                                    return att * 3;
                                } else if (current.hp == 2) {
                                    if (att > 0) {
                                        att *= 1.5;
                                    } else {
                                        att /= 1.5;
                                    }
                                }
                            }
                            if (rank >= 7) {
                                if (att > 0) {
                                    return att / 10;
                                }
                                return -att / 5;
                            } else if (rank <= 4) {
                                if (att < 0) {
                                    return -att / 10;
                                }
                                return att;
                            }
                            return Math.abs(att / 2);
                        },
                        'item'
                    );
                    event.aitarget = target;
                    var list = [];
                    for (var i in lib.character) {
                        if (!lib.filter.characterDisabled(i) && !lib.filter.characterDisabled2(i)) {
                            list.push(i);
                        }
                    }
                    var players = game.players.concat(game.dead);
                    for (var i = 0; i < players.length; i++) {
                        list.remove(players[i].name);
                        list.remove(players[i].name1);
                        list.remove(players[i].name2);
                    }
                    var dialog = ui.create.dialog('选择一张武将牌', 'hidden');
                    dialog.add([list.randomGets(5 + player.countMark('haitu_ol_shuyue')), 'character']);
                    player.chooseButton(dialog, false).ai = function (button) {
                        if (get.attitude(player, event.aitarget) > 0) {
                            return get.rank(button.link, true);
                        } else {
                            return -get.rank(button.link, true);
                        }
                    };
                    ('step 1');
                    if (result.links?.length) {
                        event.nametarget = result.links[0];
                        player.chooseTarget(false, '使用' + get.translation(event.nametarget) + '替换一名角色的武将牌', function (card, player, target) {
                            return !target.isUnseen() && !target.isMin();
                        }).ai = function (target) {
                            if (target == event.aitarget) {
                                return 1;
                            } else {
                                return 0;
                            }
                        };
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        if (!target.storage.haitu_ol_shuyue) {
                            target.storage.haitu_ol_shuyue = [target.name1 ? target.name1 : target.name, target.name2];
                        }
                        target.reinit(target.name, event.nametarget);
                        target.update();
                        player.line(target, 'green');
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    var next = game.createEvent('haitu_ol_shuyue_after', true);
                    next.forceDie = true;
                    next.setContent(function () {
                        game.countPlayer(function (current) {
                            if (current.storage.haitu_ol_shuyue) {
                                var hp = current.hp;
                                lib.element.player.reinit.apply(current, current.storage.haitu_ol_shuyue);
                                delete current.storage.haitu_ol_shuyue;
                            }
                        });
                    });
                    var evt = trigger.getParent('useCard');
                    event.next.remove(next);
                    evt.after.push(next);
                },
            },
            haitu_hexin: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.countCards('h') != player.countCards('e');
                },
                content() {
                    event.num = player.countCards('e');
                    if (event.num > player.countCards('h')) {
                        player.drawTo(event.num);
                    } else {
                        player.chooseToDiscard('h', true, player.countCards('h') - event.num);
                    }
                },
                ai: {
                    threaten: 1.2,
                    result: {
                        player(player, target) {
                            return player.countCards('e') - player.countCards('h'); //QQQ
                        },
                    },
                    order: 10,
                    expose: 0.3,
                },
            },
            haitu_ehou: {
                trigger: { source: 'damageBegin3' },
                forced: true,
                audio: 'ext:海国图志/audio:1',
                audioname: ['haitu_fmummy'],
                content() {
                    player.loseHp();
                    trigger.player.loseHp();
                },
            },
            haitu_liaoyu: {
                trigger: {
                    player: 'turnOverAfter',
                },
                forced: true,
                group: 'haitu_liaoyu_subs',
                subSkill: {
                    subs: {
                        charlotte: true,
                        forced: true,
                        trigger: {
                            player: 'linkAfter',
                        },
                        filter(event, player) {
                            return !player.isLinked();
                        },
                        content() {
                            if (player.isTurnedOver()) player.turnOver();
                        },
                    },
                },
                filter(event, player) {
                    return !player.isTurnedOver();
                },
                content() {
                    player.link(false);
                },
            },
            haitu_tucheng: {
                init(player) {
                    if (!player.storage.haitu_tucheng) {
                        player.storage.haitu_tucheng = true;
                    }
                },
                enable: ['chooseToUse'],
                mark: true,
                zhuanhuanji: true,
                marktext: '☯',
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.haitu_tucheng == false) {
                            return '你可以将手牌中一张装备牌当【万箭齐发】使用.';
                        } else return '你可以一张非装备手牌当【解甲归田】使用.';
                    },
                },
                viewAs(cards, player) {
                    var name = false;
                    var nature = null;
                    var suit = get.type2(cards[0], player);
                    if (suit == 'equip') {
                        name = 'wanjian';
                    } else {
                        name = 'jiejia';
                    }
                    //返回判断结果
                    if (name) return { name: name, nature: nature };
                    return null;
                },
                check(card) {
                    return 7 - get.value(card);
                },
                filterCard(card, player) {
                    if (player.storage.haitu_tucheng == true) {
                        return get.type2(card) != 'equip';
                    } else {
                        return get.type2(card) == 'equip';
                    }
                },
                precontent() {
                    player.changeZhuanhuanji('haitu_tucheng');
                },
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    return true;
                },
                position: 'h',
                ai: {
                    order(item, player) {
                        if (_status.event.type == 'phase') return 22;
                    },
                    result: {
                        player(player) {
                            return 2;
                        },
                    },
                },
            },
            haitu_shengjian: {
                mod: {
                    attackFrom(from, to, distance) {
                        return distance - 1;
                    },
                },
                forced: true,
                shaRelated: true,
                trigger: {
                    source: 'damageBegin3',
                },
                filter(event, player) {
                    if (!event.card) return false;
                    if (event.card.name != 'sha' && event.card.name != 'juedou') return false;
                    var num1 = event.player.hp;
                    var num2 = player.hp;
                    return event.player.getDamagedHp() == 0 || num1 >= num2;
                },
                content() {
                    trigger.num += 1;
                },
            },
            haitu_qingxi: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                content() {
                    'step 0';
                    event.list = lib.suit.slice();
                    event.suits = [];
                    event.suits1 = [];
                    event.num1 = 0;
                    event.num2 = 0;
                    var cards = player.getCards('h');
                    var cards1 = trigger.player.getCards('h');
                    for (var i = 0; i < cards.length; i++) {
                        if (!event.suits.includes(cards[i].suit)) {
                            event.suits.push(cards[i].suit);
                            event.num1 += 1;
                        }
                    }
                    for (var i = 0; i < cards1.length; i++) {
                        if (!event.suits1.includes(cards1[i].suit)) {
                            event.suits1.push(cards1[i].suit);
                            event.num2 += 1;
                        }
                    }
                    if (event.num1 == event.num2) {
                        event.finish();
                    }
                    if (event.num1 < event.num2) {
                        event.goto(4);
                    }
                    ('step 1');
                    event.gain = event.num1 - event.num2;
                    ('step 2');
                    ('step 3');
                    ('step 4');
                    var list = [];
                    var dialog = ['弃置一种花色的所有牌'];
                    for (var suit of lib.suit.concat('none')) {
                        if (trigger.player.countCards('h', { suit: suit })) {
                            dialog.push('<div class="text center">' + get.translation(suit + '2') + '牌</div>');
                            dialog.push(trigger.player.getCards('h', { suit: suit }));
                            list.push(suit);
                        }
                    }
                    if (list.length) {
                        trigger.player.chooseControl(list).set('dialog', dialog);
                    } else {
                        event.finish();
                    }
                    ('step 5');
                    var cards2 = trigger.player.getCards('h', { suit: result.control });
                    event.cards2 = cards2;
                    trigger.player.discard(cards2);
                    trigger.player.update();
                    ('step 6');
                    var num1 = 0,
                        num2 = 0;
                    var suits = [];
                    var suits1 = [];
                    var cards = player.getCards('h');
                    var cards1 = trigger.player.getCards('h');
                    for (var i = 0; i < cards.length; i++) {
                        if (!suits.includes(cards[i].suit)) {
                            suits.push(cards[i].suit);
                            num1 += 1;
                        }
                    }
                    for (var i = 0; i < cards1.length; i++) {
                        if (!suits1.includes(cards1[i].suit)) {
                            suits1.push(cards1[i].suit);
                            num2 += 1;
                        }
                    }
                    if (num1 == num2) {
                        event.finish();
                    } else {
                        event.goto(4);
                    }
                },
            },
            haitu_fnaf_yingsu: {
                group: ['haitu_fnaf_yingsu_add'],
                subSkill: {
                    mark: { charlotte: true },
                    add: {
                        charlotte: true,
                        supercharlotte: true,
                        trigger: {
                            player: 'recoverAfter',
                        },
                        silent: true,
                        popup: false,
                        firstDo: true,
                        forced: true,
                        content() {
                            player.addTempSkill('haitu_fnaf_yingsu_mark');
                        },
                    },
                },
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    if (player.getHistory('sourceDamage') != 0) {
                        var card = get.cardPile(function (card) {
                            return get.type(card, 'equip') == 'equip';
                        });
                        if (card) {
                            var next = player.gain(card, 'gain2');
                        }
                    }
                    if (player.getHistory('gain') != 0) {
                        var card1 = get.cardPile(function (card) {
                            return get.type(card, 'basic') == 'basic';
                        });
                        if (card1) {
                            var next = player.gain(card1, 'gain2');
                        }
                    }
                    if (player.hasSkill('haitu_fnaf_yingsu_mark')) {
                        var card2 = get.cardPile(function (card) {
                            return get.type(card, 'trick') == 'trick';
                        });
                        if (card2) {
                            var next = player.gain(card2, 'gain2');
                        }
                    }
                },
            },
            characterreplace: {
                haitu_Sulindchia: ['bjsulinqiya', 'haitu_Sulindchia'],
                haitu_re_hs_sthrall: ['hs_sthrall', 'haitu_re_hs_sthrall'],
                haitu_re_hs_jaina: ['hs_jaina', 'haitu_re_hs_jaina'],
                haitu_re_hs_finley: ['hs_finley', 'haitu_re_hs_finley'],
                bjchuanqilinglong: ['bjchuanqilinglong', 'haitu_Kawasaki_Linglong'],
            },
        },
        dynamicTranslate: {
            haitu_tuteng(player) {
                var str = '出牌阶段,你可以弃置X张牌并令一名角色获得';
                if (player.storage.haitu_tuteng_awake) {
                    str += '任意一个图腾';
                } else {
                    str += '随机基础图腾';
                }
                str += ',其受到伤害后随机失去一个图腾.(X为你本回合发动此技能次数)';
                return str;
            },
            YS_mimou(player, storage) {
                var str = '出牌阶段限';
                var num1 = player.countMark('YS_mimou_use');
                var num2 = player.countMark('YS_mimou_draw');
                var num3 = player.countMark('YS_mimou_discard');
                if (num1 == 1) {
                    str += '<span class=\"yellowtext\">1</span>';
                }
                if (num1 == 2) {
                    str += '<span class=\"thundertext\">2</span>';
                }
                if (num1 == 3) {
                    str += '<span class=\"firetext\">3</span>';
                }
                str += '次或你受到伤害后,你可以摸';
                if (num2 == 1) {
                    str += '<span class=\"yellowtext\">1</span>';
                }
                if (num2 == 2) {
                    str += '<span class=\"thundertext\">2</span>';
                }
                if (num2 == 3) {
                    str += '<span class=\"firetext\">3</span>';
                }
                str += '张牌并弃置';
                if (num3 == 1) {
                    str += '<span class=\"yellowtext\">1</span>';
                }
                if (num3 == 2) {
                    str += '<span class=\"thundertext\">2</span>';
                }
                if (num3 == 3) {
                    str += '<span class=\"firetext\">3</span>';
                }
                str += '张牌.';
                return str;
            },
            haitu_huazhao(player, storage) {
                var str = '每轮限一次,你可以重铸所有:';
                if (player.storage.haitu_huazhao_heart == true) {
                    str += '<span style="opacity:0.5">1.♥️️手牌,视为使用</span>';
                } else {
                    str += '1.♥️️手牌,视为使用';
                }
                if (player.storage.haitu_huazhao_heart == true) {
                    str += '<span style="opacity:0.5"><span class=\"firetext\">' + get.translation(player.storage.heart) + '</span>;</span>';
                } else {
                    str += '<span class=\"firetext\">' + get.translation(player.storage.heart) + '</span>;';
                }
                if (player.storage.haitu_huazhao_spade == true) {
                    str += '<span style="opacity:0.5">2.♠️️手牌,视为使用</span>';
                } else {
                    str += '2.♠️️手牌,视为使用';
                }
                if (player.storage.haitu_huazhao_spade == true) {
                    str += '<span style="opacity:0.5"><span class=\"thundertext\">' + get.translation(player.storage.spade) + '</span>;</span>';
                } else {
                    str += '<span class=\"thundertext\">' + get.translation(player.storage.spade) + '</span>;';
                }
                if (player.storage.haitu_huazhao_diamond == true) {
                    str += '<span style="opacity:0.5">3.♦️️手牌,视为使用</span>';
                } else {
                    str += '3.♦️️手牌,视为使用';
                }
                if (player.storage.haitu_huazhao_diamond == true) {
                    str += '<span style="opacity:0.5"><span class=\"yellowtext\">' + get.translation(player.storage.diamond) + '</span>;</span>';
                } else {
                    str += '<span class=\"yellowtext\">' + get.translation(player.storage.diamond) + '</span>;';
                }
                if (player.storage.haitu_huazhao_club == true) {
                    str += '<span style="opacity:0.5">4.♣️️手牌,视为使用</span>';
                } else {
                    str += '4.♣️️手牌,视为使用';
                }
                if (player.storage.haitu_huazhao_club == true) {
                    str += '<span style="opacity:0.5"><span class=\"greentext\">' + get.translation(player.storage.club) + '</span>;</span>';
                } else {
                    str += '<span class=\"greentext\">' + get.translation(player.storage.club) + '</span>;';
                }
                str += '选择完毕后令该项失效直至本技能没有可用选项.';
                return str;
            },
            fnaf_yichong(player) {
                var str = '出牌阶段限一次,你可以令一名其他角色交给你: 1.';
                if (!player.hasSkill('fnaf_wanghuo_basic')) str += '<span class=\"firetext\">一张</span>';
                if (player.hasSkill('fnaf_wanghuo_basic')) str += '<span class=\"firetext\">非</span>';
                str += '基本牌并令你';
                if (!player.hasSkill('fnaf_wanghuo_eb')) str += '<span class=\"firetext\">与其</span>';
                str += '本轮出牌阶段使用杀次数加1(不可叠加);2.';
                if (!player.hasSkill('fnaf_wanghuo_trick')) str += '<span class=\"thundertext\">一张</span>';
                if (player.hasSkill('fnaf_wanghuo_trick')) str += '<span class=\"thundertext\">非</span>';
                str += '锦囊牌并令你';
                if (!player.hasSkill('fnaf_wanghuo_et')) str += '<span class=\"thundertext\">与其</span>';
                str += '回复一点体力;3.';
                if (!player.hasSkill('fnaf_wanghuo_equip')) str += '<span class=\"yellowtext\">一张</span>';
                if (player.hasSkill('fnaf_wanghuo_equip')) str += '<span class=\"yellowtext\">非</span>';
                str += '装备牌并令你';
                if (!player.hasSkill('fnaf_wanghuo_eq')) {
                    str += '<span class=\"yellowtext\">与其</span>';
                }
                str += '摸一张牌,若其未交给你牌则横置你与本次选择的角色.';
                return str;
            },
            haitu_jifu(player) {
                if (player.storage.haitu_revolute == true) {
                    return '转换技,出牌阶段限一次,你可以将手牌:<span class="firetext">阴.摸,</span>阳.弃至本阶段失去牌数.(每次以此法至多摸或弃至五张牌) ';
                } else {
                    return '转换技,出牌阶段限一次,你可以将手牌<span class="legendtext">阳.弃,</span>阴.摸至本阶段失去牌数.(每次以此法至多摸或弃至五张牌)';
                }
            },
            haitu_revolute(player) {
                if (player.storage.haitu_revolute == true) {
                    return '转换技,当你使用牌时,你可以<span class="firetext">阳.弃置X张牌以令此牌额外结算一次;</span>阴.摸X张牌以取消此牌所有目标.(X为你本回合发动此技能的次数加1) ';
                } else {
                    return '转换技,当你使用牌时,你可以<span class="legendtext">阴.摸X张牌以取消此牌所有目标;</span>阳.弃置X张牌以令此牌额外结算一次.(X为你本回合发动此技能的次数加1)';
                }
            },
            haitu_tucheng(player) {
                if (player.storage.haitu_tucheng == true) {
                    return '转换技,你可以将手牌中一张<span class="legendtext">阳.非装备牌当作【解甲归田】使用;</span><span class="firetext">阴.装备牌当【万箭齐发】使用.</span>';
                } else {
                    {
                        return '转换技,你可以将手牌中一张</span><span class="firetext">阴.装备牌当【万箭齐发】使用;</span><span class="legendtext">阳.非装备牌当作【解甲归田】使用.';
                    }
                }
            },
        },
        translate: {
            xin_guaiwuzhizao: '???',
            haitu_cancel: '取消',
            haitu_cancel_info: '不选了,摆烂',
            haitu_tianjia: '添加技能',
            haitu_haitushenzi: '神选',
            haitu_guangdamage: '光属性',
            haitu_liaodamage: '圣属性',
            haitu_yinengdamage: '异能',
            haitu_moshudamage: '魔术',
            haitu_moshudamage1: '魔术',
            haitu_jibiandamage: '腐化',
            haitu_mabidamage: '麻痹',
            haitu_xianding: '限定',
            haitu_meat: '肉色',
            game: '游戏杂谈',
            helicopter: '武装直升机',
            haituCard: '海国图志',
            xin_guaiwuzhizao: '添加技能',
            foreigner: '海国图志',
            haitu_P: '阿P',
            haitu_Cobb: '道姆 科布',
            haitu_daomeng: '盗梦',
            haitu_daomeng_info: '转换技,出牌阶段限一次,你可以将一张阳.红色手牌当【洞烛先机】,阴.黑色手牌当【逐近弃远】使用',
            haitu_fuquan: '缚权',
            haitu_fuquan_info: '锁定技,若你未装备武器,你的攻击范围始终为零且跳过弃牌阶段',
            haitu_yiwei: '易位',
            haitu_yiwei_info: '出牌阶段限一次,你可以将手牌与你本回合被弃置的牌交换,若你的手牌数本次未/以此法变多,你回复/失去一点体力,你将手牌摸至体力上限',
            haitu_tiaodou: '挑逗',
            haitu_tiaodou_info: '你使用牌指定目标后,可以令其中一个目标将一张随机牌当【过河拆桥】对你使用',
            haitu_fnaf_hell: '黄金弗莱迪',
            haitu_fuemosi: '福尔摩斯',
            kongwu2: '空屋',
            kongwu2_info: '',
            kongwu: '空屋',
            kongwu_info: '每轮限一次,你的回合内,当你准备阶段、摸牌阶段、出牌阶段、弃牌阶段开始时,你可以重铸X张牌(X为你本轮发动此技能的次数),若如此做,直到下一轮游戏开始前,一名其他角色回合结束时,你可以按任意顺序额外执行所有你本轮游戏以此法跳过的阶段',
            fems_yanyi: '演绎',
            fems_yanyi_info: '一轮游戏内,一名其他角色的出牌阶段结束时,你可以记录其于此阶段内使用过牌和牌序,直到你的出牌阶段结束或新一轮游戏开始,当你出牌阶段结束时,你可以选择一名你以此法记录过的出牌阶段出牌数不小于你的其他角色,若如此做,你可以将一张手牌当作其出牌阶段使用过的第X张牌使用(X为你出牌阶段的出牌数,装备牌,延时锦囊牌不能记录,不计入记录的牌序)',
            haitu_Kevin: '凯文',
            haitu_Marvel_Quicksilver: '皮特罗',
            Marvel_jisu: '极速',
            Marvel_jisu_info: '出牌阶段开始时,你可以选择一项:1.本回合不能使用与本回合使用过牌花色相同的牌;2.本回合不能使用与本回合使用过牌花色不同的牌, 选择完毕后本回合你使用牌无距离次数限制,且你每使用一张牌便摸一张牌.  ',
            haitu_gta_BigSmoke: '梅尔文·哈瑞斯',
            haitu_duxiao: '毒枭',
            haitu_duxiao_info: '出牌阶段限一次,你可以交给一名其他角色一张♣️️牌并令其选择:1.重铸X张牌;2.交给你所有牌.(X为其本局成为此技能目标的次数)',
            haitu_White: '白某',
            haitu_ol_linghan: '凌寒',
            haitu_ol_linghan_info: '一张♣️️牌被使用时,你可以令此牌使用者对你造成一点冰属性伤害,若此时为你的回合内/外,你令【书阅】观看的武将牌数永久加1/摸一张牌并获得此牌',
            haitu_ol_zhefu: '蛰伏',
            haitu_ol_zhefu_info: '当你即将造成伤害时,你可以防止此伤害,改为令受伤角色执行一个非准备/结束阶段',
            haitu_ol_shuyue: '书阅',
            haitu_ol_shuyue_info: '当你使用牌或成为牌的目标时,你可以观看5张武将牌并用其中一张代替一名角色直至此牌结算完毕',
            haitu_zhongbao: '中饱',
            haitu_zhongbao_info: '出牌阶段,你可以观看牌堆顶等同于牌堆牌数个位数的牌,获得其中一张牌并将其余牌置入弃牌堆;你的♥️️普通锦囊牌视为【逐近弃远】',
            marvel_zhujia: '铸甲',
            marvel_zhujia_info: '锁定技,你的回合内,你使用牌后须弃置一张牌,若该牌离开的区域没有牌,则将对应区域的牌补至5张',
            marvel_yanfa: '研发',
            marvel_yanfa_info: '出牌阶段,你可以弃置X张牌并从游戏外获得一张随机锦囊牌.(X为本技能本回合发动次数)',
            haitu_Tony_Stark: '托尼·斯塔克',
            origin: '原创',
            haitu_hesheng: "<span style='color: #e47833'>贺晟</span>",
            haitu_lietou: '猎头',
            haitu_lietou_info: '准备阶段开始时/当你受到伤害后,你获得一名角色的<货>,你可以将一名角色区域内一张牌当作<货>置于其武将牌上',
            haitu_shangzhan: '商战',
            haitu_shangzhan_info: '锁定技,每轮开始时,你令所有没有<货>的角色依次将牌堆顶一张牌置于其武将牌上称之为<货>,可以声明一种牌的类别; 一名角色的出牌阶段限一次,其可以弃置其武将牌上的<货>,若此牌与你所声明的牌类别一致,其可视为使用任意一张该类别的基本牌或普通锦囊牌',
            'haitu_Emily Sanchez': '艾米莉·桑切斯',
            haitu_professor: '查尔斯·弗朗西斯',
            haitu_Kennidy: '约翰·肯尼迪',
            haitu_re_hs_yashaji: '界亚煞极',
            haitu_re_hs_jaina: '界吉安娜',
            haitu_rainCandy: '雨',
            haitu_liaoyu: '疗郁',
            haitu_liaoyu_info: '锁定技,你重置或翻至正面后,执行另一项',
            haitu_olyuji: '升天',
            haitu_olyuji_info: '你/其他角色的结束阶段,若你正/背面朝上,你指定随机数量随机其他角色,发现并可以选择一项与其依次执行:<br>1.回复一点体力;<br>2.失去一点体力;<br>3.摸一张牌;<br>4.被你弃置其区域内一张牌; <br>5.重置; <br>6.横置.<br>若此时为你的回合内,你可以将武将牌翻至背面向上以选择再次发动此技能.   ',
            haitu_olfanpu_info: '每名角色限一次,当你即将对其他角色造成伤害时,你可以令此伤害加/减1,该角色本局游戏无法执行<升天>奇/偶数项的内容. ',
            haitu_olfanpu: '返璞',
            haitu_regulus: '星锑',
            haitu_zaodong: '噪动',
            haitu_zaodong_info: '转换技,锁定技,你使用牌指定阳.你;阴.其他角色为目标后,令你下次的伤害值,回复值或摸牌数中的一项加1.(不可叠加)  ',
            haitu_erru: '耳濡',
            haitu_erru_info: '出牌阶段限一次,你可以声明一种花色并与攻击范围内所有角色依次重铸其该花色所有牌,以此法获得牌最少/多的角色失去/回复一点体力',
            haitu_muran: '目染',
            haitu_muran_info: '每回合限一次,你可以将一张♣️️手牌当作【沙棠】使用',
            haitu_ol_mitu: '迷途',
            haitu_ol_mitu_info: '转换技,锁定技,你的回合内,你使用牌后令你的阳.红,阴.黑色手牌视为随机非装备牌直至回合结束或你发动本技能,若你使用的牌为非转化牌,你回复一个装备栏.        ',
            haitu_ol_xuanpo: '旋破',
            haitu_ol_xuanpo_info: '出牌阶段限一次或你受到伤害后,你可以交换手牌与未废除装备栏的数量,并获得等同于变化数的装备技能直至你下回合开始. ',
            troopSkill: '驻扎技',
            PizzaPlex: '披萨大都会',
            Marvel: '漫威宇宙',
            comedy: '众妙之门',
            fnaf: '玩具熊的午夜后宫',
            ben10: '少年骇客',
            Cthulhu: '不可名状',
            haitu_yunting: '芸婷',
            haitu_PeterParker: '彼得帕克',
            haitu_verting: '维尔汀',
            haitu_Sulindchia: '<span class="firetext">苏琳奇亚</span>',
            haitu_Military: '<span class="greentext">米莉特瑞</span>',
            fnaf_RoxyRaceWay: '赛道',
            fnaf_RoxyRaceWay_info: "<span class=legendtext>欢迎来到披萨大都会</span>,   你可以将一张手牌中的装备牌当'无中生有'使用,且你受到转化牌的伤害加1",
            fnaf_factory: '车间',
            fnaf_factory_info: '<span class=legendtext>欢迎来到披萨大都会</span>,出牌阶段限一次,你可以创造一张任意花色点数属性的任意牌',
            haitu_yuekong: '越空',
            haitu_yuekong_info: '每轮开始时,你可以令任意名角色本轮获得一个你发现的地图技能;你发动地图技能后可以摸一张牌',
            haitu_re_xiangting: '洄溯',
            haitu_re_xiangting_info: '锁定技,你摸牌时,改为从牌堆或弃牌堆中发现并获得等量牌',
            haitu_hundun: '千相',
            haitu_hundun_info: '锁定技,每轮开始时,你随机获得七个技能,你每使用一张牌,选择失去一个此法获得的技能',
            haitu_zhuluan: '助乱',
            haitu_zhuluan_info: '每回合限一次,其他角色造成伤害后,你可以选择你武将牌外一个技能,你失去并令其获得该技能',
            haitu_qingchao: '倾潮',
            haitu_qingchao_info: '出牌阶段开始时,你可以声明你的:1.手牌上限,并对至多X名角色造成一点伤害;2.出杀次数,并令至多X名角色回复一点体力;3.攻击范围,弃置一名角色X张牌.若如此做,结算后将你选择的属性调零.(X为你此法选择的属性值且至少为1,无法用此技能将正负无穷大归零)',
            haitu_fushi: '缚势',
            haitu_fushi_info: '锁定技,你的攻击范围基数为已损失体力值',
            haitu_jieduan: '戒断',
            haitu_jieduan_info: '锁定技,每轮/出牌阶段开始时,你声明一种花色并摸一张牌,你获得牌后,重铸其中与你上一次以此法声明花色不同的牌',
            xin_lianxin: '炼心',
            xin_lianxin_info: '你可以重铸X张牌并视为使用一张基本牌,若你重铸的牌花色不全部相同则你的锁定技本轮失效.(X为你本阶段失去牌数) ',
            haitu_sulan: '肃澜',
            haitu_sulan_info: '你使用牌后,可以选择令手牌上限、攻击范围、出牌阶段使用杀的次数其中一个属性的基数值加1,另选一个属性基数值减1,若上述属性每有一对相等的值,则你摸一张牌',
            haitu_fengyuan: '逢缘',
            haitu_fengyuan_info: '出牌阶段,每名角色限一次,你可以令其:1.摸一张牌并令你选择其区域内一张牌置入<箱庭>;2.弃置一张牌并视为对你使用一张【杀】;3.获得一张<箱庭>,本回合无法使用牌且无法成为牌的目标. ',
            haitu_xiangting: '箱庭',
            haitu_xiangting_info: '你不因此技能获得牌后,可以复制其中一张牌并扣置于武将牌旁称为<箱庭>(<箱庭>最多同时存在4张牌);出牌阶段限一次或你受到伤害后,你可以将手牌摸至与<箱庭>数量相同并交换任意张手牌与<箱庭>',
            haitu_Marvel_ganying: '感应',
            haitu_Marvel_ganying_info: '当你造成/受到伤害前,若你的手牌颜色均相同,你可展示之并获得受伤角色/伤害来源一张牌',
            haitu_Marvel_caosi: '波丝',
            haitu_Marvel_caosi_info: '出牌阶段限两次,你重铸一张牌并可以选择移动场上一张与之同花色牌.若你移动了自己的牌,你可视为对获得牌的角色使用一张【杀】',
            haitu_saity: '赛蒂',
            haitu_camo: '迷彩',
            haitu_camo_info: '锁定技,你视为装备了【玲珑狮蛮带】',
            haitu_diaobing: '调兵',
            haitu_diaobing_info: '准备/结束阶段,你可以重铸一张牌令一名角色执行一个主要阶段',
            haitu_guance: '观测',
            haitu_guance_info: '锁定技,回合开始时或有你造成/受到非属性伤害后,你随机记录一个未记录的属性;一名角色即将受到伤害时,你可以将伤害属性改为记录属性并移除之',
            haitu_shiyan: '试验',
            haitu_shiyan_info: '出牌阶段限一次/准备阶段/你使用牌/受到非属性伤害后,可以令一名角色获得一点护甲并对其造成一点随机属性伤害',
            'haitu_Stephen Strange': '史蒂芬·斯特兰奇',
            haitu_aoyi: '奥秘',
            haitu_aoyi_info: '出牌阶段每两轮限一次,若你本回合共使用了0/1/2张牌,则你可以将一张牌当铜/银/金卡法术使用',
            haitu_Rogan: '詹姆斯·豪利特',
            haitu_chaoyu: '超愈',
            haitu_chaoyu_info: '锁定技,结束阶段,你回复一点体力并摸X张牌.(X为你本回合造成伤害数)',
            haitu_zhiwu: '植武',
            haitu_zhiwu_info: '限定技,出牌阶段,你可以失去任意点体力并摸等量的牌,依次发现等量张武器牌并获得其技能,且你本局游戏使用的所有普通杀均视为【刺杀】',
            haitu_jianyi: '坚毅',
            haitu_jianyi_info: '锁定技,你废除判定区,你的手牌上限基数为你的体力上限',
            haitu_fnaf_Evan_afton: '埃文·阿夫顿',
            haitu_afu: '阿福',
            haitu_Michael: '米迦勒',
            haitu_Dante: '但丁',
            haitu_kingpin: '威尔逊·菲斯克 ',
            haitu_daylightdream: "<span style='color: #e328b7'>白日梦</span>",
            haitu_tiewan: '铁腕',
            haitu_tiewan_info: '你受到其他角色的伤害/对其他角色造成伤害时,可以弃置/获得其手牌中所有从你手中获得的牌,此伤害减/加1',
            haitu_rongrong: '熔融',
            haitu_rongrong_info: '出牌阶段,你可以将手牌中的两张装备牌合成一张新的装备牌',
            haitu_huimeng: '绘梦',
            haitu_huimeng_info: '每名角色的出牌阶段限一次,其可以创造并获得一张任意牌,你获得一张此牌的复制并可以重铸一张牌',
            haitu_wantong: '顽童',
            haitu_wantong_info: '当你成为其他角色使用黑色牌的目标时,可以使用一张牌',
            haitu_GwenDolyn: '田小玟',
            haitu_shuxiu: '术修',
            haitu_shuxiu_info: '出牌阶段限一次,你可以弃置一张牌,若此牌不为红/黑色,则你依次使用牌堆底/顶X张牌.(X为本局此技能发动的次数且最多为3,以此法使用的牌无距离限制)',
            haitu_shanchou: '善筹',
            haitu_shanchou_info: '每阶段限一次,当一张牌不因使用移出你的区域后,可以观看牌堆中与本次失去的第一张牌点数、花色、类型相同的牌各一张,可以将其分别置于牌堆顶、牌堆底、一名角色的手牌区',
            haitu_fnaf_vannessa: '凡妮莎',
            haitu_xianmeng: '陷梦',
            haitu_xianmeng_info: '每轮开始时,你可以令所有角色本轮所有:<br>1.♦️️手牌视为【骤雨】;<br> 2.♣️️手牌视为【酒】;<br>3.♠️️手牌视为【冰杀】;<br>4.♥️️手牌视为【草药】.若你上一轮选择过梦境,则本轮内你只能选择与其序号相邻的梦境',
            fnaf_yichong_off: '宜宠',
            fnaf_canchuan: '残喘',
            fnaf_canchuan_info: '宗族技,每轮限一次,你可以将你场上的所有牌当【桃】对同族角色使用',
            haitu_Elizabeth_afton: '伊丽莎白·阿夫顿',
            fnaf_wanghuo: '罔祸',
            fnaf_wanghuo_info: '锁定技,当你失去最后一张因<宜宠>获得的牌后,你执行一项:1.删除<宜宠>描述中一个<与其>并选择与一名其他角色各受到一点无来源雷电伤害.  2.将<宜宠>描述中的一个<一张>改为<非>并失去一点体力,获得一点护甲.  ',
            fnaf_yichong: '宜宠',
            fnaf_yichong_info: '出牌阶段限一次,你可以令一名其他角色交给你: 1.<span class="firetext">一张</span>基本牌并令你<span class="firetext">与其</span>本轮出牌阶段使用杀次数加1(至多为1); 2.<span class="thundertext">一张</span>锦囊牌并令你<span class="thundertext">与其</span>回复一点体力;3.<span class="yellowtext">一张</span>装备牌并令你<span class="yellowtext">与其</span>摸一张牌, 若其未交给你牌则横置你与本次选择的角色',
            haitu_fnaf_yexun: '夜巡',
            haitu_fnaf_yexun_info: '转换技,每回合限一次,你可以将一张:阳.红色手牌当【以逸待劳】阴.黑色手牌当【照明弹】使用',
            haitu_yuting: '盗梦',
            haitu_yuting_info: '一张转化的即时牌因使用结算后,你可以使用组成此牌的一张实体牌',
            haitu_yishi: '异食',
            haitu_yishi_info: '每回合限两次,你可以将一张非红色牌当任意食物牌使用,且目标角色本轮成为黑色牌的目标时需重铸所有手牌',
            haitu_tom: '汤姆',
            haitu_fnaf_Gregory: '格雷高里',
            tom_jueci: '捕鼠',
            tom_jueci_info: '准备阶段,你可以选择场上一张牌,并将此牌当【决斗】使用',
            tom_yemao: '液猫',
            tom_yemao_info: '锁定技,你受到伤害前,获得此次造成伤害的卡牌所有技能',
            tom_buzhe: '不折',
            tom_buzhe_info: '每轮各限一次,当你受到伤害或即将失去牌时,你可以防止之并摸一张牌',
            haitu_diangong: '电工',
            haitu_diangong_info: '宗族技,每回合限一次,你造成或受到伤害后,你可以发现一张🃏牌并将其交给一名同族角色',
            haitu_MaxWell: '田马克',
            haitu_weishan: '伪善',
            haitu_weishan_info: '出牌阶段限一次,你可以指定任意名角色并摸等量的牌,你交给以此法指定的角色各一张牌',
            old_baizhao: '百招',
            old_baizhao_info: '你使用或打出非虚拟牌时,可以发现一张非装备牌并视为使用之',
            haitu_Zlvini: '<span class="thundertext">茨尔维妮</span>',
            haitu_dongchao: '冻潮',
            haitu_dongchao_info: '锁定技,你的弃牌阶段改为将手牌摸/弃至体力上限',
            haitu_fnaf_Wiliam_Afton: '威廉 阿夫顿',
            haitu_fnaf_juantu: '卷土',
            haitu_fnaf_juantu_info: '转换技,你可以使用阳.牌堆底,阴.场上一张不属于你的牌',
            haitu_fnaf_duohai: '夺骸',
            haitu_fnaf_duohai_info: '出牌阶段限X次,你可以与一名其他角色依次选择并展示对方一张牌,将其中一张牌置于牌堆底,另一张选中的♠️️/♥️️/♦️️/♣️️牌当作【言笑】/【火山】/【洪水】/【鬼幽结】置于你判定区内.(Ｘ为你本回合造成伤害次数加1)',
            haitu_Nyarlathotep: '奈亚拉托提普',
            re_aoshu: '奥术',
            haitu_Lara: '劳拉',
            re_aoshu_info: '出牌阶段限两次,你可以将一张红/♠️️牌当流星火雨/洞烛先机使用',
            re_bingjia: '冰甲',
            re_bingjia_info: '出牌阶段,你可以将一张手牌背面朝上置于一名角色的武将牌上(每名角色最多同时拥有一张<冰甲>牌),当其成为其他角色的与此牌花色相同的牌的目标时,其移去此牌,获得一点护甲,并且本回合内防止一切伤害',
            haitu_tiaolv: '调律',
            haitu_tiaolv_info: '出牌阶段限两次,你可以弃置至少两张同名的牌并从牌堆中获得等量不同名的牌. ',
            haitu_yangliu: '洋流',
            haitu_yangliu_info: '结束阶段,若你本回合出牌阶段使用牌数等于你的手牌数,则直到你下回合开始,一名角色开始摸牌阶段前,你可以取消之并摸两张牌,交给其两张牌',
            haitu_fnaf_yingsu: '影宿',
            haitu_fnaf_yingsu_info: '结束阶段,若你本回合获得过牌/造成过伤害/回复过体力,你从牌碓中获得一张基本/装备/普通锦囊牌',
            haitu_fnaf_huayan: '化魇',
            haitu_fnaf_huayan_info: '锁定技,当你不因此技能即将执行以下事件时,任意减少其触发值(至多减2):  1.对一名角色造成伤害; 2.令一名角色回复体力;3.摸牌, 若如此做,你选择执行等量上述其他选项.(此法执行的事件触发值为1)',
            foreigner: '海国图志',
            haitu_refresh: '界限突破',
            haitu_re_tiaolv: '调律',
            haitu_re_tiaolv_info: '出牌阶段限两次,你可以展示手牌中两张相邻且未以此法选择过的同名牌并将其中一张当【洞烛先机】使用',
            re_qisha_ju_info: '锁定技,每当你使用一张牌,需弃置一张牌',
            re_qisha_kuang_info: '锁定技,每当你使用一张牌指定惟一目标,有50%的机率指定错误的目标',
            re_qisha_nu_info: '锁定技,你使用的卡牌造成的伤害+1;每当你使用一张牌,有65%的机率失效',
            re_qisha_yi_info: '锁定技,你不能成为非敌方角色的卡牌目标',
            re_qisha_wang_info: '锁定技,你的摸牌数始终-1',
            re_qisha_hen_info: '锁定技,每当一名敌方角色回复一点体力,你失去一点体力',
            re_qisha_ao_info: '锁定技,你的手牌上限-2',
            haitu_jian: '汲暗',
            haitu_jian_info: '每回合限一次,其他角色造成伤害时,你可令其摸一张牌并代替其成为伤害来源',
            haitu_re_hs_sthrall: '界萨尔',
            haitu_Michael_Afton: '迈克 阿夫顿',
            haitu_lingdao: '灵导',
            haitu_lingdao_info: '出牌阶段限一次,你可以令一名角色将手牌数/体力值调整为其体力值/手牌数',
            haitu_re_hs_finley: '界芬利',
            haitu_saohei: '扫黑',
            haitu_saohei_info: '准备阶段,你可以令一名角色摸一张牌,若其不为你,则依次展示其每张未展示过的牌,若展示到黑色牌,你视为对其使用一张【雷杀】',
            haitu_suoji: '索骥',
            haitu_suoji_info: '出牌阶段或你受到伤害后,你可以进行一次判定,若结果为♥️️/♦️️/♠️️/♣️️,你摸/重铸/弃置/使用一张牌,此技能本回合失效直至与判定牌花色相同的牌置入弃牌堆',
            re_hs_maoxian: '奇旅',
            re_hs_maoxian_info: '出牌阶段限两次,你可以失去一个技能以选择:1.发现一个技能并获得之;2.重置所有技能使用次数.',
            haitu_guozai: '过载',
            haitu_guozai_info: '出牌阶段限一次,你可以将手牌补至4张,直至此阶段结束时若你未再造成伤害,则弃置等量的牌',
            haitu_zuling: '祖灵',
            haitu_zuling_info: '觉醒技,准备阶段,若你已发动过3次<图腾>,你减一点体力上限,并将<图腾>描述中<获得一个随机基础图腾>改为<获得任意一个图腾(若有4个则改为替换一个图腾)>.         ',
            haitu_tuteng: '图腾',
            haitu_tuteng_info: '出牌阶段,你可以弃置X张牌并令一名角色获得一个随机基础图腾,其受到伤害后随机失去一个图腾.(X为你本回合发动此技能次数)',
            re_qisha: '七煞',
            re_qisha_info: '锁定技,你造成/受到伤害后,你发现一个负面技能并令受伤角色/伤害来源获得之(该角色不为你),一名角色结束回合时移除一个此法获得的技能并令你摸一张牌',
            haitu_fnaf_jiexin: '全勤',
            haitu_fnaf_jiexin_info: '当你每回合使用第X张牌时,若构成此牌的实体牌数量为X,你摸X张牌',
            haitu_ranxin: '燃衅',
            haitu_ranxin_info: '出牌阶段限一次,你可以将手牌中一种花色的所有牌当【火攻】使用,你造成火焰伤害后,此技能本回合视为未发动过',
            haitu_fnaf_ranhaitu: '燃衅',
            haitu_fnaf_ranhaitu_info: '出牌阶段限一次,你可以将手牌中一种花色的所有牌当【火攻】使用,你造成火焰伤害后,此技能本回合视为未发动过',
            Marvel_zhugan: '蛛感',
            Marvel_zhugan_info: '当你成为其他角色的伤害牌的目标时,你可以将手牌摸至手牌上限;你可以用所有手牌交换以你为目标且未对你造成伤害的伤害牌',
            Marvel_menpiao: '门票',
            Marvel_menpiao_info: '你可以将♣️️牌当【闪】或【无懈可击】使用、打出;你可以将【闪】/【无懈可击】当你上一次以此法失去的♣️️非装备牌使用或打出.(无属性)',
            haitu_Marvel_gwen_stacy: '格温 史黛西',
            haitu_yeguang: '曳光',
            haitu_yeguang_info: '出牌阶段开始时,你可以将任意张牌当无距离限制的【杀】使用,你本回合接下来使用X张牌时,你摸或弃置场上一张牌.(X为组成此牌实体牌数量)',
            haitu_jieyan: '戒严',
            haitu_jieyan_info: '当你造成或受到伤害后,你可以摸伤害值张牌,当前回合内你使用牌无距离次数限制且所有角色造成的伤害均防止之',
            haitu_bingxi: '屏息',
            haitu_bingxi_info: '当你造成伤害时,你可以重铸伤害值双倍数量的牌防止之,若如此做本次防止的伤害值将叠加到你造成的下一次伤害上',
            haitu_Kawasaki_Linglong: '<span class="legendtext">川崎玲珑</span>',
            haitu_YS_infochan: '情报酱',
            YS_mimou: '三衡',
            YS_mimou_info: '出牌阶段限1次或你受到伤害后,你可以摸2张牌并弃置3张牌',
            YS: '病娇模拟器',
            haitu_zhimeng: '植梦',
            haitu_zhimeng_info: '出牌阶段限一次,你可以将一张手牌当【偷梁换柱】使用',
            haitu_liushou: '留守',
            haitu_liushou_info: '一名角色的结束阶段,若你本回合未成为过其他角色使用牌的目标,你可以发现并使用一张装备牌',
            haitu_lingqiao: '灵巧',
            haitu_lingqiao_info: '每回合限一次,当你使用牌时,你可以重铸X张牌.(X为你本次使用牌与上一张使用牌的牌名字数差)',
            YS_qiexi: '窃息',
            YS_qiexi_info: '锁定技,你摸牌时,卜算本次摸牌数并可改为从牌堆底摸牌',
            YS_nance: '莫测',
            YS_nance_info: '锁定技,你使用/打出/弃置一张牌后,根据此牌花色将<三衡>的对应数字与描述中第1/2/3个数字交换位置:♦️️—数字1,♣️️—数字2,♠️️—数字3.         ',
            haitu_jihuo: '激活',
            haitu_jihuo_info: '你的回合结束后,你可以弃置一张牌进行一个额外的回合,你失去2X点体力.(X为你本轮发动此技能次数减1)',
            haitu_happinessking: '美乐迪',
            haitu_chaotianjiang: '超天酱',
            haitu_huazhao: '花招',
            haitu_huazhao_info: '每轮限一次,你可以重铸所有:1.♥️️手牌,视为使用【桃】;2.♠️️手牌,视为使用【杀】;3.♦️️手牌,视为使用【酒】;4.♣️️手牌,视为使用【闪】.选择完毕后令该项失效直至本技能没有可用选项',
            haitu_fnaf_zuosui: '作祟',
            haitu_fnaf_zuosui_info: '任何时候,你可以合法使用一张牌,你以此法使用的牌数不能超过其他角色使用牌数和',
            haitu_ducai: '独裁',
            haitu_ducai_info: '出牌阶段限一次,你可以展示一张手牌并令你手牌中该花色数量牌翻倍,所有其他角色本回合无法使用与此牌花色相同的牌',
            haitu_zhengfu: '征服',
            haitu_zhengfu_info: '当你使用【杀】或伤害类锦囊牌指定其他角色为目标后,你可以指定其中一个目标并声明基本/锦囊/装备牌,其需交给你一张相同类别的牌或受到你的一点神圣伤害',
            haitu_re_caesar: '界凯撒',
            haitu_fnaf_lingti: '灵体',
            haitu_fnaf_lingti_info: '出牌阶段限一次,你可以将你的体力值或手牌数调整为二者较高的数值',
            haitu_fnaf_ruyu: '濡狱',
            haitu_fnaf_ruyu_info: '结束阶段,你可以选择一项与随机数量的随机其他角色依次执行:1.回复一点体力;2.失去一点体力;3.摸一张牌;4.被你弃置区域内一张牌;5.重置武将牌;6.横置武将牌',
            haitu_chongsheng: '重生',
            haitu_chongsheng_info: '每局游戏限两次,当你处于濒死状态时,你可以弃置所有牌并将体力和手牌数回复或摸至2,获得<雨露><恩泽><幻觉>其中一个技能.         ',
            haitu_shuyou: '书友',
            haitu_shuyou_info: '锁定技,每当全场角色累计使用四种花色的牌时,你摸一张牌并交给本次使用牌的角色一张牌',
            haitu_ducai: '独裁',
            haitu_ducai_info: '出牌阶段限一次,你可以展示一张手牌并令手牌中该种花色牌数量翻倍,且所有其他角色本轮无法使用或打出与此牌花色相同的牌.         ',
            haitu_re_hs_malfurion: '界玛法里奥',
            haitu_fnaf_cassidy: '卡西迪',
            haitu_fnaf_changyuan: '长怨',
            haitu_fnaf_changyuan_info: '锁定技,准备阶段,你随机获得<逾界><穷追><灵体><濡狱>其中两个技能直至回合结束',
            haitu_xinghan: '星瀚',
            haitu_xinghan_info: '锁定技,准备阶段,你为数字1至7本回合随机对应一个非装备牌;你可以将本回合即将使用的第X张牌将当前数字对应的牌使用',
            haitu_fnaf_yujie: '逾界',
            haitu_fnaf_yujie_info: '出牌阶段限两次,你可以弃置任意张牌名相同的牌并从牌堆中获得等量牌名不同的牌',
            haitu_fnaf_qiongzhui: '穷追',
            haitu_fnaf_qiongzhui_info: '结束阶段,你可以将任意张牌当无距离限制的【刺杀】使用并摸等同于本次使用实体牌数量的牌',
            haitu_fnaf_xunshi: '寻食',
            haitu_fnaf_xunshi_info: '出牌阶段限一次,你可以将一张牌当食物牌使用',
            haitu_fnaf_yidong: '异动',
            haitu_fnaf_yidong_info: '你使用牌时可以重铸一张牌',
            haitu_fnaf_xiezou: '偕奏',
            haitu_fnaf_xiezou_info: '出牌阶段限一次,你可以重铸一种花色的所有手牌并令一名其他角色失去一点体力',
            haitu_fnaf_hailie: '海猎',
            haitu_fnaf_hailie_info: '当你使用伤害牌指定其他角色为目标后,你可以指定其中一个目标,其需交给你一张与此牌花色相同的牌或受到你的一点伤害',
            haitu_fnaf_yejing: '夜惊',
            haitu_fnaf_yejing_info: '锁定技,你额外拥有四个未激活的<复仇之灵>,每轮开始时,你激活一个<复仇之灵>(没有则不激活),并摸等同于场上激活<复仇之灵>数量的牌,视为对所有拥有<邦尼>/<奇卡>/<霍斯>/<弗莱迪>的其他角色依次使用【棉里针】/【趁火打劫】/【决斗】/【机关蜂】.当你拥有/没有复仇之灵时,切换对应的武将牌',
            haitu_fnaf_jinwu: '金屋',
            haitu_fnaf_jinwu_info: '锁定技,你的体力上限不会发生变化;你受到的伤害与失去体力时,防止之并改为弃置等量牌,你选择激活一个亡灵',
            haitu_fnaf_qihun: '栖魂',
            haitu_Chauvin: '肖万',
            haitu_xieli: '胁力',
            haitu_xieli_info: '出牌阶段,每名受伤角色限一次,你可以展示一张伤害牌,为其指定一名使用目标并令其获得之,其对你指定的目标使用此牌(需合法),若此牌造成伤害,你摸并交给其一张牌.         ',
            haitu_yuhe: '愈合',
            haitu_yuhe_info: '一名角色的回合结束后,你可以令一名角色回复一点体力或摸一张牌,每隔三回合限一次',
            haitu_shouhu: '守护',
            haitu_shouhu_info: '锁定技,出牌阶段开始时,你需选择令手牌中所有的【杀】本阶段视为【草药】或【舒筋散】',
            haitu_guangying: '光影',
            haitu_guangying_info: '锁定技,你使用牌无距离限制,其他角色计算与你的距离时加1',
            xin_baizhao: '百招',
            xin_baizhao_info: '当你使用非虚拟牌时,你可以发现一张牌并视为使用之',
            xin_baizhao_off_info: '冷知识:装备牌和延时锦囊需要有实体牌才能生效',
            haitu_re_angel: '界天使',
            haitu_re_hs_malfurion_prefix: '界',
            haitu_re_hs_jaina_prefix: '界',
            haitu_re_angel_prefix: '界',
            haitu_re_hs_finley_prefix: '界',
            haitu_re_hs_sthrall_prefix: '界',
            haitu_re_caesar_prefix: '界',
            haitu_re_hs_yashaji_prefix: '界',
            haitu_Wade: '韦德',
            haitu_Tenpenny: '弗兰克·汤普尼',
            haitu_yuanjie: '源界',
            haitu_yuanjie_info: '每回合各限一次,当你使用非蓄谋牌指定目标/成为其他角色使用非蓄谋牌的目标后,若目标唯一,你可以取消之并令使用者:<br>1.对原目标使用牌堆中随机张点数和等于原牌的牌;<br>2. 依次蓄谋此牌所有实体牌. ',
            haitu_juzhen: '矩阵',
            haitu_juzhen_info: '锁定技,你使用非手牌时,记录其点数置入矩阵序列.当你成为其他角色使用已记录点数牌的目标时,你摸一张牌并移除该点数.         ',
            haitu_legacy: "<span style='color: #FF00FF'>姜饼</span>",
            haitu_neo: '尼奥',
            haitu_Louis_XVI: '路易·奥古斯特',
            haitu_yinjun: '引军',
            haitu_yinjun_info: '其他角色的回合开始时,若其手牌数比你少,你可以令其摸一张牌并选择:1.对你使用一张[【杀】;2.本回合攻击范围恒为0',
            haitu_neiluan: '内乱',
            haitu_neiluan_info: '当你造成或受到伤害时,你可以选择一项:1.摸X张牌(X为攻击范围内包含你的角色数);2.从牌堆或弃牌堆中随机获得一张装备牌',
            haitu_suigeng: '随更',
            haitu_suigeng_info: '转换技,结束阶段,你可以视为使用一张牌名字数为Ｘ的即时牌并增加一点手牌上限.(X为你本回合使用牌的阳.数量,阴.牌名字数和)',
            haitu_fnaf_yejing_instruction: '说明',
            haitu_fnaf_yejing_instruction_info: '复仇之灵:四个复仇之灵分别为: 加布里埃尔、杰里米、苏西、弗里茨,是连环杀手威廉 阿夫顿击杀的无辜儿童,死后灵魂附身在电子机器人身上,会在每轮开始时相继苏醒,激活状态下变成杀人玩偶在人间展开复仇亦或伤及无辜.本质是不同的小标记,复仇之灵具有不同的移动规则和对应负面效果,其对应技能只能被拥有<栖魂>的角色使用.在激活前后都可以为金熊提供防御力和技能,激活后会随着游戏进行和部分技能的作用移动给其他角色并具有特殊效果,非武将牌的<复仇之灵>激活后将在拥有者死亡时或受到火焰伤害前清除之',
            haitu_fnaf_qihun_info: '锁定技,你不受<复仇之灵>的负面效果影响;准备阶段,本回合你视为拥有你已有的两个随机<复仇之灵>的各一个随机对应技能;一名角色使用♥️️/♦️️/♠️️/♣️️牌时,移动已激活的<邦尼>/<奇卡>/<霍斯>/<弗莱迪>',
            haitu_juzhu: '剧著',
            haitu_juzhu_info: '锁定技,每轮开始时,若牌堆中没有武将牌,则你随机创造数量等同于玩家数双倍的武将牌洗入牌堆中;出牌阶段限一次,你可以将一张牌当任意武将牌使用',
            haitu_shuomingjuzhu: '说明',
            haitu_shuomingjuzhu_info: '武将牌:以一名角色为目标使用,是把一张武将牌作为普通三国杀卡牌的形式,使用者选择武将牌包含的武将牌一个技能,令目标获得并替换上一个以此法获得的技能. ',
            haitu_ruxi: '入戏',
            haitu_ruxi_info: '锁定技,当你成为武将牌的目标时,你将手牌数摸/弃至与此牌点数相同.(至多摸至5)',
            haitu_William_Shakespeare: '威廉 莎士比亚',
            haitu_history: '岁月史书',
            movie: '人生如戏',
            haitu_rebenghai: '崩骇',
            haitu_rebenghai_info: '锁定技,你使用牌时,令你与此牌花色相同的手牌本回合视为以下对应花色的牌: 1.♦️️:【火攻】;2.♠️️:【冰杀】;3.♣️️:【水淹七军】. ',
            haitu_tongshe: '统摄',
            haitu_tongshe_info: '锁定技,蓄力技(0/Infinity),回合开始时,你令本回合可使用杀、技能的次数达到上限并获得等量蓄力点;出牌阶段,你可以消耗一个蓄力点选择令你本回合使用过杀或一个技能的次数减1',
            haitu_buju: '布局',
            haitu_buju_info: '出牌阶段限一次,你可以观看三个未获得的战法并可以选择消耗对应的费用获得任意个记录的战法,否则你获得一个蓄力点',
            haitu_touwei: '投喂',
            haitu_touwei_info: '每回合每种类型的牌限一次,你可以将一张牌当【魔法邮票】使用',
            haitu_hualiao: '话聊',
            haitu_hualiao_info: '结束阶段或你造成/受到伤害后,你可以令一名角色下次成为【魔法邮票】的目标时无法抽中一个效果,若其无法获得的奇/偶数效果最多,你随机获得牌堆中一张黑/红色牌',
            haitu_shuomingshenyou: '说明',
            haitu_shuomingshenyou_info: '选择出牌时,可正常发动技能,否则请查看人物旁的标记',
            haitu_zhihuan: '置幻',
            haitu_zhihuan_info: '一名角色使用非转化牌时,若【花招】中不含此牌名,你可以令包含此牌花色的选项失效直至【花招】没有可用选项并交换此牌与【花招】描述中与此牌花色相同的选项的牌名',
            haitu_zhongbai: '钟摆',
            haitu_chue: '除恶',
            haitu_chue_info: '当你造成或受到伤害时,受伤角色可以选择:1.重铸2.摸一张牌,伤害来源执行另一项',
            haitu_curie: '居里夫妇',
            haitu_chuangshi: '创世',
            haitu_chuangshi_info: '当你使用或打出非虚拟牌时,你可以发现一张即时牌并视为使用之',
            1999: '重返未来1999',
            haitu_Askill: '双锋',
            haitu_re_zhongbai: '钟摆',
            haitu_re_zhongbai_info: '锁定技,你每回合使用每种花色的首张牌无距离次数限制',
            haitu_revolute: '交响',
            haitu_jifu: '羁浮',
            haitu_jifu_info: '转换技,出牌阶段限一次,你可以将手牌阳.弃,阴.摸至本阶段失去牌数.(每次以此法至多摸或弃至五张牌)',
            haitu_revolute_info: '转换技,当你使用有目标的牌时,你可以:阳.弃置X张牌令此牌额外结算一次;阴.摸X张牌以取消其所有目标.(X为你本回合发动此技能的次数加1)        ',
            haitu_neo: '尼奥',
            game: '游戏杂谈',
            haitu_Askill_info: '出牌阶段开始时,你可以重铸两张点数不同的牌.若如此做,你本回合令点数不在二者之间的手牌视为【杀】.        ',
            haitu_Lilya: '莉莉娅',
            haitu_zhongbai_info: '锁定技,你每使用四种花色的牌时,令所有技能视为未发动过',
            haitu_colorfuldream: '<span class="yellowtext">彩梦</span>',
            qy_wanwu: '万物',
            qy_wanwu_info: '当你受到伤害时,可以将一名角色一个技能更换为随机技能',
            haitu_hualiao: '话聊',
            haitu_hualiao_info: '结束阶段或你造成/受到伤害后,你可以令一名角色下次成为【魔法邮票】的目标时无法抽中一个效果,若其无法获得的奇/偶数效果最多,你随机获得牌堆中一张黑/红色牌',
            _haitu_shown: '展示',
            haitu_pochuang: '破窗',
            haitu_cancel: '取消',
            haitu_cancel_info: '不选了,摆烂',
            haitu_doumao_info: '每回合每种花色的牌限一次,当你使用牌指定唯一目标时,可以将此牌改为一张本回合未以此法转化过的牌名字数与原牌相同的基本或普通锦囊牌. ',
            haitu_tianjia: '添加技能',
            haitu_Bskill: '交和',
            haitu_bobo: '波尔布特',
            haitu_naji: '纳祭',
            haitu_naji_info: '锁定技,你无视【纱布】的效果;每名角色的出牌阶段限一次,其可以将一种装备区里没有的【纱布】置入一个装备栏.若如此做你可以选择随机使用牌堆或弃牌堆中一张对应栏位的装备牌',
            haitu_Lskill: '特技',
            haitu_Lskill_info: '你可以将一张本回合未使用过的花色的牌当【酒】使用,若如此做本回合你的手牌数始终等于此技能发动次数',
            haitu_doumao: '逗猫',
            haitu_Bskill_info: '出牌阶段限一次,你可以将任意张牌交给一名其他角色并随机获得牌堆中一张牌名字数为这些牌名之和的牌.         ',
            haitu_pochuang_info: '出牌阶段限一次,你可以选择对一名其他角色视为使用一张:1.【杀】2.普通锦囊牌.若如此做,其视为对你使用另一项包含的牌',
            haitu_xiaoqiao: '鼠辈',
            haitu_xiaoqiao1_info: '锁定技,你使用有目标的牌不受目标合法性与距离限制且只能指定一个目标;你成为装备牌的目标时,改为发现并获得一个装备技能.(若有以此法获得的技能则替换之)',
            haitu_jerry: '杰瑞',
            haitu_hexin: '核心',
            haitu_hexin_info: '出牌阶段限一次,你可以将手牌数调整至你装备区内的牌数',
            haitu_shencan: '身残',
            haitu_shencan_info: '锁定技,你废除坐骑栏',
            haitu_naji2: '纳祭',
            haitu_naji: '纳祭',
            haitu_xiezou: '谐奏',
            haitu_xiezou_info: '每回合各限一次,一名角色发动转换技后,你可以选择增加其:1.阴状态转换技或黑色牌数量;2. 阳状态转换技或非黑色牌数量,直至该项数值和与另一项数值和相等',
            haitu_shenyou: '神游',
            haitu_shenyou_info: '任何时候,你可以弃置任意张牌并失去此技能至回合结束.若如此做,本回合你的手牌数始终等于弃牌花色数',
            haitu_chaoti: '超体',
            haitu_jinqu: '劲曲',
            haitu_jinqu_info: '锁定技,你造成伤害后,受伤角色需选择:1.弃置手牌中所有不为【杀】【闪】的牌;2.对你使用一张手牌中的装备牌',
            haitu_chaoti_info: '锁定技,你的体力上限为无限',
            haitu_chufa: '瞬发',
            haitu_weishe: '委蛇',
            haitu_Copernicus: '哥白尼',
            haitu_Copernicus_prefix: '司天',
            haitu_Stalin: '斯大林',
            haitu_weishe_info: '当你造成或受到伤害时,你可以令受伤角色进入混乱状态直至其回合结束以防止之',
            haitu_Cleopatra: '克里奥佩特拉',
            haitu_ehou_info: '锁定技,你造成伤害时,你与受伤角色各失去一点体力',
            haitu_rejuzhen: '矩阵',
            haitu_rejuzhen_info: '锁定技,当你使用手牌结算后,你记录其点数于矩阵;出牌阶段限一次,你可以删除矩阵中一个点数以移动场上一张点数相同的牌(可替换原位置的牌)',
            haitu_ehou: '扼喉',
            haitu_jigong: '集工',
            haitu_jigong_info: '出牌阶段限一次,你可以弃置一张牌并摸与此牌点数相同的牌,将手牌中与此牌类型不同的牌置入弃牌堆.          ',
            haitu_Lancelot: '兰斯洛特',
            haitu_Athena: '雅典娜',
            haitu_Arthur: '亚瑟',
            haitu_Lancelot_prefix: '司天',
            haitu_Athena_prefix: '司天',
            haitu_qingxi: '清洗',
            haitu_qingxi_info: '锁定技,你造成伤害后,令受伤角色将手牌中的花色数弃至与你相同',
            haitu_shengdun: '圣盾',
            haitu_shengdun_info: '锁定技,一名角色的回合结束时,你复原你的武将牌并弃置你判定区里的所有牌',
            haitu_tubian: '突变',
            haitu_tubian_info: '结束阶段开始时,你可以观看牌堆顶的一张牌,你可以用你的一张牌替换之',
            haitu_tucheng: '图城',
            haitu_tucheng_info: '转换技,你可以将手牌中一张阳.非装备牌当作【解甲归田】使用;阴.装备牌当【万箭齐发】使用',
            haitu_mummy: '木乃伊',
            haitu_shenquan: '神眷',
            haitu_shenquan_info: '弃牌阶段开始时,你可以将任意张手牌交给其他角色,令这些角色获得<圣盾>直到你的下回合开始,若你的手牌数小于你的体力值,你可以令一名角色回复1点体力',
            haitu_conglong: '从龙',
            haitu_conglong_info: '当一名你攻击范围内的其他角色成为【杀】的目标后,你可以弃置其一张牌,若此牌为装备牌,你须弃置一张与之花色相同的牌或失去1点体力.          ',
            haitu_gongshe: '公社',
            ex: '本体包',
            haitu_dinglv: '定律',
            haitu_dinglv_info: '锁定技,你的回合内,其他角色的武将技能无效',
            haitu_qiuzheng: '求证',
            haitu_Lucife: '路西法',
            haitu_Arthur: '亚瑟',
            dmkj_zhouyu_inf: '骤雨',
            dmkj_zhouyu_inf_info: '出牌阶段限一次,随机弃置一名其他角色和其相邻角色一张牌',
            dmkj_caoyao_inf: '草药',
            dmkj_caoyao_inf_info: '出牌阶段,对距离为1以内的角色使用,回复1点体力',
            dmkj_touliang_inf: '偷梁换柱',
            dmkj_touliang_inf_info: '出牌阶段,你可以观看一名其他角色的手牌,并用一张手牌替换其中一张,若两张牌颜色相同,你摸一张牌',
            haitu_qianmeng: '陷梦',
            haitu_qianmeng_info: '每轮开始时,你可以令所有角色本轮所有:<br>1.♦️️手牌视为【骤雨】;<br> 2.♣️️手牌视为【酒】;<br>3.♠️️手牌视为【冰杀】;<br>4.♥️️手牌视为【草药】.若你上一轮选择过梦境,则本轮内你只能选择与其序号相邻的梦境',
            haitu_gongshe_info: '锁定技,你视为装备着【木牛流马】;当你需要移动此因技能装备的【木牛流马】时,改为令目标角色获得此技能和你扣置的牌',
            haitu_fmummy: '木乃伊',
            haitu_Hitler: '阿道夫 希特勒',
            haitu_newton: '牛顿',
            haitu_hanchang: '酣畅',
            haitu_hanchang_info: '锁定技,你使用【酒】无次数限制且全场角色的【酒】状态改为持续至其回合结束解除.          ',
            haitu_duobao: '夺宝',
            haitu_duobao_info: '出牌阶段限一次,你可以获得【影】以令手牌数翻倍,获得一名角色任意张牌并令其获得你的等量牌',
            haitu_Darwin: '达尔文',
            haitu_cewai: '册外',
            haitu_cewai_info: '当你使用牌指定唯一目标时,你可以将此牌改为一张牌名字数与原牌相同的基本或普通锦囊牌.(每回合每种牌名花色各限一次)',
            haitu_cefeng: '逃窜',
            haitu_cefeng_info: '出牌阶段开始时,你可以指定一名角色并摸一张牌,若如此做你本阶段使用牌时:<br>1.无距离限制且仅能指定其为唯一目标(无视大部分合法性检测); <br>2.将本技能指定角色改为其上或下家.(每阶段仅能选择一个方向)      ',
            haitu_xuanji: '璇玑',
            haitu_duotian: '堕天',
            haitu_duotian_info: '觉醒技,结束阶段开始时,若你装备区里的牌不少于三张,你加1点体力上限并回复1点体力,失去<晨星>并获得<冥狱>',
            haitu_chenxing: '晨星',
            haitu_chenxing_info: '主公的准备阶段开始时,其可以令你进行判定:若结果不为♠️️,你获得此判定牌,且若结果为♥️️,你回复1点体力',
            haitu_aogu: '傲骨',
            haitu_mingyu: '冥狱',
            haitu_mingyu_info: '结束阶段开始时,你可以令一名角色进行判定,若结果不为♥️️,其弃置一张牌,且若结果为♠️️,你对其造成1点伤害',
            haitu_aogu_info: '当你造成或受到伤害后,你可以弃置一张牌,将场上的一张装备牌置入你的装备区',
            haitu_xuanji_info: '每轮限一次,你可以将一张基本牌当任意一张基本牌,或将一张锦囊牌当任意一张普通锦囊牌使用或打出',
            haitu_Darwin_prefix: '司天',
            haitu_shengyan: '圣炎',
            haitu_shengyan_info: '当你对其他角色造成火焰伤害后,你可以进行判定:若结果为黑色,你废除其一个装备栏;若结果为红色,你令一名角色回复1点体力.          ',
            haitu_poe: '破厄',
            haitu_poe_info: '准备阶段开始时,你可以进行判定,若结果不为♠️️,你视为使用一张火【杀】,且若结果为♥️️,你可以为此【杀】额外选择一个目标',
            haitu_tianxin: '天心',
            haitu_tianxin_info: '出牌阶段限一次,你可以将一张♥️️手牌置于牌堆顶,依次移动场上至多两张牌',
            haitu_yanhua: '演化',
            haitu_yanhua_info: '当你于出牌阶段内使用牌时,若此牌的点数不小于你于此阶段内使用的上一张牌的点数,你可以摸一张牌',
            haitu_yixu: '易序',
            haitu_yixu_info: '限定技,出牌阶段,你可以交换两名角色的座次.          ',
            haitu_tiangong: '天工',
            haitu_tiangong_info: '结束阶段开始时,你可以弃置一名角色场上的一张牌,你与其各摸一张牌',
            haitu_zongtong: '总统',
            haitu_zongtong_append: '做人要脑洞大开',
            haitu_Gabriel: '加百列',
            haitu_qianying: '倩影',
            haitu_shouwu: '授武',
            haitu_shouwu_info: '出牌阶段限一次,你可以将一张【杀】或武器牌交给一名其他角色,令其获得<神锋>直到你的下回合开始',
            haitu_shouwu_up: '神锋',
            haitu_shouwu_up_info: '锁定技,你使用的【杀】无距离限制且额外结算一次;你于出牌阶段内可以额外使用一张【杀】',
            haitu_qianying_info: '你可以重铸一张【影】以触发你使用的牌的默认应变效果.          ',
            haitu_daVinci: '达 芬奇',
            haitu_guangyi: '光翼',
            haitu_guangyi_info: '当一名角色的判定牌生效前,你可以获得此牌,亮出牌堆顶的一张牌代替之',
            haitu_Lylia: '莉莉娅',
            haitu_qiuzheng: '求证',
            haitu_qiuzheng_info: '每轮限一次,摸牌阶段,你可以额外摸四张牌,你展示所有手牌并弃置每种花色的牌各一张,若你以此法弃置了四张牌,你于此回合结束后获得一个额外的回合',
            haitu_shengjian: '圣剑',
            haitu_shengjian_info: '锁定技,你的攻击范围+1;当一张以你为伤害来源的【杀】或【决斗】对未受伤或体力值不小于你的目标角色造成伤害时,此伤害+1',
            haitu_jianli: '闪击',
            haitu_jianli_info: '锁定技,你每回合使用每种名称的牌限制次数为X且当你每回合使用第X张某种名称的牌时,你摸X张牌.(X为你手牌中与该牌牌名相同的牌的数量)',
            haitu_Kawasaki_Ringtone: '川崎铃音',
            haitu_zongtong_info: "准备阶段,你可以令其他角色议事并在结束后选择其中一种颜色,若你选择的颜色与议事结果:1.相同,你回复一点体力并摸一张牌;2.不同,你本回合获得'制衡'.所有与你:所选颜色相同的角色可以交给你一张牌;所选颜色不同的角色可以弃置所有手牌视为对你使用一张【刺杀】",
        },
    };
    for (var i in foreigner.character) {
        foreigner.character[i][4].push('ext:海国图志/image/character/' + i + '.jpg');
    }
    lib.config.characters.add('foreigner');
    lib.config.all.characters.add('foreigner');
    lib.translate['海国图志_foreigner_config'] = '海国图志'; // 包名翻译
    return foreigner;
});
