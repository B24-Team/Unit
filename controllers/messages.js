// const models = require("../models");


// create =  (req, res) => {
//     let {  message} = req.body;
//     let conversation_id = req.params.conId
//     let sender_id= req.params.id;
//       models.Message.create({message,conversation_id,sender_id})
//       .then(data => {
//         if (data) {
//           return res.send(data);
//         }
//       })
//       .catch(err => {
//         if (err) {
//             return res.send(err);
//         }
//       });
//   }

  
// find =  (req, res) => {
//     let {id} = req.body;
    
//       models.Message.findByPk({id})
//       .then(data => {
//         if (data) {
//           return res.send(data);
//         }
//       })
//       .catch(err => {
//         if (err) {
//           return res.send(err);
//         }
//       });
//   }
  
// update =  (req, res) => {
//     let {  message} = req.body;
//     let conversation_id = req.params.conId
//     let sender_id= req.params.id;
//       models.Message.update({message},{where:{sender_id:sender_id}})
//       .then(data => {
//         if (data) {
//           return res.send(data);
//         }
//       })
//       .catch(err => {
//         if (err) {
//           return res.send(err);
//         }
//       });
//   }
  
// remove =  (req, res) => {
//     let {  message} = req.body;
//     let conversation_id = req.params.conId
//     let sender_id= req.params.id;
//       models.Message.destroy({message,conversation_id,sender_id})
//       .then(data => {
//         if (data) {
//           return res.send(data);
//         }
//       })
//       .catch(err => {
//         if (err) {
//           return res.send(err);
//         }
//       });
//   }

//   module.exports.create = create;
//   module.exports.find = find;
//   module.exports.remove = remove;
//   module.exports.update = update;