// const models = require("../models");
// const http = require("http");
// const express = require("express");
// const app = express();
// const socketIO = require("socket.io");

// const server = http.Server(app);
// const io = socketIO(server);

// create =  (req, res, next) => {
//     models.Chatroom.findOne(where:{ User_id:req.params.id, name:req.body.name,message:req.body.message})
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.send(err);
//       });
//   };
  
//   io.sockets.on("connection", socket => {
//     socket.on("join", data => {
//       socket.join(data.room);
//       models.Chatroom.findAll({})
  
//         .then(rooms => {
//           count = 0;
//           rooms.forEach(room => {
//             if (room.name == data.room) {
//               count++;
//             }
//           });
//           if (count == 0) {
//             models.Chatroom.create({ name: data.room });
//           }
//         })
//         .catch(err => console.log(err));
//     });
//     socket.on("message", data => {
//       console.log(data);
//       io.in(data.room).emit("new message", {
//         user: data.user,
//         message: data.message
//       });
//       models.Chatroom.update({ name: data.room, message: data.message, User_id: req.params.id}).then(data => {
//         console.log("Document updated");
//         res.send(data);
//       })
//       .catch(err => {
//         res.send(err);
//       });
    
      
//     });
//     socket.on("typing", data => {
//       socket.broadcast
//         .in(data.room)
//         .emit("typing", { data: data, isTyping: true });
//     });
//   });

//   module.exports.create = create;