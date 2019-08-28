const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const singerSchema = new Schema({
  id: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  name: String,
  displayRole: String,
  isVerified: Boolean,
  qoute: {
    text: String,
    author: String,
  },
  avatarImg: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Singer', singerSchema);
