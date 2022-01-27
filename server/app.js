const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path")
const tasksRouter = require("./routers/taskRouter");
const userRouter = require("./routers/userRouter");

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(cors());


app.use("/", express.static("/front-end/build"))
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/front-end/build/index.html"))
})

app.use(tasksRouter)
app.use(userRouter)

module.exports = app;