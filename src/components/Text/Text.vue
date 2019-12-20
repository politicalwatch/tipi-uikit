<template>
  <p v-if="is(value)">
    <span class="meta">{{ meta }}</span>
    <br>
    <span v-if="!source" class="value" v-html="show(value)"></span>
    <span v-if="source">
      <span v-for="(v, i) in value" :key="i" class="value" style="display:block;">
        <router-link :to="{ path: `/${type}/${getPeopleFromName(v).id}` }" v-if="getPeopleFromName(v)">
          <span v-if="getPeopleFromName(v).image" class="foto mediana">
            <img :alt="v" :src="getPeopleFromName(v).image" />
          </span>
          {{ getPeopleFromName(v).name }}
        </router-link>
        <span v-else>{{ v }}</span>
      </span>
    </span>
  </p>
</template>

<script>
export default {
  name: 'TipiText',
  props: {
    meta: String,
    value: [String, Array],
    type: String,
    source: Array,
  },
  methods: {
    getPeopleFromName: function (string) {
      if (string.hasOwnProperty('name')) return string;
      return this.source.find(s => s.name == string);
    },
    show: function(value) {
      if (value.constructor === Array) return value.join('<br/>');
      return value;
    },
    is: function(value) {
      if (value === undefined) return false;
      if (value.constructor === String && value != "") return true;
      if (value.constructor === Array && value.length > 0) return true;
      return false;
    },
  },
};
</script>
