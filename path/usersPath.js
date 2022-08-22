const express = require('express');
const router = express.Router();

const userCtrls = require('../controllers/usersCtrls');

router.post('/signup', userCtrls.signup);
router.post('/login', userCtrls.login);

module.exports = router;