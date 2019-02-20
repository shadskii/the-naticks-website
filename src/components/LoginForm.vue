<template>
  <v-card @keydown.enter="login()">
    <v-card-title class="headline">Login</v-card-title>
    <v-form>
      <v-card-text>
        <v-text-field
          v-model="email"
          type="text"
          autocomplete="email"
          label="Email"
          @click:append="show = !show"/>
        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
          :type="show ? 'text' : 'password'"
          autocomplete="current-password"
          label="Password"
          @click:append="show = !show"
        />

      </v-card-text>
      <v-divider class="mt-5"/>
      <v-card-actions>
        <v-spacer />
        <v-btn
          flat
          @click="login()">
          login
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
import firebase from 'firebase/app';
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      show: false,
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
    };
  },
  methods: {
    login() {
      firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .catch((err) => {
            alert(err.message);
          });
    },
  },
};
</script>
