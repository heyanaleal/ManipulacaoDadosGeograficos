const places = [
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

function getAllPlaces() {
    return places;
}

function getPlaceById(id) {
    return places.find(place => place.id === id);
}

module.exports = {
    getAllPlaces,
    getPlaceById
};