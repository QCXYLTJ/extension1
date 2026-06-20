/**
 * 过渡动画
 * @param {Object} options
 * @param {Number} options.from = 0 - 开始状态
 * @param {Number} options.to - 结束状态
 * @param {Function} [options.step] - 每一步要执行的函数
 * @param {Number} options.duration = 600 - 动画完成所需时间,单位为毫秒
 * @param {Number} [options.delay] - 动画开始延迟,单位为毫秒
 * @param {Function} [options.callback] - 动画结束时执行
 * @param {Boolean} [options.stop] - 是否暂停动画
 * @param {String} [options.name = 'innerHTML'] - 要改变值的属性名
 * @return {Object} - 含play、stop、over方法的对象,play开始动画,stop停止动画,over结束动画
 */
export function animate(options) {
    let {
        from, to,
        step, duration = 600,
        delay, stop, name = 'innerHTML',
        callback = game.kongfunc
    } = options;
    from = typeof from == 'number' ? from :
        (this.num || 0)
    let snum = (to - from) / duration
        , st = Date.now()
        , over
        , that = this;
    this.inAnimate = true;
    if (from == to)
        callback.call(this, options);
    if (delay)
        setTimeout(change, delay);
    else change();
    function change() {
        if (!stop) {
            let time = Math.min(
                Date.now() - st,
                duration
            )
                , num = Math.floor(from + snum * time);
            if (time >= duration || over || !duration) {
                if (!step)
                    that[name] = to;
                else step.call(that, num, from, snum, time, to, true);
                delete that.inAnimate;
                callback.call(that, options);
                if (typeof over == 'function')
                    over.call(that, options);
                return;
            };
            if (step) {
                if (step.call(that, num, from, snum, time) === false)
                    stop = true;
            }
            else {
                that[name] = num;
                that.num = from + snum * time;
            };
        };
        requestAnimationFrame(change);
    };
    return {
        stop() {
            stop = true;
            delete this.inAnimate;
        },
        play() {
            stop = false;
            this.inAnimate = true;
        },
        over: callback => {
            over = callback || true;
        }
    };
};