const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const addProjectController = require("../controllers/project/addProject.controller");
const getProjectController = require("../controllers/project/getProject.controller");

// Route 1: "/addProject"
router.post(
  "/addProject",
  [
    body("heading", "Enter a valid heading").isLength({ min: 1 }),
    body("description", "Enter a description").isLength({ min: 5 }),
    body("technologies", "Enter the technologies used").isLength({ min: 1 }),
    body("url", "Enter the url of the project").isLength({ min: 1 }),
  ],
  addProjectController
);

// Route 2: "/getProject"
router.post("/getProject", getProjectController);

module.exports = router;
