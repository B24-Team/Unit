'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chatroom = sequelize.define('Chatroom', {
    User_id: DataTypes.INTEGER,
    messages: DataTypes.STRING
  }, {});
  Chatroom.associate = function(models) {
    Chatroom.belongsTo(models.User,{ foreignKey: 'user_id', as: "user" });
  };
  return Chatroom;
};