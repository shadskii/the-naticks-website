<template>
  <v-app dark>

    <the-toolbar />
    <v-content >
      <v-fade-transition
        hide-on-leave>
        <router-view class="pad-nav-bottom"/>
      </v-fade-transition>
    </v-content>

    <v-bottom-nav
      :value="showNav"
      fixed
      height="75"
      mandatory
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
import TheToolbar from './components/TheToolbar';
import pages from './views';
export default {
  name: 'App',
  components: {
    TheToolbar,
  },
  data() {
    return {
      drawer: false,
      pages: pages,
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

