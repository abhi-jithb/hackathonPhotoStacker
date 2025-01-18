const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  position: { top: String, left: String },
});

module.exports = mongoose.model('Image', imageSchema);
