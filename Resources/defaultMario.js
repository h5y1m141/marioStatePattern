var defaultMario;

defaultMario = (function() {

  function defaultMario() {
    var stateLabel;
    stateLabel = '普通のマリオですー';
    console.log(stateLabel);
  }

  defaultMario.prototype.eatMushroom = function() {
    return new bigMario();
  };

  defaultMario.prototype.eatFlower = function() {
    console.log("花を食べた");
    return new bigMario();
  };

  defaultMario.prototype.damage = function() {
    console.log('game over!!!');
    return controller.refreshLabel('game over!!!');
  };

  defaultMario.prototype.sayState = function() {
    return console.log('普通のマリオですー');
  };

  return defaultMario;

})();

module.exports = defaultMario;
