'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_verificstion = sequelize.define('User_verificstion', {
    users_id: DataTypes.INTEGER,
    verification_code: DataTypes.STRING
  }, {});
  User_verificstion.associate = function(models) {
    // User_verificstion.hasOne(models.User);
  };
  return User_verificstion;
};