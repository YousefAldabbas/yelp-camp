const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

//@desc   Register new user
//@route  POST /api/users/
//@access Puplic
const register = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password) {
    res.status(400);
    throw new Error("Please provide username and password");
  }
  const user = await User.findOne({ username });
  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    username,
    password: hashedPassword,
  });
  console.log(newUser, "new user");
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      token: generateToken(newUser._id),
    });
  }
  res.status(400).json({
    message: "Something went wrong",
  })
  throw new Error("User could not be created");
});

//@desc   login user
//@route  POST /api/users/login
//@access Puplic
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("Please provide username and password");
  }
  const user = await User.findOne({ username });
  if (!user) {
    res.status(400);
    throw new Error("User does not exist");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400);
    throw new Error("Incorrect password");
  }
  res.status(200).json({
    _id: user._id,
    username: user.username,
    token: generateToken(user._id),
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d", //change later
  });
};

module.exports = {
  register,
  login,
};
