<template>
  <div class="c-splash" v-if="!closedSplash">
    <div class="c-splash__outer">
      <div class="c-splash__inner">
        <slot></slot>
        <p><a class="c-splash__close" :class="closeClass" href="#" @click="closeSplash">{{ closeText }}</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TipiSplash',
  props: {
    closeClass: {
      type: String,
      default: 'c-button c-button--primary',
    },
    closeText: {
      type: String,
      default: 'Comenzar',
    },
  },
  data: function () {
    return {
      closedMessage: false,
    };
  },
  computed: {
    closedSplash: function () {
      return JSON.parse(window.sessionStorage.getItem('closedSplash')) || this.closedMessage ? true : false;
    },
  },
  methods: {
    closeSplash: function() {
      window.sessionStorage.setItem('closedSplash', true);
      this.closedMessage = true;
    },
  },
};
</script>
