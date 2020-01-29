<template>
  <header class="c-page-header">
    <h1 class="c-page-header__title">
      {{ title }}
    </h1>
    <p class="c-page-header__subtitle" v-if="subtitle">{{ subtitle }}</p>
  </header>
</template>

<script>
export default {
  name: 'TipiHeader',
  props: ['title', 'subtitle'],
};
</script>
