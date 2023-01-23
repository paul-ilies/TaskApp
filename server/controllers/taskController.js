const Task = require("../models/tasksModel");

//create Task
const createTask = async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      owner: req.user._id,
    });
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send("An error occurred while creating the task.");
  }
};

//read all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user._id });
    res.send(tasks);
  } catch (error) {
    res.status(500).send("An error occurred while fetching the tasks.");
  }
};

//read task by id
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    }).orFail();
    res.send(task);
  } catch (error) {
    if (error.name === "DocumentNotFoundError") {
      res.status(404).send("Task not found.");
    } else {
      res.status(500).send("An error occurred while fetching the task.");
    }
  }
};

//update task by id and owner
const updateTask = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["title", "description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      context: "query",
    }).orFail();
    res.send(task);
  } catch (error) {
    if (error.name === "DocumentNotFoundError") {
      res.status(404).send("Task not found.");
    } else {
      res.status(500).send("An error occurred while updating the task.");
    }
  }
};

//delete task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    }).orFail();
    res.send(task);
  } catch (error) {
    if (error.name === "DocumentNotFoundError") {
      res.status(404).send("Task not found.");
    } else {
      res.status(500).send("An error occurred while deleting the task.");
    }
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
