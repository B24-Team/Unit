const Post = require("./../../../controllers/posts.js");

const IncomingForm = require("formidable").IncomingForm;
const path = require("path");
const uniqueId = require("uuid");

/**
 * @param{req, res} createPost
 * @returns {object}
 * this function will recive the params and send it to the controller
 */

function createPost(req, res) {
  const form = new IncomingForm();
  var user_id;
  var post;
  var link;
  var type;
  form.parse(req, function(err, fields, files) {
    user_id = fields.user_id;
    post = fields.post_text;
    type = fields.type.split("/")[0];
    if (err) {
      res.send(err);
    }
  });

  form.on("fileBegin", function(name, file) {
    var id = uniqueId();
    file.path = "folders/uploaded/" + id + "." + file.name.split(".")[1];
    link = id + "." + file.name.split(".")[1];
  });

  form.on("end", (err, data) => {
    var postObj = { post: post, link: link, user_id: user_id, type: type };
    Post.create(postObj)
      .then(data => {
        if (data) {
          Post.getAllPosts()
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.send(err);
            });
        }
      })
      .catch(err => {
        if (err) {
          console.error(err);
        }
      });
  });
}

/**
 * @param{req, res} findPost
 * @returns {array}
 * this function will recive the params and send it to the controller
 */

function findPost(req, res) {
  let { user_id } = req.body;
  Post.find(user_id)
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
}

/**
 * @param{req, res} updatePost
 * @returns {array}
 * this function will recive the params and send it to the controller
 */

function updatePost(req, res) {
  let { post, user_id } = req.body;
  let id = req.params.id;
  Post.update(post, id, user_id)
    .then(data => {
      if (data) {
        return res.send(data);
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
}

/**
 * @param{req, res} deletePost
 * @returns {array}
 * this function will recive the params and send it to the controller
 */

function deletePost(req, res) {
  var { user_id, id } = req.body;
  Post.delete(id, user_id)
    .then(data => {
      if (data) {
        return res.json("Deleted");
      }
    })
    .catch(err => {
      if (err) {
        console.error(err);
      }
    });
}

/**
 * @param{req, res} getAllPosts
 * @returns {array}
 * this function will recive the params and send it to the controller
 */

function getAllPosts(req, res) {
  Post.getAllPosts()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
}

module.exports.create = createPost;
module.exports.find = findPost;
module.exports.delete = deletePost;
module.exports.update = updatePost;
module.exports.getAllPosts = getAllPosts;
