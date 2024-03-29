<template>
  <div>
    <tipi-loader
      v-if="this.loadingResults"
      title="Cargando resultados"
      subtitle="Puede llevar algun tiempo"
    />
    <section
      class="o-masonry o-grid"
      v-if="this.initiatives && this.initiatives.length && !this.loadingResults"
    >
      <div
        class="o-grid__col u-12 u-4@sm o-masonry__item"
        v-for="(initiative, index) in this.initiatives"
        :key="index"
      >
        <tipi-initiative-card
          :initiative="initiative"
          :extendedLayout="extendedLayout"
          :topicsStyles="topicsStyles"
          :metaDeputies="metaDeputies"
          :metaGroupsOthers="metaGroupsOthers"
          :metaColors="metaColors"
        />
      </div>
    </section>
    <div class="o-grid o-grid--center" v-if="isMoreResults">
      <div class="o-grid__col">
        <a href="#" class="c-button c-button--secondary" @click.prevent="loadMore">
          Cargar más {{ nextResultsLabel }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TipiInitiativeCard from '../InitiativeCard/InitiativeCard.vue';
import TipiLoader from '../Loader/Loader.vue';
import Masonry from 'masonry-layout';

export default {
  name: 'TipiResults',
  components: {
    TipiInitiativeCard,
    TipiLoader,
  },
  props: {
    loadingResults: Boolean,
    initiatives: {
      type: Array,
      default: function () {
        return [];
      },
    },
    queryMeta: Object,
    layout: String,
    topicsStyles: Object,
    metaDeputies: { type: String, default: 'Diputada/o' },
    metaGroupsOthers: { type: String, default: 'Autor' },
    metaColors: { type: Object, default: undefined },
  },
  computed: {
    isMoreResults: function () {
      return !this.loadingResults && this.queryMeta?.page < this.queryMeta?.pages;
    },
    nextResultsLabel: function () {
      let nextResult = this.queryMeta?.page * this.queryMeta?.per_page + 1;
      let lastResult = nextResult + this.queryMeta?.per_page - 1;
      return `(${nextResult}-${lastResult})`;
    },
    extendedLayout: function () {
      return this.layout != 'tiny';
    },
  },
  methods: {
    loadMore: function () {
      this.$emit('loadMore');
    },
    setupMasonry: function () {
      let grid = document.querySelector('.o-masonry');
      if (grid) {
        let msnry = new Masonry(grid, {
          columnWidth: '.o-masonry__item',
          percentPosition: true,
          itemSelector: '.o-masonry__item',
        });
        msnry.layout();
      }
    },
  },
  watch: {
    initiatives: function () {
      if (this.initiatives && this.initiatives.length && !this.loadingResults) {
        this.setupMasonry();
      }
    },
  },
  mounted: function () {
    this.setupMasonry();
    window.addEventListener(
      'resize',
      function () {
        this.setupMasonry();
      }.bind(this)
    );
  },
};
</script>
