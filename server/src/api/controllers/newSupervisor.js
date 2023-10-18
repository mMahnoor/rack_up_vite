const models = require("../models");

exports.newSupervisor = async(req, res)=>{
    console.log(req.body);
    const update = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    };
    try{
        const spaceName = await models.Spaces.findOne({"name":req.body.institute}).exec();
        console.log(spaceName);
        if(!spaceName) return res.status(404).send("Space not found");

        if (!spaceName.supervisors) {
            spaceName.supervisors = {};
          }
        spaceName.supervisors[req.body.email] = update;

        /*By default, Mongoose does not track changes to subdocuments (including objects within an object)
        and automatically save them to the database. When you push an item to an array, Mongoose tracks
        this change and can save it to the database. However, when you modify an object within a document,
        Mongoose may not automatically detect the change and save it to the database. To address this issue, 
        you can use Mongoose's .markModified() method to explicitly mark the object as modified before saving 
        the document.*/

        spaceName.markModified('supervisors');

        await spaceName.save();

        res.status(200).json(spaceName);

    }catch (error){
        console.error(error);
        return res.status(500).send("Internal server error")
    }
}