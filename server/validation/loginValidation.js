// this function checks if the the user enters a valid data once he wants to signin 
//first step: if the email or the password are empty  it returs an error
//if the daa is provided,a boolean value set to true will be passed to the login function in the user file



const isEmpty = require("is-empty");
const Validator = require("validator");
const loginInputValidation = function(data) {
  let errors = {};
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;
  if (Validator.isEmpty(data.email)) {
    errors.email = "email field required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "enter your password";
  }
  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
module.exports = loginInputValidation;
