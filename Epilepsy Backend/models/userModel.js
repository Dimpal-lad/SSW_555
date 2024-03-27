const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    // active: {type: Boolean, default: true},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", UserSchema);
