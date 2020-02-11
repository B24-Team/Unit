'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chatroom = sequelize.define('Chatroom', {
    User_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  Chatroom.associate = function(models) {
    Chatroom.belongsTo(models.User,{ foreignKey: 'User_id', as: "user" });
  };
  return Chatroom;
};