const models = require("../models");


/**
 * @param{followed_id, follower_id} follow
 * @returns {string}
 * this function will recive the params and send it to the database
 */

function follow(req, res) {
  models.Follow.create({followed_id:req.body.followed_id,follower_id:req.body.follower_id})
    .then(data => {
      if (data) {
        return res.send("Its working");
      }
    })
    .catch(err => {
      if (err) {
        return res.json(err);
      }
    });
}



/**
 * @param{followed_id, follower_id} unfollow
 * @returns {string}
 * this function will recive the params and send it to the database
 */

function unfollow(req, res) {
  models.Follow.destroy({where:{followed_id:req.body.followed_id,follower_id:req.body.follower_id}})
    .then(data => {
      return res.send("Deleted");
    })
    .catch(err => {
      if (err) {
        return res.json(err);
      }
    });
}

/**
 * @param{followed_id} getfollowers
 * @returns {string}
 * this function will recive the params and send it to the database
 */

function getfollowers(req, res) {
  models.Follow.findAll({where:{followed_id:req.body.followed_id}})
    .then(data => {
      return res.send(data);
    })
    .catch(err => {
      if (err) {
        return res.json(err);
      }
    });
}

/**
 * @param{} getInfoOfFollowers
 * @returns {string}
 * this function will recive the params and send it to the database
 */

function getInfoOfFollowers(req, res) {
  models.Follow.findAll({
        include: [
    {
    model: models.User,
    as: 'user',
    attributes: {exclude:['password']}
    }]})
    .then(data => {
      return res.send(data);
    })
    .catch(err => {
      if (err) {
        return res.json(err);
      }
    });
}

/**
 * @param{} getfollowingList
 * @returns {string}
 * this function will recive the params and send it to the database
 */

function getfollowingList(req,res) {
  models.Follow.findAll()
    .then(data => {
      return res.send(data);
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
