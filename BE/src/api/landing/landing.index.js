const router = require("express").Router();
const landingController = require("./landing.controller");

router.post("/phone", landingController.checkPhoneInfo);
router.post("/survey", landingController.createInfo);

module.exports = router;
