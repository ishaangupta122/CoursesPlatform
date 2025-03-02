const mongoose = require('mongoose');

const placementSchema = new mongoose.Schema({
	company: String,
	stipend: String,
});

module.exports = mongoose.model('Placement', placementSchema);
