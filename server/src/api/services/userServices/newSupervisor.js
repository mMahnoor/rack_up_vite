const models = require("../../models");

exports.newSupervisor = async(supUpdate)=>{
    
    const update = {
        category: supUpdate.category,
        role: supUpdate.role,
        name: supUpdate.name,
        email: supUpdate.email,
        phone: supUpdate.phone,
        password: supUpdate.password,
        institute: supUpdate.institute
    };
    try{
    
        const spaceName = await models.Institutes.findOne({"name": supUpdate.institute}).exec();
        // console.log(spaceName);
        if(!spaceName) return false;

        const newUser = new models.Users(update)
        await newUser.save();

        if(!spaceName.supervisors) spaceName.supervisors=[];
        spaceName.supervisors.push(newUser._id);

        // Save the updated space document
        const newSupervisor = await spaceName.save();

        return newSupervisor;
    } catch(error) {
        return false;
    }

}