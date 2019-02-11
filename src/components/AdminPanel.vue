<template>
  <v-card>
    <v-card-title class="headline">Admin Panel</v-card-title>
    <v-btn @click="logout()">Logout</v-btn>
  </v-card>
</template>
<script>
import firebase from 'firebase/app';

export default {
  name: 'AdminPanel',
  methods: {
    logout() {
      firebase
          .auth()
          .signOut()
          .then(() =>{
            this.$router.replace('/');
          });
    },
  },
};
</script>
