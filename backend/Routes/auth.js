const express = require("express");
const { Users } = require("../models");
const router = express.Router();
const path = require("path");

//Used for default registration
router.post("/register", async (req, res) => {
  const result = await Users.findOne({
    where: { email: req.body.email },
  });
  if (result === null) {
    const UNID = uuid.v4();
    await Users.create({
      userUNID: UNID,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      university: req.body.university,
      creditCompleted: req.body.creditCompleted,
      currentCGPA: req.body.currentCGPA,
    });
    res.json({
      data: UNID,
      error: "",
    });
  } else {
    res.json({
      data: "",
      error: "Email Registered Already",
    });
  }
});

module.exports = router;
