<template>
  <div class="c-initiative-meta">
    <div :class="`c-initiative-meta__status c-initiative-meta__status--${ getColorByStatus(initiative.status) }`">
      <strong>{{ initiative.status }}</strong>
    </div>
    <a class="c-initiative-meta__link" v-if="linkText" :href="initiative.url" target="_blank" :title="`Ver ${initiative.title} en su fuente original`">
      <tipi-icon icon="building"/> {{ linkText }}
    </a>
  </div>
</template>

<script>
import TipiIcon from '../Icon/Icon.vue';

export default {
  name: 'TipiInitiativeMeta',
  components: {
    TipiIcon,
  },
  props: {
    initiative: Object,
    linkText: String,
    metaColors: {
      type: Object,
      default: function() {
        return {
          'completed': ['Aprobada', 'Respondida', 'Celebrada', 'Convertida en otra', 'Acumulada en otra'],
          'neutral': ['En tramitación', 'Desconocida'],
          'error': ['No admitida a trámite', 'No debatida', 'Rechazada', 'Retirada', 'Derogada', 'No celebrada'],
        };
      },
    },
  },
  methods: {
    getColorByStatus: function(status) {
      for (let color in this.metaColors) {
        if (this.metaColors[color].indexOf(status) != -1) return color;
      }
      return 'neutral';
    },
  },
};
</script>
