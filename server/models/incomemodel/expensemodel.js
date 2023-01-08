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
});

const users = new mongoose.model("Expense", userSchema);

module.exports = users;
