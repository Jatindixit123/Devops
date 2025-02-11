const express = require("express");
const path = require("path");
const app = express();
const adminRoutes = require("./routes/admin");

const PORT = 3535;

const students = [
    {s_id: 101, s_name: "John", s_sem: 4, s_course: "B.tech"},
    {s_id: 102, s_name: "Smith", s_sem: 4, s_course: "B.tech"},
    {s_id: 103, s_name: "Adam", s_sem: 4, s_course: "B.tech"},
    {s_id: 104, s_name: "Jack", s_sem: 4, s_course: "B.tech"},
    {s_id: 105, s_name: "Alex", s_sem: 4, s_course: "B.tech"},
    {s_id: 106, s_name: "John", s_sem: 4, s_course: "B.tech"}
]


app.get('/search', (req, res) => {
    const query = req.query.text.toLowerCase();
    console.log("Query is :",query);
    const results = students.filter(obj => obj.s_name.toLowerCase().includes(query));
    console.log("Results: ", results);
    res.json(results);
});

// app
// - instance of express
// - also known as global middle ware
// - mainly used for engine, server, port...

app.use("/admin/", adminRoutes);
// app.use("student");
// app.use("faculty");

app.use(express.static(path.join(__dirname, "public")));

// Navigate to Home Page
app.use("/", (req,res) => {
    // res.send("<h1>Home Page of Application</h1>");
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log("Server started at : ",PORT);
})