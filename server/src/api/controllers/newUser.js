const models = require("../models")

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
        if(req.body.category=="Student") {
            update['student_id'] = req.body.student_id;
            const newUser = new models.Users(update)
            await newUser.save();
            res.status(200).json(newUser);
        }
        else if(req.body.category=="Teacher") {
            const newUser = new models.Users(update)
            await newUser.save();
            res.status(200).json(newUser);
        }
        
    }catch (error){
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
}