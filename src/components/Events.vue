<template>
  <div>
    <h1 class="headline font-weight-light">Upcoming Events</h1>
    <v-card>
      <!-- <v-card-title>

    </v-card-title>
    <v-divider /> -->
      <v-list>
        <v-list-tile
          v-for="event in events"
          :key="event.date"
          class="mb-2"
          two-line
        >
          <v-list-tile-content>
            <v-list-tile-title>
              {{ event.date }}
            </v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">
              {{ `${event.venue} - ${event.location}` }}
            </v-list-tile-sub-title>
            <v-list-tile-sub-title>
              {{ event.description }}
            </v-list-tile-sub-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import shows from '../shows';

export default {
  data() {
    return {
      events: shows,
    };
  },
};
</script>
<style scoped>

</style>
