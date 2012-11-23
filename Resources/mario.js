var Mario;

Mario = (function() {

  function Mario() {
    this.EVENT_EAT_MUSHROOM = 0;
    this.EVENT_EAT_FLOWER = 1;
    this.EVENT_DAMAGE = 2;
    this.state = new defaultMario();
  }

  Mario.prototype.sayState = function() {
    return this.state.sayState();
  };

  Mario.prototype.action = function(event) {
    if (this.EVENT_EAT_MUSHROOM === event) {
      return this.state = this.state.eatMushroom();
    } else if (this.EVENT_EAT_FLOWER === event) {
      return this.state = this.state.eatFlower();
    } else if (this.EVENT_DAMAGE === event) {
      return this.state = this.state.damage();
    } else {
      return console.log("ここはありえなーいｗ");
    }
  };

  Mario.prototype.adventures = function() {
    var event, gameevent, _i, _len, _results;
    console.log("テレッテッテレテッ");
    this.sayState();
    gameevent = [0, 1, 1, 1, 1, 2, 2, 2];
    _results = [];
    for (_i = 0, _len = gameevent.length; _i < _len; _i++) {
      event = gameevent[_i];
      if (this.EVENT_EAT_MUSHROOM === event) {
        _results.push(this.state = this.state.eatMushroom());
      } else if (this.EVENT_EAT_FLOWER === event) {
        _results.push(this.state = this.state.eatFlower());
      } else if (this.EVENT_DAMAGE === event) {
        _results.push(this.state = this.state.damage());
      } else {
        _results.push(console.log("ここはありえなーいｗ"));
      }
    }
    return _results;
  };

  return Mario;

})();

module.exports = Mario;
