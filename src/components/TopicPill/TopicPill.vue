<template>
  <div class="c-topics">
    <span v-html="getTopics()" />
    <div
      v-if="limit && limit < topics.length"
      class="c-topics__topic c-topics__topic__small"
      style="background-color: #2d4252"
    >
      <tipi-icon icon="more" />
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

import TipiIcon from '../Icon/Icon.vue';
import * as Utils from '../../utils';

const props = defineProps({
  topics: Array,
  topicsStyles: Object,
  withLinks: Boolean,
  limit: Number,
  order: {
    type: Boolean,
    default: true,
  },
});

const { topics, withLinks, limit, order } = toRefs(props);
const { topicsStyles } = props;

const getTopics = () => {
  let topicsTemp = topics.value;
  if (limit.value) {
    topicsTemp = topicsTemp.slice(0, limit.value);
  }
  if (topicsStyles && topicsTemp.length) {
    let returnedTopics = order.value
      ? topicsTemp.slice().sort(Utils.naturalSort)
      : topicsTemp.slice();
    return returnedTopics
      .map((element, i) => {
        if (withLinks.value) {
          return `
          <a href="#topic-${i}" class="c-topics__topic c-topics__topic__small" style="background-color:${topicsStyles[element].color}">
            ${topicsStyles[element].shortname}
          </a>
        `;
        } else {
          return `
          <div class="c-topics__topic c-topics__topic__small" style="background-color:${topicsStyles[element].color}">
            ${topicsStyles[element].shortname}
          </div>
        `;
        }
      })
      .join('');
  }
  return topicsTemp.length
    ? topicsTemp.join('<br/>')
    : `<div class="c-topics__topic c-topics__topic__small" style="background-color: #ccc; color: #444;">
      ${topicsStyles['no-topic'] ? topicsStyles['no-topic'].shortname : 'Sin temática'}
    </div>`;
};
</script>
