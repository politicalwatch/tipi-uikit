<template>
  <a
    :href="url"
    class="c-congress-link u-color-primary"
    target="_blank"
    title="Ver en el Congreso.es"
    ><tipi-icon class="u-filling-primary" icon="open-blank"></tipi-icon>Ver en el Congreso.es</a
  >
</template>

<script setup>
import { toRefs } from 'vue';
import TipiIcon from '../Icon/Icon.vue';

const props = defineProps({
  url: { type: String },
});
const { url } = toRefs(props);
</script>
