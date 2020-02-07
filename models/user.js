'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    photo: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    age: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    bio: DataTypes.STRING,
    gender: DataTypes.STRING
    // is_reported: DataTypes.INTEGER,
    // is_blocked: DataTypes.INTEGER,
    // preferences: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // User.hasOne(models.Device);
    // User.hasOne(models.Access);
    User.hasMany(models.User_contact);
    User.hasMany(models.Post);
    User.hasMany(models.Message);
    // User.hasOne(models.User_verification);
    User.hasMany(models.Conversation);
  };
  return User;
};