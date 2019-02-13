<template>
  <div>
    <v-subheader >Current Shows</v-subheader>
    <v-list
      three-line
      subheader>

      <v-list-tile
        v-for="show in shows"
        :key="show.date+show.description"
        @click="()=>''">
        <v-list-tile-content>
          <v-list-tile-title>
            {{ show.date }}
          </v-list-tile-title>
          <v-list-tile-sub-title>{{ show.venue }} - {{ show.location }} - {{ show.link }}</v-list-tile-sub-title>
          <v-list-tile-sub-title>{{ show.description }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn
            icon
            ripple
            @click="deleteShow(show.id)">
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <v-dialog
      v-model="dialog"
      width="400">
      <v-card>
        <v-card-title class="headline">Delete this event?</v-card-title>

        <v-card-actions>
          <v-spacer/>

          <v-btn
            color="grey darken-1"
            flat="flat"
            @click="dialog = false"
          >
            lol jk
          </v-btn>
          <v-btn
            color="red darken-1"
            flat="flat"
            @click="deleteForReal()"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
      dialog: false,
      selectedShow: null,
      shows: [],
    };
  },
  firestore() {
    return {
      shows: db.collection('shows').orderBy('date'),
    };
  },
  methods: {
    deleteShow(id) {
      this.selectedShow= id;
      this.dialog = true;
    },
    deleteForReal() {
      this.dialog = false;
      db.collection('shows')
          .doc(this.selectedShow)
          .delete();
    },
  },
};
</script>
