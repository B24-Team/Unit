'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_contact = sequelize.define('User_contact', {
    user_id: DataTypes.INTEGER,
    contact_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});
  User_contact.associate = function(models) {
    User_contact.belongsTo(models.User);
    // User_contact.hasMany(models.Contact);
  };
  return User_contact;
};