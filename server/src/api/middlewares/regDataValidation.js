// const middleware = require("../middlewares");
const validations = require("../validations");

exports.validate = async(req, res, next) => {
    const body = req.body;
    try{
        if(req.body.category==='User'){
            const schema = (req.body.role==="Student") ? validations.schema.studentSchema : validations.schema.supervisorSchema;
            // const schema = validations.schema.studentSchema;
            await schema.validate(body);
            next();
        }
        if(req.body.category==='Admin'){
            const schema = validations.schema.adminSchema;
            await schema.validate(body);
            next();
        }
    } catch(error){
        return res.status(400).send(error);
    }
}