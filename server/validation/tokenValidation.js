//this middleware checks if the token is valid or not,
//the token generated once the user registers or logs in successfully will be  sent back to the client through an http only cookies(protect the
//token from local script access)
// this token will be passed inside the hearders of every request as a cookie
// isAuth middleware checks if the cookies contain a token value (as it is an indicator of authentication succes) if there is no token 
//or the token is no longer valid he user will be redirected to 
//the login page
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
function isAuth(req, res, next) {
  var token =
    req.body.token ||
    req.query.token ||
    req.headers["authorization"] ||
    req.cookies.token;

  if (token) {
<<<<<<< HEAD
    jwt.verify(token, process.env.secretOrKey, function(err, decoded) {
=======
    jwt.verify(token, 'this is a secret key', function (err, decoded) {
      // console.log(decoded);
>>>>>>> a8ac1fba34ab76606f52c7636e9cb10786cecca1
      if (err) {
        return res.status(200).json({
          message: "failed authentication: invalid token"
        });
      }

      next();
    });
  } else {
    return res.status(200).json({
      message: "failed authentication: no token provided."
    });
  }
}
module.exports = isAuth;
