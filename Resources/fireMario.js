var fireMario;

fireMario = (function() {

  function fireMario() {
    var stateLabel;
    stateLabel = "ファイヤーマリオになったよ！";
    console.log(stateLabel);
    controller.refreshLabel(stateLabel);
  }

  fireMario.prototype.eatMushroom = function() {
    var stateLabel;
    stateLabel = "ファイヤーマリオになったよ！";
    controller.refreshLabel(stateLabel);
    return new fireMario();
  };

  fireMario.prototype.eatFlower = function() {
    var stateLabel;
    stateLabel = "ファイヤーマリオになったよ！";
    controller.refreshLabel(stateLabel);
    return new fireMario();
  };

  fireMario.prototype.damage = function() {
    var stateLabel;
    stateLabel = '大きいマリオになった！';
    controller.refreshLabel(stateLabel);
    return new bigMario();
  };

  fireMario.prototype.sayState = function() {
    return console.log(stateLabel);
  };

  return fireMario;

})();

module.exports = fireMario;
