// Add console.log to check to see if our code is working.
console.log("working");

// // Add a Marker to the Map  
// var marker = L.marker([51.5, -0.09]).addTo(map);

// We create the map object with otpions.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790]
// ];

// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "red"
}).addTo(map);


// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Add a marker to the map for the Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//   radius: 100
// }).addTo(map);

// L.circleMarker([34.0522, -118.2437]).addTo(map);
//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437], {
//   radius:300,
//   color: "black",
//   fillColor: '#ffffa1'
// }).addTo(map); 

// Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location).addTo(map);
// });


// Loop through the cities array and create one marker for each city.
// In the logic.js file, edit the forEach function and add the bindPopup() method. Inside the parentheses of the bindPopup() method, we'll retrieve the name of the city, state, and population.
// cityData.forEach(function(city) {
//   console.log(city)
//   // L.marker(city.location)
//   L.circleMarker(city.location, {
//     radius:city.population/100000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });


// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data ?? <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "red"
// }).addTo(map);

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "yellow"
}).addTo(map);
// Then we add our 'graymap' tile layer to the map...
streets.addTo(map);

