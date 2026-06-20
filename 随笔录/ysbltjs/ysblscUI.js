const EXT_HAREM_DEVELOP_MODEYSBL = false;
let ysblscBtn = document.createElement('div');
ysblscBtn.setAttribute('id', 'ysblscBtn');
ysblscBtn.onclick = function () {
    ysblscDiv.style.display = 'block';
    wifeysbl.style.display = 'block';
    prevWifeysbl.classList.add('arrowAnim');
    prevWifeysbl.style.display = 'block';
    nextWifeysbl.classList.add("arrowAnim");
    nextWifeysbl.style.display = 'block';
    wifeMLysbl.style.display = "none";
    chuanglianLeftysbl.style.display = "none";
    chuanglianRightysbl.style.display = "none";
    giftBtn1ysbl.style.display = 'block';
    giftBtn10ysbl.style.display = 'block';
    giftBtn50ysbl.style.display = 'block';
};
document.body.appendChild(ysblscBtn);
let ysblscDiv = document.createElement('div');
ysblscDiv.setAttribute('id', 'ysblscDiv');
ysblscDiv.onclick = function (cysbl) {
    cysbl.stopPropagation();
    let dysbl = getComputedStyle(this).display;
    if (dysbl != 'none') {
        this.style.display = "none";
    }
};
document.body.appendChild(ysblscDiv);
let ysblscBg = document.createElement('div');
ysblscDiv.appendChild(ysblscBg);
ysblscBg.setAttribute('id', 'ysblscBg');
ysblscBg.onclick = function (cysbl) {
    cysbl.stopPropagation();
};
let wifeysbl = document.createElement("img");
ysblscBg.appendChild(wifeysbl);
wifeysbl.setAttribute('id', 'wifeysbl');
wifeysbl.classList.add('wifeAvatarClass');
wifeysbl.onclick = function (cysbl) {
    if (!EXT_HAREM_DEVELOP_MODEYSBL) {
        if (localStorage.getItem("extHarem_lovePoint_" + localStorage.getItem('extYsblsc_currentWifeysbl')) < 10)
            return;
    }
    wifeysbl.classList.add("hideWife");
    prevWifeysbl.classList.remove("arrowAnim");
    prevWifeysbl.classList.add("hideBtn");
    nextWifeysbl.classList.remove('arrowAnim');
    nextWifeysbl.classList.add("hideBtn");
    chuanglianLeftysbl.style.display = 'block';
    chuanglianRightysbl.style.display = 'block';
    giftBtn1ysbl.style.display = "none";
    giftBtn10ysbl.style.display = "none";
    giftBtn50ysbl.style.display = "none";
    let dysbl = () => {
        wifeysbl.style.display = "none";
        wifeysbl.classList.remove("hideWife");
        wifeMLysbl.style.display = 'block';
        prevWifeysbl.classList.remove('hideBtn');
        prevWifeysbl.style.display = 'none';
        nextWifeysbl.classList.remove('hideBtn');
        nextWifeysbl.style.display = "none";
        wifeysbl.removeEventListener('animationend', dysbl);
    };
    wifeysbl.addEventListener('animationend', dysbl);
};
let prevWifeysbl = document.createElement('div');
ysblscBg.appendChild(prevWifeysbl);
prevWifeysbl.setAttribute('id', 'prevWifeysbl');
let nextWifeysbl = document.createElement('div');
ysblscBg.appendChild(nextWifeysbl);
nextWifeysbl.setAttribute('id', "nextWife");
let wifeMLysbl = document.createElement("img");
ysblscBg.appendChild(wifeMLysbl);
wifeMLysbl.setAttribute('id', 'wifeMLysbl');
let chuanglianLeftysbl = document.createElement('div');
ysblscBg.appendChild(chuanglianLeftysbl);
chuanglianLeftysbl.setAttribute('id', 'chuanglianLeftysbl');
let chuanglianRightysbl = document.createElement('div');
ysblscBg.appendChild(chuanglianRightysbl);
chuanglianRightysbl.setAttribute('id', "chuanglianRight");
let wifeNameysbl = document.createElement('div');
ysblscBg.appendChild(wifeNameysbl);
wifeNameysbl.setAttribute('id', 'wifeNameysbl');
let buffIntroysbl = document.createElement('div');
ysblscBg.appendChild(buffIntroysbl);
buffIntroysbl.setAttribute('id', 'buffIntroysbl');
let wifeIntroysbl = document.createElement('div');
ysblscBg.appendChild(wifeIntroysbl);
wifeIntroysbl.setAttribute('id', "wifeIntro");
let wifeLoveysbl = document.createElement('div');
ysblscBg.appendChild(wifeLoveysbl);
wifeLoveysbl.setAttribute('id', "wifeLove");
let wifeLoveBarysbl = document.createElement('div');
ysblscBg.appendChild(wifeLoveBarysbl);
wifeLoveBarysbl.setAttribute('id', 'wifeLoveBarysbl');
let wifeLoveBarValueysbl = document.createElement('div');
ysblscBg.appendChild(wifeLoveBarValueysbl);
wifeLoveBarValueysbl.setAttribute('id', 'wifeLoveBarValueysbl');
let giftPointysbl = document.createElement('div');
ysblscBg.appendChild(giftPointysbl);
giftPointysbl.setAttribute('id', 'giftPointysbl');
let giftBtn1ysbl = document.createElement('div');
ysblscBg.appendChild(giftBtn1ysbl);
giftBtn1ysbl.setAttribute('id', 'giftBtn1ysbl');
let giftBtn10ysbl = document.createElement('div');
ysblscBg.appendChild(giftBtn10ysbl);
giftBtn10ysbl.setAttribute('id', "giftBtn10");
let giftBtn50ysbl = document.createElement('div');
ysblscBg.appendChild(giftBtn50ysbl);
giftBtn50ysbl.setAttribute('id', 'giftBtn50ysbl');
if (EXT_HAREM_DEVELOP_MODEYSBL) {
    let currentWifeysbl = '妃:';
    let lovePointysbl = 100;
    let giftysbl = 500;
    ysblscBtn.style.display = 'block';
    wifeysbl.setAttribute('src', 'extension/随笔录/wifeysbl/Avatar.png');
    if (lovePointysbl < 50) {
        wifeMLysbl.setAttribute('src', 'extension/随笔录/images/img_ml1.png');
    } else {
        wifeMLysbl.setAttribute('src', 'extension/随笔录/images/img_ml2.png');
    }
    wifeNameysbl.innerHTML = currentWifeysbl;
    wifeLoveysbl.innerHTML = "好感度:" + lovePointysbl + "/100";
    buffIntroysbl.innerHTML = "技能 - buffIntroysbl";
    wifeIntroysbl.innerHTML = "信息 - wifeIntro";
    wifeLoveBarValueysbl.style.width = 0.8 * lovePointysbl + '%';
    giftPointysbl.innerHTML = '礼品点:' + giftysbl;
}