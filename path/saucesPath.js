// Appel du module express
const express = require('express');
const path = express.Router();

// Appel du middleware de sécurité
const auth = require('../middleware/auth');

// Appel du middleware pour l'ajout d'image 
const multer = require('../middleware/multer_config');


const saucesCtrls = require('../controllers/sauceCtrls');

// récupère toutes les sauces 
path.get('/', auth, saucesCtrls.getAllSauce);

// récupère une seul sauce
path.get('/:id', auth,  saucesCtrls.getOneSauce);

// création d'une sauce
path.post('/', auth, multer, saucesCtrls.createSauce);

// Modifie une sauce par son id
path.put('/:id', auth, saucesCtrls.modifySauce);

// Supprime une sauve
path.delete('/:id', auth,  saucesCtrls.deleteSauce);

module.exports = path;