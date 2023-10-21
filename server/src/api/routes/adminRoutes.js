const express = require("express");
const router = express.Router();
const services = require("../services");

// ------------------------------------Admin Registration API-----------------------------------------//
//define api for new institute/admin creation
router.post('/newAdmin', services.newAdmin.newAdmin);

// ------------------------------------Space creation API-----------------------------------------//
// define api for new space creation
router.post('/newSpace', services.newSpace.newSpace);

router.get('/mySpace', services.mySpace.mySpace)

module.exports = router;
