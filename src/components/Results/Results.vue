<template>
  <div>
    <div v-if="this.loadingResults" class="text-center"><h2>Cargando resultados...</h2></div>
    <table
      v-if="this.initiatives && this.initiatives.length && !this.loadingResults"
      id="reactive-table-1"
      class="table table-striped table-hover reactive-table">
      <thead>
        <tr>
          <th class="col-md-6" fieldid="titulo">Titulo</th>
          <th v-if="extendedLayout" class="col-md-2" fieldid="autor">Autor</th>
          <th v-if="extendedLayout" class="col-md-1" fieldid="grupo">Grupo</th>
          <th v-if="extendedLayout" class="col-md-2" fieldid="temas">Temas</th>
          <th class="sortable col-md-1" fieldid="actualizacion">
            Fecha <i class="fa fa-sort-desc"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(initiative, index) in this.initiatives" :key="index">
          <td class="titulo">
            <router-link :to="{path: '/initiatives/' + initiative.id}">{{initiative.title}}</router-link>
          </td>
          <td v-if="extendedLayout" class="autor_diputado" v-html="getDeputies(initiative)"></td>
          <td v-if="extendedLayout"class="autor_grupo" v-html="getAuthors(initiative)"></td>
          <td v-if="extendedLayout" v-html="getTopics(initiative)"></td>
          <td class="actualizacion"><span :sort="initiative.updated">{{ moment(initiative.updated).format('DD/MM/Y') }}</span></td>
        </tr>
      </tbody>
    </table>
    <a v-if="this.$listeners.loadMore && isMoreResults" href="#" class="load-more btn btn-custom" @click.prevent="loadMore">
      Cargar más {{ nextResultsLabel }}
    </a>
  </div>
</template>

<script>
const moment = require('moment');

export default {
  name: 'TipiResults',
  props: {
    loadingResults: Boolean,
    initiatives: {
      type: Array,
      default: function() { return [] },
    },
    queryMeta: Object,
    layout: String,
  },
  data: function() {
    return{
      moment: moment
    }
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
    }
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .load-more {
    display: block;
    margin: 2rem auto;
    max-width: 320px;
    text-align: center;
  }
</style>
