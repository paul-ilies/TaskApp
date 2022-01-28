const express = require("express");
const auth = require("../middleware/auth")
const { createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
} =
    require
        ("../controllers/taskController");

const router = express.Router();

router.post("/task/v1", auth, createTask)
router.get("/tasks/v1", auth, getAllTasks)
router.get("/tasks/:id/v1", auth, getTaskById)
router.patch("/tasks/:id/v1", auth, updateTask)
router.delete("/tasks/:id/v1", auth, deleteTask)

module.exports = router