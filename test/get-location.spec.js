'use strict';

import test from 'ava';

import getlocation from '../lib/get-location';

test('it should return null', t => {
  t.deepEqual(null, getlocation({}));
  t.deepEqual(null, getlocation({location_base: ''})); // eslint-disable-line camelcase
});

test('it should return the location', t => {
  t.deepEqual('foo', getlocation({location_base: 'foo'})); // eslint-disable-line camelcase
});
