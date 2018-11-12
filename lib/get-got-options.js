'use strict';

const pkg = require('../package.json');

module.exports = () => {
  return {
    json: true,
    headers: {
      'user-agent': pkg.repository.url
    },
    query: {
      from: 0,
      size: 100,
      sort: 'pub_date:desc',
      _source: 'company,description,expired,location_base,position_type,pub_date,slug,title'
    }
  };
};
