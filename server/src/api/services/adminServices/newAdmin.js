const models = require("../../models");

exports.newAdmin = async({category, name, email, address, phone, password})=>{
    
    const newInstitute = new models.Institutes({
        category: category,
        name: name,
        email: email,
        address: address,
        phone: phone,
        password: password
    });
    const Admin = await newInstitute.save();
    return Admin;
    // res.json(Admin);
}