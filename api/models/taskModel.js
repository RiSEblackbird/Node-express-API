var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: "新しいタスク名を入力"
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tasks", TaskSchema);