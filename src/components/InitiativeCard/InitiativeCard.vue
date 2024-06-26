<template>
  <div>
    <article class="c-initiative-card" :id="`initiative-card-${initiative.id}`">
      <h2 class="c-initiative-card__title">
        <router-link
          v-if="initiative.id"
          :to="{ name: 'initiative', params: { id: initiative.id } }"
          >{{ initiative.title }}</router-link
        >
        <span v-else>{{ initiative.title }}</span>
      </h2>
      <div class="c-initiative-card__authors" v-if="getDeputies(initiative) && extendedLayout">
        <h3 class="c-initiative-card__label">{{ metaDeputies }}</h3>
        <p v-html="getDeputies(initiative)"></p>
      </div>
      <div class="c-initiative-card__authors" v-if="getAuthors(initiative) && extendedLayout">
        <h3 class="c-initiative-card__label">{{ metaGroupsOthers }}</h3>
        <p v-html="getAuthors(initiative)"></p>
      </div>
      <router-link
        v-if="initiative.id"
        :to="{ name: 'initiative', params: { id: initiative.id } }"
        v-slot="{ href }"
      >
        <a :href="href" target="_blank">
          <tipi-topic-pill
            class="c-initiative-card__topics"
            :topicsStyles="topicsStyles"
            :topics="getTopics(initiative)"
            :limit="3"
          />
        </a>
      </router-link>
      <div class="o-grid">
        <div class="o-grid__col">
          <tipi-initiative-meta :initiative="initiative" :metaColors="metaColors" />
        </div>
        <div class="o-grid__col o-grid__col--right">
          <router-link
            v-if="initiative.id"
            :to="{ name: 'initiative', params: { id: initiative.id } }"
            v-slot="{ href }"
          >
            <a :href="href" target="_blank">
              <tipi-icon icon="open-blank" class="c-icon--secondary" />
            </a>
          </router-link>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

import TipiIcon from '../Icon/Icon.vue';
import TipiTopicPill from '../TopicPill/TopicPill.vue';
import TipiInitiativeMeta from '../InitiativeMeta/InitiativeMeta.vue';

const props = defineProps({
  initiative: Object,
  topicsStyles: Object,
  extendedLayout: Boolean,
  metaDeputies: String,
  metaGroupsOthers: String,
  metaColors: { type: Object, default: undefined },
});

const { initiative, extendedLayout, metaDeputies, metaGroupsOthers, metaColors } = toRefs(props);
const { topicsStyles } = props;

const getAuthors = () => {
  return initiative.value.authors.length ? initiative.value.authors.join('<br/>') : '';
};

const getTopics = () => {
  return initiative.value['tagged'].reduce((topics, tagged) => {
    return topics.concat(tagged['topics']);
  }, []);
};

const getDeputies = () => {
  if (initiative.value.deputies.length == 0) return '';
  let regex_id = /\[.*\]/;
  return initiative.value.deputies
    .map((d) => {
      var has_id = regex_id.exec(d);
      if (!has_id) return d;
      return d.replace(has_id[0], '').trim();
    })
    .join('<br/>');
};
</script>
