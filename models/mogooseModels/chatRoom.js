const db = require("../../db/dbMongo");
const mongoose = require("mongoose");
let ChatRoomSchema = mongoose.Schema({
  name: String,
  messages: [],
  Date: Date
});
let ChatRoomModel = mongoose.model("chatrooms", ChatRoomSchema);
console.log("char room created");
module.exports = ChatRoomModel;
