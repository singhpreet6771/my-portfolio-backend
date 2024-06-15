const express = require("express");
const { body } = require("express-validator");
const addEducationController = require("../controllers/education/addEducation.controller");
const getEducationController = require("../controllers/education/getEducation.controller");
const router = express.Router();

// Route 1: "/addEducation"
router.post(
  "/addEducation",
  [
    body("instituteName", "Enter a valid Institute Name").isLength({ min: 1 }),
    body("qualification", "Enter a qualification").isLength({ min: 1 }),
    body("from", "Enter the technologies used").isLength({ min: 1 }),
    body("to", "Enter the imageUrl of the project").isLength({ min: 1 }),
    body("logoUrl", "Enter the imageUrl of the project").isLength({ min: 1 }),
  ],
  addEducationController
);

// Route 2: "/getEducation"
router.post("/getEducation", getEducationController);

module.exports = router;
