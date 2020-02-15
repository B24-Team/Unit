const models = require("../models");
const IncomingForm = require('formidable').IncomingForm;
const path = require('path')
const uniqueId = require('uuid'); 

/**
 * @param{user_id, post, link, type} createPost
 * @returns {string}
 * this function will recive the params and send it to the database
 */

function createPost(req, res) {
    const form = new IncomingForm();
    var user_id;
    var post;
    var link;
    var type;
    form.parse(req, function (err, fields, files) {
        user_id = fields.user_id
        post = fields.post_text
        type = fields.type.split("/")[0];

        if (err) {
            res.send(err)
        }
    });

    form.on('fileBegin', function (name, file) {
        var id = uniqueId()
        file.path = 'folders/uploaded/' + id + "." + file.name.split(".")[1];
        // console.log(path.join(__dirname, "/../../../../Unit/folders/uploaded/", id + "." + file.name.split(".")[1]))
        link = id + '.' + file.name.split('.')[1];
    });
   
    form.on('end', (err, data) => {
        var postObj = {post : post, link : link, user_id : user_id, type: type}
    models.Post.create(postObj).then(data => {
        if (data) {
            models.Post.findAll({where:{user_id : user_id},
                include: [
                    {
                    model: models.User,
                    as: 'user',
                    attributes: {exclude:['password']}
                }]
                })
                .then(data => {
                    if (data) {
                res.send(data)}
                    })
                    .catch(err => {
                        if (err) {
                            res.send(err)
                        }
                    })
        }
    })
    .catch(err => {
        if (err) {
            res.send(err)
        }
    })
    })
}

/**
 * @param{user_id} findPost
 * @returns {string}
 * this function will recive the params and send it to the database
 */

function  findPost(req, res) {
    let  user_id  = req.body.user_id
    models.Post.findAll({
         where:{user_id}
      }).then(data => {
        if (data) {
            return res.json(data)
        } 
    })
        .catch(err => {
            
                return res.send(err)
            
        })
}

/**
 * @param{user_id} findAll
 * @returns {string}
 * this function will recive the params and send it to the database
 */

function  findAll(req, res) {
    models.Post.findAll({
        include: [
            {
            model: models.User,
            as: 'user',
            attributes: {exclude:['password']}
        }]}).then(data => {
        if (data) {
            return res.send(data)
        } 
    })
        .catch(err => {
            
                return res.send(err)
            
        })
}

/**
 * @param{post, user_id} findAll
 * @returns {string}
 * this function will recive the params and send it to the database
 */

function updatePost(req, res) {
    let { post , user_id } = req.body;
    models.Post.update({post : post},{where:{id:req.body.id,user_id:user_id}}).then(data => {
        if (data) {
            return res.send('Updated')
        } 
    })
        .catch(err => {
            if (err) {
                return res.send(err)
            }
        })
}

/**
 * @param{id, user_id} deletePost
 * @returns {string}
 * this function will recive the params and send it to the database
 */

function deletePost(req, res) {
    models.Post.destroy({where:{id:req.body.id,user_id:req.body.user_id}}).then(data => {
        if (data) {
            return res.send('Deleted');
        }
    })
        .catch(err => {
            if (err) {
                console.error(err)
            }
        })
}

module.exports.create = createPost;
module.exports.find = findPost;
module.exports.findAll = findAll;
module.exports.remove = deletePost;
module.exports.update = updatePost;