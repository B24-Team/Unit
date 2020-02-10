const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
var Sequelize = require('sequelize');
const models = require('./models');

const Post = require('./server/routes/api/post.js');
const Follow = require('./server/routes/api/follow.js');
const User = require('./server/routes/api/user.js');
const Conversation = require('./server/routes/api/conversation.js');
const Message = require('./server/routes/api/message.js');
const Participant = require('./server/routes/api/participant.js');


app.use(
  cors({
    preflightContinue: true,
    credentials: true,
    origin: "http://localhost:4200"
  })
);
app.use(cookieParser());
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const port = process.env.PORT || 5000;



// const User = require("./server/routes/api/user");
// const Post = require("./server/routes/api/post.js");
// const Follow = require("./server/routes/api/follow.js");
// const path = require("path");
// const isAuth = require("./server/validation/tokenValidation");

// //////////////////// routes
// app.post("/auth", isAuth, (req, res) => {
//   res.json({
//     message: "all good"
//   });
// });

// // app.post("/getuser", User.find);
// app.post("/signup", User.signUp);
// app.post("/login", User.logIn);
// //app.get("/", User.enter);
// app.post("/logout", User.logOut);
// app.get("/refreshtoken", User.refreshToken);
// app.get("/uploads/:name", (req, res) => {
//   res.sendFile(path.resolve("folders/uploaded", req.params.name));
// });
// app.post("/posts/post", isAuth, Post.create);
// app.post("/posts/get", Post.find);
// app.patch("/posts/update/:id", isAuth, Post.update);
// app.delete("/posts/delete/:id", isAuth, Post.delete);
// app.get("/getAllPosts", Post.getAllPosts);
// //
// app.post("/follow/create", isAuth, Follow.create);
// app.post("/follow/delete", isAuth, Follow.delete);
// app.post("/follow/getfollowers", isAuth, Follow.getfollowers);
// const { Sequelize, Model, DataTypes } = require('sequelize');

// //
// app.get("/getAllUsers", User.getAll);
// app.post("/findUser", User.getUserByName);
// app.post("/findById", User.findById);
// app.post("/updatePhoto", User.UpdateProfilePhoto)


app.post("/:id/chat/user_contacts", (req, res) => {
  let {  first_name, last_name, contact_id} = req.body;
  let user_id= req.params.id;
  console.log(req.params.id)
  models.User_contact.create({ first_name, last_name, user_id, contact_id})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        return res.send(err);
      }
    });
})
app.get("/:id/chat/user_contacts", (req, res) => {
  let {  id } = req.params.id;

  models.User_contact.findAll({where: { user_id: id }})
    .then(data => {
      if (data) {
        return res.send(data);
      }
      else {
        return res.send("Add someone first");
      }
    })
    .catch(err => {
      if (err) {
        return res.send(err);
      }
    });
})
app.patch("/:id/chat/user_contacts", (req, res) => {
  let {  first_name, last_name} = req.body;
  let id= req.params.id;
  console.log(req.params.id)
  models.User_contact.update({ first_name, last_name},{where: { user_id: id }})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        return res.send(err);
      }
    });
})
app.delete("/:id/chat/user_contacts", (req, res) => {
  let {  first_name, last_name} = req.body;
  let id= req.params.id;
  console.log(req.params.id)
  models.User_contact.destroy({ first_name, last_name},{where: { user_id: id }})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        return res.send(err);
      }
    });
})


// let newCategory = {
//   name: "Fantasy", 
//   description:"Fantasy genre of the book"
// };
// let newProducts = [
//   {
//    sku: "nvw1",
//    name: "Neverwhere",
//    price: 10.99
//   },
//   {
//    sku: "nrl2",
//    name: "Northern Lights",
//    price: 8.99    
// }
// ];
// createCatWithProds(newCategory, newProducts)
// app.post("/getuser", User.find);
// app.post("/signup", User.signUp);
// app.post("/login", User.logIn);
// //app.get("/", User.enter);
// app.post("/logout", User.logOut);
// app.get("/refreshtoken", User.refreshToken);
// app.get("/uploads/:name", (req, res) => {
//   res.sendFile(path.resolve("folders/uploaded", req.params.name));
// });
// app.post("/posts/post", isAuth, Post.create);
// app.post("/posts/get", isAuth, Post.find);
// app.patch("/posts/update/:id", isAuth, Post.update);
// app.post("/posts/delete", isAuth, Post.delete);
// app.get("/getAllPosts", isAuth, Post.getAllPosts);
//
app.use("/follow", Follow);
app.use('/posts', Post);
app.use('', User);
app.use('/:id', Conversation);
app.use('/:id', Message);
app.use('/:id', Participant);

//
// app.get("/getAllUsers", isAuth, User.getAll);
// app.post("/findUser", isAuth, User.getUserByName);
// app.post("/findById/", isAuth, User.findById); // doesnt return password
// // app.post("/findByIdandUpdateUser", User.findByIdandUpdateUser); // returns password too
// app.post("/updatePhoto", isAuth, User.UpdateProfilePhoto);
// app.post("/updatepassword", isAuth, User.updatePass);
// app.post("/updateprofile", isAuth, User.updateProfile);


app.delete('/deleteUser/:id',async (req,res) =>{
  try {
      const a = await models.User.destroy({where:{id:req.params.id}})
      res.json({a})
  } catch (error) {
      return error.message
  }
  })

app.listen(port, () => console.log(`Unit :) app listening on port ${port}!`));
