// Get the endpoint
const url = "https://data.nasa.gov/api/views/gh4g-9sfh/rows.json?accessType=DOWNLOAD";

// Initialize all the LayerGroups that we'll use.
/* var layers = { */
var Fell = new L.markerClusterGroup();
var Found = new L.markerClusterGroup();
var Size = new L.markerClusterGroup();
var Size_2 = new L.markerClusterGroup();
var Size_3 = new L.markerClusterGroup();
// };

// Add a tile layer.
var worldMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
// worldMap.addTo(myMap);
var baselayer = {
  "map": worldMap
}
// Create an overlays object to add to the layer control.
var overlays = {
  "Fell": Fell,
  "Found": Found,
  "Size" : Size,
  "Size_2" : Size_2,
  "Size_3" : Size_3
};
// Create a map object.
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 2.5,
  layers:[
worldMap
  ]
  });
// Create a control for our layers, and add our overlays to it.
L.control.layers(baselayer, overlays).addTo(myMap);

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
    var listSize = [];
    var listSize2 = []; 
    var listSize3 = [];

   for (let i = 0; i < dataset.length; i++) {
     if ((dataset[i][13]== 'Fell') && (!!dataset[i][15]) && (!!dataset[i][16])) {
            listFell.push(dataset[i]);
         } 
    if ((dataset[i][13]== 'Found') && (!!dataset[i][15]) && (!!dataset[i][16])) {
            listFound.push(dataset[i])
    }
    if ((!!dataset[i][12])) {
      listSize.push(dataset[i])
    }
    if ((!!dataset[i][12])) {
      listSize2.push(dataset[i])
    }
    if ((!!dataset[i][12])) {
      listSize3.push(dataset[i])
    }
    };

console.log(listFound)
console.log(listFell)
console.log(listSize)
console.log(listSize2)
console.log(listSize3)

    var fellLat = [];
    var fellLong = [];
    var foundLat = [];
    var foundLong = [];
    var fellItem = [];
    var foundItem = [];
    var fellPlace = [];
    var foundPlace = [];
    var fellDate = [];
    var foundDate = [];
    var small = [];
    var smallLat = [];
    var smallLng = [];
    var smallItem = [];
    var small2 = [];
    var smallLat2 = [];
    var smallLng2 = [];
    var smallItem2 = [];
    var small3 = [];
    var smallLat3 = [];
    var smallLng3 = [];
    var smallItem3 = [];

    console.log(fellLat)
    console.log(fellLong)
    console.log(foundLat)
    console.log(foundLong)
    console.log(fellPlace)
    console.log(fellDate)
    console.log(foundPlace)
    console.log(foundDate) 

    for (let i = 0; i < listFell.length; i++) {
      if ((listFell[i][15] != 'Null') && (listFell[i][16] != 'Null') && (listFound[i][15] != null) && (listFound[i][16] != null) && (listFound[i][15] != "") && (listFound[i][16] != "") && (listFound[i][15] != "0") && (listFound[i][16] != "0")) {
        fellPlace.push(listFell[i][8]);
        fellDate.push(listFell[i][14]);
        fellLat.push(parseFloat(listFell[i][15]));
        fellLong.push(parseFloat(listFell[i][16]));
      }
      for (let i = 0; i < fellLat.length; i++) {
        fellItem[i] = [fellLat[i], fellLong[i]]
      }}
      console.log(fellItem)
    
      for (let i = 0; i < listSize.length; i++) {
        if ((listSize[i][12] >= 20000) && (listSize[i][12] != 'Null') && (listSize[i][12] != null) && (listSize[i][12] != "") && (listSize[i][12] != "0")) {
          small.push(parseFloat(listSize[i][12]));
          smallLat.push(parseFloat(listSize[i][15]));
          smallLng.push(parseFloat(listSize[i][16]));
      }}
      console.log(small)

      for (let i = 0; i < listSize.length; i++) {
        smallItem[i] = [smallLat[i], smallLng[i]]
      }
      console.log(smallItem)
    
      for (let i = 0; i < listSize2.length; i++) {
        if ((listSize2[i][12] >= 20000) && (listSize2[i][12] != 'Null') && (listSize2[i][12] != null) && (listSize2[i][12] != "") && (listSize2[i][12] != "0")) {
          small2.push(parseFloat(listSize2[i][12]));
          smallLat2.push(parseFloat(listSize2[i][15]));
          smallLng2.push(parseFloat(listSize2[i][16]));
      }}
      console.log(small2)

      for (let i = 0; i < listSize2.length; i++) {
        smallItem2[i] = [smallLat2[i], smallLng2[i]]
      }
      console.log(smallItem2)
      
      for (let i = 0; i < listSize3.length; i++) {
        if ((listSize3[i][12] >= 20000) && (listSize3[i][12] != 'Null') && (listSize3[i][12] != null) && (listSize3[i][12] != "") && (listSize3[i][12] != "0")) {
          small3.push(parseFloat(listSize3[i][12]));
          smallLat3.push(parseFloat(listSize3[i][15]));
          smallLng3.push(parseFloat(listSize3[i][16]));
      }}
      console.log(small)

      for (let i = 0; i < listSize3.length; i++) {
        smallItem3[i] = [smallLat3[i], smallLng3[i]]
      }
      console.log(smallItem3)

    for (let i = 0; i < listFound.length; i++) {
      if ((listFound[i][15] != 'Null') && (listFound[i][16] != 'Null') && (listFound[i][15] != null) && (listFound[i][16] != null) && (listFound[i][15] != "") && (listFound[i][16] != "") && (listFound[i][15] != "0") && (listFound[i][16] != "0")) {
        foundPlace.push(listFound[i][8]);
        foundDate.push(listFound[i][14]);
        foundLat.push(parseFloat(listFound[i][15]));
        foundLong.push(parseFloat(listFound[i][16]));
      }

      for (let i = 0; i < foundLat.length; i++) {
        foundItem[i] = [foundLat[i], foundLong[i]]
      }}
      console.log(foundItem)

      for (let i = 0; i < foundItem.length; i++) {
        L.marker(L.latLng(foundItem[i]))
        .bindPopup(`<h1>${listFound[i][8]}</h1> <hr>
        <h3>${listFound[i][14]}</h3>`)
        .addTo(Found);
        console.log("im here")
      }
      for (let i = 0; i < fellItem.length; i++) {
        L.marker(L.latLng(fellItem[i]))
/*         L.Icon.markerColor = "red" */
        .bindPopup(`<h1>${listFell[i][8]}</h1> <hr>
        <h3>${listFell[i][14]}</h3>`)
        .addTo(Fell);
        console.log("im here")
      }
      for (let i = 0; i < smallItem.length; i++) {
        L.marker(L.latLng(smallItem[i]))
/*         L.Icon.markerColor = "red" */
        .bindPopup(`<h1>${listSize[i][12]}</h1> <hr>
        <h3>${listSize[i][12]}</h3>`)
        .addTo(Size);
        console.log("im here")
      }

      for (let i = 0; i < smallItem2.length; i++) {
        L.marker(L.latLng(smallItem2[i]))
/*         L.Icon.markerColor = "red" */
        .bindPopup(`<h1>${listSize2[i][12]}</h1> <hr>
        <h3>${listSize2[i][12]}</h3>`)
        .addTo(Size_2);
        console.log("im here")
      }
      for (let i = 0; i < smallItem3.length; i++) {
        L.marker(L.latLng(smallItem3[i]))
/*         L.Icon.markerColor = "red" */
        .bindPopup(`<h1>${listSize3[i][12]}</h1> <hr>
        <h3>${listSize3[i][12]}</h3>`)
        .addTo(Size_3);
        console.log("im here")
      }
      Size.addTo(myMap)
      Size_2.addTo(myMap)
      Size_3.addTo(myMap)
      Found.addTo(myMap)
      Fell.addTo(myMap)
    })};