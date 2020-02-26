<template>
  <svg style="width: 300px; height: 500px;"></svg>
</template>

<script>
const d3 = require('d3');

export default {
  name: 'TipiTwoCircles',
  props: {
    selection: Object,
    styles: {
      type: Object,
      default: function () {
        return { topics: {}, defaultColor: "#cecece" };
      },
    },
    topic: String,
  },
  methods: {
    loadVizz: function() {
      //Configurations
      let duration = 2000;

      //Globals
      let svg = d3.select(this.$el);
      svg.selectAll("*").remove();
      let width = +svg.node().getBoundingClientRect().width;
      let maxRadius = 150;
      let minRadius = 5;

      let styles = this.$props.styles;
      let mainTopic = this.$props.topic;
      let data = [this.$props.selection.selected];
      let maxName = this.$props.selection.compareswith._id;
      let maxNumber = this.$props.selection.compareswith.initiatives;
      let mainColor = styles.topics[mainTopic] ? styles.topics[mainTopic].color : styles.defaultColor;
      let maxColor = styles.topics[maxName] ? styles.topics[maxName].color : mainColor;

      let node = svg.selectAll(".node")
        .data(data)
         .enter()
         .append("g")
           .attr("class", "node")
           .attr("transform", "translate(" + width / 2 + "," + maxRadius + ")");

      node.append("circle")
        .attr("class", "compared")
        .attr("r", maxRadius)
        .attr("fill", maxColor);

      node.append("circle")
        .attr("fill", function(d) { return selectColor(d); })
        .attr("r", 0)
        .transition()
        .duration(duration)
        .attr("r", function(d) {
          let radius = Math.round((d.initiatives*maxRadius)/maxNumber);
          if (d.initiatives === 0) return 0;
          return (radius > minRadius) ? radius : minRadius;
        });


      let legend = svg.selectAll(".legend")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "legend");

      legend.append("rect")
        .attr("width", maxRadius*2)
        .attr("height", 10)
        .attr("fill", function(d) { return selectColor(d); })
        .attr("transform", "translate(0," + (maxRadius*2+50) + ")");

      legend.append("text")
        .attr("x", 0)
        .attr("y", 0)
        .style("fill", "#222")
        .style("font-size", "13px")
        .text(function(d) { return d._id; })
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "central")
        .attr("transform", "translate(" + width/2 + "," + (maxRadius*2+70) + ")");

      legend.append("rect")
        .attr("width", maxRadius*2)
        .attr("height", 10)
        .attr("class", "compared")
        .attr("fill", maxColor)
        .attr("transform", "translate(0," + (maxRadius*2+90) + ")");

      legend.append("text")
        .attr("x", 0)
        .attr("y", 0)
        .style("fill", "#222")
        .style("font-size", "13px")
        .text(maxName)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "central")
        .attr("transform", "translate(" + width/2 + "," + (maxRadius*2+110) + ")");


      function selectColor(d) {
        console.log(d);
        return styles.topics[mainTopic] ? styles.topics[mainTopic].color : styles.defaultColor;
      }

    },
  },
  mounted: function() {
    this.loadVizz();
  },
  watch: {
    'selection.selected._id': 'loadVizz',
  },
};
</script>


<style lang="scss">
  circle.compared,
  rect.compared {
    opacity: 0.3;
  }
</style>
