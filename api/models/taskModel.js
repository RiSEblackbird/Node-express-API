var mongoose = require("mongoose");
var Schema = mongose.Schema;

var TaskSchema = new Schema({
  neme: {
    type: String,
    required: "新しいタスク名を入力"
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Task", TaskSchema);