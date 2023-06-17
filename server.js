const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const workoutRouter = require("./routes/workouts");
const userRouter = require("./routes/users");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/workouts", workoutRouter);
app.use("/api/users", userRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
