const commonServices = require("../services");
const middleware = require("../middlewares");

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