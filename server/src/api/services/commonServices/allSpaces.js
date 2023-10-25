const models = require("../../models");

exports.allSpaces = async()=>{
    
  const spaces = await models.Spaces.find();
  return spaces;

}