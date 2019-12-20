<template>
  <div class="row" v-if="topic.description && topic.icon != ''">
    <div class="col-sm-3">
      <img class="img-responsive" :src="`/img/topics/${topic.icon}`" :alt="`Imagen de ${topic.name}`">
    </div>
    <div class="col-sm-9">
      <p v-for="d in topic.description" :key="d" class="topic-desc">
        {{ d }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TipiTopicCard',
  props: {
    topic: Object,
  },
};
</script>

<style scoped lang="scss">
  .topic-desc {
    font-size: 1.2em;
  }
</style>
