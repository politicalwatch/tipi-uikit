<template>
  <div class="c-initiative-meta">
    <div
      :class="`c-initiative-meta__status c-initiative-meta__status--${getColorByStatus(
        initiative.status
      )}`"
    >
      <strong>
        <tipi-icon :icon="getIcon(initiative)"></tipi-icon>
        {{ getStateMessage(initiative) }}
      </strong>
    </div>
  </div>
</template>

<script setup>
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale/es';
import TipiIcon from '../Icon/Icon.vue';

const { initiative, metaColors } = defineProps({
  initiative: Object,
  metaColors: {
    type: Object,
    default: function () {
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
});

const getColorByStatus = (status) => {
  for (let color in metaColors) {
    if (metaColors[color].indexOf(status) != -1) return color;
  }
  return 'neutral';
};

const getIcon = (initiative) => {
  const color = getColorByStatus(initiative['status']);
  const map = { completed: 'success', neutral: 'clock', error: 'denied' };
  return map[color];
};

const getStateMessage = (initiative) => {
  if (initiative['status'] == 'Desconocida') {
    return `${initiative['status']}`;
  }

  const color = getColorByStatus(initiative['status']);
  let date = initiative['updated'];
  if (color == 'neutral') {
    date = initiative['created'];
  }

  const formattedDate = formatDistanceToNow(new Date(date), {
    locale: es,
    addSuffix: true,
  }).replace('alrededor de ', '');
  return `${initiative['status']} ${formattedDate}`;
};
</script>
