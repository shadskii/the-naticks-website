<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      :align-center="!authenticated"
      row
      wrap
      justify-space-around
      text-xs-center
    >

      <v-flex
        xs12
        sm8
        md6
      >
        <login-form v-if="!authenticated"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import LoginForm from '@/components/LoginForm.vue';
import firebase from 'firebase/app';

export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      authenticated: false,
    };
  },
  watch: {
    authenticated(nv) {
      if (nv) {
        this.$router.replace('/admin/shows');
      }
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) =>{
      this.authenticated = !!user;
    });
  },
};
</script>
