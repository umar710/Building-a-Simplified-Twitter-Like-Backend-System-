const express = require("express");

const router = express.Router();
const UserAuthSchema = require("../models/UsersAuth");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

require("dotenv").config();

//1. User Registration
router.post("/register", async (request, response) => {
  try {
    const { username, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const dbUser = await UserAuthSchema.findOne({ username: username });
    if (dbUser === null) {
      const newUser = new UserAuthSchema({
        username: username,
        password: hashedPassword,
      });
      const postResponseData = await newUser.save();
      response.status(200).json(postResponseData);
    } else {
      response.status(400);
      response.send("User Already Exist..");
    }
  } catch (e) {
    response.status(500).json(`Internal Server Error : ${e.message}`);
  }
});

//2. User Login
router.post("/login", async (request, response) => {
  try {
    const { username, password } = request.body;
    const dbUser = await UserAuthSchema.findOne({ username: username });
    if (dbUser === null) {
      response.status(400).json("Invalid User");
    } else {
      const isPasswordMatched = await bcrypt.compare(password, dbUser.password);
      if (isPasswordMatched === true) {
        const payload = { username: username };
        const jwtToken = jwt.sign(payload, process.env.SECRET_TOKEN);
        response.status(200).json({ jwtToken });
      } else {
        response.status(401).json("Invalid Password");
      }
    }
  } catch (e) {
    response.status(500).json(`Internal Server Error : ${e.message}`);
  }
});

module.exports = router;
