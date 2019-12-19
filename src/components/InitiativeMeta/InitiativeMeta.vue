<template>
  <div>
    <div :class="`text-center state well color-${getColorByStatus(initiative.status)}`">
      <strong>{{ initiative.status }}</strong>
    </div>
    <p class="congress-link text-center">
      <a :href="initiative.url" target="_blank" :title="`Ver ${initiative.title} en su fuente original`">
        <i class="fa fa-institution"></i><span>{{ linkText }}</span>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TipiInitiativeMeta',
  props: {
    initiative: Object,
    linkText: String,
    colors: {
      type: Object,
      default: function() {
        return {
          'green': ['Aprobada', 'Respondida', 'Celebrada', 'Convertida en otra', 'Acumulada en otra'],
          'black': ['En tramitación', 'Desconocida'],
          'red': ['No admitida a trámite', 'No debatida', 'Rechazada', 'Retirada', 'Derogada', 'No celebrada'],
        };
      },
    },
  },
  methods: {
    getColorByStatus: function(status) {
      for (let color in this.colors) {
        if (this.colors[color].indexOf(status) != -1) return color;
      }
      return 'black';
    },
  },
};
</script>
