<template>
  <div>
    <div v-if="this.loadingResults" class="text-center"><h2>Cargando resultados...</h2></div>
    <section class="o-masonry o-grid" v-if="this.initiatives && this.initiatives.length && !this.loadingResults">
      <article class="o-grid__col u-12 u-4@sm o-masonry__item" v-for="(initiative, index) in this.initiatives" :key="index">
        <div class="c-initiative-card">
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
        </div>
      </article>
    </section>
    <a v-if="this.$listeners.loadMore && isMoreResults" href="#" class="load-more btn btn-custom" @click.prevent="loadMore">
      Cargar más {{ nextResultsLabel }}
    </a>
  </div>
</template>

<script>
const moment = require('moment');
moment.locale('es');

import TipiIcon from '../Icon/Icon.vue';
import Masonry from "masonry-layout";


export default {
  name: 'TipiResults',
  components: {
    TipiIcon,
  },
  props: {
    loadingResults: Boolean,
    initiatives: {
      type: Array,
      default: function() { return []; },
    },
    queryMeta: Object,
    layout: String,
    topicsStyles: Object,
  },
  data: function() {
    return{
      moment: moment,
    };
  },
  computed: {
    isMoreResults: function() {
      return !this.loadingResults && (this.queryMeta.page < this.queryMeta.pages);
    },
    nextResultsLabel: function() {
      let nextResult = (this.queryMeta.page * this.queryMeta.per_page) + 1;
      let lastResult = nextResult + this.queryMeta.per_page -1;
      return `(${nextResult}-${lastResult})`;
    },
    extendedLayout: function() {
      return this.layout!='tiny';
    },
  },
  methods: {
    loadMore: function() {
      this.$emit('loadMore');
    },
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
  updated: function() {
    var grid = document.querySelector('.o-masonry');
    if (grid) {
      var msnry = new Masonry(grid, {
        columnWidth: '.o-masonry__item',
        percentPosition: true,
        itemSelector: '.o-masonry__item',
      });
      msnry.layout();
    }
  },
};
</script>
