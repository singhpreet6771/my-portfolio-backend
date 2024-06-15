const express = require("express");
const { body } = require("express-validator");
const addExperienceController = require("../controllers/experience/addExperience.controller");
const getExperienceController = require("../controllers/experience/getExperience.controller");
const router = express.Router();

// Route 1: "/addExperience"
router.post(
  "/addExperience",
  [
    body("companyName", "Enter a valid Company name").isLength({ min: 1 }),
    body("title", "Enter a title").isLength({ min: 1 }),
    body("from", "Enter the technologies used").isLength({ min: 1 }),
    body("to", "Enter the imageUrl of the project").isLength({ min: 1 }),
    body("technologies", "Enter the imageUrl of the project").isLength({
      min: 1,
    }),
    body("icon", "Enter the icon of the project").isLength({ min: 1 }),
    body("location", "Enter the location").isLength({ min: 1 }),
    body("description", "Enter description").isLength({ min: 1 }),
  ],
  addExperienceController
);

// Route 2: "/getExperience"
router.post("/getExperience", getExperienceController);

module.exports = router;
