<template>
  <div :class="`c-message c-message--${ type }`">
    <div class="c-message__wrapper">
      <span class="c-message__icon" v-if="icon" v-html="require(`!html-loader!../../assets/svg/icon-${type}.svg`)"></span>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TipiMessages',
  props: {
    type: {
      type: String,
      default: 'success',
      validator: function(value) {
        return ["success", "error"].includes(value);
      },
    },
    icon: Boolean,
  },
};
</script>
