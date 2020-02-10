const models = require("../models");

create =  (req, res) => {

    models.Conversation.create({title:req.body.title,creator_id : req.params.id})
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
  
    models.Conversation.findOne({ where:{title: req.body.title}})
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

  findAll = (req, res) => {
  
    models.Conversation.findAll({ where:{creator_id : req.params.id}})
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

update =  (req, res) => {
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
          return res.send(err);
        }
      });
  }

remove = (req, res) => {
    let { title} = req.body;
    let {creator_id} = req.params.id
    models.Conversation.destroy({title : req.body.title},{where:{creator_id:req.params.id}})
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