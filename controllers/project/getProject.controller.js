const Projects = require("../../models/Project");

const getProjectController = async (req, res) => {
  let success = false;
  try {
    const projects = await Projects.find();
    success = true;
    res.json({ success, projects });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success, error: "Internal Server Error" });
  }
};

module.exports = getProjectController;
