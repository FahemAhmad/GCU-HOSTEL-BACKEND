const mongoose = require("mongoose");

const applicantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  obtainMarks: {
    type: Number,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  percentage: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    length: 11,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  documents: [String],
});

applicantSchema.virtual("id").get(function () {
  return this.rollNo.toString();
});

applicantSchema.set("toJSON", {
  virtuals: true,
});

exports.Applicant = mongoose.model("Applicant", applicantSchema);
