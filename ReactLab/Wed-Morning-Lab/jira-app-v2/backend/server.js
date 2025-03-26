// npm install mongoose express
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3333;

app.use(cors());

const USERNAME = 'admin';
const PASSWORD = 'admin';
const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.zxvoo.mongodb.net/jira-wed-db1?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(URI)
.then(() => {
    console.log("MONGODB Connected successfully...");
})
.catch((err) => {
    console.log("Failed to connect MongoDB",err);
}) 

const schema = new mongoose.Schema({}, {strict:false});
const Teams = mongoose.model('teams', schema);

app.get("/teams", async(req, res) => {
    try {
        const docs = await Teams.find();
        res.json(docs);
        console.log("Data from MongoDB :",docs);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
});

app.listen(PORT, () => console.log("Server started at :",PORT));