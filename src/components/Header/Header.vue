<template>
  <header class="c-page-header" :class="{ 'c-page-header--nosub': !subtitle }">
    <h1 class="c-page-header__title">
      {{ title }}
    </h1>
    <p class="c-page-header__subtitle" v-if="subtitle">{{ subtitle }}</p>
  </header>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  title: String,
  subtitle: String,
});

const { title, subtitle } = toRefs(props);
</script>

<style lang="scss" scoped>
.c-page-header {
  margin-bottom: rem($spacer-unit * 4);
  padding-bottom: rem($spacer-unit * 4);
  border-bottom: 1px solid $neutral;

  @media (min-width: $md) {
    margin-bottom: rem($spacer-unit * 8);
  }

  &__title {
    margin-bottom: rem($spacer-unit * 2);
    color: $secondary-dark;

    a {
      color: $secondary-dark;
    }
  }

  &__subtitle {
    @include subtitle;

    & {
      color: $secondary;
      margin: 0;
    }
  }

  &--nosub {
    padding-bottom: rem($spacer-unit * 2);

    .c-page-header {
      &__title {
        margin-bottom: 0;
      }
    }
  }
}
</style>
