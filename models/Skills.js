const mongoose = require("mongoose");
const { Schema } = mongoose;

const skillsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("skills", skillsSchema);
