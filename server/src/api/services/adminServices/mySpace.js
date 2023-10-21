const models = require("../../models");

exports.mySpace = async(req, res)=>{
    
    try{
      const space = await models.Institutes.findOne({"name":req.body.institute}).exec();
      if(!space) return res.status(404).send('Space not found.');
      res.status(200).json(space);
    } catch(error){
      res.status(500).send("server side error")
    }
    
}