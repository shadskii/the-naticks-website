<template>
  <v-container fluid>
    <v-layout
      column
      align-center>
      <v-avatar
        size="25em">
        <img
          :src="logo"
          class="img-circle elevation-7 mb-1">
      </v-avatar>
      <v-layout
        justify-space-around
        row
        wrap>
        <v-btn
          v-for="m in media"
          :key="m.link"
          :href="m.link"
          fab
          icon
          class="body-2">
          <v-icon>{{ m.icon }}</v-icon>
        </v-btn>
      </v-layout>
    </v-layout>
    <v-layout
      row
      align-center
      justify-space-around>
      <v-flex lg8>
        <events/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import logo from '../assets/logo.png';
import Events from '../components/Events.vue';
export default {
  name: 'Home',
  components: {
    Events,
  },
  data() {
    return {
      logo: logo,
      media: [
        {
          icon: 'mdi-snapchat',
          link: 'https://www.snapchat.com/add/thenaticks',
        },
        {
          icon: 'mdi-instagram',
          link: 'https://www.instagram.com/thenaticks/',
        },
        {
          icon: 'mdi-soundcloud',
          link: 'https://soundcloud.com/the-naticks',
        },
        {
          icon: 'mdi-facebook',
          link: 'https://www.facebook.com/TheNaticks/',
        },
        {
          icon: 'mdi-twitter',
          link: 'https://twitter.com/TheNaticks',
        },
        {
          icon: 'mdi-spotify',
          link: 'https://open.spotify.com/artist/1D14VtvKBELGGkmqhDCnwU',
        },
      ],
    };
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
