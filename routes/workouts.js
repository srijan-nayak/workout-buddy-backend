const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "GET a single workout" });
});

router.post("/", (req, res) => {
  res.json({ message: "POST a new workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "PATCH a workout" });
});

module.exports = router;
