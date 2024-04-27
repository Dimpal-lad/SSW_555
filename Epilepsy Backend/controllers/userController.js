const User = require("../models/userModel");

const signup = async (req, res) => {
  try {
    const { name, emailId, password } = req.body;

    // Check if user with the given email already exists
    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Create new user
    const newUser = await User.create({ name, emailId, password });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = signup;
