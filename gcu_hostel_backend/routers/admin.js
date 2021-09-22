const express = require("express");
const router = express.Router();
const { Admin } = require("../modals/admin");
const { Applicant } = require("../modals/applicant");
const { Student } = require("../modals/student");

//add a new admin
router.post("/", (req, res) => {
  const newAdmin = new Admin({
    name: req.body.name,
    adminId: req.body.id,
    email: req.body.email,
  });

  newAdmin
    .save()
    .then((product) => {
      res.status(201).json(product);
    })
    .catch((er) => {
      res.status(500).json({
        error: er,
        success: false,
      });
    });
});

//alot room
router.put("/roomalot", async (req, res) => {
  //check if student roll Num exist
  const student = await Student.findOne({ rollNo: req.body.rollNo });

  //check if room exist and full
});

module.exports = router;
