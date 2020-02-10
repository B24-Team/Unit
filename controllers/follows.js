const models = require("../models");

function follow(req, res) {
  models.Follow.create({followed_id:req.body.followed_id,follower_id:req.body.follower_id})
    .then(data => {
      if (data) {
        return res.send("Its working");
      }
    })
    .catch(err => {
      if (err) {
        return res.send(err);
      }
    });
}

function unfollow(req, res) {
  models.Follow.destroy({where:{followed_id:req.body.followed_id,follower_id:req.body.follower_id}})
    .then(data => {
      return res.send("Deleted");
    })
    .catch(err => {
      if (err) {
        return res.send(err);
      }
    });
}

function getfollowers(req, res) {
  models.Follow.findOne({where:{followed_id:req.body.followed_id}})
    .then(data => {
      return res.send(data);
    })
    .catch(err => {
      if (err) {
        return res.send(err);
      }
    });
}

function getInfoOfFollowers(req, res) {
  models.Follow.findAll({where:{follower_id:user_id}})
    .then(data => {
      return res.send(data);
    })
    .catch(err => {
      if (err) {
        return res.send(err);
      }
    });
}


module.exports.create = follow;
module.exports.delete = unfollow;
module.exports.getfollowers = getfollowers;
module.exports.getInfoOfFollowers = getInfoOfFollowers;
