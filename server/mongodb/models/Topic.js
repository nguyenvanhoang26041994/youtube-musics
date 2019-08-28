const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const topicSchema = new Schema({
  id: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  name: String,
  color: String,
  musics: [{
    id: {
      type: String,
      required: true,
    },
    name: String,
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
  }]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Topic', topicSchema);
