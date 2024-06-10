<template>
  <div class="chart__wrapper">
    <div v-if="title" class="chart__title">{{ title }}</div>
    <div ref="chart" :style="{ height: `${this.height}px` }"></div>
    <div v-if="source" class="chart__source">{{ source }}</div>
    <div v-if="download" class="chart__source">
      <span @click="downloadSVG">{{ download }}</span>
    </div>
  </div>
</template>

<script>
import { saveSvgAsPng } from 'save-svg-as-png';

export default {
  name: 'D3Chart',
  data() {
    return {
      chart: {},
    };
  },
  props: {
    config: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    datum: {
      type: Array,
      required: true,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
    source: {
      type: String,
      default: '',
    },
    height: {
      type: Number,
      default: 300,
    },
    download: {
      type: String,
    },
  },
  methods: {
    downloadSVG() {
      const node = this.$refs.chart.getElementsByClassName('chart')[0];
      saveSvgAsPng(node, 'chart.png', {
        backgroundColor: '#FFF',
      });
    },
  },
  watch: {
    config: {
      handler(val) {
        this.chart.updateConfig(val);
      },
      deep: true,
    },
    datum(vals) {
      this.chart.updateData([...vals]);
    },
    height(val) {
      setTimeout(() => {
        this.chart.resizeChart();
      }, 10);
    },
  },
  beforeDestroy() {
    this.chart.destroyChart();
  },
};
</script>

<style lang="scss">
@import './styles';
</style>
