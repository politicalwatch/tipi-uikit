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
import { ref, computed } from 'vue';

const { closeClass, closeText } = defineProps({
  closeClass: {
    type: String,
    default: 'c-button c-button--primary',
  },
  closeText: {
    type: String,
    default: 'Comenzar',
  },
});

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
