const express = require("express");
const router = express.Router();
const { Room } = require("../modals/room");

router.post("/", async (req, res) => {
  const checkRoom = await Room.findOne({ roomNo: req.body.roomNo });

  if (checkRoom === null) {
    const room = new Room({
      roomNo: req.body.roomNo,
      roomType: req.body.roomType,
      studentRollNo: req.body.studentRollNo,
      floor: req.body.floor,
    });

    room
      .save()
      .then((roomDet) => {
        res.status(201).json(roomDet);
      })
      .catch((er) => {
        res.status(500).json({
          error: er,
          success: false,
        });
      });
  } else {
    res.status(400).json("Already have the room");
  }
});

router.get("/", async (req, res) => {
  const rooms = await Room.find();
  res.send(rooms);
});

module.exports = router;
