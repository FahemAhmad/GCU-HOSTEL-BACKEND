const express = require("express");
const router = express.Router();
const { Permission } = require("../modals/permissions");

router.get("/", async (req, res) => {
  const perm = await Permission.find();
  res.status(201).json(perm);
});

router.post("/addPermission", (req, res) => {
  const perm = new Permission();
  perm
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

router.put("/", async (req, res) => {
  const permissions = await Permission.findOne();

  console.log(permissions.formOn);
  permissions.formOn = !permissions.formOn;
  permissions.save();

  res.status(201).json(permissions);
});

module.exports = router;
