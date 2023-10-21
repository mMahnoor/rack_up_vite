const models = require("../../models");

exports.uploadWork = async(req, res)=>{
    console.log(req.body);

    const {title, team, supervisor, description, files, email, category, institute} = req.body;

    try{
        const spaceName = await models.Institutes.findOne({"name":req.body.institute}).exec();
        
        if(!spaceName) return res.status(404).send("Space not found");

        if (!spaceName.projects) {
            spaceName.projects = {};
        }
        if(req.body.category=="Student"){
            const newProject = new models.Projects({title, team, supervisor, description, files, email, category, institute})
            await newProject.save();
            if(!spaceName.projects.students) spaceName.projects.students={};
            spaceName.projects.students[req.body.email] = newProject;
        }
        else if(req.body.category=="Supervisor") {
            const newProject = new models.Projects({title, team, description, files, email, category, institute})
            await newProject.save();
            if(!spaceName.projects.supervisors) spaceName.projects.supervisors={};
            spaceName.projects.supervisors[req.body.email] = newProject;
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
    
}