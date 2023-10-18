const models = require("../models");

exports.newAdmin = async(req, res)=>{
    console.log(req.body);
    const newInstitute = new models.Institutes({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone:req.body.phone,
        password: req.body.password
    });
    const Admin = await newInstitute.save();
    res.status(201).json({ _id: Admin._id });
    // res.json(Admin);
}