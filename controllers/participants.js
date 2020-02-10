const models = require("../models");


crete =  (req, res) => {
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
          return res.send(err);
        }
      });
  }
  
find =  (req, res) => {
    let chatId = req.body.chatId;
  
    models.Participant.findOne({id},{where:{ conversation_id: chatId }})
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
  }

  
  findAll =  (req, res) => {
    let chatId = req.body.chatId;
  
    models.Participant.findAll({where:{ conversation_id: chatId }})
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
  }

 update = (req, res) => {
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
          return res.send(err);
        }
      });
  }

  remove = (req, res) => {
    let conversation_id= req.params.id;
    models.Participant.destroy({conversation_id})
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
  }
  
  module.exports.create = create;
  module.exports.find = find;
  module.exports.findAll = findAll;
  module.exports.remove = remove;
  module.exports.update = update;