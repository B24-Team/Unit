const Post = require("../models/posts");

/**
 * @param{post, link, user_id, type} createPost
 * @returns {string}
 * this function will recive the params and send it to the model
 */

function createPost(postObj) {
  var post = postObj.post;
  var link = postObj.link;
  var user_id = postObj.user_id;
  var type = postObj.type;
  return Post.create(post, link, user_id, type)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}

/**
 * @param{user_id} findPost
 * @returns {string}
 * this function will recive the params and send it to the model
 */

function findPost(user_id) {
  return Post.find(user_id)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      throw "post not Found";
    });
}

function getAllPosts() {
  return Post.getAllPosts()
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      throw new Error();
    });
}

function updatePost(post, id, user_id) {
  return Post.update(post, id, user_id)
    .then(data => {
      return "post was updated";
    })
    .catch(err => {
      throw "post not found";
    });
}

function deletePost(id, user_id) {
  return Post.delete(id, user_id)
    .then(data => {
      return "post was deleted";
    })
    .catch(err => {
      throw "post not found";
    });
}

module.exports.create = createPost;
module.exports.find = findPost;
module.exports.delete = deletePost;
module.exports.update = updatePost;
module.exports.getAllPosts = getAllPosts;
