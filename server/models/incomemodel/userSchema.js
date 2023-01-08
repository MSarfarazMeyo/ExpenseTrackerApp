const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ammount: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const users = new mongoose.model("income", userSchema);

module.exports = users;
