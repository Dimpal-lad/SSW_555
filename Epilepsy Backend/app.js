const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);

// Enable CORS
app.use(cors());
app.use(express.json());

// Load environment variables if needed
require("dotenv").config({ path: "epilepsy.env" });

// Connect to MongoDB
const connectDB = require("./connectiondb");
connectDB();

// Import route handlers
const signupController = require("./controllers/userController");
const loginController = require("./controllers/loginController");

// Routes
app.post("/api/signup", signupController);
app.post("/api/login", loginController);

http.listen(3000, function () {
  console.log("Server is running");
});

app.get("/", () => {});
