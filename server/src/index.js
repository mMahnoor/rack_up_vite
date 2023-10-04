require('dotenv').config();

const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const Institute = require('./models/institutes');

// const Work = require('./models/projects');

const Space = require('./models/spaces');


const app = express();

const port = 5000;

app.use(cors());

//adding a middleware function to convert data to json format
app.use(express.json());

// ------------------------------------Admin Registration API-----------------------------------------//
//define api for new institute/admin creation
app.post('/newAdmin',async(req, res)=>{
    console.log(req.body);
    const newInstitute = new Institute({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone:req.body.phone,
        password: req.body.password
    });
    const Admin = await newInstitute.save();
    res.status(201).json({ _id: Admin._id });
    // res.json(Admin);
});


// ------------------------------------Supervisor Registration API-----------------------------------------//

app.post('/newSupervisor',async(req, res)=>{
    console.log(req.body);
    const update = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    };
    try{
        const spaceName = await Space.findOne({"name":req.body.institute}).exec();
        console.log(spaceName);
        if(!spaceName) return res.status(404).send("Space not found");

        if (!spaceName.supervisors) {
            spaceName.supervisors = {};
          }
        spaceName.supervisors[req.body.email] = update;

        /*By default, Mongoose does not track changes to subdocuments (including objects within an object)
        and automatically save them to the database. When you push an item to an array, Mongoose tracks
        this change and can save it to the database. However, when you modify an object within a document,
        Mongoose may not automatically detect the change and save it to the database. To address this issue, 
        you can use Mongoose's .markModified() method to explicitly mark the object as modified before saving 
        the document.*/

        spaceName.markModified('supervisors');

        await spaceName.save();

        res.status(200).json(spaceName);

    }catch (error){
        console.error(error);
        return res.status(500).send("Internal server error")
    }
});


// ------------------------------------Student Registration API-----------------------------------------//

app.post('/newStudent',async(req, res)=>{
    console.log(req.body);
    const update = { 
        name: req.body.name,
        student_id: req.body.student_id,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
     };
    try {
        // Find a document based on the "institute" field
        const spaceName = await Space.findOne({"name": req.body.institute}).exec();
        
        if (!spaceName) {
          return res.status(404).send('Space not found');
        }
    
        // Add the new object to the "students" array field
        // spaceName.students = update;
        spaceName.students.push(update);

        // Save the updated space document
        const newStudent = await spaceName.save();

        console.log(spaceName)
        return res.status(200).json(spaceName);
      
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
    
});

// ------------------------------------Project Upload API-----------------------------------------//
//define api for new project work upload
app.post('/uploadWork',async(req, res)=>{
    console.log(req.body);

    // Here we will get request for the user category i.e student or supervisor
    // And put condition for the two types of update objects  

    //for students work
    const update1 = {
        title: req.body.title,
        supervisor: req.body.supervisor,
        team:req.body.team,
        description: req.body.description,
        files: req.body.files
    };
    //for supervisors work
    const update2 = {
        title: req.body.title,
        team:req.body.team,
        description: req.body.description,
        files: req.body.files
    };

    try{
        const spaceName = await Space.findOne({"name":req.body.institute}).exec();
        
        if(!spaceName) return res.status(404).send("Space not found");

        if (!spaceName.projects) {
            spaceName.projects = {};
        }
        if(req.body.category=="Student"){
            if(!spaceName.projects.students) spaceName.projects.students={};
            spaceName.projects.students[req.body.email] = update1;
        }
        else if(req.body.category=="Teacher") {
            if(!spaceName.projects.supervisors) spaceName.projects.supervisors={};
            spaceName.projects.supervisors[req.body.email] = update2;
        }
        /*By default, Mongoose does not track changes to subdocuments (including objects within an object)
        and automatically save them to the database. When you push an item to an array, Mongoose tracks
        this change and can save it to the database. However, when you modify an object within a document,
        Mongoose may not automatically detect the change and save it to the database. To address this issue, 
        you can use Mongoose's .markModified() method to explicitly mark the object as modified before saving 
        the document.*/

        spaceName.markModified('projects');

        await spaceName.save();

        res.status(200).json(spaceName);

    }catch (error){
        console.error(error);
        return res.status(500).send("Internal server error")
    }
    
});

// ------------------------------------Space creation API-----------------------------------------//
// define api for new space creation
app.post('/newSpace',async(req, res)=>{
    console.log(req.body);
    const newSpace = new Space({
        name: req.body.name,
        // students: [[]],
        supervisors: {placeholder: null},
        projects: {placeholder: null}
    });
    console.log(newSpace.students)
    const createdSpace = await newSpace.save();
    res.json(createdSpace);
})

//connect to mongodb cluster in atlas
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(port, ()=>{
        console.log(`App is listening to port: ${port}`)
    });}
)
