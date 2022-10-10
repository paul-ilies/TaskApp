const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const tasksRouter = require("./routers/taskRouter");
const userRouter = require("./routers/userRouter");
const dotenv = require("dotenv");
const { connectDB } = require("./db");

const app = express();

app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());

dotenv.config({ path: path.resolve(__dirname, "./.env") });
connectDB();

app.use(tasksRouter);
app.use(userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "front-end", "build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "..", "front-end", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}
app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
