<template>
  <v-app dark>
    <v-toolbar
      :extended="iosPwa"
      :extension-height="iosPwa && iphoneX ? 44 : 20"
      app
      color="primary"
    >
      <div
        v-if="iosPwa"
        slot="extension"
        class="pb-3"
      >
        <span
          class="headline text-uppercase font-weight-medium"
          v-text="title"
        />
      </div>
      <v-toolbar-title
        v-else
        class="headline text-uppercase font-weight-medium"
        v-text="title"
      />
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
    </v-toolbar>

    <v-content >
      <v-fade-transition
        leave-absolute>
        <router-view class="pad-nav-bottom"/>
      </v-fade-transition>
    </v-content>

    <v-bottom-nav
      :value="showNav"
      fixed
      height="75"
    >
      <v-btn
        v-for="p in pages"
        :key="`${p.name}`"
        :to="p.link"
        flat
        exact
        color="primary"
      >
        <span>{{ p.name }}</span>
        <v-icon>{{ p.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import {isIphoneX, isPwa, isIos} from './phoneDetection';
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      drawer: false,
      title: 'The Naticks',
      iphoneX: isIphoneX(),
      iosPwa: isPwa() && isIos(),
      pages: [
        {
          name: 'Home',
          link: '/',
          icon: 'mdi-home',
        },
        {
          name: 'Our Story',
          link: '/about',
          icon: 'mdi-book-open-page-variant',
        },
        {
          name: 'Blog',
          link: '/blog',
          icon: 'mdi-book-open-page-variant',
        },
      ],
    };
  },
  computed: {
    showNav() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
<style>
body{
  background-color: #303030;
}
.pad-nav-bottom{
  padding-bottom: 95px;
}
</style>

