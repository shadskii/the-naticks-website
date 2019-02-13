<template>
  <v-container grid-list-md>
    <v-layout
      wrap
      row
    >
      <v-flex text-xs-left>
        <h1 class="display-1">Shows</h1>
      </v-flex>
      <v-expansion-panel popout>
        <admin-shows-list-show
          v-for="show in shows"
          :key="show.venue"
          :show="show"
        />
      </v-expansion-panel>
    </v-layout>
  </v-container>
</template>
<script>
import AdminShowsListShow from './AdminShowsListShow';
import {db} from '@/firebase';

export default {
  components: {
    AdminShowsListShow,
  },
  data() {
    return {
      shows: [],
    };
  },
  firestore() {
    return {
      shows: db.collection('shows'),
    };
  },
};
</script>
