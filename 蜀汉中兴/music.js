//代码来源:https://blog.csdn.net/weixin_42100456/article/details/106354244
var socre = 0; //分数
var items = []; //数组
var number = 3000;
var numberx = 2.9;
var audio = document.createElement("AUDIO");
audio.src = 'extension/蜀汉中兴/musicClick.mp3';
var audio2 = document.createElement("AUDIO");
audio2.src = 'extension/蜀汉中兴/music.mp3';
audio2.play();
var audio3 = document.createElement("AUDIO");
audio3.src = 'extension/蜀汉中兴/prefect.mp3';
// 随机在四个轨道内生成小♦️️
function CreateBlock(num) {
  var crackNumber = Math.floor(Math.random() * 4); //轨道编号
  var blockNum = Math.floor(Math.random() * 3 + 1); //轨道滑落♦️️数量,1~3 块  
  var fatherBox = document.getElementsByClassName("crack")[crackNumber]; //找到父级元素
  for (var i = 0; i < blockNum; i++) {
    var block = document.createElement('div');
    fatherBox.appendChild(block);
    block.style.left = '0px';
    //获取轨道的长度
    //var target = fatherBox.offsetHeight
    //block.style['animation-duration']= numberx - ( num /25 )+'s';
    //game.log(block.style['animation-duration'])
    startMove(block, number - num / 25);
  }
}
// 小♦️️向下滑落,消失
function startMove(obj, num) {
  setTimeout(function () {
    if (obj) {
      obj.remove();
    }
  }, num);
}
// QWER健按下事件
document.onkeydown = function (event) {
  if (event.keyCode == 81) {
    if (document.getElementsByClassName('crack').length == 0) return;
    audio.play();
    var crack = document.getElementsByClassName('crack')[0];
    crack.classList.add('onclick');
    addSorce(crack);
    showSorces();
  }
  if (event.keyCode == 87) {
    if (document.getElementsByClassName('crack').length == 0) return;
    audio.play();
    var crack = document.getElementsByClassName('crack')[1];
    crack.classList.add('onclick');
    addSorce(crack);
    showSorces();
  }
  if (event.keyCode == 69) {
    if (document.getElementsByClassName('crack').length == 0) return;
    audio.play();
    var crack = document.getElementsByClassName('crack')[2];
    crack.classList.add('onclick');
    addSorce(crack);
    showSorces();
  }
  if (event.keyCode == 82) {
    if (document.getElementsByClassName('crack').length == 0) return;
    audio.play();
    var crack = document.getElementsByClassName('crack')[3];
    crack.classList.add('onclick');
    addSorce(crack);
    showSorces();
  }
};
for (var i = 0; i < document.getElementsByClassName('crack').length; i++) {
  document.getElementsByClassName('crack')[i].onclick = function (e) {
    if (document.getElementsByClassName('crack').length == 0) return;
    audio.play();
    this.classList.add('onclick');
    addSorce(this);
    showSorces();
    var that = this;
    setTimeout(function () {
      that.classList.remove('onclick');
    }, 100);
  };
}
// QWER健按下事件
document.onkeyup = function (event) {
  if (event.keyCode == 81) {
    var crack = document.getElementsByClassName('crack')[0];
    crack.classList.remove('onclick');
  }
  if (event.keyCode == 87) {
    var crack = document.getElementsByClassName('crack')[1];
    crack.classList.remove('onclick');
  }
  if (event.keyCode == 69) {
    var crack = document.getElementsByClassName('crack')[2];
    crack.classList.remove('onclick');
  }
  if (event.keyCode == 82) {
    var crack = document.getElementsByClassName('crack')[3];
    crack.classList.remove('onclick');
  }
};
//判断按钮点击,小♦️️在什么位置,进而加多少分
function addSorce(crack) {
  var firstBlock = crack.firstChild; //获取该轨道的第一个小♦️️
  if (firstBlock) {//如果该轨道存在小♦️️
    var blockTop = firstBlock.offsetTop;
    var blockHeight = firstBlock.offsetHeight;
    var crackHeight = crack.offsetHeight;
    // console.log(blockTop,blockHeight,crackHeight);
    var prefect = document.getElementsByClassName("prefect")[0];
    var good = document.getElementsByClassName("good")[0];
    var miss = document.getElementsByClassName("miss")[0];
    // console.log(blockTop, blockHeight,crackHeight);
    setTimeout(remove, 800);
    if (blockTop <= crackHeight - blockHeight && blockTop >= crackHeight - blockHeight * 1.3) {
      socre += 2; //加2分
      remove();
      prefect.style.display = "block";
      crack.style.backgroundColor = "rgba(247, 31, 31, 0.7)";
      audio3.src = 'extension/蜀汉中兴/prefect.mp3';
      audio3.play();
      firstBlock.remove();
    } else if (blockTop >= crackHeight - blockHeight * 1.8 && blockTop < crackHeight - blockHeight * 1.3) {
      socre += 1;
      remove();
      good.style.display = "block";
      crack.style.backgroundColor = "rgba(38, 18, 212, 0.676)";
      firstBlock.remove();
    } else {
      remove();
      crack.style.backgroundColor = "rgba(240, 225, 23, 0.598)";
      miss.style.display = "block";
    }
  }
}
// 每隔一段时间去除miss,prefect.good的样式
function remove() {
  for (var i = 0; i < document.getElementsByClassName('crack').length; i++) {
    document.getElementsByClassName('crack')[i].style.backgroundColor = "";
  }
  if (document.getElementsByClassName("prefect").length > 0) {
    var prefect = document.getElementsByClassName("prefect")[0];
    prefect.style.display = "none";
  }
  if (document.getElementsByClassName("good").length > 0) {
    var good = document.getElementsByClassName("good")[0];
    good.style.display = "none";
  }
  if (document.getElementsByClassName("miss").length > 0) {
    var miss = document.getElementsByClassName("miss")[0];
    miss.style.display = "none";
  }
}
//显示分数
function showSorces() {
  var elem = document.getElementsByClassName("sorce")[0];
  elem.innerHTML = socre;
  elem.style.color = 'red';
}
//"开始游戏"按钮函数
function gameTime(player, dialog) {
  var time = 25;
  var eleTime = document.getElementsByClassName('time')[0];
  var timer = setInterval(function () {
    if (time >= 0) {
      CreateBlock(socre);
      eleTime.innerHTML = time + "s";
      eleTime.style.color = "red";
      time--;
    } else {
      clearInterval(timer);
      //到时间,清空还在轨道上的♦️️
      var blocks = document.getElementsByClassName('crack');
      for (var i = 0; i < blocks.length; i++) {
        while (blocks[i].hasChildNodes()) {
          blocks[i].removeChild(blocks[i].firstChild);
        }
      }
      game.log("time is run out");
      game.log(player, "获得了", socre, "分");
      document.onkeyup = document.onkeydown = null;
      setTimeout(function () {
        dialog.remove();
        player.draw(Math.floor(socre / 3));
        game.resume();
      }, 1500);
    }
  }, 1000);
}
//var removex=setInterval(remove, 1000); //定时清理prefect,miss,good的标志