const UserModel = require("../models/user");

const loginUser = async (req, res) => {
  res.json({ message: "login user" });
};

const signupUser = async (req, res) => {
  res.json({ message: "signup user" });
};

module.exports = { loginUser, signupUser };
