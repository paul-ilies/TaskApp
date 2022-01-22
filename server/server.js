const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");
const path = require("path");
const { connectDB } = require("./db");


dotenv.config({ path: path.resolve(__dirname, "./.env") })
connectDB()
const server = http.createServer(app);

server.listen(process.env.PORT || 5000, () => {
    console.log("Server is running")
})