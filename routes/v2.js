const express = require('express');
const router = express.Router();
const placeController = require('../controllers/placeController');

// listar todos os places
router.get('/places', placeController.getAllPlaces);

// listar place por id  
router.get('/places/:id', placeController.getPlaceById);

module.exports = router;
