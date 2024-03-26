const router = require("express").Router();
let Task = require("../models/task");

// Get all tasks
router.route("/").get(async (req, res) => {
  try {
    const data = await Task.find();
    res.json(data);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error });
  }
});

// Add a task
router.route("/add").post(async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const priority = req.body.priority;
  const category = req.body.category;
  try {
    const newTask = new Task({ title, description, priority, category });

    await newTask.save();
    res.json("Task created");
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error });
  }
});

// Get a task by ID
router.route("/:id").get(async (req, res) => {
  try {
    const data = await Task.findById(req.params.id);
    res.json(data);
  } catch (error) {
    console.log({ error });
    res.status(400).json("Error: " + error);
  }
});

// Update a task by ID
router.route("/update/:id").post(async (req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
      task.title = req.body.title;
      task.description = req.body.description;
      task.priority = req.body.priority;
      task.category = req.body.category;
      task
        .save()
        .then(() => res.json("Task updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete a task by ID
router.route("/:id").delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
