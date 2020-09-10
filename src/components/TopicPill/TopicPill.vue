<template>
  <div class="c-topics" v-html="getTopics(topics)"></div>
</template>

<script>
import * as Utils from '../../utils';

export default {
  name: 'TipiTopicPill',
  props: {
    topics: Array,
    topicsStyles: Object,
    withLinks: Boolean,
  },
  methods: {
    getTopics: function(topics) {
      if (this.topicsStyles && topics.length) {
        return topics.slice().sort(Utils.naturalSort).map((element, i)=> {
          if (this.withLinks) {
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
