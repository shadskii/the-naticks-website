
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
  new Event('2.8', 'Parlor Bar and Kitchen', 'Newport, RI', 'Acoustic set, details TBA'),
  new Event('2.16', 'The Guild', 'Pawtucket, RI', 'Acoustic set from 7:00PM to 9:00PM'),
  new Event('2.22', 'The Pub', 'Matunuck, RI', 'Acoustic set from 8:30PM to 12:00AM'),
  new Event('3.16', 'Ocean Mist', 'Matunuck, RI', 'Live band set from 9:30PM to 1:00AM'),
];
