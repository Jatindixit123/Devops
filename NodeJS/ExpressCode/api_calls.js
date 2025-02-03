const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;
const URL = "https://newsapi.org/v2/top-headlines"


app.get("/api", async (req, res) => {
    try {
        const response = await axios.get(URL, {
            params: {
                country: 'us',
                category: "business",
                apikey: "695e07af402f4b119f0703e9b19f4683"
            }
        });
        const news = response.data.articles.map((article) => article.title);
        let html = `<h1>Top Business Headlines in US</h1>`;
        html += '<ul>';
        news.forEach((headline) => {
            html += `<li>${headline}</li>`
        });
        html += '</ul>';
        res.send(html);
    } catch(err) {
        console.log("Error :",err);
    }
})

app.listen(PORT, () => {
    console.log("Server started at PORT:",PORT);
})