let nextLocationId = 1;

const locations = [
{
id: 1,
name: 'Parque da Cidade',
latitude: -23.221112,
longitude: -45.899678
},
{
id: 2,
name: 'Praça Ulisses Guimarães',
latitude: -23.180038,
longitude: -45.884357
},
];

function getAllLocations() {
return locations;
}

function getLocationById(id) {
return locations.find(location => location.id === id);
}

function createLocation(name, latitude, longitude) {
const location = { id: nextLocationId++, name, latitude, longitude };
locations.push(location);
return location;
}

function updateLocation(id, name, latitude, longitude) {
const location = locations.find(location => location.id === id);

if (location) {
location.name = name;
location.latitude = latitude;
location.longitude = longitude;
return location;
} else {
return null;
}
}

function deleteLocation(id) {
const index = locations.findIndex(location => location.id === id);

if (index !== -1) {
locations.splice(index, 1);
return true;
} else {
return false;
}
}

module.exports = {
getAllLocations,
getLocationById,
createLocation,
updateLocation,
deleteLocation
};