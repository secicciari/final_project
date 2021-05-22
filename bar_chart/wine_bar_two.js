d3.json("bar_chart_data.json").then(function(data){
    var variety_data = data.Wine_Variety;
    var county_data = data.County_Count;

    console.log(typeof(wine_types));

    var trace = {
      x: Object.values(variety_data),
      y: Object.values(county_data),
      type: "bar",
      marker: {
        color: 'rgb(128,0,0)'
      }
    };
    
    var plot = [trace];

    var layout = {
      title: "Number of US Counties per Wine Variety",
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
  