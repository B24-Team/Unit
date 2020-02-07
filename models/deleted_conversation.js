'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deleted_conversation = sequelize.define('Deleted_conversation', {
    conversation_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {});
  Deleted_conversation.associate = function(models) {
    // Deleted_conversation.hasMany(models.Conversation);
    // Deleted_conversation.hasMany(models.Message);
  };
  return Deleted_conversation;
};