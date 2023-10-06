require('dotenv').config();

const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const Institute = require('./models/institutes');

const Space = require('./models/spaces');

const User = require('./models/users');

const Work = require('./models/projects');

const Review = require('./models/reviews');


const app = express();

const port = 5000;

app.use(cors());

//adding a middleware function to convert data to json format
app.use(express.json());

/* ###################################### POST REQUESTS ############################################################################*/

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


app.post('/newUser', async(req, res)=>{
    const update = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        category: req.body.category,
        institute: req.body.institute
    }
    try{
        if(req.body.category=="Student") {
            update['student_id'] = req.body.student_id;
            const newUser = new User(update)
            await newUser.save();
            res.status(200).json(newUser);
        }
        else if(req.body.category=="Teacher") {
            const newUser = new User(update)
            await newUser.save();
            res.status(200).json(newUser);
        }
        
    }catch (error){
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
})

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
    const currentDate = new Date();

    // const update = {
    //     title: req.body.title,                              
    //     team:req.body.team,
    //     description: req.body.description,
    //     files: req.body.files,
    //     email: req.body.email,
    //     uploadedAt: currentDate,
    //     ratings: [],
    //     reviews: []
    // };
    const {title, team, supervisor, description, files, email, category, institute} = req.body;

    try{
        const spaceName = await Space.findOne({"name":req.body.institute}).exec();
        
        if(!spaceName) return res.status(404).send("Space not found");

        if (!spaceName.projects) {
            spaceName.projects = {};
        }
        if(req.body.category=="Student"){
            const newProject = new Work({title, team, supervisor, description, files, email, category, institute})
            await newProject.save();
            if(!spaceName.projects.students) spaceName.projects.students={};
            update.supervisor = req.body.supervisor;
            spaceName.projects.students[req.body.email] = newProject._id;
        }
        else if(req.body.category=="Teacher") {
            const newProject = new Work({title, team, description, files, email, category, institute})
            await newProject.save();
            if(!spaceName.projects.supervisors) spaceName.projects.supervisors={};
            spaceName.projects.supervisors[newProject._id] = update;
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
        // supervisors: {placeholder: null},
        // projects: {placeholder: null}
    });
    console.log(newSpace.students)
    const createdSpace = await newSpace.save();
    res.json(createdSpace);
});

//-------------------------Post a Review------------------------//
app.post('/reviews', async(req, res) => {
    const { projectId, userId, rating, reviewText } = req.body;

  try {
    const newReview = new Review({ projectId, userId, rating, reviewText });
    const savedReview = await newReview.save();

    const project = await Work.findById(req.body.projectId).exec();
    if(!project) return res.status(404).send("project not found");
    if(!project.ratings){
        project.ratings=[];
    }
    if(!project.reviews) project.reviews=[];
    project.ratings.push(req.body.rating);
    project.reviews.push(req.body.reviewText);

    const rate_review = await project.save();

    res.json(rate_review);
  } catch (error) {
    res.status(500).json({ error: 'Error creating review' });
  }
})

/* ############################################ GET REQUESTS #############################################################################*/

//---------------------------Login---------------------------//
app.get("/userData", async(req, res)=>{
    const loginCreds = {
        email: req.body.email,
        password: req.body.password
    }
    const userInfo = await User.findOne(loginCreds).exec();
    if(!userInfo) return res.status(404).send('User not found.');
    res.status(200).json(userInfo);
});


//------------------------Project Works----------------------//
app.get("/projects",(req, res)=>{

})

//connect to mongodb cluster in atlas
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(port, ()=>{
        console.log(`App is listening to port: ${port}`)
    });}
)
