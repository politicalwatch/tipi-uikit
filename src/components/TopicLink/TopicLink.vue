<template>
  <div>
    <router-link :to="{path: '/topics/' + topic.id}">
      <img :src="`/img/topics/${topic.icon}`" :alt="`Imagen de ${topic.name}`">
      <h4>{{ topic.name }}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TipiTopicLink',
  props: {
    topic: Object,
  },
};
</script>
