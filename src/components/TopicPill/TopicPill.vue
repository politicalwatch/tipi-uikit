<template>
  <div class="c-topics">
    <span v-html="getTopics()" />
    <div v-if="limit && (limit < topics.length)" class="c-topics__topic" style="background-color:#2d4252;">
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
    TipiIcon
  },
  props: {
    topics: Array,
    topicsStyles: Object,
    withLinks: Boolean,
    limit: Number,
  },
  methods: {
    getTopics: function() {
      let topics = this.topics
      if (this.limit) {
        topics = topics.slice(0, this.limit)
      }
      if (this.topicsStyles && topics.length) {
        return topics.slice().sort(Utils.naturalSort).map((element, i)=> {
          if (this.withLinks) {
            console.log(this.topicsStyles)
            console.log(element)
            return `
              <a href="#topic-${i}" class="c-topics__topic" style="background-color:${this.topicsStyles[element].color}">
                ${this.topicsStyles[element].shortname}
              </a>
            `;
          } else {
            return `
              <div class="c-topics__topic" style="background-color:${this.topicsStyles[element].color}">
                ${this.topicsStyles[element].shortname}
              </div>
            `;
          }
        }).join('');
      }
      return topics.length ?
        topics.join('<br/>') :
        `<div class="c-topics__topic" style="background-color: #000; color: #fff;">
          ${this.topicsStyles['no-topic'] ? this.topicsStyles['no-topic'].shortname : 'Sin temática'}
        </div>`;
    },
  },
};
</script>
