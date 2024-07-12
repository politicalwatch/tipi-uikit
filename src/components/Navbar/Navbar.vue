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
import { ref, toRefs, computed } from 'vue';

import Icon from '../Icon/Icon.vue';

const props = defineProps({
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

const { links, disclaimerLink, preImage, logo } = toRefs(props);

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

<style lang="scss" scoped>
.c-disclaimer {
  @include overline;

  text-transform: none;
  color: $white;
  background-color: $secondary-dark;
  padding: rem($spacer-unit) rem($spacer-unit * 2);
  display: flex;
  align-items: center;

  a {
    color: $white;
    text-decoration: none;
    margin-left: auto;

    :deep(img) {
      height: 25px;
      width: auto;
      padding-right: 5px;
      vertical-align: middle;
    }
  }
}

.c-navbar {
  transition: height 1.3s ease;
  box-shadow: inset 0 -2px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: $navbar-background-color;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    padding: rem($spacer-unit * 3) rem($spacer-unit * 2);
    flex-wrap: wrap;
  }

  &__brand {
    flex: 0 1 80%;
    max-width: $logo-mobile-width;

    @media (min-width: $md) {
      max-width: $logo-desktop-width;
    }

    &-link {
      display: block;
    }

    &-logo {
      display: block;
      height: auto;
      max-width: 100%;
    }
  }

  &__menu {
    transition: max-height 0.3s ease;
    max-height: 0;
    overflow: hidden;
    width: 100%;

    @media (min-width: $md) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      max-height: none;
      width: auto;
      overflow: visible;
    }

    &.is-active {
      width: 100%;
      max-height: 100vh;

      @media (min-width: $md) {
        width: auto;
      }
    }

    &-toggle {
      appearance: none;
      background: transparent;
      border: 0;
      margin-left: auto;
      flex: 0 0 24px;
      display: block;
      height: rem(18px);
      width: rem(24px);
      text-decoration: none;
      position: relative;

      @media (min-width: $md) {
        display: none;
      }

      .bar {
        display: block;
        width: 100%;
        height: 2px;
        background: $navbar-toogle-color;
        position: absolute;
        right: 0;
        top: 0;
        transition: 0.25s ease-in-out;

        &:nth-child(2) {
          top: calc(50% - 1px);
        }

        &:nth-child(3) {
          top: calc(100% - 2px);
        }
      }

      &.is-active {
        z-index: 100;

        .bar {
          &:nth-child(1) {
            top: 50%;
            transform: rotate(135deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            top: 50%;
            transform: rotate(-135deg);
          }
        }
      }
    }
  }
}

/* stylelint-disable no-descending-specificity */
.c-menu {
  @include th6;

  & {
    color: $menu-link-color;
    list-style: none;
    text-align: center;
    padding-top: rem($spacer-unit * 4);
  }

  @media (min-width: $md) {
    @include tbody;

    & {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      text-align: left;
      padding: 0 0 0 rem($spacer-unit * 4);
      margin: 0;
      justify-content: flex-end;
    }
  }

  &__submenu {
    margin: rem($spacer-unit * 2) 0 0 0;
    padding: 0;

    @media (min-width: $md) {
      position: absolute;
      top: 100%;
      left: rem($spacer-unit * 2);
      transform: translateY(-$spacer-unit);
      opacity: 0;
      transition:
        opacity 0.2s linear,
        transform 0.2s linear;
      margin: 0;
      padding: rem($spacer-unit);
      background: $white;
      box-shadow: inset 0 -2px 2px 0 rgba(0, 0, 0, 0.1);
      z-index: 10;
    }

    .c-menu__item {
      margin-bottom: rem($spacer-unit);
    }
  }

  &__item {
    margin-bottom: rem($spacer-unit * 2);

    @media (min-width: $md) {
      margin-bottom: 0;
      padding: 0 rem($spacer-unit * 2);
    }

    &::before {
      display: none;
    }

    &:hover {
      .c-menu__submenu {
        @media (min-width: $md) {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    &.has-submenu {
      position: relative;

      &::after {
        @media (min-width: $md) {
          position: absolute;
          content: '';
          right: 0;
          top: rem($spacer-unit);
          pointer-events: none;
          width: rem($spacer-unit);
          height: rem($spacer-unit);
          background: url('../assets/svg/icon-chevron-down.svg') no-repeat center center;
          background-size: contain;
        }
      }
    }
  }

  &__link {
    color: $menu-link-color;
    text-decoration: none;

    &:hover {
      color: $primary;
      text-decoration: none;
    }
  }

  &__icon {
    margin-left: 5px;

    & svg {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
