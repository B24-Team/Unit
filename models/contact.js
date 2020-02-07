'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    middle_name: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // Contact.hasOne(models.User_contact);
  };
  return Contact;
};