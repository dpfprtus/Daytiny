const router = require("express").Router();
const landingController = require("./landing.controller");

router.post("/survey", landingController.createInfo);

module.exports = router;
