const commonServices = require("../services");
const middleware = require("../middlewares");
const models = require('../models');

exports.allSpacesController = async(req, res) => {
    
    try{
        const spaces = await commonServices.allSpaces.allSpaces();
        if(!spaces) res.status(404).send("spaces not found!");
        res.status(200).send(spaces);
    } catch(error){
        res.status(500).send(error);
    }
}

exports.userDataController = async(req, res) => {
    const {email, password} = req.body;
    try{
        const userData = await commonServices.userData.userData({email, password});
        if(userData.error) return res.status(404).send(userData.error);

        const accessToken = middleware.JWT.createTokens({email: email, password: password});

        res.cookie("access-token", accessToken, {
            maxAge: 1 * 24 * 60 * 60,
            httpOnly: true,
        });

        res.status(200).json(userData);
        
    } catch(error){
        res.status(500).send(error);
    }
}

exports.verify = async(req, res) => {
    try {
        const token = req.params.token;
    
        //find user by token using the where clause
        const usertoken = await models.Tokens.findOne({"reqId": req.params.id}).exec();
        console.log("usertoken: "+usertoken)
        //if token doesnt exist, send status of 400
        if (!usertoken.token===token) {
            return res.status(400).send({
                msg: "Your verification link may have expired. Please click on resend for verifying your Email.",
            });
  
        //if token exist, find the user with that token
        } else {
            const user = await models.Users.findOne({"_id": req.params.id }).exec();
            if (!user) {
                console.log(user);
        
                return res.status(401).send({
                    msg: "We were unable to find a user for this verification. Please SignUp!",
                });
        
            //if user is already verified, tell the user to login
            } else if (user.isVerified) {
            return res
                .status(200)
                .send("User has been already verified. Please Login");
    
            //if user is not verified, change the verified to true by updating the field
            } else {
            const updated = await models.Users.updateOne(
                { _id: usertoken.reqId },
                { isVerified: true },
                { new: true }
            );
            console.log(updated);
    
            //if not updated send error message
            if (!updated) {
                return res.status(500).send({ msg: err.message });
                //else send status of 200
            } else {
                return res
                .status(200)
                .send("Your account has been successfully verified");
            }
            }
        }
    } catch (error) {
        res.status(500).send(error);
    }
  
}