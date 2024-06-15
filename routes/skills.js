const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const addSkillsController = require("../controllers/skills/addSkills.controller");
const addMultipleSkillsController = require("../controllers/skills/addMultipleSkills.controller");
const getSkillsController = require("../controllers/skills/getSkills.controller");

// Route 1: "/addSkill"
router.post(
  "/addSkill",
  [body("name", "Enter a skill!").isLength({ min: 1 })],
  addSkillsController
);

// Route 2: "/addMultipleSkill"
router.post(
  "/addMultipleSkill",
  [body("skills", "Enter skills!").isArray({ min: 1 })],
  addMultipleSkillsController
);

// Route 3: "/getSkills"
router.post("/getSkills", getSkillsController);

module.exports = router;
