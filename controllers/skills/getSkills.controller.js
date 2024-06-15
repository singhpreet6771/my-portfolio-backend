const Skills = require("../../models/Skills");

const getSkillsController = async (req, res) => {
  let success = false;
  try {
    const skills = await Skills.find();
    success = true;
    res.json({ success, skills });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success, error: "Internal Server Error" });
  }
};

module.exports = getSkillsController;
