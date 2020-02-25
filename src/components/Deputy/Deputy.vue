<template>
  <div class="c-deputy" v-if="deputy">
    <div class="o-container">
      <div class="o-grid  o-grid--reverse o-grid--align-center">
        <div class="o-grid__col u-12 u-4@sm">
          <img class="c-deputy__image" :src="deputy.image" :alt="'Foto de ' + deputy.name">
        </div>
        <div class="o-grid__col u-12 u-8@sm">
          <h1 class="c-deputy__name">{{ deputy.name }}</h1>
          <h3 class="c-deputy__group" v-if="parliamentaryGroup">
            <router-link :to="{ path: '/parliamentarygroups/' + parliamentaryGroup.id }">
              {{ parliamentaryGroup.name }}
            </router-link>
          </h3>
          <div class="c-deputy__links">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TipiDeputy',
  props: {
    deputy: Object,
    parliamentaryGroup: Object,
  },
};
</script>

<style scoped lang="scss">
</style>
