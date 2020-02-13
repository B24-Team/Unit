const mongoose = require("mongoose");
let db = mongoose
  .connect("mongodb://localhost:27017/myapp", {
    useNewUrlParser: true,
    useMongoClient: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("created"))
  .catch(err => console.log(err));
  
module.exports = db;
