<template>
  <div class="c-initiative-meta">
    <div
      :class="
        `c-initiative-meta__status c-initiative-meta__status--${getColorByStatus(
          initiative.status
        )}`
      "
    >
      <strong>
        <tipi-icon :icon="getIcon(initiative)"></tipi-icon>
        {{ getStateMessage(initiative) }}
      </strong>
    </div>
  </div>
</template>

<script>
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import es from 'date-fns/locale/es';
import TipiIcon from '../Icon/Icon.vue';

export default {
  name: 'TipiInitiativeMeta',
  components: {
    TipiIcon,
  },
  props: {
    initiative: Object,
    metaColors: {
      type: Object,
      default: function() {
        return {
          completed: [
            'Aprobada',
            'Respondida',
            'Celebrada',
            'Convertida en otra',
            'Acumulada en otra',
          ],
          neutral: ['En tramitación', 'Desconocida'],
          error: [
            'No admitida a trámite',
            'No debatida',
            'Caducada',
            'Rechazada',
            'Retirada',
            'Derogada',
            'No celebrada',
          ],
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
    getIcon: function(initiative) {
      const color = this.getColorByStatus(initiative['status']);
      const map = { completed: 'success', neutral: 'clock', error: 'denied' };
      return map[color];
    },
    getStateMessage: function(initiative) {
      if (initiative['status'] == 'Desconocida') {
        return `${initiative['status']}`;
      }

      const color = this.getColorByStatus(initiative['status']);
      let date = initiative['updated'];
      if (color == 'neutral') {
        date = initiative['created'];
      }

      const formattedDate = formatDistanceToNow(new Date(date), {
        locale: es,
        addSuffix: true,
      });
      return `${initiative['status']} ${formattedDate}`;
    },
  },
};
</script>
