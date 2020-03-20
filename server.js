var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000, // PORT指定
  mongoose = require("mongoose"),
  Task = require("./api/models/taskModel"), // 作成したTask Modelの読み込み
  bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.json());

var routes = require("./api/routes/taskRoutes"); // Routeのインポート
routes(app); // appにRouteを設定

app.listen(port); // appを特定のportでlistenさせる。

console.log("todo list RESTful API server started on: " + port);