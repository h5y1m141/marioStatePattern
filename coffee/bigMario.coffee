class bigMario
  constructor:() ->
    stateLabel = '大きいマリオになった！' 
    console.log stateLabel
    controller.refreshLabel(stateLabel)
  eatMushroom:() ->
    stateLabel = '大きいマリオになった！' 
    controller.refreshLabel(stateLabel)
    return new bigMario()
    
  eatFlower:()->
    stateLabel = "ファイヤーマリオになったよ！"  
    controller.refreshLabel(stateLabel)
    return new fireMario()
    
  damage:()->
    stateLabel = '普通のマリオですー'
    controller.refreshLabel(stateLabel)
    return new defaultMario()
    
  sayState:()->
    console.log stateLabel

module.exports = bigMario
    