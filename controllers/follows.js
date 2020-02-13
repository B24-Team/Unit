const models = require("../models");

function follow(req, res) {
  models.Follow.create({followed_id:req.body.followed_id,follower_id:req.body.follower_id})
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
  models.Follow.destroy({where:{followed_id:req.body.followed_id,follower_id:req.body.follower_id}})
    .then(data => {
      return res.json("Deleted");
    })
    .catch(err => {
      if (err) {
        return res.json(err);
      }
    });
}

function getfollowers(req, res) {
  models.Follow.findAll({where:{followed_id:req.body.followed_id}})
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      if (err) {
        return res.json(err);
      }
    });
}

function getInfoOfFollowers(req, res) {
  models.Follow.findAll({
        include: [
    {
    model: models.User,
    as: 'user',
    attributes: {exclude:['password']}
    }]})
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      if (err) {
        return res.json(err);
      }
    });
}


function getfollowingList(req,res) {
  models.Follow.findAll()
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      if (err) {
        return res.json(err);
      }
    });
}

module.exports.create = follow;
module.exports.delete = unfollow;
module.exports.getfollowingList = getfollowingList;
module.exports.getfollowers = getfollowers;
module.exports.getInfoOfFollowers = getInfoOfFollowers;
