const Educations = require("../../models/Education");

const getEducationController = async (req, res) => {
  let success = false;
  try {
    const educations = await Educations.find();
    success = true;
    res.json({ success, educations });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success, error: "Internal Server Error" });
  }
};

module.exports = getEducationController;
