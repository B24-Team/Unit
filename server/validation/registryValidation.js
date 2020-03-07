//this middleware validates the registery input.once the user submits the sign up form . a post request will be sent to the signup route
//this middleware checks if the input fields are filled,if they are,a boolean value will be set to true(valid) as a signup successs indicator
//otherwise, a bunch of errors will be returned


const isEmpty = require("is-empty");
const Validator = require("validator");
const registeryInputValidation = function(data) {
  let errors = {};
  data.username = isEmpty(data.username) ? "" : data.username;
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;
  data.confirmPassword = isEmpty(data.confirmPassword)
    ? ""
    : data.confirmPassword;
  //validate usernamre
  if (Validator.isEmpty(data.username)) {
    errors.username = "username required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "email field required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "email not valid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "enter your password please";
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "confirm your password please";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "the password must contain 6 characters at least";
  }
  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "the 2 passwords must be the same";
  }
  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
module.exports = registeryInputValidation;
