const express = require("express");
const WorkoutModel = require("../models/workout");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "GET a single workout" });
});

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await WorkoutModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "PATCH a workout" });
});

module.exports = router;
