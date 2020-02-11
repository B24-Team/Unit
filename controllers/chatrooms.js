const models = require("../models");

create =  (req, res, next) => {
    models.Chatroom.findOne({where:{ User_id:req.params.id} ,include: [
        {
        model: models.User,
        as: 'user',
        attributes: {exclude:['password']}
    }]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(err);
      });
  };
  
  io.sockets.on("connection", socket => {
    socket.on("join", data => {
      socket.join(data.room);
      models.Chatroom.find({})
  
        .then(rooms => {
          count = 0;
          rooms.forEach(room => {
            if (room.name == data.room) {
              count++;
            }
          });
          if (count == 0) {
            models.Chatroom.create({ name: data.room, messages: [] });
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
      models.Chatroom.update(
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