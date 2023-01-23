const User = require("../models/userModel");

const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).send({ error: "Email already exists." });
    }
    res
      .status(500)
      .send({ error: "An error occurred while creating the user." });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    if (error.name === "UserNotFoundError") {
      return res.status(401).send({ error: "Invalid credentials." });
    }
    res.status(500).send({ error: "An error occurred while logging in." });
  }
};

const logout = async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $pull: {
          tokens: { token: req.token },
        },
      }
    );
    res.send();
  } catch (error) {
    res.status(500).send({ error: "An error occurred while logging out." });
  }
};

module.exports = { createUser, loginUser, logout };
