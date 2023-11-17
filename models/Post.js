const { db, DataTypes, Model } = require("../db/connection.js");

class Post extends Model {}

Post.init(
  {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING,
  },
  { sequelize: db }
);

module.exports = Post;
