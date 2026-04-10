const gymIcon = L.icon({
  iconUrl: "icons/gym_icon.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -30]
});

const parkIcon = L.icon({
  iconUrl: "icons/park_icon.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -30]
});

const foodIcon = L.icon({
  iconUrl: "icons/rest.png",
  iconSize: [30, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -30]
});





const map = L.map("map").setView([0, 0], 13);


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);


navigator.geolocation.getCurrentPosition(
  (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    map.setView([lat, lon], 14);

    // User marker
    L.marker([lat, lon])
      .addTo(map)
      .bindPopup("📍 You are here")
      .openPopup();

    fetchNearbyPlaces(lat, lon);
  },
  () => alert("Location access denied")
);

// Fetch places using Overpass API
async function fetchNearbyPlaces(lat, lon) {
  const query = `
[out:json];
(
  node["amenity"="gym"](around:600,${lat},${lon});
  node["leisure"="fitness_centre"](around:600,${lat},${lon});

  node["leisure"="park"](around:600,${lat},${lon});
  way["leisure"="park"](around:600,${lat},${lon});

  node["amenity"="restaurant"](around:600,${lat},${lon});
);
out center;
`;


  const url = "https://overpass-api.de/api/interpreter";

  const res = await fetch(url, {
    method: "POST",
    body: query
  });

  const data = await res.json();

  data.elements.forEach(place => {
    let label = "Place";

    let icon = foodIcon;


if (place.tags.amenity === "gym" || place.tags.leisure === "fitness_centre") {
  icon = gymIcon;
  label = "🏋️ Gym";
}

if (place.tags.leisure === "park") {
  icon = parkIcon;
  label = "🌳 Park";
}

if (place.tags.amenity === "restaurant") {
  icon = foodIcon;
  label = "🥗 Restaurant";
}

L.marker([place.lat || place.center.lat, place.lon || place.center.lon], { icon })
  .addTo(map)
  .bindPopup(`<b>${label}</b><br>${place.tags.name || "Unnamed"}`);

  });
}
