var state_sums = 'state_sums.json'
d3.json("state_sums.json").then(function(data){
    var varieties = ['merlot', 'syrah', 'savyb', 'riesling',
    'cabsav', 'chard', 'pinot'];
    var states = Object.values(data.state);
    // var winetype_sums = typesum(varieties);
    
    // function typesum(winelist){
    //   var winecalc = [];
    //   for (winetype in winelist){
    //     var typewins = Math.sum(Object.values(data.merlot));
    //     winecalc.append([winetype,typewins])
    //   };
    //   return winecalc
    // };



    // console.log(typeof(wine_types));

    var trace = {
      x: Object.values(data.state),
      y: Object.values(data.merlot),
      type: "bar",
      marker: {
        color: 'rgb(128,0,0)'
      }
    };
    
    var plot = [trace];

    var layout = {
      title: "Number of Growable Wines in the US",
      font:{
        family: 'Raleway, sans-serif'
      },
      yaxis: {
        zeroline: false,
        gridwidth: 2
      },
      bargap :0.05
    };

    Plotly.newPlot("bar-plot", plot, layout);
  });
  
function typesum(winelist){
  var winecalc = [];
  for (wine in winelist){
    var typewins = d3.sum(state_sums.wine);
    winecalc.append([wine,typewins])
  };
  return winecalc
};
