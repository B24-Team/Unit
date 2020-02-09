const models = require("../models");

function follow(req, res) {
  models.follow.create({followed_id:req.body.followed_id,follower_id:req.body.follower_id})
    .then(data => {
      if (data) {
        return res.json("Its working");
      }
    })
    .catch(err => {
      if (err) {
        return res.json(err);
      }
    });
}

function unfollow(req, res) {
  models.follow.destroy({where:{followed_id:req.body.followed_id,follower_id:req.body.follower_id}})
    .then(data => {
      return res.json("Its working");
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
}

function getfollowers(req, res) {
  models.follow.find({where:{followed_id:req.body.followed_id}})
    .then(data => {
      return res.send(data.rows);
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
}

function getInfoOfFollowers(req, res) {
  models.follow.findAll({where:{follower_id:user_id},include: {
    model: User,
  }})
    .then(data => {
      return res.send(data.rows);
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
}


module.exports.create = follow;
module.exports.delete = unfollow;
module.exports.getfollowers = getfollowers;
module.exports.getInfoOfFollowers = getInfoOfFollowers;
