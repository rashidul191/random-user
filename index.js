const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./router/user.router")



// middleware
app.use(cors())
app.use(express.json())

// root router
app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message:"random user project is running"
    })
})

app.use("/user", userRouter)

// not found router
app.all("*", (req, res) => {
    res.status(400).json({
        status: "failed",
        message:"Not Found Router"
    })
})

module.exports = app;
