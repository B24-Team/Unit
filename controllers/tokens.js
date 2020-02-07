const models = require("../models");
function createToken(
  token,
  expiresIn,
  refreshToken,
  refreshTokenExpiresIn,
  user_id
) {
  return models.Token.create({
    token,
    expiresIn,
    refreshToken,
    refreshTokenExpiresIn,
    user_id}
  )
    .then(data => {
      // console.log(data);
      return models.Token.find({where:{user_id:user_id}})
        .then(data => {
          return data;
        })
        .catch(err => {
          throw "no token found";
        });
    })
    .catch(err => {
      console.log(err);
    });
}

function findRefreshToken(refresh_token) {
  return models.Token.find({where:{refresh_token:refresh_token}})
    .then(data => {
      return data;
    })
    .catch(err => {
      throw "refresh token not Found";
    });
}

function updateToken(
  newtoken,
  newExpiryTokenDate,
  newRefreshToken,
  newRefreshTokenExpiryDate,
  user_id
) {
  return models.Token.update({
    newtoken,
    newExpiryTokenDate,
    newRefreshToken,
    newRefreshTokenExpiryDate,
    user_id}
  )
    .then(data => {
      return "user was updates";
    })
    .catch(err => {
      throw "USER NOT FOUND";
    });
}

function deleteToken(id) {
  // console.log("zezooooo", id)
  return models.Token.destroy({where:{id:id}})
    .then(data => {
      return " token was deleted successfully";
    })
    .catch(err => {
      throw "token NOT FOUND";
    });
}

module.exports.create = createToken;
module.exports.findRefreshToken = findRefreshToken;
module.exports.deleteIT = deleteToken;
module.exports.update = updateToken;
