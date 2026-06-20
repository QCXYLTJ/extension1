import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
import { animate } from '../plugins/animate.js';
// 自定义HTML元素(标签)
export class TipText extends HTMLElement {
    static get observedAttributes() {
        return [
            'text', 'special',
            'noul'
        ];
    }
    update() {
        let str = this.getAttribute('text');
        if (!this.getAttribute('noul')) {
            this.oInnerHTML = this.innerHTML;
            if (!this.uled)
                this.innerHTML = '<u>'
                    + this.innerHTML
                    + '</u>';
            this.uled = true;
        } else if (this.oInnerHTML)
            this.innerHTML = this.oInnerHTML;
        this.str = str;
        this._customintro = function (dialog) {
            if (this.getAttribute('special'))
                eval(this.str);
            else dialog.addText(get.translation(this.str));
        };
        this.addEventListener('click', e => {
            ui.click.intro.call(this, { touches: [e], ...e });
        });
        lib.setIntro(this);
    }
    attributeChangedCallback() {
        this.update();
    }
    constructor() {
        super();
        this.update();
    }
};
// 自定义HTML标签
if ('customElements' in window) {
    window.customElements.define(
        'dqzw-tiptext',
        TipText
    );
};
HTMLElement.prototype.dqzwAnimate = animate;