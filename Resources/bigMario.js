var bigMario;

bigMario = (function() {

  function bigMario() {
    var stateLabel;
    stateLabel = '大きいマリオになった！';
    console.log(stateLabel);
    controller.refreshLabel(stateLabel);
  }

  bigMario.prototype.eatMushroom = function() {
    var stateLabel;
    stateLabel = '大きいマリオになった！';
    controller.refreshLabel(stateLabel);
    return new bigMario();
  };

  bigMario.prototype.eatFlower = function() {
    var stateLabel;
    stateLabel = "ファイヤーマリオになったよ！";
    controller.refreshLabel(stateLabel);
    return new fireMario();
  };

  bigMario.prototype.damage = function() {
    var stateLabel;
    stateLabel = '普通のマリオですー';
    controller.refreshLabel(stateLabel);
    return new defaultMario();
  };

  bigMario.prototype.sayState = function() {
    return console.log(stateLabel);
  };

  return bigMario;

})();

module.exports = bigMario;
