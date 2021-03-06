const { getObjectId } = require('../../helpers/index');
const moment = require('moment');

const appointments = [
  {
    id: getObjectId('abc123'),
    appointmentId: 'abc123',
    locationId: '3747',
    bioKitId: 'asd123',
    bil: 'aer123',
    date: moment()
      .startOf('week')
      .add(15, 'days')
      .hours(8)
      .toDate(),
    dateSubmitted: moment().toDate(),
    cancelledByClient: false,
    cancelledByLocation: false
  },
  {
    id: getObjectId('huy668'),
    appointmentId: 'huy668',
    locationId: '3747',
    bioKitId: 'asd123',
    bil: 'ggg666',
    date: moment()
      .startOf('week')
      .add(15, 'days')
      .hours(8)
      .minutes(15)
      .toDate(),
    dateSubmitted: moment().toDate(),
    cancelledByClient: false,
    cancelledByLocation: false
  },
  {
    id: getObjectId('ret688'),
    appointmentId: 'ret688',
    locationId: '3747',
    bioKitId: 'asd123',
    bil: 'gye429',
    date: moment()
      .startOf('week')
      .add(15, 'days')
      .hours(8)
      .minutes(30)
      .toDate(),
    dateSubmitted: moment().toDate(),
    cancelledByClient: false,
    cancelledByLocation: false
  }
];

module.exports = appointments;
