const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  batteryId: { type: String, required: true },
  voltage_V: Number,
  current_A: Number,
  temperature_C: Number,
  bus_voltage_V: Number,
  mode: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SensorData', sensorDataSchema);
