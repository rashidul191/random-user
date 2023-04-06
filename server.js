const app = require(".");

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("listening port at : ", port)
})