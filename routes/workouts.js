const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workout-controller");

const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "PATCH a workout" });
});

module.exports = router;
