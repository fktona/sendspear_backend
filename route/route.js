const express = require('express');
const {message} = require('../controller/email');
const router = express.Router();

router.post('/message' , message);

module.exports = router;

