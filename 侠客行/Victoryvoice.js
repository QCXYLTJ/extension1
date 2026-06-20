function VictoryVoice() {
  let audio = new Audio('extension/侠客行/VictoryVoice/' + localStorage.getItem('VictoryVoice') + '.mp3');
  audio.play();
}
function createProxy(fn, VictoryVoice) {
  return new Proxy(fn, {
    apply(target, thisArg, args) {
      VictoryVoice();
      return target.apply(thisArg, args);
    }
  });
}