const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const EmailSchema = new Schema({
  email: String,
  username: String,
  weburl: String,
});

const EmailModel = model("Seo", EmailSchema);

module.exports = EmailModel;
