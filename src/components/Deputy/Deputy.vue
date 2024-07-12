<template>
  <div class="c-deputy" :class="addBirthdayClass()" v-if="deputy">
    <div class="o-container">
      <div class="o-grid o-grid--reverse">
        <div class="o-grid__col u-4@sm">
          <div class="c-deputy__image_container">
            <img class="c-deputy__image" :src="deputy.image" :alt="'Foto de ' + deputy.name" />
            <party-logo-icon :party="deputy.party_name" />
          </div>
        </div>
        <div class="o-grid__col u-12 u-8@sm">
          <h1 class="c-deputy__name">{{ deputy.name }}</h1>
          <h3 class="c-deputy__group" v-if="parliamentaryGroup">
            <router-link
              :to="{ name: 'parliamentarygroup', params: { id: parliamentaryGroup.id } }"
            >
              {{ parliamentaryGroup.name }}
            </router-link>
          </h3>
          <div class="c-deputy__extra">
            <span class="c-deputy__personal"
              ><tipi-icon v-if="addBirthdayClass()" icon="birthday" />{{ getAge() }} años</span
            ><span class="c-deputy__personal"
              ><tipi-icon icon="location" />{{ getConstituency() }}</span
            >
          </div>
          <div class="c-deputy__links">
            <slot />
          </div>
        </div>
        <div class="o-grid__col u-12 u-12@sm c-deputy__more">
          <a href="#" @click="collapse"
            >{{ getCollapseMessage() }}<tipi-icon :icon="getCollapseIcon()"
          /></a>
        </div>
        <div :class="getCollapsedClass()" class="o-grid__col u-12 u-4@sm">
          <h3>Declaraciones</h3>
          <p v-for="(link, title) in deputy.extra.declarations" :key="title">
            <tipi-icon icon="document" /><a :href="link">{{ title }}</a>
          </p>
        </div>
        <div :class="getCollapsedClass()" class="o-grid__col u-12 u-4@sm">
          <h3>Cargos</h3>
          <p v-for="position in deputy.public_position" :key="position">{{ position }}</p>
        </div>
        <div :class="getCollapsedClass()" class="o-grid__col u-12 u-4@sm">
          <h3>Ficha personal</h3>
          <p v-for="entry in deputy.bio" :key="entry">{{ entry }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue';

import TipiIcon from '../Icon/Icon.vue';
import PartyLogoIcon from '../PartyLogo/PartyLogoIcon.vue';

const props = defineProps({
  deputy: Object,
  parliamentaryGroup: Object,
});

const { deputy, parliamentaryGroup } = toRefs(props);

const isCollapsed = ref(true);

const getCollapsedClass = () => {
  return isCollapsed.value ? 'c-deputy__hidden' : 'c-deputy__info';
};

const getCollapseIcon = () => {
  return isCollapsed.value ? 'plus' : 'less';
};

const getCollapseMessage = () => {
  return isCollapsed.value ? 'Mostrar más' : 'Mostrar menos';
};

const collapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

const addBirthdayClass = () => {
  const date = new Date(deputy.value.birthdate);
  const today = new Date();
  if (date.getDate() == today.getDate() && date.getMonth() == today.getMonth()) {
    return 'c-deputy__birthday';
  }
};

const getAge = () => {
  const date = new Date(deputy.value.birthdate);
  const today = new Date();
  const age = today.getFullYear() - date.getFullYear();
  return age;
};

const getConstituency = () => {
  return deputy.value.constituency;
};
</script>

<style scoped lang="scss">
.c-deputy {
  padding: rem($spacer-unit * 8) rem($spacer-unit * 4) rem($spacer-unit * 4);
  background-color: $secondary-light;
  color: $secondary-dark;

  @media (min-width: $md) {
    margin-bottom: rem($spacer-unit * 4);
  }

  &__image_container {
    position: relative;
    width: rem($spacer-unit * 20);
    height: rem($spacer-unit * 20);
    margin: 0 auto 30px;

    @media (min-width: $md) {
      width: rem($spacer-unit * 20);
      height: rem($spacer-unit * 20);
    }
  }

  &__image {
    width: rem($spacer-unit * 20);
    height: rem($spacer-unit * 20);
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid $secondary;
    margin: 0 auto rem($spacer-unit) auto;
    display: block;
    position: absolute;
    z-index: 0;

    @media (min-width: $md) {
      margin: 0 0 0 auto;
    }
  }

  &__name {
    @include th2;

    & {
      text-align: center;
      margin: 0 0 rem($spacer-unit) 0;
    }

    @media (min-width: $sm) {
      text-align: left;
    }
  }

  &__group {
    @include subtitle;

    & {
      text-transform: uppercase;
      margin: 0 0 rem($spacer-unit) 0;
      text-align: center;
    }

    @media (min-width: $sm) {
      text-align: left;
    }

    a {
      text-decoration: none;
      color: $secondary-dark;
    }
  }

  &__description {
    @include subtitle;

    & {
      text-align: center;
    }

    @media (min-width: $sm) {
      text-align: left;
    }
  }

  &__links {
    @include th6;

    & {
      color: $secondary-dark;
      text-align: center;
    }

    @media (min-width: $sm) {
      text-align: left;
    }

    a {
      color: $secondary-dark;
      text-decoration: none;
      display: block;

      @media (min-width: $md) {
        display: inline-block;
        margin-right: rem($spacer-unit * 2);
      }
    }
  }

  &__extra {
    margin-top: 8px;
    margin-bottom: 8px;
    text-align: center;

    @media (min-width: $md) {
      text-align: left;
    }
  }

  &__personal {
    margin-right: 16px;

    span {
      margin-right: 4px;
    }
  }

  &__more {
    text-align: center;

    @media (min-width: $md) {
      text-align: left;
    }

    a,
    a:hover {
      color: $secondary-dark;
      font-weight: 500;
      text-decoration: none;

      .c-icon {
        margin-left: 8px;
      }
    }
  }

  &__info {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    margin-top: rem($spacer-unit * 8);

    h3 {
      color: $secondary;
      font-size: 12px;
    }

    p,
    a {
      margin-top: 8px;
      margin-bottom: 8px;
    }

    a {
      font-weight: 500;
      color: $secondary-dark;
    }

    span {
      margin-right: 8px;
    }
  }

  &__hidden {
    display: none;
  }

  &__birthday {
    background: url('../assets/birthday_bg.png');
  }
}

</style>
