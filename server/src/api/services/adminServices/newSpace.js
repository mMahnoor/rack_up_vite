const models = require("../../models");

exports.newSpace = async({name, description})=>{
    
    const newSpace = new models.Spaces({
        name: name,
        description: description,
    });

    const createdSpace = await newSpace.save();
    return createdSpace;
}