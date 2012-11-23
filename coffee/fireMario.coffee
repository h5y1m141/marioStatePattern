class fireMario
  constructor:() ->
    stateLabel = "ファイヤーマリオになったよ！"  
    console.log stateLabel
    controller.refreshLabel(stateLabel)
  eatMushroom:() ->
    stateLabel = "ファイヤーマリオになったよ！"  
    controller.refreshLabel(stateLabel)
    return new fireMario()
    
  eatFlower:()->
    stateLabel = "ファイヤーマリオになったよ！"  
    controller.refreshLabel(stateLabel)
    return new fireMario()
    
  damage:()->
    stateLabel = '大きいマリオになった！'
    controller.refreshLabel(stateLabel)
    return new bigMario()
    
  sayState:()->
    console.log stateLabel
      
module.exports = fireMario    