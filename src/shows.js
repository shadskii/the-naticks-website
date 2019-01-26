
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
  new Event('January 26th', 'Whalers Brewing Company', 'Wakefield, RI', 'Full band set at 8:00PM'),
  new Event('January 27th', 'Jamestown Library', 'Jamestown, RI', 'Full band set from 3:00PM to 4:30PM'),
  new Event('January 31st', 'Pumphouse Music Works', 'Wakefield, RI', 'Full band set, details TBA'),
  new Event('February 8th', 'Parlor Bar and Kitchen', 'Newport, RI', 'Acoustic set, details TBA'),
  new Event('February 16th', 'The Guild', 'Pawtucket, RI', 'Acoustic set from 7:00PM to 9:00PM'),
  new Event('February 22nd', 'The Pub', 'Matunuck, RI', 'Acoustic set from 8:30PM to 12:00AM'),
  new Event('March 16th', 'Ocean Mist', 'Matunuck, RI', 'Live band set from 9:30PM to 1:00AM'),
];
