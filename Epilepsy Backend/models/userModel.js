const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    emailId: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    // active: {type: Boolean, default: true},
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "epilepsy_users",
    dbName: "epilepsy",
  }
);

module.exports = mongoose.model("User", UserSchema);
