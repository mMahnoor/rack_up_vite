const models = require("../../models");

exports.newSpace = async(req, res)=>{
    console.log(req.body);
    const newSpace = new models.Spaces({
        name: req.body.name,
        description: req.body.description,
        // students: [[]],
        // supervisors: {placeholder: null},
        // projects: {placeholder: null}
    });
    // console.log(newSpace.students)
    const createdSpace = await newSpace.save();
    res.json(createdSpace);
}