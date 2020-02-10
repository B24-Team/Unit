'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    followed_id: DataTypes.INTEGER,
    follower_id: DataTypes.INTEGER
  }, {});
  Follow.associate = function(models) {
    Follow.belongsTo(models.User, {foreignKey:"follower_id",foreignKey:"followed_id", as :"user"});
  };
  return Follow;
};