<template>
  <router-view />
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
