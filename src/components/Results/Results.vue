<template>
  <div>
    <div v-if="this.loadingResults" class="text-center"><h2>Cargando resultados...</h2></div>
    <section class="o-masonry o-grid" v-if="this.initiatives && this.initiatives.length && !this.loadingResults">
      <article class="o-grid__col u-12 u-4@sm o-masonry__item" v-for="(initiative, index) in this.initiatives" :key="index">
        <div class="c-initiative-card">
          <span class="titulo">
            <router-link :to="{path: '/initiatives/' + initiative.id}">{{ initiative.title }}</router-link>
          </span>
          <span v-if="extendedLayout" class="autor_diputado" v-html="getDeputies(initiative)"></span>
          <span v-if="extendedLayout" class="autor_grupo" v-html="getAuthors(initiative)"></span>
          <span v-if="extendedLayout" v-html="getTopics(initiative)"></span>
          <span class="actualizacion"><span :sort="initiative.updated">{{ moment(initiative.updated).format('DD/MM/Y') }}</span></span>
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
import Masonry from "masonry-layout";


export default {
  name: 'TipiResults',
  props: {
    loadingResults: Boolean,
    initiatives: {
      type: Array,
      default: function() { return []; },
    },
    queryMeta: Object,
    layout: String,
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
      console.log(grid);
      msnry.layout();
    }
  },
};
</script>
