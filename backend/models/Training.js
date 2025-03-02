const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    image: String,
    type: String
});

module.exports = mongoose.model('Training', trainingSchema);
