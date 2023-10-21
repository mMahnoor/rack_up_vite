const express = require("express");
const router = express.Router();
const services = require("../services");
const middleware = require("../middlewares");

// ------------------------------------Project Upload API-----------------------------------------//

router.post('/uploadWork', middleware.JWT.validateToken, services.uploadWork.uploadWork);

//-------------------------Post a Review------------------------//
router.post('/reviews', middleware.JWT.validateToken, services.reviews.reviews);

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