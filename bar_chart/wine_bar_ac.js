d3.json("../sorted_data/state_sums_alphab.json").then(function(data){



    // console.log(typeof(wine_types));

    var trace = {
      x: Object.values(data.state),
      y: Object.values(data.tot_success),
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

    Plotly.newPlot("overall-bar-plot", plot, layout);
  });
  
  // function optionChanged(dropdown){
  //   var wineName = dropdown.options[dropdown.selectedIndex].text;
  //   var layerList = [syrah, sauvBlanc, riesling, pinotNoir, merlot, chardonnay, cabSauv];
  
  //   for (i = 0; i < layerList.length; i++) { 
  
  //     if(map.hasLayer(layerList[i])) {  
  //       map.removeLayer(layerList[i]);
  //     }
  //   }
  
  //   if (wineName === "Syrah") {
  //     syrah.addTo(map)
  //   }
  //      else if (wineName === "Sauvignon Blanc") {
  //        sauvBlanc.addTo(map)
  //      }
  //      else if (wineName === "Riesling") {
  //        riesling.addTo(map)
  //      }
  //      else if (wineName === "Pinot Noir") {
  //        pinotNoir.addTo(map)
  //      }
  //      else if (wineName === "Merlot") {
  //        merlot.addTo(map)
  //      }
  //      else if (wineName === "Chardonnay") {
  //        chardonnay.addTo(map)
  //      }
  //      else if (wineName === "Cabernet Sauvignon") {
  //        cabSauv.addTo(map)
  //      }