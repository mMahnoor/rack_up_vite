const express = require("express");
const router = express.Router();
const controller = require("../controllers");
const middlewares = require("../middlewares");


// ------------------------------------Admin Registration API-----------------------------------------//
//define api for new institute/admin creation
router.post('/newAdmin', middlewares.regDataValidation.validate, middlewares.checkEmail.checkNewEmail, controller.adminController.newAdminController);

// ------------------------------------Space creation API-----------------------------------------//
// define api for new space creation
router.post('/newSpace', controller.adminController.newAdmin);

router.get('/mySpace', controller.adminController.mySpace);

// router.get('/users/update', );

router.get('/users/delete', controller.adminController.deleteUser);

// router.get('/mySpace', controller.adminController.mySpaceController)

module.exports = router;
