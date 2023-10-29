const {sign, verify} = require('jsonwebtoken');
require('dotenv').config();

exports.createTokens = (loginCreds) => {
    const accessToken = sign(loginCreds, process.env.SECRET_TOKEN, {
      expiresIn: 1 * 24 * 60 * 60 * 1000,
    });
    return accessToken;
};

exports.validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];
  
    if (!accessToken)
      return res.status(400).json({ error: "User not Authorized!" });
  
    try {
      const validToken = verify(accessToken, process.env.SECRET_TOKEN);
      if (validToken) {
        req.authorized = true;
        console.log(accessToken);
        return next();
      }
    } catch (err) {
      return res.status(400).json({ error: err });
    }
};
  