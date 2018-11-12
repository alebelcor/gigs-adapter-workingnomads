'use strict';

module.exports = json => {
  return json.hits.hits.filter(hit => {
    return !hit._source.expired;
  }).map(hit => {
    return hit._source;
  });
};
