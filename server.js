const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Route handler for sending email
app.post("/send-email", upload.single("file"), (req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;
  const message = req.body.message;
  const skype = req.body.skype;
  const budget = req.body.budget;
  const { filename, path } = req.file;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bellissadasmae459@gmail.com",
      pass: "esbohykmhmuzrclp",
    },
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: email,
    to: "bellissadasmae459@gmail.com",
    subject: "Brainstar form submission",
    html: ` <head>
        <style>
          /* Your CSS styles go here */
          body {
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6) !important;
  border-radius: 25px;
}
h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}
p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #666;
}
.message {
  font-size: 18px;
  margin-top: 30px;
}

        </style>
      </head>
      <body>
        <div class="container">
          <h1>New message from ${firstName} ${lastName}</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Skype:</strong> ${skype}</p>
          <p><strong>budget:</strong> ${budget}</p>
          <div class="message">
            <p><strong>${message}</strong></p>
          </div>
        </div>
      </body>
    </html>`,
    attachments: [
      {
        filename: filename,
        path: path,
      },
    ],
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send(error.message);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent: " + info.response);
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
