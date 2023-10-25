const express = require("express");
const router = express.Router();
// const services = require("../services");
const controllers = require("../controllers");

// ------------------------------------common APIs-----------------------------------------//
//define api for all spaces list
router.get('/allSpaces', controllers.commonController.allSpacesController);

//-------------------------- Sign In --------------------------//
router.get("/userData", controllers.commonController.userDataController);


module.exports = router;
