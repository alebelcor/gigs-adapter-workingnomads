'use strict';

const moment = require('moment');

module.exports = json => {
  let publishedAt = null;

  if (json.pub_date) {
    publishedAt = moment.utc(json.pub_date, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('YYYY-MM-DD');
  }

  return publishedAt;
};
