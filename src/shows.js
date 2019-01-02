
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
  new Event('January 11th', 'Kai Bar', 'East Greenwwich, RI', 'Acoustic set from 8:00PM to 11:00PM'),
  new Event('January 16th', 'Trillium Brewery', 'Canton, MA', 'Details TBA'),
  new Event('January 18th', 'Parlor Bar and Kitchen', 'Newport, RI', 'Details TBA'),
  new Event('January 25th', 'The Pub', 'Matunuck, RI', 'Acoustic set from 8:00PM to 12:00AM'),
  new Event('January 26th', 'Whalers Brewing Company', 'Wakefield, RI', 'Full band set at 8:00PM'),
  new Event('January 27th', 'Jamestown Library', 'Jamestown, RI', 'Full band set from 3:00PM to 4:30PM'),
  new Event('January 31st', 'Pumphouse Mustic Works', 'Wakefield, RI', 'Full band set, details TBA'),
  new Event('February 8th', 'Parlor Bar and Kitchen', 'Newport, RI', 'Acoustic set, details TBA'),
];
