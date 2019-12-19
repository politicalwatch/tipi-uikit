<template>
  <div class="tipi-deputy" v-if="deputy">
    <div class="row">
      <div class="col-sm-2">
        <span class="foto grande">
          <img class="img-responsive" :src="deputy.image" :alt="'Foto de ' + deputy.name">
        </span>
      </div>
      <div class="col-sm-10">
        <h3 v-if="parliamentaryGroup">
          <router-link :to="{ path: '/parliamentarygroups/' + parliamentaryGroup.id }">
            {{ parliamentaryGroup.name }}
          </router-link>
        </h3>
        <ul class="list-unstyled">
          <li v-if="deputy.email">
            <a :href="'mailto:'+deputy.email" target="_blank"><i class="fa fa-envelope"></i>{{ deputy.email }}</a>
          </li>
          <li v-if="deputy.twitter">
            <a :href="deputy.twitter" target="_blank"><i class="fa fa-twitter"></i> {{ deputy.twitter }}</a>
          </li>
        </ul>
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
