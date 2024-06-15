const nodemailer = require("nodemailer");
const { validationResult } = require("express-validator");

const env = process.env;

const transporter = nodemailer.createTransport({
  service: env.NODEMAILER_SERVICE,
  secure: true,
  port: env.NODEMAILER_PORT,
  auth: {
    user: env.NODEMAILER_USER,
    pass: env.NODEMAILER_PASS,
  },
});

const sendEmailController = async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, error: errors.array() });
  }
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: env.NODEMAILER_USER,
    subject: `New Message from ${name} from portfolio website`,
    html:
      `<b>From: ${name}</b>` +
      "<br></br>" +
      `<b>Email: ${email}</b>` +
      "<br></br>" +
      `<b>Message: ${message
        .split(" ")
        .filter(Boolean)
        .join(" ")}</b>`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).send({ success, message: "Error sending email" });
    }
    success = true;
    res.status(200).send({ success, message: "Email sent" });
  });
};
module.exports = sendEmailController;
