const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  roomNo: {
    type: Number,

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

exports.Transaction = mongoose.model("Transaction", transactionSchema);
