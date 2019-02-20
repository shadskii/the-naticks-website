<template>
  <v-container>
    <v-layout>
      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="(item,i) in bookings"
          :key="item.email + item.info"
        >
          <div slot="header">
            <h1 class="body-2 font-weight-thin">{{ item.time.seconds | timeDate }}</h1>
            <h1 class="title">{{ item.name }}</h1>
            <h1 class="subheading font-weight-light">{{ item.phone }} - {{ item.email }}</h1>
          </div>
          <v-card>
            <v-card-text>
              {{ item.info }}
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout>
  </v-container>
</template>
<script>
import {db} from '@/firebase';

export default {
  name: 'AdminBookings',
  filters: {
    timeDate(seconds) {
      const date = new Date(1000 * seconds);
      return date.toDateString() + ' ' + date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
    },
  },
  data() {
    return {
      bookings: [],
    };
  },
  firestore() {
    return {
      bookings: db.collection('bookings').orderBy('time'),
    };
  },
};
</script>
