const { validationResult } = require("express-validator");
const Educations = require("../../models/Education");

const addEducationController = async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, error: errors.array() });
  }
  try {
    let education = await Educations.findOne({
      qualification: req.body.qualification,
    });
    if (education) {
      return res
        .status(400)
        .json({
          success,
          error: "Education with this qualification already exits",
        });
    }
    education = await Educations.create({
      instituteName: req.body.instituteName,
      qualification: req.body.qualification,
      from: req.body.from,
      to: req.body.to,
      logoUrl: req.body.logoUrl,
    });
    success = true;
    res.json({ success, education });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success, error: "Internal Server Error" });
  }
};

module.exports = addEducationController;
