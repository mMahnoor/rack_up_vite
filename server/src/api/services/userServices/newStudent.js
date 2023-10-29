const models = require("../../models");

exports.newStudent = async(studUpdate)=>{
    
    const update = { 
        category: studUpdate.category,
        role: studUpdate.role,
        name: studUpdate.name,
        email: studUpdate.email,
        student_id: studUpdate.student_id,
        phone: studUpdate.phone,
        password: studUpdate.password,
        institute: studUpdate.institute, 
        isVerified: false
    };
    try {
        // Find a document based on the "institute" field
        const spaceName = await models.Institutes.findOne({"name": studUpdate.institute}).exec();
        
        if (!spaceName) {
          return false;
        }
    
        const newUser = new models.Users(update)
        await newUser.save();

        if(!spaceName.students) spaceName.students=[];
        spaceName.students.push(newUser._id);

        // Save the updated space document
        const newStudent = await spaceName.save();

        return newStudent;
      
    } catch (error) {
        console.error(error);
        return false;
    }
    
}