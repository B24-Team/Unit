'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    activity_type: DataTypes.STRING,
    activity_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    detail: DataTypes.TEXT
  }, {});
  Activity.associate = function(models) {
    // associations can be defined here
  };
  return Activity;
};