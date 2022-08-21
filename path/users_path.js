const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const userCtrl = require('../path/users_path');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;