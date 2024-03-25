// backend/db.js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/event_management", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

module.exports = mongoose;
