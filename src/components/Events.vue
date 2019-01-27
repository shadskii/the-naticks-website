<template>
  <div>
    <h1 class="display-1 font-weight-bold">Upcoming Events</h1>
    <v-flex
      v-for="event in events"
      :key="event.date">
      <v-layout row >
        <span
          v-if="event.date.length < 4"
          class="display-3 font-weight-black px-2">
          &nbsp;
        </span>
        <span class="display-3 font-weight-black pr-3">
          {{ event.date }}
        </span>

        <v-layout
          column
          class="pt-3">
          <v-flex>
            {{ `${event.venue} - ${event.location}` }}
          </v-flex>
          <v-flex>
            {{ event.description }}
          </v-flex>
        </v-layout>
      </v-layout>
    </v-flex>
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
