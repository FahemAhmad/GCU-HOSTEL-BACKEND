const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    requried: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  roomNo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  messNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

exports.Student = mongoose.model("Student", studentSchema);
