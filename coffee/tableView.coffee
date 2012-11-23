class tableView
  constructor: () ->
    table = Ti.UI.createTableView
      backgroundColor:'#ededed'
      separatorColor: '#999'
      zIndex:2
      width:250
      height:150
      left:30
      top:0


    # tableViewに表示する文字列の準備
    lists = ["きのこを食べた！", "フラワーを食べた！", "ノコノコに当たった！"]

    rows = []


    for labelName in lists

      row = Ti.UI.createTableViewRow
          width:250
          opacity:0.8
          backgroundColor:'#222'
          selectedBackgroundColor:'#59BB0C'
          borderColor:'#ededed'
          height:50
      
      textLabel = Ti.UI.createLabel
        width:250
        height:50
        top:0
        left:0
        wordWrap:true
        color:'#fff'
        font:
          fontSize:24
          fontWeight:'bold'
        text: labelName
        
      row.add textLabel
      row.className = "label"
      rows.push row

    table.setData rows

    table.addEventListener('click',(e) ->
      controller.action(e.index)
    )
          
    return table
    
module.exports = tableView      