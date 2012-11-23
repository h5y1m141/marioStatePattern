class Mario
  constructor:() ->
    # きのこを食べる
    @EVENT_EAT_MUSHROOM = 0;
    # フラワーを食べる
    @EVENT_EAT_FLOWER = 1;
    # ノコノコニ当たる
    @EVENT_DAMAGE = 2;
    # 状態を表す
    @state = new defaultMario();

  sayState:() ->
    return @state.sayState()
    
  action:(event) ->
    if @EVENT_EAT_MUSHROOM is event
      @state = @state.eatMushroom()
    else if @EVENT_EAT_FLOWER is event
      @state = @state.eatFlower()
    else if @EVENT_DAMAGE is event
      @state = @state.damage()
    else
      console.log "ここはありえなーいｗ"
    
    
  adventures:() ->
    console.log "テレッテッテレテッ"
    # 初期状態を言う
    @.sayState()
    gameevent = [0,1,1,1,1,2,2,2];

    for event in gameevent
      if @EVENT_EAT_MUSHROOM is event
        @state = @state.eatMushroom()
      else if @EVENT_EAT_FLOWER is event
        @state = @state.eatFlower()
      else if @EVENT_DAMAGE is event
        @state = @state.damage()
      else
        console.log "ここはありえなーいｗ"
   

module.exports = Mario    