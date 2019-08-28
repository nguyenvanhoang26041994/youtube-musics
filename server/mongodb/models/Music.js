const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const musicSchema = new Schema({
  id: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  name: String,
  lyrics: [{
    timeStart: Number,
    timeEnd: Number,
    text: String,
  }],
  singers: [{
    id: {
      type: String,
      required: true,
    },
    name: String,
  }],
  src: {
    type: String,
    required: true,
  },
  img: String,
  listenCount: Number,
  duration: Number,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Music', musicSchema);
