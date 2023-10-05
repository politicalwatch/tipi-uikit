<template>
  <span class="c-icon" :class="`c-icon--type-${icon}`">
    <inline-svg src="svg" />
  </span>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'TipiIcon',
  props: {
    icon: String,
    color: String,
  },
  components: {
    InlineSvg,
  },
  computed: {
    svg() {
      return `../../assets/svg/icon-${this.icon}.svg`;
    },
  },
  updated() {
    if (this.color && this.$el.querySelector('svg path')) {
      this.$el.querySelector('svg path').style.fill = this.color;
    }
  },
};
</script>
