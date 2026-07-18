'use strict';
window.zyile_import = function (lib, game, ui, get, ai, _status) {
  'use strict';
  window.zyile_dragZoom = function zyile_dragZoom(element, body, Tran, XZ, isImp) {
    var disX = 0,
      disY = 0,
      area,
      contains = body || element.parentNode || document.body,
      isTouch = false,
      types = ['mousedown', 'mousemove', 'mouseup'],
      dragtouche,
      TranLeT = function (iT, iL, b) {
        if (isNaN(iT) || isNaN(iL)) return;
        if (!Tran) {
          var translate = element._translate.slice(0);
          if (b) translate = element._translate;
          translate[0] += iL;
          translate[1] += iT;
          if (!XZ) {
            if (translate[1] + element.offsetTop + element.offsetHeight > contains.offsetHeight) {
              translate[1] = contains.offsetHeight - (element.offsetTop + element.offsetHeight);
            } else if (translate[1] + element.offsetTop < 0) {
              translate[1] = -element.offsetTop;
            }
            if (translate[0] + element.offsetLeft + element.offsetWidth > contains.offsetWidth) {
              translate[0] = contains.offsetWidth - (element.offsetLeft + element.offsetWidth);
            } else if (translate[0] + element.offsetLeft < 0) {
              translate[0] = -element.offsetLeft;
            }
          }
          if (!isImp) element.style.transform = 'translate3d(' + translate[0] + 'px,' + translate[1] + 'px,0) scale(' + element._scale + ')';
          else element.style.setProperty('transform', 'translate3d(' + translate[0] + 'px,' + translate[1] + 'px,0) scale(' + element._scale + ')', 'important');
        } else {
          if (!XZ) {
            if (iT + area[1] + element.offsetHeight > contains.offsetHeight) {
              iT = contains.offsetHeight - (area[1] + element.offsetHeight);
            } else if (iT + area[1] < 0) {
              iT = -area[1];
            }
            if (iL + area[0] + element.offsetWidth > contains.offsetWidth) {
              iL = contains.offsetWidth - (area[0] + element.offsetWidth);
            } else if (iL + area[0] < 0) {
              iL = -area[0];
            }
          }
          if (!isImp)
            element.css({
              left: area[0] + iL + 'px',
              top: area[1] + iT + 'px',
            });
          else (element.style.setProperty('left', area[0] + iL + 'px', 'important'), element.style.setProperty('top', area[1] + iT + 'px', 'important'));
        }
      };
    ((element._scale = 1), (element.zooming = false), (element.style.touchAction = 'none'));
    if (!element._translate) element._translate = [0, 0];
    if (lib.zyile_common.isMobile()) types = ['touchstart', 'touchmove', 'touchend'];
    element['on' + types[0]] = (event) => {
      event.stopPropagation();
      if (element.classList.contains('dialog')) {
        if (element.classList.contains('fixed') || element.classList.contains('popped')) return void 0;
        if (event.target.finished) return void 0;
        if (lib.zyile_common.isMobile()) if (event.touches.length <= 1) return undefined;
      } else if (event.target.finished || (element.content && element.content.includes(event.target))) return void 0;
      if (event.touches && event.touches[0]) event = event.touches[0];
      ((isTouch = true), (area = [element.offsetLeft, element.offsetTop]));
      disX = event.clientX / game.documentZoom;
      disY = event.clientY / game.documentZoom;
      document.addEventListener(types[1], windowmousemove, true);
      document.addEventListener(types[2], windowmouseup, true);
      element['on' + types[2]] = windowmouseup;
      element.dispatchEvent(new Event('zyile_move_Stat'));
    };
    var windowmousemove = function (event) {
      if (!isTouch) return false;
      event.preventDefault();
      event.stopPropagation();
      var event = event || window.event;
      if (event.touches && event.touches[0]) ((event = event.touches[0]), (dragtouche = event));
      var iL = event.clientX / game.documentZoom - disX;
      var iT = event.clientY / game.documentZoom - disY;
      TranLeT(iT, iL);
      element.dispatchEvent(new Event('zyile_moving'));
      return false;
    };
    var windowmouseup = (event) => {
      if (!isTouch) return void 0;
      event.stopPropagation();
      event.preventDefault();
      document.removeEventListener(types[1], windowmousemove);
      document.removeEventListener(types[2], windowmouseup);
      element['on' + types[2]] = null;
      isTouch = false;
      if (dragtouche) event = dragtouche;
      var iL = event.clientX / game.documentZoom - disX;
      var iT = event.clientY / game.documentZoom - disY;
      TranLeT(iT, iL, true);
      dragtouche = null;
      var iiT = Math.abs(iL),
        iiL = Math.abs(iT);
      if ((iiT < 10 && iiL < 10) || (isNaN(iiT) && isNaN(iiL))) element.dispatchEvent(new Event('endDang'));
      element.dispatchEvent(new Event('moveStop'));
    };
    element.addEventListener('ohhhhhhhhhhhhhhhhhhhhhhh click', function (event) {
      //作废
      if (event.targetTouches && event.targetTouches.length > 1) return false;
      if (!this._doubleClicking) {
        this._doubleClicking = true;
        setTimeout(function () {
          event.stopPropagation();
          element._doubleClicking = false;
        }, 300);
        return;
      }
      var scaleFactor = 1;
      if (element.zooming === false) {
        element.zooming = true;
      } else {
        element.zooming = false;
        scaleFactor = -scaleFactor;
      }
      element.style.transition = '0.3s';
      setTimeout(function () {
        element.style.transition = 'none';
      }, 300);
      element._scale += scaleFactor;
      var translate = element._translate.slice(0);
      element.style.transform = 'translate3d(' + translate[0] + 'px,' + translate[1] + 'px,0) scale(' + element._scale + ')';
    });
  };
};
