
/**
 * An event to be displayed
 */
class Event {
  /**
       * @param {String} date human readable date.
       * @param {String} venue venue name
       * @param {String} location general location
       * @param {String} description description of event.
       * @param {String} link Link to event.
       */
  constructor(date, venue, location, description, link) {
    this.date = date;
    this.venue = venue;
    this.location= location;
    this.description = description;
    this.link = link;
  }
}

export default [
  new Event('2.16', 'The Guild', 'Pawtucket, RI', 'Acoustic set from 7:00PM to 9:00PM', 'http://theguildri.com/'),
  new Event('2.22', 'The Pub', 'Matunuck, RI', 'Acoustic set from 8:30PM to 12:00AM', 'https://www.thepubmtk.com/'),
  new Event('3.13', 'Trillium Brewing Company', 'Canton, MA', 'Acoustic band set from 6:00PM to 8:00PM', 'https://www.trilliumbrewing.com/canton/'),
  new Event('3.16', 'Ocean Mist', 'Matunuck, RI', 'Live band set from 9:30PM to 1:00AM', 'https://www.oceanmist.net/'),
];
