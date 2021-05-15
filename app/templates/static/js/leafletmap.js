// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [39.8, 98.6],
	zoom: 3,
	layers: [streets]
});

// Create a base layer that holds the map.
let baseMaps = {
  "Streets": streets,
};

// Add 8 layer groups for the wine varieties.
let pinotNoir = new L.LayerGroup();
let chardonnay = new L.LayerGroup();
let cabSauv = new L.LayerGroup();
let riesling = new L.LayerGroup();
let sauvBlanc = new L.LayerGroup();
let syrah = new L.LayerGroup();
let rose = new L.LayerGroup();
let merlot = new L.LayerGroup();

// Add a reference to the tectonic plates group and major earthquakes group to the overlays object.
let overlays = {
  "Pinot Noir": pinotNoir,
  "Chardonnay": chardonnay,
  "Cabernet Sauvignon": cabSauv,
  "Sauvignon Blanc": sauvBlanc,
  "Riesling": riesling,
  "Syrah": syrah,
  "Rosé": rose,
  "Merlot": merlot
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control.layers(overlays).addTo(map);

// Retrieve the GeoJSON data.
d3.json("map.geojson").then(function(data) {

  // create functions to filter geojson data
  function pinotSuccess(feature) {
      if (feature.properties.pinot_success === 1) return True
    };
  function chardSuccess(feature) {
    if (feature.properties.char_success === 1) return True
    };
  function cabSuccess(feature) {
    if (feature.properties.cabsav_success === 1) return True
    };
  function sauvSuccess(feature) {
     if (feature.properties.savyb_success === 1) return True
    };
  function riesSuccess(feature) {
    if (feature.properties.ries_success === 1) return True
    };
  function syrSuccess(feature) {
    if (feature.properties.syr_success === 1) return True
    };
  function roseSuccess(feature) {
    if (feature.properties.rose_success === 1) return True
    };
  function merSuccess(feature) {
    if (feature.properties.mer_success === 1) return True
    };
  
  L.geoJson(data, {
    filter: cabSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("County:" + feature.properties.county_name);
      }
  }).addTo(cabSauv);

// Then we add the cab layer to our map.
cabSauv.addTo(map);

L.geoJson(data, {
    filter: chardSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("County:" + feature.properties.county_name);
      }
  }).addTo(chardonnay);

// Then we add the chardonnay layer to our map.
chardonnay.addTo(map);

L.geoJson(data, {
    filter: merSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("County:" + feature.properties.county_name);
      }
  }).addTo(merlot);

// Then we add the merlot layer to our map.
merlot.addTo(map);

L.geoJson(data, {
    filter: pinotSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("County:" + feature.properties.county_name);
      }
  }).addTo(pinotNoir);

// Then we add the pinot layer to our map.
pinotNoir.addTo(map);

L.geoJson(data, {
    filter: riesSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("County:" + feature.properties.county_name);
      }
  }).addTo(riesling);

// Then we add the riesling layer to our map.
riesling.addTo(map);

L.geoJson(data, {
    filter: roseSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("County:" + feature.properties.county_name);
      }
  }).addTo(rose);

// Then we add the rose layer to our map.
rose.addTo(map);

L.geoJson(data, {
    filter: sauvSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("County:" + feature.properties.county_name);
      }
  }).addTo(sauvBlanc);

// Then we add the sauvignon blanc layer to our map.
sauvBlanc.addTo(map);

L.geoJson(data, {
    filter: syrSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("County:" + feature.properties.county_name);
      }
  }).addTo(syrah);

// Then we add the syrah layer to our map.
syrah.addTo(map)
});
  