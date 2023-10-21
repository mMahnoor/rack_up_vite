const express = require("express");
const router = express.Router();
const services = require("../services");

// ----------------------------- Sign Up ---------------------------//

router.post('/newUser', services.newUser.newUser);

// ------------------ Supervisor Registration API ------------------//

router.post('/newSupervisor', services.newSupervisor.newSupervisor);

// ------------------- Student Registration API --------------------//

router.post('/newStudent', services.newStudent.newStudent);

module.exports = router;