<template>
  <div class="c-topics c-topics--extended" v-if="topics">
    <h6 class="c-topics__label">{{ meta }}</h6>
    <ul class="c-topics__list">
      <li v-for="(topic, i) in sortedTopics" :key="topic" class="c-topics__list-topic">
        <router-link
          :id="`topic-${i}`"
          class="c-topics__topic"
          :style="`background-color:${topicsStyles[topic].color}`"
          :to="{ name: 'results', params: { data: paramsData(topic) } }"
        >
          {{ topic }}
        </router-link>

        <ul v-if="getSubtopics(topic)" class="c-topics__list-subtopic">
          <li
            v-for="subtopic in getSubtopics(topic)"
            :key="subtopic + ' - ' + topic"
            class="c-topics__subtopic"
          >
            <router-link
              class="c-topics__link"
              :to="{ name: 'results', params: { data: paramsData(topic, subtopic) } }"
            >
              {{ subtopic }}
            </router-link>

            <ul v-if="getTags(subtopic)" class="c-topics__list-tags">
              <li v-for="tag in getTags(subtopic)" :key="tag + ' - ' + topic" class="c-topics__tag">
                <router-link
                  class="c-topics__link"
                  :to="{ name: 'results', params: { data: paramsData(topic, subtopic, tag) } }"
                >
                  {{ tag }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { toRefs, computed } from 'vue';
import qs from 'qs';

import * as Utils from '../../utils';

const props = defineProps({
  meta: { type: String },
  topics: { type: Array },
  tags: { type: Array },
  topicsStyles: { type: Object },
});

const { meta, topics, tags, topicsStyles } = toRefs(props);

const sortedTopics = computed(() => {
  return topics.value.slice().sort(Utils.naturalSort);
});

const getSubtopics = (topic) => {
  return [...new Set(tags.value.filter((tag) => tag.topic === topic).map((tag) => tag.subtopic))];
};

const getTags = (subtopic) => {
  return tags.value.filter((tag) => tag.subtopic === subtopic).map((tag) => tag.tag);
};

const paramsData = (currentTopic, currentSubtopic, currentTag) => {
  return qs.stringify({
    topic: currentTopic,
    subtopics: currentSubtopic ? currentSubtopic : undefined,
    tags: currentTag ? currentTag : undefined,
  });
};
</script>
