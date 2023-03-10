const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const EmailSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  phone: String,
  message: String,
  skype: String,
  file: String,
  budget: String,
});

const EmailModel = model("Email", EmailSchema);

module.exports = EmailModel;
