require("dotenv").config();

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
