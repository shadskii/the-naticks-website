<template>
  <v-app dark>
    <v-toolbar
      color="primary"
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-fade-transition
        leave-absolute>
        <router-view />
      </v-fade-transition>
    </v-content>
    <v-navigation-drawer
      v-model="drawer"
      app>
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.name"
          :to="item.link">
          <v-list-tile-content>
            {{ item.name }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Landing from './components/Landing';

export default {
  name: 'App',
  components: {
    Landing,
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          name: 'Home',
          link: '/',
        },
        {
          name: 'Our Story',
          link: '/about',
        },
      ],
      title: 'The Naticks',
    };
  },
};
</script>
