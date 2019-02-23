<template>
  <v-container fluid>
    <v-layout
      column
      align-center>
      <v-avatar
        size="25em">
        <img
          :src="logo"
          alt="The Naticks Logo"
          class="img-circle elevation-7 mb-1">
      </v-avatar>
      <v-layout
        justify-space-around
        row
        wrap>
        <v-tooltip
          v-for="m in media"
          :key="m.link"
          bottom>
          <v-btn
            slot="activator"
            :href="m.link"
            fab
            icon
            class="body-2">
            <v-icon>{{ m.icon }}</v-icon>
          </v-btn>

          <span> {{ m.name }}</span>
        </v-tooltip>
      </v-layout>
    </v-layout>
    <v-layout
      column
      align-center
      justify-space-around>
      <v-flex
        sm6
        lg4>
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
          name: 'Snapchat',
          icon: 'mdi-snapchat',
          link: 'https://www.snapchat.com/add/thenaticks',
        },
        {
          name: 'Instagram',
          icon: 'mdi-instagram',
          link: 'https://www.instagram.com/thenaticks/',
        },
        {
          name: 'SoundCloud',
          icon: 'mdi-soundcloud',
          link: 'https://soundcloud.com/the-naticks',
        },
        {
          name: 'Facebook',
          icon: 'mdi-facebook',
          link: 'https://www.facebook.com/TheNaticks/',
        },
        {
          name: 'Twitter',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/TheNaticks',
        },
        {
          name: 'Spotify',
          icon: 'mdi-spotify',
          link: 'https://open.spotify.com/artist/1D14VtvKBELGGkmqhDCnwU',
        },
        {
          name: 'YouTube',
          icon: 'mdi-youtube',
          link: 'https://www.youtube.com/channel/UCt3LqA4zTzNaNj6JGTu45ZQ?view_as=subscriber',
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
