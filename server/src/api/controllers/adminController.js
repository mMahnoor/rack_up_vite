const adminServices = require("../services");
const models = require("../models");
const helper = require("../helpers");
const crypto = require('crypto');

exports.newAdmin = async(req, res) => {
    const {name, email, address, phone, password} = req.body;
    try{
        const new_admin = await adminServices.newAdmin.newAdmin({name, email, address, phone, password});
        if(new_admin) {
            const token = new models.Tokens({
                reqId: newAdmin._id,
                token: crypto.randomBytes(16).toString("hex"),
            });
            const setToken = await token.save();
            if(setToken){
                //send email to the admin
                //with the function coming from the sendEmail.js service file
                //message containing the user id and the token to help verify their email
                helper.mailing.sendingMail({
                    from: "noreply@gmail.com",
                    to: `${email}`,
                    subject: "Account Verification Link",
                    text: `Hello, ${name} Please verify your email by
                          clicking this link :
                          https://rackup-q3rm.onrender.com/api/common/email-verification/${newAdmin._id}/${setToken.token} `,
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

exports.mySpace = async(req, res) => {
    const {name} = req.body;
    try{
        const my_space = await adminServices.mySpace.mySpace({name});
        if(!my_space) return res.status(404).send("Space not found!");
        res.status(200).send(my_space);
    } catch(error){
        res.status(500).send(error);
    }
}

exports.newSpace= async(req, res) => {
    const {name, description} = req.body;
    try{
        const space = await adminServices.newSpace.newSpace({name, description});
        res.status(200).send(space);
    } catch(error){
        res.status(500).send(error);
    }
}

// exports.updateUser = async(req, res) => {


// }

exports.deleteUser = async(req, res) => {
    const docs = req.docIdsToDelete;

    const condition = { _id: { $in: docs } };

    try{
        const result = await models.Users.deleteMany(condition);

        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Documents deleted successfully' });
        } else {
            res.status(404).json({ message: 'No matching documents found' });
        }
    } catch(error) {
        res.status(500).json({ message: 'Error deleting documents', error: err });
  
    }
    
    
}