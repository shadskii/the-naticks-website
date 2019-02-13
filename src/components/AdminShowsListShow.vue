<template>
  <v-expansion-panel-content
    v-model="panel"
    hide-actions
  >
    <div
      slot="header"
    >
      <h1
        class="font-weight-bold headline"
      >
        {{ show.date }}
      </h1>
      <h1
        class="font-weight-bold headline"
        v-text="show.venue"
      />
      <div
        class="font-weight-light title "
        v-text="show.description"
      />
    </div>
    <div>
      <v-card-actions>
        <v-btn
          color="primary"
          flat
          @click="deleteShow()">
          delete
        </v-btn>
      </v-card-actions>
    </div>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
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

  </v-expansion-panel-content>
</template>

<script>
import {db} from '@/firebase';

export default {
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      panel: false,
      num: 1,
      dialog: false,
    };
  },
  methods: {
    deleteShow() {
      this.dialog = true;
    },
    deleteForReal() {
      this.dialog = false;
      db.collection('shows')
          .doc(this.show.id)
          .delete();
    },
  },
};
</script>
