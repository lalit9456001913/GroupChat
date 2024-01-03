// const mongoose = require('../db');

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^\S+@\S+\.\S+$/,
  },
  password: String,
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
