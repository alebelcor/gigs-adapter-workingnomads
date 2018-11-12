'use strict';

const gigs = require('gigs');

const getUrl = require('./get-url');
const getLocation = require('./get-location');
const getIsFullTime = require('./get-is-full-time');
const getPublishedAt = require('./get-published-at');

const ADAPTER_SOURCE = 'workingnomads';
const ADAPTER_SOURCE_URL = 'https://www.workingnomads.co';

module.exports = json => {
  return json.map(job => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL, // eslint-disable-line camelcase
      title: job.title,
      description: job.description,
      url: getUrl(job),
      company_name: job.company, // eslint-disable-line camelcase
      location: getLocation(job),
      full_time: getIsFullTime(job), // eslint-disable-line camelcase
      remote: true,
      published_at: getPublishedAt(job) // eslint-disable-line camelcase
    });
  });
};
