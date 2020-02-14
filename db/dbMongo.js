const mongoose = require("mongoose");
let db = mongoose
  .connect("mongodb+srv://Malik:passpass@cluster0-he8wm.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useMongoClient: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("created"))
  .catch(err => console.log(err));
//let db = mongoose.connection;
// db.once("open", () => {
//   console.log("database created successfully");
// });
// db.on("error", () => {
//   console.log("unable to connect to database");
// });
module.exports = db;
