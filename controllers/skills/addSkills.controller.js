const { validationResult } = require("express-validator");
const Skills = require("../../models/Skills");

const addSkillsController = async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, error: errors.array() });
  }
  try {
    let skill = await Skills.findOne({
      name: req.body.name.trim().toUpperCase(),
    });
    if (skill) {
      return res
        .status(400)
        .json({ success, error: "Skill with this name already exits" });
    }
    skill = await Skills.create({
      name: req.body.name.trim().toUpperCase(),
    });
    success = true;
    res.json({ success, skill });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success, error: "Internal Server Error" });
  }
};

module.exports = addSkillsController;
