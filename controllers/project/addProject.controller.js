const { validationResult } = require("express-validator");
const Projects = require("../../models/Project");

const addProjectController = async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, error: errors.array() });
  }
  try {
    let project = await Projects.findOne({ heading: req.body.heading });
    if (project) {
      return res
        .status(400)
        .json({ success, error: "Project with this name already exits" });
    }
    project = await Projects.create({
      heading: req.body.heading,
      description: req.body.description,
      technologies: req.body.technologies,
      url: req.body.url,
    });
    success = true;
    res.json({ success, project });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success, error: "Internal Server Error" });
  }
};

module.exports = addProjectController;
