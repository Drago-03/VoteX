const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema({
  regionId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  coordinates: {
    type: {
      type: String,
      enum: ['Polygon'],
      required: true
    },
    coordinates: {
      type: [[[Number]]], // Array of coordinate arrays forming a polygon
      required: true
    }
  }
});

regionSchema.index({ coordinates: '2dsphere' });
module.exports = mongoose.model('Region', regionSchema);
