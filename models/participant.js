'use strict';
module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define('Participant', {
    conversation_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    // type: DataTypes.STRING
  }, {});
  Participant.associate = function(models) {
    Participant.belongsTo(models.Conversation);
    // Participant.hasOne(models.Report);
    Participant.belongsTo(models.User);
  };
  return Participant;
};