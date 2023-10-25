const models = require("../../models");
// const middleware = require("../../middlewares");

exports.userData = async({email, password})=>{
    const loginCreds = {
        email: email,
        password: password
    }
    const userInfo = await models.Users.findOne({"email":loginCreds.email}).exec();
    if(!userInfo) return ({ error: "User not found!" });
    if(userInfo.password!=loginCreds.password){
        // return ({ error: "Wrong Password Combination!" });
        return ({ error: "Wrong Password Combination!" });
    } else{
        return userInfo;
        // const accessToken = middleware.JWT.createTokens(loginCreds);

        // res.cookie("access-token", accessToken, {
        //     maxAge: 2592000,
        //     httpOnly: true,
        // });

        // res.status(200).json(userInfo);
    }

}