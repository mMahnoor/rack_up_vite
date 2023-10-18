require('dotenv').config();

const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const app = express();

const port = 5000;

const routes = require("./api/routes");

app.use(cors());

//adding a middleware function to convert data to json format
app.use(express.json());

app.use('/', routes.adminRoutes);
app.use('/', routes.userRoutes);
app.use('/', routes.projectsRoutes);

//------------------------Project Works----------------------//
// app.get("/projects",(req, res)=>{

// })

//connect to mongodb cluster in atlas
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(port, ()=>{
        console.log(`App is listening to port: ${port}`)
    });}
)
