import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '界限突破',
        content(config, pack) {
            lib.init.css('extension/界限突破', 'extension');
            lib.characterReplace.guojia.push('re_guojia2');
            lib.translate.new_jiexiantupo = '新界限突破';
            lib.translate.new_mougongpian = '新谋攻篇';
            lib.translate.new_star = '星将';
            lib.translate.dream_boys = '可能性的结局';
            lib.translate.special_greater = '特别加强版';
            lib.translate.gold_character = '神话';
            lib.characterSort['界限突破'] = {
                new_jiexiantupo: ['re_corun', 're_guojia2', 're_liszui', 're_zuishow', 're_wangji', 're_lifeng1'],
                new_mougongpian: ['mo_gulin', 'mo_zurun', 'mo_curn', 'mo_zuitai', 'moliba', 'mozuilubg', 'mozuijui', 'mo_juzui', 'mo_zgonghui', 'mo_suizu', 'mo_caorui', 'mo_weiyan', 'mo_zhugeliang1', 'mo_guanyu'],
                new_star: ['star_hunmun', 'star_lubu', 'star_zhugeliang'],
                dream_boys: ['dream_sunyi'],
                special_greater: ['re_sunyi_shui', 'sp_caocao', 'shen_sunwukong', '666_sunquan'],
                gold_character: ['shen_caoren'],
            };
            //平凡武将
            lib.rank.rarity.junk.addArray(['star_hunmun']);
            //精品武将
            lib.rank.rarity.rare.addArray(['re_corun', 're_guojia2', 'mo_zurun', 'mo_zuitai', 'moliba', 're_lifeng1']);
            //史诗武将
            lib.rank.rarity.epic.addArray(['mo_gulin', 'mo_curn', 'mozuilubg', 're_zuishow', 're_wangji', 'mo_caorui', 'mo_zhugeliang1', 'mo_guanyu', 're_liszui', 'mozuijui', 'mo_juzui', 'mo_zgonghui', 'star_lubu', 'star_zhugeliang', 'mo_suizu', 'mo_weiyan', '666_sunquan']);
            //传说武将
            lib.rank.rarity.legend.addArray(['re_sunyi_shui', 'sp_caocao', 'shen_sunwukong', 'dream_sunyi', 'shen_caoren']);
            lib.skill._jiaolongkaitianattack = {
                trigger: {
                    player: 'useCard',
                },
                _priority: 2,
                forced: true,
                popup: false,
                filter(event, player) {
                    return player.hasSkill('moquanji') && get.tag(event.card, 'damage');
                },
                content() {
                    var audio = document.createElement('audio');
                    audio.src = `extension/界限突破/mo_zgonghui_skill/${[1, 2].randomGet()}.mp3`;
                    audio.play();
                    var Animation = ui.create.div();
                    Animation.setBackgroundImage(`extension/界限突破/mo_zgonghui_skill/${[1, 2].randomGet()}.gif`);
                    Animation.style.backgroundSize = 'cover';
                    Animation.style['z-index'] = 1;
                    Animation.style.width = '100%';
                    Animation.style.height = '100%';
                    Animation.style.left = 0;
                    Animation.style.top = 0; //QQQ
                    ui.window.appendChild(Animation);
                    setTimeout(function () {
                        Animation.delete();
                    }, 2600);
                },
            };
            lib.skill._skinchangebefore = {
                trigger: {
                    global: ['phaseBegin', 'phaseEnd'],
                },
                _priority: 2,
                forced: true,
                popup: false,
                filter(event, player) {
                    return player.hasSkill('moquanji');
                },
                content() {
                    player.node.avatar.style.backgroundImage = `url(extension/界限突破/mo_zgonghui_skill/jiaolongkaitian${[1, 2].randomGet()}.gif)`;
                },
            };
            //阵亡配音
            lib.skill._jiaolongkaitianuseCard = {
                trigger: { player: 'dieBegin' },
                _priority: 2,
                forced: true,
                popup: false,
                content() {
                    game.playAudio('../extension/界限突破/audio/die', trigger.player.name);
                },
            };
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '界限突破',
                    connect: true,
                    character: {
                        re_corun: ['male', 'wei', 3, ['re_huituo', 're_mingjian', 're_xingshuai'], ['zhu', 'des:魏明帝曹叡,字元仲,豫州沛國譙縣人.三國時期曹魏第二任皇帝.魏文帝曹丕長子,母為文昭甄皇后. 黃初三年,曹叡封平原王,黃初七年五月,魏文帝病重,立曹叡為皇太子,即位於洛陽.']],
                        re_guojia2: ['male', 'wei', 3, ['new_reyiji', 're_toudo', 'dui_linet'], ['zhu', 'des:郭嘉,字奉孝,潁川陽翟人,初為東漢末年群雄袁紹麾下,後成為曹操麾下重要謀士,任司空府軍師祭酒,封洧陽亭侯,諡號貞侯.']],
                        star_hunmun: ['female', 'qun', 4, ['gurtfux', 'geigrr'], ['des:花鬘(拼音:huā mán)是出現於京劇<龍鳳巾>(溥緒從崑腔翻成皮黃腔,故又名化外奇緣)中的三國虛構人物,南蠻王孟獲與祝融夫人之女,關索之妻.']],
                        re_liszui: ['male', 'wu', 4, ['fulline', 'ksihigu'], ['des:留贊,字正明,會稽長山人.東漢末及三國時東吳將領,官至左將軍,後在與曹軍對陣中戰死.']],
                        re_sunyi_shui: ['male', 'wu', '3/5', ['juhoum', 'hunzi_change', 'olzhiba'], ['zhu', 'des:孫策,字伯符,吳郡富春縣人,孫策是長沙太守破虜將軍孫堅的長子、吳大帝孫權、偏將軍孫翊、烏程侯孫匡、孫夫人之長兄、南郡太守周瑜連襟義兄、丞相陸遜岳父,是孫吳勢力的奠定基礎者. 在群雄割據時期,曾待過袁術旗下,但不得其志.']],
                        mo_gulin: ['male', 'wu', '4/4/2', ['quxing', 'fuwu'], ['des:甘寧,字興霸,益州巴郡臨江人,是東漢末年三國時期東吳的著名將領,曾經歷仕於劉表和黃祖麾下不被重用,轉投孫權麾下受到周瑜、呂蒙的推舉.其功勛主要在曹魏的戰役中表現顯赫,孫權曾稱贊道:「孟德有張遼,孤有甘興霸,足可敵矣」亦協助魯肅與呂蒙對峙關羽;是江東十二虎臣之一.']],
                        mo_zurun: ['male', 'shu', '2/4/1', ['luongtu', 'reyajiao_yi', 'loungwu'], ['des:趙雲,字子龍,是漢末三國時期的蜀漢武將,生於常山真定,身高八尺,姿顏雄偉.初從公孫瓚,後歸劉備、劉禪.歷任牙門將軍,偏將軍、領桂陽太守,翊軍將軍,領中護軍、征南將軍,封永昌亭侯,鎮東將軍.箕谷失利後貶為鎮軍將軍.後追諡曰順平侯,是為永昌亭順平侯.']],
                        mo_curn: ['male', 'wei', 4, ['goushui'], ['zhu', 'des:曹仁,字子孝,沛國譙縣人,曹操族弟,三國時期曹魏名將.早年已經結隊跟隨曹操,常遇狀解圍,於情勢相當不利之惡戰仍能達成任務,善守能攻;樊城之戰中雖被關羽以水圍城,但亦能激勵將士死守樊城直至徐晃救援,最終合兵擊退當時威震華夏的關羽.曹魏建立後,曹仁官至大司馬,封陳侯,諡曰忠.']],
                        mo_zuitai: ['male', 'wu', 4, ['baigui', 'fu_jui'], ['zhu', 'des:周泰,字幼平,揚州九江下蔡人.漢末三國時期孫策麾下的孫吳名將;是江東十二虎臣之一.與蔣欽是同鄉九江人,因護主有功,孫權賞賜予御幘青縑蓋,封陵陽侯.']],
                        moliba: ['male', 'qun', 5, ['wushui', 'baulun', 'shuiwui'], ['zhu', 'des:呂布,字奉先,并州五原郡九原人,東漢末年武將與軍閥,被封為溫侯.先後為丁原、董卓的部將,也曾為袁紹效力,後趁劉備與袁術交戰時而佔據徐州,自成一方勢力.建安三年十二月,在下邳被曹操擊敗處死. ']],
                        mozuilubg: ['male', 'wei', '3/4/1', ['tuoxui', 'wufuoi'], ['zhu', 'des:張遼,字文遠,并州雁門郡馬邑縣人.本姓聶,是西漢聶壹之後,為避禍改姓張.東漢末、三國時期曹魏前將軍,五子良將之一,諡號為剛侯.後為歷代所推崇,成為古今六十四名將之一. 曾追隨丁原、董卓、呂布等軍閥,後轉投並追隨曹操.']],
                        mozuijui: ['male', 'qun', 3, ['lingtui', 'gountoun', 'huitou'], ['zhu', 'des:張角,鉅鹿人.東漢末年太平道首領、黃巾之亂領導人.']],
                        mo_juzui: ['male', 'wu', 4, ['mopojun', 'yucld'], ['des:徐盛,字文嚮,徐州琅邪莒縣人,三國時代東吳重要武將;是江東十二虎臣之一.以少勝多而聞名,多次防禦曹魏大軍進攻,封蕪湖侯.', 'die:ext:界限突破/audio/die/mo_juzui.mp3']],
                        mo_zgonghui: ['male', 'wei', 3, ['moquanji', 'mozili'], ['zhu', 'des:鍾會(225年－264年3月3日),字士季,潁川長社(今河南長葛)人.三國時期魏國軍事家、書法家,太傅鍾繇幼子、青州刺史鍾毓之弟.隨從司馬師征討毌丘儉,典知機密.獻策於司馬昭,粉碎曹髦的復權企圖.隨軍平定諸葛誕叛亂,屢出奇謀,時人比之為張良.景元年間,力挺司馬昭伐蜀計畫,拜鎮西將軍、假節、都督關中諸軍事,主持伐蜀事宜.景元四年(263年),魏滅蜀之戰中,配合鄧艾分兵進取,最終滅亡蜀漢.拜司徒,封縣侯.功成之後,萌生不臣之心,勾結蜀將姜維,圖謀據蜀自立,打壓太尉鄧艾.景元五年(264年)正月,以郭太后遺命之名,矯詔討伐司馬昭,為部將胡烈所害,死於亂軍,時年四十歲.', 'die:ext:界限突破/audio/die/mo_zgonghui.mp3']],
                        re_zuishow: ['male', 'qun', 4, ['recongjian', 'rexiongluan'], ['des:張繡,東漢末年的武將和軍閥,武威郡袓厲縣人,董卓手下將領張濟的侄子.', 'die:ext:界限突破/audio/die/re_zuishow.mp3']],
                        star_lubu: ['male', 'qun', 4, ['wumo', 'jiedou', 'star_jiwu'], ['zhu', 'des:世之骁勇者,无双之于吕布,忠义之于关羽,威武之于孙坚,迅猛之于夏侯渊. 无双者吕布,号<飞将>,又号<虓虎>,初因弓马娴熟、骁勇尚武而备受推崇.曾任职于并州,后成为骑都尉,与董卓结为父子,被封为都亭侯.关东军起兵讨董时,吕布于虎牢一人当关,连败方悦、穆顺、武安国,后与刘关张战平,其一人一马一戟,堪称三国无双.']],
                        star_zhugeliang: ['male', 'shu', 3, ['remoke', 'rekwpo', 'zui_ji'], ['zhu', 'des:諸葛亮(181年—234年10月8日),字孔明,號臥龍,琅琊陽都(今山東省沂南縣)人,三國時期蜀漢丞相,中國歷史上傑出的政治家、軍事家、文學家、書法家、發明家.', 'die:ext:界限突破/audio/die/star_zhugeliang.mp3']],
                        mo_suizu: ['male', 'wu', 5, ['yinghun_change', 'mo_wuliz'], ['des:孙坚(155年－192年),字文台,吴郡富春(今浙江省杭州市富阳区)人. 东汉末年将领、军阀,孙吴政权的奠基者之一. 据传为春秋时期军事家孙武的后裔. 孙坚出自寒门豪族.', 'die:ext:界限突破/audio/die/mo_suizu.mp3']],
                        re_wangji: ['male', 'wei', 3, ['re_qizhi', 're_jinqu'], ['des:王基,字伯輿,東萊曲城人.三國時期魏國將領.王基文武兼備,才高於世,德溥於時,深得司馬懿、司馬師、司馬昭的器重,尤其在南征毌丘儉,文欽之亂,東征諸葛誕之叛大規模軍事活動中,王基與司馬師、司馬昭結下了深厚的軍友情誼.魏景元二年王基去世,追贈司空,諡號為景侯.', 'die:ext:界限突破/audio/die/re_wangji.mp3']],
                        sp_caocao: ['male', 'wei', 4, ['sp_jianxiong', 'sp_zhujiu', 'sp_hujia'], ['zhu', 'des:曹操(155年—220年3月15日),曹嵩之子,字孟德,一名吉利,小字阿瞞,沛國譙縣(今安徽亳州)人. 東漢末年著名的權臣、外戚、軍事家、政治家、文學家和詩人,東漢末年主要群雄之一,三國時代曹魏奠基者. 其子曹丕建立曹魏,追尊其廟號為太祖,追諡武皇帝.', 'die:ext:界限突破/audio/die/sp_caocao.mp3']],
                        mo_caorui: ['male', 'wei', 3, ['mo_huita', 'mo_mingjian', 'mo_xingshuai'], ['zhu', 'des:魏明帝曹叡,字元仲,豫州沛國譙縣人.三國時期曹魏第二任皇帝.魏文帝曹丕長子,母為文昭甄皇后. 黃初三年,曹叡封平原王,黃初七年五月,魏文帝病重,立曹叡為皇太子,即位於洛陽.', 'die:ext:界限突破/audio/die/mo_caorui.mp3']],
                        mo_weiyan: ['male', 'shu', '4/6', ['mo_kuanggu'], ['des:魏延,字文長,荊州義陽郡人,三國時期蜀漢中期重要將領,作戰英勇、並有將略、屢立戰功,深得蜀主劉備信任、丞相諸葛亮重用.於諸葛亮北伐時期出任前軍師,參與北伐時前線戰事之決策.', 'die:ext:界限突破/audio/die/mo_weiyan.mp3']],
                        shen_sunwukong: ['male', 'shen', 1, ['jinshen', 'sun_bianhua'], ['des:孫悟空是明代吳承恩所著小說<西遊記>的主人公之一.雖然類似的猴神形象早已通過神話、傳說及戲曲等媒介得以流傳,但<西遊記>無疑對這類形象做出了最完善、最深入人心的描寫.  孫悟空本是一隻石猴,在花果山水簾洞做眾猴的首領.因擔憂生命短暫,他前往尋找須菩提道祖學藝,又在龍宮奪取了金箍棒等一眾寶物、在地府勾銷了生死簿.後來他大鬧天宮,自封齊天大聖,十萬天兵天將奈何他不得.最終他被如來佛祖收服,壓在五指山下幾百年.這時正值王莽篡漢,所以孫悟空在三國時期是存在的,三國殺把猴哥出出來也很合理(大霧)  五百年後實際上是六百年後,已經到了唐代貞觀年間,身為如來徒弟轉世的三藏法師前往天竺取經,正好遇上已經誠心悔過、受過觀音菩薩點化的孫悟空.唐三藏揭下了山上的符咒,將他釋放出來,給他取了一個別名行者.從此孫悟空便追隨唐僧取經,他們一路上遇見了白龍馬、豬八戒、沙和尚,歷經九九八十一難,終於取回真經;同時孫悟空因為功德圓滿,被封為鬥戰勝佛.  孫悟空對應的五行是金,在原著中也被稱作「金公」(其實是道教對鉛的稱呼);同時孫悟空曾為真火所煉,火對應的內臟是心臟,因此孫悟空也被稱作「心猿」.  阅读更多:三国杀:孙悟空(https://zh.moegirl.org.cn/%E4%B8%89%E5%9B%BD%E6%9D%80%3A%E5%AD%99%E6%82%9F%E7%A9%BA ) 本文引自萌娘百科(https://zh.moegirl.org.cn ),文字内容默认使用<知识共享 署名-非商业性使用-相同方式共享 3.0 中国大陆>协议.', 'die:ext:界限突破/audio/die/shen_sunwukong.mp3']],
                        dream_sunyi: ['male', 'wu', 4, ['zhulu_dr', 'zhengba_dr', 'shangyu'], ['des:建安五年(200年),在夺取豫章郡后统一江东地区.同年四月四日,正当孙策准备发兵北上之际,为其所诛的吴郡太守许贡的门客所伤,幸得名医华佗当时在游历四方,刚好来到江南,于是周瑜便安排鲁肃请华佗来治疗孙策,孙策得以保全.不久孙策便发兵合肥,大破之,守将张辽为孙策所俘.<br>建安二十四年,时任荆州太守关羽北伐,趁关羽不在荆州时,荆州防备空虚,孙策发兵荆州,南郡守将傅士仁、糜芳先后投降.不久,关羽为孙策所俘,然孙策归还关羽回蜀汉,并将关羽手下的士卒以及家属一并归还刘备,孙刘修好,不动干戈.至此,东吴稳居荆州. <br>228年,孙策起兵北伐,先后破曹真,张郃,曹睿迁都邺城,不久曹睿因病去世,孙策进兵洛阳,三国大势已定,天下东吴独大.', 'die:ext:界限突破/audio/die/dream_sunyi.mp3']],
                        shen_caoren: ['male', 'shen', Infinity, ['shoutu', 'wantui', 'weicheng_tpa'], ['des:曹仁,字子孝,沛国谯县人,是曹操的从族弟,曹魏守城名将.', 'die:ext:界限突破/audio/die/shen_caoren.mp3']],
                        mo_zhugeliang1: ['male', 'shu', 3, ['mo_houji', 'mo_kanpo', 'mobazhen'], ['des:诸葛亮(181年—234年),字孔明,琅琊郡阳都县(今山东省临沂市沂南县)人. 三国时期蜀汉(季汉)丞相,亦是政治家、军事家、发明家及散文家,曾发明木牛流马,诸葛连弩等. 他常被后世认为是智慧和忠义的典范. 先为刘备麾下核心幕僚,后为刘禅初年蜀汉实际上的最高领导人.', 'die:ext:界限突破/audio/die/mo_zhugeliang1.mp3']],
                        mo_guanyu: ['male', 'shu', 4, ['wusheng_mo', 'yijue_mo'], ['des:關羽(？—220年),字雲長,本字長生,河東郡解縣(今山西省運城市鹽湖區解州鎮)人.東漢末年名將.', 'die:ext:界限突破/audio/die/mo_guanyu.mp3']],
                        '666_sunquan': ['male', 'wu', 4, ['mo_zhiheng', 'mo_jiuyuan'], ['zhu', 'des:十分甚至九分的会玩', 'die:ext:界限突破/audio/die/666_sunquan.mp3']],
                        re_lifeng1: ['male', 'shu', 3, ['re_tunchu', 're_shuliang'], ['des:南陽(治今河南南陽)人,三國時期蜀漢大臣,李嚴之子.230年,李嚴遷為驃騎將軍,率軍前往漢中,諸葛亮上表推舉李豐為江州都督督軍,以代替李嚴管理後方事務.']],
                    },
                    translate: {
                        re_corun: '界曹叡',
                        re_guojia2: '界郭嘉',
                        star_hunmun: '星花鬓',
                        re_liszui: '界留赞',
                        re_sunyi_shui: '那个男人',
                        mo_gulin: '谋甘宁',
                        mo_zurun: '谋赵云',
                        mo_curn: '谋曹仁',
                        mo_zuitai: '谋周泰',
                        moliba: '谋吕布',
                        mozuilubg: '谋张辽',
                        mozuijui: '谋张角',
                        mo_juzui: '谋大宝',
                        mo_zgonghui: '谋钟会',
                        re_zuishow: '界张绣',
                        star_lubu: '星吕布',
                        star_zhugeliang: '星诸葛亮',
                        mo_suizu: '谋孙坚',
                        re_wangji: '界王基',
                        sp_caocao: '曹孟德',
                        mo_caorui: '谋曹叡',
                        mo_weiyan: '谋魏延',
                        shen_sunwukong: '齐天大圣',
                        dream_sunyi: '梦孙策',
                        shen_caoren: '神曹仁',
                        mo_zhugeliang1: '谋诸葛亮',
                        mo_guanyu: '谋关羽',
                        '666_sunquan': '会玩权',
                        re_lifeng1: '界李丰',
                        re_huituo: '恢拓',
                        re_huituo_info: '当你受到伤害后,你可以令一名角色进行判定,如果判定结果不为♣️️,其回复一点体力,否则摸一张牌.',
                        re_mingjian: '明鉴',
                        re_mingjian_info: '出牌阶段限一次,你可以将所有手牌交给一名其他角色,然该名角色下个回合手牌上限+1,并且可以多使用一张【杀】.结束回合,若其本回合造成过伤害,你摸X张牌.(X为其本回合造成的伤害量)',
                        re_mingjian2: '明鉴',
                        re_mingjian2_info: '',
                        re_xingshuai: '兴衰',
                        re_xingshuai_info: '主公技,限定技,当你进入濒死状态时,你可以令任意名除你外与你同勢力的角色摸两张牌,其可以选择是否令你回复一点体力,若否,其损失一点体力.',
                        re_toudo: '天妒',
                        re_toudo_info: '当你的判定牌生效后或一名角色的♥️️判定牌生效后,你可以获得之.此外 ,若判定结果为♥️️,你可以回复一点体力.',
                        dui_linet: '定辽',
                        dui_linet_info: '出牌阶段限一次,若其没有"计",你可以将一张手牌置於一名角色的武将牌之上,稱为"计",若如此做,其直至下个回合结束,使用与"计"同类型的牌时,摸一张牌.结束回合,其将"计"置于牌堆顶之上,进行一次判定,若判定为红色,其摸两张牌.',
                        gurtfux: '交锋',
                        gurtfux_info: '锁定技,以下每个情况每回合只会触发一次,当你不因此技能获得牌时,若一次性获得:一张,你从牌堆获得一张基本牌.两张,你回复一点体力.三张,你从牌堆获得一张锦囊牌.三张以上,你可以对一名角色造成一点伤害.',
                        geigrr: '婚约',
                        geigrr_info: '当场上一名角色进入濒死状态时,若你未对其发动此技能,你可以对其发动,获得1枚"婚"标记并增加1点体力上限,你可以令其回复1点体力.摸牌阶段,你可以多摸1至2张牌,弃置等量的"婚"标记.出牌阶段限一次,你可以弃一枚"婚"标记,选择一名男性角色,你们各摸1张牌.',
                        fulline: '奋音',
                        fulline_info: '锁定技,在你的回合内,当你使用/打出一张牌时,若此牌与你上一张使用/打出的牌颜色不同时,你可以获得一枚『音』标记,你最多拥有三枚『音』标记.当你使用/打出的牌结算完毕后,若你有『音』标记,你可以将其全部弃置,摸同等量的牌,若弃置的『音』标记大于2,你多摸一张牌.',
                        ksihigu: '抗歌',
                        ksihigu_info: '结束回合,若你本回合累积使用了三种或以上的花色,你可以选择一项执行:<br>①摸两张牌<br>②视为使用一张基本牌',
                        juhoum: '激昂',
                        juhoum_info: '当你使用/打出/成为其他人红色基本牌/决斗的目标后,你摸一张牌. ',
                        yinghun_change: '英魂',
                        yinghun_change_info: '准备阶段,你可以选择一名其他角色并选择一项:1.令其摸X张牌,弃置一张牌;2令其摸一张牌,弃置X张牌(X为你已损失的体力值,且最少为1).若目标手牌数因<英魂>发动前后有变动,则你摸Y张牌(Y为其因<英魂>发动前和发动后的手牌之差).',
                        hunzi_change: '魂姿',
                        hunzi_change_info: '觉醒技,回合开始,若你的体力值小于3,你减1点体力上限并回复1点体力,获得技能〖英姿〗和〖英魂〗.',
                        quxing: '奇袭',
                        quxing_info: '当你一次性获得两张或更多牌时,你可以弃置场上至多X名角色的一张牌.(X为你的护甲值且至少为1)',
                        fuwu: '奋威',
                        fuwu_info: '当一名角色因弃置而失去最后一张牌时,你可以摸两张牌,或者获得一点护甲.',
                        luongtu: '龙胆',
                        luongtu_info: '你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】、非基本手牌当【无懈可击】使用或打出.若你以此法打出点数为X的牌时,你摸一张牌并获得一点护甲.;你的手牌上限+X.(X为你的护甲值)',
                        reyajiao_yi: '涯角',
                        reyajiao_yi_info: '当你于回合外因使用或打出而失去手牌后,你可以展示牌堆顶的一张牌.若这两张牌的类别相同,你可以将展示的牌交给一名角色,若该名角色不为你,你获得一点护甲;若类别不同,你可以令一名角色将手牌摸至/弃置与你的护甲数相同.(最多摸至5张)',
                        loungwu: '夺刃',
                        loungwu_info: '当你对一名角色即将造成伤害时,你可以防止本次伤害,并移除其所有的护甲,若其拥有武器牌,则你获得之,若其没有武器牌,你摸X张牌.(X为其本次移除的护甲数量,最少为1)',
                        goushui: '溃守',
                        goushui_info: '锁定技,当你受到伤害后/失去体力后/武将牌由正面翻到背面后/回合外因弃置而失去的牌后/结束回合时你的体力值不大于二,若你没有<守>,你获得一个<守>.若你有<守>,①当你即将受到伤害时,防止本次伤害摸一张牌.②当你武将牌由正面翻去背面时,取消之摸一张牌.③准备阶段,摸三张牌.在执行以上其中一项后,移去<守>.',
                        baigui: '不屈',
                        baigui_info: '当你进入濒死状态后,你可以亮出牌堆顶的一张牌,若此牌的点数你未记录,则你记录之并获得此牌,将体力回复至1.你的手牌上限为你已记录的点数数量.',
                        fu_jui: '奋激',
                        fu_jui_info: '每回合限一次,当一名任意角色使用一张非转化牌结算完毕后,你可以损失一点体力,令其摸一张牌,若此牌的点数与"不屈"中的记录相同,则改为摸两张牌. ',
                        wushui: '无双',
                        wushui_info: '锁定技,你受到的伤害不会超过一;当你使用【杀】或【决斗】指定目标或成为【决斗】的目标后,你令此牌所需要响应的【闪】或【杀】次数+1. ',
                        baulun: '暴怒',
                        baulun_info: '锁定技,当你于回合外受到伤害后,若此伤害为你本回和首次受到伤害,你摸两张牌,否则,弃一张手牌.若你因此法失去最后一张手牌后,你可以视为对一名角色使用一张【杀】.',
                        shuiwui: '神威',
                        shuiwui_info: '锁定技,你的回合开始,你令除你以外的所有角色装备失效,直至本回合结束. ',
                        tuoxui: '突袭',
                        tuoxui_info: '摸牌阶段,你可以少摸任意张牌,改为获得等量名角色的一张手牌,并根据牌的类型获得以下效果: <br>基本牌,你可以对目标使用一张无距离和次数限制的【杀】.<br> 装备牌,你获得1点护甲,护甲最多不超过3.<br> 锦囊牌,当你于本回合使用这些牌结算完毕后,摸一张牌,并且此牌(锦囊牌)本回合不会进入手牌上限.',
                        wufuoi: '威慑',
                        wufuoi_info: '锁定技,你的手牌上限+X.(X为你的护甲值)',
                        lingtui: '雷击',
                        lingtui_info: '当你打出或使用一张带有<闪>/<雷>/<电>字的牌时或此牌属性带有雷属性,你可以进行一次判定,若判定不为♣️️或♠️️,如果X小于2,则你将牌堆顶的两张牌置於武将牌之上,本回合结束后你获得之,并且本回合你的手牌上限+X (X为你以此法扣置于武将牌上的牌数).<br>若判定结果为♣️️,你回复1点体力,并且对1名角色造成1点雷电伤害.<br>若为♠️️,则你可以对1名角色造成2点雷电伤害. ',
                        gountoun: '鬼道',
                        gountoun_info: '当一张判定牌生效时,你可以用一张牌/判定区的牌替换之. ',
                        huitou: '黄天',
                        huitou_info: '主公技,锁定技,游戏开始,你将一张【祭雷之刃】加入牌堆,获得之.',
                        juilingzuiru_skill: '祭雷',
                        juilingzuiru_skill_info: '',
                        wushui_s: '无双',
                        wushui_s_info: '出牌阶段,你可以损失1点体力,废弃1个本回合未被废弃的装备栏,根据装备栏的类型你本回合获得以下效果: 武器,你使用杀或决斗指定目标后目标需要两张闪或杀才可以响应之. 防具,摸三张牌. 进攻马,你使用杀无距离限制. 防御马,你使用杀指定目标后,获得目标的一张牌. 宝物,你视为使用一张锦囊牌.',
                        mopojun: '破军',
                        mopojun_info: '当你使用【杀】指定目标后,你可以将其的至多X张牌置于其武将牌上(X为其体力上限),其于当前回合结束时获得这些牌.若目标因<破军>而置入武将牌之上的牌中每有一张花色与你的【杀】相同,则此【杀】伤害+1.',
                        yucld: '疑城',
                        yucld_info: '当你成为一名角色使用【杀】的目标后,你可以摸一张牌,展示一张手牌并弃置之,若你展示的手牌花色与此【杀】相同,则此【杀】结算后,你从弃牌堆中获得此【杀】.',
                        moquanji: '权计',
                        moquanji_info: '当你受到1点伤害后或回合外失去牌后,你可以摸一张牌,并将一张牌置于武将牌之上称为<权>.你的手牌上限+X(X为权的数量).',
                        mozili: '自立',
                        mozili_info: '觉醒技,准备阶段,若你有三个或更多的<权>,你增加一点体力上限并回复一点体力,摸两张牌,获得技能【排异】.',
                        mopaiyi: '排异',
                        mopaiyi_info: '出牌阶段限一次,你可以将一张<权>交给一名角色,并选择一项: <br>1.对其造成一点伤害,其将手牌摸至X(X为<权>的数量,且最多为五).<br>2.令其摸两张牌,直至其下个回合结束,你对其造成伤害时,此伤害+1.',
                        recongjian: '从谏',
                        recongjian_info: '当你成为锦囊牌的目标时,你可以交给一名其他角色一张牌,摸一张牌,若你给出的是装备牌,改为摸两张牌.若为锦囊牌,你回复一点体力.',
                        rexiongluan: '雄乱',
                        rexiongluan_info: '限定技,出牌阶段,你可以废除你的判定区,防具区,宝物区及坐骑区,指定一名其他角色.直到回合结束,你对其使用牌无距离和次数限制,其不能使用和打出手牌,且你使用牌指定其为目标后,其需要弃一张装备区域内的牌.',
                        wumo: '无谋',
                        wumo_info: '锁定技,当你使用不为【决斗】的锦囊牌的时候,你需要弃一张牌,否则损失一点体力.',
                        jiedou: '解斗',
                        jiedou_info: '每回合限一次,当场上任意一名角色成为【杀】的唯一目标后(包括你自己),若此【杀】使用者不为你,则你可以进行一次判定,若判定不为♠️️,则取消此【杀】,你和【杀】的使用者以及成为【杀】的目标各摸一张牌.',
                        star_jiwu: '极武',
                        star_jiwu_info: '锁定技,摸牌阶段你多摸两张牌.你的回合你可以多使用一张【杀】并且如果此【杀】为你本回合第一次使用的牌,则此【杀】伤害+1.你视为拥有技能【无双】.',
                        remoke: '谋刻',
                        remoke_info: '①准备阶段,你可以记录一张"谋刻"未记录的锦囊牌名.<br>②当场上一名角色使用一张"谋刻"未记录的非转化的锦囊牌时,你记录之.<br>每一轮每一种牌名限一次,且你已记录的牌会视为本轮已记录.',
                        rekwpo: '看破',
                        rekwpo_info: '当一名角色使用一张"谋刻"记录的牌时,你可以移除相应的记录,令此牌无效并摸一张牌.',
                        zui_ji: '智伐',
                        zui_ji_info: '限定技,你的回合开始,若你有技能【谋刻】,且记录大于1,你可以移除所有记录,并将"谋刻"总记录的牌名全部复制一张(这些牌在使用后会自动销毁),并更改"谋刻"为可记录基本牌与锦囊牌.你以此法获得的牌不进入手牌上限,且这些已复制的牌名无法再被"谋刻"记录.',
                        mo_wuliz: '武烈',
                        mo_wuliz_info: '你的回合开始,你可以交给一名角色至多X张牌,或弃置至多X张牌,并损失同等的体力(X为你的体力值-1),弃置任意名角色共计Y张牌(Y为你因<武烈>而交出或弃置的牌数),若如此做,本回合你的手牌上限为你的体力上限.当你受到致命伤害时,你可以失去该技能并取消之,令任意名角色获得<烈>标记,直至你下个回合开始.拥有<烈>标记的角色成为一张牌的目标时,取消之.',
                        re_qizhi: '奇制',
                        re_qizhi_info: ' 当你使用基本牌或锦囊牌指定目标后,你可以弃置不是此牌目标的一名角色的一张牌,该角色获得一枚<奇>标记.本回合结束后,移除场上所有角色的<奇>标记,其摸等量张牌.',
                        re_jinqu: '进趋',
                        re_jinqu_info: '你的回合结束后,你可以将手牌摸至X(X为你于此回合内发动过<奇制>的次数).',
                        sp_jianxiong: '奸雄',
                        sp_jianxiong_info: '当你受到伤害后,你可以获得对你造成伤害的牌,摸X张牌(X为你已损失的体力).',
                        sp_zhujiu: '煮酒',
                        sp_zhujiu_info: '每回和限一次,你可以视为使用一张【酒】,令一名角色交给你一张手牌,进行一次判定,若判定结果为黑色,你对其造成一点雷电伤害,否则若你已受伤,你视为受到一点伤害.',
                        sp_hujia: '护驾',
                        sp_hujia_info: '主公技,当你需要使用或打出一张【闪】时,你可以选择一名其他势力与你相同的角色打出一张【闪】.若其响应,则你视为使用或打出了一张【闪】,否则你获得其一张牌.',
                        mo_huita: '恢拓',
                        mo_huita_info: '当你受到伤害后,你可以进行判定,若结果为:红色,你回复1点体力并摸1张牌;黑色,你摸X张牌(X为你已损失的体力值,且至少为2);当你的判定牌生效时,你可以观看牌堆顶的两张牌,选择其中一张作为你的判定牌.',
                        mo_mingjian: '明鉴',
                        mo_mingjian_info: '出牌阶段限一次,你可以将至多X张手牌交给一名其他角色(X为你的体力值,且至少为2,此外你交出去的牌数量至少为2),并根据你交出去的牌数执行以下效果: <br>两张,其手牌上限+1,直至其下个回合结束.<br>三张,其下个出牌阶段内可以多使用Y张【杀】(Y为其的体力值).<br>四张或更多,当你发动【恢坧】时,其也成为目标.',
                        mo_xingshuai: '兴衰',
                        mo_xingshuai_info: '主公技,限定技,当你进入濒死状态时或出牌阶段你的体力值不大于2,你可令其他势力与你相同的角色依次选择一项:<br>①令你回复一点体力,自己受到一点无来源的伤害.<br>②将所有手牌交给你(若无手牌则强制选择①).',
                        mo_kuanggu: '狂骨',
                        mo_kuanggu_info: '使命技,每回合限一次,当你对一名角色造成伤害后,你可以摸X张牌(X为你的体力值),你回复一点体力.<br>成功:当你因【狂骨】而回复体力后,若你的体力值为体力上限,你获得技能【奇谋】和【征北】.<br>失败:准备阶段,你的体力值不大于二,你失去一点体力.',
                        mo_qimou: '奇谋',
                        mo_qimou_info: '限定技,回合开始时,你可以将体力值调整至1,摸X+1张牌,本回合你使用牌无距离限制,可以多使用X张【杀】,【杀】伤害基数+1,使用【杀】指定目标后的目标非锁定技失效,且此阶段内当有角色受到伤害后,你回复一点体力,直至本回合结束(X为你发动【奇谋】前后的体力值之差).',
                        mo_zhengbei: '征北',
                        mo_zhengbei_info: '当你使用牌指定唯一其他目标造成伤害后,你可以摸X张牌(X为此牌的点数,若无点数则改为摸两张牌),若你以此法获得的牌大于或等于5,则你不能再发动【征北】.',
                        jinshen: '金身',
                        jinshen_info: '锁定技,游戏开始时,你将你的体力上限与体力值调整至X(X为场上的角色数+1,且最少为5)并将【如意金箍】置入你的装备区.你的回合结束,如果你的体力上限大于四,你减少一点体力上限.若你的体力值大于四,你视为拥有技能【不坏】,否则你视为拥有技能【降世】.',
                        buhuai: '不坏',
                        buhuai_info: '锁定技,当你受到伤害时,取消之.',
                        sun_jianshi: '降世',
                        sun_jianshi_info: '锁定技,出牌阶段你多摸X张牌(X场上的角色数,且最多为4).当你造成伤害时,此伤害+1.',
                        sun_bianhua: '变化',
                        sun_bianhua_info: '准备阶段,你可以随机获得场上一名角色的一个非锁定技能,若场上没有合适的技能,则你从游戏外获得一个非锁定技能,直至你下个回合开始.',
                        ruyigoldenhoop_skill: '如意',
                        ruyigoldenhoop_skill_info: '',
                        zhulu_dr: '逐鹿',
                        zhulu_dr_info: '当你使用【杀】/【决斗】指定目标后/成为带有伤害标签的锦囊牌/基本牌的目标后,你可以获得一枚【逐】标记,并摸一张牌.',
                        zhengba_dr: '争霸',
                        zhengba_dr_info: '出牌阶段,你可以弃置两枚【逐】标记,你选择一项:<br>①从牌堆中获得一张【杀】,且此【杀】不占手牌上限并且伤害基数+1.<br>➁从牌堆中获得一张锦囊牌,当你使用此牌指定目标后,你可以获得其中一名目标的一张牌.<br>➂若你的装备栏有空位,令你随机一个空置的装备栏随机获得并使用一张装备牌.',
                        shangyu: '虎踞',
                        shangyu_info: '限定技,锁定技,当你进入濒死状态时,或准备阶段你的体力值为1,你将体力回复至体力上限,摸三张牌并获得【英姿】,且直到你的下个回合开始,你失去体力时,取消之.',
                        yingzi_dr: '英姿',
                        yingzi_dr_info: '锁定技,摸牌阶段你可以多摸X+1张牌.你的手牌上限为你已损失的体力(以下条件你每满足一项,X便加1,且初始为0)<br>-若你的体力值为全场最大<br>-若你的装备区有牌且为全场最多<br>-若你的手牌为全场最多',
                        shoutu: '守土',
                        shoutu_info: '锁定技,游戏开始时,你获得X个<城>标记(X为场上的角色数),你翻面.当你受到伤害后,你移除等量个<城>,摸Y张牌(Y为你的<城>标记数量),若你的<城>标记小于或等于零,你将体力值和体力上限改为与场上存活角色数量相等,你翻面,失去技能<守土>.',
                        wantui: '挽颓',
                        wantui_info: '其他角色的回合结束时,若你的武将背面朝上,且本回合其使用过牌指定你为目标,你可以视为对其使用一张无视防具的【杀】,若如此做,本回合内,如果你的武将牌背面朝上且使用牌指定唯一目标造成伤害后,你翻面,将手牌摸至体力上限(最多为五),且在本回合结束后,你执行一个额外的出牌阶段.',
                        weicheng_tpa: '围城',
                        weicheng_tpa_info: '出牌阶段,你可以交给一名没有<城>的其他角色一个<城>标记,观看其手牌,并执行一项:<br>①获得其中的一张牌.<br>②弃置其中两张牌.<br>③将其中的一张牌当作【兵粮寸断】对其使用.<br>当执行其中一项后,若你的武将牌正面朝上,你翻面;当你武将牌从背面翻到正面时,你可以获得一个<城>;当你对一名拥有<城>的目标造成伤害后,移除<城>;拥有<城>的其他角色手牌上限-1;你对拥有<城>的角色使用牌无距离限制.',
                        mo_houji: '火计',
                        mo_houji_info: '出牌阶段,每回合每名角色限一次,你可以与一名角色进行<博弈>:<br>焚其大军:你对其造成一点火焰伤害,将牌堆顶的一张牌当作【乐不思蜀】对其使用.<br>焚其粮草:你将牌堆顶的一张牌当作【兵粮寸断】对其使用,直至其下个回合结束,其的♣️️判定牌视为♦️️判定牌.',
                        mo_kanpo: '看破',
                        mo_kanpo_info: '你可以将一张牌当作【无懈可击】使用,若如此做,你将此牌收回手牌,此牌本回合不能使用或打出.',
                        mobazhen: '八阵',
                        mobazhen_info: '结束回合,你可以将一张牌置于武将牌之上,若如此做,其他角色使用与此牌花色和类型相同的牌时不能指定你为此牌目标;准备阶段,你弃置武将牌上的所有因<八阵>而扣置的牌.',
                        wusheng_mo: '武圣',
                        wusheng_mo_info: '<b>蓄力技(2/5)</b>你可以将一张红色牌当做【杀】使用或打出,且你使用的【杀】无视防具,且结算后你摸一张牌;或者将一张黑色牌当做【决斗】使用,且结算后你摸一张牌.你的回合开始时,或你使用【杀】对一名角色造成伤害时,你获得一点蓄力.',
                        yijue_mo: '义绝',
                        yijue_mo_info: '觉醒技,当你对一名角色造成足以令其进入濒死状态的伤害时,你防止之,你减一点体力上限,并获得技能【拖刀】和【马术】,你回复所有蓄力.',
                        danqi_mo: '拖刀',
                        danqi_mo_info: '当你使用【杀】指定目标后,若此【杀】为:<br>♥️️️,你可以令一名角色回复一点体力.<br>♦️️️,此【杀】伤害+1.',
                        mo_zhiheng: '制衡',
                        mo_zhiheng_info: '出牌阶段限一次,你可以弃置任意张牌,你可以选择一项:<br><li>将牌堆的随机一张【桃】/【酒】置于牌堆顶.</li><li>将牌堆里的随机一张【过河拆桥】/【顺手牵羊】置于牌堆顶.</li><li>将牌堆的一张随机的【无中生有】/【决斗】置于牌堆顶.</li>你摸等量张牌.(如果牌堆中没有你所选择的牌,则你额外摸一张牌)',
                        mo_jiuyuan: '救援',
                        mo_jiuyuan_info: '主公技,当你受到伤害后或进入濒死状态后,你可以令全场与你势力相同的角色交给你一张牌,如果你获得的牌中包含♥️️️牌,你回复一点体力.',
                        re_tunchu: '屯储',
                        re_tunchu_info: '游戏开始时,你摸两张牌,你可以将任意张手牌置于你的武将上,称为「粮」;摸牌阶段,若你没有「粮」,你可以多摸两张牌.若如此做,摸牌阶段结束时,你可以将任意张手牌置于你的武将上,称为「粮」,只要你的武将牌上有「粮」,你便不能使用【杀】;你的手牌上限+X(X为你「粮」的数量).',
                        re_shuliang: '输粮',
                        re_shuliang_info: '一名角色的结束阶段开始时,若其手牌数少于体力上限(若该名角色为你则无视该条件),你可以移去一张「粮」,该角色摸两张牌.',
                    },
                    skill: {
                        re_huituo: {
                            audio: 'huituo',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('re_huituo')).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) > 0) {
                                        return get.recoverEffect(target, player, player) + 1;
                                    }
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    target.judge(function (card) {
                                        if (target.hp == target.maxHp) {
                                            if (get.color(card) == 'red' || card.suit == 'spade') return -1;
                                        }
                                        if (get.color(card) == 'red' || card.suit == 'spade') return 1;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.color) {
                                    if (result.color == 'red' || result.suit == 'spade') {
                                        if (event.target.hp < event.target.maxHp) event.target.recover();
                                    } else {
                                        event.target.draw();
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        re_mingjian: {
                            audio: 'mingjian',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: -1,
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                target.gain(cards, player, 'giveAuto');
                                target.addTempSkill('re_mingjian2', { player: 'phaseEnd' });
                                target.addTempSkill('re_mingjian2_draw', { player: 'phaseEnd' });
                                target.storage.re_mingjian2 = 0;
                                target.storage.re_mingjian2_target = player;
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (player.countCards('h') == player.countCards('h', 'du')) return -1;
                                        if (target.hasJudge('lebu')) return 0;
                                        if (get.attitude(player, target) > 3) {
                                            var basis = get.threaten(target);
                                            if (
                                                player == get.zhu(player) &&
                                                player.hp <= 2 &&
                                                player.countCards('h', 'shan') &&
                                                !game.hasPlayer(function (current) {
                                                    return get.attitude(current, player) > 3 && current.countCards('h', 'tao') > 0;
                                                })
                                            )
                                                return 0;
                                            if (target.countCards('h') + player.countCards('h') > target.hp + 2) return basis * 0.8;
                                            return basis;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        re_mingjian2: {
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    pupup: false,
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.re_mingjian2 > 0;
                                    },
                                    content() {
                                        player.storage.re_mingjian2_target.draw(player.storage.re_mingjian2);
                                    },
                                },
                            },
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return _status.currentPhase == player && event.source == player;
                            },
                            popup: false,
                            forced: true,
                            content() {
                                player.storage.re_mingjian2 += trigger.num;
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    if (_status.currentPhase == player) {
                                        if (player.storage.re_mingjian2 <= 0) return '本回合还未造成任何伤害';
                                        return `本回合结束后,${get.translation(player.storage.re_mingjian2_target)}摸${get.cnNumber(player.storage.re_mingjian2)}张牌.`;
                                    }
                                    return '直到你下个回合结束,你的手牌上限+1,并且可以多使用一张【杀】';
                                },
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return (num += 1);
                                },
                                maxHandcard(player, num) {
                                    return (num += 1);
                                },
                            },
                        },
                        re_xingshuai: {
                            audio: 'xingshuai',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            zhuSkill: true,
                            filter(event, player) {
                                if (player.storage.re_xingshuai) return false;
                                if (player.hp > 0) return false;
                                if (!player.hasZhuSkill('re_xingshuai')) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == player.group;
                                });
                            },
                            init(player) {
                                if (player.hasZhuSkill('re_xingshuai')) {
                                    player.markSkill('re_xingshuai');
                                    player.storage.re_xingshuai = false;
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                            limited: true,
                            mark: false,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('re_xingshuai'), [1, Infinity], '你可以令任意名除你外与你同勢力的角色摸两张牌,其可以选择是否令你回复一点体力,若否,其损失一点体力.', function (card, player, target) {
                                        return player != target && target.group == player.group;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (target.hp <= 1) return att;
                                        return att / 10;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.re_xingshuai = true;
                                    player.awakenSkill('re_xingshuai');
                                    event.targets = result.targets;
                                    event.count = 0;
                                } else event.finish();
                                ('step 2');
                                for (var i = 0; i < event.targets.length; i++) {
                                    player.line(targets[i], 'thunder');
                                    event.targets[i].draw(2);
                                }
                                ('step 3');
                                event.targets[event.count].chooseControl('损失体力', `令${get.translation(player)}回复一点体力`, function () {
                                    var att = get.attitude(player, event.targets[event.count]);
                                    if (att < 0 && event.targets[event.count].hp > 1) {
                                        return '损失体力';
                                    } else return `令${get.translation(player)}回复一点体力`;
                                });
                                ('step 4');
                                if (result.control != '损失体力') {
                                    event.targets[event.count].line(player, 'green');
                                    player.recover();
                                } else event.targets[event.count].loseHp();
                                event.count++;
                                if (event.count < event.targets.length) {
                                    event.goto(3);
                                } else event.finish();
                            },
                        },
                        re_toudo: {
                            audio: 'tiandu',
                            trigger: {
                                global: 'judgeEnd',
                            },
                            preHidden: true,
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                //if(get.mode()=='guozhan') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                return (get.position(event.result.card, true) == 'o' && event.player == player) || (event.player != player && get.position(event.result.card, true) == 'o' && event.result.card.suit == 'heart');
                            },
                            content() {
                                player.gain(trigger.result.card, 'gain2');
                                if (trigger.result.card.suit == 'heart') player.recover();
                            },
                        },
                        dui_linet: {
                            audio: 'reyiji',
                            subSkill: {
                                end: {
                                    trigger: {
                                        player: ['phaseEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('dui_linet_use').length;
                                    },
                                    content() {
                                        'step 0';
                                        for (var i = 0; i < player.getExpansions('dui_linet_use').length; i++) {
                                            ui.cardPile.insertBefore(player.getExpansions('dui_linet_use')[i], ui.cardPile.firstChild);
                                        }
                                        game.log(player, '将一张牌置于牌堆顶');
                                        game.updateRoundNumber();
                                        ('step 1');
                                        player.judge(function (card) {
                                            var c = get.color(card);
                                            if (c == 'red') return -4;
                                            return 0;
                                        }).judge2 = function (result) {
                                            return result.bool == false ? true : false;
                                        };
                                        ('step 2');
                                        if (result.color == 'red') {
                                            player.draw(2);
                                        }
                                        player.removeSkill('dui_linet_end');
                                    },
                                },
                                use: {
                                    intro: {
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                    marktext: '定',
                                    mod: {
                                        targetInRange(card, player) {
                                            var player = _status.event.player;
                                            if (player.getExpansions('dui_linet_use').length) {
                                                if (get.type(card) == get.type(player.getExpansions('dui_linet_use')[0])) return true;
                                            }
                                        },
                                    },
                                    trigger: {
                                        player: ['useCard'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(player.getExpansions('dui_linet_use')[0]) == get.type(event.card);
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target && !target.hasSkill('dui_linet_end');
                            },
                            filterCard: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                if (!target.hasSkill('dui_linet_use')) {
                                    target.addTempSkill('dui_linet_use', { player: 'phaseEnd' });
                                    target.addSkill('dui_linet_end');
                                }
                                target.addToExpansion(cards[0], player, 'giveAuto').gaintag.add('dui_linet_use');
                                target.popup(get.translation(get.type(cards[0])) + '牌');
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        return get.attitude(target, player) > 0;
                                    },
                                },
                                order: 7,
                            },
                        },
                        gurtfux: {
                            group: ['gurtfux_first', 'gurtfux_second', 'gurtfux_third', 'gurtfux_fourth'],
                            forced: true,
                            subSkill: {
                                first: {
                                    trigger: {
                                        player: ['gainAfter'],
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length == 1 && event.cards[0] != player.storage.gurtfux_card;
                                    },
                                    content() {
                                        player.popup(trigger.getParent(2).name);
                                        var card = get.cardPile2(function (card) {
                                            return get.type(card) == 'basic';
                                        });
                                        player.gain(card, 'gain2');
                                    },
                                },
                                second: {
                                    trigger: {
                                        player: ['gainAfter'],
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        var num = player.maxHp - player.hp;
                                        return event.cards && event.cards.length == 2 && num;
                                    },
                                    content() {
                                        player.recover();
                                    },
                                },
                                third: {
                                    trigger: {
                                        player: ['gainAfter'],
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length == 3;
                                    },
                                    content() {
                                        var card = get.cardPile2(function (card) {
                                            return get.type2(card) == 'trick';
                                        });
                                        player.gain(card, 'gain2');
                                        player.storage.gurtfux_card = card;
                                    },
                                },
                                fourth: {
                                    trigger: {
                                        player: ['gainAfter'],
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length > 3;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('gurtfux'), '对一名角色造成一点伤害', function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.damageEffect(target, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            player.line(target, 'green');
                                            target.damage();
                                        }
                                    },
                                },
                            },
                        },
                        geigrr: {
                            group: ['geigrr_draw', 'geigrr_phase'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    filter(event, player) {
                                        return player.countMark('geigrr');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = ['多摸一张牌'];
                                        if (player.countMark('geigrr') > 1) list.push('多摸两张牌');
                                        list.push('取消');
                                        player.chooseControl(list, function () {
                                            if (player.countMark('geigrr') >= 3) {
                                                return '多摸两张牌';
                                            } else if (player.countMark('geigrr') >= 2) return '多摸一张牌';
                                            return '取消';
                                        });
                                        ('step 1');
                                        if (result.control == '多摸两张牌') {
                                            trigger.num += 2;
                                            player.removeMark('geigrr', 2);
                                        }
                                        if (result.control == '多摸一张牌') {
                                            trigger.num++;
                                            player.removeMark('geigrr', 1);
                                        }
                                        event.finish();
                                    },
                                },
                                phase: {
                                    prompt(player) {
                                        var player = _status.event.player;
                                        return get.prompt('geigrr') + '消耗一枚"婚"标记,与一名男性角色各摸一张牌？';
                                    },
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return player.countMark('geigrr');
                                    },
                                    filterTarget(card, player, target) {
                                        if (!target.hasSex('male')) return false;
                                        if (target == player) return false;
                                        return true;
                                    },
                                    content() {
                                        player.removeMark('geigrr', 1);
                                        player.draw();
                                        target.draw();
                                    },
                                    ai: {
                                        order: 5.5,
                                        result: {
                                            player(player) {
                                                return 1;
                                            },
                                            target: 4,
                                        },
                                        threaten: 2,
                                    },
                                },
                            },
                            init(player) {
                                player.storage.geigrr_character = [];
                            },
                            trigger: {
                                global: 'dying',
                            },
                            intro: {
                                content(storage, player, skill) {
                                    return `已经对${get.translation(player.storage.geigrr_character)}发动过此技能.<br>已经获得${player.storage.geigrr}标"婚"标记.`;
                                },
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.storage.geigrr_character.includes(event.player);
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                if (!player.storage.geigrr_character) player.storage.geigrr_character = [];
                                player.storage.geigrr_character.add(trigger.player);
                                player.storage.geigrr_character.sortBySeat();
                                player.markSkill('geigrr');
                                player.chooseBool('是否让目标回复一点体力？').ai = function (event, player) {
                                    return get.recoverEffect(trigger.player, player, player) > 0;
                                };
                                ('step 1');
                                player.addMark('geigrr');
                                if (result.bool) {
                                    trigger.player.recover();
                                }
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        fulline: {
                            audio: 'fenyin',
                            group: 'fulline_draw',
                            subSkill: {
                                draw: {
                                    audio: 'fenyin',
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    prompt(player) {
                                        var player = _status.event.player;
                                        return '【奋音】:你可以失去所有的「音」标记,摸等量的牌.';
                                    },
                                    filter(event, player) {
                                        return player.countMark('fulline') > 0;
                                    },
                                    check(event, player) {
                                        //QQQ
                                        return player.countCards('h') < 2 || player.getExpansions('fulline').length > 2;
                                    },
                                    content() {
                                        'step 0';
                                        event.num = player.countMark('fulline');
                                        player.removeMark('fulline', Infinity);
                                        ('step 1');
                                        if (event.num > 2) event.num++;
                                        player.draw(event.num);
                                    },
                                },
                            },
                            intro: {
                                content: 'mark',
                            },
                            forced: true,
                            marktext: '奋',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                var evt = player.getLastUsed(1);
                                if (!evt) return false;
                                var color1 = get.color(evt.card);
                                var color2 = get.color(event.card);
                                return player.countMark('fulline') < 3 && _status.currentPhase == player && color1 && color2 && color1 != 'none' && color2 != 'none' && color1 != color2;
                            },
                            content() {
                                player.addMark('fulline');
                            },
                        },
                        ksihigu: {
                            mark: true,
                            marktext: '抗',
                            intro: {
                                content(storage, player, skill) {
                                    var suits = [];
                                    player.getHistory('useCard', function (evt) {
                                        if (suits.length >= 4) return;
                                        for (var i of evt.cards) suits.add(i.suit);
                                    });
                                    if (suits.length && _status.currentPhase == player) return '本回合已使用的花色数为:' + suits.length;
                                    return '本回合还未使用任何花色.';
                                },
                            },
                            trigger: {
                                player: ['phaseEnd'],
                            },
                            filter(event, player) {
                                var suits = [];
                                player.getHistory('useCard', function (evt) {
                                    if (suits.length >= 4) return;
                                    for (var i of evt.cards) suits.add(i.suit);
                                });
                                return suits.length >= 3;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('摸两张牌', '视为使用一张不计入次数的基本牌', function () {
                                    if (player.countCards('h') <= 3) {
                                        return '摸两张牌';
                                    } else return '视为使用一张不计入次数的基本牌';
                                });
                                ('step 1');
                                if (result.control == '摸两张牌') {
                                    player.draw(2);
                                    event.finish();
                                } else {
                                    var dialog = ['抗歌:选择并使用一张基本牌.'];
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        if (get.type(lib.inpile[i]) == 'basic' && lib.filter.cardEnabled({ name: lib.inpile[i] }, player)) list.push(['基本', '', lib.inpile[i]]);
                                        if (lib.inpile[i] == 'sha' && lib.filter.cardEnabled({ name: lib.inpile[i] }, player)) {
                                            list.push(['基本', '', 'sha', 'fire']);
                                            list.push(['基本', '', 'sha', 'thunder']);
                                        }
                                    }
                                    dialog.push([list, 'vcard']);
                                    player.chooseButton(dialog).set('ai', function (button) {
                                        if (player.hp > 2) return button.link[2] == 'sha' && button.link[3] == 'fire';
                                        return get.value({ name: button.link[2] }) >= 7; //QQQ
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, true, false);
                                }
                            },
                        },
                        juhoum: {
                            audio: 'jiang', //qqq
                            audioname: ['re_sunce'],
                            trigger: {
                                player: ['useCard', 'respond'],
                                target: 'useCardToTargeted',
                            },
                            filter(event, player, target) {
                                if (event.player == event.target) return false;
                                return (event.card.name == 'juedou' || (get.color(event.card) == 'red' && get.type(event.card) == 'basic')) && (event.player == player || event.parent.triggeredTargets3.length == 1);
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        yinghun_change: {
                            audio: 'ext:界限突破/audio:2',
                            audioname2: {
                                re_sunyi_shui: 'rehunzi',
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('yinghun_change'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var num = player.getDamagedHp() > 0 ? player.getDamagedHp() : 1;
                                        if (num == 1 && target.countCards('he') == 0) {
                                            return 0;
                                        }
                                        if (get.attitude(_status.event.player, target) > 0) {
                                            return 10 + get.attitude(_status.event.player, target);
                                        }
                                        if (num == 1) {
                                            return -1;
                                        }
                                        return 1;
                                    })
                                    .setHiddenSkill(event.name);
                                ('step 1');
                                if (result.bool) {
                                    event.before = result.targets[0].countCards('h');
                                    event.num = player.getDamagedHp() ? player.getDamagedHp() : 1;
                                    event.target = result.targets[0];
                                    if (event.num == 1) {
                                        event.directcontrol = true;
                                    } else {
                                        var str1 = `摸${get.cnNumber(event.num, true)}弃一`;
                                        var str2 = '摸一弃' + get.cnNumber(event.num, true);
                                        player
                                            .chooseControl(str1, str2, function (event, player) {
                                                return _status.event.choice;
                                            })
                                            .set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                                        event.str = str1;
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.directcontrol || result.control == event.str) {
                                    event.target.draw(event.num);
                                    event.target.chooseToDiscard(true, 'he');
                                } else {
                                    event.target.draw();
                                    event.target.chooseToDiscard(event.num, true, 'he');
                                }
                                ('step 3');
                                if (event.before != event.target.countCards('h')) {
                                    var num = event.before > event.target.countCards('h') ? event.before - event.target.countCards('h') : event.target.countCards('h') - event.before;
                                    player.draw(num);
                                }
                            },
                        },
                        hunzi_change: {
                            audio: ['rehunzi'],
                            content() {
                                player.loseMaxHp();
                                player.recover();
                                player.addSkill('yingzi_dr');
                                player.addSkill('yinghun_change');
                                game.log(player, '获得了技能', '#g【英姿】', '和', '#g【英魂】');
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                            juexingji: true,
                            derivation: ['yingzi_dr', 'yinghun_change'],
                            trigger: {
                                player: ['phaseUseBefore', 'phaseZhunbeiBegin'],
                            },
                            filter(event, player) {
                                return player.hp <= 2 && !player.storage.hunzi_change;
                            },
                            forced: true,
                            ai: {
                                threaten(player, target) {
                                    if (target.hp <= 2) return 2;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') == 1 && target.hp == 3 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                        },
                        quxing: {
                            audio: 'drlt_poxi',
                            trigger: {
                                player: ['gainAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'gain' && event.player == player) return event.cards && event.cards.length > 1;
                                var evt = event.getl(player);
                                return evt && evt.cards2 && evt.cards2.length > 1;
                            },
                            content() {
                                'step 0';
                                var num = player.hujia > 0 ? player.hujia : 1;
                                player
                                    .chooseTarget(`你可以弃最多${get.cnNumber(num)}角色一张牌.`, [1, num], function (card, player, target) {
                                        return target.countCards('hej');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (att < 0) {
                                            att = -Math.sqrt(-att);
                                        } else {
                                            att = Math.sqrt(att);
                                        }
                                        return att * lib.card.guohe.ai.result.target(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets;
                                    for (var i = 0; i < targets.length; i++) {
                                        player.discardPlayerCard(targets[i], 'hej', true);
                                    }
                                }
                            },
                        },
                        fuwu: {
                            audio: ['fenwei'],
                            trigger: {
                                global: 'discardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.player.countCards('he');
                            },
                            content() {
                                'step 0';
                                player.chooseControl('摸两张牌', '获得一点护甲', '取消', function () {
                                    if (player.countCards('h') <= 2) {
                                        return '摸两张牌';
                                    } else return '获得一点护甲';
                                });
                                ('step 1');
                                if (result.control != '取消') {
                                    if (result.control == '摸两张牌') {
                                        player.draw(2);
                                    } else {
                                        player.changeHujia(1);
                                    }
                                }
                            },
                        },
                        luongtu: {
                            group: ['luongtu_wx', 'luongtu_effect'],
                            subSkill: {
                                effect: {
                                    //QQQ
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    prompt(player) {
                                        var player = _status.event.player;
                                        return '摸一张牌并获得一点护甲？';
                                    },
                                    filter(event, player) {
                                        return (event.skill == 'luongtu_wx' || event.skill == 'luongtu') && event.card.number == player.hujia;
                                    },
                                    content() {
                                        player.draw();
                                        player.changeHujia(1);
                                    },
                                },
                                wx: {
                                    audio: 'longdan',
                                    enable: 'chooseToUse',
                                    selectCard: 1,
                                    filterCard(card, player, event) {
                                        return get.type(card) != 'basic';
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('h', function (card, player) {
                                            return get.type(card) != 'basic';
                                        });
                                    },
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    prompt(player) {
                                        var player = _status.event.player;
                                        return '将一张非基本牌当做一张无懈可击使用';
                                    },
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    threaten: 1.2,
                                    ai: {
                                        basic: {
                                            useful: [6, 4],
                                            value: [6, 4],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                        expose: 0.2,
                                    },
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hujia) return (num += player.hujia);
                                },
                                aiValue(player, card, num) {
                                    if (card.name != 'sha' && card.name != 'shan') return;
                                    var geti = function () {
                                        var cards = player.getCards('hs', function (card) {
                                            return card.name == 'sha' || card.name == 'shan';
                                        });
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                                },
                                aiUseful() {
                                    return lib.skill.ollongdan.mod.aiValue.apply(this, arguments);
                                },
                            },
                            audio: 'longdan', //QQQ
                            hiddenCard(player, name) {
                                if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
                                if (name == 'jiu') return player.countCards('hs', 'tao') > 0;
                                return false;
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            position: 'hs',
                            prompt: '将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
                            viewAs(cards, player) {
                                var name = false;
                                switch (cards[0]?.name) {
                                    case 'sha':
                                        name = 'shan';
                                        break;
                                    case 'shan':
                                        name = 'sha';
                                        break;
                                    case 'tao':
                                        name = 'jiu';
                                        break;
                                    case 'jiu':
                                        name = 'tao';
                                        break;
                                }
                                if (name) return { name: name };
                                return null;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    var max = 0;
                                    var name2;
                                    var list = ['sha', 'tao', 'jiu'];
                                    var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                    for (var i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                            var temp = get.order({ name: name });
                                            if (temp > max) {
                                                max = temp;
                                                name2 = map[name];
                                            }
                                        }
                                    }
                                    if (name2 == card.name) return 1;
                                    return 0;
                                }
                                return 1;
                            },
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                var filter = event._backup.filterCard;
                                var name = card.name;
                                if (name == 'sha' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                if (name == 'shan' && filter({ name: 'sha', cards: [card] }, player, event)) return true;
                                if (name == 'tao' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
                                if (name == 'jiu' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                return false;
                            },
                            filter(event, player) {
                                var filter = event.filterCard;
                                if (filter({ name: 'sha' }, player, event) && player.countCards('hs', 'shan')) return true;
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hs', 'sha')) return true;
                                if (filter({ name: 'tao' }, player, event) && player.countCards('hs', 'jiu')) return true;
                                if (filter({ name: 'jiu' }, player, event) && player.countCards('hs', 'tao')) return true;
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'shan';
                                            break;
                                        case 'respondShan':
                                            name = 'sha';
                                            break;
                                    }
                                    if (!player.countCards('hs', name)) return false;
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'tao', 'jiu'];
                                        var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                var temp = get.order({ name: name });
                                                if (temp > max) max = temp;
                                            }
                                        }
                                        if (max > 0) max += 0.3;
                                        return max;
                                    }
                                    return 4;
                                },
                            },
                        },
                        reyajiao_yi: {
                            audio: 'reyajiao',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player != _status.currentPhase && event.hs && event.hs.length && ['useCard', 'respond'].includes(event.parent.name);
                            },
                            content() {
                                'step 0';
                                event.card = get.cards()[0];
                                game.cardsGotoOrdering(event.card);
                                event.videoId = lib.status.videoId++;
                                var judgestr = get.translation(player) + '发动了【涯角】';
                                game.addVideo('judge1', player, [get.cardInfo(event.card), judgestr, event.videoId]);
                                game.broadcastAll(
                                    function (player, card, str, id, cardid) {
                                        var event;
                                        if (game.online) {
                                            event = {};
                                        } else {
                                            event = _status.event;
                                        }
                                        if (game.chess) {
                                            event.node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
                                        } else {
                                            event.node = player.$throwordered(card.copy(), true);
                                        }
                                        if (lib.cardOL) lib.cardOL[cardid] = event.node;
                                        event.node.cardid = cardid;
                                        event.node.classList.add('thrownhighlight');
                                        ui.arena.classList.add('thrownhighlight');
                                        event.dialog = ui.create.dialog(str);
                                        event.dialog.classList.add('center');
                                        event.dialog.videoId = id;
                                    },
                                    player,
                                    event.card,
                                    judgestr,
                                    event.videoId,
                                    get.id()
                                );
                                game.log(player, '展示了', event.card);
                                if (get.type(event.card, 'trick') == get.type(trigger.parent.card, 'trick')) {
                                    player
                                        .chooseTarget('选择获得此牌的角色')
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (_status.event.du) {
                                                if (target.hasSkillTag('nodu')) return 0;
                                                return -att;
                                            }
                                            if (att > 0) {
                                                return att + Math.max(0, 5 - target.countCards('h'));
                                            }
                                            return att;
                                        })
                                        .set('du', event.card.name == 'du');
                                } else {
                                    event.disbool = true;
                                    player
                                        .chooseTarget(`是否令一名角色将手牌摸至/弃置至${player.hujia}？`, function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (target.countCards('h') > player.hujia) return att < 0;
                                            return att > 0;
                                        });
                                }
                                ('step 1');
                                if (event.disbool) {
                                    if (result.bool) {
                                        var num1 = player.hujia;
                                        var num2 = result.targets[0].countCards('h');
                                        player.line(result.targets[0], 'green');
                                        if (num1 > num2) result.targets[0].drawTo(num1 > 5 ? 5 : num1);
                                        if (num1 < num2) result.targets[0].chooseToDiscard('h', true, num2 - num1);
                                    }
                                    event.dialog.close();
                                    game.addVideo('judge2', null, event.videoId);
                                    ui.arena.classList.remove('thrownhighlight');
                                } else if (result.targets) {
                                    event.dialog.close();
                                    game.addVideo('judge2', null, event.videoId);
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(event.card, 'log');
                                    if (result.targets[0] != player) player.changeHujia(1);
                                    ui.arena.classList.remove('thrownhighlight');
                                } else {
                                    event.dialog.close();
                                    game.addVideo('judge2', null, event.videoId);
                                    ui.arena.classList.remove('thrownhighlight');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'respond') && target.countCards('h') > 1) return [1, 0.2];
                                    },
                                },
                            },
                        },
                        loungwu: {
                            audio: 'longhun',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return player != event.player;
                            },
                            check(event, player) {
                                if (get.damageEffect(event.player, player, player) < 0) return true;
                                var att = get.attitude(player, event.player);
                                if (
                                    att > 0 &&
                                    event.player.countCards('he', function (card, player) {
                                        return get.type(card) == 'equip' && get.subtype(card) == 'equip1';
                                    }) > 1
                                )
                                    return false;
                                if (event.num > 1) {
                                    if (att < 0) return false;
                                    if (att > 0) return true;
                                }
                                if (event.num <= event.player.hujia && att < 0) return true;
                                var cards = event.player.getGainableCards(player, 'he', function (card, player) {
                                    return get.type(card) == 'equip' && get.subtype(card) == 'equip1';
                                });
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (get.equipValue(i) > 0 && att < 0) return true;
                                        if (get.equipValue(i) <= 0 && att > 0) return true;
                                    }
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                event.draw = trigger.player.hujia > 0 ? trigger.player.hujia : 1;
                                ('step 1');
                                if (trigger.player.hujia) {
                                    trigger.player.changeHujia(-Infinity);
                                }
                                if (
                                    trigger.player.countCards('he', function (card, player) {
                                        return get.type(card) == 'equip' && get.subtype(card) == 'equip1';
                                    })
                                ) {
                                    player.gain(
                                        trigger.player.getCards('he', function (card, player) {
                                            return get.type(card) == 'equip' && get.subtype(card) == 'equip1';
                                        }),
                                        trigger.player,
                                        'give'
                                    );
                                } else player.draw(event.draw);
                                trigger.cancel();
                            },
                        },
                        goushui: {
                            group: ['goushui_end', 'goushui_turn', 'goushui_damage', 'goushui_phase', 'goushui_dis', 'goushui_turnover'],
                            subSkill: {
                                end: {
                                    trigger: {
                                        player: ['phaseEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countMark('goushui') || player.hp > 2) return false;
                                        return true;
                                    },
                                    content() {
                                        player.addMark('goushui');
                                    },
                                },
                                turnover: {
                                    trigger: {
                                        player: ['turnOverEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countMark('goushui') || !player.isTurnedOver()) return false;
                                        return true;
                                    },
                                    content() {
                                        player.addMark('goushui');
                                    },
                                },
                                dis: {
                                    trigger: {
                                        player: ['discardAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countMark('goushui') || _status.currentPhase == player) return false;
                                        return true;
                                    },
                                    content() {
                                        player.addMark('goushui');
                                    },
                                },
                                turn: {
                                    trigger: {
                                        player: ['turnOverBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('goushui') && !player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.draw();
                                        player.removeMark('goushui');
                                    },
                                },
                                damage: {
                                    trigger: {
                                        player: ['damageBegin2'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('goushui');
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.draw();
                                        player.removeMark('goushui');
                                    },
                                },
                                phase: {
                                    trigger: {
                                        player: ['phaseBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('goushui');
                                    },
                                    content() {
                                        player.draw(3);
                                        player.removeMark('goushui');
                                    },
                                },
                            },
                            intro: {
                                content: 'mark',
                            },
                            forced: true,
                            marktext: '守',
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            filter(event, player) {
                                if (player.countMark('goushui')) return false;
                                return true;
                            },
                            content() {
                                player.addMark('goushui');
                            },
                        },
                        baigui: {
                            init(player) {
                                if (!player.storage.baigui) player.storage.baigui = [];
                            },
                            marktext: '不',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.baigui.length) return '当前已记录数字:' + player.storage.baigui;
                                    return '未有记录.';
                                },
                            },
                            audio: 'buqu',
                            trigger: {
                                player: 'chooseToUseBefore',
                            },
                            preHidden: true,
                            filter(event, player) {
                                return event.type == 'dying' && player.isDying() && event.dying == player;
                            },
                            content() {
                                'step 0';
                                var card = get.cards()[0];
                                event.card = card;
                                ('step 1');
                                var num = event.card.number;
                                player.showCards(event.card, '不屈');
                                if (!player.storage.baigui.includes(num)) {
                                    player.markAuto('baigui', [num]);
                                    player.gain(event.card, 'gain2');
                                    trigger.cancel();
                                    trigger.result = { bool: true };
                                    if (player.hp <= 0) {
                                        player.recover(1 - player.hp);
                                    }
                                }
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    if (get.mode() != 'guozhan' && player.storage.baigui.length) return player.storage.baigui.length;
                                },
                            },
                            ai: {
                                save: true,
                                mingzhi: true,
                                skillTagFilter(player, tag, target) {
                                    if (player != target) return false;
                                },
                            },
                        },
                        fu_jui: {
                            audio: 'fenji',
                            subSkill: {
                                end: {},
                                skip: {},
                            },
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            prompt2(event, player) {
                                return '每回合限一次,当一名任意角色使用一张非转化牌结算完毕后,你可以损失一点体力,令其摸一张牌,若此牌的点数与"不屈"中的记录相同,则改为摸两张牌. .';
                            },
                            logTarget: 'player',
                            checkx(event, player) {
                                if (player.storage.baigui) {
                                    if (player.storage.baigui.length >= 7) return false;
                                }
                                return get.attitude(player, event.player) > 0 && event.player.countCards('h') < 3;
                            },
                            filter(event, player) {
                                return event.cards && event.cards.length == 1 && !player.hasSkill('fu_jui_end') && !event.player.hasSkill('fu_jui_skip');
                            },
                            content() {
                                'step 0';
                                var check = lib.skill.fu_jui.checkx(trigger, player);
                                player.chooseBool(`是否让${get.translation(trigger.player)}摸牌？`).ai = function (event, player) {
                                    if (check) return true;
                                    return false;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('fu_jui_end');
                                    player.loseHp();
                                    if (player.storage.baigui.includes(trigger.card.number)) {
                                        trigger.player.draw(2);
                                    } else trigger.player.draw();
                                } else {
                                    trigger.player.addTempSkill('fu_jui_skip');
                                }
                                ('step 2');
                            },
                        },
                        wushui: {
                            shaRelated: true,
                            audio: 'wushuang',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player, target) {
                                if (event.target == player && event.player == player) return false;
                                if (!event.card || (event.card.name == 'sha' && event.target == player)) return false;
                                return event.card.name == 'sha' || event.card.name == 'juedou';
                            },
                            content() {
                                var id = (player == trigger.player ? trigger.target : player).playerid;
                                var map = trigger.parent.customArgs;
                                if (trigger.card.name == 'sha') {
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].shanRequired == 'number') {
                                        map[id].shanRequired++;
                                    } else {
                                        map[id].shanRequired = 2;
                                    }
                                } else {
                                    var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
                                    var idt = trigger.target.playerid;
                                    var map = trigger.parent.customArgs;
                                    if (!map[idt]) map[idt] = {};
                                    if (!map[idt].shaReq) map[idt].shaReq = {};
                                    if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                                    map[idt].shaReq[id]++;
                                }
                            },
                            group: 'wushui_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    audio: 'wushuang', //QQQ
                                    filter(event, player) {
                                        return event.num > 1;
                                    },
                                    content() {
                                        trigger.num = 1;
                                    },
                                },
                            },
                        },
                        baulun: {
                            audio: ['shenqu'],
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.getHistory('damage').indexOf(trigger) > 0) {
                                    player.chooseToDiscard('h', true, 1);
                                } else {
                                    player.draw(2);
                                }
                                ('step 1');
                                if (player.countCards('h') <= 0) {
                                    player
                                        .chooseTarget('暴怒:你可以视为使用一张【杀】.', false, function (card, player, target) {
                                            return target != player && player.inRange(target) && player.canUse({ name: 'sha' }, target, false);
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, { name: 'sha' }, player, player);
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var card = { name: 'sha' };
                                    var target = result.targets[0];
                                    player.line(target, 'fire');
                                    player.useCard(card, target, false);
                                }
                            },
                        },
                        shuiwui: {
                            audio: ['jiwu'],
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(lib.sort.seat);
                                event.targets = targets;
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                for (var i = 0; i < targets.length; i++) {
                                    player.line(targets[i], 'green');
                                    targets[i].addTempSkill('shuiwui_noequip');
                                }
                            },
                            subSkill: {
                                noequip: {
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    skillBlocker(skill, player) {
                                        return lib.skill[skill].equipSkill;
                                    },
                                    ai: {
                                        unequip2: true,
                                    },
                                    charlotte: true,
                                    forced: true,
                                    mark: true,
                                    marktext: '神',
                                    intro: {
                                        content(storage, player, skill) {
                                            return '你的装备失效.';
                                        },
                                    },
                                },
                            },
                        },
                        tuoxui: {
                            subSkill: {
                                cd: {
                                    charlotte: true,
                                    forced: true,
                                },
                                draw: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.tuoxui_cards.includes(event.cards[0]);
                                    },
                                    content() {
                                        player.draw();
                                    },
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            if (card.hasGaintag('tuoxui')) {
                                                return true;
                                            }
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && card.hasGaintag('tuoxui')) {
                                                return false;
                                            }
                                        },
                                    },
                                    onremove(player) {
                                        player.removeGaintag('tuoxui');
                                        player.storage.tuoxui_cards = [];
                                    },
                                },
                            },
                            init(player) {
                                player.storage.tuoxui_cards = [];
                            },
                            audio: 'retuxi',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return (
                                    event.num > 0 &&
                                    !event.numFixed &&
                                    game.hasPlayer(function (target) {
                                        return target.countCards('h') > 0 && player != target;
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                var list = [];
                                var num = game.countPlayer(function (current) {
                                    return current.countCards('h') > 0 && player != current;
                                });
                                event.num = Math.min(trigger.num, 9);
                                for (var i = 1; i <= event.num; i++) {
                                    if (i <= num) list.push(i);
                                }
                                list.push('取消');
                                event.list = list;
                                player
                                    .chooseControl(list, function (event, player) {
                                        var players = game.countPlayer(function (current) {
                                            return current.countCards('h') > 0 && player != current && get.attitude(player, current) < 0;
                                        });
                                        if (players >= trigger.num) return event.list[trigger.num - 1];
                                        else if (trigger.num > players) return players > 0 ? event.list[players - 1] : '取消';
                                    })
                                    .set('prompt', '突袭:是否少摸牌获得等量名角色的一张手牌？');
                                ('step 1');
                                if (result.control != '取消') {
                                    event.countTargets = result.control;
                                    event.countTargets_show = result.control;
                                    trigger.num -= result.control;
                                } else event.finish();
                                ('step 2');
                                event.countTargets--;
                                player
                                    .chooseTarget(`突袭:获得${event.countTargets_show}名角色的一张手牌.`, true, function (card, player, target) {
                                        return player != target && !target.hasSkill('tuoxui_cd') && target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (target.hasSkill('tuntian')) return att / 10;
                                        return 1 - att;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.addTempSkill('tuoxui_cd');
                                    var next = player.choosePlayerCard(result.targets[0], '请获得其一张手牌.', 1, 'h', true, function (card) {
                                        return 1;
                                    });
                                }
                                ('step 4');
                                if (result.bool && result.cards.length) {
                                    player.line(event.target, 'green');
                                    if (get.type2(result.cards[0]) == 'trick') {
                                        player.gain(result.cards[0], event.target, 'give').gaintag.add('tuoxui');
                                    } else {
                                        player.gain(result.cards[0], event.target, 'give');
                                    }
                                    event.card = result.cards[0];
                                    var card_use = result.cards[0];
                                    if (get.type2(event.card) == 'equip') {
                                        if (player.hujia < 3) player.changeHujia(1);
                                    }
                                    if (get.type2(event.card) == 'trick') {
                                        if (!player.hasSkill('tuoxui_draw')) player.addTempSkill('tuoxui_draw');
                                        player.storage.tuoxui_cards.push(event.card);
                                    }
                                    if (get.type2(event.card) == 'basic') {
                                        player.chooseBool(`对${get.translation(event.target)}使用一张我距离和次数限制的【杀】？`).ai = function (event, player) {
                                            return get.attitude(event.target, player, player) < 0;
                                        };
                                    }
                                }
                                ('step 5');
                                if (result.bool && get.type2(event.card) == 'basic') {
                                    player.useCard({ name: 'sha' }, event.target, false); //QQQ
                                }
                                if (event.countTargets > 0) event.goto(2);
                            },
                            ai: {
                                threaten: 1.6,
                                expose: 0.2,
                            },
                        },
                        wufuoi: {
                            forced: true,
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hujia) return (num += player.hujia);
                                },
                            },
                        },
                        lingtui: {
                            audio: 'releiji',
                            subSkill: {
                                locked: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            if (player.getExpansions('lingtui_locked').length) return (num += player.getExpansions('lingtui_locked').length);
                                        },
                                    },
                                    intro: {
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                    marktext: '雷',
                                    onremove(player) {
                                        player.gain(player.getExpansions('lingtui_locked'), 'gain2');
                                        player.storage.lingtui = [];
                                    },
                                },
                            },
                            init(player) {
                                player.storage.lingtui = [];
                            },
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                var s = get.translation(event.card);
                                if (s.length) {
                                    for (var i = 0; i < s.length; i++) {
                                        if (s[i] == '雷' || s[i] == '闪' || s[i] == '电') return true;
                                    }
                                }
                                if (get.nature(event.card) == 'thunder') return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    var suit = card.suit;
                                    var color = get.color(card);
                                    var num = player.countCards('h');
                                    var lose = player.maxHp - player.hp;
                                    if (suit == 'spade') return -6;
                                    if (suit == 'club') return -4;
                                    if (color == 'red' && player.getExpansions('lingtui_locked').length < 2) return -4;
                                    return 0;
                                }).judge2 = function (result) {
                                    return result.bool == false ? true : false;
                                };
                                ('step 1');
                                if (result.color == 'red') {
                                    if (player.getExpansions('lingtui_locked').length < 2) {
                                        var cards = get.cards(2);
                                        player.addToExpansion(cards, player, 'giveAuto').gaintag.add('lingtui_locked');
                                        if (!player.hasSkill('lingtui_locked')) player.addTempSkill('lingtui_locked');
                                    }
                                    event.finish();
                                } else if (result.suit == 'club' || result.suit == 'spade') {
                                    event.suit = result.suit;
                                    player.chooseTarget('雷击:对一名角色造成' + (result.suit == 'spade' ? '2' : '1') + '点伤害.' + (result.suit == 'club' ? '并回复1点体力.' : ''), function (card, player, target) {
                                        return target != player;
                                    }).ai = function (target) {
                                        if (target.hasSkill('hongyan')) return 0;
                                        return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    if (event.suit == 'club') {
                                        event.target.damage('thunder');
                                        player.recover();
                                    } else event.target.damage(2, 'thunder');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        gountoun: {
                            audio: 'guidao',
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('hes') > 0 || player.countCards('j');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                if (player.countCards('hs')) list.push('牌区');
                                if (player.countCards('j')) list.push('判定牌');
                                if (list.length > 1) {
                                    player
                                        .chooseControl(list, function (event, player) {
                                            if (player.countCards('j')) return '判定牌';
                                            return '牌区';
                                        })
                                        .set('prompt', '鬼道:用什么区域牌更改判定牌？');
                                } else {
                                    if (player.countCards('hes')) event.control = '牌区';
                                    if (player.countCards('j')) event.control = '判定牌';
                                }
                                ('step 1');
                                if (result.control) event.control = result.control;
                                if (event.control == '牌区') {
                                    player
                                        .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('gountoun'), 'hes', function (card) {
                                            var player = _status.event.player;
                                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                            if (mod2 != 'unchanged') return mod2;
                                            var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                            if (mod != 'unchanged') return mod;
                                            return true;
                                        })
                                        .set('ai', function (card) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            var judging = _status.event.judging;
                                            var result = trigger.judge(card) - trigger.judge(judging);
                                            var attitude = get.attitude(player, trigger.player);
                                            if (attitude == 0 || result == 0) return 0;
                                            if (attitude > 0) {
                                                return result;
                                            } else {
                                                return -result;
                                            }
                                        })
                                        .set('judging', trigger.player.judging[0]);
                                } else {
                                    player.chooseButton([get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('gountoun'), player.getCards('j')], 1, false).ai = function (button) {
                                        var card = button.link;
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = trigger.player.judging[0];
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result;
                                        } else {
                                            return -result;
                                        }
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.cards = event.control == '牌区' ? result.cards : result.links;
                                    player.respond(event.cards, 'highlight', 'guidao', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = event.cards[0];
                                    trigger.orderingCards.addArray(event.cards);
                                    game.log(trigger.player, '的判定牌改为', event.cards[0]);
                                }
                                ('step 4');
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        huitou: {
                            zhuSkill: true,
                            audio: 'huangtian2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('huitou')) return false;
                                return (event.name != 'phase' || game.phaseNumber == 0) && !lib.inpile.includes('juilingzuiru');
                            },
                            content() {
                                'step 0';
                                for (var i = 0; i < 1; i++) {
                                    var card = game.createCard2('juilingzuiru', 'spade', 13);
                                    event.card = card;
                                    ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                }
                                game.log(player, '将1张祭雷之刃放入了牌堆.');
                                game.broadcastAll(function () {
                                    lib.inpile.add('juilingzuiru');
                                });
                                game.updateRoundNumber();
                                ('step 1');
                                player.gain(event.card, 'gain2');
                            },
                        },
                        juilingzuiru_skill: {
                            group: 'juilingzuiru_skill_damage',
                            subSkill: {
                                damage: {
                                    popup: false,
                                    equipSkill: true,
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    prompt: '【祭雷之刃】:<br>是否将此杀变为雷杀？',
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.card.nature != 'thunder';
                                    },
                                    content() {
                                        player.popup('祭雷之刃');
                                        trigger.card.nature = 'thunder';
                                    },
                                    _priority: -25,
                                },
                            },
                            equipSkill: true,
                            usable: 1,
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            viewAs: {
                                name: 'shan',
                            },
                            prompt: '视为打出一张闪',
                            check() {
                                return 1;
                            },
                            ai: {
                                order: 2,
                                respondShan: true,
                                skillTagFilter(player) {
                                    var num = player.getStat('skill').juilingzuiru_skill || 0;
                                    if (num < 1) return false;
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
                            _priority: -25,
                        },
                        wushui_s: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.hasEnabledSlot(1) || player.hasEnabledSlot(2) || player.hasEnabledSlot(5) || player.hasEnabledSlot('horse');
                            },
                            content() {
                                'step 0';
                                player.chooseToDisable(true).set('ai', function (event, player, list) {
                                    if (list.includes('equip2')) return 'equip2';
                                    if (
                                        list.includes('equip1') &&
                                        player.countCards('h', function (card) {
                                            return card.name == 'sha' && player.hasUseTarget(card);
                                        }) -
                                        player.getCardUsable('sha') >
                                        1
                                    )
                                        return 'equip1';
                                    if (
                                        list.includes('equip5') &&
                                        player.countCards('h', function (card) {
                                            return get.type2(card, player) == 'trick' && player.hasUseTarget(card);
                                        }) > 1
                                    )
                                        return 'equip5';
                                });
                                ('step 1');
                                switch (result.control) {
                                    case 'equip1':
                                        player.addTempSkill('drlt_jueyan1', { player: 'phaseAfter' });
                                        break;
                                    case 'equip2':
                                        player.draw(3);
                                        player.addTempSkill('drlt_jueyan3', { player: 'phaseAfter' });
                                        break;
                                    case 'equip3_4':
                                        player.addTempSkill('drlt_jueyan2', { player: 'phaseAfter' });
                                        break;
                                    case 'equip5':
                                        player.addTempSkill('rejizhi', { player: 'phaseAfter' });
                                        break;
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    player(player) {
                                        if (player.hasEnabledSlot('equip2')) return 1;
                                        if (
                                            player.hasEnabledSlot('equip1') &&
                                            player.countCards('h', function (card) {
                                                return card.name == 'sha' && player.hasValueTarget(card);
                                            }) -
                                            player.getCardUsable('sha') >
                                            1
                                        )
                                            return 1;
                                        if (
                                            player.hasEnabledSlot('equip5') &&
                                            player.countCards('h', function (card) {
                                                return get.type2(card, player) == 'trick' && player.hasUseTarget(card);
                                            }) > 1
                                        )
                                            return 1;
                                        return -1;
                                    },
                                },
                            },
                        },
                        mopojun: {
                            subSkill: {
                                2: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.getExpansions('mopojun_2').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('mopojun_2');
                                        player.gain(cards, 'draw');
                                        game.log(player, `收回了${get.cnNumber(cards.length)}张<破军>牌`);
                                        ('step 1');
                                        player.removeSkill('mopojun_2');
                                    },
                                    intro: {
                                        markcount: 'expansion',
                                        mark(dialog, storage, player) {
                                            var cards = player.getExpansions('mopojun_2');
                                            if (player.isUnderControl(true)) dialog.addAuto(cards);
                                            else return `共有${get.cnNumber(cards.length)}张牌`;
                                        },
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        var num = 0;
                                        if (event.target.getExpansions('mopojun_2').length) {
                                            for (var i = 0; i < event.target.getExpansions('mopojun_2').length; i++) {
                                                var suit = get.suit(event.target.getExpansions('mopojun_2')[i]);
                                                if (suit == event.card.suit) num = num + 1;
                                            }
                                        } else return false;
                                        if (num <= 0) return false;
                                        return event.card && event.card.name == 'sha' && event.card.suit;
                                    },
                                    content() {
                                        var evt = trigger.parent;
                                        if (typeof evt.baseDamage != 'number') evt.baseDamage = 1;
                                        var num = 0;
                                        if (trigger.target.getExpansions('mopojun_2').length) {
                                            for (var i = 0; i < trigger.target.getExpansions('mopojun_2').length; i++) {
                                                var suit = get.suit(trigger.target.getExpansions('mopojun_2')[i]);
                                                if (suit == trigger.card.suit) num = num + 1;
                                            }
                                        }
                                        if (num > 0) {
                                            evt.baseDamage += num;
                                        }
                                    },
                                },
                            },
                            shaRelated: true,
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            _priority: 99,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.target.maxHp > 0 && event.target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.maxHp, trigger.target.countCards('he'))], get.prompt('mopojun', trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) return 0;
                                    var val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.target;
                                    target.addSkill('mopojun_2');
                                    target.addToExpansion('giveAuto', result.cards, target).gaintag.add('mopojun_2');
                                    player.addTempSkill('mopojun_3');
                                    var audio = document.createElement('audio');
                                    audio.src = 'extension/界限突破/audio/mo_juzui_attack.mp3';
                                    audio.play();
                                    var Animation = ui.create.div();
                                    Animation.setBackgroundImage('extension/界限突破/mo_juzui_skill.gif');
                                    Animation.style.backgroundSize = 'cover';
                                    Animation.style['z-index'] = 1;
                                    Animation.style.width = '100%';
                                    Animation.style.height = '100%';
                                    Animation.style.left = 0;
                                    Animation.style.top = 0;
                                    ui.window.appendChild(Animation);
                                    setTimeout(function () {
                                        Animation.delete();
                                    }, 1000);
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                            _priority: 2000,
                        },
                        yucld: {
                            subSkill: {
                                gain: {
                                    trigger: {
                                        global: ['useCardAfter'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        var bool = false;
                                        for (var i = 0; i < player.storage.yucld.length; i++) {
                                            if (get.position(player.storage.yucld[i], true) == 'd' || get.position(player.storage.yucld[i], true) == 'o') bool = true;
                                        }
                                        return player.storage.yucld.length && bool && event.player == player.storage.yucld_target;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.storage.yucld;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (get.position(i, true) == 'd' || get.position(player.storage.yucld[i], true) == 'o') {
                                                    player.gain(i, 'draw');
                                                    game.log(player, '获得了' + get.translation(i));
                                                }
                                            }
                                        player.storage.yucld = [];
                                        player.storage.yucld_target = [];
                                    },
                                },
                            },
                            init(player) {
                                if (!player.storage.yucld) {
                                    player.storage.yucld = [];
                                    player.storage.yucld_target = [];
                                }
                            },
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            audio: 'ext:界限突破/audio:2',
                            filter(event, player) {
                                return player == event.target && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player.chooseCard(1, 'h', true, '请展示一张牌并弃置之,若花色相同你可以在杀结算完毕后回收').set('ai', function (card) {
                                    var suit = trigger.card.suit;
                                    return 5 - get.value(card) || card.suit == suit;
                                });
                                ('step 2');
                                var card = result.cards[0];
                                event.card = card;
                                player.showCards(card, get.translation(player) + '因【疑城】展示');
                                ('step 3');
                                player.discard(event.card);
                                if (event.card.suit == trigger.cards[0].suit) {
                                    player.storage.yucld.push(trigger.cards[0]);
                                    player.storage.yucld_target = trigger.player;
                                    player.addTempSkill('yucld_gain');
                                }
                            },
                        },
                        moquanji: {
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                player: ['damageEnd', 'loseAfter'],
                            },
                            forced: true,
                            notemp: true,
                            filter(event, player) {
                                if (player == _status.currentPhase && event.name != 'damage') return false;
                                if (event.parent.name == 'addToExpansion') return false;
                                if (event.name != 'damage') {
                                    return true;
                                } else {
                                    return event.num > 0;
                                }
                            },
                            content() {
                                'step 0';
                                if (trigger.name == 'damage') event.count = Math.min(trigger.num, 9);
                                else event.count = 1;
                                ('step 1');
                                event.count--;
                                player.draw();
                                ('step 2');
                                if (player.countCards('h')) {
                                    player.chooseCard('将一张手牌置于武将牌上作为<权>', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards && result.cards.length) {
                                    player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('moquanji');
                                }
                                ('step 4');
                                if (event.count > 0 && player.hasSkill('moquanji')) {
                                    player.chooseBool(get.prompt2('moquanji')).set('frequentSkill', 'moquanji');
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getExpansions('moquanji').length;
                                },
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
                                            if (!target.hasSkill('paiyi') && target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        mozili: {
                            audio: 'ext:界限突破/audio:2',
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            derivation: 'mopaiyi',
                            filter(event, player) {
                                return !player.hasSkill('mopaiyi') && player.getExpansions('moquanji').length >= 3;
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.recover();
                                player.draw(2);
                                player.addSkill('mopaiyi');
                                player.awakenSkill('mozili');
                                player.node.avatar.style.backgroundImage = `url(extension/界限突破/mo_zgonghui_skill/jiaolongkaitian2.gif)`;
                            },
                        },
                        mopaiyi: {
                            subSkill: {
                                user: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasSkill('mopaiyi_damage');
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                damage: {
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            return '你已成为排异的目标';
                                        },
                                    },
                                    forced: true,
                                },
                            },
                            group: 'mopaiyi_user',
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:界限突破/audio:2',
                            filter(event, player) {
                                return player.getExpansions('moquanji').length;
                            },
                            filterTarget: true,
                            content() {
                                'step 0';
                                player.chooseCardButton('交给其一张<权>', 1, player.getExpansions('moquanji'), true);
                                ('step 1');
                                if (result.bool) {
                                    var card = result.links[0];
                                    target.gain(card, 'give', player);
                                } else event.finish();
                                ('step 2');
                                player
                                    .chooseControl()
                                    .set('choiceList', ['对其造成一点伤害,其将手牌摸至X(X为<权>的数量,且最多为五).', '令其摸两张牌,直至其下个回合结束,你对其造成伤害时,此伤害+1.'])
                                    .set('ai', function () {
                                        var att = get.attitude(player, target);
                                        var num = player.getExpansions('moquanji').length;
                                        if (num > 5) num = 5;
                                        var num2 = num - target.countCards('h');
                                        if ((att < 0 && target.countCards('h') >= num) || (att < 0 && num <= 1)) {
                                            return 0;
                                        } else if (att >= 0 && num2 >= 3 && target.hp >= 2) {
                                            return 0;
                                        } else if (att >= 0) {
                                            return 1;
                                        } else {
                                            return 0;
                                        }
                                    });
                                ('step 3');
                                event.index = result.index;
                                if (event.index == 0) {
                                    target.damage(player);
                                    var num = player.getExpansions('moquanji').length;
                                    if (num > 5) num = 5;
                                    target.drawTo(num);
                                } else {
                                    target.draw(2);
                                    target.addTempSkill('mopaiyi_damage', { player: 'phaseEnd' });
                                }
                            },
                            ai: {
                                order: 1,
                                combo: 'quanji',
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        recongjian: {
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type2(event.card) == 'trick' && player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard: true,
                                    selectCard: 1,
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    ai1(card) {
                                        //QQQ
                                        if (card.name == 'du') return 20;
                                        if (get.type(card) == 'equip') return 15;
                                        if (_status.event.player.getDamagedHp() > 2 && get.type(card) == 'basic') return 30;
                                        return 6 - get.value(card);
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0.1;
                                            return 1 - att;
                                        }
                                        return att - 3;
                                    },
                                    prompt: get.prompt2('recongjian'),
                                    targets: trigger.targets,
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.give(result.cards, target, 'give');
                                    var num = 1;
                                    if (get.type(result.cards[0]) == 'equip') num = 2;
                                    if (get.type(result.cards[0]) == 'basic') player.recover();
                                    player.draw(num);
                                }
                            },
                        },
                        rexiongluan: {
                            subSkill: {
                                block_card: {
                                    mod: {
                                        cardEnabled2(card, player) {
                                            if (get.position(card) == 'h') return false;
                                        },
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.tag(card, 'damage')) return [0, -999];
                                            },
                                        },
                                    },
                                    charlotte: true,
                                },
                                use: {
                                    audio: 'rexiongluan',
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.target.hasSkill('rexiongluan_block_card') && event.target.countCards('e');
                                    },
                                    content() {
                                        trigger.target.chooseToDiscard(1, 'e', true);
                                    },
                                    onremove(player) {
                                        player.storage.rexiongluan_use.removeSkill('rexiongluan_block_card');
                                        player.storage.rexiongluan_use.unmarkSkill('rexiongluan_block_card');
                                        delete player.storage.rexiongluan_use;
                                    },
                                    mod: {
                                        targetInRange(card, player, target) {
                                            if (target.hasSkill('rexiongluan_block_card')) {
                                                return true;
                                            }
                                        },
                                        cardUsableTarget(card, player, target) {
                                            if (target.hasSkill('rexiongluan_block_card')) return true;
                                        },
                                    },
                                    charlotte: true,
                                },
                            },
                            audio: 'ext:界限突破/audio:2',
                            enable: 'phaseUse',
                            mark: true,
                            limited: true,
                            filter(event, player) {
                                return !player.isDisabledJudge() || player.hasEnabledSlot();
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                player.awakenSkill('rexiongluan');
                                var disables = [];
                                for (var i = 2; i <= 5; i++) {
                                    for (var j = 0; j < player.countEnabledSlot(i); j++) {
                                        disables.push(i);
                                    }
                                }
                                if (disables.length) player.disableEquip(disables);
                                player.disableJudge();
                                player.addTempSkill('rexiongluan_use');
                                player.storage.rexiongluan_use = target;
                                target.addSkill('rexiongluan_block_card');
                                target.markSkillCharacter('rexiongluan_block_card', player, '雄乱', '无法使用或打出任何手牌,且被指定目标后需要弃置一张装备牌');
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target) {
                                        if (target.getEquip('bagua') || target.getEquip('rewrite_bagua')) return 0;
                                        let hs = player.countCards('h', (card) => {
                                            if (!get.tag(card, 'damage') || get.effect(target, card, player, player) <= 0) return 0;
                                            if (card.name === 'sha') {
                                                if (target.getEquip('bagua')) return 0.5;
                                                if (target.getEquip('rewrite_bagua')) return 0.25;
                                            }
                                            return 1;
                                        }),
                                            ts =
                                                target.hp +
                                                target.hujia +
                                                game.countPlayer((current) => {
                                                    if (get.attitude(current, target) > 0) return current.countCards('hs') / 8;
                                                    return 0;
                                                });
                                        if (hs >= ts) return -hs;
                                        return 0;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        wumo: {
                            audio: 'wumou',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type2(event.card) == 'trick' && event.card.name != 'juedou';
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(1, '【无谋】:弃一张牌,否则损失一点体力').set('ai', function (card) {
                                    if (card.name == 'tao') return -10;
                                    if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                    return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                });
                                ('step 1');
                                if (result.bool == false) {
                                    player.loseHp();
                                }
                            },
                            ai: {
                                effect: {
                                    player_use(card, player) {
                                        if (get.type(card) == 'trick' && get.value(card) < 6) {
                                            return [0, -2];
                                        }
                                    },
                                },
                            },
                        },
                        jiedou: {
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            usable: 1,
                            check(event, player, target) {
                                return get.attitude(player, event.target) >= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player != player && event.player != event.target && event.targets.length == 1;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    var suit = card.suit;
                                    if (suit == 'spade') return 0;
                                    return -4;
                                }).judge2 = function (result) {
                                    return result.bool == false ? true : false;
                                };
                                ('step 1');
                                if (result.suit != 'spade') {
                                    game.log(player, '取消了', '#y杀', '的目标');
                                    trigger.parent.excluded.add(trigger.target);
                                    if (trigger.target == player) {
                                        player.draw(2);
                                    } else {
                                        player.draw();
                                        trigger.target.draw();
                                    }
                                    trigger.player.draw();
                                }
                            },
                        },
                        star_jiwu: {
                            audio: 'ext:界限突破/audio:2',
                            onremove(player, skill) {
                                player.removeAdditionalSkill('star_jiwu');
                            },
                            init(player) {
                                if (game.online) return;
                                player.removeAdditionalSkill('star_jiwu');
                                player.addAdditionalSkill('star_jiwu', 'wushuang');
                            },
                            derivation: ['wushuang'],
                            group: 'star_jiwu_num',
                            subSkill: {
                                num: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    filter(event, player) {
                                        return player == _status.currentPhase;
                                    },
                                    forced: true,
                                    usable: 1,
                                    content() {
                                        if (trigger.card.name == 'sha') {
                                            if (!trigger.baseDamage) trigger.baseDamage = 1;
                                            trigger.baseDamage++;
                                            game.log(trigger.card, '的伤害值/回复值', '#y+' + 1);
                                        }
                                    },
                                },
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return (num += 1);
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += 2;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        remoke: {
                            init(player) {
                                if (!player.storage.remoke_block) player.storage.remoke_block = [];
                            },
                            audio: 'ext:界限突破/audio:3',
                            intro: {
                                content(storage, player, skill) {
                                    var list = [];
                                    if (player.hasSkill('zui_ji_effect')) list = `<br><span style='color:red'>以下牌名无法记录:${get.translation(player.storage.zui_ji_list)}</span>`;
                                    if (player.hasSkill('remoke_used')) list += `<br><span style='color:Aqua'>本轮已记录:${get.translation(player.getStorage('remoke_used'))}</span>`;
                                    if (player.getStorage('remoke').length) return '已记录牌名:' + get.translation(player.getStorage('remoke')) + list;
                                    return '尚未有任何记录' + list;
                                },
                            },
                            group: ['remoke_record'],
                            subSkill: {
                                used: {
                                    onremove(player) {
                                        if (player.getStorage('remoke').length) {
                                            var list = player.getStorage('remoke');
                                            player.addTempSkill('remoke_used', 'roundStart');
                                            player.unmarkAuto('remoke_used', player.getStorage('remoke_used'));
                                            player.markAuto('remoke_used', list);
                                        } else {
                                            player.unmarkAuto('remoke_used', player.getStorage('remoke_used'));
                                        }
                                    },
                                    forced: true,
                                },
                                record: {
                                    audio: 'remoke',
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    prompt(player) {
                                        var player = _status.event.player;
                                        return get.prompt2('remoke');
                                    },
                                    frequent(event) {
                                        return lib.skill.remoke.frequent;
                                    },
                                    filter(event, player) {
                                        var types = ['trick'];
                                        if (player.hasSkill('zui_ji_effect')) types.push('basic');
                                        if (!player.storage.zui_ji_list) player.storage.zui_ji_list = [];
                                        if (player.storage.zui_ji_list.includes(event.card.name) || player.getStorage('remoke_used').includes(event.card.name)) return false;
                                        return event.card && !player.getStorage('remoke').includes(event.card.name) && types.includes(get.type2(event.card));
                                    },
                                    content() {
                                        player.markAuto('remoke', [trigger.card.name]);
                                        if (!player.hasSkill('remoke_used')) {
                                            player.addTempSkill('remoke_used', 'roundStart');
                                        }
                                        player.markAuto('remoke_used', [trigger.card.name]);
                                        game.log(player, '记录了', '#y' + get.translation(trigger.card.name));
                                    },
                                },
                            },
                            mark: true,
                            marktext: '谋',
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                var types = ['trick'];
                                if (player.hasSkill('zui_ji_effect')) types.push('basic');
                                if (!player.storage.zui_ji_list) player.storage.zui_ji_list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    if (types.includes(get.type2(lib.inpile[i])) && !player.getStorage('remoke').includes(lib.inpile[i]) && !player.storage.zui_ji_list.includes(lib.inpile[i]) && !player.getStorage('remoke_used').includes(lib.inpile[i])) return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var types = ['trick'];
                                if (player.hasSkill('zui_ji_effect')) types.push('basic');
                                if (!player.storage.zui_ji_list) player.storage.zui_ji_list = [];
                                var dialog = ['谋刻:你可以记录一张锦囊牌.'];
                                var list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var t = get.translation(get.type2(lib.inpile[i]));
                                    if (types.includes(get.type2(lib.inpile[i])) && !player.getStorage('remoke').includes(lib.inpile[i]) && !player.storage.zui_ji_list.includes(lib.inpile[i]) && !player.getStorage('remoke_used').includes(lib.inpile[i])) list.push([t, '', lib.inpile[i]]);
                                }
                                dialog.push([list, 'vcard']);
                                player.chooseButton(dialog).set('ai', function (button) {
                                    var player = _status.event.player,
                                        name = button.link[2];
                                    return get.effect(player, { name: name }, player, player);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var name = result.links[0][2];
                                    player.markAuto('remoke', [name]);
                                    if (!player.hasSkill('remoke_used')) {
                                        player.addTempSkill('remoke_used', 'roundStart');
                                    }
                                    player.markAuto('remoke_used', [name]);
                                    game.log(player, '记录了', '#y' + get.translation(name));
                                } else event.finish();
                            },
                        },
                        rekwpo: {
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                return att <= 0;
                            },
                            filter(event, player) {
                                return player.getStorage('remoke').includes(event.card.name) && event.player != player;
                            },
                            content() {
                                'step 0';
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                                ('step 1');
                                player.draw();
                                player.storage.remoke.remove(trigger.card.name);
                                game.log(player, `发动【看破】令${get.translation(trigger.player)}的`, '#y' + get.translation(trigger.card.name), '无效之');
                            },
                        },
                        zui_ji: {
                            audio: 'ext:界限突破/audio:2',
                            subSkill: {
                                effect: {
                                    forced: true,
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            if (card.hasGaintag('zui_ji')) {
                                                return true;
                                            }
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && card.hasGaintag('zui_ji')) {
                                                return false;
                                            }
                                        },
                                    },
                                    onremove(player) {
                                        player.removeGaintag('zui_ji');
                                    },
                                },
                            },
                            limited: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.getStorage('remoke').length;
                            },
                            check(event, player) {
                                return player.getStorage('remoke').length > 3;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('zui_ji');
                                var list = [];
                                for (var i = 0; i < player.getStorage('remoke').length; i++) {
                                    var name = player.getStorage('remoke')[i];
                                    var cardx = game.createCard(name);
                                    list.push(cardx);
                                }
                                player.gain(list).gaintag.add('zui_ji');
                                player.addSkill('zui_ji_effect');
                                player.storage.remoke = [];
                                player.storage.zui_ji_list = [];
                                for (var j = 0; j < list.length; j++) {
                                    var name = list[j].name;
                                    player.storage.zui_ji_list.push(name);
                                }
                                game.log(player, '移除了所有记录');
                                game.log(player, '复制了', '#y' + get.translation(list));
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        mo_wuliz: {
                            subSkill: {
                                mark: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '烈',
                                    intro: {
                                        content(storage, player, skill) {
                                            return '已获得<烈>标记.来源:' + get.translation(player.getStorage('mo_wuliz_mark'));
                                        },
                                    },
                                },
                                main: {
                                    trigger: {
                                        global: 'useCardToTarget',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    filter(event, player, target) {
                                        if (!event.card) return false;
                                        if (event.target == event.player) return false;
                                        return event.target.getStorage('mo_wuliz_mark').includes(player);
                                    },
                                    content() {
                                        trigger.parent.excluded.add(trigger.target);
                                    },
                                    onremove(player) {
                                        game.countPlayer2((current) => {
                                            if (current.getStorage('mo_wuliz_mark').includes(player)) {
                                                current.unmarkAuto('mo_wuliz_mark', player);
                                                current.removeSkill('mo_wuliz_mark');
                                            }
                                        }, true);
                                    },
                                },
                                dmg: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    audio: 'mo_wuliz',
                                    prompt(player) {
                                        return get.prompt2('mo_wuliz');
                                    },
                                    filter(event, player) {
                                        return event.num >= player.hp;
                                    },
                                    content() {
                                        'step 0';
                                        player.popup('免伤');
                                        player.awakenSkill('mo_wuliz');
                                        trigger.cancel();
                                        ('step 1');
                                        player.chooseTarget('【武烈】:选择任意名角色获得<烈>标记', [1, Infinity]).ai = function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (att > 0) return 4;
                                            return 0;
                                        };
                                        ('step 2');
                                        if (result.bool) {
                                            var targets = result.targets.sortBySeat();
                                            targets.forEach((target) => {
                                                target.addSkill('mo_wuliz_mark');
                                                target.markAuto('mo_wuliz_mark', [player]);
                                            });
                                            player.addTempSkill('mo_wuliz_main', { player: 'phaseBeginStart' });
                                        }
                                    },
                                },
                                max: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '武',
                                    intro: {
                                        content: '本回合手牌上限为体力上限',
                                    },
                                    mod: {
                                        maxHandcardBase(player, num) {
                                            return player.maxHp;
                                        },
                                    },
                                    forced: true,
                                },
                            },
                            group: 'mo_wuliz_dmg',
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.hp > 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = player.hp - 1;
                                player
                                    .chooseControl()
                                    .set('choiceList', [`弃置至多${get.cnNumber(num, true)}张牌,损失等量的体力.`, `交给一名角色至多${get.cnNumber(num, true)}张牌,损失等量的体力.`, '取消'])
                                    .set('ai', function () {
                                        var att = game.hasPlayer(function (current) {
                                            return current != player && get.attitude(player, current) > 0;
                                        });
                                        if (player.hp > 3) {
                                            if (att) {
                                                return 1;
                                            } else {
                                                return 0;
                                            }
                                        } else {
                                            return 2;
                                        }
                                    });
                                ('step 1');
                                event.index = result.index;
                                if (event.index == 1) {
                                    player.chooseCardTarget({
                                        filterCard: true,
                                        selectCard: [1, player.hp - 1],
                                        position: 'he',
                                        filterTarget(card, player, target) {
                                            return player != target;
                                        },
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
                                        prompt: get.prompt2('mo_wuliz'),
                                    });
                                }
                                if (event.index == 0) {
                                    player.chooseToDiscard([1, player.hp - 1], get.prompt2('mo_wuliz')).set('ai', function (card) {
                                        if (card.name == 'tao' || card.name == 'jiu') return -10;
                                        return 6 - get.value(card);
                                    });
                                }
                                if (event.index == 2) {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (event.index == 1) {
                                        var target = result.targets[0];
                                        player.give(result.cards, target, 'give');
                                    }
                                    if (event.index == 0) {
                                    }
                                    player.addTempSkill('mo_wuliz_max');
                                    player.loseHp(result.cards.length);
                                    event.num = result.cards.length;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (event.num) {
                                    player
                                        .chooseTarget(`你可以依次弃任意名角色共计${get.cnNumber(event.num)}张牌.`, 1, function (card, player, target) {
                                            return target.countCards('hej');
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (att < 0) {
                                                att = -Math.sqrt(-att);
                                            } else {
                                                att = Math.sqrt(att);
                                            }
                                            return att * lib.card.guohe.ai.result.target(player, target);
                                        });
                                }
                                ('step 4');
                                if (result.bool) {
                                    player.line(result.targets[0], 'green');
                                    player.discardPlayerCard(result.targets[0], 'hej', true);
                                    event.num--;
                                    if (event.num > 0) {
                                        event.goto(3);
                                    } else event.finish();
                                }
                            },
                        },
                        re_qizhi: {
                            subSkill: {
                                mark: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.countMark('re_qizhi_mark');
                                    },
                                    content() {
                                        'step 0';
                                        player.draw(player.countMark('re_qizhi_mark'));
                                        player.removeSkill('re_qizhi_mark');
                                    },
                                    intro: {
                                        content: 'mark',
                                    },
                                    forced: true,
                                    marktext: '奇',
                                    charlotte: true,
                                },
                            },
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.targets) return false;
                                if (!event.isFirstTarget) return false;
                                var type = get.type(event.card, 'trick');
                                if (type != 'basic' && type != 'trick') return false;
                                if (event.noai) return false;
                                return game.hasPlayer(function (target) {
                                    return !event.targets.includes(target) && target.countCards('he') > 0;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('re_qizhi'), '弃置一名角色的一张牌,其获得一枚"奇"标记', function (card, player, target) {
                                        return !_status.event.targets.includes(target) && target.countCards('he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (target == player) return 2;
                                        if (get.attitude(player, target) <= 0) {
                                            return 1;
                                        }
                                        return 0.5;
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    player.getHistory('custom').push({ re_qizhi: true });
                                    player.discardPlayerCard(result.targets[0], true, 'he');
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (!event.target.hasSkill('re_qizhi_mark')) {
                                    event.target.addSkill('re_qizhi_mark');
                                }
                                event.target.addMark('re_qizhi_mark');
                            },
                        },
                        re_jinqu: {
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                var num = player.getHistory('custom', function (evt) {
                                    return evt.re_qizhi == true;
                                }).length;
                                return num > player.countCards('h');
                            },
                            prompt(event, player) {
                                var num = player.getHistory('custom', function (evt) {
                                    return evt.re_qizhi == true;
                                }).length;
                                return `进趋:是否将手牌摸至${get.cnNumber(num)}张？`;
                            },
                            content() {
                                'step 0';
                                player.drawTo(
                                    player.getHistory('custom', function (evt) {
                                        return evt.re_qizhi == true;
                                    }).length
                                );
                            },
                            ai: {
                                combo: 're_qizhi',
                            },
                        },
                        sp_jianxiong: {
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') {
                                    player.gain(trigger.cards, 'gain2');
                                }
                                if (player.getDamagedHp() > 0) player.draw(player.getDamagedHp(), 'nodelay');
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten(player, target) {
                                    if (target.hp == 1) return 2.5;
                                    return 1;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            var skill = player.getStat('skill').sp_zhujiu || 0;
                                            if (player.hasSkill('sp_zhujiu') && skill < 1) return [0, 1];
                                            if (target.hp == 1) return 0.8;
                                        }
                                    },
                                },
                            },
                        },
                        sp_zhujiu: {
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            event.skill == 'sp_zhujiu' &&
                                            game.hasPlayer(function (target) {
                                                return target.countCards('h') > 0 && player != target;
                                            })
                                        );
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt2('sp_zhujiu'), function (card, player, target) {
                                                return target != player && target.countCards('h');
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return -get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.target = result.targets[0];
                                            player.line(event.target, 'green');
                                            event.target.chooseCard(1, 'he', true, `请交给${get.translation(player)}一张牌`);
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            event.cards = result.cards;
                                            player.gain(event.cards, 'give', event.target);
                                            player.judge();
                                        } else event.finish();
                                        ('step 3');
                                        if (result.color == 'black') {
                                            player.line(event.target, 'green');
                                            event.target.damage('thunder', player);
                                        } else {
                                            if (player.hasSkill('sp_jianxiong') && player.getDamagedHp() > 0) {
                                                player.damage('unreal');
                                            }
                                        }
                                    },
                                },
                            },
                            audio: 'ext:界限突破/audio:2',
                            enable: 'chooseToUse',
                            filterCard: true,
                            usable: 1,
                            viewAsFilter(player) {
                                return true;
                            },
                            viewAs: {
                                name: 'jiu',
                            },
                            precontent() {
                                player.addSkill('sp_zhujiu_use');
                            },
                            selectCard: -1,
                            position: 'x',
                            prompt: '使用一张酒',
                            check(card) {
                                if (_status.event.type == 'dying') return 20;
                                return 10;
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
                                    if (_status.event.dying) return 9;
                                    let sha = get.order({ name: 'sha' });
                                    if (sha > 0) return sha + 0.2;
                                    return 0;
                                },
                                result: {
                                    target(player, target) {
                                        if (target && target.isDying()) return 2;
                                        if (!target || target._jiu_temp || !target.isPhaseUsing()) return 0;
                                        if (!target.getCardUsable('sha') || (lib.config.mode === 'stone' && !player.isMin() && player.getActCount() + 1 >= player.actcount)) return 0;
                                        let shas = player.getCards('hs', (card) => card.name === 'sha' && !ui.selected.cards.includes(card)),
                                            card;
                                        if (!shas.length || !target.hasSha() || (shas.length > 1 && (target.getCardUsable('sha') > 1 || target.countCards('hs', 'zhuge')))) return 0;
                                        target._jiu_temp = true;
                                        shas.sort((a, b) => get.order(b) - get.order(a));
                                        for (var i = 0; i < shas.length; i++) {
                                            let tars = [];
                                            if (lib.filter.filterCard(shas[i], target))
                                                tars = game.filterPlayer((current) => {
                                                    return (
                                                        get.attitude(target, current) < 0 &&
                                                        target.canUse(shas[i], current, null, true) &&
                                                        !current.hasSkillTag('filterDamage', null, {
                                                            player: target,
                                                            card: shas[i],
                                                            jiu: true,
                                                        }) &&
                                                        get.effect(current, shas[i], target) > 0
                                                    );
                                                });
                                            if (!tars.length) continue;
                                            tars.sort((a, b) => {
                                                return get.effect(b, shas[i], target) - get.effect(a, shas[i], target);
                                            });
                                            if (
                                                !tars[0].mayHaveShan(player, 'use') ||
                                                target.hasSkillTag(
                                                    'directHit_ai',
                                                    true,
                                                    {
                                                        target: tars[0],
                                                        card: shas[i],
                                                    },
                                                    true
                                                ) ||
                                                target.needsToDiscard() > Math.max(0, 3 - target.hp)
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
                        sp_hujia: {
                            audio: 'ext:界限突破/audio:2',
                            zhuSkill: true,
                            trigger: {
                                player: ['chooseToRespondBefore', 'chooseToUseBefore'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!player.hasZhuSkill('sp_hujia')) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == player.group && current.countCards('he');
                                });
                            },
                            check(event, player, target) {
                                if (get.damageEffect(player, event.player, player) >= 0) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('sp_hujia'), function (card, player, target) {
                                        return target != player && target.countCards('he') && target.group == player.group;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    var next = event.target.chooseToRespond(`是否替${get.translation(player)}打出一张闪？否则其获得你一张牌`, { name: 'shan' });
                                    next.set('ai', function () {
                                        var event = _status.event;
                                        return get.attitude(event.player, event.source) - 2;
                                    });
                                    next.set('skillwarn', `替${get.translation(player)}打出一张闪`);
                                    next.autochoose = lib.filter.autoRespondShan;
                                    next.set('source', player);
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    event.finish();
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                    trigger.responded = true;
                                    trigger.animate = false;
                                } else {
                                    player.gainPlayerCard(event.target, true, '请获得其一张牌.', 'he');
                                }
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.storage.hujiaing) return false;
                                    if (!player.hasZhuSkill('hujia')) return false;
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.group == 'wei';
                                    });
                                },
                            },
                        },
                        mo_huita: {
                            subSkill: {
                                judge: {
                                    audio: 'mo_huita',
                                    trigger: {
                                        player: 'judge',
                                    },
                                    filter(event, player) {
                                        return ui.cardPile.childNodes.length >= 2;
                                    },
                                    popup: false,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseButton([get.translation(player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(player.judging[0]) + ',' + get.prompt('mo_huita'), get.cards(2)], 1, false).ai = function (button) {
                                            var card = button.link;
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            var judging = trigger.player.judging[0];
                                            var result = trigger.judge(card) - trigger.judge(judging);
                                            var attitude = get.attitude(player, trigger.player);
                                            if (attitude == 0 || result == 0) return 0;
                                            if (attitude > 0) {
                                                return result;
                                            } else {
                                                return -result;
                                            }
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            event.cards = result.links;
                                            player.respond(event.cards, 'highlight', 'mo_huita', 'noOrdering');
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        player.judging[0] = event.cards[0];
                                        trigger.orderingCards.addArray(event.cards);
                                        game.log(player, '的判定牌改为', event.cards[0]);
                                        ('step 3');
                                    },
                                },
                            },
                            audio: 'ext:界限突破/audio:2',
                            group: 'mo_huita_judge',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = 0;
                                event.targets = [];
                                event.targets.push(player);
                                var targets = game.filterPlayer();
                                targets.sort(lib.sort.seat);
                                for (var i = 0; i < targets.length; i++) {
                                    if (!event.targets.includes(targets[i]) && targets[i].hasSkill('mo_mingjian_target')) event.targets.push(targets[i]);
                                }
                                player.chooseBool(`是否对${get.translation(event.targets)}发动【恢拓】?`).ai = function () {
                                    return true;
                                };
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                }
                                ('step 2');
                                var target = event.targets[event.count];
                                target.judge(function (card) {
                                    if (target.hp == target.maxHp) {
                                        if (get.color(card) != 'red') return -1;
                                    }
                                    if (get.color(card) == 'red') return 1;
                                    if (target.getDamagedHp() == 2 && get.color(card) != 'red') return 1;
                                    if (target.getDamagedHp() >= 3 && get.color(card) != 'red') return 2;
                                    return 0;
                                });
                                ('step 3');
                                if (result.color) {
                                    var target = event.targets[event.count];
                                    if (result.color == 'red') {
                                        if (target.hp < target.maxHp) target.recover();
                                        target.draw();
                                    } else {
                                        if (target.getDamagedHp() > 0) target.draw(target.getDamagedHp());
                                    }
                                }
                                ('step 4');
                                event.count++;
                                if (event.count < event.targets.length) {
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        mo_mingjian: {
                            subSkill: {
                                target: {
                                    forced: true,
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            return '你已经因【明鉴】获得四张或更多牌,你也会成为【恢拓】的目标';
                                        },
                                    },
                                },
                                card_max: {
                                    forced: true,
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            return '手牌上限+1,直到回合结束';
                                        },
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return (num += 1);
                                        },
                                    },
                                },
                                sha_use: {
                                    forced: true,
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            return '出牌阶段可以多使用X张【杀】(X为你的体力值)';
                                        },
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return (num += player.hp);
                                        },
                                    },
                                },
                            },
                            audio: 'ext:界限突破/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('h') >= 2;
                            },
                            filterCard: true,
                            selectCard() {
                                var player = _status.event.player;
                                if (player.hp > 2) return [2, player.hp];
                                return 2;
                            },
                            check(card) {
                                return 5 - get.value(card);
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                target.gain(cards, player, 'giveAuto');
                                var num = cards.length;
                                if (num >= 2) target.addTempSkill('mo_mingjian_card_max', { player: 'phaseEnd' });
                                if (num >= 3) target.addTempSkill('mo_mingjian_sha_use', { player: 'phaseEnd' });
                                if (num >= 4) target.addTempSkill('mo_mingjian_target', { player: 'phaseEnd' });
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (player.countCards('h') == player.countCards('h', 'du')) return -1;
                                        if (target.hasJudge('lebu')) return 0;
                                        if (get.attitude(player, target) > 3) {
                                            var basis = get.threaten(target);
                                            if (
                                                player == get.zhu(player) &&
                                                player.hp <= 2 &&
                                                player.countCards('h', 'shan') &&
                                                !game.hasPlayer(function (current) {
                                                    return get.attitude(current, player) > 3 && current.countCards('h', 'tao') > 0;
                                                })
                                            )
                                                return 0;
                                            if (target.countCards('h') + player.countCards('h') > target.hp + 2) return basis * 0.8;
                                            return basis;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        mo_xingshuai: {
                            audio: 'ext:界限突破/audio:2',
                            enable: 'phaseUse',
                            trigger: {
                                player: 'dying',
                            },
                            zhuSkill: true,
                            filter(event, player) {
                                if (player.hp > 1) return false;
                                if (!player.hasZhuSkill('mo_xingshuai')) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == player.group;
                                });
                            },
                            mark: true,
                            limited: true,
                            content() {
                                'step 0';
                                player.awakenSkill('mo_xingshuai');
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                event.targets = targets;
                                event.damages = [];
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    if (current.group == player.group) {
                                        event.list = [`令${get.translation(player)}回复一点体力,自己受到一点无来源的伤害`];
                                        if (current.countCards('h') > 0) event.list.push('将所有手牌交给' + get.translation(player));
                                        current.chooseControl(event.list, function () {
                                            var att = get.attitude(current, player);
                                            if (att > 0) {
                                                return event.list[0];
                                            } else if (att <= 0 && current.countCards('h') < 3) {
                                                if (event.list.length > 1) return event.list[1];
                                                else event.list[0];
                                            }
                                            return event.list[0];
                                        });
                                        event.current = current;
                                    } else {
                                        event.redo();
                                    }
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (result.control == event.list[0]) {
                                    event.current.line(player, 'green');
                                    event.current.damage('nosource');
                                    game.log(event.current, '令', player, '回复1点体力');
                                    player.recover();
                                } else {
                                    player.gain(event.current.getCards('h'), 'give', event.current);
                                }
                                if (event.targets.length) {
                                    event.goto(1);
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        mo_kuanggu: {
                            audio: 'ext:界限突破/audio:2',
                            dutySkill: true,
                            subSkill: {
                                achieve: {
                                    audio: 'mo_kuanggu',
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() { },
                                },
                                fail: {
                                    audio: 'mo_kuanggu',
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hp <= 1;
                                    },
                                    content() {
                                        'step 0';
                                        game.log(player, '使命失败');
                                        player.awakenSkill('mo_kuanggu');
                                        player.loseHp();
                                    },
                                },
                            },
                            group: 'mo_kuanggu_fail',
                            derivation: ['mo_qimou', 'mo_zhengbei'],
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            usable: 1,
                            preHidden: true,
                            content() {
                                'step 0';
                                event.bool = true; //判断是否应狂骨回血
                                player.draw(Math.min(player.hp, 20));
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else {
                                    event.bool = false; //如果不是则返还false
                                }
                                ('step 1');
                                if (player.hp >= player.maxHp && event.bool) {
                                    game.log(player, '成功完成使命');
                                    player.awakenSkill('mo_kuanggu');
                                    player.addSkillLog('mo_qimou');
                                    player.addSkillLog('mo_zhengbei');
                                }
                            },
                        },
                        mo_qimou: {
                            subSkill: {
                                damage: {
                                    audio: 'mo_qimou',
                                    forced: true,
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.player != player && player.hp < player.maxHp;
                                    },
                                    content() {
                                        player.recover();
                                    },
                                },
                                lockskill: {
                                    audio: 'mo_qimou',
                                    forced: true,
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && !event.target.hasSkill('fengyin');
                                    },
                                    logTarget: 'target',
                                    content() {
                                        if (!trigger.target.hasSkill('fengyin')) {
                                            trigger.target.addTempSkill('fengyin');
                                        }
                                    },
                                },
                                usesha: {
                                    audio: 'mo_qimou',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event;
                                        return evt.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                                effect: {
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            return `你本回合可以多使用${player.storage.mo_qimou_effect}张【杀】<br>使用牌没有距离限制<br>使用【杀】的伤害基数+1<br>当你使用【杀】指定目标后,该目标非锁定技失效<br>当场上一名其他目标受伤后,你回复一点体力`;
                                        },
                                    },
                                    forced: true,
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (typeof player.storage.mo_qimou_effect == 'number' && card.name == 'sha') {
                                                return num + player.storage.mo_qimou_effect;
                                            }
                                        },
                                        targetInRange(card, player, target) {
                                            return true;
                                        },
                                    },
                                },
                            },
                            limited: true,
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                var num = player.hp - 1;
                                return (
                                    game.hasPlayer(function (current) {
                                        return player.canUse('sha', current, false) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                    }) && num >= 2
                                );
                            },
                            filter(event, player) {
                                return !player.storage.mo_qimou;
                            },
                            init(player) {
                                player.storage.mo_qimou = false;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                if (player.hp > 1) {
                                    event.num = player.hp - 1;
                                    player.loseHp(player.hp - 1);
                                } else if (player.hp < 1) {
                                    event.num = 1 - player.hp;
                                    player.recover(1 - player.hp);
                                }
                                ('step 1');
                                player.awakenSkill('mo_qimou');
                                player.storage.mo_qimou_effect = event.num;
                                player.draw(event.num);
                                player.addTempSkill('mo_qimou_effect');
                                player.addTempSkill('mo_qimou_usesha');
                                player.addTempSkill('mo_qimou_lockskill');
                                player.addTempSkill('mo_qimou_damage');
                            },
                        },
                        mo_zhengbei: {
                            subSkill: {
                                card_num: {
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            return `你本回合已因【征北】获得${get.cnNumber(player.storage.mo_zhengbei_card_num)}张牌`;
                                        },
                                    },
                                    forced: true,
                                },
                            },
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player, name) {
                                if (!player.storage.mo_zhengbei_card_num) player.storage.mo_zhengbei_card_num = 0;
                                if (!event.card || event.player == player) return false;
                                if (player.storage.mo_zhengbei_card_num >= 5) return false;
                                var evt = event.parent;
                                return evt && evt.card == event.card && evt.type == 'card' && evt.targets && evt.targets.length == 1;
                            },
                            preHidden: true,
                            check(event, player, card) {
                                return event.card && event.card.number >= 3;
                            },
                            content() {
                                var num = 0;
                                if (trigger.card.number) {
                                    num = trigger.card.number;
                                    player.draw(num);
                                } else {
                                    num = 2;
                                    player.draw(num);
                                }
                                if (!player.storage.mo_zhengbei_card_num) player.storage.mo_zhengbei_card_num = 0;
                                player.storage.mo_zhengbei_card_num += num;
                                player.addTempSkill('mo_zhengbei_card_num');
                            },
                        },
                        jinshen: {
                            audio: 'ext:界限突破/audio:3',
                            derivation: ['buhuai', 'sun_jianshi'],
                            group: ['jinshen_change', 'jinshen_lose'],
                            subSkill: {
                                lose: {
                                    audio: 'jinshen',
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.maxHp > 4;
                                    },
                                    content() {
                                        player.loseMaxHp();
                                    },
                                },
                                change: {
                                    trigger: {
                                        player: ['gainMaxHpEnd', 'loseMaxHpEnd'],
                                    },
                                    popup: false,
                                    forced: true,
                                    init(player) {
                                        player.removeAdditionalSkill('jinshen');
                                        if (player.maxHp > 4) player.addAdditionalSkill('jinshen', 'buhuai');
                                        else player.addAdditionalSkill('jinshen', 'sun_jianshi');
                                    },
                                    filter(event, player) {
                                        return (player.maxHp <= 4 && !player.hasSkill('sun_jianshi')) || (player.maxHp > 4 && !player.hasSkill('buhuai'));
                                    },
                                    content() {
                                        player.removeAdditionalSkill('jinshen');
                                        if (player.maxHp > 4) player.addAdditionalSkill('jinshen', 'buhuai');
                                        else player.addAdditionalSkill('jinshen', 'sun_jianshi');
                                    },
                                },
                            },
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = game.countPlayer() + 1;
                                if (num < 5) num = 5;
                                return (event.name != 'phase' || game.phaseNumber == 0) && player.maxHp != num;
                            },
                            content() {
                                var num = game.countPlayer() + 1;
                                if (num < 5) num = 5;
                                if (player.maxHp < num) {
                                    player.gainMaxHp(num - player.maxHp);
                                } else if (player.maxHp > num) {
                                    player.loseMaxHp(player.maxHp - num);
                                }
                                player.hp = player.maxHp;
                                var card = game.createCard2('ruyigoldenhoop', 'heart', 13);
                                player.$gain2(card, false);
                                player.equip(card);
                            },
                        },
                        buhuai: {
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num;
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                nofire(player) {
                                    return true;
                                },
                                nothunder(player) {
                                    return true;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'natureDamage')) return 0;
                                        if (card.name == 'tiesuo') return [0, 0];
                                        if (!get.tag(card, 'natureDamage')) return [0, 0];
                                    },
                                },
                            },
                        },
                        sun_jianshi: {
                            audio: 'ext:界限突破/audio:2',
                            group: 'sun_jianshi_da',
                            subSkill: {
                                da: {
                                    audio: 'sun_jianshi',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.player.getSkills(null, false, false).some((i) => lib.skill.fengyin.skillBlocker(i, player));
                                    }, //QQQ
                                    content() {
                                        trigger.num += 1;
                                    },
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += game.countPlayer() > 4 ? 4 : game.countPlayer();
                            },
                        },
                        sun_bianhua: {
                            subSkill: {
                                mark: {
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            return lib.translate[player.storage.sun_bianhua_mark + '_info'];
                                        },
                                    },
                                    forced: true,
                                },
                            },
                            audio: 'ext:界限突破/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                var list = [];
                                var targets = game.filterPlayer();
                                targets.sort(lib.sort.seat);
                                for (var i = 0; i < targets.length; i++) {
                                    var skills = targets[i].getSkills(null, false, false).filter(function (i) {
                                        var info = get.info(i);
                                        if (!info || info.hiddenSkill || info.disc_skill || lib.skill.drlt_duorui.bannedList.includes(i) || lib.skill[i].charlotte) return false;
                                        return !lib.skill[i].forced && !lib.skill[i].unique;
                                    });
                                    for (var j = 0; j < skills.length; j++) {
                                        if (!list.includes(skills[j]) && !player.hasSkill(skills[j])) list.push(skills[j]);
                                    }
                                }
                                if (list.length < 1) {
                                    for (var i in lib.character) {
                                        for (var j = 0; j < lib.character[i][3].length; j++) {
                                            var info = lib.skill[lib.character[i][3][j]];
                                            if (info && (info.gainable || !info.unique) && !info.forced && !player.hasSkill(info)) {
                                                skills.add(lib.character[i][3][j]);
                                            }
                                        }
                                    }
                                    var link = skills.randomGet();
                                    list.push(link);
                                }
                                var gain = list.randomGet();
                                var list = [gain];
                                game.broadcastAll(function (list) {
                                    game.expandSkills(list);
                                    for (var i of list) {
                                        var info = lib.skill[i];
                                        if (!info) continue;
                                        info.audioname2 = {
                                            shen_sunwukong: 'sun_bianhua',
                                        };
                                    }
                                }, list);
                                player.addTempSkill(gain, { player: 'phaseBegin' });
                                player.addTempSkill('sun_bianhua_mark', { player: 'phaseBegin' });
                                player.storage.sun_bianhua_mark = gain;
                                game.log(player, '获得了临时技能', '#y' + get.translation(gain));
                            },
                        },
                        ruyigoldenhoop_skill: {
                            group: 'ruyigoldenhoop_skill_blocker',
                            subSkill: {
                                blocker: {
                                    trigger: {
                                        player: ['loseBefore', 'disableEquipBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'disableEquip') return event.slots.includes('equip1');
                                        var cards = player.getEquips('ruyigoldenhoop');
                                        return event.cards && event.cards.some((card) => cards.includes(card));
                                    },
                                    content() {
                                        if (trigger.name == 'lose') {
                                            trigger.cards.removeArray(player.getEquips('ruyigoldenhoop'));
                                        } else {
                                            while (trigger.slots.includes('equip1')) trigger.slots.remove('equip1');
                                        }
                                    },
                                },
                            },
                            mod: {
                                canBeGained(card, source, player) {
                                    if (player.getEquips('ruyigoldenhoop').includes(card)) return false;
                                },
                                canBeDiscarded(card, source, player) {
                                    if (player.getEquips('ruyigoldenhoop').includes(card)) return false;
                                },
                                canBeReplaced(card, player) {
                                    if (player.getEquips('ruyigoldenhoop').includes(card)) return false;
                                },
                                cardnature(card) {
                                    if (get.subtypes(card, false).includes('equip1')) return false;
                                },
                                cardDiscardable(card, player) {
                                    if (player.getEquips('ruyigoldenhoop').includes(card)) return false;
                                },
                                cardEnabled2(card, player) {
                                    if (player.getEquips('ruyigoldenhoop').includes(card)) return false;
                                },
                            },
                            equipSkill: true,
                            audio: 'ext:界限突破/audio:1',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (!player.hasSkill('jinshen')) return false;
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseControl()
                                    .set('choiceList', ['令目标弃两张牌,否则不能使用【闪】', '弃目标一张牌,取消此杀,且此杀不计入次数限制'])
                                    .set('ai', function () {
                                        var att = get.attitude(player, trigger.target);
                                        var dmg = get.damageEffect(player, trigger.target);
                                        if (att < 0) {
                                            if (dmg > 0) return 0;
                                            else return 1;
                                        } else {
                                            return 1;
                                        }
                                    });
                                ('step 1');
                                event.index = result.index;
                                if (event.index == 0) {
                                    var target = trigger.target;
                                    var num = target.countCards('h', 'shan');
                                    target
                                        .chooseToDiscard(2, '请弃置两张牌,否则不能使用闪抵消此杀', 'he')
                                        .set('ai', function (card) {
                                            var num = _status.event.num;
                                            if (num == 0) return 0;
                                            if (card.name == 'shan') return num > 1 ? 2 : 0;
                                            return 8 - get.value(card);
                                        })
                                        .set('num', num);
                                } else {
                                    player.discardPlayerCard(trigger.target, true);
                                    trigger.addCount = false;
                                    player.getStat().card.sha--;
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                    event.finish();
                                }
                                ('step 2');
                                if (!result.bool) {
                                    trigger.parent.directHit.add(trigger.target);
                                }
                            },
                            _priority: -25,
                        },
                        zhulu_dr: {
                            marktext: '逐',
                            intro: {
                                content: 'mark',
                            },
                            shaRelated: true,
                            audio: 'ext:界限突破/audio:2',
                            preHidden: true,
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return ((event.card.name == 'juedou' || event.card.name == 'sha') && player == event.player && event.parent.triggeredTargets3.length == 1) || (player == event.target && (get.type(event.card) == 'trick' || get.type(event.card) == 'basic') && get.tag(event.card, 'damage'));
                            },
                            forced: true,
                            content() {
                                player.addMark('zhulu_dr', 1);
                                player.draw();
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        zhengba_dr: {
                            subSkill: {
                                clear: {
                                    forced: true,
                                    popup: false,
                                    trigger: {
                                        player: 'plaseEnd',
                                    },
                                    content() {
                                        'step 0';
                                        event.bool = true;
                                        for (var i = 0; i < player.countCards('h'); i++) {
                                            if (player.getCards('h')[i].hasGaintag('zhengba_dr')) event.bool = false;
                                        }
                                        ('srep 1');
                                        if (event.bool) {
                                            player.storage.zhengba_dr_cards = [];
                                            player.removeGaintag('zhengba_dr');
                                            player.removeSkill('zhengba_dr_effect');
                                            player.removeSkill('zhengba_dr_gain');
                                            player.removeSkill('zhengba_dr_clear');
                                        }
                                    },
                                },
                                gain: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        if (event.parent.triggeredTargets3.length > 1) return false;
                                        return get.type(event.card) == 'trick' && player.storage.zhengba_dr_cards.includes(event.cards[0]);
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.zhengba_dr_cards.remove(trigger.cards[0]);
                                        player
                                            .chooseTarget(get.prompt('zhengba_dr'), '获得一名角色的一张牌', function (card, player, target) {
                                                return trigger.targets.includes(target);
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.effect(target, { name: 'shunshou' }, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.gainPlayerCard(result.targets[0], 'hej', 'visibleMove');
                                        }
                                    },
                                },
                                effect: {
                                    trigger: {
                                        player: ['useCard'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event;
                                        return evt.card.name == 'sha' && player.storage.zhengba_dr_cards.includes(event.cards[0]);
                                    },
                                    content() {
                                        player.storage.zhengba_dr_cards.remove(trigger.cards[0]);
                                        trigger.baseDamage++;
                                    },
                                },
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('zhengba_dr') && card.name == 'sha') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('zhengba_dr') && card.name == 'sha') {
                                        return false;
                                    }
                                },
                            },
                            onremove(player) {
                                player.removeGaintag('zhengba_dr');
                            },
                            init(player) {
                                player.storage.zhengba_dr_cards = [];
                            },
                            audio: 'ext:界限突破/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('zhulu_dr') >= 2;
                            },
                            content() {
                                'step 0';
                                player.removeMark('zhulu_dr', 2);
                                event.num = 0;
                                event.empty = [];
                                for (var i = 1; i <= 5; i++) {
                                    if (player.hasEmptySlot(i)) {
                                        event.num++;
                                        event.empty.add(i);
                                    }
                                }
                                if (event.num <= 0) {
                                    player
                                        .chooseControl()
                                        .set('choiceList', ['从牌堆中获得一张【杀】,且此【杀】不占手牌上限并且伤害基数+1.', '从牌堆中获得一张锦囊牌,当你使用此牌指定目标后,你可以获得其中一名目标的一张牌.'])
                                        .set('ai', function () {
                                            if (player.countCards('h', 'sha') <= 0) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && get.effect(current, { name: 'sha' }, player, player);
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                            return 1;
                                        });
                                } else {
                                    player
                                        .chooseControl()
                                        .set('choiceList', ['从牌堆中获得一张【杀】,且此【杀】不占手牌上限并且伤害基数+1.', '从牌堆中获得一张锦囊牌,当你使用此牌指定目标后,你可以获得其中一名目标的一张牌.', '若你的装备栏有空位,令你随机一个空置的装备栏随机获得并使用一张装备牌.'])
                                        .set('ai', function () {
                                            if (player.countCards('h', 'sha') <= 0) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && get.effect(current, { name: 'sha' }, player, player);
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                            if (player.countCards('e') < 2) return 2;
                                            return 1;
                                        });
                                }
                                ('step 1');
                                if (result.index == 0) {
                                    var sha = get.cardPile2(function (card) {
                                        return card.name == 'sha';
                                    });
                                    player.gain(sha, 'gain2').gaintag.add('zhengba_dr');
                                    player.storage.zhengba_dr_cards.push(sha);
                                    if (!player.hasSkill('zhengba_dr_effect')) {
                                        player.addSkill('zhengba_dr_effect');
                                    }
                                }
                                if (result.index == 1) {
                                    var trick = get.cardPile2(function (card) {
                                        return get.type(card) == 'trick';
                                    });
                                    player.gain(trick, 'gain2').gaintag.add('zhengba_dr');
                                    player.storage.zhengba_dr_cards.push(trick);
                                    if (!player.hasSkill('zhengba_dr_gain')) {
                                        player.addSkill('zhengba_dr_gain');
                                    }
                                }
                                if (result.index == 2) {
                                    var pos = event.empty.randomGet();
                                    var card = get.cardPile2(function (card) {
                                        return get.subtype(card) == 'equip' + pos && player.canUse(card, player);
                                    });
                                    if (card) {
                                        player.chooseUseTarget(card, true, 'nopopup');
                                    }
                                }
                                if (!player.hasSkill('zhengba_dr_clear')) {
                                    player.addSkill('zhengba_dr_clear');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        shangyu: {
                            derivation: ['yingzi_dr'],
                            audio: 'ext:界限突破/audio:2',
                            subSkill: {
                                lose: {
                                    audio: 'shangyu',
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            return '你失去体力时,取消之.';
                                        },
                                    },
                                    trigger: {
                                        player: 'loseHpBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                            trigger: {
                                player: ['dying', 'phaseBegin'],
                            },
                            mark: true,
                            limited: true,
                            forced: true,
                            filter(event, player) {
                                return player.hp <= 1;
                            },
                            content() {
                                player.hp = player.maxHp;
                                player.draw(3);
                                player.addSkill('yingzi_dr');
                                player.addTempSkill('shangyu_lose', { player: 'phaseBegin' });
                                game.log(player, '获得了技能', '#g【英姿】');
                                player.awakenSkill('shangyu');
                            },
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        yingzi_dr: {
                            audio: 'ext:界限突破/audio:2',
                            audioname2: {
                                re_sunyi_shui: 'rehunzi',
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                var num = 1;
                                if (player.isMaxHandcard()) num++;
                                if (player.isMaxHp()) num++;
                                if (player.isMaxEquip() && player.countCards('e')) num++;
                                trigger.num += num;
                            },
                        },
                        shoutu: {
                            audio: 'ext:界限突破/audio:3',
                            group: 'shoutu_remove',
                            subSkill: {
                                remove: {
                                    audio: 'shoutu',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.removeMark('shoutu', trigger.num);
                                        ('step 1');
                                        if (player.countMark('shoutu') <= 0) {
                                            var num = game.countPlayer();
                                            player.maxHp = num;
                                            player.hp = num;
                                            player.update();
                                            player.popup('调整体力');
                                            player.awakenSkill('shoutu');
                                            player.turnOver();
                                            game.log(player, '将体力值和体力上限调整至', '#g' + num);
                                        } else {
                                            player.draw(player.countMark('shoutu'));
                                        }
                                    },
                                },
                            },
                            intro: {
                                content: 'mark',
                            },
                            forced: true,
                            marktext: '城',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var num = game.countPlayer();
                                player.addMark('shoutu', num);
                                player.turnOver();
                            },
                        },
                        wantui: {
                            audio: 'ext:界限突破/audio:2',
                            subSkill: {
                                damageDraw: {
                                    audio: 'wantui',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (!event.card) return false;
                                        var evt = event.parent;
                                        return evt && evt.card == event.card && evt.type == 'card' && evt.targets && evt.targets.length == 1;
                                    },
                                    content() {
                                        player.turnOver();
                                        player.drawTo(player.maxHp > 5 ? 5 : player.maxHp);
                                        var next = player.phaseUse();
                                        event.next.remove(next);
                                        trigger.getParent('phase').next.push(next);
                                        if (player.hasSkill('wantui_damageDraw')) player.removeSkill('wantui_damageDraw');
                                    },
                                    _priority: 1000,
                                },
                            },
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                if (player == event.player || !player.isTurnedOver()) return false;
                                var num = event.player.getHistory('useCard', function (evt) {
                                    return evt.targets.includes(player);
                                }).length;
                                return event.player.isIn() && num > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('wantui_damageDraw');
                                ('step 1');
                                var target = trigger.player;
                                var card = { name: 'sha' };
                                if (player.canUse(card, target, false)) player.useCard(card, target, false).card.wantui = true;
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg || !arg.card || arg.card.wantui != true) return false;
                                },
                            },
                        },
                        weicheng_tpa: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (target.countMark('weicheng_tpa_mark_x') > 0) return true;
                                },
                            },
                            audio: 'ext:界限突破/audio:2',
                            group: ['weicheng_tpa_gain', 'weicheng_tpa_dying'],
                            subSkill: {
                                mark_x: {
                                    intro: {
                                        content: 'mark',
                                    },
                                    marktext: '城',
                                    forced: true,
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - 1;
                                        },
                                    },
                                },
                                dying: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.countMark('weicheng_tpa_mark_x') > 0 && event.player.hasSkill('weicheng_tpa_mark_x') && event.player != player;
                                    },
                                    content() {
                                        trigger.player.removeSkill('weicheng_tpa_mark_x');
                                        game.log(trigger.player, '移除了', '#g城', '标记');
                                    },
                                },
                                gain: {
                                    audio: 'weicheng_tpa',
                                    trigger: {
                                        player: 'turnOverEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseBool('是否获得一个<城>标记？');
                                        ('step 1');
                                        if (result.bool) {
                                            player.addMark('shoutu');
                                        }
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            filter: (event, player) => game.hasPlayer((current) => current != player && current.countMark('weicheng_tpa_mark_x') <= 0 && current.countCards('h') && player.countMark('shoutu')),
                            filterTarget: (card, player, target) => target != player && target.countMark('weicheng_tpa_mark_x') <= 0 && target.countCards('h'),
                            content() {
                                'step 0';
                                player.removeMark('shoutu', 1);
                                target.addMark('weicheng_tpa_mark_x', 1);
                                target.addSkill('weicheng_tpa_mark_x');
                                ('step 1');
                                player.viewHandcards(target);
                                ('step 2');
                                if (!target.isDisabledJudge() && !target.countCards('j', 'bingliang')) {
                                    player
                                        .chooseControl()
                                        .set('choiceList', ['获得其中的一张牌.', '弃置其中两张牌.', '将其中的一张牌当作【兵粮寸断】对其使用.'])
                                        .set('ai', function () {
                                            if (target.countCards('h') < 2) return [0, 2].randomGet();
                                            return [0, 1, 2].randomGet();
                                        });
                                } else {
                                    player
                                        .chooseControl()
                                        .set('choiceList', ['获得其中的一张牌.', '弃置其中两张牌.'])
                                        .set('ai', function () {
                                            if (target.countCards('h') < 2) return 0;
                                            return 1;
                                        });
                                }
                                ('step 3');
                                if (result.index == 0) {
                                    player.gainPlayerCard(target, 'visible', true, 'h').set('ai', function (button) {
                                        return get.value(button.link, _status.event.target);
                                    });
                                    if (!player.isTurnedOver()) player.turnOver();
                                    event.finish();
                                }
                                if (result.index == 2) {
                                    player.choosePlayerCard(target, '将其中的一张牌当作【兵粮寸断】对其使用.', 'visible', true, 'h').set('ai', function (button) {
                                        return get.value(button.link, _status.event.target);
                                    });
                                }
                                if (result.index == 1) {
                                    player.discardPlayerCard(target, 'visible', true, 2, 'h').set('ai', function (button) {
                                        return get.value(button.link, _status.event.target);
                                    });
                                    if (!player.isTurnedOver()) player.turnOver();
                                    event.finish();
                                }
                                ('step 4');
                                var card = result.cards[0];
                                target.$throw(card);
                                target.addJudge({ name: 'bingliang' }, result.cards);
                                if (!player.isTurnedOver()) player.turnOver();
                            },
                            ai: {
                                threaten: 3,
                                order: 11,
                                result: {
                                    player(player, target) {
                                        return -0.25;
                                    },
                                    target(player, target) {
                                        if (!target.hasMark('shoutu')) return -1;
                                        return -0.2;
                                    },
                                },
                            },
                        },
                        mo_houji: {
                            audio: 'ext:界限突破/audio:2',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.getStorage('mo_houji').length) {
                                        return '本回合已对:' + get.translation(player.getStorage('mo_houji')) + '发动过【火计】.';
                                    }
                                },
                            },
                            init(player) {
                                if (!player.storage.mo_houji) player.storage.mo_houji = [];
                            },
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target && !player.getStorage('mo_houji').includes(target);
                            },
                            content() {
                                'step 0';
                                player.markAuto('mo_houji', target);
                                if (!player.hasSkill('mo_houji_character')) player.addTempSkill('mo_houji_character');
                                player
                                    .chooseToDuiben(target)
                                    .set('title', '谋弈')
                                    .set('namelist', ['正面对敌', '重兵守粮', '焚其粮草', '焚其大军'])
                                    .set('ai', (button) => {
                                        var source = _status.event.parent.player,
                                            target = _status.event.parent.target;
                                        return 1 + Math.random();
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (result.player == 'db_def1') {
                                        target.addTempSkill('mo_houji_club', { player: 'phaseEnd' });
                                        if (!target.hasJudge('bingliang')) {
                                            if (ui.cardPile.childNodes.length) {
                                                if (player.canUse({ name: 'bingliang' }, target, false)) {
                                                    player.useCard({ name: 'bingliang' }, target, get.cards());
                                                }
                                            }
                                        }
                                    } else {
                                        target.damage('fire', player);
                                        if (!target.hasJudge('lube')) {
                                            if (ui.cardPile.childNodes.length) {
                                                if (player.canUse({ name: 'lebu' }, target, false)) {
                                                    player.useCard({ name: 'lebu' }, target, get.cards());
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    game.playAudio('../extension/界限突破/audio/mo_houji3.mp3');
                                }
                            },
                            ai: {
                                threaten: 1.2,
                                order: 5.5,
                                result: {
                                    player: 1,
                                    target: -1,
                                },
                            },
                            subSkill: {
                                character: {
                                    onremove(player) {
                                        if (player.getStorage('mo_houji').length) {
                                            player.unmarkAuto('mo_houji', player.getStorage('mo_houji'));
                                        }
                                    },
                                    forced: true,
                                },
                                club: {
                                    forced: true,
                                    mark: true,
                                    intro: {
                                        content: '你的♣️️判定牌视为♦️️判定牌.',
                                    },
                                    mod: {
                                        suit(card, suit) {
                                            if (suit == 'club') return 'diamond';
                                        },
                                    },
                                },
                            },
                        },
                        mo_kanpo: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'wuxie' && (!card || !card.hasGaintag || !card.hasGaintag('mo_kanpo'))) return;
                                    var cards = player.getCards('hs', function (card) {
                                        return card.name == 'wuxie' || !card || !card.hasGaintag || !card.hasGaintag('mo_kanpo'); //QQQ
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
                                    return lib.skill.mo_kanpo.mod.aiValue.apply(this, arguments);
                                },
                            },
                            audio: 'ext:界限突破/audio:2',
                            enable: 'chooseToUse',
                            filterCard: true,
                            viewAsFilter(player) {
                                return (
                                    player.countCards('hes', function (card) {
                                        return !card.hasGaintag('mo_kanpo');
                                    }) > 0
                                );
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            position: 'hes',
                            precontent() {
                                player.addTempSkill('mo_kanpo_effect');
                            },
                            prompt: '将一张牌当无懈可击使用,本回合不能再打出和使用此牌.',
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
                            subSkill: {
                                effect: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    popup: false,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (event.skill == 'mo_kanpo') {
                                            if (
                                                event.cards.some((card) => {
                                                    return get.position(card, true) == 'o';
                                                })
                                            )
                                                return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = [];
                                        var cardsx = trigger.cards.filter((card) => {
                                            return get.position(card, true) == 'o';
                                        });
                                        if (cardsx.length) cards.addArray(cardsx);
                                        if (cards.length) {
                                            player.gain(cards, 'gain2').gaintag.add('mo_kanpo');
                                            player.addTempSkill('mo_kanpo_clear');
                                        }
                                    },
                                },
                                clear: {
                                    popup: false,
                                    charlotte: true,
                                    onremove(player) {
                                        player.removeGaintag('mo_kanpo');
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('mo_kanpo')) return false;
                                            }
                                        },
                                        cardRespondable(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('mo_kanpo')) return false;
                                            }
                                        },
                                        cardSavable(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('mo_kanpo')) return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        mobazhen: {
                            audio: 'ext:界限突破/audio:2',
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (target.getExpansions('mobazhen').length) {
                                        var type = get.type(target.getExpansions('mobazhen')[0]);
                                        var suit = get.suit(target.getExpansions('mobazhen')[0]);
                                        if ((get.type(card) == type || card.suit == suit) && target != player) {
                                            return false;
                                        }
                                    }
                                },
                            },
                            trigger: {
                                player: ['phaseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hes');
                            },
                            content() {
                                'step 0';
                                player.chooseCard('hes', get.prompt2('mobazhen')).set('ai', function (card) {
                                    if (8 - get.value(card)) {
                                        return get.color(card) == 'red';
                                    }
                                    return 10;
                                });
                                ('step 1');
                                if (result.cards && result.cards.length) {
                                    player.addSkill('mobazhen_effect');
                                    player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('mobazhen');
                                }
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            subSkill: {
                                effect: {
                                    audio: 'mobazhen',
                                    trigger: {
                                        player: ['phaseBegin'],
                                    },
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('mobazhen').length;
                                    },
                                    content() {
                                        var cards = player.getExpansions('mobazhen');
                                        if (cards.length) player.loseToDiscardpile(cards);
                                        player.removeSkill('mobazhen_effect');
                                    },
                                },
                            },
                        },
                        wusheng_mo: {
                            audio: 'ext:界限突破/audio:3',
                            subSkill: {
                                damage: {
                                    audio: 'wusheng_mo',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        if (event._notrigger.includes(event.player)) return false;
                                        return event.card && event.card.name == 'sha' && event.player != player && player.countMark('charge') < 5;
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('charge', 1);
                                    },
                                },
                                phase: {
                                    audio: 'wusheng_mo',
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('charge') < 5;
                                    },
                                    content() {
                                        player.addMark('charge', 1);
                                    },
                                },
                                draw: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'wusheng_mo';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                            group: ['wusheng_mo_phase', 'wusheng_mo_damage'],
                            init(player) {
                                if (player.countMark('charge') < 5) player.addMark('charge', 2);
                            },
                            chargeSkill: true,
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                var filter = event._backup.filterCard;
                                var name = get.color(card, player);
                                if (name == 'red' && filter({ name: 'sha' }, player, event)) return true;
                                if (name == 'black' && filter({ name: 'juedou' }, player, event)) return true;
                                return false;
                            },
                            filter(event, player) {
                                var filter = event.filterCard;
                                if (player.countMark('charge') > 0) {
                                    if (filter({ name: 'sha' }, player, event) && player.countCards('hes', { color: 'red' })) return true;
                                    if (filter({ name: 'juedou' }, player, event) && player.countCards('hes', { color: 'black' })) return true;
                                }
                                return false;
                            },
                            position: 'hes',
                            precontent() {
                                player.addTempSkill('wusheng_mo_draw');
                                player.removeMark('charge', 1);
                            },
                            viewAs(cards, player) {
                                if (cards.length) {
                                    var name = false,
                                        nature = null;
                                    switch (get.color(cards[0], player)) {
                                        case 'red':
                                            name = 'sha';
                                            break;
                                        case 'black':
                                            name = 'juedou';
                                            break;
                                    }
                                    if (name) return { name: name };
                                }
                                return null;
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', { color: 'red' }) || player.countMark('charge') <= 0) return false;
                            },
                            prompt: '将一张红色牌当【杀】使用或打出,并且无视防具;或者将一张黑色牌当做【决斗】使用;且结算后你摸一张牌',
                            check(card) {
                                var val = get.value(card);
                                return 6 - val;
                            },
                            ai: {
                                respondSha: true,
                                unequip: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hes') || player.countMark('charge') <= 0) return false;
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.some((target) => {
                                                return (
                                                    target.mayHaveShan(
                                                        viewer,
                                                        'use',
                                                        target.getCards('h', (i) => {
                                                            return i.hasGaintag('sha_notshan');
                                                        })
                                                    ) &&
                                                    get.attitude(viewer, target) < 0 &&
                                                    get.damageEffect(target, player, viewer, get.natureList(card)) > 0
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_add')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.some((target) => {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHaveShan(
                                                            viewer,
                                                            'use',
                                                            target.getCards('h', (i) => {
                                                                return i.hasGaintag('sha_notshan');
                                                            })
                                                        ) ||
                                                        player.hasSkillTag(
                                                            'directHit_ai',
                                                            true,
                                                            {
                                                                target: target,
                                                                card: card,
                                                            },
                                                            true
                                                        )) &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (typeof item === 'object' && game.hasNature(item, 'linked')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && lib.card.sha.ai.canLink(player, current, item) && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0;
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 3.1;
                                        return 3;
                                    }
                                    return 3.05;
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target, card) {
                                        if (
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            return 0;
                                        }
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                    natureDamage(card) {
                                        if (game.hasNature(card, 'linked')) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (game.hasNature(card, 'fire')) return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (game.hasNature(card, 'thunder')) return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (game.hasNature(card, 'poison')) return 1;
                                    },
                                },
                            },
                        },
                        yijue_mo: {
                            audio: 'ext:界限突破/audio:2',
                            juexingji: true,
                            derivation: ['mashu', 'danqi_mo'],
                            trigger: {
                                global: 'damageBegin4',
                            },
                            filter(event, player) {
                                if (!event.source || event.source != player || event.player == player) return false;
                                return event.num >= event.player.hp;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                trigger.cancel();
                                trigger.player.popup('免伤');
                                player.awakenSkill('yijue_mo');
                                player.loseMaxHp();
                                player.addSkills(['mashu', 'danqi_mo']);
                                if (player.countMark('charge') < 5) player.addMark('charge', 5 - player.countMark('charge'));
                            },
                        },
                        danqi_mo: {
                            audio: 'ext:界限突破/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && (event.card.suit == 'heart' || event.card.suit == 'diamond');
                            },
                            content() {
                                'step 0';
                                if (trigger.card.suit == 'diamond') {
                                    var evt = trigger.parent;
                                    if (typeof evt.baseDamage != 'number') evt.baseDamage = 1;
                                    evt.baseDamage += 1;
                                    event.finish();
                                }
                                if (trigger.card.suit == 'heart') {
                                    player
                                        .chooseTarget('令一名角色回复一点体力', false, function (card, player, target) {
                                            return target.maxHp > target.hp;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (target.maxHp > target.hp && target.hp < 3) return att * 2;
                                            return att;
                                        });
                                }
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].recover();
                                } //QQQ
                            },
                        },
                        mo_zhiheng: {
                            audio: 'ext:界限突破/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                if (typeof event != 'string') event = event.parent.name;
                                var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            selectCard: [1, Infinity],
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    get.position(card) == 'h' &&
                                    !player.countCards('h', 'du') &&
                                    (player.hp > 2 ||
                                        !player.countCards('h', function (card) {
                                            return get.value(card) >= 8;
                                        }))
                                ) {
                                    return 1;
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.discard(cards);
                                ('step 1');
                                player
                                    .chooseControl('【桃】/【酒】', '【过河拆桥】/【顺手牵羊】', '【无中生有】/【决斗】')
                                    .set('ai', function () {
                                        if (player.hp <= 2) return 0;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.countCards('j') && current != player && get.attitude(player, current) > 0;
                                            })
                                        )
                                            return 1;
                                        return 2;
                                    })
                                    .set('prompt', '请选择你想优先获得哪种牌');
                                ('step 2');
                                var cards = [];
                                event.num = 0;
                                if (result.control == '【桃】/【酒】') {
                                    var card = get.cardPile2(function (card) {
                                        return ['tao', 'jiu'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                } else if (result.control == '【过河拆桥】/【顺手牵羊】') {
                                    var card = get.cardPile2(function (card) {
                                        return ['guohe', 'shunshou'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                } else {
                                    var card = get.cardPile2(function (card) {
                                        return ['wuzhong', 'juedou'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) {
                                    game.cardsGotoPile(card, 'insert');
                                } else {
                                    event.num++;
                                }
                                ('step 3');
                                player.draw(cards.length + event.num);
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
                                threaten: 1.55,
                            },
                        },
                        mo_jiuyuan: {
                            audio: 'ext:界限突破/audio:2',
                            zhuSkill: true,
                            trigger: {
                                player: ['damageEnd', 'dying'],
                            },
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current != player && current.group == player.group;
                                    })
                                )
                                    return false;
                                return player.hasZhuSkill('mo_jiuyuan');
                            },
                            content() {
                                'step 0';
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(lib.sort.seat);
                                event.targets = [];
                                event.count = Math.min(trigger.num, 9);
                                for (var i = 0; i < targets.length; i++) {
                                    if (targets[i].group == player.group) event.targets.push(targets[i]);
                                }
                                event.targets.sort(lib.sort.seat);
                                ('step 1');
                                player.line(event.targets, 'green');
                                event.count = 0;
                                event.gain = [];
                                ('step 2');
                                event.bool = false;
                                if (event.targets[event.count].countCards('he')) {
                                    event.bool = true;
                                    event.targets[event.count].chooseCard(1, 'he', true, `救援:请交给${get.translation(player)}一张牌,若为红则${get.translation(player)}回复一点体力(多名角色不能叠加)`).set('ai', (card) => {
                                        var target = _status.event.player;
                                        var att = get.attitude(target, player);
                                        if (card.suit == 'heart' && att > 0) return 2.5;
                                        return -get.value(card);
                                    });
                                }
                                ('step 3');
                                if (event.bool) {
                                    var target = event.targets[event.count];
                                    event.cards = result.cards;
                                    event.gain.push(event.cards.suit);
                                    player.gain(event.cards, 'give', target);
                                }
                                if (event.count < event.targets.length) {
                                    event.count++;
                                    event.goto(2);
                                }
                                ('step 4');
                                if (event.gain.includes('heart')) {
                                    player.recover();
                                }
                            },
                        },
                        re_tunchu: {
                            group: 're_tunchu_start',
                            audio: 'tunchu',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                if (event.numFixed || player.getExpansions('re_tunchu').length) return false;
                                return true;
                            },
                            content() {
                                trigger.num += 2;
                                player.addTempSkill('re_tunchu_choose', 'phaseDrawAfter');
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += player.getExpansions('re_tunchu').length);
                                },
                                cardEnabled(card, player) {
                                    if (player.getExpansions('re_tunchu').length && card.name == 'sha') {
                                        return false;
                                    }
                                },
                            },
                            subSkill: {
                                start: {
                                    audio: 'tunchu',
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw(2);
                                        ('step 1');
                                        var nh = player.countCards('h');
                                        if (nh) {
                                            player.chooseCard('h', [1, nh], '将任意张手牌置于你的武将牌上').set('ai', function (card) {
                                                var player = _status.event.player;
                                                var count = game.countPlayer(function (current) {
                                                    return get.attitude(player, current) > 2 && current.hp - current.countCards('h') > 1;
                                                });
                                                if (ui.selected.cards.length >= count) return -get.value(card);
                                                return 5 - get.value(card);
                                            });
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('re_tunchu');
                                        }
                                    },
                                },
                                choose: {
                                    trigger: {
                                        player: 'phaseDrawEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        player.removeSkill('re_tunchu_choose');
                                        var nh = player.countCards('h');
                                        if (nh) {
                                            player.chooseCard('h', [1, nh], '将任意张手牌置于你的武将牌上').set('ai', function (card) {
                                                var player = _status.event.player;
                                                var count = game.countPlayer(function (current) {
                                                    return get.attitude(player, current) > 2 && current.hp - current.countCards('h') > 1;
                                                });
                                                if (ui.selected.cards.length >= count) return -get.value(card);
                                                return 5 - get.value(card);
                                            });
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('re_tunchu');
                                        }
                                    },
                                },
                            },
                        },
                        re_shuliang: {
                            audio: 'shuliang',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('re_tunchu').length && (event.player.countCards('h') < event.player.maxHp || player == event.player) && event.player.isIn();
                            },
                            content() {
                                'step 0';
                                var goon = get.attitude(player, trigger.player) > 0;
                                player
                                    .chooseCardButton(get.prompt('re_shuliang', trigger.player), player.getExpansions('re_tunchu'))
                                    .set('ai', function () {
                                        if (_status.event.goon) return 1;
                                        return 0;
                                    })
                                    .set('goon', goon);
                                ('step 1');
                                if (result.bool) {
                                    player.loseToDiscardpile(result.links);
                                    trigger.player.draw(2);
                                }
                            },
                            ai: {
                                combo: 're_tunchu',
                            },
                        },
                    },
                };
                lib.config.all.characters.add('界限突破');
                lib.config.characters.add('界限突破');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:界限突破/image/${i}.jpg`)
                }
                lib.translate['界限突破_character_config'] = `界限突破`;
                return QQQ;
            });
        },
        config: {
            qq_group: {
                name: "<div><button id=\"qq_group\" onclick=\"window.open('http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Sf4MlhkLR0ORapNJYMLEz659INilpJwk&authKey=jtT4tczILChg9OCmBGBYKThahisipZBNn%2FDVLykZRkg6ZEa5Wvsl0hcG13UeL9MD&noverify=0&group_code=741344791', '_blank');\">点击链接加入群聊【Iking和Sunny的求援群】</button> </div><br><font color='#FFFF00'>如果有意见或者bug或者想设计新的武将可以直接加群提出!</font><br>",
                clear: true,
            },
        },
        package: {
            card: {
                card: {
                    juilingzuiru: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -3,
                        },
                        ai: {
                            basic: {
                                equipValue: 8,
                                order: 8,
                                useful: 2,
                                value: 8,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        skills: ['juilingzuiru_skill'],
                        enable: true,
                        selectTarget: -1,
                        filterTarget(card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content() {
                            if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                        },
                        toself: true,
                    },
                    ruyigoldenhoop: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -7,
                        },
                        skills: ['ruyigoldenhoop_skill'],
                        ai: {
                            basic: {
                                equipValue: 3,
                                order(card, player) {
                                    const equipValue = get.equipValue(card, player) / 20;
                                    return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                },
                                useful: 2,
                            },
                            result: {
                                target: (player, target, card) => get.equipResult(player, target, card.name),
                            },
                        },
                        enable: true,
                        selectTarget: -1,
                        filterTarget: (card, player, target) => player == target && target.canEquip(card, true) && target.hasSkill('jinshen'),
                        modTarget: true,
                        allowMultiple: false,
                        content() {
                            if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                        },
                        toself: true,
                    },
                },
                translate: {
                    juilingzuiru: '祭雷之刃',
                    juilingzuiru_info: '『祭祀使用的神剑、持有者可呼风唤雨、驱雷掣电!』<br>你可以将一张普通【杀】当【雷杀】使用.每回合限一次,你可以视为打出一张【闪】.',
                    ruyigoldenhoop: '如意金箍',
                    ruyigoldenhoop_info: '『听好了,从今以后一万年,你们都会记住这个名字——孙悟空!』<br>锁定技,当你使用杀指定目标后,你必须选择一项:<br>1.令目标弃两张牌,否则不能使用【闪】响应此【杀】.<br>2.弃目标一张牌,此【杀】不计入次数限制且取消此【杀】.<br><b>此牌不能被弃置/打出/废除武器区/被其他角色获得/被其他武器替换</b>',
                },
            },
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>",
            author: 'Sunny',
            version: '2.0',
        },
    };
});
