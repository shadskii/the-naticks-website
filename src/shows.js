
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

export default [
  new Event('November 23rd', 'The Pub', 'Matunuck, RI', 'Acoustic set from 8:30PM to 12:30PM'),
  new Event('November 24th', 'The Guild', 'Pawtucket, RI', 'Acoustic set from 4:30 to 6:30'),
  new Event('December 8th', 'Kai Bar', 'East Greenwwich, RI', 'Acoustic set from 8:00PM to 11:00PM'),
  new Event('January 26th', 'Whalers Brewing Company', 'Wakefield, RI', 'Full band set at 8:00PM'),
];
