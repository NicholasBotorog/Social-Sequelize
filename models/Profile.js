const { db, DataTypes, Model } = require("../db/connection.js");

class Profile extends Model {}

Profile.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING,
  },
  { sequelize: db }
);

module.exports = Profile;
