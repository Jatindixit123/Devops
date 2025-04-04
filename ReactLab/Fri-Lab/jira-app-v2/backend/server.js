require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const empRoutes = require("./routes/empRoutes");
const PORT = 8989;

app.use(cors());
app.use(express.json());

const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB_NAME} = require("./config/config");
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.zxvoo.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("MongoDB Connected...");
})
.catch((err) => {
    console.log("Failed to connect with MongoDB", err);
});

const schema = mongoose.Schema();
const Teams = mongoose.model("teams", schema);

// Get teams data from Mongo
app.get("/teams", async (req, res) => {
    try {
        const data = await Teams.find();
        res.status(200).json(data);
    } catch (error) {
        console.log("Error while fetching teams data",error);
    }
});

app.use("/api/emp", empRoutes);


app.listen(PORT, () => {
    console.log("Server started at PORT :",PORT);
})