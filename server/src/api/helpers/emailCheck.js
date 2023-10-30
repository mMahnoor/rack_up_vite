exports.checkEmail = async({collection, email}) => {
    //checking if email already exist
    const emailcheck = await collection.findOne({"email" : email}).exec();
    return emailcheck;
}