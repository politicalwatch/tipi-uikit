<template>
  <div class="c-text" v-if="is()">
    <h6 class="c-text__label">{{ meta }}</h6>
    <p v-if="!source" class="c-text__value" v-html="show()"></p>
    <ul class="c-text__list" v-if="source">
      <li
        v-for="(v, i) in value"
        :key="i"
        class="c-text__list-item"
        :class="{ 'c-text__list-item--image': hasImage(v) }"
      >
        <router-link
          :to="{ name: type, params: { id: getPeopleFromName(v).id } }"
          v-if="hasImage(v)"
        >
          <img class="c-text__image" :alt="v" :src="getPeopleFromName(v).image" />
        </router-link>

        <div class="c-text__wrapper" v-if="getPeopleFromName(v)">
          <router-link :to="{ name: type, params: { id: getPeopleFromName(v).id } }">
            {{ getPeopleFromName(v).name }}
            <span v-if="!hideGroup">{{ getPeopleFromName(v).parliamentarygroup }}</span>
          </router-link>
        </div>

        <span v-else>{{ v }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  meta: String,
  value: [String, Array],
  type: String,
  source: Array,
  hideGroup: Boolean,
});

const { meta, value, type, source, hideGroup } = toRefs(props);

const getPeopleFromName = (string) => {
  if (string.hasOwnProperty('name')) return string;
  const regex_id = /\[.*\]/;
  const has_id = regex_id.exec(string);
  if (!has_id) return source.value.find((s) => s.name == string);
  const peopleId = has_id[0].replace('[', '').replace(']', '');
  return source.value.find((s) => s.id == peopleId);
};

const show = () => {
  if (value.value.constructor === Array) return value.value.join('<br/>');
  return value.value;
};

const hasImage = (name) => {
  return getPeopleFromName(name) && getPeopleFromName(name).image;
};

const is = () => {
  if (value.value === undefined) return false;
  if (value.value.constructor === String && value.value != '') return true;
  if (value.value.constructor === Array && value.value.length > 0) return true;
  return false;
};
</script>
