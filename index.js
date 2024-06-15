const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");
require("dotenv").config();

connectToMongo();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {res.status(200).send("Welcome to Gurpreet Singh's portfolio backend!")})
app.use("/project", require("./routes/projects"));
app.use("/experience", require("./routes/experience"));
app.use("/education", require("./routes/education"));
app.use("/skills", require("./routes/skills"));
app.use("/email", require("./routes/email"));

app.listen(port, () => {
  console.log(`My-Portfolio Backend listening at http://localhost:${port}`);
});
