const models = require("../models");
const IncomingForm = require('formidable').IncomingForm;
const path = require('path')
const uniqueId = require('uuid'); 

function createPost(req, res) {
    const form = new IncomingForm();
    var user_id;
    var post;
    var link;
    form.parse(req, function (err, fields, files) {
        user_id = fields.user_id
        post = fields.post_text

        if (err) {
            res.send(err)
        }
        res.end();
    });

    form.on('fileBegin', function (name, file) {
        var id = uniqueId()
        file.path = 'folders/uploaded/' + id + "." + file.name.split(".")[1];
        console.log(path.join(__dirname, "/../../../../Unit/folders/uploaded/", id + "." + file.name.split(".")[1]))
        link = path.join(__dirname, "/../../../../Unit/folders/uploaded/", id + "." + file.name.split(".")[1])
    });
   
    form.on('end', (err, data) => {
        var postObj = {post : post, link : link, user_id : user_id}
    models.Post.create(postObj).then(data => {
        if (data) {}
    })
    .catch(err => {
        if (err) {
            console.error(err)
        }
    })
    })
}

function  findPost(req, res) {
    let { user_id } = req.body
    models.Post.findAll({where:{user_id:user_id},include: {
        model: User,
      }}).then(data => {
        if (data) {
            return res.send(data)
        } 
    })
        .catch(err => {
            if (err) {
                console.error(err)
            }
        })
}




function updatePost(req, res) {
    let { post , user_id } = req.body;
    let {id} = req.params.id;
    models.Post.update({post , user_id},{where:{id:id}}).then(data => {
        if (data) {
            return res.send(data)
        } 
    })
        .catch(err => {
            if (err) {
                console.error(err)
            }
        })
}

function deletePost(req, res) {
    let { user_id } = req.body;
    let id = req.params.id;
    models.Post.destroy({where:{id:id,user_id:user_id}}).then(data => {
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
module.exports.remove = deletePost;
module.exports.update = updatePost;