'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    participants_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    report_type: DataTypes.STRING,
    notes: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {});
  Report.associate = function(models) {
    // Report.hasMany(models.Conversation);
    // Report.hasMany(models.Participant);
  };
  return Report;
};