// 1. create server using express
// 2. connect with MongoDB using mongoose
// 3. Fetch data from MongoDB

// npm install express mongoose nodemon cors dotenv
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const empRoutes = require("./routes/empRoutes");
const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB_NAME} = require("./config/config");
const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.zxvoo.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("MONGODB Connected Successfully...");
})
.catch((err) => {
    console.log("Error while connecting MongoDB...");
})

const schema = mongoose.Schema();
const Teams = mongoose.model("teams", schema);

// Get teams data
app.get("/api/teams", async(request, response) => {
    try {
        const data = await Teams.find();
        response.status(200).json(data);
    } catch (error) {
        console.log("Error while fetching Teams from MongoDB...",error);
    }
})

app.use("/api/emp", empRoutes);

const PORT = 5656;
app.listen(PORT, () => console.log("Server started at PORT :",PORT));
