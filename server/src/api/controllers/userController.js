const userServices = require("../services");
const models = require("../models");
const helper = require("../helpers");
const crypto = require('crypto');
require('dotenv')

exports.newUserController = async(req, res) => {
    try{
        const newUser = (req.body.role=="Student") ? await userServices.newStudent.newStudent(req.body) 
        : await userServices.newSupervisor.newSupervisor(req.body);
        console.log("newUser:  "+newUser);
        if(newUser) {
            const token = new models.Tokens({
                reqId: newUser._id,
                token: crypto.randomBytes(16).toString("hex"),
            });
            const setToken = await token.save();
            if(setToken){
                //send email to the user
                //with the function coming from the sendEmail.js service file
                //message containing the user id and the token to help verify their email
                const transport = await helper.mailing.sendingMail({
                    from: "noreply@gmail.com",
                    to: "mahnurakther@gmail.com",
                    subject: "Account Verification Link",
                    text: `Hello, ${req.body.name}! Please verify your email by clicking the following link :
                          https://rackup-q3rm.onrender.com/api/common/email-verification/${newUser._id}/${setToken.token} `,
                });
    
                res.status(200).send("Verification link is sent. Please verify your email.")
            } else {
                return res.status(400).send("token not created");
            }
            // res.status(200).send(newUser);
        } else {
            res.status(409).send("Details are not correct");
        }
        
        
    } catch(error){
        res.status(500).send(error);
    }
    
}

exports.uploadWorkController = async(req, res) => {
    const {title, team, supervisor, description, files, email, role, institute} = req.body;

    try{
        const newWork = await userServices.uploadWork.uploadWork({title, team, supervisor, description, files, email, role, institute});
        if(!newWork) return res.status(404).send("Space not found!");
        res.status(200).send(newWork);

    } catch(error) {
        res.status(500).send(error);
    }
}

exports.reviewController = async(req, res) => {
    const {projectId, userId, rating, reviewText} = req.body;

    try{
        const newReview = await userServices.reviews.reviews({projectId, userId, rating, reviewText});
        if(!newReview) return res.status(404).send("Project not found!");
        res.status(200).send(newReview);

    } catch(error) {
        res.status(500).send(error);
    }
}

exports.myProjectsController = async(req, res) => {
    const email = req.body.email;
    try{
        const projects = await userServices.myProjectsService.myProjects({email});
        console.log("projects:  "+projects);
        if(projects.length===0) return res.status(404).send("No projects found!");
        res.status(200).send(projects);
    } catch(error) {
        res.status(500).send(error);
    }
}

