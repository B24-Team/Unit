const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
function isAuth(req, res, next) {
  var token =
    req.body.token ||
    req.query.token ||
    req.headers["authorization"] ||
    req.cookies.token;

  if (token) {
    jwt.verify(token, process.env.secretOrKey, function(err, decoded) {
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
