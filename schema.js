const mongoose = require("mongoose");

const todoListSchema = new mongoose.Schema({
  task: { type: String, required: true ,unique:true},
  description: { type: String, required: true , unique:true },
  deadline: { type: Date, required: true ,unique:true},
  isCompleted: { type: Boolean, required: true },
  priority: { type: Number,unique:true },
});
module.exports = mongoose.model("User", todoListSchema);
