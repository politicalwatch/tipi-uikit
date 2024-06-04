<template>
  <span class="c-icon" :class="`c-icon--type-${icon}`">
    <component :is="svg" :style="{ fill: customColor }" />
  </span>
</template>

<script setup>
import { toRefs, computed } from 'vue';

import icons from '../../assets/svg/icons';

const props = defineProps({
  icon: { type: String },
  color: { type: String },
});

const { icon, color } = toRefs(props);

const svg = computed(() => {
  let svg = '';
  if (icon.value in icons) {
    svg = icons[icon.value];
  } else {
    svg = icon.value;
  }
  return svg;
});

const customColor = computed(() => color.value || '#2d4252');
</script>
