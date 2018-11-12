'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';

import getGotOptions from '../lib/get-got-options';

test('it should return an object', t => {
  const pkg = require('../package.json');

  const gotOptions = getGotOptions();

  t.true(isPlainObj(gotOptions));
  t.true(gotOptions.json);
  t.true(isPlainObj(gotOptions.headers));
  t.deepEqual({'user-agent': pkg.repository.url}, gotOptions.headers);
  t.true(isPlainObj(gotOptions.query));
  t.deepEqual({from: 0, size: 100, sort: 'pub_date:desc', _source: 'company,description,expired,location_base,position_type,pub_date,slug,title'}, gotOptions.query);
});
