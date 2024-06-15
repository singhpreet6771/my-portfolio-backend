const mongoose = require("mongoose");
const { Schema } = mongoose;

const experienceSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  title: {
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
  technologies: {
    type: Array,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("experiences", experienceSchema);
