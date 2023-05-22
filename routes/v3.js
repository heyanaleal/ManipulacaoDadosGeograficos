const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// listar todos os places
router.get('/places', locationController.getAllLocations);

//listar places por id 
router.get('/places/:id', locationController.getLocationById);

//criar places
router.post('/places', locationController.createLocation);

//atualizar places
router.put('/places/:id', locationController.updateLocation);

//deletar places
router.delete('/places/:id', locationController.deleteLocation);

module.exports = router;