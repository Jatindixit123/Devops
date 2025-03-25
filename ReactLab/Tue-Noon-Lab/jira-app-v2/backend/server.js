// npm install express mongoose cors dotenv nodemon
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB_NAME} = require("./config/config");
const app = express();

const PORT = 9999;

app.use(cors());

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.zxvoo.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Mongo DB Connected Successfully...")
})
.catch((err) => {
    console.log("Error while connecting MongoDB...");
});


const schema = mongoose.Schema();
const Teams = mongoose.model("teams", schema);

app.get("/teams", async (request, response) => {
    try {
        const data = await Teams.find();
        response.status(200).json(data);
    } catch (error) {
        console.log("Error while fetching teams data...");
    }
});

app.listen(PORT, () => console.log("Server started at PORT :",PORT));
