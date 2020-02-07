<template>
<div>
  <article class="c-initiative-card">
    <div class="c-initiative-card__topics c-topics" v-if="extendedLayout" v-html="getTopics(initiative)"></div>
    <h2 class="c-initiative-card__title">
      <router-link :to="{path: '/initiatives/' + initiative.id}">{{ initiative.title }}</router-link>
    </h2>
    <div class="c-initiative-card__authors" v-if="getDeputies(initiative) && extendedLayout">
      <h3 class="c-initiative-card__label">Diputado/a</h3>
      <p v-html="getDeputies(initiative)"></p>
    </div>
    <div class="c-initiative-card__authors" v-if="getAuthors(initiative) && extendedLayout">
      <h3 class="c-initiative-card__label">Autor</h3>
      <p v-html="getAuthors(initiative)"></p>
    </div>
    <div class="o-grid">
      <div class="o-grid__col">
        <p class="c-initiative-card__date">Actualizado {{ moment(initiative.updated).fromNow() }}</p>
      </div>
      <div class="o-grid__col o-grid__col--right">
        <router-link :to="{path: '/initiatives/' + initiative.id}" v-slot="{ href }">
          <a :href="href" target="_blank">
            <tipi-icon icon="open-blank" class="c-icon--secondary"/>
          </a>
        </router-link>
      </div>
    </div>
  </article>
</div>
</template>

<script>
const moment = require('moment');
moment.locale('es');
import TipiIcon from '../Icon/Icon.vue';

export default {
  name: 'InitiativeCard',
  components: {
    TipiIcon,
  },
  data: function() {
    return{
      moment: moment,
    };
  },
  props: {
    initiative: Object,
    topicsStyles: Object,
    extendedLayout: Boolean,
  },
  methods: {
    getAuthors: function(initiative) {
      return initiative.authors.length ?
        initiative.authors.join('<br/>') :
        '';
    },
    getDeputies: function(initiative) {
      return initiative.deputies.length ?
        initiative.deputies.join('<br/>') :
        '';
    },
    getTopics: function(initiative) {
      if (this.topicsStyles && initiative.hasOwnProperty('topics')) {
        return initiative.topics.map(element => {
          return `
            <div class="c-topics__topic" style="background-color:${this.topicsStyles[element].color}">
              ${this.topicsStyles[element].shortname}
            </div>
          `;
        }).join('');
      }
      return initiative.hasOwnProperty('topics') ?
        initiative.topics.join('<br/>') :
        '';
    },
  },
};
</script>
