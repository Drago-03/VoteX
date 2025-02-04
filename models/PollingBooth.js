const mongoose = require('mongoose');

const pollingBoothSchema = new mongoose.Schema({
  boothId: {
    type: String,
    required: true,
    unique: true
  },
  regionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region',
    required: true
  },
  location: {
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
  assignedMachines: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VotingMachine'
  }]
});

pollingBoothSchema.index({ location: '2dsphere' });
module.exports = mongoose.model('PollingBooth', pollingBoothSchema);
