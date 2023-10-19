require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();

const routes = require("./api/routes");

app.use(cors());

//adding a middleware function to convert data to json format
app.use(express.json());

const connectDB = require("./config/connectMongo");
connectDB();

app.use('/', routes.adminRoutes);
app.use('/', routes.userRoutes);
app.use('/', routes.projectsRoutes);

//------------------------Project Works----------------------//
// app.get("/projects",(req, res)=>{

// })
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
})