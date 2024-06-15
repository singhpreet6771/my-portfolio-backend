const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(process.env.MONGO_PASS)}@${process.env.MONGO_CLUSTER}.tpsm0ys.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority&appName=${process.env.MONGO_CLUSTER}`;

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("Connected to Mongo Successfully!");
};

module.exports = connectToMongo;
