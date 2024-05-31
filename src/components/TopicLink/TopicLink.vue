<template>
  <div>
    <div class="c-topic-link">
      <router-link
        :to="{ name: 'topic', params: { id: topic.id } }"
        class="c-topic-link__image-link"
        :style="`background-color: ${color}`"
      >
        <img :src="topicImage" :alt="`Imagen de ${topic.name}`" class="c-topic-link__image" />
      </router-link>
      <h4 class="c-topic-link__name">
        <router-link :to="{ name: 'topic', params: { id: topic.id } }">
          {{ topic.name }}
        </router-link>
      </h4>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const { color, image, topic } = defineProps({
  color: {
    type: String,
    default: '#000',
  },
  image: String,
  topic: Object,
});

const topicImage = computed(() => {
  return `/img/topics/${image}` || `/img/topics/${topic.icon}`;
});
</script>
