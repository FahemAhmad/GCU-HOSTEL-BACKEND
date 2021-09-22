const express = require("express");
const router = express.Router();
const { Applicant } = require("../modals/applicant");
const multer = require("multer");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("Invalid Image Type");

    if (isValid) {
      uploadError = null;
    }

    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];

    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});
const uploadOptions = multer({ storage: storage });

/*
  
      get list of the applicants

*/
router.get("/", async (req, res) => {
  const applicantsList = await Applicant.find();

  res.status(200).send(applicantsList);
});

/*
  
      change the status

*/
router.put("/", async (req, res) => {
  console.log(req.body.rollNo);
  const applicant = await Applicant.findOne({ rollNo: req.body.rollNo });

  if (applicant) {
    if (applicant.status === "Pending") {
      applicant.status = "Approved";
    } else {
      applicant.status = "Pending";
    }

    applicant.save();
    res.status(200).send(applicant);
  }
});

/*
  
     Add new user

*/
router.post("/", uploadOptions.array("documents", 10), async (req, res) => {
  const checkRollNo = await Applicant.find({ rollNo: req.body.rollNo });

  const files = req.files;
  let imagePath = [];
  const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;

  if (files) {
    files.map((file) => {
      imagePath.push(`${basePath}${file.filename}`);
    });
  }

  if (checkRollNo.length === 0) {
    const applicant = new Applicant({
      name: req.body.name,
      fatherName: req.body.fatherName,
      email: req.body.email,
      rollNo: req.body.rollNo,
      obtainMarks: req.body.obtainMarks,
      totalMarks: req.body.totalMarks,
      percentage: req.body.percentage,
      grade: req.body.grade,
      address: req.body.address,
      phoneNo: req.body.phoneNo,
      status: req.body.status,
      documents: imagePath,
    });

    await applicant.save();
    res.status(200).send(applicant);
  } else {
    res
      .status(300)
      .send("There is already an application with this roll number");
  }
});

module.exports = router;
