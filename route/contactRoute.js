const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.phone.length === 0 ||
    data.budget.length === 0 ||
    data.skype.length === 0 ||
    data.file.length === 0 ||
    data.message.length === 0 
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "bellissadasmae459@gmail.com",
      pass: "esbohykmhmuzrclp",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "bellissadasmae459@gmail.com",
    subject: `message from ${data.name} and ${data.lastName}`,
    html: `
            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            <li>phone: ${data.phone}<li/> 
            <li>skype: ${data.skype}<li/> 
            <li>budget: ${data.budget}<li/> 
            <li>budget: ${data.file}<li/> 
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please Fill All The Fields!" });
      res.status(200).json({ msg: "Thank You For Contacting Asmae." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;
