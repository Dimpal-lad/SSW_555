const app = require("express")();
const http = require("http").Server(app);
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Dimpal_22:dimpal%402201@epilepsy.cuj9k1p.mongodb.net/"
);

const User = require("./models/userModel");

async function insert() {
  await User.create({
    name: "Dimpal",
    email: "abc@gmail.com",
    password: "324@dfdf",
  });
}

insert();

http.listen(3000, function () {
  console.log("Server is running");
});
