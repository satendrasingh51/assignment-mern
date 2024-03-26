const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
    category: { type: String },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("task", taskSchema);

module.exports = Task;
