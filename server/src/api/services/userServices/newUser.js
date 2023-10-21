const models = require("../../models")

exports.newUser = async(req, res)=>{
    const update = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        category: req.body.category,
        institute: req.body.institute
    }
    try{
        const spaceName = await models.Institutes.findOne({"name":req.body.institute}).exec();
        
        if(!spaceName) return res.status(404).send("Space not found");

        if(req.body.category=="Student") {
            update['student_id'] = req.body.student_id;
            const newUser = new models.Users(update)
            await newUser.save();
            if(!spaceName.students) spaceName.students={};
            spaceName.students[newUser._id] = update;
            spaceName.markModified('students');
            res.status(200).json(newUser);
        }
        else if(req.body.category=="Teacher") {
            const newUser = new models.Users(update)
            await newUser.save();
            if(!spaceName.supervisors) spaceName.supervisors={};
            spaceName.supervisors[newUser._id] = update;
            spaceName.markModified('supervisors');
            res.status(200).json(newUser);
        }

        await spaceName.save();
        
    }catch (error){
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
}