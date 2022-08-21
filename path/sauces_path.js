const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const saucesCtrl = require('../path/sauces_path');

const multer = require('../middleware/multer_config');
//const sauce = require('../models/SauceModel');

// Create sauce
//router.post('/create', saucesCtrl.create);
router.get('/', auth, saucesCtrl.getAllSauces);
router.post('/', auth, multer, saucesCtrl.createSauces);
router.get('/:id', auth,  saucesCtrl.getOneSauces);
router.put('/:id', auth, saucesCtrl.updateSauces);
router.delete('/:id', auth,  saucesCtrl.deleteSauces);

module.exports = router;