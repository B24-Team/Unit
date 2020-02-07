'use strict';
module.exports = (sequelize, DataTypes) => {
  const Access = sequelize.define('Access', {
    users_id: DataTypes.INTEGER,
    devices_id: DataTypes.INTEGER,
    token: DataTypes.STRING,
    deleted_at: DataTypes.DATE
  }, {});
  Access.associate = function(models) {
    // Access.hasMany(models.User);
  };
  return Access;
};