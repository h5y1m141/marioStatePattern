class Controller
  constructor: () ->
    Mario = require("mario")
    @game = new Mario()
    
  action:(event) ->
    @game.action(event)
    return true
    
  refreshLabel:(value) ->
    Ti.API.info value
    gamelabel.setText value

    
module.exports = Controller  