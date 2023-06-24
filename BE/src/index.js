const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const landingRouter = require("./api/landing/landing.index");

router.use("/user", landingRouter);

module.exports = router;
