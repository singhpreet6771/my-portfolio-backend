const Experiences = require("../../models/Experience");

const getExperienceController = async (req, res) => {
  let success = false;
  try {
    const experiences = await Experiences.find();
    success = true;
    res.json({ success, experiences });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success, error: "Internal Server Error" });
  }
};

module.exports = getExperienceController;
