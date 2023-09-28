<template>
  <div class="c-topics">
    <span v-html="getTopics()" />
    <div
      v-if="limit && limit < topics.length"
      class="c-topics__topic c-topics__topic__small"
      style="background-color:#2d4252;"
    >
      <tipi-icon icon="more" />
    </div>
  </div>
</template>

<script>
import TipiIcon from '../Icon/Icon.vue';
import * as Utils from '../../utils';

export default {
  name: 'TipiTopicPill',
  components: {
    TipiIcon,
  },
  props: {
    topics: Array,
    topicsStyles: Object,
    withLinks: Boolean,
    limit: Number,
    order: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    getTopics: function() {
      let topics = this.topics;
      if (this.limit) {
        topics = topics.slice(0, this.limit);
      }
      if (this.topicsStyles && topics.length) {
        let returnedTopics = this.order ? topics.slice().sort(Utils.naturalSort) : topics.slice();
        return returnedTopics
          .map((element, i) => {
            if (this.withLinks) {
              return `
              <a href="#topic-${i}" class="c-topics__topic c-topics__topic__small" style="background-color:${this.topicsStyles[element].color}">
                ${this.topicsStyles[element].shortname}
              </a>
            `;
            } else {
              return `
              <div class="c-topics__topic c-topics__topic__small" style="background-color:${this.topicsStyles[element].color}">
                ${this.topicsStyles[element].shortname}
              </div>
            `;
            }
          })
          .join('');
      }
      return topics.length
        ? topics.join('<br/>')
        : `<div class="c-topics__topic c-topics__topic__small" style="background-color: #ccc; color: #444;">
          ${
            this.topicsStyles['no-topic'] ? this.topicsStyles['no-topic'].shortname : 'Sin temática'
          }
        </div>`;
    },
  },
};
</script>
