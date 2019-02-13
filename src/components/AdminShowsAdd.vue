<template>
  <v-card>
    <v-card-title class="headline">
      Add Show
    </v-card-title>
    <v-card-text>

      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
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
            @click="menu = false">Cancel</v-btn>
          <v-btn
            flat
            color="primary"
            @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
      <v-text-field
        v-model="venue"
        label="Venue Name"/>
      <v-text-field
        v-model="link"
        label="Link to Venue"/>
      <v-text-field
        v-model="location"
        label="Location"/>
      <v-textarea
        v-model="description"
        label="Description"
        counter/>

    </v-card-text>
    <v-card-actions>
      <v-btn
        flat
      > clear</v-btn>
      <v-spacer />
      <v-btn
        flat
        color="primary"
        @click="submit()"> add</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {db} from '@/firebase';
export default {
  data() {
    return {
      menu: false,
      date: null,
      venue: '',
      link: '',
      location: '',
      description: '',
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
  methods: {
    submit() {
      db.collection('shows')
          .add(this.form)
          .then((v) => this.clear());
    },
    clear() {
      this.date = null;
      this.venue = '';
      this.link = '';
      this.location = '';
      this.description = '';
    },
  },
};
</script>
