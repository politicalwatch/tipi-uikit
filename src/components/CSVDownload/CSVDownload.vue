<template>
  <span v-show="initiatives.length">
    <a
      v-if="!csvItems.length"
      :class="{ disabled: !canDownloadCSV }"
      :title="
        !canDownloadCSV
          ? 'Demasiados resultados para poder descargar. Afina la búsqueda'
          : 'Descarga CSV con todos los resultados'
      "
      @click.prevent="loadCSVItems"
      class="c-button c-button--compact c-button--secondary c-button--icon-right"
      href="#"
    >
      {{ label }}
      <span class="c-icon c-icon--type-download">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="16"
          fill="none"
          viewBox="0 0 12 16"
        >
          <path
            fill="#2D4252"
            d="M12 5.647H8.571V0H3.43v5.647H0l6 6.588 6-6.588zm-12 8.47V16h12v-1.882H0z"
          ></path>
        </svg>
      </span>
    </a>
    <json-excel
      v-else
      :data="csvItems"
      :fields="csvFields"
      :name="getNameFromCSV()"
      id="downloadCSV"
      type="csv"
      class="c-button c-button--icon-right"
      :class="buttonClass"
    >
      {{ label }}
      <span class="c-icon c-icon--type-download">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="16"
          fill="none"
          viewBox="0 0 12 16"
        >
          <path
            fill="#2D4252"
            d="M12 5.647H8.571V0H3.43v5.647H0l6 6.588 6-6.588zm-12 8.47V16h12v-1.882H0z"
          ></path>
        </svg>
      </span>
    </json-excel>
  </span>
</template>

<script>
import JsonExcel from 'vue-json-excel3';

export default {
  name: 'TipiCsvDownload',
  components: {
    JsonExcel,
  },
  props: {
    initiatives: {
      type: Array,
      default: function () {
        return [];
      },
    },
    csvItems: Array,
    canDownloadCSV: Boolean,
    csvFields: {
      type: Object,
      default: function () {
        return {
          title: 'title',
          reference: 'reference',
          initiative_type_alt: 'initiative_type_alt',
          authors: 'authors',
          deputies: 'deputies',
          topics: 'topics',
          tags: 'tags',
          place: 'place',
          status: 'status',
          created: 'created',
          updated: 'updated',
          url: 'url',
        };
      },
    },
    label: {
      type: String,
      default: 'Descarga los datos',
    },
    buttonClass: {
      type: String,
      default: 'c-button--compact',
    },
  },
  methods: {
    loadCSVItems: function (event) {
      this.$emit('loadCSVItems', event);
    },
    getNameFromCSV: function () {
      let d = new Date();
      return 'export-' + d.toISOString() + '.csv';
    },
  },
};
</script>

<style scoped lang="scss">
.c-button--secondary {
  margin-right: 16px;
}
</style>
