
const mongoose = require('mongoose');

const votingMachineSchema = new mongoose.Schema({
  machineId: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['operational', 'maintenance', 'decommissioned', 'verification successful', 'verification failed'],
    default: 'operational'
  },
  lastCheckedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lastCheckedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('VotingMachine', votingMachineSchema);