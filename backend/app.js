require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const courseRoutes = require("./routes/Course");
const alumniRoutes = require("./routes/Alumni");
const placementRoutes = require("./routes/Placement");
const userRoutes = require("./routes/User");
const trainingRoutes = require("./routes/Training");
const paymentRoutes = require("./routes/Payment");
const colorStyle = require("cli-color");
const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

db.once("open", () => {
  console.log(colorStyle.green.bold("Connected to MongoDB successfully"));
});

app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/alumni", alumniRoutes);
app.use("/api/placements", placementRoutes);
app.use("/api/training", trainingRoutes);
app.use("/api/payment", paymentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(colorStyle.green.bold(`Server running on port ${PORT}`));
});
