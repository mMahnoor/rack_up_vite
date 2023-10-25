const userServices = require("../services")

exports.newUserController = async(req, res) => {
    if(req.body.role=="Student"){
        const {category, role, name, email, student_id, phone, password, institute} = req.body;
        try{
            const newUser = await userServices.newStudent.newStudent({category, role, name, email, student_id, phone, password, institute});
            if(!newUser) return res.status(404).send("Space not found!");
            res.status(200).send(newUser);
        } catch(error){
            res.status(500).send(error);
        }
    }
    if(req.body.role=="Supervisor"){
        const {category, role, name, email, phone, password, institute} = req.body;
        try{
            const newUser = await userServices.newSupervisor.newSupervisor({category, role, name, email, phone, password, institute});
            if(!newUser) return res.status(404).send("Space not found!");
            res.status(200).send(newUser);
        } catch(error){
            res.status(500).send(error);
        }
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

