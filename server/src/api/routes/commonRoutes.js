const express = require("express");
const router = express.Router();
const services = require("../services");

// ------------------------------------Admin Registration API-----------------------------------------//
//define api for new institute/admin creation
router.get('/allSpaces', services.allSpaces.allSpaces);

//-------------------------- Sign In --------------------------//
router.get("/userData", services.userData.userData);


module.exports = router;
