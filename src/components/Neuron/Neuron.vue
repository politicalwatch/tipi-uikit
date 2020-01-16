<template>
  <svg v-if="topics" style="width:100%; height:450px;"></svg>
</template>

<script>
const d3 = require('d3');

export default {
  name: 'TipiNeuron',
  props: {
    initiative: Object,
    topics: Array,
    styles: {
      type: Object,
      default: function () {
        return { topics: {}, defaultColor: "#cecece" };
      },
    },
  },
  methods: {
    loadVizz: function(topics, initiative, styles, color = { "center": "#222" }) {
      //Mapping ranges
      function map(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }

      //Converting polar coordinates to cartesian coordinates
      function polar(angle, radius) {
        return [
          Math.cos(angle)*radius,
          Math.sin(angle)*radius,
        ];
      }

      //Calculate the transform of a node
      function calculateTransform(d,i) {
        let pos = calculatePosition(d,i);
        return `translate(${pos[0]},${pos[1]})`;
      }

      //Calculate the position of a node
      function calculatePosition(d, i) {
        let angle = map(i, 0, data.length, 0, Math.PI*2);
        let pos = polar(angle, d["related"] ? 150 : 100);
        return [pos[0] + width/2, pos[1] + height/2];
      }

      //TODO: Encapsulate this in a class so we can have multiple vizualisations in one page.
      //Globals
      let data = [];
      let svg = d3.select(this.$el);
      svg.selectAll("*").remove();
      let width = +svg.node().getBoundingClientRect().width;
      let height = +svg.node().getBoundingClientRect().height;
      function onDataReady(topics, initiative) {
        for(let d=0; d<topics.length; d++) {
          let newNode = {"name": topics[d].name, "related": false, "intensity": 0};
          for(let t=0; t<initiative["topics"].length; t++) {
            if(initiative["topics"][t] == newNode["name"]) {
              newNode["related"] = true;
            }
          }

          for(let i=0; i<initiative["tags"].length; i++) {
            if(initiative["tags"][i]["topic"] == newNode["name"]) {
              newNode["intensity"]++;
            }
          }
          //intensity goes from 0 to 1 (percentage of tags)
          newNode["intensity"] = newNode["intensity"]/initiative["tags"].length;
          data.push(newNode);
        }
        console.log(data, "onDataReady");
        createNodes();
      }

      function createNodes() {
        console.log(data, "createNodes");
        svg.selectAll(".connection")
          .data(data)
          .enter().append("path").transition()
          .duration(700)
          .delay((d, i) => i * i + 500)
          .ease(d3.easeBackOut)
          .attr("d", (d,i) => {
              let pos = calculatePosition(d,i);
              return "M " + width/2 + " " + height/2
                    + "L " + pos[0] + " " + pos[1];
            })
          .attr("stroke-width",(d) => d["related"] ? '3px' : '1px')
          .attr("stroke", (d) => d["related"] && styles.topics[d["name"]] ? styles.topics[d["name"]].color : styles.defaultColor);

        let node = svg.selectAll(".node")
          .data(data)
          .enter().append("g")
          .attr("class", "node")
          .attr("transform", () => `translate(${width/2},${height/2})`);

        node.transition()
          .duration(700)
          .delay((d, i) => i * i)
          .ease(d3.easeBackOut)
          .attr("transform", calculateTransform);

        node.append("circle")
          .attr("class", (d) => d["related"] ? "related" : "")
          .attr("r", (d) => d["related"] ? 15 : 10)
          .style("fill", (d) => d["related"] && styles.topics[d["name"]] ? styles.topics[d["name"]].color : styles.defaultColor);

        node.append("path")
          .attr("d", d3.arc()
          .innerRadius((d) => d["related"] ? 20 : 15)
          .outerRadius((d) => d["related"] ? 25 : 20)
          .startAngle(0)
          .endAngle((d) => Math.PI * 2 * d["intensity"]))
            .attr("class", (d) => d["related"] ? "related" : "")
            .style("fill", (d) => d["related"] && styles.topics[d["name"]] ? styles.topics[d["name"]].color : styles.defaultColor);

        node.append("text")
          .attr("class", "label_name")
          .attr("text-anchor", "middle")
          .attr("alignment-baseline", "central")
          .text((d) => d["related"] ? d["name"].split('-')[0].trim() : "");

        let center = svg.append("g")
          .attr("class", "center")
          .attr("transform", `translate(${width/2},${height/2})`);

        center.append("circle")
          .attr("r", 5)
          .attr("fill", color["center"])
          .transition()
          .duration(700)
          .ease(d3.easeBackOut)
          .attr("r", 20);
      }
      onDataReady(topics, initiative);
    },
  },
  watch: {
    '$route': function () {
      this.loadVizz(this.$props.topics, this.$props.initiative, this.$props.styles);
    },
  },
  mounted: function () {
    console.log(this.$props);
    this.loadVizz(this.$props.topics, this.$props.initiative, this.$props.styles);
  },
};
</script>

<style lang="scss">

.node {
  font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 10px;
  .label_name {
    font-size: 20px;
    font-weight: bold;
  }
}

</style>
