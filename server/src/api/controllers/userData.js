const models = require("../models");
const middleware = require("../middlewares");

exports.userData = async(req, res)=>{
    const loginCreds = {
        email: req.body.email,
        password: req.body.password
    }
    const userInfo = await models.Users.findOne({"email":loginCreds.email}).exec();
    if(!userInfo) return res.status(404).send('User not found.');
    if(userInfo.password!=loginCreds.password){
        res
        .status(400)
        .json({ error: "Wrong Password Combination!" });
    } else{
        const accessToken = middleware.JWT.createTokens(loginCreds);

        res.cookie("access-token", accessToken, {
            maxAge: 2592000,
            httpOnly: true,
        });

        res.status(200).json(userInfo);
    }

}