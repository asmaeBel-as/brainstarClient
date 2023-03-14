const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const EmailSchema = new Schema({
  email: String,
  file: String,
});

const EmailModel = model("Recruit", EmailSchema);

module.exports = EmailModel;
