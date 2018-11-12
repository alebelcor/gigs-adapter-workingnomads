'use strict';

module.exports = json => {
  return json.location_base ? json.location_base : null;
};
