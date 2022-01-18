const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");

const UserModel = require("../models/UserModel");
const FollowerModel = require("../models/FollowerModel");
const NotificationModel = require("../models/NotificationModel");
const ChatModel = require("../models/ChatModel");
const userPng =
  "https://res.cloudinary.com/codeamphi/image/upload/v1640847269/profile-placeholder_s1biy6.png";

router.post("/", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body.user;

  if (!isEmail(email)) return res.status(401).send("Invalid Email");

  if (password !== confirmPassword) {
    return res.status(401).send("Password doesn't match");
  }

  if (password.length < 6) {
    return res.status(401).send("Password must be atleast 6 characters");
  }

  try {
    let user;
    user = await UserModel.findOne({ email: email.toLowerCase() });
    if (user) {
      return res.status(401).send("User already registered");
    }

    user = new UserModel({
      name,
      email: email.toLowerCase(),
      password,
      profilePicUrl: userPng,
    });

    user.password = await bcrypt.hash(password, 10);
    await user.save();

    await new FollowerModel({
      user: user._id,
      followers: [],
      following: [],
    }).save();

    await new NotificationModel({ user: user._id, notifications: [] }).save();
    await new ChatModel({user: user._id, chats: []}).save();

    const payload = { userId: user._id };
    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json(token);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;
