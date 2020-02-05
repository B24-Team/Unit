const db = require("./db");
const mongoose = require("mongoose");
const messagesSchema = mongoose.Schema({
  text: String,
  from: String,
  to: String,
  createdAt: Date
});
const messagesModel = mongoose.model("messages", messagesSchema);
module.exports = messagesModel;
