'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    users_id: DataTypes.INTEGER,
    device_id: DataTypes.STRING,
    type: DataTypes.STRING,
    device_token: DataTypes.STRING
  }, {});
  Device.associate = function(models) {
    // Device.hasMany(models.User);
    // Device.hasOne(models.Access);
  };
  return Device;
};