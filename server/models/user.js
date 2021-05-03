const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    Email: String,
    Password: String
});

module.exports = mongoose.model('user', userSchema, 'User')