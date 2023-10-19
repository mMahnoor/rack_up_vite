require('dotenv').config();
const mongoose = require('mongoose');

//connect to mongodb cluster in atlas
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Successfully connected!")
    } catch(err) {
        console.log("Connection failed: "+err)
    }
}

module.exports = connectDB;