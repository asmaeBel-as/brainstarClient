const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const Email = require("./models/Email");
const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary").v2;
const app = express();
const PORT = 4000;
const salt = bcrypt.genSaltSync(10);
const secret = "fgjlgka546yfgmlzqefoovnlmlkerf";
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/postblog", express.static(__dirname + "/postblog"));
mongoose.connect(
  "mongodb+srv://blog:MrJ3Cmgcq8ac986Z@cluster0.nb2qz68.mongodb.net/?retryWrites=true&w=majority"
);
//adminsumit@123brain    this is the password
// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./api/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const blogStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./api/postblog");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
const postblog = multer({ storage: blogStorage });

cloudinary.config({
  cloud_name: "dlfntcxew",
  api_key: "369615854988766",
  api_secret: "ape8w8Z1MC17aeUYZFWyRZH7x2c",
});
// Route handler for sending email
app.post("/send-email", upload.single("file"), async (req, res) => {
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
  const parts = filename.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  const postDoc = await Email.create({
    email,
    firstName,
    lastName,
    phone,
    message,
    skype,
    budget,
    file: newPath,
  });
  res.json(postDoc);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});
app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.post("/post", postblog.single("file"), async (req, res) => {
  const { title, summary, content } = req.body;
  const result = await cloudinary.uploader.upload(req.file.path);
  const postDoc = await Post.create({
    title,
    summary,
    content,
    file: result.secure_url,
  });
  res.json(postDoc);
});

app.get("/post", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 }).limit(20);
  res.json(posts);
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id);
  res.json(postDoc);
});

app.get("/send-email", async (req, res) => {
  const emails = await Email.find().sort({ createdAt: -1 }).limit(20);
  res.json(emails);
});

app.put("/post", postblog.single("file"), async (req, res) => {
  
   
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;
   
    const postDoc = await Post.findById(id);
    let fileUrl = postDoc.file; // keep the original file URL unless a new file is uploaded
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      fileUrl = result.secure_url;
    }
    await postDoc.updateOne({
      title,
      summary,
      content,
      file: fileUrl,
    });

    res.json(postDoc);
  });
});
app.delete("/post/:id", async (req, res) => {
  const { id } = req.params;

  // check if the post exists
  const postDoc = await Post.findById(id);
  if (!postDoc) {
    return res.status(404).json({ error: "Post not found" });
  }

  // delete the post from the database
  await postDoc.deleteOne();

  res.json({ message: "Post deleted successfully" });
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
//MrJ3Cmgcq8ac986Z
//mongodb+srv://blog:MrJ3Cmgcq8ac986Z@cluster0.nb2qz68.mongodb.net/?retryWrites=true&w=majority
