const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const randToken = require("rand-token");

const Token = require("./tokens.js");

const regiteryValidation = require("./../server/validation/registryValidation");
const loginValidation = require("./../server/validation/loginValidation");
//
const IncomingForm = require("formidable").IncomingForm;
const path = require("path");
const uniqueId = require("uuid");

///////////////////////////////////////////////////////////////////////////////////// SIGN UP SECTION
var refreshTokenYolo;
function signUp(req, res) {
  let { errors, isValid } = regiteryValidation(req.body);
  console.log("it is here : ",req.body)
  if (!isValid) {

    res.status(200).json(errors);
  } else {
    var { name, username, email, password, confirmPassword } = req.body;
    models.User.findOne({where:{email:email}})
      .then(data => {
        //console.log(data);
        if (data) {
          res
            .status(200)
            .json({ message: "user already exists", success: false });
        } else {
          //if no user with this email we will hash the password,save the
          //user data in the database and generate the authentication token
          var password = req.body.password;
          let hash = bcrypt.hashSync(password, 12);
          var password = hash;
          models.User.create({
            photo:'newUser.JPG',
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hash
          })
            .then(result => {
              if (result) {

                var payload = {
                  id: result.id,
                  email: result.email,
                  username: result.username,
                  name: result.name
                };
                jwt.sign(
                  payload,
                  process.env.secretOrkey,
                  { expiresIn: 300 },
                  (err, token) => {
                    var refreshToken = randToken.uid(250);
                    var date = new Date();
                    // console.log(refreshToken);
                    // console.log(token);
                    refreshTokenYolo = refreshToken;
                    Token.create(
                      token,
                      new Date(date.getTime() + 5 * 60 * 1000),
                      refreshToken,
                      new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000),
                      result.id
                    );
                    res.cookie("refreshtoken", refreshToken, {
                      maxAge: 9000000000,
                      httpOnly: true
                    });
                    res.cookie("token", token, {
                      maxAge: 60 * 60 * 1000, // keep it  60 * 60 * 1000
                      httpOnly: true
                    });
                    return res.json({
                      payload,
                      success: true,
                      token: "Bearer " + token,
                      refreshToken: refreshTokenYolo
                    });
                  }
                );
              }
            })
            .catch(err => {
              if (err) {
                res.jsonStatus(401);
              }
            });
        }
      })
      .catch(err => console.log(err));
  }
}
///////////////////////////////////////////////////////////////////////////////////// LOGIN SECTION
function logIn(req, res) {
  let { errors, isValid } = loginValidation(req.body);
  if (isValid) {
    var { email, password } = req.body;
    models.User.findOne({
      attributes:['email', 'id','password','username','name']
      ,where:{email:email}})
      .then(data => {

        if (data) {
          var pass = data.dataValues.password;
          var password = req.body.password;
          bcrypt.compare(password, pass).then(isMatch => {
            if (isMatch) {
              var payload = {
                id: data.dataValues.id,
                email: data.dataValues.email,
                username: data.dataValues.username,
                name: data.dataValues.name
              };
              
              jwt.sign(
                payload,
                process.env.secretOrkey,
                { expiresIn: 300 },
                (err, token) => {
                  var refreshToken = randToken.uid(250);
                  var date = new Date();
                  // console.log(refreshToken);
                  //console.log(token);
                  refreshTokenYolo = refreshToken;
                  Token.create(
                    token,
                    new Date(date.getTime() + 5 * 60 * 1000),
                    refreshToken,
                    new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000),
                    data.dataValues.id
                  );
                  console.log('that is it',refreshTokenYolo);
                  res.cookie("refreshtoken", refreshToken, {
                    maxAge: 30 * 24 * 60 * 60 * 1000,
                    httpOnly: true
                  });
                  res.cookie("token", token, {
                    maxAge: 60 * 60 * 1000, // 60 * 60 * 1000
                    httpOnly: true
                  });

                  return res.json({
                    payload,
                    success: true,
                    token: "Bearer " + token,
                    refreshToken: refreshToken
                  });
                }
              );
            } else {
              return res.json("wrong password");
            }
          });
        } else {
          res.status(200).json("no user with such email found");
        }
       })
      .catch(err => console.log(err));
  } else {
    res.status(404).json(errors);
  }
}
/////////////////////////////////////////////////////////////////////////////////////first request
// function enter(req, res) {
//   //console.log(req.cookies.refreshtoken, "we have it");
//   var cookieValue = req.cookies.refreshtoken;
//   //console.log(cookieValue, "we have it'oot");

//   if (cookieValue !== undefined) {
//     Token.findRefreshToken(cookieValue)
//       .then(data => {
//         // console.log("data from refresh token");
//         // console.log(data);
//         if (data) {
//           return res.status(200).json(data);
//         }
//       })
//       .catch(err => console.log(err));
//   } else {
//     return res.json("no cookie found");
//   }
// }

////////////////////////////////////////////////////////////////////////////logout request
function logOut(req, res) {
  console.log(
    "***************************logged out*****************************"
  );
  var user_id = req.body.id;
  Token.deleteIT(user_id)
    .then(result => {
      res.clearCookie("refreshtoken");
      res.clearCookie("token");
      res.status(200).json(result);
    })
    .catch(err => console.log(err));
}
//////////////////////////////////////////////////////////////////////// refresh token request
function refreshToken(req, res) {
  console.log(req.cookies);
  var refreshTokenFormCookies = req.cookies.refreshtoken;
  if (!refreshTokenFormCookies) {
    return res.json("You Dont have a refresh token , you need to login")

  }

  Token.findRefreshToken(refreshTokenFormCookies)
    .then(result => {
      // console.log("results *******************", result);
      var expirydate = result.refresh_token_expires_at;
      // console.log("user_id", result.user_id);
      var newDate = new Date();
      var comparison = expirydate.getTime() > newDate.getTime() ? true : false;
      // console.log("the data is here read it",result.dataValues);
      if (comparison) {
        models.User.findOne({where:{id:result.dataValues.user_id}})
          .then(data => {
            // console.log(data.dataValues);
            if (data) {
              // res.json("you logged in successfully");
              var payload = {
                id: data.dataValues.id,
                email: data.dataValues.email,
                username: data.dataValues.username,
                name: data.dataValues.name
              };
              // console.log(payload);
              //console.log(process.env.secretOrkey);
              jwt.sign(
                payload,
                process.env.secretOrkey,
                { expiresIn: 300 },
                (err, token) => {
                  var refreshToken = randToken.uid(250);
                  var date = new Date();
                  // console.log(data.dataValues.id);
                  // console.log(token);
                  Token.updateToken(
                    token,
                    new Date(date.getTime() + 5 * 60 * 1000),
                    refreshToken,
                    new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000),
                    data.dataValues.id
                  );
                  res.cookie("refreshtoken", refreshToken, {
                    maxAge: 30 * 24 * 60 * 60 * 1000,
                    httpOnly: true
                  });
                  res.cookie("token", token, {
                    maxAge: 60 * 60 * 1000, // keep it 60 * 60 * 1000
                    httpOnly: true
                  });
                  return res.json({
                    payload,
                    success: true,
                    token: "Bearer " + token
                  });
                  //) res.status(200).json(result);
                }
              );
            } else {
              res.status(400).json("no user with such id found");
            }
          })
          .catch(err => res.json(err));
      } else {
        res
          .status(400)
          .json({ message: "invalid refresh token please login again" });
      }
    })
    .catch(err => console.log(err));
}


function getPhoto(req, res) {
  console.log("Photo : ",req.params.name)
  res.sendFile(path.resolve("folders/uploaded", req.params.name));
};

/// malik's

function getAll(req, res) {
  models.User.findAll({attributes: {
    include:['id','photo','username','age','is_active','bio','gender'],
    exclude: ['password','createdAt','updatedAt']}})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
}
function getUserByName(req, res) {
  var username = req.body.username;
  models.User.findOne({attributes: {
    exclude: ['password','createdAt','updatedAt']
  },where:{username:username}})
    .then(result => {
      res.json(result.dataValues);
    })
    .catch(err => {
      res.json(err);
    });
}

function findById(req, res) {
  var user_id = req.body.user_id;
  models.User.findOne({attributes: {
    exclude: ['password','createdAt','updatedAt']
  },where:{id:user_id}})
    .then(data => {
      console.log(data.dataValues)
      res.json(data.dataValues);
    })
    .catch(err => {
      res.json(err);
    });
}

// function findByIdandUpdateUser(req, res) {
//   var user_id = req.body.user_id;
//   User.findById(user_id)
//     .then(result => {
//       res.json(result.dataValues);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// }

//

function UpdateProfilePhoto(req, res) {
  const form = new IncomingForm();
  var user_id;
  var link;
  form.parse(req, function (err, fields, files) {
    user_id = fields.user_id;
    if (err) {
      res.json(err);
    }
    res.end();
  });

  form.on("fileBegin", function (name, file) {
    var id = uniqueId();
    file.path = "folders/uploaded/" + id + "." + file.name.split(".")[1];

    link = id + "." + file.name.split(".")[1];
  });

  form.on("end", (err, data) => {
    // var userObj = { photo: link, user_id: user_id };

    models.User.update({photo:link},{where:{id:user_id}})
      .then(data => {
        if (data) {
        }
      })
      .catch(err => {
        if (err) {
          console.error(err);
        }
      });
  });
}

//
function updatePass(req, res) {
  var user_id = req.body.user_id;
  var password = req.body.password;
  let hash = bcrypt.hashSync(password, 12);
  models.User.update({password:hash},{where:{id:user_id}})
    .then(data => {
      res.json('Password Was Updated');
    })
    .catch(err => {
      res.json(" something wrong happened");
    });
}

function updateProfile(req, res) {
  console.log(req.body)
  var {user_id, name, username, age, gender,bio} = req.body;
  models.User.update({name : name, username : username, age : age, gender : gender, bio : bio}, {where:{id:user_id}})
    .then(data => {
      res.json("Profile Updated !!");
    })
    .catch(err => {
      res.json(err);
    });
}

//


module.exports.signUp = signUp;

module.exports.getPhoto = getPhoto;

module.exports.logIn = logIn;
module.exports.logOut = logOut;
module.exports.refreshToken = refreshToken;
//
module.exports.getUserByName = getUserByName;
module.exports.getAll = getAll;
module.exports.findById = findById;
module.exports.UpdateProfilePhoto = UpdateProfilePhoto;
module.exports.updatePass = updatePass;
module.exports.updateProfile = updateProfile;
