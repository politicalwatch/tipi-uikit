<template>
  <header class="c-navbar">
    <div class="c-disclaimer" v-if="!closedDisclaimer && disclaimerLink.hasOwnProperty('name')">
      <router-link :to="{name: disclaimerLink.route}">{{ disclaimerLink.name }}</router-link>
      <a class="c-disclaimer__close" href="#" @click="closeDisclaimer"><icon icon="close" color="#fff" /></a>
    </div>
    <img class="c-navbar__preimage" :src="preImage" alt="Decoración">
    <div class="c-navbar__wrapper">
      <div class="c-navbar__brand">
        <a class="c-navbar__brand-link" href="/"><img class="c-navbar__brand-logo" :src="logo"></a>
      </div>
      <button
        type="button"
        class="c-navbar__menu-toggle"
        :class="{ 'is-active' : menuVisible }"
        v-on:click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="u-hide">Menú</span>
      </button>
      <nav class="c-navbar__menu" :class="{ 'is-active' : menuVisible }">
        <ul class="c-menu">
          <li
          class="c-menu__item"
          v-for="link in links"
          :key="link.route"
          v-show="link.condition">
            <router-link :to="{name: link.route }" class="c-menu__link">{{ link.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Icon from "../Icon/Icon.vue";

export default {
  name: 'TipiNavbar',
  components: {
    Icon,
  },
  props: {
    links: Array,
    disclaimerLink: {
      type: Object,
      default: function() { return {}; },
    },
    preImage: String,
    logo: String,
  },
  data: function () {
    return {
      closedMessage: false,
      menuVisible: false,
    };
  },
  computed: {
    closedDisclaimer: function () {
      return window.sessionStorage.getItem('closedDisclaimer') || this.closedMessage ? true : false;
    },
  },
  methods: {
    closeDisclaimer: function() {
      window.sessionStorage.setItem('closedDisclaimer', true);
      this.closedMessage = true;
    },
    toggleMenu: function() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>
