'use strict';

const defaultsDeep = require('lodash/defaultsDeep');

const getGotOptions = require('./lib/get-got-options');
const fetch = require('./lib/fetch');

const ADAPTER_ENDPOINT = 'https://www.workingnomads.co/jobsapi/job/_search';

module.exports = options => {
  options = defaultsDeep({}, options, {
    endpoint: ADAPTER_ENDPOINT,
    gotOptions: getGotOptions()
  });

  return fetch(options)
    .catch(console.error);
};
