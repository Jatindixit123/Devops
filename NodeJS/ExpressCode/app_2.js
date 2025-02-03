const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended:false}));


app.use("/", (req, res, next) => {
    console.log("this will always run...");
    next();
});

app.use("/products", (req, res, next) => {
    console.log("Products page...");
    res.send("<h1>This is products page...</h1>");
})

app.get("/search", (req, res, next) => {
    console.log("search query...");
    console.log(req.body);
    res.send("<h1>Search Results...</h1>");
});


app.use("/", (req, res, next) => {
    console.log("Redirect to home page...");
    res.send("<h1>Hello from Express</h1>");
});

app.listen(5555, () => {
    console.log("Server started...");
})