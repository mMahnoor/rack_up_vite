const models = require("../../models");

exports.uploadWork = async({title, team, supervisor, description, files, email, role, institute})=>{
    const update = {title, team, supervisor, description, files, email, role, institute}
    // const {title, team, supervisor, description, files, email, category, institute} = {title, team, supervisor, description, files, email, category, institute};

    
    const spaceName = await models.Institutes.findOne({"name": institute}).exec();
    
    if(!spaceName) return spaceName;

    if (!spaceName.projects) {
        spaceName.projects = {};
    }
    if(role=="Student"){
        const newProject = new models.Projects(update)
        await newProject.save();
        if(!spaceName.projects.students) spaceName.projects.students={};
        spaceName.projects.students[email] = newProject._id;
    }
    else if(role=="Supervisor") {
        const newProject = new models.Projects(update)
        await newProject.save();
        if(!spaceName.projects.supervisors) spaceName.projects.supervisors={};
        spaceName.projects.supervisors[email] = newProject._id;
    }
    /*By default, Mongoose does not track changes to subdocuments (including objects within an object)
    and automatically save them to the database. When you push an item to an array, Mongoose tracks
    this change and can save it to the database. However, when you modify an object within a document,
    Mongoose may not automatically detect the change and save it to the database. To address this issue, 
    you can use Mongoose's .markModified() method to explicitly mark the object as modified before saving 
    the document.*/

    spaceName.markModified('projects');

    await spaceName.save();

    return spaceName;

    
}