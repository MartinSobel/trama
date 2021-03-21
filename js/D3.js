//Constants for the SVG
var width = 900,
height = 900;

//Set up the colour scale
var color = d3.scale.category10();

//Set up the force layout
var force = d3.layout.force()
.charge(-700)
.linkDistance(500)
.size([width, height]);


//Append a SVG to the body of the html page. Assign this SVG as an object to svg
var svg = d3.select("#nodes").append("svg")
.attr("width", width)
.attr("height", height);

// hard-code some json
var graph = {
    "nodes":[
        // Poner el miso orden en el archivo data.js
        {"id": 1, "name":"Myriel","group":1, url: "http://www.anywhere.com", text: "La tierra, un gran silencio"},
        {"id": 2, "name":"Napoleon","group":1, url: "http://www.anywhere.com", text: "Em leaves the theater"},
        {"id": 3, "name":"Mlle.Baptistine","group":1, url: "http://www.anywhere.com", text: "The alley"},
        {"id": 4, "name":"Mme.Magloire","group":1, url: "http://www.anywhere.com", text: "No te tiene que doler"},
        {"id": 5, "name":"CountessdeLo","group":1, url: "http://www.anywhere.com", text: "Una incertidumbre que se propaga"},
        {"id": 6, "name":"Geborand","group":1, url: "http://www.anywhere.com", text: "La nave de la distancia"},
        {"id": 7, "name":"Champtercier","group":1, url: "http://www.anywhere.com", text: "Ana"},
        {"id": 8, "name":"Cravatte","group":1, url: "http://www.anywhere.com", text: "Inercia"},
        {"id": 9, "name":"Count","group":1, url: "http://www.anywhere.com", text: "Sirena en la ventana"},
        {"id": 10, "name":"OldMan","group":1, url: "http://www.anywhere.com", text: "¿Qué quieren hacer con las cenizas?"},
    ],
    "links":[
        {"source":1,"target":0,"value":1},
        {"source":2,"target":2,"value":1},
        {"source":3,"target":3,"value":1},
        {"source":3,"target":2,"value":1},
        {"source":4,"target":1,"value":1},
        {"source":5,"target":1,"value":1},
        {"source":6,"target":4,"value":1},
        {"source":7,"target":8,"value":1},
        {"source":8,"target":0,"value":1},
    ]
}


// Random connections for lines
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

for(let i = 0 ; i < graph.links.length ; i ++){
  graph.links[i].source = getRandomInt(9);
  graph.links[i].target = getRandomInt(9);
}

//Creates the graph data structure out of the json data
force.nodes(graph.nodes)
  .links(graph.links)
  .start();

//Create all the line svgs but without locations yet
var link = svg.selectAll(".link")
  .data(graph.links)
  .enter().append("line")
  .attr("class", "link")
  .style("stroke-width", function (d) {
    return Math.sqrt(d.value);
  });

//Do the same with the circles for the nodes
var node = svg.selectAll(".node")
  .data(graph.nodes)
  .enter().append("g")
  .attr("class", "node")
  .call(force.drag);

node.append("circle")
  .attr("r", 6)
  .style("fill",  "#ffffff")


// if it's a child, url it
node.each(function(d){
  var thisNode = d3.select(this);
  if (!d.children) {
    thisNode.append("svg:a")
      // .attr("xlink:href", function(d) { return d.url; })
      .attr("target", "_blank")
      //.text(function(d) { return d.url; })
      .append("text")
        .on("click", function(){
          renderDescription(d.id);
          // console.log(d.name);
        })
      .attr("dx", 8)
      .attr("dy", 3)
      .attr("text-anchor", "start")
      .text(function(d) { return d.text; });
  } else {
    thisNode.append("text")
      .attr("dx", -8)
      .attr("dy", 3)
      .attr("text-anchor", "end")
      .text(function(d) { return d.name; });
  }
});


// force be with you
force.on("tick", function () {
  // Constant movement
  force.alpha(0.02); 
  link.attr("x1", function (d) {
    return d.source.x;
  })
    .attr("y1", function (d) {
      return d.source.y;
    })
    .attr("x2", function (d) {
      return d.target.x;
    })
    .attr("y2", function (d) {
      return d.target.y;
    });

  //Changed

  d3.selectAll("circle").attr("cx", function (d) {
    return d.x;
  })
    .attr("cy", function (d) {
      return d.y;
    });

  d3.selectAll("text").attr("x", function (d) {
    return d.x * 1.01;
  })
    .attr("y", function (d) {
      return d.y;
    });
});