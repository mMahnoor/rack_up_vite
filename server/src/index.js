require('dotenv').config();

const express = require('express');

const cors = require('cors');

const cookieParser = require('cookie-parser');

const app = express();

const routes = require("./api/routes");

app.use(cors());

//adding a middleware function to convert data to json format
app.use(express.json());
app.use(cookieParser());

const connectDB = require("./config/connectMongo");
connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to Rack Up App. Explore what you can do with it!')
})
app.use('/', routes.adminRoutes);
app.use('/', routes.userRoutes);
// app.use('/', routes.projectsRoutes);
app.use('/', routes.commonRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
})