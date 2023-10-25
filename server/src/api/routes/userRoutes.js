const express = require("express");
const router = express.Router();
const controllers = require("../controllers");
const middleware = require("../middlewares");


// ----------------------------- Sign Up ---------------------------//

router.post('/newUser', middleware.regDataValidation.validate, controllers.userController.newUserController);

// ------------------------------------Project Upload API-----------------------------------------//

router.post('/uploadWork', middleware.JWT.validateToken, controllers.userController.uploadWorkController);

//-------------------------Post a Review------------------------//
router.post('/reviews', middleware.JWT.validateToken, controllers.userController.reviewController);

// #####request body for uploadWork
// {
//     "title": "Project2",
//     "supervisor": "ZMA",
//     "team": "Mahnur Akther",
//     "description": "Nothing",
//     "files": ["Array1","Array1"],
//     "email": "mahnur@gmail.com",
//     "category": "Student",
//     "institute": "XYZ University"
//   }
module.exports = router;