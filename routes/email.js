const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const sendEmailController = require("../controllers/email/sendEmail.controller");

// Route 1: "/send"
router.post(
  "/send",
  [
    body("name", "Enter name").isLength({ min: 1 }),
    body("email", "Enter valid email").isEmail(),
    body("message", "Enter message").isLength({ min: 1 }),
  ],
  sendEmailController
);

module.exports = router;
