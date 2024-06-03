<template>
  <div class="c-initiative-meta">
    <div :class="`c-initiative-meta__status c-initiative-meta__status--${getColorByStatus()}`">
      <strong>
        <tipi-icon :icon="getIcon()"></tipi-icon>
        {{ getStateMessage() }}
      </strong>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale/es';

import TipiIcon from '../Icon/Icon.vue';

const props = defineProps({
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

const { initiative, metaColors } = toRefs(props);

const getColorByStatus = () => {
  for (let color in metaColors.value) {
    if (metaColors.value[color].indexOf(initiative.value.status) != -1) return color;
  }
  return 'neutral';
};

const getIcon = () => {
  const color = getColorByStatus();
  const map = { completed: 'success', neutral: 'clock', error: 'denied' };
  return map[color];
};

const getStateMessage = () => {
  if (initiative.value['status'] == 'Desconocida') {
    return `${initiative.value['status']}`;
  }

  const color = getColorByStatus();
  let date = initiative.value['updated'];
  if (color == 'neutral') {
    date = initiative.value['created'];
  }

  const formattedDate = formatDistanceToNow(new Date(date), {
    locale: es,
    addSuffix: true,
  }).replace('alrededor de ', '');
  return `${initiative.value['status']} ${formattedDate}`;
};
</script>
