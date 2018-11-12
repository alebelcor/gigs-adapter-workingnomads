'use strict';

module.exports = options => {
  const nextOptions = {...options};

  nextOptions.gotOptions.query.from += nextOptions.gotOptions.query.size;

  return nextOptions;
};
