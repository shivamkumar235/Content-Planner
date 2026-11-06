const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true, // A@x.com aur a@x.com same maane jayenge
  },
  password: { type: String, required: true }, // Number nahi!
});

const userModel = mongoose.model("user", userschema);
module.exports = userModel;
