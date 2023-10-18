const models = require("../models");

exports.userData = async(req, res)=>{
    const loginCreds = {
        email: req.body.email,
        password: req.body.password
    }
    const userInfo = await models.Users.findOne(loginCreds).exec();
    if(!userInfo) return res.status(404).send('User not found.');
    res.status(200).json(userInfo);
}