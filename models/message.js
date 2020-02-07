'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    // guid: DataTypes.STRING,
    conversation_id: DataTypes.INTEGER,
    sender_id: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE,
    // message_type: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  Message.associate = function(models) {
    Message.belongsTo(models.User);
    // Message.hasOne(models.Deleted_message);
    // Message.hasMany(models.Deleted_conversation);
    Message.belongsTo(models.Conversation);
    // Message.belongsTo(models.Contact);
  };
  return Message;
};