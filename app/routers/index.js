const express = require('express');
const { mainController } = require("../controllers")
const router = express.Router();

router.get('/', mainController.homePage)

module.exports = router;