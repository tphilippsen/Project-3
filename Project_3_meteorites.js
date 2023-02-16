// Get the endpoint
const url = "https://data.nasa.gov/api/views/gh4g-9sfh/rows.json?accessType=DOWNLOAD";

// Create a map object.
var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 2.5
  });


// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

buildDataset()

// Build function for the metadata
function buildDataset() {
  d3.json(url).then(function(info) {
    let dataset = info.data;

  console.log(dataset)


  // Filter for sample number
  let sampleArray = dataset.filter(sampleObj => sampleObj.id == sample);
  let result = sampleArray[0];

  // Use d3 to select the panel with id of `#sample-metadata`, clear existing metadata
  d3.select('#sample-metadata').html('');

  // Inside the loop use d3 to append new tages for each key-value in the metadata

  for (key in result) {

    // take d3 selection and append text

    d3.select('#sample-metadata').append('h6').text(`${key}: ${result[key]}`);
  })
}; 

