const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
  voterId: {
    type: String,
    required: true,
    unique: true
  },
  pollingBoothId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PollingBooth',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  biometricHash: {
    type: String,
    required: true
  },
  verificationStatus: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending'
  },
  lastVerified: {
    type: Date
  }
});

module.exports = mongoose.model('Voter', voterSchema);
