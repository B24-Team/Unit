//modeks of the token;
//the tokens table contains an id, a token value,an expiry date for the token ,a refresh token value(it is a random string),a refresh token expiry 
//and a user id
var db = require("../db/db");
var users = require("./users.js");
const TokenSchema = `CREATE TABLE  IF NOT EXISTS tokens (
    id serial primary key not null,
    tokenValue varchar(255)  ,
    token_expires_at  timestamp with time zone default current_timestamp + interval '30' ,
    refresh_token varchar(255) ,
    refresh_token_expires_at timestamp with time zone default current_timestamp,
    user_id int 
   



);`;
// FOREIGN KEY (user_id) REFERENCES users(id)
db.query(TokenSchema, (err, data) => {
  if (err) {
    console.log(err);
  } else console.log("tokens table successfully created");
});

// get the token associated to a specific user
function getToken(user_id) {
  return db.query(`select tokenValue from tokens  where user_id = $1`, [
    user_id
  ]);
}

//save the token to the database
function createToken(
  tokenValue,
  token_expires_at,
  refresh_token,
  refresh_token_expires_at,
  user_id
) {
  return db.query(
    `INSERT into tokens(tokenValue,token_expires_at,refresh_token,refresh_token_expires_at,user_id) VALUES($1, $2 , $3, $4, $5)`,
    [
      tokenValue,
      token_expires_at,
      refresh_token,
      refresh_token_expires_at,
      user_id
    ]
  );
}
// get the data related to a specific refresh token
function getRefreshToken(refresh_token) {
  return db.query(`select * from tokens where refresh_token = $1 `, [
    refresh_token
  ]);
}

//update the tokens table (it is done by the refresh token route)
function updateToken(
  newtoken,
  newExpiryTokenDate,
  newRefreshToken,
  newRefreshTokenExpiryDate,
  user_id
) {
  return db.query(
    `update tokens set tokenValue = $1, token_expires_at = $2, refresh_token = $3, refresh_token_expires_at = $4 where user_id = $5 `,
    [
      newtoken,
      newExpiryTokenDate,
      newRefreshToken,
      newRefreshTokenExpiryDate,
      user_id
    ]
  );
}
//this function deletes a token from the database
function deleteToken(id) {
  // console.log("uoyoyoyoyo", id)
  return db.query(`DELETE FROM tokens WHERE user_id =  '${id}'`);
}
module.exports.create = createToken;

module.exports.findtoken = getToken;
module.exports.findRefreshToken = getRefreshToken;

module.exports.updateToken = updateToken;
module.exports.deleteToken = deleteToken;
