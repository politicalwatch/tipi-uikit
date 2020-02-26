<template>
  <div class="c-topics" v-html="getTopics(initiative)"></div>
</template>

<script>
import * as Utils from '../../utils';

export default {
  name: 'TipiTopicPill',
  props: {
    initiative: Object,
    topicsStyles: Object,
    withLinks: Boolean,
  },
  methods: {
    getTopics: function(initiative) {
      if (this.topicsStyles && initiative.hasOwnProperty('topics')) {
        return initiative.topics.slice().sort(Utils.naturalSort).map((element, i)=> {
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
      return initiative.hasOwnProperty('topics') ?
        initiative.topics.join('<br/>') :
        '';
    },
  },
};
</script>
