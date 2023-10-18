const models = require("../models");

exports.newStudent = async(req, res)=>{
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
        const spaceName = await models.Spaces.findOne({"name": req.body.institute}).exec();
        
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
    
}