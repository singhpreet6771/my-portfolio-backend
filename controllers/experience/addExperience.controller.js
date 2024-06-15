const Experiences = require("../../models/Experience");
const { validationResult } = require("express-validator");

const addExperienceController = async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, error: errors.array() });
  }
  try {
    let experience = await Experiences.findOne({
      companyName: req.body.companyName,
      title: req.body.title,
    });
    if (experience) {
      return res.status(400).json({
        success,
        error: "experience with this Company Name and Role already exits",
      });
    }
    experience = await Experiences.create({
      companyName: req.body.companyName,
      title: req.body.title,
      from: req.body.from,
      to: req.body.to,
      technologies: req.body.technologies,
      icon: req.body.icon,
      location: req.body.location,
      description: req.body.description,
    });
    success = true;
    res.json({ success, experience });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success, error: "Internal Server Error" });
  }
};
module.exports = addExperienceController;
