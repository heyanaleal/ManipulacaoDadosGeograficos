const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

router.get('/places', locationController.getAllLocations);
router.get('/places/:id', locationController.getLocationById);
router.post('/places', locationController.createLocation);
router.put('/places/:id', locationController.updateLocation);
router.delete('/places/:id', locationController.deleteLocation);

module.exports = router;