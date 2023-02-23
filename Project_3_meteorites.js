// Get the endpoint
const url = "https://data.nasa.gov/api/views/gh4g-9sfh/rows.json?accessType=DOWNLOAD";

// worldMap.addTo(myMap);

  buildDataset()
// Build function for the metadata
function buildDataset() {
  d3.json(url).then(function(info) {
    var dataset = info.data;
  
    var listFound = [];
    var listFell = [];

   for (let i = 0; i < dataset.length; i++) {
    if (dataset[i][13]== 'Fell') {
            listFell.push(dataset[i]);
         }
    else if (dataset[i][13]== 'Found') {
            listFound.push(dataset[i])
    }};
    
    var fellItem = [];
    var fellLat = [];
    var fellLong = [];
    var foundLat = [];
    var foundLong = [];
    var foundItem = [];
    var fellPlace = [];
    var fellDate = [];
    var fellType = [];
    var fellSize = [];
    var foundPlace = [];
    var foundDate = [];
    var foundType = [];
    var foundSize = [];
    // console.log(fellLat)
    // console.log(fellLong)

  // loop through listFell to get latitude and longitude for meteorites listed as fell
  for (let i = 0; i < listFell.length; i++) {
      if ((listFell[i][15] != 'Null') && (listFell[i][16] != 'Null')) {
       // convert string number to floats and push them to arrays
        fellLat.push(parseFloat(listFell[i][15]));
        fellLong.push(parseFloat(listFell[i][16]));
        fellPlace.push(listFell[i][8]);
        fellDate.push(listFell[i][14]);
        fellType.push(listFell[i][12]);
        fellSize.push(listFell[i][11]);
      };
      // loop through fellLat to combine lat and long into one array for fell
      for (let i = 0; i < fellLat.length; i++) {
        fellItem[i] = [fellLat[i], fellLong[i]]
    }};
// loop through listFound tro get latitude and longitude for meteorites listed as found
  for (let i = 0; i < listFound.length; i++) {
      if ((listFound[i][15] != null) && (listFound[i][16] != null)) {
       // convert string number to float and push to arrays
        foundLat.push(parseFloat(listFound[i][15]));
        foundLong.push(parseFloat(listFound[i][16]));
        foundPlace.push(listFound[i][8]);
        foundDate.push(listFound[i][14]);
        foundType.push(listFound[i][12]);
        foundSize.push(listFound[i][11]);
      };
      // loop through foundLat to get lat and long into one array for found
      for (let i = 0; i < foundLat.length; i++) {
        foundItem[i] = [foundLat[i], foundLong[i]]
    }};
    console.log(fellItem);
    console.log(foundItem);
  

// add fell points to fell layer
for (let i = 0; i < fellItem.length; i++) {
  var fellMarker = L.marker(L.latLng(fellItem[i]))
  .bindPopup(`<h1>${listFell[i][8]}<h1> <hr> <h3>${listFell[i][4]}<h3>`)
  .addTo(Found)
};

// add found points to found layer
for (let i = 0; i < foundItem.length; i++) {
  var foundMarker = L.marker(L.latLng(foundItem[i]))
  .bindPopup(`<h1>${listFound[i][8]}<h1> <hr> <h3>${listFound[i][4]}<h3>`)
  .addTo(Found)
};

// Initialize all the LayerGroups that we'll use.
// var layers = {
  var Fell = new L.markerClusterGroup();
  var Found = new L.markerClusterGroup();
// };

// add base map layers.
var worldMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// create baseMaps object
var baseMaps = {
  'Street Map': worldMap,
  'Topography Map': topo
};

 // Create an overlays object to add to the layer control.
 var overlays = {
 'Fell': layers.Fell,
 'Found': layers.Found
 };

// Create a map object.
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 2.5,
  layers: [worldMap, layers.Fell]
  });

// Create a control for our layers, and add our overlays to it.
L.control.layers(baseMaps, overlays, {
  collapsed: false 
}).addTo(myMap);
})};



