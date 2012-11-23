var Controller, bigMario, controller, defaultMario, fireMario, gamelabel, table, tableView, win;

defaultMario = require("defaultMario");

bigMario = require("bigMario");

fireMario = require("fireMario");

tableView = require("tableView");

Controller = require('controller');

controller = new Controller();

win = Ti.UI.createWindow({
  title: "マリオに学ぶイベント管理方法",
  backgroundColor: "#fff"
});

gamelabel = Ti.UI.createLabel({
  text: "テレッテッテレテッ",
  width: 320,
  height: 200,
  top: 200,
  left: 50
});

table = new tableView();

win.add(table);

win.add(gamelabel);

win.open();
