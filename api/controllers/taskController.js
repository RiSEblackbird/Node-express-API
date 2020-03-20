var mongoose = require("mongoose"),
  Task = mongoose.model("Tasks");

  // all_task : 全タスクの取得
exports.all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

// create_task : 新しいタスクの作成
exports.create_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err) res.send(err);
    res.join(task);
  });
};

// load_task : 特定のタスクの取得
exports.load_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err) res.send(err);
    res.json(tsk);

  });
};

// update_task : 特定のタスクの更新
exports.update_task = function(req, res) {
  Task.findOneAndUpdate(
    { _id: req.params.taskId},
    req.body,
    { new: true },
    function(err, task) {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

// delete_task : 特定のタスクを削除
exports.delete_task = function(req, res) {
  Task.remove(
    {
      _id: req.params.taskId
    },
    function(err, task) {
      if (err) res.send(err);
      res.json({ message: "Task successfully deleted" });
    }    
  );
};