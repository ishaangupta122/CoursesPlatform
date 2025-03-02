const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
  image:String,
  price: Number,
  type:Number
});

module.exports = mongoose.model('Course', courseSchema);
