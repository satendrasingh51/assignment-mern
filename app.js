var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

var taskRoute = require("./routes/tasks");

var app = express();
// MongoDB Connection
// task-manage
mongoose.connect(
  "mongodb://localhost:27017/task-manage"
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected successfully");
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/tasks", taskRoute);

module.exports = app;
