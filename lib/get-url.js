'use strict';

module.exports = json => {
  return json.slug ? `https://www.workingnomads.co/jobs/${json.slug}` : null;
};
