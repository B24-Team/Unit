'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attachment = sequelize.define('Attachment', {
    messages_id: DataTypes.INTEGER,
    thumb_url: DataTypes.STRING,
    file_url: DataTypes.STRING
  }, {});
  Attachment.associate = function(models) {
    // Attachment.hasMany(models.Contact);
  };
  return Attachment;
};