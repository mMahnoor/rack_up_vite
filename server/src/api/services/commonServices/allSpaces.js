const models = require("../../models");

exports.allSpaces = async(req, res)=>{
    
    try{
      const spaces = await models.Spaces.find();
      if(!spaces) return res.status(404).send('Collection not found.');
      res.status(200).json(spaces);
    } catch(error){
      res.status(500).send("server side error")
    }
    
}