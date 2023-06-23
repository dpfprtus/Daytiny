const router = require("express").Router();
const landingController = rquire("./landing/landing.controller");

router.post('/:idx', landingController)

module.exports = router;