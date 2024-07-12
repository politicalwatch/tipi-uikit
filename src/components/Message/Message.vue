<template>
  <div :class="`c-message c-message--${type} ${icon ? 'c-message--icon' : ''}`">
    <div class="c-message__wrapper">
      <TipiIcon class="c-message__icon" v-if="icon" :icon="type" />
      <slot />
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

import TipiIcon from '../Icon/Icon.vue';

const props = defineProps({
  type: {
    type: String,
    default: 'success',
    validator: function (value) {
      return ['success', 'error', 'info'].includes(value);
    },
  },
  icon: Boolean,
});

const { type, icon } = toRefs(props);
</script>

<style lang="scss" scoped>
.c-message {
  margin-bottom: rem($spacer-unit * 2);

  &__wrapper {
    @include tbody2;

    display: inline-block;
    padding: rem($spacer-unit * 2) rem($spacer-unit * 4);
    background-color: $completed;
    color: $white;
    position: relative;
  }

  &__icon {
    position: absolute;
    left: rem($spacer-unit * 2);
    margin-top: rem(calc($spacer-unit / 4));

    svg {
      path {
        fill: $white;
      }
    }
  }

  &--error {
    .c-message {
      &__wrapper {
        background-color: $error;
      }
    }
  }

  &--info {
    .c-message {
      &__wrapper {
        color: $secondary-dark;
        background-color: $secondary-light;
      }

      &__icon {
        svg {
          path {
            fill: $secondary;
          }
        }
      }
    }
  }

  &--icon {
    .c-message {
      &__wrapper {
        padding-left: rem($spacer-unit * 5);
      }
    }
  }

  &.u-block {
    .c-message {
      &__wrapper {
        display: block;
      }
    }
  }
}
</style>
