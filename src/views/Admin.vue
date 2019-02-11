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
        <admin-panel v-else />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import LoginForm from '@/components/LoginForm.vue';
import AdminPanel from '@/components/AdminPanel.vue';
import firebase from 'firebase/app';

export default {
  components: {
    LoginForm,
    AdminPanel,
  },
  data() {
    return {
      authenticated: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) =>{
      this.authenticated = !!user;
    });
  },
};
</script>
