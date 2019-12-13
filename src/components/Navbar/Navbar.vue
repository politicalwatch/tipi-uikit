<template>
  <div>
    <div class="disclaimer" v-if="!closedDisclaimer && disclaimerLink.hasOwnProperty('name')">
      <router-link :to="{name: disclaimerLink.route}">{{ disclaimerLink.name }}</router-link>
      <a class="close-disclaimer pull-right" href="#" @click="closeDisclaimer">&times;</a>
    </div>
    <div class="cascade"></div>
    <nav class="navbar navbar-default"><div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"><img :src="logo"></a>
        </div>
        <div id="main-menu" class="collapse navbar-collapse" aria-expanded="false">
          <ul class="nav navbar-nav navbar-right">
            <li
            v-for="link in links"
            :key="link.route"
            v-show="link.condition">
              <router-link :to="{name: link.route }" class="menuitem">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TipiNavbar',
  props: {
    links: Array,
    disclaimerLink: {
      type: Object,
      default: function() { return {}; },
    },
    logo: String,
  },
  data: function () {
    return {
      closedMessage: false,
    }
  },
  mounted: function () {
    let hamburger = document.querySelector('.navbar-toggle');
    let menu = document.querySelector(hamburger.dataset.target);

    function collapseMenu(e) {
      e.preventDefault();
      menu.classList.toggle('in');
    }

    hamburger.addEventListener('click', collapseMenu);
  },
  computed: {
    closedDisclaimer: function () {
      return window.sessionStorage.getItem('closedDisclaimer') || this.closedMessage ? true : false;
    }
  },
  methods: {
    closeDisclaimer: function() {
      window.sessionStorage.setItem('closedDisclaimer', true);
      this.closedMessage = true;
    }
  }
}
</script>
