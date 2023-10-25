const models = require("../../models");

exports.newStudent = async({category, role, name, email, student_id, phone, password, institute})=>{
    
    const update = { 
        name: name,
        student_id: student_id,
        email: email,
        phone: phone,
        password: password
    };
    try {
        // Find a document based on the "institute" field
        const spaceName = await models.Institutes.findOne({"name": institute}).exec();
        
        if (!spaceName) {
          return res.status(404).send('Space not found');
        }
    
        const newUser = new models.Users({category, role, name, email, student_id, phone, password, institute})
        await newUser.save();
        if(!spaceName.students) spaceName.students={};
        spaceName.students[newUser._id] = update;
        spaceName.markModified('students');

        // Save the updated space document
        const newStudent = await spaceName.save();

        return newStudent;
      
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
    
}