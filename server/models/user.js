const { Int32 } = require('bson');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    Email: String,
    Password: String,
    IsAdmin: Boolean,
    Token: {
        type: Number,
        default: 5
    }
});

module.exports = mongoose.model('user', userSchema, 'User')