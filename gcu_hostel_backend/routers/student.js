const express = require("express");
const { Student } = require("../modals/student");
const { Room } = require("../modals/room");
const router = express.Router();

router.post("/", async (req, res) => {
  const checkStudent = await Student.findOne({ rollNo: req.body.rollNo });

  const checkRoom = await Room.findById(req.body.roomNo);

  if (checkStudent === null && checkRoom !== null) {
    const student = new Student({
      name: req.body.name,
      fatherName: req.body.fatherName,
      major: req.body.major,
      rollNo: req.body.rollNo,
      roomNo: req.body.roomNo,
      messNo: req.body.messNo,
      email: req.body.email,
      password: req.body.password,
      roomNo: req.body.roomNo,
    });

    await student
      .save()
      .then((studentData) => {
        res.status(201).json(studentData);
      })
      .catch((er) => {
        res.status(500).json({
          error: er,
          success: false,
        });
      });

    checkRoom.studentRollNo.push(req.body.rollNo);

    checkRoom.save();
  } else {
    res.status(400).json("Already a student/Room Doesnt Exist");
  }
});

module.exports = router;
