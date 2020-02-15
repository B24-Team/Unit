'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    tokenValue: DataTypes.STRING,
    token_expires_at: DataTypes.DATE,
    refresh_token: DataTypes.STRING,
    refresh_token_expires_at: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {});
  Token.associate = function(models) {
    Token.belongsTo(models.User);
  };
  return Token;
};