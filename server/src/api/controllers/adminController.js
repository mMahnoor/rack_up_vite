const adminServices = require("../services");
const models = require("../models");
const helper = require("../helpers");
const crypto = require('crypto');

exports.newAdminController = async(req, res) => {
    const {name, email, address, phone, password} = req.body;
    try{
        const newAdmin = await adminServices.newAdmin.newAdmin({name, email, address, phone, password});
        if(newAdmin) {
            const token = new models.Tokens({
                reqId: newAdmin._id,
                token: crypto.randomBytes(16).toString("hex"),
            });
            let setToken = await token.save();
            if(setToken){
                //send email to the admin
                //with the function coming from the sendEmail.js service file
                //message containing the user id and the token to help verify their email
                helper.mailing.sendingMail({
                    from: "no-reply@example.com",
                    to: `${email}`,
                    subject: "Account Verification Link",
                    text: `Hello, ${name} Please verify your email by
                          clicking this link :
                          http://localhost:8080/api/users/verify-email/${newAdmin._id}/${setToken.token} `,
                });
            } else {
                return res.status(400).send("token not created");
            }
            res.status(200).send(newAdmin);
        } else {
            res.status(409).send("Details are not correct");
        }
    
    } catch(error){
        res.status(500).send(error);
    }
}

exports.mySpaceController = async(req, res) => {
    const {name} = req.body;
    try{
        const mySpace = await adminServices.mySpace.mySpace({name});
        if(!mySpace) return res.status(404).send("Space not found!");
        res.status(200).send(mySpace);
    } catch(error){
        res.status(500).send(error);
    }
}

exports.newSpaceController = async(req, res) => {
    const {name, description} = req.body;
    try{
        const newSpace = await adminServices.newSpace.newSpace({name, description});
        res.status(200).send(newSpace);
    } catch(error){
        res.status(500).send(error);
    }
}