const mongoose = require("mongoose");
const { Schema } = mongoose;

const educationSchema = new Schema({
  instituteName: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("education", educationSchema);
