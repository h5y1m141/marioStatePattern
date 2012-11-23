class defaultMario
  constructor:() ->
    stateLabel = '普通のマリオですー'  
    console.log stateLabel
    
  eatMushroom:() ->
    return new bigMario()
    
  eatFlower:()->
    console.log "花を食べた"
    return new bigMario()
    
  damage:()->
    console.log 'game over!!!'
    controller.refreshLabel('game over!!!')
    
  sayState:()->
    console.log '普通のマリオですー'


module.exports = defaultMario    