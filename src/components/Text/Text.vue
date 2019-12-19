<template>
  <p v-if="is(value)">
    <span class="meta">{{meta}}</span>
    <br>
    <span v-if="!source" class="value" v-html="show(value)"></span>
    <span v-if="source">
      <span v-for="v in value" v-bind:key="v" class="value" style="display:block;">
        <router-link :to="{ path: `/${type}/${getPeopleFromName(v).id}` }" v-if="getPeopleFromName(v)">
          <span v-if="getPeopleFromName(v).image" class="foto mediana">
            <img :alt="v" :src="getPeopleFromName(v).image" />
          </span>
          {{ v }}
        </router-link>
        <span v-else>{{v}}</span>
      </span>
    </span>
  </p>
</template>

<script>
export default {
  name: 'TipiData',
  props: [
    'meta',
    'value',
    'type',
    'source'
  ],
  methods: {
    getPeopleFromName: function (name) {
      return this.source.find(s => s.name == name);
    },
    show: function(value) {
      if (value.constructor === Array) return value.join('<br/>')
      return value
    },
    is: function(value) {
      if (value === undefined) return false;
      if (value.constructor === String && value != "") return true;
      if (value.constructor === Array && value.length > 0) return true;
      return false;
    }
  }
}
</script>
