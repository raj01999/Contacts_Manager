const mongoose = require("mongoose");
const express = require("express");
const User = require("../../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = new express.Router();

// sign up route
router.post("/user/signup", async (req, res) => {
  try {
    const regUser = await User.find({ email: req.body.email });
    if (regUser.length != 0) {
      return res.status(404).json({
        status: "failed",
        message: "User already registered",
      });
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const saveData = new User({
      ...req.body,
      password: hashPassword,
    });

    res.json({
      status: "sucess",
      data: await saveData.save(),
    });
  } catch (e) {
    res.status(403).json({
      status: "failed",
      message: e.message,
    });
  }
});

// sign in route
router.post("/user/signin", async (req, res) => {
  const logUser = await User.find({ email: req.body.email });

  if (logUser.length == 0) {
    return res.status(404).json({
      status: "failed",
      message: "User Not Registered",
    });
  }
  const isValid = await bcrypt.compare(req.body.password, logUser[0].password);

  if (!isValid) {
    return res.status(401).json({
      status: "failed",
      message: "Wrong Password",
    });
  }

  var token = jwt.sign({ ...logUser[0] }, process.env.SECRET_KEY);

  res.status(200).json({
    status: "sucess",
    email: logUser[0].email,
    token,
  });

  console.log(isValid);
});

module.exports = router;
