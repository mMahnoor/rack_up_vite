const models = require("../../models");

exports.newSupervisor = async({category, role, name, email, phone, password, institute})=>{
    
    const update = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };
    
    const spaceName = await models.Institutes.findOne({"name": institute}).exec();
    console.log(spaceName);
    if(!spaceName) return res.status(404).send("Space not found");

    const newUser = new models.Users({category, role, name, email, phone, password, institute})
    await newUser.save();
    if(!spaceName.supervisors) spaceName.supervisors={};
    spaceName.supervisors[newUser._id] = update;

    /*By default, Mongoose does not track changes to subdocuments (including objects within an object)
    and automatically save them to the database. When you push an item to an array, Mongoose tracks
    this change and can save it to the database. However, when you modify an object within a document,
    Mongoose may not automatically detect the change and save it to the database. To address this issue, 
    you can use Mongoose's .markModified() method to explicitly mark the object as modified before saving 
    the document.*/
    spaceName.markModified('supervisors');

    // Save the updated space document
    const newSupervisor = await spaceName.save();

    return newSupervisor;

}