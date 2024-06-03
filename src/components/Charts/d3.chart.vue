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

<script setup>
import { ref, watch, onBeforeUnmount } from 'vue';
import { saveSvgAsPng } from 'save-svg-as-png';

const chart = ref(null);

const props = defineProps({
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
});

const { config, datum, title, source, height, download } = toRefs(props);

const downloadSVG = () => {
  const node = chart.value.getElementsByClassName('chart')[0];
  saveSvgAsPng(node, 'chart.png', {
    backgroundColor: '#FFF',
  });
};

watch(
  () => config.value,
  (val) => {
    chart.value.updateConfig(val);
  },
  { deep: true }
);

watch(
  () => datum.value,
  (vals) => {
    chart.value.updateData([...vals]);
  },
  { deep: true }
);

watch(
  () => height.value,
  (val) => {
    setTimeout(() => {
      chart.value.resizeChart();
    }, 10);
  }
);

onBeforeUnmount(() => {
  chart.value.destroyChart();
});
</script>

<style lang="scss">
@import './styles';
</style>
