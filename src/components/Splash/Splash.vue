<template>
  <div id="splash" v-if="!closedSplash">
    <div class="outer">
      <div class="inner">
        <slot></slot>
        <p><a :class="closeClass" href="#" @click="closeSplash">{{ closeText }}</a></p>
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
      default: 'btn btn-custom btn-block close-splash',
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
      return window.sessionStorage.getItem('closedSplash') || this.closedMessage ? true : false;
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

<style scoped lang="scss">
#splash {
  .outer {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.5);
    text-align: center;
    z-index: 999;
    .inner {
      position: absolute;
      width: 95%;
      max-width: 800px;
      height: 95vh;
      max-height: 500px;
      top: 50%;
      left: 50%;
      margin: 0;
      transform: translate3d(-50%, -50%, 0);
      background-color: #f8f8f8;
      padding: 15px;
      @media (min-width: 768px) {
        padding: 40px;
      }
      img {
        width: 75%;
          margin-bottom: 20px;
      }
      p {
        font-size: 1em;
        margin: 15px 0;
        @media (min-width: 768px) {
          margin: 20px 0;
          font-size: 1.2em;
        }
      }
    }
  }
}
</style>
