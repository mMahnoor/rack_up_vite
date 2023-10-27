const services = require("../services");
const models = require("../models")

exports.checkNewEmail = async(req, res, next) => {
    const collection = (req.body.category==="Admin") ? models.Institutes : models.Users;
    const email = req.body.email;
    const emailcheck = await services.checkEmail.checkEmail({collection, email});
    //if email exist in the database respond with a status of 409
    console.log(emailcheck);
    if (emailcheck) {
        return res.status(409).send("Authentication failed");
    }
    next();
    
    
}
