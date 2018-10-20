<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      persistent
      disable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          value="true"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="primary"
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <landing />
    </v-content>
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
      items: [],
      title: 'The Naticks',
    };
  },
};
</script>
