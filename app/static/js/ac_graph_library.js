d3.json('../static/sorted_data/cabsav_sums.json').then(function(data){
    var trace = {
      x: (Object.values(data.state)).slice(0,10),
      y: (Object.values(data.cabsav)).slice(0,10),
      type: "bar",
      marker: {
        color: 'rgb(128,0,0)'
      }
    };
    var plot = [trace];
    var layout = {
      title: "Cabernet Sauvignon",
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
d3.json('../static/sorted_data/chard_sums.json').then(function(data){
  var trace = {
    x: (Object.values(data.state)).slice(0,10),
    y: (Object.values(data.chard)).slice(0,10),
    type: "bar",
    marker: {
      color: 'rgb(128,0,0)'
    }
  };
  var plot = [trace];
  var layout = {
    title: "Chardonnay",
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
d3.json('../static/sorted_data/merlot_sums.json').then(function(data){
  var trace = {
    x: (Object.values(data.state)).slice(0,10),
    y: (Object.values(data.merlot)).slice(0,10),
    type: "bar",
    marker: {
      color: 'rgb(128,0,0)'
    }
  };
  var plot = [trace];
  var layout = {
    title: "Merlot",
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
d3.json('../static/sorted_data/pinot_sums.json').then(function(data){
  var trace = {
    x: (Object.values(data.state)).slice(0,10),
    y: (Object.values(data.pinot)).slice(0,10),
    type: "bar",
    marker: {
      color: 'rgb(128,0,0)'
    }
  };
  var plot = [trace];
  var layout = {
    title: "Pinot",
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
d3.json('../static/sorted_data/riesling_sums.json').then(function(data){
  var trace = {
    x: (Object.values(data.state)).slice(0,10),
    y: (Object.values(data.riesling)).slice(0,10),
    type: "bar",
    marker: {
      color: 'rgb(128,0,0)'
    }
  };
  var plot = [trace];
  var layout = {
    title: "Riesling",
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
d3.json('../static/sorted_data/savyb_sums.json').then(function(data){
  var trace = {
    x: (Object.values(data.state)).slice(0,10),
    y: (Object.values(data.savyb)).slice(0,10),
    type: "bar",
    marker: {
      color: 'rgb(128,0,0)'
    }
  };
  var plot = [trace];
  var layout = {
    title: "Sauvignon Blanc",
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