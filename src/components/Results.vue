<template>
  <div>
    <div v-if="this.loadingResults" class="text-center"><h2>Cargando resultados...</h2></div>
    <table id="reactive-table-1" class="table table-striped table-hover reactive-table">
      <thead>
        <tr>
          <th class="col-md-6" fieldid="titulo">Titulo</th>
          <th class="col-md-2" fieldid="autor">Autor</th>
          <th class="col-md-1" fieldid="grupo">Grupo</th>
          <th class="col-md-2" fieldid="temas">Temas</th>
          <th class="sortable col-md-1" fieldid="actualizacion">
            Fecha <i class="fa fa-sort-desc"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(initiative, index) in this.initiatives" :key="index">
          <td>{{ initiavie.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: {
    loadingResults: Boolean,
    initiavies: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
