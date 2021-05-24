d3.json("../static/sorted_data/state_sums_totals.json").then(function(data){

    // console.log(typeof(wine_types));

    

    var trace = {
      x: Object.values(data.state),
      y: Object.values(data.tot_success),
      type: "bar",
      marker: {
        color: '#581845'
      }
    };
    
    var plot = [trace];

    var layout = {
      title: "Number of Award-Winning Varieties by State",
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

    graphplace = document.getElementById("overall-bar");

    Plotly.newPlot(graphplace, plot, layout);
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