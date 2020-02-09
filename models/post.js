'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    post: DataTypes.STRING,
    link: DataTypes.STRING,
    type: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User,{ as: "user" });
  };
  return Post;
};