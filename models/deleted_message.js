'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deleted_message = sequelize.define('Deleted_message', {
    messages_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {});
  Deleted_message.associate = function(models) {
    // Deleted_message.hasMany(models.Message);
  };
  return Deleted_message;
};