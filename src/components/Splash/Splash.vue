<template>
  <div class="c-splash" v-if="!closedSplash">
    <div class="c-splash__outer">
      <div class="c-splash__inner">
        <slot></slot>
        <p>
          <a class="c-splash__close" :class="closeClass" href="#" @click="closeSplash">{{
            closeText
          }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, computed } from 'vue';

const props = defineProps({
  closeClass: {
    type: String,
    default: 'c-button c-button--primary',
  },
  closeText: {
    type: String,
    default: 'Comenzar',
  },
});
const { closeClass, closeText } = toRefs(props);

const closedMessage = ref(false);

const closedSplash = computed(() => {
  return JSON.parse(window.sessionStorage.getItem('closedSplash')) || closedMessage.value
    ? true
    : false;
});

const closeSplash = () => {
  window.sessionStorage.setItem('closedSplash', true);
  closedMessage.value = true;
};
</script>

<style lang="scss" scoped>
.c-splash {
  &__outer {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba($black, 0.5);
    text-align: center;
    z-index: 10;
  }

  &__inner {
    position: absolute;
    width: 95%;
    max-width: 800px;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate3d(-50%, -50%, 0);
    background-color: $white;
    padding: rem($spacer-unit * 2);

    @media (min-width: $md) {
      padding: rem($spacer-unit * 4);
    }
  }
}
</style>
