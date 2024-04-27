const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { emailId, password } = req.body;

    // Check if user with the given email exists
    const user = await User.findOne({ emailId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if password matches
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // User authenticated, generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    // Return token along with user data
    res.status(200).json({ token, user });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = login;
