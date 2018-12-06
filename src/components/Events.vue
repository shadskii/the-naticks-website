<template>
  <div>
    <h1 class="headline font-weight-light">Upcoming Events</h1>
    <v-list three-line>
      <v-list-tile
        v-for="event in events"
        :key="event.date"
        class="mb-2"
      >
        <v-list-tile-content>
          <v-list-tile-title class="font-weight-bold">
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
