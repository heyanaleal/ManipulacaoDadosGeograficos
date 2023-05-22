const placeModel = require('../models/place');

function getAllPlaces(req, res) {
  const places = placeModel.getAllPlaces();
  res.json(places);
}

function getPlaceById(req, res) {
  const id = Number(req.params.id);
  const place = placeModel.getPlaceById(id);

  if (place) {
    res.json(place);
  } else {
    res.status(404).json({ error: 'Place not found!' });
  }
}

module.exports = {
  getAllPlaces,
  getPlaceById
};