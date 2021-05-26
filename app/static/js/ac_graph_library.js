d3.json('../static/sorted_data/mktwo/cabsav_sums.json').then(function(data){
    var trace = {
      x: (Object.values(data.state)).slice(0,10),
      y: (Object.values(data.cabsav)).slice(0,10),
      type: "bar",
      marker: {
        color: '#581845'
      }
    };
    var plot = [trace];
    var layout = {
      title: "Cabernet Sauvignon - 82% Accuracy",
      font:{
        family: 'Raleway, sans-serif'
      },
      yaxis: {
        zeroline: false,
        gridwidth: 3
      },
      xaxis: {
        tickangle: -45,
      },
      bargap :0.1,
    
    };
    graphplace = document.getElementById("breakdown-row1p1");
  Plotly.newPlot(graphplace, plot, layout);
  })
;
d3.json('../static/sorted_data/mktwo/chard_sums.json').then(function(data){
  var trace = {
    x: (Object.values(data.state)).slice(0,10),
    y: (Object.values(data.chard)).slice(0,10),
    type: "bar",
    marker: {
      color: '#581845'
    }
  };
  var plot = [trace];
  var layout = {
    title: "Chardonnay - 83% Accuracy",
    font:{
      family: 'Raleway, sans-serif'
    },
    yaxis: {
      zeroline: false,
      gridwidth: 3
    },
    xaxis: {
      tickangle: -45,
    },
    bargap :0.1,
   
  };
  graphplace = document.getElementById("breakdown-row1p2");
Plotly.newPlot(graphplace, plot, layout);
});
d3.json('../static/sorted_data/mktwo/merlot_sums.json').then(function(data){
  var trace = {
    x: (Object.values(data.state)).slice(0,10),
    y: (Object.values(data.merlot)).slice(0,10),
    type: "bar",
    marker: {
      color: '#581845'
    }
  };
  var plot = [trace];
  var layout = {
    title: "Merlot - 90% Accuracy",
    font:{
      family: 'Raleway, sans-serif'
    },
    yaxis: {
      zeroline: false,
      gridwidth: 3
    },
    xaxis: {
      tickangle: -45,
    },
    bargap :0.1,
 
  };
  graphplace = document.getElementById("breakdown-row2p1");
Plotly.newPlot(graphplace, plot, layout);
});
d3.json('../static/sorted_data/mktwo/pinot_sums.json').then(function(data){
  var trace = {
    x: (Object.values(data.state)).slice(0,10),
    y: (Object.values(data.pinot)).slice(0,10),
    type: "bar",
    marker: {
      color: '#581845'
    }
  };
  var plot = [trace];
  var layout = {
    title: "Pinot Noir - 80% Accuracy",
    font:{
      family: 'Raleway, sans-serif'
    },
    yaxis: {
      zeroline: false,
      gridwidth: 3
    },
    xaxis: {
      tickangle: -45,
    },
    bargap :0.1,
 
  };
  graphplace = document.getElementById("breakdown-row2p2");
Plotly.newPlot(graphplace, plot, layout);
});
d3.json('../static/sorted_data/mktwo/riesling_sums.json').then(function(data){
  var trace = {
    x: (Object.values(data.state)).slice(0,10),
    y: (Object.values(data.riesling)).slice(0,10),
    type: "bar",
    marker: {
      color: '#581845'
    }
  };
  var plot = [trace];
  var layout = {
    title: "Riesling - 80% Accuracy",
    font:{
      family: 'Raleway, sans-serif'
    },
    yaxis: {
      zeroline: false,
      gridwidth: 3
    },
    xaxis: {
      tickangle: -45,
    },
    bargap :0.1,
 
  };
  graphplace = document.getElementById("breakdown-row3p1");
Plotly.newPlot(graphplace, plot, layout);
});
d3.json('../static/sorted_data/mktwo/savyb_sums.json').then(function(data){
  var trace = {
    x: (Object.values(data.state)).slice(0,10),
    y: (Object.values(data.savyb)).slice(0,10),
    type: "bar",
    marker: {
      color: '#581845'
    }
  };
  var plot = [trace];
  var layout = {
    title: "Sauvignon Blanc 86% Accuracy",
    font:{
      family: 'Raleway, sans-serif'
    },
    yaxis: {
      zeroline: false,
      gridwidth: 3
    },
    xaxis: {
      tickangle: -45,
    },
    bargap :0.1,
 
  };
  graphplace = document.getElementById("breakdown-row3p2");
Plotly.newPlot(graphplace, plot, layout);
});
d3.json('../static/sorted_data/mktwo/syrah_sums.json').then(function(data){
  var trace = {
    x: (Object.values(data.state)).slice(0,10),
    y: (Object.values(data.syrah)).slice(0,10),
    type: "bar",
    marker: {
      color: '#581845'
    }
  };
  var plot = [trace];
  var layout = {
    title: "Syrah - 82% Accuracy",
    font:{
      family: 'Raleway, sans-serif'
    },
    yaxis: {
      zeroline: false,
      gridwidth: 3
    },
    xaxis: {
      tickangle: -45,
    },
    bargap :0.1,
 
  };
  graphplace = document.getElementById("breakdown-row4p1");
Plotly.newPlot(graphplace, plot, layout);
});