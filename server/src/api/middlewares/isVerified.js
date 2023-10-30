const models = require('../models')

exports.check = async(req, res, next) => {
    const email = req.body.email;
    const info = await models.Users.findOne({email: email}).exec();
    if(!info) return res.status(401).send("Unauthorized access!");
    if(!info.isVerified) return res.status(401).send("Email not verified");
    next();
}