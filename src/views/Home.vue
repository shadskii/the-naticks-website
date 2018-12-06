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
          fab
          icon
          href="https://www.snapchat.com/add/thenaticks"
          class="body-2">
          <v-icon>mdi-snapchat</v-icon>
        </v-btn>
        <v-btn
          fab
          icon
          href="https://www.instagram.com/thenaticks/"
          class="body-2">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn
          fab
          icon
          href="https://soundcloud.com/the-naticks"
          class="body-2">
          <v-icon>mdi-soundcloud</v-icon>
        </v-btn>
        <v-btn
          fab
          icon
          href="https://www.facebook.com/TheNaticks/"
          class="body-2">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          fab
          icon
          href="https://twitter.com/TheNaticks"
          class="body-2">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn
          fab
          icon
          href="https://open.spotify.com/artist/1D14VtvKBELGGkmqhDCnwU"
          class="body-2">
          <v-icon>mdi-spotify</v-icon>
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
