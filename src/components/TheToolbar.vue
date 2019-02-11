<template>
  <v-toolbar
    :scroll-off-screen="extended && !iosPwa"
    :scroll-threshold="60"
    :height="extensionHeight"
    :class="toolbarCss"
    app
    color="primary"
  >
    <v-toolbar-side-icon
      :class="{'mt-4': iosPwa}"
      @click="$router.push({path: '/'})">
      <v-img
        :src="require('@/assets/natick-a.svg')"
        contain
        height="37"/>
    </v-toolbar-side-icon>

    <div
      v-if="extended"
      slot="extension"
      :class="{'pt-4': iosPwa}"
      class="text-truncate push-icon-left">
      <v-btn
        icon
        @click="navigateBack()">
        <v-icon large>mdi-arrow-left</v-icon>
      </v-btn>
      <span
        class="title mb-5"
        v-html="subtitle" />
    </div>

    <v-toolbar-title
      :class="{'pt-4': iosPwa}"
      class="headline text-uppercase font-weight-medium"
    >
      <span
        class="display-1 font-weight-light"
      >The </span>
      <span
        class="display-1 font-weight-bold"
      >Naticks</span>
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="p in pages"
        :key="`${p.name}-toolbar`"
        :to="p.link"
        flat
      >
        {{ p.name }}
      </v-btn>
    </v-toolbar-items>
    <v-fab-transition>
      <v-btn
        icon
        @click="$router.replace('/admin')">
        <v-icon v-if="adminMode">
          mdi-account-circle
        </v-icon>
      </v-btn>
    </v-fab-transition>
  </v-toolbar>
</template>
<script>
import {isIphoneX, isPwa, isIos} from '../phoneDetection';
import {mapState} from 'vuex';
import pages from '../views';
import firebase from 'firebase/app';
export default {
  name: 'TheToolbar',
  data() {
    return {
      iphoneX: isIphoneX(),
      iosPwa: isPwa() && isIos(),
      pages: pages,
      adminMode: false,
    };
  },
  computed: {
    toolbarCss() {
      return {
        'pt-1 mb-4': this.iosPwa,
        'reset-transform-y': !this.extended,
        'ios-pwa-transform': this.extended && this.iosPwa,
      };
    },
    extensionHeight() {
      if (!this.iosPwa) {
        return undefined;
      }
      return (this.iphoneX ? 44 : 37) *2;
    },
    extended() {
      const route = this.$route.fullPath;
      return route.split('/').length > 2;
    },
    ...mapState([
      'subtitle',
    ]),
  },
  beforeMount() {
    firebase
        .auth()
        .onAuthStateChanged((user) =>{
          this.adminMode = !!user;
        });
  },
  methods: {
    navigateBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.reset-transform-y{
  transform: none !important;
}
.ios-pwa-transform{
  transform: translateY(-88px) !important;
}
.push-icon-left{
  transform: translateX(-12px);
}
</style>
