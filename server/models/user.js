const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    Email: String,
    Password: String,
    IsAdmin: Boolean
});

module.exports = mongoose.model('user', userSchema, 'User')