<template>
  <div :class="`c-message c-message--${ type } ${icon ? 'c-message--icon' : ''}`">
    <div class="c-message__wrapper">
      <tipi-icon class="c-message__icon" v-if="icon" :icon="type" />
      <slot/>
    </div>
  </div>
</template>

<script>
import TipiIcon from '../Icon/Icon.vue';

export default {
  name: 'TipiMessage',
  components: {
    TipiIcon,
  },
  props: {
    type: {
      type: String,
      default: 'success',
      validator: function(value) {
        return ["success", "error", "info"].includes(value);
      },
    },
    icon: Boolean,
  },
};
</script>
