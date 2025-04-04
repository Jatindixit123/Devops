// npm install express mongoose
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 8989;

const empRoutes = require("./routes/empRoutes");

app.use(cors());
app.use(express.json());

const USERNAME = 'admin';
const PASSWORD = 'admin';
const DB_NAME = 'jira-wed-db2';
const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.zxvoo.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(URI)
.then(() => {
    console.log("MONGODB Connected successfully...");
})
.catch((err) => {
    console.log("Error while connecting MongoDB :",err);
});


const schema = mongoose.Schema({});
const Teams = mongoose.model("teams", schema);

app.get("/teams", async(req, res) => {
    try {
        const docs = await Teams.find();
        res.status(200).json(docs);
    } catch (error) {
        console.log("Error while fetching teams data...",error);
    }
});

app.use("/api/emp", empRoutes);

app.listen(PORT, () => console.log("Server started at PORT :",PORT));
