const Location = require('../models/location');

function getAllLocations(req, res) {
const locations = Location.getAllLocations();
res.json(locations);
}

function getLocationById(req, res) {
const id = Number(req.params.id);
const location = Location.getLocationById(id);

if (location) {
res.json(location);
} else {
res.status(404).json({ message: 'Local não encontrado!' });
}
}

function createLocation(req, res) {
const { name, latitude, longitude } = req.body;
const location = Location.createLocation(name, latitude, longitude);
res.status(201).json(location);
}

function updateLocation(req, res) {
const id = Number(req.params.id);
const { name, latitude, longitude } = req.body;
const location = Location.updateLocation(id, name, latitude, longitude);

if (location) {
res.json(location);
} else {
res.status(404).json({ message: 'Local não encontrado!' });
}
}

function deleteLocation(req, res) {
const id = Number(req.params.id);
const deleted = Location.deleteLocation(id);

if (deleted) {
res.json({ message: 'Local removido com sucesso!' });
} else {
res.status(404).json({ message: 'Local não encontrado!' });
}
}

module.exports = {
getAllLocations,
getLocationById,
createLocation,
updateLocation,
deleteLocation
};