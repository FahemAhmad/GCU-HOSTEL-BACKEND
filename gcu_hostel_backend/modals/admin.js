const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  adminId: String,
  name: String,
  email: String,
});

exports.Admin = mongoose.model("Admin", adminSchema);
