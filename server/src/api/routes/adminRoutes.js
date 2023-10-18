const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// ------------------------------------Admin Registration API-----------------------------------------//
//define api for new institute/admin creation
router.post('/newAdmin', controllers.newAdmin.newAdmin);

// ------------------------------------Space creation API-----------------------------------------//
// define api for new space creation
router.post('/newSpace', controllers.newSpace.newSpace);

module.exports = router;
