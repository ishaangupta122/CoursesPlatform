const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  name: String,
  image:String,
  batch:String,
  package: String,
  company: String,
});

module.exports = mongoose.model('Alumni', alumniSchema);
