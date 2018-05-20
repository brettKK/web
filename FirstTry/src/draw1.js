
// var dataset={
//     nodes:
// }
var svg = d3.select("#svg1").append("svg");


var color = d3.scale.category20();

var force = d3.layout.force()
    .charge(-120)
    .linkDistance(30);


var dataset = d3.json("../json/source.json", function(data){
        force
            .nodes(data.nodes)
            .links(data.links)
            .start();

        
        var link = svg.selectAll(".link")
            .data(graph.links)
            .enter().append("line")
            .attr("class", "link")
            .style("stroke-width", function(d) { return Math.sqrt(d.value); });

        var node = svg.selectAll(".node")
            .data(graph.nodes)
            .enter().append("circle")
            .attr("class", "node")
            .attr("r", 5)
            .style("fill", function(d) { return color(d.group); })
            .call(force.drag);

        node.append("title")
            .text(function(d) { return d.name; }); 


        return data;

    })
