const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    Name: String,
    Description: String
});

module.exports = mongoose.model('item', itemSchema, 'Item')