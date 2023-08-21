require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const Institute = require('./models/institutes');

// const Space = require('./models/spaces');

const app = express();

const port = 5000;

//adding a middleware function to convert data to json format
app.use(express.json());

//define api for new institute/admin creation
app.post('/newAdmin',async(req, res)=>{
    console.log(req.body);
    const newInstitute = new Institute({
        name: req.body.name,
        email: req.body.email,
        phone:req.body.phone,
        password: req.body.password
    });
    const Admin = await newInstitute.save();
    res.status(201).json({ _id: Admin._id });
    // res.json(Admin);
});

//define api for new space creation
// app.post('/newSpace',async(req, res)=>{
//     console.log('response');
//     const newSapce = new Space({
//         name: 'Leading University',
//         email: 'info@lus.ac.bd',
//         password: 'admin@lu123'
//     });
//     const createdSpace = await newSapce.save();
//     res.json(createdSpace);
// })

//connect to mongodb cluster in atlas
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(port, ()=>{
        console.log(`App is listening to port: ${port}`)
    });}
)
