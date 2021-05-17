const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");

CSVToJSON().fromFile("./county_predictions_mkone.csv").then(county => {
    console.log(county);
    county.push({
      "zip": "0",
      "lat": "1",
      "lng": "2",
      "city": "Orlando"
    });
});

var countySuccess = {
  x: ["Merlot", "Rose", "Syrah", "Sauvignon Blanc", "Riesling", "Cabernet Sauvignon", "Chardonnay", "Pinot Noir"],
  y: [county.count_name],
  type: "bar"
};

var data = [countySuccess];

var layout = {
  title: "'Wine Growth Chart"
};

Plotly.newPlot("plot", data, layout);




