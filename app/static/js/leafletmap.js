// Add console.log to check to see if our code is working.
//console.log("working");

var webpageurl = window.location.href;

var mapenvvar = document.getElementById("mapenvid").getAttribute("name");

if (location.hostname === "127.0.0.1"){
  var accessTokenvar = API_KEY
} else if (webpageurl == "https://green-team-wine.herokuapp.com/" || "http://green-team-wine.herokuapp.com/") {
  var accessTokenvar = mapenvvar;
}

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  accessToken: accessTokenvar
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
	center: [38.0, -95.6],
  zoomSnap: 0.25,
	zoom: 4.8,
  scrollWheelZoom: 'center',
	layers: [streets]
});

// Add a control to the map so users can change which overlay they see
L.control.layers(null, overlays, {})

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

  // convert temperature
  function getTemp(temperature) {
    return Math.round((temperature - 273.15) * 9/5 + 32)
  }
   
 // Add the cabSuccess counties to the map with pop-up
  L.geoJson(data, {
    filter: cabSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates, {
        radius: 3,
        fillOpacity:0.85,
        color: "#581845"
      });
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<b>" + feature.properties.county_name + " County, " + feature.properties.state_name + "</b> <br>" + 
      "Avg. Temperature: " + getTemp(feature.properties["Average Temperature (Kelvin)"]) +"° F <br>" +
      "Avg. Air Pressure: " + Math.round(feature.properties["Average Air Pressure (hPa)"]) +" hPa <br>" +  
      "Avg. Humidity: " + Math.round(feature.properties["Average Humidity (%)"]) +"% <br>" + 
      "Avg. Precipitation: " + feature.properties["Average Daily Precipitation (mm)"].toFixed(2) +" mm per day" 
      );
      }
  }).addTo(cabSauv);


// Add the chardSuccess counties to the map with pop-up
  L.geoJson(data, {
    filter: chardSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates, {
        radius: 3,
        fillOpacity:0.85,
        color: "#581845"
      });
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<b>" + feature.properties.county_name + " County, " + feature.properties.state_name + "</b> <br>" + 
      "Avg. Temperature: " + getTemp(feature.properties["Average Temperature (Kelvin)"]) +"° F <br>" +
      "Avg. Air Pressure: " + Math.round(feature.properties["Average Air Pressure (hPa)"]) +" hPa <br>" + 
      "Avg. Humidity: " + Math.round(feature.properties["Average Humidity (%)"]) +"% <br>" + 
      "Avg. Precipitation: " + feature.properties["Average Daily Precipitation (mm)"].toFixed(2) +" mm per day" 
      );
      }
  }).addTo(chardonnay);


// Add the merSuccess counties to the map with pop-up
  L.geoJson(data, {
    filter: merSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates, {
        radius: 3,
        fillOpacity:0.85,
        color: "#581845"
      });
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<b>" + feature.properties.county_name + " County, " + feature.properties.state_name + "</b> <br>" + 
      "Avg. Temperature: " + getTemp(feature.properties["Average Temperature (Kelvin)"]) +"° F <br>" +
      "Avg. Air Pressure: " + Math.round(feature.properties["Average Air Pressure (hPa)"]) +" hPa <br>" + 
      "Avg. Humidity: " + Math.round(feature.properties["Average Humidity (%)"]) +"% <br>" + 
      "Avg. Precipitation: " + feature.properties["Average Daily Precipitation (mm)"].toFixed(2) +" mm per day" 
      );
      }
  }).addTo(merlot);


// Add the pinotSuccess counties to the map with pop-up
  L.geoJson(data, {
    filter: pinotSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates, {
        radius: 3,
        fillOpacity:0.85,
        color: "#581845"
      });
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<b>" + feature.properties.county_name + " County, " + feature.properties.state_name + "</b> <br>" + 
      "Avg. Temperature: " + getTemp(feature.properties["Average Temperature (Kelvin)"]) +"° F <br>" +
      "Avg. Air Pressure: " + Math.round(feature.properties["Average Air Pressure (hPa)"]) +" hPa <br>" + 
      "Avg. Humidity: " + Math.round(feature.properties["Average Humidity (%)"]) +"% <br>" + 
      "Avg. Precipitation: " + feature.properties["Average Daily Precipitation (mm)"].toFixed(2) +" mm per day" 
      );
      }
  }).addTo(pinotNoir);


// Add the riesSuccess counties to the map with pop-up
  L.geoJson(data, {
    filter: riesSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates, {
        radius: 3,
        fillOpacity:0.85,
        color: "#581845"
      });
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<b>" + feature.properties.county_name + " County, " + feature.properties.state_name + "</b> <br>" + 
      "Avg. Temperature: " + getTemp(feature.properties["Average Temperature (Kelvin)"]) +"° F <br>" +
      "Avg. Air Pressure: " + Math.round(feature.properties["Average Air Pressure (hPa)"]) +" hPa <br>" + 
      "Avg. Humidity: " + Math.round(feature.properties["Average Humidity (%)"]) +"% <br>" + 
      "Avg. Precipitation: " + feature.properties["Average Daily Precipitation (mm)"].toFixed(2) +" mm per day" 
      );
      }
  }).addTo(riesling);
	

// Add the sauvSuccess counties to the map with pop-up
  L.geoJson(data, {
    filter: sauvSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates, {
        radius: 3,
        fillOpacity:0.85,
        color: "#581845"
      });
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<b>" + feature.properties.county_name + " County, " + feature.properties.state_name + "</b> <br>" + 
      "Avg. Temperature: " + getTemp(feature.properties["Average Temperature (Kelvin)"]) +"° F <br>" +
      "Avg. Air Pressure: " + Math.round(feature.properties["Average Air Pressure (hPa)"]) +" hPa <br>" + 
      "Avg. Humidity: " + Math.round(feature.properties["Average Humidity (%)"]) +"% <br>" + 
      "Avg. Precipitation: " + feature.properties["Average Daily Precipitation (mm)"].toFixed(2) +" mm per day" 
      );
      }
  }).addTo(sauvBlanc);


// Add the syrSuccess counties to the map with pop-up
  L.geoJson(data, {
    filter: syrSuccess,
    
    pointToLayer: function(_feature, coordinates) {
      //console.log(data);
      return L.circleMarker(coordinates, {
        radius: 3,
        fillOpacity:0.85,
        color: "#581845"
      });
      },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<b>" + feature.properties.county_name + " County, " + feature.properties.state_name + "</b> <br>" + 
      "Avg. Temperature: " + getTemp(feature.properties["Average Temperature (Kelvin)"]) +"° F <br>" +
      "Avg. Air Pressure: " + Math.round(feature.properties["Average Air Pressure (hPa)"]) +" hPa <br>" + 
      "Avg. Humidity: " + Math.round(feature.properties["Average Humidity (%)"]) +"% <br>" + 
      "Avg. Precipitation: " + feature.properties["Average Daily Precipitation (mm)"].toFixed(2) +" mm per day" 
      );
    }
  }).addTo(syrah);
  
});


function optionChanged(dropdown){
  var wineName = dropdown.options[dropdown.selectedIndex].text;
  var layerList = [syrah, sauvBlanc, riesling, pinotNoir, merlot, chardonnay, cabSauv];

  for (i = 0; i < layerList.length; i++) { 

    if(map.hasLayer(layerList[i])) {  
      map.removeLayer(layerList[i]);
    }
  }

  if (wineName === "Syrah") {
    syrah.addTo(map)
  }
     else if (wineName === "Sauvignon Blanc") {
       sauvBlanc.addTo(map)
     }
     else if (wineName === "Riesling") {
       riesling.addTo(map)
     }
     else if (wineName === "Pinot Noir") {
       pinotNoir.addTo(map)
     }
     else if (wineName === "Merlot") {
       merlot.addTo(map)
     }
     else if (wineName === "Chardonnay") {
       chardonnay.addTo(map)
     }
     else if (wineName === "Cabernet Sauvignon") {
       cabSauv.addTo(map)
     }
 };
