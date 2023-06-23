const express = require("express");
const router = express.Router();

const landingRouter = require('./api/landing/landing.index');

router.use('/landing',landingRouter);

module.exports = router;