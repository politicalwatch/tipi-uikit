<template>
  <span v-show="initiatives.length">
    <a
      v-if="!csvItems.length"
      :class="{ disabled: !canDownloadCSV }"
      :title="!canDownloadCSV ? 'Demasiados resultados para poder descargar. Afina la búsqueda' : 'Descarga CSV con todos los resultados'"
      @click.prevent="loadCSVItems"
      class="pull-right" href="#">
      <i class="fa fa-download" aria-hidden="true"></i>&nbsp;Descarga datos
    </a>
    <vue-csv-downloader
      v-else
      :data="csvItems"
      :fields="csvFields"
      :downloadName="getNameFromCSV()"
      id="downloadCSV"
      class="pull-right">
      <i class="fa fa-download" aria-hidden="true"></i>&nbsp;Descarga datos
    </vue-csv-downloader>
  </span>
</template>

<script>
import VueCsvDownloader from 'vue-csv-downloader';

export default {
  name: 'TipiCsvDownload',
  components: {
    VueCsvDownloader,
  },
  props: {
    initiatives: {
      type: Array,
      default: function() { return []; },
    },
    csvItems: Array,
    canDownloadCSV: Boolean,
    csvFields: {
      type: Array,
      default: function() { return ['title', 'reference', 'initiative_type_alt', 'authors', 'deputies', 'topics', 'subtopics', 'tags', 'place', 'status', 'updated', 'url']; },
    },
  },
  methods: {
    loadCSVItems: function(event) {
      this.$emit('loadCSVItems', event);
    },
    getNameFromCSV: function() {
      let d = new Date();
      return "export-" + d.toISOString() + ".csv";
    },
  },
};
</script>

<style scoped lang="scss">
  a.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>
