const express = require("express");
const router = express.Router();
const controllers = require("../controllers");
const middleware = require("../middlewares");

// ------------------------------------Project Upload API-----------------------------------------//

router.post('/uploadWork', middleware.JWT.validateToken, controllers.uploadWork.uploadWork);

//-------------------------Post a Review------------------------//
router.post('/reviews', middleware.JWT.validateToken, controllers.reviews.reviews);

module.exports = router;


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