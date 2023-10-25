const adminServices = require("../services")

exports.newAdminController = async(req, res) => {
    const {name, email, address, phone, password} = req.body;
    try{
        const newAdmin = await adminServices.newAdmin.newAdmin({name, email, address, phone, password});
        res.status(200).send(newAdmin);
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