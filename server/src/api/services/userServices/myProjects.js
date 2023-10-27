const models = require("../../models")

exports.myProjects = async({email}) => {
    try{
        const projects = await models.Projects.find({"email": email}).exec();
        // if(!projects) return false;
        return projects;
    } catch(error) {
        console.log(error)
    }
}