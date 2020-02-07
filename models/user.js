'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
    // is_reported: DataTypes.INTEGER,
    // is_blocked: DataTypes.INTEGER,
    // preferences: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // User.hasOne(models.Device);
    // User.hasOne(models.Access);
    User.hasMany(models.User_contact);
    User.hasMany(models.Message);
    // User.hasOne(models.User_verification);
    User.hasMany(models.Conversation);
  };
  return User;
};