<template>
  <v-slide-y-transition hide-on-leave>
    <div
      v-if="submitted"
      class="mx-auto">

      <v-img
        :src="require('@/assets/logo.png')"
        contain
        class="mb-2"
        height="100"/>
      <h3 class="title font-weight-bold">
        Thanks for reaching out!
      </h3>
      <h3 class="subheading font-weight-light">
        We'll get back to you as soon as we can!
      </h3>
      <v-btn>Back to FaNaticks page</v-btn>
    </div>
    <v-card
      v-else
      class="mx-auto">
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>Sign up for the FaNaticks mailing list or send us a love note!</span>
      </v-card-title>
      <v-divider />

      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="nameRules"
            label="Name"
            type="text"
            required
          />
          <v-text-field
            ref="phone"
            v-model="phone"
            label="Phone"
            type="phone"
            placeholder="(###) ###-####"
          />
          <v-text-field
            ref="email"
            v-model="email"
            :rules="emailRules"
            label="Email"
            type="text"
            required
          />
          <v-textarea
            v-model="message"
            :rules="commentsRules"
            label="Message"
            required
          />
        </v-form>
      </v-card-text>

      <v-divider/>

      <v-card-actions>
        <v-spacer/>
        <v-btn
          color="primary"
          flat
          @click="submit()"
        >
          <span >submit</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-slide-y-transition>
</template>
<script>
import {db} from '@/firebase';
import firebase from 'firebase/app';

export default {
  data() {
    return {
      submitted: false,
      valid: false,
      name: '',
      phone: '',
      dates: [],
      nameRules: [
        (v) => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

      message: '',
    };
  },
  computed: {
    form() {
      return {
        name: this.name,
        email: this.email,
        phone: this.phone,
        info: this.message,
      };
    },
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.submitted = true;
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        db.collection('bookings').add({time: timestamp, ...this.form});
      }
    },
  },
};
</script>
