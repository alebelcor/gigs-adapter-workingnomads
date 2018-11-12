'use strict';

const got = require('got');
const flattenDeep = require('lodash/flattenDeep');

const getResponseBody = require('./get-response-body');
const getFilteredResponse = require('./get-filtered-response');
const getGigs = require('./get-gigs');
const getNextOptions = require('./get-next-options');

const results = [];

module.exports = async function fetch(options) {
  const response = await got.get(options.endpoint, options.gotOptions);
  const responseBody = getResponseBody(response);
  const json = getFilteredResponse(responseBody);

  if (json.length > 0) {
    results.push(getGigs(json));
    return fetch(getNextOptions(options));
  }

  return flattenDeep(results);
};
