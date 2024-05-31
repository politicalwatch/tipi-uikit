<template>
  <header class="c-navbar">
    <div class="c-disclaimer" v-if="!closedDisclaimer && disclaimerLink.hasOwnProperty('name')">
      <a
        v-if="disclaimerLink.external"
        :href="disclaimerLink.route"
        target="_blank"
        v-html="disclaimerLink.name"
      ></a>
      <router-link
        v-else
        :to="{ name: disclaimerLink.route }"
        v-html="disclaimerLink.name"
      ></router-link>

      <a class="c-disclaimer__close" href="#" @click="closeDisclaimer"
        ><icon icon="close" color="#fff"
      /></a>
    </div>
    <div v-if="preImage" class="c-decorator" :style="`background-image: url(${preImage})`"></div>
    <div class="c-navbar__wrapper o-container">
      <div class="c-navbar__brand">
        <a class="c-navbar__brand-link" href="/"
          ><img class="c-navbar__brand-logo" :src="logo"
        /></a>
      </div>
      <button
        type="button"
        class="c-navbar__menu-toggle"
        :class="{ 'is-active': menuVisible }"
        v-on:click="toggleMenu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="u-hide">Menú</span>
      </button>
      <nav class="c-navbar__menu" :class="{ 'is-active': menuVisible }">
        <ul class="c-menu">
          <li
            @click="closeMenuMobile"
            class="c-menu__item"
            :class="{ 'has-submenu': link.children }"
            v-for="link in links"
            :key="link.route"
            v-show="link.condition"
          >
            <a v-if="link.external" :href="link.route" class="c-menu__link" target="_blank"
              >{{ link.name }}<icon :icon="link.icon" class="c-menu__icon" v-if="link.icon"
            /></a>
            <router-link v-else :to="{ name: link.route }" class="c-menu__link"
              >{{ link.name }}<icon :icon="link.icon" class="c-menu__icon" v-if="link.icon"
            /></router-link>
            <ul class="c-menu__submenu" v-if="link.children">
              <li
                @click="closeMenuMobile"
                class="c-menu__item"
                v-for="child in link.children"
                :key="child.route"
                v-show="child.condition"
              >
                <a v-if="child.external" :href="child.route" class="c-menu__link" target="_blank"
                  >{{ child.name }}<icon :icon="child.icon" class="c-menu__icon" v-if="child.icon"
                /></a>
                <router-link v-else :to="{ name: child.route }" class="c-menu__link"
                  >{{ child.name }}<icon :icon="child.icon" class="c-menu__icon" v-if="child.icon"
                /></router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';

import Icon from '../Icon/Icon.vue';

const { links, disclaimerLink, preImage, logo } = defineProps({
  links: Array,
  disclaimerLink: {
    type: Object,
    default: function () {
      return {};
    },
  },
  preImage: String,
  logo: String,
});

const closedMessage = ref(false);
const menuVisible = ref(false);

const closedDisclaimer = computed(() => {
  return window.sessionStorage.getItem('closedDisclaimer') || closedMessage.value ? true : false;
});

const closeDisclaimer = () => {
  window.sessionStorage.setItem('closedDisclaimer', true);
  closedMessage.value = true;
};

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

const closeMenuMobile = () => {
  if (menuVisible.value) {
    menuVisible.value = false;
  }
};
</script>
