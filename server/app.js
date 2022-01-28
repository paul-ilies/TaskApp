const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path")
const tasksRouter = require("./routers/taskRouter");
const userRouter = require("./routers/userRouter");
const dotenv = require("dotenv");
const { connectDB } = require("./db");

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(cors());

dotenv.config({ path: path.resolve(__dirname, "./.env") })
connectDB()



app.use(tasksRouter)
app.use(userRouter)

module.exports = app;