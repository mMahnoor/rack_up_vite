const express = require("express");
const router = express.Router();
// const services = require("../services");
const controllers = require("../controllers");

// ------------------------------------all spaces list API-----------------------------------------//
router.get('/allSpaces', controllers.commonController.allSpacesController);

//-------------------------- Sign In --------------------------//
router.get("/userData", controllers.commonController.userDataController);

///---------------------------Email Verification--------------------------///
router.get('/email-verification/:id/:token', controllers.commonController.verify);


module.exports = router;
