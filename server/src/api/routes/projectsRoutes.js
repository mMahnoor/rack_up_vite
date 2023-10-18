const express = require("express");
const router = express.Router();
const controllers = require("../controllers")

// ------------------------------------Project Upload API-----------------------------------------//

router.post('/uploadWork', controllers.uploadWork.uploadWork);

//-------------------------Post a Review------------------------//
router.post('/reviews', controllers.reviews.reviews);

module.exports = router;