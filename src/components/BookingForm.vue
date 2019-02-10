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
    </div>
    <v-card
      v-else
      class="mx-auto">
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <span class="grey--text text--lighten-1">{{ step }} / {{ 4 }}</span>
      </v-card-title>
      <v-divider />
      <v-window
        v-model="step"
        touchless
      >
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              type="text"
              required
            />
            <v-text-field
              v-model="phone"
              label="Phone"
              type="phone"
              mask="phone"
              placeholder="(###) ###-####"
              required
            />
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              type="text"
              required
            />
            <span class="body-2 grey--text text--lighten-1">
              This is the email we will use to contact you.
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="2">
          <div class="pa-3 text-xs-center">
            <v-text-field
              v-model="location"
              :rules="locationRules"
              label="Venue"
              type="text"
              required
            />
            <v-textarea
              v-model="message"
              label="Tell us about what you need"
            />
          </div>
        </v-window-item>

        <v-window-item :value="3">
          <v-card-text class="text-xs-left">
            <h3
              class="body-2 grey--text text-lighten-1">Dates</h3>
            <h3
              v-if="dates.length === 0"
              class="display-1">&nbsp;
            </h3>
            <v-fade-transition
              group
              hide-on-leave>
              <v-chip
                v-for="d in dates"
                :key="d"
                close
                @input="remove(d)"
              >
                <strong>{{ d }}</strong>&nbsp;
              </v-chip>
            </v-fade-transition>
            <v-divider />
            <v-date-picker
              v-model="dates"
              color="primary"
              multiple
              no-title
              full-width
              scrollable
            />
          </v-card-text>
        </v-window-item>


        <!-- Submission page -->
        <v-window-item :value="4">
          <div class="pa-3 text-xs-left">
            <h3 class="subheading font-weight-regular mb-2">{{ location }}</h3>
            <span
              v-for="d in dates"
              :key="d"
              class="subheading font-weight-regular pr-3">
              {{ d }}
            </span>
            <v-divider/>
            <h3 class="body-2 font-weight-thin mb-2">{{ message }}</h3>
            <h3 class="subheading font-weight-light mb-2">{{ name }} - <span class="font-weight-regular">{{ email }}</span></h3>

          </div>
          <div class="text-xs-right pr-2">
            <span class="caption grey--text">Hit submit to contact the band</span>
          </div>
        </v-window-item>
      </v-window>

      <v-divider/>

      <v-card-actions>
        <v-btn
          :disabled="step === 1"
          flat
          @click="step--"
        >
          Back
        </v-btn>
        <v-spacer/>
        <v-btn
          color="primary"
          depressed
          @click="next()"
        >
          <span v-text="(step < 4) ? 'Next' : 'Submit'" />
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-slide-y-transition>
</template>
<script>
import {db} from '@/firebase';

export default {
  data() {
    return {
      valid: true,
      submitted: false,
      step: 1,
      menu: false,
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
      location: '',
      locationRules: [
        (v) => !!v || 'Location is required',
      ],
      message: '',
      titles: [
        'Who are you?',
        'What are you looking for?',
        'When do you need us?',
        'Drop us a line!',
      ],
    };
  },
  computed: {
    currentTitle() {
      return this.titles[this.step-1];
    },
    form() {
      return {
        name: this.name,
        email: this.email,
        phone: this.phone,
        location: this.location,
        info: this.message,
        dates: this.dates,
      };
    },

  },
  methods: {
    submit() {
      this.submitted = true;
      db.collection('bookings').add(this.form);
    },
    next() {
      if (this.step < 4) {
        this.step++;
      } else {
        this.submit();
      }
    },
    remove(item) {
      this.dates.splice(this.dates.indexOf(item), 1);
      this.dates = [...this.dates];
    },
  },
};
</script>
