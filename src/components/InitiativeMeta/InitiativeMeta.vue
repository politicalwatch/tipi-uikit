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

<style lang="scss" scoped>
.c-initiative-meta {
  &__status {
    @include overline;

    display: block;
    color: $white;
    padding: rem($spacer-unit);
    text-align: center;

    &--neutral {
      background-color: $secondary;
      color: $black;
    }

    &--completed {
      background-color: $completed;
      color: $white;
    }

    &--error {
      background-color: $error;
      color: $white;
    }
  }

  &__link {
    @include overline;

    text-transform: none;
    text-decoration: none;
    color: $black;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: rem($spacer-unit);
    }

    &:hover {
      color: $primary;

      svg {
        path {
          fill: $primary;
        }
      }
    }
  }

  .c-icon {
    margin-right: 8px;
  }

  &__status {
    text-align: left;
    padding: 0 0 0 rem($spacer-unit);

    &--neutral {
      background-color: transparent;
      border-color: $secondary;
      color: $secondary;

      svg path {
        fill: $secondary;
      }
    }

    &--completed {
      background-color: transparent;
      border-color: $completed;
      color: $completed;

      svg path {
        fill: $completed;
      }
    }

    &--error {
      background-color: transparent;
      border-color: $error;
      color: $error;

      svg path {
        fill: $error;
      }
    }
  }
}
</style>
