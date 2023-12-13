<template>
  <span class="c-icon" :class="`c-icon--type-${icon}`">
    <component :is="`icon_${icon}`" />
  </span>
</template>

<script>
import icon_advanced from '../../assets/svg/icon-advanced.svg';
import icon_bell from '../../assets/svg/icon-bell.svg';
import icon_birthday from '../../assets/svg/icon-birthday.svg';
import icon_building from '../../assets/svg/icon-building.svg';
import icon_calendar from '../../assets/svg/icon-calendar.svg';
import icon_chevron_down from '../../assets/svg/icon-chevron-down.svg';
import icon_chevron_left from '../../assets/svg/icon-chevron-left.svg';
import icon_chevron_right from '../../assets/svg/icon-chevron-right.svg';
import icon_chevron_up from '../../assets/svg/icon-chevron-up.svg';
import icon_clock from '../../assets/svg/icon-clock.svg';
import icon_close_menu from '../../assets/svg/icon-close-menu.svg';
import icon_close from '../../assets/svg/icon-close.svg';
import icon_conversation from '../../assets/svg/icon-conversation.svg';
import icon_denied from '../../assets/svg/icon-denied.svg';
import icon_document from '../../assets/svg/icon-document.svg';
import icon_download from '../../assets/svg/icon-download.svg';
import icon_error from '../../assets/svg/icon-error.svg';
import icon_footprint from '../../assets/svg/icon-footprint.svg';
import icon_github from '../../assets/svg/icon-github.svg';
import icon_hamburger from '../../assets/svg/icon-hamburger.svg';
import icon_info from '../../assets/svg/icon-info.svg';
import icon_less from '../../assets/svg/icon-less.svg';
import icon_location from '../../assets/svg/icon-location.svg';
import icon_logout from '../../assets/svg/icon-logout.svg';
import icon_mail from '../../assets/svg/icon-mail.svg';
import icon_more from '../../assets/svg/icon-more.svg';
import icon_open_blank from '../../assets/svg/icon-open-blank.svg';
import icon_plus from '../../assets/svg/icon-plus.svg';
import icon_search from '../../assets/svg/icon-search.svg';
import icon_success from '../../assets/svg/icon-success.svg';
import icon_twitter from '../../assets/svg/icon-twitter.svg';
import icon_upload from '../../assets/svg/icon-upload.svg';

export default {
  name: 'TipiIcon',
  components: {
    icon_advanced,
    icon_bell,
    icon_birthday,
    icon_building,
    icon_calendar,
    icon_chevron_down,
    icon_chevron_left,
    icon_chevron_right,
    icon_chevron_up,
    icon_clock,
    icon_close_menu,
    icon_close,
    icon_conversation,
    icon_denied,
    icon_document,
    icon_download,
    icon_error,
    icon_footprint,
    icon_github,
    icon_hamburger,
    icon_info,
    icon_less,
    icon_location,
    icon_logout,
    icon_mail,
    icon_more,
    icon_open_blank,
    icon_plus,
    icon_search,
    icon_success,
    icon_twitter,
    icon_upload,
  },
  props: {
    icon: String,
    color: String,
  },
  updated() {
    if (this.color && this.$el.querySelector('svg path')) {
      this.$el.querySelector('svg path').style.fill = this.color;
    }
  },
};
</script>
