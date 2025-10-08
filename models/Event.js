const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  batteryId: String,
  deviceId: String,
  type: String,
  message: String,
  ts: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
