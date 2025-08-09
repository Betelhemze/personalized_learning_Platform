const express = require("express"); // creating an express server
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const mongoose = require("mongoose"); // creating a connection with the mongoose database
const connectionDB = require("./config/db.js");
connectionDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/admin", require("./routes/adminRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));
app.use(errorHandler);

app.listen(5000, () => {
  console.log("server running on port 5000!");
});
