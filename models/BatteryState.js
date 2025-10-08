const mongoose = require('mongoose');

const batteryStateSchema = new mongoose.Schema({
  batteryId: { type: String, unique: true, required: true },
  cumulative_Ah_in: { type: Number, default: 0 },
  cumulative_Ah_out: { type: Number, default: 0 },
  soc_pct: { type: Number, default: 100 },
  soh_pct: { type: Number, default: 100 },
  status: { type: String, default: "OK" },
  last_update: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BatteryState', batteryStateSchema);
