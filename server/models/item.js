const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    Name: String,
    Description: String,
    PromoCode: {
        type: String,
        default: 'ILOVESOUP'
    }
});

module.exports = mongoose.model('item', itemSchema, 'Item')