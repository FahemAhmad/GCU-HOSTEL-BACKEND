const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  roomNo: {
    type: Number,
    min: 0,
    max: 72,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  studentRollNo: [String],
  floor: {
    type: Number,
    required: true,
  },
});

exports.Room = mongoose.model("Room", roomSchema);
