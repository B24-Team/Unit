'use strict';
module.exports = (sequelize, DataTypes) => {
  const Block_list = sequelize.define('Block_list', {
    participants_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {});
  Block_list.associate = function(models) {
    // Block_list.hasMany(models.Access);
  };
  return Block_list;
};