const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// ----------------------------- Sign Up ---------------------------//

router.post('/newUser', controllers.newUser.newUser);

// ------------------ Supervisor Registration API ------------------//

router.post('/newSupervisor', controllers.newSupervisor.newSupervisor);

// ------------------- Student Registration API --------------------//

router.post('/newStudent', controllers.newStudent.newStudent);

//-------------------------- Sign In --------------------------//
router.get("/userData", controllers.userData.userData);

module.exports = router;