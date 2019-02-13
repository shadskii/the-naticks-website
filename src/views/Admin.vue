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
      <v-flex
        v-if="authenticated"
        xs9>
        <admin-shows-list />
      </v-flex>
      <v-flex
        v-if="authenticated"
        xs8>
        <admin-shows-add />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import LoginForm from '@/components/LoginForm.vue';
import AdminShowsList from '@/components/AdminShowsList.vue';
import AdminPanel from '@/components/AdminPanel.vue';
import AdminShowsAdd from '@/components/AdminShowsAdd.vue';
import firebase from 'firebase/app';

export default {
  components: {
    LoginForm,
    AdminPanel,
    AdminShowsList,
    AdminShowsAdd,
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
