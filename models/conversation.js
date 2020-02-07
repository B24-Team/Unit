'use strict';
module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define('Conversation', {
    title: DataTypes.STRING,
    creator_id: DataTypes.INTEGER,
    // channel_id: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {});
  Conversation.associate = function(models) {
    Conversation.belongsTo(models.User);
    // Conversation.hasOne(models.Deleted_conversation);
    Conversation.hasMany(models.Participant);
    Conversation.hasMany(models.Message);
  };
  return Conversation;
};