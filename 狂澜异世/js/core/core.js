import {lib,game,ui,get,ai,_status} from '../../../../noname.js'
let chooseNumber = async () => {
    const container = ui.create.dialog();
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    // // 创建加号按钮
    const plusBtn = ui.create.button("+", 'tdnodes', 'click');
    plusBtn.style.fontSize = '24px';
    plusBtn.style.marginRight = '10px';
    plusBtn.onclick = () => updateCounter(1);
    // // 创建减号按钮
    const minusBtn = ui.create.button("-", 'tdnodes', 'click')
    minusBtn.style.fontSize = '24px';
    minusBtn.onclick = () => updateCounter(-1);
    // // 创建显示数字的span元素
    const counterDisplay = document.createElement('span');
    counterDisplay.innerText = 0;
    // // 添加元素到容器
    container.appendChild(minusBtn);
    container.appendChild(counterDisplay);
    container.appendChild(plusBtn);
    // // 更新计数器值函数
    const updateCounter = async (change) => {
        let currentCount = parseInt(counterDisplay.innerText, 10);
        currentCount += change;
        counterDisplay.innerText = currentCount;
        return currentCount;
    }
    // 返回获取当前计数值的函数
    game.log()
    container.open()
    game.pause()
    if (parseInt(counterDisplay.innerText, 10) == 3) {
        container.close()
        game.resume()
    }
    return parseInt(counterDisplay.innerText, 10)
}