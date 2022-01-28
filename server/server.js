const http = require("http");
const app = require("./app");
const express = require("express");
const path = require("path")


const server = http.createServer(app);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "front-end", "build", "index.html"))
})
app.use(express.static(path.join(__dirname, "..", "front-end", "build")))

server.listen(process.env.PORT || 5000, () => {
    console.log("Server is running")
})