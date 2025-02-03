const express = require("express");

const app = express();

// / - index page / home page
app.use("/", (req, res, next) => {
    console.log("Express App running...");
    res.send("<h1>Hello from Express...</h1>");
    next();
});

// app.use((req, res, next) => {
//     // next - it's like a funnel through which request process
//     console.log("This is inside middleware...");
//     next(); // only after adding next(), it allows request to continue to next middleware
// });

app.use("/products", (req, res, next) => {
    // console.log(req);
    console.log("showing Products page");
    // res.send("<h1>Showing Products...</h1>");
    // console.log(res);
});

app.use("/login", (req, res) => {
    console.log("Login Page...");
    // res.send("<h1>Login Page...</h1>");
})



app.listen(5678);
