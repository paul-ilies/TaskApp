const express = require("express");
const {
    createUser,
    loginUser,
    logout
} =
    require
        ("../controllers/userControllers");
const auth = require("../middleware/auth")

const router = express.Router();



router.post("/signup", createUser);
router.post("/login", loginUser);
router.post("/logout", auth, logout)

module.exports = router