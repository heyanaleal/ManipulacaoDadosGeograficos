const express = require('express');
const router = express.Router();

const places = [
  {
    id: 1,
    name: "Parque da Cidade - São José dos Campos",
    latitude: -23.221112,
    longitude: -45.899678
  },
  {
    id: 2,
    name: "Praça Ulisses Guimarães - São José dos Campos",
    latitude: -23.180038,
    longitude: -45.884357
  },
  {
    id: 3,
    name: "Shopping Center Vale - São José dos Campos",
    latitude: -23.186732,
    longitude: -45.884104
  },
  {
    id: 4,
    name: "Parque Santos Dumont - São José dos Campos",
    latitude: -23.197864,
    longitude: -45.883261
  },
  {
    id: 5,
    name: "Bosque dos Eucaliptos - São José dos Campos",
    latitude: -23.222935,
    longitude: -45.816283
  }
];
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const x = lat2 - lat1;
  const y = lon2 - lon1;
  return Math.sqrt(x ** 2 + y ** 2);
};

router.get('/places/:id1/distancia/:id2', (req, res) => {
  const id1 = Number(req.params.id1);
  const id2 = Number(req.params.id2);

  const place1 = places.find(place => place.id === id1);
  const place2 = places.find(place => place.id === id2);

  if (place1 && place2) {
    const distance = calculateDistance(
      place1.latitude,
      place1.longitude,
      place2.latitude,
      place2.longitude
    );
    res.json({ distance: distance.toFixed(2) });
  } else {
    res.status(404).json({ message: 'Lugar(es) não encontrado(s)!' });
  }
});

router.get('/search', (req, res) => {
  const { latitude, longitude, radius } = req.query;
  const centerLat = Number(latitude);
  const centerLon = Number(longitude);
  const searchRadius = Number(radius);

  const results = places.map(place => {
    const distance = calculateDistance(
      centerLat,
      centerLon,
      place.latitude,
      place.longitude
    );

    if (distance <= searchRadius) {
      return { ...place, distance };
    }
  }).filter(Boolean);

  res.json(results);
});

module.exports = router;
