<template>
  <v-dialog
    v-model="inner"
    width="500">
    <v-card>
      <v-card-title class="headline">
        Add Show
      </v-card-title>
      <v-card-text>

        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            ref="date"
            slot="activator"
            v-model="date"
            :rules="[rules.required]"
            label="Date"
            readonly
          />
          <v-date-picker
            v-model="date"
            no-title
            scrollable>
            <v-spacer/>
            <v-btn
              flat
              color="primary"
              @click="menu = !menu"
            >Cancel</v-btn>
            <v-btn
              flat
              color="primary"
              @click="dateOk(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
        <v-text-field
          ref="venue"
          v-model="venue"
          :rules="[rules.required]"
          label="Venue Name"/>
        <v-text-field
          ref="link"
          v-model="link"
          :rules="[rules.validLink, rules.required]"
          label="Link to Venue"/>
        <v-text-field
          ref="location"
          v-model="location"
          :rules="[rules.required]"
          label="Location"/>
        <v-textarea
          ref="description"
          v-model="description"
          :rules="[rules.required]"
          label="Description"
          counter/>

      </v-card-text>
      <v-card-actions>
        <v-btn
          flat
          @click="clear()"
        > clear</v-btn>
        <v-spacer />
        <v-btn
          flat
          color="primary"
          @click="submit()"> add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import {db} from '@/firebase';
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      inner: false,
      menu: false,
      date: null,
      venue: '',
      link: '',
      location: '',
      description: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        validLink: (v) => /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/.test(v) || 'Link must be in the form http(s)://website.com',

      },
    };
  },
  computed: {
    form() {
      return {
        date: `${this.date} EST`,
        venue: this.venue,
        location: this.location,
        description: this.description,
        link: this.link,
      };
    },
  },
  watch: {
    value(nv) {
      this.inner = nv;
      if (nv) {
        Object.keys(this.form).forEach((f) => {
          this.$refs[f].reset();
        });
      }
    },
    menu(nv) {
      if (!nv) {
        this.$refs.date.validate(true);
      }
    },
    inner(nv) {
      this.$emit('input', nv);
    },
  },
  methods: {
    submit() {
      let formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) {
          formHasErrors = true;
        }
        this.$refs[f].validate(true);
      });
      if (!formHasErrors) {
        db.collection('shows')
            .add(this.form)
            .then((v) => this.clear());
      }
    },
    dateOk(date) {
      this.$refs.date.validate(true);
      this.$refs.menu.save(date);
    },
    clear() {
      this.inner= false;
      this.date = null;
      this.venue = '';
      this.link = '';
      this.location = '';
      this.description = '';
    },
  },
};
</script>
