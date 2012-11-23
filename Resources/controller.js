var Controller;

Controller = (function() {

  function Controller() {
    var Mario;
    Mario = require("mario");
    this.game = new Mario();
  }

  Controller.prototype.action = function(event) {
    this.game.action(event);
    return true;
  };

  Controller.prototype.refreshLabel = function(value) {
    Ti.API.info(value);
    return gamelabel.setText(value);
  };

  return Controller;

})();

module.exports = Controller;
