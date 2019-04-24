// var mongoose = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");

// var UserSchema = new mongoose.Schema({
//     email: String,
//     username: String,
//     password: String
// });

// UserSchema.plugin(passportLocalMongoose)

// module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('users', UserSchema)