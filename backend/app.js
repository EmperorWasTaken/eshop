const express = require('express');
const morgan = require('morgan');
require('dotenv/config');

const app = express();
const api = process.env.API_URL;
app.use(express.json()); //Middleware
app.use(morgan('tiny')); // For logging


app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: "bubblegum",
        image: "some_url",
    }
    res.send(product);
});

app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
});

app.listen(3000, ()=>{
    console.log("Server is running now http://localhost:3000");
});