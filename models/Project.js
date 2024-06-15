const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  heading: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("projects", projectSchema);
