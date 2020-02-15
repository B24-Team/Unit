const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
var Sequelize = require('sequelize');
const models = require('./models');
const http = require("http");
const socketIO = require("socket.io");
const isAuth = require("./server/validation/tokenValidation");
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



const Post = require('./server/routes/api/post.js');
const Follow = require('./server/routes/api/follow.js');
const User = require('./server/routes/api/user.js');

const server = http.Server(app);
const io = socketIO(server);


app.get("/auth", isAuth, (req, res) => {
  console.log(req.cookies);
  res.json({
    message: "all good"
  });
});



const port = process.env.PORT || 5000;




const chatRooms = require("./mogooseModels/chatRoom");
app.get("/chatroom/:room", (req, res, next) => {
  console.log(chatRooms.find);
  let room = req.params.room;
  chatRooms
    .find({ name: room })
    .then(chatroom => {
      console.log(chatroom);

      res.json(chatroom[0].messages);
    })
    .catch(err => {
      console.log(err);
    });
});

io.sockets.on("connection", socket => {
  socket.on("join", data => {
    socket.join(data.room);
    console.log(chatRooms.find);
    chatRooms
      .find({})

      .then(rooms => {
        count = 0;
        rooms.forEach(room => {
          if (room.name == data.room) {
            count++;
          }
        });
        if (count == 0) {
          chatRooms.create({ name: data.room, messages: [] });
        }
      })
      .catch(err => console.log(err));
  });
  socket.on("message", data => {
    console.log(data);
    io.in(data.room).emit("new message", {
      user: data.user,
      message: data.message
    });
    chatRooms.update(
      { name: data.room },
      { $push: { messages: { user: data.user, message: data.message } } },
      (err, res) => {
        if (err) {
          console.log(err);
          return false;
        }
        console.log("Document updated");
      }
    );
  });
  socket.on("typing", data => {
    socket.broadcast
      .in(data.room)
      .emit("typing", { data: data, isTyping: true });
  });
});

//
app.use("/follow", Follow);
app.use('/posts', Post);
app.use('', User);


app.delete('/deleteUser/:id',async (req,res) =>{
  try {
      const a = await models.User.destroy({where:{id:req.params.id}})
      res.json({a})
  } catch (error) {
      return error.message
  }
  })

server.listen(port, () => console.log(`Unit :) app listening on port ${port}!`));
