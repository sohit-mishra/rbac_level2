const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const connectToMongodb = require('./config/db');
app.use(express.json());

connectToMongodb();

app.get('/', (req,res)=>{
    res.status(200).json({msg: "Hello World"});
})

app.listen(PORT , ()=>{
    console.log("Localhost is Working http://localhost:" + PORT);
})