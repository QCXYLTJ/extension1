import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
import { nonameInitialized } from '../../../../noname/util/index.js';
export async function precontent() {
    window.HOK = {
        getIsPhone() {
            //获取浏览器navigator对象的userAgent属性（浏览器用于HTTP请求的用户代理头的值）
            var info = navigator.userAgent;
            //通过正则表达式的test方法判断是否包含“Mobile”字符串
            var isPhone = /mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(info);
            //如果包含“Mobile”（是手机设备）则返回true
            return isPhone;
        },
        checkFileExist(path, callback) {
            if (lib.node && lib.node.fs) {
                try {
                    var stat = lib.node.fs.statSync(__dirname + '/' + path);
                    callback(stat);
                } catch (e) {
                    callback(false);
                    return;
                }
            } else {
                resolveLocalFileSystemURL(
                    nonameInitialized + path,
                    (function (name) {
                        return function (entry) {
                            callback(true);
                        };
                    })(name),
                    function () {
                        callback(false);
                    }
                );
            }
        },
        skillIndicate(tipname, id) {
            const dibeijing = ui.create.div('.hokdibeijing', document.body);
            dibeijing.style.zIndex = 25;
            const skilltip = ui.create.div('.hok-skilltip', dibeijing);
            skilltip.innerHTML = tipname;
            const herf = document.getElementById(id);
            if (herf) {
                let left = herf.getBoundingClientRect().left;
                if (HOK.getIsPhone()) left += herf.offsetParent.offsetLeft;
                left += document.body.offsetWidth * 0.15;
                skilltip.style.left = left + 'px';
                skilltip.style.top = herf.getBoundingClientRect().top + 30 + 'px';
            }
            dibeijing.listen(function (e) {
                e.stopPropagation();
                this.remove();
            });
        },
        skillTipsInfo(str1, str2) {
            var temp = '',
                numx = 1;
            while (numx != 10000) {
                temp += get.rand(1, 9) / numx;
                numx = numx * 10;
            }
            return "<a id='" + temp + "' style='color:unset' href=\"javascript:window.HOK.skillIndicate('" + str2 + "','" + temp + '\');">' + str1 + '※' + '</a>';
        },
        skillTagsInfo(str1, str2) {
            var temp = '',
                numx = 1;
            while (numx != 10000) {
                temp += get.rand(1, 9) / numx;
                numx = numx * 10;
            }
            return "<a id='" + temp + "' style='color:unset' href=\"javascript:window.HOK.skillIndicate('" + str2 + "','" + temp + '\');">' + str1 + '</a>';
        },
        skillTipsIndicate(skill, player) {
            return `${HOK.skillTipsInfo(get.translation(skill), get.plainText(get.translation(skill) + '：' + get.skillInfoTranslation(skill, player)))}`;
        },
        replaceFunction(targetFunction, str, content) {
            let name = targetFunction.name;
            let toString = targetFunction.toString();
            let s = toString.replace(new RegExp(str, 'g'), content);
            return eval(`(${s})`);
        },
    };
    console.time('王者荣耀');
    HOK.checks = [];
    HOK.extensionPath = 'extension/王者荣耀/';
    lib.init.css('extension/王者荣耀', 'extension');
    lib.init.css('extension/王者荣耀/css', 'dialog');
    let assets = ['character/index.js', 'assets/main/refix.js'];
    Promise.all(assets.map((path) => import('../' + path)))
        .then((modules) => {
            console.log('王者荣耀>>>导入成功');
        })
        .catch((error) => {
            alert('error ' + error + '导入失败 !');
            console.warn(error.message);
        });
    const cacheFunc = function (path) {
        game.getFileList(path, async (folders, files) => {
            for (const file of files) {
                let obj = path.slice(25).replace(/\//g, '.');
                if (file == 'index.js') {
                    await import('../../../' + path + '/' + file);
                }
            }
            for (const folder of folders) cacheFunc(path + '/' + folder);
        });
    };
    cacheFunc('extension/王者荣耀/noname');
    console.timeEnd('王者荣耀');
}
