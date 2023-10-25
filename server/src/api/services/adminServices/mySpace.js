const models = require("../../models");

exports.mySpace = async({name})=>{
  const space = await models.Institutes.findOne({"name":name}).exec();
  
  return space;
    
}