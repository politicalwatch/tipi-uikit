<template>
  <div id="messages" class="container" v-if="this.queryMeta.hasOwnProperty('total')">
    <div class="row">
      <div class="col-sm-12">
        <div v-if="this.errors">
          <div class="alert alert-dismissible alert-danger" role="alert">
            {{ this.errors }}
          </div>
          <br/>
        </div>
        <div v-if="this.queryMeta.total" class="alert alert-dismissible alert-info" role="alert">
          Se han encontrado {{ this.queryMeta.total }} iniciativas.
        </div>
        <div v-else class="alert alert-dismissible alert-danger" role="alert">
          No se han encontrado iniciativas que cumplan los criterios.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TipiMessages',
  props: {
    queryMeta: Object,
    errors: Error,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  @media (min-width: 992px) and (max-width: 1200px) {
    width: 98%;
  }
}
</style>
