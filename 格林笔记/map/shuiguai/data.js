window.gl_init = function (lib, game, ui, get, ai, _status) {
  var spinner = ui.create.div('.spinner', ui.window);
  spinner.onclick = function () {
    spinner.remove();
  };
  ui.create.div('.bounce1', spinner).innerHTML = '配';
  ui.create.div('.bounce2', spinner).innerHTML = '信';
  ui.create.div('.bounce3', spinner).innerHTML = '中';
  var directstart = localStorage.getItem(lib.configprefix + 'gldirectstart');
  if (directstart == 'shuiguai') {
    localStorage.removeItem(lib.configprefix + 'gldirectstart');
    lib.init.req('https://gitlab.com/nopower123/gelin/-/raw/main/online/switch.js', function () {
      eval(this.responseText);
      window.gl_switch(lib, game, ui, get, ai, _status);
      spinner.onclick();
      var link = localStorage.getItem(lib.configprefix + 'glonline');
      localStorage.removeItem(lib.configprefix + 'glonline');
      if (!lib.gl_switch[link]) {
        game.gl_createDailog('配信数据异常！');
        return;
      }
      window.xiangqv = lib.gl_switch[link];
      game.resume();
    }, function () {
      spinner.onclick();
      alert('连接失败');
    });
    return;
  }
  setTimeout(function () {
    lib.init.req('https://gitlab.com/nopower123/gelin/-/raw/main/online/switch.js', function () {
      eval(this.responseText);
      window.gl_switch(lib, game, ui, get, ai, _status);
      for (var i in lib.gl_switch.translate) {
        lib.translate[i] = lib.gl_switch.translate[i];
      }
      var list = lib.gl_switch.list.slice(0);
      list.push('cancel2');
      spinner.onclick();
      game.gl_createDailog('配信成功，请选择你要进行的活动', list, function (bool) {
        if (bool != 'cancel2') {
          if (!lib.gl_switch[bool]) {
            game.gl_createDailog('配信数据异常！');
            return;
          }
          window.xiangqv = lib.gl_switch[bool];
          game.resume();
        }
      });
    }, function () {
      spinner.onclick();
      alert('连接失败');
    });
  }, 1000);
};