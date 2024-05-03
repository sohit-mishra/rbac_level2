const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.MONGO_URI;

const connectToMongodb = async()=>{
    try {
        await mongoose.connect(URL);
        console.log("Database is connected !");
    } catch (error) {
        console.log("Database is not Connected");
    }
}

module.exports = connectToMongodb;
