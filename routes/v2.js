// routes/v2.js
const express = require('express');
const router = express.Router();
const placeController = require('../controllers/placeController');

router.get('/places', placeController.getAllPlaces);
router.get('/places/:id', placeController.getPlaceById);

module.exports = router;
