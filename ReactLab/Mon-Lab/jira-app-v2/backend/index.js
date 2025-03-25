// npm install express mongoose dotenv nodemon cors
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB_NAME} = require("./config/config");
const MONGODB_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.zxvoo.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log("MONGODB Connected successfully...");
})
.catch((err) => {
    console.log("Failed to connect with MongoDB",err);
})


// Get teams data
const schema = mongoose.Schema();
const Teams = mongoose.model("teams", schema);

app.get("/teams", async (req, res) => {
    try {
        const data = await Teams.find(); // will fetch all the documents of Teams collection
        res.status(200).json(data);
    } catch (error) {
        console.log("Error while fetching Teams data",error);
    }
})


const PORT = process.env.PORT || 9898;

app.listen(PORT, () => {
    console.log("Server started at :",PORT);
})