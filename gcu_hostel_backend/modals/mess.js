const mongoose = require("mongoose");

const messSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  messNo: {
    type: Number,
    required: true,
  },
  breakfastStatus: {
    type: Boolean,
  },
  lunchStatus: {
    type: String,
  },
  dinnerStatus: {
    type: String,
    required: true,
  },
  breakfastUnit: {
    type: String,
    required: true,
  },
  lunchUnit: {
    type: String,
    required: true,
  },
  dinnerUnit: {
    type: String,
    required: true,
  },
  totalUnit: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

exports.Mess = mongoose.model("Mess", messSchema);
