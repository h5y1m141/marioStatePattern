var tableView;

tableView = (function() {

  function tableView() {
    var labelName, lists, row, rows, table, textLabel, _i, _len;
    table = Ti.UI.createTableView({
      backgroundColor: '#ededed',
      separatorColor: '#999',
      zIndex: 2,
      width: 250,
      height: 150,
      left: 30,
      top: 0
    });
    lists = ["きのこを食べた！", "フラワーを食べた！", "ノコノコに当たった！"];
    rows = [];
    for (_i = 0, _len = lists.length; _i < _len; _i++) {
      labelName = lists[_i];
      row = Ti.UI.createTableViewRow({
        width: 250,
        opacity: 0.8,
        backgroundColor: '#222',
        selectedBackgroundColor: '#59BB0C',
        borderColor: '#ededed',
        height: 50
      });
      textLabel = Ti.UI.createLabel({
        width: 250,
        height: 50,
        top: 0,
        left: 0,
        wordWrap: true,
        color: '#fff',
        font: {
          fontSize: 24,
          fontWeight: 'bold'
        },
        text: labelName
      });
      row.add(textLabel);
      row.className = "label";
      rows.push(row);
    }
    table.setData(rows);
    table.addEventListener('click', function(e) {
      return controller.action(e.index);
    });
    return table;
  }

  return tableView;

})();

module.exports = tableView;
