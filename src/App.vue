<template>
  <v-app dark>
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
