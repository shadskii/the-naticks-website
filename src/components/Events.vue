<template>
  <v-card>
    <v-card-title>
      <h1>Upcoming Events</h1>
    </v-card-title>
    <v-divider />
    <v-list>
      <v-list-tile
        v-for="event in events"
        :key="event.date"
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
</template>
<script>

/**
 * An event to be displayed
 */
class Event {
  /**
     * @param {String} date human readable date.
     * @param {String} venue venue name
     * @param {String} location general location
     * @param {String} description description of event.
     */
  constructor(date, venue, location, description) {
    this.date = date;
    this.venue = venue;
    this.location= location;
    this.description = description;
  }
}

export default {
  data() {
    return {
      events: [
        new Event('November 10th', 'Parlor Bar and Kitchen', 'Newport, RI', 'Full band set at 9:30PM'),
        new Event('November 24th', 'The Guild', 'Pawtucket, RI', 'Acoustic set from 4:30 to 6:30'),
        new Event('January 26th', 'Whalers Brewing Company', 'Wakefield, RI', 'Full band set at 8:00PM'),
      ],
    };
  },
};
</script>
<style scoped>

</style>
