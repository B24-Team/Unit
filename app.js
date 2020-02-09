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


app.post("/chat", (req, res) => {
  let { phone,  email, first_name, last_name, middle_name, password, is_active} = req.body;
  models.User.create({phone,  email,first_name, last_name, middle_name, password, is_active})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})


app.get("/chat", (req, res) => {
  let {first_name, last_name} = req.body;
  models.User.findOne({
    first_name: first_name,
    last_name: last_name
  })
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})


app.patch("/:id/chat", (req, res) => {
  let { phone,  email, first_name, last_name, middle_name, password, is_active} = req.body;
  models.User.update({ phone:phone,password:password, is_active: is_active}, { where: { id: req.params.id }})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})


app.delete("/:id/chat", (req, res) => {
  let id = req.params.id
  models.User.destroy({
    where: { id: id }
  })
  .then(deletedOwner => {
    res.json("Done");
  })
})

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

app.post("/:id/chat/:chatId/participant", (req, res) => {
  let { users_id} = req.body;
  let conversation_id= req.params.id;
  models.Participant.create({conversation_id,users_id})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})

app.get("/:id/chat/:chatId/participant", (req, res) => {
  let chatId = req.body.chatId;

  models.Participant.find({id},{where:{ conversation_id: chatId }})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})
app.patch("/:id/chat/:chatId/participant", (req, res) => {
  let {  users_id} = req.body;
  let conversation_id= req.params.id;
  models.Participant.update({conversation_id,users_id})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})
// app.delete("/:id/chat/:chatId/participant", (req, res) => {
//   let conversation_id= req.params.id;
//   models.Participant.destroy({conversation_id})
//     .then(data => {
//       if (data) {
//         return res.send(data);
//       }
//     })
//     .catch(err => {
//       if (err) {
//         console.error(err);
//       }
//     });
// })
app.post("/:id/chat/", (req, res) => {
  let { title} = req.body;
  let {creator_id} = req.params.id
  models.Conversation.create({title,creator_id})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})

app.get("/:id/chat/", (req, res) => {
  let { title } = req.body;

  models.Conversation.findOne({ title })
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})
app.patch("/:id/chat/", (req, res) => {
  let { title} = req.body;
  let {creator_id} = req.params.id
  models.Conversation.update({title},{where:{creator_id:creator_id}})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})
app.delete("/:id/chat/", (req, res) => {
  let { title} = req.body;
  let {creator_id} = req.params.id
  models.Conversation.destroy({title},{where:{creator_id:creator_id}})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})
app.post("/:id/chat/:chatId/message", (req, res) => {
  let {  message} = req.body;
  let conversation_id = req.params.conId
  let sender_id= req.params.id;
    models.Message.create({message,conversation_id,sender_id})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})


// app.post("/:id/chat/:chatId/message", (req, res) => {
//   let {id} = req.body;
  
//     models.Message.findByPk({id})
//     .then(data => {
//       if (data) {
//         return res.send(data);
//       }
//     })
//     .catch(err => {
//       if (err) {
//         console.error(err);
//       }
//     });
// })

app.patch("/:id/chat/:chatId/message", (req, res) => {
  let {  message} = req.body;
  let conversation_id = req.params.conId
  let sender_id= req.params.id;
    models.Message.update({message},{where:{sender_id:sender_id}})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})

app.delete("/:id/chat/:chatId/message", (req, res) => {
  let {  message} = req.body;
  let conversation_id = req.params.conId
  let sender_id= req.params.id;
    models.Message.destroy({message,conversation_id,sender_id})
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
})

// // addUser({phone:"122121",first_name:"abdlrrrahman",password:"123456789",last_name:"abdlrrrahman",middle_name:"abdlrrrahman",is_active:false})

// var addUser = async (userInfo)=>{
//   // console.log(Object.keys(models))
//   console.log(models);
  
//   try {
//       const user = await models.User.create(userInfo)
//       console.log(user)
//   } catch (error) {
//       throw error
//   }
// }

// addUser({phone:122121,email:"aslksalcas@dscs.com",password:123456789,first_name:"abdlrrrahman",last_name:"abdlrrrahman",middle_name:"abdlrrrahman",is_active:true})


// let createCatWithProds = async(catObj, prodArr) => {
//   let catId = await Models.User.create({
//       phone: catObj.name,
//       first_name:catObj.description
//   }).then(cat => cat.id).catch(err => console.log(err));
//   await prodArr.map(pr => {
//       return models.Product.create({
//           sku: pr.sku,
//           name: pr.name,
//           pr: pr.price,
//           CategoryId:catId
//       }).catch(err => console.log(err))
//   });
// return;
// }

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
