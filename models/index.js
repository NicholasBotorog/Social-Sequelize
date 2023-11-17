const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");
const Profile = require("./Profile");
const User = require("./User");

// User OneToOne Profile
User.hasOne(Profile)
Profile.belongsTo(User)

// User OneToMany Post
Post.belongsTo(User)
User.hasMany(Post)

// Post OneToMany Comment
Comment.belongsTo(Post)
Post.hasMany(Comment)

// User ManyToMany Like
User.belongsToMany(Like, { through: "User-Like" })
Like.belongsToMany(User, { through: "User-Like" })

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}