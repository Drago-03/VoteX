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
  },
  currentLocation: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  assignedBoothId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PollingBooth'
  }
});

votingMachineSchema.index({ currentLocation: '2dsphere' });

module.exports = mongoose.model('VotingMachine', votingMachineSchema);