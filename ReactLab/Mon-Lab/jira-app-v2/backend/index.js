const express = require("express");
const app = express();

const PORT = 9898;

app.listen(PORT, () => {
    console.log("Server started at :",PORT);
})