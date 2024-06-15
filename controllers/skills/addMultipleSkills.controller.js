const { validationResult } = require("express-validator");
const Skills = require("../../models/Skills");

const pushSkillsToDB = async (skills, skillsAdded, skillsSkipped) => {
  skills.forEach(async (skill) => {
    let skillCheck = await Skills.findOne({ name: skill.trim().toUpperCase() });
    if (skillCheck) {
      skillsSkipped.push(skill);
    } else {
      skillsAdded.push(skill);
      skillCheck = await Skills.create({
        name: skill.trim().toUpperCase(),
      });
    }
  });
};

const addMultipleSkillsController = async (req, res) => {
  let success = false;
  let skillsAdded = [];
  let skillsSkipped = [];
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, error: errors.array() });
  }
  try {
    await pushSkillsToDB(req.body.skills, skillsAdded, skillsSkipped);
    success = true;
    res.json({ success, messsage: "Skills added successfully!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success, error: "Internal Server Error" });
  }
};

module.exports = addMultipleSkillsController;
