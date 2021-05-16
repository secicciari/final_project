// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 10,
	accessToken: API_KEY
});

// Create a base layer that holds the map.
let baseMaps = {
  "Streets": streets,
};

// Add layer group for each wine
let pinotNoir = new L.LayerGroup();
let chardonnay = new L.LayerGroup();
let cabSauv = new L.LayerGroup();
let riesling = new L.LayerGroup();
let sauvBlanc = new L.LayerGroup();
let syrah = new L.LayerGroup();
let merlot = new L.LayerGroup();

// Add wine groups to the overlays object.
let overlays = {
    "Cabernet Sauvignon": cabSauv,
    "Chardonnay": chardonnay,
    "Merlot": merlot,
    "Pinot Noir": pinotNoir,
    "Riesling": riesling,
    "Sauvignon Blanc": sauvBlanc,
    "Syrah": syrah  
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [39.8, -90.6],
	zoom: 4.25,
	layers: [streets]
});

// Add a control to the map so users can change which overlay they see
L.control.layers(null, overlays, {
    collapsed: false
    }).addTo(map);

// Retrieve the GeoJSON data.
d3.json("https://raw.githubusercontent.com/secicciari/final_project/main/app/static/js/map.geojson").then(function(data) {
  // create functions to filter geojson data for only successful areas for each wine
  function pinotSuccess(feature) {
      if (feature.properties.pinot_success === 1) return true
    };
  function chardSuccess(feature) {
    if (feature.properties.char_success === 1) return true
    };
  function cabSuccess(feature) {
    if (feature.properties.cabsav_success === 1) return true
    };
  function sauvSuccess(feature) {
     if (feature.properties.savyb_success === 1) return true
    };
  function riesSuccess(feature) {
    if (feature.properties.ries_success === 1) return true
    };
  function syrSuccess(feature) {
    if (feature.properties.syr_success === 1) return true
    };
  function merSuccess(feature) {
    if (feature.properties.mer_success === 1) return true
    };

// Add the cabSuccess counties to the map with pop-up
    L.geoJson(data, {
    filter: cabSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.county_name + " County, " + feature.properties.state_name);
      }
  }).addTo(cabSauv);

cabSauv.addTo(map);

// Add the chardSuccess counties to the map with pop-up
L.geoJson(data, {
    filter: chardSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.county_name + " County, " + feature.properties.state_name);
      }
  }).addTo(chardonnay);

chardonnay.addTo(map);

// Add the merSuccess counties to the map with pop-up
L.geoJson(data, {
    filter: merSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.county_name + " County, " + feature.properties.state_name);
      }
  }).addTo(merlot);

merlot.addTo(map);

// Add the pinotSuccess counties to the map with pop-up
L.geoJson(data, {
    filter: pinotSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.county_name + " County, " + feature.properties.state_name);
      }
  }).addTo(pinotNoir);

pinotNoir.addTo(map);

// Add the riesSuccess counties to the map with pop-up
L.geoJson(data, {
    filter: riesSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.county_name + " County, " + feature.properties.state_name);
      }
  }).addTo(riesling);

riesling.addTo(map);

// Add the sauvSuccess counties to the map with pop-up
L.geoJson(data, {
    filter: sauvSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.county_name + " County, " + feature.properties.state_name);
      }
  }).addTo(sauvBlanc);

sauvBlanc.addTo(map);

// Add the syrSuccess counties to the map with pop-up
L.geoJson(data, {
    filter: syrSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates);
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h1>" + feature.properties.county_name + " County, " + feature.properties.state_name + "</h1> <br> <h2>" + 
        "Avg. Temperature: " + Math.round(feature.properties["Average Temperature (Kelvin)"]) +"K <br>" +
        "Avg. Air Pressure:" + Math.round(feature.properties["Average Air Pressure (hPa)"]) +"hPa <br>" + 
        "Avg. Humidity:" + Math.round(feature.properties["Average Humidity (%)"]) +"% <br>" + 
        "Avg. Precipitation:" + Math.round(feature.properties["Average Daily Precipitation (mm)"]) +"mm per day </h2>" 
        );
      }
  }).addTo(syrah);

syrah.addTo(map)
});