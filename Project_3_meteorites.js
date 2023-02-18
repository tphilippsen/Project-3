// Get the endpoint
const url = "https://data.nasa.gov/api/views/gh4g-9sfh/rows.json?accessType=DOWNLOAD";

// Initialize all the LayerGroups that we'll use.
var layers = {
  Fell: new L.LayerGroup(),
  Found: new L.LayerGroup()
};

// Create a map object.
var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 2.5,
    layers:[
      layers.Fell,
      layers.Found
    ]
    });


// Add a tile layer.
var worldMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
worldMap.addTo(myMap);

// Create an overlays object to add to the layer control.
var overlays = {
  "Fell": layers.Fell,
  "Found": layers.Found
};

// Create a control for our layers, and add our overlays to it.
L.control.layers(null, overlays).addTo(myMap);

// Initialize an object that contains icons for each layer group.
// var icons = {
//   Fall: L.ExtraMarkers.icon({
//     icon: "ion-settings",
//     iconColor: "white",
//     markerColor: "yellow",
//     shape: "star"
//   }),
//   EMPTY: L.ExtraMarkers.icon({
//     icon: "ion-android-bicycle",
//     iconColor: "white",
//     markerColor: "red",
//     shape: "circle"
//   })}

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
    }
        
    };
    console.log(listFell)
    console.log(listFound)
    
    var fellLat = [];
    var fellLong = [];
    var foundLat = [];
    var foundLong = [];

    for (let i = 0; i < listFell.length; i++) {
      if (listFell[i][15] != 'Null') {
        fellLat.push(listFell[i][15]);
      } 
      else if (listFell[i][16] != 'Null'){
        fellLong.push(listFell[i][16]);
      }
      else if (listFell[i][15] != 'Null') {
        foundLat.push(listFound[i][15]);
      } 
      else if (listFell[i][16] != 'Null') {
        foundLong.push(listFound[i][16]);
      }
    };

    
    var fellMarker = L.marker([fellLat, fellLong])
    var foundMarker = L.marker([foundLat, foundLong])

     // Add the new marker to the appropriate layer.
     fellMarker.addTo(myMap);
     foundMarker.addto(myMap);
  })};
  
 

  


   // Create an object to keep the number of markers in each layer.
  //  var meteoriteCount = {
  //   Fell: 0,
  //   Found: 0
  //  };

   
    

  // var meteoriteStatus;
  // var fallFound = dataset[i][13];

  // for (let i = 0; i < dataset.length; i++) {

  //    // Create a new station object with properties of both station objects.
  //    var meteorite = Object.assign({}, dataset[i], dataset.fallFound[i]);
     
  //    // If a station is listed but not installed, it's coming soon.
  //    if (meteorite[i][13]== 'Fell') {
  //       meteoriteStatus = "Fell";
  //    }
  //    // Otherwise, the station is normal.
  //    else {
  //      meteoriteStatus = 'Found';
  //    }
    
    //  // Update the station count.
    // meteoriteCount[meteoriteStatus]++;
    // // Create a new marker with the appropriate icon and coordinates.
    // var newMarker = L.marker([dataset[15], dataset[16]], {
    //   icon: icons[meteoriteStatus]
    // });

    // // Add the new marker to the appropriate layer.
    // newMarker.addTo(layers[meteoriteStatus]);

    // Bind a popup to the marker that will  display on being clicked. This will be rendered as HTML.
    // newMarker.bindPopup(station.name + "<br> Capacity: " + station.capacity + "<br>" + station.num_bikes_available + " Bikes Available");
  

  // Call the updateLegend function, which will update the legend!
  // updateLegend(updatedAt, stationCount);
  



