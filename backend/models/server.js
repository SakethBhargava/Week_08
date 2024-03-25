// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/events", require("./routes/events"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
