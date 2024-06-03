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
