const models = require("../models");

exports.allSpaces = async(req, res)=>{
    
    const spaces = await models.Spaces.find({}, (err, documents) => {
        if (err) {
          console.error('Error:', err);
          // Handle the error
        } else {
          console.log('Documents:', documents);
          // Do something with the retrieved documents
        }
    });
    // if(!spaces) return res.status(404).send('Collection not found.');
    

}